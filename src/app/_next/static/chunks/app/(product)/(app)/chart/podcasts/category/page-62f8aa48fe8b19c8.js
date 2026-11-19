(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2056],
    {
        36e3: (e, s, a) => {
            'use strict';
            (a.r(s), a.d(s, { default: () => u }));
            var r = a(88800),
                t = a(53548),
                c = a(58390),
                d = a(70236),
                n = a(92677);
            let u = () => {
                let e = (0, c.useSearchParams)().get('categoryId');
                return (
                    e || (0, c.notFound)(),
                    (0, r.jsx)(t.Suspense, { fallback: (0, r.jsx)(n.ChartPodcastsPageSuspenseLoader, {}), children: (0, r.jsx)(d.ChartPodcastsPage, { categoryId: e }) })
                );
            };
        },
        60062: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 36e3));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                9904, 7191, 3078, 1833, 8194, 1191, 8655, 2831, 6706, 4771, 1311, 2662, 6904, 1898, 2058, 3578, 8628, 4378, 9780, 8283, 9332, 5151, 2837, 4732, 9087,
                3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 6374, 2088, 8979, 7e3, 3413, 763, 2670, 7358,
            ],
            () => e((e.s = 60062)),
        ),
            (_N_E = e.O()));
    },
]);
