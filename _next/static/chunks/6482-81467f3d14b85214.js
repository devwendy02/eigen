"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6482], {
        6482: function(e, t, n) {
            n.d(t, {
                VY: function() {
                    return eV
                },
                fC: function() {
                    return eL
                },
                xz: function() {
                    return eK
                }
            });
            var r = n(41951),
                o = n(97016),
                a = n(95881),
                u = n(32850),
                l = n(76514),
                c = n(51241),
                i = n(81942),
                s = n(75467);
            let d = (0, o.createContext)(void 0);

            function p(e) {
                let t = (0, o.useContext)(d);
                return e || t || "ltr"
            }
            var f = n(62595),
                v = n(99735),
                m = n(97307),
                g = n(74308),
                h = n(67222),
                w = (n(3911), n(16825)),
                M = n(21223);
            let E = "rovingFocusGroup.onEntryFocus",
                b = {
                    bubbles: !1,
                    cancelable: !0
                },
                _ = "RovingFocusGroup",
                [C, y, D] = (0, s.B)(_),
                [R, k] = (0, l.b)(_, [D]),
                [I, P] = R(_),
                F = (0, o.forwardRef)((e, t) => (0, o.createElement)(C.Provider, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)(C.Slot, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)(T, (0, r.Z)({}, e, {
                    ref: t
                }))))),
                T = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        orientation: l,
                        loop: s = !1,
                        dir: d,
                        currentTabStopId: f,
                        defaultCurrentTabStopId: v,
                        onCurrentTabStopIdChange: m,
                        onEntryFocus: g,
                        ...h
                    } = e, w = (0, o.useRef)(null), _ = (0, u.e)(t, w), C = p(d), [D = null, R] = (0, c.T)({
                        prop: f,
                        defaultProp: v,
                        onChange: m
                    }), [k, P] = (0, o.useState)(!1), F = (0, M.W)(g), T = y(n), x = (0, o.useRef)(!1), [O, A] = (0, o.useState)(0);
                    return (0, o.useEffect)(() => {
                        let e = w.current;
                        if (e) return e.addEventListener(E, F), () => e.removeEventListener(E, F)
                    }, [F]), (0, o.createElement)(I, {
                        scope: n,
                        orientation: l,
                        dir: C,
                        loop: s,
                        currentTabStopId: D,
                        onItemFocus: (0, o.useCallback)(e => R(e), [R]),
                        onItemShiftTab: (0, o.useCallback)(() => P(!0), []),
                        onFocusableItemAdd: (0, o.useCallback)(() => A(e => e + 1), []),
                        onFocusableItemRemove: (0, o.useCallback)(() => A(e => e - 1), [])
                    }, (0, o.createElement)(i.WV.div, (0, r.Z)({
                        tabIndex: k || 0 === O ? -1 : 0,
                        "data-orientation": l
                    }, h, {
                        ref: _,
                        style: {
                            outline: "none",
                            ...e.style
                        },
                        onMouseDown: (0, a.M)(e.onMouseDown, () => {
                            x.current = !0
                        }),
                        onFocus: (0, a.M)(e.onFocus, e => {
                            let t = !x.current;
                            if (e.target === e.currentTarget && t && !k) {
                                let t = new CustomEvent(E, b);
                                if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                    let e = T().filter(e => e.focusable);
                                    S([e.find(e => e.active), e.find(e => e.id === D), ...e].filter(Boolean).map(e => e.ref.current))
                                }
                            }
                            x.current = !1
                        }),
                        onBlur: (0, a.M)(e.onBlur, () => P(!1))
                    })))
                }),
                x = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        focusable: u = !0,
                        active: l = !1,
                        tabStopId: c,
                        ...s
                    } = e, d = (0, g.M)(), p = c || d, f = P("RovingFocusGroupItem", n), v = f.currentTabStopId === p, m = y(n), {
                        onFocusableItemAdd: h,
                        onFocusableItemRemove: w
                    } = f;
                    return (0, o.useEffect)(() => {
                        if (u) return h(), () => w()
                    }, [u, h, w]), (0, o.createElement)(C.ItemSlot, {
                        scope: n,
                        id: p,
                        focusable: u,
                        active: l
                    }, (0, o.createElement)(i.WV.span, (0, r.Z)({
                        tabIndex: v ? 0 : -1,
                        "data-orientation": f.orientation
                    }, s, {
                        ref: t,
                        onMouseDown: (0, a.M)(e.onMouseDown, e => {
                            u ? f.onItemFocus(p) : e.preventDefault()
                        }),
                        onFocus: (0, a.M)(e.onFocus, () => f.onItemFocus(p)),
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            if ("Tab" === e.key && e.shiftKey) {
                                f.onItemShiftTab();
                                return
                            }
                            if (e.target !== e.currentTarget) return;
                            let t = function(e, t, n) {
                                var r;
                                let o = (r = e.key, "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                                if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return O[o]
                            }(e, f.orientation, f.dir);
                            if (void 0 !== t) {
                                e.preventDefault();
                                let o = m().filter(e => e.focusable).map(e => e.ref.current);
                                if ("last" === t) o.reverse();
                                else if ("prev" === t || "next" === t) {
                                    var n, r;
                                    "prev" === t && o.reverse();
                                    let a = o.indexOf(e.currentTarget);
                                    o = f.loop ? (n = o, r = a + 1, n.map((e, t) => n[(r + t) % n.length])) : o.slice(a + 1)
                                }
                                setTimeout(() => S(o))
                            }
                        })
                    })))
                }),
                O = {
                    ArrowLeft: "prev",
                    ArrowUp: "prev",
                    ArrowRight: "next",
                    ArrowDown: "next",
                    PageUp: "first",
                    Home: "first",
                    PageDown: "last",
                    End: "last"
                };

            function S(e) {
                let t = document.activeElement;
                for (let n of e)
                    if (n === t || (n.focus(), document.activeElement !== t)) return
            }
            var A = n(98286),
                Z = n(12381),
                L = n(13802);
            let K = ["Enter", " "],
                V = ["ArrowUp", "PageDown", "End"],
                G = ["ArrowDown", "PageUp", "Home", ...V],
                W = {
                    ltr: [...K, "ArrowRight"],
                    rtl: [...K, "ArrowLeft"]
                },
                B = {
                    ltr: ["ArrowLeft"],
                    rtl: ["ArrowRight"]
                },
                U = "Menu",
                [z, X, Y] = (0, s.B)(U),
                [H, N] = (0, l.b)(U, [Y, h.D7, k]),
                j = (0, h.D7)(),
                q = k(),
                [J, Q] = H(U),
                [$, ee] = H(U),
                et = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...a
                    } = e, u = j(n);
                    return (0, o.createElement)(h.ee, (0, r.Z)({}, u, a, {
                        ref: t
                    }))
                }),
                [en, er] = H("MenuPortal", {
                    forceMount: void 0
                }),
                eo = "MenuContent",
                [ea, eu] = H(eo),
                el = (0, o.forwardRef)((e, t) => {
                    let n = er(eo, e.__scopeMenu),
                        {
                            forceMount: a = n.forceMount,
                            ...u
                        } = e,
                        l = Q(eo, e.__scopeMenu),
                        c = ee(eo, e.__scopeMenu);
                    return (0, o.createElement)(z.Provider, {
                        scope: e.__scopeMenu
                    }, (0, o.createElement)(w.z, {
                        present: a || l.open
                    }, (0, o.createElement)(z.Slot, {
                        scope: e.__scopeMenu
                    }, c.modal ? (0, o.createElement)(ec, (0, r.Z)({}, u, {
                        ref: t
                    })) : (0, o.createElement)(ei, (0, r.Z)({}, u, {
                        ref: t
                    })))))
                }),
                ec = (0, o.forwardRef)((e, t) => {
                    let n = Q(eo, e.__scopeMenu),
                        l = (0, o.useRef)(null),
                        c = (0, u.e)(t, l);
                    return (0, o.useEffect)(() => {
                        let e = l.current;
                        if (e) return (0, Z.Ry)(e)
                    }, []), (0, o.createElement)(es, (0, r.Z)({}, e, {
                        ref: c,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: n.open,
                        disableOutsideScroll: !0,
                        onFocusOutside: (0, a.M)(e.onFocusOutside, e => e.preventDefault(), {
                            checkForDefaultPrevented: !1
                        }),
                        onDismiss: () => n.onOpenChange(!1)
                    }))
                }),
                ei = (0, o.forwardRef)((e, t) => {
                    let n = Q(eo, e.__scopeMenu);
                    return (0, o.createElement)(es, (0, r.Z)({}, e, {
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        onDismiss: () => n.onOpenChange(!1)
                    }))
                }),
                es = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        loop: l = !1,
                        trapFocus: c,
                        onOpenAutoFocus: i,
                        onCloseAutoFocus: s,
                        disableOutsidePointerEvents: d,
                        onEntryFocus: p,
                        onEscapeKeyDown: g,
                        onPointerDownOutside: w,
                        onFocusOutside: M,
                        onInteractOutside: E,
                        onDismiss: b,
                        disableOutsideScroll: _,
                        ...C
                    } = e, y = Q(eo, n), D = ee(eo, n), R = j(n), k = q(n), I = X(n), [P, T] = (0, o.useState)(null), x = (0, o.useRef)(null), O = (0, u.e)(t, x, y.onContentChange), S = (0, o.useRef)(0), Z = (0, o.useRef)(""), K = (0, o.useRef)(0), W = (0, o.useRef)(null), B = (0, o.useRef)("right"), U = (0, o.useRef)(0), z = _ ? L.Z : o.Fragment, Y = _ ? {
                        as: A.g7,
                        allowPinchZoom: !0
                    } : void 0, H = e => {
                        var t, n;
                        let r = Z.current + e,
                            o = I().filter(e => !e.disabled),
                            a = document.activeElement,
                            u = null === (t = o.find(e => e.ref.current === a)) || void 0 === t ? void 0 : t.textValue,
                            l = function(e, t, n) {
                                var r;
                                let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                                    a = (r = Math.max(n ? e.indexOf(n) : -1, 0), e.map((t, n) => e[(r + n) % e.length]));
                                1 === o.length && (a = a.filter(e => e !== n));
                                let u = a.find(e => e.toLowerCase().startsWith(o.toLowerCase()));
                                return u !== n ? u : void 0
                            }(o.map(e => e.textValue), r, u),
                            c = null === (n = o.find(e => e.textValue === l)) || void 0 === n ? void 0 : n.ref.current;
                        ! function e(t) {
                            Z.current = t, window.clearTimeout(S.current), "" !== t && (S.current = window.setTimeout(() => e(""), 1e3))
                        }(r), c && setTimeout(() => c.focus())
                    };
                    (0, o.useEffect)(() => () => window.clearTimeout(S.current), []), (0, v.EW)();
                    let N = (0, o.useCallback)(e => {
                        var t, n, r;
                        return B.current === (null === (t = W.current) || void 0 === t ? void 0 : t.side) && !!(r = null === (n = W.current) || void 0 === n ? void 0 : n.area) && function(e, t) {
                            let {
                                x: n,
                                y: r
                            } = e, o = !1;
                            for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                                let u = t[e].x,
                                    l = t[e].y,
                                    c = t[a].x,
                                    i = t[a].y;
                                l > r != i > r && n < (c - u) * (r - l) / (i - l) + u && (o = !o)
                            }
                            return o
                        }({
                            x: e.clientX,
                            y: e.clientY
                        }, r)
                    }, []);
                    return (0, o.createElement)(ea, {
                        scope: n,
                        searchRef: Z,
                        onItemEnter: (0, o.useCallback)(e => {
                            N(e) && e.preventDefault()
                        }, [N]),
                        onItemLeave: (0, o.useCallback)(e => {
                            var t;
                            N(e) || (null === (t = x.current) || void 0 === t || t.focus(), T(null))
                        }, [N]),
                        onTriggerLeave: (0, o.useCallback)(e => {
                            N(e) && e.preventDefault()
                        }, [N]),
                        pointerGraceTimerRef: K,
                        onPointerGraceIntentChange: (0, o.useCallback)(e => {
                            W.current = e
                        }, [])
                    }, (0, o.createElement)(z, Y, (0, o.createElement)(m.M, {
                        asChild: !0,
                        trapped: c,
                        onMountAutoFocus: (0, a.M)(i, e => {
                            var t;
                            e.preventDefault(), null === (t = x.current) || void 0 === t || t.focus()
                        }),
                        onUnmountAutoFocus: s
                    }, (0, o.createElement)(f.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: d,
                        onEscapeKeyDown: g,
                        onPointerDownOutside: w,
                        onFocusOutside: M,
                        onInteractOutside: E,
                        onDismiss: b
                    }, (0, o.createElement)(F, (0, r.Z)({
                        asChild: !0
                    }, k, {
                        dir: D.dir,
                        orientation: "vertical",
                        loop: l,
                        currentTabStopId: P,
                        onCurrentTabStopIdChange: T,
                        onEntryFocus: (0, a.M)(p, e => {
                            D.isUsingKeyboardRef.current || e.preventDefault()
                        })
                    }), (0, o.createElement)(h.VY, (0, r.Z)({
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": ey(y.open),
                        "data-radix-menu-content": "",
                        dir: D.dir
                    }, R, C, {
                        ref: O,
                        style: {
                            outline: "none",
                            ...C.style
                        },
                        onKeyDown: (0, a.M)(C.onKeyDown, e => {
                            let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                                n = e.ctrlKey || e.altKey || e.metaKey,
                                r = 1 === e.key.length;
                            t && ("Tab" === e.key && e.preventDefault(), !n && r && H(e.key));
                            let o = x.current;
                            if (e.target !== o || !G.includes(e.key)) return;
                            e.preventDefault();
                            let a = I().filter(e => !e.disabled).map(e => e.ref.current);
                            V.includes(e.key) && a.reverse(),
                                function(e) {
                                    let t = document.activeElement;
                                    for (let n of e)
                                        if (n === t || (n.focus(), document.activeElement !== t)) return
                                }(a)
                        }),
                        onBlur: (0, a.M)(e.onBlur, e => {
                            e.currentTarget.contains(e.target) || (window.clearTimeout(S.current), Z.current = "")
                        }),
                        onPointerMove: (0, a.M)(e.onPointerMove, ek(e => {
                            let t = e.target,
                                n = U.current !== e.clientX;
                            if (e.currentTarget.contains(t) && n) {
                                let t = e.clientX > U.current ? "right" : "left";
                                B.current = t, U.current = e.clientX
                            }
                        }))
                    })))))))
                }),
                ed = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...a
                    } = e;
                    return (0, o.createElement)(i.WV.div, (0, r.Z)({
                        role: "group"
                    }, a, {
                        ref: t
                    }))
                }),
                ep = ((e, t) => {
                    let {
                        __scopeMenu: n,
                        ...a
                    } = e;
                    return (0, o.createElement)(i.WV.div, (0, r.Z)({}, a, {
                        ref: t
                    }))
                }, "MenuItem"),
                ef = "menu.itemSelect",
                ev = (0, o.forwardRef)((e, t) => {
                    let {
                        disabled: n = !1,
                        onSelect: l,
                        ...c
                    } = e, s = (0, o.useRef)(null), d = ee(ep, e.__scopeMenu), p = eu(ep, e.__scopeMenu), f = (0, u.e)(t, s), v = (0, o.useRef)(!1);
                    return (0, o.createElement)(em, (0, r.Z)({}, c, {
                        ref: f,
                        disabled: n,
                        onClick: (0, a.M)(e.onClick, () => {
                            let e = s.current;
                            if (!n && e) {
                                let t = new CustomEvent(ef, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                e.addEventListener(ef, e => null == l ? void 0 : l(e), {
                                    once: !0
                                }), (0, i.jH)(e, t), t.defaultPrevented ? v.current = !1 : d.onClose()
                            }
                        }),
                        onPointerDown: t => {
                            var n;
                            null === (n = e.onPointerDown) || void 0 === n || n.call(e, t), v.current = !0
                        },
                        onPointerUp: (0, a.M)(e.onPointerUp, e => {
                            var t;
                            v.current || null === (t = e.currentTarget) || void 0 === t || t.click()
                        }),
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            let t = "" !== p.searchRef.current;
                            !n && (!t || " " !== e.key) && K.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                        })
                    }))
                }),
                em = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeMenu: n,
                        disabled: l = !1,
                        textValue: c,
                        ...s
                    } = e, d = eu(ep, n), p = q(n), f = (0, o.useRef)(null), v = (0, u.e)(t, f), [m, g] = (0, o.useState)(!1), [h, w] = (0, o.useState)("");
                    return (0, o.useEffect)(() => {
                        let e = f.current;
                        if (e) {
                            var t;
                            w((null !== (t = e.textContent) && void 0 !== t ? t : "").trim())
                        }
                    }, [s.children]), (0, o.createElement)(z.ItemSlot, {
                        scope: n,
                        disabled: l,
                        textValue: null != c ? c : h
                    }, (0, o.createElement)(x, (0, r.Z)({
                        asChild: !0
                    }, p, {
                        focusable: !l
                    }), (0, o.createElement)(i.WV.div, (0, r.Z)({
                        role: "menuitem",
                        "data-highlighted": m ? "" : void 0,
                        "aria-disabled": l || void 0,
                        "data-disabled": l ? "" : void 0
                    }, s, {
                        ref: v,
                        onPointerMove: (0, a.M)(e.onPointerMove, ek(e => {
                            l ? d.onItemLeave(e) : (d.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus())
                        })),
                        onPointerLeave: (0, a.M)(e.onPointerLeave, ek(e => d.onItemLeave(e))),
                        onFocus: (0, a.M)(e.onFocus, () => g(!0)),
                        onBlur: (0, a.M)(e.onBlur, () => g(!1))
                    }))))
                }),
                [eg, eh] = ((e, t) => {
                    let {
                        checked: n = !1,
                        onCheckedChange: u,
                        ...l
                    } = e;
                    return (0, o.createElement)(eM, {
                        scope: e.__scopeMenu,
                        checked: n
                    }, (0, o.createElement)(ev, (0, r.Z)({
                        role: "menuitemcheckbox",
                        "aria-checked": eD(n) ? "mixed" : n
                    }, l, {
                        ref: t,
                        "data-state": eR(n),
                        onSelect: (0, a.M)(l.onSelect, () => null == u ? void 0 : u(!!eD(n) || !n), {
                            checkForDefaultPrevented: !1
                        })
                    })))
                }, H("MenuRadioGroup", {
                    value: void 0,
                    onValueChange: () => {}
                })),
                ew = ((e, t) => {
                    let {
                        value: n,
                        onValueChange: a,
                        ...u
                    } = e, l = (0, M.W)(a);
                    return (0, o.createElement)(eg, {
                        scope: e.__scopeMenu,
                        value: n,
                        onValueChange: l
                    }, (0, o.createElement)(ed, (0, r.Z)({}, u, {
                        ref: t
                    })))
                }, "MenuItemIndicator"),
                [eM, eE] = H(ew, {
                    checked: !1
                }),
                [eb, e_] = ((e, t) => {
                    let {
                        __scopeMenu: n,
                        forceMount: a,
                        ...u
                    } = e, l = eE(ew, n);
                    return (0, o.createElement)(w.z, {
                        present: a || eD(l.checked) || !0 === l.checked
                    }, (0, o.createElement)(i.WV.span, (0, r.Z)({}, u, {
                        ref: t,
                        "data-state": eR(l.checked)
                    })))
                }, H("MenuSub")),
                eC = "MenuSubTrigger";

            function ey(e) {
                return e ? "open" : "closed"
            }

            function eD(e) {
                return "indeterminate" === e
            }

            function eR(e) {
                return eD(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }

            function ek(e) {
                return t => "mouse" === t.pointerType ? e(t) : void 0
            }(e, t) => {
                let n = Q(eC, e.__scopeMenu),
                    l = ee(eC, e.__scopeMenu),
                    c = e_(eC, e.__scopeMenu),
                    i = eu(eC, e.__scopeMenu),
                    s = (0, o.useRef)(null),
                    {
                        pointerGraceTimerRef: d,
                        onPointerGraceIntentChange: p
                    } = i,
                    f = {
                        __scopeMenu: e.__scopeMenu
                    },
                    v = (0, o.useCallback)(() => {
                        s.current && window.clearTimeout(s.current), s.current = null
                    }, []);
                return (0, o.useEffect)(() => v, [v]), (0, o.useEffect)(() => {
                    let e = d.current;
                    return () => {
                        window.clearTimeout(e), p(null)
                    }
                }, [d, p]), (0, o.createElement)(et, (0, r.Z)({
                    asChild: !0
                }, f), (0, o.createElement)(em, (0, r.Z)({
                    id: c.triggerId,
                    "aria-haspopup": "menu",
                    "aria-expanded": n.open,
                    "aria-controls": c.contentId,
                    "data-state": ey(n.open)
                }, e, {
                    ref: (0, u.F)(t, c.onTriggerChange),
                    onClick: t => {
                        var r;
                        null === (r = e.onClick) || void 0 === r || r.call(e, t), e.disabled || t.defaultPrevented || (t.currentTarget.focus(), n.open || n.onOpenChange(!0))
                    },
                    onPointerMove: (0, a.M)(e.onPointerMove, ek(t => {
                        i.onItemEnter(t), t.defaultPrevented || e.disabled || n.open || s.current || (i.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
                            n.onOpenChange(!0), v()
                        }, 100))
                    })),
                    onPointerLeave: (0, a.M)(e.onPointerLeave, ek(e => {
                        var t, r;
                        v();
                        let o = null === (t = n.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                        if (o) {
                            let t = null === (r = n.content) || void 0 === r ? void 0 : r.dataset.side,
                                a = "right" === t,
                                u = o[a ? "left" : "right"],
                                l = o[a ? "right" : "left"];
                            i.onPointerGraceIntentChange({
                                area: [{
                                    x: e.clientX + (a ? -5 : 5),
                                    y: e.clientY
                                }, {
                                    x: u,
                                    y: o.top
                                }, {
                                    x: l,
                                    y: o.top
                                }, {
                                    x: l,
                                    y: o.bottom
                                }, {
                                    x: u,
                                    y: o.bottom
                                }],
                                side: t
                            }), window.clearTimeout(d.current), d.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300)
                        } else {
                            if (i.onTriggerLeave(e), e.defaultPrevented) return;
                            i.onPointerGraceIntentChange(null)
                        }
                    })),
                    onKeyDown: (0, a.M)(e.onKeyDown, t => {
                        let r = "" !== i.searchRef.current;
                        if (!e.disabled && (!r || " " !== t.key) && W[l.dir].includes(t.key)) {
                            var o;
                            n.onOpenChange(!0), null === (o = n.content) || void 0 === o || o.focus(), t.preventDefault()
                        }
                    })
                })))
            }, (e, t) => {
                let n = er(eo, e.__scopeMenu),
                    {
                        forceMount: l = n.forceMount,
                        ...c
                    } = e,
                    i = Q(eo, e.__scopeMenu),
                    s = ee(eo, e.__scopeMenu),
                    d = e_("MenuSubContent", e.__scopeMenu),
                    p = (0, o.useRef)(null),
                    f = (0, u.e)(t, p);
                return (0, o.createElement)(z.Provider, {
                    scope: e.__scopeMenu
                }, (0, o.createElement)(w.z, {
                    present: l || i.open
                }, (0, o.createElement)(z.Slot, {
                    scope: e.__scopeMenu
                }, (0, o.createElement)(es, (0, r.Z)({
                    id: d.contentId,
                    "aria-labelledby": d.triggerId
                }, c, {
                    ref: f,
                    align: "start",
                    side: "rtl" === s.dir ? "left" : "right",
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: e => {
                        var t;
                        s.isUsingKeyboardRef.current && (null === (t = p.current) || void 0 === t || t.focus()), e.preventDefault()
                    },
                    onCloseAutoFocus: e => e.preventDefault(),
                    onFocusOutside: (0, a.M)(e.onFocusOutside, e => {
                        e.target !== d.trigger && i.onOpenChange(!1)
                    }),
                    onEscapeKeyDown: (0, a.M)(e.onEscapeKeyDown, e => {
                        s.onClose(), e.preventDefault()
                    }),
                    onKeyDown: (0, a.M)(e.onKeyDown, e => {
                        let t = e.currentTarget.contains(e.target),
                            n = B[s.dir].includes(e.key);
                        if (t && n) {
                            var r;
                            i.onOpenChange(!1), null === (r = d.trigger) || void 0 === r || r.focus(), e.preventDefault()
                        }
                    })
                })))))
            };
            let eI = e => {
                    let {
                        __scopeMenu: t,
                        open: n = !1,
                        children: r,
                        dir: a,
                        onOpenChange: u,
                        modal: l = !0
                    } = e, c = j(t), [i, s] = (0, o.useState)(null), d = (0, o.useRef)(!1), f = (0, M.W)(u), v = p(a);
                    return (0, o.useEffect)(() => {
                        let e = () => {
                                d.current = !0, document.addEventListener("pointerdown", t, {
                                    capture: !0,
                                    once: !0
                                }), document.addEventListener("pointermove", t, {
                                    capture: !0,
                                    once: !0
                                })
                            },
                            t = () => d.current = !1;
                        return document.addEventListener("keydown", e, {
                            capture: !0
                        }), () => {
                            document.removeEventListener("keydown", e, {
                                capture: !0
                            }), document.removeEventListener("pointerdown", t, {
                                capture: !0
                            }), document.removeEventListener("pointermove", t, {
                                capture: !0
                            })
                        }
                    }, []), (0, o.createElement)(h.fC, c, (0, o.createElement)(J, {
                        scope: t,
                        open: n,
                        onOpenChange: f,
                        content: i,
                        onContentChange: s
                    }, (0, o.createElement)($, {
                        scope: t,
                        onClose: (0, o.useCallback)(() => f(!1), [f]),
                        isUsingKeyboardRef: d,
                        dir: v,
                        modal: l
                    }, r)))
                },
                eP = "DropdownMenu",
                [eF, eT] = (0, l.b)(eP, [N]),
                ex = N(),
                [eO, eS] = eF(eP),
                eA = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        disabled: l = !1,
                        ...c
                    } = e, s = eS("DropdownMenuTrigger", n), d = ex(n);
                    return (0, o.createElement)(et, (0, r.Z)({
                        asChild: !0
                    }, d), (0, o.createElement)(i.WV.button, (0, r.Z)({
                        type: "button",
                        id: s.triggerId,
                        "aria-haspopup": "menu",
                        "aria-expanded": s.open,
                        "aria-controls": s.open ? s.contentId : void 0,
                        "data-state": s.open ? "open" : "closed",
                        "data-disabled": l ? "" : void 0,
                        disabled: l
                    }, c, {
                        ref: (0, u.F)(t, s.triggerRef),
                        onPointerDown: (0, a.M)(e.onPointerDown, e => {
                            l || 0 !== e.button || !1 !== e.ctrlKey || (s.onOpenToggle(), s.open || e.preventDefault())
                        }),
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            !l && (["Enter", " "].includes(e.key) && s.onOpenToggle(), "ArrowDown" === e.key && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                        })
                    })))
                }),
                eZ = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...u
                    } = e, l = eS("DropdownMenuContent", n), c = ex(n), i = (0, o.useRef)(!1);
                    return (0, o.createElement)(el, (0, r.Z)({
                        id: l.contentId,
                        "aria-labelledby": l.triggerId
                    }, c, u, {
                        ref: t,
                        onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, e => {
                            var t;
                            i.current || null === (t = l.triggerRef.current) || void 0 === t || t.focus(), i.current = !1, e.preventDefault()
                        }),
                        onInteractOutside: (0, a.M)(e.onInteractOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey,
                                r = 2 === t.button || n;
                            (!l.modal || r) && (i.current = !0)
                        }),
                        style: { ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                eL = e => {
                    let {
                        __scopeDropdownMenu: t,
                        children: n,
                        dir: a,
                        open: u,
                        defaultOpen: l,
                        onOpenChange: i,
                        modal: s = !0
                    } = e, d = ex(t), p = (0, o.useRef)(null), [f = !1, v] = (0, c.T)({
                        prop: u,
                        defaultProp: l,
                        onChange: i
                    });
                    return (0, o.createElement)(eO, {
                        scope: t,
                        triggerId: (0, g.M)(),
                        triggerRef: p,
                        contentId: (0, g.M)(),
                        open: f,
                        onOpenChange: v,
                        onOpenToggle: (0, o.useCallback)(() => v(e => !e), [v]),
                        modal: s
                    }, (0, o.createElement)(eI, (0, r.Z)({}, d, {
                        open: f,
                        onOpenChange: v,
                        dir: a,
                        modal: s
                    }), n))
                },
                eK = eA,
                eV = eZ
        }
    }
]);