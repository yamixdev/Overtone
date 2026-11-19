(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5507],
    {
        202: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => n });
            var a = i(39499),
                r = i(29993);
            let n = (e) => {
                let { format: t, onSuccess: i, onError: n } = e;
                return {
                    startClipboardWrite: (0, r.c)(() => {
                        let e = () => void 0,
                            r = () => void 0,
                            o = !1,
                            s = new Promise((t, i) => {
                                ((e = t), (r = i));
                            }),
                            l = (async (e) => {
                                try {
                                    (await window.navigator.clipboard.write([e]), null == i || i());
                                } catch (e) {
                                    o || null == n || n(e);
                                }
                            })(new ClipboardItem({ 'text/plain': (async () => new Blob([await s], { type: 'text/plain' }))() }));
                        return {
                            copy: (i) => (e(t(i)), l),
                            cancel: () => {
                                ((o = !0), r(new a.t('Clipboard write cancelled')));
                            },
                        };
                    }),
                };
            };
        },
        554: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(t, ':').concat(i);
            };
        },
        989: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => r });
            let a = new Set(Object.values(i(22983).y)),
                r = (e) => {
                    let t = null == e ? void 0 : e.toLowerCase();
                    return ((e) => 'string' == typeof e && a.has(e))(t) ? t : void 0;
                };
        },
        1401: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => c });
            var a = i(88800),
                r = i(52300),
                n = i(15077),
                o = i(42729),
                s = i(14307),
                l = i.n(s);
            let c = (e) => {
                let { vibe: t, closeToast: i } = e;
                return (0, a.jsx)(o.O, {
                    className: l().root,
                    closeToast: i,
                    entityVariant: n.c.VIBE,
                    customCover: (0, a.jsx)(r.I, { variant: 'vibe', size: 'xxs' }),
                    collectionUrl: '/collection',
                    isLiked: t.isLiked,
                });
            };
        },
        2147: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => c });
            var a = i(88800),
                r = i(79390),
                n = i(29993),
                o = i(25555),
                s = i(72288),
                l = i(1401);
            let c = function (e) {
                let { showNotificationOnMobile: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { user: i, paywall: c } = (0, s.g)(),
                    d = (0, o.I)({
                        action: async () => (await (null == e ? void 0 : e.toggleLike())) === r.f.OK,
                        notification: (0, a.jsx)(l.T, { vibe: { isLiked: !(null == e ? void 0 : e.isLiked) } }),
                        showNotificationOnMobile: t,
                    });
                return (0, n.c)(async () => {
                    if (e) {
                        if (i.isAuthorized && !i.hasPlus && !e.isLiked) return void c.openModal();
                        await d();
                    }
                });
            };
        },
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => n });
            var a = i(72288),
                r = i(97956);
            let n = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: n },
                    experiments: o,
                } = (0, a.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = o.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        6900: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => n, o: () => r });
            var a = i(8655);
            let r = { [a.S.Dark]: 'ym-dark-theme', [a.S.Light]: 'ym-light-theme' },
                n = (e) => {
                    switch (e) {
                        case a.S.Light:
                        case a.S.Dark:
                            return r[e];
                        default:
                            return '';
                    }
                };
        },
        7019: (e) => {
            e.exports = {
                iconContainer: 'QueryToVibeBase_iconContainer__AM7_Y',
                root_withControls: 'QueryToVibeBase_root_withControls__h9kvG',
                comet: 'QueryToVibeBase_comet__TR7wA',
                root: 'QueryToVibeBase_root__YPyW_',
                root_loading: 'QueryToVibeBase_root_loading__ATBRE',
                caption: 'QueryToVibeBase_caption__QUrL9',
                'caption-pulse': 'QueryToVibeBase_caption-pulse__OYj1G',
                iconPulse: 'QueryToVibeBase_iconPulse__113Fc',
                icon: 'QueryToVibeBase_icon__GNNz8',
                meta: 'QueryToVibeBase_meta__hQX1A',
                controls: 'QueryToVibeBase_controls__MZ7Wo',
            };
        },
        7227: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => o });
            var a = i(5120),
                r = i(989),
                n = i(93512);
            let o = (e, t) => (0, a.wg)({ title: e.name, seeds: e.seeds, description: e.description, type: (0, r.a)(e.type), agent: (0, n.K)(t) });
        },
        7665: (e) => {
            e.exports = { ndaLabel: 'ShareVibeMenuItem_ndaLabel__LZvFN' };
        },
        8655: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var a = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        8824: (e, t, i) => {
            'use strict';
            i.d(t, { MusicHistoryPageStoreProvider: () => F });
            var a = i(34961),
                r = i(53892),
                n = i(5120),
                o = i(99711),
                s = i(7227);
            let l = (e) => {
                var t, i;
                let { wave: a, agent: r } = e;
                return (0, n.wg)({
                    ...(0, s.l)(a, r),
                    imageUrl: null == r || null == (t = r.cover) ? void 0 : t.uri,
                    colors: { average: '', waveText: '' },
                    backgroundColor: null == r || null == (i = r.cover) ? void 0 : i.color,
                });
            };
            var c = i(52643),
                d = i(74773),
                u = i(76626);
            let m = (e) => {
                    let { albumId: t, trackId: i } = e.data.itemId;
                    return t ? ''.concat(i, ':').concat(t) : i;
                },
                _ = (e) => {
                    if ('fullModel' in e.data) {
                        let { fullModel: t } = e.data;
                        return (0, n.wg)({ type: o.D.TRACK, id: m(e), loadingState: d.G.RESOLVE, data: (0, u.v)(t) });
                    }
                    return (0, n.wg)({ type: o.D.TRACK, id: m(e), data: null, loadingState: d.G.IDLE });
                };
            var v = i(14283),
                p = i(54020);
            let g = (e) => e.data.itemId.seeds.sort().join(',');
            var x = i(73245);
            let y = (e) => {
                    let { uid: t, kind: i } = e.data.itemId;
                    return ''.concat(t, ':').concat(i);
                },
                h = (e) => e.data.itemId.seeds.sort().join(',');
            var f = i(12622);
            let b = (e) => e.data.itemId.seeds.sort().join(','),
                C = (e) => {
                    var t, i;
                    let a =
                        null == (t = e.items)
                            ? void 0
                            : t
                                  .map((e) => {
                                      switch (e.context.type) {
                                          case o.D.ALBUM:
                                              return ((e, t) => {
                                                  let { data: i } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: a } = i;
                                                      return (0, n.wg)({
                                                          type: o.D.ALBUM,
                                                          available: a.available,
                                                          id: e.data.itemId.id,
                                                          meta: (0, c.s)({ album: a.album, artists: a.artists }),
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, n.wg)({
                                                      type: o.D.ALBUM,
                                                      available: !0,
                                                      id: e.data.itemId.id,
                                                      meta: null,
                                                      loadingState: d.G.IDLE,
                                                      tracks: t.map(_),
                                                  });
                                              })(e.context, e.tracks);
                                          case o.D.PLAYLIST:
                                              return ((e, t) => {
                                                  let { data: i, type: a } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: r } = i;
                                                      return (0, n.wg)({
                                                          type: a,
                                                          id: y(e),
                                                          meta: { ...(0, x.b)({ playlist: r.playlist }), tracksCount: r.tracksCount },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, n.wg)({ type: o.D.PLAYLIST, id: y(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case o.D.ARTIST:
                                              return ((e, t) => {
                                                  let { data: i, type: a } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: r } = i;
                                                      return (0, n.wg)({
                                                          type: a,
                                                          available: r.available,
                                                          id: e.data.itemId.id,
                                                          meta: (0, v.a)({ artist: r.artist }),
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, n.wg)({
                                                      type: a,
                                                      available: !0,
                                                      id: e.data.itemId.id,
                                                      meta: null,
                                                      loadingState: d.G.IDLE,
                                                      tracks: t.map(_),
                                                  });
                                              })(e.context, e.tracks);
                                          case o.D.WAVE:
                                              return ((e, t) => {
                                                  let { data: i, type: a } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: r } = i;
                                                      return (0, n.wg)({
                                                          type: a,
                                                          id: b(e),
                                                          meta: {
                                                              ...(0, f.e)(r.wave),
                                                              imageUrl: r.simpleWaveForegroundImageUrl,
                                                              backgroundColor: r.simpleWaveBackgroundColor,
                                                          },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, n.wg)({ type: a, id: b(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case o.D.MULTIVIBE_WAVE:
                                              return ((e, t) => {
                                                  let { data: i } = e;
                                                  return 'fullModel' in i
                                                      ? (0, n.wg)({
                                                            type: o.D.MULTIVIBE_WAVE,
                                                            id: g(e),
                                                            meta: l(i.fullModel),
                                                            loadingState: d.G.RESOLVE,
                                                            tracks: t.map(_),
                                                        })
                                                      : (0, n.wg)({ type: o.D.MULTIVIBE_WAVE, id: g(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case o.D.SEARCH:
                                          case o.D.OTHER:
                                              return ((e, t) => {
                                                  let { type: i } = e;
                                                  return (0, n.wg)({ type: i, id: (0, p.A)(), tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case o.D.QUERY_TO_VIBE:
                                              return ((e, t) => {
                                                  let { data: i } = e;
                                                  if ('fullModel' in i) {
                                                      let { fullModel: a } = i;
                                                      return (0, n.wg)({
                                                          type: o.D.QUERY_TO_VIBE,
                                                          id: h(e),
                                                          meta: { ...(0, s.l)(a.wave, a.agent) },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, n.wg)({ type: o.D.QUERY_TO_VIBE, id: h(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    return { date: e.date, blocks: null != (i = (0, n.wg)(a)) ? i : null };
                },
                k = (e) => (null == e ? void 0 : e.type) === o.D.WAVE || (null == e ? void 0 : e.type) === o.D.MULTIVIBE_WAVE;
            var T = i(59497);
            let A = n.gK.compose(
                n.gK.model({
                    id: n.gK.string,
                    type: n.gK.enumeration(Object.values(o.D)),
                    tabIndex: n.gK.number,
                    blockIndex: n.gK.number,
                    trackIndex: n.gK.maybeNull(n.gK.number),
                }),
                T.X,
            );
            var I = i(49573),
                E = i(7123);
            let N = (e) => ({ type: E.z4.Unloaded, meta: { id: e.entityId } });
            var S = i(96826);
            let j = n.gK
                    .compose(n.gK.model('MusicHistoryTrack', { type: n.gK.literal(o.D.TRACK), id: n.gK.string, data: n.gK.maybeNull(S.v) }), T.X)
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                        get entityId() {
                            var t;
                            if (!e.data) return e.id;
                            let { id: i, albums: a } = e.data,
                                r = null == (t = a[0]) ? void 0 : t.id;
                            return r ? ''.concat(i, ':').concat(r) : i;
                        },
                    }))
                    .named('MusicHistoryPlaylist'),
                L = n.gK.compose(n.gK.model('MusicHistoryBaseBlock', { id: n.gK.string, tracks: n.gK.array(j) }), T.X).views((e) => ({
                    get isShimmerVisible() {
                        return e.isNeededToLoad || e.isLoading || e.isRejected;
                    },
                    get isShimmerActive() {
                        return e.isLoading;
                    },
                    get contextId() {
                        return e.id;
                    },
                    get entitiesData() {
                        return e.tracks.map(N);
                    },
                })),
                M = L.props({ type: n.gK.literal(o.D.ALBUM), available: n.gK.boolean, meta: n.gK.maybeNull(I.J) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get autoflowSeeds() {
                            var t;
                            return ['album:'.concat(null == (t = e.meta) ? void 0 : t.id)];
                        },
                    }))
                    .named('MusicHistoryAlbum');
            var w = i(90544);
            let R = L.props({ type: n.gK.literal(o.D.ARTIST), available: n.gK.boolean, meta: n.gK.maybeNull(w.P) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get autoflowSeeds() {
                            var t;
                            return ['artist:'.concat(null == (t = e.meta) ? void 0 : t.id)];
                        },
                    }))
                    .named('MusicHistoryArtist'),
                P = n.gK
                    .model('MusicHistoryCommon', { id: n.gK.string, type: n.gK.union(n.gK.literal(o.D.OTHER), n.gK.literal(o.D.SEARCH)), tracks: n.gK.array(j) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get contextId() {
                            return e.tracks.map((e) => e.id).join(',');
                        },
                        get entitiesData() {
                            return e.tracks.map(N);
                        },
                    }));
            var O = i(78460);
            let D = L.props({ type: n.gK.literal(o.D.PLAYLIST), meta: n.gK.maybeNull(O.I) })
                .views((e) => ({
                    get key() {
                        return ''.concat(e.type, '_').concat(e.id);
                    },
                    get autoflowSeeds() {
                        var t, i;
                        return ['playlist:'.concat(null == (t = e.meta) ? void 0 : t.uid, '_').concat(null == (i = e.meta) ? void 0 : i.kind)];
                    },
                }))
                .named('MusicHistoryPlaylist');
            var B = i(41814),
                K = i(90420);
            let H = L.props({
                    id: n.gK.string,
                    type: n.gK.union(n.gK.literal(o.D.WAVE), n.gK.literal(o.D.MULTIVIBE_WAVE), n.gK.literal(o.D.QUERY_TO_VIBE)),
                    meta: n.gK.maybeNull(B.G),
                }).views((e) => ({
                    get key() {
                        return ''.concat(e.type, '_').concat(e.id);
                    },
                    get contextId() {
                        var t, i;
                        return null != (i = null == (t = e.meta) ? void 0 : t.stationId) ? i : K.M1;
                    },
                    get autoflowSeeds() {
                        var a;
                        return null == (a = e.meta) ? void 0 : a.seeds;
                    },
                    get isMultivibe() {
                        return e.type === o.D.MULTIVIBE_WAVE;
                    },
                })),
                U = n.gK.union(M, R, D, H, P),
                V = n.gK.model('MusicHistoryTab', { date: n.gK.string, blocks: n.gK.maybeNull(n.gK.array(U)) }),
                z = n.gK
                    .compose(
                        n.gK.model('MusicHistoryPage', {
                            indexesMap: n.gK.map(n.gK.number),
                            items: n.gK.maybeNull(n.gK.array(A)),
                            datesMap: n.gK.map(n.gK.boolean),
                            tabs: n.gK.maybeNull(n.gK.array(V)),
                        }),
                        T.X,
                    )
                    .views((e) => {
                        let t = {
                            get isEmpty() {
                                var i;
                                return (e.isResolved || e.isRejected) && (null == (i = e.tabs) ? void 0 : i.length) === 0;
                            },
                            get isShimmerVisible() {
                                return e.isNeededToLoad || e.isLoading || e.isRejected;
                            },
                            get isShimmerActive() {
                                return e.isLoading;
                            },
                            getStartAndEndIndexes(t) {
                                var i, a;
                                let r = t,
                                    n = t + 1;
                                return (
                                    (null == (i = e.items) ? void 0 : i.slice(t - 25 + 1, t).some((e) => !e.isResolved)) && (r = t - 25 + 1),
                                    (null == (a = e.items) ? void 0 : a.slice(t, t + 25).some((e) => !e.isResolved)) && (n = t + 25),
                                    [r, n]
                                );
                            },
                            getItemsToLoad(i) {
                                var a, r;
                                let [n, o] = t.getStartAndEndIndexes(i);
                                return null != (r = null == (a = e.items) ? void 0 : a.slice(n, o).filter((e) => !e.isResolved)) ? r : [];
                            },
                            isInObservationRange(t) {
                                var i;
                                return (0 !== t && t % 25 == 0) || (e.items && t === (null == (i = e.items) ? void 0 : i.length) - 1);
                            },
                            get dates() {
                                var a, r;
                                return null != (r = null == (a = e.tabs) ? void 0 : a.map((e) => e.date)) ? r : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            fillItemsAndIndexes() {
                                var t;
                                let i = 0;
                                ((e.items = (0, n.wg)([])),
                                    null == (t = e.tabs) ||
                                        t.forEach((t, a) => {
                                            var r;
                                            (e.datesMap.set(t.date, !1),
                                                null == (r = t.blocks) ||
                                                    r.forEach((t, r) => {
                                                        var n;
                                                        let o = t.id;
                                                        (e.indexesMap.set(''.concat(a, '_').concat(r, '_').concat(o), i),
                                                            null == (n = e.items) ||
                                                                n.push({
                                                                    id: o,
                                                                    type: t.type,
                                                                    tabIndex: a,
                                                                    blockIndex: r,
                                                                    trackIndex: null,
                                                                    loadingState: i < 25 ? d.G.RESOLVE : d.G.IDLE,
                                                                }),
                                                            ++i,
                                                            t.tracks.forEach((t, n) => {
                                                                var o;
                                                                (e.indexesMap.set(''.concat(a, '_').concat(r, '_').concat(n, '_').concat(t.id), i),
                                                                    null == (o = e.items) ||
                                                                        o.push({
                                                                            id: t.id,
                                                                            type: t.type,
                                                                            tabIndex: a,
                                                                            blockIndex: r,
                                                                            trackIndex: n,
                                                                            loadingState: i < 25 ? d.G.RESOLVE : d.G.IDLE,
                                                                        }),
                                                                    ++i);
                                                            }));
                                                    }));
                                        }));
                            },
                            setTrack(t, i) {
                                var a, r, n, o;
                                let { tabIndex: s, blockIndex: l, trackIndex: c } = t,
                                    { fullModel: m } = i.data;
                                if (null === c) return;
                                let _ = null == (o = e.tabs) || null == (n = o[s]) || null == (r = n.blocks) || null == (a = r[l]) ? void 0 : a.tracks[c];
                                _ && ((_.data = (0, u.v)(m)), (_.loadingState = d.G.RESOLVE));
                            },
                            setAlbum(t, i) {
                                var a, r, n;
                                let { tabIndex: s, blockIndex: l } = t,
                                    { fullModel: u } = i.data,
                                    m = null == (n = e.tabs) || null == (r = n[s]) || null == (a = r.blocks) ? void 0 : a[l];
                                (null == m ? void 0 : m.type) === o.D.ALBUM &&
                                    ((m.meta = (0, c.s)({ album: u.album, artists: u.artists })), (m.loadingState = d.G.RESOLVE));
                            },
                            setArtist(t, i) {
                                var a, r, n;
                                let { tabIndex: s, blockIndex: l } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (n = e.tabs) || null == (r = n[s]) || null == (a = r.blocks) ? void 0 : a[l];
                                (null == u ? void 0 : u.type) === o.D.ARTIST && ((u.meta = (0, v.a)({ artist: c.artist })), (u.loadingState = d.G.RESOLVE));
                            },
                            setPlaylist(t, i) {
                                var a, r, n;
                                let { tabIndex: s, blockIndex: l } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (n = e.tabs) || null == (r = n[s]) || null == (a = r.blocks) ? void 0 : a[l];
                                (null == u ? void 0 : u.type) === o.D.PLAYLIST &&
                                    ((u.meta = { ...(0, x.b)({ playlist: c.playlist }), tracksCount: c.tracksCount }), (u.loadingState = d.G.RESOLVE));
                            },
                            setVibe(t, i) {
                                var a, r, n;
                                let { tabIndex: o, blockIndex: s } = t,
                                    { fullModel: l } = i.data,
                                    c = null == (n = e.tabs) || null == (r = n[o]) || null == (a = r.blocks) ? void 0 : a[s];
                                k(c) &&
                                    ((c.meta = { ...(0, f.e)(l.wave), imageUrl: l.simpleWaveForegroundImageUrl, backgroundColor: l.simpleWaveBackgroundColor }),
                                    (c.loadingState = d.G.RESOLVE));
                            },
                            setMultivibe(t, i) {
                                var a, r, n;
                                let { tabIndex: o, blockIndex: s } = t,
                                    { fullModel: c } = i.data,
                                    u = null == (n = e.tabs) || null == (r = n[o]) || null == (a = r.blocks) ? void 0 : a[s];
                                k(u) && ((u.meta = l(c)), (u.loadingState = d.G.RESOLVE));
                            },
                            getMusicHistory: (0, n.L3)(function* () {
                                let { musicHistoryResource: i, modelActionsLogger: a } = (0, n._$)(e);
                                if (e.loadingState !== d.G.PENDING)
                                    try {
                                        e.loadingState = d.G.PENDING;
                                        let a = yield i.getMusicHistory({ fullModelsCount: 25 }),
                                            r = ((e) => {
                                                let t = { historyTabs: [] },
                                                    i = 0;
                                                for (let n of e.historyTabs) {
                                                    var a, r;
                                                    if (i > 1e3) break;
                                                    let e = { ...n, items: [] };
                                                    for (let t of null != (a = n.items) ? a : []) {
                                                        if (i > 1e3) break;
                                                        let a = { ...t, tracks: [] };
                                                        for (let e of t.tracks) {
                                                            if (i > 1e3) break;
                                                            (a.tracks.push(e), ++i);
                                                        }
                                                        null == (r = e.items) || r.push(a);
                                                    }
                                                    e.items && e.items.length > 0 && t.historyTabs.push(e);
                                                }
                                                return t;
                                            })(a);
                                        ((e.tabs = (0, n.wg)(r.historyTabs.map(C))), t.fillItemsAndIndexes(), (e.loadingState = d.G.RESOLVE));
                                    } catch (t) {
                                        (a.error(t), (e.loadingState = d.G.REJECT));
                                    }
                            }),
                            getItems: (0, n.L3)(function* (i) {
                                let { musicHistoryResource: a, modelActionsLogger: r } = (0, n._$)(e);
                                try {
                                    let r = e.getItemsToLoad(i);
                                    r.forEach((e) => {
                                        e.loadingState = d.G.RESOLVE;
                                    });
                                    let n = yield a.getMusicHistoryItems({
                                            items: r
                                                .map((e) => {
                                                    switch (e.type) {
                                                        case o.D.ARTIST:
                                                        case o.D.ALBUM:
                                                            return { type: e.type, data: { itemId: { id: e.id } } };
                                                        case o.D.PLAYLIST: {
                                                            let [t, i] = e.id.split(':');
                                                            return { type: e.type, data: { itemId: { uid: Number(t), kind: Number(i) } } };
                                                        }
                                                        case o.D.WAVE:
                                                        case o.D.MULTIVIBE_WAVE:
                                                            return { type: e.type, data: { itemId: { seeds: e.id.split(',') } } };
                                                        case o.D.TRACK: {
                                                            let [t, i] = e.id.split(':');
                                                            return { type: e.type, data: { itemId: { trackId: String(t), albumId: i } } };
                                                        }
                                                        default:
                                                            return null;
                                                    }
                                                })
                                                .filter((e) => e),
                                        }),
                                        s = r.reduce((e, t) => {
                                            let i = ''.concat(t.type, '_').concat(t.id);
                                            if (i in e) {
                                                var a;
                                                null == (a = e[i]) || a.push(t);
                                            } else e[i] = [t];
                                            return e;
                                        }, {});
                                    n.items.forEach((e) => {
                                        var i;
                                        null ==
                                            (i =
                                                s[
                                                    ((e) => {
                                                        switch (e.type) {
                                                            case o.D.ALBUM:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case o.D.TRACK:
                                                                return ''.concat(e.type, '_').concat(m(e));
                                                            case o.D.WAVE:
                                                                return ''.concat(e.type, '_').concat(b(e));
                                                            case o.D.MULTIVIBE_WAVE:
                                                                return ''.concat(e.type, '_').concat(g(e));
                                                            case o.D.PLAYLIST:
                                                                return ''.concat(e.type, '_').concat(y(e));
                                                            case o.D.ARTIST:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case o.D.QUERY_TO_VIBE:
                                                                return ''.concat(e.type, '_').concat(h(e));
                                                        }
                                                    })(e)
                                                ]) ||
                                            i.forEach((i) => {
                                                switch (e.type) {
                                                    case o.D.ALBUM:
                                                        t.setAlbum(i, e);
                                                        break;
                                                    case o.D.TRACK:
                                                        t.setTrack(i, e);
                                                        break;
                                                    case o.D.WAVE:
                                                        t.setVibe(i, e);
                                                        break;
                                                    case o.D.MULTIVIBE_WAVE:
                                                        t.setMultivibe(i, e);
                                                        break;
                                                    case o.D.PLAYLIST:
                                                        t.setPlaylist(i, e);
                                                        break;
                                                    case o.D.ARTIST:
                                                        t.setArtist(i, e);
                                                }
                                                i.loadingState = d.G.RESOLVE;
                                            });
                                    });
                                } catch (e) {
                                    r.error(e);
                                }
                            }),
                            setDatesMap(t, i) {
                                e.datesMap.set(t, i);
                            },
                            reset() {
                                ((e.items = null), (e.tabs = null), e.indexesMap.clear(), e.datesMap.clear(), (e.loadingState = d.G.IDLE));
                            },
                        };
                        return t;
                    }),
                W = { loadingState: d.G.IDLE, indexesMap: {}, items: null, datesMap: {}, tabs: null },
                { pageStoreProvider: Y } = (0, a.W)({ createStore: (e) => z.create(W, e), patchKey: r.n.MUSIC_HISTORY }),
                F = Y;
        },
        8840: (e, t, i) => {
            'use strict';
            i.d(t, { BL: () => d, Gv: () => l, L5: () => c });
            var a,
                r = i(53548),
                n = {
                    597: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let a = i(810),
                            { innerWidth: r = 0, innerHeight: n = 0 } = window;
                        function o(e) {
                            let { top: t, right: i, bottom: a, left: o } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= n) || (a >= 0 && a <= n)) && ((o >= 0 && o <= r) || (i >= 0 && i <= r));
                        }
                        function s(e) {
                            var t, i;
                            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (i = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, a)) ? i : e.attributes[0];
                        }
                        function l(e, t) {
                            let i = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, i);
                                });
                            }, t);
                            return i;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = o),
                            (t.getElementNameByDataAttribute = s),
                            (t.createIntersectionObserver = l),
                            (t.useIntersectionObserver = function (e, i, r) {
                                let [{ freezeOnceVisible: n, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof i || void 0 === i ? [t.defaultOptions, i] : [{ ...t.defaultOptions, ...i }, r],
                                    [m, _] = (0, a.useState)({}),
                                    v = (0, a.useRef)(new Set()),
                                    p = (0, a.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : l((e) => {
                                                      let t = s(e.target);
                                                      if (t && p) {
                                                          if (v.current.has(t)) return;
                                                          (_((i) => ({ ...i, [t]: { isIntersecting: e.isIntersecting } })),
                                                              n && e.isIntersecting && (v.current.add(t), p.unobserve(e.target)));
                                                      }
                                                  }, d),
                                        [u],
                                    );
                                return (
                                    (0, a.useLayoutEffect)(
                                        () => (
                                            p &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = o(e.current))) {
                                                            let t = s(e.current);
                                                            _((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || p.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                p && p.disconnect();
                                            }
                                        ),
                                        [u, p, e.length],
                                    ),
                                    m
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                o = {},
                s = (function e(t) {
                    var i = o[t];
                    if (void 0 !== i) return i.exports;
                    var a = (o[t] = { exports: {} });
                    return (n[t](a, a.exports, e), a.exports);
                })(597);
            s.__esModule;
            var l = s.createIntersectionObserver;
            s.defaultOptions;
            var c = s.getElementNameByDataAttribute;
            s.isInViewportNow;
            var d = s.useIntersectionObserver;
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
        10829: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => y });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(17392),
                l = i(34126),
                c = i(39079),
                d = i(72288),
                u = i(39267),
                m = i(13619),
                _ = i(73805),
                v = i(15232),
                p = i(56712),
                g = i(26243),
                x = i.n(g);
            let y = (0, n.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: n,
                        className: g,
                        withDNDBlock: y,
                        isDragging: h,
                        draggingClassName: f,
                        ignoreDislikedStyles: b,
                        withSecondaryColor: C,
                        handleRemove: k,
                        withDislike: T,
                        withTrailer: A = !0,
                        beforeTitle: I,
                        removeButtonAriaLabel: E,
                        hideControls: N,
                    } = e,
                    S = (0, c.D)({ playContextParams: n, entityId: i.entityId }),
                    {
                        settings: { isMobile: j },
                    } = (0, d.g)(),
                    L = (0, l.X)(i.trackSource, { isMobile: j }),
                    M = (0, o.useCallback)(
                        (e) =>
                            (0, a.jsx)(u.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: b,
                                radius: 'xs',
                                ...e,
                            }),
                        [b, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, a.jsx)(p.C, {
                    className: (0, r.$)(g, { [x().trackWithDots]: y, [x().important]: y }),
                    track: i,
                    beforeBlock: y ? (0, a.jsx)(m.O, { className: (0, r.$)(x().dots, f), isDragging: h }) : void 0,
                    meta: (0, a.jsx)(v.j, { withArtistLink: L, beforeTitle: I, track: i, ignoreDislikedStyles: b, withSecondaryColor: C }),
                    playButtonCellRender: M,
                    controls: (0, a.jsx)(_.Q, {
                        track: i,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: b,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: C,
                        handleRemove: k,
                        withDislike: T,
                        withTrailer: A,
                        removeButtonAriaLabel: E,
                        hideControls: N,
                    }),
                    ...S,
                    'data-test-id': s.Kq.track.TRACK_PLAYLIST,
                });
            });
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
        12622: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => o });
            var a = i(5120),
                r = i(989),
                n = i(93512);
            let o = (e) => {
                var t, i, o, s;
                return (0, a.wg)({
                    title: e.title,
                    description: e.header,
                    seeds: e.seeds,
                    animationUrl: e.animationUrl,
                    backgroundImageUrl: e.backgroundImageUrl,
                    imageUrl: e.imageUrl,
                    colors: {
                        average: null != (o = null == (t = e.colors) ? void 0 : t.average) ? o : '',
                        waveText: null != (s = null == (i = e.colors) ? void 0 : i.waveText) ? s : '',
                    },
                    agent: (0, n.K)(e.agent),
                    type: (0, r.a)(e.type),
                });
            };
        },
        12906: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            var a = i(5120),
                r = i(57285);
            let n = (e) => {
                let t = (0, r.n)(e);
                return (0, a.wg)(t);
            };
        },
        13607: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { _: () => a }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(a || (a = {})));
        },
        13619: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => l });
            var a = i(88800),
                r = i(65724),
                n = i(52300),
                o = i(30907),
                s = i.n(o);
            let l = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, a.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(s().root, { [s().root_active]: t }, i), 'aria-hidden': !0 });
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
        14283: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => s });
            var a = i(5120),
                r = i(51724),
                n = i(12906),
                o = i(53399);
            let s = (e) => {
                var t, i;
                let { artist: s, trailer: l, isComposer: c, likesCount: d } = e,
                    u = (0, o.m)(s.decomposed),
                    { available: m, disclaimers: _ } = (0, r.f)(s);
                return (0, a.wg)({
                    id: String(s.id),
                    name: s.name,
                    // for PulseSync WebHost: BEGIN accept alternate addon album cover fields
                    coverUri: (null == (t = s.cover) ? void 0 : t.uri) ?? s.coverUri ?? s.ogImage,
                    // for PulseSync WebHost: END accept alternate addon album cover fields
                    various: s.various,
                    decomposed: u,
                    isAvailable: m,
                    disclaimers: _,
                    isComposer: c,
                    averageColor: null == (i = s.cover) ? void 0 : i.color,
                    trailer: (0, n.m)(l),
                    likesCount: d,
                });
            };
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
        14347: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => p });
            var a = i(88800),
                r = i(84961),
                n = i(53548),
                o = i(17392),
                s = i(39079),
                l = i(98644),
                c = i(73805),
                d = i(15232),
                u = i(99479),
                m = i(56712),
                _ = i(33133),
                v = i.n(_);
            let p = (0, r.PA)((e) => {
                let { track: t, albumArtists: i, position: r, playContextParams: _, withLightning: p } = e,
                    g = (0, s.D)({ playContextParams: _, entityId: t.entityId }),
                    x = (0, n.useCallback)((e) => (0, a.jsx)(u.G, { track: t, position: r, className: v().playButtonCell, ...e }), [t, r]);
                return (0, a.jsx)(m.C, {
                    track: t,
                    withLightning: p,
                    meta: (0, a.jsx)(d.j, { variant: l.X.ALBUM, albumArtists: i, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: x,
                    controls: (0, a.jsx)(c.Q, { withLightning: p, track: t, className: v().controlsBarCell, utmLink: _.contextData.utmLink }),
                    ...g,
                    'data-test-id': o.Kq.track.TRACK_ALBUM,
                });
            });
        },
        14912: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => r });
            var a = i(53548);
            let r = () =>
                (0, a.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        15232: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => A });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(58390),
                c = i(17392),
                d = i(79070),
                u = i(17610),
                m = i(29504),
                _ = i(13946),
                v = i(55693),
                p = i(72288),
                g = i(24548),
                x = i(85587),
                y = i(90224),
                h = i(91292),
                f = i(7608),
                b = i(6667),
                C = i(85463),
                k = i(65462),
                T = i.n(k);
            let A = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: k,
                        withExplicitMark: A,
                        withSecondaryColor: I,
                        captionSize: E = 'm',
                        explicitSize: N = 'xxxs',
                        withAllArtistsTitle: S,
                        textClassName: j,
                        artistsClassName: L,
                        ignoreDislikedStyles: M,
                        withCustomTooltip: w = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: P,
                        beforeTitle: O,
                        withArtistLink: D,
                        variant: B,
                        withTrackLink: K,
                        afterTitle: H,
                        withContextMenuArtists: U,
                    } = e,
                    { formatMessage: V } = (0, s.A)(),
                    { sendNavigateSearchFeedback: z } = (0, v.z)(),
                    {
                        settings: { isMobile: W },
                        slam: Y,
                    } = (0, p.g)(),
                    F = (0, b.$)({ withCustomTooltip: w }),
                    G = (0, l.useSearchParams)(),
                    $ = (0, f.B)(n, {
                        isMobile: W,
                        isOfflineModeEnabled: Y.isOfflineModeEnabled,
                        albumArtists: k,
                        withTrackLink: K,
                        withArtistLink: D,
                        variant: B,
                        withExplicitMark: A,
                        query: P ? Object.fromEntries(G) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: q,
                        tooltipText: Q,
                        titleAttribute: Z,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, i, a) => {
                        var r, n;
                        let { canEnableCustomTooltip: o, isMobile: s } = i,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, a),
                            c = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (r = t.version) ? r : ''),
                            d = a({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(d, ' ').concat(null != (n = e.version) ? n : ''),
                            tooltipText: c,
                            isTooltipEnabled: o && !s,
                            titleAttribute: !o && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: o ? void 0 : t.version,
                        };
                    })(n, $, { canEnableCustomTooltip: F, isMobile: W }, V),
                    et = (0, C.O)({ track: n, onNavigate: z, withSavingQueryParams: P, entityType: x.n.TRACK }),
                    ei = (0, o.useCallback)(
                        (e) =>
                            (0, a.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Q,
                                hoverSettings: g.V,
                                children: (0, a.jsx)(m.HL, {
                                    className: (0, r.$)(T().text, T().title),
                                    type: 'entity',
                                    size: E,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [E, X, Q, ee],
                    ),
                    ea = (0, d.L)(() =>
                        $.shouldShowRemovedTitle
                            ? (0, a.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Q,
                                  hoverSettings: g.V,
                                  children: (0, a.jsx)(m.HL, {
                                      className: (0, r.$)(T().text, T().title),
                                      type: 'entity',
                                      size: E,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Z,
                                      children: X,
                                  }),
                              })
                            : $.link
                              ? (0, a.jsx)(h.N, {
                                    onClick: et,
                                    className: T().albumLink,
                                    href: $.link.href,
                                    'aria-label': q,
                                    title: Z,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ei(),
                                })
                              : ei({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, o.useMemo)(() => +!!R, [R]);
                return (0, a.jsx)('div', {
                    className: (0, r.$)(T().root, { [T().root_disabled]: !n.isAvailable, [T().root_disliked]: n.isDisliked && !M, [T().root_withSecondaryColor]: I }, t),
                    children: (0, a.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(T().titleContainer, { [T().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, a.jsxs)(m.HL, {
                                        className: (0, r.$)(T().text, j),
                                        type: 'entity',
                                        size: E,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            O,
                                            ea,
                                            $.version &&
                                                (0, a.jsxs)(m.HL, {
                                                    className: (0, r.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: E,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', $.version],
                                                }),
                                        ],
                                    }),
                                    $.explicitMark &&
                                        (0, a.jsx)(y.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: N,
                                            variant: $.explicitMark,
                                            className: T().explicitMark,
                                            trackId: n.id,
                                        }),
                                    H,
                                ],
                            }),
                            $.artists.length > 0 &&
                                (0, a.jsx)(_.i, {
                                    className: (0, r.$)(T().text, { [T().artists]: R }, L, j),
                                    withAllArtistsTitle: S,
                                    linkClassName: (0, r.$)(T().text, T().link),
                                    captionClassName: (0, r.$)(T().text, T().artistCaption),
                                    artists: $.artists,
                                    withLink: $.withArtistLink,
                                    lineClamp: er,
                                    captionSize: E,
                                    withContextMenu: U,
                                }),
                        ],
                    }),
                });
            });
        },
        15253: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => r });
            var a = i(42824),
                r = (function (e) {
                    return (
                        (e.Theme = 'theme'),
                        (e.AllowAnalyticsLogs = 'AllowAnalyticsLogs'),
                        (e.NavbarCollapsed = 'navbarCollapsed'),
                        (e.SessionHistoryState = 'sessionHistoryState'),
                        (e.SessionId = 'Session_id'),
                        (e.YmPlayerRepeatMode = 'ymPlayerRepeatMode'),
                        (e.YmPlayerVolume = 'ymPlayerVolume'),
                        (e.YmPlayerPrevVolume = 'ymPlayerPrevVolume'),
                        (e.YmPlayerShuffle = 'ymPlayerShuffle'),
                        (e.YmPlayerQuality = 'ymPlayerQuality'),
                        (e.YmUid = 'ymUid'),
                        (e.YandexLogin = 'yandex_login'),
                        (e.YandexUid = 'yandexuid'),
                        (e.Oauth = 'oauth'),
                        (e.OauthState = 'oauthState'),
                        (e.ForcedLoginAttempt = 'forcedLoginAttempt'),
                        (e.ArtistDonationButtonOnbordingShowed = 'ArtistDonationButtonOnbordingShowed'),
                        (e.TrailerButtonOnbordingShowed = 'TrailerButtonOnbordingShowed'),
                        (e.ConcertsTabOnboardingShowed = 'ConcertsTabOnboardingShowed'),
                        (e[(e.SavedUserLanguage = a.s)] = 'SavedUserLanguage'),
                        (e.ExEx = 'ExEx'),
                        (e.EqualizerConfig = 'EqualizerConfig'),
                        (e.EnableMetricsPluginDebugMode = 'EnableMetricsPluginDebugMode'),
                        (e.EnableYnisonMetricsDebugMode = 'EnableYnisonMetricsDebugMode'),
                        (e.OverwrittenExperiments = 'overwrittenExperiments'),
                        (e.Offer = 'offer'),
                        (e.OfflineMode = 'offlineMode'),
                        (e.NavbarDownloadBarIsHidden = 'navbarDownloadBarIsHidden'),
                        (e.OfflineDegradation = 'offlineDegradation'),
                        (e.DesktopPaywall = 'desktopPaywall'),
                        (e.LiteVersionMode = 'liteVersionMode'),
                        (e.DownloadMobileApp = 'downloadMobileApp'),
                        (e.MainPageEntryPointPlayedAnimations = 'mainPageEntryPointPlayedAnimations'),
                        (e.HideDeeplinkAndOnelink = 'hideDeeplinkAndOnelink'),
                        (e.YnisonDeviceId = 'ynisonDeviceId'),
                        (e.CrossFadeMode = 'crossFadeMode'),
                        (e.CustomPlayerThumbConfig = 'CustomPlayerThumbConfig'),
                        (e.BuySubscriptionParams = 'buySubscriptionParams'),
                        (e.EnableCrossfadeDebugMode = 'EnableCrossfadeDebugMode'),
                        (e.EnableBurstDebounceDebugMode = 'EnableBurstDebounceDebugMode'),
                        (e.ConcertLocation = 'concertLocation'),
                        e
                    );
                })({});
        },
        16112: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => I });
            var a = i(88800),
                r = i(96706),
                n = i(53548),
                o = i(2058),
                s = i(42078),
                l = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                m = i(65724),
                _ = i(84961),
                v = i(17392),
                p = i(79070),
                g = i(90688),
                x = i(97956),
                y = i(90420),
                h = i(15077),
                f = i(33719),
                b = i(55211),
                C = i(14329),
                k = i.n(C);
            let T = (0, _.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: r } = (0, d.g)(),
                    n = r.checkExperiment(x.z.WebNextWaveAgentExperiment, 'on'),
                    o = t.type === y.q7,
                    s = (0, p.L)(() => {
                        var e;
                        return n && t.agent
                            ? (0, a.jsx)(b.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, m.$)(k().view, { [k().multivibeContainer]: o }),
                                  coverClassName: (0, m.$)({ [k().multivibeCover]: o }),
                                  entityCoverClassName: (0, m.$)({ [k().multivibeAvatar]: o }),
                                  controlClassName: (0, m.$)({ [k().multivibeControl]: o }),
                              })
                            : (0, a.jsx)(g._V, {
                                  className: k().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': v.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = n && t.agent ? void 0 : 'round';
                return (0, a.jsx)(f.k, {
                    closeToast: i,
                    entityVariant: h.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: s,
                    radius: l,
                    className: k().root,
                });
            });
            var A = i(93512);
            let I = (e) => {
                let { user: t, pinsCollection: i } = (0, d.g)(),
                    { notify: m } = (0, c.l)(),
                    { formatMessage: _ } = (0, o.A)(),
                    [v, p] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void m((0, a.jsx)(u.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (v) return;
                    let n = { ...(0, r.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        o = (0, r.HO)(i.get(e.pinId));
                    p(!0);
                    let c = await e.togglePin();
                    (p(!1),
                        o &&
                            o.type === s._.WAVE_ITEM &&
                            o.data.backgroundImageUrl &&
                            ((n.backgroundImageUrl = o.data.backgroundImageUrl), (n.colors = o.data.colors), (n.agent = o.data.agent)),
                        c &&
                            'object' == typeof c &&
                            'data' in c &&
                            (c.data.backgroundImageUrl && (n.backgroundImageUrl = c.data.backgroundImageUrl),
                            c.data.colors && (n.colors = { average: c.data.colors.average, waveText: c.data.colors.waveText }),
                            c.data.agent && (n.agent = (0, A.K)(c.data.agent))),
                        c
                            ? m((0, a.jsx)(T, { vibe: n }), { containerId: l.u.INFO })
                            : m((0, a.jsx)(u.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [_, m, v, i, t.isAuthorized, e]);
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
        18243: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => r });
            var a = i(42078);
            let r = (e) => {
                let { uid: t, kind: i } = e;
                return ''.concat(a._.PLAYLIST_ITEM).concat(t, '_').concat(i);
            };
        },
        18486: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => h });
            var a = i(88800),
                r = i(65724),
                n = i(53548),
                o = i(97234),
                s = i(42592),
                l = i(70598),
                c = i(17392),
                d = i(52300),
                u = i(90688),
                m = i(7555),
                _ = i(19994),
                v = i(29504),
                p = i(91292),
                g = i(16782),
                x = i.n(g);
            let y = (e) => {
                    let {
                        className: t,
                        coverUrl: i,
                        labeledForId: g,
                        subTitle: y,
                        title: h,
                        description: f,
                        viewAllActionLink: b,
                        controls: C,
                        titleSize: k = 'm',
                        coverBackgroundColor: T,
                        coverRadius: A = 's',
                        titleClassName: I,
                        titleLineClamp: E,
                        fallbackIconVariant: N,
                        available: S = !0,
                        onViewAllAction: j,
                        titleChildren: L,
                        children: M,
                        headingRef: w,
                        coverContainerClassName: R,
                        headingVariant: P = 'h3',
                        withDescriptionWidthLimit: O = !0,
                        isShimmerVisible: D,
                        isShimmerActive: B,
                        withCover: K,
                        withDescription: H,
                        forwardRef: U,
                        shimmerCoverClassName: V,
                        shouldSendAnalyticsOnLoaded: z,
                        ...W
                    } = e;
                    (0, s.W)({ enabled: !!z });
                    let Y = (0, n.useRef)(null),
                        F = i || K,
                        G = f || H,
                        $ = (0, n.useCallback)(() => {
                            Y.current && 'focus' in Y.current && Y.current.focus();
                        }, []),
                        X = (0, l.S)(),
                        q = (0, n.useCallback)(() => {
                            j ? j() : X({ to: o.AppScreen.Link });
                        }, [X, j]),
                        Q = (0, n.useMemo)(
                            () =>
                                h && b && S
                                    ? (0, a.jsxs)(p.N, {
                                          className: x().title,
                                          containerClassName: x().linkContainer,
                                          textClassName: x().linkText,
                                          icon: (0, a.jsx)(d.I, { className: x().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: b,
                                          onClick: q,
                                          'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, a.jsx)(v.DZ, {
                                                  id: g,
                                                  className: (0, r.$)(x().heading, I),
                                                  variant: P,
                                                  size: k,
                                                  weight: 'bold',
                                                  lineClamp: E,
                                                  ref: w,
                                                  children: h,
                                              }),
                                              L,
                                          ],
                                      })
                                    : (0, a.jsxs)('div', {
                                          className: x().title,
                                          children: [
                                              (0, a.jsx)(v.DZ, {
                                                  id: g,
                                                  className: (0, r.$)(x().heading, I, { [x().heading_notAvailable]: !S }),
                                                  variant: P,
                                                  size: k,
                                                  weight: 'bold',
                                                  lineClamp: E,
                                                  ref: w,
                                                  'data-test-id': c.S7.BLOCK_HEADER_TITLE,
                                                  children: h,
                                              }),
                                              L,
                                          ],
                                      }),
                            [S, q, w, P, g, h, I, E, k, b, L],
                        ),
                        Z = (0, n.useMemo)(() => (H && D ? (0, a.jsx)(_.W, { isActive: B, className: x().shimmerDescription }) : f), [H, D, f, B]),
                        J = (0, n.useMemo)(
                            () =>
                                K && D
                                    ? (0, a.jsx)(_.W, { isActive: B, className: (0, r.$)(x().shimmerCover, V), radius: 's' })
                                    : (0, a.jsx)(u._V, {
                                          src: i,
                                          fallbackIconVariant: N,
                                          style: { backgroundColor: T },
                                          className: x().cover,
                                          ref: Y,
                                          onClick: $,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': c.S7.BLOCK_HEADER_COVER,
                                      }),
                            [T, i, N, $, B, D, V, K],
                        );
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(x().root, t),
                        ref: U,
                        ...W,
                        'data-test-id': c.S7.BLOCK_HEADER,
                        children: [
                            (0, a.jsxs)('div', {
                                className: x().start,
                                children: [
                                    F && (0, a.jsx)(m.t, { radius: A, className: (0, r.$)(x().coverContainer, R), children: J }),
                                    (0, a.jsxs)('div', {
                                        className: x().textContainer,
                                        children: [
                                            y,
                                            Q,
                                            G &&
                                                (0, a.jsx)(v.HL, {
                                                    id: ''.concat(g, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: O ? 2 : void 0,
                                                    className: (0, r.$)(x().description, { [x().description_widthLimit]: O }),
                                                    'data-test-id': c.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: Z,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            C || M,
                        ],
                    });
                },
                h = (0, n.forwardRef)((e, t) => (0, a.jsx)(y, { forwardRef: t, ...e }));
        },
        19994: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => s });
            var a = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (r && (r += ' '), (r += a));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => r }));
                        let r = a;
                    },
                    7998: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'JD1RZC0EtdwegdYvGm6W',
                            root_active: 'K4G7ASZk9TWzXzAWMZKF',
                            'gradient-horizontal': 'GTZfWL5aq48rDurR2xQI',
                            root_radius_xs: 'PyJ4CgcZYC2CpTwW_q0e',
                            root_radius_s: 'Ig8cmdGxncIa4g0mjlzw',
                            root_radius_m: 'lJbeO5iovzBwUTpu7hFA',
                            root_radius_l: 'Gc3Wyk8uCohdTadkf7NR',
                            root_radius_xl: 'iKi9AOB1TOi3ZWzmbCkq',
                            root_radius_xxl: 'nYTL841hItMUZhvJq_ob',
                            root_radius_xxxl: 'LXGqiB6_V45plhG242mA',
                            root_radius_round: 'psTzstoF82tSOz1JHMB3',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var r = null;
                            if ((void 0 !== a && (r = '' + a), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var n in ((a = {}), t)) 'key' !== n && (a[n] = t[n]);
                            else a = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7141: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = a(i(7998));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: i, radius: a = 'm', width: s, height: l, children: c, ...d } = e,
                                u = {};
                            return (
                                void 0 !== s && (u.width = 'string' == typeof s ? s : ''.concat(s, 'px')),
                                void 0 !== l && (u.height = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                (0, r.jsx)('div', {
                                    className: (0, n.clsx)(o.default.root, o.default['root_radius_'.concat(a)], { [o.default.root_active]: t }, i),
                                    'aria-live': t ? 'polite' : 'off',
                                    'aria-busy': t,
                                    ...d,
                                    style: u,
                                    children: c,
                                })
                            );
                        };
                    },
                },
                r = {};
            function n(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (a[e].call(i.exports, i, i.exports, n), i.exports);
            }
            ((n.d = (e, t) => {
                for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X', { value: !0 }), (o.q = void 0));
                var e = n(7141);
                Object.defineProperty(o, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.Shimmer;
                    },
                });
            })();
            var s = o.q;
            o.X;
        },
        20562: (e, t, i) => {
            'use strict';
            i.d(t, { MusicHistoryPageSuspenseLoader: () => p });
            var a = i(88800),
                r = i(88969),
                n = i(66719),
                o = i(29504),
                s = i(94058),
                l = i(86790),
                c = i(60266),
                d = i(56248),
                u = i(76099),
                m = i(82007),
                _ = i.n(m),
                v = i(65600);
            let p = () =>
                (0, a.jsxs)('div', {
                    className: _().root,
                    children: [
                        (0, a.jsxs)('div', {
                            className: _().headerContainer,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: _().header,
                                    children: [
                                        (0, a.jsx)(d.L, { withForwardControl: !1 }),
                                        (0, a.jsx)(o.DZ, {
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: (0, a.jsx)(r.A, { id: 'music-history.title' }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(s.F, { className: _().carousel, carouselElement: (0, a.jsx)(u.zr, { isActive: !0, className: _().tabs, count: 5 }) }),
                            ],
                        }),
                        (0, a.jsxs)(n.N, {
                            className: _().scroll,
                            containerClassName: _().scrollContainer,
                            children: [
                                (0, a.jsx)('div', { className: _().content, children: (0, a.jsx)(v.v, { isActive: !0 }) }),
                                (0, a.jsx)(c.A, { children: (0, a.jsx)(l.w, { className: _().footer }) }),
                            ],
                        }),
                    ],
                });
        },
        21284: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { h: () => a }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(a || (a = {})));
        },
        21869: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => v });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(97234),
                s = i(91177),
                l = i(66610),
                c = i(29993),
                d = i(72288),
                u = i(93091),
                m = i(27817),
                _ = i(16112);
            let v = (0, n.PA)((e) => {
                let { vibe: t, onLikeClick: i, className: n, iconClassName: v, likeActiveClassName: p } = e,
                    {
                        user: g,
                        settings: { isMobile: x },
                    } = (0, d.g)(),
                    y = (0, s.D)(),
                    h = (0, l.D)(),
                    f = (0, _.A)(t),
                    b = (0, c.c)(() => {
                        (h({ actionType: t.isLiked ? o.ActionType.Unlike : o.ActionType.Like, userInteractionType: o.UserInteractionType.Tap }), i());
                    });
                return (0, a.jsxs)('div', {
                    ref: y,
                    children: [
                        !x && (0, a.jsx)(m.L, { className: n, iconClassName: v, onClick: f, isPinned: t.isPinned }),
                        (0, a.jsx)(u.T, { className: (0, r.$)(n, t.isLiked && p), iconClassName: v, onClick: b, isLiked: t.isLiked, disabled: !g.isAuthorized }),
                    ],
                });
            });
        },
        22983: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { y: () => a }),
                (function (e) {
                    ((e.DEFAULT = 'default'), (e.MIX = 'mix'), (e.Q2V = 'q2v'), (e.MULTIVIBE = 'multivibe'));
                })(a || (a = {})));
        },
        25555: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => u });
            var a = i(88800),
                r = i(53548),
                n = i(2058),
                o = i(29993),
                s = i(66943),
                l = i(29595),
                c = i(74965),
                d = i(72288);
            let u = (e) => {
                let { action: t, notification: i, showNotificationOnMobile: u = !1 } = e,
                    {
                        user: m,
                        settings: { isMobile: _ },
                    } = (0, d.g)(),
                    { formatMessage: v } = (0, n.A)(),
                    { notify: p } = (0, c.l)(),
                    g = (0, r.useRef)(!1);
                return (0, o.c)(async () => {
                    if (!m.isAuthorized) return void p((0, a.jsx)(s.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (!g.current) {
                        g.current = !0;
                        try {
                            (await t())
                                ? (!_ || u) && p(i, { containerId: l.u.INFO })
                                : p((0, a.jsx)(s.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR });
                        } finally {
                            g.current = !1;
                        }
                    }
                });
            };
        },
        26243: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
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
        27182: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 8824)), Promise.resolve().then(i.bind(i, 50811)), Promise.resolve().then(i.bind(i, 20562)));
        },
        27817: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => u });
            var a = i(88800),
                r = i(84961),
                n = i(53548),
                o = i(88969),
                s = i(17392),
                l = i(52300),
                c = i(19934),
                d = i(72288);
            let u = (0, r.PA)((e) => {
                let { isPinned: t, onClick: i, disabled: r, className: u, iconClassName: m } = e,
                    { user: _ } = (0, d.g)(),
                    v = t ? 'unpin' : 'pin',
                    p = t ? s.S7.CONTEXT_MENU_UNPIN_BUTTON : s.S7.CONTEXT_MENU_PIN_BUTTON,
                    g = (0, n.useMemo)(() => (t ? (0, a.jsx)(o.A, { id: 'interface-actions.unpin' }) : (0, a.jsx)(o.A, { id: 'interface-actions.pin' })), [t]);
                return (0, a.jsx)(c.Dr, {
                    className: u,
                    onClick: i,
                    icon: (0, a.jsx)(l.I, { className: m, variant: v, size: 'xxs' }),
                    'data-test-id': p,
                    disabled: r || !_.isAuthorized,
                    children: g,
                });
            });
        },
        28119: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => n });
            var a = i(72288),
                r = i(97956);
            let n = () => {
                let {
                        experiments: e,
                        user: { hasPlus: t, isLumenAvailable: i },
                    } = (0, a.g)(),
                    n = e.checkExperiment(r.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                return t && e.checkExperiment(r.z.WebNextQueryToVibe, 'on') && (!n || !!i);
            };
        },
        29126: (e) => {
            e.exports = {
                root: 'AwakeLumenModal_root__KutgH',
                header: 'AwakeLumenModal_header__uptVv',
                content: 'AwakeLumenModal_content__IGhwx',
                iframe: 'AwakeLumenModal_iframe__VUNuR',
                playButton: 'AwakeLumenModal_playButton__n3HTQ',
                playButtonVisible: 'AwakeLumenModal_playButtonVisible__wA_ri',
            };
        },
        29832: (e, t, i) => {
            'use strict';
            i.d(t, { MN: () => d, hg: () => c });
            var a,
                r = i(53548),
                n = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (r && (r += ' '), (r += a));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => r }));
                        let r = a;
                    },
                    8765: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
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
                    3550: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
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
                    4353: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
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
                    2445: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
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
                    61: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var r = null;
                            if ((void 0 !== a && (r = '' + a), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var n in ((a = {}), t)) 'key' !== n && (a[n] = t[n]);
                            else a = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7742: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = i(8532),
                            s = a(i(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: i,
                                    likeControl: a,
                                    menuControl: l,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: u,
                                    radius: m = 'default',
                                    bottomContainerClassName: _,
                                    labelText: v,
                                } = e,
                                p = d || i,
                                g = l || a;
                            return (0, r.jsxs)('div', {
                                className: (0, n.clsx)(
                                    s.default.root,
                                    s.default.controls,
                                    { [s.default.controls_visible]: u },
                                    s.default['controls_radius_'.concat(m)],
                                    t,
                                ),
                                children: [
                                    (0, r.jsx)('div', { className: s.default.top, children: c }),
                                    (0, r.jsxs)('div', {
                                        className: (0, n.clsx)(s.default.bottom, _),
                                        children: [
                                            p && (0, r.jsxs)('div', { className: s.default.bottom_left, children: [d, i] }),
                                            g && (0, r.jsxs)('div', { className: s.default.bottom_right, children: [l, a] }),
                                        ],
                                    }),
                                    !!v && (0, r.jsx)(o.Label, { className: s.default.label, children: v }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let r = i(4377),
                            n = i(810),
                            o = i(5881),
                            s = i(8903),
                            l = i(6530),
                            c = a(i(3550)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: i,
                                    className: a,
                                    textPosition: n = 'left',
                                    contentLinesCount: d = 2,
                                    title: u,
                                    description: m,
                                    explicitMarkComponent: _,
                                    chart: v,
                                    children: p,
                                    srTitle: g,
                                    wrapperClassName: x,
                                    ...y
                                } = e;
                                return (0, r.jsxs)('div', {
                                    className: (0, o.clsx)(c.default.root, a),
                                    ref: t,
                                    ...y,
                                    children: [
                                        (0, r.jsx)(l.SROnly, { children: null != g ? g : u }),
                                        (0, r.jsx)('div', { className: c.default.viewContainer, children: i }),
                                        (0, r.jsxs)('div', {
                                            className: (0, o.clsx)(c.default.wrapper, x),
                                            children: [
                                                v,
                                                (0, r.jsxs)('div', {
                                                    className: (0, o.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(n)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, r.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, r.jsx)(s.Caption, {
                                                                        className: c.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    _,
                                                                ],
                                                            }),
                                                        m,
                                                        p,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, n.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = i(8903),
                            s = a(i(4353));
                        t.Label = (e) => {
                            let { children: t, className: i, size: a = 's', ...l } = e;
                            return (0, r.jsx)(o.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: a,
                                lineClamp: 1,
                                className: (0, n.clsx)(s.default.root, i),
                                ...l,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var a = i(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return a.Label;
                            },
                        });
                    },
                    5531: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = i(810),
                            s = a(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: a, ...l } = e,
                                c = (0, n.clsx)(s.default.root, { [s.default.focusable]: i }, t);
                            return (0, o.isValidElement)(a)
                                ? (0, o.cloneElement)(a, { ...l, className: (0, n.clsx)(c, a.props.className) })
                                : (0, r.jsx)('span', { className: c, ...l, children: a });
                        };
                    },
                    6530: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var a = i(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return a.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = i(810),
                            s = i(5987),
                            l = a(i(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: i, type: a = 'text', size: o = 's', className: c, children: d, weight: u = 'medium', ...m } = e;
                            return (0, r.jsx)(s.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, n.clsx)(l.default.root, l.default['root_'.concat(a, '_').concat(o)], l.default['root_weight_'.concat(u)], c),
                                ...m,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, i) => (0, r.jsx)(t.CaptionComponent, { forwardRef: i, ...e }))));
                    },
                    1641: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = i(810),
                            s = i(5987),
                            l = a(i(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: i, weight: a = 'bold', size: o = 's', className: c, children: d, ...u } = e;
                            return (0, r.jsx)(s.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, n.clsx)(l.default.root, l.default['root_size_'.concat(o)], l.default['root_weight_'.concat(a)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, o.forwardRef)((e, i) => (0, r.jsx)(t.HeadingComponent, { forwardRef: i, ...e }))));
                    },
                    5987: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let r = i(4377),
                            n = i(5881),
                            o = i(810),
                            s = a(i(61));
                        function l(e) {
                            let { forwardRef: t, style: i, className: a, children: o, variant: l, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof o ? o : void 0;
                            return (0, r.jsx)(l, {
                                style: { ...i, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, n.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: c && c > 0, [s.default.root_clamp_oneline]: c && 1 === c, [s.default.root_clamp_multiline]: c && c > 1 },
                                    a,
                                ),
                                ...d,
                                children: o,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, o.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var a = i(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return a.Caption;
                            },
                        });
                        var r = i(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return r.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (n[e].call(i.exports, i, i.exports, s), i.exports);
            }
            ((s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X$', { value: !0 }), (l.kk = l.m7 = void 0));
                var e = s(7093);
                Object.defineProperty(l, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = s(7742);
                Object.defineProperty(l, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = l.kk,
                d = l.m7;
            l.X$;
        },
        30907: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        31510: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => a });
            let a = (e) => ({ uri: e.uri, color: e.color });
        },
        31764: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => m });
            var a = i(88800),
                r = i(65724),
                n = i(53548),
                o = i(17392),
                s = i(88021),
                l = i(96817),
                c = i(52300),
                d = i(89544),
                u = i.n(d);
            let m = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: i,
                        forwardControlClassName: d,
                        className: m,
                        withSecondaryColor: _,
                        buttonSize: v = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: g, swipeForward: x, shouldBackwardButtonBeDisabled: y, shouldForwardButtonBeDisabled: h, shouldHideControls: f } = (0, s.Y)(t),
                    b = (0, n.useCallback)(
                        (e) => {
                            (g(), e.stopPropagation());
                        },
                        [g],
                    ),
                    C = (0, n.useCallback)(
                        (e) => {
                            (x(), e.stopPropagation());
                        },
                        [x],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(u().root, m),
                    'data-test-id': o.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, a.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, i, { [u().control_hidden]: f, [u().control_withSecondaryColor]: _ }),
                            onClick: b,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, a.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: y,
                            'data-test-id': o.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, a.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, d, { [u().control_hidden]: f, [u().control_withSecondaryColor]: _ }),
                            onClick: C,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, a.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: h,
                            'data-test-id': o.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        32353: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => a, u: () => r });
            var a = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                r = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => w });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                m = i(97234),
                _ = i(59714),
                v = i(43054),
                p = i(18117),
                g = i(93940),
                x = i(24709);
            let y = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, v.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, p.g)(),
                        { screen: a } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, o.useCallback)(() => {
                            if (!t || !i || !(null == a ? void 0 : a.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: a.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, _.bv)(t, e);
                        }, [t, i, null == a ? void 0 : a.pageId]),
                    };
                }),
                h = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, v.s)()) ? void 0 : t.evgenInstance,
                        { hash: a } = (0, p.g)(),
                        { screen: r } = (0, g.j)();
                    (0, o.useEffect)(() => {
                        if (!i || !a || !(null == r ? void 0 : r.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: a,
                            pageId: r.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, _.z5)(i, t);
                    }, [i, e, a, null == r ? void 0 : r.pageId]);
                });
            var f = i(44230),
                b = i(4370),
                C = i(72288),
                k = i(97956),
                T = i(56248),
                A = i(90688),
                I = i(78940);
            let E = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var N = i(96856),
                S = i.n(N);
            let j = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { slam: o } = (0, C.g)(),
                    { contentRef: s } = (0, f.g)(),
                    d = (0, I.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(S().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(T.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(S().navigation, { [S().navigation_desktop]: !s }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, a.jsxs)('div', {
                            className: (0, r.$)(S().content, { [S().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(A._V, { className: S().image, src: E.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, a.jsxs)('div', {
                                    className: S().message,
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            className: S().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            className: S().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                o.hasDownloadedTracks &&
                                    (0, a.jsx)(c.$, {
                                        className: S().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, a.jsx)(u.HL, {
                                            className: S().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, a.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = i(9184),
                M = i.n(L);
            let w = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { formatMessage: m } = (0, s.A)(),
                    _ = (0, o.useContext)(C.P),
                    v = null == _ ? void 0 : _.experiments.checkExperiment(k.z.WebNextUnstableMusicScreen, 'on'),
                    p = m(v ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                h(p);
                let { sendRefreshEvent: g } = y(),
                    x = (0, o.useCallback)(() => {
                        (g(), (window.location.href = b.Z.main.href));
                    }, [g]),
                    { contentRef: A } = (0, f.g)();
                return v
                    ? (0, a.jsx)(j, { className: t, withBackwardControl: i, onBack: n })
                    : (0, a.jsxs)('div', {
                          className: (0, r.$)(M().root, t),
                          children: [
                              i &&
                                  (0, a.jsx)(T.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(M().navigation, { [M().navigation_desktop]: !A }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, a.jsxs)('div', {
                                  className: (0, r.$)(M().content, { [M().content_shrink]: !i }),
                                  children: [
                                      (0, a.jsx)(d.I, { className: M().icon, variant: 'attention', size: 'xxl' }),
                                      (0, a.jsx)(u.DZ, { className: (0, r.$)(M().title, M().important), variant: 'h3', size: 'xs', children: p }),
                                      (0, a.jsxs)(u.HL, {
                                          className: (0, r.$)(M().text, M().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, a.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, a.jsx)(c.$, {
                                          onClick: x,
                                          className: M().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, a.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, a.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        33133: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        33586: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => o });
            var a = i(88800),
                r = i(53548),
                n = i(12241);
            let o = (e) => {
                let { sourceContextData: t, children: i } = e,
                    o = (0, r.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, a.jsx)(n.l.Provider, { value: o, children: i });
            };
        },
        33719: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => f });
            var a = i(88800),
                r = i(65724),
                n = i(53548),
                o = i(17392),
                s = i(90688),
                l = i(73170),
                c = i(29504),
                d = i(2058),
                u = i(88969),
                m = i(29993),
                _ = i(15077),
                v = i(72288),
                p = i(97956),
                g = i(91292),
                x = i(59304),
                y = i(95641),
                h = i.n(y);
            let f = (e) => {
                let {
                        closeToast: t,
                        className: i,
                        coverUri: y,
                        entityTitle: f,
                        entityDescription: b,
                        entityVariant: C,
                        entityUrl: k,
                        customCover: T,
                        radius: A,
                        isPinned: I,
                    } = e,
                    E = (() => {
                        let { formatMessage: e } = (0, d.A)(),
                            { experiments: t } = (0, v.g)();
                        return (0, m.c)((i) => {
                            let { entityVariant: r, values: n, entityTitle: o, entityDescription: s } = i;
                            switch (r) {
                                case _.c.ALBUM:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: o }),
                                    };
                                case _.c.AUDIOBOOK:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: o }),
                                    };
                                case _.c.FAIRY_TALE:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: o }),
                                    };
                                case _.c.PODCAST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: o }),
                                    };
                                case _.c.PLAYLIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: o }),
                                    };
                                case _.c.ARTIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: o }),
                                    };
                                case _.c.VIBE:
                                    if (!t.checkExperiment(p.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, a.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: n }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: o }),
                                        };
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: o, description: s }),
                                    };
                            }
                        });
                    })(),
                    N = (() => {
                        let { formatMessage: e } = (0, d.A)(),
                            { experiments: t } = (0, v.g)();
                        return (0, m.c)((i) => {
                            let { entityVariant: r, values: n, entityTitle: o, entityDescription: s } = i;
                            switch (r) {
                                case _.c.ALBUM:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: o }),
                                    };
                                case _.c.AUDIOBOOK:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: o }),
                                    };
                                case _.c.FAIRY_TALE:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: o }),
                                    };
                                case _.c.PODCAST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: o }),
                                    };
                                case _.c.PLAYLIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: o }),
                                    };
                                case _.c.ARTIST:
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: o }),
                                    };
                                case _.c.VIBE:
                                    if (!t.checkExperiment(p.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, a.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: n }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: o }),
                                        };
                                    return {
                                        caption: (0, a.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: n }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: o, description: s }),
                                    };
                            }
                        });
                    })(),
                    S = (0, n.useMemo)(
                        () =>
                            k
                                ? (0, a.jsx)(g.N, {
                                      className: h().link,
                                      href: k,
                                      title: f,
                                      children: (0, a.jsxs)(c.HL, {
                                          className: h().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', f, '\xa0'],
                                      }),
                                  })
                                : (0, a.jsxs)(c.HL, {
                                      className: h().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: f,
                                      children: ['\xa0', f, '\xa0'],
                                  }),
                        [f, k],
                    ),
                    j = (0, n.useMemo)(
                        () => T || (0, a.jsx)(s._V, { className: h().image, src: y, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [y, T],
                    ),
                    L = (0, n.useMemo)(() => {
                        let e = { entity: S, description: b };
                        return I
                            ? E({ entityVariant: C, values: e, entityTitle: f, entityDescription: b })
                            : N({ entityVariant: C, values: e, entityTitle: f, entityDescription: b });
                    }, [S, b, I, N, C, f, E]);
                return (0, a.jsx)(x.$, {
                    className: (0, r.$)(h().root, { [h().root_withLongText]: C === _.c.AUDIOBOOK }, i),
                    closeToast: t,
                    cover: j,
                    message: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(l.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': L.ariaLabel }) }),
                            (0, a.jsx)(c.HL, {
                                className: h().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': o.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: L.caption,
                            }),
                        ],
                    }),
                    coverRadius: A,
                });
            };
        },
        33786: (e) => {
            e.exports = { root: 'NdaLabel_root__WeDgT', root_small: 'NdaLabel_root_small__1vy_B', text: 'NdaLabel_text__sfQ_Y' };
        },
        34250: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'EntityMeta_root__Zn4Th',
                root_disabled: 'EntityMeta_root_disabled__u3DaR',
                albumLink: 'EntityMeta_albumLink__vxRG7',
                artistCaption: 'EntityMeta_artistCaption__3JqiO',
                artistLink: 'EntityMeta_artistLink__rMKgI',
                description: 'EntityMeta_description__cSa2I',
                explicitMark: 'EntityMeta_explicitMark__wOyns',
                likesCount: 'EntityMeta_likesCount__cw2GN',
                subtitle: 'EntityMeta_subtitle__yE1NK',
                title: 'EntityMeta_title__6_ChR',
                titleContainer: 'EntityMeta_titleContainer__WMe1r',
                version: 'EntityMeta_version__7Z948',
                root_disliked: 'EntityMeta_root_disliked__PhzHW',
                title_withVersion: 'EntityMeta_title_withVersion__rbXWv',
                text: 'EntityMeta_text___lB4k',
                icon: 'EntityMeta_icon__tTxs3',
            };
        },
        34407: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => a });
            let a = 100;
        },
        34961: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => g, s: () => x });
            var a = i(88800),
                r = i(84961),
                n = i(58390),
                o = i(53548),
                s = i(35412),
                l = i(39499),
                c = i(89108),
                d = i(70003),
                u = i(72288),
                m = i(16818);
            (0, r.eO)(!1);
            let _ = (0, o.createContext)(null),
                v = (e) => {
                    let { children: t, store: i, storeKey: r } = e,
                        n = (0, o.useMemo)(() => ({ store: i, storeKey: r }), [i, r]);
                    return (0, a.jsx)(_.Provider, { value: n, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: r } = e;
                    return (
                        (0, n.useServerInsertedHTML)(() => {
                            let e = r.current;
                            return ((r.current = []), 0 === e.length)
                                ? null
                                : (0, a.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, s.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(i, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                g = (e) => {
                    let { createStore: t, patchKey: i } = e,
                        r = () => {
                            var e, t;
                            let a = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], a);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: n, nonce: o } = e,
                                s = (0, m.Y)(),
                                l = (0, u.g)(),
                                { store: _, patchesRef: g } = (0, d.m)({
                                    createStore: () => t({ ...s, rootStore: l }),
                                    getPendingPatchBatches: r,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(p, { nonce: o, patchKey: i, patchesRef: g }), (0, a.jsx)(v, { store: _, storeKey: i, children: n })],
                            });
                        },
                    };
                };
            function x(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, o.useContext)(_);
                if (!i || i.storeKey !== e) {
                    var a;
                    if (!t) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (a = null == i ? void 0 : i.storeKey) ? a : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        34970: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        35402: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => s });
            var a = i(13758),
                r = i(57249),
                n = i(6087),
                o = i(49124);
            let s = n.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 13758))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = o.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, a.setWasmUrl)(new URL(r, e).href);
            }
        },
        37670: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => n });
            var a = i(53548);
            i(30282);
            var r = i(58390);
            let n = (e) => {
                let t = (0, r.usePathname)(),
                    [i, n] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, i, t]));
            };
        },
        38514: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => r });
            var a = i(67174);
            let r = (e) => (0, a.u)('/album/:albumId', { params: { albumId: e } });
        },
        39339: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var a = i(5120),
                r = i(89916),
                n = i(60385),
                o = i(79390),
                s = i(50633),
                l = i(27506),
                c = i(67174),
                d = i(23744),
                u = i(97335),
                m = i(67318),
                _ = i(34407),
                v = i(554),
                p = i(18243),
                g = i(99007);
            let x = a.gK
                .compose(
                    a.gK.model({
                        uuid: a.gK.string,
                        isAvailable: a.gK.boolean,
                        revision: a.gK.maybe(a.gK.number),
                        uid: a.gK.number,
                        kind: a.gK.number,
                        title: a.gK.maybe(a.gK.string),
                        coverUri: a.gK.maybe(a.gK.string),
                        tracksCount: a.gK.maybe(a.gK.number),
                        averageColor: a.gK.maybe(a.gK.string),
                        generatedPlaylistType: a.gK.maybe(a.gK.string),
                        personalColor: a.gK.maybeNull(a.gK.number),
                        visibility: a.gK.maybe(a.gK.string),
                        trailer: a.gK.maybe(d.a),
                    }),
                    u.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: t } = (0, c.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return t;
                    },
                    get isLikesCountHidden() {
                        return e.kind === g.j.LIKE || e.kind === g.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === g.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === n.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, a._n)(e)) return !1;
                        let { library: t } = (0, s.M)(e);
                        return t.isPlaylistLiked((0, v.m)(e));
                    },
                    get pinId() {
                        return (0, p.f)(e);
                    },
                    get id() {
                        return (0, v.m)(e);
                    },
                    get isPinned() {
                        if (!(0, a._n)(e)) return !1;
                        let { pinsCollection: t } = (0, s.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, s.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, a._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, a._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, a.L3)(function* () {
                        if (!(0, a._n)(e)) return;
                        let { library: t, user: i } = (0, s.M)(e);
                        if (i.isAuthorized) {
                            let r = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, a._n)(e) && r === o.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), r);
                        }
                    }),
                    togglePin: (0, a.L3)(function* () {
                        if (!(0, a._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, s.M)(e);
                        if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, a.L3)(function* (t) {
                        if (!(0, a._n)(e)) return m.Y.ERROR;
                        let { usersResource: i, modelActionsLogger: n } = (0, a._$)(e);
                        try {
                            var o, s;
                            let r = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (o = e.revision) ? o : 0, playlistKind: e.kind });
                            // for PulseSync: BEGIN keep playlist track counts for append-to-end insertion
                            Number.isSafeInteger(r.trackCount) && r.trackCount >= 0 && (e.tracksCount = r.trackCount);
                            // for PulseSync: END keep playlist track counts for append-to-end insertion
                            return ((e.revision = r.revision), (e.isAvailable = null == (s = r.available) || s), m.Y.OK);
                        } catch (e) {
                            if ((n.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === r.X1.PRECONDITION_FAILED)) return m.Y.RELOAD;
                            return m.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, a.L3)(function* (t) {
                        if (!(0, a._n)(e)) return l.F.ERROR;
                        if (e.title === t) return l.F.OK;
                        let { usersResource: i, modelActionsLogger: r } = (0, a._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > _.k) return l.F.ERROR;
                            let a = e.title;
                            e.title = t;
                            try {
                                let r = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == r ? void 0 : r.title)) return ((e.title = a), l.F.ERROR);
                                return ((e.title = r.title), l.F.OK);
                            } catch (t) {
                                ((e.title = a), r.error(t));
                            }
                        }
                        return l.F.ERROR;
                    }),
                    deletePlaylist: (0, a.L3)(function* () {
                        if (!(0, a._n)(e) || !e.canUserChange) return l.F.ERROR;
                        let { pinsCollection: t } = (0, s.M)(e),
                            { usersResource: i, modelActionsLogger: r } = (0, a._$)(e);
                        try {
                            return (yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), l.F.OK);
                        } catch (e) {
                            r.error(e);
                        }
                        return l.F.ERROR;
                    }),
                    toggleVisibility: (0, a.L3)(function* (t) {
                        if (!(0, a._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return l.F.ERROR;
                        let { usersResource: i, modelActionsLogger: r } = (0, a._$)(e),
                            { user: o } = (0, s.M)(e),
                            c = e.visibility,
                            d = e.isPublic ? n.L.PRIVATE : n.L.PUBLIC;
                        t && (d = t);
                        try {
                            return (
                                (e.visibility = d),
                                e.isOwnFavouritePlaylist
                                    ? yield o.setSettings({ userMusicVisibility: d })
                                    : yield i.togglePlaylistVisibility({ visibility: d, userId: e.uid, playlistKind: e.kind }),
                                l.F.OK
                            );
                        } catch (e) {
                            r.error(e);
                        }
                        return ((e.visibility = c), l.F.ERROR);
                    }),
                    // for PulseSync: BEGIN playlist model download-to-file action
                    downloadToFile: (0, a.L3)(function* () {
                        if (!(0, a._n)(e)) return;
                        let { usersResource: i, modelActionsLogger: t } = (0, a._$)(e);
                        try {
                            let { tracks: r = [] } = yield i.getPlaylistWithTracksIds({
                                    userId: String(e.uid),
                                    playlistKind: e.kind,
                                    resumeStream: !1,
                                }),
                                n = r.map((e) => (null == e?.id ? null : e.albumId ? ''.concat(e.id, ':').concat(e.albumId) : String(e.id))).filter(Boolean);
                            n.length && window.musicDesktop?.pulsesync.downloads.tracks?.(n, 'playlist', e.title || '');
                        } catch (e) {
                            t.error(e);
                        }
                    }),
                    // for PulseSync: END playlist model download-to-file action
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                }));
        },
        39585: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var a = i(88800),
                r = i(65724),
                n = i(72288),
                o = i(8655),
                s = i(44378),
                l = i(82039),
                c = i.n(l);
            let d = {
                    [o.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_history.lottie',
                    [o.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_history.lottie',
                },
                u = {
                    loading: {},
                    idle: { frameRange: { start: 0, end: 0 } },
                    playing: { frameRange: { start: 0 } },
                    paused: { frameRange: { start: 0 }, mode: 'reverse' },
                },
                m = (e) => {
                    let { className: t, controls: i, ...o } = e,
                        { lumen: l } = (0, n.g)();
                    return (0, a.jsx)(s.D, {
                        className: (0, r.$)(c().root, t),
                        lumenImages: l.getFallbackImage(o.vibe.seeds[0]),
                        animationByTheme: d,
                        animationConfig: u,
                        controls: i,
                        ...o,
                    });
                };
        },
        39631: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => N });
            var a = i(88800),
                r = i(53548),
                n = i(40907),
                o = i(72288),
                s = i(97956),
                l = i(90420),
                c = i(84961),
                d = i(2058),
                u = i(97234),
                m = i(46384),
                _ = i(90852),
                v = i(17392),
                p = i(29993),
                g = i(29832),
                x = i(52300),
                y = i(19934),
                h = i(2147),
                f = i(21869),
                b = i(64284),
                C = i(49738),
                k = i(64546),
                T = i(70134),
                A = i(83559),
                I = i.n(A);
            let E = (0, c.PA)((e) => {
                    let { vibe: t } = e,
                        {
                            settings: { isMobile: i },
                        } = (0, o.g)(),
                        { formatMessage: r } = (0, d.A)(),
                        n = (0, h.K)(t, { showNotificationOnMobile: !0 }),
                        s = (0, p.c)((e) => {
                            e.stopPropagation();
                        });
                    return (0, a.jsx)('div', {
                        className: I().root,
                        onClick: s,
                        onDoubleClick: s,
                        onKeyDown: s,
                        children: (0, a.jsx)(g.hg, {
                            className: I().controls,
                            bottomContainerClassName: I().bottom,
                            isVisible: !0,
                            likeControl: (0, a.jsx)(k.WithOffline, {
                                fallback: (0, a.jsx)('div', {
                                    className: I().like,
                                    children: (0, a.jsx)(C.c, { size: 'xs', iconSize: 'xxs', className: I().likeButton, isLiked: t.isLiked, onClick: n }),
                                }),
                            }),
                            menuControl: (0, a.jsx)('div', {
                                className: I().menu,
                                children: (0, a.jsx)(m.F, {
                                    blockId: b.U.VIBE_CONTEXT_MENU,
                                    blockType: b.U.VIBE_CONTEXT_MENU,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: 1,
                                    children: (0, a.jsx)(y.W1, {
                                        className: I().contextMenuButton,
                                        isMobile: i,
                                        menuClassName: i ? void 0 : I().contextMenu,
                                        variant: 'text',
                                        size: 'xs',
                                        icon: (0, a.jsx)(x.I, { variant: 'more', size: 'xs' }),
                                        ariaLabel: r({ id: 'interface-actions.context-menu' }),
                                        'data-test-id': v.OA.vibe.HORIZONTAL_VIBE_CONTEXT_MENU_BUTTON,
                                        children: (0, a.jsxs)(_.B, {
                                            objectType: u.DomainObjectType.Wave,
                                            objectId: t.seedsId,
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            children: [
                                                (0, a.jsx)(k.WithOffline, { fallback: (0, a.jsx)(f.S, { vibe: t, onLikeClick: n }) }),
                                                (0, a.jsx)(T.u, { vibe: t }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    });
                }),
                N = () => {
                    let {
                        experiments: e,
                        user: { isAuthorized: t },
                    } = (0, o.g)();
                    return (0, r.useCallback)(
                        (i) =>
                            e.checkExperiment(s.z.WebNextWaveLikesAndShares, 'on') && t && i
                                ? i.stationType === l.q7
                                    ? (0, a.jsx)(n.w, { vibe: i })
                                    : i.isLikeEnabled
                                      ? (0, a.jsx)(E, { vibe: i })
                                      : null
                                : null,
                        [e, t],
                    );
                };
        },
        40887: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => u });
            var a = i(88800),
                r = i(53548),
                n = i(2058),
                o = i(29993),
                s = i(29595),
                l = i(74965),
                c = i(27506),
                d = i(66943);
            let u = (e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    [u, m] = (0, r.useState)(!1),
                    { notify: _ } = (0, l.l)(),
                    v = (0, r.useRef)(!1),
                    { formatMessage: p } = (0, n.A)();
                return {
                    exitVibeRoom: (0, o.c)(async () => {
                        t &&
                            !v.current &&
                            (m(!0),
                            (v.current = !0),
                            (await t.exitRoom({ roomId: t.id })) === c.F.ERROR
                                ? _((0, a.jsx)(d.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR })
                                : i(t.id),
                            m(!1),
                            (v.current = !1));
                    }),
                    isPending: u,
                };
            };
        },
        40907: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => w });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(2058),
                s = i(88969),
                l = i(17392),
                c = i(29993),
                d = i(79070),
                u = i(78275),
                m = i(98148),
                _ = i(52300),
                v = i(19934),
                p = i(21416),
                g = i(29504),
                x = i(29595),
                y = i(74965),
                h = i(4370),
                f = i(78940),
                b = i(72288),
                C = i(74773),
                k = i(66943),
                T = i(59378),
                A = i(56475),
                I = i(97234),
                E = i(66610),
                N = i(40887),
                S = i(16112),
                j = i(89718),
                L = i(59265),
                M = i.n(L);
            let w = (0, n.PA)((e) => {
                var t, i, n;
                let { vibe: L, context: w, className: R, renderContextButton: P } = e,
                    {
                        collection: { vibeRooms: O },
                        settings: { isMobile: D },
                        user: B,
                    } = (0, b.g)(),
                    { formatMessage: K } = (0, o.A)(),
                    { notify: H } = (0, y.l)(),
                    U = (0, f.Z)(h.Z.collectionVibeRooms.href),
                    { state: V, toggleTrue: z, toggleFalse: W } = (0, u.e)(!1),
                    Y = O.items.find((e) => {
                        var t;
                        return (null == e || null == (t = e.wave) ? void 0 : t.pinId) === L.pinId;
                    }),
                    F = O.loadingState === C.G.PENDING,
                    { editVibeRoom: G, isPending: $ } = (0, A.h)(Y),
                    X = (0, c.c)(() => {
                        Y && O.deleteRoomFromItems(Y.id);
                    }),
                    {
                        handlePinClick: q,
                        handleExitClick: Q,
                        isExitPending: Z,
                    } = ((e) => {
                        let { room: t, onRoomSuccessExit: i } = e,
                            a = (0, S.A)(null == t ? void 0 : t.wave),
                            { exitVibeRoom: r, isPending: n } = (0, N.J)({ room: t, onRoomSuccessExit: i }),
                            o = (0, E.D)();
                        return {
                            handleExitClick: (0, c.c)(async () => {
                                (o({ actionType: I.ActionType.Remove, userInteractionType: I.UserInteractionType.Tap }), await r());
                            }),
                            handlePinClick: (0, c.c)(async () => {
                                (o({ actionType: I.ActionType.Pin, userInteractionType: I.UserInteractionType.Tap }), await a());
                            }),
                            isExitPending: n,
                        };
                    })({ room: Y, onRoomSuccessExit: X }),
                    J = (0, c.c)(async (e) => {
                        e &&
                            B.isAuthorized &&
                            !$ &&
                            !Z &&
                            (await O.getData(),
                            O.isRejected && H((0, a.jsx)(k.h, { error: K({ id: 'error-messages.error-during-action' }) }), { containerId: x.u.ERROR }));
                    }),
                    ee = (0, c.c)(() => {
                        J(!0);
                    }),
                    et = (0, c.c)((e) => {
                        e.stopPropagation();
                    }),
                    ei = (0, c.c)(async (e) => {
                        $ || (await G(e), W());
                    }),
                    ea = (0, d.L)(() =>
                        V && Y && !D
                            ? (0, a.jsx)(T.A, {
                                  text: Y.name,
                                  className: M().renameInput,
                                  onChangeFinish: ei,
                                  readOnly: $,
                                  maxTextLength: 200,
                                  minTextLength: 1,
                                  placeholder: K({ id: 'vibe-actions.enter-title' }),
                                  'aria-label': K({ id: 'interface-actions.rename' }),
                                  shouldFinishOnKeyPress: !0,
                                  'data-test-id': l.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                              })
                            : null,
                    ),
                    er = (0, d.L)(() =>
                        F
                            ? (0, a.jsx)('div', {
                                  className: M().loader,
                                  'data-test-id': l.Kq.multivibe.MULTIVIBE_CONTEXT_MENU_LOADER,
                                  children: (0, a.jsx)(p.y, { size: 'xs' }),
                              })
                            : Y
                              ? (0, a.jsx)(j.J, { room: Y, className: R, onRenameClick: z, onPinClick: q, onExitClick: Q, isExitPending: Z, isRenamePending: $ })
                              : null,
                    ),
                    en = (0, a.jsxs)(a.Fragment, {
                        children: [
                            er,
                            Y && !F && (0, a.jsx)(m.c, { className: M().divider }),
                            (0, a.jsx)(v.Dr, {
                                className: R,
                                icon: (0, a.jsx)(_.I, { variant: 'twoUsers', size: 'xxs' }),
                                onClick: U,
                                'data-test-id': l.Kq.multivibe.MULTIVIBE_GO_TO_COLLECTION_BUTTON,
                                children: (0, a.jsxs)('span', {
                                    className: M().collection,
                                    children: [
                                        (0, a.jsx)(s.A, { id: 'interface-actions.show-all' }),
                                        (0, a.jsx)(g.HL, {
                                            variant: 'span',
                                            type: 'controls',
                                            size: 'xs',
                                            className: M().description,
                                            children: (0, a.jsx)(s.A, { id: 'page.vibe-rooms' }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                if (P) return P({ context: null != (t = null == Y ? void 0 : Y.name) ? t : w, contextControl: ea, onOpenChange: J, children: en });
                let eo = null != (n = null != (i = null == Y ? void 0 : Y.name) ? i : w) ? n : L.title,
                    es = K({ id: 'interface-actions.context-menu' });
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(M().controls, { [M().controls_renaming]: !!ea }),
                    onClick: et,
                    onDoubleClick: et,
                    onKeyDown: et,
                    children: [
                        ea,
                        (0, a.jsx)(v.W1, {
                            className: M().contextMenuButton,
                            wrapperClassName: (0, r.$)({ [M().contextMenu_hidden]: !!ea }),
                            menuClassName: D ? void 0 : M().contextMenu,
                            isMobile: D,
                            size: 'xs',
                            variant: 'text',
                            icon: (0, a.jsx)(_.I, { variant: 'more', size: 'xs' }),
                            ariaLabel: eo ? ''.concat(eo, ': ').concat(es) : es,
                            onShow: ee,
                            returnFocus: !ea,
                            'data-test-id': l.OA.vibe.HORIZONTAL_VIBE_CONTEXT_MENU_BUTTON,
                            children: en,
                        }),
                    ],
                });
            });
        },
        41814: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => u });
            var a = i(5120),
                r = i(80989),
                n = i(22983),
                o = i(50633),
                s = i(97956),
                l = i(90420),
                c = i(63425);
            let d = a.gK.model('VibeAgent', { animationUri: a.gK.string, cover: c.$, entityType: a.gK.maybe(a.gK.string) }),
                u = a.gK
                    .model('Vibe', {
                        title: a.gK.optional(a.gK.string, ''),
                        description: a.gK.maybe(a.gK.string),
                        seeds: a.gK.array(a.gK.string),
                        imageUrl: a.gK.maybe(a.gK.string),
                        animationUrl: a.gK.maybe(a.gK.string),
                        backgroundImageUrl: a.gK.maybe(a.gK.string),
                        backgroundColor: a.gK.maybe(a.gK.string),
                        type: a.gK.maybe(a.gK.string),
                        colors: a.gK.maybe(a.gK.model({ average: a.gK.maybe(a.gK.string), waveText: a.gK.maybe(a.gK.string) })),
                        agent: a.gK.maybe(d),
                    })
                    .views((e) => {
                        let t = {
                            get stationId() {
                                var i;
                                return null != (i = e.seeds[0]) ? i : '';
                            },
                            get seedsId() {
                                return e.seeds.join(',');
                            },
                            get context() {
                                if (e.seeds) {
                                    if (t.stationId !== l.M1) return e.title;
                                    else if (e.seeds.length > 1) return e.title;
                                }
                                return null;
                            },
                            get pinId() {
                                return (0, r.f)(e.seeds);
                            },
                            get isPinned() {
                                if (!(0, a._n)(e)) return !1;
                                let { pinsCollection: t } = (0, o.M)(e);
                                return t.isPinned(this.pinId);
                            },
                            get isLikeEnabled() {
                                return e.seeds.length > 0 && e.seeds.every((e) => e !== l.M1 && e !== l.yx && !e.startsWith('playlist:'));
                            },
                            get isShareEnabled() {
                                return t.isLikeEnabled && t.stationType !== l.q7 && t.stationType !== l.N7;
                            },
                            get isLiked() {
                                if (!(0, a._n)(e)) return !1;
                                let { library: t } = (0, o.M)(e);
                                return t.isVibeLiked(e.seeds);
                            },
                            get stationType() {
                                var c, d;
                                return null != (d = null == (c = t.stationId) ? void 0 : c.split(':')[0]) ? d : '';
                            },
                            get isMix() {
                                return e.type === n.y.MIX;
                            },
                            get isQ2V() {
                                return e.type === n.y.Q2V;
                            },
                            get shouldShowAgent() {
                                if (!(0, a._n)(e)) return !1;
                                let { experiments: t } = (0, o.M)(e);
                                return t.checkExperiment(s.z.WebNextWaveAgentExperiment, 'on');
                            },
                            get cover() {
                                return (0, a.wg)({ uri: e.imageUrl, color: e.backgroundColor });
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getKey: (t) => ''.concat(t, '_').concat(e.seeds[0]),
                        togglePin: (0, a.L3)(function* () {
                            if (!(0, a._n)(e)) return;
                            let { pinsCollection: t, user: i } = (0, o.M)(e);
                            if (i.isAuthorized) return yield t.toggleVibePin({ seeds: e.seeds }, e.pinId);
                        }),
                        toggleLike: (0, a.L3)(function* () {
                            if (!(0, a._n)(e) || !e.isLikeEnabled) return;
                            let { library: t, user: i } = (0, o.M)(e);
                            if (i.isAuthorized) return yield t.toggleVibeLike({ seeds: [...e.seeds] });
                        }),
                        getDescription() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                            if (!(0, a._n)(e)) return t;
                            let { experiments: i } = (0, o.M)(e);
                            return i.checkExperiment(s.z.WebNextVibeDescription, 'on') && void 0 !== (null == e ? void 0 : e.description) ? e.description : t;
                        },
                    }));
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        42078: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { _: () => a }),
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
                })(a || (a = {})));
        },
        42123: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => c });
            var a = i(88800),
                r = i(65724),
                n = i(7555),
                o = i(19994),
                s = i(16782),
                l = i.n(s);
            let c = (e) => {
                let { isActive: t, coverRadius: i = 'm', withDescription: s, className: c } = e;
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(l().start, c),
                    children: [
                        (0, a.jsx)(n.t, {
                            className: l().coverContainer,
                            radius: i,
                            children: (0, a.jsx)(o.W, { isActive: t, className: l().shimmerCover, radius: 'xl' }),
                        }),
                        (0, a.jsxs)('div', {
                            className: l().textShimmerContainer,
                            children: [
                                (0, a.jsx)(o.W, { isActive: t, className: l().shimmerTitle, radius: 'xl' }),
                                s && (0, a.jsx)(o.W, { isActive: t, className: l().shimmerDescription }),
                            ],
                        }),
                    ],
                });
            };
        },
        43966: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => c });
            var a = i(88800),
                r = i(65724),
                n = i(88969),
                o = i(29504),
                s = i(33786),
                l = i.n(s);
            let c = (e) => {
                let { className: t, size: i = 'm' } = e;
                return (0, a.jsx)('span', {
                    className: (0, r.$)(l().root, { [l().root_small]: 's' === i }, t),
                    children: (0, a.jsx)(o.HL, {
                        variant: 'span',
                        size: 's' === i ? 'xs' : 'm',
                        weight: 'bold',
                        className: l().text,
                        children: (0, a.jsx)(n.A, { id: 'multivibe.nda' }),
                    }),
                });
            };
        },
        44230: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => r, g: () => n });
            var a = i(53548);
            let r = (0, a.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                n = () => (0, a.useContext)(r);
        },
        44378: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => B });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(58390),
                c = i(97234),
                d = i(93940),
                u = i(46482),
                m = i(70598),
                _ = i(42592),
                v = i(91177),
                p = i(17392),
                g = i(29993),
                x = i(90688),
                y = i(29504),
                h = i(81438),
                f = i(55693),
                b = i(47964),
                C = i(72288),
                k = i(8655),
                T = i(69704),
                A = i(49176),
                I = i(34303),
                E = i(76168),
                N = i(35402),
                S = i(62270),
                j = i.n(S),
                L = i(76816),
                M = i(34945);
            let w = async (e, t) => {
                let { loop: i = !1, markerId: a, frameRange: r, mode: n = 'forward' } = t,
                    o = null,
                    s = null;
                if (a) {
                    let t = e.markers().find((e) => e.name === a);
                    if (!t) return;
                    ((o = t.time), (s = t.time + t.duration));
                } else if (r) {
                    var l;
                    ((o = r.start), (s = null != (l = r.end) ? l : e.totalFrames));
                }
                null !== o &&
                    null !== s &&
                    (await Promise.all([e.setLoop(i), e.setMode(n), e.setSegment(o, s), e.setFrame('reverse' === n ? s : o)]), o !== s && (await e.play()));
            };
            var R = i(7019),
                P = i.n(R);
            let O = { align: [0, 0.5], fit: 'contain' },
                D = { autoResize: !0, freezeOnOffscreen: !1 },
                B = (0, n.PA)((e) => {
                    var t, i, n, S, R;
                    let { animationByTheme: B, animationConfig: K, className: H, controls: U, lumenImages: V, requestAwakeLumenModal: z, vibe: W } = e,
                        { formatMessage: Y } = (0, s.A)(),
                        F = (0, l.useSearchParams)(),
                        G = (0, E.z)(),
                        { screen: $ } = (0, d.j)(),
                        X = null == $ ? void 0 : $.pageIdForFrom,
                        { block: q } = (0, d.j)(),
                        Q = null == q ? void 0 : q.blockIdForFrom,
                        { sendPlaySearchFeedback: Z } = (0, f.z)(),
                        J = (0, u.g)(),
                        ee = (0, m.S)();
                    (0, _.W)();
                    let et = (0, v.D)(),
                        ei = (0, T.W)(),
                        { lumen: ea } = (0, C.g)(),
                        { cover: er, fallbackImage: en } = (0, h.x)(),
                        eo = 'true' === F.get(I.K.LUMEN_AWAKE_PARAM),
                        es = ea.isEnabled && !ea.isTriedToLoadData,
                        el = ea.isEnabled && !ea.isAwakened,
                        ec = null != (t = ei.theme) ? t : k.S.Dark,
                        ed = (0, o.useRef)(!1),
                        eu = (0, o.useRef)(K[W ? 'idle' : 'loading']),
                        em = (0, o.useRef)(void 0),
                        [e_, ev] = (0, o.useState)(null),
                        {
                            isPlaying: ep,
                            togglePlay: eg,
                            isCurrent: ex,
                        } = (0, b.B)({ blockIdForFrom: Q, pageIdForFrom: X, seeds: null != (i = null == W ? void 0 : W.seeds) ? i : [] });
                    ((0, o.useEffect)(() => {
                        if (!e_ || ed.current) return;
                        let e = () => {
                            ((ed.current = !0), w(e_, eu.current));
                        };
                        return (e_.addEventListener('load', e), () => e_.removeEventListener('load', e));
                    }, [e_]),
                        (0, o.useEffect)(() => {
                            let e = ((e, t, i, a) =>
                                i || e === (null == a ? void 0 : a.loading)
                                    ? t
                                        ? null == a
                                            ? void 0
                                            : a.playing
                                        : e === a.playing
                                          ? null == a
                                              ? void 0
                                              : a.paused
                                          : e === a.loading
                                            ? null == a
                                                ? void 0
                                                : a.idle
                                            : null
                                    : null == a
                                      ? void 0
                                      : a.loading)(eu.current, ep, !!W, K);
                            e && e !== eu.current && ((eu.current = e), e_ && ed.current && w(e_, e));
                        }, [K, e_, ex, ep, W]));
                    let ey = (0, g.c)(() => {
                        (em.current === (null == W ? void 0 : W.seedsId) || ep || ((em.current = null == W ? void 0 : W.seedsId), null == Z || Z()), eg(), ep || J());
                    });
                    (0, o.useEffect)(() => {
                        eo && !es && W && (el && (null == z || z(ey)), G([I.K.LUMEN_AWAKE_PARAM]));
                    }, [z, G, eo, el, es, ey, W]);
                    let eh = (0, g.c)(() => {
                            if (W) {
                                if (ep) return void eg();
                                if (el) {
                                    (ee({ to: c.AppScreen.LumenAwakeningScreen }), null == z || z(ey));
                                    return;
                                }
                                ey();
                            }
                        }),
                        ef = (0, g.c)((e) => {
                            (e.code === A.v.SPACE || e.code === A.v.ENTER) && (e.preventDefault(), eh());
                        }),
                        eb = null != (n = null == W ? void 0 : W.title) ? n : Y({ id: 'entity-names.query-to-vibe-loading-title' }),
                        eC = null != (S = null == W ? void 0 : W.description) ? S : Y({ id: 'entity-names.query-to-vibe-loading-description' }),
                        ek = !ea.isEnabled || ea.isTriedToLoadData,
                        eT = ea.isEnabled ? er : null != (R = null == V ? void 0 : V[ec]) ? R : en,
                        eA = W ? p.OA.vibe.QUERY_TO_VIBE_BLOCK : p.OA.vibe.QUERY_TO_VIBE_LOADING_BLOCK,
                        eI = W && (!ea.isEnabled || ea.isTriedToLoadData);
                    return (0, a.jsxs)('div', {
                        'aria-label': eb,
                        'aria-description': eC,
                        className: (0, r.$)(j().root, P().root, { [P().root_loading]: !W, [P().root_withControls]: U }, H),
                        tabIndex: 0,
                        onClick: eh,
                        onKeyDown: ef,
                        'data-test-id': eA,
                        children: [
                            (0, a.jsx)(N.j, { className: P().comet, layout: O, src: B[null != ec ? ec : k.S.Dark], renderConfig: D, dotLottieRefCallback: ev }),
                            (0, a.jsxs)('div', {
                                className: P().iconContainer,
                                children: [
                                    ex && (0, a.jsx)(M.P, { className: P().iconPulse, stopAnimation: !ep }),
                                    ek &&
                                        (0, a.jsx)(x._V, {
                                            className: P().icon,
                                            src: eT,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                            withFallback: !1,
                                            withLoadingIndicator: !1,
                                        }),
                                ],
                            }),
                            (0, a.jsx)(L.r, {
                                className: P().meta,
                                title: (0, a.jsx)(y.HL, {
                                    className: (0, r.$)(j().text, j().titleText, P().caption),
                                    size: 'm',
                                    variant: 'div',
                                    type: 'text',
                                    children: eb,
                                }),
                                description: eC,
                                titleLineClamp: 2,
                            }),
                            U && (0, a.jsx)('div', { className: P().controls, children: U }),
                            eI && (0, a.jsx)('div', { ref: et }),
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
        46079: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            let a = (0, i(53548).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        46777: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => o });
            var a = i(55482),
                r = i(53548),
                n = i(46422);
            let o = (e) => {
                let t = (0, n.W)(),
                    i = (0, r.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    o = (0, r.useMemo)(
                        () =>
                            (0, a.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: i, moveForward: o };
            };
        },
        47580: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            let a = (e) => e.map((e) => e.name).join(', ');
        },
        49176: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var a = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        50811: (e, t, i) => {
            'use strict';
            i.d(t, { MusicHistoryPage: () => eS });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(88969),
                l = i(97234),
                c = i(59724),
                d = i(17392),
                u = i(66719),
                m = i(98225),
                _ = i(29504),
                v = i(2058);
            let p = () => {
                let { formatDate: e, formatRelativeTime: t } = (0, v.A)();
                return (0, o.useCallback)(
                    function (i) {
                        let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = new Date(i),
                            n = new Date();
                        (r.setHours(0, 0, 0, 0), n.setHours(0, 0, 0, 0));
                        let o = (r.getTime() - n.getTime()) / 864e5,
                            s = t(o, 'day', { numeric: 'auto' }),
                            l = e(i, { day: 'numeric', month: 'long' });
                        switch (o) {
                            case 0:
                            case -1:
                            case -2:
                                if (a) return ''.concat(s, ', ').concat(l);
                                return s;
                            default:
                                return l;
                        }
                    },
                    [e, t],
                );
            };
            var g = i(99711),
                x = i(90233),
                y = i(28119),
                h = i(34961),
                f = i(53892),
                b = i(72288);
            let C = (0, o.createContext)({ observeElement: () => {}, unobserveElement: () => {} });
            var k = i(18593),
                T = i(13946),
                A = i(84384),
                I = i(18486),
                E = i(42123);
            let N = (e) => {
                    let { entityId: t, from: i } = e;
                    return { contextData: { type: k.K.Various, meta: { id: t }, from: i }, queueParams: { index: 0 }, loadContextMeta: !0 };
                },
                S = (e) => {
                    let { id: t, tabIndex: i, blockIndex: a, trackIndex: r } = e,
                        n = (0, h.s)(f.n.MUSIC_HISTORY),
                        s = (0, o.useId)(),
                        l = (0, o.useRef)(null),
                        { observeElement: c, unobserveElement: d } = (0, o.useContext)(C);
                    return (
                        (0, o.useEffect)(() => {
                            let e = void 0 !== r ? ''.concat(i, '_').concat(a, '_').concat(r, '_').concat(t) : ''.concat(i, '_').concat(a, '_').concat(t),
                                o = n.indexesMap.get(e);
                            n.isInObservationRange(o) &&
                                c({
                                    elementRef: l,
                                    elementId: s,
                                    index: o,
                                    onShow() {
                                        (n.getItems(this.index), d(s));
                                    },
                                });
                        }, [a, t, s, n, c, i, r, d]),
                        { intersectionPropertyId: s, ref: l }
                    );
                };
            var j = i(14347),
                L = i(10829),
                M = i(98644),
                w = i(93015),
                R = i(72713),
                P = i.n(R);
            let O = (0, n.PA)((e) => {
                let { type: t, track: i, artists: r, tabIndex: n, blockIndex: o, trackIndex: s, playContextParams: l } = e,
                    { ref: c, intersectionPropertyId: d } = S({ id: i.id, tabIndex: n, blockIndex: o, trackIndex: s });
                return i.isShimmerVisible || !i.data
                    ? (0, a.jsx)('div', {
                          'data-intersection-property-id': d,
                          ref: c,
                          children: (0, a.jsx)(w.D, {
                              isActive: i.isShimmerActive,
                              'data-intersection-property-id': d,
                              className: P().trackShimmer,
                              variant: t === k.K.Album ? M.X.ALBUM : M.X.PLAYLIST,
                          }),
                      })
                    : t === k.K.Album
                      ? (0, a.jsx)(j.F, { track: i.data, position: i.data.index, albumArtists: r, playContextParams: l })
                      : (0, a.jsx)(L.K, { track: i.data, playContextParams: l });
            });
            var D = i(54719),
                B = i.n(D);
            let K = (0, n.PA)((e) => {
                    var t, i, n, l, c;
                    let { album: u, tabIndex: m, blockIndex: v } = e,
                        { ref: p, intersectionPropertyId: g } = S({ id: u.id, tabIndex: m, blockIndex: v }),
                        { from: x } = (0, A.f)({ blockId: 'album-'.concat(u.id) }),
                        y = (0, o.useMemo)(() => {
                            var e, t;
                            return u.available
                                ? (0, a.jsx)(T.i, {
                                      className: B().artists,
                                      linkClassName: B().artistLink,
                                      artists: null == (e = u.meta) ? void 0 : e.artists,
                                      lineClamp: 1,
                                  })
                                : null == (t = u.meta)
                                  ? void 0
                                  : t.artistNames;
                        }, [u.available, null == (t = u.meta) ? void 0 : t.artistNames, null == (i = u.meta) ? void 0 : i.artists]),
                        h = (0, o.useMemo)(() => {
                            var e, t, i;
                            return u.isShimmerVisible
                                ? (0, a.jsx)(E.M, { isActive: u.isShimmerActive, className: B().header, withDescription: !0 })
                                : (0, a.jsx)(I.T, {
                                      className: B().header,
                                      coverUrl: null == (e = u.meta) ? void 0 : e.coverUri,
                                      title: null == (t = u.meta) ? void 0 : t.title,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      description: y,
                                      titleClassName: B().headerTitle,
                                      viewAllActionLink: null == (i = u.meta) ? void 0 : i.url,
                                      available: u.available,
                                      fallbackIconVariant: 'album',
                                      headingVariant: 'h4',
                                      withCover: !0,
                                      withDescription: !!y,
                                  });
                        }, [
                            u.available,
                            u.isShimmerActive,
                            u.isShimmerVisible,
                            null == (n = u.meta) ? void 0 : n.coverUri,
                            null == (l = u.meta) ? void 0 : l.title,
                            null == (c = u.meta) ? void 0 : c.url,
                            y,
                        ]),
                        f = (0, o.useMemo)(
                            () =>
                                u.tracks.map((e, t) => {
                                    var i;
                                    let r = N({ entityId: e.entityId, from: x });
                                    return (0, a.jsx)(
                                        O,
                                        { type: k.K.Album, track: e, playContextParams: r, tabIndex: m, blockIndex: v, trackIndex: t },
                                        null == (i = e.data) ? void 0 : i.getKey(t),
                                    );
                                }),
                            [u.tracks, x, m, v],
                        );
                    return (0, a.jsxs)('section', {
                        className: B().root,
                        ref: p,
                        'data-intersection-property-id': g,
                        'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_ALBUM_BLOCK,
                        children: [
                            (0, a.jsx)(_.DZ, {
                                className: (0, r.$)(B().header, B().heading),
                                variant: 'h3',
                                'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ALBUM,
                                children: (0, a.jsx)(s.A, { id: 'music-history.album' }),
                            }),
                            h,
                            (0, a.jsx)('div', { className: B().content, children: f }),
                        ],
                    });
                }),
                H = (0, n.PA)((e) => {
                    var t, i, n;
                    let { artist: l, tabIndex: c, blockIndex: u } = e,
                        { ref: m, intersectionPropertyId: v } = S({ id: l.id, tabIndex: c, blockIndex: u }),
                        { from: p } = (0, A.f)({ blockId: 'artist-'.concat(l.id) }),
                        g = (0, o.useMemo)(() => {
                            var e, t, i;
                            return l.isShimmerVisible
                                ? (0, a.jsx)(E.M, { isActive: l.isShimmerActive, className: B().header, coverRadius: 'round' })
                                : (0, a.jsx)(I.T, {
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      className: B().header,
                                      coverUrl: null == (e = l.meta) ? void 0 : e.coverUri,
                                      title: null == (t = l.meta) ? void 0 : t.name,
                                      titleClassName: B().headerTitle,
                                      viewAllActionLink: null == (i = l.meta) ? void 0 : i.url,
                                      available: l.available,
                                      withCover: !0,
                                      coverRadius: 'round',
                                      headingVariant: 'h4',
                                  });
                        }, [
                            l.available,
                            l.isShimmerActive,
                            l.isShimmerVisible,
                            null == (t = l.meta) ? void 0 : t.coverUri,
                            null == (i = l.meta) ? void 0 : i.name,
                            null == (n = l.meta) ? void 0 : n.url,
                        ]),
                        x = (0, o.useMemo)(
                            () =>
                                l.tracks.map((e, t) => {
                                    var i;
                                    let r = N({ entityId: e.entityId, from: p });
                                    return (0, a.jsx)(
                                        O,
                                        { type: k.K.Artist, track: e, playContextParams: r, tabIndex: c, blockIndex: u, trackIndex: t },
                                        null == (i = e.data) ? void 0 : i.getKey(t),
                                    );
                                }),
                            [l.tracks, p, c, u],
                        );
                    return (0, a.jsxs)('section', {
                        className: B().root,
                        ref: m,
                        'data-intersection-property-id': v,
                        'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_ARTIST_BLOCK,
                        children: [
                            (0, a.jsx)(_.DZ, {
                                className: (0, r.$)(B().header, B().heading),
                                variant: 'h3',
                                'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ARTIST,
                                children: (0, a.jsx)(s.A, { id: 'music-history.artist' }),
                            }),
                            g,
                            (0, a.jsx)('div', { className: B().content, children: x }),
                        ],
                    });
                });
            var U = i(33586),
                V = i(20584),
                z = i(93039);
            let W = (0, n.PA)((e) => {
                    let { common: t, tabIndex: i, blockIndex: n } = e,
                        { ref: l, intersectionPropertyId: c } = S({ id: t.id, tabIndex: i, blockIndex: n }),
                        { from: u } = (0, A.f)(),
                        m = ((e) =>
                            (0, o.useMemo)(
                                () => (e === g.D.SEARCH ? (0, z.t)({ contextType: k.K.Various, contextId: '', entityContextType: V.h.MUSIC_HISTORY_SEARCH }) : null),
                                [e],
                            ))(t.type),
                        v = (0, o.useMemo)(
                            () =>
                                t.tracks.map((e, t) => {
                                    var r;
                                    let o = N({ entityId: e.entityId, from: u });
                                    return (0, a.jsx)(
                                        O,
                                        { playContextParams: o, type: k.K.Various, track: e, tabIndex: i, blockIndex: n, trackIndex: t },
                                        null == (r = e.data) ? void 0 : r.getKey(t),
                                    );
                                }),
                            [t.tracks, u, i, n],
                        ),
                        p = (0, o.useMemo)(() => {
                            switch (t.type) {
                                case g.D.OTHER:
                                    return (0, a.jsx)(s.A, { id: 'music-history.shuffle' });
                                case g.D.SEARCH:
                                    return (0, a.jsx)(s.A, { id: 'music-history.search' });
                            }
                        }, [t.type]);
                    return (0, a.jsx)(U._, {
                        sourceContextData: m,
                        children: (0, a.jsxs)('section', {
                            className: B().root,
                            ref: l,
                            'data-intersection-property-id': c,
                            'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_COMMON_BLOCK,
                            children: [
                                (0, a.jsx)(_.DZ, {
                                    className: (0, r.$)(B().header, B().heading),
                                    variant: 'h3',
                                    'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_COMMON,
                                    children: p,
                                }),
                                (0, a.jsx)('div', { className: B().content, children: v }),
                            ],
                        }),
                    });
                }),
                Y = (0, n.PA)((e) => {
                    var t, i, n, l, c;
                    let { playlist: u, tabIndex: m, blockIndex: p } = e,
                        { ref: g, intersectionPropertyId: x } = S({ id: u.id, tabIndex: m, blockIndex: p }),
                        { from: y } = (0, A.f)({ blockId: u.isResolved ? 'playlist-'.concat(null == (t = u.meta) ? void 0 : t.id) : '' }),
                        { formatMessage: h } = (0, v.A)(),
                        f = (0, o.useMemo)(() => {
                            var e, t, i, r;
                            return u.isShimmerVisible
                                ? (0, a.jsx)(E.M, { isActive: u.isShimmerActive, className: B().header, withDescription: !0 })
                                : (0, a.jsx)(I.T, {
                                      className: B().header,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      coverUrl: null == (e = u.meta) ? void 0 : e.coverUri,
                                      title: null == (t = u.meta) ? void 0 : t.title,
                                      titleClassName: B().headerTitle,
                                      description: h({ id: 'entity-names.number-of-tracks' }, { counter: null == (i = u.meta) ? void 0 : i.tracksCount }),
                                      fallbackIconVariant: 'playlist',
                                      withCover: !0,
                                      viewAllActionLink: null == (r = u.meta) ? void 0 : r.url,
                                      headingVariant: 'h4',
                                      withDescription: !0,
                                  });
                        }, [
                            h,
                            u.isShimmerActive,
                            u.isShimmerVisible,
                            null == (i = u.meta) ? void 0 : i.coverUri,
                            null == (n = u.meta) ? void 0 : n.title,
                            null == (l = u.meta) ? void 0 : l.tracksCount,
                            null == (c = u.meta) ? void 0 : c.url,
                        ]),
                        b = (0, o.useMemo)(
                            () =>
                                u.tracks.map((e, t) => {
                                    var i;
                                    let r = N({ entityId: e.entityId, from: y });
                                    return (0, a.jsx)(
                                        O,
                                        { playContextParams: r, type: k.K.Playlist, track: e, tabIndex: m, blockIndex: p, trackIndex: t },
                                        null == (i = e.data) ? void 0 : i.getKey(t),
                                    );
                                }),
                            [u.tracks, y, m, p],
                        );
                    return (0, a.jsxs)('section', {
                        className: B().root,
                        ref: g,
                        'data-intersection-property-id': x,
                        'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_PLAYLIST_BLOCK,
                        children: [
                            (0, a.jsx)(_.DZ, {
                                className: (0, r.$)(B().header, B().heading),
                                variant: 'h3',
                                'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_PLAYLIST,
                                children: (0, a.jsx)(s.A, { id: 'music-history.playlist' }),
                            }),
                            f,
                            (0, a.jsx)('div', { className: B().content, children: b }),
                        ],
                    });
                });
            var F = i(46384),
                G = i(90852),
                $ = i(39631),
                X = i(39585),
                q = i(64284);
            let Q = (0, n.PA)((e) => {
                let { requestAwakeLumenModal: t, vibe: i, blockIndex: n, tabIndex: s } = e,
                    c = (0, $._)(),
                    { ref: u, intersectionPropertyId: m } = S({ id: i.id, blockIndex: n, tabIndex: s }),
                    { from: _ } = (0, A.f)({ blockId: ''.concat(q.U.RADIO, '-').concat(q.U.Q2V, '-').concat(i.id) }),
                    v = (0, o.useMemo)(
                        () =>
                            i.tracks.map((e, t) => {
                                var i;
                                let r = N({ entityId: e.entityId, from: _ });
                                return (0, a.jsx)(
                                    O,
                                    { playContextParams: r, type: k.K.Vibe, track: e, blockIndex: n, tabIndex: s, trackIndex: t },
                                    null == (i = e.data) ? void 0 : i.getKey(t),
                                );
                            }),
                        [i.tracks, _, s, n],
                    );
                return i.meta
                    ? (0, a.jsxs)('section', {
                          className: B().root,
                          ref: u,
                          'data-intersection-property-id': m,
                          'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_QUERY_TO_VIBE_BLOCK,
                          children: [
                              (0, a.jsx)(F.F, {
                                  blockId: q.U.HISTORY,
                                  blockType: i.type,
                                  blockPosX: 1,
                                  blockPosY: n + 1,
                                  objectsCount: 1,
                                  children: (0, a.jsx)(G.B, {
                                      objectType: l.DomainObjectType.Wave,
                                      objectId: i.meta.seedsId,
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      children: (0, a.jsx)(X.K, {
                                          className: (0, r.$)(B().queryToVibeHeader, B().heading),
                                          requestAwakeLumenModal: t,
                                          vibe: i.meta,
                                          controls: c(i.meta),
                                      }),
                                  }),
                              }),
                              (0, a.jsx)('div', { className: B().content, children: v }),
                          ],
                      })
                    : null;
            });
            var Z = i(93940),
                J = i(29993),
                ee = i(79070),
                et = i(55211),
                ei = i(5407),
                ea = i(47964),
                er = i(97956),
                en = i(90420),
                eo = i(52726),
                es = i(8990),
                el = i(39267);
            let ec = (0, n.PA)((e) => {
                var t, i, n, c, u, m;
                let { vibe: v, blockIndex: p, tabIndex: g } = e,
                    {
                        experiments: x,
                        settings: { isMobile: y },
                        freeAccess: h,
                    } = (0, b.g)(),
                    { screen: f, block: C } = (0, Z.j)(),
                    T = null == f ? void 0 : f.pageIdForFrom,
                    { blockIdForFrom: j } = null != C ? C : {},
                    L = (0, ei.P)(),
                    [M, w] = (0, o.useState)(!1),
                    {
                        isPlaying: R,
                        togglePlay: P,
                        isCurrent: D,
                    } = (0, ea.B)({ seeds: (null == (t = v.meta) ? void 0 : t.seeds) || [en.M1], pageIdForFrom: T, blockIdForFrom: j }),
                    K = (0, o.useId)(),
                    H = x.checkExperiment(er.z.WebNextVibeDescription, 'on'),
                    U = v.isMultivibe,
                    V = (0, $._)()(v.meta),
                    z = U ? 'xs' : 'm',
                    { ref: W, intersectionPropertyId: Y } = S({ id: v.id, blockIndex: p, tabIndex: g }),
                    { from: X } = (0, A.f)({ blockId: 'wave-'.concat(v.id) }),
                    Q = (0, J.c)(() => {
                        if (!L()) {
                            if (h.isVibeStartRestricted) return void w(!0);
                            P();
                        }
                    }),
                    ec = (0, J.c)((e) => {
                        if (y || 2 === e.detail) return void Q();
                    }),
                    ed = (0, ee.L)(() => {
                        var e, t, i, a, r, n, o, s;
                        return H
                            ? {
                                  title: null == (e = v.meta) ? void 0 : e.title,
                                  description:
                                      null == (a = v.meta)
                                          ? void 0
                                          : a.getDescription(null != (s = null == (t = v.meta) ? void 0 : t.title) ? s : null == (i = v.meta) ? void 0 : i.description),
                              }
                            : { title: null != (o = null == (r = v.meta) ? void 0 : r.title) ? o : null == (n = v.meta) ? void 0 : n.description };
                    }),
                    eu = (0, o.useCallback)(() => {
                        var e, t, i, n, o;
                        return (null == (e = v.meta) ? void 0 : e.shouldShowAgent) && (null == (t = v.meta) ? void 0 : t.agent)
                            ? (0, a.jsx)(et.n, {
                                  agent: v.meta.agent,
                                  isPlaying: R,
                                  isCurrent: D,
                                  onPlayButtonClick: Q,
                                  className: (0, r.$)(B().vibeCover, { [B().multivibeContainer]: U }),
                                  playButtonIconSize: z,
                                  fallbackIconSize: z,
                                  coverClassName: (0, r.$)({ [B().multivibeCover]: U }),
                                  entityCoverClassName: (0, r.$)({ [B().multivibeAvatar]: U }),
                                  controlClassName: (0, r.$)({ [B().multivibeControl]: U }),
                              })
                            : (0, a.jsx)(el.q, {
                                  isCurrent: D,
                                  isPlaying: R,
                                  isAvailable: !0,
                                  onPlayButtonClick: Q,
                                  title: null == (i = v.meta) ? void 0 : i.title,
                                  entityCoverStyle: { backgroundColor: null == (n = v.meta) ? void 0 : n.backgroundColor },
                                  ariaDescribedBy: K,
                                  coverUri: null == (o = v.meta) ? void 0 : o.imageUrl,
                                  radius: 'round',
                                  withLoadingIndicator: !1,
                                  className: (0, r.$)(B().vibeCover, { [B().multivibeContainer]: U }),
                                  playButtonIconSize: z,
                                  fallbackIconSize: z,
                                  coverClassName: (0, r.$)({ [B().multivibeCover]: U }),
                                  entityCoverClassName: (0, r.$)({ [B().multivibeAvatar]: U }),
                                  controlClassName: (0, r.$)({ [B().multivibeControl]: U }),
                              });
                    }, [
                        Q,
                        D,
                        R,
                        K,
                        null == (i = v.meta) ? void 0 : i.agent,
                        null == (n = v.meta) ? void 0 : n.backgroundColor,
                        null == (c = v.meta) ? void 0 : c.imageUrl,
                        null == (u = v.meta) ? void 0 : u.shouldShowAgent,
                        null == (m = v.meta) ? void 0 : m.title,
                        U,
                        z,
                    ]),
                    em = (0, ee.L)(() => {
                        var e, t;
                        return v.isShimmerVisible
                            ? (0, a.jsx)(E.M, { isActive: v.isShimmerActive, className: B().header, coverRadius: 'round' })
                            : (0, a.jsx)(F.F, {
                                  blockId: q.U.HISTORY,
                                  blockType: v.type,
                                  blockPosX: 1,
                                  blockPosY: p + 1,
                                  objectsCount: 1,
                                  children: (0, a.jsx)(G.B, {
                                      objectType: l.DomainObjectType.Wave,
                                      objectId: null == (e = v.meta) ? void 0 : e.seedsId,
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      children: (0, a.jsxs)(es.C, {
                                          className: (0, r.$)(B().header, B().vibeHeader),
                                          onClick: ec,
                                          'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_HEADER,
                                          children: [
                                              (0, a.jsx)(eo.S, {
                                                  isOpened: M,
                                                  onOpenChange: w,
                                                  isEnabled: h.isVibeStartRestricted,
                                                  placement: 'bottom',
                                                  textVariant: 'vibe',
                                                  vibeTextVariant: null == (t = v.meta) ? void 0 : t.stationType,
                                                  renderChildren: eu,
                                              }),
                                              (0, a.jsx)(I.T, {
                                                  titleSize: 'xs',
                                                  titleLineClamp: 1,
                                                  headingVariant: 'h4',
                                                  labeledForId: K,
                                                  className: (0, r.$)(B().vibeTextBlock, { [B().vibeTextBlock_withControls]: V }),
                                                  ...ed,
                                              }),
                                              V,
                                          ],
                                      }),
                                  }),
                              });
                    }),
                    e_ = (0, o.useMemo)(
                        () =>
                            v.tracks.map((e, t) => {
                                var i;
                                let r = N({ entityId: e.entityId, from: X });
                                return (0, a.jsx)(
                                    O,
                                    { playContextParams: r, type: k.K.Vibe, track: e, blockIndex: p, tabIndex: g, trackIndex: t },
                                    null == (i = e.data) ? void 0 : i.getKey(t),
                                );
                            }),
                        [v.tracks, X, g, p],
                    );
                return (0, a.jsxs)('section', {
                    className: B().root,
                    ref: W,
                    'data-intersection-property-id': Y,
                    'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_VIBE_BLOCK,
                    children: [
                        !H &&
                            (0, a.jsx)(_.DZ, {
                                className: (0, r.$)(B().header, B().heading),
                                variant: 'h3',
                                'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_VIBE,
                                children: (0, a.jsx)(s.A, { id: 'music-history.my-vibe' }),
                            }),
                        em,
                        (0, a.jsx)('div', { className: B().content, children: e_ }),
                    ],
                });
            });
            var ed = i(67841),
                eu = i.n(ed);
            let em = (0, n.PA)((e) => {
                let { tab: t, tabIndex: i, onTabShowOrHide: r, shouldHideInactiveTab: n, ...s } = e,
                    { lumen: l } = (0, b.g)(),
                    c = (0, h.s)(f.n.MUSIC_HISTORY),
                    { awakeLumenModal: u, requestAwakeLumenModal: m } = (0, x.z)(),
                    v = (0, y.f)(),
                    k = (0, o.useMemo)(() => {
                        var e;
                        return null == (e = t.blocks)
                            ? void 0
                            : e
                                  .map((e, t) => {
                                      switch (e.type) {
                                          case g.D.ALBUM:
                                              return (0, a.jsx)(K, { album: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.PLAYLIST:
                                              return (0, a.jsx)(Y, { playlist: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.MULTIVIBE_WAVE:
                                          case g.D.WAVE:
                                              return (0, a.jsx)(ec, { vibe: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.ARTIST:
                                              return (0, a.jsx)(H, { artist: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.SEARCH:
                                          case g.D.OTHER:
                                              return (0, a.jsx)(W, { common: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t));
                                          case g.D.QUERY_TO_VIBE:
                                              return v
                                                  ? (0, a.jsx)(Q, { requestAwakeLumenModal: m, vibe: e, blockIndex: t, tabIndex: i }, ''.concat(e.key, '_').concat(t))
                                                  : null;
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    }, [t.blocks, i, v, m]),
                    T = p(),
                    A = (0, o.useRef)(null),
                    { observeElement: I } = (0, o.useContext)(C),
                    E = c.datesMap.get(t.date);
                return (
                    (0, o.useEffect)(() => {
                        I({
                            elementId: t.date,
                            elementRef: A,
                            index: 0,
                            onShow: () => {
                                (c.setDatesMap(t.date, !0), r());
                            },
                            onHide: () => {
                                (c.setDatesMap(t.date, !1), r());
                            },
                        });
                    }, [c, c.datesMap, I, r, t.date]),
                    (0, o.useEffect)(() => {
                        l.isEnabled && l.getData();
                    }, [l]),
                    (0, a.jsxs)('div', {
                        'aria-hidden': !E && n,
                        ref: A,
                        'data-intersection-property-id': t.date,
                        className: eu().root,
                        ...s,
                        ...{ inert: !!(!E && n) },
                        'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB,
                        children: [
                            u,
                            (0, a.jsx)(_.DZ, {
                                'data-date-anchor': t.date,
                                className: eu().date,
                                variant: 'h2',
                                size: 'm',
                                'data-test-id': d.e8.musicHistory.MUSIC_HISTORY_TAB_DATE,
                                children: T(t.date),
                            }),
                            (0, a.jsx)('div', { className: eu().content, children: k }),
                        ],
                    })
                );
            });
            var e_ = i(32596),
                ev = i(98427),
                ep = i(44230),
                eg = i(37670),
                ex = i(94058),
                ey = i(86790),
                eh = i(60266),
                ef = i(56248),
                eb = i(87366),
                eC = i(76099),
                ek = i(8840);
            let eT = (e) => {
                    let { children: t } = e,
                        i = (0, o.useRef)({}),
                        r = (0, o.useMemo)(
                            () =>
                                (0, ek.Gv)((e) => {
                                    var t, a;
                                    let r = (0, ek.L5)(e.target),
                                        n = i.current[r];
                                    e.isIntersecting ? null == n || null == (t = n.onShow) || t.call(n) : null == n || null == (a = n.onHide) || a.call(n);
                                }),
                            [],
                        );
                    (0, o.useEffect)(() => () => (null == r ? void 0 : r.disconnect()), [r]);
                    let n = (0, o.useCallback)(
                            (e) => {
                                !i.current[e.elementId] && e.elementRef.current && (null == r || r.observe(e.elementRef.current), (i.current[e.elementId] = e));
                            },
                            [r],
                        ),
                        s = (0, o.useCallback)(
                            (e) => {
                                let t = i.current[e];
                                t && t.elementRef.current && (null == r || r.unobserve(t.elementRef.current));
                            },
                            [r],
                        ),
                        l = (0, o.useMemo)(() => ({ observeElement: n, unobserveElement: s }), [n, s]);
                    return (0, a.jsx)(C.Provider, { value: l, children: t });
                },
                eA = async (e, t) =>
                    new Promise((i) => {
                        if ('onscrollend' in window) {
                            var a;
                            let r = () => {
                                var e;
                                (i(), null == (e = t.current) || e.removeEventListener('scrollend', r));
                            };
                            (null == (a = t.current) || a.addEventListener('scrollend', r), e.scrollIntoView({ behavior: 'smooth' }));
                        } else (e.scrollIntoView({ behavior: 'smooth' }), window.setTimeout(i, 1e3));
                    });
            var eI = i(82007),
                eE = i.n(eI),
                eN = i(65600);
            let eS = (0, n.PA)(() => {
                let [e, t] = (0, o.useState)(!1),
                    i = (0, h.s)(f.n.MUSIC_HISTORY),
                    { contentScrollRef: n, setContentScrollRef: v } = (0, ep.g)(),
                    g = (0, m.zb)(0),
                    x = (0, o.useRef)(!1),
                    y = (0, o.useRef)(null),
                    b = (0, o.useCallback)(
                        async (e) => {
                            var a;
                            t(!0);
                            let r = i.dates[e];
                            if (!r) return;
                            (null == (a = g.onTabChange) || a.call(g, e), (x.current = !0));
                            let o = document.querySelector('[data-date-anchor="'.concat(r, '"]'));
                            (o && ((y.current = n), await eA(o, y)), (x.current = !1));
                        },
                        [i.dates, g, n],
                    ),
                    C = (0, o.useCallback)(() => {
                        if (x.current) return;
                        let e = i.dates.findIndex((e) => i.datesMap.get(e));
                        if (e >= 0) {
                            var t;
                            null == (t = g.onTabChange) || t.call(g, e);
                        }
                    }, [i.dates, i.datesMap, g]);
                ((0, o.useEffect)(() => () => i.reset(), [i]), (0, eg.J)(i.isResolved));
                let k = (0, o.useMemo)(() => {
                        var t;
                        return i.isRejected
                            ? (0, a.jsx)(e_.SomethingWentWrong, { className: (0, r.$)(eE().error, eE().important), withBackwardControl: !1 })
                            : i.isShimmerVisible
                              ? (0, a.jsx)(eN.v, { isActive: i.isShimmerActive })
                              : i.isEmpty
                                ? (0, a.jsx)('div', {
                                      className: eE().empty,
                                      children: (0, a.jsx)(_.HL, {
                                          variant: 'div',
                                          size: 'm',
                                          weight: 'normal',
                                          children: (0, a.jsx)(s.A, { id: 'music-history.empty-title' }),
                                      }),
                                  })
                                : null == (t = i.tabs)
                                  ? void 0
                                  : t.map((t, i) =>
                                        (0, a.jsx)(em, { onTabShowOrHide: C, 'data-intersection-property-id': t.date, tab: t, tabIndex: i, shouldHideInactiveTab: e }, i),
                                    );
                    }, [C, i.isEmpty, i.isRejected, i.isShimmerActive, i.isShimmerVisible, i.tabs, e]),
                    T = p(),
                    A = (0, o.useMemo)(
                        () =>
                            (0, a.jsx)(eC.wI, {
                                isShimmerVisible: i.isShimmerVisible,
                                className: eE().tabs,
                                ...g,
                                onTabChange: b,
                                shimmer: (0, a.jsx)(eC.zr, { className: eE().tabs, count: 5 }),
                                children: i.dates.map((e, t) =>
                                    (0, a.jsx)(
                                        eb.o,
                                        {
                                            className: (0, r.$)(eE().tab, { [eE().tab_selected]: t === g.value }),
                                            titleClassName: eE().date,
                                            'aria-label': T(e, !1),
                                            title: T(e, !1),
                                            value: t,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        [T, b, i.dates, i.isShimmerVisible, g],
                    );
                return (
                    i.isNeededToLoad && (0, o.use)(i.getMusicHistory()),
                    (0, a.jsx)(c.a, {
                        pageId: l.AppScreen.MusicHistoryScreen,
                        pageIdForFrom: ev.b.HISTORY,
                        children: (0, a.jsxs)('div', {
                            className: eE().root,
                            'data-test-id': d.Xk.musicHistory.MUSIC_HISTORY_PAGE,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: eE().headerContainer,
                                    children: [
                                        (0, a.jsxs)('div', {
                                            className: eE().header,
                                            children: [
                                                (0, a.jsx)(ef.L, { withForwardControl: !1 }),
                                                (0, a.jsx)(_.DZ, {
                                                    variant: 'h1',
                                                    weight: 'bold',
                                                    size: 'xl',
                                                    lineClamp: 1,
                                                    children: (0, a.jsx)(s.A, { id: 'music-history.title' }),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(ex.F, { className: eE().carousel, carouselElement: A }),
                                    ],
                                }),
                                (0, a.jsxs)(u.N, {
                                    ref: v,
                                    className: eE().scroll,
                                    containerClassName: eE().scrollContainer,
                                    children: [
                                        (0, a.jsx)(eT, { children: (0, a.jsx)('div', { className: eE().content, children: k }) }),
                                        (0, a.jsx)(eh.A, { children: (0, a.jsx)(ey.w, { className: eE().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        51105: (e) => {
            e.exports = { message: 'ShareVibeSuccessNotification_message__edF4z', icon: 'ShareVibeSuccessNotification_icon__zjcuv' };
        },
        51231: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => n });
            var a = i(5120),
                r = i(31510);
            let n = (e) => {
                let t = (0, r.e)(e);
                return (0, a.wg)(t);
            };
        },
        51611: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => o });
            var a = i(53548),
                r = i(4086),
                n = i(41928);
            let o = () => {
                let e = (0, n.N)().get(r.Xc),
                    t = e.getLanguage(),
                    i = e.getDefaultLanguage(),
                    o = e.getDictionary(),
                    s = e.getAvailableLanguages(),
                    l = (0, a.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, a.useMemo)(() => ({ dictionary: o, language: t, defaultLanguage: i, availableLanguages: s, setLanguage: l }), [t, l]);
            };
        },
        51724: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = (e) => {
                var t, i, a, r, n, o;
                let s = null == (t = e.available) || t,
                    l = null != (i = e.disclaimers) ? i : [];
                return (
                    e.contentRestrictions &&
                        ((s = null == (n = null == (a = e.contentRestrictions) ? void 0 : a.available) || n),
                        (l = null != (o = null == (r = e.contentRestrictions) ? void 0 : r.disclaimers) ? o : [])),
                    { available: s, disclaimers: l }
                );
            };
        },
        52643: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => s });
            var a = i(5120),
                r = i(14283),
                n = i(51724),
                o = i(12906);
            let s = (e) => {
                var t, i;
                let { album: s, artists: l, bookmateOptionRequired: c, chart: d, likesCount: u, trailer: m, releaseYear: _, releaseDate: v } = e,
                    { available: p, disclaimers: g } = (0, n.f)(s);
                return (0, a.wg)({
                    // for PulseSync WebHost: BEGIN normalize addon album IDs to numbers
                    id: Number(s.id),
                    // for PulseSync WebHost: END normalize addon album IDs to numbers
                    title: s.title,
                    // for PulseSync WebHost: BEGIN accept addon album cover and album-type metadata
                    coverUri: (null == (t = s.cover) ? void 0 : t.uri) ?? s.coverUri ?? s.ogImage,
                    type: s.albumType ?? s.type,
                    // for PulseSync WebHost: END accept addon album cover and album-type metadata
                    disclaimers: g,
                    artists: null == l ? void 0 : l.map((e) => (0, r.a)({ artist: e })),
                    averageColor: null == (i = s.cover) ? void 0 : i.color,
                    isAvailable: p,
                    likesCount: u,
                    bookmateOptionRequired: c,
                    chart: d,
                    trailer: (0, o.m)(m),
                    // for PulseSync WebHost: BEGIN accept addon album year and release-date metadata
                    year: _ ? Number(_) : s.year,
                    releaseDate: v ?? s.releaseDate,
                    // for PulseSync WebHost: END accept addon album year and release-date metadata
                });
            };
        },
        53892: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => a });
            let a = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                COLLECTION_VIBES: 'pages/collection-vibes',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        54719: (e) => {
            e.exports = {
                header: 'MusicHistoryBlock_header__sIFVC',
                queryToVibeHeader: 'MusicHistoryBlock_queryToVibeHeader__iRBjG',
                vibeHeader: 'MusicHistoryBlock_vibeHeader__HWzD5',
                vibeCover: 'MusicHistoryBlock_vibeCover__RnM_6',
                multivibeContainer: 'MusicHistoryBlock_multivibeContainer__GTbRL',
                multivibeCover: 'MusicHistoryBlock_multivibeCover__rzU94',
                multivibeAvatar: 'MusicHistoryBlock_multivibeAvatar__Tbme3',
                multivibeControl: 'MusicHistoryBlock_multivibeControl__J85EM',
                vibeTextBlock: 'MusicHistoryBlock_vibeTextBlock__nvhPk',
                vibeTextBlock_withControls: 'MusicHistoryBlock_vibeTextBlock_withControls__GrTcY',
                heading: 'MusicHistoryBlock_heading__HEfmk',
                headerTitle: 'MusicHistoryBlock_headerTitle__Yhyst',
                content: 'MusicHistoryBlock_content__S9lfi',
                artists: 'MusicHistoryBlock_artists__AjuWP',
                artistLink: 'MusicHistoryBlock_artistLink__yFHPE',
                shimmerTitle: 'MusicHistoryBlock_shimmerTitle__Mx1IC',
            };
        },
        55211: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => d });
            var a = i(88800),
                r = i(65724),
                n = i(21284),
                o = i(79070),
                s = i(39267),
                l = i(85925),
                c = i.n(l);
            let d = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: l,
                        onPlayButtonClick: d,
                        shouldShowControl: u = !0,
                        playButtonIconSize: m,
                        alt: _,
                        className: v,
                        coverClassName: p,
                        entityCoverClassName: g,
                        controlClassName: x,
                        fallbackIconSize: y,
                    } = e,
                    h = (0, o.L)(() => {
                        if (t.entityType) return t.entityType === n.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, a.jsx)(s.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(c().root, c()['root_radius_'.concat(h)], { [c().root_withShadow]: !!t.entityType }, v),
                    radius: h,
                    onPlayButtonClick: d,
                    isPlaying: i,
                    isCurrent: l,
                    alt: _,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: m,
                    fallbackIconSize: y,
                    coverClassName: p,
                    entityCoverClassName: g,
                    controlClassName: x,
                });
            };
        },
        56248: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(17392),
                c = i(29993),
                d = i(96817),
                u = i(52300),
                m = i(46777),
                _ = i(50320),
                v = i.n(_);
            let p = (0, n.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: i = !0,
                        shouldFocusOnMount: n = !0,
                        className: _,
                        withBackwardFallback: p,
                        buttonSize: g = 'xxs',
                        onBackwardClick: x,
                    } = e,
                    { formatMessage: y } = (0, s.A)(),
                    { canBack: h, canForward: f, moveBack: b, moveForward: C } = (0, m.J)(p),
                    k = (0, o.useRef)(null),
                    T = (0, c.c)((e) => {
                        if ((e.stopPropagation(), x)) return void x();
                        b();
                    }),
                    A = (0, c.c)((e) => {
                        (e.stopPropagation(), C());
                    });
                return (
                    (0, o.useEffect)(() => {
                        n && k.current && h && k.current.focus();
                    }, [h]),
                    (0, a.jsxs)('div', {
                        className: (0, r.$)(v().root, _),
                        'data-test-id': l.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, a.jsx)(d.$, {
                                    ref: k,
                                    'aria-label': y({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !h,
                                    size: g,
                                    icon: (0, a.jsx)(u.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: T,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            i &&
                                (0, a.jsx)(d.$, {
                                    'aria-label': y({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !f,
                                    size: g,
                                    icon: (0, a.jsx)(u.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: A,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var a = i(88800),
                r = i(53548),
                n = i(2058),
                o = i(17392),
                s = i(96817),
                l = i(52300),
                c = i(39318);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: v,
                            className: p,
                            forwardRef: g,
                            style: x,
                            children: y,
                        } = e,
                        { formatMessage: h } = (0, n.A)(),
                        f = h({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(s.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': f,
                        onClick: _,
                        ref: g,
                        icon: (0, a.jsx)(l.I, { variant: 'trailer', size: u, className: v }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': o.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        56475: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => u });
            var a = i(88800),
                r = i(53548),
                n = i(2058),
                o = i(29993),
                s = i(29595),
                l = i(74965),
                c = i(27506),
                d = i(66943);
            let u = (e) => {
                let [t, i] = (0, r.useState)(!1),
                    { notify: u } = (0, l.l)(),
                    m = (0, r.useRef)(!1),
                    { formatMessage: _ } = (0, n.A)();
                return {
                    editVibeRoom: (0, o.c)(async (t) => {
                        e &&
                            !m.current &&
                            (i(!0),
                            (m.current = !0),
                            (await e.editRoom({ roomId: e.id, name: t })) === c.F.ERROR &&
                                u((0, a.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }),
                            i(!1),
                            (m.current = !1));
                    }),
                    isPending: t,
                };
            };
        },
        56712: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => k });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(91177),
                l = i(46482),
                c = i(29993),
                d = i(52073),
                u = i(5407),
                m = i(9618),
                _ = i(4795),
                v = i(55693),
                p = i(7123),
                g = i(72288),
                x = i(8990),
                y = i(2058),
                h = i(47580),
                f = i(95993),
                b = i(27157),
                C = i.n(b);
            let k = (0, n.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: n,
                        meta: b,
                        beforeBlock: k,
                        controls: T,
                        playButtonCellRender: A,
                        withLightning: I,
                        isPlaying: E,
                        isCurrent: N,
                        togglePlay: S,
                        restartPlay: j,
                        onPlayClick: L,
                        playButtonIconSize: M,
                        skipFreemiumCloseListeningPaywall: w = !1,
                        ...R
                    } = e,
                    { shouldShowBuySubscriptionModal: P, showBuySubscriptionModal: O } = (0, m.q)(),
                    {
                        track: D,
                        fullscreenPlayer: B,
                        settings: { isMobile: K },
                        album: H,
                        albumCPA: { isPlusCPAPlayerBarEnabled: U },
                        paywall: { modal: V },
                    } = (0, g.g)(),
                    z = (0, s.D)(),
                    W = (0, l.g)(),
                    Y = (0, u.P)(),
                    F = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: a } = (0, y.A)();
                        return ((e, t, i) => {
                            var a;
                            let { withLightning: r } = t,
                                n = (0, h.j)(null != (a = e.artists) ? a : []);
                            return e.isAvailable
                                ? [n, e.title, e.version, r && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(n, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: i }, a);
                    })({ withLightning: I, track: n }),
                    G = ((e) => {
                        let { sonataState: t } = (0, g.g)(),
                            i = t.status === p.MT.LOADING_MEDIA_SOURCE || t.status === p.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let a = t.entityMeta.entityId;
                            return i && a === e;
                        }
                        return i;
                    })(n.entityId),
                    $ = U(H.id, null == (t = H.meta) ? void 0 : t.isNonMusic),
                    X = n.isAvailable && P && !$,
                    q = (0, _.N)(),
                    Q = n.isAvailable && q && !$ && !w,
                    Z = (0, f.w)({ track: n, callback: S }),
                    J = (0, c.c)(() => {
                        D.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, f.w)({ track: n, callback: J }),
                    { sendPlaySearchFeedback: et } = (0, v.z)(),
                    [ei, ea] = (0, o.useState)(!1),
                    er = (0, c.c)(() => {
                        if (!Y()) {
                            if (X) return void O();
                            if (Q) return void V.open();
                            (ei || E || (ea(!0), null == et || et()), Z(), E || W(), null == L || L(!E));
                        }
                    }),
                    en = (0, c.c)(() => {
                        if (E) return void j();
                        er();
                    }),
                    eo = (0, c.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (P && n.isAvailableOnlyForPlus && O(), q && n.isAvailableOnlyForPlus && V.open());
                            return;
                        }
                        if (X) return void O();
                        let t = !K && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !B.modal.isOpened));
                        return Q && !t
                            ? void V.open()
                            : ((0, d.P)(e, C().ripple), K)
                              ? void er()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !B.modal.isOpened && (ee(), Q && V.open()));
                    }),
                    es = null == A ? void 0 : A({ onPlayButtonClick: er, isPlaying: E, isCurrent: N, isLoading: G, playButtonIconSize: M });
                return (0, a.jsxs)(x.C, {
                    ref: z,
                    'aria-label': F,
                    // for PulseSync WebHost: BEGIN publish the track ID on the native track DOM element for addons
                    'data-pulsesync-track-id': n.id,
                    // for PulseSync WebHost: END publish the track ID on the native track DOM element for addons
                    onClick: eo,
                    className: (0, r.$)(C().root, { [C().root_disabled]: !n.isAvailable, [C().root_current]: N && K }, i),
                    ...R,
                    children: [k, es, b, T],
                });
            });
        },
        57448: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => n });
            var a = i(4086),
                r = i(41928);
            let n = () => {
                let e = (0, r.N)(),
                    t = e.get(a.$I),
                    i = e.get(a.EN),
                    n = e.get(a.N1),
                    o = e.get(a._1),
                    s = e.get(a.V3),
                    l = e.get(a.Lb),
                    c = e.get(a.wK),
                    d = e.get(a.tz),
                    u = e.get(a.$8),
                    m = e.get(a.Oo),
                    _ = e.get(a.X4),
                    v = e.get(a.O9),
                    p = e.get(a.E),
                    g = e.get(a.wH),
                    x = e.get(a.ok),
                    y = e.get(a.X8),
                    h = e.get(a.yq),
                    f = e.get(a.NN),
                    b = e.get(a.qN),
                    C = e.get(a.ro),
                    k = e.get(a.nM),
                    T = e.get(a.Ut),
                    A = e.get(a.K1),
                    I = e.get(a.eu),
                    E = e.get(a.SD),
                    N = e.get(a.aE),
                    S = e.get(a.ki),
                    j = e.get(a.c9),
                    L = e.get(a.en),
                    M = e.get(a.jQ),
                    w = e.get(a.cZ),
                    R = e.get(a.Zl),
                    P = e.get(a.CN),
                    O = e.get(a.P1),
                    D = e.get(a.zj),
                    B = e.get(a.re),
                    K = e.get(a.JM),
                    H = e.get(a.Lk),
                    U = e.get(a.$$),
                    V = e.get(a.sv),
                    z = e.get(a.gd),
                    W = e.get(a.Ez),
                    Y = e.get(a.u2),
                    F = e.get(a.TD),
                    G = e.get(a.dh),
                    $ = e.get(a.LC),
                    X = e.get(a.PL),
                    q = e.get(a.DT);
                return {
                    accountResource: t,
                    afterTrackResource: i,
                    disclaimersResource: n,
                    usersResource: o,
                    landingResource: s,
                    landing3Resource: l,
                    landingBlocksResource: c,
                    albumResource: d,
                    libraryResource: u,
                    tracksResource: m,
                    topResource: _,
                    artistsResource: v,
                    slidesResource: p,
                    redAlertResource: g,
                    rotorResource: x,
                    waveResource: y,
                    searchResource: h,
                    searchPlaylistResource: f,
                    playlistResource: b,
                    playlistsResource: C,
                    pinResource: k,
                    metatagsResource: T,
                    tagResource: A,
                    feedResource: I,
                    wizard3Resource: E,
                    pinsResource: N,
                    musicHistoryResource: S,
                    dynamicPagesResource: j,
                    chartResource: L,
                    clipsResource: M,
                    lyricViewsResource: w,
                    nonMusicResource: R,
                    donationResource: P,
                    loaderResource: O,
                    lumenResource: D,
                    prefixlessResource: B,
                    streamsResource: K,
                    filtersResource: H,
                    ugcResource: U,
                    collectionResource: V,
                    adsResource: z,
                    personalResource: W,
                    familyResource: Y,
                    childrenLandingResource: F,
                    promoResource: G,
                    telemetryResource: $,
                    labelsResource: X,
                    concertsResource: q,
                    wordsResource: e.get(a.dA),
                    wheelResource: e.get(a.$Y),
                };
            };
        },
        59265: (e) => {
            e.exports = {
                controls: 'MultivibeContextMenu_controls__YNvPC',
                controls_renaming: 'MultivibeContextMenu_controls_renaming__ojUjw',
                contextMenu: 'MultivibeContextMenu_contextMenu__F1lu5',
                contextMenu_hidden: 'MultivibeContextMenu_contextMenu_hidden__01LaD',
                contextMenuButton: 'MultivibeContextMenu_contextMenuButton__7_r0x',
                collection: 'MultivibeContextMenu_collection__7dnDT',
                description: 'MultivibeContextMenu_description__v_EaQ',
                divider: 'MultivibeContextMenu_divider__84xJC',
                loader: 'MultivibeContextMenu_loader__iTBIV',
                renameInput: 'MultivibeContextMenu_renameInput___vU4d',
            };
        },
        59378: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => c });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(34970),
                l = i.n(s);
            let c = (0, n.PA)((e) => {
                let {
                        className: t,
                        text: i = '',
                        maxTextLength: n,
                        minTextLength: s,
                        variant: c = 'input',
                        shouldFinishOnKeyPress: d = !1,
                        placeholder: u,
                        onChangeFinish: m,
                        withOutline: _ = !1,
                        readOnly: v = !1,
                        'aria-label': p,
                        'data-test-id': g,
                    } = e,
                    [x, y] = (0, o.useState)(i),
                    h = (0, o.useRef)(!1),
                    f = (0, o.useRef)(null),
                    b = (0, o.useCallback)((e) => {
                        y(e.target.value);
                    }, []),
                    C = (0, o.useCallback)(
                        (e) => {
                            if (d && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (h.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [d],
                    ),
                    k = (0, o.useCallback)(() => {
                        let e = x.trim();
                        h.current || (s && e.length < s) ? ((h.current = !1), null == m || m(i)) : null == m || m(e);
                    }, [x, h, s, m, i]);
                ((0, o.useEffect)(() => {
                    f.current && ((f.current.selectionStart = f.current.value.length), (f.current.selectionEnd = f.current.value.length));
                }, []),
                    (0, o.useLayoutEffect)(() => {
                        let e = f.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [f, x]));
                let T = (0, o.useMemo)(() => ('textarea' === c ? (e) => (0, a.jsx)('textarea', { ref: f, rows: 6, ...e }) : (e) => (0, a.jsx)('input', { ...e })), [c]);
                return (0, a.jsx)(T, {
                    className: (0, r.$)(l().root, t, { [l().root_textarea]: 'textarea' === c, [l().root_outline]: _ }),
                    type: 'text',
                    value: x,
                    readOnly: v,
                    maxLength: n,
                    onBlur: k,
                    onChange: b,
                    onKeyDown: C,
                    placeholder: u,
                    'aria-label': p,
                    autoFocus: !0,
                    'data-test-id': g,
                });
            });
        },
        60208: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => n });
            var a = i(4086),
                r = i(41928);
            let n = () => (0, r.N)().get(a.SX);
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => o });
            var a = i(88800);
            i(30282);
            var r = i(11006),
                n = i.n(r);
            let o = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: n().empty });
            };
        },
        62270: (e) => {
            e.exports = {
                buttonArrow: 'EntityCard_buttonArrow__ussa7',
                titleLink: 'EntityCard_titleLink__3ucPa',
                titleText: 'EntityCard_titleText___EU9t',
                root: 'EntityCard_root__HNsWx',
                root_disabled: 'EntityCard_root_disabled__qdBaH',
                ripple: 'EntityCard_ripple__iMHNo',
                playButtonCell: 'EntityCard_playButtonCell__AYoR5',
                controlsBarCell: 'EntityCard_controlsBarCell__GpbEX',
                text: 'EntityCard_text__hChwj',
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var a = i(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: n } = e;
                return 'ru' === n && t(a.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        65453: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => c });
            var a,
                r = i(53548),
                n = {
                    5881: (e, t, i) => {
                        function a() {
                            for (var e, t, i = 0, a = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            a,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (a = e(t[i])) && (r && (r += ' '), (r += a));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (i.r(t), i.d(t, { clsx: () => a, default: () => r }));
                        let r = a;
                    },
                    7354: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => a }));
                        let a = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var r = null;
                            if ((void 0 !== a && (r = '' + a), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var n in ((a = {}), t)) 'key' !== n && (a[n] = t[n]);
                            else a = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    3616: function (e, t, i) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let r = i(4377),
                            n = i(810),
                            o = i(5881),
                            s = a(i(7354)),
                            l = (e) => {
                                let {
                                        component: t = (0, r.jsx)('a', {}),
                                        block: i,
                                        target: a,
                                        rel: l,
                                        href: c,
                                        forwardRef: d,
                                        iconPosition: u = 'left',
                                        flexIcon: m,
                                        icon: _,
                                        className: v,
                                        children: p,
                                        textClassName: g = '',
                                        containerClassName: x,
                                        ...y
                                    } = e,
                                    h = (0, n.useId)(),
                                    f = !n.Children.count(p),
                                    b = 'left' === u,
                                    C = null;
                                if (void 0 !== _) {
                                    var k;
                                    C = (0, n.cloneElement)(_, {
                                        className: (0, o.clsx)(
                                            s.default.icon,
                                            { [s.default['icon_position_'.concat(u)]]: !f && u },
                                            null == (k = _.props) ? void 0 : k.className,
                                        ),
                                        key: h,
                                    });
                                }
                                let T = (0, n.useMemo)(
                                    () =>
                                        _
                                            ? (0, r.jsxs)('div', {
                                                  className: (0, o.clsx)(s.default.iconContainer, x),
                                                  children: [b && C, !f && (0, r.jsx)('span', { className: g, children: p }), !b && C],
                                              })
                                            : p,
                                    [p, x, _, b, f, C, g],
                                );
                                return (0, n.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: a,
                                        rel: '_blank' === a && void 0 === l ? 'noopener noreferrer' : l,
                                        href: c,
                                        className: (0, o.clsx)(s.default.root, { [s.default.block]: i, [s.default.flexIcon]: _ && m, [s.default.iconOnly]: _ && f }, v),
                                        ...y,
                                        ...t.props,
                                    },
                                    T,
                                );
                            };
                        t.Link = (0, n.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (n[e].call(i.exports, i, i.exports, s), i.exports);
            }
            ((s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.r = void 0));
                var e = s(3616);
                Object.defineProperty(l, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = l.r;
            l.X;
        },
        65523: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => s });
            var a = i(4086),
                r = i(41928),
                n = i(44084);
            let o = new WeakMap(),
                s = () =>
                    ((e) => {
                        if (e instanceof n.r) return e;
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
                    })((0, r.N)().get(a.Zf));
        },
        65600: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => d });
            var a = i(88800),
                r = i(19994),
                n = i(98644),
                o = i(42123),
                s = i(93015),
                l = i(97766),
                c = i.n(l);
            let d = (e) => {
                let { isActive: t } = e,
                    i = (0, a.jsxs)('div', {
                        className: c().trackListShimmers,
                        children: [
                            (0, a.jsx)(s.D, { isActive: t, variant: n.X.PLAYLIST }),
                            (0, a.jsx)(s.D, { isActive: t, variant: n.X.PLAYLIST }),
                            (0, a.jsx)(s.D, { isActive: t, variant: n.X.PLAYLIST }),
                        ],
                    });
                return (0, a.jsxs)('div', {
                    className: c().shimmersContainer,
                    children: [
                        (0, a.jsx)(r.W, { isActive: t, className: c().dateShimmer }),
                        (0, a.jsx)(r.W, { isActive: t, className: c().contextNameShimmer }),
                        (0, a.jsx)(o.M, { withDescription: !0, className: c().contextHeaderShimmer }),
                        i,
                        (0, a.jsx)(r.W, { isActive: t, className: c().contextNameShimmer }),
                        (0, a.jsx)(o.M, { coverRadius: 'round', className: c().contextHeaderShimmer }),
                        i,
                    ],
                });
            };
        },
        67841: (e) => {
            e.exports = { date: 'MusicHistoryTab_date__Fjy3P', content: 'MusicHistoryTab_content__Jt15j' };
        },
        69704: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => r, W: () => n });
            var a = i(53548);
            let r = (0, a.createContext)({ theme: null, setTheme: () => {} }),
                n = () => (0, a.useContext)(r);
        },
        70134: (e, t, i) => {
            'use strict';
            i.d(t, { u: () => R });
            var a = i(88800),
                r = i(84961),
                n = i(88969),
                o = i(17392),
                s = i(52300),
                l = i(19934),
                c = i(72288),
                d = i(43966),
                u = i(53548),
                m = i(2058),
                _ = i(35412),
                v = i(97234),
                p = i(66610),
                g = i(39499),
                x = i(29993),
                y = i(4086),
                h = i(41928),
                f = i(65523),
                b = i(29595),
                C = i(74965),
                k = i(57448),
                T = i(72131),
                A = i(202),
                I = i(66943),
                E = i(29504),
                N = i(59304),
                S = i(51105),
                j = i.n(S);
            let L = (e) => {
                let { closeToast: t } = e;
                return (0, a.jsx)(N.$, {
                    closeToast: t,
                    cover: (0, a.jsx)(s.I, { className: j().icon, size: 'xs', variant: 'chain' }),
                    coverRadius: 's',
                    message: (0, a.jsx)(E.HL, {
                        className: j().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, a.jsx)(n.A, { id: 'shared-vibe.link-successfully-copied', values: { b: (e) => (0, a.jsx)('b', { children: e }) } }),
                    }),
                });
            };
            var M = i(7665),
                w = i.n(M);
            let R = (0, r.PA)((e) => {
                let { vibe: t, className: i, iconClassName: r } = e,
                    { sharedVibe: E } = (0, c.g)(),
                    { shareVibe: N } = ((e) => {
                        let { vibe: t } = e,
                            { user: i, paywall: r, slam: n } = (0, c.g)(),
                            { waveResource: o } = (0, k.f)(),
                            { notify: s } = (0, C.l)(),
                            { formatMessage: l } = (0, m.A)(),
                            d = (0, f.U)(),
                            E = (0, h.N)().get(y.V4),
                            N = (0, T._)(E.webHost),
                            S = (0, u.useRef)(!1),
                            j = (0, p.D)(),
                            M = (0, x.c)((e) => {
                                (e && d.error(new g.t('Failed to share a vibe', { cause: e })),
                                    s((0, a.jsx)(I.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: b.u.ERROR }));
                            }),
                            { startClipboardWrite: w } = (0, A.$)({
                                format: (e) => (0, _.no)('/myvibe/:shareId', { params: { shareId: e }, options: { host: 'https://'.concat(N) } }).href,
                                onSuccess: () => {
                                    s((0, a.jsx)(L, {}), { containerId: b.u.INFO });
                                },
                                onError: M,
                            });
                        return {
                            shareVibe: (0, x.c)(async () => {
                                let e;
                                if (!S.current) {
                                    if (!i.isAuthorized)
                                        return void s((0, a.jsx)(I.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: b.u.ERROR });
                                    if (!i.hasPlus) return void r.openModal();
                                    if (n.networkStatus.isOffline || n.isOfflineModeEnabled) return void M();
                                    ((S.current = !0), j({ actionType: v.ActionType.Share, userInteractionType: v.UserInteractionType.Tap }));
                                    try {
                                        e = w();
                                        let { shareId: i } = await o.createShare({ seeds: [...t.seeds] });
                                        await e.copy(i);
                                    } catch (t) {
                                        (null == e || e.cancel(), M(t));
                                    } finally {
                                        S.current = !1;
                                    }
                                }
                            }),
                        };
                    })({ vibe: t });
                return t.isShareEnabled
                    ? (0, a.jsxs)(l.Dr, {
                          className: i,
                          icon: (0, a.jsx)(s.I, { className: r, variant: 'share', size: 'xxs' }),
                          onClick: N,
                          'data-test-id': o.S7.CONTEXT_MENU_SHARE_BUTTON,
                          children: [(0, a.jsx)(n.A, { id: 'interface-actions.share' }), E.isNdaLabelEnabled && (0, a.jsx)(d.g, { className: w().ndaLabel, size: 's' })],
                      })
                    : null;
            });
        },
        72713: (e) => {
            e.exports = { trackShimmer: 'MusicHistoryTrack_trackShimmer__yxcx9' };
        },
        73245: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => n });
            var a = i(5120),
                r = i(12906);
            let n = (e) => {
                var t, i;
                let { playlist: n, generatedPlaylistType: o, likesCount: s, trailer: l, tracksCount: c } = e;
                return (0, a.wg)({
                    isAvailable: null == (i = n.available) || i,
                    uuid: n.playlistUuid,
                    title: n.title,
                    uid: n.uid,
                    kind: n.kind,
                    coverUri: null == (t = n.cover) ? void 0 : t.uri,
                    generatedPlaylistType: o,
                    likesCount: s,
                    tracksCount: c,
                    trailer: (0, r.m)(l),
                });
            };
        },
        73805: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => R });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(97234),
                c = i(17392),
                d = i(29993),
                u = i(52300),
                m = i(17610),
                _ = i(29504),
                v = i(42174),
                p = i(96817);
            let g = (e) => {
                let { className: t, variant: i = 'text', onClick: r, iconClassName: n, iconSize: l, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, s.A)(),
                    v = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    g = (0, o.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, a.jsx)(p.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': v,
                    onClick: g,
                    icon: (0, a.jsx)(u.I, { size: l, className: n, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = i(5407),
                y = i(57934),
                h = i(55693),
                f = i(72288),
                b = i(49738),
                C = i(56446),
                k = i(64546),
                T = i(29831),
                A = i(30123),
                I = i(54965),
                E = i(1829),
                N = i(82092),
                S = i.n(N),
                j = i(79262),
                L = i(41867),
                M = i.n(L);
            let w = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, s.A)();
                    return t.isDownloaded
                        ? (0, a.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, a.jsx)(j.A, { value: t.downloadingProgress, size: 16, className: M().downloadingProgress, progressBarClassName: M().progress })
                          : null;
                }),
                R = (0, n.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: n,
                            withLightning: p,
                            ignoreDislikedStyles: N,
                            onLikeClick: j,
                            utmLink: L,
                            withSecondaryColor: M,
                            handleRemove: R,
                            withTrailer: P = !0,
                            likeIconSize: O = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: K, trailer: H } = (0, f.g)(),
                        { formatMessage: U } = (0, s.A)(),
                        { sendLikeSearchFeedback: V } = (0, h.z)(),
                        [z, W] = (0, o.useState)(!1),
                        [Y, F] = (0, o.useState)(!1),
                        G = (0, x.P)(),
                        $ = (0, v.K)(n),
                        {
                            duration: X,
                            lightning: q,
                            ugc: Q,
                        } = ((e, t, i) => {
                            var a;
                            let { withLightning: r, isUGC: n } = t,
                                o = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / A.k7);
                                              return (0, I.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== o ? { text: o, ariaLabel: (0, T.j)(Math.round((null != (a = e.durationMs) ? a : 0) / 1e3), i) } : null,
                                lightning: r ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: n ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(n, { withLightning: p, isUGC: n.isUGC }, U),
                        Z = (0, y.F)(),
                        J = K.hasPlus,
                        ee = !n.isRemoved && n.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            (z || n.isLiked || (W(!0), null == V || V()), await $(), null == j || j(n.isLiked));
                        }),
                        ei = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ea = (0, d.c)((e) => {
                            if ((e.stopPropagation(), G())) return void e.preventDefault();
                            (H.openTrackTrailer(n.id), Z(l.DomainObjectType.Track, n.id));
                        }),
                        er = (0, o.useMemo)(() => {
                            if (ee)
                                return (0, a.jsx)('div', {
                                    onClick: ei,
                                    children: (0, a.jsx)(E._, {
                                        track: n,
                                        open: Y,
                                        onOpenChange: F,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: L,
                                        className: (0, r.$)(S().contextMenu, { [S().contextMenu_visible]: Y }),
                                        handleRemove: R,
                                        withTrailer: P,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, R, Y, ee, P, n, L]);
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(S().root, S().controls, i, {
                            [S().controls_dislikedControls]: n.isDisliked,
                            [S().controls_dislikedColors]: n.isDisliked && !N,
                            [S().controls_disabled]: !n.isAvailable,
                            [S().root_withSecondaryColor]: M,
                        }),
                        children: [
                            q && (0, a.jsx)(u.I, { 'aria-label': q.label, size: 'xxs', className: S().lightning, variant: 'lightning' }),
                            Q &&
                                (0, a.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(u.I, {
                                            'aria-label': Q.label,
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(m.ZI, { children: Q.label }),
                                    ],
                                }),
                            J && (0, a.jsx)('div', { className: (0, r.$)(S().item, S().downloadIcon), children: (0, a.jsx)(w, { track: n }) }),
                            R && !B && (0, a.jsx)(g, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(S().item, S().removeButton), onClick: R, ariaLabel: D }),
                            ee &&
                                (0, a.jsx)(k.WithOffline, {
                                    fallback: (0, a.jsx)(b.c, {
                                        size: 'xs',
                                        iconSize: O,
                                        className: (0, r.$)(S().item, S().likeIcon),
                                        isLiked: n.isLiked,
                                        onClick: et,
                                        disabled: !K.isAuthorized,
                                    }),
                                }),
                            (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                n.isAvailable &&
                                (0, a.jsx)(k.WithOffline, {
                                    fallback: (0, a.jsx)(C.k, {
                                        className: (0, r.$)(S().item, S().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ea,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(S().item, S().contextMenuWrapper),
                                children: [
                                    null !== X &&
                                        (0, a.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(S().duration, { [S().duration_hidden]: Y && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': X.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: X.text }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        76168: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => o });
            var a = i(29993),
                r = i(72288),
                n = i(14912);
            let o = () => {
                let { location: e } = (0, r.g)(),
                    t = (0, n.X)();
                return (0, a.c)((i) => {
                    let a = new URL(window.location.href);
                    i.forEach((e) => a.searchParams.delete(e));
                    let r = a.toString();
                    (t(r), e.setHref(r), e.setSearchParams(a.searchParams.toString()));
                });
            };
        },
        76816: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => _ });
            var a = i(88800),
                r = i(65724),
                n = i(2058),
                o = i(17392),
                s = i(79070),
                l = i(52300),
                c = i(29504),
                d = i(90224),
                u = i(34250),
                m = i.n(u);
            let _ = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: i,
                        description: u,
                        getDescriptionTexts: _,
                        explicitMarkVariant: v,
                        className: p,
                        version: g,
                        title: x,
                        artistsComponent: y,
                        likesCount: h,
                        isLiked: f,
                        releaseYear: b,
                        titleLineClamp: C = 1,
                    } = e,
                    { formatMessage: k, formatNumber: T } = (0, n.A)(),
                    A = (0, s.L)(() => {
                        let e = null == y ? void 0 : y((0, r.$)(m().text, m().artistLink), (0, r.$)(m().text, m().artistCaption));
                        if (!e && !h) return;
                        let t = (0, a.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, a.jsxs)('div', {
                            className: m().subtitle,
                            'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof h &&
                                    h > 0 &&
                                    (0, a.jsxs)('div', {
                                        className: m().likesCount,
                                        'aria-label': k({ id: 'entity-names.likes-counter' }, { counter: h }),
                                        'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, a.jsx)(l.I, {
                                                className: m().icon,
                                                variant: f ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, a.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: T(h),
                                            }),
                                        ],
                                    }),
                                !!h && e && t,
                                e,
                                !!b && e && t,
                                (0, a.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: b }),
                            ],
                        });
                    });
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(m().root, { [m().root_disabled]: i, [m().root_disliked]: t }, p),
                    'data-test-id': o.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, a.jsxs)('div', {
                            className: m().titleContainer,
                            children: [
                                (0, a.jsxs)(c.HL, {
                                    className: (0, r.$)(m().text, m().title, { [m().title_withVersion]: g }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: C,
                                    type: 'text',
                                    'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        x,
                                        g &&
                                            (0, a.jsx)(c.HL, {
                                                className: (0, r.$)(m().text, m().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(g),
                                            }),
                                    ],
                                }),
                                v && (0, a.jsx)(d.N, { className: m().explicitMark, getDescriptionTexts: _, variant: v }),
                            ],
                        }),
                        u &&
                            (0, a.jsx)(c.HL, {
                                className: (0, r.$)(m().text, m().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: u,
                            }),
                        A,
                    ],
                });
            };
        },
        78275: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var a,
                r = i(53548),
                n = {
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                o = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useToggle = void 0));
                let e = (function e(t) {
                    var i = o[t];
                    if (void 0 !== i) return i.exports;
                    var a = (o[t] = { exports: {} });
                    return (n[t](a, a.exports, e), a.exports);
                })(810);
                s.useToggle = (t) => {
                    let [i, a] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        a(t);
                    }, [t]);
                    let r = (0, e.useCallback)(() => {
                            a((e) => !e);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            a(!0);
                        }, []),
                        o = (0, e.useCallback)(() => {
                            a(!1);
                        }, []);
                    return { state: i, toggle: r, setState: a, toggleTrue: n, toggleFalse: o };
                };
            })(),
                s.__esModule);
            var l = s.useToggle;
        },
        78460: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => n });
            var a = i(5120),
                r = i(90544);
            let n = i(83176).Z.props({ artists: a.gK.maybe(a.gK.array(r.P)) });
        },
        81192: (e) => {
            e.exports = {
                control: 'CarouselWithArrows_control__3uyYB',
                list: 'CarouselWithArrows_list__2f6lz',
                buttons: 'CarouselWithArrows_buttons__fW_Dp',
                root: 'CarouselWithArrows_root__RreSk',
                root_arrowLeft_hidden: 'CarouselWithArrows_root_arrowLeft_hidden__WmoMn',
                root_arrowRight_hidden: 'CarouselWithArrows_root_arrowRight_hidden__sQTGA',
                root_arrow_hidden: 'CarouselWithArrows_root_arrow_hidden__sltkz',
                control_left: 'CarouselWithArrows_control_left__GrTcO',
                control_right: 'CarouselWithArrows_control_right__Si_BV',
                root_carouselBetweenArrows: 'CarouselWithArrows_root_carouselBetweenArrows___aN_d',
                wrapper: 'CarouselWithArrows_wrapper__Kezgl',
                carousel: 'CarouselWithArrows_carousel__gm5sM',
                important: 'CarouselWithArrows_important__ZFlvq',
            };
        },
        81438: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => o });
            var a = i(72288),
                r = i(8655),
                n = i(69704);
            let o = () => {
                var e, t, i, o, s, l;
                let { lumen: c } = (0, a.g)(),
                    { theme: d } = (0, n.W)(),
                    u = null != d ? d : r.S.Dark,
                    m = null == (e = c.themes) ? void 0 : e[u],
                    _ = c.getFallbackImage()[u],
                    v = null != (o = null == m ? void 0 : m.cover.uri) ? o : _;
                return {
                    cover: v,
                    fullCover: null != (s = null == m || null == (t = m.fullCover) ? void 0 : t.uri) ? s : v,
                    faceCover: null != (l = null == m || null == (i = m.faceCover) ? void 0 : i.uri) ? l : v,
                    solidColor: null == m ? void 0 : m.solidColor,
                    fallbackImage: _,
                };
            };
        },
        82007: (e) => {
            e.exports = {
                root: 'MusicHistoryPage_root__FYB2m',
                scroll: 'MusicHistoryPage_scroll__ykpDX',
                scrollContainer: 'MusicHistoryPage_scrollContainer__eemvg',
                headerContainer: 'MusicHistoryPage_headerContainer__QG0L3',
                header: 'MusicHistoryPage_header__dzEvD',
                content: 'MusicHistoryPage_content__j4evw',
                footer: 'MusicHistoryPage_footer__Vu7aC',
                empty: 'MusicHistoryPage_empty__fQRHA',
                carousel: 'MusicHistoryPage_carousel__jcl8l',
                tabs: 'MusicHistoryPage_tabs__v_5Zg',
                tab: 'MusicHistoryPage_tab__WDE1e',
                tab_selected: 'MusicHistoryPage_tab_selected__nmn8P',
                date: 'MusicHistoryPage_date__OV6rR',
                error: 'MusicHistoryPage_error__9f_8i',
                important: 'MusicHistoryPage_important__qNFO8',
            };
        },
        82039: (e) => {
            e.exports = { root: 'QueryToVibeSimple_root__fOVFG' };
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
        83176: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            var a = i(5120);
            let r = a.gK.model('TrackIdModel', { id: a.gK.union(a.gK.string, a.gK.number), albumId: a.gK.maybe(a.gK.number), timestamp: a.gK.maybe(a.gK.string) }),
                n = i(39339)
                    .$.props({ tracks: a.gK.maybe(a.gK.array(r)) })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        83559: (e) => {
            e.exports = {
                root: 'HorizontalVibeControls_root__S1iQK',
                controls: 'HorizontalVibeControls_controls__AYIDP',
                bottom: 'HorizontalVibeControls_bottom__R4Elh',
                like: 'HorizontalVibeControls_like__ty4og',
                likeButton: 'HorizontalVibeControls_likeButton__77s_p',
                menu: 'HorizontalVibeControls_menu__83kQh',
                contextMenu: 'HorizontalVibeControls_contextMenu__rXU6_',
                contextMenuButton: 'HorizontalVibeControls_contextMenuButton__vX_59',
            };
        },
        85925: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => A });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(2058),
                s = i(30282),
                l = i(94144),
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
                    let { formatMessage: t, language: i, tld: a, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, a, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, a, i) },
                    };
                };
            var m = i(62293),
                _ = i(99839);
            let v = (e) => e(new Date(), (0, _.m)());
            var p = i(51611),
                g = i(72288),
                x = i(11006),
                y = i.n(x),
                h = i(17392),
                f = i(29504),
                b = i(91292);
            let C = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(y().copyrights, t),
                        'data-test-id': h.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(b.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': h.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(f.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(b.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': h.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, a.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: y().list,
                                'data-test-id': h.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, a.jsx)(b.N, { target: '_blank', href: r, className: y().link, 'data-test-id': h.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': h.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, r.$)(y().root, y().important, t),
                        'data-test-id': h.S7.FOOTER,
                        children: [(0, a.jsx)(k, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(C, { data: i.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: r, formatMessage: n } = (0, o.A)(),
                    { language: s } = (0, p.h)(),
                    l = u({ formatMessage: n, language: s, tld: i.tld, year: v(r) });
                return (0, a.jsx)(C, { className: t, data: l });
            });
            let A = (0, n.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: n, location: _, user: x } = (0, g.g)(),
                    { formatDate: h, formatMessage: f } = (0, o.A)(),
                    { isEnabled: b } = null != (t = (0, l.P)()) ? t : {},
                    { language: C } = (0, p.h)(),
                    k = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: a, language: r, tld: n, userRegion: o, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: a, language: r, userRegion: n } = e,
                                    o = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, a, r) },
                                    s = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, a, r) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, a, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, a, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, a, r) },
                                    _ = [o, l, u];
                                return (i && 'ru' === n && _.push(s), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: a, language: r, tld: n, userRegion: o }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: n, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: f,
                        isWebApplication: s.$3,
                        tld: _.tld,
                        language: C,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: v(h),
                    });
                return (0, a.jsx)(T, { className: (0, r.$)({ [y().root_withOffsetForDeeplink]: b }, i), data: k });
            });
        },
        88021: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => d });
            var a,
                r = i(14022),
                n = i(53548),
                o = {
                    352: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(n, 2));
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
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = l(810),
                    t = l(352);
                c.l = (i) => {
                    let [a, r] = (0, e.useState)(!0),
                        [n, o] = (0, e.useState)(!0),
                        s = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (r(0 === e.scrollLeft), o(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        s();
                    }, [i, s]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', s),
                                window.addEventListener('resize', s),
                                () => {
                                    (null == e || e.removeEventListener('scroll', s), window.removeEventListener('resize', s));
                                }
                            );
                        }, [i, s]));
                    let l = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    i && i.current && (i.current.scrollLeft += i.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [i],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        i && i.current && (i.current.scrollLeft -= i.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [i],
                        ),
                        swipeForward: l,
                        shouldBackwardButtonBeDisabled: a,
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: a && n,
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
        89718: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => m });
            var a = i(88800),
                r = i(84961),
                n = i(88969),
                o = i(17392),
                s = i(52300),
                l = i(19934),
                c = i(21416),
                d = i(72288),
                u = i(27817);
            let m = (0, r.PA)((e) => {
                var t;
                let { room: i, onRenameClick: r, isRenamePending: m, onPinClick: _, onExitClick: v, isExitPending: p, className: g } = e,
                    {
                        settings: { isMobile: x },
                    } = (0, d.g)(),
                    y = !(null == i ? void 0 : i.isDisabled) && !x,
                    h = !(null == i ? void 0 : i.isDisabled) && !x;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        y && (0, a.jsx)(u.L, { className: g, onClick: _, isPinned: null == (t = i.wave) ? void 0 : t.isPinned }),
                        h &&
                            (0, a.jsx)(l.Dr, {
                                className: g,
                                icon: (0, a.jsx)(s.I, { variant: 'edit', size: 'xxs' }),
                                onClick: r,
                                disabled: m,
                                spinner: m ? (0, a.jsx)(c.y, { size: 'xs' }) : void 0,
                                'data-test-id': o.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, a.jsx)(n.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, a.jsx)(l.Dr, {
                            className: g,
                            icon: (0, a.jsx)(s.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: v,
                            disabled: p,
                            spinner: p ? (0, a.jsx)(c.y, { size: 'xs' }) : void 0,
                            'data-test-id': o.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, a.jsx)(n.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
        },
        90233: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => E });
            var a = i(88800),
                r = i(53548),
                n = i(97234),
                o = i(59724),
                s = i(90852),
                l = i(29993),
                c = i(79070),
                d = i(98427),
                u = i(72288),
                m = i(65724),
                _ = i(84961),
                v = i(14955),
                p = i(17392),
                g = i(11372),
                x = i(6900),
                y = i(8655),
                h = i(29126),
                f = i.n(h),
                b = i(2058),
                C = i(36740),
                k = i(96817),
                T = i(51611);
            let A = (e) => {
                    let { isPlayButtonVisible: t, onPlayClick: i } = e,
                        { formatMessage: r } = (0, b.A)(),
                        { language: n } = (0, T.h)();
                    return (
                        (0, C.u)(),
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)('iframe', {
                                    referrerPolicy: 'no-referrer',
                                    sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                                    className: f().iframe,
                                    src: ''.concat('https://lumen.yandex.ru/lumen/birth?utm_source=music&utm_medium=q2v', '&lang=').concat(n),
                                    'data-test-id': p.S7.AWAKE_LUMEN_MODAL_IFRAME,
                                }),
                                (0, a.jsx)(k.$, {
                                    className: (0, m.$)(f().playButton, t && f().playButtonVisible),
                                    radius: 'xxxl',
                                    size: 'default',
                                    variant: 'default',
                                    color: 'primary',
                                    onClick: i,
                                    'data-test-id': p.S7.AWAKE_LUMEN_MODAL_PLAY_BUTTON,
                                    children: r({ id: 'player-actions.listen' }),
                                }),
                            ],
                        })
                    );
                },
                I = (0, _.PA)((e) => {
                    let { open: t, onOpenChange: i, onPlayAfterAwake: o } = e,
                        {
                            lumen: s,
                            settings: { isMobile: c },
                        } = (0, u.g)(),
                        [d, _] = (0, r.useState)(!1),
                        h = (0, v.I)(),
                        b = (0, l.c)(async (e) => {
                            let t = s.isAwakened;
                            try {
                                e || (await s.getData(!0));
                            } finally {
                                (e ||
                                    t ||
                                    !s.isAwakened ||
                                    h({
                                        actionType: n.ActionType.LumenAwakened,
                                        userInteractionType: n.UserInteractionType.Tap,
                                        entityId: n.EntityTypes.Button,
                                        entityType: n.EntityTypes.Button,
                                    }),
                                    i(e));
                            }
                        }),
                        C = (0, l.c)(() => b(!1)),
                        k = (0, l.c)(() => {
                            (o(), b(!1));
                        });
                    return (
                        (0, r.useEffect)(() => {
                            if (!t) return void _(!1);
                            let e = window.setTimeout(() => _(!0), s.playButtonShowDelay);
                            return () => window.clearTimeout(e);
                        }, [t, s.playButtonShowDelay]),
                        (0, a.jsx)(g.a, {
                            open: t,
                            onOpenChange: b,
                            onClose: C,
                            placement: c ? 'default' : 'center',
                            size: 'fitContent',
                            overlayColor: 'full',
                            className: (0, m.$)(f().root, (0, x.J)(y.S.Dark)),
                            headerClassName: f().header,
                            contentClassName: f().content,
                            closeOnOutsidePress: !0,
                            closeButtonDataTestId: p.S7.AWAKE_LUMEN_MODAL_CLOSE_BUTTON,
                            escapeKey: !0,
                            'data-test-id': p.S7.AWAKE_LUMEN_MODAL,
                            children: (0, a.jsx)(A, { isPlayButtonVisible: d, onPlayClick: k }),
                        })
                    );
                }),
                E = () => {
                    let { lumen: e } = (0, u.g)(),
                        t = (0, r.useRef)(null),
                        [i, m] = (0, r.useState)(!1),
                        [_, v] = (0, r.useState)(0),
                        p = (0, l.c)((e) => {
                            ((t.current = e), i || (v((e) => e + 1), m(!0)));
                        }),
                        g = (0, l.c)(() => {
                            var e;
                            return null == (e = t.current) ? void 0 : e.call(t);
                        }),
                        x = (0, l.c)((e) => {
                            (e || (t.current = null), m(e));
                        });
                    return {
                        awakeLumenModal: (0, c.L)(() => {
                            if (e.isEnabled)
                                return (0, a.jsx)(
                                    o.a,
                                    {
                                        mainObjectId: '',
                                        mainObjectType: n.DomainObjectType.Lumen,
                                        pageId: n.AppScreen.LumenAwakeningScreen,
                                        pageIdForFrom: d.b.LUMEN_AWAKENING_SCREEN,
                                        pageStyle: n.PageStyles.Sheet,
                                        pagePlacement: n.PagePlacements.Bottom,
                                        children: (0, a.jsx)(s.B, {
                                            objectId: '',
                                            objectType: n.DomainObjectType.Lumen,
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            children: (0, a.jsx)(I, { open: i, onOpenChange: x, onPlayAfterAwake: g }),
                                        }),
                                    },
                                    _,
                                );
                        }),
                        requestAwakeLumenModal: p,
                    };
                };
        },
        91292: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => _ });
            var a = i(88800),
                r = i(53548),
                n = i(12389),
                o = i.n(n),
                s = i(29993),
                l = i(65453),
                c = i(46079),
                d = i(67174);
            let u = (e) => {
                    let [t, i] = (0, r.useState)(!1),
                        n = (0, s.c)(() => {
                            i(!0);
                        });
                    return (0, a.jsx)(o(), { prefetch: t, ...e, onMouseEnter: n });
                },
                m = (e) => {
                    let { forwardedRef: t, href: i, component: n, ...s } = e,
                        { isPrefetchDisabled: m, isPrefetchOnHover: _ } = (0, r.useContext)(c.j),
                        { href: v, target: p, rel: g } = (0, d.u)(null != i ? i : ''),
                        x = (0, r.isValidElement)(n)
                            ? n
                            : (function (e, t, i) {
                                  return e ? (t ? (0, a.jsx)(o(), { prefetch: !1 }) : i ? (0, a.jsx)(u, { href: e }) : (0, a.jsx)(o(), {})) : (0, a.jsx)('a', {});
                              })(i, m, _);
                    return (0, a.jsx)(l.N, { ref: t, component: x, href: i ? v : void 0, target: p, rel: g, ...s });
                },
                _ = (0, r.forwardRef)((e, t) => (0, a.jsx)(m, { ...e, forwardedRef: t }));
        },
        93015: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => p });
            var a = i(88800),
                r = i(98644),
                n = i(65724),
                o = i(53548),
                s = i(2058),
                l = i(19994),
                c = i(13797),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: r } = (0, s.A)(),
                    c = (0, o.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                return (0, a.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(d().root, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, a.jsx)('div', { className: d().coverContainer, children: (0, a.jsx)(l.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, a.jsx)('div', { className: d().textContainer, children: (0, a.jsx)(l.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, a.jsx)(l.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(26835),
                _ = i.n(m);
            let v = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: r } = (0, s.A)(),
                        c = (0, o.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, a.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(_().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, a.jsx)(l.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, a.jsx)('div', { className: _().textContainer, children: (0, a.jsx)(l.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, a.jsx)(l.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                p = (e) => {
                    let { isActive: t, variant: i, className: n } = e;
                    switch (i) {
                        case r.X.PLAYLIST:
                            return (0, a.jsx)(v, { isActive: t, className: n });
                        case r.X.ALBUM:
                            return (0, a.jsx)(u, { isActive: t, className: n });
                    }
                };
        },
        93512: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => r });
            var a = i(51231);
            let r = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, a.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        94058: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => C });
            var a = i(88800),
                r = i(65724),
                n = i(14231),
                o = i(84961),
                s = i(53548),
                l = i.t(s, 2),
                c = i(17392),
                d = i(88021),
                u = {
                    810: (e) => {
                        e.exports = l;
                    },
                },
                m = {},
                _ = {};
            ((() => {
                (Object.defineProperty(_, '__esModule', { value: !0 }), (_.useForwardRef = void 0));
                let e = (function e(t) {
                    var i = m[t];
                    if (void 0 !== i) return i.exports;
                    var a = (m[t] = { exports: {} });
                    return (u[t](a, a.exports, e), a.exports);
                })(810);
                _.useForwardRef = function (t, i) {
                    let a = (0, e.useRef)(i);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(a.current) : (t.current = a.current));
                        }, [t]),
                        a
                    );
                };
            })(),
                _.__esModule);
            var v = _.useForwardRef,
                p = i(32353),
                g = i(72288),
                x = i(31764),
                y = i(81192),
                h = i.n(y);
            let f = { [p.u.Desktop]: { start: 40, end: 20 }, [p.u.Mobile]: { start: 40, end: 40 } },
                b = (0, o.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: i,
                            forwardRef: o,
                            scrollPadding: l,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: m,
                            buttonSize: _,
                            buttonVariant: y,
                            withSecondaryColor: b,
                        } = e,
                        {
                            settings: { isMobile: C },
                        } = (0, g.g)(),
                        k = v(o, null),
                        { shouldBackwardButtonBeDisabled: T, shouldForwardButtonBeDisabled: A, shouldHideControls: I } = (0, d.Y)(k),
                        [E, N] = (0, s.useMemo)(() => {
                            let e = (0, n.A)(f, l);
                            return [C ? e[p.u.Mobile].start : e[p.u.Desktop].start, C ? e[p.u.Mobile].end : e[p.u.Desktop].end];
                        }, [l, C]),
                        S = (0, s.useCallback)(
                            (e) => {
                                var t;
                                let i = null == (t = k.current) ? void 0 : t.children[e],
                                    { current: a } = k;
                                if (!a || !(i instanceof HTMLElement)) return;
                                if (i.offsetLeft - a.scrollLeft < E) {
                                    a.scrollLeft = i.offsetLeft - E;
                                    return;
                                }
                                let r = a.scrollLeft + a.clientWidth - i.offsetLeft - i.offsetWidth;
                                r < N && (a.scrollLeft -= r - N);
                            },
                            [k, N, E],
                        ),
                        j = (0, s.useCallback)(
                            (e) => {
                                var t, a;
                                (S(e), null == (t = (a = i.props).onTabChange) || t.call(a, e));
                            },
                            [i, S],
                        ),
                        L = (0, s.cloneElement)(i, { forwardRef: k, className: (0, r.$)(h().wrapper, i.props.className, h().carousel, h().important), onTabChange: j });
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(
                            h().root,
                            {
                                [h().root_carouselBetweenArrows]: u,
                                [h().root_arrowLeft_hidden]: T,
                                [h().root_arrowRight_hidden]: A,
                                [h().root_arrow_hidden]: T && A && I,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, a.jsx)('div', { className: h().list, children: L }),
                            !C &&
                                (0, a.jsx)(x.X, {
                                    className: (0, r.$)(h().buttons, m),
                                    carouselRef: k,
                                    backwardControlClassName: h().control,
                                    forwardControlClassName: h().control,
                                    withSecondaryColor: b,
                                    buttonSize: _,
                                    buttonVariant: y,
                                }),
                        ],
                    });
                }),
                C = (0, s.forwardRef)((e, t) => (0, a.jsx)(b, { forwardRef: t, ...e }));
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => n });
            var a = i(53548);
            let r = (0, a.createContext)(null),
                n = () => (0, a.useContext)(r);
        },
        95641: (e) => {
            e.exports = {
                root_withLongText: 'BaseNotificationPin_root_withLongText__BKqhi',
                title: 'BaseNotificationPin_title__46xmX',
                link: 'BaseNotificationPin_link__4EvPj',
                capitalizedEntity: 'BaseNotificationPin_capitalizedEntity__HePYm',
                text: 'BaseNotificationPin_text__LF3L_',
                image: 'BaseNotificationPin_image__O7ptT',
            };
        },
        95993: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var a = i(58217),
                r = i(85587);
            let n = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: n } = e;
                return (0, a.l)({ entity: t, entityType: r.n.TRACK, callback: i, onReject: n, preventDefaultWhenSafe: !1 });
            };
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
        97766: (e) => {
            e.exports = {
                shimmersContainer: 'MusicHistoryPageContentShimmer_shimmersContainer__82cj6',
                dateShimmer: 'MusicHistoryPageContentShimmer_dateShimmer__d4_te',
                contextNameShimmer: 'MusicHistoryPageContentShimmer_contextNameShimmer__Tzbqr',
                contextHeaderShimmer: 'MusicHistoryPageContentShimmer_contextHeaderShimmer__Tq0PZ',
                trackListShimmers: 'MusicHistoryPageContentShimmer_trackListShimmers__4GSp8',
            };
        },
        99007: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var a = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        99479: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => v });
            var a = i(88800),
                r = i(65724),
                n = i(84961),
                o = i(17392),
                s = i(21416),
                l = i(29504),
                c = i(72288),
                d = i(16704),
                u = i(34945),
                m = i(45873),
                _ = i.n(m);
            let v = (0, n.PA)((e) => {
                let { className: t, track: i, position: n, onPlayButtonClick: m, isPlaying: v, isCurrent: p, withDislikeStyles: g = !0, isLoading: x } = e,
                    {
                        settings: { isMobile: y },
                    } = (0, c.g)();
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(t, _().root, {
                        [_().root_disabled]: !i.isAvailable && !i.hasModalAccess,
                        [_().root_playing]: v,
                        [_().root_disliked]: i.isDisliked && g,
                        [_().root_current]: p,
                    }),
                    children: [
                        (i.isAvailable || i.hasModalAccess) &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    !x && (0, a.jsx)(u.P, { stopAnimation: !v, className: _().playingAnimation }),
                                    x && y && (0, a.jsx)(s.y, { size: 'xs', className: _().spinner }),
                                    !y &&
                                        (0, a.jsx)(d.D, {
                                            variant: 'filled',
                                            className: _().playButton,
                                            iconClassName: _().playButtonIcon,
                                            isPlaying: v,
                                            onClick: m,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        n &&
                            (0, a.jsx)(l.HL, {
                                variant: 'div',
                                className: _().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                'data-test-id': o.Kq.track.TRACK_POSITION,
                                children: n,
                            }),
                    ],
                });
            });
        },
        99711: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { D: () => a }),
                (function (e) {
                    ((e.TRACK = 'track'),
                        (e.WAVE = 'wave'),
                        (e.MULTIVIBE_WAVE = 'multivibe_wave'),
                        (e.QUERY_TO_VIBE = 'q2v_wave'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.ALBUM = 'album'),
                        (e.OTHER = 'other'),
                        (e.SEARCH = 'search'));
                })(a || (a = {})));
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                9192, 7191, 9904, 3078, 1191, 1041, 8194, 1833, 918, 6740, 33, 2803, 7760, 8655, 6582, 6706, 4771, 1311, 5201, 2662, 6904, 1898, 2058, 3578, 8628, 9780,
                9332, 9027, 1449, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 9934, 7670, 4441, 6374, 8979, 818, 4322, 1372, 389, 763, 2670, 7358,
            ],
            () => e((e.s = 27182)),
        ),
            (_N_E = e.O()));
    },
]);
