'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6363],
    {
        66363: (e, s, t) => {
            t.d(s, { NS: () => a, Nh: () => o, xW: () => n });
            var r = t(9519);
            let o = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
            class a {
                getHeaders(e) {
                    return e instanceof Headers ? Object.fromEntries(e.entries()) : e;
                }
                getUrl(e) {
                    return new URL(e || 'https://unknown');
                }
                constructor(e) {
                    ((0, r._)(this, 'logger', void 0),
                        (0, r._)(this, 'beforeRequestHook', (e) => {
                            let s = this.getUrl(e.url);
                            this.logger.info('[Resource] Request started '.concat(e.method, ' ').concat(s.origin, ' ').concat(s.pathname).concat(s.search), {
                                request: { method: e.method, url: e.url, headers: this.getHeaders(e.headers), body: e.json },
                            });
                        }),
                        (0, r._)(this, 'beforeRetryHook', (e, s) => {
                            let t = e.cause;
                            if (o(t)) {
                                var r, a, n, u, d, i, l, c, h, m, p, g, v, q;
                                let o = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (r = t.request) ? void 0 : r.method) || (null == (a = t.options) ? void 0 : a.method),
                                        url: (null == (n = t.request) ? void 0 : n.url) || (null == (u = t.options) ? void 0 : u.url),
                                        headers: this.getHeaders((null == (d = t.request) ? void 0 : d.headers) || (null == (i = t.options) ? void 0 : i.headers)),
                                        body: (null == (l = t.request) ? void 0 : l.json) || (null == (c = t.options) ? void 0 : c.json),
                                        retries: s,
                                    },
                                };
                                void 0 !== t.response &&
                                    (o.response = {
                                        statusCode: t.response.statusCode,
                                        headers: this.getHeaders(t.response.headers),
                                        time: null == (q = t.response.timings) || null == (v = q.phases) ? void 0 : v.total,
                                    });
                                let k = this.getUrl((null == (h = t.request) ? void 0 : h.url) || (null == (m = t.options) ? void 0 : m.url));
                                this.logger.warn(
                                    '[Resource] Retry request '
                                        .concat((null == (p = t.request) ? void 0 : p.method) || (null == (g = t.options) ? void 0 : g.method), ' ')
                                        .concat(k.origin, ' ')
                                        .concat(k.pathname)
                                        .concat(k.search),
                                    o,
                                );
                            } else
                                this.logger.warn('[Resource] Retry request (unknown)', {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                });
                        }),
                        (0, r._)(this, 'afterResponseHook', (e) => {
                            if ((e.statusCode || e.status) >= 200 && 299 >= (e.statusCode || e.status)) {
                                var s, t;
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
                                            time: null == (t = e.timings) || null == (s = t.phases) ? void 0 : s.total,
                                        },
                                    },
                                );
                            }
                            return e;
                        }),
                        (0, r._)(this, 'beforeErrorHook', (e) => {
                            let s = e.cause;
                            if (o(s)) {
                                var t, r, a, n, u, d, i, l, c, h, m, p, g, v;
                                let o = {
                                    error: { name: e.name, message: e.message, code: e.code, data: e.data, stack: e.stack },
                                    request: {
                                        method: (null == (t = s.request) ? void 0 : t.method) || (null == (r = s.options) ? void 0 : r.method),
                                        url: (null == (a = s.request) ? void 0 : a.url) || (null == (n = s.options) ? void 0 : n.url),
                                        headers: this.getHeaders((null == (u = s.request) ? void 0 : u.headers) || (null == (d = s.options) ? void 0 : d.headers)),
                                        body: (null == (i = s.request) ? void 0 : i.json) || (null == (l = s.options) ? void 0 : l.json),
                                    },
                                };
                                void 0 !== s.response &&
                                    (o.response = {
                                        statusCode: s.response.statusCode || s.response.status,
                                        headers: this.getHeaders(s.response.headers),
                                        time: null == (v = s.response.timings) || null == (g = v.phases) ? void 0 : g.total,
                                    });
                                let q = this.getUrl((null == (c = s.request) ? void 0 : c.url) || (null == (h = s.options) ? void 0 : h.url));
                                this.logger.error(
                                    '[Resource] Request failed '
                                        .concat((null == (m = s.request) ? void 0 : m.method) || (null == (p = s.options) ? void 0 : p.method), ' ')
                                        .concat(q.origin, ' ')
                                        .concat(q.pathname)
                                        .concat(q.search, ', reason: ')
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
            (t(35412), t(69629));
            let n = [
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
    },
]);
