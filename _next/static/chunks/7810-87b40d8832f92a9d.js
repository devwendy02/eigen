"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7810], {
        25450: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return n
                }
            });
            var s = r(3994),
                a = r(13743);

            function n(e) {
                let {
                    tvlPercent: t,
                    textIntent: r = "ShortTextM"
                } = e;
                return (0, s.jsx)(a.u, {
                    asChild: !0,
                    side: "left",
                    contentClassName: "bg-purple-800 rounded-lg shadow-2xl p-4",
                    displayArrow: !1,
                    alignOffset: -10,
                    sideOffset: 5,
                    trigger: (0, s.jsx)(a.xv, {
                        intent: r,
                        className: "uppercase text-quarternaryFg",
                        children: (0, s.jsx)(a.e3, {
                            value: Math.min(100 * t, 100),
                            format: "percentage",
                            decimals: 2
                        })
                    }),
                    content: (0, s.jsx)("div", {
                        className: "w-56 flex flex-col gap-2 first:shrink",
                        children: (0, s.jsx)(a.xv, {
                            intent: "ShortTextXS",
                            className: "text-primaryFg",
                            children: "Restake Concentration measures how much of an AVS network's restake is delegated to a single operator. High numbers mean less distribution. To support network diversity, consider operators with lower Restake Concentration."
                        })
                    })
                })
            }
        },
        36721: function(e, t, r) {
            r.d(t, {
                M: function() {
                    return j
                },
                Z: function() {
                    return T
                }
            });
            var s = r(3994),
                a = r(97016),
                n = r(13743),
                l = r(54441),
                o = r(24538),
                i = r.n(o),
                c = r(61389),
                d = r(46010),
                u = r(37962),
                x = r(64858),
                p = r(95213),
                h = r(65722),
                m = r(99279),
                g = r(25450),
                f = r(1129);
            let v = h.env.NEXT_PUBLIC_MIN_OPERATOR_TVL || "0",
                b = "grid w-full grid-cols-1 gap-4 mb-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3",
                j = h.env.NEXT_PUBLIC_RESTAKE_DISPLAY.display_order.filter(e => !["lst", "native"].includes(e));

            function T(e) {
                let {
                    operators: t,
                    isOperatorsLoading: r,
                    delegatedTvlTotal: o = {
                        totalTVL: 0,
                        eigenTVL: 0
                    }
                } = e, [j, T] = (0, a.useState)(""), {
                    data: N
                } = (0, p.O4)(), S = (0, a.useRef)([]), [y, w] = (0, f._)("OPERATOR_TABLE_SORT_KEY", c.o.stakersDesc), [k, C] = (0, f._)("el-min-operator-tvl", v), E = Number(null != k ? k : 0), A = (0, a.useMemo)(() => {
                    if (r) return [];
                    if (y === c.o.random && !r && t.length && S.current.length === t.length) {
                        let e = new Set(t.map(e => {
                            let {
                                address: t
                            } = e;
                            return t
                        }));
                        if (S.current.every(t => {
                                let {
                                    address: r
                                } = t;
                                return e.has(r)
                            })) return S.current.filter(e => e.totalTVL > E)
                    }
                    let e = t.sort((e, t) => {
                        var r, s;
                        if ((null == N ? void 0 : N.toUpperCase()) === (null == e ? void 0 : null === (r = e.address) || void 0 === r ? void 0 : r.toUpperCase())) return -Number.MAX_SAFE_INTEGER;
                        if ((null == N ? void 0 : N.toUpperCase()) === (null == t ? void 0 : null === (s = t.address) || void 0 === s ? void 0 : s.toUpperCase())) return Number.MAX_SAFE_INTEGER;
                        switch (y) {
                            case c.o.tvlAsc:
                                return e.totalTVL - t.totalTVL;
                            case c.o.tvlDesc:
                                return t.totalTVL - e.totalTVL;
                            case c.o.eigenTvlAsc:
                                return e.eigenTVL - t.eigenTVL;
                            case c.o.eigenTvlDesc:
                                return t.eigenTVL - e.eigenTVL;
                            case c.o.stakersAsc:
                                return e.numStakers - t.numStakers;
                            case c.o.stakersDesc:
                                return t.numStakers - e.numStakers;
                            case c.o.random:
                                return Math.random() - .5;
                            default:
                                return 0
                        }
                    }).filter(e => e.totalTVL >= E);
                    return y !== c.o.random || r || (S.current = e), e
                }, [t, y, E, N, r]), L = (0, a.useMemo)(() => {
                    let e = new(i())(A, {
                        keys: ["name", "address", "website"],
                        threshold: .3
                    });
                    return j ? e.search(j).map(e => e.item) : A
                }, [A, j]), [V, _] = (0, a.useState)(0), F = L.slice(12 * V, 12 * V + 12), D = (0, a.useCallback)(e => {
                    let {
                        totalTVL: t,
                        eigenTVL: r
                    } = e;
                    return Math.max(o.eigenTVL ? r / o.eigenTVL : 0, o.totalTVL ? t / o.totalTVL : 0)
                }, [o]);
                return (0, s.jsxs)("div", {
                    className: "flex flex-col items-center w-full",
                    children: [(0, s.jsxs)("div", {
                        className: "grid w-full grid-cols-1 gap-1 mb-2 sm:mb-4 sm:gap-4 sm:grid-cols-2",
                        children: [(0, s.jsx)(n.oi, {
                            search: !0,
                            value: j,
                            onChange: T,
                            placeholder: "Search by address/name/website",
                            containerClassName: "w-full",
                            size: n.dr.SM,
                            dataCypress: "operatorSearch"
                        }), (0, s.jsx)("div", {
                            className: "flex justify-between w-full sm:justify-end",
                            children: (0, s.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center w-full gap-2 px-3 py-2 border-transparent rounded outline-none cursor-pointer text-ShortTextS bg-inputBg border-1",
                                    children: [(0, s.jsx)(x.fC, {
                                        className: "relative w-10 h-5 shadow-md bg-purple-700 border-purple-700 data-[state='checked']:bg-purple-400 rounded-full focus:outline-none ring-2 ring-purple-700 data-[state='checked']:ring-purple-400 duration-100",
                                        id: "hide-inactive-operators",
                                        checked: 0 !== E,
                                        onCheckedChange: e => {
                                            C(e ? "0.0000000001" : "0")
                                        },
                                        children: (0, s.jsx)(x.bU, {
                                            className: "bg-neutral-400 rounded-full h-[18px] w-[18px] block shadow-md data-[state='checked']:translate-x-[14px] data-[state='checked']:bg-white"
                                        })
                                    }), (0, s.jsx)("label", {
                                        className: "w-full truncate cursor-pointer text-ShortTextS text-tertiaryFg",
                                        htmlFor: "hide-inactive-operators",
                                        children: "Hide inactive operators"
                                    })]
                                }), (0, s.jsx)(c.Z, {
                                    selected: y,
                                    setSelected: e => {
                                        _(0), w(e)
                                    },
                                    items: [c.o.eigenTvlAsc, c.o.eigenTvlDesc, c.o.tvlAsc, c.o.tvlDesc, c.o.stakersAsc, c.o.stakersDesc, c.o.random]
                                })]
                            })
                        })]
                    }), r ? (0, s.jsx)("div", {
                        className: b,
                        children: Array.from({
                            length: 6
                        }).map((e, t) => (0, s.jsx)(u.Z, {}, t))
                    }) : L.length > 0 ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: b,
                            children: F.map(e => (0, s.jsx)(d.Z, {
                                path: "/operator/".concat(e.address),
                                name: e.name,
                                address: e.address,
                                description: e.description,
                                website: e.website,
                                logo: e.logo,
                                dataCypress: "operatorCard",
                                stats: (0, s.jsxs)("div", {
                                    className: "flex flex-col [&>*]:border-t [&>*]:py-2 [&>*]:border-t-disabledFg last:border-b last:border-b-disabledFg",
                                    children: [h.env.NEXT_PUBLIC_CENTRALIZED_RISK_TOGGLE && (0, s.jsxs)("div", {
                                        className: "flex flex-row items-center gap-1 justify-between",
                                        children: [(0, s.jsxs)(n.xv, {
                                            intent: "ShortTextS",
                                            className: "uppercase text-quarternaryFg flex gap-1 items-center",
                                            children: ["Restake concentration", (0, s.jsx)(n.u, {
                                                side: "left",
                                                contentClassName: "bg-purple-800 rounded-lg shadow-2xl p-4",
                                                displayArrow: !1,
                                                alignOffset: -10,
                                                sideOffset: 5,
                                                trigger: (0, s.jsx)(l.Z, {
                                                    className: "w-4 h-4 text-quarternaryFg"
                                                }),
                                                content: (0, s.jsx)("div", {
                                                    className: "w-56 flex flex-col gap-2 first:shrink",
                                                    children: (0, s.jsx)(n.xv, {
                                                        intent: "ShortTextXS",
                                                        className: "text-primaryFg",
                                                        children: "Restake Concentration measures how much of an AVS network's restake is delegated to a single operator. High numbers mean less distribution. To support network diversity, consider operators with lower Restake Concentration."
                                                    })
                                                })
                                            })]
                                        }), (0, s.jsx)(g.Z, {
                                            textIntent: "ShortTextS",
                                            tvlPercent: D({ ...e
                                            })
                                        })]
                                    }), (0, s.jsx)(m.q, {
                                        tvlByGroup: e.tvlByGroup
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-row items-center justify-between",
                                        children: [(0, s.jsx)(n.xv, {
                                            intent: "ShortTextS",
                                            className: "uppercase text-quarternaryFg",
                                            children: "Total Num. Stakers"
                                        }), (0, s.jsx)(n.xv, {
                                            intent: "ShortTextS",
                                            dataCypress: "operatorCardNumStakers",
                                            children: e.numStakers.toLocaleString("en-US")
                                        })]
                                    })]
                                }),
                                tag: (0, s.jsx)("div", {
                                    className: "flex items-center gap-1 ml-auto",
                                    children: e.address.toUpperCase() === (null == N ? void 0 : N.toUpperCase()) && (0, s.jsx)(n.u, {
                                        asChild: !0,
                                        trigger: (0, s.jsx)(n.Vp, {
                                            color: "green",
                                            className: "ml-auto truncate",
                                            children: (0, s.jsx)(n.xv, {
                                                intent: "ShortTextXS",
                                                className: "truncate",
                                                dataCypress: "operatorDelegatedTag",
                                                children: "Delegated"
                                            })
                                        }),
                                        content: "Your stake is delegated to this operator"
                                    })
                                })
                            }, e.address))
                        }), (0, s.jsx)(n.tl, {
                            totalPages: Math.ceil(L.length / 12),
                            pageIndex: V,
                            onPageChange: e => {
                                _(e)
                            },
                            truncate: !0
                        })]
                    }) : (0, s.jsx)(n.xv, {
                        children: "No operators found. Try a different search term"
                    })]
                })
            }
        },
        46010: function(e, t, r) {
            var s = r(3994),
                a = r(13743),
                n = r(74253),
                l = r(14714),
                o = r(73207);
            t.Z = e => {
                let {
                    path: t,
                    name: r,
                    address: i,
                    logo: c,
                    tag: d,
                    description: u,
                    stats: x,
                    footer: p,
                    dataCypress: h
                } = e;
                return (0, s.jsxs)(n.default, {
                    className: "flex flex-col rounded-lg p-6 gap-6 h-full min-[320px] bg-secondaryBg hover:bg-interactiveQuarternaryHover cursor-pointer",
                    "data-cypress": h,
                    href: t,
                    children: [(0, s.jsxs)("div", {
                        className: "flex items-center gap-4",
                        children: [(0, s.jsx)("img", {
                            src: c || "/tokenIcon/beaconChainETH.svg",
                            onError: e => {
                                e.currentTarget.src = "/tokenIcon/beaconChainETH.svg"
                            },
                            height: 48,
                            width: 48,
                            alt: "operator logo",
                            className: "object-contain w-12 h-12 rounded"
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col truncate",
                            children: [(0, s.jsx)(a.xv, {
                                intent: "Heading3",
                                className: "hover:underline",
                                children: r || (0, l.X)(i)
                            }), (0, s.jsx)(a.xv, {
                                intent: "ShortTextXS",
                                className: "cursor-pointer text-tertiaryFg hover:underline",
                                children: (0, l.X)(i)
                            })]
                        }), d]
                    }), (0, s.jsx)("div", {
                        className: "py-4 border-t border-accentGreen",
                        children: (0, s.jsx)(a.xv, {
                            intent: "TextS",
                            className: "h-16 text-tertiaryFg line-clamp-3",
                            children: (0, s.jsx)(o.Z, {
                                text: u
                            })
                        })
                    }), (0, s.jsx)("div", {
                        className: "mt-auto text-tertiaryFg",
                        children: x
                    }), p]
                }, r)
            }
        },
        37962: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return n
                }
            });
            var s = r(3994),
                a = r(13743);

            function n() {
                return (0, s.jsxs)("div", {
                    className: "flex flex-col rounded-lg p-7 h-72 bg-secondaryBg",
                    children: [(0, s.jsx)("div", {
                        className: "flex items-center justify-between gap-2 pb-4 mb-4 border-b border-whiteOpacity-8",
                        children: (0, s.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0, s.jsx)(a.yg, {
                                className: "rounded h-[48px] w-[48px]"
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col pl-2 gap-0.5",
                                children: [(0, s.jsx)(a.yg, {
                                    intent: "TextM",
                                    className: "w-32"
                                }), (0, s.jsx)(a.yg, {
                                    intent: "ShortTextXS",
                                    className: "w-16"
                                })]
                            })]
                        })
                    }), (0, s.jsx)(a.yg, {
                        className: "h-16 mb-4"
                    }), (0, s.jsxs)("div", {
                        className: "grid grid-cols-2 gap-4 mt-auto mb-4 text-tertiaryFg",
                        children: [(0, s.jsxs)("div", {
                            className: "relative flex flex-col",
                            children: [(0, s.jsx)(a.yg, {
                                intent: "TextXS",
                                className: "w-16 mb-1"
                            }), (0, s.jsx)(a.yg, {
                                intent: "ShortTextXS"
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "relative flex flex-col",
                            children: [(0, s.jsx)(a.yg, {
                                intent: "TextXS",
                                className: "w-16 mb-1"
                            }), (0, s.jsx)(a.yg, {
                                intent: "ShortTextXS"
                            })]
                        })]
                    })]
                })
            }
        },
        61389: function(e, t, r) {
            r.d(t, {
                o: function() {
                    return a
                }
            });
            var s, a, n = r(3994),
                l = r(97016),
                o = r(13743),
                i = r(6482),
                c = r(8795);
            (s = a || (a = {})).tvlAsc = "TVL Asc.", s.tvlDesc = "TVL Desc.", s.eigenTvlAsc = "Eigen TVL Asc.", s.eigenTvlDesc = "Eigen TVL Desc.", s.stakersAsc = "Num Stakers Asc.", s.stakersDesc = "Num Stakers Desc.", s.alphaAsc = "Alphabetical Asc.", s.alphaDesc = "Alphabetical Desc.", s.random = "Random", s.operatorsAsc = "Num Operators Asc.", s.operatorsDesc = "Num Operators Desc.", t.Z = function(e) {
                let {
                    selected: t,
                    setSelected: r,
                    items: s
                } = e, [a, d] = (0, l.useState)(!1);
                return (0, n.jsxs)(i.fC, {
                    open: a,
                    onOpenChange: e => {
                        d(e)
                    },
                    children: [(0, n.jsx)(i.xz, {
                        className: "flex justify-end w-full outline-none",
                        children: (0, n.jsx)(o.oi, {
                            value: "Sort by: ".concat(t),
                            containerClassName: "w-full max-w-auto sm:max-w-[225px] cursor-pointer outline-none",
                            inputClassName: "cursor-pointer outline-none text-ShortTextS text-tertiaryFg",
                            size: o.dr.SM,
                            icon: (0, n.jsx)(c.Z, {
                                className: "h-3.5 w-3.5"
                            }),
                            iconAtEnd: !0,
                            readOnly: !0,
                            dataCypress: "sortTrigger"
                        })
                    }), (0, n.jsx)(i.VY, {
                        align: "end",
                        sideOffset: 1,
                        children: (0, n.jsx)("div", {
                            className: "w-full border bg-tertiaryBg border-borderBounds",
                            children: s.map(e => (0, n.jsx)("div", {
                                className: "px-4 cursor-pointer hover:bg-quarternaryBg",
                                onClick: () => {
                                    r(e), d(!1)
                                },
                                "data-cypress": "sortOption-".concat(e),
                                children: (0, n.jsx)(o.xv, {
                                    intent: "ShortTextS",
                                    children: e
                                })
                            }, e))
                        })
                    })]
                })
            }
        },
        99279: function(e, t, r) {
            r.d(t, {
                q: function() {
                    return i
                }
            });
            var s = r(3994),
                a = r(13743),
                n = r(16036),
                l = r.n(n),
                o = r(36721);
            let i = e => {
                let {
                    tvlByGroup: t
                } = e;
                if (!t) return null;
                let {
                    native: r,
                    lst: n,
                    ...i
                } = t, c = l()(n, "ethValue") + l()(r, "ethValue");
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        className: "flex flex-row items-center justify-between gap-2",
                        children: [(0, s.jsx)(a.xv, {
                            intent: "ShortTextS",
                            className: "text-quarternaryFg uppercase",
                            children: "ETH RESTAKED"
                        }), (0, s.jsx)(a.xv, {
                            intent: "ShortTextS",
                            className: "".concat(!c && "text-disabledFg", " ml-auto"),
                            dataCypress: "operatorCardTVL",
                            children: (0, s.jsx)(a.e3, {
                                value: c,
                                format: "tokenAmount",
                                decimals: 2
                            })
                        }), (0, s.jsx)(a.xv, {
                            intent: "ShortTextS",
                            className: "text-quarternaryFg bg-accentOpacity-16 rounded-md px-1 uppercase w-14 text-center",
                            children: "ETH"
                        })]
                    }), o.M.map(e => {
                        let t = l()(i[e], "tvl");
                        return t ? (0, s.jsxs)("div", {
                            className: "flex flex-row items-center gap-2",
                            children: [(0, s.jsxs)(a.xv, {
                                intent: "ShortTextS",
                                className: "text-quarternaryFg uppercase",
                                children: [e, " RESTAKED"]
                            }), (0, s.jsx)(a.xv, {
                                intent: "ShortTextS",
                                dataCypress: "operatorCardTVL",
                                className: "ml-auto",
                                children: (0, s.jsx)(a.e3, {
                                    value: t,
                                    format: "tokenAmount",
                                    decimals: 2
                                })
                            }), (0, s.jsx)(a.xv, {
                                intent: "ShortTextS",
                                className: "text-quarternaryFg bg-accentOpacity-16 rounded-md px-1 uppercase w-16 text-center",
                                children: e
                            })]
                        }, e) : null
                    })]
                })
            }
        },
        73207: function(e, t, r) {
            var s = r(3994);
            t.Z = e => {
                let {
                    text: t
                } = e;
                if (!t) return null;
                let r = /https?:\/\/[\w.-]+(?::[0-9]+)?(?:[^\s]*[^\s.])?/g,
                    a = t.split(r),
                    n = t.match(r) || [],
                    l = [];
                return a.forEach((e, t) => {
                    l.push(e), t < n.length && l.push((0, s.jsx)("a", {
                        href: n[t],
                        target: "_blank",
                        rel: "noreferrer",
                        className: "underline break-words text-accentPurple hover:text-accentPurpleLight",
                        onClick: e => e.stopPropagation(),
                        children: n[t]
                    }, t))
                }), (0, s.jsx)(s.Fragment, {
                    children: l
                })
            }
        },
        14714: function(e, t, r) {
            r.d(t, {
                O: function() {
                    return a
                },
                X: function() {
                    return s
                }
            });
            let s = e => e ? "".concat(e.slice(0, 6), "...").concat(e.slice(-4)) : "",
                a = {
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
        78563: function(e, t, r) {
            r.d(t, {
                x: function() {
                    return n
                }
            });
            var s = r(70524),
                a = r(52842);
            let n = (e, t) => {
                let r = {};
                return [...s.stakeConfig.stakingTokenList, s.stakeConfig.nativeToken].forEach(s => {
                    var n;
                    let {
                        strategyAddress: l,
                        symbol: o,
                        decimals: i
                    } = s, c = e ? (null === (n = Object.entries(e).find(e => {
                        let [t] = e;
                        return (null == t ? void 0 : t.toUpperCase()) === (null == l ? void 0 : l.toUpperCase())
                    })) || void 0 === n ? void 0 : n[1]) || 0 n : void 0, d = null == t ? void 0 : t.find(e => {
                        var t;
                        return (null === (t = e.strategy) || void 0 === t ? void 0 : t.toUpperCase()) === (null == l ? void 0 : l.toUpperCase())
                    });
                    if ("ETH" === o && void 0 !== c) {
                        r[o] = Number((0, a.b)(c, i));
                        return
                    }
                    if (!c || !d) {
                        r[o] = 0;
                        return
                    }
                    r[o] = Number((0, a.b)(c, i)) * Number((0, a.b)(d.sharesToUnderlying, i))
                }), r
            }
        }
    }
]);