(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6940], {
        59731: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 50944))
        },
        50944: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return w
                }
            });
            var r = s(3994),
                a = s(13743),
                l = s(97016),
                n = s(24538),
                o = s.n(n),
                i = s(61389),
                d = s(46010),
                c = s(37962),
                u = s(95213),
                m = s(99279),
                v = s(1129);
            let h = "grid w-full grid-cols-1 gap-4 mb-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3";

            function x(e) {
                let {
                    items: t,
                    isLoading: s
                } = e, [n, x] = (0, l.useState)(""), {
                    data: g
                } = (0, u.O4)(), [p, f] = (0, v._)("AVS_TABLE_SORT_KEY", i.o.stakersDesc), j = (0, l.useRef)([]), S = (0, l.useMemo)(() => {
                    if (s) return [];
                    if (p === i.o.random && !s && t.length && j.current.length === t.length) {
                        let e = new Set(t.map(e => {
                            let {
                                address: t
                            } = e;
                            return t
                        }));
                        if (j.current.every(t => {
                                let {
                                    address: s
                                } = t;
                                return e.has(s)
                            })) return j.current
                    }
                    let e = t.sort((e, t) => {
                        var s, r, a, l, n, o;
                        let d = null !== (s = e.stakerCount) && void 0 !== s ? s : 0,
                            c = null !== (r = t.stakerCount) && void 0 !== r ? r : 0,
                            u = null !== (a = e.operatorCount) && void 0 !== a ? a : 0,
                            m = null !== (l = t.operatorCount) && void 0 !== l ? l : 0,
                            v = null !== (n = null == e ? void 0 : e.totalTVL) && void 0 !== n ? n : 0,
                            h = null !== (o = null == t ? void 0 : t.totalTVL) && void 0 !== o ? o : 0;
                        switch (p) {
                            case i.o.tvlAsc:
                                return v - h;
                            case i.o.tvlDesc:
                                return h - v;
                            case i.o.stakersAsc:
                                return d - c;
                            case i.o.stakersDesc:
                                return c - d;
                            case i.o.operatorsAsc:
                                return u - m;
                            case i.o.operatorsDesc:
                                return m - u;
                            case i.o.random:
                                return Math.random() - .5;
                            default:
                                return 0
                        }
                    });
                    return p !== i.o.random || s || (j.current = e), e
                }, [t, p, s]), b = (0, l.useMemo)(() => {
                    let e = new(o())(S, {
                        keys: ["metadata.name", "address", "metadata.website"],
                        threshold: .3
                    });
                    return n ? e.search(n).map(e => e.item) : S
                }, [S, n]), [N, y] = (0, l.useState)(0), w = b.slice(12 * N, 12 * N + 12);
                return (0, r.jsxs)("div", {
                    className: "flex flex-col items-center w-full",
                    children: [(0, r.jsxs)("div", {
                        className: "grid w-full grid-cols-1 gap-1 mb-2 sm:mb-4 sm:gap-4 sm:grid-cols-2",
                        children: [(0, r.jsx)(a.oi, {
                            search: !0,
                            value: n,
                            onChange: x,
                            placeholder: "Search by address/name/website",
                            containerClassName: "w-full",
                            size: a.dr.SM,
                            dataCypress: "operatorSearch"
                        }), (0, r.jsx)("div", {
                            className: "flex justify-end w-full",
                            children: (0, r.jsx)("div", {
                                className: "flex items-center gap-2",
                                children: (0, r.jsx)(i.Z, {
                                    selected: p,
                                    setSelected: e => {
                                        y(0), f(e)
                                    },
                                    items: [i.o.tvlAsc, i.o.tvlDesc, i.o.stakersAsc, i.o.stakersDesc, i.o.operatorsAsc, i.o.operatorsDesc, i.o.random]
                                })
                            })
                        })]
                    }), s ? (0, r.jsx)("div", {
                        className: h,
                        children: Array.from({
                            length: 6
                        }).map((e, t) => (0, r.jsx)(c.Z, {}, t))
                    }) : b.length > 0 ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: h,
                            children: w.map(e => {
                                let {
                                    address: t,
                                    metadata: s,
                                    operators: l,
                                    stakerCount: n,
                                    operatorCount: o,
                                    tvlByGroup: i
                                } = e;
                                return (0, r.jsx)(d.Z, {
                                    path: "/avs/".concat(t),
                                    name: null == s ? void 0 : s.name,
                                    address: t,
                                    description: null == s ? void 0 : s.description,
                                    website: null == s ? void 0 : s.website,
                                    logo: null == s ? void 0 : s.logo,
                                    dataCypress: "avsCard",
                                    stats: (0, r.jsxs)("div", {
                                        className: "flex flex-col [&>*]:border-t [&>*]:py-2 [&>*]:border-t-disabledFg last:border-b last:border-b-disabledFg",
                                        children: [(0, r.jsx)(m.q, {
                                            tvlByGroup: i
                                        }), (0, r.jsxs)("div", {
                                            className: "flex flex-row items-center justify-between",
                                            children: [(0, r.jsx)(a.xv, {
                                                intent: "ShortTextS",
                                                className: "text-quarternaryFg uppercase",
                                                children: "Total Num. Operators"
                                            }), (0, r.jsx)(a.xv, {
                                                intent: "ShortTextS",
                                                className: "".concat(!o && "text-disabledFg"),
                                                children: null == o ? void 0 : o.toLocaleString("en-US")
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex flex-row items-center justify-between",
                                            children: [(0, r.jsx)(a.xv, {
                                                intent: "ShortTextS",
                                                className: "text-quarternaryFg uppercase",
                                                children: "Total Num. Stakers"
                                            }), (0, r.jsx)(a.xv, {
                                                intent: "ShortTextS",
                                                children: null == n ? void 0 : n.toLocaleString("en-US")
                                            })]
                                        })]
                                    }),
                                    tag: (null == l ? void 0 : l.find(e => e.toUpperCase() === (null == g ? void 0 : g.toUpperCase()))) && (0, r.jsx)(a.u, {
                                        asChild: !0,
                                        trigger: (0, r.jsx)(a.Vp, {
                                            color: "green",
                                            className: "ml-auto truncate",
                                            children: (0, r.jsx)(a.xv, {
                                                intent: "ShortTextXS",
                                                className: "truncate",
                                                children: "Delegated"
                                            })
                                        }),
                                        content: "Your stake is delegated to an operator that is opted in to this avs"
                                    })
                                }, t)
                            })
                        }), (0, r.jsx)(a.tl, {
                            totalPages: Math.ceil(b.length / 12),
                            pageIndex: N,
                            onPageChange: e => {
                                y(e)
                            },
                            truncate: !0
                        })]
                    }) : (0, r.jsx)(a.xv, {
                        children: "No services found. Try a different search term"
                    })]
                })
            }
            var g = s(66177),
                p = s(8058),
                f = s(75541),
                j = s(17225),
                S = s(78563),
                b = s(60930),
                N = s.n(b),
                y = () => {
                    let {
                        data: {
                            avsInfo: e
                        } = {
                            avsInfo: []
                        },
                        isLoading: t
                    } = g.h.avs.getAllAVS.useQuery(), {
                        data: s,
                        isLoading: r
                    } = (0, p.Z)(), {
                        liquidRestakingTokens: a,
                        nativeRestakingToken: n,
                        isLiquidTokensLoading: o,
                        isNativeTokenLoading: i
                    } = (0, f.rU)();
                    return {
                        AVSList: (0, l.useMemo)(() => {
                            var t;
                            return null !== (t = null == e ? void 0 : e.map(e => {
                                let t = e.strategyAndShare,
                                    r = (0, S.x)(t, s),
                                    l = N().chain([...a, n]).filter(j.hD).map(e => {
                                        var t, s;
                                        return { ...e,
                                            ethValue: e.ethValue * r[e.symbol],
                                            tvl: null !== (s = r[e.symbol]) && void 0 !== s ? s : 0
                                        }
                                    }).groupBy("group").value(),
                                    o = (0, b.sumBy)(l.native, "ethValue") + (0, b.sumBy)(l.lst, "ethValue");
                                return { ...e,
                                    tvl: r,
                                    totalTVL: o,
                                    tvlByGroup: l
                                }
                            })) && void 0 !== t ? t : []
                        }, [e, a, n, s]),
                        isLoading: t || r || o || i
                    }
                };

            function w() {
                let {
                    AVSList: e,
                    isLoading: t
                } = y();
                return (0, r.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, r.jsx)(a.xv, {
                        intent: "Heading1",
                        className: "text-Heading1 sm:text-DisplayS sm:grow",
                        children: "Discover"
                    }), (0, r.jsx)(a.xv, {
                        intent: "Heading3",
                        className: "block mb-4",
                        children: "Actively Validated Services"
                    }), (0, r.jsx)(x, {
                        items: e,
                        isLoading: t
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [6299, 1482, 5129, 7915, 6072, 1129, 6482, 3983, 3743, 1704, 7542, 5213, 7810, 7051, 2597, 4473, 1744], function() {
            return e(e.s = 59731)
        }), _N_E = e.O()
    }
]);