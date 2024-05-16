(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1129], {
        22207: function(e, t, n) {
            var r = 0 / 0,
                u = /^\s+|\s+$/g,
                o = /^[-+]0x[0-9a-f]+$/i,
                i = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                a = parseInt,
                f = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                l = "object" == typeof self && self && self.Object === Object && self,
                s = f || l || Function("return this")(),
                d = Object.prototype.toString,
                v = Math.max,
                g = Math.min,
                y = function() {
                    return s.Date.now()
                };

            function p(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function w(e) {
                if ("number" == typeof e) return e;
                if ("symbol" == typeof(t = e) || t && "object" == typeof t && "[object Symbol]" == d.call(t)) return r;
                if (p(e)) {
                    var t, n = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = p(n) ? n + "" : n
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(u, "");
                var f = i.test(e);
                return f || c.test(e) ? a(e.slice(2), f ? 2 : 8) : o.test(e) ? r : +e
            }
            e.exports = function(e, t, n) {
                var r, u, o, i, c, a, f = 0,
                    l = !1,
                    s = !1,
                    d = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function b(t) {
                    var n = r,
                        o = u;
                    return r = u = void 0, f = t, i = e.apply(o, n)
                }

                function h(e) {
                    var n = e - a,
                        r = e - f;
                    return void 0 === a || n >= t || n < 0 || s && r >= o
                }

                function E() {
                    var e, n, r, u = y();
                    if (h(u)) return m(u);
                    c = setTimeout(E, (e = u - a, n = u - f, r = t - e, s ? g(r, o - n) : r))
                }

                function m(e) {
                    return (c = void 0, d && r) ? b(e) : (r = u = void 0, i)
                }

                function k() {
                    var e, n = y(),
                        o = h(n);
                    if (r = arguments, u = this, a = n, o) {
                        if (void 0 === c) return f = e = a, c = setTimeout(E, t), l ? b(e) : i;
                        if (s) return c = setTimeout(E, t), b(a)
                    }
                    return void 0 === c && (c = setTimeout(E, t)), i
                }
                return t = w(t) || 0, p(n) && (l = !!n.leading, o = (s = "maxWait" in n) ? v(w(n.maxWait) || 0, t) : o, d = "trailing" in n ? !!n.trailing : d), k.cancel = function() {
                    void 0 !== c && clearTimeout(c), f = 0, r = a = u = c = void 0
                }, k.flush = function() {
                    return void 0 === c ? i : m(y())
                }, k
            }
        },
        1129: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return a
                },
                nj: function() {
                    return f
                }
            });
            var r = n(97016),
                u = n(22207),
                o = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect;

            function i(e, t, n, u) {
                let i = (0, r.useRef)(t);
                o(() => {
                    i.current = t
                }, [t]), (0, r.useEffect)(() => {
                    let t = (null == n ? void 0 : n.current) ? ? window;
                    if (!(t && t.addEventListener)) return;
                    let r = e => {
                        i.current(e)
                    };
                    return t.addEventListener(e, r, u), () => {
                        t.removeEventListener(e, r, u)
                    }
                }, [e, n, u])
            }
            var c = "undefined" == typeof window;

            function a(e, t, n = {}) {
                let {
                    initializeWithValue: u = !0
                } = n, a = (0, r.useCallback)(e => n.serializer ? n.serializer(e) : JSON.stringify(e), [n]), f = (0, r.useCallback)(e => {
                    let r;
                    if (n.deserializer) return n.deserializer(e);
                    if ("undefined" === e) return;
                    let u = t instanceof Function ? t() : t;
                    try {
                        r = JSON.parse(e)
                    } catch (e) {
                        return console.error("Error parsing JSON:", e), u
                    }
                    return r
                }, [n, t]), l = (0, r.useCallback)(() => {
                    let n = t instanceof Function ? t() : t;
                    if (c) return n;
                    try {
                        let t = window.localStorage.getItem(e);
                        return t ? f(t) : n
                    } catch (t) {
                        return console.warn(`Error reading localStorage key \u201C${e}\u201D:`, t), n
                    }
                }, [t, e, f]), [s, d] = (0, r.useState)(() => u ? l() : t instanceof Function ? t() : t), v = function(e) {
                    let t = (0, r.useRef)(() => {
                        throw Error("Cannot call an event handler while rendering.")
                    });
                    return o(() => {
                        t.current = e
                    }, [e]), (0, r.useCallback)((...e) => t.current(...e), [t])
                }(t => {
                    c && console.warn(`Tried setting localStorage key \u201C${e}\u201D even though environment is not a client`);
                    try {
                        let n = t instanceof Function ? t(l()) : t;
                        window.localStorage.setItem(e, a(n)), d(n), window.dispatchEvent(new StorageEvent("local-storage", {
                            key: e
                        }))
                    } catch (t) {
                        console.warn(`Error setting localStorage key \u201C${e}\u201D:`, t)
                    }
                });
                (0, r.useEffect)(() => {
                    d(l())
                }, [e]);
                let g = (0, r.useCallback)(t => {
                    null != t && t.key && t.key !== e || d(l())
                }, [e, l]);
                return i("storage", g), i("local-storage", g), [s, v]
            }

            function f(e, t, n) {
                let o = (null == n ? void 0 : n.equalityFn) ? ? ((e, t) => e === t),
                    i = e instanceof Function ? e() : e,
                    [c, a] = (0, r.useState)(i),
                    f = (0, r.useRef)(i),
                    l = function(e, t = 500, n) {
                        let o = (0, r.useRef)();
                        ! function(e) {
                            let t = (0, r.useRef)(e);
                            t.current = e, (0, r.useEffect)(() => () => {
                                t.current()
                            }, [])
                        }(() => {
                            o.current && o.current.cancel()
                        });
                        let i = (0, r.useMemo)(() => {
                            let r = u(e, t, n),
                                i = (...e) => r(...e);
                            return i.cancel = () => {
                                r.cancel()
                            }, i.isPending = () => !!o.current, i.flush = () => r.flush(), i
                        }, [e, t, n]);
                        return (0, r.useEffect)(() => {
                            o.current = u(e, t, n)
                        }, [e, t, n]), i
                    }(a, t, n);
                return o(f.current, i) || (l(i), f.current = i), [c, l]
            }
        }
    }
]);