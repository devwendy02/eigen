(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        73804: function() {},
        61422: function(e, t, o) {
            Promise.resolve().then(o.bind(o, 3316))
        },
        3316: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return eL
                }
            });
            var a, r = o(3994);
            o(88909);
            var i = o(66177),
                n = o(76604),
                s = o(97016),
                l = o(86731),
                c = o(13743),
                h = o(12076),
                d = o(10005),
                u = o.n(d),
                y = o(17358),
                m = o(65722),
                p = o(5525),
                f = () => {
                    let {
                        open: e
                    } = (0, l.k_)(), {
                        isConnected: t,
                        address: o
                    } = (0, h.Z)(), {
                        data: a
                    } = (0, y.F6)({
                        address: o,
                        enabled: "17000" !== m.env.NEXT_PUBLIC_CHAIN_ID
                    }), [i, d] = (0, s.useState)("");
                    return (0, s.useEffect)(() => {
                        o && d(u()(o))
                    }, [o, a]), (0, r.jsx)(c.zx, {
                        intent: "primary",
                        width: "fitContent",
                        size: c.dr.SM,
                        dataCypress: "connectWallet",
                        onClick: () => e(),
                        children: t ? (0, r.jsxs)("div", {
                            className: "flex flex-row gap-3",
                            children: [(0, r.jsx)(n.default, {
                                className: "rounded-sm",
                                src: i,
                                width: 20,
                                height: 20,
                                alt: "blockie"
                            }), (0, r.jsx)("span", {
                                className: "truncate",
                                children: null != a ? a : (0, p.Xn)(o)
                            })]
                        }) : "Connect Wallet"
                    })
                },
                g = o(74253),
                b = o(92643),
                v = o(60292),
                T = o(28213),
                w = o(97571);
            let S = [{
                href: "https://docs.eigenlayer.xyz/overview/readme",
                label: "Documentation",
                isExternalLink: !0
            }, {
                href: "https://blog.eigenlayer.xyz/",
                label: "Blog",
                isExternalLink: !0
            }, {
                href: "https://discord.gg/eigenlayer",
                label: "Discord",
                isExternalLink: !0
            }, {
                href: "https://forum.eigenlayer.xyz",
                label: "Forum",
                isExternalLink: !0
            }];
            var x = () => (0, r.jsxs)(b.fC, {
                    children: [(0, r.jsx)(b.xz, {
                        asChild: !0,
                        children: (0, r.jsx)(c.hU, {
                            size: c.dr.SM,
                            focus: "off",
                            className: "ml-2",
                            children: (0, r.jsx)(v.Z, {
                                className: "w-5 h-5"
                            })
                        })
                    }), (0, r.jsxs)(b.h_, {
                        children: [(0, r.jsx)(b.aV, {
                            className: "absolute top-0 w-screen h-screen bg-overlayDarkBg"
                        }), (0, r.jsxs)(b.VY, {
                            className: "absolute sm:w-[calc(100%-32px)] -my-4 sm:my-0 w-full sm:h-[calc(100vh-80px)] md:w-fit md:right-0 h-[calc(100vh+16px)] mx-0 sm:mx-4 top-0 sm:top-16 bg-tertiaryBg text-info flex flex-col justify-between",
                            children: [(0, r.jsx)(b.x8, {
                                className: "absolute w-6 h-6 top-8 right-4 sm:top-4 hover:text-inverseTertiaryFg",
                                children: (0, r.jsx)(T.Z, {
                                    className: "w-6 h-6"
                                })
                            }), (0, r.jsxs)("div", {
                                className: "h-full",
                                children: [(0, r.jsx)(n.default, {
                                    src: "/logo/markLightD.svg",
                                    alt: "eigenlayer logo",
                                    height: 64,
                                    width: 130
                                }), (0, r.jsx)("div", {
                                    className: "flex flex-col text-info",
                                    children: S.map(e => {
                                        let {
                                            href: t,
                                            label: o,
                                            isExternalLink: a
                                        } = e;
                                        return (0, r.jsxs)("a", {
                                            href: t,
                                            className: "flex items-center justify-between gap-4 p-4 group hover:bg-interactiveTertiaryHover hover:text-accentSecondaryFg",
                                            target: "blank",
                                            rel: "noreferrer",
                                            children: [(0, r.jsx)(c.t1, {
                                                intent: "Heading1",
                                                direction: "toBottomLeft",
                                                backgroundGradient: "from-info to-info group-hover:from-purple-400 group-hover:to-purple-500",
                                                children: o
                                            }), (0, r.jsx)(w.Z, {
                                                className: "w-6 h-6 group-hover:text-purple-500 ".concat(a ? "rotate-45" : "rotate-90")
                                            })]
                                        }, t)
                                    })
                                })]
                            })]
                        })]
                    })]
                }),
                E = o(2659);
            let A = [{
                label: "Dashboard",
                href: "/",
                activeRoutes: ["/"]
            }, {
                label: "Restake",
                href: "/restake",
                activeRoutes: ["/restake"]
            }, {
                label: "Operator",
                href: "/operator",
                activeRoutes: ["/operator"]
            }, {
                label: "AVS",
                href: "/avs",
                activeRoutes: ["/avs/eigenda", "/avs"]
            }];
            var N = () => {
                    let e = (0, E.usePathname)(),
                        t = A.map(t => {
                            let {
                                label: o,
                                href: a,
                                activeRoutes: i
                            } = t, n = i.some(t => "/" === t ? e === t : null == e ? void 0 : e.startsWith(t));
                            return (0, r.jsx)(c.xv, {
                                intent: "ShortTextM",
                                className: "hover:underline text-center ".concat(n ? "text-accentPurple" : ""),
                                children: (0, r.jsx)(g.default, {
                                    href: a,
                                    children: o
                                })
                            }, o)
                        });
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                            className: "flex items-center justify-between px-2 border-b h-14 lg:h-16 sm:px-4 bg-primaryBg border-b-disabledFg",
                            children: [(0, r.jsx)("div", {
                                className: "flex items-center gap-3 mr-4",
                                children: (0, r.jsx)(g.default, {
                                    href: "/",
                                    children: (0, r.jsx)("div", {
                                        className: "relative block w-12 h-12 lg:h-16",
                                        children: (0, r.jsx)(n.default, {
                                            src: "/logo/markDarkA.svg",
                                            alt: "eigenlayer logo",
                                            fill: !0
                                        })
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: "items-center justify-between hidden w-full max-w-sm gap-4 mr-auto sm:flex",
                                children: t
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center",
                                children: [(0, r.jsx)(f, {}), (0, r.jsx)(x, {})]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "flex items-center justify-between w-full gap-4 px-4 mt-4 text-center sm:hidden",
                            children: t
                        })]
                    })
                },
                I = o(75541),
                C = o(62155),
                O = o(90410);
            let R = (e, t) => {
                var o, a, r, i;
                let n = null !== (o = null == e ? void 0 : e.reduce((e, t) => {
                        let {
                            tvl: o,
                            usd: a
                        } = t;
                        return e + o * a
                    }, 0)) && void 0 !== o ? o : 0,
                    l = null !== (a = null == e ? void 0 : e.reduce((e, t) => {
                        let {
                            tvl: o,
                            ethValue: a
                        } = t;
                        return e + o * a
                    }, 0)) && void 0 !== a ? a : 0,
                    c = null !== (r = null == t ? void 0 : t.tvl) && void 0 !== r ? r : 0,
                    h = null !== (i = null == t ? void 0 : t.usd) && void 0 !== i ? i : 0,
                    d = (0, s.useMemo)(() => ({
                        totalUSD: n + c * h,
                        totalETH: l + c
                    }), [c, h, n, l]);
                return {
                    isLoading: !(e && t && d),
                    isSuccess: e && t && d,
                    data: d
                }
            };
            var j = o(14714);
            let k = "Total ETH";

            function L() {
                let [e, t] = (0, s.useState)("eth"), o = "eth" === e, [a, i] = (0, s.useState)(""), [n, l] = (0, s.useState)(k), {
                    liquidRestakingTokens: h,
                    nativeRestakingToken: d
                } = (0, I.rU)(), u = h && d ? [...h, d].filter(e => {
                    let {
                        group: t
                    } = e;
                    return !!t && ["native", "lst"].includes(t)
                }).map(e => {
                    let {
                        symbol: t,
                        icon: o,
                        tvl: a,
                        usd: r
                    } = e;
                    return {
                        symbol: t,
                        icon: o,
                        tvl: a,
                        usd: r
                    }
                }) : [], {
                    isLoading: y,
                    data: m
                } = R(h, d), {
                    totalUSD: p,
                    totalETH: f
                } = m, g = (0, s.useCallback)(() => {
                    i(o ? f.toLocaleString("en-US", {
                        minimumFractionDigits: 4
                    }) : p.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                    })), l(o ? k : "Total in USD")
                }, [o, f, p]);
                (0, s.useEffect)(() => {
                    f > 0 && p > 0 && g()
                }, [o, f, p, g]);
                let b = u.map(e => {
                        var t, a;
                        let {
                            symbol: r,
                            tvl: n,
                            usd: s
                        } = e;
                        return {
                            label: r,
                            value: n * s,
                            borderColor: null === (t = j.O[r]) || void 0 === t ? void 0 : t.borderColor,
                            backgroundColor: null === (a = j.O[r]) || void 0 === a ? void 0 : a.backgroundColor,
                            onMouseEnter: () => {
                                i(o ? n.toLocaleString("en-US", {
                                    minimumFractionDigits: 4
                                }) : (n * s).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                })), l(r)
                            },
                            onMouseLeave: g
                        }
                    }),
                    v = o ? f : p,
                    T = 14;
                return v >= 1e12 ? T = 10 : v >= 1e10 ? T = 11 : v >= 1e9 && (T = 12), (0, r.jsxs)("div", {
                    className: "fixed bottom-0 flex justify-between w-full px-4 py-2 bg-quarternaryBg",
                    children: [(0, r.jsxs)("div", {
                        className: "flex items-center gap-1 sm:gap-2",
                        children: [(0, r.jsxs)("a", {
                            href: "https://docs.eigenlayer.xyz/eigenlayer/legal/terms-of-service",
                            target: "blank",
                            rel: "noreferrer",
                            children: [(0, r.jsx)(c.xv, {
                                intent: "ShortTextS",
                                className: "inline text-tertiaryFg hover:text-primaryFg sm:hidden",
                                children: "ToS"
                            }), (0, r.jsx)(c.xv, {
                                intent: "ShortTextS",
                                className: "hidden text-tertiaryFg hover:text-primaryFg sm:inline",
                                children: "Terms of Service"
                            })]
                        }), (0, r.jsx)(O.f, {
                            orientation: "vertical",
                            className: "h-full w-0.5 bg-borderDivider"
                        }), (0, r.jsxs)("a", {
                            href: "https://docs.eigenlayer.xyz/overview/eigenlayer-privacy-policy",
                            target: "blank",
                            rel: "noreferrer",
                            children: [(0, r.jsx)(c.xv, {
                                intent: "ShortTextS",
                                className: "inline text-tertiaryFg hover:text-primaryFg sm:hidden",
                                children: "Privacy"
                            }), (0, r.jsx)(c.xv, {
                                intent: "ShortTextS",
                                className: "hidden text-tertiaryFg hover:text-primaryFg sm:inline",
                                children: "Privacy Policy"
                            })]
                        })]
                    }), (0, r.jsx)(c.Ob, {
                        contentClassName: "bg-tertiaryBg",
                        trigger: (0, r.jsxs)("div", {
                            className: "flex items-center justify-end h-full gap-2 ml-auto hover:text-secondaryFg",
                            children: [(0, r.jsx)(c.xv, {
                                intent: "ShortTextM",
                                className: "hidden sm:inline",
                                children: "TVL"
                            }), (0, r.jsx)(c.xv, {
                                intent: "ShortTextS",
                                className: "inline sm:hidden",
                                children: "TVL"
                            }), (0, r.jsx)(O.f, {
                                orientation: "vertical",
                                className: "h-full bg-accentGreen w-[1px]"
                            }), (0, r.jsxs)(c.xv, {
                                intent: "ShortTextL",
                                className: "items-center hidden sm:flex",
                                children: [y ? (0, r.jsx)(c.yg, {
                                    intent: "ShortTextL",
                                    className: "mx-2 w-28"
                                }) : o ? f.toLocaleString("en-US", {
                                    minimumFractionDigits: 4
                                }) : p.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                }), " ", o && "ETH"]
                            }), (0, r.jsxs)(c.xv, {
                                intent: "ShortTextS",
                                className: "flex items-center sm:hidden",
                                children: [y ? (0, r.jsx)(c.yg, {
                                    intent: "ShortTextL",
                                    className: "mx-2 w-28"
                                }) : o ? f.toLocaleString("en-US", {
                                    minimumFractionDigits: 4
                                }) : p.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                }), " ", o && "ETH"]
                            })]
                        }),
                        children: (0, r.jsxs)("div", {
                            className: "relative",
                            children: [(0, r.jsxs)("div", {
                                className: "flex flex-row p-1 ml-auto border rounded cursor-pointer group top-2 right-2 w-fit border-borderBounds hover:border-accentOpacity-8",
                                onClick: () => {
                                    t(o ? "usd" : "eth")
                                },
                                children: [(0, r.jsx)(c.kd, {
                                    className: "w-3.5 h-3.5 group-hover:text-tertiaryFg ".concat(o ? "text-primaryFg" : "text-disabledFg")
                                }), (0, r.jsx)(C.Z, {
                                    className: "w-3.5 h-3.5 group-hover:text-tertiaryFg ".concat(o ? "text-disabledFg" : "text-primaryFg")
                                })]
                            }), (0, r.jsx)("div", {
                                className: "h-[225px] w-[225px]",
                                children: (0, r.jsx)(c.mU, {
                                    data: b,
                                    label: a,
                                    subLabel: n,
                                    labelSize: T
                                })
                            })]
                        })
                    })]
                })
            }
            var P = o(3412),
                D = JSON.parse('[{"version":"1.0.0","hash":"4fd71042fcf072aa168698d24c080a44875d005bc3a6e8c25e7c0f8b36feffcc","totalHash":"0x589c6748846bd11b10ed820a90b24c804d62583a0691973b2f77e38b65411ac4","lastRevised":{"terms":"2023-04-14","privacy":"2023-04-14"}},{"version":"1.0.1","hash":"1ba3798cf4a89c86d1d17d35eded34280433ee33834684881642feb3b7004da5","totalHash":"0x589c6748846bd11b10ed820a90b24c804d62583a0691973b2f77e38b65411ac4","lastRevised":{"terms":"2023-06-13","privacy":"2023-04-14"}},{"version":"1.0.2","hash":"52e6d619290b90882003795e2e8380333c9dbe18d4925f06407a08996927259d","totalHash":"0x20ab28662e4f82b3e516c8390d5ba89d12de521df2df38983fa1899e32536519","lastRevised":{"terms":"2023-06-14","privacy":"2023-04-14"}},{"version":"1.0.3","hash":"9762c53c573bcb53b3ff8f9a8b5b67b1394e73b51593d92fa7e7a4697d8232b1","totalHash":"0x22cb12d99203c285e54de5624939bff73aa0440eebb8c69e738fecb22beee2fb","lastRevised":{"terms":"2023-08-23","privacy":"2023-04-14"}}]');
            let Y = e => {
                let t = localStorage.getItem("userTerms");
                if (t) {
                    let o = JSON.parse(t);
                    o.push(e), localStorage.setItem("userTerms", JSON.stringify(o));
                    return
                }
                localStorage.setItem("userTerms", JSON.stringify([e]))
            };
            var U = () => {
                    let {
                        connectedWalletAddress: e,
                        addressAccess: t,
                        isConnected: o
                    } = (0, h.Z)(), [a, r] = (0, s.useState)(!1), [n, l] = (0, s.useState)(!0), [c, d] = (0, s.useState)(!1), u = i.h.userAgreement.getUserAgreement.useQuery({
                        address: e
                    }, {
                        enabled: !!o && !!e
                    }), y = i.h.userAgreement.saveUserAgreement.useMutation(), m = async () => {
                        let {
                            data: t,
                            isSuccess: o
                        } = await u.refetch();
                        return t && o && t.signedTerms && 0 !== t.signedTerms.length ? !!t.signedTerms.find(e => e.hash === D[D.length - 1].totalHash) : (() => {
                            let t = localStorage.getItem("userTerms");
                            if (t) {
                                let o = JSON.parse(t).find(t => t.userAddress === e);
                                if (o) return d(!0), o.signedTerms.hash === D[D.length - 1].totalHash
                            }
                            return !1
                        })()
                    };
                    return (0, s.useEffect)(() => {
                        if (o && "deny" === t.data) {
                            r(!1);
                            return
                        }
                        r(!0), o && m().then(e => {
                            l(e)
                        })
                    }, [e, o, t.data]), (0, s.useEffect)(() => {
                        if (c) {
                            let t = JSON.parse(localStorage.getItem("userTerms")).find(t => t.userAddress === e);
                            t && t.signedTerms.hash === D[D.length - 1].totalHash && y.mutate(t), d(!1)
                        }
                    }, [c]), {
                        access: a,
                        isTermsSigned: n,
                        setIsTermsSigned: l,
                        cacheSignature: Y,
                        storeUserTerms: y
                    }
                },
                H = o(17225),
                M = o(75403);

            function F() {
                return (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(M.ZP, {
                        options: {
                            overrides: {
                                p: {
                                    props: {
                                        className: "gap-4"
                                    }
                                }
                            }
                        },
                        children: '\n\nLast Revised on August 23, 2023\n\n\nThese Terms of Service (these "Terms") explain the terms and conditions by which you may access and use our website, www.eigenlayer.xyz (the "Website"), operated by or on behalf of Layr Labs, Inc. ("Company", "we" or "us"), our App (as defined below), our EigenLayer App testnet ("Testnet"), our application programming interfaces ("APIs"), our research forum available at [research.eigenlayer.xyz](http://research.eigenlayer.xyz) ("Research Forum") and any other Services provided by the Company, including any related content, tools, documentation, features and functionality which are collectively referred to herein as the "Services".\xa0\n\nThese Terms govern your access to and use of the Services.\xa0 Please read these Terms carefully, as they include important information about your legal rights. By accessing and/or using the Services, you are agreeing to these Terms. If you do not understand or agree to these Terms, please do not use the Services.\n\nFor purposes of these Terms, "you" and "your" means you as the user of the Services. If you use the Services on behalf of a company or other entity then "you" includes you and that entity, and you represent and warrant that (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (b) you agree to these Terms on the entity\'s behalf.\n\nSECTION 9 CONTAINS AN ARBITRATION CLAUSE AND CLASS ACTION WAIVER. BY AGREEING TO THESE TERMS, YOU AGREE (A) TO RESOLVE ALL DISPUTES (WITH LIMITED EXCEPTION) RELATED TO THE COMPANY\'S SERVICES AND/OR PRODUCTS THROUGH BINDING INDIVIDUAL ARBITRATION, WHICH MEANS THAT YOU WAIVE ANY RIGHT TO HAVE THOSE DISPUTES DECIDED BY A JUDGE OR JURY, AND (B) TO WAIVE YOUR RIGHT TO PARTICIPATE IN CLASS ACTIONS, CLASS ARBITRATIONS, OR REPRESENTATIVE ACTIONS, AS SET FORTH BELOW. YOU HAVE THE RIGHT TO OPT-OUT OF THE ARBITRATION CLAUSE AND THE CLASS ACTION WAIVER AS EXPLAINED IN SECTION 9.\n\n[1.  the services  1](https://docs.eigenlayer.xyz/overview/terms-of-service#1.-the-services)\n\n[2.  Who May Use the Services; User Accounts  3](https://docs.eigenlayer.xyz/overview/terms-of-service#who-may-use-the-services-user-accounts)\n\n[3.  The Testnet  3](https://docs.eigenlayer.xyz/overview/terms-of-service#the-testnet)\n\n[4.  Location of Our Privacy Policy AND OTHER POLICIES  4](https://docs.eigenlayer.xyz/overview/terms-of-service#location-of-our-privacy-policy-and-other-policies)\n\n[5.  Rights We Grant You  4](https://docs.eigenlayer.xyz/overview/terms-of-service#rights-we-grant-you)\n\n[6.  Ownership and Content  6](https://docs.eigenlayer.xyz/overview/terms-of-service#ownership-and-content)\n\n[7.  Third Party Services and Materials  8](https://docs.eigenlayer.xyz/overview/terms-of-service#third-party-services-and-materials)\n\n[8.  Disclaimers, Limitations of Liability and Indemnification  8](https://docs.eigenlayer.xyz/overview/terms-of-service#disclaimers-limitations-of-liability-and-indemnification)\n\n[9.  ARBITRATION AND CLASS ACTION WAIVER  11](https://docs.eigenlayer.xyz/overview/terms-of-service#arbitration-and-class-action-waiver)\n\n[10.  Additional Provisions  13](https://docs.eigenlayer.xyz/overview/terms-of-service#additional-provisions)\n\n1.  the services\n    ============\n\n1.  Services.\xa0 The Services provide a front-end interface (the "App") that display data that facilitates users interfacing with a set of decentralized open-sourced smart contracts that allow for the restaking of digital assets, such as Ether (ETH). These underlying smart contracts are referred to herein as the "Protocol".\xa0 The Services also provide documentation available at [docs.eigenlayer.xyz](https://docs.eigenlayer.xyz) related to the App and Protocol ("Documentation"). The Protocol itself is not part of the Services, and your use of the Protocol is entirely at your own risk. Additionally, the third party technologies required to be used or interacted with in order to interact with the Protocol, including but not limited to a Wallet (as defined below, and collectively the "Third-Party Tools"), are not part of the Services, and your use of such Third-Party Tools are entirely at your own risk. The App is separate and distinct from the Protocol and any Third-Party Tools and is one such front-end interface but is not essential to accessing the Protocol. The App merely displays blockchain data and provides a web application that reduces the complexity of using the Third-Party Tools to or otherwise accessing the Protocol. All activity on the Protocol is run by permissionless smart contracts, and other developers are free to create their own interfaces to function with the Protocol.\xa0\xa0\n    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n2.  Wallets. To use certain of the Services you may need to link a third-party digital wallet ("Wallet") with the Services. By using a Wallet in connection with the Services, you agree that you are using the Wallet under the terms and conditions of the applicable third-party provider of such Wallet. Wallets are not associated with, maintained by, supported by or affiliated with the Company. You acknowledge and agree that we are not party to any transactions conducted while accessing our App, and we do not have possession, custody or control over any digital assets appearing on the Services. When you interact with the App, you retain control over your digital assets at all times. The Company accepts no responsibility or liability to you in connection with your use of a Wallet, and makes no representations and warranties regarding how the Services will operate with any specific Wallet. The private keys and/or seed phrases necessary to access the assets held in a Wallet are not held by the Company. The Company has no ability to help you access or recover your private keys and/or seed phrases for your Wallet, so please keep them in a safe place.\xa0\n    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n3.  Updates; Monitoring. We may make any improvement, modifications or updates to the Services, including but not limited to changes and updates to the underlying software, infrastructure, security protocols, technical configurations or service features (the "Updates") from time to time. Your continued access and use of the Services are subject to such Updates and you shall accept any patches, system upgrades, bug fixes, feature modifications, or other maintenance work that arise out of such Updates.\xa0 We are not liable for any failure by you to accept and use such Updates in the manner specified or required by us.\xa0 Although the Company is not obligated to monitor access to or participation in the Services, it has the right to do so for the purpose of operating the Services, to ensure compliance with the Terms and to comply with applicable law or other legal requirements.\n    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n4.  Fees. The Company may charge or pass through fees for some or part of the Services we make available to you, including transaction or processing fees, blockchain gas or similar network fees.\xa0 We will disclose the amount of fees we will charge or pass through to you for the applicable Service at the time you access, use or otherwise transact with the Services. Although we will attempt to provide accurate fee information, any such information reflects our estimate of fees, which may vary from the fees actually paid to use the Services and interact with the applicable blockchain with which the Services are compatible. Additionally, your external Wallet provider may impose a fee to transact on the Services. We are not responsible for any fees charged by a third party. All transactions processed through the Services are non-refundable. You will be responsible for paying any and all taxes, duties and assessments now or hereafter claimed or imposed by any governmental authority associated with your use of the Services. In certain cases, your transactions through the Services may not be successful due to an error with the blockchain or the Wallet. We accept no responsibility or liability to you for any such failed transactions, or any transaction or gas fees that may be incurred by you in connection with such failed transactions. You acknowledge and agree that all information you provide with respect to transactions on the Services, including, without limitation, credit card, bank account, PayPal or other payment information is accurate, current and complete, and you have the legal right to use such payment method.\n    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n3.  Who May Use the Services[; User Accounts]\n    =========================================\n\nYou must be 18 years of age or older and not be a Prohibited Person to use the Services.  A "Prohibited Person" is any person or entity that is (a) listed on any U.S. Government list of prohibited or restricted parties, including the U.S. Treasury Department\'s list of Specially Designated Nationals or the U.S. Department of Commerce Denied Person\'s List or Entity List, (b) located or organized in any U.S. embargoed countries or any country that has been designated by the U.S. Government as a "terrorist supporting", or (c) owned or controlled by such persons or entities listed in (a)-(b).\xa0 You acknowledge and agree that you are solely responsible for complying with all applicable laws of the jurisdiction you are located or accessing the Services from in connection with your use of the Services.\xa0 By using the Services, you represent and warrant that you meet these requirements and will not be using the Services for any illegal activity or to engage in the prohibited activities in Section 5.3.\n\nTo use certain of the Services, such as the Research Forum, you need to create an account or link another account ("Account"). You agree to provide us with accurate, complete and updated information for your Account. You are solely responsible for any activity on your Account and maintaining the confidentiality and security of your password. We are not liable for any acts or omissions by you in connection with your Account. You must immediately notify us at <admin@layrlabs.org> if you know or have any reason to suspect that your Account or password have been stolen, misappropriated or otherwise compromised, or in case of any actual or suspected unauthorized use of your Account. You agree not to create any Account if we have previously removed yours, or we previously banned you from any of our Services, unless we provide written consent otherwise.\n\nWe may require you to provide additional information and documents regarding your use of the Services, including at the request of any competent authority or in case of application of any applicable law or regulation, including laws related to anti-money laundering or for counteracting financing of terrorism. We may also require you to provide additional information or documents in cases where we have reason to believe: (i) that your Wallet is being used for illegal money laundering or for any other illegal activity; or (ii) you have concealed or reported false identification information or other details.\xa0\xa0\n\n1.  The Testnet\n    ===========\n\n1.  Purpose and Participation.\xa0 The Testnet is designed to demonstrate the functionality and features of the App (or any portion thereof) and to improve participant experiences prior to the App\'s launch. YOUR PARTICIPATION IN THE TESTNET IS ENTIRELY VOLUNTARY, BUT IF YOU ARE PARTICIPATING IN THE TESTNET, YOU MUST STRICTLY ADHERE TO THESE TERMS. We make no representation or warranty that the Testnet will accurately or completely simulate, duplicate or replicate the App.\xa0\n    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n2.  Duration. The availability of the Testnet will commence on the date prescribed by the Company and continue until terminated by the Company in its sole discretion.\xa0 Notwithstanding any other information provided by the Company regarding the Testnet (including on the Website, blog posts or through other communications (such as forums, Telegram, Github, Discord, or other channels)), the Company may change, discontinue, or terminate, temporarily or permanently, all or any part of the Testnet, at any time and without notice, at its sole discretion (including prior to providing any incentives or rewards).\xa0 The Company may retain control or upgradeability over certain aspects of the Testnet that it will not retain on Mainnet.\n    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n3.  The Testnet Eligibility.\xa0 Your participation in the Testnet (or any portion thereof) may be subject to eligibility criteria determined by the Company in its sole discretion (including, without limitation, geographical distribution and applicant reputation).\xa0 By applying or registering, there is no promise or guarantee that you will be able to participate in the Testnet.\xa0 Notwithstanding any other information provided by the Company regarding the Testnet (including on the Website, blog posts or through other communications (such as forums, Telegram, Github, Discord, or other channels)), the Company may change or modify at any time the number of participants eligible to participate in the Testnet or the requirements of the Testnet and terminate any participant\'s participation in the Testnet at any time.\xa0 The Testnet may operate in certain phases.\xa0 Your selection or participation in any one phase of the Testnet does not imply that you will be selected for any other phases of the Testnet. The Company reserves the right to block your access to the Testnet at any time in its sole discretion.\xa0\n    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n4.  No Monetary Value.\xa0 In your use of the Testnet, you may interact with or transfer certain cryptocurrencies or other digital assets on the Testnet ("Testnet Tokens"), such as Testnet Tokens obtained through a faucet. Testnet Tokens are not, and shall never convert to or accrue to become any other tokens or virtual assets. Testnet Tokens are virtual items with no monetary value. Testnet Tokens do not constitute any currency or property of any type and are not redeemable, refundable, or eligible for any fiat or digital currency or anything else of value. Testnet Tokens are not transferable between users outside of the Testnet, and you may not attempt to sell, trade, or transfer any Testnet Tokens outside of the Testnet, or obtain any manner of credit using any Testnet Tokens. Any attempt to sell, trade, or transfer any Testnet Tokens outside of the Testnet will be null and void. Testnet Tokens will not be converted into any future rewards offered by the Company.\n    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n3.  Location of Our Privacy Policy AND OTHER POLICIES\n    =================================================\n\n1.  Privacy Policy. Our Privacy Policy describes how we handle the information you provide to us when you use the Services. For an explanation of our privacy practices, please visit our Privacy Policy located at <https://docs.eigenlayer.xyz/overview/eigenlayer-privacy-policy>.\xa0\n    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n2.  Research Forum Community Guidelines.\xa0 Our Research Forum Community Guidelines available at <https://research.eigenlayer.xyz/t/welcome-to-eigenlayer-research/4> describe our rules of behavior and engagement when you use the Research Forum, which are intended to foster a positive and engaging community. All content that you upload or share to the Research Forum must comply with the Research Forum Community Guidelines.\n    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n5.  Rights We Grant You\n    ===================\n\n1.  Right to Use Services. We hereby permit you to use the Services for your personal non-commercial use only, provided that you comply with these Terms in connection with all such use.\xa0 If any software, content or other materials owned or controlled by us are distributed to you as part of your use of the Services, we hereby grant you, a personal, non-assignable, non-sublicensable, non-transferrable, and non-exclusive right and license to access and display such software, content and materials provided to you as part of the Services, in each case for the sole purpose of enabling you to use the Services as permitted by these Terms. Your access and use of the Services may be interrupted from time to time for any of several reasons, including, without limitation, the malfunction of equipment, periodic updating, maintenance or repair of the Service or other actions that Company, in its sole discretion, may elect to take.\n    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n2.  Right to Use Our APIs. Subject to these Terms, we hereby grant you a non-exclusive, non-transferable, non-sublicensable, worldwide, revocable right and license to use our APIs for the limited purposes set forth in the documentation for the Services.\xa0 Your use of our APIs must comply with the technical documentation, usage guidelines call volume limits, and other documentation maintained at <https://docs.eigenlayer.xyz/> or such other location we may designate from time to time.\xa0 We may terminate your right to use the API from time to time at any time.\n    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n3.  Restrictions On Your Use of the Services. You may not do any of the following in connection with your use of the Services, unless applicable laws or regulations prohibit these restrictions or you have our written permission to do so:\n    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n1.  ### download, modify, copy, distribute, transmit, display, perform, reproduce, duplicate, publish, license, create derivative works from, or offer for sale any information contained on, or obtained from or through, the Services, except for temporary files that are automatically cached by your web browser for display purposes, or as otherwise expressly permitted in these Terms;\n\n2.  ### duplicate, decompile, reverse engineer, disassemble or decode the Services (including any underlying idea or algorithm), or attempt to do any of the same;\n\n3.  ### use, reproduce or remove any copyright, trademark, service mark, trade name, slogan, logo, image, or other proprietary notation displayed on or through the Services;\n\n4.  ### use automation software (bots), hacks, modifications (mods) or any other unauthorized third-party software designed to modify the Services;\n\n5.  ### exploit the Services for any commercial purpose, including without limitation communicating or facilitating any commercial advertisement or solicitation;\xa0\n\n6.  ### access or use the Services in any manner that could disable, overburden, damage, disrupt or impair the Services or interfere with any other party\'s access to or use of the Services or use any device, software or routine that causes the same;\n\n7.  ### attempt to gain unauthorized access to, interfere with, damage or disrupt the Services, accounts registered to other users, or the computer systems, wallets, accounts, protocols or networks connected to the Services;\n\n8.  ### circumvent, remove, alter, deactivate, degrade or thwart any technological measure or content protections of the Services or the computer systems, wallets, accounts, protocols or networks connected to the Services;\n\n9.  ### use any robot, spider, crawlers or other automatic device, process, software or queries that intercepts, "mines," scrapes or otherwise accesses the Services to monitor, extract, copy or collect information or data from or through the Services, or engage in any manual process to do the same;\xa0\n\n10. ### introduce any viruses, trojan horses, worms, logic bombs or other materials that are malicious or technologically harmful into our systems;\n\n11. ### submit, transmit, display, perform, post or store any content that is inaccurate, unlawful, defamatory, obscene, lewd, lascivious, filthy, excessively violent, pornographic, invasive of privacy or publicity rights, harassing, threatening, abusive, inflammatory, harmful, hateful, cruel or insensitive, deceptive, or otherwise objectionable, use the Services for illegal, harassing, bullying, unethical or disruptive purposes, or otherwise use the Services in a manner that is obscene, lewd, lascivious, filthy, excessively violent, harassing, harmful, hateful, cruel or insensitive, deceptive, threatening, abusive, inflammatory, pornographic, inciting, organizing, promoting or facilitating violence or criminal or harmful activities, defamatory, obscene or otherwise objectionable;\n\n12. ### violate any applicable law or regulation in connection with your access to or use of the Services;  or\n\n13. ### access or use the Services in any way not expressly permitted by these Terms.\xa0\xa0\n\n5.  Interactions with Other Users on the Services. You are responsible for your interactions with other users on or through the Services. While we reserve the right to monitor interactions between users, we are not obligated to do so, and we cannot be held liable for your interactions with other users, or for any user\'s actions or inactions. If you have a dispute with one or more users, you release us (and our affiliates and subsidiaries, and our and their respective officers, directors, employees and agents) from claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes. In entering into this release you expressly waive any protections (whether statutory or otherwise) that would otherwise limit the coverage of this release to include only those claims which you may know or suspect to exist in your favor at the time of agreeing to this release.\xa0\xa0\n    ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n7.  Ownership and Content\xa0\n    ======================\n\n1.  Ownership of the Services. The Services, including their "look and feel" (e.g., text, graphics, images, logos), proprietary content, information and other materials, are protected under copyright, trademark and other intellectual property laws. You agree that the Company and/or its licensors own all right, title and interest in and to the Services (including any and all intellectual property rights therein) and you agree not to take any action(s) inconsistent with such ownership interests.\xa0 We and our licensors reserve all rights in connection with the Services and its content, including, without limitation, the exclusive right to create derivative works.\xa0\n    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n2.  Ownership of Trademarks. The Company\'s name, trademarks and logos and all related names, logos, product and service names, designs and slogans are trademarks of the Company or its affiliates or licensors.\xa0 Other names, logos, product and service names, designs and slogans that appear on the Services are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by us.\xa0\xa0\n    ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n3.  Ownership of Feedback. We welcome feedback, bug reports, comments and suggestions for improvements to the Services ("Feedback"). You acknowledge and expressly agree that any contribution of Feedback does not and will not give or grant you any right, title or interest in the Services or in any such Feedback. All Feedback becomes the sole and exclusive property of the Company, and the Company may use and disclose Feedback in any manner and for any purpose whatsoever without further notice or compensation to you and without retention by you of any proprietary or other right or claim. You hereby assign to the Company any and all right, title and interest (including, but not limited to, any patent, copyright, trade secret, trademark, show-how, know-how, moral rights and any and all other intellectual property right) that you may have in and to any and all Feedback.\xa0\n    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n4.  Your Content License Grant.\xa0 In connection with your use of the Services, you may be able to post, upload, or submit content to be made available through the Services ("Your Content"), including on our Research Forum.\xa0 In order to operate the Service, we must obtain from you certain license rights in Your Content so that actions we take in operating the Service are not considered legal violations.\xa0 Accordingly, by using the Service and uploading Your Content, you grant us a license to access, use, host, cache, store, reproduce, transmit, display, publish, distribute, and modify (for technical purposes, e.g., making sure content is viewable on smartphones as well as computers and other devices) Your Content but solely as required to be able to operate, improve and provide the Services.\xa0 You agree that these rights and licenses are royalty free, transferable, sub-licensable, worldwide and irrevocable (for so long as Your Content is stored with us), and include a right for us to make Your Content available to, and pass these rights along to, others with whom we have contractual relationships related to the provision of the Services, solely for the purpose of providing such Services, and to otherwise permit access to or disclose Your Content to third parties if we determine such access is necessary to comply with our legal obligations.\xa0 As part of the foregoing license grant you agree that the other users of the Services shall have the right to comment on and/or tag Your Content and/or to use, publish, display, modify or include a copy of Your Content as part of their own use of the Services; except that the foregoing shall not apply to any of Your Content that you post privately for non-public display on the Services. To the fullest extent permitted by applicable law, the Company reserves the right, and has absolute discretion, to remove, screen, edit, or delete any of Your Content at any time, for any reason, and without notice. By posting or submitting Your Content through the Services, you represent and warrant that you have, or have obtained, all rights, licenses, consents, permissions, power and/or authority necessary to grant the rights granted herein for Your Content. You agree that Your Content will not contain material subject to copyright or other proprietary rights, unless you have the necessary permission or are otherwise legally entitled to post the material and to grant us the license described above.\n    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n5.  Notice of Infringement -- DMCA (Copyright) Policy\n    ------------------------------------------------\n\nIf you believe that any text, graphics, photos, audio, videos or other materials or works uploaded, downloaded or appearing on the Services have been copied in a way that constitutes copyright infringement, you may submit a notification to our copyright agent in accordance with 17 USC 512(c) of the Digital Millennium Copyright Act (the "DMCA"), by providing the following information in writing:\n\n1.  ### identification of the copyrighted work that is claimed to be infringed;\n\n2.  ### identification of the allegedly infringing material that is requested to be removed, including a description of where it is located on the Service;\n\n3.  ### information for our copyright agent to contact you, such as an address, telephone number and e-mail address;\n\n4.  ### a statement that you have a good faith belief that the identified, allegedly infringing use is not authorized by the copyright owners, its agent or the law;\xa0\n\n5.  ### a statement that the information above is accurate, and under penalty of perjury, that you are the copyright owner or the authorized person to act on behalf of the copyright owner; and\n\n6.  ### the physical or electronic signature of a person authorized to act on behalf of the owner of the copyright or of an exclusive right that is allegedly infringed.\n\nNotices of copyright infringement claims should be sent by mail to: Layr Labs, Inc., Attn: Joseph Cisewski, General Counsel, 1100 N.E. Campus Parkway, Suite 200, Seattle, Washington 98105; or by e-mail to <notices@eigenlabs.org>.\xa0 It is our policy, in appropriate circumstances and at our discretion, to disable or terminate the accounts of users who repeatedly infringe copyrights or intellectual property rights of others.\n\nA user of the Services who has uploaded or posted materials identified as infringing as described above may supply a counter-notification pursuant to sections 512(g)(2) and (3) of the DMCA. When we receive a counter-notification, we may reinstate the posts or material in question, in our sole discretion.  To file a counter-notification with us, you must provide a written communication (by fax or regular mail or by email) that sets forth all of the items required by sections 512(g)(2) and (3) of the DMCA. Please note that you will be liable for damages if you materially misrepresent that content or an activity is not infringing the copyrights of others.\n------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n1.  Third Party Services and Materials\n    ==================================\n\n1.  Third Party Services and Materials. The Services may allow you to browse the availability of\xa0 certain operators that offer to run validated service software modules on your behalf in connection with your restaked digital assets ( "Third-Party Services") and may display, include or make available content, data, information, applications or materials from third parties ("Third-Party Materials") or provide links to certain third party websites.\xa0 The Company does not endorse any Third-Party Materials or the use of any provider of any Third-Party Services. You agree that your access and use of such Third-Party Services and Third-Party Materials is governed solely by the terms and conditions of such Third-Party Services and Third-Party Materials, as applicable. The Company is not responsible or liable for, and make no representations as to any aspect of such Third-Party Materials and Third-Party Services, including, without limitation, their content or the manner in which they handle, protect, manage or process data or any interaction between you and the provider of such Third-Party Services. The Company is not responsible for examining or evaluating the content, accuracy, completeness, availability, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect of such Third Party Services or Third Party Materials or websites. You irrevocably waive any claim against the Company with respect to such Third-Party Services and Third-Party Materials. We are not liable for any damage or loss caused or alleged to be caused by or in connection with your enablement, access or use of any such Third-Party Services or Third-Party Materials, or your reliance on the privacy practices, data security processes or other policies of such Third-Party Services. Third-Party Services, Third-Party Materials and links to other websites are provided solely as a convenience to you.\xa0\n    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n3.  Disclaimers, Limitations of Liability and Indemnification\n    =========================================================\n\n1.  Disclaimers. Your access to and use of the Services and the Protocol are at your own risk. You understand and agree that the Services are provided to you on an "AS IS" and "AS AVAILABLE" basis. Without limiting the foregoing, to the maximum extent permitted under applicable law, the Company, its parents, affiliates, related companies, officers, directors, employees, agents, representatives, partners and licensors (the "Company Entities") and MultiSig Committee Members (as defined below) DISCLAIM ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS, IMPLIED OR STATUTORY, INCLUDING WITHOUT LIMITATION ANY WARRANTIES RELATING TO TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, USAGE, QUALITY, PERFORMANCE, SUITABILITY OR FITNESS OF THE SERVICES AND THE PROTOCOL FOR ANY PARTICULAR PURPOSE, OR AS TO THE ACCURACY, QUALITY, SEQUENCE, RELIABILITY, WORKMANSHIP OR TECHNICAL CODING THEREOF, OR THE ABSENCE OF ANY DEFECTS THEREIN WHETHER LATENT OR PATENT. The Company Entities and MultiSig Committee Members make no warranty or representation and disclaim all responsibility and liability for: (a) the completeness, accuracy, availability, timeliness, security or reliability of the Services, including the Research Forum, and the Protocol; (b) any harm to your computer system, loss of data, or other harm that results from your access to or use of the Services or the Protocol; (c) the operation or compatibility with any other application or any particular system or device, including any Wallets; (d) whether the Services or the Protocol will meet your requirements or be available on an uninterrupted, secure or error-free basis; and (e) the deletion of, or the failure to store or transmit, Your Content and other communications maintained by the Services. No advice or information, whether oral or written, obtained from the Company Entities or the MultiSig Committee Members or through the Services, including the Research Forum, will create any warranty or representation not expressly made herein. You should not rely on the Services, including the Research Forum, for advice of any kind, including legal, tax, investment, financial or other professional advice.\xa0\n    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n2.  Limitations of Liability. TO THE EXTENT NOT PROHIBITED BY LAW, YOU AGREE THAT IN NO EVENT WILL THE COMPANY ENTITIES AND MULTISIG COMMITTEE MEMBERS BE LIABLE (A) FOR DAMAGES OF ANY KIND, INCLUDING DIRECT, INDIRECT, SPECIAL, EXEMPLARY, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, LOSS OF USE, DATA OR PROFITS, BUSINESS INTERRUPTION OR ANY OTHER DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE SERVICES), HOWEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, WHETHER UNDER THESE TERMS OR OTHERWISE ARISING IN ANY WAY IN CONNECTION WITH THE SERVICES OR THESE TERMS AND WHETHER IN CONTRACT, STRICT LIABILITY OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) EVEN IF THE COMPANY ENTITIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE, OR (B) FOR ANY OTHER CLAIM, DEMAND OR DAMAGES WHATSOEVER RESULTING FROM OR ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE DELIVERY, USE OR PERFORMANCE OF THE SERVICES.\xa0 THE COMPANY ENTITIES\' AND MULTISIG COMMITTEE MEMBERS\' TOTAL LIABILITY TO YOU FOR ANY DAMAGES FINALLY AWARDED SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100.00). SOME JURISDICTIONS (SUCH AS THE STATE OF NEW JERSEY) DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE EXCLUSION OR LIMITATION MAY NOT APPLY TO YOU.\xa0\n    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n3.  Assumption of Risks.\xa0\n    ---------------------\n\n1.  ### By using the Services, you represent that you have sufficient knowledge and experience in business and financial matters, including a sufficient understanding of blockchain technologies, cryptocurrencies\xa0 and other digital assets, storage mechanisms (such as Wallets), and blockchain-based software systems to be able to assess and evaluate the risks and benefits of the Services contemplated hereunder, and will bear the risks thereof, including loss of all amounts paid, and the risk that the cryptocurrencies and other digital assets may have little or no value. You acknowledge and agree that there are risks associated with purchasing and holding cryptocurrency, using blockchain technology and staking cryptocurrency. These include, but are not limited to, risk of losing access to cryptocurrency due to slashing, loss of private key(s), custodial error or purchaser error, risk of mining or blockchain attacks, risk of hacking and security weaknesses, risk of unfavorable regulatory intervention in one or more jurisdictions, risk related to token taxation, risk of personal information disclosure, risk of uninsured losses, volatility risks, and unanticipated risks. You acknowledge that cryptocurrencies and other similar digital assets are neither (i) deposits of or guaranteed by a bank nor (ii) insured by the FDIC or by any other governmental agency.\xa0\n\n2.  ### There are certain multi-signature crypto wallets (the "MultiSigs", and the signatories to such MultiSigs, the "MultiSig Committee Members") that have certain controls related to the Protocol, that may include, but are not limited to, the ability to pause certain functionality of the Protocol, reverse or pause slashing, implement or influence upgrades to the Protocol (or any aspect thereof) and certain other controls of the functionality of the Protocol as described in the documentation or in public communications made by us.\xa0 Certain MultiSigs may be controlled by us or MultiSig Committee Members that are employed or engaged by us, and certain other MultiSigs will be controlled partially or entirely by MultiSig Committee Members that are unaffiliated third parties over which we have no or limited control. \xa0We will not be able to control the actions of such MultiSig Committee Members if they are not employed or engaged by us and thus certain MultiSigs will be outside of our control.\xa0\n\n3.  ### The regulatory regime governing blockchain technologies, cryptocurrencies and other digital assets is uncertain, and new regulations or policies may materially adversely affect the potential utility or value of such cryptocurrencies and digital assets. There also exists the risks of new taxation of the purchase or sale of cryptocurrencies and other digital assets.\n\n4.  ### We cannot control how third-party exchange platforms quote or value cryptocurrencies and other digital assets and we expressly deny and disclaim any liability to you and deny any obligations to indemnify or hold you harmless for any losses you may incur as a result of fluctuations in the value of cryptocurrencies or other digital assets.\n\n5.  ### Smart contracts execute automatically when certain conditions are met. Since smart contracts typically cannot be stopped or reversed, vulnerabilities in their programming and design or other vulnerabilities that may arise due to hacking or other security incidents can have adverse effects to restaked assets, including but not limited to significant volatility and risk of loss.\xa0\xa0\n\n6.  ### Certain protocols and networks subject staked assets to slashing upon certain conditions, including, but not limited to, if a validator engages in such as if a validator engages in harmful or suspicious behavior or incorrectly validates a transaction, and we expressly deny and disclaim any liability to you and deny any obligations to indemnify or hold you harmless for any losses you may incur as a result of slashing.\xa0\n\n7.  ### Certain protocols and networks require that a certain amount of staked assets be locked for a certain period of time while staking, and withdrawal of staked assets may be delayed.\xa0 We do not guarantee the security or functionality of any third-party protocol, software or technology intended to be compatible with restaked assets.\n\n5.  Indemnification. By entering into these Terms and accessing or using the Services, you agree that you shall defend, indemnify and hold the Company Entities and MultiSig Committee Members harmless from and against any and all claims, costs, damages, losses, liabilities and expenses (including attorneys\' fees and costs) incurred by the Company Entities arising out of or in connection with: (a) your violation or breach of any term of these Terms or any applicable law or regulation; (b) your violation of any rights of any third party; (c) your misuse of the Services; (d) your negligence or wilful misconduct; or (e) Your Content. If you are obligated to indemnify any Company Entity hereunder, then you agree that Company (or, at its discretion, the applicable Company Entity) will have the right, in its sole discretion, to control any action or proceeding and to determine whether Company wishes to settle, and if so, on what terms, and you agree to fully cooperate with Company in the defense or settlement of such claim.\xa0\n    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n6.  Third Party Beneficiaries. You and the Company acknowledge and agree that the Company Entities (other than the Company) and the MultiSig Committee Members are third party beneficiaries of these Terms, including under Section 8 and 9.\n    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n5.  ARBITRATION AND CLASS ACTION WAIVER\n    ===================================\n\n1.  PLEASE READ THIS SECTION CAREFULLY -- IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT AND TO HAVE A JURY HEAR YOUR CLAIMS. IT CONTAINS PROCEDURES FOR MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.\n    ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n2.  Informal Process First.\xa0 You and the Company agree that in the event of any dispute between you and the Company Entities or the MultiSig Committee Members, either party will first contact the other party and make a good faith sustained effort to resolve the dispute before resorting to more formal means of resolution, including without limitation, any court action, after first allowing the receiving party 30 days in which to respond.\xa0 Both you and the Company agree that this dispute resolution procedure is a condition precedent which must be satisfied before initiating any arbitration against you, any Company Entity or any MultiSig Committee Members, as applicable.\n    ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n3.  Arbitration Agreement and Class Action Waiver.\xa0 After the informal dispute resolution process, any remaining dispute, controversy, or claim (collectively, "Claim") relating in any way to the Services, including the App,\xa0 any use or access or lack of access thereto, and any other usage of the Protocol even if interacted with outside of the Services or App, will be resolved by arbitration, including threshold questions of arbitrability of the Claim. You and the Company agree that any Claim will be settled by final and binding arbitration, using the English language, administered by JAMS  under its Comprehensive Arbitration Rules and Procedures (the "JAMS Rules") then in effect (those rules are deemed to be incorporated by reference into this section, and as of the date of these Terms).\xa0 Because your contract with the Company, these Terms, and this Arbitration Agreement concern interstate commerce, the Federal Arbitration Act ("FAA") governs the arbitrability of all disputes. However, the arbitrator will apply applicable substantive law consistent with the FAA and the applicable statute of limitations or condition precedent to suit. Arbitration will be handled by a sole arbitrator in accordance with the JAMS Rules. Judgment on the arbitration award may be entered in any court that has jurisdiction. Any arbitration under these Terms will take place on an individual basis -- class arbitrations and class actions are not permitted. You understand that by agreeing to these Terms, you and the Company are each waiving the right to trial by jury or to participate in a class action or class arbitration.\n    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n4.  Exceptions. Notwithstanding the foregoing, you and the Company agree that the following types of disputes will be resolved in a court of proper jurisdiction: (i) disputes or claims within the jurisdiction of a small claims court consistent with the jurisdictional and dollar limits that may apply, as long as it is brought and maintained as an individual dispute and not as a class, representative, or consolidated action or proceeding; (ii) disputes or claims where the sole form of relief sought is injunctive relief (including public injunctive relief); or (iii) intellectual property disputes.\n    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n5.  Costs of Arbitration. Payment of all filing, administration, and arbitrator costs and expenses will be governed by the JAMS Rules, except that if you demonstrate that any such costs and expenses owed by you under those rules would be prohibitively more expensive than a court proceeding, the Company will pay the amount of any such costs and expenses that the arbitrator determines are necessary to prevent the arbitration from being prohibitively more expensive than a court proceeding (subject to possible reimbursement as set forth below).\xa0\n    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\nFees and costs may be awarded as provided pursuant to applicable law. If the arbitrator finds that either the substance of your claim or the relief sought in the Demand is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all fees will be governed by the JAMS rules. In that case, you agree to reimburse the Company for all monies previously disbursed by it that are otherwise your obligation to pay under the applicable rules. If you prevail in the arbitration and are awarded an amount that is less than the last written settlement amount offered by the Company before the arbitrator was appointed, the Company will pay you the amount it offered in settlement.\xa0 The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees or expenses at any time during the proceeding and upon request from either party made within fourteen (14) days of the arbitrator\'s ruling on the merits.\n----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n1.  Opt-Out. You have the right to opt-out and not be bound by the arbitration provisions set forth in these Terms by sending written notice of your decision to opt-out to admin@layrlabs.org. The notice must be sent to the Company within thirty (30) days of your first registering to use the Services or agreeing to these Terms; otherwise you shall be bound to arbitrate disputes on a non-class basis in accordance with these Terms. If you opt out of only the arbitration provisions, and not also the class action waiver, the class action waiver still applies.\xa0 You may not opt out of only the class action waiver and not also the arbitration provisions.\xa0 If you opt-out of these arbitration provisions, the Company also will not be bound by them.\n    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n2.  WAIVER OF RIGHT TO BRING CLASS ACTION AND REPRESENTATIVE CLAIMS. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AND THE COMPANY EACH AGREE THAT ANY PROCEEDING TO RESOLVE ANY DISPUTE, CLAIM OR CONTROVERSY WILL BE BROUGHT AND CONDUCTED ONLY IN THE RESPECTIVE PARTY\'S INDIVIDUAL CAPACITY AND NOT AS PART OF ANY CLASS (OR PURPORTED CLASS), CONSOLIDATED, MULTIPLE-PLAINTIFF, OR REPRESENTATIVE ACTION OR PROCEEDING ("CLASS ACTION").\xa0 YOU AND THE COMPANY AGREE TO WAIVE THE RIGHT TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS ACTION.\xa0 YOU AND THE COMPANY EXPRESSLY WAIVE ANY ABILITY TO MAINTAIN A CLASS ACTION IN ANY FORUM.\xa0 IF THE DISPUTE IS SUBJECT TO ARBITRATION, THE ARBITRATOR WILL NOT HAVE THE AUTHORITY TO COMBINE OR AGGREGATE CLAIMS, CONDUCT A CLASS ACTION, OR MAKE AN AWARD TO ANY PERSON OR ENTITY NOT A PARTY TO THE ARBITRATION.\xa0 FURTHER, YOU AND THE COMPANY AGREE THAT THE ARBITRATOR MAY NOT CONSOLIDATE PROCEEDINGS FOR MORE THAN ONE PERSON\'S CLAIMS, AND IT MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A CLASS ACTION.\xa0 FOR THE AVOIDANCE OF DOUBT, HOWEVER, YOU CAN SEEK PUBLIC INJUNCTIVE RELIEF TO THE EXTENT AUTHORIZED BY LAW AND CONSISTENT WITH THE EXCEPTIONS CLAUSE ABOVE.\xa0\n    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n1.  IF THIS CLASS ACTION WAIVER IS LIMITED, VOIDED, OR FOUND UNENFORCEABLE, THEN, UNLESS THE PARTIES MUTUALLY AGREE OTHERWISE, THE PARTIES\' AGREEMENT TO ARBITRATE SHALL BE NULL AND VOID WITH RESPECT TO SUCH PROCEEDING SO LONG AS THE PROCEEDING IS PERMITTED TO PROCEED AS A CLASS ACTION.\xa0 IF A COURT DECIDES THAT THE LIMITATIONS OF THIS PARAGRAPH ARE DEEMED INVALID OR UNENFORCEABLE, ANY PUTATIVE CLASS, PRIVATE ATTORNEY GENERAL OR CONSOLIDATED OR REPRESENTATIVE ACTION MUST BE BROUGHT IN A COURT OF PROPER JURISDICTION AND NOT IN ARBITRATION.\xa0\n    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n1.  Additional Provisions\n    =====================\n\n1.  Updating These Terms. We may modify these Terms from time to time in which case we will update the "Last Revised" date at the top of these Terms.\xa0 If we make changes that are material, we will use reasonable efforts to attempt to notify you, such as by e-mail and/or by placing a prominent notice on the first page of the Website. However, it is your sole responsibility to review these Terms from time to time to view any such changes.\xa0 The updated Terms will be effective as of the time of posting, or such later date as may be specified in the updated Terms. Your continued access or use of the Services after the modifications have become effective will be deemed your acceptance of the modified Terms. No amendment shall apply to a dispute for which an arbitration has been initiated prior to the change in Terms.\xa0\xa0\n    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n2.  Suspension; Termination. If you breach any of the provisions of these Terms, all licenses granted by the Company will terminate automatically. Additionally, the Company may, in its sole discretion, suspend or terminate your Account and/or access to or use of any of the Services, with or without notice, for any or no reason, including, without limitation, (i) if we believe, in our sole discretion, you have engaged in any of the prohibited activities set forth in Section 5.3; (ii) if you provide any incomplete, incorrect or false information to us; (iii) if you have breached any portion of these Terms; and/or (iv) if we determine such action is necessary to comply with these Terms, any of our policies, procedures or practices, or any law rule or regulation. If the Company deletes your Account for any suspected breach of these Terms by you, you are prohibited from re-registering for the Services under a different name. In the event of Account deletion for any reason, the Company may, but is not obligated to, delete any of Your Content. the Company shall not be responsible for the failure to delete or deletion of Your Content. All sections which by their nature should survive the termination of these Terms shall continue in full force and effect subsequent to and notwithstanding any termination of this Agreement by the Company or you. Termination will not limit any of the Company\'s other rights or remedies at law or in equity.\xa0\n    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n3.  Injunctive Relief. You agree that a breach of these Terms will cause irreparable injury to the Company for which monetary damages would not be an adequate remedy and the Company shall be entitled to equitable relief in addition to any remedies it may have hereunder or at law without a bond, other security or proof of damages.\n    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n4.  California Residents. If you are a California resident, in accordance with Cal. Civ. Code \xa7 1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at (800) 952-5210.\n    -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n5.  Export Laws. You agree that you will not export or re-export, directly or indirectly, the Services and/or other information or materials provided by the Company hereunder, to any country for which the United States or any other relevant jurisdiction requires any export license or other governmental approval at the time of export without first obtaining such license or approval. In particular, but without limitation, the Services may not be exported or re-exported (a) into any U.S. embargoed countries or any country that has been designated by the U.S. Government as a "terrorist supporting" country, or (b) to anyone listed on any U.S. Government list of prohibited or restricted parties, including the U.S. Treasury Department\'s list of Specially Designated Nationals or the U.S. Department of Commerce Denied Person\'s List or Entity List. By using the Services, you represent and warrant that you are not located in any such country or on any such list. You are responsible for and hereby agree to comply at your sole expense with all applicable United States export laws and regulations.\n    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n6.  Force Majeure. We will not be liable or responsible to you, nor be deemed to have defaulted under or breached these Terms, for any failure or delay in fulfilling or performing any of our obligations under these Terms or in providing the Services, when and to the extent such failure or delay is caused by or results from any events beyond our ability to control, including acts of God; flood, fire, earthquake, epidemics, pandemics, tsunami, explosion, war, invasion, hostilities (whether war is declared or not), terrorist threats or acts, riot or other civil unrest, government order, law, or action, embargoes or blockades, strikes, labor stoppages or slowdowns or other industrial disturbances, shortage of adequate or suitable Internet connectivity, telecommunication breakdown or shortage of adequate power or electricity, and other similar events beyond our control.\n    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n7.  Miscellaneous. If any provision of these Terms shall be unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions. These Terms and the licenses granted hereunder may be assigned by the Company but may not be assigned by you without the prior express written consent of the Company. No waiver by either party of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent breach or default. The section headings used herein are for reference only and shall not be read to have any legal effect. The Services are operated by us in the United States. Those who choose to access the Services from locations outside the United States do so at their own initiative and are responsible for compliance with applicable local laws. These Terms are governed by the laws of the State of New York, without regard to conflict of laws rules, and the proper venue for any disputes arising out of or relating to any of the same will be the state and federal courts located in New York, New York.\xa0\n    -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n8.  How to Contact Us.\xa0 You may contact us regarding the Services or these Terms by e-mail at admin@layrlabs.org.\n    -------------------------------------------------------------------------------------------------------------'
                    })
                })
            }

            function W() {
                return (0, r.jsxs)("div", {
                    className: "privacy-body",
                    children: [(0, r.jsx)("p", {
                        className: "c39",
                        children: (0, r.jsx)("h1", {
                            className: "c15 c4",
                            children: "EIGENLAYER PRIVACY POLICY"
                        })
                    }), (0, r.jsx)("p", {
                        className: "c20",
                        children: (0, r.jsx)("span", {
                            className: "c13 c8 c4"
                        })
                    }), (0, r.jsx)("p", {
                        className: "c31",
                        children: (0, r.jsx)("span", {
                            className: "bold",
                            children: "Last Revised on April 14, 2023"
                        })
                    }), (0, r.jsx)("p", {
                        className: "c20",
                        children: (0, r.jsx)("span", {
                            className: "c2"
                        })
                    }), (0, r.jsx)("div", {
                        className: "terms-list-item",
                        children: "This Privacy Policy for Layr Labs, Inc. (“Company”, “we”, “us” “our”) describes how we collect, use and disclose information about users of the Company’s website (eigenlayer.xyz), and any related services, tools and features, including the EigenLayer service (collectively, the “Services”). For the purposes of this Privacy Policy, “you” and “your” means you as the user of the Services."
                    }), (0, r.jsx)("p", {
                        className: "c6",
                        children: (0, r.jsx)("span", {
                            className: "c2"
                        })
                    }), (0, r.jsx)("div", {
                        className: "terms-list-item",
                        children: (0, r.jsx)("span", {
                            className: "c2",
                            children: "Please read this Privacy Policy carefully. \xa0By using, accessing, or downloading any of the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. \xa0If you do not agree to this Privacy Policy, please do not use, access or download any of the Services."
                        })
                    }), (0, r.jsx)("h2", {
                        style: {
                            display: "inline"
                        },
                        children: (0, r.jsx)("span", {
                            className: "c4 c9",
                            children: "UPDATING THIS PRIVACY POLICY"
                        })
                    }), (0, r.jsx)("div", {
                        className: "terms-list-item",
                        children: "We may modify this Privacy Policy from time to time in which case we will update the “Last Revised” date at the top of this Privacy Policy. If we make material changes to the way in which we use information we collect, we will use reasonable efforts to notify you (such as by emailing you at the last email address you provided us, by posting notice of such changes on the Services, or by other means consistent with applicable law) and will take additional steps as required by applicable law. If you do not agree to any updates to this Privacy Policy please do not access or continue to use the Services."
                    }), (0, r.jsx)("h2", {
                        style: {
                            display: "inline"
                        },
                        children: (0, r.jsx)("span", {
                            className: "c4",
                            children: "COMPANY’S COLLECTION AND USE OF INFORMATION"
                        })
                    }), (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: "terms-list-item",
                            children: [(0, r.jsx)("p", {
                                children: "When you access or use the Services, we may collect certain categories of information about you from a variety of sources, which comprises:"
                            }), (0, r.jsxs)("ul", {
                                children: [(0, r.jsx)("li", {
                                    children: "The following information about you: name, email address, and Discord Tag. We collect your email address and Discord Tag in order to communicate with you through the Services and through third party platforms, such as Discord."
                                }), (0, r.jsx)("li", {
                                    children: 'The following third-party wallet (`"`Wallet`"`) information: public wallet address and token holdings. We collect third-party Wallet information in order to facilitate your use of the Services.'
                                }), (0, r.jsx)("li", {
                                    children: "Any other information you choose to include in communications with us, for example, when sending a message through the Services."
                                })]
                            }), (0, r.jsxs)("p", {
                                children: ['We also automatically collect certain information about your interaction with the Services (`"Usage Data`"). To do this, we may use cookies, web beacons/clear gifs and other geolocation tracking technologies (`"Tracking Technologies`"). Usage Data comprises of:', " "]
                            }), (0, r.jsxs)("ul", {
                                children: [(0, r.jsx)("li", {
                                    children: "Device information (e.g., unique device identifier, device type, IP address, operating system)"
                                }), (0, r.jsx)("li", {
                                    children: "Browser information (e.g., browser type)"
                                }), (0, r.jsx)("li", {
                                    children: "Location information (e.g., approximate geolocation)"
                                }), (0, r.jsx)("li", {
                                    children: "Other information regarding your interaction with the Services (e.g., log data, date and time stamps, clickstream data)"
                                })]
                            }), (0, r.jsx)("p", {
                                children: "We use Usage Data to tailor features and content to you and to run analytics and better understand user interaction with the Services. For more information on how we use Tracking Technologies and your choices, see the section below, Cookies and Other Tracking Technologies."
                            }), (0, r.jsx)("p", {
                                children: "In addition to the foregoing, we may use any of the above information to comply with any applicable legal obligations, to enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others."
                            })]
                        })
                    }), (0, r.jsx)("h2", {
                        style: {
                            display: "inline"
                        },
                        children: (0, r.jsx)("span", {
                            className: "c9 c4",
                            children: "HOW THE COMPANY SHARES YOUR INFORMATION"
                        })
                    }), (0, r.jsxs)("div", {
                        className: "terms-list-item",
                        children: [(0, r.jsx)("p", {
                            children: "In certain circumstances, the Company may share your information with third parties for legitimate purposes subject to this Privacy Policy. Such circumstances comprise of:"
                        }), (0, r.jsxs)("ul", {
                            children: [(0, r.jsxs)("li", {
                                children: ["With vendors or other service providers, such as", (0, r.jsxs)("ul", {
                                    children: [(0, r.jsx)("li", {
                                        children: "Blockchain analysis service providers, including Chainanalysis"
                                    }), (0, r.jsx)("li", {
                                        children: "Data analytics vendors, including Google Analytics"
                                    })]
                                })]
                            }), (0, r.jsx)("li", {
                                children: "To comply with applicable law or any obligations thereunder, including cooperation with law enforcement, judicial orders, and regulatory inquiries"
                            }), (0, r.jsx)("li", {
                                children: "In connection with an asset sale, merger, bankruptcy, or other business transaction"
                            }), (0, r.jsx)("li", {
                                children: "To enforce any applicable terms of service"
                            }), (0, r.jsx)("li", {
                                children: "To ensure the safety and security of the Company and/or its users"
                            }), (0, r.jsx)("li", {
                                children: "When you request us to share certain information with third parties, such as through your use of login integrations"
                            }), (0, r.jsx)("li", {
                                children: "With professional advisors, such as auditors, law firms, or accounting firms"
                            })]
                        })]
                    }), (0, r.jsx)("h2", {
                        style: {
                            display: "inline"
                        },
                        children: (0, r.jsx)("span", {
                            className: "c9 c4",
                            children: "COOKIES AND OTHER TRACKING TECHNOLOGIES"
                        })
                    }), (0, r.jsxs)("div", {
                        className: "terms-list-item",
                        children: [(0, r.jsx)("span", {
                            className: "bold",
                            children: "Do Not Track Signals"
                        }), (0, r.jsx)("p", {
                            children: 'Your browser settings may allow you to transmit a `"`Do Not Track`"` signal when you visit various websites. Like many websites, our website is not designed to respond to `"`Do Not Track`"` signals received from browsers. To learn more about `"`Do Not Track`"` signals, you can visit www.allaboutdnt.com.'
                        }), (0, r.jsx)("h2", {
                            children: "Cookies and Other Tracking Technologies"
                        }), (0, r.jsx)("p", {
                            children: "Most browsers accept cookies automatically, but you may be able to control the way in which your devices permit the use of cookies, web beacons/clear gifs, other geolocation tracking technologies. If you so choose, you may block or delete our cookies from your browser; however, blocking or deleting cookies may cause some of the Services, including any portal features and general functionality, to work incorrectly. If you have questions regarding the specific information about you that we process or retain, as well as your choices regarding our collection and use practices, please contact us using the information listed below."
                        }), (0, r.jsxs)("p", {
                            children: ["To opt out of tracking by Google Analytics, click", " ", (0, r.jsxs)("a", {
                                className: "clickhere",
                                href: "https://tools.google.com/dlpage/gaoptout",
                                target: "_blank",
                                children: [" ", "here"]
                            }), "."]
                        }), (0, r.jsx)("p", {
                            children: 'Your browser settings may allow you to transmit a `"Do Not Track`" signal when you visit various websites. Like many websites, our website is not designed to respond to `"Do Not Track`" signals received from browsers. To learn more about `"Do Not Track`" signals, you can visit www.allaboutdnt.com.'
                        })]
                    }), (0, r.jsx)("h2", {
                        id: "h.gjdgxs",
                        style: {
                            display: "inline"
                        },
                        children: (0, r.jsx)("span", {
                            className: "c9 c4",
                            children: "SOCIAL NETWORKS AND OTHER THIRD PARTY WEBSITES AND LINKS"
                        })
                    }), (0, r.jsx)("div", {
                        className: "terms-list-item",
                        children: "We may provide links to websites or other online platforms operated by third parties, including third-party social networking platforms, such as Twitter, Discord, or Medium, operated by third parties (such platforms are “Social Networks”). If you follow links to sites not affiliated or controlled by us, you should review their privacy and security policies and other terms and conditions. We do not guarantee and are not responsible for the privacy or security of these sites, including the accuracy, completeness, or reliability of information found on these sites. Information you provide on public or semi-public venues, including information you share or post on Social Networks, may also be accessible or viewable by other users of the Services and/or users of those third-party online platforms without limitation as to its use by us or by a third party. Our inclusion of such links does not, by itself, imply any endorsement of the content on such platforms or of their owners or operators, except as disclosed on the Services."
                    }), (0, r.jsx)("h2", {
                        style: {
                            display: "inline"
                        },
                        children: (0, r.jsx)("span", {
                            className: "c9 c4",
                            children: "THIRD PARTY WALLET EXTENSIONS"
                        })
                    }), (0, r.jsx)("div", {
                        className: "terms-list-item",
                        children: "Certain transactions conducted via our Services, will require you to connect a Wallet to the Services. By using such Wallet to conduct such transactions via the Services, you agree that your interactions with such third party Wallets are governed by the privacy policy for the applicable Wallet. We expressly disclaim any and all liability for actions arising from your use of third party Wallets, including but without limitation, to actions relating to the use and/or disclosure of personal information by such third party Wallets. \xa0"
                    }), (0, r.jsx)("h2", {
                        style: {
                            display: "inline"
                        },
                        children: (0, r.jsx)("span", {
                            className: "c9 c30",
                            children: "CHILDREN’S PRIVACY"
                        })
                    }), (0, r.jsxs)("div", {
                        className: "terms-list-item",
                        children: ["Children under the age of 18 are not permitted to use the Services, and we do not seek or knowingly collect any personal information about children under 13 years of age. If we become aware that we have unknowingly collected information about a child under 13 years of age, we will make commercially reasonable efforts to delete such information from our database.", (0, r.jsx)("p", {
                            className: "c24",
                            children: (0, r.jsx)("span", {
                                className: "c2",
                                children: "If you are the parent or guardian of a child under 13 years of age who has provided us with their personal information, you may contact us using the below information to request that it be deleted."
                            })
                        })]
                    }), (0, r.jsx)("h2", {
                        style: {
                            display: "inline"
                        },
                        children: (0, r.jsx)("span", {
                            className: "c9 c4",
                            children: "DATA SECURITY"
                        })
                    }), (0, r.jsxs)("div", {
                        className: "terms-list-item",
                        children: ["Please be aware that, despite our reasonable efforts to protect your information, no security measures are perfect or impenetrable, and we cannot guarantee “perfect security.” Please further note that any information you send to us electronically, while using the Services or otherwise interacting with us, may not be secure while in transit. We recommend that you do not use unsecure channels to communicate sensitive or confidential information to us.", " "]
                    }), (0, r.jsx)("h2", {
                        style: {
                            display: "inline"
                        },
                        children: (0, r.jsx)("span", {
                            className: "c9 c4",
                            children: "HOW TO CONTACT US"
                        })
                    }), (0, r.jsx)("div", {
                        className: "terms-list-item",
                        children: "Should you have any questions about our privacy practices or this Privacy Policy, please email us at admin@layrlabs.org or contact us at 1100 NE Campus Pkwy, Seattle, WA 98105."
                    })]
                })
            }
            var B = o(61093);
            let G = "el-isRestrictedModalDismissed";
            var V = e => {
                let {
                    addressIsRestricted: t,
                    address: o
                } = e, [a, i] = (0, s.useState)(!1);
                return (0, s.useEffect)(() => {
                    o && "true" !== (0, p.x7)("".concat(G, "-").concat(o)) && t && i(!0)
                }, [t, o]), (0, r.jsx)(b.fC, {
                    open: a,
                    children: (0, r.jsxs)(b.h_, {
                        children: [(0, r.jsx)(b.aV, {
                            className: "fixed top-0 flex items-center justify-center w-screen h-screen bg-overlayDarkBg"
                        }), (0, r.jsxs)(b.VY, {
                            "data-cypress": "RestrictAccessModal",
                            className: "fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline-none sm:mt-20 flex items-center w-full h-full sm:h-auto sm:w-[400px] flex-col pt-4 pb-6 px-4 bg-secondaryBg justify-center",
                            children: [(0, r.jsx)(c.xv, {
                                intent: "Heading3",
                                className: "text-center",
                                children: "ACCESS RESTRICTED"
                            }), (0, r.jsxs)(c.xv, {
                                className: "text-justify mt-2 overflow-y-scroll",
                                children: ["Your wallet has been flagged as being associated with certain high risk activity or jurisdictions. You may unstake assets, but all other functionality of the application has been disabled. Please visit our ", "  ", (0, r.jsx)(g.default, {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: "https://docs.eigenlayer.xyz/eigenlayer/legal/terms-of-service",
                                    className: "underline underline-offset-4 text-primaryFg hover:text-interactivePrimaryFgHover",
                                    children: "Terms of Service."
                                }), " ", "for more information. If you feel your wallet has been denied access incorrectly, please reach out to our help channel."]
                            }), (0, r.jsx)("button", {
                                className: "w-0 h-0 outline-none"
                            }), (0, r.jsx)(c.zx, {
                                onClick: () => {
                                    i(!1), (0, p.DG)(G, "true", 864e5)
                                },
                                size: c.dr.SM,
                                intent: "secondary",
                                children: "Continue"
                            })]
                        })]
                    })
                })
            };
            let z = "By signing this message, you acknowledge that you have read and understood our Terms of Service and Privacy Policy. You agree to abide by all the terms and conditions contained in the hash: ".concat(D[D.length - 1].hash);

            function _(e) {
                let {
                    children: t
                } = e, {
                    access: o,
                    isTermsSigned: a,
                    setIsTermsSigned: i,
                    cacheSignature: s,
                    storeUserTerms: l
                } = U(), {
                    isConnected: d,
                    address: u,
                    addressAccess: m
                } = (0, h.Z)(), {
                    disconnect: p
                } = (0, y.qL)(), f = !a && d, g = !f && "restrict" === m.data, {
                    isLoading: v,
                    signMessage: T
                } = (0, y.QW)({
                    onSuccess: e => {
                        let t = (0, H.af)(u, z, e),
                            o = {
                                publicKey: t.pubKeyHex,
                                signedTerms: {
                                    hash: t.messageHash,
                                    signature: e,
                                    timestamp: new Date().getTime()
                                }
                            };
                        s({ ...o,
                            userAddress: u
                        }), l.mutate(o), i(!0)
                    }
                });
                return "deny" === m.data ? (0, r.jsx)("div", {
                    "data-cypress": "access",
                    className: "h-screen flex items-center justify-center",
                    children: (0, r.jsxs)("div", {
                        className: "flex flex-col items-center justify-center mx-10",
                        children: [(0, r.jsx)(c.xv, {
                            intent: "Heading1",
                            className: "mb-4 text-center",
                            children: "ACCESS RESTRICTED"
                        }), (0, r.jsxs)(c.xv, {
                            intent: "Heading2",
                            className: "text-center",
                            children: ["Your wallet has been flagged as being associated with certain high risk activity or jurisdictions. Functionality of the application has been disabled. Please visit our ", "  ", (0, r.jsx)("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://docs.eigenlayer.xyz/eigenlayer/legal/terms-of-service",
                                className: "underline underline-offset-4 text-primaryFg hover:text-interactivePrimaryFgHover",
                                children: "Terms of Service"
                            }), " ", "for more information."]
                        }), (0, r.jsx)(c.xv, {
                            intent: "Heading2",
                            className: "text-center",
                            children: "If you feel your wallet has been denied access incorrectly, please reach out to our help channel."
                        }), (0, r.jsx)(n.default, {
                            src: B.Z,
                            height: 160,
                            className: "mt-4",
                            priority: !0,
                            alt: "eigenlayer logo"
                        })]
                    })
                }) : o ? "error" === m.data ? (0, r.jsxs)("div", {
                    "data-cypress": "access",
                    className: "h-screen w-screen flex flex-col justify-center items-center",
                    children: [(0, r.jsx)(c.xv, {
                        children: "We are currently experiencing heavy traffic"
                    }), (0, r.jsx)(c.xv, {
                        children: "Please try again later"
                    }), (0, r.jsx)(c.xv, {
                        children: "Funds are safe"
                    })]
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [t, (0, r.jsx)(V, {
                        address: u,
                        addressIsRestricted: g
                    }), (0, r.jsx)(b.fC, {
                        open: f,
                        children: (0, r.jsxs)(b.h_, {
                            children: [(0, r.jsx)(b.aV, {
                                className: "fixed top-0 flex items-center justify-center w-screen h-screen bg-overlayDarkBg"
                            }), (0, r.jsxs)(b.VY, {
                                className: "fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline-none sm:mt-20 flex items-center w-full h-full sm:h-auto sm:w-[400px] flex-col gap-4 pt-4 pb-6 px-4 bg-secondaryBg justify-center",
                                children: [(0, r.jsx)(c.xv, {
                                    intent: "Heading3",
                                    className: "text-center",
                                    children: "TERMS OF SERVICE & PRIVACY POLICY"
                                }), (0, r.jsxs)("div", {
                                    className: "h-[300px] w-full px-4 overflow-y-scroll text-tertiaryFg text-TextS",
                                    children: [(0, r.jsx)(F, {}), (0, r.jsx)(W, {})]
                                }), (0, r.jsx)("button", {
                                    className: "w-0 h-0 outline-none"
                                }), (0, r.jsx)(c.zx, {
                                    onClick: () => T({
                                        message: z
                                    }),
                                    className: "flex items-center justify-center",
                                    size: c.dr.SM,
                                    children: v ? (0, r.jsx)(n.default, {
                                        src: "/eigenGif/White-Eigen-Loader.gif",
                                        height: 24,
                                        width: 24,
                                        alt: "eigenlayer loader",
                                        className: "rounded-lg"
                                    }) : "Sign"
                                }), (0, r.jsx)(c.zx, {
                                    onClick: () => {
                                        p()
                                    },
                                    size: c.dr.SM,
                                    intent: "secondary",
                                    children: "Cancel"
                                })]
                            })]
                        })
                    })]
                }) : (0, r.jsx)("div", {
                    "data-cypress": "access",
                    className: "h-screen w-screen flex justify-center items-center",
                    children: m.isLoading ? (0, r.jsx)(n.default, {
                        src: "/eigenGif/White-Eigen-Loader.gif",
                        height: 24,
                        width: 24,
                        alt: "eigenlayer loader",
                        className: "mx-auto rounded-lg"
                    }) : (0, r.jsx)(c.xv, {
                        children: "Access Denied"
                    })
                })
            }
            var q = o(94623),
                X = o(36063),
                J = o(65258),
                Z = o(28719),
                K = o(65166),
                Q = o(61020),
                $ = o(83477),
                ee = o(5694);
            o(47024), o(73496).Buffer, m.env.NEXT_PUBLIC_CHAIN_ID;
            let et = {
                1: K.R,
                5: Q.w,
                1337: $.d,
                17e3: ee.M
            };
            var eo = o(36910),
                ea = o(19608),
                er = o.n(ea),
                ei = o(2225);
            let en = (0, ei.R)({
                    rpc: () => ({
                        http: "https://ethereum-rpc.publicnode.com"
                    })
                }),
                es = (0, ei.R)({
                    rpc: () => ({
                        http: "https://eth.merkle.io"
                    })
                }),
                el = (0, ei.R)({
                    rpc: () => ({
                        http: "https://eth.llamarpc.com"
                    })
                }),
                ec = "be72ab7350f1efa18d91616a51bc037c",
                eh = m.env.NEXT_PUBLIC_CHAIN_ID,
                ed = [(0, Z.I)()];
            "1" === eh && (ed.push(en), ed.push(es), ed.push(el)), ed.push((0, eo.Tg)({
                projectId: ec
            }));
            let {
                chains: eu,
                publicClient: ey
            } = (0, q.QB)([et[eh]], ed), em = (0, y._g)({
                connectors: [new eo.RE({
                    chains: eu
                }), new X.z({
                    chains: eu,
                    options: {
                        projectId: ec,
                        showQrModal: !1
                    }
                }), new J.D({
                    chains: eu,
                    options: {
                        appName: "EigenLayer"
                    }
                })],
                publicClient: ey
            });

            function ep(e) {
                let {
                    children: t
                } = e;
                return (0, r.jsx)(y.eM, {
                    config: em,
                    children: t
                })
            }

            function ef(e) {
                let {
                    children: t
                } = e, [o, a] = (0, s.useState)(!1);
                return (0, s.useEffect)(() => a(!0), []), (0, r.jsx)(c.VW, {
                    children: (0, r.jsx)(ep, {
                        children: (0, r.jsx)(P.zt, {
                            children: (0, r.jsx)(c.cP, {
                                children: o && (0, r.jsx)(_, {
                                    children: t
                                })
                            })
                        })
                    })
                })
            }(0, l.OY)({
                wagmiConfig: em,
                projectId: ec,
                chains: eu,
                featuredWalletIds: ["971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709"],
                themeVariables: {
                    "--w3m-font-family": er().style.fontFamily,
                    "--w3m-border-radius-master": "0"
                },
                themeMode: "dark"
            });
            var eg = o(57664),
                eb = o(95008);
            let ev = "el-isBannerDismissed";

            function eT() {
                let [e, t] = (0, s.useState)(!1), o = m.env.NEXT_PUBLIC_CHAIN_ID, {
                    chain: a
                } = (0, y.LN)(), {
                    switchNetwork: i
                } = (0, y.g0)({
                    chainId: Number(o)
                }), {
                    data: n
                } = (0, eb.Z)(), l = (0, c.pm)();
                (0, s.useEffect)(() => {
                    (null == a ? void 0 : a.unsupported) ? l.danger((0, r.jsx)("div", {
                        className: "flex flex-row",
                        children: (0, r.jsxs)(c.xv, {
                            children: ["This network is not supported. Please", " ", (0, r.jsx)("button", {
                                className: "underline",
                                onClick: () => null == i ? void 0 : i(),
                                children: "Switch Networks"
                            })]
                        })
                    }), {
                        id: "unsupported-chain",
                        duration: 999999
                    }): l.dismiss("unsupported-chain")
                }, [null == a ? void 0 : a.unsupported, i, l]), (0, s.useEffect)(() => {
                    n.statusCount > 0 && t(!0)
                }, [n.statusCount]);
                let [h, d] = (0, s.useState)(!1);
                return (0, s.useEffect)(() => {
                    let e = Number(localStorage.getItem(ev));
                    Date.now() - e < 864e5 && d(!0)
                }, []), h ? null : (0, r.jsxs)("div", {
                    className: "flex flex-row justify-between items-center p-2 bg-info ".concat(!e && "hidden"),
                    children: [(0, r.jsx)("button", {
                        onClick: () => {
                            t(!1), localStorage.setItem(ev, Date.now().toString())
                        },
                        className: "absolute w-4 h-4 text-secondaryBg",
                        children: (0, r.jsx)(T.Z, {
                            className: "w-4 h-4"
                        })
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-row items-center gap-1 mx-auto text-secondaryBg",
                        children: [(0, r.jsx)(c.xv, {
                            className: "ml-6 sm:text-TextM",
                            intent: "TextXS",
                            children: n.bannerMessage
                        }), (0, r.jsx)(eg.Z, {
                            href: "/status",
                            className: "underline text-secondaryBg text-TextXS sm:text-TextM hover:text-interactivePrimaryHover",
                            children: "Check Status"
                        })]
                    })]
                })
            }
            let ew = ["safe"];

            function eS() {
                return ! function() {
                    let {
                        connect: e,
                        connectors: t
                    } = (0, y.$4)();
                    (0, s.useEffect)(() => {
                        ew.forEach(o => {
                            let a = t.find(e => e.id === o && e.ready);
                            a ? e({
                                connector: a
                            }) : em.autoConnect()
                        })
                    }, [e, t])
                }(), null
            }
            var ex = o(83830),
                eE = o(64413);

            function eA() {
                let {
                    isConnected: e
                } = (0, h.Z)();
                return e ? null : (0, r.jsxs)("div", {
                    className: "flex flex-col items-center justify-center w-full h-auto gap-4 sm:h-36 lg:h-40 sm:flex-row",
                    children: [(0, r.jsxs)("div", {
                        className: "flex-col items-center justify-center hidden w-full h-full gap-4 sm:flex",
                        children: [(0, r.jsx)(c.xv, {
                            intent: "Heading2",
                            children: "To start restaking"
                        }), (0, r.jsx)(f, {})]
                    }), (0, r.jsx)("div", {
                        className: "flex flex-col items-center justify-center w-full h-full gap-4 py-6 sm:hidden",
                        children: (0, r.jsx)(c.xv, {
                            intent: "Heading3",
                            className: "text-center",
                            children: "Connect your wallet to start restaking"
                        })
                    })]
                })
            }
            var eN = o(54934),
                eI = o.n(eN),
                eC = o(70524),
                eO = e => {
                    let {
                        children: t,
                        open: o,
                        setOpen: a,
                        bannerKey: i,
                        dataCypress: n
                    } = e;
                    return (0, s.useEffect)(() => {
                        "true" !== (0, p.x7)(i) && a(!0)
                    }, []), o ? (0, r.jsxs)("div", {
                        "data-cypress": n,
                        className: "flex items-center fixed bottom-0 mx-2 sm:mx-4 mb-4 w-[calc(100%-16px)] sm:w-[calc(100%-32px)] bg-interactivePrimary px-2 sm:px-4 py-4 rounded-lg text-inversePrimaryFg",
                        children: [(0, r.jsx)("div", {
                            className: "flex items-center justify-center p-2 mr-1 rounded-lg cursor-pointer sm:mr-3 text-inverseTertiaryFg hover:text-inversePrimaryFg hover:bg-interactiveTertiaryHover",
                            onClick: () => {
                                a(!1), (0, p.DG)(i, "true", 864e5)
                            },
                            children: (0, r.jsx)(T.Z, {
                                className: "w-5 h-5"
                            })
                        }), t]
                    }) : null
                };
            let {
                symbol: eR,
                address: ej
            } = null !== (a = [...eC.stakeConfig.stakingTokenList].find(e => e.symbol === m.env.NEXT_PUBLIC_RESTAKE_CTA_SYMBOL)) && void 0 !== a ? a : {
                symbol: "",
                address: void 0
            };
            var ek = () => {
                    var e;
                    let [t, o] = (0, s.useState)(!1), {
                        data: a
                    } = (0, y.KQ)({
                        address: ej,
                        enabled: !!ej
                    }), i = null !== (e = null == a ? void 0 : a.value) && void 0 !== e ? e : 0, n = m.env.NEXT_PUBLIC_SHOW_RESTAKE_CTA && t && i > 0 n;
                    return (0, r.jsx)(eO, {
                        open: n,
                        setOpen: o,
                        bannerKey: "el-isRestakeCTADismissed",
                        children: (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsxs)("div", {
                                className: "flex flex-col items-center justify-between w-full gap-1 sm:flex-row sm:gap-0",
                                children: [(0, r.jsxs)("div", {
                                    className: "flex flex-col items-start justify-center",
                                    children: [(0, r.jsxs)(c.xv, {
                                        className: "block",
                                        intent: "LabelM",
                                        children: ["Restake your ", eR]
                                    }), (0, r.jsxs)(c.xv, {
                                        className: "block",
                                        intent: "TextS",
                                        children: ["You can restake your ", eR, " tokens to earn rewards and help secure the network."]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "flex items-center justify-between w-full gap-0 sm:w-auto sm:gap-5",
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex items-center gap-2",
                                        children: [(0, r.jsx)(c.xv, {
                                            className: "block",
                                            children: (0, r.jsx)(c.e3, {
                                                value: i,
                                                format: "tokenAmount"
                                            })
                                        }), (0, r.jsx)(c.xv, {
                                            intent: "ShortTextXS",
                                            className: "block px-2 py-1 rounded-md text-inverseTertiaryFg bg-blackOpacity-16",
                                            children: eR
                                        })]
                                    }), (0, r.jsx)(g.default, {
                                        href: "/restake/".concat(eR),
                                        children: (0, r.jsx)(c.zx, {
                                            intent: "secondary",
                                            className: "rounded-full bg-baseBg hover:bg-primaryBg active:bg-secondaryBg focus:bg-secondaryBg",
                                            size: c.dr.SM,
                                            width: "fitContent",
                                            children: (0, r.jsx)(c.xv, {
                                                intent: "ShortTextS",
                                                children: "RESTAKE"
                                            })
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                eL = i.h.withTRPC(e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsxs)("html", {
                        lang: "en",
                        children: [(0, r.jsx)("body", {
                            id: "root",
                            className: "".concat(eI().className, " ").concat(eI().variable, " ").concat(er().variable, " bg-primaryBg text-primaryFg"),
                            children: (0, r.jsxs)(ef, {
                                children: [(0, r.jsx)(eS, {}), (0, r.jsx)(eT, {}), (0, r.jsx)(N, {}), (0, r.jsxs)("div", {
                                    className: "container px-4 mx-auto mt-4 mb-24 sm:mt-6 sm:px-0",
                                    children: [(0, r.jsx)(eA, {}), t]
                                }), (0, r.jsx)(L, {}), (0, r.jsx)(ek, {})]
                            })
                        }), "production" === m.env.NEXT_PUBLIC_VERCEL_ENV && "1" === m.env.NEXT_PUBLIC_CHAIN_ID ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(ex.default, {
                                src: "https://www.googletagmanager.com/gtag/js?id=G-CX6Z3SL81R",
                                strategy: "afterInteractive"
                            }), (0, r.jsx)(ex.default, {
                                id: "ga-mainnet",
                                strategy: "afterInteractive",
                                children: "window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'G-CX6Z3SL81R');"
                            })]
                        }) : null, "production" === m.env.NEXT_PUBLIC_VERCEL_ENV && "5" === m.env.NEXT_PUBLIC_CHAIN_ID ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(ex.default, {
                                src: "https://www.googletagmanager.com/gtag/js?id=G-EZ55MBPQ27",
                                strategy: "afterInteractive"
                            }), (0, r.jsx)(ex.default, {
                                id: "ga-goerli",
                                strategy: "afterInteractive",
                                children: "window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'G-EZ55MBPQ27');"
                            })]
                        }) : null, (0, r.jsx)(eE.AxiomWebVitals, {})]
                    })
                })
        },
        57664: function(e, t, o) {
            "use strict";
            var a = o(3994),
                r = o(74253),
                i = o(13743);
            t.Z = e => {
                let {
                    children: t,
                    href: o,
                    isExternalLink: n = !1,
                    className: s
                } = e, l = (0, a.jsx)(i.xv, {
                    intent: "ShortTextM",
                    className: s || "text-inversePrimaryFg hover:text-inverseTertiaryFg",
                    children: t
                });
                return n ? (0, a.jsx)("a", {
                    href: o,
                    target: "_blank",
                    rel: "noreferrer",
                    children: l
                }) : (0, a.jsx)(r.default, {
                    href: o,
                    children: l
                })
            }
        },
        14714: function(e, t, o) {
            "use strict";
            o.d(t, {
                O: function() {
                    return r
                },
                X: function() {
                    return a
                }
            });
            let a = e => e ? "".concat(e.slice(0, 6), "...").concat(e.slice(-4)) : "",
                r = {
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
        88909: function() {},
        61093: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/horizontalDarkA.969b5aa2.svg",
                height: 32,
                width: 77,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    },
    function(e) {
        e.O(0, [113, 1482, 5129, 7915, 6604, 4328, 3743, 1704, 7542, 5008, 7051, 2597, 4473, 1744], function() {
            return e(e.s = 61422)
        }), _N_E = e.O()
    }
]);