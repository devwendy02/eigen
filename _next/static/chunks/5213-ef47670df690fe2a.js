"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5213], {
        95213: function(e, t, a) {
            a.d(t, {
                O4: function() {
                    return T
                },
                _N: function() {
                    return b
                },
                cp: function() {
                    return f
                },
                e5: function() {
                    return C
                }
            });
            var n = a(97016),
                i = a(17358),
                r = a(12076),
                s = a(66177),
                l = a(70524),
                o = a(38875),
                d = a(77400),
                u = a(20159),
                p = a(39496),
                y = a(75541),
                c = a(5525),
                m = a(94623),
                h = a(97586),
                g = a(87279);
            let w = {
                    address: l.stakeConfig.delegationManagerAddress,
                    abi: o.Z
                },
                T = () => {
                    let {
                        address: e,
                        isConnected: t
                    } = (0, r.Z)(), a = (0, i.do)({ ...w,
                        functionName: "delegatedTo",
                        args: e && [e],
                        enabled: !!e,
                        watch: !0
                    }), {
                        data: n,
                        isSuccess: s
                    } = a, l = s && t && n !== d.r_ && void 0 !== n;
                    return { ...a,
                        data: n,
                        isDelegated: l
                    }
                },
                b = e => {
                    var t, a, n, r;
                    let s = (0, i.Dm)({
                        contracts: [{ ...w,
                            functionName: "stakerOptOutWindowBlocks",
                            args: e && [e]
                        }, { ...w,
                            functionName: "delegationApprover",
                            args: e && [e]
                        }]
                    });
                    return {
                        stakerOptOutWindowBlocks: (null == s ? void 0 : null === (t = s.data) || void 0 === t ? void 0 : t[0]) || null,
                        delegationApprover: (null == s ? void 0 : null === (a = s.data) || void 0 === a ? void 0 : a[1]) || null,
                        hasDelegationApprover: (null == s ? void 0 : null === (r = s.data) || void 0 === r ? void 0 : null === (n = r[1]) || void 0 === n ? void 0 : n.result) !== d.r_
                    }
                },
                f = (e, t, a, l, o, d) => {
                    var b;
                    let {
                        isConnected: f,
                        address: v
                    } = (0, r.Z)(), C = (0, i.PJ)({ ...w,
                        functionName: "delegateTo",
                        args: [e, {
                            signature: "",
                            expiry: 0 n
                        }, (0, u.NC)("", {
                            size: 32
                        })],
                        enabled: !t && f
                    }), {
                        refetch: W
                    } = (0, y.RD)(), {
                        refetch: k
                    } = T(), {
                        refetch: A
                    } = (0, y.RD)(), {
                        refetch: E
                    } = s.h.operator.getOperatorSummary.useQuery({
                        address: e.toLowerCase()
                    }), {
                        refetch: I
                    } = (0, g.zd)({
                        enabled: !!v
                    }), {
                        refetch: N
                    } = s.h.tokenStaking.getRestakingPoints.useQuery({
                        staker: null !== (b = null == v ? void 0 : v.toLowerCase()) && void 0 !== b ? b : ""
                    }, {
                        enabled: !!v
                    }), {
                        write: S,
                        data: R,
                        isLoading: B,
                        isSuccess: L,
                        isError: _
                    } = (0, i.GG)({ ...C.config,
                        onSuccess: e => {
                            let {
                                hash: t
                            } = e;
                            (0, m.Mn)({
                                hash: t
                            }).then(e => {
                                (0, c.P_)(c.JT.delegate, e.status), E(), W(), k(), A(), N(), I()
                            })
                        }
                    }), D = async () => {
                        S && (await S(), l({
                            type: p.Hp.SET_TRANSACTION,
                            payload: {
                                hash: null == R ? void 0 : R.hash,
                                isLoading: !0,
                                isError: !1,
                                type: "info",
                                message: "Delegating to ".concat(a || (0, c.Xn)(e), "...")
                            }
                        }), o(!0))
                    };
                    (0, n.useEffect)(() => {
                        _ && (o(!1), l({
                            type: p.Hp.SET_TRANSACTION,
                            payload: p.YF
                        }))
                    }, [_, l, o]);
                    let {
                        data: P,
                        isLoading: M,
                        isSuccess: O,
                        isError: x
                    } = (0, i.BX)({
                        hash: null == R ? void 0 : R.hash,
                        onSettled(t, n) {
                            n ? ((0, h.Tb)(n), (null == R ? void 0 : R.hash) && l({
                                type: p.Hp.SET_TRANSACTION,
                                payload: {
                                    hash: R.hash,
                                    isLoading: !1,
                                    isError: !1,
                                    type: "delegateTo",
                                    message: "Transaction submitted"
                                }
                            })) : (null == t ? void 0 : t.transactionHash) && l({
                                type: p.Hp.SET_TRANSACTION,
                                payload: {
                                    hash: t.transactionHash,
                                    isLoading: !1,
                                    isError: !1,
                                    type: "delegateTo",
                                    message: "Delegated to ".concat(a || (0, c.Xn)(e), "!")
                                }
                            }), null == k || k(), W(), null == d || d(), o(!0)
                        }
                    });
                    return {
                        delegateTo: D,
                        delegateToData: R,
                        isDelegateToLoading: B,
                        isDelegateToSuccess: L,
                        isDelegateToError: _,
                        delegateToTxnData: P,
                        isDelegateToTxnLoading: M,
                        isDelegateToTxnSuccess: O,
                        isDelegateToTxnError: x,
                        isDelegateToPrepareError: C.isError
                    }
                },
                v = (e, t, a, n) => {
                    let {
                        address: l
                    } = (0, r.Z)(), {
                        refetch: o
                    } = (0, y.RD)(), {
                        data: u = "",
                        refetch: b
                    } = T(), {
                        refetch: f
                    } = (0, y.RD)(), {
                        refetch: v
                    } = s.h.operator.getOperatorSummary.useQuery({
                        address: null == u ? void 0 : u.toLowerCase()
                    }, {
                        enabled: !!u && u !== d.r_
                    }), {
                        refetch: C
                    } = (0, g.zd)({
                        enabled: !!l
                    }), W = (0, i.PJ)({ ...w,
                        functionName: "undelegate",
                        args: l && [l],
                        enabled: !!u && u !== d.r_ && !!l
                    }), k = (0, i.GG)({ ...W.config,
                        onSuccess: e => {
                            let {
                                hash: t
                            } = e;
                            (0, m.Mn)({
                                hash: t
                            }).then(e => {
                                (0, c.P_)(c.JT.undelegate, e.status), v(), o(), b(), f(), C()
                            })
                        }
                    }), {
                        write: A,
                        data: E,
                        isLoading: I,
                        isSuccess: N,
                        isError: S
                    } = k, R = async () => {
                        A && (await A(), t({
                            type: p.Hp.SET_TRANSACTION,
                            payload: {
                                hash: null == E ? void 0 : E.hash,
                                isLoading: !0,
                                isError: !1,
                                type: "info",
                                message: "Undelegating from ".concat(e || (0, c.Xn)(u)).concat(n ? "...(2/2)" : "")
                            }
                        }), a(!0))
                    }, {
                        data: B,
                        isLoading: L,
                        isSuccess: _,
                        isError: D
                    } = (0, i.BX)({
                        hash: null == E ? void 0 : E.hash,
                        onSettled(e, n) {
                            n ? ((0, h.Tb)(n), (null == E ? void 0 : E.hash) && t({
                                type: p.Hp.SET_TRANSACTION,
                                payload: {
                                    hash: E.hash,
                                    isLoading: !1,
                                    isError: !1,
                                    type: "undelegation",
                                    message: "Transaction submitted"
                                }
                            })) : (null == e ? void 0 : e.transactionHash) && t({
                                type: p.Hp.SET_TRANSACTION,
                                payload: {
                                    hash: e.transactionHash,
                                    isLoading: !1,
                                    isError: !1,
                                    type: "undelegation",
                                    message: "Undelegation successful!"
                                }
                            }), o(), a(!0)
                        }
                    });
                    return {
                        prepareContract: W,
                        writeContract: k,
                        undelegate: R,
                        undelegateData: E,
                        isUndelegateLoading: I,
                        isUndelegateSuccess: N,
                        isUndelegateError: S,
                        undelegateTxnData: B,
                        isUndelegateTxnLoading: L,
                        isUndelegateTxnSuccess: _,
                        isUndelegateTxnError: D,
                        isUndelegatePrepareError: W.isError
                    }
                },
                C = (e, t, a, s) => {
                    let {
                        address: l
                    } = (0, r.Z)(), {
                        refetch: o
                    } = T(), d = (0, i.PJ)({ ...w,
                        functionName: "queueWithdrawals",
                        args: l && [e.map(e => {
                            let {
                                strategyAddresses: t,
                                shares: a
                            } = e;
                            return {
                                strategies: t,
                                shares: a,
                                withdrawer: l
                            }
                        })],
                        enabled: !!l && e.length > 0
                    }), u = (0, i.GG)({ ...d.config,
                        onSuccess: e => {
                            let {
                                hash: t
                            } = e;
                            (0, m.Mn)({
                                hash: t
                            }).then(e => {
                                (0, c.P_)(c.JT.queueWithdrawals, e.status)
                            })
                        }
                    }), {
                        write: g,
                        data: b,
                        isLoading: f,
                        isSuccess: C,
                        isError: W
                    } = u, {
                        refetch: k
                    } = (0, y.RD)(), {
                        undelegate: A,
                        isUndelegateLoading: E,
                        isUndelegateError: I,
                        isUndelegateTxnLoading: N,
                        isUndelegatePrepareError: S,
                        prepareContract: R
                    } = v(a, s, t), B = async () => {
                        g && e.length > 0 ? (await g(), s({
                            type: p.Hp.SET_TRANSACTION,
                            payload: {
                                hash: null == b ? void 0 : b.hash,
                                isLoading: !0,
                                isError: !1,
                                type: "info",
                                message: "Unstaking from ".concat(a, "... (1/2)")
                            }
                        }), t(!0)) : null == A || A()
                    }, {
                        data: L,
                        isLoading: _,
                        isSuccess: D,
                        isError: P
                    } = (0, i.BX)({
                        hash: null == b ? void 0 : b.hash,
                        onSettled(e, n) {
                            n ? ((0, h.Tb)(n), (null == b ? void 0 : b.hash) && s({
                                type: p.Hp.SET_TRANSACTION,
                                payload: {
                                    hash: b.hash,
                                    isLoading: !1,
                                    isError: !1,
                                    type: "unstake",
                                    message: "Transaction submitted"
                                }
                            })) : (null == e ? void 0 : e.transactionHash) && s({
                                type: p.Hp.SET_TRANSACTION,
                                payload: {
                                    hash: e.transactionHash,
                                    isLoading: !1,
                                    isError: !1,
                                    type: "unstake",
                                    message: "Unstaked from ".concat(a, "!")
                                }
                            }), null == o || o(), k(), A(), t(!0)
                        }
                    });
                    return (0, n.useEffect)(() => {
                        (W || I) && (t(!1), s({
                            type: p.Hp.SET_TRANSACTION,
                            payload: p.YF
                        }))
                    }, [W, s, t, I]), {
                        prepareContract: d,
                        writeContract: u,
                        queueWithdrawal: B,
                        queueWithdrawalData: b,
                        isQueueWithdrawalLoading: f,
                        isQueueWithdrawalSuccess: C,
                        isQueueWithdrawalError: W,
                        queueWithdrawalTxnData: L,
                        isQueueWithdrawalTxnLoading: _,
                        isQueueWithdrawalTxnSuccess: D,
                        isQueueWithdrawalTxnError: P,
                        isUndelegateLoading: E,
                        isUndelegateTxnLoading: N,
                        isUndelegatePrepareError: S,
                        refetchUndelegatePrepare: R.refetch
                    }
                }
        },
        39496: function(e, t, a) {
            a.d(t, {
                Hp: function() {
                    return n
                },
                YF: function() {
                    return r
                },
                y0: function() {
                    return s
                }
            });
            var n, i = a(97016);
            (n || (n = {})).SET_TRANSACTION = "SET_DEPOSIT_TRANSACTION";
            let r = {
                    isLoading: !1,
                    isError: !1,
                    type: "",
                    message: "",
                    amount: ""
                },
                s = () => {
                    let [e, t] = (0, i.useReducer)(function(e, t) {
                        return "SET_DEPOSIT_TRANSACTION" === t.type ? { ...e,
                            ...t.payload
                        } : e
                    }, r);
                    return {
                        transaction: e,
                        dispatch: t
                    }
                }
        },
        87279: function(e, t, a) {
            a.d(t, {
                eL: function() {
                    return I
                },
                v8: function() {
                    return E
                },
                zd: function() {
                    return S
                }
            });
            var n = a(65722),
                i = a(94623),
                r = a(45848),
                s = a(46428),
                l = a.n(s),
                o = a(24675),
                d = a.n(o),
                u = a(13919),
                p = a.n(u),
                y = a(70524),
                c = a(20102),
                m = a(38875),
                h = a(77400),
                g = a(12076),
                w = a(56109);
            let T = [...y.stakeConfig.stakingTokenList, y.stakeConfig.nativeToken],
                b = {
                    address: y.stakeConfig.delayedWithdrawalRouterAddress,
                    abi: c.Z,
                    functionName: "withdrawalDelayBlocks"
                },
                f = {
                    address: y.stakeConfig.delegationManagerAddress,
                    abi: m.Z,
                    functionName: "getWithdrawalDelay",
                    args: [y.stakeConfig.stakingTokenList.map(e => e.strategyAddress)]
                },
                v = {
                    address: y.stakeConfig.delegationManagerAddress,
                    abi: m.Z,
                    functionName: "minWithdrawalDelayBlocks"
                },
                C = () => p()(T, (e, t) => (e[t.strategyAddress.toLowerCase()] = Object.assign({}, {
                    pendingWithdrawals: [],
                    pendingWithdrawalAmount: 0 n,
                    completableWithdrawals: [],
                    completableWithdrawalAmount: 0 n,
                    beaconChainBlockedWithdrawals: [],
                    beaconChainBlockedWithdrawalAmount: 0 n,
                    completableNativePaymentsAmount: 0 n,
                    weiToProve: 0 n
                }), e), {}),
                W = e => {
                    let {
                        pendingWithdrawals: t,
                        completeableWithdrawals: a,
                        beaconChainBlockedWithdrawals: n,
                        weiToProve: i
                    } = e, r = { ...C(),
                        weiToProve: i
                    };
                    return t.forEach(e => {
                        let {
                            shares: t,
                            strategies: a,
                            ...n
                        } = e;
                        a.forEach((e, a) => {
                            if (!l()(r, e.toLowerCase())) {
                                console.error("".concat(e, " not whitelisted"));
                                return
                            }
                            r[e.toLowerCase()].pendingWithdrawalAmount += BigInt(t[a]), r[e.toLowerCase()].pendingWithdrawals.push({ ...n,
                                shares: [t[a]],
                                strategies: [e]
                            })
                        })
                    }), n.forEach(e => {
                        let {
                            shares: t,
                            strategies: a,
                            ...n
                        } = e;
                        a.forEach((e, a) => {
                            if (!l()(r, e.toLowerCase())) {
                                console.error("".concat(e, " not whitelisted"));
                                return
                            }
                            r[e.toLowerCase()].beaconChainBlockedWithdrawalAmount += BigInt(t[a]), r[e.toLowerCase()].beaconChainBlockedWithdrawals.push({ ...n,
                                shares: [t[a]],
                                strategies: [e]
                            })
                        })
                    }), a.forEach(e => {
                        let {
                            shares: t,
                            strategies: a,
                            ...n
                        } = e;
                        a.forEach((e, a) => {
                            if (!l()(r, e.toLowerCase())) {
                                console.error("".concat(e, " not whitelisted"));
                                return
                            }
                            r[e.toLowerCase()].completableWithdrawalAmount += BigInt(t[a]), r[e.toLowerCase()].completableWithdrawals.push({ ...n,
                                shares: [t[a]],
                                strategies: [e]
                            })
                        })
                    }), r
                },
                k = (e, t, a, n) => {
                    let i = e.delayedWithdrawals,
                        r = e.delayedWithdrawalsCompleted.toString();
                    return 0 === i.length ? [] : i.slice(Number(r)).map(e => {
                        let i = BigInt(e.blockCreated) + BigInt(a) < BigInt(t);
                        return {
                            withdrawalRoot: "",
                            staker: n,
                            delegatedTo: "",
                            withdrawer: n,
                            nonce: 0 n,
                            startBlock: Number(e.blockCreated),
                            shares: [e.amount],
                            strategies: [y.stakeConfig.nativeToken.strategyAddress],
                            isUndelegation: !1,
                            status: i ? "completable" : "pending"
                        }
                    })
                },
                A = async e => {
                    let [t, a] = await Promise.all([r.Z.get("".concat(n.env.NEXT_PUBLIC_EIGENLAYER_BACKEND_URI, "/restaking/uncompleted-withdrawals/").concat(e)).then(e => {
                        let {
                            data: t
                        } = e;
                        return W(t)
                    }), (0, i.RQ)()]), [{
                        result: s
                    }, {
                        result: o
                    }, {
                        result: u
                    }, {
                        result: p
                    }] = await (0, i.Ap)({
                        contracts: [b, f, v, {
                            address: y.stakeConfig.delayedWithdrawalRouterAddress,
                            abi: c.Z,
                            functionName: "userWithdrawals",
                            args: e && [e]
                        }]
                    }), m = y.stakeConfig.stakingTokenList.reduce((e, a) => {
                        let n = t[a.strategyAddress.toLowerCase()],
                            i = l()(d()(n.pendingWithdrawals, e => {
                                let {
                                    startBlock: t
                                } = e;
                                return BigInt(null != t ? t : 0 n)
                            }), "startBlock", 0 n);
                        return e[a.symbol] = { ...a,
                            ...n,
                            nextCompletableWithdrawalBlock: i && o && u ? BigInt(i) + BigInt(o > u ? o : u) : h.j5,
                            completableRedelegation: n.completableWithdrawals,
                            beaconChainBlockedWithdrawalAmount: 0 n,
                            weiToProve: n.weiToProve
                        }, e
                    }, {}), g = k(p, a, s, e), w = t[y.stakeConfig.nativeToken.strategyAddress.toLowerCase()], T = [...w.pendingWithdrawals, ...g.filter(e => {
                        let {
                            status: t
                        } = e;
                        return "pending" === t
                    })], C = T.reduce((e, t) => {
                        var a;
                        return e + BigInt(null !== (a = t.shares) && void 0 !== a ? a : 0)
                    }, 0 n), A = l()(d()(T, e => {
                        let {
                            startBlock: t
                        } = e;
                        return BigInt(null != t ? t : 0 n)
                    }), "startBlock", 0 n), E = g.reduce((e, t) => {
                        var a;
                        return "completable" === t.status ? e + BigInt(null !== (a = t.shares) && void 0 !== a ? a : 0) : e
                    }, 0 n), I = w.beaconChainBlockedWithdrawals.reduce((e, t) => {
                        var a;
                        return e + BigInt(null !== (a = t.shares) && void 0 !== a ? a : 0)
                    }, 0 n);
                    return m[y.stakeConfig.nativeToken.symbol] = { ...y.stakeConfig.nativeToken,
                        pendingWithdrawals: T,
                        completableWithdrawals: w.completableWithdrawals,
                        pendingWithdrawalAmount: C,
                        completableWithdrawalAmount: w.completableWithdrawalAmount,
                        completableNativePaymentsAmount: E,
                        nextCompletableWithdrawalBlock: A && s ? BigInt(A) + BigInt(s) : h.j5,
                        beaconChainBlockedWithdrawalAmount: I,
                        completableRedelegation: w.beaconChainBlockedWithdrawals,
                        weiToProve: BigInt(t.weiToProve)
                    }, m
                },
                E = async (e, t) => {
                    try {
                        var a;
                        let i = null === (a = T.find(e => e.strategyAddress.toLowerCase() === t.toLowerCase())) || void 0 === a ? void 0 : a.symbol;
                        if (!i) throw Error("Stategy not found");
                        let r = await A(e),
                            s = await fetch("".concat(n.env.NEXT_PUBLIC_EIGENLAYER_BACKEND_URI, "/meta/block-head/eigenlayer-delegation-raw-events")),
                            o = await s.json(),
                            d = l()(r, i);
                        if (d) return { ...d,
                            block: BigInt(o.currentSubgraphIndexedBlockHead)
                        }
                    } catch (e) {
                        console.log(e)
                    }
                    return {
                        pendingWithdrawals: [],
                        completableWithdrawals: [],
                        pendingWithdrawalAmount: 0 n,
                        completableWithdrawalAmount: 0 n,
                        completableNativePaymentsAmount: 0 n,
                        nextCompletableWithdrawalBlock: 0 n,
                        beaconChainBlockedWithdrawalAmount: 0 n,
                        completableRedelegation: [],
                        weiToProve: 0 n,
                        strategyAddress: t,
                        block: 0 n
                    }
                },
                I = async e => {
                    try {
                        return await A(e)
                    } catch (e) {
                        console.log(e)
                    }
                    return {}
                },
                N = async e => {
                    try {
                        let t = (await r.Z.get("".concat(n.env.NEXT_PUBLIC_EIGENLAYER_BACKEND_URI, "/restaking/uncompleted-withdrawals/").concat(null == e ? void 0 : e.toLowerCase()))).data;
                        return {
                            completableRedelegation: [...t.beaconChainBlockedWithdrawals, ...t.completeableWithdrawals]
                        }
                    } catch (e) {
                        return {
                            completableRedelegation: []
                        }
                    }
                },
                S = e => {
                    let {
                        address: t
                    } = (0, g.Z)();
                    return (0, w.a)({
                        queryKey: ["getAllRedelegationWithdrawals", t],
                        queryFn: () => N(t),
                        ...e
                    })
                }
        },
        20102: function(e, t) {
            t.Z = [{
                inputs: [{
                    internalType: "contract IEigenPodManager",
                    name: "_eigenPodManager",
                    type: "address"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "podOwner",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "index",
                    type: "uint256"
                }],
                name: "DelayedWithdrawalCreated",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "amountClaimed",
                    type: "uint256"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "delayedWithdrawalsCompleted",
                    type: "uint256"
                }],
                name: "DelayedWithdrawalsClaimed",
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
                name: "WithdrawalDelayBlocksSet",
                type: "event"
            }, {
                inputs: [],
                name: "MAX_WITHDRAWAL_DELAY_BLOCKS",
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
                    name: "user",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "index",
                    type: "uint256"
                }],
                name: "canClaimDelayedWithdrawal",
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
                    name: "maxNumberOfDelayedWithdrawalsToClaim",
                    type: "uint256"
                }],
                name: "claimDelayedWithdrawals",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "recipient",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "maxNumberOfDelayedWithdrawalsToClaim",
                    type: "uint256"
                }],
                name: "claimDelayedWithdrawals",
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
                    name: "recipient",
                    type: "address"
                }],
                name: "createDelayedWithdrawal",
                outputs: [],
                stateMutability: "payable",
                type: "function"
            }, {
                inputs: [],
                name: "eigenPodManager",
                outputs: [{
                    internalType: "contract IEigenPodManager",
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
                name: "getClaimableUserDelayedWithdrawals",
                outputs: [{
                    components: [{
                        internalType: "uint224",
                        name: "amount",
                        type: "uint224"
                    }, {
                        internalType: "uint32",
                        name: "blockCreated",
                        type: "uint32"
                    }],
                    internalType: "struct IDelayedWithdrawalRouter.DelayedWithdrawal[]",
                    name: "",
                    type: "tuple[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }],
                name: "getUserDelayedWithdrawals",
                outputs: [{
                    components: [{
                        internalType: "uint224",
                        name: "amount",
                        type: "uint224"
                    }, {
                        internalType: "uint32",
                        name: "blockCreated",
                        type: "uint32"
                    }],
                    internalType: "struct IDelayedWithdrawalRouter.DelayedWithdrawal[]",
                    name: "",
                    type: "tuple[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "initOwner",
                    type: "address"
                }, {
                    internalType: "contract IPauserRegistry",
                    name: "_pauserRegistry",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "initPausedStatus",
                    type: "uint256"
                }, {
                    internalType: "uint256",
                    name: "_withdrawalDelayBlocks",
                    type: "uint256"
                }],
                name: "initialize",
                outputs: [],
                stateMutability: "nonpayable",
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
                inputs: [],
                name: "renounceOwnership",
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
                inputs: [{
                    internalType: "uint256",
                    name: "newValue",
                    type: "uint256"
                }],
                name: "setWithdrawalDelayBlocks",
                outputs: [],
                stateMutability: "nonpayable",
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
                    internalType: "address",
                    name: "user",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "index",
                    type: "uint256"
                }],
                name: "userDelayedWithdrawalByIndex",
                outputs: [{
                    components: [{
                        internalType: "uint224",
                        name: "amount",
                        type: "uint224"
                    }, {
                        internalType: "uint32",
                        name: "blockCreated",
                        type: "uint32"
                    }],
                    internalType: "struct IDelayedWithdrawalRouter.DelayedWithdrawal",
                    name: "",
                    type: "tuple"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }],
                name: "userWithdrawals",
                outputs: [{
                    components: [{
                        internalType: "uint256",
                        name: "delayedWithdrawalsCompleted",
                        type: "uint256"
                    }, {
                        components: [{
                            internalType: "uint224",
                            name: "amount",
                            type: "uint224"
                        }, {
                            internalType: "uint32",
                            name: "blockCreated",
                            type: "uint32"
                        }],
                        internalType: "struct IDelayedWithdrawalRouter.DelayedWithdrawal[]",
                        name: "delayedWithdrawals",
                        type: "tuple[]"
                    }],
                    internalType: "struct IDelayedWithdrawalRouter.UserDelayedWithdrawals",
                    name: "",
                    type: "tuple"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "user",
                    type: "address"
                }],
                name: "userWithdrawalsLength",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "withdrawalDelayBlocks",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }]
        }
    }
]);