(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7542], {
        34573: function() {},
        39362: function() {},
        86585: function() {},
        15325: function() {},
        22810: function() {},
        12076: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = n(17358),
                s = n(2659),
                i = n(66177),
                r = n(65722),
                u = e => i.h.access.getAccess.useQuery({
                    address: e
                }, {
                    staleTime: 36e5,
                    cacheTime: 36e5,
                    enabled: !!e && !!r.env.NEXT_PUBLIC_SANCTIONS_ON,
                    trpc: {
                        context: {
                            skipBatch: !0
                        }
                    }
                }),
                o = () => {
                    var e;
                    let t = (0, a.mA)(),
                        n = null === (e = (0, s.useSearchParams)()) || void 0 === e ? void 0 : e.get("impersonate"),
                        i = n || (null == t ? void 0 : t.address),
                        r = !!n,
                        o = !!i,
                        d = u(i),
                        p = u(n),
                        y = "deny" === d.data || "deny" === p.data,
                        l = "restrict" === d.data || "restrict" === p.data;
                    return { ...t,
                        isImpersonating: r,
                        address: y ? void 0 : i,
                        connectedWalletAddress: y ? void 0 : null == t ? void 0 : t.address,
                        isConnected: o,
                        addressAccess: d,
                        isAddressRestricted: l
                    }
                }
        },
        8058: function(e, t, n) {
            "use strict";
            var a = n(70524),
                s = n(94623),
                i = n(54290),
                r = n(77400),
                u = n(56109);
            t.Z = (e, t) => (0, u.a)({
                queryKey: ["getSharesToUnderlyingFactor"],
                queryFn: async () => {
                    let e = a.stakeConfig.stakingTokenList.filter(e => {
                            let {
                                strategyAddress: t
                            } = e;
                            return t !== r.r_
                        }),
                        t = e.map(e => {
                            let {
                                strategyAddress: t
                            } = e;
                            return {
                                address: t,
                                abi: i.Z,
                                functionName: "sharesToUnderlyingView",
                                args: [0xde0b6b3a7640000 n]
                            }
                        }),
                        n = await (0, s.JH)({
                            contracts: t,
                            allowFailure: !1
                        }).then(t => t.map((t, n) => ({
                            strategy: e[n].strategyAddress,
                            sharesToUnderlying: t
                        })));
                    return a.stakeConfig.stakingTokenList.some(e => e.strategyAddress === r.r_) && n.push({
                        strategy: r.r_,
                        sharesToUnderlying: 0xde0b6b3a7640000 n
                    }), n.length > 0 ? n : []
                },
                staleTime: 3e5,
                cacheTime: 3e5,
                select: e,
                ...t
            })
        },
        75541: function(e, t, n) {
            "use strict";
            n.d(t, {
                RD: function() {
                    return M
                },
                _6: function() {
                    return k
                },
                rU: function() {
                    return P
                }
            });
            var a = n(97016),
                s = n(17358),
                i = n(12076),
                r = n(94623),
                u = n(54290),
                o = n(38875),
                d = n(70524),
                p = n(77400);
            let y = async e => {
                    try {
                        let t = await (0, r.a4)({
                            address: d.stakeConfig.delegationManagerAddress,
                            abi: o.Z,
                            functionName: "getDelegatableShares",
                            args: [e]
                        });
                        return {
                            shares: t[1],
                            strategies: t[0]
                        }
                    } catch (e) {
                        throw Error("Failed to fetch currentRestaked")
                    }
                },
                l = async () => {
                    try {
                        return Promise.all(d.stakeConfig.stakingTokenList.map(e => e.strategyAddress === p.r_ ? {
                            strategy: e.strategyAddress,
                            tvl: 0 n
                        } : (0, r.a4)({
                            address: e.strategyAddress,
                            abi: u.Z,
                            functionName: "totalShares"
                        }).then(t => ({
                            strategy: e.strategyAddress,
                            tvl: t
                        }))))
                    } catch (e) {
                        throw Error("Failed to fetch strategyDeposits")
                    }
                };
            var c = n(52842);
            let m = e => "tokenSharesStrats" in e && "strategyRewardsData" in e && "tokenTVL" in e;
            class f {
                setDeposits(e, t) {
                    return this.deposited = {
                        shares: t,
                        underlying: this.setUnderlying(e, t)
                    }, this.deposited
                }
                setUnderlying(e, t) {
                    let n = e.find(e => e.strategy.toLowerCase() === this.strategyAddress.toLowerCase());
                    return n ? t * n.sharesToUnderlying / p.Cj : t
                }
                setRestakedStats(e, t) {
                    this.restakedPoints = Number((0, c.b)(e, this.decimals)) / 3600, this.globalRestakedPoints = Number((0, c.b)(t, this.decimals)) / 3600
                }
                setTVL(e, t) {
                    let n = this.setUnderlying(t, e);
                    this.tvl = Number((0, c.b)(n, this.decimals))
                }
                setNativeTVL(e) {
                    this.tvl = Number((0, c.b)(e, this.decimals))
                }
                setUSD(e) {
                    this.usd = e
                }
                initializeNativeToken(e) {
                    let {
                        price: t,
                        sharesToUnderlyings: n,
                        userAddress: a,
                        userPodSummary: s,
                        globalPodSummary: i,
                        podOwnerShares: r
                    } = e;
                    a && (this.setDeposits(n, r), this.restakedPoints = s.restakingPoints / 3600, this.globalRestakedPoints = Number(i.points) / 3600), this.setNativeTVL(BigInt(i.balance)), this.setUSD(t), this.ethValue = 1
                }
                initialize(e) {
                    let {
                        price: t = 0,
                        ethValue: n,
                        sharesToUnderlyings: a,
                        userAddress: s,
                        tokenSharesStrats: i,
                        strategyRewardsData: r,
                        tokenTVL: u
                    } = e;
                    if (s) {
                        let e = i.strategies.findIndex(e => e.toLowerCase() === this.strategyAddress.toLowerCase()),
                            t = i.shares[e] || 0 n,
                            n = (Array.isArray(r) ? r : []).find(e => e.strategyAddress === this.strategyAddress.toLowerCase()),
                            s = 0 n,
                            u = 0 n;
                        n && (s = n.integratedShares, u = n.totalIntegratedShares), this.setDeposits(a, t), this.setRestakedStats(s, u)
                    }
                    this.setTVL(u, a), this.setUSD(t), this.ethValue = n
                }
                constructor(e, t) {
                    this.balance = 0 n, this.deposited = {
                        shares: 0 n,
                        underlying: 0 n
                    }, this.tvl = 0, this.usd = 0, this.restakedPoints = 0, this.globalRestakedPoints = 0, this.address = e.address, this.icon = e.icon, this.strategyAddress = e.strategyAddress, this.name = e.name, this.symbol = e.symbol, this.decimals = e.decimals, this.rebasing = e.rebasing, this.apiID = e.apiID, this.about = e.about, this.group = e.group, m(t) ? this.initialize(t) : this.initializeNativeToken(t)
                }
            }
            var g = n(56109),
                h = n(66177),
                T = n(59575),
                b = n(8058),
                w = n(17225),
                v = n(15294);
            let S = (e, t) => e ? e.find(e => e.strategy === t) : void 0,
                k = e => {
                    let {
                        liquidRestakingTokens: t,
                        nativeRestakingToken: n,
                        isLiquidTokensLoading: s,
                        isNativeTokenLoading: i
                    } = P();
                    return {
                        total: (0, a.useMemo)(() => n ? [...t, n].filter(w.hD).reduce((t, n) => {
                            var a;
                            return t + n.ethValue * (null !== (a = e[n.symbol]) && void 0 !== a ? a : 0)
                        }, 0) : 0, [n, t, e]),
                        totalByGroup: (0, a.useMemo)(() => n ? t.filter(w.hD).reduce((t, n) => {
                            var a, s;
                            let i = null !== (a = n.group) && void 0 !== a ? a : "lst";
                            return void 0 === t[i] && (t[i] = 0), t[i] = t[i] + n.ethValue * (null !== (s = e[n.symbol]) && void 0 !== s ? s : 0), t
                        }, {}) : 0, [n, t, e]),
                        isLoading: i || s
                    }
                },
                M = () => {
                    let {
                        address: e
                    } = (0, i.Z)();
                    return (0, g.a)({
                        queryKey: ["tokenSharesStrats", e],
                        queryFn: async () => e ? await y(e) : void 0,
                        staleTime: 6e3,
                        refetchOnWindowFocus: !0,
                        enabled: !!e
                    })
                },
                P = () => {
                    var e;
                    let {
                        address: t
                    } = (0, i.Z)(), [n, r] = (0, a.useState)([]), [u, o] = (0, a.useState)(!0), [p, y] = (0, a.useState)(!1), [c, m] = (0, a.useState)(), [w, k] = (0, a.useState)(!0), [P, x] = (0, a.useState)(!1), [C, I] = (0, a.useState)(null), O = window.location.pathname, R = (0, s.do)({
                        address: d.stakeConfig.eigenPodManagerAddress,
                        abi: v.Z,
                        functionName: "hasPod",
                        args: t && [t],
                        enabled: !!t
                    }), A = null !== (e = (0, s.do)({
                        address: d.stakeConfig.eigenPodManagerAddress,
                        abi: v.Z,
                        functionName: "podOwnerShares",
                        args: t && [t],
                        enabled: !!t && !0 === R.data,
                        watch: !0
                    }).data) && void 0 !== e ? e : 0 n, D = M(), L = (0, b.Z)(), U = d.stakeConfig.stakingTokenList.filter(e => "lst" === e.group).some(e => e.symbol === (0, T.p)(O)), B = h.h.native.userPodSummary.useQuery({
                        address: t ? t.toLowerCase() : ""
                    }, {
                        enabled: !0 === R.data && !U,
                        initialData: {
                            summary: {
                                eigenPodAddress: void 0,
                                inPodNotRestaked: 0 n,
                                inPodRestaked: 0 n,
                                onBeaconChainUnproven: 0 n,
                                onBeaconChainRestaked: 0 n,
                                restakingPoints: 0,
                                inPodUnproven: 0 n,
                                onBeaconChainNotRestaked: 0 n,
                                latestValidatorActivationTimestamp: 0 n
                            }
                        }
                    }), _ = h.h.price.getPrices.useQuery(void 0, {
                        staleTime: 6e4,
                        refetchOnWindowFocus: !1
                    }), N = (0, g.a)({
                        queryKey: ["tokenTVLs"],
                        queryFn: async () => await l(),
                        staleTime: 12500,
                        refetchOnWindowFocus: !1
                    }), E = h.h.tokenStaking.getRestakingPoints.useQuery({
                        staker: t ? t.toLowerCase() : ""
                    }, {
                        enabled: !!t,
                        staleTime: 6e4,
                        cacheTime: 6e4,
                        refetchOnWindowFocus: !1
                    }), V = h.h.native.globalPodSummary.useQuery({}, {
                        staleTime: 12500,
                        refetchOnWindowFocus: !1
                    }), H = (0, a.useMemo)(() => {
                        if (!t && L.isSuccess && _.isSuccess && N.isSuccess || t && L.isSuccess && _.isSuccess && N.isSuccess && D.isSuccess && E.isSuccess) return d.stakeConfig.stakingTokenList.map(e => {
                            var n;
                            let a = S(N.data, e.strategyAddress);
                            return new f(e, {
                                price: e.apiID ? _.data.tokenPrices[e.apiID].usd : 0,
                                ethValue: e.apiID ? _.data.tokenPrices[e.apiID].eth : 0,
                                sharesToUnderlyings: L.data,
                                userAddress: t,
                                tokenSharesStrats: D.data,
                                strategyRewardsData: E.data,
                                tokenTVL: null !== (n = null == a ? void 0 : a.tvl) && void 0 !== n ? n : 0 n
                            })
                        })
                    }, [t, L.isSuccess, L.data, _.isSuccess, _.data, N.isSuccess, N.data, D.isSuccess, D.data, E.isSuccess, E.data]), Z = (0, a.useMemo)(() => {
                        if (L.isSuccess && _.isSuccess && B.isSuccess && V.isSuccess) return new f(d.stakeConfig.nativeToken, {
                            price: _.data.tokenPrices.ethereum.usd,
                            sharesToUnderlyings: L.data,
                            userAddress: t,
                            userPodSummary: B.data.summary,
                            globalPodSummary: V.data.summary,
                            podOwnerShares: A
                        })
                    }, [L.isSuccess, L.data, _.isSuccess, _.data, B.isSuccess, B.data, V.isSuccess, V.data, t, A]);
                    return (0, a.useEffect)(() => {
                        if (H) {
                            r(H), o(!1), y(!0);
                            let e = (0, T.p)(O);
                            I(H.find(t => t.symbol === e) || null)
                        } else o(!0), y(!1)
                    }, [H, O]), (0, a.useEffect)(() => {
                        Z ? (m(Z), k(!1), x(!0)) : (k(!0), x(!1))
                    }, [Z]), {
                        liquidRestakingTokens: n,
                        isLiquidTokensSuccess: p,
                        isLiquidTokensLoading: u,
                        nativeRestakingToken: c,
                        isNativeTokenSuccess: P,
                        isNativeTokenLoading: w,
                        podSummary: B,
                        displayToken: C,
                        priceData: _,
                        isLoading: u || w || B.isLoading || _.isLoading || N.isLoading || V.isLoading
                    }
                }
        },
        77400: function(e, t, n) {
            "use strict";
            n.d(t, {
                Cj: function() {
                    return i
                },
                j5: function() {
                    return s
                },
                r_: function() {
                    return a
                }
            });
            let a = "0x0000000000000000000000000000000000000000",
                s = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff n,
                i = 0xde0b6b3a7640000 n
        },
        17225: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z1: function() {
                    return u
                },
                af: function() {
                    return r
                },
                hD: function() {
                    return o
                }
            }), n(39917), n(43607), n(17232), n(81705);
            var a = n(47024),
                s = n(73496).Buffer;
            let i = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return t && 64 !== e.length && (e = s.from((0, a.keccak256)(e).subarray(-20))), (0, a.keccak256)(e).subarray(-20)
            };

            function r(e, t, n) {
                let r = function(e) {
                    let t = s.from(e, "utf8"),
                        n = s.from("\x19Ethereum Signed Message:\n".concat(e.length));
                    return (0, a.keccak256)(s.concat([n, t]))
                }(t);
                if (!e || 42 !== e.length) return console.log("Invalid address"), {
                    pubKeyHex: e,
                    messageHash: "0x".concat(r.toString("hex"))
                };
                let u = (0, a.toBuffer)(n);
                if (!u || 65 !== u.length) return console.log("Invalid signature length"), {
                    pubKeyHex: e,
                    messageHash: "0x".concat(r.toString("hex"))
                };
                let o = u[64];
                if (27 !== o && 28 !== o && 0 !== o && 1 !== o) return console.log("Invalid signature recovery id: ".concat(o)), {
                    pubKeyHex: e,
                    messageHash: "0x".concat(r.toString("hex"))
                };
                0 !== o && 1 !== o && (u[64] -= 27);
                let d = (0, a.ecrecover)(r, o, u.subarray(0, 32), u.subarray(32, 64)),
                    p = d.toString("hex");
                return "0x".concat(i(d).toString("hex")) !== e.toLowerCase() ? (console.log("Invalid signature"), {
                    pubKeyHex: e,
                    messageHash: "0x".concat(r.toString("hex"))
                }) : {
                    pubKeyHex: "0x".concat(p),
                    messageHash: "0x".concat(r.toString("hex"))
                }
            }
            let u = e => "lst" === e.group || "native" === e.group,
                o = e => !!e && "object" == typeof e && "address" in e
        },
        59575: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return s
                },
                p: function() {
                    return i
                }
            });
            var a = n(70524);
            let s = e => {
                    if ("ETH" === e) return a.stakeConfig.nativeToken;
                    let t = a.stakeConfig.stakingTokenList.find(t => t.symbol === e);
                    if (t) return t
                },
                i = e => e.split("/")[2]
        },
        15294: function(e, t) {
            "use strict";
            t.Z = [{
                inputs: [{
                    internalType: "contract IETHPOSDeposit",
                    name: "_ethPOS",
                    type: "address"
                }, {
                    internalType: "contract IBeacon",
                    name: "_eigenPodBeacon",
                    type: "address"
                }, {
                    internalType: "contract IStrategyManager",
                    name: "_strategyManager",
                    type: "address"
                }, {
                    internalType: "contract ISlasher",
                    name: "_slasher",
                    type: "address"
                }, {
                    internalType: "contract IDelegationManager",
                    name: "_delegationManager",
                    type: "address"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "podOwner",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "BeaconChainETHDeposited",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "podOwner",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint96",
                    name: "nonce",
                    type: "uint96"
                }, {
                    indexed: !1,
                    internalType: "address",
                    name: "delegatedAddress",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "address",
                    name: "withdrawer",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "bytes32",
                    name: "withdrawalRoot",
                    type: "bytes32"
                }],
                name: "BeaconChainETHWithdrawalCompleted",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "newOracleAddress",
                    type: "address"
                }],
                name: "BeaconOracleUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint8",
                    name: "version",
                    type: "uint8"
                }],
                name: "Initialized",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "uint256",
                    name: "previousValue",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "newValue",
                    type: "uint256"
                }],
                name: "MaxPodsUpdated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "previousOwner",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "OwnershipTransferred",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "account",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "newPausedStatus",
                    type: "uint256"
                }],
                name: "Paused",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "contract IPauserRegistry",
                    name: "pauserRegistry",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "contract IPauserRegistry",
                    name: "newPauserRegistry",
                    type: "address"
                }],
                name: "PauserRegistrySet",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "eigenPod",
                    type: "address"
                }, {
                    indexed: !0,
                    internalType: "address",
                    name: "podOwner",
                    type: "address"
                }],
                name: "PodDeployed",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !0,
                    internalType: "address",
                    name: "account",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "newPausedStatus",
                    type: "uint256"
                }],
                name: "Unpaused",
                type: "event"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "podOwner",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }],
                name: "addShares",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "beaconChainETHStrategy",
                outputs: [{
                    internalType: "contract IStrategy",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "beaconChainOracle",
                outputs: [{
                    internalType: "contract IBeaconChainOracle",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "createPod",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "cumulativeWithdrawalsQueued",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "delegationManager",
                outputs: [{
                    internalType: "contract IDelegationManager",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "eigenPodBeacon",
                outputs: [{
                    internalType: "contract IBeacon",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "ethPOS",
                outputs: [{
                    internalType: "contract IETHPOSDeposit",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint64",
                    name: "timestamp",
                    type: "uint64"
                }],
                name: "getBlockRootAtTimestamp",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "podOwner",
                    type: "address"
                }],
                name: "getPod",
                outputs: [{
                    internalType: "contract IEigenPod",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "podOwner",
                    type: "address"
                }],
                name: "hasPod",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_maxPods",
                    type: "uint256"
                }, {
                    internalType: "contract IBeaconChainOracle",
                    name: "_beaconChainOracle",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "initialOwner",
                    type: "address"
                }, {
                    internalType: "contract IPauserRegistry",
                    name: "_pauserRegistry",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "_initPausedStatus",
                    type: "uint256"
                }],
                name: "initialize",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "maxPods",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "numPods",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "owner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "ownerToPod",
                outputs: [{
                    internalType: "contract IEigenPod",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "newPausedStatus",
                    type: "uint256"
                }],
                name: "pause",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "pauseAll",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint8",
                    name: "index",
                    type: "uint8"
                }],
                name: "paused",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "paused",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "pauserRegistry",
                outputs: [{
                    internalType: "contract IPauserRegistry",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "podOwnerShares",
                outputs: [{
                    internalType: "int256",
                    name: "",
                    type: "int256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "podOwner",
                    type: "address"
                }, {
                    internalType: "int256",
                    name: "sharesDelta",
                    type: "int256"
                }],
                name: "recordBeaconChainETHBalanceUpdate",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "podOwner",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }],
                name: "removeShares",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "renounceOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "newMaxPods",
                    type: "uint256"
                }],
                name: "setMaxPods",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "contract IPauserRegistry",
                    name: "newPauserRegistry",
                    type: "address"
                }],
                name: "setPauserRegistry",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "slasher",
                outputs: [{
                    internalType: "contract ISlasher",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes",
                    name: "pubkey",
                    type: "bytes"
                }, {
                    internalType: "bytes",
                    name: "signature",
                    type: "bytes"
                }, {
                    internalType: "bytes32",
                    name: "depositDataRoot",
                    type: "bytes32"
                }],
                name: "stake",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [],
                name: "strategyManager",
                outputs: [{
                    internalType: "contract IStrategyManager",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "newOwner",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "newPausedStatus",
                    type: "uint256"
                }],
                name: "unpause",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "contract IBeaconChainOracle",
                    name: "newBeaconChainOracle",
                    type: "address"
                }],
                name: "updateBeaconChainOracle",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "podOwner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "destination",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }],
                name: "withdrawSharesAsTokens",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                name: "withdrawalRootPending",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }]
        },
        54290: function(e, t) {
            "use strict";
            t.Z = [{
                inputs: [{
                    internalType: "contract IERC20",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "deposit",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "explanation",
                outputs: [{
                    internalType: "string",
                    name: "",
                    type: "string"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountShares",
                    type: "uint256"
                }],
                name: "sharesToUnderlying",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountShares",
                    type: "uint256"
                }],
                name: "sharesToUnderlyingView",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "totalShares",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountUnderlying",
                    type: "uint256"
                }],
                name: "underlyingToShares",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amountUnderlying",
                    type: "uint256"
                }],
                name: "underlyingToSharesView",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "underlyingToken",
                outputs: [{
                    internalType: "contract IERC20",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }],
                name: "userUnderlying",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }],
                name: "userUnderlyingView",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "depositor",
                    type: "address"
                }, {
                    internalType: "contract IERC20",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amountShares",
                    type: "uint256"
                }],
                name: "withdraw",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }]
        }
    }
]);