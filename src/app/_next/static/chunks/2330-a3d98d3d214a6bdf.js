(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2330, 9202],
    {
        3685: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => i });
            var n = r(53548);
            let i = (e, t) => ({
                topColorStyle: (0, n.useMemo)(() => {
                    if (void 0 === t) return;
                    let r = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : r, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, n.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        7628: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => f });
            var n = r(88800),
                i = r(88969),
                a = r(58390),
                s = r(17392),
                o = r(29993),
                l = r(96817),
                c = r(29504),
                u = r(99890),
                m = r(4086),
                d = r(41928);
            let f = (e) => {
                let { size: t = 'm', variant: r = 'default', color: f = 'primary', withRipple: p = !0, buttonText: v, isBlock: h, key: y, className: _ } = e,
                    g = (0, a.useRouter)(),
                    b = (0, d.N)().get(m.QG),
                    x = (0, o.c)(() => {
                        b.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), g.push(b.authorizationUrl));
                    });
                return (0, n.jsx)(
                    l.$,
                    {
                        onClick: x,
                        className: _,
                        isBlock: h,
                        color: f,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': s.S7.UNAUTHORIZED_BUTTON,
                        children: v || (0, n.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, n.jsx)(i.A, { id: 'authorization.enter-button' }) }),
                    },
                    y,
                );
            };
        },
        13012: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var n = r(19049);
            function i(e, t) {
                var r;
                return (0, n.Y)(e, null != (r = null == t ? void 0 : t.maxLength) ? r : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
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
        19998: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => N });
            var n = r(88800),
                i = r(65724),
                a = r(84961),
                s = r(53548),
                o = r(88969),
                l = r(17392),
                c = r(29993),
                u = r(96817),
                m = r(29504),
                d = r(4086),
                f = r(41928),
                p = r(46422),
                v = r(4370),
                h = r(78940),
                y = r(85587),
                _ = r(15253),
                g = r(91292),
                b = r(28806),
                x = r.n(b);
            let I = {
                    [y.n.ALBUM]: (0, n.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [y.n.PODCAST]: (0, n.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [y.n.ARTIST]: (0, n.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [y.n.TRACK]: (0, n.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [y.n.AUDIOBOOK]: (0, n.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [y.n.CLIP]: (0, n.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                N = (0, a.PA)((e) => {
                    var t;
                    let { modalState: r, data: a, onClose: b, className: N } = e,
                        j = null != a ? a : null == r ? void 0 : r.modalData,
                        E = (0, p.W)(),
                        A = (0, h.Z)(v.Z.main.href),
                        T = (0, f.N)().get(d.U2),
                        S = (0, c.c)(() => {
                            if (b) return b();
                            (E.canBack && E.back(), A());
                        }),
                        O = (null == j || null == (t = j.details) ? void 0 : t.url) && j.details.text,
                        L = (0, c.c)(() => {
                            var e;
                            null == r || r.setConfirmUnsafeDisclaimer(!0);
                            let t = T.get(_.c.ExEx),
                                n = new Date(),
                                i = n.setMinutes(n.getMinutes() + 15),
                                a =
                                    null != (e = null == r ? void 0 : r.entityKey)
                                        ? e
                                        : ''.concat(null == r ? void 0 : r.entityType, '_').concat(null == r ? void 0 : r.entityId);
                            (t ? T.set(_.c.ExEx, [...t, a], { expires: new Date(i) }) : T.set(_.c.ExEx, [a], { expires: new Date(i) }),
                                null == b || b(),
                                (null == r ? void 0 : r.onDisclaimerConfirmHandler) && r.onDisclaimerConfirmHandler());
                        }),
                        P = (0, c.c)(() => {
                            ((null == r ? void 0 : r.shouldHistoryBack) ? (null == b || b(), E.canBack && E.back(), A()) : null == b || b(),
                                (null == r ? void 0 : r.onDisclaimerRejectHandler) && r.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == r || r.reset();
                        },
                        [r],
                    );
                    let k = (0, s.useMemo)(() => {
                            if (j) {
                                var e, t;
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(m.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, i.$)(x().title, x().text),
                                            'data-test-id': l.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: j.title,
                                        }),
                                        (0, n.jsx)(m.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: x().text,
                                            'data-test-id': l.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: j.description,
                                        }),
                                        O &&
                                            (0, n.jsx)(g.N, {
                                                href: null == (e = j.details) ? void 0 : e.url,
                                                className: x().link,
                                                children: (0, n.jsx)(m.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = j.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [j, O]),
                        D = (0, s.useMemo)(
                            () =>
                                (null == r ? void 0 : r.type) === y.Z.UNSAFE
                                    ? (0, n.jsxs)('div', {
                                          className: x().buttons,
                                          children: [
                                              (0, n.jsx)(u.$, {
                                                  color: 'primary',
                                                  onClick: P,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: x().button,
                                                  'data-test-id': l.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, n.jsx)(o.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, n.jsx)(u.$, {
                                                  color: 'secondary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: x().button,
                                                  'data-test-id': l.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: r.entityType && I[r.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)('div', {
                                          className: x().buttons,
                                          children: (0, n.jsx)(u.$, {
                                              color: 'primary',
                                              onClick: S,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: x().button,
                                              'data-test-id': l.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, n.jsx)(o.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [L, null == r ? void 0 : r.entityType, null == r ? void 0 : r.type, S, P],
                        );
                    return (0, n.jsx)('div', {
                        className: (0, i.$)(x().root, N),
                        'data-test-id': l.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, n.jsxs)('div', { className: x().container, children: [k, D] }),
                    });
                });
        },
        20775: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => i });
            var n = r(62837);
            let i = (e, t) => !e && !!(t && (0, n.Ve)(t, n.Yw.MODAL));
        },
        21438: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => i });
            let n = /^(0|[1-9]\d*)$/;
            function i(e) {
                return void 0 !== e && !(e.length > 40) && n.test(e);
            }
        },
        27054: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => m });
            var n = r(53548),
                i = r(97234),
                a = r(59714),
                s = r(43054),
                o = r(18117),
                l = r(93940),
                c = r(24709),
                u = r(29993);
            let m = (0, c.n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: ['screen'] }, function () {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: r = !0 } = t,
                    c = null == (e = (0, s.s)()) ? void 0 : e.evgenInstance,
                    { hash: m } = (0, o.g)(),
                    { screen: d } = (0, l.j)(),
                    f = null == d ? void 0 : d.pageId,
                    p = (0, u.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !c ||
                            !f ||
                            !m ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = {
                            hash: m,
                            pageId: i.AppScreen.Link,
                            entityType: i.EntityTypes.Deeplink,
                            entityId: i.EntityTypes.Deeplink,
                            from: i.AppScreen.Link,
                            to: f,
                            deepLink: null != e ? e : window.location.href,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, a.ID)(c, t);
                    });
                return (
                    (0, n.useEffect)(() => {
                        r && p();
                    }, [r, p]),
                    (0, u.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        r || p({ deepLink: e });
                    })
                );
            });
        },
        27651: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => c });
            var n = r(58255),
                i = r(43054),
                a = r(18117),
                s = r(93940),
                o = r(24709),
                l = r(29993);
            let c = (0, o.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, (e) => {
                let t = (0, i.s)(),
                    { hash: r } = (0, a.g)(),
                    { screen: o, block: c, object: u } = (0, s.j)();
                return (0, l.c)((i, a) => {
                    let s = null == o ? void 0 : o.pageId;
                    if (!t || !o || !c || !u || !s || void 0 === r || void 0 === u.objectId) return;
                    let l = {
                        to: i,
                        objectType: u.objectType,
                        objectId: u.objectId,
                        objectPosX: u.objectPosX,
                        objectPosY: u.objectPosY,
                        hash: r,
                        pageId: s,
                        mainObjectType: e ? e.mainObjectType : o.mainObjectType,
                        mainObjectId: e ? e.mainObjectId : o.mainObjectId,
                        entityType: c.blockType,
                        entityId: c.blockId,
                        entityPosX: c.blockPosX,
                        entityPosY: c.blockPosY,
                        objectsCount: c.objectsCount,
                        from: s,
                    };
                    (a && (l.deepLink = a), Object.values(l).some((e) => void 0 === e) || (0, n.QS)(t.evgenInstance, l));
                });
            });
        },
        27794: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => g });
            var n,
                i,
                a = r(88092),
                s = r(68436);
            function o(e, t) {
                var r = t && t.cache ? t.cache : d,
                    n = t && t.serializer ? t.serializer : u;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var r,
                                  n,
                                  i = 1 === e.length ? l : c;
                              return ((r = t.cache.create()), (n = t.serializer), i.bind(this, e, r, n));
                          }
                )(e, { cache: r, serializer: n });
            }
            function l(e, t, r, n) {
                var i = null == n || 'number' == typeof n || 'boolean' == typeof n ? n : r(n),
                    a = t.get(i);
                return (void 0 === a && ((a = e.call(this, n)), t.set(i, a)), a);
            }
            function c(e, t, r) {
                var n = Array.prototype.slice.call(arguments, 3),
                    i = r(n),
                    a = t.get(i);
                return (void 0 === a && ((a = e.apply(this, n)), t.set(i, a)), a);
            }
            var u = function () {
                return JSON.stringify(arguments);
            };
            function m() {
                this.cache = Object.create(null);
            }
            ((m.prototype.get = function (e) {
                return this.cache[e];
            }),
                (m.prototype.set = function (e, t) {
                    this.cache[e] = t;
                }));
            var d = {
                    create: function () {
                        return new m();
                    },
                },
                f = {
                    variadic: function (e, t) {
                        var r, n;
                        return ((r = t.cache.create()), (n = t.serializer), c.bind(this, e, r, n));
                    },
                    monadic: function (e, t) {
                        var r, n;
                        return ((r = t.cache.create()), (n = t.serializer), l.bind(this, e, r, n));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(n || (n = {}));
            var p = (function (e) {
                    function t(t, r, n) {
                        var i = e.call(this, t) || this;
                        return ((i.code = r), (i.originalMessage = n), i);
                    }
                    return (
                        (0, a.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                v = (function (e) {
                    function t(t, r, i, a) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'),
                                n.INVALID_VALUE,
                                a,
                            ) || this
                        );
                    }
                    return ((0, a.__extends)(t, e), t);
                })(p),
                h = (function (e) {
                    function t(t, r, i) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), n.INVALID_VALUE, i) || this;
                    }
                    return ((0, a.__extends)(t, e), t);
                })(p),
                y = (function (e) {
                    function t(t, r) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), n.MISSING_VALUE, r) || this
                        );
                    }
                    return ((0, a.__extends)(t, e), t);
                })(p);
            function _(e) {
                return {
                    create: function () {
                        return {
                            get: function (t) {
                                return e[t];
                            },
                            set: function (t, r) {
                                e[t] = r;
                            },
                        };
                    },
                };
            }
            !(function (e) {
                ((e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object'));
            })(i || (i = {}));
            var g = (function () {
                function e(t, r, l, c) {
                    var u,
                        m,
                        d = this;
                    if (
                        (void 0 === r && (r = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = d.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var r = t.reduce(function (e, t) {
                                return (e.length && t.type === i.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return r.length <= 1 ? r[0] || '' : r;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, r, a, o, l, c, u) {
                                if (1 === t.length && (0, s.isLiteralElement)(t[0])) return [{ type: i.literal, value: t[0].value }];
                                for (var m = [], d = 0; d < t.length; d++) {
                                    var f = t[d];
                                    if ((0, s.isLiteralElement)(f)) {
                                        m.push({ type: i.literal, value: f.value });
                                        continue;
                                    }
                                    if ((0, s.isPoundElement)(f)) {
                                        'number' == typeof c && m.push({ type: i.literal, value: a.getNumberFormat(r).format(c) });
                                        continue;
                                    }
                                    var _ = f.value;
                                    if (!(l && _ in l)) throw new y(_, u);
                                    var g = l[_];
                                    if ((0, s.isArgumentElement)(f)) {
                                        ((g && 'string' != typeof g && 'number' != typeof g) || (g = 'string' == typeof g || 'number' == typeof g ? String(g) : ''),
                                            m.push({ type: 'string' == typeof g ? i.literal : i.object, value: g }));
                                        continue;
                                    }
                                    if ((0, s.isDateElement)(f)) {
                                        var b = 'string' == typeof f.style ? o.date[f.style] : (0, s.isDateTimeSkeleton)(f.style) ? f.style.parsedOptions : void 0;
                                        m.push({ type: i.literal, value: a.getDateTimeFormat(r, b).format(g) });
                                        continue;
                                    }
                                    if ((0, s.isTimeElement)(f)) {
                                        var b = 'string' == typeof f.style ? o.time[f.style] : (0, s.isDateTimeSkeleton)(f.style) ? f.style.parsedOptions : o.time.medium;
                                        m.push({ type: i.literal, value: a.getDateTimeFormat(r, b).format(g) });
                                        continue;
                                    }
                                    if ((0, s.isNumberElement)(f)) {
                                        var b = 'string' == typeof f.style ? o.number[f.style] : (0, s.isNumberSkeleton)(f.style) ? f.style.parsedOptions : void 0;
                                        (b && b.scale && (g *= b.scale || 1), m.push({ type: i.literal, value: a.getNumberFormat(r, b).format(g) }));
                                        continue;
                                    }
                                    if ((0, s.isTagElement)(f)) {
                                        var x = f.children,
                                            I = f.value,
                                            N = l[I];
                                        if ('function' != typeof N) throw new h(I, 'function', u);
                                        var j = N(
                                            e(x, r, a, o, l, c).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(j) || (j = [j]),
                                            m.push.apply(
                                                m,
                                                j.map(function (e) {
                                                    return { type: 'string' == typeof e ? i.literal : i.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, s.isSelectElement)(f)) {
                                        var E = f.options[g] || f.options.other;
                                        if (!E) throw new v(f.value, g, Object.keys(f.options), u);
                                        m.push.apply(m, e(E.value, r, a, o, l));
                                        continue;
                                    }
                                    if ((0, s.isPluralElement)(f)) {
                                        var E = f.options['='.concat(g)];
                                        if (!E) {
                                            if (!Intl.PluralRules)
                                                throw new p(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    n.MISSING_INTL_API,
                                                    u,
                                                );
                                            var A = a.getPluralRules(r, { type: f.pluralType }).select(g - (f.offset || 0));
                                            E = f.options[A] || f.options.other;
                                        }
                                        if (!E) throw new v(f.value, g, Object.keys(f.options), u);
                                        m.push.apply(m, e(E.value, r, a, o, l, g - (f.offset || 0)));
                                        continue;
                                    }
                                }
                                return m.length < 2
                                    ? m
                                    : m.reduce(function (e, t) {
                                          var r = e[e.length - 1];
                                          return (r && r.type === i.literal && t.type === i.literal ? (r.value += t.value) : e.push(t), e);
                                      }, []);
                            })(d.ast, d.locales, d.formatters, d.formats, e, void 0, d.message);
                        }),
                        (this.resolvedOptions = function () {
                            var e;
                            return { locale: (null == (e = d.resolvedLocale) ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(d.locales)[0] };
                        }),
                        (this.getAst = function () {
                            return d.ast;
                        }),
                        (this.locales = r),
                        (this.resolvedLocale = e.resolveLocale(r)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var g = c || {},
                            b = (g.formatters, (0, a.__rest)(g, ['formatters']));
                        this.ast = e.__parse(t, (0, a.__assign)((0, a.__assign)({}, b), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((u = e.formats),
                        l
                            ? Object.keys(u).reduce(
                                  function (e, t) {
                                      var r, n;
                                      return (
                                          (e[t] =
                                              ((r = u[t]),
                                              (n = l[t])
                                                  ? (0, a.__assign)(
                                                        (0, a.__assign)((0, a.__assign)({}, r || {}), n || {}),
                                                        Object.keys(r).reduce(function (e, t) {
                                                            return ((e[t] = (0, a.__assign)((0, a.__assign)({}, r[t]), n[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : r)),
                                          e
                                      );
                                  },
                                  (0, a.__assign)({}, u),
                              )
                            : u)),
                        (this.formatters =
                            (c && c.formatters) ||
                            (void 0 === (m = this.formatterCache) && (m = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: o(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, a.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: _(m.number), strategy: f.variadic },
                                ),
                                getDateTimeFormat: o(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, a.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: _(m.dateTime), strategy: f.variadic },
                                ),
                                getPluralRules: o(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, a.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: _(m.pluralRules), strategy: f.variadic },
                                ),
                            })));
                }
                return (
                    Object.defineProperty(e, 'defaultLocale', {
                        get: function () {
                            return (e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.memoizedDefaultLocale = null),
                    (e.resolveLocale = function (e) {
                        if (void 0 !== Intl.Locale) {
                            var t = Intl.NumberFormat.supportedLocalesOf(e);
                            return new Intl.Locale(t.length > 0 ? t[0] : 'string' == typeof e ? e : e[0]);
                        }
                    }),
                    (e.__parse = s.parse),
                    (e.formats = {
                        number: { integer: { maximumFractionDigits: 0 }, currency: { style: 'currency' }, percent: { style: 'percent' } },
                        date: {
                            short: { month: 'numeric', day: 'numeric', year: '2-digit' },
                            medium: { month: 'short', day: 'numeric', year: 'numeric' },
                            long: { month: 'long', day: 'numeric', year: 'numeric' },
                            full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
                        },
                        time: {
                            short: { hour: 'numeric', minute: 'numeric' },
                            medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
                            long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                            full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                        },
                    }),
                    e
                );
            })();
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
        29201: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var n = r(35396);
            let i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, n.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        31532: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => n });
            let n = (e) => {
                var t;
                if (null == e ? void 0 : e.isForeignAgent) return null == (t = e.resolvedForeignAgentData) ? void 0 : t.title;
            };
        },
        35396: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { C: () => a }),
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
                })(n || (n = {})));
            let i = new Set(Object.values(n)),
                a = (e) => 'string' == typeof e && i.has(e);
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
        45700: (e, t) => {
            'use strict';
            var r, n;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createNumberElement =
                    t.createLiteralElement =
                    t.isDateTimeSkeleton =
                    t.isNumberSkeleton =
                    t.isTagElement =
                    t.isPoundElement =
                    t.isPluralElement =
                    t.isSelectElement =
                    t.isTimeElement =
                    t.isDateElement =
                    t.isNumberElement =
                    t.isArgumentElement =
                    t.isLiteralElement =
                    t.SKELETON_TYPE =
                    t.TYPE =
                        void 0),
                (function (e) {
                    ((e[(e.literal = 0)] = 'literal'),
                        (e[(e.argument = 1)] = 'argument'),
                        (e[(e.number = 2)] = 'number'),
                        (e[(e.date = 3)] = 'date'),
                        (e[(e.time = 4)] = 'time'),
                        (e[(e.select = 5)] = 'select'),
                        (e[(e.plural = 6)] = 'plural'),
                        (e[(e.pound = 7)] = 'pound'),
                        (e[(e.tag = 8)] = 'tag'));
                })(r || (t.TYPE = r = {})),
                (function (e) {
                    ((e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime'));
                })(n || (t.SKELETON_TYPE = n = {})),
                (t.isLiteralElement = function (e) {
                    return e.type === r.literal;
                }),
                (t.isArgumentElement = function (e) {
                    return e.type === r.argument;
                }),
                (t.isNumberElement = function (e) {
                    return e.type === r.number;
                }),
                (t.isDateElement = function (e) {
                    return e.type === r.date;
                }),
                (t.isTimeElement = function (e) {
                    return e.type === r.time;
                }),
                (t.isSelectElement = function (e) {
                    return e.type === r.select;
                }),
                (t.isPluralElement = function (e) {
                    return e.type === r.plural;
                }),
                (t.isPoundElement = function (e) {
                    return e.type === r.pound;
                }),
                (t.isTagElement = function (e) {
                    return e.type === r.tag;
                }),
                (t.isNumberSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === n.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === n.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: r.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: r.number, value: e, style: t };
                }));
        },
        50327: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => s });
            var n = r(35412),
                i = r(8655),
                a = r(69704);
            let s = (e) => {
                let { theme: t } = (0, a.W)();
                if (e) {
                    let { r, g: a, b: s } = (0, n.E2)(e),
                        o = t === i.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(r, ', ').concat(a, ', ').concat(s, ', ').concat(o, ')');
                }
            };
        },
        60902: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => d });
            var n = r(88800),
                i = r(65724),
                a = r(17392),
                s = r(96817),
                o = r(52300),
                l = r(7555),
                c = r(81877),
                u = r(36232),
                m = r.n(u);
            let d = (e) => {
                let { coverVariant: t, coverUri: r, isAvailable: u, className: d, withPlusBadge: f, onClick: p, 'aria-label': v, customCover: h, buttonClassName: y } = e;
                return (0, n.jsxs)(l.t, {
                    radius: 'round' === t ? 'round' : 'm',
                    className: (0, i.$)(m().root, d, { [m().root_hoverable]: !!p }),
                    children: [
                        (0, n.jsx)(s.$, {
                            className: (0, i.$)(m().coverButton, y),
                            onClick: p,
                            'aria-label': v,
                            tabIndex: p ? 0 : -1,
                            disabled: !p,
                            'data-test-id': a.S7.ENTITY_COVER_BUTTON,
                            children: h || (0, n.jsx)(c.B, { fit: 'cover', src: r, size: 300, className: m().coverImage, withAvatarReplace: !0, isAvailable: u }),
                        }),
                        f && (0, n.jsx)(o.I, { variant: 'plusBadge', className: m().plusBadge }),
                    ],
                });
            };
        },
        68436: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var n = r(88092);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                n.__exportStar(r(45700), t),
                (t._Parser = void 0));
        },
        69629: (e) => {
            var t = Object.prototype.hasOwnProperty;
            function r(e) {
                return '[Throws: ' + (e ? e.message : '?') + ']';
            }
            function n(e) {
                var n = [];
                return (function e(i) {
                    if (null === i || 'object' != typeof i) return i;
                    if (-1 !== n.indexOf(i)) return '[Circular]';
                    if ((n.push(i), 'function' == typeof i.toJSON))
                        try {
                            var a = e(i.toJSON());
                            return (n.pop(), a);
                        } catch (e) {
                            return r(e);
                        }
                    if (Array.isArray(i)) {
                        var s = i.map(e);
                        return (n.pop(), s);
                    }
                    var o = Object.keys(i).reduce(function (n, a) {
                        return (
                            (n[a] = e(
                                (function (e, n) {
                                    if (t.call(e, n))
                                        try {
                                            return e[n];
                                        } catch (e) {
                                            return r(e);
                                        }
                                    return e[n];
                                })(i, a),
                            )),
                            n
                        );
                    }, {});
                    return (n.pop(), o);
                })(e);
            }
            ((e.exports = function (e, t, r) {
                return JSON.stringify(n(e), t, r);
            }),
                (e.exports.ensureProperties = n));
        },
        71227: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => d });
            var n = r(88800),
                i = r(84961),
                a = r(53548),
                s = r(2058),
                o = r(35412),
                l = r(17392),
                c = r(96817),
                u = r(52300);
            let m = (0, i.PA)((e) => {
                    let { onClick: t, className: r, size: i = 's', iconSize: a = 'xxs', forwardRef: m, ...d } = e,
                        { formatMessage: f } = (0, s.A)();
                    return (0, n.jsx)(c.$, {
                        ref: m,
                        size: i,
                        variant: 'default',
                        radius: 'round',
                        color: 'secondary',
                        onClick: t,
                        className: r,
                        'aria-label': f({ id: 'donation.button-text' }),
                        icon: (0, n.jsx)(u.I, { size: a, variant: 'ruble' }),
                        ...(0, o.OZ)(d),
                        'data-test-id': l.S7.DONATION_BUTTON,
                    });
                }),
                d = (0, a.forwardRef)((e, t) => (0, n.jsx)(m, { forwardRef: t, ...e }));
        },
        73853: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => i });
            var n = r(35412);
            let i = (e) => {
                if (!e) return null;
                let { h: t, s: r, l: i } = (0, n.g8)(e),
                    a = Math.min(70, Math.max(10, i + 10));
                return 'hsl('.concat(t, 'deg, ').concat(r, '%, ').concat(a, '%)');
            };
        },
        88349: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => n });
            let n = (e) => {
                let t = e?.split(':')[0];
                return (t?.includes('.') && t?.split('.').pop()) || '';
            };
        },
        88894: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => m });
            var n = r(88800),
                i = r(65724),
                a = r(84961),
                s = r(53548),
                o = r(19994),
                l = r(72288),
                c = r(16472),
                u = r.n(c);
            let m = (0, a.PA)((e) => {
                let { className: t, coverRadius: r = 'm', isActive: a } = e,
                    {
                        settings: { isMobile: c },
                    } = (0, l.g)(),
                    m = (0, s.useMemo)(
                        () =>
                            c
                                ? (0, n.jsxs)('div', {
                                      className: u().controls,
                                      children: [
                                          (0, n.jsx)(o.W, { className: u().button, radius: 'round', isActive: a }),
                                          (0, n.jsx)(o.W, { className: u().button, radius: 'round', isActive: a }),
                                          (0, n.jsx)(o.W, { className: u().button, radius: 'round', isActive: a }),
                                      ],
                                  })
                                : (0, n.jsxs)('div', {
                                      className: u().controls,
                                      children: [
                                          (0, n.jsx)(o.W, { className: u().desktopPlayButton, isActive: a }),
                                          (0, n.jsx)(o.W, { className: u().button, radius: 'round', isActive: a }),
                                          (0, n.jsx)(o.W, { className: u().button, radius: 'round', isActive: a }),
                                          (0, n.jsx)(o.W, { className: u().button, radius: 'round', isActive: a }),
                                      ],
                                  }),
                        [a, c],
                    );
                return (0, n.jsxs)('div', {
                    className: (0, i.$)(u().root, t),
                    children: [
                        (0, n.jsx)(o.W, { className: u().cover, radius: r, isActive: a }),
                        (0, n.jsxs)('div', {
                            className: u().content,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: u().info,
                                    children: [
                                        (0, n.jsx)(o.W, { className: u().entityName, radius: 's', isActive: a }),
                                        (0, n.jsx)(o.W, { className: u().title, radius: 'xl', isActive: a }),
                                        (0, n.jsx)(o.W, { className: u().meta, radius: 's', isActive: a }),
                                    ],
                                }),
                                m,
                            ],
                        }),
                    ],
                });
            });
        },
    },
]);
