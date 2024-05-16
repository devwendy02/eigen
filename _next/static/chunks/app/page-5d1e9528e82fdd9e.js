(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        86854: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 17365))
        },
        17365: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return w
                }
            });
            var r = a(3994),
                n = a(13743),
                l = a(75541),
                s = a(38284),
                i = a(95213),
                o = a(14714),
                d = a(75808),
                c = a(74253),
                u = a(12076),
                x = a(17225),
                g = a(24656);

            function m(e) {
                var t, a, l;
                let {
                    token: {
                        symbol: s,
                        name: i,
                        icon: o,
                        deposited: d
                    },
                    withdrawalData: u,
                    isLoading: x
                } = e;
                return (0, r.jsx)(c.default, {
                    href: "/restake/".concat(s),
                    "data-cypress": s,
                    children: (0, r.jsxs)("div", {
                        className: "flex flex-col items-start justify-between gap-6 p-6 rounded-lg lg:flex-row lg:items-center bg-tertiaryBg hover:bg-interactiveQuarternaryHover",
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center w-full gap-4 lg:w-auto",
                            children: [(0, r.jsx)(g.Z, {
                                src: o,
                                size: n.dr.MD
                            }), (0, r.jsx)("div", {
                                className: "flex gap-2 text-start",
                                children: (0, r.jsx)(n.xv, {
                                    intent: "Heading3",
                                    dataCypress: "dashboardTokenName",
                                    children: i
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "flex flex-col items-end w-full gap-6 lg:w-auto lg:items-center lg:flex-row",
                            children: (0, r.jsx)("div", {
                                className: "flex items-start w-full border-t lg:w-auto lg:border-t-0 border-accentGreen",
                                children: [{
                                    label: "Restaked",
                                    value: null !== (t = null == d ? void 0 : d.underlying) && void 0 !== t ? t : 0
                                }, {
                                    label: "Pending Withdraw",
                                    value: null !== (a = null == u ? void 0 : u.pendingWithdrawalAmount) && void 0 !== a ? a : 0
                                }, {
                                    label: "Available to withdraw",
                                    value: null !== (l = null == u ? void 0 : u.completableWithdrawalAmount) && void 0 !== l ? l : 0
                                }].map(e => {
                                    let {
                                        label: t,
                                        value: a
                                    } = e, l = 0 === Number(a);
                                    return (0, r.jsxs)("div", {
                                        className: "flex flex-col justify-start w-1/3 px-0 pt-4 whitespace-nowrap lg:py-0 lg:pl-4 lg:w-48 lg:border-l lg:border-t-0 border-accentGreen",
                                        children: [x ? (0, r.jsx)(n.yg, {
                                            intent: "LabelM",
                                            className: "w-20"
                                        }) : (0, r.jsx)(n.xv, {
                                            intent: "LabelM",
                                            className: "".concat(l && "text-disabledFg"),
                                            dataCypress: "".concat(i, "-").concat(t),
                                            children: (0, r.jsx)(n.e3, {
                                                value: a || 0,
                                                decimals: 4,
                                                format: "tokenAmount"
                                            })
                                        }), (0, r.jsx)(n.xv, {
                                            intent: "ShortTextS",
                                            className: "hidden lg:block text-tertiaryFg",
                                            children: t
                                        }), (0, r.jsx)(n.xv, {
                                            intent: "ShortTextXS",
                                            className: "block whitespace-normal lg:hidden text-tertiaryFg",
                                            children: t
                                        })]
                                    }, t)
                                })
                            })
                        })]
                    })
                }, s)
            }
            var h = a(97016),
                p = a(65722);

            function v(e) {
                let {
                    operator: {
                        logo: t,
                        address: a,
                        name: l
                    },
                    tokens: s,
                    isLoading: i
                } = e;
                return (0, r.jsxs)(c.default, {
                    href: "/operator/".concat(a),
                    className: "flex flex-col items-start justify-between gap-6 p-6 rounded-lg lg:flex-row lg:items-center bg-tertiaryBg hover:bg-interactiveQuarternaryHover",
                    children: [(0, r.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [(0, r.jsx)("img", {
                            src: t || "/tokenIcon/beaconChainETH.svg",
                            height: 48,
                            width: 48,
                            alt: "node operator logo",
                            className: "rounded"
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, r.jsx)(n.xv, {
                                intent: "Heading3",
                                className: "truncate hover:underline",
                                dataCypress: "dashboardOperatorName",
                                children: l || (0, o.X)(a)
                            }), (0, r.jsx)("a", {
                                href: "".concat(p.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL, "/address/").concat(a),
                                target: "_blank",
                                rel: "noreferrer",
                                className: "cursor-pointer text-tertiaryFg hover:underline",
                                onClick: e => e.stopPropagation(),
                                children: (0, r.jsx)(n.xv, {
                                    intent: "ShortTextXS",
                                    children: (0, o.X)(a)
                                })
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "flex flex-col items-end w-full gap-6 lg:h-full lg:w-auto lg:items-center lg:flex-row",
                        children: (0, r.jsx)("div", {
                            className: "flex items-center justify-between w-full h-full border-t lg:w-auto lg:border-t-0 border-accentGreen",
                            children: s.map(e => {
                                let {
                                    symbol: t,
                                    deposited: a
                                } = e, l = 0 === Number(null == a ? void 0 : a.underlying);
                                return (0, r.jsxs)("div", {
                                    className: "flex flex-col justify-start w-1/3 px-0 pt-4 whitespace-nowrap lg:py-0 lg:pl-4 lg:w-48 lg:border-l lg:border-t-0 border-accentGreen",
                                    children: [i ? (0, r.jsx)(n.yg, {
                                        intent: "LabelM",
                                        className: "w-20"
                                    }) : (0, r.jsx)(n.xv, {
                                        intent: "LabelM",
                                        className: "".concat(l && "text-disabledFg"),
                                        children: (0, r.jsx)(n.e3, {
                                            value: (null == a ? void 0 : a.underlying) || 0,
                                            decimals: 4,
                                            format: "tokenAmount"
                                        })
                                    }), (0, r.jsx)(n.xv, {
                                        intent: "ShortTextS",
                                        className: "hidden lg:block text-tertiaryFg",
                                        children: t
                                    }), (0, r.jsx)(n.xv, {
                                        intent: "ShortTextXS",
                                        className: "block whitespace-normal lg:hidden text-tertiaryFg",
                                        children: t
                                    })]
                                }, t)
                            })
                        })
                    })]
                })
            }
            var f = a(56109),
                y = a(87279);
            let j = "testnet-holesky" === p.env.NEXT_PUBLIC_CONTRACT_ENV || "preprod-holesky" === p.env.NEXT_PUBLIC_CONTRACT_ENV,
                b = () => (0, r.jsx)("a", {
                    href: "https://docs.eigenlayer.xyz/restaking-guides/restaking-user-guide/restaked-points",
                    className: "cursor-pointer text-primaryFg hover:text-tertiaryFg hover:underline",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Restaked Points"
                });
            var k = () => {
                    let {
                        liquidRestakingTokens: e,
                        nativeRestakingToken: t
                    } = (0, l.rU)(), {
                        userTotalRestakedInETH: a,
                        restakedPoints: g,
                        restakedRatio: p,
                        isLoading: k
                    } = (0, s.m)(), {
                        data: N,
                        isDelegated: w
                    } = (0, i.O4)(), {
                        address: T,
                        isConnected: S
                    } = (0, u.Z)(), {
                        data: C
                    } = (0, f.a)({
                        queryKey: ["uncompletedWithdrawalsForWithdrawerForAllTokens", T],
                        queryFn: () => (0, y.eL)(T),
                        enabled: !!T,
                        refetchOnMount: "always"
                    }), {
                        operatorSummary: L
                    } = (0, d.GO)(N), E = (0, h.useMemo)(() => [...e, t].filter(x.hD).filter(e => {
                        var t, a;
                        return !!e.deposited.underlying || !!(null == C ? void 0 : null === (t = C[e.symbol]) || void 0 === t ? void 0 : t.pendingWithdrawalAmount) || !!(null == C ? void 0 : null === (a = C[e.symbol]) || void 0 === a ? void 0 : a.completableWithdrawalAmount)
                    }), [e, t, C]);
                    return (0, r.jsxs)("div", {
                        className: "grid grid-cols-4 gap-2",
                        children: [a && S ? (0, r.jsx)("div", {
                            className: "col-span-4 sm:col-span-2",
                            children: (0, r.jsx)(n.Rm, {
                                stat: (0, r.jsx)(c.default, {
                                    href: "/restake",
                                    "data-cypress": "tokens-page-link",
                                    className: "hover:underline decoration-accentOrange",
                                    children: (0, r.jsxs)(n.xv, {
                                        className: "text-accentOrange",
                                        intent: "DisplayS",
                                        dataCypress: "restakedBalanceCard",
                                        children: [(0, r.jsx)(n.e3, {
                                            value: a,
                                            format: "tokenAmount",
                                            decimals: 4,
                                            truncate: !0
                                        }), " ", "ETH"]
                                    })
                                }),
                                label: (0, r.jsxs)("div", {
                                    className: "flex items-center gap-2 truncate",
                                    children: ["Restaked", (0, r.jsx)(n.Ob, {
                                        contentClassName: "w-44 whitespace-normal text-center flex justify-center",
                                        children: "The total represents your restaked tokens in ETH. Tokens outside of the ETH quorum are not included."
                                    })]
                                }),
                                intent: "secondary",
                                isLoading: k,
                                className: "col-span-4 p-4 bg-tertiaryBg hover:bg-interactiveQuarternaryHover sm:p-6 lg:p-6 sm:col-span-2",
                                loaderClassName: "w-36 md:w-48",
                                "data-cypress": "tokens-page-link"
                            })
                        }) : (0, r.jsx)("div", {
                            className: "flex items-center col-span-4 p-4 rounded-lg sm:col-span-2 bg-tertiaryBg sm:p-6 lg:p-6",
                            children: k || !S ? (0, r.jsxs)("div", {
                                className: "flex flex-col gap-2 grow",
                                children: [(0, r.jsx)(n.yg, {
                                    intent: "Heading3",
                                    animate: !1
                                }), (0, r.jsx)(n.xv, {
                                    intent: "ShortTextS",
                                    className: "truncate text-ShortTextS md:text-ShortTextM",
                                    children: "Restaked"
                                })]
                            }) : (0, r.jsx)(c.default, {
                                href: "/restake",
                                className: "w-full",
                                "data-cypress": "restake-your-tokens",
                                children: (0, r.jsx)(n.zx, {
                                    children: "Restake Your Tokens"
                                })
                            })
                        }), a && w && S ? (0, r.jsx)("div", {
                            className: "col-span-4 sm:col-span-2 ",
                            children: (0, r.jsx)(n.Rm, {
                                stat: (0, r.jsx)(c.default, {
                                    href: "/operator/",
                                    "data-cypress": "delegate-your-stake",
                                    className: "hover:underline decoration-accentOrange",
                                    children: (0, r.jsxs)(n.xv, {
                                        className: "text-accentOrange",
                                        intent: "DisplayS",
                                        dataCypress: "delegatedBalanceCard",
                                        children: [(0, r.jsx)(n.e3, {
                                            value: a,
                                            format: "tokenAmount",
                                            decimals: 4,
                                            truncate: !0
                                        }), " ", "ETH"]
                                    })
                                }),
                                label: (0, r.jsxs)("div", {
                                    className: "flex gap-2 truncate",
                                    children: ["Delegated", (0, r.jsx)(n.Ob, {
                                        contentClassName: "w-44 whitespace-normal text-center flex justify-center",
                                        children: "Delegated to ".concat(L ? L.name : (0, o.X)(N))
                                    })]
                                }),
                                isLoading: k,
                                intent: "secondary",
                                className: "p-4 bg-tertiaryBg hover:bg-interactiveQuarternaryHover sm:p-6 lg:p-6",
                                loaderClassName: "w-36 md:w-48"
                            })
                        }) : (0, r.jsx)("div", {
                            className: "flex items-center col-span-4 p-4 rounded-lg sm:col-span-2 bg-tertiaryBg sm:p-6 lg:p-6",
                            children: k || !S ? (0, r.jsxs)("div", {
                                className: "flex flex-col gap-2 grow",
                                children: [(0, r.jsx)(n.yg, {
                                    intent: "Heading3",
                                    animate: !1
                                }), (0, r.jsx)(n.xv, {
                                    intent: "ShortTextS",
                                    className: "truncate text-ShortTextS md:text-ShortTextM",
                                    children: "Delegated"
                                })]
                            }) : (0, r.jsx)(c.default, {
                                href: "/operator/",
                                className: "w-full",
                                "data-cypress": "delegate-your-stake",
                                children: (0, r.jsx)(n.zx, {
                                    disabled: 0 === a,
                                    children: "Delegate Your Stake"
                                })
                            })
                        }), j ? null : (0, r.jsxs)(r.Fragment, {
                            children: [S ? (0, r.jsx)(n.Rm, {
                                stat: (0, r.jsx)(n.xv, {
                                    className: "truncate text-accentOrange",
                                    intent: "DisplayS",
                                    dataCypress: "restakedPointsCard",
                                    children: (0, r.jsx)(n.e3, {
                                        value: g,
                                        format: "tokenAmount",
                                        decimals: g ? 4 : 0,
                                        truncate: !0
                                    })
                                }),
                                label: (0, r.jsxs)("div", {
                                    className: "flex gap-2 truncate",
                                    children: [(0, r.jsx)(b, {}), (0, r.jsx)(n.Ob, {
                                        contentClassName: "w-44 whitespace-normal text-center",
                                        children: (0, r.jsxs)("span", {
                                            children: ["A measure of your total Eigenlayer restaking contribution. Equal to your time-integrated amount staked in units of ETH * hours. More info", " ", (0, r.jsx)("a", {
                                                href: "https://docs.eigenlayer.xyz/restaking-guides/restaking-user-guide/restaked-points",
                                                className: "inline underline text-inversePrimaryFg hover:text-inverseTertiaryFg",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "here"
                                            }), "."]
                                        })
                                    })]
                                }),
                                isLoading: k,
                                intent: "secondary",
                                className: "col-span-2 p-4 bg-primaryBg sm:p-6 lg:p-6",
                                loaderClassName: "w-36 md:w-48"
                            }) : (0, r.jsx)("div", {
                                className: "flex items-center col-span-2 p-4 rounded-lg sm:p-6 lg:p-6",
                                children: (0, r.jsxs)("div", {
                                    className: "flex flex-col gap-2 grow",
                                    children: [(0, r.jsx)(n.yg, {
                                        intent: "Heading3",
                                        animate: !1
                                    }), (0, r.jsx)(n.xv, {
                                        intent: "ShortTextS",
                                        className: "truncate text-ShortTextS md:text-ShortTextM",
                                        children: (0, r.jsx)(b, {})
                                    })]
                                })
                            }), S ? (0, r.jsx)(n.Rm, {
                                stat: (0, r.jsx)(n.xv, {
                                    className: "truncate text-accentOrange",
                                    intent: "DisplayS",
                                    dataCypress: "restakedRatioCard",
                                    children: (0, r.jsx)(n.e3, {
                                        value: p || 0,
                                        format: "percentage",
                                        decimals: p ? 4 : 1,
                                        truncate: !0
                                    })
                                }),
                                label: (0, r.jsxs)("div", {
                                    className: "flex gap-2 truncate",
                                    children: ["Restaked Ratio", (0, r.jsx)(n.Ob, {
                                        contentClassName: "w-44 whitespace-normal text-center flex justify-center",
                                        children: "Your restaked points divided by the total restaked points for all users"
                                    })]
                                }),
                                isLoading: k,
                                intent: "secondary",
                                className: "col-span-2 p-4 bg-primaryBg sm:p-6 lg:p-6",
                                loaderClassName: "w-36 md:w-48"
                            }) : (0, r.jsx)("div", {
                                className: "flex items-center col-span-2 p-4 rounded-lg sm:p-6 lg:p-6",
                                children: (0, r.jsxs)("div", {
                                    className: "flex flex-col gap-2 grow",
                                    children: [(0, r.jsx)(n.yg, {
                                        intent: "Heading3",
                                        animate: !1
                                    }), (0, r.jsx)(n.xv, {
                                        intent: "ShortTextS",
                                        className: "truncate text-ShortTextS md:text-ShortTextM",
                                        children: "Restaked Ratio"
                                    })]
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col col-span-4 gap-4 mt-4",
                            children: [(0, r.jsx)(n.xv, {
                                intent: "Heading2",
                                children: "Your Stake"
                            }), k ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(n.yg, {
                                    intent: "Heading1",
                                    animate: !1
                                }), (0, r.jsx)(n.yg, {
                                    intent: "Heading1",
                                    animate: !1
                                }), (0, r.jsx)(n.yg, {
                                    intent: "Heading1",
                                    animate: !1
                                })]
                            }) : 0 !== E.length ? E.map(e => (0, r.jsx)(m, {
                                withdrawalData: null == C ? void 0 : C[e.symbol],
                                token: e,
                                isLoading: k
                            }, e.address)) : (0, r.jsx)(n.Zb, {
                                className: "flex items-center justify-center h-40 text-center",
                                children: (0, r.jsx)(n.xv, {
                                    intent: "Heading3",
                                    children: S ? "You have not restaked any tokens" : "Connect your wallet to view your restaked tokens"
                                })
                            })]
                        }), L && w ? (0, r.jsxs)("div", {
                            className: "flex flex-col col-span-4 gap-4 mt-4",
                            children: [(0, r.jsx)(n.xv, {
                                intent: "Heading2",
                                children: "Delegated To"
                            }), (0, r.jsx)(v, {
                                operator: L,
                                tokens: E,
                                isLoading: k
                            })]
                        }) : null]
                    })
                },
                N = a(67447);

            function w() {
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsx)("div", {
                        className: "mb-4",
                        children: (0, r.jsx)(n.xv, {
                            intent: "Heading1",
                            className: "text-Heading1 sm:text-DisplayS sm:grow",
                            children: "Dashboard"
                        })
                    }), (0, r.jsx)(N.Z, {
                        withLink: !0
                    }), (0, r.jsx)(k, {})]
                })
            }
        },
        67447: function(e, t, a) {
            "use strict";
            var r = a(3994),
                n = a(66177),
                l = a(95213),
                s = a(13743),
                i = a(75808),
                o = a(64564),
                d = a(74253);
            t.Z = e => {
                var t;
                let {
                    withLink: a = !1
                } = e, {
                    data: c
                } = (0, l.O4)(), {
                    data: u
                } = n.h.operator.getIsDelegatedToBlocklist.useQuery(c), {
                    operatorSummary: x
                } = (0, i.GO)(c);
                return u ? (0, r.jsx)("div", {
                    className: "flex flex-col items-center justify-between gap-5 px-6 py-4 mb-4 border rounded-lg sm:flex-row border-primaryFg/50 text-primaryFg bg-primaryFg/10",
                    children: (0, r.jsxs)("div", {
                        className: "flex items-center gap-5",
                        children: [(0, r.jsx)(o.Z, {
                            className: "w-12 h-12"
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col w-full",
                            children: [(0, r.jsxs)(s.xv, {
                                intent: "LabelL",
                                children: [null !== (t = null == x ? void 0 : x.name) && void 0 !== t ? t : "your selected operator", " is under review"]
                            }), (0, r.jsx)(s.xv, {
                                intent: "TextS",
                                children: "This operator is under review for violation of either the terms of service or the content policy. Please exercise caution. Your funds remain safe and can be delegated to a different operator at any time."
                            })]
                        }), a && (0, r.jsx)(d.default, {
                            href: "/operator/".concat(c),
                            children: (0, r.jsx)(s.zx, {
                                size: s.dr.SM,
                                children: "Manage Delegation"
                            })
                        })]
                    })
                }) : null
            }
        },
        24656: function(e, t, a) {
            "use strict";
            var r = a(3994),
                n = a(76604),
                l = a(13743);
            let s = {
                [l.dr.XS]: 24,
                [l.dr.SM]: 32,
                [l.dr.MD]: 48,
                [l.dr.LG]: 60
            };
            t.Z = e => {
                let {
                    src: t,
                    size: a = l.dr.MD,
                    className: i,
                    fill: o,
                    priority: d = !1
                } = e, c = o ? void 0 : s[a];
                return (0, r.jsx)(n.default, {
                    src: "/".concat(t),
                    width: c,
                    height: c,
                    alt: t,
                    className: i,
                    fill: o,
                    priority: d
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
                    return x
                }
            });
            var r = a(97016),
                n = a(66177),
                l = a(8058),
                s = a(75541),
                i = a(17225),
                o = a(60930),
                d = a.n(o),
                c = a(95213),
                u = a(78563);
            let x = () => {
                    let {
                        data: e,
                        isLoading: t
                    } = n.h.operator.getAllOperatorShares.useQuery(void 0, {
                        keepPreviousData: !0,
                        staleTime: 3e5,
                        cacheTime: 3e5,
                        select: e => 0 === e.strategyAndShare.length ? {} : e.strategyAndShare.reduce((e, t) => (Object.entries(t).forEach(t => {
                            let [a, r] = t;
                            e[a] || (e[a] = 0 n), e[a] += BigInt(null != r ? r : 0 n)
                        }), e), {})
                    }), {
                        data: a,
                        isLoading: c
                    } = (0, l.Z)(), {
                        liquidRestakingTokens: x,
                        nativeRestakingToken: g,
                        isLiquidTokensLoading: m,
                        isNativeTokenLoading: h
                    } = (0, s.rU)();
                    return {
                        data: (0, r.useMemo)(() => {
                            var t;
                            let r = (0, u.x)(e, a),
                                n = d().chain([...x, g]).filter(i.hD).map(e => {
                                    var t, a;
                                    return { ...e,
                                        ethValue: e.ethValue * r[e.symbol],
                                        tvl: null !== (a = r[e.symbol]) && void 0 !== a ? a : 0
                                    }
                                }).groupBy("group").value(),
                                l = (0, o.sumBy)(n.native, "ethValue") + (0, o.sumBy)(n.lst, "ethValue");
                            return {
                                eigenTVL: null !== (t = r.EIGEN) && void 0 !== t ? t : 0,
                                totalTVL: l
                            }
                        }, [x, g, a, e]),
                        isLoading: c || m || h || t
                    }
                },
                g = e => {
                    var t;
                    let {
                        data: a
                    } = (0, c.O4)(), {
                        data: i,
                        isLoading: o,
                        isSuccess: d,
                        ...x
                    } = n.h.operator.getOperatorSummary.useQuery({
                        address: null == e ? void 0 : e.toLowerCase(),
                        delegateAddress: null == a ? void 0 : a.toLowerCase()
                    }), {
                        data: g
                    } = (0, l.Z)(), m = (0, r.useMemo)(() => {
                        var e;
                        return i ? (0, u.x)(null == i ? void 0 : null === (e = i.shares) || void 0 === e ? void 0 : e[0], g) : {}
                    }, [i, g]), {
                        total: h,
                        isLoading: p
                    } = (0, s._6)(m);
                    return {
                        operatorSummary: null == i ? null : { ...i,
                            numStakers: (null == i ? void 0 : i.numStakers) || 1,
                            tvl: m,
                            totalTVL: h,
                            eigenTVL: null !== (t = m.EIGEN) && void 0 !== t ? t : 0
                        },
                        isLoadingTVL: p,
                        isOperatorLoading: o,
                        isOperatorSuccess: d,
                        ...x
                    }
                };
            t.ZP = () => {
                let {
                    data: e,
                    isLoading: t,
                    isSuccess: a
                } = n.h.operator.getAllOperatorsWithMetadata.useQuery(void 0, {
                    keepPreviousData: !0
                }), {
                    data: c,
                    isLoading: x,
                    isSuccess: g
                } = n.h.operator.getAllOperatorTVLNumStakers.useQuery(void 0, {
                    keepPreviousData: !0
                }), {
                    data: m
                } = (0, l.Z)(), {
                    liquidRestakingTokens: h,
                    nativeRestakingToken: p,
                    isLiquidTokensLoading: v,
                    isNativeTokenLoading: f
                } = (0, s.rU)(), y = null == c ? void 0 : c.operatorTvlStakerData, j = null == e ? void 0 : e.operatorMetadata, b = (0, r.useMemo)(() => {
                    if (!j) return [];
                    let e = j.filter(e => e && "" !== e.name);
                    return j && !y ? e : e.map(e => {
                        let t = y.find(t => t.address === e.address),
                            a = (0, u.x)(null == t ? void 0 : t.shares, m),
                            r = d().chain([...h, p]).filter(i.hD).map(e => {
                                var t, r;
                                return { ...e,
                                    ethValue: e.ethValue * a[e.symbol],
                                    tvl: null !== (r = a[e.symbol]) && void 0 !== r ? r : 0
                                }
                            }).groupBy("group").value(),
                            n = (0, o.sumBy)(r.native, "ethValue") + (0, o.sumBy)(r.lst, "ethValue"),
                            l = (0, o.get)(a, "EIGEN", 0);
                        return { ...e,
                            numStakers: (null == t ? void 0 : t.numStakers) || 1,
                            tvlByGroup: r,
                            tvl: a,
                            totalTVL: n,
                            eigenTVL: l
                        }
                    })
                }, [j, y, m, p, h]), k = (0, r.useMemo)(() => (0, o.reduce)(b, (e, t) => (e.totalTVL += t.totalTVL, e.eigenTVL += t.eigenTVL, e), {
                    totalTVL: 0,
                    eigenTVL: 0
                }), [b]);
                return {
                    operatorMetadata: j,
                    isMetadataLoading: t,
                    isMetadataSuccess: a,
                    operatorTvlStakerData: y,
                    isTvlStakerDataLoading: x,
                    isTvlStakerDataSuccess: g,
                    formattedOperators: b,
                    delegatedTvlTotal: k,
                    isLoading: v || f || x || t
                }
            }
        },
        38284: function(e, t, a) {
            "use strict";
            a.d(t, {
                m: function() {
                    return i
                }
            });
            var r = a(97016),
                n = a(52842),
                l = a(75541),
                s = a(17225);
            let i = () => {
                let {
                    liquidRestakingTokens: e,
                    nativeRestakingToken: t,
                    isLoading: a
                } = (0, l.rU)(), i = (0, r.useMemo)(() => {
                    if (!e || !t) return null;
                    let a = [...e, t].filter(e => (0, s.Z1)(e));
                    return 0 === a.length ? 0 : a.filter(s.hD).reduce((e, t) => e + t.ethValue * Number((0, n.b)(BigInt(t.deposited.underlying), t.decimals)), 0)
                }, [e, t]), o = (0, r.useMemo)(() => !!e && !!t && [...e, t].some(e => {
                    let {
                        deposited: t
                    } = e;
                    if (t) return t.underlying > 0 n
                }), [e, t]), d = (0, r.useMemo)(() => e && t ? [...e, t].filter(s.hD).reduce((e, t) => e + t.restakedPoints, 0) : null, [e, t]), c = (0, r.useMemo)(() => e && t ? [...e, t].filter(s.hD).reduce((e, t) => e + t.globalRestakedPoints, 0) : null, [e, t]), u = (0, r.useMemo)(() => null === c || null === d ? null : d / c * 100, [c, d]);
                return {
                    userTotalRestakedInETH: null != i ? i : 0,
                    isRestaked: o,
                    restakedPoints: null != d ? d : 0,
                    restakedRatio: null != u ? u : 0,
                    isLoading: a,
                    isSuccess: null !== c && null !== d && null !== i
                }
            }
        },
        14714: function(e, t, a) {
            "use strict";
            a.d(t, {
                O: function() {
                    return n
                },
                X: function() {
                    return r
                }
            });
            let r = e => e ? "".concat(e.slice(0, 6), "...").concat(e.slice(-4)) : "",
                n = {
                    rETH: {
                        borderColor: "rgb(248,202,116)",
                        backgroundColor: "rgb(238,118,83)"
                    },
                    ETH: {
                        borderColor: "rgb(243,169,254)",
                        backgroundColor: "rgb(157,111,174)"
                    },
                    stETH: {
                        borderColor: "rgb(55,154,250)",
                        backgroundColor: "rgb(135,194,252)"
                    },
                    cbETH: {
                        borderColor: "rgb(0,83,248)",
                        backgroundColor: "rgb(94,144,250)"
                    }
                }
        },
        78563: function(e, t, a) {
            "use strict";
            a.d(t, {
                x: function() {
                    return l
                }
            });
            var r = a(70524),
                n = a(52842);
            let l = (e, t) => {
                let a = {};
                return [...r.stakeConfig.stakingTokenList, r.stakeConfig.nativeToken].forEach(r => {
                    var l;
                    let {
                        strategyAddress: s,
                        symbol: i,
                        decimals: o
                    } = r, d = e ? (null === (l = Object.entries(e).find(e => {
                        let [t] = e;
                        return (null == t ? void 0 : t.toUpperCase()) === (null == s ? void 0 : s.toUpperCase())
                    })) || void 0 === l ? void 0 : l[1]) || 0 n : void 0, c = null == t ? void 0 : t.find(e => {
                        var t;
                        return (null === (t = e.strategy) || void 0 === t ? void 0 : t.toUpperCase()) === (null == s ? void 0 : s.toUpperCase())
                    });
                    if ("ETH" === i && void 0 !== d) {
                        a[i] = Number((0, n.b)(d, o));
                        return
                    }
                    if (!d || !c) {
                        a[i] = 0;
                        return
                    }
                    a[i] = Number((0, n.b)(d, o)) * Number((0, n.b)(c.sharesToUnderlying, o))
                }), a
            }
        },
        64564: function(e, t, a) {
            "use strict";
            var r = a(97016);
            let n = r.forwardRef(function(e, t) {
                let {
                    title: a,
                    titleId: n,
                    ...l
                } = e;
                return r.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    "data-slot": "icon",
                    ref: t,
                    "aria-labelledby": n
                }, l), a ? r.createElement("title", {
                    id: n
                }, a) : null, r.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                }))
            });
            t.Z = n
        }
    },
    function(e) {
        e.O(0, [6299, 1482, 5129, 7915, 6604, 6072, 3743, 1704, 7542, 5213, 7051, 2597, 4473, 1744], function() {
            return e(e.s = 86854)
        }), _N_E = e.O()
    }
]);