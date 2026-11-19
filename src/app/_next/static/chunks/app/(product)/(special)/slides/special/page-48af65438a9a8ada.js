(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9953],
    {
        35623: (e, s, i) => {
            Promise.resolve().then(i.bind(i, 52341));
        },
        52341: (e, s, i) => {
            'use strict';
            (i.r(s), i.d(s, { default: () => h }));
            var t = i(88800),
                n = i(58390),
                a = i(57328),
                d = i(4300),
                r = i(68647),
                l = i(50355);
            let h = () => {
                let e = (0, n.useSearchParams)().get('campaignId');
                return (
                    e || (0, n.notFound)(),
                    (0, t.jsx)(a.WithAuth, {
                        withRedirectToMainPage: !1,
                        children: (0, t.jsx)(d.WithSlidesWebView, {
                            slidesConsumer: l.z.SPECIAL,
                            entityId: e,
                            children: (0, t.jsx)(r.SlidesPage, { slidesConsumer: l.z.SPECIAL, campaignId: e }),
                        }),
                    })
                );
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7191, 9904, 3078, 1551, 6580, 6706, 4771, 1311, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 9380, 8872, 7362, 9287, 4732, 9087, 3979, 1928, 9091,
                9124, 4683, 2473, 8490, 763, 2670, 7358,
            ],
            () => e((e.s = 35623)),
        ),
            (_N_E = e.O()));
    },
]);
