(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [818],
    {
        1829: (e, t, r) => {
            'use strict';

            r.d(t, { _: () => eR });
            // for PulseSync WebHost: BEGIN imports for native addon context menu items
            var pulseSyncMenuJsx = r(88800),
                pulseSyncMenuItems = r(19934),
                pulseSyncMenuIcons = r(52300);
            // for PulseSync WebHost: END imports for native addon context menu items
            var s = r(88800),
                n = r(65724),
                i = r(96706),
                a = r(84961),
                l = r(53548),
                o = r(2058),
                c = r(88969),
                u = r(97234),
                d = r(17392),
                f = r(40700),
                x = r(29993),
                _ = r(52300),
                p = r(19934),
                m = r(92966),
                v = r(44318),
                g = r(38501),
                y = r(48749),
                E = r(22505),
                k = r(79546),
                b = r(17055),
                O = r(18143),
                h = r(29595),
                w = r(74965),
                R = r(9630),
                A = r(72288),
                j = r(66943),
                C = r(99698),
                T = r(42174),
                D = r(26401),
                S = r(93940),
                I = r(18593),
                P = r(93039),
                L = r(12241),
                H = r(20584),
                N = r(98427),
                B = r(5407),
                M = r(64284),
                F = r(57934),
                U = r(9618),
                K = r(55693),
                z = r(95210),
                Y = r(47964),
                V = r(46936),
                q = r(97956),
                W = r(98953),
                G = r(32721),
                X = r(18130),
                Q = r(56117),
                Z = r(93091),
                J = r(34979),
                $ = r(74064),
                ee = r(44988);
            let et = (0, a.PA)((e) => {
                let { isFinished: t, onClick: r, className: n } = e,
                    { user: i } = (0, A.g)(),
                    a = (0, l.useMemo)(
                        () => (t ? (0, s.jsx)(c.A, { id: 'interface-actions.mark-non-listened' }) : (0, s.jsx)(c.A, { id: 'interface-actions.mark-listened' })),
                        [t],
                    );
                return (0, s.jsx)(p.Dr, {
                    className: n,
                    onClick: r,
                    icon: (0, s.jsx)(_.I, { variant: 'check', size: 'xxs' }),
                    disabled: !i.isAuthorized,
                    'data-test-id': d.S7.CONTEXT_MENU_MARK_LISTENED_BUTTON,
                    children: a,
                });
            });
            var er = r(15425),
                es = r(81066),
                en = r(18278),
                ei = r(12079),
                ea = r(54667);
            let el = (0, a.PA)((e) => {
                let { track: t } = e,
                    {
                        modals: { ugcTrackEditModal: r },
                    } = (0, A.g)(),
                    n = (0, l.useCallback)(() => {
                        r.open(t);
                    }, [t, r]);
                return (0, s.jsx)(p.Dr, {
                    onClick: n,
                    icon: (0, s.jsx)(_.I, { variant: 'edit', size: 'xxs' }),
                    'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_UGC_EDIT_BUTTON,
                    children: (0, s.jsx)(c.A, { id: 'interface-actions.edit' }),
                });
            });
            var eo = r(33139),
                ec = r(33145),
                eu = r(31633),
                ed = r.n(eu),
                ef = r(44349),
                ex = r(99305),
                e_ = r(58977),
                ep = r(4086),
                em = r(41928),
                ev = r(71978),
                eg = r(79262),
                ey = r(68447),
                eE = r.n(ey);
            let ek = (0, a.PA)((e) => {
                let { track: t } = e,
                    r = (0, ev.j)(),
                    n = (0, em.N)().get(ep.vg),
                    i = (0, R.e)(),
                    a = (0, x.c)(() => {
                        var e, s, a, l;
                        if (t.isDownloaded) {
                            null == (s = r.tracksController) || s.deleteTrack(t.entityId);
                            let e = null == i ? void 0 : i.state.queueState,
                                l =
                                    null == e
                                        ? void 0
                                        : e.order.value.find((r) => {
                                              var s;
                                              return String(null == (s = e.entityList.value[r]) ? void 0 : s.entity.data.meta.id) === t.id;
                                          });
                            (void 0 !== l &&
                                (null == e || null == (a = e.entityList.value[l]) ? void 0 : a.entity.data.type) === ef.R.DownloadedMusic &&
                                (null == i || i.remove({ entityIds: [t.id] })),
                                n.count(ex.x.TRACK_DELETE, e_.l));
                            return;
                        }
                        if (t.isDownloading) {
                            null == (l = r.tracksController) || l.stopDownload(t.entityId);
                            return;
                        }
                        (null == (e = r.tracksController) || e.download(t.entityId), n.count(ex.x.TRACK_DOWNLOAD, e_.l));
                    }),
                    o = (0, l.useMemo)(
                        () =>
                            t.isDownloaded
                                ? (0, s.jsx)(c.A, { id: 'offline.delete-from-device' })
                                : t.isDownloading
                                  ? (0, s.jsx)(c.A, { id: 'offline.stop-downloading' })
                                  : (0, s.jsx)(c.A, { id: 'offline.download' }),
                        [t.isDownloaded, t.isDownloading],
                    ),
                    u = (0, l.useMemo)(
                        () =>
                            t.isDownloaded
                                ? (0, s.jsx)(_.I, { variant: 'upload', size: 'xxs' })
                                : t.isDownloading
                                  ? (0, s.jsx)(eg.A, {
                                        value: t.downloadingProgress,
                                        size: 20,
                                        withCancelIcon: !0,
                                        className: eE().downloadingProgress,
                                        progressBarClassName: eE().progress,
                                        cancelIconClassName: eE().cancelIcon,
                                    })
                                  : (0, s.jsx)(_.I, { variant: 'download', size: 'xxs' }),
                        [t.downloadingProgress, t.isDownloaded, t.isDownloading],
                    );
                return (0, s.jsx)(p.Dr, { onClick: a, icon: u, className: eE().root, 'data-test-id': d.S7.CONTEXT_MENU_DOWNLOAD_BUTTON, children: o });
            });
            var eb = r(29504),
                eO = r(67699),
                eh = r.n(eO);
            // for PulseSync: BEGIN download-to-file action in the track context menu
            let downloadTrackToFile = (0, a.PA)((t) => {
                let { track: e } = t,
                    i = (0, l.useMemo)(() => {
                        let t = (e?.artists ?? [])
                            .map((t) => t.name)
                            .filter(Boolean)
                            .join(', ');
                        return [t, e?.title].filter(Boolean).join(' — ');
                    }, [e]),
                    r = (0, l.useCallback)(() => {
                        e?.id && window.musicDesktop?.pulsesync.downloads.track?.(e.id, i);
                    }, [e, i]);
                return (0, s.jsx)(p.Dr, {
                    onClick: r,
                    icon: (0, s.jsx)(_.I, {
                        variant: 'download',
                        size: 'xxs',
                    }),
                    className: eE().root,
                    'data-test-id': d.S7.CONTEXT_MENU_DOWNLOAD_BUTTON,
                    children: 'Скачать в файл',
                });
            });
            // for PulseSync: END download-to-file action in the track context menu
            let ew = (0, a.PA)((e) => {
                    let { track: t } = e,
                        {
                            settings: { isMobile: r },
                        } = (0, A.g)();
                    return t.isUGC && r
                        ? (0, s.jsxs)('div', {
                              className: eh().ugcLabel,
                              children: [
                                  (0, s.jsx)(_.I, { variant: 'eye_crossed', size: 'xxs' }),
                                  (0, s.jsx)(eb.HL, { variant: 'span', size: 's', children: (0, s.jsx)(c.A, { id: 'ugc.track-description' }) }),
                              ],
                          })
                        : null;
                }),
                eR = (0, a.PA)((e) => {
                    var t, r, a, eu, ef, ex, e_, ep, em, ev, eg, ey, eE, eb, eO, eh, eR, eA, ej, eC;
                    let {
                            track: eT,
                            onOpenChange: eD,
                            open: eS,
                            placement: eI,
                            isFullscreenMobile: eP = !1,
                            icon: eL,
                            size: eH,
                            utmLink: eN,
                            handleRemove: eB,
                            withTrailer: eM = !0,
                            ...eF
                        } = e,
                        { shouldShowBuySubscriptionModal: eU, showBuySubscriptionModal: eK } = (0, U.q)(),
                        ez = (0, R.e)(),
                        {
                            settings: eY,
                            currentTrackInfo: eV,
                            experiments: eq,
                            fullscreenPlayer: eW,
                            trailer: eG,
                            sonataState: { entityMeta: eX, isVibeContext: eQ },
                            trackComplaint: eZ,
                            trackLyrics: eJ,
                            album: e$,
                            track: e0,
                            user: e1,
                            slam: e8,
                            albumCPA: { isPlusCPAPlayerBarEnabled: e2 },
                        } = (0, A.g)(),
                        { formatMessage: e9 } = (0, o.A)(),
                        { sendLikeSearchFeedback: e5 } = (0, K.z)(),
                        [e4, e3] = (0, l.useState)(!1),
                        { modal: e7 } = eZ,
                        { modal: e6 } = eJ,
                        { modal: te } = eV,
                        tt = (function (e) {
                            var t, r;
                            let { album: s, playlist: n, artist: i, track: a } = (0, A.g)(),
                                { sourceContextData: o } = (0, l.useContext)(L.l),
                                { screen: c } = (0, S.j)(),
                                u = null == c ? void 0 : c.pageIdForFrom;
                            return (0, l.useMemo)(() => {
                                var t, r, l, c;
                                let d = null == o ? void 0 : o.sourceContextType,
                                    f =
                                        null != d
                                            ? d
                                            : (function (e) {
                                                  switch (e) {
                                                      case N.b.SEARCH:
                                                          return H.h.SEARCH;
                                                      case N.b.DOWNLOADS_TRACKS:
                                                          return H.h.DOWNLOADED_TRACKS;
                                                      case N.b.HISTORY:
                                                          return H.h.MUSIC_HISTORY;
                                                      default:
                                                          return H.h.BASED_ON_ENTITY_BY_DEFAULT;
                                                  }
                                              })(u),
                                    x = !!(null == o || null == (t = o.meta) ? void 0 : t.id);
                                if (o && (o.type !== I.K.Various || x)) return o;
                                let _ = a.isOpened ? a.albumId : null;
                                return _
                                    ? (0, P.t)({ contextType: I.K.Album, contextId: _, entityContextType: f })
                                    : (null == (r = n.meta) ? void 0 : r.uid) && (null == (l = n.meta) ? void 0 : l.kind)
                                      ? (0, P.t)({
                                            contextType: I.K.Playlist,
                                            contextId: ''.concat(n.meta.uid, ':').concat(n.meta.kind),
                                            playlistUid: n.meta.uid,
                                            playlistKind: n.meta.kind,
                                            filter: n.filters.activeFilter,
                                            entityContextType: f,
                                        })
                                      : s.id
                                        ? (0, P.t)({ contextType: I.K.Album, contextId: s.id, entityContextType: f })
                                        : i.id
                                          ? (0, P.t)({ contextType: I.K.Artist, contextId: i.id, entityContextType: f })
                                          : (null == e ? void 0 : e.albumId)
                                            ? (0, P.t)({ contextType: I.K.Album, contextId: e.albumId, entityContextType: f })
                                            : (0, P.t)({ contextType: I.K.Various, contextId: null != (c = null == e ? void 0 : e.id) ? c : '', entityContextType: f });
                            }, [
                                o,
                                u,
                                a.isOpened,
                                a.albumId,
                                s.id,
                                null == (t = n.meta) ? void 0 : t.uid,
                                null == (r = n.meta) ? void 0 : r.kind,
                                n.filters.activeFilter,
                                i.id,
                                null == e ? void 0 : e.albumId,
                                null == e ? void 0 : e.id,
                            ]);
                        })(eT),
                        tr = (0, D.i)(eT, k.N.NEXT, tt),
                        ts = (0, D.i)(eT, k.N.LAST, tt),
                        tn = (0, T.K)(eT),
                        ti = (0, C.m)(eT),
                        ta = (0, m.K)(eT.mainAlbum),
                        tl = ((e) => {
                            let {
                                    user: t,
                                    fullscreenPlayer: r,
                                    sonataState: { entityMeta: n },
                                    album: i,
                                } = (0, A.g)(),
                                { notify: a } = (0, w.l)(),
                                { formatMessage: l } = (0, o.A)(),
                                c = (0, R.e)();
                            return (0, x.c)(async () => {
                                if (!e) return;
                                let o = r.modal.isOpened ? h.u.FULLSCREEN_ERROR : h.u.ERROR;
                                if (!t.isAuthorized)
                                    return void a((0, s.jsx)(j.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o });
                                let u = e.streamProgress,
                                    d = (null == n ? void 0 : n.id) === e.id && (null == n ? void 0 : n.albumId) === e.albumId;
                                if ((await e.setListeningFinishedStatus()) !== O.T.OK)
                                    a((0, s.jsx)(j.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: o });
                                else {
                                    var f, x;
                                    let t = !(null == u ? void 0 : u.hasEverFinished),
                                        r = null == c ? void 0 : c.state.queueState.entityList.value,
                                        s =
                                            null == r
                                                ? void 0
                                                : r.find((t) => {
                                                      let { entity: r } = t;
                                                      if ((0, b.b)(r)) {
                                                          var s, n;
                                                          let t = r.data.meta;
                                                          return t.realId === e.id && (null == (n = t.albums) || null == (s = n[0]) ? void 0 : s.id) === e.albumId;
                                                      }
                                                      return !1;
                                                  });
                                    (s && (s.entity.everFinished = !!t),
                                        d &&
                                            (null == n ? void 0 : n.streamProgress) &&
                                            (null == (f = n.streamProgress) ? void 0 : f.hasEverFinished) !== t &&
                                            (n.streamProgress.updateEverFinished(t), t && n.streamProgress.updateEndPositionSec(0)),
                                        (null == (x = i.meta) ? void 0 : x.listeningFinished) &&
                                            !t &&
                                            (i.markTracksFinished({ withoutTracks: [e.id] }), i.setAlbumUnfinished(), i.setAllTracksUnfinished(!1)),
                                        null == u || u.updateEverFinished(t),
                                        i.meta && t && i.checkAllAlbumTrackFinished());
                                }
                            });
                        })(eT),
                        to = (0, F.F)(),
                        tc = ''.concat(M.U.TRACK, '-').concat(eT.id),
                        tu = eP || eY.isMobile,
                        td = '/album/:albumId/track/:trackId';
                    eT.albumId || (td = '/track/:trackId');
                    let { shareLink: tf, pathname: tx } = (0, X.b)(td, { params: { albumId: null != (ej = eT.albumId) ? ej : '', trackId: eT.id } }),
                        // for PulseSync: BEGIN read the LRCLIB plain-text lyrics preference
                        pulseSyncLrclibEnabled = window.nativeSettings?.get('modSettings.lrclib.useText') !== !1,
                        // for PulseSync: END read the LRCLIB plain-text lyrics preference
                        t_ = eT.isUGC ? V.D.UGC_TRACK : V.D.TRACK,
                        tp = (0, y.A)({ entityVariant: t_, urlParams: { id: eT.id } }),
                        tm = ((e) => {
                            var t;
                            let { formatMessage: r } = (0, o.A)();
                            return r(
                                (null == e ? void 0 : e.type) === ea.S.AUDIOBOOK
                                    ? { id: 'track-modal.audiobook-title' }
                                    : (null == e ? void 0 : e.isTrackPodcast) || (null == e || null == (t = e.mainAlbum) ? void 0 : t.isPodcast)
                                      ? { id: 'track-modal.podcast-title' }
                                      : { id: 'track-modal.title' },
                            );
                        })(eT),
                        tv = (0, v.C)(),
                        tg = !!(null == (t = eT.mainAlbum) ? void 0 : t.isNonMusic),
                        ty = (null == eX ? void 0 : eX.id) === eT.id && (null == eX ? void 0 : eX.albumId) === (null == (r = eT.mainAlbum) ? void 0 : r.id),
                        tE =
                            (null == e$ || null == (a = e$.meta) ? void 0 : a.listeningFinished) ||
                            (ty && (null == eX || null == (eu = eX.streamProgress) ? void 0 : eu.hasEverFinished)) ||
                            (null == (ef = eT.streamProgress) ? void 0 : ef.hasEverFinished),
                        tk = e1.hasPlus && eT.isAvailableForDownload,
                        tb = eq.checkExperiment(q.z.WebEditorsFeatures, 'on'),
                        tO = e1.isAuthorized && eq.checkExperiment(q.z.WebNextTrackComplaintForm, 'on') && eT.isTrackMusic,
                        th = !!(0, f.S)(null == ez ? void 0 : ez.state.currentContext.value),
                        { canRemoveTrackFromPlaylist: tw, removeTrackFromPlaylist: tR } = (0, ei.s)(),
                        tA = (0, B.P)(),
                        tj = e2(null == (ex = eT.mainAlbum) ? void 0 : ex.id, null == (e_ = eT.mainAlbum) ? void 0 : e_.isNonMusic),
                        { isPlaying: tC, togglePlay: tT } = (0, Y.B)({
                            seeds: null != (eC = null == eT ? void 0 : eT.seeds) ? eC : [],
                            pageIdForFrom: N.b.RADIO,
                            blockIdForFrom: tc,
                            parentContextId: (null == (ep = eT.mainAlbum) ? void 0 : ep.id) ? ''.concat(eT.mainAlbum.id, ':').concat(eT.id) : eT.entityId,
                        }),
                        tD = (0, x.c)(async () => {
                            (e4 || eT.isLiked || (e3(!0), null == e5 || e5()), await tn());
                        }),
                        tS = (0, x.c)(() => {
                            if (eU && e1.isAuthorized) return void eK();
                            !tA() && (tC || tT());
                        }),
                        tI = (0, x.c)(() => {
                            if (eU && !tj) return void eK();
                            tA() || (eG.setUtmLink(eN), eG.openTrackTrailer(eT.entityId), to(u.DomainObjectType.Track, eT.id));
                        }),
                        tP = (0, x.c)(() => {
                            var e;
                            (eV.setTrack({ id: eT.id, albumId: (null == (e = eT.mainAlbum) ? void 0 : e.id) || null, isUGC: eT.isUGC || null }),
                                e0.isOpened && e0.close(),
                                te.open());
                        }),
                        tL = (0, x.c)(() => {
                            eT.clipIds && tv((0, i.HO)(eT.clipIds));
                        }),
                        tH = (0, x.c)(() => {
                            if (eU && e1.isAuthorized) return void eK();
                            (eJ.setTrack(eT), e0.isOpened && e0.close(), e6.open());
                        }),
                        tN = (0, x.c)(() => {
                            if (eU && e1.isAuthorized) return void eK();
                            eW.isSyncLyricsMode ? eW.hideSyncLyrics() : eW.showSyncLyrics();
                        }),
                        tB = (0, x.c)(() => {
                            (null == eB || eB(), null == eD || eD(!1));
                        }),
                        tM = (0, x.c)(() => {
                            (eZ.setTrackId(eT.id), e0.isOpened && e0.close(), e7.open(), null == eD || eD(!1));
                        }),
                        // for PulseSync: BEGIN include LRCLIB results in track-menu lyrics availability
                        tF = (0, x.c)(
                            () =>
                                (eT.isSyncLyricsAvailable ||
                                    eT.isSyncLyricsAvailableWithOfflineFeature ||
                                    eT.hasSyncLyrics ||
                                    (ty && eW.syncLyrics.hasLyricsForTrack(eT.id))) &&
                                eW.modal.isOpened &&
                                tu,
                        ),
                        tU = (0, x.c)(() => (eT.isLyricsAvailable || pulseSyncLrclibEnabled) && !eW.modal.isOpened),
                        // for PulseSync: END include LRCLIB results in track-menu lyrics availability
                        tK = (0, x.c)(() => {
                            var e;
                            return (null == (e = eT.trailer) ? void 0 : e.isAvailable) && !eW.modal.isOpened && eM;
                        }),
                        {
                            withSyncLyricsItem: tz,
                            withLyricsItem: tY,
                            withTrailerItem: tV,
                        } = (0, l.useMemo)(
                            () => ({ withSyncLyricsItem: tF(), withLyricsItem: tU(), withTrailerItem: tK() }),
                            // for PulseSync: BEGIN refresh track-menu lyrics availability when LRCLIB state changes
                            [
                                tF,
                                tU,
                                tK,
                                eT.isSyncLyricsAvailable,
                                eT.isSyncLyricsAvailableWithOfflineFeature,
                                eT.hasSyncLyrics,
                                eT.isLyricsAvailable,
                                pulseSyncLrclibEnabled,
                                eW.syncLyrics.currentTrackId,
                                eW.syncLyrics.lines,
                                eW.syncLyrics.isResolved,
                                null == (em = eT.trailer) ? void 0 : em.isAvailable,
                            ],
                            // for PulseSync: END refresh track-menu lyrics availability when LRCLIB state changes
                        );
                    (0, z.N)(eS);
                    let tq = !tg,
                        tW = eT.isNonUserGenerated && !tg && !eq.checkExperiment(q.z.WebNextProductWithoutRecommendation, 'on'),
                        tG = !tg,
                        tX = tg && ta,
                        tQ = eT.isNonUserGenerated && (eT.albums.length || eT.mainAlbum),
                        tZ =
                            eT.isNonUserGenerated &&
                            !!(null == (ev = eT.artists) ? void 0 : ev.length) &&
                            ((null == (eg = eT.mainAlbum) ? void 0 : eg.isAudiobook) ||
                                (null == (ey = eT.mainAlbum) ? void 0 : ey.isAlbum) ||
                                eT.isTrackAudiobook ||
                                eT.isTrackMusic),
                        tJ = !th && eX,
                        t$ = eW.isPlayQueueMode && eB && !eQ,
                        t0 = (0, g.d)() && eT.isNonUserGenerated && (null == (eE = eT.clipIds) ? void 0 : eE.length),
                        t1 = {
                            variant: W.Y.TRACK,
                            id: eT.id,
                            title: eT.title,
                            path: tx,
                            trackArtistName: null == (eb = eT.mainArtist) ? void 0 : eb.name,
                            trackArtistId: null == (eO = eT.mainArtist) ? void 0 : eO.id,
                            trackAlbumId: eT.albumId,
                        };
                    // for PulseSync WebHost: BEGIN track context and native addon menu item rendering
                    let pulseSyncTrackIdParts = String(eT.id ?? '').split(':', 2),
                        pulseSyncTrackId = pulseSyncTrackIdParts[0],
                        pulseSyncTrackAlbumId = String(eT.albums?.[0]?.id ?? eT.albumId ?? eT.mainAlbum?.id ?? pulseSyncTrackIdParts[1] ?? '').trim(),
                        pulseSyncTrackContext = pulseSyncTrackId
                            ? {
                                  id: pulseSyncTrackId,
                                  url: pulseSyncTrackAlbumId
                                      ? `/album/${encodeURIComponent(pulseSyncTrackAlbumId)}/track/${encodeURIComponent(pulseSyncTrackId)}`
                                      : `/track/${encodeURIComponent(pulseSyncTrackId)}`,
                                  ...(pulseSyncTrackAlbumId
                                      ? {
                                            albumId: pulseSyncTrackAlbumId,
                                        }
                                      : {}),
                                  ...(eT.title
                                      ? {
                                            title: String(eT.title),
                                        }
                                      : {}),
                              }
                            : void 0,
                        pulseSyncInjectTrackMenuItems = (items) =>
                            pulseSyncTrackContext
                                ? (window.pulsesyncApi?.injectNativeSlotItems?.('trackContextMenu', items, {
                                      eventDetail: pulseSyncTrackContext,
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
                                                      (activate(), eD(!1));
                                                  },
                                                  children: label,
                                                  'data-pulsesync-addon-menu-item': '',
                                              },
                                              key,
                                          );
                                      },
                                  }) ?? items)
                                : items;
                    // for PulseSync WebHost: END track context and native addon menu item rendering
                    return e8.isOfflineModeEnabled
                        ? (0, s.jsxs)(p.W1, {
                              isMobile: tu,
                              placement: eI,
                              offsetOptions: 10,
                              open: eS,
                              onOpenChange: eD,
                              icon: eL,
                              size: eH,
                              containerDataTestId: d.Kq.track.TRACK_CONTEXT_MENU,
                              ariaLabel: e9({ id: 'interface-actions.context-menu' }),
                              variant: 'text',
                              ...eF,
                              // for PulseSync WebHost: BEGIN inject native addon items into the compact track context menu
                              children: pulseSyncInjectTrackMenuItems([
                                  tk && (0, s.jsx)(ek, { track: eT }),
                                  eT.isNonUserGenerated && (0, s.jsx)($.H, { shareLink: tf, entityMeta: t1 }),
                              ]),
                              // for PulseSync WebHost: END inject native addon items into the compact track context menu
                          })
                        : (0, s.jsxs)(p.W1, {
                              isMobile: tu,
                              placement: eI,
                              offsetOptions: 10,
                              open: eS,
                              onOpenChange: eD,
                              icon: eL,
                              size: eH,
                              containerDataTestId: d.Kq.track.TRACK_CONTEXT_MENU,
                              ariaLabel: e9({ id: 'interface-actions.context-menu' }),
                              variant: 'text',
                              ...eF,
                              // for PulseSync WebHost: BEGIN inject native addon items into the track context menu
                              children: pulseSyncInjectTrackMenuItems([
                                  (0, s.jsx)(ew, { track: eT }),
                                  tu && (0, s.jsx)(en.C, { getDescriptionTexts: eT.getDescriptionTexts, entityId: eT.id }),
                                  tb && (0, s.jsx)(E.d, { entityVariant: t_, adminUrl: tp }),
                                  tg && (0, s.jsx)(et, { onClick: tl, isFinished: tE }),
                                  tq && (0, s.jsx)(Z.T, { onClick: tD, isLiked: eT.isLiked, disabled: !e1.isAuthorized }),
                                  tV && (0, s.jsx)(er.N, { onClick: tI }),
                                  tW && (0, s.jsx)(es.C, { onClick: tS, variant: G.I.TRACK, disabled: !eT.isAvailable || (tj && tu), onOpenMenuChange: eD }),
                                  t0 &&
                                      (0, s.jsx)(p.Dr, {
                                          onClick: tL,
                                          icon: (0, s.jsx)(_.I, { variant: 'clip', size: 'xxs' }),
                                          'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_CLIP_BUTTON,
                                          children: (0, s.jsx)(c.A, { id: 'non-music.navigate-to-clip' }),
                                      }),
                                  tk && (0, s.jsx)(ek, { track: eT }),
                                  // for PulseSync: BEGIN insert the download-to-file track menu action
                                  tk && (0, s.jsx)(downloadTrackToFile, { track: eT }),
                                  // for PulseSync: END insert the download-to-file track menu action
                                  tJ &&
                                      (0, s.jsx)(p.Dr, {
                                          onClick: tr,
                                          icon: (0, s.jsx)(_.I, { variant: 'playNext', size: 'xxs' }),
                                          disabled: !e1.isAuthorized,
                                          'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                          children: (0, s.jsx)(c.A, { id: 'play-queue.play-next' }),
                                      }),
                                  tJ &&
                                      (0, s.jsx)(p.Dr, {
                                          onClick: ts,
                                          icon: (0, s.jsx)(_.I, { variant: 'playLast', size: 'xxs' }),
                                          disabled: !e1.isAuthorized,
                                          'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                          children: (0, s.jsx)(c.A, { id: 'play-queue.play-last' }),
                                      }),
                                  tz &&
                                      !eW.isSyncLyricsMode &&
                                      (0, s.jsx)(p.Dr, {
                                          className: (0, n.$)({ [ed().syncLyrics]: eP }),
                                          onClick: tN,
                                          icon: (0, s.jsx)(_.I, { variant: 'syncLyrics', size: 'xxs' }),
                                          disabled: !e1.isAuthorized,
                                          'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_SHOW_SYNC_LYRICS_BUTTON,
                                          children: (0, s.jsx)(c.A, { id: 'interface-actions.open-sync-lyrics' }),
                                      }),
                                  tz &&
                                      eW.isSyncLyricsMode &&
                                      (0, s.jsx)(p.Dr, {
                                          className: (0, n.$)({ [ed().syncLyrics]: eP }),
                                          onClick: tN,
                                          icon: (0, s.jsx)(_.I, { variant: 'syncLyrics', size: 'xxs' }),
                                          'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_HIDE_SYNC_LYRICS_BUTTON,
                                          children: (0, s.jsx)(c.A, { id: 'interface-actions.hide-sync-lyrics' }),
                                      }),
                                  t$ &&
                                      (0, s.jsx)(p.Dr, {
                                          onClick: tB,
                                          icon: (0, s.jsx)(_.I, { variant: 'bucket', size: 'xxs' }),
                                          children: (0, s.jsx)(c.A, { id: 'play-queue.delete-from-queue' }),
                                      }),
                                  tG && (0, s.jsx)(Q.D, { onClick: ti, isDisliked: eT.isDisliked }),
                                  eT.isAddToPlaylistAvailable && (0, s.jsx)(ec.$, { track: eT }),
                                  tY &&
                                      (0, s.jsx)(p.Dr, {
                                          disabled: !e1.isAuthorized,
                                          onClick: tH,
                                          icon: (0, s.jsx)(_.I, { variant: 'lyrics', size: 'xxs' }),
                                          'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_LYRICS_BUTTON,
                                          children: (0, s.jsx)(c.A, { id: 'interface-actions.open-lyrics' }),
                                      }),
                                  eT.isNonUserGenerated && (0, s.jsx)($.H, { shareLink: tf, entityMeta: t1 }),
                                  tQ &&
                                      (null == (eh = eT.mainAlbum) ? void 0 : eh.url) &&
                                      (0, s.jsx)(J.f, { albumUrl: eT.mainAlbum.url, albumType: eT.mainAlbum.type, trackType: eT.type }),
                                  tZ && eT.artists[0] && (0, s.jsx)(eo.o, { artists: eT.artists }),
                                  tX &&
                                      (0, s.jsx)(ee.U, {
                                          onClick: ta,
                                          isLiked: null == (eR = eT.mainAlbum) ? void 0 : eR.isLiked,
                                          albumType: null == (eA = eT.mainAlbum) ? void 0 : eA.type,
                                      }),
                                  eT.isUGC && (0, s.jsx)(el, { track: eT }),
                                  tu &&
                                      tw &&
                                      (0, s.jsx)(p.Dr, {
                                          onClick: tR,
                                          icon: (0, s.jsx)(_.I, { variant: 'bucket', size: 'xxs' }),
                                          'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_REMOVE_TRACK_FROM_PLAYLIST_BUTTON,
                                          children: (0, s.jsx)(c.A, { id: 'playlist-actions.remove-from-playlist' }),
                                      }),
                                  !tu &&
                                      (0, s.jsx)(p.Dr, {
                                          onClick: tP,
                                          icon: (0, s.jsx)(_.I, { variant: 'info', size: 'xxs' }),
                                          'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                                          children: tm,
                                      }),
                                  tO &&
                                      (0, s.jsx)(p.Dr, {
                                          onClick: tM,
                                          icon: (0, s.jsx)(_.I, { variant: 'complain', size: 'xxs' }),
                                          children: (0, s.jsx)(c.A, { id: 'interface-actions.report-problem' }),
                                      }),
                              ]),
                              // for PulseSync WebHost: END inject native addon items into the track context menu
                          });
                });
        },
        1883: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => c });
            var s = r(88800),
                n = r(88969),
                i = r(29504),
                a = r(59304),
                l = r(81261),
                o = r.n(l);
            let c = () =>
                (0, s.jsx)(a.$, {
                    message: (0, s.jsx)(i.HL, {
                        className: o().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, s.jsx)(n.A, { id: 'playlist-errors.failed-add-track-to-playlist' }),
                    }),
                });
        },
        3895: (e) => {
            e.exports = {
                message: 'PlaylistNotification_message__nEykK',
                text: 'PlaylistNotification_text__kTfi1',
                title: 'PlaylistNotification_title__Q5IKF',
                link: 'PlaylistNotification_link__HezVx',
                playlistTitle: 'PlaylistNotification_playlistTitle__HweEg',
                image: 'PlaylistNotification_image__QvYVD',
            };
        },
        4370: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => n });
            var s = r(67174);
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
        5279: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => h });
            var s = r(88800),
                n = r(29993),
                i = r(67318),
                a = r(62518),
                l = r(63476),
                o = r(1883),
                c = r(84961),
                u = r(53548),
                d = r(88969),
                f = r(29504),
                x = r(72288),
                _ = r(59304),
                p = r(15077),
                m = r(81877),
                v = r(91292),
                g = r(3895),
                y = r.n(g);
            let E = (0, c.PA)((e) => {
                let { entityTitle: t, entityVariant: r, entityCoverUri: i, playlist: a, closeToast: l } = e,
                    { fullscreenPlayer: o } = (0, x.g)(),
                    c = (0, n.c)(() => {
                        o.modal.isOpened && o.modal.close();
                    }),
                    g = (0, u.useMemo)(() => {
                        let e,
                            n = {
                                trackName: (0, s.jsxs)(f.HL, {
                                    className: y().title,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: ['\xa0', t, '\xa0'],
                                }),
                                playlistName: (0, s.jsx)(v.N, {
                                    className: y().link,
                                    href: a.url,
                                    onClick: c,
                                    children: (0, s.jsxs)(f.HL, {
                                        className: y().playlistTitle,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: ['\xa0', a.title, '\xa0'],
                                    }),
                                }),
                            };
                        switch (r) {
                            case p.c.PODCAST_EPISODE:
                                e = (0, s.jsx)(d.A, { id: 'notifications-info.added-podcast-episode-to-playlist', values: n });
                                break;
                            case p.c.AUDIOBOOK_EPISODE:
                                e = (0, s.jsx)(d.A, { id: 'notifications-info.added-audiobook-episode-to-playlist', values: n });
                                break;
                            default:
                                e = (0, s.jsx)(d.A, { id: 'notifications-info.added-track-to-playlist', values: n });
                        }
                        return (0, s.jsx)(f.HL, { className: y().message, variant: 'div', type: 'controls', size: 'm', lineClamp: 1, children: e });
                    }, [t, r, c, a.title, a.url]);
                return (0, s.jsx)(_.$, {
                    closeToast: l,
                    message: g,
                    cover: (0, s.jsx)(m.B, { className: y().image, src: i, withAvatarReplace: !0, size: 100, fit: 'cover', alt: t }),
                    coverRadius: 's',
                });
            });
            var k = r(28661),
                b = r(29595),
                O = r(74965);
            let h = () => {
                let { notify: e } = (0, O.l)(),
                    { playlist: t, fullscreenPlayer: r } = (0, x.g)(),
                    c = (0, n.c)((n) => {
                        var i, a;
                        let { withSuccessNotification: l, withPageRefresh: o, playlist: c, track: u } = n;
                        if (l) {
                            let t = (0, k.e)(u.type);
                            e((0, s.jsx)(E, { entityTitle: u.title, entityVariant: t, entityCoverUri: null != (a = u.coverUri) ? a : '', playlist: c }), {
                                containerId: r.modal.isOpened ? b.u.FULLSCREEN_INFO : b.u.INFO,
                            });
                        }
                        o && c.uuid === (null == (i = t.meta) ? void 0 : i.uuid) && t.refresh();
                    }),
                    u = (0, n.c)((t) => {
                        let { withFailNotification: n } = t;
                        n && e((0, s.jsx)(o.p, {}), { containerId: r.modal.isOpened ? b.u.FULLSCREEN_ERROR : b.u.ERROR });
                    });
                return (0, n.c)(async (e) => {
                    var t;
                    let { playlist: pulseSyncMigration_i_2, track: pulseSyncMigration_a_1, withSuccessNotification: s = !0, withFailNotification: o = !0, withPageRefresh: pulseSyncMigration_u_3 = !0 } = e,
                        // for PulseSync: BEGIN choose the playlist insertion position from the append-to-end preference
                        p = 'undefined' != typeof window && window.nativeSettings?.get('modSettings.playlist.addTracksToEndFromContextMenu') === !0,
                        v = null != pulseSyncMigration_i_2.tracksCount ? pulseSyncMigration_i_2.tracksCount : null != pulseSyncMigration_i_2.trackCount ? pulseSyncMigration_i_2.trackCount : null == pulseSyncMigration_i_2 ? void 0 : pulseSyncMigration_i_2.meta?.tracksCount,
                        h = null != v ? v : null == pulseSyncMigration_i_2 ? void 0 : pulseSyncMigration_i_2.meta?.trackCount,
                        g = p ? Number(null != h ? h : Array.isArray(pulseSyncMigration_i_2.tracks) ? pulseSyncMigration_i_2.tracks.length : 0) || 0 : 0,
                        // for PulseSync: END choose the playlist insertion position from the append-to-end preference
                        m = await pulseSyncMigration_i_2.changePlaylist(
                            // for PulseSync: BEGIN insert the track at the configured playlist position
                            (0, a.M)({ operation: l.y.INSERT, position: g, tracks: [{ id: pulseSyncMigration_a_1.id, albumId: null == (t = pulseSyncMigration_a_1.mainAlbum) ? void 0 : t.id }] }),
                            // for PulseSync: END insert the track at the configured playlist position
                        );
                    return (m === i.Y.OK ? c({ withSuccessNotification: s, withPageRefresh: pulseSyncMigration_u_3, playlist: pulseSyncMigration_i_2, track: pulseSyncMigration_a_1 }) : u({ withFailNotification: o }), m);
                });
            };
        },
        6667: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => n });
            var s = r(72288);
            function n(e) {
                let { withCustomTooltip: t } = e,
                    {
                        settings: { isMobile: r, browserInfo: n },
                    } = (0, s.g)();
                return ((e) => {
                    let { withCustomTooltip: t, isMobile: r, browserInfo: s } = e;
                    return !((null == s ? void 0 : s.name) === 'Safari' || r) && t;
                })({ withCustomTooltip: t, isMobile: r, browserInfo: n });
            }
        },
        7608: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => o });
            var s = r(62837),
                n = r(34126),
                i = r(98644),
                a = r(17387),
                l = r(69553);
            let o = (e, t) => {
                var r;
                let { isMobile: o, isOfflineModeEnabled: c, albumArtists: u, withTrackLink: d, withArtistLink: f, variant: x, withExplicitMark: _, query: p } = t,
                    m = (0, l.q)(e, { withLink: d, isMobile: o, isOfflineModeEnabled: c, query: p }),
                    v = (0, a.s)(null == (r = e.artists) ? void 0 : r.slice(), u),
                    g = (0, n.X)(e.trackSource, { withLink: f, isMobile: x === i.X.ALBUM && o }),
                    y = (null == _ || _) && e.disclaimers ? (0, s.DQ)(e.disclaimers) : null;
                return { ...m, artists: v, withArtistLink: g, explicitMark: y };
            };
        },
        8990: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => c });
            var s = r(88800),
                n = r(65724),
                i = r(53548),
                a = r(68870),
                l = r.n(a);
            let o = (e) => {
                    let { className: t, children: r, forwardRef: i, onClick: a, ...o } = e;
                    return (0, s.jsx)('div', { ref: i, onClick: a, className: (0, n.$)(l().root, t), ...o, children: r });
                },
                c = (0, i.forwardRef)((e, t) => (0, s.jsx)(o, { forwardRef: t, ...e }));
        },
        11105: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { O: () => s }),
                (function (e) {
                    ((e.RADIO_STARTED = 'radioStarted'),
                        (e.TRACK_STARTED = 'trackStarted'),
                        (e.TRACK_FINISHED = 'trackFinished'),
                        (e.SKIP = 'skip'),
                        (e.SKIP_FAILED = 'skipFailed'),
                        (e.LIKE = 'like'),
                        (e.DISLIKE = 'dislike'),
                        (e.AD = 'ad'),
                        (e.JINGLE = 'jingle'),
                        (e.UNLIKE = 'unlike'),
                        (e.UNDISLIKE = 'undislike'),
                        (e.COMBINED_QUEUE_STARTED = 'combinedQueueStarted'),
                        (e.PLAYABLE_ITEM_STARTED = 'playableItemStarted'),
                        (e.PLAYABLE_ITEM_FINISHED = 'playableItemFinished'),
                        (e.PLAYABLE_ITEM_SKIP = 'playableItemSkip'),
                        (e.PLAYABLE_ITEM_LIKE = 'playableItemLike'),
                        (e.PLAYABLE_ITEM_DISLIKE = 'playableItemDislike'),
                        (e.PLAYABLE_ITEM_UNLIKE = 'playableItemUnlike'),
                        (e.PLAYABLE_ITEM_UNDISLIKE = 'playableItemUndislike'));
                })(s || (s = {})));
        },
        11325: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithCover_root__s6Orw',
                coverImage: 'PlayButtonWithCover_coverImage__DhS1R',
                cover: 'PlayButtonWithCover_cover__5__Ms',
                playingAnimation: 'PlayButtonWithCover_playingAnimation__HWuOW',
                control: 'PlayButtonWithCover_control__iZy3t',
                playButton: 'PlayButtonWithCover_playButton__rV9pQ',
                playButton_loading: 'PlayButtonWithCover_playButton_loading__bqydK',
                'applying-setting': 'PlayButtonWithCover_applying-setting__ZvViA',
                root_current: 'PlayButtonWithCover_root_current__2QYEm',
                root_playing: 'PlayButtonWithCover_root_playing__tAgph',
                root_disabled: 'PlayButtonWithCover_root_disabled__EHoIx',
                root_disliked: 'PlayButtonWithCover_root_disliked__FoWzV',
                spinner: 'PlayButtonWithCover_spinner__ryn04',
                playButtonIcon: 'PlayButtonWithCover_playButtonIcon__DRjkN',
            };
        },
        12079: (e, t, r) => {
            'use strict';
            r.d(t, { s: () => _ });
            var s = r(88800),
                n = r(53548),
                i = r(2058),
                a = r(67318),
                l = r(62518),
                o = r(54915),
                c = r(63476),
                u = r(29595),
                d = r(74965),
                f = r(72288),
                x = r(66943);
            let _ = () => {
                let { playlist: e, trackIndex: t } = (0, n.useContext)(o.x) || {},
                    { notify: r } = (0, d.l)(),
                    { playlist: _ } = (0, f.g)(),
                    { formatMessage: p } = (0, i.A)(),
                    m = (0, n.useCallback)(async () => {
                        let n = !1;
                        if (
                            (e &&
                                'number' == typeof t &&
                                (await e.changePlaylist((0, l.M)({ operation: c.y.DELETE, startPosition: t, endPosition: t + 1 }))) === a.Y.OK &&
                                (n = !0),
                            n)
                        ) {
                            if (e && 'number' == typeof t) {
                                var i;
                                e.uuid === (null == (i = _.meta) ? void 0 : i.uuid) && (_.removeTracksFromItems(t, 1), _.search.setFocus());
                            }
                        } else r((0, s.jsx)(x.h, { error: p({ id: 'playlist-errors.failed-to-remove-track' }) }), { containerId: u.u.ERROR });
                    }, [e, t, _, r, p]);
                return { canRemoveTrackFromPlaylist: !!(null == e ? void 0 : e.canUserChange), removeTrackFromPlaylist: m };
            };
        },
        12241: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => s });
            let s = (0, r(53548).createContext)({ sourceContextData: null });
        },
        14357: (e) => {
            e.exports = {
                searchSection: 'PlaylistSelectionMenuContent_searchSection__OHi2V',
                searchField: 'PlaylistSelectionMenuContent_searchField__Vaytx',
                searchIcon: 'PlaylistSelectionMenuContent_searchIcon__fB_D2',
                menuItems: 'PlaylistSelectionMenuContent_menuItems__jk4uG',
                createPlaylistButton: 'PlaylistSelectionMenuContent_createPlaylistButton__sAIGn',
                menuDivider: 'PlaylistSelectionMenuContent_menuDivider__QeEUe',
            };
        },
        16717: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => a });
            var s = r(4370),
                n = r(34303),
                i = r(67174);
            let a = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: r } = (0, i.u)(s.Z.video.href, { query: { [n.K.IDS]: e.join(','), [n.K.ACTIVE_INDEX]: String(t) } });
                return r;
            };
        },
        17055: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => n });
            var s = r(44349);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === s.R.Music;
            }
        },
        17387: (e, t, r) => {
            'use strict';
            r.d(t, { s: () => n });
            var s = r(51235);
            let n = (e, t) => {
                var r, n, i;
                if (!e) return [];
                if (null == (n = e[0]) || null == (r = n.decomposed) ? void 0 : r.length) return e;
                let a = null != (i = null == t ? void 0 : t.map((e) => e.id).sort()) ? i : [],
                    l = e.map((e) => e.id).sort();
                return (0, s.A)(a, l) ? [] : e.filter((e) => !e.various);
            };
        },
        18610: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => n });
            var s = r(53548);
            let n = () =>
                (0, s.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.pushState(t, '', e);
                    }
                }, []);
        },
        20584: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { h: () => s }),
                (function (e) {
                    ((e.BASED_ON_ENTITY_BY_DEFAULT = 'BASED_ON_ENTITY_BY_DEFAULT'),
                        (e.USER_TRACKS = 'USER_TRACKS'),
                        (e.DOWNLOADED_TRACKS = 'DOWNLOADED_TRACKS'),
                        (e.SEARCH = 'SEARCH'),
                        (e.MUSIC_HISTORY = 'MUSIC_HISTORY'),
                        (e.MUSIC_HISTORY_SEARCH = 'MUSIC_HISTORY_SEARCH'),
                        (e.ARTIST_MY_COLLECTION = 'ARTIST_MY_COLLECTION'),
                        (e.ARTIST_FAMILIAR_FROM_WAVE = 'ARTIST_FAMILIAR_FROM_WAVE'));
                })(s || (s = {})));
        },
        21416: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => l });
            var s = {
                    5881: (e, t, r) => {
                        function s() {
                            for (var e, t, r = 0, s = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            s,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (s = e(t[r])) && (n && (n += ' '), (n += s));
                                            else for (r in t) t[r] && (n && (n += ' '), (n += r));
                                        return n;
                                    })(e)) &&
                                    (s && (s += ' '), (s += t));
                            return s;
                        }
                        (r.r(t), r.d(t, { clsx: () => s, default: () => n }));
                        let n = s;
                    },
                    2059: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => s }));
                        let s = {
                            root: 'i0E_2NX4cuGTUSRVsza3',
                            rotate: 'SMKp_W9v6gety5k24_TU',
                            root_size_xxxs: 'OSqyMcSTAjYqzIL992Yw',
                            root_size_xxs: 'wc4asYHkCHxWpvH_vfHV',
                            root_size_xs: '_EehQphkMVEVJTlcOqgz',
                            root_size_s: 'R_2xF0Onip_K0GrDRV97',
                            root_size_m: 'tQV7pWeuTErBtRna7Fxx',
                            root_size_l: 'OJsrGLXpsIsmbj65C9AC',
                            root_size_xl: 'Vo4fBR82NKcVtfQCh508',
                            root_size_xxl: 'F45u5jR26w00BDX1OFHX',
                            gradient: 'xNNiKSvH1JTxlAkvyDlr',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function s(e, t, s) {
                            var n = null;
                            if ((void 0 !== s && (n = '' + s), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var i in ((s = {}), t)) 'key' !== i && (s[i] = t[i]);
                            else s = t;
                            return { $$typeof: r, type: e, key: n, ref: void 0 !== (t = s.ref) ? t : null, props: s };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = s), (t.jsxs = s));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    7279: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Spinner = void 0));
                        let n = r(4377),
                            i = r(5881),
                            a = s(r(2059));
                        t.Spinner = (e) => {
                            let { className: t, thicknessSizeRatio: r = 0.1, paddingSizeRatio: s = 0.08, size: l, ...o } = e,
                                c = 100 * r,
                                u = 50 - c / 2 - 100 * s,
                                d = ((3 * Math.PI) / 2) * u;
                            return (0, n.jsxs)('svg', {
                                viewBox: '0 0 '.concat(100, ' ').concat(100),
                                className: (0, i.clsx)(a.default.root, a.default['root_size_'.concat(l)], t),
                                'aria-hidden': !0,
                                ...o,
                                children: [
                                    (0, n.jsx)('defs', {
                                        children: (0, n.jsx)('mask', {
                                            id: 'mask',
                                            maskContentUnits: 'userSpaceOnUse',
                                            children: (0, n.jsx)('circle', {
                                                cx: 50,
                                                cy: 50,
                                                r: u,
                                                stroke: 'white',
                                                strokeLinecap: 'round',
                                                strokeWidth: c,
                                                strokeDasharray: d,
                                                fill: 'none',
                                            }),
                                        }),
                                    }),
                                    (0, n.jsx)('foreignObject', {
                                        x: '0',
                                        y: '0',
                                        width: 100,
                                        height: 100,
                                        mask: 'url(#mask)',
                                        children: (0, n.jsx)('div', { className: a.default.gradient }),
                                    }),
                                ],
                            });
                        };
                    },
                },
                n = {};
            function i(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, i), r.exports);
            }
            ((i.d = (e, t) => {
                for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (i.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, 'X', { value: !0 }), (a.$ = void 0));
                var e = i(7279);
                Object.defineProperty(a, '$', {
                    enumerable: !0,
                    get: function () {
                        return e.Spinner;
                    },
                });
            })();
            var l = a.$;
            a.X;
        },
        23237: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => f });
            var s,
                n = r(87819),
                i = r(68211),
                a = r(14022),
                l = r(53548),
                o = {
                    5728: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        var s,
                            n,
                            i = r(810);
                        function a() {
                            return (a = Object.assign
                                ? Object.assign.bind()
                                : function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var r = arguments[t];
                                          for (var s in r) ({}).hasOwnProperty.call(r, s) && (e[s] = r[s]);
                                      }
                                      return e;
                                  }).apply(null, arguments);
                        }
                        let l = (0, i.forwardRef)(function (e, t) {
                            return i.createElement(
                                'svg',
                                a({ fill: 'none', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', ref: t }, e),
                                s ||
                                    (s = i.createElement(
                                        'g',
                                        { clipPath: 'url(#plusBadge_svg__a)' },
                                        i.createElement('path', { fill: 'url(#plusBadge_svg__b)', d: 'M0 0h24v24H0z' }),
                                        i.createElement('path', {
                                            fillRule: 'evenodd',
                                            clipRule: 'evenodd',
                                            d: 'm12.636 16.794 1.559-4.797h5.797a7.996 7.996 0 1 1-5.525-7.606l-1.822 5.607H7.324l-.65 1.999h5.322l-1.56 4.797h2.2Zm2.208-6.796 1.526-4.694a8.004 8.004 0 0 1 3.37 4.694h-4.896Z',
                                            fill: '#fff',
                                        }),
                                    )),
                                n ||
                                    (n = i.createElement(
                                        'defs',
                                        null,
                                        i.createElement(
                                            'linearGradient',
                                            { id: 'plusBadge_svg__b', x1: 0, y1: 10.4, x2: 24, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                            i.createElement('stop', { stopColor: '#FF5C4D' }),
                                            i.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                            i.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                                        ),
                                        i.createElement('clipPath', { id: 'plusBadge_svg__a' }, i.createElement('rect', { width: 24, height: 24, rx: 6, fill: '#fff' })),
                                    )),
                            );
                        });
                    },
                    9877: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        var s,
                            n,
                            i = r(810);
                        function a() {
                            return (a = Object.assign
                                ? Object.assign.bind()
                                : function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var r = arguments[t];
                                          for (var s in r) ({}).hasOwnProperty.call(r, s) && (e[s] = r[s]);
                                      }
                                      return e;
                                  }).apply(null, arguments);
                        }
                        let l = (0, i.forwardRef)(function (e, t) {
                            return i.createElement(
                                'svg',
                                a({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', ref: t }, e),
                                s ||
                                    (s = i.createElement(
                                        'g',
                                        { clipPath: 'url(#plusColor_svg__a)' },
                                        i.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                                        i.createElement('path', {
                                            fill: 'url(#plusColor_svg__b)',
                                            fillRule: 'evenodd',
                                            d: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c1.295 0 2.542.205 3.71.585L12.977 9H4.989l-.976 3H12l-2.34 7.2h3.3L15.3 12H24Zm-.378-3h-7.346l2.29-7.046A12.019 12.019 0 0 1 23.622 9Z',
                                            clipRule: 'evenodd',
                                        }),
                                    )),
                                n ||
                                    (n = i.createElement(
                                        'defs',
                                        null,
                                        i.createElement(
                                            'linearGradient',
                                            { id: 'plusColor_svg__b', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                            i.createElement('stop', { stopColor: '#FF5C4D' }),
                                            i.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                            i.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                                        ),
                                        i.createElement('clipPath', { id: 'plusColor_svg__a' }, i.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                                    )),
                            );
                        });
                    },
                    5881: (e, t, r) => {
                        function s() {
                            for (var e, t, r = 0, s = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            s,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (s = e(t[r])) && (n && (n += ' '), (n += s));
                                            else for (r in t) t[r] && (n && (n += ' '), (n += r));
                                        return n;
                                    })(e)) &&
                                    (s && (s += ' '), (s += t));
                            return s;
                        }
                        (r.r(t), r.d(t, { clsx: () => s, default: () => n }));
                        let n = s;
                    },
                    2850: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => s }));
                        let s = {
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
                    4257: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => s }));
                        let s = {
                            root_size_xxxs: 'Rkdd2vKC_3xa1eUdRdHP',
                            root_size_xxs: 'l3tE1hAMmBj2aoPPwU08',
                            root_size_xs: 'UwnL5AJBMMAp6NwMDdZk',
                            root_size_s: 'DzJFnuf7XgdkFh28JAsM',
                            root_size_m: 'o_v2ds2BaqtzAsRuCVjw',
                            root_size_l: 'YjRa1ZjM_lXFlrfS7jcu',
                            root_size_xl: 'Seq0GowcqQmiA9LdLP_g',
                            root_size_xxl: 'mfy69_BvBIamD0e22rCQ',
                            root_size_xxxl: 'JY1OniQewgW9iHgfllZS',
                        };
                    },
                    3707: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => s }));
                        let s = {
                            root: 'kAYDswAvA1AJoAzRV4rY',
                            root_disabled: 'vkAwJpSGxne16yE82eHh',
                            root_size_xxxs: 'i690pcQGptnPbYcI77fh',
                            root_size_xxs: 'K2cOFeQVOaRzGAOv6gWL',
                            input: 'GRggPQ1rZgvcyCxPPgvw',
                            root_variant_secondary: 'o9HhnHzukPG4e94AXBNT',
                            textShadowing: 'ceR_9q_roxCLdCPR87Qw',
                            actions: 'XsBFSZAjR3ZRN8oqetex',
                        };
                    },
                    9500: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => s }));
                        let s = {
                            searchIcon: 'LoJPNHBhYAkQh7hBQYIP',
                            searchIcon_disabled: 'U1fHaoo5ZnRY0W6P1cXz',
                            searchContainer: 'YBgyycmmzZchX_EgLcrA',
                            searchInput: 'QYgjNkDJ7XdqE28ipieh',
                            reset: 'sGZaYJkCxVIV1wkix81s',
                            reset_show: 'A0wDRuyRnXuI3ja3zx0E',
                        };
                    },
                    4490: (e, t, r) => {
                        (r.r(t), r.d(t, { DOWN: () => l, LEFT: () => n, RIGHT: () => i, UP: () => a, useSwipeable: () => x }));
                        var s = r(810);
                        let n = 'Left',
                            i = 'Right',
                            a = 'Up',
                            l = 'Down',
                            o = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            c = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            u = 'mousemove',
                            d = 'mouseup';
                        function f(e, t) {
                            if (0 === t) return e;
                            let r = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(r) + e[1] * Math.sin(r), e[1] * Math.cos(r) - e[0] * Math.sin(r)];
                        }
                        function x(e) {
                            var t, r, x;
                            let _,
                                { trackMouse: p } = e,
                                m = s.useRef(Object.assign({}, c)),
                                v = s.useRef(Object.assign({}, o)),
                                g = s.useRef(Object.assign({}, v.current));
                            for (_ in ((g.current = Object.assign({}, v.current)), (v.current = Object.assign(Object.assign({}, o), e)), o))
                                void 0 === v.current[_] && (v.current[_] = o[_]);
                            let [y, E] = s.useMemo(
                                () =>
                                    (function (e, t) {
                                        let r = (t) => {
                                                let r = 'touches' in t;
                                                (r && t.touches.length > 1) ||
                                                    e((e, n) => {
                                                        n.trackMouse && !r && (document.addEventListener(u, s), document.addEventListener(d, _));
                                                        let { clientX: i, clientY: a } = r ? t.touches[0] : t,
                                                            l = f([i, a], n.rotationAngle);
                                                        return (
                                                            n.onTouchStartOrOnMouseDown && n.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), c), { initial: l.slice(), xy: l, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            s = (t) => {
                                                e((e, r) => {
                                                    var s, c, u, d;
                                                    let x = 'touches' in t;
                                                    if (x && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > r.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: _, clientY: p } = x ? t.touches[0] : t,
                                                        [m, v] = f([_, p], r.rotationAngle),
                                                        g = m - e.xy[0],
                                                        y = v - e.xy[1],
                                                        E = Math.abs(g),
                                                        k = Math.abs(y),
                                                        b = (t.timeStamp || 0) - e.start,
                                                        O = Math.sqrt(E * E + k * k) / (b || 1),
                                                        h = [g / (b || 1), y / (b || 1)],
                                                        w = ((s = E), (c = k), (u = g), (d = y), s > c ? (u > 0 ? i : n) : d > 0 ? l : a),
                                                        R = 'number' == typeof r.delta ? r.delta : r.delta[w.toLowerCase()] || o.delta;
                                                    if (E < R && k < R && !e.swiping) return e;
                                                    let A = {
                                                        absX: E,
                                                        absY: k,
                                                        deltaX: g,
                                                        deltaY: y,
                                                        dir: w,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: O,
                                                        vxvy: h,
                                                    };
                                                    (A.first && r.onSwipeStart && r.onSwipeStart(A), r.onSwiping && r.onSwiping(A));
                                                    let j = !1;
                                                    return (
                                                        (r.onSwiping || r.onSwiped || r['onSwiped'.concat(w)]) && (j = !0),
                                                        j && r.preventScrollOnSwipe && r.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: A, swiping: !0 })
                                                    );
                                                });
                                            },
                                            x = (t) => {
                                                e((e, r) => {
                                                    let s;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < r.swipeDuration) {
                                                            ((s = Object.assign(Object.assign({}, e.eventData), { event: t })), r.onSwiped && r.onSwiped(s));
                                                            let n = r['onSwiped'.concat(s.dir)];
                                                            n && n(s);
                                                        }
                                                    } else r.onTap && r.onTap({ event: t });
                                                    return (
                                                        r.onTouchEndOrOnMouseUp && r.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), c), { eventData: s })
                                                    );
                                                });
                                            },
                                            _ = (e) => {
                                                (document.removeEventListener(u, s), document.removeEventListener(d, _), x(e));
                                            },
                                            p = (e, t) => {
                                                let n = () => {};
                                                if (e && e.addEventListener) {
                                                    let i = Object.assign(Object.assign({}, o.touchEventOptions), t.touchEventOptions),
                                                        a = [
                                                            ['touchstart', r, i],
                                                            ['touchmove', s, Object.assign(Object.assign({}, i), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', x, i],
                                                        ];
                                                    (a.forEach((t) => {
                                                        let [r, s, n] = t;
                                                        return e.addEventListener(r, s, n);
                                                    }),
                                                        (n = () =>
                                                            a.forEach((t) => {
                                                                let [r, s] = t;
                                                                return e.removeEventListener(r, s);
                                                            })));
                                                }
                                                return n;
                                            },
                                            m = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, r) => {
                                                            if (e.el === t) return e;
                                                            let s = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (s.cleanUpTouch = void 0)),
                                                                r.trackTouch && t && (s.cleanUpTouch = p(t, r)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), s)
                                                            );
                                                        });
                                                },
                                            };
                                        return (t.trackMouse && (m.onMouseDown = r), [m, p]);
                                    })((e) => (m.current = e(m.current, v.current)), { trackMouse: p }),
                                [p],
                            );
                            return (
                                (t = m.current),
                                (r = v.current),
                                (x = g.current),
                                (m.current =
                                    r.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? r.preventScrollOnSwipe !== x.preventScrollOnSwipe || r.touchEventOptions.passive !== x.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: E(t.el, r) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: E(t.el, r) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                y
                            );
                        }
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function s(e, t, s) {
                            var n = null;
                            if ((void 0 !== s && (n = '' + s), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var i in ((s = {}), t)) 'key' !== i && (s[i] = t[i]);
                            else s = t;
                            return { $$typeof: r, type: e, key: n, ref: void 0 !== (t = s.ref) ? t : null, props: s };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = s), (t.jsxs = s));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5282: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'addToPlaylist_xxs', xlinkHref: '/icons/sprite.svg#addToPlaylist_xxs' }),
                            ]);
                        });
                    },
                    6150: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'add_l', xlinkHref: '/icons/sprite.svg#add_l' }),
                            ]);
                        });
                    },
                    3735: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'add_xxs', xlinkHref: '/icons/sprite.svg#add_xxs' }),
                            ]);
                        });
                    },
                    7177: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'add_xxxs', xlinkHref: '/icons/sprite.svg#add_xxxs' }),
                            ]);
                        });
                    },
                    6970: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'adult_s', xlinkHref: '/icons/sprite.svg#adult_s' }),
                            ]);
                        });
                    },
                    4121: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'adult_xs', xlinkHref: '/icons/sprite.svg#adult_xs' }),
                            ]);
                        });
                    },
                    4920: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'adult_xxs', xlinkHref: '/icons/sprite.svg#adult_xxs' }),
                            ]);
                        });
                    },
                    8897: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'adult_xxxs', xlinkHref: '/icons/sprite.svg#adult_xxxs' }),
                            ]);
                        });
                    },
                    3848: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_l', xlinkHref: '/icons/sprite.svg#album_l' }),
                            ]);
                        });
                    },
                    7397: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_s', xlinkHref: '/icons/sprite.svg#album_s' }),
                            ]);
                        });
                    },
                    4348: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_xl', xlinkHref: '/icons/sprite.svg#album_xl' }),
                            ]);
                        });
                    },
                    4227: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_xs', xlinkHref: '/icons/sprite.svg#album_xs' }),
                            ]);
                        });
                    },
                    3512: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'album_xxs', xlinkHref: '/icons/sprite.svg#album_xxs' }),
                            ]);
                        });
                    },
                    7581: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowDown_xs', xlinkHref: '/icons/sprite.svg#arrowDown_xs' }),
                            ]);
                        });
                    },
                    205: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowDown_xxs', xlinkHref: '/icons/sprite.svg#arrowDown_xxs' }),
                            ]);
                        });
                    },
                    3691: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowDown_xxxs', xlinkHref: '/icons/sprite.svg#arrowDown_xxxs' }),
                            ]);
                        });
                    },
                    8705: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowLeft_xs', xlinkHref: '/icons/sprite.svg#arrowLeft_xs' }),
                            ]);
                        });
                    },
                    9400: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowLeft_xxs', xlinkHref: '/icons/sprite.svg#arrowLeft_xxs' }),
                            ]);
                        });
                    },
                    5993: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowRight_xs', xlinkHref: '/icons/sprite.svg#arrowRight_xs' }),
                            ]);
                        });
                    },
                    7423: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowRight_xxs', xlinkHref: '/icons/sprite.svg#arrowRight_xxs' }),
                            ]);
                        });
                    },
                    2402: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'arrowRight_xxxs', xlinkHref: '/icons/sprite.svg#arrowRight_xxxs' }),
                            ]);
                        });
                    },
                    249: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'artist_xxs', xlinkHref: '/icons/sprite.svg#artist_xxs' }),
                            ]);
                        });
                    },
                    5543: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'attention_xxl', xlinkHref: '/icons/sprite.svg#attention_xxl' }),
                            ]);
                        });
                    },
                    3057: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'attention_xxxl', xlinkHref: '/icons/sprite.svg#attention_xxxl' }),
                            ]);
                        });
                    },
                    3715: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'bandlink', xlinkHref: '/icons/sprite.svg#bandlink' }),
                            ]);
                        });
                    },
                    7457: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'bucket_xxs', xlinkHref: '/icons/sprite.svg#bucket_xxs' }),
                            ]);
                        });
                    },
                    3902: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'cast_xs', xlinkHref: '/icons/sprite.svg#cast_xs' }),
                            ]);
                        });
                    },
                    9608: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chain_xs', xlinkHref: '/icons/sprite.svg#chain_xs' }),
                            ]);
                        });
                    },
                    2540: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chain_xxs', xlinkHref: '/icons/sprite.svg#chain_xxs' }),
                            ]);
                        });
                    },
                    5093: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chartDown_xxs', xlinkHref: '/icons/sprite.svg#chartDown_xxs' }),
                            ]);
                        });
                    },
                    5791: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chartNew_xxs', xlinkHref: '/icons/sprite.svg#chartNew_xxs' }),
                            ]);
                        });
                    },
                    1027: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chartSame_xxs', xlinkHref: '/icons/sprite.svg#chartSame_xxs' }),
                            ]);
                        });
                    },
                    6276: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'chartUp_xxs', xlinkHref: '/icons/sprite.svg#chartUp_xxs' }),
                            ]);
                        });
                    },
                    6311: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'check_xs', xlinkHref: '/icons/sprite.svg#check_xs' }),
                            ]);
                        });
                    },
                    272: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'check_xxl', xlinkHref: '/icons/sprite.svg#check_xxl' }),
                            ]);
                        });
                    },
                    154: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'check_xxs', xlinkHref: '/icons/sprite.svg#check_xxs' }),
                            ]);
                        });
                    },
                    1557: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'check_xxxs', xlinkHref: '/icons/sprite.svg#check_xxxs' }),
                            ]);
                        });
                    },
                    8836: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'clip_xl', xlinkHref: '/icons/sprite.svg#clip_xl' }),
                            ]);
                        });
                    },
                    2866: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'clip_xxs', xlinkHref: '/icons/sprite.svg#clip_xxs' }),
                            ]);
                        });
                    },
                    1595: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'close_filled_xs', xlinkHref: '/icons/sprite.svg#close_filled_xs' }),
                            ]);
                        });
                    },
                    6547: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'close_xs', xlinkHref: '/icons/sprite.svg#close_xs' }),
                            ]);
                        });
                    },
                    4777: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'close_xxs', xlinkHref: '/icons/sprite.svg#close_xxs' }),
                            ]);
                        });
                    },
                    9271: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'close_xxxs', xlinkHref: '/icons/sprite.svg#close_xxxs' }),
                            ]);
                        });
                    },
                    2390: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'code_xxs', xlinkHref: '/icons/sprite.svg#code_xxs' }),
                            ]);
                        });
                    },
                    4717: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'collections_m', xlinkHref: '/icons/sprite.svg#collections_m' }),
                            ]);
                        });
                    },
                    5561: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'collections_selected_m', xlinkHref: '/icons/sprite.svg#collections_selected_m' }),
                            ]);
                        });
                    },
                    7656: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'complain_l', xlinkHref: '/icons/sprite.svg#complain_l' }),
                            ]);
                        });
                    },
                    2777: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'complain_m', xlinkHref: '/icons/sprite.svg#complain_m' }),
                            ]);
                        });
                    },
                    2364: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'complain_s', xlinkHref: '/icons/sprite.svg#complain_s' }),
                            ]);
                        });
                    },
                    6823: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'complain_xl', xlinkHref: '/icons/sprite.svg#complain_xl' }),
                            ]);
                        });
                    },
                    4955: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'complain_xs', xlinkHref: '/icons/sprite.svg#complain_xs' }),
                            ]);
                        });
                    },
                    5842: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'complain_xxl', xlinkHref: '/icons/sprite.svg#complain_xxl' }),
                            ]);
                        });
                    },
                    7067: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'complain_xxs', xlinkHref: '/icons/sprite.svg#complain_xxs' }),
                            ]);
                        });
                    },
                    4247: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'complain_xxxl', xlinkHref: '/icons/sprite.svg#complain_xxxl' }),
                            ]);
                        });
                    },
                    4941: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'complain_xxxs', xlinkHref: '/icons/sprite.svg#complain_xxxs' }),
                            ]);
                        });
                    },
                    3790: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'crown_xxs', xlinkHref: '/icons/sprite.svg#crown_xxs' }),
                            ]);
                        });
                    },
                    8202: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'dislike_s', xlinkHref: '/icons/sprite.svg#dislike_s' }),
                            ]);
                        });
                    },
                    2528: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'dislike_xs', xlinkHref: '/icons/sprite.svg#dislike_xs' }),
                            ]);
                        });
                    },
                    2901: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'dislike_xxs', xlinkHref: '/icons/sprite.svg#dislike_xxs' }),
                            ]);
                        });
                    },
                    1552: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'disliked_s', xlinkHref: '/icons/sprite.svg#disliked_s' }),
                            ]);
                        });
                    },
                    8499: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'disliked_xs', xlinkHref: '/icons/sprite.svg#disliked_xs' }),
                            ]);
                        });
                    },
                    6682: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'disliked_xxs', xlinkHref: '/icons/sprite.svg#disliked_xxs' }),
                            ]);
                        });
                    },
                    20: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'donation_xxxs', xlinkHref: '/icons/sprite.svg#donation_xxxs' }),
                            ]);
                        });
                    },
                    1605: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'download_l', xlinkHref: '/icons/sprite.svg#download_l' }),
                            ]);
                        });
                    },
                    9299: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'download_xxs', xlinkHref: '/icons/sprite.svg#download_xxs' }),
                            ]);
                        });
                    },
                    1126: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'downloaded_xxs', xlinkHref: '/icons/sprite.svg#downloaded_xxs' }),
                            ]);
                        });
                    },
                    5294: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'dragDots_xxs', xlinkHref: '/icons/sprite.svg#dragDots_xxs' }),
                            ]);
                        });
                    },
                    9551: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'edit_xxs', xlinkHref: '/icons/sprite.svg#edit_xxs' }),
                            ]);
                        });
                    },
                    6070: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'exclamation_s', xlinkHref: '/icons/sprite.svg#exclamation_s' }),
                            ]);
                        });
                    },
                    837: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'exclamation_xs', xlinkHref: '/icons/sprite.svg#exclamation_xs' }),
                            ]);
                        });
                    },
                    1578: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'exclamation_xxs', xlinkHref: '/icons/sprite.svg#exclamation_xxs' }),
                            ]);
                        });
                    },
                    8871: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'exclamation_xxxs', xlinkHref: '/icons/sprite.svg#exclamation_xxxs' }),
                            ]);
                        });
                    },
                    2098: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'explicit_s', xlinkHref: '/icons/sprite.svg#explicit_s' }),
                            ]);
                        });
                    },
                    4623: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'explicit_xs', xlinkHref: '/icons/sprite.svg#explicit_xs' }),
                            ]);
                        });
                    },
                    1654: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'explicit_xxs', xlinkHref: '/icons/sprite.svg#explicit_xxs' }),
                            ]);
                        });
                    },
                    6639: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'explicit_xxxs', xlinkHref: '/icons/sprite.svg#explicit_xxxs' }),
                            ]);
                        });
                    },
                    7162: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'eye_crossed_xxs', xlinkHref: '/icons/sprite.svg#eye_crossed_xxs' }),
                            ]);
                        });
                    },
                    2756: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'filter_xs', xlinkHref: '/icons/sprite.svg#filter_xs' }),
                            ]);
                        });
                    },
                    9807: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'filter_xxs', xlinkHref: '/icons/sprite.svg#filter_xxs' }),
                            ]);
                        });
                    },
                    8473: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'fullscreen_xs', xlinkHref: '/icons/sprite.svg#fullscreen_xs' }),
                            ]);
                        });
                    },
                    9833: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'gift_xxs', xlinkHref: '/icons/sprite.svg#gift_xxs' }),
                            ]);
                        });
                    },
                    3286: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'googlePlay', xlinkHref: '/icons/sprite.svg#googlePlay' }),
                            ]);
                        });
                    },
                    3003: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'history_m', xlinkHref: '/icons/sprite.svg#history_m' }),
                            ]);
                        });
                    },
                    4561: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'home_m', xlinkHref: '/icons/sprite.svg#home_m' }),
                            ]);
                        });
                    },
                    4355: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'home_selected_m', xlinkHref: '/icons/sprite.svg#home_selected_m' }),
                            ]);
                        });
                    },
                    3331: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'huaweiAppGallery', xlinkHref: '/icons/sprite.svg#huaweiAppGallery' }),
                            ]);
                        });
                    },
                    7662: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'infinity_xs', xlinkHref: '/icons/sprite.svg#infinity_xs' }),
                            ]);
                        });
                    },
                    4959: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'info_xxs', xlinkHref: '/icons/sprite.svg#info_xxs' }),
                            ]);
                        });
                    },
                    9642: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'kids_m', xlinkHref: '/icons/sprite.svg#kids_m' }),
                            ]);
                        });
                    },
                    2244: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'kids_selected_m', xlinkHref: '/icons/sprite.svg#kids_selected_m' }),
                            ]);
                        });
                    },
                    7722: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'kinopoiskEn', xlinkHref: '/icons/sprite.svg#kinopoiskEn' }),
                            ]);
                        });
                    },
                    362: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'kinopoiskRu', xlinkHref: '/icons/sprite.svg#kinopoiskRu' }),
                            ]);
                        });
                    },
                    2086: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lightning_xxs', xlinkHref: '/icons/sprite.svg#lightning_xxs' }),
                            ]);
                        });
                    },
                    5035: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'likeVariant_xxs', xlinkHref: '/icons/sprite.svg#likeVariant_xxs' }),
                            ]);
                        });
                    },
                    1423: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'like_l', xlinkHref: '/icons/sprite.svg#like_l' }),
                            ]);
                        });
                    },
                    2845: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'like_m', xlinkHref: '/icons/sprite.svg#like_m' }),
                            ]);
                        });
                    },
                    4933: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'like_xs', xlinkHref: '/icons/sprite.svg#like_xs' }),
                            ]);
                        });
                    },
                    835: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'like_xxs', xlinkHref: '/icons/sprite.svg#like_xxs' }),
                            ]);
                        });
                    },
                    6707: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'likedVariant_s', xlinkHref: '/icons/sprite.svg#likedVariant_s' }),
                            ]);
                        });
                    },
                    6036: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'likedVariant_xxs', xlinkHref: '/icons/sprite.svg#likedVariant_xxs' }),
                            ]);
                        });
                    },
                    9503: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'liked_m', xlinkHref: '/icons/sprite.svg#liked_m' }),
                            ]);
                        });
                    },
                    2138: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'liked_xs', xlinkHref: '/icons/sprite.svg#liked_xs' }),
                            ]);
                        });
                    },
                    7526: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'liked_xxs', xlinkHref: '/icons/sprite.svg#liked_xxs' }),
                            ]);
                        });
                    },
                    9130: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'link_rounded_xxs', xlinkHref: '/icons/sprite.svg#link_rounded_xxs' }),
                            ]);
                        });
                    },
                    9825: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'link_xxs', xlinkHref: '/icons/sprite.svg#link_xxs' }),
                            ]);
                        });
                    },
                    8426: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'listen_xxxs', xlinkHref: '/icons/sprite.svg#listen_xxxs' }),
                            ]);
                        });
                    },
                    3791: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'liteVersion_xs', xlinkHref: '/icons/sprite.svg#liteVersion_xs' }),
                            ]);
                        });
                    },
                    7419: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lock_m', xlinkHref: '/icons/sprite.svg#lock_m' }),
                            ]);
                        });
                    },
                    9376: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lock_xs', xlinkHref: '/icons/sprite.svg#lock_xs' }),
                            ]);
                        });
                    },
                    2506: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lock_xxs', xlinkHref: '/icons/sprite.svg#lock_xxs' }),
                            ]);
                        });
                    },
                    3708: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'lyrics_xxs', xlinkHref: '/icons/sprite.svg#lyrics_xxs' }),
                            ]);
                        });
                    },
                    6407: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'macos', xlinkHref: '/icons/sprite.svg#macos' }),
                            ]);
                        });
                    },
                    5200: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'macos_xxs', xlinkHref: '/icons/sprite.svg#macos_xxs' }),
                            ]);
                        });
                    },
                    513: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'menuArrow_xxs', xlinkHref: '/icons/sprite.svg#menuArrow_xxs' }),
                            ]);
                        });
                    },
                    4374: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'moreOutlined_xxs', xlinkHref: '/icons/sprite.svg#moreOutlined_xxs' }),
                            ]);
                        });
                    },
                    6393: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'moreOutlined_xxxs', xlinkHref: '/icons/sprite.svg#moreOutlined_xxxs' }),
                            ]);
                        });
                    },
                    2570: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'more_m', xlinkHref: '/icons/sprite.svg#more_m' }),
                            ]);
                        });
                    },
                    6465: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'more_xs', xlinkHref: '/icons/sprite.svg#more_xs' }),
                            ]);
                        });
                    },
                    6760: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'more_xxs', xlinkHref: '/icons/sprite.svg#more_xxs' }),
                            ]);
                        });
                    },
                    740: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogo', xlinkHref: '/icons/sprite.svg#musicLogo' }),
                            ]);
                        });
                    },
                    2747: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogoCenterEn', xlinkHref: '/icons/sprite.svg#musicLogoCenterEn' }),
                            ]);
                        });
                    },
                    3590: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogoCenterRu', xlinkHref: '/icons/sprite.svg#musicLogoCenterRu' }),
                            ]);
                        });
                    },
                    5656: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogoLeftEn', xlinkHref: '/icons/sprite.svg#musicLogoLeftEn' }),
                            ]);
                        });
                    },
                    9723: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'musicLogoLeftRu', xlinkHref: '/icons/sprite.svg#musicLogoLeftRu' }),
                            ]);
                        });
                    },
                    3725: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationCollection_selected_xs', xlinkHref: '/icons/sprite.svg#navigationCollection_selected_xs' }),
                            ]);
                        });
                    },
                    3982: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationCollection_xs', xlinkHref: '/icons/sprite.svg#navigationCollection_xs' }),
                            ]);
                        });
                    },
                    2410: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationConcerts_selected_xs', xlinkHref: '/icons/sprite.svg#navigationConcerts_selected_xs' }),
                            ]);
                        });
                    },
                    7516: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationConcerts_xs', xlinkHref: '/icons/sprite.svg#navigationConcerts_xs' }),
                            ]);
                        });
                    },
                    3270: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', {
                                    key: 'navigationForYouAndTrends_selected_xs',
                                    xlinkHref: '/icons/sprite.svg#navigationForYouAndTrends_selected_xs',
                                }),
                            ]);
                        });
                    },
                    1581: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationForYouAndTrends_xs', xlinkHref: '/icons/sprite.svg#navigationForYouAndTrends_xs' }),
                            ]);
                        });
                    },
                    6586: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationKids_selected_xs', xlinkHref: '/icons/sprite.svg#navigationKids_selected_xs' }),
                            ]);
                        });
                    },
                    473: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationKids_xs', xlinkHref: '/icons/sprite.svg#navigationKids_xs' }),
                            ]);
                        });
                    },
                    7145: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationMuzmarket_m', xlinkHref: '/icons/sprite.svg#navigationMuzmarket_m' }),
                            ]);
                        });
                    },
                    553: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationMuzmarket_xs', xlinkHref: '/icons/sprite.svg#navigationMuzmarket_xs' }),
                            ]);
                        });
                    },
                    9697: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationMyVibeNDA_xs', xlinkHref: '/icons/sprite.svg#navigationMyVibeNDA_xs' }),
                            ]);
                        });
                    },
                    49: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationMyVibe_xs', xlinkHref: '/icons/sprite.svg#navigationMyVibe_xs' }),
                            ]);
                        });
                    },
                    4085: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationNonMusic_selected_xs', xlinkHref: '/icons/sprite.svg#navigationNonMusic_selected_xs' }),
                            ]);
                        });
                    },
                    9954: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationNonMusic_xs', xlinkHref: '/icons/sprite.svg#navigationNonMusic_xs' }),
                            ]);
                        });
                    },
                    4281: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationPlus_xs', xlinkHref: '/icons/sprite.svg#navigationPlus_xs' }),
                            ]);
                        });
                    },
                    1568: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'navigationSearch_xs', xlinkHref: '/icons/sprite.svg#navigationSearch_xs' }),
                            ]);
                        });
                    },
                    2554: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'next_xs', xlinkHref: '/icons/sprite.svg#next_xs' }),
                            ]);
                        });
                    },
                    4400: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'next_xxl', xlinkHref: '/icons/sprite.svg#next_xxl' }),
                            ]);
                        });
                    },
                    8803: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'next_xxs', xlinkHref: '/icons/sprite.svg#next_xxs' }),
                            ]);
                        });
                    },
                    2060: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'non_music_m', xlinkHref: '/icons/sprite.svg#non_music_m' }),
                            ]);
                        });
                    },
                    5407: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'non_music_selected_m', xlinkHref: '/icons/sprite.svg#non_music_selected_m' }),
                            ]);
                        });
                    },
                    4526: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_l', xlinkHref: '/icons/sprite.svg#note_l' }),
                            ]);
                        });
                    },
                    6187: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_m', xlinkHref: '/icons/sprite.svg#note_m' }),
                            ]);
                        });
                    },
                    2020: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_s', xlinkHref: '/icons/sprite.svg#note_s' }),
                            ]);
                        });
                    },
                    1235: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_xl', xlinkHref: '/icons/sprite.svg#note_xl' }),
                            ]);
                        });
                    },
                    5108: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_xs', xlinkHref: '/icons/sprite.svg#note_xs' }),
                            ]);
                        });
                    },
                    9119: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_xxs', xlinkHref: '/icons/sprite.svg#note_xxs' }),
                            ]);
                        });
                    },
                    3581: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'note_xxxs', xlinkHref: '/icons/sprite.svg#note_xxxs' }),
                            ]);
                        });
                    },
                    9189: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'offline_xxl', xlinkHref: '/icons/sprite.svg#offline_xxl' }),
                            ]);
                        });
                    },
                    7488: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause', xlinkHref: '/icons/sprite.svg#pause' }),
                            ]);
                        });
                    },
                    5879: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pauseVibe_s', xlinkHref: '/icons/sprite.svg#pauseVibe_s' }),
                            ]);
                        });
                    },
                    3908: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_l', xlinkHref: '/icons/sprite.svg#pause_filled_l' }),
                            ]);
                        });
                    },
                    3728: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_m', xlinkHref: '/icons/sprite.svg#pause_filled_m' }),
                            ]);
                        });
                    },
                    1540: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_xl', xlinkHref: '/icons/sprite.svg#pause_filled_xl' }),
                            ]);
                        });
                    },
                    8972: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_xs', xlinkHref: '/icons/sprite.svg#pause_filled_xs' }),
                            ]);
                        });
                    },
                    9051: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_filled_xxl', xlinkHref: '/icons/sprite.svg#pause_filled_xxl' }),
                            ]);
                        });
                    },
                    8831: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_m', xlinkHref: '/icons/sprite.svg#pause_m' }),
                            ]);
                        });
                    },
                    3874: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_xs', xlinkHref: '/icons/sprite.svg#pause_xs' }),
                            ]);
                        });
                    },
                    8406: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pause_xxs', xlinkHref: '/icons/sprite.svg#pause_xxs' }),
                            ]);
                        });
                    },
                    7525: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pencil_xxs', xlinkHref: '/icons/sprite.svg#pencil_xxs' }),
                            ]);
                        });
                    },
                    2629: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'picture_s', xlinkHref: '/icons/sprite.svg#picture_s' }),
                            ]);
                        });
                    },
                    7514: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'picture_xl', xlinkHref: '/icons/sprite.svg#picture_xl' }),
                            ]);
                        });
                    },
                    4338: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'picture_xs', xlinkHref: '/icons/sprite.svg#picture_xs' }),
                            ]);
                        });
                    },
                    3310: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pin_filled_xs', xlinkHref: '/icons/sprite.svg#pin_filled_xs' }),
                            ]);
                        });
                    },
                    9180: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pin_filled_xxs', xlinkHref: '/icons/sprite.svg#pin_filled_xxs' }),
                            ]);
                        });
                    },
                    6179: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pin_xs', xlinkHref: '/icons/sprite.svg#pin_xs' }),
                            ]);
                        });
                    },
                    6286: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'pin_xxs', xlinkHref: '/icons/sprite.svg#pin_xxs' }),
                            ]);
                        });
                    },
                    7288: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play', xlinkHref: '/icons/sprite.svg#play' }),
                            ]);
                        });
                    },
                    85: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playLast_xxs', xlinkHref: '/icons/sprite.svg#playLast_xxs' }),
                            ]);
                        });
                    },
                    3686: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playNext_xxs', xlinkHref: '/icons/sprite.svg#playNext_xxs' }),
                            ]);
                        });
                    },
                    7833: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playQueue_m', xlinkHref: '/icons/sprite.svg#playQueue_m' }),
                            ]);
                        });
                    },
                    2023: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playQueue_xs', xlinkHref: '/icons/sprite.svg#playQueue_xs' }),
                            ]);
                        });
                    },
                    6758: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playQueue_xxs', xlinkHref: '/icons/sprite.svg#playQueue_xxs' }),
                            ]);
                        });
                    },
                    7863: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playVibe_s', xlinkHref: '/icons/sprite.svg#playVibe_s' }),
                            ]);
                        });
                    },
                    759: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_l', xlinkHref: '/icons/sprite.svg#play_filled_l' }),
                            ]);
                        });
                    },
                    5310: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_m', xlinkHref: '/icons/sprite.svg#play_filled_m' }),
                            ]);
                        });
                    },
                    221: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_xl', xlinkHref: '/icons/sprite.svg#play_filled_xl' }),
                            ]);
                        });
                    },
                    2855: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_xs', xlinkHref: '/icons/sprite.svg#play_filled_xs' }),
                            ]);
                        });
                    },
                    2551: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_filled_xxl', xlinkHref: '/icons/sprite.svg#play_filled_xxl' }),
                            ]);
                        });
                    },
                    727: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_m', xlinkHref: '/icons/sprite.svg#play_m' }),
                            ]);
                        });
                    },
                    1516: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_xs', xlinkHref: '/icons/sprite.svg#play_xs' }),
                            ]);
                        });
                    },
                    9095: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_xxs', xlinkHref: '/icons/sprite.svg#play_xxs' }),
                            ]);
                        });
                    },
                    9556: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'play_xxxs', xlinkHref: '/icons/sprite.svg#play_xxxs' }),
                            ]);
                        });
                    },
                    206: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playlist_s', xlinkHref: '/icons/sprite.svg#playlist_s' }),
                            ]);
                        });
                    },
                    9139: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playlist_xl', xlinkHref: '/icons/sprite.svg#playlist_xl' }),
                            ]);
                        });
                    },
                    8642: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'playlist_xs', xlinkHref: '/icons/sprite.svg#playlist_xs' }),
                            ]);
                        });
                    },
                    6623: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'plus', xlinkHref: '/icons/sprite.svg#plus' }),
                            ]);
                        });
                    },
                    839: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'plusOutlined', xlinkHref: '/icons/sprite.svg#plusOutlined' }),
                            ]);
                        });
                    },
                    3739: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'plusOutlined_m', xlinkHref: '/icons/sprite.svg#plusOutlined_m' }),
                            ]);
                        });
                    },
                    4544: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'podcasts_xxs', xlinkHref: '/icons/sprite.svg#podcasts_xxs' }),
                            ]);
                        });
                    },
                    5079: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'previous_xs', xlinkHref: '/icons/sprite.svg#previous_xs' }),
                            ]);
                        });
                    },
                    2913: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'previous_xxl', xlinkHref: '/icons/sprite.svg#previous_xxl' }),
                            ]);
                        });
                    },
                    8454: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'previous_xxs', xlinkHref: '/icons/sprite.svg#previous_xxs' }),
                            ]);
                        });
                    },
                    139: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'repeat_one_xs', xlinkHref: '/icons/sprite.svg#repeat_one_xs' }),
                            ]);
                        });
                    },
                    2744: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'repeat_one_xxs', xlinkHref: '/icons/sprite.svg#repeat_one_xxs' }),
                            ]);
                        });
                    },
                    7719: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'repeat_xs', xlinkHref: '/icons/sprite.svg#repeat_xs' }),
                            ]);
                        });
                    },
                    9498: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'repeat_xxs', xlinkHref: '/icons/sprite.svg#repeat_xxs' }),
                            ]);
                        });
                    },
                    825: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'reset_xxs', xlinkHref: '/icons/sprite.svg#reset_xxs' }),
                            ]);
                        });
                    },
                    3893: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'reset_xxxs', xlinkHref: '/icons/sprite.svg#reset_xxxs' }),
                            ]);
                        });
                    },
                    8959: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'rewindBackwards_xs', xlinkHref: '/icons/sprite.svg#rewindBackwards_xs' }),
                            ]);
                        });
                    },
                    1686: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'rewindBackwards_xxs', xlinkHref: '/icons/sprite.svg#rewindBackwards_xxs' }),
                            ]);
                        });
                    },
                    852: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'rewindForward_xs', xlinkHref: '/icons/sprite.svg#rewindForward_xs' }),
                            ]);
                        });
                    },
                    9322: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'rewindForward_xxs', xlinkHref: '/icons/sprite.svg#rewindForward_xxs' }),
                            ]);
                        });
                    },
                    1798: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ruble_m', xlinkHref: '/icons/sprite.svg#ruble_m' }),
                            ]);
                        });
                    },
                    2187: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ruble_xxs', xlinkHref: '/icons/sprite.svg#ruble_xxs' }),
                            ]);
                        });
                    },
                    1764: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ruble_xxxs', xlinkHref: '/icons/sprite.svg#ruble_xxxs' }),
                            ]);
                        });
                    },
                    3753: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_l', xlinkHref: '/icons/sprite.svg#search_l' }),
                            ]);
                        });
                    },
                    3222: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_m', xlinkHref: '/icons/sprite.svg#search_m' }),
                            ]);
                        });
                    },
                    6230: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_selected_m', xlinkHref: '/icons/sprite.svg#search_selected_m' }),
                            ]);
                        });
                    },
                    4380: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_xs', xlinkHref: '/icons/sprite.svg#search_xs' }),
                            ]);
                        });
                    },
                    8002: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'search_xxl', xlinkHref: '/icons/sprite.svg#search_xxl' }),
                            ]);
                        });
                    },
                    4553: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'settings_xs', xlinkHref: '/icons/sprite.svg#settings_xs' }),
                            ]);
                        });
                    },
                    // for PulseSync: BEGIN settings gear SVG component
                    9901: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'settingsGear_xs', xlinkHref: '/icons/sprite.svg#settingsGear_xs' }),
                            ]);
                        });
                    },
                    // for PulseSync: END settings gear SVG component
                    7241: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'settings_xxs', xlinkHref: '/icons/sprite.svg#settings_xxs' }),
                            ]);
                        });
                    },
                    9620: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'share_m', xlinkHref: '/icons/sprite.svg#share_m' }),
                            ]);
                        });
                    },
                    1655: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'share_xxs', xlinkHref: '/icons/sprite.svg#share_xxs' }),
                            ]);
                        });
                    },
                    7873: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'shuffle_xs', xlinkHref: '/icons/sprite.svg#shuffle_xs' }),
                            ]);
                        });
                    },
                    1506: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'shuffle_xxs', xlinkHref: '/icons/sprite.svg#shuffle_xxs' }),
                            ]);
                        });
                    },
                    6898: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'site_xs', xlinkHref: '/icons/sprite.svg#site_xs' }),
                            ]);
                        });
                    },
                    9879: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_25x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_25x_centered_m' }),
                            ]);
                        });
                    },
                    3278: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_25x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_25x_centered_xs' }),
                            ]);
                        });
                    },
                    2705: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_25x_l', xlinkHref: '/icons/sprite.svg#speed_1_25x_l' }),
                            ]);
                        });
                    },
                    4484: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_5x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_5x_centered_m' }),
                            ]);
                        });
                    },
                    1468: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_5x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_5x_centered_xs' }),
                            ]);
                        });
                    },
                    8671: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_5x_l', xlinkHref: '/icons/sprite.svg#speed_1_5x_l' }),
                            ]);
                        });
                    },
                    2922: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_75x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1_75x_centered_m' }),
                            ]);
                        });
                    },
                    8279: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_75x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1_75x_centered_xs' }),
                            ]);
                        });
                    },
                    6413: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1_75x_l', xlinkHref: '/icons/sprite.svg#speed_1_75x_l' }),
                            ]);
                        });
                    },
                    2434: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1x_centered_m', xlinkHref: '/icons/sprite.svg#speed_1x_centered_m' }),
                            ]);
                        });
                    },
                    9074: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_1x_centered_xs' }),
                            ]);
                        });
                    },
                    8254: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_1x_l', xlinkHref: '/icons/sprite.svg#speed_1x_l' }),
                            ]);
                        });
                    },
                    9173: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_2x_centered_m', xlinkHref: '/icons/sprite.svg#speed_2x_centered_m' }),
                            ]);
                        });
                    },
                    182: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_2x_centered_xs', xlinkHref: '/icons/sprite.svg#speed_2x_centered_xs' }),
                            ]);
                        });
                    },
                    8297: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'speed_2x_l', xlinkHref: '/icons/sprite.svg#speed_2x_l' }),
                            ]);
                        });
                    },
                    9711: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'syncLyrics_m', xlinkHref: '/icons/sprite.svg#syncLyrics_m' }),
                            ]);
                        });
                    },
                    8056: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'syncLyrics_xs', xlinkHref: '/icons/sprite.svg#syncLyrics_xs' }),
                            ]);
                        });
                    },
                    2764: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'syncLyrics_xxs', xlinkHref: '/icons/sprite.svg#syncLyrics_xxs' }),
                            ]);
                        });
                    },
                    8353: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'thumbDown_xs', xlinkHref: '/icons/sprite.svg#thumbDown_xs' }),
                            ]);
                        });
                    },
                    7193: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'thumbDown_xxs', xlinkHref: '/icons/sprite.svg#thumbDown_xxs' }),
                            ]);
                        });
                    },
                    3293: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'thumbUp_xs', xlinkHref: '/icons/sprite.svg#thumbUp_xs' }),
                            ]);
                        });
                    },
                    9748: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'thumbUp_xxs', xlinkHref: '/icons/sprite.svg#thumbUp_xxs' }),
                            ]);
                        });
                    },
                    6374: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ticket_m', xlinkHref: '/icons/sprite.svg#ticket_m' }),
                            ]);
                        });
                    },
                    1116: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'ticket_selected_m', xlinkHref: '/icons/sprite.svg#ticket_selected_m' }),
                            ]);
                        });
                    },
                    2378: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'trailer_xs', xlinkHref: '/icons/sprite.svg#trailer_xs' }),
                            ]);
                        });
                    },
                    7377: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'trailer_xxs', xlinkHref: '/icons/sprite.svg#trailer_xxs' }),
                            ]);
                        });
                    },
                    7960: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'twoUsers_xxs', xlinkHref: '/icons/sprite.svg#twoUsers_xxs' }),
                            ]);
                        });
                    },
                    9938: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'unavailable_xl', xlinkHref: '/icons/sprite.svg#unavailable_xl' }),
                            ]);
                        });
                    },
                    9261: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'unavailable_xs', xlinkHref: '/icons/sprite.svg#unavailable_xs' }),
                            ]);
                        });
                    },
                    701: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'unpin_xxs', xlinkHref: '/icons/sprite.svg#unpin_xxs' }),
                            ]);
                        });
                    },
                    1484: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'upload_xxs', xlinkHref: '/icons/sprite.svg#upload_xxs' }),
                            ]);
                        });
                    },
                    8382: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'users_xxxs', xlinkHref: '/icons/sprite.svg#users_xxxs' }),
                            ]);
                        });
                    },
                    582: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'vibe_xxs', xlinkHref: '/icons/sprite.svg#vibe_xxs' }),
                            ]);
                        });
                    },
                    1786: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'volumeOff_xs', xlinkHref: '/icons/sprite.svg#volumeOff_xs' }),
                            ]);
                        });
                    },
                    4527: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'volume_xs', xlinkHref: '/icons/sprite.svg#volume_xs' }),
                            ]);
                        });
                    },
                    4298: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'windows', xlinkHref: '/icons/sprite.svg#windows' }),
                            ]);
                        });
                    },
                    4419: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'windows_xs', xlinkHref: '/icons/sprite.svg#windows_xs' }),
                            ]);
                        });
                    },
                    790: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexBooksEn', xlinkHref: '/icons/sprite.svg#yandexBooksEn' }),
                            ]);
                        });
                    },
                    9342: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexBooksRu', xlinkHref: '/icons/sprite.svg#yandexBooksRu' }),
                            ]);
                        });
                    },
                    4403: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexPayEn', xlinkHref: '/icons/sprite.svg#yandexPayEn' }),
                            ]);
                        });
                    },
                    4960: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexPayRu', xlinkHref: '/icons/sprite.svg#yandexPayRu' }),
                            ]);
                        });
                    },
                    1601: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexPlusEn', xlinkHref: '/icons/sprite.svg#yandexPlusEn' }),
                            ]);
                        });
                    },
                    8163: (e, t, r) => {
                        var s = r(810);
                        e.exports = s.forwardRef(function (e, t) {
                            return s.createElement('svg', Object.assign({}, e, { ref: t }), [
                                s.createElement('use', { key: 'yandexPlusRu', xlinkHref: '/icons/sprite.svg#yandexPlusRu' }),
                            ]);
                        });
                    },
                    9580: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useLongPress =
                                t.useDynamicText =
                                t.usePopoverSwipeable =
                                t.useReturnValue =
                                t.useCallbackRef =
                                t.useDebouncedToggle =
                                t.useResize =
                                t.useIsomorphicEffect =
                                t.useForceUpdateRef =
                                t.useElementOffsetY =
                                t.getElementNameByDataAttribute =
                                t.createIntersectionObserver =
                                t.useIntersectionObserver =
                                t.useKeyboardNavigation =
                                t.useScroll =
                                t.useForwardRef =
                                    void 0));
                        var s = r(189);
                        Object.defineProperty(t, 'useForwardRef', {
                            enumerable: !0,
                            get: function () {
                                return s.useForwardRef;
                            },
                        });
                        var n = r(3830);
                        Object.defineProperty(t, 'useScroll', {
                            enumerable: !0,
                            get: function () {
                                return n.useScroll;
                            },
                        });
                        var i = r(3298);
                        Object.defineProperty(t, 'useKeyboardNavigation', {
                            enumerable: !0,
                            get: function () {
                                return i.useKeyboardNavigation;
                            },
                        });
                        var a = r(597);
                        (Object.defineProperty(t, 'useIntersectionObserver', {
                            enumerable: !0,
                            get: function () {
                                return a.useIntersectionObserver;
                            },
                        }),
                            Object.defineProperty(t, 'createIntersectionObserver', {
                                enumerable: !0,
                                get: function () {
                                    return a.createIntersectionObserver;
                                },
                            }),
                            Object.defineProperty(t, 'getElementNameByDataAttribute', {
                                enumerable: !0,
                                get: function () {
                                    return a.getElementNameByDataAttribute;
                                },
                            }));
                        var l = r(7293);
                        Object.defineProperty(t, 'useElementOffsetY', {
                            enumerable: !0,
                            get: function () {
                                return l.useElementOffsetY;
                            },
                        });
                        var o = r(3940);
                        Object.defineProperty(t, 'useForceUpdateRef', {
                            enumerable: !0,
                            get: function () {
                                return o.useForceUpdateRef;
                            },
                        });
                        var c = r(4482);
                        Object.defineProperty(t, 'useIsomorphicEffect', {
                            enumerable: !0,
                            get: function () {
                                return c.useIsomorphicEffect;
                            },
                        });
                        var u = r(588);
                        Object.defineProperty(t, 'useResize', {
                            enumerable: !0,
                            get: function () {
                                return u.useResize;
                            },
                        });
                        var d = r(8612);
                        Object.defineProperty(t, 'useDebouncedToggle', {
                            enumerable: !0,
                            get: function () {
                                return d.useDebouncedToggle;
                            },
                        });
                        var f = r(792);
                        Object.defineProperty(t, 'useCallbackRef', {
                            enumerable: !0,
                            get: function () {
                                return f.useCallbackRef;
                            },
                        });
                        var x = r(7497);
                        Object.defineProperty(t, 'useReturnValue', {
                            enumerable: !0,
                            get: function () {
                                return x.useReturnValue;
                            },
                        });
                        var _ = r(2380);
                        Object.defineProperty(t, 'usePopoverSwipeable', {
                            enumerable: !0,
                            get: function () {
                                return _.usePopoverSwipeable;
                            },
                        });
                        var p = r(6585);
                        Object.defineProperty(t, 'useDynamicText', {
                            enumerable: !0,
                            get: function () {
                                return p.useDynamicText;
                            },
                        });
                        var m = r(9966);
                        Object.defineProperty(t, 'useLongPress', {
                            enumerable: !0,
                            get: function () {
                                return m.useLongPress;
                            },
                        });
                    },
                    792: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let s = r(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, s.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, r = Array(e), s = 0; s < e; s++) r[s] = arguments[s];
                                    return t.current.callback(...r);
                                },
                                callback: e,
                            });
                            return (
                                (0, s.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    2458: (e, t, r) => {
                        var s;
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0));
                        let n = r(4490),
                            i = r(792);
                        !(function (e) {
                            ((e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left'));
                        })(s || (t.SwipeablePlacement = s = {}));
                        let a = (e) => {
                                let { ref: t, deltaY: r, deltaX: n, placement: i } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            i === s.TOP || i === s.BOTTOM ? 'translateY('.concat(r || 0, 'px)') : 'translateX('.concat(n || 0, 'px)')));
                                });
                            },
                            l = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: o, disableSwipe: c, placement: u, threshold: d } = e,
                                f = (0, i.useCallbackRef)(() => {
                                    o && (l(t), o());
                                }),
                                x = (0, i.useCallbackRef)((e) => {
                                    c ||
                                        ((e) => {
                                            let { ref: t, deltaY: r, deltaX: n, placement: i } = e;
                                            switch (i) {
                                                case s.TOP:
                                                    r <= 0 && a({ ref: t, deltaY: r, deltaX: n, placement: i });
                                                    break;
                                                case s.RIGHT:
                                                    n >= 0 && a({ ref: t, deltaY: r, deltaX: n, placement: i });
                                                    break;
                                                case s.LEFT:
                                                    n <= 0 && a({ ref: t, deltaY: r, deltaX: n, placement: i });
                                                    break;
                                                default:
                                                    r >= 0 && a({ ref: t, deltaY: r, deltaX: n, placement: i });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: u });
                                }),
                                _ = (0, i.useCallbackRef)((e) => {
                                    !c &&
                                        (((e) => {
                                            let { ref: t, deltaY: r, deltaX: n, placement: i, threshold: a = 25 } = e;
                                            if (!t.current) return !1;
                                            let l = (a / 100) * (i === s.TOP || i === s.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (i) {
                                                case s.TOP:
                                                    return r < 0 && Math.abs(r) >= l;
                                                case s.RIGHT:
                                                    return n > 0 && n >= l;
                                                case s.LEFT:
                                                    return n < 0 && Math.abs(n) >= l;
                                                default:
                                                    return r > 0 && r >= l;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: u, threshold: d })
                                            ? o && (l(t), o())
                                            : l(t));
                                });
                            return { handlers: (0, n.useSwipeable)({ onSwiped: _, onSwiping: x, trackMouse: !0, trackTouch: !0, ...r }), onCloseCallback: f };
                        };
                    },
                    8612: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let s = r(352),
                            n = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: i } = e,
                                a = (0, n.useRef)(null),
                                [l, o] = (0, n.useState)(!!r),
                                c = (0, n.useMemo)(
                                    () =>
                                        (0, s.throttle)(() => {
                                            (o(!r),
                                                a.current && window.clearTimeout(a.current),
                                                (a.current = window.setTimeout(() => {
                                                    o(!!r);
                                                }, t)));
                                        }, i),
                                    [t, r, i],
                                ),
                                u = (0, n.useCallback)(() => {
                                    (o(!!r), a.current && window.clearTimeout(a.current));
                                }, [r]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        a.current && window.clearTimeout(a.current);
                                    },
                                    [],
                                ),
                                { state: l, handleDebouncedToggle: c, reset: u }
                            );
                        };
                    },
                    6585: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDynamicText = t.findOptimalFontSize = void 0));
                        let s = r(810),
                            n = (e) => {
                                ((e.style.wordBreak = 'keep-all'),
                                    (e.style.overflowWrap = 'normal'),
                                    (e.style.maxHeight = 'none'),
                                    (e.style.height = 'auto'),
                                    (e.style.overflow = 'visible'),
                                    Array.from(e.children).forEach((e) => {
                                        e instanceof HTMLElement && n(e);
                                    }));
                            },
                            i = (e, t, r, s, n, i) => {
                                (e.style.setProperty('--dynamic-font-size', ''.concat(s, 'px')), e.style.setProperty('--dynamic-line-height', String(n)));
                                let a = 'number' == typeof i ? e.scrollHeight <= Math.min(i * s * n, r) + 1 : e.scrollHeight <= r + 1,
                                    l = e.scrollWidth <= t + 1;
                                return a && l;
                            },
                            a = (e) => {
                                let {
                                        container: t,
                                        containerWidth: r,
                                        containerHeight: s,
                                        minFontSize: a,
                                        maxFontSize: l,
                                        lineHeight: o,
                                        maxLines: c,
                                        styleVariants: u,
                                    } = e,
                                    d = ((e, t, r) => {
                                        let s = e.cloneNode(!0);
                                        return (
                                            (s.style.cssText =
                                                '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                                    t,
                                                    'px !important;\n    ',
                                                )),
                                            n(s),
                                            s.style.setProperty('--dynamic-line-height', String(r)),
                                            document.body.appendChild(s),
                                            s
                                        );
                                    })(t, r, o);
                                try {
                                    if (null == u ? void 0 : u.length) {
                                        var f;
                                        let e = [...u].sort((e, t) => t.fontSize - e.fontSize),
                                            t = null != (f = e[e.length - 1]) ? f : { fontSize: a, lineHeight: o };
                                        for (let t of e) if (i(d, r, s, t.fontSize, t.lineHeight, c)) return { ...t, fits: !0 };
                                        return { ...t, fits: !1 };
                                    }
                                    let e = a,
                                        t = l,
                                        n = null;
                                    for (; e <= t;) {
                                        let a = Math.floor((e + t) / 2);
                                        i(d, r, s, a, o, c) ? ((n = a), (e = a + 1)) : (t = a - 1);
                                    }
                                    if (null === n) return { fontSize: a, lineHeight: o, fits: !1 };
                                    return { fontSize: Math.max(a, n - 1), lineHeight: o, fits: !0 };
                                } finally {
                                    d.remove();
                                }
                            };
                        ((t.findOptimalFontSize = (e) => a(e).fontSize),
                            (t.useDynamicText = (e, t, r) => {
                                let { minFontSize: n, maxFontSize: i, lineHeight: l, maxLines: o, fallbackMaxLines: c, styleVariants: u } = t;
                                (0, s.useLayoutEffect)(() => {
                                    if (null === e) return;
                                    e.style.setProperty('--dynamic-line-height', String(l));
                                    let t = () => {
                                            let t = e.clientWidth,
                                                s = e.clientHeight,
                                                d = e.childNodes.length > 0;
                                            if (0 === t || 0 === s || !d) return;
                                            let {
                                                maxLines: f,
                                                fontSize: x,
                                                lineHeight: _,
                                            } = ((e) => {
                                                let { fallbackMaxLines: t, maxLines: r } = e,
                                                    s = a({ ...e, maxLines: r });
                                                if (void 0 === t || s.fits) return { maxLines: r, fontSize: s.fontSize, lineHeight: s.lineHeight };
                                                let n = a({ ...e, maxLines: t });
                                                return { maxLines: t, fontSize: n.fontSize, lineHeight: n.lineHeight };
                                            })({
                                                container: e,
                                                containerWidth: t,
                                                containerHeight: s,
                                                minFontSize: n,
                                                maxFontSize: i,
                                                lineHeight: l,
                                                maxLines: o,
                                                fallbackMaxLines: c,
                                                styleVariants: u,
                                            });
                                            (null == r || r(f),
                                                e.style.setProperty('--dynamic-font-size', ''.concat(x, 'px')),
                                                e.style.setProperty('--dynamic-line-height', String(_)));
                                        },
                                        s = new ResizeObserver(t),
                                        d = new MutationObserver(t);
                                    return (
                                        s.observe(e),
                                        d.observe(e, { childList: !0, characterData: !0, subtree: !0 }),
                                        document.fonts.ready.then(t),
                                        t(),
                                        () => {
                                            (s.disconnect(), d.disconnect());
                                        }
                                    );
                                }, [e, r, c, l, i, o, n, u]);
                            }));
                    },
                    7293: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useElementOffsetY = void 0));
                        let s = r(810),
                            n = r(3830),
                            i = r(3940);
                        t.useElementOffsetY = (e) => {
                            let [t, r] = (0, i.useForceUpdateRef)(),
                                [a, l] = (0, s.useState)(),
                                o = (0, s.useCallback)(() => {
                                    let e = null == t ? void 0 : t.getBoundingClientRect();
                                    e && l(e.y);
                                }, [t]);
                            return ((0, s.useLayoutEffect)(o), (0, n.useScroll)({ onScroll: o, elementRef: e }), { forceUpdateRefCallback: r, offsetY: a });
                        };
                    },
                    3940: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let s = r(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, s.useState)(null);
                            return [
                                e,
                                (0, s.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    189: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForwardRef = void 0));
                        let s = r(810);
                        t.useForwardRef = function (e, t) {
                            let r = (0, s.useRef)(t);
                            return (
                                (0, s.useEffect)(() => {
                                    e && ('function' == typeof e ? e(r.current) : (e.current = r.current));
                                }, [e]),
                                r
                            );
                        };
                    },
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let s = r(810),
                            { innerWidth: n = 0, innerHeight: i = 0 } = window;
                        function a(e) {
                            let { top: t, right: r, bottom: s, left: a } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= i) || (s >= 0 && s <= i)) && ((a >= 0 && a <= n) || (r >= 0 && r <= n));
                        }
                        function l(e) {
                            var t, r;
                            let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, s)) ? r : e.attributes[0];
                        }
                        function o(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = a),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, r, n) {
                                let [{ freezeOnceVisible: i, preflightCheck: c, ...u }, d = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, n],
                                    [f, x] = (0, s.useState)({}),
                                    _ = (0, s.useRef)(new Set()),
                                    p = (0, s.useMemo)(
                                        () =>
                                            d
                                                ? null
                                                : o((e) => {
                                                      let t = l(e.target);
                                                      if (t && p) {
                                                          if (_.current.has(t)) return;
                                                          (x((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              i && e.isIntersecting && (_.current.add(t), p.unobserve(e.target)));
                                                      }
                                                  }, u),
                                        [d],
                                    );
                                return (
                                    (0, s.useLayoutEffect)(
                                        () => (
                                            p &&
                                                !d &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = a(e.current))) {
                                                            let t = l(e.current);
                                                            x((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || p.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                p && p.disconnect();
                                            }
                                        ),
                                        [d, p, e.length],
                                    ),
                                    f
                                );
                            }));
                    },
                    4482: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useIsomorphicEffect = void 0));
                        let s = r(810);
                        t.useIsomorphicEffect = 'undefined' != typeof document ? s.useLayoutEffect : s.useEffect;
                    },
                    3298: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useKeyboardNavigation = void 0));
                        let s = r(810);
                        function n(e, t) {
                            return e.current ? Array.from(t ? e.current.querySelectorAll(t) : e.current.children) : [];
                        }
                        t.useKeyboardNavigation = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                { navigationItemsSelector: r, activeAttributeName: i = 'aria-selected' } = t,
                                a = (0, s.useCallback)(
                                    (t) => {
                                        let s = n(e, r);
                                        if (!s.length) return;
                                        let i = t.target,
                                            a = s.indexOf(i);
                                        if (-1 === a) return;
                                        let [l] = s,
                                            o = s.at(-1),
                                            c = null;
                                        switch (t.key) {
                                            case 'ArrowLeft':
                                            case 'ArrowUp':
                                                c = s[a - 1] || o;
                                                break;
                                            case 'ArrowRight':
                                            case 'ArrowDown':
                                                c = s[a + 1] || l;
                                                break;
                                            case 'Home':
                                                c = l;
                                                break;
                                            case 'End':
                                                c = o;
                                        }
                                        null !== c && (c.focus(), t.preventDefault());
                                    },
                                    [r, e],
                                );
                            ((0, s.useEffect)(() => {
                                let t = e.current;
                                return (null == t || t.addEventListener('keydown', a), () => (null == t ? void 0 : t.removeEventListener('keydown', a)));
                            }, [e, a]),
                                (0, s.useEffect)(() => {
                                    n(e, r).forEach((e) => {
                                        e.hasAttribute(i) && ('true' === e.getAttribute(i) ? (e.tabIndex = 0) : (e.tabIndex = -1));
                                    });
                                }));
                        };
                    },
                    9966: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useLongPress = void 0));
                        let s = r(810),
                            n = r(792),
                            i = r(3940),
                            a = r(4012);
                        t.useLongPress = function () {
                            let {
                                    ref: e,
                                    onLongPress: t,
                                    delay: r = 500,
                                    movementThreshold: l = 10,
                                    disabled: o = !1,
                                    allowMouse: c = !1,
                                    scale: u,
                                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                [d, f] = (0, i.useForceUpdateRef)(),
                                x = (0, a.useMergeRefs)([f, e]),
                                [_, p] = (0, s.useState)(!1),
                                [m, v] = (0, s.useState)(!1),
                                g = (0, s.useRef)(void 0),
                                y = (0, n.useCallbackRef)((e, r) => (null == t ? void 0 : t(e, r))),
                                E = (0, n.useCallbackRef)(() => {
                                    var e;
                                    (null == (e = g.current) || e.call(g), v(!1));
                                });
                            return (
                                (0, s.useEffect)(() => {
                                    let e, t, s, n;
                                    if (!d || o) return;
                                    let i = d.ownerDocument,
                                        a = i.defaultView;
                                    if (!a) return;
                                    let f = new AbortController();
                                    function x() {
                                        (a.clearTimeout(s),
                                            (s = void 0),
                                            null == n || n.cancel(),
                                            (n = void 0),
                                            (e = void 0),
                                            p(!1),
                                            null == t || t.abort(),
                                            (t = void 0));
                                    }
                                    function _(t) {
                                        e && t.pointerId === e.pointerId && Math.hypot(t.clientX - e.clientX, t.clientY - e.clientY) > l && x();
                                    }
                                    function m(t) {
                                        t.pointerId === (null == e ? void 0 : e.pointerId) && x();
                                    }
                                    function E(t) {
                                        t.pointerId !== (null == e ? void 0 : e.pointerId) && x();
                                    }
                                    function k() {
                                        'hidden' === i.visibilityState && x();
                                    }
                                    return (
                                        (g.current = x),
                                        d.addEventListener(
                                            'pointerdown',
                                            (l) => {
                                                var o;
                                                let f = 'touch' === l.pointerType || 'pen' === l.pointerType || (c && 'mouse' === l.pointerType);
                                                if (e || !l.isPrimary || 0 !== l.button || !f) return;
                                                ((e = l),
                                                    (t = new AbortController()),
                                                    p(!0),
                                                    v(!1),
                                                    void 0 !== u &&
                                                        u > 0 &&
                                                        Number.isFinite(u) &&
                                                        !(null == (o = a.matchMedia) ? void 0 : o.call(a, '(prefers-reduced-motion: reduce)').matches) &&
                                                        d.animate &&
                                                        (n = d.animate([{ transform: 'scale(1)' }, { transform: 'scale('.concat(u, ')') }], {
                                                            duration: 150,
                                                            easing: 'ease-out',
                                                            fill: 'forwards',
                                                            composite: 'add',
                                                        })));
                                                let g = t.signal;
                                                (i.addEventListener('pointermove', _, { capture: !0, passive: !0, signal: g }),
                                                    i.addEventListener('pointerup', m, { capture: !0, signal: g }),
                                                    i.addEventListener('pointercancel', m, { capture: !0, signal: g }),
                                                    i.addEventListener('lostpointercapture', m, { capture: !0, signal: g }),
                                                    i.addEventListener('pointerdown', E, { capture: !0, signal: g }),
                                                    i.addEventListener('scroll', x, { capture: !0, passive: !0, signal: g }),
                                                    i.addEventListener('visibilitychange', k, { signal: g }),
                                                    a.addEventListener('scroll', x, { passive: !0, signal: g }),
                                                    a.addEventListener('blur', x, { signal: g }),
                                                    (s = a.setTimeout(() => {
                                                        if (((s = void 0), !d.isConnected)) return void x();
                                                        (((e, t) => {
                                                            let r,
                                                                s = e.ownerDocument,
                                                                n = s.defaultView;
                                                            if (!n) return;
                                                            let i = new AbortController(),
                                                                a = !1;
                                                            function l() {
                                                                (n.clearTimeout(r), i.abort());
                                                            }
                                                            function o(e) {
                                                                e.pointerId === t.pointerId && ((a = !0), n.clearTimeout(r), (r = n.setTimeout(l, 750)));
                                                            }
                                                            r = n.setTimeout(l, 6e4);
                                                            let c = i.signal;
                                                            (s.addEventListener(
                                                                'click',
                                                                function (r) {
                                                                    let s = 'pointerId' in r ? r.pointerId === t.pointerId : r.composedPath().includes(e);
                                                                    0 !== r.detail && s && (r.preventDefault(), r.stopPropagation(), l());
                                                                },
                                                                { capture: !0, signal: c },
                                                            ),
                                                                s.addEventListener(
                                                                    'pointerdown',
                                                                    function () {
                                                                        a && l();
                                                                    },
                                                                    { capture: !0, signal: c },
                                                                ),
                                                                s.addEventListener(
                                                                    'contextmenu',
                                                                    function (r) {
                                                                        'mouse' !== t.pointerType && r.composedPath().includes(e) && r.preventDefault();
                                                                    },
                                                                    { capture: !0, signal: c },
                                                                ),
                                                                s.addEventListener('pointerup', o, { capture: !0, signal: c }),
                                                                s.addEventListener('pointercancel', o, { capture: !0, signal: c }),
                                                                n.addEventListener('blur', l, { signal: c }));
                                                        })(d, l),
                                                            v(!0),
                                                            y(l, d));
                                                    }, r)));
                                            },
                                            { passive: !0, signal: f.signal },
                                        ),
                                        d.addEventListener(
                                            'contextmenu',
                                            (t) => {
                                                e && 'mouse' !== e.pointerType && t.preventDefault();
                                            },
                                            { signal: f.signal },
                                        ),
                                        () => {
                                            (x(), (g.current = void 0), f.abort());
                                        }
                                    );
                                }, [d, o, r, l, c, u, y]),
                                { ref: x, isPressing: _, isLongPressed: m, reset: E }
                            );
                        };
                    },
                    4012: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useMergeRefs = void 0));
                        var s = r(1964);
                        Object.defineProperty(t, 'useMergeRefs', {
                            enumerable: !0,
                            get: function () {
                                return s.useMergeRefs;
                            },
                        });
                    },
                    2380: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.usePopoverSwipeable = void 0));
                        let s = r(810),
                            n = r(2458);
                        t.usePopoverSwipeable = (e) => {
                            let { ref: t, swipeableProps: r = {}, onClose: i, disableSwipe: a, placement: l, threshold: o } = e,
                                c = (0, s.useMemo)(() => {
                                    switch (l) {
                                        case 'top':
                                        case 'top-end':
                                        case 'top-start':
                                            return n.SwipeablePlacement.TOP;
                                        case 'right':
                                        case 'right-end':
                                        case 'right-start':
                                            return n.SwipeablePlacement.RIGHT;
                                        case 'left':
                                        case 'left-end':
                                        case 'left-start':
                                            return n.SwipeablePlacement.LEFT;
                                        default:
                                            return n.SwipeablePlacement.BOTTOM;
                                    }
                                }, [l]);
                            return (0, n.useComponentSwipeable)({ ref: t, swipeableProps: r, onClose: i, disableSwipe: a, placement: c, threshold: o });
                        };
                    },
                    588: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0));
                        let s = r(810),
                            n = r(1848);
                        t.useResize = (e, t) => {
                            (0, s.useEffect)(() => {
                                let r = (0, n.getElementFromRefOrElement)(t);
                                if (null === r) return;
                                let s = null != r ? r : document.documentElement,
                                    i = new ResizeObserver(e);
                                return (i.observe(s), () => i.disconnect());
                            }, [t, e]);
                        };
                    },
                    7497: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e()));
                    },
                    3830: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let s = r(810),
                            n = r(1848),
                            i = r(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: r, elementRef: a } = e,
                                { state: l, handleDebouncedToggle: o } = (0, i.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                c = (0, s.useCallback)(() => {
                                    (r && o(), null == t || t());
                                }, [r, o, t]);
                            return (
                                (0, s.useEffect)(() => {
                                    let e = (0, n.getElementFromRefOrElement)(a);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', c, r), () => t.removeEventListener('scroll', c, r));
                                }, [a, c]),
                                l
                            );
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
                                let r = t.LIGHTNESS_COLOR_BUCKETS.find((r, s) =>
                                    ((e, r, s) => (s === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? r >= e.start && r <= e.end : r >= e.start && r < e.end))(r, e, s),
                                );
                                return (0, t.findColorBucketByName)(null == r ? void 0 : r.name);
                            }));
                    },
                    2633: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, r) {
                                let s = null != r ? r : e.currentTarget,
                                    n = document.createElement('span'),
                                    i = Math.max(s.clientWidth, s.clientHeight),
                                    a = i / 2,
                                    l = s.getBoundingClientRect(),
                                    o = 0 === e.clientX ? Math.round(l.width / 2) : e.clientX - l.left,
                                    c = 0 === e.clientY ? Math.round(l.height / 2) : e.clientY - l.top;
                                ((n.style.width = ''.concat(i, 'px')),
                                    (n.style.height = ''.concat(i, 'px')),
                                    (n.style.left = 0 === e.clientX ? '0px' : ''.concat(o - a, 'px')),
                                    (n.style.top = ''.concat(c - a, 'px')),
                                    n.classList.add(t));
                                let u = s.getElementsByClassName(t)[0];
                                (u && u.remove(), s.insertBefore(n, s.firstChild));
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
                    1888: (e, t, r) => {
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
                        let s = r(2660),
                            n = r(6384);
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
                        let i = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let r = (0, n.findColorBucketByName)(e);
                            return r ? i(r) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, s.hexToHsl)(e),
                                    r = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === r ? (0, n.findColorBucketByHue)(t.h) : (0, n.findColorBucketByLightness)(t.l), hsl: t, mode: r };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: r } = (0, t.getVibeColorBucketSelection)(e);
                                return r ? i(r) : t.FALLBACK_PALETTE;
                            }));
                    },
                    6882: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0));
                        var s = r(2633);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return s.createRipple;
                            },
                        });
                        var n = r(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return n.getElementFromRefOrElement;
                            },
                        });
                        var i = r(1888);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return i.getVibePaletteColors;
                            },
                        });
                    },
                    7291: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        let n = r(4377),
                            i = r(810),
                            a = r(5881),
                            l = r(6882),
                            o = s(r(2850)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: r,
                                        iconPosition: s = 'left',
                                        children: c,
                                        className: u,
                                        color: d = 'secondary',
                                        flexIcon: f,
                                        icon: x,
                                        spinner: _,
                                        role: p,
                                        onClick: m,
                                        radius: v = 'm',
                                        size: g,
                                        type: y = 'button',
                                        variant: E = 'default',
                                        withRipple: k = !0,
                                        withHover: b = !0,
                                        withBorder: O = !1,
                                        disabled: h,
                                        focusableWhenDisabled: w,
                                        'aria-disabled': R,
                                        iconClassName: A,
                                        contentContainerClassName: j,
                                        ...C
                                    } = e,
                                    T = (0, i.useId)(),
                                    D = !i.Children.toArray(c).filter(Boolean).length,
                                    S = 'left' === s,
                                    I = null,
                                    P = (0, i.isValidElement)(_);
                                if (x) {
                                    var L, H;
                                    I = (0, i.cloneElement)(x, {
                                        className: (0, a.clsx)(
                                            o.default.icon,
                                            {
                                                [o.default['icon_position_'.concat(s)]]: s && !D,
                                                [o.default.icon_withButtonSize]: !(null == (L = x.props) ? void 0 : L.size),
                                            },
                                            null == (H = x.props) ? void 0 : H.className,
                                            A,
                                        ),
                                        key: T,
                                    });
                                }
                                let N = (0, i.useMemo)(() => (P ? (0, n.jsx)('div', { className: o.default.spinnerContainer, children: _ }) : null), [P, _]),
                                    B = (0, i.useCallback)(
                                        (e) => {
                                            if (h) {
                                                (e.preventDefault(), e.stopPropagation());
                                                return;
                                            }
                                            P || (k && (0, l.createRipple)(e, o.default.ripple), null == m || m(e));
                                        },
                                        [h, P, m, k],
                                    );
                                return (0, n.jsx)('button', {
                                    ref: t,
                                    className: (0, a.clsx)(
                                        o.default.root,
                                        o.default['root_'.concat(d, '_').concat(E)],
                                        o.default['root_radius_'.concat(v)],
                                        o.default.root_size,
                                        {
                                            [o.default['root_'.concat(d, '_withHover_').concat(E)]]: b && !h && !P,
                                            [o.default['root_size_'.concat(g)]]: g,
                                            [o.default.root_withoutBorder]: !O,
                                            [o.default.root_withActiveSpinner]: P,
                                            [o.default.block]: r,
                                            [o.default.flexIcon]: f,
                                            [o.default.iconOnly]: D,
                                            [o.default.root_icon_left]: x && !D && S,
                                            [o.default.root_icon_right]: x && !D && !S,
                                        },
                                        u,
                                    ),
                                    type: y,
                                    role: p,
                                    onClick: B,
                                    ...C,
                                    disabled: h && !w,
                                    'aria-disabled': (h && w) || R,
                                    'data-disabled': h || void 0,
                                    'aria-live': P ? 'polite' : 'off',
                                    'aria-busy': P,
                                    children:
                                        x || P
                                            ? (0, n.jsxs)('span', {
                                                  className: (0, a.clsx)(o.default.contentContainer, { [o.default.contentContainer_block]: r }, j),
                                                  children: [x && S && I, !D && c, x && !S && I, N],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, i.forwardRef)((e, t) => (0, n.jsx)(c, { forwardRef: t, ...e }));
                    },
                    7493: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        var s = r(7291);
                        Object.defineProperty(t, 'Button', {
                            enumerable: !0,
                            get: function () {
                                return s.Button;
                            },
                        });
                    },
                    1064: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Icon = t.IconComponent = void 0));
                        let n = r(4377),
                            i = r(810),
                            a = r(5881),
                            l = r(7638),
                            o = s(r(4257));
                        ((t.IconComponent = (e) => {
                            let { 'aria-label': t, className: r, focusable: s = !1, variant: i, size: c, forwardRef: u, ...d } = e,
                                f = c ? ''.concat(i, '_').concat(c) : i,
                                x = l.iconsCollection[f];
                            return x
                                ? (0, n.jsx)(x, {
                                      className: (0, a.clsx)(o.default.root, r, o.default['root_size_'.concat(c)]),
                                      focusable: s,
                                      'aria-label': t,
                                      ...d,
                                      'aria-hidden': !t,
                                      ref: u,
                                  })
                                : null;
                        }),
                            (t.Icon = (0, i.forwardRef)((e, r) => (0, n.jsx)(t.IconComponent, { forwardRef: r, ...e }))));
                    },
                    7638: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.iconsCollection = t.iconsCollectionBySize = void 0));
                        let n = s(r(7177)),
                            i = s(r(8897)),
                            a = s(r(3691)),
                            l = s(r(2402)),
                            o = s(r(1557)),
                            c = s(r(9271)),
                            u = s(r(4941)),
                            d = s(r(20)),
                            f = s(r(8871)),
                            x = s(r(6639)),
                            _ = s(r(8426)),
                            p = s(r(6393)),
                            m = s(r(3581)),
                            v = s(r(9556)),
                            g = s(r(3893)),
                            y = s(r(1764)),
                            E = s(r(8382)),
                            k = s(r(3735)),
                            b = s(r(5282)),
                            O = s(r(4920)),
                            h = s(r(3512)),
                            w = s(r(205)),
                            R = s(r(9400)),
                            A = s(r(7423)),
                            j = s(r(249)),
                            C = s(r(7457)),
                            T = s(r(2540)),
                            D = s(r(5093)),
                            S = s(r(5791)),
                            I = s(r(1027)),
                            P = s(r(6276)),
                            L = s(r(154)),
                            H = s(r(2866)),
                            N = s(r(4777)),
                            B = s(r(2390)),
                            M = s(r(7067)),
                            F = s(r(3790)),
                            U = s(r(2901)),
                            K = s(r(6682)),
                            z = s(r(9299)),
                            Y = s(r(1126)),
                            V = s(r(5294)),
                            q = s(r(9551)),
                            W = s(r(1578)),
                            G = s(r(1654)),
                            X = s(r(7162)),
                            Q = s(r(9807)),
                            Z = s(r(9833)),
                            J = s(r(4959)),
                            $ = s(r(2086)),
                            ee = s(r(835)),
                            et = s(r(5035)),
                            er = s(r(7526)),
                            es = s(r(6036)),
                            en = s(r(9825)),
                            ei = s(r(9130)),
                            ea = s(r(2506)),
                            el = s(r(3708)),
                            eo = s(r(5200)),
                            ec = s(r(513)),
                            eu = s(r(6760)),
                            ed = s(r(4374)),
                            ef = s(r(8803)),
                            ex = s(r(9119)),
                            e_ = s(r(8406)),
                            ep = s(r(7525)),
                            em = s(r(6286)),
                            ev = s(r(9180)),
                            eg = s(r(9095)),
                            ey = s(r(85)),
                            eE = s(r(3686)),
                            ek = s(r(6758)),
                            eb = s(r(4544)),
                            eO = s(r(8454)),
                            eh = s(r(9498)),
                            ew = s(r(2744)),
                            eR = s(r(825)),
                            eA = s(r(1686)),
                            ej = s(r(9322)),
                            eC = s(r(2187)),
                            eT = s(r(7241)),
                            eD = s(r(1655)),
                            eS = s(r(1506)),
                            eI = s(r(2764)),
                            eP = s(r(7193)),
                            eL = s(r(9748)),
                            eH = s(r(7377)),
                            eN = s(r(7960)),
                            eB = s(r(701)),
                            eM = s(r(1484)),
                            eF = s(r(582)),
                            eU = s(r(4121)),
                            eK = s(r(4227)),
                            ez = s(r(7581)),
                            eY = s(r(8705)),
                            eV = s(r(5993)),
                            eq = s(r(3902)),
                            eW = s(r(9608)),
                            eG = s(r(6311)),
                            eX = s(r(6547)),
                            eQ = s(r(1595)),
                            eZ = s(r(4955)),
                            eJ = s(r(2528)),
                            e$ = s(r(8499)),
                            e0 = s(r(837)),
                            e1 = s(r(4623)),
                            e8 = s(r(2756)),
                            e2 = s(r(8473)),
                            e9 = s(r(7662)),
                            e5 = s(r(4933)),
                            e4 = s(r(2138)),
                            e3 = s(r(3791)),
                            e7 = s(r(9376)),
                            e6 = s(r(6465)),
                            te = s(r(3982)),
                            tt = s(r(3725)),
                            tr = s(r(7516)),
                            ts = s(r(2410)),
                            tn = s(r(1581)),
                            ti = s(r(3270)),
                            ta = s(r(473)),
                            tl = s(r(6586)),
                            to = s(r(553)),
                            tc = s(r(49)),
                            tu = s(r(9697)),
                            td = s(r(9954)),
                            tf = s(r(4085)),
                            tx = s(r(4281)),
                            t_ = s(r(1568)),
                            tp = s(r(2554)),
                            tm = s(r(5108)),
                            tv = s(r(3874)),
                            tg = s(r(8972)),
                            ty = s(r(4338)),
                            tE = s(r(6179)),
                            tk = s(r(3310)),
                            tb = s(r(1516)),
                            tO = s(r(2023)),
                            th = s(r(2855)),
                            tw = s(r(8642)),
                            tR = s(r(5079)),
                            tA = s(r(7719)),
                            tj = s(r(139)),
                            tC = s(r(8959)),
                            tT = s(r(852)),
                            tD = s(r(4380)),
                            tS = s(r(4553)),
                            tI = s(r(7873)),
                            tP = s(r(6898)),
                            tL = s(r(3278)),
                            tH = s(r(1468)),
                            tN = s(r(8279)),
                            tB = s(r(9074)),
                            tM = s(r(182)),
                            tF = s(r(8056)),
                            tU = s(r(8353)),
                            tK = s(r(3293)),
                            tz = s(r(2378)),
                            tY = s(r(9261)),
                            tV = s(r(4527)),
                            tq = s(r(1786)),
                            tW = s(r(4419)),
                            tG = s(r(6970)),
                            tX = s(r(7397)),
                            tQ = s(r(2364)),
                            tZ = s(r(8202)),
                            tJ = s(r(1552)),
                            t$ = s(r(6070)),
                            t0 = s(r(2098)),
                            t1 = s(r(6707)),
                            t8 = s(r(2020)),
                            t2 = s(r(5879)),
                            t9 = s(r(2629)),
                            t5 = s(r(7863)),
                            t4 = s(r(206)),
                            t3 = s(r(4717)),
                            t7 = s(r(5561)),
                            t6 = s(r(2777)),
                            re = s(r(3003)),
                            rt = s(r(4561)),
                            rr = s(r(4355)),
                            rs = s(r(9642)),
                            rn = s(r(2244)),
                            ri = s(r(2845)),
                            ra = s(r(9503)),
                            rl = s(r(7419)),
                            ro = s(r(2570)),
                            rc = s(r(7145)),
                            ru = s(r(2060)),
                            rd = s(r(5407)),
                            rf = s(r(6187)),
                            rx = s(r(8831)),
                            r_ = s(r(3728)),
                            rp = s(r(727)),
                            rm = s(r(7833)),
                            rv = s(r(5310)),
                            rg = s(r(3739)),
                            ry = s(r(1798)),
                            rE = s(r(3222)),
                            rk = s(r(6230)),
                            rb = s(r(9620)),
                            rO = s(r(9879)),
                            rh = s(r(4484)),
                            rw = s(r(2922)),
                            rR = s(r(2434)),
                            rA = s(r(9173)),
                            rj = s(r(9711)),
                            rC = s(r(6374)),
                            rT = s(r(1116)),
                            rD = s(r(6150)),
                            rS = s(r(3848)),
                            rI = s(r(7656)),
                            rP = s(r(1605)),
                            rL = s(r(1423)),
                            rH = s(r(4526)),
                            rN = s(r(3908)),
                            rB = s(r(759)),
                            rM = s(r(3753)),
                            rF = s(r(2705)),
                            rU = s(r(8671)),
                            rK = s(r(6413)),
                            rz = s(r(8254)),
                            rY = s(r(8297)),
                            rV = s(r(4348)),
                            rq = s(r(8836)),
                            rW = s(r(6823)),
                            rG = s(r(1235)),
                            rX = s(r(1540)),
                            rQ = s(r(7514)),
                            rZ = s(r(221)),
                            rJ = s(r(9139)),
                            r$ = s(r(9938)),
                            r0 = s(r(5543)),
                            r1 = s(r(272)),
                            r8 = s(r(5842)),
                            r2 = s(r(4400)),
                            r9 = s(r(9189)),
                            r5 = s(r(9051)),
                            r4 = s(r(2551)),
                            r3 = s(r(2913)),
                            r7 = s(r(8002)),
                            r6 = s(r(3057)),
                            se = s(r(4247)),
                            st = s(r(3715)),
                            sr = s(r(3286)),
                            ss = s(r(3331)),
                            sn = s(r(7722)),
                            si = s(r(362)),
                            sa = s(r(6407)),
                            sl = s(r(740)),
                            so = s(r(2747)),
                            sc = s(r(3590)),
                            su = s(r(5656)),
                            sd = s(r(9723)),
                            sf = s(r(7488)),
                            sx = s(r(7288)),
                            s_ = s(r(6623)),
                            sp = s(r(5728)),
                            sm = s(r(9877)),
                            sv = s(r(839)),
                            sg = s(r(4298)),
                            sy = s(r(790)),
                            sE = s(r(9342)),
                            sk = s(r(4403)),
                            sb = s(r(4960)),
                            sO = s(r(1601)),
                            sh = s(r(8163));
                        // for PulseSync: BEGIN import the settings gear SVG component
                        var tSettingsGear = s(r(9901));
                        // for PulseSync: END import the settings gear SVG component
                        ((t.iconsCollectionBySize = {
                            xxxs: [
                                'add',
                                'adult',
                                'arrowDown',
                                'arrowRight',
                                'check',
                                'close',
                                'complain',
                                'donation',
                                'exclamation',
                                'explicit',
                                'listen',
                                'moreOutlined',
                                'note',
                                'play',
                                'reset',
                                'ruble',
                                'users',
                            ],
                            xxs: [
                                'add',
                                'addToPlaylist',
                                'adult',
                                'album',
                                'arrowDown',
                                'arrowLeft',
                                'arrowRight',
                                'artist',
                                'bucket',
                                'chain',
                                'chartDown',
                                'chartNew',
                                'chartSame',
                                'chartUp',
                                'check',
                                'clip',
                                'close',
                                'code',
                                'complain',
                                'crown',
                                'dislike',
                                'disliked',
                                'download',
                                'downloaded',
                                'dragDots',
                                'edit',
                                'exclamation',
                                'explicit',
                                'eye_crossed',
                                'filter',
                                'gift',
                                'info',
                                'lightning',
                                'like',
                                'likeVariant',
                                'liked',
                                'likedVariant',
                                'link',
                                'link_rounded',
                                'lock',
                                'lyrics',
                                'macos',
                                'menuArrow',
                                'more',
                                'moreOutlined',
                                'next',
                                'note',
                                'pause',
                                'pencil',
                                'pin',
                                'pin_filled',
                                'play',
                                'playLast',
                                'playNext',
                                'playQueue',
                                'podcasts',
                                'previous',
                                'repeat',
                                'repeat_one',
                                'reset',
                                'rewindBackwards',
                                'rewindForward',
                                'ruble',
                                'settings',
                                'share',
                                'shuffle',
                                'syncLyrics',
                                'thumbDown',
                                'thumbUp',
                                'trailer',
                                'twoUsers',
                                'unpin',
                                'upload',
                                'vibe',
                            ],
                            xs: [
                                'adult',
                                'album',
                                'arrowDown',
                                'arrowLeft',
                                'arrowRight',
                                'cast',
                                'chain',
                                'check',
                                'close',
                                'close_filled',
                                'complain',
                                'dislike',
                                'disliked',
                                'exclamation',
                                'explicit',
                                'filter',
                                'fullscreen',
                                'infinity',
                                'like',
                                'liked',
                                'liteVersion',
                                'lock',
                                'more',
                                'navigationCollection',
                                'navigationCollection_selected',
                                'navigationConcerts',
                                'navigationConcerts_selected',
                                'navigationForYouAndTrends',
                                'navigationForYouAndTrends_selected',
                                'navigationKids',
                                'navigationKids_selected',
                                'navigationMuzmarket',
                                'navigationMyVibe',
                                'navigationMyVibeNDA',
                                'navigationNonMusic',
                                'navigationNonMusic_selected',
                                'navigationPlus',
                                'navigationSearch',
                                'next',
                                'note',
                                'pause',
                                'pause_filled',
                                'picture',
                                'pin',
                                'pin_filled',
                                'play',
                                'playQueue',
                                'play_filled',
                                'playlist',
                                'previous',
                                'repeat',
                                'repeat_one',
                                'rewindBackwards',
                                'rewindForward',
                                'search',
                                'settings',
                                // for PulseSync: BEGIN register the settings gear icon name
                                'settingsGear',
                                // for PulseSync: END register the settings gear icon name
                                'shuffle',
                                'site',
                                'speed_1_25x_centered',
                                'speed_1_5x_centered',
                                'speed_1_75x_centered',
                                'speed_1x_centered',
                                'speed_2x_centered',
                                'syncLyrics',
                                'thumbDown',
                                'thumbUp',
                                'trailer',
                                'unavailable',
                                'volume',
                                'volumeOff',
                                'windows',
                            ],
                            s: [
                                'adult',
                                'album',
                                'complain',
                                'dislike',
                                'disliked',
                                'exclamation',
                                'explicit',
                                'likedVariant',
                                'note',
                                'pauseVibe',
                                'picture',
                                'playVibe',
                                'playlist',
                            ],
                            m: [
                                'collections',
                                'collections_selected',
                                'complain',
                                'history',
                                'home',
                                'home_selected',
                                'kids',
                                'kids_selected',
                                'like',
                                'liked',
                                'lock',
                                'more',
                                'navigationMuzmarket',
                                'non_music',
                                'non_music_selected',
                                'note',
                                'pause',
                                'pause_filled',
                                'play',
                                'playQueue',
                                'play_filled',
                                'plusOutlined',
                                'ruble',
                                'search',
                                'search_selected',
                                'share',
                                'speed_1_25x_centered',
                                'speed_1_5x_centered',
                                'speed_1_75x_centered',
                                'speed_1x_centered',
                                'speed_2x_centered',
                                'syncLyrics',
                                'ticket',
                                'ticket_selected',
                            ],
                            l: [
                                'add',
                                'album',
                                'complain',
                                'download',
                                'like',
                                'note',
                                'pause_filled',
                                'play_filled',
                                'search',
                                'speed_1_25x',
                                'speed_1_5x',
                                'speed_1_75x',
                                'speed_1x',
                                'speed_2x',
                            ],
                            xl: ['album', 'clip', 'complain', 'note', 'pause_filled', 'picture', 'play_filled', 'playlist', 'unavailable'],
                            xxl: ['attention', 'check', 'complain', 'next', 'offline', 'pause_filled', 'play_filled', 'previous', 'search'],
                            xxxl: ['attention', 'complain'],
                            '': [
                                'bandlink',
                                'googlePlay',
                                'huaweiAppGallery',
                                'kinopoiskEn',
                                'kinopoiskRu',
                                'macos',
                                'musicLogo',
                                'musicLogoCenterEn',
                                'musicLogoCenterRu',
                                'musicLogoLeftEn',
                                'musicLogoLeftRu',
                                'pause',
                                'play',
                                'plus',
                                'plusBadge',
                                'plusColor',
                                'plusOutlined',
                                'windows',
                                'yandexBooksEn',
                                'yandexBooksRu',
                                'yandexPayEn',
                                'yandexPayRu',
                                'yandexPlusEn',
                                'yandexPlusRu',
                            ],
                        }),
                            (t.iconsCollection = {
                                add_xxxs: n.default,
                                adult_xxxs: i.default,
                                arrowDown_xxxs: a.default,
                                arrowRight_xxxs: l.default,
                                check_xxxs: o.default,
                                close_xxxs: c.default,
                                complain_xxxs: u.default,
                                donation_xxxs: d.default,
                                exclamation_xxxs: f.default,
                                explicit_xxxs: x.default,
                                listen_xxxs: _.default,
                                moreOutlined_xxxs: p.default,
                                note_xxxs: m.default,
                                play_xxxs: v.default,
                                reset_xxxs: g.default,
                                ruble_xxxs: y.default,
                                users_xxxs: E.default,
                                add_xxs: k.default,
                                addToPlaylist_xxs: b.default,
                                adult_xxs: O.default,
                                album_xxs: h.default,
                                arrowDown_xxs: w.default,
                                arrowLeft_xxs: R.default,
                                arrowRight_xxs: A.default,
                                artist_xxs: j.default,
                                bucket_xxs: C.default,
                                chain_xxs: T.default,
                                chartDown_xxs: D.default,
                                chartNew_xxs: S.default,
                                chartSame_xxs: I.default,
                                chartUp_xxs: P.default,
                                check_xxs: L.default,
                                clip_xxs: H.default,
                                close_xxs: N.default,
                                code_xxs: B.default,
                                complain_xxs: M.default,
                                crown_xxs: F.default,
                                dislike_xxs: U.default,
                                disliked_xxs: K.default,
                                download_xxs: z.default,
                                downloaded_xxs: Y.default,
                                dragDots_xxs: V.default,
                                edit_xxs: q.default,
                                exclamation_xxs: W.default,
                                explicit_xxs: G.default,
                                eye_crossed_xxs: X.default,
                                filter_xxs: Q.default,
                                gift_xxs: Z.default,
                                info_xxs: J.default,
                                lightning_xxs: $.default,
                                like_xxs: ee.default,
                                likeVariant_xxs: et.default,
                                liked_xxs: er.default,
                                likedVariant_xxs: es.default,
                                link_xxs: en.default,
                                link_rounded_xxs: ei.default,
                                lock_xxs: ea.default,
                                lyrics_xxs: el.default,
                                macos_xxs: eo.default,
                                menuArrow_xxs: ec.default,
                                more_xxs: eu.default,
                                moreOutlined_xxs: ed.default,
                                next_xxs: ef.default,
                                note_xxs: ex.default,
                                pause_xxs: e_.default,
                                pencil_xxs: ep.default,
                                pin_xxs: em.default,
                                pin_filled_xxs: ev.default,
                                play_xxs: eg.default,
                                playLast_xxs: ey.default,
                                playNext_xxs: eE.default,
                                playQueue_xxs: ek.default,
                                podcasts_xxs: eb.default,
                                previous_xxs: eO.default,
                                repeat_xxs: eh.default,
                                repeat_one_xxs: ew.default,
                                reset_xxs: eR.default,
                                rewindBackwards_xxs: eA.default,
                                rewindForward_xxs: ej.default,
                                ruble_xxs: eC.default,
                                settings_xxs: eT.default,
                                share_xxs: eD.default,
                                shuffle_xxs: eS.default,
                                syncLyrics_xxs: eI.default,
                                thumbDown_xxs: eP.default,
                                thumbUp_xxs: eL.default,
                                trailer_xxs: eH.default,
                                twoUsers_xxs: eN.default,
                                unpin_xxs: eB.default,
                                upload_xxs: eM.default,
                                vibe_xxs: eF.default,
                                adult_xs: eU.default,
                                album_xs: eK.default,
                                arrowDown_xs: ez.default,
                                arrowLeft_xs: eY.default,
                                arrowRight_xs: eV.default,
                                cast_xs: eq.default,
                                chain_xs: eW.default,
                                check_xs: eG.default,
                                close_xs: eX.default,
                                close_filled_xs: eQ.default,
                                complain_xs: eZ.default,
                                dislike_xs: eJ.default,
                                disliked_xs: e$.default,
                                exclamation_xs: e0.default,
                                explicit_xs: e1.default,
                                filter_xs: e8.default,
                                fullscreen_xs: e2.default,
                                infinity_xs: e9.default,
                                like_xs: e5.default,
                                liked_xs: e4.default,
                                liteVersion_xs: e3.default,
                                lock_xs: e7.default,
                                more_xs: e6.default,
                                navigationCollection_xs: te.default,
                                navigationCollection_selected_xs: tt.default,
                                navigationConcerts_xs: tr.default,
                                navigationConcerts_selected_xs: ts.default,
                                navigationForYouAndTrends_xs: tn.default,
                                navigationForYouAndTrends_selected_xs: ti.default,
                                navigationKids_xs: ta.default,
                                navigationKids_selected_xs: tl.default,
                                navigationMuzmarket_xs: to.default,
                                navigationMyVibe_xs: tc.default,
                                navigationMyVibeNDA_xs: tu.default,
                                navigationNonMusic_xs: td.default,
                                navigationNonMusic_selected_xs: tf.default,
                                navigationPlus_xs: tx.default,
                                navigationSearch_xs: t_.default,
                                next_xs: tp.default,
                                note_xs: tm.default,
                                pause_xs: tv.default,
                                pause_filled_xs: tg.default,
                                picture_xs: ty.default,
                                pin_xs: tE.default,
                                pin_filled_xs: tk.default,
                                play_xs: tb.default,
                                playQueue_xs: tO.default,
                                play_filled_xs: th.default,
                                playlist_xs: tw.default,
                                previous_xs: tR.default,
                                repeat_xs: tA.default,
                                repeat_one_xs: tj.default,
                                rewindBackwards_xs: tC.default,
                                rewindForward_xs: tT.default,
                                search_xs: tD.default,
                                settings_xs: tS.default,
                                shuffle_xs: tI.default,
                                site_xs: tP.default,
                                speed_1_25x_centered_xs: tL.default,
                                speed_1_5x_centered_xs: tH.default,
                                speed_1_75x_centered_xs: tN.default,
                                speed_1x_centered_xs: tB.default,
                                speed_2x_centered_xs: tM.default,
                                syncLyrics_xs: tF.default,
                                thumbDown_xs: tU.default,
                                thumbUp_xs: tK.default,
                                trailer_xs: tz.default,
                                unavailable_xs: tY.default,
                                volume_xs: tV.default,
                                volumeOff_xs: tq.default,
                                windows_xs: tW.default,
                                adult_s: tG.default,
                                album_s: tX.default,
                                complain_s: tQ.default,
                                dislike_s: tZ.default,
                                disliked_s: tJ.default,
                                exclamation_s: t$.default,
                                explicit_s: t0.default,
                                likedVariant_s: t1.default,
                                note_s: t8.default,
                                pauseVibe_s: t2.default,
                                picture_s: t9.default,
                                playVibe_s: t5.default,
                                playlist_s: t4.default,
                                collections_m: t3.default,
                                collections_selected_m: t7.default,
                                complain_m: t6.default,
                                history_m: re.default,
                                home_m: rt.default,
                                home_selected_m: rr.default,
                                kids_m: rs.default,
                                kids_selected_m: rn.default,
                                like_m: ri.default,
                                liked_m: ra.default,
                                lock_m: rl.default,
                                more_m: ro.default,
                                navigationMuzmarket_m: rc.default,
                                non_music_m: ru.default,
                                non_music_selected_m: rd.default,
                                note_m: rf.default,
                                pause_m: rx.default,
                                pause_filled_m: r_.default,
                                play_m: rp.default,
                                playQueue_m: rm.default,
                                play_filled_m: rv.default,
                                plusOutlined_m: rg.default,
                                ruble_m: ry.default,
                                search_m: rE.default,
                                search_selected_m: rk.default,
                                share_m: rb.default,
                                speed_1_25x_centered_m: rO.default,
                                speed_1_5x_centered_m: rh.default,
                                speed_1_75x_centered_m: rw.default,
                                speed_1x_centered_m: rR.default,
                                speed_2x_centered_m: rA.default,
                                syncLyrics_m: rj.default,
                                ticket_m: rC.default,
                                ticket_selected_m: rT.default,
                                add_l: rD.default,
                                album_l: rS.default,
                                complain_l: rI.default,
                                download_l: rP.default,
                                like_l: rL.default,
                                note_l: rH.default,
                                pause_filled_l: rN.default,
                                play_filled_l: rB.default,
                                search_l: rM.default,
                                speed_1_25x_l: rF.default,
                                speed_1_5x_l: rU.default,
                                speed_1_75x_l: rK.default,
                                speed_1x_l: rz.default,
                                speed_2x_l: rY.default,
                                album_xl: rV.default,
                                clip_xl: rq.default,
                                complain_xl: rW.default,
                                note_xl: rG.default,
                                pause_filled_xl: rX.default,
                                picture_xl: rQ.default,
                                play_filled_xl: rZ.default,
                                playlist_xl: rJ.default,
                                unavailable_xl: r$.default,
                                attention_xxl: r0.default,
                                check_xxl: r1.default,
                                complain_xxl: r8.default,
                                next_xxl: r2.default,
                                offline_xxl: r9.default,
                                pause_filled_xxl: r5.default,
                                play_filled_xxl: r4.default,
                                previous_xxl: r3.default,
                                search_xxl: r7.default,
                                attention_xxxl: r6.default,
                                complain_xxxl: se.default,
                                bandlink: st.default,
                                googlePlay: sr.default,
                                huaweiAppGallery: ss.default,
                                kinopoiskEn: sn.default,
                                kinopoiskRu: si.default,
                                macos: sa.default,
                                musicLogo: sl.default,
                                musicLogoCenterEn: so.default,
                                musicLogoCenterRu: sc.default,
                                musicLogoLeftEn: su.default,
                                musicLogoLeftRu: sd.default,
                                pause: sf.default,
                                play: sx.default,
                                plus: s_.default,
                                plusBadge: sp.default,
                                plusColor: sm.default,
                                plusOutlined: sv.default,
                                windows: sg.default,
                                yandexBooksEn: sy.default,
                                yandexBooksRu: sE.default,
                                yandexPayEn: sk.default,
                                yandexPayRu: sb.default,
                                yandexPlusEn: sO.default,
                                yandexPlusRu: sh.default,
                                // for PulseSync: BEGIN register the settings gear icon component
                                settingsGear_xs: tSettingsGear.default,
                                // for PulseSync: END register the settings gear icon component
                            }));
                    },
                    5404: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Icon = void 0));
                        var s = r(1064);
                        Object.defineProperty(t, 'Icon', {
                            enumerable: !0,
                            get: function () {
                                return s.Icon;
                            },
                        });
                    },
                    9557: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Input = void 0));
                        let n = r(4377),
                            i = r(5881),
                            a = r(810),
                            l = r(9580),
                            o = s(r(3707)),
                            c = (e) => {
                                let {
                                        containerClassName: t,
                                        inputClassName: r,
                                        actionsClassName: s,
                                        icon: c = null,
                                        actions: u = null,
                                        disabled: d,
                                        forwardRef: f,
                                        value: x,
                                        size: _ = 'xxxs',
                                        variant: p = 'primary',
                                        ...m
                                    } = e,
                                    v = (0, l.useForwardRef)(f, null),
                                    g = (0, a.useCallback)(() => {
                                        var e;
                                        null == (e = v.current) || e.focus();
                                    }, [v]);
                                return (0, n.jsxs)('div', {
                                    className: (0, i.clsx)(
                                        o.default.root,
                                        { [o.default.root_disabled]: d, [o.default['root_size_'.concat(_)]]: _, [o.default['root_variant_'.concat(p)]]: p },
                                        t,
                                    ),
                                    onClick: g,
                                    children: [
                                        c,
                                        (0, n.jsx)('input', {
                                            className: (0, i.clsx)(o.default.input, r, { [o.default.textShadowing]: m.readOnly }),
                                            ref: v,
                                            value: x,
                                            disabled: d,
                                            ...m,
                                        }),
                                        (0, n.jsx)('div', { className: (0, i.clsx)(o.default.actions, s), children: u }),
                                    ],
                                });
                            };
                        t.Input = (0, a.forwardRef)((e, t) => (0, n.jsx)(c, { forwardRef: t, ...e }));
                    },
                    9408: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Input = void 0));
                        var s = r(9557);
                        Object.defineProperty(t, 'Input', {
                            enumerable: !0,
                            get: function () {
                                return s.Input;
                            },
                        });
                    },
                    9526: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SearchInput = void 0));
                        let n = r(4377),
                            i = r(5881),
                            a = r(810),
                            l = r(352),
                            o = r(9408),
                            c = r(5404),
                            u = r(7493),
                            d = s(r(9500));
                        t.SearchInput = (e) => {
                            let {
                                    onChange: t,
                                    placeholder: r,
                                    initialValue: s = '',
                                    correctedValue: f,
                                    size: x = 'xxxs',
                                    resetButtonAriaLabel: _ = '',
                                    disabled: p,
                                    autoFocus: m,
                                    shouldPreventAutoFocusScroll: v,
                                    withResetButton: g = !0,
                                    onResetClick: y,
                                    className: E,
                                    innerInputProps: k,
                                    searchIconProps: b,
                                    resetButtonProps: O,
                                } = e,
                                [h, w] = (0, a.useState)(s),
                                [R, A] = (0, a.useState)(!!s),
                                j = (0, a.useRef)(null),
                                C = (0, a.useMemo)(() => (0, l.debounce)(t, 500), [t]);
                            (0, a.useEffect)(() => {
                                if (m) {
                                    var e;
                                    null == (e = j.current) || e.focus({ preventScroll: v });
                                }
                            }, [m, v]);
                            let T = (0, a.useCallback)(
                                    (e) => {
                                        let r = e.length > 0;
                                        (w(e), C(e), r ? (C(e), A(!0)) : (t(e), A(!1)));
                                    },
                                    [C, t],
                                ),
                                D = (0, a.useCallback)(
                                    (e) => {
                                        T(e.target.value);
                                    },
                                    [T],
                                );
                            (0, a.useEffect)(() => {
                                if (f) {
                                    var e;
                                    (T(f), null == (e = j.current) || e.focus());
                                }
                            }, [T, f]);
                            let S = (0, a.useCallback)(() => {
                                    var e;
                                    (w(''), t(''), A(!1), null == y || y(), null == (e = j.current) || e.focus());
                                }, [t, y]),
                                I = (0, a.useMemo)(() => {
                                    let { className: e, ...t } = null != b ? b : {};
                                    return (0, n.jsx)(c.Icon, {
                                        variant: 'search',
                                        className: (0, i.clsx)(d.default.searchIcon, { [d.default.searchIcon_disabled]: p }, e),
                                        size: 'xs',
                                        ...t,
                                    });
                                }, [p, b]),
                                P = (0, a.useMemo)(
                                    () =>
                                        (0, n.jsx)(u.Button, {
                                            radius: 'round',
                                            className: (0, i.clsx)(d.default.reset, { [d.default.reset_show]: R }),
                                            'aria-label': _,
                                            size: x,
                                            disabled: p,
                                            onClick: S,
                                            icon: (0, n.jsx)(c.Icon, { size: 'xxs', variant: 'close', color: 'gray' }),
                                            ...O,
                                        }),
                                    [R, _, x, p, S, O],
                                ),
                                { actionsClassName: L, className: H, containerClassName: N, inputClassName: B, ...M } = null != k ? k : {};
                            return (0, n.jsx)(o.Input, {
                                ref: j,
                                type: 'search',
                                icon: I,
                                actions: g ? P : void 0,
                                onChange: D,
                                value: h,
                                size: x,
                                disabled: p,
                                placeholder: r,
                                ...M,
                                actionsClassName: L,
                                containerClassName: (0, i.clsx)(d.default.searchContainer, E, N),
                                inputClassName: (0, i.clsx)(d.default.searchInput, H, B),
                            });
                        };
                    },
                    1964: (e) => {
                        e.exports = n;
                    },
                    2660: (e) => {
                        e.exports = i;
                    },
                    352: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = s || (s = r.t(l, 2));
                    },
                },
                c = {};
            function u(e) {
                var t = c[e];
                if (void 0 !== t) return t.exports;
                var r = (c[e] = { exports: {} });
                return (o[e].call(r.exports, r, r.exports, u), r.exports);
            }
            ((u.d = (e, t) => {
                for (var r in t) u.o(t, r) && !u.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (u.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var d = {};
            (() => {
                (Object.defineProperty(d, 'X', { value: !0 }), (d.M = void 0));
                var e = u(9526);
                Object.defineProperty(d, 'M', {
                    enumerable: !0,
                    get: function () {
                        return e.SearchInput;
                    },
                });
            })();
            var f = d.M;
            d.X;
        },
        26401: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => x });
            var s = r(88800),
                n = r(29993),
                i = r(7123),
                a = r(29595),
                l = r(74965),
                o = r(9630),
                c = r(72288),
                u = r(87528),
                d = r(28661),
                f = r(79546);
            function x(e, t, r) {
                let { notify: x } = (0, l.l)(),
                    { fullscreenPlayer: _ } = (0, c.g)(),
                    p = (0, o.e)(),
                    m = (0, d.e)(null == e ? void 0 : e.type);
                return (0, n.c)(() => {
                    if (!e) return;
                    let n = t === f.N.LAST || t === f.N.NEXT,
                        l = n ? r : void 0,
                        o = n ? void 0 : r;
                    switch (t) {
                        case f.N.LAST:
                            null == p || p.injectLast({ entitiesData: [{ type: i.z4.Unloaded, meta: { id: e.entityId } }], sourceContextData: l });
                            break;
                        case f.N.NEXT:
                            null == p || p.injectNext({ entitiesData: [{ type: i.z4.Unloaded, meta: { id: e.entityId } }], sourceContextData: l });
                            break;
                        case f.N.REMOVE:
                            o && (null == p || p.removeAndLoadEntities({ positions: o }));
                            break;
                        case f.N.HIDE:
                            (null == o ? void 0 : o.length) && (null == p || p.hide({ positions: o }));
                    }
                    let c = _.modal.isOpened ? a.u.FULLSCREEN_INFO : a.u.INFO;
                    x((0, s.jsx)(u.l, { entityVariant: m, variant: t, entityTitle: e.title, coverUri: e.coverUri }), { containerId: c });
                });
            }
        },
        28661: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => i });
            var s = r(54667),
                n = r(15077);
            let i = (e) => {
                switch (e) {
                    case s.S.PODCAST:
                        return n.c.PODCAST_EPISODE;
                    case s.S.AUDIOBOOK:
                        return n.c.AUDIOBOOK_EPISODE;
                    default:
                        return n.c.TRACK;
                }
            };
        },
        29831: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => n });
            var s = r(48987);
            let n = (e, t) => {
                let { seconds: r, hours: n, minutes: i } = (0, s.e)(e);
                return t({ id: 'time.hours-minutes-seconds' }, { hours: n, minutes: i, seconds: r });
            };
        },
        31633: (e) => {
            e.exports = { syncLyrics: 'TrackContextMenu_syncLyrics___CDVn' };
        },
        33139: (e, t, r) => {
            'use strict';
            r.d(t, { o: () => g });
            var s = r(88800),
                n = r(84961),
                i = r(2058),
                a = r(17392),
                l = r(52300),
                o = r(19934),
                c = r(59927),
                u = r(40634),
                d = r(72288),
                f = r(88969),
                x = r(29993),
                _ = r(78940),
                p = r(31633),
                m = r.n(p);
            let v = (0, n.PA)((e) => {
                    let { className: t, artist: r, ...n } = e,
                        { fullscreenPlayer: i } = (0, d.g)(),
                        a = (0, _.Z)(r.url),
                        c = (0, x.c)((e) => {
                            (a(e), i.modal.close());
                        });
                    return (0, s.jsx)(o.Dr, {
                        className: t,
                        onClick: c,
                        icon: (0, s.jsx)(l.I, { className: m().navigateToAlbumIcon, variant: 'artist', size: 'xxs' }),
                        ...n,
                        children: (0, s.jsx)(f.A, { id: 'interface-actions.navigate-to-artist' }),
                    });
                }),
                g = (0, n.PA)((e) => {
                    let { className: t, artists: r } = e,
                        {
                            settings: { isMobile: n },
                        } = (0, d.g)(),
                        { formatMessage: f } = (0, i.A)();
                    return 1 === (0, c.A)(null != r ? r : []) && r[0]
                        ? (0, s.jsx)(v, { className: t, artist: r[0], 'data-test-id': a.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_ARTIST })
                        : (0, s.jsx)(o.W1, {
                              isMobile: n,
                              icon: (0, s.jsx)(l.I, { variant: 'artist', size: 'xxs' }),
                              label: f({ id: 'interface-actions.navigate-to-artists' }),
                              ariaLabel: f({ id: 'interface-actions.navigate-to-artists' }),
                              className: t,
                              'data-test-id': a.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_ARTIST,
                              children: r.map((e) => (0, s.jsx)(u.V, { artist: e }, e.id)),
                          });
                });
        },
        33145: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => ee });
            var s = r(88800),
                n = r(84961),
                i = r(53548),
                a = r(2058),
                l = r(17392),
                o = r(92998),
                c = r(72288),
                u = r(58390),
                d = r(60385),
                f = r(29993),
                x = r(67318),
                _ = r(1883),
                p = r(29595),
                m = r(74965),
                v = r(67174),
                g = r(5279),
                y = r(88969),
                E = r(56949),
                k = r(52300),
                b = r(19934),
                O = r(42174),
                h = r(72354),
                w = r.n(h);
            let R = (0, n.PA)((e) => {
                let { track: t } = e,
                    { formatMessage: r } = (0, a.A)(),
                    n = (0, O.K)(t);
                return (0, s.jsxs)(b.Dr, {
                    className: w().root,
                    onClick: n,
                    'data-test-id': l.Kq.track.TRACK_SUBMENU_LIKE_PLAYLIST_BUTTON,
                    children: [
                        (0, s.jsx)(y.A, { id: 'entity-names.liked-playlist' }),
                        t.isLiked &&
                            (0, s.jsx)(k.I, {
                                className: w().icon,
                                size: 'xxs',
                                variant: 'check',
                                'aria-label': r({ id: 'entity-names.track-in-playlist' }),
                                'data-test-id': l.Kq.track.TRACK_SUBMENU_IN_PLAYLIST_ICON,
                            }),
                    ],
                });
            });
            var A = r(29504),
                j = r(62518),
                C = r(63476),
                T = r(59304),
                D = r(81261),
                S = r.n(D);
            let I = () =>
                (0, s.jsx)(T.$, {
                    message: (0, s.jsx)(A.HL, {
                        className: S().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, s.jsx)(y.A, { id: 'playlist-errors.failed-to-remove-track' }),
                    }),
                });
            var P = r(15077),
                L = r(81877),
                H = r(91292),
                N = r(3895),
                B = r.n(N);
            let M = (0, n.PA)((e) => {
                let { entityTitle: t, entityVariant: r, entityCoverUri: n, playlist: a, closeToast: l } = e,
                    { fullscreenPlayer: o } = (0, c.g)(),
                    u = (0, f.c)(() => {
                        o.modal.isOpened && o.modal.close();
                    }),
                    d = (0, i.useMemo)(() => {
                        let e,
                            n = {
                                trackName: (0, s.jsxs)(A.HL, {
                                    className: B().title,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    lineClamp: 1,
                                    children: ['\xa0', t, '\xa0'],
                                }),
                                playlistName: (0, s.jsx)(H.N, {
                                    className: B().link,
                                    href: a.url,
                                    onClick: u,
                                    children: (0, s.jsxs)(A.HL, {
                                        className: B().playlistTitle,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: ['\xa0', a.title, '\xa0'],
                                    }),
                                }),
                            };
                        switch (r) {
                            case P.c.PODCAST_EPISODE:
                                e = (0, s.jsx)(y.A, { id: 'notifications-info.removed-podcast-episode-from-playlist', values: n });
                                break;
                            case P.c.AUDIOBOOK_EPISODE:
                                e = (0, s.jsx)(y.A, { id: 'notifications-info.removed-audiobook-episode-from-playlist', values: n });
                                break;
                            default:
                                e = (0, s.jsx)(y.A, { id: 'notifications-info.removed-track-from-playlist', values: n });
                        }
                        return (0, s.jsx)(A.HL, { className: B().message, variant: 'div', type: 'controls', size: 'm', lineClamp: 1, children: e });
                    }, [t, r, u, a.title, a.url]);
                return (0, s.jsx)(T.$, {
                    closeToast: l,
                    message: d,
                    cover: (0, s.jsx)(L.B, { className: B().image, src: n, withAvatarReplace: !0, size: 100, fit: 'cover', alt: t }),
                    coverRadius: 's',
                });
            });
            var F = r(28661),
                U = r(68340),
                K = r.n(U);
            let z = (0, n.PA)((e) => {
                let { playlist: t, track: r } = e,
                    { formatMessage: n } = (0, a.A)(),
                    i = (0, g.R)(),
                    o = (() => {
                        let { notify: e } = (0, m.l)(),
                            { playlist: t, fullscreenPlayer: r } = (0, c.g)(),
                            n = (0, f.c)((n) => {
                                var i, a;
                                let { withSuccessNotification: l, withPageRefresh: o, playlist: c, track: u } = n;
                                if (l && u && c) {
                                    let t = (0, F.e)(u.type);
                                    e((0, s.jsx)(M, { entityTitle: u.title, entityVariant: t, entityCoverUri: null != (a = u.coverUri) ? a : '', playlist: c }), {
                                        containerId: r.modal.isOpened ? p.u.FULLSCREEN_INFO : p.u.INFO,
                                    });
                                }
                                o && (null == c ? void 0 : c.uuid) === (null == (i = t.meta) ? void 0 : i.uuid) && t.refresh();
                            }),
                            i = (0, f.c)((t) => {
                                let { withFailNotification: n } = t;
                                n && e((0, s.jsx)(I, {}), { containerId: r.modal.isOpened ? p.u.FULLSCREEN_ERROR : p.u.ERROR });
                            });
                        return (0, f.c)(async (e) => {
                            let { playlist: t, track: r, trackIndex: s, withSuccessNotification: a = !0, withFailNotification: l = !0, withPageRefresh: o = !0 } = e,
                                c = await t.changePlaylist((0, j.M)({ operation: C.y.DELETE, startPosition: s, endPosition: s + 1 }));
                            return (c === x.Y.OK ? n({ withSuccessNotification: a, withPageRefresh: o, playlist: t, track: r }) : i({ withFailNotification: l }), c);
                        });
                    })(),
                    { isTrackInPlaylist: u, trackIndexInPlaylist: d } = ((e, t) => {
                        var r, s;
                        let n = -1;
                        return (
                            (null == (r = e.tracks) ? void 0 : r.length) &&
                                (n =
                                    null == (s = e.tracks)
                                        ? void 0
                                        : s.findIndex((e) => (e.albumId ? String(e.id) === t.id && e.albumId === t.albumId : String(e.id) === t.id))),
                            { isTrackInPlaylist: n > -1, trackIndexInPlaylist: n }
                        );
                    })(t, r),
                    _ = (0, f.c)(() => {
                        u ? o({ playlist: t, track: r, trackIndex: d }) : i({ playlist: t, track: r });
                    });
                return (0, s.jsxs)(b.Dr, {
                    className: K().root,
                    onClick: _,
                    'data-test-id': l.Kq.track.TRACK_SUBMENU_ITEM,
                    children: [
                        (0, s.jsx)(A.HL, { variant: 'div', size: 'm', lineClamp: 1, children: t.title }),
                        u &&
                            (0, s.jsx)(k.I, {
                                className: K().icon,
                                size: 'xxs',
                                variant: 'check',
                                'aria-label': n({ id: 'entity-names.track-in-playlist' }),
                                'data-test-id': l.Kq.track.TRACK_SUBMENU_IN_PLAYLIST_ICON,
                            }),
                    ],
                });
            });
            var Y = r(19994),
                V = r(46054),
                q = r.n(V);
            let W = (e) => {
                    let { forwardRef: t, className: r, ...n } = e;
                    return (0, s.jsx)(b.Dr, { className: r, ref: t, ...n, children: (0, s.jsx)(Y.W, { isActive: !0, className: q().shimmer }) });
                },
                G = (0, i.forwardRef)((e, t) => {
                    let { ...r } = e;
                    return (0, s.jsx)(W, { ...r, forwardRef: t });
                });
            var X = r(39344),
                Q = r.n(X);
            let Z = (0, n.PA)((e) => {
                let { track: t, searchQuery: r } = e,
                    {
                        playlists: n,
                        showLikes: o,
                        isLoading: u,
                        isEmpty: d,
                        scrollContainerRef: x,
                        virtualizer: _,
                    } = ((e) => {
                        var t, r;
                        let { track: s, searchQuery: n } = e,
                            { contextMenuTrackPlaylists: l } = (0, c.g)(),
                            { formatMessage: o } = (0, a.A)(),
                            u = l.getFilteredPlaylists(n),
                            d = o({ id: 'entity-names.liked-playlist' }).toLowerCase().includes(n.trim().toLowerCase()),
                            f = l.playlistsLoadingState.isResolved && !s.isTrackNonMusic && d,
                            x = (0, i.useRef)(null),
                            _ = (0, E.Te)({
                                count: u.length,
                                getScrollElement: () => x.current,
                                estimateSize: () => 36,
                                getItemKey: (e) => {
                                    var t, r;
                                    return null != (r = null == (t = u[e]) ? void 0 : t.uuid) ? r : e;
                                },
                                paddingStart: 36 * !!f,
                                overscan: 2,
                            }),
                            p = null != (r = null == (t = _.getVirtualItems()[0]) ? void 0 : t.index) ? r : 0;
                        return (
                            (0, i.useEffect)(() => {
                                _.scrollToOffset(0);
                            }, [n, _]),
                            (0, i.useEffect)(() => {
                                l.fetchPlaylistTracks(p, n);
                            }, [l, p, u.length, n]),
                            {
                                playlists: u,
                                showLikes: f,
                                isLoading: l.isPlaylistsLoading,
                                isEmpty: !l.isPlaylistsLoading && !u.length && !f,
                                scrollContainerRef: x,
                                virtualizer: _,
                            }
                        );
                    })({ track: t, searchQuery: r }),
                    p = (0, f.c)((e) => {
                        e.stopPropagation();
                    }),
                    m = Array.from({ length: 10 }, (e, t) => (0, s.jsx)(G, {}, t));
                return (0, s.jsxs)('div', {
                    ref: x,
                    className: Q().listPlaylist,
                    onTouchMoveCapture: p,
                    children: [
                        (0, s.jsxs)('div', {
                            className: Q().virtualPlaylistList,
                            style: { height: _.getTotalSize() },
                            children: [
                                o && (0, s.jsx)(R, { track: t }),
                                _.getVirtualItems().map((e) =>
                                    (0, s.jsx)(
                                        'div',
                                        {
                                            ref: _.measureElement,
                                            className: Q().virtualPlaylistItem,
                                            'data-index': e.index,
                                            style: { transform: 'translate3d(0, '.concat(e.start, 'px, 0)') },
                                            children: ((e) => {
                                                let r = n[e];
                                                return (null == r ? void 0 : r.tracksLoadingState.isResolved)
                                                    ? (0, s.jsx)(z, { track: t, playlist: r })
                                                    : (0, s.jsx)(G, {});
                                            })(e.index),
                                        },
                                        e.key,
                                    ),
                                ),
                            ],
                        }),
                        u && m,
                        d &&
                            (0, s.jsx)('div', {
                                className: Q().emptyState,
                                'data-test-id': l.Kq.track.TRACK_SUBMENU_EMPTY_STATE,
                                children: (0, s.jsx)(y.A, { id: 'search-results.not-found-title' }),
                            }),
                    ],
                });
            });
            var J = r(48416),
                $ = r.n(J);
            let ee = (0, n.PA)((e) => {
                let { track: t } = e,
                    {
                        user: r,
                        contextMenuTrackPlaylists: n,
                        settings: { isMobile: y },
                    } = (0, c.g)(),
                    { formatMessage: E } = (0, a.A)(),
                    k = ((e) => {
                        let { createPlaylist: t, fullscreenPlayer: r } = (0, c.g)(),
                            { notify: n } = (0, m.l)(),
                            i = (0, u.useRouter)(),
                            { formatMessage: l } = (0, a.A)(),
                            o = (0, g.R)(),
                            y = (0, f.c)(async (e) => {
                                var r;
                                if (
                                    (await t.create({ title: l({ id: 'entity-names.new-playlist' }), visibility: d.L.PUBLIC }),
                                    !(null == t || null == (r = t.meta) ? void 0 : r.uuid))
                                )
                                    return null;
                                if ((await o({ playlist: t.meta, track: e, withPageRefresh: !1, withFailNotification: !1, withSuccessNotification: !1 })) === x.Y.OK) {
                                    let { href: e } = (0, v.u)('/playlists/:playlistUuid', { params: { playlistUuid: t.meta.uuid } });
                                    return (t.reset(), e);
                                }
                                return null;
                            });
                        return (0, f.c)(async () => {
                            let t = await y(e);
                            t
                                ? (r.modal.isOpened && r.modal.close(), i.push(t))
                                : n((0, s.jsx)(_.p, {}), { containerId: r.modal.isOpened ? p.u.FULLSCREEN_ERROR : p.u.ERROR });
                        });
                    })(t),
                    b = (0, i.useCallback)((e) => (0, s.jsx)(Z, { track: t, searchQuery: e }), [t]);
                return (0, s.jsx)(o.a, {
                    isMobile: y,
                    onShow: n.loadPlaylistsWithoutTracks,
                    label: E({ id: 'playlist-actions.add-track-to-playlist' }),
                    disabled: !r.isAuthorized,
                    listClassName: $().menuContent,
                    onCreatePlaylist: k,
                    renderPlaylists: b,
                    searchInputDataTestId: l.Kq.track.TRACK_SUBMENU_SEARCH_INPUT,
                    resetSearchButtonDataTestId: l.Kq.track.TRACK_SUBMENU_SEARCH_RESET_BUTTON,
                    createPlaylistButtonDataTestId: l.Kq.track.TRACK_SUBMENU_ADD_PLAYLIST_BUTTON,
                    containerDataTestId: l.Kq.track.TRACK_SUBMENU,
                    'data-test-id': l.Kq.track.TRACK_CONTEXT_MENU_ADD_TO_PLAYLIST_BUTTON,
                });
            });
        },
        34126: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => n });
            var s = r(70565);
            let n = (e, t) => {
                var r, n;
                let i = null == (r = null == t ? void 0 : t.withLink) || r,
                    a = null != (n = null == t ? void 0 : t.isMobile) && n,
                    { isNonUserGenerated: l } = (0, s.I)(e);
                return i && !a && l;
            };
        },
        34303: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => s });
            var s = (function (e) {
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
        34945: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => o });
            var s = r(88800),
                n = r(65724),
                i = r(17392),
                a = r(97811),
                l = r.n(a);
            let o = (e) => {
                let { className: t, stopAnimation: r } = e;
                return (0, s.jsx)('div', { className: (0, n.$)(l().root, { [l().root_stopAnimation]: r }, t), 'data-test-id': i.S7.PLAYING_ANIMATION });
            };
        },
        34979: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => p });
            var s = r(88800),
                n = r(84961),
                i = r(53548),
                a = r(88969),
                l = r(17392),
                o = r(61691),
                c = r(54667),
                u = r(29993),
                d = r(52300),
                f = r(19934),
                x = r(78940),
                _ = r(72288);
            let p = (0, n.PA)((e) => {
                let { className: t, albumType: r, albumUrl: n, trackType: p } = e,
                    { fullscreenPlayer: m } = (0, _.g)(),
                    v = (0, x.Z)(n),
                    g = (0, i.useMemo)(() => {
                        switch (r) {
                            case o._.AUDIOBOOK:
                                return (0, s.jsx)(a.A, { id: 'non-music.navigate-to-book-album' });
                            case o._.ALBUM:
                            case o._.SINGLE:
                                return (0, s.jsx)(a.A, { id: 'interface-actions.navigate-to-album' });
                            case o._.PODCAST:
                                return (0, s.jsx)(a.A, { id: 'non-music.navigate-to-podcast-album' });
                            default:
                                return null;
                        }
                    }, [r]),
                    y = (0, i.useMemo)(() => {
                        switch (p) {
                            case c.S.AUDIOBOOK:
                                return (0, s.jsx)(a.A, { id: 'non-music.navigate-to-book-album' });
                            case c.S.TRACK:
                            case c.S.MUSIC:
                                return (0, s.jsx)(a.A, { id: 'interface-actions.navigate-to-album' });
                            case c.S.PODCAST:
                                return (0, s.jsx)(a.A, { id: 'non-music.navigate-to-podcast-album' });
                            default:
                                return null;
                        }
                    }, [p]),
                    E = (0, u.c)(() => {
                        (v(), m.modal.close());
                    }),
                    k = (0, i.useMemo)(
                        () =>
                            r ? ([o._.ALBUM, o._.SINGLE].includes(r) ? 'album' : 'podcasts') : p ? ([c.S.TRACK, c.S.MUSIC].includes(p) ? 'album' : 'podcasts') : 'album',
                        [r, p],
                    );
                return g || y
                    ? (0, s.jsx)(f.Dr, {
                          className: t,
                          onClick: E,
                          icon: (0, s.jsx)(d.I, { variant: k, size: 'xxs' }),
                          'data-test-id': l.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_ALBUM,
                          children: g || y,
                      })
                    : null;
            });
        },
        36702: (e) => {
            e.exports = {
                root: 'DownloadingProgress_root__2Wsc5',
                cancelIcon: 'DownloadingProgress_cancelIcon__Eq2uD',
                progressBar: 'DownloadingProgress_progressBar__ajbBU',
            };
        },
        38501: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => n });
            var s = r(72288);
            let n = () => {
                let {
                    settings: { isMobile: e },
                } = (0, s.g)();
                return !e;
            };
        },
        39267: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => g });
            var s = r(88800),
                n = r(65724),
                i = r(84961),
                a = r(53548),
                l = r(2058),
                o = r(17392),
                c = r(7555),
                u = r(21416),
                d = r(72288),
                f = r(81877),
                x = r(16704),
                _ = r(34945),
                p = r(11325),
                m = r.n(p);
            let v = (0, i.PA)((e) => {
                    let {
                            className: t,
                            isAvailable: r,
                            isDisliked: i,
                            coverUri: a,
                            title: p,
                            onPlayButtonClick: v,
                            isPlaying: g,
                            isCurrent: y,
                            radius: E,
                            isPlayButtonLoading: k,
                            isLoading: b,
                            shouldShowControl: O = !0,
                            ariaDescribedBy: h,
                            ignoreDislikedStyles: w,
                            entityCoverStyle: R,
                            forwardRef: A,
                            playButtonIconSize: j = 'xs',
                            alt: C,
                            withLoadingIndicator: T,
                            coverClassName: D,
                            entityCoverClassName: S,
                            controlClassName: I,
                            fallbackIconSize: P = 'xs',
                        } = e,
                        { formatMessage: L } = (0, l.A)(),
                        {
                            settings: { isMobile: H },
                        } = (0, d.g)();
                    return (0, s.jsx)('div', {
                        className: (0, n.$)(m().root, t, { [m().root_disabled]: !r, [m().root_current]: y, [m().root_disliked]: i && !w, [m().root_playing]: g }),
                        'data-test-id': o.S7.PLAY_BUTTON_WITH_COVER,
                        children: (0, s.jsxs)(c.t, {
                            className: (0, n.$)(m().cover, D),
                            radius: E,
                            children: [
                                (0, s.jsx)(f.B, {
                                    className: (0, n.$)(m().coverImage, S),
                                    src: a,
                                    size: 100,
                                    alt: null != C ? C : L({ id: 'entity-names.track-name' }, { trackName: p }),
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    isAvailable: r,
                                    fallbackIconSize: P,
                                    style: R,
                                    withLoadingIndicator: T,
                                }),
                                O &&
                                    (0, s.jsxs)('div', {
                                        className: (0, n.$)(m().control, I),
                                        children: [
                                            !b && (0, s.jsx)(_.P, { stopAnimation: !g, className: m().playingAnimation }),
                                            b && H && (0, s.jsx)(u.y, { size: 'xs', className: m().spinner }),
                                            !H &&
                                                (0, s.jsx)(x.D, {
                                                    ref: A,
                                                    variant: 'filled',
                                                    className: (0, n.$)(m().playButton, { [m().playButton_loading]: k }),
                                                    iconClassName: m().playButtonIcon,
                                                    isPlaying: g,
                                                    onClick: v,
                                                    iconSize: j,
                                                    ariaDescribedBy: h,
                                                    disabled: !r,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    });
                }),
                g = (0, a.forwardRef)((e, t) => (0, s.jsx)(v, { forwardRef: t, ...e }));
        },
        39344: (e) => {
            e.exports = {
                listPlaylist: 'ContextMenuPlaylistsList_listPlaylist__0oWLm',
                emptyState: 'ContextMenuPlaylistsList_emptyState__7kG0V',
                virtualPlaylistList: 'ContextMenuPlaylistsList_virtualPlaylistList__E1x7J',
                virtualPlaylistItem: 'ContextMenuPlaylistsList_virtualPlaylistItem__9w8Re',
            };
        },
        40700: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => n });
            var s = r(18593);
            function n(e) {
                return (null == e ? void 0 : e.data.type) === s.K.Generative;
            }
        },
        41925: (e, t, r) => {
            'use strict';
            (r.d(t, { C: () => n }), r(30282));
            var s = r(29993);
            let n = (e) => {
                let { onCmdCtrlClick: t, onClick: r } = e;
                return (0, s.c)((e) => {
                    (null != e && e.metaKey) || (null != e && e.ctrlKey) || (null != e && e.shiftKey) || null == r || r(e);
                });
            };
        },
        42174: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => v });
            var s = r(88800),
                n = r(2058),
                i = r(29993),
                a = r(29595),
                l = r(74965),
                o = r(72288),
                c = r(66943),
                u = r(96706),
                d = r(53548),
                f = r(188),
                x = r(79390),
                _ = r(11105),
                p = r(9630),
                m = r(65654);
            let v = (e) => {
                let { user: t, fullscreenPlayer: r } = (0, o.g)(),
                    { notify: v } = (0, l.l)(),
                    { formatMessage: g } = (0, n.A)(),
                    y = (() => {
                        let { notify: e } = (0, l.l)(),
                            [t, r] = (0, d.useState)(!1),
                            { formatMessage: a } = (0, n.A)(),
                            o = (0, p.e)();
                        return (0, i.c)(async (n) => {
                            let { track: i, withLink: l = !0, infoContainerId: d, errorContainerId: p, withNotification: v = !0, playbackId: g } = n;
                            if (t) return;
                            let y = { ...(0, u.HO)(i), isLiked: !i.isLiked };
                            r(!0);
                            let E = await i.toggleLike();
                            if ((r(!1), E === x.f.OK)) {
                                let e = y.isLiked ? _.O.LIKE : _.O.UNLIKE,
                                    t = null == o ? void 0 : o.getState(g);
                                if (t && (0, f.i)(null == t ? void 0 : t.currentContext.value)) {
                                    let r = t.queueState.entityList.value.find((e) => {
                                        let { entity: t } = e;
                                        return t.data.meta.id === y.id;
                                    });
                                    r && t.currentContext.value.sendFeedback({ type: e, entity: r.entity });
                                }
                            }
                            v &&
                                (E === x.f.OK
                                    ? e((0, s.jsx)(m.T, { withLink: l, track: y }), { containerId: d })
                                    : e((0, s.jsx)(c.h, { error: a({ id: 'error-messages.error-during-action' }) }), { containerId: p }));
                        });
                    })();
                return (0, i.c)(async () => {
                    if (!e) return;
                    let n = r.modal.isOpened ? a.u.FULLSCREEN_INFO : a.u.INFO,
                        i = r.modal.isOpened ? a.u.FULLSCREEN_ERROR : a.u.ERROR;
                    return t.isAuthorized
                        ? y({ track: e, errorContainerId: i, infoContainerId: n })
                        : void v((0, s.jsx)(c.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: i });
                });
            };
        },
        43522: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => s });
            let s = () => new URL(window.location.href).searchParams;
        },
        44318: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => l });
            var s = r(29993),
                n = r(72288),
                i = r(18610),
                a = r(16717);
            let l = () => {
                let { fullscreenVideoPlayer: e } = (0, n.g)(),
                    t = (0, i.p)();
                return (0, s.c)(function (r) {
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    (e.setIds(r), e.setClipIndex(s), t((0, a.J)(r, s)), e.modal.open());
                });
            };
        },
        44349: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { R: () => s }),
                (function (e) {
                    ((e.Music = 'music'),
                        (e.DownloadedMusic = 'downloadedMusic'),
                        (e.VibeTrack = 'vibeTrack'),
                        (e.Generative = 'generative'),
                        (e.Unknown = 'unknown'),
                        (e.SmartPreview = 'smartPreview'),
                        (e.Clip = 'clip'),
                        (e.Radio = 'fm_radio'));
                })(s || (s = {})));
        },
        46054: (e) => {
            e.exports = { shimmer: 'ContextMenuPlaylistItemShimmer_shimmer__bQ2Yb' };
        },
        48416: (e) => {
            e.exports = { menuContent: 'ContextSubMenuAddToPlaylist_menuContent__XMico' };
        },
        48987: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => s });
            let s = (e) => {
                let t = Math.round(e);
                return { hours: Math.floor(t / 3600), minutes: Math.floor((t % 3600) / 60), seconds: t % 60 };
            };
        },
        52073: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => n });
            var s = {};
            (Object.defineProperty(s, '__esModule', { value: !0 }),
                (s.createRipple = void 0),
                (s.createRipple = function (e, t, r) {
                    let s = null != r ? r : e.currentTarget,
                        n = document.createElement('span'),
                        i = Math.max(s.clientWidth, s.clientHeight),
                        a = i / 2,
                        l = s.getBoundingClientRect(),
                        o = 0 === e.clientX ? Math.round(l.width / 2) : e.clientX - l.left,
                        c = 0 === e.clientY ? Math.round(l.height / 2) : e.clientY - l.top;
                    ((n.style.width = ''.concat(i, 'px')),
                        (n.style.height = ''.concat(i, 'px')),
                        (n.style.left = 0 === e.clientX ? '0px' : ''.concat(o - a, 'px')),
                        (n.style.top = ''.concat(c - a, 'px')),
                        n.classList.add(t));
                    let u = s.getElementsByClassName(t)[0];
                    (u && u.remove(), s.insertBefore(n, s.firstChild));
                }),
                s.__esModule);
            var n = s.createRipple;
        },
        54272: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__R2jfZ',
                text: 'NotificationDislike_text__xmrnn',
                cover: 'NotificationDislike_cover__bvqFM',
                image: 'NotificationDislike_image__h0_EO',
            };
        },
        54667: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { S: () => s }),
                (function (e) {
                    ((e.TRACK = 'track'),
                        (e.MUSIC = 'music'),
                        (e.NOISE = 'noise'),
                        (e.PODCAST = 'podcast-episode'),
                        (e.COMMENT = 'comment'),
                        (e.ARTICLE = 'article'),
                        (e.ASMR = 'asmr'),
                        (e.RADIO = 'radio'),
                        (e.SHOW = 'show'),
                        (e.LECTURE = 'lecture'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.POETRY = 'poetry'));
                })(s || (s = {})));
        },
        54915: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => s });
            let s = (0, r(53548).createContext)(null);
        },
        54965: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => n });
            let s = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                n = (e, t) => {
                    let r = s(e, 3600),
                        n = s(e - 3600 * r, 60),
                        i = e - 3600 * r - 60 * n,
                        a = s(t || e, 3600) > 0,
                        l = [n, i];
                    return (a && l.unshift(r), l.map((e) => String(e).padStart(2, '0')).join(':'));
                };
        },
        56117: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => u });
            var s = r(88800),
                n = r(84961),
                i = r(88969),
                a = r(17392),
                l = r(52300),
                o = r(19934),
                c = r(72288);
            let u = (0, n.PA)((e) => {
                let { isDisliked: t, onClick: r, disabled: n, className: u } = e,
                    { user: d } = (0, c.g)();
                return (0, s.jsx)(o.Dr, {
                    onClick: r,
                    className: u,
                    icon: (0, s.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: n || !d.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, s.jsx)(i.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        58977: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => s });
            let s = 'offline';
        },
        59927: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            let s = (e) =>
                e.reduce(
                    (e, t) =>
                        e +
                        1 +
                        ((e) => {
                            var t;
                            return null != (t = null == e ? void 0 : e.length) ? t : 0;
                        })(t.decomposed),
                    0,
                );
        },
        60385: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { L: () => s }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(s || (s = {})));
        },
        62518: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => n });
            var s = r(35412);
            let n = (e) => {
                let { operation: t, position: r, startPosition: n, endPosition: i, tracks: a } = e,
                    l = ((e) =>
                        Object.keys(e)
                            .filter((t) => void 0 !== e[t])
                            .reduce((t, r) => ((t[r] = e[r]), t), {}))({ op: t, at: r, from: n, to: i, tracks: a });
                return (0, s.Gr)([l]);
            };
        },
        63476: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => s });
            var s = (function (e) {
                return ((e.INSERT = 'insert'), (e.DELETE = 'delete'), (e.MOVE = 'move'), e);
            })({});
        },
        63584: (e) => {
            e.exports = {
                entityTitle: 'NotificationPlayQueue_entityTitle__XCIsa',
                entityLink: 'NotificationPlayQueue_entityLink__O7tHL',
                text: 'NotificationPlayQueue_text___1DWX',
                image: 'NotificationPlayQueue_image__SLXsp',
            };
        },
        63698: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => n });
            var s = r(67174);
            let n = (e, t, r) =>
                (0, s.u)(t ? '/album/:albumId/track/:trackId' : '/track/:trackId', { params: t ? { albumId: t, trackId: e } : { trackId: e }, query: r });
        },
        65462: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                artistCaption: 'Meta_artistCaption__JESZi',
                link: 'Meta_link__IFDBA',
                albumTitle: 'Meta_albumTitle__mHeOs',
                root: 'Meta_root__R8n1h',
                root_withSecondaryColor: 'Meta_root_withSecondaryColor___uENY',
                root_disabled: 'Meta_root_disabled__Dpx_M',
                albumLink: 'Meta_albumLink__gASh6',
                artists: 'Meta_artists__VnR52',
                explicitMark: 'Meta_explicitMark__ocnCV',
                title: 'Meta_title__GGBnH',
                titleContainer: 'Meta_titleContainer__gDuXr',
                version: 'Meta_version__c2sHU',
                root_disliked: 'Meta_root_disliked__DrZ7_',
                text: 'Meta_text__Y5uYH',
                explicitMarkContainer: 'Meta_explicitMarkContainer__BxMQg',
                metaContainer: 'Meta_metaContainer__7i2dp',
                titleContainer_withVersion: 'Meta_titleContainer_withVersion__n7MdY',
            };
        },
        65654: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => c });
            var s = r(88800),
                n = r(84961),
                i = r(42729),
                a = r(28661),
                l = r(54667),
                o = r(4370);
            let c = (0, n.PA)((e) => {
                let { track: t, closeToast: r, withLink: n } = e,
                    c = ((e) => {
                        switch (e) {
                            case l.S.PODCAST:
                            case l.S.AUDIOBOOK:
                                return o.Z.collectionShelfLiked.href;
                            default:
                                return o.Z.collection.href;
                        }
                    })(t.type),
                    u = (0, a.e)(t.type);
                return (0, s.jsx)(i.O, {
                    closeToast: r,
                    entityVariant: u,
                    entityTitle: t.title,
                    collectionUrl: c,
                    coverUri: t.coverUri,
                    isLiked: t.isLiked,
                    withLink: n,
                });
            });
        },
        67318: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => s });
            var s = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e);
            })({});
        },
        67699: (e) => {
            e.exports = { ugcLabel: 'TrackContextMenuHeader_ugcLabel__k7hmv' };
        },
        68254: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => c });
            var s,
                n = r(53548),
                i = {
                    5881: (e, t, r) => {
                        function s() {
                            for (var e, t, r = 0, s = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            s,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (s = e(t[r])) && (n && (n += ' '), (n += s));
                                            else for (r in t) t[r] && (n && (n += ' '), (n += r));
                                        return n;
                                    })(e)) &&
                                    (s && (s += ' '), (s += t));
                            return s;
                        }
                        (r.r(t), r.d(t, { clsx: () => s, default: () => n }));
                        let n = s;
                    },
                    1069: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => s }));
                        let s = {
                            wrapper: 'EOWonrlAZfCxgDQrLIdO',
                            fullCircle: 'TNOA7GEcjPELn4mw8Zjz',
                            progressCircle: 'LyZUu89TXyP3Jmnxrn9r',
                            progressCircle_withRoundStroke: 'meplzQA7jf7cO_eu_HlZ',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function s(e, t, s) {
                            var n = null;
                            if ((void 0 !== s && (n = '' + s), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var i in ((s = {}), t)) 'key' !== i && (s[i] = t[i]);
                            else s = t;
                            return { $$typeof: r, type: e, key: n, ref: void 0 !== (t = s.ref) ? t : null, props: s };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = s), (t.jsxs = s));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    284: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CircleProgress = void 0));
                        let n = r(4377),
                            i = r(810),
                            a = r(5881),
                            l = s(r(1069));
                        t.CircleProgress = (e) => {
                            let {
                                    className: t,
                                    value: r,
                                    max: s = 100,
                                    size: o = 14,
                                    strokeWidth: c = 2,
                                    withRoundStroke: u,
                                    'aria-valuetext': d,
                                    'aria-busy': f,
                                    progressCircleClassName: x,
                                    fullCircleClassName: _,
                                    ...p
                                } = e,
                                m = (o - c) / 2,
                                v = m + c / 2,
                                g = 2 * Math.PI * m,
                                y = 0.25 * g,
                                E = (0, i.useMemo)(() => {
                                    let e = Math.max(Math.min(r, s), 0) / s;
                                    return ''.concat(e * g, ' ').concat((1 - e) * g);
                                }, [s, r, g]);
                            return (0, n.jsx)('div', {
                                'aria-busy': f,
                                className: t,
                                'aria-valuetext': d,
                                role: 'progressbar',
                                'aria-valuemin': 0,
                                'aria-valuemax': s,
                                'aria-valuenow': r,
                                'data-test-id': p['data-test-id'],
                                children: (0, n.jsxs)('svg', {
                                    className: l.default.wrapper,
                                    width: o,
                                    height: o,
                                    viewBox: '0 0 '.concat(o, ' ').concat(o),
                                    children: [
                                        (0, n.jsx)('circle', {
                                            className: (0, a.clsx)(l.default.fullCircle, _),
                                            r: m,
                                            strokeWidth: c,
                                            cx: v,
                                            cy: v,
                                            role: 'presentation',
                                        }),
                                        (0, n.jsx)('circle', {
                                            className: (0, a.clsx)(l.default.progressCircle, { [l.default.progressCircle_withRoundStroke]: u }, x),
                                            r: m,
                                            strokeWidth: c,
                                            cx: v,
                                            cy: v,
                                            strokeDashoffset: y,
                                            strokeDasharray: E,
                                            role: 'presentation',
                                        }),
                                    ],
                                }),
                            });
                        };
                    },
                    810: (e) => {
                        e.exports = s || (s = r.t(n, 2));
                    },
                },
                a = {};
            function l(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return (i[e].call(r.exports, r, r.exports, l), r.exports);
            }
            ((l.d = (e, t) => {
                for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X', { value: !0 }), (o.m = void 0));
                var e = l(284);
                Object.defineProperty(o, 'm', {
                    enumerable: !0,
                    get: function () {
                        return e.CircleProgress;
                    },
                });
            })();
            var c = o.m;
            o.X;
        },
        68340: (e) => {
            e.exports = { root: 'ContextMenuPlaylistItem_root__WU_1g', icon: 'ContextMenuPlaylistItem_icon__U79vo' };
        },
        68447: (e) => {
            e.exports = {
                cancelIcon: 'TrackContextMenuDownloadItem_cancelIcon__0YF_e',
                root: 'TrackContextMenuDownloadItem_root__BALdW',
                downloadingProgress: 'TrackContextMenuDownloadItem_downloadingProgress__Xmtgm',
                progress: 'TrackContextMenuDownloadItem_progress__FMBws',
            };
        },
        68870: (e) => {
            e.exports = { root: 'HorizontalCardContainer_root__YoAAP' };
        },
        69553: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => i });
            var s = r(78686),
                n = r(63698);
            let i = (e, t) => {
                let { withLink: r, isMobile: i, isOfflineModeEnabled: a, query: l } = t,
                    o = e.isRemoved,
                    c = !e.isRemoved && e.version ? e.version : void 0,
                    u = !e.isRemoved && (null == r || r) && (0, s.t)(e, { isMobile: i, isOfflineModeEnabled: a }) ? (0, n.l)(e.id, e.albumId, l) : null;
                return { title: e.title, shouldShowRemovedTitle: o, version: c, link: u };
            };
        },
        70565: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => n });
            var s = r(76794);
            let n = (e) => {
                let t = e === s.J.UGC,
                    r = e === s.J.OWN,
                    n = e === s.J.OWN_REPLACED_TO_UGC;
                return { isUGC: t, isOwn: r, isOwnReplacedToUGC: n, isNonUserGenerated: !t && !n };
            };
        },
        71978: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => i });
            var s = r(4086),
                n = r(41928);
            function i() {
                return (0, n.N)().get(s.y$);
            }
        },
        72354: (e) => {
            e.exports = { root: 'ContextMenuLikedPlaylistItem_root__tIpwX', icon: 'ContextMenuLikedPlaylistItem_icon__mVLMw' };
        },
        76794: (e, t, r) => {
            'use strict';
            var s;
            (r.d(t, { J: () => s }),
                (function (e) {
                    ((e.OWN = 'OWN'), (e.UGC = 'UGC'), (e.OWN_REPLACED_TO_UGC = 'OWN_REPLACED_TO_UGC'), (e.EXTERNAL = 'EXTERNAL'));
                })(s || (s = {})));
        },
        78686: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => n });
            var s = r(70565);
            let n = (e, t) => {
                let { isMobile: r, isOfflineModeEnabled: n } = t,
                    { isNonUserGenerated: i } = (0, s.I)(e.trackSource);
                return e.isAvailable && i && !r && !n;
            };
        },
        79262: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => u });
            var s = r(88800),
                n = r(65724),
                i = r(2058),
                a = r(68254),
                l = r(52300),
                o = r(36702),
                c = r.n(o);
            let u = (e) => {
                let { value: t, size: r, strokeWidth: o, withCancelIcon: u, className: d, progressBarClassName: f, cancelIconClassName: x } = e,
                    { formatMessage: _ } = (0, i.A)();
                return (0, s.jsxs)('div', {
                    className: (0, n.$)(c().root, d),
                    children: [
                        (0, s.jsx)(a.q, {
                            value: t,
                            size: r,
                            strokeWidth: o,
                            max: 100,
                            withRoundStroke: !0,
                            className: c().progressBar,
                            progressCircleClassName: f,
                            'aria-valuetext': _({ id: 'offline.download-progress' }),
                        }),
                        u && (0, s.jsx)(l.I, { variant: 'close', size: 'xxxs', className: (0, n.$)(c().cancelIcon, x) }),
                    ],
                });
            };
        },
        79546: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => s });
            var s = (function (e) {
                return ((e.NEXT = 'NEXT'), (e.LAST = 'LAST'), (e.REMOVE = 'REMOVE'), (e.HIDE = 'HIDE'), e);
            })({});
        },
        81261: (e) => {
            e.exports = { message: 'FailedPlaylistNotification_message__wxrzi' };
        },
        85463: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => c });
            var s = r(29993),
                n = r(58217),
                i = r(41925),
                a = r(72288),
                l = r(43522),
                o = r(18610);
            let c = (e) => {
                let { track: t, withSavingQueryParams: r, entityType: c, onNavigate: u } = e,
                    { fullscreenPlayer: d, album: f, track: x } = (0, a.g)(),
                    _ = f.id === t.albumId,
                    p = (0, o.p)(),
                    m = (0, s.c)((e) => {
                        if ((d.modal.isOpened && d.modal.close(), null == u || u(), _)) {
                            null == e || e.preventDefault();
                            let s = (0, l.j)();
                            (r && s ? p(t.getUrl(Object.fromEntries(s))) : p(t.url), x.open({ trackId: t.id, albumId: t.albumId }));
                        } else null == e || e.stopPropagation();
                    }),
                    v = (0, s.c)((e) => {
                        (null == u || u(), null == e || e.stopPropagation());
                    }),
                    g = { entity: t, entityType: c },
                    y = (0, n.l)({ ...g, callback: m }),
                    E = (0, n.l)({ ...g, callback: v });
                return (0, i.C)({ onClick: y, onCmdCtrlClick: E });
            };
        },
        87528: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => _ });
            var s = r(88800),
                n = r(53548),
                i = r(88969),
                a = r(17392),
                l = r(29504),
                o = r(59304),
                c = r(15077),
                u = r(81877),
                d = r(79546),
                f = r(63584),
                x = r.n(f);
            let _ = (e) => {
                let { closeToast: t, entityVariant: r, entityTitle: f, coverUri: _, variant: p } = e,
                    m = (0, n.useMemo)(
                        () =>
                            (0, s.jsxs)(l.HL, { className: x().entityTitle, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: ['\xa0', f, '\xa0'] }),
                        [f],
                    ),
                    v = (0, n.useMemo)(() => {
                        switch (p) {
                            case d.N.NEXT:
                                return ((e, t) => {
                                    switch (e) {
                                        case c.c.TRACK:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.track-will-be-played-next', values: { title: t } });
                                        case c.c.PODCAST_EPISODE:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.podcast-episode-will-be-played-next', values: { title: t } });
                                        case c.c.AUDIOBOOK_EPISODE:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.audiobook-episode-will-be-played-next', values: { title: t } });
                                        case c.c.ALBUM:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.album-will-be-played-next', values: { title: t } });
                                        case c.c.PLAYLIST:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.playlist-will-be-played-next', values: { title: t } });
                                    }
                                })(r, m);
                            case d.N.LAST:
                                return ((e, t) => {
                                    switch (e) {
                                        case c.c.TRACK:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.track-will-be-played-last', values: { title: t } });
                                        case c.c.PODCAST_EPISODE:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.podcast-episode-will-be-played-last', values: { title: t } });
                                        case c.c.AUDIOBOOK_EPISODE:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.audiobook-episode-will-be-played-last', values: { title: t } });
                                        case c.c.ALBUM:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.album-will-be-played-last', values: { title: t } });
                                        case c.c.PLAYLIST:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.playlist-will-be-played-last', values: { title: t } });
                                    }
                                })(r, m);
                            case d.N.HIDE:
                            case d.N.REMOVE:
                                return ((e, t) => {
                                    switch (e) {
                                        case c.c.TRACK:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.track-will-be-removed', values: { title: t } });
                                        case c.c.PODCAST_EPISODE:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.podcast-episode-will-be-removed', values: { title: t } });
                                        case c.c.AUDIOBOOK_EPISODE:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.audiobook-episode-will-be-removed', values: { title: t } });
                                        case c.c.ALBUM:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.album-will-be-removed', values: { title: t } });
                                        case c.c.PLAYLIST:
                                            return (0, s.jsx)(i.A, { id: 'play-queue.playlist-will-be-removed', values: { title: t } });
                                    }
                                })(r, m);
                        }
                    }, [p, r, m]);
                return (0, s.jsx)(o.$, {
                    message: (0, s.jsx)(l.HL, {
                        className: x().text,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        'data-test-id': a.OA.track.PLAY_QUEUE_NOTIFICATION_TEXT,
                        children: v,
                    }),
                    cover: (0, s.jsx)(u.B, { className: x().image, src: _, size: 100, fit: 'cover', alt: f, withAvatarReplace: !0 }),
                    closeToast: t,
                    coverRadius: 's',
                });
            };
        },
        92998: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => v });
            var s = r(88800),
                n = r(79070),
                i = r(52300),
                a = r(19934),
                l = r(53548),
                o = r(29993),
                c = r(2058),
                u = r(88969),
                d = r(98148),
                f = r(23237),
                x = r(29504),
                _ = r(14357),
                p = r.n(_);
            let m = (e) => {
                    let {
                            autoFocusSearch: t,
                            isMobile: r,
                            onCreatePlaylist: _,
                            searchInputDataTestId: m,
                            resetSearchButtonDataTestId: v,
                            createPlaylistButtonDataTestId: g,
                            renderPlaylists: y,
                        } = e,
                        { formatMessage: E } = (0, c.A)(),
                        [k, b] = (0, l.useState)(''),
                        O = (0, o.c)((e) => {
                            e.stopPropagation();
                        }),
                        h = (0, n.L)(() => {
                            if (!r) return { className: p().menuItems, role: 'menu', 'aria-label': E({ id: 'search-results.playlist' }) };
                        });
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)('div', {
                                className: p().searchSection,
                                onKeyDown: O,
                                children: (0, s.jsx)(f.D, {
                                    autoFocus: t,
                                    shouldPreventAutoFocusScroll: !0,
                                    className: p().searchField,
                                    initialValue: k,
                                    correctedValue: null,
                                    placeholder: E({ id: 'search.playlist-placeholder' }),
                                    onChange: b,
                                    resetButtonAriaLabel: E({ id: 'interface-actions.reset-search-input' }),
                                    searchIconProps: { className: p().searchIcon },
                                    resetButtonProps: { 'data-test-id': v },
                                    innerInputProps: { 'aria-label': E({ id: 'search.playlist-placeholder' }), 'data-test-id': m },
                                }),
                            }),
                            (0, s.jsxs)('div', {
                                ...h,
                                children: [
                                    (0, s.jsx)(a.Dr, {
                                        tabIndex: 0,
                                        onClick: _,
                                        icon: (0, s.jsx)(i.I, { variant: 'add', size: 'xxs' }),
                                        className: p().createPlaylistButton,
                                        'data-test-id': g,
                                        children: (0, s.jsx)(x.HL, {
                                            variant: 'div',
                                            size: 'm',
                                            lineClamp: 1,
                                            children: (0, s.jsx)(u.A, { id: 'playlist-actions.create-playlist' }),
                                        }),
                                    }),
                                    (0, s.jsx)(d.c, { className: p().menuDivider }),
                                    y(k),
                                ],
                            }),
                        ],
                    });
                },
                v = (e) => {
                    let { label: t, isMobile: r, className: c, listClassName: u, disabled: d, onShow: f, containerDataTestId: x, 'data-test-id': _, ...p } = e,
                        { autoFocusSearch: v, menuProps: g } = (() => {
                            let [e, t] = (0, l.useState)(!1),
                                [r, s] = (0, l.useState)(!1),
                                n = (0, o.c)((e) => {
                                    (t(e), e || s(!1));
                                }),
                                i = (0, o.c)((n) => {
                                    (e && r) || (n.preventDefault(), n.stopPropagation(), s(!0), t(!0));
                                });
                            return {
                                autoFocusSearch: r,
                                menuProps: {
                                    open: e,
                                    onOpenChange: n,
                                    onKeyDownCapture: (0, o.c)((e) => {
                                        ['ArrowRight', 'Enter', ' '].includes(e.key) && i(e);
                                    }),
                                    onClickCapture: (0, o.c)((e) => {
                                        0 === e.detail && i(e);
                                    }),
                                },
                            };
                        })(),
                        y = (0, n.L)(() => {
                            if (!r) return { menuRole: 'dialog', submenuProps: { 'aria-label': t, 'aria-orientation': void 0 } };
                        });
                    return (0, s.jsx)(a.W1, {
                        ...g,
                        ...y,
                        offsetOptions: 3,
                        isMobile: r,
                        className: c,
                        listClassName: u,
                        label: t,
                        ariaLabel: t,
                        icon: (0, s.jsx)(i.I, { variant: 'addToPlaylist', size: 'xxs' }),
                        disabled: d,
                        onShow: f,
                        containerDataTestId: x,
                        'data-test-id': _,
                        children: (0, s.jsx)(m, { ...p, autoFocusSearch: v, isMobile: r }),
                    });
                };
        },
        93039: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => i });
            var s = r(20584),
                n = r(18593);
            function i(e) {
                var t;
                let r = null != (t = e.entityContextType) ? t : s.h.BASED_ON_ENTITY_BY_DEFAULT;
                switch (e.contextType) {
                    case n.K.Playlist: {
                        let t = void 0 !== e.playlistUid && void 0 !== e.playlistKind;
                        return {
                            type: n.K.Playlist,
                            from: '',
                            meta: { id: String(e.contextId), ...(t && { uid: e.playlistUid, kind: e.playlistKind }) },
                            sourceContextType: r,
                            filter: e.filter,
                        };
                    }
                    case n.K.Album:
                        return { type: n.K.Album, from: '', meta: { id: e.contextId }, sourceContextType: r };
                    case n.K.Artist:
                        return { type: n.K.Artist, from: '', meta: { id: e.contextId }, sourceContextType: r };
                    default:
                        return { type: n.K.Various, from: '', meta: { id: e.contextId }, sourceContextType: r };
                }
            }
        },
        97811: (e) => {
            e.exports = {
                root: 'PlayingAnimation_root__YrWz7',
                'bubble-out': 'PlayingAnimation_bubble-out__k2fBS',
                root_stopAnimation: 'PlayingAnimation_root_stopAnimation__qOw_g',
            };
        },
        98148: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => l });
            var s = {
                    5881: (e, t, r) => {
                        function s() {
                            for (var e, t, r = 0, s = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            s,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (s = e(t[r])) && (n && (n += ' '), (n += s));
                                            else for (r in t) t[r] && (n && (n += ' '), (n += r));
                                        return n;
                                    })(e)) &&
                                    (s && (s += ' '), (s += t));
                            return s;
                        }
                        (r.r(t), r.d(t, { clsx: () => s, default: () => n }));
                        let n = s;
                    },
                    6927: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => s }));
                        let s = { root: 'sLuudThzDxW_5ARYjgjx', horizontal: 'xd6ji7lvp0et4nirt0TL', hasLabel: 'abbPp8VtL2D_PdW0Q_Wc', vertical: 'sMz62rSqViFDkXAMfGeO' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function s(e, t, s) {
                            var n = null;
                            if ((void 0 !== s && (n = '' + s), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var i in ((s = {}), t)) 'key' !== i && (s[i] = t[i]);
                            else s = t;
                            return { $$typeof: r, type: e, key: n, ref: void 0 !== (t = s.ref) ? t : null, props: s };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = s), (t.jsxs = s));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    9791: function (e, t, r) {
                        var s =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Divider = void 0));
                        let n = r(4377),
                            i = r(5881),
                            a = s(r(6927));
                        t.Divider = (e) => {
                            let { className: t, orientation: r = 'horizontal', children: s, ...l } = e,
                                o = s && (0, n.jsx)('span', { children: s });
                            return (0, n.jsx)('div', {
                                className: (0, i.clsx)(a.default.root, { [a.default[r]]: r, [a.default.hasLabel]: o }, t),
                                ...l,
                                role: 'separator',
                                'aria-orientation': r,
                                children: o,
                            });
                        };
                    },
                },
                n = {};
            function i(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, i), r.exports);
            }
            ((i.d = (e, t) => {
                for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (i.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, '__esModule', { value: !0 }), (a.Divider = void 0));
                var e = i(9791);
                Object.defineProperty(a, 'Divider', {
                    enumerable: !0,
                    get: function () {
                        return e.Divider;
                    },
                });
            })();
            var l = a.Divider;
            a.__esModule;
        },
        98644: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => s });
            var s = (function (e) {
                return ((e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e);
            })({});
        },
        99305: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => s });
            var s = (function (e) {
                return (
                    (e.TRACKS_COUNT = 'tracksCount'),
                    (e.TRACK_DOWNLOAD = 'trackDownload'),
                    (e.TRACK_DELETE = 'trackDelete'),
                    (e.MY_FAVORITES_PLAYLIST_DOWNLOAD = 'myFavoritesPlaylistDownload'),
                    (e.MY_FAVORITES_PLAYLIST_DELETE = 'myFavoritesPlaylistDelete'),
                    e
                );
            })({});
        },
        99698: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => j });
            var s = r(88800),
                n = r(96706),
                i = r(53548),
                a = r(2058),
                l = r(188),
                o = r(79390),
                c = r(11105),
                u = r(29993),
                d = r(7123),
                f = r(29595),
                x = r(74965),
                _ = r(9630),
                p = r(72288),
                m = r(66943),
                v = r(65724),
                g = r(7555),
                y = r(73170),
                E = r(29504),
                k = r(59304),
                b = r(15077),
                O = r(81877),
                h = r(54272),
                w = r.n(h);
            let R = (e) => {
                let t,
                    { coverUri: r, title: n, isDisliked: i, closeToast: l, className: o, entityVariant: c } = e,
                    { formatMessage: u } = (0, a.A)();
                if (i)
                    switch (c) {
                        case b.c.PODCAST_EPISODE:
                            t = u({ id: 'notifications-info.podcast-episode-unavailable-in-recommendations' });
                            break;
                        case b.c.AUDIOBOOK_EPISODE:
                            t = u({ id: 'notifications-info.audiobook-episode-unavailable-in-recommendations' });
                            break;
                        default:
                            t = u({ id: 'notifications-info.track-unavailable-in-recommendations' });
                    }
                else
                    switch (c) {
                        case b.c.PODCAST_EPISODE:
                            t = u({ id: 'notifications-info.podcast-episode-available-in-recommendations' });
                            break;
                        case b.c.AUDIOBOOK_EPISODE:
                            t = u({ id: 'notifications-info.audiobook-episode-available-in-recommendations' });
                            break;
                        default:
                            t = u({ id: 'notifications-info.track-available-in-recommendations' });
                    }
                return (0, s.jsx)(k.$, {
                    className: (0, v.$)(w().root, o),
                    closeToast: l,
                    message: (0, s.jsxs)('div', {
                        className: w().message,
                        children: [
                            (0, s.jsx)(y.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, s.jsx)(g.t, {
                                className: w().cover,
                                radius: 's',
                                children: (0, s.jsx)(O.B, { className: w().image, src: r, alt: n, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(E.HL, { className: w().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                });
            };
            var A = r(28661);
            let j = (e) => {
                let { user: t, fullscreenPlayer: r } = (0, p.g)(),
                    v = (0, _.e)(),
                    { notify: g } = (0, x.l)(),
                    [y, E] = (0, i.useState)(!1),
                    { formatMessage: k } = (0, a.A)(),
                    b = (0, A.e)(null == e ? void 0 : e.type);
                return (0, u.c)(async () => {
                    if (e) {
                        let u = r.modal.isOpened ? f.u.FULLSCREEN_INFO : f.u.INFO,
                            x = r.modal.isOpened ? f.u.FULLSCREEN_ERROR : f.u.ERROR;
                        if (!t.isAuthorized) return void g((0, s.jsx)(m.h, { error: k({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: x });
                        if (y) return;
                        let _ = { ...(0, n.HO)(e), isDisliked: !e.isDisliked };
                        E(!0);
                        let p = await e.toggleDislike();
                        if ((E(!1), p === o.f.OK)) {
                            var i, a;
                            g((0, s.jsx)(R, { coverUri: _.coverUri, isDisliked: _.isDisliked, title: _.title, entityVariant: b }), { containerId: u });
                            let e = _.isDisliked ? c.O.DISLIKE : c.O.UNDISLIKE;
                            if (v && (0, l.i)(v.state.currentContext.value)) {
                                let t = v.state.currentContext.value,
                                    r = v.state.queueState.entityList.value.find((e) => {
                                        let { entity: t } = e;
                                        return t.data.meta.id === _.id;
                                    });
                                r &&
                                    (await t.sendFeedback({ type: e, entity: r.entity }),
                                    e === c.O.DISLIKE &&
                                        v.state.currentContext.value === t &&
                                        (null == (a = v.state.queueState.currentEntity.value) ? void 0 : a.entity) === r.entity &&
                                        v.moveForward(void 0, d.So.DISLIKE_MOVE_FORWARD));
                            } else
                                _.isDisliked &&
                                    _.id === (null == v || null == (i = v.state.queueState.currentEntity.value) ? void 0 : i.entity.data.meta.id) &&
                                    (null == v || v.moveForward());
                        } else g((0, s.jsx)(m.h, { error: k({ id: 'error-messages.error-during-action' }) }), { containerId: x });
                    }
                });
            };
        },
    },
]);
