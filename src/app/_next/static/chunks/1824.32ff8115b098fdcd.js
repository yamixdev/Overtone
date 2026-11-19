(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1824],
    {
        202: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => n });
            var i = a(39499),
                l = a(29993);
            let n = (e) => {
                let { format: t, onSuccess: a, onError: n } = e;
                return {
                    startClipboardWrite: (0, l.c)(() => {
                        let e = () => void 0,
                            l = () => void 0,
                            s = !1,
                            r = new Promise((t, a) => {
                                ((e = t), (l = a));
                            }),
                            o = (async (e) => {
                                try {
                                    (await window.navigator.clipboard.write([e]), null == a || a());
                                } catch (e) {
                                    s || null == n || n(e);
                                }
                            })(new ClipboardItem({ 'text/plain': (async () => new Blob([await r], { type: 'text/plain' }))() }));
                        return {
                            copy: (a) => (e(t(a)), o),
                            cancel: () => {
                                ((s = !0), l(new i.t('Clipboard write cancelled')));
                            },
                        };
                    }),
                };
            };
        },
        408: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => c });
            var i = a(45144),
                l = a(47618),
                n = a(53548),
                s = a(49176),
                r = a(9519);
            class o extends i.uN {}
            (0, r._)(o, 'activators', [
                {
                    eventName: 'onKeyDown',
                    handler: (e) => {
                        let { nativeEvent: t } = e;
                        return (!(t.target instanceof HTMLElement) || 'button' !== t.target.tagName.toLowerCase()) && t.code === s.v.ENTER;
                    },
                },
            ]);
            let c = () => {
                let [e, t] = (0, n.useState)(null),
                    a = (0, n.useCallback)((e) => {
                        let { active: a } = e;
                        t(a.id);
                    }, []);
                return {
                    activeId: e,
                    handleDragStart: a,
                    handleDragCancel: (0, n.useCallback)(() => {
                        t(null);
                    }, []),
                    sensors: (0, i.FR)(
                        (0, i.MS)(i.cA, { activationConstraint: { distance: { y: 1 }, tolerance: 5 } }),
                        (0, i.MS)(i.IG, { activationConstraint: { delay: 250, tolerance: 5 } }),
                        (0, i.MS)(o, { coordinateGetter: l.JR, keyboardCodes: { start: [s.v.ENTER], cancel: [s.v.ESCAPE], end: [s.v.ENTER] } }),
                    ),
                };
            };
        },
        639: (e) => {
            e.exports = { icon: 'NotificationHtmlCodeCopied_icon__qJMbi', message: 'NotificationHtmlCodeCopied_message__ivRvX' };
        },
        776: (e) => {
            e.exports = {
                root: 'TrackModalLyrics_root__JABJp',
                title: 'TrackModalLyrics_title__zjWl_',
                button: 'TrackModalLyrics_button__YqxIm',
                lyrics: 'TrackModalLyrics_lyrics__naoEF',
            };
        },
        1401: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => c });
            var i = a(88800),
                l = a(52300),
                n = a(15077),
                s = a(42729),
                r = a(14307),
                o = a.n(r);
            let c = (e) => {
                let { vibe: t, closeToast: a } = e;
                return (0, i.jsx)(s.O, {
                    className: o().root,
                    closeToast: a,
                    entityVariant: n.c.VIBE,
                    customCover: (0, i.jsx)(l.I, { variant: 'vibe', size: 'xxs' }),
                    collectionUrl: '/collection',
                    isLiked: t.isLiked,
                });
            };
        },
        1425: (e) => {
            e.exports = { image: 'FamilyInviteStepSuccess_image__kDBnc', image_mobile: 'FamilyInviteStepSuccess_image_mobile__PyiXK' };
        },
        3005: (e) => {
            e.exports = {
                root: 'Paywall_root__XE_NC',
                section: 'Paywall_section__Y30nd',
                section_faq: 'Paywall_section_faq__43qaB',
                overlayScroll_desktop: 'Paywall_overlayScroll_desktop__P46WF',
            };
        },
        3146: (e) => {
            e.exports = {
                root: 'TopSectionRUFamilyOffer_root__ttMJK',
                main: 'TopSectionRUFamilyOffer_main___eUj8',
                logo: 'TopSectionRUFamilyOffer_logo__p5tOO',
                logoWrap: 'TopSectionRUFamilyOffer_logoWrap__6UZ9F',
                moreInfoChildren: 'TopSectionRUFamilyOffer_moreInfoChildren__R1KUC',
                title: 'TopSectionRUFamilyOffer_title__ZQb6e',
                subtitle: 'TopSectionRUFamilyOffer_subtitle__kADi2',
                video: 'TopSectionRUFamilyOffer_video__qI7Fa',
                buySubscriptionBlock: 'TopSectionRUFamilyOffer_buySubscriptionBlock___9pDB',
                textBlock: 'TopSectionRUFamilyOffer_textBlock__O_tTl',
                goHomeLink: 'TopSectionRUFamilyOffer_goHomeLink__dMPtg',
            };
        },
        4795: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => n });
            var i = a(72288),
                l = a(97956);
            let n = () => {
                var e, t;
                let {
                    user: a,
                    settings: { browserInfo: n },
                    experiments: s,
                } = (0, i.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    a.isAuthorized &&
                    !a.hasPlus &&
                    (null == (t = s.getExperiment(l.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        4826: (e) => {
            e.exports = { root: 'DisclaimerModal_root__l96Bq', overlay: 'DisclaimerModal_overlay__5w3NO', content: 'DisclaimerModal_content__rPx5x' };
        },
        5045: (e) => {
            e.exports = {
                root: 'MainSectionDesktop_root__MjgTL',
                headingContainer: 'MainSectionDesktop_headingContainer__IaoRT',
                contentContainer: 'MainSectionDesktop_contentContainer__L4OlR',
            };
        },
        5276: (e) => {
            e.exports = { root: 'SyncLyrics_root__6KZg4', content: 'SyncLyrics_content__lbkWP' };
        },
        5295: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i = a(54683);
            let l = (e, t, a) => {
                let l = null != t ? t : i.wT,
                    n = null != a ? a : i.by,
                    s = (0, i.de)((0, i.aq)(e), l, n),
                    r = Math.round(255 * s[0]),
                    o = Math.round(255 * s[1]),
                    c = Math.round(255 * s[2]);
                return 'rgb('.concat(r, ', ').concat(o, ', ').concat(c, ')');
            };
        },
        5706: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => l });
            var i = a(54667);
            let l = (e) => e === i.S.TRACK || e === i.S.MUSIC;
        },
        6133: (e) => {
            e.exports = {
                content: 'MusicSectionDesktop_content__uCWAp',
                card: 'MusicSectionDesktop_card__YurZs',
                logo_ru: 'MusicSectionDesktop_logo_ru__Tiwfx',
                logo_en: 'MusicSectionDesktop_logo_en__dbYCi',
            };
        },
        6252: (e) => {
            e.exports = {
                icon: 'SyncLyricsButton_icon__m0Gdk',
                icon_active: 'SyncLyricsButton_icon_active__6WcWG',
                animation_scaled: 'SyncLyricsButton_animation_scaled__vwsc_',
                scale: 'SyncLyricsButton_scale__FGAYV',
                animation_unscaled: 'SyncLyricsButton_animation_unscaled__eM1Wb',
                unscale: 'SyncLyricsButton_unscale__ceLQu',
            };
        },
        6489: (e) => {
            e.exports = {
                root: 'MultivibeModalTextBlock_root__6narg',
                title: 'MultivibeModalTextBlock_title___y6xs',
                title_withSubtitle: 'MultivibeModalTextBlock_title_withSubtitle__LrAqj',
                subtitle: 'MultivibeModalTextBlock_subtitle__IAqG4',
                description: 'MultivibeModalTextBlock_description__ffMAv',
            };
        },
        6554: (e) => {
            e.exports = { root: 'MainCardMobile_root__AXTwk', image: 'MainCardMobile_image__DZHrE', text: 'MainCardMobile_text__rli4d' };
        },
        6858: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => l });
            var i = a(18593);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Album;
            }
        },
        6930: (e) => {
            e.exports = { root: 'DownloadMobileAppModal_root__nD7fo', content: 'DownloadMobileAppModal_content__4ZW2F' };
        },
        8888: (e) => {
            e.exports = {
                root: 'VideoAd_root__e7gla',
                root_hidden: 'VideoAd_root_hidden__78CPl',
                videoBlock: 'VideoAd_videoBlock__bqNRq',
                video: 'VideoAd_video__j1f_y',
                content: 'VideoAd_content__QroDp',
                close: 'VideoAd_close__sMGlV',
                notifyClose: 'VideoAd_notifyClose__w82mE',
                cover: 'VideoAd_cover__kQwxh',
                important: 'VideoAd_important__VZkA_',
                icon: 'VideoAd_icon__o_Hzn',
                text: 'VideoAd_text__rjKqZ',
            };
        },
        9219: (e) => {
            e.exports = {
                root: 'MainSectionMobile_root__l2R5l',
                headingContainer: 'MainSectionMobile_headingContainer__6mJvx',
                contentContainer: 'MainSectionMobile_contentContainer__vmaD5',
            };
        },
        10782: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                artistCaption: 'ClipMeta_artistCaption__8RrCD',
                link: 'ClipMeta_link__6QadT',
                root: 'ClipMeta_root__pqZ6s',
                root_withSecondaryColor: 'ClipMeta_root_withSecondaryColor__va_JM',
                explicitMark: 'ClipMeta_explicitMark__TmCzw',
                metaContainer: 'ClipMeta_metaContainer__023Bj',
                titleContainer: 'ClipMeta_titleContainer__dtIm1',
                title: 'ClipMeta_title__L6Nwk',
            };
        },
        10935: (e) => {
            e.exports = {
                content_ru: 'KinopoiskSectionMobile_content_ru__CCtkX',
                content_by: 'KinopoiskSectionMobile_content_by__XjQaB',
                card1: 'KinopoiskSectionMobile_card1__JCIyK',
                card2: 'KinopoiskSectionMobile_card2__jTtnr',
                card3: 'KinopoiskSectionMobile_card3__wTJCh',
                card4: 'KinopoiskSectionMobile_card4__wi_RO',
                card4_by: 'KinopoiskSectionMobile_card4_by__8ehWE',
                logo_ru: 'KinopoiskSectionMobile_logo_ru__8alc5',
                logo_en: 'KinopoiskSectionMobile_logo_en__A673z',
            };
        },
        11028: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            var i = (function (e) {
                return (
                    (e.SUBSCRIPTION_IS_NOT_AVAILABLE = 'SUBSCRIPTION_IS_NOT_AVAILABLE'), (e.INVITATION_IS_INVALID = 'INVITATION_IS_INVALID'), (e.UNKNOWN = 'UNKNOWN'), e
                );
            })({});
        },
        11114: (e) => {
            e.exports = {
                root: 'PlayingNow_root__0lQa8',
                textBlock: 'PlayingNow_textBlock___CfRh',
                title: 'PlayingNow_title__82csz',
                subTitle: 'PlayingNow_subTitle__JNJfh',
                link: 'PlayingNow_link__4gLK9',
            };
        },
        11146: (e) => {
            e.exports = { root: 'TrailerTrack_root__0UIP4', root_active: 'TrailerTrack_root_active__F_8Iw' };
        },
        11451: (e) => {
            e.exports = {
                root: 'VideoPlayerBarContainerDesktop_root__Aw4GO',
                root_visible: 'VideoPlayerBarContainerDesktop_root_visible__F_7vs',
                root_withHoveredCarousel: 'VideoPlayerBarContainerDesktop_root_withHoveredCarousel__2gzlW',
                carouselWrapper: 'VideoPlayerBarContainerDesktop_carouselWrapper__HN1rc',
                carousel: 'VideoPlayerBarContainerDesktop_carousel__15RwT',
                carouselBlock: 'VideoPlayerBarContainerDesktop_carouselBlock__8prtL',
                carouselControls: 'VideoPlayerBarContainerDesktop_carouselControls__OwWar',
                clipCardTitle: 'VideoPlayerBarContainerDesktop_clipCardTitle__4wJ1A',
                important: 'VideoPlayerBarContainerDesktop_important__PBP47',
                clipCardArtist: 'VideoPlayerBarContainerDesktop_clipCardArtist__XegP0',
            };
        },
        11888: (e) => {
            e.exports = {
                root: 'PlayQueueDnDDraggableTrack_root__ysTVY',
                dots: 'PlayQueueDnDDraggableTrack_dots__enjOX',
                noHoverItem: 'PlayQueueDnDDraggableTrack_noHoverItem__uHRh1',
            };
        },
        11899: (e, t, a) => {
            'use strict';
            a.d(t, { DQ: () => n, em: () => i, l8: () => l });
            let i = 'WCvtCKnr84oYEPnRuvUo',
                l = 'PAYMENT_COMPLETED',
                n = 500;
        },
        11940: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => r });
            var i = a(88800),
                l = a(35412);
            let n = /\[([^([\])]+)\]\(((?:https?:\/)?\/[^(()\s)]+)\)/g,
                s = /\[[^([\])]+\]\((?:https?:\/)?\/[^(()\s)]+\)/,
                r = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!e || !t) return [];
                    let r = (0, l.ky)(e).toString(),
                        o = [...r.matchAll(n)];
                    return r.split(s).reduce((e, l, n) => {
                        e.push(l);
                        let { 1: s, 2: r } = o[n] || [];
                        return (s && r && e.push((0, i.jsx)(t, { href: r, ...a, children: s })), e);
                    }, []);
                };
        },
        12479: (e) => {
            e.exports = { root: 'InfoBlock_root__2D2Mj', infoTitle: 'InfoBlock_infoTitle___At72', link: 'InfoBlock_link__iA21Q' };
        },
        12708: (e) => {
            e.exports = {
                root: 'Trailer_root__c8eG3',
                header: 'Trailer_header__FBFMi',
                trackShimmer: 'Trailer_trackShimmer__qmCN3',
                albumShimmer: 'Trailer_albumShimmer__8RxuC',
                footer: 'Trailer_footer__POMTS',
            };
        },
        13012: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => l });
            var i = a(19049);
            function l(e, t) {
                var a;
                return (0, i.Y)(e, null != (a = null == t ? void 0 : t.maxLength) ? a : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        13068: (e) => {
            e.exports = {
                root: 'TrailerHeader_root__n8XkZ',
                coverContainer: 'TrailerHeader_coverContainer__4R_jG',
                cover: 'TrailerHeader_cover__G6BRb',
                iconContainer: 'TrailerHeader_iconContainer__QXR64',
                icon: 'TrailerHeader_icon__5T0JT',
                textContainer: 'TrailerHeader_textContainer__LR03v',
                text: 'TrailerHeader_text__BWMLw',
                link: 'TrailerHeader_link__kObd5',
                title: 'TrailerHeader_title__GuIe0',
                playButton: 'TrailerHeader_playButton__MGmhZ',
                playButtonIcon: 'TrailerHeader_playButtonIcon__JFbl_',
                shimmerContainer: 'TrailerHeader_shimmerContainer__cOsas',
                titleShimmer: 'TrailerHeader_titleShimmer__KKn7b',
                descriptionShimmer: 'TrailerHeader_descriptionShimmer__WOlY5',
                share: 'TrailerHeader_share__5lxh7',
            };
        },
        13619: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => o });
            var i = a(88800),
                l = a(65724),
                n = a(52300),
                s = a(30907),
                r = a.n(s);
            let o = (e) => {
                let { isDragging: t, className: a } = e;
                return (0, i.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, l.$)(r().root, { [r().root_active]: t }, a), 'aria-hidden': !0 });
            };
        },
        13797: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        14307: (e) => {
            e.exports = { root: 'NotificationLike_root__DM13k' };
        },
        15230: (e) => {
            e.exports = {
                root: 'TopSectionRU_root__DP9u2',
                main: 'TopSectionRU_main__PbltM',
                logo: 'TopSectionRU_logo__LgT8M',
                moreInfoChildren: 'TopSectionRU_moreInfoChildren__d82Ha',
                title: 'TopSectionRU_title__csPE2',
                services: 'TopSectionRU_services__cmjFp',
                service: 'TopSectionRU_service__Q0dCS',
                serviceLogo: 'TopSectionRU_serviceLogo___Xpo_',
                serviceLabel: 'TopSectionRU_serviceLabel__Q3O8n',
                buySubscriptionBlock: 'TopSectionRU_buySubscriptionBlock__VBGT5',
                goHomeLink: 'TopSectionRU_goHomeLink__zWv2w',
            };
        },
        15426: (e) => {
            e.exports = { root: 'TrackModalAlbum_root__ux7J4', title: 'TrackModalAlbum_title__CtM2_' };
        },
        16501: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = (e) => {
                var t, a;
                return (null == e || null == (t = e[0]) ? void 0 : t.various) ? null : null != (a = null == e ? void 0 : e[0]) ? a : null;
            };
        },
        16521: (e) => {
            e.exports = { topSection: 'PaywallOtherMobile_topSection__Pscnw' };
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
        18340: (e) => {
            e.exports = {
                root: 'FullscreenPlayerDesktopContent_root__tKNGK',
                fullscreenContent: 'FullscreenPlayerDesktopContent_fullscreenContent__Nvety',
                fullscreenContent_enter: 'FullscreenPlayerDesktopContent_fullscreenContent_enter__xMN2Y',
                'enter-fade-fullscreen-content': 'FullscreenPlayerDesktopContent_enter-fade-fullscreen-content__eOCyM',
                fullscreenContent_leave: 'FullscreenPlayerDesktopContent_fullscreenContent_leave__6HeZ_',
                'leave-fade-fullscreen-content': 'FullscreenPlayerDesktopContent_leave-fade-fullscreen-content__kswW5',
                fullscreenContent_withDisabledInsetTransition: 'FullscreenPlayerDesktopContent_fullscreenContent_withDisabledInsetTransition___gd__',
                additionalContent: 'FullscreenPlayerDesktopContent_additionalContent__tuuy7',
                additionalContent_enter: 'FullscreenPlayerDesktopContent_additionalContent_enter__WQmXC',
                additionalContent_enter_active: 'FullscreenPlayerDesktopContent_additionalContent_enter_active__a3nOf',
                'enter-fade-additional-content': 'FullscreenPlayerDesktopContent_enter-fade-additional-content__awk7_',
                additionalContent_exit: 'FullscreenPlayerDesktopContent_additionalContent_exit__aM4Or',
                additionalContent_exit_active: 'FullscreenPlayerDesktopContent_additionalContent_exit_active__vokVE',
                'leave-fade-additional-content': 'FullscreenPlayerDesktopContent_leave-fade-additional-content__dlFhp',
                additionalContent_withDisabledInsetTransition: 'FullscreenPlayerDesktopContent_additionalContent_withDisabledInsetTransition__kvSmh',
                info: 'FullscreenPlayerDesktopContent_info__Dq69p',
                artists: 'FullscreenPlayerDesktopContent_artists__a_2G3',
                nonMusicAuthors: 'FullscreenPlayerDesktopContent_nonMusicAuthors__JhhPY',
                meta: 'FullscreenPlayerDesktopContent_meta__3jDTy',
                title: 'FullscreenPlayerDesktopContent_title__I2JrP',
                meta_isSplitMode: 'FullscreenPlayerDesktopContent_meta_isSplitMode__zPC2S',
                ellipsis: 'FullscreenPlayerDesktopContent_ellipsis__2Qk2b',
                sliderContainer: 'FullscreenPlayerDesktopContent_sliderContainer__FtBZ7',
                slider: 'FullscreenPlayerDesktopContent_slider__FJscl',
                syncLyrics: 'FullscreenPlayerDesktopContent_syncLyrics__6dTfH',
                syncLyricsContent: 'FullscreenPlayerDesktopContent_syncLyricsContent__H_enX',
                syncLyricsLoader: 'FullscreenPlayerDesktopContent_syncLyricsLoader__EQ8o9',
                syncLyricsScroller: 'FullscreenPlayerDesktopContent_syncLyricsScroller__JslVK',
                syncLyricsFooter: 'FullscreenPlayerDesktopContent_syncLyricsFooter__HS8JZ',
                syncLyricsCounter: 'FullscreenPlayerDesktopContent_syncLyricsCounter__CnB_k',
            };
        },
        18486: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => C });
            var i = a(88800),
                l = a(65724),
                n = a(53548),
                s = a(97234),
                r = a(42592),
                o = a(70598),
                c = a(17392),
                d = a(52300),
                u = a(90688),
                _ = a(7555),
                m = a(19994),
                p = a(29504),
                v = a(91292),
                x = a(16782),
                h = a.n(x);
            let y = (e) => {
                    let {
                        className: t,
                        coverUrl: a,
                        labeledForId: x,
                        subTitle: y,
                        title: C,
                        description: g,
                        viewAllActionLink: b,
                        controls: A,
                        titleSize: f = 'm',
                        coverBackgroundColor: T,
                        coverRadius: j = 's',
                        titleClassName: N,
                        titleLineClamp: S,
                        fallbackIconVariant: I,
                        available: k = !0,
                        onViewAllAction: L,
                        titleChildren: E,
                        children: M,
                        headingRef: P,
                        coverContainerClassName: O,
                        headingVariant: w = 'h3',
                        withDescriptionWidthLimit: R = !0,
                        isShimmerVisible: D,
                        isShimmerActive: B,
                        withCover: F,
                        withDescription: U,
                        forwardRef: V,
                        shimmerCoverClassName: z,
                        shouldSendAnalyticsOnLoaded: K,
                        ...H
                    } = e;
                    (0, r.W)({ enabled: !!K });
                    let W = (0, n.useRef)(null),
                        Y = a || F,
                        q = g || U,
                        $ = (0, n.useCallback)(() => {
                            W.current && 'focus' in W.current && W.current.focus();
                        }, []),
                        Q = (0, o.S)(),
                        G = (0, n.useCallback)(() => {
                            L ? L() : Q({ to: s.AppScreen.Link });
                        }, [Q, L]),
                        Z = (0, n.useMemo)(
                            () =>
                                C && b && k
                                    ? (0, i.jsxs)(v.N, {
                                          className: h().title,
                                          containerClassName: h().linkContainer,
                                          textClassName: h().linkText,
                                          icon: (0, i.jsx)(d.I, { className: h().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: b,
                                          onClick: G,
                                          'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(p.DZ, {
                                                  id: x,
                                                  className: (0, l.$)(h().heading, N),
                                                  variant: w,
                                                  size: f,
                                                  weight: 'bold',
                                                  lineClamp: S,
                                                  ref: P,
                                                  children: C,
                                              }),
                                              E,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: h().title,
                                          children: [
                                              (0, i.jsx)(p.DZ, {
                                                  id: x,
                                                  className: (0, l.$)(h().heading, N, { [h().heading_notAvailable]: !k }),
                                                  variant: w,
                                                  size: f,
                                                  weight: 'bold',
                                                  lineClamp: S,
                                                  ref: P,
                                                  'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                                  children: C,
                                              }),
                                              E,
                                          ],
                                      }),
                            [k, G, P, w, x, C, N, S, f, b, E],
                        ),
                        X = (0, n.useMemo)(() => (U && D ? (0, i.jsx)(m.W, { isActive: B, className: h().shimmerDescription }) : g), [U, D, g, B]),
                        J = (0, n.useMemo)(
                            () =>
                                F && D
                                    ? (0, i.jsx)(m.W, { isActive: B, className: (0, l.$)(h().shimmerCover, z), radius: 's' })
                                    : (0, i.jsx)(u._V, {
                                          src: a,
                                          fallbackIconVariant: I,
                                          style: { backgroundColor: T },
                                          className: h().cover,
                                          ref: W,
                                          onClick: $,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': c.S7.BLOCK_HEADER_COVER,
                                      }),
                            [T, a, I, $, B, D, z, F],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(h().root, t),
                        ref: V,
                        ...H,
                        'data-test-id': c.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: h().start,
                                children: [
                                    Y && (0, i.jsx)(_.t, { radius: j, className: (0, l.$)(h().coverContainer, O), children: J }),
                                    (0, i.jsxs)('div', {
                                        className: h().textContainer,
                                        children: [
                                            y,
                                            Z,
                                            q &&
                                                (0, i.jsx)(p.HL, {
                                                    id: ''.concat(x, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: R ? 2 : void 0,
                                                    className: (0, l.$)(h().description, { [h().description_widthLimit]: R }),
                                                    'data-test-id': c.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: X,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            A || M,
                        ],
                    });
                },
                C = (0, n.forwardRef)((e, t) => (0, i.jsx)(y, { forwardRef: t, ...e }));
        },
        18888: (e) => {
            e.exports = {
                bottomRightButtonsWrapper: 'FullscreenPlayerDesktopControls_bottomRightButtonsWrapper__EvGiZ',
                root: 'FullscreenPlayerDesktopControls_root__tviu4',
                root_visible: 'FullscreenPlayerDesktopControls_root_visible__1b9xD',
                sonataControls: 'FullscreenPlayerDesktopControls_sonataControls__9AIki',
                menuWrapper: 'FullscreenPlayerDesktopControls_menuWrapper__ifxNx',
                syncLyricsButton: 'FullscreenPlayerDesktopControls_syncLyricsButton__g6E6g',
                playQueueButton: 'FullscreenPlayerDesktopControls_playQueueButton__reNOW',
                speedButton: 'FullscreenPlayerDesktopControls_speedButton__uTbyy',
                likeButton: 'FullscreenPlayerDesktopControls_likeButton__vpJ7S',
                menuButton: 'FullscreenPlayerDesktopControls_menuButton__R4cXl',
                likeButton_active: 'FullscreenPlayerDesktopControls_likeButton_active__XltBK',
                menuButton_active: 'FullscreenPlayerDesktopControls_menuButton_active__YZ8M8',
                playQueueButton_active: 'FullscreenPlayerDesktopControls_playQueueButton_active___SA85',
                speedButton_active: 'FullscreenPlayerDesktopControls_speedButton_active__H_EXl',
                syncLyricsButton_active: 'FullscreenPlayerDesktopControls_syncLyricsButton_active__VMvEH',
                fullscreenPlayerButton: 'FullscreenPlayerDesktopControls_fullscreenPlayerButton__0UjpS',
                fullscreenPlayerButton_visible: 'FullscreenPlayerDesktopControls_fullscreenPlayerButton_visible__qjQ0X',
            };
        },
        19038: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => g });
            var i = a(88800),
                l = a(84961),
                n = a(53548),
                s = a(2058),
                r = a(88969),
                o = a(50408),
                c = a(96817),
                d = a(52300),
                u = a(17610),
                _ = a(29504),
                m = a(44230),
                p = a(77356),
                v = a(49034),
                x = a(26645),
                h = a(20150),
                y = a.n(h);
            let C = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                g = (0, l.PA)((e) => {
                    let { children: t, customMessage: a, shouldForceOpenTooltip: l } = e,
                        { formatMessage: h } = (0, s.A)(),
                        { contentRef: g } = (0, m.g)(),
                        { setIsOnboardingOpened: b } = (0, x.w)(),
                        [A, f] = (0, o.d)(),
                        T = (0, v.z)({ id: p.h.TRAILER_BUTTON, ref: A }) || !!l,
                        [j, N] = (0, n.useState)(T),
                        S = (0, n.useCallback)(
                            (e) => {
                                (null == e || e.stopPropagation(), N(!1), b(!1));
                            },
                            [b],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                e || S();
                            },
                            [S],
                        );
                    return (0, i.jsxs)(u.m_, {
                        placement: 'bottom',
                        arrowProps: C,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: j,
                        onOpenChange: I,
                        enableAriaDescribedby: !0,
                        referenceRef: f,
                        children: [
                            t,
                            (0, i.jsxs)(u.ZI, {
                                className: y().root,
                                rootNode: g,
                                children: [
                                    (0, i.jsx)(c.$, {
                                        icon: (0, i.jsx)(d.I, { variant: 'close', size: 'xxs' }),
                                        onClick: S,
                                        variant: 'text',
                                        className: y().close,
                                        withRipple: !1,
                                        'aria-label': h({ id: 'interface-actions.close' }),
                                    }),
                                    (0, i.jsx)(_.HL, {
                                        variant: 'span',
                                        className: y().text,
                                        children: a || (0, i.jsx)(r.A, { id: 'onboarding.trailer', values: { br: (0, i.jsx)('br', {}) } }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        19051: (e) => {
            e.exports = {
                root: 'ShareIframeEditor_root__LALvp',
                controls: 'ShareIframeEditor_controls__k8vT_',
                iframeCodeInputContainer: 'ShareIframeEditor_iframeCodeInputContainer__b4Klq',
                settings: 'ShareIframeEditor_settings__UWt51',
                copyButton: 'ShareIframeEditor_copyButton___jOz_',
                sizeInputContainer: 'ShareIframeEditor_sizeInputContainer__s6PMW',
                iframeCodeInput: 'ShareIframeEditor_iframeCodeInput__M9w6E',
                iframeContainer: 'ShareIframeEditor_iframeContainer__pgdr5',
                iframe: 'ShareIframeEditor_iframe__ky5_o',
            };
        },
        19722: (e) => {
            e.exports = {
                root: 'TrackModalSimilarTracks_root__EAOmg',
                title: 'TrackModalSimilarTracks_title__0WPaJ',
                item: 'TrackModalSimilarTracks_item__BGQWd',
                important: 'TrackModalSimilarTracks_important__mGqEv',
                tracksContainer: 'TrackModalSimilarTracks_tracksContainer__E55ep',
            };
        },
        19998: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => f });
            var i = a(88800),
                l = a(65724),
                n = a(84961),
                s = a(53548),
                r = a(88969),
                o = a(17392),
                c = a(29993),
                d = a(96817),
                u = a(29504),
                _ = a(4086),
                m = a(41928),
                p = a(46422),
                v = a(4370),
                x = a(78940),
                h = a(85587),
                y = a(15253),
                C = a(91292),
                g = a(28806),
                b = a.n(g);
            let A = {
                    [h.n.ALBUM]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [h.n.PODCAST]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [h.n.ARTIST]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [h.n.TRACK]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [h.n.AUDIOBOOK]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [h.n.CLIP]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                f = (0, n.PA)((e) => {
                    var t;
                    let { modalState: a, data: n, onClose: g, className: f } = e,
                        T = null != n ? n : null == a ? void 0 : a.modalData,
                        j = (0, p.W)(),
                        N = (0, x.Z)(v.Z.main.href),
                        S = (0, m.N)().get(_.U2),
                        I = (0, c.c)(() => {
                            if (g) return g();
                            (j.canBack && j.back(), N());
                        }),
                        k = (null == T || null == (t = T.details) ? void 0 : t.url) && T.details.text,
                        L = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = S.get(y.c.ExEx),
                                i = new Date(),
                                l = i.setMinutes(i.getMinutes() + 15),
                                n =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? S.set(y.c.ExEx, [...t, n], { expires: new Date(l) }) : S.set(y.c.ExEx, [n], { expires: new Date(l) }),
                                null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        E = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == g || g(), j.canBack && j.back(), N()) : null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let M = (0, s.useMemo)(() => {
                            if (T) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, l.$)(b().title, b().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: T.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: b().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: T.description,
                                        }),
                                        k &&
                                            (0, i.jsx)(C.N, {
                                                href: null == (e = T.details) ? void 0 : e.url,
                                                className: b().link,
                                                children: (0, i.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = T.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [T, k]),
                        P = (0, s.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === h.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: b().buttons,
                                          children: [
                                              (0, i.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: E,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(r.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && A[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: b().buttons,
                                          children: (0, i.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: I,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: b().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(r.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [L, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, I, E],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, l.$)(b().root, f),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: b().container, children: [M, P] }),
                    });
                });
        },
        20150: (e) => {
            e.exports = { root: 'TrailerOnboarding_root__I3fd0', text: 'TrailerOnboarding_text__HU4RO', close: 'TrailerOnboarding_close__ywMIK' };
        },
        20924: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => s });
            var i = a(8655),
                l = a(69704),
                n = a(5295);
            let s = (e) => {
                let { theme: t } = (0, l.W)(),
                    a = t === i.S.Light ? 0.6 : 0.35;
                return { '--trailer-color': (0, n.e)(e, 0.8, a) };
            };
        },
        21867: () => {},
        21944: (e, t, a) => {
            'use strict';
            a.d(t, { IR: () => l, JQ: () => i, bL: () => s, ew: () => n });
            let i = 220,
                l = 88,
                n = 'px',
                s = '{lang}';
        },
        22666: (e) => {
            e.exports = {
                root: 'SyncLyricsLoader_root__I2hTe',
                element: 'SyncLyricsLoader_element___Luwv',
                pulse: 'SyncLyricsLoader_pulse__5AqRf',
                'change-opacity': 'SyncLyricsLoader_change-opacity__vscya',
                element_withIcon: 'SyncLyricsLoader_element_withIcon__iiSBo',
                element_withDefaultElement: 'SyncLyricsLoader_element_withDefaultElement__WmP80',
                element_paused: 'SyncLyricsLoader_element_paused__LFpD0',
            };
        },
        23192: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => i });
            let i = '#b239f3';
        },
        23474: (e) => {
            e.exports = { root: 'SyncLyricsFooter_root__STCKQ', major: 'SyncLyricsFooter_major__QMZmT', writers: 'SyncLyricsFooter_writers__c7zhj' };
        },
        23577: (e, t, a) => {
            'use strict';
            (a.d(t, { FN: () => l, gj: () => i }), a(13687));
            let i = (e) => {
                    let { containerNodeRect: t, draggingNodeRect: a, transform: i } = e;
                    return a && t
                        ? (function (e, t, a) {
                              let i = { ...e };
                              return (
                                  t.top + e.y <= a.top ? (i.y = a.top - t.top) : t.bottom + e.y >= a.top + a.height && (i.y = a.top + a.height - t.bottom),
                                  t.left + e.x <= a.left ? (i.x = a.left - t.left) : t.right + e.x >= a.left + a.width && (i.x = a.left + a.width - t.right),
                                  i
                              );
                          })(i, a, t)
                        : i;
                },
                l = (e) => {
                    let { transform: t } = e;
                    return { ...t, x: 0 };
                };
        },
        24352: (e) => {
            e.exports = {
                root: 'ArtistAboutModalShimmer_root__RWCDi',
                entityName: 'ArtistAboutModalShimmer_entityName__eBJym',
                title: 'ArtistAboutModalShimmer_title__0uj5d',
            };
        },
        24586: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var i = a(88800),
                l = a(35412);
            let n = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, l.Gr)(a) } });
            };
        },
        25196: (e) => {
            e.exports = {
                root: 'TrackModalControls_root__alpd3',
                controlsContainer: 'TrackModalControls_controlsContainer__UeQb4',
                menuWrapper: 'TrackModalControls_menuWrapper__tDLID',
                menuButton: 'TrackModalControls_menuButton__V6L4c',
                disabledButtonByDisclaimer: 'TrackModalControls_disabledButtonByDisclaimer__qfCvg',
            };
        },
        25378: (e) => {
            e.exports = { root: 'TrailerModal_root__T4ZJ8', modalContent: 'TrailerModal_modalContent__ZSNFe', header: 'TrailerModal_header__0h1zj' };
        },
        25555: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => u });
            var i = a(88800),
                l = a(53548),
                n = a(2058),
                s = a(29993),
                r = a(66943),
                o = a(29595),
                c = a(74965),
                d = a(72288);
            let u = (e) => {
                let { action: t, notification: a, showNotificationOnMobile: u = !1 } = e,
                    {
                        user: _,
                        settings: { isMobile: m },
                    } = (0, d.g)(),
                    { formatMessage: p } = (0, n.A)(),
                    { notify: v } = (0, c.l)(),
                    x = (0, l.useRef)(!1);
                return (0, s.c)(async () => {
                    if (!_.isAuthorized) return void v((0, i.jsx)(r.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (!x.current) {
                        x.current = !0;
                        try {
                            (await t())
                                ? (!m || u) && v(a, { containerId: o.u.INFO })
                                : v((0, i.jsx)(r.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR });
                        } finally {
                            x.current = !1;
                        }
                    }
                });
            };
        },
        26404: (e) => {
            e.exports = {
                root: 'PlusModalLogoBlock_root__cKh28',
                icon: 'PlusModalLogoBlock_icon__fMixB',
                icon_ru: 'PlusModalLogoBlock_icon_ru__JAn4U',
                icon_en: 'PlusModalLogoBlock_icon_en__OmrOY',
            };
        },
        26756: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => d });
            var i = a(88800),
                l = a(84961),
                n = a(29504),
                s = a(72288),
                r = a(91292),
                o = a(12479),
                c = a.n(o);
            let d = (0, l.PA)((e) => {
                let { children: t, href: a, className: l } = e,
                    {
                        currentTrackInfo: { modal: o },
                    } = (0, s.g)();
                return a
                    ? (0, i.jsx)(r.N, {
                          className: c().link,
                          href: a,
                          onClick: o.close,
                          children: (0, i.jsx)(n.HL, { className: l, variant: 'div', size: 'l', children: t }),
                      })
                    : (0, i.jsx)(n.HL, { className: l, variant: 'div', size: 'l', children: t });
            });
        },
        26835: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        27157: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        27169: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Q: () => i }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(i || (i = {})));
        },
        27294: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => l });
            var i = a(18593);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Various;
            }
        },
        27344: (e) => {
            e.exports = {
                root: 'TrackModalAlbumShimmer_root__iGoUU',
                title: 'TrackModalAlbumShimmer_title__2jt8z',
                coverBlock: 'TrackModalAlbumShimmer_coverBlock__PQFDQ',
                cover: 'TrackModalAlbumShimmer_cover__AI0zt',
                linkBlock: 'TrackModalAlbumShimmer_linkBlock__yBLL4',
                link: 'TrackModalAlbumShimmer_link__7_gHs',
                description: 'TrackModalAlbumShimmer_description__63Pnt',
            };
        },
        27533: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => i });
            let i = (e) => {
                let t = Math.floor(e / 1e3),
                    a = Math.floor(t / 3600),
                    i = Math.floor((t % 3600) / 60),
                    l = t % 60,
                    n = 'PT';
                return (a > 0 && (n += ''.concat(a, 'H')), i > 0 && (n += ''.concat(i, 'M')), (l > 0 || 'PT' === n) && (n += ''.concat(l, 'S')), n);
            };
        },
        27984: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), e);
            })({});
        },
        28806: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
            };
        },
        29201: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => l });
            var i = a(35396);
            let l = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        29955: (e) => {
            e.exports = {
                root: 'TrackModal_root__QrFg6',
                header: 'TrackModal_header__hjfRd',
                closeButton: 'TrackModal_closeButton__VLm_R',
                modalContent: 'TrackModal_modalContent__AzQPF',
                content: 'TrackModal_content__9qH7W',
                container: 'TrackModal_container__JaG86',
            };
        },
        30907: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        31142: (e) => {
            e.exports = {
                root: 'ArtistAboutModal_root__bmUo9',
                modalContent: 'ArtistAboutModal_modalContent__RGkJk',
                header: 'ArtistAboutModal_header__yLnAj',
                overlay: 'ArtistAboutModal_overlay__6hToT',
                closeButton: 'ArtistAboutModal_closeButton__Gnz25',
            };
        },
        31764: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => _ });
            var i = a(88800),
                l = a(65724),
                n = a(53548),
                s = a(17392),
                r = a(88021),
                o = a(96817),
                c = a(52300),
                d = a(89544),
                u = a.n(d);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: a,
                        forwardControlClassName: d,
                        className: _,
                        withSecondaryColor: m,
                        buttonSize: p = 'xxxs',
                        buttonVariant: v = 'outline',
                    } = e,
                    { swipeBackward: x, swipeForward: h, shouldBackwardButtonBeDisabled: y, shouldForwardButtonBeDisabled: C, shouldHideControls: g } = (0, r.Y)(t),
                    b = (0, n.useCallback)(
                        (e) => {
                            (x(), e.stopPropagation());
                        },
                        [x],
                    ),
                    A = (0, n.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(u().root, _),
                    'data-test-id': s.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(u().control, a, { [u().control_hidden]: g, [u().control_withSecondaryColor]: m }),
                            onClick: b,
                            size: p,
                            radius: 'round',
                            variant: v,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: y,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(u().control, d, { [u().control_hidden]: g, [u().control_withSecondaryColor]: m }),
                            onClick: A,
                            size: p,
                            radius: 'round',
                            variant: v,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: C,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        32021: (e) => {
            e.exports = { topSection: 'PaywallBYMobile_topSection__sQ_sw' };
        },
        32468: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopPoster_root__d__YD', cover: 'FullscreenPlayerDesktopPoster_cover__CDmhM' };
        },
        33133: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        33786: (e) => {
            e.exports = { root: 'NdaLabel_root__WeDgT', root_small: 'NdaLabel_root_small__1vy_B', text: 'NdaLabel_text__sfQ_Y' };
        },
        33884: (e) => {
            e.exports = {
                root: 'TrailerError_root__GwuKR',
                textContainer: 'TrailerError_textContainer__lF7RZ',
                title: 'TrailerError_title__Q52Pa',
                description: 'TrailerError_description__60UJ6',
            };
        },
        34232: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => i });
            let i = (e) => (e ? e.replace('-', '_') : null);
        },
        34816: (e) => {
            e.exports = {
                root: 'FullscreenPlayerMobileContent_root__RITqv',
                wrapper: 'FullscreenPlayerMobileContent_wrapper__JPmBe',
                syncLyrics: 'FullscreenPlayerMobileContent_syncLyrics__HKUm0',
                trackInfoCoverContainer: 'FullscreenPlayerMobileContent_trackInfoCoverContainer__Y2hly',
                trackInfoCover: 'FullscreenPlayerMobileContent_trackInfoCover__zsEEq',
                contentContainer: 'FullscreenPlayerMobileContent_contentContainer__ILyg5',
                contentContainer_withSplitMode: 'FullscreenPlayerMobileContent_contentContainer_withSplitMode__Rdv5T',
                trackInfo: 'FullscreenPlayerMobileContent_trackInfo__IPGjo',
                metaContainer: 'FullscreenPlayerMobileContent_metaContainer__B2vTr',
                infoBlock: 'FullscreenPlayerMobileContent_infoBlock__ZcRdn',
                infoBlock_withExpandedSyncLyrics: 'FullscreenPlayerMobileContent_infoBlock_withExpandedSyncLyrics__qlbKX',
                coverWrapper: 'FullscreenPlayerMobileContent_coverWrapper___Y6ll',
                coverWrapper_enter: 'FullscreenPlayerMobileContent_coverWrapper_enter__oFtHh',
                coverWrapper_enter_active: 'FullscreenPlayerMobileContent_coverWrapper_enter_active__GM_of',
                'enter-fade': 'FullscreenPlayerMobileContent_enter-fade__Q0KNn',
                coverWrapper_exit: 'FullscreenPlayerMobileContent_coverWrapper_exit__QDk1i',
                coverWrapper_exit_active: 'FullscreenPlayerMobileContent_coverWrapper_exit_active__9S_wE',
                'exit-fade': 'FullscreenPlayerMobileContent_exit-fade__uS0jT',
                cover: 'FullscreenPlayerMobileContent_cover__W6pz2',
                metaText: 'FullscreenPlayerMobileContent_metaText__Fr74D',
                timeline: 'FullscreenPlayerMobileContent_timeline__Pta9W',
                content: 'FullscreenPlayerMobileContent_content__EAteH',
                syncLyricsContent: 'FullscreenPlayerMobileContent_syncLyricsContent__qhWG_',
                syncLyricsLoader: 'FullscreenPlayerMobileContent_syncLyricsLoader__0_W2j',
                syncLyricsScroller: 'FullscreenPlayerMobileContent_syncLyricsScroller__EqiCL',
                syncLyricsFooter: 'FullscreenPlayerMobileContent_syncLyricsFooter__bi9vY',
                syncLyricsCounter: 'FullscreenPlayerMobileContent_syncLyricsCounter___wm5g',
            };
        },
        34970: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        35232: (e) => {
            e.exports = {
                root: 'TrailerFooter_root__LKXby',
                playButtonShimmer: 'TrailerFooter_playButtonShimmer__5QwPi',
                linkButtonShimmer: 'TrailerFooter_linkButtonShimmer__ZV1s1',
            };
        },
        35396: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { C: () => n }),
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
                })(i || (i = {})));
            let l = new Set(Object.values(i)),
                n = (e) => 'string' == typeof e && l.has(e);
        },
        35765: (e) => {
            e.exports = {
                root: 'FamilyInviteInviter_root__2XR_p',
                icon: 'FamilyInviteInviter_icon__e5pZe',
                important: 'FamilyInviteInviter_important__wl_l1',
                iconShimmer: 'FamilyInviteInviter_iconShimmer__Dbxw_',
                root_mobile: 'FamilyInviteInviter_root_mobile__LRDAo',
                name: 'FamilyInviteInviter_name__0E0QC',
                nameShimmer: 'FamilyInviteInviter_nameShimmer__Zzoa1',
            };
        },
        36740: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => _ });
            var i = a(53548),
                l = a(59714),
                n = a(24709),
                s = a(23480),
                r = a(94126),
                o = a(8383),
                c = a(18117),
                d = a(93940),
                u = a(46457);
            let _ = (0, n.n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, i.useContext)(s.I),
                    { hash: t } = (0, c.g)(),
                    { screen: a, tab: n } = (0, d.j)(),
                    _ = (0, i.useContext)(o.k)?.session,
                    { current: m } = (0, i.useRef)(Symbol()),
                    p = !!a,
                    v = (i) => {
                        if (!e || !_ || !a?.pageId || void 0 === t || !p) return !1;
                        let s = {
                            hash: t,
                            pageId: a.pageId,
                            pageStyle: a.pageStyle,
                            pagePlacement: a.pagePlacement,
                            mainObjectType: a.mainObjectType,
                            mainObjectId: a.mainObjectId,
                            skeletonId: a.skeletonId,
                            viewUuid: a.screenViewUuid,
                            ...(n ?? r.Ve),
                        };
                        return (i ? _.open(m, () => (0, l.Fn)(e, s)) : _.close(m, () => (0, l.PO)(e, s)), !0);
                    },
                    [x, h] = (0, i.useState)(() => ({ session: _, send: v, opened: !1 })),
                    y = x;
                (x.session !== _ && h((y = { session: _, send: v, opened: !1 })),
                    (0, i.useInsertionEffect)(() => {
                        p && void 0 !== t && (y.send = v);
                    }, [y, t, p, v]));
                let C = (0, u.c)((e, t) => {
                    e.send(t) && (e.opened = t);
                });
                ((0, i.useEffect)(
                    () => (
                        C(y, !0),
                        () => {
                            (y.opened && C(y, !1), y.session?.release(m));
                        }
                    ),
                    [m, y, C],
                ),
                    (0, i.useEffect)(() => {
                        C(y, !0);
                    }, [y, t, p, C]));
            });
        },
        37003: (e) => {
            e.exports = {
                content: 'MusicSectionMobile_content__lAARM',
                card: 'MusicSectionMobile_card__f5Xnr',
                logo_ru: 'MusicSectionMobile_logo_ru__itG4j',
                logo_en: 'MusicSectionMobile_logo_en__Tv2yd',
            };
        },
        37076: (e) => {
            e.exports = { root: 'SyncLyricsLine_root__r62BN' };
        },
        37821: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => s });
            var i = a(8655),
                l = a(69704),
                n = a(5295);
            let s = (e) => {
                let { theme: t } = (0, l.W)(),
                    a = t === i.S.Light ? 0.48 : 0.4;
                return { '--cover-color': (0, n.e)(e, 0.8, a) };
            };
        },
        38053: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => c });
            var i = a(88800),
                l = a(65724),
                n = a(35412),
                s = a(29504),
                r = a(12479),
                o = a.n(r);
            let c = (e) => {
                let { title: t, className: a, titleClassName: r, infoDescription: c, ...d } = e;
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(o().root, a),
                    ...(0, n.OZ)(d),
                    children: [t && (0, i.jsx)(s.DZ, { variant: 'h4', className: (0, l.$)(o().infoTitle, r), children: t }), c],
                });
            };
        },
        38709: (e) => {
            e.exports = { root: 'PaywallFAQCollapse_root___gwrQ', root_collapsed: 'PaywallFAQCollapse_root_collapsed__gx8IK' };
        },
        39270: (e) => {
            e.exports = {
                cover: 'FreePlayerPlusNotification_cover__UiPL1',
                important: 'FreePlayerPlusNotification_important__ybkIx',
                icon: 'FreePlayerPlusNotification_icon__8kTww',
                text: 'FreePlayerPlusNotification_text__BMu7d',
                tryButton: 'FreePlayerPlusNotification_tryButton__DNc4D',
            };
        },
        39947: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => i });
            var i = (function (e) {
                return (
                    (e.KEY_P = 'KeyP'),
                    (e.KEY_F = 'KeyF'),
                    (e.KEY_D = 'KeyD'),
                    (e.KEY_L = 'KeyL'),
                    (e.KEY_J = 'KeyJ'),
                    (e.KEY_K = 'KeyK'),
                    (e.KEY_H = 'KeyH'),
                    (e.KEY_M = 'KeyM'),
                    (e.KEY_N = 'KeyN'),
                    (e.KEY_S = 'KeyS'),
                    (e.KEY_R = 'KeyR'),
                    (e.KEY_W = 'KeyW'),
                    (e.ESC = 'Escape'),
                    (e.SPACE = 'Space'),
                    (e.ARROW_LEFT = 'ArrowLeft'),
                    (e.ARROW_RIGHT = 'ArrowRight'),
                    (e.ARROW_UP = 'ArrowUp'),
                    (e.ARROW_DOWN = 'ArrowDown'),
                    (e.COMMA = 'Comma'),
                    (e.PERIOD = 'Period'),
                    (e.MINUS = 'Minus'),
                    (e.EQUAL = 'Equal'),
                    (e.DIGIT_0 = 'Digit0'),
                    e
                );
            })({});
        },
        40131: (e) => {
            e.exports = {
                root: 'UnavailableVibeModal_root__X2TFI',
                header: 'UnavailableVibeModal_header__DJyw6',
                content: 'UnavailableVibeModal_content__gUxkN',
                image: 'UnavailableVibeModal_image__Y59u1',
                text: 'UnavailableVibeModal_text__tefAJ',
                actions: 'UnavailableVibeModal_actions__N6Onc',
            };
        },
        40258: (e) => {
            e.exports = {
                root: 'PlayQueueBeforePlayingBlock_root__QIIfB',
                prevTrack: 'PlayQueueBeforePlayingBlock_prevTrack__5b6o4',
                animatedContent: 'PlayQueueBeforePlayingBlock_animatedContent__C04_K',
                animatedContent_moveToBottom: 'PlayQueueBeforePlayingBlock_animatedContent_moveToBottom__2gKF7',
                'move-to-bottom': 'PlayQueueBeforePlayingBlock_move-to-bottom__7EZIY',
                animatedContent_moveFromBottom: 'PlayQueueBeforePlayingBlock_animatedContent_moveFromBottom__0kTuW',
                'move-from-bottom': 'PlayQueueBeforePlayingBlock_move-from-bottom__8mDwi',
                'move-prev-track-from-bottom': 'PlayQueueBeforePlayingBlock_move-prev-track-from-bottom__mFqMq',
                animatedContent_moveFromBottomSingleTrack: 'PlayQueueBeforePlayingBlock_animatedContent_moveFromBottomSingleTrack__MIEIc',
                'move-from-bottom-single-track': 'PlayQueueBeforePlayingBlock_move-from-bottom-single-track__YhsMT',
                'move-prev-track-from-bottom-single-track': 'PlayQueueBeforePlayingBlock_move-prev-track-from-bottom-single-track__NGI9j',
            };
        },
        40512: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => l });
            var i = a(7123);
            let l = (e) => ({ type: i.z4.Unloaded, meta: { id: e.entityId } });
        },
        41792: (e) => {
            e.exports = {
                root: 'ImageSliderModal_root__AZO_D',
                root_mobile: 'ImageSliderModal_root_mobile__lBg8o',
                modalContent: 'ImageSliderModal_modalContent__R7c_w',
                closeButton: 'ImageSliderModal_closeButton__mabus',
                content: 'ImageSliderModal_content__Gjm6N',
                image: 'ImageSliderModal_image__ZUYEL',
                image_loading: 'ImageSliderModal_image_loading__1Fyyn',
                leftArrowWrapper: 'ImageSliderModal_leftArrowWrapper__2d5RO',
                rightArrowWrapper: 'ImageSliderModal_rightArrowWrapper__vSPiO',
                slider: 'ImageSliderModal_slider__gDVWR',
                wrapper: 'ImageSliderModal_wrapper__s31SU',
                slide: 'ImageSliderModal_slide__4VnYF',
                loadingIndicator: 'ImageSliderModal_loadingIndicator__3yfbk',
                loadingIndicator_showed: 'ImageSliderModal_loadingIndicator_showed__Ec0yW',
            };
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        41907: (e) => {
            e.exports = {
                modalHeader: 'CommunicationModal_modalHeader__TnzU6',
                modalContent: 'CommunicationModal_modalContent__d8REH',
                container: 'CommunicationModal_container__BIgb7',
                wrapper: 'CommunicationModal_wrapper__SRy17',
                imageWrapper: 'CommunicationModal_imageWrapper__LOr5C',
                imageWrapper_content: 'CommunicationModal_imageWrapper_content__PfjQl',
                imageWrapper_header: 'CommunicationModal_imageWrapper_header__8wsRZ',
                image: 'CommunicationModal_image__qzXK8',
                title: 'CommunicationModal_title__yvFAn',
                text: 'CommunicationModal_text__gGaLU',
                buttons: 'CommunicationModal_buttons__MDmp2',
                disclaimerWrapper: 'CommunicationModal_disclaimerWrapper__pMRYf',
                disclaimer: 'CommunicationModal_disclaimer__NJJSA',
                disclaimerLink: 'CommunicationModal_disclaimerLink__8yuBO',
                root: 'CommunicationModal_root__1dOYE',
                root_modal: 'CommunicationModal_root_modal__u_igG',
                button: 'CommunicationModal_button__qysqU',
                root_fullscreen: 'CommunicationModal_root_fullscreen__41Y5Y',
                gradientOverlay: 'CommunicationModal_gradientOverlay__MOg5g',
                buttonText: 'CommunicationModal_buttonText__2XS8u',
                closeButton: 'CommunicationModal_closeButton__EP7ay',
                closeButtonIcon: 'CommunicationModal_closeButtonIcon__ujXug',
                advDisclaimerTrigger: 'CommunicationModal_advDisclaimerTrigger__otvUP',
                advDisclaimerTrigger_modal: 'CommunicationModal_advDisclaimerTrigger_modal__osiyy',
                advDisclaimerTrigger_fullscreen: 'CommunicationModal_advDisclaimerTrigger_fullscreen__F4N7r',
                advDisclaimerPopover: 'CommunicationModal_advDisclaimerPopover__gu0oV',
                advDisclaimerText: 'CommunicationModal_advDisclaimerText__hiNjI',
            };
        },
        42205: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => i });
            let i = (e, t) => {
                let a = Number(t);
                return !Number.isNaN(a) && a > 0 && a < e.length ? a : 0;
            };
        },
        42592: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => o });
            var i = a(53548),
                l = a(24709),
                n = a(18117),
                s = a(88966),
                r = a(87138);
            let o = (0, l.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, i.useRef)(!1),
                    a = (0, s.N)(),
                    { hash: l } = (0, n.g)(),
                    o = (0, r.w)(),
                    c = (0, i.useMemo)(() => (o ? a.createBlockReporter(o.snapshot) : null), [a, o]);
                (0, i.useEffect)(() => {
                    e && o && c && !t.current && c.loaded({ objectsCount: o.snapshot.block.objectsCount, viewUuid: o.block.loadedSession.start() }) && (t.current = !0);
                }, [e, l, c, o]);
            });
        },
        43002: (e) => {
            e.exports = { topSection: 'PaywallBYDesktop_topSection__AS3Pv' };
        },
        43453: (e) => {
            e.exports = {
                root: 'PaywallFAQItem_root__008Hj',
                questionCollapse: 'PaywallFAQItem_questionCollapse__dN7g9',
                questionContainer: 'PaywallFAQItem_questionContainer__gOalt',
                answer: 'PaywallFAQItem_answer__mgvr2',
                answerContainer: 'PaywallFAQItem_answerContainer__z_P3g',
                answerContainer_enter: 'PaywallFAQItem_answerContainer_enter__zAisZ',
                answerContainer_enter_active: 'PaywallFAQItem_answerContainer_enter_active__N5iad',
                'animation-show': 'PaywallFAQItem_animation-show__YWHaS',
                answerContainer_exit: 'PaywallFAQItem_answerContainer_exit__y_3_j',
                answerContainer_exit_active: 'PaywallFAQItem_answerContainer_exit_active__IUs7C',
                'animation-hide': 'PaywallFAQItem_animation-hide__Eqrf5',
            };
        },
        43557: (e) => {
            e.exports = {
                root: 'TrackModalTitleShimmer_root__woixY',
                entityName: 'TrackModalTitleShimmer_entityName__9NMYB',
                title: 'TrackModalTitleShimmer_title__PXJfS',
                artists: 'TrackModalTitleShimmer_artists__mz6q9',
                important: 'TrackModalTitleShimmer_important__uBJ8_',
                artist: 'TrackModalTitleShimmer_artist__fre6F',
                controls: 'TrackModalTitleShimmer_controls__0kNh8',
                playButton: 'TrackModalTitleShimmer_playButton__PYklv',
                button: 'TrackModalTitleShimmer_button__j5_GI',
            };
        },
        43966: (e, t, a) => {
            'use strict';
            a.d(t, { g: () => c });
            var i = a(88800),
                l = a(65724),
                n = a(88969),
                s = a(29504),
                r = a(33786),
                o = a.n(r);
            let c = (e) => {
                let { className: t, size: a = 'm' } = e;
                return (0, i.jsx)('span', {
                    className: (0, l.$)(o().root, { [o().root_small]: 's' === a }, t),
                    children: (0, i.jsx)(s.HL, {
                        variant: 'span',
                        size: 's' === a ? 'xs' : 'm',
                        weight: 'bold',
                        className: o().text,
                        children: (0, i.jsx)(n.A, { id: 'multivibe.nda' }),
                    }),
                });
            };
        },
        44057: (e) => {
            e.exports = {
                content_ru: 'KinopoiskSectionDesktop_content_ru__gILD5',
                content_by: 'KinopoiskSectionDesktop_content_by__31QvZ',
                card1: 'KinopoiskSectionDesktop_card1__nlqOH',
                card2: 'KinopoiskSectionDesktop_card2__ZMW4Z',
                card3: 'KinopoiskSectionDesktop_card3__n9_1i',
                card4: 'KinopoiskSectionDesktop_card4__TpOZ7',
                logo_ru: 'KinopoiskSectionDesktop_logo_ru__f6OLB',
                logo_en: 'KinopoiskSectionDesktop_logo_en__2oXnD',
            };
        },
        44502: (e) => {
            e.exports = {
                root: 'ArtistBandlinkScanner_root__D3cAC',
                descriptionTitleButton: 'ArtistBandlinkScanner_descriptionTitleButton__0M8Ag',
                icon: 'ArtistBandlinkScanner_icon__n5ntO',
                description: 'ArtistBandlinkScanner_description__n8ypX',
                descriptionTitle: 'ArtistBandlinkScanner_descriptionTitle__9Z1MT',
                descriptionTitleText: 'ArtistBandlinkScanner_descriptionTitleText__xWvIS',
                descriptionArtist: 'ArtistBandlinkScanner_descriptionArtist__7ZvJo',
            };
        },
        44924: (e) => {
            e.exports = {
                title: 'OtherServicesSectionDesktop_title__TmiIR',
                content_ru: 'OtherServicesSectionDesktop_content_ru__tShm1',
                content_by: 'OtherServicesSectionDesktop_content_by__GAt4T',
                card: 'OtherServicesSectionDesktop_card__HqmGz',
                logo_ru: 'OtherServicesSectionDesktop_logo_ru__tox8Q',
                logo_en: 'OtherServicesSectionDesktop_logo_en__xuJro',
            };
        },
        45347: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => A });
            var i = a(88800),
                l = a(65724),
                n = a(84961),
                s = a(53548),
                r = a(17392),
                o = a(21284),
                c = a(29993),
                d = a(79070),
                u = a(78275),
                _ = a(90688),
                m = a(19994),
                p = a(69704),
                v = a(35402),
                x = a(35412);
            let h = (e, t, a) => {
                let i = (i) => {
                    let l = (i + e / 30) % 12,
                        n = t * Math.min(a, 1 - a);
                    return a - n * Math.max(-1, Math.min(l - 3, 9 - l, 1));
                };
                return [i(0), i(8), i(4)];
            };
            var y = a(8655);
            let C = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(a, Math.max(t, e)) / 100;
            };
            var g = a(68817),
                b = a.n(g);
            let A = (0, n.PA)((e) => {
                let { agent: t, isPlaying: a, className: n } = e,
                    [g, A] = (0, s.useState)(null),
                    { state: f, toggleTrue: T } = (0, u.e)(!1),
                    { state: j, toggleTrue: N, toggleFalse: S } = (0, u.e)(!1),
                    { theme: I } = (0, p.W)(),
                    k = (0, s.useRef)(null),
                    L = t.entityType === o.h.ARTIST,
                    E = t.entityType === o.h.ALBUM || t.entityType === o.h.TRACK || t.entityType === o.h.PLAYLIST,
                    M = t.cover.color,
                    P = t.cover.uri,
                    O = (0, c.c)(async () => {
                        if (f) {
                            if (!M) return void N();
                            if (I) {
                                S();
                                let {
                                        color: e,
                                        glow1: a,
                                        glow2: i,
                                    } = ((e) => {
                                        let { averageColor: t, theme: a, custom: i } = e,
                                            { h: l, s: n, l: s } = (0, x.g8)(t);
                                        if (i) {
                                            if (a === y.S.Dark) {
                                                let e = C(n + 5, 50, 100);
                                                return { color: h(l, e, C(s - 40, 12, 25)), glow1: h(l, e, C(s - 5, 45, 60)), glow2: h(l, e, C(s + 35, 80, 90)) };
                                            }
                                            let e = C(n - 2, 50, 100);
                                            return { color: h(l, e, C(s + 43, 80, 95)), glow1: h(l, e, C(s + 5, 45, 75)), glow2: h(l, e, C(s, 35, 55)) };
                                        }
                                        return { color: h(l, (n > 25 ? Math.min(n + 25, 60) : n) / 100, (s > 20 ? Math.min(s + 15, 60) : s) / 100) };
                                    })({ averageColor: M, theme: I, custom: !t.entityType }),
                                    l = JSON.stringify({
                                        rules: [
                                            { id: 'color', type: 'Color', value: e },
                                            { id: 'glow_1', type: 'Color', value: a },
                                            { id: 'glow_2', type: 'Color', value: i },
                                        ],
                                    });
                                (await (null == g ? void 0 : g.setThemeData(l)), N());
                            }
                        }
                    }),
                    w = (0, c.c)(() => {
                        (T(), O());
                    });
                ((0, s.useEffect)(() => {
                    a ? null == g || g.play() : null == g || g.pause();
                }, [g, a]),
                    (0, s.useEffect)(() => {
                        O();
                    }, [M, O, I, f]),
                    (0, s.useEffect)(() => {
                        if (g)
                            return (
                                g.setUseFrameInterpolation(!1),
                                g.setRenderConfig({ devicePixelRatio: 0.1 }),
                                g.addEventListener('load', w),
                                () => {
                                    g.removeEventListener('load', w);
                                }
                            );
                    }, [g, w]));
                let R = !f || !j,
                    D = (0, d.L)(() => {
                        if (!k.current) return;
                        let e = L ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(k.current.clientWidth * e, 'px') };
                    });
                return (0, i.jsxs)('div', {
                    ref: k,
                    className: (0, l.$)(b().root, n, { [b().root_loading]: R }),
                    style: D,
                    'data-test-id': R ? r.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, i.jsxs)('div', {
                            className: (0, l.$)(b().cover, { [b().cover_round]: L, [b().cover_square]: E, [b().cover_loading]: R }),
                            children: [
                                t.entityType &&
                                    P &&
                                    (0, i.jsx)(_._V, { src: P, size: 200, fit: 'cover', withAvatarReplace: !0, className: b().image, withLoadingIndicator: !1 }),
                                (0, i.jsx)(v.j, { src: t.animationUri, loop: !0, dotLottieRefCallback: A, className: b().animation }),
                            ],
                        }),
                        (0, i.jsx)(m.W, { className: (0, l.$)(b().shimmer, { [b().shimmer_loading]: R }), isActive: !0, radius: L ? 'round' : 'm' }),
                    ],
                });
            });
        },
        45873: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithPosition_root__H5FYg',
                playButton: 'PlayButtonWithPosition_playButton__7cfDQ',
                playButtonIcon: 'PlayButtonWithPosition_playButtonIcon___cLAL',
                playingAnimation: 'PlayButtonWithPosition_playingAnimation__Hy5rC',
                position: 'PlayButtonWithPosition_position__wk3OT',
                root_current: 'PlayButtonWithPosition_root_current__FCDLJ',
                root_playing: 'PlayButtonWithPosition_root_playing__RpnYU',
                root_disabled: 'PlayButtonWithPosition_root_disabled__PMV24',
                root_disliked: 'PlayButtonWithPosition_root_disliked__NIZzA',
                spinner: 'PlayButtonWithPosition_spinner__jNaNf',
            };
        },
        45958: (e) => {
            e.exports = { imageWrapper: 'MultivibePromoModal_imageWrapper___P4Nx', button: 'MultivibePromoModal_button__8vUYb' };
        },
        46200: (e) => {
            e.exports = {
                content_ru: 'BooksSectionDesktop_content_ru__Yauyu',
                content_by: 'BooksSectionDesktop_content_by___eqCQ',
                card: 'BooksSectionDesktop_card__blMRo',
                logo_ru: 'BooksSectionDesktop_logo_ru__SRY4d',
                logo_en: 'BooksSectionDesktop_logo_en__Szpr_',
            };
        },
        46371: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { ProductLayoutClientOnlyModalsContent: () => d6 }));
            var i,
                l,
                n,
                s,
                r,
                o,
                c,
                d,
                u,
                _,
                m,
                p,
                v,
                x,
                h = a(88800),
                y = a(84961),
                C = a(97234),
                g = a(59724),
                b = a(53548),
                A = a.t(b, 2),
                f = a(29993),
                T = a(11372),
                j = a(44230),
                N = a(72288),
                S = a(97956),
                I = a(54667),
                k = a(59918),
                L = a(70278),
                E = a(30144),
                M = a(324),
                P = a(46511),
                O = a(97826),
                w = a(13012),
                R = a(57297),
                D = a(2218),
                B = a(77863),
                F = a(45383),
                U = a(30123),
                V = a(54965),
                z = a(47580),
                K = a(19049);
            async function H(e, t, a) {
                var i, l, n, s, r, o, c;
                if (!e || !t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let d = await (0, P.W)(a.locale),
                    u = (0, w.N)(null != (i = e.title) ? i : '');
                return a.isNotFound
                    ? { robots: { index: !1 } }
                    : {
                          title:
                              null != (l = a.disclaimerTitle)
                                  ? l
                                  : (function (e) {
                                        var t;
                                        let { trackMeta: a, messageFormatter: i } = e,
                                            l = (0, z.j)(null != (t = a.artists) ? t : []);
                                        return i({ id: 'metadata.track-title' }, { trackTitle: a.title, artistsNames: l });
                                    })({ trackMeta: e, messageFormatter: d }),
                          description: (function (e) {
                              var t, a;
                              let { trackMeta: i, albumMeta: l, messageFormatter: n } = e,
                                  s = (0, z.j)(null != (a = i.artists) ? a : []),
                                  r = Math.round((i.durationMs || 0) / U.k7);
                              return n(
                                  { id: 'metadata.track-description' },
                                  {
                                      type: (null == (t = i.type) ? void 0 : t.replace('-', '_')) || null,
                                      artistsNames: s || null,
                                      trackTitle: i.title,
                                      albumTitle: (null == l ? void 0 : l.title) || null,
                                      duration: (0, V.E)(r),
                                      year: (null == l ? void 0 : l.year) || null,
                                  },
                              );
                          })({ trackMeta: e, albumMeta: t, messageFormatter: d }),
                          openGraph: (0, R.i)({
                              ogTitle: u,
                              ogDescription: (function (e) {
                                  var t, a;
                                  let { trackMeta: i, albumMeta: l, messageFormatter: n } = e,
                                      s = (0, K.Y)((0, z.j)(null != (a = i.artists) ? a : []), 96, !1);
                                  return n(
                                      { id: 'metadata.track-og-description' },
                                      {
                                          type: (null == (t = i.type) ? void 0 : t.replace('-', '_')) || null,
                                          artistsNames: s || null,
                                          year: (null == l ? void 0 : l.year) || null,
                                      },
                                  );
                              })({ trackMeta: e, albumMeta: t, messageFormatter: d }),
                              fullUrl: null != (n = a.fullUrl) ? n : '',
                              locale: a.locale,
                              ogImage: null != (s = e.ogImage) ? s : '',
                              siteName: d({ id: 'metadata.yandex-music' }),
                          }),
                          twitter: (0, D.H)({ cardType: B.W.APP, title: u, url: a.url, appName: d({ id: 'metadata.yandex-music' }) }),
                          appLinks: (0, M.X)({
                              additional: { ...a, url: null != (r = a.url) ? r : '', fullUrl: null != (o = a.fullUrl) ? o : '', host: a.host },
                              appName: d({ id: 'metadata.yandex-music' }),
                          }),
                          other: { 'music:musician': (0, O.x)(null != (c = null == e ? void 0 : e.artists) ? c : [], a.host) },
                          alternates: (0, F.S)('/album/:albumId/track/:trackId', a.tld, { params: { albumId: t.id, trackId: e.id } }),
                      };
            }
            var W = a(29955),
                Y = a.n(W),
                q = a(2058),
                $ = a(17392),
                Q = a(96817),
                G = a(52300),
                Z = a(5706),
                X = a(95993),
                J = a(4086),
                ee = a(41928),
                et = a(72131),
                ea = a(24586),
                ei = a(35412),
                el = a(16501),
                en = a(27533);
            let es = (0, y.PA)((e) => {
                var t;
                let { user: a, track: i } = e,
                    l = (0, ee.N)().get(J.V4),
                    n = (0, et._)(l.webHost);
                return a.isAuthorized
                    ? null
                    : (0, h.jsx)(ea.S, {
                          value: ((e) => {
                              var t, a;
                              let { host: i, track: l, album: n } = e,
                                  s = (0, el.m)(l.artists),
                                  r = { host: 'https://'.concat(i) },
                                  { href: o } = (null == n ? void 0 : n.id)
                                      ? (0, ei.no)('/album/:albumId/track/:trackId', { params: { albumId: n.id, trackId: l.id }, options: r })
                                      : (0, ei.no)('/track/:trackId', { params: { trackId: l.id }, options: r });
                              return {
                                  '@type': 'MusicRecording',
                                  name: l.title,
                                  url: o,
                                  thumbnailUrl: l.coverUri ? (0, ei.lU)(l.coverUri, 'orig') : void 0,
                                  duration: (0, en.F)(null != (t = l.durationMs) ? t : 0),
                                  genre: null != (a = l.genre) ? a : void 0,
                                  datePublished: l.pubDate,
                                  description: l.shortDescription,
                                  byArtist: s
                                      ? { '@type': 'MusicGroup', name: s.name, url: (0, ei.no)('/artist/:artistId', { params: { artistId: s.id }, options: r }).href }
                                      : void 0,
                                  inAlbum: n
                                      ? {
                                            '@type': 'MusicAlbum',
                                            name: n.title,
                                            url: (0, ei.no)('/album/:albumId', { params: { albumId: n.id }, options: r }).href,
                                            thumbnailUrl: n.coverUri ? (0, ei.lU)(n.coverUri, 'orig') : void 0,
                                        }
                                      : void 0,
                                  potentialAction: {
                                      '@type': 'ListenAction',
                                      expectsAcceptanceOf: { '@type': 'Offer', category: 'free', target: { '@type': 'EntryPoint', actionPlatform: o } },
                                  },
                              };
                          })({ host: n, track: i, album: null != (t = i.mainAlbum) ? t : void 0 }),
                      });
            });
            var er = a(29595),
                eo = a(74965),
                ec = a(66943),
                ed = a(29504),
                eu = a(61691),
                e_ = a(38514),
                em = a(34232),
                ep = a(18486),
                ev = a(15426),
                ex = a.n(ev),
                eh = a(19994),
                ey = a(27344),
                eC = a.n(ey);
            let eg = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, h.jsxs)('div', {
                        className: eC().root,
                        children: [
                            (0, h.jsx)(eh.W, { className: eC().title, isActive: t }),
                            (0, h.jsxs)('div', {
                                className: eC().coverBlock,
                                children: [
                                    (0, h.jsx)(eh.W, { className: eC().cover, isActive: t }),
                                    (0, h.jsxs)('div', {
                                        className: eC().linkBlock,
                                        children: [
                                            (0, h.jsx)(eh.W, { className: eC().link, isActive: t }),
                                            (0, h.jsx)(eh.W, { className: eC().description, isActive: t }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                eb = (0, y.PA)((e) => {
                    var t;
                    let { onModalClose: a } = e,
                        { formatMessage: i } = (0, q.A)(),
                        {
                            settings: { isMobile: l },
                            track: n,
                            fullscreenPlayer: s,
                        } = (0, N.g)(),
                        r = (0, f.c)(() => {
                            (s.modal.isOpened && s.modal.close(), l && a());
                        }),
                        o = null == (t = n.meta) ? void 0 : t.mainAlbum;
                    if (n.isShimmerVisible) return (0, h.jsx)(eg, { isShimmerActive: n.isLoading });
                    if (!o) return null;
                    let c = ((e, t, a) =>
                            a(
                                e === eu._.AUDIOBOOK || e === eu._.FAIRY_TALE
                                    ? { id: 'entity-names.number-of-chapters' }
                                    : e === eu._.PODCAST
                                      ? { id: 'entity-names.number-of-episodes' }
                                      : { id: 'entity-names.number-of-tracks' },
                                { counter: t },
                            ))(o.type, o.trackCount, i),
                        d = ((e) => (e.title && e.isAvailable ? (0, e_.L)(e.id) : null))(o);
                    return (0, h.jsxs)('div', {
                        className: ex().root,
                        'data-test-id': $.Xk.track.TRACK_PAGE_ALBUM,
                        children: [
                            (0, h.jsx)(ed.DZ, {
                                variant: 'h2',
                                size: 'm',
                                lineClamp: 1,
                                className: ex().title,
                                'data-test-id': $.Xk.track.TRACK_PAGE_ALBUM_TITLE,
                                children: i({ id: 'track-modal.album-heading' }, { type: (0, em.y)(o.type) }),
                            }),
                            (0, h.jsx)(ep.T, {
                                title: null == o ? void 0 : o.title,
                                coverUrl: null == o ? void 0 : o.coverUri,
                                description: c,
                                viewAllActionLink: null == d ? void 0 : d.href,
                                onViewAllAction: r,
                                titleLineClamp: 1,
                                available: o.isAvailable,
                                titleSize: 'xs',
                                withCover: !0,
                                withDescription: !!c,
                            }),
                        ],
                    });
                });
            var eA = a(78275),
                ef = a(68211),
                eT = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (l && (l += ' '), (l += i));
                                            else for (a in t) t[a] && (l && (l += ' '), (l += a));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    2850: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            contentContainer: 'JjlbHZ4FaP9EAcR_1DxF',
                            contentContainer_block: 'iOlzvyUREgDkthkrx7Sf',
                            flexIcon: 'WsKeF73pWotx9W1tWdYY',
                            root: 'cpeagBA1_PblpJn8Xgtv',
                            root_withoutBorder: 'qU2apWBO1yyEK0lZ3lPO',
                            root_radius_xs: 'MmZbSs387gu2qrJ1lDWd',
                            root_radius_s: 'mlcrraysn7mW6xrBXSBF',
                            root_radius_m: 'dgV08FKVLZKFsucuiryn',
                            root_radius_l: 'S97_5dtzhpxo_amtfYRg',
                            root_radius_xl: 'nNBJnDHRlyLTniWosJhk',
                            root_radius_xxxl: 'zIMibMuH7wcqUoW7KH1B',
                            root_radius_round: 'uwk3hfWzB2VT7kE13SQk',
                            root_size: 'IlG7b1K0AD7E7AMx6F5p',
                            root_size_default: 'C_QGmfTz6UFX93vfPt6Z',
                            root_size_xxxs: 'eQt33MLDiQ6DRSuLaYEp',
                            root_size_xxs: 'oR11LfCBVqMbUJiAgknd',
                            root_size_xs: 'j1jXIVckFgZECecFzZMe',
                            root_size_s: 'WtFdWDF44egSVM_YiMUX',
                            root_size_m: 'Y2uqxoU7xa_AZ8FUCVOW',
                            root_size_l: 'SGYcNjvjmMsXeEVGUV2Z',
                            root_icon_left: 'kc5CjvU5hT9KEj0iTt3C',
                            root_icon_right: 'et24Jf7pT_X9Fvc7TznR',
                            root_primary: 'fXlFz1qMkliFUWOkHo8T',
                            root_primary_default: '_eTRQi5ADZCUvUKMZqJU',
                            ripple: 'spMT3NcRD9Yb0ntNaNct',
                            root_primary_outline: 'fCUSh2B0Ye9kEvceE8zc',
                            root_primary_text: 'qlPp6CSQQEMVZPqtqLiQ',
                            root_primary_withHover: 'KZF6_4K1p_Y_GMIAxaAn',
                            root_primary_withHover_default: 'rWukOKAJh5Ga7JuIp62L',
                            root_primary_withHover_outline: 'fdwWCJKgUqml5wNqrRcN',
                            root_primary_withHover_text: 'IgYbZLnYjW0nMahgpkus',
                            root_secondary: '_T4p_w41oaq6L4sztSdw',
                            root_secondary_default: 'iJVAJMgccD4vj4E4o068',
                            root_secondary_outline: 'pnM3iSP9keZOELI2oohr',
                            root_secondary_text: 'UDMYhpDjiAFT3xUx268O',
                            root_secondary_withHover: 'qUbrkhZIOVrvM0roV1QF',
                            root_secondary_withHover_default: 'nHWc2sto1C6Gm0Dpw_l0',
                            root_secondary_withHover_outline: 'i5WuBm5mfG0mflk_1jH_',
                            root_secondary_withHover_text: 'HbaqudSqu7Q3mv3zMPGr',
                            root_plus: 'ixLRsIJ2FvXO2k04n_QY',
                            root_plus_default: 'yRHwHzEGfDgRXGzYJqw2',
                            root_plus_outline: 'e777irPFmyQFFrURLF_U',
                            root_plus_text: 'vRqDhvmt3gt8TFp45_Zw',
                            root_plus_withHover: 'TZif6q3I2RwBEYXwK_iA',
                            root_plus_withHover_default: 'k3DhvmzpnM_Fb9oFdE4q',
                            root_plus_withHover_outline: 'RiDWYwGIxqbrUPR699DM',
                            root_plus_withHover_text: 'hC_mMCzWjkTn2j9xZzGc',
                            root_accent: 'jqD2jMT6n7F0WKyqwMsn',
                            root_accent_default: 'bDp0r9MtoYECZ8ObMoCh',
                            root_accent_outline: 'rXNyGp8NBAw2MUjACZNj',
                            root_accent_text: 'hmV4ERaXWAJc4uPLZL30',
                            root_accent_withHover: 'uKuxXu1N4TP5cWaEK5Ke',
                            root_accent_withHover_default: 't_hequUaUgAMhFuxizLb',
                            root_accent_withHover_outline: 'Oy9sPFTxNTo1_E29U4aF',
                            root_accent_withHover_text: 'LcKRSd3DLoh7k60Oqox8',
                            root_withActiveSpinner: 'nAGvO87rLs15SJgft6Hh',
                            block: 'BbCxxIjBGupN28bq2lSP',
                            icon: 'J9wTKytjOWG73QMoN5WP',
                            icon_position_left: 'elJfazUBui03YWZgHCbW',
                            icon_position_right: 'RBoEbyJKP5rEtLsXM1ji',
                            icon_withButtonSize: 'cE17_kCWJgx8kzQEkeVr',
                            spinnerContainer: 'STbBDGqYjUEcLuNvhu9w',
                        };
                    },
                    1733: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'BnN6sQIg6NahNBun6fkP',
                            fade: 'MM8MKXCw0gMkVvq7C1YS',
                            fade_active: 'MsLY_qiKofQrwKAr98EC',
                            button: 'Dp6n_Y0cfUyPQT1Z6uIm',
                            text: 'bfmUuyonXAK7HKYtDzUK',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: a, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    792: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let i = a(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, i.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, a = Array(e), i = 0; i < e; i++) a[i] = arguments[i];
                                    return t.current.callback(...a);
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
                    588: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0));
                        let i = a(810),
                            l = a(1848);
                        t.useResize = (e, t) => {
                            (0, i.useEffect)(() => {
                                let a = (0, l.getElementFromRefOrElement)(t);
                                if (null === a) return;
                                let i = null != a ? a : document.documentElement,
                                    n = new ResizeObserver(e);
                                return (n.observe(i), () => n.disconnect());
                            }, [t, e]);
                        };
                    },
                    2111: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTruncate = void 0));
                        let i = a(810),
                            l = a(588),
                            n = a(792);
                        t.useTruncate = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
                                [a, s] = (0, i.useState)(0),
                                [r, o] = (0, i.useState)(!1);
                            (0, i.useEffect)(() => {
                                var i;
                                let l = null == (i = e.current) ? void 0 : i.offsetHeight;
                                a || !l || ('vertical' === t && s(l));
                            }, [a, t, e]);
                            let c = (0, n.useCallbackRef)(() => {
                                let i = e.current;
                                i && ('horizontal' === t && o(i.scrollWidth > i.clientWidth), 'vertical' === t && o(i.offsetHeight > 0 && a < i.scrollHeight));
                            });
                            return ((0, l.useResize)(c, e), { isTruncated: r });
                        };
                    },
                    6384: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.findColorBucketByLightness = t.findColorBucketByHue = t.findColorBucketByName = t.LIGHTNESS_COLOR_BUCKETS = t.COLOR_BUCKETS = void 0),
                            (t.COLOR_BUCKETS = [
                                { name: 'coral', start: 2, end: 19, primary: '#F53700', secondary: '#FFD7CC' },
                                { name: 'tangerine', start: 20, end: 64, primary: '#F56E00', secondary: '#FFE3CC' },
                                { name: 'clover', start: 65, end: 149, primary: '#34C03E', secondary: '#D7F4D9' },
                                { name: 'emerald', start: 150, end: 164, primary: '#00C789', secondary: '#CCFFEF' },
                                { name: 'turquoise', start: 165, end: 179, primary: '#00C7A6', secondary: '#CCFFF7' },
                                { name: 'aquamarine', start: 180, end: 189, primary: '#00B2CC', secondary: '#CCF9FF' },
                                { name: 'glacier', start: 190, end: 204, primary: '#5C8E9B', secondary: '#DFE9EC' },
                                { name: 'slate', start: 205, end: 219, primary: '#4F6C9B', secondary: '#DDE4EE' },
                                { name: 'sapphire', start: 220, end: 234, primary: '#0C41E8', secondary: '#CFDAFC' },
                                { name: 'indigo', start: 235, end: 249, primary: '#160CE8', secondary: '#D1CFFC' },
                                { name: 'amethyst', start: 250, end: 259, primary: '#5035C0', secondary: '#DDD7F4' },
                                { name: 'plum', start: 260, end: 269, primary: '#7C35C0', secondary: '#E6D7F4' },
                                { name: 'orchid', start: 270, end: 299, primary: '#BB1ADB', secondary: '#F3D1FA' },
                                { name: 'raspberry', start: 300, end: 329, primary: '#DB1A7D', secondary: '#FAD1E6' },
                                { name: 'fuchsia', start: 330, end: 339, primary: '#F5007C', secondary: '#FFCCE6' },
                                { name: 'carmine', start: 340, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                            ]),
                            (t.LIGHTNESS_COLOR_BUCKETS = [
                                { name: 'amethyst', start: 0, end: 22 },
                                { name: 'indigo', start: 22, end: 32 },
                                { name: 'clover', start: 32, end: 42 },
                                { name: 'raspberry', start: 42, end: 51 },
                                { name: 'aquamarine', start: 51, end: 100 },
                            ]),
                            (t.findColorBucketByName = (e) => t.COLOR_BUCKETS.find((t) => t.name === e)),
                            (t.findColorBucketByHue = (e) =>
                                t.COLOR_BUCKETS.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t <= e.end : t >= e.start && t <= e.end))(t, e))),
                            (t.findColorBucketByLightness = (e) => {
                                let a = t.LIGHTNESS_COLOR_BUCKETS.find((a, i) =>
                                    ((e, a, i) => (i === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? a >= e.start && a <= e.end : a >= e.start && a < e.end))(a, e, i),
                                );
                                return (0, t.findColorBucketByName)(null == a ? void 0 : a.name);
                            }));
                    },
                    2633: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let i = null != a ? a : e.currentTarget,
                                    l = document.createElement('span'),
                                    n = Math.max(i.clientWidth, i.clientHeight),
                                    s = n / 2,
                                    r = i.getBoundingClientRect(),
                                    o = 0 === e.clientX ? Math.round(r.width / 2) : e.clientX - r.left,
                                    c = 0 === e.clientY ? Math.round(r.height / 2) : e.clientY - r.top;
                                ((l.style.width = ''.concat(n, 'px')),
                                    (l.style.height = ''.concat(n, 'px')),
                                    (l.style.left = 0 === e.clientX ? '0px' : ''.concat(o - s, 'px')),
                                    (l.style.top = ''.concat(c - s, 'px')),
                                    l.classList.add(t));
                                let d = i.getElementsByClassName(t)[0];
                                (d && d.remove(), i.insertBefore(l, i.firstChild));
                            }));
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
                    1888: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getVibePaletteColors =
                                t.getVibeColorBucketSelection =
                                t.getVibePaletteByBucketName =
                                t.FALLBACK_PALETTE =
                                t.FALLBACK_NAME =
                                t.SECONDARY_GRADIENT_STOPS =
                                t.PRIMARY_GRADIENT_STOPS =
                                t.PRIMARY_DARK_IDLE_STOPS =
                                    void 0));
                        let i = a(2660),
                            l = a(6384);
                        ((t.PRIMARY_DARK_IDLE_STOPS = Array.from({ length: 16 }, () => '#000000')),
                            (t.PRIMARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#F5002E',
                                    '#CF0027',
                                    '#AF0021',
                                    '#94001C',
                                    '#7C0017',
                                    '#690014',
                                    '#590011',
                                    '#4B000E',
                                    '#40000C',
                                    '#36000A',
                                    '#2D0008',
                                    '#250007',
                                    '#1D0005',
                                    '#140004',
                                    '#0B0002',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#F5007C',
                                    '#CF0069',
                                    '#AF0059',
                                    '#94004B',
                                    '#7C003F',
                                    '#690035',
                                    '#59002D',
                                    '#4B0026',
                                    '#400020',
                                    '#36001B',
                                    '#2D0017',
                                    '#250013',
                                    '#1D000F',
                                    '#14000A',
                                    '#0B0006',
                                    '#000000',
                                ],
                                coral: [
                                    '#F53700',
                                    '#CF2F00',
                                    '#AF2700',
                                    '#942100',
                                    '#7C1C00',
                                    '#691800',
                                    '#591400',
                                    '#4B1100',
                                    '#400E00',
                                    '#360C00',
                                    '#2D0A00',
                                    '#250800',
                                    '#1D0700',
                                    '#140400',
                                    '#0B0200',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#F56E00',
                                    '#CF5D00',
                                    '#AF4F00',
                                    '#944200',
                                    '#7C3800',
                                    '#692F00',
                                    '#592800',
                                    '#4B2200',
                                    '#401D00',
                                    '#361800',
                                    '#2D1400',
                                    '#251100',
                                    '#1D0D00',
                                    '#140900',
                                    '#0B0500',
                                    '#000000',
                                ],
                                clover: [
                                    '#34C03E',
                                    '#2CA334',
                                    '#25892C',
                                    '#1F7425',
                                    '#1A621F',
                                    '#16521B',
                                    '#134516',
                                    '#103B13',
                                    '#0D3210',
                                    '#0B2A0E',
                                    '#0A230B',
                                    '#081D09',
                                    '#061707',
                                    '#041005',
                                    '#020903',
                                    '#000000',
                                ],
                                emerald: [
                                    '#00C789',
                                    '#00A874',
                                    '#008E62',
                                    '#007853',
                                    '#006545',
                                    '#00553B',
                                    '#004832',
                                    '#003D2A',
                                    '#003424',
                                    '#002C1E',
                                    '#002519',
                                    '#001E15',
                                    '#001810',
                                    '#00100B',
                                    '#000906',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#00C7A6',
                                    '#00A88C',
                                    '#008E77',
                                    '#007864',
                                    '#006554',
                                    '#005547',
                                    '#00483C',
                                    '#003D33',
                                    '#00342B',
                                    '#002C25',
                                    '#00251E',
                                    '#001E19',
                                    '#001814',
                                    '#00100E',
                                    '#000907',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#00B2CC',
                                    '#0096AC',
                                    '#007F92',
                                    '#006C7B',
                                    '#005A67',
                                    '#004C57',
                                    '#00414A',
                                    '#00363E',
                                    '#002E35',
                                    '#00272D',
                                    '#002125',
                                    '#001B1F',
                                    '#001518',
                                    '#000F11',
                                    '#000809',
                                    '#000000',
                                ],
                                glacier: [
                                    '#5C8E9B',
                                    '#4E7883',
                                    '#42666F',
                                    '#37565D',
                                    '#2F484F',
                                    '#273D42',
                                    '#213338',
                                    '#1C2B2F',
                                    '#182528',
                                    '#141F22',
                                    '#111A1C',
                                    '#0E1517',
                                    '#0B1112',
                                    '#080C0D',
                                    '#040607',
                                    '#000000',
                                ],
                                slate: [
                                    '#4F6C9B',
                                    '#435B83',
                                    '#384D6F',
                                    '#30415D',
                                    '#28374F',
                                    '#222E42',
                                    '#1D2738',
                                    '#18212F',
                                    '#141C28',
                                    '#111822',
                                    '#0F141C',
                                    '#0C1017',
                                    '#090D12',
                                    '#07090D',
                                    '#040507',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#0C41E8',
                                    '#0A37C4',
                                    '#092EA6',
                                    '#07278C',
                                    '#062176',
                                    '#051C63',
                                    '#041854',
                                    '#041447',
                                    '#03113C',
                                    '#030E33',
                                    '#020C2B',
                                    '#020A23',
                                    '#01081B',
                                    '#010513',
                                    '#01030A',
                                    '#000000',
                                ],
                                indigo: [
                                    '#160CE8',
                                    '#130AC4',
                                    '#1009A6',
                                    '#0D078C',
                                    '#0B0676',
                                    '#090563',
                                    '#080454',
                                    '#070447',
                                    '#06033C',
                                    '#050333',
                                    '#04022B',
                                    '#030223',
                                    '#03011B',
                                    '#020113',
                                    '#01010A',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#5035C0',
                                    '#442DA3',
                                    '#392689',
                                    '#302074',
                                    '#291B62',
                                    '#221752',
                                    '#1D1345',
                                    '#18103B',
                                    '#150E32',
                                    '#120C2A',
                                    '#0F0A23',
                                    '#0C081D',
                                    '#090617',
                                    '#070410',
                                    '#040209',
                                    '#000000',
                                ],
                                plum: [
                                    '#7C35C0',
                                    '#692DA3',
                                    '#592689',
                                    '#4B2074',
                                    '#3F1B62',
                                    '#351752',
                                    '#2D1345',
                                    '#26103B',
                                    '#200E32',
                                    '#1B0C2A',
                                    '#170A23',
                                    '#13081D',
                                    '#0F0617',
                                    '#0A0410',
                                    '#060209',
                                    '#000000',
                                ],
                                orchid: [
                                    '#BB1ADB',
                                    '#9E16B9',
                                    '#86139D',
                                    '#711084',
                                    '#5F0D6F',
                                    '#500B5E',
                                    '#44094F',
                                    '#390843',
                                    '#310739',
                                    '#290630',
                                    '#220528',
                                    '#1C0421',
                                    '#16031A',
                                    '#100212',
                                    '#08010A',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#DB1A7D',
                                    '#B9166A',
                                    '#9D1359',
                                    '#84104B',
                                    '#6F0D40',
                                    '#5E0B36',
                                    '#4F092D',
                                    '#430826',
                                    '#390720',
                                    '#30061B',
                                    '#280517',
                                    '#210413',
                                    '#1A030F',
                                    '#12020A',
                                    '#0A0106',
                                    '#000000',
                                ],
                            }),
                            (t.SECONDARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#FFCCD6',
                                    '#D8ADB5',
                                    '#B69299',
                                    '#9A7B81',
                                    '#82686D',
                                    '#6D575C',
                                    '#5C4A4D',
                                    '#4E3E42',
                                    '#423538',
                                    '#382D2F',
                                    '#2F2527',
                                    '#261F20',
                                    '#1E1819',
                                    '#151112',
                                    '#0B090A',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#FFCCE6',
                                    '#D8ADC3',
                                    '#B692A4',
                                    '#9A7B8B',
                                    '#826875',
                                    '#6D5763',
                                    '#5C4A53',
                                    '#4E3E46',
                                    '#42353C',
                                    '#382D32',
                                    '#2F252A',
                                    '#261F23',
                                    '#1E181B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                                coral: [
                                    '#FFD7CC',
                                    '#D8B6AD',
                                    '#B69A92',
                                    '#9A827B',
                                    '#826D68',
                                    '#6D5C57',
                                    '#5C4E4A',
                                    '#4E423E',
                                    '#423835',
                                    '#382F2D',
                                    '#2F2825',
                                    '#26201F',
                                    '#1E1918',
                                    '#151211',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#FFE3CC',
                                    '#D8C0AD',
                                    '#B6A292',
                                    '#9A897B',
                                    '#827368',
                                    '#6D6157',
                                    '#5C524A',
                                    '#4E463E',
                                    '#423B35',
                                    '#38322D',
                                    '#2F2A25',
                                    '#26221F',
                                    '#1E1B18',
                                    '#151311',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                clover: [
                                    '#D7F4D9',
                                    '#B6CFB8',
                                    '#9AAE9B',
                                    '#829383',
                                    '#6D7C6E',
                                    '#5C695D',
                                    '#4E584F',
                                    '#424B42',
                                    '#383F38',
                                    '#2F3630',
                                    '#282D28',
                                    '#202521',
                                    '#191D1A',
                                    '#121412',
                                    '#0A0B0A',
                                    '#000000',
                                ],
                                emerald: [
                                    '#CCFFEF',
                                    '#ADD8CA',
                                    '#92B6AB',
                                    '#7B9A90',
                                    '#688279',
                                    '#576D66',
                                    '#4A5C56',
                                    '#3E4E49',
                                    '#35423E',
                                    '#2D3834',
                                    '#252F2C',
                                    '#1F2624',
                                    '#181E1C',
                                    '#111514',
                                    '#090B0B',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#CCFFF7',
                                    '#ADD8D1',
                                    '#92B6B1',
                                    '#7B9A95',
                                    '#68827D',
                                    '#576D6A',
                                    '#4A5C59',
                                    '#3E4E4C',
                                    '#354240',
                                    '#2D3836',
                                    '#252F2D',
                                    '#1F2625',
                                    '#181E1D',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#CCF9FF',
                                    '#ADD3D8',
                                    '#92B2B6',
                                    '#7B969A',
                                    '#687F82',
                                    '#576B6D',
                                    '#4A5A5C',
                                    '#3E4C4E',
                                    '#354142',
                                    '#2D3738',
                                    '#252E2F',
                                    '#1F2626',
                                    '#181D1E',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                glacier: [
                                    '#DFE9EC',
                                    '#BDC5C8',
                                    '#9FA7A9',
                                    '#868C8E',
                                    '#717678',
                                    '#606465',
                                    '#515455',
                                    '#444748',
                                    '#3A3C3D',
                                    '#313334',
                                    '#292B2B',
                                    '#222324',
                                    '#1A1B1C',
                                    '#131314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                slate: [
                                    '#DDE4EE',
                                    '#BBC1CA',
                                    '#9EA3AA',
                                    '#85898F',
                                    '#707479',
                                    '#5F6266',
                                    '#505256',
                                    '#444649',
                                    '#393B3E',
                                    '#303234',
                                    '#292A2C',
                                    '#212224',
                                    '#1A1B1C',
                                    '#121314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#CFDAFC',
                                    '#AFB9D5',
                                    '#949CB4',
                                    '#7D8398',
                                    '#696F80',
                                    '#595D6C',
                                    '#4B4F5B',
                                    '#3F434D',
                                    '#363941',
                                    '#2D3037',
                                    '#26282E',
                                    '#1F2126',
                                    '#181A1E',
                                    '#111215',
                                    '#090A0B',
                                    '#000000',
                                ],
                                indigo: [
                                    '#D1CFFC',
                                    '#B1AFD5',
                                    '#9594B4',
                                    '#7E7D98',
                                    '#6A6980',
                                    '#5A596C',
                                    '#4C4B5B',
                                    '#403F4D',
                                    '#363641',
                                    '#2E2D37',
                                    '#26262E',
                                    '#1F1F26',
                                    '#19181E',
                                    '#111115',
                                    '#09090B',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#DDD7F4',
                                    '#BBB6CF',
                                    '#9E9AAE',
                                    '#858293',
                                    '#706D7C',
                                    '#5F5C69',
                                    '#504E58',
                                    '#44424B',
                                    '#39383F',
                                    '#302F36',
                                    '#29282D',
                                    '#212025',
                                    '#1A191D',
                                    '#121214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                plum: [
                                    '#E6D7F4',
                                    '#C3B6CF',
                                    '#A49AAE',
                                    '#8B8293',
                                    '#756D7C',
                                    '#635C69',
                                    '#534E58',
                                    '#46424B',
                                    '#3C383F',
                                    '#322F36',
                                    '#2A282D',
                                    '#232025',
                                    '#1B191D',
                                    '#131214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                orchid: [
                                    '#F3D1FA',
                                    '#CEB1D4',
                                    '#AE95B3',
                                    '#937E97',
                                    '#7B6A7F',
                                    '#685A6B',
                                    '#584C5A',
                                    '#4A404D',
                                    '#3F3641',
                                    '#352E37',
                                    '#2D262E',
                                    '#251F26',
                                    '#1D191D',
                                    '#141115',
                                    '#0B090B',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#FAD1E6',
                                    '#D4B1C3',
                                    '#B395A4',
                                    '#977E8B',
                                    '#7F6A75',
                                    '#6B5A63',
                                    '#5A4C53',
                                    '#4D4046',
                                    '#41363C',
                                    '#372E32',
                                    '#2E262A',
                                    '#261F23',
                                    '#1D191B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                            }),
                            (t.FALLBACK_NAME = 'slate'),
                            (t.FALLBACK_PALETTE = {
                                primary: '#4F6C9B',
                                secondary: '#DDE4EE',
                                primaryStops: t.PRIMARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                secondaryStops: t.SECONDARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                            }));
                        let n = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let a = (0, l.findColorBucketByName)(e);
                            return a ? n(a) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, i.hexToHsl)(e),
                                    a = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === a ? (0, l.findColorBucketByHue)(t.h) : (0, l.findColorBucketByLightness)(t.l), hsl: t, mode: a };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: a } = (0, t.getVibeColorBucketSelection)(e);
                                return a ? n(a) : t.FALLBACK_PALETTE;
                            }));
                    },
                    6882: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0));
                        var i = a(2633);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return i.createRipple;
                            },
                        });
                        var l = a(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return l.getElementFromRefOrElement;
                            },
                        });
                        var n = a(1888);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return n.getVibePaletteColors;
                            },
                        });
                    },
                    7291: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        let l = a(4377),
                            n = a(810),
                            s = a(5881),
                            r = a(6882),
                            o = i(a(2850)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: a,
                                        iconPosition: i = 'left',
                                        children: c,
                                        className: d,
                                        color: u = 'secondary',
                                        flexIcon: _,
                                        icon: m,
                                        spinner: p,
                                        role: v,
                                        onClick: x,
                                        radius: h = 'm',
                                        size: y,
                                        type: C = 'button',
                                        variant: g = 'default',
                                        withRipple: b = !0,
                                        withHover: A = !0,
                                        withBorder: f = !1,
                                        disabled: T,
                                        focusableWhenDisabled: j,
                                        'aria-disabled': N,
                                        iconClassName: S,
                                        contentContainerClassName: I,
                                        ...k
                                    } = e,
                                    L = (0, n.useId)(),
                                    E = !n.Children.toArray(c).filter(Boolean).length,
                                    M = 'left' === i,
                                    P = null,
                                    O = (0, n.isValidElement)(p);
                                if (m) {
                                    var w, R;
                                    P = (0, n.cloneElement)(m, {
                                        className: (0, s.clsx)(
                                            o.default.icon,
                                            {
                                                [o.default['icon_position_'.concat(i)]]: i && !E,
                                                [o.default.icon_withButtonSize]: !(null == (w = m.props) ? void 0 : w.size),
                                            },
                                            null == (R = m.props) ? void 0 : R.className,
                                            S,
                                        ),
                                        key: L,
                                    });
                                }
                                let D = (0, n.useMemo)(() => (O ? (0, l.jsx)('div', { className: o.default.spinnerContainer, children: p }) : null), [O, p]),
                                    B = (0, n.useCallback)(
                                        (e) => {
                                            if (T) {
                                                (e.preventDefault(), e.stopPropagation());
                                                return;
                                            }
                                            O || (b && (0, r.createRipple)(e, o.default.ripple), null == x || x(e));
                                        },
                                        [T, O, x, b],
                                    );
                                return (0, l.jsx)('button', {
                                    ref: t,
                                    className: (0, s.clsx)(
                                        o.default.root,
                                        o.default['root_'.concat(u, '_').concat(g)],
                                        o.default['root_radius_'.concat(h)],
                                        o.default.root_size,
                                        {
                                            [o.default['root_'.concat(u, '_withHover_').concat(g)]]: A && !T && !O,
                                            [o.default['root_size_'.concat(y)]]: y,
                                            [o.default.root_withoutBorder]: !f,
                                            [o.default.root_withActiveSpinner]: O,
                                            [o.default.block]: a,
                                            [o.default.flexIcon]: _,
                                            [o.default.iconOnly]: E,
                                            [o.default.root_icon_left]: m && !E && M,
                                            [o.default.root_icon_right]: m && !E && !M,
                                        },
                                        d,
                                    ),
                                    type: C,
                                    role: v,
                                    onClick: B,
                                    ...k,
                                    disabled: T && !j,
                                    'aria-disabled': (T && j) || N,
                                    'data-disabled': T || void 0,
                                    'aria-live': O ? 'polite' : 'off',
                                    'aria-busy': O,
                                    children:
                                        m || O
                                            ? (0, l.jsxs)('span', {
                                                  className: (0, s.clsx)(o.default.contentContainer, { [o.default.contentContainer_block]: a }, I),
                                                  children: [m && M && P, !E && c, m && !M && P, D],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, n.forwardRef)((e, t) => (0, l.jsx)(c, { forwardRef: t, ...e }));
                    },
                    7642: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CollapsableText = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = a(2111),
                            o = a(7291),
                            c = i(a(1733));
                        t.CollapsableText = (e) => {
                            var t;
                            let {
                                    className: a,
                                    children: i,
                                    lineClamp: d,
                                    moreText: u,
                                    lessText: _,
                                    buttonClassName: m,
                                    buttonProps: p,
                                    withFade: v,
                                    initialOpen: x = !1,
                                    open: h,
                                    onOpenChange: y,
                                    ...C
                                } = e,
                                [g, b] = (0, s.useState)(x),
                                A = (0, s.useRef)(null),
                                { isTruncated: f } = (0, r.useTruncate)(A),
                                T = null != h ? h : g,
                                j = null != y ? y : b,
                                N = (0, s.cloneElement)(i, {
                                    ref: A,
                                    lineClamp: (!T && d) || void 0,
                                    className: (0, n.clsx)(null == (t = i.props) ? void 0 : t.className, c.default.text),
                                }),
                                S = (0, s.useMemo)(
                                    () => (v && f ? (0, l.jsx)('div', { className: (0, n.clsx)(c.default.fade, { [c.default.fade_active]: !T }), children: N }) : N),
                                    [f, T, N, v],
                                ),
                                I = (0, s.useCallback)(() => {
                                    j(!T);
                                }, [T, j]),
                                k = T ? _ : u;
                            return (0, l.jsxs)('div', {
                                className: (0, n.clsx)(c.default.root, a),
                                ...C,
                                children: [
                                    S,
                                    f &&
                                        k &&
                                        (0, l.jsx)(o.Button, {
                                            ...p,
                                            variant: 'text',
                                            withRipple: !1,
                                            onClick: I,
                                            className: (0, n.clsx)(c.default.button, m),
                                            color: 'primary',
                                            children: k,
                                        }),
                                ],
                            });
                        };
                    },
                    2660: (e) => {
                        e.exports = ef;
                    },
                    810: (e) => {
                        e.exports = A;
                    },
                },
                ej = {};
            function eN(e) {
                var t = ej[e];
                if (void 0 !== t) return t.exports;
                var a = (ej[e] = { exports: {} });
                return (eT[e].call(a.exports, a, a.exports, eN), a.exports);
            }
            ((eN.d = (e, t) => {
                for (var a in t) eN.o(t, a) && !eN.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (eN.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (eN.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var eS = {};
            (() => {
                (Object.defineProperty(eS, 'X', { value: !0 }), (eS.f = void 0));
                var e = eN(7642);
                Object.defineProperty(eS, 'f', {
                    enumerable: !0,
                    get: function () {
                        return e.CollapsableText;
                    },
                });
            })();
            var eI = eS.f;
            eS.X;
            var ek = a(85614),
                eL = a(94770),
                eE = a.n(eL);
            let eM = (e) => {
                let { lyrics: t, authors: a, source: i, isShimmerVisible: l, isShimmerActive: n } = e,
                    { formatMessage: s } = (0, q.A)();
                return l
                    ? (0, h.jsx)(ek.q, { count: 25, isActive: n })
                    : (0, h.jsxs)(h.Fragment, {
                          children: [
                              t,
                              (0, h.jsxs)('div', {
                                  className: eE().writers,
                                  children: [
                                      a.length > 0 &&
                                          (0, h.jsx)(ed.HL, {
                                              variant: 'div',
                                              size: 'l',
                                              weight: 'medium',
                                              'data-test-id': $.e8.content.TRACK_LYRICS_AUTHORS,
                                              children: s({ id: 'entity-names.authors' }, { authors: a }),
                                          }),
                                      i &&
                                          (0, h.jsx)(ed.HL, {
                                              variant: 'div',
                                              size: 'l',
                                              weight: 'medium',
                                              'data-test-id': $.e8.content.TRACK_LYRICS_SOURCE,
                                              children: s({ id: 'entity-names.source' }, { source: i }),
                                          }),
                                  ],
                              }),
                          ],
                      });
            };
            var eP = a(776),
                eO = a.n(eP),
                ew = a(65724),
                eR = a(71335),
                eD = a.n(eR);
            let eB = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, h.jsxs)('div', {
                        className: eD().root,
                        children: [
                            (0, h.jsx)(eh.W, { className: eD().title, isActive: t }),
                            (0, h.jsx)(ek.q, { className: (0, ew.$)(eD().lyrics, eD().important), count: 4, isActive: t }),
                            (0, h.jsx)(eh.W, { className: eD().button, isActive: t }),
                        ],
                    });
                },
                eF = (0, y.PA)((e) => {
                    var t, a, i, l;
                    let { track: n } = e,
                        { formatMessage: s } = (0, q.A)(),
                        { notify: r } = (0, eo.l)(),
                        { track: o, trackLyrics: c } = (0, N.g)(),
                        { state: d, setState: u } = (0, eA.e)(!1),
                        _ = c.currentTrackId !== (null == (t = o.meta) ? void 0 : t.id),
                        // for PulseSync: BEGIN track identity and availability for plain-text lyrics fallback
                        m = o.isResolved && (null == (a = o.meta) ? void 0 : a.isLyricsAvailable),
                        trackId = null == n ? void 0 : n.id,
                        isAvailable = null == n ? void 0 : n.isAvailable,
                        isLyricsAvailable = null == n ? void 0 : n.isLyricsAvailable;
                        // for PulseSync: END track identity and availability for plain-text lyrics fallback
                    ((0, b.useEffect)(() => {
                        var e;
                        // for PulseSync: BEGIN load native plain-text lyrics for resolved track metadata
                        (null == (e = o.meta) ? void 0 : e.id) && m && _ && (c.setTrack(o.meta), c.getLyrics(o.meta.id));
                        // for PulseSync: END load native plain-text lyrics for resolved track metadata
                    }, [_, m, c, null == (i = o.meta) ? void 0 : i.id]),
                        // for PulseSync: BEGIN load fallback plain-text lyrics when native lyrics are unavailable
                        (0, b.useEffect)(() => {
                            const currentTrackId = c.currentTrackId == null ? null : String(c.currentTrackId);
                            const requestedTrackId = trackId == null ? null : String(trackId);
                            const hasLyrics = Boolean(c.lyrics && String(c.lyrics).trim().length > 0);
                            const hasLyricsForRequestedTrack =
                                hasLyrics && (!c.currentTrackId || (requestedTrackId && currentTrackId && requestedTrackId === currentTrackId));
                            if (
                                !trackId ||
                                isAvailable === false ||
                                isLyricsAvailable ||
                                c.isLoading ||
                                hasLyricsForRequestedTrack ||
                                (requestedTrackId && currentTrackId && requestedTrackId === currentTrackId && c.isRejected)
                            )
                                return;
                            c.setTrack(n);
                            c.getLyrics(trackId);
                        }, [trackId, isAvailable, isLyricsAvailable, c.currentTrackId, c.isRejected, c.isLoading, c.lyrics, c, n]),
                        // for PulseSync: END load fallback plain-text lyrics when native lyrics are unavailable
                        c.shouldShowErrorNotification &&
                            (r(
                                (0, h.jsx)(ec.h, {
                                    error: s({
                                        id: 'error-messages.error-during-action',
                                    }),
                                }),
                                {
                                    containerId: er.u.ERROR,
                                },
                            ),
                            c.resetShouldShowError()));
                    let p = (0, f.c)((e) => {
                        (u(e),
                            e &&
                                n &&
                                c.sendViews({
                                    trackId: n.id,
                                    albumId: n.albumId,
                                }));
                    });
                    // for PulseSync: BEGIN show loading state only until plain-text lyrics are available
                    const hasLyrics = Boolean(c.lyrics && String(c.lyrics).trim().length > 0);
                    const shouldShowShimmer = c.isShimmerVisible || o.isShimmerVisible || (c.isLoading && !hasLyrics);
                    return shouldShowShimmer
                        ? (0, h.jsx)(eB, {
                              isShimmerActive: c.isLoading || o.isLoading,
                          })
                        : !hasLyrics
                          ? null
                          : (0, h.jsxs)('div', {
                                className: eO().root,
                                'data-test-id': $.Xk.track.TRACK_PAGE_LYRICS,
                                children: [
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        lineClamp: 1,
                                        className: eO().title,
                                        'data-test-id': $.e8.content.TRACK_LYRICS_TITLE,
                                        children: s({
                                            id: 'entity-names.text',
                                        }),
                                    }),
                                    (0, h.jsx)(eI, {
                                        moreText: s({
                                            id: 'track-modal.read-more',
                                        }),
                                        buttonClassName: eO().button,
                                        buttonProps: {
                                            'data-test-id': $.e8.content.TRACK_LYRICS_TITLE_READ_MORE_BUTTON,
                                        },
                                        open: d,
                                        onOpenChange: p,
                                        lineClamp: 4,
                                        withFade: !0,
                                        children: (0, h.jsx)(
                                            ed.HL,
                                            {
                                                variant: 'div',
                                                className: eO().lyrics,
                                                size: 'l',
                                                weight: 'medium',
                                                'data-test-id': $.e8.content.TRACK_LYRICS_TEXT,
                                                children: (0, h.jsx)(eM, {
                                                    lyrics: c.lyrics,
                                                    authors: c.writersNames,
                                                    source: null == (l = c.major) ? void 0 : l.prettyName,
                                                    isShimmerVisible: c.isShimmerVisible,
                                                    isShimmerActive: c.isLoading,
                                                }),
                                            },
                                            null == n ? void 0 : n.getKey('lyrics'),
                                        ),
                                    }),
                                ],
                            });
                    // for PulseSync: END show loading state only until plain-text lyrics are available
                });
            var eU = a(18593),
                eV = a(40512),
                ez = a(10829),
                eK = a(84384),
                eH = a(98644),
                eW = a(67984),
                eY = a(93015),
                eq = a(19722),
                e$ = a.n(eq);
            let eQ = (0, y.PA)((e) => {
                let { tracks: t, contextId: a, isShimmerVisible: i, isShimmerActive: l, autoflowSeeds: n, shouldResetCarouselScroll: s } = e,
                    { formatMessage: r } = (0, q.A)(),
                    { from: o } = (0, eK.f)({ contextId: a, contextType: eU.K.Various }),
                    c = (0, f.c)((e, a) => ({
                        contextData: { type: eU.K.Various, meta: { id: e.entityId }, from: o, overrideAutoflowSeeds: n },
                        queueParams: { index: a },
                        loadContextMeta: !1,
                        entitiesData: t.map(eV.$),
                    }));
                return (0, h.jsx)(eW.$, {
                    className: e$().root,
                    shimmer: (0, h.jsx)(eY.D, { variant: eH.X.PLAYLIST, isActive: l }),
                    maxColumnsCount: eW.D.TWO,
                    itemsCountPerColumn: 4,
                    blockHeaderTitle: r({ id: 'track-modal.similar-tracks' }),
                    blockHeaderHeadingVariant: 'h2',
                    isShimmerVisible: i,
                    isShimmerActive: l,
                    carouselItemClassName: (0, ew.$)(e$().item, e$().important),
                    blockHeaderClassName: e$().title,
                    carouselClassName: e$().tracksContainer,
                    shouldResetCarouselScroll: s,
                    'data-test-id': $.Xk.track.TRACK_PAGE_SIMILAR_TRACKS,
                    children: t.map((e, t) => (0, h.jsx)(ez.K, { track: e, playContextParams: c(e, t), withDislike: !1, withTrailer: !1 }, e.id)),
                });
            });
            var eG = a(61097),
                eZ = a(13946),
                eX = a(90224),
                eJ = a(88969),
                e0 = a(46482),
                e1 = a(99409),
                e2 = a(1829),
                e4 = a(42174),
                e8 = a(5407),
                e6 = a(9618),
                e3 = a(4795),
                e5 = a(39079),
                e9 = a(49738),
                e7 = a(16704),
                te = a(70322),
                tt = a(58255),
                ta = a(43054),
                ti = a(18117),
                tl = a(24709);
            let tn = (0, tl.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: [] }, function (e) {
                    let t = (0, ta.s)(),
                        { hash: a } = (0, ti.g)();
                    return (0, f.c)(() => {
                        if (!t || void 0 === a || void 0 === e.objectId) return;
                        let i = {
                            hash: a,
                            pageId: C.AppScreen.TrackScreen,
                            mainObjectType: C.DomainObjectType.Track,
                            mainObjectId: e.objectId,
                            entityId: 'buy_subscription_button',
                            pageStyle: C.PageStyles.Sheet,
                            pagePlacement: C.PagePlacements.Right,
                            from: C.AppScreen.TrackScreen,
                            to: C.AppScreen.PaywallScreen,
                            tabId: '',
                            tabPos: 0,
                        };
                        (0, tt.QS)(t.evgenInstance, i);
                    });
                }),
                ts = (0, tl.n)({ event: 'LandingBlock.Showed', kind: 'hook', requiredScopes: [] }, function (e) {
                    let t = (0, ta.s)(),
                        { hash: a } = (0, ti.g)();
                    return (0, f.c)(() => {
                        if (!t || void 0 === a || void 0 === e.objectId) return;
                        let i = {
                            hash: a,
                            pageId: C.AppScreen.TrackScreen,
                            mainObjectType: C.DomainObjectType.Track,
                            mainObjectId: e.objectId,
                            entityId: 'buy_subscription_button',
                            pageStyle: C.PageStyles.Sheet,
                            pagePlacement: C.PagePlacements.Right,
                            tabId: '',
                            tabPos: 0,
                        };
                        (0, tt.Pf)(t.evgenInstance, i);
                    });
                });
            var tr = a(25196),
                to = a.n(tr);
            let tc = (0, y.PA)((e) => {
                var t, a, i;
                let { track: l } = e,
                    { shouldShowBuySubscriptionModal: n, showBuySubscriptionModal: s } = (0, e6.q)(),
                    { from: r, utmLink: o } = (0, eK.f)({ contextId: l.id, contextType: eU.K.Various }),
                    {
                        user: c,
                        settings: { isMobile: d },
                        track: { shouldSendEventOnPlusButtonShowed: u, setShouldSendEventOnPlusButtonShowed: _, isOpened: m },
                        albumCPA: { isPlusCPAPlayerBarEnabled: p },
                        paywall: { modal: v },
                    } = (0, N.g)(),
                    x = (0, e0.g)(),
                    y = tn({ objectId: l.id }),
                    C = ts({ objectId: l.id }),
                    g = (0, e8.P)(),
                    A = !c.hasPlus && l.isTrackMusic && ((l.isAvailable && !l.hasModalAccess) || (null == (t = l.mainAlbum) ? void 0 : t.isAvailableOnlyForPlus)),
                    T = (0, e3.N)(),
                    j = p(null == (a = l.mainAlbum) ? void 0 : a.id, null == (i = l.mainAlbum) ? void 0 : i.isNonMusic),
                    S = l.isAvailable && T && !j,
                    { iconSize: I, controlSize: k } = (0, e1.q)(d),
                    [L, E] = (0, b.useState)(!1),
                    { isPlaying: M, togglePlay: P } = (0, e5.D)({
                        playContextParams: { contextData: { type: eU.K.Various, meta: { id: l.entityId }, from: r, utmLink: o }, loadContextMeta: !0 },
                        entityId: l.entityId,
                    }),
                    O = (0, f.c)(() => {
                        (P(), M || x());
                    }),
                    w = (0, X.w)({ track: l, callback: O }),
                    R = (0, f.c)(() => {
                        if (!g()) {
                            if (n && !j) return void s();
                            if (S) return void v.open();
                            w();
                        }
                    }),
                    D = (0, e4.K)(l),
                    B = (0, f.c)((e) => {
                        e.stopPropagation();
                    });
                (0, b.useEffect)(() => {
                    u && A && m && (C(), _(!1));
                }, [C, A, u, _, m]);
                let F = (0, b.useMemo)(() => {
                        if (A) return (0, h.jsx)(te.h, { text: (0, h.jsx)(eJ.A, { id: 'payment.high-quality-offer-button-title' }), analyticsNavigatedCallback: y });
                    }, [A, y]),
                    U = A ? 'secondary' : 'primary';
                return (0, h.jsxs)('div', {
                    className: to().root,
                    children: [
                        F,
                        (0, h.jsxs)('div', {
                            className: to().controlsContainer,
                            children: [
                                (0, h.jsx)(e7.D, {
                                    className: (0, ew.$)({ [to().disabledButtonByDisclaimer]: !l.isAvailable && l.hasModalAccess }),
                                    withRipple: l.isAvailable,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: k,
                                    color: U,
                                    iconSize: I,
                                    isPlaying: M,
                                    onClick: R,
                                    disabled: !l.isAvailable && !l.hasModalAccess,
                                    children: !d && (0, h.jsx)(eJ.A, { id: 'player-actions.listen' }),
                                }),
                                (0, h.jsx)(e9.c, {
                                    isLiked: l.isLiked,
                                    onClick: D,
                                    variant: 'default',
                                    size: k,
                                    iconSize: I,
                                    withRipple: !d,
                                    disabled: !l.isAvailable || !c.isAuthorized,
                                }),
                                l.isAvailable &&
                                    (0, h.jsx)(e2._, {
                                        track: l,
                                        open: L,
                                        onOpenChange: E,
                                        size: k,
                                        icon: (0, h.jsx)(G.I, { variant: 'more', size: I }),
                                        className: (0, ew.$)(to().menuButton, { [to().menuButton_active]: L }),
                                        wrapperClassName: to().menuWrapper,
                                        onClick: B,
                                        withTrailer: !1,
                                        'data-test-id': $.e8.pageHeader.TRACK_HEADER_CONTEXT_MENU_BUTTON,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var td = a(91086),
                tu = a.n(td),
                t_ = a(43557),
                tm = a.n(t_);
            let tp = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, h.jsxs)('div', {
                        className: tm().root,
                        children: [
                            (0, h.jsx)(eh.W, { className: tm().entityName, isActive: t }),
                            (0, h.jsx)(eh.W, { className: tm().title, isActive: t }),
                            (0, h.jsx)(ek.q, {
                                className: (0, ew.$)(tm().artists, tm().important),
                                shimmerClassName: tm().artist,
                                count: 3,
                                minWidth: 10,
                                maxWidth: 30,
                                isActive: t,
                            }),
                            (0, h.jsxs)('div', {
                                className: tm().controls,
                                children: [
                                    (0, h.jsx)(eh.W, { className: tm().playButton, isActive: t }),
                                    (0, h.jsx)(eh.W, { className: tm().button, isActive: t }),
                                    (0, h.jsx)(eh.W, { className: tm().button, isActive: t }),
                                    (0, h.jsx)(eh.W, { className: tm().button, isActive: t }),
                                ],
                            }),
                        ],
                    });
                },
                tv = (0, y.PA)((e) => {
                    let { track: t, isShimmerVisible: a, isShimmerActive: i, isTrackPage: l } = e,
                        { formatMessage: n } = (0, q.A)(),
                        {
                            settings: { isMobile: s },
                        } = (0, N.g)(),
                        r = null == t ? void 0 : t.explicitDisclaimer,
                        o = (0, b.useMemo)(() => {
                            if (r)
                                return (0, h.jsx)(eX.N, {
                                    className: (0, ew.$)(tu().explicitMark, tu().important),
                                    getDescriptionTexts: t.getDescriptionTexts,
                                    size: 'xxs',
                                    variant: r,
                                });
                        }, [r, null == t ? void 0 : t.getDescriptionTexts]);
                    return a
                        ? (0, h.jsx)(tp, { isShimmerActive: i })
                        : t
                          ? (0, h.jsx)(eG.k, {
                                entityName: n({ id: 'entity-names.track-type' }, { type: (0, em.y)(t.type) }),
                                entityNameIcon: o,
                                controls: (0, h.jsx)(tc, { track: t }),
                                meta: (0, h.jsx)(eZ.i, {
                                    className: (0, ew.$)(tu().text, tu().important),
                                    linkClassName: tu().link,
                                    captionClassName: tu().artistCaption,
                                    artists: t.artists,
                                    variant: 'breakWord',
                                    separator: s ? '' : void 0,
                                }),
                                title: t.title,
                                version: t.version,
                                headingVariant: l ? 'h1' : 'div',
                                titleClassName: (0, ew.$)(tu().title, tu().important),
                                metaClassName: (0, ew.$)(tu().meta, tu().important),
                                contentClassName: (0, ew.$)(tu().content, tu().important),
                                withHeadingClamp: !1,
                                entityNameClassName: tu().entityName,
                            })
                          : null;
                }),
                tx = (0, y.PA)(() => {
                    var e, t, a, i, l, n, s, r;
                    let { formatMessage: o } = (0, q.A)(),
                        { notify: c } = (0, eo.l)(),
                        {
                            user: d,
                            track: u,
                            albumCPA: { isPlusCPAPlayerBarEnabled: _ },
                        } = (0, N.g)(),
                        m = _(
                            null == (t = u.meta) || null == (e = t.mainAlbum) ? void 0 : e.id,
                            null == (i = u.meta) || null == (a = i.mainAlbum) ? void 0 : a.isNonMusic,
                        ),
                        { shouldShowSimilarTracks: p } = ((e, t, a) => {
                            let i = null != e ? e : [],
                                l = i.length > 0 && (0, Z.f)(t) && !a;
                            return { tracks: l ? i.slice(0, 8) : [], shouldShowSimilarTracks: l };
                        })(u.similarTracks, null == (l = u.meta) ? void 0 : l.type, m),
                        v = (0, f.c)(() => {
                            (u.setAnimationState(!0), u.close(), u.reset());
                        }),
                        x = (0, X.w)({ track: u.meta, disclaimerRejectHandler: v });
                    return (
                        (0, b.useEffect)(() => {
                            var e;
                            u.isOpened && (null == (e = u.meta) ? void 0 : e.isLegalRejected) && u.close();
                        }, [u, u.isOpened, null == (n = u.meta) ? void 0 : n.isLegalRejected]),
                        (0, b.useEffect)(() => {
                            x();
                        }, [x]),
                        u.isRejected && c((0, h.jsx)(ec.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: er.u.ERROR }),
                        (0, h.jsxs)('div', {
                            'data-test-id': $.Xk.track.TRACK_PAGE,
                            children: [
                                (0, h.jsxs)('header', {
                                    className: Y().header,
                                    children: [
                                        (0, h.jsx)(Q.$, {
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'xxs',
                                            icon: (0, h.jsx)(G.I, { variant: 'close', size: 'xxs' }),
                                            className: Y().closeButton,
                                            onClick: v,
                                            'aria-label': o({ id: 'interface-actions.close' }),
                                            'data-test-id': $.Xk.track.TRACK_PAGE_CLOSE_BUTTON,
                                        }),
                                        (0, h.jsx)(tv, { track: u.meta, isShimmerVisible: u.isShimmerVisible, isShimmerActive: u.isLoading, isTrackPage: u.isTrackPage }),
                                    ],
                                }),
                                (0, h.jsxs)('div', {
                                    className: Y().content,
                                    'data-test-id': $.Xk.track.TRACK_PAGE_CONTENT,
                                    children: [
                                        (0, h.jsx)(eb, { onModalClose: v }),
                                        // for PulseSync: BEGIN show the track lyrics section when LRCLIB fallback is enabled
                                        u.meta &&
                                            ((null == (s = u.meta) ? void 0 : s.isLyricsAvailable) || window.nativeSettings?.get('modSettings.lrclib.useText') !== !1) &&
                                            (0, h.jsx)(eF, { track: u.meta }, u.meta.id),
                                        // for PulseSync: END show the track lyrics section when LRCLIB fallback is enabled
                                        p &&
                                            u.similarTracks &&
                                            (0, h.jsx)(eQ, {
                                                tracks: u.similarTracks,
                                                contextId: null == (r = u.meta) ? void 0 : r.entityId,
                                                isShimmerVisible: u.isShimmerVisible,
                                                isShimmerActive: u.isLoading,
                                                autoflowSeeds: u.seeds,
                                                shouldResetCarouselScroll: u.shouldReloadMeta,
                                            }),
                                    ],
                                }),
                                u.meta && (0, h.jsx)(es, { user: d, track: u.meta }),
                            ],
                        })
                    );
                }),
                th = (0, y.PA)(() => {
                    let { contentRef: e } = (0, j.g)(),
                        {
                            album: t,
                            track: a,
                            settings: { isMobile: i },
                            experiments: l,
                        } = (0, N.g)(),
                        n = l.checkExperiment(S.z.WebNextTrackModalCloseOnNavigate, 'on');
                    (a.trackId && a.albumId && a.isOpened && a.getData(),
                        (0, b.useEffect)(
                            () => () => {
                                a.reset();
                            },
                            [a],
                        ),
                        (0, b.useEffect)(() => {
                            a.isOpened && a.setAnimationState(!1);
                        }, [a]),
                        ((e, t, a) => {
                            var i, l;
                            let n = null != (i = null == e ? void 0 : e.title) ? i : '',
                                s = null != (l = null == t ? void 0 : t.title) ? l : '',
                                r = null == t ? void 0 : t.isLegalRejected,
                                o = (0, b.useCallback)(
                                    (i) => {
                                        if (!a || !e || !t || r) return;
                                        let l = { ...(0, L.f)(e), title: n };
                                        return H(
                                            {
                                                ...((e) =>
                                                    e
                                                        ? { id: e.id, artists: e.artists.map(k.N), durationMs: e.durationMs, title: e.title, type: e.type }
                                                        : { id: 0, artists: [], durationMs: 0, title: '', type: I.S.TRACK })(t),
                                                title: s,
                                            },
                                            l,
                                            i,
                                        );
                                    },
                                    [e, n, t, s, r, a],
                                );
                            (0, E.C)(o);
                        })(t.meta, a.meta, a.isOpened));
                    let s = (0, f.c)((e) => {
                        var t;
                        null == (t = a.onOpenChange) || t.call(a, e);
                    });
                    return i || e
                        ? (0, h.jsx)(T.a, {
                              size: 'fitContent',
                              placement: i ? 'default' : 'right',
                              open: a.isOpened,
                              onOpenChange: s,
                              className: Y().root,
                              contentClassName: Y().modalContent,
                              portalNode: i ? null : e,
                              showHeader: !1,
                              withOverlay: n || i,
                              closeOnOutsidePress: n,
                              withAnimation: n || a.withAnimation,
                              isMobile: i,
                              lockScroll: i,
                              children: (0, h.jsx)(tx, {}),
                          })
                        : null;
                });
            var ty = a(38053),
                tC = a(26756),
                tg = a(81223),
                tb = a.n(tg);
            let tA = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, q.A)(),
                        { notify: t } = (0, eo.l)(),
                        { contentRef: a } = (0, j.g)(),
                        {
                            currentClipInfo: i,
                            settings: { isMobile: l, isWindowsApplication: n },
                            fullscreenVideoPlayer: s,
                        } = (0, N.g)(),
                        { modal: r, clip: o } = i;
                    (!o && i.isClipIdle && i.getClip(), !i.credits && i.isCreditsIdle && i.getCreditsInfo());
                    let c = null == o ? void 0 : o.title,
                        d = null == o ? void 0 : o.explicitDisclaimer,
                        u = (0, b.useMemo)(
                            () =>
                                i.isClipLoading || i.isClipRejected
                                    ? (0, h.jsx)(ek.q, { className: tb().titleShimmer, count: 1 })
                                    : o
                                      ? (0, h.jsxs)('span', {
                                            children: [
                                                c,
                                                d &&
                                                    (0, h.jsx)(eX.N, {
                                                        getDescriptionTexts: o.getDescriptionTexts,
                                                        className: (0, ew.$)(tb().explicitMark, tb().important),
                                                        size: 'xxs',
                                                        variant: d,
                                                    }),
                                            ],
                                        })
                                      : void 0,
                            [o, c, d, i.isClipLoading, i.isClipRejected],
                        );
                    (0, b.useEffect)(
                        () => () => {
                            (r.close(), i.reset());
                        },
                        [i, r],
                    );
                    let _ = (0, b.useCallback)(() => {
                            (r.close(), i.reset());
                        }, [i, r]),
                        m = (0, b.useCallback)(
                            (e) => {
                                var t;
                                (e || i.reset(), null == (t = r.onOpenChange) || t.call(r, e));
                            },
                            [i, r],
                        );
                    i.isRejected &&
                        (_(),
                        t((0, h.jsx)(ec.h, { error: e({ id: 'error-messages.error-during-action' }) }), {
                            containerId: s.modal.isOpened ? er.u.FULLSCREEN_ERROR : er.u.ERROR,
                        }));
                    let p = (0, b.useMemo)(() => {
                        var e;
                        return i.isCreditsLoading || i.isCreditsRejected
                            ? (0, h.jsx)(ek.q, {})
                            : (null == (e = i.credits) ? void 0 : e.length)
                              ? i.credits.map((e) => {
                                    let t = (0, h.jsx)(tC.D, { children: e.value });
                                    return (0, h.jsx)(ty.O, { infoDescription: t, title: e.title }, e.title);
                                })
                              : null;
                    }, [i.credits, i.isCreditsLoading, i.isCreditsRejected]);
                    return (0, h.jsx)(T.a, {
                        'data-test-id': $.Kq.clip.CLIP_ABOUT_MODAL,
                        placement: l ? 'default' : 'right',
                        open: r.isOpened,
                        onClose: _,
                        contentClassName: tb().modalContent,
                        title: u,
                        headerClassName: tb().header,
                        className: (0, ew.$)(tb().root, { [tb().root_withFullscreen]: s.modal.isOpened, [tb().root_withWindows]: n }),
                        onOpenChange: m,
                        labelClose: e({ id: 'interface-actions.close' }),
                        portalNode: l || s.modal.isOpened ? null : a,
                        children: (0, h.jsx)('div', { className: tb().content, children: p }),
                    });
                }),
                tf = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? null : (0, h.jsx)(tA, {});
                });
            var tT = a(64310),
                tj = a(79070);
            let tN = (0, y.PA)(() => {
                let { formatMessage: e } = (0, q.A)(),
                    { currentTrackInfo: t } = (0, N.g)(),
                    { fullTrack: a } = t,
                    i = (0, tj.L)(() => {
                        var t, i, l;
                        if (!(null == a || null == (t = a.mainAlbum) ? void 0 : t.title)) return;
                        let n = (0, h.jsx)(tC.D, {
                            href: null == a || null == (i = a.mainAlbum) ? void 0 : i.url,
                            children: null == a || null == (l = a.mainAlbum) ? void 0 : l.title,
                        });
                        return (0, h.jsx)(ty.O, { title: e({ id: 'entity-names.audiobook' }), infoDescription: n });
                    }),
                    l = (0, tj.L)(() => {
                        if (!(null == a ? void 0 : a.shortDescription)) return;
                        let e = (0, h.jsx)(tC.D, { children: null == a ? void 0 : a.shortDescription });
                        return (0, h.jsx)(ty.O, { infoDescription: e });
                    });
                return (0, h.jsxs)(h.Fragment, { children: [l, i] });
            });
            var tS = a(86696),
                tI = a.n(tS);
            let tk = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, q.A)(),
                        { currentTrackInfo: t } = (0, N.g)(),
                        a = t.fullTrack,
                        i = (0, b.useMemo)(
                            () =>
                                t.fullDescription
                                    ? (0, h.jsx)('span', { className: tI().text, dangerouslySetInnerHTML: { __html: (0, ei.ky)(t.fullDescription) } })
                                    : null == a
                                      ? void 0
                                      : a.shortDescription,
                            [null == a ? void 0 : a.shortDescription, t.fullDescription],
                        ),
                        l = (0, tj.L)(() => {
                            if (!i) return;
                            let e = (0, h.jsx)(tC.D, { children: i });
                            return (0, h.jsx)(ty.O, { infoDescription: e });
                        }),
                        n = (0, tj.L)(() => {
                            var t, i, l;
                            if (!(null == a || null == (t = a.mainAlbum) ? void 0 : t.title)) return;
                            let n = (0, h.jsx)(tC.D, {
                                href: null == a || null == (i = a.mainAlbum) ? void 0 : i.url,
                                children: null == a || null == (l = a.mainAlbum) ? void 0 : l.title,
                            });
                            return (0, h.jsx)(ty.O, { title: e({ id: 'entity-names.podcast' }), infoDescription: n });
                        });
                    return (0, h.jsxs)(h.Fragment, { children: [l, n] });
                }),
                tL = (0, y.PA)(() => {
                    var e, t, a, i, l;
                    let { formatMessage: n } = (0, q.A)(),
                        { notify: s } = (0, eo.l)(),
                        { contentRef: r } = (0, j.g)(),
                        {
                            currentTrackInfo: o,
                            settings: { isMobile: c, isWindowsApplication: d, isLinuxApplication: u },
                            fullscreenPlayer: _,
                            experiments: m,
                        } = (0, N.g)(),
                        { modal: p } = o,
                        v = o.isUGC,
                        x = m.checkExperiment(S.z.WebEditorsFeatures, 'on');
                    (v && o.isTrackIdle && o.getTrackMeta(),
                        o.fullTrack || !o.isTrackIdle || v || o.getFullTrack(),
                        !o.credits && o.isCreditsIdle && o.getCreditsInfo(),
                        ((null == (e = o.fullTrack) ? void 0 : e.isTrackPodcast) || (null == (a = o.fullTrack) || null == (t = a.mainAlbum) ? void 0 : t.isPodcast)) &&
                            o.getFullDescription(),
                        (0, b.useEffect)(
                            () => () => {
                                (p.close(), o.reset());
                            },
                            [o, p],
                        ));
                    let y = (0, b.useCallback)(() => {
                            (p.close(), o.reset());
                        }, [o, p]),
                        C = (0, b.useCallback)(
                            (e) => {
                                var t;
                                (e || o.reset(), null == (t = p.onOpenChange) || t.call(p, e));
                            },
                            [o, p],
                        );
                    o.isRejected &&
                        (y(),
                        s((0, h.jsx)(ec.h, { error: n({ id: 'error-messages.error-during-action' }) }), {
                            containerId: _.modal.isOpened ? er.u.FULLSCREEN_ERROR : er.u.ERROR,
                        }));
                    let g = o.fullTrack,
                        A = null == g ? void 0 : g.explicitDisclaimer,
                        f = (0, b.useMemo)(() => {
                            var e;
                            if (g)
                                return (0, h.jsxs)('span', {
                                    children: [
                                        g.title,
                                        g.version && (0, h.jsx)('span', { className: tI().version, children: g.version }),
                                        A &&
                                            (0, h.jsx)(eX.N, {
                                                className: (0, ew.$)(tI().explicitMark, tI().important, { [tI().explicit]: !g.isTrackNonMusic }),
                                                getDescriptionTexts: null == (e = o.fullTrack) ? void 0 : e.getDescriptionTexts,
                                                size: 'xxs',
                                                variant: A,
                                            }),
                                    ],
                                });
                        }, [g, A, null == (i = o.fullTrack) ? void 0 : i.getDescriptionTexts]),
                        k = (0, b.useMemo)(() => {
                            var e;
                            return (null == g ? void 0 : g.type) === I.S.AUDIOBOOK
                                ? (0, h.jsx)(tN, {})
                                : (null == g ? void 0 : g.isTrackPodcast) || (null == g || null == (e = g.mainAlbum) ? void 0 : e.isPodcast)
                                  ? (0, h.jsx)(tk, {})
                                  : void 0;
                        }, [g]),
                        L = (0, b.useMemo)(() => {
                            var e;
                            return (null == (e = o.credits) ? void 0 : e.length)
                                ? o.credits.map((e) => {
                                      let { title: t, value: a } = e,
                                          i = (0, h.jsx)(tC.D, { children: a });
                                      return (0, h.jsx)(ty.O, { title: t, infoDescription: i }, t);
                                  })
                                : null;
                        }, [o.credits]),
                        E = (0, b.useMemo)(() => {
                            var e;
                            if ((null == (e = o.fullTrack) ? void 0 : e.major) && x) {
                                let e = o.fullTrack.major.name;
                                if (e) {
                                    let t = (0, h.jsx)(tC.D, { children: e });
                                    return (0, h.jsx)(ty.O, { title: 'Major', infoDescription: t }, e);
                                }
                            }
                            return null;
                        }, [null == (l = o.fullTrack) ? void 0 : l.major, x]);
                    return (0, h.jsx)(T.a, {
                        placement: c ? 'default' : 'right',
                        open: p.isOpened,
                        onClose: y,
                        contentClassName: tI().modalContent,
                        title: f,
                        headerClassName: tI().header,
                        className: (0, ew.$)(tI().root, { [tI().root_withFullscreen]: _.modal.isOpened, [tI().root_withCustomControls]: d || u }),
                        overlayClassName: tI().overlay,
                        onOpenChange: C,
                        labelClose: n({ id: 'interface-actions.close' }),
                        portalNode: c || _.modal.isOpened ? null : r,
                        'data-test-id': $.Xk.track.TRACK_ABOUT_MODAL,
                        closeButtonDataTestId: $.Xk.track.TRACK_ABOUT_MODAL_CLOSE_BUTTON,
                        children: (0, h.jsxs)('div', {
                            className: tI().content,
                            children: [
                                (o.isTrackLoading || o.isTrackRejected) && (0, h.jsx)(tT.n, { textClassName: tI().textShimmer }),
                                k,
                                (o.isCreditsLoading || o.isCreditsRejected) && (0, h.jsx)(tT.n, { textClassName: tI().textShimmer }),
                                L,
                                E,
                            ],
                        }),
                    });
                }),
                tE = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? null : (0, h.jsx)(tL, {});
                });
            var tM = a(51611),
                tP = a(8655),
                tO = a(69704),
                tw = a(60906),
                tR = a.n(tw);
            let tD = (0, y.PA)(() => {
                let e = (0, b.useRef)(null),
                    t = (0, b.useRef)(null),
                    { formatMessage: a } = (0, q.A)(),
                    { language: i } = (0, tM.h)(),
                    { contentRef: l } = (0, j.g)(),
                    { theme: n } = (0, tO.W)(),
                    s = (0, ee.N)().get(J.V4),
                    r = (0, et._)(s.feedbackForm.host),
                    {
                        trackComplaint: o,
                        settings: { isMobile: c },
                        fullscreenPlayer: d,
                        slam: u,
                    } = (0, N.g)(),
                    { modal: _, trackId: m } = o,
                    p = (0, b.useCallback)(() => {
                        null !== t.current && (window.clearTimeout(t.current), (t.current = null));
                    }, []),
                    v = (0, b.useCallback)(() => {
                        (p(),
                            (t.current = window.setTimeout(() => {
                                (_.isOpened || o.reset(), (t.current = null));
                            }, 300)));
                    }, [p, _, o]),
                    x = (0, b.useCallback)(() => {
                        (_.close(), v());
                    }, [_, v]),
                    y = (0, b.useCallback)(
                        (e) => {
                            (e ? p() : v(), _.onOpenChange(e));
                        },
                        [p, _, v],
                    );
                ((0, b.useEffect)(() => {
                    u.isOfflineModeEnabled && _.isOpened && x();
                }, [x, _.isOpened, u.isOfflineModeEnabled]),
                    (0, b.useEffect)(
                        () => () => {
                            (p(), _.close(), o.reset());
                        },
                        [p, _, o],
                    ),
                    (0, b.useEffect)(() => {
                        if (!_.isOpened) return;
                        let t = new URL(r).origin,
                            a = (a) => {
                                var i, l;
                                ((e) => {
                                    let { data: t, origin: a, source: i, expectedOrigin: l, expectedSource: n } = e;
                                    if (a !== l || null === n || i !== n || 'string' != typeof t) return !1;
                                    let s = (0, ei.UL)(t);
                                    return 'object' == typeof s && null !== s && 'COMPLAINT_RESULT' === s.postMessageType && 'close' === s.action;
                                })({
                                    data: a.data,
                                    origin: a.origin,
                                    source: a.source,
                                    expectedOrigin: t,
                                    expectedSource: null != (l = null == (i = e.current) ? void 0 : i.contentWindow) ? l : null,
                                }) && x();
                            };
                        return (
                            window.addEventListener('message', a),
                            () => {
                                window.removeEventListener('message', a);
                            }
                        );
                    }, [r, x, _.isOpened]));
                let C = (0, b.useMemo)(
                    () =>
                        m
                            ? ((e) => {
                                  let { contentId: t, host: a, lang: i, theme: l } = e,
                                      n = new URL('/complaint', a);
                                  return (n.searchParams.set('contentId', t), n.searchParams.set('theme', l), n.searchParams.set('lang', i), n.toString());
                              })({ contentId: m, host: r, lang: i, theme: n === tP.S.Light ? 'white' : 'black' })
                            : null,
                    [r, i, n, m],
                );
                return (0, h.jsx)(T.a, {
                    className: (0, ew.$)(tR().root, { [tR().root_mobile]: c }),
                    contentClassName: tR().content,
                    open: _.isOpened,
                    size: c ? 'fullscreen' : 'fitContent',
                    placement: 'center',
                    showHeader: !1,
                    isMobile: c,
                    onClose: x,
                    onOpenChange: y,
                    portalNode: c || d.modal.isOpened ? null : l,
                    restoreFocus: !1,
                    transitionDuration: 300,
                    children: C && (0, h.jsx)('iframe', { ref: e, className: tR().iframe, src: C, title: a({ id: 'interface-actions.report-problem' }) }),
                });
            });
            var tB = a(71880),
                tF = a.n(tB);
            let tU = (0, y.PA)(() => {
                var e;
                let { formatMessage: t } = (0, q.A)(),
                    { notify: a } = (0, eo.l)(),
                    { contentRef: i } = (0, j.g)(),
                    {
                        trackLyrics: l,
                        settings: { isMobile: n },
                        fullscreenPlayer: s,
                    } = (0, N.g)(),
                    { modal: r, track: o } = l,
                    c = null == o ? void 0 : o.explicitDisclaimer;
                ((0, b.useEffect)(() => {
                    // for PulseSync: BEGIN load modal lyrics when LRCLIB fallback is enabled
                    o && (o.isLyricsAvailable || window.nativeSettings?.get('modSettings.lrclib.useText') !== !1) && l.modal.isOpened && l.getLyrics(o.id);
                    // for PulseSync: END load modal lyrics when LRCLIB fallback is enabled
                }, [o, l, l.modal.isOpened]),
                    (0, b.useEffect)(() => {
                        r.isOpened && o && l.isResolved && l.sendViews({ trackId: o.id, albumId: o.albumId });
                    }, [o, l, l.isResolved, r.isOpened]));
                let d = (0, b.useCallback)(
                    (e) => {
                        var t;
                        null == (t = r.onOpenChange) || t.call(r, e);
                    },
                    [r],
                );
                l.isRejected && l.modal.isOpened && a((0, h.jsx)(ec.h, { error: t({ id: 'error-messages.error-during-action' }) }), { containerId: er.u.ERROR });
                let u = (0, b.useMemo)(() => {
                    if (o)
                        return (0, h.jsxs)('span', {
                            'data-test-id': $.e8.content.TRACK_LYRICS_TITLE,
                            children: [
                                o.title,
                                o.version && (0, h.jsx)('span', { className: tF().version, children: o.version }),
                                c &&
                                    (0, h.jsx)(eX.N, {
                                        className: (0, ew.$)(tF().explicitMark, tF().important),
                                        getDescriptionTexts: o.getDescriptionTexts,
                                        size: 'xxs',
                                        variant: c,
                                    }),
                            ],
                        });
                }, [o, null == o ? void 0 : o.title, null == o ? void 0 : o.version, c]);
                return (0, h.jsx)(T.a, {
                    size: 'fitContent',
                    placement: n ? 'default' : 'right',
                    open: r.isOpened,
                    onOpenChange: d,
                    onClose: r.close,
                    className: tF().root,
                    contentClassName: tF().modalContent,
                    portalNode: n || s.modal.isOpened ? null : i,
                    title: u,
                    headerClassName: tF().header,
                    overlayClassName: tF().overlay,
                    labelClose: t({ id: 'interface-actions.close' }),
                    restoreFocus: !0,
                    'data-test-id': $.e8.content.TRACK_LYRICS_MODAL,
                    closeButtonDataTestId: $.e8.content.TRACK_LYRICS_CLOSE_BUTTON,
                    lockScroll: n,
                    children: (0, h.jsx)('div', {
                        className: tF().content,
                        'data-test-id': $.e8.content.TRACK_LYRICS_TEXT,
                        children: (0, h.jsx)(eM, {
                            lyrics: l.lyrics,
                            authors: l.writersNames,
                            source: null == (e = l.major) ? void 0 : e.prettyName,
                            isShimmerVisible: l.isShimmerVisible,
                            isShimmerActive: l.isLoading,
                        }),
                    }),
                });
            });
            var tV = a(50408),
                tz = a(90688),
                tK = a(73170),
                tH = a(44450),
                tW = a(26e3),
                tY = a(40210),
                tq = a(86462),
                t$ = a(51190),
                tQ = a.n(t$),
                tG = a(53643),
                tZ = a(26404),
                tX = a.n(tZ);
            let tJ = () => {
                    let e = (0, tG.j)();
                    return (0, h.jsx)('div', {
                        className: tX().root,
                        'data-test-id': $.e8.crackdownModal.CRACKDOWN_MODAL_LOGO,
                        children: (0, h.jsx)(G.I, { variant: 'yandexPlus'.concat(e), className: (0, ew.$)(tX().icon, tX()['icon_'.concat(e.toLocaleLowerCase())]) }),
                    });
                },
                t0 = (0, y.PA)((e) => {
                    let { hasError: t, children: a, ...i } = e,
                        {
                            settings: { isMobile: l },
                        } = (0, N.g)(),
                        { formatMessage: n } = (0, q.A)();
                    return (0, h.jsxs)(T.a, {
                        size: 'fitContent',
                        placement: l ? 'default' : 'center',
                        labelClose: n({ id: 'interface-actions.close' }),
                        className: (0, ew.$)(tQ().root, { [tQ().root_mobile]: l, [tQ().root_error]: t }),
                        headerClassName: tQ().header,
                        contentClassName: tQ().content,
                        ...i,
                        closeButtonDataTestId: $.e8.crackdownModal.CRACKDOWN_MODAL_CLOSE_BUTTON,
                        children: [!l && (0, h.jsx)(tJ, {}), (0, h.jsx)('div', { className: tQ().contentWrapper, children: a })],
                    });
                });
            var t1 = a(21416),
                t2 = a(52048),
                t4 = a.n(t2);
            let t8 = (e) => {
                    let { children: t, forwardRef: a, text: i, isMobile: l, showSpinner: n, size: s = 'm', className: r, ...o } = e;
                    return (0, h.jsx)(Q.$, {
                        className: (0, ew.$)(t4().button, { [t4().button_mobile]: l }, r),
                        isBlock: !0,
                        radius: 'xxxl',
                        size: s,
                        ref: a,
                        spinner: n ? (0, h.jsx)(t1.y, {}) : null,
                        ...o,
                        children: null != t ? t : (0, h.jsx)(ed.HL, { className: t4().text, variant: 'div', size: 'm', children: i }),
                    });
                },
                t6 = (0, b.forwardRef)((e, t) => (0, h.jsx)(t8, { forwardRef: t, ...e })),
                t3 = (e) => {
                    let { isMobile: t, isActive: a, className: i } = e;
                    return (0, h.jsx)(eh.W, { className: (0, ew.$)(t4().shimmer, { [t4().shimmer_mobile]: t }, i), isActive: a, radius: 'xxxl' });
                };
            var t5 = a(58390),
                t9 = a(73441),
                t7 = a.n(t9);
            let ae = (0, y.PA)(() => {
                    let {
                            modals: { crackdownModal: e },
                        } = (0, N.g)(),
                        t = (0, t5.useRouter)(),
                        a = (0, ee.N)().get(J.QG),
                        i = (0, f.c)(() => {
                            (e.close(), a.authorizationUrl && t.push(a.authorizationUrl));
                        });
                    return (0, h.jsx)(Q.$, {
                        className: (0, ew.$)(t7().button, t7().important),
                        variant: 'default',
                        color: 'secondary',
                        isBlock: !0,
                        radius: 'xxxl',
                        size: 'xs',
                        onClick: i,
                        'data-test-id': $.e8.crackdownModal.CRACKDOWN_MODAL_ALREADY_IN_PLUS_BUTTON,
                        children: (0, h.jsx)(ed.HL, {
                            className: t7().buttonMainText,
                            variant: 'span',
                            children: (0, h.jsx)(eJ.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                        }),
                    });
                }),
                at = 'crackdown-buy-subscription-button',
                aa = (0, y.PA)((e) => {
                    let { withAlreadyInPlusButton: t } = e,
                        {
                            user: a,
                            modals: { crackdownModal: i },
                        } = (0, N.g)(),
                        [l, n] = (0, tV.d)(),
                        [s, r] = (0, b.useState)(i.isOpened),
                        {
                            mainText: o,
                            mainTextA11y: c,
                            additionText: d,
                            isShimmerVisible: u,
                            isShimmerActive: _,
                            openPaymentWidgetModal: m,
                            saveOfferAndAuthorize: p,
                        } = (0, tq.D)({ storeName: 'music', isEnabled: s, offerElement: { element: l, intersectionPropertyId: at } }),
                        v = (0, f.c)(() => {
                            if ((i.close(), !a.isAuthorized)) return void p();
                            m();
                        }),
                        x = (0, tj.L)(() =>
                            u
                                ? (0, h.jsx)(t3, { className: (0, ew.$)(t7().button, t7().important), isActive: _ })
                                : (0, h.jsxs)(t6, {
                                      className: (0, ew.$)(t7().button, t7().important),
                                      color: 'plus',
                                      size: 'xs',
                                      ref: n,
                                      'data-intersection-property-id': at,
                                      onClick: v,
                                      'aria-label': c,
                                      'data-test-id': $.e8.crackdownModal.CRACKDOWN_MODAL_SUBSCRIPTION_BUTTON,
                                      children: [
                                          (0, h.jsx)(ed.HL, { variant: 'div', className: t7().buttonMainText, children: o }),
                                          d && (0, h.jsx)(ed.HL, { variant: 'div', size: 'm', weight: 'normal', children: d }),
                                      ],
                                  }),
                        );
                    return (
                        (0, b.useEffect)(() => {
                            setTimeout(() => {
                                r(!0);
                            }, 2500);
                        }, []),
                        (0, h.jsxs)(t0, {
                            open: i.isOpened,
                            onClose: i.close,
                            'data-test-id': $.e8.crackdownModal.CRACKDOWN_MODAL,
                            children: [
                                (0, h.jsx)('div', {
                                    className: tQ().growContainer,
                                    'data-test-id': $.e8.crackdownModal.CRACKDOWN_MODAL_PICTURE,
                                    children: (0, h.jsx)(tz._V, {
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.672491383c0f014022130e5b/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.6724913d3c0f014022130e5e/orig 2x',
                                    }),
                                }),
                                (0, h.jsxs)('div', {
                                    className: tQ().text,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, h.jsx)(ed.DZ, {
                                            variant: 'h1',
                                            size: 'xl',
                                            className: tQ().title,
                                            'data-test-id': $.e8.crackdownModal.CRACKDOWN_MODAL_TITLE_TEXT,
                                            children: (0, h.jsx)(eJ.A, { id: 'crackdown.title', values: { br: (0, h.jsx)('br', {}), nbsp: '\xa0' } }),
                                        }),
                                        (0, h.jsx)(ed.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            className: tQ().description,
                                            'data-test-id': $.e8.crackdownModal.CRACKDOWN_MODAL_DESCRIPTION_TEXT,
                                            children: (0, h.jsx)(eJ.A, { id: 'crackdown.description', values: { br: (0, h.jsx)('br', {}), nbsp: '\xa0' } }),
                                        }),
                                    ],
                                }),
                                (0, h.jsxs)(tK.q, {
                                    children: [
                                        (0, h.jsx)(ed.DZ, { variant: 'h1', children: (0, h.jsx)(eJ.A, { id: 'crackdown.title', values: { br: ' ', nbsp: '\xa0' } }) }),
                                        (0, h.jsx)(ed.HL, {
                                            variant: 'div',
                                            children: (0, h.jsx)(eJ.A, { id: 'crackdown.description', values: { br: ' ', nbsp: '\xa0' } }),
                                        }),
                                    ],
                                }),
                                (0, h.jsxs)('div', { className: tQ().buttons, children: [x, t && (0, h.jsx)(ae, {})] }),
                            ],
                        })
                    );
                });
            aa.displayName = 'CrackdownModalComponent';
            let ai = (e) => (0, h.jsx)(tH.r, { page: tW.l.CRACKDOWN_SCREEN, places: [tY.R.TOP_BUTTON], children: (0, h.jsx)(aa, { ...e }) });
            var al = a(79272),
                an = a(78940),
                as = a(6900),
                ar = a(49556),
                ao = a.n(ar);
            let ac = (0, y.PA)(() => {
                let { downloadMobileApp: e, user: t, settings: a } = (0, N.g)(),
                    { formatMessage: i } = (0, q.A)(),
                    l = (0, al.q)({ browserInfo: a.browserInfo, login: t.account.data.login }),
                    n = (0, an.Z)(l());
                return (0, h.jsxs)('div', {
                    className: (0, ew.$)(ao().root, (0, as.J)(tP.S.Dark)),
                    children: [
                        (0, h.jsx)(Q.$, {
                            className: ao().closeButton,
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, h.jsx)(G.I, { variant: 'close', size: 'xxs' }),
                            'aria-label': i({ id: 'interface-actions.close' }),
                            onClick: e.modal.close,
                        }),
                        (0, h.jsxs)('div', {
                            className: ao().text,
                            children: [
                                (0, h.jsx)(ed.DZ, {
                                    variant: 'h1',
                                    size: 'xl',
                                    weight: 'bold',
                                    children: (0, h.jsx)(eJ.A, { id: 'download-mobile-app.title', values: { nbsp: '\xa0' } }),
                                }),
                                (0, h.jsx)(ed.HL, {
                                    className: ao().subtitle,
                                    variant: 'p',
                                    size: 'l',
                                    weight: 'bold',
                                    children: (0, h.jsx)(eJ.A, { id: 'download-mobile-app.subtitle', values: { nbsp: '\xa0' } }),
                                }),
                            ],
                        }),
                        (0, h.jsxs)('div', {
                            className: ao().buttons,
                            children: [
                                (0, h.jsx)(Q.$, {
                                    role: 'link',
                                    className: ao().button,
                                    color: 'primary',
                                    size: 'm',
                                    radius: 'xxxl',
                                    onClick: n,
                                    children: (0, h.jsx)(ed.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, h.jsx)(eJ.A, { id: 'download-mobile-app.listen-in-app' }),
                                    }),
                                }),
                                (0, h.jsx)(Q.$, {
                                    className: (0, ew.$)(ao().button, ao().stayButton),
                                    variant: 'text',
                                    size: 'm',
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    onClick: e.modal.close,
                                    children: (0, h.jsx)(ed.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, h.jsx)(eJ.A, { id: 'download-mobile-app.stay' }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var ad = a(6930),
                au = a.n(ad);
            let a_ = (0, y.PA)(() => {
                let { downloadMobileApp: e } = (0, N.g)();
                return (0, h.jsx)(T.a, {
                    className: au().root,
                    contentClassName: au().content,
                    open: e.modal.isOpened,
                    size: 'fullscreen',
                    placement: 'center',
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    overlayColor: 'full',
                    onOpenChange: e.modal.onOpenChange,
                    onClose: e.modal.close,
                    children: (0, h.jsx)(ac, {}),
                });
            });
            var am = a(64184);
            let ap = () => {
                let {
                    familyInvite: { modal: e, isSuccess: t, reset: a },
                } = (0, N.g)();
                return (0, b.useCallback)(() => {
                    if ((e.close(), t)) return void window.location.reload();
                    a();
                }, [e, t, a]);
            };
            var av = a(11028),
                ax = a(49333),
                ah = a.n(ax);
            let ay = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, q.A)(),
                        {
                            settings: { isMobile: t },
                        } = (0, N.g)(),
                        a = ap();
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsxs)('div', {
                                className: tQ().text,
                                children: [
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tQ().title,
                                        'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                                        children: (0, h.jsx)(eJ.A, { id: 'family.invitation-error-title' }),
                                    }),
                                    (0, h.jsx)(ed.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tQ().description,
                                        'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                                        children: (0, h.jsx)(eJ.A, { id: 'family.invitation-error-description' }),
                                    }),
                                ],
                            }),
                            (0, h.jsx)('div', {
                                className: tQ().buttons,
                                children: (0, h.jsx)(t6, {
                                    color: 'primary',
                                    isMobile: t,
                                    text: e({ id: 'interface-actions.confirm' }),
                                    onClick: a,
                                    'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_INVITATION_ERROR_BUTTON_CONFIRM,
                                }),
                            }),
                        ],
                    });
                }),
                aC = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, q.A)(),
                        {
                            settings: { isMobile: t },
                            paywall: { modal: a },
                        } = (0, N.g)(),
                        i = ap(),
                        l = (0, b.useCallback)(() => {
                            (i(), a.open());
                        }, [i, a]);
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsxs)('div', {
                                className: tQ().text,
                                children: [
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tQ().title,
                                        'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                                        children: (0, h.jsx)(eJ.A, { id: 'family.subscription-error-title' }),
                                    }),
                                    (0, h.jsx)(ed.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tQ().description,
                                        'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                                        children: (0, h.jsx)(eJ.A, { id: 'family.subscription-error-description' }),
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('div', {
                                className: tQ().buttons,
                                children: [
                                    (0, h.jsx)(t6, {
                                        color: 'primary',
                                        isMobile: t,
                                        text: e({ id: 'family.about1' }),
                                        onClick: l,
                                        'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_ABOUT,
                                    }),
                                    (0, h.jsx)(t6, {
                                        color: 'secondary',
                                        isMobile: t,
                                        text: (0, h.jsx)(eJ.A, { id: 'family.later' }),
                                        onClick: i,
                                        'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_LATER,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                ag = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, q.A)(),
                        {
                            familyInvite: { retry: t },
                        } = (0, N.g)();
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsxs)('div', {
                                className: tQ().text,
                                children: [
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tQ().title,
                                        'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                                        children: (0, h.jsx)(eJ.A, { id: 'family.unknown-error-title' }),
                                    }),
                                    (0, h.jsx)(ed.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tQ().description,
                                        'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                                        children: (0, h.jsx)(eJ.A, { id: 'family.unknown-error-description' }),
                                    }),
                                ],
                            }),
                            (0, h.jsx)('div', {
                                className: tQ().buttons,
                                children: (0, h.jsx)(t6, {
                                    color: 'primary',
                                    text: e({ id: 'family.retry' }),
                                    onClick: t,
                                    'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_UNKNOWN_ERROR_BUTTON_RETRY,
                                }),
                            }),
                        ],
                    });
                }),
                ab = { [av.C.INVITATION_IS_INVALID]: (0, h.jsx)(ay, {}), [av.C.SUBSCRIPTION_IS_NOT_AVAILABLE]: (0, h.jsx)(aC, {}), [av.C.UNKNOWN]: (0, h.jsx)(ag, {}) },
                aA = (0, y.PA)(() => {
                    let {
                            familyInvite: { error: e },
                            settings: { isMobile: t },
                        } = (0, N.g)(),
                        a = t || e === av.C.SUBSCRIPTION_IS_NOT_AVAILABLE;
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)('div', {
                                className: (0, ew.$)(tQ().growContainer, tQ().growContainer_withoutPaddings),
                                children: (0, h.jsx)(tz._V, {
                                    className: (0, ew.$)(ah().image, { [ah().image_small]: a }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.6724b88e3c0f01402213116b/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6724b88c3c0f01402213116a/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            ab[null != e ? e : av.C.UNKNOWN],
                        ],
                    });
                });
            var af = a(91292),
                aT = a(47436),
                aj = a(35765),
                aN = a.n(aj);
            let aS = (e) => {
                    let { avatarSrc: t, name: a, isMobile: i } = e;
                    return (0, h.jsxs)('div', {
                        className: (0, ew.$)(aN().root, { [aN().root_mobile]: i }),
                        children: [
                            (0, h.jsx)(aT.n, {
                                className: (0, ew.$)(aN().icon, aN().important),
                                avatarSrc: t,
                                hasPlus: !0,
                                'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_AVATAR,
                            }),
                            (0, h.jsx)(ed.HL, {
                                className: aN().name,
                                variant: 'div',
                                size: 'm',
                                'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_NAME,
                                children: a,
                            }),
                        ],
                    });
                },
                aI = (e) => {
                    let { isActive: t, isMobile: a } = e;
                    return (0, h.jsxs)('div', {
                        className: (0, ew.$)(aN().root, { [aN().root_mobile]: a }),
                        children: [
                            (0, h.jsx)(eh.W, { className: aN().iconShimmer, isActive: t, radius: 'round' }),
                            (0, h.jsx)(eh.W, { className: aN().nameShimmer, isActive: t, radius: 'xs' }),
                        ],
                    });
                };
            var ak = a(96353),
                aL = a.n(ak);
            let aE = (0, y.PA)(() => {
                let {
                        user: e,
                        location: t,
                        settings: { isMobile: a },
                        familyInvite: {
                            isInfoShimmerVisible: i,
                            isInfoShimmerActive: l,
                            isAcceptanceActive: n,
                            info: { data: s },
                            acceptInvite: r,
                        },
                    } = (0, N.g)(),
                    { name: o = '', avatarUrl: c = '' } = s || {},
                    d = (0, ee.N)(),
                    u = (0, t5.useRouter)(),
                    _ = d.get(J.QG),
                    m = ap(),
                    p = (0, b.useCallback)(() => {
                        if (!e.isAuthorized) {
                            _.authorizationUrl && u.push(_.authorizationUrl);
                            return;
                        }
                        r();
                    }, [_.authorizationUrl, u, e.isAuthorized, r]),
                    v = (0, b.useMemo)(
                        () => (i ? (0, h.jsx)(aI, { isActive: l, isMobile: a }) : (0, h.jsx)(aS, { avatarSrc: c, name: o, isMobile: a })),
                        [i, l, a, c, o],
                    ),
                    x = (0, b.useMemo)(
                        () =>
                            i
                                ? (0, h.jsx)(t3, { isActive: l, isMobile: a })
                                : (0, h.jsx)(t6, {
                                      color: 'plus',
                                      isMobile: a,
                                      text: (0, h.jsx)(eJ.A, { id: 'family.accept' }),
                                      onClick: p,
                                      showSpinner: n,
                                      'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_ACCEPT,
                                  }),
                        [i, l, n, a, p],
                    );
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)('div', { className: (0, ew.$)(tQ().growContainer, aL().growContainer, aL().important), children: v }),
                        (0, h.jsxs)('div', {
                            className: tQ().text,
                            children: [
                                (0, h.jsx)(ed.DZ, {
                                    variant: 'h1',
                                    size: 'xl',
                                    className: tQ().title,
                                    'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TITLE,
                                    children: (0, h.jsx)(eJ.A, { id: 'family.info-title', values: { br: '\n' } }),
                                }),
                                (0, h.jsx)(ed.HL, {
                                    variant: 'span',
                                    size: 'm',
                                    className: tQ().description,
                                    'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_DESCRIPTION,
                                    children: (0, h.jsx)(eJ.A, { id: 'family.info-description', values: { br: '\n' } }),
                                }),
                                (0, h.jsx)(af.N, {
                                    target: '_blank',
                                    href: 'https://yandex.'.concat(t.tld, '/legal/yandex_plus_conditions/'),
                                    icon: (0, h.jsx)(G.I, { variant: 'arrowRight', size: 'xxxs', className: tQ().linkArrow }),
                                    iconPosition: 'right',
                                    className: tQ().link,
                                    containerClassName: tQ().linkContainer,
                                    'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TERMS,
                                    children: (0, h.jsx)(ed.HL, { type: 'controls', variant: 'span', size: 'm', children: (0, h.jsx)(eJ.A, { id: 'family.terms' }) }),
                                }),
                            ],
                        }),
                        (0, h.jsxs)('div', {
                            className: tQ().buttons,
                            children: [
                                x,
                                (0, h.jsx)(t6, {
                                    color: 'secondary',
                                    isMobile: a,
                                    text: (0, h.jsx)(eJ.A, { id: 'family.reject' }),
                                    onClick: m,
                                    'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_REJECT,
                                }),
                            ],
                        }),
                    ],
                });
            });
            var aM = a(1425),
                aP = a.n(aM);
            let aO = (0, y.PA)(() => {
                    let {
                            location: e,
                            settings: { isMobile: t },
                        } = (0, N.g)(),
                        a = ap();
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)('div', {
                                className: tQ().growContainer,
                                children: (0, h.jsx)(tz._V, {
                                    className: (0, ew.$)(aP().image, { [aP().image_mobile]: t }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            (0, h.jsxs)('div', {
                                className: tQ().text,
                                children: [
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tQ().title,
                                        'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_TITLE,
                                        children: (0, h.jsx)(eJ.A, { id: 'family.success-title' }),
                                    }),
                                    (0, h.jsx)(ed.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tQ().description,
                                        'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_DESCRIPTION,
                                        children: (0, h.jsx)(eJ.A, { id: 'family.success-description', values: { br: '\n' } }),
                                    }),
                                    (0, h.jsx)(af.N, {
                                        target: '_blank',
                                        href: 'https://plus.yandex.'.concat(e.tld, '/'),
                                        icon: (0, h.jsx)(G.I, { variant: 'arrowRight', size: 'xxxs', className: tQ().linkArrow }),
                                        iconPosition: 'right',
                                        className: tQ().link,
                                        containerClassName: tQ().linkContainer,
                                        'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_ABOUT,
                                        children: (0, h.jsx)(ed.HL, { type: 'controls', variant: 'span', size: 'm', children: (0, h.jsx)(eJ.A, { id: 'family.about' }) }),
                                    }),
                                ],
                            }),
                            (0, h.jsx)('div', {
                                className: tQ().buttons,
                                children: (0, h.jsx)(t6, {
                                    color: 'plus',
                                    isMobile: t,
                                    text: (0, h.jsx)(eJ.A, { id: 'family.go-to-music' }),
                                    onClick: a,
                                    'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_BUTTON_FINISH,
                                }),
                            }),
                        ],
                    });
                }),
                aw = { [am._.INFO]: (0, h.jsx)(aE, {}), [am._.SUCCESS]: (0, h.jsx)(aO, {}) },
                aR = (0, y.PA)(() => {
                    let {
                            familyInvite: { modal: e, step: t, hasError: a },
                        } = (0, N.g)(),
                        i = ap(),
                        l = (0, b.useCallback)(
                            (t) => {
                                (t || i(), e.onOpenChange(t));
                            },
                            [i, e],
                        ),
                        n = (0, b.useMemo)(() => (a ? (0, h.jsx)(aA, {}) : aw[t]), [a, t]);
                    return (0, h.jsx)(t0, {
                        open: e.isOpened,
                        hasError: a,
                        onOpenChange: l,
                        onClose: i,
                        'data-test-id': $.e8.familyInvite.FAMILY_INVITE_MODAL,
                        children: n,
                    });
                });
            var aD = a(30282),
                aB = a(9630),
                aF = a(44236),
                aU = a(30688),
                aV = (function (e) {
                    return ((e.RU = 'ru'), (e.BY = 'by'), (e.KZ = 'kz'), (e.UZ = 'uz'), (e.KG = 'kg'), (e.AZ = 'az'), (e.AM = 'am'), (e.GE = 'ge'), (e.TR = 'tr'), e);
                })({}),
                az = (function (e) {
                    return ((e.RU = 'ru'), (e.BY = 'by'), (e.OTHER = 'other'), e);
                })({});
            let aK = { [aV.RU]: az.RU, [aV.BY]: az.BY };
            var aH = a(3005),
                aW = a.n(aH),
                aY = a(72110),
                aq = a.n(aY),
                a$ = a(50180),
                aQ = a.n(a$);
            let aG = (e) => {
                let { className: t, children: a, ...i } = e;
                return (0, h.jsxs)('section', {
                    className: (0, ew.$)(aQ().root, t),
                    ...i,
                    children: [
                        (0, h.jsx)(ed.DZ, {
                            className: aQ().title,
                            variant: 'h2',
                            size: 'xxl',
                            children: (0, h.jsx)(eJ.A, { id: 'faq.title', values: { nbsp: '\xa0' } }),
                        }),
                        (0, h.jsx)('div', { className: aQ().content, children: a }),
                    ],
                });
            };
            var aZ = a(74743),
                aX = a.n(aZ);
            let aJ = (e) => {
                let { children: t } = e;
                return (0, h.jsx)(ed.HL, { className: aX().root, variant: 'span', size: 'l', weight: 'normal', children: t });
            };
            var a0 = a(16967),
                a1 = a(38709),
                a2 = a.n(a1);
            let a4 = (e) => {
                let { className: t, isCollapsed: a } = e;
                return (0, h.jsx)('div', { className: (0, ew.$)(a2().root, { [a2().root_collapsed]: a }, t) });
            };
            var a8 = a(43453),
                a6 = a.n(a8);
            let a3 = {
                    exit: a6().answerContainer_exit,
                    exitActive: a6().answerContainer_exit_active,
                    enter: a6().answerContainer_enter,
                    enterActive: a6().answerContainer_enter_active,
                },
                a5 = (e) => {
                    let { question: t, answer: a, questionDataTestId: i, answerDataTestId: l } = e,
                        { state: n, toggle: s } = (0, eA.e)(!0),
                        r = (0, b.useRef)(null);
                    return (0, h.jsxs)('div', {
                        className: a6().root,
                        children: [
                            (0, h.jsxs)(Q.$, {
                                className: a6().questionContainer,
                                withRipple: !1,
                                withHover: !1,
                                variant: 'text',
                                onClick: s,
                                'aria-expanded': !n,
                                'data-test-id': i,
                                children: [t, (0, h.jsx)(a4, { className: a6().questionCollapse, isCollapsed: n })],
                            }),
                            (0, h.jsx)(a0.A, {
                                nodeRef: r,
                                in: !n,
                                timeout: 300,
                                classNames: a3,
                                unmountOnExit: !0,
                                children: (0, h.jsx)('div', {
                                    className: a6().answerContainer,
                                    ref: r,
                                    'data-test-id': l,
                                    children: (0, h.jsx)('div', { className: a6().answer, children: a }),
                                }),
                            }),
                        ],
                    });
                };
            var a9 = a(90503),
                a7 = a.n(a9);
            let ie = (e) => {
                    let { children: t } = e;
                    return (0, h.jsx)(ed.HL, { className: a7().root, variant: 'span', size: 'm', children: t });
                },
                it = (e) => {
                    let { className: t, faqProps: a, variant: i } = e,
                        { location: l } = (0, N.g)(),
                        n = {
                            cancelUntilEndQuestion: (0, h.jsx)(eJ.A, { id: 'paywall.faq-question-cancel-until-end-other-countries', values: { nbsp: ' ' } }),
                            cancelUntilEndStep1Link: (0, h.jsx)(eJ.A, { id: 'paywall.faq-answer-cancel-until-end-step-1-link-other-countries' }),
                            cancelUntilEndStep2: (0, h.jsx)(eJ.A, { id: 'paywall.faq-answer-cancel-until-end-step-2-other-countries', values: { nbsp: ' ' } }),
                            afraidForgetCancel: (0, h.jsx)(eJ.A, { id: 'paywall.faq-question-afraid-forget-cancel-other-countries', values: { nbsp: ' ' } }),
                            whereElseSubscribe: (0, h.jsx)(eJ.A, { id: 'paywall.faq-question-where-else-subscribe-other-countries', values: { nbsp: ' ' } }),
                        };
                    i === az.RU &&
                        ((n.cancelUntilEndQuestion = (0, h.jsx)(eJ.A, { id: 'paywall.faq-question-cancel-until-end', values: { nbsp: ' ' } })),
                        (n.cancelUntilEndStep1Link = (0, h.jsx)(eJ.A, { id: 'paywall.faq-answer-cancel-until-end-step-1-link' })),
                        (n.cancelUntilEndStep2 = (0, h.jsx)(eJ.A, { id: 'paywall.faq-answer-cancel-until-end-step-2', values: { nbsp: ' ' } })),
                        (n.afraidForgetCancel = (0, h.jsx)(eJ.A, { id: 'paywall.faq-question-afraid-forget-cancel', values: { nbsp: ' ' } })),
                        (n.whereElseSubscribe = (0, h.jsx)(eJ.A, { id: 'paywall.faq-question-where-else-subscribe', values: { nbsp: ' ' } })));
                    let s = {
                        nbsp: '\xa0',
                        steps: (0, h.jsxs)('ul', {
                            className: aX().list,
                            children: [
                                (0, h.jsx)('li', {
                                    className: aX().listITem,
                                    children: (0, h.jsx)(eJ.A, {
                                        id: 'paywall.faq-answer-cancel-until-end-step-1',
                                        values: {
                                            link: (0, h.jsx)(af.N, {
                                                className: aX().link,
                                                href: 'http://plus.yandex.'.concat(l.tld, '/my'),
                                                target: '_blank',
                                                children: n.cancelUntilEndStep1Link,
                                            }),
                                        },
                                    }),
                                }),
                                (0, h.jsx)('li', { className: aX().listITem, children: n.cancelUntilEndStep2 }),
                            ],
                        }),
                    };
                    return (0, h.jsxs)(aG, {
                        className: t,
                        ...a,
                        'data-test-id': $.e8.paywall.PAYWALL_FAQ_SECTION,
                        children: [
                            (0, h.jsx)(a5, {
                                question: (0, h.jsx)(ie, { children: (0, h.jsx)(eJ.A, { id: 'paywall.faq-question-without-card-binding' }) }),
                                answer: (0, h.jsx)(aJ, { children: (0, h.jsx)(eJ.A, { id: 'paywall.faq-answer-without-card-binding', values: { nbsp: '\xa0' } }) }),
                                questionDataTestId: $.e8.paywall.PAYWALL_FAQ_ITEM_DEMO_PERIOD_QUESTION,
                                answerDataTestId: $.e8.paywall.PAYWALL_FAQ_ITEM_DEMO_PERIOD_ANSWER,
                            }),
                            (0, h.jsx)(a5, {
                                question: (0, h.jsx)(ie, { children: n.afraidForgetCancel }),
                                answer: (0, h.jsx)(aJ, { children: (0, h.jsx)(eJ.A, { id: 'paywall.faq-answer-afraid-forget-cancel', values: { nbsp: '\xa0' } }) }),
                                questionDataTestId: $.e8.paywall.PAYWALL_FAQ_ITEM_FORGET_CANCEL_SUB_QUESTION,
                                answerDataTestId: $.e8.paywall.PAYWALL_FAQ_ITEM_FORGET_CANCEL_SUB_ANSWER,
                            }),
                            (0, h.jsx)(a5, {
                                question: (0, h.jsx)(ie, { children: n.cancelUntilEndQuestion }),
                                answer: (0, h.jsx)(aJ, {
                                    children:
                                        i === az.RU
                                            ? (0, h.jsx)(eJ.A, { id: 'paywall.faq-answer-cancel-until-end', values: s })
                                            : (0, h.jsx)(eJ.A, { id: 'paywall.faq-answer-cancel-until-end-other-countries', values: s }),
                                }),
                                questionDataTestId: $.e8.paywall.PAYWALL_FAQ_ITEM_CAN_CANCEL_SUB_QUESTION,
                                answerDataTestId: $.e8.paywall.PAYWALL_FAQ_ITEM_CAN_CANCEL_SUB_ANSWER,
                            }),
                            !1,
                        ],
                    });
                };
            var ia = a(99839),
                ii = a(88178),
                il = a.n(ii);
            let is = (0, y.PA)((e) => {
                    let { links: t, ageRestriction: a } = e,
                        { location: i } = (0, N.g)(),
                        { language: l } = (0, tM.h)(),
                        { formatDate: n } = (0, q.A)();
                    return (0, h.jsxs)('footer', {
                        className: il().root,
                        'data-test-id': $.e8.paywall.PAYWALL_FOOTER,
                        children: [
                            (0, h.jsx)('ul', {
                                className: (0, ew.$)(il().list, il().list_primary),
                                children: t.map((e, t) => {
                                    let { href: a, text: i, testId: l } = e;
                                    return (0, h.jsx)(
                                        'li',
                                        {
                                            className: il().item,
                                            'data-test-id': l,
                                            children: (0, h.jsx)(af.N, {
                                                className: (0, ew.$)(il().link, il().important),
                                                href: a,
                                                children: (0, h.jsx)(ed.HL, { type: 'controls', variant: 'span', size: 'l', weight: 'medium', children: i }),
                                            }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, h.jsxs)('ul', {
                                className: (0, ew.$)(il().list, il().list_secondary),
                                children: [
                                    (0, h.jsx)('li', {
                                        className: il().item,
                                        'data-test-id': $.e8.paywall.PAYWALL_FOOTER_ITEM_YANDEX_LINK,
                                        children: (0, h.jsx)(af.N, {
                                            className: (0, ew.$)(il().link, il().important),
                                            target: '_blank',
                                            href: 'https://ya.'.concat(i.tld),
                                            children: (0, h.jsxs)(ed.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'l',
                                                weight: 'medium',
                                                children: ['\xa9', ' 2018–', n(new Date(), (0, ia.m)()), '\xa0', (0, h.jsx)(eJ.A, { id: 'footer.yandex-music' })],
                                            }),
                                        }),
                                    }),
                                    (0, h.jsxs)('li', {
                                        className: il().item,
                                        'data-test-id': $.e8.paywall.PAYWALL_FOOTER_ITEM_ALL_PROJECTS_LINK,
                                        children: [
                                            (0, h.jsx)(af.N, {
                                                className: (0, ew.$)(il().link, il().important),
                                                target: '_blank',
                                                href: 'https://yandex.'.concat(i.tld, '/all?lang=').concat(l),
                                                children: (0, h.jsx)(ed.HL, {
                                                    type: 'controls',
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    children: (0, h.jsx)(eJ.A, { id: 'footer.yandex-project' }),
                                                }),
                                            }),
                                            (0, h.jsx)(ed.HL, {
                                                className: (0, ew.$)(il().item, il().ageRestriction),
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'l',
                                                weight: 'medium',
                                                children: a,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                ir = (0, y.PA)((e) => {
                    let { variant: t } = e,
                        { location: a } = (0, N.g)(),
                        i =
                            t === az.RU
                                ? (0, h.jsx)(eJ.A, { id: 'paywall-footer.subscription-terms-link' })
                                : (0, h.jsx)(eJ.A, { id: 'paywall-footer.subscription-terms-link-other-countries' });
                    return (0, h.jsx)(is, {
                        ageRestriction: '0+',
                        links: [
                            { href: 'https://yandex.'.concat(a.tld, '/legal/yandex_plus_conditions/'), text: i, testId: $.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_SUB },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/legal/yandex_plus_privilege_list'),
                                text: (0, h.jsx)(eJ.A, { id: 'paywall-footer.privileges-terms-link' }),
                                testId: $.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_PRIVILEGE,
                            },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/legal/plus_loyalty/'),
                                text: (0, h.jsx)(eJ.A, { id: 'paywall-footer.cashback-terms-link' }),
                                testId: $.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_CASHBACK,
                            },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/legal/plus_generalrules/'),
                                text: (0, h.jsx)(eJ.A, { id: 'paywall-footer.promotion-terms-link' }),
                                testId: $.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_PROMO,
                            },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/support/plus'),
                                text: (0, h.jsx)(eJ.A, { id: 'paywall-footer.support-link' }),
                                testId: $.e8.paywall.PAYWALL_FOOTER_ITEM_SUPPORT,
                            },
                        ],
                    });
                });
            var io = a(61386),
                ic = a.n(io);
            let id = (e) => {
                let { variant: t = 'horizontal', className: a, text: i, imageAlign: l = 'center', imageSrc: n, image2xSrc: s, ...r } = e;
                return (0, h.jsxs)('div', {
                    className: (0, ew.$)(ic().root, ic()['root_'.concat(t)], a),
                    ...(0, ei.OZ)(r),
                    children: [
                        (0, h.jsx)('div', {
                            className: ic().textContainer,
                            children: (0, h.jsx)(ed.DZ, { variant: 'h3', size: 'xl', className: ic().text, children: i }),
                        }),
                        (0, h.jsx)('div', {
                            className: (0, ew.$)(ic().imageContainer, ic()['imageContainer_align_'.concat(l)]),
                            children: (0, h.jsx)(tz._V, {
                                className: ic().image,
                                src: n,
                                srcSet: s ? ''.concat(s, ' 2x') : void 0,
                                fit: 'horizontal' === t ? 'cover' : 'none',
                                'aria-hidden': !0,
                            }),
                        }),
                    ],
                });
            };
            var iu = a(5045),
                i_ = a.n(iu);
            let im = (e) => {
                let { id: t, className: a, contentClassName: i, heading: l, content: n, ...s } = e;
                return (0, h.jsxs)('section', {
                    className: (0, ew.$)(i_().root, a),
                    id: t,
                    ...(0, ei.OZ)(s),
                    children: [
                        (0, h.jsx)('div', { className: i_().headingContainer, children: l }),
                        (0, h.jsx)('div', { className: (0, ew.$)(i_().contentContainer, i), children: n }),
                    ],
                });
            };
            var ip = a(44057),
                iv = a.n(ip);
            let ix = {
                    [az.RU]: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.66743ac814d05542b9b518b4/orig',
                    [az.BY]: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.66b2317aaf6bde7f5d486c61/orig',
                },
                ih = {
                    [az.RU]: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66743aea14d05542b9b518b6/orig',
                    [az.BY]: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.66b2317caf6bde7f5d486c62/orig',
                },
                iy = (e) => {
                    let { className: t, variant: a = az.RU } = e,
                        i = (0, tG.j)();
                    return (0, h.jsx)(im, {
                        className: t,
                        contentClassName: iv()['content_'.concat(a)],
                        heading: (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)(G.I, { variant: 'kinopoisk'.concat(i), className: iv()['logo_'.concat(i.toLocaleLowerCase())] }),
                                (0, h.jsx)(tK.q, { children: (0, h.jsx)(ed.DZ, { variant: 'h2', children: (0, h.jsx)(eJ.A, { id: 'paywall.kinopoisk-part-title' }) }) }),
                            ],
                        }),
                        content: (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)(id, {
                                    className: iv().card1,
                                    variant: 'vertical',
                                    text: (0, h.jsx)(eJ.A, { id: 'paywall.kinopoisk-part-benefit-movies', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: ix[a],
                                    image2xSrc: ih[a],
                                    'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_CHOOSE_FILM,
                                }),
                                (0, h.jsx)(id, {
                                    className: iv().card2,
                                    text: (0, h.jsx)(eJ.A, { id: 'paywall.kinopoisk-part-benefit-exclusive', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.66743b78de307e536b5852ba/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.66743b96de307e536b5852bc/orig',
                                    'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_WATCH_EXCLUSIVES,
                                }),
                                a === az.RU &&
                                    (0, h.jsx)(id, {
                                        className: iv().card3,
                                        text: (0, h.jsx)(eJ.A, { id: 'paywall.kinopoisk-part-benefit-sport', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.66743e3514d05542b9b518ff/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.66743e5514d05542b9b51902/orig',
                                        'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_WATCH_SPORT,
                                    }),
                                (0, h.jsx)(id, {
                                    className: iv().card4,
                                    variant: 'vertical',
                                    text: (0, h.jsx)(eJ.A, { id: 'paywall.kinopoisk-part-benefit-channels', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageAlign: 'right',
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.66743c3c14d05542b9b518f8/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.66743c5514d05542b9b518fa/orig',
                                    'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_MANY_CHANNELS,
                                }),
                            ],
                        }),
                        'data-test-id': $.e8.paywall.PAYWALL_KINOPOISK_SECTION,
                    });
                };
            var iC = a(65453),
                ig = a(47998),
                ib = a.n(ig);
            let iA = 'content-anchor',
                iT = (e) => {
                    let { className: t, shouldShowLabel: a = !0, anchorId: i = iA, children: l } = e;
                    return (0, h.jsxs)(iC.N, {
                        className: (0, ew.$)(ib().root, t),
                        href: '#'.concat(i),
                        role: 'button',
                        children: [
                            (0, h.jsx)('div', { className: ib().content, children: l }),
                            a && (0, h.jsx)(ed.HL, { variant: 'span', children: (0, h.jsx)(eJ.A, { id: 'paywall.more-info', values: { nbsp: '\xa0' } }) }),
                            (0, h.jsx)(G.I, { variant: 'arrowDown', size: 'xs' }),
                        ],
                    });
                };
            var ij = a(6133),
                iN = a.n(ij);
            let iS = (e) => {
                let { className: t, variant: a = az.RU } = e,
                    i = (0, tG.j)(),
                    l = (0, b.useMemo)(
                        () =>
                            a === az.RU
                                ? (0, h.jsx)(eJ.A, { id: 'paywall.music-part-benefit-books', values: { br: '\n', nbsp: '\xa0' } })
                                : (0, h.jsx)(eJ.A, { id: 'paywall.music-part-benefit-books-alternative', values: { br: '\n', nbsp: '\xa0' } }),
                        [a],
                    );
                return (0, h.jsx)(im, {
                    id: iA,
                    className: t,
                    contentClassName: iN().content,
                    heading: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(G.I, { variant: 'musicLogoCenter'.concat(i), className: iN()['logo_'.concat(i.toLocaleLowerCase())] }),
                            (0, h.jsx)(tK.q, {
                                children: (0, h.jsx)(ed.DZ, { variant: 'h2', children: (0, h.jsx)(eJ.A, { id: 'paywall.music-part-title', values: { nbsp: '\xa0' } }) }),
                            }),
                        ],
                    }),
                    content: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(id, {
                                className: iN().card,
                                variant: 'vertical',
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.music-part-benefit-recommendations', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.6672d19b5a94b319a48169ce/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.6672b094f164645e9c012622/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_FIND_INTERESTING,
                            }),
                            (0, h.jsx)(id, {
                                className: iN().card,
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.music-part-benefit-many-devices', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.6672d53cef7546320ecbe015/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.6672d45cff447523654b51a4/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_SMART_RECOMENDATIONS,
                            }),
                            (0, h.jsx)(id, {
                                className: iN().card,
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.music-part-benefit-without-internet', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.6703f9237733220b25bd3744/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6703f91a37dd1d4ade86c11a/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_LISTEN_WITHOUT_INTERNET,
                            }),
                            (0, h.jsx)(id, {
                                className: iN().card,
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.music-part-benefit-playlists', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bd5ff447523654b56e3/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bb7ff447523654b56b7/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_MAKE_COLLECTIONS,
                            }),
                            (0, h.jsx)(id, {
                                className: iN().card,
                                variant: 'vertical',
                                text: l,
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.6674522214d05542b9b51983/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6674527a14d05542b9b51985/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_LISTEN_AUDIOBOKS,
                            }),
                        ],
                    }),
                    'data-test-id': $.e8.paywall.PAYWALL_MUSIC_SECTION,
                });
            };
            var iI = a(78826),
                ik = a.n(iI);
            let iL = (e) => {
                let { className: t, variant: a = az.RU } = e,
                    i = (0, tG.j)();
                return (0, h.jsx)(im, {
                    className: t,
                    contentClassName: ik()['content_'.concat(a)],
                    heading: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(G.I, { variant: 'yandexPlus'.concat(i), className: ik()['logo_'.concat(i.toLocaleLowerCase())] }),
                            (0, h.jsx)(tK.q, {
                                children: (0, h.jsx)(ed.DZ, { variant: 'h2', children: (0, h.jsx)(eJ.A, { id: 'paywall.plus-part-title', values: { nbsp: '\xa0' } }) }),
                            }),
                        ],
                    }),
                    content: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(id, {
                                className: ik().card,
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.plus-part-benefit-family', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.66756428fda47e2147b8b478/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.66756449fda47e2147b8b47a/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_ADD_CLOSES,
                            }),
                            (0, h.jsx)(id, {
                                className: ik().card,
                                variant: 'vertical',
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.plus-part-benefit-devices', values: { br: '\n' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66f29c21b8a7ae33ed006e72/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/29541/img.66f292cc89f5b04b855a8040/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_ADD_CLOSES,
                            }),
                            a === az.RU &&
                                (0, h.jsxs)(h.Fragment, {
                                    children: [
                                        (0, h.jsx)(id, {
                                            className: ik().card,
                                            variant: 'vertical',
                                            text: (0, h.jsx)(eJ.A, { id: 'paywall.plus-part-spend-points', values: { br: '\n', nbsp: '\xa0' } }),
                                            imageAlign: 'right',
                                            imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eebcc48f03fb5a1cf861dd/orig',
                                            image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eebcd66fc33b70f1711a33/orig',
                                            'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_SPEND_POINTS,
                                        }),
                                        (0, h.jsx)(id, {
                                            className: ik().card,
                                            text: (0, h.jsx)(eJ.A, { id: 'paywall.plus-part-benefit-options', values: { br: '\n', nbsp: '\xa0' } }),
                                            imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eebd405566813399938420/orig',
                                            image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.68eebd498f03fb5a1cf861df/orig',
                                            'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_BENEFIT_OPTIONS,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    'data-test-id': $.e8.paywall.PAYWALL_PLUS_SECTION,
                });
            };
            var iE = a(53405),
                iM = a(8840),
                iP = a(61304),
                iO = a.n(iP);
            let iw = {
                    exit: iO().stickyContainer_exit,
                    exitActive: iO().stickyContainer_exit_active,
                    enter: iO().stickyContainer_enter,
                    enterActive: iO().stickyContainer_enter_active,
                },
                iR = 'buy-subscription-block-button-container',
                iD = 'buy-subscription-block-first-button',
                iB = 'buy-subscription-block-second-button',
                iF = (0, y.PA)((e) => {
                    var t;
                    let { className: a, shouldShowFixed: i, place: l, hasColumnLayout: n } = e,
                        s = (0, b.useRef)(null),
                        [r, o] = (0, tV.d)(),
                        [c, d] = (0, tV.d)(),
                        { user: u } = (0, N.g)(),
                        _ = (0, tq.D)({ storeName: 'music', place: l || tY.R.BLOCK_1, offerElement: { element: r, intersectionPropertyId: iD } }),
                        m = (0, tq.D)({ storeName: 'music', place: tY.R.BLOCK_2, offerElement: { element: c, intersectionPropertyId: iB } }),
                        p = (0, b.useRef)(null),
                        [v, x] = (0, b.useState)(),
                        [y, C] = (0, b.useState)(!1),
                        { isIntersecting: g } = null != (t = (0, iM.BL)([s], { preflightCheck: !1 }, !i)[iR]) ? t : {},
                        A = (0, b.useCallback)(() => {
                            if (!u.isAuthorized) return void _.saveOfferAndAuthorize();
                            _.openPaymentWidgetModal();
                        }, [u.isAuthorized, _]),
                        f = (0, b.useCallback)(() => {
                            if (!u.isAuthorized) return void m.saveOfferAndAuthorize();
                            m.openPaymentWidgetModal();
                        }, [u.isAuthorized, m]);
                    ((0, b.useEffect)(() => {
                        if (!g) {
                            var e;
                            x(null == (e = s.current) ? void 0 : e.closest('[data-buy-subscription-block-portal]'));
                        }
                    }, [g]),
                        (0, b.useEffect)(() => {
                            i &&
                                setTimeout(() => {
                                    C(!0);
                                }, 300);
                        }, [i, C]));
                    let T = void 0 !== m.mainText,
                        j = i && v,
                        S = !!(j && !g && y);
                    return (0, h.jsxs)('div', {
                        className: (0, ew.$)(iO().root, a, { [iO().root_withSecondButton]: T }),
                        children: [
                            (0, h.jsxs)('div', {
                                ref: s,
                                className: (0, ew.$)(iO().buttonContainer, { [iO().buttonContainer_columnLayout]: n }),
                                'data-intersection-property-id': iR,
                                children: [
                                    (0, h.jsxs)(Q.$, {
                                        isBlock: !0,
                                        radius: 'xxxl',
                                        size: 'l',
                                        color: 'plus',
                                        className: iO().button,
                                        ref: o,
                                        onClick: A,
                                        'aria-label': _.mainTextA11y,
                                        'data-intersection-property-id': iD,
                                        'data-test-id': $.e8.paywall.PAYWALL_OFFER_BUTTON,
                                        children: [
                                            (0, h.jsx)(ed.HL, { className: iO().text_main, variant: 'div', size: 'l', children: _.mainText }),
                                            _.additionText && (0, h.jsx)(ed.HL, { className: iO().text_addition, variant: 'div', size: 'm', children: _.additionText }),
                                        ],
                                    }),
                                    T &&
                                        (0, h.jsxs)(Q.$, {
                                            isBlock: !0,
                                            radius: 'xxxl',
                                            size: 'l',
                                            color: 'secondary',
                                            className: iO().button,
                                            ref: d,
                                            onClick: f,
                                            'aria-label': m.mainTextA11y,
                                            'data-intersection-property-id': iB,
                                            'data-test-id': $.e8.paywall.PAYWALL_SECOND_OFFER_BUTTON,
                                            children: [
                                                (0, h.jsx)(ed.HL, { className: iO().text_main, variant: 'div', size: 'l', children: m.mainText }),
                                                m.additionText &&
                                                    (0, h.jsx)(ed.HL, { className: iO().text_addition, variant: 'div', size: 'm', children: m.additionText }),
                                            ],
                                        }),
                                ],
                            }),
                            _.disclaimerText &&
                                (0, h.jsx)(ed.HL, {
                                    className: iO().text_secondary,
                                    variant: 'div',
                                    size: 's',
                                    weight: 'normal',
                                    'aria-label': _.disclaimerTextA11y,
                                    'data-test-id': $.e8.paywall.PAYWALL_OFFER_DISCLAIMER_TEXT,
                                    children: _.disclaimerText,
                                }),
                            j &&
                                (0, iE.createPortal)(
                                    (0, h.jsx)(a0.A, {
                                        in: S,
                                        nodeRef: p,
                                        timeout: 300,
                                        classNames: iw,
                                        unmountOnExit: !0,
                                        'data-test-id': $.e8.paywall.PAYWALL_BUY_SUBSCRIPTION_BLOCK_FLOATING,
                                        children: (0, h.jsx)('div', {
                                            className: iO().stickyContainer,
                                            'aria-hidden': !0,
                                            ref: p,
                                            children: (0, h.jsx)(iF, { place: tY.R.BOTTOM_BUTTON }),
                                        }),
                                    }),
                                    v,
                                ),
                        ],
                    });
                });
            iF.displayName = 'BuySubscriptionBlock';
            var iU = a(60413),
                iV = a.n(iU);
            let iz = (e) => {
                let { className: t } = e;
                return (0, h.jsx)('section', {
                    className: (0, ew.$)(iV().root, t),
                    children: (0, h.jsx)('div', {
                        className: iV().wrapper,
                        children: (0, h.jsxs)('div', {
                            className: iV().content,
                            children: [
                                (0, h.jsx)(ed.DZ, {
                                    variant: 'h1',
                                    size: 'xxl',
                                    className: iV().title,
                                    children: (0, h.jsx)(eJ.A, { id: 'paywall.music-on-many-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, h.jsx)(ed.HL, {
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'normal',
                                    className: iV().label,
                                    children: (0, h.jsx)(eJ.A, { id: 'paywall.recommendations-on-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, h.jsx)(iF, { className: iV().buySubscriptionBlock, shouldShowFixed: !0, hasColumnLayout: !0 }),
                            ],
                        }),
                    }),
                });
            };
            var iK = a(43002),
                iH = a.n(iK);
            let iW = () =>
                (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)(iz, { className: iH().topSection }),
                        (0, h.jsx)(iS, { className: aW().section, variant: az.BY }),
                        (0, h.jsx)(iy, { className: aW().section, variant: az.BY }),
                        (0, h.jsx)(iL, { className: aW().section, variant: az.BY }),
                        (0, h.jsx)(it, { className: aW().section_faq }),
                        (0, h.jsx)(ir, {}),
                    ],
                });
            var iY = a(6554),
                iq = a.n(iY);
            let i$ = (e) => {
                let { className: t, text: a, imageSrc: i, image2xSrc: l } = e;
                return (0, h.jsxs)('div', {
                    className: (0, ew.$)(iq().root, t),
                    children: [
                        (0, h.jsx)(tz._V, { className: iq().image, src: i, srcSet: l ? ''.concat(l, ' 2x') : void 0, fit: 'cover', 'aria-hidden': !0 }),
                        (0, h.jsx)(ed.HL, { className: iq().text, variant: 'span', size: 'l', weight: 'medium', children: a }),
                    ],
                });
            };
            var iQ = a(9219),
                iG = a.n(iQ);
            let iZ = (e) => {
                let { id: t, className: a, contentClassName: i, heading: l, content: n } = e;
                return (0, h.jsxs)('section', {
                    className: (0, ew.$)(iG().root, a),
                    id: t,
                    children: [
                        (0, h.jsx)('div', { className: iG().headingContainer, children: l }),
                        (0, h.jsx)('div', { className: (0, ew.$)(iG().contentContainer, i), children: n }),
                    ],
                });
            };
            var iX = a(10935),
                iJ = a.n(iX);
            let i0 = {
                    [az.RU]: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66743f6a14d05542b9b51906/orig',
                    [az.BY]: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240550e8bdd7a18b0d48f/orig',
                },
                i1 = {
                    [az.RU]: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.667440e414d05542b9b5192c/orig',
                    [az.BY]: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240560e8bdd7a18b0d490/orig',
                },
                i2 = {
                    [az.RU]: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.66744288699ba338f5126199/orig',
                    [az.BY]: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.66b240db0e8bdd7a18b0d493/orig',
                },
                i4 = {
                    [az.RU]: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.667442a8699ba338f512619b/orig',
                    [az.BY]: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.66b240da0e8bdd7a18b0d492/orig',
                },
                i8 = (e) => {
                    let { className: t, variant: a = az.RU } = e,
                        i = (0, tG.j)();
                    return (0, h.jsx)('div', {
                        'data-test-id': $.e8.paywall.MOBILE_PAYWALL_KINOPOISK_SECTION,
                        children: (0, h.jsx)(iZ, {
                            className: t,
                            contentClassName: iJ()['content_'.concat(a)],
                            heading: (0, h.jsxs)(h.Fragment, {
                                children: [
                                    (0, h.jsx)(G.I, { variant: 'kinopoisk'.concat(i), className: iJ()['logo_'.concat(i.toLocaleLowerCase())] }),
                                    (0, h.jsx)(tK.q, {
                                        children: (0, h.jsx)(ed.DZ, { variant: 'h2', children: (0, h.jsx)(eJ.A, { id: 'paywall.kinopoisk-part-title' }) }),
                                    }),
                                ],
                            }),
                            content: (0, h.jsxs)(h.Fragment, {
                                children: [
                                    (0, h.jsx)(i$, {
                                        className: iJ().card1,
                                        text: (0, h.jsx)(eJ.A, { id: 'paywall.kinopoisk-part-benefit-movies', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: i0[a],
                                        image2xSrc: i1[a],
                                    }),
                                    (0, h.jsx)(i$, {
                                        className: iJ().card2,
                                        text: (0, h.jsx)(eJ.A, { id: 'paywall.kinopoisk-part-benefit-exclusive', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.667441724ca5c169150d1473/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.667441934ca5c169150d1475/orig',
                                    }),
                                    a === az.RU &&
                                        (0, h.jsx)(i$, {
                                            className: iJ().card3,
                                            text: (0, h.jsx)(eJ.A, { id: 'paywall.kinopoisk-part-benefit-sport', values: { br: '\n', nbsp: '\xa0' } }),
                                            imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.667441e54ca5c169150d1477/orig',
                                            image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667441ff4ca5c169150d1479/orig',
                                        }),
                                    (0, h.jsx)(i$, {
                                        className: (0, ew.$)(iJ().card4, iJ()['card4_'.concat(a)]),
                                        text: (0, h.jsx)(eJ.A, { id: 'paywall.kinopoisk-part-benefit-channels', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: i2[a],
                                        image2xSrc: i4[a],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            var i6 = a(37003),
                i3 = a.n(i6);
            let i5 = (e) => {
                let { className: t, variant: a = az.RU } = e,
                    i = (0, tG.j)(),
                    l = (0, b.useMemo)(
                        () =>
                            a === az.RU
                                ? (0, h.jsx)(eJ.A, { id: 'paywall.music-part-benefit-books', values: { br: '\n', nbsp: '\xa0' } })
                                : (0, h.jsx)(eJ.A, { id: 'paywall.music-part-benefit-books-alternative', values: { br: '\n', nbsp: '\xa0' } }),
                        [a],
                    );
                return (0, h.jsx)('div', {
                    'data-test-id': $.e8.paywall.MOBILE_PAYWALL_MUSIC_SECTION,
                    children: (0, h.jsx)(iZ, {
                        id: iA,
                        className: t,
                        contentClassName: i3().content,
                        heading: (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)(G.I, { variant: 'musicLogoCenter'.concat(i), className: i3()['logo_'.concat(i.toLocaleLowerCase())] }),
                                (0, h.jsx)(tK.q, {
                                    children: (0, h.jsx)(ed.DZ, {
                                        variant: 'h2',
                                        children: (0, h.jsx)(eJ.A, { id: 'paywall.music-part-title', values: { nbsp: '\xa0' } }),
                                    }),
                                }),
                            ],
                        }),
                        content: (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)(i$, {
                                    className: i3().card,
                                    text: (0, h.jsx)(eJ.A, { id: 'paywall.music-part-benefit-recommendations', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667415134ca5c169150d135d/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.667415424ca5c169150d135f/orig',
                                }),
                                (0, h.jsx)(i$, {
                                    className: i3().card,
                                    text: (0, h.jsx)(eJ.A, { id: 'paywall.music-part-benefit-many-devices', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6674157e4ca5c169150d1361/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.667415a74ca5c169150d1364/orig',
                                }),
                                (0, h.jsx)(i$, {
                                    className: i3().card,
                                    text: (0, h.jsx)(eJ.A, { id: 'paywall.music-part-benefit-playlists', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.667415d64ca5c169150d1366/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.667415f44ca5c169150d1368/orig',
                                }),
                                (0, h.jsx)(i$, {
                                    className: i3().card,
                                    text: (0, h.jsx)(eJ.A, { id: 'paywall.music-part-benefit-without-internet-mobile', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667417c14ca5c169150d1382/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667417e14ca5c169150d1384/orig',
                                }),
                                (0, h.jsx)(i$, {
                                    className: i3().card,
                                    text: l,
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.667418304ca5c169150d1386/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.6674184e4ca5c169150d1388/orig',
                                }),
                            ],
                        }),
                    }),
                });
            };
            var i9 = a(83690),
                i7 = a.n(i9);
            let le = (e) => {
                let { className: t, variant: a = az.RU } = e,
                    i = (0, tG.j)();
                return (0, h.jsx)('div', {
                    'data-test-id': $.e8.paywall.MOBILE_PAYWALL_PLUS_SECTION,
                    children: (0, h.jsx)(iZ, {
                        className: t,
                        contentClassName: i7()['content_'.concat(a)],
                        heading: (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)(G.I, { variant: 'yandexPlus'.concat(i), className: i7()['logo_'.concat(i.toLocaleLowerCase())] }),
                                (0, h.jsx)(tK.q, {
                                    children: (0, h.jsx)(ed.DZ, {
                                        variant: 'h2',
                                        children: (0, h.jsx)(eJ.A, { id: 'paywall.plus-part-title', values: { nbsp: '\xa0' } }),
                                    }),
                                }),
                            ],
                        }),
                        content: (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)(i$, {
                                    className: i7().card,
                                    text: (0, h.jsx)(eJ.A, { id: 'paywall.plus-part-benefit-family', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/29541/img.667566fbcc842022e134a7ac/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66756714cc842022e134a7ae/orig',
                                }),
                                (0, h.jsx)(i$, {
                                    className: i7().card,
                                    text: (0, h.jsx)(eJ.A, { id: 'paywall.plus-part-benefit-devices', values: { br: '\n' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.67cade4deeed590a0d455116/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.67cade4beeed590a0d455115/orig',
                                }),
                            ],
                        }),
                    }),
                });
            };
            var lt = a(83547),
                la = a.n(lt);
            let li = (e) => {
                let { className: t, moreInfoLinkProps: a } = e;
                return (0, h.jsxs)('section', {
                    className: (0, ew.$)(la().root, t),
                    children: [
                        (0, h.jsx)('div', { className: la().image }),
                        (0, h.jsxs)('div', {
                            className: la().content,
                            children: [
                                (0, h.jsx)(ed.DZ, {
                                    className: la().title,
                                    variant: 'h1',
                                    size: 'xl',
                                    weight: 'bold',
                                    children: (0, h.jsx)(eJ.A, { id: 'paywall.music-on-many-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, h.jsx)(ed.HL, {
                                    variant: 'div',
                                    size: 'l',
                                    children: (0, h.jsx)(eJ.A, { id: 'paywall.recommendations-on-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, h.jsx)(iF, { className: la().buySubscriptionBlock, shouldShowFixed: !0, hasColumnLayout: !0 }),
                                (0, h.jsx)(iT, { ...a, className: (0, ew.$)(la().moreInfoLink, null == a ? void 0 : a.className) }),
                            ],
                        }),
                    ],
                });
            };
            var ll = a(32021),
                ln = a.n(ll);
            let ls = () =>
                    (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(li, { className: ln().topSection }),
                            (0, h.jsx)(i5, { className: aW().section, variant: az.BY }),
                            (0, h.jsx)(i8, { className: aW().section, variant: az.BY }),
                            (0, h.jsx)(le, { className: aW().section, variant: az.BY }),
                            (0, h.jsx)(it, { className: aW().section_faq }),
                            (0, h.jsx)(ir, {}),
                        ],
                    }),
                lr = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return (0, h.jsx)('div', { className: aq().root, children: e ? (0, h.jsx)(ls, {}) : (0, h.jsx)(iW, {}) });
                });
            var lo = a(96555),
                lc = a.n(lo);
            let ld = () =>
                (0, h.jsxs)('div', {
                    className: lc().root,
                    children: [(0, h.jsx)(iz, { className: lc().topSection }), (0, h.jsx)(it, { className: aW().section_faq }), (0, h.jsx)(ir, {})],
                });
            var lu = a(16521),
                l_ = a.n(lu);
            let lm = () =>
                    (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(li, { className: l_().topSection, moreInfoLinkProps: { shouldShowLabel: !1 } }),
                            (0, h.jsx)(it, { faqProps: { id: iA } }),
                            (0, h.jsx)(ir, {}),
                        ],
                    }),
                lp = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? (0, h.jsx)(lm, {}) : (0, h.jsx)(ld, {});
                });
            var lv = a(67542),
                lx = a.n(lv),
                lh = a(34303);
            let ly = () => {
                let { experiments: e } = (0, N.g)(),
                    t = (0, t5.useSearchParams)().get(lh.K.UTM_MEDIUM),
                    a = e.checkExperiment(S.z.WebNextPaidPerformancePaywallTopSection, 'music_benefits') && 'paid_performance' === t;
                return e.checkExperiment(S.z.WebNextPaywallTopSection, 'music_benefits') || a;
            };
            var lC = a(46200),
                lg = a.n(lC);
            let lb = (e) => {
                let { className: t, variant: a = az.RU } = e,
                    i = (0, tG.j)();
                return (0, h.jsx)(im, {
                    className: t,
                    contentClassName: lg()['content_'.concat(a)],
                    heading: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(G.I, { variant: 'yandexBooks'.concat(i), className: lg()['logo_'.concat(i.toLocaleLowerCase())] }),
                            (0, h.jsx)(tK.q, {
                                children: (0, h.jsx)(ed.DZ, { variant: 'h2', children: (0, h.jsx)(eJ.A, { id: 'paywall.books-part-title', values: { nbsp: '\xa0' } }) }),
                            }),
                        ],
                    }),
                    content: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(id, {
                                className: lg().card,
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.books-part-benefit-app-desktop', values: { nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68c02cb364560d354cb53936/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.68c02ce6cccb5e758b864480/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_READ_IN_APP,
                            }),
                            (0, h.jsx)(id, {
                                className: lg().card,
                                variant: 'vertical',
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.books-part-benefit-follow-desktop', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6a89798264a4b59f3a749/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a890ed792c3f4a135a74/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_FIND_NEWS,
                            }),
                            (0, h.jsx)(id, {
                                className: lg().card,
                                variant: 'vertical',
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.books-part-benefit-download-desktop', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a8c8caf72c4bc9eaea8c/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f6a8bf4e6e980968aa844d/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_DOWNLOAD_BOOKS,
                            }),
                            (0, h.jsx)(id, {
                                className: lg().card,
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.books-part-benefit-speed-desktop', values: { br: '\n' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68c02cbc9daf1b03347faca5/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68c02cdccccb5e758b86447e/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_CHOOSE_PASE,
                            }),
                        ],
                    }),
                    'data-test-id': $.e8.paywall.PAYWALL_BOOKS_SECTION,
                });
            };
            var lA = a(44924),
                lf = a.n(lA);
            let lT = (e) => {
                let { className: t, variant: a = az.RU } = e;
                return (0, h.jsx)(im, {
                    className: t,
                    contentClassName: lf()['content_'.concat(a)],
                    heading: (0, h.jsx)(ed.DZ, {
                        variant: 'h2',
                        className: lf().title,
                        children: (0, h.jsx)(eJ.A, { id: 'paywall.other-services-part-title', values: { nbsp: '\xa0' } }),
                    }),
                    content: (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(id, {
                                className: lf().card,
                                variant: 'vertical',
                                imageAlign: 'right',
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.other-services-part-benefit-maps', values: { nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68eec5170c5fe5082085b079/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec52e94053d016bcd7bf3/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_MAPS,
                            }),
                            (0, h.jsx)(id, {
                                className: lf().card,
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.other-services-part-benefit-your-plus', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec5408fcfeb05fbb439ec/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec547b510f9053778b2d0/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_YOUR_PLUS,
                            }),
                            (0, h.jsx)(id, {
                                className: lf().card,
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.pay-part-benefit-split-desktop', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec5516fc33b70f1711a3a/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68eec558b510f9053778b2d2/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_DIVIDE_PAYMENT,
                            }),
                            (0, h.jsx)(id, {
                                className: lf().card,
                                variant: 'vertical',
                                imageAlign: 'right',
                                text: (0, h.jsx)(eJ.A, { id: 'paywall.other-services-part-save', values: { nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.68eec565d57d6359e4120722/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.68eec56e6fc33b70f1711a3c/orig',
                                'data-test-id': $.e8.paywall.PAYWALL_SECTION_CARD_TAKE_SAVES,
                            }),
                        ],
                    }),
                    'data-test-id': $.e8.paywall.PAYWALL_OTHER_SERVICES_SECTION,
                });
            };
            var lj = a(4370);
            function lN() {
                return (lN = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lS = function (e) {
                return b.createElement(
                    'svg',
                    lN({ width: 64, height: 64, viewBox: '0 0 64 64', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    b.createElement(
                        'mask',
                        { id: 'mask0_1016_316950', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: -1, y: 0, width: 65, height: 64 },
                        i || (i = b.createElement('circle', { cx: 31.6934, cy: 32, r: 32, fill: '#D9D9D9' })),
                    ),
                    l ||
                        (l = b.createElement(
                            'g',
                            { mask: 'url(#mask0_1016_316950)' },
                            b.createElement('path', { d: 'M17.9864 0V29.0933L0 16V0H17.9864Z', fill: 'url(#paint0_linear_1016_316950)' }),
                            b.createElement('path', { d: 'M58.2771 0L36.0641 16.04L17.9844 29.0933V0H58.2771Z', fill: 'url(#paint1_linear_1016_316950)' }),
                            b.createElement('path', { d: 'M63.9993 0V31.88L36.0664 39.36V16.04L58.2794 0H63.9993Z', fill: 'url(#paint2_linear_1016_316950)' }),
                            b.createElement('path', { d: 'M63.9993 31.8789V60.5189L36.0664 53.0389V39.3589L63.9993 31.8789Z', fill: 'url(#paint3_linear_1016_316950)' }),
                            b.createElement('path', { d: 'M63.9993 60.5191V63.9991H36.0664V53.0391L63.9993 60.5191Z', fill: 'url(#paint4_linear_1016_316950)' }),
                            b.createElement('path', { d: 'M36.0661 16.04V64H0V16L17.9864 29.0933L36.0661 16.04Z', fill: '#FFDAEA' }),
                            b.createElement('path', {
                                d: 'M27.0129 47.8395C24.8663 51.4394 21.5197 53.0261 18.013 53.0261C10.9998 53.0261 5.75991 48.0928 5.75991 40.6796C5.75991 40.6796 5.77324 39.6396 5.79991 39.3063L36.0661 39.3463V16.04L17.9864 29.0931L0 16V63.9992H36.0661V53.0394C32.5728 53.0261 29.3995 51.4394 27.0129 47.8528V47.8395ZM18.013 49.0128C21.5463 49.0128 23.7063 47.1862 23.9996 43.0662H11.1598C11.7198 46.7728 14.5864 49.0128 18.0264 49.0128H18.013ZM30.0262 43.0662H43.026C42.466 46.7728 39.4394 49.0128 35.9994 49.0128C32.5595 49.0128 30.3062 47.1862 30.0128 43.0662H30.0262Z',
                                fill: '#4D0000',
                            }),
                        )),
                    n ||
                        (n = b.createElement(
                            'defs',
                            null,
                            b.createElement(
                                'linearGradient',
                                { id: 'paint0_linear_1016_316950', x1: 8.99319, y1: 29.0933, x2: 8.99319, y2: -2.64766, gradientUnits: 'userSpaceOnUse' },
                                b.createElement('stop', { stopColor: '#FFDAEA' }),
                                b.createElement('stop', { offset: 0.6, stopColor: '#FFB56F' }),
                                b.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            b.createElement(
                                'linearGradient',
                                { id: 'paint1_linear_1016_316950', x1: 38.1307, y1: 29.0933, x2: 38.1307, y2: 0, gradientUnits: 'userSpaceOnUse' },
                                b.createElement('stop', { stopColor: '#FFDAEA' }),
                                b.createElement('stop', { offset: 0.4, stopColor: '#FFB56F' }),
                                b.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            b.createElement(
                                'linearGradient',
                                { id: 'paint2_linear_1016_316950', x1: 36.0664, y1: 19.68, x2: 63.9993, y2: 19.68, gradientUnits: 'userSpaceOnUse' },
                                b.createElement('stop', { stopColor: '#FFDAEA' }),
                                b.createElement('stop', { offset: 0.4, stopColor: '#FFB56F' }),
                                b.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            b.createElement(
                                'linearGradient',
                                { id: 'paint3_linear_1016_316950', x1: 36.0664, y1: 46.1989, x2: 67.0254, y2: 46.1989, gradientUnits: 'userSpaceOnUse' },
                                b.createElement('stop', { stopColor: '#FFDAEA' }),
                                b.createElement('stop', { offset: 0.6, stopColor: '#FFB56F' }),
                                b.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            b.createElement(
                                'linearGradient',
                                { id: 'paint4_linear_1016_316950', x1: 36.0664, y1: 58.5191, x2: 63.9993, y2: 58.5191, gradientUnits: 'userSpaceOnUse' },
                                b.createElement('stop', { stopColor: '#FFDAEA' }),
                                b.createElement('stop', { offset: 0.4, stopColor: '#FFB56F' }),
                                b.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                        )),
                );
            };
            function lI() {
                return (lI = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lk = function (e) {
                return b.createElement(
                    'svg',
                    lI({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 64 65', fill: 'none' }, e),
                    b.createElement(
                        'g',
                        { clipPath: 'url(#clip0_4165_10094)' },
                        s || (s = b.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' })),
                        r ||
                            (r = b.createElement('path', {
                                d: 'M18.4483 14.2142C21.818 11.7173 25.8007 10.2079 29.9516 9.83281V16.7015C27.2684 17.0494 24.7059 18.0767 22.5139 19.7009C19.7692 21.7347 17.7508 24.5968 16.7563 27.8649C15.7619 31.133 15.8441 34.6342 16.9909 37.8521C18.1376 41.0699 20.2881 43.8341 23.1252 45.7368C25.9624 47.6395 29.3359 48.58 32.7482 48.4197C36.1605 48.2594 39.4309 47.0066 42.0771 44.8462C44.7233 42.6859 46.6052 39.7322 47.4451 36.421C48.031 34.1114 48.0883 31.7131 47.6293 29.4009L53.3973 24.7639L53.3935 24.7265C54.9505 29.0095 55.1883 33.669 54.0643 38.1001C52.8644 42.8304 50.1761 47.0498 46.3958 50.1361C42.6155 53.2223 37.9434 55.012 33.0687 55.241C28.194 55.4701 23.3747 54.1264 19.3216 51.4083C15.2686 48.6901 12.1964 44.7414 10.5583 40.1444C8.92008 35.5475 8.80263 30.5458 10.2232 25.877C11.6438 21.2082 14.5273 17.1196 18.4483 14.2142Z',
                                fill: '#FCCA00',
                            })),
                        o ||
                            (o = b.createElement('path', {
                                d: 'M49.048 17.4203L49.0722 17.4808L45.2177 23.6027C43.8161 21.5255 41.9377 19.7966 39.7395 18.5728V32.5043C39.7395 36.7786 36.2744 40.2436 32.0001 40.2436C27.7258 40.2436 24.2607 36.7786 24.2607 32.5043C24.2607 28.2299 27.7258 24.7649 32.0001 24.7649C33.602 24.7649 35.0903 25.2516 36.325 26.0852V10.1518C41.3497 11.1183 45.7865 13.7369 49.048 17.4203Z',
                                fill: '#FC3F1D',
                            })),
                        b.createElement(
                            'mask',
                            { id: 'mask0_4165_10094', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: 64, height: 65 },
                            c || (c = b.createElement('ellipse', { cx: 32, cy: 32.5, rx: 32, ry: 32, fill: 'white' })),
                        ),
                        d || (d = b.createElement('g', { mask: 'url(#mask0_4165_10094)' })),
                        u ||
                            (u = b.createElement(
                                'g',
                                { clipPath: 'url(#clip1_4165_10094)' },
                                b.createElement('rect', { width: 63.9999, height: 63.9999, transform: 'translate(0 0.5)', fill: 'black' }),
                                b.createElement('path', {
                                    d: 'M63.9999 10.0984L30.9887 27.7682L48.1919 10.0984L38.6559 10.0984L26.9439 26.3551V10.0984H19.2L19.2 54.8984H26.9439L26.9439 38.668L38.6559 54.8984H48.1919L31.4355 37.7842L63.9999 54.8984V46.5784L34.2988 34.6629L63.9999 36.6584V28.3384L34.487 30.2571L63.9999 18.4184V10.0984Z',
                                    fill: 'url(#paint0_radial_4165_10094)',
                                }),
                            )),
                    ),
                    _ ||
                        (_ = b.createElement(
                            'defs',
                            null,
                            b.createElement(
                                'radialGradient',
                                {
                                    id: 'paint0_radial_4165_10094',
                                    cx: 0,
                                    cy: 0,
                                    r: 1,
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform: 'translate(19.2 10.0984) rotate(45) scale(63.3567 63.3567)',
                                },
                                b.createElement('stop', { offset: 0.5, stopColor: '#FF5500' }),
                                b.createElement('stop', { offset: 1, stopColor: '#BBFF00' }),
                            ),
                            b.createElement('clipPath', { id: 'clip0_4165_10094' }, b.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' })),
                            b.createElement(
                                'clipPath',
                                { id: 'clip1_4165_10094' },
                                b.createElement('rect', { width: 63.9999, height: 63.9999, fill: 'white', transform: 'translate(0 0.5)' }),
                            ),
                        )),
                );
            };
            function lL() {
                return (lL = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lE = function (e) {
                return b.createElement(
                    'svg',
                    lL({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 64 65', fill: 'none' }, e),
                    m ||
                        (m = b.createElement('path', {
                            d: 'M32 64.5C49.6731 64.5 64 50.1731 64 32.5C64 14.8269 49.6731 0.5 32 0.5C14.3269 0.5 0 14.8269 0 32.5C0 50.1731 14.3269 64.5 32 64.5Z',
                            fill: 'black',
                        })),
                    p ||
                        (p = b.createElement('path', {
                            d: 'M47.4516 28.882C47.4516 28.882 55.4213 40.0392 55.3875 40.1373C55.238 40.5644 55.0773 40.9858 54.9052 41.4016C54.8659 41.4963 44.9333 32.923 44.9333 32.923C44.9333 32.923 47.6607 51.2055 47.6067 51.2506C47.211 51.5751 46.8074 51.8884 46.3925 52.1882C46.3352 52.2298 40.4251 34.2786 40.4251 34.2786C40.4251 34.2786 32.1609 56.938 32.0912 56.9391C31.963 56.9413 31.8337 56.9425 31.7055 56.9425C31.2738 56.9425 30.8455 56.9312 30.4183 56.9098C30.3542 56.9064 35.3548 32.7697 35.3548 32.7697C35.3548 32.7697 11.8448 47.1679 11.8111 47.1239C11.4738 46.6867 11.1512 46.2382 10.8431 45.7773C10.8105 45.7289 31.3829 28.4233 31.3829 28.4233C31.384 28.4245 7.07582 26.9178 7.08594 26.8671C7.18937 26.3465 7.30854 25.8304 7.44345 25.3221C7.45581 25.2737 30.8084 23.4346 30.8084 23.4346C30.8084 23.4346 13.7594 14.1976 13.7999 14.1559C14.1495 13.7986 14.5104 13.4516 14.8814 13.1146C14.9264 13.0741 33.7022 19.3463 33.7022 19.3463C33.7022 19.3463 27.9247 6.91001 28.0293 6.89423C28.4509 6.83225 28.8747 6.78042 29.3031 6.73985C29.393 6.73196 39.121 18.1969 39.121 18.1969C39.121 18.1969 42.2306 8.93727 42.3228 8.98122C42.7635 9.18857 43.1975 9.40718 43.6236 9.63819C43.7034 9.68101 43.9709 19.7136 43.9709 19.7136C43.9709 19.7136 51.4842 16.2958 51.5022 16.3184C51.7641 16.6553 52.0182 16.999 52.2633 17.3506C52.279 17.3731 46.7737 23.829 46.7737 23.829C46.7737 23.829 56.4016 27.2728 56.4173 27.3629C56.4893 27.7697 56.5523 28.1788 56.604 28.5912C56.6141 28.6757 47.4516 28.882 47.4516 28.882Z',
                            fill: '#FED42B',
                        })),
                );
            };
            function lM() {
                return (lM = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lP = function (e) {
                return b.createElement(
                    'svg',
                    lM({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 64 65', fill: 'none' }, e),
                    v ||
                        (v = b.createElement(
                            'g',
                            { clipPath: 'url(#clip0_4032_54517)' },
                            b.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' }),
                            b.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M64 32.5C64 50.1731 49.6731 64.5 32 64.5C14.3269 64.5 0 50.1731 0 32.5C0 14.8269 14.3269 0.5 32 0.5C35.4533 0.5 38.7788 1.04699 41.8946 2.05907L34.6013 24.5H13.303L10.7003 32.5H32.0013L25.7613 51.7H34.5613L40.8013 32.5H64ZM62.9919 24.5H43.4013L49.508 5.71001C56.0847 10.0168 60.9791 16.68 62.9919 24.5Z',
                                fill: 'url(#paint0_linear_4032_54517)',
                            }),
                        )),
                    x ||
                        (x = b.createElement(
                            'defs',
                            null,
                            b.createElement(
                                'linearGradient',
                                { id: 'paint0_linear_4032_54517', x1: -253254e-12, y1: 28.2333, x2: 64, y2: 28.2333, gradientUnits: 'userSpaceOnUse' },
                                b.createElement('stop', { stopColor: '#FF5C4D' }),
                                b.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                b.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            b.createElement('clipPath', { id: 'clip0_4032_54517' }, b.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' })),
                        )),
                );
            };
            var lO = a(15230),
                lw = a.n(lO);
            let lR = () =>
                    (0, h.jsxs)('ul', {
                        className: lw().services,
                        children: [
                            (0, h.jsxs)('li', {
                                className: lw().service,
                                children: [
                                    (0, h.jsx)(lE, { className: lw().serviceLogo, 'aria-hidden': !0 }),
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lw().serviceLabel,
                                        children: (0, h.jsx)(eJ.A, { id: 'paywall.plus-benefit-music', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('li', {
                                className: lw().service,
                                children: [
                                    (0, h.jsx)(lk, { className: lw().serviceLogo, 'aria-hidden': !0 }),
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lw().serviceLabel,
                                        children: (0, h.jsx)(eJ.A, { id: 'paywall.plus-benefit-kinopoisk', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('li', {
                                className: lw().service,
                                children: [
                                    (0, h.jsx)(lS, { className: lw().serviceLogo, 'aria-hidden': !0 }),
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lw().serviceLabel,
                                        children: (0, h.jsx)(eJ.A, { id: 'paywall.plus-benefit-books', values: { br: '\n' } }),
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('li', {
                                className: lw().service,
                                children: [
                                    (0, h.jsx)(lP, { className: lw().serviceLogo, 'aria-hidden': !0 }),
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lw().serviceLabel,
                                        children: (0, h.jsx)(eJ.A, { id: 'paywall.plus-benefit-cashback', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                lD = (e) => {
                    let { className: t } = e,
                        {
                            settings: { browserInfo: a },
                            paywall: i,
                        } = (0, N.g)(),
                        l = (0, tG.j)(),
                        n = (0, t5.usePathname)(),
                        s = !a.isTouch && (n === lj.Z.pay.href || i.freemiumCollectionBarrier);
                    return (0, h.jsxs)('section', {
                        className: (0, ew.$)(lw().root, t),
                        'data-test-id': $.e8.paywall.PAYWALL_TOP_SECTION,
                        children: [
                            (0, h.jsxs)('div', {
                                className: lw().main,
                                children: [
                                    (0, h.jsx)(G.I, { variant: 'yandexPlus'.concat(l), className: (0, ew.$)(lw().logo, lw()['logo_'.concat(l.toLowerCase())]) }),
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h1',
                                        size: 'xxxl',
                                        weight: 'bold',
                                        className: lw().title,
                                        children: (0, h.jsx)(eJ.A, { id: 'paywall.open-plus-benefits', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                    (0, h.jsx)(lR, {}),
                                    (0, h.jsx)(iF, { className: lw().buySubscriptionBlock, shouldShowFixed: !0 }),
                                    s &&
                                        (0, h.jsx)(iC.N, {
                                            className: lw().goHomeLink,
                                            href: '/',
                                            children: (0, h.jsx)(ed.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                children: (0, h.jsx)(eJ.A, { id: 'navigation.go-home' }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, h.jsx)(iT, {
                                'data-test-id': $.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                children: (0, h.jsx)(tz._V, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb31b8fcfeb05fbb439da/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb33c5566813399938412/orig',
                                    fit: 'contain',
                                    className: lw().moreInfoChildren,
                                    'aria-hidden': !0,
                                    'data-test-id': $.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                }),
                            }),
                        ],
                    });
                };
            var lB = a(3146),
                lF = a.n(lB);
            let lU = (e) => {
                let { className: t } = e,
                    {
                        settings: { browserInfo: a },
                        paywall: i,
                    } = (0, N.g)(),
                    l = (0, tG.j)(),
                    n = (0, t5.usePathname)(),
                    s = !a.isTouch && (n === lj.Z.pay.href || i.freemiumCollectionBarrier);
                return (0, h.jsxs)('section', {
                    className: (0, ew.$)(lF().root, t),
                    'data-test-id': $.e8.paywall.PAYWALL_TOP_SECTION,
                    children: [
                        (0, h.jsxs)('div', {
                            className: lF().main,
                            children: [
                                (0, h.jsx)('div', {
                                    className: lF().logoWrap,
                                    children: (0, h.jsx)(G.I, {
                                        variant: 'musicLogoCenter'.concat(l),
                                        className: (0, ew.$)(lF().logo, lF()['logo_'.concat(l.toLowerCase())]),
                                    }),
                                }),
                                (0, h.jsx)('video', {
                                    preload: 'metadata',
                                    loop: !0,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    disablePictureInPicture: !0,
                                    width: 1e3,
                                    height: 1e3,
                                    src: ''.concat('', '/media/paywall_family_offer/family_offer.mp4'),
                                    poster: ''.concat('', '/media/paywall_family_offer/family_offer.png'),
                                    className: lF().video,
                                }),
                                (0, h.jsxs)('div', {
                                    className: lF().textBlock,
                                    children: [
                                        (0, h.jsx)(ed.DZ, {
                                            variant: 'h1',
                                            size: 'xxxl',
                                            weight: 'bold',
                                            className: lF().title,
                                            children: (0, h.jsx)(eJ.A, { id: 'paywall.family-offer-title', values: { br: '\n', nbsp: '\xa0' } }),
                                        }),
                                        (0, h.jsx)(ed.HL, {
                                            variant: 'p',
                                            size: 'm',
                                            weight: 'bold',
                                            className: lF().subtitle,
                                            children: (0, h.jsx)(eJ.A, { id: 'paywall.family-offer-text', values: { br: '\n' } }),
                                        }),
                                        (0, h.jsx)(iF, { className: lF().buySubscriptionBlock, shouldShowFixed: !0, hasColumnLayout: !0 }),
                                        s &&
                                            (0, h.jsx)(iC.N, {
                                                className: lF().goHomeLink,
                                                href: '/',
                                                children: (0, h.jsx)(ed.HL, {
                                                    variant: 'span',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    children: (0, h.jsx)(eJ.A, { id: 'navigation.go-home' }),
                                                }),
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, h.jsx)(iT, {
                            'data-test-id': $.e8.paywall.PAYWALL_MORE_INFO_LINK,
                            children: (0, h.jsx)(tz._V, {
                                src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb31b8fcfeb05fbb439da/orig',
                                srcSet: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb33c5566813399938412/orig',
                                fit: 'contain',
                                className: lF().moreInfoChildren,
                                'aria-hidden': !0,
                                'data-test-id': $.e8.paywall.PAYWALL_MORE_INFO_LINK,
                            }),
                        }),
                    ],
                });
            };
            var lV = a(56386),
                lz = a.n(lV);
            let lK = (e) => {
                    let { children: t } = e,
                        {
                            settings: { isMobile: a, browserInfo: i },
                        } = (0, N.g)();
                    return a || i.isTablet
                        ? (0, h.jsx)(ed.HL, { variant: 'span', size: 'm', className: lz().benefitLabelMobile, children: t })
                        : (0, h.jsx)(ed.DZ, { variant: 'h2', size: 'm', className: lz().benefitLabelDesktop, children: t });
                },
                lH = () => {
                    let {
                            settings: { isMobile: e, browserInfo: t },
                        } = (0, N.g)(),
                        { formatMessage: a } = (0, q.A)(),
                        i = a(e || t.isTablet ? { id: 'paywall.music-benefit-all-in-one-mobile' } : { id: 'paywall.music-benefit-all-in-one-desktop' }, {
                            br: '\n',
                            nbsp: '\xa0',
                        });
                    return (0, h.jsxs)('ul', {
                        className: lz().benefits,
                        children: [
                            (0, h.jsxs)('li', {
                                className: lz().benefit,
                                children: [
                                    (0, h.jsx)(tz._V, {
                                        className: lz().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.693ad41840fb42546cc35e13/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.693ad43c40fb42546cc35e15/orig',
                                    }),
                                    (0, h.jsx)(lK, { children: (0, h.jsx)(eJ.A, { id: 'paywall.music-benefit-audio', values: { nbsp: '\xa0' } }) }),
                                ],
                            }),
                            (0, h.jsxs)('li', {
                                className: (0, ew.$)(lz().benefit, lz().benefit_recommendation),
                                children: [
                                    (0, h.jsx)(tz._V, {
                                        className: lz().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.693ad52e40fb42546cc35e1a/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.693ad53793461475f95b4f50/orig',
                                    }),
                                    (0, h.jsx)(lK, { children: (0, h.jsx)(eJ.A, { id: 'paywall.music-benefit-recommendation', values: { nbsp: '\xa0' } }) }),
                                ],
                            }),
                            (0, h.jsxs)('li', {
                                className: lz().benefit,
                                children: [
                                    (0, h.jsx)(tz._V, {
                                        className: lz().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.693ad56040fb42546cc35e1c/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.693ad56640fb42546cc35e1e/orig',
                                    }),
                                    (0, h.jsx)(lK, { children: (0, h.jsx)(eJ.A, { id: 'paywall.music-benefit-without-network', values: { nbsp: '\xa0' } }) }),
                                ],
                            }),
                            (0, h.jsxs)('li', {
                                className: lz().benefit,
                                children: [
                                    (0, h.jsx)(tz._V, {
                                        className: lz().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.693ad56e621a600def9091d8/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.693ad57632413276cc433bf8/orig',
                                    }),
                                    (0, h.jsx)(lK, { children: i }),
                                ],
                            }),
                        ],
                    });
                },
                lW = (e) => {
                    let { className: t } = e,
                        {
                            settings: { browserInfo: a },
                            paywall: i,
                        } = (0, N.g)(),
                        l = (0, tG.j)(),
                        n = (0, t5.usePathname)(),
                        s = !a.isTouch && (n === lj.Z.pay.href || i.freemiumCollectionBarrier);
                    return (0, h.jsxs)('section', {
                        className: (0, ew.$)(lz().root, t),
                        'data-test-id': $.e8.paywall.PAYWALL_TOP_SECTION,
                        children: [
                            (0, h.jsxs)('div', {
                                className: lz().main,
                                children: [
                                    (0, h.jsx)(G.I, { variant: 'musicLogoCenter'.concat(l), className: (0, ew.$)(lz().logo, lz()['logo_'.concat(l.toLowerCase())]) }),
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h1',
                                        size: 'xxxl',
                                        weight: 'bold',
                                        className: lz().title,
                                        children: (0, h.jsx)(eJ.A, { id: 'paywall.music-benefits-title', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                    (0, h.jsx)(lH, {}),
                                    (0, h.jsx)(iF, { className: lz().buySubscriptionBlock, shouldShowFixed: !0 }),
                                    s &&
                                        (0, h.jsx)(iC.N, {
                                            className: lz().goHomeLink,
                                            href: '/',
                                            children: (0, h.jsx)(ed.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                children: (0, h.jsx)(eJ.A, { id: 'navigation.go-home' }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, h.jsx)(iT, {
                                'data-test-id': $.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                children: (0, h.jsx)(tz._V, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb31b8fcfeb05fbb439da/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb33c5566813399938412/orig',
                                    fit: 'contain',
                                    className: lz().moreInfoChildren,
                                    'aria-hidden': !0,
                                    'data-test-id': $.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                }),
                            }),
                        ],
                    });
                },
                lY = { family_offer: (0, h.jsx)(lU, {}), default: (0, h.jsx)(lD, {}) },
                lq = () => {
                    var e;
                    let t = ly(),
                        { experiments: a } = (0, N.g)(),
                        i = (null == (e = a.getExperiment(S.z.WebNextPaywallTopSection)) ? void 0 : e.group) || 'default';
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            t ? (0, h.jsx)(lW, {}) : lY[i] || lY.default,
                            (0, h.jsx)(iS, { className: aW().section }),
                            (0, h.jsx)(iy, { className: aW().section }),
                            (0, h.jsx)(lb, { className: aW().section }),
                            (0, h.jsx)(iL, { className: aW().section }),
                            (0, h.jsx)(lT, { className: aW().section }),
                            (0, h.jsx)(it, { className: aW().section_faq, variant: az.RU }),
                            (0, h.jsx)(ir, { variant: az.RU }),
                        ],
                    });
                };
            var l$ = a(65480),
                lQ = a.n(l$);
            let lG = (e) => {
                    let { className: t, variant: a = az.RU } = e,
                        i = (0, tG.j)();
                    return (0, h.jsx)('div', {
                        'data-test-id': $.e8.paywall.MOBILE_PAYWALL_BOOKS_SECTION,
                        children: (0, h.jsx)(iZ, {
                            className: t,
                            contentClassName: lQ()['content_'.concat(a)],
                            heading: (0, h.jsxs)(h.Fragment, {
                                children: [
                                    (0, h.jsx)(G.I, { variant: 'yandexBooks'.concat(i), className: lQ()['logo_'.concat(i.toLocaleLowerCase())] }),
                                    (0, h.jsx)(tK.q, {
                                        children: (0, h.jsx)(ed.DZ, {
                                            variant: 'h2',
                                            children: (0, h.jsx)(eJ.A, { id: 'paywall.books-part-title', values: { nbsp: '\xa0' } }),
                                        }),
                                    }),
                                ],
                            }),
                            content: (0, h.jsxs)(h.Fragment, {
                                children: [
                                    (0, h.jsx)(i$, {
                                        className: lQ().card,
                                        text: (0, h.jsx)(eJ.A, { id: 'paywall.books-part-benefit-switch-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.68c0128ad8f3372f64a885b4/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.68c012b2fbed8f7a98fb1441/orig',
                                    }),
                                    (0, h.jsx)(i$, {
                                        className: lQ().card,
                                        text: (0, h.jsx)(eJ.A, { id: 'paywall.books-part-benefit-read-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6ac99ed792c3f4a135afd/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.66f6ac924e6e980968aa8463/orig',
                                    }),
                                    (0, h.jsx)(i$, {
                                        className: lQ().card,
                                        text: (0, h.jsx)(eJ.A, { id: 'paywall.books-part-benefit-download-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6aca698264a4b59f3a7be/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.66f6ac9fcaf72c4bc9eaeaab/orig',
                                    }),
                                    (0, h.jsx)(i$, {
                                        className: lQ().card,
                                        text: (0, h.jsx)(eJ.A, { id: 'paywall.books-part-benefit-speed-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.68c01296fbed8f7a98fb143c/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68c012bbd8f3372f64a885b9/orig',
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                lZ = { family_offer: (0, h.jsx)(lU, {}), default: (0, h.jsx)(lD, {}) },
                lX = () => {
                    var e;
                    let t = ly(),
                        { experiments: a } = (0, N.g)(),
                        i = (null == (e = a.getExperiment(S.z.WebNextPaywallTopSection)) ? void 0 : e.group) || 'default';
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            t ? (0, h.jsx)(lW, {}) : lZ[i] || lZ.default,
                            (0, h.jsx)(i5, { className: aW().section }),
                            (0, h.jsx)(i8, { className: aW().section }),
                            (0, h.jsx)(lG, { className: aW().section }),
                            (0, h.jsx)(le, { className: aW().section }),
                            (0, h.jsx)(it, { className: aW().section_faq, variant: az.RU }),
                            (0, h.jsx)(ir, { variant: az.RU }),
                        ],
                    });
                },
                lJ = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return (0, h.jsx)('div', { className: lx().root, children: e ? (0, h.jsx)(lX, {}) : (0, h.jsx)(lq, {}) });
                }),
                l0 = { [az.RU]: (0, h.jsx)(lJ, {}), [az.BY]: (0, h.jsx)(lr, {}), [az.OTHER]: (0, h.jsx)(lp, {}) },
                l1 = [tY.R.BLOCK_1, tY.R.BLOCK_2, tY.R.BOTTOM_BUTTON],
                l2 = (0, y.PA)((e) => {
                    let { useOverlayScroll: t = !0 } = e,
                        { user: a } = (0, N.g)(),
                        i = (0, aU.j)(),
                        l = (0, tj.L)(() =>
                            (0, h.jsx)('div', {
                                'data-buy-subscription-block-portal': !0,
                                className: aW().root,
                                'data-test-id': $.e8.paywall.PAYWALL,
                                children: l0[((e) => (e && aK[e]) || az.OTHER)(a.account.data.geoRegionIso)],
                            }),
                        ),
                        n = (0, b.useMemo)(
                            () => (i.isContextDefined ? l : (0, h.jsx)(tH.r, { page: tW.l.MUSIC_PAYWALL_SCREEN, places: l1, children: l })),
                            [i.isContextDefined, l],
                        );
                    return t ? (0, h.jsx)(aF.C, { className: (0, ew.$)(aW().overlayScroll, { [aW().overlayScroll_desktop]: aD.NN }), children: n }) : n;
                });
            var l4 = a(86889),
                l8 = a.n(l4);
            let l6 = (0, y.PA)(() => {
                let { paywall: e } = (0, N.g)(),
                    { formatMessage: t } = (0, q.A)(),
                    a = (0, aB.e)(),
                    i = e.freemiumCollectionBarrier;
                return (
                    (0, b.useEffect)(() => {
                        e.modal.isOpened && aD.NN && (null == a || a.pause());
                    }, [e.modal.isOpened, a]),
                    (0, h.jsxs)(T.a, {
                        open: e.modal.isOpened,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        onClose: i ? void 0 : e.closeModal,
                        onOpenChange: e.onOpenChange,
                        closeOnOutsidePress: !1,
                        escapeKey: !i,
                        className: l8().root,
                        contentClassName: l8().content,
                        overlayColor: 'full',
                        'data-test-id': $.e8.paywallModal.PAYWALL_MODAL,
                        children: [
                            !i &&
                                (0, h.jsx)('header', {
                                    className: l8().header,
                                    children: (0, h.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, h.jsx)(G.I, { variant: 'close', size: 'xxs' }),
                                        className: l8().closeButton,
                                        onClick: e.closeModal,
                                        'aria-label': t({ id: 'interface-actions.close' }),
                                        'data-test-id': $.e8.paywallModal.PAYWALL_MODAL_CLOSE_BUTTON,
                                    }),
                                }),
                            (0, h.jsx)(l2, {}),
                        ],
                    })
                );
            });
            var l3 = a(32353),
                l5 = a(85838),
                l9 = a(92644),
                l7 = a(12670),
                ne = a(59304),
                nt = a(7628),
                na = a(71660),
                ni = a.n(na);
            let nl = () =>
                (0, h.jsx)(ne.$, {
                    message: (0, h.jsx)(ed.HL, {
                        className: ni().text,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, h.jsx)(eJ.A, { id: 'onboarding.authorize-to-listen-full', values: { br: '\n', nbsp: ' ' } }),
                    }),
                    withDefaultCloseButton: !1,
                    closeButton: (0, h.jsx)(nt.H, {
                        className: ni().loginButton,
                        variant: 'text',
                        size: 'xxs',
                        withRipple: !1,
                        buttonText: (0, h.jsx)(eJ.A, { id: 'authorization.enter-button' }),
                    }),
                });
            var nn = a(39270),
                ns = a.n(nn);
            let nr = (0, y.PA)((e) => {
                    let { closeToast: t } = e,
                        {
                            paywall: { modal: a },
                        } = (0, N.g)(),
                        i = (0, b.useCallback)(() => {
                            (a.open(), null == t || t());
                        }, [a, t]);
                    return (0, h.jsx)(ne.$, {
                        message: (0, h.jsx)(ed.HL, {
                            className: ns().text,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, h.jsx)(eJ.A, { id: 'onboarding.try-plus-to-listen-full', values: { br: '\n', nbsp: ' ' } }),
                        }),
                        cover: (0, h.jsx)(G.I, { className: ns().icon, variant: 'plusColor' }),
                        coverRadius: 'round',
                        coverClassName: (0, ew.$)(ns().cover, ns().important),
                        withDefaultCloseButton: !1,
                        closeButton: (0, h.jsx)(Q.$, {
                            className: ns().tryButton,
                            variant: 'text',
                            color: 'primary',
                            size: 'xxs',
                            onClick: i,
                            withRipple: !1,
                            children: (0, h.jsx)(eJ.A, { id: 'payment.try-button' }),
                        }),
                    });
                }),
                no = () => {
                    let { freePlayerAccess: e } = (0, N.g)(),
                        { notify: t } = (0, eo.l)();
                    (0, b.useEffect)(() => {
                        switch (e.shownRestrictionModal) {
                            case l7.h.FullscreenSubscription:
                                t((0, h.jsx)(nr, {}), { containerId: er.u.FULLSCREEN_INFO });
                                break;
                            case l7.h.FullscreenUnauthorized:
                                t((0, h.jsx)(nl, {}), { containerId: er.u.FULLSCREEN_INFO });
                                break;
                            default:
                                return;
                        }
                        e.hideRestrictionModal();
                    }, [e, e.shownRestrictionModal, t]);
                };
            var nc = a(53281),
                nd = a.n(nc),
                nu = a(52456),
                n_ = a(5866),
                nm = a(16208),
                np = a(48215),
                nv = a(15232),
                nx = a(85585);
            let nh = (0, b.createContext)({ difference: 0, isSingleTrackSwitch: !1 }),
                ny = () => (0, b.useContext)(nh);
            var nC = a(80380),
                ng = a.n(nC),
                nb = a(47618);
            let nA = (0, y.PA)((e) => {
                let { children: t } = e,
                    {
                        fullscreenPlayer: {
                            playQueue: { itemsKeys: a, isDragAndDropEnabled: i },
                        },
                    } = (0, N.g)();
                return i ? (0, h.jsx)(nb.gB, { items: a, strategy: nb._G, children: t }) : t;
            });
            var nf = a(79546),
                nT = a(26401);
            let nj = (e) => {
                let t = (0, aB.e)(),
                    {
                        fullscreenPlayer: {
                            playQueue: { trackMap: a },
                        },
                    } = (0, N.g)(),
                    i = null == t ? void 0 : t.state.queueState.entityList.value,
                    l = null == i ? void 0 : i[e];
                if (!l) return null;
                let {
                        context: { data: n },
                    } = l,
                    s = a.get(String(l.entity.data.meta.id));
                return s ? { track: s, playContextParams: { contextData: n, queueParams: { index: e } } } : null;
            };
            var nN = a(80336),
                nS = a.n(nN);
            let nI = (0, y.PA)(
                    (0, b.forwardRef)((e, t) => {
                        let { children: a, 'data-index': i, className: l, ...n } = e,
                            { isDragging: s, listeners: r, setNodeRef: o, transform: c, transition: d, attributes: u } = (0, nb.gl)({ id: String(i) }),
                            _ = (0, b.useCallback)(
                                (e) => {
                                    (o(e), 'function' == typeof t && t(e));
                                },
                                [t, o],
                            ),
                            m = { transition: d, '--translate-y': c ? ''.concat(Math.round(c.y), 'px') : void 0 };
                        return (0, h.jsx)('div', {
                            ref: _,
                            'data-index': i,
                            style: m,
                            ...n,
                            className: (0, ew.$)(nS().root, l),
                            children: (0, h.jsx)('div', { ref: t, className: (0, ew.$)(nS().inner, { [nS().dragging]: s }), ...r, ...u, role: 'listitem', children: a }),
                        });
                    }),
                ),
                nk = (e) => {
                    let { index: t, isDragAndDropEnabled: a, blockRef: i, className: l, isRemoveAvailable: n, hideControls: s } = e,
                        r = (0, aB.e)(),
                        o = a && !s,
                        c = (0, b.useMemo)(() => {
                            let e = null == r ? void 0 : r.state.queueState.order.value.indexOf(t);
                            return 'number' == typeof e ? [e] : [];
                        }, [t, null == r ? void 0 : r.state.queueState.order.value]),
                        d = nj(t),
                        u = null == d ? void 0 : d.track,
                        _ = null == d ? void 0 : d.playContextParams,
                        m = (0, nT.i)(null != u ? u : null, nf.N.HIDE, c),
                        p = (0, f.c)(() => {
                            (m(), (null == i ? void 0 : i.current) && i.current.focus());
                        }),
                        v = (0, tj.L)(() =>
                            u && _
                                ? (0, h.jsx)(ez.K, {
                                      track: u,
                                      playContextParams: _,
                                      className: l,
                                      withDNDBlock: o,
                                      handleRemove: n ? p : void 0,
                                      withSecondaryColor: !0,
                                      hideControls: s,
                                  })
                                : null,
                        );
                    return v ? (o ? (0, h.jsx)(nI, { 'data-index': t, children: v }) : v) : null;
                };
            var nL = a(71716),
                nE = a.n(nL),
                nM = a(52073),
                nP = a(55211),
                nO = a(188),
                nw = a(27294),
                nR = a(21284),
                nD = a(93512),
                nB = a(67174),
                nF = a(20584),
                nU = a(6858),
                nV = a(49602),
                nz = a(99344);
            let nK = (e) => !!(e && 'object' == typeof e && ('playlistUuid' in e || 'playlistTitle' in e));
            var nH = (function (e) {
                return ((e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Album = 'album'), (e.Track = 'track'), e);
            })({});
            let nW = () => {
                    let { formatMessage: e } = (0, q.A)(),
                        {
                            experiments: t,
                            sonataState: { entityMeta: a },
                            vibe: i,
                        } = (0, N.g)(),
                        l = (0, aB.e)(),
                        n = null == l ? void 0 : l.state.currentContext.value,
                        s = null == n ? void 0 : n.data.meta,
                        r = null == l ? void 0 : l.state.queueState.currentEntity.value,
                        o = null == a ? void 0 : a.mainArtist,
                        c = (null == n ? void 0 : n.data.type) === eU.K.Artist ? n.data.meta.artist : void 0,
                        d = (null == c ? void 0 : c.name) ? c : o,
                        u = null == a ? void 0 : a.mainAlbum,
                        _ = null == a ? void 0 : a.isPodcast,
                        m = (function () {
                            let e = (0, aB.e)(),
                                t = null == e ? void 0 : e.state.queueState.currentEntity.value;
                            return (0, b.useMemo)(
                                () =>
                                    (function (e) {
                                        if (!e) return { title: void 0, type: void 0, sourceContextType: void 0 };
                                        let t = e.data.sourceContextType;
                                        if ((0, nU.F)(e)) {
                                            let a = e.data.meta.title;
                                            if (a) return { title: a, type: eU.K.Album, sourceContextType: t };
                                        }
                                        if ((0, nz.K)(e)) {
                                            let a = e.data.meta.title;
                                            if (a) return { title: a, type: eU.K.Playlist, sourceContextType: t };
                                        }
                                        if ((0, nV.T)(e)) {
                                            var a;
                                            let i = null == (a = e.data.meta.artist) ? void 0 : a.name;
                                            if (i) return { title: i, type: eU.K.Artist, sourceContextType: t };
                                        }
                                        return { title: void 0, type: void 0, sourceContextType: t };
                                    })(null == t ? void 0 : t.sourceContext),
                                [null == t ? void 0 : t.sourceContext],
                            );
                        })(),
                        p = (0, tj.L)(() => {
                            if (m.type)
                                return (function (e) {
                                    let { sourceType: t, sourceContext: a } = e;
                                    if (a)
                                        switch (t) {
                                            case eU.K.Album: {
                                                if (!(0, nU.F)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, nB.u)('/album/:albumId', { params: { albumId: String(e) } });
                                                return t;
                                            }
                                            case eU.K.Artist: {
                                                if (!(0, nV.T)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, nB.u)('/artist/:artistId', { params: { artistId: String(e) } });
                                                return t;
                                            }
                                            case eU.K.Playlist: {
                                                if (!(0, nz.K)(a)) return;
                                                let e = a.data.meta.playlistUuid;
                                                if (!e) return;
                                                let { href: t } = (0, nB.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                                return t;
                                            }
                                            default:
                                                return;
                                        }
                                })({ sourceType: m.type, sourceContext: null == r ? void 0 : r.sourceContext });
                            switch (null == n ? void 0 : n.data.type) {
                                case eU.K.Vibe:
                                    var e;
                                    return ((e, t) => {
                                        var a, i;
                                        let l = (0, nO.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null,
                                            n = (0, nO.i)(t) ? (null == t ? void 0 : t.data.parentContextId) : null;
                                        if (l || n)
                                            switch (e) {
                                                case nH.Artist: {
                                                    let { href: e } = (0, nB.u)('/artist/:artistId', {
                                                        params: { artistId: (null != (a = null == l ? void 0 : l.data.meta.id) ? a : n) || '' },
                                                    });
                                                    return e;
                                                }
                                                case nH.Playlist: {
                                                    let e = null == l ? void 0 : l.data.meta,
                                                        t = nK(e) ? e.playlistUuid : n;
                                                    if (!t) return;
                                                    let { href: a } = (0, nB.u)('/playlists/:playlistUuid', { params: { playlistUuid: String(t) } });
                                                    return a;
                                                }
                                                case nH.Album: {
                                                    if (!(null == l ? void 0 : l.data.meta.id) && !n) return;
                                                    let { href: e } = (0, nB.u)('/album/:albumId', {
                                                        params: { albumId: (null != (i = null == l ? void 0 : l.data.meta.id) ? i : n) || '' },
                                                    });
                                                    return e;
                                                }
                                                case nH.Track: {
                                                    if (!n) return;
                                                    if (String(n).includes(':')) {
                                                        let [e, t] = String(n).split(':'),
                                                            { href: a } = (0, nB.u)('/album/:albumId/track/:trackId', { params: { albumId: e || '', trackId: t || '' } });
                                                        return a;
                                                    }
                                                    let { href: e } = (0, nB.u)('/track/:trackId', { params: { trackId: n } });
                                                    return e;
                                                }
                                                default:
                                                    return;
                                            }
                                    })(null == i || null == (e = i.meta) ? void 0 : e.stationType, n);
                                case eU.K.Artist: {
                                    if (!(null == d ? void 0 : d.id)) return;
                                    let { href: e } = (0, nB.u)('/artist/:artistId', { params: { artistId: String(d.id) } });
                                    return e;
                                }
                                case eU.K.Playlist: {
                                    if (!nK(s)) return;
                                    let { href: e } = (0, nB.u)('/playlists/:playlistUuid', { params: { playlistUuid: null == s ? void 0 : s.playlistUuid } });
                                    return e;
                                }
                                case eU.K.Album: {
                                    if (!(null == u ? void 0 : u.id)) return;
                                    let { href: e } = (0, nB.u)('/album/:albumId', { params: { albumId: u.id } });
                                    return e;
                                }
                                default:
                                    return;
                            }
                        }),
                        v = (0, tj.L)(() => {
                            if (m.title) return m.title;
                            switch (null == n ? void 0 : n.data.type) {
                                case eU.K.Vibe:
                                    var e, t;
                                    return ((e, t) => (t && e ? t : (0, h.jsx)(eJ.A, { id: 'entity-names.my-vibe' })))(
                                        null == i || null == (e = i.meta) ? void 0 : e.stationType,
                                        null == i || null == (t = i.meta) ? void 0 : t.title,
                                    );
                                case eU.K.Artist:
                                    return null == d ? void 0 : d.name;
                                case eU.K.Playlist:
                                    if (!nK(s)) return;
                                    return null == s ? void 0 : s.title;
                                case eU.K.Album:
                                    return null == u ? void 0 : u.title;
                                case eU.K.Various:
                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing' });
                                default:
                                    return (0, h.jsx)(eJ.A, { id: 'entity-names.my-vibe' });
                            }
                        }),
                        x = (0, tj.L)(() => {
                            if (m.type) {
                                let e = (function (e) {
                                    let { sourceType: t, sourceContext: a, sourceContextType: i } = e,
                                        l = (function (e) {
                                            switch (e) {
                                                case nF.h.SEARCH:
                                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-search' });
                                                case nF.h.DOWNLOADED_TRACKS:
                                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-downloads' });
                                                case nF.h.MUSIC_HISTORY:
                                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-history' });
                                                case nF.h.MUSIC_HISTORY_SEARCH:
                                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-history-search' });
                                                case nF.h.ARTIST_MY_COLLECTION:
                                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-artist-collection' });
                                                case nF.h.ARTIST_FAMILIAR_FROM_WAVE:
                                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-artist-wave' });
                                                default:
                                                    return;
                                            }
                                        })(i);
                                    if (l) return l;
                                    if (i === nF.h.BASED_ON_ENTITY_BY_DEFAULT || void 0 === i)
                                        switch (t) {
                                            case eU.K.Album:
                                                if ((0, nU.F)(a) && a.data.meta.type === eu._.PODCAST)
                                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-podcast' });
                                                return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-album' });
                                            case eU.K.Artist:
                                                return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                            case eU.K.Playlist:
                                                return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-playlist' });
                                        }
                                })({ sourceType: m.type, sourceContext: null == r ? void 0 : r.sourceContext, sourceContextType: m.sourceContextType });
                                if (e) return e;
                            }
                            switch (null == n ? void 0 : n.data.type) {
                                case eU.K.Vibe:
                                    var a, l;
                                    if (!t.checkExperiment(S.z.WebNextVibeDescription, 'on') || void 0 === (null == i || null == (a = i.meta) ? void 0 : a.description))
                                        return ((e, t) => {
                                            let a = (0, nO.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null;
                                            switch (e) {
                                                case nH.Artist:
                                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-my-wave-by-artist' });
                                                case nH.Playlist:
                                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-my-wave-by-playlist' });
                                                case nH.Album:
                                                    if ((null == a ? void 0 : a.data.type) === eu._.PODCAST)
                                                        return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-my-wave-by-podcast' });
                                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-my-wave-by-album' });
                                                case nH.Track:
                                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-my-wave-by-track' });
                                                default:
                                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing' });
                                            }
                                        })(null == i || null == (l = i.meta) ? void 0 : l.stationType, n);
                                    if (null == i ? void 0 : i.isMyVibe) return e({ id: 'play-queue.now-playing' });
                                    return e({ id: 'play-queue.now-playing-by-entity' }, { entity: null == i ? void 0 : i.meta.getDescription() });
                                case eU.K.Artist:
                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                case eU.K.Playlist:
                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-playlist' });
                                case eU.K.Album:
                                    if (_) return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-podcast' });
                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.now-playing-from-album' });
                                default:
                                    return;
                            }
                        }),
                        y = (0, tj.L)(() => ((0, nw.p)(n) ? (0, h.jsx)(eJ.A, { id: 'entity-names.my-vibe' }) : v));
                    return {
                        url: p,
                        title: v,
                        subTitle: x,
                        vibeBlockTitle: y,
                        vibeBlockSubTitle: (0, tj.L)(() => {
                            switch (null == n ? void 0 : n.data.type) {
                                case eU.K.Artist:
                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.my-wave-by-artist' });
                                case eU.K.Playlist:
                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.my-wave-by-playlist' });
                                case eU.K.Album:
                                    return (0, h.jsx)(eJ.A, { id: 'play-queue.my-wave-by-album' });
                                default:
                                    return;
                            }
                        }),
                        vibeBlockAgent: (0, tj.L)(() => {
                            var e, t, a;
                            switch (null == n ? void 0 : n.data.type) {
                                case eU.K.Album:
                                    return (0, nD.K)({ animationUri: '', cover: { uri: n.data.meta.coverUri }, entity: { type: nR.h.ALBUM } });
                                case eU.K.Artist:
                                    return (0, nD.K)({
                                        animationUri: '',
                                        cover: { uri: null == (t = n.data.meta.artist) || null == (e = t.cover) ? void 0 : e.uri },
                                        entity: { type: nR.h.ARTIST },
                                    });
                                case eU.K.Playlist:
                                    return (0, nD.K)({
                                        animationUri: '',
                                        cover: { uri: null == (a = n.data.meta.cover) ? void 0 : a.uri },
                                        entity: { type: nR.h.PLAYLIST },
                                    });
                                case eU.K.Various:
                                    return (0, nD.K)({
                                        animationUri: '',
                                        cover: { uri: 'avatars.mds.yandex.net/get-music-misc/2419084/img.686688add03ee35062c02822/%%' },
                                        entity: { type: nR.h.TRACK },
                                    });
                            }
                        }),
                    };
                },
                nY = { src: '/_next/static/media/vibeCover.c55d574d.png' };
            var nq = a(82787),
                n$ = a.n(nq);
            let nQ = (0, y.PA)(() => {
                    let { experiments: e } = (0, N.g)(),
                        t = (0, aB.e)(),
                        { vibeBlockTitle: a, vibeBlockSubTitle: i, vibeBlockAgent: l } = nW(),
                        n = (0, b.useCallback)(
                            (e) => {
                                ((0, nM.P)(e, n$().ripple), null == t || t.moveForward());
                            },
                            [t],
                        ),
                        s = (0, tj.L)(() =>
                            e.checkExperiment(S.z.WebNextWaveAgentExperiment, 'on') && l
                                ? (0, h.jsx)(nP.n, { agent: l, shouldShowControl: !1 })
                                : (0, h.jsx)(tz._V, {
                                      src: nY.src,
                                      className: n$().vibeCover,
                                      fit: 'cover',
                                      'aria-hidden': !0,
                                      'data-test-id': $.e8.player.PLAY_QUEUE_VIBE_BLOCK_IMAGE,
                                  }),
                        );
                    return (0, h.jsxs)('div', {
                        className: n$().root,
                        onClick: n,
                        'data-test-id': $.e8.player.PLAY_QUEUE_VIBE_BLOCK,
                        children: [
                            s,
                            (0, h.jsxs)('div', {
                                children: [
                                    (0, h.jsx)(ed.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: n$().title,
                                        'data-test-id': $.e8.player.PLAY_QUEUE_VIBE_BLOCK_TITLE,
                                        children: a,
                                    }),
                                    (0, h.jsx)(ed.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: n$().vibeTitle,
                                        'data-test-id': $.e8.player.PLAY_QUEUE_VIBE_BLOCK_VIBE_TITLE,
                                        children: i,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                nG = (0, y.PA)(() => {
                    var e;
                    let {
                            fullscreenPlayer: {
                                playQueue: { afterTracksIds: t, isVibeBlockShowed: a, isDragAndDropEnabled: i, currentIndex: l },
                            },
                            sonataState: { isVibeContext: n },
                        } = (0, N.g)(),
                        s = (0, aB.e)(),
                        r = null == s ? void 0 : s.state.queueState.order.value,
                        o = null != (e = null == s ? void 0 : s.state.queueState.livePlayableIndex.value) ? e : 0,
                        c = null == s ? void 0 : s.state.queueState.entityList.value,
                        { isMovingForward: d, isMovingBackward: u, difference: _, isSingleTrackSwitch: m } = ny(),
                        p = l - _,
                        v = (0, b.useId)(),
                        x = (0, b.useRef)(null);
                    return a || 0 !== t.length
                        ? (0, h.jsxs)('div', {
                              className: nE().root,
                              'data-test-id': $.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK,
                              children: [
                                  (0, h.jsx)(ed.HL, {
                                      variant: 'div',
                                      size: 'm',
                                      className: (0, ew.$)(nE().title, { [nE().title_withDnD]: i }),
                                      'data-test-id': $.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK_TITLE,
                                      children: (0, h.jsx)(eJ.A, { id: 'play-queue.next-in' }),
                                  }),
                                  (0, h.jsx)(nA, {
                                      children: (0, h.jsxs)('div', {
                                          tabIndex: 0,
                                          ref: x,
                                          className: (0, ew.$)(nE().animatedContent, {
                                              [nE().animatedContent_moveToTop]: d,
                                              [nE().animatedContent_moveFromTop]: u && !m,
                                              [nE().animatedContent_moveFromTopSingleTrack]: u && m,
                                          }),
                                          children: [
                                              t.map((e) => {
                                                  let t = ((e) => {
                                                      var t, a;
                                                      let { index: i, order: l, livePlayableIndex: n, isVibeContext: s, entityList: r } = e,
                                                          o = null != (a = null == l ? void 0 : l.indexOf(i)) ? a : -1,
                                                          c = !!(null == r || null == (t = r[i]) ? void 0 : t.sourceContext);
                                                      return s && o > n && !c;
                                                  })({ index: e, order: r, livePlayableIndex: o, isVibeContext: n, entityList: c });
                                                  return (null == r ? void 0 : r[p]) === e
                                                      ? (0, h.jsx)(
                                                            'div',
                                                            {
                                                                className: nE().prevTrack,
                                                                children: (0, h.jsx)(
                                                                    nk,
                                                                    { index: e, isDragAndDropEnabled: i, isRemoveAvailable: !0, hideControls: t },
                                                                    e,
                                                                ),
                                                            },
                                                            v,
                                                        )
                                                      : (0, h.jsx)(nk, { index: e, isDragAndDropEnabled: i, blockRef: x, isRemoveAvailable: !0, hideControls: t }, e);
                                              }),
                                              a && (0, h.jsx)(nQ, {}),
                                          ],
                                      }),
                                  }),
                              ],
                          })
                        : (0, h.jsx)('div', { className: nE().root, 'data-test-id': $.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK });
                });
            var nZ = a(40258),
                nX = a.n(nZ);
            let nJ = (0, y.PA)((e) => {
                    let { forwardRef: t, scrollToNowPlayingBlock: a } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { beforeTracksIds: i, isDragAndDropEnabled: l, currentIndex: n },
                            },
                        } = (0, N.g)(),
                        s = (0, aB.e)(),
                        r = null == s ? void 0 : s.state.queueState.order.value;
                    (0, b.useEffect)(() => {
                        a();
                        let e = new ResizeObserver(() => a());
                        return (
                            'function' != typeof t && (null == t ? void 0 : t.current) && e.observe(t.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, a]);
                    let { isMovingForward: o, isMovingBackward: c, difference: d, isSingleTrackSwitch: u } = ny(),
                        _ = n - d,
                        m = (0, b.useId)();
                    return (0, h.jsx)('div', {
                        className: nX().root,
                        ref: t,
                        children: (0, h.jsx)(nA, {
                            children: (0, h.jsx)('div', {
                                className: (0, ew.$)(nX().animatedContent, {
                                    [nX().animatedContent_moveToBottom]: c,
                                    [nX().animatedContent_moveFromBottom]: o && !u,
                                    [nX().animatedContent_moveFromBottomSingleTrack]: o && u,
                                }),
                                'data-test-id': $.e8.player.PLAY_QUEUE_BEFORE_PLAYING_BLOCK,
                                children:
                                    null == i
                                        ? void 0
                                        : i.map((e) =>
                                              (null == r ? void 0 : r[_]) === e
                                                  ? (0, h.jsx)(
                                                        'div',
                                                        {
                                                            className: nX().prevTrack,
                                                            children: (0, h.jsx)(nk, { index: e, isDragAndDropEnabled: l, isRemoveAvailable: !0 }, e),
                                                        },
                                                        m,
                                                    )
                                                  : (0, h.jsx)(nk, { index: e, isDragAndDropEnabled: l, isRemoveAvailable: !0 }, e),
                                          ),
                            }),
                        }),
                    });
                }),
                n0 = (0, b.forwardRef)((e, t) => (0, h.jsx)(nJ, { forwardRef: t, ...e }));
            var n1 = a(45144),
                n2 = a(23577),
                n4 = a(408),
                n8 = a(11888),
                n6 = a.n(n8);
            let n3 = (e) => {
                    let { index: t } = e,
                        a = nj(t),
                        i = null == a ? void 0 : a.track,
                        l = null == a ? void 0 : a.playContextParams;
                    return i && l
                        ? (0, h.jsx)('div', {
                              className: n6().root,
                              children: (0, h.jsx)(ez.K, {
                                  track: i,
                                  playContextParams: l,
                                  draggingClassName: n6().dots,
                                  className: n6().noHoverItem,
                                  withDNDBlock: !0,
                                  isDragging: !0,
                                  withSecondaryColor: !0,
                              }),
                          })
                        : null;
                },
                n5 = (0, y.PA)((e) => {
                    let { children: t } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { isDragAndDropEnabled: a },
                            },
                        } = (0, N.g)(),
                        { activeId: i, handleDragStart: l, handleDragCancel: n, sensors: s } = (0, n4.Y)(),
                        r = (0, b.useCallback)((e) => {
                            let { active: t, over: a } = e;
                            if (!t.id || !(null == a ? void 0 : a.id)) return;
                        }, []),
                        o = (0, b.useMemo)(() => {
                            if (i)
                                return (0, iE.createPortal)(
                                    (0, h.jsx)(n1.Hd, { dropAnimation: { duration: 0 }, children: (0, h.jsx)(n3, { index: Number(i) }) }),
                                    window.document.body,
                                );
                        }, [i]);
                    return a
                        ? (0, h.jsxs)(n1.Mp, {
                              sensors: s,
                              collisionDetection: n1.fp,
                              onDragStart: l,
                              onDragEnd: r,
                              onDragCancel: n,
                              modifiers: [n2.FN],
                              children: [t, o],
                          })
                        : t;
                });
            var n9 = a(41925),
                n7 = a(62214),
                se = a.n(n7);
            let st = (0, y.PA)(() => {
                let {
                        fullscreenPlayer: {
                            modal: e,
                            playQueue: { isDragAndDropEnabled: t },
                        },
                        sonataState: { isContextRepeatMode: a, isOneRepeatMode: i, shuffle: l },
                    } = (0, N.g)(),
                    { formatMessage: n } = (0, q.A)(),
                    { url: s, title: r, subTitle: o } = nW(),
                    c = (0, n9.C)({ onClick: e.close }),
                    d = (0, b.useMemo)(() => {
                        let e = (0, h.jsx)(ed.DZ, {
                            variant: 'h2',
                            size: 'm',
                            weight: 'bold',
                            lineClamp: 1,
                            className: (0, ew.$)(se().heading, { [se().heading_withOffset]: !o }),
                            'data-test-id': s ? void 0 : $.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE,
                            children: r,
                        });
                        return s
                            ? (0, h.jsx)(af.N, {
                                  className: se().title,
                                  containerClassName: se().linkContainer,
                                  textClassName: se().linkText,
                                  icon: (0, h.jsx)(G.I, { className: se().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                  iconPosition: 'right',
                                  href: s,
                                  onClick: c,
                                  'data-test-id': $.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE,
                                  children: e,
                              })
                            : e;
                    }, [c, o, r, s]),
                    u = (0, tj.L)(() =>
                        a ? n({ id: 'play-queue.repeat-context' }) : i ? n({ id: 'play-queue.repeat-one' }) : l ? n({ id: 'play-queue.shuffle' }) : null,
                    );
                return (0, h.jsxs)('div', {
                    className: (0, ew.$)(se().root, { [se().root_withDnD]: t }),
                    children: [
                        (0, h.jsx)(ed.HL, {
                            variant: 'div',
                            size: 'm',
                            className: se().subTitle,
                            'data-test-id': $.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE,
                            children: o,
                        }),
                        d,
                        (0, h.jsx)(ed.HL, {
                            variant: 'div',
                            size: 'm',
                            className: se().modeTitle,
                            'data-test-id': $.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_MODE_TITLE,
                            children: u,
                        }),
                    ],
                });
            });
            var sa = a(76252),
                si = a.n(sa);
            let sl = (0, y.PA)(() => {
                    var e, t;
                    let { from: a } = (0, eK.f)(),
                        {
                            fullscreenPlayer: {
                                playQueue: { currentIndex: i, isDragAndDropEnabled: l },
                            },
                            sonataState: { entityMeta: n },
                        } = (0, N.g)(),
                        { isMovingForward: s, isMovingBackward: r } = ny(),
                        o = (0, aB.e)(),
                        c = null == o || null == (t = o.state.currentContext) || null == (e = t.value) ? void 0 : e.data;
                    if (!c || !n) return null;
                    let d = { contextData: { ...c, from: a }, queueParams: { index: i, entityId: n.id } };
                    return (0, h.jsxs)('div', {
                        className: si().root,
                        'data-test-id': $.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK,
                        children: [
                            (0, h.jsx)(st, {}),
                            (0, h.jsx)(ez.K, {
                                track: n,
                                playContextParams: d,
                                className: (0, ew.$)(si().track, si().important, {
                                    [si().track_withDnD]: l,
                                    [si().track_moveFromTop]: r,
                                    [si().track_moveFromBottom]: s,
                                }),
                                withSecondaryColor: !0,
                            }),
                        ],
                    });
                }),
                sn = () => {
                    let { style: e, contextValue: t } = (() => {
                            var e;
                            let {
                                    fullscreenPlayer: {
                                        playQueue: { updateTracks: t, hiddenTrackIds: a },
                                    },
                                } = (0, N.g)(),
                                i = (0, aB.e)(),
                                [l, n] = (0, b.useState)(),
                                s = (0, b.useRef)(void 0),
                                r = (0, b.useRef)(void 0),
                                o = (0, b.useRef)(void 0),
                                { state: c, handleDebouncedToggle: d } = (0, nu.F)({ delay: 600, throttleTimeout: 600 }),
                                { state: u, handleDebouncedToggle: _ } = (0, nu.F)({ delay: 600, throttleTimeout: 600 }),
                                m = (0, f.c)(() => {
                                    var e;
                                    let a = null == i ? void 0 : i.state.queueState.entityList.value,
                                        l = null == i ? void 0 : i.state.queueState.index.value,
                                        n = null == i ? void 0 : i.state.queueState.order.value,
                                        s = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type;
                                    a && 'number' == typeof l && n && s && t(a, l, n, s);
                                }),
                                p = (0, f.c)(() => {
                                    var e;
                                    let t = null == i ? void 0 : i.state.queueState.index.value,
                                        l = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type,
                                        c = s.current;
                                    if ('number' == typeof t && 'number' == typeof c) {
                                        let e = a.reduce((e, t) => (t < c ? e + 1 : e - 1), 0),
                                            i = t - c;
                                        o.current = i;
                                        let s = l !== r.current,
                                            u = 1 === Math.abs(i) ? i : i + e;
                                        i > 0 || s ? (d(), n(s ? 1 : u)) : i < 0 && (_(), n(u));
                                    }
                                    ((s.current = t), (r.current = l));
                                });
                            ((0, b.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.state.queueState.index.onChange(() => {
                                              (m(), p());
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [p, m, null == i ? void 0 : i.state.queueState.index]),
                                (0, b.useEffect)(() => {
                                    let e = null == i ? void 0 : i.state.queueState.shuffle.onChange(m),
                                        t = null == i ? void 0 : i.state.queueState.entityList.onChange(m),
                                        a = null == i ? void 0 : i.state.queueState.order.onChange(m);
                                    return () => {
                                        (null == e || e(), null == t || t(), null == a || a());
                                    };
                                }, [
                                    m,
                                    null == i ? void 0 : i.state.queueState.entityList,
                                    null == i ? void 0 : i.state.queueState.index,
                                    null == i ? void 0 : i.state.queueState.order,
                                    null == i ? void 0 : i.state.queueState.shuffle,
                                ]));
                            let v = (0, b.useMemo)(() => {
                                    let e = 56 * (l || 1);
                                    return {
                                        '--play-queue-transition-duration-s': ''.concat(0.6, 's'),
                                        '--now-playing-title-height-px': ''.concat(90, 'px'),
                                        '--next-in-title-height-px': ''.concat(52, 'px'),
                                        '--track-height-px': ''.concat(56, 'px'),
                                        '--move-to-top-start-position': ''.concat(e, 'px'),
                                        '--move-from-top-start-position': ''.concat(e - 142, 'px'),
                                        '--move-to-bottom-start-position': ''.concat(e, 'px'),
                                        '--move-from-bottom-start-position': ''.concat(e + 52 + 90, 'px'),
                                        '--move-from-top-now-playing-block-start-position': ''.concat(e - 90, 'px'),
                                        '--move-from-bottom-now-playing-block-start-position': ''.concat(e + 52, 'px'),
                                    };
                                }, [l]),
                                x = 1 === Math.abs(null != l ? l : 0);
                            return {
                                style: v,
                                contextValue: { isMovingForward: c, isMovingBackward: u, difference: null != (e = o.current) ? e : 0, isSingleTrackSwitch: x },
                            };
                        })(),
                        a = (0, b.useRef)(null),
                        i = (0, b.useRef)(null),
                        { state: l, handleDebouncedToggle: n, reset: s } = (0, nu.F)({ delay: 1e4, throttleTimeout: 2e3 }),
                        r = (0, b.useCallback)(function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'instant';
                            if (i.current && a.current) {
                                let t = i.current.clientHeight;
                                a.current.scrollTo({ top: t, behavior: e });
                            }
                        }, []);
                    return (
                        (0, b.useEffect)(() => {
                            l || (r('smooth'), s());
                        }, [l, s, r]),
                        (0, b.useEffect)(() => {
                            let e = a.current;
                            return (
                                null == e || e.addEventListener('scroll', n),
                                () => {
                                    null == e || e.removeEventListener('scroll', n);
                                }
                            );
                        }, [n]),
                        (0, h.jsx)(n5, {
                            children: (0, h.jsx)(nh.Provider, {
                                value: t,
                                children: (0, h.jsx)('div', {
                                    className: ng().root,
                                    style: e,
                                    'data-test-id': $.e8.player.PLAY_QUEUE,
                                    children: (0, h.jsx)('div', {
                                        className: ng().content,
                                        ref: a,
                                        children: (0, h.jsxs)('div', {
                                            className: ng().scrollContent,
                                            children: [(0, h.jsx)(n0, { ref: i, scrollToNowPlayingBlock: r }), (0, h.jsx)(sl, {}), (0, h.jsx)(nG, {})],
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                },
                ss = (0, b.createContext)({});
            var sr = a(5276),
                so = a.n(sr),
                sc = a(22666),
                sd = a.n(sc);
            let su = (0, y.PA)((e) => {
                let { className: t, icon: a } = e,
                    { sonataState: i } = (0, N.g)(),
                    l = (0, b.useCallback)(
                        (e) => {
                            let t = { animationDelay: ''.concat((e + 1) * 0.275, 's'), animationDuration: ''.concat(1.1, 's, ').concat(1.1, 's') };
                            return a
                                ? (0, b.cloneElement)(a, {
                                      className: (0, ew.$)(sd().element, sd().element_withIcon, { [sd().element_paused]: i.isPaused }),
                                      key: e,
                                      style: t,
                                  })
                                : (0, h.jsx)(
                                      'div',
                                      { className: (0, ew.$)(sd().element, sd().element_withDefaultElement, { [sd().element_paused]: i.isPaused }), style: t },
                                      e,
                                  );
                        },
                        [a, i],
                    );
                return (0, h.jsx)('div', { className: (0, ew.$)(sd().root, t), children: Array.from({ length: 4 }, (e, t) => l(t)) });
            });
            var s_ = a(61758),
                sm = a(44361),
                sp = a(39947),
                sv = (function (e) {
                    return ((e.INTRO = 'intro'), (e.PREPARE = 'prepare'), (e.PLAYING = 'playing'), (e.OUTRO = 'outro'), e);
                })({}),
                sx = a(7123),
                sh = a(23474),
                sy = a.n(sh);
            let sC = (0, y.PA)(() => {
                var e, t, a;
                let { formatMessage: i } = (0, q.A)(),
                    {
                        fullscreenPlayer: { syncLyrics: l },
                    } = (0, N.g)();
                return (0, h.jsxs)('footer', {
                    className: sy().root,
                    children: [
                        l.hasWriters &&
                            (0, h.jsx)(ed.HL, {
                                className: sy().writers,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.authors' }, { authors: null == (e = l.writers) ? void 0 : e.join(', ') }),
                            }),
                        (null == (t = l.major) ? void 0 : t.prettyName) &&
                            (0, h.jsx)(ed.HL, {
                                className: sy().major,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.source' }, { source: null == (a = l.major) ? void 0 : a.prettyName }),
                            }),
                    ],
                });
            });
            var sg = a(37076),
                sb = a.n(sg);
            let sA = (e) => {
                // for PulseSync: BEGIN render timed word opacity for synchronized lyrics
                let { className: t, text: a, words: i, progressPosition: l, isActive: n } = e;
                if (!n || !Array.isArray(i) || !i.length)
                    return (0, h.jsx)('span', {
                        className: (0, ew.$)(sb().root, t),
                        children: a,
                    });
                return (0, h.jsx)('span', {
                    className: (0, ew.$)(sb().root, t),
                    children: i.map((e, t) => {
                        const a = typeof e.toSec === 'number' && e.toSec > e.fromSec ? e.toSec : e.fromSec;
                        const i = l < e.fromSec ? 0 : a <= e.fromSec || l >= a ? 1 : (l - e.fromSec) / (a - e.fromSec);
                        return (0, h.jsx)(
                            'span',
                            {
                                className: 'PulseSyncWordLyrics_word',
                                style: {
                                    opacity: 0.35 + 0.65 * Math.max(0, Math.min(1, i)),
                                },
                                children: e.text,
                            },
                            ''.concat(e.fromSec, ':').concat(e.toSec, ':').concat(t),
                        );
                    }),
                });
                // for PulseSync: END render timed word opacity for synchronized lyrics
            };
            var sf = a(68164),
                sT = a.n(sf);
            let sj = (0, y.PA)((e) => {
                var t, a;
                let { state: i, progressPosition: l, shouldShowScrolledLyrics: n, setProgressPosition: s } = e,
                    r = (0, aB.e)(),
                    o = (0, sm.Mn)(),
                    {
                        fullscreenPlayer: { syncLyrics: c },
                    } = (0, N.g)(),
                    d = (0, b.useCallback)(
                        (e) => (t) => {
                            n &&
                                (t.stopPropagation(),
                                s(e + 0.01),
                                null == r ||
                                    r.setProgress(e + 0.01).catch(() => {
                                        s(l);
                                    }));
                        },
                        [l, s, n, r],
                    ),
                    u = c.getActiveLineIndex(l);
                // for PulseSync: BEGIN read and subscribe to the word-sync lyrics preference
                const [pulseSyncWordSyncEnabled, setPulseSyncWordSyncEnabled] = (0, b.useState)(
                    () => window.nativeSettings?.get('modSettings.lrclib.useWordSync') !== !1,
                );
                (0, b.useEffect)(
                    () =>
                        window.musicDesktop?.pulsesync.settings.onChange?.((key, value) => {
                            if (key === 'modSettings.lrclib.useWordSync') setPulseSyncWordSyncEnabled(value !== !1);
                        }),
                    [],
                );
                // for PulseSync: END read and subscribe to the word-sync lyrics preference
                return (
                    ((e) => {
                        let t = (0, b.useRef)(0),
                            {
                                fullscreenPlayer: { syncLyrics: a },
                                sonataState: { contextId: i, contextType: l },
                            } = (0, N.g)();
                        (0, b.useEffect)(() => {
                            !a.hasLyricsViewed &&
                                null !== e &&
                                'visible' === document.visibilityState &&
                                (t.current++,
                                t.current >= 2 &&
                                    a.sendViews({
                                        contextId: i,
                                        contextType: l,
                                    }));
                        }, [e, i, l, a]);
                    })(u),
                    (0, b.useEffect)(() => {
                        if (!n) {
                            // for PulseSync: BEGIN update the synchronized lyrics scroll state
                            o.update();
                            // for PulseSync: END update the synchronized lyrics scroll state
                            if (((i === sv.INTRO || i === sv.PREPARE) && o.slideTo(0), i === sv.OUTRO)) {
                                var e;
                                o.slideTo(Number(null == (e = c.lines) ? void 0 : e.length));
                            }
                            null !== u && o.slideTo(u + 1);
                        }
                    }, [u, n, i, o, null == (t = c.lines) ? void 0 : t.length]),
                    null == (a = c.lines)
                        ? void 0
                        : a.map((e, t) => {
                              var a;
                              return (0, h.jsx)(
                                  sm.qr,
                                  {
                                      onClickCapture: d(e.fromSec),
                                      className: (0, ew.$)(sT().line, {
                                          [sT().line_last]: t === Number(null == (a = c.lines) ? void 0 : a.length) - 1 && !n,
                                          [sT().line_active]: t === u && !n,
                                      }),
                                      'data-test-id': $.e8.player.SYNC_LYRICS_LINE,
                                      // for PulseSync: BEGIN pass word timing and active-line state to lyric rendering
                                      children: (0, h.jsx)(sA, {
                                          text: e.text,
                                          words: e.words,
                                          progressPosition: l,
                                          isActive: pulseSyncWordSyncEnabled && t === u && !n,
                                      }),
                                      // for PulseSync: END pass word timing and active-line state to lyric rendering
                                  },
                                  e.key,
                              );
                          })
                );
            });
            sj.displayName = 'SwiperSlide';
            let sN = { forceToAxis: !0 },
                sS = (0, y.PA)(() => {
                    let {
                            fullscreenPlayer: { syncLyrics: e },
                            settings: { isMobile: t },
                        } = (0, N.g)(),
                        { progressPosition: a, setProgressPosition: i } = (() => {
                            var e;
                            let t = (0, aB.e)(),
                                [a, i] = (0, b.useState)(null != (e = null == t ? void 0 : t.state.playerState.progress.value.position) ? e : 0),
                                l = (0, b.useCallback)((e) => {
                                    i(e);
                                }, []);
                            return (
                                (0, b.useEffect)(() => {
                                    let e =
                                        null == t
                                            ? void 0
                                            : t.state.playerState.progress.onChange(() => {
                                                  i(t.state.playerState.progress.value.position);
                                              });
                                    return () => {
                                        null == e || e();
                                    };
                                }, [t]),
                                { progressPosition: a, setProgressPosition: l }
                            );
                        })(),
                        { state: l } = ((e) => {
                            let { position: t } = e,
                                {
                                    fullscreenPlayer: { syncLyrics: a },
                                } = (0, N.g)();
                            return {
                                state: (0, b.useMemo)(() => {
                                    let { startSec: e, endSec: i } = a;
                                    return e && e >= 3 && e - t > 0 && e - t <= 3 ? sv.PREPARE : e && e > t ? sv.INTRO : i && t > i ? sv.OUTRO : sv.PLAYING;
                                }, [t, a]),
                            };
                        })({ position: a }),
                        { scrollerClassName: n, footerClassName: s, counterClassName: r } = (0, b.useContext)(ss),
                        { state: o, handleDebouncedToggle: c, reset: d } = (0, nu.F)({ delay: 3e3, throttleTimeout: 300 }),
                        { state: u, handleDebouncedToggle: _, reset: m } = (0, nu.F)({ delay: 3e3, throttleTimeout: 300 }),
                        p = (0, b.useCallback)(() => {
                            u || c();
                        }, [c, u]),
                        v = (0, b.useCallback)(() => {
                            (o && d(), _());
                        }, [_, d, o]),
                        x = (0, b.useCallback)(
                            (e) => {
                                switch (e.code) {
                                    case sp.Y.KEY_L:
                                    case sp.Y.KEY_J:
                                    case sp.Y.ARROW_LEFT:
                                    case sp.Y.ARROW_RIGHT:
                                        c();
                                }
                            },
                            [c],
                        ),
                        y = (0, b.useMemo)(() => (l === sv.PREPARE ? Math.ceil(Number(e.startSec) - a) : null), [a, l, e.startSec]),
                        C = (0, b.useMemo)(
                            () => (l === sv.PREPARE ? (0, h.jsx)(sA, { className: sT().counterLine, text: y }) : l === sv.INTRO ? (0, h.jsx)(su, {}) : null),
                            [y, l],
                        );
                    return (
                        ((e) => {
                            let { onSetProgressEventChange: t } = e,
                                a = (0, aB.e)();
                            (0, b.useEffect)(() => {
                                let e =
                                    null == a
                                        ? void 0
                                        : a.state.playerState.event.onChange((e) => {
                                              e === sx.Iu.SET_PROGRESS && t();
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, a]);
                        })({ onSetProgressEventChange: m }),
                        (0, b.useEffect)(
                            () => (
                                window.addEventListener('keydown', x),
                                () => {
                                    window.removeEventListener('keydown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, b.useEffect)(
                            () => (
                                window.addEventListener('mousemove', p),
                                () => {
                                    window.removeEventListener('mousemove', p);
                                }
                            ),
                            [p],
                        ),
                        (0, h.jsxs)(sm.RC, {
                            className: (0, ew.$)(
                                sT().root,
                                { [sT()['root_'.concat(l)]]: !u, [sT().root_withVisibleUpperLyrics]: o, [sT().root_withVisibleScrolledLyrics]: u },
                                n,
                            ),
                            modules: [s_.FJ, s_.U1],
                            slidesPerView: 'auto',
                            spaceBetween: 32,
                            direction: 'vertical',
                            mousewheel: sN,
                            freeMode: !0,
                            onScroll: v,
                            onTouchMove: t ? v : void 0,
                            allowTouchMove: t,
                            children: [
                                (0, h.jsx)(sm.qr, { className: (0, ew.$)(sT().counter, r), children: C }),
                                (0, h.jsx)(sj, { setProgressPosition: i, shouldShowScrolledLyrics: u, state: l, progressPosition: a }),
                                (0, h.jsx)(sm.qr, { className: s, children: (0, h.jsx)(sC, {}) }),
                            ],
                        })
                    );
                }),
                sI = (0, y.PA)((e) => {
                    let { className: t, counterClassName: a, footerClassName: i, scrollerClassName: l, contentClassName: n, loaderClassName: s } = e,
                        r = (0, b.useRef)(null),
                        // for PulseSync: BEGIN access the player runtime for next-track lyrics prefetch
                        sonataRuntimeState = (0, aB.e)(),
                        // for PulseSync: END access the player runtime for next-track lyrics prefetch
                        {
                            sonataState: { entityMeta: o },
                            // for PulseSync: BEGIN access the synchronized lyrics model and automatic hiding action
                            fullscreenPlayer: { syncLyrics: c, autoHideSyncLyrics: d },
                            // for PulseSync: END access the synchronized lyrics model and automatic hiding action
                        } = (0, N.g)();
                    // for PulseSync: BEGIN load, prefetch and auto-hide synchronized lyrics per track
                    (0, b.useEffect)(() => {
                        const trackId = null == o ? void 0 : o.id;
                        const nativeAvailable =
                            (null == o ? void 0 : o.isSyncLyricsAvailable) ||
                            (null == o ? void 0 : o.isSyncLyricsAvailableWithOfflineFeature) ||
                            (null == o ? void 0 : o.hasSyncLyrics);
                        let lrclibEnabled = !0;
                        try {
                            lrclibEnabled = window.nativeSettings?.get('modSettings.lrclib.useText') !== !1;
                        } catch (_error) {}
                        if (
                            trackId &&
                            !(null == o ? void 0 : o.isNonMusic) &&
                            c.currentTrackId !== trackId &&
                            (nativeAvailable || lrclibEnabled || o.trackSource === 'UGC')
                        ) {
                            c.getData(trackId);
                        }
                        c.prefetchNextTrack(sonataRuntimeState);
                    }, [
                        null == o ? void 0 : o.id,
                        null == o ? void 0 : o.isSyncLyricsAvailable,
                        null == o ? void 0 : o.isSyncLyricsAvailableWithOfflineFeature,
                        null == o ? void 0 : o.hasSyncLyrics,
                        null == o ? void 0 : o.isNonMusic,
                        null == o ? void 0 : o.trackSource,
                        c.currentTrackId,
                        c,
                        sonataRuntimeState,
                    ]);
                    (0, b.useEffect)(() => {
                        const trackId = null == o ? void 0 : o.id;
                        if (!trackId || String(c.currentTrackId) !== String(trackId) || c.isLoadingForTrack(trackId)) return;
                        if (c.isRejected || c.hasInvalidLyrics) d(trackId);
                    }, [null == o ? void 0 : o.id, c.currentTrackId, c.isLoading, c.isRejected, c.hasInvalidLyrics, c.lines, c, d]);
                    let u = (0, b.useMemo)(() => {
                            const trackId = null == o ? void 0 : o.id;
                            if (trackId && c.hasLyricsForTrack(trackId))
                                return (0, h.jsx)(sS, {
                                    key: String(trackId),
                                });
                            if (trackId && c.isLoadingForTrack(trackId))
                                return (0, h.jsx)(su, {
                                    className: s,
                                });
                            if (c.isRejected || c.hasInvalidLyrics) return null;
                            return (0, h.jsx)(su, {
                                className: s,
                            });
                        }, [null == o ? void 0 : o.id, c.currentTrackId, c.lines, c.isLoading, c.isResolved, c.isRejected, c.hasInvalidLyrics, s, c]),
                        _ = (0, b.useMemo)(
                            () => ({
                                counterClassName: a,
                                scrollerClassName: l,
                                footerClassName: i,
                            }),
                            [a, i, l],
                        );
                    // for PulseSync: END load, prefetch and auto-hide synchronized lyrics per track
                    return (0, h.jsx)(ss.Provider, {
                        value: _,
                        children: (0, h.jsx)('div', {
                            ref: r,
                            className: (0, ew.$)(so().root, t),
                            children: (0, h.jsx)('div', {
                                className: (0, ew.$)(so().content, n),
                                'data-test-id': $.e8.player.SYNC_LYRICS_CONTENT,
                                children: u,
                            }),
                        }),
                    });
                });
            var sk = a(17743),
                sL = a(64014),
                sE = a(64546),
                sM = a(81883),
                sP = a(66022),
                sO = a.n(sP);
            let sw = (0, y.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: l,
                            withRipple: n = !1,
                            size: s = 's',
                            forwardRef: r,
                            children: o,
                            color: c,
                            disabled: d = !1,
                        } = e,
                        { formatMessage: u } = (0, q.A)(),
                        {
                            fullscreenPlayer: { isPlayQueueMode: _, hidePlayQueue: m, showPlayQueue: p },
                        } = (0, N.g)(),
                        v = (0, b.useCallback)(() => (_ ? m() : p()), [m, _, p]),
                        { scaleAnimation: x, unscaleAnimation: y, handleAnimationEnd: C, handleClick: g } = (0, sM.C)({ shouldStartFromUnscale: _, onClick: v });
                    return (0, h.jsx)(Q.$, {
                        className: (0, ew.$)(sO().root, { [sO().animation_scaled]: x, [sO().animation_unscaled]: y }, t),
                        color: c,
                        onAnimationEnd: C,
                        withRipple: n,
                        variant: a,
                        size: s,
                        radius: 'xxxl',
                        'aria-label': u({ id: 'play-queue.title' }),
                        'aria-pressed': _,
                        onClick: g,
                        icon: (0, h.jsx)(G.I, { size: i, className: (0, ew.$)(sO().icon, l, { [sO().icon_active]: _ }), variant: 'playQueue' }),
                        ref: r,
                        disabled: d,
                        'data-test-id': $.e8.player.FULLSCREEN_PLAYER_QUEUE_BUTTON,
                        children: o,
                    });
                }),
                sR = (0, b.forwardRef)((e, t) => (0, h.jsx)(sw, { forwardRef: t, ...e }));
            var sD = a(6252),
                sB = a.n(sD);
            let sF = (0, y.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: l,
                            withRipple: n = !1,
                            size: s = 's',
                            forwardRef: r,
                            children: o,
                            color: c,
                            disabled: d = !1,
                        } = e,
                        { formatMessage: u } = (0, q.A)(),
                        {
                            fullscreenPlayer: { isSyncLyricsMode: _, hideSyncLyrics: m, showSyncLyrics: p },
                        } = (0, N.g)(),
                        v = (0, b.useCallback)(() => (_ ? m() : p()), [m, _, p]),
                        { scaleAnimation: x, unscaleAnimation: y, handleAnimationEnd: C, handleClick: g } = (0, sM.C)({ shouldStartFromUnscale: _, onClick: v }),
                        A = ''.concat(u({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(u({ id: 'warning-messages.can-break-accessibility' }));
                    return (0, h.jsx)(Q.$, {
                        className: (0, ew.$)(sB().root, { [sB().animation_scaled]: x, [sB().animation_unscaled]: y }, t),
                        color: c,
                        onAnimationEnd: C,
                        withRipple: n,
                        variant: a,
                        size: s,
                        radius: 'xxxl',
                        'aria-label': A,
                        'aria-pressed': _,
                        onClick: g,
                        icon: (0, h.jsx)(G.I, { size: i, className: (0, ew.$)(sB().icon, l, { [sB().icon_active]: _ }), variant: 'syncLyrics' }),
                        ref: r,
                        disabled: d,
                        'data-test-id': $.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON,
                        children: o,
                    });
                }),
                sU = (0, b.forwardRef)((e, t) => (0, h.jsx)(sF, { forwardRef: t, ...e }));
            var sV = a(18888),
                sz = a.n(sV);
            let sK = (0, y.PA)(() => {
                var e;
                let [t, a] = (0, b.useState)(!1),
                    // for PulseSync: BEGIN access synchronized lyrics auto-hide and restore actions
                    {
                        sonataState: i,
                        user: l,
                        fullscreenPlayer: { syncLyrics: syncLyricsModel, autoHideSyncLyrics, restoreSyncLyricsForTrack },
                    } = (0, N.g)(),
                    // for PulseSync: END access synchronized lyrics auto-hide and restore actions
                    { entityMeta: n } = i,
                    { handleDebouncedToggle: s } = (0, nu.F)({
                        delay: 1500,
                        throttleTimeout: 300,
                    }),
                    r = i.canSpeed && ((null == n ? void 0 : n.isNonMusic) || (null == n || null == (e = n.mainAlbum) ? void 0 : e.isNonMusic)),
                    o = (0, e4.K)(n),
                    c = (0, b.useCallback)((e) => {
                        e.stopPropagation();
                    }, []),
                    d = (0, tj.L)(() => {
                        if ((null == n || !n.isRemoved) && (null == n ? void 0 : n.isAvailable))
                            return (0, h.jsx)(e2._, {
                                track: n,
                                open: t,
                                onOpenChange: a,
                                placement: 'left',
                                icon: (0, h.jsx)(G.I, {
                                    variant: 'more',
                                    size: 'm',
                                }),
                                className: (0, ew.$)(sz().menuButton, {
                                    [sz().menuButton_active]: t,
                                }),
                                wrapperClassName: sz().menuWrapper,
                                onClick: c,
                                size: 'l',
                                'data-test-id': $.e8.player.FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                            });
                    }),
                    // for PulseSync: BEGIN restore synchronized lyrics when a new track has valid lyrics
                    restoreTrackId = null == n ? void 0 : n.id,
                    restoreSyncLyricsEffect =
                        ((0, b.useEffect)(() => {
                            if (!restoreTrackId || String(syncLyricsModel.currentTrackId) !== String(restoreTrackId) || syncLyricsModel.isLoadingForTrack(restoreTrackId))
                                return;
                            if (syncLyricsModel.isRejected || syncLyricsModel.hasInvalidLyrics) {
                                autoHideSyncLyrics(restoreTrackId);
                                return;
                            }
                            if (syncLyricsModel.hasLyricsForTrack(restoreTrackId)) restoreSyncLyricsForTrack(restoreTrackId);
                        }, [
                            restoreTrackId,
                            syncLyricsModel.currentTrackId,
                            syncLyricsModel.lines,
                            syncLyricsModel.isLoading,
                            syncLyricsModel.isRejected,
                            syncLyricsModel.hasInvalidLyrics,
                            syncLyricsModel.isResolved,
                            syncLyricsModel,
                            autoHideSyncLyrics,
                            restoreSyncLyricsForTrack,
                        ]),
                        null),
                    // for PulseSync: END restore synchronized lyrics when a new track has valid lyrics
                    // for PulseSync: BEGIN refresh synchronized lyrics availability when model state changes
                    u = (0, b.useMemo)(() => {
                        // for PulseSync: BEGIN include cached fallback results in synchronized lyrics availability
                        const trackId = null == n ? void 0 : n.id;
                        const syncLyricsAvailable =
                            (null == n ? void 0 : n.isSyncLyricsAvailable) ||
                            (null == n ? void 0 : n.isSyncLyricsAvailableWithOfflineFeature) ||
                            (null == n ? void 0 : n.hasSyncLyrics) ||
                            (trackId && syncLyricsModel.hasLyricsForTrack(trackId));
                        if (syncLyricsAvailable)
                            return (0, h.jsx)(sU, {
                                className: sz().syncLyricsButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !l.isAuthorized,
                            });
                        // for PulseSync: END include cached fallback results in synchronized lyrics availability
                    }, [
                        null == n ? void 0 : n.id,
                        null == n ? void 0 : n.isSyncLyricsAvailable,
                        null == n ? void 0 : n.isSyncLyricsAvailableWithOfflineFeature,
                        null == n ? void 0 : n.hasSyncLyrics,
                        syncLyricsModel.currentTrackId,
                        syncLyricsModel.lines,
                        syncLyricsModel.isResolved,
                        l.isAuthorized,
                    ]);
                    // for PulseSync: END refresh synchronized lyrics availability when model state changes
                return (
                    (0, b.useEffect)(
                        () => (
                            window.addEventListener('mousemove', s),
                            () => {
                                window.removeEventListener('mousemove', s);
                            }
                        ),
                        [s],
                    ),
                    (0, h.jsxs)('div', {
                        className: (0, ew.$)(sz().root, {
                            [sz().root_visible]: t,
                        }),
                        children: [
                            (0, h.jsx)(sR, {
                                className: sz().playQueueButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !l.isAuthorized,
                            }),
                            (0, h.jsx)(sk.$, {
                                className: sz().sonataControls,
                                isMobile: !1,
                                entityMeta: n,
                                isFullscreen: !0,
                            }),
                            d,
                            u,
                            (0, h.jsxs)('div', {
                                className: sz().bottomRightButtonsWrapper,
                                children: [
                                    r &&
                                        (0, h.jsx)(sL.i, {
                                            className: sz().speedButton,
                                            size: 'l',
                                            iconSize: 'm',
                                            isIconCentered: !0,
                                        }),
                                    (0, h.jsx)(sE.WithOffline, {
                                        fallback: (0, h.jsx)(e9.c, {
                                            className: sz().likeButton,
                                            isLiked: null == n ? void 0 : n.isLiked,
                                            onClick: o,
                                            iconSize: 'm',
                                            size: 'l',
                                            variant: 'default',
                                            color: 'secondary',
                                            disabled: !l.isAuthorized,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var sH = a(7555),
                sW = a(81877),
                sY = a(32468),
                sq = a.n(sY);
            let s$ = (e) => {
                let { className: t, children: a, coverUri: i } = e;
                return (0, h.jsxs)(sH.t, {
                    radius: 'm',
                    className: (0, ew.$)(sq().root, t),
                    'data-test-id': $.e8.player.FULLSCREEN_PLAYER_POSTER_CONTENT,
                    children: [(0, h.jsx)(sW.B, { className: sq().cover, src: i, size: 400, fit: 'cover', withAvatarReplace: !0 }), a],
                });
            };
            var sQ = a(18340),
                sG = a.n(sQ);
            let sZ = {
                    enter: sG().additionalContent_enter,
                    enterActive: sG().additionalContent_enter_active,
                    exit: sG().additionalContent_exit,
                    exitActive: sG().additionalContent_exit_active,
                    appear: sG().additionalContent_enter,
                    appearActive: sG().additionalContent_enter_active,
                },
                sX = (e) => {
                    let { isModeActive: t, shouldDisableInsetTransition: a, children: i } = e,
                        l = (0, b.useRef)(null);
                    return (0, h.jsx)(a0.A, {
                        in: t,
                        nodeRef: l,
                        timeout: 800,
                        unmountOnExit: !0,
                        appear: !0,
                        classNames: sZ,
                        children: (0, h.jsx)('div', {
                            ref: l,
                            className: (0, ew.$)(sG().additionalContent, { [sG().additionalContent_withDisabledInsetTransition]: a }),
                            children: i,
                        }),
                    });
                },
                sJ = (0, y.PA)(() => {
                    var e;
                    let { state: t, handleDebouncedToggle: a } = (0, nu.F)({ delay: 150, throttleTimeout: 100 }),
                        {
                            sonataState: { entityMeta: i },
                            fullscreenPlayer: l,
                        } = (0, N.g)(),
                        { state: n, toggleTrue: s } = (0, eA.e)(!1),
                        r = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (e = i.mainAlbum) ? void 0 : e.isPodcast),
                        o = null == i ? void 0 : i.isTrackAudiobook,
                        c = {
                            [nx.u.PLAY_QUEUE]: { component: (0, h.jsx)(sn, {}), isActive: l.isPlayQueueMode },
                            [nx.u.SYNC_LYRICS]: {
                                component: (0, h.jsx)(sI, {
                                    className: sG().syncLyrics,
                                    loaderClassName: sG().syncLyricsLoader,
                                    contentClassName: sG().syncLyricsContent,
                                    scrollerClassName: sG().syncLyricsScroller,
                                    counterClassName: sG().syncLyricsCounter,
                                    footerClassName: sG().syncLyricsFooter,
                                }),
                                isActive: l.isSyncLyricsMode,
                            },
                        },
                        d = (0, b.useMemo)(
                            () =>
                                i
                                    ? o
                                        ? (0, h.jsx)(nm.Z, {
                                              hasLineClamp: !1,
                                              className: (0, ew.$)(sG().meta, { [sG().meta_isSplitMode]: l.isSplitMode }),
                                              titleContainerClassName: sG().title,
                                              track: i,
                                              withSecondaryColor: !0,
                                              captionSize: 'l',
                                              explicitSize: 'xs',
                                              withAuthor: !0,
                                              textClassName: (0, ew.$)(sG().nonMusicAuthors, sG().ellipsis),
                                              withContextMenuArtists: !0,
                                          })
                                        : r
                                          ? (0, h.jsx)(np.w, {
                                                className: (0, ew.$)(sG().meta, { [sG().meta_isSplitMode]: l.isSplitMode }),
                                                titleContainerClassName: sG().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withDate: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withPodcastName: !0,
                                                textClassName: sG().nonMusicAuthors,
                                            })
                                          : (0, h.jsx)(nv.j, {
                                                hasLineClamp: !1,
                                                className: (0, ew.$)(sG().meta, { [sG().meta_isSplitMode]: l.isSplitMode }),
                                                titleContainerClassName: sG().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withAlbumLink: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withAllArtistsTitle: !0,
                                                artistsClassName: sG().artists,
                                                textClassName: sG().ellipsis,
                                                withContextMenuArtists: !0,
                                            })
                                    : null,
                            [i, null == i ? void 0 : i.id, r, o, l.isSplitMode],
                        );
                    return (
                        (0, b.useEffect)(
                            () => (
                                window.addEventListener('resize', a),
                                () => {
                                    window.removeEventListener('resize', a);
                                }
                            ),
                            [a],
                        ),
                        (0, b.useEffect)(() => {
                            l.isSplitMode && s();
                        }, [l.isSplitMode, l.mode, s]),
                        (0, b.useEffect)(
                            () => () => {
                                (l.reset(), l.playQueue.reset());
                            },
                            [l],
                        ),
                        (0, h.jsxs)('div', {
                            className: sG().root,
                            children: [
                                (0, h.jsxs)('div', {
                                    className: (0, ew.$)(sG().fullscreenContent, {
                                        [sG().fullscreenContent_withDisabledInsetTransition]: t,
                                        [sG().fullscreenContent_enter]: l.isSplitMode,
                                        [sG().fullscreenContent_leave]: !l.isSplitMode && n,
                                    }),
                                    'data-test-id': $.e8.player.FULLSCREEN_PLAYER_FULLSCREEN_CONTENT,
                                    children: [
                                        (0, h.jsx)(s$, {
                                            className: (0, ew.$)(sG().poster, sG().important),
                                            coverUri: null == i ? void 0 : i.coverUri,
                                            children: (0, h.jsx)(sK, {}),
                                        }),
                                        (0, h.jsxs)('div', {
                                            className: sG().info,
                                            children: [
                                                d,
                                                (0, h.jsx)(n_.v, {
                                                    className: sG().sliderContainer,
                                                    sliderClassName: sG().slider,
                                                    disabled: !i,
                                                    isMobile: !1,
                                                    isFullscreen: l.isSplitMode,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object.entries(c).map((e) => {
                                    let [a, { component: i, isActive: l }] = e;
                                    return (0, h.jsx)(sX, { isModeActive: l, shouldDisableInsetTransition: t, children: i }, a);
                                }),
                            ],
                        })
                    );
                }),
                s0 = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, q.A)(),
                        {
                            currentTrackInfo: { modal: t },
                            modals: { ugcTrackEditModal: a },
                            sonataState: { entityMeta: i },
                            fullscreenPlayer: l,
                            fullscreenVideoPlayer: n,
                            advert: s,
                        } = (0, N.g)(),
                        r = (0, l9.K)(i);
                    // for PulseSync: BEGIN read the fullscreen cover background preference
                    const coverBackgroundKey = 'modSettings.playerBarEnhancement.fullscreenCoverBackground';
                    const [coverBackgroundEnabled, setCoverBackgroundEnabled] = (0, b.useState)(() => window.nativeSettings?.get(coverBackgroundKey) === !0);
                    (0, b.useEffect)(
                        () =>
                            window.musicDesktop?.pulsesync.settings.onChange?.((key, value) => {
                                if (key === coverBackgroundKey) setCoverBackgroundEnabled(value === !0);
                            }),
                        [],
                    );
                    const coverBackgroundUri = coverBackgroundEnabled && l.modal.isOpened ? i?.coverUri : void 0;
                    // for PulseSync: END read the fullscreen cover background preference
                    (no(),
                        (0, b.useEffect)(() => {
                            s.isAdvertShown && l.modal.close();
                        }, [s.isAdvertShown, l.modal]));
                    let o = !t.isOpened && !n.modal.isOpened && !a.modal.isOpened;
                    return (0, h.jsxs)(T.a, {
                        className: (0, ew.$)(nd().root, nd().important),
                        open: l.modal.isOpened,
                        onOpenChange: o ? l.modal.onOpenChange : void 0,
                        onClose: l.modal.close,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        style: r,
                        contentClassName: nd().modalContent,
                        closeOnOutsidePress: !1,
                        'data-test-id': $.e8.player.FULLSCREEN_PLAYER_MODAL,
                        children: [
                            // for PulseSync: BEGIN render a decorative blurred cover behind player and lyrics
                            coverBackgroundUri &&
                                (0, h.jsx)('div', {
                                    'data-overtone-fullscreen-cover-background': '',
                                    'aria-hidden': !0,
                                    children: (0, h.jsx)(
                                        'img',
                                        {
                                            src: (0, ei.lU)(coverBackgroundUri, 800),
                                            alt: '',
                                            decoding: 'async',
                                            onLoad: (event) => event.currentTarget.setAttribute('data-loaded', ''),
                                        },
                                        coverBackgroundUri,
                                    ),
                                }),
                            // for PulseSync: END render a decorative blurred cover behind player and lyrics
                            (0, h.jsx)('header', {
                                className: nd().header,
                                children: (0, h.jsx)(Q.$, {
                                    className: nd().closeButton,
                                    radius: 'round',
                                    color: 'secondary',
                                    size: 'm',
                                    icon: (0, h.jsx)(G.I, { variant: 'arrowDown', size: 'xs' }),
                                    onClick: l.modal.close,
                                    'aria-label': e({ id: 'interface-actions.close' }),
                                    'data-test-id': $.e8.player.FULLSCREEN_PLAYER_CLOSE_BUTTON,
                                }),
                            }),
                            (0, h.jsx)(sJ, {}),
                            (0, h.jsx)(l5.Notification, {
                                className: nd().notification,
                                enableMultiContainer: !0,
                                containerId: er.u.FULLSCREEN_INFO,
                                position: 'bottom-center',
                            }),
                            (0, h.jsx)(l5.Notification, {
                                className: nd().notification,
                                enableMultiContainer: !0,
                                containerId: er.u.FULLSCREEN_ERROR,
                                position: 'bottom-center',
                            }),
                        ],
                    });
                });
            var s1 = a(63983),
                s2 = a.n(s1),
                s4 = a(27397),
                s8 = a(36361),
                s6 = a(14315),
                s3 = a(68039),
                s5 = a(58292);
            let s9 = (0, y.PA)((e) => {
                var t, a, i, l;
                let { className: n, onSyncLyricsButtonClick: s } = e,
                    {
                        sonataState: r,
                        settings: { isLandscape: o },
                        // for PulseSync: BEGIN access the synchronized lyrics model in fullscreen player controls
                        fullscreenPlayer: { isSyncLyricsMode: c, syncLyrics: syncLyricsModel },
                        // for PulseSync: END access the synchronized lyrics model in fullscreen player controls
                        user: { hasPlus: d },
                    } = (0, N.g)(),
                    { formatMessage: u } = (0, q.A)(),
                    [_, m] = (0, b.useState)(!1),
                    p = (0, s4.A)(),
                    // for PulseSync: BEGIN fullscreen player repeat and shuffle hook bindings
                    x = (0, s8.e)(),
                    v = null === r.entityMeta,
                    // for PulseSync: END fullscreen player repeat and shuffle hook bindings
                    y = (null == (t = r.entityMeta) ? void 0 : t.isNonMusic) || (null == (i = r.entityMeta) || null == (a = i.mainAlbum) ? void 0 : a.isNonMusic),
                    C = r.canSpeed && y,
                    g = (0, f.c)(() => {
                        // for PulseSync: BEGIN initialize repeat and shuffle hooks for the fullscreen player
                        x(r);
                        // for PulseSync: END initialize repeat and shuffle hooks for the fullscreen player
                    }),
                    A = (0, f.c)(() => {
                        p(r);
                    }),
                    // for PulseSync: BEGIN refresh the fullscreen lyrics button when fallback results change
                    T = (0, b.useMemo)(() => {
                        if (y) return;
                        // for PulseSync: BEGIN check fallback lyrics availability for the fullscreen lyrics button
                        const track = r.entityMeta;
                        const trackId = null == track ? void 0 : track.id;
                        const syncLyricsAvailable =
                            (null == track ? void 0 : track.isSyncLyricsAvailable) ||
                            (null == track ? void 0 : track.isSyncLyricsAvailableWithOfflineFeature) ||
                            (null == track ? void 0 : track.hasSyncLyrics) ||
                            (trackId && syncLyricsModel.hasLyricsForTrack(trackId));
                        let t = ''
                            .concat(
                                u({
                                    id: 'interface-actions.open-sync-lyrics',
                                }),
                                ' ',
                            )
                            .concat(
                                u({
                                    id: 'warning-messages.can-break-accessibility',
                                }),
                            );
                        // for PulseSync: END check fallback lyrics availability for the fullscreen lyrics button
                        return (0, h.jsx)(Q.$, {
                            className: (0, ew.$)(s2().syncLyricsButton, {
                                [s2().syncLyricsButton_active]: c,
                            }),
                            radius: 'round',
                            size: 'xxxs',
                            variant: 'text',
                            // for PulseSync: BEGIN enable the synchronized lyrics button for fallback results
                            disabled: !syncLyricsAvailable || o,
                            // for PulseSync: END enable the synchronized lyrics button for fallback results
                            withRipple: !1,
                            withHover: !1,
                            'aria-label': t,
                            icon: (0, h.jsx)(G.I, {
                                variant: 'syncLyrics',
                                size: 'xs',
                            }),
                            onClick: s,
                        });
                    }, [
                        u,
                        y,
                        c,
                        s,
                        o,
                        null == (l = r.entityMeta) ? void 0 : l.id,
                        null == l ? void 0 : l.isSyncLyricsAvailable,
                        null == l ? void 0 : l.isSyncLyricsAvailableWithOfflineFeature,
                        null == l ? void 0 : l.hasSyncLyrics,
                        syncLyricsModel.currentTrackId,
                        syncLyricsModel.lines,
                        syncLyricsModel.isResolved,
                    ]);
                    // for PulseSync: END refresh the fullscreen lyrics button when fallback results change
                return (0, h.jsx)('div', {
                    className: (0, ew.$)(s2().footer, n),
                    children: (0, h.jsxs)('div', {
                        className: s2().footerContainer,
                        children: [
                            // for PulseSync: BEGIN fullscreen repeat, speed and settings controls
                            (v || r.canChangeRepeatMode) &&
                                (0, h.jsx)(s6.s, {
                                    onClick: A,
                                    isDisabled: v,
                                    repeatMode: r.repeatMode,
                                    variant: 'text',
                                }),
                            C &&
                                (0, h.jsx)(sL.i, {
                                    size: 'xxxs',
                                    iconSize: 'l',
                                }),
                            (0, h.jsx)(s5.p$, {
                                open: _,
                                onOpenChange: m,
                                icon: (0, h.jsx)(G.I, {
                                    variant: 'settings',
                                    size: 'xs',
                                }),
                                size: 'xxxs',
                                disabled: !d,
                            }),
                            // for PulseSync: END fullscreen repeat, speed and settings controls
                            T,
                            // for PulseSync: BEGIN fullscreen shuffle control
                            (v || r.canShuffle) &&
                                (0, h.jsx)(s3.u, {
                                    onClick: g,
                                    isDisabled: v,
                                    shuffle: r.shuffle,
                                    variant: 'text',
                                }),
                            // for PulseSync: END fullscreen shuffle control
                        ],
                    }),
                });
            });
            var s7 = a(34816),
                re = a.n(s7);
            let rt = {
                    enter: re().coverWrapper_enter,
                    enterActive: re().coverWrapper_enter_active,
                    exit: re().coverWrapper_exit,
                    exitActive: re().coverWrapper_exit_active,
                },
                ra = (0, y.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        i = (0, b.useRef)(null),
                        [l, n] = (0, b.useState)(!1),
                        { state: s, handleDebouncedToggle: r, reset: o } = (0, nu.F)({ delay: 7e3, throttleTimeout: 0 }),
                        {
                            fullscreenPlayer: { isSplitMode: c, isSyncLyricsMode: d, showSyncLyrics: u, hideSyncLyrics: _, isPlayQueueMode: m, syncLyrics: p },
                            sonataState: { entityMeta: v },
                            settings: { isLandscape: x },
                        } = (0, N.g)(),
                        y = (null == v ? void 0 : v.isTrackPodcast) || (null == v || null == (t = v.mainAlbum) ? void 0 : t.isPodcast),
                        C = null == v ? void 0 : v.isTrackAudiobook,
                        g = (s || !c || x) && !m,
                        A = (0, b.useCallback)(() => {
                            d && !x && (s ? o() : r());
                        }, [d, s, o, r, x]),
                        f = (0, b.useCallback)(() => {
                            d && !x && s && r();
                        }, [r, d, s, x]),
                        T = (0, b.useCallback)(() => {
                            if (null == v ? void 0 : v.isSyncLyricsAvailable) return d ? _() : u();
                        }, [null == v ? void 0 : v.isSyncLyricsAvailable, _, d, u]),
                        j = (0, b.useMemo)(() => {
                            if (v)
                                return C
                                    ? (0, h.jsx)(nm.Z, {
                                          textClassName: re().metaText,
                                          track: v,
                                          withSecondaryColor: !0,
                                          captionSize: 'l',
                                          explicitSize: 'xs',
                                          withAuthor: !0,
                                          withContextMenuArtists: !0,
                                      })
                                    : y
                                      ? (0, h.jsx)(np.w, {
                                            textClassName: re().metaText,
                                            track: v,
                                            withSecondaryColor: !0,
                                            withDate: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withPodcastName: !0,
                                        })
                                      : (0, h.jsx)(nv.j, {
                                            textClassName: re().metaText,
                                            track: v,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withAllArtistsTitle: !0,
                                            withContextMenuArtists: !0,
                                        });
                        }, [v, C, y]);
                    return (
                        (0, b.useEffect)(() => {
                            d && x && p.setInvisible();
                        }, [x, d, p]),
                        (0, b.useLayoutEffect)(() => {
                            d && !x && r();
                        }, [r, d, x]),
                        (0, h.jsxs)('div', {
                            onTouchEnd: f,
                            className: (0, ew.$)(re().root, a),
                            children: [
                                (0, h.jsx)('div', {
                                    className: re().content,
                                    children: (0, h.jsxs)('div', {
                                        className: re().wrapper,
                                        children: [
                                            (0, h.jsxs)('div', {
                                                className: (0, ew.$)(re().infoBlock, { [re().infoBlock_withExpandedSyncLyrics]: !s && d && !x }),
                                                children: [
                                                    (0, h.jsxs)('div', {
                                                        onClick: A,
                                                        className: (0, ew.$)(re().contentContainer, { [re().contentContainer_withSplitMode]: c }),
                                                        children: [
                                                            d &&
                                                                !x &&
                                                                (0, h.jsx)(sI, {
                                                                    className: re().syncLyrics,
                                                                    scrollerClassName: re().syncLyricsScroller,
                                                                    contentClassName: re().syncLyricsContent,
                                                                    loaderClassName: re().syncLyricsLoader,
                                                                    footerClassName: re().syncLyricsFooter,
                                                                    counterClassName: re().syncLyricsCounter,
                                                                }),
                                                            m && (0, h.jsx)(sn, {}),
                                                            (0, h.jsx)(a0.A, {
                                                                in: !c || (x && d),
                                                                nodeRef: i,
                                                                timeout: 200,
                                                                unmountOnExit: !0,
                                                                classNames: rt,
                                                                children: (0, h.jsx)(sH.t, {
                                                                    ref: i,
                                                                    radius: 'm',
                                                                    className: re().coverWrapper,
                                                                    children: (0, h.jsx)(sW.B, {
                                                                        className: re().cover,
                                                                        src: null == v ? void 0 : v.coverUri,
                                                                        size: 400,
                                                                        fit: 'cover',
                                                                        withAvatarReplace: !0,
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    !m &&
                                                        (0, h.jsxs)('div', {
                                                            className: re().trackInfo,
                                                            children: [
                                                                !s &&
                                                                    d &&
                                                                    !x &&
                                                                    (0, h.jsx)(sH.t, {
                                                                        className: re().trackInfoCoverContainer,
                                                                        radius: 'xs',
                                                                        children: (0, h.jsx)(sW.B, {
                                                                            className: re().trackInfoCover,
                                                                            src: null == v ? void 0 : v.coverUri,
                                                                            size: 200,
                                                                            fit: 'cover',
                                                                            withAvatarReplace: !0,
                                                                        }),
                                                                    }),
                                                                (0, h.jsxs)('div', {
                                                                    className: re().metaContainer,
                                                                    children: [
                                                                        j,
                                                                        !(null == v ? void 0 : v.isRemoved) &&
                                                                            (null == v ? void 0 : v.isAvailable) &&
                                                                            (0, h.jsx)(
                                                                                e2._,
                                                                                {
                                                                                    className: (0, ew.$)(re().contextMenu, { [re().contextMenu_visible]: l }),
                                                                                    track: v,
                                                                                    open: l,
                                                                                    onOpenChange: n,
                                                                                    placement: 'bottom',
                                                                                    isFullscreenMobile: !0,
                                                                                    size: 'xs',
                                                                                    icon: (0, h.jsx)(G.I, { variant: 'more', size: 'xxs' }),
                                                                                    'data-test-id': $.e8.player.MOBILE_FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                                                                                },
                                                                                v.idWithContext,
                                                                            ),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                ],
                                            }),
                                            g && (0, h.jsx)(n_.v, { className: re().timeline, disabled: !v, isMobile: !0, isFullscreen: !0, showThumbVariant: 'always' }),
                                            g && (0, h.jsx)(sk.$, { className: re().buttonsBlock, isMobile: !0, entityMeta: v, isFullscreen: !0 }),
                                        ],
                                    }),
                                }),
                                g && (0, h.jsx)(s9, { onSyncLyricsButtonClick: T }),
                            ],
                        })
                    );
                });
            var ri = a(94398),
                rl = a(11114),
                rn = a.n(rl);
            let rs = (0, y.PA)((e) => {
                    let { children: t, className: a } = e,
                        { url: i, title: l, subTitle: n } = nW(),
                        { fullscreenPlayer: s } = (0, N.g)(),
                        r = (0, f.c)((e) => {
                            (e.stopPropagation(), s.modal.isOpened && s.modal.close());
                        }),
                        o = (0, b.useMemo)(() => {
                            let e = (0, h.jsx)(ed.HL, {
                                variant: 'span',
                                size: 'm',
                                className: rn().title,
                                lineClamp: 1,
                                'data-test-id': $.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE,
                                children: l,
                            });
                            return i ? (0, h.jsx)(af.N, { href: i, target: '_self', onClick: r, className: rn().link, children: e }) : e;
                        }, [r, l, i]);
                    return (0, h.jsxs)('div', {
                        className: (0, ew.$)(rn().root, a),
                        'data-test-id': $.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK,
                        children: [
                            (0, h.jsxs)('div', {
                                className: rn().textBlock,
                                children: [
                                    (0, h.jsx)(ed.HL, {
                                        variant: 'span',
                                        size: 's',
                                        weight: 'normal',
                                        className: rn().subTitle,
                                        'data-test-id': $.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE,
                                        children: n,
                                    }),
                                    o,
                                ],
                            }),
                            t,
                        ],
                    });
                }),
                rr = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, q.A)(),
                        {
                            fullscreenPlayer: { modal: t, showPlayQueue: a, isPlayQueueMode: i, hidePlayQueue: l },
                            user: n,
                        } = (0, N.g)(),
                        s = (0, b.useCallback)(() => (i ? l() : a()), [l, i, a]);
                    return (0, h.jsxs)('header', {
                        className: s2().header,
                        children: [
                            (0, h.jsx)(Q.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 's',
                                variant: 'text',
                                icon: (0, h.jsx)(G.I, { variant: 'arrowDown', size: 'xs' }),
                                onClick: t.close,
                                'aria-label': e({ id: 'interface-actions.close' }),
                                'data-test-id': $.e8.player.MOBILE_FULLSCREEN_PLAYER_CLOSE_BUTTON,
                            }),
                            (0, h.jsx)(rs, {
                                className: s2().headerCenter,
                                children: (0, h.jsx)(ri.k, {
                                    title: e({ id: 'player-actions.cast' }),
                                    description: e({ id: 'future-feature.message' }),
                                    children: (0, h.jsx)(Q.$, {
                                        className: s2().castButton,
                                        radius: 'round',
                                        size: 's',
                                        variant: 'text',
                                        disabled: !0,
                                        withRipple: !1,
                                        'aria-label': e({ id: 'player-actions.cast' }),
                                        icon: (0, h.jsx)(G.I, { variant: 'cast', size: 'xs' }),
                                    }),
                                }),
                            }),
                            (0, h.jsx)(Q.$, {
                                className: (0, ew.$)(s2().playQueueButton, { [s2().playQueueButton_active]: i }),
                                radius: 'round',
                                size: 's',
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                                'aria-label': e({ id: 'play-queue.title' }),
                                onClick: s,
                                icon: (0, h.jsx)(G.I, { variant: 'playQueue', size: 'xs' }),
                                disabled: !n.isAuthorized,
                                'data-test-id': $.e8.player.MOBILE_FULLSCREEN_PLAYER_QUEUE_BUTTON,
                            }),
                        ],
                    });
                }),
                ro = (0, y.PA)(() => {
                    let {
                            sonataState: { entityMeta: e },
                            fullscreenPlayer: t,
                            advert: a,
                            settings: { isMobile: i },
                        } = (0, N.g)(),
                        l = (0, l9.K)(e);
                    return (
                        no(),
                        (0, b.useEffect)(() => {
                            a.isAdvertShown && t.modal.close();
                        }, [a.isAdvertShown, t.modal]),
                        (0, h.jsxs)(T.a, {
                            className: (0, ew.$)(s2().root, s2().important),
                            open: t.modal.isOpened,
                            onOpenChange: t.modal.onOpenChange,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            style: l,
                            contentClassName: s2().modalContent,
                            lockScroll: i,
                            'data-test-id': $.e8.player.MOBILE_FULLSCREEN_PLAYER_MODAL,
                            children: [
                                (0, h.jsx)(rr, {}),
                                (0, h.jsx)(ra, {}),
                                (0, h.jsx)(l5.Notification, {
                                    className: s2().notification,
                                    enableMultiContainer: !0,
                                    containerId: er.u.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, h.jsx)(l5.Notification, {
                                    className: s2().notification,
                                    enableMultiContainer: !0,
                                    containerId: er.u.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                rc = (0, y.PA)(() => {
                    let {
                            settings: { isMobileLandscapeHeight: e, layout: t },
                        } = (0, N.g)(),
                        a = t === l3.u.Mobile;
                    return (!a && e) || a ? (0, h.jsx)(ro, {}) : (0, h.jsx)(s0, {});
                });
            var rd = a(56049),
                ru = a(91467),
                r_ = a(51318),
                rm = a(17071),
                rp = a(38860),
                rv = a(26208),
                rx = a(66197),
                rh = a(8888),
                ry = a.n(rh);
            let rC = (0, y.PA)((e) => {
                let { className: t } = e,
                    {
                        advert: a,
                        user: i,
                        paywall: { modal: l },
                    } = (0, N.g)(),
                    n = a.isAdvertDisabled(rv.f.VIDEO),
                    { notify: s, dismiss: r } = (0, eo.l)(),
                    { formatMessage: o } = (0, q.A)(),
                    c = (0, rp.z)(),
                    d = (0, ru.r)(),
                    [u, _] = (0, b.useState)(!1),
                    m = (0, b.useRef)(null),
                    p = (0, b.useCallback)(
                        (e) => {
                            (e.stopPropagation(), e.preventDefault(), l.open(), _(!0), null == d || d.pauseVideoAdvert(), r());
                        },
                        [d, r, l],
                    );
                (0, b.useEffect)(() => {
                    u && !l.isOpened && (_(!1), null == d || d.resumeVideoAdvert());
                }, [d, u, l.isOpened]);
                let v = (0, b.useCallback)(() => {
                    s(
                        (0, h.jsx)(ne.$, {
                            className: ry().notify,
                            message: (0, h.jsx)(ed.HL, {
                                className: ry().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                children: (0, h.jsx)(eJ.A, { id: 'ads.notification' }),
                            }),
                            cover: (0, h.jsx)(G.I, { className: ry().icon, variant: 'plusColor' }),
                            coverRadius: 'round',
                            withDefaultCloseButton: !1,
                            coverClassName: (0, ew.$)(ry().cover, ry().important),
                            closeButton: (0, h.jsx)(Q.$, {
                                className: ry().notifyClose,
                                variant: 'text',
                                color: 'primary',
                                size: 'xxs',
                                onClick: p,
                                withRipple: !1,
                                ref: m,
                                'data-intersection-property-id': 'video-ad-button',
                                children: (0, h.jsx)(eJ.A, { id: 'ads.disable-ads' }),
                            }),
                        }),
                        { containerId: er.u.AD_INFO },
                    );
                }, [p, s]);
                if (
                    ((0, b.useEffect)(() => {
                        if (!i.hasPlus && !n)
                            return (
                                null == c ||
                                    c.addShortcutsListener(rm.M.MAIN, r_.l.CLOSE, () => {
                                        a.isAdvertShown && a.isVideoAdvert && v();
                                    }),
                                () => {
                                    null == c || c.removeShortcutsListener(rm.M.MAIN, r_.l.CLOSE);
                                }
                            );
                    }, [v, c, a.isAdvertShown, a.isVideoAdvert, i.hasPlus, n]),
                    i.hasPlus || n)
                )
                    return;
                let x = a.isAdvertShown && a.isVideoAdvert;
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)(T.a, {
                            className: (0, ew.$)(ry().root, { [ry().root_hidden]: !x }, t),
                            contentClassName: ry().content,
                            placement: 'center',
                            showHeader: !1,
                            closeOnOutsidePress: !1,
                            escapeKey: !1,
                            withOverlay: x,
                            open: !0,
                            lockScroll: x,
                            overlayColor: 'full',
                            disableGuards: !x,
                            disableFocusTrap: !x,
                            'data-test-id': $.e8.ad.VIDEO_AD,
                            children: (0, h.jsxs)(h.Fragment, {
                                children: [
                                    (0, h.jsx)(Q.$, {
                                        className: ry().close,
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, h.jsx)(G.I, { variant: 'close', size: 'xxs' }),
                                        onClick: v,
                                        'aria-label': o({ id: 'interface-actions.close-ad' }),
                                        withRipple: !1,
                                    }),
                                    (0, h.jsx)(rd.b, {
                                        data: a.data,
                                        mediaContent: (0, h.jsx)('div', {
                                            className: ry().videoBlock,
                                            id: rx.s.SLOT,
                                            children: (0, h.jsx)('video', { id: rx.s.VIDEO, className: ry().video }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, h.jsx)(l5.Notification, { enableMultiContainer: !0, containerId: er.u.AD_INFO, position: 'bottom-center' }),
                    ],
                });
            });
            rC.displayName = 'VideoAd';
            var rg = a(20585),
                rb = a(59714),
                rA = a(93940);
            let rf = (0, tl.n)({ event: 'Screen.Closed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                let e = (0, ta.s)(),
                    { hash: t } = (0, ti.g)(),
                    { screen: a } = (0, rA.j)(),
                    i = null == a ? void 0 : a.pageId;
                return (0, b.useCallback)(
                    (a) => {
                        if (!e || !i || void 0 === t || void 0 === a) return;
                        let l = { hash: t, pageId: i, mainObjectType: C.DomainObjectType.Trailer, mainObjectId: a };
                        (0, rb.XB)(e.evgenInstance, l);
                    },
                    [e, t, i],
                );
            });
            var rT = a(99698),
                rj = a(46384),
                rN = a(90852),
                rS = a(64284);
            let rI = (0, tl.n)({ event: 'Screen.Opened', kind: 'hook', requiredScopes: ['screen'] }, () => {
                    let e = (0, ta.s)(),
                        { hash: t } = (0, ti.g)(),
                        { screen: a } = (0, rA.j)(),
                        i = null == a ? void 0 : a.pageId;
                    return (0, b.useCallback)(
                        (a) => {
                            if (!e || !i || void 0 === t || void 0 === a) return;
                            let l = { hash: t, pageId: i, mainObjectType: C.DomainObjectType.Trailer, mainObjectId: a };
                            (0, rb.w5)(e.evgenInstance, l);
                        },
                        [e, t, i],
                    );
                }),
                rk = (0, tl.n)({ event: 'Screen.Started/ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, () => {
                    let e = (0, ta.s)(),
                        { hash: t } = (0, ti.g)(),
                        { screen: a } = (0, rA.j)(),
                        i = null == a ? void 0 : a.pageId;
                    return (0, b.useCallback)(
                        (a, l) => {
                            if (!e || !i || void 0 === t || void 0 === a) return;
                            let n = { hash: t, pageId: i, mainObjectType: C.DomainObjectType.Trailer, mainObjectId: a };
                            l
                                ? (0, rb.bv)(e.evgenInstance, { ...n, actionType: C.ActionType.Pause, userInteractionType: C.UserInteractionType.Tap })
                                : (0, rb.e7)(e.evgenInstance, n);
                        },
                        [e, t, i],
                    );
                });
            var rL = a(27984),
                rE = a(98427);
            let rM = (e) => {
                    let { variant: t, blockId: a, meta: i } = e,
                        l = ((e) => {
                            switch (e) {
                                case rL.H.ALBUM:
                                    return rE.b.ALBUM;
                                case rL.H.ARTIST:
                                    return rE.b.ARTIST;
                                case rL.H.PLAYLIST:
                                    return rE.b.PLAYLIST;
                                case rL.H.TRACK:
                                    return rE.b.TRACK;
                            }
                        })(t),
                        n = ((e) => {
                            switch (e) {
                                case rL.H.ALBUM:
                                    return eU.K.Album;
                                case rL.H.ARTIST:
                                    return eU.K.Artist;
                                case rL.H.PLAYLIST:
                                    return eU.K.Playlist;
                                case rL.H.TRACK:
                                default:
                                    return eU.K.Various;
                            }
                        })(t),
                        s = (null == i ? void 0 : i.uuid) || (null == i ? void 0 : i.id);
                    return (0, eK.f)({ pageId: l, blockId: a, contextId: s, contextType: n, pageEntityId: s });
                },
                rP = (e) => {
                    let { variant: t, id: a, from: i, uuid: l, utmLink: n } = e;
                    switch (t) {
                        case rL.H.ALBUM:
                            return { type: eU.K.Album, trailer: !0, meta: { id: Number(a) }, from: i, utmLink: n };
                        case rL.H.ARTIST:
                            return { type: eU.K.Artist, trailer: !0, meta: { id: String(a) }, from: i, utmLink: n };
                        case rL.H.PLAYLIST:
                            return { type: eU.K.Playlist, trailer: !0, meta: { id: String(a), uuid: l }, from: i, utmLink: n };
                        case rL.H.TRACK:
                            return { type: eU.K.Various, trailer: !0, meta: { id: String(a) }, from: i, utmLink: n };
                    }
                };
            var rO = a(33884),
                rw = a.n(rO);
            let rR = (0, y.PA)(() => {
                    let { trailer: e } = (0, N.g)(),
                        { variant: t, id: a } = e,
                        i = (0, b.useCallback)(() => {
                            if (t && a)
                                switch (t) {
                                    case rL.H.ALBUM:
                                        e.getAlbumTrailer(Number(a));
                                        break;
                                    case rL.H.ARTIST:
                                        e.getArtistTrailer(a);
                                        break;
                                    case rL.H.PLAYLIST:
                                        e.getPlaylistTrailer(a);
                                        break;
                                    case rL.H.TRACK:
                                        e.getTrackTrailer(a);
                                }
                        }, [a, e, t]);
                    return (0, h.jsxs)('div', {
                        className: rw().root,
                        children: [
                            (0, h.jsxs)('div', {
                                className: rw().textContainer,
                                children: [
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h2',
                                        className: rw().title,
                                        size: 'xs',
                                        weight: 'bold',
                                        children: (0, h.jsx)(eJ.A, { id: 'error-messages.something-went-wrong' }),
                                    }),
                                    (0, h.jsx)(ed.HL, {
                                        className: rw().description,
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, h.jsx)(eJ.A, { id: 'trailer.something-went-wrong-description' }),
                                    }),
                                ],
                            }),
                            (0, h.jsx)(Q.$, {
                                onClick: i,
                                color: 'secondary',
                                size: 'default',
                                radius: 'xxxl',
                                children: (0, h.jsx)(ed.HL, { type: 'controls', variant: 'span', size: 'm', children: (0, h.jsx)(eJ.A, { id: 'page-error.reload' }) }),
                            }),
                        ],
                    });
                }),
                rD = () =>
                    (0, h.jsx)('div', {
                        className: rw().root,
                        children: (0, h.jsxs)('div', {
                            className: rw().textContainer,
                            children: [
                                (0, h.jsx)(ed.DZ, {
                                    variant: 'h2',
                                    className: rw().title,
                                    size: 'xs',
                                    weight: 'bold',
                                    children: (0, h.jsx)(eJ.A, { id: 'trailer.not-found-title' }),
                                }),
                                (0, h.jsx)(ed.HL, {
                                    className: rw().description,
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: (0, h.jsx)(eJ.A, { id: 'trailer.not-found-description' }),
                                }),
                            ],
                        }),
                    }),
                rB = (0, tl.n)({ event: 'Screen.Started', kind: 'hook', requiredScopes: ['screen'] }, () => {
                    let e = (0, ta.s)(),
                        { hash: t } = (0, ti.g)(),
                        { screen: a } = (0, rA.j)(),
                        i = null == a ? void 0 : a.pageId;
                    return (0, b.useCallback)(
                        (a, l) => {
                            e &&
                                i &&
                                void 0 !== t &&
                                void 0 !== l &&
                                void 0 !== a &&
                                (0, rb.e7)(e.evgenInstance, { hash: t, pageId: i, mainObjectType: a, mainObjectId: l });
                        },
                        [e, t, i],
                    );
                }),
                rF = (0, tl.n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: ['screen'] }, () => {
                    let e = (0, ta.s)(),
                        { hash: t } = (0, ti.g)(),
                        { screen: a } = (0, rA.j)(),
                        i = null == a ? void 0 : a.pageId;
                    return (0, b.useCallback)(
                        (a, l) => {
                            if (!e || !i || void 0 === t || void 0 === a || void 0 === l) return;
                            let n = { hash: t, pageId: i, mainObjectType: C.DomainObjectType.Trailer, mainObjectId: a, from: C.AppScreen.TrailerScreen, to: l };
                            (0, rb.Mu)(e.evgenInstance, n);
                        },
                        [e, t, i],
                    );
                }),
                rU = {
                    [rL.H.ALBUM]: C.DomainObjectType.Album,
                    [rL.H.ARTIST]: C.DomainObjectType.Artist,
                    [rL.H.PLAYLIST]: C.DomainObjectType.Playlist,
                    [rL.H.TRACK]: C.DomainObjectType.Track,
                },
                rV = { [rL.H.ALBUM]: C.AppScreen.AlbumScreen, [rL.H.ARTIST]: C.AppScreen.ArtistScreen, [rL.H.PLAYLIST]: C.AppScreen.PlaylistScreen };
            var rz = a(35232),
                rK = a.n(rz);
            let rH = (0, y.PA)((e) => {
                var t, a;
                let { variant: i, isShimmerVisible: l, isShimmerActive: n, className: s } = e,
                    {
                        trailer: { state: r, meta: o, modal: c, objectId: d, resetUtmLink: u, tracks: _ },
                        albumCPA: { isPlusCPAPlayerBarEnabled: m },
                        paywall: { modal: p },
                    } = (0, N.g)(),
                    v = (0, e3.N)(),
                    x = (0, aB.e)(),
                    { from: y } = rM({ variant: i, blockId: rS.U.TRAILER }),
                    C = rF(),
                    g = rf(),
                    A = rB(),
                    f = (0, an.Z)(null != (a = null == o ? void 0 : o.url) ? a : ''),
                    T = (0, b.useCallback)(() => {
                        f();
                        let e = rV[i];
                        e && C(d, e);
                    }, [f, d, C, i]),
                    j = ((e) => {
                        let {
                            trailer: { meta: t },
                            artist: a,
                            album: i,
                            playlist: l,
                        } = (0, N.g)();
                        switch (e) {
                            case rL.H.ALBUM:
                                return i.id === Number(null == t ? void 0 : t.id);
                            case rL.H.ARTIST:
                                return a.id === (null == t ? void 0 : t.id);
                            case rL.H.PLAYLIST:
                                return l.uuid === (null == t ? void 0 : t.uuid);
                            case rL.H.TRACK:
                                return !1;
                        }
                    })(i),
                    S = !j && i !== rL.H.TRACK,
                    I = m(
                        (function (e, t, a) {
                            if (e === rL.H.ALBUM && (null == t ? void 0 : t.id)) return Number(t.id);
                            if (e === rL.H.TRACK) {
                                var i;
                                return null == a || null == (i = a[0]) ? void 0 : i.albumId;
                            }
                        })(i, o, _),
                    ),
                    k = (0, b.useCallback)(() => {
                        var e, t, a, l;
                        if (v && !I) return void p.open();
                        let n =
                            null == x || null == (a = x.playbackController.activePlayback.value) || null == (t = a.state) || null == (e = t.currentContext.value)
                                ? void 0
                                : e.utmLink;
                        (null == x || x.stop(rg.V.TRAILER), u(), c.close(), g(d), S && T());
                        let s = r.status !== sx.MT.PLAYING || i === rL.H.ALBUM ? { index: 0 } : { entityId: null == (l = r.entityMeta) ? void 0 : l.id },
                            _ = ((e) => {
                                let { variant: t, id: a, from: i, uuid: l, utmLink: n } = e;
                                switch (t) {
                                    case rL.H.ALBUM:
                                        return { type: eU.K.Album, meta: { id: Number(a) }, from: i, utmLink: n };
                                    case rL.H.ARTIST:
                                        return { type: eU.K.Artist, meta: { id: String(a) }, from: i, utmLink: n };
                                    case rL.H.PLAYLIST:
                                        return { type: eU.K.Playlist, meta: { id: String(a), uuid: l }, from: i, utmLink: n };
                                    case rL.H.TRACK:
                                        return { type: eU.K.Various, meta: { id: String(a) }, from: i, utmLink: n };
                                }
                            })({ variant: i, id: null == o ? void 0 : o.id, uuid: null == o ? void 0 : o.uuid, from: y, utmLink: n });
                        null == x ||
                            x.playContext({ contextData: _, queueParams: s }).then(() => {
                                (null == o ? void 0 : o.id) && A(rU[i], o.id);
                            });
                    }, [
                        x,
                        u,
                        c,
                        g,
                        d,
                        S,
                        r.status,
                        null == (t = r.entityMeta) ? void 0 : t.id,
                        i,
                        null == o ? void 0 : o.id,
                        null == o ? void 0 : o.uuid,
                        y,
                        T,
                        A,
                        v,
                        I,
                        p,
                    ]),
                    L = (0, b.useMemo)(
                        () =>
                            (0, h.jsxs)('div', {
                                className: (0, ew.$)(rK().root, s),
                                children: [
                                    (0, h.jsx)(Q.$, {
                                        radius: 'xxxl',
                                        size: 'default',
                                        color: 'secondary',
                                        icon: (0, h.jsx)(G.I, { variant: 'play', size: 'xxxs' }),
                                        className: rK().button,
                                        onClick: k,
                                        'data-test-id': $.e8.trailer.TRAILER_LISTEN_FULL_VERSION_BUTTON,
                                        children: (0, h.jsx)(eJ.A, { id: 'trailer.listen-full-version' }),
                                    }),
                                    S &&
                                        (0, h.jsx)(Q.$, {
                                            radius: 'xxxl',
                                            size: 'default',
                                            color: 'secondary',
                                            onClick: T,
                                            className: rK().button,
                                            'data-test-id': $.e8.trailer.TRAILER_NAVIGATE_TO_ENTITY_BUTTON,
                                            children: (0, h.jsx)(eJ.A, { id: 'trailer.navigate' }),
                                        }),
                                ],
                            }),
                        [s, k, T, S],
                    );
                return l
                    ? ((e) => {
                          let { isActive: t, className: a, isCurrentEntityPage: i } = e;
                          return (0, h.jsxs)('div', {
                              className: (0, ew.$)(rK().root, a),
                              children: [
                                  (0, h.jsx)(eh.W, { isActive: t, radius: 'xxxl', className: rK().playButtonShimmer }),
                                  i && (0, h.jsx)(eh.W, { isActive: t, radius: 'xxxl', className: rK().linkButtonShimmer }),
                              ],
                          });
                      })({ isActive: n, isCurrentEntityPage: j, className: s })
                    : L;
            });
            var rW = a(37821),
                rY = a(20924),
                rq = a(18130),
                r$ = a(49343),
                rQ = a(19038),
                rG = a(98953),
                rZ = a(13068),
                rX = a.n(rZ);
            let rJ = (0, y.PA)((e) => {
                var t;
                let { variant: a, isShimmerVisible: i, isShimmerActive: l, className: n } = e,
                    {
                        trailer: { meta: s, objectId: r, utmLink: o, personalColor: c, shareable: d, title: u, state: _ },
                        playlist: { shouldShowTrailerOnboarding: m, isRewind2024Playlist: p },
                    } = (0, N.g)(),
                    { from: v } = rM({ variant: a, blockId: rS.U.TRAILER, meta: s }),
                    x = rF(),
                    y = rk(),
                    C = (0, e0.g)(),
                    g = a === rL.H.ARTIST ? 'round' : 's',
                    { notify: A } = (0, eo.l)(),
                    T = (0, e8.P)(),
                    j = (0, h.jsx)(eJ.A, { id: 'onboarding.rewind-trailer', values: { br: (0, h.jsx)('br', {}) } }),
                    { togglePlay: S, isPlaying: I } = (0, e5.D)({
                        playContextParams: {
                            contextData: rP({ variant: a, id: null == s ? void 0 : s.id, uuid: null == s ? void 0 : s.uuid, from: v, utmLink: o }),
                            loadContextMeta: !0,
                        },
                        sonataState: _,
                        playbackId: rg.V.TRAILER,
                    }),
                    k = (0, f.c)(() => {
                        !T() && (y(r, I), S(), I || C());
                    }),
                    L = (0, b.useCallback)(() => {
                        let e = rV[a];
                        e && x(r, e);
                    }, [r, x, a]),
                    E = (0, rY.R)(c || 0),
                    M = (0, rW.m)(c || 0),
                    P = (0, b.useMemo)(() => {
                        let e, t;
                        return (
                            'number' == typeof c ? ((e = E), (t = M)) : (e = { '--trailer-color': null == s ? void 0 : s.averageColor }),
                            (0, h.jsxs)('div', {
                                className: rX().coverContainer,
                                'data-test-id': $.e8.trailer.TRAILER_COVER,
                                children: [
                                    (0, h.jsx)(sH.t, {
                                        radius: g,
                                        className: rX().cover,
                                        style: t,
                                        withShadow: !0,
                                        children: (0, h.jsx)(tz._V, {
                                            'aria-hidden': !0,
                                            src: null == s ? void 0 : s.coverUri,
                                            size: 100,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                        }),
                                    }),
                                    (0, h.jsx)('div', {
                                        className: rX().iconContainer,
                                        style: e,
                                        children: (0, h.jsx)(G.I, { variant: 'trailer', size: 'xs', className: rX().icon }),
                                    }),
                                ],
                            })
                        );
                    }, [g, null == s ? void 0 : s.coverUri, M, null == s ? void 0 : s.averageColor, c, E]),
                    O = (0, b.useMemo)(() => {
                        let e = null == s ? void 0 : s.url;
                        return e
                            ? (0, h.jsx)(af.N, {
                                  href: e,
                                  className: rX().link,
                                  onClick: L,
                                  'data-test-id': $.e8.trailer.TRAILER_ENTITY_TITLE,
                                  children: (0, h.jsx)(ed.HL, {
                                      variant: 'span',
                                      type: 'controls',
                                      lineClamp: 1,
                                      className: rX().text,
                                      children: null == s ? void 0 : s.title,
                                  }),
                              })
                            : (0, h.jsx)(ed.HL, {
                                  variant: 'span',
                                  type: 'controls',
                                  lineClamp: 1,
                                  className: rX().text,
                                  'data-test-id': $.e8.trailer.TRAILER_ENTITY_TITLE,
                                  children: null == s ? void 0 : s.title,
                              });
                    }, [L, s]),
                    w = (0, b.useMemo)(
                        () =>
                            (0, h.jsxs)('div', {
                                className: rX().textContainer,
                                children: [
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h1',
                                        className: (0, ew.$)(rX().text, rX().title),
                                        lineClamp: 1,
                                        'data-test-id': $.e8.trailer.TRAILER_MODAL_TITLE,
                                        children: u,
                                    }),
                                    O,
                                ],
                            }),
                        [O, u],
                    ),
                    { pattern: R, params: D } = null != (t = null == s ? void 0 : s.getSharingProps(a)) ? t : { pattern: lj.Z.main.href, params: {} },
                    { shareLink: B } = (0, rq.b)(R, { params: D, query: { [lh.K.OPEN_TRAILER]: 'true' } }),
                    F = (0, b.useCallback)(async () => {
                        (await window.navigator.clipboard.writeText(B),
                            A(
                                (0, h.jsx)(r$.D, {
                                    entityTitle: null == s ? void 0 : s.title,
                                    entityVariant: ((e) => {
                                        switch (e) {
                                            case rL.H.ALBUM:
                                                return rG.Y.ALBUM;
                                            case rL.H.ARTIST:
                                                return rG.Y.ARTIST;
                                            case rL.H.PLAYLIST:
                                                return rG.Y.PLAYLIST;
                                            case rL.H.TRACK:
                                                return rG.Y.TRACK;
                                        }
                                    })(a),
                                }),
                                { containerId: er.u.INFO },
                            ));
                    }, [B, A, null == s ? void 0 : s.title, a]);
                return (0, h.jsxs)('div', {
                    className: (0, ew.$)(rX().root, n),
                    'data-test-id': $.e8.trailer.TRAILER_HEADER,
                    children: [
                        i ? (0, h.jsx)('div', { className: rX().coverContainer, children: (0, h.jsx)(eh.W, { isActive: l, radius: g, className: rX().cover }) }) : P,
                        i
                            ? ((e) =>
                                  (0, h.jsxs)('div', {
                                      className: rX().textContainer,
                                      children: [
                                          (0, h.jsx)('div', {
                                              className: rX().shimmerContainer,
                                              children: (0, h.jsx)(eh.W, { isActive: e, radius: 'xl', className: rX().titleShimmer }),
                                          }),
                                          (0, h.jsx)('div', {
                                              className: rX().shimmerContainer,
                                              children: (0, h.jsx)(eh.W, { isActive: e, radius: 'xl', className: rX().descriptionShimmer }),
                                          }),
                                      ],
                                  }))(l)
                            : w,
                        !i &&
                            d &&
                            (0, h.jsx)(Q.$, {
                                className: rX().share,
                                icon: (0, h.jsx)(G.I, { variant: 'share', size: 'xxs' }),
                                onClick: F,
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                            }),
                        !i &&
                            (0, h.jsx)(rQ.L, {
                                customMessage: p ? j : void 0,
                                shouldForceOpenTooltip: !!m,
                                children: (0, h.jsx)(e7.D, {
                                    className: rX().playButton,
                                    iconSize: 'm',
                                    variant: 'filled',
                                    isPlaying: I,
                                    iconClassName: rX().playButtonIcon,
                                    onClick: k,
                                }),
                            }),
                    ],
                });
            });
            var r0 = a(73805),
                r1 = a(99479),
                r2 = a(56712),
                r4 = a(33133),
                r8 = a.n(r4);
            let r6 = (0, y.PA)((e) => {
                let { track: t, albumArtists: a, position: i, playContextParams: l, withLightning: n, onPlayClick: s, onLikeClick: r, onDislikeClick: o } = e,
                    {
                        trailer: c,
                        settings: { isMobile: d },
                        album: u,
                    } = (0, N.g)(),
                    _ = (0, e5.D)({ playContextParams: l, entityId: t.entityId, sonataState: c.state, playbackId: rg.V.TRAILER }),
                    m = (0, b.useCallback)((e) => (0, h.jsx)(r1.G, { track: t, position: i, className: r8().playButtonCell, ...e }), [t, i]);
                return (0, h.jsx)(r2.C, {
                    track: t,
                    withLightning: n,
                    meta: (0, h.jsx)(nv.j, { withArtistLink: !d, albumArtists: a, track: t, withSavingQueryParams: u.id === t.albumId }),
                    playButtonCellRender: m,
                    onPlayClick: s,
                    controls: (0, h.jsx)(r0.Q, { withLightning: n, track: t, className: r8().controlsBarCell, onLikeClick: r, onDislikeClick: o }),
                    skipFreemiumCloseListeningPaywall: !0,
                    ..._,
                    'data-test-id': $.Kq.track.TRACK_ALBUM,
                });
            });
            var r3 = a(39267),
                r5 = a(26243),
                r9 = a.n(r5);
            let r7 = (0, y.PA)((e) => {
                    let { track: t, playContextParams: a, onPlayClick: i, onLikeClick: l, onDislikeClick: n } = e,
                        {
                            trailer: s,
                            settings: { isMobile: r },
                        } = (0, N.g)(),
                        o = (0, e5.D)({ playContextParams: a, entityId: t.entityId, sonataState: s.state, playbackId: rg.V.TRAILER }),
                        c = (0, b.useCallback)(
                            (e) =>
                                (0, h.jsx)(r3.q, {
                                    isAvailable: t.isAvailable,
                                    isDisliked: t.isDisliked,
                                    coverUri: t.coverUri,
                                    title: t.title,
                                    className: r9().playButtonCell,
                                    radius: 'xs',
                                    ...e,
                                }),
                            [t],
                        );
                    return (0, h.jsx)(r2.C, {
                        track: t,
                        meta: (0, h.jsx)(nv.j, { withArtistLink: !r, track: t }),
                        playButtonCellRender: c,
                        onPlayClick: i,
                        controls: (0, h.jsx)(r0.Q, { track: t, className: r9().controlsBarCell, onLikeClick: l, onDislikeClick: n }),
                        skipFreemiumCloseListeningPaywall: !0,
                        ...o,
                        'data-test-id': $.Kq.track.TRACK_PLAYLIST,
                    });
                }),
                oe = (0, tl.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e) => {
                    let t = (0, ta.s)(),
                        { hash: a } = (0, ti.g)(),
                        { screen: i, block: l, object: n } = (0, rA.j)(),
                        s = null == i ? void 0 : i.pageId,
                        { blockType: r, blockId: o, blockPosX: c, blockPosY: d, objectsCount: u } = null != l ? l : {},
                        { objectType: _, objectId: m, objectPosX: p, objectPosY: v } = null != n ? n : {};
                    return (0, b.useCallback)(
                        (i) => {
                            if (
                                !t ||
                                !s ||
                                void 0 === a ||
                                void 0 === e ||
                                void 0 === r ||
                                void 0 === o ||
                                void 0 === c ||
                                void 0 === d ||
                                void 0 === u ||
                                void 0 === _ ||
                                void 0 === m ||
                                void 0 === p ||
                                void 0 === v
                            )
                                return;
                            let l = {
                                hash: a,
                                pageId: s,
                                mainObjectType: C.DomainObjectType.Trailer,
                                mainObjectId: e,
                                entityType: r,
                                entityId: o,
                                entityPosX: c,
                                entityPosY: d,
                                objectsCount: u,
                                objectType: _,
                                objectId: m,
                                objectPosX: p,
                                objectPosY: v,
                                userInteractionType: C.UserInteractionType.Tap,
                                actionType: i ? C.ActionType.Dislike : C.ActionType.Undislike,
                            };
                            (0, tt.h_)(t.evgenInstance, l);
                        },
                        [t, o, c, d, r, a, e, m, p, v, _, u, s],
                    );
                }),
                ot = (0, tl.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e) => {
                    let t = (0, ta.s)(),
                        { hash: a } = (0, ti.g)(),
                        { screen: i, block: l, object: n } = (0, rA.j)(),
                        s = null == i ? void 0 : i.pageId,
                        { blockType: r, blockId: o, blockPosX: c, blockPosY: d, objectsCount: u } = null != l ? l : {},
                        { objectType: _, objectId: m, objectPosX: p, objectPosY: v } = null != n ? n : {};
                    return (0, b.useCallback)(
                        (i) => {
                            if (
                                !t ||
                                !s ||
                                void 0 === a ||
                                void 0 === e ||
                                void 0 === r ||
                                void 0 === o ||
                                void 0 === c ||
                                void 0 === d ||
                                void 0 === u ||
                                void 0 === _ ||
                                void 0 === m ||
                                void 0 === p ||
                                void 0 === v
                            )
                                return;
                            let l = {
                                hash: a,
                                pageId: s,
                                mainObjectType: C.DomainObjectType.Trailer,
                                mainObjectId: e,
                                entityType: r,
                                entityId: o,
                                entityPosX: c,
                                entityPosY: d,
                                objectsCount: u,
                                objectType: _,
                                objectId: m,
                                objectPosX: p,
                                objectPosY: v,
                                userInteractionType: C.UserInteractionType.Tap,
                                actionType: i ? C.ActionType.Like : C.ActionType.Unlike,
                            };
                            (0, tt.h_)(t.evgenInstance, l);
                        },
                        [t, o, c, d, r, a, e, m, p, v, _, u, s],
                    );
                }),
                oa = (0, tl.n)({ event: 'LandingBlock.Started/ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e) => {
                    let t = (0, ta.s)(),
                        { hash: a } = (0, ti.g)(),
                        { screen: i, block: l, object: n } = (0, rA.j)(),
                        s = null == i ? void 0 : i.pageId,
                        { blockType: r, blockId: o, blockPosX: c, blockPosY: d, objectsCount: u } = null != l ? l : {},
                        { objectType: _, objectId: m, objectPosX: p, objectPosY: v } = null != n ? n : {};
                    return (0, b.useCallback)(
                        (i) => {
                            if (
                                !t ||
                                !s ||
                                void 0 === a ||
                                void 0 === e ||
                                void 0 === r ||
                                void 0 === o ||
                                void 0 === c ||
                                void 0 === d ||
                                void 0 === u ||
                                void 0 === _ ||
                                void 0 === m ||
                                void 0 === p ||
                                void 0 === v
                            )
                                return;
                            let l = {
                                hash: a,
                                pageId: s,
                                mainObjectType: C.DomainObjectType.Trailer,
                                mainObjectId: e,
                                entityType: r,
                                entityId: o,
                                entityPosX: c,
                                entityPosY: d,
                                objectsCount: u,
                                objectType: _,
                                objectId: m,
                                objectPosX: p,
                                objectPosY: v,
                            };
                            i
                                ? (0, tt.er)(t.evgenInstance, l)
                                : (0, tt.h_)(t.evgenInstance, { ...l, actionType: C.ActionType.Pause, userInteractionType: C.UserInteractionType.Tap });
                        },
                        [t, o, c, d, r, a, e, m, p, v, _, u, s],
                    );
                });
            var oi = a(11146),
                ol = a.n(oi);
            let on = (0, y.PA)((e) => {
                let { variant: t, track: a, playContextParams: i } = e,
                    {
                        trailer: { meta: l, objectId: n },
                    } = (0, N.g)(),
                    s = t === rL.H.ALBUM ? r6 : r7,
                    { isActive: r, progress: o } = ((e, t) => {
                        var a;
                        let i = (0, aB.e)(),
                            {
                                trailer: { state: l },
                            } = (0, N.g)(),
                            [n, s] = (0, b.useState)(0),
                            r = (null == (a = l.entityMeta) ? void 0 : a.id) === e;
                        return (
                            (0, b.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.getState(rg.V.TRAILER).playerState.progress.onChange(() => {
                                              let e,
                                                  a = i.getState(rg.V.TRAILER).playerState,
                                                  l = a.progress.value;
                                              ((e = t ? t / 1e3 : l.duration), r || s(0), a.status.value === sx.MT.PLAYING && r && s((l.position / e) * 100));
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, r, i]),
                            { isActive: r, progress: n }
                        );
                    })(a.id, a.durationMs),
                    c = oa(n),
                    d = ot(n),
                    u = oe(n),
                    _ = (0, b.useMemo)(() => ({ '--track-progress': ''.concat(o || 0, '%') }), [o]);
                return (0, h.jsx)('div', {
                    className: (0, ew.$)(ol().root, { [ol().root_active]: r }),
                    style: _,
                    children: (0, h.jsx)(s, {
                        position: a.positionInAlbum,
                        withLightning: !!(null == a ? void 0 : a.isBest),
                        track: a,
                        playContextParams: i,
                        albumArtists: null == l ? void 0 : l.albumArtists,
                        onPlayClick: c,
                        onLikeClick: d,
                        onDislikeClick: u,
                    }),
                });
            });
            var os = a(12708),
                or = a.n(os);
            let oo = (0, y.PA)((e) => {
                let { variant: t } = e,
                    {
                        trailer: a,
                        playlist: { setShouldShowTrailerOnboarding: i },
                    } = (0, N.g)(),
                    {
                        isLoading: l,
                        isRejected: n,
                        tracks: s,
                        meta: r,
                        state: o,
                        shouldAutoStartPlaying: c,
                        setShouldAutoStartPlaying: d,
                        isNotFound: u,
                        modal: _,
                        utmLink: m,
                    } = a,
                    p = (0, aB.e)(),
                    { from: v } = rM({ variant: t, blockId: rS.U.TRAILER, meta: r }),
                    x = rI(),
                    y = rk(),
                    [g, A] = (0, b.useState)(!1),
                    f = l || n,
                    { isPlaying: T } = (0, e5.D)({
                        playContextParams: {
                            contextData: rP({ variant: t, id: null == r ? void 0 : r.id, uuid: null == r ? void 0 : r.uuid, from: v, utmLink: m }),
                            loadContextMeta: !0,
                        },
                        sonataState: a.state,
                        playbackId: rg.V.TRAILER,
                    });
                ((0, b.useEffect)(() => {
                    _.isOpened &&
                        (null == r ? void 0 : r.id) &&
                        c &&
                        (x(a.objectId),
                        null == p ||
                            p
                                .playContext(
                                    {
                                        contextData: rP({ variant: t, id: null == r ? void 0 : r.id, uuid: null == r ? void 0 : r.uuid, from: v, utmLink: m }),
                                        queueParams: { index: 0 },
                                        loadContextMeta: !0,
                                    },
                                    rg.V.TRAILER,
                                )
                                .then(() => {
                                    A(!0);
                                }),
                        d(!1));
                }, [v, null == r ? void 0 : r.id, null == r ? void 0 : r.uuid, _.isOpened, x, y, d, c, p, o.status, a.objectId, t, m, T]),
                    (0, b.useEffect)(() => {
                        g && (T ? (y(a.objectId), A(!1)) : i(!0));
                    }, [g, T, y, a.objectId, i]));
                let j = (0, b.useCallback)(
                        (e) => ({
                            contextData: rP({ variant: t, id: null == r ? void 0 : r.id, uuid: null == r ? void 0 : r.uuid, from: v, utmLink: m }),
                            queueParams: { index: e },
                            loadContextMeta: !0,
                        }),
                        [v, null == r ? void 0 : r.id, null == r ? void 0 : r.uuid, t, m],
                    ),
                    S = (0, b.useMemo)(
                        () =>
                            f
                                ? ((e, t) => {
                                      let a = t === rL.H.ALBUM ? eH.X.ALBUM : eH.X.PLAYLIST;
                                      return Array.from({ length: t === rL.H.TRACK ? 1 : 5 }, (t, i) =>
                                          (0, h.jsx)(
                                              'div',
                                              {
                                                  className: or().trackContainer,
                                                  children: (0, h.jsx)(eY.D, {
                                                      isActive: e,
                                                      className: (0, ew.$)(or().trackShimmer, { [or().albumShimmer]: a === eH.X.ALBUM }),
                                                      variant: a,
                                                  }),
                                              },
                                              i,
                                          ),
                                      );
                                  })(l, t)
                                : null == s
                                  ? void 0
                                  : s.map((e, a) =>
                                        (0, h.jsx)(
                                            rj.F,
                                            {
                                                blockType: C.DomainObjectType.SmartPreview,
                                                blockId: e.id,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                objectsCount: s.length,
                                                children: (0, h.jsx)(rN.B, {
                                                    objectType: C.DomainObjectType.SmartPreview,
                                                    objectId: e.id,
                                                    objectPosX: 1,
                                                    objectPosY: a + 1,
                                                    children: (0, h.jsx)(on, { variant: t, track: e, playContextParams: j(a) }),
                                                }),
                                            },
                                            e.id,
                                        ),
                                    ),
                        [j, l, f, s, t],
                    );
                return n
                    ? u
                        ? (0, h.jsx)(rD, {})
                        : (0, h.jsx)(rR, {})
                    : (0, h.jsxs)('div', {
                          className: or().root,
                          children: [
                              (0, h.jsx)(rJ, { isShimmerVisible: f, isShimmerActive: l, variant: t, className: or().header }),
                              S,
                              (0, h.jsx)(rH, { isShimmerVisible: f, isShimmerActive: l, variant: t, className: or().footer }),
                          ],
                      });
            });
            var oc = a(25378),
                od = a.n(oc);
            let ou = (0, y.PA)(() => {
                let {
                        settings: { isMobile: e },
                        trailer: t,
                        sonataState: a,
                        fullscreenPlayer: i,
                    } = (0, N.g)(),
                    l = (0, aB.e)(),
                    { contentRef: n } = (0, j.g)(),
                    { formatMessage: s } = (0, q.A)(),
                    r = rf();
                ((() => {
                    let { trailer: e } = (0, N.g)(),
                        t = (0, aB.e)(),
                        a = (0, rp.z)(),
                        i = (0, e4.K)(e.state.entityMeta),
                        l = (0, rT.m)(e.state.entityMeta);
                    ((0, b.useEffect)(() => {
                        e.modal.isOpened
                            ? (null == a || a.disable(rm.M.MAIN),
                              null == a || a.enable(rm.M.MAIN, r_.l.TOGGLE_MUTE),
                              null == a || a.enable(rm.M.MAIN, r_.l.INCREASE_VOLUME),
                              null == a || a.enable(rm.M.MAIN, r_.l.DECREASE_VOLUME),
                              null == a || a.enable(rm.M.MAIN, r_.l.TOGGLE_FULLSCREEN_PLAYER),
                              null == a || a.enable(rm.M.TRAILER))
                            : (null == a || a.disable(rm.M.TRAILER), null == a || a.enable(rm.M.MAIN));
                    }, [a, e.modal.isOpened]),
                        (0, b.useEffect)(
                            () => (
                                null == a ||
                                    a.addShortcutsListener(rm.M.TRAILER, r_.l.TOGGLE_PLAY, () => {
                                        null == t || t.togglePause(rg.V.TRAILER);
                                    }),
                                null == a || a.addShortcutsListener(rm.M.TRAILER, r_.l.LIKE, i),
                                null == a || a.addShortcutsListener(rm.M.TRAILER, r_.l.DISLIKE, l),
                                null == a ||
                                    a.addShortcutsListener(rm.M.TRAILER, r_.l.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(rg.V.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == t ? void 0 : t.moveForward(rg.V.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(rm.M.TRAILER, r_.l.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(rg.V.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == t ? void 0 : t.moveBackward(rg.V.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(rm.M.TRAILER, r_.l.SLIDE_FORWARD, async () => {
                                        (null == t ? void 0 : t.getState(rg.V.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideForward(1, rg.V.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(rm.M.TRAILER, r_.l.SLIDE_BACKWARD, async () => {
                                        (null == t ? void 0 : t.getState(rg.V.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideBackward(1, rg.V.TRAILER)));
                                    }),
                                () => {
                                    (null == a || a.removeShortcutsListener(rm.M.TRAILER, r_.l.TOGGLE_PLAY),
                                        null == a || a.removeShortcutsListener(rm.M.TRAILER, r_.l.LIKE),
                                        null == a || a.removeShortcutsListener(rm.M.TRAILER, r_.l.DISLIKE),
                                        null == a || a.removeShortcutsListener(rm.M.TRAILER, r_.l.MOVE_FORWARD),
                                        null == a || a.removeShortcutsListener(rm.M.TRAILER, r_.l.MOVE_BACKWARD),
                                        null == a || a.removeShortcutsListener(rm.M.TRAILER, r_.l.SLIDE_FORWARD),
                                        null == a || a.removeShortcutsListener(rm.M.TRAILER, r_.l.SLIDE_BACKWARD));
                                }
                            ),
                            [l, i, a, t],
                        ));
                })(),
                    (0, b.useEffect)(() => {
                        let e =
                                null == l
                                    ? void 0
                                    : l.getState(rg.V.TRAILER).queueState.currentEntity.onChange((e) => {
                                          var a;
                                          let i = null == e ? void 0 : e.context.data.type,
                                              l = null == e ? void 0 : e.context.data.meta.id;
                                          (t.state.setEntityMeta(null != (a = null == e ? void 0 : e.entity) ? a : null),
                                              i && t.state.setContextType(i),
                                              l && t.state.setContextId(l));
                                      }),
                            a =
                                null == l
                                    ? void 0
                                    : l.getState(rg.V.TRAILER).playerState.status.onChange((e) => {
                                          e && t.state.setStatus(e);
                                      });
                        return () => {
                            (null == e || e(), null == a || a());
                        };
                    }, [l, t.state]));
                let o = (0, b.useCallback)(() => {
                        null == l ||
                            l.stop(rg.V.TRAILER).finally(() => {
                                (t.sonataStatusBeforeTrailerStart !== sx.MT.PLAYING || t.isManuallyPaused || null == l || l.resume(),
                                    t.setAnimationState(!0),
                                    t.resetUtmLink(),
                                    t.modal.close(),
                                    r(t.objectId));
                            });
                    }, [r, l, t]),
                    c = (0, b.useCallback)(
                        (e) => {
                            (t.modal.onOpenChange(e), e || o());
                        },
                        [o, t.modal],
                    );
                return (
                    (0, b.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && a.status === sx.MT.PLAYING && o();
                    }, [o, a.status, t, t.modal.isOpened]),
                    (0, b.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && t.setAnimationState(!1);
                    }, [t]),
                    (0, b.useEffect)(() => {
                        i.modal.isOpened && t.modal.isOpened && o();
                    }, [i.modal.isOpened, o, t.modal.isOpened]),
                    (0, h.jsxs)(T.a, {
                        size: 'fitContent',
                        placement: e ? 'default' : 'right',
                        open: t.modal.isOpened,
                        onOpenChange: c,
                        onClose: o,
                        className: od().root,
                        contentClassName: od().modalContent,
                        portalNode: e ? null : n,
                        showHeader: !1,
                        withOverlay: e,
                        closeOnOutsidePress: e,
                        'data-test-id': $.e8.trailer.TRAILER_MODAL,
                        withAnimation: t.withAnimation,
                        isMobile: e,
                        lockScroll: e,
                        overlayColor: 'full',
                        enableSwipe: !0,
                        children: [
                            !e &&
                                (0, h.jsx)('div', {
                                    className: od().header,
                                    children: (0, h.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, h.jsx)(G.I, { variant: 'close', size: 'xxs' }),
                                        onClick: o,
                                        'aria-label': s({ id: 'trailer.close' }),
                                        'data-test-id': $.e8.trailer.TRAILER_CLOSE_BUTTON,
                                    }),
                                }),
                            t.variant && (0, h.jsx)(oo, { variant: t.variant }),
                        ],
                    })
                );
            });
            var o_ = a(53301);
            let om = (0, tl.n)({ event: 'Screen.Closed', kind: 'hook', requiredScopes: [] }, () => {
                    let e = (0, ta.s)(),
                        { hash: t } = (0, ti.g)();
                    return (0, f.c)((a) => {
                        if (!e || void 0 === t || void 0 === a) return;
                        let i = { hash: t, pageId: C.AppScreen.VideoScreen, mainObjectType: C.DomainObjectType.Video, mainObjectId: a };
                        (0, rb.XB)(e.evgenInstance, i);
                    });
                }),
                op = (0, tl.n)({ event: 'Screen.Opened', kind: 'hook', requiredScopes: [] }, () => {
                    let e = (0, ta.s)(),
                        { hash: t } = (0, ti.g)();
                    return (0, f.c)((a) => {
                        if (!e || void 0 === t || void 0 === a) return;
                        let i = { hash: t, pageId: C.AppScreen.VideoScreen, mainObjectType: C.DomainObjectType.Video, mainObjectId: a };
                        (0, rb.w5)(e.evgenInstance, i);
                    });
                });
            var ov = a(53073),
                ox = a(83418);
            async function oh(e) {
                var t;
                let a = await (0, P.W)(e.locale),
                    i = a({ id: 'metadata.main-description' }),
                    l = a({ id: 'metadata.main-title' });
                return {
                    title: l,
                    description: i,
                    openGraph: (0, R.i)({
                        ogTitle: l,
                        ogDescription: i,
                        ogType: 'website',
                        fullUrl: null != (t = e.fullUrl) ? t : '',
                        locale: e.locale,
                        siteName: a({ id: 'metadata.yandex-music' }),
                        customImage: (0, ox.v)({ host: e.host }),
                    }),
                    facebook: (0, ov.k)(),
                    twitter: (0, D.H)({ cardType: B.W.SUMMARY_LARGE_IMAGE, title: l, description: i }),
                    alternates: (0, F.S)(lj.Z.main.href, e.tld),
                };
            }
            var oy = a(10325),
                oC = a(18610),
                og = a(29201),
                ob = a(35396);
            async function oA(e) {
                var t, a, i, l, n, s, r;
                let o,
                    c,
                    { clipMeta: d, additional: u } = e,
                    _ = await (0, P.W)(u.locale);
                return (
                    d
                        ? ((o = _(
                              { id: 'metadata.clips-title' },
                              { clipTitle: d.title, clipArtists: null == (a = d.artists) || null == (t = a.map((e) => e.name)) ? void 0 : t.join(', ') },
                          )),
                          (c = _(
                              { id: 'metadata.clips-description' },
                              { clipTitle: d.title, clipArtists: null == (l = d.artists) || null == (i = l.map((e) => e.name)) ? void 0 : i.join(', ') },
                          )))
                        : ((o = _({ id: 'metadata.clips-title-default' })), (c = _({ id: 'metadata.clips-description-default' }))),
                    {
                        title: o,
                        description: c,
                        openGraph: (0, R.i)({
                            ogTitle: o,
                            ogDescription: c,
                            ogType: 'website',
                            fullUrl: null != (n = u.fullUrl) ? n : '',
                            locale: u.locale,
                            customImage: (0, ox.v)({ host: u.host }),
                            siteName: _({ id: 'metadata.yandex-music' }),
                        }),
                        twitter: (0, D.H)({ cardType: B.W.SUMMARY_LARGE_IMAGE, title: o, description: c }),
                        facebook: (0, ov.k)(),
                        appLinks: (0, M.X)({
                            additional: { ...u, url: null != (s = u.url) ? s : '', fullUrl: null != (r = u.fullUrl) ? r : '', host: u.host },
                            appName: _({ id: 'metadata.yandex-music' }),
                        }),
                    }
                );
            }
            var of = a(38769),
                oT = a(55482),
                oj = a(93671),
                oN = a(86535),
                oS = a(94058),
                oI = a(86200),
                ok = a(777),
                oL = a(8641),
                oE = a(28692),
                oM = a(99313),
                oP = a(51976);
            let oO = (0, y.PA)((e) => {
                let { className: t } = e,
                    { fullscreenVideoPlayer: a } = (0, N.g)(),
                    i = (0, aB.e)(),
                    { from: l } = (0, eK.f)({ pageId: rE.b.VIDEO_PLAYER, contextId: a.state.contextId, contextType: eU.K.Various }),
                    n = (0, f.c)(() => {
                        null == i || i.moveForward(rg.V.CLIP);
                    }),
                    s = (0, f.c)(() => {
                        null == i || i.moveBackward(rg.V.CLIP);
                    }),
                    { isPlaying: r, togglePlay: o } = (0, e5.D)({
                        playContextParams: { contextData: { type: eU.K.Various, meta: { id: oM.H.VARIOUS_CLIP_CONTEXT }, from: l }, loadContextMeta: !0 },
                        sonataState: a.state,
                        playbackId: rg.V.CLIP,
                    });
                return (0, h.jsx)(oP.Z, {
                    className: t,
                    isPlaying: r,
                    canMoveBackward: a.state.canMoveBackward,
                    canMoveForward: a.state.canMoveForward,
                    canShuffle: !1,
                    onClickPlayPause: o,
                    onClickNext: n,
                    onClickPrev: s,
                    canChangeRepeatMode: !1,
                    shuffle: !1,
                    repeatMode: oE.pM.NONE,
                });
            });
            var ow = a(17610),
                oR = a(17387),
                oD = a(6667),
                oB = a(24548),
                oF = a(10782),
                oU = a.n(oF);
            let oV = (0, y.PA)((e) => {
                let {
                        className: t,
                        clip: a,
                        withExplicitMark: i = !0,
                        withSecondaryColor: l,
                        captionSize: n = 'm',
                        explicitSize: s = 'xxxs',
                        withAllArtistsTitle: r,
                        withCustomTooltip: o = !0,
                        hasLineClamp: c = !0,
                        withArtistLink: d,
                    } = e,
                    u = (0, oD.$)({ withCustomTooltip: o }),
                    _ = (0, b.useCallback)(
                        (e) => {
                            let t = String(a.title);
                            return (0, h.jsx)(ow.m_, {
                                enabled: u,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: oB.V,
                                children: (0, h.jsx)(ed.HL, {
                                    className: (0, ew.$)(oU().text, oU().title),
                                    type: 'entity',
                                    size: n,
                                    weight: 'medium',
                                    variant: 'span',
                                    'data-test-id': e,
                                    children: a.title,
                                }),
                            });
                        },
                        [u, n, a.title],
                    ),
                    m = (0, b.useMemo)(() => _($.Kq.clip.CLIP_META_TITLE), [_]),
                    p = (0, oR.s)(a.artists);
                return (0, h.jsx)('div', {
                    className: (0, ew.$)(oU().root, { [oU().root_withSecondaryColor]: l }, t),
                    children: (0, h.jsxs)('div', {
                        className: oU().metaContainer,
                        children: [
                            (0, h.jsxs)('div', {
                                className: oU().titleContainer,
                                children: [
                                    (0, h.jsx)(ed.HL, { type: 'entity', size: n, weight: 'medium', variant: 'div', lineClamp: 1, children: m }),
                                    a.explicitDisclaimer &&
                                        i &&
                                        (0, h.jsx)(eX.N, {
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: s,
                                            variant: a.explicitDisclaimer,
                                            className: oU().explicitMark,
                                            trackId: String(a.clipId),
                                        }),
                                ],
                            }),
                            p.length > 0 &&
                                (0, h.jsx)(eZ.i, {
                                    linkClassName: oU().link,
                                    captionClassName: oU().artistCaption,
                                    artists: p,
                                    withLink: d,
                                    lineClamp: +!!c,
                                    captionSize: n,
                                    withAllArtistsTitle: r,
                                    withCustomTooltip: u,
                                }),
                        ],
                    }),
                });
            });
            var oz = a(72806),
                oK = a.n(oz);
            let oH = (0, y.PA)((e) => {
                    let { entityMeta: t, onLikeClick: a, onContextMenuOpenChange: i, isContextMenuOpened: l } = e,
                        { user: n, sonataState: s, fullscreenVideoPlayer: r, freeAccess: o } = (0, N.g)(),
                        c = (0, oL.d)(),
                        d = (0, f.c)(async (e) => {
                            await c(s, e);
                        }),
                        u = (0, b.useMemo)(
                            () =>
                                t
                                    ? (0, h.jsx)('div', { className: oK().description, children: (0, h.jsx)(oV, { captionSize: 'l', clip: t, withSecondaryColor: !0 }) })
                                    : null,
                            [t],
                        );
                    return (0, h.jsxs)('section', {
                        className: oK().root,
                        children: [
                            (0, h.jsxs)('div', {
                                className: oK().info,
                                children: [
                                    (0, h.jsx)('div', { className: oK().infoCard, children: u }),
                                    (0, h.jsxs)('div', {
                                        className: oK().infoButtons,
                                        children: [
                                            r.clipActive &&
                                                (0, h.jsx)(ok.z, {
                                                    placement: 'top-start',
                                                    icon: (0, h.jsx)(G.I, { variant: 'more', size: 'm' }),
                                                    size: 'l',
                                                    clip: r.clipActive,
                                                    onOpenChange: i,
                                                    open: l,
                                                    'data-test-id': $.Kq.clip.CLIP_CONTEXT_MENU_BUTTON,
                                                }),
                                            t &&
                                                (0, h.jsx)(e9.c, {
                                                    className: oK().likeButton,
                                                    isLiked: t.isLiked,
                                                    iconSize: 'xs',
                                                    onClick: a,
                                                    disabled: !n.isAuthorized,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('div', {
                                className: oK().sonata,
                                children: [
                                    (0, h.jsx)(oO, {}),
                                    (0, h.jsx)(n_.v, {
                                        sliderClassName: (0, ew.$)(oK().slider, oK().important),
                                        disabled: !t,
                                        isMobile: !1,
                                        isFullscreen: !1,
                                        canMoveForward: r.state.canMoveForward,
                                        customDuration: (null == n ? void 0 : n.isAuthorized) && !o.isFreeDesktopUser ? void 0 : 29,
                                        sonataPlaybackId: rg.V.CLIP,
                                    }),
                                ],
                            }),
                            (0, h.jsx)('div', {
                                className: oK().meta,
                                children: (0, h.jsx)(oI.r, {
                                    sonataVolume: s.volume,
                                    onVolumeClick: d,
                                    horizontalSliderClassName: (0, ew.$)(oK().slider, oK().important),
                                }),
                            }),
                        ],
                    });
                }),
                oW = (0, y.PA)((e) => {
                    let { className: t, isSettingsMenuOpened: a, onSettingsMenuOpenChange: i, isContextMenuOpened: l, onContextMenuOpenChange: n } = e,
                        { fullscreenVideoPlayer: s } = (0, N.g)(),
                        r = (0, of.K)(s.state.entityMeta),
                        {
                            settings: { isMobile: o },
                        } = (0, N.g)();
                    return o
                        ? null
                        : (0, h.jsx)(oH, {
                              className: t,
                              onLikeClick: r,
                              entityMeta: s.state.entityMeta,
                              isSettingsMenuOpened: a,
                              onSettingsMenuOpenChange: i,
                              isContextMenuOpened: l,
                              onContextMenuOpenChange: n,
                          });
                });
            var oY = a(11451),
                oq = a.n(oY);
            let o$ = (0, y.PA)(() => {
                    let { fullscreenVideoPlayer: e } = (0, N.g)(),
                        { state: t, toggleTrue: a, toggleFalse: i } = (0, eA.e)(!1),
                        { state: l, toggleTrue: n, toggleFalse: s } = (0, eA.e)(!1),
                        { state: r, toggleTrue: o, toggleFalse: c } = (0, eA.e)(!1),
                        d = (0, b.useRef)(null),
                        [u, _] = (0, b.useState)(!1),
                        [m, p] = (0, b.useState)(!1),
                        v = m || u,
                        x = (0, b.useMemo)(
                            () =>
                                (0, oT.A)(() => {
                                    (i(), s());
                                }, 1500),
                            [s, i],
                        ),
                        y = (0, b.useMemo)(
                            () =>
                                (0, oT.A)(() => {
                                    s();
                                }, 1500),
                            [s],
                        ),
                        C = (0, f.c)(() => {
                            (y.cancel(), n(), o());
                        }),
                        g = (0, f.c)(() => {
                            (y(), c());
                        }),
                        A = (0, f.c)(() => {
                            u || m || x();
                        }),
                        T = (0, f.c)((e) => {
                            (e.stopPropagation(), x.cancel(), y.cancel(), a(), n(), x());
                        }),
                        j = (0, f.c)((e) => {
                            (e.stopPropagation(), x.cancel(), y.cancel(), a(), x());
                        }),
                        S = (0, f.c)(() => {
                            (t ? x.cancel() : a(), x());
                        });
                    // for PulseSync: BEGIN keep clip controls visible after pointer and keyboard activity
                    ((0, b.useEffect)(() => {
                        if (!e.modal.isOpened) return;
                        S();
                        window.addEventListener('pointermove', S);
                        window.addEventListener('pointerdown', S);
                        window.addEventListener('keydown', S);
                        return () => {
                            window.removeEventListener('pointermove', S);
                            window.removeEventListener('pointerdown', S);
                            window.removeEventListener('keydown', S);
                            x.cancel();
                            y.cancel();
                        };
                    }, [e.modal.isOpened, S, x, y]),
                        // for PulseSync: END keep clip controls visible after pointer and keyboard activity
                        (0, b.useEffect)(() => {
                            t || s();
                        }, [s, t]));
                    let I = e.state.status !== sx.MT.PLAYING,
                        k = (0, b.useMemo)(
                            () =>
                                (0, h.jsx)(oj.t, {
                                    className: oq().carousel,
                                    containerClassName: oq().carouselBlock,
                                    clipCardTitleClassName: (0, ew.$)(oq().clipCardTitle, oq().important),
                                    clipCardArtistLinkClassName: (0, ew.$)(oq().clipCardArtist, oq().important),
                                    isShimmerVisible: e.isLoading,
                                    isShimmerActive: !0,
                                    clips: e.clips,
                                    shouldOpenModalOnCardClick: !1,
                                    itemCounter: 5,
                                    ref: d,
                                }),
                            [e.clips, e.isLoading, d],
                        );
                    return (
                        (0, b.useEffect)(() => {
                            (l || r) && (a(), n());
                        }, [r, l, n, a]),
                        (0, h.jsxs)('div', {
                            className: (0, ew.$)(oq().root, { [oq().root_visible]: t || I || r || v, [oq().root_withHoveredCarousel]: l }),
                            onMouseEnter: a,
                            onMouseLeave: A,
                            onFocus: j,
                            children: [
                                (0, h.jsx)(oW, { isSettingsMenuOpened: u, onSettingsMenuOpenChange: _, isContextMenuOpened: m, onContextMenuOpenChange: p }),
                                (0, h.jsx)(rj.F, {
                                    blockId: oN.h.CLIPS_CAROUSEL,
                                    blockType: oN.h.CLIPS_CAROUSEL,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: e.clips.length,
                                    children: (0, h.jsx)('div', {
                                        className: oq().carouselContainer,
                                        onMouseEnter: C,
                                        onMouseLeave: g,
                                        onFocus: T,
                                        children: (0, h.jsx)(oS.F, {
                                            className: oq().carouselWrapper,
                                            carouselElement: k,
                                            ref: d,
                                            isCarouselBetweenArrows: !0,
                                            controlsWrapperClassName: oq().carouselControls,
                                            buttonSize: 'xs',
                                            buttonVariant: 'default',
                                            withSecondaryColor: !0,
                                        }),
                                    }),
                                }),
                            ],
                        })
                    );
                }),
                oQ = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? null : (0, h.jsx)(o$, {});
                });
            var oG = a(8299),
                oZ = a(42205),
                oX = a(16717),
                oJ = a(14912),
                o0 = a(93346),
                o1 = a.n(o0);
            let o2 = (0, y.PA)((e) => {
                let { closeModal: t, withAdaptiveAspectRatio: a } = e,
                    i = (0, b.useRef)(null),
                    l = (0, aB.e)(),
                    {
                        sonataState: { isVHCoreRegistered: n },
                        fullscreenVideoPlayer: s,
                        advert: r,
                    } = (0, N.g)(),
                    { from: o } = (0, eK.f)({ pageId: rE.b.VIDEO_PLAYER, contextId: s.state.contextId, contextType: eU.K.Various }),
                    c = (0, oJ.X)(),
                    { state: d, toggleFalse: u } = (0, eA.e)(!0),
                    { togglePlay: _ } = (0, e5.D)({
                        playContextParams: { contextData: { type: eU.K.Various, meta: { id: oM.H.VARIOUS_CLIP_CONTEXT }, from: o }, loadContextMeta: !0 },
                        sonataState: s.state,
                        playbackId: rg.V.CLIP,
                    }),
                    m = (0, oG.X)({ clip: s.clips[s.clipActiveIndex], callback: _, disclaimerRejectHandler: t });
                return (
                    (0, b.useEffect)(() => {
                        let e, t, a;
                        if (i.current && l && n) {
                            let n, d;
                            (s.setSonataStatusBeforeClipStart(),
                                l.setVideoCoreContainer({ container: i.current, playbackId: rg.V.CLIP }),
                                l
                                    .setContext(
                                        {
                                            contextData: { type: eU.K.Various, meta: { id: oM.H.VARIOUS_CLIP_CONTEXT }, from: o },
                                            entitiesData: s.entitiesData,
                                            queueParams: { index: s.clipActiveIndex },
                                            loadContextMeta: !1,
                                        },
                                        rg.V.CLIP,
                                    )
                                    .then(() => {
                                        r.isAdvertShown || m();
                                    }));
                            let u = l.getState(rg.V.CLIP);
                            ((e = u.queueState.currentEntity.onChange((e) => {
                                var t;
                                let a = null == e ? void 0 : e.context.data.type,
                                    i = null == e ? void 0 : e.context.data.meta.id,
                                    l = null == e ? void 0 : e.entity.data.meta.id;
                                if (l) {
                                    let e = (0, oZ.z)(s.ids, s.ids.indexOf(Number(l)));
                                    (s.setClipIndex(e), c((0, oX.J)(s.ids, e)));
                                }
                                (s.state.setEntityMeta(null != (t = null == e ? void 0 : e.entity) ? t : null),
                                    a && s.state.setContextType(a),
                                    i && s.state.setContextId(i));
                            })),
                                (t = u.playerState.status.onChange((e) => {
                                    e && s.state.setStatus(e);
                                })),
                                (a = u.currentContext.onChange((e) => {
                                    (null == n || n(),
                                        null == d || d(),
                                        (n =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveBackward.onChange((e) => {
                                                      s.state.setCanMoveBackward(!!e);
                                                  })),
                                        (d =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveForward.onChange((e) => {
                                                      s.state.setCanMoveForward(!!e);
                                                  })));
                                })));
                        }
                        return () => {
                            (null == l || l.destroyVideoCore(rg.V.CLIP),
                                s.isPlayingSonataStatusBeforeClipStart && (null == l || l.resume()),
                                null == e || e(),
                                null == t || t(),
                                null == a || a());
                        };
                    }, [l, n, s, o, c, _, m, r.isAdvertShown]),
                    (0, b.useEffect)(() => {
                        s.state.status === sx.MT.PLAYING && u();
                    }, [s.state.status, u]),
                    (0, h.jsxs)('div', {
                        className: o1().root,
                        children: [
                            (0, h.jsx)('div', { onClick: _, ref: i, className: (0, ew.$)(o1().container, { [o1().container_adaptiveAspectRatio]: a }) }),
                            (0, h.jsx)('div', {
                                className: (0, ew.$)(o1().loadingIndicator, { [o1().loadingIndicator_showed]: d }),
                                children: (0, h.jsx)(t1.y, { size: 'm' }),
                            }),
                        ],
                    })
                );
            });
            var o4 = a(73240),
                o8 = a.n(o4);
            let o6 = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, q.A)(),
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: t },
                            },
                            fullscreenVideoPlayer: a,
                            modals: { disclaimerModal: i },
                        } = (0, N.g)(),
                        { defaultLayoutRef: l } = (0, j.g)(),
                        n = (0, b.useCallback)(() => {
                            window.history.back();
                        }, []),
                        s = (0, oC.p)(),
                        { notify: r } = (0, eo.l)(),
                        o = (0, aB.e)(),
                        c = (0, tG.j)(),
                        d = op(),
                        u = om(),
                        [_] = a.ids,
                        [m, p] = (0, b.useState)(!1),
                        v = a.modal.isOpened,
                        x = (0, b.useCallback)(
                            (e) => {
                                if (m && !v && e.url === lj.Z.main.href) return oh(e);
                            },
                            [m, v],
                        );
                    (0, E.C)(x);
                    let y = (0, f.c)(() => {
                            let e = (0, oy.q)(lh.K.IDS),
                                t = (0, oy.q)(lh.K.ACTIVE_INDEX),
                                { clipIds: i, activeClipIndex: l } = (0, o_.V)(e, t);
                            i.length
                                ? (a.setIds(i), a.setClipIndex(l), a.setAnimationState(!1), null == o || o.setEntityByIndex(a.clipActiveIndex, rg.V.CLIP), a.modal.open())
                                : (a.modal.close(), a.reset());
                        }),
                        C = (0, f.c)(() => {
                            if (a.modal.isOpened && !i.isOpened) {
                                if ((a.setAnimationState(!0), _ && u(String(_)), a.isOpenedFromMain)) {
                                    (s(lj.Z.main.href), p(!0), a.modal.close(), a.reset());
                                    return;
                                }
                                n();
                            }
                        });
                    (((e) => {
                        let { fullscreenVideoPlayer: t, advert: a } = (0, N.g)(),
                            i = (0, aB.e)(),
                            l = (0, rp.z)(),
                            n = (0, of.K)(t.state.entityMeta);
                        (0, b.useEffect)(() => {
                            if (a.isAdvertShown) {
                                null == l || l.disable(rm.M.VIDEO_PLAYER);
                                return;
                            }
                            t.modal.isOpened
                                ? (null == l || l.disable(rm.M.MAIN),
                                  null == l || l.enable(rm.M.MAIN, r_.l.TOGGLE_MUTE),
                                  null == l || l.enable(rm.M.MAIN, r_.l.INCREASE_VOLUME),
                                  null == l || l.enable(rm.M.MAIN, r_.l.DECREASE_VOLUME),
                                  null == l || l.enable(rm.M.VIDEO_PLAYER))
                                : (null == l || l.disable(rm.M.VIDEO_PLAYER), null == l || l.enable(rm.M.MAIN));
                        }, [l, t.modal.isOpened, a.isAdvertShown]);
                        let s = null == i ? void 0 : i.getState(rg.V.CLIP);
                        (0, b.useEffect)(
                            () => (
                                null == l || l.addShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.CLOSE, e),
                                null == l ||
                                    l.addShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.TOGGLE_PLAY, () => {
                                        null == i || i.togglePause(rg.V.CLIP);
                                    }),
                                null == l || l.addShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.LIKE, n),
                                null == l ||
                                    l.addShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == s || null == (e = s.currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == i ? void 0 : i.moveForward(rg.V.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == s || null == (e = s.currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == i ? void 0 : i.moveBackward(rg.V.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.SLIDE_FORWARD, async () => {
                                        (null == s ? void 0 : s.playerState.progress.value.duration) && (await (null == i ? void 0 : i.slideForward(1, rg.V.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.SLIDE_BACKWARD, async () => {
                                        (null == s ? void 0 : s.playerState.progress.value.duration) && (await (null == i ? void 0 : i.slideBackward(1, rg.V.CLIP)));
                                    }),
                                () => {
                                    (null == l || l.removeShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.CLOSE),
                                        null == l || l.removeShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.TOGGLE_PLAY),
                                        null == l || l.removeShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.LIKE),
                                        null == l || l.removeShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.MOVE_FORWARD),
                                        null == l || l.removeShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.MOVE_BACKWARD),
                                        null == l || l.removeShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.SLIDE_FORWARD),
                                        null == l || l.removeShortcutsListener(rm.M.VIDEO_PLAYER, r_.l.SLIDE_BACKWARD));
                                }
                            ),
                            [l, t.ids, e, n, i, s, a.isAdvertShown],
                        );
                    })(C),
                        0 === a.ids.length && C(),
                        (0, b.useEffect)(
                            () => () => {
                                (a.reset(), t.setIsShowBanner(!0));
                            },
                            [a, t, t.setIsShowBanner],
                        ),
                        (0, b.useEffect)(() => {
                            a.modal.isOpened ? t.setIsShowBanner(!1) : t.setIsShowBanner(!0);
                        }, [a.modal.isOpened, t, t.setIsShowBanner]));
                    let g = (0, f.c)(() => {
                        (a.setAnimationState(!0), _ && u(String(_)), s(lj.Z.main.href), a.modal.close(), a.reset());
                    });
                    return (
                        (0, b.useEffect)(() => {
                            if (a.isNotFound || a.isSomethingWrong) {
                                C();
                                let t = a.modal.isOpened ? er.u.FULLSCREEN_ERROR : er.u.ERROR;
                                r((0, h.jsx)(ec.h, { error: e({ id: 'error-messages.something-went-wrong' }) }), { containerId: t });
                            }
                        }, [a.isNotFound, a.isSomethingWrong, a.modal.isOpened, C, e, r]),
                        (0, b.useEffect)(() => {
                            a.modal.isOpened && _ && d(String(_));
                        }, [a.modal.isOpened, d, _]),
                        (0, b.useEffect)(
                            () => (
                                window.addEventListener('popstate', y),
                                () => {
                                    window.removeEventListener('popstate', y);
                                }
                            ),
                            [y],
                        ),
                        ((e) => {
                            let t = null == e ? void 0 : e.clips[0],
                                a = null == e ? void 0 : e.modal.isOpened,
                                i = null == e ? void 0 : e.isLoading,
                                l = (0, b.useCallback)(
                                    (e) => {
                                        if (a && t && !i)
                                            return oA({
                                                clipMeta: ((e) => {
                                                    var t;
                                                    if (!e)
                                                        return {
                                                            clipId: 0,
                                                            title: '',
                                                            artists: [],
                                                            thumbnail: '',
                                                            previewUrl: '',
                                                            duration: 0,
                                                            disclaimers: [],
                                                            trackIds: [],
                                                        };
                                                    let a = [];
                                                    return (
                                                        (null == (t = e.disclaimers) ? void 0 : t.every((e) => (0, ob.C)(e))) && (a = (0, og.H)(e.disclaimers)),
                                                        {
                                                            clipId: e.clipId,
                                                            title: e.title,
                                                            thumbnail: e.thumbnail,
                                                            previewUrl: e.previewUrl,
                                                            duration: e.duration,
                                                            disclaimers: a,
                                                            version: e.version,
                                                            artists: e.artists.map((e) => {
                                                                let t = (0, k.N)(e),
                                                                    a = Number(t.id);
                                                                return { ...t, id: isNaN(a) ? 0 : a };
                                                            }),
                                                            trackIds: [],
                                                        }
                                                    );
                                                })(t),
                                                additional: e,
                                            });
                                    },
                                    [t, i, a],
                                );
                            (0, E.C)(l);
                        })(a),
                        (0, b.useEffect)(() => {
                            a.isNeededToLoad && a.modal.isOpened && _ && a.getClips();
                        }, [a, a.isNeededToLoad, a.modal.isOpened, _]),
                        (0, h.jsxs)(T.a, {
                            className: (0, ew.$)(o8().root, o8().important),
                            open: a.modal.isOpened,
                            onOpenChange: a.modal.onOpenChange,
                            onClose: C,
                            portalNode: l,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            contentClassName: o8().modalContent,
                            closeOnOutsidePress: !1,
                            escapeKey: !1,
                            transitionDuration: 300 * !!a.withAnimation,
                            'data-test-id': $.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_MODAL,
                            children: [
                                (0, h.jsxs)('header', {
                                    className: o8().header,
                                     // for PulseSync: BEGIN mark active clip playback for titlebar and header styling
                                     'data-pulsesync-clip-open': v ? '' : void 0,
                                     // for PulseSync: END mark active clip playback for titlebar and header styling
                                    children: [
                                        (0, h.jsx)(Q.$, {
                                            className: o8().closeButton,
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'm',
                                            icon: (0, h.jsx)(G.I, { variant: 'arrowDown', size: 'xs' }),
                                            onClick: C,
                                            'aria-label': e({ id: 'interface-actions.close' }),
                                            'data-test-id': $.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_CLOSE_BUTTON,
                                        }),
                                        (0, h.jsx)(af.N, {
                                            className: o8().logoLink,
                                            href: '/',
                                            onClick: g,
                                            'aria-label': e({ id: 'navigation.page-main' }),
                                            'data-test-id': $.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_LABEL_BUTTON,
                                            children: (0, h.jsx)(G.I, { variant: 'musicLogoCenter'.concat(c), className: o8()['logo_'.concat(c.toLocaleLowerCase())] }),
                                        }),
                                    ],
                                }),
                                (0, h.jsx)(o2, { closeModal: C, withAdaptiveAspectRatio: !0 }),
                                (0, h.jsx)(oQ, {}),
                                (0, h.jsx)(l5.Notification, {
                                    className: o8().notification,
                                    enableMultiContainer: !0,
                                    containerId: er.u.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, h.jsx)(l5.Notification, {
                                    className: o8().notification,
                                    enableMultiContainer: !0,
                                    containerId: er.u.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                o3 = (0, y.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? null : (0, h.jsx)(o6, {});
                });
            var o5 = a(31142),
                o9 = a.n(o5),
                o7 = a(84403),
                ce = a(44502),
                ct = a.n(ce);
            let ca = (e) => {
                let { className: t, artistId: a, artistName: i } = e;
                return (0, h.jsxs)(af.N, {
                    href: 'https://band.link/scanner?search='.concat(a, '&type=artist_id&service=yandex_music'),
                    className: (0, ew.$)(ct().root, t),
                    'data-test-id': $.e8.content.ARTIST_ABOUT_BANDLINK_SCANNER,
                    children: [
                        (0, h.jsx)(G.I, { className: ct().icon, variant: 'bandlink' }),
                        (0, h.jsxs)('div', {
                            className: ct().description,
                            children: [
                                (0, h.jsxs)('div', {
                                    className: ct().descriptionTitle,
                                    children: [
                                        (0, h.jsx)(ed.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'medium',
                                            className: ct().descriptionTitleText,
                                            children: (0, h.jsx)(eJ.A, { id: 'artist.artist-in-playlists' }),
                                        }),
                                        (0, h.jsx)(G.I, { variant: 'link', size: 'xxs', className: ct().descriptionTitleButton }),
                                    ],
                                }),
                                (0, h.jsx)(ed.HL, { variant: 'div', size: 'l', weight: 'medium', className: ct().descriptionArtist, children: null != i ? i : '' }),
                            ],
                        }),
                    ],
                });
            };
            var ci = a(70598),
                cl = a(91177),
                cn = a(70810),
                cs = a.n(cn);
            let cr = (e) => {
                    var t;
                    let { link: a, artistName: i, shouldSendAnalyticsOnNavigate: l } = e,
                        { formatMessage: n } = (0, q.A)(),
                        s = (0, ci.S)(),
                        r = (0, cl.D)(),
                        o = (0, f.c)(() => {
                            var e;
                            l && s({ to: C.AppScreen.Link, deepLink: null != (e = a.url) ? e : void 0 });
                        });
                    return (0, h.jsx)('div', {
                        ref: r,
                        children: (0, h.jsx)(af.N, {
                            href: a.url,
                            className: cs().link,
                            target: '_blank',
                            'aria-label': n({ id: 'artist.artist-links-label' }, { artistName: i, linkName: a.title }),
                            onClick: o,
                            children: (0, h.jsx)(tz._V, {
                                fit: 'contain',
                                className: cs().icon,
                                size: 100,
                                src: null != (t = a.imgUrl) ? t : void 0,
                                fallbackIconVariant: 'site',
                                fallbackIconSize: 'xs',
                                withAvatarReplace: !0,
                            }),
                        }),
                    });
                },
                co = (e) => {
                    let { links: t, artistName: a, shouldSendAnalyticsOnNavigate: i } = e;
                    return (0, h.jsx)('div', {
                        className: cs().root,
                        'data-test-id': $.e8.content.ARTIST_ABOUT_SOCIAL_LINKS,
                        children: t.map((e, t) =>
                            (0, h.jsx)(
                                rN.B,
                                {
                                    objectType: C.DomainObjectType.Link,
                                    objectId: String(e.url),
                                    objectPosX: t + 1,
                                    objectPosY: 1,
                                    children: (0, h.jsx)(cr, { link: e, artistName: a, shouldSendAnalyticsOnNavigate: i }, e.url),
                                },
                                e.url,
                            ),
                        ),
                    });
                };
            var cc = a(61898),
                cd = a.n(cc);
            let cu = (e) => {
                let { lastMonthListeners: t, lastMonthListenersDelta: a } = e,
                    i = (0, b.useMemo)(() => {
                        let e = (0, h.jsx)('br', {});
                        if (0 === a) return (0, h.jsx)(eJ.A, { id: 'artist.stats-same-listeners-per-month', values: { br: e } });
                        let t = (0, h.jsx)(ed.HL, {
                            variant: 'span',
                            className: (0, ew.$)({ [cd().statsNumber_positive]: a > 0, [cd().statsNumber_negative]: a < 0 }),
                            size: 'l',
                            weight: 'medium',
                            children: Math.abs(a).toLocaleString('ru'),
                        });
                        return a > 0
                            ? (0, h.jsx)(eJ.A, { id: 'artist.stats-more-listeners-per-month', values: { number: t, br: e, nbsp: '\xa0' } })
                            : (0, h.jsx)(eJ.A, { id: 'artist.stats-less-listeners-per-month', values: { number: t, br: e, nbsp: '\xa0' } });
                    }, [a]);
                return (0, h.jsxs)('div', {
                    'data-test-id': $.e8.content.ARTIST_ABOUT_STATS,
                    children: [
                        (0, h.jsx)(ed.HL, {
                            variant: 'div',
                            className: cd().title,
                            size: 'l',
                            weight: 'medium',
                            'data-test-id': $.e8.content.ARTIST_ABOUT_STATS_TITLE,
                            children: (0, h.jsx)(eJ.A, { id: 'artist.stats-listeners-per-month' }),
                        }),
                        (0, h.jsx)(ed.DZ, {
                            size: 'xxl',
                            variant: 'div',
                            className: cd().count,
                            'data-test-id': $.e8.content.ARTIST_ABOUT_STATS_COUNT,
                            children: t.toLocaleString('ru'),
                        }),
                        (0, h.jsx)(ed.HL, {
                            variant: 'div',
                            className: cd().stats,
                            size: 'l',
                            weight: 'medium',
                            'data-test-id': $.e8.content.ARTIST_ABOUT_STATS_DYNAMIC,
                            children: i,
                        }),
                    ],
                });
            };
            var c_ = a(63028),
                cm = a.n(c_);
            let cp = (0, y.PA)((e) => {
                let { covers: t } = e,
                    { formatMessage: a } = (0, q.A)(),
                    {
                        modals: { imageSliderModal: i, artistAboutModal: l },
                    } = (0, N.g)(),
                    n = t.slice(0, 1),
                    s = t.length - 2 + 1,
                    r = (0, f.c)((e) => () => {
                        (l.close(), i.openImages({ images: t, initialSlideIndex: e }));
                    });
                return (0, h.jsxs)('div', {
                    className: cm().root,
                    'data-test-id': $.e8.content.ARTIST_ABOUT_IMAGE_SLIDER,
                    children: [
                        n.map((e, t) =>
                            (0, h.jsx)(
                                Q.$,
                                {
                                    className: cm().button,
                                    onClick: r(t),
                                    'aria-label': a({ id: 'slider.view-artist-covers' }),
                                    'data-test-id': $.e8.content.ARTIST_ABOUT_IMAGE_SLIDER_BUTTON,
                                    children: (0, h.jsx)(tz._V, { fit: 'contain', className: cm().image, src: e, size: 400, withAvatarReplace: !0 }),
                                },
                                t,
                            ),
                        ),
                        t[1] &&
                            (0, h.jsxs)(Q.$, {
                                className: cm().button,
                                onClick: r(1),
                                'aria-label': a({ id: 'slider.view-artist-covers' }),
                                'data-test-id': $.e8.content.ARTIST_ABOUT_IMAGE_SLIDER_BUTTON,
                                children: [
                                    (0, h.jsx)(tz._V, { fit: 'contain', className: cm().image, src: t[1], size: 400, withAvatarReplace: !0 }),
                                    (0, h.jsx)('div', {
                                        className: cm().moreCovers,
                                        children: (0, h.jsx)(ed.HL, {
                                            variant: 'span',
                                            className: cm().moreCoversText,
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, h.jsx)(eJ.A, { id: 'slider.images-left-count', values: { imagesLeft: s } }),
                                        }),
                                    }),
                                ],
                            }),
                    ],
                });
            });
            var cv = a(69824),
                cx = a.n(cv);
            let ch = (0, y.PA)(() => {
                var e, t, a, i, l, n, s, r;
                let { formatMessage: o } = (0, q.A)(),
                    {
                        modals: { artistAboutModal: c },
                    } = (0, N.g)(),
                    { state: d, setState: u } = (0, eA.e)(!1),
                    _ = ((e) => {
                        let { formatMessage: t } = (0, q.A)();
                        return t(e === o7.o.COMPOSER ? { id: 'entity-names.composer' } : { id: 'entity-names.singer' });
                    })(c.artistType);
                return (0, h.jsxs)('div', {
                    className: cx().root,
                    children: [
                        c.isResolved &&
                            (0, h.jsxs)('header', {
                                className: cx().header,
                                'data-test-id': $.e8.content.ARTIST_ABOUT_HEADER,
                                children: [
                                    (0, h.jsx)(ed.HL, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: cx().subtitle,
                                        'data-test-id': $.e8.content.ARTIST_ABOUT_HEADER_SUBTITLE,
                                        children: _,
                                    }),
                                    (0, h.jsx)(ed.DZ, {
                                        size: 'xxl',
                                        variant: 'div',
                                        className: cx().title,
                                        'data-test-id': $.e8.content.ARTIST_ABOUT_HEADER_TITLE,
                                        children: null == (e = c.artist) ? void 0 : e.name,
                                    }),
                                ],
                            }),
                        c.description &&
                            (0, h.jsx)(eI, {
                                moreText: o({ id: 'track-modal.read-more' }),
                                className: cx().descriptionWrapper,
                                buttonClassName: cx().readMoreButton,
                                buttonProps: { 'data-test-id': $.e8.content.ARTIST_ABOUT_DESCRIPTION_READ_MORE_BUTTON },
                                open: d,
                                onOpenChange: u,
                                lineClamp: 7,
                                withFade: !0,
                                'data-test-id': $.e8.content.ARTIST_ABOUT_DESCRIPTION,
                                children: (0, h.jsx)(
                                    ed.HL,
                                    {
                                        variant: 'div',
                                        className: cx().description,
                                        size: 'l',
                                        weight: 'medium',
                                        'data-test-id': $.e8.content.ARTIST_ABOUT_DESCRIPTION_TEXT,
                                        children: c.description,
                                    },
                                    null == (t = c.artist) ? void 0 : t.getKey('description'),
                                ),
                            }),
                        c.isArtistStatsAvailable &&
                            (0, h.jsx)(cu, { lastMonthListeners: null != (s = c.lastMonthListeners) ? s : 0, lastMonthListenersDelta: c.lastMonthListenersDelta }),
                        c.isResolved &&
                            (0, h.jsx)(ca, {
                                className: cx().bandlinkScanner,
                                artistId: null == (a = c.artist) ? void 0 : a.id,
                                artistName: null == (i = c.artist) ? void 0 : i.name,
                            }),
                        c.links &&
                            (null == (l = c.links) ? void 0 : l.length) > 0 &&
                            (0, h.jsx)(co, { links: c.links, artistName: null != (r = null == (n = c.artist) ? void 0 : n.name) ? r : '' }),
                        c.covers && c.covers.length > 0 && (0, h.jsx)(cp, { covers: c.covers }),
                    ],
                });
            });
            var cy = a(24352),
                cC = a.n(cy);
            let cg = () =>
                    (0, h.jsxs)('div', {
                        className: cC().root,
                        children: [(0, h.jsx)(eh.W, { className: cC().entityName }), (0, h.jsx)(eh.W, { className: cC().title }), (0, h.jsx)(ek.q, { count: 4 })],
                    }),
                cb = (0, y.PA)(() => {
                    let { formatMessage: e } = (0, q.A)(),
                        { notify: t } = (0, eo.l)(),
                        { contentRef: a } = (0, j.g)(),
                        {
                            modals: { artistAboutModal: i },
                            settings: { isMobile: l },
                        } = (0, N.g)();
                    (0, b.useEffect)(() => {
                        i.isRejected &&
                            (t((0, h.jsx)(ec.h, { error: e({ id: 'artist-errors.error-during-loading-artist-info' }) }), { containerId: er.u.ERROR }), i.close());
                    }, [i, i.isRejected, e, t]);
                    let n = (0, tj.L)(() => (i.isLoading ? (0, h.jsx)(cg, {}) : (0, h.jsx)(ch, {})));
                    return (0, h.jsxs)(T.a, {
                        placement: l ? 'default' : 'right',
                        size: l ? 'fullscreen' : 'fitContent',
                        open: i.modal.isOpened,
                        onClose: i.close,
                        contentClassName: o9().modalContent,
                        headerClassName: o9().header,
                        className: o9().root,
                        overlayClassName: o9().overlay,
                        onOpenChange: i.onOpenChange,
                        labelClose: e({ id: 'interface-actions.close' }),
                        portalNode: l ? null : a,
                        showHeader: !1,
                        'data-test-id': $.Xk.artist.ARTIST_ABOUT_MODAL,
                        children: [
                            (0, h.jsx)(Q.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 'xxs',
                                icon: (0, h.jsx)(G.I, { variant: 'close', size: 'xxs' }),
                                className: o9().closeButton,
                                onClick: i.close,
                                'aria-label': e({ id: 'interface-actions.close' }),
                                'data-test-id': $.Xk.artist.ARTIST_ABOUT_MODAL_CLOSE_BUTTON,
                            }),
                            n,
                        ],
                    });
                });
            var cA = a(34712),
                cf = a(416),
                cT = a(11940),
                cj = a(41907),
                cN = a.n(cj);
            let cS = (0, y.PA)((e) => {
                var t, a, i, l, n, s, r;
                let { modal: o } = e,
                    { formatMessage: c } = (0, q.A)(),
                    { communication: d } = (0, N.g)(),
                    u = null == (t = o.modalItem) ? void 0 : t.content.isModal,
                    _ = null == (a = o.modalItem) ? void 0 : a.content.advDisclaimer,
                    [m, p] = (0, b.useState)(!1),
                    v = (0, b.useMemo)(() => {
                        var e;
                        return null == (e = o.modalItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t;
                                  return (0, h.jsx)(
                                      cf.t,
                                      {
                                          screenId: null == (t = o.modalItem) ? void 0 : t.screenId,
                                          anchorId: o.anchorId,
                                          button: e,
                                          buttonSize: 'default',
                                          buttonClassName: cN().button,
                                          textClassName: cN().buttonText,
                                          hide: o.close,
                                          feedbackToken: o.modalItem ? o.modalItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [o]),
                    x = (0, b.useMemo)(() => {
                        let e = { bg: {}, title: {}, text: {}, disclaimer: {} };
                        if (!o.modalItem) return e;
                        let { bgUrl: t, bgUrlLarge: a, bgColor: i, titleColor: l, textColor: n, disclaimerColor: s } = o.modalItem.content;
                        return (
                            t && (e.bg['--bg-url'] = 'url("'.concat(t, '")')),
                            a && (e.bg['--bg-url-large'] = 'url("'.concat(a, '")')),
                            i && (e.bg.backgroundColor = i),
                            l && (e.title.color = l),
                            n && (e.text.color = n),
                            s && (e.disclaimer['--disclaimer-color'] = s),
                            e
                        );
                    }, [o]),
                    y = (0, b.useCallback)(() => {
                        (o.modalItem &&
                            o.modalItem.content.closeActionId &&
                            d.action(o.modalItem.anchorId, o.modalItem.screenId, o.modalItem.content.closeActionId, o.modalItem.feedbackToken),
                            o.close());
                    }, [o, d]),
                    C = (0, b.useMemo)(() => {
                        var e;
                        if (null == (e = o.modalItem) ? void 0 : e.content.logoUrl)
                            return (0, h.jsx)(tz._V, {
                                className: cN().image,
                                withAvatarReplace: !0,
                                withFallback: !1,
                                src: o.modalItem.content.logoUrl,
                                withAspectRatio: !0,
                                size: 400,
                                fit: 'cover',
                            });
                    }, [o]),
                    g = (0, b.useMemo)(() => {
                        var e;
                        return (
                            (null == (e = o.modalItem) ? void 0 : e.content.disclaimer) &&
                            (0, cT.r)(o.modalItem.content.disclaimer, af.N, { className: cN().disclaimerLink, style: x.disclaimer, target: '_blank' })
                        );
                    }, [o, x]);
                return (0, h.jsxs)(T.a, {
                    style: x.bg,
                    className: (0, ew.$)(cN().root, u ? cN().root_modal : cN().root_fullscreen),
                    headerClassName: cN().modalHeader,
                    contentClassName: cN().modalContent,
                    header:
                        C &&
                        (0, h.jsx)('div', {
                            className: (0, ew.$)(cN().imageWrapper, cN().imageWrapper_header),
                            'data-test-id': $.Kq.communicationModal.COMMUNICATION_MODAL_HEADER_LOGO,
                            children: C,
                        }),
                    open: o.isOpened,
                    onOpenChange: o.onOpenChange,
                    onClose: y,
                    closeOnOutsidePress: !1,
                    size: u ? 'fitContent' : 'fullscreen',
                    overlayColor: u ? 'full' : 'transparent',
                    placement: 'center',
                    labelClose: c({ id: 'interface-actions.close' }),
                    customCloseButton: (0, h.jsx)(
                        Q.$,
                        {
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, h.jsx)(G.I, { className: cN().closeButtonIcon, variant: 'close', size: 'xxs' }),
                            onClick: y,
                            'aria-label': c({ id: 'interface-actions.close' }),
                            className: cN().closeButton,
                            withHover: !1,
                            'data-test-id': $.Kq.communicationModal.COMMUNICATION_MODAL_CLOSE_CROSS_BUTTON,
                        },
                        ''.concat(null == (i = o.modalItem) ? void 0 : i.anchorId, '-').concat(null == (l = o.modalItem) ? void 0 : l.content.closeActionId),
                    ),
                    'data-test-id': $.Kq.communicationModal.COMMUNICATION_MODAL,
                    children: [
                        (0, h.jsxs)('div', {
                            className: cN().container,
                            children: [
                                (0, h.jsxs)('div', {
                                    className: cN().wrapper,
                                    children: [
                                        C &&
                                            (0, h.jsx)('div', {
                                                className: (0, ew.$)(cN().imageWrapper, cN().imageWrapper_content),
                                                'data-test-id': $.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_LOGO,
                                                children: C,
                                            }),
                                        (null == (n = o.modalItem) ? void 0 : n.content.title) &&
                                            (0, h.jsx)(ed.DZ, {
                                                className: cN().title,
                                                style: x.title,
                                                size: 'xl',
                                                weight: 'black',
                                                variant: 'h1',
                                                lineClamp: 3,
                                                'data-test-id': $.Kq.communicationModal.COMMUNICATION_MODAL_TITLE_TEXT,
                                                children: o.modalItem.content.title,
                                            }),
                                        (null == (s = o.modalItem) ? void 0 : s.content.text) &&
                                            (0, h.jsx)(ed.DZ, {
                                                className: cN().text,
                                                style: x.text,
                                                size: 'xs',
                                                variant: 'h2',
                                                lineClamp: 4,
                                                'data-test-id': $.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_TEXT,
                                                children: o.modalItem.content.text,
                                            }),
                                        (0, h.jsx)(tH.r, {
                                            page: tW.l.MUSIC_DEEPLINK_SCREEN,
                                            places: [tY.R.TOP_BUTTON],
                                            children: (0, h.jsx)('div', { className: cN().buttons, children: v }),
                                        }),
                                    ],
                                }),
                                (0, h.jsxs)('div', {
                                    className: cN().disclaimerWrapper,
                                    style: x.disclaimer,
                                    children: [
                                        (0, h.jsx)(ed.HL, {
                                            className: cN().disclaimer,
                                            type: 'text',
                                            variant: 'div',
                                            size: 'xs',
                                            weight: 'normal',
                                            'data-test-id': $.Kq.communicationModal.COMMUNICATION_MODAL_DISCLAIMER,
                                            children: g,
                                        }),
                                        _ &&
                                            (0, h.jsxs)(cA.AM, {
                                                placement: u ? 'top' : 'top-start',
                                                open: m,
                                                onOpenChange: p,
                                                offsetOptions: 8,
                                                transform: !1,
                                                children: [
                                                    (0, h.jsxs)(Q.$, {
                                                        variant: 'text',
                                                        color: 'secondary',
                                                        withHover: !1,
                                                        withRipple: !1,
                                                        className: (0, ew.$)(
                                                            cN().advDisclaimerTrigger,
                                                            u ? cN().advDisclaimerTrigger_modal : cN().advDisclaimerTrigger_fullscreen,
                                                        ),
                                                        'data-test-id': $.Kq.communicationModal.COMMUNICATION_MODAL_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                        children: [
                                                            (0, h.jsx)(eJ.A, { id: 'ads.ad' }),
                                                            (0, h.jsx)(G.I, { variant: 'moreOutlined', size: u ? 'xxxs' : 'xxs' }),
                                                        ],
                                                    }),
                                                    (0, h.jsx)(cA.hl, {
                                                        className: cN().advDisclaimerPopover,
                                                        children: (0, h.jsx)(ed.HL, {
                                                            className: cN().advDisclaimerText,
                                                            variant: 'p',
                                                            type: 'text',
                                                            size: 'xs',
                                                            weight: 'medium',
                                                            'data-test-id': $.Kq.communicationModal.COMMUNICATION_MODAL_ADV_DISCLAIMER_TEXT,
                                                            children: _,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        !u && (null == (r = o.modalItem) ? void 0 : r.content.withShadow) && (0, h.jsx)('div', { className: cN().gradientOverlay }),
                    ],
                });
            });
            a(21867);
            var cI = a(41792),
                ck = a.n(cI);
            let cL = (0, y.PA)(() => {
                var e, t, a, i;
                let {
                        settings: { isMobile: l },
                        modals: { imageSliderModal: n },
                    } = (0, N.g)(),
                    { formatMessage: s } = (0, q.A)(),
                    { contentRef: r } = (0, j.g)(),
                    o = (0, rp.z)(),
                    c = (0, b.useRef)(null),
                    [d, u] = (0, b.useState)(!0),
                    [_, m] = (0, b.useState)(!1),
                    [p, v] = (0, b.useState)(0),
                    x = (null != (i = null == (e = n.images) ? void 0 : e.length) ? i : 0) > 1,
                    y = (0, f.c)(() => {
                        var e;
                        null == (e = c.current) || e.swiper.slideNext();
                    }),
                    C = (0, f.c)(() => {
                        var e;
                        null == (e = c.current) || e.swiper.slidePrev();
                    }),
                    g = (0, f.c)((e) => {
                        (u(e.isBeginning), m(e.isEnd), v(e.activeIndex));
                    });
                return (
                    (0, b.useEffect)(() => {
                        setTimeout(() => {
                            var e, t, a;
                            (null == (e = c.current) ? void 0 : e.swiper) &&
                                (u(0 === c.current.swiper.activeIndex),
                                m(c.current.swiper.activeIndex === (null != (a = null == (t = n.images) ? void 0 : t.length) ? a : 0) - 1),
                                v(c.current.swiper.activeIndex));
                        });
                    }, [null == (t = n.images) ? void 0 : t.length, l]),
                    (0, b.useEffect)(() => {
                        n.modal.isOpened
                            ? (null == o || o.disable(rm.M.MAIN, r_.l.CLOSE),
                              null == o || o.disable(rm.M.MAIN, r_.l.SLIDE_BACKWARD),
                              null == o || o.disable(rm.M.MAIN, r_.l.SLIDE_FORWARD),
                              null == o || o.enable(rm.M.IMAGE_SLIDER, r_.l.CLOSE))
                            : (null == o || o.disable(rm.M.IMAGE_SLIDER, r_.l.CLOSE),
                              null == o || o.enable(rm.M.MAIN, r_.l.CLOSE),
                              null == o || o.enable(rm.M.MAIN, r_.l.SLIDE_BACKWARD),
                              null == o || o.enable(rm.M.MAIN, r_.l.SLIDE_FORWARD));
                    }, [o, n.modal.isOpened]),
                    (0, b.useEffect)(
                        () => (
                            null == o ||
                                o.addShortcutsListener(rm.M.IMAGE_SLIDER, r_.l.CLOSE, () => {
                                    n.modal.isOpened && n.close();
                                }),
                            () => {
                                (null == o || o.removeShortcutsListener(rm.M.IMAGE_SLIDER, r_.l.CLOSE),
                                    null == o || o.disable(rm.M.IMAGE_SLIDER, r_.l.CLOSE),
                                    null == o || o.enable(rm.M.MAIN, r_.l.CLOSE),
                                    null == o || o.enable(rm.M.MAIN, r_.l.SLIDE_BACKWARD),
                                    null == o || o.enable(rm.M.MAIN, r_.l.SLIDE_FORWARD),
                                    n.close());
                            }
                        ),
                        [o, n],
                    ),
                    (0, h.jsxs)(T.a, {
                        className: (0, ew.$)(ck().root, { [ck().root_mobile]: l }),
                        contentClassName: ck().modalContent,
                        open: n.modal.isOpened,
                        size: l ? 'fullscreen' : 'fitContent',
                        placement: 'center',
                        showHeader: !1,
                        isMobile: l,
                        onClose: n.close,
                        escapeKey: !1,
                        onOpenChange: n.modal.onOpenChange,
                        portalNode: l ? null : r,
                        withAnimation: !n.modal.isOpened,
                        'data-test-id': $.e8.imageSlider.IMAGE_SLIDER_MODAL,
                        children: [
                            (0, h.jsx)('div', {
                                className: ck().leftArrowWrapper,
                                children:
                                    x &&
                                    (0, h.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, h.jsx)(G.I, { variant: 'arrowLeft', size: 'xxs' }),
                                        onClick: C,
                                        disabled: d,
                                        'aria-label': s({ id: 'slider.prev-image' }),
                                        'data-test-id': $.e8.imageSlider.IMAGE_SLIDER_MODAL_PREV_SLIDE_BUTTON,
                                    }),
                            }),
                            (0, h.jsx)('div', {
                                className: ck().rightArrowWrapper,
                                children:
                                    x &&
                                    (0, h.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, h.jsx)(G.I, { variant: 'arrowRight', size: 'xxs' }),
                                        onClick: y,
                                        disabled: _,
                                        'aria-label': s({ id: 'slider.next-image' }),
                                        'data-test-id': $.e8.imageSlider.IMAGE_SLIDER_MODAL_NEXT_SLIDE_BUTTON,
                                    }),
                            }),
                            (0, h.jsx)(Q.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 'xxs',
                                icon: (0, h.jsx)(G.I, { variant: 'close', size: 'xxs' }),
                                className: ck().closeButton,
                                onClick: n.close,
                                'aria-label': s({ id: 'slider.close-image-modal' }),
                                'data-test-id': $.e8.imageSlider.IMAGE_SLIDER_MODAL_CLOSE_BUTTON,
                            }),
                            (0, h.jsx)('div', {
                                className: ck().content,
                                children: (0, h.jsx)(sm.RC, {
                                    initialSlide: n.initialSlideIndex,
                                    className: ck().slider,
                                    wrapperClass: ck().wrapper,
                                    ref: c,
                                    onActiveIndexChange: g,
                                    a11y: { enabled: !0, containerMessage: s({ id: 'slider.image-slider-modal' }) },
                                    pagination: { dynamicBullets: !0, dynamicMainBullets: 4 },
                                    modules: [s_.dK, s_.s3],
                                    keyboard: !0,
                                    children:
                                        null == (a = n.images)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  var a, i;
                                                  let l = ((e, t) => e >= t - 5 && e <= t + 5)(t, p) ? e : void 0;
                                                  return (0, h.jsxs)(
                                                      sm.qr,
                                                      {
                                                          className: ck().slide,
                                                          'data-test-id': $.e8.imageSlider.IMAGE_SLIDER_MODAL_SLIDE,
                                                          children: [
                                                              (0, h.jsx)(tz._V, {
                                                                  fit: 'contain',
                                                                  className: (0, ew.$)(ck().image, { [ck().image_loading]: !n.isImageLoaded(l) }),
                                                                  src: l,
                                                                  size: n.sizeImage,
                                                                  tabIndex: t === p ? 0 : -1,
                                                                  'aria-roledescription': s({ id: 'slider.slide' }),
                                                                  'aria-label': s(
                                                                      { id: 'slider.image-counter' },
                                                                      { index: t + 1, count: null != (i = null == (a = n.images) ? void 0 : a.length) ? i : 0 },
                                                                  ),
                                                                  onLoadBySrc: n.setImageIsLoaded,
                                                                  withLoadingIndicator: !1,
                                                                  withSrcSet: !1,
                                                                  withAvatarReplace: !0,
                                                                  withAspectRatio: n.withAspectRatio,
                                                              }),
                                                              t === p &&
                                                                  (0, h.jsx)('div', {
                                                                      className: (0, ew.$)(ck().loadingIndicator, {
                                                                          [ck().loadingIndicator_showed]: !n.isImageLoaded(l),
                                                                      }),
                                                                      children: (0, h.jsx)(t1.y, { size: 'm' }),
                                                                  }),
                                                          ],
                                                      },
                                                      t,
                                                  );
                                              }),
                                }),
                            }),
                        ],
                    })
                );
            });
            var cE = a(36740),
                cM = a(66610),
                cP = a(46372),
                cO = a(24672),
                cw = a(30664),
                cR = a(6489),
                cD = a.n(cR);
            let cB = (e) => {
                    let { title: t, description: a, withSubtitle: i } = e;
                    return (0, h.jsxs)('div', {
                        className: cD().root,
                        children: [
                            (0, h.jsx)(ed.DZ, {
                                variant: 'h1',
                                size: 'l',
                                weight: 'bold',
                                className: (0, ew.$)(cD().title, { [cD().title_withSubtitle]: i }),
                                dangerouslySetInnerHTML: { __html: (0, ei.ky)(t) },
                                'data-test-id': $.Kq.multivibe.MULTIVIBE_MODAL_TITLE,
                            }),
                            i &&
                                (0, h.jsx)(ed.HL, {
                                    variant: 'div',
                                    type: 'entity',
                                    size: 'l',
                                    weight: 'medium',
                                    className: cD().subtitle,
                                    children: (0, h.jsx)(eJ.A, { id: 'multivibe.modal-subtitle' }),
                                }),
                            (0, h.jsx)(ed.HL, {
                                variant: 'div',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: cD().description,
                                dangerouslySetInnerHTML: { __html: (0, ei.ky)(a) },
                                'data-test-id': $.Kq.multivibe.MULTIVIBE_MODAL_DESCRIPTION,
                            }),
                        ],
                    });
                },
                cF = (0, y.PA)((e) => {
                    let { roomId: t, onClose: a } = e,
                        { formatMessage: i } = (0, q.A)(),
                        { initCopyVibeRoomInviteLink: l } = (0, cP.r)({ onSuccess: a }),
                        n = (0, cM.D)(),
                        s = (0, f.c)(() => {
                            n({ actionType: C.ActionType.Copied, userInteractionType: C.UserInteractionType.Tap });
                            let { copy: e } = l();
                            e(t);
                        });
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (0, h.jsx)(cw.t, { src: 'avatars.mds.yandex.net/get-music-misc/28052/img.6a58b7c30bdb737c087aeab4/%%' }),
                            (0, h.jsx)(cB, { title: i({ id: 'multivibe.only-member-modal-title' }), description: i({ id: 'multivibe.only-member-modal-description' }) }),
                            (0, h.jsx)(Q.$, {
                                color: 'primary',
                                size: 'default',
                                onClick: s,
                                radius: 'xxxl',
                                isBlock: !0,
                                'data-test-id': $.Kq.multivibe.MULTIVIBE_COPY_LINK_BUTTON,
                                children: i({ id: 'interface-actions.copy-link' }),
                            }),
                            (0, h.jsx)(cO.j, {}),
                        ],
                    });
                }),
                cU = (0, y.PA)((e) => {
                    let { roomId: t } = e,
                        { multivibe: a } = (0, N.g)(),
                        { disabledRoomInfoModal: i } = a;
                    return ((0, cE.u)(), (0, h.jsx)(cF, { roomId: t, onClose: i.close }));
                });
            var cV = a(47225),
                cz = a.n(cV);
            let cK = (0, y.PA)((e) => {
                    let {
                            modalModel: t,
                            children: a,
                            header: i,
                            ariaLabel: l,
                            closeButtonDataTestId: n,
                            className: s,
                            contentClassName: r,
                            headerClassName: o,
                            closeOnOutsidePress: c,
                            'data-test-id': d,
                        } = e,
                        {
                            settings: { isMobile: u },
                        } = (0, N.g)(),
                        { contentRef: _ } = (0, j.g)(),
                        { formatMessage: m } = (0, q.A)();
                    return (0, h.jsx)(T.a, {
                        'aria-label': l,
                        className: (0, ew.$)(cz().root, s),
                        contentClassName: (0, ew.$)(cz().content, r),
                        header: i,
                        headerClassName: (0, ew.$)(cz().header, o),
                        size: 'fitContent',
                        placement: u ? 'default' : 'right',
                        portalNode: u ? void 0 : _,
                        isMobile: u,
                        enableSwipe: u,
                        closeOnOutsidePress: c,
                        withOverlay: !0,
                        overlayColor: 'transparent',
                        labelClose: m({ id: 'interface-actions.close' }),
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        showHeader: !0,
                        closeButtonProps: u && { hidden: !0 },
                        closeButtonDataTestId: n,
                        'data-test-id': d,
                        children: a,
                    });
                }),
                cH = (e) => {
                    let { modalModel: t, children: a } = e;
                    return (0, h.jsx)(cK, {
                        modalModel: t,
                        closeButtonDataTestId: $.Kq.multivibe.MULTIVIBE_MODAL_CLOSE_BUTTON,
                        'data-test-id': $.Kq.multivibe.MULTIVIBE_MODAL,
                        children: a,
                    });
                },
                cW = (0, y.PA)((e) => {
                    let { roomId: t } = e,
                        { multivibe: a } = (0, N.g)(),
                        { resetDisabledRoomId: i, disabledRoomInfoModal: l } = a;
                    return (
                        (0, b.useEffect)(() => () => i(), [i]),
                        (0, h.jsx)(cH, {
                            modalModel: l,
                            children: (0, h.jsx)(g.a, {
                                pageId: C.AppScreen.MultivibeUnifiedScreen,
                                pageIdForFrom: rE.b.MULTIVIBE_UNIFIED_SCREEN,
                                pageStyle: C.PageStyles.Sheet,
                                pagePlacement: C.PagePlacements.Bottom,
                                children: (0, h.jsx)(rj.F, {
                                    blockId: '',
                                    blockType: '',
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: 1,
                                    children: (0, h.jsx)(cU, { roomId: t }),
                                }),
                            }),
                        })
                    );
                });
            var cY = a(73531);
            let cq = (0, y.PA)((e) => {
                let { onLinkCreateSuccess: t } = e,
                    { formatMessage: a } = (0, q.A)();
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)(cw.t, { src: 'avatars.mds.yandex.net/get-music-misc/28052/img.6a58b7c40bdb737c087aeab5/%%' }),
                        (0, h.jsx)(cB, {
                            title: a({ id: 'multivibe.invite-modal-invalid-title' }),
                            description: a({ id: 'multivibe.invite-modal-invalid-description' }),
                        }),
                        (0, h.jsx)(cY.M, { isBlock: !0, title: a({ id: 'multivibe.invite-modal-invalid-button-text' }), onSuccess: t }),
                        (0, h.jsx)(cO.j, {}),
                    ],
                });
            });
            var c$ = a(47964);
            let cQ = (0, y.PA)((e) => {
                let { seeds: t } = e,
                    { formatMessage: a } = (0, q.A)(),
                    { screen: i } = (0, rA.j)(),
                    l = null == i ? void 0 : i.pageIdForFrom,
                    n = (0, e0.g)(),
                    { togglePlay: s, isPlaying: r } = (0, c$.B)({ seeds: t, pageIdForFrom: l, blockIdForFrom: C.EntityTypes.Multiwave }),
                    o = (0, f.c)(() => {
                        (r || n(), s());
                    });
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)(cw.t, {}),
                        (0, h.jsx)(cB, { title: a({ id: 'multivibe.enabled-room-modal-title' }), description: a({ id: 'multivibe.enabled-room-modal-description' }) }),
                        (0, h.jsx)(Q.$, {
                            color: 'primary',
                            size: 'default',
                            onClick: o,
                            radius: 'xxxl',
                            isBlock: !0,
                            'data-test-id': $.Kq.multivibe.MULTIVIBE_PLAY_ROOM_BUTTON,
                            children: a({ id: 'multivibe.enabled-room-modal-button-text' }),
                        }),
                        (0, h.jsx)(cO.j, {}),
                    ],
                });
            });
            var cG = a(67879),
                cZ = a(27506),
                cX = a(50550),
                cJ = a.n(cX);
            let c0 = (0, y.PA)((e) => {
                let { room: t, member: a } = e,
                    { formatMessage: i } = (0, q.A)(),
                    { enterVibeRoom: l, isPending: n } = ((e) => {
                        var t, a;
                        let { room: i } = e,
                            { multivibe: l } = (0, N.g)(),
                            { notify: n } = (0, eo.l)(),
                            { formatMessage: s } = (0, q.A)(),
                            { screen: r } = (0, rA.j)(),
                            o = null == r ? void 0 : r.pageIdForFrom,
                            c = (0, e0.g)(),
                            { resetContext: d, isPlaying: u } = (0, c$.B)({
                                seeds: null != (a = null == (t = i.wave) ? void 0 : t.seeds) ? a : [],
                                pageIdForFrom: o,
                                blockIdForFrom: C.EntityTypes.Multiwave,
                            }),
                            [_, m] = (0, b.useState)(!1),
                            p = (0, b.useRef)(!1);
                        return {
                            enterVibeRoom: (0, f.c)(async () => {
                                if (p.current) return;
                                (m(!0), (p.current = !0));
                                let e = await l.enterRoom({ roomId: i.id }),
                                    t = l.duplicateRoomId;
                                if ((t && e === cZ.F.ERROR && l.errorName === cG.z.ROOM_DUPLICATION && (e = await l.enterRoom({ roomId: t })), e === cZ.F.ERROR))
                                    n((0, h.jsx)(ec.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: er.u.ERROR });
                                else {
                                    var a, r;
                                    let e = l.invitationRoom,
                                        t = null != (r = null == e || null == (a = e.wave) ? void 0 : a.seeds) ? r : [];
                                    (await d(t), u || c());
                                }
                                (m(!1), (p.current = !1));
                            }),
                            isPending: _,
                        };
                    })({ room: t }),
                    s = (0, f.c)(() => l()),
                    { name: r, cover: o } = a;
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)('div', {
                            className: cJ().imageContainer,
                            children: (0, h.jsx)(cw.t, {
                                src: o.uri,
                                className: (0, ew.$)(cJ().multivibeCover, cJ().guestAvatar),
                                imageClassName: cJ().multivibeAvatar,
                                withSrcSet: !1,
                                withAspectRatio: !1,
                                withTopSpace: !1,
                            }),
                        }),
                        (0, h.jsx)(cB, {
                            title: i({ id: 'multivibe.invite-modal-valid-title' }, { name: r }),
                            description: i({ id: 'multivibe.invite-modal-valid-description' }),
                        }),
                        (0, h.jsx)(Q.$, {
                            color: 'primary',
                            size: 'default',
                            onClick: s,
                            disabled: n,
                            spinner: n ? (0, h.jsx)(t1.y, { size: 'xs' }) : void 0,
                            radius: 'xxxl',
                            isBlock: !0,
                            'data-test-id': $.Kq.multivibe.MULTIVIBE_JOIN_ROOM_BUTTON,
                            children: i({ id: 'multivibe.invite-modal-valid-button-text' }),
                        }),
                        (0, h.jsx)(cO.j, {}),
                    ],
                });
            });
            var c1 = a(1500);
            let c2 = (0, y.PA)((e) => {
                let { onButtonClick: t } = e,
                    { formatMessage: a } = (0, q.A)();
                return (0, h.jsxs)(h.Fragment, {
                    children: [
                        (0, h.jsx)(cw.t, {}),
                        (0, h.jsx)(cB, { title: a({ id: 'multivibe.invite-modal-draft-title' }), description: a({ id: 'multivibe.invite-modal-draft-description' }) }),
                        (0, h.jsx)(c1.m, { onButtonClick: t }),
                        (0, h.jsx)(cO.j, {}),
                    ],
                });
            });
            var c4 = a(8962);
            let c8 = (0, y.PA)((e) => {
                    var t, a;
                    let { children: i } = e,
                        { multivibe: l, vibe: n } = (0, N.g)(),
                        { invitationRoom: s, inviteModal: r, isGetRoomByIdLoading: o } = l;
                    (0, cE.u)();
                    let c = ((e) => {
                        var t, a;
                        let { sonataState: i, vibe: l } = (0, N.g)();
                        return i.isVibeContext && (0, c4._)(null != (a = null == (t = l.meta) ? void 0 : t.seeds) ? a : [], e) && i.isPlaying;
                    })(null != (a = null == s || null == (t = s.wave) ? void 0 : t.seeds) ? a : []);
                    return ((0, b.useEffect)(() => {
                        c && r.close();
                    }, [c, r]),
                    o || n.isApplying || c)
                        ? (0, h.jsx)('div', { className: cJ().spinnerWrapper, children: (0, h.jsx)(t1.y, { size: 'xl' }) })
                        : i;
                }),
                c6 = (0, y.PA)(() => {
                    var e, t;
                    let { multivibe: a, user: i } = (0, N.g)(),
                        { inviteModal: l, invitationRoom: n } = a,
                        s = l.close,
                        r = null != (t = null == n || null == (e = n.wave) ? void 0 : e.seedsId) ? t : '',
                        { blockType: o, content: c } = (0, tj.L)(() => {
                            var e, t;
                            if (!n) return { blockType: C.EntityTypes.MultivibeInvalidInvitation, content: (0, h.jsx)(cq, { onLinkCreateSuccess: s }) };
                            let { isDraft: a, isDisabled: l, isEnabled: r, owner: o, members: c } = n,
                                d = o.uid && o.uid === i.puid,
                                u = c[0],
                                _ = o.isActive ? o : u,
                                m = (null == _ ? void 0 : _.uid) && _.uid === i.puid,
                                p = null != (t = null == (e = n.wave) ? void 0 : e.seeds) ? t : [];
                            return r
                                ? { blockType: C.EntityTypes.MultivibeAlreadyExists, content: (0, h.jsx)(cQ, { seeds: p }) }
                                : a && d
                                  ? { blockType: C.EntityTypes.MultivibePendingInvitation, content: (0, h.jsx)(c2, { onButtonClick: s }) }
                                  : a && !d && o
                                    ? { blockType: C.EntityTypes.MultivibeAcceptingInvitation, content: (0, h.jsx)(c0, { room: n, member: o }) }
                                    : l && m
                                      ? { blockType: C.EntityTypes.MultivibeAlone, content: (0, h.jsx)(cF, { roomId: n.id, onClose: s }) }
                                      : l && !m && _
                                        ? { blockType: C.EntityTypes.MultivibeAcceptingInvitation, content: (0, h.jsx)(c0, { room: n, member: _ }) }
                                        : { blockType: C.EntityTypes.MultivibeInvalidInvitation, content: (0, h.jsx)(cq, { onLinkCreateSuccess: s }) };
                        });
                    return (0, h.jsx)(cH, {
                        modalModel: l,
                        children: (0, h.jsx)(g.a, {
                            pageId: C.AppScreen.MultivibeUnifiedScreen,
                            pageIdForFrom: rE.b.MULTIVIBE_UNIFIED_SCREEN,
                            pageStyle: C.PageStyles.Sheet,
                            pagePlacement: C.PagePlacements.Bottom,
                            children: (0, h.jsx)(rj.F, {
                                blockId: '',
                                blockType: o,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: 1,
                                children: (0, h.jsx)(rN.B, {
                                    objectId: r,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    objectType: C.DomainObjectType.Wave,
                                    children: (0, h.jsx)(c8, { children: c }),
                                }),
                            }),
                        }),
                    });
                });
            var c3 = a(45958),
                c5 = a.n(c3);
            let c9 = (0, y.PA)(() => {
                    let { multivibe: e } = (0, N.g)(),
                        { formatMessage: t } = (0, q.A)(),
                        { promoModal: a } = e;
                    return (
                        (0, cE.u)(),
                        (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)(cw.t, {
                                    src: 'avatars.mds.yandex.net/get-music-misc/28052/img.6a4e4cb644dcec5277bcec98/%%',
                                    className: c5().imageWrapper,
                                    size: 400,
                                    withTopSpace: !1,
                                }),
                                (0, h.jsx)(cB, {
                                    title: t({ id: 'multivibe.promo-modal-title' }),
                                    description: t({ id: 'multivibe.promo-modal-description' }),
                                    withSubtitle: !0,
                                }),
                                (0, h.jsx)(cY.M, { isBlock: !0, title: t({ id: 'interface-actions.copy-link' }), onSuccess: a.close }),
                                (0, h.jsx)(cO.j, {}),
                            ],
                        })
                    );
                }),
                c7 = (0, y.PA)(() => {
                    let { multivibe: e } = (0, N.g)(),
                        { promoModal: t } = e;
                    return (0, h.jsx)(cH, {
                        modalModel: t,
                        children: (0, h.jsx)(g.a, {
                            pageId: C.AppScreen.MultivibeSendingInvitationScreen,
                            pageIdForFrom: rE.b.MULTIVIBE_SENDING_INVITATION_SCREEN,
                            pageStyle: C.PageStyles.Sheet,
                            pagePlacement: C.PagePlacements.Bottom,
                            children: (0, h.jsx)(rj.F, { blockId: '', blockType: '', blockPosX: 1, blockPosY: 1, objectsCount: 1, children: (0, h.jsx)(c9, {}) }),
                        }),
                    });
                });
            var de = a(40617),
                dt = a(21944),
                da = a(71594);
            let di = (e, t) => (da.s.test(e) ? e : 0 === e.trim().length ? ''.concat(t, 'px') : ''.concat(Math.max(Number(e), t), 'px'));
            var dl = a(639),
                dn = a.n(dl);
            let ds = (e) => {
                let { closeToast: t } = e;
                return (0, h.jsx)(ne.$, {
                    closeToast: t,
                    cover: (0, h.jsx)(G.I, { className: dn().icon, size: 'xs', variant: 'chain' }),
                    message: (0, h.jsx)(ed.HL, {
                        className: dn().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, h.jsx)(eJ.A, { id: 'notifications-info.html-code-copied' }),
                    }),
                    coverRadius: 's',
                });
            };
            var dr = a(19051),
                dc = a.n(dr);
            let dd = (0, y.PA)((e) => {
                let { entity: t } = e,
                    { formatMessage: a } = (0, q.A)(),
                    { language: i } = (0, tM.h)(),
                    { notify: l } = (0, eo.l)(),
                    { fullscreenPlayer: n } = (0, N.g)();
                (0, b.useEffect)(() => {
                    t.setListenMessage((e) => a({ id: 'share.iframe-listen' }, { html: e }));
                }, [t, a]);
                let s = (0, f.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setWidth(a);
                    }),
                    r = (0, f.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !da.s.test(a) && (0 === a.length || Number.isNaN(Number(a)) || Number(a) < dt.JQ) && t.setWidth(String(dt.JQ));
                    }),
                    o = (0, f.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setHeight(a);
                    }),
                    c = (0, f.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !da.s.test(a) && (0 === a.length || Number.isNaN(Number(a)) || Number(a) < dt.IR) && t.setHeight(String(dt.IR));
                    }),
                    d = { width: di(t.width, dt.JQ), height: di(t.height, dt.IR) },
                    u = t.iframeUri.replace(dt.bL, i),
                    _ = t.iframeCode.replace(dt.bL, i),
                    m = (0, f.c)(async () => {
                        (await window.navigator.clipboard.writeText(_), l((0, h.jsx)(ds, {}), { containerId: n.modal.isOpened ? er.u.FULLSCREEN_INFO : er.u.INFO }));
                    });
                return (0, h.jsxs)('div', {
                    className: dc().root,
                    'data-test-id': $.Kq.shareIframe.SHARE_IFRAME_EDITOR,
                    children: [
                        (0, h.jsxs)('form', {
                            className: dc().controls,
                            children: [
                                (0, h.jsxs)('div', {
                                    className: dc().settings,
                                    children: [
                                        (0, h.jsx)(de.p, {
                                            containerClassName: dc().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.width,
                                            variant: 'secondary',
                                            pattern: '^\\d+(px|%)?$',
                                            min: dt.JQ,
                                            required: !0,
                                            onChange: s,
                                            onBlur: r,
                                            'aria-label': a({ id: 'share.iframe-editor-width' }),
                                            'data-test-id': $.Kq.shareIframe.SHARE_IFRAME_EDITOR_WIDTH_INPUT,
                                        }),
                                        (0, h.jsx)(G.I, { size: 'xs', variant: 'close' }),
                                        (0, h.jsx)(de.p, {
                                            containerClassName: dc().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.height,
                                            pattern: '^\\d+(px|%)?$',
                                            variant: 'secondary',
                                            min: dt.IR,
                                            required: !0,
                                            onChange: o,
                                            onBlur: c,
                                            'aria-label': a({ id: 'share.iframe-editor-height' }),
                                            'data-test-id': $.Kq.shareIframe.SHARE_IFRAME_EDITOR_HEIGHT_INPUT,
                                        }),
                                    ],
                                }),
                                (0, h.jsx)(de.p, {
                                    inputClassName: dc().iframeCodeInput,
                                    containerClassName: dc().iframeCodeInputContainer,
                                    type: 'text',
                                    size: 'xxxs',
                                    variant: 'secondary',
                                    value: _,
                                    required: !0,
                                    readOnly: !0,
                                    'aria-label': a({ id: 'share.iframe-editor-code' }),
                                    'data-test-id': $.Kq.shareIframe.SHARE_IFRAME_EDITOR_CODE_INPUT,
                                }),
                                (0, h.jsx)(Q.$, {
                                    color: 'primary',
                                    className: dc().copyButton,
                                    size: 'l',
                                    radius: 'xxxl',
                                    onClick: m,
                                    'data-test-id': $.Kq.shareIframe.SHARE_IFRAME_EDITOR_COPY_BUTTON,
                                    children: (0, h.jsx)(ed.HL, {
                                        type: 'text',
                                        variant: 'div',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        children: (0, h.jsx)(eJ.A, { id: 'share.iframe-copy' }),
                                    }),
                                }),
                            ],
                        }),
                        (0, h.jsx)('div', {
                            className: dc().iframeContainer,
                            style: d,
                            'data-test-id': $.Kq.shareIframe.SHARE_IFRAME_EDITOR_PREVIEW,
                            children: (0, h.jsx)('iframe', { className: dc().iframe, src: u, title: a({ id: 'share.iframe-editor-preview' }) }),
                        }),
                    ],
                });
            });
            var du = a(81472),
                d_ = a.n(du);
            let dm = (0, y.PA)(() => {
                let {
                        shareIframe: e,
                        settings: { isMobile: t },
                    } = (0, N.g)(),
                    { formatMessage: a } = (0, q.A)();
                return e.entity
                    ? (0, h.jsx)(T.a, {
                          className: d_().root,
                          contentClassName: d_().content,
                          open: e.modal.isOpened,
                          onOpenChange: e.modal.onOpenChange,
                          placement: t ? 'default' : 'center',
                          size: 'fitContent',
                          title: a({ id: 'share.iframe-modal-title' }),
                          labelClose: a({ id: 'interface-actions.close' }),
                          onClose: e.closeModal,
                          overlayColor: 'full',
                          'data-test-id': $.Kq.shareIframe.SHARE_IFRAME_MODAL,
                          closeButtonDataTestId: $.Kq.shareIframe.SHARE_IFRAME_MODAL_CLOSE_BUTTON,
                          children: (0, h.jsx)(dd, { entity: e.entity }),
                      })
                    : null;
            });
            var dp = a(43966),
                dv = a(87587),
                dx = a.n(dv),
                dh = a(79390),
                dy = a(23192),
                dC = a(1401),
                dg = a(45347),
                db = a(25555),
                dA = a(81438),
                df = a(48627),
                dT = a.n(df);
            let dj = (0, y.PA)(() => {
                    let { lumen: e } = (0, N.g)(),
                        { cover: t, fallbackImage: a } = (0, dA.x)(),
                        i = e.isEnabled ? t : a;
                    return (
                        (0, b.useEffect)(() => {
                            e.isEnabled && !e.themes && e.getData();
                        }, [e]),
                        (0, h.jsxs)(h.Fragment, {
                            children: [
                                (0, h.jsx)(tz._V, {
                                    alt: '',
                                    className: (0, ew.$)(dT().image, dT().image_blurred),
                                    src: i,
                                    fit: 'cover',
                                    draggable: !1,
                                    withAvatarReplace: !0,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                }),
                                (0, h.jsx)(tz._V, {
                                    alt: '',
                                    className: dT().image,
                                    src: i,
                                    fit: 'cover',
                                    draggable: !1,
                                    withAvatarReplace: !0,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                }),
                            ],
                        })
                    );
                }),
                dN = (0, y.PA)((e) => {
                    let { vibe: t } = e,
                        { formatMessage: a } = (0, q.A)(),
                        {
                            user: i,
                            freeAccess: l,
                            paywall: n,
                            slam: s,
                            sharedVibe: r,
                            vibe: o,
                            settings: { isMobile: c },
                        } = (0, N.g)(),
                        { notify: d } = (0, eo.l)(),
                        { togglePlay: u } = (0, c$.B)({ seeds: t.seeds }),
                        { solidColor: _ } = (0, dA.x)();
                    (0, cE.u)();
                    let m = (0, cl.D)(),
                        p = (0, e0.g)(),
                        v = (0, cM.D)(),
                        x = (0, ci.S)(),
                        y = (0, tj.L)(() => (t.isQ2V ? (0, h.jsx)(dj, {}) : t.agent ? (0, h.jsx)(dg.s, { agent: t.agent, className: dx().agentView }) : null)),
                        g = (0, f.c)(async () => {
                            if (i.isAuthorized && !o.isApplying) {
                                if (l.isVibeStartRestricted) return void n.openModal();
                                (p(), await u(), r.vibe === t && r.modal.close());
                            }
                        }),
                        b = (0, db.I)({
                            action: async () =>
                                !!t.isLikeEnabled &&
                                !t.isLiked &&
                                !s.networkStatus.isOffline &&
                                !s.isOfflineModeEnabled &&
                                (v({ actionType: C.ActionType.Like, userInteractionType: C.UserInteractionType.Tap }),
                                (await t.toggleLike()) === dh.f.OK &&
                                    (r.vibe === t && r.modal.close(), c && d((0, h.jsx)(dC.T, { vibe: t }), { containerId: er.u.INFO }), !0)),
                            notification: (0, h.jsx)(dC.T, { vibe: t }),
                        }),
                        A = (0, f.c)((e) => {
                            e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (x({ to: C.AppScreen.CollectionWavesScreen }), r.modal.close());
                        }),
                        T = (0, tj.L)(() =>
                            i.isAuthorized && t.isLiked
                                ? (0, h.jsx)(af.N, {
                                      className: dx().collectionLink,
                                      href: lj.Z.collectionVibes.href,
                                      onClick: A,
                                      'data-test-id': $.Kq.sharedVibe.SHARED_VIBE_GO_TO_COLLECTION_LINK,
                                      children: a({ id: 'interface-actions.go-to-collection' }),
                                  })
                                : (0, h.jsx)(Q.$, {
                                      color: 'secondary',
                                      size: 'default',
                                      radius: 'xxxl',
                                      isBlock: !0,
                                      disabled: !i.isAuthorized || !t.isLikeEnabled,
                                      onClick: b,
                                      'data-test-id': $.Kq.sharedVibe.SHARED_VIBE_ADD_COLLECTION_BUTTON,
                                      children: a({ id: 'interface-actions.add-to-collection' }),
                                  }),
                        ),
                        j = (0, tj.L)(() => {
                            var e;
                            return t.isQ2V ? { '--glow-color': _ || dy.R } : { '--glow-color': (null == (e = t.agent) ? void 0 : e.cover.color) || void 0 };
                        });
                    return (0, h.jsxs)('div', {
                        className: dx().root,
                        ref: m,
                        children: [
                            y && (0, h.jsx)('div', { className: dx().agent, style: j, 'data-test-id': $.Kq.sharedVibe.SHARED_VIBE_MODAL_AGENT, children: y }),
                            (0, h.jsxs)('div', {
                                className: dx().text,
                                children: [
                                    (0, h.jsx)(ed.DZ, {
                                        variant: 'h1',
                                        size: 'l',
                                        weight: 'bold',
                                        'data-test-id': $.Kq.sharedVibe.SHARED_VIBE_MODAL_TITLE,
                                        children: t.title,
                                    }),
                                    (0, h.jsx)(ed.HL, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'medium',
                                        'data-test-id': $.Kq.sharedVibe.SHARED_VIBE_MODAL_DESCRIPTION,
                                        children: a({ id: 'shared-vibe.modal-description' }),
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('div', {
                                className: dx().actions,
                                children: [
                                    (0, h.jsx)(Q.$, {
                                        color: 'primary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        isBlock: !0,
                                        disabled: !i.isAuthorized || o.isApplying,
                                        onClick: g,
                                        'data-test-id': $.Kq.sharedVibe.SHARED_VIBE_LISTEN_BUTTON,
                                        children: a({ id: 'player-actions.listen' }),
                                    }),
                                    T,
                                ],
                            }),
                        ],
                    });
                }),
                dS = (0, y.PA)(() => {
                    let {
                        sharedVibe: e,
                        settings: { isMobile: t },
                    } = (0, N.g)();
                    return e.vibe
                        ? (0, h.jsx)(
                              g.a,
                              {
                                  pageId: C.AppScreen.ShareScreen,
                                  mainObjectType: C.DomainObjectType.Wave,
                                  mainObjectId: e.modal.isOpened ? e.vibe.seedsId : void 0,
                                  children: (0, h.jsx)(rj.F, {
                                      blockId: rS.U.SHARED_VIBE,
                                      blockType: rS.U.SHARED_VIBE,
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      objectsCount: 1,
                                      children: (0, h.jsx)(rN.B, {
                                          objectType: C.DomainObjectType.Wave,
                                          objectId: e.vibe.seedsId,
                                          objectPosX: 1,
                                          objectPosY: 1,
                                          children: (0, h.jsx)(cK, {
                                              className: dx().modal,
                                              header: e.isNdaLabelEnabled ? (0, h.jsx)(dp.g, {}) : void 0,
                                              headerClassName: dx().header,
                                              modalModel: e.modal,
                                              closeOnOutsidePress: !t,
                                              ariaLabel: e.vibe.title,
                                              closeButtonDataTestId: $.Kq.sharedVibe.SHARED_VIBE_MODAL_CLOSE_BUTTON,
                                              'data-test-id': $.Kq.sharedVibe.SHARED_VIBE_MODAL,
                                              children: (0, h.jsx)(dN, { vibe: e.vibe }),
                                          }),
                                      }),
                                  }),
                              },
                              e.viewKey,
                          )
                        : null;
                });
            var dI = a(90420);
            let dk = { src: '/_next/static/media/unavailable.ab1224d7.png' };
            var dL = a(40131),
                dE = a.n(dL);
            let dM = (0, y.PA)(() => {
                let { formatMessage: e } = (0, q.A)(),
                    {
                        user: t,
                        sharedVibe: { unavailableModal: a },
                        freeAccess: i,
                        paywall: l,
                        vibe: n,
                        settings: { isMobile: s },
                    } = (0, N.g)(),
                    { contentRef: r } = (0, j.g)(),
                    { resetContext: o } = (0, c$.B)({ seeds: [dI.M1] }),
                    c = (0, f.c)(async () => {
                        if (t.isAuthorized && !n.isApplying) {
                            if (i.isVibeStartRestricted) return void l.openModal();
                            (await o(), a.close());
                        }
                    });
                return (0, h.jsxs)(T.a, {
                    'aria-label': e({ id: 'shared-vibe.unavailable-title' }),
                    className: dE().root,
                    contentClassName: dE().content,
                    headerClassName: dE().header,
                    size: 'fitContent',
                    placement: s ? 'default' : 'right',
                    portalNode: s ? void 0 : r,
                    isMobile: s,
                    enableSwipe: s,
                    closeOnOutsidePress: !s,
                    withOverlay: !0,
                    overlayColor: 'transparent',
                    labelClose: e({ id: 'interface-actions.close' }),
                    open: a.isOpened,
                    onOpenChange: a.onOpenChange,
                    onClose: a.close,
                    showHeader: !0,
                    closeButtonProps: s && { hidden: !0 },
                    closeButtonDataTestId: $.Kq.sharedVibe.SHARED_VIBE_MODAL_CLOSE_BUTTON,
                    'data-test-id': $.Kq.sharedVibe.SHARED_VIBE_MODAL,
                    children: [
                        (0, h.jsx)(tz._V, { src: dk.src, alt: '', fit: 'contain', className: dE().image }),
                        (0, h.jsxs)('div', {
                            className: dE().text,
                            children: [
                                (0, h.jsx)(ed.DZ, {
                                    variant: 'h1',
                                    size: 'l',
                                    weight: 'bold',
                                    'data-test-id': $.Kq.sharedVibe.SHARED_VIBE_MODAL_TITLE,
                                    children: e({ id: 'shared-vibe.unavailable-title' }),
                                }),
                                (0, h.jsx)(ed.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'medium',
                                    'data-test-id': $.Kq.sharedVibe.SHARED_VIBE_MODAL_DESCRIPTION,
                                    children: e({ id: 'shared-vibe.unavailable-description' }),
                                }),
                            ],
                        }),
                        (0, h.jsx)('div', {
                            className: dE().actions,
                            children: (0, h.jsx)(Q.$, {
                                color: 'primary',
                                size: 'default',
                                radius: 'xxxl',
                                isBlock: !0,
                                disabled: !t.isAuthorized || n.isApplying,
                                onClick: c,
                                'data-test-id': $.Kq.sharedVibe.SHARED_VIBE_LISTEN_BUTTON,
                                children: e({ id: 'shared-vibe.listen-my-vibe' }),
                            }),
                        }),
                    ],
                });
            });
            var dP = a(58660),
                dO = a.n(dP);
            let dw = (e) => {
                    let t = e.value.trim().length;
                    return ('number' == typeof e.minLength && !!(t < e.minLength)) || ('number' == typeof e.maxLength && !!(t > e.maxLength));
                },
                dR = (0, y.PA)((e) => {
                    let { open: t, title: a, content: i, onClose: l, onChange: n } = e,
                        {
                            settings: { isMobile: s },
                        } = (0, N.g)(),
                        { formatMessage: r } = (0, q.A)(),
                        [o, c] = (0, b.useState)(i),
                        [d, u] = (0, b.useState)(!1),
                        _ = (0, b.useCallback)(
                            (e) => (t) => {
                                let a = t.target.value,
                                    i = o.find((t) => t.key === e);
                                (i && (i.value = a), c([...o]), u(!1));
                            },
                            [o],
                        ),
                        m = (0, b.useCallback)(
                            (e) => {
                                e || l();
                            },
                            [l],
                        ),
                        p = (0, b.useCallback)(() => {
                            if (o.some(dw)) return void u(!0);
                            n(o);
                        }, [n, o]),
                        v = (0, b.useMemo)(
                            () =>
                                o.map((e) => {
                                    let t = _(e.key),
                                        a = d && dw(e);
                                    return (0, h.jsxs)(
                                        'div',
                                        {
                                            className: dO().field,
                                            children: [
                                                (0, h.jsx)(ed.HL, { variant: 'div', size: 'm', className: dO().label, children: e.title }),
                                                (0, h.jsx)(de.p, {
                                                    value: e.value,
                                                    containerClassName: (0, ew.$)(dO().input, { [dO().input_error]: a }),
                                                    placeholder: e.title,
                                                    onChange: t,
                                                    minLength: e.minLength,
                                                    maxLength: e.maxLength,
                                                    'data-test-id': $.e8.ugc.UGC_EDIT_MODAL_FIELD_INPUT,
                                                }),
                                            ],
                                        },
                                        e.key,
                                    );
                                }),
                            [_, d, o],
                        );
                    return (0, h.jsxs)(T.a, {
                        size: 'fitContent',
                        placement: s ? 'default' : 'center',
                        open: t,
                        onOpenChange: m,
                        className: dO().root,
                        contentClassName: dO().modalContent,
                        showHeader: !1,
                        closeOnOutsidePress: !1,
                        isMobile: s,
                        'data-test-id': $.e8.ugc.UGC_EDIT_MODAL,
                        overlayColor: 'full',
                        children: [
                            (0, h.jsxs)('div', {
                                className: dO().header,
                                children: [
                                    (0, h.jsx)(ed.DZ, { variant: 'h4', size: 'm', weight: 'bold', className: dO().title, children: a }),
                                    (0, h.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, h.jsx)(G.I, { variant: 'close', size: 'xxs' }),
                                        onClick: l,
                                        'aria-label': r({ id: 'ugc.close-edit-popup' }),
                                        'data-test-id': $.e8.ugc.UGC_EDIT_MODAL_CLOSE_BUTTON,
                                    }),
                                ],
                            }),
                            (0, h.jsxs)('div', {
                                className: dO().content,
                                children: [
                                    v,
                                    (0, h.jsxs)('div', {
                                        className: dO().buttons,
                                        children: [
                                            (0, h.jsx)(Q.$, {
                                                radius: 'xxxl',
                                                color: 'secondary',
                                                size: s ? 'l' : 'm',
                                                className: dO().button,
                                                onClick: l,
                                                'data-test-id': $.e8.ugc.UGC_EDIT_MODAL_CANCEL_BUTTON,
                                                children: (0, h.jsx)(eJ.A, { id: 'interface-actions.cancel' }),
                                            }),
                                            (0, h.jsx)(Q.$, {
                                                radius: 'xxxl',
                                                color: 'primary',
                                                size: s ? 'l' : 'm',
                                                className: dO().button,
                                                onClick: p,
                                                children: (0, h.jsx)(eJ.A, { id: 'interface-actions.save' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var dD = (function (e) {
                return ((e.TITLE = 'title'), (e.ARTIST = 'artist'), e);
            })({});
            let dB = (0, y.PA)(() => {
                let {
                        modals: { ugcTrackEditModal: e },
                        fullscreenPlayer: t,
                    } = (0, N.g)(),
                    { notify: a } = (0, eo.l)(),
                    { formatMessage: i } = (0, q.A)(),
                    l = (0, b.useMemo)(
                        () => [
                            { key: dD.TITLE, title: i({ id: 'track-modal.track-name' }), value: e.trackTitle, minLength: 1, maxLength: 200 },
                            { key: dD.ARTIST, title: i({ id: 'entity-names.singer' }), value: e.trackArtist, minLength: 0, maxLength: 200 },
                        ],
                        [i, e.trackArtist, e.trackTitle],
                    ),
                    n = (0, f.c)(async (l) => {
                        let { title: n, artist: s } = ((e) => {
                            var t, a;
                            let i = null == (t = e.find((e) => e.key === dD.TITLE)) ? void 0 : t.value,
                                l = null == (a = e.find((e) => e.key === dD.ARTIST)) ? void 0 : a.value;
                            return { title: (i = i ? i.trim() : ''), artist: (l = l ? l.trim() : '') };
                        })(l);
                        (e.track &&
                            (await e.track.changeTrackInfo(n, s)) === cZ.F.ERROR &&
                            a((0, h.jsx)(ec.h, { error: i({ id: 'ugc.editing-failed' }) }), { containerId: t.modal.isOpened ? er.u.FULLSCREEN_ERROR : er.u.ERROR }),
                            e.close());
                    });
                return e.modal.isOpened
                    ? (0, h.jsx)(dR, { open: e.modal.isOpened, title: i({ id: 'entity-names.track' }), content: l, onClose: e.close, onChange: n })
                    : null;
            });
            var dF = a(38501);
            let dU = null,
                dV = [],
                dz = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === dU)
                        return void dV.push((e) => {
                            e.add(...t);
                        });
                    dU.add(...t);
                },
                dK = 'google-adwords',
                dH = '10983745785',
                dW = [aV.KZ, aV.UZ, aV.KG, aV.AZ, aV.AM, aV.GE, aV.TR];
            var dY = a(11899),
                dq = a(74591),
                d$ = a(46474),
                dQ = a(23703);
            let dG = null,
                dZ = (0, y.PA)((e) => {
                    let {
                            className: t,
                            target: a,
                            silent: i,
                            serviceSessionId: l,
                            tariffOfferName: n,
                            offersBatchId: s,
                            offersPositionIds: r,
                            onLoad: o,
                            onSuccess: c,
                            onError: d,
                            onClose: u,
                        } = e,
                        _ = (0, b.useRef)(null),
                        { theme: m } = (0, tO.W)(),
                        { pwTools: p } = (0, dQ.q)(),
                        v = (() => {
                            let { albumCPA: e } = (0, N.g)(),
                                { getClidFromQuery: t, checkIsValidClid: a } = (0, d$.I)();
                            return (0, b.useCallback)(async () => {
                                let i = t();
                                if (!i || !e.albumId) return;
                                let { parsedClid: l, queryClid: n } = i;
                                if ((l && (await e.getCpa({ albumId: l.albumId })), a(e.cpa, e.albumId))) return n;
                            }, [e, t, a]);
                        })(),
                        x = (0, f.c)((e) => {
                            'purchase_data' === e.type && (null == c || c());
                        }),
                        y = (0, f.c)(() => {
                            null == d || d();
                        }),
                        C = (0, f.c)(() => {
                            null == u || u();
                        }),
                        g = (0, f.c)((e) => {
                            'loaded' === e.data.status && (null == o || o());
                        }),
                        A = (0, b.useCallback)(async () => {
                            if (!p || !_.current) return;
                            let { lang: e, mode: t, platform: o, widgetServiceName: c, authMethod: d } = p.options;
                            if (!dG)
                                try {
                                    dG = await p.loadManager();
                                } catch (e) {
                                    C();
                                    return;
                                }
                            dG.send({
                                type: 'init',
                                options: {
                                    lang: e,
                                    mode: t,
                                    platform: o,
                                    widgetServiceName: c,
                                    authMethod: d,
                                    silent: i,
                                    usePlusHost: !0,
                                    theme: m,
                                    onSuccess: x,
                                    onError: y,
                                    onReport: g,
                                    onClose: C,
                                },
                            });
                            let u = {
                                    target: a,
                                    eventSessionId: l,
                                    tariffOfferName: n,
                                    offersBatchId: s,
                                    offersPositionIds: r,
                                    targetNode: _.current,
                                    isTarifficator: !0,
                                },
                                h = await v();
                            (null !== h && (u.clid = h), dG.send({ type: 'open', options: u }));
                        }, [m, p, a, i, n, l, s, r, x, y, g, C, v]);
                    return (
                        (0, b.useEffect)(
                            () => (
                                A(),
                                () => {
                                    null == dG || dG.send({ type: 'close' });
                                }
                            ),
                            [A],
                        ),
                        (0, h.jsx)('div', { className: t, ref: _ })
                    );
                });
            var dX = a(98876),
                dJ = a.n(dX);
            let d0 = (0, y.PA)(() => {
                let { paymentWidgetModal: e, advert: t } = (0, N.g)(),
                    a = (0, ee.N)().get(J.vg),
                    { state: i, toggleTrue: l } = (0, eA.e)(!1),
                    n = (() => {
                        let { user: e } = (0, N.g)(),
                            { add: t } = (() => {
                                let [e, t] = (0, b.useState)(null !== dU);
                                return {
                                    init: (0, b.useCallback)(() => {
                                        var a, i;
                                        void 0 === (null == (a = window) ? void 0 : a.Ya.yanalytics) ||
                                            e ||
                                            ((dU = window.Ya.yanalytics),
                                            t(!0),
                                            (i = dU),
                                            dV.forEach((e) => {
                                                e(i);
                                            }),
                                            (dV = []));
                                    }, [e]),
                                    add: dz,
                                };
                            })(),
                            [a, i] = (0, b.useState)(!1);
                        return (
                            (0, b.useEffect)(() => {
                                void 0 !== e.account.data.geoRegionIso &&
                                    dW.includes(e.account.data.geoRegionIso) &&
                                    (t({ alias: dK, action: 'init', params: { provider: 'google-adwords', id: 'AW-'.concat(dH) } }), i(!0));
                            }, [e.account.data.geoRegionIso, t]),
                            {
                                track: (0, b.useCallback)(
                                    (e) => {
                                        a && t({ alias: dK, action: 'track', params: { id: dH, ...e } });
                                    },
                                    [a, t],
                                ),
                            }
                        );
                    })();
                (0, b.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                );
                let s = (0, b.useCallback)(() => {
                        (e.setStatus(dq.c.SUCCESS), n.track({ label: dY.em }), a.reachGoal(dY.l8));
                    }, [e, n, a]),
                    r = (0, b.useCallback)(() => {
                        (e.onModalOpenChange(!1), e.reset());
                    }, [e]),
                    o = (0, b.useCallback)(() => {
                        e.setStatus(dq.c.ERROR);
                    }, [e]);
                return (0, h.jsx)(T.a, {
                    open: e.modal.isOpened,
                    size: 'fitContent',
                    placement: 'center',
                    showHeader: !1,
                    withAnimation: !1,
                    className: (0, ew.$)(dJ().root, { [dJ().root_loaded]: i, [dJ().root_level_up]: t.isAdvertShown }),
                    'data-test-id': $.OA.paymentWidget.PAYMENT_WIDGET,
                    contentClassName: dJ().content,
                    overlayColor: 'full',
                    onOpenChange: e.onModalOpenChange,
                    children: (0, h.jsx)(dZ, {
                        className: dJ().widget,
                        target: e.target,
                        silent: e.isSilent,
                        serviceSessionId: e.serviceSessionId,
                        tariffOfferName: e.tariffOfferName,
                        offersBatchId: e.offersBatchId,
                        offersPositionIds: e.offersPositionIds,
                        onLoad: l,
                        onSuccess: s,
                        onError: o,
                        onClose: r,
                    }),
                });
            });
            var d1 = a(19998),
                d2 = a(4826),
                d4 = a.n(d2);
            let d8 = (0, y.PA)(() => {
                    let {
                        disclaimerModalState: e,
                        modals: { disclaimerModal: t },
                    } = (0, N.g)();
                    return (0, h.jsx)(T.a, {
                        size: 'fitContent',
                        placement: 'center',
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        showHeader: !1,
                        className: d4().root,
                        contentClassName: d4().content,
                        overlayClassName: d4().overlay,
                        overlayColor: 'full',
                        'data-test-id': $.OA.disclaimer.DISCLAIMER_MODAL,
                        closeOnOutsidePress: e.shouldCloseModalOnOutsidePress,
                        escapeKey: e.shouldCloseModalOnEscape,
                        children: (0, h.jsx)(d1.M, { modalState: e, onClose: t.close }),
                    });
                }),
                d6 = (0, y.PA)(() => {
                    var e;
                    let { communication: t, experiments: a, user: i, multivibe: l, trailer: n } = (0, N.g)(),
                        s = (0, dF.d)(),
                        r = a.checkExperiment(S.z.WebNextArtistInfo, 'on'),
                        { isEnabled: o, disabledRoomId: c } = l,
                        d = o && i.hasPlus;
                    return (0, h.jsxs)(h.Fragment, {
                        children: [
                            (null == (e = t.list) ? void 0 : e.modal) && (0, h.jsx)(cS, { modal: t.list.modal }),
                            (0, h.jsx)(g.a, { pageId: C.AppScreen.ExpandedPlayerScreen, pageIdForFrom: rE.b.PLAYER, children: (0, h.jsx)(rc, {}) }),
                            s && (0, h.jsx)(g.a, { pageId: C.AppScreen.VideoScreen, pageIdForFrom: rE.b.VIDEO_PLAYER, children: (0, h.jsx)(o3, {}) }),
                            (0, h.jsx)(d8, {}),
                            (0, h.jsx)(g.a, {
                                pageId: C.AppScreen.TrailerScreen,
                                pageIdForFrom: rE.b.TRAILER,
                                mainObjectType: C.DomainObjectType.Trailer,
                                mainObjectId: n.objectId,
                                children: (0, h.jsx)(ou, {}),
                            }),
                            s && (0, h.jsx)(tf, {}),
                            (0, h.jsx)(tE, {}),
                            (0, h.jsx)(tD, {}),
                            r && (0, h.jsx)(cb, {}),
                            !i.hasPlus && (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(l6, {}), (0, h.jsx)(ai, {}), (0, h.jsx)(rC, {})] }),
                            !i.hasPlus && (0, h.jsx)(aR, {}),
                            (0, h.jsx)(dm, {}),
                            (0, h.jsx)(tU, {}),
                            (0, h.jsx)(th, {}),
                            (0, h.jsx)(d0, {}),
                            (0, h.jsx)(dB, {}),
                            (0, h.jsx)(a_, {}),
                            (0, h.jsx)(cL, {}),
                            i.hasPlus && (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(dS, {}), (0, h.jsx)(dM, {})] }),
                            d && (0, h.jsxs)(h.Fragment, { children: [(0, h.jsx)(c7, {}), (0, h.jsx)(c6, {}), c && (0, h.jsx)(cW, { roomId: c })] }),
                        ],
                    });
                });
        },
        47225: (e) => {
            e.exports = { root: 'VibeModal_root__GAPMW', header: 'VibeModal_header__iF72V', content: 'VibeModal_content__loGj6' };
        },
        47580: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            let i = (e) => e.map((e) => e.name).join(', ');
        },
        47998: (e) => {
            e.exports = { root: 'MoreInfoLink_root___TgXc', content: 'MoreInfoLink_content__Rjqj_' };
        },
        48627: (e) => {
            e.exports = { image: 'SharedVibeModalLumen_image__jpStc', image_blurred: 'SharedVibeModalLumen_image_blurred__C5OaN' };
        },
        49176: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => i });
            var i = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        49333: (e) => {
            e.exports = { image: 'FamilyInviteErrorView_image__OyVA_', image_small: 'FamilyInviteErrorView_image_small__uczsu' };
        },
        49556: (e) => {
            e.exports = {
                root: 'DownloadMobileApp_root__RU7VS',
                closeButton: 'DownloadMobileApp_closeButton__t38Rw',
                text: 'DownloadMobileApp_text__bCbs3',
                subtitle: 'DownloadMobileApp_subtitle__vPtiS',
                buttons: 'DownloadMobileApp_buttons__mL4w1',
                button: 'DownloadMobileApp_button__r0E7Z',
                stayButton: 'DownloadMobileApp_stayButton__k3Ot8',
            };
        },
        49602: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => l });
            var i = a(18593);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Artist;
            }
        },
        50180: (e) => {
            e.exports = { root: 'PaywallFAQ_root__lDVk4', title: 'PaywallFAQ_title__G44Rp', content: 'PaywallFAQ_content__QJL9h' };
        },
        50550: (e) => {
            e.exports = {
                imageContainer: 'MultivibeInviteModal_imageContainer__PYWbp',
                multivibeCover: 'MultivibeInviteModal_multivibeCover__CCkS0',
                multivibeAvatar: 'MultivibeInviteModal_multivibeAvatar__kBvGN',
                multivibeControl: 'MultivibeInviteModal_multivibeControl__hoO93',
                guestAvatar: 'MultivibeInviteModal_guestAvatar__pIobb',
                spinnerWrapper: 'MultivibeInviteModal_spinnerWrapper__KyeNf',
            };
        },
        51190: (e) => {
            e.exports = {
                root: 'PlusModal_root__RA4rI',
                root_error: 'PlusModal_root_error__BYJfM',
                root_mobile: 'PlusModal_root_mobile__pEOEu',
                header: 'PlusModal_header__Xj_1a',
                content: 'PlusModal_content__QHgFY',
                contentWrapper: 'PlusModal_contentWrapper__dYFpI',
                growContainer: 'PlusModal_growContainer__eDnbY',
                growContainer_withoutPaddings: 'PlusModal_growContainer_withoutPaddings__H4fPH',
                buttons: 'PlusModal_buttons___Gy1Y',
                text: 'PlusModal_text__ioQgs',
                title: 'PlusModal_title__znUSU',
                description: 'PlusModal_description__PjqMm',
                link: 'PlusModal_link__va_hh',
                linkContainer: 'PlusModal_linkContainer__5NaN1',
                linkArrow: 'PlusModal_linkArrow__xDKKi',
            };
        },
        52048: (e) => {
            e.exports = {
                button: 'PlusModalButton_button__Ayw3M',
                shimmer: 'PlusModalButton_shimmer__JDPqE',
                button_mobile: 'PlusModalButton_button_mobile__V2Et4',
                shimmer_mobile: 'PlusModalButton_shimmer_mobile__ndcfv',
                text: 'PlusModalButton_text__GRAK7',
            };
        },
        53073: (e, t, a) => {
            'use strict';
            function i() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => i });
        },
        53281: (e) => {
            e.exports = {
                root: 'FullscreenPlayerDesktop_root___8vo1',
                important: 'FullscreenPlayerDesktop_important__dGfiL',
                header: 'FullscreenPlayerDesktop_header__OBhzq',
                modalContent: 'FullscreenPlayerDesktop_modalContent__Zs_LC',
                notification: 'FullscreenPlayerDesktop_notification__luD_J',
                closeButton: 'FullscreenPlayerDesktop_closeButton__MQ64s',
            };
        },
        53301: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => l });
            var i = a(42205);
            let l = (e, t) => {
                if (!e) return { clipIds: [], activeClipIndex: 0 };
                let a = e
                        .split(',')
                        .map(Number)
                        .filter((e) => e >= 0),
                    l = (0, i.z)(a, t);
                return { clipIds: a, activeClipIndex: l };
            };
        },
        53323: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => d });
            var i,
                l = a(87819),
                n = a(53548),
                s = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (l && (l += ' '), (l += i));
                                            else for (a in t) t[a] && (l && (l += ' '), (l += a));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    2876: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: a, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    792: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let i = a(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, i.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, a = Array(e), i = 0; i < e; i++) a[i] = arguments[i];
                                    return t.current.callback(...a);
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
                    597: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let i = a(810),
                            { innerWidth: l = 0, innerHeight: n = 0 } = window;
                        function s(e) {
                            let { top: t, right: a, bottom: i, left: s } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= n) || (i >= 0 && i <= n)) && ((s >= 0 && s <= l) || (a >= 0 && a <= l));
                        }
                        function r(e) {
                            var t, a;
                            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (a = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, i)) ? a : e.attributes[0];
                        }
                        function o(e, t) {
                            let a = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, a);
                                });
                            }, t);
                            return a;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = s),
                            (t.getElementNameByDataAttribute = r),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, a, l) {
                                let [{ freezeOnceVisible: n, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof a || void 0 === a ? [t.defaultOptions, a] : [{ ...t.defaultOptions, ...a }, l],
                                    [_, m] = (0, i.useState)({}),
                                    p = (0, i.useRef)(new Set()),
                                    v = (0, i.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : o((e) => {
                                                      let t = r(e.target);
                                                      if (t && v) {
                                                          if (p.current.has(t)) return;
                                                          (m((a) => ({ ...a, [t]: { isIntersecting: e.isIntersecting } })),
                                                              n && e.isIntersecting && (p.current.add(t), v.unobserve(e.target)));
                                                      }
                                                  }, d),
                                        [u],
                                    );
                                return (
                                    (0, i.useLayoutEffect)(
                                        () => (
                                            v &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = s(e.current))) {
                                                            let t = r(e.current);
                                                            m((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || v.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                v && v.disconnect();
                                            }
                                        ),
                                        [u, v, e.length],
                                    ),
                                    _
                                );
                            }));
                    },
                    4012: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var i = a(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return i.useMergeRefs;
                            },
                        });
                    },
                    1676: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let i = a(810);
                        t.useToggle = (e) => {
                            let [t, a] = (0, i.useState)(e);
                            (0, i.useEffect)(() => {
                                a(e);
                            }, [e]);
                            let l = (0, i.useCallback)(() => {
                                    a((e) => !e);
                                }, []),
                                n = (0, i.useCallback)(() => {
                                    a(!0);
                                }, []),
                                s = (0, i.useCallback)(() => {
                                    a(!1);
                                }, []);
                            return { state: t, toggle: l, setState: a, toggleTrue: n, toggleFalse: s };
                        };
                    },
                    1258: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.AutoScrollCarousel = void 0));
                        let i = a(4377),
                            l = a(810),
                            n = a(792),
                            s = a(597),
                            r = a(4012),
                            o = a(1676),
                            c = a(7962),
                            d = a(2134),
                            u = a(7262);
                        t.AutoScrollCarousel = (e) => {
                            let {
                                    ref: t,
                                    children: a,
                                    autoplay: { enabled: _, delay: m, stopOnMouseEnter: p, stopOnFocusIn: v, stopOnInteraction: x },
                                    onPointerEnter: h,
                                    onPointerLeave: y,
                                    onPointerDown: C,
                                    onPointerUp: g,
                                    onPointerCancel: b,
                                    onFocus: A,
                                    onBlur: f,
                                    onScroll: T,
                                    onScrollEnd: j,
                                    ...N
                                } = e,
                                { state: S, toggleTrue: I, toggleFalse: k } = (0, o.useToggle)(!1),
                                { state: L, toggleTrue: E, toggleFalse: M } = (0, o.useToggle)(!1),
                                { state: P, setState: O, toggleFalse: w } = (0, o.useToggle)(!1),
                                { state: R, setState: D } = (0, o.useToggle)(!1),
                                { state: B, setState: F } = (0, o.useToggle)(!1),
                                { state: U, toggleTrue: V, toggleFalse: z } = (0, o.useToggle)(!1),
                                { state: K, toggleTrue: H } = (0, o.useToggle)(!1),
                                { state: W, setState: Y } = (0, o.useToggle)(!1),
                                q = (0, l.useRef)(null),
                                $ = (0, r.useMergeRefs)([q, t]),
                                Q = (0, u.useScrollEndFallback)(z),
                                G = l.Children.count(a),
                                Z = _ && G > 1 && R && B && !W && !((p && P) || (v && S) || (x && K) || L || U),
                                X = (0, n.useCallbackRef)((e) => {
                                    (O('mouse' === e.pointerType), null == h || h(e));
                                }),
                                J = (0, n.useCallbackRef)((e) => {
                                    (w(), M(), null == y || y(e));
                                }),
                                ee = (0, n.useCallbackRef)((e) => {
                                    (E(), H(), null == C || C(e));
                                }),
                                et = (0, n.useCallbackRef)((e) => {
                                    (M(), null == g || g(e));
                                }),
                                ea = (0, n.useCallbackRef)((e) => {
                                    (M(), null == b || b(e));
                                }),
                                ei = (0, n.useCallbackRef)((e) => {
                                    (L || I(), null == A || A(e));
                                }),
                                el = (0, n.useCallbackRef)((e) => {
                                    (e.currentTarget.contains(e.relatedTarget) || k(), null == f || f(e));
                                }),
                                en = (0, n.useCallbackRef)((e) => {
                                    (V(), Q(e.currentTarget), null == T || T(e));
                                }),
                                es = (0, n.useCallbackRef)((e) => {
                                    (z(), null == j || j(e));
                                });
                            return (
                                (0, l.useEffect)(() => {
                                    let e = matchMedia('(prefers-reduced-motion: reduce)'),
                                        t = () => Y(e.matches);
                                    return (t(), e.addEventListener('change', t), () => e.removeEventListener('change', t));
                                }, [Y]),
                                (0, l.useEffect)(() => {
                                    let e = q.current;
                                    if (!e) return;
                                    let t = (0, s.createIntersectionObserver)((e) => {
                                        D(e.isIntersecting && e.intersectionRatio > 0);
                                    });
                                    return (t.observe(e), () => t.disconnect());
                                }, [q, D]),
                                (0, l.useEffect)(() => {
                                    let e = () => F('visible' === document.visibilityState);
                                    return (document.addEventListener('visibilitychange', e), e(), () => document.removeEventListener('visibilitychange', e));
                                }, [F]),
                                (0, l.useEffect)(() => {
                                    let e = q.current;
                                    if (!e || !Z) return;
                                    let t = setInterval(() => {
                                        let a = (0, d.getNextCarouselScrollPosition)(e);
                                        void 0 !== a && (clearInterval(t), V(), e.scrollTo({ left: a, behavior: 'smooth' }));
                                    }, m);
                                    return () => clearInterval(t);
                                }, [q, m, Z, G, V]),
                                (0, i.jsx)(c.CarouselBase, {
                                    ref: $,
                                    ...N,
                                    onPointerEnter: X,
                                    onPointerLeave: J,
                                    onPointerDown: ee,
                                    onPointerUp: et,
                                    onPointerCancel: ea,
                                    onFocus: ei,
                                    onBlur: el,
                                    onScroll: en,
                                    onScrollEnd: es,
                                    children: a,
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
                                let a = getComputedStyle(e),
                                    i = parseFloat(a.scrollPaddingLeft) || 0,
                                    l = parseFloat(a.scrollPaddingRight) || 0,
                                    n = e.getBoundingClientRect().left + e.clientLeft,
                                    s = 0;
                                for (let a of e.children) {
                                    let r = a.getBoundingClientRect(),
                                        o = getComputedStyle(a).scrollSnapAlign,
                                        c = r.left - n + e.scrollLeft,
                                        d = Math.max(0, Math.min(t, 'center' === o ? c + r.width / 2 - (e.clientWidth + i - l) / 2 : c - i));
                                    if (d > e.scrollLeft + 1) {
                                        s = d;
                                        break;
                                    }
                                }
                                if (!(1 >= Math.abs(s - e.scrollLeft))) return s;
                            }));
                    },
                    7262: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScrollEndFallback = void 0));
                        let i = a(810),
                            l = a(792);
                        t.useScrollEndFallback = (e) => {
                            let t = (0, i.useRef)(void 0),
                                a = (0, l.useCallbackRef)(e);
                            return (
                                (0, i.useEffect)(() => () => clearTimeout(t.current), []),
                                (0, l.useCallbackRef)((e) => {
                                    'onscrollend' in e || (clearTimeout(t.current), (t.current = setTimeout(a, 200)));
                                })
                            );
                        };
                    },
                    4014: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let i = a(4377),
                            l = a(1258),
                            n = a(7962);
                        t.Carousel = (e) => {
                            let { autoplay: t, ...a } = e;
                            return t ? (0, i.jsx)(l.AutoScrollCarousel, { ...a, autoplay: t }) : (0, i.jsx)(n.CarouselBase, { ...a });
                        };
                    },
                    7962: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CarouselBase = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = i(a(2876));
                        t.CarouselBase = (e) => {
                            let { className: t, itemClassName: a, children: i, ref: o, role: c, ...d } = e;
                            return (0, l.jsx)('ol', {
                                ref: o,
                                className: (0, n.clsx)(r.default.root, t),
                                ...d,
                                role: null != c ? c : 'list',
                                children: s.Children.map(i, (e) => (0, l.jsx)('li', { className: (0, n.clsx)(r.default.item, a), children: e })),
                            });
                        };
                    },
                    1964: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(n, 2));
                    },
                },
                r = {};
            function o(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var a = (r[e] = { exports: {} });
                return (s[e].call(a.exports, a, a.exports, o), a.exports);
            }
            ((o.d = (e, t) => {
                for (var a in t) o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var c = {};
            (() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                var e = o(4014);
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
        56386: (e) => {
            e.exports = {
                root: 'TopSectionRUWithBenefits_root__wF1_n',
                main: 'TopSectionRUWithBenefits_main__0igzf',
                logo: 'TopSectionRUWithBenefits_logo__PbF2i',
                moreInfoChildren: 'TopSectionRUWithBenefits_moreInfoChildren__9OEAu',
                title: 'TopSectionRUWithBenefits_title__pXmdX',
                benefits: 'TopSectionRUWithBenefits_benefits__GweJJ',
                benefit: 'TopSectionRUWithBenefits_benefit__12ENa',
                benefit_recommendation: 'TopSectionRUWithBenefits_benefit_recommendation__PMApk',
                benefitLogo: 'TopSectionRUWithBenefits_benefitLogo__ntii8',
                benefitLabelDesktop: 'TopSectionRUWithBenefits_benefitLabelDesktop__eITJ5',
                benefitLabelMobile: 'TopSectionRUWithBenefits_benefitLabelMobile__ndVcr',
                buySubscriptionBlock: 'TopSectionRUWithBenefits_buySubscriptionBlock___AM6p',
                goHomeLink: 'TopSectionRUWithBenefits_goHomeLink__EJjJD',
            };
        },
        56446: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => u });
            var i = a(88800),
                l = a(53548),
                n = a(2058),
                s = a(17392),
                r = a(96817),
                o = a(52300),
                c = a(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: a,
                            size: l,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: v,
                            forwardRef: x,
                            style: h,
                            children: y,
                        } = e,
                        { formatMessage: C } = (0, n.A)(),
                        g = C({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(r.$, {
                        className: v,
                        color: 'secondary',
                        radius: d,
                        size: l,
                        variant: t,
                        withRipple: a,
                        flexIcon: !0,
                        'aria-label': g,
                        onClick: m,
                        ref: x,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: h,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                u = (0, l.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        56712: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => f });
            var i = a(88800),
                l = a(65724),
                n = a(84961),
                s = a(53548),
                r = a(91177),
                o = a(46482),
                c = a(29993),
                d = a(52073),
                u = a(5407),
                _ = a(9618),
                m = a(4795),
                p = a(55693),
                v = a(7123),
                x = a(72288),
                h = a(8990),
                y = a(2058),
                C = a(47580),
                g = a(95993),
                b = a(27157),
                A = a.n(b);
            let f = (0, n.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: n,
                        meta: b,
                        beforeBlock: f,
                        controls: T,
                        playButtonCellRender: j,
                        withLightning: N,
                        isPlaying: S,
                        isCurrent: I,
                        togglePlay: k,
                        restartPlay: L,
                        onPlayClick: E,
                        playButtonIconSize: M,
                        skipFreemiumCloseListeningPaywall: P = !1,
                        ...O
                    } = e,
                    { shouldShowBuySubscriptionModal: w, showBuySubscriptionModal: R } = (0, _.q)(),
                    {
                        track: D,
                        fullscreenPlayer: B,
                        settings: { isMobile: F },
                        album: U,
                        albumCPA: { isPlusCPAPlayerBarEnabled: V },
                        paywall: { modal: z },
                    } = (0, x.g)(),
                    K = (0, r.D)(),
                    H = (0, o.g)(),
                    W = (0, u.P)(),
                    Y = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, y.A)();
                        return ((e, t, a) => {
                            var i;
                            let { withLightning: l } = t,
                                n = (0, C.j)(null != (i = e.artists) ? i : []);
                            return e.isAvailable
                                ? [n, e.title, e.version, l && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(n, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: a }, i);
                    })({ withLightning: N, track: n }),
                    q = ((e) => {
                        let { sonataState: t } = (0, x.g)(),
                            a = t.status === v.MT.LOADING_MEDIA_SOURCE || t.status === v.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(n.entityId),
                    $ = V(U.id, null == (t = U.meta) ? void 0 : t.isNonMusic),
                    Q = n.isAvailable && w && !$,
                    G = (0, m.N)(),
                    Z = n.isAvailable && G && !$ && !P,
                    X = (0, g.w)({ track: n, callback: k }),
                    J = (0, c.c)(() => {
                        D.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, g.w)({ track: n, callback: J }),
                    { sendPlaySearchFeedback: et } = (0, p.z)(),
                    [ea, ei] = (0, s.useState)(!1),
                    el = (0, c.c)(() => {
                        if (!W()) {
                            if (Q) return void R();
                            if (Z) return void z.open();
                            (ea || S || (ei(!0), null == et || et()), X(), S || H(), null == E || E(!S));
                        }
                    }),
                    en = (0, c.c)(() => {
                        if (S) return void L();
                        el();
                    }),
                    es = (0, c.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (w && n.isAvailableOnlyForPlus && R(), G && n.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if (Q) return void R();
                        let t = !F && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !B.modal.isOpened));
                        return Z && !t
                            ? void z.open()
                            : ((0, d.P)(e, A().ripple), F)
                              ? void el()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !B.modal.isOpened && (ee(), Z && z.open()));
                    }),
                    er = null == j ? void 0 : j({ onPlayButtonClick: el, isPlaying: S, isCurrent: I, isLoading: q, playButtonIconSize: M });
                return (0, i.jsxs)(h.C, {
                    ref: K,
                    'aria-label': Y,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': n.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    onClick: es,
                    className: (0, l.$)(A().root, { [A().root_disabled]: !n.isAvailable, [A().root_current]: I && F }, a),
                    ...O,
                    children: [f, er, b, T],
                });
            });
        },
        58660: (e) => {
            e.exports = {
                root: 'EditContentModal_root__spGT4',
                modalContent: 'EditContentModal_modalContent__uk5Di',
                header: 'EditContentModal_header__F6BJQ',
                title: 'EditContentModal_title__OFu19',
                content: 'EditContentModal_content__6yEGM',
                field: 'EditContentModal_field__rexIL',
                label: 'EditContentModal_label__Cf3Kp',
                input: 'EditContentModal_input__8O8GH',
                input_error: 'EditContentModal_input_error__fxTOr',
                buttons: 'EditContentModal_buttons__bHzfS',
                button: 'EditContentModal_button__usS1Z',
            };
        },
        59378: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => c });
            var i = a(88800),
                l = a(65724),
                n = a(84961),
                s = a(53548),
                r = a(34970),
                o = a.n(r);
            let c = (0, n.PA)((e) => {
                let {
                        className: t,
                        text: a = '',
                        maxTextLength: n,
                        minTextLength: r,
                        variant: c = 'input',
                        shouldFinishOnKeyPress: d = !1,
                        placeholder: u,
                        onChangeFinish: _,
                        withOutline: m = !1,
                        readOnly: p = !1,
                        'aria-label': v,
                        'data-test-id': x,
                    } = e,
                    [h, y] = (0, s.useState)(a),
                    C = (0, s.useRef)(!1),
                    g = (0, s.useRef)(null),
                    b = (0, s.useCallback)((e) => {
                        y(e.target.value);
                    }, []),
                    A = (0, s.useCallback)(
                        (e) => {
                            if (d && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (C.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [d],
                    ),
                    f = (0, s.useCallback)(() => {
                        let e = h.trim();
                        C.current || (r && e.length < r) ? ((C.current = !1), null == _ || _(a)) : null == _ || _(e);
                    }, [h, C, r, _, a]);
                ((0, s.useEffect)(() => {
                    g.current && ((g.current.selectionStart = g.current.value.length), (g.current.selectionEnd = g.current.value.length));
                }, []),
                    (0, s.useLayoutEffect)(() => {
                        let e = g.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [g, h]));
                let T = (0, s.useMemo)(() => ('textarea' === c ? (e) => (0, i.jsx)('textarea', { ref: g, rows: 6, ...e }) : (e) => (0, i.jsx)('input', { ...e })), [c]);
                return (0, i.jsx)(T, {
                    className: (0, l.$)(o().root, t, { [o().root_textarea]: 'textarea' === c, [o().root_outline]: m }),
                    type: 'text',
                    value: h,
                    readOnly: p,
                    maxLength: n,
                    onBlur: f,
                    onChange: b,
                    onKeyDown: A,
                    placeholder: u,
                    'aria-label': v,
                    autoFocus: !0,
                    'data-test-id': x,
                });
            });
        },
        59918: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => n });
            var i = a(27169),
                l = a(29201);
            let n = (e) => {
                var t, a, n, s, r;
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
                                            disclaimers: (0, l.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: i.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, l.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (a = e.counts) ? void 0 : a.albums) || 0,
                              alsoAlbums: (null == (n = e.counts) ? void 0 : n.compilations) || 0,
                              tracks: (null == (s = e.counts) ? void 0 : s.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (r = e.trailer) ? void 0 : r.isAvailable) },
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
        60413: (e) => {
            e.exports = {
                root: 'TopSectionDesktop_root__lDNkV',
                wrapper: 'TopSectionDesktop_wrapper__sEPZr',
                content: 'TopSectionDesktop_content__356Uk',
                title: 'TopSectionDesktop_title__JFo6R',
                label: 'TopSectionDesktop_label__JmilG',
                buySubscriptionBlock: 'TopSectionDesktop_buySubscriptionBlock__dhv3Z',
            };
        },
        60906: (e) => {
            e.exports = {
                root: 'TrackComplaintModal_root__vMG5q',
                root_mobile: 'TrackComplaintModal_root_mobile__B470z',
                content: 'TrackComplaintModal_content__kFsQz',
                iframe: 'TrackComplaintModal_iframe__qp1Jv',
            };
        },
        61304: (e) => {
            e.exports = {
                root: 'BuySubscriptionBlock_root__vcGLK',
                text_main: 'BuySubscriptionBlock_text_main__fU5RA',
                text_addition: 'BuySubscriptionBlock_text_addition__bbHYT',
                text_secondary: 'BuySubscriptionBlock_text_secondary__ZT9ke',
                buttonContainer: 'BuySubscriptionBlock_buttonContainer__Tu2hm',
                buttonContainer_columnLayout: 'BuySubscriptionBlock_buttonContainer_columnLayout__MH7PE',
                root_withSecondButton: 'BuySubscriptionBlock_root_withSecondButton___v2dL',
                button: 'BuySubscriptionBlock_button__EqUAg',
                stickyContainer: 'BuySubscriptionBlock_stickyContainer__yA50y',
                stickyContainer_enter: 'BuySubscriptionBlock_stickyContainer_enter__50hEo',
                stickyContainer_enter_active: 'BuySubscriptionBlock_stickyContainer_enter_active__4vFVC',
                'animation-show': 'BuySubscriptionBlock_animation-show__xlvuU',
                stickyContainer_exit: 'BuySubscriptionBlock_stickyContainer_exit__9Axef',
                stickyContainer_exit_active: 'BuySubscriptionBlock_stickyContainer_exit_active__HjXVn',
                'animation-hide': 'BuySubscriptionBlock_animation-hide__gnUki',
            };
        },
        61386: (e) => {
            e.exports = {
                root: 'MainCardDesktop_root__qa00U',
                root_horizontal: 'MainCardDesktop_root_horizontal__Fy_E0',
                textContainer: 'MainCardDesktop_textContainer__mzWGu',
                imageContainer: 'MainCardDesktop_imageContainer__81MQy',
                image: 'MainCardDesktop_image__nUJz3',
                root_vertical: 'MainCardDesktop_root_vertical__KGeJ2',
                imageContainer_align_center: 'MainCardDesktop_imageContainer_align_center__kEU_O',
                imageContainer_align_right: 'MainCardDesktop_imageContainer_align_right__T12Qo',
                text: 'MainCardDesktop_text__omw7l',
            };
        },
        61898: (e) => {
            e.exports = {
                title: 'ArtistStats_title__Yxyh1',
                count: 'ArtistStats_count__8h5zM',
                stats: 'ArtistStats_stats__Hammf',
                statsNumber_positive: 'ArtistStats_statsNumber_positive__GlukF',
                statsNumber_negative: 'ArtistStats_statsNumber_negative__C0bH5',
            };
        },
        62214: (e) => {
            e.exports = {
                root: 'PlayQueueTitle_root__E2XOW',
                root_withDnD: 'PlayQueueTitle_root_withDnD__8kctq',
                linkContainer: 'PlayQueueTitle_linkContainer__xqLIj',
                titleIcon: 'PlayQueueTitle_titleIcon__z1B_p',
                title: 'PlayQueueTitle_title__q3ppG',
                linkText: 'PlayQueueTitle_linkText__9mgvM',
                heading: 'PlayQueueTitle_heading__JrzQq',
                heading_withOffset: 'PlayQueueTitle_heading_withOffset__ZRyEr',
                subTitle: 'PlayQueueTitle_subTitle__RzrJA',
                modeTitle: 'PlayQueueTitle_modeTitle__KixWV',
            };
        },
        63028: (e) => {
            e.exports = {
                root: 'ArtistAboutModalImageSlider_root__L18Xb',
                button: 'ArtistAboutModalImageSlider_button__GPXyc',
                image: 'ArtistAboutModalImageSlider_image__3CTLr',
                moreCovers: 'ArtistAboutModalImageSlider_moreCovers__7oDPM',
                moreCoversText: 'ArtistAboutModalImageSlider_moreCoversText__W_P8L',
            };
        },
        63807: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => i });
            let i = (0, a(53548).createContext)({
                title: null,
                setTitle: () => {},
                titleElement: null,
                scrollElement: null,
                setTitleElement: () => {},
                child: null,
                setChild: () => {},
                childElement: null,
                setChildElement: () => {},
                isScrolledChild: !1,
                isScrolledTitle: !1,
                isScrolling: !1,
                isHeaderHidden: !1,
            });
        },
        63983: (e) => {
            e.exports = {
                root: 'FullscreenPlayerMobile_root__Sqyh0',
                important: 'FullscreenPlayerMobile_important__1lAN3',
                header: 'FullscreenPlayerMobile_header__8KH28',
                headerCenter: 'FullscreenPlayerMobile_headerCenter___EqSP',
                modalContent: 'FullscreenPlayerMobile_modalContent__m2cbB',
                castButton: 'FullscreenPlayerMobile_castButton__3ZgER',
                footer: 'FullscreenPlayerMobile_footer__LRvhK',
                footerContainer: 'FullscreenPlayerMobile_footerContainer__aupK1',
                playQueueButton_active: 'FullscreenPlayerMobile_playQueueButton_active__CG2s8',
                syncLyricsButton_active: 'FullscreenPlayerMobile_syncLyricsButton_active__6L4YF',
                notification: 'FullscreenPlayerMobile_notification__V1cxP',
            };
        },
        64184: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => i });
            var i = (function (e) {
                return ((e.INFO = 'INFO'), (e.SUCCESS = 'SUCCESS'), e);
            })({});
        },
        65480: (e) => {
            e.exports = {
                content_ru: 'BooksSectionMobile_content_ru__xiiQh',
                content_by: 'BooksSectionMobile_content_by__t_UNK',
                card: 'BooksSectionMobile_card__t6bb7',
                logo_ru: 'BooksSectionMobile_logo_ru__cnYJJ',
                logo_en: 'BooksSectionMobile_logo_en__wcgiD',
            };
        },
        66022: (e) => {
            e.exports = {
                icon: 'PlayQueueButton_icon__7fc0G',
                icon_active: 'PlayQueueButton_icon_active__4A8H2',
                animation_scaled: 'PlayQueueButton_animation_scaled__w_Wir',
                scale: 'PlayQueueButton_scale__dXShR',
                animation_unscaled: 'PlayQueueButton_animation_unscaled__Lt_j9',
                unscale: 'PlayQueueButton_unscale__BlmKQ',
            };
        },
        66197: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => i });
            var i = (function (e) {
                return ((e.VIDEO = 'video-ad-player'), (e.SLOT = 'video-ad-container'), e);
            })({});
        },
        67542: (e) => {
            e.exports = { root: 'PaywallRU_root__X8j2f' };
        },
        68164: (e) => {
            e.exports = {
                line: 'SyncLyricsScroller_line__Vh6WN',
                counter: 'SyncLyricsScroller_counter__B2E7K',
                counterLine: 'SyncLyricsScroller_counterLine__NpBT4',
                root: 'SyncLyricsScroller_root__amiLm',
                root_withVisibleUpperLyrics: 'SyncLyricsScroller_root_withVisibleUpperLyrics__d7noO',
                root_withVisibleScrolledLyrics: 'SyncLyricsScroller_root_withVisibleScrolledLyrics__lowGE',
                root_intro: 'SyncLyricsScroller_root_intro__13gls',
                root_outro: 'SyncLyricsScroller_root_outro__XlDH5',
                line_last: 'SyncLyricsScroller_line_last__liS_1',
                root_prepare: 'SyncLyricsScroller_root_prepare__h0Gf1',
                line_active: 'SyncLyricsScroller_line_active__6lLvH',
            };
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
        69824: (e) => {
            e.exports = {
                root: 'ArtistAboutModalContent_root__XGW1F',
                header: 'ArtistAboutModalContent_header__ws7Ap',
                title: 'ArtistAboutModalContent_title__hMO2k',
                subtitle: 'ArtistAboutModalContent_subtitle__OpssN',
                descriptionWrapper: 'ArtistAboutModalContent_descriptionWrapper__jNL4G',
                description: 'ArtistAboutModalContent_description__KlWvL',
                readMoreButton: 'ArtistAboutModalContent_readMoreButton__1ageU',
                bandlinkScanner: 'ArtistAboutModalContent_bandlinkScanner__Fwv2x',
            };
        },
        70278: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => l });
            var i = a(59918);
            let l = (e) => {
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
                let a = (null == (t = e.artists) ? void 0 : t.map(i.N)) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: a,
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
        70322: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => _ });
            var i = a(88800),
                l = a(65724),
                n = a(17392),
                s = a(29993),
                r = a(96817),
                o = a(29504),
                c = a(72288),
                d = a(72858),
                u = a.n(d);
            let _ = (e) => {
                let { className: t, text: a, analyticsNavigatedCallback: d } = e,
                    {
                        settings: { isMobile: _ },
                        paywall: m,
                    } = (0, c.g)(),
                    p = (0, s.c)((e) => {
                        (m.openModal(), e.stopPropagation(), null == d || d());
                    });
                return _
                    ? (0, i.jsx)(r.$, {
                          onClick: p,
                          className: (0, l.$)(u().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          children: (0, i.jsx)(o.HL, { className: u().title, weight: 'bold', variant: 'div', size: 'l', children: a }),
                      })
                    : (0, i.jsx)(r.$, {
                          onClick: p,
                          className: (0, l.$)(u().root, t),
                          color: 'plus',
                          size: 'm',
                          radius: 'xxxl',
                          'data-test-id': n.S7.PLUS_PAYWALL_BUTTON,
                          children: (0, i.jsx)(o.HL, { className: u().title, weight: 'bold', variant: 'div', size: 'm', children: a }),
                      });
            };
        },
        70810: (e) => {
            e.exports = { root: 'ArtistSocialLinks_root__9wQxA', link: 'ArtistSocialLinks_link__UFvCL', icon: 'ArtistSocialLinks_icon__Y9VLu' };
        },
        71335: (e) => {
            e.exports = {
                root: 'TrackModalLyricsShimmer_root__t88sX',
                title: 'TrackModalLyricsShimmer_title__lIyk4',
                lyrics: 'TrackModalLyricsShimmer_lyrics__BSM_Q',
                important: 'TrackModalLyricsShimmer_important__U1BbD',
                button: 'TrackModalLyricsShimmer_button__uAG_w',
            };
        },
        71594: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => i });
            let i = RegExp('(px|%)$');
        },
        71660: (e) => {
            e.exports = { text: 'FreePlayerLoginNotification_text__u7Wr5', loginButton: 'FreePlayerLoginNotification_loginButton__ogYTA' };
        },
        71716: (e) => {
            e.exports = {
                root: 'PlayQueueAfterPlayingBlock_root__A7_wI',
                title: 'PlayQueueAfterPlayingBlock_title__nS_nG',
                title_withDnD: 'PlayQueueAfterPlayingBlock_title_withDnD__jsVTk',
                prevTrack: 'PlayQueueAfterPlayingBlock_prevTrack__wDAPP',
                animatedContent: 'PlayQueueAfterPlayingBlock_animatedContent__6rvOT',
                animatedContent_moveToTop: 'PlayQueueAfterPlayingBlock_animatedContent_moveToTop__bW549',
                'move-to-top': 'PlayQueueAfterPlayingBlock_move-to-top__c_AzJ',
                animatedContent_moveFromTop: 'PlayQueueAfterPlayingBlock_animatedContent_moveFromTop__ZLgMV',
                'move-from-top': 'PlayQueueAfterPlayingBlock_move-from-top___8bwu',
                'move-prev-track-from-top': 'PlayQueueAfterPlayingBlock_move-prev-track-from-top__XY1VA',
                animatedContent_moveFromTopSingleTrack: 'PlayQueueAfterPlayingBlock_animatedContent_moveFromTopSingleTrack__rrewW',
                'move-from-top-single-track': 'PlayQueueAfterPlayingBlock_move-from-top-single-track__8po97',
                'move-prev-track-from-top-single-track': 'PlayQueueAfterPlayingBlock_move-prev-track-from-top-single-track__ySSca',
            };
        },
        71880: (e) => {
            e.exports = {
                root: 'TrackLyricsModal_root__KsVRf',
                header: 'TrackLyricsModal_header__nWar3',
                modalContent: 'TrackLyricsModal_modalContent__uYdL2',
                content: 'TrackLyricsModal_content__Cstzi',
                explicitMark: 'TrackLyricsModal_explicitMark__eL04d',
                important: 'TrackLyricsModal_important__0Ie9h',
                version: 'TrackLyricsModal_version__l9sxZ',
                overlay: 'TrackLyricsModal_overlay__0Ehwu',
            };
        },
        72110: (e) => {
            e.exports = { root: 'PaywallBY_root__XMtUB' };
        },
        72806: (e) => {
            e.exports = {
                root: 'VideoPlayerBarDesktop_root__OxypO',
                info: 'VideoPlayerBarDesktop_info__ulYvU',
                infoCard: 'VideoPlayerBarDesktop_infoCard__mE___',
                coverContainer: 'VideoPlayerBarDesktop_coverContainer__xV_VP',
                cover: 'VideoPlayerBarDesktop_cover__Nf4WW',
                description: 'VideoPlayerBarDesktop_description__sAiwG',
                artists: 'VideoPlayerBarDesktop_artists__PNY62',
                artistLink: 'VideoPlayerBarDesktop_artistLink__FgFZ8',
                infoButtons: 'VideoPlayerBarDesktop_infoButtons__9xWZ3',
                sonata: 'VideoPlayerBarDesktop_sonata__VrtGS',
                meta: 'VideoPlayerBarDesktop_meta__KlPBv',
                slider: 'VideoPlayerBarDesktop_slider__xULTh',
                important: 'VideoPlayerBarDesktop_important__HR9Xf',
            };
        },
        72858: (e) => {
            e.exports = { root: 'PlusPaywallButton_root__ftsxl', title: 'PlusPaywallButton_title__8PpX0', subtitle: 'PlusPaywallButton_subtitle__brC59' };
        },
        73240: (e) => {
            e.exports = {
                root: 'FullscreenVideoPlayerDesktop_root__a69Pd',
                important: 'FullscreenVideoPlayerDesktop_important__NvXzL',
                header: 'FullscreenVideoPlayerDesktop_header__oiftJ',
                modalContent: 'FullscreenVideoPlayerDesktop_modalContent__YeGCV',
                closeButton: 'FullscreenVideoPlayerDesktop_closeButton__OqSFs',
                logoLink: 'FullscreenVideoPlayerDesktop_logoLink__o92zi',
                logo_ru: 'FullscreenVideoPlayerDesktop_logo_ru__uRbpz',
                logo_en: 'FullscreenVideoPlayerDesktop_logo_en__mBcdF',
            };
        },
        73441: (e) => {
            e.exports = { button: 'CrackdownModal_button__IWTpu', important: 'CrackdownModal_important__eKBtD', buttonMainText: 'CrackdownModal_buttonMainText__pAlET' };
        },
        73805: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => O });
            var i = a(88800),
                l = a(65724),
                n = a(84961),
                s = a(53548),
                r = a(2058),
                o = a(97234),
                c = a(17392),
                d = a(29993),
                u = a(52300),
                _ = a(17610),
                m = a(29504),
                p = a(42174),
                v = a(96817);
            let x = (e) => {
                let { className: t, variant: a = 'text', onClick: l, iconClassName: n, iconSize: o, size: d = 's', ariaLabel: _ } = e,
                    { formatMessage: m } = (0, r.A)(),
                    p = null != _ ? _ : m({ id: 'play-queue.delete-from-queue' }),
                    x = (0, s.useCallback)(
                        (e) => {
                            (null == l || l(), e.stopPropagation());
                        },
                        [l],
                    );
                return (0, i.jsx)(v.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: x,
                    icon: (0, i.jsx)(u.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var h = a(5407),
                y = a(57934),
                C = a(55693),
                g = a(72288),
                b = a(49738),
                A = a(56446),
                f = a(64546),
                T = a(29831),
                j = a(30123),
                N = a(54965),
                S = a(1829),
                I = a(82092),
                k = a.n(I),
                L = a(79262),
                E = a(41867),
                M = a.n(E);
            let P = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, r.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(L.A, { value: t.downloadingProgress, size: 16, className: M().downloadingProgress, progressBarClassName: M().progress })
                          : null;
                }),
                O = (0, n.PA)((e) => {
                    var t;
                    let {
                            className: a,
                            track: n,
                            withLightning: v,
                            ignoreDislikedStyles: I,
                            onLikeClick: L,
                            utmLink: E,
                            withSecondaryColor: M,
                            handleRemove: O,
                            withTrailer: w = !0,
                            likeIconSize: R = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: F, trailer: U } = (0, g.g)(),
                        { formatMessage: V } = (0, r.A)(),
                        { sendLikeSearchFeedback: z } = (0, C.z)(),
                        [K, H] = (0, s.useState)(!1),
                        [W, Y] = (0, s.useState)(!1),
                        q = (0, h.P)(),
                        $ = (0, p.K)(n),
                        {
                            duration: Q,
                            lightning: G,
                            ugc: Z,
                        } = ((e, t, a) => {
                            var i;
                            let { withLightning: l, isUGC: n } = t,
                                s = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / j.k7);
                                              return (0, N.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== s ? { text: s, ariaLabel: (0, T.j)(Math.round((null != (i = e.durationMs) ? i : 0) / 1e3), a) } : null,
                                lightning: l ? { label: a({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: n ? { label: a({ id: 'ugc.track-description' }) } : null,
                            };
                        })(n, { withLightning: v, isUGC: n.isUGC }, V),
                        X = (0, y.F)(),
                        J = F.hasPlus,
                        ee = !n.isRemoved && n.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            (K || n.isLiked || (H(!0), null == z || z()), await $(), null == L || L(n.isLiked));
                        }),
                        ea = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, d.c)((e) => {
                            if ((e.stopPropagation(), q())) return void e.preventDefault();
                            (U.openTrackTrailer(n.id), X(o.DomainObjectType.Track, n.id));
                        }),
                        el = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: ea,
                                    children: (0, i.jsx)(S._, {
                                        track: n,
                                        open: W,
                                        onOpenChange: Y,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: E,
                                        className: (0, l.$)(k().contextMenu, { [k().contextMenu_visible]: W }),
                                        handleRemove: O,
                                        withTrailer: w,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ea, O, W, ee, w, n, E]);
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(k().root, k().controls, a, {
                            [k().controls_dislikedControls]: n.isDisliked,
                            [k().controls_dislikedColors]: n.isDisliked && !I,
                            [k().controls_disabled]: !n.isAvailable,
                            [k().root_withSecondaryColor]: M,
                        }),
                        children: [
                            G && (0, i.jsx)(u.I, { 'aria-label': G.label, size: 'xxs', className: k().lightning, variant: 'lightning' }),
                            Z &&
                                (0, i.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: k().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(_.ZI, { children: Z.label }),
                                    ],
                                }),
                            J && (0, i.jsx)('div', { className: (0, l.$)(k().item, k().downloadIcon), children: (0, i.jsx)(P, { track: n }) }),
                            O && !B && (0, i.jsx)(x, { size: 'xs', iconSize: 'xxs', className: (0, l.$)(k().item, k().removeButton), onClick: O, ariaLabel: D }),
                            ee &&
                                (0, i.jsx)(f.WithOffline, {
                                    fallback: (0, i.jsx)(b.c, {
                                        size: 'xs',
                                        iconSize: R,
                                        className: (0, l.$)(k().item, k().likeIcon),
                                        isLiked: n.isLiked,
                                        onClick: et,
                                        disabled: !F.isAuthorized,
                                    }),
                                }),
                            (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                n.isAvailable &&
                                (0, i.jsx)(f.WithOffline, {
                                    fallback: (0, i.jsx)(A.k, {
                                        className: (0, l.$)(k().item, k().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, l.$)(k().item, k().contextMenuWrapper),
                                children: [
                                    null !== Q &&
                                        (0, i.jsx)(m.HL, {
                                            variant: 'span',
                                            className: (0, l.$)(k().duration, { [k().duration_hidden]: W && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': Q.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: Q.text }),
                                        }),
                                    el,
                                ],
                            }),
                        ],
                    });
                });
        },
        74591: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            var i = (function (e) {
                return ((e.IDLE = 'idle'), (e.SUCCESS = 'success'), (e.ERROR = 'error'), e);
            })({});
        },
        74743: (e) => {
            e.exports = {
                root: 'PaywallFAQAnswer_root__IGMDE',
                list: 'PaywallFAQAnswer_list__rPZmm',
                listItem: 'PaywallFAQAnswer_listItem__5UQmO',
                link: 'PaywallFAQAnswer_link__WM9Xr',
            };
        },
        76252: (e) => {
            e.exports = {
                root: 'PlayQueueNowPlayingBlock_root__aJSb8',
                important: 'PlayQueueNowPlayingBlock_important__sxxvA',
                track: 'PlayQueueNowPlayingBlock_track__ClZLs',
                track_withDnD: 'PlayQueueNowPlayingBlock_track_withDnD__D8h0r',
                track_moveFromTop: 'PlayQueueNowPlayingBlock_track_moveFromTop__pBBJt',
                'move-from-top': 'PlayQueueNowPlayingBlock_move-from-top__O5e0S',
                track_moveFromBottom: 'PlayQueueNowPlayingBlock_track_moveFromBottom__Jj2UO',
                'move-from-bottom': 'PlayQueueNowPlayingBlock_move-from-bottom__Cz7lV',
            };
        },
        78826: (e) => {
            e.exports = {
                content_ru: 'PlusSectionDesktop_content_ru__85q1P',
                content_by: 'PlusSectionDesktop_content_by__UBg10',
                card: 'PlusSectionDesktop_card__h8LmR',
                logo_ru: 'PlusSectionDesktop_logo_ru__G2AkZ',
                logo_en: 'PlusSectionDesktop_logo_en__gn4qE',
            };
        },
        80336: (e) => {
            e.exports = {
                root: 'PlayQueueDnDTrackWrapper_root__CithE',
                inner: 'PlayQueueDnDTrackWrapper_inner__xq3xM',
                dragging: 'PlayQueueDnDTrackWrapper_dragging__Tk9uP',
                dragOverlay: 'PlayQueueDnDTrackWrapper_dragOverlay__ulF2W',
            };
        },
        80380: (e) => {
            e.exports = { root: 'PlayQueue_root__ponhw', content: 'PlayQueue_content__zIUvd', scrollContent: 'PlayQueue_scrollContent__2dI0v' };
        },
        81223: (e) => {
            e.exports = {
                root: 'ClipAboutModalDesktop_root__F8UU5',
                root_withFullscreen: 'ClipAboutModalDesktop_root_withFullscreen__nTO1X',
                root_withWindows: 'ClipAboutModalDesktop_root_withWindows__kl4sc',
                header: 'ClipAboutModalDesktop_header__at6X6',
                modalContent: 'ClipAboutModalDesktop_modalContent__Rp_ON',
                explicitMark: 'ClipAboutModalDesktop_explicitMark__SLwRj',
                important: 'ClipAboutModalDesktop_important__LkqWo',
                content: 'ClipAboutModalDesktop_content__0dUY1',
                titleShimmer: 'ClipAboutModalDesktop_titleShimmer__zTtu_',
            };
        },
        81438: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => s });
            var i = a(72288),
                l = a(8655),
                n = a(69704);
            let s = () => {
                var e, t, a, s, r, o;
                let { lumen: c } = (0, i.g)(),
                    { theme: d } = (0, n.W)(),
                    u = null != d ? d : l.S.Dark,
                    _ = null == (e = c.themes) ? void 0 : e[u],
                    m = c.getFallbackImage()[u],
                    p = null != (s = null == _ ? void 0 : _.cover.uri) ? s : m;
                return {
                    cover: p,
                    fullCover: null != (r = null == _ || null == (t = _.fullCover) ? void 0 : t.uri) ? r : p,
                    faceCover: null != (o = null == _ || null == (a = _.faceCover) ? void 0 : a.uri) ? o : p,
                    solidColor: null == _ ? void 0 : _.solidColor,
                    fallbackImage: m,
                };
            };
        },
        81472: (e) => {
            e.exports = { root: 'ShareIframeModal_root__t_NbK', content: 'ShareIframeModal_content__jcq_o' };
        },
        82092: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        82787: (e) => {
            e.exports = {
                root: 'PlayQueueVibeBlock_root__cVjcM',
                ripple: 'PlayQueueVibeBlock_ripple__Ig_pb',
                vibeCover: 'PlayQueueVibeBlock_vibeCover__THxKz',
                title: 'PlayQueueVibeBlock_title__G3kir',
                vibeTitle: 'PlayQueueVibeBlock_vibeTitle__C5fWp',
            };
        },
        83418: (e, t, a) => {
            'use strict';
            function i(e) {
                let { host: t, url: a } = e;
                return a || (t ? 'https://'.concat(t, '/meta/home.png') : '');
            }
            a.d(t, { v: () => i });
        },
        83547: (e) => {
            e.exports = {
                root: 'TopSectionMobile_root__bl_XJ',
                image: 'TopSectionMobile_image__t_hCH',
                content: 'TopSectionMobile_content__sqstr',
                title: 'TopSectionMobile_title__O_Zx0',
                buySubscriptionBlock: 'TopSectionMobile_buySubscriptionBlock__NSVnY',
                moreInfoLink: 'TopSectionMobile_moreInfoLink__zjcOO',
            };
        },
        83690: (e) => {
            e.exports = {
                content_ru: 'PlusSectionMobile_content_ru__OvJV0',
                content_by: 'PlusSectionMobile_content_by__d5iGm',
                card: 'PlusSectionMobile_card__QbwGe',
                logo_ru: 'PlusSectionMobile_logo_ru___FFew',
                logo_en: 'PlusSectionMobile_logo_en__u_HSO',
            };
        },
        84403: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { o: () => i }),
                (function (e) {
                    ((e.ARTIST = 'artist'), (e.COMPOSER = 'composer'));
                })(i || (i = {})));
        },
        85585: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => i });
            var i = (function (e) {
                return ((e.SYNC_LYRICS = 'syncLyrics'), (e.PLAY_QUEUE = 'playQueue'), e);
            })({});
        },
        86696: (e) => {
            e.exports = {
                root: 'TrackAboutModalDesktop_root__NHeeO',
                root_withFullscreen: 'TrackAboutModalDesktop_root_withFullscreen__jOu4X',
                root_withCustomControls: 'TrackAboutModalDesktop_root_withCustomControls__b2JDR',
                header: 'TrackAboutModalDesktop_header__7Zl2n',
                modalContent: 'TrackAboutModalDesktop_modalContent__yf4i5',
                explicitMark: 'TrackAboutModalDesktop_explicitMark__tgVyh',
                important: 'TrackAboutModalDesktop_important__tCPvh',
                version: 'TrackAboutModalDesktop_version__m0z2v',
                explicit: 'TrackAboutModalDesktop_explicit__FGMHf',
                content: 'TrackAboutModalDesktop_content__eEGZu',
                artistLink: 'TrackAboutModalDesktop_artistLink__ao_zU',
                artists: 'TrackAboutModalDesktop_artists__2SlTA',
                overlay: 'TrackAboutModalDesktop_overlay__7cEGE',
                textShimmer: 'TrackAboutModalDesktop_textShimmer__r5_AA',
                text: 'TrackAboutModalDesktop_text__zcpo0',
            };
        },
        86889: (e) => {
            e.exports = {
                root: 'PaywallModal_root__HIYOy',
                header: 'PaywallModal_header__3oCYF',
                closeButton: 'PaywallModal_closeButton__rkLNM',
                content: 'PaywallModal_content__mVxnz',
            };
        },
        87587: (e) => {
            e.exports = {
                root: 'SharedVibeModal_root__gpHus',
                modal: 'SharedVibeModal_modal__Laq_2',
                header: 'SharedVibeModal_header__kx58_',
                agent: 'SharedVibeModal_agent__py1rB',
                agentView: 'SharedVibeModal_agentView__83YaM',
                text: 'SharedVibeModal_text__u_TnV',
                actions: 'SharedVibeModal_actions__iZ1r9',
                collectionLink: 'SharedVibeModal_collectionLink__AevkF',
            };
        },
        88021: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => d });
            var i,
                l = a(14022),
                n = a(53548),
                s = {
                    352: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(n, 2));
                    },
                },
                r = {};
            function o(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var a = (r[e] = { exports: {} });
                return (s[e](a, a.exports, o), a.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = o(810),
                    t = o(352);
                c.l = (a) => {
                    let [i, l] = (0, e.useState)(!0),
                        [n, s] = (0, e.useState)(!0),
                        r = () => {
                            let e = null == a ? void 0 : a.current;
                            e && (l(0 === e.scrollLeft), s(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        r();
                    }, [a, r]),
                        (0, e.useEffect)(() => {
                            let e = null == a ? void 0 : a.current;
                            return (
                                null == e || e.addEventListener('scroll', r),
                                window.addEventListener('resize', r),
                                () => {
                                    (null == e || e.removeEventListener('scroll', r), window.removeEventListener('resize', r));
                                }
                            );
                        }, [a, r]));
                    let o = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    a && a.current && (a.current.scrollLeft += a.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [a],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        a && a.current && (a.current.scrollLeft -= a.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [a],
                        ),
                        swipeForward: o,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: i && n,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        88178: (e) => {
            e.exports = {
                root: 'PaywallFooter_root__L_WxQ',
                link: 'PaywallFooter_link__rbIbe',
                important: 'PaywallFooter_important__bAbYb',
                list: 'PaywallFooter_list__WeuCr',
                list_primary: 'PaywallFooter_list_primary__A6hNR',
                list_secondary: 'PaywallFooter_list_secondary__QH2qi',
                item: 'PaywallFooter_item__4rY_9',
                ageRestriction: 'PaywallFooter_ageRestriction__bOKoH',
            };
        },
        89544: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        90503: (e) => {
            e.exports = { root: 'PaywallFAQQuestion_root__pS9KT' };
        },
        91086: (e) => {
            e.exports = {
                title: 'TrackModalTitle_title__3zfNn',
                important: 'TrackModalTitle_important__qNVlq',
                content: 'TrackModalTitle_content__mtQKw',
                explicitMark: 'TrackModalTitle_explicitMark__aRT_I',
                text: 'TrackModalTitle_text__3iWX4',
                artistCaption: 'TrackModalTitle_artistCaption__Sj1CR',
                link: 'TrackModalTitle_link__kzVsl',
                meta: 'TrackModalTitle_meta__xlEgt',
                entityName: 'TrackModalTitle_entityName__BRnTV',
            };
        },
        93015: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => v });
            var i = a(88800),
                l = a(98644),
                n = a(65724),
                s = a(53548),
                r = a(2058),
                o = a(19994),
                c = a(13797),
                d = a.n(c);
            let u = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: l } = (0, r.A)(),
                    c = (0, s.useMemo)(() => l({ id: 'loading-messages.entity-is-loading' }, { entityName: l({ id: 'entity-names.track' }) }), [l]);
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(d().root, a),
                    children: [
                        (0, i.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, i.jsx)('div', { className: d().coverContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, i.jsx)('div', { className: d().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, i.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var _ = a(26835),
                m = a.n(_);
            let p = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: l } = (0, r.A)(),
                        c = (0, s.useMemo)(() => l({ id: 'loading-messages.entity-is-loading' }, { entityName: l({ id: 'entity-names.track' }) }), [l]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(m().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: m().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: m().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: m().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: m().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: m().action, radius: 'l' }),
                        ],
                    });
                },
                v = (e) => {
                    let { isActive: t, variant: a, className: n } = e;
                    switch (a) {
                        case l.X.PLAYLIST:
                            return (0, i.jsx)(p, { isActive: t, className: n });
                        case l.X.ALBUM:
                            return (0, i.jsx)(u, { isActive: t, className: n });
                    }
                };
        },
        93346: (e) => {
            e.exports = {
                root: 'VideoPlayerContainer_root__GHDoi',
                container: 'VideoPlayerContainer_container__pZe41',
                container_adaptiveAspectRatio: 'VideoPlayerContainer_container_adaptiveAspectRatio__mBFoR',
                loadingIndicator: 'VideoPlayerContainer_loadingIndicator__qDxPV',
                loadingIndicator_showed: 'VideoPlayerContainer_loadingIndicator_showed__KQCNf',
            };
        },
        94770: (e) => {
            e.exports = { writers: 'Lyrics_writers__xvrNp' };
        },
        95993: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => n });
            var i = a(58217),
                l = a(85587);
            let n = (e) => {
                let { track: t, callback: a, disclaimerRejectHandler: n } = e;
                return (0, i.l)({ entity: t, entityType: l.n.TRACK, callback: a, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        96353: (e) => {
            e.exports = { growContainer: 'FamilyInviteStepInfo_growContainer__y0xmo', important: 'FamilyInviteStepInfo_important__YvkpI' };
        },
        96555: (e) => {
            e.exports = { root: 'PaywallOtherDesktop_root__c19Ht', topSection: 'PaywallOtherDesktop_topSection__d1CVV' };
        },
        97826: (e, t, a) => {
            'use strict';
            function i(e, t) {
                return e.map((e) => 'https://'.concat(t, '/artist/').concat(e.id));
            }
            a.d(t, { x: () => i });
        },
        98876: (e) => {
            e.exports = {
                root: 'PaymentWidgetModal_root__I6Hrp',
                root_loaded: 'PaymentWidgetModal_root_loaded__Rzltj',
                root_level_up: 'PaymentWidgetModal_root_level_up__pj52G',
                content: 'PaymentWidgetModal_content__ifRry',
                widget: 'PaymentWidgetModal_widget__cu_gr',
            };
        },
        99344: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => l });
            var i = a(18593);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Playlist;
            }
        },
        99479: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => p });
            var i = a(88800),
                l = a(65724),
                n = a(84961),
                s = a(17392),
                r = a(21416),
                o = a(29504),
                c = a(72288),
                d = a(16704),
                u = a(34945),
                _ = a(45873),
                m = a.n(_);
            let p = (0, n.PA)((e) => {
                let { className: t, track: a, position: n, onPlayButtonClick: _, isPlaying: p, isCurrent: v, withDislikeStyles: x = !0, isLoading: h } = e,
                    {
                        settings: { isMobile: y },
                    } = (0, c.g)();
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(t, m().root, {
                        [m().root_disabled]: !a.isAvailable && !a.hasModalAccess,
                        [m().root_playing]: p,
                        [m().root_disliked]: a.isDisliked && x,
                        [m().root_current]: v,
                    }),
                    children: [
                        (a.isAvailable || a.hasModalAccess) &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    !h && (0, i.jsx)(u.P, { stopAnimation: !p, className: m().playingAnimation }),
                                    h && y && (0, i.jsx)(r.y, { size: 'xs', className: m().spinner }),
                                    !y &&
                                        (0, i.jsx)(d.D, {
                                            variant: 'filled',
                                            className: m().playButton,
                                            iconClassName: m().playButtonIcon,
                                            isPlaying: p,
                                            onClick: _,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        n &&
                            (0, i.jsx)(o.HL, {
                                variant: 'div',
                                className: m().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                'data-test-id': s.Kq.track.TRACK_POSITION,
                                children: n,
                            }),
                    ],
                });
            });
        },
        99839: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
    },
]);
