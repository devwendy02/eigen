(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1770], {
        3461: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 5077))
        },
        5077: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var r = a(3994),
                l = a(13743),
                n = a(36721),
                o = a(75808);

            function s() {
                let {
                    formattedOperators: e,
                    delegatedTvlTotal: t,
                    isLoading: a
                } = (0, o.ZP)();
                return (0, r.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, r.jsx)(l.xv, {
                        intent: "Heading1",
                        className: "text-Heading1 sm:text-DisplayS sm:grow",
                        children: "Delegate"
                    }), (0, r.jsx)(l.xv, {
                        intent: "Heading3",
                        className: "block mb-4",
                        children: "Node operators"
                    }), (0, r.jsx)(n.Z, {
                        delegatedTvlTotal: t,
                        operators: e,
                        isOperatorsLoading: a
                    })]
                })
            }
        },
        75808: function(e, t, a) {
            "use strict";
            a.d(t, {
                GO: function() {
                    return g
                },
                xw: function() {
                    return c
                }
            });
            var r = a(97016),
                l = a(66177),
                n = a(8058),
                o = a(75541),
                s = a(17225),
                u = a(60930),
                i = a.n(u),
                d = a(95213),
                v = a(78563);
            let c = () => {
                    let {
                        data: e,
                        isLoading: t
                    } = l.h.operator.getAllOperatorShares.useQuery(void 0, {
                        keepPreviousData: !0,
                        staleTime: 3e5,
                        cacheTime: 3e5,
                        select: e => 0 === e.strategyAndShare.length ? {} : e.strategyAndShare.reduce((e, t) => (Object.entries(t).forEach(t => {
                            let [a, r] = t;
                            e[a] || (e[a] = 0 n), e[a] += BigInt(null != r ? r : 0 n)
                        }), e), {})
                    }), {
                        data: a,
                        isLoading: d
                    } = (0, n.Z)(), {
                        liquidRestakingTokens: c,
                        nativeRestakingToken: g,
                        isLiquidTokensLoading: m,
                        isNativeTokenLoading: h
                    } = (0, o.rU)();
                    return {
                        data: (0, r.useMemo)(() => {
                            var t;
                            let r = (0, v.x)(e, a),
                                l = i().chain([...c, g]).filter(s.hD).map(e => {
                                    var t, a;
                                    return { ...e,
                                        ethValue: e.ethValue * r[e.symbol],
                                        tvl: null !== (a = r[e.symbol]) && void 0 !== a ? a : 0
                                    }
                                }).groupBy("group").value(),
                                n = (0, u.sumBy)(l.native, "ethValue") + (0, u.sumBy)(l.lst, "ethValue");
                            return {
                                eigenTVL: null !== (t = r.EIGEN) && void 0 !== t ? t : 0,
                                totalTVL: n
                            }
                        }, [c, g, a, e]),
                        isLoading: d || m || h || t
                    }
                },
                g = e => {
                    var t;
                    let {
                        data: a
                    } = (0, d.O4)(), {
                        data: s,
                        isLoading: u,
                        isSuccess: i,
                        ...c
                    } = l.h.operator.getOperatorSummary.useQuery({
                        address: null == e ? void 0 : e.toLowerCase(),
                        delegateAddress: null == a ? void 0 : a.toLowerCase()
                    }), {
                        data: g
                    } = (0, n.Z)(), m = (0, r.useMemo)(() => {
                        var e;
                        return s ? (0, v.x)(null == s ? void 0 : null === (e = s.shares) || void 0 === e ? void 0 : e[0], g) : {}
                    }, [s, g]), {
                        total: h,
                        isLoading: p
                    } = (0, o._6)(m);
                    return {
                        operatorSummary: null == s ? null : { ...s,
                            numStakers: (null == s ? void 0 : s.numStakers) || 1,
                            tvl: m,
                            totalTVL: h,
                            eigenTVL: null !== (t = m.EIGEN) && void 0 !== t ? t : 0
                        },
                        isLoadingTVL: p,
                        isOperatorLoading: u,
                        isOperatorSuccess: i,
                        ...c
                    }
                };
            t.ZP = () => {
                let {
                    data: e,
                    isLoading: t,
                    isSuccess: a
                } = l.h.operator.getAllOperatorsWithMetadata.useQuery(void 0, {
                    keepPreviousData: !0
                }), {
                    data: d,
                    isLoading: c,
                    isSuccess: g
                } = l.h.operator.getAllOperatorTVLNumStakers.useQuery(void 0, {
                    keepPreviousData: !0
                }), {
                    data: m
                } = (0, n.Z)(), {
                    liquidRestakingTokens: h,
                    nativeRestakingToken: p,
                    isLiquidTokensLoading: L,
                    isNativeTokenLoading: f
                } = (0, o.rU)(), y = null == d ? void 0 : d.operatorTvlStakerData, V = null == e ? void 0 : e.operatorMetadata, S = (0, r.useMemo)(() => {
                    if (!V) return [];
                    let e = V.filter(e => e && "" !== e.name);
                    return V && !y ? e : e.map(e => {
                        let t = y.find(t => t.address === e.address),
                            a = (0, v.x)(null == t ? void 0 : t.shares, m),
                            r = i().chain([...h, p]).filter(s.hD).map(e => {
                                var t, r;
                                return { ...e,
                                    ethValue: e.ethValue * a[e.symbol],
                                    tvl: null !== (r = a[e.symbol]) && void 0 !== r ? r : 0
                                }
                            }).groupBy("group").value(),
                            l = (0, u.sumBy)(r.native, "ethValue") + (0, u.sumBy)(r.lst, "ethValue"),
                            n = (0, u.get)(a, "EIGEN", 0);
                        return { ...e,
                            numStakers: (null == t ? void 0 : t.numStakers) || 1,
                            tvlByGroup: r,
                            tvl: a,
                            totalTVL: l,
                            eigenTVL: n
                        }
                    })
                }, [V, y, m, p, h]), k = (0, r.useMemo)(() => (0, u.reduce)(S, (e, t) => (e.totalTVL += t.totalTVL, e.eigenTVL += t.eigenTVL, e), {
                    totalTVL: 0,
                    eigenTVL: 0
                }), [S]);
                return {
                    operatorMetadata: V,
                    isMetadataLoading: t,
                    isMetadataSuccess: a,
                    operatorTvlStakerData: y,
                    isTvlStakerDataLoading: c,
                    isTvlStakerDataSuccess: g,
                    formattedOperators: S,
                    delegatedTvlTotal: k,
                    isLoading: L || f || c || t
                }
            }
        }
    },
    function(e) {
        e.O(0, [6299, 1482, 5129, 7915, 6072, 1129, 6482, 3983, 3743, 1704, 7542, 5213, 7810, 7051, 2597, 4473, 1744], function() {
            return e(e.s = 3461)
        }), _N_E = e.O()
    }
]);