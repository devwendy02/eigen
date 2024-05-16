"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5008], {
        95008: function(e, t, a) {
            var n = a(70524),
                s = a(66177),
                i = a(56109),
                r = a(97016),
                p = a(70899),
                y = a(38875),
                u = a(94623);
            t.Z = () => {
                let {
                    data: e,
                    isLoading: t,
                    isError: a,
                    isSuccess: d
                } = (0, i.a)({
                    queryKey: ["contract-status"],
                    queryFn: () => Promise.all([(0, u.a4)({
                        address: n.stakeConfig.strategyManagerAddress,
                        abi: p.Z,
                        functionName: "paused",
                        args: [0]
                    }), (0, u.a4)({
                        address: n.stakeConfig.strategyManagerAddress,
                        abi: p.Z,
                        functionName: "paused",
                        args: [1]
                    }), (0, u.a4)({
                        address: n.stakeConfig.delegationManagerAddress,
                        abi: y.Z,
                        functionName: "paused",
                        args: [0]
                    })]).then(e => {
                        let [t, a, n] = e;
                        return {
                            isDepositsPaused: !!t,
                            isWithdrawalsPaused: !!a,
                            isDelegationPaused: !!n
                        }
                    }),
                    initialData: {
                        isDepositsPaused: !1,
                        isWithdrawalsPaused: !1,
                        isDelegationPaused: !1
                    }
                }), {
                    data: o,
                    isLoading: l,
                    isError: m,
                    isSuccess: c
                } = s.h.edgeConfig.getEdgeConfig.useQuery(void 0, {
                    initialData: {
                        isMaintenance: !1,
                        isNativeMaintenance: !1,
                        isLSTMaintenance: !1,
                        isNativeDepositDisabled: !1,
                        isLSTDepositDisabled: !1,
                        isWithdrawalDisabled: !1,
                        isDelegationDisabled: !1
                    }
                }), g = {
                    functionStatuses: {
                        lstDeposits: {
                            type: "LST Deposits",
                            isAppPaused: o.isLSTDepositDisabled,
                            isContractPaused: e.isDepositsPaused,
                            isDisabled: o.isLSTDepositDisabled || e.isDepositsPaused,
                            message: "Liquid Restaking deposits on EigenLayer are temporarily paused."
                        },
                        nativeDeposits: {
                            type: "Native Deposits",
                            isAppPaused: o.isNativeDepositDisabled,
                            isContractPaused: !1,
                            isDisabled: o.isNativeDepositDisabled,
                            message: "Native Restaking deposits on EigenLayer are temporarily paused."
                        },
                        delegation: {
                            type: "Delegation",
                            isAppPaused: o.isDelegationDisabled,
                            isContractPaused: e.isDelegationPaused,
                            isDisabled: o.isDelegationDisabled || e.isDelegationPaused,
                            message: "Delegation is temporarily paused."
                        },
                        withdrawal: {
                            type: "Withdrawals",
                            isAppPaused: o.isWithdrawalDisabled,
                            isContractPaused: e.isWithdrawalsPaused,
                            isDisabled: o.isWithdrawalDisabled || e.isWithdrawalsPaused,
                            message: "Withdrawals are temporarily paused."
                        }
                    },
                    isNativeMaintenanceMode: o.isNativeMaintenance,
                    isLSTMaintenanceMode: o.isLSTMaintenance,
                    bannerMessage: "",
                    statusCount: 0
                }, T = Object.values(g.functionStatuses).filter(e => null == e ? void 0 : e.isDisabled), b = (0, r.useMemo)(() => T.length > 1 ? "Multiple functions are currently paused." : 1 === T.length ? T[0].message : "", [T]);
                return {
                    data: { ...g,
                        statusCount: T.length,
                        bannerMessage: b
                    },
                    isLoading: t || l,
                    isError: a || m,
                    isSuccess: c || d
                }
            }
        },
        70899: function(e, t) {
            t.Z = [{
                inputs: [{
                    internalType: "contract IDelegationManager",
                    name: "_delegation",
                    type: "address"
                }, {
                    internalType: "contract IEigenPodManager",
                    name: "_eigenPodManager",
                    type: "address"
                }, {
                    internalType: "contract ISlasher",
                    name: "_slasher",
                    type: "address"
                }],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "contract IERC20",
                    name: "token",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "contract IStrategy",
                    name: "strategy",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }],
                name: "Deposit",
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
                    indexed: !1,
                    internalType: "contract IStrategy",
                    name: "strategy",
                    type: "address"
                }],
                name: "StrategyAddedToDepositWhitelist",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "contract IStrategy",
                    name: "strategy",
                    type: "address"
                }],
                name: "StrategyRemovedFromDepositWhitelist",
                type: "event"
            }, {
                anonymous: !1,
                inputs: [{
                    indexed: !1,
                    internalType: "address",
                    name: "previousAddress",
                    type: "address"
                }, {
                    indexed: !1,
                    internalType: "address",
                    name: "newAddress",
                    type: "address"
                }],
                name: "StrategyWhitelisterChanged",
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
                inputs: [],
                name: "DEPOSIT_TYPEHASH",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "DOMAIN_TYPEHASH",
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
                    name: "staker",
                    type: "address"
                }, {
                    internalType: "contract IStrategy",
                    name: "strategy",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }],
                name: "addShares",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "contract IStrategy[]",
                    name: "strategiesToWhitelist",
                    type: "address[]"
                }],
                name: "addStrategiesToDepositWhitelist",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "contract IStrategy[]",
                        name: "strategies",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "shares",
                        type: "uint256[]"
                    }, {
                        internalType: "address",
                        name: "staker",
                        type: "address"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "withdrawer",
                            type: "address"
                        }, {
                            internalType: "uint96",
                            name: "nonce",
                            type: "uint96"
                        }],
                        internalType: "struct IStrategyManager.DeprecatedStruct_WithdrawerAndNonce",
                        name: "withdrawerAndNonce",
                        type: "tuple"
                    }, {
                        internalType: "uint32",
                        name: "withdrawalStartBlock",
                        type: "uint32"
                    }, {
                        internalType: "address",
                        name: "delegatedAddress",
                        type: "address"
                    }],
                    internalType: "struct IStrategyManager.DeprecatedStruct_QueuedWithdrawal",
                    name: "queuedWithdrawal",
                    type: "tuple"
                }],
                name: "calculateWithdrawalRoot",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "pure",
                type: "function"
            }, {
                inputs: [],
                name: "delegation",
                outputs: [{
                    internalType: "contract IDelegationManager",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "contract IStrategy",
                    name: "strategy",
                    type: "address"
                }, {
                    internalType: "contract IERC20",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "depositIntoStrategy",
                outputs: [{
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "contract IStrategy",
                    name: "strategy",
                    type: "address"
                }, {
                    internalType: "contract IERC20",
                    name: "token",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }, {
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "expiry",
                    type: "uint256"
                }, {
                    internalType: "bytes",
                    name: "signature",
                    type: "bytes"
                }],
                name: "depositIntoStrategyWithSignature",
                outputs: [{
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "domainSeparator",
                outputs: [{
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "view",
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
                    name: "staker",
                    type: "address"
                }],
                name: "getDeposits",
                outputs: [{
                    internalType: "contract IStrategy[]",
                    name: "",
                    type: "address[]"
                }, {
                    internalType: "uint256[]",
                    name: "",
                    type: "uint256[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "initialOwner",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "initialStrategyWhitelister",
                    type: "address"
                }, {
                    internalType: "contract IPauserRegistry",
                    name: "_pauserRegistry",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "initialPausedStatus",
                    type: "uint256"
                }],
                name: "initialize",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    components: [{
                        internalType: "contract IStrategy[]",
                        name: "strategies",
                        type: "address[]"
                    }, {
                        internalType: "uint256[]",
                        name: "shares",
                        type: "uint256[]"
                    }, {
                        internalType: "address",
                        name: "staker",
                        type: "address"
                    }, {
                        components: [{
                            internalType: "address",
                            name: "withdrawer",
                            type: "address"
                        }, {
                            internalType: "uint96",
                            name: "nonce",
                            type: "uint96"
                        }],
                        internalType: "struct IStrategyManager.DeprecatedStruct_WithdrawerAndNonce",
                        name: "withdrawerAndNonce",
                        type: "tuple"
                    }, {
                        internalType: "uint32",
                        name: "withdrawalStartBlock",
                        type: "uint32"
                    }, {
                        internalType: "address",
                        name: "delegatedAddress",
                        type: "address"
                    }],
                    internalType: "struct IStrategyManager.DeprecatedStruct_QueuedWithdrawal",
                    name: "queuedWithdrawal",
                    type: "tuple"
                }],
                name: "migrateQueuedWithdrawal",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }, {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32"
                }],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                name: "nonces",
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
                    name: "staker",
                    type: "address"
                }, {
                    internalType: "contract IStrategy",
                    name: "strategy",
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
                inputs: [{
                    internalType: "contract IStrategy[]",
                    name: "strategiesToRemoveFromWhitelist",
                    type: "address[]"
                }],
                name: "removeStrategiesFromDepositWhitelist",
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
                    internalType: "address",
                    name: "newStrategyWhitelister",
                    type: "address"
                }],
                name: "setStrategyWhitelister",
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
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }],
                name: "stakerCanUndelegate",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                name: "stakerStrategyList",
                outputs: [{
                    internalType: "contract IStrategy",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "staker",
                    type: "address"
                }],
                name: "stakerStrategyListLength",
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
                    name: "",
                    type: "address"
                }, {
                    internalType: "contract IStrategy",
                    name: "",
                    type: "address"
                }],
                name: "stakerStrategyShares",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "contract IStrategy",
                    name: "",
                    type: "address"
                }],
                name: "strategyIsWhitelistedForDeposit",
                outputs: [{
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "strategyWhitelister",
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
                    name: "recipient",
                    type: "address"
                }, {
                    internalType: "contract IStrategy",
                    name: "strategy",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "shares",
                    type: "uint256"
                }, {
                    internalType: "contract IERC20",
                    name: "token",
                    type: "address"
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
        }
    }
]);