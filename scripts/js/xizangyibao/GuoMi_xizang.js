var l, e_, n1, sm2;
(function(e) {
        function t(t) {
            for (var i, o, r = t[0], a = t[1], l = 0, s = []; l < r.length; l++)
                o = r[l],
                Object.prototype.hasOwnProperty.call(n, o) && n[o] && s.push(n[o][0]),
                    n[o] = 0;
            for (i in a)
                Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
            A && A(t);
            while (s.length)
                s.shift()()
        }
        var i = {}
            , n = {
            index: 0
        };
        function o(e) {
            return r.p + "assets/js/" + ({
                Home: "Home",
                "chunk-commons": "chunk-commons",
                CommunicationModule: "CommunicationModule",
                DetailModule: "DetailModule",
                HandleModule: "HandleModule",
                InfomationListModule: "InfomationListModule",
                LoginModule: "LoginModule",
                PersonModule: "PersonModule",
                PersonalCenter: "PersonalCenter",
                SearchModule: "SearchModule",
                ServiceSearchModule: "ServiceSearchModule",
                "vendors~personLogin~unitLogin": "vendors~personLogin~unitLogin",
                "personLogin~unitLogin": "personLogin~unitLogin",
                personLogin: "personLogin",
                unitLogin: "unitLogin"
            }[e] || e) + "." + {
                Home: "0685b8e1",
                "chunk-3b08d5fe": "6fab50b8",
                "chunk-commons": "6436ec96",
                CommunicationModule: "cb8f2a2b",
                DetailModule: "02f6fe79",
                HandleModule: "d621f8a3",
                InfomationListModule: "c1b89a54",
                LoginModule: "92e6fc2d",
                PersonModule: "4b83bc14",
                PersonalCenter: "23ba9b42",
                SearchModule: "3b0464ee",
                ServiceSearchModule: "970d63d1",
                "vendors~personLogin~unitLogin": "0898730e",
                "personLogin~unitLogin": "0c3c71c0",
                personLogin: "17bf2fb5",
                unitLogin: "7a5c6968"
            }[e] + ".js"
        }
        function r(t) {
            if (i[t])
                return i[t].exports;
            var n = i[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(n.exports, n, n.exports, r),
                n.l = !0,
                n.exports
        }
        r.e = function(e) {
            var t = []
                , i = n[e];
            if (0 !== i)
                if (i)
                    t.push(i[2]);
                else {
                    var a = new Promise((function(t, o) {
                            i = n[e] = [t, o]
                        }
                    ));
                    t.push(i[2] = a);
                    var l, s = document.createElement("script");
                    s.charset = "utf-8",
                        s.timeout = 120,
                    r.nc && s.setAttribute("nonce", r.nc),
                        s.src = o(e);
                    var A = new Error;
                    l = function(t) {
                        s.onerror = s.onload = null,
                            clearTimeout(c);
                        var i = n[e];
                        if (0 !== i) {
                            if (i) {
                                var o = t && ("load" === t.type ? "missing" : t.type)
                                    , r = t && t.target && t.target.src;
                                A.message = "Loading chunk " + e + " failed.\n(" + o + ": " + r + ")",
                                    A.name = "ChunkLoadError",
                                    A.type = o,
                                    A.request = r,
                                    i[1](A)
                            }
                            n[e] = void 0
                        }
                    }
                    ;
                    var c = setTimeout((function() {
                            l({
                                type: "timeout",
                                target: s
                            })
                        }
                    ), 12e4);
                    s.onerror = s.onload = l,
                        document.head.appendChild(s)
                }
            return Promise.all(t)
        }
            ,
            r.m = e,
            r.c = i,
            r.d = function(e, t, i) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: i
                })
            }
            ,
            r.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            r.t = function(e, t) {
                if (1 & t && (e = r(e)),
                8 & t)
                    return e;
                if (4 & t && "object" === typeof e && e && e.__esModule)
                    return e;
                var i = Object.create(null);
                if (r.r(i),
                    Object.defineProperty(i, "default", {
                        enumerable: !0,
                        value: e
                    }),
                2 & t && "string" != typeof e)
                    for (var n in e)
                        r.d(i, n, function(t) {
                            return e[t]
                        }
                            .bind(null, n));
                return i
            }
            ,
            r.n = function(e) {
                var t = e && e.__esModule ? function() {
                            return e["default"]
                        }
                        : function() {
                            return e
                        }
                ;
                return r.d(t, "a", t),
                    t
            }
            ,
            r.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            r.p = "",
            r.oe = function(e) {
                throw console.error(e),
                    e
            }
        ;
        l = r('6d05')
        e_ = r('b639')
        sm2 = r('bd48')
        n1 = r('1602')
    }
)({
    'f33e': function(e, t, i) {
        (function() {
                var t, i = 0xdeadbeefcafe, n = 15715070 == (16777215 & i);
                function o(e, t, i) {
                    null != e && ("number" == typeof e ? this.fromNumber(e, t, i) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
                }
                function r() {
                    return new o(null)
                }
                function a(e, t, i, n, o, r) {
                    while (--r >= 0) {
                        var a = t * this[e++] + i[n] + o;
                        o = Math.floor(a / 67108864),
                            i[n++] = 67108863 & a
                    }
                    return o
                }
                function l(e, t, i, n, o, r) {
                    var a = 32767 & t
                        , l = t >> 15;
                    while (--r >= 0) {
                        var s = 32767 & this[e]
                            , A = this[e++] >> 15
                            , c = l * s + A * a;
                        s = a * s + ((32767 & c) << 15) + i[n] + (1073741823 & o),
                            o = (s >>> 30) + (c >>> 15) + l * A + (o >>> 30),
                            i[n++] = 1073741823 & s
                    }
                    return o
                }
                function s(e, t, i, n, o, r) {
                    var a = 16383 & t
                        , l = t >> 14;
                    while (--r >= 0) {
                        var s = 16383 & this[e]
                            , A = this[e++] >> 14
                            , c = l * s + A * a;
                        s = a * s + ((16383 & c) << 14) + i[n] + o,
                            o = (s >> 28) + (c >> 14) + l * A,
                            i[n++] = 268435455 & s
                    }
                    return o
                }
                var A = "undefined" !== typeof navigator;
                A && n && "Microsoft Internet Explorer" == navigator.appName ? (o.prototype.am = l,
                    t = 30) : A && n && "Netscape" != navigator.appName ? (o.prototype.am = a,
                    t = 26) : (o.prototype.am = s,
                    t = 28),
                    o.prototype.DB = t,
                    o.prototype.DM = (1 << t) - 1,
                    o.prototype.DV = 1 << t;
                var c = 52;
                o.prototype.FV = Math.pow(2, c),
                    o.prototype.F1 = c - t,
                    o.prototype.F2 = 2 * t - c;
                var d, p, u = "0123456789abcdefghijklmnopqrstuvwxyz", f = new Array;
                for (d = "0".charCodeAt(0),
                         p = 0; p <= 9; ++p)
                    f[d++] = p;
                for (d = "a".charCodeAt(0),
                         p = 10; p < 36; ++p)
                    f[d++] = p;
                for (d = "A".charCodeAt(0),
                         p = 10; p < 36; ++p)
                    f[d++] = p;
                function h(e) {
                    return u.charAt(e)
                }
                function m(e, t) {
                    var i = f[e.charCodeAt(t)];
                    return null == i ? -1 : i
                }
                function g(e) {
                    for (var t = this.t - 1; t >= 0; --t)
                        e[t] = this[t];
                    e.t = this.t,
                        e.s = this.s
                }
                function b(e) {
                    this.t = 1,
                        this.s = e < 0 ? -1 : 0,
                        e > 0 ? this[0] = e : e < -1 ? this[0] = e + this.DV : this.t = 0
                }
                function C(e) {
                    var t = r();
                    return t.fromInt(e),
                        t
                }
                function B(e, t) {
                    var i;
                    if (16 == t)
                        i = 4;
                    else if (8 == t)
                        i = 3;
                    else if (256 == t)
                        i = 8;
                    else if (2 == t)
                        i = 1;
                    else if (32 == t)
                        i = 5;
                    else {
                        if (4 != t)
                            return void this.fromRadix(e, t);
                        i = 2
                    }
                    this.t = 0,
                        this.s = 0;
                    var n = e.length
                        , r = !1
                        , a = 0;
                    while (--n >= 0) {
                        var l = 8 == i ? 255 & e[n] : m(e, n);
                        l < 0 ? "-" == e.charAt(n) && (r = !0) : (r = !1,
                            0 == a ? this[this.t++] = l : a + i > this.DB ? (this[this.t - 1] |= (l & (1 << this.DB - a) - 1) << a,
                                this[this.t++] = l >> this.DB - a) : this[this.t - 1] |= l << a,
                            a += i,
                        a >= this.DB && (a -= this.DB))
                    }
                    8 == i && 0 != (128 & e[0]) && (this.s = -1,
                    a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a)),
                        this.clamp(),
                    r && o.ZERO.subTo(this, this)
                }
                function x() {
                    var e = this.s & this.DM;
                    while (this.t > 0 && this[this.t - 1] == e)
                        --this.t
                }
                function v(e) {
                    if (this.s < 0)
                        return "-" + this.negate().toString(e);
                    var t;
                    if (16 == e)
                        t = 4;
                    else if (8 == e)
                        t = 3;
                    else if (2 == e)
                        t = 1;
                    else if (32 == e)
                        t = 5;
                    else {
                        if (4 != e)
                            return this.toRadix(e);
                        t = 2
                    }
                    var i, n = (1 << t) - 1, o = !1, r = "", a = this.t, l = this.DB - a * this.DB % t;
                    if (a-- > 0) {
                        l < this.DB && (i = this[a] >> l) > 0 && (o = !0,
                            r = h(i));
                        while (a >= 0)
                            l < t ? (i = (this[a] & (1 << l) - 1) << t - l,
                                i |= this[--a] >> (l += this.DB - t)) : (i = this[a] >> (l -= t) & n,
                            l <= 0 && (l += this.DB,
                                --a)),
                            i > 0 && (o = !0),
                            o && (r += h(i))
                    }
                    return o ? r : "0"
                }
                function w() {
                    var e = r();
                    return o.ZERO.subTo(this, e),
                        e
                }
                function k() {
                    return this.s < 0 ? this.negate() : this
                }
                function _(e) {
                    var t = this.s - e.s;
                    if (0 != t)
                        return t;
                    var i = this.t;
                    if (t = i - e.t,
                    0 != t)
                        return this.s < 0 ? -t : t;
                    while (--i >= 0)
                        if (0 != (t = this[i] - e[i]))
                            return t;
                    return 0
                }
                function y(e) {
                    var t, i = 1;
                    return 0 != (t = e >>> 16) && (e = t,
                        i += 16),
                    0 != (t = e >> 8) && (e = t,
                        i += 8),
                    0 != (t = e >> 4) && (e = t,
                        i += 4),
                    0 != (t = e >> 2) && (e = t,
                        i += 2),
                    0 != (t = e >> 1) && (e = t,
                        i += 1),
                        i
                }
                function I() {
                    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + y(this[this.t - 1] ^ this.s & this.DM)
                }
                function E(e, t) {
                    var i;
                    for (i = this.t - 1; i >= 0; --i)
                        t[i + e] = this[i];
                    for (i = e - 1; i >= 0; --i)
                        t[i] = 0;
                    t.t = this.t + e,
                        t.s = this.s
                }
                function D(e, t) {
                    for (var i = e; i < this.t; ++i)
                        t[i - e] = this[i];
                    t.t = Math.max(this.t - e, 0),
                        t.s = this.s
                }
                function S(e, t) {
                    var i, n = e % this.DB, o = this.DB - n, r = (1 << o) - 1, a = Math.floor(e / this.DB), l = this.s << n & this.DM;
                    for (i = this.t - 1; i >= 0; --i)
                        t[i + a + 1] = this[i] >> o | l,
                            l = (this[i] & r) << n;
                    for (i = a - 1; i >= 0; --i)
                        t[i] = 0;
                    t[a] = l,
                        t.t = this.t + a + 1,
                        t.s = this.s,
                        t.clamp()
                }
                function O(e, t) {
                    t.s = this.s;
                    var i = Math.floor(e / this.DB);
                    if (i >= this.t)
                        t.t = 0;
                    else {
                        var n = e % this.DB
                            , o = this.DB - n
                            , r = (1 << n) - 1;
                        t[0] = this[i] >> n;
                        for (var a = i + 1; a < this.t; ++a)
                            t[a - i - 1] |= (this[a] & r) << o,
                                t[a - i] = this[a] >> n;
                        n > 0 && (t[this.t - i - 1] |= (this.s & r) << o),
                            t.t = this.t - i,
                            t.clamp()
                    }
                }
                function z(e, t) {
                    var i = 0
                        , n = 0
                        , o = Math.min(e.t, this.t);
                    while (i < o)
                        n += this[i] - e[i],
                            t[i++] = n & this.DM,
                            n >>= this.DB;
                    if (e.t < this.t) {
                        n -= e.s;
                        while (i < this.t)
                            n += this[i],
                                t[i++] = n & this.DM,
                                n >>= this.DB;
                        n += this.s
                    } else {
                        n += this.s;
                        while (i < e.t)
                            n -= e[i],
                                t[i++] = n & this.DM,
                                n >>= this.DB;
                        n -= e.s
                    }
                    t.s = n < 0 ? -1 : 0,
                        n < -1 ? t[i++] = this.DV + n : n > 0 && (t[i++] = n),
                        t.t = i,
                        t.clamp()
                }
                function F(e, t) {
                    var i = this.abs()
                        , n = e.abs()
                        , r = i.t;
                    t.t = r + n.t;
                    while (--r >= 0)
                        t[r] = 0;
                    for (r = 0; r < n.t; ++r)
                        t[r + i.t] = i.am(0, n[r], t, r, 0, i.t);
                    t.s = 0,
                        t.clamp(),
                    this.s != e.s && o.ZERO.subTo(t, t)
                }
                function T(e) {
                    var t = this.abs()
                        , i = e.t = 2 * t.t;
                    while (--i >= 0)
                        e[i] = 0;
                    for (i = 0; i < t.t - 1; ++i) {
                        var n = t.am(i, t[i], e, 2 * i, 0, 1);
                        (e[i + t.t] += t.am(i + 1, 2 * t[i], e, 2 * i + 1, n, t.t - i - 1)) >= t.DV && (e[i + t.t] -= t.DV,
                            e[i + t.t + 1] = 1)
                    }
                    e.t > 0 && (e[e.t - 1] += t.am(i, t[i], e, 2 * i, 0, 1)),
                        e.s = 0,
                        e.clamp()
                }
                function q(e, t, i) {
                    var n = e.abs();
                    if (!(n.t <= 0)) {
                        var a = this.abs();
                        if (a.t < n.t)
                            return null != t && t.fromInt(0),
                                void (null != i && this.copyTo(i));
                        null == i && (i = r());
                        var l = r()
                            , s = this.s
                            , A = e.s
                            , c = this.DB - y(n[n.t - 1]);
                        c > 0 ? (n.lShiftTo(c, l),
                            a.lShiftTo(c, i)) : (n.copyTo(l),
                            a.copyTo(i));
                        var d = l.t
                            , p = l[d - 1];
                        if (0 != p) {
                            var u = p * (1 << this.F1) + (d > 1 ? l[d - 2] >> this.F2 : 0)
                                , f = this.FV / u
                                , h = (1 << this.F1) / u
                                , m = 1 << this.F2
                                , g = i.t
                                , b = g - d
                                , C = null == t ? r() : t;
                            l.dlShiftTo(b, C),
                            i.compareTo(C) >= 0 && (i[i.t++] = 1,
                                i.subTo(C, i)),
                                o.ONE.dlShiftTo(d, C),
                                C.subTo(l, l);
                            while (l.t < d)
                                l[l.t++] = 0;
                            while (--b >= 0) {
                                var B = i[--g] == p ? this.DM : Math.floor(i[g] * f + (i[g - 1] + m) * h);
                                if ((i[g] += l.am(0, B, i, b, 0, d)) < B) {
                                    l.dlShiftTo(b, C),
                                        i.subTo(C, i);
                                    while (i[g] < --B)
                                        i.subTo(C, i)
                                }
                            }
                            null != t && (i.drShiftTo(d, t),
                            s != A && o.ZERO.subTo(t, t)),
                                i.t = d,
                                i.clamp(),
                            c > 0 && i.rShiftTo(c, i),
                            s < 0 && o.ZERO.subTo(i, i)
                        }
                    }
                }
                function P(e) {
                    var t = r();
                    return this.abs().divRemTo(e, null, t),
                    this.s < 0 && t.compareTo(o.ZERO) > 0 && e.subTo(t, t),
                        t
                }
                function W(e) {
                    this.m = e
                }
                function M(e) {
                    return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
                }
                function U(e) {
                    return e
                }
                function N(e) {
                    e.divRemTo(this.m, null, e)
                }
                function j(e, t, i) {
                    e.multiplyTo(t, i),
                        this.reduce(i)
                }
                function Y(e, t) {
                    e.squareTo(t),
                        this.reduce(t)
                }
                function L() {
                    if (this.t < 1)
                        return 0;
                    var e = this[0];
                    if (0 == (1 & e))
                        return 0;
                    var t = 3 & e;
                    return t = t * (2 - (15 & e) * t) & 15,
                        t = t * (2 - (255 & e) * t) & 255,
                        t = t * (2 - ((65535 & e) * t & 65535)) & 65535,
                        t = t * (2 - e * t % this.DV) % this.DV,
                        t > 0 ? this.DV - t : -t
                }
                function R(e) {
                    this.m = e,
                        this.mp = e.invDigit(),
                        this.mpl = 32767 & this.mp,
                        this.mph = this.mp >> 15,
                        this.um = (1 << e.DB - 15) - 1,
                        this.mt2 = 2 * e.t
                }
                function G(e) {
                    var t = r();
                    return e.abs().dlShiftTo(this.m.t, t),
                        t.divRemTo(this.m, null, t),
                    e.s < 0 && t.compareTo(o.ZERO) > 0 && this.m.subTo(t, t),
                        t
                }
                function H(e) {
                    var t = r();
                    return e.copyTo(t),
                        this.reduce(t),
                        t
                }
                function V(e) {
                    while (e.t <= this.mt2)
                        e[e.t++] = 0;
                    for (var t = 0; t < this.m.t; ++t) {
                        var i = 32767 & e[t]
                            , n = i * this.mpl + ((i * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                        i = t + this.m.t,
                            e[i] += this.m.am(0, n, e, t, 0, this.m.t);
                        while (e[i] >= e.DV)
                            e[i] -= e.DV,
                                e[++i]++
                    }
                    e.clamp(),
                        e.drShiftTo(this.m.t, e),
                    e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
                }
                function Q(e, t) {
                    e.squareTo(t),
                        this.reduce(t)
                }
                function J(e, t, i) {
                    e.multiplyTo(t, i),
                        this.reduce(i)
                }
                function X() {
                    return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                }
                function $(e, t) {
                    if (e > 4294967295 || e < 1)
                        return o.ONE;
                    var i = r()
                        , n = r()
                        , a = t.convert(this)
                        , l = y(e) - 1;
                    a.copyTo(i);
                    while (--l >= 0)
                        if (t.sqrTo(i, n),
                        (e & 1 << l) > 0)
                            t.mulTo(n, a, i);
                        else {
                            var s = i;
                            i = n,
                                n = s
                        }
                    return t.revert(i)
                }
                function K(e, t) {
                    var i;
                    return i = e < 256 || t.isEven() ? new W(t) : new R(t),
                        this.exp(e, i)
                }
                function Z() {
                    var e = r();
                    return this.copyTo(e),
                        e
                }
                function ee() {
                    if (this.s < 0) {
                        if (1 == this.t)
                            return this[0] - this.DV;
                        if (0 == this.t)
                            return -1
                    } else {
                        if (1 == this.t)
                            return this[0];
                        if (0 == this.t)
                            return 0
                    }
                    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
                }
                function te() {
                    return 0 == this.t ? this.s : this[0] << 24 >> 24
                }
                function ie() {
                    return 0 == this.t ? this.s : this[0] << 16 >> 16
                }
                function ne(e) {
                    return Math.floor(Math.LN2 * this.DB / Math.log(e))
                }
                function oe() {
                    return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
                }
                function re(e) {
                    if (null == e && (e = 10),
                    0 == this.signum() || e < 2 || e > 36)
                        return "0";
                    var t = this.chunkSize(e)
                        , i = Math.pow(e, t)
                        , n = C(i)
                        , o = r()
                        , a = r()
                        , l = "";
                    this.divRemTo(n, o, a);
                    while (o.signum() > 0)
                        l = (i + a.intValue()).toString(e).substr(1) + l,
                            o.divRemTo(n, o, a);
                    return a.intValue().toString(e) + l
                }
                function ae(e, t) {
                    this.fromInt(0),
                    null == t && (t = 10);
                    for (var i = this.chunkSize(t), n = Math.pow(t, i), r = !1, a = 0, l = 0, s = 0; s < e.length; ++s) {
                        var A = m(e, s);
                        A < 0 ? "-" == e.charAt(s) && 0 == this.signum() && (r = !0) : (l = t * l + A,
                        ++a >= i && (this.dMultiply(n),
                            this.dAddOffset(l, 0),
                            a = 0,
                            l = 0))
                    }
                    a > 0 && (this.dMultiply(Math.pow(t, a)),
                        this.dAddOffset(l, 0)),
                    r && o.ZERO.subTo(this, this)
                }
                function le(e, t, i) {
                    if ("number" == typeof t)
                        if (e < 2)
                            this.fromInt(1);
                        else {
                            this.fromNumber(e, i),
                            this.testBit(e - 1) || this.bitwiseTo(o.ONE.shiftLeft(e - 1), he, this),
                            this.isEven() && this.dAddOffset(1, 0);
                            while (!this.isProbablePrime(t))
                                this.dAddOffset(2, 0),
                                this.bitLength() > e && this.subTo(o.ONE.shiftLeft(e - 1), this)
                        }
                    else {
                        var n = new Array
                            , r = 7 & e;
                        n.length = 1 + (e >> 3),
                            t.nextBytes(n),
                            r > 0 ? n[0] &= (1 << r) - 1 : n[0] = 0,
                            this.fromString(n, 256)
                    }
                }
                function se() {
                    var e = this.t
                        , t = new Array;
                    t[0] = this.s;
                    var i, n = this.DB - e * this.DB % 8, o = 0;
                    if (e-- > 0) {
                        n < this.DB && (i = this[e] >> n) != (this.s & this.DM) >> n && (t[o++] = i | this.s << this.DB - n);
                        while (e >= 0)
                            n < 8 ? (i = (this[e] & (1 << n) - 1) << 8 - n,
                                i |= this[--e] >> (n += this.DB - 8)) : (i = this[e] >> (n -= 8) & 255,
                            n <= 0 && (n += this.DB,
                                --e)),
                            0 != (128 & i) && (i |= -256),
                            0 == o && (128 & this.s) != (128 & i) && ++o,
                            (o > 0 || i != this.s) && (t[o++] = i)
                    }
                    return t
                }
                function Ae(e) {
                    return 0 == this.compareTo(e)
                }
                function ce(e) {
                    return this.compareTo(e) < 0 ? this : e
                }
                function de(e) {
                    return this.compareTo(e) > 0 ? this : e
                }
                function pe(e, t, i) {
                    var n, o, r = Math.min(e.t, this.t);
                    for (n = 0; n < r; ++n)
                        i[n] = t(this[n], e[n]);
                    if (e.t < this.t) {
                        for (o = e.s & this.DM,
                                 n = r; n < this.t; ++n)
                            i[n] = t(this[n], o);
                        i.t = this.t
                    } else {
                        for (o = this.s & this.DM,
                                 n = r; n < e.t; ++n)
                            i[n] = t(o, e[n]);
                        i.t = e.t
                    }
                    i.s = t(this.s, e.s),
                        i.clamp()
                }
                function ue(e, t) {
                    return e & t
                }
                function fe(e) {
                    var t = r();
                    return this.bitwiseTo(e, ue, t),
                        t
                }
                function he(e, t) {
                    return e | t
                }
                function me(e) {
                    var t = r();
                    return this.bitwiseTo(e, he, t),
                        t
                }
                function ge(e, t) {
                    return e ^ t
                }
                function be(e) {
                    var t = r();
                    return this.bitwiseTo(e, ge, t),
                        t
                }
                function Ce(e, t) {
                    return e & ~t
                }
                function Be(e) {
                    var t = r();
                    return this.bitwiseTo(e, Ce, t),
                        t
                }
                function xe() {
                    for (var e = r(), t = 0; t < this.t; ++t)
                        e[t] = this.DM & ~this[t];
                    return e.t = this.t,
                        e.s = ~this.s,
                        e
                }
                function ve(e) {
                    var t = r();
                    return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t),
                        t
                }
                function we(e) {
                    var t = r();
                    return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t),
                        t
                }
                function ke(e) {
                    if (0 == e)
                        return -1;
                    var t = 0;
                    return 0 == (65535 & e) && (e >>= 16,
                        t += 16),
                    0 == (255 & e) && (e >>= 8,
                        t += 8),
                    0 == (15 & e) && (e >>= 4,
                        t += 4),
                    0 == (3 & e) && (e >>= 2,
                        t += 2),
                    0 == (1 & e) && ++t,
                        t
                }
                function _e() {
                    for (var e = 0; e < this.t; ++e)
                        if (0 != this[e])
                            return e * this.DB + ke(this[e]);
                    return this.s < 0 ? this.t * this.DB : -1
                }
                function ye(e) {
                    var t = 0;
                    while (0 != e)
                        e &= e - 1,
                            ++t;
                    return t
                }
                function Ie() {
                    for (var e = 0, t = this.s & this.DM, i = 0; i < this.t; ++i)
                        e += ye(this[i] ^ t);
                    return e
                }
                function Ee(e) {
                    var t = Math.floor(e / this.DB);
                    return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB)
                }
                function De(e, t) {
                    var i = o.ONE.shiftLeft(e);
                    return this.bitwiseTo(i, t, i),
                        i
                }
                function Se(e) {
                    return this.changeBit(e, he)
                }
                function Oe(e) {
                    return this.changeBit(e, Ce)
                }
                function ze(e) {
                    return this.changeBit(e, ge)
                }
                function Fe(e, t) {
                    var i = 0
                        , n = 0
                        , o = Math.min(e.t, this.t);
                    while (i < o)
                        n += this[i] + e[i],
                            t[i++] = n & this.DM,
                            n >>= this.DB;
                    if (e.t < this.t) {
                        n += e.s;
                        while (i < this.t)
                            n += this[i],
                                t[i++] = n & this.DM,
                                n >>= this.DB;
                        n += this.s
                    } else {
                        n += this.s;
                        while (i < e.t)
                            n += e[i],
                                t[i++] = n & this.DM,
                                n >>= this.DB;
                        n += e.s
                    }
                    t.s = n < 0 ? -1 : 0,
                        n > 0 ? t[i++] = n : n < -1 && (t[i++] = this.DV + n),
                        t.t = i,
                        t.clamp()
                }
                function Te(e) {
                    var t = r();
                    return this.addTo(e, t),
                        t
                }
                function qe(e) {
                    var t = r();
                    return this.subTo(e, t),
                        t
                }
                function Pe(e) {
                    var t = r();
                    return this.multiplyTo(e, t),
                        t
                }
                function We() {
                    var e = r();
                    return this.squareTo(e),
                        e
                }
                function Me(e) {
                    var t = r();
                    return this.divRemTo(e, t, null),
                        t
                }
                function Ue(e) {
                    var t = r();
                    return this.divRemTo(e, null, t),
                        t
                }
                function Ne(e) {
                    var t = r()
                        , i = r();
                    return this.divRemTo(e, t, i),
                        new Array(t,i)
                }
                function je(e) {
                    this[this.t] = this.am(0, e - 1, this, 0, 0, this.t),
                        ++this.t,
                        this.clamp()
                }
                function Ye(e, t) {
                    if (0 != e) {
                        while (this.t <= t)
                            this[this.t++] = 0;
                        this[t] += e;
                        while (this[t] >= this.DV)
                            this[t] -= this.DV,
                            ++t >= this.t && (this[this.t++] = 0),
                                ++this[t]
                    }
                }
                function Le() {}
                function Re(e) {
                    return e
                }
                function Ge(e, t, i) {
                    e.multiplyTo(t, i)
                }
                function He(e, t) {
                    e.squareTo(t)
                }
                function Ve(e) {
                    return this.exp(e, new Le)
                }
                function Qe(e, t, i) {
                    var n, o = Math.min(this.t + e.t, t);
                    i.s = 0,
                        i.t = o;
                    while (o > 0)
                        i[--o] = 0;
                    for (n = i.t - this.t; o < n; ++o)
                        i[o + this.t] = this.am(0, e[o], i, o, 0, this.t);
                    for (n = Math.min(e.t, t); o < n; ++o)
                        this.am(0, e[o], i, o, 0, t - o);
                    i.clamp()
                }
                function Je(e, t, i) {
                    --t;
                    var n = i.t = this.t + e.t - t;
                    i.s = 0;
                    while (--n >= 0)
                        i[n] = 0;
                    for (n = Math.max(t - this.t, 0); n < e.t; ++n)
                        i[this.t + n - t] = this.am(t - n, e[n], i, 0, 0, this.t + n - t);
                    i.clamp(),
                        i.drShiftTo(1, i)
                }
                function Xe(e) {
                    this.r2 = r(),
                        this.q3 = r(),
                        o.ONE.dlShiftTo(2 * e.t, this.r2),
                        this.mu = this.r2.divide(e),
                        this.m = e
                }
                function $e(e) {
                    if (e.s < 0 || e.t > 2 * this.m.t)
                        return e.mod(this.m);
                    if (e.compareTo(this.m) < 0)
                        return e;
                    var t = r();
                    return e.copyTo(t),
                        this.reduce(t),
                        t
                }
                function Ke(e) {
                    return e
                }
                function Ze(e) {
                    e.drShiftTo(this.m.t - 1, this.r2),
                    e.t > this.m.t + 1 && (e.t = this.m.t + 1,
                        e.clamp()),
                        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
                    while (e.compareTo(this.r2) < 0)
                        e.dAddOffset(1, this.m.t + 1);
                    e.subTo(this.r2, e);
                    while (e.compareTo(this.m) >= 0)
                        e.subTo(this.m, e)
                }
                function et(e, t) {
                    e.squareTo(t),
                        this.reduce(t)
                }
                function tt(e, t, i) {
                    e.multiplyTo(t, i),
                        this.reduce(i)
                }
                function it(e, t) {
                    var i, n, o = e.bitLength(), a = C(1);
                    if (o <= 0)
                        return a;
                    i = o < 18 ? 1 : o < 48 ? 3 : o < 144 ? 4 : o < 768 ? 5 : 6,
                        n = o < 8 ? new W(t) : t.isEven() ? new Xe(t) : new R(t);
                    var l = new Array
                        , s = 3
                        , A = i - 1
                        , c = (1 << i) - 1;
                    if (l[1] = n.convert(this),
                    i > 1) {
                        var d = r();
                        n.sqrTo(l[1], d);
                        while (s <= c)
                            l[s] = r(),
                                n.mulTo(d, l[s - 2], l[s]),
                                s += 2
                    }
                    var p, u, f = e.t - 1, h = !0, m = r();
                    o = y(e[f]) - 1;
                    while (f >= 0) {
                        o >= A ? p = e[f] >> o - A & c : (p = (e[f] & (1 << o + 1) - 1) << A - o,
                        f > 0 && (p |= e[f - 1] >> this.DB + o - A)),
                            s = i;
                        while (0 == (1 & p))
                            p >>= 1,
                                --s;
                        if ((o -= s) < 0 && (o += this.DB,
                            --f),
                            h)
                            l[p].copyTo(a),
                                h = !1;
                        else {
                            while (s > 1)
                                n.sqrTo(a, m),
                                    n.sqrTo(m, a),
                                    s -= 2;
                            s > 0 ? n.sqrTo(a, m) : (u = a,
                                a = m,
                                m = u),
                                n.mulTo(m, l[p], a)
                        }
                        while (f >= 0 && 0 == (e[f] & 1 << o))
                            n.sqrTo(a, m),
                                u = a,
                                a = m,
                                m = u,
                            --o < 0 && (o = this.DB - 1,
                                --f)
                    }
                    return n.revert(a)
                }
                function nt(e) {
                    var t = this.s < 0 ? this.negate() : this.clone()
                        , i = e.s < 0 ? e.negate() : e.clone();
                    if (t.compareTo(i) < 0) {
                        var n = t;
                        t = i,
                            i = n
                    }
                    var o = t.getLowestSetBit()
                        , r = i.getLowestSetBit();
                    if (r < 0)
                        return t;
                    o < r && (r = o),
                    r > 0 && (t.rShiftTo(r, t),
                        i.rShiftTo(r, i));
                    while (t.signum() > 0)
                        (o = t.getLowestSetBit()) > 0 && t.rShiftTo(o, t),
                        (o = i.getLowestSetBit()) > 0 && i.rShiftTo(o, i),
                            t.compareTo(i) >= 0 ? (t.subTo(i, t),
                                t.rShiftTo(1, t)) : (i.subTo(t, i),
                                i.rShiftTo(1, i));
                    return r > 0 && i.lShiftTo(r, i),
                        i
                }
                function ot(e) {
                    if (e <= 0)
                        return 0;
                    var t = this.DV % e
                        , i = this.s < 0 ? e - 1 : 0;
                    if (this.t > 0)
                        if (0 == t)
                            i = this[0] % e;
                        else
                            for (var n = this.t - 1; n >= 0; --n)
                                i = (t * i + this[n]) % e;
                    return i
                }
                function rt(e) {
                    var t = e.isEven();
                    if (this.isEven() && t || 0 == e.signum())
                        return o.ZERO;
                    var i = e.clone()
                        , n = this.clone()
                        , r = C(1)
                        , a = C(0)
                        , l = C(0)
                        , s = C(1);
                    while (0 != i.signum()) {
                        while (i.isEven())
                            i.rShiftTo(1, i),
                                t ? (r.isEven() && a.isEven() || (r.addTo(this, r),
                                    a.subTo(e, a)),
                                    r.rShiftTo(1, r)) : a.isEven() || a.subTo(e, a),
                                a.rShiftTo(1, a);
                        while (n.isEven())
                            n.rShiftTo(1, n),
                                t ? (l.isEven() && s.isEven() || (l.addTo(this, l),
                                    s.subTo(e, s)),
                                    l.rShiftTo(1, l)) : s.isEven() || s.subTo(e, s),
                                s.rShiftTo(1, s);
                        i.compareTo(n) >= 0 ? (i.subTo(n, i),
                        t && r.subTo(l, r),
                            a.subTo(s, a)) : (n.subTo(i, n),
                        t && l.subTo(r, l),
                            s.subTo(a, s))
                    }
                    return 0 != n.compareTo(o.ONE) ? o.ZERO : s.compareTo(e) >= 0 ? s.subtract(e) : s.signum() < 0 ? (s.addTo(e, s),
                        s.signum() < 0 ? s.add(e) : s) : s
                }
                W.prototype.convert = M,
                    W.prototype.revert = U,
                    W.prototype.reduce = N,
                    W.prototype.mulTo = j,
                    W.prototype.sqrTo = Y,
                    R.prototype.convert = G,
                    R.prototype.revert = H,
                    R.prototype.reduce = V,
                    R.prototype.mulTo = J,
                    R.prototype.sqrTo = Q,
                    o.prototype.copyTo = g,
                    o.prototype.fromInt = b,
                    o.prototype.fromString = B,
                    o.prototype.clamp = x,
                    o.prototype.dlShiftTo = E,
                    o.prototype.drShiftTo = D,
                    o.prototype.lShiftTo = S,
                    o.prototype.rShiftTo = O,
                    o.prototype.subTo = z,
                    o.prototype.multiplyTo = F,
                    o.prototype.squareTo = T,
                    o.prototype.divRemTo = q,
                    o.prototype.invDigit = L,
                    o.prototype.isEven = X,
                    o.prototype.exp = $,
                    o.prototype.toString = v,
                    o.prototype.negate = w,
                    o.prototype.abs = k,
                    o.prototype.compareTo = _,
                    o.prototype.bitLength = I,
                    o.prototype.mod = P,
                    o.prototype.modPowInt = K,
                    o.ZERO = C(0),
                    o.ONE = C(1),
                    Le.prototype.convert = Re,
                    Le.prototype.revert = Re,
                    Le.prototype.mulTo = Ge,
                    Le.prototype.sqrTo = He,
                    Xe.prototype.convert = $e,
                    Xe.prototype.revert = Ke,
                    Xe.prototype.reduce = Ze,
                    Xe.prototype.mulTo = tt,
                    Xe.prototype.sqrTo = et;
                var at, lt, st, At = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], ct = (1 << 26) / At[At.length - 1];
                function dt(e) {
                    var t, i = this.abs();
                    if (1 == i.t && i[0] <= At[At.length - 1]) {
                        for (t = 0; t < At.length; ++t)
                            if (i[0] == At[t])
                                return !0;
                        return !1
                    }
                    if (i.isEven())
                        return !1;
                    t = 1;
                    while (t < At.length) {
                        var n = At[t]
                            , o = t + 1;
                        while (o < At.length && n < ct)
                            n *= At[o++];
                        n = i.modInt(n);
                        while (t < o)
                            if (n % At[t++] == 0)
                                return !1
                    }
                    return i.millerRabin(e)
                }
                function pt(e) {
                    var t = this.subtract(o.ONE)
                        , i = t.getLowestSetBit();
                    if (i <= 0)
                        return !1;
                    var n = t.shiftRight(i);
                    e = e + 1 >> 1,
                    e > At.length && (e = At.length);
                    for (var a = r(), l = 0; l < e; ++l) {
                        a.fromInt(At[Math.floor(Math.random() * At.length)]);
                        var s = a.modPow(n, this);
                        if (0 != s.compareTo(o.ONE) && 0 != s.compareTo(t)) {
                            var A = 1;
                            while (A++ < i && 0 != s.compareTo(t))
                                if (s = s.modPowInt(2, this),
                                0 == s.compareTo(o.ONE))
                                    return !1;
                            if (0 != s.compareTo(t))
                                return !1
                        }
                    }
                    return !0
                }
                function ut(e) {
                    lt[st++] ^= 255 & e,
                        lt[st++] ^= e >> 8 & 255,
                        lt[st++] ^= e >> 16 & 255,
                        lt[st++] ^= e >> 24 & 255,
                    st >= _t && (st -= _t)
                }
                function ft() {
                    ut((new Date).getTime())
                }
                if (o.prototype.chunkSize = ne,
                    o.prototype.toRadix = re,
                    o.prototype.fromRadix = ae,
                    o.prototype.fromNumber = le,
                    o.prototype.bitwiseTo = pe,
                    o.prototype.changeBit = De,
                    o.prototype.addTo = Fe,
                    o.prototype.dMultiply = je,
                    o.prototype.dAddOffset = Ye,
                    o.prototype.multiplyLowerTo = Qe,
                    o.prototype.multiplyUpperTo = Je,
                    o.prototype.modInt = ot,
                    o.prototype.millerRabin = pt,
                    o.prototype.clone = Z,
                    o.prototype.intValue = ee,
                    o.prototype.byteValue = te,
                    o.prototype.shortValue = ie,
                    o.prototype.signum = oe,
                    o.prototype.toByteArray = se,
                    o.prototype.equals = Ae,
                    o.prototype.min = ce,
                    o.prototype.max = de,
                    o.prototype.and = fe,
                    o.prototype.or = me,
                    o.prototype.xor = be,
                    o.prototype.andNot = Be,
                    o.prototype.not = xe,
                    o.prototype.shiftLeft = ve,
                    o.prototype.shiftRight = we,
                    o.prototype.getLowestSetBit = _e,
                    o.prototype.bitCount = Ie,
                    o.prototype.testBit = Ee,
                    o.prototype.setBit = Se,
                    o.prototype.clearBit = Oe,
                    o.prototype.flipBit = ze,
                    o.prototype.add = Te,
                    o.prototype.subtract = qe,
                    o.prototype.multiply = Pe,
                    o.prototype.divide = Me,
                    o.prototype.remainder = Ue,
                    o.prototype.divideAndRemainder = Ne,
                    o.prototype.modPow = it,
                    o.prototype.modInverse = rt,
                    o.prototype.pow = Ve,
                    o.prototype.gcd = nt,
                    o.prototype.isProbablePrime = dt,
                    o.prototype.square = We,
                    o.prototype.Barrett = Xe,
                null == lt) {
                    var ht;
                    if (lt = new Array,
                        st = 0,
                    "undefined" !== typeof window && window.crypto)
                        if (window.crypto.getRandomValues) {
                            var mt = new Uint8Array(32);
                            for (window.crypto.getRandomValues(mt),
                                     ht = 0; ht < 32; ++ht)
                                lt[st++] = mt[ht]
                        } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
                            var gt = window.crypto.random(32);
                            for (ht = 0; ht < gt.length; ++ht)
                                lt[st++] = 255 & gt.charCodeAt(ht)
                        }
                    while (st < _t)
                        ht = Math.floor(65536 * Math.random()),
                            lt[st++] = ht >>> 8,
                            lt[st++] = 255 & ht;
                    st = 0,
                        ft()
                }
                function bt() {
                    if (null == at) {
                        for (ft(),
                                 at = kt(),
                                 at.init(lt),
                                 st = 0; st < lt.length; ++st)
                            lt[st] = 0;
                        st = 0
                    }
                    return at.next()
                }
                function Ct(e) {
                    var t;
                    for (t = 0; t < e.length; ++t)
                        e[t] = bt()
                }
                function Bt() {}
                function xt() {
                    this.i = 0,
                        this.j = 0,
                        this.S = new Array
                }
                function vt(e) {
                    var t, i, n;
                    for (t = 0; t < 256; ++t)
                        this.S[t] = t;
                    for (i = 0,
                             t = 0; t < 256; ++t)
                        i = i + this.S[t] + e[t % e.length] & 255,
                            n = this.S[t],
                            this.S[t] = this.S[i],
                            this.S[i] = n;
                    this.i = 0,
                        this.j = 0
                }
                function wt() {
                    var e;
                    return this.i = this.i + 1 & 255,
                        this.j = this.j + this.S[this.i] & 255,
                        e = this.S[this.i],
                        this.S[this.i] = this.S[this.j],
                        this.S[this.j] = e,
                        this.S[e + this.S[this.i] & 255]
                }
                function kt() {
                    return new xt
                }
                Bt.prototype.nextBytes = Ct,
                    xt.prototype.init = vt,
                    xt.prototype.next = wt;
                var _t = 256;
                o.SecureRandom = Bt,
                    o.BigInteger = o,
                    e.exports = o
            }
        ).call(this)
    },
    'bac3': function(e, t, i) {
        "use strict";
        i.r(t),
            i.d(t, "SM3Digest", (function() {
                    return c
                }
            ));
        // i("ac6a"),
        //     i("456d");
        var n = i("d4ec")
            , o = i("bee2")
            // , r = (i("6b54"),
            // i("c5f6"),
            // i("f33e"))
            , a = i("f33e").BigInteger
            , l = i("43e3")
            , s = function(e, t, i, n, o) {
                for (var r = 0; r < o; r++)
                    i[n + r] = e[t + r]
            }
            , A = {
                minValue: -2147483648,
                maxValue: 2147483647,
                parse: function(e) {
                    if (e < this.minValue) {
                        for (var t = Number(-e), i = t.toString(2), n = i.substr(i.length - 31, 31), o = "", r = 0; r < n.length; r++) {
                            var a = n.substr(r, 1);
                            o += "0" === a ? "1" : "0"
                        }
                        var l = parseInt(o, 2);
                        return l + 1
                    }
                    if (e > this.maxValue) {
                        for (var s = Number(e), A = s.toString(2), c = A.substr(A.length - 31, 31), d = "", p = 0; p < c.length; p++) {
                            var u = c.substr(p, 1);
                            d += "0" === u ? "1" : "0"
                        }
                        var f = parseInt(d, 2);
                        return -(f + 1)
                    }
                    return e
                },
                parseByte: function(e) {
                    if (e < 0) {
                        for (var t = Number(-e), i = t.toString(2), n = i.substr(i.length - 8, 8), o = "", r = 0; r < n.length; r++) {
                            var a = n.substr(r, 1);
                            o += "0" === a ? "1" : "0"
                        }
                        var l = parseInt(o, 2);
                        return (l + 1) % 256
                    }
                    if (e > 255) {
                        var s = Number(e)
                            , A = s.toString(2);
                        return parseInt(A.substr(A.length - 8, 8), 2)
                    }
                    return e
                }
            }
            , c = function() {
                function e() {
                    Object(n["a"])(this, e),
                        this.xBuf = [],
                        this.xBufOff = 0,
                        this.byteCount = 0,
                        this.DIGEST_LENGTH = 32,
                        this.v0 = [1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214],
                        this.v0 = [1937774191, 1226093241, 388252375, -628488704, -1452330820, 372324522, -477237683, -1325724082],
                        this.v = new Array(8),
                        this.v_ = new Array(8),
                        this.X0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        this.X = new Array(68),
                        this.xOff = 0,
                        this.T_00_15 = 2043430169,
                        this.T_16_63 = 2055708042,
                        arguments.length > 0 ? this.initDigest(arguments.length <= 0 ? void 0 : arguments[0]) : this.init()
                }
                return Object(o["a"])(e, [{
                    key: "init",
                    value: function() {
                        this.xBuf = new Array(4),
                            this.reset()
                    }
                }, {
                    key: "initDigest",
                    value: function(e) {
                        this.xBuf = [].concat(e.xBuf),
                            this.xBufOff = e.xBufOff,
                            this.byteCount = e.byteCount,
                            s(e.X, 0, this.X, 0, e.X.length),
                            this.xOff = e.xOff,
                            s(e.v, 0, this.v, 0, e.v.length)
                    }
                }, {
                    key: "getDigestSize",
                    value: function() {
                        return this.DIGEST_LENGTH
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.byteCount = 0,
                            this.xBufOff = 0;
                        for (var e = Object.keys(this.xBuf), t = 0, i = e.length; t < i; t++)
                            this.xBuf[e[t]] = null;
                        s(this.v0, 0, this.v, 0, this.v0.length),
                            this.xOff = 0,
                            s(this.X0, 0, this.X, 0, this.X0.length)
                    }
                }, {
                    key: "processBlock",
                    value: function() {
                        var e, t = this.X, i = new Array(64);
                        for (e = 16; e < 68; e++)
                            t[e] = this.p1(t[e - 16] ^ t[e - 9] ^ this.rotate(t[e - 3], 15)) ^ this.rotate(t[e - 13], 7) ^ t[e - 6];
                        for (e = 0; e < 64; e++)
                            i[e] = t[e] ^ t[e + 4];
                        var n, o, r, a, l, c = this.v, d = this.v_;
                        for (s(c, 0, d, 0, this.v0.length),
                                 e = 0; e < 16; e++)
                            l = this.rotate(d[0], 12),
                                n = A.parse(A.parse(l + d[4]) + this.rotate(this.T_00_15, e)),
                                n = this.rotate(n, 7),
                                o = n ^ l,
                                r = A.parse(A.parse(this.ff_00_15(d[0], d[1], d[2]) + d[3]) + o) + i[e],
                                a = A.parse(A.parse(this.gg_00_15(d[4], d[5], d[6]) + d[7]) + n) + t[e],
                                d[3] = d[2],
                                d[2] = this.rotate(d[1], 9),
                                d[1] = d[0],
                                d[0] = r,
                                d[7] = d[6],
                                d[6] = this.rotate(d[5], 19),
                                d[5] = d[4],
                                d[4] = this.p0(a);
                        for (e = 16; e < 64; e++)
                            l = this.rotate(d[0], 12),
                                n = A.parse(A.parse(l + d[4]) + this.rotate(this.T_16_63, e)),
                                n = this.rotate(n, 7),
                                o = n ^ l,
                                r = A.parse(A.parse(this.ff_16_63(d[0], d[1], d[2]) + d[3]) + o) + i[e],
                                a = A.parse(A.parse(this.gg_16_63(d[4], d[5], d[6]) + d[7]) + n) + t[e],
                                d[3] = d[2],
                                d[2] = this.rotate(d[1], 9),
                                d[1] = d[0],
                                d[0] = r,
                                d[7] = d[6],
                                d[6] = this.rotate(d[5], 19),
                                d[5] = d[4],
                                d[4] = this.p0(a);
                        for (e = 0; e < 8; e++)
                            c[e] ^= A.parse(d[e]);
                        this.xOff = 0,
                            s(this.X0, 0, this.X, 0, this.X0.length)
                    }
                }, {
                    key: "processWord",
                    value: function(e, t) {
                        var i = e[t] << 24;
                        i |= (255 & e[++t]) << 16,
                            i |= (255 & e[++t]) << 8,
                            i |= 255 & e[++t],
                            this.X[this.xOff] = i,
                        16 === ++this.xOff && this.processBlock()
                    }
                }, {
                    key: "processLength",
                    value: function(e) {
                        this.xOff > 14 && this.processBlock(),
                            this.X[14] = this.urShiftLong(e, 32),
                            this.X[15] = 4294967295 & e
                    }
                }, {
                    key: "intToBigEndian",
                    value: function(e, t, i) {
                        t[i] = 255 & A.parseByte(this.urShift(e, 24)),
                            t[++i] = 255 & A.parseByte(this.urShift(e, 16)),
                            t[++i] = 255 & A.parseByte(this.urShift(e, 8)),
                            t[++i] = 255 & A.parseByte(e)
                    }
                }, {
                    key: "doFinal",
                    value: function(e, t) {
                        this.finish();
                        for (var i = 0; i < 8; i++)
                            this.intToBigEndian(this.v[i], e, t + 4 * i);
                        return this.reset(),
                            this.DIGEST_LENGTH
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        this.xBuf[this.xBufOff++] = e,
                        this.xBufOff === this.xBuf.length && (this.processWord(this.xBuf, 0),
                            this.xBufOff = 0),
                            this.byteCount++
                    }
                }, {
                    key: "blockUpdate",
                    value: function(e, t, i) {
                        while (0 !== this.xBufOff && i > 0)
                            this.update(e[t]),
                                t++,
                                i--;
                        while (i > this.xBuf.length)
                            this.processWord(e, t),
                                t += this.xBuf.length,
                                i -= this.xBuf.length,
                                this.byteCount += this.xBuf.length;
                        while (i > 0)
                            this.update(e[t]),
                                t++,
                                i--
                    }
                }, {
                    key: "finish",
                    value: function() {
                        var e = this.byteCount << 3;
                        this.update(128);
                        while (0 !== this.xBufOff)
                            this.update(0);
                        this.processLength(e),
                            this.processBlock()
                    }
                }, {
                    key: "rotate",
                    value: function(e, t) {
                        return e << t | this.urShift(e, 32 - t)
                    }
                }, {
                    key: "p0",
                    value: function(e) {
                        return e ^ this.rotate(e, 9) ^ this.rotate(e, 17)
                    }
                }, {
                    key: "p1",
                    value: function(e) {
                        return e ^ this.rotate(e, 15) ^ this.rotate(e, 23)
                    }
                }, {
                    key: "ff_00_15",
                    value: function(e, t, i) {
                        return e ^ t ^ i
                    }
                }, {
                    key: "ff_16_63",
                    value: function(e, t, i) {
                        return e & t | e & i | t & i
                    }
                }, {
                    key: "gg_00_15",
                    value: function(e, t, i) {
                        return e ^ t ^ i
                    }
                }, {
                    key: "gg_16_63",
                    value: function(e, t, i) {
                        return e & t | ~e & i
                    }
                }, {
                    key: "urShift",
                    value: function(e, t) {
                        return (e > A.maxValue || e < A.minValue) && (e = A.parse(e)),
                        e >>> t
                    }
                }, {
                    key: "urShiftLong",
                    value: function(e, t) {
                        var i, n = new a;
                        if (n.fromInt(e),
                        n.signum() >= 0)
                            i = n.shiftRight(t).intValue();
                        else {
                            var o = new a;
                            o.fromInt(2);
                            var r = ~t
                                , l = "";
                            if (r < 0) {
                                for (var s = 64 + r, A = 0; A < s; A++)
                                    l += "0";
                                var c = new a;
                                c.fromInt(e >> t);
                                var d = new a("10" + l,2);
                                l = d.toRadix(10);
                                var p = d.add(c);
                                i = p.toRadix(10)
                            } else
                                l = o.shiftLeft(~t).intValue(),
                                    i = (e >> t) + l
                        }
                        return i
                    }
                }, {
                    key: "getZ",
                    value: function(e, t) {
                        var i = l.parseUtf8StringToHex("1234567812345678")
                            , n = 4 * i.length;
                        this.update(n >> 8 & 255),
                            this.update(255 & n);
                        var o = l.hexToArray(i);
                        this.blockUpdate(o, 0, o.length);
                        var r = l.hexToArray(e.curve.a.toBigInteger().toRadix(16))
                            , a = l.hexToArray(e.curve.b.toBigInteger().toRadix(16))
                            , s = l.hexToArray(e.getX().toBigInteger().toRadix(16))
                            , A = l.hexToArray(e.getY().toBigInteger().toRadix(16))
                            , c = l.hexToArray(t.substr(0, 64))
                            , d = l.hexToArray(t.substr(64, 64));
                        this.blockUpdate(r, 0, r.length),
                            this.blockUpdate(a, 0, a.length),
                            this.blockUpdate(s, 0, s.length),
                            this.blockUpdate(A, 0, A.length),
                            this.blockUpdate(c, 0, c.length),
                            this.blockUpdate(d, 0, d.length);
                        var p = new Array(this.getDigestSize());
                        return this.doFinal(p, 0),
                            p
                    }
                }]),
                    e
            }()
    },
    "43e3": function(e, t, i) {
        "use strict";
        i.r(t),
            i.d(t, "getGlobalCurve", (function() {
                    return C
                }
            )),
            i.d(t, "generateEcparam", (function() {
                    return B
                }
            )),
            i.d(t, "generateKeyPairHex", (function() {
                    return x
                }
            )),
            i.d(t, "parseUtf8StringToHex", (function() {
                    return v
                }
            )),
            i.d(t, "parseArrayBufferToHex", (function() {
                    return w
                }
            )),
            i.d(t, "leftPad", (function() {
                    return k
                }
            )),
            i.d(t, "arrayToHex", (function() {
                    return _
                }
            )),
            i.d(t, "arrayToUtf8", (function() {
                    return y
                }
            )),
            i.d(t, "hexToArray", (function() {
                    return I
                }
            ));
        // i("34ef"),
        //     i("6b54");
        var n = i("d4ec")
            , o = i("bee2")
            , r = i("f33e")
            , a = r.BigInteger
            , l = new a("3")
            , s = function() {
            function e(t, i) {
                Object(n["a"])(this, e),
                    this.x = i,
                    this.q = t
            }
            return Object(o["a"])(e, [{
                key: "equals",
                value: function(e) {
                    return e === this || this.q.equals(e.q) && this.x.equals(e.x)
                }
            }, {
                key: "toBigInteger",
                value: function() {
                    return this.x
                }
            }, {
                key: "negate",
                value: function() {
                    return new e(this.q,this.x.negate().mod(this.q))
                }
            }, {
                key: "add",
                value: function(t) {
                    return new e(this.q,this.x.add(t.toBigInteger()).mod(this.q))
                }
            }, {
                key: "subtract",
                value: function(t) {
                    return new e(this.q,this.x.subtract(t.toBigInteger()).mod(this.q))
                }
            }, {
                key: "multiply",
                value: function(t) {
                    return new e(this.q,this.x.multiply(t.toBigInteger()).mod(this.q))
                }
            }, {
                key: "divide",
                value: function(t) {
                    return new e(this.q,this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))
                }
            }, {
                key: "square",
                value: function() {
                    return new e(this.q,this.x.square().mod(this.q))
                }
            }]),
                e
        }()
            , A = function() {
            function e(t, i, o, r) {
                Object(n["a"])(this, e),
                    this.curve = t,
                    this.x = i,
                    this.y = o,
                    this.z = null == r ? a.ONE : r,
                    this.zinv = null
            }
            return Object(o["a"])(e, [{
                key: "getX",
                value: function() {
                    return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                        this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
                }
            }, {
                key: "getY",
                value: function() {
                    return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
                        this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
                }
            }, {
                key: "equals",
                value: function(e) {
                    if (e === this)
                        return !0;
                    if (this.isInfinity())
                        return e.isInfinity();
                    if (e.isInfinity())
                        return this.isInfinity();
                    var t = e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q);
                    if (!t.equals(a.ZERO))
                        return !1;
                    var i = e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q);
                    return i.equals(a.ZERO)
                }
            }, {
                key: "isInfinity",
                value: function() {
                    return null === this.x && null === this.y || this.z.equals(a.ZERO) && !this.y.toBigInteger().equals(a.ZERO)
                }
            }, {
                key: "negate",
                value: function() {
                    return new e(this.curve,this.x,this.y.negate(),this.z)
                }
            }, {
                key: "add",
                value: function(t) {
                    if (this.isInfinity())
                        return t;
                    if (t.isInfinity())
                        return this;
                    var i = this.x.toBigInteger()
                        , n = this.y.toBigInteger()
                        , o = this.z
                        , r = t.x.toBigInteger()
                        , l = t.y.toBigInteger()
                        , s = t.z
                        , A = this.curve.q
                        , c = i.multiply(s).mod(A)
                        , d = r.multiply(o).mod(A)
                        , p = c.subtract(d)
                        , u = n.multiply(s).mod(A)
                        , f = l.multiply(o).mod(A)
                        , h = u.subtract(f);
                    if (a.ZERO.equals(p))
                        return a.ZERO.equals(h) ? this.twice() : this.curve.infinity;
                    var m = c.add(d)
                        , g = o.multiply(s).mod(A)
                        , b = p.square().mod(A)
                        , C = p.multiply(b).mod(A)
                        , B = g.multiply(h.square()).subtract(m.multiply(b)).mod(A)
                        , x = p.multiply(B).mod(A)
                        , v = h.multiply(b.multiply(c).subtract(B)).subtract(u.multiply(C)).mod(A)
                        , w = C.multiply(g).mod(A);
                    return new e(this.curve,this.curve.fromBigInteger(x),this.curve.fromBigInteger(v),w)
                }
            }, {
                key: "twice",
                value: function() {
                    if (this.isInfinity())
                        return this;
                    if (!this.y.toBigInteger().signum())
                        return this.curve.infinity;
                    var t = this.x.toBigInteger()
                        , i = this.y.toBigInteger()
                        , n = this.z
                        , o = this.curve.q
                        , r = this.curve.a.toBigInteger()
                        , a = t.square().multiply(l).add(r.multiply(n.square())).mod(o)
                        , s = i.shiftLeft(1).multiply(n).mod(o)
                        , A = i.square().mod(o)
                        , c = A.multiply(t).multiply(n).mod(o)
                        , d = s.square().mod(o)
                        , p = a.square().subtract(c.shiftLeft(3)).mod(o)
                        , u = s.multiply(p).mod(o)
                        , f = a.multiply(c.shiftLeft(2).subtract(p)).subtract(d.shiftLeft(1).multiply(A)).mod(o)
                        , h = s.multiply(d).mod(o);
                    return new e(this.curve,this.curve.fromBigInteger(u),this.curve.fromBigInteger(f),h)
                }
            }, {
                key: "multiply",
                value: function(e) {
                    if (this.isInfinity())
                        return this;
                    if (!e.signum())
                        return this.curve.infinity;
                    for (var t = e.multiply(l), i = this.negate(), n = this, o = t.bitLength() - 2; o > 0; o--) {
                        n = n.twice();
                        var r = t.testBit(o)
                            , a = e.testBit(o);
                        r !== a && (n = n.add(r ? this : i))
                    }
                    return n
                }
            }]),
                e
        }()
            , c = function() {
            function e(t, i, o) {
                Object(n["a"])(this, e),
                    this.q = t,
                    this.a = this.fromBigInteger(i),
                    this.b = this.fromBigInteger(o),
                    this.infinity = new A(this,null,null)
            }
            return Object(o["a"])(e, [{
                key: "equals",
                value: function(e) {
                    return e === this || this.q.equals(e.q) && this.a.equals(e.a) && this.b.equals(e.b)
                }
            }, {
                key: "fromBigInteger",
                value: function(e) {
                    return new s(this.q,e)
                }
            }, {
                key: "decodePointHex",
                value: function(e) {
                    switch (parseInt(e.substr(0, 2), 16)) {
                        case 0:
                            return this.infinity;
                        case 2:
                        case 3:
                            return null;
                        case 4:
                        case 6:
                        case 7:
                            var t = (e.length - 2) / 2
                                , i = e.substr(2, t)
                                , n = e.substr(t + 2, t);
                            return new A(this,this.fromBigInteger(new a(i,16)),this.fromBigInteger(new a(n,16)));
                        default:
                            return null
                    }
                }
            }]),
                e
        }()
            , d = i("f33e")
            , p = d.BigInteger
            , u = d.SecureRandom
            , f = new u
            , h = B()
            , m = h.curve
            , g = h.G
            , b = h.n;
        function C() {
            return m
        }
        function B() {
            var e = new p("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF",16)
                , t = new p("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC",16)
                , i = new p("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93",16)
                , n = new c(e,t,i)
                , o = "32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7"
                , r = "BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0"
                , a = n.decodePointHex("04" + o + r)
                , l = new p("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123",16);
            return {
                curve: n,
                G: a,
                n: l
            }
        }
        function x() {
            var e = new p(b.bitLength(),f).mod(b.subtract(p.ONE)).add(p.ONE)
                , t = k(e.toString(16), 64)
                , i = g.multiply(e)
                , n = k(i.getX().toBigInteger().toString(16), 64)
                , o = k(i.getY().toBigInteger().toString(16), 64)
                , r = "04" + n + o;
            return {
                privateKey: t,
                publicKey: r
            }
        }
        function v(e) {
            e = unescape(encodeURIComponent(e));
            for (var t = e.length, i = [], n = 0; n < t; n++)
                i[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
            for (var o = [], r = 0; r < t; r++) {
                var a = i[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                o.push((a >>> 4).toString(16)),
                    o.push((15 & a).toString(16))
            }
            return o.join("")
        }
        function w(e) {
            return Array.prototype.map.call(new Uint8Array(e), (function(e) {
                    return ("00" + e.toString(16)).slice(-2)
                }
            )).join("")
        }
        function k(e, t) {
            return e.length >= t ? e : new Array(t - e.length + 1).join("0") + e
        }
        function _(e) {
            for (var t = [], i = 0, n = 0; n < 2 * e.length; n += 2)
                t[n >>> 3] |= parseInt(e[i], 10) << 24 - n % 8 * 4,
                    i++;
            for (var o = [], r = 0; r < e.length; r++) {
                var a = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                o.push((a >>> 4).toString(16)),
                    o.push((15 & a).toString(16))
            }
            return o.join("")
        }
        function y(e) {
            for (var t = [], i = 0, n = 0; n < 2 * e.length; n += 2)
                t[n >>> 3] |= parseInt(e[i], 10) << 24 - n % 8 * 4,
                    i++;
            try {
                for (var o = [], r = 0; r < e.length; r++) {
                    var a = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                    o.push(String.fromCharCode(a))
                }
                return decodeURIComponent(escape(o.join("")))
            } catch (l) {
                throw new Error("Malformed UTF-8 data")
            }
        }
        function I(e) {
            var t = []
                , i = e.length;
            i % 2 !== 0 && (e = k(e, i + 1)),
                i = e.length;
            for (var n = 0; n < i; n += 2)
                t.push(parseInt(e.substr(n, 2), 16));
            return t
        }
        t["default"] = {
            getGlobalCurve: C,
            generateEcparam: B,
            generateKeyPairHex: x,
            parseUtf8StringToHex: v,
            parseArrayBufferToHex: w,
            leftPad: k,
            arrayToHex: _,
            arrayToUtf8: y,
            hexToArray: I
        }
    },
    'd4ec': function(e, t, i) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        i.d(t, "a", (function() {
                return n
            }
        ))
    },
    'bee2': function(e, t, i) {
        "use strict";
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
            }
        }
        function o(e, t, i) {
            return t && n(e.prototype, t),
            i && n(e, i),
                e
        }
        i.d(t, "a", (function() {
                return o
            }
        ))
    },
    '5235': function(e, t, i) {
        "use strict";
        i.r(t),
            i.d(t, "SM2Cipher", (function() {
                    return c
                }
            ));
        var n = i("d4ec")
            , o = i("bee2")
            , r = i("f33e")
            , a = r.BigInteger
            , l = i("bac3")
            , s = l.SM3Digest
            , A = i("43e3")
            , c = function() {
            function e() {
                Object(n["a"])(this, e),
                    this.ct = 1,
                    this.p2 = null,
                    this.sm3keybase = null,
                    this.sm3c3 = null,
                    this.key = new Array(32),
                    this.keyOff = 0
            }
            return Object(o["a"])(e, [{
                key: "reset",
                value: function() {
                    this.sm3keybase = new s,
                        this.sm3c3 = new s;
                    var e = A.hexToArray(this.p2.getX().toBigInteger().toRadix(16))
                        , t = A.hexToArray(this.p2.getY().toBigInteger().toRadix(16));
                    this.sm3keybase.blockUpdate(e, 0, e.length),
                        this.sm3c3.blockUpdate(e, 0, e.length),
                        this.sm3keybase.blockUpdate(t, 0, t.length),
                        this.ct = 1,
                        this.nextKey()
                }
            }, {
                key: "nextKey",
                value: function() {
                    var e = new s(this.sm3keybase);
                    e.update(this.ct >> 24 & 255),
                        e.update(this.ct >> 16 & 255),
                        e.update(this.ct >> 8 & 255),
                        e.update(255 & this.ct),
                        e.doFinal(this.key, 0),
                        this.keyOff = 0,
                        this.ct++
                }
            }, {
                key: "initEncipher",
                value: function(e) {
                    var t = A.generateKeyPairHex()
                        , i = new a(t.privateKey,16)
                        , n = t.publicKey;
                    return this.p2 = e.multiply(i),
                        this.reset(),
                    n.length > 128 && (n = n.substr(n.length - 128)),
                        n
                }
            }, {
                key: "encryptBlock",
                value: function(e) {
                    this.sm3c3.blockUpdate(e, 0, e.length);
                    for (var t = 0; t < e.length; t++)
                        this.keyOff === this.key.length && this.nextKey(),
                            e[t] ^= 255 & this.key[this.keyOff++]
                }
            }, {
                key: "initDecipher",
                value: function(e, t) {
                    this.p2 = t.multiply(e),
                        this.reset()
                }
            }, {
                key: "decryptBlock",
                value: function(e) {
                    for (var t = 0; t < e.length; t++)
                        this.keyOff === this.key.length && this.nextKey(),
                            e[t] ^= 255 & this.key[this.keyOff++];
                    this.sm3c3.blockUpdate(e, 0, e.length)
                }
            }, {
                key: "doFinal",
                value: function(e) {
                    var t = A.hexToArray(this.p2.getY().toBigInteger().toRadix(16));
                    this.sm3c3.blockUpdate(t, 0, t.length),
                        this.sm3c3.doFinal(e, 0),
                        this.reset()
                }
            }, {
                key: "createPoint",
                value: function(e, t) {
                    var i = "04" + e + t
                        , n = A.getGlobalCurve().decodePointHex(i);
                    return n
                }
            }]),
                e
        }()
    },
    "53ca": function(e, t, i) {
        "use strict";
        function n(e) {
            return n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                n(e)
        }
        i.d(t, "a", (function() {
                return n
            }
        ))
    },
    "9e55": function(e, t, i) {
        "use strict";
        i.r(t);
        // i("2397");
        function n(e, t) {
            return n = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                n(e, t)
        }
        function o(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && n(e, t)
        }
        var r = i("53ca");
        function a(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function l(e, t) {
            return !t || "object" !== Object(r["a"])(t) && "function" !== typeof t ? a(e) : t
        }
        function s(e) {
            return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                s(e)
        }
        var A = i("d4ec")
            , c = i("bee2");
        // i("a481"),
        //     i("4917"),
        //     i("6b54");
        function d(e) {
            var t = p();
            return function() {
                var i, n = s(e);
                if (t) {
                    var o = s(this).constructor;
                    i = Reflect.construct(n, arguments, o)
                } else
                    i = n.apply(this, arguments);
                return l(this, i)
            }
        }
        function p() {
            if ("undefined" === typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" === typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                    !0
            } catch (e) {
                return !1
            }
        }
        // var u = i("f33e")
        var f = i("f33e").BigInteger;
        function h(e) {
            var t = e.toString(16);
            if ("-" !== t.substr(0, 1))
                t.length % 2 === 1 ? t = "0" + t : t.match(/^[0-7]/) || (t = "00" + t);
            else {
                var i = t.substr(1)
                    , n = i.length;
                n % 2 === 1 ? n += 1 : t.match(/^[0-7]/) || (n += 2);
                for (var o = "", r = 0; r < n; r++)
                    o += "f";
                var a = new f(o,16)
                    , l = a.xor(e).add(f.ONE);
                t = l.toString(16).replace(/^-/, "")
            }
            return t
        }
        var m = function() {
            function e() {
                Object(A["a"])(this, e),
                    this.isModified = !0,
                    this.hTLV = null,
                    this.hT = "00",
                    this.hL = "00",
                    this.hV = ""
            }
            return Object(c["a"])(e, [{
                key: "getLengthHexFromValue",
                value: function() {
                    var e = this.hV.length / 2
                        , t = e.toString(16);
                    if (t.length % 2 === 1 && (t = "0" + t),
                    e < 128)
                        return t;
                    var i = t.length / 2
                        , n = 128 + i;
                    return n.toString(16) + t
                }
            }, {
                key: "getEncodedHex",
                value: function() {
                    return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                        this.hL = this.getLengthHexFromValue(),
                        this.hTLV = this.hT + this.hL + this.hV,
                        this.isModified = !1),
                        this.hTLV
                }
            }, {
                key: "getFreshValueHex",
                value: function() {
                    return ""
                }
            }]),
                e
        }()
            , g = function(e) {
            o(i, e);
            var t = d(i);
            function i(e) {
                var n;
                return Object(A["a"])(this, i),
                    n = t.call(this),
                    n.hT = "02",
                e && e.bigint && (n.hTLV = null,
                    n.isModified = !0,
                    n.hV = h(e.bigint)),
                    n
            }
            return Object(c["a"])(i, [{
                key: "getFreshValueHex",
                value: function() {
                    return this.hV
                }
            }]),
                i
        }(m)
            , b = function(e) {
            o(i, e);
            var t = d(i);
            function i(e) {
                var n;
                return Object(A["a"])(this, i),
                    n = t.call(this),
                    n.hT = "30",
                    n.asn1Array = [],
                e && e.array && (n.asn1Array = e.array),
                    n
            }
            return Object(c["a"])(i, [{
                key: "getFreshValueHex",
                value: function() {
                    for (var e = "", t = 0; t < this.asn1Array.length; t++) {
                        var i = this.asn1Array[t];
                        e += i.getEncodedHex()
                    }
                    return this.hV = e,
                        this.hV
                }
            }]),
                i
        }(m);
        function C(e, t) {
            if ("8" !== e.substring(t + 2, t + 3))
                return 1;
            var i = parseInt(e.substring(t + 3, t + 4), 10);
            return 0 === i ? -1 : i > 0 && i < 10 ? i + 1 : -2
        }
        function B(e, t) {
            var i = C(e, t);
            return i < 1 ? "" : e.substring(t + 2, t + 2 + 2 * i)
        }
        function x(e, t) {
            var i, n = B(e, t);
            return "" === n ? -1 : (i = parseInt(n.substring(0, 1), 10) < 8 ? new f(n,16) : new f(n.substring(2),16),
                i.intValue())
        }
        function v(e, t) {
            var i = C(e, t);
            return i < 0 ? i : t + 2 * (i + 1)
        }
        function w(e, t) {
            var i = v(e, t)
                , n = x(e, t);
            return e.substring(i, i + 2 * n)
        }
        function k(e, t) {
            var i = v(e, t)
                , n = x(e, t);
            return i + 2 * n
        }
        function _(e, t) {
            var i = []
                , n = v(e, t);
            i.push(n);
            for (var o = x(e, t), r = n, a = 0; ; ) {
                var l = k(e, r);
                if (null == l || l - n >= 2 * o)
                    break;
                if (a >= 200)
                    break;
                i.push(l),
                    r = l,
                    a++
            }
            return i
        }
        t["default"] = {
            encodeDer: function(e, t) {
                var i = new g({
                    bigint: e
                })
                    , n = new g({
                    bigint: t
                })
                    , o = new b({
                    array: [i, n]
                });
                return o.getEncodedHex()
            },
            decodeDer: function(e) {
                var t = _(e, 0)
                    , i = t[0]
                    , n = t[1]
                    , o = w(e, i)
                    , r = w(e, n)
                    , a = new f(o,16)
                    , l = new f(r,16);
                return {
                    r: a,
                    s: l
                }
            }
        }
    },
    'bd48': function(e, t, i) {
        "use strict";
        i.r(t),
            i.d(t, "doEncrypt", (function() {
                    return b
                }
            )),
            i.d(t, "doDecrypt", (function() {
                    return C
                }
            )),
            i.d(t, "doSignature", (function() {
                    return B
                }
            )),
            i.d(t, "doVerifySignature", (function() {
                    return x
                }
            )),
            i.d(t, "doSm3Hash", (function() {
                    return v
                }
            )),
            i.d(t, "getPublicKeyFromPrivateKey", (function() {
                    return w
                }
            )),
            i.d(t, "getPoint", (function() {
                    return k
                }
            ));
        // i("6b54");
        var o = i("f33e").BigInteger
            , r = i("9e55")
            , a = r.encodeDer
            , l = r.decodeDer
            , A = i("bac3").SM3Digest
            , d = i("5235").SM2Cipher
            , p = i("43e3")
            , u = p.generateEcparam()
            , f = u.G
            , h = u.curve
            , m = u.n
            , g = 0;
        function b(e, t) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                , n = new d;
            e = p.hexToArray(p.parseUtf8StringToHex(e)),
            t.length > 128 && (t = t.substr(t.length - 128));
            var o = t.substr(0, 64)
                , r = t.substr(64);
            t = n.createPoint(o, r);
            var a = n.initEncipher(t);
            n.encryptBlock(e);
            var l = p.arrayToHex(e)
                , s = new Array(32);
            return n.doFinal(s),
                s = p.arrayToHex(s),
                i === g ? a + l + s : a + s + l
        }
        function C(e, t) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                , n = new d;
            t = new o(t,16);
            var r = e.substr(0, 64)
                , a = e.substr(0 + r.length, 64)
                , l = r.length + a.length
                , s = e.substr(l, 64)
                , A = e.substr(l + 64);
            i === g && (s = e.substr(e.length - 64),
                A = e.substr(l, e.length - l - 64));
            var c = p.hexToArray(A)
                , u = n.createPoint(r, a);
            n.initDecipher(t, u),
                n.decryptBlock(c);
            var f = new Array(32);
            n.doFinal(f);
            var h = p.arrayToHex(f) === s;
            if (h) {
                var m = p.arrayToUtf8(c);
                return m
            }
            return ""
        }
        function B(e, t) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                , n = i.pointPool
                , r = i.der
                , l = i.hash
                , s = i.publicKey
                , A = "string" === typeof e ? p.parseUtf8StringToHex(e) : p.parseArrayBufferToHex(e);
            l && (s = s || w(t),
                A = v(A, s));
            var c = new o(t,16)
                , d = new o(A,16)
                , u = null
                , f = null
                , h = null;
            do {
                do {
                    var g = void 0;
                    g = n && n.length ? n.pop() : k(),
                        u = g.k,
                        f = d.add(g.x1).mod(m)
                } while (f.equals(o.ZERO) || f.add(u).equals(m));
                h = c.add(o.ONE).modInverse(m).multiply(u.subtract(f.multiply(c))).mod(m)
            } while (h.equals(o.ZERO));
            return r ? a(f, h) : p.leftPad(f.toString(16), 64) + p.leftPad(h.toString(16), 64)
        }
        function x(e, t, i) {
            var n, r, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, s = a.der, A = a.hash, c = "string" === typeof e ? p.parseUtf8StringToHex(e) : p.parseArrayBufferToHex(e);
            if (A && (c = v(c, i)),
                s) {
                var d = l(t);
                n = d.r,
                    r = d.s
            } else
                n = new o(t.substring(0, 64),16),
                    r = new o(t.substring(64),16);
            var u = h.decodePointHex(i)
                , g = new o(c,16)
                , b = n.add(r).mod(m);
            if (b.equals(o.ZERO))
                return !1;
            var C = f.multiply(r).add(u.multiply(b))
                , B = g.add(C.getX().toBigInteger()).mod(m);
            return n.equals(B)
        }
        function v(e, t) {
            var i = new A
                , n = (new A).getZ(f, t.substr(2, 128))
                , o = p.hexToArray(p.arrayToHex(n).toString())
                , r = e
                , a = p.hexToArray(r)
                , l = new Array(i.getDigestSize());
            return i.blockUpdate(o, 0, o.length),
                i.blockUpdate(a, 0, a.length),
                i.doFinal(l, 0),
                p.arrayToHex(l).toString()
        }
        function w(e) {
            var t = f.multiply(new o(e,16))
                , i = p.leftPad(t.getX().toBigInteger().toString(16), 64)
                , n = p.leftPad(t.getY().toBigInteger().toString(16), 64);
            return "04" + i + n
        }
        function k() {
            var e = p.generateKeyPairHex()
                , t = h.decodePointHex(e.publicKey);
            return e.k = new o(e.privateKey,16),
                e.x1 = t.getX().toBigInteger(),
                e
        }
        t["default"] = {
            generateKeyPairHex: p.generateKeyPairHex,
            doEncrypt: b,
            doDecrypt: C,
            doSignature: B,
            doVerifySignature: x,
            getPoint: k
        }
    },
    '1602': function(e, t, i) {
        "use strict";
        function n() {
            var e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
                , t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
                , i = "0123456789"
                , n = o();
            return n;
            function o() {
                var n = r(6, e)
                    , o = r(1, t)
                    , a = r(1, i)
                    , l = o + a + n;
                return l
            }
            function r(e, t) {
                e = e || 32;
                for (var i = "", n = 0; n < e; n++)
                    i += t.charAt(Math.ceil(1e3 * Math.random()) % t.length);
                return i
            }
        }
        i.d(t, "a", (function() {
                return n
            }
        ))
    },
    "6d05": function(e, t, i) {
        "use strict";
        i.r(t),
            i.d(t, "encrypt", (function() {
                    return h
                }
            )),
            i.d(t, "decrypt", (function() {
                    return m
                }
            ));
        var n = 0
            , o = 32
            , r = 16
            , a = [214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72]
            , l = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257];
        function s(e, t) {
            return e << t | e >>> 32 - t
        }
        function A(e) {
            return (255 & a[e >>> 24 & 255]) << 24 | (255 & a[e >>> 16 & 255]) << 16 | (255 & a[e >>> 8 & 255]) << 8 | 255 & a[255 & e]
        }
        function c(e) {
            return e ^ s(e, 2) ^ s(e, 10) ^ s(e, 18) ^ s(e, 24)
        }
        function d(e) {
            return e ^ s(e, 13) ^ s(e, 23)
        }
        function p(e, t, i) {
            for (var n, o, r = new Array(4), a = new Array(4), l = 0; l < 4; l++)
                a[0] = 255 & e[0 + 4 * l],
                    a[1] = 255 & e[1 + 4 * l],
                    a[2] = 255 & e[2 + 4 * l],
                    a[3] = 255 & e[3 + 4 * l],
                    r[l] = a[0] << 24 | a[1] << 16 | a[2] << 8 | a[3];
            for (n = 0; n < 32; n += 4)
                o = r[1] ^ r[2] ^ r[3] ^ i[n + 0],
                    o = A(o),
                    r[0] ^= c(o),
                    o = r[2] ^ r[3] ^ r[0] ^ i[n + 1],
                    o = A(o),
                    r[1] ^= c(o),
                    o = r[3] ^ r[0] ^ r[1] ^ i[n + 2],
                    o = A(o),
                    r[2] ^= c(o),
                    o = r[0] ^ r[1] ^ r[2] ^ i[n + 3],
                    o = A(o),
                    r[3] ^= c(o);
            for (var s = 0; s < 16; s += 4)
                t[s] = r[3 - s / 4] >>> 24 & 255,
                    t[s + 1] = r[3 - s / 4] >>> 16 & 255,
                    t[s + 2] = r[3 - s / 4] >>> 8 & 255,
                    t[s + 3] = 255 & r[3 - s / 4]
        }
        function u(e, t, i) {
            for (var o, r, a = new Array(4), s = new Array(4), c = 0; c < 4; c++)
                s[0] = 255 & e[0 + 4 * c],
                    s[1] = 255 & e[1 + 4 * c],
                    s[2] = 255 & e[2 + 4 * c],
                    s[3] = 255 & e[3 + 4 * c],
                    a[c] = s[0] << 24 | s[1] << 16 | s[2] << 8 | s[3];
            for (a[0] ^= 2746333894,
                     a[1] ^= 1453994832,
                     a[2] ^= 1736282519,
                     a[3] ^= 2993693404,
                     o = 0; o < 32; o += 4)
                r = a[1] ^ a[2] ^ a[3] ^ l[o + 0],
                    r = A(r),
                    t[o + 0] = a[0] ^= d(r),
                    r = a[2] ^ a[3] ^ a[0] ^ l[o + 1],
                    r = A(r),
                    t[o + 1] = a[1] ^= d(r),
                    r = a[3] ^ a[0] ^ a[1] ^ l[o + 2],
                    r = A(r),
                    t[o + 2] = a[2] ^= d(r),
                    r = a[0] ^ a[1] ^ a[2] ^ l[o + 3],
                    r = A(r),
                    t[o + 3] = a[3] ^= d(r);
            if (i === n)
                for (o = 0; o < 16; o++)
                    r = t[o],
                        t[o] = t[31 - o],
                        t[31 - o] = r
        }
        function f(e, t, i) {
            var n = []
                , a = 0
                , l = new Array(o);
            u(t, l, i);
            var s = new Array(16)
                , A = new Array(16)
                , c = e.length;
            while (c >= r) {
                s = e.slice(a, a + 16),
                    p(s, A, l);
                for (var d = 0; d < r; d++)
                    n[a + d] = A[d];
                c -= r,
                    a += r
            }
            return n
        }
        function h(e, t) {
            return f(e, t, 1)
        }
        function m(e, t) {
            return f(e, t, 0)
        }
        t["default"] = {
            encrypt: h,
            decrypt: m
        }
    },
    "1fb5": function(e, t, i) {
        "use strict";
        t.byteLength = c,
            t.toByteArray = p,
            t.fromByteArray = h;
        for (var n = [], o = [], r = "undefined" !== typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, s = a.length; l < s; ++l)
            n[l] = a[l],
                o[a.charCodeAt(l)] = l;
        function A(e) {
            var t = e.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var i = e.indexOf("=");
            -1 === i && (i = t);
            var n = i === t ? 0 : 4 - i % 4;
            return [i, n]
        }
        function c(e) {
            var t = A(e)
                , i = t[0]
                , n = t[1];
            return 3 * (i + n) / 4 - n
        }
        function d(e, t, i) {
            return 3 * (t + i) / 4 - i
        }
        function p(e) {
            var t, i, n = A(e), a = n[0], l = n[1], s = new r(d(e, a, l)), c = 0, p = l > 0 ? a - 4 : a;
            for (i = 0; i < p; i += 4)
                t = o[e.charCodeAt(i)] << 18 | o[e.charCodeAt(i + 1)] << 12 | o[e.charCodeAt(i + 2)] << 6 | o[e.charCodeAt(i + 3)],
                    s[c++] = t >> 16 & 255,
                    s[c++] = t >> 8 & 255,
                    s[c++] = 255 & t;
            return 2 === l && (t = o[e.charCodeAt(i)] << 2 | o[e.charCodeAt(i + 1)] >> 4,
                s[c++] = 255 & t),
            1 === l && (t = o[e.charCodeAt(i)] << 10 | o[e.charCodeAt(i + 1)] << 4 | o[e.charCodeAt(i + 2)] >> 2,
                s[c++] = t >> 8 & 255,
                s[c++] = 255 & t),
                s
        }
        function u(e) {
            return n[e >> 18 & 63] + n[e >> 12 & 63] + n[e >> 6 & 63] + n[63 & e]
        }
        function f(e, t, i) {
            for (var n, o = [], r = t; r < i; r += 3)
                n = (e[r] << 16 & 16711680) + (e[r + 1] << 8 & 65280) + (255 & e[r + 2]),
                    o.push(u(n));
            return o.join("")
        }
        function h(e) {
            for (var t, i = e.length, o = i % 3, r = [], a = 16383, l = 0, s = i - o; l < s; l += a)
                r.push(f(e, l, l + a > s ? s : l + a));
            return 1 === o ? (t = e[i - 1],
                r.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === o && (t = (e[i - 2] << 8) + e[i - 1],
                r.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=")),
                r.join("")
        }
        o["-".charCodeAt(0)] = 62,
            o["_".charCodeAt(0)] = 63
    },
    '9152': function(e, t) {
        t.read = function(e, t, i, n, o) {
            var r, a, l = 8 * o - n - 1, s = (1 << l) - 1, A = s >> 1, c = -7, d = i ? o - 1 : 0, p = i ? -1 : 1, u = e[t + d];
            for (d += p,
                     r = u & (1 << -c) - 1,
                     u >>= -c,
                     c += l; c > 0; r = 256 * r + e[t + d],
                     d += p,
                     c -= 8)
                ;
            for (a = r & (1 << -c) - 1,
                     r >>= -c,
                     c += n; c > 0; a = 256 * a + e[t + d],
                     d += p,
                     c -= 8)
                ;
            if (0 === r)
                r = 1 - A;
            else {
                if (r === s)
                    return a ? NaN : 1 / 0 * (u ? -1 : 1);
                a += Math.pow(2, n),
                    r -= A
            }
            return (u ? -1 : 1) * a * Math.pow(2, r - n)
        }
            ,
            t.write = function(e, t, i, n, o, r) {
                var a, l, s, A = 8 * r - o - 1, c = (1 << A) - 1, d = c >> 1, p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, u = n ? 0 : r - 1, f = n ? 1 : -1, h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t),
                         isNaN(t) || t === 1 / 0 ? (l = isNaN(t) ? 1 : 0,
                             a = c) : (a = Math.floor(Math.log(t) / Math.LN2),
                         t * (s = Math.pow(2, -a)) < 1 && (a--,
                             s *= 2),
                             t += a + d >= 1 ? p / s : p * Math.pow(2, 1 - d),
                         t * s >= 2 && (a++,
                             s /= 2),
                             a + d >= c ? (l = 0,
                                 a = c) : a + d >= 1 ? (l = (t * s - 1) * Math.pow(2, o),
                                 a += d) : (l = t * Math.pow(2, d - 1) * Math.pow(2, o),
                                 a = 0)); o >= 8; e[i + u] = 255 & l,
                         u += f,
                         l /= 256,
                         o -= 8)
                    ;
                for (a = a << o | l,
                         A += o; A > 0; e[i + u] = 255 & a,
                         u += f,
                         a /= 256,
                         A -= 8)
                    ;
                e[i + u - f] |= 128 * h
            }
    },
    'e3db': function(e, t) {
        var i = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == i.call(e)
        }
    },
    'b639': function(e, t, i) {
        "use strict";
        (function(e) {
                /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <http://feross.org>
     * @license  MIT
     */
                var n = i("1fb5")
                    , o = i("9152")
                    , r = i("e3db");
                function a() {
                    try {
                        var e = new Uint8Array(1);
                        return e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        },
                        42 === e.foo() && "function" === typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                    } catch (t) {
                        return !1
                    }
                }
                function l() {
                    return A.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }
                function s(e, t) {
                    if (l() < t)
                        throw new RangeError("Invalid typed array length");
                    return A.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t),
                        e.__proto__ = A.prototype) : (null === e && (e = new A(t)),
                        e.length = t),
                        e
                }
                function A(e, t, i) {
                    if (!A.TYPED_ARRAY_SUPPORT && !(this instanceof A))
                        return new A(e,t,i);
                    if ("number" === typeof e) {
                        if ("string" === typeof t)
                            throw new Error("If encoding is specified then the first argument must be a string");
                        return u(this, e)
                    }
                    return c(this, e, t, i)
                }
                function c(e, t, i, n) {
                    if ("number" === typeof t)
                        throw new TypeError('"value" argument must not be a number');
                    return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer ? m(e, t, i, n) : "string" === typeof t ? f(e, t, i) : g(e, t)
                }
                function d(e) {
                    if ("number" !== typeof e)
                        throw new TypeError('"size" argument must be a number');
                    if (e < 0)
                        throw new RangeError('"size" argument must not be negative')
                }
                function p(e, t, i, n) {
                    return d(t),
                        t <= 0 ? s(e, t) : void 0 !== i ? "string" === typeof n ? s(e, t).fill(i, n) : s(e, t).fill(i) : s(e, t)
                }
                function u(e, t) {
                    if (d(t),
                        e = s(e, t < 0 ? 0 : 0 | b(t)),
                        !A.TYPED_ARRAY_SUPPORT)
                        for (var i = 0; i < t; ++i)
                            e[i] = 0;
                    return e
                }
                function f(e, t, i) {
                    if ("string" === typeof i && "" !== i || (i = "utf8"),
                        !A.isEncoding(i))
                        throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | B(t, i);
                    e = s(e, n);
                    var o = e.write(t, i);
                    return o !== n && (e = e.slice(0, o)),
                        e
                }
                function h(e, t) {
                    var i = t.length < 0 ? 0 : 0 | b(t.length);
                    e = s(e, i);
                    for (var n = 0; n < i; n += 1)
                        e[n] = 255 & t[n];
                    return e
                }
                function m(e, t, i, n) {
                    if (t.byteLength,
                    i < 0 || t.byteLength < i)
                        throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < i + (n || 0))
                        throw new RangeError("'length' is out of bounds");
                    return t = void 0 === i && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t,i) : new Uint8Array(t,i,n),
                        A.TYPED_ARRAY_SUPPORT ? (e = t,
                            e.__proto__ = A.prototype) : e = h(e, t),
                        e
                }
                function g(e, t) {
                    if (A.isBuffer(t)) {
                        var i = 0 | b(t.length);
                        return e = s(e, i),
                            0 === e.length ? e : (t.copy(e, 0, 0, i),
                                e)
                    }
                    if (t) {
                        if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                            return "number" !== typeof t.length || te(t.length) ? s(e, 0) : h(e, t);
                        if ("Buffer" === t.type && r(t.data))
                            return h(e, t.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }
                function b(e) {
                    if (e >= l())
                        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + l().toString(16) + " bytes");
                    return 0 | e
                }
                function C(e) {
                    return +e != e && (e = 0),
                        A.alloc(+e)
                }
                function B(e, t) {
                    if (A.isBuffer(e))
                        return e.length;
                    if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                        return e.byteLength;
                    "string" !== typeof e && (e = "" + e);
                    var i = e.length;
                    if (0 === i)
                        return 0;
                    for (var n = !1; ; )
                        switch (t) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return i;
                            case "utf8":
                            case "utf-8":
                            case void 0:
                                return X(e).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * i;
                            case "hex":
                                return i >>> 1;
                            case "base64":
                                return Z(e).length;
                            default:
                                if (n)
                                    return X(e).length;
                                t = ("" + t).toLowerCase(),
                                    n = !0
                        }
                }
                function x(e, t, i) {
                    var n = !1;
                    if ((void 0 === t || t < 0) && (t = 0),
                    t > this.length)
                        return "";
                    if ((void 0 === i || i > this.length) && (i = this.length),
                    i <= 0)
                        return "";
                    if (i >>>= 0,
                        t >>>= 0,
                    i <= t)
                        return "";
                    e || (e = "utf8");
                    while (1)
                        switch (e) {
                            case "hex":
                                return W(this, t, i);
                            case "utf8":
                            case "utf-8":
                                return z(this, t, i);
                            case "ascii":
                                return q(this, t, i);
                            case "latin1":
                            case "binary":
                                return P(this, t, i);
                            case "base64":
                                return O(this, t, i);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return M(this, t, i);
                            default:
                                if (n)
                                    throw new TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(),
                                    n = !0
                        }
                }
                function v(e, t, i) {
                    var n = e[t];
                    e[t] = e[i],
                        e[i] = n
                }
                function w(e, t, i, n, o) {
                    if (0 === e.length)
                        return -1;
                    if ("string" === typeof i ? (n = i,
                        i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648),
                        i = +i,
                    isNaN(i) && (i = o ? 0 : e.length - 1),
                    i < 0 && (i = e.length + i),
                    i >= e.length) {
                        if (o)
                            return -1;
                        i = e.length - 1
                    } else if (i < 0) {
                        if (!o)
                            return -1;
                        i = 0
                    }
                    if ("string" === typeof t && (t = A.from(t, n)),
                        A.isBuffer(t))
                        return 0 === t.length ? -1 : k(e, t, i, n, o);
                    if ("number" === typeof t)
                        return t &= 255,
                            A.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, i) : Uint8Array.prototype.lastIndexOf.call(e, t, i) : k(e, [t], i, n, o);
                    throw new TypeError("val must be string, number or Buffer")
                }
                function k(e, t, i, n, o) {
                    var r, a = 1, l = e.length, s = t.length;
                    if (void 0 !== n && (n = String(n).toLowerCase(),
                    "ucs2" === n || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (e.length < 2 || t.length < 2)
                            return -1;
                        a = 2,
                            l /= 2,
                            s /= 2,
                            i /= 2
                    }
                    function A(e, t) {
                        return 1 === a ? e[t] : e.readUInt16BE(t * a)
                    }
                    if (o) {
                        var c = -1;
                        for (r = i; r < l; r++)
                            if (A(e, r) === A(t, -1 === c ? 0 : r - c)) {
                                if (-1 === c && (c = r),
                                r - c + 1 === s)
                                    return c * a
                            } else
                                -1 !== c && (r -= r - c),
                                    c = -1
                    } else
                        for (i + s > l && (i = l - s),
                                 r = i; r >= 0; r--) {
                            for (var d = !0, p = 0; p < s; p++)
                                if (A(e, r + p) !== A(t, p)) {
                                    d = !1;
                                    break
                                }
                            if (d)
                                return r
                        }
                    return -1
                }
                function _(e, t, i, n) {
                    i = Number(i) || 0;
                    var o = e.length - i;
                    n ? (n = Number(n),
                    n > o && (n = o)) : n = o;
                    var r = t.length;
                    if (r % 2 !== 0)
                        throw new TypeError("Invalid hex string");
                    n > r / 2 && (n = r / 2);
                    for (var a = 0; a < n; ++a) {
                        var l = parseInt(t.substr(2 * a, 2), 16);
                        if (isNaN(l))
                            return a;
                        e[i + a] = l
                    }
                    return a
                }
                function y(e, t, i, n) {
                    return ee(X(t, e.length - i), e, i, n)
                }
                function I(e, t, i, n) {
                    return ee($(t), e, i, n)
                }
                function E(e, t, i, n) {
                    return I(e, t, i, n)
                }
                function D(e, t, i, n) {
                    return ee(Z(t), e, i, n)
                }
                function S(e, t, i, n) {
                    return ee(K(t, e.length - i), e, i, n)
                }
                function O(e, t, i) {
                    return 0 === t && i === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, i))
                }
                function z(e, t, i) {
                    i = Math.min(e.length, i);
                    var n = []
                        , o = t;
                    while (o < i) {
                        var r, a, l, s, A = e[o], c = null, d = A > 239 ? 4 : A > 223 ? 3 : A > 191 ? 2 : 1;
                        if (o + d <= i)
                            switch (d) {
                                case 1:
                                    A < 128 && (c = A);
                                    break;
                                case 2:
                                    r = e[o + 1],
                                    128 === (192 & r) && (s = (31 & A) << 6 | 63 & r,
                                    s > 127 && (c = s));
                                    break;
                                case 3:
                                    r = e[o + 1],
                                        a = e[o + 2],
                                    128 === (192 & r) && 128 === (192 & a) && (s = (15 & A) << 12 | (63 & r) << 6 | 63 & a,
                                    s > 2047 && (s < 55296 || s > 57343) && (c = s));
                                    break;
                                case 4:
                                    r = e[o + 1],
                                        a = e[o + 2],
                                        l = e[o + 3],
                                    128 === (192 & r) && 128 === (192 & a) && 128 === (192 & l) && (s = (15 & A) << 18 | (63 & r) << 12 | (63 & a) << 6 | 63 & l,
                                    s > 65535 && s < 1114112 && (c = s))
                            }
                        null === c ? (c = 65533,
                            d = 1) : c > 65535 && (c -= 65536,
                            n.push(c >>> 10 & 1023 | 55296),
                            c = 56320 | 1023 & c),
                            n.push(c),
                            o += d
                    }
                    return T(n)
                }
                t.Buffer = A,
                    t.SlowBuffer = C,
                    t.INSPECT_MAX_BYTES = 50,
                    A.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : a(),
                    t.kMaxLength = l(),
                    A.poolSize = 8192,
                    A._augment = function(e) {
                        return e.__proto__ = A.prototype,
                            e
                    }
                    ,
                    A.from = function(e, t, i) {
                        return c(null, e, t, i)
                    }
                    ,
                A.TYPED_ARRAY_SUPPORT && (A.prototype.__proto__ = Uint8Array.prototype,
                    A.__proto__ = Uint8Array,
                "undefined" !== typeof Symbol && Symbol.species && A[Symbol.species] === A && Object.defineProperty(A, Symbol.species, {
                    value: null,
                    configurable: !0
                })),
                    A.alloc = function(e, t, i) {
                        return p(null, e, t, i)
                    }
                    ,
                    A.allocUnsafe = function(e) {
                        return u(null, e)
                    }
                    ,
                    A.allocUnsafeSlow = function(e) {
                        return u(null, e)
                    }
                    ,
                    A.isBuffer = function(e) {
                        return !(null == e || !e._isBuffer)
                    }
                    ,
                    A.compare = function(e, t) {
                        if (!A.isBuffer(e) || !A.isBuffer(t))
                            throw new TypeError("Arguments must be Buffers");
                        if (e === t)
                            return 0;
                        for (var i = e.length, n = t.length, o = 0, r = Math.min(i, n); o < r; ++o)
                            if (e[o] !== t[o]) {
                                i = e[o],
                                    n = t[o];
                                break
                            }
                        return i < n ? -1 : n < i ? 1 : 0
                    }
                    ,
                    A.isEncoding = function(e) {
                        switch (String(e).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }
                    ,
                    A.concat = function(e, t) {
                        if (!r(e))
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length)
                            return A.alloc(0);
                        var i;
                        if (void 0 === t)
                            for (t = 0,
                                     i = 0; i < e.length; ++i)
                                t += e[i].length;
                        var n = A.allocUnsafe(t)
                            , o = 0;
                        for (i = 0; i < e.length; ++i) {
                            var a = e[i];
                            if (!A.isBuffer(a))
                                throw new TypeError('"list" argument must be an Array of Buffers');
                            a.copy(n, o),
                                o += a.length
                        }
                        return n
                    }
                    ,
                    A.byteLength = B,
                    A.prototype._isBuffer = !0,
                    A.prototype.swap16 = function() {
                        var e = this.length;
                        if (e % 2 !== 0)
                            throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var t = 0; t < e; t += 2)
                            v(this, t, t + 1);
                        return this
                    }
                    ,
                    A.prototype.swap32 = function() {
                        var e = this.length;
                        if (e % 4 !== 0)
                            throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var t = 0; t < e; t += 4)
                            v(this, t, t + 3),
                                v(this, t + 1, t + 2);
                        return this
                    }
                    ,
                    A.prototype.swap64 = function() {
                        var e = this.length;
                        if (e % 8 !== 0)
                            throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var t = 0; t < e; t += 8)
                            v(this, t, t + 7),
                                v(this, t + 1, t + 6),
                                v(this, t + 2, t + 5),
                                v(this, t + 3, t + 4);
                        return this
                    }
                    ,
                    A.prototype.toString = function() {
                        var e = 0 | this.length;
                        return 0 === e ? "" : 0 === arguments.length ? z(this, 0, e) : x.apply(this, arguments)
                    }
                    ,
                    A.prototype.equals = function(e) {
                        if (!A.isBuffer(e))
                            throw new TypeError("Argument must be a Buffer");
                        return this === e || 0 === A.compare(this, e)
                    }
                    ,
                    A.prototype.inspect = function() {
                        var e = ""
                            , i = t.INSPECT_MAX_BYTES;
                        return this.length > 0 && (e = this.toString("hex", 0, i).match(/.{2}/g).join(" "),
                        this.length > i && (e += " ... ")),
                        "<Buffer " + e + ">"
                    }
                    ,
                    A.prototype.compare = function(e, t, i, n, o) {
                        if (!A.isBuffer(e))
                            throw new TypeError("Argument must be a Buffer");
                        if (void 0 === t && (t = 0),
                        void 0 === i && (i = e ? e.length : 0),
                        void 0 === n && (n = 0),
                        void 0 === o && (o = this.length),
                        t < 0 || i > e.length || n < 0 || o > this.length)
                            throw new RangeError("out of range index");
                        if (n >= o && t >= i)
                            return 0;
                        if (n >= o)
                            return -1;
                        if (t >= i)
                            return 1;
                        if (t >>>= 0,
                            i >>>= 0,
                            n >>>= 0,
                            o >>>= 0,
                        this === e)
                            return 0;
                        for (var r = o - n, a = i - t, l = Math.min(r, a), s = this.slice(n, o), c = e.slice(t, i), d = 0; d < l; ++d)
                            if (s[d] !== c[d]) {
                                r = s[d],
                                    a = c[d];
                                break
                            }
                        return r < a ? -1 : a < r ? 1 : 0
                    }
                    ,
                    A.prototype.includes = function(e, t, i) {
                        return -1 !== this.indexOf(e, t, i)
                    }
                    ,
                    A.prototype.indexOf = function(e, t, i) {
                        return w(this, e, t, i, !0)
                    }
                    ,
                    A.prototype.lastIndexOf = function(e, t, i) {
                        return w(this, e, t, i, !1)
                    }
                    ,
                    A.prototype.write = function(e, t, i, n) {
                        if (void 0 === t)
                            n = "utf8",
                                i = this.length,
                                t = 0;
                        else if (void 0 === i && "string" === typeof t)
                            n = t,
                                i = this.length,
                                t = 0;
                        else {
                            if (!isFinite(t))
                                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            t |= 0,
                                isFinite(i) ? (i |= 0,
                                void 0 === n && (n = "utf8")) : (n = i,
                                    i = void 0)
                        }
                        var o = this.length - t;
                        if ((void 0 === i || i > o) && (i = o),
                        e.length > 0 && (i < 0 || t < 0) || t > this.length)
                            throw new RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8");
                        for (var r = !1; ; )
                            switch (n) {
                                case "hex":
                                    return _(this, e, t, i);
                                case "utf8":
                                case "utf-8":
                                    return y(this, e, t, i);
                                case "ascii":
                                    return I(this, e, t, i);
                                case "latin1":
                                case "binary":
                                    return E(this, e, t, i);
                                case "base64":
                                    return D(this, e, t, i);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return S(this, e, t, i);
                                default:
                                    if (r)
                                        throw new TypeError("Unknown encoding: " + n);
                                    n = ("" + n).toLowerCase(),
                                        r = !0
                            }
                    }
                    ,
                    A.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    }
                ;
                var F = 4096;
                function T(e) {
                    var t = e.length;
                    if (t <= F)
                        return String.fromCharCode.apply(String, e);
                    var i = ""
                        , n = 0;
                    while (n < t)
                        i += String.fromCharCode.apply(String, e.slice(n, n += F));
                    return i
                }
                function q(e, t, i) {
                    var n = "";
                    i = Math.min(e.length, i);
                    for (var o = t; o < i; ++o)
                        n += String.fromCharCode(127 & e[o]);
                    return n
                }
                function P(e, t, i) {
                    var n = "";
                    i = Math.min(e.length, i);
                    for (var o = t; o < i; ++o)
                        n += String.fromCharCode(e[o]);
                    return n
                }
                function W(e, t, i) {
                    var n = e.length;
                    (!t || t < 0) && (t = 0),
                    (!i || i < 0 || i > n) && (i = n);
                    for (var o = "", r = t; r < i; ++r)
                        o += J(e[r]);
                    return o
                }
                function M(e, t, i) {
                    for (var n = e.slice(t, i), o = "", r = 0; r < n.length; r += 2)
                        o += String.fromCharCode(n[r] + 256 * n[r + 1]);
                    return o
                }
                function U(e, t, i) {
                    if (e % 1 !== 0 || e < 0)
                        throw new RangeError("offset is not uint");
                    if (e + t > i)
                        throw new RangeError("Trying to access beyond buffer length")
                }
                function N(e, t, i, n, o, r) {
                    if (!A.isBuffer(e))
                        throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > o || t < r)
                        throw new RangeError('"value" argument is out of bounds');
                    if (i + n > e.length)
                        throw new RangeError("Index out of range")
                }
                function j(e, t, i, n) {
                    t < 0 && (t = 65535 + t + 1);
                    for (var o = 0, r = Math.min(e.length - i, 2); o < r; ++o)
                        e[i + o] = (t & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
                }
                function Y(e, t, i, n) {
                    t < 0 && (t = 4294967295 + t + 1);
                    for (var o = 0, r = Math.min(e.length - i, 4); o < r; ++o)
                        e[i + o] = t >>> 8 * (n ? o : 3 - o) & 255
                }
                function L(e, t, i, n, o, r) {
                    if (i + n > e.length)
                        throw new RangeError("Index out of range");
                    if (i < 0)
                        throw new RangeError("Index out of range")
                }
                function R(e, t, i, n, r) {
                    return r || L(e, t, i, 4, 34028234663852886e22, -34028234663852886e22),
                        o.write(e, t, i, n, 23, 4),
                    i + 4
                }
                function G(e, t, i, n, r) {
                    return r || L(e, t, i, 8, 17976931348623157e292, -17976931348623157e292),
                        o.write(e, t, i, n, 52, 8),
                    i + 8
                }
                A.prototype.slice = function(e, t) {
                    var i, n = this.length;
                    if (e = ~~e,
                        t = void 0 === t ? n : ~~t,
                        e < 0 ? (e += n,
                        e < 0 && (e = 0)) : e > n && (e = n),
                        t < 0 ? (t += n,
                        t < 0 && (t = 0)) : t > n && (t = n),
                    t < e && (t = e),
                        A.TYPED_ARRAY_SUPPORT)
                        i = this.subarray(e, t),
                            i.__proto__ = A.prototype;
                    else {
                        var o = t - e;
                        i = new A(o,void 0);
                        for (var r = 0; r < o; ++r)
                            i[r] = this[r + e]
                    }
                    return i
                }
                    ,
                    A.prototype.readUIntLE = function(e, t, i) {
                        e |= 0,
                            t |= 0,
                        i || U(e, t, this.length);
                        var n = this[e]
                            , o = 1
                            , r = 0;
                        while (++r < t && (o *= 256))
                            n += this[e + r] * o;
                        return n
                    }
                    ,
                    A.prototype.readUIntBE = function(e, t, i) {
                        e |= 0,
                            t |= 0,
                        i || U(e, t, this.length);
                        var n = this[e + --t]
                            , o = 1;
                        while (t > 0 && (o *= 256))
                            n += this[e + --t] * o;
                        return n
                    }
                    ,
                    A.prototype.readUInt8 = function(e, t) {
                        return t || U(e, 1, this.length),
                            this[e]
                    }
                    ,
                    A.prototype.readUInt16LE = function(e, t) {
                        return t || U(e, 2, this.length),
                        this[e] | this[e + 1] << 8
                    }
                    ,
                    A.prototype.readUInt16BE = function(e, t) {
                        return t || U(e, 2, this.length),
                        this[e] << 8 | this[e + 1]
                    }
                    ,
                    A.prototype.readUInt32LE = function(e, t) {
                        return t || U(e, 4, this.length),
                        (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                    }
                    ,
                    A.prototype.readUInt32BE = function(e, t) {
                        return t || U(e, 4, this.length),
                        16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                    }
                    ,
                    A.prototype.readIntLE = function(e, t, i) {
                        e |= 0,
                            t |= 0,
                        i || U(e, t, this.length);
                        var n = this[e]
                            , o = 1
                            , r = 0;
                        while (++r < t && (o *= 256))
                            n += this[e + r] * o;
                        return o *= 128,
                        n >= o && (n -= Math.pow(2, 8 * t)),
                            n
                    }
                    ,
                    A.prototype.readIntBE = function(e, t, i) {
                        e |= 0,
                            t |= 0,
                        i || U(e, t, this.length);
                        var n = t
                            , o = 1
                            , r = this[e + --n];
                        while (n > 0 && (o *= 256))
                            r += this[e + --n] * o;
                        return o *= 128,
                        r >= o && (r -= Math.pow(2, 8 * t)),
                            r
                    }
                    ,
                    A.prototype.readInt8 = function(e, t) {
                        return t || U(e, 1, this.length),
                            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                    }
                    ,
                    A.prototype.readInt16LE = function(e, t) {
                        t || U(e, 2, this.length);
                        var i = this[e] | this[e + 1] << 8;
                        return 32768 & i ? 4294901760 | i : i
                    }
                    ,
                    A.prototype.readInt16BE = function(e, t) {
                        t || U(e, 2, this.length);
                        var i = this[e + 1] | this[e] << 8;
                        return 32768 & i ? 4294901760 | i : i
                    }
                    ,
                    A.prototype.readInt32LE = function(e, t) {
                        return t || U(e, 4, this.length),
                        this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                    }
                    ,
                    A.prototype.readInt32BE = function(e, t) {
                        return t || U(e, 4, this.length),
                        this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                    }
                    ,
                    A.prototype.readFloatLE = function(e, t) {
                        return t || U(e, 4, this.length),
                            o.read(this, e, !0, 23, 4)
                    }
                    ,
                    A.prototype.readFloatBE = function(e, t) {
                        return t || U(e, 4, this.length),
                            o.read(this, e, !1, 23, 4)
                    }
                    ,
                    A.prototype.readDoubleLE = function(e, t) {
                        return t || U(e, 8, this.length),
                            o.read(this, e, !0, 52, 8)
                    }
                    ,
                    A.prototype.readDoubleBE = function(e, t) {
                        return t || U(e, 8, this.length),
                            o.read(this, e, !1, 52, 8)
                    }
                    ,
                    A.prototype.writeUIntLE = function(e, t, i, n) {
                        if (e = +e,
                            t |= 0,
                            i |= 0,
                            !n) {
                            var o = Math.pow(2, 8 * i) - 1;
                            N(this, e, t, i, o, 0)
                        }
                        var r = 1
                            , a = 0;
                        this[t] = 255 & e;
                        while (++a < i && (r *= 256))
                            this[t + a] = e / r & 255;
                        return t + i
                    }
                    ,
                    A.prototype.writeUIntBE = function(e, t, i, n) {
                        if (e = +e,
                            t |= 0,
                            i |= 0,
                            !n) {
                            var o = Math.pow(2, 8 * i) - 1;
                            N(this, e, t, i, o, 0)
                        }
                        var r = i - 1
                            , a = 1;
                        this[t + r] = 255 & e;
                        while (--r >= 0 && (a *= 256))
                            this[t + r] = e / a & 255;
                        return t + i
                    }
                    ,
                    A.prototype.writeUInt8 = function(e, t, i) {
                        return e = +e,
                            t |= 0,
                        i || N(this, e, t, 1, 255, 0),
                        A.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                            this[t] = 255 & e,
                        t + 1
                    }
                    ,
                    A.prototype.writeUInt16LE = function(e, t, i) {
                        return e = +e,
                            t |= 0,
                        i || N(this, e, t, 2, 65535, 0),
                            A.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                                this[t + 1] = e >>> 8) : j(this, e, t, !0),
                        t + 2
                    }
                    ,
                    A.prototype.writeUInt16BE = function(e, t, i) {
                        return e = +e,
                            t |= 0,
                        i || N(this, e, t, 2, 65535, 0),
                            A.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                                this[t + 1] = 255 & e) : j(this, e, t, !1),
                        t + 2
                    }
                    ,
                    A.prototype.writeUInt32LE = function(e, t, i) {
                        return e = +e,
                            t |= 0,
                        i || N(this, e, t, 4, 4294967295, 0),
                            A.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
                                this[t + 2] = e >>> 16,
                                this[t + 1] = e >>> 8,
                                this[t] = 255 & e) : Y(this, e, t, !0),
                        t + 4
                    }
                    ,
                    A.prototype.writeUInt32BE = function(e, t, i) {
                        return e = +e,
                            t |= 0,
                        i || N(this, e, t, 4, 4294967295, 0),
                            A.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                                this[t + 1] = e >>> 16,
                                this[t + 2] = e >>> 8,
                                this[t + 3] = 255 & e) : Y(this, e, t, !1),
                        t + 4
                    }
                    ,
                    A.prototype.writeIntLE = function(e, t, i, n) {
                        if (e = +e,
                            t |= 0,
                            !n) {
                            var o = Math.pow(2, 8 * i - 1);
                            N(this, e, t, i, o - 1, -o)
                        }
                        var r = 0
                            , a = 1
                            , l = 0;
                        this[t] = 255 & e;
                        while (++r < i && (a *= 256))
                            e < 0 && 0 === l && 0 !== this[t + r - 1] && (l = 1),
                                this[t + r] = (e / a >> 0) - l & 255;
                        return t + i
                    }
                    ,
                    A.prototype.writeIntBE = function(e, t, i, n) {
                        if (e = +e,
                            t |= 0,
                            !n) {
                            var o = Math.pow(2, 8 * i - 1);
                            N(this, e, t, i, o - 1, -o)
                        }
                        var r = i - 1
                            , a = 1
                            , l = 0;
                        this[t + r] = 255 & e;
                        while (--r >= 0 && (a *= 256))
                            e < 0 && 0 === l && 0 !== this[t + r + 1] && (l = 1),
                                this[t + r] = (e / a >> 0) - l & 255;
                        return t + i
                    }
                    ,
                    A.prototype.writeInt8 = function(e, t, i) {
                        return e = +e,
                            t |= 0,
                        i || N(this, e, t, 1, 127, -128),
                        A.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                        e < 0 && (e = 255 + e + 1),
                            this[t] = 255 & e,
                        t + 1
                    }
                    ,
                    A.prototype.writeInt16LE = function(e, t, i) {
                        return e = +e,
                            t |= 0,
                        i || N(this, e, t, 2, 32767, -32768),
                            A.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                                this[t + 1] = e >>> 8) : j(this, e, t, !0),
                        t + 2
                    }
                    ,
                    A.prototype.writeInt16BE = function(e, t, i) {
                        return e = +e,
                            t |= 0,
                        i || N(this, e, t, 2, 32767, -32768),
                            A.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                                this[t + 1] = 255 & e) : j(this, e, t, !1),
                        t + 2
                    }
                    ,
                    A.prototype.writeInt32LE = function(e, t, i) {
                        return e = +e,
                            t |= 0,
                        i || N(this, e, t, 4, 2147483647, -2147483648),
                            A.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                                this[t + 1] = e >>> 8,
                                this[t + 2] = e >>> 16,
                                this[t + 3] = e >>> 24) : Y(this, e, t, !0),
                        t + 4
                    }
                    ,
                    A.prototype.writeInt32BE = function(e, t, i) {
                        return e = +e,
                            t |= 0,
                        i || N(this, e, t, 4, 2147483647, -2147483648),
                        e < 0 && (e = 4294967295 + e + 1),
                            A.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                                this[t + 1] = e >>> 16,
                                this[t + 2] = e >>> 8,
                                this[t + 3] = 255 & e) : Y(this, e, t, !1),
                        t + 4
                    }
                    ,
                    A.prototype.writeFloatLE = function(e, t, i) {
                        return R(this, e, t, !0, i)
                    }
                    ,
                    A.prototype.writeFloatBE = function(e, t, i) {
                        return R(this, e, t, !1, i)
                    }
                    ,
                    A.prototype.writeDoubleLE = function(e, t, i) {
                        return G(this, e, t, !0, i)
                    }
                    ,
                    A.prototype.writeDoubleBE = function(e, t, i) {
                        return G(this, e, t, !1, i)
                    }
                    ,
                    A.prototype.copy = function(e, t, i, n) {
                        if (i || (i = 0),
                        n || 0 === n || (n = this.length),
                        t >= e.length && (t = e.length),
                        t || (t = 0),
                        n > 0 && n < i && (n = i),
                        n === i)
                            return 0;
                        if (0 === e.length || 0 === this.length)
                            return 0;
                        if (t < 0)
                            throw new RangeError("targetStart out of bounds");
                        if (i < 0 || i >= this.length)
                            throw new RangeError("sourceStart out of bounds");
                        if (n < 0)
                            throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length),
                        e.length - t < n - i && (n = e.length - t + i);
                        var o, r = n - i;
                        if (this === e && i < t && t < n)
                            for (o = r - 1; o >= 0; --o)
                                e[o + t] = this[o + i];
                        else if (r < 1e3 || !A.TYPED_ARRAY_SUPPORT)
                            for (o = 0; o < r; ++o)
                                e[o + t] = this[o + i];
                        else
                            Uint8Array.prototype.set.call(e, this.subarray(i, i + r), t);
                        return r
                    }
                    ,
                    A.prototype.fill = function(e, t, i, n) {
                        if ("string" === typeof e) {
                            if ("string" === typeof t ? (n = t,
                                t = 0,
                                i = this.length) : "string" === typeof i && (n = i,
                                i = this.length),
                            1 === e.length) {
                                var o = e.charCodeAt(0);
                                o < 256 && (e = o)
                            }
                            if (void 0 !== n && "string" !== typeof n)
                                throw new TypeError("encoding must be a string");
                            if ("string" === typeof n && !A.isEncoding(n))
                                throw new TypeError("Unknown encoding: " + n)
                        } else
                            "number" === typeof e && (e &= 255);
                        if (t < 0 || this.length < t || this.length < i)
                            throw new RangeError("Out of range index");
                        if (i <= t)
                            return this;
                        var r;
                        if (t >>>= 0,
                            i = void 0 === i ? this.length : i >>> 0,
                        e || (e = 0),
                        "number" === typeof e)
                            for (r = t; r < i; ++r)
                                this[r] = e;
                        else {
                            var a = A.isBuffer(e) ? e : X(new A(e,n).toString())
                                , l = a.length;
                            for (r = 0; r < i - t; ++r)
                                this[r + t] = a[r % l]
                        }
                        return this
                    }
                ;
                var H = /[^+\/0-9A-Za-z-_]/g;
                function V(e) {
                    if (e = Q(e).replace(H, ""),
                    e.length < 2)
                        return "";
                    while (e.length % 4 !== 0)
                        e += "=";
                    return e
                }
                function Q(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }
                function J(e) {
                    return e < 16 ? "0" + e.toString(16) : e.toString(16)
                }
                function X(e, t) {
                    var i;
                    t = t || 1 / 0;
                    for (var n = e.length, o = null, r = [], a = 0; a < n; ++a) {
                        if (i = e.charCodeAt(a),
                        i > 55295 && i < 57344) {
                            if (!o) {
                                if (i > 56319) {
                                    (t -= 3) > -1 && r.push(239, 191, 189);
                                    continue
                                }
                                if (a + 1 === n) {
                                    (t -= 3) > -1 && r.push(239, 191, 189);
                                    continue
                                }
                                o = i;
                                continue
                            }
                            if (i < 56320) {
                                (t -= 3) > -1 && r.push(239, 191, 189),
                                    o = i;
                                continue
                            }
                            i = 65536 + (o - 55296 << 10 | i - 56320)
                        } else
                            o && (t -= 3) > -1 && r.push(239, 191, 189);
                        if (o = null,
                        i < 128) {
                            if ((t -= 1) < 0)
                                break;
                            r.push(i)
                        } else if (i < 2048) {
                            if ((t -= 2) < 0)
                                break;
                            r.push(i >> 6 | 192, 63 & i | 128)
                        } else if (i < 65536) {
                            if ((t -= 3) < 0)
                                break;
                            r.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
                        } else {
                            if (!(i < 1114112))
                                throw new Error("Invalid code point");
                            if ((t -= 4) < 0)
                                break;
                            r.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
                        }
                    }
                    return r
                }
                function $(e) {
                    for (var t = [], i = 0; i < e.length; ++i)
                        t.push(255 & e.charCodeAt(i));
                    return t
                }
                function K(e, t) {
                    for (var i, n, o, r = [], a = 0; a < e.length; ++a) {
                        if ((t -= 2) < 0)
                            break;
                        i = e.charCodeAt(a),
                            n = i >> 8,
                            o = i % 256,
                            r.push(o),
                            r.push(n)
                    }
                    return r
                }
                function Z(e) {
                    return n.toByteArray(V(e))
                }
                function ee(e, t, i, n) {
                    for (var o = 0; o < n; ++o) {
                        if (o + i >= t.length || o >= e.length)
                            break;
                        t[o + i] = e[o]
                    }
                    return o
                }
                function te(e) {
                    return e !== e
                }
            }
        ).call(this, i("c8ba"))
    },
    'c8ba': function(e, t) {
        var i;
        i = function() {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (n) {
            "object" === typeof window && (i = window)
        }
        e.exports = i
    },
})

var HEX_CHARS = "0123456789abcdef".split("")
    , EXTRA = [-2147483648, 8388608, 32768, 128]
    , SHIFT = [24, 16, 8, 0]
    , K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
    , OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"]
    , blocks = [];

var createOutputMethod = function(e, t) {
    return function(i) {
        return new Sha256(t,!0).update(i)[e]()
    }
}
    , createMethod = function(e) {
    var t = createOutputMethod("hex", e);
    // NODE_JS && (t = nodeWrap(t, e)),
        t.create = function() {
            return new Sha256(e)
        }
        ,
        t.update = function(e) {
            return t.create().update(e)
        }
    ;
    // for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
    //     var n = OUTPUT_TYPES[i];
    //     t[n] = createOutputMethod(n, e)
    // }
    return t
}
    , nodeWrap = function(method, is224) {
    var crypto = eval("require('crypto')")
        , Buffer = eval("require('buffer').Buffer")
        , algorithm = is224 ? "sha224" : "sha256"
        , nodeMethod = function(e) {
        if ("string" === typeof e)
            return crypto.createHash(algorithm).update(e, "utf8").digest("hex");
        if (null === e || void 0 === e)
            throw new Error(ERROR);
        return e.constructor === ArrayBuffer && (e = new Uint8Array(e)),
            Array.isArray(e) || ArrayBuffer.isView(e) || e.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(e)).digest("hex") : method(e)
    };
    return nodeMethod
}
    , createHmacOutputMethod = function(e, t) {
    return function(i, n) {
        return new HmacSha256(i,t,!0).update(n)[e]()
    }
}
    , createHmacMethod = function(e) {
    var t = createHmacOutputMethod("hex", e);
    t.create = function(t) {
        return new HmacSha256(t,e)
    }
        ,
        t.update = function(e, i) {
            return t.create(e).update(i)
        }
    ;
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
        var n = OUTPUT_TYPES[i];
        t[n] = createHmacOutputMethod(n, e)
    }
    return t
};
function Sha256(e, t) {
    t ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
        this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        e ? (this.h0 = 3238371032,
            this.h1 = 914150663,
            this.h2 = 812702999,
            this.h3 = 4144912697,
            this.h4 = 4290775857,
            this.h5 = 1750603025,
            this.h6 = 1694076839,
            this.h7 = 3204075428) : (this.h0 = 1779033703,
            this.h1 = 3144134277,
            this.h2 = 1013904242,
            this.h3 = 2773480762,
            this.h4 = 1359893119,
            this.h5 = 2600822924,
            this.h6 = 528734635,
            this.h7 = 1541459225),
        this.block = this.start = this.bytes = this.hBytes = 0,
        this.finalized = this.hashed = !1,
        this.first = !0,
        this.is224 = e
}
function HmacSha256(e, t, i) {
    var n, o = typeof e;
    if ("string" === o) {
        var r, a = [], l = e.length, s = 0;
        for (n = 0; n < l; ++n)
            r = e.charCodeAt(n),
                r < 128 ? a[s++] = r : r < 2048 ? (a[s++] = 192 | r >> 6,
                    a[s++] = 128 | 63 & r) : r < 55296 || r >= 57344 ? (a[s++] = 224 | r >> 12,
                    a[s++] = 128 | r >> 6 & 63,
                    a[s++] = 128 | 63 & r) : (r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(++n)),
                    a[s++] = 240 | r >> 18,
                    a[s++] = 128 | r >> 12 & 63,
                    a[s++] = 128 | r >> 6 & 63,
                    a[s++] = 128 | 63 & r);
        e = a
    } else {
        if ("object" !== o)
            throw new Error(ERROR);
        if (null === e)
            throw new Error(ERROR);
        if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
            e = new Uint8Array(e);
        else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e)))
            throw new Error(ERROR)
    }
    e.length > 64 && (e = new Sha256(t,!0).update(e).array());
    var A = []
        , c = [];
    for (n = 0; n < 64; ++n) {
        var d = e[n] || 0;
        A[n] = 92 ^ d,
            c[n] = 54 ^ d
    }
    Sha256.call(this, t, i),
        this.update(c),
        this.oKeyPad = A,
        this.inner = !0,
        this.sharedMemory = i
}
Sha256.prototype.update = function(e) {
    if (!this.finalized) {
        var t, i = typeof e;
        if ("string" !== i) {
            if ("object" !== i)
                throw new Error(ERROR);
            if (null === e)
                throw new Error(ERROR);
            if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
                e = new Uint8Array(e);
            else if (!Array.isArray(e) && (!ARRAY_BUFFER || !ArrayBuffer.isView(e)))
                throw new Error(ERROR);
            t = !0
        }
        var n, o, r = 0, a = e.length, l = this.blocks;
        while (r < a) {
            if (this.hashed && (this.hashed = !1,
                l[0] = this.block,
                l[16] = l[1] = l[2] = l[3] = l[4] = l[5] = l[6] = l[7] = l[8] = l[9] = l[10] = l[11] = l[12] = l[13] = l[14] = l[15] = 0),
                t)
                for (o = this.start; r < a && o < 64; ++r)
                    l[o >> 2] |= e[r] << SHIFT[3 & o++];
            else
                for (o = this.start; r < a && o < 64; ++r)
                    n = e.charCodeAt(r),
                        n < 128 ? l[o >> 2] |= n << SHIFT[3 & o++] : n < 2048 ? (l[o >> 2] |= (192 | n >> 6) << SHIFT[3 & o++],
                            l[o >> 2] |= (128 | 63 & n) << SHIFT[3 & o++]) : n < 55296 || n >= 57344 ? (l[o >> 2] |= (224 | n >> 12) << SHIFT[3 & o++],
                            l[o >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & o++],
                            l[o >> 2] |= (128 | 63 & n) << SHIFT[3 & o++]) : (n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(++r)),
                            l[o >> 2] |= (240 | n >> 18) << SHIFT[3 & o++],
                            l[o >> 2] |= (128 | n >> 12 & 63) << SHIFT[3 & o++],
                            l[o >> 2] |= (128 | n >> 6 & 63) << SHIFT[3 & o++],
                            l[o >> 2] |= (128 | 63 & n) << SHIFT[3 & o++]);
            this.lastByteIndex = o,
                this.bytes += o - this.start,
                o >= 64 ? (this.block = l[16],
                    this.start = o - 64,
                    this.hash(),
                    this.hashed = !0) : this.start = o
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
            this.bytes = this.bytes % 4294967296),
            this
    }
}
    ,
    Sha256.prototype.finalize = function() {
        if (!this.finalized) {
            this.finalized = !0;
            var e = this.blocks
                , t = this.lastByteIndex;
            e[16] = this.block,
                e[t >> 2] |= EXTRA[3 & t],
                this.block = e[16],
            t >= 56 && (this.hashed || this.hash(),
                e[0] = this.block,
                e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0),
                e[14] = this.hBytes << 3 | this.bytes >>> 29,
                e[15] = this.bytes << 3,
                this.hash()
        }
    }
    ,
    Sha256.prototype.hash = function() {
        var e, t, i, n, o, r, a, l, s, A, c, d = this.h0, p = this.h1, u = this.h2, f = this.h3, h = this.h4, m = this.h5, g = this.h6, b = this.h7, C = this.blocks;
        for (e = 16; e < 64; ++e)
            o = C[e - 15],
                t = (o >>> 7 | o << 25) ^ (o >>> 18 | o << 14) ^ o >>> 3,
                o = C[e - 2],
                i = (o >>> 17 | o << 15) ^ (o >>> 19 | o << 13) ^ o >>> 10,
                C[e] = C[e - 16] + t + C[e - 7] + i << 0;
        for (c = p & u,
                 e = 0; e < 64; e += 4)
            this.first ? (this.is224 ? (l = 300032,
                o = C[0] - 1413257819,
                b = o - 150054599 << 0,
                f = o + 24177077 << 0) : (l = 704751109,
                o = C[0] - 210244248,
                b = o - 1521486534 << 0,
                f = o + 143694565 << 0),
                this.first = !1) : (t = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10),
                i = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7),
                l = d & p,
                n = l ^ d & u ^ c,
                a = h & m ^ ~h & g,
                o = b + i + a + K[e] + C[e],
                r = t + n,
                b = f + o << 0,
                f = o + r << 0),
                t = (f >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10),
                i = (b >>> 6 | b << 26) ^ (b >>> 11 | b << 21) ^ (b >>> 25 | b << 7),
                s = f & d,
                n = s ^ f & p ^ l,
                a = b & h ^ ~b & m,
                o = g + i + a + K[e + 1] + C[e + 1],
                r = t + n,
                g = u + o << 0,
                u = o + r << 0,
                t = (u >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10),
                i = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7),
                A = u & f,
                n = A ^ u & d ^ s,
                a = g & b ^ ~g & h,
                o = m + i + a + K[e + 2] + C[e + 2],
                r = t + n,
                m = p + o << 0,
                p = o + r << 0,
                t = (p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10),
                i = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7),
                c = p & u,
                n = c ^ p & f ^ A,
                a = m & g ^ ~m & b,
                o = h + i + a + K[e + 3] + C[e + 3],
                r = t + n,
                h = d + o << 0,
                d = o + r << 0;
        this.h0 = this.h0 + d << 0,
            this.h1 = this.h1 + p << 0,
            this.h2 = this.h2 + u << 0,
            this.h3 = this.h3 + f << 0,
            this.h4 = this.h4 + h << 0,
            this.h5 = this.h5 + m << 0,
            this.h6 = this.h6 + g << 0,
            this.h7 = this.h7 + b << 0
    }
    ,
    Sha256.prototype.hex = function() {
        this.finalize();
        var e = this.h0
            , t = this.h1
            , i = this.h2
            , n = this.h3
            , o = this.h4
            , r = this.h5
            , a = this.h6
            , l = this.h7
            , s = HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[i >> 28 & 15] + HEX_CHARS[i >> 24 & 15] + HEX_CHARS[i >> 20 & 15] + HEX_CHARS[i >> 16 & 15] + HEX_CHARS[i >> 12 & 15] + HEX_CHARS[i >> 8 & 15] + HEX_CHARS[i >> 4 & 15] + HEX_CHARS[15 & i] + HEX_CHARS[n >> 28 & 15] + HEX_CHARS[n >> 24 & 15] + HEX_CHARS[n >> 20 & 15] + HEX_CHARS[n >> 16 & 15] + HEX_CHARS[n >> 12 & 15] + HEX_CHARS[n >> 8 & 15] + HEX_CHARS[n >> 4 & 15] + HEX_CHARS[15 & n] + HEX_CHARS[o >> 28 & 15] + HEX_CHARS[o >> 24 & 15] + HEX_CHARS[o >> 20 & 15] + HEX_CHARS[o >> 16 & 15] + HEX_CHARS[o >> 12 & 15] + HEX_CHARS[o >> 8 & 15] + HEX_CHARS[o >> 4 & 15] + HEX_CHARS[15 & o] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a];
        return this.is224 || (s += HEX_CHARS[l >> 28 & 15] + HEX_CHARS[l >> 24 & 15] + HEX_CHARS[l >> 20 & 15] + HEX_CHARS[l >> 16 & 15] + HEX_CHARS[l >> 12 & 15] + HEX_CHARS[l >> 8 & 15] + HEX_CHARS[l >> 4 & 15] + HEX_CHARS[15 & l]),
            s
    }
    ,
    Sha256.prototype.toString = Sha256.prototype.hex,
    Sha256.prototype.digest = function() {
        this.finalize();
        var e = this.h0
            , t = this.h1
            , i = this.h2
            , n = this.h3
            , o = this.h4
            , r = this.h5
            , a = this.h6
            , l = this.h7
            , s = [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a];
        return this.is224 || s.push(l >> 24 & 255, l >> 16 & 255, l >> 8 & 255, 255 & l),
            s
    }
    ,
    Sha256.prototype.array = Sha256.prototype.digest,
    Sha256.prototype.arrayBuffer = function() {
        this.finalize();
        var e = new ArrayBuffer(this.is224 ? 28 : 32)
            , t = new DataView(e);
        return t.setUint32(0, this.h0),
            t.setUint32(4, this.h1),
            t.setUint32(8, this.h2),
            t.setUint32(12, this.h3),
            t.setUint32(16, this.h4),
            t.setUint32(20, this.h5),
            t.setUint32(24, this.h6),
        this.is224 || t.setUint32(28, this.h7),
            e
    }
    ,
    HmacSha256.prototype = new Sha256,
    HmacSha256.prototype.finalize = function() {
        if (Sha256.prototype.finalize.call(this),
            this.inner) {
            this.inner = !1;
            var e = this.array();
            Sha256.call(this, this.is224, this.sharedMemory),
                this.update(this.oKeyPad),
                this.update(e),
                Sha256.prototype.finalize.call(this)
        }
    }


var s = (createMethod(),
// 不同的系统，appcode值不同
//     {
//     appCode: "0c5efcc7a3d8409cbdc3657534da13f0",
//         version: "1.0.0",
//         appSecret: "35a900425c6f4357ae98987315cea876",
//         publicKey: "BOyHzlePMo8Xv4GN3CmoFSXLBjJCPRZKM0HhZcs2Kc63qN15+2CSxc9z6QLmaNcwbEZ7Mw/lDRrvs2g3CAODJfc=",
//         privateKey: "MYpJy20V9sHF0Gf0C16e/tVWBXRYjYYbDkzjecS4HVI=",
//         publicKeyType: "base64",
//         privateKeyType: "base64"
// })   //
{
    appCode: "T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ",
    version: "1.0.0",
    appSecret: "NMVFVILMKT13GEMD3BKPKCTBOQBPZR2P",
    publicKey: "BEKaw3Qtc31LG/hTPHFPlriKuAn/nzTWl8LiRxLw4iQiSUIyuglptFxNkdCiNXcXvkqTH79Rh/A2sEFU6hjeK3k=",
    privateKey: "AJxKNdmspMaPGj+onJNoQ0cgWk2E3CYFWKBJhpcJrAtC",
    publicKeyType: "base64",
    privateKeyType: "base64"
})
, A = s.appCode
    , c = s.appSecret
    , d = s.publicKey
    , p = s.privateKey
    , t = createMethod()
    , o = Date.now()
    , r = Object(n1["a"])()
    , a = o + r + o;


function y(t, i) {
    var n = 16 - parseInt(i.length % 16);
    i = i.concat(new Array(n).fill(n));
    var o = l.default.encrypt(i, t);
    return e_.Buffer.from(o).toString("hex")
}

function w(e, t) {
    var i = E(e.substr(0, 16))
        , n = E(t)
        , o = y(i, n)
        , r = o.toUpperCase().substr(0, 16)
        , a = E(r);
    return a
}
function E(e) {
    var t, i, n = new Array;
    t = e.length;
    for (var o = 0; o < t; o++)
        i = e.charCodeAt(o),
            i >= 65536 && i <= 1114111 ? (n.push(i >> 18 & 7 | 240),
                n.push(i >> 12 & 63 | 128),
                n.push(i >> 6 & 63 | 128),
                n.push(63 & i | 128)) : i >= 2048 && i <= 65535 ? (n.push(i >> 12 & 15 | 224),
                n.push(i >> 6 & 63 | 128),
                n.push(63 & i | 128)) : i >= 128 && i <= 2047 ? (n.push(i >> 6 & 31 | 192),
                n.push(63 & i | 128)) : n.push(255 & i);
    return n
}

function k(e) {
    try {
        var i = E(e.data.data && JSON.stringify(e.data.data));
        e.data.appCode && e.data.appCode !== A && (A = e.data.appCode);
        var n = w(A, c)
            , o = y(n, i);
        return o.toUpperCase()
    } catch (r) {
        console.log(r)
    }
}


function b(e, t) {
    var i = e.toUpperCase();
    switch (i) {
        case "SM2":
            return B(t);
        case "SM3":
            return v(t);
        case "SM4":
            return k(t);
        default:
            break
    }
}

function g(e) {
    var t = [];
    for (var i in e)
        if (e.hasOwnProperty(i) && (e[i] || "".concat(e[i])))
            if ("data" === i) {
                var n = Object.assign({}, e[i]);
                for (var o in n) {
                    if ("number" != typeof n[o] && "boolean" != typeof n[o] || (n[o] = "" + n[o]),
                    Array.isArray(n[o]) && !n[o].length && delete n[o],
                    Array.isArray(n[o]) && n[o].length > 0)
                        for (var r = 0; r < n[o].length; r++)
                            n[o][r] = h(n[o][r]);
                    null != n[o] && n[o] || delete n[o]
                }
                var a = h(n);
                t.push("".concat(i, "=").concat(JSON.stringify(a)))
            } else
                t.push("".concat(i, "=").concat(e[i]));
    return t.push("key=".concat(c)),
        t.join("&")
}

function h(e) {
    var t = new Array
        , i = 0;
    for (var n in e)
        t[i] = n,
            i++;
    var o = [].concat(t).sort()
        , r = {};
    for (var a in o)
        r[o[a]] = e[o[a]];
    return r
}

function m(e) {
    var t = {}
        , i = ["signData", "encData", "extra"];
    for (var n in e)
        e.hasOwnProperty(n) && !i.includes(n) && null != e[n] && (t[n] = e[n]);
    return t
}

function f(t) {
    try {
        var i = m(t.data)
            , n = h(i);
        n.data = h(n.data);
        var o = g(n)
            , a = sm2.doSignature(o, p, {
            hash: !0
        });
        return e_.Buffer.from(a, "hex").toString("base64")
    } catch (l) {
        console.log(l)
    }
}

function I(t, i) {
    var n = l.decrypt(i, t)
        , o = n[n.length - 1];
    return n = n.slice(0, n.length - o),
        e_.Buffer.from(n).toString("utf-8")
}

function getEnc(data){
    var e = {"data": data}
    return e.data = {
        data: e.data || {}
        },
        e.data["appId"] = s.appCode,
        e.data["version"] = s.version,
        e.data["encType"] = "SM4",
        e.data["signType"] = "SM2",
        e.data["timestamp"] = o,
        e.data["encData"] = b("SM4", e),
        e.data["signData"] = f(e),
        e.data = JSON.stringify({
            data: e.data
        }),
        e

}

function getDec(t){
    if (!t)
        return null;
    var i = e_.Buffer.from(t, "hex")
        , n = w(A, c)
        , o = I(n, i);
    return JSON.parse(o)
}

function getHeader(){
    var headers = {}
    return headers["x-tif-paasid"] = s.paasId,
        headers["x-tif-signature"] = t(a),
        headers["x-tif-timestamp"] = o,
        headers["x-tif-nonce"] = r,
        headers["Accept"] = "application/json",
        headers["contentType"] = "application/x-www-form-urlencoded",
        headers
}

// module.exports = {
//     getDec,
//     getHeader,
//     getEnc
//
// }

// encdata = "5AF97760635DA6772F044FB4C08D3276823810A8B64A39FF2B946BD5D121D073D37F3E56217F4D7962FE5698165549C150EA4A5674C1EBC71DE36AAE1D61788D5B02820889F962F5AD5299B3BBAD7CD6EB81FE3220B85E728871105F2BFEDE39DF4C80F61976670FBE18EF8CF09EE0E782255A494964852656FE37B32D113A9F2937D7491B642AD74D920ADD893461A3221942E9DB84836D96DA49255938803D8597E40DF88F2D3FE7E696700A07DF9DB6755DC5FB81966B68F1885916725D3CD30A0F9889300E6C2714D522E0F9A3B853580F921BA419371B0C9559BACF36BE8C5586B09125848EE70322F0E4CE8420E06F1F92D282B2CB5A7075276734197DB10443CAF41A51C6C1785039A8276F80AE74CA373A26A1055A5DFE4BA7D6B18F34D0068766F80CC85C76C00AA345CE46EC5FE630FC0CBB1A73D4F040658AB1870E4B29EB807804EAE2E49C9CF333905C9C716DABF6E3EF5554B664AE7E578EA74EDA281755EC10FBB5291CAC6B572225C236032CAA41620A324D2C6436A8521977C5261536910CED68FA3196EC5002C587D7CD1DAE416FC166F000FC7C6E37D830CCD958FF50617C9A870AD87407D9D009EC2B8C64C1AEA84B772FF60F50973D36699D157A4A294E61FF7C99BB02ED8CB8E46E58E304587BD08D60166010CAC2AE651C2D24BF76D0F611E6DB16BEEA271F7A361BF85016B4C7C00E2A31303222CA663AA6D676E2B6BE09738B11B4749E3805D9BAA5C80153216491E9EA1F0D3F0F997498651E6B177D7ED96E8C04A4EA0013A9330D55DB38E16F52EA49875EE98934BBA2F9263A82A293B3251AEE281936711973BC3791D12A63D4C6AC03DAA48FB611CB0C8A32082FAF97A900DA94ACCF0E2F9C0822E79ECA0680B92348E7E5F8FD942DA3918FD7D9272AFAC10DCEB6B2F02C6EBC88F9C06574F0598B7732145CE1CF280E75DE6EFA483A940A5E63883E3ED1174529AC1379205289361604750629942F41A30DA20497CD9D25BFDBB4805AD808550EE9CC434AD10D5BAE686020F6A8D684C4013F2D7F3F4D8E7AD3D74BF9317756DDF709E0DBD2F947C478710BAB9B3451454ABB6CB96A5119EE09C95A3E41F9AE8823341C7F983AA96CF0AEE17AE10F5064B78EF0FDB5094FAFDF203EC4BFAEED8F6F725D61998B9E1010637604A5A468308F9D99EF9C41E1C56CAF2A46D207EBB8F3F489E7354037953A39BF10AD0994629A71E5ECF829BD40E15DD7AA44B58FB5B2A0F81C2A913B276B33D92303B15FF346529B6E2B66325931196D0C3E49E0928C11F0677C9FBB9AD7610D506BA120C44CC09A4DB7B027A862C13D09A0A720343FA3426F6ADF448301CDCD0FD830ACE2A911F244D526BDDC930D07DEF4A46ABBB3850AADCD24D04869E60C39AD123813F8EE448A9ADCBF886C03788149A632088F6271363542305366022002666F1E411C5AD6CA5988AAC07A6D1C10D59160EF85858A60778A57A1C3EFF2C2286E2FC62E424E8102E8EF80BF645C5430AEA0C78B1B839C745EB6D2555B82415CF1540DB4AABEBCF526F47FBA0132751AC2ABA7E9CB7CED0261EC8E1A603A53129BA22306DD88E39ED335A036151D202E84D43CADED932E3338ACA4530FC319ADF58F38A250C14BCC919997750B1185F599A971442761BEFC3ECA22D55F6BAE572B807BB67859BEC243C5AA13863A0ED7DEAF4A99230FBC042149DB87C8292D28A152D78712154845C59AE245DB0385565ABCF1195B3DA8D17427669672B63803A576CCFD97041C7783C44C9DE8A6E8D62C5D148C64705B4F5A420BBC06543E1432DCE8A0D65008205E1DFA75A7194550C3376C9E6974B417134A891170FA4522269521C196668F593D9570D91968830A8E0383F5A3BBEEA292008109BC17147F7DC3CB377DCADB96ADE77575719A2BA5BFE70342EA9003E926240AC74DD7831B25ABB58F5BC9AB0FD46987ACCA06379D4596576BFF325584898F5AAAADDB88614099510CED8137AF86BC22F4335AAC190506F2E690FB708499BA32E65249E9AD4E8B208E93C52C5677D79D76C06F6002DEF32E75655AA03141E77ED3F7CE31C2295F8457885F4C6A54E848118AD2C1A13A38BADF0302C07D12075C3F95EB51BE944106D3DB884B325F21F0131F9D981265E8E19C3F17DF55A8809629C519C447D6B1FA902AEA160250E462555C306FBD9A12AB8DA7996BCDD6E84C9E453AFBD3582A1F3824458416908F3349C4FCDFC58BFDFEB8347C77C3D6E30A3BD0F379E29EB3B9BD47196F59D27A161A53AE68471D0CBCAE65EFE5BECE1A99FD06C2A71C1B63255F8BE4D897827A7C2E07F9B0552353CB4F8C978340AA717AC0FFD18B6FA8ABE99D50B913C7ED4D95609B13EAAE91B0F14E329133E0B0F77E8054C9133646632ACDBF96F585EF2A2FFF3E25B4D7120226C12A419FC44E59C42FF3781489E3C4EC806820D6C6E4351CBB4566E9D738FD6C69F241FBFC3867AC6098148F21B56796BFF883D9E0947D30D6F13179B41B0F212E1803A586E4D3B1BD6584AF860F5233269A11B81649C8130D7B75CA717E5D8848500E3C7F67708FCE06184F04CDECA676EED4BDC1AE53632EA66AE92EF984F8A74591EB1136EEACC06B202DA31258A511CA016CB12F6FB757528ACEF77C0CE1F4A35D0C696CC41C7EF0FB7AEEBDD861686444FBBF04AD9C73F3ED5E0499E9304A21A5519F07168CC4BB14C6B8ACAD8C2B394BFA60520F9CC17FBD6F55B20A09DC2DE5AD8DFCED82297CEF435D24FB83AAC95ACEE4AB60ACB1AC55BCF106BA78F04B2B376014DCDE8ADDAD983CAA22DC8C84FC2F19CD486DE4435C0829EAA2C811BDB9A7B1EA959A22D2A4E32279C7AA6014376434935170B65087AD23DC95775EDCAF7E5BD1AFB4A1CBD7965255326EE8C587042A6A874D693F83848E9FFC378ACA5370149187AA04A4B999EBC46F79FD37C0E2AF19D86F40697D2E3A0EBE30C2870EF1358EDE0B747C75935FE5DBA56D22232ACB0E4E8E03014139CF35ECB03B32908DA877557FB7343C30671FE17A8884354ADF420F8F05B7B79EFE7A922D6C1BDCBEBD1606338F4C38CD56BFC003E3287C854EA642135468905CFED141215D85E9436BC05383C219EC5FE630FC0CBB1A73D4F040658AB18743926D8E3FE912C5816CAAF60549DFA79C716DABF6E3EF5554B664AE7E578EA7A9AEDA2ED43ED1B32A74684F1E7D69AA7BFE03DE40901F2D976C5D0188AFA88233335D8E09B701842F00313A70159052481FB8EA0ED640DCF1B18F131869C089A7856E537F8827CC2431DA871DFBE6DB4403A6880EE8EF21515A27EF1A99840B82AC7250AF593C6D7FD2AE822D63E367FCA9FD53381C73BB60E830E4D6C9DE2014E3AA949845AE01CC82190671D1AE3E6BA110EB344A2CE8E4DBCB3C63561CF8E2453DFC034713C7EFF580C2CC2F667AFACAB0D219798A0A271768B610648A62BA480EFEF8AA61EEC092C8AB5F11AD23AEAACAD8B1522FFC2A10B3BC0B6406F50925A40C4337036C206F55072369FD98365DCF32CC54AA562E143F28CAE6DC47E85F6A9BA6C096651F47D61B98F6E6733CCE9A34DF6A87653B3C794AA6DD351259F9A4DA468982F369CD135865096BE8E70B4A72F0CA27667EEED557C782E827281C24A2F03865B40672F0EDB61E60218E377A2F25D05E8940C74E24CA15DDE5A2FCB479E2B7297236E561007B8928A3D271815C7D58558C0E3A657DF7164B9257FBA409263444CAA6B8E8AC9834BB2717147F7DC3CB377DCADB96ADE77575719A2BA5BFE70342EA9003E926240AC74DC36047A98704771A7A55DB7396E2AF618E89987FB1E41038DA6F2286D4B75C9AC92CD52DFE8286D46415AA7C10C51484F995AB7BDAECB77E5DC95C40BB079A29450FE20D3B513ACD5C6AA61E9E4081043FD409DD869A830E30AC855FA532CEB6D3B670E970164A05E7108EAE798CA4D5FD1226E92C1F29E7A69939AAA95255BA87F695476DD44C31BFEF404CBEEBE33BF6E5F7E7CF593544442307027D69E3C314AA60CF1FD6E5FC530D9128A8B557372E13BC08AA19536D54BDD5CF29B58615E0300D9038055D3E3B98A475CBFC37189E402489101BA8B40D2AEDEF46C13A2DD7C8FC6B7B822DA80D3839BDF334A081DF09E742838134794A06583A943B4A9CC9E962ECEB8272FC75AE683FDE806C3D7A6A548BBC6CA7E8C524C2EA85088E1198F44748DACEC4E0008ED46993DCEF681E01665ADF8BD7B4181B7C174244C20C7C2F7A35F4183220431E227E04D6AE6911646135042C7BDD6649C91A6B44A032399EBB2D3DB2E97AB7F492C9572D0A2C5A52B28381D92C97EC846D362C93EFACBA1AFCE93B0E4D4C7DDF49E8A6DB43166520F43D50991AD29D6E26FC8E0A771625459DEEEF541B1B9162A2AF6A11FEC8EA09A292027E815646E2274943F6689001D3DCFD7824E0D7537002F8553C89100925A40C4337036C206F55072369FD98365DCF32CC54AA562E143F28CAE6DC47A121DA88E17D4964879D9FC1047922D1F522556C175514FADDF2F874EE83800EC5396EB933CFA07C06FC4845D1C9A8521C18B6F101E8AE36787B57B22CDEC7D84FE4D93F655F4DD0AF0EC5ABBA168717E84359344DB62D2FC727EF41C62D6408A2FCB479E2B7297236E561007B8928A3C9E962ECEB8272FC75AE683FDE806C3D63E7846AC04296933D3995882AE94C02BBDDC306B0D0C90F50B44B32F9D0C92EF3A103B0F6B3575A9B670118D636A50E29902BCDC84BAD6A3143105FC93540368FC5AAB6BCDD2BFD764E4F6E73E570168C8ADEECF7BCF0EDFFFDB8B990DC352659256D68185B597F5320AEF461AB7E1E67659F170CE9B1781357398FAD11D61782310A2DBC8A4703FB5016ECC2A4F4E96C89CB1BD41FF3CC5840FAEFDF578475414B4F19C9F924987CC927948CA7FC583902C276D2FD8682E2CFFB6E3EBA81A81B8A288334807DBDFD2A4CBFC8B091E62F8F74ED12D16DF534BAE61738540B7A035D9DDDEC52A5CCE5946899F7D5AE833095300861B2548A95C38119F14AE24A45212EB6674D04B7EF067E61C6BE6177783F388FC313F67B71CCA21541D2CEB9AD69DF81D0023AAAD8F98C87347F38F9CF06B95E951C5C7FC949DBFF88F4845FD8FDBFE9B50A28886086EAFCAE721092D93FE09EA0A14D9A9FF50F499C9AB785BA011E4CE93DCC20B35E006714E1B5140458762321204F83410B1C49D1E12E49C25EFEF62C179E12F7295BA9FABCBD561BA4B3CCFFEBCB8AE33E40D545F23DDF7AE446A4CAF581D22C3F2374478A60D4BC66D4C4A947EEA37067B196E8E8F4791BE4CB016B3E6CC62D1305805316DAB059256D68185B597F5320AEF461AB7E1E682C7A4405E2FE8D772DD28D3E1F603E790BC911F265D690471F7EEC03D4EDE8985F9AA255C174AD4DA6FFC697423BBD7D2E3A0EBE30C2870EF1358EDE0B747C78273EEF3DBD7AE55509BCC1DCFDC6A57A4D2411720E12380602C87A6175344E651F42CC92F46A81DEF9FEE2BF97069E95FA3CEA9A1248599B86FD2BE4F861932CB3E2DC2B88EB74438A81C628EB79C9DD491B664DEC585EDEFFF0A678AE86A442558C7DA15624A2F2BB9D34EBF1519BDB129BE6BB06F59713FD7635D867AF1CA10F7596D084019F3013E52BF9370A796002727AC91197D42087F0713E4FE40B82310A2DBC8A4703FB5016ECC2A4F4E963DC0253FA35DBBAD9C5D025FF4233BC5CD92FA2950896A2C8C89E98DFAD82E656399098C300078432AEEFB762FA63071D044A7F04B2BAB557404579608BBC601C25DC3A414A39AFC6BEC507C5836713BD8D83A43B6540BF9DFCEBE9388B09C2A29BF3C60D6947B820898F43B66047BF62964FAA0D5A93FCB7E605AE3F6BB8CD76926D93DEFC4E0F4A631F470B2F00B1E8C66B3EBDAF74BD396ED969EE8B49B990C474FE85925C8291E6A0AED76AA9D03DBD24D0959A7672F057AB94DD25E27FA203C2389B2AEFC438F0EBF6156F91D20E69F9332DC30FFC489CDB6E802E722479E97649A9B298F18E37C92CF05760E0C206D08548617E605661E86EBAC67B29DA977F395E310A17A3D32F47B0BED27FD6AAC9C0E361D437B485EBF9C3FB965E4548765939573E50DA10B1AA8742E50AF667B29E2223672AB1A9C528D3A44DB9026BC6FB761FAA0FACB8BD3FB93D6396AE9A62D58F6084C73DDD2DD537344AE194B8C17FF00C5BAC344AE6A7F68D8EA44BA7CCF0C8386B2B73C061245749BAC3B133E7A04299A5C77EA0AE628BA05B0E6AB749C2D5292091EDA86A6EC7A61DAD5289CC37E1FB1E99136BB991E9DCEA66D591842F21C4CCBDD802C54647A919CBADDEBF3F8EE32D4C4728EF05852624E1A4B665E9202722F85D582CC58ED33C180E5DD31B5AFCA3979A11EB08C0ED9F38E1A6F89D2E00F8AAE5B48895B0D13224AD7F2EFFFE8E13CD302607FC11972D2570C35AD8E794DB1EDA44B52F3C3B3C1EB205D91B3A55F5E2298AE2ABA7709DB191B786B89720450F831C71A9FE39B6D45219231C34CCB224F10A81CD79A8BFDA81289CF5C1C94E16E04F284B91C10FB4805AD808550EE9CC434AD10D5BAE68604989D1F5A02B13A88E2AA00022DAE2DBAF67A76421808D09DFC6FCC25926B289B3E436311A32088CD9D554864ACD90363805D9BAA5C80153216491E9EA1F0D3F9D7ED4529DA891A675DB8ED1EE4683053A706F320A5DB17FB9C129D5B1124A151107F921866DAEAC243B0934D3CCD06835C024BBECC0D6F91090FCAE77D201C647D64FA5480D67051FC1D7CCE0CC5153A34FD2AC5987E8C35EA46D48F49FD96117BC82D2DC892D24AE42C771CC521A46ECC38104786693122F39A9AC86652148E8C057E7E752A4228155CAF7FACD5EBE62C046A6E0403CEDA08E67E7D2311B60FC2325964ADCDA065D85CE8ED96C5EB83690B8A9D24B793D75E01B590113BF77E67BC0EAD919D746A81EF5F336328F91BC7F7A589D3CA9B5524D402B7531286ABB5EA40516531E4F8CE470B8F3E994A9F112504E67955BF72510112F32842D266657CE43E38D92C8B34EC29942F538EAC9E6198AA2F01DF4BE8373D55D41C0F18A64A5039BEA6A2F79A240F9A206116DA920F1A00AAC525B6A27125EAA5A2AE607CACE185BAED645BB88C3609DE703B6756A3FB66000826ACE845F76E38D6E36047293F4DADFF70373D92F194B413F695545B2F5A40F4EE080DCCCB1B2E31B4AC67BE351D720C74A8B1F0D49842E0F1F95112CDE033F3659BD19E1222BB05D9BF5F36EF078AE342FFE6773BADD69EF386BA110EB344A2CE8E4DBCB3C63561CF89EAF6FC2FE959AA37B3525368F68C6A0062919757D7FD0CD389628E6CA74102489C04D4887ED40BABAA8725488605080B670B8672700D0FEA620A15ABC74A81BD1A757E1EE6FBFC7ADC15DEFCA4776B304618C33A84801D42777FCF7655B0F8D2E570F8D525D66266F0FAF8128B9C071F51BC88AD63244BA07A76C78E9E8D9F6686762FCC7E27C1F027A764BDAE4E3DBBCCC7DE94B30F3D162B205DED0630CC27D2E3A0EBE30C2870EF1358EDE0B747CB13D79C1F92E114EA745AD454E0CB8FE173033E99E3B3E1BD563855A529B9367A920F1A00AAC525B6A27125EAA5A2AE6C9E056008DA9B30D66DF6C47AF99DEC582BCC5B8E92D1F8D255734F1BDFBB809047293F4DADFF70373D92F194B413F693DADF5EC5A5221A2F63D09CAE6C2AA820CE38FB8B7E2E284DBC1AC405E47371F2E82474BE5E8AF827D207385BC613411627E6965FAEBAE4671EA84EB55BFC4E4EC5D19AC3153D22D17356E12C762B86C9587DC1C9AA13EEF751660A81502F7D47D4FE4921313DB617D3DD8B33967A73AB14B556FFC4185F595A81247E2812C83E67BC0EAD919D746A81EF5F336328F91BC7F7A589D3CA9B5524D402B7531286ABB5EA40516531E4F8CE470B8F3E994A9F112504E67955BF72510112F32842D266657CE43E38D92C8B34EC29942F538EAC9E6198AA2F01DF4BE8373D55D41C0F18A64A5039BEA6A2F79A240F9A206116DA920F1A00AAC525B6A27125EAA5A2AE607CACE185BAED645BB88C3609DE703B6756A3FB66000826ACE845F76E38D6E36047293F4DADFF70373D92F194B413F695545B2F5A40F4EE080DCCCB1B2E31B4AC67BE351D720C74A8B1F0D49842E0F1F95112CDE033F3659BD19E1222BB05D9BF52F91C2950A1C5153A2068171B5EEAF6BA110EB344A2CE8E4DBCB3C63561CF89EAF6FC2FE959AA37B3525368F68C6A07561B0AE8B444B809C9A285A18C8F70D89C04D4887ED40BABAA8725488605080F42DC5FE0C5A97BC7B2E908CCE046FC2D1A757E1EE6FBFC7ADC15DEFCA4776B38E3FCE39F27B8CFC9BB5401BE95E770156C6A0D0B3C03E4B8952BD3EA74EBEB69D558BB029C32265232BB06F4DC4EA57E59246E51540332155F8CF545D483A4EFD11531A60762B5BD32A3709AACB12A5221274D12E69B725C31E2FDC71F0FA739A2BA5BFE70342EA9003E926240AC74DC36047A98704771A7A55DB7396E2AF618E89987FB1E41038DA6F2286D4B75C9AD567BE35B6B0C68F692D05B9E1143EB93A7FDAF766119B1C95F551E8CE4664D906379D4596576BFF325584898F5AAAAD6D76F76C1D59E68EA72B267CDC76780CB6DA8107B9A5DE48CDFEC5F8087CAE9D9417524FB13B74EBFFD332576B81C74C8E74B431796D2647816F22F320B550009BB69BA8611FFD4DA7368C893C09BC0A432FCA826809E59ED20ABE826393164A9DE171BA26246C0B1D97FE2F6A077E15F816CD342380AF9A1B8D9FABCF3E3D84E9F1A5DD3B0CB012C980219577696CB8E3344E460FA3CFC583C7BA751269E5BB8CF7BED93DCDBFE58B0A8C6F101912C9E41A4C119255B3AEBBA2D7F1C1C9BF56615E646B8FC1518592C54DFD6EC48B107748EA8D48BFE96B3658D42C49D9EFB070D2C20208159F7FA7D69233BA448758BBF13BDD4DAD7725C1EC86992946D50137396C7A79F9AC96ABCB0BD176BC03472D43E44CB5869D2628C4250222DEC69FCEE8291726B2F2A4034FCE61ADA60B6D8E08D07ADA0F9883A2FFADF6B553B31835C024BBECC0D6F91090FCAE77D201C66F19CEF0D636D8E82CF221F4094385407E21B13E21B744FB96C1D90ED421C605A8D28779BB63CBD39503E7800BF48F9D1A2C8B03939B32C0AF7ED4CEFD7CF208BB04DC733093E8046DD55D0BAE875B26A29F302965EFB5D59D2A763CC52626237039F22DB95A37D55FE90A3EAFD90EA1FB35E5048DDB4CBD90BB19A8B278ED29167E77F96BC5186BFCCB6F8D34DAE952B258DA67CAC3A88B4446B393E973EC80F3DD1F712DF8B762B92624E51D801EFE8B5A80746F88C4BFB9B13E2429B6E9A91BC1B4FA9456FF6F5B33049B2C832A69F301F1A69099150B91784791CE119F5C4BA12343756CC7C975BF7AC909ED33E2335CA4028D4C7DC52D8430CF1B4205ED534C5AA1A1567499FBDC90E68BE2F1693684519FABE50015783E35CDF75C67FF7A0DCC48C15D05D73F6C142BC75C2FE5207282DAC29C17A5924F2E6DC857F28F20DD156BF74E34556DA4C7B468E40E89"
// data ={"addr":"","regnCode":"440000","medinsName":"","medinsLvCode":"","medinsTypeCode":"","openElec":"","pageNum":2,"pageSize":10}
// console.log(getEnc(data))
// // console.log(getEnc({"medinsLv":"","medinsName":"","medinsCode":"","admdvs":"","uscc":"","pageNo":7,"pageSize":10}))
// console.log(getHeader())
// console.log(getDec(encdata))

