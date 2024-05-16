(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7601], {
        70538: function(e, r, t) {
            Promise.resolve().then(t.bind(t, 57361))
        },
        57361: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return o
                }
            });
            var n = t(3994),
                s = t(97016),
                i = t(97586),
                a = t(13743),
                c = t(61093),
                l = t(76604);

            function o(e) {
                let {
                    error: r
                } = e;
                return (0, s.useEffect)(() => {
                    i.Tb(r, {
                        tags: {
                            source: "error-page"
                        }
                    })
                }, [r]), (0, n.jsxs)("div", {
                    className: "flex-col gap-8 mt-16 text-center center",
                    children: [(0, n.jsx)("h2", {
                        children: (0, n.jsx)(a.xv, {
                            intent: "Heading2",
                            children: "An error occurred"
                        })
                    }), (0, n.jsx)("div", {
                        className: "max-w-md",
                        children: (0, n.jsxs)(a.xv, {
                            children: ["Something went wrong with your request. Please wait and try again. If the problem persists, please contact support here:", " ", (0, n.jsx)("a", {
                                href: "https://support.eigenlayer.xyz",
                                className: "hover:underline text-warningFg",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "support.eigenlayer.xyz"
                            })]
                        })
                    }), (0, n.jsx)(l.default, {
                        src: c.Z,
                        height: 40,
                        className: "justify-self-end",
                        priority: !0,
                        alt: "eigenlayer logo"
                    })]
                })
            }
        },
        61093: function(e, r) {
            "use strict";
            r.Z = {
                src: "/_next/static/media/horizontalDarkA.969b5aa2.svg",
                height: 32,
                width: 77,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    },
    function(e) {
        e.O(0, [1482, 6604, 3743, 7051, 2597, 4473, 1744], function() {
            return e(e.s = 70538)
        }), _N_E = e.O()
    }
]);