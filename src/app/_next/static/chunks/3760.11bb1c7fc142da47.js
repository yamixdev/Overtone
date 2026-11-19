'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3760],
    {
        33760: (e, a, s) => {
            (s.r(a), s.d(a, { config: () => u, getMocksEnabled: () => o }));
            var r = s(14231),
                n = s(35412),
                t = s(94846),
                i = s(42668),
                c = s(74168),
                l = s(92728);
            let o = () => (0, n.G4)('false'),
                u = {
                    ...(0, r.A)((0, l.Z)(), {
                        metrika: { enabled: (0, n.G4)('true') },
                        resources: { musicExternalApi: { allowCustomPrefixUrl: !0, prefixUrl: t.$ } },
                        player: { overembed: !1, externalDomain: 'music.yandex.ru' },
                        webHost: 'music.yandex.'.concat(i.B),
                        afisha: { host: 'https://widget.afisha.yandex.ru' },
                        payment: { environment: 'production' },
                        mocks: { enabled: o() },
                    }),
                    csp: (0, c.$)(),
                };
        },
    },
]);
