(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8131], {
        59234: function(e, t, r) {
            "use strict";
            t.Xx = t._w = t.aP = t.KS = t.jQ = void 0, r(74086);
            let i = r(46015);

            function n(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            r(76294), t.jQ = 64, t.KS = 64, t.aP = 32, new Uint8Array(32)[0] = 9;
            let s = n(),
                o = n([1]),
                a = (n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                c = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                h = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);

            function l(e, t) {
                for (let r = 0; r < 16; r++) e[r] = 0 | t[r]
            }

            function u(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function p(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let n = i & (e[r] ^ t[r]);
                    e[r] ^= n, t[r] ^= n
                }
            }

            function f(e, t) {
                let r = n(),
                    i = n();
                for (let e = 0; e < 16; e++) i[e] = t[e];
                u(i), u(i), u(i);
                for (let e = 0; e < 2; e++) {
                    r[0] = i[0] - 65517;
                    for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                    r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                    let e = r[15] >> 16 & 1;
                    r[14] &= 65535, p(i, r, 1 - e)
                }
                for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
            }
            n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function d(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function g(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function y(e, t, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    h = 0,
                    l = 0,
                    u = 0,
                    p = 0,
                    f = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    w = 0,
                    b = 0,
                    _ = 0,
                    I = 0,
                    E = 0,
                    P = 0,
                    S = 0,
                    O = 0,
                    x = 0,
                    R = 0,
                    A = 0,
                    C = 0,
                    N = 0,
                    j = 0,
                    T = 0,
                    q = 0,
                    D = 0,
                    z = r[0],
                    M = r[1],
                    L = r[2],
                    k = r[3],
                    $ = r[4],
                    U = r[5],
                    H = r[6],
                    V = r[7],
                    B = r[8],
                    K = r[9],
                    F = r[10],
                    W = r[11],
                    Z = r[12],
                    G = r[13],
                    J = r[14],
                    Q = r[15];
                s += (i = t[0]) * z, o += i * M, a += i * L, c += i * k, h += i * $, l += i * U, u += i * H, p += i * V, f += i * B, d += i * K, g += i * F, y += i * W, v += i * Z, m += i * G, w += i * J, b += i * Q, o += (i = t[1]) * z, a += i * M, c += i * L, h += i * k, l += i * $, u += i * U, p += i * H, f += i * V, d += i * B, g += i * K, y += i * F, v += i * W, m += i * Z, w += i * G, b += i * J, _ += i * Q, a += (i = t[2]) * z, c += i * M, h += i * L, l += i * k, u += i * $, p += i * U, f += i * H, d += i * V, g += i * B, y += i * K, v += i * F, m += i * W, w += i * Z, b += i * G, _ += i * J, I += i * Q, c += (i = t[3]) * z, h += i * M, l += i * L, u += i * k, p += i * $, f += i * U, d += i * H, g += i * V, y += i * B, v += i * K, m += i * F, w += i * W, b += i * Z, _ += i * G, I += i * J, E += i * Q, h += (i = t[4]) * z, l += i * M, u += i * L, p += i * k, f += i * $, d += i * U, g += i * H, y += i * V, v += i * B, m += i * K, w += i * F, b += i * W, _ += i * Z, I += i * G, E += i * J, P += i * Q, l += (i = t[5]) * z, u += i * M, p += i * L, f += i * k, d += i * $, g += i * U, y += i * H, v += i * V, m += i * B, w += i * K, b += i * F, _ += i * W, I += i * Z, E += i * G, P += i * J, S += i * Q, u += (i = t[6]) * z, p += i * M, f += i * L, d += i * k, g += i * $, y += i * U, v += i * H, m += i * V, w += i * B, b += i * K, _ += i * F, I += i * W, E += i * Z, P += i * G, S += i * J, O += i * Q, p += (i = t[7]) * z, f += i * M, d += i * L, g += i * k, y += i * $, v += i * U, m += i * H, w += i * V, b += i * B, _ += i * K, I += i * F, E += i * W, P += i * Z, S += i * G, O += i * J, x += i * Q, f += (i = t[8]) * z, d += i * M, g += i * L, y += i * k, v += i * $, m += i * U, w += i * H, b += i * V, _ += i * B, I += i * K, E += i * F, P += i * W, S += i * Z, O += i * G, x += i * J, R += i * Q, d += (i = t[9]) * z, g += i * M, y += i * L, v += i * k, m += i * $, w += i * U, b += i * H, _ += i * V, I += i * B, E += i * K, P += i * F, S += i * W, O += i * Z, x += i * G, R += i * J, A += i * Q, g += (i = t[10]) * z, y += i * M, v += i * L, m += i * k, w += i * $, b += i * U, _ += i * H, I += i * V, E += i * B, P += i * K, S += i * F, O += i * W, x += i * Z, R += i * G, A += i * J, C += i * Q, y += (i = t[11]) * z, v += i * M, m += i * L, w += i * k, b += i * $, _ += i * U, I += i * H, E += i * V, P += i * B, S += i * K, O += i * F, x += i * W, R += i * Z, A += i * G, C += i * J, N += i * Q, v += (i = t[12]) * z, m += i * M, w += i * L, b += i * k, _ += i * $, I += i * U, E += i * H, P += i * V, S += i * B, O += i * K, x += i * F, R += i * W, A += i * Z, C += i * G, N += i * J, j += i * Q, m += (i = t[13]) * z, w += i * M, b += i * L, _ += i * k, I += i * $, E += i * U, P += i * H, S += i * V, O += i * B, x += i * K, R += i * F, A += i * W, C += i * Z, N += i * G, j += i * J, T += i * Q, w += (i = t[14]) * z, b += i * M, _ += i * L, I += i * k, E += i * $, P += i * U, S += i * H, O += i * V, x += i * B, R += i * K, A += i * F, C += i * W, N += i * Z, j += i * G, T += i * J, q += i * Q, b += (i = t[15]) * z, _ += i * M, I += i * L, E += i * k, P += i * $, S += i * U, O += i * H, x += i * V, R += i * B, A += i * K, C += i * F, N += i * W, j += i * Z, T += i * G, q += i * J, D += i * Q, s += 38 * _, o += 38 * I, a += 38 * E, c += 38 * P, h += 38 * S, l += 38 * O, u += 38 * x, p += 38 * R, f += 38 * A, d += 38 * C, g += 38 * N, y += 38 * j, v += 38 * T, m += 38 * q, w += 38 * D, n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = h, e[5] = l, e[6] = u, e[7] = p, e[8] = f, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = w, e[15] = b
            }

            function v(e, t) {
                let r = n(),
                    i = n(),
                    s = n(),
                    o = n(),
                    c = n(),
                    h = n(),
                    l = n(),
                    u = n(),
                    p = n();
                g(r, e[1], e[0]), g(p, t[1], t[0]), y(r, r, p), d(i, e[0], e[1]), d(p, t[0], t[1]), y(i, i, p), y(s, e[3], t[3]), y(s, s, a), y(o, e[2], t[2]), d(o, o, o), g(c, i, r), g(h, o, s), d(l, o, s), d(u, i, r), y(e[0], c, h), y(e[1], u, l), y(e[2], l, h), y(e[3], c, u)
            }

            function m(e, t, r) {
                for (let i = 0; i < 4; i++) p(e[i], t[i], r)
            }

            function w(e, t) {
                let r = n(),
                    i = n(),
                    s = n();
                (function(e, t) {
                    let r;
                    let i = n();
                    for (r = 0; r < 16; r++) i[r] = t[r];
                    for (r = 253; r >= 0; r--) y(i, i, i), 2 !== r && 4 !== r && y(i, i, t);
                    for (r = 0; r < 16; r++) e[r] = i[r]
                })(s, t[2]), y(r, t[0], s), y(i, t[1], s), f(e, i), e[31] ^= function(e) {
                    let t = new Uint8Array(32);
                    return f(t, e), 1 & t[0]
                }(r) << 7
            }

            function b(e, t) {
                let r = [n(), n(), n(), n()];
                l(r[0], c), l(r[1], h), l(r[2], o), y(r[3], c, h),
                    function(e, t, r) {
                        l(e[0], s), l(e[1], o), l(e[2], o), l(e[3], s);
                        for (let i = 255; i >= 0; --i) {
                            let n = r[i / 8 | 0] >> (7 & i) & 1;
                            m(e, t, n), v(t, e), v(e, e), m(e, t, n)
                        }
                    }(e, r, t)
            }
            t._w = function(e) {
                if (e.length !== t.aP) throw Error(`ed25519: seed must be ${t.aP} bytes`);
                let r = (0, i.hash)(e);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                let s = new Uint8Array(32),
                    o = [n(), n(), n(), n()];
                b(o, r), w(s, o);
                let a = new Uint8Array(64);
                return a.set(e), a.set(s, 32), {
                    publicKey: s,
                    secretKey: a
                }
            };
            let _ = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function I(e, t) {
                let r, i, n, s;
                for (i = 63; i >= 32; --i) {
                    for (r = 0, n = i - 32, s = i - 12; n < s; ++n) t[n] += r - 16 * t[i] * _[n - (i - 32)], r = Math.floor((t[n] + 128) / 256), t[n] -= 256 * r;
                    t[n] += r, t[i] = 0
                }
                for (n = 0, r = 0; n < 32; n++) t[n] += r - (t[31] >> 4) * _[n], r = t[n] >> 8, t[n] &= 255;
                for (n = 0; n < 32; n++) t[n] -= r * _[n];
                for (i = 0; i < 32; i++) t[i + 1] += t[i] >> 8, e[i] = 255 & t[i]
            }

            function E(e) {
                let t = new Float64Array(64);
                for (let r = 0; r < 64; r++) t[r] = e[r];
                for (let t = 0; t < 64; t++) e[t] = 0;
                I(e, t)
            }
            t.Xx = function(e, t) {
                let r = new Float64Array(64),
                    s = [n(), n(), n(), n()],
                    o = (0, i.hash)(e.subarray(0, 32));
                o[0] &= 248, o[31] &= 127, o[31] |= 64;
                let a = new Uint8Array(64);
                a.set(o.subarray(32), 32);
                let c = new i.SHA512;
                c.update(a.subarray(32)), c.update(t);
                let h = c.digest();
                c.clean(), E(h), b(s, h), w(a, s), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
                let l = c.digest();
                E(l);
                for (let e = 0; e < 32; e++) r[e] = h[e];
                for (let e = 0; e < 32; e++)
                    for (let t = 0; t < 32; t++) r[e + t] += l[e] * o[t];
                return I(a.subarray(32), r), a
            }
        },
        46015: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(49907),
                n = r(76294);
            t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
            var s = function() {
                function e() {
                    this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset()
                }, e.prototype.update = function(e, r) {
                    if (void 0 === r && (r = e.length), this._finished) throw Error("SHA512: can't update because hash was finished.");
                    var i = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, i, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            n = t % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, n), this._finished = !0
                    }
                    for (var s = 0; s < this.digestLength / 8; s++) i.writeUint32BE(this._stateHi[s], e, 8 * s), i.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    n.wipe(e.stateHi), n.wipe(e.stateLo), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(e, t, r, n, s, a, c) {
                for (var h, l, u, p, f, d, g, y, v = r[0], m = r[1], w = r[2], b = r[3], _ = r[4], I = r[5], E = r[6], P = r[7], S = n[0], O = n[1], x = n[2], R = n[3], A = n[4], C = n[5], N = n[6], j = n[7]; c >= 128;) {
                    for (var T = 0; T < 16; T++) {
                        var q = 8 * T + a;
                        e[T] = i.readUint32BE(s, q), t[T] = i.readUint32BE(s, q + 4)
                    }
                    for (var T = 0; T < 80; T++) {
                        var D = v,
                            z = m,
                            M = w,
                            L = b,
                            k = _,
                            $ = I,
                            U = E,
                            H = P,
                            V = S,
                            B = O,
                            K = x,
                            F = R,
                            W = A,
                            Z = C,
                            G = N,
                            J = j;
                        if (h = P, f = 65535 & (l = j), d = l >>> 16, g = 65535 & h, y = h >>> 16, h = (_ >>> 14 | A << 18) ^ (_ >>> 18 | A << 14) ^ (A >>> 9 | _ << 23), f += 65535 & (l = (A >>> 14 | _ << 18) ^ (A >>> 18 | _ << 14) ^ (_ >>> 9 | A << 23)), d += l >>> 16, g += 65535 & h, y += h >>> 16, h = _ & I ^ ~_ & E, f += 65535 & (l = A & C ^ ~A & N), d += l >>> 16, g += 65535 & h, y += h >>> 16, h = o[2 * T], f += 65535 & (l = o[2 * T + 1]), d += l >>> 16, g += 65535 & h, y += h >>> 16, h = e[T % 16], f += 65535 & (l = t[T % 16]), d += l >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, u = 65535 & g | y << 16, p = 65535 & f | d << 16, h = u, f = 65535 & (l = p), d = l >>> 16, g = 65535 & h, y = h >>> 16, h = (v >>> 28 | S << 4) ^ (S >>> 2 | v << 30) ^ (S >>> 7 | v << 25), f += 65535 & (l = (S >>> 28 | v << 4) ^ (v >>> 2 | S << 30) ^ (v >>> 7 | S << 25)), d += l >>> 16, g += 65535 & h, y += h >>> 16, h = v & m ^ v & w ^ m & w, f += 65535 & (l = S & O ^ S & x ^ O & x), d += l >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, H = 65535 & g | y << 16, J = 65535 & f | d << 16, h = L, f = 65535 & (l = F), d = l >>> 16, g = 65535 & h, y = h >>> 16, h = u, f += 65535 & (l = p), d += l >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, L = 65535 & g | y << 16, F = 65535 & f | d << 16, m = D, w = z, b = M, _ = L, I = k, E = $, P = U, v = H, O = V, x = B, R = K, A = F, C = W, N = Z, j = G, S = J, T % 16 == 15)
                            for (var q = 0; q < 16; q++) h = e[q], f = 65535 & (l = t[q]), d = l >>> 16, g = 65535 & h, y = h >>> 16, h = e[(q + 9) % 16], f += 65535 & (l = t[(q + 9) % 16]), d += l >>> 16, g += 65535 & h, y += h >>> 16, h = ((u = e[(q + 1) % 16]) >>> 1 | (p = t[(q + 1) % 16]) << 31) ^ (u >>> 8 | p << 24) ^ u >>> 7, f += 65535 & (l = (p >>> 1 | u << 31) ^ (p >>> 8 | u << 24) ^ (p >>> 7 | u << 25)), d += l >>> 16, g += 65535 & h, y += h >>> 16, h = ((u = e[(q + 14) % 16]) >>> 19 | (p = t[(q + 14) % 16]) << 13) ^ (p >>> 29 | u << 3) ^ u >>> 6, f += 65535 & (l = (p >>> 19 | u << 13) ^ (u >>> 29 | p << 3) ^ (p >>> 6 | u << 26)), d += l >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, e[q] = 65535 & g | y << 16, t[q] = 65535 & f | d << 16
                    }
                    h = v, f = 65535 & (l = S), d = l >>> 16, g = 65535 & h, y = h >>> 16, h = r[0], f += 65535 & (l = n[0]), d += l >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[0] = v = 65535 & g | y << 16, n[0] = S = 65535 & f | d << 16, h = m, f = 65535 & (l = O), d = l >>> 16, g = 65535 & h, y = h >>> 16, h = r[1], f += 65535 & (l = n[1]), d += l >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[1] = m = 65535 & g | y << 16, n[1] = O = 65535 & f | d << 16, h = w, f = 65535 & (l = x), d = l >>> 16, g = 65535 & h, y = h >>> 16, h = r[2], f += 65535 & (l = n[2]), d += l >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[2] = w = 65535 & g | y << 16, n[2] = x = 65535 & f | d << 16, h = b, f = 65535 & (l = R), d = l >>> 16, g = 65535 & h, y = h >>> 16, h = r[3], f += 65535 & (l = n[3]), d += l >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[3] = b = 65535 & g | y << 16, n[3] = R = 65535 & f | d << 16, h = _, f = 65535 & (l = A), d = l >>> 16, g = 65535 & h, y = h >>> 16, h = r[4], f += 65535 & (l = n[4]), d += l >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[4] = _ = 65535 & g | y << 16, n[4] = A = 65535 & f | d << 16, h = I, f = 65535 & (l = C), d = l >>> 16, g = 65535 & h, y = h >>> 16, h = r[5], f += 65535 & (l = n[5]), d += l >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[5] = I = 65535 & g | y << 16, n[5] = C = 65535 & f | d << 16, h = E, f = 65535 & (l = N), d = l >>> 16, g = 65535 & h, y = h >>> 16, h = r[6], f += 65535 & (l = n[6]), d += l >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[6] = E = 65535 & g | y << 16, n[6] = N = 65535 & f | d << 16, h = P, f = 65535 & (l = j), d = l >>> 16, g = 65535 & h, y = h >>> 16, h = r[7], f += 65535 & (l = n[7]), d += l >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[7] = P = 65535 & g | y << 16, n[7] = j = 65535 & f | d << 16, a += 128, c -= 128
                }
                return a
            }
            t.hash = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        69942: function(e, t, r) {
            "use strict";

            function i() {
                return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {}
            }

            function n() {
                let e = i();
                return e.subtle || e.webkitSubtle
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = i, t.getSubtleCrypto = n, t.isBrowserCryptoAvailable = function() {
                return !!i() && !!n()
            }
        },
        39850: function(e, t, r) {
            "use strict";
            var i = r(32608);

            function n() {
                return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
            }

            function s() {
                return void 0 !== i && void 0 !== i.versions && void 0 !== i.versions.node
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = n, t.isNode = s, t.isBrowser = function() {
                return !n() && !s()
            }
        },
        95736: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(33950);
            i.__exportStar(r(69942), t), i.__exportStar(r(39850), t)
        },
        98131: function(e, t, r) {
            "use strict";
            let i;
            r.d(t, {
                EthereumProvider: function() {
                    return ns
                }
            });
            var n = r(42609),
                s = r.n(n),
                o = r(23147);
            let a = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                c = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                h = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function l(e, t) {
                if ("__proto__" === e || "constructor" === e && t && "object" == typeof t && "prototype" in t) {
                    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
                    return
                }
                return t
            }

            function u(e, t = {}) {
                if ("string" != typeof e) return e;
                let r = e.trim();
                if ('"' === e[0] && e.endsWith('"') && !e.includes("\\")) return r.slice(1, -1);
                if (r.length <= 9) {
                    let e = r.toLowerCase();
                    if ("true" === e) return !0;
                    if ("false" === e) return !1;
                    if ("undefined" === e) return;
                    if ("null" === e) return null;
                    if ("nan" === e) return Number.NaN;
                    if ("infinity" === e) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === e) return Number.NEGATIVE_INFINITY
                }
                if (!h.test(e)) {
                    if (t.strict) throw SyntaxError("[destr] Invalid JSON");
                    return e
                }
                try {
                    if (a.test(e) || c.test(e)) {
                        if (t.strict) throw Error("[destr] Possible prototype pollution");
                        return JSON.parse(e, l)
                    }
                    return JSON.parse(e)
                } catch (r) {
                    if (t.strict) throw r;
                    return e
                }
            }
            var p = r(73496).Buffer;

            function f(e, ...t) {
                try {
                    var r;
                    return (r = e(...t)) && "function" == typeof r.then ? r : Promise.resolve(r)
                } catch (e) {
                    return Promise.reject(e)
                }
            }

            function d(e) {
                if (function(e) {
                        let t = typeof e;
                        return null === e || "object" !== t && "function" !== t
                    }(e)) return String(e);
                if (function(e) {
                        let t = Object.getPrototypeOf(e);
                        return !t || t.isPrototypeOf(Object)
                    }(e) || Array.isArray(e)) return JSON.stringify(e);
                if ("function" == typeof e.toJSON) return d(e.toJSON());
                throw Error("[unstorage] Cannot stringify value!")
            }
            let g = "base64:";

            function y(e) {
                return e ? e.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function v(e) {
                return (e = y(e)) ? e + ":" : ""
            }
            let m = () => {
                let e = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: t => e.has(t),
                    getItem: t => e.get(t) ? ? null,
                    getItemRaw: t => e.get(t) ? ? null,
                    setItem(t, r) {
                        e.set(t, r)
                    },
                    setItemRaw(t, r) {
                        e.set(t, r)
                    },
                    removeItem(t) {
                        e.delete(t)
                    },
                    getKeys: () => Array.from(e.keys()),
                    clear() {
                        e.clear()
                    },
                    dispose() {
                        e.clear()
                    }
                }
            };

            function w(e, t, r) {
                return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {}
            }
            async function b(e) {
                "function" == typeof e.dispose && await f(e.dispose)
            }

            function _(e) {
                return new Promise((t, r) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error)
                })
            }

            function I(e, t) {
                let r = indexedDB.open(e);
                r.onupgradeneeded = () => r.result.createObjectStore(t);
                let i = _(r);
                return (e, r) => i.then(i => r(i.transaction(t, e).objectStore(t)))
            }

            function E() {
                return i || (i = I("keyval-store", "keyval")), i
            }

            function P(e, t = E()) {
                return t("readonly", t => _(t.get(e)))
            }
            let S = e => JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() + "n" : t),
                O = e => JSON.parse(e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3'), (e, t) => "string" == typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t);

            function x(e) {
                if ("string" != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
                try {
                    return O(e)
                } catch (t) {
                    return e
                }
            }

            function R(e) {
                return "string" == typeof e ? e : S(e) || ""
            }
            var A = (e = {}) => {
                let t;
                let r = e.base && e.base.length > 0 ? `${e.base}:` : "",
                    i = e => r + e;
                return e.dbName && e.storeName && (t = I(e.dbName, e.storeName)), {
                    name: "idb-keyval",
                    options: e,
                    hasItem: async e => !(typeof await P(i(e), t) > "u"),
                    getItem: async e => await P(i(e), t) ? ? null,
                    setItem: (e, r) => (function(e, t, r = E()) {
                        return r("readwrite", r => (r.put(t, e), _(r.transaction)))
                    })(i(e), r, t),
                    removeItem: e => (function(e, t = E()) {
                        return t("readwrite", t => (t.delete(e), _(t.transaction)))
                    })(i(e), t),
                    getKeys: () => (function(e = E()) {
                        return e("readonly", e => {
                            var t;
                            if (e.getAllKeys) return _(e.getAllKeys());
                            let r = [];
                            return (t = e => r.push(e.key), e.openCursor().onsuccess = function() {
                                this.result && (t(this.result), this.result.continue())
                            }, _(e.transaction)).then(() => r)
                        })
                    })(t),
                    clear: () => (function(e = E()) {
                        return e("readwrite", e => (e.clear(), _(e.transaction)))
                    })(t)
                }
            };
            class C {
                constructor() {
                    this.indexedDb = function(e = {}) {
                        let t = {
                                mounts: {
                                    "": e.driver || m()
                                },
                                mountpoints: [""],
                                watching: !1,
                                watchListeners: [],
                                unwatch: {}
                            },
                            r = e => {
                                for (let r of t.mountpoints)
                                    if (e.startsWith(r)) return {
                                        base: r,
                                        relativeKey: e.slice(r.length),
                                        driver: t.mounts[r]
                                    };
                                return {
                                    base: "",
                                    relativeKey: e,
                                    driver: t.mounts[""]
                                }
                            },
                            i = (e, r) => t.mountpoints.filter(t => t.startsWith(e) || r && e.startsWith(t)).map(r => ({
                                relativeBase: e.length > r.length ? e.slice(r.length) : void 0,
                                mountpoint: r,
                                driver: t.mounts[r]
                            })),
                            n = (e, r) => {
                                if (t.watching)
                                    for (let i of (r = y(r), t.watchListeners)) i(e, r)
                            },
                            s = async () => {
                                if (!t.watching)
                                    for (let e in t.watching = !0, t.mounts) t.unwatch[e] = await w(t.mounts[e], n, e)
                            },
                            o = async () => {
                                if (t.watching) {
                                    for (let e in t.unwatch) await t.unwatch[e]();
                                    t.unwatch = {}, t.watching = !1
                                }
                            },
                            a = (e, t, i) => {
                                let n = new Map,
                                    s = e => {
                                        let t = n.get(e.base);
                                        return t || (t = {
                                            driver: e.driver,
                                            base: e.base,
                                            items: []
                                        }, n.set(e.base, t)), t
                                    };
                                for (let i of e) {
                                    let e = "string" == typeof i,
                                        n = y(e ? i : i.key),
                                        o = e ? void 0 : i.value,
                                        a = e || !i.options ? t : { ...t,
                                            ...i.options
                                        },
                                        c = r(n);
                                    s(c).items.push({
                                        key: n,
                                        value: o,
                                        relativeKey: c.relativeKey,
                                        options: a
                                    })
                                }
                                return Promise.all([...n.values()].map(e => i(e))).then(e => e.flat())
                            },
                            c = {
                                hasItem(e, t = {}) {
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e = y(e));
                                    return f(n.hasItem, i, t)
                                },
                                getItem(e, t = {}) {
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e = y(e));
                                    return f(n.getItem, i, t).then(e => u(e))
                                },
                                getItems: (e, t) => a(e, t, e => e.driver.getItems ? f(e.driver.getItems, e.items.map(e => ({
                                    key: e.relativeKey,
                                    options: e.options
                                })), t).then(t => t.map(t => ({
                                    key: function(...e) {
                                        return y(e.join(":"))
                                    }(e.base, t.key),
                                    value: u(t.value)
                                }))) : Promise.all(e.items.map(t => f(e.driver.getItem, t.relativeKey, t.options).then(e => ({
                                    key: t.key,
                                    value: u(e)
                                }))))),
                                getItemRaw(e, t = {}) {
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e = y(e));
                                    return n.getItemRaw ? f(n.getItemRaw, i, t) : f(n.getItem, i, t).then(e => "string" == typeof e && e.startsWith(g) ? p.from(e.slice(g.length), "base64") : e)
                                },
                                async setItem(e, t, i = {}) {
                                    if (void 0 === t) return c.removeItem(e);
                                    let {
                                        relativeKey: s,
                                        driver: o
                                    } = r(e = y(e));
                                    o.setItem && (await f(o.setItem, s, d(t), i), o.watch || n("update", e))
                                },
                                async setItems(e, t) {
                                    await a(e, t, async e => {
                                        if (e.driver.setItems) return f(e.driver.setItems, e.items.map(e => ({
                                            key: e.relativeKey,
                                            value: d(e.value),
                                            options: e.options
                                        })), t);
                                        e.driver.setItem && await Promise.all(e.items.map(t => f(e.driver.setItem, t.relativeKey, d(t.value), t.options)))
                                    })
                                },
                                async setItemRaw(e, t, i = {}) {
                                    if (void 0 === t) return c.removeItem(e, i);
                                    let {
                                        relativeKey: s,
                                        driver: o
                                    } = r(e = y(e));
                                    if (o.setItemRaw) await f(o.setItemRaw, s, t, i);
                                    else {
                                        if (!o.setItem) return;
                                        await f(o.setItem, s, "string" == typeof t ? t : g + p.from(t).toString("base64"), i)
                                    }
                                    o.watch || n("update", e)
                                },
                                async removeItem(e, t = {}) {
                                    "boolean" == typeof t && (t = {
                                        removeMeta: t
                                    });
                                    let {
                                        relativeKey: i,
                                        driver: s
                                    } = r(e = y(e));
                                    s.removeItem && (await f(s.removeItem, i, t), (t.removeMeta || t.removeMata) && await f(s.removeItem, i + "$", t), s.watch || n("remove", e))
                                },
                                async getMeta(e, t = {}) {
                                    "boolean" == typeof t && (t = {
                                        nativeOnly: t
                                    });
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e = y(e)), s = Object.create(null);
                                    if (n.getMeta && Object.assign(s, await f(n.getMeta, i, t)), !t.nativeOnly) {
                                        let e = await f(n.getItem, i + "$", t).then(e => u(e));
                                        e && "object" == typeof e && ("string" == typeof e.atime && (e.atime = new Date(e.atime)), "string" == typeof e.mtime && (e.mtime = new Date(e.mtime)), Object.assign(s, e))
                                    }
                                    return s
                                },
                                setMeta(e, t, r = {}) {
                                    return this.setItem(e + "$", t, r)
                                },
                                removeMeta(e, t = {}) {
                                    return this.removeItem(e + "$", t)
                                },
                                async getKeys(e, t = {}) {
                                    let r = i(e = v(e), !0),
                                        n = [],
                                        s = [];
                                    for (let e of r) {
                                        let r = (await f(e.driver.getKeys, e.relativeBase, t)).map(t => e.mountpoint + y(t)).filter(e => !n.some(t => e.startsWith(t)));
                                        s.push(...r), n = [e.mountpoint, ...n.filter(t => !t.startsWith(e.mountpoint))]
                                    }
                                    return e ? s.filter(t => t.startsWith(e) && !t.endsWith("$")) : s.filter(e => !e.endsWith("$"))
                                },
                                async clear(e, t = {}) {
                                    e = v(e), await Promise.all(i(e, !1).map(async e => e.driver.clear ? f(e.driver.clear, e.relativeBase, t) : e.driver.removeItem ? Promise.all((await e.driver.getKeys(e.relativeBase || "", t)).map(r => e.driver.removeItem(r, t))) : void 0))
                                },
                                async dispose() {
                                    await Promise.all(Object.values(t.mounts).map(e => b(e)))
                                },
                                watch: async e => (await s(), t.watchListeners.push(e), async () => {
                                    t.watchListeners = t.watchListeners.filter(t => t !== e), 0 === t.watchListeners.length && await o()
                                }),
                                async unwatch() {
                                    t.watchListeners = [], await o()
                                },
                                mount(e, r) {
                                    if ((e = v(e)) && t.mounts[e]) throw Error(`already mounted at ${e}`);
                                    return e && (t.mountpoints.push(e), t.mountpoints.sort((e, t) => t.length - e.length)), t.mounts[e] = r, t.watching && Promise.resolve(w(r, n, e)).then(r => {
                                        t.unwatch[e] = r
                                    }).catch(console.error), c
                                },
                                async unmount(e, r = !0) {
                                    (e = v(e)) && t.mounts[e] && (t.watching && e in t.unwatch && (t.unwatch[e](), delete t.unwatch[e]), r && await b(t.mounts[e]), t.mountpoints = t.mountpoints.filter(t => t !== e), delete t.mounts[e])
                                },
                                getMount(e = "") {
                                    let t = r(e = y(e) + ":");
                                    return {
                                        driver: t.driver,
                                        base: t.base
                                    }
                                },
                                getMounts: (e = "", t = {}) => i(e = y(e), t.parents).map(e => ({
                                    driver: e.driver,
                                    base: e.mountpoint
                                }))
                            };
                        return c
                    }({
                        driver: A({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                async getKeys() {
                    return this.indexedDb.getKeys()
                }
                async getEntries() {
                    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e => [e.key, e.value])
                }
                async getItem(e) {
                    let t = await this.indexedDb.getItem(e);
                    if (null !== t) return t
                }
                async setItem(e, t) {
                    await this.indexedDb.setItem(e, R(t))
                }
                async removeItem(e) {
                    await this.indexedDb.removeItem(e)
                }
            }
            var N = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                j = {
                    exports: {}
                };

            function T(e) {
                var t;
                return [e[0], x(null != (t = e[1]) ? t : "")]
            }! function() {
                function e() {}
                e.prototype.getItem = function(e) {
                    return this.hasOwnProperty(e) ? String(this[e]) : null
                }, e.prototype.setItem = function(e, t) {
                    this[e] = String(t)
                }, e.prototype.removeItem = function(e) {
                    delete this[e]
                }, e.prototype.clear = function() {
                    let e = this;
                    Object.keys(e).forEach(function(t) {
                        e[t] = void 0, delete e[t]
                    })
                }, e.prototype.key = function(e) {
                    return e = e || 0, Object.keys(this)[e]
                }, e.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), "u" > typeof N && N.localStorage ? j.exports = N.localStorage : "u" > typeof window && window.localStorage ? j.exports = window.localStorage : j.exports = new e
            }();
            class q {
                constructor() {
                    this.localStorage = j.exports
                }
                async getKeys() {
                    return Object.keys(this.localStorage)
                }
                async getEntries() {
                    return Object.entries(this.localStorage).map(T)
                }
                async getItem(e) {
                    let t = this.localStorage.getItem(e);
                    if (null !== t) return x(t)
                }
                async setItem(e, t) {
                    this.localStorage.setItem(e, R(t))
                }
                async removeItem(e) {
                    this.localStorage.removeItem(e)
                }
            }
            let D = async (e, t, r) => {
                    let i = "wc_storage_version",
                        n = await t.getItem(i);
                    if (n && n >= 1) {
                        r(t);
                        return
                    }
                    let s = await e.getKeys();
                    if (!s.length) {
                        r(t);
                        return
                    }
                    let o = [];
                    for (; s.length;) {
                        let r = s.shift();
                        if (!r) continue;
                        let i = r.toLowerCase();
                        if (i.includes("wc@") || i.includes("walletconnect") || i.includes("wc_") || i.includes("wallet_connect")) {
                            let i = await e.getItem(r);
                            await t.setItem(r, i), o.push(r)
                        }
                    }
                    await t.setItem(i, 1), r(t), z(e, o)
                },
                z = async (e, t) => {
                    t.length && t.forEach(async t => {
                        await e.removeItem(t)
                    })
                };
            class M {
                constructor() {
                    this.initialized = !1, this.setInitialized = e => {
                        this.storage = e, this.initialized = !0
                    };
                    let e = new q;
                    this.storage = e;
                    try {
                        let t = new C;
                        D(e, t, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                async getKeys() {
                    return await this.initialize(), this.storage.getKeys()
                }
                async getEntries() {
                    return await this.initialize(), this.storage.getEntries()
                }
                async getItem(e) {
                    return await this.initialize(), this.storage.getItem(e)
                }
                async setItem(e, t) {
                    return await this.initialize(), this.storage.setItem(e, t)
                }
                async removeItem(e) {
                    return await this.initialize(), this.storage.removeItem(e)
                }
                async initialize() {
                    this.initialized || await new Promise(e => {
                        let t = setInterval(() => {
                            this.initialized && (clearInterval(t), e())
                        }, 20)
                    })
                }
            }
            var L = r(10236),
                k = r(24542),
                $ = r.n(k);
            let U = {
                    level: "info"
                },
                H = "custom_context";
            var V = Object.defineProperty,
                B = Object.defineProperties,
                K = Object.getOwnPropertyDescriptors,
                F = Object.getOwnPropertySymbols,
                W = Object.prototype.hasOwnProperty,
                Z = Object.prototype.propertyIsEnumerable,
                G = (e, t, r) => t in e ? V(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                J = (e, t) => {
                    for (var r in t || (t = {})) W.call(t, r) && G(e, r, t[r]);
                    if (F)
                        for (var r of F(t)) Z.call(t, r) && G(e, r, t[r]);
                    return e
                },
                Q = (e, t) => B(e, K(t));

            function Y(e) {
                return Q(J({}, e), {
                    level: e ? .level || U.level
                })
            }

            function X(e, t = H) {
                return typeof e.bindings > "u" ? function(e, t = H) {
                    return e[t] || ""
                }(e, t) : e.bindings().context || ""
            }

            function ee(e, t, r = H) {
                let i = function(e, t, r = H) {
                    let i = X(e, r);
                    return i.trim() ? `${i}/${t}` : t
                }(e, t, r);
                return function(e, t, r = H) {
                    return e[r] = t, e
                }(e.child({
                    context: i
                }), i, r)
            }
            var et = r(64008);
            class er extends et.q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class ei extends et.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class en {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class es extends et.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class eo extends et.q {
                constructor(e) {
                    super()
                }
            }
            class ea {
                constructor(e, t, r, i) {
                    this.core = e, this.logger = t, this.name = r
                }
            }
            class ec extends et.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class eh extends et.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class el {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class eu {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class ep {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class ef {
                constructor(e) {
                    this.client = e
                }
            }
            var ed = r(59234),
                eg = r(74086),
                ey = r(58486);
            let ev = "base64url",
                em = "base58btc";
            var ew = r(72871),
                eb = r(8258),
                e_ = r(94588);

            function eI(e) {
                return (0, eb.B)((0, e_.m)(R(e), "utf8"), ev)
            }

            function eE(e) {
                let t = (0, e_.m)("K36", em);
                return ["did", "key", "z" + (0, eb.B)((0, ew.z)([t, e]), em)].join(":")
            }

            function eP(e = (0, eg.randomBytes)(32)) {
                return ed._w(e)
            }
            async function eS(e, t, r, i, n = (0, ey.fromMiliseconds)(Date.now())) {
                var s, o, a;
                let c = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    h = {
                        iss: eE(i.publicKey),
                        sub: e,
                        aud: t,
                        iat: n,
                        exp: n + r
                    },
                    l = (s = {
                        header: c,
                        payload: h
                    }, (0, e_.m)([eI(s.header), eI(s.payload)].join("."), "utf8"));
                return [eI((o = {
                    header: c,
                    payload: h,
                    signature: ed.Xx(i.secretKey, l)
                }).header), eI(o.payload), (a = o.signature, (0, eb.B)(a, ev))].join(".")
            }
            r(25726);
            var eO = r(50466);
            let ex = "INTERNAL_ERROR",
                eR = "SERVER_ERROR",
                eA = [-32700, -32600, -32601, -32602, -32603],
                eC = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [ex]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [eR]: {
                        code: -32e3,
                        message: "Server error"
                    }
                };

            function eN(e) {
                return Object.keys(eC).includes(e) ? eC[e] : eC[eR]
            }

            function ej(e, t, r) {
                return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? Error(`Unavailable ${r} RPC url at ${t}`) : e
            }
            var eT = r(95736);

            function eq(e = 3) {
                return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e))
            }

            function eD(e = 6) {
                return BigInt(eq(e))
            }

            function ez(e, t, r) {
                return {
                    id: r || eq(),
                    jsonrpc: "2.0",
                    method: e,
                    params: t
                }
            }

            function eM(e, t) {
                return {
                    id: e,
                    jsonrpc: "2.0",
                    result: t
                }
            }

            function eL(e, t, r) {
                var i, n, s;
                return {
                    id: e,
                    jsonrpc: "2.0",
                    error: void 0 === (i = t) ? eN(ex) : ("string" == typeof i && (i = Object.assign(Object.assign({}, eN(eR)), {
                        message: i
                    })), void 0 !== r && (i.data = r), n = i.code, eA.includes(n) && (s = i.code, i = Object.values(eC).find(e => e.code === s) || eC[eR]), i)
                }
            }
            class ek {}
            class e$ extends ek {
                constructor() {
                    super()
                }
            }
            class eU extends e$ {
                constructor(e) {
                    super()
                }
            }

            function eH(e, t) {
                let r = function(e) {
                    let t = e.match(RegExp(/^\w+:/, "gi"));
                    if (t && t.length) return t[0]
                }(e);
                return void 0 !== r && new RegExp(t).test(r)
            }

            function eV(e) {
                return eH(e, "^https?:")
            }

            function eB(e) {
                return eH(e, "^wss?:")
            }

            function eK(e) {
                return "object" == typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc
            }

            function eF(e) {
                return eK(e) && "method" in e
            }

            function eW(e) {
                return eK(e) && (eZ(e) || eG(e))
            }

            function eZ(e) {
                return "result" in e
            }

            function eG(e) {
                return "error" in e
            }
            class eJ extends eU {
                constructor(e) {
                    super(e), this.events = new n.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
                }
                async connect(e = this.connection) {
                    await this.open(e)
                }
                async disconnect() {
                    await this.close()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async request(e, t) {
                    return this.requestStrict(ez(e.method, e.params || [], e.id || eD().toString()), t)
                }
                async requestStrict(e, t) {
                    return new Promise(async (r, i) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (e) {
                            i(e)
                        }
                        this.events.on(`${e.id}`, e => {
                            eG(e) ? i(e.error) : r(e.result)
                        });
                        try {
                            await this.connection.send(e, t)
                        } catch (e) {
                            i(e)
                        }
                    })
                }
                setConnection(e = this.connection) {
                    return e
                }
                onPayload(e) {
                    this.events.emit("payload", e), eW(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                onClose(e) {
                    e && 3e3 === e.code && this.events.emit("error", Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(e = this.connection) {
                    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
            let eQ = () => "u" > typeof WebSocket || "u" > typeof r.g && "u" > typeof r.g.WebSocket || "u" > typeof window && "u" > typeof window.WebSocket || "u" > typeof self && "u" > typeof self.WebSocket,
                eY = e => e.split("?")[0],
                eX = "u" > typeof WebSocket ? WebSocket : "u" > typeof r.g && "u" > typeof r.g.WebSocket ? r.g.WebSocket : "u" > typeof window && "u" > typeof window.WebSocket ? window.WebSocket : "u" > typeof self && "u" > typeof self.WebSocket ? self.WebSocket : r(90676);
            class e0 {
                constructor(e) {
                    if (this.url = e, this.events = new n.EventEmitter, this.registering = !1, !eB(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    this.url = e
                }
                get connected() {
                    return "u" > typeof this.socket
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    return new Promise((e, t) => {
                        if (typeof this.socket > "u") {
                            t(Error("Connection already closed"));
                            return
                        }
                        this.socket.onclose = t => {
                            this.onClose(t), e()
                        }, this.socket.close()
                    })
                }
                async send(e) {
                    typeof this.socket > "u" && (this.socket = await this.register());
                    try {
                        this.socket.send(R(e))
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                register(e = this.url) {
                    if (!eB(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return t(Error("WebSocket connection is missing or invalid"));
                                e(this.socket)
                            })
                        })
                    }
                    return this.url = e, this.registering = !0, new Promise((t, r) => {
                        let i = new URLSearchParams(e).get("origin"),
                            n = (0, eT.isReactNative)() ? {
                                headers: {
                                    origin: i
                                }
                            } : {
                                rejectUnauthorized: !RegExp("wss?://localhost(:d{2,5})?").test(e)
                            },
                            s = new eX(e, [], n);
                        eQ() ? s.onerror = e => {
                            r(this.emitError(e.error))
                        } : s.on("error", e => {
                            r(this.emitError(e))
                        }), s.onopen = () => {
                            this.onOpen(s), t(s)
                        }
                    })
                }
                onOpen(e) {
                    e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
                }
                onClose(e) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    let t = "string" == typeof e.data ? x(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = eL(e, r.message || r.toString());
                    this.events.emit("payload", i)
                }
                parseError(e, t = this.url) {
                    return ej(e, eY(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(e) {
                    let t = this.parseError(Error(e ? .message || `WebSocket connection failed for host: ${eY(this.url)}`));
                    return this.events.emit("register_error", t), t
                }
            }
            var e1 = r(54537),
                e5 = r.n(e1),
                e6 = r(68767),
                e2 = r.n(e6),
                e3 = r(32608),
                e4 = function(e, t) {
                    if (e.length >= 255) throw TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                    for (var n = 0; n < e.length; n++) {
                        var s = e.charAt(n),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw TypeError(s + " is ambiguous");
                        r[o] = n
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        h = Math.log(a) / Math.log(256),
                        l = Math.log(256) / Math.log(a);

                    function u(e) {
                        if ("string" != typeof e) throw TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[0]) {
                            for (var i = 0, n = 0; e[t] === c;) i++, t++;
                            for (var s = (e.length - t) * h + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                                var l = r[e.charCodeAt(t)];
                                if (255 === l) return;
                                for (var u = 0, p = s - 1;
                                    (0 !== l || u < n) && -1 !== p; p--, u++) l += a * o[p] >>> 0, o[p] = l % 256 >>> 0, l = l / 256 >>> 0;
                                if (0 !== l) throw Error("Non-zero carry");
                                n = u, t++
                            }
                            if (" " !== e[t]) {
                                for (var f = s - n; f !== s && 0 === o[f];) f++;
                                for (var d = new Uint8Array(i + (s - f)), g = i; f !== s;) d[g++] = o[f++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n];) n++, r++;
                            for (var o = (s - n) * l + 1 >>> 0, h = new Uint8Array(o); n !== s;) {
                                for (var u = t[n], p = 0, f = o - 1;
                                    (0 !== u || p < i) && -1 !== f; f--, p++) u += 256 * h[f] >>> 0, h[f] = u % a >>> 0, u = u / a >>> 0;
                                if (0 !== u) throw Error("Non-zero carry");
                                i = p, n++
                            }
                            for (var d = o - i; d !== o && 0 === h[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(h[d]);
                            return g
                        },
                        decodeUnsafe: u,
                        decode: function(e) {
                            var r = u(e);
                            if (r) return r;
                            throw Error(`Non-${t} character`)
                        }
                    }
                };
            let e9 = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                e7 = e => new TextEncoder().encode(e),
                e8 = e => new TextDecoder().decode(e);
            class te {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class tt {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return ti(this, e)
                }
            }
            class tr {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return ti(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let ti = (e, t) => new tr({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class tn {
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new te(e, t, r), this.decoder = new tt(e, t, i)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let ts = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: i
                }) => new tn(e, t, r, i),
                to = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: i,
                        decode: n
                    } = e4(r, t);
                    return ts({
                        prefix: e,
                        name: t,
                        encode: i,
                        decode: e => e9(n(e))
                    })
                },
                ta = (e, t, r, i) => {
                    let n = {};
                    for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                    let s = e.length;
                    for (;
                        "=" === e[s - 1];) --s;
                    let o = new Uint8Array(s * r / 8 | 0),
                        a = 0,
                        c = 0,
                        h = 0;
                    for (let t = 0; t < s; ++t) {
                        let s = n[e[t]];
                        if (void 0 === s) throw SyntaxError(`Non-${i} character`);
                        c = c << r | s, (a += r) >= 8 && (a -= 8, o[h++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                tc = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        n = (1 << r) - 1,
                        s = "",
                        o = 0,
                        a = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (a = a << 8 | e[i], o += 8; o > r;) o -= r, s += t[n & a >> o];
                    if (o && (s += t[n & a << r - o]), i)
                        for (; s.length * r & 7;) s += "=";
                    return s
                },
                th = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: i
                }) => ts({
                    prefix: t,
                    name: e,
                    encode: e => tc(e, i, r),
                    decode: t => ta(t, i, r, e)
                });
            var tl = Object.freeze({
                    __proto__: null,
                    identity: ts({
                        prefix: "\0",
                        name: "identity",
                        encode: e => e8(e),
                        decode: e => e7(e)
                    })
                }),
                tu = Object.freeze({
                    __proto__: null,
                    base2: th({
                        prefix: "0",
                        name: "base2",
                        alphabet: "01",
                        bitsPerChar: 1
                    })
                }),
                tp = Object.freeze({
                    __proto__: null,
                    base8: th({
                        prefix: "7",
                        name: "base8",
                        alphabet: "01234567",
                        bitsPerChar: 3
                    })
                }),
                tf = Object.freeze({
                    __proto__: null,
                    base10: to({
                        prefix: "9",
                        name: "base10",
                        alphabet: "0123456789"
                    })
                }),
                td = Object.freeze({
                    __proto__: null,
                    base16: th({
                        prefix: "f",
                        name: "base16",
                        alphabet: "0123456789abcdef",
                        bitsPerChar: 4
                    }),
                    base16upper: th({
                        prefix: "F",
                        name: "base16upper",
                        alphabet: "0123456789ABCDEF",
                        bitsPerChar: 4
                    })
                });
            let tg = th({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                ty = th({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                tv = th({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                tm = th({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                tw = th({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                tb = th({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                });
            var t_ = Object.freeze({
                    __proto__: null,
                    base32: tg,
                    base32upper: ty,
                    base32pad: tv,
                    base32padupper: tm,
                    base32hex: tw,
                    base32hexupper: tb,
                    base32hexpad: th({
                        prefix: "t",
                        name: "base32hexpad",
                        alphabet: "0123456789abcdefghijklmnopqrstuv=",
                        bitsPerChar: 5
                    }),
                    base32hexpadupper: th({
                        prefix: "T",
                        name: "base32hexpadupper",
                        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                        bitsPerChar: 5
                    }),
                    base32z: th({
                        prefix: "h",
                        name: "base32z",
                        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                        bitsPerChar: 5
                    })
                }),
                tI = Object.freeze({
                    __proto__: null,
                    base36: to({
                        prefix: "k",
                        name: "base36",
                        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                    }),
                    base36upper: to({
                        prefix: "K",
                        name: "base36upper",
                        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    })
                }),
                tE = Object.freeze({
                    __proto__: null,
                    base58btc: to({
                        name: "base58btc",
                        prefix: "z",
                        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                    }),
                    base58flickr: to({
                        name: "base58flickr",
                        prefix: "Z",
                        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                    })
                });
            let tP = th({
                prefix: "m",
                name: "base64",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                bitsPerChar: 6
            });
            var tS = Object.freeze({
                __proto__: null,
                base64: tP,
                base64pad: th({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                base64url: th({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                base64urlpad: th({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                })
            });
            let tO = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                tx = tO.reduce((e, t, r) => (e[r] = t, e), []),
                tR = tO.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
            var tA = Object.freeze({
                __proto__: null,
                base256emoji: ts({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += tx[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let r of e) {
                            let e = tR[r.codePointAt(0)];
                            if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                })
            });

            function tC(e, t) {
                var r, i = 0,
                    t = t || 0,
                    n = 0,
                    s = t,
                    o = e.length;
                do {
                    if (s >= o) throw tC.bytes = 0, RangeError("Could not decode varint");
                    r = e[s++], i += n < 28 ? (127 & r) << n : (127 & r) * Math.pow(2, n), n += 7
                } while (r >= 128);
                return tC.bytes = s - t, i
            }
            var tN = function e(t, r, i) {
                r = r || [], i = i || 0;
                for (var n = i; t >= 2147483648;) r[i++] = 255 & t | 128, t /= 128;
                for (; - 128 & t;) r[i++] = 255 & t | 128, t >>>= 7;
                return r[i] = 0 | t, e.bytes = i - n + 1, r
            };
            let tj = (e, t, r = 0) => (tN(e, t, r), t),
                tT = e => e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10,
                tq = (e, t) => {
                    let r = t.byteLength,
                        i = tT(e),
                        n = i + tT(r),
                        s = new Uint8Array(n + r);
                    return tj(e, s, 0), tj(r, s, i), s.set(t, n), new tD(e, r, t, s)
                };
            class tD {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let tz = ({
                name: e,
                code: t,
                encode: r
            }) => new tM(e, t, r);
            class tM {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? tq(this.code, t) : t.then(e => tq(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let tL = e => async t => new Uint8Array(await crypto.subtle.digest(e, t));
            var tk = Object.freeze({
                    __proto__: null,
                    sha256: tz({
                        name: "sha2-256",
                        code: 18,
                        encode: tL("SHA-256")
                    }),
                    sha512: tz({
                        name: "sha2-512",
                        code: 19,
                        encode: tL("SHA-512")
                    })
                }),
                t$ = Object.freeze({
                    __proto__: null,
                    identity: {
                        code: 0,
                        name: "identity",
                        encode: e9,
                        digest: e => tq(0, e9(e))
                    }
                });
            new TextEncoder, new TextDecoder;
            let tU = { ...tl,
                ...tu,
                ...tp,
                ...tf,
                ...td,
                ...t_,
                ...tI,
                ...tE,
                ...tS,
                ...tA
            };

            function tH(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function tV(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }({ ...tk,
                ...t$
            });
            let tB = tV("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                tK = tV("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    let t = function(e = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? tH(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
                    }((e = e.substring(1)).length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                tF = {
                    utf8: tB,
                    "utf-8": tB,
                    hex: tU.base16,
                    latin1: tK,
                    ascii: tK,
                    binary: tK,
                    ...tU
                },
                tW = "core",
                tZ = `wc@2:${tW}:`,
                tG = {
                    logger: "error"
                },
                tJ = {
                    database: ":memory:"
                },
                tQ = "client_ed25519_seed",
                tY = ey.ONE_DAY,
                tX = ey.SIX_HOURS,
                t0 = "wss://relay.walletconnect.com",
                t1 = "wss://relay.walletconnect.org",
                t5 = {
                    message: "relayer_message",
                    message_ack: "relayer_message_ack",
                    connect: "relayer_connect",
                    disconnect: "relayer_disconnect",
                    error: "relayer_error",
                    connection_stalled: "relayer_connection_stalled",
                    publish: "relayer_publish"
                },
                t6 = {
                    payload: "payload",
                    connect: "connect",
                    disconnect: "disconnect",
                    error: "error"
                },
                t2 = ey.ONE_SECOND,
                t3 = {
                    created: "subscription_created",
                    deleted: "subscription_deleted",
                    sync: "subscription_sync",
                    resubscribed: "subscription_resubscribed"
                },
                t4 = 1e3 * ey.FIVE_SECONDS,
                t9 = {
                    wc_pairingDelete: {
                        req: {
                            ttl: ey.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: ey.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: ey.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: ey.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: ey.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: ey.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                t7 = {
                    create: "pairing_create",
                    expire: "pairing_expire",
                    delete: "pairing_delete",
                    ping: "pairing_ping"
                },
                t8 = {
                    created: "history_created",
                    updated: "history_updated",
                    deleted: "history_deleted",
                    sync: "history_sync"
                },
                re = {
                    created: "expirer_created",
                    deleted: "expirer_deleted",
                    expired: "expirer_expired",
                    sync: "expirer_sync"
                },
                rt = "verify-api",
                rr = "https://verify.walletconnect.com",
                ri = "https://verify.walletconnect.org",
                rn = [rr, ri];
            class rs {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = tZ, this.init = async () => {
                        if (!this.initialized) {
                            let e = await this.getKeyChain();
                            "u" > typeof e && (this.keychain = e), this.initialized = !0
                        }
                    }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
                        this.isInitialized(), this.keychain.set(e, t), await this.persist()
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.keychain.get(e);
                        if (typeof t > "u") {
                            let {
                                message: t
                            } = (0, o.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                            throw Error(t)
                        }
                        return t
                    }, this.del = async e => {
                        this.isInitialized(), this.keychain.delete(e), await this.persist()
                    }, this.core = e, this.logger = ee(t, this.name)
                }
                get context() {
                    return X(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setKeyChain(e) {
                    await this.core.storage.setItem(this.storageKey, (0, o.KC)(e))
                }
                async getKeyChain() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? (0, o.IP)(e) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class ro {
                constructor(e, t, r) {
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => (this.isInitialized(), eE(eP(await this.getClientSeed()).publicKey)), this.generateKeyPair = () => {
                        this.isInitialized();
                        let e = (0, o.Au)();
                        return this.setPrivateKey(e.publicKey, e.privateKey)
                    }, this.signJWT = async e => {
                        this.isInitialized();
                        let t = eP(await this.getClientSeed()),
                            r = (0, o.jd)();
                        return await eS(r, e, tY, t)
                    }, this.generateSharedKey = (e, t, r) => {
                        this.isInitialized();
                        let i = this.getPrivateKey(e),
                            n = (0, o.m$)(i, t);
                        return this.setSymKey(n, r)
                    }, this.setSymKey = async (e, t) => {
                        this.isInitialized();
                        let r = t || (0, o.Ym)(e);
                        return await this.keychain.set(r, e), r
                    }, this.deleteKeyPair = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.deleteSymKey = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.encode = async (e, t, r) => {
                        this.isInitialized();
                        let i = (0, o.EN)(r),
                            n = R(t);
                        if ((0, o.Q8)(i)) {
                            let t = i.senderPublicKey,
                                r = i.receiverPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        let s = this.getSymKey(e),
                            {
                                type: a,
                                senderPublicKey: c
                            } = i;
                        return (0, o.HI)({
                            type: a,
                            symKey: s,
                            message: n,
                            senderPublicKey: c
                        })
                    }, this.decode = async (e, t, r) => {
                        this.isInitialized();
                        let i = (0, o.Ll)(t, r);
                        if ((0, o.Q8)(i)) {
                            let t = i.receiverPublicKey,
                                r = i.senderPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        try {
                            let r = this.getSymKey(e),
                                i = (0, o.pe)({
                                    symKey: r,
                                    encoded: t
                                });
                            return x(i)
                        } catch (t) {
                            this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`), this.logger.error(t)
                        }
                    }, this.getPayloadType = e => {
                        let t = (0, o.vB)(e);
                        return (0, o.WG)(t.type)
                    }, this.getPayloadSenderPublicKey = e => {
                        let t = (0, o.vB)(e);
                        return t.senderPublicKey ? (0, eO.BB)(t.senderPublicKey, o.AW) : void 0
                    }, this.core = e, this.logger = ee(t, this.name), this.keychain = r || new rs(this.core, this.logger)
                }
                get context() {
                    return X(this.logger)
                }
                async setPrivateKey(e, t) {
                    return await this.keychain.set(e, t), e
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                async getClientSeed() {
                    let e = "";
                    try {
                        e = this.keychain.get(tQ)
                    } catch {
                        e = (0, o.jd)(), await this.keychain.set(tQ, e)
                    }
                    return function(e, t = "utf8") {
                        let r = tF[t];
                        if (!r) throw Error(`Unsupported encoding "${t}"`);
                        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? tH(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
                    }(e, "base16")
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class ra extends en {
                constructor(e, t) {
                    super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = tZ, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                let e = await this.getRelayerMessages();
                                "u" > typeof e && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (e) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (e, t) => {
                        this.isInitialized();
                        let r = (0, o.rj)(t),
                            i = this.messages.get(e);
                        return typeof i > "u" && (i = {}), "u" > typeof i[r] || (i[r] = t, this.messages.set(e, i), await this.persist()), r
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.messages.get(e);
                        return typeof t > "u" && (t = {}), t
                    }, this.has = (e, t) => (this.isInitialized(), "u" > typeof this.get(e)[(0, o.rj)(t)]), this.del = async e => {
                        this.isInitialized(), this.messages.delete(e), await this.persist()
                    }, this.logger = ee(e, this.name), this.core = t
                }
                get context() {
                    return X(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setRelayerMessages(e) {
                    await this.core.storage.setItem(this.storageKey, (0, o.KC)(e))
                }
                async getRelayerMessages() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? (0, o.IP)(e) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rc extends es {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.events = new n.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, ey.toMiliseconds)(ey.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (e, t, r) => {
                        var i;
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: r
                            }
                        });
                        try {
                            let n = r ? .ttl || tX,
                                s = (0, o._H)(r),
                                a = r ? .prompt || !1,
                                c = r ? .tag || 0,
                                h = r ? .id || eD().toString(),
                                l = {
                                    topic: e,
                                    message: t,
                                    opts: {
                                        ttl: n,
                                        relay: s,
                                        prompt: a,
                                        tag: c,
                                        id: h
                                    }
                                },
                                u = setTimeout(() => this.queue.set(h, l), this.publishTimeout);
                            try {
                                await await (0, o.hF)(this.rpcPublish(e, t, n, s, a, c, h), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(h), this.relayer.events.emit(t5.publish, l)
                            } catch (e) {
                                if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, null != (i = r ? .internal) && i.throwOnFailedPublish) throw this.removeRequestFromQueue(h), e;
                                return
                            } finally {
                                clearTimeout(u)
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: e,
                                    message: t,
                                    opts: r
                                }
                            })
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(e), e
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.relayer = e, this.logger = ee(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return X(this.logger)
                }
                rpcPublish(e, t, r, i, n, s, a) {
                    var c, h, l, u;
                    let p = {
                        method: (0, o.cO)(i.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: n,
                            tag: s
                        },
                        id: a
                    };
                    return (0, o.o8)(null == (c = p.params) ? void 0 : c.prompt) && (null == (h = p.params) || delete h.prompt), (0, o.o8)(null == (l = p.params) ? void 0 : l.tag) && (null == (u = p.params) || delete u.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: p
                    }), this.relayer.request(p)
                }
                removeRequestFromQueue(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    this.queue.forEach(async e => {
                        let {
                            topic: t,
                            message: r,
                            opts: i
                        } = e;
                        await this.publish(t, r, i)
                    })
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(L.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) {
                            this.needsTransportRestart = !1, this.relayer.events.emit(t5.connection_stalled);
                            return
                        }
                        this.checkQueue()
                    }), this.relayer.on(t5.message_ack, e => {
                        this.removeRequestFromQueue(e.id.toString())
                    })
                }
            }
            class rh {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        let r = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...r, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") {
                            this.map.delete(e);
                            return
                        }
                        if (!this.map.has(e)) return;
                        let r = this.get(e);
                        if (!this.exists(e, t)) return;
                        let i = r.filter(e => e !== t);
                        if (!i.length) {
                            this.map.delete(e);
                            return
                        }
                        this.map.set(e, i)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var rl = Object.defineProperty,
                ru = Object.defineProperties,
                rp = Object.getOwnPropertyDescriptors,
                rf = Object.getOwnPropertySymbols,
                rd = Object.prototype.hasOwnProperty,
                rg = Object.prototype.propertyIsEnumerable,
                ry = (e, t, r) => t in e ? rl(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rv = (e, t) => {
                    for (var r in t || (t = {})) rd.call(t, r) && ry(e, r, t[r]);
                    if (rf)
                        for (var r of rf(t)) rg.call(t, r) && ry(e, r, t[r]);
                    return e
                },
                rm = (e, t) => ru(e, rp(t));
            class rw extends ec {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new rh, this.events = new n.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = tZ, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        });
                        try {
                            let r = (0, o._H)(t),
                                i = {
                                    topic: e,
                                    relay: r
                                };
                            this.pending.set(e, i);
                            let n = await this.rpcSubscribe(e, r);
                            return this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: e,
                                    opts: t
                                }
                            }), n
                        } catch (e) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(e), e
                        }
                    }, this.unsubscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), "u" > typeof t ? .id ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                    }, this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise((t, r) => {
                        let i = new ey.Watch;
                        i.start(this.pendingSubscriptionWatchLabel);
                        let n = setInterval(() => {
                            !this.pending.has(e) && this.topics.includes(e) && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), t(!0)), i.elapsed(this.pendingSubscriptionWatchLabel) >= t4 && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), r(Error("Subscription resolution timeout")))
                        }, this.pollingInterval)
                    }).catch(() => !1), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = e, this.logger = ee(t, this.name), this.clientId = ""
                }
                get context() {
                    return X(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(e, t) {
                    let r = this.topicMap.get(e);
                    await Promise.all(r.map(async r => await this.unsubscribeById(e, r, t)))
                }
                async unsubscribeById(e, t, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: r
                        }
                    });
                    try {
                        let i = (0, o._H)(r);
                        await this.rpcUnsubscribe(e, t, i);
                        let n = (0, o.D6)("USER_DISCONNECTED", `${this.name}, ${e}`);
                        await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: r
                            }
                        })
                    } catch (e) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(e), e
                    }
                }
                async rpcSubscribe(e, t) {
                    let r = {
                        method: (0, o.cO)(t.protocol).subscribe,
                        params: {
                            topic: e
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await (0, o.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(t5.connection_stalled)
                    }
                    return (0, o.rj)(e + this.clientId)
                }
                async rpcBatchSubscribe(e) {
                    if (!e.length) return;
                    let t = e[0].relay,
                        r = {
                            method: (0, o.cO)(t.protocol).batchSubscribe,
                            params: {
                                topics: e.map(e => e.topic)
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await (0, o.hF)(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(t5.connection_stalled)
                    }
                }
                rpcUnsubscribe(e, t, r) {
                    let i = {
                        method: (0, o.cO)(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    }), this.relayer.request(i)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, rm(rv({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach(e => {
                        this.setSubscription(e.id, rv({}, e)), this.pending.delete(e.topic)
                    })
                }
                async onUnsubscribe(e, t, r) {
                    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
                }
                async setRelayerSubscriptions(e) {
                    await this.relayer.core.storage.setItem(this.storageKey, e)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, rv({}, t)), this.topicMap.set(t.topic, e), this.events.emit(t3.created, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    let t = this.subscriptions.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    let r = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(t3.deleted, rm(rv({}, r), {
                        reason: t
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(t3.sync)
                }
                async reset() {
                    if (this.cached.length) {
                        let e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let t = 0; t < e; t++) {
                            let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(e)
                        }
                    }
                    this.events.emit(t3.resubscribed)
                }
                async restore() {
                    try {
                        let e = await this.getRelayerSubscriptions();
                        if (typeof e > "u" || !e.length) return;
                        if (this.subscriptions.size) {
                            let {
                                message: e
                            } = (0, o.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
                    }
                }
                async batchSubscribe(e) {
                    if (!e.length) return;
                    let t = await this.rpcBatchSubscribe(e);
                    (0, o.qt)(t) && this.onBatchSubscribe(t.map((t, r) => rm(rv({}, e[r]), {
                        id: t
                    })))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
                    let e = [];
                    this.pending.forEach(t => {
                        e.push(t)
                    }), await this.batchSubscribe(e)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(L.HEARTBEAT_EVENTS.pulse, async () => {
                        await this.checkPending()
                    }), this.relayer.on(t5.connect, async () => {
                        await this.onConnect()
                    }), this.relayer.on(t5.disconnect, () => {
                        this.onDisconnect()
                    }), this.events.on(t3.created, async e => {
                        let t = t3.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    }), this.events.on(t3.deleted, async e => {
                        let t = t3.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise(e => {
                        let t = setInterval(() => {
                            this.restartInProgress || (clearInterval(t), e())
                        }, this.pollingInterval)
                    })
                }
            }
            var rb = Object.defineProperty,
                r_ = Object.getOwnPropertySymbols,
                rI = Object.prototype.hasOwnProperty,
                rE = Object.prototype.propertyIsEnumerable,
                rP = (e, t, r) => t in e ? rb(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rS = (e, t) => {
                    for (var r in t || (t = {})) rI.call(t, r) && rP(e, r, t[r]);
                    if (r_)
                        for (var r of r_(t)) rE.call(t, r) && rP(e, r, t[r]);
                    return e
                };
            class rO extends eo {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.events = new n.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async e => {
                        this.logger.debug("Publishing Request Payload");
                        try {
                            return await this.toEstablishConnection(), await this.provider.request(e)
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(e), e
                        }
                    }, this.onPayloadHandler = e => {
                        this.onProviderPayload(e)
                    }, this.onConnectHandler = () => {
                        this.events.emit(t5.connect)
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = e => {
                        this.logger.error(e), this.events.emit(t5.error, e), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on(t6.payload, this.onPayloadHandler), this.provider.on(t6.connect, this.onConnectHandler), this.provider.on(t6.disconnect, this.onDisconnectHandler), this.provider.on(t6.error, this.onProviderErrorHandler)
                    }, this.core = e.core, this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? ee(e.logger, this.name) : $()(Y({
                        level: e.logger || "error"
                    })), this.messages = new ra(this.logger, e.core), this.subscriber = new rw(this, this.logger), this.publisher = new rc(this, this.logger), this.relayUrl = e ? .relayUrl || t0, this.projectId = e.projectId, this.bundleId = (0, o.X_)(), this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${t1}...`), await this.restartTransport(t1)
                    }
                    this.initialized = !0, setTimeout(async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }, 1e4)
                }
                get context() {
                    return X(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(e, t, r) {
                    this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
                        topic: e,
                        message: t,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(e, t) {
                    var r;
                    let i;
                    this.isInitialized();
                    let n = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "";
                    if (n) return n;
                    let s = t => {
                        t.topic === e && (this.subscriber.off(t3.created, s), i())
                    };
                    return await Promise.all([new Promise(e => {
                        i = e, this.subscriber.on(t3.created, s)
                    }), new Promise(async r => {
                        n = await this.subscriber.subscribe(e, t), r()
                    })]), n
                }
                async unsubscribe(e, t) {
                    this.isInitialized(), await this.subscriber.unsubscribe(e, t)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await (0, o.hF)(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
                }
                async transportOpen(e) {
                    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
                        e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
                        try {
                            await Promise.all([new Promise(e => {
                                if (!this.initialized) return e();
                                this.subscriber.once(t3.resubscribed, () => {
                                    e()
                                })
                            }), new Promise(async (e, t) => {
                                try {
                                    await (0, o.hF)(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                                } catch (e) {
                                    t(e);
                                    return
                                }
                                e()
                            })])
                        } catch (e) {
                            if (this.logger.error(e), !this.isConnectionStalled(e.message)) throw e;
                            this.provider.events.emit(t6.disconnect)
                        } finally {
                            this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
                        }
                    }
                }
                async restartTransport(e) {
                    await this.confirmOnlineStateOrThrow(), this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!await (0, o.Gg)()) throw Error("No internet connection detected. Please restart your network and try again.")
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some(t => e.includes(t))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners();
                    let e = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new eJ(new e0((0, o.$0)({
                        sdkVersion: "2.11.0",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: e,
                        useOnCloseEvent: !0,
                        bundleId: this.bundleId
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    await this.messages.set(t, r)
                }
                async shouldIgnoreMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
                    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
                    let i = this.messages.has(t, r);
                    return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i
                }
                async onProviderPayload(e) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: e
                        }), eF(e)) {
                        if (!e.method.endsWith("_subscription")) return;
                        let t = e.params,
                            {
                                topic: r,
                                message: i,
                                publishedAt: n
                            } = t.data,
                            s = {
                                topic: r,
                                message: i,
                                publishedAt: n
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(rS({
                            type: "event",
                            event: t.id
                        }, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s)
                    } else eW(e) && this.events.emit(t5.message_ack, e)
                }
                async onMessageEvent(e) {
                    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(t5.message, e), await this.recordMessageEvent(e))
                }
                async acknowledgePayload(e) {
                    let t = eM(e.id, !0);
                    await this.provider.connection.send(t)
                }
                unregisterProviderListeners() {
                    this.provider.off(t6.payload, this.onPayloadHandler), this.provider.off(t6.connect, this.onConnectHandler), this.provider.off(t6.disconnect, this.onDisconnectHandler), this.provider.off(t6.error, this.onProviderErrorHandler)
                }
                async registerEventListeners() {
                    this.events.on(t5.connection_stalled, () => {
                        this.restartTransport().catch(e => this.logger.error(e))
                    });
                    let e = await (0, o.Gg)();
                    (0, o.uw)(async t => {
                        this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch(e => this.logger.error(e)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch(e => this.logger.error(e))))
                    })
                }
                onProviderDisconnect() {
                    this.events.emit(t5.disconnect), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
                        await this.restartTransport().catch(e => this.logger.error(e))
                    }, (0, ey.toMiliseconds)(t2)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async toEstablishConnection() {
                    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
                        if (this.connectionAttemptInProgress) return await new Promise(e => {
                            let t = setInterval(() => {
                                this.connected && (clearInterval(t), e())
                            }, this.connectionStatusPollingInterval)
                        });
                        await this.restartTransport()
                    }
                }
            }
            var rx = Object.defineProperty,
                rR = Object.getOwnPropertySymbols,
                rA = Object.prototype.hasOwnProperty,
                rC = Object.prototype.propertyIsEnumerable,
                rN = (e, t, r) => t in e ? rx(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rj = (e, t) => {
                    for (var r in t || (t = {})) rA.call(t, r) && rN(e, r, t[r]);
                    if (rR)
                        for (var r of rR(t)) rC.call(t, r) && rN(e, r, t[r]);
                    return e
                };
            class rT extends ea {
                constructor(e, t, r, i = tZ, n) {
                    super(e, t, r, i), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tZ, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => {
                            this.getKey && null !== e && !(0, o.o8)(e) ? this.map.set(this.getKey(e), e) : (0, o.xW)(e) ? this.map.set(e.id, e) : (0, o.h1)(e) && this.map.set(e.topic, e)
                        }), this.cached = [], this.initialized = !0)
                    }, this.set = async (e, t) => {
                        this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: e,
                            value: t
                        }), this.map.set(e, t), await this.persist())
                    }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter(t => Object.keys(e).every(r => e5()(t[r], e[r]))) : this.values), this.update = async (e, t) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: e,
                            update: t
                        });
                        let r = rj(rj({}, this.getData(e)), t);
                        this.map.set(e, r), await this.persist()
                    }, this.delete = async (e, t) => {
                        this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: e,
                            reason: t
                        }), this.map.delete(e), await this.persist())
                    }, this.logger = ee(t, this.name), this.storagePrefix = i, this.getKey = n
                }
                get context() {
                    return X(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(e) {
                    let t = this.map.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        let e = await this.getDataStore();
                        if (typeof e > "u" || !e.length) return;
                        if (this.map.size) {
                            let {
                                message: e
                            } = (0, o.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rq {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(s()), this.initialized = !1, this.storagePrefix = tZ, this.ignoredPayloadTypes = [o.rV], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: e
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                    }, this.create = async () => {
                        this.isInitialized();
                        let e = (0, o.jd)(),
                            t = await this.core.crypto.setSymKey(e),
                            r = (0, o.gn)(ey.FIVE_MINUTES),
                            i = {
                                protocol: "irn"
                            },
                            n = (0, o.Bv)({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: t,
                                symKey: e,
                                relay: i
                            });
                        return await this.pairings.set(t, {
                            topic: t,
                            expiry: r,
                            relay: i,
                            active: !1
                        }), await this.core.relayer.subscribe(t), this.core.expirer.set(t, r), {
                            topic: t,
                            uri: n
                        }
                    }, this.pair = async e => {
                        this.isInitialized(), this.isValidPair(e);
                        let {
                            topic: t,
                            symKey: r,
                            relay: i
                        } = (0, o.he)(e.uri);
                        if (this.pairings.keys.includes(t) && this.pairings.get(t).active) throw Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);
                        let n = (0, o.gn)(ey.FIVE_MINUTES),
                            s = {
                                topic: t,
                                relay: i,
                                expiry: n,
                                active: !1
                            };
                        return await this.pairings.set(t, s), this.core.expirer.set(t, n), e.activatePairing && await this.activate({
                            topic: t
                        }), this.events.emit(t7.create, s), this.core.crypto.keychain.has(t) || (await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                            relay: i
                        })), s
                    }, this.activate = async ({
                        topic: e
                    }) => {
                        this.isInitialized();
                        let t = (0, o.gn)(ey.THIRTY_DAYS);
                        await this.pairings.update(e, {
                            active: !0,
                            expiry: t
                        }), this.core.expirer.set(e, t)
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.pairings.keys.includes(t)) {
                            let e = await this.sendRequest(t, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, o.H1)();
                            this.events.once((0, o.E0)("pairing_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        }
                    }, this.updateExpiry = async ({
                        topic: e,
                        expiry: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            expiry: t
                        })
                    }, this.updateMetadata = async ({
                        topic: e,
                        metadata: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            peerMetadata: t
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", (0, o.D6)("USER_DISCONNECTED")), await this.deletePairing(t))
                    }, this.sendRequest = async (e, t, r) => {
                        let i = ez(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = t9[t].req;
                        return this.core.history.set(e, i), this.core.relayer.publish(e, n, s), i.id
                    }, this.sendResult = async (e, t, r) => {
                        let i = eM(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = t9[(await this.core.history.get(t, e)).request.method].res;
                        await this.core.relayer.publish(t, n, s), await this.core.history.resolve(i)
                    }, this.sendError = async (e, t, r) => {
                        let i = eL(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = await this.core.history.get(t, e),
                            o = t9[s.request.method] ? t9[s.request.method].res : t9.unregistered_method.res;
                        await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i)
                    }, this.deletePairing = async (e, t) => {
                        await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, (0, o.D6)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                    }, this.cleanup = async () => {
                        let e = this.pairings.getAll().filter(e => (0, o.Bw)(e.expiry));
                        await Promise.all(e.map(e => this.deletePairing(e.topic)))
                    }, this.onRelayEventRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(t, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(t, r);
                            default:
                                return this.onUnknownRpcMethodRequest(t, r)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.core.history.get(t, r.id)).request.method;
                        return "wc_pairingPing" === i ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(i)
                    }, this.onPairingPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.events.emit(t7.ping, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onPairingPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            eZ(t) ? this.events.emit((0, o.E0)("pairing_ping", r), {}) : eG(t) && this.events.emit((0, o.E0)("pairing_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e
                            }), await this.deletePairing(e), this.events.emit(t7.delete, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodRequest = async (e, t) => {
                        let {
                            id: r,
                            method: i
                        } = t;
                        try {
                            if (this.registeredMethods.includes(i)) return;
                            let t = (0, o.D6)("WC_METHOD_UNSUPPORTED", i);
                            await this.sendError(r, e, t), this.logger.error(t)
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodResponse = e => {
                        this.registeredMethods.includes(e) || this.logger.error((0, o.D6)("WC_METHOD_UNSUPPORTED", e))
                    }, this.isValidPair = e => {
                        var t;
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `pair() params: ${e}`);
                            throw Error(t)
                        }
                        if (!(0, o.jv)(e.uri)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                            throw Error(t)
                        }
                        let r = (0, o.he)(e.uri);
                        if (!(null != (t = r ? .relay) && t.protocol)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw Error(e)
                        }
                        if (!(null != r && r.symKey)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidDisconnect = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidPairingTopic = async e => {
                        if (!(0, o.M_)(e, !1)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                            throw Error(t)
                        }
                        if (!this.pairings.keys.includes(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                            throw Error(t)
                        }
                        if ((0, o.Bw)(this.pairings.get(e).expiry)) {
                            await this.deletePairing(e);
                            let {
                                message: t
                            } = (0, o.Z7)("EXPIRED", `pairing topic: ${e}`);
                            throw Error(t)
                        }
                    }, this.core = e, this.logger = ee(t, this.name), this.pairings = new rT(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return X(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(t5.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        let i = await this.core.crypto.decode(t, r);
                        try {
                            eF(i) ? (this.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : eW(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.core.history.delete(t, i.id))
                        } catch (e) {
                            this.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.core.expirer.on(re.expired, async e => {
                        let {
                            topic: t
                        } = (0, o.iP)(e.target);
                        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(t7.expire, {
                            topic: t
                        }))
                    })
                }
            }
            class rD extends ei {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new n.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tZ, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.records.set(e.id, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (e, t, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: e,
                                request: t,
                                chainId: r
                            }), this.records.has(t.id)) return;
                        let i = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: r,
                            expiry: (0, o.gn)(ey.THIRTY_DAYS)
                        };
                        this.records.set(i.id, i), this.events.emit(t8.created, i)
                    }, this.resolve = async e => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: e
                            }), !this.records.has(e.id)) return;
                        let t = await this.getRecord(e.id);
                        typeof t.response > "u" && (t.response = eG(e) ? {
                            error: e.error
                        } : {
                            result: e.result
                        }, this.records.set(t.id, t), this.events.emit(t8.updated, t))
                    }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: e,
                        id: t
                    }), await this.getRecord(t)), this.delete = (e, t) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: t
                        }), this.values.forEach(r => {
                            r.topic !== e || "u" > typeof t && r.id !== t || (this.records.delete(r.id), this.events.emit(t8.deleted, r))
                        })
                    }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = ee(t, this.name)
                }
                get context() {
                    return X(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    let e = [];
                    return this.values.forEach(t => {
                        if ("u" > typeof t.response) return;
                        let r = {
                            topic: t.topic,
                            request: ez(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(r)
                    }), e
                }
                async setJsonRpcRecords(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(e) {
                    this.isInitialized();
                    let t = this.records.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(t8.sync)
                }
                async restore() {
                    try {
                        let e = await this.getJsonRpcRecords();
                        if (typeof e > "u" || !e.length) return;
                        if (this.records.size) {
                            let {
                                message: e
                            } = (0, o.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                    }
                }
                registerEventListeners() {
                    this.events.on(t8.created, e => {
                        let t = t8.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(t8.updated, e => {
                        let t = t8.updated;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(t8.deleted, e => {
                        let t = t8.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.core.heartbeat.on(L.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(e => {
                            (0, ey.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id))
                        })
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rz extends eh {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new n.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = tZ, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.expirations.set(e.target, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = e => {
                        try {
                            let t = this.formatTarget(e);
                            return "u" > typeof this.getExpiration(t)
                        } catch {
                            return !1
                        }
                    }, this.set = (e, t) => {
                        this.isInitialized();
                        let r = this.formatTarget(e),
                            i = {
                                target: r,
                                expiry: t
                            };
                        this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(re.created, {
                            target: r,
                            expiration: i
                        })
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.formatTarget(e);
                        return this.getExpiration(t)
                    }, this.del = e => {
                        if (this.isInitialized(), this.has(e)) {
                            let t = this.formatTarget(e),
                                r = this.getExpiration(t);
                            this.expirations.delete(t), this.events.emit(re.deleted, {
                                target: t,
                                expiration: r
                            })
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = ee(t, this.name)
                }
                get context() {
                    return X(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return (0, o.Z4)(e);
                    if ("number" == typeof e) return (0, o.Gq)(e);
                    let {
                        message: t
                    } = (0, o.Z7)("UNKNOWN_TYPE", `Target type: ${typeof e}`);
                    throw Error(t)
                }
                async setExpirations(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(re.sync)
                }
                async restore() {
                    try {
                        let e = await this.getExpirations();
                        if (typeof e > "u" || !e.length) return;
                        if (this.expirations.size) {
                            let {
                                message: e
                            } = (0, o.Z7)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
                    }
                }
                getExpiration(e) {
                    let t = this.expirations.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    let {
                        expiry: r
                    } = t;
                    (0, ey.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(re.expired, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(L.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(re.created, e => {
                        let t = re.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(re.expired, e => {
                        let t = re.expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(re.deleted, e => {
                        let t = re.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rM extends el {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.name = rt, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async e => {
                        if (this.verifyDisabled || (0, o.b$)() || !(0, o.jU)()) return;
                        let t = this.getVerifyUrl(e ? .verifyUrl);
                        this.verifyUrl !== t && this.removeIframe(), this.verifyUrl = t;
                        try {
                            await this.createIframe()
                        } catch (e) {
                            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e)
                        }
                        if (!this.initialized) {
                            this.removeIframe(), this.verifyUrl = ri;
                            try {
                                await this.createIframe()
                            } catch (e) {
                                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e), this.verifyDisabled = !0
                            }
                        }
                    }, this.register = async e => {
                        this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId), await this.init())
                    }, this.resolve = async e => {
                        let t;
                        if (this.isDevEnv) return "";
                        let r = this.getVerifyUrl(e ? .verifyUrl);
                        try {
                            t = await this.fetchAttestation(e.attestationId, r)
                        } catch (i) {
                            this.logger.info(`failed to resolve attestation: ${e.attestationId} from url: ${r}`), this.logger.info(i), t = await this.fetchAttestation(e.attestationId, ri)
                        }
                        return t
                    }, this.fetchAttestation = async (e, t) => {
                        this.logger.info(`resolving attestation: ${e} from url: ${t}`);
                        let r = this.startAbortTimer(2 * ey.ONE_SECOND),
                            i = await fetch(`${t}/attestation/${e}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === i.status ? await i.json() : void 0
                    }, this.addToQueue = e => {
                        this.queue.push(e)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(e => this.sendPost(e)), this.queue = [])
                    }, this.sendPost = e => {
                        var t;
                        try {
                            if (!this.iframe) return;
                            null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"), this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = async () => {
                        let e;
                        let t = r => {
                            "verify_ready" === r.data && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", t), e())
                        };
                        await Promise.race([new Promise(r => {
                            if (document.getElementById(rt)) return r();
                            window.addEventListener("message", t);
                            let i = document.createElement("iframe");
                            i.id = rt, i.src = `${this.verifyUrl}/${this.projectId}`, i.style.display = "none", document.body.append(i), this.iframe = i, e = r
                        }), new Promise((e, r) => setTimeout(() => {
                            window.removeEventListener("message", t), r("verify iframe load timeout")
                        }, (0, ey.toMiliseconds)(ey.FIVE_SECONDS)))])
                    }, this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = e => {
                        let t = e || rr;
                        return rn.includes(t) || (this.logger.info(`verify url: ${t}, not included in trusted list, assigning default: ${rr}`), t = rr), t
                    }, this.logger = ee(t, this.name), this.verifyUrl = rr, this.abortController = new AbortController, this.isDevEnv = (0, o.UG)() && e3.env.IS_VITEST
                }
                get context() {
                    return X(this.logger)
                }
                startAbortTimer(e) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, ey.toMiliseconds)(e))
                }
            }
            class rL extends eu {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.context = "echo", this.registerDeviceToken = async e => {
                        let {
                            clientId: t,
                            token: r,
                            notificationType: i,
                            enableEncrypted: n = !1
                        } = e, s = `https://echo.walletconnect.com/${this.projectId}/clients`;
                        await e2()(s, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                client_id: t,
                                type: i,
                                token: r,
                                always_raw: n
                            })
                        })
                    }, this.logger = ee(t, this.context)
                }
            }
            var rk = Object.defineProperty,
                r$ = Object.getOwnPropertySymbols,
                rU = Object.prototype.hasOwnProperty,
                rH = Object.prototype.propertyIsEnumerable,
                rV = (e, t, r) => t in e ? rk(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rB = (e, t) => {
                    for (var r in t || (t = {})) rU.call(t, r) && rV(e, r, t[r]);
                    if (r$)
                        for (var r of r$(t)) rH.call(t, r) && rV(e, r, t[r]);
                    return e
                };
            class rK extends er {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = tW, this.events = new n.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || t0, this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : $()(Y({
                        level: e ? .logger || tG.logger
                    }));
                    this.logger = ee(t, this.name), this.heartbeat = new L.HeartBeat, this.crypto = new ro(this, this.logger, e ? .keychain), this.history = new rD(this, this.logger), this.expirer = new rz(this, this.logger), this.storage = null != e && e.storage ? e.storage : new M(rB(rB({}, tJ), e ? .storageOptions)), this.relayer = new rO({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new rq(this, this.logger), this.verify = new rM(this.projectId || "", this.logger), this.echoClient = new rL(this.projectId || "", this.logger)
                }
                static async init(e) {
                    let t = new rK(e);
                    await t.initialize();
                    let r = await t.crypto.getClientId();
                    return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
                }
                get context() {
                    return X(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (e) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
                    }
                }
            }
            let rF = "client",
                rW = `wc@2:${rF}:`,
                rZ = {
                    name: rF,
                    logger: "error"
                },
                rG = "WALLETCONNECT_DEEPLINK_CHOICE",
                rJ = "Proposal expired",
                rQ = ey.SEVEN_DAYS,
                rY = {
                    wc_sessionPropose: {
                        req: {
                            ttl: ey.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: ey.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: ey.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: ey.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: ey.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: ey.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: ey.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: ey.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: ey.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: ey.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: ey.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: ey.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: ey.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: ey.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: ey.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: ey.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                rX = {
                    min: ey.FIVE_MINUTES,
                    max: ey.SEVEN_DAYS
                },
                r0 = {
                    idle: "IDLE",
                    active: "ACTIVE"
                },
                r1 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var r5 = Object.defineProperty,
                r6 = Object.defineProperties,
                r2 = Object.getOwnPropertyDescriptors,
                r3 = Object.getOwnPropertySymbols,
                r4 = Object.prototype.hasOwnProperty,
                r9 = Object.prototype.propertyIsEnumerable,
                r7 = (e, t, r) => t in e ? r5(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                r8 = (e, t) => {
                    for (var r in t || (t = {})) r4.call(t, r) && r7(e, r, t[r]);
                    if (r3)
                        for (var r of r3(t)) r9.call(t, r) && r7(e, r, t[r]);
                    return e
                },
                ie = (e, t) => r6(e, r2(t));
            class it extends ef {
                constructor(e) {
                    super(e), this.name = "engine", this.events = new(s()), this.initialized = !1, this.ignoredPayloadTypes = [o.rV], this.requestQueue = {
                        state: r0.idle,
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: r0.idle,
                        queue: []
                    }, this.requestQueueDelay = ey.ONE_SECOND, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                            methods: Object.keys(rY)
                        }), this.initialized = !0, setTimeout(() => {
                            this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                        }, (0, ey.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async e => {
                        await this.isInitialized();
                        let t = ie(r8({}, e), {
                            requiredNamespaces: e.requiredNamespaces || {},
                            optionalNamespaces: e.optionalNamespaces || {}
                        });
                        await this.isValidConnect(t);
                        let {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: s,
                            relays: a
                        } = t, c = r, h, l = !1;
                        if (c && (l = this.client.core.pairing.pairings.get(c).active), !c || !l) {
                            let {
                                topic: e,
                                uri: t
                            } = await this.client.core.pairing.create();
                            c = e, h = t
                        }
                        let u = await this.client.core.crypto.generateKeyPair(),
                            p = r8({
                                requiredNamespaces: i,
                                optionalNamespaces: n,
                                relays: a ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: u,
                                    metadata: this.client.metadata
                                }
                            }, s && {
                                sessionProperties: s
                            }),
                            {
                                reject: f,
                                resolve: d,
                                done: g
                            } = (0, o.H1)(ey.FIVE_MINUTES, rJ);
                        if (this.events.once((0, o.E0)("session_connect"), async ({
                                error: e,
                                session: t
                            }) => {
                                if (e) f(e);
                                else if (t) {
                                    t.self.publicKey = u;
                                    let e = ie(r8({}, t), {
                                        requiredNamespaces: t.requiredNamespaces,
                                        optionalNamespaces: t.optionalNamespaces
                                    });
                                    await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), c && await this.client.core.pairing.updateMetadata({
                                        topic: c,
                                        metadata: t.peer.metadata
                                    }), d(e)
                                }
                            }), !c) {
                            let {
                                message: e
                            } = (0, o.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
                            throw Error(e)
                        }
                        let y = await this.sendRequest({
                                topic: c,
                                method: "wc_sessionPropose",
                                params: p
                            }),
                            v = (0, o.gn)(ey.FIVE_MINUTES);
                        return await this.setProposal(y, r8({
                            id: y,
                            expiry: v
                        }, p)), {
                            uri: h,
                            approval: g
                        }
                    }, this.pair = async e => (await this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
                        await this.isInitialized(), await this.isValidApprove(e);
                        let {
                            id: t,
                            relayProtocol: r,
                            namespaces: i,
                            sessionProperties: n
                        } = e, {
                            pairingTopic: s,
                            proposer: a,
                            requiredNamespaces: c,
                            optionalNamespaces: h
                        } = this.client.proposal.get(t);
                        s = s || "", (0, o.L5)(c) || (c = (0, o.fc)(i, "approve()"));
                        let l = await this.client.core.crypto.generateKeyPair(),
                            u = a.publicKey,
                            p = await this.client.core.crypto.generateSharedKey(l, u);
                        s && t && (await this.client.core.pairing.updateMetadata({
                            topic: s,
                            metadata: a.metadata
                        }), await this.sendResult({
                            id: t,
                            topic: s,
                            result: {
                                relay: {
                                    protocol: r ? ? "irn"
                                },
                                responderPublicKey: l
                            }
                        }), await this.client.proposal.delete(t, (0, o.D6)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: s
                        }));
                        let f = r8({
                            relay: {
                                protocol: r ? ? "irn"
                            },
                            namespaces: i,
                            requiredNamespaces: c,
                            optionalNamespaces: h,
                            pairingTopic: s,
                            controller: {
                                publicKey: l,
                                metadata: this.client.metadata
                            },
                            expiry: (0, o.gn)(rQ)
                        }, n && {
                            sessionProperties: n
                        });
                        await this.client.core.relayer.subscribe(p), await this.sendRequest({
                            topic: p,
                            method: "wc_sessionSettle",
                            params: f,
                            throwOnFailedPublish: !0
                        });
                        let d = ie(r8({}, f), {
                            topic: p,
                            pairingTopic: s,
                            acknowledged: !1,
                            self: f.controller,
                            peer: {
                                publicKey: a.publicKey,
                                metadata: a.metadata
                            },
                            controller: l
                        });
                        return await this.client.session.set(p, d), await this.setExpiry(p, (0, o.gn)(rQ)), {
                            topic: p,
                            acknowledged: () => new Promise(e => setTimeout(() => e(this.client.session.get(p)), 500))
                        }
                    }, this.reject = async e => {
                        await this.isInitialized(), await this.isValidReject(e);
                        let {
                            id: t,
                            reason: r
                        } = e, {
                            pairingTopic: i
                        } = this.client.proposal.get(t);
                        i && (await this.sendError(t, i, r), await this.client.proposal.delete(t, (0, o.D6)("USER_DISCONNECTED")))
                    }, this.update = async e => {
                        await this.isInitialized(), await this.isValidUpdate(e);
                        let {
                            topic: t,
                            namespaces: r
                        } = e, i = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionUpdate",
                            params: {
                                namespaces: r
                            }
                        }), {
                            done: n,
                            resolve: s,
                            reject: a
                        } = (0, o.H1)();
                        return this.events.once((0, o.E0)("session_update", i), ({
                            error: e
                        }) => {
                            e ? a(e) : s()
                        }), await this.client.session.update(t, {
                            namespaces: r
                        }), {
                            acknowledged: n
                        }
                    }, this.extend = async e => {
                        await this.isInitialized(), await this.isValidExtend(e);
                        let {
                            topic: t
                        } = e, r = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionExtend",
                            params: {}
                        }), {
                            done: i,
                            resolve: n,
                            reject: s
                        } = (0, o.H1)();
                        return this.events.once((0, o.E0)("session_extend", r), ({
                            error: e
                        }) => {
                            e ? s(e) : n()
                        }), await this.setExpiry(t, (0, o.gn)(rQ)), {
                            acknowledged: i
                        }
                    }, this.request = async e => {
                        await this.isInitialized(), await this.isValidRequest(e);
                        let {
                            chainId: t,
                            request: r,
                            topic: i,
                            expiry: n
                        } = e, s = eq(), {
                            done: a,
                            resolve: c,
                            reject: h
                        } = (0, o.H1)(n, "Request expired. Please try again.");
                        return this.events.once((0, o.E0)("session_request", s), ({
                            error: e,
                            result: t
                        }) => {
                            e ? h(e) : c(t)
                        }), await Promise.all([new Promise(async e => {
                            await this.sendRequest({
                                clientRpcId: s,
                                topic: i,
                                method: "wc_sessionRequest",
                                params: {
                                    request: r,
                                    chainId: t
                                },
                                expiry: n,
                                throwOnFailedPublish: !0
                            }).catch(e => h(e)), this.client.events.emit("session_request_sent", {
                                topic: i,
                                request: r,
                                chainId: t,
                                id: s
                            }), e()
                        }), new Promise(async e => {
                            let t = await (0, o.bW)(this.client.core.storage, rG);
                            (0, o.Hh)({
                                id: s,
                                topic: i,
                                wcDeepLink: t
                            }), e()
                        }), a()]).then(e => e[2])
                    }, this.respond = async e => {
                        await this.isInitialized(), await this.isValidRespond(e);
                        let {
                            topic: t,
                            response: r
                        } = e, {
                            id: i
                        } = r;
                        eZ(r) ? await this.sendResult({
                            id: i,
                            topic: t,
                            result: r.result,
                            throwOnFailedPublish: !0
                        }) : eG(r) && await this.sendError(i, t, r.error), this.cleanupAfterResponse(e)
                    }, this.ping = async e => {
                        await this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            let e = await this.sendRequest({
                                    topic: t,
                                    method: "wc_sessionPing",
                                    params: {}
                                }),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, o.H1)();
                            this.events.once((0, o.E0)("session_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                    }, this.emit = async e => {
                        await this.isInitialized(), await this.isValidEmit(e);
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e;
                        await this.sendRequest({
                            topic: t,
                            method: "wc_sessionEvent",
                            params: {
                                event: r,
                                chainId: i
                            }
                        })
                    }, this.disconnect = async e => {
                        await this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.client.session.keys.includes(t) ? (await this.sendRequest({
                            topic: t,
                            method: "wc_sessionDelete",
                            params: (0, o.D6)("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }), await this.deleteSession(t)) : await this.client.core.pairing.disconnect({
                            topic: t
                        })
                    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter(t => (0, o.Ih)(t, e))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async e => {
                        if (e.pairingTopic) try {
                            let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter(r => {
                                    var i, n;
                                    return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                                });
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map(e => this.client.core.pairing.disconnect({
                                topic: e.topic
                            }))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.deleteSession = async (e, t) => {
                        let {
                            self: r
                        } = this.client.session.get(e);
                        await this.client.core.relayer.unsubscribe(e), this.client.session.delete(e, (0, o.D6)("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), t || this.client.core.expirer.del(e), this.client.core.storage.removeItem(rG).catch(e => this.client.logger.warn(e)), this.getPendingSessionRequests().forEach(t => {
                            t.topic === e && this.deletePendingSessionRequest(t.id, (0, o.D6)("USER_DISCONNECTED"))
                        })
                    }, this.deleteProposal = async (e, t) => {
                        await Promise.all([this.client.proposal.delete(e, (0, o.D6)("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.deletePendingSessionRequest = async (e, t, r = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(t => t.id !== e), r && (this.sessionRequestQueue.state = r0.idle)
                    }, this.setExpiry = async (e, t) => {
                        this.client.session.keys.includes(e) && await this.client.session.update(e, {
                            expiry: t
                        }), this.client.core.expirer.set(e, t)
                    }, this.setProposal = async (e, t) => {
                        await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry)
                    }, this.setPendingSessionRequest = async e => {
                        let t = rY.wc_sessionRequest.req.ttl,
                            {
                                id: r,
                                topic: i,
                                params: n,
                                verifyContext: s
                            } = e;
                        await this.client.pendingRequest.set(r, {
                            id: r,
                            topic: i,
                            params: n,
                            verifyContext: s
                        }), t && this.client.core.expirer.set(r, (0, o.gn)(t))
                    }, this.sendRequest = async e => {
                        let {
                            topic: t,
                            method: r,
                            params: i,
                            expiry: n,
                            relayRpcId: s,
                            clientRpcId: a,
                            throwOnFailedPublish: c
                        } = e, h = ez(r, i, a);
                        if ((0, o.jU)() && r1.includes(r)) {
                            let e = (0, o.rj)(JSON.stringify(h));
                            this.client.core.verify.register({
                                attestationId: e
                            })
                        }
                        let l = await this.client.core.crypto.encode(t, h),
                            u = rY[r].req;
                        return n && (u.ttl = n), s && (u.id = s), this.client.core.history.set(t, h), c ? (u.internal = ie(r8({}, u.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(t, l, u)) : this.client.core.relayer.publish(t, l, u).catch(e => this.client.logger.error(e)), h.id
                    }, this.sendResult = async e => {
                        let {
                            id: t,
                            topic: r,
                            result: i,
                            throwOnFailedPublish: n
                        } = e, s = eM(t, i), o = await this.client.core.crypto.encode(r, s), a = rY[(await this.client.core.history.get(r, t)).request.method].res;
                        n ? (a.internal = ie(r8({}, a.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(r, o, a)) : this.client.core.relayer.publish(r, o, a).catch(e => this.client.logger.error(e)), await this.client.core.history.resolve(s)
                    }, this.sendError = async (e, t, r) => {
                        let i = eL(e, r),
                            n = await this.client.core.crypto.encode(t, i),
                            s = rY[(await this.client.core.history.get(t, e)).request.method].res;
                        this.client.core.relayer.publish(t, n, s), await this.client.core.history.resolve(i)
                    }, this.cleanup = async () => {
                        let e = [],
                            t = [];
                        this.client.session.getAll().forEach(t => {
                            (0, o.Bw)(t.expiry) && e.push(t.topic)
                        }), this.client.proposal.getAll().forEach(e => {
                            (0, o.Bw)(e.expiry) && t.push(e.id)
                        }), await Promise.all([...e.map(e => this.deleteSession(e)), ...t.map(e => this.deleteProposal(e))])
                    }, this.onRelayEventRequest = async e => {
                        this.requestQueue.queue.push(e), await this.processRequestsQueue()
                    }, this.processRequestsQueue = async () => {
                        if (this.requestQueue.state === r0.active) {
                            this.client.logger.info("Request queue already active, skipping...");
                            return
                        }
                        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                            this.requestQueue.state = r0.active;
                            let e = this.requestQueue.queue.shift();
                            if (e) try {
                                this.processRequest(e), await new Promise(e => setTimeout(e, 300))
                            } catch (e) {
                                this.client.logger.warn(e)
                            }
                        }
                        this.requestQueue.state = r0.idle
                    }, this.processRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = r.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(t, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(t, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(t, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${i}`)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.client.core.history.get(t, r.id)).request.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(t, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${i}`)
                        }
                    }, this.onRelayEventUnknownPayload = e => {
                        let {
                            topic: t
                        } = e, {
                            message: r
                        } = (0, o.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
                        throw Error(r)
                    }, this.onSessionProposeRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            this.isValidConnect(r8({}, t.params));
                            let n = (0, o.gn)(ey.FIVE_MINUTES),
                                s = r8({
                                    id: i,
                                    pairingTopic: e,
                                    expiry: n
                                }, r);
                            await this.setProposal(i, s);
                            let a = (0, o.rj)(JSON.stringify(t)),
                                c = await this.getVerifyContext(a, s.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: i,
                                params: s,
                                verifyContext: c
                            })
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionProposeResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        if (eZ(t)) {
                            let {
                                result: i
                            } = t;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: i
                            });
                            let n = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: n
                            });
                            let s = n.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            let o = i.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            let a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            let c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: e
                            })
                        } else eG(t) && (await this.client.proposal.delete(r, (0, o.D6)("USER_DISCONNECTED")), this.events.emit((0, o.E0)("session_connect"), {
                            error: t.error
                        }))
                    }, this.onSessionSettleRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidSessionSettleRequest(i);
                            let {
                                relay: r,
                                controller: n,
                                expiry: s,
                                namespaces: a,
                                requiredNamespaces: c,
                                optionalNamespaces: h,
                                sessionProperties: l,
                                pairingTopic: u
                            } = t.params, p = r8({
                                topic: e,
                                relay: r,
                                expiry: s,
                                namespaces: a,
                                acknowledged: !0,
                                pairingTopic: u,
                                requiredNamespaces: c,
                                optionalNamespaces: h,
                                controller: n.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: n.publicKey,
                                    metadata: n.metadata
                                }
                            }, l && {
                                sessionProperties: l
                            });
                            await this.sendResult({
                                id: t.id,
                                topic: e,
                                result: !0
                            }), this.events.emit((0, o.E0)("session_connect"), {
                                session: p
                            }), this.cleanupDuplicatePairings(p)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionSettleResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        eZ(t) ? (await this.client.session.update(e, {
                            acknowledged: !0
                        }), this.events.emit((0, o.E0)("session_approve", r), {})) : eG(t) && (await this.client.session.delete(e, (0, o.D6)("USER_DISCONNECTED")), this.events.emit((0, o.E0)("session_approve", r), {
                            error: t.error
                        }))
                    }, this.onSessionUpdateRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            let t = `${e}_session_update`,
                                n = o.O6.get(t);
                            if (n && this.isRequestOutOfSync(n, i)) {
                                this.client.logger.info(`Discarding out of sync request - ${i}`);
                                return
                            }
                            this.isValidUpdate(r8({
                                topic: e
                            }, r)), await this.client.session.update(e, {
                                namespaces: r.namespaces
                            }), await this.sendResult({
                                id: i,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_update", {
                                id: i,
                                topic: e,
                                params: r
                            }), o.O6.set(t, i)
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.isRequestOutOfSync = (e, t) => parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        eZ(t) ? this.events.emit((0, o.E0)("session_update", r), {}) : eG(t) && this.events.emit((0, o.E0)("session_update", r), {
                            error: t.error
                        })
                    }, this.onSessionExtendRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidExtend({
                                topic: e
                            }), await this.setExpiry(e, (0, o.gn)(rQ)), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_extend", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionExtendResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        eZ(t) ? this.events.emit((0, o.E0)("session_extend", r), {}) : eG(t) && this.events.emit((0, o.E0)("session_extend", r), {
                            error: t.error
                        })
                    }, this.onSessionPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            eZ(t) ? this.events.emit((0, o.E0)("session_ping", r), {}) : eG(t) && this.events.emit((0, o.E0)("session_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e,
                                reason: t.params
                            }), await Promise.all([new Promise(t => {
                                this.client.core.relayer.once(t5.publish, async () => {
                                    t(await this.deleteSession(e))
                                })
                            }), this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            })]), this.client.events.emit("session_delete", {
                                id: r,
                                topic: e
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onSessionRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidRequest(r8({
                                topic: e
                            }, i));
                            let t = (0, o.rj)(JSON.stringify(ez("wc_sessionRequest", i, r))),
                                n = this.client.session.get(e),
                                s = await this.getVerifyContext(t, n.peer.metadata),
                                a = {
                                    id: r,
                                    topic: e,
                                    params: i,
                                    verifyContext: s
                                };
                            await this.setPendingSessionRequest(a), this.addSessionRequestToSessionRequestQueue(a), this.processSessionRequestQueue()
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionRequestResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        eZ(t) ? this.events.emit((0, o.E0)("session_request", r), {
                            result: t.result
                        }) : eG(t) && this.events.emit((0, o.E0)("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionEventRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            let t = `${e}_session_event_${i.event.name}`,
                                n = o.O6.get(t);
                            if (n && this.isRequestOutOfSync(n, r)) {
                                this.client.logger.info(`Discarding out of sync request - ${r}`);
                                return
                            }
                            this.isValidEmit(r8({
                                topic: e
                            }, i)), this.client.events.emit("session_event", {
                                id: r,
                                topic: e,
                                params: i
                            }), o.O6.set(t, r)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.addSessionRequestToSessionRequestQueue = e => {
                        this.sessionRequestQueue.queue.push(e)
                    }, this.cleanupAfterResponse = e => {
                        this.deletePendingSessionRequest(e.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = r0.idle, this.processSessionRequestQueue()
                        }, (0, ey.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if (this.sessionRequestQueue.state === r0.active) {
                            this.client.logger.info("session request queue is already active.");
                            return
                        }
                        let e = this.sessionRequestQueue.queue[0];
                        if (!e) {
                            this.client.logger.info("session request queue is empty.");
                            return
                        }
                        try {
                            this.sessionRequestQueue.state = r0.active, this.client.events.emit("session_request", e)
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onPairingCreated = e => {
                        if (e.active) return;
                        let t = this.client.proposal.getAll().find(t => t.pairingTopic === e.topic);
                        t && this.onSessionProposeRequest(e.topic, ez("wc_sessionPropose", {
                            requiredNamespaces: t.requiredNamespaces,
                            optionalNamespaces: t.optionalNamespaces,
                            relays: t.relays,
                            proposer: t.proposer,
                            sessionProperties: t.sessionProperties
                        }, t.id))
                    }, this.isValidConnect = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                            throw Error(t)
                        }
                        let {
                            pairingTopic: t,
                            requiredNamespaces: r,
                            optionalNamespaces: i,
                            sessionProperties: n,
                            relays: s
                        } = e;
                        if ((0, o.o8)(t) || await this.isValidPairingTopic(t), !(0, o.PM)(s, !0)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `connect() relays: ${s}`);
                            throw Error(e)
                        }(0, o.o8)(r) || 0 === (0, o.L5)(r) || this.validateNamespaces(r, "requiredNamespaces"), (0, o.o8)(i) || 0 === (0, o.L5)(i) || this.validateNamespaces(i, "optionalNamespaces"), (0, o.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.validateNamespaces = (e, t) => {
                        let r = (0, o.n)(e, "connect()", t);
                        if (r) throw Error(r.message)
                    }, this.isValidApprove = async e => {
                        if (!(0, o.EJ)(e)) throw Error((0, o.Z7)("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                        let {
                            id: t,
                            namespaces: r,
                            relayProtocol: i,
                            sessionProperties: n
                        } = e;
                        await this.isValidProposalId(t);
                        let s = this.client.proposal.get(t),
                            a = (0, o.in)(r, "approve()");
                        if (a) throw Error(a.message);
                        let c = (0, o.rF)(s.requiredNamespaces, r, "approve()");
                        if (c) throw Error(c.message);
                        if (!(0, o.M_)(i, !0)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                            throw Error(e)
                        }(0, o.o8)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.isValidReject = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `reject() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            id: t,
                            reason: r
                        } = e;
                        if (await this.isValidProposalId(t), !(0, o.$t)(r)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidSessionSettleRequest = e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            relay: t,
                            controller: r,
                            namespaces: i,
                            expiry: n
                        } = e;
                        if (!(0, o.Z2)(t)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw Error(e)
                        }
                        let s = (0, o.Dd)(r, "onSessionSettleRequest()");
                        if (s) throw Error(s.message);
                        let a = (0, o.in)(i, "onSessionSettleRequest()");
                        if (a) throw Error(a.message);
                        if ((0, o.Bw)(n)) {
                            let {
                                message: e
                            } = (0, o.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw Error(e)
                        }
                    }, this.isValidUpdate = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `update() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            namespaces: r
                        } = e;
                        await this.isValidSessionTopic(t);
                        let i = this.client.session.get(t),
                            n = (0, o.in)(r, "update()");
                        if (n) throw Error(n.message);
                        let s = (0, o.rF)(i.requiredNamespaces, r, "update()");
                        if (s) throw Error(s.message)
                    }, this.isValidExtend = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `extend() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionTopic(t)
                    }, this.isValidRequest = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `request() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            request: r,
                            chainId: i,
                            expiry: n
                        } = e;
                        await this.isValidSessionTopic(t);
                        let {
                            namespaces: s
                        } = this.client.session.get(t);
                        if (!(0, o.p8)(s, i)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `request() chainId: ${i}`);
                            throw Error(e)
                        }
                        if (!(0, o.hH)(r)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                        if (!(0, o.al)(s, i, r.method)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `request() method: ${r.method}`);
                            throw Error(e)
                        }
                        if (n && !(0, o.ON)(n, rX)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `request() expiry: ${n}. Expiry must be a number (in seconds) between ${rX.min} and ${rX.max}`);
                            throw Error(e)
                        }
                    }, this.isValidRespond = async e => {
                        var t;
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `respond() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: r,
                            response: i
                        } = e;
                        try {
                            await this.isValidSessionTopic(r)
                        } catch (r) {
                            throw null != (t = e ? .response) && t.id && this.cleanupAfterResponse(e), r
                        }
                        if (!(0, o.JT)(i)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidEmit = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `emit() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e;
                        await this.isValidSessionTopic(t);
                        let {
                            namespaces: n
                        } = this.client.session.get(t);
                        if (!(0, o.p8)(n, i)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                            throw Error(e)
                        }
                        if (!(0, o.nf)(r)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                        if (!(0, o.sI)(n, i, r.name)) {
                            let {
                                message: e
                            } = (0, o.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidDisconnect = async e => {
                        if (!(0, o.EJ)(e)) {
                            let {
                                message: t
                            } = (0, o.Z7)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.getVerifyContext = async (e, t) => {
                        let r = {
                            verified: {
                                verifyUrl: t.verifyUrl || rr,
                                validation: "UNKNOWN",
                                origin: t.url || ""
                            }
                        };
                        try {
                            let i = await this.client.core.verify.resolve({
                                attestationId: e,
                                verifyUrl: t.verifyUrl
                            });
                            i && (r.verified.origin = i.origin, r.verified.isScam = i.isScam, r.verified.validation = i.origin === new URL(t.url).origin ? "VALID" : "INVALID")
                        } catch (e) {
                            this.client.logger.info(e)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (e, t) => {
                        Object.values(e).forEach(e => {
                            if (!(0, o.M_)(e, !1)) {
                                let {
                                    message: r
                                } = (0, o.Z7)("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                                throw Error(r)
                            }
                        })
                    }
                }
                async isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.Z7)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(t5.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        let i = await this.client.core.crypto.decode(t, r);
                        try {
                            eF(i) ? (this.client.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : eW(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.client.core.history.delete(t, i.id)) : this.onRelayEventUnknownPayload({
                                topic: t,
                                payload: i
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(re.expired, async e => {
                        let {
                            topic: t,
                            id: r
                        } = (0, o.iP)(e.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, (0, o.Z7)("EXPIRED"), !0);
                        t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", {
                            topic: t
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    })
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(t7.create, e => this.onPairingCreated(e))
                }
                isValidPairingTopic(e) {
                    if (!(0, o.M_)(e, !1)) {
                        let {
                            message: t
                        } = (0, o.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, o.Bw)(this.client.core.pairing.pairings.get(e).expiry)) {
                        let {
                            message: t
                        } = (0, o.Z7)("EXPIRED", `pairing topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionTopic(e) {
                    if (!(0, o.M_)(e, !1)) {
                        let {
                            message: t
                        } = (0, o.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.session.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, o.Bw)(this.client.session.get(e).expiry)) {
                        await this.deleteSession(e);
                        let {
                            message: t
                        } = (0, o.Z7)("EXPIRED", `session topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionOrPairingTopic(e) {
                    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
                    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
                    else if ((0, o.M_)(e, !1)) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    } else {
                        let {
                            message: t
                        } = (0, o.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidProposalId(e) {
                    if (!(0, o.Q0)(e)) {
                        let {
                            message: t
                        } = (0, o.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.proposal.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, o.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, o.Bw)(this.client.proposal.get(e).expiry)) {
                        await this.deleteProposal(e);
                        let {
                            message: t
                        } = (0, o.Z7)("EXPIRED", `proposal id: ${e}`);
                        throw Error(t)
                    }
                }
            }
            class ir extends rT {
                constructor(e, t) {
                    super(e, t, "proposal", rW), this.core = e, this.logger = t
                }
            }
            class ii extends rT {
                constructor(e, t) {
                    super(e, t, "session", rW), this.core = e, this.logger = t
                }
            }
            class is extends rT {
                constructor(e, t) {
                    super(e, t, "request", rW, e => e.id), this.core = e, this.logger = t
                }
            }
            class io extends ep {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = rZ.name, this.events = new n.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
                        try {
                            return await this.engine.connect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.pair = async e => {
                        try {
                            return await this.engine.pair(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approve = async e => {
                        try {
                            return await this.engine.approve(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.reject = async e => {
                        try {
                            return await this.engine.reject(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.update = async e => {
                        try {
                            return await this.engine.update(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.extend = async e => {
                        try {
                            return await this.engine.extend(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.request = async e => {
                        try {
                            return await this.engine.request(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.respond = async e => {
                        try {
                            return await this.engine.respond(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.ping = async e => {
                        try {
                            return await this.engine.ping(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.emit = async e => {
                        try {
                            return await this.engine.emit(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.disconnect = async e => {
                        try {
                            return await this.engine.disconnect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.find = e => {
                        try {
                            return this.engine.find(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.name = e ? .name || rZ.name, this.metadata = e ? .metadata || (0, o.D)();
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : $()(Y({
                        level: e ? .logger || rZ.logger
                    }));
                    this.core = e ? .core || new rK(e), this.logger = ee(t, this.name), this.session = new ii(this.core, this.logger), this.proposal = new ir(this.core, this.logger), this.pendingRequest = new is(this.core, this.logger), this.engine = new it(this)
                }
                static async init(e) {
                    let t = new io(e);
                    return await t.initialize(), t
                }
                get context() {
                    return X(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (e) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
                    }
                }
            }
            var ia = r(36140),
                ic = r.n(ia);
            let ih = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class il {
                constructor(e, t = !1) {
                    if (this.url = e, this.disableProviderPing = t, this.events = new n.EventEmitter, this.isAvailable = !1, this.registering = !1, !eV(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    this.url = e, this.disableProviderPing = t
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    if (!this.isAvailable) throw Error("Connection already closed");
                    this.onClose()
                }
                async send(e, t) {
                    this.isAvailable || await this.register();
                    try {
                        let t = R(e),
                            r = await ic()(this.url, Object.assign(Object.assign({}, ih), {
                                body: t
                            })),
                            i = await r.json();
                        this.onPayload({
                            data: i
                        })
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                async register(e = this.url) {
                    if (!eV(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), void 0 === this.isAvailable) return t(Error("HTTP connection is missing or invalid"));
                                e()
                            })
                        })
                    }
                    this.url = e, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            let t = R({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await ic()(e, Object.assign(Object.assign({}, ih), {
                                body: t
                            }))
                        }
                        this.onOpen()
                    } catch (t) {
                        let e = this.parseError(t);
                        throw this.events.emit("register_error", e), this.onClose(), e
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(e) {
                    if (void 0 === e.data) return;
                    let t = "string" == typeof e.data ? x(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = eL(e, r.message || r.toString());
                    this.events.emit("payload", i)
                }
                parseError(e, t = this.url) {
                    return ej(e, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            let iu = "error",
                ip = "wc@2:universal_provider:",
                id = "default_chain_changed";
            var ig = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                iy = {
                    exports: {}
                };
            /**
             * @license
             * Lodash <https://lodash.com/>
             * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */
            ! function(e, t) {
                (function() {
                    var r, i = "Expected a function",
                        n = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 1 / 0,
                        a = 0 / 0,
                        c = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        h = "[object Arguments]",
                        l = "[object Array]",
                        u = "[object Boolean]",
                        p = "[object Date]",
                        f = "[object Error]",
                        d = "[object Function]",
                        g = "[object GeneratorFunction]",
                        y = "[object Map]",
                        v = "[object Number]",
                        m = "[object Object]",
                        w = "[object Promise]",
                        b = "[object RegExp]",
                        _ = "[object Set]",
                        I = "[object String]",
                        E = "[object Symbol]",
                        P = "[object WeakMap]",
                        S = "[object ArrayBuffer]",
                        O = "[object DataView]",
                        x = "[object Float32Array]",
                        R = "[object Float64Array]",
                        A = "[object Int8Array]",
                        C = "[object Int16Array]",
                        N = "[object Int32Array]",
                        j = "[object Uint8Array]",
                        T = "[object Uint8ClampedArray]",
                        q = "[object Uint16Array]",
                        D = "[object Uint32Array]",
                        z = /\b__p \+= '';/g,
                        M = /\b(__p \+=) '' \+/g,
                        L = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        k = /&(?:amp|lt|gt|quot|#39);/g,
                        $ = /[&<>"']/g,
                        U = RegExp(k.source),
                        H = RegExp($.source),
                        V = /<%-([\s\S]+?)%>/g,
                        B = /<%([\s\S]+?)%>/g,
                        K = /<%=([\s\S]+?)%>/g,
                        F = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        W = /^\w*$/,
                        Z = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        G = /[\\^$.*+?()[\]{}|]/g,
                        J = RegExp(G.source),
                        Q = /^\s+/,
                        Y = /\s/,
                        X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        et = /,? & /,
                        er = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        ei = /[()=,{}\[\]\/\s]/,
                        en = /\\(\\)?/g,
                        es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        eo = /\w*$/,
                        ea = /^[-+]0x[0-9a-f]+$/i,
                        ec = /^0b[01]+$/i,
                        eh = /^\[object .+?Constructor\]$/,
                        el = /^0o[0-7]+$/i,
                        eu = /^(?:0|[1-9]\d*)$/,
                        ep = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        ef = /($^)/,
                        ed = /['\n\r\u2028\u2029\\]/g,
                        eg = "\ud800-\udfff",
                        ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        ev = "\\u2700-\\u27bf",
                        em = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        ew = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        eb = "\\ufe0e\\ufe0f",
                        e_ = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        eI = "['’]",
                        eE = "[" + e_ + "]",
                        eP = "[" + ey + "]",
                        eS = "[" + em + "]",
                        eO = "[^" + eg + e_ + "\\d+" + ev + em + ew + "]",
                        ex = "\ud83c[\udffb-\udfff]",
                        eR = "[^" + eg + "]",
                        eA = "(?:\ud83c[\udde6-\uddff]){2}",
                        eC = "[\ud800-\udbff][\udc00-\udfff]",
                        eN = "[" + ew + "]",
                        ej = "\\u200d",
                        eT = "(?:" + eS + "|" + eO + ")",
                        eq = "(?:" + eI + "(?:d|ll|m|re|s|t|ve))?",
                        eD = "(?:" + eI + "(?:D|LL|M|RE|S|T|VE))?",
                        ez = "(?:" + eP + "|" + ex + ")?",
                        eM = "[" + eb + "]?",
                        eL = "(?:" + ej + "(?:" + [eR, eA, eC].join("|") + ")" + eM + ez + ")*",
                        ek = eM + ez + eL,
                        e$ = "(?:" + ["[" + ev + "]", eA, eC].join("|") + ")" + ek,
                        eU = "(?:" + [eR + eP + "?", eP, eA, eC, "[" + eg + "]"].join("|") + ")",
                        eH = RegExp(eI, "g"),
                        eV = RegExp(eP, "g"),
                        eB = RegExp(ex + "(?=" + ex + ")|" + eU + ek, "g"),
                        eK = RegExp([eN + "?" + eS + "+" + eq + "(?=" + [eE, eN, "$"].join("|") + ")", "(?:" + eN + "|" + eO + ")+" + eD + "(?=" + [eE, eN + eT, "$"].join("|") + ")", eN + "?" + eT + "+" + eq, eN + "+" + eD, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", e$].join("|"), "g"),
                        eF = RegExp("[" + ej + eg + ey + eb + "]"),
                        eW = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        eZ = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        eG = -1,
                        eJ = {};
                    eJ[x] = eJ[R] = eJ[A] = eJ[C] = eJ[N] = eJ[j] = eJ[T] = eJ[q] = eJ[D] = !0, eJ[h] = eJ[l] = eJ[S] = eJ[u] = eJ[O] = eJ[p] = eJ[f] = eJ[d] = eJ[y] = eJ[v] = eJ[m] = eJ[b] = eJ[_] = eJ[I] = eJ[P] = !1;
                    var eQ = {};
                    eQ[h] = eQ[l] = eQ[S] = eQ[O] = eQ[u] = eQ[p] = eQ[x] = eQ[R] = eQ[A] = eQ[C] = eQ[N] = eQ[y] = eQ[v] = eQ[m] = eQ[b] = eQ[_] = eQ[I] = eQ[E] = eQ[j] = eQ[T] = eQ[q] = eQ[D] = !0, eQ[f] = eQ[d] = eQ[P] = !1;
                    var eY = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        eX = parseFloat,
                        e0 = parseInt,
                        e1 = "object" == typeof ig && ig && ig.Object === Object && ig,
                        e5 = "object" == typeof self && self && self.Object === Object && self,
                        e6 = e1 || e5 || Function("return this")(),
                        e2 = t && !t.nodeType && t,
                        e3 = e2 && e && !e.nodeType && e,
                        e4 = e3 && e3.exports === e2,
                        e9 = e4 && e1.process,
                        e7 = function() {
                            try {
                                return e3 && e3.require && e3.require("util").types || e9 && e9.binding && e9.binding("util")
                            } catch {}
                        }(),
                        e8 = e7 && e7.isArrayBuffer,
                        te = e7 && e7.isDate,
                        tt = e7 && e7.isMap,
                        tr = e7 && e7.isRegExp,
                        ti = e7 && e7.isSet,
                        tn = e7 && e7.isTypedArray;

                    function ts(e, t, r) {
                        switch (r.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, r[0]);
                            case 2:
                                return e.call(t, r[0], r[1]);
                            case 3:
                                return e.call(t, r[0], r[1], r[2])
                        }
                        return e.apply(t, r)
                    }

                    function to(e, t, r, i) {
                        for (var n = -1, s = null == e ? 0 : e.length; ++n < s;) {
                            var o = e[n];
                            t(i, o, r(o), e)
                        }
                        return i
                    }

                    function ta(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i && !1 !== t(e[r], r, e););
                        return e
                    }

                    function tc(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (!t(e[r], r, e)) return !1;
                        return !0
                    }

                    function th(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }

                    function tl(e, t) {
                        return !!(null == e ? 0 : e.length) && tb(e, t, 0) > -1
                    }

                    function tu(e, t, r) {
                        for (var i = -1, n = null == e ? 0 : e.length; ++i < n;)
                            if (r(t, e[i])) return !0;
                        return !1
                    }

                    function tp(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = Array(i); ++r < i;) n[r] = t(e[r], r, e);
                        return n
                    }

                    function tf(e, t) {
                        for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                        return e
                    }

                    function td(e, t, r, i) {
                        var n = -1,
                            s = null == e ? 0 : e.length;
                        for (i && s && (r = e[++n]); ++n < s;) r = t(r, e[n], n, e);
                        return r
                    }

                    function tg(e, t, r, i) {
                        var n = null == e ? 0 : e.length;
                        for (i && n && (r = e[--n]); n--;) r = t(r, e[n], n, e);
                        return r
                    }

                    function ty(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (t(e[r], r, e)) return !0;
                        return !1
                    }
                    var tv = tP("length");

                    function tm(e, t, r) {
                        var i;
                        return r(e, function(e, r, n) {
                            if (t(e, r, n)) return i = r, !1
                        }), i
                    }

                    function tw(e, t, r, i) {
                        for (var n = e.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
                            if (t(e[s], s, e)) return s;
                        return -1
                    }

                    function tb(e, t, r) {
                        return t == t ? function(e, t, r) {
                            for (var i = r - 1, n = e.length; ++i < n;)
                                if (e[i] === t) return i;
                            return -1
                        }(e, t, r) : tw(e, tI, r)
                    }

                    function t_(e, t, r, i) {
                        for (var n = r - 1, s = e.length; ++n < s;)
                            if (i(e[n], t)) return n;
                        return -1
                    }

                    function tI(e) {
                        return e != e
                    }

                    function tE(e, t) {
                        var r = null == e ? 0 : e.length;
                        return r ? tx(e, t) / r : a
                    }

                    function tP(e) {
                        return function(t) {
                            return null == t ? r : t[e]
                        }
                    }

                    function tS(e) {
                        return function(t) {
                            return null == e ? r : e[t]
                        }
                    }

                    function tO(e, t, r, i, n) {
                        return n(e, function(e, n, s) {
                            r = i ? (i = !1, e) : t(r, e, n, s)
                        }), r
                    }

                    function tx(e, t) {
                        for (var i, n = -1, s = e.length; ++n < s;) {
                            var o = t(e[n]);
                            o !== r && (i = i === r ? o : i + o)
                        }
                        return i
                    }

                    function tR(e, t) {
                        for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                        return i
                    }

                    function tA(e) {
                        return e && e.slice(0, tK(e) + 1).replace(Q, "")
                    }

                    function tC(e) {
                        return function(t) {
                            return e(t)
                        }
                    }

                    function tN(e, t) {
                        return tp(t, function(t) {
                            return e[t]
                        })
                    }

                    function tj(e, t) {
                        return e.has(t)
                    }

                    function tT(e, t) {
                        for (var r = -1, i = e.length; ++r < i && tb(t, e[r], 0) > -1;);
                        return r
                    }

                    function tq(e, t) {
                        for (var r = e.length; r-- && tb(t, e[r], 0) > -1;);
                        return r
                    }
                    var tD = tS({
                            À: "A",
                            Á: "A",
                            Â: "A",
                            Ã: "A",
                            Ä: "A",
                            Å: "A",
                            à: "a",
                            á: "a",
                            â: "a",
                            ã: "a",
                            ä: "a",
                            å: "a",
                            Ç: "C",
                            ç: "c",
                            Ð: "D",
                            ð: "d",
                            È: "E",
                            É: "E",
                            Ê: "E",
                            Ë: "E",
                            è: "e",
                            é: "e",
                            ê: "e",
                            ë: "e",
                            Ì: "I",
                            Í: "I",
                            Î: "I",
                            Ï: "I",
                            ì: "i",
                            í: "i",
                            î: "i",
                            ï: "i",
                            Ñ: "N",
                            ñ: "n",
                            Ò: "O",
                            Ó: "O",
                            Ô: "O",
                            Õ: "O",
                            Ö: "O",
                            Ø: "O",
                            ò: "o",
                            ó: "o",
                            ô: "o",
                            õ: "o",
                            ö: "o",
                            ø: "o",
                            Ù: "U",
                            Ú: "U",
                            Û: "U",
                            Ü: "U",
                            ù: "u",
                            ú: "u",
                            û: "u",
                            ü: "u",
                            Ý: "Y",
                            ý: "y",
                            ÿ: "y",
                            Æ: "Ae",
                            æ: "ae",
                            Þ: "Th",
                            þ: "th",
                            ß: "ss",
                            Ā: "A",
                            Ă: "A",
                            Ą: "A",
                            ā: "a",
                            ă: "a",
                            ą: "a",
                            Ć: "C",
                            Ĉ: "C",
                            Ċ: "C",
                            Č: "C",
                            ć: "c",
                            ĉ: "c",
                            ċ: "c",
                            č: "c",
                            Ď: "D",
                            Đ: "D",
                            ď: "d",
                            đ: "d",
                            Ē: "E",
                            Ĕ: "E",
                            Ė: "E",
                            Ę: "E",
                            Ě: "E",
                            ē: "e",
                            ĕ: "e",
                            ė: "e",
                            ę: "e",
                            ě: "e",
                            Ĝ: "G",
                            Ğ: "G",
                            Ġ: "G",
                            Ģ: "G",
                            ĝ: "g",
                            ğ: "g",
                            ġ: "g",
                            ģ: "g",
                            Ĥ: "H",
                            Ħ: "H",
                            ĥ: "h",
                            ħ: "h",
                            Ĩ: "I",
                            Ī: "I",
                            Ĭ: "I",
                            Į: "I",
                            İ: "I",
                            ĩ: "i",
                            ī: "i",
                            ĭ: "i",
                            į: "i",
                            ı: "i",
                            Ĵ: "J",
                            ĵ: "j",
                            Ķ: "K",
                            ķ: "k",
                            ĸ: "k",
                            Ĺ: "L",
                            Ļ: "L",
                            Ľ: "L",
                            Ŀ: "L",
                            Ł: "L",
                            ĺ: "l",
                            ļ: "l",
                            ľ: "l",
                            ŀ: "l",
                            ł: "l",
                            Ń: "N",
                            Ņ: "N",
                            Ň: "N",
                            Ŋ: "N",
                            ń: "n",
                            ņ: "n",
                            ň: "n",
                            ŋ: "n",
                            Ō: "O",
                            Ŏ: "O",
                            Ő: "O",
                            ō: "o",
                            ŏ: "o",
                            ő: "o",
                            Ŕ: "R",
                            Ŗ: "R",
                            Ř: "R",
                            ŕ: "r",
                            ŗ: "r",
                            ř: "r",
                            Ś: "S",
                            Ŝ: "S",
                            Ş: "S",
                            Š: "S",
                            ś: "s",
                            ŝ: "s",
                            ş: "s",
                            š: "s",
                            Ţ: "T",
                            Ť: "T",
                            Ŧ: "T",
                            ţ: "t",
                            ť: "t",
                            ŧ: "t",
                            Ũ: "U",
                            Ū: "U",
                            Ŭ: "U",
                            Ů: "U",
                            Ű: "U",
                            Ų: "U",
                            ũ: "u",
                            ū: "u",
                            ŭ: "u",
                            ů: "u",
                            ű: "u",
                            ų: "u",
                            Ŵ: "W",
                            ŵ: "w",
                            Ŷ: "Y",
                            ŷ: "y",
                            Ÿ: "Y",
                            Ź: "Z",
                            Ż: "Z",
                            Ž: "Z",
                            ź: "z",
                            ż: "z",
                            ž: "z",
                            Ĳ: "IJ",
                            ĳ: "ij",
                            Œ: "Oe",
                            œ: "oe",
                            ŉ: "'n",
                            ſ: "s"
                        }),
                        tz = tS({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function tM(e) {
                        return "\\" + eY[e]
                    }

                    function tL(e) {
                        return eF.test(e)
                    }

                    function tk(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e, i) {
                            r[++t] = [i, e]
                        }), r
                    }

                    function t$(e, t) {
                        return function(r) {
                            return e(t(r))
                        }
                    }

                    function tU(e, t) {
                        for (var r = -1, i = e.length, n = 0, o = []; ++r < i;) {
                            var a = e[r];
                            (a === t || a === s) && (e[r] = s, o[n++] = r)
                        }
                        return o
                    }

                    function tH(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e) {
                            r[++t] = e
                        }), r
                    }

                    function tV(e) {
                        return tL(e) ? function(e) {
                            for (var t = eB.lastIndex = 0; eB.test(e);) ++t;
                            return t
                        }(e) : tv(e)
                    }

                    function tB(e) {
                        return tL(e) ? e.match(eB) || [] : e.split("")
                    }

                    function tK(e) {
                        for (var t = e.length; t-- && Y.test(e.charAt(t)););
                        return t
                    }
                    var tF = tS({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        tW = function e(t) {
                            var Y, eg, ey, ev, em = (t = null == t ? e6 : tW.defaults(e6.Object(), t, tW.pick(e6, eZ))).Array,
                                ew = t.Date,
                                eb = t.Error,
                                e_ = t.Function,
                                eI = t.Math,
                                eE = t.Object,
                                eP = t.RegExp,
                                eS = t.String,
                                eO = t.TypeError,
                                ex = em.prototype,
                                eR = e_.prototype,
                                eA = eE.prototype,
                                eC = t["__core-js_shared__"],
                                eN = eR.toString,
                                ej = eA.hasOwnProperty,
                                eT = 0,
                                eq = (Y = /[^.]+$/.exec(eC && eC.keys && eC.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Y : "",
                                eD = eA.toString,
                                ez = eN.call(eE),
                                eM = e6._,
                                eL = eP("^" + eN.call(ej).replace(G, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                ek = e4 ? t.Buffer : r,
                                e$ = t.Symbol,
                                eU = t.Uint8Array,
                                eB = ek ? ek.allocUnsafe : r,
                                eF = t$(eE.getPrototypeOf, eE),
                                eY = eE.create,
                                e1 = eA.propertyIsEnumerable,
                                e5 = ex.splice,
                                e2 = e$ ? e$.isConcatSpreadable : r,
                                e3 = e$ ? e$.iterator : r,
                                e9 = e$ ? e$.toStringTag : r,
                                e7 = function() {
                                    try {
                                        var e = nd(eE, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch {}
                                }(),
                                tv = t.clearTimeout !== e6.clearTimeout && t.clearTimeout,
                                tS = ew && ew.now !== e6.Date.now && ew.now,
                                tZ = t.setTimeout !== e6.setTimeout && t.setTimeout,
                                tG = eI.ceil,
                                tJ = eI.floor,
                                tQ = eE.getOwnPropertySymbols,
                                tY = ek ? ek.isBuffer : r,
                                tX = t.isFinite,
                                t0 = ex.join,
                                t1 = t$(eE.keys, eE),
                                t5 = eI.max,
                                t6 = eI.min,
                                t2 = ew.now,
                                t3 = t.parseInt,
                                t4 = eI.random,
                                t9 = ex.reverse,
                                t7 = nd(t, "DataView"),
                                t8 = nd(t, "Map"),
                                re = nd(t, "Promise"),
                                rt = nd(t, "Set"),
                                rr = nd(t, "WeakMap"),
                                ri = nd(eE, "create"),
                                rn = rr && new rr,
                                rs = {},
                                ro = nk(t7),
                                ra = nk(t8),
                                rc = nk(re),
                                rh = nk(rt),
                                rl = nk(rr),
                                ru = e$ ? e$.prototype : r,
                                rp = ru ? ru.valueOf : r,
                                rf = ru ? ru.toString : r;

                            function rd(e) {
                                if (sF(e) && !sD(e) && !(e instanceof rm)) {
                                    if (e instanceof rv) return e;
                                    if (ej.call(e, "__wrapped__")) return n$(e)
                                }
                                return new rv(e)
                            }
                            var rg = function() {
                                function e() {}
                                return function(t) {
                                    if (!sK(t)) return {};
                                    if (eY) return eY(t);
                                    e.prototype = t;
                                    var i = new e;
                                    return e.prototype = r, i
                                }
                            }();

                            function ry() {}

                            function rv(e, t) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r
                            }

                            function rm(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                            }

                            function rw(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rb(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function r_(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rI(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.__data__ = new r_; ++t < r;) this.add(e[t])
                            }

                            function rE(e) {
                                var t = this.__data__ = new rb(e);
                                this.size = t.size
                            }

                            function rP(e, t) {
                                var r = sD(e),
                                    i = !r && sq(e),
                                    n = !r && !i && sk(e),
                                    s = !r && !i && !n && s0(e),
                                    o = r || i || n || s,
                                    a = o ? tR(e.length, eS) : [],
                                    c = a.length;
                                for (var h in e)(t || ej.call(e, h)) && !(o && ("length" == h || n && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || n_(h, c))) && a.push(h);
                                return a
                            }

                            function rS(e) {
                                var t = e.length;
                                return t ? e[il(0, t - 1)] : r
                            }

                            function rO(e, t, i) {
                                (i === r || sN(e[t], i)) && (i !== r || t in e) || rN(e, t, i)
                            }

                            function rx(e, t, i) {
                                var n = e[t];
                                ej.call(e, t) && sN(n, i) && (i !== r || t in e) || rN(e, t, i)
                            }

                            function rR(e, t) {
                                for (var r = e.length; r--;)
                                    if (sN(e[r][0], t)) return r;
                                return -1
                            }

                            function rA(e, t, r, i) {
                                return rL(e, function(e, n, s) {
                                    t(i, e, r(e), s)
                                }), i
                            }

                            function rC(e, t) {
                                return e && iV(t, op(t), e)
                            }

                            function rN(e, t, r) {
                                "__proto__" == t && e7 ? e7(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r,
                                    writable: !0
                                }) : e[t] = r
                            }

                            function rj(e, t) {
                                for (var i = -1, n = t.length, s = em(n), o = null == e; ++i < n;) s[i] = o ? r : oa(e, t[i]);
                                return s
                            }

                            function rT(e, t, i) {
                                return e == e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e
                            }

                            function rq(e, t, i, n, s, o) {
                                var a, c = 1 & t,
                                    l = 2 & t,
                                    f = 4 & t;
                                if (i && (a = s ? i(e, n, s, o) : i(e)), a !== r) return a;
                                if (!sK(e)) return e;
                                var w = sD(e);
                                if (w) {
                                    if (P = e.length, z = new e.constructor(P), P && "string" == typeof e[0] && ej.call(e, "index") && (z.index = e.index, z.input = e.input), a = z, !c) return iH(e, a)
                                } else {
                                    var P, z, M, L, k, $ = nv(e),
                                        U = $ == d || $ == g;
                                    if (sk(e)) return iz(e, c);
                                    if ($ == m || $ == h || U && !s) {
                                        if (a = l || U ? {} : nw(e), !c) return l ? (M = (k = a) && iV(e, of (e), k), iV(e, ny(e), M)) : (L = rC(a, e), iV(e, ng(e), L))
                                    } else {
                                        if (!eQ[$]) return s ? e : {};
                                        a = function(e, t, r) {
                                            var i, n, s = e.constructor;
                                            switch (t) {
                                                case S:
                                                    return iM(e);
                                                case u:
                                                case p:
                                                    return new s(+e);
                                                case O:
                                                    return i = r ? iM(e.buffer) : e.buffer, new e.constructor(i, e.byteOffset, e.byteLength);
                                                case x:
                                                case R:
                                                case A:
                                                case C:
                                                case N:
                                                case j:
                                                case T:
                                                case q:
                                                case D:
                                                    return iL(e, r);
                                                case y:
                                                    return new s;
                                                case v:
                                                case I:
                                                    return new s(e);
                                                case b:
                                                    return (n = new e.constructor(e.source, eo.exec(e))).lastIndex = e.lastIndex, n;
                                                case _:
                                                    return new s;
                                                case E:
                                                    return rp ? eE(rp.call(e)) : {}
                                            }
                                        }(e, $, c)
                                    }
                                }
                                o || (o = new rE);
                                var H = o.get(e);
                                if (H) return H;
                                o.set(e, a), sQ(e) ? e.forEach(function(r) {
                                    a.add(rq(r, t, i, r, e, o))
                                }) : sW(e) && e.forEach(function(r, n) {
                                    a.set(n, rq(r, t, i, n, e, o))
                                });
                                var V = f ? l ? na : no : l ? of : op,
                                    B = w ? r : V(e);
                                return ta(B || e, function(r, n) {
                                    B && (r = e[n = r]), rx(a, n, rq(r, t, i, n, e, o))
                                }), a
                            }

                            function rD(e, t, i) {
                                var n = i.length;
                                if (null == e) return !n;
                                for (e = eE(e); n--;) {
                                    var s = i[n],
                                        o = t[s],
                                        a = e[s];
                                    if (a === r && !(s in e) || !o(a)) return !1
                                }
                                return !0
                            }

                            function rz(e, t, n) {
                                if ("function" != typeof e) throw new eO(i);
                                return nj(function() {
                                    e.apply(r, n)
                                }, t)
                            }

                            function rM(e, t, r, i) {
                                var n = -1,
                                    s = tl,
                                    o = !0,
                                    a = e.length,
                                    c = [],
                                    h = t.length;
                                if (!a) return c;
                                r && (t = tp(t, tC(r))), i ? (s = tu, o = !1) : t.length >= 200 && (s = tj, o = !1, t = new rI(t));
                                e: for (; ++n < a;) {
                                    var l = e[n],
                                        u = null == r ? l : r(l);
                                    if (l = i || 0 !== l ? l : 0, o && u == u) {
                                        for (var p = h; p--;)
                                            if (t[p] === u) continue e;
                                        c.push(l)
                                    } else s(t, u, i) || c.push(l)
                                }
                                return c
                            }
                            rd.templateSettings = {
                                escape: V,
                                evaluate: B,
                                interpolate: K,
                                variable: "",
                                imports: {
                                    _: rd
                                }
                            }, rd.prototype = ry.prototype, rd.prototype.constructor = rd, rv.prototype = rg(ry.prototype), rv.prototype.constructor = rv, rm.prototype = rg(ry.prototype), rm.prototype.constructor = rm, rw.prototype.clear = function() {
                                this.__data__ = ri ? ri(null) : {}, this.size = 0
                            }, rw.prototype.delete = function(e) {
                                var t = this.has(e) && delete this.__data__[e];
                                return this.size -= t ? 1 : 0, t
                            }, rw.prototype.get = function(e) {
                                var t = this.__data__;
                                if (ri) {
                                    var i = t[e];
                                    return i === n ? r : i
                                }
                                return ej.call(t, e) ? t[e] : r
                            }, rw.prototype.has = function(e) {
                                var t = this.__data__;
                                return ri ? t[e] !== r : ej.call(t, e)
                            }, rw.prototype.set = function(e, t) {
                                var i = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, i[e] = ri && t === r ? n : t, this
                            }, rb.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, rb.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = rR(t, e);
                                return !(r < 0) && (r == t.length - 1 ? t.pop() : e5.call(t, r, 1), --this.size, !0)
                            }, rb.prototype.get = function(e) {
                                var t = this.__data__,
                                    i = rR(t, e);
                                return i < 0 ? r : t[i][1]
                            }, rb.prototype.has = function(e) {
                                return rR(this.__data__, e) > -1
                            }, rb.prototype.set = function(e, t) {
                                var r = this.__data__,
                                    i = rR(r, e);
                                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
                            }, r_.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new rw,
                                    map: new(t8 || rb),
                                    string: new rw
                                }
                            }, r_.prototype.delete = function(e) {
                                var t = np(this, e).delete(e);
                                return this.size -= t ? 1 : 0, t
                            }, r_.prototype.get = function(e) {
                                return np(this, e).get(e)
                            }, r_.prototype.has = function(e) {
                                return np(this, e).has(e)
                            }, r_.prototype.set = function(e, t) {
                                var r = np(this, e),
                                    i = r.size;
                                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
                            }, rI.prototype.add = rI.prototype.push = function(e) {
                                return this.__data__.set(e, n), this
                            }, rI.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rE.prototype.clear = function() {
                                this.__data__ = new rb, this.size = 0
                            }, rE.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = t.delete(e);
                                return this.size = t.size, r
                            }, rE.prototype.get = function(e) {
                                return this.__data__.get(e)
                            }, rE.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rE.prototype.set = function(e, t) {
                                var r = this.__data__;
                                if (r instanceof rb) {
                                    var i = r.__data__;
                                    if (!t8 || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                                    r = this.__data__ = new r_(i)
                                }
                                return r.set(e, t), this.size = r.size, this
                            };
                            var rL = iF(rF),
                                rk = iF(rW, !0);

                            function r$(e, t) {
                                var r = !0;
                                return rL(e, function(e, i, n) {
                                    return r = !!t(e, i, n)
                                }), r
                            }

                            function rU(e, t, i) {
                                for (var n = -1, s = e.length; ++n < s;) {
                                    var o = e[n],
                                        a = t(o);
                                    if (null != a && (c === r ? a == a && !sX(a) : i(a, c))) var c = a,
                                        h = o
                                }
                                return h
                            }

                            function rH(e, t) {
                                var r = [];
                                return rL(e, function(e, i, n) {
                                    t(e, i, n) && r.push(e)
                                }), r
                            }

                            function rV(e, t, r, i, n) {
                                var s = -1,
                                    o = e.length;
                                for (r || (r = nb), n || (n = []); ++s < o;) {
                                    var a = e[s];
                                    t > 0 && r(a) ? t > 1 ? rV(a, t - 1, r, i, n) : tf(n, a) : i || (n[n.length] = a)
                                }
                                return n
                            }
                            var rB = iW(),
                                rK = iW(!0);

                            function rF(e, t) {
                                return e && rB(e, t, op)
                            }

                            function rW(e, t) {
                                return e && rK(e, t, op)
                            }

                            function rZ(e, t) {
                                return th(t, function(t) {
                                    return sH(e[t])
                                })
                            }

                            function rG(e, t) {
                                t = iT(t, e);
                                for (var i = 0, n = t.length; null != e && i < n;) e = e[nL(t[i++])];
                                return i && i == n ? e : r
                            }

                            function rJ(e, t, r) {
                                var i = t(e);
                                return sD(e) ? i : tf(i, r(e))
                            }

                            function rQ(e) {
                                return null == e ? e === r ? "[object Undefined]" : "[object Null]" : e9 && e9 in eE(e) ? function(e) {
                                    var t = ej.call(e, e9),
                                        i = e[e9];
                                    try {
                                        e[e9] = r;
                                        var n = !0
                                    } catch {}
                                    var s = eD.call(e);
                                    return n && (t ? e[e9] = i : delete e[e9]), s
                                }(e) : eD.call(e)
                            }

                            function rY(e, t) {
                                return e > t
                            }

                            function rX(e, t) {
                                return null != e && ej.call(e, t)
                            }

                            function r0(e, t) {
                                return null != e && t in eE(e)
                            }

                            function r1(e, t, i) {
                                for (var n = i ? tu : tl, s = e[0].length, o = e.length, a = o, c = em(o), h = 1 / 0, l = []; a--;) {
                                    var u = e[a];
                                    a && t && (u = tp(u, tC(t))), h = t6(u.length, h), c[a] = !i && (t || s >= 120 && u.length >= 120) ? new rI(a && u) : r
                                }
                                u = e[0];
                                var p = -1,
                                    f = c[0];
                                e: for (; ++p < s && l.length < h;) {
                                    var d = u[p],
                                        g = t ? t(d) : d;
                                    if (d = i || 0 !== d ? d : 0, !(f ? tj(f, g) : n(l, g, i))) {
                                        for (a = o; --a;) {
                                            var y = c[a];
                                            if (!(y ? tj(y, g) : n(e[a], g, i))) continue e
                                        }
                                        f && f.push(g), l.push(d)
                                    }
                                }
                                return l
                            }

                            function r5(e, t, i) {
                                t = iT(t, e);
                                var n = null == (e = nA(e, t)) ? e : e[nL(nQ(t))];
                                return null == n ? r : ts(n, e, i)
                            }

                            function r6(e) {
                                return sF(e) && rQ(e) == h
                            }

                            function r2(e, t, i, n, s) {
                                return e === t || (null != e && null != t && (sF(e) || sF(t)) ? function(e, t, i, n, s, o) {
                                    var a = sD(e),
                                        c = sD(t),
                                        d = a ? l : nv(e),
                                        g = c ? l : nv(t);
                                    d = d == h ? m : d, g = g == h ? m : g;
                                    var w = d == m,
                                        P = g == m,
                                        x = d == g;
                                    if (x && sk(e)) {
                                        if (!sk(t)) return !1;
                                        a = !0, w = !1
                                    }
                                    if (x && !w) return o || (o = new rE), a || s0(e) ? nn(e, t, i, n, s, o) : function(e, t, r, i, n, s, o) {
                                        switch (r) {
                                            case O:
                                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                                e = e.buffer, t = t.buffer;
                                            case S:
                                                return !(e.byteLength != t.byteLength || !s(new eU(e), new eU(t)));
                                            case u:
                                            case p:
                                            case v:
                                                return sN(+e, +t);
                                            case f:
                                                return e.name == t.name && e.message == t.message;
                                            case b:
                                            case I:
                                                return e == t + "";
                                            case y:
                                                var a = tk;
                                            case _:
                                                var c = 1 & i;
                                                if (a || (a = tH), e.size != t.size && !c) break;
                                                var h = o.get(e);
                                                if (h) return h == t;
                                                i |= 2, o.set(e, t);
                                                var l = nn(a(e), a(t), i, n, s, o);
                                                return o.delete(e), l;
                                            case E:
                                                if (rp) return rp.call(e) == rp.call(t)
                                        }
                                        return !1
                                    }(e, t, d, i, n, s, o);
                                    if (!(1 & i)) {
                                        var R = w && ej.call(e, "__wrapped__"),
                                            A = P && ej.call(t, "__wrapped__");
                                        if (R || A) {
                                            var C = R ? e.value() : e,
                                                N = A ? t.value() : t;
                                            return o || (o = new rE), s(C, N, i, n, o)
                                        }
                                    }
                                    return !!x && (o || (o = new rE), function(e, t, i, n, s, o) {
                                        var a = 1 & i,
                                            c = no(e),
                                            h = c.length;
                                        if (h != no(t).length && !a) return !1;
                                        for (var l = h; l--;) {
                                            var u = c[l];
                                            if (!(a ? u in t : ej.call(t, u))) return !1
                                        }
                                        var p = o.get(e),
                                            f = o.get(t);
                                        if (p && f) return p == t && f == e;
                                        var d = !0;
                                        o.set(e, t), o.set(t, e);
                                        for (var g = a; ++l < h;) {
                                            var y = e[u = c[l]],
                                                v = t[u];
                                            if (n) var m = a ? n(v, y, u, t, e, o) : n(y, v, u, e, t, o);
                                            if (!(m === r ? y === v || s(y, v, i, n, o) : m)) {
                                                d = !1;
                                                break
                                            }
                                            g || (g = "constructor" == u)
                                        }
                                        if (d && !g) {
                                            var w = e.constructor,
                                                b = t.constructor;
                                            w != b && "constructor" in e && "constructor" in t && !("function" == typeof w && w instanceof w && "function" == typeof b && b instanceof b) && (d = !1)
                                        }
                                        return o.delete(e), o.delete(t), d
                                    }(e, t, i, n, s, o))
                                }(e, t, i, n, r2, s) : e != e && t != t)
                            }

                            function r3(e, t, i, n) {
                                var s = i.length,
                                    o = s,
                                    a = !n;
                                if (null == e) return !o;
                                for (e = eE(e); s--;) {
                                    var c = i[s];
                                    if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                                }
                                for (; ++s < o;) {
                                    var h = (c = i[s])[0],
                                        l = e[h],
                                        u = c[1];
                                    if (a && c[2]) {
                                        if (l === r && !(h in e)) return !1
                                    } else {
                                        var p = new rE;
                                        if (n) var f = n(l, u, h, e, t, p);
                                        if (!(f === r ? r2(u, l, 3, n, p) : f)) return !1
                                    }
                                }
                                return !0
                            }

                            function r4(e) {
                                return !(!sK(e) || eq && eq in e) && (sH(e) ? eL : eh).test(nk(e))
                            }

                            function r9(e) {
                                return "function" == typeof e ? e : null == e ? oL : "object" == typeof e ? sD(e) ? ir(e[0], e[1]) : it(e) : oW(e)
                            }

                            function r7(e) {
                                if (!nO(e)) return t1(e);
                                var t = [];
                                for (var r in eE(e)) ej.call(e, r) && "constructor" != r && t.push(r);
                                return t
                            }

                            function r8(e, t) {
                                return e < t
                            }

                            function ie(e, t) {
                                var r = -1,
                                    i = sM(e) ? em(e.length) : [];
                                return rL(e, function(e, n, s) {
                                    i[++r] = t(e, n, s)
                                }), i
                            }

                            function it(e) {
                                var t = nf(e);
                                return 1 == t.length && t[0][2] ? nx(t[0][0], t[0][1]) : function(r) {
                                    return r === e || r3(r, e, t)
                                }
                            }

                            function ir(e, t) {
                                var i;
                                return nE(e) && (i = t) == i && !sK(i) ? nx(nL(e), t) : function(i) {
                                    var n = oa(i, e);
                                    return n === r && n === t ? oc(i, e) : r2(t, n, 3)
                                }
                            }

                            function ii(e, t, i, n, s) {
                                e !== t && rB(t, function(o, a) {
                                    if (s || (s = new rE), sK(o)) ! function(e, t, i, n, s, o, a) {
                                        var c = nC(e, i),
                                            h = nC(t, i),
                                            l = a.get(h);
                                        if (l) {
                                            rO(e, i, l);
                                            return
                                        }
                                        var u = o ? o(c, h, i + "", e, t, a) : r,
                                            p = u === r;
                                        if (p) {
                                            var f = sD(h),
                                                d = !f && sk(h),
                                                g = !f && !d && s0(h);
                                            u = h, f || d || g ? sD(c) ? u = c : sL(c) ? u = iH(c) : d ? (p = !1, u = iz(h, !0)) : g ? (p = !1, u = iL(h, !0)) : u = [] : sG(h) || sq(h) ? (u = c, sq(c) ? u = s7(c) : (!sK(c) || sH(c)) && (u = nw(h))) : p = !1
                                        }
                                        p && (a.set(h, u), s(u, h, n, o, a), a.delete(h)), rO(e, i, u)
                                    }(e, t, a, i, ii, n, s);
                                    else {
                                        var c = n ? n(nC(e, a), o, a + "", e, t, s) : r;
                                        c === r && (c = o), rO(e, a, c)
                                    }
                                }, of )
                            }

                            function is(e, t) {
                                var i = e.length;
                                if (i) return n_(t += t < 0 ? i : 0, i) ? e[t] : r
                            }

                            function io(e, t, r) {
                                t = t.length ? tp(t, function(e) {
                                    return sD(e) ? function(t) {
                                        return rG(t, 1 === e.length ? e[0] : e)
                                    } : e
                                }) : [oL];
                                var i = -1;
                                return t = tp(t, tC(nu())),
                                    function(e, t) {
                                        var r = e.length;
                                        for (e.sort(t); r--;) e[r] = e[r].value;
                                        return e
                                    }(ie(e, function(e, r, n) {
                                        return {
                                            criteria: tp(t, function(t) {
                                                return t(e)
                                            }),
                                            index: ++i,
                                            value: e
                                        }
                                    }), function(e, t) {
                                        return function(e, t, r) {
                                            for (var i = -1, n = e.criteria, s = t.criteria, o = n.length, a = r.length; ++i < o;) {
                                                var c = ik(n[i], s[i]);
                                                if (c) {
                                                    if (i >= a) return c;
                                                    return c * ("desc" == r[i] ? -1 : 1)
                                                }
                                            }
                                            return e.index - t.index
                                        }(e, t, r)
                                    })
                            }

                            function ia(e, t, r) {
                                for (var i = -1, n = t.length, s = {}; ++i < n;) {
                                    var o = t[i],
                                        a = rG(e, o);
                                    r(a, o) && id(s, iT(o, e), a)
                                }
                                return s
                            }

                            function ic(e, t, r, i) {
                                var n = i ? t_ : tb,
                                    s = -1,
                                    o = t.length,
                                    a = e;
                                for (e === t && (t = iH(t)), r && (a = tp(e, tC(r))); ++s < o;)
                                    for (var c = 0, h = t[s], l = r ? r(h) : h;
                                        (c = n(a, l, c, i)) > -1;) a !== e && e5.call(a, c, 1), e5.call(e, c, 1);
                                return e
                            }

                            function ih(e, t) {
                                for (var r = e ? t.length : 0, i = r - 1; r--;) {
                                    var n = t[r];
                                    if (r == i || n !== s) {
                                        var s = n;
                                        n_(n) ? e5.call(e, n, 1) : iS(e, n)
                                    }
                                }
                                return e
                            }

                            function il(e, t) {
                                return e + tJ(t4() * (t - e + 1))
                            }

                            function iu(e, t) {
                                var r = "";
                                if (!e || t < 1 || t > 9007199254740991) return r;
                                do t % 2 && (r += e), (t = tJ(t / 2)) && (e += e); while (t);
                                return r
                            }

                            function ip(e, t) {
                                return nT(nR(e, t, oL), e + "")
                            }

                            function id(e, t, i, n) {
                                if (!sK(e)) return e;
                                t = iT(t, e);
                                for (var s = -1, o = t.length, a = o - 1, c = e; null != c && ++s < o;) {
                                    var h = nL(t[s]),
                                        l = i;
                                    if ("__proto__" === h || "constructor" === h || "prototype" === h) break;
                                    if (s != a) {
                                        var u = c[h];
                                        (l = n ? n(u, h, c) : r) === r && (l = sK(u) ? u : n_(t[s + 1]) ? [] : {})
                                    }
                                    rx(c, h, l), c = c[h]
                                }
                                return e
                            }
                            var ig = rn ? function(e, t) {
                                    return rn.set(e, t), e
                                } : oL,
                                iy = e7 ? function(e, t) {
                                    return e7(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: oD(t),
                                        writable: !0
                                    })
                                } : oL;

                            function iv(e, t, r) {
                                var i = -1,
                                    n = e.length;
                                t < 0 && (t = -t > n ? 0 : n + t), (r = r > n ? n : r) < 0 && (r += n), n = t > r ? 0 : r - t >>> 0, t >>>= 0;
                                for (var s = em(n); ++i < n;) s[i] = e[i + t];
                                return s
                            }

                            function im(e, t) {
                                var r;
                                return rL(e, function(e, i, n) {
                                    return !(r = t(e, i, n))
                                }), !!r
                            }

                            function iw(e, t, r) {
                                var i = 0,
                                    n = null == e ? i : e.length;
                                if ("number" == typeof t && t == t && n <= 2147483647) {
                                    for (; i < n;) {
                                        var s = i + n >>> 1,
                                            o = e[s];
                                        null !== o && !sX(o) && (r ? o <= t : o < t) ? i = s + 1 : n = s
                                    }
                                    return n
                                }
                                return ib(e, t, oL, r)
                            }

                            function ib(e, t, i, n) {
                                var s = 0,
                                    o = null == e ? 0 : e.length;
                                if (0 === o) return 0;
                                t = i(t);
                                for (var a = t != t, c = null === t, h = sX(t), l = t === r; s < o;) {
                                    var u = tJ((s + o) / 2),
                                        p = i(e[u]),
                                        f = p !== r,
                                        d = null === p,
                                        g = p == p,
                                        y = sX(p);
                                    if (a) var v = n || g;
                                    else v = l ? g && (n || f) : c ? g && f && (n || !d) : h ? g && f && !d && (n || !y) : !d && !y && (n ? p <= t : p < t);
                                    v ? s = u + 1 : o = u
                                }
                                return t6(o, 4294967294)
                            }

                            function i_(e, t) {
                                for (var r = -1, i = e.length, n = 0, s = []; ++r < i;) {
                                    var o = e[r],
                                        a = t ? t(o) : o;
                                    if (!r || !sN(a, c)) {
                                        var c = a;
                                        s[n++] = 0 === o ? 0 : o
                                    }
                                }
                                return s
                            }

                            function iI(e) {
                                return "number" == typeof e ? e : sX(e) ? a : +e
                            }

                            function iE(e) {
                                if ("string" == typeof e) return e;
                                if (sD(e)) return tp(e, iE) + "";
                                if (sX(e)) return rf ? rf.call(e) : "";
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function iP(e, t, r) {
                                var i = -1,
                                    n = tl,
                                    s = e.length,
                                    o = !0,
                                    a = [],
                                    c = a;
                                if (r) o = !1, n = tu;
                                else if (s >= 200) {
                                    var h = t ? null : i7(e);
                                    if (h) return tH(h);
                                    o = !1, n = tj, c = new rI
                                } else c = t ? [] : a;
                                e: for (; ++i < s;) {
                                    var l = e[i],
                                        u = t ? t(l) : l;
                                    if (l = r || 0 !== l ? l : 0, o && u == u) {
                                        for (var p = c.length; p--;)
                                            if (c[p] === u) continue e;
                                        t && c.push(u), a.push(l)
                                    } else n(c, u, r) || (c !== a && c.push(u), a.push(l))
                                }
                                return a
                            }

                            function iS(e, t) {
                                return t = iT(t, e), null == (e = nA(e, t)) || delete e[nL(nQ(t))]
                            }

                            function iO(e, t, r, i) {
                                return id(e, t, r(rG(e, t)), i)
                            }

                            function ix(e, t, r, i) {
                                for (var n = e.length, s = i ? n : -1;
                                    (i ? s-- : ++s < n) && t(e[s], s, e););
                                return r ? iv(e, i ? 0 : s, i ? s + 1 : n) : iv(e, i ? s + 1 : 0, i ? n : s)
                            }

                            function iR(e, t) {
                                var r = e;
                                return r instanceof rm && (r = r.value()), td(t, function(e, t) {
                                    return t.func.apply(t.thisArg, tf([e], t.args))
                                }, r)
                            }

                            function iA(e, t, r) {
                                var i = e.length;
                                if (i < 2) return i ? iP(e[0]) : [];
                                for (var n = -1, s = em(i); ++n < i;)
                                    for (var o = e[n], a = -1; ++a < i;) a != n && (s[n] = rM(s[n] || o, e[a], t, r));
                                return iP(rV(s, 1), t, r)
                            }

                            function iC(e, t, i) {
                                for (var n = -1, s = e.length, o = t.length, a = {}; ++n < s;) {
                                    var c = n < o ? t[n] : r;
                                    i(a, e[n], c)
                                }
                                return a
                            }

                            function iN(e) {
                                return sL(e) ? e : []
                            }

                            function ij(e) {
                                return "function" == typeof e ? e : oL
                            }

                            function iT(e, t) {
                                return sD(e) ? e : nE(e, t) ? [e] : nM(s8(e))
                            }

                            function iq(e, t, i) {
                                var n = e.length;
                                return i = i === r ? n : i, !t && i >= n ? e : iv(e, t, i)
                            }
                            var iD = tv || function(e) {
                                return e6.clearTimeout(e)
                            };

                            function iz(e, t) {
                                if (t) return e.slice();
                                var r = e.length,
                                    i = eB ? eB(r) : new e.constructor(r);
                                return e.copy(i), i
                            }

                            function iM(e) {
                                var t = new e.constructor(e.byteLength);
                                return new eU(t).set(new eU(e)), t
                            }

                            function iL(e, t) {
                                var r = t ? iM(e.buffer) : e.buffer;
                                return new e.constructor(r, e.byteOffset, e.length)
                            }

                            function ik(e, t) {
                                if (e !== t) {
                                    var i = e !== r,
                                        n = null === e,
                                        s = e == e,
                                        o = sX(e),
                                        a = t !== r,
                                        c = null === t,
                                        h = t == t,
                                        l = sX(t);
                                    if (!c && !l && !o && e > t || o && a && h && !c && !l || n && a && h || !i && h || !s) return 1;
                                    if (!n && !o && !l && e < t || l && i && s && !n && !o || c && i && s || !a && s || !h) return -1
                                }
                                return 0
                            }

                            function i$(e, t, r, i) {
                                for (var n = -1, s = e.length, o = r.length, a = -1, c = t.length, h = t5(s - o, 0), l = em(c + h), u = !i; ++a < c;) l[a] = t[a];
                                for (; ++n < o;)(u || n < s) && (l[r[n]] = e[n]);
                                for (; h--;) l[a++] = e[n++];
                                return l
                            }

                            function iU(e, t, r, i) {
                                for (var n = -1, s = e.length, o = -1, a = r.length, c = -1, h = t.length, l = t5(s - a, 0), u = em(l + h), p = !i; ++n < l;) u[n] = e[n];
                                for (var f = n; ++c < h;) u[f + c] = t[c];
                                for (; ++o < a;)(p || n < s) && (u[f + r[o]] = e[n++]);
                                return u
                            }

                            function iH(e, t) {
                                var r = -1,
                                    i = e.length;
                                for (t || (t = em(i)); ++r < i;) t[r] = e[r];
                                return t
                            }

                            function iV(e, t, i, n) {
                                var s = !i;
                                i || (i = {});
                                for (var o = -1, a = t.length; ++o < a;) {
                                    var c = t[o],
                                        h = n ? n(i[c], e[c], c, i, e) : r;
                                    h === r && (h = e[c]), s ? rN(i, c, h) : rx(i, c, h)
                                }
                                return i
                            }

                            function iB(e, t) {
                                return function(r, i) {
                                    var n = sD(r) ? to : rA,
                                        s = t ? t() : {};
                                    return n(r, e, nu(i, 2), s)
                                }
                            }

                            function iK(e) {
                                return ip(function(t, i) {
                                    var n = -1,
                                        s = i.length,
                                        o = s > 1 ? i[s - 1] : r,
                                        a = s > 2 ? i[2] : r;
                                    for (o = e.length > 3 && "function" == typeof o ? (s--, o) : r, a && nI(i[0], i[1], a) && (o = s < 3 ? r : o, s = 1), t = eE(t); ++n < s;) {
                                        var c = i[n];
                                        c && e(t, c, n, o)
                                    }
                                    return t
                                })
                            }

                            function iF(e, t) {
                                return function(r, i) {
                                    if (null == r) return r;
                                    if (!sM(r)) return e(r, i);
                                    for (var n = r.length, s = t ? n : -1, o = eE(r);
                                        (t ? s-- : ++s < n) && !1 !== i(o[s], s, o););
                                    return r
                                }
                            }

                            function iW(e) {
                                return function(t, r, i) {
                                    for (var n = -1, s = eE(t), o = i(t), a = o.length; a--;) {
                                        var c = o[e ? a : ++n];
                                        if (!1 === r(s[c], c, s)) break
                                    }
                                    return t
                                }
                            }

                            function iZ(e) {
                                return function(t) {
                                    var i = tL(t = s8(t)) ? tB(t) : r,
                                        n = i ? i[0] : t.charAt(0),
                                        s = i ? iq(i, 1).join("") : t.slice(1);
                                    return n[e]() + s
                                }
                            }

                            function iG(e) {
                                return function(t) {
                                    return td(oj(oP(t).replace(eH, "")), e, "")
                                }
                            }

                            function iJ(e) {
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t[0]);
                                        case 2:
                                            return new e(t[0], t[1]);
                                        case 3:
                                            return new e(t[0], t[1], t[2]);
                                        case 4:
                                            return new e(t[0], t[1], t[2], t[3]);
                                        case 5:
                                            return new e(t[0], t[1], t[2], t[3], t[4]);
                                        case 6:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                        case 7:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                    }
                                    var r = rg(e.prototype),
                                        i = e.apply(r, t);
                                    return sK(i) ? i : r
                                }
                            }

                            function iQ(e) {
                                return function(t, i, n) {
                                    var s = eE(t);
                                    if (!sM(t)) {
                                        var o = nu(i, 3);
                                        t = op(t), i = function(e) {
                                            return o(s[e], e, s)
                                        }
                                    }
                                    var a = e(t, i, n);
                                    return a > -1 ? s[o ? t[a] : a] : r
                                }
                            }

                            function iY(e) {
                                return ns(function(t) {
                                    var n = t.length,
                                        s = n,
                                        o = rv.prototype.thru;
                                    for (e && t.reverse(); s--;) {
                                        var a = t[s];
                                        if ("function" != typeof a) throw new eO(i);
                                        if (o && !c && "wrapper" == nh(a)) var c = new rv([], !0)
                                    }
                                    for (s = c ? s : n; ++s < n;) {
                                        var h = nh(a = t[s]),
                                            l = "wrapper" == h ? nc(a) : r;
                                        c = l && nP(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? c[nh(l[0])].apply(c, l[3]) : 1 == a.length && nP(a) ? c[h]() : c.thru(a)
                                    }
                                    return function() {
                                        var e = arguments,
                                            r = e[0];
                                        if (c && 1 == e.length && sD(r)) return c.plant(r).value();
                                        for (var i = 0, s = n ? t[i].apply(this, e) : r; ++i < n;) s = t[i].call(this, s);
                                        return s
                                    }
                                })
                            }

                            function iX(e, t, i, n, s, o, a, c, h, l) {
                                var u = 128 & t,
                                    p = 1 & t,
                                    f = 2 & t,
                                    d = 24 & t,
                                    g = 512 & t,
                                    y = f ? r : iJ(e);
                                return function v() {
                                    for (var m = arguments.length, w = em(m), b = m; b--;) w[b] = arguments[b];
                                    if (d) var _ = nl(v),
                                        I = function(e, t) {
                                            for (var r = e.length, i = 0; r--;) e[r] === t && ++i;
                                            return i
                                        }(w, _);
                                    if (n && (w = i$(w, n, s, d)), o && (w = iU(w, o, a, d)), m -= I, d && m < l) {
                                        var E = tU(w, _);
                                        return i4(e, t, iX, v.placeholder, i, w, E, c, h, l - m)
                                    }
                                    var P = p ? i : this,
                                        S = f ? P[e] : e;
                                    return m = w.length, c ? w = function(e, t) {
                                        for (var i = e.length, n = t6(t.length, i), s = iH(e); n--;) {
                                            var o = t[n];
                                            e[n] = n_(o, i) ? s[o] : r
                                        }
                                        return e
                                    }(w, c) : g && m > 1 && w.reverse(), u && h < m && (w.length = h), this && this !== e6 && this instanceof v && (S = y || iJ(S)), S.apply(P, w)
                                }
                            }

                            function i0(e, t) {
                                return function(r, i) {
                                    var n, s;
                                    return n = t(i), s = {}, rF(r, function(t, r, i) {
                                        e(s, n(t), r, i)
                                    }), s
                                }
                            }

                            function i1(e, t) {
                                return function(i, n) {
                                    var s;
                                    if (i === r && n === r) return t;
                                    if (i !== r && (s = i), n !== r) {
                                        if (s === r) return n;
                                        "string" == typeof i || "string" == typeof n ? (i = iE(i), n = iE(n)) : (i = iI(i), n = iI(n)), s = e(i, n)
                                    }
                                    return s
                                }
                            }

                            function i5(e) {
                                return ns(function(t) {
                                    return t = tp(t, tC(nu())), ip(function(r) {
                                        var i = this;
                                        return e(t, function(e) {
                                            return ts(e, i, r)
                                        })
                                    })
                                })
                            }

                            function i6(e, t) {
                                var i = (t = t === r ? " " : iE(t)).length;
                                if (i < 2) return i ? iu(t, e) : t;
                                var n = iu(t, tG(e / tV(t)));
                                return tL(t) ? iq(tB(n), 0, e).join("") : n.slice(0, e)
                            }

                            function i2(e) {
                                return function(t, i, n) {
                                    return n && "number" != typeof n && nI(t, i, n) && (i = n = r), t = s2(t), i === r ? (i = t, t = 0) : i = s2(i), n = n === r ? t < i ? 1 : -1 : s2(n),
                                        function(e, t, r, i) {
                                            for (var n = -1, s = t5(tG((t - e) / (r || 1)), 0), o = em(s); s--;) o[i ? s : ++n] = e, e += r;
                                            return o
                                        }(t, i, n, e)
                                }
                            }

                            function i3(e) {
                                return function(t, r) {
                                    return "string" == typeof t && "string" == typeof r || (t = s9(t), r = s9(r)), e(t, r)
                                }
                            }

                            function i4(e, t, i, n, s, o, a, c, h, l) {
                                var u = 8 & t,
                                    p = u ? a : r,
                                    f = u ? r : a,
                                    d = u ? o : r,
                                    g = u ? r : o;
                                t |= u ? 32 : 64, 4 & (t &= ~(u ? 64 : 32)) || (t &= -4);
                                var y = [e, t, s, d, p, g, f, c, h, l],
                                    v = i.apply(r, y);
                                return nP(e) && nN(v, y), v.placeholder = n, nq(v, e, t)
                            }

                            function i9(e) {
                                var t = eI[e];
                                return function(e, r) {
                                    if (e = s9(e), (r = null == r ? 0 : t6(s3(r), 292)) && tX(e)) {
                                        var i = (s8(e) + "e").split("e");
                                        return +((i = (s8(t(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (+i[1] - r))
                                    }
                                    return t(e)
                                }
                            }
                            var i7 = rt && 1 / tH(new rt([, -0]))[1] == o ? function(e) {
                                return new rt(e)
                            } : oV;

                            function i8(e) {
                                return function(t) {
                                    var r, i, n = nv(t);
                                    return n == y ? tk(t) : n == _ ? (r = -1, i = Array(t.size), t.forEach(function(e) {
                                        i[++r] = [e, e]
                                    }), i) : tp(e(t), function(e) {
                                        return [e, t[e]]
                                    })
                                }
                            }

                            function ne(e, t, n, o, a, c, h, l) {
                                var u = 2 & t;
                                if (!u && "function" != typeof e) throw new eO(i);
                                var p = o ? o.length : 0;
                                if (p || (t &= -97, o = a = r), h = h === r ? h : t5(s3(h), 0), l = l === r ? l : s3(l), p -= a ? a.length : 0, 64 & t) {
                                    var f = o,
                                        d = a;
                                    o = a = r
                                }
                                var g = u ? r : nc(e),
                                    y = [e, t, n, o, a, f, d, c, h, l];
                                if (g && function(e, t) {
                                        var r = e[1],
                                            i = t[1],
                                            n = r | i,
                                            o = n < 131,
                                            a = 128 == i && 8 == r || 128 == i && 256 == r && e[7].length <= t[8] || 384 == i && t[7].length <= t[8] && 8 == r;
                                        if (o || a) {
                                            1 & i && (e[2] = t[2], n |= 1 & r ? 0 : 4);
                                            var c = t[3];
                                            if (c) {
                                                var h = e[3];
                                                e[3] = h ? i$(h, c, t[4]) : c, e[4] = h ? tU(e[3], s) : t[4]
                                            }(c = t[5]) && (h = e[5], e[5] = h ? iU(h, c, t[6]) : c, e[6] = h ? tU(e[5], s) : t[6]), (c = t[7]) && (e[7] = c), 128 & i && (e[8] = null == e[8] ? t[8] : t6(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = n
                                        }
                                    }(y, g), e = y[0], t = y[1], n = y[2], o = y[3], a = y[4], (l = y[9] = y[9] === r ? u ? 0 : e.length : t5(y[9] - p, 0)) || !(24 & t) || (t &= -25), t && 1 != t) 8 == t || 16 == t ? (v = e, m = t, w = l, b = iJ(v), j = function e() {
                                    for (var t = arguments.length, i = em(t), n = t, s = nl(e); n--;) i[n] = arguments[n];
                                    var o = t < 3 && i[0] !== s && i[t - 1] !== s ? [] : tU(i, s);
                                    return (t -= o.length) < w ? i4(v, m, iX, e.placeholder, r, i, o, r, r, w - t) : ts(this && this !== e6 && this instanceof e ? b : v, this, i)
                                }) : 32 != t && 33 != t || a.length ? j = iX.apply(r, y) : (_ = e, I = t, E = n, P = o, S = 1 & I, O = iJ(_), j = function e() {
                                    for (var t = -1, r = arguments.length, i = -1, n = P.length, s = em(n + r), o = this && this !== e6 && this instanceof e ? O : _; ++i < n;) s[i] = P[i];
                                    for (; r--;) s[i++] = arguments[++t];
                                    return ts(o, S ? E : this, s)
                                });
                                else var v, m, w, b, _, I, E, P, S, O, x, R, A, C, N, j = (x = e, R = t, A = n, C = 1 & R, N = iJ(x), function e() {
                                    return (this && this !== e6 && this instanceof e ? N : x).apply(C ? A : this, arguments)
                                });
                                return nq((g ? ig : nN)(j, y), e, t)
                            }

                            function nt(e, t, i, n) {
                                return e === r || sN(e, eA[i]) && !ej.call(n, i) ? t : e
                            }

                            function nr(e, t, i, n, s, o) {
                                return sK(e) && sK(t) && (o.set(t, e), ii(e, t, r, nr, o), o.delete(t)), e
                            }

                            function ni(e) {
                                return sG(e) ? r : e
                            }

                            function nn(e, t, i, n, s, o) {
                                var a = 1 & i,
                                    c = e.length,
                                    h = t.length;
                                if (c != h && !(a && h > c)) return !1;
                                var l = o.get(e),
                                    u = o.get(t);
                                if (l && u) return l == t && u == e;
                                var p = -1,
                                    f = !0,
                                    d = 2 & i ? new rI : r;
                                for (o.set(e, t), o.set(t, e); ++p < c;) {
                                    var g = e[p],
                                        y = t[p];
                                    if (n) var v = a ? n(y, g, p, t, e, o) : n(g, y, p, e, t, o);
                                    if (v !== r) {
                                        if (v) continue;
                                        f = !1;
                                        break
                                    }
                                    if (d) {
                                        if (!ty(t, function(e, t) {
                                                if (!tj(d, t) && (g === e || s(g, e, i, n, o))) return d.push(t)
                                            })) {
                                            f = !1;
                                            break
                                        }
                                    } else if (!(g === y || s(g, y, i, n, o))) {
                                        f = !1;
                                        break
                                    }
                                }
                                return o.delete(e), o.delete(t), f
                            }

                            function ns(e) {
                                return nT(nR(e, r, nF), e + "")
                            }

                            function no(e) {
                                return rJ(e, op, ng)
                            }

                            function na(e) {
                                return rJ(e, of , ny)
                            }
                            var nc = rn ? function(e) {
                                return rn.get(e)
                            } : oV;

                            function nh(e) {
                                for (var t = e.name + "", r = rs[t], i = ej.call(rs, t) ? r.length : 0; i--;) {
                                    var n = r[i],
                                        s = n.func;
                                    if (null == s || s == e) return n.name
                                }
                                return t
                            }

                            function nl(e) {
                                return (ej.call(rd, "placeholder") ? rd : e).placeholder
                            }

                            function nu() {
                                var e = rd.iteratee || ok;
                                return e = e === ok ? r9 : e, arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function np(e, t) {
                                var r, i = e.__data__;
                                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
                            }

                            function nf(e) {
                                for (var t = op(e), r = t.length; r--;) {
                                    var i = t[r],
                                        n = e[i];
                                    t[r] = [i, n, n == n && !sK(n)]
                                }
                                return t
                            }

                            function nd(e, t) {
                                var i = null == e ? r : e[t];
                                return r4(i) ? i : r
                            }
                            var ng = tQ ? function(e) {
                                    return null == e ? [] : th(tQ(e = eE(e)), function(t) {
                                        return e1.call(e, t)
                                    })
                                } : oJ,
                                ny = tQ ? function(e) {
                                    for (var t = []; e;) tf(t, ng(e)), e = eF(e);
                                    return t
                                } : oJ,
                                nv = rQ;

                            function nm(e, t, r) {
                                t = iT(t, e);
                                for (var i = -1, n = t.length, s = !1; ++i < n;) {
                                    var o = nL(t[i]);
                                    if (!(s = null != e && r(e, o))) break;
                                    e = e[o]
                                }
                                return s || ++i != n ? s : !!(n = null == e ? 0 : e.length) && sB(n) && n_(o, n) && (sD(e) || sq(e))
                            }

                            function nw(e) {
                                return "function" != typeof e.constructor || nO(e) ? {} : rg(eF(e))
                            }

                            function nb(e) {
                                return sD(e) || sq(e) || !!(e2 && e && e[e2])
                            }

                            function n_(e, t) {
                                var r = typeof e;
                                return !!(t = t ? ? 9007199254740991) && ("number" == r || "symbol" != r && eu.test(e)) && e > -1 && e % 1 == 0 && e < t
                            }

                            function nI(e, t, r) {
                                if (!sK(r)) return !1;
                                var i = typeof t;
                                return ("number" == i ? !!(sM(r) && n_(t, r.length)) : "string" == i && t in r) && sN(r[t], e)
                            }

                            function nE(e, t) {
                                if (sD(e)) return !1;
                                var r = typeof e;
                                return !!("number" == r || "symbol" == r || "boolean" == r || null == e || sX(e)) || W.test(e) || !F.test(e) || null != t && e in eE(t)
                            }

                            function nP(e) {
                                var t = nh(e),
                                    r = rd[t];
                                if ("function" != typeof r || !(t in rm.prototype)) return !1;
                                if (e === r) return !0;
                                var i = nc(r);
                                return !!i && e === i[0]
                            }(t7 && nv(new t7(new ArrayBuffer(1))) != O || t8 && nv(new t8) != y || re && nv(re.resolve()) != w || rt && nv(new rt) != _ || rr && nv(new rr) != P) && (nv = function(e) {
                                var t = rQ(e),
                                    i = t == m ? e.constructor : r,
                                    n = i ? nk(i) : "";
                                if (n) switch (n) {
                                    case ro:
                                        return O;
                                    case ra:
                                        return y;
                                    case rc:
                                        return w;
                                    case rh:
                                        return _;
                                    case rl:
                                        return P
                                }
                                return t
                            });
                            var nS = eC ? sH : oQ;

                            function nO(e) {
                                var t = e && e.constructor;
                                return e === ("function" == typeof t && t.prototype || eA)
                            }

                            function nx(e, t) {
                                return function(i) {
                                    return null != i && i[e] === t && (t !== r || e in eE(i))
                                }
                            }

                            function nR(e, t, i) {
                                return t = t5(t === r ? e.length - 1 : t, 0),
                                    function() {
                                        for (var r = arguments, n = -1, s = t5(r.length - t, 0), o = em(s); ++n < s;) o[n] = r[t + n];
                                        n = -1;
                                        for (var a = em(t + 1); ++n < t;) a[n] = r[n];
                                        return a[t] = i(o), ts(e, this, a)
                                    }
                            }

                            function nA(e, t) {
                                return t.length < 2 ? e : rG(e, iv(t, 0, -1))
                            }

                            function nC(e, t) {
                                if (!("constructor" === t && "function" == typeof e[t]) && "__proto__" != t) return e[t]
                            }
                            var nN = nD(ig),
                                nj = tZ || function(e, t) {
                                    return e6.setTimeout(e, t)
                                },
                                nT = nD(iy);

                            function nq(e, t, r) {
                                var i, n, s = t + "";
                                return nT(e, function(e, t) {
                                    var r = t.length;
                                    if (!r) return e;
                                    var i = r - 1;
                                    return t[i] = (r > 1 ? "& " : "") + t[i], t = t.join(r > 2 ? ", " : " "), e.replace(X, `{
/* [wrapped with ` + t + `] */
`)
                                }(s, (i = (n = s.match(ee)) ? n[1].split(et) : [], ta(c, function(e) {
                                    var t = "_." + e[0];
                                    r & e[1] && !tl(i, t) && i.push(t)
                                }), i.sort())))
                            }

                            function nD(e) {
                                var t = 0,
                                    i = 0;
                                return function() {
                                    var n = t2(),
                                        s = 16 - (n - i);
                                    if (i = n, s > 0) {
                                        if (++t >= 800) return arguments[0]
                                    } else t = 0;
                                    return e.apply(r, arguments)
                                }
                            }

                            function nz(e, t) {
                                var i = -1,
                                    n = e.length,
                                    s = n - 1;
                                for (t = t === r ? n : t; ++i < t;) {
                                    var o = il(i, s),
                                        a = e[o];
                                    e[o] = e[i], e[i] = a
                                }
                                return e.length = t, e
                            }
                            var nM = (ey = (eg = sS(function(e) {
                                var t = [];
                                return 46 === e.charCodeAt(0) && t.push(""), e.replace(Z, function(e, r, i, n) {
                                    t.push(i ? n.replace(en, "$1") : r || e)
                                }), t
                            }, function(e) {
                                return 500 === ey.size && ey.clear(), e
                            })).cache, eg);

                            function nL(e) {
                                if ("string" == typeof e || sX(e)) return e;
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function nk(e) {
                                if (null != e) {
                                    try {
                                        return eN.call(e)
                                    } catch {}
                                    try {
                                        return e + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function n$(e) {
                                if (e instanceof rm) return e.clone();
                                var t = new rv(e.__wrapped__, e.__chain__);
                                return t.__actions__ = iH(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                            }
                            var nU = ip(function(e, t) {
                                    return sL(e) ? rM(e, rV(t, 1, sL, !0)) : []
                                }),
                                nH = ip(function(e, t) {
                                    var i = nQ(t);
                                    return sL(i) && (i = r), sL(e) ? rM(e, rV(t, 1, sL, !0), nu(i, 2)) : []
                                }),
                                nV = ip(function(e, t) {
                                    var i = nQ(t);
                                    return sL(i) && (i = r), sL(e) ? rM(e, rV(t, 1, sL, !0), r, i) : []
                                });

                            function nB(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s3(r);
                                return n < 0 && (n = t5(i + n, 0)), tw(e, nu(t, 3), n)
                            }

                            function nK(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n - 1;
                                return i !== r && (s = s3(i), s = i < 0 ? t5(n + s, 0) : t6(s, n - 1)), tw(e, nu(t, 3), s, !0)
                            }

                            function nF(e) {
                                return (null == e ? 0 : e.length) ? rV(e, 1) : []
                            }

                            function nW(e) {
                                return e && e.length ? e[0] : r
                            }
                            var nZ = ip(function(e) {
                                    var t = tp(e, iN);
                                    return t.length && t[0] === e[0] ? r1(t) : []
                                }),
                                nG = ip(function(e) {
                                    var t = nQ(e),
                                        i = tp(e, iN);
                                    return t === nQ(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? r1(i, nu(t, 2)) : []
                                }),
                                nJ = ip(function(e) {
                                    var t = nQ(e),
                                        i = tp(e, iN);
                                    return (t = "function" == typeof t ? t : r) && i.pop(), i.length && i[0] === e[0] ? r1(i, r, t) : []
                                });

                            function nQ(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? e[t - 1] : r
                            }
                            var nY = ip(nX);

                            function nX(e, t) {
                                return e && e.length && t && t.length ? ic(e, t) : e
                            }
                            var n0 = ns(function(e, t) {
                                var r = null == e ? 0 : e.length,
                                    i = rj(e, t);
                                return ih(e, tp(t, function(e) {
                                    return n_(e, r) ? +e : e
                                }).sort(ik)), i
                            });

                            function n1(e) {
                                return null == e ? e : t9.call(e)
                            }
                            var n5 = ip(function(e) {
                                    return iP(rV(e, 1, sL, !0))
                                }),
                                n6 = ip(function(e) {
                                    var t = nQ(e);
                                    return sL(t) && (t = r), iP(rV(e, 1, sL, !0), nu(t, 2))
                                }),
                                n2 = ip(function(e) {
                                    var t = nQ(e);
                                    return t = "function" == typeof t ? t : r, iP(rV(e, 1, sL, !0), r, t)
                                });

                            function n3(e) {
                                if (!(e && e.length)) return [];
                                var t = 0;
                                return e = th(e, function(e) {
                                    if (sL(e)) return t = t5(e.length, t), !0
                                }), tR(t, function(t) {
                                    return tp(e, tP(t))
                                })
                            }

                            function n4(e, t) {
                                if (!(e && e.length)) return [];
                                var i = n3(e);
                                return null == t ? i : tp(i, function(e) {
                                    return ts(t, r, e)
                                })
                            }
                            var n9 = ip(function(e, t) {
                                    return sL(e) ? rM(e, t) : []
                                }),
                                n7 = ip(function(e) {
                                    return iA(th(e, sL))
                                }),
                                n8 = ip(function(e) {
                                    var t = nQ(e);
                                    return sL(t) && (t = r), iA(th(e, sL), nu(t, 2))
                                }),
                                se = ip(function(e) {
                                    var t = nQ(e);
                                    return t = "function" == typeof t ? t : r, iA(th(e, sL), r, t)
                                }),
                                st = ip(n3),
                                sr = ip(function(e) {
                                    var t = e.length,
                                        i = t > 1 ? e[t - 1] : r;
                                    return i = "function" == typeof i ? (e.pop(), i) : r, n4(e, i)
                                });

                            function si(e) {
                                var t = rd(e);
                                return t.__chain__ = !0, t
                            }

                            function sn(e, t) {
                                return t(e)
                            }
                            var ss = ns(function(e) {
                                    var t = e.length,
                                        i = t ? e[0] : 0,
                                        n = this.__wrapped__,
                                        s = function(t) {
                                            return rj(t, e)
                                        };
                                    return !(t > 1) && !this.__actions__.length && n instanceof rm && n_(i) ? ((n = n.slice(i, +i + (t ? 1 : 0))).__actions__.push({
                                        func: sn,
                                        args: [s],
                                        thisArg: r
                                    }), new rv(n, this.__chain__).thru(function(e) {
                                        return t && !e.length && e.push(r), e
                                    })) : this.thru(s)
                                }),
                                so = iB(function(e, t, r) {
                                    ej.call(e, r) ? ++e[r] : rN(e, r, 1)
                                }),
                                sa = iQ(nB),
                                sc = iQ(nK);

                            function sh(e, t) {
                                return (sD(e) ? ta : rL)(e, nu(t, 3))
                            }

                            function sl(e, t) {
                                return (sD(e) ? function(e, t) {
                                    for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
                                    return e
                                } : rk)(e, nu(t, 3))
                            }
                            var su = iB(function(e, t, r) {
                                    ej.call(e, r) ? e[r].push(t) : rN(e, r, [t])
                                }),
                                sp = ip(function(e, t, r) {
                                    var i = -1,
                                        n = "function" == typeof t,
                                        s = sM(e) ? em(e.length) : [];
                                    return rL(e, function(e) {
                                        s[++i] = n ? ts(t, e, r) : r5(e, t, r)
                                    }), s
                                }),
                                sf = iB(function(e, t, r) {
                                    rN(e, r, t)
                                });

                            function sd(e, t) {
                                return (sD(e) ? tp : ie)(e, nu(t, 3))
                            }
                            var sg = iB(function(e, t, r) {
                                    e[r ? 0 : 1].push(t)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                sy = ip(function(e, t) {
                                    if (null == e) return [];
                                    var r = t.length;
                                    return r > 1 && nI(e, t[0], t[1]) ? t = [] : r > 2 && nI(t[0], t[1], t[2]) && (t = [t[0]]), io(e, rV(t, 1), [])
                                }),
                                sv = tS || function() {
                                    return e6.Date.now()
                                };

                            function sm(e, t, i) {
                                return t = i ? r : t, t = e && null == t ? e.length : t, ne(e, 128, r, r, r, r, t)
                            }

                            function sw(e, t) {
                                var n;
                                if ("function" != typeof t) throw new eO(i);
                                return e = s3(e),
                                    function() {
                                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = r), n
                                    }
                            }
                            var sb = ip(function(e, t, r) {
                                    var i = 1;
                                    if (r.length) {
                                        var n = tU(r, nl(sb));
                                        i |= 32
                                    }
                                    return ne(e, i, t, r, n)
                                }),
                                s_ = ip(function(e, t, r) {
                                    var i = 3;
                                    if (r.length) {
                                        var n = tU(r, nl(s_));
                                        i |= 32
                                    }
                                    return ne(t, i, e, r, n)
                                });

                            function sI(e, t, n) {
                                var s, o, a, c, h, l, u = 0,
                                    p = !1,
                                    f = !1,
                                    d = !0;
                                if ("function" != typeof e) throw new eO(i);

                                function g(t) {
                                    var i = s,
                                        n = o;
                                    return s = o = r, u = t, c = e.apply(n, i)
                                }

                                function y(e) {
                                    var i = e - l,
                                        n = e - u;
                                    return l === r || i >= t || i < 0 || f && n >= a
                                }

                                function v() {
                                    var e, r, i, n = sv();
                                    if (y(n)) return m(n);
                                    h = nj(v, (e = n - l, r = n - u, i = t - e, f ? t6(i, a - r) : i))
                                }

                                function m(e) {
                                    return h = r, d && s ? g(e) : (s = o = r, c)
                                }

                                function w() {
                                    var e, i = sv(),
                                        n = y(i);
                                    if (s = arguments, o = this, l = i, n) {
                                        if (h === r) return u = e = l, h = nj(v, t), p ? g(e) : c;
                                        if (f) return iD(h), h = nj(v, t), g(l)
                                    }
                                    return h === r && (h = nj(v, t)), c
                                }
                                return t = s9(t) || 0, sK(n) && (p = !!n.leading, a = (f = "maxWait" in n) ? t5(s9(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d), w.cancel = function() {
                                    h !== r && iD(h), u = 0, s = l = o = h = r
                                }, w.flush = function() {
                                    return h === r ? c : m(sv())
                                }, w
                            }
                            var sE = ip(function(e, t) {
                                    return rz(e, 1, t)
                                }),
                                sP = ip(function(e, t, r) {
                                    return rz(e, s9(t) || 0, r)
                                });

                            function sS(e, t) {
                                if ("function" != typeof e || null != t && "function" != typeof t) throw new eO(i);
                                var r = function() {
                                    var i = arguments,
                                        n = t ? t.apply(this, i) : i[0],
                                        s = r.cache;
                                    if (s.has(n)) return s.get(n);
                                    var o = e.apply(this, i);
                                    return r.cache = s.set(n, o) || s, o
                                };
                                return r.cache = new(sS.Cache || r_), r
                            }

                            function sO(e) {
                                if ("function" != typeof e) throw new eO(i);
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return !e.call(this);
                                        case 1:
                                            return !e.call(this, t[0]);
                                        case 2:
                                            return !e.call(this, t[0], t[1]);
                                        case 3:
                                            return !e.call(this, t[0], t[1], t[2])
                                    }
                                    return !e.apply(this, t)
                                }
                            }
                            sS.Cache = r_;
                            var sx = ip(function(e, t) {
                                    var r = (t = 1 == t.length && sD(t[0]) ? tp(t[0], tC(nu())) : tp(rV(t, 1), tC(nu()))).length;
                                    return ip(function(i) {
                                        for (var n = -1, s = t6(i.length, r); ++n < s;) i[n] = t[n].call(this, i[n]);
                                        return ts(e, this, i)
                                    })
                                }),
                                sR = ip(function(e, t) {
                                    var i = tU(t, nl(sR));
                                    return ne(e, 32, r, t, i)
                                }),
                                sA = ip(function(e, t) {
                                    var i = tU(t, nl(sA));
                                    return ne(e, 64, r, t, i)
                                }),
                                sC = ns(function(e, t) {
                                    return ne(e, 256, r, r, r, t)
                                });

                            function sN(e, t) {
                                return e === t || e != e && t != t
                            }
                            var sj = i3(rY),
                                sT = i3(function(e, t) {
                                    return e >= t
                                }),
                                sq = r6(function() {
                                    return arguments
                                }()) ? r6 : function(e) {
                                    return sF(e) && ej.call(e, "callee") && !e1.call(e, "callee")
                                },
                                sD = em.isArray,
                                sz = e8 ? tC(e8) : function(e) {
                                    return sF(e) && rQ(e) == S
                                };

                            function sM(e) {
                                return null != e && sB(e.length) && !sH(e)
                            }

                            function sL(e) {
                                return sF(e) && sM(e)
                            }
                            var sk = tY || oQ,
                                s$ = te ? tC(te) : function(e) {
                                    return sF(e) && rQ(e) == p
                                };

                            function sU(e) {
                                if (!sF(e)) return !1;
                                var t = rQ(e);
                                return t == f || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !sG(e)
                            }

                            function sH(e) {
                                if (!sK(e)) return !1;
                                var t = rQ(e);
                                return t == d || t == g || "[object AsyncFunction]" == t || "[object Proxy]" == t
                            }

                            function sV(e) {
                                return "number" == typeof e && e == s3(e)
                            }

                            function sB(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                            }

                            function sK(e) {
                                var t = typeof e;
                                return null != e && ("object" == t || "function" == t)
                            }

                            function sF(e) {
                                return null != e && "object" == typeof e
                            }
                            var sW = tt ? tC(tt) : function(e) {
                                return sF(e) && nv(e) == y
                            };

                            function sZ(e) {
                                return "number" == typeof e || sF(e) && rQ(e) == v
                            }

                            function sG(e) {
                                if (!sF(e) || rQ(e) != m) return !1;
                                var t = eF(e);
                                if (null === t) return !0;
                                var r = ej.call(t, "constructor") && t.constructor;
                                return "function" == typeof r && r instanceof r && eN.call(r) == ez
                            }
                            var sJ = tr ? tC(tr) : function(e) {
                                    return sF(e) && rQ(e) == b
                                },
                                sQ = ti ? tC(ti) : function(e) {
                                    return sF(e) && nv(e) == _
                                };

                            function sY(e) {
                                return "string" == typeof e || !sD(e) && sF(e) && rQ(e) == I
                            }

                            function sX(e) {
                                return "symbol" == typeof e || sF(e) && rQ(e) == E
                            }
                            var s0 = tn ? tC(tn) : function(e) {
                                    return sF(e) && sB(e.length) && !!eJ[rQ(e)]
                                },
                                s1 = i3(r8),
                                s5 = i3(function(e, t) {
                                    return e <= t
                                });

                            function s6(e) {
                                if (!e) return [];
                                if (sM(e)) return sY(e) ? tB(e) : iH(e);
                                if (e3 && e[e3]) return function(e) {
                                    for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                                    return r
                                }(e[e3]());
                                var t = nv(e);
                                return (t == y ? tk : t == _ ? tH : o_)(e)
                            }

                            function s2(e) {
                                return e ? (e = s9(e)) === o || e === -o ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
                            }

                            function s3(e) {
                                var t = s2(e),
                                    r = t % 1;
                                return t == t ? r ? t - r : t : 0
                            }

                            function s4(e) {
                                return e ? rT(s3(e), 0, 4294967295) : 0
                            }

                            function s9(e) {
                                if ("number" == typeof e) return e;
                                if (sX(e)) return a;
                                if (sK(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = sK(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = tA(e);
                                var r = ec.test(e);
                                return r || el.test(e) ? e0(e.slice(2), r ? 2 : 8) : ea.test(e) ? a : +e
                            }

                            function s7(e) {
                                return iV(e, of (e))
                            }

                            function s8(e) {
                                return null == e ? "" : iE(e)
                            }
                            var oe = iK(function(e, t) {
                                    if (nO(t) || sM(t)) {
                                        iV(t, op(t), e);
                                        return
                                    }
                                    for (var r in t) ej.call(t, r) && rx(e, r, t[r])
                                }),
                                ot = iK(function(e, t) {
                                    iV(t, of (t), e)
                                }),
                                or = iK(function(e, t, r, i) {
                                    iV(t, of (t), e, i)
                                }),
                                oi = iK(function(e, t, r, i) {
                                    iV(t, op(t), e, i)
                                }),
                                on = ns(rj),
                                os = ip(function(e, t) {
                                    e = eE(e);
                                    var i = -1,
                                        n = t.length,
                                        s = n > 2 ? t[2] : r;
                                    for (s && nI(t[0], t[1], s) && (n = 1); ++i < n;)
                                        for (var o = t[i], a = of (o), c = -1, h = a.length; ++c < h;) {
                                            var l = a[c],
                                                u = e[l];
                                            (u === r || sN(u, eA[l]) && !ej.call(e, l)) && (e[l] = o[l])
                                        }
                                    return e
                                }),
                                oo = ip(function(e) {
                                    return e.push(r, nr), ts(og, r, e)
                                });

                            function oa(e, t, i) {
                                var n = null == e ? r : rG(e, t);
                                return n === r ? i : n
                            }

                            function oc(e, t) {
                                return null != e && nm(e, t, r0)
                            }
                            var oh = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = eD.call(t)), e[t] = r
                                }, oD(oL)),
                                ol = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = eD.call(t)), ej.call(e, t) ? e[t].push(r) : e[t] = [r]
                                }, nu),
                                ou = ip(r5);

                            function op(e) {
                                return sM(e) ? rP(e) : r7(e)
                            }

                            function of (e) {
                                return sM(e) ? rP(e, !0) : function(e) {
                                    if (!sK(e)) return function(e) {
                                        var t = [];
                                        if (null != e)
                                            for (var r in eE(e)) t.push(r);
                                        return t
                                    }(e);
                                    var t = nO(e),
                                        r = [];
                                    for (var i in e) "constructor" == i && (t || !ej.call(e, i)) || r.push(i);
                                    return r
                                }(e)
                            }
                            var od = iK(function(e, t, r) {
                                    ii(e, t, r)
                                }),
                                og = iK(function(e, t, r, i) {
                                    ii(e, t, r, i)
                                }),
                                oy = ns(function(e, t) {
                                    var r = {};
                                    if (null == e) return r;
                                    var i = !1;
                                    t = tp(t, function(t) {
                                        return t = iT(t, e), i || (i = t.length > 1), t
                                    }), iV(e, na(e), r), i && (r = rq(r, 7, ni));
                                    for (var n = t.length; n--;) iS(r, t[n]);
                                    return r
                                }),
                                ov = ns(function(e, t) {
                                    return null == e ? {} : ia(e, t, function(t, r) {
                                        return oc(e, r)
                                    })
                                });

                            function om(e, t) {
                                if (null == e) return {};
                                var r = tp(na(e), function(e) {
                                    return [e]
                                });
                                return t = nu(t), ia(e, r, function(e, r) {
                                    return t(e, r[0])
                                })
                            }
                            var ow = i8(op),
                                ob = i8( of );

                            function o_(e) {
                                return null == e ? [] : tN(e, op(e))
                            }
                            var oI = iG(function(e, t, r) {
                                return t = t.toLowerCase(), e + (r ? oE(t) : t)
                            });

                            function oE(e) {
                                return oN(s8(e).toLowerCase())
                            }

                            function oP(e) {
                                return (e = s8(e)) && e.replace(ep, tD).replace(eV, "")
                            }
                            var oS = iG(function(e, t, r) {
                                    return e + (r ? "-" : "") + t.toLowerCase()
                                }),
                                oO = iG(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toLowerCase()
                                }),
                                ox = iZ("toLowerCase"),
                                oR = iG(function(e, t, r) {
                                    return e + (r ? "_" : "") + t.toLowerCase()
                                }),
                                oA = iG(function(e, t, r) {
                                    return e + (r ? " " : "") + oN(t)
                                }),
                                oC = iG(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toUpperCase()
                                }),
                                oN = iZ("toUpperCase");

                            function oj(e, t, i) {
                                var n;
                                return e = s8(e), (t = i ? r : t) === r ? (n = e, eW.test(n)) ? e.match(eK) || [] : e.match(er) || [] : e.match(t) || []
                            }
                            var oT = ip(function(e, t) {
                                    try {
                                        return ts(e, r, t)
                                    } catch (e) {
                                        return sU(e) ? e : new eb(e)
                                    }
                                }),
                                oq = ns(function(e, t) {
                                    return ta(t, function(t) {
                                        rN(e, t = nL(t), sb(e[t], e))
                                    }), e
                                });

                            function oD(e) {
                                return function() {
                                    return e
                                }
                            }
                            var oz = iY(),
                                oM = iY(!0);

                            function oL(e) {
                                return e
                            }

                            function ok(e) {
                                return r9("function" == typeof e ? e : rq(e, 1))
                            }
                            var o$ = ip(function(e, t) {
                                    return function(r) {
                                        return r5(r, e, t)
                                    }
                                }),
                                oU = ip(function(e, t) {
                                    return function(r) {
                                        return r5(e, r, t)
                                    }
                                });

                            function oH(e, t, r) {
                                var i = op(t),
                                    n = rZ(t, i);
                                null != r || sK(t) && (n.length || !i.length) || (r = t, t = e, e = this, n = rZ(t, op(t)));
                                var s = !(sK(r) && "chain" in r) || !!r.chain,
                                    o = sH(e);
                                return ta(n, function(r) {
                                    var i = t[r];
                                    e[r] = i, o && (e.prototype[r] = function() {
                                        var t = this.__chain__;
                                        if (s || t) {
                                            var r = e(this.__wrapped__);
                                            return (r.__actions__ = iH(this.__actions__)).push({
                                                func: i,
                                                args: arguments,
                                                thisArg: e
                                            }), r.__chain__ = t, r
                                        }
                                        return i.apply(e, tf([this.value()], arguments))
                                    })
                                }), e
                            }

                            function oV() {}
                            var oB = i5(tp),
                                oK = i5(tc),
                                oF = i5(ty);

                            function oW(e) {
                                return nE(e) ? tP(nL(e)) : function(t) {
                                    return rG(t, e)
                                }
                            }
                            var oZ = i2(),
                                oG = i2(!0);

                            function oJ() {
                                return []
                            }

                            function oQ() {
                                return !1
                            }
                            var oY = i1(function(e, t) {
                                    return e + t
                                }, 0),
                                oX = i9("ceil"),
                                o0 = i1(function(e, t) {
                                    return e / t
                                }, 1),
                                o1 = i9("floor"),
                                o5 = i1(function(e, t) {
                                    return e * t
                                }, 1),
                                o6 = i9("round"),
                                o2 = i1(function(e, t) {
                                    return e - t
                                }, 0);
                            return rd.after = function(e, t) {
                                if ("function" != typeof t) throw new eO(i);
                                return e = s3(e),
                                    function() {
                                        if (--e < 1) return t.apply(this, arguments)
                                    }
                            }, rd.ary = sm, rd.assign = oe, rd.assignIn = ot, rd.assignInWith = or, rd.assignWith = oi, rd.at = on, rd.before = sw, rd.bind = sb, rd.bindAll = oq, rd.bindKey = s_, rd.castArray = function() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return sD(e) ? e : [e]
                            }, rd.chain = si, rd.chunk = function(e, t, i) {
                                t = (i ? nI(e, t, i) : t === r) ? 1 : t5(s3(t), 0);
                                var n = null == e ? 0 : e.length;
                                if (!n || t < 1) return [];
                                for (var s = 0, o = 0, a = em(tG(n / t)); s < n;) a[o++] = iv(e, s, s += t);
                                return a
                            }, rd.compact = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = 0, n = []; ++t < r;) {
                                    var s = e[t];
                                    s && (n[i++] = s)
                                }
                                return n
                            }, rd.concat = function() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var t = em(e - 1), r = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
                                return tf(sD(r) ? iH(r) : [r], rV(t, 1))
                            }, rd.cond = function(e) {
                                var t = null == e ? 0 : e.length,
                                    r = nu();
                                return e = t ? tp(e, function(e) {
                                    if ("function" != typeof e[1]) throw new eO(i);
                                    return [r(e[0]), e[1]]
                                }) : [], ip(function(r) {
                                    for (var i = -1; ++i < t;) {
                                        var n = e[i];
                                        if (ts(n[0], this, r)) return ts(n[1], this, r)
                                    }
                                })
                            }, rd.conforms = function(e) {
                                var t, r;
                                return r = op(t = rq(e, 1)),
                                    function(e) {
                                        return rD(e, t, r)
                                    }
                            }, rd.constant = oD, rd.countBy = so, rd.create = function(e, t) {
                                var r = rg(e);
                                return null == t ? r : rC(r, t)
                            }, rd.curry = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 8, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.curryRight = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 16, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.debounce = sI, rd.defaults = os, rd.defaultsDeep = oo, rd.defer = sE, rd.delay = sP, rd.difference = nU, rd.differenceBy = nH, rd.differenceWith = nV, rd.drop = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = i || t === r ? 1 : s3(t)) < 0 ? 0 : t, n) : []
                            }, rd.dropRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, 0, (t = n - (t = i || t === r ? 1 : s3(t))) < 0 ? 0 : t) : []
                            }, rd.dropRightWhile = function(e, t) {
                                return e && e.length ? ix(e, nu(t, 3), !0, !0) : []
                            }, rd.dropWhile = function(e, t) {
                                return e && e.length ? ix(e, nu(t, 3), !0) : []
                            }, rd.fill = function(e, t, i, n) {
                                var s = null == e ? 0 : e.length;
                                return s ? (i && "number" != typeof i && nI(e, t, i) && (i = 0, n = s), function(e, t, i, n) {
                                    var s = e.length;
                                    for ((i = s3(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === r || n > s ? s : s3(n)) < 0 && (n += s), n = i > n ? 0 : s4(n); i < n;) e[i++] = t;
                                    return e
                                }(e, t, i, n)) : []
                            }, rd.filter = function(e, t) {
                                return (sD(e) ? th : rH)(e, nu(t, 3))
                            }, rd.flatMap = function(e, t) {
                                return rV(sd(e, t), 1)
                            }, rd.flatMapDeep = function(e, t) {
                                return rV(sd(e, t), o)
                            }, rd.flatMapDepth = function(e, t, i) {
                                return i = i === r ? 1 : s3(i), rV(sd(e, t), i)
                            }, rd.flatten = nF, rd.flattenDeep = function(e) {
                                return (null == e ? 0 : e.length) ? rV(e, o) : []
                            }, rd.flattenDepth = function(e, t) {
                                return (null == e ? 0 : e.length) ? rV(e, t = t === r ? 1 : s3(t)) : []
                            }, rd.flip = function(e) {
                                return ne(e, 512)
                            }, rd.flow = oz, rd.flowRight = oM, rd.fromPairs = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = {}; ++t < r;) {
                                    var n = e[t];
                                    i[n[0]] = n[1]
                                }
                                return i
                            }, rd.functions = function(e) {
                                return null == e ? [] : rZ(e, op(e))
                            }, rd.functionsIn = function(e) {
                                return null == e ? [] : rZ(e, of (e))
                            }, rd.groupBy = su, rd.initial = function(e) {
                                return (null == e ? 0 : e.length) ? iv(e, 0, -1) : []
                            }, rd.intersection = nZ, rd.intersectionBy = nG, rd.intersectionWith = nJ, rd.invert = oh, rd.invertBy = ol, rd.invokeMap = sp, rd.iteratee = ok, rd.keyBy = sf, rd.keys = op, rd.keysIn = of , rd.map = sd, rd.mapKeys = function(e, t) {
                                var r = {};
                                return t = nu(t, 3), rF(e, function(e, i, n) {
                                    rN(r, t(e, i, n), e)
                                }), r
                            }, rd.mapValues = function(e, t) {
                                var r = {};
                                return t = nu(t, 3), rF(e, function(e, i, n) {
                                    rN(r, i, t(e, i, n))
                                }), r
                            }, rd.matches = function(e) {
                                return it(rq(e, 1))
                            }, rd.matchesProperty = function(e, t) {
                                return ir(e, rq(t, 1))
                            }, rd.memoize = sS, rd.merge = od, rd.mergeWith = og, rd.method = o$, rd.methodOf = oU, rd.mixin = oH, rd.negate = sO, rd.nthArg = function(e) {
                                return e = s3(e), ip(function(t) {
                                    return is(t, e)
                                })
                            }, rd.omit = oy, rd.omitBy = function(e, t) {
                                return om(e, sO(nu(t)))
                            }, rd.once = function(e) {
                                return sw(2, e)
                            }, rd.orderBy = function(e, t, i, n) {
                                return null == e ? [] : (sD(t) || (t = null == t ? [] : [t]), sD(i = n ? r : i) || (i = null == i ? [] : [i]), io(e, t, i))
                            }, rd.over = oB, rd.overArgs = sx, rd.overEvery = oK, rd.overSome = oF, rd.partial = sR, rd.partialRight = sA, rd.partition = sg, rd.pick = ov, rd.pickBy = om, rd.property = oW, rd.propertyOf = function(e) {
                                return function(t) {
                                    return null == e ? r : rG(e, t)
                                }
                            }, rd.pull = nY, rd.pullAll = nX, rd.pullAllBy = function(e, t, r) {
                                return e && e.length && t && t.length ? ic(e, t, nu(r, 2)) : e
                            }, rd.pullAllWith = function(e, t, i) {
                                return e && e.length && t && t.length ? ic(e, t, r, i) : e
                            }, rd.pullAt = n0, rd.range = oZ, rd.rangeRight = oG, rd.rearg = sC, rd.reject = function(e, t) {
                                return (sD(e) ? th : rH)(e, sO(nu(t, 3)))
                            }, rd.remove = function(e, t) {
                                var r = [];
                                if (!(e && e.length)) return r;
                                var i = -1,
                                    n = [],
                                    s = e.length;
                                for (t = nu(t, 3); ++i < s;) {
                                    var o = e[i];
                                    t(o, i, e) && (r.push(o), n.push(i))
                                }
                                return ih(e, n), r
                            }, rd.rest = function(e, t) {
                                if ("function" != typeof e) throw new eO(i);
                                return ip(e, t = t === r ? t : s3(t))
                            }, rd.reverse = n1, rd.sampleSize = function(e, t, i) {
                                return t = (i ? nI(e, t, i) : t === r) ? 1 : s3(t), (sD(e) ? function(e, t) {
                                    return nz(iH(e), rT(t, 0, e.length))
                                } : function(e, t) {
                                    var r = o_(e);
                                    return nz(r, rT(t, 0, r.length))
                                })(e, t)
                            }, rd.set = function(e, t, r) {
                                return null == e ? e : id(e, t, r)
                            }, rd.setWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : id(e, t, i, n)
                            }, rd.shuffle = function(e) {
                                return (sD(e) ? function(e) {
                                    return nz(iH(e))
                                } : function(e) {
                                    return nz(o_(e))
                                })(e)
                            }, rd.slice = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? (i && "number" != typeof i && nI(e, t, i) ? (t = 0, i = n) : (t = null == t ? 0 : s3(t), i = i === r ? n : s3(i)), iv(e, t, i)) : []
                            }, rd.sortBy = sy, rd.sortedUniq = function(e) {
                                return e && e.length ? i_(e) : []
                            }, rd.sortedUniqBy = function(e, t) {
                                return e && e.length ? i_(e, nu(t, 2)) : []
                            }, rd.split = function(e, t, i) {
                                return i && "number" != typeof i && nI(e, t, i) && (t = i = r), (i = i === r ? 4294967295 : i >>> 0) ? (e = s8(e)) && ("string" == typeof t || null != t && !sJ(t)) && !(t = iE(t)) && tL(e) ? iq(tB(e), 0, i) : e.split(t, i) : []
                            }, rd.spread = function(e, t) {
                                if ("function" != typeof e) throw new eO(i);
                                return t = null == t ? 0 : t5(s3(t), 0), ip(function(r) {
                                    var i = r[t],
                                        n = iq(r, 0, t);
                                    return i && tf(n, i), ts(e, this, n)
                                })
                            }, rd.tail = function(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? iv(e, 1, t) : []
                            }, rd.take = function(e, t, i) {
                                return e && e.length ? iv(e, 0, (t = i || t === r ? 1 : s3(t)) < 0 ? 0 : t) : []
                            }, rd.takeRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = n - (t = i || t === r ? 1 : s3(t))) < 0 ? 0 : t, n) : []
                            }, rd.takeRightWhile = function(e, t) {
                                return e && e.length ? ix(e, nu(t, 3), !1, !0) : []
                            }, rd.takeWhile = function(e, t) {
                                return e && e.length ? ix(e, nu(t, 3)) : []
                            }, rd.tap = function(e, t) {
                                return t(e), e
                            }, rd.throttle = function(e, t, r) {
                                var n = !0,
                                    s = !0;
                                if ("function" != typeof e) throw new eO(i);
                                return sK(r) && (n = "leading" in r ? !!r.leading : n, s = "trailing" in r ? !!r.trailing : s), sI(e, t, {
                                    leading: n,
                                    maxWait: t,
                                    trailing: s
                                })
                            }, rd.thru = sn, rd.toArray = s6, rd.toPairs = ow, rd.toPairsIn = ob, rd.toPath = function(e) {
                                return sD(e) ? tp(e, nL) : sX(e) ? [e] : iH(nM(s8(e)))
                            }, rd.toPlainObject = s7, rd.transform = function(e, t, r) {
                                var i = sD(e),
                                    n = i || sk(e) || s0(e);
                                if (t = nu(t, 4), null == r) {
                                    var s = e && e.constructor;
                                    r = n ? i ? new s : [] : sK(e) && sH(s) ? rg(eF(e)) : {}
                                }
                                return (n ? ta : rF)(e, function(e, i, n) {
                                    return t(r, e, i, n)
                                }), r
                            }, rd.unary = function(e) {
                                return sm(e, 1)
                            }, rd.union = n5, rd.unionBy = n6, rd.unionWith = n2, rd.uniq = function(e) {
                                return e && e.length ? iP(e) : []
                            }, rd.uniqBy = function(e, t) {
                                return e && e.length ? iP(e, nu(t, 2)) : []
                            }, rd.uniqWith = function(e, t) {
                                return t = "function" == typeof t ? t : r, e && e.length ? iP(e, r, t) : []
                            }, rd.unset = function(e, t) {
                                return null == e || iS(e, t)
                            }, rd.unzip = n3, rd.unzipWith = n4, rd.update = function(e, t, r) {
                                return null == e ? e : iO(e, t, ij(r))
                            }, rd.updateWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : iO(e, t, ij(i), n)
                            }, rd.values = o_, rd.valuesIn = function(e) {
                                return null == e ? [] : tN(e, of (e))
                            }, rd.without = n9, rd.words = oj, rd.wrap = function(e, t) {
                                return sR(ij(t), e)
                            }, rd.xor = n7, rd.xorBy = n8, rd.xorWith = se, rd.zip = st, rd.zipObject = function(e, t) {
                                return iC(e || [], t || [], rx)
                            }, rd.zipObjectDeep = function(e, t) {
                                return iC(e || [], t || [], id)
                            }, rd.zipWith = sr, rd.entries = ow, rd.entriesIn = ob, rd.extend = ot, rd.extendWith = or, oH(rd, rd), rd.add = oY, rd.attempt = oT, rd.camelCase = oI, rd.capitalize = oE, rd.ceil = oX, rd.clamp = function(e, t, i) {
                                return i === r && (i = t, t = r), i !== r && (i = (i = s9(i)) == i ? i : 0), t !== r && (t = (t = s9(t)) == t ? t : 0), rT(s9(e), t, i)
                            }, rd.clone = function(e) {
                                return rq(e, 4)
                            }, rd.cloneDeep = function(e) {
                                return rq(e, 5)
                            }, rd.cloneDeepWith = function(e, t) {
                                return rq(e, 5, t = "function" == typeof t ? t : r)
                            }, rd.cloneWith = function(e, t) {
                                return rq(e, 4, t = "function" == typeof t ? t : r)
                            }, rd.conformsTo = function(e, t) {
                                return null == t || rD(e, t, op(t))
                            }, rd.deburr = oP, rd.defaultTo = function(e, t) {
                                return null == e || e != e ? t : e
                            }, rd.divide = o0, rd.endsWith = function(e, t, i) {
                                e = s8(e), t = iE(t);
                                var n = e.length,
                                    s = i = i === r ? n : rT(s3(i), 0, n);
                                return (i -= t.length) >= 0 && e.slice(i, s) == t
                            }, rd.eq = sN, rd.escape = function(e) {
                                return (e = s8(e)) && H.test(e) ? e.replace($, tz) : e
                            }, rd.escapeRegExp = function(e) {
                                return (e = s8(e)) && J.test(e) ? e.replace(G, "\\$&") : e
                            }, rd.every = function(e, t, i) {
                                var n = sD(e) ? tc : r$;
                                return i && nI(e, t, i) && (t = r), n(e, nu(t, 3))
                            }, rd.find = sa, rd.findIndex = nB, rd.findKey = function(e, t) {
                                return tm(e, nu(t, 3), rF)
                            }, rd.findLast = sc, rd.findLastIndex = nK, rd.findLastKey = function(e, t) {
                                return tm(e, nu(t, 3), rW)
                            }, rd.floor = o1, rd.forEach = sh, rd.forEachRight = sl, rd.forIn = function(e, t) {
                                return null == e ? e : rB(e, nu(t, 3), of )
                            }, rd.forInRight = function(e, t) {
                                return null == e ? e : rK(e, nu(t, 3), of )
                            }, rd.forOwn = function(e, t) {
                                return e && rF(e, nu(t, 3))
                            }, rd.forOwnRight = function(e, t) {
                                return e && rW(e, nu(t, 3))
                            }, rd.get = oa, rd.gt = sj, rd.gte = sT, rd.has = function(e, t) {
                                return null != e && nm(e, t, rX)
                            }, rd.hasIn = oc, rd.head = nW, rd.identity = oL, rd.includes = function(e, t, r, i) {
                                e = sM(e) ? e : o_(e), r = r && !i ? s3(r) : 0;
                                var n = e.length;
                                return r < 0 && (r = t5(n + r, 0)), sY(e) ? r <= n && e.indexOf(t, r) > -1 : !!n && tb(e, t, r) > -1
                            }, rd.indexOf = function(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s3(r);
                                return n < 0 && (n = t5(i + n, 0)), tb(e, t, n)
                            }, rd.inRange = function(e, t, i) {
                                var n, s, o;
                                return t = s2(t), i === r ? (i = t, t = 0) : i = s2(i), (n = e = s9(e)) >= t6(s = t, o = i) && n < t5(s, o)
                            }, rd.invoke = ou, rd.isArguments = sq, rd.isArray = sD, rd.isArrayBuffer = sz, rd.isArrayLike = sM, rd.isArrayLikeObject = sL, rd.isBoolean = function(e) {
                                return !0 === e || !1 === e || sF(e) && rQ(e) == u
                            }, rd.isBuffer = sk, rd.isDate = s$, rd.isElement = function(e) {
                                return sF(e) && 1 === e.nodeType && !sG(e)
                            }, rd.isEmpty = function(e) {
                                if (null == e) return !0;
                                if (sM(e) && (sD(e) || "string" == typeof e || "function" == typeof e.splice || sk(e) || s0(e) || sq(e))) return !e.length;
                                var t = nv(e);
                                if (t == y || t == _) return !e.size;
                                if (nO(e)) return !r7(e).length;
                                for (var r in e)
                                    if (ej.call(e, r)) return !1;
                                return !0
                            }, rd.isEqual = function(e, t) {
                                return r2(e, t)
                            }, rd.isEqualWith = function(e, t, i) {
                                var n = (i = "function" == typeof i ? i : r) ? i(e, t) : r;
                                return n === r ? r2(e, t, r, i) : !!n
                            }, rd.isError = sU, rd.isFinite = function(e) {
                                return "number" == typeof e && tX(e)
                            }, rd.isFunction = sH, rd.isInteger = sV, rd.isLength = sB, rd.isMap = sW, rd.isMatch = function(e, t) {
                                return e === t || r3(e, t, nf(t))
                            }, rd.isMatchWith = function(e, t, i) {
                                return i = "function" == typeof i ? i : r, r3(e, t, nf(t), i)
                            }, rd.isNaN = function(e) {
                                return sZ(e) && e != +e
                            }, rd.isNative = function(e) {
                                if (nS(e)) throw new eb("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return r4(e)
                            }, rd.isNil = function(e) {
                                return null == e
                            }, rd.isNull = function(e) {
                                return null === e
                            }, rd.isNumber = sZ, rd.isObject = sK, rd.isObjectLike = sF, rd.isPlainObject = sG, rd.isRegExp = sJ, rd.isSafeInteger = function(e) {
                                return sV(e) && e >= -9007199254740991 && e <= 9007199254740991
                            }, rd.isSet = sQ, rd.isString = sY, rd.isSymbol = sX, rd.isTypedArray = s0, rd.isUndefined = function(e) {
                                return e === r
                            }, rd.isWeakMap = function(e) {
                                return sF(e) && nv(e) == P
                            }, rd.isWeakSet = function(e) {
                                return sF(e) && "[object WeakSet]" == rQ(e)
                            }, rd.join = function(e, t) {
                                return null == e ? "" : t0.call(e, t)
                            }, rd.kebabCase = oS, rd.last = nQ, rd.lastIndexOf = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n;
                                return i !== r && (s = (s = s3(i)) < 0 ? t5(n + s, 0) : t6(s, n - 1)), t == t ? function(e, t, r) {
                                    for (var i = r + 1; i-- && e[i] !== t;);
                                    return i
                                }(e, t, s) : tw(e, tI, s, !0)
                            }, rd.lowerCase = oO, rd.lowerFirst = ox, rd.lt = s1, rd.lte = s5, rd.max = function(e) {
                                return e && e.length ? rU(e, oL, rY) : r
                            }, rd.maxBy = function(e, t) {
                                return e && e.length ? rU(e, nu(t, 2), rY) : r
                            }, rd.mean = function(e) {
                                return tE(e, oL)
                            }, rd.meanBy = function(e, t) {
                                return tE(e, nu(t, 2))
                            }, rd.min = function(e) {
                                return e && e.length ? rU(e, oL, r8) : r
                            }, rd.minBy = function(e, t) {
                                return e && e.length ? rU(e, nu(t, 2), r8) : r
                            }, rd.stubArray = oJ, rd.stubFalse = oQ, rd.stubObject = function() {
                                return {}
                            }, rd.stubString = function() {
                                return ""
                            }, rd.stubTrue = function() {
                                return !0
                            }, rd.multiply = o5, rd.nth = function(e, t) {
                                return e && e.length ? is(e, s3(t)) : r
                            }, rd.noConflict = function() {
                                return e6._ === this && (e6._ = eM), this
                            }, rd.noop = oV, rd.now = sv, rd.pad = function(e, t, r) {
                                e = s8(e);
                                var i = (t = s3(t)) ? tV(e) : 0;
                                if (!t || i >= t) return e;
                                var n = (t - i) / 2;
                                return i6(tJ(n), r) + e + i6(tG(n), r)
                            }, rd.padEnd = function(e, t, r) {
                                e = s8(e);
                                var i = (t = s3(t)) ? tV(e) : 0;
                                return t && i < t ? e + i6(t - i, r) : e
                            }, rd.padStart = function(e, t, r) {
                                e = s8(e);
                                var i = (t = s3(t)) ? tV(e) : 0;
                                return t && i < t ? i6(t - i, r) + e : e
                            }, rd.parseInt = function(e, t, r) {
                                return r || null == t ? t = 0 : t && (t = +t), t3(s8(e).replace(Q, ""), t || 0)
                            }, rd.random = function(e, t, i) {
                                if (i && "boolean" != typeof i && nI(e, t, i) && (t = i = r), i === r && ("boolean" == typeof t ? (i = t, t = r) : "boolean" == typeof e && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = s2(e), t === r ? (t = e, e = 0) : t = s2(t)), e > t) {
                                    var n = e;
                                    e = t, t = n
                                }
                                if (i || e % 1 || t % 1) {
                                    var s = t4();
                                    return t6(e + s * (t - e + eX("1e-" + ((s + "").length - 1))), t)
                                }
                                return il(e, t)
                            }, rd.reduce = function(e, t, r) {
                                var i = sD(e) ? td : tO,
                                    n = arguments.length < 3;
                                return i(e, nu(t, 4), r, n, rL)
                            }, rd.reduceRight = function(e, t, r) {
                                var i = sD(e) ? tg : tO,
                                    n = arguments.length < 3;
                                return i(e, nu(t, 4), r, n, rk)
                            }, rd.repeat = function(e, t, i) {
                                return t = (i ? nI(e, t, i) : t === r) ? 1 : s3(t), iu(s8(e), t)
                            }, rd.replace = function() {
                                var e = arguments,
                                    t = s8(e[0]);
                                return e.length < 3 ? t : t.replace(e[1], e[2])
                            }, rd.result = function(e, t, i) {
                                t = iT(t, e);
                                var n = -1,
                                    s = t.length;
                                for (s || (s = 1, e = r); ++n < s;) {
                                    var o = null == e ? r : e[nL(t[n])];
                                    o === r && (n = s, o = i), e = sH(o) ? o.call(e) : o
                                }
                                return e
                            }, rd.round = o6, rd.runInContext = e, rd.sample = function(e) {
                                return (sD(e) ? rS : function(e) {
                                    return rS(o_(e))
                                })(e)
                            }, rd.size = function(e) {
                                if (null == e) return 0;
                                if (sM(e)) return sY(e) ? tV(e) : e.length;
                                var t = nv(e);
                                return t == y || t == _ ? e.size : r7(e).length
                            }, rd.snakeCase = oR, rd.some = function(e, t, i) {
                                var n = sD(e) ? ty : im;
                                return i && nI(e, t, i) && (t = r), n(e, nu(t, 3))
                            }, rd.sortedIndex = function(e, t) {
                                return iw(e, t)
                            }, rd.sortedIndexBy = function(e, t, r) {
                                return ib(e, t, nu(r, 2))
                            }, rd.sortedIndexOf = function(e, t) {
                                var r = null == e ? 0 : e.length;
                                if (r) {
                                    var i = iw(e, t);
                                    if (i < r && sN(e[i], t)) return i
                                }
                                return -1
                            }, rd.sortedLastIndex = function(e, t) {
                                return iw(e, t, !0)
                            }, rd.sortedLastIndexBy = function(e, t, r) {
                                return ib(e, t, nu(r, 2), !0)
                            }, rd.sortedLastIndexOf = function(e, t) {
                                if (null == e ? 0 : e.length) {
                                    var r = iw(e, t, !0) - 1;
                                    if (sN(e[r], t)) return r
                                }
                                return -1
                            }, rd.startCase = oA, rd.startsWith = function(e, t, r) {
                                return e = s8(e), r = null == r ? 0 : rT(s3(r), 0, e.length), t = iE(t), e.slice(r, r + t.length) == t
                            }, rd.subtract = o2, rd.sum = function(e) {
                                return e && e.length ? tx(e, oL) : 0
                            }, rd.sumBy = function(e, t) {
                                return e && e.length ? tx(e, nu(t, 2)) : 0
                            }, rd.template = function(e, t, i) {
                                var n = rd.templateSettings;
                                i && nI(e, t, i) && (t = r), e = s8(e), t = or({}, t, n, nt);
                                var s, o, a = or({}, t.imports, n.imports, nt),
                                    c = op(a),
                                    h = tN(a, c),
                                    l = 0,
                                    u = t.interpolate || ef,
                                    p = "__p += '",
                                    f = eP((t.escape || ef).source + "|" + u.source + "|" + (u === K ? es : ef).source + "|" + (t.evaluate || ef).source + "|$", "g"),
                                    d = "//# sourceURL=" + (ej.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++eG + "]") + `
`;
                                e.replace(f, function(t, r, i, n, a, c) {
                                    return i || (i = n), p += e.slice(l, c).replace(ed, tM), r && (s = !0, p += `' +
__e(` + r + `) +
'`), a && (o = !0, p += `';
` + a + `;
__p += '`), i && (p += `' +
((__t = (` + i + `)) == null ? '' : __t) +
'`), l = c + t.length, t
                                }), p += `';
`;
                                var g = ej.call(t, "variable") && t.variable;
                                if (g) {
                                    if (ei.test(g)) throw new eb("Invalid `variable` option passed into `_.template`")
                                } else p = `with (obj) {
` + p + `
}
`;
                                p = (o ? p.replace(z, "") : p).replace(M, "$1").replace(L, "$1;"), p = "function(" + (g || "obj") + `) {
` + (g ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + p + `return __p
}`;
                                var y = oT(function() {
                                    return e_(c, d + "return " + p).apply(r, h)
                                });
                                if (y.source = p, sU(y)) throw y;
                                return y
                            }, rd.times = function(e, t) {
                                if ((e = s3(e)) < 1 || e > 9007199254740991) return [];
                                var r = 4294967295,
                                    i = t6(e, 4294967295);
                                t = nu(t), e -= 4294967295;
                                for (var n = tR(i, t); ++r < e;) t(r);
                                return n
                            }, rd.toFinite = s2, rd.toInteger = s3, rd.toLength = s4, rd.toLower = function(e) {
                                return s8(e).toLowerCase()
                            }, rd.toNumber = s9, rd.toSafeInteger = function(e) {
                                return e ? rT(s3(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
                            }, rd.toString = s8, rd.toUpper = function(e) {
                                return s8(e).toUpperCase()
                            }, rd.trim = function(e, t, i) {
                                if ((e = s8(e)) && (i || t === r)) return tA(e);
                                if (!e || !(t = iE(t))) return e;
                                var n = tB(e),
                                    s = tB(t),
                                    o = tT(n, s),
                                    a = tq(n, s) + 1;
                                return iq(n, o, a).join("")
                            }, rd.trimEnd = function(e, t, i) {
                                if ((e = s8(e)) && (i || t === r)) return e.slice(0, tK(e) + 1);
                                if (!e || !(t = iE(t))) return e;
                                var n = tB(e),
                                    s = tq(n, tB(t)) + 1;
                                return iq(n, 0, s).join("")
                            }, rd.trimStart = function(e, t, i) {
                                if ((e = s8(e)) && (i || t === r)) return e.replace(Q, "");
                                if (!e || !(t = iE(t))) return e;
                                var n = tB(e),
                                    s = tT(n, tB(t));
                                return iq(n, s).join("")
                            }, rd.truncate = function(e, t) {
                                var i = 30,
                                    n = "...";
                                if (sK(t)) {
                                    var s = "separator" in t ? t.separator : s;
                                    i = "length" in t ? s3(t.length) : i, n = "omission" in t ? iE(t.omission) : n
                                }
                                var o = (e = s8(e)).length;
                                if (tL(e)) {
                                    var a = tB(e);
                                    o = a.length
                                }
                                if (i >= o) return e;
                                var c = i - tV(n);
                                if (c < 1) return n;
                                var h = a ? iq(a, 0, c).join("") : e.slice(0, c);
                                if (s === r) return h + n;
                                if (a && (c += h.length - c), sJ(s)) {
                                    if (e.slice(c).search(s)) {
                                        var l, u = h;
                                        for (s.global || (s = eP(s.source, s8(eo.exec(s)) + "g")), s.lastIndex = 0; l = s.exec(u);) var p = l.index;
                                        h = h.slice(0, p === r ? c : p)
                                    }
                                } else if (e.indexOf(iE(s), c) != c) {
                                    var f = h.lastIndexOf(s);
                                    f > -1 && (h = h.slice(0, f))
                                }
                                return h + n
                            }, rd.unescape = function(e) {
                                return (e = s8(e)) && U.test(e) ? e.replace(k, tF) : e
                            }, rd.uniqueId = function(e) {
                                var t = ++eT;
                                return s8(e) + t
                            }, rd.upperCase = oC, rd.upperFirst = oN, rd.each = sh, rd.eachRight = sl, rd.first = nW, oH(rd, (ev = {}, rF(rd, function(e, t) {
                                ej.call(rd.prototype, t) || (ev[t] = e)
                            }), ev), {
                                chain: !1
                            }), rd.VERSION = "4.17.21", ta(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                rd[e].placeholder = rd
                            }), ta(["drop", "take"], function(e, t) {
                                rm.prototype[e] = function(i) {
                                    i = i === r ? 1 : t5(s3(i), 0);
                                    var n = this.__filtered__ && !t ? new rm(this) : this.clone();
                                    return n.__filtered__ ? n.__takeCount__ = t6(i, n.__takeCount__) : n.__views__.push({
                                        size: t6(i, 4294967295),
                                        type: e + (n.__dir__ < 0 ? "Right" : "")
                                    }), n
                                }, rm.prototype[e + "Right"] = function(t) {
                                    return this.reverse()[e](t).reverse()
                                }
                            }), ta(["filter", "map", "takeWhile"], function(e, t) {
                                var r = t + 1,
                                    i = 1 == r || 3 == r;
                                rm.prototype[e] = function(e) {
                                    var t = this.clone();
                                    return t.__iteratees__.push({
                                        iteratee: nu(e, 3),
                                        type: r
                                    }), t.__filtered__ = t.__filtered__ || i, t
                                }
                            }), ta(["head", "last"], function(e, t) {
                                var r = "take" + (t ? "Right" : "");
                                rm.prototype[e] = function() {
                                    return this[r](1).value()[0]
                                }
                            }), ta(["initial", "tail"], function(e, t) {
                                var r = "drop" + (t ? "" : "Right");
                                rm.prototype[e] = function() {
                                    return this.__filtered__ ? new rm(this) : this[r](1)
                                }
                            }), rm.prototype.compact = function() {
                                return this.filter(oL)
                            }, rm.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, rm.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, rm.prototype.invokeMap = ip(function(e, t) {
                                return "function" == typeof e ? new rm(this) : this.map(function(r) {
                                    return r5(r, e, t)
                                })
                            }), rm.prototype.reject = function(e) {
                                return this.filter(sO(nu(e)))
                            }, rm.prototype.slice = function(e, t) {
                                e = s3(e);
                                var i = this;
                                return i.__filtered__ && (e > 0 || t < 0) ? new rm(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== r && (i = (t = s3(t)) < 0 ? i.dropRight(-t) : i.take(t - e)), i)
                            }, rm.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, rm.prototype.toArray = function() {
                                return this.take(4294967295)
                            }, rF(rm.prototype, function(e, t) {
                                var i = /^(?:filter|find|map|reject)|While$/.test(t),
                                    n = /^(?:head|last)$/.test(t),
                                    s = rd[n ? "take" + ("last" == t ? "Right" : "") : t],
                                    o = n || /^find/.test(t);
                                s && (rd.prototype[t] = function() {
                                    var t = this.__wrapped__,
                                        a = n ? [1] : arguments,
                                        c = t instanceof rm,
                                        h = a[0],
                                        l = c || sD(t),
                                        u = function(e) {
                                            var t = s.apply(rd, tf([e], a));
                                            return n && p ? t[0] : t
                                        };
                                    l && i && "function" == typeof h && 1 != h.length && (c = l = !1);
                                    var p = this.__chain__,
                                        f = !!this.__actions__.length,
                                        d = o && !p,
                                        g = c && !f;
                                    if (!o && l) {
                                        t = g ? t : new rm(this);
                                        var y = e.apply(t, a);
                                        return y.__actions__.push({
                                            func: sn,
                                            args: [u],
                                            thisArg: r
                                        }), new rv(y, p)
                                    }
                                    return d && g ? e.apply(this, a) : (y = this.thru(u), d ? n ? y.value()[0] : y.value() : y)
                                })
                            }), ta(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                var t = ex[e],
                                    r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    i = /^(?:pop|shift)$/.test(e);
                                rd.prototype[e] = function() {
                                    var e = arguments;
                                    if (i && !this.__chain__) {
                                        var n = this.value();
                                        return t.apply(sD(n) ? n : [], e)
                                    }
                                    return this[r](function(r) {
                                        return t.apply(sD(r) ? r : [], e)
                                    })
                                }
                            }), rF(rm.prototype, function(e, t) {
                                var r = rd[t];
                                if (r) {
                                    var i = r.name + "";
                                    ej.call(rs, i) || (rs[i] = []), rs[i].push({
                                        name: t,
                                        func: r
                                    })
                                }
                            }), rs[iX(r, 2).name] = [{
                                name: "wrapper",
                                func: r
                            }], rm.prototype.clone = function() {
                                var e = new rm(this.__wrapped__);
                                return e.__actions__ = iH(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = iH(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = iH(this.__views__), e
                            }, rm.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var e = new rm(this);
                                    e.__dir__ = -1, e.__filtered__ = !0
                                } else e = this.clone(), e.__dir__ *= -1;
                                return e
                            }, rm.prototype.value = function() {
                                var e = this.__wrapped__.value(),
                                    t = this.__dir__,
                                    r = sD(e),
                                    i = t < 0,
                                    n = r ? e.length : 0,
                                    s = function(e, t, r) {
                                        for (var i = -1, n = r.length; ++i < n;) {
                                            var s = r[i],
                                                o = s.size;
                                            switch (s.type) {
                                                case "drop":
                                                    e += o;
                                                    break;
                                                case "dropRight":
                                                    t -= o;
                                                    break;
                                                case "take":
                                                    t = t6(t, e + o);
                                                    break;
                                                case "takeRight":
                                                    e = t5(e, t - o)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: t
                                        }
                                    }(0, n, this.__views__),
                                    o = s.start,
                                    a = s.end,
                                    c = a - o,
                                    h = i ? a : o - 1,
                                    l = this.__iteratees__,
                                    u = l.length,
                                    p = 0,
                                    f = t6(c, this.__takeCount__);
                                if (!r || !i && n == c && f == c) return iR(e, this.__actions__);
                                var d = [];
                                e: for (; c-- && p < f;) {
                                    h += t;
                                    for (var g = -1, y = e[h]; ++g < u;) {
                                        var v = l[g],
                                            m = v.iteratee,
                                            w = v.type,
                                            b = m(y);
                                        if (2 == w) y = b;
                                        else if (!b) {
                                            if (1 == w) continue e;
                                            break e
                                        }
                                    }
                                    d[p++] = y
                                }
                                return d
                            }, rd.prototype.at = ss, rd.prototype.chain = function() {
                                return si(this)
                            }, rd.prototype.commit = function() {
                                return new rv(this.value(), this.__chain__)
                            }, rd.prototype.next = function() {
                                this.__values__ === r && (this.__values__ = s6(this.value()));
                                var e = this.__index__ >= this.__values__.length,
                                    t = e ? r : this.__values__[this.__index__++];
                                return {
                                    done: e,
                                    value: t
                                }
                            }, rd.prototype.plant = function(e) {
                                for (var t, i = this; i instanceof ry;) {
                                    var n = n$(i);
                                    n.__index__ = 0, n.__values__ = r, t ? s.__wrapped__ = n : t = n;
                                    var s = n;
                                    i = i.__wrapped__
                                }
                                return s.__wrapped__ = e, t
                            }, rd.prototype.reverse = function() {
                                var e = this.__wrapped__;
                                if (e instanceof rm) {
                                    var t = e;
                                    return this.__actions__.length && (t = new rm(this)), (t = t.reverse()).__actions__.push({
                                        func: sn,
                                        args: [n1],
                                        thisArg: r
                                    }), new rv(t, this.__chain__)
                                }
                                return this.thru(n1)
                            }, rd.prototype.toJSON = rd.prototype.valueOf = rd.prototype.value = function() {
                                return iR(this.__wrapped__, this.__actions__)
                            }, rd.prototype.first = rd.prototype.head, e3 && (rd.prototype[e3] = function() {
                                return this
                            }), rd
                        }();
                    e3 ? ((e3.exports = tW)._ = tW, e2._ = tW) : e6._ = tW
                }).call(ig)
            }(iy, iy.exports);
            var iv = Object.defineProperty,
                im = Object.defineProperties,
                iw = Object.getOwnPropertyDescriptors,
                ib = Object.getOwnPropertySymbols,
                i_ = Object.prototype.hasOwnProperty,
                iI = Object.prototype.propertyIsEnumerable,
                iE = (e, t, r) => t in e ? iv(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iP = (e, t) => {
                    for (var r in t || (t = {})) i_.call(t, r) && iE(e, r, t[r]);
                    if (ib)
                        for (var r of ib(t)) iI.call(t, r) && iE(e, r, t[r]);
                    return e
                },
                iS = (e, t) => im(e, iw(t));

            function iO(e, t, r) {
                var i;
                let n = (0, o.DQ)(e);
                return (null == (i = t.rpcMap) ? void 0 : i[n.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${r}`
            }

            function ix(e) {
                return e.includes(":") ? e.split(":")[1] : e
            }

            function iR(e) {
                return e.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
            }

            function iA(e) {
                var t, r, i, n;
                let s = {};
                if (!(0, o.L5)(e)) return s;
                for (let [a, c] of Object.entries(e)) {
                    let e = (0, o.gp)(a) ? [a] : c.chains,
                        h = c.methods || [],
                        l = c.events || [],
                        u = c.rpcMap || {},
                        p = (0, o.M)(a);
                    s[p] = iS(iP(iP({}, s[p]), c), {
                        chains: (0, o.eG)(e, null == (t = s[p]) ? void 0 : t.chains),
                        methods: (0, o.eG)(h, null == (r = s[p]) ? void 0 : r.methods),
                        events: (0, o.eG)(l, null == (i = s[p]) ? void 0 : i.events),
                        rpcMap: iP(iP({}, u), null == (n = s[p]) ? void 0 : n.rpcMap)
                    })
                }
                return s
            }

            function iC(e) {
                return e.includes(":") ? e.split(":")[2] : e
            }

            function iN(e) {
                return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : e.includes(":") ? Number(e.split(":")[1]) : Number(e)
            }
            let ij = {},
                iT = e => ij[e],
                iq = (e, t) => {
                    ij[e] = t
                };
            class iD {
                constructor(e) {
                    this.name = "polkadot", this.namespace = e.namespace, this.events = iT("events"), this.client = iT("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(id, `${this.name}:${e}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ix(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || iO(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new eJ(new il(r, iT("disableProviderPing")))
                }
            }
            class iz {
                constructor(e) {
                    this.name = "eip155", this.namespace = e.namespace, this.events = iT("events"), this.client = iT("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(e) {
                    switch (e.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(e);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(id, `${this.name}:${e}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                createHttpProvider(e, t) {
                    let r = t || iO(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new eJ(new il(r, iT("disableProviderPing")))
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = parseInt(ix(t));
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                getHttpProvider() {
                    let e = this.chainId,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                async handleSwitchChain(e) {
                    var t, r;
                    let i = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0",
                        n = parseInt(i = i.startsWith("0x") ? i : `0x${i}`, 16);
                    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
                    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
                        topic: e.topic,
                        request: {
                            method: e.request.method,
                            params: [{
                                chainId: i
                            }]
                        },
                        chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                    }), this.setDefaultChain(`${n}`);
                    else throw Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                    return null
                }
                isChainApproved(e) {
                    return this.namespace.chains.includes(`${this.name}:${e}`)
                }
            }
            class iM {
                constructor(e) {
                    this.name = "solana", this.namespace = e.namespace, this.events = iT("events"), this.client = iT("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(id, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ix(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || iO(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new eJ(new il(r, iT("disableProviderPing")))
                }
            }
            class iL {
                constructor(e) {
                    this.name = "cosmos", this.namespace = e.namespace, this.events = iT("events"), this.client = iT("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(id, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ix(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || iO(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new eJ(new il(r, iT("disableProviderPing")))
                }
            }
            class ik {
                constructor(e) {
                    this.name = "cip34", this.namespace = e.namespace, this.events = iT("events"), this.client = iT("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(id, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        let r = this.getCardanoRPCUrl(t),
                            i = ix(t);
                        e[i] = this.createHttpProvider(i, r)
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                getCardanoRPCUrl(e) {
                    let t = this.namespace.rpcMap;
                    if (t) return t[e]
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || this.getCardanoRPCUrl(e);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new eJ(new il(r, iT("disableProviderPing")))
                }
            }
            class i$ {
                constructor(e) {
                    this.name = "elrond", this.namespace = e.namespace, this.events = iT("events"), this.client = iT("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(id, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ix(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || iO(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new eJ(new il(r, iT("disableProviderPing")))
                }
            }
            class iU {
                constructor(e) {
                    this.name = "multiversx", this.namespace = e.namespace, this.events = iT("events"), this.client = iT("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(id, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ix(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || iO(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new eJ(new il(r, iT("disableProviderPing")))
                }
            }
            class iH {
                constructor(e) {
                    this.name = "near", this.namespace = e.namespace, this.events = iT("events"), this.client = iT("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        let r = t || iO(`${this.name}:${e}`, this.namespace);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(id, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || iO(e, this.namespace);
                    return typeof r > "u" ? void 0 : new eJ(new il(r, iT("disableProviderPing")))
                }
            }
            var iV = Object.defineProperty,
                iB = Object.defineProperties,
                iK = Object.getOwnPropertyDescriptors,
                iF = Object.getOwnPropertySymbols,
                iW = Object.prototype.hasOwnProperty,
                iZ = Object.prototype.propertyIsEnumerable,
                iG = (e, t, r) => t in e ? iV(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iJ = (e, t) => {
                    for (var r in t || (t = {})) iW.call(t, r) && iG(e, r, t[r]);
                    if (iF)
                        for (var r of iF(t)) iZ.call(t, r) && iG(e, r, t[r]);
                    return e
                },
                iQ = (e, t) => iB(e, iK(t));
            class iY {
                constructor(e) {
                    this.events = new(s()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : $()(Y({
                        level: e ? .logger || iu
                    })), this.disableProviderPing = e ? .disableProviderPing || !1
                }
                static async init(e) {
                    let t = new iY(e);
                    return await t.initialize(), t
                }
                async request(e, t) {
                    let [r, i] = this.validateChain(t);
                    if (!this.session) throw Error("Please call connect() before request()");
                    return await this.getProvider(r).request({
                        request: iJ({}, e),
                        chainId: `${r}:${i}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(e, t, r) {
                    let i = new Date().getTime();
                    this.request(e, r).then(e => t(null, eM(i, e))).catch(e => t(e, void 0))
                }
                async enable() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var e;
                    if (!this.session) throw Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (e = this.session) ? void 0 : e.topic,
                        reason: (0, o.D6)("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(e) {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(e) {
                    this.shouldAbortPairingAttempt = !1;
                    let t = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
                        if (t >= this.maxPairingAttempts) throw Error("Max auto pairing attempts reached");
                        let {
                            uri: r,
                            approval: i
                        } = await this.client.connect({
                            pairingTopic: e,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await i().then(e => {
                            this.session = e, this.namespaces || (this.namespaces = function(e) {
                                let t = {};
                                for (let [r, i] of Object.entries(e)) {
                                    let e = i.methods || [],
                                        n = i.events || [],
                                        s = i.accounts || [],
                                        a = (0, o.gp)(r) ? [r] : i.chains ? i.chains : iR(i.accounts);
                                    t[r] = {
                                        chains: a,
                                        methods: e,
                                        events: n,
                                        accounts: s
                                    }
                                }
                                return t
                            }(e.namespaces), this.persist("namespaces", this.namespaces))
                        }).catch(e => {
                            if (e.message !== rJ) throw e;
                            t++
                        })
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(e, t) {
                    try {
                        if (!this.session) return;
                        let [r, i] = this.validateChain(e);
                        this.getProvider(r).setDefaultChain(i, t)
                    } catch (e) {
                        if (!/Please call connect/.test(e.message)) throw e
                    }
                }
                async cleanupPendingPairings(e = {}) {
                    this.logger.info("Cleaning up inactive pairings...");
                    let t = this.client.pairing.getAll();
                    if ((0, o.qt)(t)) {
                        for (let r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info(`Inactive pairings cleared: ${t.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        let e = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await io.init({
                        logger: this.providerOpts.logger || iu,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        storage: this.providerOpts.storage,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (!this.session) throw Error("Session not initialized. Please call connect() before enable()");
                    let e = [...new Set(Object.keys(this.session.namespaces).map(e => (0, o.M)(e)))];
                    iq("client", this.client), iq("events", this.events), iq("disableProviderPing", this.disableProviderPing), e.forEach(e => {
                        if (!this.session) return;
                        let t = function(e, t) {
                                let r = Object.keys(t.namespaces).filter(t => t.includes(e));
                                if (!r.length) return [];
                                let i = [];
                                return r.forEach(e => {
                                    let r = t.namespaces[e].accounts;
                                    i.push(...r)
                                }), i
                            }(e, this.session),
                            r = iR(t),
                            i = iQ(iJ({}, function(e = {}, t = {}) {
                                let r = iA(e),
                                    i = iA(t);
                                return iy.exports.merge(r, i)
                            }(this.namespaces, this.optionalNamespaces)[e]), {
                                accounts: t,
                                chains: r
                            });
                        switch (e) {
                            case "eip155":
                                this.rpcProviders[e] = new iz({
                                    namespace: i
                                });
                                break;
                            case "solana":
                                this.rpcProviders[e] = new iM({
                                    namespace: i
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[e] = new iL({
                                    namespace: i
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[e] = new iD({
                                    namespace: i
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[e] = new ik({
                                    namespace: i
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[e] = new i$({
                                    namespace: i
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[e] = new iU({
                                    namespace: i
                                });
                                break;
                            case "near":
                                this.rpcProviders[e] = new iH({
                                    namespace: i
                                })
                        }
                    })
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw Error("Sign Client is not initialized");
                    this.client.on("session_ping", e => {
                        this.events.emit("session_ping", e)
                    }), this.client.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        if ("accountsChanged" === r.name) {
                            let e = r.data;
                            e && (0, o.qt)(e) && this.events.emit("accountsChanged", e.map(iC))
                        } else if ("chainChanged" === r.name) {
                            let e = t.chainId,
                                r = t.event.data,
                                i = (0, o.M)(e),
                                n = iN(e) !== iN(r) ? `${i}:${iN(r)}` : e;
                            this.onChainChanged(n)
                        } else this.events.emit(r.name, r.data);
                        this.events.emit("session_event", e)
                    }), this.client.on("session_update", ({
                        topic: e,
                        params: t
                    }) => {
                        var r;
                        let {
                            namespaces: i
                        } = t, n = null == (r = this.client) ? void 0 : r.session.get(e);
                        this.session = iQ(iJ({}, n), {
                            namespaces: i
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: e,
                            params: t
                        })
                    }), this.client.on("session_delete", async e => {
                        await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", iQ(iJ({}, (0, o.D6)("USER_DISCONNECTED")), {
                            data: e.topic
                        }))
                    }), this.on(id, e => {
                        this.onChainChanged(e, !0)
                    })
                }
                getProvider(e) {
                    if (!this.rpcProviders[e]) throw Error(`Provider not found: ${e}`);
                    return this.rpcProviders[e]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(e => {
                        var t;
                        this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                    })
                }
                setNamespaces(e) {
                    let {
                        namespaces: t,
                        optionalNamespaces: r,
                        sessionProperties: i
                    } = e;
                    t && Object.keys(t).length && (this.namespaces = t), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = i, this.persist("namespaces", t), this.persist("optionalNamespaces", r)
                }
                validateChain(e) {
                    let [t, r] = e ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, r];
                    if (t && !Object.keys(this.namespaces || {}).map(e => (0, o.M)(e)).includes(t)) throw Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && r) return [t, r];
                    let i = (0, o.M)(Object.keys(this.namespaces)[0]),
                        n = this.rpcProviders[i].getDefaultChain();
                    return [i, n]
                }
                async requestAccounts() {
                    let [e] = this.validateChain();
                    return await this.getProvider(e).requestAccounts()
                }
                onChainChanged(e, t = !1) {
                    var r;
                    if (!this.namespaces) return;
                    let [i, n] = this.validateChain(e);
                    t || this.getProvider(i).setDefaultChain(n), (null != (r = this.namespaces[i]) ? r : this.namespaces[`${i}:${n}`]).defaultChain = n, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", n)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(e, t) {
                    this.client.core.storage.setItem(`${ip}/${e}`, t)
                }
                async getFromStore(e) {
                    return await this.client.core.storage.getItem(`${ip}/${e}`)
                }
            }
            let iX = ["eth_sendTransaction", "personal_sign"],
                i0 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                i1 = ["chainChanged", "accountsChanged"],
                i5 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var i6 = Object.defineProperty,
                i2 = Object.defineProperties,
                i3 = Object.getOwnPropertyDescriptors,
                i4 = Object.getOwnPropertySymbols,
                i9 = Object.prototype.hasOwnProperty,
                i7 = Object.prototype.propertyIsEnumerable,
                i8 = (e, t, r) => t in e ? i6(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ne = (e, t) => {
                    for (var r in t || (t = {})) i9.call(t, r) && i8(e, r, t[r]);
                    if (i4)
                        for (var r of i4(t)) i7.call(t, r) && i8(e, r, t[r]);
                    return e
                },
                nt = (e, t) => i2(e, i3(t));

            function nr(e) {
                return Number(e[0].split(":")[1])
            }

            function ni(e) {
                return `0x${e.toString(16)}`
            }
            class nn {
                constructor() {
                    this.events = new n.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
                static async init(e) {
                    let t = new nn;
                    return await t.initialize(e), t
                }
                async request(e) {
                    return await this.signer.request(e, this.formatChainId(this.chainId))
                }
                sendAsync(e, t) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(e) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(e);
                    let {
                        required: t,
                        optional: r
                    } = function(e) {
                        let {
                            chains: t,
                            optionalChains: r,
                            methods: i,
                            optionalMethods: n,
                            events: s,
                            optionalEvents: a,
                            rpcMap: c
                        } = e;
                        if (!(0, o.qt)(t)) throw Error("Invalid chains");
                        let h = {
                                chains: t,
                                methods: i || iX,
                                events: s || i1,
                                rpcMap: ne({}, t.length ? {
                                    [nr(t)]: c[nr(t)]
                                } : {})
                            },
                            l = s ? .filter(e => !i1.includes(e)),
                            u = i ? .filter(e => !iX.includes(e));
                        if (!r && !a && !n && !(null != l && l.length) && !(null != u && u.length)) return {
                            required: t.length ? h : void 0
                        };
                        let p = {
                            chains: [...new Set(l ? .length && u ? .length || !r ? h.chains.concat(r || []) : r)],
                            methods: [...new Set(h.methods.concat(null != n && n.length ? n : i0))],
                            events: [...new Set(h.events.concat(null != a && a.length ? a : i5))],
                            rpcMap: c
                        };
                        return {
                            required: t.length ? h : void 0,
                            optional: r.length ? p : void 0
                        }
                    }(this.rpc);
                    try {
                        let i = await new Promise(async (i, n) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal(e => {
                                e.open || this.signer.session || (this.signer.abortPairingAttempt(), n(Error("Connection request reset. Please try again.")))
                            })), await this.signer.connect(nt(ne({
                                namespaces: ne({}, t && {
                                    [this.namespace]: t
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: e ? .pairingTopic
                            })).then(e => {
                                i(e)
                            }).catch(e => {
                                n(Error(e.message))
                            })
                        });
                        if (!i) return;
                        let n = (0, o.gu)(i.namespaces, [this.namespace]);
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n), this.setAccounts(n), this.events.emit("connect", {
                            chainId: ni(this.chainId)
                        })
                    } catch (e) {
                        throw this.signer.logger.error(e), e
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
                    }), this.signer.on("chainChanged", e => {
                        let t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", ni(this.chainId)), this.persist()
                    }), this.signer.on("session_update", e => {
                        this.events.emit("session_update", e)
                    }), this.signer.on("session_delete", e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", nt(ne({}, (0, o.D6)("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", e => {
                        var t, r;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    })
                }
                switchEthereumChain(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith(`${this.namespace}:`)
                }
                formatChainId(e) {
                    return `${this.namespace}:${e}`
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    let t = e.filter(e => this.isCompatibleChainId(e)).map(e => this.parseChainId(e));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", ni(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        let t = this.parseChainId(e);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(e) {
                    let [t, r, i] = e.split(":");
                    return {
                        chainId: `${t}:${r}`,
                        address: i
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter(e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, r;
                    let i = null != (t = e ? .chains) ? t : [],
                        n = null != (r = e ? .optionalChains) ? r : [],
                        s = i.concat(n);
                    if (!s.length) throw Error("No chains specified in either `chains` or `optionalChains`");
                    let o = i.length ? e ? .methods || iX : [],
                        a = i.length ? e ? .events || i1 : [],
                        c = e ? .optionalMethods || [],
                        h = e ? .optionalEvents || [],
                        l = e ? .rpcMap || this.buildRpcMap(s, e.projectId),
                        u = e ? .qrModalOptions || void 0;
                    return {
                        chains: i ? .map(e => this.formatChainId(e)),
                        optionalChains: n.map(e => this.formatChainId(e)),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: h,
                        rpcMap: l,
                        showQrModal: !!(null != e && e.showQrModal),
                        qrModalOptions: u,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    let r = {};
                    return e.forEach(e => {
                        r[e] = this.getRpcUrl(e, t)
                    }), r
                }
                async initialize(e) {
                    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? nr(this.rpc.chains) : nr(this.rpc.optionalChains), this.signer = await iY.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: e.disableProviderPing,
                            relayUrl: e.relayUrl,
                            storageOptions: e.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let e;
                        try {
                            let {
                                WalletConnectModal: t
                            } = await r.e(1434).then(r.bind(r, 61434));
                            e = t
                        } catch {
                            throw Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (e) try {
                            this.modal = new e(ne({
                                projectId: this.rpc.projectId
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e), Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    let {
                        chains: t,
                        optionalChains: r,
                        rpcMap: i
                    } = e;
                    t && (0, o.qt)(t) && (this.rpc.chains = t.map(e => this.formatChainId(e)), t.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    })), r && (0, o.qt)(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r ? .map(e => this.formatChainId(e)), r.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    }))
                }
                getRpcUrl(e, t) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    let e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                        t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
                    this.setChainIds(e ? [this.formatChainId(e)] : t ? .accounts), this.setAccounts(t ? .accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(e => this.parseAccount(e))
                }
            }
            let ns = nn
        },
        64008: function(e, t, r) {
            "use strict";
            r.d(t, {
                q: function() {
                    return i
                }
            });
            class i {}
        },
        41382: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                IEvents: function() {
                    return i.q
                }
            });
            var i = r(64008)
        },
        81343: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
            let i = r(58486);
            t.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, t.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        32413: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(33950).__exportStar(r(81343), t)
        },
        98711: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HeartBeat = void 0;
            let i = r(33950),
                n = r(42609),
                s = r(58486),
                o = r(69485),
                a = r(32413);
            class c extends o.IHeartBeat {
                constructor(e) {
                    super(e), this.events = new n.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
                }
                static init(e) {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        let t = new c(e);
                        return yield t.init(), t
                    })
                }
                init() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                initialize() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), s.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            t.HeartBeat = c
        },
        10236: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(33950);
            i.__exportStar(r(98711), t), i.__exportStar(r(69485), t), i.__exportStar(r(32413), t)
        },
        98774: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IHeartBeat = void 0;
            let i = r(41382);
            class n extends i.IEvents {
                constructor(e) {
                    super()
                }
            }
            t.IHeartBeat = n
        },
        69485: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(33950).__exportStar(r(98774), t)
        },
        25726: function() {},
        36140: function(e, t) {
            var r = "undefined" != typeof self ? self : this,
                i = function() {
                    function e() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return e.prototype = r, new e
                }();
            (function(e) {
                var t = {
                    searchParams: "URLSearchParams" in i,
                    iterable: "Symbol" in i && "iterator" in Symbol,
                    blob: "FileReader" in i && "Blob" in i && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in i,
                    arrayBuffer: "ArrayBuffer" in i
                };
                if (t.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    n = ArrayBuffer.isView || function(e) {
                        return e && r.indexOf(Object.prototype.toString.call(e)) > -1
                    };

                function s(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }

                function o(e) {
                    return "string" != typeof e && (e = String(e)), e
                }

                function a(e) {
                    var r = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t.iterable && (r[Symbol.iterator] = function() {
                        return r
                    }), r
                }

                function c(e) {
                    this.map = {}, e instanceof c ? e.forEach(function(e, t) {
                        this.append(t, e)
                    }, this) : Array.isArray(e) ? e.forEach(function(e) {
                        this.append(e[0], e[1])
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                        this.append(t, e[t])
                    }, this)
                }

                function h(e) {
                    if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function l(e) {
                    return new Promise(function(t, r) {
                        e.onload = function() {
                            t(e.result)
                        }, e.onerror = function() {
                            r(e.error)
                        }
                    })
                }

                function u(e) {
                    var t = new FileReader,
                        r = l(t);
                    return t.readAsArrayBuffer(e), r
                }

                function p(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function f() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        if (this._bodyInit = e, e) {
                            if ("string" == typeof e) this._bodyText = e;
                            else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                            else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                            else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                            else {
                                var r;
                                t.arrayBuffer && t.blob && (r = e) && DataView.prototype.isPrototypeOf(r) ? (this._bodyArrayBuffer = p(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : t.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || n(e)) ? this._bodyArrayBuffer = p(e) : this._bodyText = e = Object.prototype.toString.call(e)
                            }
                        } else this._bodyText = "";
                        !this.headers.get("content-type") && ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, t.blob && (this.blob = function() {
                        var e = h(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                        throw Error("could not read FormData body as blob")
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? h(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(u)
                    }), this.text = function() {
                        var e, t, r, i = h(this);
                        if (i) return i;
                        if (this._bodyBlob) return e = this._bodyBlob, r = l(t = new FileReader), t.readAsText(e), r;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                            for (var t = new Uint8Array(e), r = Array(t.length), i = 0; i < t.length; i++) r[i] = String.fromCharCode(t[i]);
                            return r.join("")
                        }(this._bodyArrayBuffer));
                        if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                        throw Error("could not read FormData body as text")
                    }, t.formData && (this.formData = function() {
                        return this.text().then(y)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                c.prototype.append = function(e, t) {
                    e = s(e), t = o(t);
                    var r = this.map[e];
                    this.map[e] = r ? r + ", " + t : t
                }, c.prototype.delete = function(e) {
                    delete this.map[s(e)]
                }, c.prototype.get = function(e) {
                    return e = s(e), this.has(e) ? this.map[e] : null
                }, c.prototype.has = function(e) {
                    return this.map.hasOwnProperty(s(e))
                }, c.prototype.set = function(e, t) {
                    this.map[s(e)] = o(t)
                }, c.prototype.forEach = function(e, t) {
                    for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
                }, c.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push(r)
                    }), a(e)
                }, c.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), a(e)
                }, c.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push([r, t])
                    }), a(e)
                }, t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
                var d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function g(e, t) {
                    var r, i, n = (t = t || {}).body;
                    if (e instanceof g) {
                        if (e.bodyUsed) throw TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new c(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new c(t.headers)), this.method = (i = (r = t.method || this.method || "GET").toUpperCase(), d.indexOf(i) > -1 ? i : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(n)
                }

                function y(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach(function(e) {
                        if (e) {
                            var r = e.split("="),
                                i = r.shift().replace(/\+/g, " "),
                                n = r.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(i), decodeURIComponent(n))
                        }
                    }), t
                }

                function v(e, t) {
                    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new c(t.headers), this.url = t.url || "", this._initBody(e)
                }
                g.prototype.clone = function() {
                    return new g(this, {
                        body: this._bodyInit
                    })
                }, f.call(g.prototype), f.call(v.prototype), v.prototype.clone = function() {
                    return new v(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new c(this.headers),
                        url: this.url
                    })
                }, v.error = function() {
                    var e = new v(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var m = [301, 302, 303, 307, 308];
                v.redirect = function(e, t) {
                    if (-1 === m.indexOf(t)) throw RangeError("Invalid status code");
                    return new v(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }, e.DOMException = i.DOMException;
                try {
                    new e.DOMException
                } catch (t) {
                    e.DOMException = function(e, t) {
                        this.message = e, this.name = t;
                        var r = Error(e);
                        this.stack = r.stack
                    }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                }

                function w(r, i) {
                    return new Promise(function(n, s) {
                        var o = new g(r, i);
                        if (o.signal && o.signal.aborted) return s(new e.DOMException("Aborted", "AbortError"));
                        var a = new XMLHttpRequest;

                        function h() {
                            a.abort()
                        }
                        a.onload = function() {
                            var e, t, r = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: (e = a.getAllResponseHeaders() || "", t = new c, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                    var r = e.split(":"),
                                        i = r.shift().trim();
                                    if (i) {
                                        var n = r.join(":").trim();
                                        t.append(i, n)
                                    }
                                }), t)
                            };
                            r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL"), n(new v("response" in a ? a.response : a.responseText, r))
                        }, a.onerror = function() {
                            s(TypeError("Network request failed"))
                        }, a.ontimeout = function() {
                            s(TypeError("Network request failed"))
                        }, a.onabort = function() {
                            s(new e.DOMException("Aborted", "AbortError"))
                        }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && t.blob && (a.responseType = "blob"), o.headers.forEach(function(e, t) {
                            a.setRequestHeader(t, e)
                        }), o.signal && (o.signal.addEventListener("abort", h), a.onreadystatechange = function() {
                            4 === a.readyState && o.signal.removeEventListener("abort", h)
                        }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                    })
                }
                w.polyfill = !0, i.fetch || (i.fetch = w, i.Headers = c, i.Request = g, i.Response = v), e.Headers = c, e.Request = g, e.Response = v, e.fetch = w, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            })({}), i.fetch.ponyfill = !0, delete i.fetch.polyfill, (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
        },
        54537: function(e, t, r) {
            e = r.nmd(e);
            var i, n, s, o = "__lodash_hash_undefined__",
                a = "[object Arguments]",
                c = "[object Array]",
                h = "[object Boolean]",
                l = "[object Date]",
                u = "[object Error]",
                p = "[object Function]",
                f = "[object Map]",
                d = "[object Number]",
                g = "[object Object]",
                y = "[object Promise]",
                v = "[object RegExp]",
                m = "[object Set]",
                w = "[object String]",
                b = "[object WeakMap]",
                _ = "[object ArrayBuffer]",
                I = "[object DataView]",
                E = /^\[object .+?Constructor\]$/,
                P = /^(?:0|[1-9]\d*)$/,
                S = {};
            S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, S[a] = S[c] = S[_] = S[h] = S[I] = S[l] = S[u] = S[p] = S[f] = S[d] = S[g] = S[v] = S[m] = S[w] = S[b] = !1;
            var O = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                x = "object" == typeof self && self && self.Object === Object && self,
                R = O || x || Function("return this")(),
                A = t && !t.nodeType && t,
                C = A && e && !e.nodeType && e,
                N = C && C.exports === A,
                j = N && O.process,
                T = function() {
                    try {
                        return j && j.binding && j.binding("util")
                    } catch (e) {}
                }(),
                q = T && T.isTypedArray;

            function D(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e, i) {
                    r[++t] = [i, e]
                }), r
            }

            function z(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e) {
                    r[++t] = e
                }), r
            }
            var M = Array.prototype,
                L = Function.prototype,
                k = Object.prototype,
                $ = R["__core-js_shared__"],
                U = L.toString,
                H = k.hasOwnProperty,
                V = (i = /[^.]+$/.exec($ && $.keys && $.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
                B = k.toString,
                K = RegExp("^" + U.call(H).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                F = N ? R.Buffer : void 0,
                W = R.Symbol,
                Z = R.Uint8Array,
                G = k.propertyIsEnumerable,
                J = M.splice,
                Q = W ? W.toStringTag : void 0,
                Y = Object.getOwnPropertySymbols,
                X = F ? F.isBuffer : void 0,
                ee = (n = Object.keys, s = Object, function(e) {
                    return n(s(e))
                }),
                et = eS(R, "DataView"),
                er = eS(R, "Map"),
                ei = eS(R, "Promise"),
                en = eS(R, "Set"),
                es = eS(R, "WeakMap"),
                eo = eS(Object, "create"),
                ea = eR(et),
                ec = eR(er),
                eh = eR(ei),
                el = eR(en),
                eu = eR(es),
                ep = W ? W.prototype : void 0,
                ef = ep ? ep.valueOf : void 0;

            function ed(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function eg(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ey(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ev(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new ey; ++t < r;) this.add(e[t])
            }

            function em(e) {
                var t = this.__data__ = new eg(e);
                this.size = t.size
            }

            function ew(e, t) {
                for (var r = e.length; r--;)
                    if (eA(e[r][0], t)) return r;
                return -1
            }

            function eb(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Q && Q in Object(e) ? function(e) {
                    var t = H.call(e, Q),
                        r = e[Q];
                    try {
                        e[Q] = void 0;
                        var i = !0
                    } catch (e) {}
                    var n = B.call(e);
                    return i && (t ? e[Q] = r : delete e[Q]), n
                }(e) : B.call(e)
            }

            function e_(e) {
                return ez(e) && eb(e) == a
            }

            function eI(e, t, r, i, n, s) {
                var o = 1 & r,
                    a = e.length,
                    c = t.length;
                if (a != c && !(o && c > a)) return !1;
                var h = s.get(e);
                if (h && s.get(t)) return h == t;
                var l = -1,
                    u = !0,
                    p = 2 & r ? new ev : void 0;
                for (s.set(e, t), s.set(t, e); ++l < a;) {
                    var f = e[l],
                        d = t[l];
                    if (i) var g = o ? i(d, f, l, t, e, s) : i(f, d, l, e, t, s);
                    if (void 0 !== g) {
                        if (g) continue;
                        u = !1;
                        break
                    }
                    if (p) {
                        if (! function(e, t) {
                                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                                    if (t(e[r], r, e)) return !0;
                                return !1
                            }(t, function(e, t) {
                                if (!p.has(t) && (f === e || n(f, e, r, i, s))) return p.push(t)
                            })) {
                            u = !1;
                            break
                        }
                    } else if (!(f === d || n(f, d, r, i, s))) {
                        u = !1;
                        break
                    }
                }
                return s.delete(e), s.delete(t), u
            }

            function eE(e) {
                var t;
                return t = function(e) {
                    return null != e && eq(e.length) && !eT(e) ? function(e, t) {
                        var r, i = eN(e),
                            n = !i && eC(e),
                            s = !i && !n && ej(e),
                            o = !i && !n && !s && eM(e),
                            a = i || n || s || o,
                            c = a ? function(e, t) {
                                for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                                return i
                            }(e.length, String) : [],
                            h = c.length;
                        for (var l in e) H.call(e, l) && !(a && ("length" == l || s && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || (r = null == (r = h) ? 9007199254740991 : r) && ("number" == typeof l || P.test(l)) && l > -1 && l % 1 == 0 && l < r)) && c.push(l);
                        return c
                    }(e) : function(e) {
                        if (t = e && e.constructor, e !== ("function" == typeof t && t.prototype || k)) return ee(e);
                        var t, r = [];
                        for (var i in Object(e)) H.call(e, i) && "constructor" != i && r.push(i);
                        return r
                    }(e)
                }(e), eN(e) ? t : function(e, t) {
                    for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                    return e
                }(t, eO(e))
            }

            function eP(e, t) {
                var r, i = e.__data__;
                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
            }

            function eS(e, t) {
                var r = null == e ? void 0 : e[t];
                return !(!eD(r) || V && V in r) && (eT(r) ? K : E).test(eR(r)) ? r : void 0
            }
            ed.prototype.clear = function() {
                this.__data__ = eo ? eo(null) : {}, this.size = 0
            }, ed.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ed.prototype.get = function(e) {
                var t = this.__data__;
                if (eo) {
                    var r = t[e];
                    return r === o ? void 0 : r
                }
                return H.call(t, e) ? t[e] : void 0
            }, ed.prototype.has = function(e) {
                var t = this.__data__;
                return eo ? void 0 !== t[e] : H.call(t, e)
            }, ed.prototype.set = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = eo && void 0 === t ? o : t, this
            }, eg.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, eg.prototype.delete = function(e) {
                var t = this.__data__,
                    r = ew(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : J.call(t, r, 1), --this.size, !0)
            }, eg.prototype.get = function(e) {
                var t = this.__data__,
                    r = ew(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, eg.prototype.has = function(e) {
                return ew(this.__data__, e) > -1
            }, eg.prototype.set = function(e, t) {
                var r = this.__data__,
                    i = ew(r, e);
                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
            }, ey.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new ed,
                    map: new(er || eg),
                    string: new ed
                }
            }, ey.prototype.delete = function(e) {
                var t = eP(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, ey.prototype.get = function(e) {
                return eP(this, e).get(e)
            }, ey.prototype.has = function(e) {
                return eP(this, e).has(e)
            }, ey.prototype.set = function(e, t) {
                var r = eP(this, e),
                    i = r.size;
                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
            }, ev.prototype.add = ev.prototype.push = function(e) {
                return this.__data__.set(e, o), this
            }, ev.prototype.has = function(e) {
                return this.__data__.has(e)
            }, em.prototype.clear = function() {
                this.__data__ = new eg, this.size = 0
            }, em.prototype.delete = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }, em.prototype.get = function(e) {
                return this.__data__.get(e)
            }, em.prototype.has = function(e) {
                return this.__data__.has(e)
            }, em.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof eg) {
                    var i = r.__data__;
                    if (!er || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new ey(i)
                }
                return r.set(e, t), this.size = r.size, this
            };
            var eO = Y ? function(e) {
                    return null == e ? [] : function(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }(Y(e = Object(e)), function(t) {
                        return G.call(e, t)
                    })
                } : function() {
                    return []
                },
                ex = eb;

            function eR(e) {
                if (null != e) {
                    try {
                        return U.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }

            function eA(e, t) {
                return e === t || e != e && t != t
            }(et && ex(new et(new ArrayBuffer(1))) != I || er && ex(new er) != f || ei && ex(ei.resolve()) != y || en && ex(new en) != m || es && ex(new es) != b) && (ex = function(e) {
                var t = eb(e),
                    r = t == g ? e.constructor : void 0,
                    i = r ? eR(r) : "";
                if (i) switch (i) {
                    case ea:
                        return I;
                    case ec:
                        return f;
                    case eh:
                        return y;
                    case el:
                        return m;
                    case eu:
                        return b
                }
                return t
            });
            var eC = e_(function() {
                    return arguments
                }()) ? e_ : function(e) {
                    return ez(e) && H.call(e, "callee") && !G.call(e, "callee")
                },
                eN = Array.isArray,
                ej = X || function() {
                    return !1
                };

            function eT(e) {
                if (!eD(e)) return !1;
                var t = eb(e);
                return t == p || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }

            function eq(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }

            function eD(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function ez(e) {
                return null != e && "object" == typeof e
            }
            var eM = q ? function(e) {
                return q(e)
            } : function(e) {
                return ez(e) && eq(e.length) && !!S[eb(e)]
            };
            e.exports = function(e, t) {
                return function e(t, r, i, n, s) {
                    return t === r || (null != t && null != r && (ez(t) || ez(r)) ? function(e, t, r, i, n, s) {
                        var o = eN(e),
                            p = eN(t),
                            y = o ? c : ex(e),
                            b = p ? c : ex(t);
                        y = y == a ? g : y, b = b == a ? g : b;
                        var E = y == g,
                            P = b == g,
                            S = y == b;
                        if (S && ej(e)) {
                            if (!ej(t)) return !1;
                            o = !0, E = !1
                        }
                        if (S && !E) return s || (s = new em), o || eM(e) ? eI(e, t, r, i, n, s) : function(e, t, r, i, n, s, o) {
                            switch (r) {
                                case I:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                    e = e.buffer, t = t.buffer;
                                case _:
                                    if (e.byteLength != t.byteLength || !s(new Z(e), new Z(t))) break;
                                    return !0;
                                case h:
                                case l:
                                case d:
                                    return eA(+e, +t);
                                case u:
                                    return e.name == t.name && e.message == t.message;
                                case v:
                                case w:
                                    return e == t + "";
                                case f:
                                    var a = D;
                                case m:
                                    var c = 1 & i;
                                    if (a || (a = z), e.size != t.size && !c) break;
                                    var p = o.get(e);
                                    if (p) return p == t;
                                    i |= 2, o.set(e, t);
                                    var g = eI(a(e), a(t), i, n, s, o);
                                    return o.delete(e), g;
                                case "[object Symbol]":
                                    if (ef) return ef.call(e) == ef.call(t)
                            }
                            return !1
                        }(e, t, y, r, i, n, s);
                        if (!(1 & r)) {
                            var O = E && H.call(e, "__wrapped__"),
                                x = P && H.call(t, "__wrapped__");
                            if (O || x) {
                                var R = O ? e.value() : e,
                                    A = x ? t.value() : t;
                                return s || (s = new em), n(R, A, r, i, s)
                            }
                        }
                        return !!S && (s || (s = new em), function(e, t, r, i, n, s) {
                            var o = 1 & r,
                                a = eE(e),
                                c = a.length;
                            if (c != eE(t).length && !o) return !1;
                            for (var h = c; h--;) {
                                var l = a[h];
                                if (!(o ? l in t : H.call(t, l))) return !1
                            }
                            var u = s.get(e);
                            if (u && s.get(t)) return u == t;
                            var p = !0;
                            s.set(e, t), s.set(t, e);
                            for (var f = o; ++h < c;) {
                                var d = e[l = a[h]],
                                    g = t[l];
                                if (i) var y = o ? i(g, d, l, t, e, s) : i(d, g, l, e, t, s);
                                if (!(void 0 === y ? d === g || n(d, g, r, i, s) : y)) {
                                    p = !1;
                                    break
                                }
                                f || (f = "constructor" == l)
                            }
                            if (p && !f) {
                                var v = e.constructor,
                                    m = t.constructor;
                                v != m && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof m && m instanceof m) && (p = !1)
                            }
                            return s.delete(e), s.delete(t), p
                        }(e, t, r, i, n, s))
                    }(t, r, i, n, e, s) : t != t && r != r)
                }(e, t)
            }
        },
        68767: function(e) {
            "use strict";
            let t = self.fetch.bind(self);
            e.exports = t, e.exports.default = e.exports
        },
        17562: function(e) {
            "use strict";

            function t(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            e.exports = function(e, r, i) {
                var n = i && i.stringify || t;
                if ("object" == typeof e && null !== e) {
                    var s = r.length + 1;
                    if (1 === s) return e;
                    var o = Array(s);
                    o[0] = n(e);
                    for (var a = 1; a < s; a++) o[a] = n(r[a]);
                    return o.join(" ")
                }
                if ("string" != typeof e) return e;
                var c = r.length;
                if (0 === c) return e;
                for (var h = "", l = 0, u = -1, p = e && e.length || 0, f = 0; f < p;) {
                    if (37 === e.charCodeAt(f) && f + 1 < p) {
                        switch (u = u > -1 ? u : 0, e.charCodeAt(f + 1)) {
                            case 100:
                            case 102:
                                if (l >= c || null == r[l]) break;
                                u < f && (h += e.slice(u, f)), h += Number(r[l]), u = f + 2, f++;
                                break;
                            case 105:
                                if (l >= c || null == r[l]) break;
                                u < f && (h += e.slice(u, f)), h += Math.floor(Number(r[l])), u = f + 2, f++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (l >= c || void 0 === r[l]) break;
                                u < f && (h += e.slice(u, f));
                                var d = typeof r[l];
                                if ("string" === d) {
                                    h += "'" + r[l] + "'", u = f + 2, f++;
                                    break
                                }
                                if ("function" === d) {
                                    h += r[l].name || "<anonymous>", u = f + 2, f++;
                                    break
                                }
                                h += n(r[l]), u = f + 2, f++;
                                break;
                            case 115:
                                if (l >= c) break;
                                u < f && (h += e.slice(u, f)), h += String(r[l]), u = f + 2, f++;
                                break;
                            case 37:
                                u < f && (h += e.slice(u, f)), h += "%", u = f + 2, f++, l--
                        }++l
                    }++f
                }
                return -1 === u ? e : (u < p && (h += e.slice(u)), h)
            }
        },
        90676: function(e) {
            "use strict";
            e.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        24542: function(e, t, r) {
            "use strict";
            let i = r(17562);
            e.exports = s;
            let n = function() {
                function e(e) {
                    return void 0 !== e && e
                }
                try {
                    if ("undefined" != typeof globalThis) return globalThis;
                    return Object.defineProperty(Object.prototype, "globalThis", {
                        get: function() {
                            return delete Object.prototype.globalThis, this.globalThis = this
                        },
                        configurable: !0
                    }), globalThis
                } catch (t) {
                    return e(self) || e(window) || e(this) || {}
                }
            }().console || {};

            function s(e) {
                var t, r;
                (e = e || {}).browser = e.browser || {};
                let i = e.browser.transmit;
                if (i && "function" != typeof i.send) throw Error("pino: transmit option must have a send function");
                let l = e.browser.write || n;
                e.browser.write && (e.browser.asObject = !0);
                let u = e.serializers || {},
                    g = Array.isArray(t = e.browser.serialize) ? t.filter(function(e) {
                        return "!stdSerializers.err" !== e
                    }) : !0 === t && Object.keys(u),
                    y = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (y = !1), "function" == typeof l && (l.error = l.fatal = l.warn = l.info = l.debug = l.trace = l), !1 === e.enabled && (e.level = "silent");
                let v = e.level || "info",
                    m = Object.create(l);
                m.log || (m.log = p), Object.defineProperty(m, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(m, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(e) {
                        if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                        this._level = e, o(w, m, "error", "log"), o(w, m, "fatal", "error"), o(w, m, "warn", "error"), o(w, m, "info", "log"), o(w, m, "debug", "log"), o(w, m, "trace", "log")
                    }
                });
                let w = {
                    transmit: i,
                    serialize: g,
                    asObject: e.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: "function" == typeof(r = e).timestamp ? r.timestamp : !1 === r.timestamp ? f : d
                };
                return m.levels = s.levels, m.level = v, m.setMaxListeners = m.getMaxListeners = m.emit = m.addListener = m.on = m.prependListener = m.once = m.prependOnceListener = m.removeListener = m.removeAllListeners = m.listeners = m.listenerCount = m.eventNames = m.write = m.flush = p, m.serializers = u, m._serialize = g, m._stdErrSerialize = y, m.child = function(t, r) {
                    if (!t) throw Error("missing bindings for child Pino");
                    r = r || {}, g && t.serializers && (r.serializers = t.serializers);
                    let n = r.serializers;
                    if (g && n) {
                        var s = Object.assign({}, u, n),
                            o = !0 === e.browser.serialize ? Object.keys(s) : g;
                        delete t.serializers, a([t], o, s, this._stdErrSerialize)
                    }

                    function l(e) {
                        this._childLevel = (0 | e._childLevel) + 1, this.error = c(e, t, "error"), this.fatal = c(e, t, "fatal"), this.warn = c(e, t, "warn"), this.info = c(e, t, "info"), this.debug = c(e, t, "debug"), this.trace = c(e, t, "trace"), s && (this.serializers = s, this._serialize = o), i && (this._logEvent = h([].concat(e._logEvent.bindings, t)))
                    }
                    return l.prototype = this, new l(this)
                }, i && (m._logEvent = h()), m
            }

            function o(e, t, r, o) {
                let c = Object.getPrototypeOf(t);
                t[r] = t.levelVal > t.levels.values[r] ? p : c[r] ? c[r] : n[r] || n[o] || p,
                    function(e, t, r) {
                        if (e.transmit || t[r] !== p) {
                            var o;
                            t[r] = (o = t[r], function() {
                                let c = e.timestamp(),
                                    l = Array(arguments.length),
                                    u = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                                for (var p = 0; p < l.length; p++) l[p] = arguments[p];
                                if (e.serialize && !e.asObject && a(l, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? o.call(u, function(e, t, r, n) {
                                        e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                                        let o = r.slice(),
                                            c = o[0],
                                            h = {};
                                        n && (h.time = n), h.level = s.levels.values[t];
                                        let l = (0 | e._childLevel) + 1;
                                        if (l < 1 && (l = 1), null !== c && "object" == typeof c) {
                                            for (; l-- && "object" == typeof o[0];) Object.assign(h, o.shift());
                                            c = o.length ? i(o.shift(), o) : void 0
                                        } else "string" == typeof c && (c = i(o.shift(), o));
                                        return void 0 !== c && (h.msg = c), h
                                    }(this, r, l, c)) : o.apply(u, l), e.transmit) {
                                    let i = e.transmit.level || t.level,
                                        n = s.levels.values[i],
                                        o = s.levels.values[r];
                                    if (o < n) return;
                                    (function(e, t, r) {
                                        let i = t.send,
                                            n = t.ts,
                                            s = t.methodLevel,
                                            o = t.methodValue,
                                            c = t.val,
                                            l = e._logEvent.bindings;
                                        a(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = n, e._logEvent.messages = r.filter(function(e) {
                                            return -1 === l.indexOf(e)
                                        }), e._logEvent.level.label = s, e._logEvent.level.value = o, i(s, e._logEvent, c), e._logEvent = h(l)
                                    })(this, {
                                        ts: c,
                                        methodLevel: r,
                                        methodValue: o,
                                        transmitLevel: i,
                                        transmitValue: s.levels.values[e.transmit.level || t.level],
                                        send: e.transmit.send,
                                        val: t.levelVal
                                    }, l)
                                }
                            })
                        }
                    }(e, t, r)
            }

            function a(e, t, r, i) {
                for (let n in e)
                    if (i && e[n] instanceof Error) e[n] = s.stdSerializers.err(e[n]);
                    else if ("object" == typeof e[n] && !Array.isArray(e[n]))
                    for (let i in e[n]) t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]))
            }

            function c(e, t, r) {
                return function() {
                    let i = Array(1 + arguments.length);
                    i[0] = t;
                    for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
                    return e[r].apply(this, i)
                }
            }

            function h(e) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: e || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function l() {
                return {}
            }

            function u(e) {
                return e
            }

            function p() {}

            function f() {
                return !1
            }

            function d() {
                return Date.now()
            }
            s.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, s.stdSerializers = {
                mapHttpRequest: l,
                mapHttpResponse: l,
                wrapRequestSerializer: u,
                wrapResponseSerializer: u,
                wrapErrorSerializer: u,
                req: l,
                res: l,
                err: function(e) {
                    let t = {
                        type: e.constructor.name,
                        msg: e.message,
                        stack: e.stack
                    };
                    for (let r in e) void 0 === t[r] && (t[r] = e[r]);
                    return t
                }
            }, s.stdTimeFunctions = Object.assign({}, {
                nullTime: f,
                epochTime: d,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);