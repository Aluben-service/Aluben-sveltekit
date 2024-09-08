(() => {
	var mm = Object.create;
	var ko = Object.defineProperty;
	var hm = Object.getOwnPropertyDescriptor;
	var bm = Object.getOwnPropertyNames;
	var gm = Object.getPrototypeOf,
		xm = Object.prototype.hasOwnProperty;
	var wc = ((e) =>
		typeof require < "u"
			? require
			: typeof Proxy < "u"
				? new Proxy(e, {
						get: (t, n) => (typeof require < "u" ? require : t)[n],
					})
				: e)(function (e) {
		if (typeof require < "u") return require.apply(this, arguments);
		throw Error('Dynamic require of "' + e + '" is not supported');
	});
	var Be = (e, t) => () => (
			t || e((t = { exports: {} }).exports, t), t.exports
		),
		te = (e, t) => {
			for (var n in t) ko(e, n, { get: t[n], enumerable: !0 });
		},
		Em = (e, t, n, i) => {
			if ((t && typeof t == "object") || typeof t == "function")
				for (let a of bm(t))
					!xm.call(e, a) &&
						a !== n &&
						ko(e, a, {
							get: () => t[a],
							enumerable: !(i = hm(t, a)) || i.enumerable,
						});
			return e;
		};
	var ht = (e, t, n) => (
		(n = e != null ? mm(gm(e)) : {}),
		Em(
			t || !e || !e.__esModule
				? ko(n, "default", { value: e, enumerable: !0 })
				: n,
			e,
		)
	);
	var Xn = Be((dv, _o) => {
		"use strict";
		var En = typeof Reflect == "object" ? Reflect : null,
			Ic =
				En && typeof En.apply == "function"
					? En.apply
					: function (t, n, i) {
							return Function.prototype.apply.call(t, n, i);
						},
			ji;
		En && typeof En.ownKeys == "function"
			? (ji = En.ownKeys)
			: Object.getOwnPropertySymbols
				? (ji = function (t) {
						return Object.getOwnPropertyNames(t).concat(
							Object.getOwnPropertySymbols(t),
						);
					})
				: (ji = function (t) {
						return Object.getOwnPropertyNames(t);
					});
		function vm(e) {
			console && console.warn && console.warn(e);
		}
		var Lc =
			Number.isNaN ||
			function (t) {
				return t !== t;
			};
		function ve() {
			ve.init.call(this);
		}
		_o.exports = ve;
		_o.exports.once = ym;
		ve.EventEmitter = ve;
		ve.prototype._events = void 0;
		ve.prototype._eventsCount = 0;
		ve.prototype._maxListeners = void 0;
		var Nc = 10;
		function qi(e) {
			if (typeof e != "function")
				throw new TypeError(
					'The "listener" argument must be of type Function. Received type ' +
						typeof e,
				);
		}
		Object.defineProperty(ve, "defaultMaxListeners", {
			enumerable: !0,
			get: function () {
				return Nc;
			},
			set: function (e) {
				if (typeof e != "number" || e < 0 || Lc(e))
					throw new RangeError(
						'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
							e +
							".",
					);
				Nc = e;
			},
		});
		ve.init = function () {
			(this._events === void 0 ||
				this._events === Object.getPrototypeOf(this)._events) &&
				((this._events = Object.create(null)), (this._eventsCount = 0)),
				(this._maxListeners = this._maxListeners || void 0);
		};
		ve.prototype.setMaxListeners = function (t) {
			if (typeof t != "number" || t < 0 || Lc(t))
				throw new RangeError(
					'The value of "n" is out of range. It must be a non-negative number. Received ' +
						t +
						".",
				);
			return (this._maxListeners = t), this;
		};
		function Pc(e) {
			return e._maxListeners === void 0
				? ve.defaultMaxListeners
				: e._maxListeners;
		}
		ve.prototype.getMaxListeners = function () {
			return Pc(this);
		};
		ve.prototype.emit = function (t) {
			for (var n = [], i = 1; i < arguments.length; i++)
				n.push(arguments[i]);
			var a = t === "error",
				o = this._events;
			if (o !== void 0) a = a && o.error === void 0;
			else if (!a) return !1;
			if (a) {
				var s;
				if ((n.length > 0 && (s = n[0]), s instanceof Error)) throw s;
				var r = new Error(
					"Unhandled error." + (s ? " (" + s.message + ")" : ""),
				);
				throw ((r.context = s), r);
			}
			var c = o[t];
			if (c === void 0) return !1;
			if (typeof c == "function") Ic(c, this, n);
			else
				for (var l = c.length, d = Mc(c, l), i = 0; i < l; ++i)
					Ic(d[i], this, n);
			return !0;
		};
		function Rc(e, t, n, i) {
			var a, o, s;
			if (
				(qi(n),
				(o = e._events),
				o === void 0
					? ((o = e._events = Object.create(null)),
						(e._eventsCount = 0))
					: (o.newListener !== void 0 &&
							(e.emit(
								"newListener",
								t,
								n.listener ? n.listener : n,
							),
							(o = e._events)),
						(s = o[t])),
				s === void 0)
			)
				(s = o[t] = n), ++e._eventsCount;
			else if (
				(typeof s == "function"
					? (s = o[t] = i ? [n, s] : [s, n])
					: i
						? s.unshift(n)
						: s.push(n),
				(a = Pc(e)),
				a > 0 && s.length > a && !s.warned)
			) {
				s.warned = !0;
				var r = new Error(
					"Possible EventEmitter memory leak detected. " +
						s.length +
						" " +
						String(t) +
						" listeners added. Use emitter.setMaxListeners() to increase limit",
				);
				(r.name = "MaxListenersExceededWarning"),
					(r.emitter = e),
					(r.type = t),
					(r.count = s.length),
					vm(r);
			}
			return e;
		}
		ve.prototype.addListener = function (t, n) {
			return Rc(this, t, n, !1);
		};
		ve.prototype.on = ve.prototype.addListener;
		ve.prototype.prependListener = function (t, n) {
			return Rc(this, t, n, !0);
		};
		function Am() {
			if (!this.fired)
				return (
					this.target.removeListener(this.type, this.wrapFn),
					(this.fired = !0),
					arguments.length === 0
						? this.listener.call(this.target)
						: this.listener.apply(this.target, arguments)
				);
		}
		function Oc(e, t, n) {
			var i = {
					fired: !1,
					wrapFn: void 0,
					target: e,
					type: t,
					listener: n,
				},
				a = Am.bind(i);
			return (a.listener = n), (i.wrapFn = a), a;
		}
		ve.prototype.once = function (t, n) {
			return qi(n), this.on(t, Oc(this, t, n)), this;
		};
		ve.prototype.prependOnceListener = function (t, n) {
			return qi(n), this.prependListener(t, Oc(this, t, n)), this;
		};
		ve.prototype.removeListener = function (t, n) {
			var i, a, o, s, r;
			if ((qi(n), (a = this._events), a === void 0)) return this;
			if (((i = a[t]), i === void 0)) return this;
			if (i === n || i.listener === n)
				--this._eventsCount === 0
					? (this._events = Object.create(null))
					: (delete a[t],
						a.removeListener &&
							this.emit("removeListener", t, i.listener || n));
			else if (typeof i != "function") {
				for (o = -1, s = i.length - 1; s >= 0; s--)
					if (i[s] === n || i[s].listener === n) {
						(r = i[s].listener), (o = s);
						break;
					}
				if (o < 0) return this;
				o === 0 ? i.shift() : Tm(i, o),
					i.length === 1 && (a[t] = i[0]),
					a.removeListener !== void 0 &&
						this.emit("removeListener", t, r || n);
			}
			return this;
		};
		ve.prototype.off = ve.prototype.removeListener;
		ve.prototype.removeAllListeners = function (t) {
			var n, i, a;
			if (((i = this._events), i === void 0)) return this;
			if (i.removeListener === void 0)
				return (
					arguments.length === 0
						? ((this._events = Object.create(null)),
							(this._eventsCount = 0))
						: i[t] !== void 0 &&
							(--this._eventsCount === 0
								? (this._events = Object.create(null))
								: delete i[t]),
					this
				);
			if (arguments.length === 0) {
				var o = Object.keys(i),
					s;
				for (a = 0; a < o.length; ++a)
					(s = o[a]),
						s !== "removeListener" && this.removeAllListeners(s);
				return (
					this.removeAllListeners("removeListener"),
					(this._events = Object.create(null)),
					(this._eventsCount = 0),
					this
				);
			}
			if (((n = i[t]), typeof n == "function")) this.removeListener(t, n);
			else if (n !== void 0)
				for (a = n.length - 1; a >= 0; a--)
					this.removeListener(t, n[a]);
			return this;
		};
		function Bc(e, t, n) {
			var i = e._events;
			if (i === void 0) return [];
			var a = i[t];
			return a === void 0
				? []
				: typeof a == "function"
					? n
						? [a.listener || a]
						: [a]
					: n
						? Cm(a)
						: Mc(a, a.length);
		}
		ve.prototype.listeners = function (t) {
			return Bc(this, t, !0);
		};
		ve.prototype.rawListeners = function (t) {
			return Bc(this, t, !1);
		};
		ve.listenerCount = function (e, t) {
			return typeof e.listenerCount == "function"
				? e.listenerCount(t)
				: Fc.call(e, t);
		};
		ve.prototype.listenerCount = Fc;
		function Fc(e) {
			var t = this._events;
			if (t !== void 0) {
				var n = t[e];
				if (typeof n == "function") return 1;
				if (n !== void 0) return n.length;
			}
			return 0;
		}
		ve.prototype.eventNames = function () {
			return this._eventsCount > 0 ? ji(this._events) : [];
		};
		function Mc(e, t) {
			for (var n = new Array(t), i = 0; i < t; ++i) n[i] = e[i];
			return n;
		}
		function Tm(e, t) {
			for (; t + 1 < e.length; t++) e[t] = e[t + 1];
			e.pop();
		}
		function Cm(e) {
			for (var t = new Array(e.length), n = 0; n < t.length; ++n)
				t[n] = e[n].listener || e[n];
			return t;
		}
		function ym(e, t) {
			return new Promise(function (n, i) {
				function a(s) {
					e.removeListener(t, o), i(s);
				}
				function o() {
					typeof e.removeListener == "function" &&
						e.removeListener("error", a),
						n([].slice.call(arguments));
				}
				Uc(e, t, o, { once: !0 }),
					t !== "error" && km(e, a, { once: !0 });
			});
		}
		function km(e, t, n) {
			typeof e.on == "function" && Uc(e, "error", t, n);
		}
		function Uc(e, t, n, i) {
			if (typeof e.on == "function") i.once ? e.once(t, n) : e.on(t, n);
			else if (typeof e.addEventListener == "function")
				e.addEventListener(t, function a(o) {
					i.once && e.removeEventListener(t, a), n(o);
				});
			else
				throw new TypeError(
					'The "emitter" argument must be of type EventEmitter. Received type ' +
						typeof e,
				);
		}
	});
	var Xl = Be((is) => {
		var Gl =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
				"",
			);
		is.encode = function (e) {
			if (0 <= e && e < Gl.length) return Gl[e];
			throw new TypeError("Must be between 0 and 63: " + e);
		};
		is.decode = function (e) {
			var t = 65,
				n = 90,
				i = 97,
				a = 122,
				o = 48,
				s = 57,
				r = 43,
				c = 47,
				l = 26,
				d = 52;
			return t <= e && e <= n
				? e - t
				: i <= e && e <= a
					? e - i + l
					: o <= e && e <= s
						? e - o + d
						: e == r
							? 62
							: e == c
								? 63
								: -1;
		};
	});
	var $l = Be((os) => {
		var Kl = Xl(),
			as = 5,
			Ql = 1 << as,
			Jl = Ql - 1,
			Zl = Ql;
		function ch(e) {
			return e < 0 ? (-e << 1) + 1 : (e << 1) + 0;
		}
		function lh(e) {
			var t = (e & 1) === 1,
				n = e >> 1;
			return t ? -n : n;
		}
		os.encode = function (t) {
			var n = "",
				i,
				a = ch(t);
			do
				(i = a & Jl),
					(a >>>= as),
					a > 0 && (i |= Zl),
					(n += Kl.encode(i));
			while (a > 0);
			return n;
		};
		os.decode = function (t, n, i) {
			var a = t.length,
				o = 0,
				s = 0,
				r,
				c;
			do {
				if (n >= a)
					throw new Error(
						"Expected more digits in base 64 VLQ value.",
					);
				if (((c = Kl.decode(t.charCodeAt(n++))), c === -1))
					throw new Error("Invalid base64 digit: " + t.charAt(n - 1));
				(r = !!(c & Zl)), (c &= Jl), (o = o + (c << s)), (s += as);
			} while (r);
			(i.value = lh(o)), (i.rest = n);
		};
	});
	var xa = Be((We) => {
		function dh(e, t, n) {
			if (t in e) return e[t];
			if (arguments.length === 3) return n;
			throw new Error('"' + t + '" is a required argument.');
		}
		We.getArg = dh;
		var e0 =
				/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
			ph = /^data:.+\,.+$/;
		function bi(e) {
			var t = e.match(e0);
			return t
				? {
						scheme: t[1],
						auth: t[2],
						host: t[3],
						port: t[4],
						path: t[5],
					}
				: null;
		}
		We.urlParse = bi;
		function Dn(e) {
			var t = "";
			return (
				e.scheme && (t += e.scheme + ":"),
				(t += "//"),
				e.auth && (t += e.auth + "@"),
				e.host && (t += e.host),
				e.port && (t += ":" + e.port),
				e.path && (t += e.path),
				t
			);
		}
		We.urlGenerate = Dn;
		var fh = 32;
		function mh(e) {
			var t = [];
			return function (n) {
				for (var i = 0; i < t.length; i++)
					if (t[i].input === n) {
						var a = t[0];
						return (t[0] = t[i]), (t[i] = a), t[0].result;
					}
				var o = e(n);
				return (
					t.unshift({ input: n, result: o }),
					t.length > fh && t.pop(),
					o
				);
			};
		}
		var ss = mh(function (t) {
			var n = t,
				i = bi(t);
			if (i) {
				if (!i.path) return t;
				n = i.path;
			}
			for (var a = We.isAbsolute(n), o = [], s = 0, r = 0; ; )
				if (((s = r), (r = n.indexOf("/", s)), r === -1)) {
					o.push(n.slice(s));
					break;
				} else
					for (o.push(n.slice(s, r)); r < n.length && n[r] === "/"; )
						r++;
			for (var c, l = 0, r = o.length - 1; r >= 0; r--)
				(c = o[r]),
					c === "."
						? o.splice(r, 1)
						: c === ".."
							? l++
							: l > 0 &&
								(c === ""
									? (o.splice(r + 1, l), (l = 0))
									: (o.splice(r, 2), l--));
			return (
				(n = o.join("/")),
				n === "" && (n = a ? "/" : "."),
				i ? ((i.path = n), Dn(i)) : n
			);
		});
		We.normalize = ss;
		function t0(e, t) {
			e === "" && (e = "."), t === "" && (t = ".");
			var n = bi(t),
				i = bi(e);
			if ((i && (e = i.path || "/"), n && !n.scheme))
				return i && (n.scheme = i.scheme), Dn(n);
			if (n || t.match(ph)) return t;
			if (i && !i.host && !i.path) return (i.host = t), Dn(i);
			var a =
				t.charAt(0) === "/" ? t : ss(e.replace(/\/+$/, "") + "/" + t);
			return i ? ((i.path = a), Dn(i)) : a;
		}
		We.join = t0;
		We.isAbsolute = function (e) {
			return e.charAt(0) === "/" || e0.test(e);
		};
		function hh(e, t) {
			e === "" && (e = "."), (e = e.replace(/\/$/, ""));
			for (var n = 0; t.indexOf(e + "/") !== 0; ) {
				var i = e.lastIndexOf("/");
				if (
					i < 0 ||
					((e = e.slice(0, i)), e.match(/^([^\/]+:\/)?\/*$/))
				)
					return t;
				++n;
			}
			return Array(n + 1).join("../") + t.substr(e.length + 1);
		}
		We.relative = hh;
		var n0 = (function () {
			var e = Object.create(null);
			return !("__proto__" in e);
		})();
		function i0(e) {
			return e;
		}
		function bh(e) {
			return a0(e) ? "$" + e : e;
		}
		We.toSetString = n0 ? i0 : bh;
		function gh(e) {
			return a0(e) ? e.slice(1) : e;
		}
		We.fromSetString = n0 ? i0 : gh;
		function a0(e) {
			if (!e) return !1;
			var t = e.length;
			if (
				t < 9 ||
				e.charCodeAt(t - 1) !== 95 ||
				e.charCodeAt(t - 2) !== 95 ||
				e.charCodeAt(t - 3) !== 111 ||
				e.charCodeAt(t - 4) !== 116 ||
				e.charCodeAt(t - 5) !== 111 ||
				e.charCodeAt(t - 6) !== 114 ||
				e.charCodeAt(t - 7) !== 112 ||
				e.charCodeAt(t - 8) !== 95 ||
				e.charCodeAt(t - 9) !== 95
			)
				return !1;
			for (var n = t - 10; n >= 0; n--)
				if (e.charCodeAt(n) !== 36) return !1;
			return !0;
		}
		function xh(e, t, n) {
			var i = jt(e.source, t.source);
			return i !== 0 ||
				((i = e.originalLine - t.originalLine), i !== 0) ||
				((i = e.originalColumn - t.originalColumn), i !== 0 || n) ||
				((i = e.generatedColumn - t.generatedColumn), i !== 0) ||
				((i = e.generatedLine - t.generatedLine), i !== 0)
				? i
				: jt(e.name, t.name);
		}
		We.compareByOriginalPositions = xh;
		function Eh(e, t, n) {
			var i;
			return (
				(i = e.originalLine - t.originalLine),
				i !== 0 ||
				((i = e.originalColumn - t.originalColumn), i !== 0 || n) ||
				((i = e.generatedColumn - t.generatedColumn), i !== 0) ||
				((i = e.generatedLine - t.generatedLine), i !== 0)
					? i
					: jt(e.name, t.name)
			);
		}
		We.compareByOriginalPositionsNoSource = Eh;
		function vh(e, t, n) {
			var i = e.generatedLine - t.generatedLine;
			return i !== 0 ||
				((i = e.generatedColumn - t.generatedColumn), i !== 0 || n) ||
				((i = jt(e.source, t.source)), i !== 0) ||
				((i = e.originalLine - t.originalLine), i !== 0) ||
				((i = e.originalColumn - t.originalColumn), i !== 0)
				? i
				: jt(e.name, t.name);
		}
		We.compareByGeneratedPositionsDeflated = vh;
		function Ah(e, t, n) {
			var i = e.generatedColumn - t.generatedColumn;
			return i !== 0 ||
				n ||
				((i = jt(e.source, t.source)), i !== 0) ||
				((i = e.originalLine - t.originalLine), i !== 0) ||
				((i = e.originalColumn - t.originalColumn), i !== 0)
				? i
				: jt(e.name, t.name);
		}
		We.compareByGeneratedPositionsDeflatedNoLine = Ah;
		function jt(e, t) {
			return e === t
				? 0
				: e === null
					? 1
					: t === null
						? -1
						: e > t
							? 1
							: -1;
		}
		function Th(e, t) {
			var n = e.generatedLine - t.generatedLine;
			return n !== 0 ||
				((n = e.generatedColumn - t.generatedColumn), n !== 0) ||
				((n = jt(e.source, t.source)), n !== 0) ||
				((n = e.originalLine - t.originalLine), n !== 0) ||
				((n = e.originalColumn - t.originalColumn), n !== 0)
				? n
				: jt(e.name, t.name);
		}
		We.compareByGeneratedPositionsInflated = Th;
		function Ch(e) {
			return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""));
		}
		We.parseSourceMapInput = Ch;
		function yh(e, t, n) {
			if (
				((t = t || ""),
				e &&
					(e[e.length - 1] !== "/" && t[0] !== "/" && (e += "/"),
					(t = e + t)),
				n)
			) {
				var i = bi(n);
				if (!i) throw new Error("sourceMapURL could not be parsed");
				if (i.path) {
					var a = i.path.lastIndexOf("/");
					a >= 0 && (i.path = i.path.substring(0, a + 1));
				}
				t = t0(Dn(i), t);
			}
			return ss(t);
		}
		We.computeSourceURL = yh;
	});
	var s0 = Be((o0) => {
		var rs = xa(),
			us = Object.prototype.hasOwnProperty,
			ln = typeof Map < "u";
		function qt() {
			(this._array = []),
				(this._set = ln ? new Map() : Object.create(null));
		}
		qt.fromArray = function (t, n) {
			for (var i = new qt(), a = 0, o = t.length; a < o; a++)
				i.add(t[a], n);
			return i;
		};
		qt.prototype.size = function () {
			return ln
				? this._set.size
				: Object.getOwnPropertyNames(this._set).length;
		};
		qt.prototype.add = function (t, n) {
			var i = ln ? t : rs.toSetString(t),
				a = ln ? this.has(t) : us.call(this._set, i),
				o = this._array.length;
			(!a || n) && this._array.push(t),
				a || (ln ? this._set.set(t, o) : (this._set[i] = o));
		};
		qt.prototype.has = function (t) {
			if (ln) return this._set.has(t);
			var n = rs.toSetString(t);
			return us.call(this._set, n);
		};
		qt.prototype.indexOf = function (t) {
			if (ln) {
				var n = this._set.get(t);
				if (n >= 0) return n;
			} else {
				var i = rs.toSetString(t);
				if (us.call(this._set, i)) return this._set[i];
			}
			throw new Error('"' + t + '" is not in the set.');
		};
		qt.prototype.at = function (t) {
			if (t >= 0 && t < this._array.length) return this._array[t];
			throw new Error("No element indexed by " + t);
		};
		qt.prototype.toArray = function () {
			return this._array.slice();
		};
		o0.ArraySet = qt;
	});
	var c0 = Be((u0) => {
		var r0 = xa();
		function kh(e, t) {
			var n = e.generatedLine,
				i = t.generatedLine,
				a = e.generatedColumn,
				o = t.generatedColumn;
			return (
				i > n ||
				(i == n && o >= a) ||
				r0.compareByGeneratedPositionsInflated(e, t) <= 0
			);
		}
		function Ea() {
			(this._array = []),
				(this._sorted = !0),
				(this._last = { generatedLine: -1, generatedColumn: 0 });
		}
		Ea.prototype.unsortedForEach = function (t, n) {
			this._array.forEach(t, n);
		};
		Ea.prototype.add = function (t) {
			kh(this._last, t)
				? ((this._last = t), this._array.push(t))
				: ((this._sorted = !1), this._array.push(t));
		};
		Ea.prototype.toArray = function () {
			return (
				this._sorted ||
					(this._array.sort(r0.compareByGeneratedPositionsInflated),
					(this._sorted = !0)),
				this._array
			);
		};
		u0.MappingList = Ea;
	});
	var d0 = Be((l0) => {
		var gi = $l(),
			je = xa(),
			va = s0().ArraySet,
			_h = c0().MappingList;
		function xt(e) {
			e || (e = {}),
				(this._file = je.getArg(e, "file", null)),
				(this._sourceRoot = je.getArg(e, "sourceRoot", null)),
				(this._skipValidation = je.getArg(e, "skipValidation", !1)),
				(this._sources = new va()),
				(this._names = new va()),
				(this._mappings = new _h()),
				(this._sourcesContents = null);
		}
		xt.prototype._version = 3;
		xt.fromSourceMap = function (t) {
			var n = t.sourceRoot,
				i = new xt({ file: t.file, sourceRoot: n });
			return (
				t.eachMapping(function (a) {
					var o = {
						generated: {
							line: a.generatedLine,
							column: a.generatedColumn,
						},
					};
					a.source != null &&
						((o.source = a.source),
						n != null && (o.source = je.relative(n, o.source)),
						(o.original = {
							line: a.originalLine,
							column: a.originalColumn,
						}),
						a.name != null && (o.name = a.name)),
						i.addMapping(o);
				}),
				t.sources.forEach(function (a) {
					var o = a;
					n !== null && (o = je.relative(n, a)),
						i._sources.has(o) || i._sources.add(o);
					var s = t.sourceContentFor(a);
					s != null && i.setSourceContent(a, s);
				}),
				i
			);
		};
		xt.prototype.addMapping = function (t) {
			var n = je.getArg(t, "generated"),
				i = je.getArg(t, "original", null),
				a = je.getArg(t, "source", null),
				o = je.getArg(t, "name", null);
			this._skipValidation || this._validateMapping(n, i, a, o),
				a != null &&
					((a = String(a)),
					this._sources.has(a) || this._sources.add(a)),
				o != null &&
					((o = String(o)), this._names.has(o) || this._names.add(o)),
				this._mappings.add({
					generatedLine: n.line,
					generatedColumn: n.column,
					originalLine: i != null && i.line,
					originalColumn: i != null && i.column,
					source: a,
					name: o,
				});
		};
		xt.prototype.setSourceContent = function (t, n) {
			var i = t;
			this._sourceRoot != null && (i = je.relative(this._sourceRoot, i)),
				n != null
					? (this._sourcesContents ||
							(this._sourcesContents = Object.create(null)),
						(this._sourcesContents[je.toSetString(i)] = n))
					: this._sourcesContents &&
						(delete this._sourcesContents[je.toSetString(i)],
						Object.keys(this._sourcesContents).length === 0 &&
							(this._sourcesContents = null));
		};
		xt.prototype.applySourceMap = function (t, n, i) {
			var a = n;
			if (n == null) {
				if (t.file == null)
					throw new Error(
						`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`,
					);
				a = t.file;
			}
			var o = this._sourceRoot;
			o != null && (a = je.relative(o, a));
			var s = new va(),
				r = new va();
			this._mappings.unsortedForEach(function (c) {
				if (c.source === a && c.originalLine != null) {
					var l = t.originalPositionFor({
						line: c.originalLine,
						column: c.originalColumn,
					});
					l.source != null &&
						((c.source = l.source),
						i != null && (c.source = je.join(i, c.source)),
						o != null && (c.source = je.relative(o, c.source)),
						(c.originalLine = l.line),
						(c.originalColumn = l.column),
						l.name != null && (c.name = l.name));
				}
				var d = c.source;
				d != null && !s.has(d) && s.add(d);
				var f = c.name;
				f != null && !r.has(f) && r.add(f);
			}, this),
				(this._sources = s),
				(this._names = r),
				t.sources.forEach(function (c) {
					var l = t.sourceContentFor(c);
					l != null &&
						(i != null && (c = je.join(i, c)),
						o != null && (c = je.relative(o, c)),
						this.setSourceContent(c, l));
				}, this);
		};
		xt.prototype._validateMapping = function (t, n, i, a) {
			if (n && typeof n.line != "number" && typeof n.column != "number")
				throw new Error(
					"original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.",
				);
			if (
				!(
					t &&
					"line" in t &&
					"column" in t &&
					t.line > 0 &&
					t.column >= 0 &&
					!n &&
					!i &&
					!a
				)
			) {
				if (
					t &&
					"line" in t &&
					"column" in t &&
					n &&
					"line" in n &&
					"column" in n &&
					t.line > 0 &&
					t.column >= 0 &&
					n.line > 0 &&
					n.column >= 0 &&
					i
				)
					return;
				throw new Error(
					"Invalid mapping: " +
						JSON.stringify({
							generated: t,
							source: i,
							original: n,
							name: a,
						}),
				);
			}
		};
		xt.prototype._serializeMappings = function () {
			for (
				var t = 0,
					n = 1,
					i = 0,
					a = 0,
					o = 0,
					s = 0,
					r = "",
					c,
					l,
					d,
					f,
					p = this._mappings.toArray(),
					g = 0,
					T = p.length;
				g < T;
				g++
			) {
				if (((l = p[g]), (c = ""), l.generatedLine !== n))
					for (t = 0; l.generatedLine !== n; ) (c += ";"), n++;
				else if (g > 0) {
					if (!je.compareByGeneratedPositionsInflated(l, p[g - 1]))
						continue;
					c += ",";
				}
				(c += gi.encode(l.generatedColumn - t)),
					(t = l.generatedColumn),
					l.source != null &&
						((f = this._sources.indexOf(l.source)),
						(c += gi.encode(f - s)),
						(s = f),
						(c += gi.encode(l.originalLine - 1 - a)),
						(a = l.originalLine - 1),
						(c += gi.encode(l.originalColumn - i)),
						(i = l.originalColumn),
						l.name != null &&
							((d = this._names.indexOf(l.name)),
							(c += gi.encode(d - o)),
							(o = d))),
					(r += c);
			}
			return r;
		};
		xt.prototype._generateSourcesContent = function (t, n) {
			return t.map(function (i) {
				if (!this._sourcesContents) return null;
				n != null && (i = je.relative(n, i));
				var a = je.toSetString(i);
				return Object.prototype.hasOwnProperty.call(
					this._sourcesContents,
					a,
				)
					? this._sourcesContents[a]
					: null;
			}, this);
		};
		xt.prototype.toJSON = function () {
			var t = {
				version: this._version,
				sources: this._sources.toArray(),
				names: this._names.toArray(),
				mappings: this._serializeMappings(),
			};
			return (
				this._file != null && (t.file = this._file),
				this._sourceRoot != null && (t.sourceRoot = this._sourceRoot),
				this._sourcesContents &&
					(t.sourcesContent = this._generateSourcesContent(
						t.sources,
						t.sourceRoot,
					)),
				t
			);
		};
		xt.prototype.toString = function () {
			return JSON.stringify(this.toJSON());
		};
		l0.SourceMapGenerator = xt;
	});
	var $u = Be((Zu) => {
		"use strict";
		var co,
			Ft,
			Xu,
			nf,
			lo,
			af,
			of,
			Fe,
			Ku,
			sf,
			xn,
			l6,
			Ie = {
				AssignmentExpression: "AssignmentExpression",
				AssignmentPattern: "AssignmentPattern",
				ArrayExpression: "ArrayExpression",
				ArrayPattern: "ArrayPattern",
				ArrowFunctionExpression: "ArrowFunctionExpression",
				AwaitExpression: "AwaitExpression",
				BlockStatement: "BlockStatement",
				BinaryExpression: "BinaryExpression",
				BreakStatement: "BreakStatement",
				CallExpression: "CallExpression",
				CatchClause: "CatchClause",
				ClassBody: "ClassBody",
				ClassDeclaration: "ClassDeclaration",
				ClassExpression: "ClassExpression",
				ComprehensionBlock: "ComprehensionBlock",
				ComprehensionExpression: "ComprehensionExpression",
				ConditionalExpression: "ConditionalExpression",
				ContinueStatement: "ContinueStatement",
				DirectiveStatement: "DirectiveStatement",
				DoWhileStatement: "DoWhileStatement",
				DebuggerStatement: "DebuggerStatement",
				EmptyStatement: "EmptyStatement",
				ExportAllDeclaration: "ExportAllDeclaration",
				ExportBatchSpecifier: "ExportBatchSpecifier",
				ExportDeclaration: "ExportDeclaration",
				ExportNamedDeclaration: "ExportNamedDeclaration",
				ExportSpecifier: "ExportSpecifier",
				ExpressionStatement: "ExpressionStatement",
				ForStatement: "ForStatement",
				ForInStatement: "ForInStatement",
				ForOfStatement: "ForOfStatement",
				FunctionDeclaration: "FunctionDeclaration",
				FunctionExpression: "FunctionExpression",
				GeneratorExpression: "GeneratorExpression",
				Identifier: "Identifier",
				IfStatement: "IfStatement",
				ImportExpression: "ImportExpression",
				ImportSpecifier: "ImportSpecifier",
				ImportDeclaration: "ImportDeclaration",
				ChainExpression: "ChainExpression",
				Literal: "Literal",
				LabeledStatement: "LabeledStatement",
				LogicalExpression: "LogicalExpression",
				MemberExpression: "MemberExpression",
				MetaProperty: "MetaProperty",
				MethodDefinition: "MethodDefinition",
				ModuleDeclaration: "ModuleDeclaration",
				NewExpression: "NewExpression",
				ObjectExpression: "ObjectExpression",
				ObjectPattern: "ObjectPattern",
				PrivateIdentifier: "PrivateIdentifier",
				Program: "Program",
				Property: "Property",
				PropertyDefinition: "PropertyDefinition",
				RestElement: "RestElement",
				ReturnStatement: "ReturnStatement",
				SequenceExpression: "SequenceExpression",
				SpreadElement: "SpreadElement",
				Super: "Super",
				SwitchStatement: "SwitchStatement",
				SwitchCase: "SwitchCase",
				TaggedTemplateExpression: "TaggedTemplateExpression",
				TemplateElement: "TemplateElement",
				TemplateLiteral: "TemplateLiteral",
				ThisExpression: "ThisExpression",
				ThrowStatement: "ThrowStatement",
				TryStatement: "TryStatement",
				UnaryExpression: "UnaryExpression",
				UpdateExpression: "UpdateExpression",
				VariableDeclaration: "VariableDeclaration",
				VariableDeclarator: "VariableDeclarator",
				WhileStatement: "WhileStatement",
				WithStatement: "WithStatement",
				YieldExpression: "YieldExpression",
			};
		Zu.Syntax = Ie;
		var Q = {
				Sequence: 0,
				Yield: 1,
				Assignment: 1,
				Conditional: 2,
				ArrowFunction: 2,
				Coalesce: 3,
				LogicalOR: 3,
				LogicalAND: 4,
				BitwiseOR: 5,
				BitwiseXOR: 6,
				BitwiseAND: 7,
				Equality: 8,
				Relational: 9,
				BitwiseSHIFT: 10,
				Additive: 11,
				Multiplicative: 12,
				Unary: 13,
				Exponentiation: 14,
				Postfix: 14,
				Await: 14,
				Call: 15,
				New: 16,
				TaggedTemplate: 17,
				OptionalChaining: 17,
				Member: 18,
				Primary: 19,
			},
			d6 = {
				"||": Q.LogicalOR,
				"&&": Q.LogicalAND,
				"|": Q.BitwiseOR,
				"^": Q.BitwiseXOR,
				"&": Q.BitwiseAND,
				"==": Q.Equality,
				"!=": Q.Equality,
				"===": Q.Equality,
				"!==": Q.Equality,
				is: Q.Equality,
				isnt: Q.Equality,
				"<": Q.Relational,
				">": Q.Relational,
				"<=": Q.Relational,
				">=": Q.Relational,
				in: Q.Relational,
				instanceof: Q.Relational,
				"<<": Q.BitwiseSHIFT,
				">>": Q.BitwiseSHIFT,
				">>>": Q.BitwiseSHIFT,
				"+": Q.Additive,
				"-": Q.Additive,
				"*": Q.Multiplicative,
				"%": Q.Multiplicative,
				"/": Q.Multiplicative,
				"??": Q.Coalesce,
				"**": Q.Exponentiation,
			};
		function p6() {
			return {
				indent: null,
				base: null,
				parse: null,
				format: {
					indent: { style: "    ", base: 0 },
					newline: `
`,
					space: " ",
					json: !1,
					renumber: !1,
					hexadecimal: !1,
					quotes: "single",
					escapeless: !1,
					compact: !1,
					parentheses: !0,
					semicolons: !0,
					safeConcatenation: !1,
				},
				directive: !1,
				raw: !0,
				verbatim: null,
			};
		}
		var f6 = [
				5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199,
				8200, 8201, 8202, 8239, 8287, 12288, 65279,
			],
			m6 = new RegExp(
				"[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0\u08A2-\u08AC\u08E4-\u08FE\u0900-\u0963\u0966-\u096F\u0971-\u0977\u0979-\u097F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191C\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1D00-\u1DE6\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA697\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7B\uAA80-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]",
			);
		function Fi(e) {
			if (e < 128)
				return (
					(e >= 97 && e <= 122) ||
					(e >= 65 && e <= 90) ||
					(e >= 48 && e <= 57) ||
					e === 36 ||
					e === 95 ||
					e === 92
				);
			var t = String.fromCharCode(e);
			return m6.test(t);
		}
		function rf(e) {
			return e === 10 || e === 13 || e === 8232 || e === 8233;
		}
		function Xp(e) {
			return (
				e === 32 ||
				e === 9 ||
				rf(e) ||
				e === 11 ||
				e === 12 ||
				e === 160 ||
				(e >= 5760 && f6.indexOf(e) >= 0)
			);
		}
		function h6(e) {
			return e >= 48 && e <= 57;
		}
		function Kp(e, t) {
			var n = "";
			for (t |= 0; t > 0; t >>>= 1, e += e) t & 1 && (n += e);
			return n;
		}
		co = Array.isArray;
		co ||
			(co = function (t) {
				return Object.prototype.toString.call(t) === "[object Array]";
			});
		function Qu(e, t) {
			var n, i;
			function a(o) {
				return (
					typeof o == "object" &&
					o instanceof Object &&
					!(o instanceof RegExp)
				);
			}
			for (n in t)
				t.hasOwnProperty(n) &&
					((i = t[n]),
					a(i)
						? a(e[n])
							? Qu(e[n], i)
							: (e[n] = Qu({}, i))
						: (e[n] = i));
			return e;
		}
		function b6(e) {
			var t, n, i, a, o;
			if (e === 1 / 0) return Ft ? "null" : Xu ? "1e400" : "1e+400";
			if (((t = "" + e), !Xu || t.length < 3)) return t;
			for (
				n = t.indexOf("."),
					!Ft &&
						t.charCodeAt(0) === 48 &&
						n === 1 &&
						((n = 0), (t = t.slice(1))),
					i = t,
					t = t.replace("e+", "e"),
					a = 0,
					(o = i.indexOf("e")) > 0 &&
						((a = +i.slice(o + 1)), (i = i.slice(0, o))),
					n >= 0 &&
						((a -= i.length - n - 1),
						(i = +(i.slice(0, n) + i.slice(n + 1)) + "")),
					o = 0;
				i.charCodeAt(i.length + o - 1) === 48;

			)
				--o;
			return (
				o !== 0 && ((a -= o), (i = i.slice(0, o))),
				a !== 0 && (i += "e" + a),
				(i.length < t.length ||
					(nf &&
						e > 1e12 &&
						Math.floor(e) === e &&
						(i = "0x" + e.toString(16)).length < t.length)) &&
					+i === e &&
					(t = i),
				t
			);
		}
		function Qp(e, t) {
			return (e & -2) === 8232
				? (t ? "u" : "\\u") + (e === 8232 ? "2028" : "2029")
				: e === 10 || e === 13
					? (t ? "" : "\\") + (e === 10 ? "n" : "r")
					: String.fromCharCode(e);
		}
		function g6(e) {
			var t, n, i, a, o, s, r, c;
			if (((n = e.toString()), e.source)) {
				if (((t = n.match(/\/([^/]*)$/)), !t)) return n;
				for (
					i = t[1],
						n = "",
						r = !1,
						c = !1,
						a = 0,
						o = e.source.length;
					a < o;
					++a
				)
					(s = e.source.charCodeAt(a)),
						c
							? ((n += Qp(s, c)), (c = !1))
							: (r
									? s === 93 && (r = !1)
									: s === 47
										? (n += "\\")
										: s === 91 && (r = !0),
								(n += Qp(s, c)),
								(c = s === 92));
				return "/" + n + "/" + i;
			}
			return n;
		}
		function x6(e, t) {
			var n,
				i = "\\";
			switch (e) {
				case 8:
					i += "b";
					break;
				case 12:
					i += "f";
					break;
				case 9:
					i += "t";
					break;
				default:
					(n = e.toString(16).toUpperCase()),
						Ft || e > 255
							? (i += "u" + "0000".slice(n.length) + n)
							: e === 0 && !h6(t)
								? (i += "0")
								: e === 11
									? (i += "x0B")
									: (i += "x" + "00".slice(n.length) + n);
					break;
			}
			return i;
		}
		function E6(e) {
			var t = "\\";
			switch (e) {
				case 92:
					t += "\\";
					break;
				case 10:
					t += "n";
					break;
				case 13:
					t += "r";
					break;
				case 8232:
					t += "u2028";
					break;
				case 8233:
					t += "u2029";
					break;
			}
			return t;
		}
		function v6(e) {
			var t, n, i, a;
			for (
				a = lo === "double" ? '"' : "'", t = 0, n = e.length;
				t < n;
				++t
			)
				if (((i = e.charCodeAt(t)), i === 39)) {
					a = '"';
					break;
				} else if (i === 34) {
					a = "'";
					break;
				} else i === 92 && ++t;
			return a + e + a;
		}
		function A6(e) {
			var t = "",
				n,
				i,
				a,
				o = 0,
				s = 0,
				r,
				c;
			for (n = 0, i = e.length; n < i; ++n) {
				if (((a = e.charCodeAt(n)), a === 39)) ++o;
				else if (a === 34) ++s;
				else if (a === 47 && Ft) t += "\\";
				else if (rf(a) || a === 92) {
					t += E6(a);
					continue;
				} else if (
					(Ft && a < 32) ||
					!(Ft || af || (a >= 32 && a <= 126))
				) {
					t += x6(a, e.charCodeAt(n + 1));
					continue;
				}
				t += String.fromCharCode(a);
			}
			if (
				((r = !(lo === "double" || (lo === "auto" && s < o))),
				(c = r ? "'" : '"'),
				!(r ? o : s))
			)
				return c + t + c;
			for (e = t, t = c, n = 0, i = e.length; n < i; ++n)
				(a = e.charCodeAt(n)),
					((a === 39 && r) || (a === 34 && !r)) && (t += "\\"),
					(t += String.fromCharCode(a));
			return t + c;
		}
		function de(e, t) {
			if (!e.length) return t;
			if (!t.length) return e;
			var n = e.charCodeAt(e.length - 1),
				i = t.charCodeAt(0);
			return (Fi(n) && Fi(i)) ||
				(n === i && (n === 43 || n === 45)) ||
				(n === 47 && i === 105)
				? e + m.space + t
				: Xp(n) || Xp(i)
					? e + t
					: e + m.optSpace + t;
		}
		function qe() {
			var e = m.indent;
			return (m.indent += m.indentUnit), e;
		}
		function mt(e) {
			return e.type === Ie.BlockStatement
				? m.optSpace
				: e.type === Ie.EmptyStatement
					? ""
					: m.newline + m.indent + m.indentUnit;
		}
		function ro(e) {
			return e.type === Ie.BlockStatement
				? m.optSpace
				: m.newline + m.indent;
		}
		function T6(e, t) {
			var n = e[xn.verbatim],
				i = typeof n == "string",
				a = !i && n.precedence !== void 0 ? n.precedence : Q.Sequence,
				o = a < t.precedence,
				s = i ? n : n.content,
				r = s.split(/\r\n|\n/),
				c = r.length;
			o && (m.js += "("), (m.js += r[0]);
			for (var l = 1; l < c; l++) m.js += m.newline + m.indent + r[l];
			o && (m.js += ")");
		}
		function C6(e) {
			var t = e.params,
				n = t.length,
				i = n - 1,
				a =
					e.type === Ie.ArrowFunctionExpression &&
					n === 1 &&
					t[0].type === Ie.Identifier;
			if (a) m.js += t[0].name;
			else {
				m.js += "(";
				for (var o = 0; o < n; ++o) {
					var s = t[o];
					t[o].type === Ie.Identifier
						? (m.js += s.name)
						: ee[s.type](s, B.e4),
						o !== i && (m.js += "," + m.optSpace);
				}
				m.js += ")";
			}
		}
		function Vn(e) {
			var t = e.body;
			if (
				(C6(e),
				e.type === Ie.ArrowFunctionExpression &&
					(m.js += m.optSpace + "=>"),
				e.expression)
			) {
				m.js += m.optSpace;
				var n = Ee(t, B.e4);
				n.charAt(0) === "{" && (n = "(" + n + ")"), (m.js += n);
			} else (m.js += mt(t)), Me[t.type](t, B.s8);
		}
		var B = {
				e1: function (e) {
					return {
						precedence: Q.Assignment,
						allowIn: e,
						allowCall: !0,
						allowUnparenthesizedNew: !0,
					};
				},
				e2: function (e) {
					return {
						precedence: Q.LogicalOR,
						allowIn: e,
						allowCall: !0,
						allowUnparenthesizedNew: !0,
					};
				},
				e3: {
					precedence: Q.Call,
					allowIn: !0,
					allowCall: !0,
					allowUnparenthesizedNew: !1,
				},
				e4: {
					precedence: Q.Assignment,
					allowIn: !0,
					allowCall: !0,
					allowUnparenthesizedNew: !0,
				},
				e5: {
					precedence: Q.Sequence,
					allowIn: !0,
					allowCall: !0,
					allowUnparenthesizedNew: !0,
				},
				e6: function (e) {
					return {
						precedence: Q.New,
						allowIn: !0,
						allowCall: !1,
						allowUnparenthesizedNew: e,
					};
				},
				e7: {
					precedence: Q.Unary,
					allowIn: !0,
					allowCall: !0,
					allowUnparenthesizedNew: !0,
				},
				e8: {
					precedence: Q.Postfix,
					allowIn: !0,
					allowCall: !0,
					allowUnparenthesizedNew: !0,
				},
				e9: {
					precedence: void 0,
					allowIn: !0,
					allowCall: !0,
					allowUnparenthesizedNew: !0,
				},
				e10: {
					precedence: Q.Call,
					allowIn: !0,
					allowCall: !0,
					allowUnparenthesizedNew: !0,
				},
				e11: function (e) {
					return {
						precedence: Q.Call,
						allowIn: !0,
						allowCall: e,
						allowUnparenthesizedNew: !1,
					};
				},
				e12: {
					precedence: Q.Primary,
					allowIn: !1,
					allowCall: !1,
					allowUnparenthesizedNew: !0,
				},
				e13: {
					precedence: Q.Primary,
					allowIn: !0,
					allowCall: !0,
					allowUnparenthesizedNew: !0,
				},
				e14: {
					precedence: Q.Sequence,
					allowIn: !1,
					allowCall: !0,
					allowUnparenthesizedNew: !0,
				},
				e15: function (e) {
					return {
						precedence: Q.Sequence,
						allowIn: !0,
						allowCall: e,
						allowUnparenthesizedNew: !0,
					};
				},
				e16: function (e, t) {
					return {
						precedence: e,
						allowIn: t,
						allowCall: !0,
						allowUnparenthesizedNew: !0,
					};
				},
				e17: function (e) {
					return {
						precedence: Q.Call,
						allowIn: e,
						allowCall: !0,
						allowUnparenthesizedNew: !0,
					};
				},
				e18: function (e) {
					return {
						precedence: Q.Assignment,
						allowIn: e,
						allowCall: !0,
						allowUnparenthesizedNew: !0,
					};
				},
				e19: {
					precedence: Q.Sequence,
					allowIn: !0,
					allowCall: !0,
					semicolonOptional: !1,
				},
				e20: { precedence: Q.Await, allowCall: !0 },
				s1: function (e, t) {
					return {
						allowIn: !0,
						functionBody: !1,
						directiveContext: e,
						semicolonOptional: t,
					};
				},
				s2: {
					allowIn: !0,
					functionBody: !1,
					directiveContext: !1,
					semicolonOptional: !0,
				},
				s3: function (e) {
					return {
						allowIn: e,
						functionBody: !1,
						directiveContext: !1,
						semicolonOptional: !1,
					};
				},
				s4: function (e) {
					return {
						allowIn: !0,
						functionBody: !1,
						directiveContext: !1,
						semicolonOptional: e,
					};
				},
				s5: function (e) {
					return {
						allowIn: !0,
						functionBody: !1,
						directiveContext: !0,
						semicolonOptional: e,
					};
				},
				s6: {
					allowIn: !1,
					functionBody: !1,
					directiveContext: !1,
					semicolonOptional: !1,
				},
				s7: {
					allowIn: !0,
					functionBody: !1,
					directiveContext: !1,
					semicolonOptional: !1,
				},
				s8: {
					allowIn: !0,
					functionBody: !0,
					directiveContext: !1,
					semicolonOptional: !1,
				},
			},
			y6 = /[.eExX]|^0[0-9]+/,
			k6 = /[0-9]$/;
		function Gu(e) {
			return e ? e.type === Ie.LogicalExpression : !1;
		}
		function _6(e, t) {
			switch (e.operator) {
				case "||":
					return Gu(t)
						? t.operator === "??" || t.operator === "&&"
						: !1;
				case "&&":
					return Gu(t, { operator: "??" });
				case "??":
					return Gu(t) && t.operator !== "??";
			}
		}
		function Jp(e, t, n) {
			var i = e.operator,
				a = d6[e.operator],
				o = a < t.precedence,
				s = t.allowIn || o,
				r = B.e16(a, s),
				c = Ee(e.left, r, e);
			o |= i === "in" && !s;
			var l = _6(e, n);
			(o || l) && (m.js += "("),
				c.charCodeAt(c.length - 1) === 47 && Fi(i.charCodeAt(0))
					? (c = c + m.space + i)
					: (c = de(c, i)),
				r.precedence++;
			var d = Ee(e.right, r, e);
			(i === "/" && d.charAt(0) === "/") ||
			(i.slice(-1) === "<" && d.slice(0, 3) === "!--")
				? (c += m.space + d)
				: (c = de(c, d)),
				(m.js += c),
				(o || l) && (m.js += ")");
		}
		function Zp(e) {
			var t = e.elements,
				n = t.length;
			if (n) {
				var i = n - 1,
					a = n > 1,
					o = qe(),
					s = m.newline + m.indent;
				m.js += "[";
				for (var r = 0; r < n; r++) {
					var c = t[r];
					a && (m.js += s),
						c && ee[c.type](c, B.e4),
						(r !== i || !c) && (m.js += ",");
				}
				(m.indent = o),
					a && (m.js += m.newline + m.indent),
					(m.js += "]");
			} else m.js += "[]";
		}
		function $p(e) {
			var t = e.blocks,
				n = e.filter,
				i = e.type === Ie.GeneratorExpression,
				a = i ? "(" : "[",
				o = Ee(e.body, B.e4);
			if (t) {
				for (var s = qe(), r = t.length, c = 0; c < r; ++c) {
					var l = Ee(t[c], B.e5);
					a = c > 0 ? de(a, l) : a + l;
				}
				m.indent = s;
			}
			if (n) {
				var d = Ee(n, B.e5);
				(a = de(a, "if" + m.optSpace)), (a = de(a, "(" + d + ")"));
			}
			(a = de(a, o)), (a += i ? ")" : "]"), (m.js += a);
		}
		var uo = {
				SequenceExpression: function (t, n) {
					var i = t.expressions,
						a = i.length,
						o = a - 1,
						s = Q.Sequence < n.precedence,
						r = B.e1(n.allowIn || s);
					s && (m.js += "(");
					for (var c = 0; c < a; c++) {
						var l = i[c];
						ee[l.type](l, r), c !== o && (m.js += "," + m.optSpace);
					}
					s && (m.js += ")");
				},
				AssignmentExpression: function (t, n) {
					var i = t.left,
						a = t.right,
						o = Q.Assignment < n.precedence,
						s = n.allowIn || o;
					o && (m.js += "("),
						ee[i.type](i, B.e17(s)),
						(m.js += m.optSpace + t.operator + m.optSpace),
						ee[a.type](a, B.e18(s)),
						o && (m.js += ")");
				},
				AssignmentPattern: function (t) {
					var n = { left: t.left, right: t.right, operator: "=" };
					ee.AssignmentExpression(n, B.e4);
				},
				ArrowFunctionExpression: function (t, n) {
					var i = Q.ArrowFunction < n.precedence;
					i && (m.js += "("),
						t.async && (m.js += "async "),
						Vn(t),
						i && (m.js += ")");
				},
				AwaitExpression: function (t, n) {
					var i = Q.Await < n.precedence;
					i && (m.js += "("),
						(m.js += t.all ? "await* " : "await "),
						ee[t.argument.type](t.argument, B.e20),
						i && (m.js += ")");
				},
				ConditionalExpression: function (t, n) {
					var i = t.test,
						a = t.consequent,
						o = t.alternate,
						s = Q.Conditional < n.precedence,
						r = n.allowIn || s,
						c = B.e2(r),
						l = B.e1(r);
					s && (m.js += "("),
						ee[i.type](i, c),
						(m.js += m.optSpace + "?" + m.optSpace),
						ee[a.type](a, l),
						(m.js += m.optSpace + ":" + m.optSpace),
						ee[o.type](o, l),
						s && (m.js += ")");
				},
				LogicalExpression: Jp,
				BinaryExpression: Jp,
				CallExpression: function (t, n) {
					var i = t.callee,
						a = t.arguments,
						o = a.length,
						s = o - 1,
						r = !n.allowCall || Q.Call < n.precedence;
					r && (m.js += "("),
						ee[i.type](i, B.e3),
						t.optional && (m.js += "?."),
						(m.js += "(");
					for (var c = 0; c < o; ++c) {
						var l = a[c];
						ee[l.type](l, B.e4),
							c !== s && (m.js += "," + m.optSpace);
					}
					(m.js += ")"), r && (m.js += ")");
				},
				NewExpression: function (t, n) {
					var i = t.arguments,
						a = Q.New < n.precedence,
						o = i.length,
						s = o - 1,
						r = !n.allowUnparenthesizedNew || of || o > 0,
						c = Ee(t.callee, B.e6(!r));
					if ((a && (m.js += "("), (m.js += de("new", c)), r)) {
						m.js += "(";
						for (var l = 0; l < o; ++l) {
							var d = i[l];
							ee[d.type](d, B.e4),
								l !== s && (m.js += "," + m.optSpace);
						}
						m.js += ")";
					}
					a && (m.js += ")");
				},
				MemberExpression: function (t, n) {
					var i = t.object,
						a = t.property,
						o = Q.Member < n.precedence,
						s =
							!t.computed &&
							i.type === Ie.Literal &&
							typeof i.value == "number";
					if ((o && (m.js += "("), s)) {
						var r = Ee(i, B.e11(n.allowCall)),
							c = k6.test(r) && !y6.test(r);
						m.js += c ? r + "." : r;
					} else ee[i.type](i, B.e11(n.allowCall));
					if (t.computed)
						t.optional && (m.js += "?."),
							(m.js += "["),
							ee[a.type](a, B.e15(n.allowCall)),
							(m.js += "]");
					else {
						let l = a.type === Ie.PrivateIdentifier ? "#" : "",
							d = t.optional ? "?." : ".",
							f = l + a.name;
						m.js += d + f;
					}
					o && (m.js += ")");
				},
				UnaryExpression: function (t, n) {
					var i = Q.Unary < n.precedence,
						a = t.operator,
						o = Ee(t.argument, B.e7);
					if ((i && (m.js += "("), m.optSpace === "" || a.length > 2))
						m.js += de(a, o);
					else {
						m.js += a;
						var s = a.charCodeAt(a.length - 1),
							r = o.charCodeAt(0);
						((s === r && (s === 43 || s === 45)) ||
							(Fi(s) && Fi(r))) &&
							(m.js += m.space),
							(m.js += o);
					}
					i && (m.js += ")");
				},
				YieldExpression: function (t, n) {
					var i = t.argument,
						a = t.delegate ? "yield*" : "yield",
						o = Q.Yield < n.precedence;
					if ((o && (m.js += "("), i)) {
						var s = Ee(i, B.e4);
						a = de(a, s);
					}
					(m.js += a), o && (m.js += ")");
				},
				UpdateExpression: function (t, n) {
					var i = t.argument,
						a = t.operator,
						o = t.prefix,
						s = o ? Q.Unary : Q.Postfix,
						r = s < n.precedence;
					r && (m.js += "("),
						o
							? ((m.js += a), ee[i.type](i, B.e8))
							: (ee[i.type](i, B.e8), (m.js += a)),
						r && (m.js += ")");
				},
				FunctionExpression: function (t) {
					var n = !!t.generator;
					t.async && (m.js += "async "),
						(m.js += n ? "function*" : "function"),
						t.id
							? ((m.js += n ? m.optSpace : m.space),
								(m.js += t.id.name))
							: (m.js += m.optSpace),
						Vn(t);
				},
				ExportBatchSpecifier: function () {
					m.js += "*";
				},
				ArrayPattern: Zp,
				ArrayExpression: Zp,
				ClassExpression: function (t) {
					var n = t.id,
						i = t.superClass,
						a = t.body,
						o = "class";
					if (n) {
						var s = Ee(n, B.e9);
						o = de(o, s);
					}
					if (i) {
						var r = Ee(i, B.e4);
						(r = de("extends", r)), (o = de(o, r));
					}
					(m.js += o + m.optSpace), Me[a.type](a, B.s2);
				},
				MetaProperty: function (t, n) {
					var i = t.meta,
						a = t.property,
						o = Q.Member < n.precedence;
					o && (m.js += "("),
						(m.js +=
							(typeof i == "string" ? i : i.name) +
							"." +
							(typeof a == "string" ? a : a.name)),
						o && (m.js += ")");
				},
				MethodDefinition: function (t) {
					var n = t.static ? "static" + m.optSpace : "",
						i = Ee(t.key, B.e5);
					t.computed && (i = "[" + i + "]"),
						t.kind === "get" || t.kind === "set"
							? ((i = de(t.kind, i)), (m.js += de(n, i)))
							: t.value.generator
								? (m.js += n + "*" + i)
								: t.value.async
									? (m.js += n + "async " + i)
									: (m.js += de(n, i)),
						Vn(t.value);
				},
				Property: function (t) {
					var n = t.value,
						i = t.kind,
						a = Ee(t.key, B.e4);
					t.computed && (a = "[" + a + "]"),
						i === "get" || i === "set"
							? ((m.js += i + m.space + a), Vn(n))
							: t.shorthand
								? (m.js += a)
								: t.method
									? (n.generator
											? (a = "*" + a)
											: n.async && (a = "async " + a),
										(m.js += a),
										Vn(n))
									: ((m.js += a + ":" + m.optSpace),
										ee[n.type](n, B.e4));
				},
				PropertyDefinition: function (t) {
					var n = t.value,
						i = t.static ? "static" + m.optSpace : "",
						a = Ee(t.key, B.e4);
					t.computed && (a = "[" + a + "]"),
						n
							? ((m.js += i + a + "=" + m.optSpace),
								ee[n.type](n, B.e4))
							: (m.js += i + a + m.optSpace),
						(Fe || !settings.semicolonOptional) && (m.js += ";");
				},
				ObjectExpression: function (t) {
					var n = t.properties,
						i = n.length;
					if (i) {
						var a = i - 1,
							o = qe();
						m.js += "{";
						for (var s = 0; s < i; s++) {
							var r = n[s],
								c = r.type || Ie.Property;
							(m.js += m.newline + m.indent),
								ee[c](r, B.e5),
								s !== a && (m.js += ",");
						}
						(m.indent = o), (m.js += m.newline + m.indent + "}");
					} else m.js += "{}";
				},
				ObjectPattern: function (t) {
					var n = t.properties,
						i = n.length;
					if (i) {
						var a = i - 1,
							o = !1;
						if (i === 1) o = n[0].value.type !== Ie.Identifier;
						else
							for (var s = 0; s < i; s++)
								if (!n[s].shorthand) {
									o = !0;
									break;
								}
						m.js += o ? "{" + m.newline : "{";
						for (
							var r = qe(),
								c = "," + (o ? m.newline : m.optSpace),
								s = 0;
							s < i;
							s++
						) {
							var l = n[s];
							o && (m.js += m.indent),
								ee[l.type](l, B.e5),
								s !== a && (m.js += c);
						}
						(m.indent = r),
							(m.js += o ? m.newline + m.indent + "}" : "}");
					} else m.js += "{}";
				},
				ThisExpression: function () {
					m.js += "this";
				},
				Identifier: function (t, n, i) {
					m.js += t.name;
				},
				PrivateIdentifier: function (t, n, i) {
					m.js += "#" + t.name;
				},
				ImportExpression: function (t, n) {
					var i = Q.Call < n.precedence,
						a = t.source;
					i && (m.js += "("),
						(m.js += "import("),
						ee[a.type](a, B.e4),
						(m.js += ")"),
						i && (m.js += ")");
				},
				ImportSpecifier: function (t) {
					(m.js += t.imported.name),
						t.local &&
							(m.js += m.space + "as" + m.space + t.local.name);
				},
				ExportSpecifier: function (t) {
					(m.js += t.local.name),
						t.exported &&
							(m.js +=
								m.space + "as" + m.space + t.exported.name);
				},
				ChainExpression: function (t, n) {
					var i = Q.OptionalChaining < n.precedence,
						a = t.expression;
					n = n || {};
					var o = {
						precedence: Q.OptionalChaining,
						allowIn: n.allowIn,
						allowCall: n.allowCall,
						allowUnparenthesizedNew: n.allowUnparenthesizedNew,
					};
					i && ((o.allowCall = !0), (m.js += "(")),
						ee[a.type](a, o),
						i && (m.js += ")");
				},
				Literal: function (t) {
					if (xn.raw && t.raw !== void 0) m.js += t.raw;
					else if (t.value === null) m.js += "null";
					else {
						var n = typeof t.value;
						n === "string"
							? (m.js += A6(t.value))
							: n === "number"
								? (m.js += b6(t.value))
								: n === "boolean"
									? (m.js += t.value ? "true" : "false")
									: (m.js += g6(t.value));
					}
				},
				GeneratorExpression: $p,
				ComprehensionExpression: $p,
				ComprehensionBlock: function (t) {
					var n = t.left,
						i = void 0,
						a = Ee(t.right, B.e5);
					n.type === Ie.VariableDeclaration
						? (i = n.kind + m.space + Wt(n.declarations[0], B.s6))
						: (i = Ee(n, B.e10)),
						(i = de(i, t.of ? "of" : "in")),
						(m.js += "for" + m.optSpace + "(" + de(i, a) + ")");
				},
				RestElement: function (t) {
					m.js += "..." + t.argument.name;
				},
				SpreadElement: function (t) {
					var n = t.argument;
					(m.js += "..."), ee[n.type](n, B.e4);
				},
				TaggedTemplateExpression: function (t, n) {
					var i = t.tag,
						a = t.quasi,
						o = Q.TaggedTemplate < n.precedence;
					o && (m.js += "("),
						ee[i.type](i, B.e11(n.allowCall)),
						ee[a.type](a, B.e12),
						o && (m.js += ")");
				},
				TemplateElement: function (t) {
					m.js += t.value.raw;
				},
				TemplateLiteral: function (t) {
					var n = t.quasis,
						i = t.expressions,
						a = n.length,
						o = a - 1;
					m.js += "`";
					for (var s = 0; s < a; ++s) {
						var r = n[s];
						if ((ee[r.type](r, B.e13), s !== o)) {
							var c = i[s];
							(m.js += "${" + m.optSpace),
								ee[c.type](c, B.e5),
								(m.js += m.optSpace + "}");
						}
					}
					m.js += "`";
				},
				StaticBlock: function (t) {
					var n = t.body,
						i = n.length;
					(m.js += "static "), (m.js += "{" + m.newline);
					for (var a = 0; a < i; ++a) Me[n[a].type](n[a], B.e5);
					m.js += m.newline + m.indent + "}";
				},
				Super: function () {
					m.js += "super";
				},
			},
			S6 = /^{|^class(?:\s|{)|^(async )?function(?:\s|\*|\()/;
		function ef(e, t, n) {
			for (var i = n.length, a = i - 1, o = 0; o < i; ++o) {
				var s = Wt(n[o], B.s7);
				(e = de(e, s)), (t || o !== a) && (e += ro(n[o].body));
			}
			return e;
		}
		function tf(e, t, n) {
			var i = t.body,
				a = t.left,
				o = !Fe && n.semicolonOptional,
				s = qe(),
				r = t.await ? " await" : "",
				c = "for" + r + m.optSpace + "(";
			if (a.type === Ie.VariableDeclaration) {
				var l = qe();
				(c += a.kind + m.space + Wt(a.declarations[0], B.s6)),
					(m.indent = l);
			} else c += Ee(a, B.e10);
			c = de(c, e);
			var d = Ee(t.right, B.e4);
			(c = de(c, d) + ")"),
				(m.indent = s),
				(m.js += c + mt(i)),
				Me[i.type](i, B.s4(o));
		}
		var Ju = {
			BlockStatement: function (t, n) {
				var i = t.body,
					a = i.length,
					o = a - 1,
					s = qe();
				m.js += "{" + m.newline;
				for (var r = 0; r < a; r++) {
					var c = i[r];
					(m.js += m.indent),
						Me[c.type](c, B.s1(n.functionBody, r === o)),
						(m.js += m.newline);
				}
				(m.indent = s), (m.js += m.indent + "}");
			},
			BreakStatement: function (t, n) {
				t.label ? (m.js += "break " + t.label.name) : (m.js += "break"),
					(Fe || !n.semicolonOptional) && (m.js += ";");
			},
			ContinueStatement: function (t, n) {
				t.label
					? (m.js += "continue " + t.label.name)
					: (m.js += "continue"),
					(Fe || !n.semicolonOptional) && (m.js += ";");
			},
			ClassBody: function (t) {
				var n = t.body,
					i = n.length,
					a = i - 1,
					o = qe();
				m.js += "{" + m.newline;
				for (var s = 0; s < i; s++) {
					var r = n[s],
						c = r.type || Ie.Property;
					(m.js += m.indent),
						ee[c](r, B.e5),
						s !== a && (m.js += m.newline);
				}
				(m.indent = o), (m.js += m.newline + m.indent + "}");
			},
			ClassDeclaration: function (t) {
				var n = t.body,
					i = t.superClass,
					a = "class " + t.id.name;
				if (i) {
					var o = Ee(i, B.e4);
					a += m.space + de("extends", o);
				}
				(m.js += a + m.optSpace), Me[n.type](n, B.s2);
			},
			DirectiveStatement: function (t, n) {
				xn.raw && t.raw ? (m.js += t.raw) : (m.js += v6(t.directive)),
					(Fe || !n.semicolonOptional) && (m.js += ";");
			},
			DoWhileStatement: function (t, n) {
				var i = t.body,
					a = t.test,
					o = mt(i) + Wt(i, B.s7) + ro(i),
					s = de("do", o);
				(m.js += de(s, "while" + m.optSpace + "(")),
					ee[a.type](a, B.e5),
					(m.js += ")"),
					(Fe || !n.semicolonOptional) && (m.js += ";");
			},
			CatchClause: function (t) {
				var n = t.param,
					i = t.guard,
					a = t.body,
					o = qe();
				(m.js += "catch" + m.optSpace),
					n && ((m.js += "("), ee[n.type](n, B.e5)),
					i && ((m.js += " if "), ee[i.type](i, B.e5)),
					(m.indent = o),
					n && (m.js += ")"),
					(m.js += mt(a)),
					Me[a.type](a, B.s7);
			},
			DebuggerStatement: function (t, n) {
				(m.js += "debugger"),
					(Fe || !n.semicolonOptional) && (m.js += ";");
			},
			EmptyStatement: function () {
				m.js += ";";
			},
			ExportAllDeclaration: function (e, t) {
				Ju.ExportDeclaration(e, t, !0);
			},
			ExportDeclaration: function (t, n, i) {
				var a = t.specifiers,
					o = t.declaration,
					s = Fe || !n.semicolonOptional;
				if (t.default) {
					var r = Ee(o, B.e4);
					(m.js += de("export default", r)), s && (m.js += ";");
				} else if (a || i) {
					var c = "export";
					if (i) c += m.optSpace + "*";
					else if (a.length === 0)
						c += m.optSpace + "{" + m.optSpace + "}";
					else if (a[0].type === Ie.ExportBatchSpecifier) {
						var l = Ee(a[0], B.e5);
						c = de(c, l);
					} else {
						var d = qe(),
							f = a.length,
							p = f - 1;
						c += m.optSpace + "{";
						for (var g = 0; g < f; ++g)
							(c += m.newline + m.indent),
								(c += Ee(a[g], B.e5)),
								g !== p && (c += ",");
						(m.indent = d), (c += m.newline + m.indent + "}");
					}
					t.source
						? ((m.js += de(c, "from" + m.optSpace)),
							ee.Literal(t.source))
						: (m.js += c),
						s && (m.js += ";");
				} else if (o) {
					var r = Wt(o, B.s4(!s));
					m.js += de("export", r);
				}
			},
			ExportNamedDeclaration: function (e, t) {
				Ju.ExportDeclaration(e, t);
			},
			ExpressionStatement: function (t, n) {
				var i = Ee(t.expression, B.e5),
					a =
						S6.test(i) ||
						(sf &&
							n.directiveContext &&
							t.expression.type === Ie.Literal &&
							typeof t.expression.value == "string");
				a ? (m.js += "(" + i + ")") : (m.js += i),
					(Fe || !n.semicolonOptional) && (m.js += ";");
			},
			ImportDeclaration: function (t, n) {
				var i = t.specifiers,
					a = "import",
					o = i.length;
				if (o) {
					var s = !!i[0].default,
						r = s ? 1 : 0,
						c = o - 1;
					if ((s && (a = de(a, i[0].id.name)), r < o)) {
						if ((s && (a += ","), (a += m.optSpace + "{"), r === c))
							a += m.optSpace + Ee(i[r], B.e5) + m.optSpace;
						else {
							for (var l = qe(), d = r; d < o; d++)
								(a += m.newline + m.indent + Ee(i[d], B.e5)),
									d !== c && (a += ",");
							(m.indent = l), (a += m.newline + m.indent);
						}
						a += "}" + m.optSpace;
					}
					a = de(a, "from");
				}
				(m.js += a + m.optSpace),
					ee.Literal(t.source),
					(Fe || !n.semicolonOptional) && (m.js += ";");
			},
			VariableDeclarator: function (t, n) {
				var i = t.id,
					a = t.init,
					o = B.e1(n.allowIn);
				a
					? (ee[i.type](i, o),
						(m.js += m.optSpace + "=" + m.optSpace),
						ee[a.type](a, o, t))
					: i.type === Ie.Identifier
						? (m.js += i.name)
						: ee[i.type](i, o);
			},
			VariableDeclaration: function (t, n) {
				var i = t.declarations,
					a = i.length,
					o = a > 1 ? qe() : m.indent,
					s = B.s3(n.allowIn);
				m.js += t.kind;
				for (var r = 0; r < a; r++) {
					var c = i[r];
					(m.js += r === 0 ? m.space : "," + m.optSpace),
						Me[c.type](c, s);
				}
				(Fe || !n.semicolonOptional) && (m.js += ";"), (m.indent = o);
			},
			ThrowStatement: function (t, n) {
				var i = Ee(t.argument, B.e5);
				(m.js += de("throw", i)),
					(Fe || !n.semicolonOptional) && (m.js += ";");
			},
			TryStatement: function (t) {
				var n = t.block,
					i = t.finalizer,
					a = "try" + mt(n) + Wt(n, B.s7) + ro(n),
					o = t.handlers || t.guardedHandlers;
				o && (a = ef(a, i, o)),
					t.handler &&
						((o = co(t.handler) ? t.handler : [t.handler]),
						(a = ef(a, i, o))),
					i && ((a = de(a, "finally" + mt(i))), (a += Wt(i, B.s7))),
					(m.js += a);
			},
			SwitchStatement: function (t) {
				var n = t.cases,
					i = t.discriminant,
					a = qe();
				if (
					((m.js += "switch" + m.optSpace + "("),
					ee[i.type](i, B.e5),
					(m.js += ")" + m.optSpace + "{" + m.newline),
					(m.indent = a),
					n)
				)
					for (var o = n.length, s = o - 1, r = 0; r < o; r++) {
						var c = n[r];
						(m.js += m.indent),
							Me[c.type](c, B.s4(r === s)),
							(m.js += m.newline);
					}
				m.js += m.indent + "}";
			},
			SwitchCase: function (t, n) {
				var i = t.consequent,
					a = i[0],
					o = t.test,
					s = 0,
					r = !Fe && n.semicolonOptional,
					c = i.length,
					l = c - 1,
					d = qe();
				if (o) {
					var f = Ee(o, B.e5);
					m.js += de("case", f) + ":";
				} else m.js += "default:";
				for (
					c &&
					a.type === Ie.BlockStatement &&
					(s++, (m.js += mt(a)), Me[a.type](a, B.s7));
					s < c;
					s++
				) {
					var p = i[s],
						g = s === l && r;
					(m.js += m.newline + m.indent), Me[p.type](p, B.s4(g));
				}
				m.indent = d;
			},
			IfStatement: function (t, n) {
				var i = t.consequent,
					a = t.test,
					o = qe(),
					s = !Fe && n.semicolonOptional;
				if (
					((m.js += "if" + m.optSpace + "("),
					ee[a.type](a, B.e5),
					(m.js += ")"),
					(m.indent = o),
					(m.js += mt(i)),
					t.alternate)
				) {
					var r = Wt(i, B.s7) + ro(i),
						c = Wt(t.alternate, B.s4(s));
					t.alternate.type === Ie.IfStatement
						? (c = "else " + c)
						: (c = de("else", mt(t.alternate) + c)),
						(m.js += de(r, c));
				} else Me[i.type](i, B.s4(s));
			},
			ForStatement: function (t, n) {
				var i = t.init,
					a = t.test,
					o = t.body,
					s = t.update,
					r = !Fe && n.semicolonOptional,
					c = qe();
				(m.js += "for" + m.optSpace + "("),
					i
						? i.type === Ie.VariableDeclaration
							? Me[i.type](i, B.s6)
							: (ee[i.type](i, B.e14), (m.js += ";"))
						: (m.js += ";"),
					a && ((m.js += m.optSpace), ee[a.type](a, B.e5)),
					(m.js += ";"),
					s && ((m.js += m.optSpace), ee[s.type](s, B.e5)),
					(m.js += ")"),
					(m.indent = c),
					(m.js += mt(o)),
					Me[o.type](o, B.s4(r));
			},
			ForInStatement: function (t, n) {
				tf("in", t, n);
			},
			ForOfStatement: function (t, n) {
				tf("of", t, n);
			},
			LabeledStatement: function (t, n) {
				var i = t.body,
					a = !Fe && n.semicolonOptional,
					o = m.indent;
				(m.js += t.label.name + ":" + mt(i)),
					i.type !== Ie.BlockStatement && (o = qe()),
					Me[i.type](i, B.s4(a)),
					(m.indent = o);
			},
			ModuleDeclaration: function (t, n) {
				(m.js +=
					"module" +
					m.space +
					t.id.name +
					m.space +
					"from" +
					m.optSpace),
					ee.Literal(t.source),
					(Fe || !n.semicolonOptional) && (m.js += ";");
			},
			Program: function (t) {
				var n = t.body,
					i = n.length,
					a = i - 1;
				Ku &&
					i > 0 &&
					(m.js += `
`);
				for (var o = 0; o < i; o++) {
					var s = n[o];
					(m.js += m.indent),
						Me[s.type](s, B.s5(!Ku && o === a)),
						o !== a && (m.js += m.newline);
				}
			},
			FunctionDeclaration: function (t) {
				var n = !!t.generator;
				t.async && (m.js += "async "),
					(m.js += n
						? "function*" + m.optSpace
						: "function" + m.space),
					(m.js += t.id.name),
					Vn(t);
			},
			ReturnStatement: function (t, n) {
				var i = t.argument;
				if (i) {
					var a = Ee(i, B.e5);
					m.js += de("return", a);
				} else m.js += "return";
				(Fe || !n.semicolonOptional) && (m.js += ";");
			},
			WhileStatement: function (t, n) {
				var i = t.body,
					a = t.test,
					o = !Fe && n.semicolonOptional,
					s = qe();
				(m.js += "while" + m.optSpace + "("),
					ee[a.type](a, B.e5),
					(m.js += ")"),
					(m.indent = s),
					(m.js += mt(i)),
					Me[i.type](i, B.s4(o));
			},
			WithStatement: function (t, n) {
				var i = t.body,
					a = t.object,
					o = !Fe && n.semicolonOptional,
					s = qe();
				(m.js += "with" + m.optSpace + "("),
					ee[a.type](a, B.e5),
					(m.js += ")"),
					(m.indent = s),
					(m.js += mt(i)),
					Me[i.type](i, B.s4(o));
			},
		};
		function Ee(e, t, n) {
			var i = m.js;
			(m.js = ""), ee[e.type](e, t, n);
			var a = m.js;
			return (m.js = i), a;
		}
		function Wt(e, t) {
			var n = m.js;
			(m.js = ""), Me[e.type](e, t);
			var i = m.js;
			return (m.js = n), i;
		}
		function D6(e) {
			return (
				(m.js = ""),
				Me[e.type] ? Me[e.type](e, B.s7) : ee[e.type](e, B.e19),
				m.js
			);
		}
		function w6(e) {
			return function (t, n) {
				xn.verbatim && t.hasOwnProperty(xn.verbatim)
					? T6(t, n)
					: e(t, n);
			};
		}
		function I6() {
			var e = {};
			for (var t in uo) uo.hasOwnProperty(t) && (e[t] = w6(uo[t]));
			return e;
		}
		var m = {
				js: "",
				newline: `
`,
				optSpace: " ",
				space: " ",
				indentUnit: "    ",
				indent: "",
			},
			ee = void 0,
			Me = Ju;
		Zu.generate = function (e, t) {
			var n = p6(),
				i,
				a;
			return (
				t != null
					? (typeof t.indent == "string" &&
							(n.format.indent.style = t.indent),
						typeof t.base == "number" &&
							(n.format.indent.base = t.base),
						(t = Qu(n, t)),
						(m.indentUnit = t.format.indent.style),
						typeof t.base == "string"
							? (m.indent = t.base)
							: (m.indent = Kp(
									m.indentUnit,
									t.format.indent.base,
								)))
					: ((t = n),
						(m.indentUnit = t.format.indent.style),
						(m.indent = Kp(m.indentUnit, t.format.indent.base))),
				(Ft = t.format.json),
				(Xu = t.format.renumber),
				(nf = Ft ? !1 : t.format.hexadecimal),
				(lo = Ft ? "double" : t.format.quotes),
				(af = t.format.escapeless),
				(m.newline = t.format.newline),
				(m.optSpace = t.format.space),
				t.format.compact &&
					(m.newline = m.optSpace = m.indentUnit = m.indent = ""),
				(m.space = m.optSpace ? m.optSpace : " "),
				(of = t.format.parentheses),
				(Fe = t.format.semicolons),
				(Ku = t.format.safeConcatenation),
				(sf = t.directive),
				(l6 = Ft ? null : t.parse),
				(xn = t),
				xn.verbatim ? (ee = I6()) : (ee = uo),
				D6(e)
			);
		};
	});
	var ac = Be(($5, Mi) => {
		"use strict";
		var Wn = { decodeValues: !0, map: !1, silent: !1 };
		function nc(e) {
			return typeof e == "string" && !!e.trim();
		}
		function ic(e, t) {
			var n = e.split(";").filter(nc),
				i = n.shift(),
				a = N6(i),
				o = a.name,
				s = a.value;
			t = t ? Object.assign({}, Wn, t) : Wn;
			try {
				s = t.decodeValues ? decodeURIComponent(s) : s;
			} catch (c) {
				console.error(
					"set-cookie-parser encountered an error while decoding a cookie with value '" +
						s +
						"'. Set options.decodeValues to false to disable this feature.",
					c,
				);
			}
			var r = { name: o, value: s };
			return (
				n.forEach(function (c) {
					var l = c.split("="),
						d = l.shift().trimLeft().toLowerCase(),
						f = l.join("=");
					d === "expires"
						? (r.expires = new Date(f))
						: d === "max-age"
							? (r.maxAge = parseInt(f, 10))
							: d === "secure"
								? (r.secure = !0)
								: d === "httponly"
									? (r.httpOnly = !0)
									: d === "samesite"
										? (r.sameSite = f)
										: (r[d] = f);
				}),
				r
			);
		}
		function N6(e) {
			var t = "",
				n = "",
				i = e.split("=");
			return (
				i.length > 1 ? ((t = i.shift()), (n = i.join("="))) : (n = e),
				{ name: t, value: n }
			);
		}
		function lf(e, t) {
			if (((t = t ? Object.assign({}, Wn, t) : Wn), !e))
				return t.map ? {} : [];
			if (e.headers)
				if (typeof e.headers.getSetCookie == "function")
					e = e.headers.getSetCookie();
				else if (e.headers["set-cookie"]) e = e.headers["set-cookie"];
				else {
					var n =
						e.headers[
							Object.keys(e.headers).find(function (a) {
								return a.toLowerCase() === "set-cookie";
							})
						];
					!n &&
						e.headers.cookie &&
						!t.silent &&
						console.warn(
							"Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.",
						),
						(e = n);
				}
			if (
				(Array.isArray(e) || (e = [e]),
				(t = t ? Object.assign({}, Wn, t) : Wn),
				t.map)
			) {
				var i = {};
				return e.filter(nc).reduce(function (a, o) {
					var s = ic(o, t);
					return (a[s.name] = s), a;
				}, i);
			} else
				return e.filter(nc).map(function (a) {
					return ic(a, t);
				});
		}
		function L6(e) {
			if (Array.isArray(e)) return e;
			if (typeof e != "string") return [];
			var t = [],
				n = 0,
				i,
				a,
				o,
				s,
				r;
			function c() {
				for (; n < e.length && /\s/.test(e.charAt(n)); ) n += 1;
				return n < e.length;
			}
			function l() {
				return (a = e.charAt(n)), a !== "=" && a !== ";" && a !== ",";
			}
			for (; n < e.length; ) {
				for (i = n, r = !1; c(); )
					if (((a = e.charAt(n)), a === ",")) {
						for (o = n, n += 1, c(), s = n; n < e.length && l(); )
							n += 1;
						n < e.length && e.charAt(n) === "="
							? ((r = !0),
								(n = s),
								t.push(e.substring(i, o)),
								(i = n))
							: (n = o + 1);
					} else n += 1;
				(!r || n >= e.length) && t.push(e.substring(i, e.length));
			}
			return t;
		}
		Mi.exports = lf;
		Mi.exports.parse = lf;
		Mi.exports.parseString = ic;
		Mi.exports.splitCookiesString = L6;
	});
	var df = Be(() => {});
	var Gt = Be((po, pf) => {
		(function (e, t) {
			typeof po == "object"
				? (pf.exports = po = t())
				: typeof define == "function" && define.amd
					? define([], t)
					: (e.CryptoJS = t());
		})(po, function () {
			var e =
				e ||
				(function (t, n) {
					var i;
					if (
						(typeof window < "u" &&
							window.crypto &&
							(i = window.crypto),
						typeof self < "u" && self.crypto && (i = self.crypto),
						typeof globalThis < "u" &&
							globalThis.crypto &&
							(i = globalThis.crypto),
						!i &&
							typeof window < "u" &&
							window.msCrypto &&
							(i = window.msCrypto),
						!i &&
							typeof global < "u" &&
							global.crypto &&
							(i = global.crypto),
						!i && typeof wc == "function")
					)
						try {
							i = df();
						} catch {}
					var a = function () {
							if (i) {
								if (typeof i.getRandomValues == "function")
									try {
										return i.getRandomValues(
											new Uint32Array(1),
										)[0];
									} catch {}
								if (typeof i.randomBytes == "function")
									try {
										return i.randomBytes(4).readInt32LE();
									} catch {}
							}
							throw new Error(
								"Native crypto module could not be used to get secure random number.",
							);
						},
						o =
							Object.create ||
							(function () {
								function E() {}
								return function (A) {
									var L;
									return (
										(E.prototype = A),
										(L = new E()),
										(E.prototype = null),
										L
									);
								};
							})(),
						s = {},
						r = (s.lib = {}),
						c = (r.Base = (function () {
							return {
								extend: function (E) {
									var A = o(this);
									return (
										E && A.mixIn(E),
										(!A.hasOwnProperty("init") ||
											this.init === A.init) &&
											(A.init = function () {
												A.$super.init.apply(
													this,
													arguments,
												);
											}),
										(A.init.prototype = A),
										(A.$super = this),
										A
									);
								},
								create: function () {
									var E = this.extend();
									return E.init.apply(E, arguments), E;
								},
								init: function () {},
								mixIn: function (E) {
									for (var A in E)
										E.hasOwnProperty(A) && (this[A] = E[A]);
									E.hasOwnProperty("toString") &&
										(this.toString = E.toString);
								},
								clone: function () {
									return this.init.prototype.extend(this);
								},
							};
						})()),
						l = (r.WordArray = c.extend({
							init: function (E, A) {
								(E = this.words = E || []),
									A != n
										? (this.sigBytes = A)
										: (this.sigBytes = E.length * 4);
							},
							toString: function (E) {
								return (E || f).stringify(this);
							},
							concat: function (E) {
								var A = this.words,
									L = E.words,
									y = this.sigBytes,
									F = E.sigBytes;
								if ((this.clamp(), y % 4))
									for (var k = 0; k < F; k++) {
										var J =
											(L[k >>> 2] >>>
												(24 - (k % 4) * 8)) &
											255;
										A[(y + k) >>> 2] |=
											J << (24 - ((y + k) % 4) * 8);
									}
								else
									for (var N = 0; N < F; N += 4)
										A[(y + N) >>> 2] = L[N >>> 2];
								return (this.sigBytes += F), this;
							},
							clamp: function () {
								var E = this.words,
									A = this.sigBytes;
								(E[A >>> 2] &=
									4294967295 << (32 - (A % 4) * 8)),
									(E.length = t.ceil(A / 4));
							},
							clone: function () {
								var E = c.clone.call(this);
								return (E.words = this.words.slice(0)), E;
							},
							random: function (E) {
								for (var A = [], L = 0; L < E; L += 4)
									A.push(a());
								return new l.init(A, E);
							},
						})),
						d = (s.enc = {}),
						f = (d.Hex = {
							stringify: function (E) {
								for (
									var A = E.words,
										L = E.sigBytes,
										y = [],
										F = 0;
									F < L;
									F++
								) {
									var k =
										(A[F >>> 2] >>> (24 - (F % 4) * 8)) &
										255;
									y.push((k >>> 4).toString(16)),
										y.push((k & 15).toString(16));
								}
								return y.join("");
							},
							parse: function (E) {
								for (
									var A = E.length, L = [], y = 0;
									y < A;
									y += 2
								)
									L[y >>> 3] |=
										parseInt(E.substr(y, 2), 16) <<
										(24 - (y % 8) * 4);
								return new l.init(L, A / 2);
							},
						}),
						p = (d.Latin1 = {
							stringify: function (E) {
								for (
									var A = E.words,
										L = E.sigBytes,
										y = [],
										F = 0;
									F < L;
									F++
								) {
									var k =
										(A[F >>> 2] >>> (24 - (F % 4) * 8)) &
										255;
									y.push(String.fromCharCode(k));
								}
								return y.join("");
							},
							parse: function (E) {
								for (
									var A = E.length, L = [], y = 0;
									y < A;
									y++
								)
									L[y >>> 2] |=
										(E.charCodeAt(y) & 255) <<
										(24 - (y % 4) * 8);
								return new l.init(L, A);
							},
						}),
						g = (d.Utf8 = {
							stringify: function (E) {
								try {
									return decodeURIComponent(
										escape(p.stringify(E)),
									);
								} catch {
									throw new Error("Malformed UTF-8 data");
								}
							},
							parse: function (E) {
								return p.parse(unescape(encodeURIComponent(E)));
							},
						}),
						T = (r.BufferedBlockAlgorithm = c.extend({
							reset: function () {
								(this._data = new l.init()),
									(this._nDataBytes = 0);
							},
							_append: function (E) {
								typeof E == "string" && (E = g.parse(E)),
									this._data.concat(E),
									(this._nDataBytes += E.sigBytes);
							},
							_process: function (E) {
								var A,
									L = this._data,
									y = L.words,
									F = L.sigBytes,
									k = this.blockSize,
									J = k * 4,
									N = F / J;
								E
									? (N = t.ceil(N))
									: (N = t.max(
											(N | 0) - this._minBufferSize,
											0,
										));
								var W = N * k,
									G = t.min(W * 4, F);
								if (W) {
									for (var R = 0; R < W; R += k)
										this._doProcessBlock(y, R);
									(A = y.splice(0, W)), (L.sigBytes -= G);
								}
								return new l.init(A, G);
							},
							clone: function () {
								var E = c.clone.call(this);
								return (E._data = this._data.clone()), E;
							},
							_minBufferSize: 0,
						})),
						D = (r.Hasher = T.extend({
							cfg: c.extend(),
							init: function (E) {
								(this.cfg = this.cfg.extend(E)), this.reset();
							},
							reset: function () {
								T.reset.call(this), this._doReset();
							},
							update: function (E) {
								return this._append(E), this._process(), this;
							},
							finalize: function (E) {
								E && this._append(E);
								var A = this._doFinalize();
								return A;
							},
							blockSize: 512 / 32,
							_createHelper: function (E) {
								return function (A, L) {
									return new E.init(L).finalize(A);
								};
							},
							_createHmacHelper: function (E) {
								return function (A, L) {
									return new S.HMAC.init(E, L).finalize(A);
								};
							},
						})),
						S = (s.algo = {});
					return s;
				})(Math);
			return e;
		});
	});
	var mf = Be((fo, ff) => {
		(function (e, t) {
			typeof fo == "object"
				? (ff.exports = fo = t(Gt()))
				: typeof define == "function" && define.amd
					? define(["./core"], t)
					: t(e.CryptoJS);
		})(fo, function (e) {
			return (
				(function () {
					var t = e,
						n = t.lib,
						i = n.WordArray,
						a = t.enc,
						o = (a.Base64 = {
							stringify: function (r) {
								var c = r.words,
									l = r.sigBytes,
									d = this._map;
								r.clamp();
								for (var f = [], p = 0; p < l; p += 3)
									for (
										var g =
												(c[p >>> 2] >>>
													(24 - (p % 4) * 8)) &
												255,
											T =
												(c[(p + 1) >>> 2] >>>
													(24 - ((p + 1) % 4) * 8)) &
												255,
											D =
												(c[(p + 2) >>> 2] >>>
													(24 - ((p + 2) % 4) * 8)) &
												255,
											S = (g << 16) | (T << 8) | D,
											E = 0;
										E < 4 && p + E * 0.75 < l;
										E++
									)
										f.push(
											d.charAt(
												(S >>> (6 * (3 - E))) & 63,
											),
										);
								var A = d.charAt(64);
								if (A) for (; f.length % 4; ) f.push(A);
								return f.join("");
							},
							parse: function (r) {
								var c = r.length,
									l = this._map,
									d = this._reverseMap;
								if (!d) {
									d = this._reverseMap = [];
									for (var f = 0; f < l.length; f++)
										d[l.charCodeAt(f)] = f;
								}
								var p = l.charAt(64);
								if (p) {
									var g = r.indexOf(p);
									g !== -1 && (c = g);
								}
								return s(r, c, d);
							},
							_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
						});
					function s(r, c, l) {
						for (var d = [], f = 0, p = 0; p < c; p++)
							if (p % 4) {
								var g = l[r.charCodeAt(p - 1)] << ((p % 4) * 2),
									T =
										l[r.charCodeAt(p)] >>>
										(6 - (p % 4) * 2),
									D = g | T;
								(d[f >>> 2] |= D << (24 - (f % 4) * 8)), f++;
							}
						return i.create(d, f);
					}
				})(),
				e.enc.Base64
			);
		});
	});
	var bf = Be((mo, hf) => {
		(function (e, t) {
			typeof mo == "object"
				? (hf.exports = mo = t(Gt()))
				: typeof define == "function" && define.amd
					? define(["./core"], t)
					: t(e.CryptoJS);
		})(mo, function (e) {
			return (
				(function (t) {
					var n = e,
						i = n.lib,
						a = i.WordArray,
						o = i.Hasher,
						s = n.algo,
						r = [];
					(function () {
						for (var g = 0; g < 64; g++)
							r[g] = (t.abs(t.sin(g + 1)) * 4294967296) | 0;
					})();
					var c = (s.MD5 = o.extend({
						_doReset: function () {
							this._hash = new a.init([
								1732584193, 4023233417, 2562383102, 271733878,
							]);
						},
						_doProcessBlock: function (g, T) {
							for (var D = 0; D < 16; D++) {
								var S = T + D,
									E = g[S];
								g[S] =
									(((E << 8) | (E >>> 24)) & 16711935) |
									(((E << 24) | (E >>> 8)) & 4278255360);
							}
							var A = this._hash.words,
								L = g[T + 0],
								y = g[T + 1],
								F = g[T + 2],
								k = g[T + 3],
								J = g[T + 4],
								N = g[T + 5],
								W = g[T + 6],
								G = g[T + 7],
								R = g[T + 8],
								j = g[T + 9],
								K = g[T + 10],
								q = g[T + 11],
								ue = g[T + 12],
								fe = g[T + 13],
								Pe = g[T + 14],
								at = g[T + 15],
								H = A[0],
								z = A[1],
								Y = A[2],
								V = A[3];
							(H = l(H, z, Y, V, L, 7, r[0])),
								(V = l(V, H, z, Y, y, 12, r[1])),
								(Y = l(Y, V, H, z, F, 17, r[2])),
								(z = l(z, Y, V, H, k, 22, r[3])),
								(H = l(H, z, Y, V, J, 7, r[4])),
								(V = l(V, H, z, Y, N, 12, r[5])),
								(Y = l(Y, V, H, z, W, 17, r[6])),
								(z = l(z, Y, V, H, G, 22, r[7])),
								(H = l(H, z, Y, V, R, 7, r[8])),
								(V = l(V, H, z, Y, j, 12, r[9])),
								(Y = l(Y, V, H, z, K, 17, r[10])),
								(z = l(z, Y, V, H, q, 22, r[11])),
								(H = l(H, z, Y, V, ue, 7, r[12])),
								(V = l(V, H, z, Y, fe, 12, r[13])),
								(Y = l(Y, V, H, z, Pe, 17, r[14])),
								(z = l(z, Y, V, H, at, 22, r[15])),
								(H = d(H, z, Y, V, y, 5, r[16])),
								(V = d(V, H, z, Y, W, 9, r[17])),
								(Y = d(Y, V, H, z, q, 14, r[18])),
								(z = d(z, Y, V, H, L, 20, r[19])),
								(H = d(H, z, Y, V, N, 5, r[20])),
								(V = d(V, H, z, Y, K, 9, r[21])),
								(Y = d(Y, V, H, z, at, 14, r[22])),
								(z = d(z, Y, V, H, J, 20, r[23])),
								(H = d(H, z, Y, V, j, 5, r[24])),
								(V = d(V, H, z, Y, Pe, 9, r[25])),
								(Y = d(Y, V, H, z, k, 14, r[26])),
								(z = d(z, Y, V, H, R, 20, r[27])),
								(H = d(H, z, Y, V, fe, 5, r[28])),
								(V = d(V, H, z, Y, F, 9, r[29])),
								(Y = d(Y, V, H, z, G, 14, r[30])),
								(z = d(z, Y, V, H, ue, 20, r[31])),
								(H = f(H, z, Y, V, N, 4, r[32])),
								(V = f(V, H, z, Y, R, 11, r[33])),
								(Y = f(Y, V, H, z, q, 16, r[34])),
								(z = f(z, Y, V, H, Pe, 23, r[35])),
								(H = f(H, z, Y, V, y, 4, r[36])),
								(V = f(V, H, z, Y, J, 11, r[37])),
								(Y = f(Y, V, H, z, G, 16, r[38])),
								(z = f(z, Y, V, H, K, 23, r[39])),
								(H = f(H, z, Y, V, fe, 4, r[40])),
								(V = f(V, H, z, Y, L, 11, r[41])),
								(Y = f(Y, V, H, z, k, 16, r[42])),
								(z = f(z, Y, V, H, W, 23, r[43])),
								(H = f(H, z, Y, V, j, 4, r[44])),
								(V = f(V, H, z, Y, ue, 11, r[45])),
								(Y = f(Y, V, H, z, at, 16, r[46])),
								(z = f(z, Y, V, H, F, 23, r[47])),
								(H = p(H, z, Y, V, L, 6, r[48])),
								(V = p(V, H, z, Y, G, 10, r[49])),
								(Y = p(Y, V, H, z, Pe, 15, r[50])),
								(z = p(z, Y, V, H, N, 21, r[51])),
								(H = p(H, z, Y, V, ue, 6, r[52])),
								(V = p(V, H, z, Y, k, 10, r[53])),
								(Y = p(Y, V, H, z, K, 15, r[54])),
								(z = p(z, Y, V, H, y, 21, r[55])),
								(H = p(H, z, Y, V, R, 6, r[56])),
								(V = p(V, H, z, Y, at, 10, r[57])),
								(Y = p(Y, V, H, z, W, 15, r[58])),
								(z = p(z, Y, V, H, fe, 21, r[59])),
								(H = p(H, z, Y, V, J, 6, r[60])),
								(V = p(V, H, z, Y, q, 10, r[61])),
								(Y = p(Y, V, H, z, F, 15, r[62])),
								(z = p(z, Y, V, H, j, 21, r[63])),
								(A[0] = (A[0] + H) | 0),
								(A[1] = (A[1] + z) | 0),
								(A[2] = (A[2] + Y) | 0),
								(A[3] = (A[3] + V) | 0);
						},
						_doFinalize: function () {
							var g = this._data,
								T = g.words,
								D = this._nDataBytes * 8,
								S = g.sigBytes * 8;
							T[S >>> 5] |= 128 << (24 - (S % 32));
							var E = t.floor(D / 4294967296),
								A = D;
							(T[(((S + 64) >>> 9) << 4) + 15] =
								(((E << 8) | (E >>> 24)) & 16711935) |
								(((E << 24) | (E >>> 8)) & 4278255360)),
								(T[(((S + 64) >>> 9) << 4) + 14] =
									(((A << 8) | (A >>> 24)) & 16711935) |
									(((A << 24) | (A >>> 8)) & 4278255360)),
								(g.sigBytes = (T.length + 1) * 4),
								this._process();
							for (
								var L = this._hash, y = L.words, F = 0;
								F < 4;
								F++
							) {
								var k = y[F];
								y[F] =
									(((k << 8) | (k >>> 24)) & 16711935) |
									(((k << 24) | (k >>> 8)) & 4278255360);
							}
							return L;
						},
						clone: function () {
							var g = o.clone.call(this);
							return (g._hash = this._hash.clone()), g;
						},
					}));
					function l(g, T, D, S, E, A, L) {
						var y = g + ((T & D) | (~T & S)) + E + L;
						return ((y << A) | (y >>> (32 - A))) + T;
					}
					function d(g, T, D, S, E, A, L) {
						var y = g + ((T & S) | (D & ~S)) + E + L;
						return ((y << A) | (y >>> (32 - A))) + T;
					}
					function f(g, T, D, S, E, A, L) {
						var y = g + (T ^ D ^ S) + E + L;
						return ((y << A) | (y >>> (32 - A))) + T;
					}
					function p(g, T, D, S, E, A, L) {
						var y = g + (D ^ (T | ~S)) + E + L;
						return ((y << A) | (y >>> (32 - A))) + T;
					}
					(n.MD5 = o._createHelper(c)),
						(n.HmacMD5 = o._createHmacHelper(c));
				})(Math),
				e.MD5
			);
		});
	});
	var xf = Be((ho, gf) => {
		(function (e, t) {
			typeof ho == "object"
				? (gf.exports = ho = t(Gt()))
				: typeof define == "function" && define.amd
					? define(["./core"], t)
					: t(e.CryptoJS);
		})(ho, function (e) {
			return (
				(function () {
					var t = e,
						n = t.lib,
						i = n.WordArray,
						a = n.Hasher,
						o = t.algo,
						s = [],
						r = (o.SHA1 = a.extend({
							_doReset: function () {
								this._hash = new i.init([
									1732584193, 4023233417, 2562383102,
									271733878, 3285377520,
								]);
							},
							_doProcessBlock: function (c, l) {
								for (
									var d = this._hash.words,
										f = d[0],
										p = d[1],
										g = d[2],
										T = d[3],
										D = d[4],
										S = 0;
									S < 80;
									S++
								) {
									if (S < 16) s[S] = c[l + S] | 0;
									else {
										var E =
											s[S - 3] ^
											s[S - 8] ^
											s[S - 14] ^
											s[S - 16];
										s[S] = (E << 1) | (E >>> 31);
									}
									var A = ((f << 5) | (f >>> 27)) + D + s[S];
									S < 20
										? (A +=
												((p & g) | (~p & T)) +
												1518500249)
										: S < 40
											? (A += (p ^ g ^ T) + 1859775393)
											: S < 60
												? (A +=
														((p & g) |
															(p & T) |
															(g & T)) -
														1894007588)
												: (A +=
														(p ^ g ^ T) -
														899497514),
										(D = T),
										(T = g),
										(g = (p << 30) | (p >>> 2)),
										(p = f),
										(f = A);
								}
								(d[0] = (d[0] + f) | 0),
									(d[1] = (d[1] + p) | 0),
									(d[2] = (d[2] + g) | 0),
									(d[3] = (d[3] + T) | 0),
									(d[4] = (d[4] + D) | 0);
							},
							_doFinalize: function () {
								var c = this._data,
									l = c.words,
									d = this._nDataBytes * 8,
									f = c.sigBytes * 8;
								return (
									(l[f >>> 5] |= 128 << (24 - (f % 32))),
									(l[(((f + 64) >>> 9) << 4) + 14] =
										Math.floor(d / 4294967296)),
									(l[(((f + 64) >>> 9) << 4) + 15] = d),
									(c.sigBytes = l.length * 4),
									this._process(),
									this._hash
								);
							},
							clone: function () {
								var c = a.clone.call(this);
								return (c._hash = this._hash.clone()), c;
							},
						}));
					(t.SHA1 = a._createHelper(r)),
						(t.HmacSHA1 = a._createHmacHelper(r));
				})(),
				e.SHA1
			);
		});
	});
	var vf = Be((bo, Ef) => {
		(function (e, t) {
			typeof bo == "object"
				? (Ef.exports = bo = t(Gt()))
				: typeof define == "function" && define.amd
					? define(["./core"], t)
					: t(e.CryptoJS);
		})(bo, function (e) {
			(function () {
				var t = e,
					n = t.lib,
					i = n.Base,
					a = t.enc,
					o = a.Utf8,
					s = t.algo,
					r = (s.HMAC = i.extend({
						init: function (c, l) {
							(c = this._hasher = new c.init()),
								typeof l == "string" && (l = o.parse(l));
							var d = c.blockSize,
								f = d * 4;
							l.sigBytes > f && (l = c.finalize(l)), l.clamp();
							for (
								var p = (this._oKey = l.clone()),
									g = (this._iKey = l.clone()),
									T = p.words,
									D = g.words,
									S = 0;
								S < d;
								S++
							)
								(T[S] ^= 1549556828), (D[S] ^= 909522486);
							(p.sigBytes = g.sigBytes = f), this.reset();
						},
						reset: function () {
							var c = this._hasher;
							c.reset(), c.update(this._iKey);
						},
						update: function (c) {
							return this._hasher.update(c), this;
						},
						finalize: function (c) {
							var l = this._hasher,
								d = l.finalize(c);
							l.reset();
							var f = l.finalize(this._oKey.clone().concat(d));
							return f;
						},
					}));
			})();
		});
	});
	var oc = Be((go, Af) => {
		(function (e, t, n) {
			typeof go == "object"
				? (Af.exports = go = t(Gt(), xf(), vf()))
				: typeof define == "function" && define.amd
					? define(["./core", "./sha1", "./hmac"], t)
					: t(e.CryptoJS);
		})(go, function (e) {
			return (
				(function () {
					var t = e,
						n = t.lib,
						i = n.Base,
						a = n.WordArray,
						o = t.algo,
						s = o.MD5,
						r = (o.EvpKDF = i.extend({
							cfg: i.extend({
								keySize: 128 / 32,
								hasher: s,
								iterations: 1,
							}),
							init: function (c) {
								this.cfg = this.cfg.extend(c);
							},
							compute: function (c, l) {
								for (
									var d,
										f = this.cfg,
										p = f.hasher.create(),
										g = a.create(),
										T = g.words,
										D = f.keySize,
										S = f.iterations;
									T.length < D;

								) {
									d && p.update(d),
										(d = p.update(c).finalize(l)),
										p.reset();
									for (var E = 1; E < S; E++)
										(d = p.finalize(d)), p.reset();
									g.concat(d);
								}
								return (g.sigBytes = D * 4), g;
							},
						}));
					t.EvpKDF = function (c, l, d) {
						return r.create(d).compute(c, l);
					};
				})(),
				e.EvpKDF
			);
		});
	});
	var Cf = Be((xo, Tf) => {
		(function (e, t, n) {
			typeof xo == "object"
				? (Tf.exports = xo = t(Gt(), oc()))
				: typeof define == "function" && define.amd
					? define(["./core", "./evpkdf"], t)
					: t(e.CryptoJS);
		})(xo, function (e) {
			e.lib.Cipher ||
				(function (t) {
					var n = e,
						i = n.lib,
						a = i.Base,
						o = i.WordArray,
						s = i.BufferedBlockAlgorithm,
						r = n.enc,
						c = r.Utf8,
						l = r.Base64,
						d = n.algo,
						f = d.EvpKDF,
						p = (i.Cipher = s.extend({
							cfg: a.extend(),
							createEncryptor: function (R, j) {
								return this.create(this._ENC_XFORM_MODE, R, j);
							},
							createDecryptor: function (R, j) {
								return this.create(this._DEC_XFORM_MODE, R, j);
							},
							init: function (R, j, K) {
								(this.cfg = this.cfg.extend(K)),
									(this._xformMode = R),
									(this._key = j),
									this.reset();
							},
							reset: function () {
								s.reset.call(this), this._doReset();
							},
							process: function (R) {
								return this._append(R), this._process();
							},
							finalize: function (R) {
								R && this._append(R);
								var j = this._doFinalize();
								return j;
							},
							keySize: 128 / 32,
							ivSize: 128 / 32,
							_ENC_XFORM_MODE: 1,
							_DEC_XFORM_MODE: 2,
							_createHelper: (function () {
								function R(j) {
									return typeof j == "string" ? G : J;
								}
								return function (j) {
									return {
										encrypt: function (K, q, ue) {
											return R(q).encrypt(j, K, q, ue);
										},
										decrypt: function (K, q, ue) {
											return R(q).decrypt(j, K, q, ue);
										},
									};
								};
							})(),
						})),
						g = (i.StreamCipher = p.extend({
							_doFinalize: function () {
								var R = this._process(!0);
								return R;
							},
							blockSize: 1,
						})),
						T = (n.mode = {}),
						D = (i.BlockCipherMode = a.extend({
							createEncryptor: function (R, j) {
								return this.Encryptor.create(R, j);
							},
							createDecryptor: function (R, j) {
								return this.Decryptor.create(R, j);
							},
							init: function (R, j) {
								(this._cipher = R), (this._iv = j);
							},
						})),
						S = (T.CBC = (function () {
							var R = D.extend();
							(R.Encryptor = R.extend({
								processBlock: function (K, q) {
									var ue = this._cipher,
										fe = ue.blockSize;
									j.call(this, K, q, fe),
										ue.encryptBlock(K, q),
										(this._prevBlock = K.slice(q, q + fe));
								},
							})),
								(R.Decryptor = R.extend({
									processBlock: function (K, q) {
										var ue = this._cipher,
											fe = ue.blockSize,
											Pe = K.slice(q, q + fe);
										ue.decryptBlock(K, q),
											j.call(this, K, q, fe),
											(this._prevBlock = Pe);
									},
								}));
							function j(K, q, ue) {
								var fe,
									Pe = this._iv;
								Pe
									? ((fe = Pe), (this._iv = t))
									: (fe = this._prevBlock);
								for (var at = 0; at < ue; at++)
									K[q + at] ^= fe[at];
							}
							return R;
						})()),
						E = (n.pad = {}),
						A = (E.Pkcs7 = {
							pad: function (R, j) {
								for (
									var K = j * 4,
										q = K - (R.sigBytes % K),
										ue =
											(q << 24) |
											(q << 16) |
											(q << 8) |
											q,
										fe = [],
										Pe = 0;
									Pe < q;
									Pe += 4
								)
									fe.push(ue);
								var at = o.create(fe, q);
								R.concat(at);
							},
							unpad: function (R) {
								var j = R.words[(R.sigBytes - 1) >>> 2] & 255;
								R.sigBytes -= j;
							},
						}),
						L = (i.BlockCipher = p.extend({
							cfg: p.cfg.extend({ mode: S, padding: A }),
							reset: function () {
								var R;
								p.reset.call(this);
								var j = this.cfg,
									K = j.iv,
									q = j.mode;
								this._xformMode == this._ENC_XFORM_MODE
									? (R = q.createEncryptor)
									: ((R = q.createDecryptor),
										(this._minBufferSize = 1)),
									this._mode && this._mode.__creator == R
										? this._mode.init(this, K && K.words)
										: ((this._mode = R.call(
												q,
												this,
												K && K.words,
											)),
											(this._mode.__creator = R));
							},
							_doProcessBlock: function (R, j) {
								this._mode.processBlock(R, j);
							},
							_doFinalize: function () {
								var R,
									j = this.cfg.padding;
								return (
									this._xformMode == this._ENC_XFORM_MODE
										? (j.pad(this._data, this.blockSize),
											(R = this._process(!0)))
										: ((R = this._process(!0)), j.unpad(R)),
									R
								);
							},
							blockSize: 128 / 32,
						})),
						y = (i.CipherParams = a.extend({
							init: function (R) {
								this.mixIn(R);
							},
							toString: function (R) {
								return (R || this.formatter).stringify(this);
							},
						})),
						F = (n.format = {}),
						k = (F.OpenSSL = {
							stringify: function (R) {
								var j,
									K = R.ciphertext,
									q = R.salt;
								return (
									q
										? (j = o
												.create([
													1398893684, 1701076831,
												])
												.concat(q)
												.concat(K))
										: (j = K),
									j.toString(l)
								);
							},
							parse: function (R) {
								var j,
									K = l.parse(R),
									q = K.words;
								return (
									q[0] == 1398893684 &&
										q[1] == 1701076831 &&
										((j = o.create(q.slice(2, 4))),
										q.splice(0, 4),
										(K.sigBytes -= 16)),
									y.create({ ciphertext: K, salt: j })
								);
							},
						}),
						J = (i.SerializableCipher = a.extend({
							cfg: a.extend({ format: k }),
							encrypt: function (R, j, K, q) {
								q = this.cfg.extend(q);
								var ue = R.createEncryptor(K, q),
									fe = ue.finalize(j),
									Pe = ue.cfg;
								return y.create({
									ciphertext: fe,
									key: K,
									iv: Pe.iv,
									algorithm: R,
									mode: Pe.mode,
									padding: Pe.padding,
									blockSize: R.blockSize,
									formatter: q.format,
								});
							},
							decrypt: function (R, j, K, q) {
								(q = this.cfg.extend(q)),
									(j = this._parse(j, q.format));
								var ue = R.createDecryptor(K, q).finalize(
									j.ciphertext,
								);
								return ue;
							},
							_parse: function (R, j) {
								return typeof R == "string"
									? j.parse(R, this)
									: R;
							},
						})),
						N = (n.kdf = {}),
						W = (N.OpenSSL = {
							execute: function (R, j, K, q, ue) {
								if ((q || (q = o.random(64 / 8)), ue))
									var fe = f
										.create({ keySize: j + K, hasher: ue })
										.compute(R, q);
								else
									var fe = f
										.create({ keySize: j + K })
										.compute(R, q);
								var Pe = o.create(fe.words.slice(j), K * 4);
								return (
									(fe.sigBytes = j * 4),
									y.create({ key: fe, iv: Pe, salt: q })
								);
							},
						}),
						G = (i.PasswordBasedCipher = J.extend({
							cfg: J.cfg.extend({ kdf: W }),
							encrypt: function (R, j, K, q) {
								q = this.cfg.extend(q);
								var ue = q.kdf.execute(
									K,
									R.keySize,
									R.ivSize,
									q.salt,
									q.hasher,
								);
								q.iv = ue.iv;
								var fe = J.encrypt.call(this, R, j, ue.key, q);
								return fe.mixIn(ue), fe;
							},
							decrypt: function (R, j, K, q) {
								(q = this.cfg.extend(q)),
									(j = this._parse(j, q.format));
								var ue = q.kdf.execute(
									K,
									R.keySize,
									R.ivSize,
									j.salt,
									q.hasher,
								);
								q.iv = ue.iv;
								var fe = J.decrypt.call(this, R, j, ue.key, q);
								return fe;
							},
						}));
				})();
		});
	});
	var kf = Be((Eo, yf) => {
		(function (e, t, n) {
			typeof Eo == "object"
				? (yf.exports = Eo = t(Gt(), mf(), bf(), oc(), Cf()))
				: typeof define == "function" && define.amd
					? define(
							[
								"./core",
								"./enc-base64",
								"./md5",
								"./evpkdf",
								"./cipher-core",
							],
							t,
						)
					: t(e.CryptoJS);
		})(Eo, function (e) {
			return (
				(function () {
					var t = e,
						n = t.lib,
						i = n.BlockCipher,
						a = t.algo,
						o = [],
						s = [],
						r = [],
						c = [],
						l = [],
						d = [],
						f = [],
						p = [],
						g = [],
						T = [];
					(function () {
						for (var E = [], A = 0; A < 256; A++)
							A < 128 ? (E[A] = A << 1) : (E[A] = (A << 1) ^ 283);
						for (var L = 0, y = 0, A = 0; A < 256; A++) {
							var F =
								y ^ (y << 1) ^ (y << 2) ^ (y << 3) ^ (y << 4);
							(F = (F >>> 8) ^ (F & 255) ^ 99),
								(o[L] = F),
								(s[F] = L);
							var k = E[L],
								J = E[k],
								N = E[J],
								W = (E[F] * 257) ^ (F * 16843008);
							(r[L] = (W << 24) | (W >>> 8)),
								(c[L] = (W << 16) | (W >>> 16)),
								(l[L] = (W << 8) | (W >>> 24)),
								(d[L] = W);
							var W =
								(N * 16843009) ^
								(J * 65537) ^
								(k * 257) ^
								(L * 16843008);
							(f[F] = (W << 24) | (W >>> 8)),
								(p[F] = (W << 16) | (W >>> 16)),
								(g[F] = (W << 8) | (W >>> 24)),
								(T[F] = W),
								L
									? ((L = k ^ E[E[E[N ^ k]]]), (y ^= E[E[y]]))
									: (L = y = 1);
						}
					})();
					var D = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
						S = (a.AES = i.extend({
							_doReset: function () {
								var E;
								if (
									!(
										this._nRounds &&
										this._keyPriorReset === this._key
									)
								) {
									for (
										var A = (this._keyPriorReset =
												this._key),
											L = A.words,
											y = A.sigBytes / 4,
											F = (this._nRounds = y + 6),
											k = (F + 1) * 4,
											J = (this._keySchedule = []),
											N = 0;
										N < k;
										N++
									)
										N < y
											? (J[N] = L[N])
											: ((E = J[N - 1]),
												N % y
													? y > 6 &&
														N % y == 4 &&
														(E =
															(o[E >>> 24] <<
																24) |
															(o[
																(E >>> 16) & 255
															] <<
																16) |
															(o[
																(E >>> 8) & 255
															] <<
																8) |
															o[E & 255])
													: ((E =
															(E << 8) |
															(E >>> 24)),
														(E =
															(o[E >>> 24] <<
																24) |
															(o[
																(E >>> 16) & 255
															] <<
																16) |
															(o[
																(E >>> 8) & 255
															] <<
																8) |
															o[E & 255]),
														(E ^=
															D[(N / y) | 0] <<
															24)),
												(J[N] = J[N - y] ^ E));
									for (
										var W = (this._invKeySchedule = []),
											G = 0;
										G < k;
										G++
									) {
										var N = k - G;
										if (G % 4) var E = J[N];
										else var E = J[N - 4];
										G < 4 || N <= 4
											? (W[G] = E)
											: (W[G] =
													f[o[E >>> 24]] ^
													p[o[(E >>> 16) & 255]] ^
													g[o[(E >>> 8) & 255]] ^
													T[o[E & 255]]);
									}
								}
							},
							encryptBlock: function (E, A) {
								this._doCryptBlock(
									E,
									A,
									this._keySchedule,
									r,
									c,
									l,
									d,
									o,
								);
							},
							decryptBlock: function (E, A) {
								var L = E[A + 1];
								(E[A + 1] = E[A + 3]),
									(E[A + 3] = L),
									this._doCryptBlock(
										E,
										A,
										this._invKeySchedule,
										f,
										p,
										g,
										T,
										s,
									);
								var L = E[A + 1];
								(E[A + 1] = E[A + 3]), (E[A + 3] = L);
							},
							_doCryptBlock: function (E, A, L, y, F, k, J, N) {
								for (
									var W = this._nRounds,
										G = E[A] ^ L[0],
										R = E[A + 1] ^ L[1],
										j = E[A + 2] ^ L[2],
										K = E[A + 3] ^ L[3],
										q = 4,
										ue = 1;
									ue < W;
									ue++
								) {
									var fe =
											y[G >>> 24] ^
											F[(R >>> 16) & 255] ^
											k[(j >>> 8) & 255] ^
											J[K & 255] ^
											L[q++],
										Pe =
											y[R >>> 24] ^
											F[(j >>> 16) & 255] ^
											k[(K >>> 8) & 255] ^
											J[G & 255] ^
											L[q++],
										at =
											y[j >>> 24] ^
											F[(K >>> 16) & 255] ^
											k[(G >>> 8) & 255] ^
											J[R & 255] ^
											L[q++],
										H =
											y[K >>> 24] ^
											F[(G >>> 16) & 255] ^
											k[(R >>> 8) & 255] ^
											J[j & 255] ^
											L[q++];
									(G = fe), (R = Pe), (j = at), (K = H);
								}
								var fe =
										((N[G >>> 24] << 24) |
											(N[(R >>> 16) & 255] << 16) |
											(N[(j >>> 8) & 255] << 8) |
											N[K & 255]) ^
										L[q++],
									Pe =
										((N[R >>> 24] << 24) |
											(N[(j >>> 16) & 255] << 16) |
											(N[(K >>> 8) & 255] << 8) |
											N[G & 255]) ^
										L[q++],
									at =
										((N[j >>> 24] << 24) |
											(N[(K >>> 16) & 255] << 16) |
											(N[(G >>> 8) & 255] << 8) |
											N[R & 255]) ^
										L[q++],
									H =
										((N[K >>> 24] << 24) |
											(N[(G >>> 16) & 255] << 16) |
											(N[(R >>> 8) & 255] << 8) |
											N[j & 255]) ^
										L[q++];
								(E[A] = fe),
									(E[A + 1] = Pe),
									(E[A + 2] = at),
									(E[A + 3] = H);
							},
							keySize: 256 / 32,
						}));
					t.AES = i._createHelper(S);
				})(),
				e.AES
			);
		});
	});
	var Sf = Be((vo, _f) => {
		(function (e, t) {
			typeof vo == "object"
				? (_f.exports = vo = t(Gt()))
				: typeof define == "function" && define.amd
					? define(["./core"], t)
					: t(e.CryptoJS);
		})(vo, function (e) {
			return e.enc.Utf8;
		});
	});
	var Rf = Be((a7, P6) => {
		P6.exports = {
			"application/1d-interleaved-parityfec": { source: "iana" },
			"application/3gpdash-qoe-report+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/3gpp-ims+xml": { source: "iana", compressible: !0 },
			"application/3gpphal+json": { source: "iana", compressible: !0 },
			"application/3gpphalforms+json": {
				source: "iana",
				compressible: !0,
			},
			"application/a2l": { source: "iana" },
			"application/ace+cbor": { source: "iana" },
			"application/activemessage": { source: "iana" },
			"application/activity+json": { source: "iana", compressible: !0 },
			"application/alto-costmap+json": {
				source: "iana",
				compressible: !0,
			},
			"application/alto-costmapfilter+json": {
				source: "iana",
				compressible: !0,
			},
			"application/alto-directory+json": {
				source: "iana",
				compressible: !0,
			},
			"application/alto-endpointcost+json": {
				source: "iana",
				compressible: !0,
			},
			"application/alto-endpointcostparams+json": {
				source: "iana",
				compressible: !0,
			},
			"application/alto-endpointprop+json": {
				source: "iana",
				compressible: !0,
			},
			"application/alto-endpointpropparams+json": {
				source: "iana",
				compressible: !0,
			},
			"application/alto-error+json": { source: "iana", compressible: !0 },
			"application/alto-networkmap+json": {
				source: "iana",
				compressible: !0,
			},
			"application/alto-networkmapfilter+json": {
				source: "iana",
				compressible: !0,
			},
			"application/alto-updatestreamcontrol+json": {
				source: "iana",
				compressible: !0,
			},
			"application/alto-updatestreamparams+json": {
				source: "iana",
				compressible: !0,
			},
			"application/aml": { source: "iana" },
			"application/andrew-inset": { source: "iana", extensions: ["ez"] },
			"application/applefile": { source: "iana" },
			"application/applixware": { source: "apache", extensions: ["aw"] },
			"application/at+jwt": { source: "iana" },
			"application/atf": { source: "iana" },
			"application/atfx": { source: "iana" },
			"application/atom+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["atom"],
			},
			"application/atomcat+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["atomcat"],
			},
			"application/atomdeleted+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["atomdeleted"],
			},
			"application/atomicmail": { source: "iana" },
			"application/atomsvc+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["atomsvc"],
			},
			"application/atsc-dwd+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["dwd"],
			},
			"application/atsc-dynamic-event-message": { source: "iana" },
			"application/atsc-held+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["held"],
			},
			"application/atsc-rdt+json": { source: "iana", compressible: !0 },
			"application/atsc-rsat+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["rsat"],
			},
			"application/atxml": { source: "iana" },
			"application/auth-policy+xml": { source: "iana", compressible: !0 },
			"application/bacnet-xdd+zip": { source: "iana", compressible: !1 },
			"application/batch-smtp": { source: "iana" },
			"application/bdoc": { compressible: !1, extensions: ["bdoc"] },
			"application/beep+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/calendar+json": { source: "iana", compressible: !0 },
			"application/calendar+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xcs"],
			},
			"application/call-completion": { source: "iana" },
			"application/cals-1840": { source: "iana" },
			"application/captive+json": { source: "iana", compressible: !0 },
			"application/cbor": { source: "iana" },
			"application/cbor-seq": { source: "iana" },
			"application/cccex": { source: "iana" },
			"application/ccmp+xml": { source: "iana", compressible: !0 },
			"application/ccxml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["ccxml"],
			},
			"application/cdfx+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["cdfx"],
			},
			"application/cdmi-capability": {
				source: "iana",
				extensions: ["cdmia"],
			},
			"application/cdmi-container": {
				source: "iana",
				extensions: ["cdmic"],
			},
			"application/cdmi-domain": {
				source: "iana",
				extensions: ["cdmid"],
			},
			"application/cdmi-object": {
				source: "iana",
				extensions: ["cdmio"],
			},
			"application/cdmi-queue": { source: "iana", extensions: ["cdmiq"] },
			"application/cdni": { source: "iana" },
			"application/cea": { source: "iana" },
			"application/cea-2018+xml": { source: "iana", compressible: !0 },
			"application/cellml+xml": { source: "iana", compressible: !0 },
			"application/cfw": { source: "iana" },
			"application/city+json": { source: "iana", compressible: !0 },
			"application/clr": { source: "iana" },
			"application/clue+xml": { source: "iana", compressible: !0 },
			"application/clue_info+xml": { source: "iana", compressible: !0 },
			"application/cms": { source: "iana" },
			"application/cnrp+xml": { source: "iana", compressible: !0 },
			"application/coap-group+json": { source: "iana", compressible: !0 },
			"application/coap-payload": { source: "iana" },
			"application/commonground": { source: "iana" },
			"application/conference-info+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/cose": { source: "iana" },
			"application/cose-key": { source: "iana" },
			"application/cose-key-set": { source: "iana" },
			"application/cpl+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["cpl"],
			},
			"application/csrattrs": { source: "iana" },
			"application/csta+xml": { source: "iana", compressible: !0 },
			"application/cstadata+xml": { source: "iana", compressible: !0 },
			"application/csvm+json": { source: "iana", compressible: !0 },
			"application/cu-seeme": { source: "apache", extensions: ["cu"] },
			"application/cwt": { source: "iana" },
			"application/cybercash": { source: "iana" },
			"application/dart": { compressible: !0 },
			"application/dash+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["mpd"],
			},
			"application/dash-patch+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["mpp"],
			},
			"application/dashdelta": { source: "iana" },
			"application/davmount+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["davmount"],
			},
			"application/dca-rft": { source: "iana" },
			"application/dcd": { source: "iana" },
			"application/dec-dx": { source: "iana" },
			"application/dialog-info+xml": { source: "iana", compressible: !0 },
			"application/dicom": { source: "iana" },
			"application/dicom+json": { source: "iana", compressible: !0 },
			"application/dicom+xml": { source: "iana", compressible: !0 },
			"application/dii": { source: "iana" },
			"application/dit": { source: "iana" },
			"application/dns": { source: "iana" },
			"application/dns+json": { source: "iana", compressible: !0 },
			"application/dns-message": { source: "iana" },
			"application/docbook+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["dbk"],
			},
			"application/dots+cbor": { source: "iana" },
			"application/dskpp+xml": { source: "iana", compressible: !0 },
			"application/dssc+der": { source: "iana", extensions: ["dssc"] },
			"application/dssc+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xdssc"],
			},
			"application/dvcs": { source: "iana" },
			"application/ecmascript": {
				source: "iana",
				compressible: !0,
				extensions: ["es", "ecma"],
			},
			"application/edi-consent": { source: "iana" },
			"application/edi-x12": { source: "iana", compressible: !1 },
			"application/edifact": { source: "iana", compressible: !1 },
			"application/efi": { source: "iana" },
			"application/elm+json": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/elm+xml": { source: "iana", compressible: !0 },
			"application/emergencycalldata.cap+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/emergencycalldata.comment+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/emergencycalldata.control+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/emergencycalldata.deviceinfo+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/emergencycalldata.ecall.msd": { source: "iana" },
			"application/emergencycalldata.providerinfo+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/emergencycalldata.serviceinfo+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/emergencycalldata.subscriberinfo+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/emergencycalldata.veds+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/emma+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["emma"],
			},
			"application/emotionml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["emotionml"],
			},
			"application/encaprtp": { source: "iana" },
			"application/epp+xml": { source: "iana", compressible: !0 },
			"application/epub+zip": {
				source: "iana",
				compressible: !1,
				extensions: ["epub"],
			},
			"application/eshop": { source: "iana" },
			"application/exi": { source: "iana", extensions: ["exi"] },
			"application/expect-ct-report+json": {
				source: "iana",
				compressible: !0,
			},
			"application/express": { source: "iana", extensions: ["exp"] },
			"application/fastinfoset": { source: "iana" },
			"application/fastsoap": { source: "iana" },
			"application/fdt+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["fdt"],
			},
			"application/fhir+json": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/fhir+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/fido.trusted-apps+json": { compressible: !0 },
			"application/fits": { source: "iana" },
			"application/flexfec": { source: "iana" },
			"application/font-sfnt": { source: "iana" },
			"application/font-tdpfr": { source: "iana", extensions: ["pfr"] },
			"application/font-woff": { source: "iana", compressible: !1 },
			"application/framework-attributes+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/geo+json": {
				source: "iana",
				compressible: !0,
				extensions: ["geojson"],
			},
			"application/geo+json-seq": { source: "iana" },
			"application/geopackage+sqlite3": { source: "iana" },
			"application/geoxacml+xml": { source: "iana", compressible: !0 },
			"application/gltf-buffer": { source: "iana" },
			"application/gml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["gml"],
			},
			"application/gpx+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["gpx"],
			},
			"application/gxf": { source: "apache", extensions: ["gxf"] },
			"application/gzip": {
				source: "iana",
				compressible: !1,
				extensions: ["gz"],
			},
			"application/h224": { source: "iana" },
			"application/held+xml": { source: "iana", compressible: !0 },
			"application/hjson": { extensions: ["hjson"] },
			"application/http": { source: "iana" },
			"application/hyperstudio": { source: "iana", extensions: ["stk"] },
			"application/ibe-key-request+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/ibe-pkg-reply+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/ibe-pp-data": { source: "iana" },
			"application/iges": { source: "iana" },
			"application/im-iscomposing+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/index": { source: "iana" },
			"application/index.cmd": { source: "iana" },
			"application/index.obj": { source: "iana" },
			"application/index.response": { source: "iana" },
			"application/index.vnd": { source: "iana" },
			"application/inkml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["ink", "inkml"],
			},
			"application/iotp": { source: "iana" },
			"application/ipfix": { source: "iana", extensions: ["ipfix"] },
			"application/ipp": { source: "iana" },
			"application/isup": { source: "iana" },
			"application/its+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["its"],
			},
			"application/java-archive": {
				source: "apache",
				compressible: !1,
				extensions: ["jar", "war", "ear"],
			},
			"application/java-serialized-object": {
				source: "apache",
				compressible: !1,
				extensions: ["ser"],
			},
			"application/java-vm": {
				source: "apache",
				compressible: !1,
				extensions: ["class"],
			},
			"application/javascript": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
				extensions: ["js", "mjs"],
			},
			"application/jf2feed+json": { source: "iana", compressible: !0 },
			"application/jose": { source: "iana" },
			"application/jose+json": { source: "iana", compressible: !0 },
			"application/jrd+json": { source: "iana", compressible: !0 },
			"application/jscalendar+json": { source: "iana", compressible: !0 },
			"application/json": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
				extensions: ["json", "map"],
			},
			"application/json-patch+json": { source: "iana", compressible: !0 },
			"application/json-seq": { source: "iana" },
			"application/json5": { extensions: ["json5"] },
			"application/jsonml+json": {
				source: "apache",
				compressible: !0,
				extensions: ["jsonml"],
			},
			"application/jwk+json": { source: "iana", compressible: !0 },
			"application/jwk-set+json": { source: "iana", compressible: !0 },
			"application/jwt": { source: "iana" },
			"application/kpml-request+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/kpml-response+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/ld+json": {
				source: "iana",
				compressible: !0,
				extensions: ["jsonld"],
			},
			"application/lgr+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["lgr"],
			},
			"application/link-format": { source: "iana" },
			"application/load-control+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/lost+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["lostxml"],
			},
			"application/lostsync+xml": { source: "iana", compressible: !0 },
			"application/lpf+zip": { source: "iana", compressible: !1 },
			"application/lxf": { source: "iana" },
			"application/mac-binhex40": { source: "iana", extensions: ["hqx"] },
			"application/mac-compactpro": {
				source: "apache",
				extensions: ["cpt"],
			},
			"application/macwriteii": { source: "iana" },
			"application/mads+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["mads"],
			},
			"application/manifest+json": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
				extensions: ["webmanifest"],
			},
			"application/marc": { source: "iana", extensions: ["mrc"] },
			"application/marcxml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["mrcx"],
			},
			"application/mathematica": {
				source: "iana",
				extensions: ["ma", "nb", "mb"],
			},
			"application/mathml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["mathml"],
			},
			"application/mathml-content+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mathml-presentation+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mbms-associated-procedure-description+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mbms-deregister+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mbms-envelope+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mbms-msk+xml": { source: "iana", compressible: !0 },
			"application/mbms-msk-response+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mbms-protection-description+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mbms-reception-report+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mbms-register+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mbms-register-response+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mbms-schedule+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mbms-user-service-description+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mbox": { source: "iana", extensions: ["mbox"] },
			"application/media-policy-dataset+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["mpf"],
			},
			"application/media_control+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mediaservercontrol+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["mscml"],
			},
			"application/merge-patch+json": {
				source: "iana",
				compressible: !0,
			},
			"application/metalink+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["metalink"],
			},
			"application/metalink4+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["meta4"],
			},
			"application/mets+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["mets"],
			},
			"application/mf4": { source: "iana" },
			"application/mikey": { source: "iana" },
			"application/mipc": { source: "iana" },
			"application/missing-blocks+cbor-seq": { source: "iana" },
			"application/mmt-aei+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["maei"],
			},
			"application/mmt-usd+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["musd"],
			},
			"application/mods+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["mods"],
			},
			"application/moss-keys": { source: "iana" },
			"application/moss-signature": { source: "iana" },
			"application/mosskey-data": { source: "iana" },
			"application/mosskey-request": { source: "iana" },
			"application/mp21": { source: "iana", extensions: ["m21", "mp21"] },
			"application/mp4": { source: "iana", extensions: ["mp4s", "m4p"] },
			"application/mpeg4-generic": { source: "iana" },
			"application/mpeg4-iod": { source: "iana" },
			"application/mpeg4-iod-xmt": { source: "iana" },
			"application/mrb-consumer+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/mrb-publish+xml": { source: "iana", compressible: !0 },
			"application/msc-ivr+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/msc-mixer+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/msword": {
				source: "iana",
				compressible: !1,
				extensions: ["doc", "dot"],
			},
			"application/mud+json": { source: "iana", compressible: !0 },
			"application/multipart-core": { source: "iana" },
			"application/mxf": { source: "iana", extensions: ["mxf"] },
			"application/n-quads": { source: "iana", extensions: ["nq"] },
			"application/n-triples": { source: "iana", extensions: ["nt"] },
			"application/nasdata": { source: "iana" },
			"application/news-checkgroups": {
				source: "iana",
				charset: "US-ASCII",
			},
			"application/news-groupinfo": {
				source: "iana",
				charset: "US-ASCII",
			},
			"application/news-transmission": { source: "iana" },
			"application/nlsml+xml": { source: "iana", compressible: !0 },
			"application/node": { source: "iana", extensions: ["cjs"] },
			"application/nss": { source: "iana" },
			"application/oauth-authz-req+jwt": { source: "iana" },
			"application/oblivious-dns-message": { source: "iana" },
			"application/ocsp-request": { source: "iana" },
			"application/ocsp-response": { source: "iana" },
			"application/octet-stream": {
				source: "iana",
				compressible: !1,
				extensions: [
					"bin",
					"dms",
					"lrf",
					"mar",
					"so",
					"dist",
					"distz",
					"pkg",
					"bpk",
					"dump",
					"elc",
					"deploy",
					"exe",
					"dll",
					"deb",
					"dmg",
					"iso",
					"img",
					"msi",
					"msp",
					"msm",
					"buffer",
				],
			},
			"application/oda": { source: "iana", extensions: ["oda"] },
			"application/odm+xml": { source: "iana", compressible: !0 },
			"application/odx": { source: "iana" },
			"application/oebps-package+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["opf"],
			},
			"application/ogg": {
				source: "iana",
				compressible: !1,
				extensions: ["ogx"],
			},
			"application/omdoc+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["omdoc"],
			},
			"application/onenote": {
				source: "apache",
				extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"],
			},
			"application/opc-nodeset+xml": { source: "iana", compressible: !0 },
			"application/oscore": { source: "iana" },
			"application/oxps": { source: "iana", extensions: ["oxps"] },
			"application/p21": { source: "iana" },
			"application/p21+zip": { source: "iana", compressible: !1 },
			"application/p2p-overlay+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["relo"],
			},
			"application/parityfec": { source: "iana" },
			"application/passport": { source: "iana" },
			"application/patch-ops-error+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xer"],
			},
			"application/pdf": {
				source: "iana",
				compressible: !1,
				extensions: ["pdf"],
			},
			"application/pdx": { source: "iana" },
			"application/pem-certificate-chain": { source: "iana" },
			"application/pgp-encrypted": {
				source: "iana",
				compressible: !1,
				extensions: ["pgp"],
			},
			"application/pgp-keys": { source: "iana", extensions: ["asc"] },
			"application/pgp-signature": {
				source: "iana",
				extensions: ["asc", "sig"],
			},
			"application/pics-rules": { source: "apache", extensions: ["prf"] },
			"application/pidf+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/pidf-diff+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/pkcs10": { source: "iana", extensions: ["p10"] },
			"application/pkcs12": { source: "iana" },
			"application/pkcs7-mime": {
				source: "iana",
				extensions: ["p7m", "p7c"],
			},
			"application/pkcs7-signature": {
				source: "iana",
				extensions: ["p7s"],
			},
			"application/pkcs8": { source: "iana", extensions: ["p8"] },
			"application/pkcs8-encrypted": { source: "iana" },
			"application/pkix-attr-cert": {
				source: "iana",
				extensions: ["ac"],
			},
			"application/pkix-cert": { source: "iana", extensions: ["cer"] },
			"application/pkix-crl": { source: "iana", extensions: ["crl"] },
			"application/pkix-pkipath": {
				source: "iana",
				extensions: ["pkipath"],
			},
			"application/pkixcmp": { source: "iana", extensions: ["pki"] },
			"application/pls+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["pls"],
			},
			"application/poc-settings+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/postscript": {
				source: "iana",
				compressible: !0,
				extensions: ["ai", "eps", "ps"],
			},
			"application/ppsp-tracker+json": {
				source: "iana",
				compressible: !0,
			},
			"application/problem+json": { source: "iana", compressible: !0 },
			"application/problem+xml": { source: "iana", compressible: !0 },
			"application/provenance+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["provx"],
			},
			"application/prs.alvestrand.titrax-sheet": { source: "iana" },
			"application/prs.cww": { source: "iana", extensions: ["cww"] },
			"application/prs.cyn": { source: "iana", charset: "7-BIT" },
			"application/prs.hpub+zip": { source: "iana", compressible: !1 },
			"application/prs.nprend": { source: "iana" },
			"application/prs.plucker": { source: "iana" },
			"application/prs.rdf-xml-crypt": { source: "iana" },
			"application/prs.xsf+xml": { source: "iana", compressible: !0 },
			"application/pskc+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["pskcxml"],
			},
			"application/pvd+json": { source: "iana", compressible: !0 },
			"application/qsig": { source: "iana" },
			"application/raml+yaml": { compressible: !0, extensions: ["raml"] },
			"application/raptorfec": { source: "iana" },
			"application/rdap+json": { source: "iana", compressible: !0 },
			"application/rdf+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["rdf", "owl"],
			},
			"application/reginfo+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["rif"],
			},
			"application/relax-ng-compact-syntax": {
				source: "iana",
				extensions: ["rnc"],
			},
			"application/remote-printing": { source: "iana" },
			"application/reputon+json": { source: "iana", compressible: !0 },
			"application/resource-lists+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["rl"],
			},
			"application/resource-lists-diff+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["rld"],
			},
			"application/rfc+xml": { source: "iana", compressible: !0 },
			"application/riscos": { source: "iana" },
			"application/rlmi+xml": { source: "iana", compressible: !0 },
			"application/rls-services+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["rs"],
			},
			"application/route-apd+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["rapd"],
			},
			"application/route-s-tsid+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["sls"],
			},
			"application/route-usd+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["rusd"],
			},
			"application/rpki-ghostbusters": {
				source: "iana",
				extensions: ["gbr"],
			},
			"application/rpki-manifest": {
				source: "iana",
				extensions: ["mft"],
			},
			"application/rpki-publication": { source: "iana" },
			"application/rpki-roa": { source: "iana", extensions: ["roa"] },
			"application/rpki-updown": { source: "iana" },
			"application/rsd+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["rsd"],
			},
			"application/rss+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["rss"],
			},
			"application/rtf": {
				source: "iana",
				compressible: !0,
				extensions: ["rtf"],
			},
			"application/rtploopback": { source: "iana" },
			"application/rtx": { source: "iana" },
			"application/samlassertion+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/samlmetadata+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/sarif+json": { source: "iana", compressible: !0 },
			"application/sarif-external-properties+json": {
				source: "iana",
				compressible: !0,
			},
			"application/sbe": { source: "iana" },
			"application/sbml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["sbml"],
			},
			"application/scaip+xml": { source: "iana", compressible: !0 },
			"application/scim+json": { source: "iana", compressible: !0 },
			"application/scvp-cv-request": {
				source: "iana",
				extensions: ["scq"],
			},
			"application/scvp-cv-response": {
				source: "iana",
				extensions: ["scs"],
			},
			"application/scvp-vp-request": {
				source: "iana",
				extensions: ["spq"],
			},
			"application/scvp-vp-response": {
				source: "iana",
				extensions: ["spp"],
			},
			"application/sdp": { source: "iana", extensions: ["sdp"] },
			"application/secevent+jwt": { source: "iana" },
			"application/senml+cbor": { source: "iana" },
			"application/senml+json": { source: "iana", compressible: !0 },
			"application/senml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["senmlx"],
			},
			"application/senml-etch+cbor": { source: "iana" },
			"application/senml-etch+json": { source: "iana", compressible: !0 },
			"application/senml-exi": { source: "iana" },
			"application/sensml+cbor": { source: "iana" },
			"application/sensml+json": { source: "iana", compressible: !0 },
			"application/sensml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["sensmlx"],
			},
			"application/sensml-exi": { source: "iana" },
			"application/sep+xml": { source: "iana", compressible: !0 },
			"application/sep-exi": { source: "iana" },
			"application/session-info": { source: "iana" },
			"application/set-payment": { source: "iana" },
			"application/set-payment-initiation": {
				source: "iana",
				extensions: ["setpay"],
			},
			"application/set-registration": { source: "iana" },
			"application/set-registration-initiation": {
				source: "iana",
				extensions: ["setreg"],
			},
			"application/sgml": { source: "iana" },
			"application/sgml-open-catalog": { source: "iana" },
			"application/shf+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["shf"],
			},
			"application/sieve": {
				source: "iana",
				extensions: ["siv", "sieve"],
			},
			"application/simple-filter+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/simple-message-summary": { source: "iana" },
			"application/simplesymbolcontainer": { source: "iana" },
			"application/sipc": { source: "iana" },
			"application/slate": { source: "iana" },
			"application/smil": { source: "iana" },
			"application/smil+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["smi", "smil"],
			},
			"application/smpte336m": { source: "iana" },
			"application/soap+fastinfoset": { source: "iana" },
			"application/soap+xml": { source: "iana", compressible: !0 },
			"application/sparql-query": { source: "iana", extensions: ["rq"] },
			"application/sparql-results+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["srx"],
			},
			"application/spdx+json": { source: "iana", compressible: !0 },
			"application/spirits-event+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/sql": { source: "iana" },
			"application/srgs": { source: "iana", extensions: ["gram"] },
			"application/srgs+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["grxml"],
			},
			"application/sru+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["sru"],
			},
			"application/ssdl+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["ssdl"],
			},
			"application/ssml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["ssml"],
			},
			"application/stix+json": { source: "iana", compressible: !0 },
			"application/swid+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["swidtag"],
			},
			"application/tamp-apex-update": { source: "iana" },
			"application/tamp-apex-update-confirm": { source: "iana" },
			"application/tamp-community-update": { source: "iana" },
			"application/tamp-community-update-confirm": { source: "iana" },
			"application/tamp-error": { source: "iana" },
			"application/tamp-sequence-adjust": { source: "iana" },
			"application/tamp-sequence-adjust-confirm": { source: "iana" },
			"application/tamp-status-query": { source: "iana" },
			"application/tamp-status-response": { source: "iana" },
			"application/tamp-update": { source: "iana" },
			"application/tamp-update-confirm": { source: "iana" },
			"application/tar": { compressible: !0 },
			"application/taxii+json": { source: "iana", compressible: !0 },
			"application/td+json": { source: "iana", compressible: !0 },
			"application/tei+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["tei", "teicorpus"],
			},
			"application/tetra_isi": { source: "iana" },
			"application/thraud+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["tfi"],
			},
			"application/timestamp-query": { source: "iana" },
			"application/timestamp-reply": { source: "iana" },
			"application/timestamped-data": {
				source: "iana",
				extensions: ["tsd"],
			},
			"application/tlsrpt+gzip": { source: "iana" },
			"application/tlsrpt+json": { source: "iana", compressible: !0 },
			"application/tnauthlist": { source: "iana" },
			"application/token-introspection+jwt": { source: "iana" },
			"application/toml": { compressible: !0, extensions: ["toml"] },
			"application/trickle-ice-sdpfrag": { source: "iana" },
			"application/trig": { source: "iana", extensions: ["trig"] },
			"application/ttml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["ttml"],
			},
			"application/tve-trigger": { source: "iana" },
			"application/tzif": { source: "iana" },
			"application/tzif-leap": { source: "iana" },
			"application/ubjson": { compressible: !1, extensions: ["ubj"] },
			"application/ulpfec": { source: "iana" },
			"application/urc-grpsheet+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/urc-ressheet+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["rsheet"],
			},
			"application/urc-targetdesc+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["td"],
			},
			"application/urc-uisocketdesc+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vcard+json": { source: "iana", compressible: !0 },
			"application/vcard+xml": { source: "iana", compressible: !0 },
			"application/vemmi": { source: "iana" },
			"application/vividence.scriptfile": { source: "apache" },
			"application/vnd.1000minds.decision-model+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["1km"],
			},
			"application/vnd.3gpp-prose+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp-prose-pc3ch+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp-v2x-local-service-information": {
				source: "iana",
			},
			"application/vnd.3gpp.5gnas": { source: "iana" },
			"application/vnd.3gpp.access-transfer-events+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.bsf+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.gmop+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.gtpc": { source: "iana" },
			"application/vnd.3gpp.interworking-data": { source: "iana" },
			"application/vnd.3gpp.lpp": { source: "iana" },
			"application/vnd.3gpp.mc-signalling-ear": { source: "iana" },
			"application/vnd.3gpp.mcdata-affiliation-command+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcdata-info+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcdata-payload": { source: "iana" },
			"application/vnd.3gpp.mcdata-service-config+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcdata-signalling": { source: "iana" },
			"application/vnd.3gpp.mcdata-ue-config+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcdata-user-profile+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcptt-affiliation-command+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcptt-floor-request+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcptt-info+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcptt-location-info+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcptt-service-config+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcptt-signed+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcptt-ue-config+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcptt-ue-init-config+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcptt-user-profile+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcvideo-affiliation-command+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcvideo-affiliation-info+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcvideo-info+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcvideo-location-info+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcvideo-service-config+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcvideo-transmission-request+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcvideo-ue-config+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mcvideo-user-profile+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.mid-call+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.ngap": { source: "iana" },
			"application/vnd.3gpp.pfcp": { source: "iana" },
			"application/vnd.3gpp.pic-bw-large": {
				source: "iana",
				extensions: ["plb"],
			},
			"application/vnd.3gpp.pic-bw-small": {
				source: "iana",
				extensions: ["psb"],
			},
			"application/vnd.3gpp.pic-bw-var": {
				source: "iana",
				extensions: ["pvb"],
			},
			"application/vnd.3gpp.s1ap": { source: "iana" },
			"application/vnd.3gpp.sms": { source: "iana" },
			"application/vnd.3gpp.sms+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.srvcc-ext+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.srvcc-info+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.state-and-event-info+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp.ussd+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp2.bcmcsinfo+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.3gpp2.sms": { source: "iana" },
			"application/vnd.3gpp2.tcap": {
				source: "iana",
				extensions: ["tcap"],
			},
			"application/vnd.3lightssoftware.imagescal": { source: "iana" },
			"application/vnd.3m.post-it-notes": {
				source: "iana",
				extensions: ["pwn"],
			},
			"application/vnd.accpac.simply.aso": {
				source: "iana",
				extensions: ["aso"],
			},
			"application/vnd.accpac.simply.imp": {
				source: "iana",
				extensions: ["imp"],
			},
			"application/vnd.acucobol": { source: "iana", extensions: ["acu"] },
			"application/vnd.acucorp": {
				source: "iana",
				extensions: ["atc", "acutc"],
			},
			"application/vnd.adobe.air-application-installer-package+zip": {
				source: "apache",
				compressible: !1,
				extensions: ["air"],
			},
			"application/vnd.adobe.flash.movie": { source: "iana" },
			"application/vnd.adobe.formscentral.fcdt": {
				source: "iana",
				extensions: ["fcdt"],
			},
			"application/vnd.adobe.fxp": {
				source: "iana",
				extensions: ["fxp", "fxpl"],
			},
			"application/vnd.adobe.partial-upload": { source: "iana" },
			"application/vnd.adobe.xdp+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xdp"],
			},
			"application/vnd.adobe.xfdf": {
				source: "iana",
				extensions: ["xfdf"],
			},
			"application/vnd.aether.imp": { source: "iana" },
			"application/vnd.afpc.afplinedata": { source: "iana" },
			"application/vnd.afpc.afplinedata-pagedef": { source: "iana" },
			"application/vnd.afpc.cmoca-cmresource": { source: "iana" },
			"application/vnd.afpc.foca-charset": { source: "iana" },
			"application/vnd.afpc.foca-codedfont": { source: "iana" },
			"application/vnd.afpc.foca-codepage": { source: "iana" },
			"application/vnd.afpc.modca": { source: "iana" },
			"application/vnd.afpc.modca-cmtable": { source: "iana" },
			"application/vnd.afpc.modca-formdef": { source: "iana" },
			"application/vnd.afpc.modca-mediummap": { source: "iana" },
			"application/vnd.afpc.modca-objectcontainer": { source: "iana" },
			"application/vnd.afpc.modca-overlay": { source: "iana" },
			"application/vnd.afpc.modca-pagesegment": { source: "iana" },
			"application/vnd.age": { source: "iana", extensions: ["age"] },
			"application/vnd.ah-barcode": { source: "iana" },
			"application/vnd.ahead.space": {
				source: "iana",
				extensions: ["ahead"],
			},
			"application/vnd.airzip.filesecure.azf": {
				source: "iana",
				extensions: ["azf"],
			},
			"application/vnd.airzip.filesecure.azs": {
				source: "iana",
				extensions: ["azs"],
			},
			"application/vnd.amadeus+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.amazon.ebook": {
				source: "apache",
				extensions: ["azw"],
			},
			"application/vnd.amazon.mobi8-ebook": { source: "iana" },
			"application/vnd.americandynamics.acc": {
				source: "iana",
				extensions: ["acc"],
			},
			"application/vnd.amiga.ami": {
				source: "iana",
				extensions: ["ami"],
			},
			"application/vnd.amundsen.maze+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.android.ota": { source: "iana" },
			"application/vnd.android.package-archive": {
				source: "apache",
				compressible: !1,
				extensions: ["apk"],
			},
			"application/vnd.anki": { source: "iana" },
			"application/vnd.anser-web-certificate-issue-initiation": {
				source: "iana",
				extensions: ["cii"],
			},
			"application/vnd.anser-web-funds-transfer-initiation": {
				source: "apache",
				extensions: ["fti"],
			},
			"application/vnd.antix.game-component": {
				source: "iana",
				extensions: ["atx"],
			},
			"application/vnd.apache.arrow.file": { source: "iana" },
			"application/vnd.apache.arrow.stream": { source: "iana" },
			"application/vnd.apache.thrift.binary": { source: "iana" },
			"application/vnd.apache.thrift.compact": { source: "iana" },
			"application/vnd.apache.thrift.json": { source: "iana" },
			"application/vnd.api+json": { source: "iana", compressible: !0 },
			"application/vnd.aplextor.warrp+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.apothekende.reservation+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.apple.installer+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["mpkg"],
			},
			"application/vnd.apple.keynote": {
				source: "iana",
				extensions: ["key"],
			},
			"application/vnd.apple.mpegurl": {
				source: "iana",
				extensions: ["m3u8"],
			},
			"application/vnd.apple.numbers": {
				source: "iana",
				extensions: ["numbers"],
			},
			"application/vnd.apple.pages": {
				source: "iana",
				extensions: ["pages"],
			},
			"application/vnd.apple.pkpass": {
				compressible: !1,
				extensions: ["pkpass"],
			},
			"application/vnd.arastra.swi": { source: "iana" },
			"application/vnd.aristanetworks.swi": {
				source: "iana",
				extensions: ["swi"],
			},
			"application/vnd.artisan+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.artsquare": { source: "iana" },
			"application/vnd.astraea-software.iota": {
				source: "iana",
				extensions: ["iota"],
			},
			"application/vnd.audiograph": {
				source: "iana",
				extensions: ["aep"],
			},
			"application/vnd.autopackage": { source: "iana" },
			"application/vnd.avalon+json": { source: "iana", compressible: !0 },
			"application/vnd.avistar+xml": { source: "iana", compressible: !0 },
			"application/vnd.balsamiq.bmml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["bmml"],
			},
			"application/vnd.balsamiq.bmpr": { source: "iana" },
			"application/vnd.banana-accounting": { source: "iana" },
			"application/vnd.bbf.usp.error": { source: "iana" },
			"application/vnd.bbf.usp.msg": { source: "iana" },
			"application/vnd.bbf.usp.msg+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.bekitzur-stech+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.bint.med-content": { source: "iana" },
			"application/vnd.biopax.rdf+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.blink-idb-value-wrapper": { source: "iana" },
			"application/vnd.blueice.multipass": {
				source: "iana",
				extensions: ["mpm"],
			},
			"application/vnd.bluetooth.ep.oob": { source: "iana" },
			"application/vnd.bluetooth.le.oob": { source: "iana" },
			"application/vnd.bmi": { source: "iana", extensions: ["bmi"] },
			"application/vnd.bpf": { source: "iana" },
			"application/vnd.bpf3": { source: "iana" },
			"application/vnd.businessobjects": {
				source: "iana",
				extensions: ["rep"],
			},
			"application/vnd.byu.uapi+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.cab-jscript": { source: "iana" },
			"application/vnd.canon-cpdl": { source: "iana" },
			"application/vnd.canon-lips": { source: "iana" },
			"application/vnd.capasystems-pg+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.cendio.thinlinc.clientconf": { source: "iana" },
			"application/vnd.century-systems.tcp_stream": { source: "iana" },
			"application/vnd.chemdraw+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["cdxml"],
			},
			"application/vnd.chess-pgn": { source: "iana" },
			"application/vnd.chipnuts.karaoke-mmd": {
				source: "iana",
				extensions: ["mmd"],
			},
			"application/vnd.ciedi": { source: "iana" },
			"application/vnd.cinderella": {
				source: "iana",
				extensions: ["cdy"],
			},
			"application/vnd.cirpack.isdn-ext": { source: "iana" },
			"application/vnd.citationstyles.style+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["csl"],
			},
			"application/vnd.claymore": { source: "iana", extensions: ["cla"] },
			"application/vnd.cloanto.rp9": {
				source: "iana",
				extensions: ["rp9"],
			},
			"application/vnd.clonk.c4group": {
				source: "iana",
				extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"],
			},
			"application/vnd.cluetrust.cartomobile-config": {
				source: "iana",
				extensions: ["c11amc"],
			},
			"application/vnd.cluetrust.cartomobile-config-pkg": {
				source: "iana",
				extensions: ["c11amz"],
			},
			"application/vnd.coffeescript": { source: "iana" },
			"application/vnd.collabio.xodocuments.document": { source: "iana" },
			"application/vnd.collabio.xodocuments.document-template": {
				source: "iana",
			},
			"application/vnd.collabio.xodocuments.presentation": {
				source: "iana",
			},
			"application/vnd.collabio.xodocuments.presentation-template": {
				source: "iana",
			},
			"application/vnd.collabio.xodocuments.spreadsheet": {
				source: "iana",
			},
			"application/vnd.collabio.xodocuments.spreadsheet-template": {
				source: "iana",
			},
			"application/vnd.collection+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.collection.doc+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.collection.next+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.comicbook+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.comicbook-rar": { source: "iana" },
			"application/vnd.commerce-battelle": { source: "iana" },
			"application/vnd.commonspace": {
				source: "iana",
				extensions: ["csp"],
			},
			"application/vnd.contact.cmsg": {
				source: "iana",
				extensions: ["cdbcmsg"],
			},
			"application/vnd.coreos.ignition+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.cosmocaller": {
				source: "iana",
				extensions: ["cmc"],
			},
			"application/vnd.crick.clicker": {
				source: "iana",
				extensions: ["clkx"],
			},
			"application/vnd.crick.clicker.keyboard": {
				source: "iana",
				extensions: ["clkk"],
			},
			"application/vnd.crick.clicker.palette": {
				source: "iana",
				extensions: ["clkp"],
			},
			"application/vnd.crick.clicker.template": {
				source: "iana",
				extensions: ["clkt"],
			},
			"application/vnd.crick.clicker.wordbank": {
				source: "iana",
				extensions: ["clkw"],
			},
			"application/vnd.criticaltools.wbs+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["wbs"],
			},
			"application/vnd.cryptii.pipe+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.crypto-shade-file": { source: "iana" },
			"application/vnd.cryptomator.encrypted": { source: "iana" },
			"application/vnd.cryptomator.vault": { source: "iana" },
			"application/vnd.ctc-posml": {
				source: "iana",
				extensions: ["pml"],
			},
			"application/vnd.ctct.ws+xml": { source: "iana", compressible: !0 },
			"application/vnd.cups-pdf": { source: "iana" },
			"application/vnd.cups-postscript": { source: "iana" },
			"application/vnd.cups-ppd": { source: "iana", extensions: ["ppd"] },
			"application/vnd.cups-raster": { source: "iana" },
			"application/vnd.cups-raw": { source: "iana" },
			"application/vnd.curl": { source: "iana" },
			"application/vnd.curl.car": {
				source: "apache",
				extensions: ["car"],
			},
			"application/vnd.curl.pcurl": {
				source: "apache",
				extensions: ["pcurl"],
			},
			"application/vnd.cyan.dean.root+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.cybank": { source: "iana" },
			"application/vnd.cyclonedx+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.cyclonedx+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.d2l.coursepackage1p0+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.d3m-dataset": { source: "iana" },
			"application/vnd.d3m-problem": { source: "iana" },
			"application/vnd.dart": {
				source: "iana",
				compressible: !0,
				extensions: ["dart"],
			},
			"application/vnd.data-vision.rdz": {
				source: "iana",
				extensions: ["rdz"],
			},
			"application/vnd.datapackage+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.dataresource+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.dbf": { source: "iana", extensions: ["dbf"] },
			"application/vnd.debian.binary-package": { source: "iana" },
			"application/vnd.dece.data": {
				source: "iana",
				extensions: ["uvf", "uvvf", "uvd", "uvvd"],
			},
			"application/vnd.dece.ttml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["uvt", "uvvt"],
			},
			"application/vnd.dece.unspecified": {
				source: "iana",
				extensions: ["uvx", "uvvx"],
			},
			"application/vnd.dece.zip": {
				source: "iana",
				extensions: ["uvz", "uvvz"],
			},
			"application/vnd.denovo.fcselayout-link": {
				source: "iana",
				extensions: ["fe_launch"],
			},
			"application/vnd.desmume.movie": { source: "iana" },
			"application/vnd.dir-bi.plate-dl-nosuffix": { source: "iana" },
			"application/vnd.dm.delegation+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.dna": { source: "iana", extensions: ["dna"] },
			"application/vnd.document+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.dolby.mlp": {
				source: "apache",
				extensions: ["mlp"],
			},
			"application/vnd.dolby.mobile.1": { source: "iana" },
			"application/vnd.dolby.mobile.2": { source: "iana" },
			"application/vnd.doremir.scorecloud-binary-document": {
				source: "iana",
			},
			"application/vnd.dpgraph": { source: "iana", extensions: ["dpg"] },
			"application/vnd.dreamfactory": {
				source: "iana",
				extensions: ["dfac"],
			},
			"application/vnd.drive+json": { source: "iana", compressible: !0 },
			"application/vnd.ds-keypoint": {
				source: "apache",
				extensions: ["kpxx"],
			},
			"application/vnd.dtg.local": { source: "iana" },
			"application/vnd.dtg.local.flash": { source: "iana" },
			"application/vnd.dtg.local.html": { source: "iana" },
			"application/vnd.dvb.ait": { source: "iana", extensions: ["ait"] },
			"application/vnd.dvb.dvbisl+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.dvb.dvbj": { source: "iana" },
			"application/vnd.dvb.esgcontainer": { source: "iana" },
			"application/vnd.dvb.ipdcdftnotifaccess": { source: "iana" },
			"application/vnd.dvb.ipdcesgaccess": { source: "iana" },
			"application/vnd.dvb.ipdcesgaccess2": { source: "iana" },
			"application/vnd.dvb.ipdcesgpdd": { source: "iana" },
			"application/vnd.dvb.ipdcroaming": { source: "iana" },
			"application/vnd.dvb.iptv.alfec-base": { source: "iana" },
			"application/vnd.dvb.iptv.alfec-enhancement": { source: "iana" },
			"application/vnd.dvb.notif-aggregate-root+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.dvb.notif-container+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.dvb.notif-generic+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.dvb.notif-ia-msglist+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.dvb.notif-ia-registration-request+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.dvb.notif-ia-registration-response+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.dvb.notif-init+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.dvb.pfr": { source: "iana" },
			"application/vnd.dvb.service": {
				source: "iana",
				extensions: ["svc"],
			},
			"application/vnd.dxr": { source: "iana" },
			"application/vnd.dynageo": { source: "iana", extensions: ["geo"] },
			"application/vnd.dzr": { source: "iana" },
			"application/vnd.easykaraoke.cdgdownload": { source: "iana" },
			"application/vnd.ecdis-update": { source: "iana" },
			"application/vnd.ecip.rlp": { source: "iana" },
			"application/vnd.eclipse.ditto+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.ecowin.chart": {
				source: "iana",
				extensions: ["mag"],
			},
			"application/vnd.ecowin.filerequest": { source: "iana" },
			"application/vnd.ecowin.fileupdate": { source: "iana" },
			"application/vnd.ecowin.series": { source: "iana" },
			"application/vnd.ecowin.seriesrequest": { source: "iana" },
			"application/vnd.ecowin.seriesupdate": { source: "iana" },
			"application/vnd.efi.img": { source: "iana" },
			"application/vnd.efi.iso": { source: "iana" },
			"application/vnd.emclient.accessrequest+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.enliven": { source: "iana", extensions: ["nml"] },
			"application/vnd.enphase.envoy": { source: "iana" },
			"application/vnd.eprints.data+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.epson.esf": {
				source: "iana",
				extensions: ["esf"],
			},
			"application/vnd.epson.msf": {
				source: "iana",
				extensions: ["msf"],
			},
			"application/vnd.epson.quickanime": {
				source: "iana",
				extensions: ["qam"],
			},
			"application/vnd.epson.salt": {
				source: "iana",
				extensions: ["slt"],
			},
			"application/vnd.epson.ssf": {
				source: "iana",
				extensions: ["ssf"],
			},
			"application/vnd.ericsson.quickcall": { source: "iana" },
			"application/vnd.espass-espass+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.eszigno3+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["es3", "et3"],
			},
			"application/vnd.etsi.aoc+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.asic-e+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.etsi.asic-s+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.etsi.cug+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.iptvcommand+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.iptvdiscovery+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.iptvprofile+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.iptvsad-bc+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.iptvsad-cod+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.iptvsad-npvr+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.iptvservice+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.iptvsync+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.iptvueprofile+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.mcid+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.mheg5": { source: "iana" },
			"application/vnd.etsi.overload-control-policy-dataset+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.pstn+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.sci+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.simservs+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.timestamp-token": { source: "iana" },
			"application/vnd.etsi.tsl+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.etsi.tsl.der": { source: "iana" },
			"application/vnd.eu.kasparian.car+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.eudora.data": { source: "iana" },
			"application/vnd.evolv.ecig.profile": { source: "iana" },
			"application/vnd.evolv.ecig.settings": { source: "iana" },
			"application/vnd.evolv.ecig.theme": { source: "iana" },
			"application/vnd.exstream-empower+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.exstream-package": { source: "iana" },
			"application/vnd.ezpix-album": {
				source: "iana",
				extensions: ["ez2"],
			},
			"application/vnd.ezpix-package": {
				source: "iana",
				extensions: ["ez3"],
			},
			"application/vnd.f-secure.mobile": { source: "iana" },
			"application/vnd.familysearch.gedcom+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.fastcopy-disk-image": { source: "iana" },
			"application/vnd.fdf": { source: "iana", extensions: ["fdf"] },
			"application/vnd.fdsn.mseed": {
				source: "iana",
				extensions: ["mseed"],
			},
			"application/vnd.fdsn.seed": {
				source: "iana",
				extensions: ["seed", "dataless"],
			},
			"application/vnd.ffsns": { source: "iana" },
			"application/vnd.ficlab.flb+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.filmit.zfc": { source: "iana" },
			"application/vnd.fints": { source: "iana" },
			"application/vnd.firemonkeys.cloudcell": { source: "iana" },
			"application/vnd.flographit": {
				source: "iana",
				extensions: ["gph"],
			},
			"application/vnd.fluxtime.clip": {
				source: "iana",
				extensions: ["ftc"],
			},
			"application/vnd.font-fontforge-sfd": { source: "iana" },
			"application/vnd.framemaker": {
				source: "iana",
				extensions: ["fm", "frame", "maker", "book"],
			},
			"application/vnd.frogans.fnc": {
				source: "iana",
				extensions: ["fnc"],
			},
			"application/vnd.frogans.ltf": {
				source: "iana",
				extensions: ["ltf"],
			},
			"application/vnd.fsc.weblaunch": {
				source: "iana",
				extensions: ["fsc"],
			},
			"application/vnd.fujifilm.fb.docuworks": { source: "iana" },
			"application/vnd.fujifilm.fb.docuworks.binder": { source: "iana" },
			"application/vnd.fujifilm.fb.docuworks.container": {
				source: "iana",
			},
			"application/vnd.fujifilm.fb.jfi+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.fujitsu.oasys": {
				source: "iana",
				extensions: ["oas"],
			},
			"application/vnd.fujitsu.oasys2": {
				source: "iana",
				extensions: ["oa2"],
			},
			"application/vnd.fujitsu.oasys3": {
				source: "iana",
				extensions: ["oa3"],
			},
			"application/vnd.fujitsu.oasysgp": {
				source: "iana",
				extensions: ["fg5"],
			},
			"application/vnd.fujitsu.oasysprs": {
				source: "iana",
				extensions: ["bh2"],
			},
			"application/vnd.fujixerox.art-ex": { source: "iana" },
			"application/vnd.fujixerox.art4": { source: "iana" },
			"application/vnd.fujixerox.ddd": {
				source: "iana",
				extensions: ["ddd"],
			},
			"application/vnd.fujixerox.docuworks": {
				source: "iana",
				extensions: ["xdw"],
			},
			"application/vnd.fujixerox.docuworks.binder": {
				source: "iana",
				extensions: ["xbd"],
			},
			"application/vnd.fujixerox.docuworks.container": { source: "iana" },
			"application/vnd.fujixerox.hbpl": { source: "iana" },
			"application/vnd.fut-misnet": { source: "iana" },
			"application/vnd.futoin+cbor": { source: "iana" },
			"application/vnd.futoin+json": { source: "iana", compressible: !0 },
			"application/vnd.fuzzysheet": {
				source: "iana",
				extensions: ["fzs"],
			},
			"application/vnd.genomatix.tuxedo": {
				source: "iana",
				extensions: ["txd"],
			},
			"application/vnd.gentics.grd+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.geo+json": { source: "iana", compressible: !0 },
			"application/vnd.geocube+xml": { source: "iana", compressible: !0 },
			"application/vnd.geogebra.file": {
				source: "iana",
				extensions: ["ggb"],
			},
			"application/vnd.geogebra.slides": { source: "iana" },
			"application/vnd.geogebra.tool": {
				source: "iana",
				extensions: ["ggt"],
			},
			"application/vnd.geometry-explorer": {
				source: "iana",
				extensions: ["gex", "gre"],
			},
			"application/vnd.geonext": { source: "iana", extensions: ["gxt"] },
			"application/vnd.geoplan": { source: "iana", extensions: ["g2w"] },
			"application/vnd.geospace": { source: "iana", extensions: ["g3w"] },
			"application/vnd.gerber": { source: "iana" },
			"application/vnd.globalplatform.card-content-mgt": {
				source: "iana",
			},
			"application/vnd.globalplatform.card-content-mgt-response": {
				source: "iana",
			},
			"application/vnd.gmx": { source: "iana", extensions: ["gmx"] },
			"application/vnd.google-apps.document": {
				compressible: !1,
				extensions: ["gdoc"],
			},
			"application/vnd.google-apps.presentation": {
				compressible: !1,
				extensions: ["gslides"],
			},
			"application/vnd.google-apps.spreadsheet": {
				compressible: !1,
				extensions: ["gsheet"],
			},
			"application/vnd.google-earth.kml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["kml"],
			},
			"application/vnd.google-earth.kmz": {
				source: "iana",
				compressible: !1,
				extensions: ["kmz"],
			},
			"application/vnd.gov.sk.e-form+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.gov.sk.e-form+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.gov.sk.xmldatacontainer+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.grafeq": {
				source: "iana",
				extensions: ["gqf", "gqs"],
			},
			"application/vnd.gridmp": { source: "iana" },
			"application/vnd.groove-account": {
				source: "iana",
				extensions: ["gac"],
			},
			"application/vnd.groove-help": {
				source: "iana",
				extensions: ["ghf"],
			},
			"application/vnd.groove-identity-message": {
				source: "iana",
				extensions: ["gim"],
			},
			"application/vnd.groove-injector": {
				source: "iana",
				extensions: ["grv"],
			},
			"application/vnd.groove-tool-message": {
				source: "iana",
				extensions: ["gtm"],
			},
			"application/vnd.groove-tool-template": {
				source: "iana",
				extensions: ["tpl"],
			},
			"application/vnd.groove-vcard": {
				source: "iana",
				extensions: ["vcg"],
			},
			"application/vnd.hal+json": { source: "iana", compressible: !0 },
			"application/vnd.hal+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["hal"],
			},
			"application/vnd.handheld-entertainment+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["zmm"],
			},
			"application/vnd.hbci": { source: "iana", extensions: ["hbci"] },
			"application/vnd.hc+json": { source: "iana", compressible: !0 },
			"application/vnd.hcl-bireports": { source: "iana" },
			"application/vnd.hdt": { source: "iana" },
			"application/vnd.heroku+json": { source: "iana", compressible: !0 },
			"application/vnd.hhe.lesson-player": {
				source: "iana",
				extensions: ["les"],
			},
			"application/vnd.hl7cda+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/vnd.hl7v2+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/vnd.hp-hpgl": { source: "iana", extensions: ["hpgl"] },
			"application/vnd.hp-hpid": { source: "iana", extensions: ["hpid"] },
			"application/vnd.hp-hps": { source: "iana", extensions: ["hps"] },
			"application/vnd.hp-jlyt": { source: "iana", extensions: ["jlt"] },
			"application/vnd.hp-pcl": { source: "iana", extensions: ["pcl"] },
			"application/vnd.hp-pclxl": {
				source: "iana",
				extensions: ["pclxl"],
			},
			"application/vnd.httphone": { source: "iana" },
			"application/vnd.hydrostatix.sof-data": {
				source: "iana",
				extensions: ["sfd-hdstx"],
			},
			"application/vnd.hyper+json": { source: "iana", compressible: !0 },
			"application/vnd.hyper-item+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.hyperdrive+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.hzn-3d-crossword": { source: "iana" },
			"application/vnd.ibm.afplinedata": { source: "iana" },
			"application/vnd.ibm.electronic-media": { source: "iana" },
			"application/vnd.ibm.minipay": {
				source: "iana",
				extensions: ["mpy"],
			},
			"application/vnd.ibm.modcap": {
				source: "iana",
				extensions: ["afp", "listafp", "list3820"],
			},
			"application/vnd.ibm.rights-management": {
				source: "iana",
				extensions: ["irm"],
			},
			"application/vnd.ibm.secure-container": {
				source: "iana",
				extensions: ["sc"],
			},
			"application/vnd.iccprofile": {
				source: "iana",
				extensions: ["icc", "icm"],
			},
			"application/vnd.ieee.1905": { source: "iana" },
			"application/vnd.igloader": { source: "iana", extensions: ["igl"] },
			"application/vnd.imagemeter.folder+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.imagemeter.image+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.immervision-ivp": {
				source: "iana",
				extensions: ["ivp"],
			},
			"application/vnd.immervision-ivu": {
				source: "iana",
				extensions: ["ivu"],
			},
			"application/vnd.ims.imsccv1p1": { source: "iana" },
			"application/vnd.ims.imsccv1p2": { source: "iana" },
			"application/vnd.ims.imsccv1p3": { source: "iana" },
			"application/vnd.ims.lis.v2.result+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.ims.lti.v2.toolconsumerprofile+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.ims.lti.v2.toolproxy+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.ims.lti.v2.toolproxy.id+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.ims.lti.v2.toolsettings+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.ims.lti.v2.toolsettings.simple+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.informedcontrol.rms+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.informix-visionary": { source: "iana" },
			"application/vnd.infotech.project": { source: "iana" },
			"application/vnd.infotech.project+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.innopath.wamp.notification": { source: "iana" },
			"application/vnd.insors.igm": {
				source: "iana",
				extensions: ["igm"],
			},
			"application/vnd.intercon.formnet": {
				source: "iana",
				extensions: ["xpw", "xpx"],
			},
			"application/vnd.intergeo": { source: "iana", extensions: ["i2g"] },
			"application/vnd.intertrust.digibox": { source: "iana" },
			"application/vnd.intertrust.nncp": { source: "iana" },
			"application/vnd.intu.qbo": { source: "iana", extensions: ["qbo"] },
			"application/vnd.intu.qfx": { source: "iana", extensions: ["qfx"] },
			"application/vnd.iptc.g2.catalogitem+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.iptc.g2.conceptitem+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.iptc.g2.knowledgeitem+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.iptc.g2.newsitem+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.iptc.g2.newsmessage+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.iptc.g2.packageitem+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.iptc.g2.planningitem+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.ipunplugged.rcprofile": {
				source: "iana",
				extensions: ["rcprofile"],
			},
			"application/vnd.irepository.package+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["irp"],
			},
			"application/vnd.is-xpr": { source: "iana", extensions: ["xpr"] },
			"application/vnd.isac.fcs": { source: "iana", extensions: ["fcs"] },
			"application/vnd.iso11783-10+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.jam": { source: "iana", extensions: ["jam"] },
			"application/vnd.japannet-directory-service": { source: "iana" },
			"application/vnd.japannet-jpnstore-wakeup": { source: "iana" },
			"application/vnd.japannet-payment-wakeup": { source: "iana" },
			"application/vnd.japannet-registration": { source: "iana" },
			"application/vnd.japannet-registration-wakeup": { source: "iana" },
			"application/vnd.japannet-setstore-wakeup": { source: "iana" },
			"application/vnd.japannet-verification": { source: "iana" },
			"application/vnd.japannet-verification-wakeup": { source: "iana" },
			"application/vnd.jcp.javame.midlet-rms": {
				source: "iana",
				extensions: ["rms"],
			},
			"application/vnd.jisp": { source: "iana", extensions: ["jisp"] },
			"application/vnd.joost.joda-archive": {
				source: "iana",
				extensions: ["joda"],
			},
			"application/vnd.jsk.isdn-ngn": { source: "iana" },
			"application/vnd.kahootz": {
				source: "iana",
				extensions: ["ktz", "ktr"],
			},
			"application/vnd.kde.karbon": {
				source: "iana",
				extensions: ["karbon"],
			},
			"application/vnd.kde.kchart": {
				source: "iana",
				extensions: ["chrt"],
			},
			"application/vnd.kde.kformula": {
				source: "iana",
				extensions: ["kfo"],
			},
			"application/vnd.kde.kivio": {
				source: "iana",
				extensions: ["flw"],
			},
			"application/vnd.kde.kontour": {
				source: "iana",
				extensions: ["kon"],
			},
			"application/vnd.kde.kpresenter": {
				source: "iana",
				extensions: ["kpr", "kpt"],
			},
			"application/vnd.kde.kspread": {
				source: "iana",
				extensions: ["ksp"],
			},
			"application/vnd.kde.kword": {
				source: "iana",
				extensions: ["kwd", "kwt"],
			},
			"application/vnd.kenameaapp": {
				source: "iana",
				extensions: ["htke"],
			},
			"application/vnd.kidspiration": {
				source: "iana",
				extensions: ["kia"],
			},
			"application/vnd.kinar": {
				source: "iana",
				extensions: ["kne", "knp"],
			},
			"application/vnd.koan": {
				source: "iana",
				extensions: ["skp", "skd", "skt", "skm"],
			},
			"application/vnd.kodak-descriptor": {
				source: "iana",
				extensions: ["sse"],
			},
			"application/vnd.las": { source: "iana" },
			"application/vnd.las.las+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.las.las+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["lasxml"],
			},
			"application/vnd.laszip": { source: "iana" },
			"application/vnd.leap+json": { source: "iana", compressible: !0 },
			"application/vnd.liberty-request+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.llamagraphics.life-balance.desktop": {
				source: "iana",
				extensions: ["lbd"],
			},
			"application/vnd.llamagraphics.life-balance.exchange+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["lbe"],
			},
			"application/vnd.logipipe.circuit+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.loom": { source: "iana" },
			"application/vnd.lotus-1-2-3": {
				source: "iana",
				extensions: ["123"],
			},
			"application/vnd.lotus-approach": {
				source: "iana",
				extensions: ["apr"],
			},
			"application/vnd.lotus-freelance": {
				source: "iana",
				extensions: ["pre"],
			},
			"application/vnd.lotus-notes": {
				source: "iana",
				extensions: ["nsf"],
			},
			"application/vnd.lotus-organizer": {
				source: "iana",
				extensions: ["org"],
			},
			"application/vnd.lotus-screencam": {
				source: "iana",
				extensions: ["scm"],
			},
			"application/vnd.lotus-wordpro": {
				source: "iana",
				extensions: ["lwp"],
			},
			"application/vnd.macports.portpkg": {
				source: "iana",
				extensions: ["portpkg"],
			},
			"application/vnd.mapbox-vector-tile": {
				source: "iana",
				extensions: ["mvt"],
			},
			"application/vnd.marlin.drm.actiontoken+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.marlin.drm.conftoken+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.marlin.drm.license+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.marlin.drm.mdcf": { source: "iana" },
			"application/vnd.mason+json": { source: "iana", compressible: !0 },
			"application/vnd.maxar.archive.3tz+zip": {
				source: "iana",
				compressible: !1,
			},
			"application/vnd.maxmind.maxmind-db": { source: "iana" },
			"application/vnd.mcd": { source: "iana", extensions: ["mcd"] },
			"application/vnd.medcalcdata": {
				source: "iana",
				extensions: ["mc1"],
			},
			"application/vnd.mediastation.cdkey": {
				source: "iana",
				extensions: ["cdkey"],
			},
			"application/vnd.meridian-slingshot": { source: "iana" },
			"application/vnd.mfer": { source: "iana", extensions: ["mwf"] },
			"application/vnd.mfmp": { source: "iana", extensions: ["mfm"] },
			"application/vnd.micro+json": { source: "iana", compressible: !0 },
			"application/vnd.micrografx.flo": {
				source: "iana",
				extensions: ["flo"],
			},
			"application/vnd.micrografx.igx": {
				source: "iana",
				extensions: ["igx"],
			},
			"application/vnd.microsoft.portable-executable": { source: "iana" },
			"application/vnd.microsoft.windows.thumbnail-cache": {
				source: "iana",
			},
			"application/vnd.miele+json": { source: "iana", compressible: !0 },
			"application/vnd.mif": { source: "iana", extensions: ["mif"] },
			"application/vnd.minisoft-hp3000-save": { source: "iana" },
			"application/vnd.mitsubishi.misty-guard.trustweb": {
				source: "iana",
			},
			"application/vnd.mobius.daf": {
				source: "iana",
				extensions: ["daf"],
			},
			"application/vnd.mobius.dis": {
				source: "iana",
				extensions: ["dis"],
			},
			"application/vnd.mobius.mbk": {
				source: "iana",
				extensions: ["mbk"],
			},
			"application/vnd.mobius.mqy": {
				source: "iana",
				extensions: ["mqy"],
			},
			"application/vnd.mobius.msl": {
				source: "iana",
				extensions: ["msl"],
			},
			"application/vnd.mobius.plc": {
				source: "iana",
				extensions: ["plc"],
			},
			"application/vnd.mobius.txf": {
				source: "iana",
				extensions: ["txf"],
			},
			"application/vnd.mophun.application": {
				source: "iana",
				extensions: ["mpn"],
			},
			"application/vnd.mophun.certificate": {
				source: "iana",
				extensions: ["mpc"],
			},
			"application/vnd.motorola.flexsuite": { source: "iana" },
			"application/vnd.motorola.flexsuite.adsi": { source: "iana" },
			"application/vnd.motorola.flexsuite.fis": { source: "iana" },
			"application/vnd.motorola.flexsuite.gotap": { source: "iana" },
			"application/vnd.motorola.flexsuite.kmr": { source: "iana" },
			"application/vnd.motorola.flexsuite.ttc": { source: "iana" },
			"application/vnd.motorola.flexsuite.wem": { source: "iana" },
			"application/vnd.motorola.iprm": { source: "iana" },
			"application/vnd.mozilla.xul+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xul"],
			},
			"application/vnd.ms-3mfdocument": { source: "iana" },
			"application/vnd.ms-artgalry": {
				source: "iana",
				extensions: ["cil"],
			},
			"application/vnd.ms-asf": { source: "iana" },
			"application/vnd.ms-cab-compressed": {
				source: "iana",
				extensions: ["cab"],
			},
			"application/vnd.ms-color.iccprofile": { source: "apache" },
			"application/vnd.ms-excel": {
				source: "iana",
				compressible: !1,
				extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"],
			},
			"application/vnd.ms-excel.addin.macroenabled.12": {
				source: "iana",
				extensions: ["xlam"],
			},
			"application/vnd.ms-excel.sheet.binary.macroenabled.12": {
				source: "iana",
				extensions: ["xlsb"],
			},
			"application/vnd.ms-excel.sheet.macroenabled.12": {
				source: "iana",
				extensions: ["xlsm"],
			},
			"application/vnd.ms-excel.template.macroenabled.12": {
				source: "iana",
				extensions: ["xltm"],
			},
			"application/vnd.ms-fontobject": {
				source: "iana",
				compressible: !0,
				extensions: ["eot"],
			},
			"application/vnd.ms-htmlhelp": {
				source: "iana",
				extensions: ["chm"],
			},
			"application/vnd.ms-ims": { source: "iana", extensions: ["ims"] },
			"application/vnd.ms-lrm": { source: "iana", extensions: ["lrm"] },
			"application/vnd.ms-office.activex+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.ms-officetheme": {
				source: "iana",
				extensions: ["thmx"],
			},
			"application/vnd.ms-opentype": {
				source: "apache",
				compressible: !0,
			},
			"application/vnd.ms-outlook": {
				compressible: !1,
				extensions: ["msg"],
			},
			"application/vnd.ms-package.obfuscated-opentype": {
				source: "apache",
			},
			"application/vnd.ms-pki.seccat": {
				source: "apache",
				extensions: ["cat"],
			},
			"application/vnd.ms-pki.stl": {
				source: "apache",
				extensions: ["stl"],
			},
			"application/vnd.ms-playready.initiator+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.ms-powerpoint": {
				source: "iana",
				compressible: !1,
				extensions: ["ppt", "pps", "pot"],
			},
			"application/vnd.ms-powerpoint.addin.macroenabled.12": {
				source: "iana",
				extensions: ["ppam"],
			},
			"application/vnd.ms-powerpoint.presentation.macroenabled.12": {
				source: "iana",
				extensions: ["pptm"],
			},
			"application/vnd.ms-powerpoint.slide.macroenabled.12": {
				source: "iana",
				extensions: ["sldm"],
			},
			"application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
				source: "iana",
				extensions: ["ppsm"],
			},
			"application/vnd.ms-powerpoint.template.macroenabled.12": {
				source: "iana",
				extensions: ["potm"],
			},
			"application/vnd.ms-printdevicecapabilities+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.ms-printing.printticket+xml": {
				source: "apache",
				compressible: !0,
			},
			"application/vnd.ms-printschematicket+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.ms-project": {
				source: "iana",
				extensions: ["mpp", "mpt"],
			},
			"application/vnd.ms-tnef": { source: "iana" },
			"application/vnd.ms-windows.devicepairing": { source: "iana" },
			"application/vnd.ms-windows.nwprinting.oob": { source: "iana" },
			"application/vnd.ms-windows.printerpairing": { source: "iana" },
			"application/vnd.ms-windows.wsd.oob": { source: "iana" },
			"application/vnd.ms-wmdrm.lic-chlg-req": { source: "iana" },
			"application/vnd.ms-wmdrm.lic-resp": { source: "iana" },
			"application/vnd.ms-wmdrm.meter-chlg-req": { source: "iana" },
			"application/vnd.ms-wmdrm.meter-resp": { source: "iana" },
			"application/vnd.ms-word.document.macroenabled.12": {
				source: "iana",
				extensions: ["docm"],
			},
			"application/vnd.ms-word.template.macroenabled.12": {
				source: "iana",
				extensions: ["dotm"],
			},
			"application/vnd.ms-works": {
				source: "iana",
				extensions: ["wps", "wks", "wcm", "wdb"],
			},
			"application/vnd.ms-wpl": { source: "iana", extensions: ["wpl"] },
			"application/vnd.ms-xpsdocument": {
				source: "iana",
				compressible: !1,
				extensions: ["xps"],
			},
			"application/vnd.msa-disk-image": { source: "iana" },
			"application/vnd.mseq": { source: "iana", extensions: ["mseq"] },
			"application/vnd.msign": { source: "iana" },
			"application/vnd.multiad.creator": { source: "iana" },
			"application/vnd.multiad.creator.cif": { source: "iana" },
			"application/vnd.music-niff": { source: "iana" },
			"application/vnd.musician": { source: "iana", extensions: ["mus"] },
			"application/vnd.muvee.style": {
				source: "iana",
				extensions: ["msty"],
			},
			"application/vnd.mynfc": { source: "iana", extensions: ["taglet"] },
			"application/vnd.nacamar.ybrid+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.ncd.control": { source: "iana" },
			"application/vnd.ncd.reference": { source: "iana" },
			"application/vnd.nearst.inv+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.nebumind.line": { source: "iana" },
			"application/vnd.nervana": { source: "iana" },
			"application/vnd.netfpx": { source: "iana" },
			"application/vnd.neurolanguage.nlu": {
				source: "iana",
				extensions: ["nlu"],
			},
			"application/vnd.nimn": { source: "iana" },
			"application/vnd.nintendo.nitro.rom": { source: "iana" },
			"application/vnd.nintendo.snes.rom": { source: "iana" },
			"application/vnd.nitf": {
				source: "iana",
				extensions: ["ntf", "nitf"],
			},
			"application/vnd.noblenet-directory": {
				source: "iana",
				extensions: ["nnd"],
			},
			"application/vnd.noblenet-sealer": {
				source: "iana",
				extensions: ["nns"],
			},
			"application/vnd.noblenet-web": {
				source: "iana",
				extensions: ["nnw"],
			},
			"application/vnd.nokia.catalogs": { source: "iana" },
			"application/vnd.nokia.conml+wbxml": { source: "iana" },
			"application/vnd.nokia.conml+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.nokia.iptv.config+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.nokia.isds-radio-presets": { source: "iana" },
			"application/vnd.nokia.landmark+wbxml": { source: "iana" },
			"application/vnd.nokia.landmark+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.nokia.landmarkcollection+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.nokia.n-gage.ac+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["ac"],
			},
			"application/vnd.nokia.n-gage.data": {
				source: "iana",
				extensions: ["ngdat"],
			},
			"application/vnd.nokia.n-gage.symbian.install": {
				source: "iana",
				extensions: ["n-gage"],
			},
			"application/vnd.nokia.ncd": { source: "iana" },
			"application/vnd.nokia.pcd+wbxml": { source: "iana" },
			"application/vnd.nokia.pcd+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.nokia.radio-preset": {
				source: "iana",
				extensions: ["rpst"],
			},
			"application/vnd.nokia.radio-presets": {
				source: "iana",
				extensions: ["rpss"],
			},
			"application/vnd.novadigm.edm": {
				source: "iana",
				extensions: ["edm"],
			},
			"application/vnd.novadigm.edx": {
				source: "iana",
				extensions: ["edx"],
			},
			"application/vnd.novadigm.ext": {
				source: "iana",
				extensions: ["ext"],
			},
			"application/vnd.ntt-local.content-share": { source: "iana" },
			"application/vnd.ntt-local.file-transfer": { source: "iana" },
			"application/vnd.ntt-local.ogw_remote-access": { source: "iana" },
			"application/vnd.ntt-local.sip-ta_remote": { source: "iana" },
			"application/vnd.ntt-local.sip-ta_tcp_stream": { source: "iana" },
			"application/vnd.oasis.opendocument.chart": {
				source: "iana",
				extensions: ["odc"],
			},
			"application/vnd.oasis.opendocument.chart-template": {
				source: "iana",
				extensions: ["otc"],
			},
			"application/vnd.oasis.opendocument.database": {
				source: "iana",
				extensions: ["odb"],
			},
			"application/vnd.oasis.opendocument.formula": {
				source: "iana",
				extensions: ["odf"],
			},
			"application/vnd.oasis.opendocument.formula-template": {
				source: "iana",
				extensions: ["odft"],
			},
			"application/vnd.oasis.opendocument.graphics": {
				source: "iana",
				compressible: !1,
				extensions: ["odg"],
			},
			"application/vnd.oasis.opendocument.graphics-template": {
				source: "iana",
				extensions: ["otg"],
			},
			"application/vnd.oasis.opendocument.image": {
				source: "iana",
				extensions: ["odi"],
			},
			"application/vnd.oasis.opendocument.image-template": {
				source: "iana",
				extensions: ["oti"],
			},
			"application/vnd.oasis.opendocument.presentation": {
				source: "iana",
				compressible: !1,
				extensions: ["odp"],
			},
			"application/vnd.oasis.opendocument.presentation-template": {
				source: "iana",
				extensions: ["otp"],
			},
			"application/vnd.oasis.opendocument.spreadsheet": {
				source: "iana",
				compressible: !1,
				extensions: ["ods"],
			},
			"application/vnd.oasis.opendocument.spreadsheet-template": {
				source: "iana",
				extensions: ["ots"],
			},
			"application/vnd.oasis.opendocument.text": {
				source: "iana",
				compressible: !1,
				extensions: ["odt"],
			},
			"application/vnd.oasis.opendocument.text-master": {
				source: "iana",
				extensions: ["odm"],
			},
			"application/vnd.oasis.opendocument.text-template": {
				source: "iana",
				extensions: ["ott"],
			},
			"application/vnd.oasis.opendocument.text-web": {
				source: "iana",
				extensions: ["oth"],
			},
			"application/vnd.obn": { source: "iana" },
			"application/vnd.ocf+cbor": { source: "iana" },
			"application/vnd.oci.image.manifest.v1+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oftn.l10n+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oipf.contentaccessdownload+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oipf.contentaccessstreaming+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oipf.cspg-hexbinary": { source: "iana" },
			"application/vnd.oipf.dae.svg+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oipf.dae.xhtml+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oipf.mippvcontrolmessage+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oipf.pae.gem": { source: "iana" },
			"application/vnd.oipf.spdiscovery+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oipf.spdlist+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oipf.ueprofile+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oipf.userprofile+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.olpc-sugar": {
				source: "iana",
				extensions: ["xo"],
			},
			"application/vnd.oma-scws-config": { source: "iana" },
			"application/vnd.oma-scws-http-request": { source: "iana" },
			"application/vnd.oma-scws-http-response": { source: "iana" },
			"application/vnd.oma.bcast.associated-procedure-parameter+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.bcast.drm-trigger+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.bcast.imd+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.bcast.ltkm": { source: "iana" },
			"application/vnd.oma.bcast.notification+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.bcast.provisioningtrigger": { source: "iana" },
			"application/vnd.oma.bcast.sgboot": { source: "iana" },
			"application/vnd.oma.bcast.sgdd+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.bcast.sgdu": { source: "iana" },
			"application/vnd.oma.bcast.simple-symbol-container": {
				source: "iana",
			},
			"application/vnd.oma.bcast.smartcard-trigger+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.bcast.sprov+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.bcast.stkm": { source: "iana" },
			"application/vnd.oma.cab-address-book+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.cab-feature-handler+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.cab-pcc+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.cab-subs-invite+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.cab-user-prefs+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.dcd": { source: "iana" },
			"application/vnd.oma.dcdc": { source: "iana" },
			"application/vnd.oma.dd2+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["dd2"],
			},
			"application/vnd.oma.drm.risd+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.group-usage-list+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.lwm2m+cbor": { source: "iana" },
			"application/vnd.oma.lwm2m+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.lwm2m+tlv": { source: "iana" },
			"application/vnd.oma.pal+xml": { source: "iana", compressible: !0 },
			"application/vnd.oma.poc.detailed-progress-report+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.poc.final-report+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.poc.groups+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.poc.invocation-descriptor+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.poc.optimized-progress-report+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.push": { source: "iana" },
			"application/vnd.oma.scidm.messages+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oma.xcap-directory+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.omads-email+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/vnd.omads-file+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/vnd.omads-folder+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/vnd.omaloc-supl-init": { source: "iana" },
			"application/vnd.onepager": { source: "iana" },
			"application/vnd.onepagertamp": { source: "iana" },
			"application/vnd.onepagertamx": { source: "iana" },
			"application/vnd.onepagertat": { source: "iana" },
			"application/vnd.onepagertatp": { source: "iana" },
			"application/vnd.onepagertatx": { source: "iana" },
			"application/vnd.openblox.game+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["obgx"],
			},
			"application/vnd.openblox.game-binary": { source: "iana" },
			"application/vnd.openeye.oeb": { source: "iana" },
			"application/vnd.openofficeorg.extension": {
				source: "apache",
				extensions: ["oxt"],
			},
			"application/vnd.openstreetmap.data+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["osm"],
			},
			"application/vnd.opentimestamps.ots": { source: "iana" },
			"application/vnd.openxmlformats-officedocument.custom-properties+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.drawing+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.extended-properties+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.presentation":
				{ source: "iana", compressible: !1, extensions: ["pptx"] },
			"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.slide":
				{ source: "iana", extensions: ["sldx"] },
			"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.slideshow":
				{ source: "iana", extensions: ["ppsx"] },
			"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.template":
				{ source: "iana", extensions: ["potx"] },
			"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
				{ source: "iana", compressible: !1, extensions: ["xlsx"] },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.template":
				{ source: "iana", extensions: ["xltx"] },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.theme+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.openxmlformats-officedocument.themeoverride+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.openxmlformats-officedocument.vmldrawing": {
				source: "iana",
			},
			"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document":
				{ source: "iana", compressible: !1, extensions: ["docx"] },
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.wordprocessingml.template":
				{ source: "iana", extensions: ["dotx"] },
			"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-package.core-properties+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":
				{ source: "iana", compressible: !0 },
			"application/vnd.openxmlformats-package.relationships+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oracle.resource+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.orange.indata": { source: "iana" },
			"application/vnd.osa.netdeploy": { source: "iana" },
			"application/vnd.osgeo.mapguide.package": {
				source: "iana",
				extensions: ["mgp"],
			},
			"application/vnd.osgi.bundle": { source: "iana" },
			"application/vnd.osgi.dp": { source: "iana", extensions: ["dp"] },
			"application/vnd.osgi.subsystem": {
				source: "iana",
				extensions: ["esa"],
			},
			"application/vnd.otps.ct-kip+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.oxli.countgraph": { source: "iana" },
			"application/vnd.pagerduty+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.palm": {
				source: "iana",
				extensions: ["pdb", "pqa", "oprc"],
			},
			"application/vnd.panoply": { source: "iana" },
			"application/vnd.paos.xml": { source: "iana" },
			"application/vnd.patentdive": { source: "iana" },
			"application/vnd.patientecommsdoc": { source: "iana" },
			"application/vnd.pawaafile": {
				source: "iana",
				extensions: ["paw"],
			},
			"application/vnd.pcos": { source: "iana" },
			"application/vnd.pg.format": {
				source: "iana",
				extensions: ["str"],
			},
			"application/vnd.pg.osasli": {
				source: "iana",
				extensions: ["ei6"],
			},
			"application/vnd.piaccess.application-licence": { source: "iana" },
			"application/vnd.picsel": { source: "iana", extensions: ["efif"] },
			"application/vnd.pmi.widget": {
				source: "iana",
				extensions: ["wg"],
			},
			"application/vnd.poc.group-advertisement+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.pocketlearn": {
				source: "iana",
				extensions: ["plf"],
			},
			"application/vnd.powerbuilder6": {
				source: "iana",
				extensions: ["pbd"],
			},
			"application/vnd.powerbuilder6-s": { source: "iana" },
			"application/vnd.powerbuilder7": { source: "iana" },
			"application/vnd.powerbuilder7-s": { source: "iana" },
			"application/vnd.powerbuilder75": { source: "iana" },
			"application/vnd.powerbuilder75-s": { source: "iana" },
			"application/vnd.preminet": { source: "iana" },
			"application/vnd.previewsystems.box": {
				source: "iana",
				extensions: ["box"],
			},
			"application/vnd.proteus.magazine": {
				source: "iana",
				extensions: ["mgz"],
			},
			"application/vnd.psfs": { source: "iana" },
			"application/vnd.publishare-delta-tree": {
				source: "iana",
				extensions: ["qps"],
			},
			"application/vnd.pvi.ptid1": {
				source: "iana",
				extensions: ["ptid"],
			},
			"application/vnd.pwg-multiplexed": { source: "iana" },
			"application/vnd.pwg-xhtml-print+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.qualcomm.brew-app-res": { source: "iana" },
			"application/vnd.quarantainenet": { source: "iana" },
			"application/vnd.quark.quarkxpress": {
				source: "iana",
				extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
			},
			"application/vnd.quobject-quoxdocument": { source: "iana" },
			"application/vnd.radisys.moml+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml-audit+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml-audit-conf+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml-audit-conn+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml-audit-dialog+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml-audit-stream+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml-conf+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml-dialog+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml-dialog-base+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml-dialog-fax-detect+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml-dialog-group+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml-dialog-speech+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.radisys.msml-dialog-transform+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.rainstor.data": { source: "iana" },
			"application/vnd.rapid": { source: "iana" },
			"application/vnd.rar": { source: "iana", extensions: ["rar"] },
			"application/vnd.realvnc.bed": {
				source: "iana",
				extensions: ["bed"],
			},
			"application/vnd.recordare.musicxml": {
				source: "iana",
				extensions: ["mxl"],
			},
			"application/vnd.recordare.musicxml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["musicxml"],
			},
			"application/vnd.renlearn.rlprint": { source: "iana" },
			"application/vnd.resilient.logic": { source: "iana" },
			"application/vnd.restful+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.rig.cryptonote": {
				source: "iana",
				extensions: ["cryptonote"],
			},
			"application/vnd.rim.cod": {
				source: "apache",
				extensions: ["cod"],
			},
			"application/vnd.rn-realmedia": {
				source: "apache",
				extensions: ["rm"],
			},
			"application/vnd.rn-realmedia-vbr": {
				source: "apache",
				extensions: ["rmvb"],
			},
			"application/vnd.route66.link66+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["link66"],
			},
			"application/vnd.rs-274x": { source: "iana" },
			"application/vnd.ruckus.download": { source: "iana" },
			"application/vnd.s3sms": { source: "iana" },
			"application/vnd.sailingtracker.track": {
				source: "iana",
				extensions: ["st"],
			},
			"application/vnd.sar": { source: "iana" },
			"application/vnd.sbm.cid": { source: "iana" },
			"application/vnd.sbm.mid2": { source: "iana" },
			"application/vnd.scribus": { source: "iana" },
			"application/vnd.sealed.3df": { source: "iana" },
			"application/vnd.sealed.csf": { source: "iana" },
			"application/vnd.sealed.doc": { source: "iana" },
			"application/vnd.sealed.eml": { source: "iana" },
			"application/vnd.sealed.mht": { source: "iana" },
			"application/vnd.sealed.net": { source: "iana" },
			"application/vnd.sealed.ppt": { source: "iana" },
			"application/vnd.sealed.tiff": { source: "iana" },
			"application/vnd.sealed.xls": { source: "iana" },
			"application/vnd.sealedmedia.softseal.html": { source: "iana" },
			"application/vnd.sealedmedia.softseal.pdf": { source: "iana" },
			"application/vnd.seemail": { source: "iana", extensions: ["see"] },
			"application/vnd.seis+json": { source: "iana", compressible: !0 },
			"application/vnd.sema": { source: "iana", extensions: ["sema"] },
			"application/vnd.semd": { source: "iana", extensions: ["semd"] },
			"application/vnd.semf": { source: "iana", extensions: ["semf"] },
			"application/vnd.shade-save-file": { source: "iana" },
			"application/vnd.shana.informed.formdata": {
				source: "iana",
				extensions: ["ifm"],
			},
			"application/vnd.shana.informed.formtemplate": {
				source: "iana",
				extensions: ["itp"],
			},
			"application/vnd.shana.informed.interchange": {
				source: "iana",
				extensions: ["iif"],
			},
			"application/vnd.shana.informed.package": {
				source: "iana",
				extensions: ["ipk"],
			},
			"application/vnd.shootproof+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.shopkick+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.shp": { source: "iana" },
			"application/vnd.shx": { source: "iana" },
			"application/vnd.sigrok.session": { source: "iana" },
			"application/vnd.simtech-mindmapper": {
				source: "iana",
				extensions: ["twd", "twds"],
			},
			"application/vnd.siren+json": { source: "iana", compressible: !0 },
			"application/vnd.smaf": { source: "iana", extensions: ["mmf"] },
			"application/vnd.smart.notebook": { source: "iana" },
			"application/vnd.smart.teacher": {
				source: "iana",
				extensions: ["teacher"],
			},
			"application/vnd.snesdev-page-table": { source: "iana" },
			"application/vnd.software602.filler.form+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["fo"],
			},
			"application/vnd.software602.filler.form-xml-zip": {
				source: "iana",
			},
			"application/vnd.solent.sdkm+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["sdkm", "sdkd"],
			},
			"application/vnd.spotfire.dxp": {
				source: "iana",
				extensions: ["dxp"],
			},
			"application/vnd.spotfire.sfs": {
				source: "iana",
				extensions: ["sfs"],
			},
			"application/vnd.sqlite3": { source: "iana" },
			"application/vnd.sss-cod": { source: "iana" },
			"application/vnd.sss-dtf": { source: "iana" },
			"application/vnd.sss-ntf": { source: "iana" },
			"application/vnd.stardivision.calc": {
				source: "apache",
				extensions: ["sdc"],
			},
			"application/vnd.stardivision.draw": {
				source: "apache",
				extensions: ["sda"],
			},
			"application/vnd.stardivision.impress": {
				source: "apache",
				extensions: ["sdd"],
			},
			"application/vnd.stardivision.math": {
				source: "apache",
				extensions: ["smf"],
			},
			"application/vnd.stardivision.writer": {
				source: "apache",
				extensions: ["sdw", "vor"],
			},
			"application/vnd.stardivision.writer-global": {
				source: "apache",
				extensions: ["sgl"],
			},
			"application/vnd.stepmania.package": {
				source: "iana",
				extensions: ["smzip"],
			},
			"application/vnd.stepmania.stepchart": {
				source: "iana",
				extensions: ["sm"],
			},
			"application/vnd.street-stream": { source: "iana" },
			"application/vnd.sun.wadl+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["wadl"],
			},
			"application/vnd.sun.xml.calc": {
				source: "apache",
				extensions: ["sxc"],
			},
			"application/vnd.sun.xml.calc.template": {
				source: "apache",
				extensions: ["stc"],
			},
			"application/vnd.sun.xml.draw": {
				source: "apache",
				extensions: ["sxd"],
			},
			"application/vnd.sun.xml.draw.template": {
				source: "apache",
				extensions: ["std"],
			},
			"application/vnd.sun.xml.impress": {
				source: "apache",
				extensions: ["sxi"],
			},
			"application/vnd.sun.xml.impress.template": {
				source: "apache",
				extensions: ["sti"],
			},
			"application/vnd.sun.xml.math": {
				source: "apache",
				extensions: ["sxm"],
			},
			"application/vnd.sun.xml.writer": {
				source: "apache",
				extensions: ["sxw"],
			},
			"application/vnd.sun.xml.writer.global": {
				source: "apache",
				extensions: ["sxg"],
			},
			"application/vnd.sun.xml.writer.template": {
				source: "apache",
				extensions: ["stw"],
			},
			"application/vnd.sus-calendar": {
				source: "iana",
				extensions: ["sus", "susp"],
			},
			"application/vnd.svd": { source: "iana", extensions: ["svd"] },
			"application/vnd.swiftview-ics": { source: "iana" },
			"application/vnd.sycle+xml": { source: "iana", compressible: !0 },
			"application/vnd.syft+json": { source: "iana", compressible: !0 },
			"application/vnd.symbian.install": {
				source: "apache",
				extensions: ["sis", "sisx"],
			},
			"application/vnd.syncml+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
				extensions: ["xsm"],
			},
			"application/vnd.syncml.dm+wbxml": {
				source: "iana",
				charset: "UTF-8",
				extensions: ["bdm"],
			},
			"application/vnd.syncml.dm+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
				extensions: ["xdm"],
			},
			"application/vnd.syncml.dm.notification": { source: "iana" },
			"application/vnd.syncml.dmddf+wbxml": { source: "iana" },
			"application/vnd.syncml.dmddf+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
				extensions: ["ddf"],
			},
			"application/vnd.syncml.dmtnds+wbxml": { source: "iana" },
			"application/vnd.syncml.dmtnds+xml": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
			},
			"application/vnd.syncml.ds.notification": { source: "iana" },
			"application/vnd.tableschema+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.tao.intent-module-archive": {
				source: "iana",
				extensions: ["tao"],
			},
			"application/vnd.tcpdump.pcap": {
				source: "iana",
				extensions: ["pcap", "cap", "dmp"],
			},
			"application/vnd.think-cell.ppttc+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.tmd.mediaflex.api+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.tml": { source: "iana" },
			"application/vnd.tmobile-livetv": {
				source: "iana",
				extensions: ["tmo"],
			},
			"application/vnd.tri.onesource": { source: "iana" },
			"application/vnd.trid.tpt": { source: "iana", extensions: ["tpt"] },
			"application/vnd.triscape.mxs": {
				source: "iana",
				extensions: ["mxs"],
			},
			"application/vnd.trueapp": { source: "iana", extensions: ["tra"] },
			"application/vnd.truedoc": { source: "iana" },
			"application/vnd.ubisoft.webplayer": { source: "iana" },
			"application/vnd.ufdl": {
				source: "iana",
				extensions: ["ufd", "ufdl"],
			},
			"application/vnd.uiq.theme": {
				source: "iana",
				extensions: ["utz"],
			},
			"application/vnd.umajin": { source: "iana", extensions: ["umj"] },
			"application/vnd.unity": {
				source: "iana",
				extensions: ["unityweb"],
			},
			"application/vnd.uoml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["uoml"],
			},
			"application/vnd.uplanet.alert": { source: "iana" },
			"application/vnd.uplanet.alert-wbxml": { source: "iana" },
			"application/vnd.uplanet.bearer-choice": { source: "iana" },
			"application/vnd.uplanet.bearer-choice-wbxml": { source: "iana" },
			"application/vnd.uplanet.cacheop": { source: "iana" },
			"application/vnd.uplanet.cacheop-wbxml": { source: "iana" },
			"application/vnd.uplanet.channel": { source: "iana" },
			"application/vnd.uplanet.channel-wbxml": { source: "iana" },
			"application/vnd.uplanet.list": { source: "iana" },
			"application/vnd.uplanet.list-wbxml": { source: "iana" },
			"application/vnd.uplanet.listcmd": { source: "iana" },
			"application/vnd.uplanet.listcmd-wbxml": { source: "iana" },
			"application/vnd.uplanet.signal": { source: "iana" },
			"application/vnd.uri-map": { source: "iana" },
			"application/vnd.valve.source.material": { source: "iana" },
			"application/vnd.vcx": { source: "iana", extensions: ["vcx"] },
			"application/vnd.vd-study": { source: "iana" },
			"application/vnd.vectorworks": { source: "iana" },
			"application/vnd.vel+json": { source: "iana", compressible: !0 },
			"application/vnd.verimatrix.vcas": { source: "iana" },
			"application/vnd.veritone.aion+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vnd.veryant.thin": { source: "iana" },
			"application/vnd.ves.encrypted": { source: "iana" },
			"application/vnd.vidsoft.vidconference": { source: "iana" },
			"application/vnd.visio": {
				source: "iana",
				extensions: ["vsd", "vst", "vss", "vsw"],
			},
			"application/vnd.visionary": {
				source: "iana",
				extensions: ["vis"],
			},
			"application/vnd.vividence.scriptfile": { source: "iana" },
			"application/vnd.vsf": { source: "iana", extensions: ["vsf"] },
			"application/vnd.wap.sic": { source: "iana" },
			"application/vnd.wap.slc": { source: "iana" },
			"application/vnd.wap.wbxml": {
				source: "iana",
				charset: "UTF-8",
				extensions: ["wbxml"],
			},
			"application/vnd.wap.wmlc": {
				source: "iana",
				extensions: ["wmlc"],
			},
			"application/vnd.wap.wmlscriptc": {
				source: "iana",
				extensions: ["wmlsc"],
			},
			"application/vnd.webturbo": { source: "iana", extensions: ["wtb"] },
			"application/vnd.wfa.dpp": { source: "iana" },
			"application/vnd.wfa.p2p": { source: "iana" },
			"application/vnd.wfa.wsc": { source: "iana" },
			"application/vnd.windows.devicepairing": { source: "iana" },
			"application/vnd.wmc": { source: "iana" },
			"application/vnd.wmf.bootstrap": { source: "iana" },
			"application/vnd.wolfram.mathematica": { source: "iana" },
			"application/vnd.wolfram.mathematica.package": { source: "iana" },
			"application/vnd.wolfram.player": {
				source: "iana",
				extensions: ["nbp"],
			},
			"application/vnd.wordperfect": {
				source: "iana",
				extensions: ["wpd"],
			},
			"application/vnd.wqd": { source: "iana", extensions: ["wqd"] },
			"application/vnd.wrq-hp3000-labelled": { source: "iana" },
			"application/vnd.wt.stf": { source: "iana", extensions: ["stf"] },
			"application/vnd.wv.csp+wbxml": { source: "iana" },
			"application/vnd.wv.csp+xml": { source: "iana", compressible: !0 },
			"application/vnd.wv.ssp+xml": { source: "iana", compressible: !0 },
			"application/vnd.xacml+json": { source: "iana", compressible: !0 },
			"application/vnd.xara": { source: "iana", extensions: ["xar"] },
			"application/vnd.xfdl": { source: "iana", extensions: ["xfdl"] },
			"application/vnd.xfdl.webform": { source: "iana" },
			"application/vnd.xmi+xml": { source: "iana", compressible: !0 },
			"application/vnd.xmpie.cpkg": { source: "iana" },
			"application/vnd.xmpie.dpkg": { source: "iana" },
			"application/vnd.xmpie.plan": { source: "iana" },
			"application/vnd.xmpie.ppkg": { source: "iana" },
			"application/vnd.xmpie.xlim": { source: "iana" },
			"application/vnd.yamaha.hv-dic": {
				source: "iana",
				extensions: ["hvd"],
			},
			"application/vnd.yamaha.hv-script": {
				source: "iana",
				extensions: ["hvs"],
			},
			"application/vnd.yamaha.hv-voice": {
				source: "iana",
				extensions: ["hvp"],
			},
			"application/vnd.yamaha.openscoreformat": {
				source: "iana",
				extensions: ["osf"],
			},
			"application/vnd.yamaha.openscoreformat.osfpvg+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["osfpvg"],
			},
			"application/vnd.yamaha.remote-setup": { source: "iana" },
			"application/vnd.yamaha.smaf-audio": {
				source: "iana",
				extensions: ["saf"],
			},
			"application/vnd.yamaha.smaf-phrase": {
				source: "iana",
				extensions: ["spf"],
			},
			"application/vnd.yamaha.through-ngn": { source: "iana" },
			"application/vnd.yamaha.tunnel-udpencap": { source: "iana" },
			"application/vnd.yaoweme": { source: "iana" },
			"application/vnd.yellowriver-custom-menu": {
				source: "iana",
				extensions: ["cmp"],
			},
			"application/vnd.youtube.yt": { source: "iana" },
			"application/vnd.zul": {
				source: "iana",
				extensions: ["zir", "zirz"],
			},
			"application/vnd.zzazz.deck+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["zaz"],
			},
			"application/voicexml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["vxml"],
			},
			"application/voucher-cms+json": {
				source: "iana",
				compressible: !0,
			},
			"application/vq-rtcpxr": { source: "iana" },
			"application/wasm": {
				source: "iana",
				compressible: !0,
				extensions: ["wasm"],
			},
			"application/watcherinfo+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["wif"],
			},
			"application/webpush-options+json": {
				source: "iana",
				compressible: !0,
			},
			"application/whoispp-query": { source: "iana" },
			"application/whoispp-response": { source: "iana" },
			"application/widget": { source: "iana", extensions: ["wgt"] },
			"application/winhlp": { source: "apache", extensions: ["hlp"] },
			"application/wita": { source: "iana" },
			"application/wordperfect5.1": { source: "iana" },
			"application/wsdl+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["wsdl"],
			},
			"application/wspolicy+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["wspolicy"],
			},
			"application/x-7z-compressed": {
				source: "apache",
				compressible: !1,
				extensions: ["7z"],
			},
			"application/x-abiword": { source: "apache", extensions: ["abw"] },
			"application/x-ace-compressed": {
				source: "apache",
				extensions: ["ace"],
			},
			"application/x-amf": { source: "apache" },
			"application/x-apple-diskimage": {
				source: "apache",
				extensions: ["dmg"],
			},
			"application/x-arj": { compressible: !1, extensions: ["arj"] },
			"application/x-authorware-bin": {
				source: "apache",
				extensions: ["aab", "x32", "u32", "vox"],
			},
			"application/x-authorware-map": {
				source: "apache",
				extensions: ["aam"],
			},
			"application/x-authorware-seg": {
				source: "apache",
				extensions: ["aas"],
			},
			"application/x-bcpio": { source: "apache", extensions: ["bcpio"] },
			"application/x-bdoc": { compressible: !1, extensions: ["bdoc"] },
			"application/x-bittorrent": {
				source: "apache",
				extensions: ["torrent"],
			},
			"application/x-blorb": {
				source: "apache",
				extensions: ["blb", "blorb"],
			},
			"application/x-bzip": {
				source: "apache",
				compressible: !1,
				extensions: ["bz"],
			},
			"application/x-bzip2": {
				source: "apache",
				compressible: !1,
				extensions: ["bz2", "boz"],
			},
			"application/x-cbr": {
				source: "apache",
				extensions: ["cbr", "cba", "cbt", "cbz", "cb7"],
			},
			"application/x-cdlink": { source: "apache", extensions: ["vcd"] },
			"application/x-cfs-compressed": {
				source: "apache",
				extensions: ["cfs"],
			},
			"application/x-chat": { source: "apache", extensions: ["chat"] },
			"application/x-chess-pgn": {
				source: "apache",
				extensions: ["pgn"],
			},
			"application/x-chrome-extension": { extensions: ["crx"] },
			"application/x-cocoa": { source: "nginx", extensions: ["cco"] },
			"application/x-compress": { source: "apache" },
			"application/x-conference": {
				source: "apache",
				extensions: ["nsc"],
			},
			"application/x-cpio": { source: "apache", extensions: ["cpio"] },
			"application/x-csh": { source: "apache", extensions: ["csh"] },
			"application/x-deb": { compressible: !1 },
			"application/x-debian-package": {
				source: "apache",
				extensions: ["deb", "udeb"],
			},
			"application/x-dgc-compressed": {
				source: "apache",
				extensions: ["dgc"],
			},
			"application/x-director": {
				source: "apache",
				extensions: [
					"dir",
					"dcr",
					"dxr",
					"cst",
					"cct",
					"cxt",
					"w3d",
					"fgd",
					"swa",
				],
			},
			"application/x-doom": { source: "apache", extensions: ["wad"] },
			"application/x-dtbncx+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["ncx"],
			},
			"application/x-dtbook+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["dtb"],
			},
			"application/x-dtbresource+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["res"],
			},
			"application/x-dvi": {
				source: "apache",
				compressible: !1,
				extensions: ["dvi"],
			},
			"application/x-envoy": { source: "apache", extensions: ["evy"] },
			"application/x-eva": { source: "apache", extensions: ["eva"] },
			"application/x-font-bdf": { source: "apache", extensions: ["bdf"] },
			"application/x-font-dos": { source: "apache" },
			"application/x-font-framemaker": { source: "apache" },
			"application/x-font-ghostscript": {
				source: "apache",
				extensions: ["gsf"],
			},
			"application/x-font-libgrx": { source: "apache" },
			"application/x-font-linux-psf": {
				source: "apache",
				extensions: ["psf"],
			},
			"application/x-font-pcf": { source: "apache", extensions: ["pcf"] },
			"application/x-font-snf": { source: "apache", extensions: ["snf"] },
			"application/x-font-speedo": { source: "apache" },
			"application/x-font-sunos-news": { source: "apache" },
			"application/x-font-type1": {
				source: "apache",
				extensions: ["pfa", "pfb", "pfm", "afm"],
			},
			"application/x-font-vfont": { source: "apache" },
			"application/x-freearc": { source: "apache", extensions: ["arc"] },
			"application/x-futuresplash": {
				source: "apache",
				extensions: ["spl"],
			},
			"application/x-gca-compressed": {
				source: "apache",
				extensions: ["gca"],
			},
			"application/x-glulx": { source: "apache", extensions: ["ulx"] },
			"application/x-gnumeric": {
				source: "apache",
				extensions: ["gnumeric"],
			},
			"application/x-gramps-xml": {
				source: "apache",
				extensions: ["gramps"],
			},
			"application/x-gtar": { source: "apache", extensions: ["gtar"] },
			"application/x-gzip": { source: "apache" },
			"application/x-hdf": { source: "apache", extensions: ["hdf"] },
			"application/x-httpd-php": {
				compressible: !0,
				extensions: ["php"],
			},
			"application/x-install-instructions": {
				source: "apache",
				extensions: ["install"],
			},
			"application/x-iso9660-image": {
				source: "apache",
				extensions: ["iso"],
			},
			"application/x-iwork-keynote-sffkey": { extensions: ["key"] },
			"application/x-iwork-numbers-sffnumbers": {
				extensions: ["numbers"],
			},
			"application/x-iwork-pages-sffpages": { extensions: ["pages"] },
			"application/x-java-archive-diff": {
				source: "nginx",
				extensions: ["jardiff"],
			},
			"application/x-java-jnlp-file": {
				source: "apache",
				compressible: !1,
				extensions: ["jnlp"],
			},
			"application/x-javascript": { compressible: !0 },
			"application/x-keepass2": { extensions: ["kdbx"] },
			"application/x-latex": {
				source: "apache",
				compressible: !1,
				extensions: ["latex"],
			},
			"application/x-lua-bytecode": { extensions: ["luac"] },
			"application/x-lzh-compressed": {
				source: "apache",
				extensions: ["lzh", "lha"],
			},
			"application/x-makeself": { source: "nginx", extensions: ["run"] },
			"application/x-mie": { source: "apache", extensions: ["mie"] },
			"application/x-mobipocket-ebook": {
				source: "apache",
				extensions: ["prc", "mobi"],
			},
			"application/x-mpegurl": { compressible: !1 },
			"application/x-ms-application": {
				source: "apache",
				extensions: ["application"],
			},
			"application/x-ms-shortcut": {
				source: "apache",
				extensions: ["lnk"],
			},
			"application/x-ms-wmd": { source: "apache", extensions: ["wmd"] },
			"application/x-ms-wmz": { source: "apache", extensions: ["wmz"] },
			"application/x-ms-xbap": { source: "apache", extensions: ["xbap"] },
			"application/x-msaccess": { source: "apache", extensions: ["mdb"] },
			"application/x-msbinder": { source: "apache", extensions: ["obd"] },
			"application/x-mscardfile": {
				source: "apache",
				extensions: ["crd"],
			},
			"application/x-msclip": { source: "apache", extensions: ["clp"] },
			"application/x-msdos-program": { extensions: ["exe"] },
			"application/x-msdownload": {
				source: "apache",
				extensions: ["exe", "dll", "com", "bat", "msi"],
			},
			"application/x-msmediaview": {
				source: "apache",
				extensions: ["mvb", "m13", "m14"],
			},
			"application/x-msmetafile": {
				source: "apache",
				extensions: ["wmf", "wmz", "emf", "emz"],
			},
			"application/x-msmoney": { source: "apache", extensions: ["mny"] },
			"application/x-mspublisher": {
				source: "apache",
				extensions: ["pub"],
			},
			"application/x-msschedule": {
				source: "apache",
				extensions: ["scd"],
			},
			"application/x-msterminal": {
				source: "apache",
				extensions: ["trm"],
			},
			"application/x-mswrite": { source: "apache", extensions: ["wri"] },
			"application/x-netcdf": {
				source: "apache",
				extensions: ["nc", "cdf"],
			},
			"application/x-ns-proxy-autoconfig": {
				compressible: !0,
				extensions: ["pac"],
			},
			"application/x-nzb": { source: "apache", extensions: ["nzb"] },
			"application/x-perl": { source: "nginx", extensions: ["pl", "pm"] },
			"application/x-pilot": {
				source: "nginx",
				extensions: ["prc", "pdb"],
			},
			"application/x-pkcs12": {
				source: "apache",
				compressible: !1,
				extensions: ["p12", "pfx"],
			},
			"application/x-pkcs7-certificates": {
				source: "apache",
				extensions: ["p7b", "spc"],
			},
			"application/x-pkcs7-certreqresp": {
				source: "apache",
				extensions: ["p7r"],
			},
			"application/x-pki-message": { source: "iana" },
			"application/x-rar-compressed": {
				source: "apache",
				compressible: !1,
				extensions: ["rar"],
			},
			"application/x-redhat-package-manager": {
				source: "nginx",
				extensions: ["rpm"],
			},
			"application/x-research-info-systems": {
				source: "apache",
				extensions: ["ris"],
			},
			"application/x-sea": { source: "nginx", extensions: ["sea"] },
			"application/x-sh": {
				source: "apache",
				compressible: !0,
				extensions: ["sh"],
			},
			"application/x-shar": { source: "apache", extensions: ["shar"] },
			"application/x-shockwave-flash": {
				source: "apache",
				compressible: !1,
				extensions: ["swf"],
			},
			"application/x-silverlight-app": {
				source: "apache",
				extensions: ["xap"],
			},
			"application/x-sql": { source: "apache", extensions: ["sql"] },
			"application/x-stuffit": {
				source: "apache",
				compressible: !1,
				extensions: ["sit"],
			},
			"application/x-stuffitx": {
				source: "apache",
				extensions: ["sitx"],
			},
			"application/x-subrip": { source: "apache", extensions: ["srt"] },
			"application/x-sv4cpio": {
				source: "apache",
				extensions: ["sv4cpio"],
			},
			"application/x-sv4crc": {
				source: "apache",
				extensions: ["sv4crc"],
			},
			"application/x-t3vm-image": {
				source: "apache",
				extensions: ["t3"],
			},
			"application/x-tads": { source: "apache", extensions: ["gam"] },
			"application/x-tar": {
				source: "apache",
				compressible: !0,
				extensions: ["tar"],
			},
			"application/x-tcl": {
				source: "apache",
				extensions: ["tcl", "tk"],
			},
			"application/x-tex": { source: "apache", extensions: ["tex"] },
			"application/x-tex-tfm": { source: "apache", extensions: ["tfm"] },
			"application/x-texinfo": {
				source: "apache",
				extensions: ["texinfo", "texi"],
			},
			"application/x-tgif": { source: "apache", extensions: ["obj"] },
			"application/x-ustar": { source: "apache", extensions: ["ustar"] },
			"application/x-virtualbox-hdd": {
				compressible: !0,
				extensions: ["hdd"],
			},
			"application/x-virtualbox-ova": {
				compressible: !0,
				extensions: ["ova"],
			},
			"application/x-virtualbox-ovf": {
				compressible: !0,
				extensions: ["ovf"],
			},
			"application/x-virtualbox-vbox": {
				compressible: !0,
				extensions: ["vbox"],
			},
			"application/x-virtualbox-vbox-extpack": {
				compressible: !1,
				extensions: ["vbox-extpack"],
			},
			"application/x-virtualbox-vdi": {
				compressible: !0,
				extensions: ["vdi"],
			},
			"application/x-virtualbox-vhd": {
				compressible: !0,
				extensions: ["vhd"],
			},
			"application/x-virtualbox-vmdk": {
				compressible: !0,
				extensions: ["vmdk"],
			},
			"application/x-wais-source": {
				source: "apache",
				extensions: ["src"],
			},
			"application/x-web-app-manifest+json": {
				compressible: !0,
				extensions: ["webapp"],
			},
			"application/x-www-form-urlencoded": {
				source: "iana",
				compressible: !0,
			},
			"application/x-x509-ca-cert": {
				source: "iana",
				extensions: ["der", "crt", "pem"],
			},
			"application/x-x509-ca-ra-cert": { source: "iana" },
			"application/x-x509-next-ca-cert": { source: "iana" },
			"application/x-xfig": { source: "apache", extensions: ["fig"] },
			"application/x-xliff+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["xlf"],
			},
			"application/x-xpinstall": {
				source: "apache",
				compressible: !1,
				extensions: ["xpi"],
			},
			"application/x-xz": { source: "apache", extensions: ["xz"] },
			"application/x-zmachine": {
				source: "apache",
				extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
			},
			"application/x400-bp": { source: "iana" },
			"application/xacml+xml": { source: "iana", compressible: !0 },
			"application/xaml+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["xaml"],
			},
			"application/xcap-att+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xav"],
			},
			"application/xcap-caps+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xca"],
			},
			"application/xcap-diff+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xdf"],
			},
			"application/xcap-el+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xel"],
			},
			"application/xcap-error+xml": { source: "iana", compressible: !0 },
			"application/xcap-ns+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xns"],
			},
			"application/xcon-conference-info+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/xcon-conference-info-diff+xml": {
				source: "iana",
				compressible: !0,
			},
			"application/xenc+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xenc"],
			},
			"application/xhtml+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xhtml", "xht"],
			},
			"application/xhtml-voice+xml": {
				source: "apache",
				compressible: !0,
			},
			"application/xliff+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xlf"],
			},
			"application/xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xml", "xsl", "xsd", "rng"],
			},
			"application/xml-dtd": {
				source: "iana",
				compressible: !0,
				extensions: ["dtd"],
			},
			"application/xml-external-parsed-entity": { source: "iana" },
			"application/xml-patch+xml": { source: "iana", compressible: !0 },
			"application/xmpp+xml": { source: "iana", compressible: !0 },
			"application/xop+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xop"],
			},
			"application/xproc+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["xpl"],
			},
			"application/xslt+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xsl", "xslt"],
			},
			"application/xspf+xml": {
				source: "apache",
				compressible: !0,
				extensions: ["xspf"],
			},
			"application/xv+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["mxml", "xhvml", "xvml", "xvm"],
			},
			"application/yang": { source: "iana", extensions: ["yang"] },
			"application/yang-data+json": { source: "iana", compressible: !0 },
			"application/yang-data+xml": { source: "iana", compressible: !0 },
			"application/yang-patch+json": { source: "iana", compressible: !0 },
			"application/yang-patch+xml": { source: "iana", compressible: !0 },
			"application/yin+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["yin"],
			},
			"application/zip": {
				source: "iana",
				compressible: !1,
				extensions: ["zip"],
			},
			"application/zlib": { source: "iana" },
			"application/zstd": { source: "iana" },
			"audio/1d-interleaved-parityfec": { source: "iana" },
			"audio/32kadpcm": { source: "iana" },
			"audio/3gpp": {
				source: "iana",
				compressible: !1,
				extensions: ["3gpp"],
			},
			"audio/3gpp2": { source: "iana" },
			"audio/aac": { source: "iana" },
			"audio/ac3": { source: "iana" },
			"audio/adpcm": { source: "apache", extensions: ["adp"] },
			"audio/amr": { source: "iana", extensions: ["amr"] },
			"audio/amr-wb": { source: "iana" },
			"audio/amr-wb+": { source: "iana" },
			"audio/aptx": { source: "iana" },
			"audio/asc": { source: "iana" },
			"audio/atrac-advanced-lossless": { source: "iana" },
			"audio/atrac-x": { source: "iana" },
			"audio/atrac3": { source: "iana" },
			"audio/basic": {
				source: "iana",
				compressible: !1,
				extensions: ["au", "snd"],
			},
			"audio/bv16": { source: "iana" },
			"audio/bv32": { source: "iana" },
			"audio/clearmode": { source: "iana" },
			"audio/cn": { source: "iana" },
			"audio/dat12": { source: "iana" },
			"audio/dls": { source: "iana" },
			"audio/dsr-es201108": { source: "iana" },
			"audio/dsr-es202050": { source: "iana" },
			"audio/dsr-es202211": { source: "iana" },
			"audio/dsr-es202212": { source: "iana" },
			"audio/dv": { source: "iana" },
			"audio/dvi4": { source: "iana" },
			"audio/eac3": { source: "iana" },
			"audio/encaprtp": { source: "iana" },
			"audio/evrc": { source: "iana" },
			"audio/evrc-qcp": { source: "iana" },
			"audio/evrc0": { source: "iana" },
			"audio/evrc1": { source: "iana" },
			"audio/evrcb": { source: "iana" },
			"audio/evrcb0": { source: "iana" },
			"audio/evrcb1": { source: "iana" },
			"audio/evrcnw": { source: "iana" },
			"audio/evrcnw0": { source: "iana" },
			"audio/evrcnw1": { source: "iana" },
			"audio/evrcwb": { source: "iana" },
			"audio/evrcwb0": { source: "iana" },
			"audio/evrcwb1": { source: "iana" },
			"audio/evs": { source: "iana" },
			"audio/flexfec": { source: "iana" },
			"audio/fwdred": { source: "iana" },
			"audio/g711-0": { source: "iana" },
			"audio/g719": { source: "iana" },
			"audio/g722": { source: "iana" },
			"audio/g7221": { source: "iana" },
			"audio/g723": { source: "iana" },
			"audio/g726-16": { source: "iana" },
			"audio/g726-24": { source: "iana" },
			"audio/g726-32": { source: "iana" },
			"audio/g726-40": { source: "iana" },
			"audio/g728": { source: "iana" },
			"audio/g729": { source: "iana" },
			"audio/g7291": { source: "iana" },
			"audio/g729d": { source: "iana" },
			"audio/g729e": { source: "iana" },
			"audio/gsm": { source: "iana" },
			"audio/gsm-efr": { source: "iana" },
			"audio/gsm-hr-08": { source: "iana" },
			"audio/ilbc": { source: "iana" },
			"audio/ip-mr_v2.5": { source: "iana" },
			"audio/isac": { source: "apache" },
			"audio/l16": { source: "iana" },
			"audio/l20": { source: "iana" },
			"audio/l24": { source: "iana", compressible: !1 },
			"audio/l8": { source: "iana" },
			"audio/lpc": { source: "iana" },
			"audio/melp": { source: "iana" },
			"audio/melp1200": { source: "iana" },
			"audio/melp2400": { source: "iana" },
			"audio/melp600": { source: "iana" },
			"audio/mhas": { source: "iana" },
			"audio/midi": {
				source: "apache",
				extensions: ["mid", "midi", "kar", "rmi"],
			},
			"audio/mobile-xmf": { source: "iana", extensions: ["mxmf"] },
			"audio/mp3": { compressible: !1, extensions: ["mp3"] },
			"audio/mp4": {
				source: "iana",
				compressible: !1,
				extensions: ["m4a", "mp4a"],
			},
			"audio/mp4a-latm": { source: "iana" },
			"audio/mpa": { source: "iana" },
			"audio/mpa-robust": { source: "iana" },
			"audio/mpeg": {
				source: "iana",
				compressible: !1,
				extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
			},
			"audio/mpeg4-generic": { source: "iana" },
			"audio/musepack": { source: "apache" },
			"audio/ogg": {
				source: "iana",
				compressible: !1,
				extensions: ["oga", "ogg", "spx", "opus"],
			},
			"audio/opus": { source: "iana" },
			"audio/parityfec": { source: "iana" },
			"audio/pcma": { source: "iana" },
			"audio/pcma-wb": { source: "iana" },
			"audio/pcmu": { source: "iana" },
			"audio/pcmu-wb": { source: "iana" },
			"audio/prs.sid": { source: "iana" },
			"audio/qcelp": { source: "iana" },
			"audio/raptorfec": { source: "iana" },
			"audio/red": { source: "iana" },
			"audio/rtp-enc-aescm128": { source: "iana" },
			"audio/rtp-midi": { source: "iana" },
			"audio/rtploopback": { source: "iana" },
			"audio/rtx": { source: "iana" },
			"audio/s3m": { source: "apache", extensions: ["s3m"] },
			"audio/scip": { source: "iana" },
			"audio/silk": { source: "apache", extensions: ["sil"] },
			"audio/smv": { source: "iana" },
			"audio/smv-qcp": { source: "iana" },
			"audio/smv0": { source: "iana" },
			"audio/sofa": { source: "iana" },
			"audio/sp-midi": { source: "iana" },
			"audio/speex": { source: "iana" },
			"audio/t140c": { source: "iana" },
			"audio/t38": { source: "iana" },
			"audio/telephone-event": { source: "iana" },
			"audio/tetra_acelp": { source: "iana" },
			"audio/tetra_acelp_bb": { source: "iana" },
			"audio/tone": { source: "iana" },
			"audio/tsvcis": { source: "iana" },
			"audio/uemclip": { source: "iana" },
			"audio/ulpfec": { source: "iana" },
			"audio/usac": { source: "iana" },
			"audio/vdvi": { source: "iana" },
			"audio/vmr-wb": { source: "iana" },
			"audio/vnd.3gpp.iufp": { source: "iana" },
			"audio/vnd.4sb": { source: "iana" },
			"audio/vnd.audiokoz": { source: "iana" },
			"audio/vnd.celp": { source: "iana" },
			"audio/vnd.cisco.nse": { source: "iana" },
			"audio/vnd.cmles.radio-events": { source: "iana" },
			"audio/vnd.cns.anp1": { source: "iana" },
			"audio/vnd.cns.inf1": { source: "iana" },
			"audio/vnd.dece.audio": {
				source: "iana",
				extensions: ["uva", "uvva"],
			},
			"audio/vnd.digital-winds": { source: "iana", extensions: ["eol"] },
			"audio/vnd.dlna.adts": { source: "iana" },
			"audio/vnd.dolby.heaac.1": { source: "iana" },
			"audio/vnd.dolby.heaac.2": { source: "iana" },
			"audio/vnd.dolby.mlp": { source: "iana" },
			"audio/vnd.dolby.mps": { source: "iana" },
			"audio/vnd.dolby.pl2": { source: "iana" },
			"audio/vnd.dolby.pl2x": { source: "iana" },
			"audio/vnd.dolby.pl2z": { source: "iana" },
			"audio/vnd.dolby.pulse.1": { source: "iana" },
			"audio/vnd.dra": { source: "iana", extensions: ["dra"] },
			"audio/vnd.dts": { source: "iana", extensions: ["dts"] },
			"audio/vnd.dts.hd": { source: "iana", extensions: ["dtshd"] },
			"audio/vnd.dts.uhd": { source: "iana" },
			"audio/vnd.dvb.file": { source: "iana" },
			"audio/vnd.everad.plj": { source: "iana" },
			"audio/vnd.hns.audio": { source: "iana" },
			"audio/vnd.lucent.voice": { source: "iana", extensions: ["lvp"] },
			"audio/vnd.ms-playready.media.pya": {
				source: "iana",
				extensions: ["pya"],
			},
			"audio/vnd.nokia.mobile-xmf": { source: "iana" },
			"audio/vnd.nortel.vbk": { source: "iana" },
			"audio/vnd.nuera.ecelp4800": {
				source: "iana",
				extensions: ["ecelp4800"],
			},
			"audio/vnd.nuera.ecelp7470": {
				source: "iana",
				extensions: ["ecelp7470"],
			},
			"audio/vnd.nuera.ecelp9600": {
				source: "iana",
				extensions: ["ecelp9600"],
			},
			"audio/vnd.octel.sbc": { source: "iana" },
			"audio/vnd.presonus.multitrack": { source: "iana" },
			"audio/vnd.qcelp": { source: "iana" },
			"audio/vnd.rhetorex.32kadpcm": { source: "iana" },
			"audio/vnd.rip": { source: "iana", extensions: ["rip"] },
			"audio/vnd.rn-realaudio": { compressible: !1 },
			"audio/vnd.sealedmedia.softseal.mpeg": { source: "iana" },
			"audio/vnd.vmx.cvsd": { source: "iana" },
			"audio/vnd.wave": { compressible: !1 },
			"audio/vorbis": { source: "iana", compressible: !1 },
			"audio/vorbis-config": { source: "iana" },
			"audio/wav": { compressible: !1, extensions: ["wav"] },
			"audio/wave": { compressible: !1, extensions: ["wav"] },
			"audio/webm": {
				source: "apache",
				compressible: !1,
				extensions: ["weba"],
			},
			"audio/x-aac": {
				source: "apache",
				compressible: !1,
				extensions: ["aac"],
			},
			"audio/x-aiff": {
				source: "apache",
				extensions: ["aif", "aiff", "aifc"],
			},
			"audio/x-caf": {
				source: "apache",
				compressible: !1,
				extensions: ["caf"],
			},
			"audio/x-flac": { source: "apache", extensions: ["flac"] },
			"audio/x-m4a": { source: "nginx", extensions: ["m4a"] },
			"audio/x-matroska": { source: "apache", extensions: ["mka"] },
			"audio/x-mpegurl": { source: "apache", extensions: ["m3u"] },
			"audio/x-ms-wax": { source: "apache", extensions: ["wax"] },
			"audio/x-ms-wma": { source: "apache", extensions: ["wma"] },
			"audio/x-pn-realaudio": {
				source: "apache",
				extensions: ["ram", "ra"],
			},
			"audio/x-pn-realaudio-plugin": {
				source: "apache",
				extensions: ["rmp"],
			},
			"audio/x-realaudio": { source: "nginx", extensions: ["ra"] },
			"audio/x-tta": { source: "apache" },
			"audio/x-wav": { source: "apache", extensions: ["wav"] },
			"audio/xm": { source: "apache", extensions: ["xm"] },
			"chemical/x-cdx": { source: "apache", extensions: ["cdx"] },
			"chemical/x-cif": { source: "apache", extensions: ["cif"] },
			"chemical/x-cmdf": { source: "apache", extensions: ["cmdf"] },
			"chemical/x-cml": { source: "apache", extensions: ["cml"] },
			"chemical/x-csml": { source: "apache", extensions: ["csml"] },
			"chemical/x-pdb": { source: "apache" },
			"chemical/x-xyz": { source: "apache", extensions: ["xyz"] },
			"font/collection": { source: "iana", extensions: ["ttc"] },
			"font/otf": {
				source: "iana",
				compressible: !0,
				extensions: ["otf"],
			},
			"font/sfnt": { source: "iana" },
			"font/ttf": {
				source: "iana",
				compressible: !0,
				extensions: ["ttf"],
			},
			"font/woff": { source: "iana", extensions: ["woff"] },
			"font/woff2": { source: "iana", extensions: ["woff2"] },
			"image/aces": { source: "iana", extensions: ["exr"] },
			"image/apng": { compressible: !1, extensions: ["apng"] },
			"image/avci": { source: "iana", extensions: ["avci"] },
			"image/avcs": { source: "iana", extensions: ["avcs"] },
			"image/avif": {
				source: "iana",
				compressible: !1,
				extensions: ["avif"],
			},
			"image/bmp": {
				source: "iana",
				compressible: !0,
				extensions: ["bmp"],
			},
			"image/cgm": { source: "iana", extensions: ["cgm"] },
			"image/dicom-rle": { source: "iana", extensions: ["drle"] },
			"image/emf": { source: "iana", extensions: ["emf"] },
			"image/fits": { source: "iana", extensions: ["fits"] },
			"image/g3fax": { source: "iana", extensions: ["g3"] },
			"image/gif": {
				source: "iana",
				compressible: !1,
				extensions: ["gif"],
			},
			"image/heic": { source: "iana", extensions: ["heic"] },
			"image/heic-sequence": { source: "iana", extensions: ["heics"] },
			"image/heif": { source: "iana", extensions: ["heif"] },
			"image/heif-sequence": { source: "iana", extensions: ["heifs"] },
			"image/hej2k": { source: "iana", extensions: ["hej2"] },
			"image/hsj2": { source: "iana", extensions: ["hsj2"] },
			"image/ief": { source: "iana", extensions: ["ief"] },
			"image/jls": { source: "iana", extensions: ["jls"] },
			"image/jp2": {
				source: "iana",
				compressible: !1,
				extensions: ["jp2", "jpg2"],
			},
			"image/jpeg": {
				source: "iana",
				compressible: !1,
				extensions: ["jpeg", "jpg", "jpe"],
			},
			"image/jph": { source: "iana", extensions: ["jph"] },
			"image/jphc": { source: "iana", extensions: ["jhc"] },
			"image/jpm": {
				source: "iana",
				compressible: !1,
				extensions: ["jpm"],
			},
			"image/jpx": {
				source: "iana",
				compressible: !1,
				extensions: ["jpx", "jpf"],
			},
			"image/jxr": { source: "iana", extensions: ["jxr"] },
			"image/jxra": { source: "iana", extensions: ["jxra"] },
			"image/jxrs": { source: "iana", extensions: ["jxrs"] },
			"image/jxs": { source: "iana", extensions: ["jxs"] },
			"image/jxsc": { source: "iana", extensions: ["jxsc"] },
			"image/jxsi": { source: "iana", extensions: ["jxsi"] },
			"image/jxss": { source: "iana", extensions: ["jxss"] },
			"image/ktx": { source: "iana", extensions: ["ktx"] },
			"image/ktx2": { source: "iana", extensions: ["ktx2"] },
			"image/naplps": { source: "iana" },
			"image/pjpeg": { compressible: !1 },
			"image/png": {
				source: "iana",
				compressible: !1,
				extensions: ["png"],
			},
			"image/prs.btif": { source: "iana", extensions: ["btif"] },
			"image/prs.pti": { source: "iana", extensions: ["pti"] },
			"image/pwg-raster": { source: "iana" },
			"image/sgi": { source: "apache", extensions: ["sgi"] },
			"image/svg+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["svg", "svgz"],
			},
			"image/t38": { source: "iana", extensions: ["t38"] },
			"image/tiff": {
				source: "iana",
				compressible: !1,
				extensions: ["tif", "tiff"],
			},
			"image/tiff-fx": { source: "iana", extensions: ["tfx"] },
			"image/vnd.adobe.photoshop": {
				source: "iana",
				compressible: !0,
				extensions: ["psd"],
			},
			"image/vnd.airzip.accelerator.azv": {
				source: "iana",
				extensions: ["azv"],
			},
			"image/vnd.cns.inf2": { source: "iana" },
			"image/vnd.dece.graphic": {
				source: "iana",
				extensions: ["uvi", "uvvi", "uvg", "uvvg"],
			},
			"image/vnd.djvu": { source: "iana", extensions: ["djvu", "djv"] },
			"image/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] },
			"image/vnd.dwg": { source: "iana", extensions: ["dwg"] },
			"image/vnd.dxf": { source: "iana", extensions: ["dxf"] },
			"image/vnd.fastbidsheet": { source: "iana", extensions: ["fbs"] },
			"image/vnd.fpx": { source: "iana", extensions: ["fpx"] },
			"image/vnd.fst": { source: "iana", extensions: ["fst"] },
			"image/vnd.fujixerox.edmics-mmr": {
				source: "iana",
				extensions: ["mmr"],
			},
			"image/vnd.fujixerox.edmics-rlc": {
				source: "iana",
				extensions: ["rlc"],
			},
			"image/vnd.globalgraphics.pgb": { source: "iana" },
			"image/vnd.microsoft.icon": {
				source: "iana",
				compressible: !0,
				extensions: ["ico"],
			},
			"image/vnd.mix": { source: "iana" },
			"image/vnd.mozilla.apng": { source: "iana" },
			"image/vnd.ms-dds": { compressible: !0, extensions: ["dds"] },
			"image/vnd.ms-modi": { source: "iana", extensions: ["mdi"] },
			"image/vnd.ms-photo": { source: "apache", extensions: ["wdp"] },
			"image/vnd.net-fpx": { source: "iana", extensions: ["npx"] },
			"image/vnd.pco.b16": { source: "iana", extensions: ["b16"] },
			"image/vnd.radiance": { source: "iana" },
			"image/vnd.sealed.png": { source: "iana" },
			"image/vnd.sealedmedia.softseal.gif": { source: "iana" },
			"image/vnd.sealedmedia.softseal.jpg": { source: "iana" },
			"image/vnd.svf": { source: "iana" },
			"image/vnd.tencent.tap": { source: "iana", extensions: ["tap"] },
			"image/vnd.valve.source.texture": {
				source: "iana",
				extensions: ["vtf"],
			},
			"image/vnd.wap.wbmp": { source: "iana", extensions: ["wbmp"] },
			"image/vnd.xiff": { source: "iana", extensions: ["xif"] },
			"image/vnd.zbrush.pcx": { source: "iana", extensions: ["pcx"] },
			"image/webp": { source: "apache", extensions: ["webp"] },
			"image/wmf": { source: "iana", extensions: ["wmf"] },
			"image/x-3ds": { source: "apache", extensions: ["3ds"] },
			"image/x-cmu-raster": { source: "apache", extensions: ["ras"] },
			"image/x-cmx": { source: "apache", extensions: ["cmx"] },
			"image/x-freehand": {
				source: "apache",
				extensions: ["fh", "fhc", "fh4", "fh5", "fh7"],
			},
			"image/x-icon": {
				source: "apache",
				compressible: !0,
				extensions: ["ico"],
			},
			"image/x-jng": { source: "nginx", extensions: ["jng"] },
			"image/x-mrsid-image": { source: "apache", extensions: ["sid"] },
			"image/x-ms-bmp": {
				source: "nginx",
				compressible: !0,
				extensions: ["bmp"],
			},
			"image/x-pcx": { source: "apache", extensions: ["pcx"] },
			"image/x-pict": { source: "apache", extensions: ["pic", "pct"] },
			"image/x-portable-anymap": {
				source: "apache",
				extensions: ["pnm"],
			},
			"image/x-portable-bitmap": {
				source: "apache",
				extensions: ["pbm"],
			},
			"image/x-portable-graymap": {
				source: "apache",
				extensions: ["pgm"],
			},
			"image/x-portable-pixmap": {
				source: "apache",
				extensions: ["ppm"],
			},
			"image/x-rgb": { source: "apache", extensions: ["rgb"] },
			"image/x-tga": { source: "apache", extensions: ["tga"] },
			"image/x-xbitmap": { source: "apache", extensions: ["xbm"] },
			"image/x-xcf": { compressible: !1 },
			"image/x-xpixmap": { source: "apache", extensions: ["xpm"] },
			"image/x-xwindowdump": { source: "apache", extensions: ["xwd"] },
			"message/cpim": { source: "iana" },
			"message/delivery-status": { source: "iana" },
			"message/disposition-notification": {
				source: "iana",
				extensions: ["disposition-notification"],
			},
			"message/external-body": { source: "iana" },
			"message/feedback-report": { source: "iana" },
			"message/global": { source: "iana", extensions: ["u8msg"] },
			"message/global-delivery-status": {
				source: "iana",
				extensions: ["u8dsn"],
			},
			"message/global-disposition-notification": {
				source: "iana",
				extensions: ["u8mdn"],
			},
			"message/global-headers": { source: "iana", extensions: ["u8hdr"] },
			"message/http": { source: "iana", compressible: !1 },
			"message/imdn+xml": { source: "iana", compressible: !0 },
			"message/news": { source: "iana" },
			"message/partial": { source: "iana", compressible: !1 },
			"message/rfc822": {
				source: "iana",
				compressible: !0,
				extensions: ["eml", "mime"],
			},
			"message/s-http": { source: "iana" },
			"message/sip": { source: "iana" },
			"message/sipfrag": { source: "iana" },
			"message/tracking-status": { source: "iana" },
			"message/vnd.si.simp": { source: "iana" },
			"message/vnd.wfa.wsc": { source: "iana", extensions: ["wsc"] },
			"model/3mf": { source: "iana", extensions: ["3mf"] },
			"model/e57": { source: "iana" },
			"model/gltf+json": {
				source: "iana",
				compressible: !0,
				extensions: ["gltf"],
			},
			"model/gltf-binary": {
				source: "iana",
				compressible: !0,
				extensions: ["glb"],
			},
			"model/iges": {
				source: "iana",
				compressible: !1,
				extensions: ["igs", "iges"],
			},
			"model/mesh": {
				source: "iana",
				compressible: !1,
				extensions: ["msh", "mesh", "silo"],
			},
			"model/mtl": { source: "iana", extensions: ["mtl"] },
			"model/obj": { source: "iana", extensions: ["obj"] },
			"model/step": { source: "iana" },
			"model/step+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["stpx"],
			},
			"model/step+zip": {
				source: "iana",
				compressible: !1,
				extensions: ["stpz"],
			},
			"model/step-xml+zip": {
				source: "iana",
				compressible: !1,
				extensions: ["stpxz"],
			},
			"model/stl": { source: "iana", extensions: ["stl"] },
			"model/vnd.collada+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["dae"],
			},
			"model/vnd.dwf": { source: "iana", extensions: ["dwf"] },
			"model/vnd.flatland.3dml": { source: "iana" },
			"model/vnd.gdl": { source: "iana", extensions: ["gdl"] },
			"model/vnd.gs-gdl": { source: "apache" },
			"model/vnd.gs.gdl": { source: "iana" },
			"model/vnd.gtw": { source: "iana", extensions: ["gtw"] },
			"model/vnd.moml+xml": { source: "iana", compressible: !0 },
			"model/vnd.mts": { source: "iana", extensions: ["mts"] },
			"model/vnd.opengex": { source: "iana", extensions: ["ogex"] },
			"model/vnd.parasolid.transmit.binary": {
				source: "iana",
				extensions: ["x_b"],
			},
			"model/vnd.parasolid.transmit.text": {
				source: "iana",
				extensions: ["x_t"],
			},
			"model/vnd.pytha.pyox": { source: "iana" },
			"model/vnd.rosette.annotated-data-model": { source: "iana" },
			"model/vnd.sap.vds": { source: "iana", extensions: ["vds"] },
			"model/vnd.usdz+zip": {
				source: "iana",
				compressible: !1,
				extensions: ["usdz"],
			},
			"model/vnd.valve.source.compiled-map": {
				source: "iana",
				extensions: ["bsp"],
			},
			"model/vnd.vtu": { source: "iana", extensions: ["vtu"] },
			"model/vrml": {
				source: "iana",
				compressible: !1,
				extensions: ["wrl", "vrml"],
			},
			"model/x3d+binary": {
				source: "apache",
				compressible: !1,
				extensions: ["x3db", "x3dbz"],
			},
			"model/x3d+fastinfoset": { source: "iana", extensions: ["x3db"] },
			"model/x3d+vrml": {
				source: "apache",
				compressible: !1,
				extensions: ["x3dv", "x3dvz"],
			},
			"model/x3d+xml": {
				source: "iana",
				compressible: !0,
				extensions: ["x3d", "x3dz"],
			},
			"model/x3d-vrml": { source: "iana", extensions: ["x3dv"] },
			"multipart/alternative": { source: "iana", compressible: !1 },
			"multipart/appledouble": { source: "iana" },
			"multipart/byteranges": { source: "iana" },
			"multipart/digest": { source: "iana" },
			"multipart/encrypted": { source: "iana", compressible: !1 },
			"multipart/form-data": { source: "iana", compressible: !1 },
			"multipart/header-set": { source: "iana" },
			"multipart/mixed": { source: "iana" },
			"multipart/multilingual": { source: "iana" },
			"multipart/parallel": { source: "iana" },
			"multipart/related": { source: "iana", compressible: !1 },
			"multipart/report": { source: "iana" },
			"multipart/signed": { source: "iana", compressible: !1 },
			"multipart/vnd.bint.med-plus": { source: "iana" },
			"multipart/voice-message": { source: "iana" },
			"multipart/x-mixed-replace": { source: "iana" },
			"text/1d-interleaved-parityfec": { source: "iana" },
			"text/cache-manifest": {
				source: "iana",
				compressible: !0,
				extensions: ["appcache", "manifest"],
			},
			"text/calendar": { source: "iana", extensions: ["ics", "ifb"] },
			"text/calender": { compressible: !0 },
			"text/cmd": { compressible: !0 },
			"text/coffeescript": { extensions: ["coffee", "litcoffee"] },
			"text/cql": { source: "iana" },
			"text/cql-expression": { source: "iana" },
			"text/cql-identifier": { source: "iana" },
			"text/css": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
				extensions: ["css"],
			},
			"text/csv": {
				source: "iana",
				compressible: !0,
				extensions: ["csv"],
			},
			"text/csv-schema": { source: "iana" },
			"text/directory": { source: "iana" },
			"text/dns": { source: "iana" },
			"text/ecmascript": { source: "iana" },
			"text/encaprtp": { source: "iana" },
			"text/enriched": { source: "iana" },
			"text/fhirpath": { source: "iana" },
			"text/flexfec": { source: "iana" },
			"text/fwdred": { source: "iana" },
			"text/gff3": { source: "iana" },
			"text/grammar-ref-list": { source: "iana" },
			"text/html": {
				source: "iana",
				compressible: !0,
				extensions: ["html", "htm", "shtml"],
			},
			"text/jade": { extensions: ["jade"] },
			"text/javascript": { source: "iana", compressible: !0 },
			"text/jcr-cnd": { source: "iana" },
			"text/jsx": { compressible: !0, extensions: ["jsx"] },
			"text/less": { compressible: !0, extensions: ["less"] },
			"text/markdown": {
				source: "iana",
				compressible: !0,
				extensions: ["markdown", "md"],
			},
			"text/mathml": { source: "nginx", extensions: ["mml"] },
			"text/mdx": { compressible: !0, extensions: ["mdx"] },
			"text/mizar": { source: "iana" },
			"text/n3": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
				extensions: ["n3"],
			},
			"text/parameters": { source: "iana", charset: "UTF-8" },
			"text/parityfec": { source: "iana" },
			"text/plain": {
				source: "iana",
				compressible: !0,
				extensions: [
					"txt",
					"text",
					"conf",
					"def",
					"list",
					"log",
					"in",
					"ini",
				],
			},
			"text/provenance-notation": { source: "iana", charset: "UTF-8" },
			"text/prs.fallenstein.rst": { source: "iana" },
			"text/prs.lines.tag": { source: "iana", extensions: ["dsc"] },
			"text/prs.prop.logic": { source: "iana" },
			"text/raptorfec": { source: "iana" },
			"text/red": { source: "iana" },
			"text/rfc822-headers": { source: "iana" },
			"text/richtext": {
				source: "iana",
				compressible: !0,
				extensions: ["rtx"],
			},
			"text/rtf": {
				source: "iana",
				compressible: !0,
				extensions: ["rtf"],
			},
			"text/rtp-enc-aescm128": { source: "iana" },
			"text/rtploopback": { source: "iana" },
			"text/rtx": { source: "iana" },
			"text/sgml": { source: "iana", extensions: ["sgml", "sgm"] },
			"text/shaclc": { source: "iana" },
			"text/shex": { source: "iana", extensions: ["shex"] },
			"text/slim": { extensions: ["slim", "slm"] },
			"text/spdx": { source: "iana", extensions: ["spdx"] },
			"text/strings": { source: "iana" },
			"text/stylus": { extensions: ["stylus", "styl"] },
			"text/t140": { source: "iana" },
			"text/tab-separated-values": {
				source: "iana",
				compressible: !0,
				extensions: ["tsv"],
			},
			"text/troff": {
				source: "iana",
				extensions: ["t", "tr", "roff", "man", "me", "ms"],
			},
			"text/turtle": {
				source: "iana",
				charset: "UTF-8",
				extensions: ["ttl"],
			},
			"text/ulpfec": { source: "iana" },
			"text/uri-list": {
				source: "iana",
				compressible: !0,
				extensions: ["uri", "uris", "urls"],
			},
			"text/vcard": {
				source: "iana",
				compressible: !0,
				extensions: ["vcard"],
			},
			"text/vnd.a": { source: "iana" },
			"text/vnd.abc": { source: "iana" },
			"text/vnd.ascii-art": { source: "iana" },
			"text/vnd.curl": { source: "iana", extensions: ["curl"] },
			"text/vnd.curl.dcurl": { source: "apache", extensions: ["dcurl"] },
			"text/vnd.curl.mcurl": { source: "apache", extensions: ["mcurl"] },
			"text/vnd.curl.scurl": { source: "apache", extensions: ["scurl"] },
			"text/vnd.debian.copyright": { source: "iana", charset: "UTF-8" },
			"text/vnd.dmclientscript": { source: "iana" },
			"text/vnd.dvb.subtitle": { source: "iana", extensions: ["sub"] },
			"text/vnd.esmertec.theme-descriptor": {
				source: "iana",
				charset: "UTF-8",
			},
			"text/vnd.familysearch.gedcom": {
				source: "iana",
				extensions: ["ged"],
			},
			"text/vnd.ficlab.flt": { source: "iana" },
			"text/vnd.fly": { source: "iana", extensions: ["fly"] },
			"text/vnd.fmi.flexstor": { source: "iana", extensions: ["flx"] },
			"text/vnd.gml": { source: "iana" },
			"text/vnd.graphviz": { source: "iana", extensions: ["gv"] },
			"text/vnd.hans": { source: "iana" },
			"text/vnd.hgl": { source: "iana" },
			"text/vnd.in3d.3dml": { source: "iana", extensions: ["3dml"] },
			"text/vnd.in3d.spot": { source: "iana", extensions: ["spot"] },
			"text/vnd.iptc.newsml": { source: "iana" },
			"text/vnd.iptc.nitf": { source: "iana" },
			"text/vnd.latex-z": { source: "iana" },
			"text/vnd.motorola.reflex": { source: "iana" },
			"text/vnd.ms-mediapackage": { source: "iana" },
			"text/vnd.net2phone.commcenter.command": { source: "iana" },
			"text/vnd.radisys.msml-basic-layout": { source: "iana" },
			"text/vnd.senx.warpscript": { source: "iana" },
			"text/vnd.si.uricatalogue": { source: "iana" },
			"text/vnd.sosi": { source: "iana" },
			"text/vnd.sun.j2me.app-descriptor": {
				source: "iana",
				charset: "UTF-8",
				extensions: ["jad"],
			},
			"text/vnd.trolltech.linguist": { source: "iana", charset: "UTF-8" },
			"text/vnd.wap.si": { source: "iana" },
			"text/vnd.wap.sl": { source: "iana" },
			"text/vnd.wap.wml": { source: "iana", extensions: ["wml"] },
			"text/vnd.wap.wmlscript": { source: "iana", extensions: ["wmls"] },
			"text/vtt": {
				source: "iana",
				charset: "UTF-8",
				compressible: !0,
				extensions: ["vtt"],
			},
			"text/x-asm": { source: "apache", extensions: ["s", "asm"] },
			"text/x-c": {
				source: "apache",
				extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
			},
			"text/x-component": { source: "nginx", extensions: ["htc"] },
			"text/x-fortran": {
				source: "apache",
				extensions: ["f", "for", "f77", "f90"],
			},
			"text/x-gwt-rpc": { compressible: !0 },
			"text/x-handlebars-template": { extensions: ["hbs"] },
			"text/x-java-source": { source: "apache", extensions: ["java"] },
			"text/x-jquery-tmpl": { compressible: !0 },
			"text/x-lua": { extensions: ["lua"] },
			"text/x-markdown": { compressible: !0, extensions: ["mkd"] },
			"text/x-nfo": { source: "apache", extensions: ["nfo"] },
			"text/x-opml": { source: "apache", extensions: ["opml"] },
			"text/x-org": { compressible: !0, extensions: ["org"] },
			"text/x-pascal": { source: "apache", extensions: ["p", "pas"] },
			"text/x-processing": { compressible: !0, extensions: ["pde"] },
			"text/x-sass": { extensions: ["sass"] },
			"text/x-scss": { extensions: ["scss"] },
			"text/x-setext": { source: "apache", extensions: ["etx"] },
			"text/x-sfv": { source: "apache", extensions: ["sfv"] },
			"text/x-suse-ymp": { compressible: !0, extensions: ["ymp"] },
			"text/x-uuencode": { source: "apache", extensions: ["uu"] },
			"text/x-vcalendar": { source: "apache", extensions: ["vcs"] },
			"text/x-vcard": { source: "apache", extensions: ["vcf"] },
			"text/xml": {
				source: "iana",
				compressible: !0,
				extensions: ["xml"],
			},
			"text/xml-external-parsed-entity": { source: "iana" },
			"text/yaml": { compressible: !0, extensions: ["yaml", "yml"] },
			"video/1d-interleaved-parityfec": { source: "iana" },
			"video/3gpp": { source: "iana", extensions: ["3gp", "3gpp"] },
			"video/3gpp-tt": { source: "iana" },
			"video/3gpp2": { source: "iana", extensions: ["3g2"] },
			"video/av1": { source: "iana" },
			"video/bmpeg": { source: "iana" },
			"video/bt656": { source: "iana" },
			"video/celb": { source: "iana" },
			"video/dv": { source: "iana" },
			"video/encaprtp": { source: "iana" },
			"video/ffv1": { source: "iana" },
			"video/flexfec": { source: "iana" },
			"video/h261": { source: "iana", extensions: ["h261"] },
			"video/h263": { source: "iana", extensions: ["h263"] },
			"video/h263-1998": { source: "iana" },
			"video/h263-2000": { source: "iana" },
			"video/h264": { source: "iana", extensions: ["h264"] },
			"video/h264-rcdo": { source: "iana" },
			"video/h264-svc": { source: "iana" },
			"video/h265": { source: "iana" },
			"video/iso.segment": { source: "iana", extensions: ["m4s"] },
			"video/jpeg": { source: "iana", extensions: ["jpgv"] },
			"video/jpeg2000": { source: "iana" },
			"video/jpm": { source: "apache", extensions: ["jpm", "jpgm"] },
			"video/jxsv": { source: "iana" },
			"video/mj2": { source: "iana", extensions: ["mj2", "mjp2"] },
			"video/mp1s": { source: "iana" },
			"video/mp2p": { source: "iana" },
			"video/mp2t": { source: "iana", extensions: ["ts"] },
			"video/mp4": {
				source: "iana",
				compressible: !1,
				extensions: ["mp4", "mp4v", "mpg4"],
			},
			"video/mp4v-es": { source: "iana" },
			"video/mpeg": {
				source: "iana",
				compressible: !1,
				extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"],
			},
			"video/mpeg4-generic": { source: "iana" },
			"video/mpv": { source: "iana" },
			"video/nv": { source: "iana" },
			"video/ogg": {
				source: "iana",
				compressible: !1,
				extensions: ["ogv"],
			},
			"video/parityfec": { source: "iana" },
			"video/pointer": { source: "iana" },
			"video/quicktime": {
				source: "iana",
				compressible: !1,
				extensions: ["qt", "mov"],
			},
			"video/raptorfec": { source: "iana" },
			"video/raw": { source: "iana" },
			"video/rtp-enc-aescm128": { source: "iana" },
			"video/rtploopback": { source: "iana" },
			"video/rtx": { source: "iana" },
			"video/scip": { source: "iana" },
			"video/smpte291": { source: "iana" },
			"video/smpte292m": { source: "iana" },
			"video/ulpfec": { source: "iana" },
			"video/vc1": { source: "iana" },
			"video/vc2": { source: "iana" },
			"video/vnd.cctv": { source: "iana" },
			"video/vnd.dece.hd": {
				source: "iana",
				extensions: ["uvh", "uvvh"],
			},
			"video/vnd.dece.mobile": {
				source: "iana",
				extensions: ["uvm", "uvvm"],
			},
			"video/vnd.dece.mp4": { source: "iana" },
			"video/vnd.dece.pd": {
				source: "iana",
				extensions: ["uvp", "uvvp"],
			},
			"video/vnd.dece.sd": {
				source: "iana",
				extensions: ["uvs", "uvvs"],
			},
			"video/vnd.dece.video": {
				source: "iana",
				extensions: ["uvv", "uvvv"],
			},
			"video/vnd.directv.mpeg": { source: "iana" },
			"video/vnd.directv.mpeg-tts": { source: "iana" },
			"video/vnd.dlna.mpeg-tts": { source: "iana" },
			"video/vnd.dvb.file": { source: "iana", extensions: ["dvb"] },
			"video/vnd.fvt": { source: "iana", extensions: ["fvt"] },
			"video/vnd.hns.video": { source: "iana" },
			"video/vnd.iptvforum.1dparityfec-1010": { source: "iana" },
			"video/vnd.iptvforum.1dparityfec-2005": { source: "iana" },
			"video/vnd.iptvforum.2dparityfec-1010": { source: "iana" },
			"video/vnd.iptvforum.2dparityfec-2005": { source: "iana" },
			"video/vnd.iptvforum.ttsavc": { source: "iana" },
			"video/vnd.iptvforum.ttsmpeg2": { source: "iana" },
			"video/vnd.motorola.video": { source: "iana" },
			"video/vnd.motorola.videop": { source: "iana" },
			"video/vnd.mpegurl": { source: "iana", extensions: ["mxu", "m4u"] },
			"video/vnd.ms-playready.media.pyv": {
				source: "iana",
				extensions: ["pyv"],
			},
			"video/vnd.nokia.interleaved-multimedia": { source: "iana" },
			"video/vnd.nokia.mp4vr": { source: "iana" },
			"video/vnd.nokia.videovoip": { source: "iana" },
			"video/vnd.objectvideo": { source: "iana" },
			"video/vnd.radgamettools.bink": { source: "iana" },
			"video/vnd.radgamettools.smacker": { source: "iana" },
			"video/vnd.sealed.mpeg1": { source: "iana" },
			"video/vnd.sealed.mpeg4": { source: "iana" },
			"video/vnd.sealed.swf": { source: "iana" },
			"video/vnd.sealedmedia.softseal.mov": { source: "iana" },
			"video/vnd.uvvu.mp4": {
				source: "iana",
				extensions: ["uvu", "uvvu"],
			},
			"video/vnd.vivo": { source: "iana", extensions: ["viv"] },
			"video/vnd.youtube.yt": { source: "iana" },
			"video/vp8": { source: "iana" },
			"video/vp9": { source: "iana" },
			"video/webm": {
				source: "apache",
				compressible: !1,
				extensions: ["webm"],
			},
			"video/x-f4v": { source: "apache", extensions: ["f4v"] },
			"video/x-fli": { source: "apache", extensions: ["fli"] },
			"video/x-flv": {
				source: "apache",
				compressible: !1,
				extensions: ["flv"],
			},
			"video/x-m4v": { source: "apache", extensions: ["m4v"] },
			"video/x-matroska": {
				source: "apache",
				compressible: !1,
				extensions: ["mkv", "mk3d", "mks"],
			},
			"video/x-mng": { source: "apache", extensions: ["mng"] },
			"video/x-ms-asf": { source: "apache", extensions: ["asf", "asx"] },
			"video/x-ms-vob": { source: "apache", extensions: ["vob"] },
			"video/x-ms-wm": { source: "apache", extensions: ["wm"] },
			"video/x-ms-wmv": {
				source: "apache",
				compressible: !1,
				extensions: ["wmv"],
			},
			"video/x-ms-wmx": { source: "apache", extensions: ["wmx"] },
			"video/x-ms-wvx": { source: "apache", extensions: ["wvx"] },
			"video/x-msvideo": { source: "apache", extensions: ["avi"] },
			"video/x-sgi-movie": { source: "apache", extensions: ["movie"] },
			"video/x-smv": { source: "apache", extensions: ["smv"] },
			"x-conference/x-cooltalk": {
				source: "apache",
				extensions: ["ice"],
			},
			"x-shader/x-fragment": { compressible: !0 },
			"x-shader/x-vertex": { compressible: !0 },
		};
	});
	var Bf = Be((o7, Of) => {
		Of.exports = Rf();
	});
	var Go = ht(Xn(), 1);
	var _m = new Set([
			65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143,
			327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287,
			589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431,
			851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575,
			1114110, 1114111,
		]),
		ye = "\uFFFD",
		h;
	(function (e) {
		(e[(e.EOF = -1)] = "EOF"),
			(e[(e.NULL = 0)] = "NULL"),
			(e[(e.TABULATION = 9)] = "TABULATION"),
			(e[(e.CARRIAGE_RETURN = 13)] = "CARRIAGE_RETURN"),
			(e[(e.LINE_FEED = 10)] = "LINE_FEED"),
			(e[(e.FORM_FEED = 12)] = "FORM_FEED"),
			(e[(e.SPACE = 32)] = "SPACE"),
			(e[(e.EXCLAMATION_MARK = 33)] = "EXCLAMATION_MARK"),
			(e[(e.QUOTATION_MARK = 34)] = "QUOTATION_MARK"),
			(e[(e.NUMBER_SIGN = 35)] = "NUMBER_SIGN"),
			(e[(e.AMPERSAND = 38)] = "AMPERSAND"),
			(e[(e.APOSTROPHE = 39)] = "APOSTROPHE"),
			(e[(e.HYPHEN_MINUS = 45)] = "HYPHEN_MINUS"),
			(e[(e.SOLIDUS = 47)] = "SOLIDUS"),
			(e[(e.DIGIT_0 = 48)] = "DIGIT_0"),
			(e[(e.DIGIT_9 = 57)] = "DIGIT_9"),
			(e[(e.SEMICOLON = 59)] = "SEMICOLON"),
			(e[(e.LESS_THAN_SIGN = 60)] = "LESS_THAN_SIGN"),
			(e[(e.EQUALS_SIGN = 61)] = "EQUALS_SIGN"),
			(e[(e.GREATER_THAN_SIGN = 62)] = "GREATER_THAN_SIGN"),
			(e[(e.QUESTION_MARK = 63)] = "QUESTION_MARK"),
			(e[(e.LATIN_CAPITAL_A = 65)] = "LATIN_CAPITAL_A"),
			(e[(e.LATIN_CAPITAL_F = 70)] = "LATIN_CAPITAL_F"),
			(e[(e.LATIN_CAPITAL_X = 88)] = "LATIN_CAPITAL_X"),
			(e[(e.LATIN_CAPITAL_Z = 90)] = "LATIN_CAPITAL_Z"),
			(e[(e.RIGHT_SQUARE_BRACKET = 93)] = "RIGHT_SQUARE_BRACKET"),
			(e[(e.GRAVE_ACCENT = 96)] = "GRAVE_ACCENT"),
			(e[(e.LATIN_SMALL_A = 97)] = "LATIN_SMALL_A"),
			(e[(e.LATIN_SMALL_F = 102)] = "LATIN_SMALL_F"),
			(e[(e.LATIN_SMALL_X = 120)] = "LATIN_SMALL_X"),
			(e[(e.LATIN_SMALL_Z = 122)] = "LATIN_SMALL_Z"),
			(e[(e.REPLACEMENT_CHARACTER = 65533)] = "REPLACEMENT_CHARACTER");
	})((h = h || (h = {})));
	var ot = {
		DASH_DASH: "--",
		CDATA_START: "[CDATA[",
		DOCTYPE: "doctype",
		SCRIPT: "script",
		PUBLIC: "public",
		SYSTEM: "system",
	};
	function zi(e) {
		return e >= 55296 && e <= 57343;
	}
	function Hc(e) {
		return e >= 56320 && e <= 57343;
	}
	function jc(e, t) {
		return (e - 55296) * 1024 + 9216 + t;
	}
	function Yi(e) {
		return (
			(e !== 32 &&
				e !== 10 &&
				e !== 13 &&
				e !== 9 &&
				e !== 12 &&
				e >= 1 &&
				e <= 31) ||
			(e >= 127 && e <= 159)
		);
	}
	function Vi(e) {
		return (e >= 64976 && e <= 65007) || _m.has(e);
	}
	var _;
	(function (e) {
		(e.controlCharacterInInputStream = "control-character-in-input-stream"),
			(e.noncharacterInInputStream = "noncharacter-in-input-stream"),
			(e.surrogateInInputStream = "surrogate-in-input-stream"),
			(e.nonVoidHtmlElementStartTagWithTrailingSolidus =
				"non-void-html-element-start-tag-with-trailing-solidus"),
			(e.endTagWithAttributes = "end-tag-with-attributes"),
			(e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus"),
			(e.unexpectedSolidusInTag = "unexpected-solidus-in-tag"),
			(e.unexpectedNullCharacter = "unexpected-null-character"),
			(e.unexpectedQuestionMarkInsteadOfTagName =
				"unexpected-question-mark-instead-of-tag-name"),
			(e.invalidFirstCharacterOfTagName =
				"invalid-first-character-of-tag-name"),
			(e.unexpectedEqualsSignBeforeAttributeName =
				"unexpected-equals-sign-before-attribute-name"),
			(e.missingEndTagName = "missing-end-tag-name"),
			(e.unexpectedCharacterInAttributeName =
				"unexpected-character-in-attribute-name"),
			(e.unknownNamedCharacterReference =
				"unknown-named-character-reference"),
			(e.missingSemicolonAfterCharacterReference =
				"missing-semicolon-after-character-reference"),
			(e.unexpectedCharacterAfterDoctypeSystemIdentifier =
				"unexpected-character-after-doctype-system-identifier"),
			(e.unexpectedCharacterInUnquotedAttributeValue =
				"unexpected-character-in-unquoted-attribute-value"),
			(e.eofBeforeTagName = "eof-before-tag-name"),
			(e.eofInTag = "eof-in-tag"),
			(e.missingAttributeValue = "missing-attribute-value"),
			(e.missingWhitespaceBetweenAttributes =
				"missing-whitespace-between-attributes"),
			(e.missingWhitespaceAfterDoctypePublicKeyword =
				"missing-whitespace-after-doctype-public-keyword"),
			(e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers =
				"missing-whitespace-between-doctype-public-and-system-identifiers"),
			(e.missingWhitespaceAfterDoctypeSystemKeyword =
				"missing-whitespace-after-doctype-system-keyword"),
			(e.missingQuoteBeforeDoctypePublicIdentifier =
				"missing-quote-before-doctype-public-identifier"),
			(e.missingQuoteBeforeDoctypeSystemIdentifier =
				"missing-quote-before-doctype-system-identifier"),
			(e.missingDoctypePublicIdentifier =
				"missing-doctype-public-identifier"),
			(e.missingDoctypeSystemIdentifier =
				"missing-doctype-system-identifier"),
			(e.abruptDoctypePublicIdentifier =
				"abrupt-doctype-public-identifier"),
			(e.abruptDoctypeSystemIdentifier =
				"abrupt-doctype-system-identifier"),
			(e.cdataInHtmlContent = "cdata-in-html-content"),
			(e.incorrectlyOpenedComment = "incorrectly-opened-comment"),
			(e.eofInScriptHtmlCommentLikeText =
				"eof-in-script-html-comment-like-text"),
			(e.eofInDoctype = "eof-in-doctype"),
			(e.nestedComment = "nested-comment"),
			(e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment"),
			(e.eofInComment = "eof-in-comment"),
			(e.incorrectlyClosedComment = "incorrectly-closed-comment"),
			(e.eofInCdata = "eof-in-cdata"),
			(e.absenceOfDigitsInNumericCharacterReference =
				"absence-of-digits-in-numeric-character-reference"),
			(e.nullCharacterReference = "null-character-reference"),
			(e.surrogateCharacterReference = "surrogate-character-reference"),
			(e.characterReferenceOutsideUnicodeRange =
				"character-reference-outside-unicode-range"),
			(e.controlCharacterReference = "control-character-reference"),
			(e.noncharacterCharacterReference =
				"noncharacter-character-reference"),
			(e.missingWhitespaceBeforeDoctypeName =
				"missing-whitespace-before-doctype-name"),
			(e.missingDoctypeName = "missing-doctype-name"),
			(e.invalidCharacterSequenceAfterDoctypeName =
				"invalid-character-sequence-after-doctype-name"),
			(e.duplicateAttribute = "duplicate-attribute"),
			(e.nonConformingDoctype = "non-conforming-doctype"),
			(e.missingDoctype = "missing-doctype"),
			(e.misplacedDoctype = "misplaced-doctype"),
			(e.endTagWithoutMatchingOpenElement =
				"end-tag-without-matching-open-element"),
			(e.closingOfElementWithOpenChildElements =
				"closing-of-element-with-open-child-elements"),
			(e.disallowedContentInNoscriptInHead =
				"disallowed-content-in-noscript-in-head"),
			(e.openElementsLeftAfterEof = "open-elements-left-after-eof"),
			(e.abandonedHeadElementChild = "abandoned-head-element-child"),
			(e.misplacedStartTagForHeadElement =
				"misplaced-start-tag-for-head-element"),
			(e.nestedNoscriptInHead = "nested-noscript-in-head"),
			(e.eofInElementThatCanContainOnlyText =
				"eof-in-element-that-can-contain-only-text");
	})((_ = _ || (_ = {})));
	var Dm = 65536,
		Wi = class {
			constructor(t) {
				(this.handler = t),
					(this.html = ""),
					(this.pos = -1),
					(this.lastGapPos = -2),
					(this.gapStack = []),
					(this.skipNextNewLine = !1),
					(this.lastChunkWritten = !1),
					(this.endOfChunkHit = !1),
					(this.bufferWaterline = Dm),
					(this.isEol = !1),
					(this.lineStartPos = 0),
					(this.droppedBufferSize = 0),
					(this.line = 1),
					(this.lastErrOffset = -1);
			}
			get col() {
				return (
					this.pos -
					this.lineStartPos +
					+(this.lastGapPos !== this.pos)
				);
			}
			get offset() {
				return this.droppedBufferSize + this.pos;
			}
			getError(t) {
				let { line: n, col: i, offset: a } = this;
				return {
					code: t,
					startLine: n,
					endLine: n,
					startCol: i,
					endCol: i,
					startOffset: a,
					endOffset: a,
				};
			}
			_err(t) {
				this.handler.onParseError &&
					this.lastErrOffset !== this.offset &&
					((this.lastErrOffset = this.offset),
					this.handler.onParseError(this.getError(t)));
			}
			_addGap() {
				this.gapStack.push(this.lastGapPos),
					(this.lastGapPos = this.pos);
			}
			_processSurrogate(t) {
				if (this.pos !== this.html.length - 1) {
					let n = this.html.charCodeAt(this.pos + 1);
					if (Hc(n)) return this.pos++, this._addGap(), jc(t, n);
				} else if (!this.lastChunkWritten)
					return (this.endOfChunkHit = !0), h.EOF;
				return this._err(_.surrogateInInputStream), t;
			}
			willDropParsedChunk() {
				return this.pos > this.bufferWaterline;
			}
			dropParsedChunk() {
				this.willDropParsedChunk() &&
					((this.html = this.html.substring(this.pos)),
					(this.lineStartPos -= this.pos),
					(this.droppedBufferSize += this.pos),
					(this.pos = 0),
					(this.lastGapPos = -2),
					(this.gapStack.length = 0));
			}
			write(t, n) {
				this.html.length > 0 ? (this.html += t) : (this.html = t),
					(this.endOfChunkHit = !1),
					(this.lastChunkWritten = n);
			}
			insertHtmlAtCurrentPos(t) {
				(this.html =
					this.html.substring(0, this.pos + 1) +
					t +
					this.html.substring(this.pos + 1)),
					(this.endOfChunkHit = !1);
			}
			startsWith(t, n) {
				if (this.pos + t.length > this.html.length)
					return (this.endOfChunkHit = !this.lastChunkWritten), !1;
				if (n) return this.html.startsWith(t, this.pos);
				for (let i = 0; i < t.length; i++)
					if (
						(this.html.charCodeAt(this.pos + i) | 32) !==
						t.charCodeAt(i)
					)
						return !1;
				return !0;
			}
			peek(t) {
				let n = this.pos + t;
				if (n >= this.html.length)
					return (this.endOfChunkHit = !this.lastChunkWritten), h.EOF;
				let i = this.html.charCodeAt(n);
				return i === h.CARRIAGE_RETURN ? h.LINE_FEED : i;
			}
			advance() {
				if (
					(this.pos++,
					this.isEol &&
						((this.isEol = !1),
						this.line++,
						(this.lineStartPos = this.pos)),
					this.pos >= this.html.length)
				)
					return (this.endOfChunkHit = !this.lastChunkWritten), h.EOF;
				let t = this.html.charCodeAt(this.pos);
				return t === h.CARRIAGE_RETURN
					? ((this.isEol = !0),
						(this.skipNextNewLine = !0),
						h.LINE_FEED)
					: t === h.LINE_FEED &&
						  ((this.isEol = !0), this.skipNextNewLine)
						? (this.line--,
							(this.skipNextNewLine = !1),
							this._addGap(),
							this.advance())
						: ((this.skipNextNewLine = !1),
							zi(t) && (t = this._processSurrogate(t)),
							this.handler.onParseError === null ||
								(t > 31 && t < 127) ||
								t === h.LINE_FEED ||
								t === h.CARRIAGE_RETURN ||
								(t > 159 && t < 64976) ||
								this._checkForProblematicCharacters(t),
							t);
			}
			_checkForProblematicCharacters(t) {
				Yi(t)
					? this._err(_.controlCharacterInInputStream)
					: Vi(t) && this._err(_.noncharacterInInputStream);
			}
			retreat(t) {
				for (this.pos -= t; this.pos < this.lastGapPos; )
					(this.lastGapPos = this.gapStack.pop()), this.pos--;
				this.isEol = !1;
			}
		};
	var ce;
	(function (e) {
		(e[(e.CHARACTER = 0)] = "CHARACTER"),
			(e[(e.NULL_CHARACTER = 1)] = "NULL_CHARACTER"),
			(e[(e.WHITESPACE_CHARACTER = 2)] = "WHITESPACE_CHARACTER"),
			(e[(e.START_TAG = 3)] = "START_TAG"),
			(e[(e.END_TAG = 4)] = "END_TAG"),
			(e[(e.COMMENT = 5)] = "COMMENT"),
			(e[(e.DOCTYPE = 6)] = "DOCTYPE"),
			(e[(e.EOF = 7)] = "EOF"),
			(e[(e.HIBERNATION = 8)] = "HIBERNATION");
	})((ce = ce || (ce = {})));
	function Gi(e, t) {
		for (let n = e.attrs.length - 1; n >= 0; n--)
			if (e.attrs[n].name === t) return e.attrs[n].value;
		return null;
	}
	var It = new Uint16Array(
		'\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'
			.split("")
			.map((e) => e.charCodeAt(0)),
	);
	var qc = new Uint16Array(
		"\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022"
			.split("")
			.map((e) => e.charCodeAt(0)),
	);
	var So,
		Im = new Map([
			[0, 65533],
			[128, 8364],
			[130, 8218],
			[131, 402],
			[132, 8222],
			[133, 8230],
			[134, 8224],
			[135, 8225],
			[136, 710],
			[137, 8240],
			[138, 352],
			[139, 8249],
			[140, 338],
			[142, 381],
			[145, 8216],
			[146, 8217],
			[147, 8220],
			[148, 8221],
			[149, 8226],
			[150, 8211],
			[151, 8212],
			[152, 732],
			[153, 8482],
			[154, 353],
			[155, 8250],
			[156, 339],
			[158, 382],
			[159, 376],
		]),
		Do =
			(So = String.fromCodePoint) !== null && So !== void 0
				? So
				: function (e) {
						let t = "";
						return (
							e > 65535 &&
								((e -= 65536),
								(t += String.fromCharCode(
									((e >>> 10) & 1023) | 55296,
								)),
								(e = 56320 | (e & 1023))),
							(t += String.fromCharCode(e)),
							t
						);
					};
	function wo(e) {
		var t;
		return (e >= 55296 && e <= 57343) || e > 1114111
			? 65533
			: (t = Im.get(e)) !== null && t !== void 0
				? t
				: e;
	}
	var Ye;
	(function (e) {
		(e[(e.NUM = 35)] = "NUM"),
			(e[(e.SEMI = 59)] = "SEMI"),
			(e[(e.EQUALS = 61)] = "EQUALS"),
			(e[(e.ZERO = 48)] = "ZERO"),
			(e[(e.NINE = 57)] = "NINE"),
			(e[(e.LOWER_A = 97)] = "LOWER_A"),
			(e[(e.LOWER_F = 102)] = "LOWER_F"),
			(e[(e.LOWER_X = 120)] = "LOWER_X"),
			(e[(e.LOWER_Z = 122)] = "LOWER_Z"),
			(e[(e.UPPER_A = 65)] = "UPPER_A"),
			(e[(e.UPPER_F = 70)] = "UPPER_F"),
			(e[(e.UPPER_Z = 90)] = "UPPER_Z");
	})(Ye || (Ye = {}));
	var Nm = 32,
		Ct;
	(function (e) {
		(e[(e.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
			(e[(e.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
			(e[(e.JUMP_TABLE = 127)] = "JUMP_TABLE");
	})(Ct || (Ct = {}));
	function Io(e) {
		return e >= Ye.ZERO && e <= Ye.NINE;
	}
	function Lm(e) {
		return (
			(e >= Ye.UPPER_A && e <= Ye.UPPER_F) ||
			(e >= Ye.LOWER_A && e <= Ye.LOWER_F)
		);
	}
	function Pm(e) {
		return (
			(e >= Ye.UPPER_A && e <= Ye.UPPER_Z) ||
			(e >= Ye.LOWER_A && e <= Ye.LOWER_Z) ||
			Io(e)
		);
	}
	function Rm(e) {
		return e === Ye.EQUALS || Pm(e);
	}
	var ze;
	(function (e) {
		(e[(e.EntityStart = 0)] = "EntityStart"),
			(e[(e.NumericStart = 1)] = "NumericStart"),
			(e[(e.NumericDecimal = 2)] = "NumericDecimal"),
			(e[(e.NumericHex = 3)] = "NumericHex"),
			(e[(e.NamedEntity = 4)] = "NamedEntity");
	})(ze || (ze = {}));
	var on;
	(function (e) {
		(e[(e.Legacy = 0)] = "Legacy"),
			(e[(e.Strict = 1)] = "Strict"),
			(e[(e.Attribute = 2)] = "Attribute");
	})(on || (on = {}));
	var No = class {
		constructor(t, n, i) {
			(this.decodeTree = t),
				(this.emitCodePoint = n),
				(this.errors = i),
				(this.state = ze.EntityStart),
				(this.consumed = 1),
				(this.result = 0),
				(this.treeIndex = 0),
				(this.excess = 1),
				(this.decodeMode = on.Strict);
		}
		startEntity(t) {
			(this.decodeMode = t),
				(this.state = ze.EntityStart),
				(this.result = 0),
				(this.treeIndex = 0),
				(this.excess = 1),
				(this.consumed = 1);
		}
		write(t, n) {
			switch (this.state) {
				case ze.EntityStart:
					return t.charCodeAt(n) === Ye.NUM
						? ((this.state = ze.NumericStart),
							(this.consumed += 1),
							this.stateNumericStart(t, n + 1))
						: ((this.state = ze.NamedEntity),
							this.stateNamedEntity(t, n));
				case ze.NumericStart:
					return this.stateNumericStart(t, n);
				case ze.NumericDecimal:
					return this.stateNumericDecimal(t, n);
				case ze.NumericHex:
					return this.stateNumericHex(t, n);
				case ze.NamedEntity:
					return this.stateNamedEntity(t, n);
			}
		}
		stateNumericStart(t, n) {
			return n >= t.length
				? -1
				: (t.charCodeAt(n) | Nm) === Ye.LOWER_X
					? ((this.state = ze.NumericHex),
						(this.consumed += 1),
						this.stateNumericHex(t, n + 1))
					: ((this.state = ze.NumericDecimal),
						this.stateNumericDecimal(t, n));
		}
		addToNumericResult(t, n, i, a) {
			if (n !== i) {
				let o = i - n;
				(this.result =
					this.result * Math.pow(a, o) + parseInt(t.substr(n, o), a)),
					(this.consumed += o);
			}
		}
		stateNumericHex(t, n) {
			let i = n;
			for (; n < t.length; ) {
				let a = t.charCodeAt(n);
				if (Io(a) || Lm(a)) n += 1;
				else
					return (
						this.addToNumericResult(t, i, n, 16),
						this.emitNumericEntity(a, 3)
					);
			}
			return this.addToNumericResult(t, i, n, 16), -1;
		}
		stateNumericDecimal(t, n) {
			let i = n;
			for (; n < t.length; ) {
				let a = t.charCodeAt(n);
				if (Io(a)) n += 1;
				else
					return (
						this.addToNumericResult(t, i, n, 10),
						this.emitNumericEntity(a, 2)
					);
			}
			return this.addToNumericResult(t, i, n, 10), -1;
		}
		emitNumericEntity(t, n) {
			var i;
			if (this.consumed <= n)
				return (
					(i = this.errors) === null ||
						i === void 0 ||
						i.absenceOfDigitsInNumericCharacterReference(
							this.consumed,
						),
					0
				);
			if (t === Ye.SEMI) this.consumed += 1;
			else if (this.decodeMode === on.Strict) return 0;
			return (
				this.emitCodePoint(wo(this.result), this.consumed),
				this.errors &&
					(t !== Ye.SEMI &&
						this.errors.missingSemicolonAfterCharacterReference(),
					this.errors.validateNumericCharacterReference(this.result)),
				this.consumed
			);
		}
		stateNamedEntity(t, n) {
			let { decodeTree: i } = this,
				a = i[this.treeIndex],
				o = (a & Ct.VALUE_LENGTH) >> 14;
			for (; n < t.length; n++, this.excess++) {
				let s = t.charCodeAt(n);
				if (
					((this.treeIndex = Lo(
						i,
						a,
						this.treeIndex + Math.max(1, o),
						s,
					)),
					this.treeIndex < 0)
				)
					return this.result === 0 ||
						(this.decodeMode === on.Attribute && (o === 0 || Rm(s)))
						? 0
						: this.emitNotTerminatedNamedEntity();
				if (
					((a = i[this.treeIndex]),
					(o = (a & Ct.VALUE_LENGTH) >> 14),
					o !== 0)
				) {
					if (s === Ye.SEMI)
						return this.emitNamedEntityData(
							this.treeIndex,
							o,
							this.consumed + this.excess,
						);
					this.decodeMode !== on.Strict &&
						((this.result = this.treeIndex),
						(this.consumed += this.excess),
						(this.excess = 0));
				}
			}
			return -1;
		}
		emitNotTerminatedNamedEntity() {
			var t;
			let { result: n, decodeTree: i } = this,
				a = (i[n] & Ct.VALUE_LENGTH) >> 14;
			return (
				this.emitNamedEntityData(n, a, this.consumed),
				(t = this.errors) === null ||
					t === void 0 ||
					t.missingSemicolonAfterCharacterReference(),
				this.consumed
			);
		}
		emitNamedEntityData(t, n, i) {
			let { decodeTree: a } = this;
			return (
				this.emitCodePoint(
					n === 1 ? a[t] & ~Ct.VALUE_LENGTH : a[t + 1],
					i,
				),
				n === 3 && this.emitCodePoint(a[t + 2], i),
				i
			);
		}
		end() {
			var t;
			switch (this.state) {
				case ze.NamedEntity:
					return this.result !== 0 &&
						(this.decodeMode !== on.Attribute ||
							this.result === this.treeIndex)
						? this.emitNotTerminatedNamedEntity()
						: 0;
				case ze.NumericDecimal:
					return this.emitNumericEntity(0, 2);
				case ze.NumericHex:
					return this.emitNumericEntity(0, 3);
				case ze.NumericStart:
					return (
						(t = this.errors) === null ||
							t === void 0 ||
							t.absenceOfDigitsInNumericCharacterReference(
								this.consumed,
							),
						0
					);
				case ze.EntityStart:
					return 0;
			}
		}
	};
	function zc(e) {
		let t = "",
			n = new No(e, (i) => (t += Do(i)));
		return function (a, o) {
			let s = 0,
				r = 0;
			for (; (r = a.indexOf("&", r)) >= 0; ) {
				(t += a.slice(s, r)), n.startEntity(o);
				let l = n.write(a, r + 1);
				if (l < 0) {
					s = r + n.end();
					break;
				}
				(s = r + l), (r = l === 0 ? s + 1 : s);
			}
			let c = t + a.slice(s);
			return (t = ""), c;
		};
	}
	function Lo(e, t, n, i) {
		let a = (t & Ct.BRANCH_LENGTH) >> 7,
			o = t & Ct.JUMP_TABLE;
		if (a === 0) return o !== 0 && i === o ? n : -1;
		if (o) {
			let c = i - o;
			return c < 0 || c >= a ? -1 : e[n + c] - 1;
		}
		let s = n,
			r = s + a - 1;
		for (; s <= r; ) {
			let c = (s + r) >>> 1,
				l = e[c];
			if (l < i) s = c + 1;
			else if (l > i) r = c - 1;
			else return e[c + a];
		}
		return -1;
	}
	var Cv = zc(It),
		yv = zc(qc);
	var w;
	(function (e) {
		(e.HTML = "http://www.w3.org/1999/xhtml"),
			(e.MATHML = "http://www.w3.org/1998/Math/MathML"),
			(e.SVG = "http://www.w3.org/2000/svg"),
			(e.XLINK = "http://www.w3.org/1999/xlink"),
			(e.XML = "http://www.w3.org/XML/1998/namespace"),
			(e.XMLNS = "http://www.w3.org/2000/xmlns/");
	})((w = w || (w = {})));
	var Nt;
	(function (e) {
		(e.TYPE = "type"),
			(e.ACTION = "action"),
			(e.ENCODING = "encoding"),
			(e.PROMPT = "prompt"),
			(e.NAME = "name"),
			(e.COLOR = "color"),
			(e.FACE = "face"),
			(e.SIZE = "size");
	})((Nt = Nt || (Nt = {})));
	var Qe;
	(function (e) {
		(e.NO_QUIRKS = "no-quirks"),
			(e.QUIRKS = "quirks"),
			(e.LIMITED_QUIRKS = "limited-quirks");
	})((Qe = Qe || (Qe = {})));
	var C;
	(function (e) {
		(e.A = "a"),
			(e.ADDRESS = "address"),
			(e.ANNOTATION_XML = "annotation-xml"),
			(e.APPLET = "applet"),
			(e.AREA = "area"),
			(e.ARTICLE = "article"),
			(e.ASIDE = "aside"),
			(e.B = "b"),
			(e.BASE = "base"),
			(e.BASEFONT = "basefont"),
			(e.BGSOUND = "bgsound"),
			(e.BIG = "big"),
			(e.BLOCKQUOTE = "blockquote"),
			(e.BODY = "body"),
			(e.BR = "br"),
			(e.BUTTON = "button"),
			(e.CAPTION = "caption"),
			(e.CENTER = "center"),
			(e.CODE = "code"),
			(e.COL = "col"),
			(e.COLGROUP = "colgroup"),
			(e.DD = "dd"),
			(e.DESC = "desc"),
			(e.DETAILS = "details"),
			(e.DIALOG = "dialog"),
			(e.DIR = "dir"),
			(e.DIV = "div"),
			(e.DL = "dl"),
			(e.DT = "dt"),
			(e.EM = "em"),
			(e.EMBED = "embed"),
			(e.FIELDSET = "fieldset"),
			(e.FIGCAPTION = "figcaption"),
			(e.FIGURE = "figure"),
			(e.FONT = "font"),
			(e.FOOTER = "footer"),
			(e.FOREIGN_OBJECT = "foreignObject"),
			(e.FORM = "form"),
			(e.FRAME = "frame"),
			(e.FRAMESET = "frameset"),
			(e.H1 = "h1"),
			(e.H2 = "h2"),
			(e.H3 = "h3"),
			(e.H4 = "h4"),
			(e.H5 = "h5"),
			(e.H6 = "h6"),
			(e.HEAD = "head"),
			(e.HEADER = "header"),
			(e.HGROUP = "hgroup"),
			(e.HR = "hr"),
			(e.HTML = "html"),
			(e.I = "i"),
			(e.IMG = "img"),
			(e.IMAGE = "image"),
			(e.INPUT = "input"),
			(e.IFRAME = "iframe"),
			(e.KEYGEN = "keygen"),
			(e.LABEL = "label"),
			(e.LI = "li"),
			(e.LINK = "link"),
			(e.LISTING = "listing"),
			(e.MAIN = "main"),
			(e.MALIGNMARK = "malignmark"),
			(e.MARQUEE = "marquee"),
			(e.MATH = "math"),
			(e.MENU = "menu"),
			(e.META = "meta"),
			(e.MGLYPH = "mglyph"),
			(e.MI = "mi"),
			(e.MO = "mo"),
			(e.MN = "mn"),
			(e.MS = "ms"),
			(e.MTEXT = "mtext"),
			(e.NAV = "nav"),
			(e.NOBR = "nobr"),
			(e.NOFRAMES = "noframes"),
			(e.NOEMBED = "noembed"),
			(e.NOSCRIPT = "noscript"),
			(e.OBJECT = "object"),
			(e.OL = "ol"),
			(e.OPTGROUP = "optgroup"),
			(e.OPTION = "option"),
			(e.P = "p"),
			(e.PARAM = "param"),
			(e.PLAINTEXT = "plaintext"),
			(e.PRE = "pre"),
			(e.RB = "rb"),
			(e.RP = "rp"),
			(e.RT = "rt"),
			(e.RTC = "rtc"),
			(e.RUBY = "ruby"),
			(e.S = "s"),
			(e.SCRIPT = "script"),
			(e.SECTION = "section"),
			(e.SELECT = "select"),
			(e.SOURCE = "source"),
			(e.SMALL = "small"),
			(e.SPAN = "span"),
			(e.STRIKE = "strike"),
			(e.STRONG = "strong"),
			(e.STYLE = "style"),
			(e.SUB = "sub"),
			(e.SUMMARY = "summary"),
			(e.SUP = "sup"),
			(e.TABLE = "table"),
			(e.TBODY = "tbody"),
			(e.TEMPLATE = "template"),
			(e.TEXTAREA = "textarea"),
			(e.TFOOT = "tfoot"),
			(e.TD = "td"),
			(e.TH = "th"),
			(e.THEAD = "thead"),
			(e.TITLE = "title"),
			(e.TR = "tr"),
			(e.TRACK = "track"),
			(e.TT = "tt"),
			(e.U = "u"),
			(e.UL = "ul"),
			(e.SVG = "svg"),
			(e.VAR = "var"),
			(e.WBR = "wbr"),
			(e.XMP = "xmp");
	})((C = C || (C = {})));
	var u;
	(function (e) {
		(e[(e.UNKNOWN = 0)] = "UNKNOWN"),
			(e[(e.A = 1)] = "A"),
			(e[(e.ADDRESS = 2)] = "ADDRESS"),
			(e[(e.ANNOTATION_XML = 3)] = "ANNOTATION_XML"),
			(e[(e.APPLET = 4)] = "APPLET"),
			(e[(e.AREA = 5)] = "AREA"),
			(e[(e.ARTICLE = 6)] = "ARTICLE"),
			(e[(e.ASIDE = 7)] = "ASIDE"),
			(e[(e.B = 8)] = "B"),
			(e[(e.BASE = 9)] = "BASE"),
			(e[(e.BASEFONT = 10)] = "BASEFONT"),
			(e[(e.BGSOUND = 11)] = "BGSOUND"),
			(e[(e.BIG = 12)] = "BIG"),
			(e[(e.BLOCKQUOTE = 13)] = "BLOCKQUOTE"),
			(e[(e.BODY = 14)] = "BODY"),
			(e[(e.BR = 15)] = "BR"),
			(e[(e.BUTTON = 16)] = "BUTTON"),
			(e[(e.CAPTION = 17)] = "CAPTION"),
			(e[(e.CENTER = 18)] = "CENTER"),
			(e[(e.CODE = 19)] = "CODE"),
			(e[(e.COL = 20)] = "COL"),
			(e[(e.COLGROUP = 21)] = "COLGROUP"),
			(e[(e.DD = 22)] = "DD"),
			(e[(e.DESC = 23)] = "DESC"),
			(e[(e.DETAILS = 24)] = "DETAILS"),
			(e[(e.DIALOG = 25)] = "DIALOG"),
			(e[(e.DIR = 26)] = "DIR"),
			(e[(e.DIV = 27)] = "DIV"),
			(e[(e.DL = 28)] = "DL"),
			(e[(e.DT = 29)] = "DT"),
			(e[(e.EM = 30)] = "EM"),
			(e[(e.EMBED = 31)] = "EMBED"),
			(e[(e.FIELDSET = 32)] = "FIELDSET"),
			(e[(e.FIGCAPTION = 33)] = "FIGCAPTION"),
			(e[(e.FIGURE = 34)] = "FIGURE"),
			(e[(e.FONT = 35)] = "FONT"),
			(e[(e.FOOTER = 36)] = "FOOTER"),
			(e[(e.FOREIGN_OBJECT = 37)] = "FOREIGN_OBJECT"),
			(e[(e.FORM = 38)] = "FORM"),
			(e[(e.FRAME = 39)] = "FRAME"),
			(e[(e.FRAMESET = 40)] = "FRAMESET"),
			(e[(e.H1 = 41)] = "H1"),
			(e[(e.H2 = 42)] = "H2"),
			(e[(e.H3 = 43)] = "H3"),
			(e[(e.H4 = 44)] = "H4"),
			(e[(e.H5 = 45)] = "H5"),
			(e[(e.H6 = 46)] = "H6"),
			(e[(e.HEAD = 47)] = "HEAD"),
			(e[(e.HEADER = 48)] = "HEADER"),
			(e[(e.HGROUP = 49)] = "HGROUP"),
			(e[(e.HR = 50)] = "HR"),
			(e[(e.HTML = 51)] = "HTML"),
			(e[(e.I = 52)] = "I"),
			(e[(e.IMG = 53)] = "IMG"),
			(e[(e.IMAGE = 54)] = "IMAGE"),
			(e[(e.INPUT = 55)] = "INPUT"),
			(e[(e.IFRAME = 56)] = "IFRAME"),
			(e[(e.KEYGEN = 57)] = "KEYGEN"),
			(e[(e.LABEL = 58)] = "LABEL"),
			(e[(e.LI = 59)] = "LI"),
			(e[(e.LINK = 60)] = "LINK"),
			(e[(e.LISTING = 61)] = "LISTING"),
			(e[(e.MAIN = 62)] = "MAIN"),
			(e[(e.MALIGNMARK = 63)] = "MALIGNMARK"),
			(e[(e.MARQUEE = 64)] = "MARQUEE"),
			(e[(e.MATH = 65)] = "MATH"),
			(e[(e.MENU = 66)] = "MENU"),
			(e[(e.META = 67)] = "META"),
			(e[(e.MGLYPH = 68)] = "MGLYPH"),
			(e[(e.MI = 69)] = "MI"),
			(e[(e.MO = 70)] = "MO"),
			(e[(e.MN = 71)] = "MN"),
			(e[(e.MS = 72)] = "MS"),
			(e[(e.MTEXT = 73)] = "MTEXT"),
			(e[(e.NAV = 74)] = "NAV"),
			(e[(e.NOBR = 75)] = "NOBR"),
			(e[(e.NOFRAMES = 76)] = "NOFRAMES"),
			(e[(e.NOEMBED = 77)] = "NOEMBED"),
			(e[(e.NOSCRIPT = 78)] = "NOSCRIPT"),
			(e[(e.OBJECT = 79)] = "OBJECT"),
			(e[(e.OL = 80)] = "OL"),
			(e[(e.OPTGROUP = 81)] = "OPTGROUP"),
			(e[(e.OPTION = 82)] = "OPTION"),
			(e[(e.P = 83)] = "P"),
			(e[(e.PARAM = 84)] = "PARAM"),
			(e[(e.PLAINTEXT = 85)] = "PLAINTEXT"),
			(e[(e.PRE = 86)] = "PRE"),
			(e[(e.RB = 87)] = "RB"),
			(e[(e.RP = 88)] = "RP"),
			(e[(e.RT = 89)] = "RT"),
			(e[(e.RTC = 90)] = "RTC"),
			(e[(e.RUBY = 91)] = "RUBY"),
			(e[(e.S = 92)] = "S"),
			(e[(e.SCRIPT = 93)] = "SCRIPT"),
			(e[(e.SECTION = 94)] = "SECTION"),
			(e[(e.SELECT = 95)] = "SELECT"),
			(e[(e.SOURCE = 96)] = "SOURCE"),
			(e[(e.SMALL = 97)] = "SMALL"),
			(e[(e.SPAN = 98)] = "SPAN"),
			(e[(e.STRIKE = 99)] = "STRIKE"),
			(e[(e.STRONG = 100)] = "STRONG"),
			(e[(e.STYLE = 101)] = "STYLE"),
			(e[(e.SUB = 102)] = "SUB"),
			(e[(e.SUMMARY = 103)] = "SUMMARY"),
			(e[(e.SUP = 104)] = "SUP"),
			(e[(e.TABLE = 105)] = "TABLE"),
			(e[(e.TBODY = 106)] = "TBODY"),
			(e[(e.TEMPLATE = 107)] = "TEMPLATE"),
			(e[(e.TEXTAREA = 108)] = "TEXTAREA"),
			(e[(e.TFOOT = 109)] = "TFOOT"),
			(e[(e.TD = 110)] = "TD"),
			(e[(e.TH = 111)] = "TH"),
			(e[(e.THEAD = 112)] = "THEAD"),
			(e[(e.TITLE = 113)] = "TITLE"),
			(e[(e.TR = 114)] = "TR"),
			(e[(e.TRACK = 115)] = "TRACK"),
			(e[(e.TT = 116)] = "TT"),
			(e[(e.U = 117)] = "U"),
			(e[(e.UL = 118)] = "UL"),
			(e[(e.SVG = 119)] = "SVG"),
			(e[(e.VAR = 120)] = "VAR"),
			(e[(e.WBR = 121)] = "WBR"),
			(e[(e.XMP = 122)] = "XMP");
	})((u = u || (u = {})));
	var Om = new Map([
		[C.A, u.A],
		[C.ADDRESS, u.ADDRESS],
		[C.ANNOTATION_XML, u.ANNOTATION_XML],
		[C.APPLET, u.APPLET],
		[C.AREA, u.AREA],
		[C.ARTICLE, u.ARTICLE],
		[C.ASIDE, u.ASIDE],
		[C.B, u.B],
		[C.BASE, u.BASE],
		[C.BASEFONT, u.BASEFONT],
		[C.BGSOUND, u.BGSOUND],
		[C.BIG, u.BIG],
		[C.BLOCKQUOTE, u.BLOCKQUOTE],
		[C.BODY, u.BODY],
		[C.BR, u.BR],
		[C.BUTTON, u.BUTTON],
		[C.CAPTION, u.CAPTION],
		[C.CENTER, u.CENTER],
		[C.CODE, u.CODE],
		[C.COL, u.COL],
		[C.COLGROUP, u.COLGROUP],
		[C.DD, u.DD],
		[C.DESC, u.DESC],
		[C.DETAILS, u.DETAILS],
		[C.DIALOG, u.DIALOG],
		[C.DIR, u.DIR],
		[C.DIV, u.DIV],
		[C.DL, u.DL],
		[C.DT, u.DT],
		[C.EM, u.EM],
		[C.EMBED, u.EMBED],
		[C.FIELDSET, u.FIELDSET],
		[C.FIGCAPTION, u.FIGCAPTION],
		[C.FIGURE, u.FIGURE],
		[C.FONT, u.FONT],
		[C.FOOTER, u.FOOTER],
		[C.FOREIGN_OBJECT, u.FOREIGN_OBJECT],
		[C.FORM, u.FORM],
		[C.FRAME, u.FRAME],
		[C.FRAMESET, u.FRAMESET],
		[C.H1, u.H1],
		[C.H2, u.H2],
		[C.H3, u.H3],
		[C.H4, u.H4],
		[C.H5, u.H5],
		[C.H6, u.H6],
		[C.HEAD, u.HEAD],
		[C.HEADER, u.HEADER],
		[C.HGROUP, u.HGROUP],
		[C.HR, u.HR],
		[C.HTML, u.HTML],
		[C.I, u.I],
		[C.IMG, u.IMG],
		[C.IMAGE, u.IMAGE],
		[C.INPUT, u.INPUT],
		[C.IFRAME, u.IFRAME],
		[C.KEYGEN, u.KEYGEN],
		[C.LABEL, u.LABEL],
		[C.LI, u.LI],
		[C.LINK, u.LINK],
		[C.LISTING, u.LISTING],
		[C.MAIN, u.MAIN],
		[C.MALIGNMARK, u.MALIGNMARK],
		[C.MARQUEE, u.MARQUEE],
		[C.MATH, u.MATH],
		[C.MENU, u.MENU],
		[C.META, u.META],
		[C.MGLYPH, u.MGLYPH],
		[C.MI, u.MI],
		[C.MO, u.MO],
		[C.MN, u.MN],
		[C.MS, u.MS],
		[C.MTEXT, u.MTEXT],
		[C.NAV, u.NAV],
		[C.NOBR, u.NOBR],
		[C.NOFRAMES, u.NOFRAMES],
		[C.NOEMBED, u.NOEMBED],
		[C.NOSCRIPT, u.NOSCRIPT],
		[C.OBJECT, u.OBJECT],
		[C.OL, u.OL],
		[C.OPTGROUP, u.OPTGROUP],
		[C.OPTION, u.OPTION],
		[C.P, u.P],
		[C.PARAM, u.PARAM],
		[C.PLAINTEXT, u.PLAINTEXT],
		[C.PRE, u.PRE],
		[C.RB, u.RB],
		[C.RP, u.RP],
		[C.RT, u.RT],
		[C.RTC, u.RTC],
		[C.RUBY, u.RUBY],
		[C.S, u.S],
		[C.SCRIPT, u.SCRIPT],
		[C.SECTION, u.SECTION],
		[C.SELECT, u.SELECT],
		[C.SOURCE, u.SOURCE],
		[C.SMALL, u.SMALL],
		[C.SPAN, u.SPAN],
		[C.STRIKE, u.STRIKE],
		[C.STRONG, u.STRONG],
		[C.STYLE, u.STYLE],
		[C.SUB, u.SUB],
		[C.SUMMARY, u.SUMMARY],
		[C.SUP, u.SUP],
		[C.TABLE, u.TABLE],
		[C.TBODY, u.TBODY],
		[C.TEMPLATE, u.TEMPLATE],
		[C.TEXTAREA, u.TEXTAREA],
		[C.TFOOT, u.TFOOT],
		[C.TD, u.TD],
		[C.TH, u.TH],
		[C.THEAD, u.THEAD],
		[C.TITLE, u.TITLE],
		[C.TR, u.TR],
		[C.TRACK, u.TRACK],
		[C.TT, u.TT],
		[C.U, u.U],
		[C.UL, u.UL],
		[C.SVG, u.SVG],
		[C.VAR, u.VAR],
		[C.WBR, u.WBR],
		[C.XMP, u.XMP],
	]);
	function sn(e) {
		var t;
		return (t = Om.get(e)) !== null && t !== void 0 ? t : u.UNKNOWN;
	}
	var O = u,
		Yc = {
			[w.HTML]: new Set([
				O.ADDRESS,
				O.APPLET,
				O.AREA,
				O.ARTICLE,
				O.ASIDE,
				O.BASE,
				O.BASEFONT,
				O.BGSOUND,
				O.BLOCKQUOTE,
				O.BODY,
				O.BR,
				O.BUTTON,
				O.CAPTION,
				O.CENTER,
				O.COL,
				O.COLGROUP,
				O.DD,
				O.DETAILS,
				O.DIR,
				O.DIV,
				O.DL,
				O.DT,
				O.EMBED,
				O.FIELDSET,
				O.FIGCAPTION,
				O.FIGURE,
				O.FOOTER,
				O.FORM,
				O.FRAME,
				O.FRAMESET,
				O.H1,
				O.H2,
				O.H3,
				O.H4,
				O.H5,
				O.H6,
				O.HEAD,
				O.HEADER,
				O.HGROUP,
				O.HR,
				O.HTML,
				O.IFRAME,
				O.IMG,
				O.INPUT,
				O.LI,
				O.LINK,
				O.LISTING,
				O.MAIN,
				O.MARQUEE,
				O.MENU,
				O.META,
				O.NAV,
				O.NOEMBED,
				O.NOFRAMES,
				O.NOSCRIPT,
				O.OBJECT,
				O.OL,
				O.P,
				O.PARAM,
				O.PLAINTEXT,
				O.PRE,
				O.SCRIPT,
				O.SECTION,
				O.SELECT,
				O.SOURCE,
				O.STYLE,
				O.SUMMARY,
				O.TABLE,
				O.TBODY,
				O.TD,
				O.TEMPLATE,
				O.TEXTAREA,
				O.TFOOT,
				O.TH,
				O.THEAD,
				O.TITLE,
				O.TR,
				O.TRACK,
				O.UL,
				O.WBR,
				O.XMP,
			]),
			[w.MATHML]: new Set([
				O.MI,
				O.MO,
				O.MN,
				O.MS,
				O.MTEXT,
				O.ANNOTATION_XML,
			]),
			[w.SVG]: new Set([O.TITLE, O.FOREIGN_OBJECT, O.DESC]),
			[w.XLINK]: new Set(),
			[w.XML]: new Set(),
			[w.XMLNS]: new Set(),
		};
	function Xi(e) {
		return (
			e === O.H1 ||
			e === O.H2 ||
			e === O.H3 ||
			e === O.H4 ||
			e === O.H5 ||
			e === O.H6
		);
	}
	var Bm = new Set([
		C.STYLE,
		C.SCRIPT,
		C.XMP,
		C.IFRAME,
		C.NOEMBED,
		C.NOFRAMES,
		C.PLAINTEXT,
	]);
	function Vc(e, t) {
		return Bm.has(e) || (t && e === C.NOSCRIPT);
	}
	var Mm = new Map([
			[128, 8364],
			[130, 8218],
			[131, 402],
			[132, 8222],
			[133, 8230],
			[134, 8224],
			[135, 8225],
			[136, 710],
			[137, 8240],
			[138, 352],
			[139, 8249],
			[140, 338],
			[142, 381],
			[145, 8216],
			[146, 8217],
			[147, 8220],
			[148, 8221],
			[149, 8226],
			[150, 8211],
			[151, 8212],
			[152, 732],
			[153, 8482],
			[154, 353],
			[155, 8250],
			[156, 339],
			[158, 382],
			[159, 376],
		]),
		b;
	(function (e) {
		(e[(e.DATA = 0)] = "DATA"),
			(e[(e.RCDATA = 1)] = "RCDATA"),
			(e[(e.RAWTEXT = 2)] = "RAWTEXT"),
			(e[(e.SCRIPT_DATA = 3)] = "SCRIPT_DATA"),
			(e[(e.PLAINTEXT = 4)] = "PLAINTEXT"),
			(e[(e.TAG_OPEN = 5)] = "TAG_OPEN"),
			(e[(e.END_TAG_OPEN = 6)] = "END_TAG_OPEN"),
			(e[(e.TAG_NAME = 7)] = "TAG_NAME"),
			(e[(e.RCDATA_LESS_THAN_SIGN = 8)] = "RCDATA_LESS_THAN_SIGN"),
			(e[(e.RCDATA_END_TAG_OPEN = 9)] = "RCDATA_END_TAG_OPEN"),
			(e[(e.RCDATA_END_TAG_NAME = 10)] = "RCDATA_END_TAG_NAME"),
			(e[(e.RAWTEXT_LESS_THAN_SIGN = 11)] = "RAWTEXT_LESS_THAN_SIGN"),
			(e[(e.RAWTEXT_END_TAG_OPEN = 12)] = "RAWTEXT_END_TAG_OPEN"),
			(e[(e.RAWTEXT_END_TAG_NAME = 13)] = "RAWTEXT_END_TAG_NAME"),
			(e[(e.SCRIPT_DATA_LESS_THAN_SIGN = 14)] =
				"SCRIPT_DATA_LESS_THAN_SIGN"),
			(e[(e.SCRIPT_DATA_END_TAG_OPEN = 15)] = "SCRIPT_DATA_END_TAG_OPEN"),
			(e[(e.SCRIPT_DATA_END_TAG_NAME = 16)] = "SCRIPT_DATA_END_TAG_NAME"),
			(e[(e.SCRIPT_DATA_ESCAPE_START = 17)] = "SCRIPT_DATA_ESCAPE_START"),
			(e[(e.SCRIPT_DATA_ESCAPE_START_DASH = 18)] =
				"SCRIPT_DATA_ESCAPE_START_DASH"),
			(e[(e.SCRIPT_DATA_ESCAPED = 19)] = "SCRIPT_DATA_ESCAPED"),
			(e[(e.SCRIPT_DATA_ESCAPED_DASH = 20)] = "SCRIPT_DATA_ESCAPED_DASH"),
			(e[(e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21)] =
				"SCRIPT_DATA_ESCAPED_DASH_DASH"),
			(e[(e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22)] =
				"SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"),
			(e[(e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23)] =
				"SCRIPT_DATA_ESCAPED_END_TAG_OPEN"),
			(e[(e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24)] =
				"SCRIPT_DATA_ESCAPED_END_TAG_NAME"),
			(e[(e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25)] =
				"SCRIPT_DATA_DOUBLE_ESCAPE_START"),
			(e[(e.SCRIPT_DATA_DOUBLE_ESCAPED = 26)] =
				"SCRIPT_DATA_DOUBLE_ESCAPED"),
			(e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27)] =
				"SCRIPT_DATA_DOUBLE_ESCAPED_DASH"),
			(e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28)] =
				"SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"),
			(e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29)] =
				"SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"),
			(e[(e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30)] =
				"SCRIPT_DATA_DOUBLE_ESCAPE_END"),
			(e[(e.BEFORE_ATTRIBUTE_NAME = 31)] = "BEFORE_ATTRIBUTE_NAME"),
			(e[(e.ATTRIBUTE_NAME = 32)] = "ATTRIBUTE_NAME"),
			(e[(e.AFTER_ATTRIBUTE_NAME = 33)] = "AFTER_ATTRIBUTE_NAME"),
			(e[(e.BEFORE_ATTRIBUTE_VALUE = 34)] = "BEFORE_ATTRIBUTE_VALUE"),
			(e[(e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35)] =
				"ATTRIBUTE_VALUE_DOUBLE_QUOTED"),
			(e[(e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36)] =
				"ATTRIBUTE_VALUE_SINGLE_QUOTED"),
			(e[(e.ATTRIBUTE_VALUE_UNQUOTED = 37)] = "ATTRIBUTE_VALUE_UNQUOTED"),
			(e[(e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38)] =
				"AFTER_ATTRIBUTE_VALUE_QUOTED"),
			(e[(e.SELF_CLOSING_START_TAG = 39)] = "SELF_CLOSING_START_TAG"),
			(e[(e.BOGUS_COMMENT = 40)] = "BOGUS_COMMENT"),
			(e[(e.MARKUP_DECLARATION_OPEN = 41)] = "MARKUP_DECLARATION_OPEN"),
			(e[(e.COMMENT_START = 42)] = "COMMENT_START"),
			(e[(e.COMMENT_START_DASH = 43)] = "COMMENT_START_DASH"),
			(e[(e.COMMENT = 44)] = "COMMENT"),
			(e[(e.COMMENT_LESS_THAN_SIGN = 45)] = "COMMENT_LESS_THAN_SIGN"),
			(e[(e.COMMENT_LESS_THAN_SIGN_BANG = 46)] =
				"COMMENT_LESS_THAN_SIGN_BANG"),
			(e[(e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47)] =
				"COMMENT_LESS_THAN_SIGN_BANG_DASH"),
			(e[(e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48)] =
				"COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"),
			(e[(e.COMMENT_END_DASH = 49)] = "COMMENT_END_DASH"),
			(e[(e.COMMENT_END = 50)] = "COMMENT_END"),
			(e[(e.COMMENT_END_BANG = 51)] = "COMMENT_END_BANG"),
			(e[(e.DOCTYPE = 52)] = "DOCTYPE"),
			(e[(e.BEFORE_DOCTYPE_NAME = 53)] = "BEFORE_DOCTYPE_NAME"),
			(e[(e.DOCTYPE_NAME = 54)] = "DOCTYPE_NAME"),
			(e[(e.AFTER_DOCTYPE_NAME = 55)] = "AFTER_DOCTYPE_NAME"),
			(e[(e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56)] =
				"AFTER_DOCTYPE_PUBLIC_KEYWORD"),
			(e[(e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57)] =
				"BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"),
			(e[(e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58)] =
				"DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"),
			(e[(e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59)] =
				"DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"),
			(e[(e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60)] =
				"AFTER_DOCTYPE_PUBLIC_IDENTIFIER"),
			(e[(e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61)] =
				"BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"),
			(e[(e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62)] =
				"AFTER_DOCTYPE_SYSTEM_KEYWORD"),
			(e[(e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63)] =
				"BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"),
			(e[(e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64)] =
				"DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"),
			(e[(e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65)] =
				"DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"),
			(e[(e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66)] =
				"AFTER_DOCTYPE_SYSTEM_IDENTIFIER"),
			(e[(e.BOGUS_DOCTYPE = 67)] = "BOGUS_DOCTYPE"),
			(e[(e.CDATA_SECTION = 68)] = "CDATA_SECTION"),
			(e[(e.CDATA_SECTION_BRACKET = 69)] = "CDATA_SECTION_BRACKET"),
			(e[(e.CDATA_SECTION_END = 70)] = "CDATA_SECTION_END"),
			(e[(e.CHARACTER_REFERENCE = 71)] = "CHARACTER_REFERENCE"),
			(e[(e.NAMED_CHARACTER_REFERENCE = 72)] =
				"NAMED_CHARACTER_REFERENCE"),
			(e[(e.AMBIGUOUS_AMPERSAND = 73)] = "AMBIGUOUS_AMPERSAND"),
			(e[(e.NUMERIC_CHARACTER_REFERENCE = 74)] =
				"NUMERIC_CHARACTER_REFERENCE"),
			(e[(e.HEXADEMICAL_CHARACTER_REFERENCE_START = 75)] =
				"HEXADEMICAL_CHARACTER_REFERENCE_START"),
			(e[(e.HEXADEMICAL_CHARACTER_REFERENCE = 76)] =
				"HEXADEMICAL_CHARACTER_REFERENCE"),
			(e[(e.DECIMAL_CHARACTER_REFERENCE = 77)] =
				"DECIMAL_CHARACTER_REFERENCE"),
			(e[(e.NUMERIC_CHARACTER_REFERENCE_END = 78)] =
				"NUMERIC_CHARACTER_REFERENCE_END");
	})(b || (b = {}));
	var Je = {
		DATA: b.DATA,
		RCDATA: b.RCDATA,
		RAWTEXT: b.RAWTEXT,
		SCRIPT_DATA: b.SCRIPT_DATA,
		PLAINTEXT: b.PLAINTEXT,
		CDATA_SECTION: b.CDATA_SECTION,
	};
	function Qn(e) {
		return e >= h.DIGIT_0 && e <= h.DIGIT_9;
	}
	function Kn(e) {
		return e >= h.LATIN_CAPITAL_A && e <= h.LATIN_CAPITAL_Z;
	}
	function Um(e) {
		return e >= h.LATIN_SMALL_A && e <= h.LATIN_SMALL_Z;
	}
	function Xt(e) {
		return Um(e) || Kn(e);
	}
	function Po(e) {
		return Xt(e) || Qn(e);
	}
	function Gc(e) {
		return e >= h.LATIN_CAPITAL_A && e <= h.LATIN_CAPITAL_F;
	}
	function Xc(e) {
		return e >= h.LATIN_SMALL_A && e <= h.LATIN_SMALL_F;
	}
	function Hm(e) {
		return Qn(e) || Gc(e) || Xc(e);
	}
	function Ki(e) {
		return e + 32;
	}
	function Kc(e) {
		return (
			e === h.SPACE ||
			e === h.LINE_FEED ||
			e === h.TABULATION ||
			e === h.FORM_FEED
		);
	}
	function jm(e) {
		return e === h.EQUALS_SIGN || Po(e);
	}
	function Wc(e) {
		return Kc(e) || e === h.SOLIDUS || e === h.GREATER_THAN_SIGN;
	}
	var Jn = class {
		constructor(t, n) {
			(this.options = t),
				(this.handler = n),
				(this.paused = !1),
				(this.inLoop = !1),
				(this.inForeignNode = !1),
				(this.lastStartTagName = ""),
				(this.active = !1),
				(this.state = b.DATA),
				(this.returnState = b.DATA),
				(this.charRefCode = -1),
				(this.consumedAfterSnapshot = -1),
				(this.currentCharacterToken = null),
				(this.currentToken = null),
				(this.currentAttr = { name: "", value: "" }),
				(this.preprocessor = new Wi(n)),
				(this.currentLocation = this.getCurrentLocation(-1));
		}
		_err(t) {
			var n, i;
			(i = (n = this.handler).onParseError) === null ||
				i === void 0 ||
				i.call(n, this.preprocessor.getError(t));
		}
		getCurrentLocation(t) {
			return this.options.sourceCodeLocationInfo
				? {
						startLine: this.preprocessor.line,
						startCol: this.preprocessor.col - t,
						startOffset: this.preprocessor.offset - t,
						endLine: -1,
						endCol: -1,
						endOffset: -1,
					}
				: null;
		}
		_runParsingLoop() {
			if (!this.inLoop) {
				for (this.inLoop = !0; this.active && !this.paused; ) {
					this.consumedAfterSnapshot = 0;
					let t = this._consume();
					this._ensureHibernation() || this._callState(t);
				}
				this.inLoop = !1;
			}
		}
		pause() {
			this.paused = !0;
		}
		resume(t) {
			if (!this.paused) throw new Error("Parser was already resumed");
			(this.paused = !1),
				!this.inLoop && (this._runParsingLoop(), this.paused || t?.());
		}
		write(t, n, i) {
			(this.active = !0),
				this.preprocessor.write(t, n),
				this._runParsingLoop(),
				this.paused || i?.();
		}
		insertHtmlAtCurrentPos(t) {
			(this.active = !0),
				this.preprocessor.insertHtmlAtCurrentPos(t),
				this._runParsingLoop();
		}
		_ensureHibernation() {
			return this.preprocessor.endOfChunkHit
				? (this._unconsume(this.consumedAfterSnapshot),
					(this.active = !1),
					!0)
				: !1;
		}
		_consume() {
			return this.consumedAfterSnapshot++, this.preprocessor.advance();
		}
		_unconsume(t) {
			(this.consumedAfterSnapshot -= t), this.preprocessor.retreat(t);
		}
		_reconsumeInState(t, n) {
			(this.state = t), this._callState(n);
		}
		_advanceBy(t) {
			this.consumedAfterSnapshot += t;
			for (let n = 0; n < t; n++) this.preprocessor.advance();
		}
		_consumeSequenceIfMatch(t, n) {
			return this.preprocessor.startsWith(t, n)
				? (this._advanceBy(t.length - 1), !0)
				: !1;
		}
		_createStartTagToken() {
			this.currentToken = {
				type: ce.START_TAG,
				tagName: "",
				tagID: u.UNKNOWN,
				selfClosing: !1,
				ackSelfClosing: !1,
				attrs: [],
				location: this.getCurrentLocation(1),
			};
		}
		_createEndTagToken() {
			this.currentToken = {
				type: ce.END_TAG,
				tagName: "",
				tagID: u.UNKNOWN,
				selfClosing: !1,
				ackSelfClosing: !1,
				attrs: [],
				location: this.getCurrentLocation(2),
			};
		}
		_createCommentToken(t) {
			this.currentToken = {
				type: ce.COMMENT,
				data: "",
				location: this.getCurrentLocation(t),
			};
		}
		_createDoctypeToken(t) {
			this.currentToken = {
				type: ce.DOCTYPE,
				name: t,
				forceQuirks: !1,
				publicId: null,
				systemId: null,
				location: this.currentLocation,
			};
		}
		_createCharacterToken(t, n) {
			this.currentCharacterToken = {
				type: t,
				chars: n,
				location: this.currentLocation,
			};
		}
		_createAttr(t) {
			(this.currentAttr = { name: t, value: "" }),
				(this.currentLocation = this.getCurrentLocation(0));
		}
		_leaveAttrName() {
			var t, n;
			let i = this.currentToken;
			if (Gi(i, this.currentAttr.name) === null) {
				if (
					(i.attrs.push(this.currentAttr),
					i.location && this.currentLocation)
				) {
					let a =
						(t = (n = i.location).attrs) !== null && t !== void 0
							? t
							: (n.attrs = Object.create(null));
					(a[this.currentAttr.name] = this.currentLocation),
						this._leaveAttrValue();
				}
			} else this._err(_.duplicateAttribute);
		}
		_leaveAttrValue() {
			this.currentLocation &&
				((this.currentLocation.endLine = this.preprocessor.line),
				(this.currentLocation.endCol = this.preprocessor.col),
				(this.currentLocation.endOffset = this.preprocessor.offset));
		}
		prepareToken(t) {
			this._emitCurrentCharacterToken(t.location),
				(this.currentToken = null),
				t.location &&
					((t.location.endLine = this.preprocessor.line),
					(t.location.endCol = this.preprocessor.col + 1),
					(t.location.endOffset = this.preprocessor.offset + 1)),
				(this.currentLocation = this.getCurrentLocation(-1));
		}
		emitCurrentTagToken() {
			let t = this.currentToken;
			this.prepareToken(t),
				(t.tagID = sn(t.tagName)),
				t.type === ce.START_TAG
					? ((this.lastStartTagName = t.tagName),
						this.handler.onStartTag(t))
					: (t.attrs.length > 0 && this._err(_.endTagWithAttributes),
						t.selfClosing && this._err(_.endTagWithTrailingSolidus),
						this.handler.onEndTag(t)),
				this.preprocessor.dropParsedChunk();
		}
		emitCurrentComment(t) {
			this.prepareToken(t),
				this.handler.onComment(t),
				this.preprocessor.dropParsedChunk();
		}
		emitCurrentDoctype(t) {
			this.prepareToken(t),
				this.handler.onDoctype(t),
				this.preprocessor.dropParsedChunk();
		}
		_emitCurrentCharacterToken(t) {
			if (this.currentCharacterToken) {
				switch (
					(t &&
						this.currentCharacterToken.location &&
						((this.currentCharacterToken.location.endLine =
							t.startLine),
						(this.currentCharacterToken.location.endCol =
							t.startCol),
						(this.currentCharacterToken.location.endOffset =
							t.startOffset)),
					this.currentCharacterToken.type)
				) {
					case ce.CHARACTER: {
						this.handler.onCharacter(this.currentCharacterToken);
						break;
					}
					case ce.NULL_CHARACTER: {
						this.handler.onNullCharacter(
							this.currentCharacterToken,
						);
						break;
					}
					case ce.WHITESPACE_CHARACTER: {
						this.handler.onWhitespaceCharacter(
							this.currentCharacterToken,
						);
						break;
					}
				}
				this.currentCharacterToken = null;
			}
		}
		_emitEOFToken() {
			let t = this.getCurrentLocation(0);
			t &&
				((t.endLine = t.startLine),
				(t.endCol = t.startCol),
				(t.endOffset = t.startOffset)),
				this._emitCurrentCharacterToken(t),
				this.handler.onEof({ type: ce.EOF, location: t }),
				(this.active = !1);
		}
		_appendCharToCurrentCharacterToken(t, n) {
			if (this.currentCharacterToken)
				if (this.currentCharacterToken.type !== t)
					(this.currentLocation = this.getCurrentLocation(0)),
						this._emitCurrentCharacterToken(this.currentLocation),
						this.preprocessor.dropParsedChunk();
				else {
					this.currentCharacterToken.chars += n;
					return;
				}
			this._createCharacterToken(t, n);
		}
		_emitCodePoint(t) {
			let n = Kc(t)
				? ce.WHITESPACE_CHARACTER
				: t === h.NULL
					? ce.NULL_CHARACTER
					: ce.CHARACTER;
			this._appendCharToCurrentCharacterToken(n, String.fromCodePoint(t));
		}
		_emitChars(t) {
			this._appendCharToCurrentCharacterToken(ce.CHARACTER, t);
		}
		_matchNamedCharacterReference(t) {
			let n = null,
				i = 0,
				a = !1;
			for (
				let o = 0, s = It[0];
				o >= 0 && ((o = Lo(It, s, o + 1, t)), !(o < 0));
				t = this._consume()
			) {
				(i += 1), (s = It[o]);
				let r = s & Ct.VALUE_LENGTH;
				if (r) {
					let c = (r >> 14) - 1;
					if (
						(t !== h.SEMICOLON &&
						this._isCharacterReferenceInAttribute() &&
						jm(this.preprocessor.peek(1))
							? ((n = [h.AMPERSAND]), (o += c))
							: ((n =
									c === 0
										? [It[o] & ~Ct.VALUE_LENGTH]
										: c === 1
											? [It[++o]]
											: [It[++o], It[++o]]),
								(i = 0),
								(a = t !== h.SEMICOLON)),
						c === 0)
					) {
						this._consume();
						break;
					}
				}
			}
			return (
				this._unconsume(i),
				a &&
					!this.preprocessor.endOfChunkHit &&
					this._err(_.missingSemicolonAfterCharacterReference),
				this._unconsume(1),
				n
			);
		}
		_isCharacterReferenceInAttribute() {
			return (
				this.returnState === b.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
				this.returnState === b.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
				this.returnState === b.ATTRIBUTE_VALUE_UNQUOTED
			);
		}
		_flushCodePointConsumedAsCharacterReference(t) {
			this._isCharacterReferenceInAttribute()
				? (this.currentAttr.value += String.fromCodePoint(t))
				: this._emitCodePoint(t);
		}
		_callState(t) {
			switch (this.state) {
				case b.DATA: {
					this._stateData(t);
					break;
				}
				case b.RCDATA: {
					this._stateRcdata(t);
					break;
				}
				case b.RAWTEXT: {
					this._stateRawtext(t);
					break;
				}
				case b.SCRIPT_DATA: {
					this._stateScriptData(t);
					break;
				}
				case b.PLAINTEXT: {
					this._statePlaintext(t);
					break;
				}
				case b.TAG_OPEN: {
					this._stateTagOpen(t);
					break;
				}
				case b.END_TAG_OPEN: {
					this._stateEndTagOpen(t);
					break;
				}
				case b.TAG_NAME: {
					this._stateTagName(t);
					break;
				}
				case b.RCDATA_LESS_THAN_SIGN: {
					this._stateRcdataLessThanSign(t);
					break;
				}
				case b.RCDATA_END_TAG_OPEN: {
					this._stateRcdataEndTagOpen(t);
					break;
				}
				case b.RCDATA_END_TAG_NAME: {
					this._stateRcdataEndTagName(t);
					break;
				}
				case b.RAWTEXT_LESS_THAN_SIGN: {
					this._stateRawtextLessThanSign(t);
					break;
				}
				case b.RAWTEXT_END_TAG_OPEN: {
					this._stateRawtextEndTagOpen(t);
					break;
				}
				case b.RAWTEXT_END_TAG_NAME: {
					this._stateRawtextEndTagName(t);
					break;
				}
				case b.SCRIPT_DATA_LESS_THAN_SIGN: {
					this._stateScriptDataLessThanSign(t);
					break;
				}
				case b.SCRIPT_DATA_END_TAG_OPEN: {
					this._stateScriptDataEndTagOpen(t);
					break;
				}
				case b.SCRIPT_DATA_END_TAG_NAME: {
					this._stateScriptDataEndTagName(t);
					break;
				}
				case b.SCRIPT_DATA_ESCAPE_START: {
					this._stateScriptDataEscapeStart(t);
					break;
				}
				case b.SCRIPT_DATA_ESCAPE_START_DASH: {
					this._stateScriptDataEscapeStartDash(t);
					break;
				}
				case b.SCRIPT_DATA_ESCAPED: {
					this._stateScriptDataEscaped(t);
					break;
				}
				case b.SCRIPT_DATA_ESCAPED_DASH: {
					this._stateScriptDataEscapedDash(t);
					break;
				}
				case b.SCRIPT_DATA_ESCAPED_DASH_DASH: {
					this._stateScriptDataEscapedDashDash(t);
					break;
				}
				case b.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
					this._stateScriptDataEscapedLessThanSign(t);
					break;
				}
				case b.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
					this._stateScriptDataEscapedEndTagOpen(t);
					break;
				}
				case b.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
					this._stateScriptDataEscapedEndTagName(t);
					break;
				}
				case b.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
					this._stateScriptDataDoubleEscapeStart(t);
					break;
				}
				case b.SCRIPT_DATA_DOUBLE_ESCAPED: {
					this._stateScriptDataDoubleEscaped(t);
					break;
				}
				case b.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
					this._stateScriptDataDoubleEscapedDash(t);
					break;
				}
				case b.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
					this._stateScriptDataDoubleEscapedDashDash(t);
					break;
				}
				case b.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
					this._stateScriptDataDoubleEscapedLessThanSign(t);
					break;
				}
				case b.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
					this._stateScriptDataDoubleEscapeEnd(t);
					break;
				}
				case b.BEFORE_ATTRIBUTE_NAME: {
					this._stateBeforeAttributeName(t);
					break;
				}
				case b.ATTRIBUTE_NAME: {
					this._stateAttributeName(t);
					break;
				}
				case b.AFTER_ATTRIBUTE_NAME: {
					this._stateAfterAttributeName(t);
					break;
				}
				case b.BEFORE_ATTRIBUTE_VALUE: {
					this._stateBeforeAttributeValue(t);
					break;
				}
				case b.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
					this._stateAttributeValueDoubleQuoted(t);
					break;
				}
				case b.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
					this._stateAttributeValueSingleQuoted(t);
					break;
				}
				case b.ATTRIBUTE_VALUE_UNQUOTED: {
					this._stateAttributeValueUnquoted(t);
					break;
				}
				case b.AFTER_ATTRIBUTE_VALUE_QUOTED: {
					this._stateAfterAttributeValueQuoted(t);
					break;
				}
				case b.SELF_CLOSING_START_TAG: {
					this._stateSelfClosingStartTag(t);
					break;
				}
				case b.BOGUS_COMMENT: {
					this._stateBogusComment(t);
					break;
				}
				case b.MARKUP_DECLARATION_OPEN: {
					this._stateMarkupDeclarationOpen(t);
					break;
				}
				case b.COMMENT_START: {
					this._stateCommentStart(t);
					break;
				}
				case b.COMMENT_START_DASH: {
					this._stateCommentStartDash(t);
					break;
				}
				case b.COMMENT: {
					this._stateComment(t);
					break;
				}
				case b.COMMENT_LESS_THAN_SIGN: {
					this._stateCommentLessThanSign(t);
					break;
				}
				case b.COMMENT_LESS_THAN_SIGN_BANG: {
					this._stateCommentLessThanSignBang(t);
					break;
				}
				case b.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
					this._stateCommentLessThanSignBangDash(t);
					break;
				}
				case b.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
					this._stateCommentLessThanSignBangDashDash(t);
					break;
				}
				case b.COMMENT_END_DASH: {
					this._stateCommentEndDash(t);
					break;
				}
				case b.COMMENT_END: {
					this._stateCommentEnd(t);
					break;
				}
				case b.COMMENT_END_BANG: {
					this._stateCommentEndBang(t);
					break;
				}
				case b.DOCTYPE: {
					this._stateDoctype(t);
					break;
				}
				case b.BEFORE_DOCTYPE_NAME: {
					this._stateBeforeDoctypeName(t);
					break;
				}
				case b.DOCTYPE_NAME: {
					this._stateDoctypeName(t);
					break;
				}
				case b.AFTER_DOCTYPE_NAME: {
					this._stateAfterDoctypeName(t);
					break;
				}
				case b.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
					this._stateAfterDoctypePublicKeyword(t);
					break;
				}
				case b.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
					this._stateBeforeDoctypePublicIdentifier(t);
					break;
				}
				case b.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
					this._stateDoctypePublicIdentifierDoubleQuoted(t);
					break;
				}
				case b.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
					this._stateDoctypePublicIdentifierSingleQuoted(t);
					break;
				}
				case b.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
					this._stateAfterDoctypePublicIdentifier(t);
					break;
				}
				case b.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
					this._stateBetweenDoctypePublicAndSystemIdentifiers(t);
					break;
				}
				case b.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
					this._stateAfterDoctypeSystemKeyword(t);
					break;
				}
				case b.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
					this._stateBeforeDoctypeSystemIdentifier(t);
					break;
				}
				case b.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
					this._stateDoctypeSystemIdentifierDoubleQuoted(t);
					break;
				}
				case b.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
					this._stateDoctypeSystemIdentifierSingleQuoted(t);
					break;
				}
				case b.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
					this._stateAfterDoctypeSystemIdentifier(t);
					break;
				}
				case b.BOGUS_DOCTYPE: {
					this._stateBogusDoctype(t);
					break;
				}
				case b.CDATA_SECTION: {
					this._stateCdataSection(t);
					break;
				}
				case b.CDATA_SECTION_BRACKET: {
					this._stateCdataSectionBracket(t);
					break;
				}
				case b.CDATA_SECTION_END: {
					this._stateCdataSectionEnd(t);
					break;
				}
				case b.CHARACTER_REFERENCE: {
					this._stateCharacterReference(t);
					break;
				}
				case b.NAMED_CHARACTER_REFERENCE: {
					this._stateNamedCharacterReference(t);
					break;
				}
				case b.AMBIGUOUS_AMPERSAND: {
					this._stateAmbiguousAmpersand(t);
					break;
				}
				case b.NUMERIC_CHARACTER_REFERENCE: {
					this._stateNumericCharacterReference(t);
					break;
				}
				case b.HEXADEMICAL_CHARACTER_REFERENCE_START: {
					this._stateHexademicalCharacterReferenceStart(t);
					break;
				}
				case b.HEXADEMICAL_CHARACTER_REFERENCE: {
					this._stateHexademicalCharacterReference(t);
					break;
				}
				case b.DECIMAL_CHARACTER_REFERENCE: {
					this._stateDecimalCharacterReference(t);
					break;
				}
				case b.NUMERIC_CHARACTER_REFERENCE_END: {
					this._stateNumericCharacterReferenceEnd(t);
					break;
				}
				default:
					throw new Error("Unknown state");
			}
		}
		_stateData(t) {
			switch (t) {
				case h.LESS_THAN_SIGN: {
					this.state = b.TAG_OPEN;
					break;
				}
				case h.AMPERSAND: {
					(this.returnState = b.DATA),
						(this.state = b.CHARACTER_REFERENCE);
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter),
						this._emitCodePoint(t);
					break;
				}
				case h.EOF: {
					this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateRcdata(t) {
			switch (t) {
				case h.AMPERSAND: {
					(this.returnState = b.RCDATA),
						(this.state = b.CHARACTER_REFERENCE);
					break;
				}
				case h.LESS_THAN_SIGN: {
					this.state = b.RCDATA_LESS_THAN_SIGN;
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), this._emitChars(ye);
					break;
				}
				case h.EOF: {
					this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateRawtext(t) {
			switch (t) {
				case h.LESS_THAN_SIGN: {
					this.state = b.RAWTEXT_LESS_THAN_SIGN;
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), this._emitChars(ye);
					break;
				}
				case h.EOF: {
					this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateScriptData(t) {
			switch (t) {
				case h.LESS_THAN_SIGN: {
					this.state = b.SCRIPT_DATA_LESS_THAN_SIGN;
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), this._emitChars(ye);
					break;
				}
				case h.EOF: {
					this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_statePlaintext(t) {
			switch (t) {
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), this._emitChars(ye);
					break;
				}
				case h.EOF: {
					this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateTagOpen(t) {
			if (Xt(t))
				this._createStartTagToken(),
					(this.state = b.TAG_NAME),
					this._stateTagName(t);
			else
				switch (t) {
					case h.EXCLAMATION_MARK: {
						this.state = b.MARKUP_DECLARATION_OPEN;
						break;
					}
					case h.SOLIDUS: {
						this.state = b.END_TAG_OPEN;
						break;
					}
					case h.QUESTION_MARK: {
						this._err(_.unexpectedQuestionMarkInsteadOfTagName),
							this._createCommentToken(1),
							(this.state = b.BOGUS_COMMENT),
							this._stateBogusComment(t);
						break;
					}
					case h.EOF: {
						this._err(_.eofBeforeTagName),
							this._emitChars("<"),
							this._emitEOFToken();
						break;
					}
					default:
						this._err(_.invalidFirstCharacterOfTagName),
							this._emitChars("<"),
							(this.state = b.DATA),
							this._stateData(t);
				}
		}
		_stateEndTagOpen(t) {
			if (Xt(t))
				this._createEndTagToken(),
					(this.state = b.TAG_NAME),
					this._stateTagName(t);
			else
				switch (t) {
					case h.GREATER_THAN_SIGN: {
						this._err(_.missingEndTagName), (this.state = b.DATA);
						break;
					}
					case h.EOF: {
						this._err(_.eofBeforeTagName),
							this._emitChars("</"),
							this._emitEOFToken();
						break;
					}
					default:
						this._err(_.invalidFirstCharacterOfTagName),
							this._createCommentToken(2),
							(this.state = b.BOGUS_COMMENT),
							this._stateBogusComment(t);
				}
		}
		_stateTagName(t) {
			let n = this.currentToken;
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED: {
					this.state = b.BEFORE_ATTRIBUTE_NAME;
					break;
				}
				case h.SOLIDUS: {
					this.state = b.SELF_CLOSING_START_TAG;
					break;
				}
				case h.GREATER_THAN_SIGN: {
					(this.state = b.DATA), this.emitCurrentTagToken();
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), (n.tagName += ye);
					break;
				}
				case h.EOF: {
					this._err(_.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					n.tagName += String.fromCodePoint(Kn(t) ? Ki(t) : t);
			}
		}
		_stateRcdataLessThanSign(t) {
			t === h.SOLIDUS
				? (this.state = b.RCDATA_END_TAG_OPEN)
				: (this._emitChars("<"),
					(this.state = b.RCDATA),
					this._stateRcdata(t));
		}
		_stateRcdataEndTagOpen(t) {
			Xt(t)
				? ((this.state = b.RCDATA_END_TAG_NAME),
					this._stateRcdataEndTagName(t))
				: (this._emitChars("</"),
					(this.state = b.RCDATA),
					this._stateRcdata(t));
		}
		handleSpecialEndTag(t) {
			if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
				return !this._ensureHibernation();
			this._createEndTagToken();
			let n = this.currentToken;
			switch (
				((n.tagName = this.lastStartTagName),
				this.preprocessor.peek(this.lastStartTagName.length))
			) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED:
					return (
						this._advanceBy(this.lastStartTagName.length),
						(this.state = b.BEFORE_ATTRIBUTE_NAME),
						!1
					);
				case h.SOLIDUS:
					return (
						this._advanceBy(this.lastStartTagName.length),
						(this.state = b.SELF_CLOSING_START_TAG),
						!1
					);
				case h.GREATER_THAN_SIGN:
					return (
						this._advanceBy(this.lastStartTagName.length),
						this.emitCurrentTagToken(),
						(this.state = b.DATA),
						!1
					);
				default:
					return !this._ensureHibernation();
			}
		}
		_stateRcdataEndTagName(t) {
			this.handleSpecialEndTag(t) &&
				(this._emitChars("</"),
				(this.state = b.RCDATA),
				this._stateRcdata(t));
		}
		_stateRawtextLessThanSign(t) {
			t === h.SOLIDUS
				? (this.state = b.RAWTEXT_END_TAG_OPEN)
				: (this._emitChars("<"),
					(this.state = b.RAWTEXT),
					this._stateRawtext(t));
		}
		_stateRawtextEndTagOpen(t) {
			Xt(t)
				? ((this.state = b.RAWTEXT_END_TAG_NAME),
					this._stateRawtextEndTagName(t))
				: (this._emitChars("</"),
					(this.state = b.RAWTEXT),
					this._stateRawtext(t));
		}
		_stateRawtextEndTagName(t) {
			this.handleSpecialEndTag(t) &&
				(this._emitChars("</"),
				(this.state = b.RAWTEXT),
				this._stateRawtext(t));
		}
		_stateScriptDataLessThanSign(t) {
			switch (t) {
				case h.SOLIDUS: {
					this.state = b.SCRIPT_DATA_END_TAG_OPEN;
					break;
				}
				case h.EXCLAMATION_MARK: {
					(this.state = b.SCRIPT_DATA_ESCAPE_START),
						this._emitChars("<!");
					break;
				}
				default:
					this._emitChars("<"),
						(this.state = b.SCRIPT_DATA),
						this._stateScriptData(t);
			}
		}
		_stateScriptDataEndTagOpen(t) {
			Xt(t)
				? ((this.state = b.SCRIPT_DATA_END_TAG_NAME),
					this._stateScriptDataEndTagName(t))
				: (this._emitChars("</"),
					(this.state = b.SCRIPT_DATA),
					this._stateScriptData(t));
		}
		_stateScriptDataEndTagName(t) {
			this.handleSpecialEndTag(t) &&
				(this._emitChars("</"),
				(this.state = b.SCRIPT_DATA),
				this._stateScriptData(t));
		}
		_stateScriptDataEscapeStart(t) {
			t === h.HYPHEN_MINUS
				? ((this.state = b.SCRIPT_DATA_ESCAPE_START_DASH),
					this._emitChars("-"))
				: ((this.state = b.SCRIPT_DATA), this._stateScriptData(t));
		}
		_stateScriptDataEscapeStartDash(t) {
			t === h.HYPHEN_MINUS
				? ((this.state = b.SCRIPT_DATA_ESCAPED_DASH_DASH),
					this._emitChars("-"))
				: ((this.state = b.SCRIPT_DATA), this._stateScriptData(t));
		}
		_stateScriptDataEscaped(t) {
			switch (t) {
				case h.HYPHEN_MINUS: {
					(this.state = b.SCRIPT_DATA_ESCAPED_DASH),
						this._emitChars("-");
					break;
				}
				case h.LESS_THAN_SIGN: {
					this.state = b.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), this._emitChars(ye);
					break;
				}
				case h.EOF: {
					this._err(_.eofInScriptHtmlCommentLikeText),
						this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateScriptDataEscapedDash(t) {
			switch (t) {
				case h.HYPHEN_MINUS: {
					(this.state = b.SCRIPT_DATA_ESCAPED_DASH_DASH),
						this._emitChars("-");
					break;
				}
				case h.LESS_THAN_SIGN: {
					this.state = b.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter),
						(this.state = b.SCRIPT_DATA_ESCAPED),
						this._emitChars(ye);
					break;
				}
				case h.EOF: {
					this._err(_.eofInScriptHtmlCommentLikeText),
						this._emitEOFToken();
					break;
				}
				default:
					(this.state = b.SCRIPT_DATA_ESCAPED),
						this._emitCodePoint(t);
			}
		}
		_stateScriptDataEscapedDashDash(t) {
			switch (t) {
				case h.HYPHEN_MINUS: {
					this._emitChars("-");
					break;
				}
				case h.LESS_THAN_SIGN: {
					this.state = b.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
					break;
				}
				case h.GREATER_THAN_SIGN: {
					(this.state = b.SCRIPT_DATA), this._emitChars(">");
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter),
						(this.state = b.SCRIPT_DATA_ESCAPED),
						this._emitChars(ye);
					break;
				}
				case h.EOF: {
					this._err(_.eofInScriptHtmlCommentLikeText),
						this._emitEOFToken();
					break;
				}
				default:
					(this.state = b.SCRIPT_DATA_ESCAPED),
						this._emitCodePoint(t);
			}
		}
		_stateScriptDataEscapedLessThanSign(t) {
			t === h.SOLIDUS
				? (this.state = b.SCRIPT_DATA_ESCAPED_END_TAG_OPEN)
				: Xt(t)
					? (this._emitChars("<"),
						(this.state = b.SCRIPT_DATA_DOUBLE_ESCAPE_START),
						this._stateScriptDataDoubleEscapeStart(t))
					: (this._emitChars("<"),
						(this.state = b.SCRIPT_DATA_ESCAPED),
						this._stateScriptDataEscaped(t));
		}
		_stateScriptDataEscapedEndTagOpen(t) {
			Xt(t)
				? ((this.state = b.SCRIPT_DATA_ESCAPED_END_TAG_NAME),
					this._stateScriptDataEscapedEndTagName(t))
				: (this._emitChars("</"),
					(this.state = b.SCRIPT_DATA_ESCAPED),
					this._stateScriptDataEscaped(t));
		}
		_stateScriptDataEscapedEndTagName(t) {
			this.handleSpecialEndTag(t) &&
				(this._emitChars("</"),
				(this.state = b.SCRIPT_DATA_ESCAPED),
				this._stateScriptDataEscaped(t));
		}
		_stateScriptDataDoubleEscapeStart(t) {
			if (
				this.preprocessor.startsWith(ot.SCRIPT, !1) &&
				Wc(this.preprocessor.peek(ot.SCRIPT.length))
			) {
				this._emitCodePoint(t);
				for (let n = 0; n < ot.SCRIPT.length; n++)
					this._emitCodePoint(this._consume());
				this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED;
			} else
				this._ensureHibernation() ||
					((this.state = b.SCRIPT_DATA_ESCAPED),
					this._stateScriptDataEscaped(t));
		}
		_stateScriptDataDoubleEscaped(t) {
			switch (t) {
				case h.HYPHEN_MINUS: {
					(this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED_DASH),
						this._emitChars("-");
					break;
				}
				case h.LESS_THAN_SIGN: {
					(this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
						this._emitChars("<");
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), this._emitChars(ye);
					break;
				}
				case h.EOF: {
					this._err(_.eofInScriptHtmlCommentLikeText),
						this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateScriptDataDoubleEscapedDash(t) {
			switch (t) {
				case h.HYPHEN_MINUS: {
					(this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH),
						this._emitChars("-");
					break;
				}
				case h.LESS_THAN_SIGN: {
					(this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
						this._emitChars("<");
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter),
						(this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED),
						this._emitChars(ye);
					break;
				}
				case h.EOF: {
					this._err(_.eofInScriptHtmlCommentLikeText),
						this._emitEOFToken();
					break;
				}
				default:
					(this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED),
						this._emitCodePoint(t);
			}
		}
		_stateScriptDataDoubleEscapedDashDash(t) {
			switch (t) {
				case h.HYPHEN_MINUS: {
					this._emitChars("-");
					break;
				}
				case h.LESS_THAN_SIGN: {
					(this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
						this._emitChars("<");
					break;
				}
				case h.GREATER_THAN_SIGN: {
					(this.state = b.SCRIPT_DATA), this._emitChars(">");
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter),
						(this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED),
						this._emitChars(ye);
					break;
				}
				case h.EOF: {
					this._err(_.eofInScriptHtmlCommentLikeText),
						this._emitEOFToken();
					break;
				}
				default:
					(this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED),
						this._emitCodePoint(t);
			}
		}
		_stateScriptDataDoubleEscapedLessThanSign(t) {
			t === h.SOLIDUS
				? ((this.state = b.SCRIPT_DATA_DOUBLE_ESCAPE_END),
					this._emitChars("/"))
				: ((this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED),
					this._stateScriptDataDoubleEscaped(t));
		}
		_stateScriptDataDoubleEscapeEnd(t) {
			if (
				this.preprocessor.startsWith(ot.SCRIPT, !1) &&
				Wc(this.preprocessor.peek(ot.SCRIPT.length))
			) {
				this._emitCodePoint(t);
				for (let n = 0; n < ot.SCRIPT.length; n++)
					this._emitCodePoint(this._consume());
				this.state = b.SCRIPT_DATA_ESCAPED;
			} else
				this._ensureHibernation() ||
					((this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED),
					this._stateScriptDataDoubleEscaped(t));
		}
		_stateBeforeAttributeName(t) {
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED:
					break;
				case h.SOLIDUS:
				case h.GREATER_THAN_SIGN:
				case h.EOF: {
					(this.state = b.AFTER_ATTRIBUTE_NAME),
						this._stateAfterAttributeName(t);
					break;
				}
				case h.EQUALS_SIGN: {
					this._err(_.unexpectedEqualsSignBeforeAttributeName),
						this._createAttr("="),
						(this.state = b.ATTRIBUTE_NAME);
					break;
				}
				default:
					this._createAttr(""),
						(this.state = b.ATTRIBUTE_NAME),
						this._stateAttributeName(t);
			}
		}
		_stateAttributeName(t) {
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED:
				case h.SOLIDUS:
				case h.GREATER_THAN_SIGN:
				case h.EOF: {
					this._leaveAttrName(),
						(this.state = b.AFTER_ATTRIBUTE_NAME),
						this._stateAfterAttributeName(t);
					break;
				}
				case h.EQUALS_SIGN: {
					this._leaveAttrName(),
						(this.state = b.BEFORE_ATTRIBUTE_VALUE);
					break;
				}
				case h.QUOTATION_MARK:
				case h.APOSTROPHE:
				case h.LESS_THAN_SIGN: {
					this._err(_.unexpectedCharacterInAttributeName),
						(this.currentAttr.name += String.fromCodePoint(t));
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter),
						(this.currentAttr.name += ye);
					break;
				}
				default:
					this.currentAttr.name += String.fromCodePoint(
						Kn(t) ? Ki(t) : t,
					);
			}
		}
		_stateAfterAttributeName(t) {
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED:
					break;
				case h.SOLIDUS: {
					this.state = b.SELF_CLOSING_START_TAG;
					break;
				}
				case h.EQUALS_SIGN: {
					this.state = b.BEFORE_ATTRIBUTE_VALUE;
					break;
				}
				case h.GREATER_THAN_SIGN: {
					(this.state = b.DATA), this.emitCurrentTagToken();
					break;
				}
				case h.EOF: {
					this._err(_.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					this._createAttr(""),
						(this.state = b.ATTRIBUTE_NAME),
						this._stateAttributeName(t);
			}
		}
		_stateBeforeAttributeValue(t) {
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED:
					break;
				case h.QUOTATION_MARK: {
					this.state = b.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
					break;
				}
				case h.APOSTROPHE: {
					this.state = b.ATTRIBUTE_VALUE_SINGLE_QUOTED;
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._err(_.missingAttributeValue),
						(this.state = b.DATA),
						this.emitCurrentTagToken();
					break;
				}
				default:
					(this.state = b.ATTRIBUTE_VALUE_UNQUOTED),
						this._stateAttributeValueUnquoted(t);
			}
		}
		_stateAttributeValueDoubleQuoted(t) {
			switch (t) {
				case h.QUOTATION_MARK: {
					this.state = b.AFTER_ATTRIBUTE_VALUE_QUOTED;
					break;
				}
				case h.AMPERSAND: {
					(this.returnState = b.ATTRIBUTE_VALUE_DOUBLE_QUOTED),
						(this.state = b.CHARACTER_REFERENCE);
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter),
						(this.currentAttr.value += ye);
					break;
				}
				case h.EOF: {
					this._err(_.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					this.currentAttr.value += String.fromCodePoint(t);
			}
		}
		_stateAttributeValueSingleQuoted(t) {
			switch (t) {
				case h.APOSTROPHE: {
					this.state = b.AFTER_ATTRIBUTE_VALUE_QUOTED;
					break;
				}
				case h.AMPERSAND: {
					(this.returnState = b.ATTRIBUTE_VALUE_SINGLE_QUOTED),
						(this.state = b.CHARACTER_REFERENCE);
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter),
						(this.currentAttr.value += ye);
					break;
				}
				case h.EOF: {
					this._err(_.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					this.currentAttr.value += String.fromCodePoint(t);
			}
		}
		_stateAttributeValueUnquoted(t) {
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED: {
					this._leaveAttrValue(),
						(this.state = b.BEFORE_ATTRIBUTE_NAME);
					break;
				}
				case h.AMPERSAND: {
					(this.returnState = b.ATTRIBUTE_VALUE_UNQUOTED),
						(this.state = b.CHARACTER_REFERENCE);
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._leaveAttrValue(),
						(this.state = b.DATA),
						this.emitCurrentTagToken();
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter),
						(this.currentAttr.value += ye);
					break;
				}
				case h.QUOTATION_MARK:
				case h.APOSTROPHE:
				case h.LESS_THAN_SIGN:
				case h.EQUALS_SIGN:
				case h.GRAVE_ACCENT: {
					this._err(_.unexpectedCharacterInUnquotedAttributeValue),
						(this.currentAttr.value += String.fromCodePoint(t));
					break;
				}
				case h.EOF: {
					this._err(_.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					this.currentAttr.value += String.fromCodePoint(t);
			}
		}
		_stateAfterAttributeValueQuoted(t) {
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED: {
					this._leaveAttrValue(),
						(this.state = b.BEFORE_ATTRIBUTE_NAME);
					break;
				}
				case h.SOLIDUS: {
					this._leaveAttrValue(),
						(this.state = b.SELF_CLOSING_START_TAG);
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._leaveAttrValue(),
						(this.state = b.DATA),
						this.emitCurrentTagToken();
					break;
				}
				case h.EOF: {
					this._err(_.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					this._err(_.missingWhitespaceBetweenAttributes),
						(this.state = b.BEFORE_ATTRIBUTE_NAME),
						this._stateBeforeAttributeName(t);
			}
		}
		_stateSelfClosingStartTag(t) {
			switch (t) {
				case h.GREATER_THAN_SIGN: {
					let n = this.currentToken;
					(n.selfClosing = !0),
						(this.state = b.DATA),
						this.emitCurrentTagToken();
					break;
				}
				case h.EOF: {
					this._err(_.eofInTag), this._emitEOFToken();
					break;
				}
				default:
					this._err(_.unexpectedSolidusInTag),
						(this.state = b.BEFORE_ATTRIBUTE_NAME),
						this._stateBeforeAttributeName(t);
			}
		}
		_stateBogusComment(t) {
			let n = this.currentToken;
			switch (t) {
				case h.GREATER_THAN_SIGN: {
					(this.state = b.DATA), this.emitCurrentComment(n);
					break;
				}
				case h.EOF: {
					this.emitCurrentComment(n), this._emitEOFToken();
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), (n.data += ye);
					break;
				}
				default:
					n.data += String.fromCodePoint(t);
			}
		}
		_stateMarkupDeclarationOpen(t) {
			this._consumeSequenceIfMatch(ot.DASH_DASH, !0)
				? (this._createCommentToken(ot.DASH_DASH.length + 1),
					(this.state = b.COMMENT_START))
				: this._consumeSequenceIfMatch(ot.DOCTYPE, !1)
					? ((this.currentLocation = this.getCurrentLocation(
							ot.DOCTYPE.length + 1,
						)),
						(this.state = b.DOCTYPE))
					: this._consumeSequenceIfMatch(ot.CDATA_START, !0)
						? this.inForeignNode
							? (this.state = b.CDATA_SECTION)
							: (this._err(_.cdataInHtmlContent),
								this._createCommentToken(
									ot.CDATA_START.length + 1,
								),
								(this.currentToken.data = "[CDATA["),
								(this.state = b.BOGUS_COMMENT))
						: this._ensureHibernation() ||
							(this._err(_.incorrectlyOpenedComment),
							this._createCommentToken(2),
							(this.state = b.BOGUS_COMMENT),
							this._stateBogusComment(t));
		}
		_stateCommentStart(t) {
			switch (t) {
				case h.HYPHEN_MINUS: {
					this.state = b.COMMENT_START_DASH;
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._err(_.abruptClosingOfEmptyComment),
						(this.state = b.DATA);
					let n = this.currentToken;
					this.emitCurrentComment(n);
					break;
				}
				default:
					(this.state = b.COMMENT), this._stateComment(t);
			}
		}
		_stateCommentStartDash(t) {
			let n = this.currentToken;
			switch (t) {
				case h.HYPHEN_MINUS: {
					this.state = b.COMMENT_END;
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._err(_.abruptClosingOfEmptyComment),
						(this.state = b.DATA),
						this.emitCurrentComment(n);
					break;
				}
				case h.EOF: {
					this._err(_.eofInComment),
						this.emitCurrentComment(n),
						this._emitEOFToken();
					break;
				}
				default:
					(n.data += "-"),
						(this.state = b.COMMENT),
						this._stateComment(t);
			}
		}
		_stateComment(t) {
			let n = this.currentToken;
			switch (t) {
				case h.HYPHEN_MINUS: {
					this.state = b.COMMENT_END_DASH;
					break;
				}
				case h.LESS_THAN_SIGN: {
					(n.data += "<"), (this.state = b.COMMENT_LESS_THAN_SIGN);
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), (n.data += ye);
					break;
				}
				case h.EOF: {
					this._err(_.eofInComment),
						this.emitCurrentComment(n),
						this._emitEOFToken();
					break;
				}
				default:
					n.data += String.fromCodePoint(t);
			}
		}
		_stateCommentLessThanSign(t) {
			let n = this.currentToken;
			switch (t) {
				case h.EXCLAMATION_MARK: {
					(n.data += "!"),
						(this.state = b.COMMENT_LESS_THAN_SIGN_BANG);
					break;
				}
				case h.LESS_THAN_SIGN: {
					n.data += "<";
					break;
				}
				default:
					(this.state = b.COMMENT), this._stateComment(t);
			}
		}
		_stateCommentLessThanSignBang(t) {
			t === h.HYPHEN_MINUS
				? (this.state = b.COMMENT_LESS_THAN_SIGN_BANG_DASH)
				: ((this.state = b.COMMENT), this._stateComment(t));
		}
		_stateCommentLessThanSignBangDash(t) {
			t === h.HYPHEN_MINUS
				? (this.state = b.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH)
				: ((this.state = b.COMMENT_END_DASH),
					this._stateCommentEndDash(t));
		}
		_stateCommentLessThanSignBangDashDash(t) {
			t !== h.GREATER_THAN_SIGN &&
				t !== h.EOF &&
				this._err(_.nestedComment),
				(this.state = b.COMMENT_END),
				this._stateCommentEnd(t);
		}
		_stateCommentEndDash(t) {
			let n = this.currentToken;
			switch (t) {
				case h.HYPHEN_MINUS: {
					this.state = b.COMMENT_END;
					break;
				}
				case h.EOF: {
					this._err(_.eofInComment),
						this.emitCurrentComment(n),
						this._emitEOFToken();
					break;
				}
				default:
					(n.data += "-"),
						(this.state = b.COMMENT),
						this._stateComment(t);
			}
		}
		_stateCommentEnd(t) {
			let n = this.currentToken;
			switch (t) {
				case h.GREATER_THAN_SIGN: {
					(this.state = b.DATA), this.emitCurrentComment(n);
					break;
				}
				case h.EXCLAMATION_MARK: {
					this.state = b.COMMENT_END_BANG;
					break;
				}
				case h.HYPHEN_MINUS: {
					n.data += "-";
					break;
				}
				case h.EOF: {
					this._err(_.eofInComment),
						this.emitCurrentComment(n),
						this._emitEOFToken();
					break;
				}
				default:
					(n.data += "--"),
						(this.state = b.COMMENT),
						this._stateComment(t);
			}
		}
		_stateCommentEndBang(t) {
			let n = this.currentToken;
			switch (t) {
				case h.HYPHEN_MINUS: {
					(n.data += "--!"), (this.state = b.COMMENT_END_DASH);
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._err(_.incorrectlyClosedComment),
						(this.state = b.DATA),
						this.emitCurrentComment(n);
					break;
				}
				case h.EOF: {
					this._err(_.eofInComment),
						this.emitCurrentComment(n),
						this._emitEOFToken();
					break;
				}
				default:
					(n.data += "--!"),
						(this.state = b.COMMENT),
						this._stateComment(t);
			}
		}
		_stateDoctype(t) {
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED: {
					this.state = b.BEFORE_DOCTYPE_NAME;
					break;
				}
				case h.GREATER_THAN_SIGN: {
					(this.state = b.BEFORE_DOCTYPE_NAME),
						this._stateBeforeDoctypeName(t);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype), this._createDoctypeToken(null);
					let n = this.currentToken;
					(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(_.missingWhitespaceBeforeDoctypeName),
						(this.state = b.BEFORE_DOCTYPE_NAME),
						this._stateBeforeDoctypeName(t);
			}
		}
		_stateBeforeDoctypeName(t) {
			if (Kn(t))
				this._createDoctypeToken(String.fromCharCode(Ki(t))),
					(this.state = b.DOCTYPE_NAME);
			else
				switch (t) {
					case h.SPACE:
					case h.LINE_FEED:
					case h.TABULATION:
					case h.FORM_FEED:
						break;
					case h.NULL: {
						this._err(_.unexpectedNullCharacter),
							this._createDoctypeToken(ye),
							(this.state = b.DOCTYPE_NAME);
						break;
					}
					case h.GREATER_THAN_SIGN: {
						this._err(_.missingDoctypeName),
							this._createDoctypeToken(null);
						let n = this.currentToken;
						(n.forceQuirks = !0),
							this.emitCurrentDoctype(n),
							(this.state = b.DATA);
						break;
					}
					case h.EOF: {
						this._err(_.eofInDoctype),
							this._createDoctypeToken(null);
						let n = this.currentToken;
						(n.forceQuirks = !0),
							this.emitCurrentDoctype(n),
							this._emitEOFToken();
						break;
					}
					default:
						this._createDoctypeToken(String.fromCodePoint(t)),
							(this.state = b.DOCTYPE_NAME);
				}
		}
		_stateDoctypeName(t) {
			let n = this.currentToken;
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED: {
					this.state = b.AFTER_DOCTYPE_NAME;
					break;
				}
				case h.GREATER_THAN_SIGN: {
					(this.state = b.DATA), this.emitCurrentDoctype(n);
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), (n.name += ye);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					n.name += String.fromCodePoint(Kn(t) ? Ki(t) : t);
			}
		}
		_stateAfterDoctypeName(t) {
			let n = this.currentToken;
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED:
					break;
				case h.GREATER_THAN_SIGN: {
					(this.state = b.DATA), this.emitCurrentDoctype(n);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					this._consumeSequenceIfMatch(ot.PUBLIC, !1)
						? (this.state = b.AFTER_DOCTYPE_PUBLIC_KEYWORD)
						: this._consumeSequenceIfMatch(ot.SYSTEM, !1)
							? (this.state = b.AFTER_DOCTYPE_SYSTEM_KEYWORD)
							: this._ensureHibernation() ||
								(this._err(
									_.invalidCharacterSequenceAfterDoctypeName,
								),
								(n.forceQuirks = !0),
								(this.state = b.BOGUS_DOCTYPE),
								this._stateBogusDoctype(t));
			}
		}
		_stateAfterDoctypePublicKeyword(t) {
			let n = this.currentToken;
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED: {
					this.state = b.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
					break;
				}
				case h.QUOTATION_MARK: {
					this._err(_.missingWhitespaceAfterDoctypePublicKeyword),
						(n.publicId = ""),
						(this.state =
							b.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
					break;
				}
				case h.APOSTROPHE: {
					this._err(_.missingWhitespaceAfterDoctypePublicKeyword),
						(n.publicId = ""),
						(this.state =
							b.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._err(_.missingDoctypePublicIdentifier),
						(n.forceQuirks = !0),
						(this.state = b.DATA),
						this.emitCurrentDoctype(n);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(_.missingQuoteBeforeDoctypePublicIdentifier),
						(n.forceQuirks = !0),
						(this.state = b.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateBeforeDoctypePublicIdentifier(t) {
			let n = this.currentToken;
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED:
					break;
				case h.QUOTATION_MARK: {
					(n.publicId = ""),
						(this.state =
							b.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
					break;
				}
				case h.APOSTROPHE: {
					(n.publicId = ""),
						(this.state =
							b.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._err(_.missingDoctypePublicIdentifier),
						(n.forceQuirks = !0),
						(this.state = b.DATA),
						this.emitCurrentDoctype(n);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(_.missingQuoteBeforeDoctypePublicIdentifier),
						(n.forceQuirks = !0),
						(this.state = b.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateDoctypePublicIdentifierDoubleQuoted(t) {
			let n = this.currentToken;
			switch (t) {
				case h.QUOTATION_MARK: {
					this.state = b.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), (n.publicId += ye);
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._err(_.abruptDoctypePublicIdentifier),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						(this.state = b.DATA);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					n.publicId += String.fromCodePoint(t);
			}
		}
		_stateDoctypePublicIdentifierSingleQuoted(t) {
			let n = this.currentToken;
			switch (t) {
				case h.APOSTROPHE: {
					this.state = b.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), (n.publicId += ye);
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._err(_.abruptDoctypePublicIdentifier),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						(this.state = b.DATA);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					n.publicId += String.fromCodePoint(t);
			}
		}
		_stateAfterDoctypePublicIdentifier(t) {
			let n = this.currentToken;
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED: {
					this.state =
						b.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
					break;
				}
				case h.GREATER_THAN_SIGN: {
					(this.state = b.DATA), this.emitCurrentDoctype(n);
					break;
				}
				case h.QUOTATION_MARK: {
					this._err(
						_.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers,
					),
						(n.systemId = ""),
						(this.state =
							b.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
					break;
				}
				case h.APOSTROPHE: {
					this._err(
						_.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers,
					),
						(n.systemId = ""),
						(this.state =
							b.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(_.missingQuoteBeforeDoctypeSystemIdentifier),
						(n.forceQuirks = !0),
						(this.state = b.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateBetweenDoctypePublicAndSystemIdentifiers(t) {
			let n = this.currentToken;
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED:
					break;
				case h.GREATER_THAN_SIGN: {
					this.emitCurrentDoctype(n), (this.state = b.DATA);
					break;
				}
				case h.QUOTATION_MARK: {
					(n.systemId = ""),
						(this.state =
							b.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
					break;
				}
				case h.APOSTROPHE: {
					(n.systemId = ""),
						(this.state =
							b.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(_.missingQuoteBeforeDoctypeSystemIdentifier),
						(n.forceQuirks = !0),
						(this.state = b.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateAfterDoctypeSystemKeyword(t) {
			let n = this.currentToken;
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED: {
					this.state = b.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
					break;
				}
				case h.QUOTATION_MARK: {
					this._err(_.missingWhitespaceAfterDoctypeSystemKeyword),
						(n.systemId = ""),
						(this.state =
							b.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
					break;
				}
				case h.APOSTROPHE: {
					this._err(_.missingWhitespaceAfterDoctypeSystemKeyword),
						(n.systemId = ""),
						(this.state =
							b.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._err(_.missingDoctypeSystemIdentifier),
						(n.forceQuirks = !0),
						(this.state = b.DATA),
						this.emitCurrentDoctype(n);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(_.missingQuoteBeforeDoctypeSystemIdentifier),
						(n.forceQuirks = !0),
						(this.state = b.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateBeforeDoctypeSystemIdentifier(t) {
			let n = this.currentToken;
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED:
					break;
				case h.QUOTATION_MARK: {
					(n.systemId = ""),
						(this.state =
							b.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
					break;
				}
				case h.APOSTROPHE: {
					(n.systemId = ""),
						(this.state =
							b.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._err(_.missingDoctypeSystemIdentifier),
						(n.forceQuirks = !0),
						(this.state = b.DATA),
						this.emitCurrentDoctype(n);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(_.missingQuoteBeforeDoctypeSystemIdentifier),
						(n.forceQuirks = !0),
						(this.state = b.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateDoctypeSystemIdentifierDoubleQuoted(t) {
			let n = this.currentToken;
			switch (t) {
				case h.QUOTATION_MARK: {
					this.state = b.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), (n.systemId += ye);
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._err(_.abruptDoctypeSystemIdentifier),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						(this.state = b.DATA);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					n.systemId += String.fromCodePoint(t);
			}
		}
		_stateDoctypeSystemIdentifierSingleQuoted(t) {
			let n = this.currentToken;
			switch (t) {
				case h.APOSTROPHE: {
					this.state = b.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter), (n.systemId += ye);
					break;
				}
				case h.GREATER_THAN_SIGN: {
					this._err(_.abruptDoctypeSystemIdentifier),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						(this.state = b.DATA);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					n.systemId += String.fromCodePoint(t);
			}
		}
		_stateAfterDoctypeSystemIdentifier(t) {
			let n = this.currentToken;
			switch (t) {
				case h.SPACE:
				case h.LINE_FEED:
				case h.TABULATION:
				case h.FORM_FEED:
					break;
				case h.GREATER_THAN_SIGN: {
					this.emitCurrentDoctype(n), (this.state = b.DATA);
					break;
				}
				case h.EOF: {
					this._err(_.eofInDoctype),
						(n.forceQuirks = !0),
						this.emitCurrentDoctype(n),
						this._emitEOFToken();
					break;
				}
				default:
					this._err(
						_.unexpectedCharacterAfterDoctypeSystemIdentifier,
					),
						(this.state = b.BOGUS_DOCTYPE),
						this._stateBogusDoctype(t);
			}
		}
		_stateBogusDoctype(t) {
			let n = this.currentToken;
			switch (t) {
				case h.GREATER_THAN_SIGN: {
					this.emitCurrentDoctype(n), (this.state = b.DATA);
					break;
				}
				case h.NULL: {
					this._err(_.unexpectedNullCharacter);
					break;
				}
				case h.EOF: {
					this.emitCurrentDoctype(n), this._emitEOFToken();
					break;
				}
				default:
			}
		}
		_stateCdataSection(t) {
			switch (t) {
				case h.RIGHT_SQUARE_BRACKET: {
					this.state = b.CDATA_SECTION_BRACKET;
					break;
				}
				case h.EOF: {
					this._err(_.eofInCdata), this._emitEOFToken();
					break;
				}
				default:
					this._emitCodePoint(t);
			}
		}
		_stateCdataSectionBracket(t) {
			t === h.RIGHT_SQUARE_BRACKET
				? (this.state = b.CDATA_SECTION_END)
				: (this._emitChars("]"),
					(this.state = b.CDATA_SECTION),
					this._stateCdataSection(t));
		}
		_stateCdataSectionEnd(t) {
			switch (t) {
				case h.GREATER_THAN_SIGN: {
					this.state = b.DATA;
					break;
				}
				case h.RIGHT_SQUARE_BRACKET: {
					this._emitChars("]");
					break;
				}
				default:
					this._emitChars("]]"),
						(this.state = b.CDATA_SECTION),
						this._stateCdataSection(t);
			}
		}
		_stateCharacterReference(t) {
			t === h.NUMBER_SIGN
				? (this.state = b.NUMERIC_CHARACTER_REFERENCE)
				: Po(t)
					? ((this.state = b.NAMED_CHARACTER_REFERENCE),
						this._stateNamedCharacterReference(t))
					: (this._flushCodePointConsumedAsCharacterReference(
							h.AMPERSAND,
						),
						this._reconsumeInState(this.returnState, t));
		}
		_stateNamedCharacterReference(t) {
			let n = this._matchNamedCharacterReference(t);
			if (!this._ensureHibernation())
				if (n) {
					for (let i = 0; i < n.length; i++)
						this._flushCodePointConsumedAsCharacterReference(n[i]);
					this.state = this.returnState;
				} else
					this._flushCodePointConsumedAsCharacterReference(
						h.AMPERSAND,
					),
						(this.state = b.AMBIGUOUS_AMPERSAND);
		}
		_stateAmbiguousAmpersand(t) {
			Po(t)
				? this._flushCodePointConsumedAsCharacterReference(t)
				: (t === h.SEMICOLON &&
						this._err(_.unknownNamedCharacterReference),
					this._reconsumeInState(this.returnState, t));
		}
		_stateNumericCharacterReference(t) {
			(this.charRefCode = 0),
				t === h.LATIN_SMALL_X || t === h.LATIN_CAPITAL_X
					? (this.state = b.HEXADEMICAL_CHARACTER_REFERENCE_START)
					: Qn(t)
						? ((this.state = b.DECIMAL_CHARACTER_REFERENCE),
							this._stateDecimalCharacterReference(t))
						: (this._err(
								_.absenceOfDigitsInNumericCharacterReference,
							),
							this._flushCodePointConsumedAsCharacterReference(
								h.AMPERSAND,
							),
							this._flushCodePointConsumedAsCharacterReference(
								h.NUMBER_SIGN,
							),
							this._reconsumeInState(this.returnState, t));
		}
		_stateHexademicalCharacterReferenceStart(t) {
			Hm(t)
				? ((this.state = b.HEXADEMICAL_CHARACTER_REFERENCE),
					this._stateHexademicalCharacterReference(t))
				: (this._err(_.absenceOfDigitsInNumericCharacterReference),
					this._flushCodePointConsumedAsCharacterReference(
						h.AMPERSAND,
					),
					this._flushCodePointConsumedAsCharacterReference(
						h.NUMBER_SIGN,
					),
					this._unconsume(2),
					(this.state = this.returnState));
		}
		_stateHexademicalCharacterReference(t) {
			Gc(t)
				? (this.charRefCode = this.charRefCode * 16 + t - 55)
				: Xc(t)
					? (this.charRefCode = this.charRefCode * 16 + t - 87)
					: Qn(t)
						? (this.charRefCode = this.charRefCode * 16 + t - 48)
						: t === h.SEMICOLON
							? (this.state = b.NUMERIC_CHARACTER_REFERENCE_END)
							: (this._err(
									_.missingSemicolonAfterCharacterReference,
								),
								(this.state =
									b.NUMERIC_CHARACTER_REFERENCE_END),
								this._stateNumericCharacterReferenceEnd(t));
		}
		_stateDecimalCharacterReference(t) {
			Qn(t)
				? (this.charRefCode = this.charRefCode * 10 + t - 48)
				: t === h.SEMICOLON
					? (this.state = b.NUMERIC_CHARACTER_REFERENCE_END)
					: (this._err(_.missingSemicolonAfterCharacterReference),
						(this.state = b.NUMERIC_CHARACTER_REFERENCE_END),
						this._stateNumericCharacterReferenceEnd(t));
		}
		_stateNumericCharacterReferenceEnd(t) {
			if (this.charRefCode === h.NULL)
				this._err(_.nullCharacterReference),
					(this.charRefCode = h.REPLACEMENT_CHARACTER);
			else if (this.charRefCode > 1114111)
				this._err(_.characterReferenceOutsideUnicodeRange),
					(this.charRefCode = h.REPLACEMENT_CHARACTER);
			else if (zi(this.charRefCode))
				this._err(_.surrogateCharacterReference),
					(this.charRefCode = h.REPLACEMENT_CHARACTER);
			else if (Vi(this.charRefCode))
				this._err(_.noncharacterCharacterReference);
			else if (
				Yi(this.charRefCode) ||
				this.charRefCode === h.CARRIAGE_RETURN
			) {
				this._err(_.controlCharacterReference);
				let n = Mm.get(this.charRefCode);
				n !== void 0 && (this.charRefCode = n);
			}
			this._flushCodePointConsumedAsCharacterReference(this.charRefCode),
				this._reconsumeInState(this.returnState, t);
		}
	};
	var Jc = new Set([
			u.DD,
			u.DT,
			u.LI,
			u.OPTGROUP,
			u.OPTION,
			u.P,
			u.RB,
			u.RP,
			u.RT,
			u.RTC,
		]),
		Qc = new Set([
			...Jc,
			u.CAPTION,
			u.COLGROUP,
			u.TBODY,
			u.TD,
			u.TFOOT,
			u.TH,
			u.THEAD,
			u.TR,
		]),
		Qi = new Map([
			[u.APPLET, w.HTML],
			[u.CAPTION, w.HTML],
			[u.HTML, w.HTML],
			[u.MARQUEE, w.HTML],
			[u.OBJECT, w.HTML],
			[u.TABLE, w.HTML],
			[u.TD, w.HTML],
			[u.TEMPLATE, w.HTML],
			[u.TH, w.HTML],
			[u.ANNOTATION_XML, w.MATHML],
			[u.MI, w.MATHML],
			[u.MN, w.MATHML],
			[u.MO, w.MATHML],
			[u.MS, w.MATHML],
			[u.MTEXT, w.MATHML],
			[u.DESC, w.SVG],
			[u.FOREIGN_OBJECT, w.SVG],
			[u.TITLE, w.SVG],
		]),
		qm = [u.H1, u.H2, u.H3, u.H4, u.H5, u.H6],
		zm = [u.TR, u.TEMPLATE, u.HTML],
		Ym = [u.TBODY, u.TFOOT, u.THEAD, u.TEMPLATE, u.HTML],
		Vm = [u.TABLE, u.TEMPLATE, u.HTML],
		Wm = [u.TD, u.TH],
		Ji = class {
			get currentTmplContentOrNode() {
				return this._isInTemplate()
					? this.treeAdapter.getTemplateContent(this.current)
					: this.current;
			}
			constructor(t, n, i) {
				(this.treeAdapter = n),
					(this.handler = i),
					(this.items = []),
					(this.tagIDs = []),
					(this.stackTop = -1),
					(this.tmplCount = 0),
					(this.currentTagId = u.UNKNOWN),
					(this.current = t);
			}
			_indexOf(t) {
				return this.items.lastIndexOf(t, this.stackTop);
			}
			_isInTemplate() {
				return (
					this.currentTagId === u.TEMPLATE &&
					this.treeAdapter.getNamespaceURI(this.current) === w.HTML
				);
			}
			_updateCurrentElement() {
				(this.current = this.items[this.stackTop]),
					(this.currentTagId = this.tagIDs[this.stackTop]);
			}
			push(t, n) {
				this.stackTop++,
					(this.items[this.stackTop] = t),
					(this.current = t),
					(this.tagIDs[this.stackTop] = n),
					(this.currentTagId = n),
					this._isInTemplate() && this.tmplCount++,
					this.handler.onItemPush(t, n, !0);
			}
			pop() {
				let t = this.current;
				this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--,
					this.stackTop--,
					this._updateCurrentElement(),
					this.handler.onItemPop(t, !0);
			}
			replace(t, n) {
				let i = this._indexOf(t);
				(this.items[i] = n), i === this.stackTop && (this.current = n);
			}
			insertAfter(t, n, i) {
				let a = this._indexOf(t) + 1;
				this.items.splice(a, 0, n),
					this.tagIDs.splice(a, 0, i),
					this.stackTop++,
					a === this.stackTop && this._updateCurrentElement(),
					this.handler.onItemPush(
						this.current,
						this.currentTagId,
						a === this.stackTop,
					);
			}
			popUntilTagNamePopped(t) {
				let n = this.stackTop + 1;
				do n = this.tagIDs.lastIndexOf(t, n - 1);
				while (
					n > 0 &&
					this.treeAdapter.getNamespaceURI(this.items[n]) !== w.HTML
				);
				this.shortenToLength(n < 0 ? 0 : n);
			}
			shortenToLength(t) {
				for (; this.stackTop >= t; ) {
					let n = this.current;
					this.tmplCount > 0 &&
						this._isInTemplate() &&
						(this.tmplCount -= 1),
						this.stackTop--,
						this._updateCurrentElement(),
						this.handler.onItemPop(n, this.stackTop < t);
				}
			}
			popUntilElementPopped(t) {
				let n = this._indexOf(t);
				this.shortenToLength(n < 0 ? 0 : n);
			}
			popUntilPopped(t, n) {
				let i = this._indexOfTagNames(t, n);
				this.shortenToLength(i < 0 ? 0 : i);
			}
			popUntilNumberedHeaderPopped() {
				this.popUntilPopped(qm, w.HTML);
			}
			popUntilTableCellPopped() {
				this.popUntilPopped(Wm, w.HTML);
			}
			popAllUpToHtmlElement() {
				(this.tmplCount = 0), this.shortenToLength(1);
			}
			_indexOfTagNames(t, n) {
				for (let i = this.stackTop; i >= 0; i--)
					if (
						t.includes(this.tagIDs[i]) &&
						this.treeAdapter.getNamespaceURI(this.items[i]) === n
					)
						return i;
				return -1;
			}
			clearBackTo(t, n) {
				let i = this._indexOfTagNames(t, n);
				this.shortenToLength(i + 1);
			}
			clearBackToTableContext() {
				this.clearBackTo(Vm, w.HTML);
			}
			clearBackToTableBodyContext() {
				this.clearBackTo(Ym, w.HTML);
			}
			clearBackToTableRowContext() {
				this.clearBackTo(zm, w.HTML);
			}
			remove(t) {
				let n = this._indexOf(t);
				n >= 0 &&
					(n === this.stackTop
						? this.pop()
						: (this.items.splice(n, 1),
							this.tagIDs.splice(n, 1),
							this.stackTop--,
							this._updateCurrentElement(),
							this.handler.onItemPop(t, !1)));
			}
			tryPeekProperlyNestedBodyElement() {
				return this.stackTop >= 1 && this.tagIDs[1] === u.BODY
					? this.items[1]
					: null;
			}
			contains(t) {
				return this._indexOf(t) > -1;
			}
			getCommonAncestor(t) {
				let n = this._indexOf(t) - 1;
				return n >= 0 ? this.items[n] : null;
			}
			isRootHtmlElementCurrent() {
				return this.stackTop === 0 && this.tagIDs[0] === u.HTML;
			}
			hasInScope(t) {
				for (let n = this.stackTop; n >= 0; n--) {
					let i = this.tagIDs[n],
						a = this.treeAdapter.getNamespaceURI(this.items[n]);
					if (i === t && a === w.HTML) return !0;
					if (Qi.get(i) === a) return !1;
				}
				return !0;
			}
			hasNumberedHeaderInScope() {
				for (let t = this.stackTop; t >= 0; t--) {
					let n = this.tagIDs[t],
						i = this.treeAdapter.getNamespaceURI(this.items[t]);
					if (Xi(n) && i === w.HTML) return !0;
					if (Qi.get(n) === i) return !1;
				}
				return !0;
			}
			hasInListItemScope(t) {
				for (let n = this.stackTop; n >= 0; n--) {
					let i = this.tagIDs[n],
						a = this.treeAdapter.getNamespaceURI(this.items[n]);
					if (i === t && a === w.HTML) return !0;
					if (
						((i === u.UL || i === u.OL) && a === w.HTML) ||
						Qi.get(i) === a
					)
						return !1;
				}
				return !0;
			}
			hasInButtonScope(t) {
				for (let n = this.stackTop; n >= 0; n--) {
					let i = this.tagIDs[n],
						a = this.treeAdapter.getNamespaceURI(this.items[n]);
					if (i === t && a === w.HTML) return !0;
					if ((i === u.BUTTON && a === w.HTML) || Qi.get(i) === a)
						return !1;
				}
				return !0;
			}
			hasInTableScope(t) {
				for (let n = this.stackTop; n >= 0; n--) {
					let i = this.tagIDs[n];
					if (
						this.treeAdapter.getNamespaceURI(this.items[n]) ===
						w.HTML
					) {
						if (i === t) return !0;
						if (i === u.TABLE || i === u.TEMPLATE || i === u.HTML)
							return !1;
					}
				}
				return !0;
			}
			hasTableBodyContextInTableScope() {
				for (let t = this.stackTop; t >= 0; t--) {
					let n = this.tagIDs[t];
					if (
						this.treeAdapter.getNamespaceURI(this.items[t]) ===
						w.HTML
					) {
						if (n === u.TBODY || n === u.THEAD || n === u.TFOOT)
							return !0;
						if (n === u.TABLE || n === u.HTML) return !1;
					}
				}
				return !0;
			}
			hasInSelectScope(t) {
				for (let n = this.stackTop; n >= 0; n--) {
					let i = this.tagIDs[n];
					if (
						this.treeAdapter.getNamespaceURI(this.items[n]) ===
						w.HTML
					) {
						if (i === t) return !0;
						if (i !== u.OPTION && i !== u.OPTGROUP) return !1;
					}
				}
				return !0;
			}
			generateImpliedEndTags() {
				for (; Jc.has(this.currentTagId); ) this.pop();
			}
			generateImpliedEndTagsThoroughly() {
				for (; Qc.has(this.currentTagId); ) this.pop();
			}
			generateImpliedEndTagsWithExclusion(t) {
				for (; this.currentTagId !== t && Qc.has(this.currentTagId); )
					this.pop();
			}
		};
	var bt;
	(function (e) {
		(e[(e.Marker = 0)] = "Marker"), (e[(e.Element = 1)] = "Element");
	})((bt = bt || (bt = {})));
	var Zc = { type: bt.Marker },
		Zi = class {
			constructor(t) {
				(this.treeAdapter = t),
					(this.entries = []),
					(this.bookmark = null);
			}
			_getNoahArkConditionCandidates(t, n) {
				let i = [],
					a = n.length,
					o = this.treeAdapter.getTagName(t),
					s = this.treeAdapter.getNamespaceURI(t);
				for (let r = 0; r < this.entries.length; r++) {
					let c = this.entries[r];
					if (c.type === bt.Marker) break;
					let { element: l } = c;
					if (
						this.treeAdapter.getTagName(l) === o &&
						this.treeAdapter.getNamespaceURI(l) === s
					) {
						let d = this.treeAdapter.getAttrList(l);
						d.length === a && i.push({ idx: r, attrs: d });
					}
				}
				return i;
			}
			_ensureNoahArkCondition(t) {
				if (this.entries.length < 3) return;
				let n = this.treeAdapter.getAttrList(t),
					i = this._getNoahArkConditionCandidates(t, n);
				if (i.length < 3) return;
				let a = new Map(n.map((s) => [s.name, s.value])),
					o = 0;
				for (let s = 0; s < i.length; s++) {
					let r = i[s];
					r.attrs.every((c) => a.get(c.name) === c.value) &&
						((o += 1), o >= 3 && this.entries.splice(r.idx, 1));
				}
			}
			insertMarker() {
				this.entries.unshift(Zc);
			}
			pushElement(t, n) {
				this._ensureNoahArkCondition(t),
					this.entries.unshift({
						type: bt.Element,
						element: t,
						token: n,
					});
			}
			insertElementAfterBookmark(t, n) {
				let i = this.entries.indexOf(this.bookmark);
				this.entries.splice(i, 0, {
					type: bt.Element,
					element: t,
					token: n,
				});
			}
			removeEntry(t) {
				let n = this.entries.indexOf(t);
				n >= 0 && this.entries.splice(n, 1);
			}
			clearToLastMarker() {
				let t = this.entries.indexOf(Zc);
				t >= 0
					? this.entries.splice(0, t + 1)
					: (this.entries.length = 0);
			}
			getElementEntryInScopeWithTagName(t) {
				let n = this.entries.find(
					(i) =>
						i.type === bt.Marker ||
						this.treeAdapter.getTagName(i.element) === t,
				);
				return n && n.type === bt.Element ? n : null;
			}
			getElementEntry(t) {
				return this.entries.find(
					(n) => n.type === bt.Element && n.element === t,
				);
			}
		};
	function $c(e) {
		return { nodeName: "#text", value: e, parentNode: null };
	}
	var Lt = {
		createDocument() {
			return {
				nodeName: "#document",
				mode: Qe.NO_QUIRKS,
				childNodes: [],
			};
		},
		createDocumentFragment() {
			return { nodeName: "#document-fragment", childNodes: [] };
		},
		createElement(e, t, n) {
			return {
				nodeName: e,
				tagName: e,
				attrs: n,
				namespaceURI: t,
				childNodes: [],
				parentNode: null,
			};
		},
		createCommentNode(e) {
			return { nodeName: "#comment", data: e, parentNode: null };
		},
		appendChild(e, t) {
			e.childNodes.push(t), (t.parentNode = e);
		},
		insertBefore(e, t, n) {
			let i = e.childNodes.indexOf(n);
			e.childNodes.splice(i, 0, t), (t.parentNode = e);
		},
		setTemplateContent(e, t) {
			e.content = t;
		},
		getTemplateContent(e) {
			return e.content;
		},
		setDocumentType(e, t, n, i) {
			let a = e.childNodes.find((o) => o.nodeName === "#documentType");
			if (a) (a.name = t), (a.publicId = n), (a.systemId = i);
			else {
				let o = {
					nodeName: "#documentType",
					name: t,
					publicId: n,
					systemId: i,
					parentNode: null,
				};
				Lt.appendChild(e, o);
			}
		},
		setDocumentMode(e, t) {
			e.mode = t;
		},
		getDocumentMode(e) {
			return e.mode;
		},
		detachNode(e) {
			if (e.parentNode) {
				let t = e.parentNode.childNodes.indexOf(e);
				e.parentNode.childNodes.splice(t, 1), (e.parentNode = null);
			}
		},
		insertText(e, t) {
			if (e.childNodes.length > 0) {
				let n = e.childNodes[e.childNodes.length - 1];
				if (Lt.isTextNode(n)) {
					n.value += t;
					return;
				}
			}
			Lt.appendChild(e, $c(t));
		},
		insertTextBefore(e, t, n) {
			let i = e.childNodes[e.childNodes.indexOf(n) - 1];
			i && Lt.isTextNode(i)
				? (i.value += t)
				: Lt.insertBefore(e, $c(t), n);
		},
		adoptAttributes(e, t) {
			let n = new Set(e.attrs.map((i) => i.name));
			for (let i = 0; i < t.length; i++)
				n.has(t[i].name) || e.attrs.push(t[i]);
		},
		getFirstChild(e) {
			return e.childNodes[0];
		},
		getChildNodes(e) {
			return e.childNodes;
		},
		getParentNode(e) {
			return e.parentNode;
		},
		getAttrList(e) {
			return e.attrs;
		},
		getTagName(e) {
			return e.tagName;
		},
		getNamespaceURI(e) {
			return e.namespaceURI;
		},
		getTextNodeContent(e) {
			return e.value;
		},
		getCommentNodeContent(e) {
			return e.data;
		},
		getDocumentTypeNodeName(e) {
			return e.name;
		},
		getDocumentTypeNodePublicId(e) {
			return e.publicId;
		},
		getDocumentTypeNodeSystemId(e) {
			return e.systemId;
		},
		isTextNode(e) {
			return e.nodeName === "#text";
		},
		isCommentNode(e) {
			return e.nodeName === "#comment";
		},
		isDocumentTypeNode(e) {
			return e.nodeName === "#documentType";
		},
		isElementNode(e) {
			return Object.prototype.hasOwnProperty.call(e, "tagName");
		},
		setNodeSourceCodeLocation(e, t) {
			e.sourceCodeLocation = t;
		},
		getNodeSourceCodeLocation(e) {
			return e.sourceCodeLocation;
		},
		updateNodeSourceCodeLocation(e, t) {
			e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
		},
	};
	var tl = "html",
		Gm = "about:legacy-compat",
		Xm = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",
		nl = [
			"+//silmaril//dtd html pro v0r11 19970101//",
			"-//as//dtd html 3.0 aswedit + extensions//",
			"-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
			"-//ietf//dtd html 2.0 level 1//",
			"-//ietf//dtd html 2.0 level 2//",
			"-//ietf//dtd html 2.0 strict level 1//",
			"-//ietf//dtd html 2.0 strict level 2//",
			"-//ietf//dtd html 2.0 strict//",
			"-//ietf//dtd html 2.0//",
			"-//ietf//dtd html 2.1e//",
			"-//ietf//dtd html 3.0//",
			"-//ietf//dtd html 3.2 final//",
			"-//ietf//dtd html 3.2//",
			"-//ietf//dtd html 3//",
			"-//ietf//dtd html level 0//",
			"-//ietf//dtd html level 1//",
			"-//ietf//dtd html level 2//",
			"-//ietf//dtd html level 3//",
			"-//ietf//dtd html strict level 0//",
			"-//ietf//dtd html strict level 1//",
			"-//ietf//dtd html strict level 2//",
			"-//ietf//dtd html strict level 3//",
			"-//ietf//dtd html strict//",
			"-//ietf//dtd html//",
			"-//metrius//dtd metrius presentational//",
			"-//microsoft//dtd internet explorer 2.0 html strict//",
			"-//microsoft//dtd internet explorer 2.0 html//",
			"-//microsoft//dtd internet explorer 2.0 tables//",
			"-//microsoft//dtd internet explorer 3.0 html strict//",
			"-//microsoft//dtd internet explorer 3.0 html//",
			"-//microsoft//dtd internet explorer 3.0 tables//",
			"-//netscape comm. corp.//dtd html//",
			"-//netscape comm. corp.//dtd strict html//",
			"-//o'reilly and associates//dtd html 2.0//",
			"-//o'reilly and associates//dtd html extended 1.0//",
			"-//o'reilly and associates//dtd html extended relaxed 1.0//",
			"-//sq//dtd html 2.0 hotmetal + extensions//",
			"-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
			"-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
			"-//spyglass//dtd html 2.0 extended//",
			"-//sun microsystems corp.//dtd hotjava html//",
			"-//sun microsystems corp.//dtd hotjava strict html//",
			"-//w3c//dtd html 3 1995-03-24//",
			"-//w3c//dtd html 3.2 draft//",
			"-//w3c//dtd html 3.2 final//",
			"-//w3c//dtd html 3.2//",
			"-//w3c//dtd html 3.2s draft//",
			"-//w3c//dtd html 4.0 frameset//",
			"-//w3c//dtd html 4.0 transitional//",
			"-//w3c//dtd html experimental 19960712//",
			"-//w3c//dtd html experimental 970421//",
			"-//w3c//dtd w3 html//",
			"-//w3o//dtd w3 html 3.0//",
			"-//webtechs//dtd mozilla html 2.0//",
			"-//webtechs//dtd mozilla html//",
		],
		Km = [
			...nl,
			"-//w3c//dtd html 4.01 frameset//",
			"-//w3c//dtd html 4.01 transitional//",
		],
		Qm = new Set([
			"-//w3o//dtd w3 html strict 3.0//en//",
			"-/w3c/dtd html 4.0 transitional/en",
			"html",
		]),
		il = [
			"-//w3c//dtd xhtml 1.0 frameset//",
			"-//w3c//dtd xhtml 1.0 transitional//",
		],
		Jm = [
			...il,
			"-//w3c//dtd html 4.01 frameset//",
			"-//w3c//dtd html 4.01 transitional//",
		];
	function el(e, t) {
		return t.some((n) => e.startsWith(n));
	}
	function al(e) {
		return (
			e.name === tl &&
			e.publicId === null &&
			(e.systemId === null || e.systemId === Gm)
		);
	}
	function ol(e) {
		if (e.name !== tl) return Qe.QUIRKS;
		let { systemId: t } = e;
		if (t && t.toLowerCase() === Xm) return Qe.QUIRKS;
		let { publicId: n } = e;
		if (n !== null) {
			if (((n = n.toLowerCase()), Qm.has(n))) return Qe.QUIRKS;
			let i = t === null ? Km : nl;
			if (el(n, i)) return Qe.QUIRKS;
			if (((i = t === null ? il : Jm), el(n, i)))
				return Qe.LIMITED_QUIRKS;
		}
		return Qe.NO_QUIRKS;
	}
	var sl = {
			TEXT_HTML: "text/html",
			APPLICATION_XML: "application/xhtml+xml",
		},
		$m = "definitionurl",
		e2 = "definitionURL",
		t2 = new Map(
			[
				"attributeName",
				"attributeType",
				"baseFrequency",
				"baseProfile",
				"calcMode",
				"clipPathUnits",
				"diffuseConstant",
				"edgeMode",
				"filterUnits",
				"glyphRef",
				"gradientTransform",
				"gradientUnits",
				"kernelMatrix",
				"kernelUnitLength",
				"keyPoints",
				"keySplines",
				"keyTimes",
				"lengthAdjust",
				"limitingConeAngle",
				"markerHeight",
				"markerUnits",
				"markerWidth",
				"maskContentUnits",
				"maskUnits",
				"numOctaves",
				"pathLength",
				"patternContentUnits",
				"patternTransform",
				"patternUnits",
				"pointsAtX",
				"pointsAtY",
				"pointsAtZ",
				"preserveAlpha",
				"preserveAspectRatio",
				"primitiveUnits",
				"refX",
				"refY",
				"repeatCount",
				"repeatDur",
				"requiredExtensions",
				"requiredFeatures",
				"specularConstant",
				"specularExponent",
				"spreadMethod",
				"startOffset",
				"stdDeviation",
				"stitchTiles",
				"surfaceScale",
				"systemLanguage",
				"tableValues",
				"targetX",
				"targetY",
				"textLength",
				"viewBox",
				"viewTarget",
				"xChannelSelector",
				"yChannelSelector",
				"zoomAndPan",
			].map((e) => [e.toLowerCase(), e]),
		),
		n2 = new Map([
			[
				"xlink:actuate",
				{ prefix: "xlink", name: "actuate", namespace: w.XLINK },
			],
			[
				"xlink:arcrole",
				{ prefix: "xlink", name: "arcrole", namespace: w.XLINK },
			],
			[
				"xlink:href",
				{ prefix: "xlink", name: "href", namespace: w.XLINK },
			],
			[
				"xlink:role",
				{ prefix: "xlink", name: "role", namespace: w.XLINK },
			],
			[
				"xlink:show",
				{ prefix: "xlink", name: "show", namespace: w.XLINK },
			],
			[
				"xlink:title",
				{ prefix: "xlink", name: "title", namespace: w.XLINK },
			],
			[
				"xlink:type",
				{ prefix: "xlink", name: "type", namespace: w.XLINK },
			],
			["xml:base", { prefix: "xml", name: "base", namespace: w.XML }],
			["xml:lang", { prefix: "xml", name: "lang", namespace: w.XML }],
			["xml:space", { prefix: "xml", name: "space", namespace: w.XML }],
			["xmlns", { prefix: "", name: "xmlns", namespace: w.XMLNS }],
			[
				"xmlns:xlink",
				{ prefix: "xmlns", name: "xlink", namespace: w.XMLNS },
			],
		]),
		i2 = new Map(
			[
				"altGlyph",
				"altGlyphDef",
				"altGlyphItem",
				"animateColor",
				"animateMotion",
				"animateTransform",
				"clipPath",
				"feBlend",
				"feColorMatrix",
				"feComponentTransfer",
				"feComposite",
				"feConvolveMatrix",
				"feDiffuseLighting",
				"feDisplacementMap",
				"feDistantLight",
				"feFlood",
				"feFuncA",
				"feFuncB",
				"feFuncG",
				"feFuncR",
				"feGaussianBlur",
				"feImage",
				"feMerge",
				"feMergeNode",
				"feMorphology",
				"feOffset",
				"fePointLight",
				"feSpecularLighting",
				"feSpotLight",
				"feTile",
				"feTurbulence",
				"foreignObject",
				"glyphRef",
				"linearGradient",
				"radialGradient",
				"textPath",
			].map((e) => [e.toLowerCase(), e]),
		),
		a2 = new Set([
			u.B,
			u.BIG,
			u.BLOCKQUOTE,
			u.BODY,
			u.BR,
			u.CENTER,
			u.CODE,
			u.DD,
			u.DIV,
			u.DL,
			u.DT,
			u.EM,
			u.EMBED,
			u.H1,
			u.H2,
			u.H3,
			u.H4,
			u.H5,
			u.H6,
			u.HEAD,
			u.HR,
			u.I,
			u.IMG,
			u.LI,
			u.LISTING,
			u.MENU,
			u.META,
			u.NOBR,
			u.OL,
			u.P,
			u.PRE,
			u.RUBY,
			u.S,
			u.SMALL,
			u.SPAN,
			u.STRONG,
			u.STRIKE,
			u.SUB,
			u.SUP,
			u.TABLE,
			u.TT,
			u.U,
			u.UL,
			u.VAR,
		]);
	function rl(e) {
		let t = e.tagID;
		return (
			(t === u.FONT &&
				e.attrs.some(
					({ name: i }) =>
						i === Nt.COLOR || i === Nt.SIZE || i === Nt.FACE,
				)) ||
			a2.has(t)
		);
	}
	function Ro(e) {
		for (let t = 0; t < e.attrs.length; t++)
			if (e.attrs[t].name === $m) {
				e.attrs[t].name = e2;
				break;
			}
	}
	function Oo(e) {
		for (let t = 0; t < e.attrs.length; t++) {
			let n = t2.get(e.attrs[t].name);
			n != null && (e.attrs[t].name = n);
		}
	}
	function $i(e) {
		for (let t = 0; t < e.attrs.length; t++) {
			let n = n2.get(e.attrs[t].name);
			n &&
				((e.attrs[t].prefix = n.prefix),
				(e.attrs[t].name = n.name),
				(e.attrs[t].namespace = n.namespace));
		}
	}
	function ul(e) {
		let t = i2.get(e.tagName);
		t != null && ((e.tagName = t), (e.tagID = sn(e.tagName)));
	}
	function o2(e, t) {
		return (
			t === w.MATHML &&
			(e === u.MI ||
				e === u.MO ||
				e === u.MN ||
				e === u.MS ||
				e === u.MTEXT)
		);
	}
	function s2(e, t, n) {
		if (t === w.MATHML && e === u.ANNOTATION_XML) {
			for (let i = 0; i < n.length; i++)
				if (n[i].name === Nt.ENCODING) {
					let a = n[i].value.toLowerCase();
					return a === sl.TEXT_HTML || a === sl.APPLICATION_XML;
				}
		}
		return (
			t === w.SVG &&
			(e === u.FOREIGN_OBJECT || e === u.DESC || e === u.TITLE)
		);
	}
	function cl(e, t, n, i) {
		return (
			((!i || i === w.HTML) && s2(e, t, n)) ||
			((!i || i === w.MATHML) && o2(e, t))
		);
	}
	var r2 = "hidden",
		u2 = 8,
		c2 = 3,
		v;
	(function (e) {
		(e[(e.INITIAL = 0)] = "INITIAL"),
			(e[(e.BEFORE_HTML = 1)] = "BEFORE_HTML"),
			(e[(e.BEFORE_HEAD = 2)] = "BEFORE_HEAD"),
			(e[(e.IN_HEAD = 3)] = "IN_HEAD"),
			(e[(e.IN_HEAD_NO_SCRIPT = 4)] = "IN_HEAD_NO_SCRIPT"),
			(e[(e.AFTER_HEAD = 5)] = "AFTER_HEAD"),
			(e[(e.IN_BODY = 6)] = "IN_BODY"),
			(e[(e.TEXT = 7)] = "TEXT"),
			(e[(e.IN_TABLE = 8)] = "IN_TABLE"),
			(e[(e.IN_TABLE_TEXT = 9)] = "IN_TABLE_TEXT"),
			(e[(e.IN_CAPTION = 10)] = "IN_CAPTION"),
			(e[(e.IN_COLUMN_GROUP = 11)] = "IN_COLUMN_GROUP"),
			(e[(e.IN_TABLE_BODY = 12)] = "IN_TABLE_BODY"),
			(e[(e.IN_ROW = 13)] = "IN_ROW"),
			(e[(e.IN_CELL = 14)] = "IN_CELL"),
			(e[(e.IN_SELECT = 15)] = "IN_SELECT"),
			(e[(e.IN_SELECT_IN_TABLE = 16)] = "IN_SELECT_IN_TABLE"),
			(e[(e.IN_TEMPLATE = 17)] = "IN_TEMPLATE"),
			(e[(e.AFTER_BODY = 18)] = "AFTER_BODY"),
			(e[(e.IN_FRAMESET = 19)] = "IN_FRAMESET"),
			(e[(e.AFTER_FRAMESET = 20)] = "AFTER_FRAMESET"),
			(e[(e.AFTER_AFTER_BODY = 21)] = "AFTER_AFTER_BODY"),
			(e[(e.AFTER_AFTER_FRAMESET = 22)] = "AFTER_AFTER_FRAMESET");
	})(v || (v = {}));
	var l2 = {
			startLine: -1,
			startCol: -1,
			startOffset: -1,
			endLine: -1,
			endCol: -1,
			endOffset: -1,
		},
		ml = new Set([u.TABLE, u.TBODY, u.TFOOT, u.THEAD, u.TR]),
		dl = {
			scriptingEnabled: !0,
			sourceCodeLocationInfo: !1,
			treeAdapter: Lt,
			onParseError: null,
		},
		vn = class {
			constructor(t, n, i = null, a = null) {
				(this.fragmentContext = i),
					(this.scriptHandler = a),
					(this.currentToken = null),
					(this.stopped = !1),
					(this.insertionMode = v.INITIAL),
					(this.originalInsertionMode = v.INITIAL),
					(this.headElement = null),
					(this.formElement = null),
					(this.currentNotInHTML = !1),
					(this.tmplInsertionModeStack = []),
					(this.pendingCharacterTokens = []),
					(this.hasNonWhitespacePendingCharacterToken = !1),
					(this.framesetOk = !0),
					(this.skipNextNewLine = !1),
					(this.fosterParentingEnabled = !1),
					(this.options = { ...dl, ...t }),
					(this.treeAdapter = this.options.treeAdapter),
					(this.onParseError = this.options.onParseError),
					this.onParseError &&
						(this.options.sourceCodeLocationInfo = !0),
					(this.document = n ?? this.treeAdapter.createDocument()),
					(this.tokenizer = new Jn(this.options, this)),
					(this.activeFormattingElements = new Zi(this.treeAdapter)),
					(this.fragmentContextID = i
						? sn(this.treeAdapter.getTagName(i))
						: u.UNKNOWN),
					this._setContextModes(
						i ?? this.document,
						this.fragmentContextID,
					),
					(this.openElements = new Ji(
						this.document,
						this.treeAdapter,
						this,
					));
			}
			static parse(t, n) {
				let i = new this(n);
				return i.tokenizer.write(t, !0), i.document;
			}
			static getFragmentParser(t, n) {
				let i = { ...dl, ...n };
				t ?? (t = i.treeAdapter.createElement(C.TEMPLATE, w.HTML, []));
				let a = i.treeAdapter.createElement("documentmock", w.HTML, []),
					o = new this(i, a, t);
				return (
					o.fragmentContextID === u.TEMPLATE &&
						o.tmplInsertionModeStack.unshift(v.IN_TEMPLATE),
					o._initTokenizerForFragmentParsing(),
					o._insertFakeRootElement(),
					o._resetInsertionMode(),
					o._findFormInFragmentContext(),
					o
				);
			}
			getFragment() {
				let t = this.treeAdapter.getFirstChild(this.document),
					n = this.treeAdapter.createDocumentFragment();
				return this._adoptNodes(t, n), n;
			}
			_err(t, n, i) {
				var a;
				if (!this.onParseError) return;
				let o = (a = t.location) !== null && a !== void 0 ? a : l2,
					s = {
						code: n,
						startLine: o.startLine,
						startCol: o.startCol,
						startOffset: o.startOffset,
						endLine: i ? o.startLine : o.endLine,
						endCol: i ? o.startCol : o.endCol,
						endOffset: i ? o.startOffset : o.endOffset,
					};
				this.onParseError(s);
			}
			onItemPush(t, n, i) {
				var a, o;
				(o = (a = this.treeAdapter).onItemPush) === null ||
					o === void 0 ||
					o.call(a, t),
					i &&
						this.openElements.stackTop > 0 &&
						this._setContextModes(t, n);
			}
			onItemPop(t, n) {
				var i, a;
				if (
					(this.options.sourceCodeLocationInfo &&
						this._setEndLocation(t, this.currentToken),
					(a = (i = this.treeAdapter).onItemPop) === null ||
						a === void 0 ||
						a.call(i, t, this.openElements.current),
					n)
				) {
					let o, s;
					this.openElements.stackTop === 0 && this.fragmentContext
						? ((o = this.fragmentContext),
							(s = this.fragmentContextID))
						: ({ current: o, currentTagId: s } = this.openElements),
						this._setContextModes(o, s);
				}
			}
			_setContextModes(t, n) {
				let i =
					t === this.document ||
					this.treeAdapter.getNamespaceURI(t) === w.HTML;
				(this.currentNotInHTML = !i),
					(this.tokenizer.inForeignNode =
						!i && !this._isIntegrationPoint(n, t));
			}
			_switchToTextParsing(t, n) {
				this._insertElement(t, w.HTML),
					(this.tokenizer.state = n),
					(this.originalInsertionMode = this.insertionMode),
					(this.insertionMode = v.TEXT);
			}
			switchToPlaintextParsing() {
				(this.insertionMode = v.TEXT),
					(this.originalInsertionMode = v.IN_BODY),
					(this.tokenizer.state = Je.PLAINTEXT);
			}
			_getAdjustedCurrentElement() {
				return this.openElements.stackTop === 0 && this.fragmentContext
					? this.fragmentContext
					: this.openElements.current;
			}
			_findFormInFragmentContext() {
				let t = this.fragmentContext;
				for (; t; ) {
					if (this.treeAdapter.getTagName(t) === C.FORM) {
						this.formElement = t;
						break;
					}
					t = this.treeAdapter.getParentNode(t);
				}
			}
			_initTokenizerForFragmentParsing() {
				if (
					!(
						!this.fragmentContext ||
						this.treeAdapter.getNamespaceURI(
							this.fragmentContext,
						) !== w.HTML
					)
				)
					switch (this.fragmentContextID) {
						case u.TITLE:
						case u.TEXTAREA: {
							this.tokenizer.state = Je.RCDATA;
							break;
						}
						case u.STYLE:
						case u.XMP:
						case u.IFRAME:
						case u.NOEMBED:
						case u.NOFRAMES:
						case u.NOSCRIPT: {
							this.tokenizer.state = Je.RAWTEXT;
							break;
						}
						case u.SCRIPT: {
							this.tokenizer.state = Je.SCRIPT_DATA;
							break;
						}
						case u.PLAINTEXT: {
							this.tokenizer.state = Je.PLAINTEXT;
							break;
						}
						default:
					}
			}
			_setDocumentType(t) {
				let n = t.name || "",
					i = t.publicId || "",
					a = t.systemId || "";
				if (
					(this.treeAdapter.setDocumentType(this.document, n, i, a),
					t.location)
				) {
					let s = this.treeAdapter
						.getChildNodes(this.document)
						.find((r) => this.treeAdapter.isDocumentTypeNode(r));
					s &&
						this.treeAdapter.setNodeSourceCodeLocation(
							s,
							t.location,
						);
				}
			}
			_attachElementToTree(t, n) {
				if (this.options.sourceCodeLocationInfo) {
					let i = n && { ...n, startTag: n };
					this.treeAdapter.setNodeSourceCodeLocation(t, i);
				}
				if (this._shouldFosterParentOnInsertion())
					this._fosterParentElement(t);
				else {
					let i = this.openElements.currentTmplContentOrNode;
					this.treeAdapter.appendChild(i, t);
				}
			}
			_appendElement(t, n) {
				let i = this.treeAdapter.createElement(t.tagName, n, t.attrs);
				this._attachElementToTree(i, t.location);
			}
			_insertElement(t, n) {
				let i = this.treeAdapter.createElement(t.tagName, n, t.attrs);
				this._attachElementToTree(i, t.location),
					this.openElements.push(i, t.tagID);
			}
			_insertFakeElement(t, n) {
				let i = this.treeAdapter.createElement(t, w.HTML, []);
				this._attachElementToTree(i, null),
					this.openElements.push(i, n);
			}
			_insertTemplate(t) {
				let n = this.treeAdapter.createElement(
						t.tagName,
						w.HTML,
						t.attrs,
					),
					i = this.treeAdapter.createDocumentFragment();
				this.treeAdapter.setTemplateContent(n, i),
					this._attachElementToTree(n, t.location),
					this.openElements.push(n, t.tagID),
					this.options.sourceCodeLocationInfo &&
						this.treeAdapter.setNodeSourceCodeLocation(i, null);
			}
			_insertFakeRootElement() {
				let t = this.treeAdapter.createElement(C.HTML, w.HTML, []);
				this.options.sourceCodeLocationInfo &&
					this.treeAdapter.setNodeSourceCodeLocation(t, null),
					this.treeAdapter.appendChild(this.openElements.current, t),
					this.openElements.push(t, u.HTML);
			}
			_appendCommentNode(t, n) {
				let i = this.treeAdapter.createCommentNode(t.data);
				this.treeAdapter.appendChild(n, i),
					this.options.sourceCodeLocationInfo &&
						this.treeAdapter.setNodeSourceCodeLocation(
							i,
							t.location,
						);
			}
			_insertCharacters(t) {
				let n, i;
				if (
					(this._shouldFosterParentOnInsertion()
						? (({ parent: n, beforeElement: i } =
								this._findFosterParentingLocation()),
							i
								? this.treeAdapter.insertTextBefore(
										n,
										t.chars,
										i,
									)
								: this.treeAdapter.insertText(n, t.chars))
						: ((n = this.openElements.currentTmplContentOrNode),
							this.treeAdapter.insertText(n, t.chars)),
					!t.location)
				)
					return;
				let a = this.treeAdapter.getChildNodes(n),
					o = i ? a.lastIndexOf(i) : a.length,
					s = a[o - 1];
				if (this.treeAdapter.getNodeSourceCodeLocation(s)) {
					let { endLine: c, endCol: l, endOffset: d } = t.location;
					this.treeAdapter.updateNodeSourceCodeLocation(s, {
						endLine: c,
						endCol: l,
						endOffset: d,
					});
				} else
					this.options.sourceCodeLocationInfo &&
						this.treeAdapter.setNodeSourceCodeLocation(
							s,
							t.location,
						);
			}
			_adoptNodes(t, n) {
				for (
					let i = this.treeAdapter.getFirstChild(t);
					i;
					i = this.treeAdapter.getFirstChild(t)
				)
					this.treeAdapter.detachNode(i),
						this.treeAdapter.appendChild(n, i);
			}
			_setEndLocation(t, n) {
				if (
					this.treeAdapter.getNodeSourceCodeLocation(t) &&
					n.location
				) {
					let i = n.location,
						a = this.treeAdapter.getTagName(t),
						o =
							n.type === ce.END_TAG && a === n.tagName
								? {
										endTag: { ...i },
										endLine: i.endLine,
										endCol: i.endCol,
										endOffset: i.endOffset,
									}
								: {
										endLine: i.startLine,
										endCol: i.startCol,
										endOffset: i.startOffset,
									};
					this.treeAdapter.updateNodeSourceCodeLocation(t, o);
				}
			}
			shouldProcessStartTagTokenInForeignContent(t) {
				if (!this.currentNotInHTML) return !1;
				let n, i;
				return (
					this.openElements.stackTop === 0 && this.fragmentContext
						? ((n = this.fragmentContext),
							(i = this.fragmentContextID))
						: ({ current: n, currentTagId: i } = this.openElements),
					t.tagID === u.SVG &&
					this.treeAdapter.getTagName(n) === C.ANNOTATION_XML &&
					this.treeAdapter.getNamespaceURI(n) === w.MATHML
						? !1
						: this.tokenizer.inForeignNode ||
							((t.tagID === u.MGLYPH ||
								t.tagID === u.MALIGNMARK) &&
								!this._isIntegrationPoint(i, n, w.HTML))
				);
			}
			_processToken(t) {
				switch (t.type) {
					case ce.CHARACTER: {
						this.onCharacter(t);
						break;
					}
					case ce.NULL_CHARACTER: {
						this.onNullCharacter(t);
						break;
					}
					case ce.COMMENT: {
						this.onComment(t);
						break;
					}
					case ce.DOCTYPE: {
						this.onDoctype(t);
						break;
					}
					case ce.START_TAG: {
						this._processStartTag(t);
						break;
					}
					case ce.END_TAG: {
						this.onEndTag(t);
						break;
					}
					case ce.EOF: {
						this.onEof(t);
						break;
					}
					case ce.WHITESPACE_CHARACTER: {
						this.onWhitespaceCharacter(t);
						break;
					}
				}
			}
			_isIntegrationPoint(t, n, i) {
				let a = this.treeAdapter.getNamespaceURI(n),
					o = this.treeAdapter.getAttrList(n);
				return cl(t, a, o, i);
			}
			_reconstructActiveFormattingElements() {
				let t = this.activeFormattingElements.entries.length;
				if (t) {
					let n = this.activeFormattingElements.entries.findIndex(
							(a) =>
								a.type === bt.Marker ||
								this.openElements.contains(a.element),
						),
						i = n < 0 ? t - 1 : n - 1;
					for (let a = i; a >= 0; a--) {
						let o = this.activeFormattingElements.entries[a];
						this._insertElement(
							o.token,
							this.treeAdapter.getNamespaceURI(o.element),
						),
							(o.element = this.openElements.current);
					}
				}
			}
			_closeTableCell() {
				this.openElements.generateImpliedEndTags(),
					this.openElements.popUntilTableCellPopped(),
					this.activeFormattingElements.clearToLastMarker(),
					(this.insertionMode = v.IN_ROW);
			}
			_closePElement() {
				this.openElements.generateImpliedEndTagsWithExclusion(u.P),
					this.openElements.popUntilTagNamePopped(u.P);
			}
			_resetInsertionMode() {
				for (let t = this.openElements.stackTop; t >= 0; t--)
					switch (
						t === 0 && this.fragmentContext
							? this.fragmentContextID
							: this.openElements.tagIDs[t]
					) {
						case u.TR: {
							this.insertionMode = v.IN_ROW;
							return;
						}
						case u.TBODY:
						case u.THEAD:
						case u.TFOOT: {
							this.insertionMode = v.IN_TABLE_BODY;
							return;
						}
						case u.CAPTION: {
							this.insertionMode = v.IN_CAPTION;
							return;
						}
						case u.COLGROUP: {
							this.insertionMode = v.IN_COLUMN_GROUP;
							return;
						}
						case u.TABLE: {
							this.insertionMode = v.IN_TABLE;
							return;
						}
						case u.BODY: {
							this.insertionMode = v.IN_BODY;
							return;
						}
						case u.FRAMESET: {
							this.insertionMode = v.IN_FRAMESET;
							return;
						}
						case u.SELECT: {
							this._resetInsertionModeForSelect(t);
							return;
						}
						case u.TEMPLATE: {
							this.insertionMode = this.tmplInsertionModeStack[0];
							return;
						}
						case u.HTML: {
							this.insertionMode = this.headElement
								? v.AFTER_HEAD
								: v.BEFORE_HEAD;
							return;
						}
						case u.TD:
						case u.TH: {
							if (t > 0) {
								this.insertionMode = v.IN_CELL;
								return;
							}
							break;
						}
						case u.HEAD: {
							if (t > 0) {
								this.insertionMode = v.IN_HEAD;
								return;
							}
							break;
						}
					}
				this.insertionMode = v.IN_BODY;
			}
			_resetInsertionModeForSelect(t) {
				if (t > 0)
					for (let n = t - 1; n > 0; n--) {
						let i = this.openElements.tagIDs[n];
						if (i === u.TEMPLATE) break;
						if (i === u.TABLE) {
							this.insertionMode = v.IN_SELECT_IN_TABLE;
							return;
						}
					}
				this.insertionMode = v.IN_SELECT;
			}
			_isElementCausesFosterParenting(t) {
				return ml.has(t);
			}
			_shouldFosterParentOnInsertion() {
				return (
					this.fosterParentingEnabled &&
					this._isElementCausesFosterParenting(
						this.openElements.currentTagId,
					)
				);
			}
			_findFosterParentingLocation() {
				for (let t = this.openElements.stackTop; t >= 0; t--) {
					let n = this.openElements.items[t];
					switch (this.openElements.tagIDs[t]) {
						case u.TEMPLATE: {
							if (this.treeAdapter.getNamespaceURI(n) === w.HTML)
								return {
									parent: this.treeAdapter.getTemplateContent(
										n,
									),
									beforeElement: null,
								};
							break;
						}
						case u.TABLE: {
							let i = this.treeAdapter.getParentNode(n);
							return i
								? { parent: i, beforeElement: n }
								: {
										parent: this.openElements.items[t - 1],
										beforeElement: null,
									};
						}
						default:
					}
				}
				return {
					parent: this.openElements.items[0],
					beforeElement: null,
				};
			}
			_fosterParentElement(t) {
				let n = this._findFosterParentingLocation();
				n.beforeElement
					? this.treeAdapter.insertBefore(
							n.parent,
							t,
							n.beforeElement,
						)
					: this.treeAdapter.appendChild(n.parent, t);
			}
			_isSpecialElement(t, n) {
				let i = this.treeAdapter.getNamespaceURI(t);
				return Yc[i].has(n);
			}
			onCharacter(t) {
				if (
					((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)
				) {
					H1(this, t);
					return;
				}
				switch (this.insertionMode) {
					case v.INITIAL: {
						Zn(this, t);
						break;
					}
					case v.BEFORE_HTML: {
						ei(this, t);
						break;
					}
					case v.BEFORE_HEAD: {
						ti(this, t);
						break;
					}
					case v.IN_HEAD: {
						ni(this, t);
						break;
					}
					case v.IN_HEAD_NO_SCRIPT: {
						ii(this, t);
						break;
					}
					case v.AFTER_HEAD: {
						ai(this, t);
						break;
					}
					case v.IN_BODY:
					case v.IN_CAPTION:
					case v.IN_CELL:
					case v.IN_TEMPLATE: {
						bl(this, t);
						break;
					}
					case v.TEXT:
					case v.IN_SELECT:
					case v.IN_SELECT_IN_TABLE: {
						this._insertCharacters(t);
						break;
					}
					case v.IN_TABLE:
					case v.IN_TABLE_BODY:
					case v.IN_ROW: {
						Bo(this, t);
						break;
					}
					case v.IN_TABLE_TEXT: {
						Tl(this, t);
						break;
					}
					case v.IN_COLUMN_GROUP: {
						ta(this, t);
						break;
					}
					case v.AFTER_BODY: {
						na(this, t);
						break;
					}
					case v.AFTER_AFTER_BODY: {
						ea(this, t);
						break;
					}
					default:
				}
			}
			onNullCharacter(t) {
				if (
					((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)
				) {
					U1(this, t);
					return;
				}
				switch (this.insertionMode) {
					case v.INITIAL: {
						Zn(this, t);
						break;
					}
					case v.BEFORE_HTML: {
						ei(this, t);
						break;
					}
					case v.BEFORE_HEAD: {
						ti(this, t);
						break;
					}
					case v.IN_HEAD: {
						ni(this, t);
						break;
					}
					case v.IN_HEAD_NO_SCRIPT: {
						ii(this, t);
						break;
					}
					case v.AFTER_HEAD: {
						ai(this, t);
						break;
					}
					case v.TEXT: {
						this._insertCharacters(t);
						break;
					}
					case v.IN_TABLE:
					case v.IN_TABLE_BODY:
					case v.IN_ROW: {
						Bo(this, t);
						break;
					}
					case v.IN_COLUMN_GROUP: {
						ta(this, t);
						break;
					}
					case v.AFTER_BODY: {
						na(this, t);
						break;
					}
					case v.AFTER_AFTER_BODY: {
						ea(this, t);
						break;
					}
					default:
				}
			}
			onComment(t) {
				if (((this.skipNextNewLine = !1), this.currentNotInHTML)) {
					Fo(this, t);
					return;
				}
				switch (this.insertionMode) {
					case v.INITIAL:
					case v.BEFORE_HTML:
					case v.BEFORE_HEAD:
					case v.IN_HEAD:
					case v.IN_HEAD_NO_SCRIPT:
					case v.AFTER_HEAD:
					case v.IN_BODY:
					case v.IN_TABLE:
					case v.IN_CAPTION:
					case v.IN_COLUMN_GROUP:
					case v.IN_TABLE_BODY:
					case v.IN_ROW:
					case v.IN_CELL:
					case v.IN_SELECT:
					case v.IN_SELECT_IN_TABLE:
					case v.IN_TEMPLATE:
					case v.IN_FRAMESET:
					case v.AFTER_FRAMESET: {
						Fo(this, t);
						break;
					}
					case v.IN_TABLE_TEXT: {
						$n(this, t);
						break;
					}
					case v.AFTER_BODY: {
						g2(this, t);
						break;
					}
					case v.AFTER_AFTER_BODY:
					case v.AFTER_AFTER_FRAMESET: {
						x2(this, t);
						break;
					}
					default:
				}
			}
			onDoctype(t) {
				switch (((this.skipNextNewLine = !1), this.insertionMode)) {
					case v.INITIAL: {
						E2(this, t);
						break;
					}
					case v.BEFORE_HEAD:
					case v.IN_HEAD:
					case v.IN_HEAD_NO_SCRIPT:
					case v.AFTER_HEAD: {
						this._err(t, _.misplacedDoctype);
						break;
					}
					case v.IN_TABLE_TEXT: {
						$n(this, t);
						break;
					}
					default:
				}
			}
			onStartTag(t) {
				(this.skipNextNewLine = !1),
					(this.currentToken = t),
					this._processStartTag(t),
					t.selfClosing &&
						!t.ackSelfClosing &&
						this._err(
							t,
							_.nonVoidHtmlElementStartTagWithTrailingSolidus,
						);
			}
			_processStartTag(t) {
				this.shouldProcessStartTagTokenInForeignContent(t)
					? j1(this, t)
					: this._startTagOutsideForeignContent(t);
			}
			_startTagOutsideForeignContent(t) {
				switch (this.insertionMode) {
					case v.INITIAL: {
						Zn(this, t);
						break;
					}
					case v.BEFORE_HTML: {
						v2(this, t);
						break;
					}
					case v.BEFORE_HEAD: {
						T2(this, t);
						break;
					}
					case v.IN_HEAD: {
						yt(this, t);
						break;
					}
					case v.IN_HEAD_NO_SCRIPT: {
						k2(this, t);
						break;
					}
					case v.AFTER_HEAD: {
						S2(this, t);
						break;
					}
					case v.IN_BODY: {
						Ze(this, t);
						break;
					}
					case v.IN_TABLE: {
						An(this, t);
						break;
					}
					case v.IN_TABLE_TEXT: {
						$n(this, t);
						break;
					}
					case v.IN_CAPTION: {
						C1(this, t);
						break;
					}
					case v.IN_COLUMN_GROUP: {
						jo(this, t);
						break;
					}
					case v.IN_TABLE_BODY: {
						oa(this, t);
						break;
					}
					case v.IN_ROW: {
						sa(this, t);
						break;
					}
					case v.IN_CELL: {
						_1(this, t);
						break;
					}
					case v.IN_SELECT: {
						kl(this, t);
						break;
					}
					case v.IN_SELECT_IN_TABLE: {
						D1(this, t);
						break;
					}
					case v.IN_TEMPLATE: {
						I1(this, t);
						break;
					}
					case v.AFTER_BODY: {
						L1(this, t);
						break;
					}
					case v.IN_FRAMESET: {
						P1(this, t);
						break;
					}
					case v.AFTER_FRAMESET: {
						O1(this, t);
						break;
					}
					case v.AFTER_AFTER_BODY: {
						F1(this, t);
						break;
					}
					case v.AFTER_AFTER_FRAMESET: {
						M1(this, t);
						break;
					}
					default:
				}
			}
			onEndTag(t) {
				(this.skipNextNewLine = !1),
					(this.currentToken = t),
					this.currentNotInHTML
						? q1(this, t)
						: this._endTagOutsideForeignContent(t);
			}
			_endTagOutsideForeignContent(t) {
				switch (this.insertionMode) {
					case v.INITIAL: {
						Zn(this, t);
						break;
					}
					case v.BEFORE_HTML: {
						A2(this, t);
						break;
					}
					case v.BEFORE_HEAD: {
						C2(this, t);
						break;
					}
					case v.IN_HEAD: {
						y2(this, t);
						break;
					}
					case v.IN_HEAD_NO_SCRIPT: {
						_2(this, t);
						break;
					}
					case v.AFTER_HEAD: {
						D2(this, t);
						break;
					}
					case v.IN_BODY: {
						aa(this, t);
						break;
					}
					case v.TEXT: {
						f1(this, t);
						break;
					}
					case v.IN_TABLE: {
						oi(this, t);
						break;
					}
					case v.IN_TABLE_TEXT: {
						$n(this, t);
						break;
					}
					case v.IN_CAPTION: {
						y1(this, t);
						break;
					}
					case v.IN_COLUMN_GROUP: {
						k1(this, t);
						break;
					}
					case v.IN_TABLE_BODY: {
						Mo(this, t);
						break;
					}
					case v.IN_ROW: {
						yl(this, t);
						break;
					}
					case v.IN_CELL: {
						S1(this, t);
						break;
					}
					case v.IN_SELECT: {
						_l(this, t);
						break;
					}
					case v.IN_SELECT_IN_TABLE: {
						w1(this, t);
						break;
					}
					case v.IN_TEMPLATE: {
						N1(this, t);
						break;
					}
					case v.AFTER_BODY: {
						Dl(this, t);
						break;
					}
					case v.IN_FRAMESET: {
						R1(this, t);
						break;
					}
					case v.AFTER_FRAMESET: {
						B1(this, t);
						break;
					}
					case v.AFTER_AFTER_BODY: {
						ea(this, t);
						break;
					}
					default:
				}
			}
			onEof(t) {
				switch (this.insertionMode) {
					case v.INITIAL: {
						Zn(this, t);
						break;
					}
					case v.BEFORE_HTML: {
						ei(this, t);
						break;
					}
					case v.BEFORE_HEAD: {
						ti(this, t);
						break;
					}
					case v.IN_HEAD: {
						ni(this, t);
						break;
					}
					case v.IN_HEAD_NO_SCRIPT: {
						ii(this, t);
						break;
					}
					case v.AFTER_HEAD: {
						ai(this, t);
						break;
					}
					case v.IN_BODY:
					case v.IN_TABLE:
					case v.IN_CAPTION:
					case v.IN_COLUMN_GROUP:
					case v.IN_TABLE_BODY:
					case v.IN_ROW:
					case v.IN_CELL:
					case v.IN_SELECT:
					case v.IN_SELECT_IN_TABLE: {
						vl(this, t);
						break;
					}
					case v.TEXT: {
						m1(this, t);
						break;
					}
					case v.IN_TABLE_TEXT: {
						$n(this, t);
						break;
					}
					case v.IN_TEMPLATE: {
						Sl(this, t);
						break;
					}
					case v.AFTER_BODY:
					case v.IN_FRAMESET:
					case v.AFTER_FRAMESET:
					case v.AFTER_AFTER_BODY:
					case v.AFTER_AFTER_FRAMESET: {
						Ho(this, t);
						break;
					}
					default:
				}
			}
			onWhitespaceCharacter(t) {
				if (
					this.skipNextNewLine &&
					((this.skipNextNewLine = !1),
					t.chars.charCodeAt(0) === h.LINE_FEED)
				) {
					if (t.chars.length === 1) return;
					t.chars = t.chars.substr(1);
				}
				if (this.tokenizer.inForeignNode) {
					this._insertCharacters(t);
					return;
				}
				switch (this.insertionMode) {
					case v.IN_HEAD:
					case v.IN_HEAD_NO_SCRIPT:
					case v.AFTER_HEAD:
					case v.TEXT:
					case v.IN_COLUMN_GROUP:
					case v.IN_SELECT:
					case v.IN_SELECT_IN_TABLE:
					case v.IN_FRAMESET:
					case v.AFTER_FRAMESET: {
						this._insertCharacters(t);
						break;
					}
					case v.IN_BODY:
					case v.IN_CAPTION:
					case v.IN_CELL:
					case v.IN_TEMPLATE:
					case v.AFTER_BODY:
					case v.AFTER_AFTER_BODY:
					case v.AFTER_AFTER_FRAMESET: {
						hl(this, t);
						break;
					}
					case v.IN_TABLE:
					case v.IN_TABLE_BODY:
					case v.IN_ROW: {
						Bo(this, t);
						break;
					}
					case v.IN_TABLE_TEXT: {
						Al(this, t);
						break;
					}
					default:
				}
			}
		};
	function d2(e, t) {
		let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(
			t.tagName,
		);
		return (
			n
				? e.openElements.contains(n.element)
					? e.openElements.hasInScope(t.tagID) || (n = null)
					: (e.activeFormattingElements.removeEntry(n), (n = null))
				: El(e, t),
			n
		);
	}
	function p2(e, t) {
		let n = null,
			i = e.openElements.stackTop;
		for (; i >= 0; i--) {
			let a = e.openElements.items[i];
			if (a === t.element) break;
			e._isSpecialElement(a, e.openElements.tagIDs[i]) && (n = a);
		}
		return (
			n ||
				(e.openElements.shortenToLength(i < 0 ? 0 : i),
				e.activeFormattingElements.removeEntry(t)),
			n
		);
	}
	function f2(e, t, n) {
		let i = t,
			a = e.openElements.getCommonAncestor(t);
		for (let o = 0, s = a; s !== n; o++, s = a) {
			a = e.openElements.getCommonAncestor(s);
			let r = e.activeFormattingElements.getElementEntry(s),
				c = r && o >= c2;
			!r || c
				? (c && e.activeFormattingElements.removeEntry(r),
					e.openElements.remove(s))
				: ((s = m2(e, r)),
					i === t && (e.activeFormattingElements.bookmark = r),
					e.treeAdapter.detachNode(i),
					e.treeAdapter.appendChild(s, i),
					(i = s));
		}
		return i;
	}
	function m2(e, t) {
		let n = e.treeAdapter.getNamespaceURI(t.element),
			i = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
		return e.openElements.replace(t.element, i), (t.element = i), i;
	}
	function h2(e, t, n) {
		let i = e.treeAdapter.getTagName(t),
			a = sn(i);
		if (e._isElementCausesFosterParenting(a)) e._fosterParentElement(n);
		else {
			let o = e.treeAdapter.getNamespaceURI(t);
			a === u.TEMPLATE &&
				o === w.HTML &&
				(t = e.treeAdapter.getTemplateContent(t)),
				e.treeAdapter.appendChild(t, n);
		}
	}
	function b2(e, t, n) {
		let i = e.treeAdapter.getNamespaceURI(n.element),
			{ token: a } = n,
			o = e.treeAdapter.createElement(a.tagName, i, a.attrs);
		e._adoptNodes(t, o),
			e.treeAdapter.appendChild(t, o),
			e.activeFormattingElements.insertElementAfterBookmark(o, a),
			e.activeFormattingElements.removeEntry(n),
			e.openElements.remove(n.element),
			e.openElements.insertAfter(t, o, a.tagID);
	}
	function Uo(e, t) {
		for (let n = 0; n < u2; n++) {
			let i = d2(e, t);
			if (!i) break;
			let a = p2(e, i);
			if (!a) break;
			e.activeFormattingElements.bookmark = i;
			let o = f2(e, a, i.element),
				s = e.openElements.getCommonAncestor(i.element);
			e.treeAdapter.detachNode(o), s && h2(e, s, o), b2(e, a, i);
		}
	}
	function Fo(e, t) {
		e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
	}
	function g2(e, t) {
		e._appendCommentNode(t, e.openElements.items[0]);
	}
	function x2(e, t) {
		e._appendCommentNode(t, e.document);
	}
	function Ho(e, t) {
		if (((e.stopped = !0), t.location)) {
			let n = e.fragmentContext ? 0 : 2;
			for (let i = e.openElements.stackTop; i >= n; i--)
				e._setEndLocation(e.openElements.items[i], t);
			if (!e.fragmentContext && e.openElements.stackTop >= 0) {
				let i = e.openElements.items[0],
					a = e.treeAdapter.getNodeSourceCodeLocation(i);
				if (
					a &&
					!a.endTag &&
					(e._setEndLocation(i, t), e.openElements.stackTop >= 1)
				) {
					let o = e.openElements.items[1],
						s = e.treeAdapter.getNodeSourceCodeLocation(o);
					s && !s.endTag && e._setEndLocation(o, t);
				}
			}
		}
	}
	function E2(e, t) {
		e._setDocumentType(t);
		let n = t.forceQuirks ? Qe.QUIRKS : ol(t);
		al(t) || e._err(t, _.nonConformingDoctype),
			e.treeAdapter.setDocumentMode(e.document, n),
			(e.insertionMode = v.BEFORE_HTML);
	}
	function Zn(e, t) {
		e._err(t, _.missingDoctype, !0),
			e.treeAdapter.setDocumentMode(e.document, Qe.QUIRKS),
			(e.insertionMode = v.BEFORE_HTML),
			e._processToken(t);
	}
	function v2(e, t) {
		t.tagID === u.HTML
			? (e._insertElement(t, w.HTML), (e.insertionMode = v.BEFORE_HEAD))
			: ei(e, t);
	}
	function A2(e, t) {
		let n = t.tagID;
		(n === u.HTML || n === u.HEAD || n === u.BODY || n === u.BR) &&
			ei(e, t);
	}
	function ei(e, t) {
		e._insertFakeRootElement(),
			(e.insertionMode = v.BEFORE_HEAD),
			e._processToken(t);
	}
	function T2(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				Ze(e, t);
				break;
			}
			case u.HEAD: {
				e._insertElement(t, w.HTML),
					(e.headElement = e.openElements.current),
					(e.insertionMode = v.IN_HEAD);
				break;
			}
			default:
				ti(e, t);
		}
	}
	function C2(e, t) {
		let n = t.tagID;
		n === u.HEAD || n === u.BODY || n === u.HTML || n === u.BR
			? ti(e, t)
			: e._err(t, _.endTagWithoutMatchingOpenElement);
	}
	function ti(e, t) {
		e._insertFakeElement(C.HEAD, u.HEAD),
			(e.headElement = e.openElements.current),
			(e.insertionMode = v.IN_HEAD),
			e._processToken(t);
	}
	function yt(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				Ze(e, t);
				break;
			}
			case u.BASE:
			case u.BASEFONT:
			case u.BGSOUND:
			case u.LINK:
			case u.META: {
				e._appendElement(t, w.HTML), (t.ackSelfClosing = !0);
				break;
			}
			case u.TITLE: {
				e._switchToTextParsing(t, Je.RCDATA);
				break;
			}
			case u.NOSCRIPT: {
				e.options.scriptingEnabled
					? e._switchToTextParsing(t, Je.RAWTEXT)
					: (e._insertElement(t, w.HTML),
						(e.insertionMode = v.IN_HEAD_NO_SCRIPT));
				break;
			}
			case u.NOFRAMES:
			case u.STYLE: {
				e._switchToTextParsing(t, Je.RAWTEXT);
				break;
			}
			case u.SCRIPT: {
				e._switchToTextParsing(t, Je.SCRIPT_DATA);
				break;
			}
			case u.TEMPLATE: {
				e._insertTemplate(t),
					e.activeFormattingElements.insertMarker(),
					(e.framesetOk = !1),
					(e.insertionMode = v.IN_TEMPLATE),
					e.tmplInsertionModeStack.unshift(v.IN_TEMPLATE);
				break;
			}
			case u.HEAD: {
				e._err(t, _.misplacedStartTagForHeadElement);
				break;
			}
			default:
				ni(e, t);
		}
	}
	function y2(e, t) {
		switch (t.tagID) {
			case u.HEAD: {
				e.openElements.pop(), (e.insertionMode = v.AFTER_HEAD);
				break;
			}
			case u.BODY:
			case u.BR:
			case u.HTML: {
				ni(e, t);
				break;
			}
			case u.TEMPLATE: {
				rn(e, t);
				break;
			}
			default:
				e._err(t, _.endTagWithoutMatchingOpenElement);
		}
	}
	function rn(e, t) {
		e.openElements.tmplCount > 0
			? (e.openElements.generateImpliedEndTagsThoroughly(),
				e.openElements.currentTagId !== u.TEMPLATE &&
					e._err(t, _.closingOfElementWithOpenChildElements),
				e.openElements.popUntilTagNamePopped(u.TEMPLATE),
				e.activeFormattingElements.clearToLastMarker(),
				e.tmplInsertionModeStack.shift(),
				e._resetInsertionMode())
			: e._err(t, _.endTagWithoutMatchingOpenElement);
	}
	function ni(e, t) {
		e.openElements.pop(),
			(e.insertionMode = v.AFTER_HEAD),
			e._processToken(t);
	}
	function k2(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				Ze(e, t);
				break;
			}
			case u.BASEFONT:
			case u.BGSOUND:
			case u.HEAD:
			case u.LINK:
			case u.META:
			case u.NOFRAMES:
			case u.STYLE: {
				yt(e, t);
				break;
			}
			case u.NOSCRIPT: {
				e._err(t, _.nestedNoscriptInHead);
				break;
			}
			default:
				ii(e, t);
		}
	}
	function _2(e, t) {
		switch (t.tagID) {
			case u.NOSCRIPT: {
				e.openElements.pop(), (e.insertionMode = v.IN_HEAD);
				break;
			}
			case u.BR: {
				ii(e, t);
				break;
			}
			default:
				e._err(t, _.endTagWithoutMatchingOpenElement);
		}
	}
	function ii(e, t) {
		let n =
			t.type === ce.EOF
				? _.openElementsLeftAfterEof
				: _.disallowedContentInNoscriptInHead;
		e._err(t, n),
			e.openElements.pop(),
			(e.insertionMode = v.IN_HEAD),
			e._processToken(t);
	}
	function S2(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				Ze(e, t);
				break;
			}
			case u.BODY: {
				e._insertElement(t, w.HTML),
					(e.framesetOk = !1),
					(e.insertionMode = v.IN_BODY);
				break;
			}
			case u.FRAMESET: {
				e._insertElement(t, w.HTML), (e.insertionMode = v.IN_FRAMESET);
				break;
			}
			case u.BASE:
			case u.BASEFONT:
			case u.BGSOUND:
			case u.LINK:
			case u.META:
			case u.NOFRAMES:
			case u.SCRIPT:
			case u.STYLE:
			case u.TEMPLATE:
			case u.TITLE: {
				e._err(t, _.abandonedHeadElementChild),
					e.openElements.push(e.headElement, u.HEAD),
					yt(e, t),
					e.openElements.remove(e.headElement);
				break;
			}
			case u.HEAD: {
				e._err(t, _.misplacedStartTagForHeadElement);
				break;
			}
			default:
				ai(e, t);
		}
	}
	function D2(e, t) {
		switch (t.tagID) {
			case u.BODY:
			case u.HTML:
			case u.BR: {
				ai(e, t);
				break;
			}
			case u.TEMPLATE: {
				rn(e, t);
				break;
			}
			default:
				e._err(t, _.endTagWithoutMatchingOpenElement);
		}
	}
	function ai(e, t) {
		e._insertFakeElement(C.BODY, u.BODY),
			(e.insertionMode = v.IN_BODY),
			ia(e, t);
	}
	function ia(e, t) {
		switch (t.type) {
			case ce.CHARACTER: {
				bl(e, t);
				break;
			}
			case ce.WHITESPACE_CHARACTER: {
				hl(e, t);
				break;
			}
			case ce.COMMENT: {
				Fo(e, t);
				break;
			}
			case ce.START_TAG: {
				Ze(e, t);
				break;
			}
			case ce.END_TAG: {
				aa(e, t);
				break;
			}
			case ce.EOF: {
				vl(e, t);
				break;
			}
			default:
		}
	}
	function hl(e, t) {
		e._reconstructActiveFormattingElements(), e._insertCharacters(t);
	}
	function bl(e, t) {
		e._reconstructActiveFormattingElements(),
			e._insertCharacters(t),
			(e.framesetOk = !1);
	}
	function w2(e, t) {
		e.openElements.tmplCount === 0 &&
			e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
	}
	function I2(e, t) {
		let n = e.openElements.tryPeekProperlyNestedBodyElement();
		n &&
			e.openElements.tmplCount === 0 &&
			((e.framesetOk = !1), e.treeAdapter.adoptAttributes(n, t.attrs));
	}
	function N2(e, t) {
		let n = e.openElements.tryPeekProperlyNestedBodyElement();
		e.framesetOk &&
			n &&
			(e.treeAdapter.detachNode(n),
			e.openElements.popAllUpToHtmlElement(),
			e._insertElement(t, w.HTML),
			(e.insertionMode = v.IN_FRAMESET));
	}
	function L2(e, t) {
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._insertElement(t, w.HTML);
	}
	function P2(e, t) {
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			Xi(e.openElements.currentTagId) && e.openElements.pop(),
			e._insertElement(t, w.HTML);
	}
	function R2(e, t) {
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._insertElement(t, w.HTML),
			(e.skipNextNewLine = !0),
			(e.framesetOk = !1);
	}
	function O2(e, t) {
		let n = e.openElements.tmplCount > 0;
		(!e.formElement || n) &&
			(e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._insertElement(t, w.HTML),
			n || (e.formElement = e.openElements.current));
	}
	function B2(e, t) {
		e.framesetOk = !1;
		let n = t.tagID;
		for (let i = e.openElements.stackTop; i >= 0; i--) {
			let a = e.openElements.tagIDs[i];
			if (
				(n === u.LI && a === u.LI) ||
				((n === u.DD || n === u.DT) && (a === u.DD || a === u.DT))
			) {
				e.openElements.generateImpliedEndTagsWithExclusion(a),
					e.openElements.popUntilTagNamePopped(a);
				break;
			}
			if (
				a !== u.ADDRESS &&
				a !== u.DIV &&
				a !== u.P &&
				e._isSpecialElement(e.openElements.items[i], a)
			)
				break;
		}
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._insertElement(t, w.HTML);
	}
	function F2(e, t) {
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._insertElement(t, w.HTML),
			(e.tokenizer.state = Je.PLAINTEXT);
	}
	function M2(e, t) {
		e.openElements.hasInScope(u.BUTTON) &&
			(e.openElements.generateImpliedEndTags(),
			e.openElements.popUntilTagNamePopped(u.BUTTON)),
			e._reconstructActiveFormattingElements(),
			e._insertElement(t, w.HTML),
			(e.framesetOk = !1);
	}
	function U2(e, t) {
		let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(
			C.A,
		);
		n &&
			(Uo(e, t),
			e.openElements.remove(n.element),
			e.activeFormattingElements.removeEntry(n)),
			e._reconstructActiveFormattingElements(),
			e._insertElement(t, w.HTML),
			e.activeFormattingElements.pushElement(e.openElements.current, t);
	}
	function H2(e, t) {
		e._reconstructActiveFormattingElements(),
			e._insertElement(t, w.HTML),
			e.activeFormattingElements.pushElement(e.openElements.current, t);
	}
	function j2(e, t) {
		e._reconstructActiveFormattingElements(),
			e.openElements.hasInScope(u.NOBR) &&
				(Uo(e, t), e._reconstructActiveFormattingElements()),
			e._insertElement(t, w.HTML),
			e.activeFormattingElements.pushElement(e.openElements.current, t);
	}
	function q2(e, t) {
		e._reconstructActiveFormattingElements(),
			e._insertElement(t, w.HTML),
			e.activeFormattingElements.insertMarker(),
			(e.framesetOk = !1);
	}
	function z2(e, t) {
		e.treeAdapter.getDocumentMode(e.document) !== Qe.QUIRKS &&
			e.openElements.hasInButtonScope(u.P) &&
			e._closePElement(),
			e._insertElement(t, w.HTML),
			(e.framesetOk = !1),
			(e.insertionMode = v.IN_TABLE);
	}
	function gl(e, t) {
		e._reconstructActiveFormattingElements(),
			e._appendElement(t, w.HTML),
			(e.framesetOk = !1),
			(t.ackSelfClosing = !0);
	}
	function xl(e) {
		let t = Gi(e, Nt.TYPE);
		return t != null && t.toLowerCase() === r2;
	}
	function Y2(e, t) {
		e._reconstructActiveFormattingElements(),
			e._appendElement(t, w.HTML),
			xl(t) || (e.framesetOk = !1),
			(t.ackSelfClosing = !0);
	}
	function V2(e, t) {
		e._appendElement(t, w.HTML), (t.ackSelfClosing = !0);
	}
	function W2(e, t) {
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._appendElement(t, w.HTML),
			(e.framesetOk = !1),
			(t.ackSelfClosing = !0);
	}
	function G2(e, t) {
		(t.tagName = C.IMG), (t.tagID = u.IMG), gl(e, t);
	}
	function X2(e, t) {
		e._insertElement(t, w.HTML),
			(e.skipNextNewLine = !0),
			(e.tokenizer.state = Je.RCDATA),
			(e.originalInsertionMode = e.insertionMode),
			(e.framesetOk = !1),
			(e.insertionMode = v.TEXT);
	}
	function K2(e, t) {
		e.openElements.hasInButtonScope(u.P) && e._closePElement(),
			e._reconstructActiveFormattingElements(),
			(e.framesetOk = !1),
			e._switchToTextParsing(t, Je.RAWTEXT);
	}
	function Q2(e, t) {
		(e.framesetOk = !1), e._switchToTextParsing(t, Je.RAWTEXT);
	}
	function pl(e, t) {
		e._switchToTextParsing(t, Je.RAWTEXT);
	}
	function J2(e, t) {
		e._reconstructActiveFormattingElements(),
			e._insertElement(t, w.HTML),
			(e.framesetOk = !1),
			(e.insertionMode =
				e.insertionMode === v.IN_TABLE ||
				e.insertionMode === v.IN_CAPTION ||
				e.insertionMode === v.IN_TABLE_BODY ||
				e.insertionMode === v.IN_ROW ||
				e.insertionMode === v.IN_CELL
					? v.IN_SELECT_IN_TABLE
					: v.IN_SELECT);
	}
	function Z2(e, t) {
		e.openElements.currentTagId === u.OPTION && e.openElements.pop(),
			e._reconstructActiveFormattingElements(),
			e._insertElement(t, w.HTML);
	}
	function $2(e, t) {
		e.openElements.hasInScope(u.RUBY) &&
			e.openElements.generateImpliedEndTags(),
			e._insertElement(t, w.HTML);
	}
	function e1(e, t) {
		e.openElements.hasInScope(u.RUBY) &&
			e.openElements.generateImpliedEndTagsWithExclusion(u.RTC),
			e._insertElement(t, w.HTML);
	}
	function t1(e, t) {
		e._reconstructActiveFormattingElements(),
			Ro(t),
			$i(t),
			t.selfClosing
				? e._appendElement(t, w.MATHML)
				: e._insertElement(t, w.MATHML),
			(t.ackSelfClosing = !0);
	}
	function n1(e, t) {
		e._reconstructActiveFormattingElements(),
			Oo(t),
			$i(t),
			t.selfClosing
				? e._appendElement(t, w.SVG)
				: e._insertElement(t, w.SVG),
			(t.ackSelfClosing = !0);
	}
	function fl(e, t) {
		e._reconstructActiveFormattingElements(), e._insertElement(t, w.HTML);
	}
	function Ze(e, t) {
		switch (t.tagID) {
			case u.I:
			case u.S:
			case u.B:
			case u.U:
			case u.EM:
			case u.TT:
			case u.BIG:
			case u.CODE:
			case u.FONT:
			case u.SMALL:
			case u.STRIKE:
			case u.STRONG: {
				H2(e, t);
				break;
			}
			case u.A: {
				U2(e, t);
				break;
			}
			case u.H1:
			case u.H2:
			case u.H3:
			case u.H4:
			case u.H5:
			case u.H6: {
				P2(e, t);
				break;
			}
			case u.P:
			case u.DL:
			case u.OL:
			case u.UL:
			case u.DIV:
			case u.DIR:
			case u.NAV:
			case u.MAIN:
			case u.MENU:
			case u.ASIDE:
			case u.CENTER:
			case u.FIGURE:
			case u.FOOTER:
			case u.HEADER:
			case u.HGROUP:
			case u.DIALOG:
			case u.DETAILS:
			case u.ADDRESS:
			case u.ARTICLE:
			case u.SECTION:
			case u.SUMMARY:
			case u.FIELDSET:
			case u.BLOCKQUOTE:
			case u.FIGCAPTION: {
				L2(e, t);
				break;
			}
			case u.LI:
			case u.DD:
			case u.DT: {
				B2(e, t);
				break;
			}
			case u.BR:
			case u.IMG:
			case u.WBR:
			case u.AREA:
			case u.EMBED:
			case u.KEYGEN: {
				gl(e, t);
				break;
			}
			case u.HR: {
				W2(e, t);
				break;
			}
			case u.RB:
			case u.RTC: {
				$2(e, t);
				break;
			}
			case u.RT:
			case u.RP: {
				e1(e, t);
				break;
			}
			case u.PRE:
			case u.LISTING: {
				R2(e, t);
				break;
			}
			case u.XMP: {
				K2(e, t);
				break;
			}
			case u.SVG: {
				n1(e, t);
				break;
			}
			case u.HTML: {
				w2(e, t);
				break;
			}
			case u.BASE:
			case u.LINK:
			case u.META:
			case u.STYLE:
			case u.TITLE:
			case u.SCRIPT:
			case u.BGSOUND:
			case u.BASEFONT:
			case u.TEMPLATE: {
				yt(e, t);
				break;
			}
			case u.BODY: {
				I2(e, t);
				break;
			}
			case u.FORM: {
				O2(e, t);
				break;
			}
			case u.NOBR: {
				j2(e, t);
				break;
			}
			case u.MATH: {
				t1(e, t);
				break;
			}
			case u.TABLE: {
				z2(e, t);
				break;
			}
			case u.INPUT: {
				Y2(e, t);
				break;
			}
			case u.PARAM:
			case u.TRACK:
			case u.SOURCE: {
				V2(e, t);
				break;
			}
			case u.IMAGE: {
				G2(e, t);
				break;
			}
			case u.BUTTON: {
				M2(e, t);
				break;
			}
			case u.APPLET:
			case u.OBJECT:
			case u.MARQUEE: {
				q2(e, t);
				break;
			}
			case u.IFRAME: {
				Q2(e, t);
				break;
			}
			case u.SELECT: {
				J2(e, t);
				break;
			}
			case u.OPTION:
			case u.OPTGROUP: {
				Z2(e, t);
				break;
			}
			case u.NOEMBED: {
				pl(e, t);
				break;
			}
			case u.FRAMESET: {
				N2(e, t);
				break;
			}
			case u.TEXTAREA: {
				X2(e, t);
				break;
			}
			case u.NOSCRIPT: {
				e.options.scriptingEnabled ? pl(e, t) : fl(e, t);
				break;
			}
			case u.PLAINTEXT: {
				F2(e, t);
				break;
			}
			case u.COL:
			case u.TH:
			case u.TD:
			case u.TR:
			case u.HEAD:
			case u.FRAME:
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD:
			case u.CAPTION:
			case u.COLGROUP:
				break;
			default:
				fl(e, t);
		}
	}
	function i1(e, t) {
		if (
			e.openElements.hasInScope(u.BODY) &&
			((e.insertionMode = v.AFTER_BODY), e.options.sourceCodeLocationInfo)
		) {
			let n = e.openElements.tryPeekProperlyNestedBodyElement();
			n && e._setEndLocation(n, t);
		}
	}
	function a1(e, t) {
		e.openElements.hasInScope(u.BODY) &&
			((e.insertionMode = v.AFTER_BODY), Dl(e, t));
	}
	function o1(e, t) {
		let n = t.tagID;
		e.openElements.hasInScope(n) &&
			(e.openElements.generateImpliedEndTags(),
			e.openElements.popUntilTagNamePopped(n));
	}
	function s1(e) {
		let t = e.openElements.tmplCount > 0,
			{ formElement: n } = e;
		t || (e.formElement = null),
			(n || t) &&
				e.openElements.hasInScope(u.FORM) &&
				(e.openElements.generateImpliedEndTags(),
				t
					? e.openElements.popUntilTagNamePopped(u.FORM)
					: n && e.openElements.remove(n));
	}
	function r1(e) {
		e.openElements.hasInButtonScope(u.P) || e._insertFakeElement(C.P, u.P),
			e._closePElement();
	}
	function u1(e) {
		e.openElements.hasInListItemScope(u.LI) &&
			(e.openElements.generateImpliedEndTagsWithExclusion(u.LI),
			e.openElements.popUntilTagNamePopped(u.LI));
	}
	function c1(e, t) {
		let n = t.tagID;
		e.openElements.hasInScope(n) &&
			(e.openElements.generateImpliedEndTagsWithExclusion(n),
			e.openElements.popUntilTagNamePopped(n));
	}
	function l1(e) {
		e.openElements.hasNumberedHeaderInScope() &&
			(e.openElements.generateImpliedEndTags(),
			e.openElements.popUntilNumberedHeaderPopped());
	}
	function d1(e, t) {
		let n = t.tagID;
		e.openElements.hasInScope(n) &&
			(e.openElements.generateImpliedEndTags(),
			e.openElements.popUntilTagNamePopped(n),
			e.activeFormattingElements.clearToLastMarker());
	}
	function p1(e) {
		e._reconstructActiveFormattingElements(),
			e._insertFakeElement(C.BR, u.BR),
			e.openElements.pop(),
			(e.framesetOk = !1);
	}
	function El(e, t) {
		let n = t.tagName,
			i = t.tagID;
		for (let a = e.openElements.stackTop; a > 0; a--) {
			let o = e.openElements.items[a],
				s = e.openElements.tagIDs[a];
			if (
				i === s &&
				(i !== u.UNKNOWN || e.treeAdapter.getTagName(o) === n)
			) {
				e.openElements.generateImpliedEndTagsWithExclusion(i),
					e.openElements.stackTop >= a &&
						e.openElements.shortenToLength(a);
				break;
			}
			if (e._isSpecialElement(o, s)) break;
		}
	}
	function aa(e, t) {
		switch (t.tagID) {
			case u.A:
			case u.B:
			case u.I:
			case u.S:
			case u.U:
			case u.EM:
			case u.TT:
			case u.BIG:
			case u.CODE:
			case u.FONT:
			case u.NOBR:
			case u.SMALL:
			case u.STRIKE:
			case u.STRONG: {
				Uo(e, t);
				break;
			}
			case u.P: {
				r1(e);
				break;
			}
			case u.DL:
			case u.UL:
			case u.OL:
			case u.DIR:
			case u.DIV:
			case u.NAV:
			case u.PRE:
			case u.MAIN:
			case u.MENU:
			case u.ASIDE:
			case u.BUTTON:
			case u.CENTER:
			case u.FIGURE:
			case u.FOOTER:
			case u.HEADER:
			case u.HGROUP:
			case u.DIALOG:
			case u.ADDRESS:
			case u.ARTICLE:
			case u.DETAILS:
			case u.SECTION:
			case u.SUMMARY:
			case u.LISTING:
			case u.FIELDSET:
			case u.BLOCKQUOTE:
			case u.FIGCAPTION: {
				o1(e, t);
				break;
			}
			case u.LI: {
				u1(e);
				break;
			}
			case u.DD:
			case u.DT: {
				c1(e, t);
				break;
			}
			case u.H1:
			case u.H2:
			case u.H3:
			case u.H4:
			case u.H5:
			case u.H6: {
				l1(e);
				break;
			}
			case u.BR: {
				p1(e);
				break;
			}
			case u.BODY: {
				i1(e, t);
				break;
			}
			case u.HTML: {
				a1(e, t);
				break;
			}
			case u.FORM: {
				s1(e);
				break;
			}
			case u.APPLET:
			case u.OBJECT:
			case u.MARQUEE: {
				d1(e, t);
				break;
			}
			case u.TEMPLATE: {
				rn(e, t);
				break;
			}
			default:
				El(e, t);
		}
	}
	function vl(e, t) {
		e.tmplInsertionModeStack.length > 0 ? Sl(e, t) : Ho(e, t);
	}
	function f1(e, t) {
		var n;
		t.tagID === u.SCRIPT &&
			((n = e.scriptHandler) === null ||
				n === void 0 ||
				n.call(e, e.openElements.current)),
			e.openElements.pop(),
			(e.insertionMode = e.originalInsertionMode);
	}
	function m1(e, t) {
		e._err(t, _.eofInElementThatCanContainOnlyText),
			e.openElements.pop(),
			(e.insertionMode = e.originalInsertionMode),
			e.onEof(t);
	}
	function Bo(e, t) {
		if (ml.has(e.openElements.currentTagId))
			switch (
				((e.pendingCharacterTokens.length = 0),
				(e.hasNonWhitespacePendingCharacterToken = !1),
				(e.originalInsertionMode = e.insertionMode),
				(e.insertionMode = v.IN_TABLE_TEXT),
				t.type)
			) {
				case ce.CHARACTER: {
					Tl(e, t);
					break;
				}
				case ce.WHITESPACE_CHARACTER: {
					Al(e, t);
					break;
				}
			}
		else si(e, t);
	}
	function h1(e, t) {
		e.openElements.clearBackToTableContext(),
			e.activeFormattingElements.insertMarker(),
			e._insertElement(t, w.HTML),
			(e.insertionMode = v.IN_CAPTION);
	}
	function b1(e, t) {
		e.openElements.clearBackToTableContext(),
			e._insertElement(t, w.HTML),
			(e.insertionMode = v.IN_COLUMN_GROUP);
	}
	function g1(e, t) {
		e.openElements.clearBackToTableContext(),
			e._insertFakeElement(C.COLGROUP, u.COLGROUP),
			(e.insertionMode = v.IN_COLUMN_GROUP),
			jo(e, t);
	}
	function x1(e, t) {
		e.openElements.clearBackToTableContext(),
			e._insertElement(t, w.HTML),
			(e.insertionMode = v.IN_TABLE_BODY);
	}
	function E1(e, t) {
		e.openElements.clearBackToTableContext(),
			e._insertFakeElement(C.TBODY, u.TBODY),
			(e.insertionMode = v.IN_TABLE_BODY),
			oa(e, t);
	}
	function v1(e, t) {
		e.openElements.hasInTableScope(u.TABLE) &&
			(e.openElements.popUntilTagNamePopped(u.TABLE),
			e._resetInsertionMode(),
			e._processStartTag(t));
	}
	function A1(e, t) {
		xl(t) ? e._appendElement(t, w.HTML) : si(e, t), (t.ackSelfClosing = !0);
	}
	function T1(e, t) {
		!e.formElement &&
			e.openElements.tmplCount === 0 &&
			(e._insertElement(t, w.HTML),
			(e.formElement = e.openElements.current),
			e.openElements.pop());
	}
	function An(e, t) {
		switch (t.tagID) {
			case u.TD:
			case u.TH:
			case u.TR: {
				E1(e, t);
				break;
			}
			case u.STYLE:
			case u.SCRIPT:
			case u.TEMPLATE: {
				yt(e, t);
				break;
			}
			case u.COL: {
				g1(e, t);
				break;
			}
			case u.FORM: {
				T1(e, t);
				break;
			}
			case u.TABLE: {
				v1(e, t);
				break;
			}
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD: {
				x1(e, t);
				break;
			}
			case u.INPUT: {
				A1(e, t);
				break;
			}
			case u.CAPTION: {
				h1(e, t);
				break;
			}
			case u.COLGROUP: {
				b1(e, t);
				break;
			}
			default:
				si(e, t);
		}
	}
	function oi(e, t) {
		switch (t.tagID) {
			case u.TABLE: {
				e.openElements.hasInTableScope(u.TABLE) &&
					(e.openElements.popUntilTagNamePopped(u.TABLE),
					e._resetInsertionMode());
				break;
			}
			case u.TEMPLATE: {
				rn(e, t);
				break;
			}
			case u.BODY:
			case u.CAPTION:
			case u.COL:
			case u.COLGROUP:
			case u.HTML:
			case u.TBODY:
			case u.TD:
			case u.TFOOT:
			case u.TH:
			case u.THEAD:
			case u.TR:
				break;
			default:
				si(e, t);
		}
	}
	function si(e, t) {
		let n = e.fosterParentingEnabled;
		(e.fosterParentingEnabled = !0),
			ia(e, t),
			(e.fosterParentingEnabled = n);
	}
	function Al(e, t) {
		e.pendingCharacterTokens.push(t);
	}
	function Tl(e, t) {
		e.pendingCharacterTokens.push(t),
			(e.hasNonWhitespacePendingCharacterToken = !0);
	}
	function $n(e, t) {
		let n = 0;
		if (e.hasNonWhitespacePendingCharacterToken)
			for (; n < e.pendingCharacterTokens.length; n++)
				si(e, e.pendingCharacterTokens[n]);
		else
			for (; n < e.pendingCharacterTokens.length; n++)
				e._insertCharacters(e.pendingCharacterTokens[n]);
		(e.insertionMode = e.originalInsertionMode), e._processToken(t);
	}
	var Cl = new Set([
		u.CAPTION,
		u.COL,
		u.COLGROUP,
		u.TBODY,
		u.TD,
		u.TFOOT,
		u.TH,
		u.THEAD,
		u.TR,
	]);
	function C1(e, t) {
		let n = t.tagID;
		Cl.has(n)
			? e.openElements.hasInTableScope(u.CAPTION) &&
				(e.openElements.generateImpliedEndTags(),
				e.openElements.popUntilTagNamePopped(u.CAPTION),
				e.activeFormattingElements.clearToLastMarker(),
				(e.insertionMode = v.IN_TABLE),
				An(e, t))
			: Ze(e, t);
	}
	function y1(e, t) {
		let n = t.tagID;
		switch (n) {
			case u.CAPTION:
			case u.TABLE: {
				e.openElements.hasInTableScope(u.CAPTION) &&
					(e.openElements.generateImpliedEndTags(),
					e.openElements.popUntilTagNamePopped(u.CAPTION),
					e.activeFormattingElements.clearToLastMarker(),
					(e.insertionMode = v.IN_TABLE),
					n === u.TABLE && oi(e, t));
				break;
			}
			case u.BODY:
			case u.COL:
			case u.COLGROUP:
			case u.HTML:
			case u.TBODY:
			case u.TD:
			case u.TFOOT:
			case u.TH:
			case u.THEAD:
			case u.TR:
				break;
			default:
				aa(e, t);
		}
	}
	function jo(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				Ze(e, t);
				break;
			}
			case u.COL: {
				e._appendElement(t, w.HTML), (t.ackSelfClosing = !0);
				break;
			}
			case u.TEMPLATE: {
				yt(e, t);
				break;
			}
			default:
				ta(e, t);
		}
	}
	function k1(e, t) {
		switch (t.tagID) {
			case u.COLGROUP: {
				e.openElements.currentTagId === u.COLGROUP &&
					(e.openElements.pop(), (e.insertionMode = v.IN_TABLE));
				break;
			}
			case u.TEMPLATE: {
				rn(e, t);
				break;
			}
			case u.COL:
				break;
			default:
				ta(e, t);
		}
	}
	function ta(e, t) {
		e.openElements.currentTagId === u.COLGROUP &&
			(e.openElements.pop(),
			(e.insertionMode = v.IN_TABLE),
			e._processToken(t));
	}
	function oa(e, t) {
		switch (t.tagID) {
			case u.TR: {
				e.openElements.clearBackToTableBodyContext(),
					e._insertElement(t, w.HTML),
					(e.insertionMode = v.IN_ROW);
				break;
			}
			case u.TH:
			case u.TD: {
				e.openElements.clearBackToTableBodyContext(),
					e._insertFakeElement(C.TR, u.TR),
					(e.insertionMode = v.IN_ROW),
					sa(e, t);
				break;
			}
			case u.CAPTION:
			case u.COL:
			case u.COLGROUP:
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD: {
				e.openElements.hasTableBodyContextInTableScope() &&
					(e.openElements.clearBackToTableBodyContext(),
					e.openElements.pop(),
					(e.insertionMode = v.IN_TABLE),
					An(e, t));
				break;
			}
			default:
				An(e, t);
		}
	}
	function Mo(e, t) {
		let n = t.tagID;
		switch (t.tagID) {
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD: {
				e.openElements.hasInTableScope(n) &&
					(e.openElements.clearBackToTableBodyContext(),
					e.openElements.pop(),
					(e.insertionMode = v.IN_TABLE));
				break;
			}
			case u.TABLE: {
				e.openElements.hasTableBodyContextInTableScope() &&
					(e.openElements.clearBackToTableBodyContext(),
					e.openElements.pop(),
					(e.insertionMode = v.IN_TABLE),
					oi(e, t));
				break;
			}
			case u.BODY:
			case u.CAPTION:
			case u.COL:
			case u.COLGROUP:
			case u.HTML:
			case u.TD:
			case u.TH:
			case u.TR:
				break;
			default:
				oi(e, t);
		}
	}
	function sa(e, t) {
		switch (t.tagID) {
			case u.TH:
			case u.TD: {
				e.openElements.clearBackToTableRowContext(),
					e._insertElement(t, w.HTML),
					(e.insertionMode = v.IN_CELL),
					e.activeFormattingElements.insertMarker();
				break;
			}
			case u.CAPTION:
			case u.COL:
			case u.COLGROUP:
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD:
			case u.TR: {
				e.openElements.hasInTableScope(u.TR) &&
					(e.openElements.clearBackToTableRowContext(),
					e.openElements.pop(),
					(e.insertionMode = v.IN_TABLE_BODY),
					oa(e, t));
				break;
			}
			default:
				An(e, t);
		}
	}
	function yl(e, t) {
		switch (t.tagID) {
			case u.TR: {
				e.openElements.hasInTableScope(u.TR) &&
					(e.openElements.clearBackToTableRowContext(),
					e.openElements.pop(),
					(e.insertionMode = v.IN_TABLE_BODY));
				break;
			}
			case u.TABLE: {
				e.openElements.hasInTableScope(u.TR) &&
					(e.openElements.clearBackToTableRowContext(),
					e.openElements.pop(),
					(e.insertionMode = v.IN_TABLE_BODY),
					Mo(e, t));
				break;
			}
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD: {
				(e.openElements.hasInTableScope(t.tagID) ||
					e.openElements.hasInTableScope(u.TR)) &&
					(e.openElements.clearBackToTableRowContext(),
					e.openElements.pop(),
					(e.insertionMode = v.IN_TABLE_BODY),
					Mo(e, t));
				break;
			}
			case u.BODY:
			case u.CAPTION:
			case u.COL:
			case u.COLGROUP:
			case u.HTML:
			case u.TD:
			case u.TH:
				break;
			default:
				oi(e, t);
		}
	}
	function _1(e, t) {
		let n = t.tagID;
		Cl.has(n)
			? (e.openElements.hasInTableScope(u.TD) ||
					e.openElements.hasInTableScope(u.TH)) &&
				(e._closeTableCell(), sa(e, t))
			: Ze(e, t);
	}
	function S1(e, t) {
		let n = t.tagID;
		switch (n) {
			case u.TD:
			case u.TH: {
				e.openElements.hasInTableScope(n) &&
					(e.openElements.generateImpliedEndTags(),
					e.openElements.popUntilTagNamePopped(n),
					e.activeFormattingElements.clearToLastMarker(),
					(e.insertionMode = v.IN_ROW));
				break;
			}
			case u.TABLE:
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD:
			case u.TR: {
				e.openElements.hasInTableScope(n) &&
					(e._closeTableCell(), yl(e, t));
				break;
			}
			case u.BODY:
			case u.CAPTION:
			case u.COL:
			case u.COLGROUP:
			case u.HTML:
				break;
			default:
				aa(e, t);
		}
	}
	function kl(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				Ze(e, t);
				break;
			}
			case u.OPTION: {
				e.openElements.currentTagId === u.OPTION &&
					e.openElements.pop(),
					e._insertElement(t, w.HTML);
				break;
			}
			case u.OPTGROUP: {
				e.openElements.currentTagId === u.OPTION &&
					e.openElements.pop(),
					e.openElements.currentTagId === u.OPTGROUP &&
						e.openElements.pop(),
					e._insertElement(t, w.HTML);
				break;
			}
			case u.INPUT:
			case u.KEYGEN:
			case u.TEXTAREA:
			case u.SELECT: {
				e.openElements.hasInSelectScope(u.SELECT) &&
					(e.openElements.popUntilTagNamePopped(u.SELECT),
					e._resetInsertionMode(),
					t.tagID !== u.SELECT && e._processStartTag(t));
				break;
			}
			case u.SCRIPT:
			case u.TEMPLATE: {
				yt(e, t);
				break;
			}
			default:
		}
	}
	function _l(e, t) {
		switch (t.tagID) {
			case u.OPTGROUP: {
				e.openElements.stackTop > 0 &&
					e.openElements.currentTagId === u.OPTION &&
					e.openElements.tagIDs[e.openElements.stackTop - 1] ===
						u.OPTGROUP &&
					e.openElements.pop(),
					e.openElements.currentTagId === u.OPTGROUP &&
						e.openElements.pop();
				break;
			}
			case u.OPTION: {
				e.openElements.currentTagId === u.OPTION &&
					e.openElements.pop();
				break;
			}
			case u.SELECT: {
				e.openElements.hasInSelectScope(u.SELECT) &&
					(e.openElements.popUntilTagNamePopped(u.SELECT),
					e._resetInsertionMode());
				break;
			}
			case u.TEMPLATE: {
				rn(e, t);
				break;
			}
			default:
		}
	}
	function D1(e, t) {
		let n = t.tagID;
		n === u.CAPTION ||
		n === u.TABLE ||
		n === u.TBODY ||
		n === u.TFOOT ||
		n === u.THEAD ||
		n === u.TR ||
		n === u.TD ||
		n === u.TH
			? (e.openElements.popUntilTagNamePopped(u.SELECT),
				e._resetInsertionMode(),
				e._processStartTag(t))
			: kl(e, t);
	}
	function w1(e, t) {
		let n = t.tagID;
		n === u.CAPTION ||
		n === u.TABLE ||
		n === u.TBODY ||
		n === u.TFOOT ||
		n === u.THEAD ||
		n === u.TR ||
		n === u.TD ||
		n === u.TH
			? e.openElements.hasInTableScope(n) &&
				(e.openElements.popUntilTagNamePopped(u.SELECT),
				e._resetInsertionMode(),
				e.onEndTag(t))
			: _l(e, t);
	}
	function I1(e, t) {
		switch (t.tagID) {
			case u.BASE:
			case u.BASEFONT:
			case u.BGSOUND:
			case u.LINK:
			case u.META:
			case u.NOFRAMES:
			case u.SCRIPT:
			case u.STYLE:
			case u.TEMPLATE:
			case u.TITLE: {
				yt(e, t);
				break;
			}
			case u.CAPTION:
			case u.COLGROUP:
			case u.TBODY:
			case u.TFOOT:
			case u.THEAD: {
				(e.tmplInsertionModeStack[0] = v.IN_TABLE),
					(e.insertionMode = v.IN_TABLE),
					An(e, t);
				break;
			}
			case u.COL: {
				(e.tmplInsertionModeStack[0] = v.IN_COLUMN_GROUP),
					(e.insertionMode = v.IN_COLUMN_GROUP),
					jo(e, t);
				break;
			}
			case u.TR: {
				(e.tmplInsertionModeStack[0] = v.IN_TABLE_BODY),
					(e.insertionMode = v.IN_TABLE_BODY),
					oa(e, t);
				break;
			}
			case u.TD:
			case u.TH: {
				(e.tmplInsertionModeStack[0] = v.IN_ROW),
					(e.insertionMode = v.IN_ROW),
					sa(e, t);
				break;
			}
			default:
				(e.tmplInsertionModeStack[0] = v.IN_BODY),
					(e.insertionMode = v.IN_BODY),
					Ze(e, t);
		}
	}
	function N1(e, t) {
		t.tagID === u.TEMPLATE && rn(e, t);
	}
	function Sl(e, t) {
		e.openElements.tmplCount > 0
			? (e.openElements.popUntilTagNamePopped(u.TEMPLATE),
				e.activeFormattingElements.clearToLastMarker(),
				e.tmplInsertionModeStack.shift(),
				e._resetInsertionMode(),
				e.onEof(t))
			: Ho(e, t);
	}
	function L1(e, t) {
		t.tagID === u.HTML ? Ze(e, t) : na(e, t);
	}
	function Dl(e, t) {
		var n;
		if (t.tagID === u.HTML) {
			if (
				(e.fragmentContext || (e.insertionMode = v.AFTER_AFTER_BODY),
				e.options.sourceCodeLocationInfo &&
					e.openElements.tagIDs[0] === u.HTML)
			) {
				e._setEndLocation(e.openElements.items[0], t);
				let i = e.openElements.items[1];
				i &&
					!(
						!(
							(n = e.treeAdapter.getNodeSourceCodeLocation(i)) ===
								null || n === void 0
						) && n.endTag
					) &&
					e._setEndLocation(i, t);
			}
		} else na(e, t);
	}
	function na(e, t) {
		(e.insertionMode = v.IN_BODY), ia(e, t);
	}
	function P1(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				Ze(e, t);
				break;
			}
			case u.FRAMESET: {
				e._insertElement(t, w.HTML);
				break;
			}
			case u.FRAME: {
				e._appendElement(t, w.HTML), (t.ackSelfClosing = !0);
				break;
			}
			case u.NOFRAMES: {
				yt(e, t);
				break;
			}
			default:
		}
	}
	function R1(e, t) {
		t.tagID === u.FRAMESET &&
			!e.openElements.isRootHtmlElementCurrent() &&
			(e.openElements.pop(),
			!e.fragmentContext &&
				e.openElements.currentTagId !== u.FRAMESET &&
				(e.insertionMode = v.AFTER_FRAMESET));
	}
	function O1(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				Ze(e, t);
				break;
			}
			case u.NOFRAMES: {
				yt(e, t);
				break;
			}
			default:
		}
	}
	function B1(e, t) {
		t.tagID === u.HTML && (e.insertionMode = v.AFTER_AFTER_FRAMESET);
	}
	function F1(e, t) {
		t.tagID === u.HTML ? Ze(e, t) : ea(e, t);
	}
	function ea(e, t) {
		(e.insertionMode = v.IN_BODY), ia(e, t);
	}
	function M1(e, t) {
		switch (t.tagID) {
			case u.HTML: {
				Ze(e, t);
				break;
			}
			case u.NOFRAMES: {
				yt(e, t);
				break;
			}
			default:
		}
	}
	function U1(e, t) {
		(t.chars = ye), e._insertCharacters(t);
	}
	function H1(e, t) {
		e._insertCharacters(t), (e.framesetOk = !1);
	}
	function wl(e) {
		for (
			;
			e.treeAdapter.getNamespaceURI(e.openElements.current) !== w.HTML &&
			!e._isIntegrationPoint(
				e.openElements.currentTagId,
				e.openElements.current,
			);

		)
			e.openElements.pop();
	}
	function j1(e, t) {
		if (rl(t)) wl(e), e._startTagOutsideForeignContent(t);
		else {
			let n = e._getAdjustedCurrentElement(),
				i = e.treeAdapter.getNamespaceURI(n);
			i === w.MATHML ? Ro(t) : i === w.SVG && (ul(t), Oo(t)),
				$i(t),
				t.selfClosing ? e._appendElement(t, i) : e._insertElement(t, i),
				(t.ackSelfClosing = !0);
		}
	}
	function q1(e, t) {
		if (t.tagID === u.P || t.tagID === u.BR) {
			wl(e), e._endTagOutsideForeignContent(t);
			return;
		}
		for (let n = e.openElements.stackTop; n > 0; n--) {
			let i = e.openElements.items[n];
			if (e.treeAdapter.getNamespaceURI(i) === w.HTML) {
				e._endTagOutsideForeignContent(t);
				break;
			}
			let a = e.treeAdapter.getTagName(i);
			if (a.toLowerCase() === t.tagName) {
				(t.tagName = a), e.openElements.shortenToLength(n);
				break;
			}
		}
	}
	var z1 = new Map([
			[34, "&quot;"],
			[38, "&amp;"],
			[39, "&apos;"],
			[60, "&lt;"],
			[62, "&gt;"],
		]),
		Kv =
			String.prototype.codePointAt != null
				? (e, t) => e.codePointAt(t)
				: (e, t) =>
						(e.charCodeAt(t) & 64512) === 55296
							? (e.charCodeAt(t) - 55296) * 1024 +
								e.charCodeAt(t + 1) -
								56320 +
								65536
							: e.charCodeAt(t);
	function qo(e, t) {
		return function (i) {
			let a,
				o = 0,
				s = "";
			for (; (a = e.exec(i)); )
				o !== a.index && (s += i.substring(o, a.index)),
					(s += t.get(a[0].charCodeAt(0))),
					(o = a.index + 1);
			return s + i.substring(o);
		};
	}
	var Qv = qo(/[&<>'"]/g, z1),
		Il = qo(
			/["&\u00A0]/g,
			new Map([
				[34, "&quot;"],
				[38, "&amp;"],
				[160, "&nbsp;"],
			]),
		),
		Nl = qo(
			/[&<>\u00A0]/g,
			new Map([
				[38, "&amp;"],
				[60, "&lt;"],
				[62, "&gt;"],
				[160, "&nbsp;"],
			]),
		);
	var Y1 = new Set([
		C.AREA,
		C.BASE,
		C.BASEFONT,
		C.BGSOUND,
		C.BR,
		C.COL,
		C.EMBED,
		C.FRAME,
		C.HR,
		C.IMG,
		C.INPUT,
		C.KEYGEN,
		C.LINK,
		C.META,
		C.PARAM,
		C.SOURCE,
		C.TRACK,
		C.WBR,
	]);
	function Ll(e, t) {
		return (
			t.treeAdapter.isElementNode(e) &&
			t.treeAdapter.getNamespaceURI(e) === w.HTML &&
			Y1.has(t.treeAdapter.getTagName(e))
		);
	}
	var V1 = { treeAdapter: Lt, scriptingEnabled: !0 };
	function Tn(e, t) {
		let n = { ...V1, ...t };
		return Ll(e, n) ? "" : Pl(e, n);
	}
	function Pl(e, t) {
		let n = "",
			i =
				t.treeAdapter.isElementNode(e) &&
				t.treeAdapter.getTagName(e) === C.TEMPLATE &&
				t.treeAdapter.getNamespaceURI(e) === w.HTML
					? t.treeAdapter.getTemplateContent(e)
					: e,
			a = t.treeAdapter.getChildNodes(i);
		if (a) for (let o of a) n += W1(o, t);
		return n;
	}
	function W1(e, t) {
		return t.treeAdapter.isElementNode(e)
			? G1(e, t)
			: t.treeAdapter.isTextNode(e)
				? K1(e, t)
				: t.treeAdapter.isCommentNode(e)
					? Q1(e, t)
					: t.treeAdapter.isDocumentTypeNode(e)
						? J1(e, t)
						: "";
	}
	function G1(e, t) {
		let n = t.treeAdapter.getTagName(e);
		return `<${n}${X1(e, t)}>${Ll(e, t) ? "" : `${Pl(e, t)}</${n}>`}`;
	}
	function X1(e, { treeAdapter: t }) {
		let n = "";
		for (let i of t.getAttrList(e)) {
			if (((n += " "), !i.namespace)) n += i.name;
			else
				switch (i.namespace) {
					case w.XML: {
						n += `xml:${i.name}`;
						break;
					}
					case w.XMLNS: {
						i.name !== "xmlns" && (n += "xmlns:"), (n += i.name);
						break;
					}
					case w.XLINK: {
						n += `xlink:${i.name}`;
						break;
					}
					default:
						n += `${i.prefix}:${i.name}`;
				}
			n += `="${Il(i.value)}"`;
		}
		return n;
	}
	function K1(e, t) {
		let { treeAdapter: n } = t,
			i = n.getTextNodeContent(e),
			a = n.getParentNode(e),
			o = a && n.isElementNode(a) && n.getTagName(a);
		return o && n.getNamespaceURI(a) === w.HTML && Vc(o, t.scriptingEnabled)
			? i
			: Nl(i);
	}
	function Q1(e, { treeAdapter: t }) {
		return `<!--${t.getCommentNodeContent(e)}-->`;
	}
	function J1(e, { treeAdapter: t }) {
		return `<!DOCTYPE ${t.getDocumentTypeNodeName(e)}>`;
	}
	function zo(e, t) {
		return vn.parse(e, t);
	}
	function ri(e, t, n) {
		typeof e == "string" && ((n = t), (t = e), (e = null));
		let i = vn.getFragmentParser(e, n);
		return i.tokenizer.write(t, !0), i.getFragment();
	}
	var Yo = class extends Go.default {
			constructor(t) {
				super(),
					(this.ctx = t),
					(this.rewriteUrl = t.rewriteUrl),
					(this.sourceUrl = t.sourceUrl);
			}
			rewrite(t, n = {}) {
				return (
					t &&
					this.recast(
						t,
						(i) => {
							i.tagName && this.emit("element", i, "rewrite"),
								i.attr && this.emit("attr", i, "rewrite"),
								i.nodeName === "#text" &&
									this.emit("text", i, "rewrite");
						},
						n,
					)
				);
			}
			source(t, n = {}) {
				return (
					t &&
					this.recast(
						t,
						(i) => {
							i.tagName && this.emit("element", i, "source"),
								i.attr && this.emit("attr", i, "source"),
								i.nodeName === "#text" &&
									this.emit("text", i, "source");
						},
						n,
					)
				);
			}
			recast(t, n, i = {}) {
				try {
					let a = (i.document ? zo : ri)(new String(t).toString());
					return this.iterate(a, n, i), Tn(a);
				} catch {
					return t;
				}
			}
			iterate(t, n, i) {
				if (!t) return t;
				if (t.tagName) {
					let a = new ra(t, !1, i);
					if ((n(a), t.attrs))
						for (let o of t.attrs) o.skip || n(new Vo(a, o, i));
				}
				if (t.childNodes)
					for (let a of t.childNodes) a.skip || this.iterate(a, n, i);
				return (
					t.nodeName === "#text" &&
						n(new Wo(t, new ra(t.parentNode), !1, i)),
					t
				);
			}
			wrapSrcset(t, n = this.ctx.meta) {
				return t
					.split(",")
					.map((i) => {
						let a = i.trimStart().split(" ");
						return (
							a[0] && (a[0] = this.ctx.rewriteUrl(a[0], n)),
							a.join(" ")
						);
					})
					.join(", ");
			}
			unwrapSrcset(t, n = this.ctx.meta) {
				return t
					.split(",")
					.map((i) => {
						let a = i.trimStart().split(" ");
						return (
							a[0] && (a[0] = this.ctx.sourceUrl(a[0], n)),
							a.join(" ")
						);
					})
					.join(", ");
			}
			static parse = zo;
			static parseFragment = ri;
			static serialize = Tn;
		},
		ra = class e extends Go.default {
			constructor(t, n = !1, i = {}) {
				super(), (this.stream = n), (this.node = t), (this.options = i);
			}
			setAttribute(t, n) {
				for (let i of this.attrs)
					if (i.name === t) return (i.value = n), !0;
				this.attrs.push({ name: t, value: n });
			}
			getAttribute(t) {
				return (this.attrs.find((i) => i.name === t) || {}).value;
			}
			hasAttribute(t) {
				return !!this.attrs.find((n) => n.name === t);
			}
			removeAttribute(t) {
				let n = this.attrs.findIndex((i) => i.name === t);
				typeof n < "u" && this.attrs.splice(n, 1);
			}
			get tagName() {
				return this.node.tagName;
			}
			set tagName(t) {
				this.node.tagName = t;
			}
			get childNodes() {
				return this.stream ? null : this.node.childNodes;
			}
			get innerHTML() {
				return this.stream
					? null
					: Tn({
							nodeName: "#document-fragment",
							childNodes: this.childNodes,
						});
			}
			set innerHTML(t) {
				this.stream || (this.node.childNodes = ri(t).childNodes);
			}
			get outerHTML() {
				return this.stream
					? null
					: Tn({
							nodeName: "#document-fragment",
							childNodes: [this],
						});
			}
			set outerHTML(t) {
				this.stream ||
					this.parentNode.childNodes.splice(
						this.parentNode.childNodes.findIndex(
							(n) => n === this.node,
						),
						1,
						...ri(t).childNodes,
					);
			}
			get textContent() {
				if (this.stream) return null;
				let t = "";
				return (
					this.iterate(this.node, (n) => {
						n.nodeName === "#text" && (t += n.value);
					}),
					t
				);
			}
			set textContent(t) {
				this.stream ||
					(this.node.childNodes = [
						{ nodeName: "#text", value: t, parentNode: this.node },
					]);
			}
			get nodeName() {
				return this.node.nodeName;
			}
			get parentNode() {
				return this.node.parentNode
					? new e(this.node.parentNode)
					: null;
			}
			get attrs() {
				return this.node.attrs;
			}
			get namespaceURI() {
				return this.node.namespaceURI;
			}
		},
		Vo = class {
			constructor(t, n, i = {}) {
				(this.attr = n),
					(this.attrs = t.attrs),
					(this.node = t),
					(this.options = i);
			}
			delete() {
				let t = this.attrs.findIndex((n) => n === this.attr);
				return (
					this.attrs.splice(t, 1),
					Object.defineProperty(this, "deleted", { get: () => !0 }),
					!0
				);
			}
			get name() {
				return this.attr.name;
			}
			set name(t) {
				this.attr.name = t;
			}
			get value() {
				return this.attr.value;
			}
			set value(t) {
				this.attr.value = t;
			}
			get deleted() {
				return !1;
			}
		},
		Wo = class {
			constructor(t, n, i = !1, a = {}) {
				(this.stream = i),
					(this.node = t),
					(this.element = n),
					(this.options = a);
			}
			get nodeName() {
				return this.node.nodeName;
			}
			get parentNode() {
				return this.element;
			}
			get value() {
				return this.stream ? this.node.text : this.node.value;
			}
			set value(t) {
				this.stream ? (this.node.text = t) : (this.node.value = t);
			}
		},
		Rl = Yo;
	function Ne(e) {
		return e >= 48 && e <= 57;
	}
	function ct(e) {
		return Ne(e) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
	}
	function la(e) {
		return e >= 65 && e <= 90;
	}
	function Z1(e) {
		return e >= 97 && e <= 122;
	}
	function $1(e) {
		return la(e) || Z1(e);
	}
	function eh(e) {
		return e >= 128;
	}
	function ca(e) {
		return $1(e) || eh(e) || e === 95;
	}
	function ui(e) {
		return ca(e) || Ne(e) || e === 45;
	}
	function th(e) {
		return (
			(e >= 0 && e <= 8) || e === 11 || (e >= 14 && e <= 31) || e === 127
		);
	}
	function ci(e) {
		return e === 10 || e === 13 || e === 12;
	}
	function Pt(e) {
		return ci(e) || e === 32 || e === 9;
	}
	function st(e, t) {
		return !(e !== 92 || ci(t) || t === 0);
	}
	function Cn(e, t, n) {
		return e === 45
			? ca(t) || t === 45 || st(t, n)
			: ca(e)
				? !0
				: e === 92
					? st(e, t)
					: !1;
	}
	function da(e, t, n) {
		return e === 43 || e === 45
			? Ne(t)
				? 2
				: t === 46 && Ne(n)
					? 3
					: 0
			: e === 46
				? Ne(t)
					? 2
					: 0
				: Ne(e)
					? 1
					: 0;
	}
	function pa(e) {
		return e === 65279 || e === 65534 ? 1 : 0;
	}
	var Xo = new Array(128),
		nh = 128,
		li = 130,
		Ko = 131,
		fa = 132,
		Qo = 133;
	for (let e = 0; e < Xo.length; e++)
		Xo[e] =
			(Pt(e) && li) ||
			(Ne(e) && Ko) ||
			(ca(e) && fa) ||
			(th(e) && Qo) ||
			e ||
			nh;
	function ma(e) {
		return e < 128 ? Xo[e] : fa;
	}
	function yn(e, t) {
		return t < e.length ? e.charCodeAt(t) : 0;
	}
	function ha(e, t, n) {
		return n === 13 && yn(e, t + 1) === 10 ? 2 : 1;
	}
	function Ut(e, t, n) {
		let i = e.charCodeAt(t);
		return la(i) && (i = i | 32), i === n;
	}
	function Ht(e, t, n, i) {
		if (n - t !== i.length || t < 0 || n > e.length) return !1;
		for (let a = t; a < n; a++) {
			let o = i.charCodeAt(a - t),
				s = e.charCodeAt(a);
			if ((la(s) && (s = s | 32), s !== o)) return !1;
		}
		return !0;
	}
	function Ol(e, t) {
		for (; t >= 0 && Pt(e.charCodeAt(t)); t--);
		return t + 1;
	}
	function di(e, t) {
		for (; t < e.length && Pt(e.charCodeAt(t)); t++);
		return t;
	}
	function Jo(e, t) {
		for (; t < e.length && Ne(e.charCodeAt(t)); t++);
		return t;
	}
	function Rt(e, t) {
		if (((t += 2), ct(yn(e, t - 1)))) {
			for (let i = Math.min(e.length, t + 5); t < i && ct(yn(e, t)); t++);
			let n = yn(e, t);
			Pt(n) && (t += ha(e, t, n));
		}
		return t;
	}
	function pi(e, t) {
		for (; t < e.length; t++) {
			let n = e.charCodeAt(t);
			if (!ui(n)) {
				if (st(n, yn(e, t + 1))) {
					t = Rt(e, t) - 1;
					continue;
				}
				break;
			}
		}
		return t;
	}
	function un(e, t) {
		let n = e.charCodeAt(t);
		if (
			((n === 43 || n === 45) && (n = e.charCodeAt((t += 1))),
			Ne(n) && ((t = Jo(e, t + 1)), (n = e.charCodeAt(t))),
			n === 46 && Ne(e.charCodeAt(t + 1)) && ((t += 2), (t = Jo(e, t))),
			Ut(e, t, 101))
		) {
			let i = 0;
			(n = e.charCodeAt(t + 1)),
				(n === 45 || n === 43) && ((i = 1), (n = e.charCodeAt(t + 2))),
				Ne(n) && (t = Jo(e, t + 1 + i + 1));
		}
		return t;
	}
	function ba(e, t) {
		for (; t < e.length; t++) {
			let n = e.charCodeAt(t);
			if (n === 41) {
				t++;
				break;
			}
			st(n, yn(e, t + 1)) && (t = Rt(e, t));
		}
		return t;
	}
	function fi(e) {
		if (e.length === 1 && !ct(e.charCodeAt(0))) return e[0];
		let t = parseInt(e, 16);
		return (
			(t === 0 || (t >= 55296 && t <= 57343) || t > 1114111) &&
				(t = 65533),
			String.fromCodePoint(t)
		);
	}
	var kn = [
		"EOF-token",
		"ident-token",
		"function-token",
		"at-keyword-token",
		"hash-token",
		"string-token",
		"bad-string-token",
		"url-token",
		"bad-url-token",
		"delim-token",
		"number-token",
		"percentage-token",
		"dimension-token",
		"whitespace-token",
		"CDO-token",
		"CDC-token",
		"colon-token",
		"semicolon-token",
		"comma-token",
		"[-token",
		"]-token",
		"(-token",
		")-token",
		"{-token",
		"}-token",
	];
	function _n(e = null, t) {
		return e === null || e.length < t
			? new Uint32Array(Math.max(t + 1024, 16384))
			: e;
	}
	var Bl = 10,
		ih = 12,
		Fl = 13;
	function Ml(e) {
		let t = e.source,
			n = t.length,
			i = t.length > 0 ? pa(t.charCodeAt(0)) : 0,
			a = _n(e.lines, n),
			o = _n(e.columns, n),
			s = e.startLine,
			r = e.startColumn;
		for (let c = i; c < n; c++) {
			let l = t.charCodeAt(c);
			(a[c] = s),
				(o[c] = r++),
				(l === Bl || l === Fl || l === ih) &&
					(l === Fl &&
						c + 1 < n &&
						t.charCodeAt(c + 1) === Bl &&
						(c++, (a[c] = s), (o[c] = r)),
					s++,
					(r = 1));
		}
		(a[n] = s),
			(o[n] = r),
			(e.lines = a),
			(e.columns = o),
			(e.computed = !0);
	}
	var ga = class {
		constructor() {
			(this.lines = null), (this.columns = null), (this.computed = !1);
		}
		setSource(t, n = 0, i = 1, a = 1) {
			(this.source = t),
				(this.startOffset = n),
				(this.startLine = i),
				(this.startColumn = a),
				(this.computed = !1);
		}
		getLocation(t, n) {
			return (
				this.computed || Ml(this),
				{
					source: n,
					offset: this.startOffset + t,
					line: this.lines[t],
					column: this.columns[t],
				}
			);
		}
		getLocationRange(t, n, i) {
			return (
				this.computed || Ml(this),
				{
					source: i,
					start: {
						offset: this.startOffset + t,
						line: this.lines[t],
						column: this.columns[t],
					},
					end: {
						offset: this.startOffset + n,
						line: this.lines[n],
						column: this.columns[n],
					},
				}
			);
		}
	};
	var gt = 16777215,
		Kt = 24,
		ah = new Map([
			[2, 22],
			[21, 22],
			[19, 20],
			[23, 24],
		]),
		mi = class {
			constructor(t, n) {
				this.setSource(t, n);
			}
			reset() {
				(this.eof = !1),
					(this.tokenIndex = -1),
					(this.tokenType = 0),
					(this.tokenStart = this.firstCharOffset),
					(this.tokenEnd = this.firstCharOffset);
			}
			setSource(t = "", n = () => {}) {
				t = String(t || "");
				let i = t.length,
					a = _n(this.offsetAndType, t.length + 1),
					o = _n(this.balance, t.length + 1),
					s = 0,
					r = 0,
					c = 0,
					l = -1;
				for (
					this.offsetAndType = null,
						this.balance = null,
						n(t, (d, f, p) => {
							switch (d) {
								default:
									o[s] = i;
									break;
								case r: {
									let g = c & gt;
									for (
										c = o[g],
											r = c >> Kt,
											o[s] = g,
											o[g++] = s;
										g < s;
										g++
									)
										o[g] === i && (o[g] = s);
									break;
								}
								case 21:
								case 2:
								case 19:
								case 23:
									(o[s] = c),
										(r = ah.get(d)),
										(c = (r << Kt) | s);
									break;
							}
							(a[s++] = (d << Kt) | p), l === -1 && (l = f);
						}),
						a[s] = (0 << Kt) | i,
						o[s] = i,
						o[i] = i;
					c !== 0;

				) {
					let d = c & gt;
					(c = o[d]), (o[d] = i);
				}
				(this.source = t),
					(this.firstCharOffset = l === -1 ? 0 : l),
					(this.tokenCount = s),
					(this.offsetAndType = a),
					(this.balance = o),
					this.reset(),
					this.next();
			}
			lookupType(t) {
				return (
					(t += this.tokenIndex),
					t < this.tokenCount ? this.offsetAndType[t] >> Kt : 0
				);
			}
			lookupOffset(t) {
				return (
					(t += this.tokenIndex),
					t < this.tokenCount
						? this.offsetAndType[t - 1] & gt
						: this.source.length
				);
			}
			lookupValue(t, n) {
				return (
					(t += this.tokenIndex),
					t < this.tokenCount
						? Ht(
								this.source,
								this.offsetAndType[t - 1] & gt,
								this.offsetAndType[t] & gt,
								n,
							)
						: !1
				);
			}
			getTokenStart(t) {
				return t === this.tokenIndex
					? this.tokenStart
					: t > 0
						? t < this.tokenCount
							? this.offsetAndType[t - 1] & gt
							: this.offsetAndType[this.tokenCount] & gt
						: this.firstCharOffset;
			}
			substrToCursor(t) {
				return this.source.substring(t, this.tokenStart);
			}
			isBalanceEdge(t) {
				return this.balance[this.tokenIndex] < t;
			}
			isDelim(t, n) {
				return n
					? this.lookupType(n) === 9 &&
							this.source.charCodeAt(this.lookupOffset(n)) === t
					: this.tokenType === 9 &&
							this.source.charCodeAt(this.tokenStart) === t;
			}
			skip(t) {
				let n = this.tokenIndex + t;
				n < this.tokenCount
					? ((this.tokenIndex = n),
						(this.tokenStart = this.offsetAndType[n - 1] & gt),
						(n = this.offsetAndType[n]),
						(this.tokenType = n >> Kt),
						(this.tokenEnd = n & gt))
					: ((this.tokenIndex = this.tokenCount), this.next());
			}
			next() {
				let t = this.tokenIndex + 1;
				t < this.tokenCount
					? ((this.tokenIndex = t),
						(this.tokenStart = this.tokenEnd),
						(t = this.offsetAndType[t]),
						(this.tokenType = t >> Kt),
						(this.tokenEnd = t & gt))
					: ((this.eof = !0),
						(this.tokenIndex = this.tokenCount),
						(this.tokenType = 0),
						(this.tokenStart = this.tokenEnd = this.source.length));
			}
			skipSC() {
				for (; this.tokenType === 13 || this.tokenType === 25; )
					this.next();
			}
			skipUntilBalanced(t, n) {
				let i = t,
					a,
					o;
				e: for (; i < this.tokenCount; i++) {
					if (((a = this.balance[i]), a < t)) break e;
					switch (
						((o =
							i > 0
								? this.offsetAndType[i - 1] & gt
								: this.firstCharOffset),
						n(this.source.charCodeAt(o)))
					) {
						case 1:
							break e;
						case 2:
							i++;
							break e;
						default:
							this.balance[a] === i && (i = a);
					}
				}
				this.skip(i - this.tokenIndex);
			}
			forEachToken(t) {
				for (
					let n = 0, i = this.firstCharOffset;
					n < this.tokenCount;
					n++
				) {
					let a = i,
						o = this.offsetAndType[n],
						s = o & gt,
						r = o >> Kt;
					(i = s), t(r, a, s, n);
				}
			}
			dump() {
				let t = new Array(this.tokenCount);
				return (
					this.forEachToken((n, i, a, o) => {
						t[o] = {
							idx: o,
							type: kn[n],
							chunk: this.source.substring(i, a),
							balance: this.balance[o],
						};
					}),
					t
				);
			}
		};
	function Jt(e, t) {
		function n(f) {
			return f < r ? e.charCodeAt(f) : 0;
		}
		function i() {
			if (((l = un(e, l)), Cn(n(l), n(l + 1), n(l + 2)))) {
				(d = 12), (l = pi(e, l));
				return;
			}
			if (n(l) === 37) {
				(d = 11), l++;
				return;
			}
			d = 10;
		}
		function a() {
			let f = l;
			if (((l = pi(e, l)), Ht(e, f, l, "url") && n(l) === 40)) {
				if (((l = di(e, l + 1)), n(l) === 34 || n(l) === 39)) {
					(d = 2), (l = f + 4);
					return;
				}
				s();
				return;
			}
			if (n(l) === 40) {
				(d = 2), l++;
				return;
			}
			d = 1;
		}
		function o(f) {
			for (f || (f = n(l++)), d = 5; l < e.length; l++) {
				let p = e.charCodeAt(l);
				switch (ma(p)) {
					case f:
						l++;
						return;
					case li:
						if (ci(p)) {
							(l += ha(e, l, p)), (d = 6);
							return;
						}
						break;
					case 92:
						if (l === e.length - 1) break;
						let g = n(l + 1);
						ci(g)
							? (l += ha(e, l + 1, g))
							: st(p, g) && (l = Rt(e, l) - 1);
						break;
				}
			}
		}
		function s() {
			for (d = 7, l = di(e, l); l < e.length; l++) {
				let f = e.charCodeAt(l);
				switch (ma(f)) {
					case 41:
						l++;
						return;
					case li:
						if (((l = di(e, l)), n(l) === 41 || l >= e.length)) {
							l < e.length && l++;
							return;
						}
						(l = ba(e, l)), (d = 8);
						return;
					case 34:
					case 39:
					case 40:
					case Qo:
						(l = ba(e, l)), (d = 8);
						return;
					case 92:
						if (st(f, n(l + 1))) {
							l = Rt(e, l) - 1;
							break;
						}
						(l = ba(e, l)), (d = 8);
						return;
				}
			}
		}
		e = String(e || "");
		let r = e.length,
			c = pa(n(0)),
			l = c,
			d;
		for (; l < r; ) {
			let f = e.charCodeAt(l);
			switch (ma(f)) {
				case li:
					(d = 13), (l = di(e, l + 1));
					break;
				case 34:
					o();
					break;
				case 35:
					ui(n(l + 1)) || st(n(l + 1), n(l + 2))
						? ((d = 4), (l = pi(e, l + 1)))
						: ((d = 9), l++);
					break;
				case 39:
					o();
					break;
				case 40:
					(d = 21), l++;
					break;
				case 41:
					(d = 22), l++;
					break;
				case 43:
					da(f, n(l + 1), n(l + 2)) ? i() : ((d = 9), l++);
					break;
				case 44:
					(d = 18), l++;
					break;
				case 45:
					da(f, n(l + 1), n(l + 2))
						? i()
						: n(l + 1) === 45 && n(l + 2) === 62
							? ((d = 15), (l = l + 3))
							: Cn(f, n(l + 1), n(l + 2))
								? a()
								: ((d = 9), l++);
					break;
				case 46:
					da(f, n(l + 1), n(l + 2)) ? i() : ((d = 9), l++);
					break;
				case 47:
					n(l + 1) === 42
						? ((d = 25),
							(l = e.indexOf("*/", l + 2)),
							(l = l === -1 ? e.length : l + 2))
						: ((d = 9), l++);
					break;
				case 58:
					(d = 16), l++;
					break;
				case 59:
					(d = 17), l++;
					break;
				case 60:
					n(l + 1) === 33 && n(l + 2) === 45 && n(l + 3) === 45
						? ((d = 14), (l = l + 4))
						: ((d = 9), l++);
					break;
				case 64:
					Cn(n(l + 1), n(l + 2), n(l + 3))
						? ((d = 3), (l = pi(e, l + 1)))
						: ((d = 9), l++);
					break;
				case 91:
					(d = 19), l++;
					break;
				case 92:
					st(f, n(l + 1)) ? a() : ((d = 9), l++);
					break;
				case 93:
					(d = 20), l++;
					break;
				case 123:
					(d = 23), l++;
					break;
				case 125:
					(d = 24), l++;
					break;
				case Ko:
					i();
					break;
				case fa:
					a();
					break;
				default:
					(d = 9), l++;
			}
			t(d, c, (c = l));
		}
	}
	var Sn = null,
		rt = class e {
			static createItem(t) {
				return { prev: null, next: null, data: t };
			}
			constructor() {
				(this.head = null), (this.tail = null), (this.cursor = null);
			}
			createItem(t) {
				return e.createItem(t);
			}
			allocateCursor(t, n) {
				let i;
				return (
					Sn !== null
						? ((i = Sn),
							(Sn = Sn.cursor),
							(i.prev = t),
							(i.next = n),
							(i.cursor = this.cursor))
						: (i = { prev: t, next: n, cursor: this.cursor }),
					(this.cursor = i),
					i
				);
			}
			releaseCursor() {
				let { cursor: t } = this;
				(this.cursor = t.cursor),
					(t.prev = null),
					(t.next = null),
					(t.cursor = Sn),
					(Sn = t);
			}
			updateCursors(t, n, i, a) {
				let { cursor: o } = this;
				for (; o !== null; )
					o.prev === t && (o.prev = n),
						o.next === i && (o.next = a),
						(o = o.cursor);
			}
			*[Symbol.iterator]() {
				for (let t = this.head; t !== null; t = t.next) yield t.data;
			}
			get size() {
				let t = 0;
				for (let n = this.head; n !== null; n = n.next) t++;
				return t;
			}
			get isEmpty() {
				return this.head === null;
			}
			get first() {
				return this.head && this.head.data;
			}
			get last() {
				return this.tail && this.tail.data;
			}
			fromArray(t) {
				let n = null;
				this.head = null;
				for (let i of t) {
					let a = e.createItem(i);
					n !== null ? (n.next = a) : (this.head = a),
						(a.prev = n),
						(n = a);
				}
				return (this.tail = n), this;
			}
			toArray() {
				return [...this];
			}
			toJSON() {
				return [...this];
			}
			forEach(t, n = this) {
				let i = this.allocateCursor(null, this.head);
				for (; i.next !== null; ) {
					let a = i.next;
					(i.next = a.next), t.call(n, a.data, a, this);
				}
				this.releaseCursor();
			}
			forEachRight(t, n = this) {
				let i = this.allocateCursor(this.tail, null);
				for (; i.prev !== null; ) {
					let a = i.prev;
					(i.prev = a.prev), t.call(n, a.data, a, this);
				}
				this.releaseCursor();
			}
			reduce(t, n, i = this) {
				let a = this.allocateCursor(null, this.head),
					o = n,
					s;
				for (; a.next !== null; )
					(s = a.next),
						(a.next = s.next),
						(o = t.call(i, o, s.data, s, this));
				return this.releaseCursor(), o;
			}
			reduceRight(t, n, i = this) {
				let a = this.allocateCursor(this.tail, null),
					o = n,
					s;
				for (; a.prev !== null; )
					(s = a.prev),
						(a.prev = s.prev),
						(o = t.call(i, o, s.data, s, this));
				return this.releaseCursor(), o;
			}
			some(t, n = this) {
				for (let i = this.head; i !== null; i = i.next)
					if (t.call(n, i.data, i, this)) return !0;
				return !1;
			}
			map(t, n = this) {
				let i = new e();
				for (let a = this.head; a !== null; a = a.next)
					i.appendData(t.call(n, a.data, a, this));
				return i;
			}
			filter(t, n = this) {
				let i = new e();
				for (let a = this.head; a !== null; a = a.next)
					t.call(n, a.data, a, this) && i.appendData(a.data);
				return i;
			}
			nextUntil(t, n, i = this) {
				if (t === null) return;
				let a = this.allocateCursor(null, t);
				for (; a.next !== null; ) {
					let o = a.next;
					if (((a.next = o.next), n.call(i, o.data, o, this))) break;
				}
				this.releaseCursor();
			}
			prevUntil(t, n, i = this) {
				if (t === null) return;
				let a = this.allocateCursor(t, null);
				for (; a.prev !== null; ) {
					let o = a.prev;
					if (((a.prev = o.prev), n.call(i, o.data, o, this))) break;
				}
				this.releaseCursor();
			}
			clear() {
				(this.head = null), (this.tail = null);
			}
			copy() {
				let t = new e();
				for (let n of this) t.appendData(n);
				return t;
			}
			prepend(t) {
				return (
					this.updateCursors(null, t, this.head, t),
					this.head !== null
						? ((this.head.prev = t), (t.next = this.head))
						: (this.tail = t),
					(this.head = t),
					this
				);
			}
			prependData(t) {
				return this.prepend(e.createItem(t));
			}
			append(t) {
				return this.insert(t);
			}
			appendData(t) {
				return this.insert(e.createItem(t));
			}
			insert(t, n = null) {
				if (n !== null)
					if (
						(this.updateCursors(n.prev, t, n, t), n.prev === null)
					) {
						if (this.head !== n)
							throw new Error("before doesn't belong to list");
						(this.head = t),
							(n.prev = t),
							(t.next = n),
							this.updateCursors(null, t);
					} else
						(n.prev.next = t),
							(t.prev = n.prev),
							(n.prev = t),
							(t.next = n);
				else
					this.updateCursors(this.tail, t, null, t),
						this.tail !== null
							? ((this.tail.next = t), (t.prev = this.tail))
							: (this.head = t),
						(this.tail = t);
				return this;
			}
			insertData(t, n) {
				return this.insert(e.createItem(t), n);
			}
			remove(t) {
				if ((this.updateCursors(t, t.prev, t, t.next), t.prev !== null))
					t.prev.next = t.next;
				else {
					if (this.head !== t)
						throw new Error("item doesn't belong to list");
					this.head = t.next;
				}
				if (t.next !== null) t.next.prev = t.prev;
				else {
					if (this.tail !== t)
						throw new Error("item doesn't belong to list");
					this.tail = t.prev;
				}
				return (t.prev = null), (t.next = null), t;
			}
			push(t) {
				this.insert(e.createItem(t));
			}
			pop() {
				return this.tail !== null ? this.remove(this.tail) : null;
			}
			unshift(t) {
				this.prepend(e.createItem(t));
			}
			shift() {
				return this.head !== null ? this.remove(this.head) : null;
			}
			prependList(t) {
				return this.insertList(t, this.head);
			}
			appendList(t) {
				return this.insertList(t);
			}
			insertList(t, n) {
				return t.head === null
					? this
					: (n != null
							? (this.updateCursors(n.prev, t.tail, n, t.head),
								n.prev !== null
									? ((n.prev.next = t.head),
										(t.head.prev = n.prev))
									: (this.head = t.head),
								(n.prev = t.tail),
								(t.tail.next = n))
							: (this.updateCursors(
									this.tail,
									t.tail,
									null,
									t.head,
								),
								this.tail !== null
									? ((this.tail.next = t.head),
										(t.head.prev = this.tail))
									: (this.head = t.head),
								(this.tail = t.tail)),
						(t.head = null),
						(t.tail = null),
						this);
			}
			replace(t, n) {
				"head" in n ? this.insertList(n, t) : this.insert(n, t),
					this.remove(t);
			}
		};
	function cn(e, t) {
		let n = Object.create(SyntaxError.prototype),
			i = new Error();
		return Object.assign(n, {
			name: e,
			message: t,
			get stack() {
				return (i.stack || "").replace(
					/^(.+\n){1,3}/,
					`${e}: ${t}
`,
				);
			},
		});
	}
	var $o = 100,
		Ul = 60,
		Hl = "    ";
	function jl({ source: e, line: t, column: n }, i) {
		function a(d, f) {
			return o
				.slice(d, f)
				.map((p, g) => String(d + g + 1).padStart(c) + " |" + p).join(`
`);
		}
		let o = e.split(/\r\n?|\n|\f/),
			s = Math.max(1, t - i) - 1,
			r = Math.min(t + i, o.length + 1),
			c = Math.max(4, String(r).length) + 1,
			l = 0;
		(n +=
			(Hl.length - 1) *
			(o[t - 1].substr(0, n - 1).match(/\t/g) || []).length),
			n > $o && ((l = n - Ul + 3), (n = Ul - 2));
		for (let d = s; d <= r; d++)
			d >= 0 &&
				d < o.length &&
				((o[d] = o[d].replace(/\t/g, Hl)),
				(o[d] =
					(l > 0 && o[d].length > l ? "\u2026" : "") +
					o[d].substr(l, $o - 2) +
					(o[d].length > l + $o - 1 ? "\u2026" : "")));
		return [a(s, t), new Array(n + c + 2).join("-") + "^", a(t, r)].filter(
			Boolean,
		).join(`
`);
	}
	function es(e, t, n, i, a) {
		return Object.assign(cn("SyntaxError", e), {
			source: t,
			offset: n,
			line: i,
			column: a,
			sourceFragment(s) {
				return jl({ source: t, line: i, column: a }, isNaN(s) ? 0 : s);
			},
			get formattedMessage() {
				return (
					`Parse error: ${e}
` + jl({ source: t, line: i, column: a }, 2)
				);
			},
		});
	}
	function ql(e) {
		let t = this.createList(),
			n = !1,
			i = { recognizer: e };
		for (; !this.eof; ) {
			switch (this.tokenType) {
				case 25:
					this.next();
					continue;
				case 13:
					(n = !0), this.next();
					continue;
			}
			let a = e.getNode.call(this, i);
			if (a === void 0) break;
			n &&
				(e.onWhiteSpace && e.onWhiteSpace.call(this, a, t, i),
				(n = !1)),
				t.push(a);
		}
		return n && e.onWhiteSpace && e.onWhiteSpace.call(this, null, t, i), t;
	}
	var zl = () => {},
		oh = 33,
		sh = 35,
		ts = 59,
		Yl = 123,
		Vl = 0;
	function rh(e) {
		return function () {
			return this[e]();
		};
	}
	function ns(e) {
		let t = Object.create(null);
		for (let n in e) {
			let i = e[n],
				a = i.parse || i;
			a && (t[n] = a);
		}
		return t;
	}
	function uh(e) {
		let t = {
			context: Object.create(null),
			scope: Object.assign(Object.create(null), e.scope),
			atrule: ns(e.atrule),
			pseudo: ns(e.pseudo),
			node: ns(e.node),
		};
		for (let n in e.parseContext)
			switch (typeof e.parseContext[n]) {
				case "function":
					t.context[n] = e.parseContext[n];
					break;
				case "string":
					t.context[n] = rh(e.parseContext[n]);
					break;
			}
		return { config: t, ...t, ...t.node };
	}
	function Wl(e) {
		let t = "",
			n = "<unknown>",
			i = !1,
			a = zl,
			o = !1,
			s = new ga(),
			r = Object.assign(new mi(), uh(e || {}), {
				parseAtrulePrelude: !0,
				parseRulePrelude: !0,
				parseValue: !0,
				parseCustomProperty: !1,
				readSequence: ql,
				consumeUntilBalanceEnd: () => 0,
				consumeUntilLeftCurlyBracket(l) {
					return l === Yl ? 1 : 0;
				},
				consumeUntilLeftCurlyBracketOrSemicolon(l) {
					return l === Yl || l === ts ? 1 : 0;
				},
				consumeUntilExclamationMarkOrSemicolon(l) {
					return l === oh || l === ts ? 1 : 0;
				},
				consumeUntilSemicolonIncluded(l) {
					return l === ts ? 2 : 0;
				},
				createList() {
					return new rt();
				},
				createSingleNodeList(l) {
					return new rt().appendData(l);
				},
				getFirstListNode(l) {
					return l && l.first;
				},
				getLastListNode(l) {
					return l && l.last;
				},
				parseWithFallback(l, d) {
					let f = this.tokenIndex;
					try {
						return l.call(this);
					} catch (p) {
						if (o) throw p;
						let g = d.call(this, f);
						return (o = !0), a(p, g), (o = !1), g;
					}
				},
				lookupNonWSType(l) {
					let d;
					do if (((d = this.lookupType(l++)), d !== 13)) return d;
					while (d !== Vl);
					return Vl;
				},
				charCodeAt(l) {
					return l >= 0 && l < t.length ? t.charCodeAt(l) : 0;
				},
				substring(l, d) {
					return t.substring(l, d);
				},
				substrToCursor(l) {
					return this.source.substring(l, this.tokenStart);
				},
				cmpChar(l, d) {
					return Ut(t, l, d);
				},
				cmpStr(l, d, f) {
					return Ht(t, l, d, f);
				},
				consume(l) {
					let d = this.tokenStart;
					return this.eat(l), this.substrToCursor(d);
				},
				consumeFunctionName() {
					let l = t.substring(this.tokenStart, this.tokenEnd - 1);
					return this.eat(2), l;
				},
				consumeNumber(l) {
					let d = t.substring(
						this.tokenStart,
						un(t, this.tokenStart),
					);
					return this.eat(l), d;
				},
				eat(l) {
					if (this.tokenType !== l) {
						let d = kn[l]
								.slice(0, -6)
								.replace(/-/g, " ")
								.replace(/^./, (g) => g.toUpperCase()),
							f = `${/[[\](){}]/.test(d) ? `"${d}"` : d} is expected`,
							p = this.tokenStart;
						switch (l) {
							case 1:
								this.tokenType === 2 || this.tokenType === 7
									? ((p = this.tokenEnd - 1),
										(f =
											"Identifier is expected but function found"))
									: (f = "Identifier is expected");
								break;
							case 4:
								this.isDelim(sh) &&
									(this.next(),
									p++,
									(f = "Name is expected"));
								break;
							case 11:
								this.tokenType === 10 &&
									((p = this.tokenEnd),
									(f = "Percent sign is expected"));
								break;
						}
						this.error(f, p);
					}
					this.next();
				},
				eatIdent(l) {
					(this.tokenType !== 1 || this.lookupValue(0, l) === !1) &&
						this.error(`Identifier "${l}" is expected`),
						this.next();
				},
				eatDelim(l) {
					this.isDelim(l) ||
						this.error(
							`Delim "${String.fromCharCode(l)}" is expected`,
						),
						this.next();
				},
				getLocation(l, d) {
					return i ? s.getLocationRange(l, d, n) : null;
				},
				getLocationFromList(l) {
					if (i) {
						let d = this.getFirstListNode(l),
							f = this.getLastListNode(l);
						return s.getLocationRange(
							d !== null
								? d.loc.start.offset - s.startOffset
								: this.tokenStart,
							f !== null
								? f.loc.end.offset - s.startOffset
								: this.tokenStart,
							n,
						);
					}
					return null;
				},
				error(l, d) {
					let f =
						typeof d < "u" && d < t.length
							? s.getLocation(d)
							: this.eof
								? s.getLocation(Ol(t, t.length - 1))
								: s.getLocation(this.tokenStart);
					throw new es(
						l || "Unexpected input",
						t,
						f.offset,
						f.line,
						f.column,
					);
				},
			});
		return Object.assign(
			function (l, d) {
				(t = l),
					(d = d || {}),
					r.setSource(t, Jt),
					s.setSource(t, d.offset, d.line, d.column),
					(n = d.filename || "<unknown>"),
					(i = !!d.positions),
					(a =
						typeof d.onParseError == "function"
							? d.onParseError
							: zl),
					(o = !1),
					(r.parseAtrulePrelude =
						"parseAtrulePrelude" in d
							? !!d.parseAtrulePrelude
							: !0),
					(r.parseRulePrelude =
						"parseRulePrelude" in d ? !!d.parseRulePrelude : !0),
					(r.parseValue = "parseValue" in d ? !!d.parseValue : !0),
					(r.parseCustomProperty =
						"parseCustomProperty" in d
							? !!d.parseCustomProperty
							: !1);
				let { context: f = "default", onComment: p } = d;
				if (!(f in r.context))
					throw new Error("Unknown context `" + f + "`");
				typeof p == "function" &&
					r.forEachToken((T, D, S) => {
						if (T === 25) {
							let E = r.getLocation(D, S),
								A = Ht(t, S - 2, S, "*/")
									? t.slice(D + 2, S - 2)
									: t.slice(D + 2, S);
							p(A, E);
						}
					});
				let g = r.context[f].call(r, d);
				return r.eof || r.error(), g;
			},
			{ SyntaxError: es, config: r.config },
		);
	}
	var f0 = ht(d0(), 1),
		p0 = new Set(["Atrule", "Selector", "Declaration"]);
	function m0(e) {
		let t = new f0.SourceMapGenerator(),
			n = { line: 1, column: 0 },
			i = { line: 0, column: 0 },
			a = { line: 1, column: 0 },
			o = { generated: a },
			s = 1,
			r = 0,
			c = !1,
			l = e.node;
		e.node = function (p) {
			if (p.loc && p.loc.start && p0.has(p.type)) {
				let g = p.loc.start.line,
					T = p.loc.start.column - 1;
				(i.line !== g || i.column !== T) &&
					((i.line = g),
					(i.column = T),
					(n.line = s),
					(n.column = r),
					c &&
						((c = !1),
						(n.line !== a.line || n.column !== a.column) &&
							t.addMapping(o)),
					(c = !0),
					t.addMapping({
						source: p.loc.source,
						original: i,
						generated: n,
					}));
			}
			l.call(this, p),
				c && p0.has(p.type) && ((a.line = s), (a.column = r));
		};
		let d = e.emit;
		e.emit = function (p, g, T) {
			for (let D = 0; D < p.length; D++)
				p.charCodeAt(D) === 10 ? (s++, (r = 0)) : r++;
			d(p, g, T);
		};
		let f = e.result;
		return (
			(e.result = function () {
				return c && t.addMapping(o), { css: f(), map: t };
			}),
			e
		);
	}
	var Aa = {};
	te(Aa, { safe: () => ls, spec: () => Ih });
	var Sh = 43,
		Dh = 45,
		cs = (e, t) => {
			if ((e === 9 && (e = t), typeof e == "string")) {
				let n = e.charCodeAt(0);
				return n > 127 ? 32768 : n << 8;
			}
			return e;
		},
		h0 = [
			[1, 1],
			[1, 2],
			[1, 7],
			[1, 8],
			[1, "-"],
			[1, 10],
			[1, 11],
			[1, 12],
			[1, 15],
			[1, 21],
			[3, 1],
			[3, 2],
			[3, 7],
			[3, 8],
			[3, "-"],
			[3, 10],
			[3, 11],
			[3, 12],
			[3, 15],
			[4, 1],
			[4, 2],
			[4, 7],
			[4, 8],
			[4, "-"],
			[4, 10],
			[4, 11],
			[4, 12],
			[4, 15],
			[12, 1],
			[12, 2],
			[12, 7],
			[12, 8],
			[12, "-"],
			[12, 10],
			[12, 11],
			[12, 12],
			[12, 15],
			["#", 1],
			["#", 2],
			["#", 7],
			["#", 8],
			["#", "-"],
			["#", 10],
			["#", 11],
			["#", 12],
			["#", 15],
			["-", 1],
			["-", 2],
			["-", 7],
			["-", 8],
			["-", "-"],
			["-", 10],
			["-", 11],
			["-", 12],
			["-", 15],
			[10, 1],
			[10, 2],
			[10, 7],
			[10, 8],
			[10, 10],
			[10, 11],
			[10, 12],
			[10, "%"],
			[10, 15],
			["@", 1],
			["@", 2],
			["@", 7],
			["@", 8],
			["@", "-"],
			["@", 15],
			[".", 10],
			[".", 11],
			[".", 12],
			["+", 10],
			["+", 11],
			["+", 12],
			["/", "*"],
		],
		wh = h0.concat([
			[1, 4],
			[12, 4],
			[4, 4],
			[3, 21],
			[3, 5],
			[3, 16],
			[11, 11],
			[11, 12],
			[11, 2],
			[11, "-"],
			[22, 1],
			[22, 2],
			[22, 11],
			[22, 12],
			[22, 4],
			[22, "-"],
		]);
	function b0(e) {
		let t = new Set(e.map(([n, i]) => (cs(n) << 16) | cs(i)));
		return function (n, i, a) {
			let o = cs(i, a),
				s = a.charCodeAt(0);
			return (
				((s === Dh && i !== 1 && i !== 2 && i !== 15) || s === Sh
					? t.has((n << 16) | (s << 8))
					: t.has((n << 16) | o)) && this.emit(" ", 13, !0),
				o
			);
		};
	}
	var Ih = b0(h0),
		ls = b0(wh);
	var Nh = 92;
	function Lh(e, t) {
		if (typeof t == "function") {
			let n = null;
			e.children.forEach((i) => {
				n !== null && t.call(this, n), this.node(i), (n = i);
			});
			return;
		}
		e.children.forEach(this.node, this);
	}
	function Ph(e) {
		Jt(e, (t, n, i) => {
			this.token(t, e.slice(n, i));
		});
	}
	function g0(e) {
		let t = new Map();
		for (let n in e.node) {
			let i = e.node[n];
			typeof (i.generate || i) == "function" && t.set(n, i.generate || i);
		}
		return function (n, i) {
			let a = "",
				o = 0,
				s = {
					node(c) {
						if (t.has(c.type)) t.get(c.type).call(r, c);
						else throw new Error("Unknown node type: " + c.type);
					},
					tokenBefore: ls,
					token(c, l) {
						(o = this.tokenBefore(o, c, l)),
							this.emit(l, c, !1),
							c === 9 &&
								l.charCodeAt(0) === Nh &&
								this.emit(
									`
`,
									13,
									!0,
								);
					},
					emit(c) {
						a += c;
					},
					result() {
						return a;
					},
				};
			i &&
				(typeof i.decorator == "function" && (s = i.decorator(s)),
				i.sourceMap && (s = m0(s)),
				i.mode in Aa && (s.tokenBefore = Aa[i.mode]));
			let r = {
				node: (c) => s.node(c),
				children: Lh,
				token: (c, l) => s.token(c, l),
				tokenize: Ph,
			};
			return s.node(n), s.result();
		};
	}
	function x0(e) {
		return {
			fromPlainObject(t) {
				return (
					e(t, {
						enter(n) {
							n.children &&
								!(n.children instanceof rt) &&
								(n.children = new rt().fromArray(n.children));
						},
					}),
					t
				);
			},
			toPlainObject(t) {
				return (
					e(t, {
						leave(n) {
							n.children &&
								n.children instanceof rt &&
								(n.children = n.children.toArray());
						},
					}),
					t
				);
			},
		};
	}
	var { hasOwnProperty: ds } = Object.prototype,
		xi = function () {};
	function E0(e) {
		return typeof e == "function" ? e : xi;
	}
	function v0(e, t) {
		return function (n, i, a) {
			n.type === t && e.call(this, n, i, a);
		};
	}
	function Rh(e, t) {
		let n = t.structure,
			i = [];
		for (let a in n) {
			if (ds.call(n, a) === !1) continue;
			let o = n[a],
				s = { name: a, type: !1, nullable: !1 };
			Array.isArray(o) || (o = [o]);
			for (let r of o)
				r === null
					? (s.nullable = !0)
					: typeof r == "string"
						? (s.type = "node")
						: Array.isArray(r) && (s.type = "list");
			s.type && i.push(s);
		}
		return i.length ? { context: t.walkContext, fields: i } : null;
	}
	function Oh(e) {
		let t = {};
		for (let n in e.node)
			if (ds.call(e.node, n)) {
				let i = e.node[n];
				if (!i.structure)
					throw new Error(
						"Missed `structure` field in `" +
							n +
							"` node type definition",
					);
				t[n] = Rh(n, i);
			}
		return t;
	}
	function A0(e, t) {
		let n = e.fields.slice(),
			i = e.context,
			a = typeof i == "string";
		return (
			t && n.reverse(),
			function (o, s, r, c) {
				let l;
				a && ((l = s[i]), (s[i] = o));
				for (let d of n) {
					let f = o[d.name];
					if (!d.nullable || f) {
						if (d.type === "list") {
							if (t ? f.reduceRight(c, !1) : f.reduce(c, !1))
								return !0;
						} else if (r(f)) return !0;
					}
				}
				a && (s[i] = l);
			}
		);
	}
	function T0({
		StyleSheet: e,
		Atrule: t,
		Rule: n,
		Block: i,
		DeclarationList: a,
	}) {
		return {
			Atrule: { StyleSheet: e, Atrule: t, Rule: n, Block: i },
			Rule: { StyleSheet: e, Atrule: t, Rule: n, Block: i },
			Declaration: {
				StyleSheet: e,
				Atrule: t,
				Rule: n,
				Block: i,
				DeclarationList: a,
			},
		};
	}
	function C0(e) {
		let t = Oh(e),
			n = {},
			i = {},
			a = Symbol("break-walk"),
			o = Symbol("skip-node");
		for (let l in t)
			ds.call(t, l) &&
				t[l] !== null &&
				((n[l] = A0(t[l], !1)), (i[l] = A0(t[l], !0)));
		let s = T0(n),
			r = T0(i),
			c = function (l, d) {
				function f(E, A, L) {
					let y = p.call(S, E, A, L);
					return y === a
						? !0
						: y === o
							? !1
							: !!(
									(T.hasOwnProperty(E.type) &&
										T[E.type](E, S, f, D)) ||
									g.call(S, E, A, L) === a
								);
				}
				let p = xi,
					g = xi,
					T = n,
					D = (E, A, L, y) => E || f(A, L, y),
					S = {
						break: a,
						skip: o,
						root: l,
						stylesheet: null,
						atrule: null,
						atrulePrelude: null,
						rule: null,
						selector: null,
						block: null,
						declaration: null,
						function: null,
					};
				if (typeof d == "function") p = d;
				else if (
					d &&
					((p = E0(d.enter)),
					(g = E0(d.leave)),
					d.reverse && (T = i),
					d.visit)
				) {
					if (s.hasOwnProperty(d.visit))
						T = d.reverse ? r[d.visit] : s[d.visit];
					else if (!t.hasOwnProperty(d.visit))
						throw new Error(
							"Bad value `" +
								d.visit +
								"` for `visit` option (should be: " +
								Object.keys(t).sort().join(", ") +
								")",
						);
					(p = v0(p, d.visit)), (g = v0(g, d.visit));
				}
				if (p === xi && g === xi)
					throw new Error(
						"Neither `enter` nor `leave` walker handler is set or both aren't a function",
					);
				f(l);
			};
		return (
			(c.break = a),
			(c.skip = o),
			(c.find = function (l, d) {
				let f = null;
				return (
					c(l, function (p, g, T) {
						if (d.call(this, p, g, T)) return (f = p), a;
					}),
					f
				);
			}),
			(c.findLast = function (l, d) {
				let f = null;
				return (
					c(l, {
						reverse: !0,
						enter(p, g, T) {
							if (d.call(this, p, g, T)) return (f = p), a;
						},
					}),
					f
				);
			}),
			(c.findAll = function (l, d) {
				let f = [];
				return (
					c(l, function (p, g, T) {
						d.call(this, p, g, T) && f.push(p);
					}),
					f
				);
			}),
			c
		);
	}
	function Bh(e) {
		return e;
	}
	function Fh(e) {
		let { min: t, max: n, comma: i } = e;
		return t === 0 && n === 0
			? i
				? "#?"
				: "*"
			: t === 0 && n === 1
				? "?"
				: t === 1 && n === 0
					? i
						? "#"
						: "+"
					: t === 1 && n === 1
						? ""
						: (i ? "#" : "") +
							(t === n
								? "{" + t + "}"
								: "{" + t + "," + (n !== 0 ? n : "") + "}");
	}
	function Mh(e) {
		switch (e.type) {
			case "Range":
				return (
					" [" +
					(e.min === null ? "-\u221E" : e.min) +
					"," +
					(e.max === null ? "\u221E" : e.max) +
					"]"
				);
			default:
				throw new Error("Unknown node type `" + e.type + "`");
		}
	}
	function Uh(e, t, n, i) {
		let a =
				e.combinator === " " || i
					? e.combinator
					: " " + e.combinator + " ",
			o = e.terms.map((s) => ps(s, t, n, i)).join(a);
		return e.explicit || n
			? (i || o[0] === "," ? "[" : "[ ") + o + (i ? "]" : " ]")
			: o;
	}
	function ps(e, t, n, i) {
		let a;
		switch (e.type) {
			case "Group":
				a = Uh(e, t, n, i) + (e.disallowEmpty ? "!" : "");
				break;
			case "Multiplier":
				return ps(e.term, t, n, i) + t(Fh(e), e);
			case "Type":
				a = "<" + e.name + (e.opts ? t(Mh(e.opts), e.opts) : "") + ">";
				break;
			case "Property":
				a = "<'" + e.name + "'>";
				break;
			case "Keyword":
				a = e.name;
				break;
			case "AtKeyword":
				a = "@" + e.name;
				break;
			case "Function":
				a = e.name + "(";
				break;
			case "String":
			case "Token":
				a = e.value;
				break;
			case "Comma":
				a = ",";
				break;
			default:
				throw new Error("Unknown node type `" + e.type + "`");
		}
		return t(a, e);
	}
	function wn(e, t) {
		let n = Bh,
			i = !1,
			a = !1;
		return (
			typeof t == "function"
				? (n = t)
				: t &&
					((i = !!t.forceBraces),
					(a = !!t.compact),
					typeof t.decorate == "function" && (n = t.decorate)),
			ps(e, n, i, a)
		);
	}
	var y0 = { offset: 0, line: 1, column: 1 };
	function Hh(e, t) {
		let n = e.tokens,
			i = e.longestMatch,
			a = (i < n.length && n[i].node) || null,
			o = a !== t ? a : null,
			s = 0,
			r = 0,
			c = 0,
			l = "",
			d,
			f;
		for (let p = 0; p < n.length; p++) {
			let g = n[p].value;
			p === i && ((r = g.length), (s = l.length)),
				o !== null && n[p].node === o && (p <= i ? c++ : (c = 0)),
				(l += g);
		}
		return (
			i === n.length || c > 1
				? ((d = Ta(o || t, "end") || Ei(y0, l)), (f = Ei(d)))
				: ((d =
						Ta(o, "start") ||
						Ei(Ta(t, "start") || y0, l.slice(0, s))),
					(f = Ta(o, "end") || Ei(d, l.substr(s, r)))),
			{ css: l, mismatchOffset: s, mismatchLength: r, start: d, end: f }
		);
	}
	function Ta(e, t) {
		let n = e && e.loc && e.loc[t];
		return n ? ("line" in n ? Ei(n) : n) : null;
	}
	function Ei({ offset: e, line: t, column: n }, i) {
		let a = { offset: e, line: t, column: n };
		if (i) {
			let o = i.split(/\n|\r\n?|\f/);
			(a.offset += i.length),
				(a.line += o.length - 1),
				(a.column =
					o.length === 1 ? a.column + i.length : o.pop().length + 1);
		}
		return a;
	}
	var In = function (e, t) {
			let n = cn("SyntaxReferenceError", e + (t ? " `" + t + "`" : ""));
			return (n.reference = t), n;
		},
		k0 = function (e, t, n, i) {
			let a = cn("SyntaxMatchError", e),
				{
					css: o,
					mismatchOffset: s,
					mismatchLength: r,
					start: c,
					end: l,
				} = Hh(i, n);
			return (
				(a.rawMessage = e),
				(a.syntax = t ? wn(t) : "<generic>"),
				(a.css = o),
				(a.mismatchOffset = s),
				(a.mismatchLength = r),
				(a.message =
					e +
					`
  syntax: ` +
					a.syntax +
					`
   value: ` +
					(o || "<empty string>") +
					`
  --------` +
					new Array(a.mismatchOffset + 1).join("-") +
					"^"),
				Object.assign(a, c),
				(a.loc = {
					source: (n && n.loc && n.loc.source) || "<unknown>",
					start: c,
					end: l,
				}),
				a
			);
		};
	var Ca = new Map(),
		Nn = new Map(),
		ya = 45,
		ka = jh,
		fs = qh;
	function _a(e, t) {
		return (
			(t = t || 0),
			e.length - t >= 2 &&
				e.charCodeAt(t) === ya &&
				e.charCodeAt(t + 1) === ya
		);
	}
	function _0(e, t) {
		if (
			((t = t || 0),
			e.length - t >= 3 &&
				e.charCodeAt(t) === ya &&
				e.charCodeAt(t + 1) !== ya)
		) {
			let n = e.indexOf("-", t + 2);
			if (n !== -1) return e.substring(t, n + 1);
		}
		return "";
	}
	function jh(e) {
		if (Ca.has(e)) return Ca.get(e);
		let t = e.toLowerCase(),
			n = Ca.get(t);
		if (n === void 0) {
			let i = _a(t, 0),
				a = i ? "" : _0(t, 0);
			n = Object.freeze({
				basename: t.substr(a.length),
				name: t,
				prefix: a,
				vendor: a,
				custom: i,
			});
		}
		return Ca.set(e, n), n;
	}
	function qh(e) {
		if (Nn.has(e)) return Nn.get(e);
		let t = e,
			n = e[0];
		n === "/"
			? (n = e[1] === "/" ? "//" : "/")
			: n !== "_" &&
				n !== "*" &&
				n !== "$" &&
				n !== "#" &&
				n !== "+" &&
				n !== "&" &&
				(n = "");
		let i = _a(t, n.length);
		if (!i && ((t = t.toLowerCase()), Nn.has(t))) {
			let r = Nn.get(t);
			return Nn.set(e, r), r;
		}
		let a = i ? "" : _0(t, n.length),
			o = t.substr(0, n.length + a.length),
			s = Object.freeze({
				basename: t.substr(o.length),
				name: t.substr(n.length),
				hack: n,
				vendor: a,
				prefix: o,
				custom: i,
			});
		return Nn.set(e, s), s;
	}
	var Sa = ["initial", "inherit", "unset", "revert", "revert-layer"];
	var Ai = 43,
		Ot = 45,
		ms = 110,
		Ln = !0,
		Yh = !1;
	function bs(e, t) {
		return e !== null && e.type === 9 && e.value.charCodeAt(0) === t;
	}
	function vi(e, t, n) {
		for (; e !== null && (e.type === 13 || e.type === 25); ) e = n(++t);
		return t;
	}
	function Zt(e, t, n, i) {
		if (!e) return 0;
		let a = e.value.charCodeAt(t);
		if (a === Ai || a === Ot) {
			if (n) return 0;
			t++;
		}
		for (; t < e.value.length; t++)
			if (!Ne(e.value.charCodeAt(t))) return 0;
		return i + 1;
	}
	function hs(e, t, n) {
		let i = !1,
			a = vi(e, t, n);
		if (((e = n(a)), e === null)) return t;
		if (e.type !== 10)
			if (bs(e, Ai) || bs(e, Ot)) {
				if (
					((i = !0),
					(a = vi(n(++a), a, n)),
					(e = n(a)),
					e === null || e.type !== 10)
				)
					return 0;
			} else return t;
		if (!i) {
			let o = e.value.charCodeAt(0);
			if (o !== Ai && o !== Ot) return 0;
		}
		return Zt(e, i ? 0 : 1, i, a);
	}
	function gs(e, t) {
		let n = 0;
		if (!e) return 0;
		if (e.type === 10) return Zt(e, 0, Yh, n);
		if (e.type === 1 && e.value.charCodeAt(0) === Ot) {
			if (!Ut(e.value, 1, ms)) return 0;
			switch (e.value.length) {
				case 2:
					return hs(t(++n), n, t);
				case 3:
					return e.value.charCodeAt(2) !== Ot
						? 0
						: ((n = vi(t(++n), n, t)), (e = t(n)), Zt(e, 0, Ln, n));
				default:
					return e.value.charCodeAt(2) !== Ot ? 0 : Zt(e, 3, Ln, n);
			}
		} else if (e.type === 1 || (bs(e, Ai) && t(n + 1).type === 1)) {
			if (
				(e.type !== 1 && (e = t(++n)),
				e === null || !Ut(e.value, 0, ms))
			)
				return 0;
			switch (e.value.length) {
				case 1:
					return hs(t(++n), n, t);
				case 2:
					return e.value.charCodeAt(1) !== Ot
						? 0
						: ((n = vi(t(++n), n, t)), (e = t(n)), Zt(e, 0, Ln, n));
				default:
					return e.value.charCodeAt(1) !== Ot ? 0 : Zt(e, 2, Ln, n);
			}
		} else if (e.type === 12) {
			let i = e.value.charCodeAt(0),
				a = i === Ai || i === Ot ? 1 : 0,
				o = a;
			for (; o < e.value.length && Ne(e.value.charCodeAt(o)); o++);
			return o === a || !Ut(e.value, o, ms)
				? 0
				: o + 1 === e.value.length
					? hs(t(++n), n, t)
					: e.value.charCodeAt(o + 1) !== Ot
						? 0
						: o + 2 === e.value.length
							? ((n = vi(t(++n), n, t)),
								(e = t(n)),
								Zt(e, 0, Ln, n))
							: Zt(e, o + 2, Ln, n);
		}
		return 0;
	}
	var Vh = 43,
		S0 = 45,
		D0 = 63,
		Wh = 117;
	function xs(e, t) {
		return e !== null && e.type === 9 && e.value.charCodeAt(0) === t;
	}
	function Gh(e, t) {
		return e.value.charCodeAt(0) === t;
	}
	function Ti(e, t, n) {
		let i = 0;
		for (let a = t; a < e.value.length; a++) {
			let o = e.value.charCodeAt(a);
			if (o === S0 && n && i !== 0) return Ti(e, t + i + 1, !1), 6;
			if (!ct(o) || ++i > 6) return 0;
		}
		return i;
	}
	function Da(e, t, n) {
		if (!e) return 0;
		for (; xs(n(t), D0); ) {
			if (++e > 6) return 0;
			t++;
		}
		return t;
	}
	function Es(e, t) {
		let n = 0;
		if (
			e === null ||
			e.type !== 1 ||
			!Ut(e.value, 0, Wh) ||
			((e = t(++n)), e === null)
		)
			return 0;
		if (xs(e, Vh))
			return (
				(e = t(++n)),
				e === null
					? 0
					: e.type === 1
						? Da(Ti(e, 0, !0), ++n, t)
						: xs(e, D0)
							? Da(1, ++n, t)
							: 0
			);
		if (e.type === 10) {
			let i = Ti(e, 1, !0);
			return i === 0
				? 0
				: ((e = t(++n)),
					e === null
						? n
						: e.type === 12 || e.type === 10
							? !Gh(e, S0) || !Ti(e, 1, !1)
								? 0
								: n + 1
							: Da(i, n, t));
		}
		return e.type === 12 ? Da(Ti(e, 1, !0), ++n, t) : 0;
	}
	var Xh = ["calc(", "-moz-calc(", "-webkit-calc("],
		vs = new Map([
			[2, 22],
			[21, 22],
			[19, 20],
			[23, 24],
		]);
	function kt(e, t) {
		return t < e.length ? e.charCodeAt(t) : 0;
	}
	function w0(e, t) {
		return Ht(e, 0, e.length, t);
	}
	function I0(e, t) {
		for (let n = 0; n < t.length; n++) if (w0(e, t[n])) return !0;
		return !1;
	}
	function N0(e, t) {
		return t !== e.length - 2 ? !1 : kt(e, t) === 92 && Ne(kt(e, t + 1));
	}
	function wa(e, t, n) {
		if (e && e.type === "Range") {
			let i = Number(n !== void 0 && n !== t.length ? t.substr(0, n) : t);
			if (
				isNaN(i) ||
				(e.min !== null && i < e.min && typeof e.min != "string") ||
				(e.max !== null && i > e.max && typeof e.max != "string")
			)
				return !0;
		}
		return !1;
	}
	function Kh(e, t) {
		let n = 0,
			i = [],
			a = 0;
		e: do {
			switch (e.type) {
				case 24:
				case 22:
				case 20:
					if (e.type !== n) break e;
					if (((n = i.pop()), i.length === 0)) {
						a++;
						break e;
					}
					break;
				case 2:
				case 21:
				case 19:
				case 23:
					i.push(n), (n = vs.get(e.type));
					break;
			}
			a++;
		} while ((e = t(a)));
		return a;
	}
	function Et(e) {
		return function (t, n, i) {
			return t === null
				? 0
				: t.type === 2 && I0(t.value, Xh)
					? Kh(t, n)
					: e(t, n, i);
		};
	}
	function _e(e) {
		return function (t) {
			return t === null || t.type !== e ? 0 : 1;
		};
	}
	function Qh(e) {
		if (e === null || e.type !== 1) return 0;
		let t = e.value.toLowerCase();
		return I0(t, Sa) || w0(t, "default") ? 0 : 1;
	}
	function Jh(e) {
		return e === null ||
			e.type !== 1 ||
			kt(e.value, 0) !== 45 ||
			kt(e.value, 1) !== 45
			? 0
			: 1;
	}
	function Zh(e) {
		if (e === null || e.type !== 4) return 0;
		let t = e.value.length;
		if (t !== 4 && t !== 5 && t !== 7 && t !== 9) return 0;
		for (let n = 1; n < t; n++) if (!ct(kt(e.value, n))) return 0;
		return 1;
	}
	function $h(e) {
		return e === null ||
			e.type !== 4 ||
			!Cn(kt(e.value, 1), kt(e.value, 2), kt(e.value, 3))
			? 0
			: 1;
	}
	function eb(e, t) {
		if (!e) return 0;
		let n = 0,
			i = [],
			a = 0;
		e: do {
			switch (e.type) {
				case 6:
				case 8:
					break e;
				case 24:
				case 22:
				case 20:
					if (e.type !== n) break e;
					n = i.pop();
					break;
				case 17:
					if (n === 0) break e;
					break;
				case 9:
					if (n === 0 && e.value === "!") break e;
					break;
				case 2:
				case 21:
				case 19:
				case 23:
					i.push(n), (n = vs.get(e.type));
					break;
			}
			a++;
		} while ((e = t(a)));
		return a;
	}
	function tb(e, t) {
		if (!e) return 0;
		let n = 0,
			i = [],
			a = 0;
		e: do {
			switch (e.type) {
				case 6:
				case 8:
					break e;
				case 24:
				case 22:
				case 20:
					if (e.type !== n) break e;
					n = i.pop();
					break;
				case 2:
				case 21:
				case 19:
				case 23:
					i.push(n), (n = vs.get(e.type));
					break;
			}
			a++;
		} while ((e = t(a)));
		return a;
	}
	function zt(e) {
		return (
			e && (e = new Set(e)),
			function (t, n, i) {
				if (t === null || t.type !== 12) return 0;
				let a = un(t.value, 0);
				if (e !== null) {
					let o = t.value.indexOf("\\", a),
						s =
							o === -1 || !N0(t.value, o)
								? t.value.substr(a)
								: t.value.substring(a, o);
					if (e.has(s.toLowerCase()) === !1) return 0;
				}
				return wa(i, t.value, a) ? 0 : 1;
			}
		);
	}
	function nb(e, t, n) {
		return e === null || e.type !== 11 || wa(n, e.value, e.value.length - 1)
			? 0
			: 1;
	}
	function L0(e) {
		return (
			typeof e != "function" &&
				(e = function () {
					return 0;
				}),
			function (t, n, i) {
				return t !== null && t.type === 10 && Number(t.value) === 0
					? 1
					: e(t, n, i);
			}
		);
	}
	function ib(e, t, n) {
		if (e === null) return 0;
		let i = un(e.value, 0);
		return (!(i === e.value.length) && !N0(e.value, i)) || wa(n, e.value, i)
			? 0
			: 1;
	}
	function ab(e, t, n) {
		if (e === null || e.type !== 10) return 0;
		let i = kt(e.value, 0) === 43 || kt(e.value, 0) === 45 ? 1 : 0;
		for (; i < e.value.length; i++) if (!Ne(kt(e.value, i))) return 0;
		return wa(n, e.value, i) ? 0 : 1;
	}
	var ob = {
			"ident-token": _e(1),
			"function-token": _e(2),
			"at-keyword-token": _e(3),
			"hash-token": _e(4),
			"string-token": _e(5),
			"bad-string-token": _e(6),
			"url-token": _e(7),
			"bad-url-token": _e(8),
			"delim-token": _e(9),
			"number-token": _e(10),
			"percentage-token": _e(11),
			"dimension-token": _e(12),
			"whitespace-token": _e(13),
			"CDO-token": _e(14),
			"CDC-token": _e(15),
			"colon-token": _e(16),
			"semicolon-token": _e(17),
			"comma-token": _e(18),
			"[-token": _e(19),
			"]-token": _e(20),
			"(-token": _e(21),
			")-token": _e(22),
			"{-token": _e(23),
			"}-token": _e(24),
		},
		sb = {
			string: _e(5),
			ident: _e(1),
			percentage: Et(nb),
			zero: L0(),
			number: Et(ib),
			integer: Et(ab),
			"custom-ident": Qh,
			"custom-property-name": Jh,
			"hex-color": Zh,
			"id-selector": $h,
			"an-plus-b": gs,
			urange: Es,
			"declaration-value": eb,
			"any-value": tb,
		};
	function rb(e) {
		let {
			angle: t,
			decibel: n,
			frequency: i,
			flex: a,
			length: o,
			resolution: s,
			semitones: r,
			time: c,
		} = e || {};
		return {
			dimension: Et(zt(null)),
			angle: Et(zt(t)),
			decibel: Et(zt(n)),
			frequency: Et(zt(i)),
			flex: Et(zt(a)),
			length: Et(L0(zt(o))),
			resolution: Et(zt(s)),
			semitones: Et(zt(r)),
			time: Et(zt(c)),
		};
	}
	function P0(e) {
		return { ...ob, ...sb, ...rb(e) };
	}
	var Ia = {};
	te(Ia, {
		angle: () => cb,
		decibel: () => mb,
		flex: () => fb,
		frequency: () => db,
		length: () => ub,
		resolution: () => pb,
		semitones: () => hb,
		time: () => lb,
	});
	var ub = [
			"cm",
			"mm",
			"q",
			"in",
			"pt",
			"pc",
			"px",
			"em",
			"rem",
			"ex",
			"rex",
			"cap",
			"rcap",
			"ch",
			"rch",
			"ic",
			"ric",
			"lh",
			"rlh",
			"vw",
			"svw",
			"lvw",
			"dvw",
			"vh",
			"svh",
			"lvh",
			"dvh",
			"vi",
			"svi",
			"lvi",
			"dvi",
			"vb",
			"svb",
			"lvb",
			"dvb",
			"vmin",
			"svmin",
			"lvmin",
			"dvmin",
			"vmax",
			"svmax",
			"lvmax",
			"dvmax",
			"cqw",
			"cqh",
			"cqi",
			"cqb",
			"cqmin",
			"cqmax",
		],
		cb = ["deg", "grad", "rad", "turn"],
		lb = ["s", "ms"],
		db = ["hz", "khz"],
		pb = ["dpi", "dpcm", "dppx", "x"],
		fb = ["fr"],
		mb = ["db"],
		hb = ["st"];
	function As(e, t, n) {
		return Object.assign(cn("SyntaxError", e), {
			input: t,
			offset: n,
			rawMessage: e,
			message:
				e +
				`
  ` +
				t +
				`
--` +
				new Array((n || t.length) + 1).join("-") +
				"^",
		});
	}
	var bb = 9,
		gb = 10,
		xb = 12,
		Eb = 13,
		vb = 32,
		Na = class {
			constructor(t) {
				(this.str = t), (this.pos = 0);
			}
			charCodeAt(t) {
				return t < this.str.length ? this.str.charCodeAt(t) : 0;
			}
			charCode() {
				return this.charCodeAt(this.pos);
			}
			nextCharCode() {
				return this.charCodeAt(this.pos + 1);
			}
			nextNonWsCode(t) {
				return this.charCodeAt(this.findWsEnd(t));
			}
			findWsEnd(t) {
				for (; t < this.str.length; t++) {
					let n = this.str.charCodeAt(t);
					if (
						n !== Eb &&
						n !== gb &&
						n !== xb &&
						n !== vb &&
						n !== bb
					)
						break;
				}
				return t;
			}
			substringToPos(t) {
				return this.str.substring(this.pos, (this.pos = t));
			}
			eat(t) {
				this.charCode() !== t &&
					this.error("Expect `" + String.fromCharCode(t) + "`"),
					this.pos++;
			}
			peek() {
				return this.pos < this.str.length
					? this.str.charAt(this.pos++)
					: "";
			}
			error(t) {
				throw new As(t, this.str, this.pos);
			}
		};
	var Ab = 9,
		Tb = 10,
		Cb = 12,
		yb = 13,
		kb = 32,
		j0 = 33,
		ys = 35,
		R0 = 38,
		La = 39,
		q0 = 40,
		_b = 41,
		z0 = 42,
		ks = 43,
		_s = 44,
		O0 = 45,
		Ss = 60,
		Y0 = 62,
		Cs = 63,
		Sb = 64,
		Ba = 91,
		Ds = 93,
		Pa = 123,
		B0 = 124,
		F0 = 125,
		M0 = 8734,
		Ci = new Uint8Array(128).map((e, t) =>
			/[a-zA-Z0-9\-]/.test(String.fromCharCode(t)) ? 1 : 0,
		),
		U0 = { " ": 1, "&&": 2, "||": 3, "|": 4 };
	function Ra(e) {
		return e.substringToPos(e.findWsEnd(e.pos));
	}
	function Pn(e) {
		let t = e.pos;
		for (; t < e.str.length; t++) {
			let n = e.str.charCodeAt(t);
			if (n >= 128 || Ci[n] === 0) break;
		}
		return e.pos === t && e.error("Expect a keyword"), e.substringToPos(t);
	}
	function Oa(e) {
		let t = e.pos;
		for (; t < e.str.length; t++) {
			let n = e.str.charCodeAt(t);
			if (n < 48 || n > 57) break;
		}
		return e.pos === t && e.error("Expect a number"), e.substringToPos(t);
	}
	function Db(e) {
		let t = e.str.indexOf("'", e.pos + 1);
		return (
			t === -1 &&
				((e.pos = e.str.length), e.error("Expect an apostrophe")),
			e.substringToPos(t + 1)
		);
	}
	function H0(e) {
		let t = null,
			n = null;
		return (
			e.eat(Pa),
			(t = Oa(e)),
			e.charCode() === _s
				? (e.pos++, e.charCode() !== F0 && (n = Oa(e)))
				: (n = t),
			e.eat(F0),
			{ min: Number(t), max: n ? Number(n) : 0 }
		);
	}
	function wb(e) {
		let t = null,
			n = !1;
		switch (e.charCode()) {
			case z0:
				e.pos++, (t = { min: 0, max: 0 });
				break;
			case ks:
				e.pos++, (t = { min: 1, max: 0 });
				break;
			case Cs:
				e.pos++, (t = { min: 0, max: 1 });
				break;
			case ys:
				e.pos++,
					(n = !0),
					e.charCode() === Pa
						? (t = H0(e))
						: e.charCode() === Cs
							? (e.pos++, (t = { min: 0, max: 0 }))
							: (t = { min: 1, max: 0 });
				break;
			case Pa:
				t = H0(e);
				break;
			default:
				return null;
		}
		return {
			type: "Multiplier",
			comma: n,
			min: t.min,
			max: t.max,
			term: null,
		};
	}
	function Rn(e, t) {
		let n = wb(e);
		return n !== null
			? ((n.term = t),
				e.charCode() === ys && e.charCodeAt(e.pos - 1) === ks
					? Rn(e, n)
					: n)
			: t;
	}
	function Ts(e) {
		let t = e.peek();
		return t === "" ? null : { type: "Token", value: t };
	}
	function Ib(e) {
		let t;
		return (
			e.eat(Ss),
			e.eat(La),
			(t = Pn(e)),
			e.eat(La),
			e.eat(Y0),
			Rn(e, { type: "Property", name: t })
		);
	}
	function Nb(e) {
		let t = null,
			n = null,
			i = 1;
		return (
			e.eat(Ba),
			e.charCode() === O0 && (e.peek(), (i = -1)),
			i == -1 && e.charCode() === M0
				? e.peek()
				: ((t = i * Number(Oa(e))),
					Ci[e.charCode()] !== 0 && (t += Pn(e))),
			Ra(e),
			e.eat(_s),
			Ra(e),
			e.charCode() === M0
				? e.peek()
				: ((i = 1),
					e.charCode() === O0 && (e.peek(), (i = -1)),
					(n = i * Number(Oa(e))),
					Ci[e.charCode()] !== 0 && (n += Pn(e))),
			e.eat(Ds),
			{ type: "Range", min: t, max: n }
		);
	}
	function Lb(e) {
		let t,
			n = null;
		return (
			e.eat(Ss),
			(t = Pn(e)),
			e.charCode() === q0 &&
				e.nextCharCode() === _b &&
				((e.pos += 2), (t += "()")),
			e.charCodeAt(e.findWsEnd(e.pos)) === Ba && (Ra(e), (n = Nb(e))),
			e.eat(Y0),
			Rn(e, { type: "Type", name: t, opts: n })
		);
	}
	function Pb(e) {
		let t = Pn(e);
		return e.charCode() === q0
			? (e.pos++, { type: "Function", name: t })
			: Rn(e, { type: "Keyword", name: t });
	}
	function Rb(e, t) {
		function n(a, o) {
			return {
				type: "Group",
				terms: a,
				combinator: o,
				disallowEmpty: !1,
				explicit: !1,
			};
		}
		let i;
		for (t = Object.keys(t).sort((a, o) => U0[a] - U0[o]); t.length > 0; ) {
			i = t.shift();
			let a = 0,
				o = 0;
			for (; a < e.length; a++) {
				let s = e[a];
				s.type === "Combinator" &&
					(s.value === i
						? (o === -1 && (o = a - 1), e.splice(a, 1), a--)
						: (o !== -1 &&
								a - o > 1 &&
								(e.splice(o, a - o, n(e.slice(o, a), i)),
								(a = o + 1)),
							(o = -1)));
			}
			o !== -1 && t.length && e.splice(o, a - o, n(e.slice(o, a), i));
		}
		return i;
	}
	function V0(e) {
		let t = [],
			n = {},
			i,
			a = null,
			o = e.pos;
		for (; (i = Bb(e)); )
			i.type !== "Spaces" &&
				(i.type === "Combinator"
					? ((a === null || a.type === "Combinator") &&
							((e.pos = o), e.error("Unexpected combinator")),
						(n[i.value] = !0))
					: a !== null &&
						a.type !== "Combinator" &&
						((n[" "] = !0),
						t.push({ type: "Combinator", value: " " })),
				t.push(i),
				(a = i),
				(o = e.pos));
		return (
			a !== null &&
				a.type === "Combinator" &&
				((e.pos -= o), e.error("Unexpected combinator")),
			{
				type: "Group",
				terms: t,
				combinator: Rb(t, n) || " ",
				disallowEmpty: !1,
				explicit: !1,
			}
		);
	}
	function Ob(e) {
		let t;
		return (
			e.eat(Ba),
			(t = V0(e)),
			e.eat(Ds),
			(t.explicit = !0),
			e.charCode() === j0 && (e.pos++, (t.disallowEmpty = !0)),
			t
		);
	}
	function Bb(e) {
		let t = e.charCode();
		if (t < 128 && Ci[t] === 1) return Pb(e);
		switch (t) {
			case Ds:
				break;
			case Ba:
				return Rn(e, Ob(e));
			case Ss:
				return e.nextCharCode() === La ? Ib(e) : Lb(e);
			case B0:
				return {
					type: "Combinator",
					value: e.substringToPos(
						e.pos + (e.nextCharCode() === B0 ? 2 : 1),
					),
				};
			case R0:
				return e.pos++, e.eat(R0), { type: "Combinator", value: "&&" };
			case _s:
				return e.pos++, { type: "Comma" };
			case La:
				return Rn(e, { type: "String", value: Db(e) });
			case kb:
			case Ab:
			case Tb:
			case yb:
			case Cb:
				return { type: "Spaces", value: Ra(e) };
			case Sb:
				return (
					(t = e.nextCharCode()),
					t < 128 && Ci[t] === 1
						? (e.pos++, { type: "AtKeyword", name: Pn(e) })
						: Ts(e)
				);
			case z0:
			case ks:
			case Cs:
			case ys:
			case j0:
				break;
			case Pa:
				if (((t = e.nextCharCode()), t < 48 || t > 57)) return Ts(e);
				break;
			default:
				return Ts(e);
		}
	}
	function yi(e) {
		let t = new Na(e),
			n = V0(t);
		return (
			t.pos !== e.length && t.error("Unexpected input"),
			n.terms.length === 1 && n.terms[0].type === "Group" ? n.terms[0] : n
		);
	}
	var ki = function () {};
	function W0(e) {
		return typeof e == "function" ? e : ki;
	}
	function ws(e, t, n) {
		function i(s) {
			switch ((a.call(n, s), s.type)) {
				case "Group":
					s.terms.forEach(i);
					break;
				case "Multiplier":
					i(s.term);
					break;
				case "Type":
				case "Property":
				case "Keyword":
				case "AtKeyword":
				case "Function":
				case "String":
				case "Token":
				case "Comma":
					break;
				default:
					throw new Error("Unknown type: " + s.type);
			}
			o.call(n, s);
		}
		let a = ki,
			o = ki;
		if (
			(typeof t == "function"
				? (a = t)
				: t && ((a = W0(t.enter)), (o = W0(t.leave))),
			a === ki && o === ki)
		)
			throw new Error(
				"Neither `enter` nor `leave` walker handler is set or both aren't a function",
			);
		i(e, n);
	}
	var Mb = {
		decorator(e) {
			let t = [],
				n = null;
			return {
				...e,
				node(i) {
					let a = n;
					(n = i), e.node.call(this, i), (n = a);
				},
				emit(i, a, o) {
					t.push({ type: a, value: i, node: o ? null : n });
				},
				result() {
					return t;
				},
			};
		},
	};
	function Ub(e) {
		let t = [];
		return (
			Jt(e, (n, i, a) =>
				t.push({ type: n, value: e.slice(i, a), node: null }),
			),
			t
		);
	}
	function G0(e, t) {
		return typeof e == "string" ? Ub(e) : t.generate(e, Mb);
	}
	var me = { type: "Match" },
		xe = { type: "Mismatch" },
		Fa = { type: "DisallowEmpty" },
		Hb = 40,
		jb = 41;
	function nt(e, t, n) {
		return (t === me && n === xe) || (e === me && t === me && n === me)
			? e
			: (e.type === "If" &&
					e.else === xe &&
					t === me &&
					((t = e.then), (e = e.match)),
				{ type: "If", match: e, then: t, else: n });
	}
	function K0(e) {
		return (
			e.length > 2 &&
			e.charCodeAt(e.length - 2) === Hb &&
			e.charCodeAt(e.length - 1) === jb
		);
	}
	function X0(e) {
		return (
			e.type === "Keyword" ||
			e.type === "AtKeyword" ||
			e.type === "Function" ||
			(e.type === "Type" && K0(e.name))
		);
	}
	function Is(e, t, n) {
		switch (e) {
			case " ": {
				let i = me;
				for (let a = t.length - 1; a >= 0; a--) {
					let o = t[a];
					i = nt(o, i, xe);
				}
				return i;
			}
			case "|": {
				let i = xe,
					a = null;
				for (let o = t.length - 1; o >= 0; o--) {
					let s = t[o];
					if (
						X0(s) &&
						(a === null &&
							o > 0 &&
							X0(t[o - 1]) &&
							((a = Object.create(null)),
							(i = nt({ type: "Enum", map: a }, me, i))),
						a !== null)
					) {
						let r = (
							K0(s.name) ? s.name.slice(0, -1) : s.name
						).toLowerCase();
						if (!(r in a)) {
							a[r] = s;
							continue;
						}
					}
					(a = null), (i = nt(s, me, i));
				}
				return i;
			}
			case "&&": {
				if (t.length > 5)
					return { type: "MatchOnce", terms: t, all: !0 };
				let i = xe;
				for (let a = t.length - 1; a >= 0; a--) {
					let o = t[a],
						s;
					t.length > 1
						? (s = Is(
								e,
								t.filter(function (r) {
									return r !== o;
								}),
								!1,
							))
						: (s = me),
						(i = nt(o, s, i));
				}
				return i;
			}
			case "||": {
				if (t.length > 5)
					return { type: "MatchOnce", terms: t, all: !1 };
				let i = n ? me : xe;
				for (let a = t.length - 1; a >= 0; a--) {
					let o = t[a],
						s;
					t.length > 1
						? (s = Is(
								e,
								t.filter(function (r) {
									return r !== o;
								}),
								!0,
							))
						: (s = me),
						(i = nt(o, s, i));
				}
				return i;
			}
		}
	}
	function qb(e) {
		let t = me,
			n = Ns(e.term);
		if (e.max === 0)
			(n = nt(n, Fa, xe)),
				(t = nt(n, null, xe)),
				(t.then = nt(me, me, t)),
				e.comma &&
					(t.then.else = nt({ type: "Comma", syntax: e }, t, xe));
		else
			for (let i = e.min || 1; i <= e.max; i++)
				e.comma &&
					t !== me &&
					(t = nt({ type: "Comma", syntax: e }, t, xe)),
					(t = nt(n, nt(me, me, t), xe));
		if (e.min === 0) t = nt(me, me, t);
		else
			for (let i = 0; i < e.min - 1; i++)
				e.comma &&
					t !== me &&
					(t = nt({ type: "Comma", syntax: e }, t, xe)),
					(t = nt(n, t, xe));
		return t;
	}
	function Ns(e) {
		if (typeof e == "function") return { type: "Generic", fn: e };
		switch (e.type) {
			case "Group": {
				let t = Is(e.combinator, e.terms.map(Ns), !1);
				return e.disallowEmpty && (t = nt(t, Fa, xe)), t;
			}
			case "Multiplier":
				return qb(e);
			case "Type":
			case "Property":
				return { type: e.type, name: e.name, syntax: e };
			case "Keyword":
				return { type: e.type, name: e.name.toLowerCase(), syntax: e };
			case "AtKeyword":
				return {
					type: e.type,
					name: "@" + e.name.toLowerCase(),
					syntax: e,
				};
			case "Function":
				return {
					type: e.type,
					name: e.name.toLowerCase() + "(",
					syntax: e,
				};
			case "String":
				return e.value.length === 3
					? { type: "Token", value: e.value.charAt(1), syntax: e }
					: {
							type: e.type,
							value: e.value
								.substr(1, e.value.length - 2)
								.replace(/\\'/g, "'"),
							syntax: e,
						};
			case "Token":
				return { type: e.type, value: e.value, syntax: e };
			case "Comma":
				return { type: e.type, syntax: e };
			default:
				throw new Error("Unknown node type:", e.type);
		}
	}
	function Ma(e, t) {
		return (
			typeof e == "string" && (e = yi(e)),
			{ type: "MatchGraph", match: Ns(e), syntax: t || null, source: e }
		);
	}
	var { hasOwnProperty: Q0 } = Object.prototype,
		zb = 0,
		Yb = 1,
		Ps = 2,
		td = 3,
		J0 = "Match",
		Vb = "Mismatch",
		Wb =
			"Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)",
		Z0 = 15e3,
		Gb = 0;
	function Xb(e) {
		let t = null,
			n = null,
			i = e;
		for (; i !== null; ) (n = i.prev), (i.prev = t), (t = i), (i = n);
		return t;
	}
	function Ls(e, t) {
		if (e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++) {
			let i = t.charCodeAt(n),
				a = e.charCodeAt(n);
			if ((a >= 65 && a <= 90 && (a = a | 32), a !== i)) return !1;
		}
		return !0;
	}
	function Kb(e) {
		return e.type !== 9 ? !1 : e.value !== "?";
	}
	function $0(e) {
		return e === null
			? !0
			: e.type === 18 ||
					e.type === 2 ||
					e.type === 21 ||
					e.type === 19 ||
					e.type === 23 ||
					Kb(e);
	}
	function ed(e) {
		return e === null
			? !0
			: e.type === 22 ||
					e.type === 20 ||
					e.type === 24 ||
					(e.type === 9 && e.value === "/");
	}
	function Qb(e, t, n) {
		function i() {
			do A++, (E = A < e.length ? e[A] : null);
			while (E !== null && (E.type === 13 || E.type === 25));
		}
		function a(F) {
			let k = A + F;
			return k < e.length ? e[k] : null;
		}
		function o(F, k) {
			return {
				nextState: F,
				matchStack: y,
				syntaxStack: f,
				thenStack: p,
				tokenIndex: A,
				prev: k,
			};
		}
		function s(F) {
			p = { nextState: F, matchStack: y, syntaxStack: f, prev: p };
		}
		function r(F) {
			g = o(F, g);
		}
		function c() {
			(y = { type: Yb, syntax: t.syntax, token: E, prev: y }),
				i(),
				(T = null),
				A > L && (L = A);
		}
		function l() {
			(f = {
				syntax: t.syntax,
				opts: t.syntax.opts || (f !== null && f.opts) || null,
				prev: f,
			}),
				(y = { type: Ps, syntax: t.syntax, token: y.token, prev: y });
		}
		function d() {
			y.type === Ps
				? (y = y.prev)
				: (y = { type: td, syntax: f.syntax, token: y.token, prev: y }),
				(f = f.prev);
		}
		let f = null,
			p = null,
			g = null,
			T = null,
			D = 0,
			S = null,
			E = null,
			A = -1,
			L = 0,
			y = { type: zb, syntax: null, token: null, prev: null };
		for (i(); S === null && ++D < Z0; )
			switch (t.type) {
				case "Match":
					if (p === null) {
						if (
							E !== null &&
							(A !== e.length - 1 ||
								(E.value !== "\\0" && E.value !== "\\9"))
						) {
							t = xe;
							break;
						}
						S = J0;
						break;
					}
					if (((t = p.nextState), t === Fa))
						if (p.matchStack === y) {
							t = xe;
							break;
						} else t = me;
					for (; p.syntaxStack !== f; ) d();
					p = p.prev;
					break;
				case "Mismatch":
					if (T !== null && T !== !1)
						(g === null || A > g.tokenIndex) && ((g = T), (T = !1));
					else if (g === null) {
						S = Vb;
						break;
					}
					(t = g.nextState),
						(p = g.thenStack),
						(f = g.syntaxStack),
						(y = g.matchStack),
						(A = g.tokenIndex),
						(E = A < e.length ? e[A] : null),
						(g = g.prev);
					break;
				case "MatchGraph":
					t = t.match;
					break;
				case "If":
					t.else !== xe && r(t.else),
						t.then !== me && s(t.then),
						(t = t.match);
					break;
				case "MatchOnce":
					t = {
						type: "MatchOnceBuffer",
						syntax: t,
						index: 0,
						mask: 0,
					};
					break;
				case "MatchOnceBuffer": {
					let J = t.syntax.terms;
					if (t.index === J.length) {
						if (t.mask === 0 || t.syntax.all) {
							t = xe;
							break;
						}
						t = me;
						break;
					}
					if (t.mask === (1 << J.length) - 1) {
						t = me;
						break;
					}
					for (; t.index < J.length; t.index++) {
						let N = 1 << t.index;
						if (!(t.mask & N)) {
							r(t),
								s({
									type: "AddMatchOnce",
									syntax: t.syntax,
									mask: t.mask | N,
								}),
								(t = J[t.index++]);
							break;
						}
					}
					break;
				}
				case "AddMatchOnce":
					t = {
						type: "MatchOnceBuffer",
						syntax: t.syntax,
						index: 0,
						mask: t.mask,
					};
					break;
				case "Enum":
					if (E !== null) {
						let J = E.value.toLowerCase();
						if (
							(J.indexOf("\\") !== -1 &&
								(J = J.replace(/\\[09].*$/, "")),
							Q0.call(t.map, J))
						) {
							t = t.map[J];
							break;
						}
					}
					t = xe;
					break;
				case "Generic": {
					let J = f !== null ? f.opts : null,
						N = A + Math.floor(t.fn(E, a, J));
					if (!isNaN(N) && N > A) {
						for (; A < N; ) c();
						t = me;
					} else t = xe;
					break;
				}
				case "Type":
				case "Property": {
					let J = t.type === "Type" ? "types" : "properties",
						N = Q0.call(n, J) ? n[J][t.name] : null;
					if (!N || !N.match)
						throw new Error(
							"Bad syntax reference: " +
								(t.type === "Type"
									? "<" + t.name + ">"
									: "<'" + t.name + "'>"),
						);
					if (
						T !== !1 &&
						E !== null &&
						t.type === "Type" &&
						((t.name === "custom-ident" && E.type === 1) ||
							(t.name === "length" && E.value === "0"))
					) {
						T === null && (T = o(t, g)), (t = xe);
						break;
					}
					l(), (t = N.match);
					break;
				}
				case "Keyword": {
					let J = t.name;
					if (E !== null) {
						let N = E.value;
						if (
							(N.indexOf("\\") !== -1 &&
								(N = N.replace(/\\[09].*$/, "")),
							Ls(N, J))
						) {
							c(), (t = me);
							break;
						}
					}
					t = xe;
					break;
				}
				case "AtKeyword":
				case "Function":
					if (E !== null && Ls(E.value, t.name)) {
						c(), (t = me);
						break;
					}
					t = xe;
					break;
				case "Token":
					if (E !== null && E.value === t.value) {
						c(), (t = me);
						break;
					}
					t = xe;
					break;
				case "Comma":
					E !== null && E.type === 18
						? $0(y.token)
							? (t = xe)
							: (c(), (t = ed(E) ? xe : me))
						: (t = $0(y.token) || ed(E) ? me : xe);
					break;
				case "String":
					let F = "",
						k = A;
					for (; k < e.length && F.length < t.value.length; k++)
						F += e[k].value;
					if (Ls(F, t.value)) {
						for (; A < k; ) c();
						t = me;
					} else t = xe;
					break;
				default:
					throw new Error("Unknown node type: " + t.type);
			}
		switch (((Gb += D), S)) {
			case null:
				console.warn(
					"[csstree-match] BREAK after " + Z0 + " iterations",
				),
					(S = Wb),
					(y = null);
				break;
			case J0:
				for (; f !== null; ) d();
				break;
			default:
				y = null;
		}
		return {
			tokens: e,
			reason: S,
			iterations: D,
			match: y,
			longestMatch: L,
		};
	}
	function Rs(e, t, n) {
		let i = Qb(e, t, n || {});
		if (i.match === null) return i;
		let a = i.match,
			o = (i.match = { syntax: t.syntax || null, match: [] }),
			s = [o];
		for (a = Xb(a).prev; a !== null; ) {
			switch (a.type) {
				case Ps:
					o.match.push((o = { syntax: a.syntax, match: [] })),
						s.push(o);
					break;
				case td:
					s.pop(), (o = s[s.length - 1]);
					break;
				default:
					o.match.push({
						syntax: a.syntax || null,
						token: a.token.value,
						node: a.token.node,
					});
			}
			a = a.prev;
		}
		return i;
	}
	var Bs = {};
	te(Bs, {
		getTrace: () => nd,
		isKeyword: () => $b,
		isProperty: () => Zb,
		isType: () => Jb,
	});
	function nd(e) {
		function t(a) {
			return a === null
				? !1
				: a.type === "Type" ||
						a.type === "Property" ||
						a.type === "Keyword";
		}
		function n(a) {
			if (Array.isArray(a.match)) {
				for (let o = 0; o < a.match.length; o++)
					if (n(a.match[o]))
						return t(a.syntax) && i.unshift(a.syntax), !0;
			} else if (a.node === e)
				return (i = t(a.syntax) ? [a.syntax] : []), !0;
			return !1;
		}
		let i = null;
		return this.matched !== null && n(this.matched), i;
	}
	function Jb(e, t) {
		return Os(this, e, (n) => n.type === "Type" && n.name === t);
	}
	function Zb(e, t) {
		return Os(this, e, (n) => n.type === "Property" && n.name === t);
	}
	function $b(e) {
		return Os(this, e, (t) => t.type === "Keyword");
	}
	function Os(e, t, n) {
		let i = nd.call(e, t);
		return i === null ? !1 : i.some(n);
	}
	function id(e) {
		return "node" in e ? e.node : id(e.match[0]);
	}
	function ad(e) {
		return "node" in e ? e.node : ad(e.match[e.match.length - 1]);
	}
	function Fs(e, t, n, i, a) {
		function o(r) {
			if (
				r.syntax !== null &&
				r.syntax.type === i &&
				r.syntax.name === a
			) {
				let c = id(r),
					l = ad(r);
				e.syntax.walk(t, function (d, f, p) {
					if (d === c) {
						let g = new rt();
						do {
							if ((g.appendData(f.data), f.data === l)) break;
							f = f.next;
						} while (f !== null);
						s.push({ parent: p, nodes: g });
					}
				});
			}
			Array.isArray(r.match) && r.match.forEach(o);
		}
		let s = [];
		return n.matched !== null && o(n.matched), s;
	}
	var { hasOwnProperty: _i } = Object.prototype;
	function Ms(e) {
		return (
			typeof e == "number" && isFinite(e) && Math.floor(e) === e && e >= 0
		);
	}
	function od(e) {
		return !!e && Ms(e.offset) && Ms(e.line) && Ms(e.column);
	}
	function eg(e, t) {
		return function (i, a) {
			if (!i || i.constructor !== Object)
				return a(i, "Type of node should be an Object");
			for (let o in i) {
				let s = !0;
				if (_i.call(i, o) !== !1) {
					if (o === "type")
						i.type !== e &&
							a(
								i,
								"Wrong node type `" +
									i.type +
									"`, expected `" +
									e +
									"`",
							);
					else if (o === "loc") {
						if (i.loc === null) continue;
						if (i.loc && i.loc.constructor === Object)
							if (typeof i.loc.source != "string") o += ".source";
							else if (!od(i.loc.start)) o += ".start";
							else if (!od(i.loc.end)) o += ".end";
							else continue;
						s = !1;
					} else if (t.hasOwnProperty(o)) {
						s = !1;
						for (let r = 0; !s && r < t[o].length; r++) {
							let c = t[o][r];
							switch (c) {
								case String:
									s = typeof i[o] == "string";
									break;
								case Boolean:
									s = typeof i[o] == "boolean";
									break;
								case null:
									s = i[o] === null;
									break;
								default:
									typeof c == "string"
										? (s = i[o] && i[o].type === c)
										: Array.isArray(c) &&
											(s = i[o] instanceof rt);
							}
						}
					} else
						a(
							i,
							"Unknown field `" + o + "` for " + e + " node type",
						);
					s || a(i, "Bad value for `" + e + "." + o + "`");
				}
			}
			for (let o in t)
				_i.call(t, o) &&
					_i.call(i, o) === !1 &&
					a(i, "Field `" + e + "." + o + "` is missed");
		};
	}
	function tg(e, t) {
		let n = t.structure,
			i = { type: String, loc: !0 },
			a = { type: '"' + e + '"' };
		for (let o in n) {
			if (_i.call(n, o) === !1) continue;
			let s = [],
				r = (i[o] = Array.isArray(n[o]) ? n[o].slice() : [n[o]]);
			for (let c = 0; c < r.length; c++) {
				let l = r[c];
				if (l === String || l === Boolean) s.push(l.name);
				else if (l === null) s.push("null");
				else if (typeof l == "string") s.push("<" + l + ">");
				else if (Array.isArray(l)) s.push("List");
				else
					throw new Error(
						"Wrong value `" +
							l +
							"` in `" +
							e +
							"." +
							o +
							"` structure definition",
					);
			}
			a[o] = s.join(" | ");
		}
		return { docs: a, check: eg(e, i) };
	}
	function sd(e) {
		let t = {};
		if (e.node) {
			for (let n in e.node)
				if (_i.call(e.node, n)) {
					let i = e.node[n];
					if (i.structure) t[n] = tg(n, i);
					else
						throw new Error(
							"Missed `structure` field in `" +
								n +
								"` node type definition",
						);
				}
		}
		return t;
	}
	var ng = Ma(Sa.join(" | "));
	function Us(e, t, n) {
		let i = {};
		for (let a in e)
			e[a].syntax &&
				(i[a] = n ? e[a].syntax : wn(e[a].syntax, { compact: t }));
		return i;
	}
	function ig(e, t, n) {
		let i = {};
		for (let [a, o] of Object.entries(e))
			i[a] = {
				prelude:
					o.prelude &&
					(n
						? o.prelude.syntax
						: wn(o.prelude.syntax, { compact: t })),
				descriptors: o.descriptors && Us(o.descriptors, t, n),
			};
		return i;
	}
	function ag(e) {
		for (let t = 0; t < e.length; t++)
			if (e[t].value.toLowerCase() === "var(") return !0;
		return !1;
	}
	function _t(e, t, n) {
		return { matched: e, iterations: n, error: t, ...Bs };
	}
	function On(e, t, n, i) {
		let a = G0(n, e.syntax),
			o;
		return ag(a)
			? _t(
					null,
					new Error(
						"Matching for a tree with var() is not supported",
					),
				)
			: (i && (o = Rs(a, e.cssWideKeywordsSyntax, e)),
				(!i || !o.match) && ((o = Rs(a, t.match, e)), !o.match)
					? _t(null, new k0(o.reason, t.syntax, n, o), o.iterations)
					: _t(o.match, null, o.iterations));
	}
	var Bn = class {
		constructor(t, n, i) {
			if (
				((this.cssWideKeywordsSyntax = ng),
				(this.syntax = n),
				(this.generic = !1),
				(this.units = { ...Ia }),
				(this.atrules = Object.create(null)),
				(this.properties = Object.create(null)),
				(this.types = Object.create(null)),
				(this.structure = i || sd(t)),
				t)
			) {
				if (t.units)
					for (let a of Object.keys(Ia))
						Array.isArray(t.units[a]) &&
							(this.units[a] = t.units[a]);
				if (t.types)
					for (let a in t.types) this.addType_(a, t.types[a]);
				if (t.generic) {
					this.generic = !0;
					for (let [a, o] of Object.entries(P0(this.units)))
						this.addType_(a, o);
				}
				if (t.atrules)
					for (let a in t.atrules) this.addAtrule_(a, t.atrules[a]);
				if (t.properties)
					for (let a in t.properties)
						this.addProperty_(a, t.properties[a]);
			}
		}
		checkStructure(t) {
			function n(o, s) {
				a.push({ node: o, message: s });
			}
			let i = this.structure,
				a = [];
			return (
				this.syntax.walk(t, function (o) {
					i.hasOwnProperty(o.type)
						? i[o.type].check(o, n)
						: n(o, "Unknown node type `" + o.type + "`");
				}),
				a.length ? a : !1
			);
		}
		createDescriptor(t, n, i, a = null) {
			let o = { type: n, name: i },
				s = {
					type: n,
					name: i,
					parent: a,
					serializable:
						typeof t == "string" ||
						(t && typeof t.type == "string"),
					syntax: null,
					match: null,
				};
			return (
				typeof t == "function"
					? (s.match = Ma(t, o))
					: (typeof t == "string"
							? Object.defineProperty(s, "syntax", {
									get() {
										return (
											Object.defineProperty(s, "syntax", {
												value: yi(t),
											}),
											s.syntax
										);
									},
								})
							: (s.syntax = t),
						Object.defineProperty(s, "match", {
							get() {
								return (
									Object.defineProperty(s, "match", {
										value: Ma(s.syntax, o),
									}),
									s.match
								);
							},
						})),
				s
			);
		}
		addAtrule_(t, n) {
			n &&
				(this.atrules[t] = {
					type: "Atrule",
					name: t,
					prelude: n.prelude
						? this.createDescriptor(n.prelude, "AtrulePrelude", t)
						: null,
					descriptors: n.descriptors
						? Object.keys(n.descriptors).reduce(
								(i, a) => (
									(i[a] = this.createDescriptor(
										n.descriptors[a],
										"AtruleDescriptor",
										a,
										t,
									)),
									i
								),
								Object.create(null),
							)
						: null,
				});
		}
		addProperty_(t, n) {
			n && (this.properties[t] = this.createDescriptor(n, "Property", t));
		}
		addType_(t, n) {
			n && (this.types[t] = this.createDescriptor(n, "Type", t));
		}
		checkAtruleName(t) {
			if (!this.getAtrule(t)) return new In("Unknown at-rule", "@" + t);
		}
		checkAtrulePrelude(t, n) {
			let i = this.checkAtruleName(t);
			if (i) return i;
			let a = this.getAtrule(t);
			if (!a.prelude && n)
				return new SyntaxError(
					"At-rule `@" + t + "` should not contain a prelude",
				);
			if (a.prelude && !n && !On(this, a.prelude, "", !1).matched)
				return new SyntaxError(
					"At-rule `@" + t + "` should contain a prelude",
				);
		}
		checkAtruleDescriptorName(t, n) {
			let i = this.checkAtruleName(t);
			if (i) return i;
			let a = this.getAtrule(t),
				o = ka(n);
			if (!a.descriptors)
				return new SyntaxError(
					"At-rule `@" + t + "` has no known descriptors",
				);
			if (!a.descriptors[o.name] && !a.descriptors[o.basename])
				return new In("Unknown at-rule descriptor", n);
		}
		checkPropertyName(t) {
			if (!this.getProperty(t)) return new In("Unknown property", t);
		}
		matchAtrulePrelude(t, n) {
			let i = this.checkAtrulePrelude(t, n);
			if (i) return _t(null, i);
			let a = this.getAtrule(t);
			return a.prelude
				? On(this, a.prelude, n || "", !1)
				: _t(null, null);
		}
		matchAtruleDescriptor(t, n, i) {
			let a = this.checkAtruleDescriptorName(t, n);
			if (a) return _t(null, a);
			let o = this.getAtrule(t),
				s = ka(n);
			return On(
				this,
				o.descriptors[s.name] || o.descriptors[s.basename],
				i,
				!1,
			);
		}
		matchDeclaration(t) {
			return t.type !== "Declaration"
				? _t(null, new Error("Not a Declaration node"))
				: this.matchProperty(t.property, t.value);
		}
		matchProperty(t, n) {
			if (fs(t).custom)
				return _t(
					null,
					new Error(
						"Lexer matching doesn't applicable for custom properties",
					),
				);
			let i = this.checkPropertyName(t);
			return i ? _t(null, i) : On(this, this.getProperty(t), n, !0);
		}
		matchType(t, n) {
			let i = this.getType(t);
			return i ? On(this, i, n, !1) : _t(null, new In("Unknown type", t));
		}
		match(t, n) {
			return typeof t != "string" && (!t || !t.type)
				? _t(null, new In("Bad syntax"))
				: ((typeof t == "string" || !t.match) &&
						(t = this.createDescriptor(t, "Type", "anonymous")),
					On(this, t, n, !1));
		}
		findValueFragments(t, n, i, a) {
			return Fs(this, n, this.matchProperty(t, n), i, a);
		}
		findDeclarationValueFragments(t, n, i) {
			return Fs(this, t.value, this.matchDeclaration(t), n, i);
		}
		findAllFragments(t, n, i) {
			let a = [];
			return (
				this.syntax.walk(t, {
					visit: "Declaration",
					enter: (o) => {
						a.push.apply(
							a,
							this.findDeclarationValueFragments(o, n, i),
						);
					},
				}),
				a
			);
		}
		getAtrule(t, n = !0) {
			let i = ka(t);
			return (
				(i.vendor && n
					? this.atrules[i.name] || this.atrules[i.basename]
					: this.atrules[i.name]) || null
			);
		}
		getAtrulePrelude(t, n = !0) {
			let i = this.getAtrule(t, n);
			return (i && i.prelude) || null;
		}
		getAtruleDescriptor(t, n) {
			return (
				(this.atrules.hasOwnProperty(t) &&
					this.atrules.declarators &&
					this.atrules[t].declarators[n]) ||
				null
			);
		}
		getProperty(t, n = !0) {
			let i = fs(t);
			return (
				(i.vendor && n
					? this.properties[i.name] || this.properties[i.basename]
					: this.properties[i.name]) || null
			);
		}
		getType(t) {
			return hasOwnProperty.call(this.types, t) ? this.types[t] : null;
		}
		validate() {
			function t(a, o, s, r) {
				if (s.has(o)) return s.get(o);
				s.set(o, !1),
					r.syntax !== null &&
						ws(
							r.syntax,
							function (c) {
								if (c.type !== "Type" && c.type !== "Property")
									return;
								let l =
										c.type === "Type"
											? a.types
											: a.properties,
									d = c.type === "Type" ? n : i;
								(!hasOwnProperty.call(l, c.name) ||
									t(a, c.name, d, l[c.name])) &&
									s.set(o, !0);
							},
							this,
						);
			}
			let n = new Map(),
				i = new Map();
			for (let a in this.types) t(this, a, n, this.types[a]);
			for (let a in this.properties) t(this, a, i, this.properties[a]);
			return (
				(n = [...n.keys()].filter((a) => n.get(a))),
				(i = [...i.keys()].filter((a) => i.get(a))),
				n.length || i.length ? { types: n, properties: i } : null
			);
		}
		dump(t, n) {
			return {
				generic: this.generic,
				units: this.units,
				types: Us(this.types, !n, t),
				properties: Us(this.properties, !n, t),
				atrules: ig(this.atrules, !n, t),
			};
		}
		toString() {
			return JSON.stringify(this.dump());
		}
	};
	function Hs(e, t) {
		return typeof t == "string" && /^\s*\|/.test(t)
			? typeof e == "string"
				? e + t
				: t.replace(/^\s*\|\s*/, "")
			: t || null;
	}
	function rd(e, t) {
		let n = Object.create(null);
		for (let [i, a] of Object.entries(e))
			if (a) {
				n[i] = {};
				for (let o of Object.keys(a)) t.includes(o) && (n[i][o] = a[o]);
			}
		return n;
	}
	function Si(e, t) {
		let n = { ...e };
		for (let [i, a] of Object.entries(t))
			switch (i) {
				case "generic":
					n[i] = !!a;
					break;
				case "units":
					n[i] = { ...e[i] };
					for (let [o, s] of Object.entries(a))
						n[i][o] = Array.isArray(s) ? s : [];
					break;
				case "atrules":
					n[i] = { ...e[i] };
					for (let [o, s] of Object.entries(a)) {
						let r = n[i][o] || {},
							c = (n[i][o] = {
								prelude: r.prelude || null,
								descriptors: { ...r.descriptors },
							});
						if (s) {
							c.prelude = s.prelude
								? Hs(c.prelude, s.prelude)
								: c.prelude || null;
							for (let [l, d] of Object.entries(
								s.descriptors || {},
							))
								c.descriptors[l] = d
									? Hs(c.descriptors[l], d)
									: null;
							Object.keys(c.descriptors).length ||
								(c.descriptors = null);
						}
					}
					break;
				case "types":
				case "properties":
					n[i] = { ...e[i] };
					for (let [o, s] of Object.entries(a))
						n[i][o] = Hs(n[i][o], s);
					break;
				case "scope":
					n[i] = { ...e[i] };
					for (let [o, s] of Object.entries(a))
						n[i][o] = { ...n[i][o], ...s };
					break;
				case "parseContext":
					n[i] = { ...e[i], ...a };
					break;
				case "atrule":
				case "pseudo":
					n[i] = { ...e[i], ...rd(a, ["parse"]) };
					break;
				case "node":
					n[i] = {
						...e[i],
						...rd(a, [
							"name",
							"structure",
							"parse",
							"generate",
							"walkContext",
						]),
					};
					break;
			}
		return n;
	}
	function ud(e) {
		let t = Wl(e),
			n = C0(e),
			i = g0(e),
			{ fromPlainObject: a, toPlainObject: o } = x0(n),
			s = {
				lexer: null,
				createLexer: (r) => new Bn(r, s, s.lexer.structure),
				tokenize: Jt,
				parse: t,
				generate: i,
				walk: n,
				find: n.find,
				findLast: n.findLast,
				findAll: n.findAll,
				fromPlainObject: a,
				toPlainObject: o,
				fork(r) {
					let c = Si({}, e);
					return ud(
						typeof r == "function" ? r(c, Object.assign) : Si(c, r),
					);
				},
			};
		return (
			(s.lexer = new Bn(
				{
					generic: !0,
					units: e.units,
					types: e.types,
					atrules: e.atrules,
					properties: e.properties,
					node: e.node,
				},
				s,
			)),
			s
		);
	}
	var js = (e) => ud(Si({}, e));
	var cd = {
		generic: !0,
		units: {
			angle: ["deg", "grad", "rad", "turn"],
			decibel: ["db"],
			flex: ["fr"],
			frequency: ["hz", "khz"],
			length: [
				"cm",
				"mm",
				"q",
				"in",
				"pt",
				"pc",
				"px",
				"em",
				"rem",
				"ex",
				"rex",
				"cap",
				"rcap",
				"ch",
				"rch",
				"ic",
				"ric",
				"lh",
				"rlh",
				"vw",
				"svw",
				"lvw",
				"dvw",
				"vh",
				"svh",
				"lvh",
				"dvh",
				"vi",
				"svi",
				"lvi",
				"dvi",
				"vb",
				"svb",
				"lvb",
				"dvb",
				"vmin",
				"svmin",
				"lvmin",
				"dvmin",
				"vmax",
				"svmax",
				"lvmax",
				"dvmax",
				"cqw",
				"cqh",
				"cqi",
				"cqb",
				"cqmin",
				"cqmax",
			],
			resolution: ["dpi", "dpcm", "dppx", "x"],
			semitones: ["st"],
			time: ["s", "ms"],
		},
		types: {
			"abs()": "abs( <calc-sum> )",
			"absolute-size":
				"xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large",
			"acos()": "acos( <calc-sum> )",
			"alpha-value": "<number>|<percentage>",
			"angle-percentage": "<angle>|<percentage>",
			"angular-color-hint": "<angle-percentage>",
			"angular-color-stop": "<color>&&<color-stop-angle>?",
			"angular-color-stop-list":
				"[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>",
			"animateable-feature": "scroll-position|contents|<custom-ident>",
			"asin()": "asin( <calc-sum> )",
			"atan()": "atan( <calc-sum> )",
			"atan2()": "atan2( <calc-sum> , <calc-sum> )",
			attachment: "scroll|fixed|local",
			"attr()":
				"attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )",
			"attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='",
			"attr-modifier": "i|s",
			"attribute-selector":
				"'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'",
			"auto-repeat":
				"repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )",
			"auto-track-list":
				"[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",
			axis: "block|inline|vertical|horizontal",
			"baseline-position": "[first|last]? baseline",
			"basic-shape":
				"<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>",
			"bg-image": "none|<image>",
			"bg-layer":
				"<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
			"bg-position":
				"[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]",
			"bg-size": "[<length-percentage>|auto]{1,2}|cover|contain",
			"blur()": "blur( <length> )",
			"blend-mode":
				"normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",
			box: "border-box|padding-box|content-box",
			"brightness()": "brightness( <number-percentage> )",
			"calc()": "calc( <calc-sum> )",
			"calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*",
			"calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*",
			"calc-value":
				"<number>|<dimension>|<percentage>|<calc-constant>|( <calc-sum> )",
			"calc-constant": "e|pi|infinity|-infinity|NaN",
			"cf-final-image": "<image>|<color>",
			"cf-mixing-image": "<percentage>?&&<image>",
			"circle()": "circle( [<shape-radius>]? [at <position>]? )",
			"clamp()": "clamp( <calc-sum>#{3} )",
			"class-selector": "'.' <ident-token>",
			"clip-source": "<url>",
			color: "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>",
			"color-stop": "<color-stop-length>|<color-stop-angle>",
			"color-stop-angle": "<angle-percentage>{1,2}",
			"color-stop-length": "<length-percentage>{1,2}",
			"color-stop-list":
				"[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",
			combinator: "'>'|'+'|'~'|['||']",
			"common-lig-values": "[common-ligatures|no-common-ligatures]",
			"compat-auto":
				"searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button",
			"composite-style":
				"clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor",
			"compositing-operator": "add|subtract|intersect|exclude",
			"compound-selector":
				"[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!",
			"compound-selector-list": "<compound-selector>#",
			"complex-selector":
				"<compound-selector> [<combinator>? <compound-selector>]*",
			"complex-selector-list": "<complex-selector>#",
			"conic-gradient()":
				"conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
			"contextual-alt-values": "[contextual|no-contextual]",
			"content-distribution":
				"space-between|space-around|space-evenly|stretch",
			"content-list":
				"[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>|<attr()>]+",
			"content-position": "center|start|end|flex-start|flex-end",
			"content-replacement": "<image>",
			"contrast()": "contrast( [<number-percentage>] )",
			"cos()": "cos( <calc-sum> )",
			counter: "<counter()>|<counters()>",
			"counter()": "counter( <counter-name> , <counter-style>? )",
			"counter-name": "<custom-ident>",
			"counter-style": "<counter-style-name>|symbols( )",
			"counter-style-name": "<custom-ident>",
			"counters()":
				"counters( <counter-name> , <string> , <counter-style>? )",
			"cross-fade()":
				"cross-fade( <cf-mixing-image> , <cf-final-image>? )",
			"cubic-bezier-timing-function":
				"ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )",
			"deprecated-system-color":
				"ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText",
			"discretionary-lig-values":
				"[discretionary-ligatures|no-discretionary-ligatures]",
			"display-box": "contents|none",
			"display-inside": "flow|flow-root|table|flex|grid|ruby",
			"display-internal":
				"table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container",
			"display-legacy":
				"inline-block|inline-list-item|inline-table|inline-flex|inline-grid",
			"display-listitem":
				"<display-outside>?&&[flow|flow-root]?&&list-item",
			"display-outside": "block|inline|run-in",
			"drop-shadow()": "drop-shadow( <length>{2,3} <color>? )",
			"east-asian-variant-values":
				"[jis78|jis83|jis90|jis04|simplified|traditional]",
			"east-asian-width-values": "[full-width|proportional-width]",
			"element()":
				"element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )",
			"ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )",
			"ending-shape": "circle|ellipse",
			"env()": "env( <custom-ident> , <declaration-value>? )",
			"exp()": "exp( <calc-sum> )",
			"explicit-track-list":
				"[<line-names>? <track-size>]+ <line-names>?",
			"family-name": "<string>|<custom-ident>+",
			"feature-tag-value": "<string> [<integer>|on|off]?",
			"feature-type":
				"@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation",
			"feature-value-block":
				"<feature-type> '{' <feature-value-declaration-list> '}'",
			"feature-value-block-list": "<feature-value-block>+",
			"feature-value-declaration": "<custom-ident> : <integer>+ ;",
			"feature-value-declaration-list": "<feature-value-declaration>",
			"feature-value-name": "<custom-ident>",
			"fill-rule": "nonzero|evenodd",
			"filter-function":
				"<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>",
			"filter-function-list": "[<filter-function>|<url>]+",
			"final-bg-layer":
				"<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
			"fixed-breadth": "<length-percentage>",
			"fixed-repeat":
				"repeat( [<integer [1,\u221E]>] , [<line-names>? <fixed-size>]+ <line-names>? )",
			"fixed-size":
				"<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )",
			"font-stretch-absolute":
				"normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>",
			"font-variant-css21": "[normal|small-caps]",
			"font-weight-absolute": "normal|bold|<number [1,1000]>",
			"frequency-percentage": "<frequency>|<percentage>",
			"general-enclosed":
				"[<function-token> <any-value> )]|( <ident> <any-value> )",
			"generic-family":
				"serif|sans-serif|cursive|fantasy|monospace|-apple-system",
			"generic-name": "serif|sans-serif|cursive|fantasy|monospace",
			"geometry-box": "<shape-box>|fill-box|stroke-box|view-box",
			gradient:
				"<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<repeating-conic-gradient()>|<-legacy-gradient>",
			"grayscale()": "grayscale( <number-percentage> )",
			"grid-line":
				"auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
			"historical-lig-values":
				"[historical-ligatures|no-historical-ligatures]",
			"hsl()":
				"hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )",
			"hsla()":
				"hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",
			hue: "<number>|<angle>",
			"hue-rotate()": "hue-rotate( <angle> )",
			"hwb()":
				"hwb( [<hue>|none] [<percentage>|none] [<percentage>|none] [/ [<alpha-value>|none]]? )",
			"hypot()": "hypot( <calc-sum># )",
			image: "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>",
			"image()": "image( <image-tags>? [<image-src>? , <color>?]! )",
			"image-set()": "image-set( <image-set-option># )",
			"image-set-option":
				"[<image>|<string>] [<resolution>||type( <string> )]",
			"image-src": "<url>|<string>",
			"image-tags": "ltr|rtl",
			"inflexible-breadth":
				"<length-percentage>|min-content|max-content|auto",
			"inset()":
				"inset( <length-percentage>{1,4} [round <'border-radius'>]? )",
			"invert()": "invert( <number-percentage> )",
			"keyframes-name": "<custom-ident>|<string>",
			"keyframe-block": "<keyframe-selector># { <declaration-list> }",
			"keyframe-block-list": "<keyframe-block>+",
			"keyframe-selector": "from|to|<percentage>",
			"lab()":
				"lab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",
			"layer()": "layer( <layer-name> )",
			"layer-name": "<ident> ['.' <ident>]*",
			"lch()":
				"lch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )",
			"leader()": "leader( <leader-type> )",
			"leader-type": "dotted|solid|space|<string>",
			"length-percentage": "<length>|<percentage>",
			"line-names": "'[' <custom-ident>* ']'",
			"line-name-list": "[<line-names>|<name-repeat>]+",
			"line-style":
				"none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset",
			"line-width": "<length>|thin|medium|thick",
			"linear-color-hint": "<length-percentage>",
			"linear-color-stop": "<color> <color-stop-length>?",
			"linear-gradient()":
				"linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
			"log()": "log( <calc-sum> , <calc-sum>? )",
			"mask-layer":
				"<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>",
			"mask-position":
				"[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?",
			"mask-reference": "none|<image>|<mask-source>",
			"mask-source": "<url>",
			"masking-mode": "alpha|luminance|match-source",
			"matrix()": "matrix( <number>#{6} )",
			"matrix3d()": "matrix3d( <number>#{16} )",
			"max()": "max( <calc-sum># )",
			"media-and": "<media-in-parens> [and <media-in-parens>]+",
			"media-condition":
				"<media-not>|<media-and>|<media-or>|<media-in-parens>",
			"media-condition-without-or":
				"<media-not>|<media-and>|<media-in-parens>",
			"media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )",
			"media-in-parens":
				"( <media-condition> )|<media-feature>|<general-enclosed>",
			"media-not": "not <media-in-parens>",
			"media-or": "<media-in-parens> [or <media-in-parens>]+",
			"media-query":
				"<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?",
			"media-query-list": "<media-query>#",
			"media-type": "<ident>",
			"mf-boolean": "<mf-name>",
			"mf-name": "<ident>",
			"mf-plain": "<mf-name> : <mf-value>",
			"mf-range":
				"<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>",
			"mf-value": "<number>|<dimension>|<ident>|<ratio>",
			"min()": "min( <calc-sum># )",
			"minmax()":
				"minmax( [<length-percentage>|min-content|max-content|auto] , [<length-percentage>|<flex>|min-content|max-content|auto] )",
			"mod()": "mod( <calc-sum> , <calc-sum> )",
			"name-repeat":
				"repeat( [<integer [1,\u221E]>|auto-fill] , <line-names>+ )",
			"named-color":
				"transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>",
			"namespace-prefix": "<ident>",
			"ns-prefix": "[<ident-token>|'*']? '|'",
			"number-percentage": "<number>|<percentage>",
			"numeric-figure-values": "[lining-nums|oldstyle-nums]",
			"numeric-fraction-values": "[diagonal-fractions|stacked-fractions]",
			"numeric-spacing-values": "[proportional-nums|tabular-nums]",
			nth: "<an-plus-b>|even|odd",
			"opacity()": "opacity( [<number-percentage>] )",
			"overflow-position": "unsafe|safe",
			"outline-radius": "<length>|<percentage>",
			"page-body":
				"<declaration>? [; <page-body>]?|<page-margin-box> <page-body>",
			"page-margin-box":
				"<page-margin-box-type> '{' <declaration-list> '}'",
			"page-margin-box-type":
				"@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom",
			"page-selector-list": "[<page-selector>#]?",
			"page-selector": "<pseudo-page>+|<ident> <pseudo-page>*",
			"page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",
			"path()": "path( [<fill-rule> ,]? <string> )",
			"paint()": "paint( <ident> , <declaration-value>? )",
			"perspective()": "perspective( [<length [0,\u221E]>|none] )",
			"polygon()":
				"polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",
			position:
				"[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]",
			"pow()": "pow( <calc-sum> , <calc-sum> )",
			"pseudo-class-selector":
				"':' <ident-token>|':' <function-token> <any-value> ')'",
			"pseudo-element-selector": "':' <pseudo-class-selector>",
			"pseudo-page": ": [left|right|first|blank]",
			quote: "open-quote|close-quote|no-open-quote|no-close-quote",
			"radial-gradient()":
				"radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
			ratio: "<number [0,\u221E]> [/ <number [0,\u221E]>]?",
			"relative-selector": "<combinator>? <complex-selector>",
			"relative-selector-list": "<relative-selector>#",
			"relative-size": "larger|smaller",
			"rem()": "rem( <calc-sum> , <calc-sum> )",
			"repeat-style":
				"repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}",
			"repeating-conic-gradient()":
				"repeating-conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
			"repeating-linear-gradient()":
				"repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
			"repeating-radial-gradient()":
				"repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
			"reversed-counter-name": "reversed( <counter-name> )",
			"rgb()":
				"rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )",
			"rgba()":
				"rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )",
			"rotate()": "rotate( [<angle>|<zero>] )",
			"rotate3d()":
				"rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )",
			"rotateX()": "rotateX( [<angle>|<zero>] )",
			"rotateY()": "rotateY( [<angle>|<zero>] )",
			"rotateZ()": "rotateZ( [<angle>|<zero>] )",
			"round()":
				"round( <rounding-strategy>? , <calc-sum> , <calc-sum> )",
			"rounding-strategy": "nearest|up|down|to-zero",
			"saturate()": "saturate( <number-percentage> )",
			"scale()": "scale( [<number>|<percentage>]#{1,2} )",
			"scale3d()": "scale3d( [<number>|<percentage>]#{3} )",
			"scaleX()": "scaleX( [<number>|<percentage>] )",
			"scaleY()": "scaleY( [<number>|<percentage>] )",
			"scaleZ()": "scaleZ( [<number>|<percentage>] )",
			scroller: "root|nearest",
			"self-position":
				"center|start|end|self-start|self-end|flex-start|flex-end",
			"shape-radius": "<length-percentage>|closest-side|farthest-side",
			"sign()": "sign( <calc-sum> )",
			"skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )",
			"skewX()": "skewX( [<angle>|<zero>] )",
			"skewY()": "skewY( [<angle>|<zero>] )",
			"sepia()": "sepia( <number-percentage> )",
			shadow: "inset?&&<length>{2,4}&&<color>?",
			"shadow-t": "[<length>{2,3}&&<color>?]",
			shape: "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )",
			"shape-box": "<box>|margin-box",
			"side-or-corner": "[left|right]||[top|bottom]",
			"sin()": "sin( <calc-sum> )",
			"single-animation":
				"<time>||<easing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]",
			"single-animation-direction":
				"normal|reverse|alternate|alternate-reverse",
			"single-animation-fill-mode": "none|forwards|backwards|both",
			"single-animation-iteration-count": "infinite|<number>",
			"single-animation-play-state": "running|paused",
			"single-animation-timeline":
				"auto|none|<timeline-name>|scroll( <axis>? <scroller>? )",
			"single-transition":
				"[none|<single-transition-property>]||<time>||<easing-function>||<time>",
			"single-transition-property": "all|<custom-ident>",
			size: "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}",
			"sqrt()": "sqrt( <calc-sum> )",
			"step-position":
				"jump-start|jump-end|jump-none|jump-both|start|end",
			"step-timing-function":
				"step-start|step-end|steps( <integer> [, <step-position>]? )",
			"subclass-selector":
				"<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>",
			"supports-condition":
				"not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*",
			"supports-in-parens":
				"( <supports-condition> )|<supports-feature>|<general-enclosed>",
			"supports-feature": "<supports-decl>|<supports-selector-fn>",
			"supports-decl": "( <declaration> )",
			"supports-selector-fn": "selector( <complex-selector> )",
			symbol: "<string>|<image>|<custom-ident>",
			"tan()": "tan( <calc-sum> )",
			target: "<target-counter()>|<target-counters()>|<target-text()>",
			"target-counter()":
				"target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )",
			"target-counters()":
				"target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )",
			"target-text()":
				"target-text( [<string>|<url>] , [content|before|after|first-letter]? )",
			"time-percentage": "<time>|<percentage>",
			"timeline-name": "<custom-ident>|<string>",
			"easing-function":
				"linear|<cubic-bezier-timing-function>|<step-timing-function>",
			"track-breadth":
				"<length-percentage>|<flex>|min-content|max-content|auto",
			"track-list":
				"[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?",
			"track-repeat":
				"repeat( [<integer [1,\u221E]>] , [<line-names>? <track-size>]+ <line-names>? )",
			"track-size":
				"<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( <length-percentage> )",
			"transform-function":
				"<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>",
			"transform-list": "<transform-function>+",
			"translate()":
				"translate( <length-percentage> , <length-percentage>? )",
			"translate3d()":
				"translate3d( <length-percentage> , <length-percentage> , <length> )",
			"translateX()": "translateX( <length-percentage> )",
			"translateY()": "translateY( <length-percentage> )",
			"translateZ()": "translateZ( <length> )",
			"type-or-unit":
				"string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%",
			"type-selector": "<wq-name>|<ns-prefix>? '*'",
			"var()": "var( <custom-property-name> , <declaration-value>? )",
			"viewport-length": "auto|<length-percentage>",
			"visual-box": "content-box|padding-box|border-box",
			"wq-name": "<ns-prefix>? <ident-token>",
			"-legacy-gradient":
				"<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>",
			"-legacy-linear-gradient":
				"-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )",
			"-legacy-repeating-linear-gradient":
				"-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )",
			"-legacy-linear-gradient-arguments":
				"[<angle>|<side-or-corner>]? , <color-stop-list>",
			"-legacy-radial-gradient":
				"-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )",
			"-legacy-repeating-radial-gradient":
				"-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )",
			"-legacy-radial-gradient-arguments":
				"[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>",
			"-legacy-radial-gradient-size":
				"closest-side|closest-corner|farthest-side|farthest-corner|contain|cover",
			"-legacy-radial-gradient-shape": "circle|ellipse",
			"-non-standard-font":
				"-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body",
			"-non-standard-color":
				"-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text",
			"-non-standard-image-rendering":
				"optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast",
			"-non-standard-overflow":
				"-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable",
			"-non-standard-width":
				"fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content",
			"-webkit-gradient()":
				"-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )",
			"-webkit-gradient-color-stop":
				"from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )",
			"-webkit-gradient-point":
				"[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]",
			"-webkit-gradient-radius": "<length>|<percentage>",
			"-webkit-gradient-type": "linear|radial",
			"-webkit-mask-box-repeat": "repeat|stretch|round",
			"-webkit-mask-clip-style":
				"border|border-box|padding|padding-box|content|content-box|text",
			"-ms-filter-function-list": "<-ms-filter-function>+",
			"-ms-filter-function":
				"<-ms-filter-function-progid>|<-ms-filter-function-legacy>",
			"-ms-filter-function-progid":
				"'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]",
			"-ms-filter-function-legacy":
				"<ident-token>|<function-token> <any-value>? )",
			"-ms-filter": "<string>",
			age: "child|young|old",
			"attr-name": "<wq-name>",
			"attr-fallback": "<any-value>",
			"bg-clip": "<box>|border|text",
			bottom: "<length>|auto",
			"generic-voice": "[<age>? <gender> <integer>?]",
			gender: "male|female|neutral",
			left: "<length>|auto",
			"mask-image": "<mask-reference>#",
			paint: "none|<color>|<url> [none|<color>]?|context-fill|context-stroke",
			right: "<length>|auto",
			"scroll-timeline-axis": "block|inline|vertical|horizontal",
			"scroll-timeline-name": "none|<custom-ident>",
			"single-animation-composition": "replace|add|accumulate",
			"svg-length": "<percentage>|<length>|<number>",
			"svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb",
			top: "<length>|auto",
			x: "<number>",
			y: "<number>",
			declaration:
				"<ident-token> : <declaration-value>? ['!' important]?",
			"declaration-list": "[<declaration>? ';']* <declaration>?",
			url: "url( <string> <url-modifier>* )|<url-token>",
			"url-modifier": "<ident>|<function-token> <any-value> )",
			"number-zero-one": "<number [0,1]>",
			"number-one-or-greater": "<number [1,\u221E]>",
			"-non-standard-display":
				"-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box",
		},
		properties: {
			"--*": "<declaration-value>",
			"-ms-accelerator": "false|true",
			"-ms-block-progression": "tb|rl|bt|lr",
			"-ms-content-zoom-chaining": "none|chained",
			"-ms-content-zooming": "none|zoom",
			"-ms-content-zoom-limit":
				"<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
			"-ms-content-zoom-limit-max": "<percentage>",
			"-ms-content-zoom-limit-min": "<percentage>",
			"-ms-content-zoom-snap":
				"<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>",
			"-ms-content-zoom-snap-points":
				"snapInterval( <percentage> , <percentage> )|snapList( <percentage># )",
			"-ms-content-zoom-snap-type": "none|proximity|mandatory",
			"-ms-filter": "<string>",
			"-ms-flow-from": "[none|<custom-ident>]#",
			"-ms-flow-into": "[none|<custom-ident>]#",
			"-ms-grid-columns": "none|<track-list>|<auto-track-list>",
			"-ms-grid-rows": "none|<track-list>|<auto-track-list>",
			"-ms-high-contrast-adjust": "auto|none",
			"-ms-hyphenate-limit-chars": "auto|<integer>{1,3}",
			"-ms-hyphenate-limit-lines": "no-limit|<integer>",
			"-ms-hyphenate-limit-zone": "<percentage>|<length>",
			"-ms-ime-align": "auto|after",
			"-ms-overflow-style":
				"auto|none|scrollbar|-ms-autohiding-scrollbar",
			"-ms-scrollbar-3dlight-color": "<color>",
			"-ms-scrollbar-arrow-color": "<color>",
			"-ms-scrollbar-base-color": "<color>",
			"-ms-scrollbar-darkshadow-color": "<color>",
			"-ms-scrollbar-face-color": "<color>",
			"-ms-scrollbar-highlight-color": "<color>",
			"-ms-scrollbar-shadow-color": "<color>",
			"-ms-scrollbar-track-color": "<color>",
			"-ms-scroll-chaining": "chained|none",
			"-ms-scroll-limit":
				"<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
			"-ms-scroll-limit-x-max": "auto|<length>",
			"-ms-scroll-limit-x-min": "<length>",
			"-ms-scroll-limit-y-max": "auto|<length>",
			"-ms-scroll-limit-y-min": "<length>",
			"-ms-scroll-rails": "none|railed",
			"-ms-scroll-snap-points-x":
				"snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
			"-ms-scroll-snap-points-y":
				"snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
			"-ms-scroll-snap-type": "none|proximity|mandatory",
			"-ms-scroll-snap-x":
				"<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
			"-ms-scroll-snap-y":
				"<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
			"-ms-scroll-translation": "none|vertical-to-horizontal",
			"-ms-text-autospace":
				"none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space",
			"-ms-touch-select": "grippers|none",
			"-ms-user-select": "none|element|text",
			"-ms-wrap-flow": "auto|both|start|end|maximum|clear",
			"-ms-wrap-margin": "<length>",
			"-ms-wrap-through": "wrap|none",
			"-moz-appearance":
				"none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized",
			"-moz-binding": "<url>|none",
			"-moz-border-bottom-colors": "<color>+|none",
			"-moz-border-left-colors": "<color>+|none",
			"-moz-border-right-colors": "<color>+|none",
			"-moz-border-top-colors": "<color>+|none",
			"-moz-context-properties":
				"none|[fill|fill-opacity|stroke|stroke-opacity]#",
			"-moz-float-edge": "border-box|content-box|margin-box|padding-box",
			"-moz-force-broken-image-icon": "0|1",
			"-moz-image-region": "<shape>|auto",
			"-moz-orient": "inline|block|horizontal|vertical",
			"-moz-outline-radius":
				"<outline-radius>{1,4} [/ <outline-radius>{1,4}]?",
			"-moz-outline-radius-bottomleft": "<outline-radius>",
			"-moz-outline-radius-bottomright": "<outline-radius>",
			"-moz-outline-radius-topleft": "<outline-radius>",
			"-moz-outline-radius-topright": "<outline-radius>",
			"-moz-stack-sizing": "ignore|stretch-to-fit",
			"-moz-text-blink": "none|blink",
			"-moz-user-focus":
				"ignore|normal|select-after|select-before|select-menu|select-same|select-all|none",
			"-moz-user-input": "auto|none|enabled|disabled",
			"-moz-user-modify": "read-only|read-write|write-only",
			"-moz-window-dragging": "drag|no-drag",
			"-moz-window-shadow": "default|menu|tooltip|sheet|none",
			"-webkit-appearance":
				"none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button",
			"-webkit-border-before":
				"<'border-width'>||<'border-style'>||<color>",
			"-webkit-border-before-color": "<color>",
			"-webkit-border-before-style": "<'border-style'>",
			"-webkit-border-before-width": "<'border-width'>",
			"-webkit-box-reflect":
				"[above|below|right|left]? <length>? <image>?",
			"-webkit-line-clamp": "none|<integer>",
			"-webkit-mask":
				"[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#",
			"-webkit-mask-attachment": "<attachment>#",
			"-webkit-mask-clip": "[<box>|border|padding|content|text]#",
			"-webkit-mask-composite": "<composite-style>#",
			"-webkit-mask-image": "<mask-reference>#",
			"-webkit-mask-origin": "[<box>|border|padding|content]#",
			"-webkit-mask-position": "<position>#",
			"-webkit-mask-position-x":
				"[<length-percentage>|left|center|right]#",
			"-webkit-mask-position-y":
				"[<length-percentage>|top|center|bottom]#",
			"-webkit-mask-repeat": "<repeat-style>#",
			"-webkit-mask-repeat-x": "repeat|no-repeat|space|round",
			"-webkit-mask-repeat-y": "repeat|no-repeat|space|round",
			"-webkit-mask-size": "<bg-size>#",
			"-webkit-overflow-scrolling": "auto|touch",
			"-webkit-tap-highlight-color": "<color>",
			"-webkit-text-fill-color": "<color>",
			"-webkit-text-stroke": "<length>||<color>",
			"-webkit-text-stroke-color": "<color>",
			"-webkit-text-stroke-width": "<length>",
			"-webkit-touch-callout": "default|none",
			"-webkit-user-modify":
				"read-only|read-write|read-write-plaintext-only",
			"accent-color": "auto|<color>",
			"align-content":
				"normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>",
			"align-items":
				"normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]",
			"align-self":
				"auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>",
			"align-tracks":
				"[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",
			all: "initial|inherit|unset|revert|revert-layer",
			animation: "<single-animation>#",
			"animation-composition": "<single-animation-composition>#",
			"animation-delay": "<time>#",
			"animation-direction": "<single-animation-direction>#",
			"animation-duration": "<time>#",
			"animation-fill-mode": "<single-animation-fill-mode>#",
			"animation-iteration-count": "<single-animation-iteration-count>#",
			"animation-name": "[none|<keyframes-name>]#",
			"animation-play-state": "<single-animation-play-state>#",
			"animation-timing-function": "<easing-function>#",
			"animation-timeline": "<single-animation-timeline>#",
			appearance: "none|auto|textfield|menulist-button|<compat-auto>",
			"aspect-ratio": "auto|<ratio>",
			azimuth:
				"<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards",
			"backdrop-filter": "none|<filter-function-list>",
			"backface-visibility": "visible|hidden",
			background: "[<bg-layer> ,]* <final-bg-layer>",
			"background-attachment": "<attachment>#",
			"background-blend-mode": "<blend-mode>#",
			"background-clip": "<bg-clip>#",
			"background-color": "<color>",
			"background-image": "<bg-image>#",
			"background-origin": "<box>#",
			"background-position": "<bg-position>#",
			"background-position-x":
				"[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#",
			"background-position-y":
				"[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#",
			"background-repeat": "<repeat-style>#",
			"background-size": "<bg-size>#",
			"block-overflow": "clip|ellipsis|<string>",
			"block-size": "<'width'>",
			border: "<line-width>||<line-style>||<color>",
			"border-block":
				"<'border-top-width'>||<'border-top-style'>||<color>",
			"border-block-color": "<'border-top-color'>{1,2}",
			"border-block-style": "<'border-top-style'>",
			"border-block-width": "<'border-top-width'>",
			"border-block-end":
				"<'border-top-width'>||<'border-top-style'>||<color>",
			"border-block-end-color": "<'border-top-color'>",
			"border-block-end-style": "<'border-top-style'>",
			"border-block-end-width": "<'border-top-width'>",
			"border-block-start":
				"<'border-top-width'>||<'border-top-style'>||<color>",
			"border-block-start-color": "<'border-top-color'>",
			"border-block-start-style": "<'border-top-style'>",
			"border-block-start-width": "<'border-top-width'>",
			"border-bottom": "<line-width>||<line-style>||<color>",
			"border-bottom-color": "<'border-top-color'>",
			"border-bottom-left-radius": "<length-percentage>{1,2}",
			"border-bottom-right-radius": "<length-percentage>{1,2}",
			"border-bottom-style": "<line-style>",
			"border-bottom-width": "<line-width>",
			"border-collapse": "collapse|separate",
			"border-color": "<color>{1,4}",
			"border-end-end-radius": "<length-percentage>{1,2}",
			"border-end-start-radius": "<length-percentage>{1,2}",
			"border-image":
				"<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>",
			"border-image-outset": "[<length>|<number>]{1,4}",
			"border-image-repeat": "[stretch|repeat|round|space]{1,2}",
			"border-image-slice": "<number-percentage>{1,4}&&fill?",
			"border-image-source": "none|<image>",
			"border-image-width": "[<length-percentage>|<number>|auto]{1,4}",
			"border-inline":
				"<'border-top-width'>||<'border-top-style'>||<color>",
			"border-inline-end":
				"<'border-top-width'>||<'border-top-style'>||<color>",
			"border-inline-color": "<'border-top-color'>{1,2}",
			"border-inline-style": "<'border-top-style'>",
			"border-inline-width": "<'border-top-width'>",
			"border-inline-end-color": "<'border-top-color'>",
			"border-inline-end-style": "<'border-top-style'>",
			"border-inline-end-width": "<'border-top-width'>",
			"border-inline-start":
				"<'border-top-width'>||<'border-top-style'>||<color>",
			"border-inline-start-color": "<'border-top-color'>",
			"border-inline-start-style": "<'border-top-style'>",
			"border-inline-start-width": "<'border-top-width'>",
			"border-left": "<line-width>||<line-style>||<color>",
			"border-left-color": "<color>",
			"border-left-style": "<line-style>",
			"border-left-width": "<line-width>",
			"border-radius":
				"<length-percentage>{1,4} [/ <length-percentage>{1,4}]?",
			"border-right": "<line-width>||<line-style>||<color>",
			"border-right-color": "<color>",
			"border-right-style": "<line-style>",
			"border-right-width": "<line-width>",
			"border-spacing": "<length> <length>?",
			"border-start-end-radius": "<length-percentage>{1,2}",
			"border-start-start-radius": "<length-percentage>{1,2}",
			"border-style": "<line-style>{1,4}",
			"border-top": "<line-width>||<line-style>||<color>",
			"border-top-color": "<color>",
			"border-top-left-radius": "<length-percentage>{1,2}",
			"border-top-right-radius": "<length-percentage>{1,2}",
			"border-top-style": "<line-style>",
			"border-top-width": "<line-width>",
			"border-width": "<line-width>{1,4}",
			bottom: "<length>|<percentage>|auto",
			"box-align": "start|center|end|baseline|stretch",
			"box-decoration-break": "slice|clone",
			"box-direction": "normal|reverse|inherit",
			"box-flex": "<number>",
			"box-flex-group": "<integer>",
			"box-lines": "single|multiple",
			"box-ordinal-group": "<integer>",
			"box-orient": "horizontal|vertical|inline-axis|block-axis|inherit",
			"box-pack": "start|center|end|justify",
			"box-shadow": "none|<shadow>#",
			"box-sizing": "content-box|border-box",
			"break-after":
				"auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
			"break-before":
				"auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
			"break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region",
			"caption-side":
				"top|bottom|block-start|block-end|inline-start|inline-end",
			caret: "<'caret-color'>||<'caret-shape'>",
			"caret-color": "auto|<color>",
			"caret-shape": "auto|bar|block|underscore",
			clear: "none|left|right|both|inline-start|inline-end",
			clip: "<shape>|auto",
			"clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none",
			color: "<color>",
			"print-color-adjust": "economy|exact",
			"color-scheme": "normal|[light|dark|<custom-ident>]+&&only?",
			"column-count": "<integer>|auto",
			"column-fill": "auto|balance|balance-all",
			"column-gap": "normal|<length-percentage>",
			"column-rule":
				"<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>",
			"column-rule-color": "<color>",
			"column-rule-style": "<'border-style'>",
			"column-rule-width": "<'border-width'>",
			"column-span": "none|all",
			"column-width": "<length>|auto",
			columns: "<'column-width'>||<'column-count'>",
			contain:
				"none|strict|content|[[size||inline-size]||layout||style||paint]",
			"contain-intrinsic-size": "[none|<length>|auto <length>]{1,2}",
			"contain-intrinsic-block-size": "none|<length>|auto <length>",
			"contain-intrinsic-height": "none|<length>|auto <length>",
			"contain-intrinsic-inline-size": "none|<length>|auto <length>",
			"contain-intrinsic-width": "none|<length>|auto <length>",
			content:
				"normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>]+]?",
			"content-visibility": "visible|auto|hidden",
			"counter-increment": "[<counter-name> <integer>?]+|none",
			"counter-reset":
				"[<counter-name> <integer>?|<reversed-counter-name> <integer>?]+|none",
			"counter-set": "[<counter-name> <integer>?]+|none",
			cursor: "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",
			direction: "ltr|rtl",
			display:
				"[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>",
			"empty-cells": "show|hide",
			filter: "none|<filter-function-list>|<-ms-filter-function-list>",
			flex: "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]",
			"flex-basis": "content|<'width'>",
			"flex-direction": "row|row-reverse|column|column-reverse",
			"flex-flow": "<'flex-direction'>||<'flex-wrap'>",
			"flex-grow": "<number>",
			"flex-shrink": "<number>",
			"flex-wrap": "nowrap|wrap|wrap-reverse",
			float: "left|right|none|inline-start|inline-end",
			font: "[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar",
			"font-family": "[<family-name>|<generic-family>]#",
			"font-feature-settings": "normal|<feature-tag-value>#",
			"font-kerning": "auto|normal|none",
			"font-language-override": "normal|<string>",
			"font-optical-sizing": "auto|none",
			"font-variation-settings": "normal|[<string> <number>]#",
			"font-size": "<absolute-size>|<relative-size>|<length-percentage>",
			"font-size-adjust":
				"none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]",
			"font-smooth": "auto|never|always|<absolute-size>|<length>",
			"font-stretch": "<font-stretch-absolute>",
			"font-style": "normal|italic|oblique <angle>?",
			"font-synthesis": "none|[weight||style||small-caps]",
			"font-variant":
				"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
			"font-variant-alternates":
				"normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]",
			"font-variant-caps":
				"normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
			"font-variant-east-asian":
				"normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]",
			"font-variant-ligatures":
				"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]",
			"font-variant-numeric":
				"normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]",
			"font-variant-position": "normal|sub|super",
			"font-weight": "<font-weight-absolute>|bolder|lighter",
			"forced-color-adjust": "auto|none",
			gap: "<'row-gap'> <'column-gap'>?",
			grid: "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>",
			"grid-area": "<grid-line> [/ <grid-line>]{0,3}",
			"grid-auto-columns": "<track-size>+",
			"grid-auto-flow": "[row|column]||dense",
			"grid-auto-rows": "<track-size>+",
			"grid-column": "<grid-line> [/ <grid-line>]?",
			"grid-column-end": "<grid-line>",
			"grid-column-gap": "<length-percentage>",
			"grid-column-start": "<grid-line>",
			"grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?",
			"grid-row": "<grid-line> [/ <grid-line>]?",
			"grid-row-end": "<grid-line>",
			"grid-row-gap": "<length-percentage>",
			"grid-row-start": "<grid-line>",
			"grid-template":
				"none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?",
			"grid-template-areas": "none|<string>+",
			"grid-template-columns":
				"none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
			"grid-template-rows":
				"none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
			"hanging-punctuation": "none|[first||[force-end|allow-end]||last]",
			height: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
			"hyphenate-character": "auto|<string>",
			hyphens: "none|manual|auto",
			"image-orientation": "from-image|<angle>|[<angle>? flip]",
			"image-rendering":
				"auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>",
			"image-resolution": "[from-image||<resolution>]&&snap?",
			"ime-mode": "auto|normal|active|inactive|disabled",
			"initial-letter": "normal|[<number> <integer>?]",
			"initial-letter-align": "[auto|alphabetic|hanging|ideographic]",
			"inline-size": "<'width'>",
			"input-security": "auto|none",
			inset: "<'top'>{1,4}",
			"inset-block": "<'top'>{1,2}",
			"inset-block-end": "<'top'>",
			"inset-block-start": "<'top'>",
			"inset-inline": "<'top'>{1,2}",
			"inset-inline-end": "<'top'>",
			"inset-inline-start": "<'top'>",
			isolation: "auto|isolate",
			"justify-content":
				"normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]",
			"justify-items":
				"normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]",
			"justify-self":
				"auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]",
			"justify-tracks":
				"[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",
			left: "<length>|<percentage>|auto",
			"letter-spacing": "normal|<length-percentage>",
			"line-break": "auto|loose|normal|strict|anywhere",
			"line-clamp": "none|<integer>",
			"line-height": "normal|<number>|<length>|<percentage>",
			"line-height-step": "<length>",
			"list-style":
				"<'list-style-type'>||<'list-style-position'>||<'list-style-image'>",
			"list-style-image": "<image>|none",
			"list-style-position": "inside|outside",
			"list-style-type": "<counter-style>|<string>|none",
			margin: "[<length>|<percentage>|auto]{1,4}",
			"margin-block": "<'margin-left'>{1,2}",
			"margin-block-end": "<'margin-left'>",
			"margin-block-start": "<'margin-left'>",
			"margin-bottom": "<length>|<percentage>|auto",
			"margin-inline": "<'margin-left'>{1,2}",
			"margin-inline-end": "<'margin-left'>",
			"margin-inline-start": "<'margin-left'>",
			"margin-left": "<length>|<percentage>|auto",
			"margin-right": "<length>|<percentage>|auto",
			"margin-top": "<length>|<percentage>|auto",
			"margin-trim": "none|in-flow|all",
			mask: "<mask-layer>#",
			"mask-border":
				"<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>",
			"mask-border-mode": "luminance|alpha",
			"mask-border-outset": "[<length>|<number>]{1,4}",
			"mask-border-repeat": "[stretch|repeat|round|space]{1,2}",
			"mask-border-slice": "<number-percentage>{1,4} fill?",
			"mask-border-source": "none|<image>",
			"mask-border-width": "[<length-percentage>|<number>|auto]{1,4}",
			"mask-clip": "[<geometry-box>|no-clip]#",
			"mask-composite": "<compositing-operator>#",
			"mask-image": "<mask-reference>#",
			"mask-mode": "<masking-mode>#",
			"mask-origin": "<geometry-box>#",
			"mask-position": "<position>#",
			"mask-repeat": "<repeat-style>#",
			"mask-size": "<bg-size>#",
			"mask-type": "luminance|alpha",
			"masonry-auto-flow": "[pack|next]||[definite-first|ordered]",
			"math-depth": "auto-add|add( <integer> )|<integer>",
			"math-shift": "normal|compact",
			"math-style": "normal|compact",
			"max-block-size": "<'max-width'>",
			"max-height":
				"none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
			"max-inline-size": "<'max-width'>",
			"max-lines": "none|<integer>",
			"max-width":
				"none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
			"min-block-size": "<'min-width'>",
			"min-height":
				"auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
			"min-inline-size": "<'min-width'>",
			"min-width":
				"auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
			"mix-blend-mode": "<blend-mode>|plus-lighter",
			"object-fit": "fill|contain|cover|none|scale-down",
			"object-position": "<position>",
			offset: "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?",
			"offset-anchor": "auto|<position>",
			"offset-distance": "<length-percentage>",
			"offset-path":
				"none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]",
			"offset-position": "auto|<position>",
			"offset-rotate": "[auto|reverse]||<angle>",
			opacity: "<alpha-value>",
			order: "<integer>",
			orphans: "<integer>",
			outline:
				"[<'outline-color'>||<'outline-style'>||<'outline-width'>]",
			"outline-color": "<color>|invert",
			"outline-offset": "<length>",
			"outline-style": "auto|<'border-style'>",
			"outline-width": "<line-width>",
			overflow:
				"[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>",
			"overflow-anchor": "auto|none",
			"overflow-block": "visible|hidden|clip|scroll|auto",
			"overflow-clip-box": "padding-box|content-box",
			"overflow-clip-margin": "<visual-box>||<length [0,\u221E]>",
			"overflow-inline": "visible|hidden|clip|scroll|auto",
			"overflow-wrap": "normal|break-word|anywhere",
			"overflow-x": "visible|hidden|clip|scroll|auto",
			"overflow-y": "visible|hidden|clip|scroll|auto",
			"overscroll-behavior": "[contain|none|auto]{1,2}",
			"overscroll-behavior-block": "contain|none|auto",
			"overscroll-behavior-inline": "contain|none|auto",
			"overscroll-behavior-x": "contain|none|auto",
			"overscroll-behavior-y": "contain|none|auto",
			padding: "[<length>|<percentage>]{1,4}",
			"padding-block": "<'padding-left'>{1,2}",
			"padding-block-end": "<'padding-left'>",
			"padding-block-start": "<'padding-left'>",
			"padding-bottom": "<length>|<percentage>",
			"padding-inline": "<'padding-left'>{1,2}",
			"padding-inline-end": "<'padding-left'>",
			"padding-inline-start": "<'padding-left'>",
			"padding-left": "<length>|<percentage>",
			"padding-right": "<length>|<percentage>",
			"padding-top": "<length>|<percentage>",
			"page-break-after": "auto|always|avoid|left|right|recto|verso",
			"page-break-before": "auto|always|avoid|left|right|recto|verso",
			"page-break-inside": "auto|avoid",
			"paint-order": "normal|[fill||stroke||markers]",
			perspective: "none|<length>",
			"perspective-origin": "<position>",
			"place-content": "<'align-content'> <'justify-content'>?",
			"place-items": "<'align-items'> <'justify-items'>?",
			"place-self": "<'align-self'> <'justify-self'>?",
			"pointer-events":
				"auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",
			position: "static|relative|absolute|sticky|fixed|-webkit-sticky",
			quotes: "none|auto|[<string> <string>]+",
			resize: "none|both|horizontal|vertical|block|inline",
			right: "<length>|<percentage>|auto",
			rotate: "none|<angle>|[x|y|z|<number>{3}]&&<angle>",
			"row-gap": "normal|<length-percentage>",
			"ruby-align": "start|center|space-between|space-around",
			"ruby-merge": "separate|collapse|auto",
			"ruby-position": "[alternate||[over|under]]|inter-character",
			scale: "none|<number>{1,3}",
			"scrollbar-color": "auto|<color>{2}",
			"scrollbar-gutter": "auto|stable&&both-edges?",
			"scrollbar-width": "auto|thin|none",
			"scroll-behavior": "auto|smooth",
			"scroll-margin": "<length>{1,4}",
			"scroll-margin-block": "<length>{1,2}",
			"scroll-margin-block-start": "<length>",
			"scroll-margin-block-end": "<length>",
			"scroll-margin-bottom": "<length>",
			"scroll-margin-inline": "<length>{1,2}",
			"scroll-margin-inline-start": "<length>",
			"scroll-margin-inline-end": "<length>",
			"scroll-margin-left": "<length>",
			"scroll-margin-right": "<length>",
			"scroll-margin-top": "<length>",
			"scroll-padding": "[auto|<length-percentage>]{1,4}",
			"scroll-padding-block": "[auto|<length-percentage>]{1,2}",
			"scroll-padding-block-start": "auto|<length-percentage>",
			"scroll-padding-block-end": "auto|<length-percentage>",
			"scroll-padding-bottom": "auto|<length-percentage>",
			"scroll-padding-inline": "[auto|<length-percentage>]{1,2}",
			"scroll-padding-inline-start": "auto|<length-percentage>",
			"scroll-padding-inline-end": "auto|<length-percentage>",
			"scroll-padding-left": "auto|<length-percentage>",
			"scroll-padding-right": "auto|<length-percentage>",
			"scroll-padding-top": "auto|<length-percentage>",
			"scroll-snap-align": "[none|start|end|center]{1,2}",
			"scroll-snap-coordinate": "none|<position>#",
			"scroll-snap-destination": "<position>",
			"scroll-snap-points-x": "none|repeat( <length-percentage> )",
			"scroll-snap-points-y": "none|repeat( <length-percentage> )",
			"scroll-snap-stop": "normal|always",
			"scroll-snap-type":
				"none|[x|y|block|inline|both] [mandatory|proximity]?",
			"scroll-snap-type-x": "none|mandatory|proximity",
			"scroll-snap-type-y": "none|mandatory|proximity",
			"scroll-timeline": "<scroll-timeline-name>||<scroll-timeline-axis>",
			"scroll-timeline-axis": "block|inline|vertical|horizontal",
			"scroll-timeline-name": "none|<custom-ident>",
			"shape-image-threshold": "<alpha-value>",
			"shape-margin": "<length-percentage>",
			"shape-outside": "none|[<shape-box>||<basic-shape>]|<image>",
			"tab-size": "<integer>|<length>",
			"table-layout": "auto|fixed",
			"text-align": "start|end|left|right|center|justify|match-parent",
			"text-align-last": "auto|start|end|left|right|center|justify",
			"text-combine-upright": "none|all|[digits <integer>?]",
			"text-decoration":
				"<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>",
			"text-decoration-color": "<color>",
			"text-decoration-line":
				"none|[underline||overline||line-through||blink]|spelling-error|grammar-error",
			"text-decoration-skip":
				"none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]",
			"text-decoration-skip-ink": "auto|all|none",
			"text-decoration-style": "solid|double|dotted|dashed|wavy",
			"text-decoration-thickness": "auto|from-font|<length>|<percentage>",
			"text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>",
			"text-emphasis-color": "<color>",
			"text-emphasis-position": "[over|under]&&[right|left]",
			"text-emphasis-style":
				"none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
			"text-indent": "<length-percentage>&&hanging?&&each-line?",
			"text-justify": "auto|inter-character|inter-word|none",
			"text-orientation": "mixed|upright|sideways",
			"text-overflow": "[clip|ellipsis|<string>]{1,2}",
			"text-rendering":
				"auto|optimizeSpeed|optimizeLegibility|geometricPrecision",
			"text-shadow": "none|<shadow-t>#",
			"text-size-adjust": "none|auto|<percentage>",
			"text-transform":
				"none|capitalize|uppercase|lowercase|full-width|full-size-kana",
			"text-underline-offset": "auto|<length>|<percentage>",
			"text-underline-position": "auto|from-font|[under||[left|right]]",
			top: "<length>|<percentage>|auto",
			"touch-action":
				"auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",
			transform: "none|<transform-list>",
			"transform-box":
				"content-box|border-box|fill-box|stroke-box|view-box",
			"transform-origin":
				"[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?",
			"transform-style": "flat|preserve-3d",
			transition: "<single-transition>#",
			"transition-delay": "<time>#",
			"transition-duration": "<time>#",
			"transition-property": "none|<single-transition-property>#",
			"transition-timing-function": "<easing-function>#",
			translate:
				"none|<length-percentage> [<length-percentage> <length>?]?",
			"unicode-bidi":
				"normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext",
			"user-select": "auto|text|none|contain|all",
			"vertical-align":
				"baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",
			visibility: "visible|hidden|collapse",
			"white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces",
			widows: "<integer>",
			width: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|fill|stretch|intrinsic|-moz-max-content|-webkit-max-content|-moz-fit-content|-webkit-fit-content",
			"will-change": "auto|<animateable-feature>#",
			"word-break": "normal|break-all|keep-all|break-word",
			"word-spacing": "normal|<length>",
			"word-wrap": "normal|break-word",
			"writing-mode":
				"horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",
			"z-index": "auto|<integer>",
			zoom: "normal|reset|<number>|<percentage>",
			"-moz-background-clip": "padding|border",
			"-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>",
			"-moz-border-radius-bottomright": "<'border-bottom-right-radius'>",
			"-moz-border-radius-topleft": "<'border-top-left-radius'>",
			"-moz-border-radius-topright": "<'border-bottom-right-radius'>",
			"-moz-control-character-visibility": "visible|hidden",
			"-moz-osx-font-smoothing": "auto|grayscale",
			"-moz-user-select": "none|text|all|-moz-none",
			"-ms-flex-align": "start|end|center|baseline|stretch",
			"-ms-flex-item-align": "auto|start|end|center|baseline|stretch",
			"-ms-flex-line-pack": "start|end|center|justify|distribute|stretch",
			"-ms-flex-negative": "<'flex-shrink'>",
			"-ms-flex-pack": "start|end|center|justify|distribute",
			"-ms-flex-order": "<integer>",
			"-ms-flex-positive": "<'flex-grow'>",
			"-ms-flex-preferred-size": "<'flex-basis'>",
			"-ms-interpolation-mode": "nearest-neighbor|bicubic",
			"-ms-grid-column-align": "start|end|center|stretch",
			"-ms-grid-row-align": "start|end|center|stretch",
			"-ms-hyphenate-limit-last": "none|always|column|page|spread",
			"-webkit-background-clip": "[<box>|border|padding|content|text]#",
			"-webkit-column-break-after": "always|auto|avoid",
			"-webkit-column-break-before": "always|auto|avoid",
			"-webkit-column-break-inside": "always|auto|avoid",
			"-webkit-font-smoothing":
				"auto|none|antialiased|subpixel-antialiased",
			"-webkit-mask-box-image":
				"[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?",
			"-webkit-print-color-adjust": "economy|exact",
			"-webkit-text-security": "none|circle|disc|square",
			"-webkit-user-drag": "none|element|auto",
			"-webkit-user-select": "auto|none|text|all",
			"alignment-baseline":
				"auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",
			"baseline-shift": "baseline|sub|super|<svg-length>",
			behavior: "<url>+",
			"clip-rule": "nonzero|evenodd",
			cue: "<'cue-before'> <'cue-after'>?",
			"cue-after": "<url> <decibel>?|none",
			"cue-before": "<url> <decibel>?|none",
			"dominant-baseline":
				"auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",
			fill: "<paint>",
			"fill-opacity": "<number-zero-one>",
			"fill-rule": "nonzero|evenodd",
			"glyph-orientation-horizontal": "<angle>",
			"glyph-orientation-vertical": "<angle>",
			kerning: "auto|<svg-length>",
			marker: "none|<url>",
			"marker-end": "none|<url>",
			"marker-mid": "none|<url>",
			"marker-start": "none|<url>",
			pause: "<'pause-before'> <'pause-after'>?",
			"pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
			"pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
			rest: "<'rest-before'> <'rest-after'>?",
			"rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
			"rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
			"shape-rendering":
				"auto|optimizeSpeed|crispEdges|geometricPrecision",
			src: "[<url> [format( <string># )]?|local( <family-name> )]#",
			speak: "auto|none|normal",
			"speak-as":
				"normal|spell-out||digits||[literal-punctuation|no-punctuation]",
			stroke: "<paint>",
			"stroke-dasharray": "none|[<svg-length>+]#",
			"stroke-dashoffset": "<svg-length>",
			"stroke-linecap": "butt|round|square",
			"stroke-linejoin": "miter|round|bevel",
			"stroke-miterlimit": "<number-one-or-greater>",
			"stroke-opacity": "<number-zero-one>",
			"stroke-width": "<svg-length>",
			"text-anchor": "start|middle|end",
			"unicode-range": "<urange>#",
			"voice-balance": "<number>|left|center|right|leftwards|rightwards",
			"voice-duration": "auto|<time>",
			"voice-family":
				"[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve",
			"voice-pitch":
				"<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
			"voice-range":
				"<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
			"voice-rate":
				"[normal|x-slow|slow|medium|fast|x-fast]||<percentage>",
			"voice-stress": "normal|strong|moderate|none|reduced",
			"voice-volume":
				"silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]",
		},
		atrules: {
			charset: { prelude: "<string>", descriptors: null },
			"counter-style": {
				prelude: "<counter-style-name>",
				descriptors: {
					"additive-symbols": "[<integer>&&<symbol>]#",
					fallback: "<counter-style-name>",
					negative: "<symbol> <symbol>?",
					pad: "<integer>&&<symbol>",
					prefix: "<symbol>",
					range: "[[<integer>|infinite]{2}]#|auto",
					"speak-as":
						"auto|bullets|numbers|words|spell-out|<counter-style-name>",
					suffix: "<symbol>",
					symbols: "<symbol>+",
					system: "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]",
				},
			},
			document: {
				prelude:
					"[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",
				descriptors: null,
			},
			"font-face": {
				prelude: null,
				descriptors: {
					"ascent-override": "normal|<percentage>",
					"descent-override": "normal|<percentage>",
					"font-display": "[auto|block|swap|fallback|optional]",
					"font-family": "<family-name>",
					"font-feature-settings": "normal|<feature-tag-value>#",
					"font-variation-settings": "normal|[<string> <number>]#",
					"font-stretch": "<font-stretch-absolute>{1,2}",
					"font-style": "normal|italic|oblique <angle>{0,2}",
					"font-weight": "<font-weight-absolute>{1,2}",
					"font-variant":
						"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
					"line-gap-override": "normal|<percentage>",
					"size-adjust": "<percentage>",
					src: "[<url> [format( <string># )]?|local( <family-name> )]#",
					"unicode-range": "<urange>#",
				},
			},
			"font-feature-values": {
				prelude: "<family-name>#",
				descriptors: null,
			},
			import: {
				prelude:
					"[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?",
				descriptors: null,
			},
			keyframes: { prelude: "<keyframes-name>", descriptors: null },
			layer: {
				prelude: "[<layer-name>#|<layer-name>?]",
				descriptors: null,
			},
			media: { prelude: "<media-query-list>", descriptors: null },
			namespace: {
				prelude: "<namespace-prefix>? [<string>|<url>]",
				descriptors: null,
			},
			page: {
				prelude: "<page-selector-list>",
				descriptors: {
					bleed: "auto|<length>",
					marks: "none|[crop||cross]",
					size: "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]",
				},
			},
			property: {
				prelude: "<custom-property-name>",
				descriptors: {
					syntax: "<string>",
					inherits: "true|false",
					"initial-value": "<string>",
				},
			},
			"scroll-timeline": {
				prelude: "<timeline-name>",
				descriptors: null,
			},
			supports: { prelude: "<supports-condition>", descriptors: null },
			viewport: {
				prelude: null,
				descriptors: {
					height: "<viewport-length>{1,2}",
					"max-height": "<viewport-length>",
					"max-width": "<viewport-length>",
					"max-zoom": "auto|<number>|<percentage>",
					"min-height": "<viewport-length>",
					"min-width": "<viewport-length>",
					"min-zoom": "auto|<number>|<percentage>",
					orientation: "auto|portrait|landscape",
					"user-zoom": "zoom|fixed",
					"viewport-fit": "auto|contain|cover",
					width: "<viewport-length>{1,2}",
					zoom: "auto|<number>|<percentage>",
				},
			},
			nest: { prelude: "<complex-selector-list>", descriptors: null },
		},
	};
	var wi = {};
	te(wi, {
		AnPlusB: () => Ys,
		Atrule: () => Ws,
		AtrulePrelude: () => Xs,
		AttributeSelector: () => Js,
		Block: () => $s,
		Brackets: () => tr,
		CDC: () => ir,
		CDO: () => or,
		ClassSelector: () => rr,
		Combinator: () => cr,
		Comment: () => dr,
		Declaration: () => fr,
		DeclarationList: () => br,
		Dimension: () => xr,
		Function: () => vr,
		Hash: () => Tr,
		IdSelector: () => _r,
		Identifier: () => yr,
		MediaFeature: () => Dr,
		MediaQuery: () => Ir,
		MediaQueryList: () => Lr,
		NestingSelector: () => Rr,
		Nth: () => Br,
		Number: () => Mr,
		Operator: () => Hr,
		Parentheses: () => qr,
		Percentage: () => Yr,
		PseudoClassSelector: () => Wr,
		PseudoElementSelector: () => Xr,
		Ratio: () => Qr,
		Raw: () => Zr,
		Rule: () => eu,
		Selector: () => nu,
		SelectorList: () => au,
		String: () => ru,
		StyleSheet: () => cu,
		TypeSelector: () => pu,
		UnicodeRange: () => hu,
		Url: () => xu,
		Value: () => vu,
		WhiteSpace: () => Tu,
	});
	var Ys = {};
	te(Ys, {
		generate: () => ug,
		name: () => sg,
		parse: () => zs,
		structure: () => rg,
	});
	var Bt = 43,
		dt = 45,
		Ua = 110,
		dn = !0,
		og = !1;
	function Ha(e, t) {
		let n = this.tokenStart + e,
			i = this.charCodeAt(n);
		for (
			(i === Bt || i === dt) &&
			(t && this.error("Number sign is not allowed"), n++);
			n < this.tokenEnd;
			n++
		)
			Ne(this.charCodeAt(n)) || this.error("Integer is expected", n);
	}
	function Fn(e) {
		return Ha.call(this, 0, e);
	}
	function $t(e, t) {
		if (!this.cmpChar(this.tokenStart + e, t)) {
			let n = "";
			switch (t) {
				case Ua:
					n = "N is expected";
					break;
				case dt:
					n = "HyphenMinus is expected";
					break;
			}
			this.error(n, this.tokenStart + e);
		}
	}
	function qs() {
		let e = 0,
			t = 0,
			n = this.tokenType;
		for (; n === 13 || n === 25; ) n = this.lookupType(++e);
		if (n !== 10)
			if (this.isDelim(Bt, e) || this.isDelim(dt, e)) {
				t = this.isDelim(Bt, e) ? Bt : dt;
				do n = this.lookupType(++e);
				while (n === 13 || n === 25);
				n !== 10 && (this.skip(e), Fn.call(this, dn));
			} else return null;
		return (
			e > 0 && this.skip(e),
			t === 0 &&
				((n = this.charCodeAt(this.tokenStart)),
				n !== Bt && n !== dt && this.error("Number sign is expected")),
			Fn.call(this, t !== 0),
			t === dt ? "-" + this.consume(10) : this.consume(10)
		);
	}
	var sg = "AnPlusB",
		rg = { a: [String, null], b: [String, null] };
	function zs() {
		let e = this.tokenStart,
			t = null,
			n = null;
		if (this.tokenType === 10) Fn.call(this, og), (n = this.consume(10));
		else if (this.tokenType === 1 && this.cmpChar(this.tokenStart, dt))
			switch (
				((t = "-1"),
				$t.call(this, 1, Ua),
				this.tokenEnd - this.tokenStart)
			) {
				case 2:
					this.next(), (n = qs.call(this));
					break;
				case 3:
					$t.call(this, 2, dt),
						this.next(),
						this.skipSC(),
						Fn.call(this, dn),
						(n = "-" + this.consume(10));
					break;
				default:
					$t.call(this, 2, dt),
						Ha.call(this, 3, dn),
						this.next(),
						(n = this.substrToCursor(e + 2));
			}
		else if (
			this.tokenType === 1 ||
			(this.isDelim(Bt) && this.lookupType(1) === 1)
		) {
			let i = 0;
			switch (
				((t = "1"),
				this.isDelim(Bt) && ((i = 1), this.next()),
				$t.call(this, 0, Ua),
				this.tokenEnd - this.tokenStart)
			) {
				case 1:
					this.next(), (n = qs.call(this));
					break;
				case 2:
					$t.call(this, 1, dt),
						this.next(),
						this.skipSC(),
						Fn.call(this, dn),
						(n = "-" + this.consume(10));
					break;
				default:
					$t.call(this, 1, dt),
						Ha.call(this, 2, dn),
						this.next(),
						(n = this.substrToCursor(e + i + 1));
			}
		} else if (this.tokenType === 12) {
			let i = this.charCodeAt(this.tokenStart),
				a = i === Bt || i === dt,
				o = this.tokenStart + a;
			for (; o < this.tokenEnd && Ne(this.charCodeAt(o)); o++);
			o === this.tokenStart + a &&
				this.error("Integer is expected", this.tokenStart + a),
				$t.call(this, o - this.tokenStart, Ua),
				(t = this.substring(e, o)),
				o + 1 === this.tokenEnd
					? (this.next(), (n = qs.call(this)))
					: ($t.call(this, o - this.tokenStart + 1, dt),
						o + 2 === this.tokenEnd
							? (this.next(),
								this.skipSC(),
								Fn.call(this, dn),
								(n = "-" + this.consume(10)))
							: (Ha.call(this, o - this.tokenStart + 2, dn),
								this.next(),
								(n = this.substrToCursor(o + 1))));
		} else this.error();
		return (
			t !== null && t.charCodeAt(0) === Bt && (t = t.substr(1)),
			n !== null && n.charCodeAt(0) === Bt && (n = n.substr(1)),
			{
				type: "AnPlusB",
				loc: this.getLocation(e, this.tokenStart),
				a: t,
				b: n,
			}
		);
	}
	function ug(e) {
		if (e.a) {
			let t =
				(e.a === "+1" && "n") ||
				(e.a === "1" && "n") ||
				(e.a === "-1" && "-n") ||
				e.a + "n";
			if (e.b) {
				let n = e.b[0] === "-" || e.b[0] === "+" ? e.b : "+" + e.b;
				this.tokenize(t + n);
			} else this.tokenize(t);
		} else this.tokenize(e.b);
	}
	var Ws = {};
	te(Ws, {
		generate: () => fg,
		name: () => lg,
		parse: () => Vs,
		structure: () => pg,
		walkContext: () => dg,
	});
	function ld(e) {
		return this.Raw(e, this.consumeUntilLeftCurlyBracketOrSemicolon, !0);
	}
	function cg() {
		for (let e = 1, t; (t = this.lookupType(e)); e++) {
			if (t === 24) return !0;
			if (t === 23 || t === 3) return !1;
		}
		return !1;
	}
	var lg = "Atrule",
		dg = "atrule",
		pg = {
			name: String,
			prelude: ["AtrulePrelude", "Raw", null],
			block: ["Block", null],
		};
	function Vs(e = !1) {
		let t = this.tokenStart,
			n,
			i,
			a = null,
			o = null;
		switch (
			(this.eat(3),
			(n = this.substrToCursor(t + 1)),
			(i = n.toLowerCase()),
			this.skipSC(),
			this.eof === !1 &&
				this.tokenType !== 23 &&
				this.tokenType !== 17 &&
				(this.parseAtrulePrelude
					? (a = this.parseWithFallback(
							this.AtrulePrelude.bind(this, n, e),
							ld,
						))
					: (a = ld.call(this, this.tokenIndex)),
				this.skipSC()),
			this.tokenType)
		) {
			case 17:
				this.next();
				break;
			case 23:
				hasOwnProperty.call(this.atrule, i) &&
				typeof this.atrule[i].block == "function"
					? (o = this.atrule[i].block.call(this, e))
					: (o = this.Block(cg.call(this)));
				break;
		}
		return {
			type: "Atrule",
			loc: this.getLocation(t, this.tokenStart),
			name: n,
			prelude: a,
			block: o,
		};
	}
	function fg(e) {
		this.token(3, "@" + e.name),
			e.prelude !== null && this.node(e.prelude),
			e.block ? this.node(e.block) : this.token(17, ";");
	}
	var Xs = {};
	te(Xs, {
		generate: () => gg,
		name: () => mg,
		parse: () => Gs,
		structure: () => bg,
		walkContext: () => hg,
	});
	var mg = "AtrulePrelude",
		hg = "atrulePrelude",
		bg = { children: [[]] };
	function Gs(e) {
		let t = null;
		return (
			e !== null && (e = e.toLowerCase()),
			this.skipSC(),
			hasOwnProperty.call(this.atrule, e) &&
			typeof this.atrule[e].prelude == "function"
				? (t = this.atrule[e].prelude.call(this))
				: (t = this.readSequence(this.scope.AtrulePrelude)),
			this.skipSC(),
			this.eof !== !0 &&
				this.tokenType !== 23 &&
				this.tokenType !== 17 &&
				this.error("Semicolon or block is expected"),
			{
				type: "AtrulePrelude",
				loc: this.getLocationFromList(t),
				children: t,
			}
		);
	}
	function gg(e) {
		this.children(e);
	}
	var Js = {};
	te(Js, {
		generate: () => kg,
		name: () => Cg,
		parse: () => Qs,
		structure: () => yg,
	});
	var xg = 36,
		dd = 42,
		ja = 61,
		Eg = 94,
		Ks = 124,
		vg = 126;
	function Ag() {
		this.eof && this.error("Unexpected end of input");
		let e = this.tokenStart,
			t = !1;
		return (
			this.isDelim(dd)
				? ((t = !0), this.next())
				: this.isDelim(Ks) || this.eat(1),
			this.isDelim(Ks)
				? this.charCodeAt(this.tokenStart + 1) !== ja
					? (this.next(), this.eat(1))
					: t && this.error("Identifier is expected", this.tokenEnd)
				: t && this.error("Vertical line is expected"),
			{
				type: "Identifier",
				loc: this.getLocation(e, this.tokenStart),
				name: this.substrToCursor(e),
			}
		);
	}
	function Tg() {
		let e = this.tokenStart,
			t = this.charCodeAt(e);
		return (
			t !== ja &&
				t !== vg &&
				t !== Eg &&
				t !== xg &&
				t !== dd &&
				t !== Ks &&
				this.error(
					"Attribute selector (=, ~=, ^=, $=, *=, |=) is expected",
				),
			this.next(),
			t !== ja &&
				(this.isDelim(ja) || this.error("Equal sign is expected"),
				this.next()),
			this.substrToCursor(e)
		);
	}
	var Cg = "AttributeSelector",
		yg = {
			name: "Identifier",
			matcher: [String, null],
			value: ["String", "Identifier", null],
			flags: [String, null],
		};
	function Qs() {
		let e = this.tokenStart,
			t,
			n = null,
			i = null,
			a = null;
		return (
			this.eat(19),
			this.skipSC(),
			(t = Ag.call(this)),
			this.skipSC(),
			this.tokenType !== 20 &&
				(this.tokenType !== 1 &&
					((n = Tg.call(this)),
					this.skipSC(),
					(i =
						this.tokenType === 5
							? this.String()
							: this.Identifier()),
					this.skipSC()),
				this.tokenType === 1 && ((a = this.consume(1)), this.skipSC())),
			this.eat(20),
			{
				type: "AttributeSelector",
				loc: this.getLocation(e, this.tokenStart),
				name: t,
				matcher: n,
				value: i,
				flags: a,
			}
		);
	}
	function kg(e) {
		this.token(9, "["),
			this.node(e.name),
			e.matcher !== null &&
				(this.tokenize(e.matcher), this.node(e.value)),
			e.flags !== null && this.token(1, e.flags),
			this.token(9, "]");
	}
	var $s = {};
	te($s, {
		generate: () => Ng,
		name: () => Dg,
		parse: () => Zs,
		structure: () => Ig,
		walkContext: () => wg,
	});
	var _g = 38;
	function md(e) {
		return this.Raw(e, null, !0);
	}
	function pd() {
		return this.parseWithFallback(this.Rule, md);
	}
	function fd(e) {
		return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
	}
	function Sg() {
		if (this.tokenType === 17) return fd.call(this, this.tokenIndex);
		let e = this.parseWithFallback(this.Declaration, fd);
		return this.tokenType === 17 && this.next(), e;
	}
	var Dg = "Block",
		wg = "block",
		Ig = { children: [["Atrule", "Rule", "Declaration"]] };
	function Zs(e) {
		let t = e ? Sg : pd,
			n = this.tokenStart,
			i = this.createList();
		this.eat(23);
		e: for (; !this.eof; )
			switch (this.tokenType) {
				case 24:
					break e;
				case 13:
				case 25:
					this.next();
					break;
				case 3:
					i.push(
						this.parseWithFallback(this.Atrule.bind(this, e), md),
					);
					break;
				default:
					e && this.isDelim(_g)
						? i.push(pd.call(this))
						: i.push(t.call(this));
			}
		return (
			this.eof || this.eat(24),
			{
				type: "Block",
				loc: this.getLocation(n, this.tokenStart),
				children: i,
			}
		);
	}
	function Ng(e) {
		this.token(23, "{"),
			this.children(e, (t) => {
				t.type === "Declaration" && this.token(17, ";");
			}),
			this.token(24, "}");
	}
	var tr = {};
	te(tr, {
		generate: () => Rg,
		name: () => Lg,
		parse: () => er,
		structure: () => Pg,
	});
	var Lg = "Brackets",
		Pg = { children: [[]] };
	function er(e, t) {
		let n = this.tokenStart,
			i = null;
		return (
			this.eat(19),
			(i = e.call(this, t)),
			this.eof || this.eat(20),
			{
				type: "Brackets",
				loc: this.getLocation(n, this.tokenStart),
				children: i,
			}
		);
	}
	function Rg(e) {
		this.token(9, "["), this.children(e), this.token(9, "]");
	}
	var ir = {};
	te(ir, {
		generate: () => Fg,
		name: () => Og,
		parse: () => nr,
		structure: () => Bg,
	});
	var Og = "CDC",
		Bg = [];
	function nr() {
		let e = this.tokenStart;
		return (
			this.eat(15),
			{ type: "CDC", loc: this.getLocation(e, this.tokenStart) }
		);
	}
	function Fg() {
		this.token(15, "-->");
	}
	var or = {};
	te(or, {
		generate: () => Hg,
		name: () => Mg,
		parse: () => ar,
		structure: () => Ug,
	});
	var Mg = "CDO",
		Ug = [];
	function ar() {
		let e = this.tokenStart;
		return (
			this.eat(14),
			{ type: "CDO", loc: this.getLocation(e, this.tokenStart) }
		);
	}
	function Hg() {
		this.token(14, "<!--");
	}
	var rr = {};
	te(rr, {
		generate: () => Yg,
		name: () => qg,
		parse: () => sr,
		structure: () => zg,
	});
	var jg = 46,
		qg = "ClassSelector",
		zg = { name: String };
	function sr() {
		return (
			this.eatDelim(jg),
			{
				type: "ClassSelector",
				loc: this.getLocation(this.tokenStart - 1, this.tokenEnd),
				name: this.consume(1),
			}
		);
	}
	function Yg(e) {
		this.token(9, "."), this.token(1, e.name);
	}
	var cr = {};
	te(cr, {
		generate: () => Qg,
		name: () => Xg,
		parse: () => ur,
		structure: () => Kg,
	});
	var Vg = 43,
		hd = 47,
		Wg = 62,
		Gg = 126,
		Xg = "Combinator",
		Kg = { name: String };
	function ur() {
		let e = this.tokenStart,
			t;
		switch (this.tokenType) {
			case 13:
				t = " ";
				break;
			case 9:
				switch (this.charCodeAt(this.tokenStart)) {
					case Wg:
					case Vg:
					case Gg:
						this.next();
						break;
					case hd:
						this.next(), this.eatIdent("deep"), this.eatDelim(hd);
						break;
					default:
						this.error("Combinator is expected");
				}
				t = this.substrToCursor(e);
				break;
		}
		return {
			type: "Combinator",
			loc: this.getLocation(e, this.tokenStart),
			name: t,
		};
	}
	function Qg(e) {
		this.tokenize(e.name);
	}
	var dr = {};
	te(dr, {
		generate: () => t3,
		name: () => $g,
		parse: () => lr,
		structure: () => e3,
	});
	var Jg = 42,
		Zg = 47,
		$g = "Comment",
		e3 = { value: String };
	function lr() {
		let e = this.tokenStart,
			t = this.tokenEnd;
		return (
			this.eat(25),
			t - e + 2 >= 2 &&
				this.charCodeAt(t - 2) === Jg &&
				this.charCodeAt(t - 1) === Zg &&
				(t -= 2),
			{
				type: "Comment",
				loc: this.getLocation(e, this.tokenStart),
				value: this.substring(e + 2, t),
			}
		);
	}
	function t3(e) {
		this.token(25, "/*" + e.value + "*/");
	}
	var fr = {};
	te(fr, {
		generate: () => f3,
		name: () => l3,
		parse: () => pr,
		structure: () => p3,
		walkContext: () => d3,
	});
	var gd = 33,
		n3 = 35,
		i3 = 36,
		a3 = 38,
		o3 = 42,
		s3 = 43,
		bd = 47;
	function r3(e) {
		return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !0);
	}
	function u3(e) {
		return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !1);
	}
	function c3() {
		let e = this.tokenIndex,
			t = this.Value();
		return (
			t.type !== "Raw" &&
				this.eof === !1 &&
				this.tokenType !== 17 &&
				this.isDelim(gd) === !1 &&
				this.isBalanceEdge(e) === !1 &&
				this.error(),
			t
		);
	}
	var l3 = "Declaration",
		d3 = "declaration",
		p3 = {
			important: [Boolean, String],
			property: String,
			value: ["Value", "Raw"],
		};
	function pr() {
		let e = this.tokenStart,
			t = this.tokenIndex,
			n = m3.call(this),
			i = _a(n),
			a = i ? this.parseCustomProperty : this.parseValue,
			o = i ? u3 : r3,
			s = !1,
			r;
		this.skipSC(), this.eat(16);
		let c = this.tokenIndex;
		if (
			(i || this.skipSC(),
			a
				? (r = this.parseWithFallback(c3, o))
				: (r = o.call(this, this.tokenIndex)),
			i && r.type === "Value" && r.children.isEmpty)
		) {
			for (let l = c - this.tokenIndex; l <= 0; l++)
				if (this.lookupType(l) === 13) {
					r.children.appendData({
						type: "WhiteSpace",
						loc: null,
						value: " ",
					});
					break;
				}
		}
		return (
			this.isDelim(gd) && ((s = h3.call(this)), this.skipSC()),
			this.eof === !1 &&
				this.tokenType !== 17 &&
				this.isBalanceEdge(t) === !1 &&
				this.error(),
			{
				type: "Declaration",
				loc: this.getLocation(e, this.tokenStart),
				important: s,
				property: n,
				value: r,
			}
		);
	}
	function f3(e) {
		this.token(1, e.property),
			this.token(16, ":"),
			this.node(e.value),
			e.important &&
				(this.token(9, "!"),
				this.token(1, e.important === !0 ? "important" : e.important));
	}
	function m3() {
		let e = this.tokenStart;
		if (this.tokenType === 9)
			switch (this.charCodeAt(this.tokenStart)) {
				case o3:
				case i3:
				case s3:
				case n3:
				case a3:
					this.next();
					break;
				case bd:
					this.next(), this.isDelim(bd) && this.next();
					break;
			}
		return (
			this.tokenType === 4 ? this.eat(4) : this.eat(1),
			this.substrToCursor(e)
		);
	}
	function h3() {
		this.eat(9), this.skipSC();
		let e = this.consume(1);
		return e === "important" ? !0 : e;
	}
	var br = {};
	te(br, {
		generate: () => E3,
		name: () => g3,
		parse: () => hr,
		structure: () => x3,
	});
	var b3 = 38;
	function mr(e) {
		return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
	}
	var g3 = "DeclarationList",
		x3 = { children: [["Declaration", "Atrule", "Rule"]] };
	function hr() {
		let e = this.createList();
		for (; !this.eof; )
			switch (this.tokenType) {
				case 13:
				case 25:
				case 17:
					this.next();
					break;
				case 3:
					e.push(
						this.parseWithFallback(this.Atrule.bind(this, !0), mr),
					);
					break;
				default:
					this.isDelim(b3)
						? e.push(this.parseWithFallback(this.Rule, mr))
						: e.push(this.parseWithFallback(this.Declaration, mr));
			}
		return {
			type: "DeclarationList",
			loc: this.getLocationFromList(e),
			children: e,
		};
	}
	function E3(e) {
		this.children(e, (t) => {
			t.type === "Declaration" && this.token(17, ";");
		});
	}
	var xr = {};
	te(xr, {
		generate: () => T3,
		name: () => v3,
		parse: () => gr,
		structure: () => A3,
	});
	var v3 = "Dimension",
		A3 = { value: String, unit: String };
	function gr() {
		let e = this.tokenStart,
			t = this.consumeNumber(12);
		return {
			type: "Dimension",
			loc: this.getLocation(e, this.tokenStart),
			value: t,
			unit: this.substring(e + t.length, this.tokenStart),
		};
	}
	function T3(e) {
		this.token(12, e.value + e.unit);
	}
	var vr = {};
	te(vr, {
		generate: () => _3,
		name: () => C3,
		parse: () => Er,
		structure: () => k3,
		walkContext: () => y3,
	});
	var C3 = "Function",
		y3 = "function",
		k3 = { name: String, children: [[]] };
	function Er(e, t) {
		let n = this.tokenStart,
			i = this.consumeFunctionName(),
			a = i.toLowerCase(),
			o;
		return (
			(o = t.hasOwnProperty(a) ? t[a].call(this, t) : e.call(this, t)),
			this.eof || this.eat(22),
			{
				type: "Function",
				loc: this.getLocation(n, this.tokenStart),
				name: i,
				children: o,
			}
		);
	}
	function _3(e) {
		this.token(2, e.name + "("), this.children(e), this.token(22, ")");
	}
	var Tr = {};
	te(Tr, {
		generate: () => I3,
		name: () => D3,
		parse: () => Ar,
		structure: () => w3,
		xxx: () => S3,
	});
	var S3 = "XXX",
		D3 = "Hash",
		w3 = { value: String };
	function Ar() {
		let e = this.tokenStart;
		return (
			this.eat(4),
			{
				type: "Hash",
				loc: this.getLocation(e, this.tokenStart),
				value: this.substrToCursor(e + 1),
			}
		);
	}
	function I3(e) {
		this.token(4, "#" + e.value);
	}
	var yr = {};
	te(yr, {
		generate: () => P3,
		name: () => N3,
		parse: () => Cr,
		structure: () => L3,
	});
	var N3 = "Identifier",
		L3 = { name: String };
	function Cr() {
		return {
			type: "Identifier",
			loc: this.getLocation(this.tokenStart, this.tokenEnd),
			name: this.consume(1),
		};
	}
	function P3(e) {
		this.token(1, e.name);
	}
	var _r = {};
	te(_r, {
		generate: () => B3,
		name: () => R3,
		parse: () => kr,
		structure: () => O3,
	});
	var R3 = "IdSelector",
		O3 = { name: String };
	function kr() {
		let e = this.tokenStart;
		return (
			this.eat(4),
			{
				type: "IdSelector",
				loc: this.getLocation(e, this.tokenStart),
				name: this.substrToCursor(e + 1),
			}
		);
	}
	function B3(e) {
		this.token(9, "#" + e.name);
	}
	var Dr = {};
	te(Dr, {
		generate: () => U3,
		name: () => F3,
		parse: () => Sr,
		structure: () => M3,
	});
	var F3 = "MediaFeature",
		M3 = {
			name: String,
			value: ["Identifier", "Number", "Dimension", "Ratio", null],
		};
	function Sr() {
		let e = this.tokenStart,
			t,
			n = null;
		if (
			(this.eat(21),
			this.skipSC(),
			(t = this.consume(1)),
			this.skipSC(),
			this.tokenType !== 22)
		) {
			switch ((this.eat(16), this.skipSC(), this.tokenType)) {
				case 10:
					this.lookupNonWSType(1) === 9
						? (n = this.Ratio())
						: (n = this.Number());
					break;
				case 12:
					n = this.Dimension();
					break;
				case 1:
					n = this.Identifier();
					break;
				default:
					this.error(
						"Number, dimension, ratio or identifier is expected",
					);
			}
			this.skipSC();
		}
		return (
			this.eat(22),
			{
				type: "MediaFeature",
				loc: this.getLocation(e, this.tokenStart),
				name: t,
				value: n,
			}
		);
	}
	function U3(e) {
		this.token(21, "("),
			this.token(1, e.name),
			e.value !== null && (this.token(16, ":"), this.node(e.value)),
			this.token(22, ")");
	}
	var Ir = {};
	te(Ir, {
		generate: () => q3,
		name: () => H3,
		parse: () => wr,
		structure: () => j3,
	});
	var H3 = "MediaQuery",
		j3 = { children: [["Identifier", "MediaFeature", "WhiteSpace"]] };
	function wr() {
		let e = this.createList(),
			t = null;
		this.skipSC();
		e: for (; !this.eof; ) {
			switch (this.tokenType) {
				case 25:
				case 13:
					this.next();
					continue;
				case 1:
					t = this.Identifier();
					break;
				case 21:
					t = this.MediaFeature();
					break;
				default:
					break e;
			}
			e.push(t);
		}
		return (
			t === null && this.error("Identifier or parenthesis is expected"),
			{
				type: "MediaQuery",
				loc: this.getLocationFromList(e),
				children: e,
			}
		);
	}
	function q3(e) {
		this.children(e);
	}
	var Lr = {};
	te(Lr, {
		generate: () => V3,
		name: () => z3,
		parse: () => Nr,
		structure: () => Y3,
	});
	var z3 = "MediaQueryList",
		Y3 = { children: [["MediaQuery"]] };
	function Nr() {
		let e = this.createList();
		for (
			this.skipSC();
			!this.eof && (e.push(this.MediaQuery()), this.tokenType === 18);

		)
			this.next();
		return {
			type: "MediaQueryList",
			loc: this.getLocationFromList(e),
			children: e,
		};
	}
	function V3(e) {
		this.children(e, () => this.token(18, ","));
	}
	var Rr = {};
	te(Rr, {
		generate: () => K3,
		name: () => G3,
		parse: () => Pr,
		structure: () => X3,
	});
	var W3 = 38,
		G3 = "NestingSelector",
		X3 = {};
	function Pr() {
		let e = this.tokenStart;
		return (
			this.eatDelim(W3),
			{
				type: "NestingSelector",
				loc: this.getLocation(e, this.tokenStart),
			}
		);
	}
	function K3() {
		this.token(9, "&");
	}
	var Br = {};
	te(Br, {
		generate: () => Z3,
		name: () => Q3,
		parse: () => Or,
		structure: () => J3,
	});
	var Q3 = "Nth",
		J3 = {
			nth: ["AnPlusB", "Identifier"],
			selector: ["SelectorList", null],
		};
	function Or() {
		this.skipSC();
		let e = this.tokenStart,
			t = e,
			n = null,
			i;
		return (
			this.lookupValue(0, "odd") || this.lookupValue(0, "even")
				? (i = this.Identifier())
				: (i = this.AnPlusB()),
			(t = this.tokenStart),
			this.skipSC(),
			this.lookupValue(0, "of") &&
				(this.next(), (n = this.SelectorList()), (t = this.tokenStart)),
			{ type: "Nth", loc: this.getLocation(e, t), nth: i, selector: n }
		);
	}
	function Z3(e) {
		this.node(e.nth),
			e.selector !== null && (this.token(1, "of"), this.node(e.selector));
	}
	var Mr = {};
	te(Mr, {
		generate: () => tx,
		name: () => $3,
		parse: () => Fr,
		structure: () => ex,
	});
	var $3 = "Number",
		ex = { value: String };
	function Fr() {
		return {
			type: "Number",
			loc: this.getLocation(this.tokenStart, this.tokenEnd),
			value: this.consume(10),
		};
	}
	function tx(e) {
		this.token(10, e.value);
	}
	var Hr = {};
	te(Hr, {
		generate: () => ax,
		name: () => nx,
		parse: () => Ur,
		structure: () => ix,
	});
	var nx = "Operator",
		ix = { value: String };
	function Ur() {
		let e = this.tokenStart;
		return (
			this.next(),
			{
				type: "Operator",
				loc: this.getLocation(e, this.tokenStart),
				value: this.substrToCursor(e),
			}
		);
	}
	function ax(e) {
		this.tokenize(e.value);
	}
	var qr = {};
	te(qr, {
		generate: () => rx,
		name: () => ox,
		parse: () => jr,
		structure: () => sx,
	});
	var ox = "Parentheses",
		sx = { children: [[]] };
	function jr(e, t) {
		let n = this.tokenStart,
			i = null;
		return (
			this.eat(21),
			(i = e.call(this, t)),
			this.eof || this.eat(22),
			{
				type: "Parentheses",
				loc: this.getLocation(n, this.tokenStart),
				children: i,
			}
		);
	}
	function rx(e) {
		this.token(21, "("), this.children(e), this.token(22, ")");
	}
	var Yr = {};
	te(Yr, {
		generate: () => lx,
		name: () => ux,
		parse: () => zr,
		structure: () => cx,
	});
	var ux = "Percentage",
		cx = { value: String };
	function zr() {
		return {
			type: "Percentage",
			loc: this.getLocation(this.tokenStart, this.tokenEnd),
			value: this.consumeNumber(11),
		};
	}
	function lx(e) {
		this.token(11, e.value + "%");
	}
	var Wr = {};
	te(Wr, {
		generate: () => mx,
		name: () => dx,
		parse: () => Vr,
		structure: () => fx,
		walkContext: () => px,
	});
	var dx = "PseudoClassSelector",
		px = "function",
		fx = { name: String, children: [["Raw"], null] };
	function Vr() {
		let e = this.tokenStart,
			t = null,
			n,
			i;
		return (
			this.eat(16),
			this.tokenType === 2
				? ((n = this.consumeFunctionName()),
					(i = n.toLowerCase()),
					hasOwnProperty.call(this.pseudo, i)
						? (this.skipSC(),
							(t = this.pseudo[i].call(this)),
							this.skipSC())
						: ((t = this.createList()),
							t.push(this.Raw(this.tokenIndex, null, !1))),
					this.eat(22))
				: (n = this.consume(1)),
			{
				type: "PseudoClassSelector",
				loc: this.getLocation(e, this.tokenStart),
				name: n,
				children: t,
			}
		);
	}
	function mx(e) {
		this.token(16, ":"),
			e.children === null
				? this.token(1, e.name)
				: (this.token(2, e.name + "("),
					this.children(e),
					this.token(22, ")"));
	}
	var Xr = {};
	te(Xr, {
		generate: () => xx,
		name: () => hx,
		parse: () => Gr,
		structure: () => gx,
		walkContext: () => bx,
	});
	var hx = "PseudoElementSelector",
		bx = "function",
		gx = { name: String, children: [["Raw"], null] };
	function Gr() {
		let e = this.tokenStart,
			t = null,
			n,
			i;
		return (
			this.eat(16),
			this.eat(16),
			this.tokenType === 2
				? ((n = this.consumeFunctionName()),
					(i = n.toLowerCase()),
					hasOwnProperty.call(this.pseudo, i)
						? (this.skipSC(),
							(t = this.pseudo[i].call(this)),
							this.skipSC())
						: ((t = this.createList()),
							t.push(this.Raw(this.tokenIndex, null, !1))),
					this.eat(22))
				: (n = this.consume(1)),
			{
				type: "PseudoElementSelector",
				loc: this.getLocation(e, this.tokenStart),
				name: n,
				children: t,
			}
		);
	}
	function xx(e) {
		this.token(16, ":"),
			this.token(16, ":"),
			e.children === null
				? this.token(1, e.name)
				: (this.token(2, e.name + "("),
					this.children(e),
					this.token(22, ")"));
	}
	var Qr = {};
	te(Qr, {
		generate: () => Cx,
		name: () => Ax,
		parse: () => Kr,
		structure: () => Tx,
	});
	var Ex = 47,
		vx = 46;
	function xd() {
		this.skipSC();
		let e = this.consume(10);
		for (let t = 0; t < e.length; t++) {
			let n = e.charCodeAt(t);
			!Ne(n) &&
				n !== vx &&
				this.error(
					"Unsigned number is expected",
					this.tokenStart - e.length + t,
				);
		}
		return (
			Number(e) === 0 &&
				this.error(
					"Zero number is not allowed",
					this.tokenStart - e.length,
				),
			e
		);
	}
	var Ax = "Ratio",
		Tx = { left: String, right: String };
	function Kr() {
		let e = this.tokenStart,
			t = xd.call(this),
			n;
		return (
			this.skipSC(),
			this.eatDelim(Ex),
			(n = xd.call(this)),
			{
				type: "Ratio",
				loc: this.getLocation(e, this.tokenStart),
				left: t,
				right: n,
			}
		);
	}
	function Cx(e) {
		this.token(10, e.left), this.token(9, "/"), this.token(10, e.right);
	}
	var Zr = {};
	te(Zr, {
		generate: () => Sx,
		name: () => kx,
		parse: () => Jr,
		structure: () => _x,
	});
	function yx() {
		return this.tokenIndex > 0 && this.lookupType(-1) === 13
			? this.tokenIndex > 1
				? this.getTokenStart(this.tokenIndex - 1)
				: this.firstCharOffset
			: this.tokenStart;
	}
	var kx = "Raw",
		_x = { value: String };
	function Jr(e, t, n) {
		let i = this.getTokenStart(e),
			a;
		return (
			this.skipUntilBalanced(e, t || this.consumeUntilBalanceEnd),
			n && this.tokenStart > i
				? (a = yx.call(this))
				: (a = this.tokenStart),
			{
				type: "Raw",
				loc: this.getLocation(i, a),
				value: this.substring(i, a),
			}
		);
	}
	function Sx(e) {
		this.tokenize(e.value);
	}
	var eu = {};
	te(eu, {
		generate: () => Lx,
		name: () => wx,
		parse: () => $r,
		structure: () => Nx,
		walkContext: () => Ix,
	});
	function Ed(e) {
		return this.Raw(e, this.consumeUntilLeftCurlyBracket, !0);
	}
	function Dx() {
		let e = this.SelectorList();
		return (
			e.type !== "Raw" &&
				this.eof === !1 &&
				this.tokenType !== 23 &&
				this.error(),
			e
		);
	}
	var wx = "Rule",
		Ix = "rule",
		Nx = { prelude: ["SelectorList", "Raw"], block: ["Block"] };
	function $r() {
		let e = this.tokenIndex,
			t = this.tokenStart,
			n,
			i;
		return (
			this.parseRulePrelude
				? (n = this.parseWithFallback(Dx, Ed))
				: (n = Ed.call(this, e)),
			(i = this.Block(!0)),
			{
				type: "Rule",
				loc: this.getLocation(t, this.tokenStart),
				prelude: n,
				block: i,
			}
		);
	}
	function Lx(e) {
		this.node(e.prelude), this.node(e.block);
	}
	var nu = {};
	te(nu, {
		generate: () => Ox,
		name: () => Px,
		parse: () => tu,
		structure: () => Rx,
	});
	var Px = "Selector",
		Rx = {
			children: [
				[
					"TypeSelector",
					"IdSelector",
					"ClassSelector",
					"AttributeSelector",
					"PseudoClassSelector",
					"PseudoElementSelector",
					"Combinator",
					"WhiteSpace",
				],
			],
		};
	function tu() {
		let e = this.readSequence(this.scope.Selector);
		return (
			this.getFirstListNode(e) === null &&
				this.error("Selector is expected"),
			{ type: "Selector", loc: this.getLocationFromList(e), children: e }
		);
	}
	function Ox(e) {
		this.children(e);
	}
	var au = {};
	te(au, {
		generate: () => Ux,
		name: () => Bx,
		parse: () => iu,
		structure: () => Mx,
		walkContext: () => Fx,
	});
	var Bx = "SelectorList",
		Fx = "selector",
		Mx = { children: [["Selector", "Raw"]] };
	function iu() {
		let e = this.createList();
		for (; !this.eof; ) {
			if ((e.push(this.Selector()), this.tokenType === 18)) {
				this.next();
				continue;
			}
			break;
		}
		return {
			type: "SelectorList",
			loc: this.getLocationFromList(e),
			children: e,
		};
	}
	function Ux(e) {
		this.children(e, () => this.token(18, ","));
	}
	var ru = {};
	te(ru, {
		generate: () => qx,
		name: () => Hx,
		parse: () => su,
		structure: () => jx,
	});
	var ou = 92,
		vd = 34,
		Ad = 39;
	function qa(e) {
		let t = e.length,
			n = e.charCodeAt(0),
			i = n === vd || n === Ad ? 1 : 0,
			a = i === 1 && t > 1 && e.charCodeAt(t - 1) === n ? t - 2 : t - 1,
			o = "";
		for (let s = i; s <= a; s++) {
			let r = e.charCodeAt(s);
			if (r === ou) {
				if (s === a) {
					s !== t - 1 && (o = e.substr(s + 1));
					break;
				}
				if (((r = e.charCodeAt(++s)), st(ou, r))) {
					let c = s - 1,
						l = Rt(e, c);
					(s = l - 1), (o += fi(e.substring(c + 1, l)));
				} else r === 13 && e.charCodeAt(s + 1) === 10 && s++;
			} else o += e[s];
		}
		return o;
	}
	function Td(e, t) {
		let n = t ? "'" : '"',
			i = t ? Ad : vd,
			a = "",
			o = !1;
		for (let s = 0; s < e.length; s++) {
			let r = e.charCodeAt(s);
			if (r === 0) {
				a += "\uFFFD";
				continue;
			}
			if (r <= 31 || r === 127) {
				(a += "\\" + r.toString(16)), (o = !0);
				continue;
			}
			r === i || r === ou
				? ((a += "\\" + e.charAt(s)), (o = !1))
				: (o && (ct(r) || Pt(r)) && (a += " "),
					(a += e.charAt(s)),
					(o = !1));
		}
		return n + a + n;
	}
	var Hx = "String",
		jx = { value: String };
	function su() {
		return {
			type: "String",
			loc: this.getLocation(this.tokenStart, this.tokenEnd),
			value: qa(this.consume(5)),
		};
	}
	function qx(e) {
		this.token(5, Td(e.value));
	}
	var cu = {};
	te(cu, {
		generate: () => Gx,
		name: () => Yx,
		parse: () => uu,
		structure: () => Wx,
		walkContext: () => Vx,
	});
	var zx = 33;
	function yd(e) {
		return this.Raw(e, null, !1);
	}
	var Yx = "StyleSheet",
		Vx = "stylesheet",
		Wx = { children: [["Comment", "CDO", "CDC", "Atrule", "Rule", "Raw"]] };
	function uu() {
		let e = this.tokenStart,
			t = this.createList(),
			n;
		for (; !this.eof; ) {
			switch (this.tokenType) {
				case 13:
					this.next();
					continue;
				case 25:
					if (this.charCodeAt(this.tokenStart + 2) !== zx) {
						this.next();
						continue;
					}
					n = this.Comment();
					break;
				case 14:
					n = this.CDO();
					break;
				case 15:
					n = this.CDC();
					break;
				case 3:
					n = this.parseWithFallback(this.Atrule, yd);
					break;
				default:
					n = this.parseWithFallback(this.Rule, yd);
			}
			t.push(n);
		}
		return {
			type: "StyleSheet",
			loc: this.getLocation(e, this.tokenStart),
			children: t,
		};
	}
	function Gx(e) {
		this.children(e);
	}
	var pu = {};
	te(pu, {
		generate: () => Jx,
		name: () => Kx,
		parse: () => du,
		structure: () => Qx,
	});
	var Xx = 42,
		kd = 124;
	function lu() {
		this.tokenType !== 1 &&
			this.isDelim(Xx) === !1 &&
			this.error("Identifier or asterisk is expected"),
			this.next();
	}
	var Kx = "TypeSelector",
		Qx = { name: String };
	function du() {
		let e = this.tokenStart;
		return (
			this.isDelim(kd)
				? (this.next(), lu.call(this))
				: (lu.call(this),
					this.isDelim(kd) && (this.next(), lu.call(this))),
			{
				type: "TypeSelector",
				loc: this.getLocation(e, this.tokenStart),
				name: this.substrToCursor(e),
			}
		);
	}
	function Jx(e) {
		this.tokenize(e.name);
	}
	var hu = {};
	te(hu, {
		generate: () => nE,
		name: () => eE,
		parse: () => mu,
		structure: () => tE,
	});
	var _d = 43,
		Sd = 45,
		fu = 63;
	function Di(e, t) {
		let n = 0;
		for (let i = this.tokenStart + e; i < this.tokenEnd; i++) {
			let a = this.charCodeAt(i);
			if (a === Sd && t && n !== 0)
				return Di.call(this, e + n + 1, !1), -1;
			ct(a) ||
				this.error(
					t && n !== 0
						? "Hyphen minus" +
								(n < 6 ? " or hex digit" : "") +
								" is expected"
						: n < 6
							? "Hex digit is expected"
							: "Unexpected input",
					i,
				),
				++n > 6 && this.error("Too many hex digits", i);
		}
		return this.next(), n;
	}
	function za(e) {
		let t = 0;
		for (; this.isDelim(fu); )
			++t > e && this.error("Too many question marks"), this.next();
	}
	function Zx(e) {
		this.charCodeAt(this.tokenStart) !== e &&
			this.error(
				(e === _d ? "Plus sign" : "Hyphen minus") + " is expected",
			);
	}
	function $x() {
		let e = 0;
		switch (this.tokenType) {
			case 10:
				if (((e = Di.call(this, 1, !0)), this.isDelim(fu))) {
					za.call(this, 6 - e);
					break;
				}
				if (this.tokenType === 12 || this.tokenType === 10) {
					Zx.call(this, Sd), Di.call(this, 1, !1);
					break;
				}
				break;
			case 12:
				(e = Di.call(this, 1, !0)), e > 0 && za.call(this, 6 - e);
				break;
			default:
				if ((this.eatDelim(_d), this.tokenType === 1)) {
					(e = Di.call(this, 0, !0)), e > 0 && za.call(this, 6 - e);
					break;
				}
				if (this.isDelim(fu)) {
					this.next(), za.call(this, 5);
					break;
				}
				this.error("Hex digit or question mark is expected");
		}
	}
	var eE = "UnicodeRange",
		tE = { value: String };
	function mu() {
		let e = this.tokenStart;
		return (
			this.eatIdent("u"),
			$x.call(this),
			{
				type: "UnicodeRange",
				loc: this.getLocation(e, this.tokenStart),
				value: this.substrToCursor(e),
			}
		);
	}
	function nE(e) {
		this.tokenize(e.value);
	}
	var xu = {};
	te(xu, {
		generate: () => cE,
		name: () => rE,
		parse: () => gu,
		structure: () => uE,
	});
	var iE = 32,
		bu = 92,
		aE = 34,
		oE = 39,
		sE = 40,
		Dd = 41;
	function wd(e) {
		let t = e.length,
			n = 4,
			i = e.charCodeAt(t - 1) === Dd ? t - 2 : t - 1,
			a = "";
		for (; n < i && Pt(e.charCodeAt(n)); ) n++;
		for (; n < i && Pt(e.charCodeAt(i)); ) i--;
		for (let o = n; o <= i; o++) {
			let s = e.charCodeAt(o);
			if (s === bu) {
				if (o === i) {
					o !== t - 1 && (a = e.substr(o + 1));
					break;
				}
				if (((s = e.charCodeAt(++o)), st(bu, s))) {
					let r = o - 1,
						c = Rt(e, r);
					(o = c - 1), (a += fi(e.substring(r + 1, c)));
				} else s === 13 && e.charCodeAt(o + 1) === 10 && o++;
			} else a += e[o];
		}
		return a;
	}
	function Id(e) {
		let t = "",
			n = !1;
		for (let i = 0; i < e.length; i++) {
			let a = e.charCodeAt(i);
			if (a === 0) {
				t += "\uFFFD";
				continue;
			}
			if (a <= 31 || a === 127) {
				(t += "\\" + a.toString(16)), (n = !0);
				continue;
			}
			a === iE || a === bu || a === aE || a === oE || a === sE || a === Dd
				? ((t += "\\" + e.charAt(i)), (n = !1))
				: (n && ct(a) && (t += " "), (t += e.charAt(i)), (n = !1));
		}
		return "url(" + t + ")";
	}
	var rE = "Url",
		uE = { value: String };
	function gu() {
		let e = this.tokenStart,
			t;
		switch (this.tokenType) {
			case 7:
				t = wd(this.consume(7));
				break;
			case 2:
				this.cmpStr(this.tokenStart, this.tokenEnd, "url(") ||
					this.error("Function name must be `url`"),
					this.eat(2),
					this.skipSC(),
					(t = qa(this.consume(5))),
					this.skipSC(),
					this.eof || this.eat(22);
				break;
			default:
				this.error("Url or Function is expected");
		}
		return {
			type: "Url",
			loc: this.getLocation(e, this.tokenStart),
			value: t,
		};
	}
	function cE(e) {
		this.token(7, Id(e.value));
	}
	var vu = {};
	te(vu, {
		generate: () => pE,
		name: () => lE,
		parse: () => Eu,
		structure: () => dE,
	});
	var lE = "Value",
		dE = { children: [[]] };
	function Eu() {
		let e = this.tokenStart,
			t = this.readSequence(this.scope.Value);
		return {
			type: "Value",
			loc: this.getLocation(e, this.tokenStart),
			children: t,
		};
	}
	function pE(e) {
		this.children(e);
	}
	var Tu = {};
	te(Tu, {
		generate: () => bE,
		name: () => mE,
		parse: () => Au,
		structure: () => hE,
	});
	var fE = Object.freeze({ type: "WhiteSpace", loc: null, value: " " }),
		mE = "WhiteSpace",
		hE = { value: String };
	function Au() {
		return this.eat(13), fE;
	}
	function bE(e) {
		this.token(13, e.value);
	}
	var Ld = { generic: !0, ...cd, node: wi };
	var Cu = {};
	te(Cu, { AtrulePrelude: () => Rd, Selector: () => Bd, Value: () => Hd });
	var gE = 35,
		xE = 42,
		Pd = 43,
		EE = 45,
		vE = 47,
		AE = 117;
	function Ii(e) {
		switch (this.tokenType) {
			case 4:
				return this.Hash();
			case 18:
				return this.Operator();
			case 21:
				return this.Parentheses(this.readSequence, e.recognizer);
			case 19:
				return this.Brackets(this.readSequence, e.recognizer);
			case 5:
				return this.String();
			case 12:
				return this.Dimension();
			case 11:
				return this.Percentage();
			case 10:
				return this.Number();
			case 2:
				return this.cmpStr(this.tokenStart, this.tokenEnd, "url(")
					? this.Url()
					: this.Function(this.readSequence, e.recognizer);
			case 7:
				return this.Url();
			case 1:
				return this.cmpChar(this.tokenStart, AE) &&
					this.cmpChar(this.tokenStart + 1, Pd)
					? this.UnicodeRange()
					: this.Identifier();
			case 9: {
				let t = this.charCodeAt(this.tokenStart);
				if (t === vE || t === xE || t === Pd || t === EE)
					return this.Operator();
				t === gE &&
					this.error(
						"Hex or identifier is expected",
						this.tokenStart + 1,
					);
				break;
			}
		}
	}
	var Rd = { getNode: Ii };
	var TE = 35,
		CE = 38,
		yE = 42,
		kE = 43,
		_E = 47,
		Od = 46,
		SE = 62,
		DE = 124,
		wE = 126;
	function IE(e, t) {
		t.last !== null &&
			t.last.type !== "Combinator" &&
			e !== null &&
			e.type !== "Combinator" &&
			t.push({ type: "Combinator", loc: null, name: " " });
	}
	function NE() {
		switch (this.tokenType) {
			case 19:
				return this.AttributeSelector();
			case 4:
				return this.IdSelector();
			case 16:
				return this.lookupType(1) === 16
					? this.PseudoElementSelector()
					: this.PseudoClassSelector();
			case 1:
				return this.TypeSelector();
			case 10:
			case 11:
				return this.Percentage();
			case 12:
				this.charCodeAt(this.tokenStart) === Od &&
					this.error("Identifier is expected", this.tokenStart + 1);
				break;
			case 9: {
				switch (this.charCodeAt(this.tokenStart)) {
					case kE:
					case SE:
					case wE:
					case _E:
						return this.Combinator();
					case Od:
						return this.ClassSelector();
					case yE:
					case DE:
						return this.TypeSelector();
					case TE:
						return this.IdSelector();
					case CE:
						return this.NestingSelector();
				}
				break;
			}
		}
	}
	var Bd = { onWhiteSpace: IE, getNode: NE };
	function Fd() {
		return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1));
	}
	function Md() {
		let e = this.createList();
		if (
			(this.skipSC(),
			e.push(this.Identifier()),
			this.skipSC(),
			this.tokenType === 18)
		) {
			e.push(this.Operator());
			let t = this.tokenIndex,
				n = this.parseCustomProperty
					? this.Value(null)
					: this.Raw(
							this.tokenIndex,
							this.consumeUntilExclamationMarkOrSemicolon,
							!1,
						);
			if (n.type === "Value" && n.children.isEmpty) {
				for (let i = t - this.tokenIndex; i <= 0; i++)
					if (this.lookupType(i) === 13) {
						n.children.appendData({
							type: "WhiteSpace",
							loc: null,
							value: " ",
						});
						break;
					}
			}
			e.push(n);
		}
		return e;
	}
	function Ud(e) {
		return (
			e !== null &&
			e.type === "Operator" &&
			(e.value[e.value.length - 1] === "-" ||
				e.value[e.value.length - 1] === "+")
		);
	}
	var Hd = {
		getNode: Ii,
		onWhiteSpace(e, t) {
			Ud(e) && (e.value = " " + e.value),
				Ud(t.last) && (t.last.value += " ");
		},
		expression: Fd,
		var: Md,
	};
	var jd = {
		parse: {
			prelude: null,
			block() {
				return this.Block(!0);
			},
		},
	};
	var qd = {
		parse: {
			prelude() {
				let e = this.createList();
				switch ((this.skipSC(), this.tokenType)) {
					case 5:
						e.push(this.String());
						break;
					case 7:
					case 2:
						e.push(this.Url());
						break;
					default:
						this.error("String or url() is expected");
				}
				return (
					(this.lookupNonWSType(0) === 1 ||
						this.lookupNonWSType(0) === 21) &&
						e.push(this.MediaQueryList()),
					e
				);
			},
			block: null,
		},
	};
	var zd = {
		parse: {
			prelude() {
				return this.createSingleNodeList(this.MediaQueryList());
			},
			block(e = !1) {
				return this.Block(e);
			},
		},
	};
	var Yd = {
		parse: {
			prelude() {
				return this.createSingleNodeList(this.SelectorList());
			},
			block() {
				return this.Block(!0);
			},
		},
	};
	var Vd = {
		parse: {
			prelude() {
				return this.createSingleNodeList(this.SelectorList());
			},
			block() {
				return this.Block(!0);
			},
		},
	};
	function LE() {
		return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1));
	}
	function PE() {
		return (
			this.skipSC(),
			this.tokenType === 1 && this.lookupNonWSType(1) === 16
				? this.createSingleNodeList(this.Declaration())
				: Wd.call(this)
		);
	}
	function Wd() {
		let e = this.createList(),
			t;
		this.skipSC();
		e: for (; !this.eof; ) {
			switch (this.tokenType) {
				case 25:
				case 13:
					this.next();
					continue;
				case 2:
					t = this.Function(LE, this.scope.AtrulePrelude);
					break;
				case 1:
					t = this.Identifier();
					break;
				case 21:
					t = this.Parentheses(PE, this.scope.AtrulePrelude);
					break;
				default:
					break e;
			}
			e.push(t);
		}
		return e;
	}
	var Gd = {
		parse: {
			prelude() {
				let e = Wd.call(this);
				return (
					this.getFirstListNode(e) === null &&
						this.error("Condition is expected"),
					e
				);
			},
			block(e = !1) {
				return this.Block(e);
			},
		},
	};
	var Xd = {
		"font-face": jd,
		import: qd,
		media: zd,
		nest: Yd,
		page: Vd,
		supports: Gd,
	};
	var pn = {
			parse() {
				return this.createSingleNodeList(this.SelectorList());
			},
		},
		yu = {
			parse() {
				return this.createSingleNodeList(this.Selector());
			},
		},
		Kd = {
			parse() {
				return this.createSingleNodeList(this.Identifier());
			},
		},
		Ya = {
			parse() {
				return this.createSingleNodeList(this.Nth());
			},
		},
		Qd = {
			dir: Kd,
			has: pn,
			lang: Kd,
			matches: pn,
			is: pn,
			"-moz-any": pn,
			"-webkit-any": pn,
			where: pn,
			not: pn,
			"nth-child": Ya,
			"nth-last-child": Ya,
			"nth-last-of-type": Ya,
			"nth-of-type": Ya,
			slotted: yu,
			host: yu,
			"host-context": yu,
		};
	var ku = {};
	te(ku, {
		AnPlusB: () => zs,
		Atrule: () => Vs,
		AtrulePrelude: () => Gs,
		AttributeSelector: () => Qs,
		Block: () => Zs,
		Brackets: () => er,
		CDC: () => nr,
		CDO: () => ar,
		ClassSelector: () => sr,
		Combinator: () => ur,
		Comment: () => lr,
		Declaration: () => pr,
		DeclarationList: () => hr,
		Dimension: () => gr,
		Function: () => Er,
		Hash: () => Ar,
		IdSelector: () => kr,
		Identifier: () => Cr,
		MediaFeature: () => Sr,
		MediaQuery: () => wr,
		MediaQueryList: () => Nr,
		NestingSelector: () => Pr,
		Nth: () => Or,
		Number: () => Fr,
		Operator: () => Ur,
		Parentheses: () => jr,
		Percentage: () => zr,
		PseudoClassSelector: () => Vr,
		PseudoElementSelector: () => Gr,
		Ratio: () => Kr,
		Raw: () => Jr,
		Rule: () => $r,
		Selector: () => tu,
		SelectorList: () => iu,
		String: () => su,
		StyleSheet: () => uu,
		TypeSelector: () => du,
		UnicodeRange: () => mu,
		Url: () => gu,
		Value: () => Eu,
		WhiteSpace: () => Au,
	});
	var Jd = {
		parseContext: {
			default: "StyleSheet",
			stylesheet: "StyleSheet",
			atrule: "Atrule",
			atrulePrelude(e) {
				return this.AtrulePrelude(e.atrule ? String(e.atrule) : null);
			},
			mediaQueryList: "MediaQueryList",
			mediaQuery: "MediaQuery",
			rule: "Rule",
			selectorList: "SelectorList",
			selector: "Selector",
			block() {
				return this.Block(!0);
			},
			declarationList: "DeclarationList",
			declaration: "Declaration",
			value: "Value",
		},
		scope: Cu,
		atrule: Xd,
		pseudo: Qd,
		node: ku,
	};
	var Zd = { node: wi };
	var $d = js({ ...Ld, ...Jd, ...Zd });
	var {
		tokenize: I5,
		parse: ep,
		generate: tp,
		lexer: N5,
		createLexer: L5,
		walk: np,
		find: P5,
		findLast: R5,
		findAll: O5,
		toPlainObject: B5,
		fromPlainObject: F5,
		fork: M5,
	} = $d;
	var ip = ht(Xn(), 1),
		_u = class extends ip.default {
			constructor(t) {
				super(),
					(this.ctx = t),
					(this.meta = t.meta),
					(this.parse = ep),
					(this.walk = np),
					(this.generate = tp);
			}
			rewrite(t, n) {
				return this.recast(t, n, "rewrite");
			}
			source(t, n) {
				return this.recast(t, n, "source");
			}
			recast(t, n, i) {
				if (!t) return t;
				t = new String(t).toString();
				try {
					let a = this.parse(t, { ...n, parseCustomProperty: !0 });
					return (
						this.walk(a, (o) => {
							this.emit(o.type, o, n, i);
						}),
						this.generate(a)
					);
				} catch {
					return t;
				}
			}
		},
		ap = _u;
	var OE = {
			0: "Unexpected token",
			28: "Unexpected token: '%0'",
			1: "Octal escape sequences are not allowed in strict mode",
			2: "Octal escape sequences are not allowed in template strings",
			3: "Unexpected token `#`",
			4: "Illegal Unicode escape sequence",
			5: "Invalid code point %0",
			6: "Invalid hexadecimal escape sequence",
			8: "Octal literals are not allowed in strict mode",
			7: "Decimal integer literals with a leading zero are forbidden in strict mode",
			9: "Expected number in radix %0",
			146: "Invalid left-hand side assignment to a destructible right-hand side",
			10: "Non-number found after exponent indicator",
			11: "Invalid BigIntLiteral",
			12: "No identifiers allowed directly after numeric literal",
			13: "Escapes \\8 or \\9 are not syntactically valid escapes",
			14: "Unterminated string literal",
			15: "Unterminated template literal",
			16: "Multiline comment was not closed properly",
			17: "The identifier contained dynamic unicode escape that was not closed",
			18: "Illegal character '%0'",
			19: "Missing hexadecimal digits",
			20: "Invalid implicit octal",
			21: "Invalid line break in string literal",
			22: "Only unicode escapes are legal in identifier names",
			23: "Expected '%0'",
			24: "Invalid left-hand side in assignment",
			25: "Invalid left-hand side in async arrow",
			26: 'Calls to super must be in the "constructor" method of a class expression or class declaration that has a superclass',
			27: "Member access on super must be in a method",
			29: "Await expression not allowed in formal parameter",
			30: "Yield expression not allowed in formal parameter",
			93: "Unexpected token: 'escaped keyword'",
			31: "Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses",
			120: "Async functions can only be declared at the top level or inside a block",
			32: "Unterminated regular expression",
			33: "Unexpected regular expression flag",
			34: "Duplicate regular expression flag '%0'",
			35: "%0 functions must have exactly %1 argument%2",
			36: "Setter function argument must not be a rest parameter",
			37: "%0 declaration must have a name in this context",
			38: "Function name may not contain any reserved words or be eval or arguments in strict mode",
			39: "The rest operator is missing an argument",
			40: "A getter cannot be a generator",
			41: "A setter cannot be a generator",
			42: "A computed property name must be followed by a colon or paren",
			131: "Object literal keys that are strings or numbers must be a method or have a colon",
			44: "Found `* async x(){}` but this should be `async * x(){}`",
			43: "Getters and setters can not be generators",
			45: "'%0' can not be generator method",
			46: "No line break is allowed after '=>'",
			47: "The left-hand side of the arrow can only be destructed through assignment",
			48: "The binding declaration is not destructible",
			49: "Async arrow can not be followed by new expression",
			50: "Classes may not have a static property named 'prototype'",
			51: "Class constructor may not be a %0",
			52: "Duplicate constructor method in class",
			53: "Invalid increment/decrement operand",
			54: "Invalid use of `new` keyword on an increment/decrement expression",
			55: "`=>` is an invalid assignment target",
			56: "Rest element may not have a trailing comma",
			57: "Missing initializer in %0 declaration",
			58: "'for-%0' loop head declarations can not have an initializer",
			59: "Invalid left-hand side in for-%0 loop: Must have a single binding",
			60: "Invalid shorthand property initializer",
			61: "Property name __proto__ appears more than once in object literal",
			62: "Let is disallowed as a lexically bound name",
			63: "Invalid use of '%0' inside new expression",
			64: "Illegal 'use strict' directive in function with non-simple parameter list",
			65: 'Identifier "let" disallowed as left-hand side expression in strict mode',
			66: "Illegal continue statement",
			67: "Illegal break statement",
			68: "Cannot have `let[...]` as a var name in strict mode",
			69: "Invalid destructuring assignment target",
			70: "Rest parameter may not have a default initializer",
			71: "The rest argument must the be last parameter",
			72: "Invalid rest argument",
			74: "In strict mode code, functions can only be declared at top level or inside a block",
			75: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
			76: "Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement",
			77: "Class declaration can't appear in single-statement context",
			78: "Invalid left-hand side in for-%0",
			79: "Invalid assignment in for-%0",
			80: "for await (... of ...) is only valid in async functions and async generators",
			81: "The first token after the template expression should be a continuation of the template",
			83: "`let` declaration not allowed here and `let` cannot be a regular var name in strict mode",
			82: "`let \n [` is a restricted production at the start of a statement",
			84: "Catch clause requires exactly one parameter, not more (and no trailing comma)",
			85: "Catch clause parameter does not support default values",
			86: "Missing catch or finally after try",
			87: "More than one default clause in switch statement",
			88: "Illegal newline after throw",
			89: "Strict mode code may not include a with statement",
			90: "Illegal return statement",
			91: "The left hand side of the for-header binding declaration is not destructible",
			92: "new.target only allowed within functions",
			94: "'#' not followed by identifier",
			100: "Invalid keyword",
			99: "Can not use 'let' as a class name",
			98: "'A lexical declaration can't define a 'let' binding",
			97: "Can not use `let` as variable name in strict mode",
			95: "'%0' may not be used as an identifier in this context",
			96: "Await is only valid in async functions",
			101: "The %0 keyword can only be used with the module goal",
			102: "Unicode codepoint must not be greater than 0x10FFFF",
			103: "%0 source must be string",
			104: "Only a identifier can be used to indicate alias",
			105: "Only '*' or '{...}' can be imported after default",
			106: "Trailing decorator may be followed by method",
			107: "Decorators can't be used with a constructor",
			109: "HTML comments are only allowed with web compatibility (Annex B)",
			110: "The identifier 'let' must not be in expression position in strict mode",
			111: "Cannot assign to `eval` and `arguments` in strict mode",
			112: "The left-hand side of a for-of loop may not start with 'let'",
			113: "Block body arrows can not be immediately invoked without a group",
			114: "Block body arrows can not be immediately accessed without a group",
			115: "Unexpected strict mode reserved word",
			116: "Unexpected eval or arguments in strict mode",
			117: "Decorators must not be followed by a semicolon",
			118: "Calling delete on expression not allowed in strict mode",
			119: "Pattern can not have a tail",
			121: "Can not have a `yield` expression on the left side of a ternary",
			122: "An arrow function can not have a postfix update operator",
			123: "Invalid object literal key character after generator star",
			124: "Private fields can not be deleted",
			126: "Classes may not have a field called constructor",
			125: "Classes may not have a private element named constructor",
			127: "A class field initializer may not contain arguments",
			128: "Generators can only be declared at the top level or inside a block",
			129: "Async methods are a restricted production and cannot have a newline following it",
			130: "Unexpected character after object literal property name",
			132: "Invalid key token",
			133: "Label '%0' has already been declared",
			134: "continue statement must be nested within an iteration statement",
			135: "Undefined label '%0'",
			136: "Trailing comma is disallowed inside import(...) arguments",
			137: "import() requires exactly one argument",
			138: "Cannot use new with import(...)",
			139: "... is not allowed in import()",
			140: "Expected '=>'",
			141: "Duplicate binding '%0'",
			142: "Cannot export a duplicate name '%0'",
			145: "Duplicate %0 for-binding",
			143: "Exported binding '%0' needs to refer to a top-level declared variable",
			144: "Unexpected private field",
			148: "Numeric separators are not allowed at the end of numeric literals",
			147: "Only one underscore is allowed as numeric separator",
			149: "JSX value should be either an expression or a quoted JSX text",
			150: "Expected corresponding JSX closing tag for %0",
			151: "Adjacent JSX elements must be wrapped in an enclosing tag",
			152: "JSX attributes must only be assigned a non-empty 'expression'",
			153: "'%0' has already been declared",
			154: "'%0' shadowed a catch clause binding",
			155: "Dot property must be an identifier",
			156: "Encountered invalid input after spread/rest argument",
			157: "Catch without try",
			158: "Finally without try",
			159: "Expected corresponding closing tag for JSX fragment",
			160: "Coalescing and logical operators used together in the same expression must be disambiguated with parentheses",
			161: "Invalid tagged template on optional chain",
			162: "Invalid optional chain from super property",
			163: "Invalid optional chain from new expression",
			164: 'Cannot use "import.meta" outside a module',
			165: "Leading decorators must be attached to a class declaration",
		},
		Hn = class extends SyntaxError {
			constructor(t, n, i, a, ...o) {
				let s =
					"[" +
					n +
					":" +
					i +
					"]: " +
					OE[a].replace(/%(\d+)/g, (r, c) => o[c]);
				super(`${s}`),
					(this.index = t),
					(this.line = n),
					(this.column = i),
					(this.description = s),
					(this.loc = { line: n, column: i });
			}
		};
	function x(e, t, ...n) {
		throw new Hn(e.index, e.line, e.column, t, ...n);
	}
	function to(e) {
		throw new Hn(e.index, e.line, e.column, e.type, e.params);
	}
	function jn(e, t, n, i, ...a) {
		throw new Hn(e, t, n, i, ...a);
	}
	function qn(e, t, n, i) {
		throw new Hn(e, t, n, i);
	}
	var Li = ((e, t) => {
		let n = new Uint32Array(104448),
			i = 0,
			a = 0;
		for (; i < 3540; ) {
			let o = e[i++];
			if (o < 0) a -= o;
			else {
				let s = e[i++];
				o & 2 && (s = t[s]),
					o & 1 ? n.fill(s, a, (a += e[i++])) : (n[a++] = s);
			}
		}
		return n;
	})(
		[
			-1, 2, 24, 2, 25, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 57,
			2, 58, 3, 0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 59, 3,
			0, 4, 0, 4294966523, 3, 0, 4, 2, 16, 2, 60, 2, 0, 0, 4294836735, 0,
			3221225471, 0, 4294901942, 2, 61, 0, 134152192, 3, 0, 2, 0,
			4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2, 17, 2, 0, 0,
			4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 131, 2, 6,
			2, 56, -1, 2, 37, 0, 4294443263, 2, 1, 3, 0, 3, 0, 4294901711, 2,
			39, 0, 4089839103, 0, 2961209759, 0, 1342439375, 0, 4294543342, 0,
			3547201023, 0, 1577204103, 0, 4194240, 0, 4294688750, 2, 2, 0,
			80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831, 0, 196559,
			0, 3594373100, 0, 3288319768, 0, 8469959, 2, 194, 2, 3, 0,
			3825204735, 0, 123747807, 0, 65487, 0, 4294828015, 0, 4092591615, 0,
			1080049119, 0, 458703, 2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0,
			4236247022, 2, 66, 0, 4284449919, 0, 851904, 2, 4, 2, 11, 0,
			67076095, -1, 2, 67, 0, 1073741743, 0, 4093591391, -1, 0, 50331649,
			0, 3265266687, 2, 32, 0, 4294844415, 0, 4278190047, 2, 18, 2, 129,
			-1, 3, 0, 2, 2, 21, 2, 0, 2, 9, 2, 0, 2, 14, 2, 15, 3, 0, 10, 2, 69,
			2, 0, 2, 70, 2, 71, 2, 72, 2, 0, 2, 73, 2, 0, 2, 10, 0, 261632, 2,
			23, 3, 0, 2, 2, 12, 2, 4, 3, 0, 18, 2, 74, 2, 5, 3, 0, 2, 2, 75, 0,
			2088959, 2, 27, 2, 8, 0, 909311, 3, 0, 2, 0, 814743551, 2, 41, 0,
			67057664, 3, 0, 2, 2, 40, 2, 0, 2, 28, 2, 0, 2, 29, 2, 7, 0,
			268374015, 2, 26, 2, 49, 2, 0, 2, 76, 0, 134153215, -1, 2, 6, 2, 0,
			2, 7, 0, 2684354559, 0, 67044351, 0, 3221160064, 0, 1, -1, 3, 0, 2,
			2, 42, 0, 1046528, 3, 0, 3, 2, 8, 2, 0, 2, 51, 0, 4294960127, 2, 9,
			2, 38, 2, 10, 0, 4294377472, 2, 11, 3, 0, 7, 0, 4227858431, 3, 0, 8,
			2, 12, 2, 0, 2, 78, 2, 9, 2, 0, 2, 79, 2, 80, 2, 81, -1, 2, 124, 0,
			1048577, 2, 82, 2, 13, -1, 2, 13, 0, 131042, 2, 83, 2, 84, 2, 85, 2,
			0, 2, 33, -83, 2, 0, 2, 53, 2, 7, 3, 0, 4, 0, 1046559, 2, 0, 2, 14,
			2, 0, 0, 2147516671, 2, 20, 3, 86, 2, 2, 0, -16, 2, 87, 0,
			524222462, 2, 4, 2, 0, 0, 4269801471, 2, 4, 2, 0, 2, 15, 2, 77, 2,
			16, 3, 0, 2, 2, 47, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 655,
			2, 18, 3, 0, 36, 2, 68, -1, 2, 17, 2, 9, 3, 0, 8, 2, 89, 2, 121, 2,
			0, 0, 3220242431, 3, 0, 3, 2, 19, 2, 90, 2, 91, 3, 0, 2, 2, 92, 2,
			0, 2, 93, 2, 94, 2, 0, 0, 4351, 2, 0, 2, 8, 3, 0, 2, 0, 67043391, 0,
			3909091327, 2, 0, 2, 22, 2, 8, 2, 18, 3, 0, 2, 0, 67076097, 2, 7, 2,
			0, 2, 20, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103, 0,
			8191999, 2, 97, 2, 98, 2, 15, 2, 21, 3, 0, 3, 0, 67057663, 3, 0,
			349, 2, 99, 2, 100, 2, 6, -264, 3, 0, 11, 2, 22, 3, 0, 2, 2, 31, -1,
			0, 3774349439, 2, 101, 2, 102, 3, 0, 2, 2, 19, 2, 103, 3, 0, 10, 2,
			9, 2, 17, 2, 0, 2, 45, 2, 0, 2, 30, 2, 104, 2, 23, 0, 1638399, 2,
			172, 2, 105, 3, 0, 3, 2, 18, 2, 24, 2, 25, 2, 5, 2, 26, 2, 0, 2, 7,
			2, 106, -1, 2, 107, 2, 108, 2, 109, -1, 3, 0, 3, 2, 11, -2, 2, 0, 2,
			27, -3, 2, 150, -4, 2, 18, 2, 0, 2, 35, 0, 1, 2, 0, 2, 62, 2, 28, 2,
			11, 2, 9, 2, 0, 2, 110, -1, 3, 0, 4, 2, 9, 2, 21, 2, 111, 2, 6, 2,
			0, 2, 112, 2, 0, 2, 48, -4, 3, 0, 9, 2, 20, 2, 29, 2, 30, -4, 2,
			113, 2, 114, 2, 29, 2, 20, 2, 7, -2, 2, 115, 2, 29, 2, 31, -2, 2, 0,
			2, 116, -2, 0, 4277137519, 0, 2269118463, -1, 3, 18, 2, -1, 2, 32,
			2, 36, 2, 0, 3, 29, 2, 2, 34, 2, 19, -3, 3, 0, 2, 2, 33, -1, 2, 0,
			2, 34, 2, 0, 2, 34, 2, 0, 2, 46, -10, 2, 0, 0, 203775, -2, 2, 18, 2,
			43, 2, 35, -2, 2, 17, 2, 117, 2, 20, 3, 0, 2, 2, 36, 0, 2147549120,
			2, 0, 2, 11, 2, 17, 2, 135, 2, 0, 2, 37, 2, 52, 0, 5242879, 3, 0, 2,
			0, 402644511, -1, 2, 120, 0, 1090519039, -2, 2, 122, 2, 38, 2, 0, 0,
			67045375, 2, 39, 0, 4226678271, 0, 3766565279, 0, 2039759, -4, 3, 0,
			2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0,
			4282384383, 0, 1056964609, -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2,
			40, 2, 41, -1, 2, 10, 2, 42, -6, 2, 0, 2, 11, -3, 3, 0, 2, 0,
			2147484671, 2, 125, 0, 4190109695, 2, 50, -2, 2, 126, 0, 4244635647,
			0, 27, 2, 0, 2, 7, 2, 43, 2, 0, 2, 63, -1, 2, 0, 2, 40, -8, 2, 54,
			2, 44, 0, 67043329, 2, 127, 2, 45, 0, 8388351, -2, 2, 128, 0,
			3028287487, 2, 46, 2, 130, 0, 33259519, 2, 41, -9, 2, 20, -5, 2, 64,
			-2, 3, 0, 28, 2, 31, -3, 3, 0, 3, 2, 47, 3, 0, 6, 2, 48, -85, 3, 0,
			33, 2, 47, -126, 3, 0, 18, 2, 36, -269, 3, 0, 17, 2, 40, 2, 7, 2,
			41, -2, 2, 17, 2, 49, 2, 0, 2, 20, 2, 50, 2, 132, 2, 23, -21, 3, 0,
			2, -4, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2, 0, 196635,
			3, 0, 191, 2, 51, 3, 0, 38, 2, 29, -1, 2, 33, -279, 3, 0, 8, 2, 7,
			-1, 2, 133, 2, 52, 3, 0, 11, 2, 6, -72, 3, 0, 3, 2, 134, 0,
			1677656575, -166, 0, 4161266656, 0, 4071, 0, 15360, -4, 0, 28, -13,
			3, 0, 2, 2, 37, 2, 0, 2, 136, 2, 137, 2, 55, 2, 0, 2, 138, 2, 139,
			2, 140, 3, 0, 10, 2, 141, 2, 142, 2, 15, 3, 37, 2, 3, 53, 2, 3, 54,
			2, 0, 4294954999, 2, 0, -16, 2, 0, 2, 88, 2, 0, 0, 2105343, 0,
			4160749584, 0, 65534, -42, 0, 4194303871, 0, 2011, -6, 2, 0, 0,
			1073684479, 0, 17407, -11, 2, 0, 2, 31, -40, 3, 0, 6, 0, 8323103,
			-1, 3, 0, 2, 2, 42, -37, 2, 55, 2, 144, 2, 145, 2, 146, 2, 147, 2,
			148, -105, 2, 24, -32, 3, 0, 1334, 2, 9, -1, 3, 0, 129, 2, 27, 3, 0,
			6, 2, 9, 3, 0, 180, 2, 149, 3, 0, 233, 0, 1, -96, 3, 0, 16, 2, 9,
			-47, 3, 0, 154, 2, 56, -22381, 3, 0, 7, 2, 23, -6130, 3, 5, 2, -1,
			0, 69207040, 3, 44, 2, 3, 0, 14, 2, 57, 2, 58, -3, 0, 3168731136, 0,
			4294956864, 2, 1, 2, 0, 2, 59, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2,
			16, 2, 60, 2, 0, 2, 33, -1, 2, 17, 2, 61, -1, 2, 0, 2, 56, 0,
			4294885376, 3, 0, 2, 0, 3145727, 0, 2617294944, 0, 4294770688, 2,
			23, 2, 62, 3, 0, 2, 0, 131135, 2, 95, 0, 70256639, 0, 71303167, 0,
			272, 2, 40, 2, 56, -1, 2, 37, 2, 30, -1, 2, 96, 2, 63, 0,
			4278255616, 0, 4294836227, 0, 4294549473, 0, 600178175, 0,
			2952806400, 0, 268632067, 0, 4294543328, 0, 57540095, 0, 1577058304,
			0, 1835008, 0, 4294688736, 2, 65, 2, 64, 0, 33554435, 2, 123, 2, 65,
			2, 151, 0, 131075, 0, 3594373096, 0, 67094296, 2, 64, -1, 0,
			4294828e3, 0, 603979263, 2, 160, 0, 3, 0, 4294828001, 0, 602930687,
			2, 183, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0,
			4227858435, 0, 4236247008, 2, 66, 2, 36, -1, 2, 4, 0, 917503, 2, 36,
			-1, 2, 67, 0, 537788335, 0, 4026531935, -1, 0, 1, -1, 2, 32, 2, 68,
			0, 7936, -3, 2, 0, 0, 2147485695, 0, 1010761728, 0, 4292984930, 0,
			16387, 2, 0, 2, 14, 2, 15, 3, 0, 10, 2, 69, 2, 0, 2, 70, 2, 71, 2,
			72, 2, 0, 2, 73, 2, 0, 2, 11, -1, 2, 23, 3, 0, 2, 2, 12, 2, 4, 3, 0,
			18, 2, 74, 2, 5, 3, 0, 2, 2, 75, 0, 253951, 3, 19, 2, 0, 122879, 2,
			0, 2, 8, 0, 276824064, -2, 3, 0, 2, 2, 40, 2, 0, 0, 4294903295, 2,
			0, 2, 29, 2, 7, -1, 2, 17, 2, 49, 2, 0, 2, 76, 2, 41, -1, 2, 20, 2,
			0, 2, 27, -2, 0, 128, -2, 2, 77, 2, 8, 0, 4064, -1, 2, 119, 0,
			4227907585, 2, 0, 2, 118, 2, 0, 2, 48, 2, 173, 2, 9, 2, 38, 2, 10,
			-1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 12, 2, 0, 2, 78, 2, 9, 2,
			0, 2, 79, 2, 80, 2, 81, -3, 2, 82, 2, 13, -3, 2, 83, 2, 84, 2, 85,
			2, 0, 2, 33, -83, 2, 0, 2, 53, 2, 7, 3, 0, 4, 0, 817183, 2, 0, 2,
			14, 2, 0, 0, 33023, 2, 20, 3, 86, 2, -17, 2, 87, 0, 524157950, 2, 4,
			2, 0, 2, 88, 2, 4, 2, 0, 2, 15, 2, 77, 2, 16, 3, 0, 2, 2, 47, 2, 0,
			-1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 655, 2, 18, 3, 0, 36, 2, 68,
			-1, 2, 17, 2, 9, 3, 0, 8, 2, 89, 0, 3072, 2, 0, 0, 2147516415, 2, 9,
			3, 0, 2, 2, 23, 2, 90, 2, 91, 3, 0, 2, 2, 92, 2, 0, 2, 93, 2, 94, 0,
			4294965179, 0, 7, 2, 0, 2, 8, 2, 91, 2, 8, -1, 0, 1761345536, 2, 95,
			0, 4294901823, 2, 36, 2, 18, 2, 96, 2, 34, 2, 166, 0, 2080440287, 2,
			0, 2, 33, 2, 143, 0, 3296722943, 2, 0, 0, 1046675455, 0, 939524101,
			0, 1837055, 2, 97, 2, 98, 2, 15, 2, 21, 3, 0, 3, 0, 7, 3, 0, 349, 2,
			99, 2, 100, 2, 6, -264, 3, 0, 11, 2, 22, 3, 0, 2, 2, 31, -1, 0,
			2700607615, 2, 101, 2, 102, 3, 0, 2, 2, 19, 2, 103, 3, 0, 10, 2, 9,
			2, 17, 2, 0, 2, 45, 2, 0, 2, 30, 2, 104, -3, 2, 105, 3, 0, 3, 2, 18,
			-1, 3, 5, 2, 2, 26, 2, 0, 2, 7, 2, 106, -1, 2, 107, 2, 108, 2, 109,
			-1, 3, 0, 3, 2, 11, -2, 2, 0, 2, 27, -8, 2, 18, 2, 0, 2, 35, -1, 2,
			0, 2, 62, 2, 28, 2, 29, 2, 9, 2, 0, 2, 110, -1, 3, 0, 4, 2, 9, 2,
			17, 2, 111, 2, 6, 2, 0, 2, 112, 2, 0, 2, 48, -4, 3, 0, 9, 2, 20, 2,
			29, 2, 30, -4, 2, 113, 2, 114, 2, 29, 2, 20, 2, 7, -2, 2, 115, 2,
			29, 2, 31, -2, 2, 0, 2, 116, -2, 0, 4277075969, 2, 29, -1, 3, 18, 2,
			-1, 2, 32, 2, 117, 2, 0, 3, 29, 2, 2, 34, 2, 19, -3, 3, 0, 2, 2, 33,
			-1, 2, 0, 2, 34, 2, 0, 2, 34, 2, 0, 2, 48, -10, 2, 0, 0, 197631, -2,
			2, 18, 2, 43, 2, 118, -2, 2, 17, 2, 117, 2, 20, 2, 119, 2, 51, -2,
			2, 119, 2, 23, 2, 17, 2, 33, 2, 119, 2, 36, 0, 4294901904, 0,
			4718591, 2, 119, 2, 34, 0, 335544350, -1, 2, 120, 2, 121, -2, 2,
			122, 2, 38, 2, 7, -1, 2, 123, 2, 65, 0, 3758161920, 0, 3, -4, 2, 0,
			2, 27, 0, 2147485568, 0, 3, 2, 0, 2, 23, 0, 176, -5, 2, 0, 2, 47, 2,
			186, -1, 2, 0, 2, 23, 2, 197, -1, 2, 0, 0, 16779263, -2, 2, 11, -7,
			2, 0, 2, 121, -3, 3, 0, 2, 2, 124, 2, 125, 0, 2147549183, 0, 2, -2,
			2, 126, 2, 35, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2,
			0, 0, 536871935, -1, 2, 0, 2, 40, -8, 2, 54, 2, 47, 0, 1, 2, 127, 2,
			23, -3, 2, 128, 2, 35, 2, 129, 2, 130, 0, 16778239, -10, 2, 34, -5,
			2, 64, -2, 3, 0, 28, 2, 31, -3, 3, 0, 3, 2, 47, 3, 0, 6, 2, 48, -85,
			3, 0, 33, 2, 47, -126, 3, 0, 18, 2, 36, -269, 3, 0, 17, 2, 40, 2, 7,
			-3, 2, 17, 2, 131, 2, 0, 2, 23, 2, 48, 2, 132, 2, 23, -21, 3, 0, 2,
			-4, 3, 0, 2, 0, 67583, -1, 2, 103, -2, 0, 11, 3, 0, 191, 2, 51, 3,
			0, 38, 2, 29, -1, 2, 33, -279, 3, 0, 8, 2, 7, -1, 2, 133, 2, 52, 3,
			0, 11, 2, 6, -72, 3, 0, 3, 2, 134, 2, 135, -187, 3, 0, 2, 2, 37, 2,
			0, 2, 136, 2, 137, 2, 55, 2, 0, 2, 138, 2, 139, 2, 140, 3, 0, 10, 2,
			141, 2, 142, 2, 15, 3, 37, 2, 3, 53, 2, 3, 54, 2, 2, 143, -73, 2, 0,
			0, 1065361407, 0, 16384, -11, 2, 0, 2, 121, -40, 3, 0, 6, 2, 117,
			-1, 3, 0, 2, 0, 2063, -37, 2, 55, 2, 144, 2, 145, 2, 146, 2, 147, 2,
			148, -138, 3, 0, 1334, 2, 9, -1, 3, 0, 129, 2, 27, 3, 0, 6, 2, 9, 3,
			0, 180, 2, 149, 3, 0, 233, 0, 1, -96, 3, 0, 16, 2, 9, -47, 3, 0,
			154, 2, 56, -28517, 2, 0, 0, 1, -1, 2, 124, 2, 0, 0, 8193, -21, 2,
			193, 0, 10255, 0, 4, -11, 2, 64, 2, 171, -1, 0, 71680, -1, 2, 161,
			0, 4292900864, 0, 805306431, -5, 2, 150, -1, 2, 157, -1, 0, 6144,
			-2, 2, 127, -1, 2, 154, -1, 0, 2147532800, 2, 151, 2, 165, 2, 0, 2,
			164, 0, 524032, 0, 4, -4, 2, 190, 0, 205128192, 0, 1333757536, 0,
			2147483696, 0, 423953, 0, 747766272, 0, 2717763192, 0, 4286578751,
			0, 278545, 2, 152, 0, 4294886464, 0, 33292336, 0, 417809, 2, 152, 0,
			1327482464, 0, 4278190128, 0, 700594195, 0, 1006647527, 0,
			4286497336, 0, 4160749631, 2, 153, 0, 469762560, 0, 4171219488, 0,
			8323120, 2, 153, 0, 202375680, 0, 3214918176, 0, 4294508592, 2, 153,
			-1, 0, 983584, 0, 48, 0, 58720273, 0, 3489923072, 0, 10517376, 0,
			4293066815, 0, 1, 0, 2013265920, 2, 177, 2, 0, 0, 2089, 0,
			3221225552, 0, 201375904, 2, 0, -2, 0, 256, 0, 122880, 0, 16777216,
			2, 150, 0, 4160757760, 2, 0, -6, 2, 167, -11, 0, 3263218176, -1, 0,
			49664, 0, 2160197632, 0, 8388802, -1, 0, 12713984, -1, 2, 154, 2,
			159, 2, 178, -2, 2, 162, -20, 0, 3758096385, -2, 2, 155, 0,
			4292878336, 2, 90, 2, 169, 0, 4294057984, -2, 2, 163, 2, 156, 2,
			175, -2, 2, 155, -1, 2, 182, -1, 2, 170, 2, 124, 0, 4026593280, 0,
			14, 0, 4292919296, -1, 2, 158, 0, 939588608, -1, 0, 805306368, -1,
			2, 124, 0, 1610612736, 2, 156, 2, 157, 2, 4, 2, 0, -2, 2, 158, 2,
			159, -3, 0, 267386880, -1, 2, 160, 0, 7168, -1, 0, 65024, 2, 154, 2,
			161, 2, 179, -7, 2, 168, -8, 2, 162, -1, 0, 1426112704, 2, 163, -1,
			2, 164, 0, 271581216, 0, 2149777408, 2, 23, 2, 161, 2, 124, 0,
			851967, 2, 180, -1, 2, 23, 2, 181, -4, 2, 158, -20, 2, 195, 2, 165,
			-56, 0, 3145728, 2, 185, -4, 2, 166, 2, 124, -4, 0, 32505856, -1, 2,
			167, -1, 0, 2147385088, 2, 90, 1, 2155905152, 2, -3, 2, 103, 2, 0,
			2, 168, -2, 2, 169, -6, 2, 170, 0, 4026597375, 0, 1, -1, 0, 1, -1,
			2, 171, -3, 2, 117, 2, 64, -2, 2, 166, -2, 2, 176, 2, 124, -878, 2,
			159, -36, 2, 172, -1, 2, 201, -10, 2, 188, -5, 2, 174, -6, 0,
			4294965251, 2, 27, -1, 2, 173, -1, 2, 174, -2, 0, 4227874752, -3, 0,
			2146435072, 2, 159, -2, 0, 1006649344, 2, 124, -1, 2, 90, 0,
			201375744, -3, 0, 134217720, 2, 90, 0, 4286677377, 0, 32896, -1, 2,
			158, -3, 2, 175, -349, 2, 176, 0, 1920, 2, 177, 3, 0, 264, -11, 2,
			157, -2, 2, 178, 2, 0, 0, 520617856, 0, 2692743168, 0, 36, -3, 0,
			524284, -11, 2, 23, -1, 2, 187, -1, 2, 184, 0, 3221291007, 2, 178,
			-1, 2, 202, 0, 2158720, -3, 2, 159, 0, 1, -4, 2, 124, 0, 3808625411,
			0, 3489628288, 2, 200, 0, 1207959680, 0, 3221274624, 2, 0, -3, 2,
			179, 0, 120, 0, 7340032, -2, 2, 180, 2, 4, 2, 23, 2, 163, 3, 0, 4,
			2, 159, -1, 2, 181, 2, 177, -1, 0, 8176, 2, 182, 2, 179, 2, 183, -1,
			0, 4290773232, 2, 0, -4, 2, 163, 2, 189, 0, 15728640, 2, 177, -1, 2,
			161, -1, 0, 4294934512, 3, 0, 4, -9, 2, 90, 2, 170, 2, 184, 3, 0, 4,
			0, 704, 0, 1849688064, 2, 185, -1, 2, 124, 0, 4294901887, 2, 0, 0,
			130547712, 0, 1879048192, 2, 199, 3, 0, 2, -1, 2, 186, 2, 187, -1,
			0, 17829776, 0, 2025848832, 0, 4261477888, -2, 2, 0, -1, 0,
			4286580608, -1, 0, 29360128, 2, 192, 0, 16252928, 0, 3791388672, 2,
			38, 3, 0, 2, -2, 2, 196, 2, 0, -1, 2, 103, -1, 0, 66584576, -1, 2,
			191, 3, 0, 9, 2, 124, -1, 0, 4294755328, 3, 0, 2, -1, 2, 161, 2,
			178, 3, 0, 2, 2, 23, 2, 188, 2, 90, -2, 0, 245760, 0, 2147418112,
			-1, 2, 150, 2, 203, 0, 4227923456, -1, 2, 164, 2, 161, 2, 90, -3, 0,
			4292870145, 0, 262144, 2, 124, 3, 0, 2, 0, 1073758848, 2, 189, -1,
			0, 4227921920, 2, 190, 0, 68289024, 0, 528402016, 0, 4292927536, 3,
			0, 4, -2, 0, 268435456, 2, 91, -2, 2, 191, 3, 0, 5, -1, 2, 192, 2,
			163, 2, 0, -2, 0, 4227923936, 2, 62, -1, 2, 155, 2, 95, 2, 0, 2,
			154, 2, 158, 3, 0, 6, -1, 2, 177, 3, 0, 3, -2, 0, 2146959360, 0,
			9440640, 0, 104857600, 0, 4227923840, 3, 0, 2, 0, 768, 2, 193, 2,
			77, -2, 2, 161, -2, 2, 119, -1, 2, 155, 3, 0, 8, 0, 512, 0, 8388608,
			2, 194, 2, 172, 2, 187, 0, 4286578944, 3, 0, 2, 0, 1152, 0,
			1266679808, 2, 191, 0, 576, 0, 4261707776, 2, 95, 3, 0, 9, 2, 155,
			3, 0, 5, 2, 16, -1, 0, 2147221504, -28, 2, 178, 3, 0, 3, -3, 0,
			4292902912, -6, 2, 96, 3, 0, 85, -33, 0, 4294934528, 3, 0, 126, -18,
			2, 195, 3, 0, 269, -17, 2, 155, 2, 124, 2, 198, 3, 0, 2, 2, 23, 0,
			4290822144, -2, 0, 67174336, 0, 520093700, 2, 17, 3, 0, 21, -2, 2,
			179, 3, 0, 3, -2, 0, 30720, -1, 0, 32512, 3, 0, 2, 0, 4294770656,
			-191, 2, 174, -38, 2, 170, 2, 0, 2, 196, 3, 0, 279, -8, 2, 124, 2,
			0, 0, 4294508543, 0, 65295, -11, 2, 177, 3, 0, 72, -3, 0,
			3758159872, 0, 201391616, 3, 0, 155, -7, 2, 170, -1, 0, 384, -1, 0,
			133693440, -3, 2, 196, -2, 2, 26, 3, 0, 4, 2, 169, -2, 2, 90, 2,
			155, 3, 0, 4, -2, 2, 164, -1, 2, 150, 0, 335552923, 2, 197, -1, 0,
			538974272, 0, 2214592512, 0, 132e3, -10, 0, 192, -8, 0, 12288, -21,
			0, 134213632, 0, 4294901761, 3, 0, 42, 0, 100663424, 0, 4294965284,
			3, 0, 6, -1, 0, 3221282816, 2, 198, 3, 0, 11, -1, 2, 199, 3, 0, 40,
			-6, 0, 4286578784, 2, 0, -2, 0, 1006694400, 3, 0, 24, 2, 35, -1, 2,
			94, 3, 0, 2, 0, 1, 2, 163, 3, 0, 6, 2, 197, 0, 4110942569, 0,
			1432950139, 0, 2701658217, 0, 4026532864, 0, 4026532881, 2, 0, 2,
			45, 3, 0, 8, -1, 2, 158, -2, 2, 169, 0, 98304, 0, 65537, 2, 170, -5,
			0, 4294950912, 2, 0, 2, 118, 0, 65528, 2, 177, 0, 4294770176, 2, 26,
			3, 0, 4, -30, 2, 174, 0, 3758153728, -3, 2, 169, -2, 2, 155, 2, 188,
			2, 158, -1, 2, 191, -1, 2, 161, 0, 4294754304, 3, 0, 2, -3, 0,
			33554432, -2, 2, 200, -3, 2, 169, 0, 4175478784, 2, 201, 0,
			4286643712, 0, 4286644216, 2, 0, -4, 2, 202, -1, 2, 165, 0,
			4227923967, 3, 0, 32, -1334, 2, 163, 2, 0, -129, 2, 94, -6, 2, 163,
			-180, 2, 203, -233, 2, 4, 3, 0, 96, -16, 2, 163, 3, 0, 47, -154, 2,
			165, 3, 0, 22381, -7, 2, 17, 3, 0, 6128,
		],
		[
			4294967295, 4294967291, 4092460543, 4294828031, 4294967294,
			134217726, 268435455, 2147483647, 1048575, 1073741823, 3892314111,
			134217727, 1061158911, 536805376, 4294910143, 4160749567,
			4294901759, 4294901760, 536870911, 262143, 8388607, 4294902783,
			4294918143, 65535, 67043328, 2281701374, 4294967232, 2097151,
			4294903807, 4194303, 255, 67108863, 4294967039, 511, 524287, 131071,
			127, 4292870143, 4294902271, 4294549487, 33554431, 1023, 67047423,
			4294901888, 4286578687, 4294770687, 67043583, 32767, 15, 2047999,
			67043343, 16777215, 4294902e3, 4294934527, 4294966783, 4294967279,
			2047, 262083, 20511, 4290772991, 41943039, 493567, 4294959104,
			603979775, 65536, 602799615, 805044223, 4294965206, 8191,
			1031749119, 4294917631, 2134769663, 4286578493, 4282253311,
			4294942719, 33540095, 4294905855, 4294967264, 2868854591,
			1608515583, 265232348, 534519807, 2147614720, 1060109444,
			4093640016, 17376, 2139062143, 224, 4169138175, 4294909951,
			4286578688, 4294967292, 4294965759, 2044, 4292870144, 4294966272,
			4294967280, 8289918, 4294934399, 4294901775, 4294965375, 1602223615,
			4294967259, 4294443008, 268369920, 4292804608, 486341884,
			4294963199, 3087007615, 1073692671, 4128527, 4279238655, 4294902015,
			4294966591, 2445279231, 3670015, 3238002687, 31, 63, 4294967288,
			4294705151, 4095, 3221208447, 4294549472, 2147483648, 4285526655,
			4294966527, 4294705152, 4294966143, 64, 4294966719, 16383,
			3774873592, 458752, 536807423, 67043839, 3758096383, 3959414372,
			3755993023, 2080374783, 4294835295, 4294967103, 4160749565, 4087,
			184024726, 2862017156, 1593309078, 268434431, 268434414, 4294901763,
			536870912, 2952790016, 202506752, 139264, 402653184, 4261412864,
			4227922944, 49152, 61440, 3758096384, 117440512, 65280, 3233808384,
			3221225472, 2097152, 4294965248, 32768, 57152, 67108864, 4293918720,
			4290772992, 25165824, 57344, 4227915776, 4278190080, 4227907584,
			65520, 4026531840, 4227858432, 4160749568, 3758129152, 4294836224,
			63488, 1073741824, 4294967040, 4194304, 251658240, 196608,
			4294963200, 64512, 417808, 4227923712, 12582912, 50331648, 65472,
			4294967168, 4294966784, 16, 4294917120, 2080374784, 4096, 65408,
			524288, 65532,
		],
	);
	function P(e) {
		return e.column++, (e.currentChar = e.source.charCodeAt(++e.index));
	}
	function BE(e, t) {
		if ((t & 64512) !== 55296) return 0;
		let n = e.source.charCodeAt(e.index + 1);
		return (n & 64512) !== 56320
			? 0
			: ((t = e.currentChar = 65536 + ((t & 1023) << 10) + (n & 1023)),
				(Li[(t >>> 5) + 0] >>> t) & 31 & 1 || x(e, 18, wt(t)),
				e.index++,
				e.column++,
				1);
	}
	function Lu(e, t) {
		(e.currentChar = e.source.charCodeAt(++e.index)),
			(e.flags |= 1),
			t & 4 || ((e.column = 0), e.line++);
	}
	function hn(e) {
		(e.flags |= 1),
			(e.currentChar = e.source.charCodeAt(++e.index)),
			(e.column = 0),
			e.line++;
	}
	function FE(e) {
		return (
			e === 160 ||
			e === 65279 ||
			e === 133 ||
			e === 5760 ||
			(e >= 8192 && e <= 8203) ||
			e === 8239 ||
			e === 8287 ||
			e === 12288 ||
			e === 8201 ||
			e === 65519
		);
	}
	function wt(e) {
		return e <= 65535
			? String.fromCharCode(e)
			: String.fromCharCode(e >>> 10) + String.fromCharCode(e & 1023);
	}
	function pt(e) {
		return e < 65 ? e - 48 : (e - 65 + 10) & 15;
	}
	function ME(e) {
		switch (e) {
			case 134283266:
				return "NumericLiteral";
			case 134283267:
				return "StringLiteral";
			case 86021:
			case 86022:
				return "BooleanLiteral";
			case 86023:
				return "NullLiteral";
			case 65540:
				return "RegularExpression";
			case 67174408:
			case 67174409:
			case 132:
				return "TemplateLiteral";
			default:
				return (e & 143360) === 143360
					? "Identifier"
					: (e & 4096) === 4096
						? "Keyword"
						: "Punctuator";
		}
	}
	var re = [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1032, 0, 0, 2056, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 3, 0, 0, 8192, 0, 0,
			0, 256, 0, 33024, 0, 0, 242, 242, 114, 114, 114, 114, 114, 114, 594,
			594, 0, 0, 16384, 0, 0, 0, 0, 67, 67, 67, 67, 67, 67, 3, 3, 3, 3, 3,
			3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0, 4099, 0,
			71, 71, 71, 71, 71, 71, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
			7, 7, 7, 7, 7, 16384, 0, 0, 0, 0,
		],
		UE = [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
			0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
		],
		mp = [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
			0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
		];
	function Su(e) {
		return e <= 127 ? UE[e] : (Li[(e >>> 5) + 34816] >>> e) & 31 & 1;
	}
	function Qa(e) {
		return e <= 127
			? mp[e]
			: (Li[(e >>> 5) + 0] >>> e) & 31 & 1 || e === 8204 || e === 8205;
	}
	var hp = [
		"SingleLine",
		"MultiLine",
		"HTMLOpen",
		"HTMLClose",
		"HashbangComment",
	];
	function HE(e) {
		let t = e.source;
		e.currentChar === 35 &&
			t.charCodeAt(e.index + 1) === 33 &&
			(P(e), P(e), Pu(e, t, 0, 4, e.tokenPos, e.linePos, e.colPos));
	}
	function op(e, t, n, i, a, o, s, r) {
		return i & 2048 && x(e, 0), Pu(e, t, n, a, o, s, r);
	}
	function Pu(e, t, n, i, a, o, s) {
		let { index: r } = e;
		for (
			e.tokenPos = e.index, e.linePos = e.line, e.colPos = e.column;
			e.index < e.end;

		) {
			if (re[e.currentChar] & 8) {
				let c = e.currentChar === 13;
				hn(e),
					c &&
						e.index < e.end &&
						e.currentChar === 10 &&
						(e.currentChar = t.charCodeAt(++e.index));
				break;
			} else if ((e.currentChar ^ 8232) <= 1) {
				hn(e);
				break;
			}
			P(e),
				(e.tokenPos = e.index),
				(e.linePos = e.line),
				(e.colPos = e.column);
		}
		if (e.onComment) {
			let c = {
				start: { line: o, column: s },
				end: { line: e.linePos, column: e.colPos },
			};
			e.onComment(hp[i & 255], t.slice(r, e.tokenPos), a, e.tokenPos, c);
		}
		return n | 1;
	}
	function jE(e, t, n) {
		let { index: i } = e;
		for (; e.index < e.end; )
			if (e.currentChar < 43) {
				let a = !1;
				for (; e.currentChar === 42; )
					if ((a || ((n &= -5), (a = !0)), P(e) === 47)) {
						if ((P(e), e.onComment)) {
							let o = {
								start: { line: e.linePos, column: e.colPos },
								end: { line: e.line, column: e.column },
							};
							e.onComment(
								hp[1],
								t.slice(i, e.index - 2),
								i - 2,
								e.index,
								o,
							);
						}
						return (
							(e.tokenPos = e.index),
							(e.linePos = e.line),
							(e.colPos = e.column),
							n
						);
					}
				if (a) continue;
				re[e.currentChar] & 8
					? e.currentChar === 13
						? ((n |= 5), hn(e))
						: (Lu(e, n), (n = (n & -5) | 1))
					: P(e);
			} else
				(e.currentChar ^ 8232) <= 1
					? ((n = (n & -5) | 1), hn(e))
					: ((n &= -5), P(e));
		x(e, 16);
	}
	function qE(e, t) {
		let n = e.index,
			i = 0;
		e: for (;;) {
			let d = e.currentChar;
			if ((P(e), i & 1)) i &= -2;
			else
				switch (d) {
					case 47:
						if (i) break;
						break e;
					case 92:
						i |= 1;
						break;
					case 91:
						i |= 2;
						break;
					case 93:
						i &= 1;
						break;
					case 13:
					case 10:
					case 8232:
					case 8233:
						x(e, 32);
				}
			if (e.index >= e.source.length) return x(e, 32);
		}
		let a = e.index - 1,
			o = 0,
			s = e.currentChar,
			{ index: r } = e;
		for (; Qa(s); ) {
			switch (s) {
				case 103:
					o & 2 && x(e, 34, "g"), (o |= 2);
					break;
				case 105:
					o & 1 && x(e, 34, "i"), (o |= 1);
					break;
				case 109:
					o & 4 && x(e, 34, "m"), (o |= 4);
					break;
				case 117:
					o & 16 && x(e, 34, "u"), (o |= 16);
					break;
				case 121:
					o & 8 && x(e, 34, "y"), (o |= 8);
					break;
				case 115:
					o & 32 && x(e, 34, "s"), (o |= 32);
					break;
				case 100:
					o & 64 && x(e, 34, "d"), (o |= 64);
					break;
				default:
					x(e, 33);
			}
			s = P(e);
		}
		let c = e.source.slice(r, e.index),
			l = e.source.slice(n, a);
		return (
			(e.tokenRegExp = { pattern: l, flags: c }),
			t & 512 && (e.tokenRaw = e.source.slice(e.tokenPos, e.index)),
			(e.tokenValue = zE(e, l, c)),
			65540
		);
	}
	function zE(e, t, n) {
		try {
			return new RegExp(t, n);
		} catch {
			try {
				return new RegExp(t, n.replace("d", "")), null;
			} catch {
				x(e, 32);
			}
		}
	}
	function YE(e, t, n) {
		let { index: i } = e,
			a = "",
			o = P(e),
			s = e.index;
		for (; !(re[o] & 8); ) {
			if (o === n)
				return (
					(a += e.source.slice(s, e.index)),
					P(e),
					t & 512 && (e.tokenRaw = e.source.slice(i, e.index)),
					(e.tokenValue = a),
					134283267
				);
			if ((o & 8) === 8 && o === 92) {
				if (
					((a += e.source.slice(s, e.index)),
					(o = P(e)),
					o < 127 || o === 8232 || o === 8233)
				) {
					let r = bp(e, t, o);
					r >= 0 ? (a += wt(r)) : gp(e, r, 0);
				} else a += wt(o);
				s = e.index + 1;
			}
			e.index >= e.end && x(e, 14), (o = P(e));
		}
		x(e, 14);
	}
	function bp(e, t, n) {
		switch (n) {
			case 98:
				return 8;
			case 102:
				return 12;
			case 114:
				return 13;
			case 110:
				return 10;
			case 116:
				return 9;
			case 118:
				return 11;
			case 13:
				if (e.index < e.end) {
					let i = e.source.charCodeAt(e.index + 1);
					i === 10 && ((e.index = e.index + 1), (e.currentChar = i));
				}
			case 10:
			case 8232:
			case 8233:
				return (e.column = -1), e.line++, -1;
			case 48:
			case 49:
			case 50:
			case 51: {
				let i = n - 48,
					a = e.index + 1,
					o = e.column + 1;
				if (a < e.end) {
					let s = e.source.charCodeAt(a);
					if (re[s] & 32) {
						if (t & 1024) return -2;
						if (
							((e.currentChar = s),
							(i = (i << 3) | (s - 48)),
							a++,
							o++,
							a < e.end)
						) {
							let r = e.source.charCodeAt(a);
							re[r] & 32 &&
								((e.currentChar = r),
								(i = (i << 3) | (r - 48)),
								a++,
								o++);
						}
						(e.flags |= 64), (e.index = a - 1), (e.column = o - 1);
					} else if ((i !== 0 || re[s] & 512) && t & 1024) return -2;
				}
				return i;
			}
			case 52:
			case 53:
			case 54:
			case 55: {
				if (t & 1024) return -2;
				let i = n - 48,
					a = e.index + 1,
					o = e.column + 1;
				if (a < e.end) {
					let s = e.source.charCodeAt(a);
					re[s] & 32 &&
						((i = (i << 3) | (s - 48)),
						(e.currentChar = s),
						(e.index = a),
						(e.column = o));
				}
				return (e.flags |= 64), i;
			}
			case 120: {
				let i = P(e);
				if (!(re[i] & 64)) return -4;
				let a = pt(i),
					o = P(e);
				if (!(re[o] & 64)) return -4;
				let s = pt(o);
				return (a << 4) | s;
			}
			case 117: {
				let i = P(e);
				if (e.currentChar === 123) {
					let a = 0;
					for (; re[P(e)] & 64; )
						if (((a = (a << 4) | pt(e.currentChar)), a > 1114111))
							return -5;
					return e.currentChar < 1 || e.currentChar !== 125 ? -4 : a;
				} else {
					if (!(re[i] & 64)) return -4;
					let a = e.source.charCodeAt(e.index + 1);
					if (!(re[a] & 64)) return -4;
					let o = e.source.charCodeAt(e.index + 2);
					if (!(re[o] & 64)) return -4;
					let s = e.source.charCodeAt(e.index + 3);
					return re[s] & 64
						? ((e.index += 3),
							(e.column += 3),
							(e.currentChar = e.source.charCodeAt(e.index)),
							(pt(i) << 12) | (pt(a) << 8) | (pt(o) << 4) | pt(s))
						: -4;
				}
			}
			case 56:
			case 57:
				if (!(t & 256)) return -3;
			default:
				return n;
		}
	}
	function gp(e, t, n) {
		switch (t) {
			case -1:
				return;
			case -2:
				x(e, n ? 2 : 1);
			case -3:
				x(e, 13);
			case -4:
				x(e, 6);
			case -5:
				x(e, 102);
		}
	}
	function xp(e, t) {
		let { index: n } = e,
			i = 67174409,
			a = "",
			o = P(e);
		for (; o !== 96; ) {
			if (o === 36 && e.source.charCodeAt(e.index + 1) === 123) {
				P(e), (i = 67174408);
				break;
			} else if ((o & 8) === 8 && o === 92)
				if (((o = P(e)), o > 126)) a += wt(o);
				else {
					let s = bp(e, t | 1024, o);
					if (s >= 0) a += wt(s);
					else if (s !== -1 && t & 65536) {
						(a = void 0), (o = VE(e, o)), o < 0 && (i = 67174408);
						break;
					} else gp(e, s, 1);
				}
			else
				e.index < e.end &&
					o === 13 &&
					e.source.charCodeAt(e.index) === 10 &&
					((a += wt(o)),
					(e.currentChar = e.source.charCodeAt(++e.index))),
					(((o & 83) < 3 && o === 10) || (o ^ 8232) <= 1) &&
						((e.column = -1), e.line++),
					(a += wt(o));
			e.index >= e.end && x(e, 15), (o = P(e));
		}
		return (
			P(e),
			(e.tokenValue = a),
			(e.tokenRaw = e.source.slice(
				n + 1,
				e.index - (i === 67174409 ? 1 : 2),
			)),
			i
		);
	}
	function VE(e, t) {
		for (; t !== 96; ) {
			switch (t) {
				case 36: {
					let n = e.index + 1;
					if (n < e.end && e.source.charCodeAt(n) === 123)
						return (e.index = n), e.column++, -t;
					break;
				}
				case 10:
				case 8232:
				case 8233:
					(e.column = -1), e.line++;
			}
			e.index >= e.end && x(e, 15), (t = P(e));
		}
		return t;
	}
	function WE(e, t) {
		return e.index >= e.end && x(e, 0), e.index--, e.column--, xp(e, t);
	}
	function sp(e, t, n) {
		let i = e.currentChar,
			a = 0,
			o = 9,
			s = n & 64 ? 0 : 1,
			r = 0,
			c = 0;
		if (n & 64)
			(a = "." + Va(e, i)), (i = e.currentChar), i === 110 && x(e, 11);
		else {
			if (i === 48)
				if (((i = P(e)), (i | 32) === 120)) {
					for (n = 136, i = P(e); re[i] & 4160; ) {
						if (i === 95) {
							c || x(e, 147), (c = 0), (i = P(e));
							continue;
						}
						(c = 1), (a = a * 16 + pt(i)), r++, (i = P(e));
					}
					(r === 0 || !c) && x(e, r === 0 ? 19 : 148);
				} else if ((i | 32) === 111) {
					for (n = 132, i = P(e); re[i] & 4128; ) {
						if (i === 95) {
							c || x(e, 147), (c = 0), (i = P(e));
							continue;
						}
						(c = 1), (a = a * 8 + (i - 48)), r++, (i = P(e));
					}
					(r === 0 || !c) && x(e, r === 0 ? 0 : 148);
				} else if ((i | 32) === 98) {
					for (n = 130, i = P(e); re[i] & 4224; ) {
						if (i === 95) {
							c || x(e, 147), (c = 0), (i = P(e));
							continue;
						}
						(c = 1), (a = a * 2 + (i - 48)), r++, (i = P(e));
					}
					(r === 0 || !c) && x(e, r === 0 ? 0 : 148);
				} else if (re[i] & 32)
					for (t & 1024 && x(e, 1), n = 1; re[i] & 16; ) {
						if (re[i] & 512) {
							(n = 32), (s = 0);
							break;
						}
						(a = a * 8 + (i - 48)), (i = P(e));
					}
				else
					re[i] & 512
						? (t & 1024 && x(e, 1), (e.flags |= 64), (n = 32))
						: i === 95 && x(e, 0);
			if (n & 48) {
				if (s) {
					for (; o >= 0 && re[i] & 4112; ) {
						if (i === 95) {
							(i = P(e)),
								(i === 95 || n & 32) &&
									qn(e.index, e.line, e.index + 1, 147),
								(c = 1);
							continue;
						}
						(c = 0), (a = 10 * a + (i - 48)), (i = P(e)), --o;
					}
					if (
						(c && qn(e.index, e.line, e.index + 1, 148),
						o >= 0 && !Su(i) && i !== 46)
					)
						return (
							(e.tokenValue = a),
							t & 512 &&
								(e.tokenRaw = e.source.slice(
									e.tokenPos,
									e.index,
								)),
							134283266
						);
				}
				(a += Va(e, i)),
					(i = e.currentChar),
					i === 46 &&
						(P(e) === 95 && x(e, 0),
						(n = 64),
						(a += "." + Va(e, e.currentChar)),
						(i = e.currentChar));
			}
		}
		let l = e.index,
			d = 0;
		if (i === 110 && n & 128) (d = 1), (i = P(e));
		else if ((i | 32) === 101) {
			(i = P(e)), re[i] & 256 && (i = P(e));
			let { index: f } = e;
			re[i] & 16 || x(e, 10),
				(a += e.source.substring(l, f) + Va(e, i)),
				(i = e.currentChar);
		}
		return (
			((e.index < e.end && re[i] & 16) || Su(i)) && x(e, 12),
			d
				? ((e.tokenRaw = e.source.slice(e.tokenPos, e.index)),
					(e.tokenValue = BigInt(a)),
					134283389)
				: ((e.tokenValue =
						n & 15
							? a
							: n & 32
								? parseFloat(
										e.source.substring(e.tokenPos, e.index),
									)
								: +a),
					t & 512 &&
						(e.tokenRaw = e.source.slice(e.tokenPos, e.index)),
					134283266)
		);
	}
	function Va(e, t) {
		let n = 0,
			i = e.index,
			a = "";
		for (; re[t] & 4112; ) {
			if (t === 95) {
				let { index: o } = e;
				(t = P(e)),
					t === 95 && qn(e.index, e.line, e.index + 1, 147),
					(n = 1),
					(a += e.source.substring(i, o)),
					(i = e.index);
				continue;
			}
			(n = 0), (t = P(e));
		}
		return (
			n && qn(e.index, e.line, e.index + 1, 148),
			a + e.source.substring(i, e.index)
		);
	}
	var De = [
			"end of source",
			"identifier",
			"number",
			"string",
			"regular expression",
			"false",
			"true",
			"null",
			"template continuation",
			"template tail",
			"=>",
			"(",
			"{",
			".",
			"...",
			"}",
			")",
			";",
			",",
			"[",
			"]",
			":",
			"?",
			"'",
			'"',
			"</",
			"/>",
			"++",
			"--",
			"=",
			"<<=",
			">>=",
			">>>=",
			"**=",
			"+=",
			"-=",
			"*=",
			"/=",
			"%=",
			"^=",
			"|=",
			"&=",
			"||=",
			"&&=",
			"??=",
			"typeof",
			"delete",
			"void",
			"!",
			"~",
			"+",
			"-",
			"in",
			"instanceof",
			"*",
			"%",
			"/",
			"**",
			"&&",
			"||",
			"===",
			"!==",
			"==",
			"!=",
			"<=",
			">=",
			"<",
			">",
			"<<",
			">>",
			">>>",
			"&",
			"|",
			"^",
			"var",
			"let",
			"const",
			"break",
			"case",
			"catch",
			"class",
			"continue",
			"debugger",
			"default",
			"do",
			"else",
			"export",
			"extends",
			"finally",
			"for",
			"function",
			"if",
			"import",
			"new",
			"return",
			"super",
			"switch",
			"this",
			"throw",
			"try",
			"while",
			"with",
			"implements",
			"interface",
			"package",
			"private",
			"protected",
			"public",
			"static",
			"yield",
			"as",
			"async",
			"await",
			"constructor",
			"get",
			"set",
			"from",
			"of",
			"enum",
			"eval",
			"arguments",
			"escaped keyword",
			"escaped future reserved keyword",
			"reserved if strict",
			"#",
			"BigIntLiteral",
			"??",
			"?.",
			"WhiteSpace",
			"Illegal",
			"LineTerminator",
			"PrivateField",
			"Template",
			"@",
			"target",
			"meta",
			"LineFeed",
			"Escaped",
			"JSXText",
		],
		Ep = Object.create(null, {
			this: { value: 86113 },
			function: { value: 86106 },
			if: { value: 20571 },
			return: { value: 20574 },
			var: { value: 86090 },
			else: { value: 20565 },
			for: { value: 20569 },
			new: { value: 86109 },
			in: { value: 8738868 },
			typeof: { value: 16863277 },
			while: { value: 20580 },
			case: { value: 20558 },
			break: { value: 20557 },
			try: { value: 20579 },
			catch: { value: 20559 },
			delete: { value: 16863278 },
			throw: { value: 86114 },
			switch: { value: 86112 },
			continue: { value: 20561 },
			default: { value: 20563 },
			instanceof: { value: 8476725 },
			do: { value: 20564 },
			void: { value: 16863279 },
			finally: { value: 20568 },
			async: { value: 209007 },
			await: { value: 209008 },
			class: { value: 86096 },
			const: { value: 86092 },
			constructor: { value: 12401 },
			debugger: { value: 20562 },
			export: { value: 20566 },
			extends: { value: 20567 },
			false: { value: 86021 },
			from: { value: 12404 },
			get: { value: 12402 },
			implements: { value: 36966 },
			import: { value: 86108 },
			interface: { value: 36967 },
			let: { value: 241739 },
			null: { value: 86023 },
			of: { value: 274549 },
			package: { value: 36968 },
			private: { value: 36969 },
			protected: { value: 36970 },
			public: { value: 36971 },
			set: { value: 12403 },
			static: { value: 36972 },
			super: { value: 86111 },
			true: { value: 86022 },
			with: { value: 20581 },
			yield: { value: 241773 },
			enum: { value: 86134 },
			eval: { value: 537079927 },
			as: { value: 77934 },
			arguments: { value: 537079928 },
			target: { value: 143494 },
			meta: { value: 143495 },
		});
	function rp(e, t, n) {
		for (; mp[P(e)]; );
		return (
			(e.tokenValue = e.source.slice(e.tokenPos, e.index)),
			e.currentChar !== 92 && e.currentChar <= 126
				? Ep[e.tokenValue] || 208897
				: Ru(e, t, 0, n)
		);
	}
	function GE(e, t) {
		let n = vp(e);
		return Qa(n) || x(e, 4), (e.tokenValue = wt(n)), Ru(e, t, 1, re[n] & 4);
	}
	function Ru(e, t, n, i) {
		let a = e.index;
		for (; e.index < e.end; )
			if (e.currentChar === 92) {
				(e.tokenValue += e.source.slice(a, e.index)), (n = 1);
				let s = vp(e);
				Qa(s) || x(e, 4),
					(i = i && re[s] & 4),
					(e.tokenValue += wt(s)),
					(a = e.index);
			} else if (Qa(e.currentChar) || BE(e, e.currentChar)) P(e);
			else break;
		e.index <= e.end && (e.tokenValue += e.source.slice(a, e.index));
		let o = e.tokenValue.length;
		if (i && o >= 2 && o <= 11) {
			let s = Ep[e.tokenValue];
			return s === void 0
				? 208897
				: n
					? s === 209008
						? t & 4196352
							? 121
							: s
						: t & 1024
							? s === 36972 || (s & 36864) === 36864
								? 122
								: (s & 20480) === 20480
									? t & 1073741824 && !(t & 8192)
										? s
										: 121
									: 143483
							: t & 1073741824 &&
								  !(t & 8192) &&
								  (s & 20480) === 20480
								? s
								: s === 241773
									? t & 1073741824
										? 143483
										: t & 2097152
											? 121
											: s
									: s === 209007
										? 143483
										: (s & 36864) === 36864
											? s
											: 121
					: s;
		}
		return 208897;
	}
	function XE(e) {
		return Su(P(e)) || x(e, 94), 131;
	}
	function vp(e) {
		return (
			e.source.charCodeAt(e.index + 1) !== 117 && x(e, 4),
			(e.currentChar = e.source.charCodeAt((e.index += 2))),
			KE(e)
		);
	}
	function KE(e) {
		let t = 0,
			n = e.currentChar;
		if (n === 123) {
			let s = e.index - 2;
			for (; re[P(e)] & 64; )
				(t = (t << 4) | pt(e.currentChar)),
					t > 1114111 && qn(s, e.line, e.index + 1, 102);
			return (
				e.currentChar !== 125 && qn(s, e.line, e.index - 1, 6), P(e), t
			);
		}
		re[n] & 64 || x(e, 6);
		let i = e.source.charCodeAt(e.index + 1);
		re[i] & 64 || x(e, 6);
		let a = e.source.charCodeAt(e.index + 2);
		re[a] & 64 || x(e, 6);
		let o = e.source.charCodeAt(e.index + 3);
		return (
			re[o] & 64 || x(e, 6),
			(t = (pt(n) << 12) | (pt(i) << 8) | (pt(a) << 4) | pt(o)),
			(e.currentChar = e.source.charCodeAt((e.index += 4))),
			t
		);
	}
	var Ap = [
		129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 136, 128, 128, 130,
		129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129,
		129, 129, 129, 129, 128, 16842800, 134283267, 131, 208897, 8457015,
		8455751, 134283267, 67174411, 16, 8457014, 25233970, 18, 25233971,
		67108877, 8457016, 134283266, 134283266, 134283266, 134283266,
		134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 21,
		1074790417, 8456258, 1077936157, 8456259, 22, 133, 208897, 208897,
		208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897,
		208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897,
		208897, 208897, 208897, 208897, 208897, 208897, 69271571, 137, 20,
		8455497, 208897, 132, 4096, 4096, 4096, 4096, 4096, 4096, 4096, 208897,
		4096, 208897, 208897, 4096, 208897, 4096, 208897, 4096, 208897, 4096,
		4096, 4096, 208897, 4096, 4096, 208897, 4096, 4096, 2162700, 8455240,
		1074790415, 16842801, 129,
	];
	function U(e, t) {
		if (
			((e.flags = (e.flags | 1) ^ 1),
			(e.startPos = e.index),
			(e.startColumn = e.column),
			(e.startLine = e.line),
			(e.token = Tp(e, t, 0)),
			e.onToken && e.token !== 1048576)
		) {
			let n = {
				start: { line: e.linePos, column: e.colPos },
				end: { line: e.line, column: e.column },
			};
			e.onToken(ME(e.token), e.tokenPos, e.index, n);
		}
	}
	function Tp(e, t, n) {
		let i = e.index === 0,
			a = e.source,
			o = e.index,
			s = e.line,
			r = e.column;
		for (; e.index < e.end; ) {
			(e.tokenPos = e.index), (e.colPos = e.column), (e.linePos = e.line);
			let c = e.currentChar;
			if (c <= 126) {
				let l = Ap[c];
				switch (l) {
					case 67174411:
					case 16:
					case 2162700:
					case 1074790415:
					case 69271571:
					case 20:
					case 21:
					case 1074790417:
					case 18:
					case 16842801:
					case 133:
					case 129:
						return P(e), l;
					case 208897:
						return rp(e, t, 0);
					case 4096:
						return rp(e, t, 1);
					case 134283266:
						return sp(e, t, 144);
					case 134283267:
						return YE(e, t, c);
					case 132:
						return xp(e, t);
					case 137:
						return GE(e, t);
					case 131:
						return XE(e);
					case 128:
						P(e);
						break;
					case 130:
						(n |= 5), hn(e);
						break;
					case 136:
						Lu(e, n), (n = (n & -5) | 1);
						break;
					case 8456258:
						let d = P(e);
						if (e.index < e.end) {
							if (d === 60)
								return e.index < e.end && P(e) === 61
									? (P(e), 4194334)
									: 8456516;
							if (d === 61) return P(e), 8456256;
							if (d === 33) {
								let p = e.index + 1;
								if (
									p + 1 < e.end &&
									a.charCodeAt(p) === 45 &&
									a.charCodeAt(p + 1) == 45
								) {
									(e.column += 3),
										(e.currentChar = a.charCodeAt(
											(e.index += 3),
										)),
										(n = op(
											e,
											a,
											n,
											t,
											2,
											e.tokenPos,
											e.linePos,
											e.colPos,
										)),
										(o = e.tokenPos),
										(s = e.linePos),
										(r = e.colPos);
									continue;
								}
								return 8456258;
							}
							if (d === 47) {
								if (!(t & 16)) return 8456258;
								let p = e.index + 1;
								if (
									p < e.end &&
									((d = a.charCodeAt(p)),
									d === 42 || d === 47)
								)
									break;
								return P(e), 25;
							}
						}
						return 8456258;
					case 1077936157: {
						P(e);
						let p = e.currentChar;
						return p === 61
							? P(e) === 61
								? (P(e), 8455996)
								: 8455998
							: p === 62
								? (P(e), 10)
								: 1077936157;
					}
					case 16842800:
						return P(e) !== 61
							? 16842800
							: P(e) !== 61
								? 8455999
								: (P(e), 8455997);
					case 8457015:
						return P(e) !== 61 ? 8457015 : (P(e), 4194342);
					case 8457014: {
						if ((P(e), e.index >= e.end)) return 8457014;
						let p = e.currentChar;
						return p === 61
							? (P(e), 4194340)
							: p !== 42
								? 8457014
								: P(e) !== 61
									? 8457273
									: (P(e), 4194337);
					}
					case 8455497:
						return P(e) !== 61 ? 8455497 : (P(e), 4194343);
					case 25233970: {
						P(e);
						let p = e.currentChar;
						return p === 43
							? (P(e), 33619995)
							: p === 61
								? (P(e), 4194338)
								: 25233970;
					}
					case 25233971: {
						P(e);
						let p = e.currentChar;
						if (p === 45) {
							if ((P(e), (n & 1 || i) && e.currentChar === 62)) {
								t & 256 || x(e, 109),
									P(e),
									(n = op(e, a, n, t, 3, o, s, r)),
									(o = e.tokenPos),
									(s = e.linePos),
									(r = e.colPos);
								continue;
							}
							return 33619996;
						}
						return p === 61 ? (P(e), 4194339) : 25233971;
					}
					case 8457016: {
						if ((P(e), e.index < e.end)) {
							let p = e.currentChar;
							if (p === 47) {
								P(e),
									(n = Pu(
										e,
										a,
										n,
										0,
										e.tokenPos,
										e.linePos,
										e.colPos,
									)),
									(o = e.tokenPos),
									(s = e.linePos),
									(r = e.colPos);
								continue;
							}
							if (p === 42) {
								P(e),
									(n = jE(e, a, n)),
									(o = e.tokenPos),
									(s = e.linePos),
									(r = e.colPos);
								continue;
							}
							if (t & 32768) return qE(e, t);
							if (p === 61) return P(e), 4259877;
						}
						return 8457016;
					}
					case 67108877:
						let f = P(e);
						if (f >= 48 && f <= 57) return sp(e, t, 80);
						if (f === 46) {
							let p = e.index + 1;
							if (p < e.end && a.charCodeAt(p) === 46)
								return (
									(e.column += 2),
									(e.currentChar = a.charCodeAt(
										(e.index += 2),
									)),
									14
								);
						}
						return 67108877;
					case 8455240: {
						P(e);
						let p = e.currentChar;
						return p === 124
							? (P(e),
								e.currentChar === 61
									? (P(e), 4194346)
									: 8979003)
							: p === 61
								? (P(e), 4194344)
								: 8455240;
					}
					case 8456259: {
						P(e);
						let p = e.currentChar;
						if (p === 61) return P(e), 8456257;
						if (p !== 62) return 8456259;
						if ((P(e), e.index < e.end)) {
							let g = e.currentChar;
							if (g === 62)
								return P(e) === 61 ? (P(e), 4194336) : 8456518;
							if (g === 61) return P(e), 4194335;
						}
						return 8456517;
					}
					case 8455751: {
						P(e);
						let p = e.currentChar;
						return p === 38
							? (P(e),
								e.currentChar === 61
									? (P(e), 4194347)
									: 8979258)
							: p === 61
								? (P(e), 4194345)
								: 8455751;
					}
					case 22: {
						let p = P(e);
						if (p === 63)
							return (
								P(e),
								e.currentChar === 61
									? (P(e), 4194348)
									: 276889982
							);
						if (p === 46) {
							let g = e.index + 1;
							if (
								g < e.end &&
								((p = a.charCodeAt(g)), !(p >= 48 && p <= 57))
							)
								return P(e), 67108991;
						}
						return 22;
					}
				}
			} else {
				if ((c ^ 8232) <= 1) {
					(n = (n & -5) | 1), hn(e);
					continue;
				}
				if (
					(c & 64512) === 55296 ||
					(Li[(c >>> 5) + 34816] >>> c) & 31 & 1
				)
					return (
						(c & 64512) === 56320 &&
							((c = ((c & 1023) << 10) | (c & 1023) | 65536),
							(Li[(c >>> 5) + 0] >>> c) & 31 & 1 ||
								x(e, 18, wt(c)),
							e.index++,
							(e.currentChar = c)),
						e.column++,
						(e.tokenValue = ""),
						Ru(e, t, 0, 0)
					);
				if (FE(c)) {
					P(e);
					continue;
				}
				x(e, 18, wt(c));
			}
		}
		return 1048576;
	}
	var QE = {
			AElig: "\xC6",
			AMP: "&",
			Aacute: "\xC1",
			Abreve: "\u0102",
			Acirc: "\xC2",
			Acy: "\u0410",
			Afr: "\u{1D504}",
			Agrave: "\xC0",
			Alpha: "\u0391",
			Amacr: "\u0100",
			And: "\u2A53",
			Aogon: "\u0104",
			Aopf: "\u{1D538}",
			ApplyFunction: "\u2061",
			Aring: "\xC5",
			Ascr: "\u{1D49C}",
			Assign: "\u2254",
			Atilde: "\xC3",
			Auml: "\xC4",
			Backslash: "\u2216",
			Barv: "\u2AE7",
			Barwed: "\u2306",
			Bcy: "\u0411",
			Because: "\u2235",
			Bernoullis: "\u212C",
			Beta: "\u0392",
			Bfr: "\u{1D505}",
			Bopf: "\u{1D539}",
			Breve: "\u02D8",
			Bscr: "\u212C",
			Bumpeq: "\u224E",
			CHcy: "\u0427",
			COPY: "\xA9",
			Cacute: "\u0106",
			Cap: "\u22D2",
			CapitalDifferentialD: "\u2145",
			Cayleys: "\u212D",
			Ccaron: "\u010C",
			Ccedil: "\xC7",
			Ccirc: "\u0108",
			Cconint: "\u2230",
			Cdot: "\u010A",
			Cedilla: "\xB8",
			CenterDot: "\xB7",
			Cfr: "\u212D",
			Chi: "\u03A7",
			CircleDot: "\u2299",
			CircleMinus: "\u2296",
			CirclePlus: "\u2295",
			CircleTimes: "\u2297",
			ClockwiseContourIntegral: "\u2232",
			CloseCurlyDoubleQuote: "\u201D",
			CloseCurlyQuote: "\u2019",
			Colon: "\u2237",
			Colone: "\u2A74",
			Congruent: "\u2261",
			Conint: "\u222F",
			ContourIntegral: "\u222E",
			Copf: "\u2102",
			Coproduct: "\u2210",
			CounterClockwiseContourIntegral: "\u2233",
			Cross: "\u2A2F",
			Cscr: "\u{1D49E}",
			Cup: "\u22D3",
			CupCap: "\u224D",
			DD: "\u2145",
			DDotrahd: "\u2911",
			DJcy: "\u0402",
			DScy: "\u0405",
			DZcy: "\u040F",
			Dagger: "\u2021",
			Darr: "\u21A1",
			Dashv: "\u2AE4",
			Dcaron: "\u010E",
			Dcy: "\u0414",
			Del: "\u2207",
			Delta: "\u0394",
			Dfr: "\u{1D507}",
			DiacriticalAcute: "\xB4",
			DiacriticalDot: "\u02D9",
			DiacriticalDoubleAcute: "\u02DD",
			DiacriticalGrave: "`",
			DiacriticalTilde: "\u02DC",
			Diamond: "\u22C4",
			DifferentialD: "\u2146",
			Dopf: "\u{1D53B}",
			Dot: "\xA8",
			DotDot: "\u20DC",
			DotEqual: "\u2250",
			DoubleContourIntegral: "\u222F",
			DoubleDot: "\xA8",
			DoubleDownArrow: "\u21D3",
			DoubleLeftArrow: "\u21D0",
			DoubleLeftRightArrow: "\u21D4",
			DoubleLeftTee: "\u2AE4",
			DoubleLongLeftArrow: "\u27F8",
			DoubleLongLeftRightArrow: "\u27FA",
			DoubleLongRightArrow: "\u27F9",
			DoubleRightArrow: "\u21D2",
			DoubleRightTee: "\u22A8",
			DoubleUpArrow: "\u21D1",
			DoubleUpDownArrow: "\u21D5",
			DoubleVerticalBar: "\u2225",
			DownArrow: "\u2193",
			DownArrowBar: "\u2913",
			DownArrowUpArrow: "\u21F5",
			DownBreve: "\u0311",
			DownLeftRightVector: "\u2950",
			DownLeftTeeVector: "\u295E",
			DownLeftVector: "\u21BD",
			DownLeftVectorBar: "\u2956",
			DownRightTeeVector: "\u295F",
			DownRightVector: "\u21C1",
			DownRightVectorBar: "\u2957",
			DownTee: "\u22A4",
			DownTeeArrow: "\u21A7",
			Downarrow: "\u21D3",
			Dscr: "\u{1D49F}",
			Dstrok: "\u0110",
			ENG: "\u014A",
			ETH: "\xD0",
			Eacute: "\xC9",
			Ecaron: "\u011A",
			Ecirc: "\xCA",
			Ecy: "\u042D",
			Edot: "\u0116",
			Efr: "\u{1D508}",
			Egrave: "\xC8",
			Element: "\u2208",
			Emacr: "\u0112",
			EmptySmallSquare: "\u25FB",
			EmptyVerySmallSquare: "\u25AB",
			Eogon: "\u0118",
			Eopf: "\u{1D53C}",
			Epsilon: "\u0395",
			Equal: "\u2A75",
			EqualTilde: "\u2242",
			Equilibrium: "\u21CC",
			Escr: "\u2130",
			Esim: "\u2A73",
			Eta: "\u0397",
			Euml: "\xCB",
			Exists: "\u2203",
			ExponentialE: "\u2147",
			Fcy: "\u0424",
			Ffr: "\u{1D509}",
			FilledSmallSquare: "\u25FC",
			FilledVerySmallSquare: "\u25AA",
			Fopf: "\u{1D53D}",
			ForAll: "\u2200",
			Fouriertrf: "\u2131",
			Fscr: "\u2131",
			GJcy: "\u0403",
			GT: ">",
			Gamma: "\u0393",
			Gammad: "\u03DC",
			Gbreve: "\u011E",
			Gcedil: "\u0122",
			Gcirc: "\u011C",
			Gcy: "\u0413",
			Gdot: "\u0120",
			Gfr: "\u{1D50A}",
			Gg: "\u22D9",
			Gopf: "\u{1D53E}",
			GreaterEqual: "\u2265",
			GreaterEqualLess: "\u22DB",
			GreaterFullEqual: "\u2267",
			GreaterGreater: "\u2AA2",
			GreaterLess: "\u2277",
			GreaterSlantEqual: "\u2A7E",
			GreaterTilde: "\u2273",
			Gscr: "\u{1D4A2}",
			Gt: "\u226B",
			HARDcy: "\u042A",
			Hacek: "\u02C7",
			Hat: "^",
			Hcirc: "\u0124",
			Hfr: "\u210C",
			HilbertSpace: "\u210B",
			Hopf: "\u210D",
			HorizontalLine: "\u2500",
			Hscr: "\u210B",
			Hstrok: "\u0126",
			HumpDownHump: "\u224E",
			HumpEqual: "\u224F",
			IEcy: "\u0415",
			IJlig: "\u0132",
			IOcy: "\u0401",
			Iacute: "\xCD",
			Icirc: "\xCE",
			Icy: "\u0418",
			Idot: "\u0130",
			Ifr: "\u2111",
			Igrave: "\xCC",
			Im: "\u2111",
			Imacr: "\u012A",
			ImaginaryI: "\u2148",
			Implies: "\u21D2",
			Int: "\u222C",
			Integral: "\u222B",
			Intersection: "\u22C2",
			InvisibleComma: "\u2063",
			InvisibleTimes: "\u2062",
			Iogon: "\u012E",
			Iopf: "\u{1D540}",
			Iota: "\u0399",
			Iscr: "\u2110",
			Itilde: "\u0128",
			Iukcy: "\u0406",
			Iuml: "\xCF",
			Jcirc: "\u0134",
			Jcy: "\u0419",
			Jfr: "\u{1D50D}",
			Jopf: "\u{1D541}",
			Jscr: "\u{1D4A5}",
			Jsercy: "\u0408",
			Jukcy: "\u0404",
			KHcy: "\u0425",
			KJcy: "\u040C",
			Kappa: "\u039A",
			Kcedil: "\u0136",
			Kcy: "\u041A",
			Kfr: "\u{1D50E}",
			Kopf: "\u{1D542}",
			Kscr: "\u{1D4A6}",
			LJcy: "\u0409",
			LT: "<",
			Lacute: "\u0139",
			Lambda: "\u039B",
			Lang: "\u27EA",
			Laplacetrf: "\u2112",
			Larr: "\u219E",
			Lcaron: "\u013D",
			Lcedil: "\u013B",
			Lcy: "\u041B",
			LeftAngleBracket: "\u27E8",
			LeftArrow: "\u2190",
			LeftArrowBar: "\u21E4",
			LeftArrowRightArrow: "\u21C6",
			LeftCeiling: "\u2308",
			LeftDoubleBracket: "\u27E6",
			LeftDownTeeVector: "\u2961",
			LeftDownVector: "\u21C3",
			LeftDownVectorBar: "\u2959",
			LeftFloor: "\u230A",
			LeftRightArrow: "\u2194",
			LeftRightVector: "\u294E",
			LeftTee: "\u22A3",
			LeftTeeArrow: "\u21A4",
			LeftTeeVector: "\u295A",
			LeftTriangle: "\u22B2",
			LeftTriangleBar: "\u29CF",
			LeftTriangleEqual: "\u22B4",
			LeftUpDownVector: "\u2951",
			LeftUpTeeVector: "\u2960",
			LeftUpVector: "\u21BF",
			LeftUpVectorBar: "\u2958",
			LeftVector: "\u21BC",
			LeftVectorBar: "\u2952",
			Leftarrow: "\u21D0",
			Leftrightarrow: "\u21D4",
			LessEqualGreater: "\u22DA",
			LessFullEqual: "\u2266",
			LessGreater: "\u2276",
			LessLess: "\u2AA1",
			LessSlantEqual: "\u2A7D",
			LessTilde: "\u2272",
			Lfr: "\u{1D50F}",
			Ll: "\u22D8",
			Lleftarrow: "\u21DA",
			Lmidot: "\u013F",
			LongLeftArrow: "\u27F5",
			LongLeftRightArrow: "\u27F7",
			LongRightArrow: "\u27F6",
			Longleftarrow: "\u27F8",
			Longleftrightarrow: "\u27FA",
			Longrightarrow: "\u27F9",
			Lopf: "\u{1D543}",
			LowerLeftArrow: "\u2199",
			LowerRightArrow: "\u2198",
			Lscr: "\u2112",
			Lsh: "\u21B0",
			Lstrok: "\u0141",
			Lt: "\u226A",
			Map: "\u2905",
			Mcy: "\u041C",
			MediumSpace: "\u205F",
			Mellintrf: "\u2133",
			Mfr: "\u{1D510}",
			MinusPlus: "\u2213",
			Mopf: "\u{1D544}",
			Mscr: "\u2133",
			Mu: "\u039C",
			NJcy: "\u040A",
			Nacute: "\u0143",
			Ncaron: "\u0147",
			Ncedil: "\u0145",
			Ncy: "\u041D",
			NegativeMediumSpace: "\u200B",
			NegativeThickSpace: "\u200B",
			NegativeThinSpace: "\u200B",
			NegativeVeryThinSpace: "\u200B",
			NestedGreaterGreater: "\u226B",
			NestedLessLess: "\u226A",
			NewLine: `
`,
			Nfr: "\u{1D511}",
			NoBreak: "\u2060",
			NonBreakingSpace: "\xA0",
			Nopf: "\u2115",
			Not: "\u2AEC",
			NotCongruent: "\u2262",
			NotCupCap: "\u226D",
			NotDoubleVerticalBar: "\u2226",
			NotElement: "\u2209",
			NotEqual: "\u2260",
			NotEqualTilde: "\u2242\u0338",
			NotExists: "\u2204",
			NotGreater: "\u226F",
			NotGreaterEqual: "\u2271",
			NotGreaterFullEqual: "\u2267\u0338",
			NotGreaterGreater: "\u226B\u0338",
			NotGreaterLess: "\u2279",
			NotGreaterSlantEqual: "\u2A7E\u0338",
			NotGreaterTilde: "\u2275",
			NotHumpDownHump: "\u224E\u0338",
			NotHumpEqual: "\u224F\u0338",
			NotLeftTriangle: "\u22EA",
			NotLeftTriangleBar: "\u29CF\u0338",
			NotLeftTriangleEqual: "\u22EC",
			NotLess: "\u226E",
			NotLessEqual: "\u2270",
			NotLessGreater: "\u2278",
			NotLessLess: "\u226A\u0338",
			NotLessSlantEqual: "\u2A7D\u0338",
			NotLessTilde: "\u2274",
			NotNestedGreaterGreater: "\u2AA2\u0338",
			NotNestedLessLess: "\u2AA1\u0338",
			NotPrecedes: "\u2280",
			NotPrecedesEqual: "\u2AAF\u0338",
			NotPrecedesSlantEqual: "\u22E0",
			NotReverseElement: "\u220C",
			NotRightTriangle: "\u22EB",
			NotRightTriangleBar: "\u29D0\u0338",
			NotRightTriangleEqual: "\u22ED",
			NotSquareSubset: "\u228F\u0338",
			NotSquareSubsetEqual: "\u22E2",
			NotSquareSuperset: "\u2290\u0338",
			NotSquareSupersetEqual: "\u22E3",
			NotSubset: "\u2282\u20D2",
			NotSubsetEqual: "\u2288",
			NotSucceeds: "\u2281",
			NotSucceedsEqual: "\u2AB0\u0338",
			NotSucceedsSlantEqual: "\u22E1",
			NotSucceedsTilde: "\u227F\u0338",
			NotSuperset: "\u2283\u20D2",
			NotSupersetEqual: "\u2289",
			NotTilde: "\u2241",
			NotTildeEqual: "\u2244",
			NotTildeFullEqual: "\u2247",
			NotTildeTilde: "\u2249",
			NotVerticalBar: "\u2224",
			Nscr: "\u{1D4A9}",
			Ntilde: "\xD1",
			Nu: "\u039D",
			OElig: "\u0152",
			Oacute: "\xD3",
			Ocirc: "\xD4",
			Ocy: "\u041E",
			Odblac: "\u0150",
			Ofr: "\u{1D512}",
			Ograve: "\xD2",
			Omacr: "\u014C",
			Omega: "\u03A9",
			Omicron: "\u039F",
			Oopf: "\u{1D546}",
			OpenCurlyDoubleQuote: "\u201C",
			OpenCurlyQuote: "\u2018",
			Or: "\u2A54",
			Oscr: "\u{1D4AA}",
			Oslash: "\xD8",
			Otilde: "\xD5",
			Otimes: "\u2A37",
			Ouml: "\xD6",
			OverBar: "\u203E",
			OverBrace: "\u23DE",
			OverBracket: "\u23B4",
			OverParenthesis: "\u23DC",
			PartialD: "\u2202",
			Pcy: "\u041F",
			Pfr: "\u{1D513}",
			Phi: "\u03A6",
			Pi: "\u03A0",
			PlusMinus: "\xB1",
			Poincareplane: "\u210C",
			Popf: "\u2119",
			Pr: "\u2ABB",
			Precedes: "\u227A",
			PrecedesEqual: "\u2AAF",
			PrecedesSlantEqual: "\u227C",
			PrecedesTilde: "\u227E",
			Prime: "\u2033",
			Product: "\u220F",
			Proportion: "\u2237",
			Proportional: "\u221D",
			Pscr: "\u{1D4AB}",
			Psi: "\u03A8",
			QUOT: '"',
			Qfr: "\u{1D514}",
			Qopf: "\u211A",
			Qscr: "\u{1D4AC}",
			RBarr: "\u2910",
			REG: "\xAE",
			Racute: "\u0154",
			Rang: "\u27EB",
			Rarr: "\u21A0",
			Rarrtl: "\u2916",
			Rcaron: "\u0158",
			Rcedil: "\u0156",
			Rcy: "\u0420",
			Re: "\u211C",
			ReverseElement: "\u220B",
			ReverseEquilibrium: "\u21CB",
			ReverseUpEquilibrium: "\u296F",
			Rfr: "\u211C",
			Rho: "\u03A1",
			RightAngleBracket: "\u27E9",
			RightArrow: "\u2192",
			RightArrowBar: "\u21E5",
			RightArrowLeftArrow: "\u21C4",
			RightCeiling: "\u2309",
			RightDoubleBracket: "\u27E7",
			RightDownTeeVector: "\u295D",
			RightDownVector: "\u21C2",
			RightDownVectorBar: "\u2955",
			RightFloor: "\u230B",
			RightTee: "\u22A2",
			RightTeeArrow: "\u21A6",
			RightTeeVector: "\u295B",
			RightTriangle: "\u22B3",
			RightTriangleBar: "\u29D0",
			RightTriangleEqual: "\u22B5",
			RightUpDownVector: "\u294F",
			RightUpTeeVector: "\u295C",
			RightUpVector: "\u21BE",
			RightUpVectorBar: "\u2954",
			RightVector: "\u21C0",
			RightVectorBar: "\u2953",
			Rightarrow: "\u21D2",
			Ropf: "\u211D",
			RoundImplies: "\u2970",
			Rrightarrow: "\u21DB",
			Rscr: "\u211B",
			Rsh: "\u21B1",
			RuleDelayed: "\u29F4",
			SHCHcy: "\u0429",
			SHcy: "\u0428",
			SOFTcy: "\u042C",
			Sacute: "\u015A",
			Sc: "\u2ABC",
			Scaron: "\u0160",
			Scedil: "\u015E",
			Scirc: "\u015C",
			Scy: "\u0421",
			Sfr: "\u{1D516}",
			ShortDownArrow: "\u2193",
			ShortLeftArrow: "\u2190",
			ShortRightArrow: "\u2192",
			ShortUpArrow: "\u2191",
			Sigma: "\u03A3",
			SmallCircle: "\u2218",
			Sopf: "\u{1D54A}",
			Sqrt: "\u221A",
			Square: "\u25A1",
			SquareIntersection: "\u2293",
			SquareSubset: "\u228F",
			SquareSubsetEqual: "\u2291",
			SquareSuperset: "\u2290",
			SquareSupersetEqual: "\u2292",
			SquareUnion: "\u2294",
			Sscr: "\u{1D4AE}",
			Star: "\u22C6",
			Sub: "\u22D0",
			Subset: "\u22D0",
			SubsetEqual: "\u2286",
			Succeeds: "\u227B",
			SucceedsEqual: "\u2AB0",
			SucceedsSlantEqual: "\u227D",
			SucceedsTilde: "\u227F",
			SuchThat: "\u220B",
			Sum: "\u2211",
			Sup: "\u22D1",
			Superset: "\u2283",
			SupersetEqual: "\u2287",
			Supset: "\u22D1",
			THORN: "\xDE",
			TRADE: "\u2122",
			TSHcy: "\u040B",
			TScy: "\u0426",
			Tab: "	",
			Tau: "\u03A4",
			Tcaron: "\u0164",
			Tcedil: "\u0162",
			Tcy: "\u0422",
			Tfr: "\u{1D517}",
			Therefore: "\u2234",
			Theta: "\u0398",
			ThickSpace: "\u205F\u200A",
			ThinSpace: "\u2009",
			Tilde: "\u223C",
			TildeEqual: "\u2243",
			TildeFullEqual: "\u2245",
			TildeTilde: "\u2248",
			Topf: "\u{1D54B}",
			TripleDot: "\u20DB",
			Tscr: "\u{1D4AF}",
			Tstrok: "\u0166",
			Uacute: "\xDA",
			Uarr: "\u219F",
			Uarrocir: "\u2949",
			Ubrcy: "\u040E",
			Ubreve: "\u016C",
			Ucirc: "\xDB",
			Ucy: "\u0423",
			Udblac: "\u0170",
			Ufr: "\u{1D518}",
			Ugrave: "\xD9",
			Umacr: "\u016A",
			UnderBar: "_",
			UnderBrace: "\u23DF",
			UnderBracket: "\u23B5",
			UnderParenthesis: "\u23DD",
			Union: "\u22C3",
			UnionPlus: "\u228E",
			Uogon: "\u0172",
			Uopf: "\u{1D54C}",
			UpArrow: "\u2191",
			UpArrowBar: "\u2912",
			UpArrowDownArrow: "\u21C5",
			UpDownArrow: "\u2195",
			UpEquilibrium: "\u296E",
			UpTee: "\u22A5",
			UpTeeArrow: "\u21A5",
			Uparrow: "\u21D1",
			Updownarrow: "\u21D5",
			UpperLeftArrow: "\u2196",
			UpperRightArrow: "\u2197",
			Upsi: "\u03D2",
			Upsilon: "\u03A5",
			Uring: "\u016E",
			Uscr: "\u{1D4B0}",
			Utilde: "\u0168",
			Uuml: "\xDC",
			VDash: "\u22AB",
			Vbar: "\u2AEB",
			Vcy: "\u0412",
			Vdash: "\u22A9",
			Vdashl: "\u2AE6",
			Vee: "\u22C1",
			Verbar: "\u2016",
			Vert: "\u2016",
			VerticalBar: "\u2223",
			VerticalLine: "|",
			VerticalSeparator: "\u2758",
			VerticalTilde: "\u2240",
			VeryThinSpace: "\u200A",
			Vfr: "\u{1D519}",
			Vopf: "\u{1D54D}",
			Vscr: "\u{1D4B1}",
			Vvdash: "\u22AA",
			Wcirc: "\u0174",
			Wedge: "\u22C0",
			Wfr: "\u{1D51A}",
			Wopf: "\u{1D54E}",
			Wscr: "\u{1D4B2}",
			Xfr: "\u{1D51B}",
			Xi: "\u039E",
			Xopf: "\u{1D54F}",
			Xscr: "\u{1D4B3}",
			YAcy: "\u042F",
			YIcy: "\u0407",
			YUcy: "\u042E",
			Yacute: "\xDD",
			Ycirc: "\u0176",
			Ycy: "\u042B",
			Yfr: "\u{1D51C}",
			Yopf: "\u{1D550}",
			Yscr: "\u{1D4B4}",
			Yuml: "\u0178",
			ZHcy: "\u0416",
			Zacute: "\u0179",
			Zcaron: "\u017D",
			Zcy: "\u0417",
			Zdot: "\u017B",
			ZeroWidthSpace: "\u200B",
			Zeta: "\u0396",
			Zfr: "\u2128",
			Zopf: "\u2124",
			Zscr: "\u{1D4B5}",
			aacute: "\xE1",
			abreve: "\u0103",
			ac: "\u223E",
			acE: "\u223E\u0333",
			acd: "\u223F",
			acirc: "\xE2",
			acute: "\xB4",
			acy: "\u0430",
			aelig: "\xE6",
			af: "\u2061",
			afr: "\u{1D51E}",
			agrave: "\xE0",
			alefsym: "\u2135",
			aleph: "\u2135",
			alpha: "\u03B1",
			amacr: "\u0101",
			amalg: "\u2A3F",
			amp: "&",
			and: "\u2227",
			andand: "\u2A55",
			andd: "\u2A5C",
			andslope: "\u2A58",
			andv: "\u2A5A",
			ang: "\u2220",
			ange: "\u29A4",
			angle: "\u2220",
			angmsd: "\u2221",
			angmsdaa: "\u29A8",
			angmsdab: "\u29A9",
			angmsdac: "\u29AA",
			angmsdad: "\u29AB",
			angmsdae: "\u29AC",
			angmsdaf: "\u29AD",
			angmsdag: "\u29AE",
			angmsdah: "\u29AF",
			angrt: "\u221F",
			angrtvb: "\u22BE",
			angrtvbd: "\u299D",
			angsph: "\u2222",
			angst: "\xC5",
			angzarr: "\u237C",
			aogon: "\u0105",
			aopf: "\u{1D552}",
			ap: "\u2248",
			apE: "\u2A70",
			apacir: "\u2A6F",
			ape: "\u224A",
			apid: "\u224B",
			apos: "'",
			approx: "\u2248",
			approxeq: "\u224A",
			aring: "\xE5",
			ascr: "\u{1D4B6}",
			ast: "*",
			asymp: "\u2248",
			asympeq: "\u224D",
			atilde: "\xE3",
			auml: "\xE4",
			awconint: "\u2233",
			awint: "\u2A11",
			bNot: "\u2AED",
			backcong: "\u224C",
			backepsilon: "\u03F6",
			backprime: "\u2035",
			backsim: "\u223D",
			backsimeq: "\u22CD",
			barvee: "\u22BD",
			barwed: "\u2305",
			barwedge: "\u2305",
			bbrk: "\u23B5",
			bbrktbrk: "\u23B6",
			bcong: "\u224C",
			bcy: "\u0431",
			bdquo: "\u201E",
			becaus: "\u2235",
			because: "\u2235",
			bemptyv: "\u29B0",
			bepsi: "\u03F6",
			bernou: "\u212C",
			beta: "\u03B2",
			beth: "\u2136",
			between: "\u226C",
			bfr: "\u{1D51F}",
			bigcap: "\u22C2",
			bigcirc: "\u25EF",
			bigcup: "\u22C3",
			bigodot: "\u2A00",
			bigoplus: "\u2A01",
			bigotimes: "\u2A02",
			bigsqcup: "\u2A06",
			bigstar: "\u2605",
			bigtriangledown: "\u25BD",
			bigtriangleup: "\u25B3",
			biguplus: "\u2A04",
			bigvee: "\u22C1",
			bigwedge: "\u22C0",
			bkarow: "\u290D",
			blacklozenge: "\u29EB",
			blacksquare: "\u25AA",
			blacktriangle: "\u25B4",
			blacktriangledown: "\u25BE",
			blacktriangleleft: "\u25C2",
			blacktriangleright: "\u25B8",
			blank: "\u2423",
			blk12: "\u2592",
			blk14: "\u2591",
			blk34: "\u2593",
			block: "\u2588",
			bne: "=\u20E5",
			bnequiv: "\u2261\u20E5",
			bnot: "\u2310",
			bopf: "\u{1D553}",
			bot: "\u22A5",
			bottom: "\u22A5",
			bowtie: "\u22C8",
			boxDL: "\u2557",
			boxDR: "\u2554",
			boxDl: "\u2556",
			boxDr: "\u2553",
			boxH: "\u2550",
			boxHD: "\u2566",
			boxHU: "\u2569",
			boxHd: "\u2564",
			boxHu: "\u2567",
			boxUL: "\u255D",
			boxUR: "\u255A",
			boxUl: "\u255C",
			boxUr: "\u2559",
			boxV: "\u2551",
			boxVH: "\u256C",
			boxVL: "\u2563",
			boxVR: "\u2560",
			boxVh: "\u256B",
			boxVl: "\u2562",
			boxVr: "\u255F",
			boxbox: "\u29C9",
			boxdL: "\u2555",
			boxdR: "\u2552",
			boxdl: "\u2510",
			boxdr: "\u250C",
			boxh: "\u2500",
			boxhD: "\u2565",
			boxhU: "\u2568",
			boxhd: "\u252C",
			boxhu: "\u2534",
			boxminus: "\u229F",
			boxplus: "\u229E",
			boxtimes: "\u22A0",
			boxuL: "\u255B",
			boxuR: "\u2558",
			boxul: "\u2518",
			boxur: "\u2514",
			boxv: "\u2502",
			boxvH: "\u256A",
			boxvL: "\u2561",
			boxvR: "\u255E",
			boxvh: "\u253C",
			boxvl: "\u2524",
			boxvr: "\u251C",
			bprime: "\u2035",
			breve: "\u02D8",
			brvbar: "\xA6",
			bscr: "\u{1D4B7}",
			bsemi: "\u204F",
			bsim: "\u223D",
			bsime: "\u22CD",
			bsol: "\\",
			bsolb: "\u29C5",
			bsolhsub: "\u27C8",
			bull: "\u2022",
			bullet: "\u2022",
			bump: "\u224E",
			bumpE: "\u2AAE",
			bumpe: "\u224F",
			bumpeq: "\u224F",
			cacute: "\u0107",
			cap: "\u2229",
			capand: "\u2A44",
			capbrcup: "\u2A49",
			capcap: "\u2A4B",
			capcup: "\u2A47",
			capdot: "\u2A40",
			caps: "\u2229\uFE00",
			caret: "\u2041",
			caron: "\u02C7",
			ccaps: "\u2A4D",
			ccaron: "\u010D",
			ccedil: "\xE7",
			ccirc: "\u0109",
			ccups: "\u2A4C",
			ccupssm: "\u2A50",
			cdot: "\u010B",
			cedil: "\xB8",
			cemptyv: "\u29B2",
			cent: "\xA2",
			centerdot: "\xB7",
			cfr: "\u{1D520}",
			chcy: "\u0447",
			check: "\u2713",
			checkmark: "\u2713",
			chi: "\u03C7",
			cir: "\u25CB",
			cirE: "\u29C3",
			circ: "\u02C6",
			circeq: "\u2257",
			circlearrowleft: "\u21BA",
			circlearrowright: "\u21BB",
			circledR: "\xAE",
			circledS: "\u24C8",
			circledast: "\u229B",
			circledcirc: "\u229A",
			circleddash: "\u229D",
			cire: "\u2257",
			cirfnint: "\u2A10",
			cirmid: "\u2AEF",
			cirscir: "\u29C2",
			clubs: "\u2663",
			clubsuit: "\u2663",
			colon: ":",
			colone: "\u2254",
			coloneq: "\u2254",
			comma: ",",
			commat: "@",
			comp: "\u2201",
			compfn: "\u2218",
			complement: "\u2201",
			complexes: "\u2102",
			cong: "\u2245",
			congdot: "\u2A6D",
			conint: "\u222E",
			copf: "\u{1D554}",
			coprod: "\u2210",
			copy: "\xA9",
			copysr: "\u2117",
			crarr: "\u21B5",
			cross: "\u2717",
			cscr: "\u{1D4B8}",
			csub: "\u2ACF",
			csube: "\u2AD1",
			csup: "\u2AD0",
			csupe: "\u2AD2",
			ctdot: "\u22EF",
			cudarrl: "\u2938",
			cudarrr: "\u2935",
			cuepr: "\u22DE",
			cuesc: "\u22DF",
			cularr: "\u21B6",
			cularrp: "\u293D",
			cup: "\u222A",
			cupbrcap: "\u2A48",
			cupcap: "\u2A46",
			cupcup: "\u2A4A",
			cupdot: "\u228D",
			cupor: "\u2A45",
			cups: "\u222A\uFE00",
			curarr: "\u21B7",
			curarrm: "\u293C",
			curlyeqprec: "\u22DE",
			curlyeqsucc: "\u22DF",
			curlyvee: "\u22CE",
			curlywedge: "\u22CF",
			curren: "\xA4",
			curvearrowleft: "\u21B6",
			curvearrowright: "\u21B7",
			cuvee: "\u22CE",
			cuwed: "\u22CF",
			cwconint: "\u2232",
			cwint: "\u2231",
			cylcty: "\u232D",
			dArr: "\u21D3",
			dHar: "\u2965",
			dagger: "\u2020",
			daleth: "\u2138",
			darr: "\u2193",
			dash: "\u2010",
			dashv: "\u22A3",
			dbkarow: "\u290F",
			dblac: "\u02DD",
			dcaron: "\u010F",
			dcy: "\u0434",
			dd: "\u2146",
			ddagger: "\u2021",
			ddarr: "\u21CA",
			ddotseq: "\u2A77",
			deg: "\xB0",
			delta: "\u03B4",
			demptyv: "\u29B1",
			dfisht: "\u297F",
			dfr: "\u{1D521}",
			dharl: "\u21C3",
			dharr: "\u21C2",
			diam: "\u22C4",
			diamond: "\u22C4",
			diamondsuit: "\u2666",
			diams: "\u2666",
			die: "\xA8",
			digamma: "\u03DD",
			disin: "\u22F2",
			div: "\xF7",
			divide: "\xF7",
			divideontimes: "\u22C7",
			divonx: "\u22C7",
			djcy: "\u0452",
			dlcorn: "\u231E",
			dlcrop: "\u230D",
			dollar: "$",
			dopf: "\u{1D555}",
			dot: "\u02D9",
			doteq: "\u2250",
			doteqdot: "\u2251",
			dotminus: "\u2238",
			dotplus: "\u2214",
			dotsquare: "\u22A1",
			doublebarwedge: "\u2306",
			downarrow: "\u2193",
			downdownarrows: "\u21CA",
			downharpoonleft: "\u21C3",
			downharpoonright: "\u21C2",
			drbkarow: "\u2910",
			drcorn: "\u231F",
			drcrop: "\u230C",
			dscr: "\u{1D4B9}",
			dscy: "\u0455",
			dsol: "\u29F6",
			dstrok: "\u0111",
			dtdot: "\u22F1",
			dtri: "\u25BF",
			dtrif: "\u25BE",
			duarr: "\u21F5",
			duhar: "\u296F",
			dwangle: "\u29A6",
			dzcy: "\u045F",
			dzigrarr: "\u27FF",
			eDDot: "\u2A77",
			eDot: "\u2251",
			eacute: "\xE9",
			easter: "\u2A6E",
			ecaron: "\u011B",
			ecir: "\u2256",
			ecirc: "\xEA",
			ecolon: "\u2255",
			ecy: "\u044D",
			edot: "\u0117",
			ee: "\u2147",
			efDot: "\u2252",
			efr: "\u{1D522}",
			eg: "\u2A9A",
			egrave: "\xE8",
			egs: "\u2A96",
			egsdot: "\u2A98",
			el: "\u2A99",
			elinters: "\u23E7",
			ell: "\u2113",
			els: "\u2A95",
			elsdot: "\u2A97",
			emacr: "\u0113",
			empty: "\u2205",
			emptyset: "\u2205",
			emptyv: "\u2205",
			emsp13: "\u2004",
			emsp14: "\u2005",
			emsp: "\u2003",
			eng: "\u014B",
			ensp: "\u2002",
			eogon: "\u0119",
			eopf: "\u{1D556}",
			epar: "\u22D5",
			eparsl: "\u29E3",
			eplus: "\u2A71",
			epsi: "\u03B5",
			epsilon: "\u03B5",
			epsiv: "\u03F5",
			eqcirc: "\u2256",
			eqcolon: "\u2255",
			eqsim: "\u2242",
			eqslantgtr: "\u2A96",
			eqslantless: "\u2A95",
			equals: "=",
			equest: "\u225F",
			equiv: "\u2261",
			equivDD: "\u2A78",
			eqvparsl: "\u29E5",
			erDot: "\u2253",
			erarr: "\u2971",
			escr: "\u212F",
			esdot: "\u2250",
			esim: "\u2242",
			eta: "\u03B7",
			eth: "\xF0",
			euml: "\xEB",
			euro: "\u20AC",
			excl: "!",
			exist: "\u2203",
			expectation: "\u2130",
			exponentiale: "\u2147",
			fallingdotseq: "\u2252",
			fcy: "\u0444",
			female: "\u2640",
			ffilig: "\uFB03",
			fflig: "\uFB00",
			ffllig: "\uFB04",
			ffr: "\u{1D523}",
			filig: "\uFB01",
			fjlig: "fj",
			flat: "\u266D",
			fllig: "\uFB02",
			fltns: "\u25B1",
			fnof: "\u0192",
			fopf: "\u{1D557}",
			forall: "\u2200",
			fork: "\u22D4",
			forkv: "\u2AD9",
			fpartint: "\u2A0D",
			frac12: "\xBD",
			frac13: "\u2153",
			frac14: "\xBC",
			frac15: "\u2155",
			frac16: "\u2159",
			frac18: "\u215B",
			frac23: "\u2154",
			frac25: "\u2156",
			frac34: "\xBE",
			frac35: "\u2157",
			frac38: "\u215C",
			frac45: "\u2158",
			frac56: "\u215A",
			frac58: "\u215D",
			frac78: "\u215E",
			frasl: "\u2044",
			frown: "\u2322",
			fscr: "\u{1D4BB}",
			gE: "\u2267",
			gEl: "\u2A8C",
			gacute: "\u01F5",
			gamma: "\u03B3",
			gammad: "\u03DD",
			gap: "\u2A86",
			gbreve: "\u011F",
			gcirc: "\u011D",
			gcy: "\u0433",
			gdot: "\u0121",
			ge: "\u2265",
			gel: "\u22DB",
			geq: "\u2265",
			geqq: "\u2267",
			geqslant: "\u2A7E",
			ges: "\u2A7E",
			gescc: "\u2AA9",
			gesdot: "\u2A80",
			gesdoto: "\u2A82",
			gesdotol: "\u2A84",
			gesl: "\u22DB\uFE00",
			gesles: "\u2A94",
			gfr: "\u{1D524}",
			gg: "\u226B",
			ggg: "\u22D9",
			gimel: "\u2137",
			gjcy: "\u0453",
			gl: "\u2277",
			glE: "\u2A92",
			gla: "\u2AA5",
			glj: "\u2AA4",
			gnE: "\u2269",
			gnap: "\u2A8A",
			gnapprox: "\u2A8A",
			gne: "\u2A88",
			gneq: "\u2A88",
			gneqq: "\u2269",
			gnsim: "\u22E7",
			gopf: "\u{1D558}",
			grave: "`",
			gscr: "\u210A",
			gsim: "\u2273",
			gsime: "\u2A8E",
			gsiml: "\u2A90",
			gt: ">",
			gtcc: "\u2AA7",
			gtcir: "\u2A7A",
			gtdot: "\u22D7",
			gtlPar: "\u2995",
			gtquest: "\u2A7C",
			gtrapprox: "\u2A86",
			gtrarr: "\u2978",
			gtrdot: "\u22D7",
			gtreqless: "\u22DB",
			gtreqqless: "\u2A8C",
			gtrless: "\u2277",
			gtrsim: "\u2273",
			gvertneqq: "\u2269\uFE00",
			gvnE: "\u2269\uFE00",
			hArr: "\u21D4",
			hairsp: "\u200A",
			half: "\xBD",
			hamilt: "\u210B",
			hardcy: "\u044A",
			harr: "\u2194",
			harrcir: "\u2948",
			harrw: "\u21AD",
			hbar: "\u210F",
			hcirc: "\u0125",
			hearts: "\u2665",
			heartsuit: "\u2665",
			hellip: "\u2026",
			hercon: "\u22B9",
			hfr: "\u{1D525}",
			hksearow: "\u2925",
			hkswarow: "\u2926",
			hoarr: "\u21FF",
			homtht: "\u223B",
			hookleftarrow: "\u21A9",
			hookrightarrow: "\u21AA",
			hopf: "\u{1D559}",
			horbar: "\u2015",
			hscr: "\u{1D4BD}",
			hslash: "\u210F",
			hstrok: "\u0127",
			hybull: "\u2043",
			hyphen: "\u2010",
			iacute: "\xED",
			ic: "\u2063",
			icirc: "\xEE",
			icy: "\u0438",
			iecy: "\u0435",
			iexcl: "\xA1",
			iff: "\u21D4",
			ifr: "\u{1D526}",
			igrave: "\xEC",
			ii: "\u2148",
			iiiint: "\u2A0C",
			iiint: "\u222D",
			iinfin: "\u29DC",
			iiota: "\u2129",
			ijlig: "\u0133",
			imacr: "\u012B",
			image: "\u2111",
			imagline: "\u2110",
			imagpart: "\u2111",
			imath: "\u0131",
			imof: "\u22B7",
			imped: "\u01B5",
			in: "\u2208",
			incare: "\u2105",
			infin: "\u221E",
			infintie: "\u29DD",
			inodot: "\u0131",
			int: "\u222B",
			intcal: "\u22BA",
			integers: "\u2124",
			intercal: "\u22BA",
			intlarhk: "\u2A17",
			intprod: "\u2A3C",
			iocy: "\u0451",
			iogon: "\u012F",
			iopf: "\u{1D55A}",
			iota: "\u03B9",
			iprod: "\u2A3C",
			iquest: "\xBF",
			iscr: "\u{1D4BE}",
			isin: "\u2208",
			isinE: "\u22F9",
			isindot: "\u22F5",
			isins: "\u22F4",
			isinsv: "\u22F3",
			isinv: "\u2208",
			it: "\u2062",
			itilde: "\u0129",
			iukcy: "\u0456",
			iuml: "\xEF",
			jcirc: "\u0135",
			jcy: "\u0439",
			jfr: "\u{1D527}",
			jmath: "\u0237",
			jopf: "\u{1D55B}",
			jscr: "\u{1D4BF}",
			jsercy: "\u0458",
			jukcy: "\u0454",
			kappa: "\u03BA",
			kappav: "\u03F0",
			kcedil: "\u0137",
			kcy: "\u043A",
			kfr: "\u{1D528}",
			kgreen: "\u0138",
			khcy: "\u0445",
			kjcy: "\u045C",
			kopf: "\u{1D55C}",
			kscr: "\u{1D4C0}",
			lAarr: "\u21DA",
			lArr: "\u21D0",
			lAtail: "\u291B",
			lBarr: "\u290E",
			lE: "\u2266",
			lEg: "\u2A8B",
			lHar: "\u2962",
			lacute: "\u013A",
			laemptyv: "\u29B4",
			lagran: "\u2112",
			lambda: "\u03BB",
			lang: "\u27E8",
			langd: "\u2991",
			langle: "\u27E8",
			lap: "\u2A85",
			laquo: "\xAB",
			larr: "\u2190",
			larrb: "\u21E4",
			larrbfs: "\u291F",
			larrfs: "\u291D",
			larrhk: "\u21A9",
			larrlp: "\u21AB",
			larrpl: "\u2939",
			larrsim: "\u2973",
			larrtl: "\u21A2",
			lat: "\u2AAB",
			latail: "\u2919",
			late: "\u2AAD",
			lates: "\u2AAD\uFE00",
			lbarr: "\u290C",
			lbbrk: "\u2772",
			lbrace: "{",
			lbrack: "[",
			lbrke: "\u298B",
			lbrksld: "\u298F",
			lbrkslu: "\u298D",
			lcaron: "\u013E",
			lcedil: "\u013C",
			lceil: "\u2308",
			lcub: "{",
			lcy: "\u043B",
			ldca: "\u2936",
			ldquo: "\u201C",
			ldquor: "\u201E",
			ldrdhar: "\u2967",
			ldrushar: "\u294B",
			ldsh: "\u21B2",
			le: "\u2264",
			leftarrow: "\u2190",
			leftarrowtail: "\u21A2",
			leftharpoondown: "\u21BD",
			leftharpoonup: "\u21BC",
			leftleftarrows: "\u21C7",
			leftrightarrow: "\u2194",
			leftrightarrows: "\u21C6",
			leftrightharpoons: "\u21CB",
			leftrightsquigarrow: "\u21AD",
			leftthreetimes: "\u22CB",
			leg: "\u22DA",
			leq: "\u2264",
			leqq: "\u2266",
			leqslant: "\u2A7D",
			les: "\u2A7D",
			lescc: "\u2AA8",
			lesdot: "\u2A7F",
			lesdoto: "\u2A81",
			lesdotor: "\u2A83",
			lesg: "\u22DA\uFE00",
			lesges: "\u2A93",
			lessapprox: "\u2A85",
			lessdot: "\u22D6",
			lesseqgtr: "\u22DA",
			lesseqqgtr: "\u2A8B",
			lessgtr: "\u2276",
			lesssim: "\u2272",
			lfisht: "\u297C",
			lfloor: "\u230A",
			lfr: "\u{1D529}",
			lg: "\u2276",
			lgE: "\u2A91",
			lhard: "\u21BD",
			lharu: "\u21BC",
			lharul: "\u296A",
			lhblk: "\u2584",
			ljcy: "\u0459",
			ll: "\u226A",
			llarr: "\u21C7",
			llcorner: "\u231E",
			llhard: "\u296B",
			lltri: "\u25FA",
			lmidot: "\u0140",
			lmoust: "\u23B0",
			lmoustache: "\u23B0",
			lnE: "\u2268",
			lnap: "\u2A89",
			lnapprox: "\u2A89",
			lne: "\u2A87",
			lneq: "\u2A87",
			lneqq: "\u2268",
			lnsim: "\u22E6",
			loang: "\u27EC",
			loarr: "\u21FD",
			lobrk: "\u27E6",
			longleftarrow: "\u27F5",
			longleftrightarrow: "\u27F7",
			longmapsto: "\u27FC",
			longrightarrow: "\u27F6",
			looparrowleft: "\u21AB",
			looparrowright: "\u21AC",
			lopar: "\u2985",
			lopf: "\u{1D55D}",
			loplus: "\u2A2D",
			lotimes: "\u2A34",
			lowast: "\u2217",
			lowbar: "_",
			loz: "\u25CA",
			lozenge: "\u25CA",
			lozf: "\u29EB",
			lpar: "(",
			lparlt: "\u2993",
			lrarr: "\u21C6",
			lrcorner: "\u231F",
			lrhar: "\u21CB",
			lrhard: "\u296D",
			lrm: "\u200E",
			lrtri: "\u22BF",
			lsaquo: "\u2039",
			lscr: "\u{1D4C1}",
			lsh: "\u21B0",
			lsim: "\u2272",
			lsime: "\u2A8D",
			lsimg: "\u2A8F",
			lsqb: "[",
			lsquo: "\u2018",
			lsquor: "\u201A",
			lstrok: "\u0142",
			lt: "<",
			ltcc: "\u2AA6",
			ltcir: "\u2A79",
			ltdot: "\u22D6",
			lthree: "\u22CB",
			ltimes: "\u22C9",
			ltlarr: "\u2976",
			ltquest: "\u2A7B",
			ltrPar: "\u2996",
			ltri: "\u25C3",
			ltrie: "\u22B4",
			ltrif: "\u25C2",
			lurdshar: "\u294A",
			luruhar: "\u2966",
			lvertneqq: "\u2268\uFE00",
			lvnE: "\u2268\uFE00",
			mDDot: "\u223A",
			macr: "\xAF",
			male: "\u2642",
			malt: "\u2720",
			maltese: "\u2720",
			map: "\u21A6",
			mapsto: "\u21A6",
			mapstodown: "\u21A7",
			mapstoleft: "\u21A4",
			mapstoup: "\u21A5",
			marker: "\u25AE",
			mcomma: "\u2A29",
			mcy: "\u043C",
			mdash: "\u2014",
			measuredangle: "\u2221",
			mfr: "\u{1D52A}",
			mho: "\u2127",
			micro: "\xB5",
			mid: "\u2223",
			midast: "*",
			midcir: "\u2AF0",
			middot: "\xB7",
			minus: "\u2212",
			minusb: "\u229F",
			minusd: "\u2238",
			minusdu: "\u2A2A",
			mlcp: "\u2ADB",
			mldr: "\u2026",
			mnplus: "\u2213",
			models: "\u22A7",
			mopf: "\u{1D55E}",
			mp: "\u2213",
			mscr: "\u{1D4C2}",
			mstpos: "\u223E",
			mu: "\u03BC",
			multimap: "\u22B8",
			mumap: "\u22B8",
			nGg: "\u22D9\u0338",
			nGt: "\u226B\u20D2",
			nGtv: "\u226B\u0338",
			nLeftarrow: "\u21CD",
			nLeftrightarrow: "\u21CE",
			nLl: "\u22D8\u0338",
			nLt: "\u226A\u20D2",
			nLtv: "\u226A\u0338",
			nRightarrow: "\u21CF",
			nVDash: "\u22AF",
			nVdash: "\u22AE",
			nabla: "\u2207",
			nacute: "\u0144",
			nang: "\u2220\u20D2",
			nap: "\u2249",
			napE: "\u2A70\u0338",
			napid: "\u224B\u0338",
			napos: "\u0149",
			napprox: "\u2249",
			natur: "\u266E",
			natural: "\u266E",
			naturals: "\u2115",
			nbsp: "\xA0",
			nbump: "\u224E\u0338",
			nbumpe: "\u224F\u0338",
			ncap: "\u2A43",
			ncaron: "\u0148",
			ncedil: "\u0146",
			ncong: "\u2247",
			ncongdot: "\u2A6D\u0338",
			ncup: "\u2A42",
			ncy: "\u043D",
			ndash: "\u2013",
			ne: "\u2260",
			neArr: "\u21D7",
			nearhk: "\u2924",
			nearr: "\u2197",
			nearrow: "\u2197",
			nedot: "\u2250\u0338",
			nequiv: "\u2262",
			nesear: "\u2928",
			nesim: "\u2242\u0338",
			nexist: "\u2204",
			nexists: "\u2204",
			nfr: "\u{1D52B}",
			ngE: "\u2267\u0338",
			nge: "\u2271",
			ngeq: "\u2271",
			ngeqq: "\u2267\u0338",
			ngeqslant: "\u2A7E\u0338",
			nges: "\u2A7E\u0338",
			ngsim: "\u2275",
			ngt: "\u226F",
			ngtr: "\u226F",
			nhArr: "\u21CE",
			nharr: "\u21AE",
			nhpar: "\u2AF2",
			ni: "\u220B",
			nis: "\u22FC",
			nisd: "\u22FA",
			niv: "\u220B",
			njcy: "\u045A",
			nlArr: "\u21CD",
			nlE: "\u2266\u0338",
			nlarr: "\u219A",
			nldr: "\u2025",
			nle: "\u2270",
			nleftarrow: "\u219A",
			nleftrightarrow: "\u21AE",
			nleq: "\u2270",
			nleqq: "\u2266\u0338",
			nleqslant: "\u2A7D\u0338",
			nles: "\u2A7D\u0338",
			nless: "\u226E",
			nlsim: "\u2274",
			nlt: "\u226E",
			nltri: "\u22EA",
			nltrie: "\u22EC",
			nmid: "\u2224",
			nopf: "\u{1D55F}",
			not: "\xAC",
			notin: "\u2209",
			notinE: "\u22F9\u0338",
			notindot: "\u22F5\u0338",
			notinva: "\u2209",
			notinvb: "\u22F7",
			notinvc: "\u22F6",
			notni: "\u220C",
			notniva: "\u220C",
			notnivb: "\u22FE",
			notnivc: "\u22FD",
			npar: "\u2226",
			nparallel: "\u2226",
			nparsl: "\u2AFD\u20E5",
			npart: "\u2202\u0338",
			npolint: "\u2A14",
			npr: "\u2280",
			nprcue: "\u22E0",
			npre: "\u2AAF\u0338",
			nprec: "\u2280",
			npreceq: "\u2AAF\u0338",
			nrArr: "\u21CF",
			nrarr: "\u219B",
			nrarrc: "\u2933\u0338",
			nrarrw: "\u219D\u0338",
			nrightarrow: "\u219B",
			nrtri: "\u22EB",
			nrtrie: "\u22ED",
			nsc: "\u2281",
			nsccue: "\u22E1",
			nsce: "\u2AB0\u0338",
			nscr: "\u{1D4C3}",
			nshortmid: "\u2224",
			nshortparallel: "\u2226",
			nsim: "\u2241",
			nsime: "\u2244",
			nsimeq: "\u2244",
			nsmid: "\u2224",
			nspar: "\u2226",
			nsqsube: "\u22E2",
			nsqsupe: "\u22E3",
			nsub: "\u2284",
			nsubE: "\u2AC5\u0338",
			nsube: "\u2288",
			nsubset: "\u2282\u20D2",
			nsubseteq: "\u2288",
			nsubseteqq: "\u2AC5\u0338",
			nsucc: "\u2281",
			nsucceq: "\u2AB0\u0338",
			nsup: "\u2285",
			nsupE: "\u2AC6\u0338",
			nsupe: "\u2289",
			nsupset: "\u2283\u20D2",
			nsupseteq: "\u2289",
			nsupseteqq: "\u2AC6\u0338",
			ntgl: "\u2279",
			ntilde: "\xF1",
			ntlg: "\u2278",
			ntriangleleft: "\u22EA",
			ntrianglelefteq: "\u22EC",
			ntriangleright: "\u22EB",
			ntrianglerighteq: "\u22ED",
			nu: "\u03BD",
			num: "#",
			numero: "\u2116",
			numsp: "\u2007",
			nvDash: "\u22AD",
			nvHarr: "\u2904",
			nvap: "\u224D\u20D2",
			nvdash: "\u22AC",
			nvge: "\u2265\u20D2",
			nvgt: ">\u20D2",
			nvinfin: "\u29DE",
			nvlArr: "\u2902",
			nvle: "\u2264\u20D2",
			nvlt: "<\u20D2",
			nvltrie: "\u22B4\u20D2",
			nvrArr: "\u2903",
			nvrtrie: "\u22B5\u20D2",
			nvsim: "\u223C\u20D2",
			nwArr: "\u21D6",
			nwarhk: "\u2923",
			nwarr: "\u2196",
			nwarrow: "\u2196",
			nwnear: "\u2927",
			oS: "\u24C8",
			oacute: "\xF3",
			oast: "\u229B",
			ocir: "\u229A",
			ocirc: "\xF4",
			ocy: "\u043E",
			odash: "\u229D",
			odblac: "\u0151",
			odiv: "\u2A38",
			odot: "\u2299",
			odsold: "\u29BC",
			oelig: "\u0153",
			ofcir: "\u29BF",
			ofr: "\u{1D52C}",
			ogon: "\u02DB",
			ograve: "\xF2",
			ogt: "\u29C1",
			ohbar: "\u29B5",
			ohm: "\u03A9",
			oint: "\u222E",
			olarr: "\u21BA",
			olcir: "\u29BE",
			olcross: "\u29BB",
			oline: "\u203E",
			olt: "\u29C0",
			omacr: "\u014D",
			omega: "\u03C9",
			omicron: "\u03BF",
			omid: "\u29B6",
			ominus: "\u2296",
			oopf: "\u{1D560}",
			opar: "\u29B7",
			operp: "\u29B9",
			oplus: "\u2295",
			or: "\u2228",
			orarr: "\u21BB",
			ord: "\u2A5D",
			order: "\u2134",
			orderof: "\u2134",
			ordf: "\xAA",
			ordm: "\xBA",
			origof: "\u22B6",
			oror: "\u2A56",
			orslope: "\u2A57",
			orv: "\u2A5B",
			oscr: "\u2134",
			oslash: "\xF8",
			osol: "\u2298",
			otilde: "\xF5",
			otimes: "\u2297",
			otimesas: "\u2A36",
			ouml: "\xF6",
			ovbar: "\u233D",
			par: "\u2225",
			para: "\xB6",
			parallel: "\u2225",
			parsim: "\u2AF3",
			parsl: "\u2AFD",
			part: "\u2202",
			pcy: "\u043F",
			percnt: "%",
			period: ".",
			permil: "\u2030",
			perp: "\u22A5",
			pertenk: "\u2031",
			pfr: "\u{1D52D}",
			phi: "\u03C6",
			phiv: "\u03D5",
			phmmat: "\u2133",
			phone: "\u260E",
			pi: "\u03C0",
			pitchfork: "\u22D4",
			piv: "\u03D6",
			planck: "\u210F",
			planckh: "\u210E",
			plankv: "\u210F",
			plus: "+",
			plusacir: "\u2A23",
			plusb: "\u229E",
			pluscir: "\u2A22",
			plusdo: "\u2214",
			plusdu: "\u2A25",
			pluse: "\u2A72",
			plusmn: "\xB1",
			plussim: "\u2A26",
			plustwo: "\u2A27",
			pm: "\xB1",
			pointint: "\u2A15",
			popf: "\u{1D561}",
			pound: "\xA3",
			pr: "\u227A",
			prE: "\u2AB3",
			prap: "\u2AB7",
			prcue: "\u227C",
			pre: "\u2AAF",
			prec: "\u227A",
			precapprox: "\u2AB7",
			preccurlyeq: "\u227C",
			preceq: "\u2AAF",
			precnapprox: "\u2AB9",
			precneqq: "\u2AB5",
			precnsim: "\u22E8",
			precsim: "\u227E",
			prime: "\u2032",
			primes: "\u2119",
			prnE: "\u2AB5",
			prnap: "\u2AB9",
			prnsim: "\u22E8",
			prod: "\u220F",
			profalar: "\u232E",
			profline: "\u2312",
			profsurf: "\u2313",
			prop: "\u221D",
			propto: "\u221D",
			prsim: "\u227E",
			prurel: "\u22B0",
			pscr: "\u{1D4C5}",
			psi: "\u03C8",
			puncsp: "\u2008",
			qfr: "\u{1D52E}",
			qint: "\u2A0C",
			qopf: "\u{1D562}",
			qprime: "\u2057",
			qscr: "\u{1D4C6}",
			quaternions: "\u210D",
			quatint: "\u2A16",
			quest: "?",
			questeq: "\u225F",
			quot: '"',
			rAarr: "\u21DB",
			rArr: "\u21D2",
			rAtail: "\u291C",
			rBarr: "\u290F",
			rHar: "\u2964",
			race: "\u223D\u0331",
			racute: "\u0155",
			radic: "\u221A",
			raemptyv: "\u29B3",
			rang: "\u27E9",
			rangd: "\u2992",
			range: "\u29A5",
			rangle: "\u27E9",
			raquo: "\xBB",
			rarr: "\u2192",
			rarrap: "\u2975",
			rarrb: "\u21E5",
			rarrbfs: "\u2920",
			rarrc: "\u2933",
			rarrfs: "\u291E",
			rarrhk: "\u21AA",
			rarrlp: "\u21AC",
			rarrpl: "\u2945",
			rarrsim: "\u2974",
			rarrtl: "\u21A3",
			rarrw: "\u219D",
			ratail: "\u291A",
			ratio: "\u2236",
			rationals: "\u211A",
			rbarr: "\u290D",
			rbbrk: "\u2773",
			rbrace: "}",
			rbrack: "]",
			rbrke: "\u298C",
			rbrksld: "\u298E",
			rbrkslu: "\u2990",
			rcaron: "\u0159",
			rcedil: "\u0157",
			rceil: "\u2309",
			rcub: "}",
			rcy: "\u0440",
			rdca: "\u2937",
			rdldhar: "\u2969",
			rdquo: "\u201D",
			rdquor: "\u201D",
			rdsh: "\u21B3",
			real: "\u211C",
			realine: "\u211B",
			realpart: "\u211C",
			reals: "\u211D",
			rect: "\u25AD",
			reg: "\xAE",
			rfisht: "\u297D",
			rfloor: "\u230B",
			rfr: "\u{1D52F}",
			rhard: "\u21C1",
			rharu: "\u21C0",
			rharul: "\u296C",
			rho: "\u03C1",
			rhov: "\u03F1",
			rightarrow: "\u2192",
			rightarrowtail: "\u21A3",
			rightharpoondown: "\u21C1",
			rightharpoonup: "\u21C0",
			rightleftarrows: "\u21C4",
			rightleftharpoons: "\u21CC",
			rightrightarrows: "\u21C9",
			rightsquigarrow: "\u219D",
			rightthreetimes: "\u22CC",
			ring: "\u02DA",
			risingdotseq: "\u2253",
			rlarr: "\u21C4",
			rlhar: "\u21CC",
			rlm: "\u200F",
			rmoust: "\u23B1",
			rmoustache: "\u23B1",
			rnmid: "\u2AEE",
			roang: "\u27ED",
			roarr: "\u21FE",
			robrk: "\u27E7",
			ropar: "\u2986",
			ropf: "\u{1D563}",
			roplus: "\u2A2E",
			rotimes: "\u2A35",
			rpar: ")",
			rpargt: "\u2994",
			rppolint: "\u2A12",
			rrarr: "\u21C9",
			rsaquo: "\u203A",
			rscr: "\u{1D4C7}",
			rsh: "\u21B1",
			rsqb: "]",
			rsquo: "\u2019",
			rsquor: "\u2019",
			rthree: "\u22CC",
			rtimes: "\u22CA",
			rtri: "\u25B9",
			rtrie: "\u22B5",
			rtrif: "\u25B8",
			rtriltri: "\u29CE",
			ruluhar: "\u2968",
			rx: "\u211E",
			sacute: "\u015B",
			sbquo: "\u201A",
			sc: "\u227B",
			scE: "\u2AB4",
			scap: "\u2AB8",
			scaron: "\u0161",
			sccue: "\u227D",
			sce: "\u2AB0",
			scedil: "\u015F",
			scirc: "\u015D",
			scnE: "\u2AB6",
			scnap: "\u2ABA",
			scnsim: "\u22E9",
			scpolint: "\u2A13",
			scsim: "\u227F",
			scy: "\u0441",
			sdot: "\u22C5",
			sdotb: "\u22A1",
			sdote: "\u2A66",
			seArr: "\u21D8",
			searhk: "\u2925",
			searr: "\u2198",
			searrow: "\u2198",
			sect: "\xA7",
			semi: ";",
			seswar: "\u2929",
			setminus: "\u2216",
			setmn: "\u2216",
			sext: "\u2736",
			sfr: "\u{1D530}",
			sfrown: "\u2322",
			sharp: "\u266F",
			shchcy: "\u0449",
			shcy: "\u0448",
			shortmid: "\u2223",
			shortparallel: "\u2225",
			shy: "\xAD",
			sigma: "\u03C3",
			sigmaf: "\u03C2",
			sigmav: "\u03C2",
			sim: "\u223C",
			simdot: "\u2A6A",
			sime: "\u2243",
			simeq: "\u2243",
			simg: "\u2A9E",
			simgE: "\u2AA0",
			siml: "\u2A9D",
			simlE: "\u2A9F",
			simne: "\u2246",
			simplus: "\u2A24",
			simrarr: "\u2972",
			slarr: "\u2190",
			smallsetminus: "\u2216",
			smashp: "\u2A33",
			smeparsl: "\u29E4",
			smid: "\u2223",
			smile: "\u2323",
			smt: "\u2AAA",
			smte: "\u2AAC",
			smtes: "\u2AAC\uFE00",
			softcy: "\u044C",
			sol: "/",
			solb: "\u29C4",
			solbar: "\u233F",
			sopf: "\u{1D564}",
			spades: "\u2660",
			spadesuit: "\u2660",
			spar: "\u2225",
			sqcap: "\u2293",
			sqcaps: "\u2293\uFE00",
			sqcup: "\u2294",
			sqcups: "\u2294\uFE00",
			sqsub: "\u228F",
			sqsube: "\u2291",
			sqsubset: "\u228F",
			sqsubseteq: "\u2291",
			sqsup: "\u2290",
			sqsupe: "\u2292",
			sqsupset: "\u2290",
			sqsupseteq: "\u2292",
			squ: "\u25A1",
			square: "\u25A1",
			squarf: "\u25AA",
			squf: "\u25AA",
			srarr: "\u2192",
			sscr: "\u{1D4C8}",
			ssetmn: "\u2216",
			ssmile: "\u2323",
			sstarf: "\u22C6",
			star: "\u2606",
			starf: "\u2605",
			straightepsilon: "\u03F5",
			straightphi: "\u03D5",
			strns: "\xAF",
			sub: "\u2282",
			subE: "\u2AC5",
			subdot: "\u2ABD",
			sube: "\u2286",
			subedot: "\u2AC3",
			submult: "\u2AC1",
			subnE: "\u2ACB",
			subne: "\u228A",
			subplus: "\u2ABF",
			subrarr: "\u2979",
			subset: "\u2282",
			subseteq: "\u2286",
			subseteqq: "\u2AC5",
			subsetneq: "\u228A",
			subsetneqq: "\u2ACB",
			subsim: "\u2AC7",
			subsub: "\u2AD5",
			subsup: "\u2AD3",
			succ: "\u227B",
			succapprox: "\u2AB8",
			succcurlyeq: "\u227D",
			succeq: "\u2AB0",
			succnapprox: "\u2ABA",
			succneqq: "\u2AB6",
			succnsim: "\u22E9",
			succsim: "\u227F",
			sum: "\u2211",
			sung: "\u266A",
			sup1: "\xB9",
			sup2: "\xB2",
			sup3: "\xB3",
			sup: "\u2283",
			supE: "\u2AC6",
			supdot: "\u2ABE",
			supdsub: "\u2AD8",
			supe: "\u2287",
			supedot: "\u2AC4",
			suphsol: "\u27C9",
			suphsub: "\u2AD7",
			suplarr: "\u297B",
			supmult: "\u2AC2",
			supnE: "\u2ACC",
			supne: "\u228B",
			supplus: "\u2AC0",
			supset: "\u2283",
			supseteq: "\u2287",
			supseteqq: "\u2AC6",
			supsetneq: "\u228B",
			supsetneqq: "\u2ACC",
			supsim: "\u2AC8",
			supsub: "\u2AD4",
			supsup: "\u2AD6",
			swArr: "\u21D9",
			swarhk: "\u2926",
			swarr: "\u2199",
			swarrow: "\u2199",
			swnwar: "\u292A",
			szlig: "\xDF",
			target: "\u2316",
			tau: "\u03C4",
			tbrk: "\u23B4",
			tcaron: "\u0165",
			tcedil: "\u0163",
			tcy: "\u0442",
			tdot: "\u20DB",
			telrec: "\u2315",
			tfr: "\u{1D531}",
			there4: "\u2234",
			therefore: "\u2234",
			theta: "\u03B8",
			thetasym: "\u03D1",
			thetav: "\u03D1",
			thickapprox: "\u2248",
			thicksim: "\u223C",
			thinsp: "\u2009",
			thkap: "\u2248",
			thksim: "\u223C",
			thorn: "\xFE",
			tilde: "\u02DC",
			times: "\xD7",
			timesb: "\u22A0",
			timesbar: "\u2A31",
			timesd: "\u2A30",
			tint: "\u222D",
			toea: "\u2928",
			top: "\u22A4",
			topbot: "\u2336",
			topcir: "\u2AF1",
			topf: "\u{1D565}",
			topfork: "\u2ADA",
			tosa: "\u2929",
			tprime: "\u2034",
			trade: "\u2122",
			triangle: "\u25B5",
			triangledown: "\u25BF",
			triangleleft: "\u25C3",
			trianglelefteq: "\u22B4",
			triangleq: "\u225C",
			triangleright: "\u25B9",
			trianglerighteq: "\u22B5",
			tridot: "\u25EC",
			trie: "\u225C",
			triminus: "\u2A3A",
			triplus: "\u2A39",
			trisb: "\u29CD",
			tritime: "\u2A3B",
			trpezium: "\u23E2",
			tscr: "\u{1D4C9}",
			tscy: "\u0446",
			tshcy: "\u045B",
			tstrok: "\u0167",
			twixt: "\u226C",
			twoheadleftarrow: "\u219E",
			twoheadrightarrow: "\u21A0",
			uArr: "\u21D1",
			uHar: "\u2963",
			uacute: "\xFA",
			uarr: "\u2191",
			ubrcy: "\u045E",
			ubreve: "\u016D",
			ucirc: "\xFB",
			ucy: "\u0443",
			udarr: "\u21C5",
			udblac: "\u0171",
			udhar: "\u296E",
			ufisht: "\u297E",
			ufr: "\u{1D532}",
			ugrave: "\xF9",
			uharl: "\u21BF",
			uharr: "\u21BE",
			uhblk: "\u2580",
			ulcorn: "\u231C",
			ulcorner: "\u231C",
			ulcrop: "\u230F",
			ultri: "\u25F8",
			umacr: "\u016B",
			uml: "\xA8",
			uogon: "\u0173",
			uopf: "\u{1D566}",
			uparrow: "\u2191",
			updownarrow: "\u2195",
			upharpoonleft: "\u21BF",
			upharpoonright: "\u21BE",
			uplus: "\u228E",
			upsi: "\u03C5",
			upsih: "\u03D2",
			upsilon: "\u03C5",
			upuparrows: "\u21C8",
			urcorn: "\u231D",
			urcorner: "\u231D",
			urcrop: "\u230E",
			uring: "\u016F",
			urtri: "\u25F9",
			uscr: "\u{1D4CA}",
			utdot: "\u22F0",
			utilde: "\u0169",
			utri: "\u25B5",
			utrif: "\u25B4",
			uuarr: "\u21C8",
			uuml: "\xFC",
			uwangle: "\u29A7",
			vArr: "\u21D5",
			vBar: "\u2AE8",
			vBarv: "\u2AE9",
			vDash: "\u22A8",
			vangrt: "\u299C",
			varepsilon: "\u03F5",
			varkappa: "\u03F0",
			varnothing: "\u2205",
			varphi: "\u03D5",
			varpi: "\u03D6",
			varpropto: "\u221D",
			varr: "\u2195",
			varrho: "\u03F1",
			varsigma: "\u03C2",
			varsubsetneq: "\u228A\uFE00",
			varsubsetneqq: "\u2ACB\uFE00",
			varsupsetneq: "\u228B\uFE00",
			varsupsetneqq: "\u2ACC\uFE00",
			vartheta: "\u03D1",
			vartriangleleft: "\u22B2",
			vartriangleright: "\u22B3",
			vcy: "\u0432",
			vdash: "\u22A2",
			vee: "\u2228",
			veebar: "\u22BB",
			veeeq: "\u225A",
			vellip: "\u22EE",
			verbar: "|",
			vert: "|",
			vfr: "\u{1D533}",
			vltri: "\u22B2",
			vnsub: "\u2282\u20D2",
			vnsup: "\u2283\u20D2",
			vopf: "\u{1D567}",
			vprop: "\u221D",
			vrtri: "\u22B3",
			vscr: "\u{1D4CB}",
			vsubnE: "\u2ACB\uFE00",
			vsubne: "\u228A\uFE00",
			vsupnE: "\u2ACC\uFE00",
			vsupne: "\u228B\uFE00",
			vzigzag: "\u299A",
			wcirc: "\u0175",
			wedbar: "\u2A5F",
			wedge: "\u2227",
			wedgeq: "\u2259",
			weierp: "\u2118",
			wfr: "\u{1D534}",
			wopf: "\u{1D568}",
			wp: "\u2118",
			wr: "\u2240",
			wreath: "\u2240",
			wscr: "\u{1D4CC}",
			xcap: "\u22C2",
			xcirc: "\u25EF",
			xcup: "\u22C3",
			xdtri: "\u25BD",
			xfr: "\u{1D535}",
			xhArr: "\u27FA",
			xharr: "\u27F7",
			xi: "\u03BE",
			xlArr: "\u27F8",
			xlarr: "\u27F5",
			xmap: "\u27FC",
			xnis: "\u22FB",
			xodot: "\u2A00",
			xopf: "\u{1D569}",
			xoplus: "\u2A01",
			xotime: "\u2A02",
			xrArr: "\u27F9",
			xrarr: "\u27F6",
			xscr: "\u{1D4CD}",
			xsqcup: "\u2A06",
			xuplus: "\u2A04",
			xutri: "\u25B3",
			xvee: "\u22C1",
			xwedge: "\u22C0",
			yacute: "\xFD",
			yacy: "\u044F",
			ycirc: "\u0177",
			ycy: "\u044B",
			yen: "\xA5",
			yfr: "\u{1D536}",
			yicy: "\u0457",
			yopf: "\u{1D56A}",
			yscr: "\u{1D4CE}",
			yucy: "\u044E",
			yuml: "\xFF",
			zacute: "\u017A",
			zcaron: "\u017E",
			zcy: "\u0437",
			zdot: "\u017C",
			zeetrf: "\u2128",
			zeta: "\u03B6",
			zfr: "\u{1D537}",
			zhcy: "\u0436",
			zigrarr: "\u21DD",
			zopf: "\u{1D56B}",
			zscr: "\u{1D4CF}",
			zwj: "\u200D",
			zwnj: "\u200C",
		},
		up = {
			0: 65533,
			128: 8364,
			130: 8218,
			131: 402,
			132: 8222,
			133: 8230,
			134: 8224,
			135: 8225,
			136: 710,
			137: 8240,
			138: 352,
			139: 8249,
			140: 338,
			142: 381,
			145: 8216,
			146: 8217,
			147: 8220,
			148: 8221,
			149: 8226,
			150: 8211,
			151: 8212,
			152: 732,
			153: 8482,
			154: 353,
			155: 8250,
			156: 339,
			158: 382,
			159: 376,
		};
	function JE(e) {
		return e.replace(/&(?:[a-zA-Z]+|#[xX][\da-fA-F]+|#\d+);/g, (t) => {
			if (t.charAt(1) === "#") {
				let n = t.charAt(2),
					i =
						n === "X" || n === "x"
							? parseInt(t.slice(3), 16)
							: parseInt(t.slice(2), 10);
				return ZE(i);
			}
			return QE[t.slice(1, -1)] || t;
		});
	}
	function ZE(e) {
		return (e >= 55296 && e <= 57343) || e > 1114111
			? "\uFFFD"
			: (e in up && (e = up[e]), String.fromCodePoint(e));
	}
	function $E(e, t) {
		return (
			(e.startPos = e.tokenPos = e.index),
			(e.startColumn = e.colPos = e.column),
			(e.startLine = e.linePos = e.line),
			(e.token = re[e.currentChar] & 8192 ? e4(e, t) : Tp(e, t, 0)),
			e.token
		);
	}
	function e4(e, t) {
		let n = e.currentChar,
			i = P(e),
			a = e.index;
		for (; i !== n; ) e.index >= e.end && x(e, 14), (i = P(e));
		return (
			i !== n && x(e, 14),
			(e.tokenValue = e.source.slice(a, e.index)),
			P(e),
			t & 512 && (e.tokenRaw = e.source.slice(e.tokenPos, e.index)),
			134283267
		);
	}
	function bn(e, t) {
		if (
			((e.startPos = e.tokenPos = e.index),
			(e.startColumn = e.colPos = e.column),
			(e.startLine = e.linePos = e.line),
			e.index >= e.end)
		)
			return (e.token = 1048576);
		switch (Ap[e.source.charCodeAt(e.index)]) {
			case 8456258: {
				P(e),
					e.currentChar === 47
						? (P(e), (e.token = 25))
						: (e.token = 8456258);
				break;
			}
			case 2162700: {
				P(e), (e.token = 2162700);
				break;
			}
			default: {
				let i = 0;
				for (; e.index < e.end; ) {
					let o = re[e.source.charCodeAt(e.index)];
					if (
						(o & 1024
							? ((i |= 5), hn(e))
							: o & 2048
								? (Lu(e, i), (i = (i & -5) | 1))
								: P(e),
						re[e.currentChar] & 16384)
					)
						break;
				}
				let a = e.source.slice(e.tokenPos, e.index);
				t & 512 && (e.tokenRaw = a),
					(e.tokenValue = JE(a)),
					(e.token = 138);
			}
		}
		return e.token;
	}
	function Du(e) {
		if ((e.token & 143360) === 143360) {
			let { index: t } = e,
				n = e.currentChar;
			for (; re[n] & 32770; ) n = P(e);
			e.tokenValue += e.source.slice(t, e.index);
		}
		return (e.token = 208897), e.token;
	}
	function lt(e, t, n) {
		!(e.flags & 1) &&
			(e.token & 1048576) !== 1048576 &&
			!n &&
			x(e, 28, De[e.token & 255]),
			oe(e, t, 1074790417) || e.onInsertedSemicolon?.(e.startPos);
	}
	function Cp(e, t, n, i) {
		return t - n < 13 &&
			i === "use strict" &&
			((e.token & 1048576) === 1048576 || e.flags & 1)
			? 1
			: 0;
	}
	function Ou(e, t, n) {
		return e.token !== n ? 0 : (U(e, t), 1);
	}
	function oe(e, t, n) {
		return e.token !== n ? !1 : (U(e, t), !0);
	}
	function X(e, t, n) {
		e.token !== n && x(e, 23, De[n & 255]), U(e, t);
	}
	function Dt(e, t) {
		switch (t.type) {
			case "ArrayExpression":
				t.type = "ArrayPattern";
				let n = t.elements;
				for (let a = 0, o = n.length; a < o; ++a) {
					let s = n[a];
					s && Dt(e, s);
				}
				return;
			case "ObjectExpression":
				t.type = "ObjectPattern";
				let i = t.properties;
				for (let a = 0, o = i.length; a < o; ++a) Dt(e, i[a]);
				return;
			case "AssignmentExpression":
				(t.type = "AssignmentPattern"),
					t.operator !== "=" && x(e, 69),
					delete t.operator,
					Dt(e, t.left);
				return;
			case "Property":
				Dt(e, t.value);
				return;
			case "SpreadElement":
				(t.type = "RestElement"), Dt(e, t.argument);
		}
	}
	function Ja(e, t, n, i, a) {
		t & 1024 &&
			((i & 36864) === 36864 && x(e, 115),
			!a && (i & 537079808) === 537079808 && x(e, 116)),
			(i & 20480) === 20480 && x(e, 100),
			n & 24 && i === 241739 && x(e, 98),
			t & 4196352 && i === 209008 && x(e, 96),
			t & 2098176 && i === 241773 && x(e, 95, "yield");
	}
	function yp(e, t, n) {
		t & 1024 &&
			((n & 36864) === 36864 && x(e, 115),
			(n & 537079808) === 537079808 && x(e, 116),
			n === 122 && x(e, 93),
			n === 121 && x(e, 93)),
			(n & 20480) === 20480 && x(e, 100),
			t & 4196352 && n === 209008 && x(e, 96),
			t & 2098176 && n === 241773 && x(e, 95, "yield");
	}
	function kp(e, t, n) {
		return (
			n === 209008 && (t & 4196352 && x(e, 96), (e.destructible |= 128)),
			n === 241773 && t & 2097152 && x(e, 95, "yield"),
			(n & 20480) === 20480 || (n & 36864) === 36864 || n == 122
		);
	}
	function t4(e) {
		return e.property ? e.property.type === "PrivateIdentifier" : !1;
	}
	function _p(e, t, n, i) {
		for (; t; ) {
			if (t["$" + n]) return i && x(e, 134), 1;
			i && t.loop && (i = 0), (t = t.$);
		}
		return 0;
	}
	function n4(e, t, n) {
		let i = t;
		for (; i; ) i["$" + n] && x(e, 133, n), (i = i.$);
		t["$" + n] = 1;
	}
	function I(e, t, n, i, a, o) {
		return (
			t & 2 &&
				((o.start = n),
				(o.end = e.startPos),
				(o.range = [n, e.startPos])),
			t & 4 &&
				((o.loc = {
					start: { line: i, column: a },
					end: { line: e.startLine, column: e.startColumn },
				}),
				e.sourceFile && (o.loc.source = e.sourceFile)),
			o
		);
	}
	function Za(e) {
		switch (e.type) {
			case "JSXIdentifier":
				return e.name;
			case "JSXNamespacedName":
				return e.namespace + ":" + e.name;
			case "JSXMemberExpression":
				return Za(e.object) + "." + Za(e.property);
		}
	}
	function no(e, t, n) {
		let i = Oe(gn(), 1024);
		return nn(e, t, i, n, 1, 0), i;
	}
	function wu(e, t, ...n) {
		let { index: i, line: a, column: o } = e;
		return { type: t, params: n, index: i, line: a, column: o };
	}
	function gn() {
		return { parent: void 0, type: 2 };
	}
	function Oe(e, t) {
		return { parent: e, type: t, scopeError: void 0 };
	}
	function Yt(e, t, n, i, a, o) {
		a & 4 ? Sp(e, t, n, i, a) : nn(e, t, n, i, a, o), o & 64 && fn(e, i);
	}
	function nn(e, t, n, i, a, o) {
		let s = n["#" + i];
		s &&
			!(s & 2) &&
			(a & 1
				? (n.scopeError = wu(e, 141, i))
				: (t & 256 && s & 64 && o & 2) || x(e, 141, i)),
			n.type & 128 &&
				n.parent["#" + i] &&
				!(n.parent["#" + i] & 2) &&
				x(e, 141, i),
			n.type & 1024 &&
				s &&
				!(s & 2) &&
				a & 1 &&
				(n.scopeError = wu(e, 141, i)),
			n.type & 64 && n.parent["#" + i] & 768 && x(e, 154, i),
			(n["#" + i] = a);
	}
	function Sp(e, t, n, i, a) {
		let o = n;
		for (; o && !(o.type & 256); ) {
			let s = o["#" + i];
			s & 248 &&
				((t & 256 &&
					!(t & 1024) &&
					((a & 128 && s & 68) || (s & 128 && a & 68))) ||
					x(e, 141, i)),
				o === n && s & 1 && a & 1 && (o.scopeError = wu(e, 141, i)),
				s & 768 &&
					(!(s & 512) || !(t & 256) || t & 1024) &&
					x(e, 141, i),
				(o["#" + i] = a),
				(o = o.parent);
		}
	}
	function fn(e, t) {
		e.exportedNames !== void 0 &&
			t !== "" &&
			(e.exportedNames["#" + t] && x(e, 142, t),
			(e.exportedNames["#" + t] = 1));
	}
	function i4(e, t) {
		e.exportedBindings !== void 0 &&
			t !== "" &&
			(e.exportedBindings["#" + t] = 1);
	}
	function a4(e, t) {
		return function (n, i, a, o, s) {
			let r = { type: n, value: i };
			e & 2 && ((r.start = a), (r.end = o), (r.range = [a, o])),
				e & 4 && (r.loc = s),
				t.push(r);
		};
	}
	function o4(e, t) {
		return function (n, i, a, o) {
			let s = { token: n };
			e & 2 && ((s.start = i), (s.end = a), (s.range = [i, a])),
				e & 4 && (s.loc = o),
				t.push(s);
		};
	}
	function Bu(e, t) {
		return e & 2098176
			? (e & 2048 && t === 209008) || (e & 2097152 && t === 241773)
				? !1
				: (t & 143360) === 143360 || (t & 12288) === 12288
			: (t & 143360) === 143360 ||
					(t & 12288) === 12288 ||
					(t & 36864) === 36864;
	}
	function Fu(e, t, n, i) {
		(n & 537079808) === 537079808 &&
			(t & 1024 && x(e, 116), i && (e.flags |= 512)),
			Bu(t, n) || x(e, 0);
	}
	function s4(e, t, n, i, a) {
		return {
			source: e,
			flags: 0,
			index: 0,
			line: 1,
			column: 0,
			startPos: 0,
			end: e.length,
			tokenPos: 0,
			startColumn: 0,
			colPos: 0,
			linePos: 1,
			startLine: 1,
			sourceFile: t,
			tokenValue: "",
			token: 1048576,
			tokenRaw: "",
			tokenRegExp: void 0,
			currentChar: e.charCodeAt(0),
			exportedNames: [],
			exportedBindings: [],
			assignable: 1,
			destructible: 0,
			onComment: n,
			onToken: i,
			onInsertedSemicolon: a,
			leadingDecorators: [],
		};
	}
	function r4(e, t, n) {
		let i = "",
			a,
			o,
			s;
		t != null &&
			(t.module && (n |= 3072),
			t.next && (n |= 1),
			t.loc && (n |= 4),
			t.ranges && (n |= 2),
			t.uniqueKeyInPattern && (n |= -2147483648),
			t.lexical && (n |= 64),
			t.webcompat && (n |= 256),
			t.directives && (n |= 520),
			t.globalReturn && (n |= 32),
			t.raw && (n |= 512),
			t.preserveParens && (n |= 128),
			t.impliedStrict && (n |= 1024),
			t.jsx && (n |= 16),
			t.identifierPattern && (n |= 268435456),
			t.specDeviation && (n |= 536870912),
			t.source && (i = t.source),
			t.onComment != null &&
				(a = Array.isArray(t.onComment)
					? a4(n, t.onComment)
					: t.onComment),
			t.onInsertedSemicolon != null && (o = t.onInsertedSemicolon),
			t.onToken != null &&
				(s = Array.isArray(t.onToken) ? o4(n, t.onToken) : t.onToken));
		let r = s4(e, i, a, s, o);
		n & 1 && HE(r);
		let c = n & 64 ? gn() : void 0,
			l = [],
			d = "script";
		if (n & 2048) {
			if (((d = "module"), (l = c4(r, n | 8192, c)), c))
				for (let p in r.exportedBindings)
					p[0] === "#" && !c[p] && x(r, 143, p.slice(1));
		} else l = u4(r, n | 8192, c);
		let f = { type: "Program", sourceType: d, body: l };
		return (
			n & 2 &&
				((f.start = 0), (f.end = e.length), (f.range = [0, e.length])),
			n & 4 &&
				((f.loc = {
					start: { line: 1, column: 0 },
					end: { line: r.line, column: r.column },
				}),
				r.sourceFile && (f.loc.source = i)),
			f
		);
	}
	function u4(e, t, n) {
		U(e, t | 32768 | 1073741824);
		let i = [];
		for (; e.token === 134283267; ) {
			let {
					index: a,
					tokenPos: o,
					tokenValue: s,
					linePos: r,
					colPos: c,
					token: l,
				} = e,
				d = ut(e, t);
			Cp(e, a, o, s) && (t |= 1024), i.push(Uu(e, t, d, l, o, r, c));
		}
		for (; e.token !== 1048576; ) i.push(Ri(e, t, n, 4, {}));
		return i;
	}
	function c4(e, t, n) {
		U(e, t | 32768);
		let i = [];
		if (t & 8)
			for (; e.token === 134283267; ) {
				let { tokenPos: a, linePos: o, colPos: s, token: r } = e;
				i.push(Uu(e, t, ut(e, t), r, a, o, s));
			}
		for (; e.token !== 1048576; ) i.push(l4(e, t, n));
		return i;
	}
	function l4(e, t, n) {
		e.leadingDecorators = oo(e, t);
		let i;
		switch (e.token) {
			case 20566:
				i = I4(e, t, n);
				break;
			case 86108:
				i = D4(e, t, n);
				break;
			default:
				i = Ri(e, t, n, 4, {});
		}
		return e.leadingDecorators.length && x(e, 165), i;
	}
	function Ri(e, t, n, i, a) {
		let o = e.tokenPos,
			s = e.linePos,
			r = e.colPos;
		switch (e.token) {
			case 86106:
				return tn(e, t, n, i, 1, 0, 0, o, s, r);
			case 133:
			case 86096:
				return Nu(e, t, n, 0, o, s, r);
			case 86092:
				return Iu(e, t, n, 16, 0, o, s, r);
			case 241739:
				return _4(e, t, n, i, o, s, r);
			case 20566:
				x(e, 101, "export");
			case 86108:
				switch ((U(e, t), e.token)) {
					case 67174411:
						return Lp(e, t, o, s, r);
					case 67108877:
						return Np(e, t, o, s, r);
					default:
						x(e, 101, "import");
				}
			case 209007:
				return Dp(e, t, n, i, a, 1, o, s, r);
			default:
				return Oi(e, t, n, i, a, 1, o, s, r);
		}
	}
	function Oi(e, t, n, i, a, o, s, r, c) {
		switch (e.token) {
			case 86090:
				return wp(e, t, n, 0, s, r, c);
			case 20574:
				return p4(e, t, s, r, c);
			case 20571:
				return h4(e, t, n, a, s, r, c);
			case 20569:
				return S4(e, t, n, a, s, r, c);
			case 20564:
				return k4(e, t, n, a, s, r, c);
			case 20580:
				return g4(e, t, n, a, s, r, c);
			case 86112:
				return b4(e, t, n, a, s, r, c);
			case 1074790417:
				return f4(e, t, s, r, c);
			case 2162700:
				return Pi(e, t, n && Oe(n, 2), a, s, r, c);
			case 86114:
				return m4(e, t, s, r, c);
			case 20557:
				return E4(e, t, a, s, r, c);
			case 20561:
				return x4(e, t, a, s, r, c);
			case 20579:
				return T4(e, t, n, a, s, r, c);
			case 20581:
				return v4(e, t, n, a, s, r, c);
			case 20562:
				return A4(e, t, s, r, c);
			case 209007:
				return Dp(e, t, n, i, a, 0, s, r, c);
			case 20559:
				x(e, 157);
			case 20568:
				x(e, 158);
			case 86106:
				x(e, t & 1024 ? 74 : t & 256 ? 75 : 76);
			case 86096:
				x(e, 77);
			default:
				return d4(e, t, n, i, a, o, s, r, c);
		}
	}
	function d4(e, t, n, i, a, o, s, r, c) {
		let { tokenValue: l, token: d } = e,
			f;
		switch (d) {
			case 241739:
				(f = le(e, t, 0)),
					t & 1024 && x(e, 83),
					e.token === 69271571 && x(e, 82);
				break;
			default:
				f = ft(e, t, 2, 0, 1, 0, 0, 1, e.tokenPos, e.linePos, e.colPos);
		}
		return d & 143360 && e.token === 21
			? Mu(e, t, n, i, a, l, f, d, o, s, r, c)
			: ((f = he(e, t, f, 0, 0, s, r, c)),
				(f = Se(e, t, 0, 0, s, r, c, f)),
				e.token === 18 && (f = Vt(e, t, 0, s, r, c, f)),
				zn(e, t, f, s, r, c));
	}
	function Pi(e, t, n, i, a, o, s) {
		let r = [];
		for (X(e, t | 32768, 2162700); e.token !== 1074790415; )
			r.push(Ri(e, t, n, 2, { $: i }));
		return (
			X(e, t | 32768, 1074790415),
			I(e, t, a, o, s, { type: "BlockStatement", body: r })
		);
	}
	function p4(e, t, n, i, a) {
		!(t & 32) && t & 8192 && x(e, 90), U(e, t | 32768);
		let o =
			e.flags & 1 || e.token & 1048576
				? null
				: it(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
		return (
			lt(e, t | 32768),
			I(e, t, n, i, a, { type: "ReturnStatement", argument: o })
		);
	}
	function zn(e, t, n, i, a, o) {
		return (
			lt(e, t | 32768),
			I(e, t, i, a, o, { type: "ExpressionStatement", expression: n })
		);
	}
	function Mu(e, t, n, i, a, o, s, r, c, l, d, f) {
		Ja(e, t, 0, r, 1), n4(e, a, o), U(e, t | 32768);
		let p =
			c && !(t & 1024) && t & 256 && e.token === 86106
				? tn(
						e,
						t,
						Oe(n, 2),
						i,
						0,
						0,
						0,
						e.tokenPos,
						e.linePos,
						e.colPos,
					)
				: Oi(e, t, n, i, a, c, e.tokenPos, e.linePos, e.colPos);
		return I(e, t, l, d, f, {
			type: "LabeledStatement",
			label: s,
			body: p,
		});
	}
	function Dp(e, t, n, i, a, o, s, r, c) {
		let { token: l, tokenValue: d } = e,
			f = le(e, t, 0);
		if (e.token === 21) return Mu(e, t, n, i, a, d, f, l, 1, s, r, c);
		let p = e.flags & 1;
		if (!p) {
			if (e.token === 86106)
				return o || x(e, 120), tn(e, t, n, i, 1, 0, 1, s, r, c);
			if ((e.token & 143360) === 143360)
				return (
					(f = Hp(e, t, 1, s, r, c)),
					e.token === 18 && (f = Vt(e, t, 0, s, r, c, f)),
					zn(e, t, f, s, r, c)
				);
		}
		return (
			e.token === 67174411
				? (f = Yu(e, t, f, 1, 1, 0, p, s, r, c))
				: (e.token === 10 &&
						(Fu(e, t, l, 1),
						(f = ao(e, t, e.tokenValue, f, 0, 1, 0, s, r, c))),
					(e.assignable = 1)),
			(f = he(e, t, f, 0, 0, s, r, c)),
			e.token === 18 && (f = Vt(e, t, 0, s, r, c, f)),
			(f = Se(e, t, 0, 0, s, r, c, f)),
			(e.assignable = 1),
			zn(e, t, f, s, r, c)
		);
	}
	function Uu(e, t, n, i, a, o, s) {
		return (
			i !== 1074790417 &&
				((e.assignable = 2),
				(n = he(e, t, n, 0, 0, a, o, s)),
				e.token !== 1074790417 &&
					((n = Se(e, t, 0, 0, a, o, s, n)),
					e.token === 18 && (n = Vt(e, t, 0, a, o, s, n))),
				lt(e, t | 32768)),
			t & 8 && n.type === "Literal" && typeof n.value == "string"
				? I(e, t, a, o, s, {
						type: "ExpressionStatement",
						expression: n,
						directive: n.raw.slice(1, -1),
					})
				: I(e, t, a, o, s, {
						type: "ExpressionStatement",
						expression: n,
					})
		);
	}
	function f4(e, t, n, i, a) {
		return U(e, t | 32768), I(e, t, n, i, a, { type: "EmptyStatement" });
	}
	function m4(e, t, n, i, a) {
		U(e, t | 32768), e.flags & 1 && x(e, 88);
		let o = it(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
		return (
			lt(e, t | 32768),
			I(e, t, n, i, a, { type: "ThrowStatement", argument: o })
		);
	}
	function h4(e, t, n, i, a, o, s) {
		U(e, t), X(e, t | 32768, 67174411), (e.assignable = 1);
		let r = it(e, t, 0, 1, e.tokenPos, e.line, e.colPos);
		X(e, t | 32768, 16);
		let c = cp(e, t, n, i, e.tokenPos, e.linePos, e.colPos),
			l = null;
		return (
			e.token === 20565 &&
				(U(e, t | 32768),
				(l = cp(e, t, n, i, e.tokenPos, e.linePos, e.colPos))),
			I(e, t, a, o, s, {
				type: "IfStatement",
				test: r,
				consequent: c,
				alternate: l,
			})
		);
	}
	function cp(e, t, n, i, a, o, s) {
		return t & 1024 || !(t & 256) || e.token !== 86106
			? Oi(e, t, n, 0, { $: i }, 0, e.tokenPos, e.linePos, e.colPos)
			: tn(e, t, Oe(n, 2), 0, 0, 0, 0, a, o, s);
	}
	function b4(e, t, n, i, a, o, s) {
		U(e, t), X(e, t | 32768, 67174411);
		let r = it(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
		X(e, t, 16), X(e, t, 2162700);
		let c = [],
			l = 0;
		for (n && (n = Oe(n, 8)); e.token !== 1074790415; ) {
			let { tokenPos: d, linePos: f, colPos: p } = e,
				g = null,
				T = [];
			for (
				oe(e, t | 32768, 20558)
					? (g = it(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos))
					: (X(e, t | 32768, 20563), l && x(e, 87), (l = 1)),
					X(e, t | 32768, 21);
				e.token !== 20558 &&
				e.token !== 1074790415 &&
				e.token !== 20563;

			)
				T.push(Ri(e, t | 4096, n, 2, { $: i }));
			c.push(
				I(e, t, d, f, p, {
					type: "SwitchCase",
					test: g,
					consequent: T,
				}),
			);
		}
		return (
			X(e, t | 32768, 1074790415),
			I(e, t, a, o, s, {
				type: "SwitchStatement",
				discriminant: r,
				cases: c,
			})
		);
	}
	function g4(e, t, n, i, a, o, s) {
		U(e, t), X(e, t | 32768, 67174411);
		let r = it(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
		X(e, t | 32768, 16);
		let c = Ni(e, t, n, i);
		return I(e, t, a, o, s, { type: "WhileStatement", test: r, body: c });
	}
	function Ni(e, t, n, i) {
		return Oi(
			e,
			((t | 134217728) ^ 134217728) | 131072,
			n,
			0,
			{ loop: 1, $: i },
			0,
			e.tokenPos,
			e.linePos,
			e.colPos,
		);
	}
	function x4(e, t, n, i, a, o) {
		t & 131072 || x(e, 66), U(e, t);
		let s = null;
		if (!(e.flags & 1) && e.token & 143360) {
			let { tokenValue: r } = e;
			(s = le(e, t | 32768, 0)), _p(e, n, r, 1) || x(e, 135, r);
		}
		return (
			lt(e, t | 32768),
			I(e, t, i, a, o, { type: "ContinueStatement", label: s })
		);
	}
	function E4(e, t, n, i, a, o) {
		U(e, t | 32768);
		let s = null;
		if (!(e.flags & 1) && e.token & 143360) {
			let { tokenValue: r } = e;
			(s = le(e, t | 32768, 0)), _p(e, n, r, 0) || x(e, 135, r);
		} else t & 135168 || x(e, 67);
		return (
			lt(e, t | 32768),
			I(e, t, i, a, o, { type: "BreakStatement", label: s })
		);
	}
	function v4(e, t, n, i, a, o, s) {
		U(e, t), t & 1024 && x(e, 89), X(e, t | 32768, 67174411);
		let r = it(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
		X(e, t | 32768, 16);
		let c = Oi(e, t, n, 2, i, 0, e.tokenPos, e.linePos, e.colPos);
		return I(e, t, a, o, s, { type: "WithStatement", object: r, body: c });
	}
	function A4(e, t, n, i, a) {
		return (
			U(e, t | 32768),
			lt(e, t | 32768),
			I(e, t, n, i, a, { type: "DebuggerStatement" })
		);
	}
	function T4(e, t, n, i, a, o, s) {
		U(e, t | 32768);
		let r = n ? Oe(n, 32) : void 0,
			c = Pi(e, t, r, { $: i }, e.tokenPos, e.linePos, e.colPos),
			{ tokenPos: l, linePos: d, colPos: f } = e,
			p = oe(e, t | 32768, 20559) ? C4(e, t, n, i, l, d, f) : null,
			g = null;
		if (e.token === 20568) {
			U(e, t | 32768);
			let T = r ? Oe(n, 4) : void 0;
			g = Pi(e, t, T, { $: i }, e.tokenPos, e.linePos, e.colPos);
		}
		return (
			!p && !g && x(e, 86),
			I(e, t, a, o, s, {
				type: "TryStatement",
				block: c,
				handler: p,
				finalizer: g,
			})
		);
	}
	function C4(e, t, n, i, a, o, s) {
		let r = null,
			c = n;
		oe(e, t, 67174411) &&
			(n && (n = Oe(n, 4)),
			(r = zp(
				e,
				t,
				n,
				(e.token & 2097152) === 2097152 ? 256 : 512,
				0,
				e.tokenPos,
				e.linePos,
				e.colPos,
			)),
			e.token === 18 ? x(e, 84) : e.token === 1077936157 && x(e, 85),
			X(e, t | 32768, 16),
			n && (c = Oe(n, 64)));
		let l = Pi(e, t, c, { $: i }, e.tokenPos, e.linePos, e.colPos);
		return I(e, t, a, o, s, { type: "CatchClause", param: r, body: l });
	}
	function y4(e, t, n, i, a, o) {
		n && (n = Oe(n, 2));
		let s = 540672;
		t = ((t | s) ^ s) | 262144;
		let { body: r } = Pi(e, t, n, {}, i, a, o);
		return I(e, t, i, a, o, { type: "StaticBlock", body: r });
	}
	function k4(e, t, n, i, a, o, s) {
		U(e, t | 32768);
		let r = Ni(e, t, n, i);
		X(e, t, 20580), X(e, t | 32768, 67174411);
		let c = it(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos);
		return (
			X(e, t | 32768, 16),
			oe(e, t | 32768, 1074790417),
			I(e, t, a, o, s, { type: "DoWhileStatement", body: r, test: c })
		);
	}
	function _4(e, t, n, i, a, o, s) {
		let { token: r, tokenValue: c } = e,
			l = le(e, t, 0);
		if (e.token & 2240512) {
			let d = Un(e, t, n, 8, 0);
			return (
				lt(e, t | 32768),
				I(e, t, a, o, s, {
					type: "VariableDeclaration",
					kind: "let",
					declarations: d,
				})
			);
		}
		if (((e.assignable = 1), t & 1024 && x(e, 83), e.token === 21))
			return Mu(e, t, n, i, {}, c, l, r, 0, a, o, s);
		if (e.token === 10) {
			let d;
			t & 64 && (d = no(e, t, c)),
				(e.flags = (e.flags | 128) ^ 128),
				(l = Bi(e, t, d, [l], 0, a, o, s));
		} else
			(l = he(e, t, l, 0, 0, a, o, s)), (l = Se(e, t, 0, 0, a, o, s, l));
		return (
			e.token === 18 && (l = Vt(e, t, 0, a, o, s, l)),
			zn(e, t, l, a, o, s)
		);
	}
	function Iu(e, t, n, i, a, o, s, r) {
		U(e, t);
		let c = Un(e, t, n, i, a);
		return (
			lt(e, t | 32768),
			I(e, t, o, s, r, {
				type: "VariableDeclaration",
				kind: i & 8 ? "let" : "const",
				declarations: c,
			})
		);
	}
	function wp(e, t, n, i, a, o, s) {
		U(e, t);
		let r = Un(e, t, n, 4, i);
		return (
			lt(e, t | 32768),
			I(e, t, a, o, s, {
				type: "VariableDeclaration",
				kind: "var",
				declarations: r,
			})
		);
	}
	function Un(e, t, n, i, a) {
		let o = 1,
			s = [lp(e, t, n, i, a)];
		for (; oe(e, t, 18); ) o++, s.push(lp(e, t, n, i, a));
		return (
			o > 1 && a & 32 && e.token & 262144 && x(e, 59, De[e.token & 255]),
			s
		);
	}
	function lp(e, t, n, i, a) {
		let { token: o, tokenPos: s, linePos: r, colPos: c } = e,
			l = null,
			d = zp(e, t, n, i, a, s, r, c);
		return (
			e.token === 1077936157
				? (U(e, t | 32768),
					(l = Ae(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos)),
					(a & 32 || !(o & 2097152)) &&
						(e.token === 274549 ||
							(e.token === 8738868 &&
								(o & 2097152 || !(i & 4) || t & 1024))) &&
						jn(
							s,
							e.line,
							e.index - 3,
							58,
							e.token === 274549 ? "of" : "in",
						))
				: (i & 16 || (o & 2097152) > 0) &&
					(e.token & 262144) !== 262144 &&
					x(e, 57, i & 16 ? "const" : "destructuring"),
			I(e, t, s, r, c, { type: "VariableDeclarator", id: d, init: l })
		);
	}
	function S4(e, t, n, i, a, o, s) {
		U(e, t);
		let r =
			((t & 4194304) > 0 || ((t & 2048) > 0 && (t & 8192) > 0)) &&
			oe(e, t, 209008);
		X(e, t | 32768, 67174411), n && (n = Oe(n, 1));
		let c = null,
			l = null,
			d = 0,
			f = null,
			p = e.token === 86090 || e.token === 241739 || e.token === 86092,
			g,
			{ token: T, tokenPos: D, linePos: S, colPos: E } = e;
		if (
			(p
				? T === 241739
					? ((f = le(e, t, 0)),
						e.token & 2240512
							? (e.token === 8738868
									? t & 1024 && x(e, 65)
									: (f = I(e, t, D, S, E, {
											type: "VariableDeclaration",
											kind: "let",
											declarations: Un(
												e,
												t | 134217728,
												n,
												8,
												32,
											),
										})),
								(e.assignable = 1))
							: t & 1024
								? x(e, 65)
								: ((p = !1),
									(e.assignable = 1),
									(f = he(e, t, f, 0, 0, D, S, E)),
									e.token === 274549 && x(e, 112)))
					: (U(e, t),
						(f = I(
							e,
							t,
							D,
							S,
							E,
							T === 86090
								? {
										type: "VariableDeclaration",
										kind: "var",
										declarations: Un(
											e,
											t | 134217728,
											n,
											4,
											32,
										),
									}
								: {
										type: "VariableDeclaration",
										kind: "const",
										declarations: Un(
											e,
											t | 134217728,
											n,
											16,
											32,
										),
									},
						)),
						(e.assignable = 1))
				: T === 1074790417
					? r && x(e, 80)
					: (T & 2097152) === 2097152
						? ((f =
								T === 2162700
									? Tt(e, t, void 0, 1, 0, 0, 2, 32, D, S, E)
									: At(
											e,
											t,
											void 0,
											1,
											0,
											0,
											2,
											32,
											D,
											S,
											E,
										)),
							(d = e.destructible),
							t & 256 && d & 64 && x(e, 61),
							(e.assignable = d & 16 ? 2 : 1),
							(f = he(
								e,
								t | 134217728,
								f,
								0,
								0,
								e.tokenPos,
								e.linePos,
								e.colPos,
							)))
						: (f = vt(e, t | 134217728, 1, 0, 1, D, S, E)),
			(e.token & 262144) === 262144)
		) {
			if (e.token === 274549) {
				e.assignable & 2 && x(e, 78, r ? "await" : "of"),
					Dt(e, f),
					U(e, t | 32768),
					(g = Ae(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos)),
					X(e, t | 32768, 16);
				let y = Ni(e, t, n, i);
				return I(e, t, a, o, s, {
					type: "ForOfStatement",
					left: f,
					right: g,
					body: y,
					await: r,
				});
			}
			e.assignable & 2 && x(e, 78, "in"),
				Dt(e, f),
				U(e, t | 32768),
				r && x(e, 80),
				(g = it(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos)),
				X(e, t | 32768, 16);
			let L = Ni(e, t, n, i);
			return I(e, t, a, o, s, {
				type: "ForInStatement",
				body: L,
				left: f,
				right: g,
			});
		}
		r && x(e, 80),
			p ||
				(d & 8 && e.token !== 1077936157 && x(e, 78, "loop"),
				(f = Se(e, t | 134217728, 0, 0, D, S, E, f))),
			e.token === 18 &&
				(f = Vt(e, t, 0, e.tokenPos, e.linePos, e.colPos, f)),
			X(e, t | 32768, 1074790417),
			e.token !== 1074790417 &&
				(c = it(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos)),
			X(e, t | 32768, 1074790417),
			e.token !== 16 &&
				(l = it(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos)),
			X(e, t | 32768, 16);
		let A = Ni(e, t, n, i);
		return I(e, t, a, o, s, {
			type: "ForStatement",
			init: f,
			test: c,
			update: l,
			body: A,
		});
	}
	function Ip(e, t, n) {
		return (
			Bu(t, e.token) || x(e, 115),
			(e.token & 537079808) === 537079808 && x(e, 116),
			n && nn(e, t, n, e.tokenValue, 8, 0),
			le(e, t, 0)
		);
	}
	function D4(e, t, n) {
		let i = e.tokenPos,
			a = e.linePos,
			o = e.colPos;
		U(e, t);
		let s = null,
			{ tokenPos: r, linePos: c, colPos: l } = e,
			d = [];
		if (e.token === 134283267) s = ut(e, t);
		else {
			if (e.token & 143360) {
				let f = Ip(e, t, n);
				if (
					((d = [
						I(e, t, r, c, l, {
							type: "ImportDefaultSpecifier",
							local: f,
						}),
					]),
					oe(e, t, 18))
				)
					switch (e.token) {
						case 8457014:
							d.push(dp(e, t, n));
							break;
						case 2162700:
							pp(e, t, n, d);
							break;
						default:
							x(e, 105);
					}
			} else
				switch (e.token) {
					case 8457014:
						d = [dp(e, t, n)];
						break;
					case 2162700:
						pp(e, t, n, d);
						break;
					case 67174411:
						return Lp(e, t, i, a, o);
					case 67108877:
						return Np(e, t, i, a, o);
					default:
						x(e, 28, De[e.token & 255]);
				}
			s = w4(e, t);
		}
		return (
			lt(e, t | 32768),
			I(e, t, i, a, o, {
				type: "ImportDeclaration",
				specifiers: d,
				source: s,
			})
		);
	}
	function dp(e, t, n) {
		let { tokenPos: i, linePos: a, colPos: o } = e;
		return (
			U(e, t),
			X(e, t, 77934),
			(e.token & 134217728) === 134217728 &&
				jn(i, e.line, e.index, 28, De[e.token & 255]),
			I(e, t, i, a, o, {
				type: "ImportNamespaceSpecifier",
				local: Ip(e, t, n),
			})
		);
	}
	function w4(e, t) {
		return (
			oe(e, t, 12404),
			e.token !== 134283267 && x(e, 103, "Import"),
			ut(e, t)
		);
	}
	function pp(e, t, n, i) {
		for (U(e, t); e.token & 143360; ) {
			let {
					token: a,
					tokenValue: o,
					tokenPos: s,
					linePos: r,
					colPos: c,
				} = e,
				l = le(e, t, 0),
				d;
			oe(e, t, 77934)
				? ((e.token & 134217728) === 134217728 || e.token === 18
						? x(e, 104)
						: Ja(e, t, 16, e.token, 0),
					(o = e.tokenValue),
					(d = le(e, t, 0)))
				: (Ja(e, t, 16, a, 0), (d = l)),
				n && nn(e, t, n, o, 8, 0),
				i.push(
					I(e, t, s, r, c, {
						type: "ImportSpecifier",
						local: d,
						imported: l,
					}),
				),
				e.token !== 1074790415 && X(e, t, 18);
		}
		return X(e, t, 1074790415), i;
	}
	function Np(e, t, n, i, a) {
		let o = Rp(
			e,
			t,
			I(e, t, n, i, a, { type: "Identifier", name: "import" }),
			n,
			i,
			a,
		);
		return (
			(o = he(e, t, o, 0, 0, n, i, a)),
			(o = Se(e, t, 0, 0, n, i, a, o)),
			zn(e, t, o, n, i, a)
		);
	}
	function Lp(e, t, n, i, a) {
		let o = Op(e, t, 0, n, i, a);
		return (
			(o = he(e, t, o, 0, 0, n, i, a)),
			e.token === 18 && (o = Vt(e, t, 0, n, i, a, o)),
			zn(e, t, o, n, i, a)
		);
	}
	function I4(e, t, n) {
		let i = e.tokenPos,
			a = e.linePos,
			o = e.colPos;
		U(e, t | 32768);
		let s = [],
			r = null,
			c = null,
			l;
		if (oe(e, t | 32768, 20563)) {
			switch (e.token) {
				case 86106: {
					r = tn(
						e,
						t,
						n,
						4,
						1,
						1,
						0,
						e.tokenPos,
						e.linePos,
						e.colPos,
					);
					break;
				}
				case 133:
				case 86096:
					r = Nu(e, t, n, 1, e.tokenPos, e.linePos, e.colPos);
					break;
				case 209007:
					let { tokenPos: d, linePos: f, colPos: p } = e;
					r = le(e, t, 0);
					let { flags: g } = e;
					g & 1 ||
						(e.token === 86106
							? (r = tn(e, t, n, 4, 1, 1, 1, d, f, p))
							: e.token === 67174411
								? ((r = Yu(e, t, r, 1, 1, 0, g, d, f, p)),
									(r = he(e, t, r, 0, 0, d, f, p)),
									(r = Se(e, t, 0, 0, d, f, p, r)))
								: e.token & 143360 &&
									(n && (n = no(e, t, e.tokenValue)),
									(r = le(e, t, 0)),
									(r = Bi(e, t, n, [r], 1, d, f, p))));
					break;
				default:
					(r = Ae(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos)),
						lt(e, t | 32768);
			}
			return (
				n && fn(e, "default"),
				I(e, t, i, a, o, {
					type: "ExportDefaultDeclaration",
					declaration: r,
				})
			);
		}
		switch (e.token) {
			case 8457014: {
				U(e, t);
				let g = null;
				return (
					oe(e, t, 77934) &&
						(n && fn(e, e.tokenValue), (g = le(e, t, 0))),
					X(e, t, 12404),
					e.token !== 134283267 && x(e, 103, "Export"),
					(c = ut(e, t)),
					lt(e, t | 32768),
					I(e, t, i, a, o, {
						type: "ExportAllDeclaration",
						source: c,
						exported: g,
					})
				);
			}
			case 2162700: {
				U(e, t);
				let g = [],
					T = [];
				for (; e.token & 143360; ) {
					let {
							tokenPos: D,
							tokenValue: S,
							linePos: E,
							colPos: A,
						} = e,
						L = le(e, t, 0),
						y;
					e.token === 77934
						? (U(e, t),
							(e.token & 134217728) === 134217728 && x(e, 104),
							n && (g.push(e.tokenValue), T.push(S)),
							(y = le(e, t, 0)))
						: (n && (g.push(e.tokenValue), T.push(e.tokenValue)),
							(y = L)),
						s.push(
							I(e, t, D, E, A, {
								type: "ExportSpecifier",
								local: L,
								exported: y,
							}),
						),
						e.token !== 1074790415 && X(e, t, 18);
				}
				if ((X(e, t, 1074790415), oe(e, t, 12404)))
					e.token !== 134283267 && x(e, 103, "Export"),
						(c = ut(e, t));
				else if (n) {
					let D = 0,
						S = g.length;
					for (; D < S; D++) fn(e, g[D]);
					for (D = 0, S = T.length; D < S; D++) i4(e, T[D]);
				}
				lt(e, t | 32768);
				break;
			}
			case 86096:
				r = Nu(e, t, n, 2, e.tokenPos, e.linePos, e.colPos);
				break;
			case 86106:
				r = tn(e, t, n, 4, 1, 2, 0, e.tokenPos, e.linePos, e.colPos);
				break;
			case 241739:
				r = Iu(e, t, n, 8, 64, e.tokenPos, e.linePos, e.colPos);
				break;
			case 86092:
				r = Iu(e, t, n, 16, 64, e.tokenPos, e.linePos, e.colPos);
				break;
			case 86090:
				r = wp(e, t, n, 64, e.tokenPos, e.linePos, e.colPos);
				break;
			case 209007:
				let { tokenPos: d, linePos: f, colPos: p } = e;
				if ((U(e, t), !(e.flags & 1) && e.token === 86106)) {
					(r = tn(e, t, n, 4, 1, 2, 1, d, f, p)),
						n && ((l = r.id ? r.id.name : ""), fn(e, l));
					break;
				}
			default:
				x(e, 28, De[e.token & 255]);
		}
		return I(e, t, i, a, o, {
			type: "ExportNamedDeclaration",
			declaration: r,
			specifiers: s,
			source: c,
		});
	}
	function Ae(e, t, n, i, a, o, s, r) {
		let c = ft(e, t, 2, 0, n, i, a, 1, o, s, r);
		return (c = he(e, t, c, a, 0, o, s, r)), Se(e, t, a, 0, o, s, r, c);
	}
	function Vt(e, t, n, i, a, o, s) {
		let r = [s];
		for (; oe(e, t | 32768, 18); )
			r.push(Ae(e, t, 1, 0, n, e.tokenPos, e.linePos, e.colPos));
		return I(e, t, i, a, o, { type: "SequenceExpression", expressions: r });
	}
	function it(e, t, n, i, a, o, s) {
		let r = Ae(e, t, i, 0, n, a, o, s);
		return e.token === 18 ? Vt(e, t, n, a, o, s, r) : r;
	}
	function Se(e, t, n, i, a, o, s, r) {
		let { token: c } = e;
		if ((c & 4194304) === 4194304) {
			e.assignable & 2 && x(e, 24),
				((!i && c === 1077936157 && r.type === "ArrayExpression") ||
					r.type === "ObjectExpression") &&
					Dt(e, r),
				U(e, t | 32768);
			let l = Ae(e, t, 1, 1, n, e.tokenPos, e.linePos, e.colPos);
			return (
				(e.assignable = 2),
				I(
					e,
					t,
					a,
					o,
					s,
					i
						? { type: "AssignmentPattern", left: r, right: l }
						: {
								type: "AssignmentExpression",
								left: r,
								operator: De[c & 255],
								right: l,
							},
				)
			);
		}
		return (
			(c & 8454144) === 8454144 && (r = en(e, t, n, a, o, s, 4, c, r)),
			oe(e, t | 32768, 22) && (r = mn(e, t, r, a, o, s)),
			r
		);
	}
	function Wa(e, t, n, i, a, o, s, r) {
		let { token: c } = e;
		U(e, t | 32768);
		let l = Ae(e, t, 1, 1, n, e.tokenPos, e.linePos, e.colPos);
		return (
			(r = I(
				e,
				t,
				a,
				o,
				s,
				i
					? { type: "AssignmentPattern", left: r, right: l }
					: {
							type: "AssignmentExpression",
							left: r,
							operator: De[c & 255],
							right: l,
						},
			)),
			(e.assignable = 2),
			r
		);
	}
	function mn(e, t, n, i, a, o) {
		let s = Ae(
			e,
			(t | 134217728) ^ 134217728,
			1,
			0,
			0,
			e.tokenPos,
			e.linePos,
			e.colPos,
		);
		X(e, t | 32768, 21), (e.assignable = 1);
		let r = Ae(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
		return (
			(e.assignable = 2),
			I(e, t, i, a, o, {
				type: "ConditionalExpression",
				test: n,
				consequent: s,
				alternate: r,
			})
		);
	}
	function en(e, t, n, i, a, o, s, r, c) {
		let l = -((t & 134217728) > 0) & 8738868,
			d,
			f;
		for (
			e.assignable = 2;
			e.token & 8454144 &&
			((d = e.token),
			(f = d & 3840),
			((d & 524288 && r & 268435456) || (r & 524288 && d & 268435456)) &&
				x(e, 160),
			!(f + ((d === 8457273) << 8) - ((l === d) << 12) <= s));

		)
			U(e, t | 32768),
				(c = I(e, t, i, a, o, {
					type:
						d & 524288 || d & 268435456
							? "LogicalExpression"
							: "BinaryExpression",
					left: c,
					right: en(
						e,
						t,
						n,
						e.tokenPos,
						e.linePos,
						e.colPos,
						f,
						d,
						vt(e, t, 0, n, 1, e.tokenPos, e.linePos, e.colPos),
					),
					operator: De[d & 255],
				}));
		return e.token === 1077936157 && x(e, 24), c;
	}
	function N4(e, t, n, i, a, o, s) {
		n || x(e, 0);
		let r = e.token;
		U(e, t | 32768);
		let c = vt(e, t, 0, s, 1, e.tokenPos, e.linePos, e.colPos);
		return (
			e.token === 8457273 && x(e, 31),
			t & 1024 &&
				r === 16863278 &&
				(c.type === "Identifier" ? x(e, 118) : t4(c) && x(e, 124)),
			(e.assignable = 2),
			I(e, t, i, a, o, {
				type: "UnaryExpression",
				operator: De[r & 255],
				argument: c,
				prefix: !0,
			})
		);
	}
	function L4(e, t, n, i, a, o, s, r, c, l) {
		let { token: d } = e,
			f = le(e, t, o),
			{ flags: p } = e;
		if (!(p & 1)) {
			if (e.token === 86106) return Fp(e, t, 1, n, r, c, l);
			if ((e.token & 143360) === 143360)
				return i || x(e, 0), Hp(e, t, a, r, c, l);
		}
		return !s && e.token === 67174411
			? Yu(e, t, f, a, 1, 0, p, r, c, l)
			: e.token === 10
				? (Fu(e, t, d, 1),
					s && x(e, 49),
					ao(e, t, e.tokenValue, f, s, a, 0, r, c, l))
				: f;
	}
	function P4(e, t, n, i, a, o, s) {
		if ((n && (e.destructible |= 256), t & 2097152)) {
			U(e, t | 32768),
				t & 8388608 && x(e, 30),
				i || x(e, 24),
				e.token === 22 && x(e, 121);
			let r = null,
				c = !1;
			return (
				e.flags & 1 ||
					((c = oe(e, t | 32768, 8457014)),
					(e.token & 77824 || c) &&
						(r = Ae(
							e,
							t,
							1,
							0,
							0,
							e.tokenPos,
							e.linePos,
							e.colPos,
						))),
				(e.assignable = 2),
				I(e, t, a, o, s, {
					type: "YieldExpression",
					argument: r,
					delegate: c,
				})
			);
		}
		return t & 1024 && x(e, 95, "yield"), zu(e, t, a, o, s);
	}
	function R4(e, t, n, i, a, o, s) {
		if (
			(i && (e.destructible |= 128),
			t & 4194304 || (t & 2048 && t & 8192))
		) {
			n && x(e, 0),
				t & 8388608 && jn(e.index, e.line, e.index, 29),
				U(e, t | 32768);
			let r = vt(e, t, 0, 0, 1, e.tokenPos, e.linePos, e.colPos);
			return (
				e.token === 8457273 && x(e, 31),
				(e.assignable = 2),
				I(e, t, a, o, s, { type: "AwaitExpression", argument: r })
			);
		}
		return t & 2048 && x(e, 96), zu(e, t, a, o, s);
	}
	function io(e, t, n, i, a, o) {
		let { tokenPos: s, linePos: r, colPos: c } = e;
		X(e, t | 32768, 2162700);
		let l = [],
			d = t;
		if (e.token !== 1074790415) {
			for (; e.token === 134283267; ) {
				let { index: f, tokenPos: p, tokenValue: g, token: T } = e,
					D = ut(e, t);
				Cp(e, f, p, g) &&
					((t |= 1024),
					e.flags & 128 && jn(e.index, e.line, e.tokenPos, 64),
					e.flags & 64 && jn(e.index, e.line, e.tokenPos, 8)),
					l.push(Uu(e, t, D, T, p, e.linePos, e.colPos));
			}
			t & 1024 &&
				(a &&
					((a & 537079808) === 537079808 && x(e, 116),
					(a & 36864) === 36864 && x(e, 38)),
				e.flags & 512 && x(e, 116),
				e.flags & 256 && x(e, 115)),
				t & 64 &&
					n &&
					o !== void 0 &&
					!(d & 1024) &&
					!(t & 8192) &&
					to(o);
		}
		for (
			e.flags = (e.flags | 512 | 256 | 64) ^ 832,
				e.destructible = (e.destructible | 256) ^ 256;
			e.token !== 1074790415;

		)
			l.push(Ri(e, t, n, 4, {}));
		return (
			X(e, i & 24 ? t | 32768 : t, 1074790415),
			(e.flags &= -193),
			e.token === 1077936157 && x(e, 24),
			I(e, t, s, r, c, { type: "BlockStatement", body: l })
		);
	}
	function O4(e, t, n, i, a) {
		switch ((U(e, t), e.token)) {
			case 67108991:
				x(e, 162);
			case 67174411: {
				t & 524288 || x(e, 26),
					t & 16384 && x(e, 27),
					(e.assignable = 2);
				break;
			}
			case 69271571:
			case 67108877: {
				t & 262144 || x(e, 27),
					t & 16384 && x(e, 27),
					(e.assignable = 1);
				break;
			}
			default:
				x(e, 28, "super");
		}
		return I(e, t, n, i, a, { type: "Super" });
	}
	function vt(e, t, n, i, a, o, s, r) {
		let c = ft(e, t, 2, 0, n, 0, i, a, o, s, r);
		return he(e, t, c, i, 0, o, s, r);
	}
	function B4(e, t, n, i, a, o) {
		e.assignable & 2 && x(e, 53);
		let { token: s } = e;
		return (
			U(e, t),
			(e.assignable = 2),
			I(e, t, i, a, o, {
				type: "UpdateExpression",
				argument: n,
				operator: De[s & 255],
				prefix: !1,
			})
		);
	}
	function he(e, t, n, i, a, o, s, r) {
		if ((e.token & 33619968) === 33619968 && !(e.flags & 1))
			n = B4(e, t, n, o, s, r);
		else if ((e.token & 67108864) === 67108864) {
			switch (((t = (t | 134217728) ^ 134217728), e.token)) {
				case 67108877: {
					U(e, (t | 1073741824 | 8192) ^ 8192), (e.assignable = 1);
					let c = Pp(e, t);
					n = I(e, t, o, s, r, {
						type: "MemberExpression",
						object: n,
						computed: !1,
						property: c,
					});
					break;
				}
				case 69271571: {
					let c = !1;
					(e.flags & 2048) === 2048 &&
						((c = !0), (e.flags = (e.flags | 2048) ^ 2048)),
						U(e, t | 32768);
					let { tokenPos: l, linePos: d, colPos: f } = e,
						p = it(e, t, i, 1, l, d, f);
					X(e, t, 20),
						(e.assignable = 1),
						(n = I(e, t, o, s, r, {
							type: "MemberExpression",
							object: n,
							computed: !0,
							property: p,
						})),
						c && (e.flags |= 2048);
					break;
				}
				case 67174411: {
					if ((e.flags & 1024) === 1024)
						return (e.flags = (e.flags | 1024) ^ 1024), n;
					let c = !1;
					(e.flags & 2048) === 2048 &&
						((c = !0), (e.flags = (e.flags | 2048) ^ 2048));
					let l = qu(e, t, i);
					(e.assignable = 2),
						(n = I(e, t, o, s, r, {
							type: "CallExpression",
							callee: n,
							arguments: l,
						})),
						c && (e.flags |= 2048);
					break;
				}
				case 67108991: {
					U(e, (t | 1073741824 | 8192) ^ 8192),
						(e.flags |= 2048),
						(e.assignable = 2),
						(n = F4(e, t, n, o, s, r));
					break;
				}
				default:
					(e.flags & 2048) === 2048 && x(e, 161),
						(e.assignable = 2),
						(n = I(e, t, o, s, r, {
							type: "TaggedTemplateExpression",
							tag: n,
							quasi:
								e.token === 67174408
									? ju(e, t | 65536)
									: Hu(e, t, e.tokenPos, e.linePos, e.colPos),
						}));
			}
			n = he(e, t, n, 0, 1, o, s, r);
		}
		return (
			a === 0 &&
				(e.flags & 2048) === 2048 &&
				((e.flags = (e.flags | 2048) ^ 2048),
				(n = I(e, t, o, s, r, {
					type: "ChainExpression",
					expression: n,
				}))),
			n
		);
	}
	function F4(e, t, n, i, a, o) {
		let s = !1,
			r;
		if (
			((e.token === 69271571 || e.token === 67174411) &&
				(e.flags & 2048) === 2048 &&
				((s = !0), (e.flags = (e.flags | 2048) ^ 2048)),
			e.token === 69271571)
		) {
			U(e, t | 32768);
			let { tokenPos: c, linePos: l, colPos: d } = e,
				f = it(e, t, 0, 1, c, l, d);
			X(e, t, 20),
				(e.assignable = 2),
				(r = I(e, t, i, a, o, {
					type: "MemberExpression",
					object: n,
					computed: !0,
					optional: !0,
					property: f,
				}));
		} else if (e.token === 67174411) {
			let c = qu(e, t, 0);
			(e.assignable = 2),
				(r = I(e, t, i, a, o, {
					type: "CallExpression",
					callee: n,
					arguments: c,
					optional: !0,
				}));
		} else {
			e.token & 143360 || x(e, 155);
			let c = le(e, t, 0);
			(e.assignable = 2),
				(r = I(e, t, i, a, o, {
					type: "MemberExpression",
					object: n,
					computed: !1,
					optional: !0,
					property: c,
				}));
		}
		return s && (e.flags |= 2048), r;
	}
	function Pp(e, t) {
		return (
			!(e.token & 143360) && e.token !== 131 && x(e, 155),
			t & 1 && e.token === 131
				? eo(e, t, e.tokenPos, e.linePos, e.colPos)
				: le(e, t, 0)
		);
	}
	function M4(e, t, n, i, a, o, s) {
		n && x(e, 54), i || x(e, 0);
		let { token: r } = e;
		U(e, t | 32768);
		let c = vt(e, t, 0, 0, 1, e.tokenPos, e.linePos, e.colPos);
		return (
			e.assignable & 2 && x(e, 53),
			(e.assignable = 2),
			I(e, t, a, o, s, {
				type: "UpdateExpression",
				argument: c,
				operator: De[r & 255],
				prefix: !0,
			})
		);
	}
	function ft(e, t, n, i, a, o, s, r, c, l, d) {
		if ((e.token & 143360) === 143360) {
			switch (e.token) {
				case 209008:
					return R4(e, t, i, s, c, l, d);
				case 241773:
					return P4(e, t, s, a, c, l, d);
				case 209007:
					return L4(e, t, s, r, a, o, i, c, l, d);
			}
			let { token: f, tokenValue: p } = e,
				g = le(e, t | 65536, o);
			return e.token === 10
				? (r || x(e, 0),
					Fu(e, t, f, 1),
					ao(e, t, p, g, i, a, 0, c, l, d))
				: (t & 16384 && f === 537079928 && x(e, 127),
					f === 241739 && (t & 1024 && x(e, 110), n & 24 && x(e, 98)),
					(e.assignable =
						t & 1024 && (f & 537079808) === 537079808 ? 2 : 1),
					g);
		}
		if ((e.token & 134217728) === 134217728) return ut(e, t);
		switch (e.token) {
			case 33619995:
			case 33619996:
				return M4(e, t, i, r, c, l, d);
			case 16863278:
			case 16842800:
			case 16842801:
			case 25233970:
			case 25233971:
			case 16863277:
			case 16863279:
				return N4(e, t, r, c, l, d, s);
			case 86106:
				return Fp(e, t, 0, s, c, l, d);
			case 2162700:
				return Y4(e, t, a ? 0 : 1, s, c, l, d);
			case 69271571:
				return z4(e, t, a ? 0 : 1, s, c, l, d);
			case 67174411:
				return W4(e, t, a, 1, 0, c, l, d);
			case 86021:
			case 86022:
			case 86023:
				return j4(e, t, c, l, d);
			case 86113:
				return q4(e, t);
			case 65540:
				return K4(e, t, c, l, d);
			case 133:
			case 86096:
				return Q4(e, t, s, c, l, d);
			case 86111:
				return O4(e, t, c, l, d);
			case 67174409:
				return Hu(e, t, c, l, d);
			case 67174408:
				return ju(e, t);
			case 86109:
				return G4(e, t, s, c, l, d);
			case 134283389:
				return Bp(e, t, c, l, d);
			case 131:
				return eo(e, t, c, l, d);
			case 86108:
				return U4(e, t, i, s, c, l, d);
			case 8456258:
				if (t & 16) return Wu(e, t, 1, c, l, d);
			default:
				if (Bu(t, e.token)) return zu(e, t, c, l, d);
				x(e, 28, De[e.token & 255]);
		}
	}
	function U4(e, t, n, i, a, o, s) {
		let r = le(e, t, 0);
		return e.token === 67108877
			? Rp(e, t, r, a, o, s)
			: (n && x(e, 138),
				(r = Op(e, t, i, a, o, s)),
				(e.assignable = 2),
				he(e, t, r, i, 0, a, o, s));
	}
	function Rp(e, t, n, i, a, o) {
		return (
			t & 2048 || x(e, 164),
			U(e, t),
			e.token !== 143495 &&
				e.tokenValue !== "meta" &&
				x(e, 28, De[e.token & 255]),
			(e.assignable = 2),
			I(e, t, i, a, o, {
				type: "MetaProperty",
				meta: n,
				property: le(e, t, 0),
			})
		);
	}
	function Op(e, t, n, i, a, o) {
		X(e, t | 32768, 67174411), e.token === 14 && x(e, 139);
		let s = Ae(e, t, 1, 0, n, e.tokenPos, e.linePos, e.colPos);
		return (
			X(e, t, 16),
			I(e, t, i, a, o, { type: "ImportExpression", source: s })
		);
	}
	function Bp(e, t, n, i, a) {
		let { tokenRaw: o, tokenValue: s } = e;
		return (
			U(e, t),
			(e.assignable = 2),
			I(
				e,
				t,
				n,
				i,
				a,
				t & 512
					? {
							type: "Literal",
							value: s,
							bigint: o.slice(0, -1),
							raw: o,
						}
					: { type: "Literal", value: s, bigint: o.slice(0, -1) },
			)
		);
	}
	function Hu(e, t, n, i, a) {
		e.assignable = 2;
		let {
			tokenValue: o,
			tokenRaw: s,
			tokenPos: r,
			linePos: c,
			colPos: l,
		} = e;
		X(e, t, 67174409);
		let d = [Xa(e, t, o, s, r, c, l, !0)];
		return I(e, t, n, i, a, {
			type: "TemplateLiteral",
			expressions: [],
			quasis: d,
		});
	}
	function ju(e, t) {
		t = (t | 134217728) ^ 134217728;
		let {
			tokenValue: n,
			tokenRaw: i,
			tokenPos: a,
			linePos: o,
			colPos: s,
		} = e;
		X(e, t | 32768, 67174408);
		let r = [Xa(e, t, n, i, a, o, s, !1)],
			c = [it(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos)];
		for (
			e.token !== 1074790415 && x(e, 81);
			(e.token = WE(e, t)) !== 67174409;

		) {
			let {
				tokenValue: l,
				tokenRaw: d,
				tokenPos: f,
				linePos: p,
				colPos: g,
			} = e;
			X(e, t | 32768, 67174408),
				r.push(Xa(e, t, l, d, f, p, g, !1)),
				c.push(it(e, t, 0, 1, e.tokenPos, e.linePos, e.colPos)),
				e.token !== 1074790415 && x(e, 81);
		}
		{
			let {
				tokenValue: l,
				tokenRaw: d,
				tokenPos: f,
				linePos: p,
				colPos: g,
			} = e;
			X(e, t, 67174409), r.push(Xa(e, t, l, d, f, p, g, !0));
		}
		return I(e, t, a, o, s, {
			type: "TemplateLiteral",
			expressions: c,
			quasis: r,
		});
	}
	function Xa(e, t, n, i, a, o, s, r) {
		let c = I(e, t, a, o, s, {
				type: "TemplateElement",
				value: { cooked: n, raw: i },
				tail: r,
			}),
			l = r ? 1 : 2;
		return (
			t & 2 &&
				((c.start += 1),
				(c.range[0] += 1),
				(c.end -= l),
				(c.range[1] -= l)),
			t & 4 && ((c.loc.start.column += 1), (c.loc.end.column -= l)),
			c
		);
	}
	function H4(e, t, n, i, a) {
		(t = (t | 134217728) ^ 134217728), X(e, t | 32768, 14);
		let o = Ae(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
		return (
			(e.assignable = 1),
			I(e, t, n, i, a, { type: "SpreadElement", argument: o })
		);
	}
	function qu(e, t, n) {
		U(e, t | 32768);
		let i = [];
		if (e.token === 16) return U(e, t), i;
		for (
			;
			e.token !== 16 &&
			(e.token === 14
				? i.push(H4(e, t, e.tokenPos, e.linePos, e.colPos))
				: i.push(Ae(e, t, 1, 0, n, e.tokenPos, e.linePos, e.colPos)),
			!(e.token !== 18 || (U(e, t | 32768), e.token === 16)));

		);
		return X(e, t, 16), i;
	}
	function le(e, t, n) {
		let { tokenValue: i, tokenPos: a, linePos: o, colPos: s } = e;
		return (
			U(e, t),
			I(
				e,
				t,
				a,
				o,
				s,
				t & 268435456
					? { type: "Identifier", name: i, pattern: n === 1 }
					: { type: "Identifier", name: i },
			)
		);
	}
	function ut(e, t) {
		let {
			tokenValue: n,
			tokenRaw: i,
			tokenPos: a,
			linePos: o,
			colPos: s,
		} = e;
		return e.token === 134283389
			? Bp(e, t, a, o, s)
			: (U(e, t),
				(e.assignable = 2),
				I(
					e,
					t,
					a,
					o,
					s,
					t & 512
						? { type: "Literal", value: n, raw: i }
						: { type: "Literal", value: n },
				));
	}
	function j4(e, t, n, i, a) {
		let o = De[e.token & 255],
			s = e.token === 86023 ? null : o === "true";
		return (
			U(e, t),
			(e.assignable = 2),
			I(
				e,
				t,
				n,
				i,
				a,
				t & 512
					? { type: "Literal", value: s, raw: o }
					: { type: "Literal", value: s },
			)
		);
	}
	function q4(e, t) {
		let { tokenPos: n, linePos: i, colPos: a } = e;
		return (
			U(e, t),
			(e.assignable = 2),
			I(e, t, n, i, a, { type: "ThisExpression" })
		);
	}
	function tn(e, t, n, i, a, o, s, r, c, l) {
		U(e, t | 32768);
		let d = a ? Ou(e, t, 8457014) : 0,
			f = null,
			p,
			g = n ? gn() : void 0;
		if (e.token === 67174411) o & 1 || x(e, 37, "Function");
		else {
			let S = i & 4 && (!(t & 8192) || !(t & 2048)) ? 4 : 64;
			yp(e, t | ((t & 3072) << 11), e.token),
				n &&
					(S & 4
						? Sp(e, t, n, e.tokenValue, S)
						: nn(e, t, n, e.tokenValue, S, i),
					(g = Oe(g, 256)),
					o && o & 2 && fn(e, e.tokenValue)),
				(p = e.token),
				e.token & 143360
					? (f = le(e, t, 0))
					: x(e, 28, De[e.token & 255]);
		}
		(t =
			((t | 32243712) ^ 32243712) |
			67108864 |
			((s * 2 + d) << 21) |
			(d ? 0 : 1073741824)),
			n && (g = Oe(g, 512));
		let T = Up(e, t | 8388608, g, 0, 1),
			D = io(
				e,
				(t | 8192 | 4096 | 131072) ^ 143360,
				n ? Oe(g, 128) : g,
				8,
				p,
				n ? g.scopeError : void 0,
			);
		return I(e, t, r, c, l, {
			type: "FunctionDeclaration",
			id: f,
			params: T,
			body: D,
			async: s === 1,
			generator: d === 1,
		});
	}
	function Fp(e, t, n, i, a, o, s) {
		U(e, t | 32768);
		let r = Ou(e, t, 8457014),
			c = (n * 2 + r) << 21,
			l = null,
			d,
			f = t & 64 ? gn() : void 0;
		(e.token & 176128) > 0 &&
			(yp(e, ((t | 32243712) ^ 32243712) | c, e.token),
			f && (f = Oe(f, 256)),
			(d = e.token),
			(l = le(e, t, 0))),
			(t =
				((t | 32243712) ^ 32243712) |
				67108864 |
				c |
				(r ? 0 : 1073741824)),
			f && (f = Oe(f, 512));
		let p = Up(e, t | 8388608, f, i, 1),
			g = io(e, t & -134377473, f && Oe(f, 128), 0, d, void 0);
		return (
			(e.assignable = 2),
			I(e, t, a, o, s, {
				type: "FunctionExpression",
				id: l,
				params: p,
				body: g,
				async: n === 1,
				generator: r === 1,
			})
		);
	}
	function z4(e, t, n, i, a, o, s) {
		let r = At(e, t, void 0, n, i, 0, 2, 0, a, o, s);
		return (
			t & 256 && e.destructible & 64 && x(e, 61),
			e.destructible & 8 && x(e, 60),
			r
		);
	}
	function At(e, t, n, i, a, o, s, r, c, l, d) {
		U(e, t | 32768);
		let f = [],
			p = 0;
		for (t = (t | 134217728) ^ 134217728; e.token !== 20; )
			if (oe(e, t | 32768, 18)) f.push(null);
			else {
				let T,
					{
						token: D,
						tokenPos: S,
						linePos: E,
						colPos: A,
						tokenValue: L,
					} = e;
				if (D & 143360)
					if (
						((T = ft(e, t, s, 0, 1, 0, a, 1, S, E, A)),
						e.token === 1077936157)
					) {
						e.assignable & 2 && x(e, 24),
							U(e, t | 32768),
							n && Yt(e, t, n, L, s, r);
						let y = Ae(
							e,
							t,
							1,
							1,
							a,
							e.tokenPos,
							e.linePos,
							e.colPos,
						);
						(T = I(
							e,
							t,
							S,
							E,
							A,
							o
								? {
										type: "AssignmentPattern",
										left: T,
										right: y,
									}
								: {
										type: "AssignmentExpression",
										operator: "=",
										left: T,
										right: y,
									},
						)),
							(p |=
								e.destructible & 256
									? 256
									: 0 | (e.destructible & 128)
										? 128
										: 0);
					} else
						e.token === 18 || e.token === 20
							? (e.assignable & 2
									? (p |= 16)
									: n && Yt(e, t, n, L, s, r),
								(p |=
									e.destructible & 256
										? 256
										: 0 | (e.destructible & 128)
											? 128
											: 0))
							: ((p |= s & 1 ? 32 : s & 2 ? 0 : 16),
								(T = he(e, t, T, a, 0, S, E, A)),
								e.token !== 18 && e.token !== 20
									? (e.token !== 1077936157 && (p |= 16),
										(T = Se(e, t, a, o, S, E, A, T)))
									: e.token !== 1077936157 &&
										(p |= e.assignable & 2 ? 16 : 32));
				else
					D & 2097152
						? ((T =
								e.token === 2162700
									? Tt(e, t, n, 0, a, o, s, r, S, E, A)
									: At(e, t, n, 0, a, o, s, r, S, E, A)),
							(p |= e.destructible),
							(e.assignable = e.destructible & 16 ? 2 : 1),
							e.token === 18 || e.token === 20
								? e.assignable & 2 && (p |= 16)
								: e.destructible & 8
									? x(e, 69)
									: ((T = he(e, t, T, a, 0, S, E, A)),
										(p = e.assignable & 2 ? 16 : 0),
										e.token !== 18 && e.token !== 20
											? (T = Se(e, t, a, o, S, E, A, T))
											: e.token !== 1077936157 &&
												(p |=
													e.assignable & 2
														? 16
														: 32)))
						: D === 14
							? ((T = Yn(e, t, n, 20, s, r, 0, a, o, S, E, A)),
								(p |= e.destructible),
								e.token !== 18 &&
									e.token !== 20 &&
									x(e, 28, De[e.token & 255]))
							: ((T = vt(e, t, 1, 0, 1, S, E, A)),
								e.token !== 18 && e.token !== 20
									? ((T = Se(e, t, a, o, S, E, A, T)),
										!(s & 3) && D === 67174411 && (p |= 16))
									: e.assignable & 2
										? (p |= 16)
										: D === 67174411 &&
											(p |=
												e.assignable & 1 && s & 3
													? 32
													: 16));
				if ((f.push(T), oe(e, t | 32768, 18))) {
					if (e.token === 20) break;
				} else break;
			}
		X(e, t, 20);
		let g = I(e, t, c, l, d, {
			type: o ? "ArrayPattern" : "ArrayExpression",
			elements: f,
		});
		return !i && e.token & 4194304
			? Mp(e, t, p, a, o, c, l, d, g)
			: ((e.destructible = p), g);
	}
	function Mp(e, t, n, i, a, o, s, r, c) {
		e.token !== 1077936157 && x(e, 24),
			U(e, t | 32768),
			n & 16 && x(e, 24),
			a || Dt(e, c);
		let { tokenPos: l, linePos: d, colPos: f } = e,
			p = Ae(e, t, 1, 1, i, l, d, f);
		return (
			(e.destructible =
				((n | 64 | 8) ^ 72) |
				(e.destructible & 128 ? 128 : 0) |
				(e.destructible & 256 ? 256 : 0)),
			I(
				e,
				t,
				o,
				s,
				r,
				a
					? { type: "AssignmentPattern", left: c, right: p }
					: {
							type: "AssignmentExpression",
							left: c,
							operator: "=",
							right: p,
						},
			)
		);
	}
	function Yn(e, t, n, i, a, o, s, r, c, l, d, f) {
		U(e, t | 32768);
		let p = null,
			g = 0,
			{ token: T, tokenValue: D, tokenPos: S, linePos: E, colPos: A } = e;
		if (T & 143360)
			(e.assignable = 1),
				(p = ft(e, t, a, 0, 1, 0, r, 1, S, E, A)),
				(T = e.token),
				(p = he(e, t, p, r, 0, S, E, A)),
				e.token !== 18 &&
					e.token !== i &&
					(e.assignable & 2 && e.token === 1077936157 && x(e, 69),
					(g |= 16),
					(p = Se(e, t, r, c, S, E, A, p))),
				e.assignable & 2
					? (g |= 16)
					: T === i || T === 18
						? n && Yt(e, t, n, D, a, o)
						: (g |= 32),
				(g |= e.destructible & 128 ? 128 : 0);
		else if (T === i) x(e, 39);
		else if (T & 2097152)
			(p =
				e.token === 2162700
					? Tt(e, t, n, 1, r, c, a, o, S, E, A)
					: At(e, t, n, 1, r, c, a, o, S, E, A)),
				(T = e.token),
				T !== 1077936157 && T !== i && T !== 18
					? (e.destructible & 8 && x(e, 69),
						(p = he(e, t, p, r, 0, S, E, A)),
						(g |= e.assignable & 2 ? 16 : 0),
						(e.token & 4194304) === 4194304
							? (e.token !== 1077936157 && (g |= 16),
								(p = Se(e, t, r, c, S, E, A, p)))
							: ((e.token & 8454144) === 8454144 &&
									(p = en(e, t, 1, S, E, A, 4, T, p)),
								oe(e, t | 32768, 22) &&
									(p = mn(e, t, p, S, E, A)),
								(g |= e.assignable & 2 ? 16 : 32)))
					: (g |=
							i === 1074790415 && T !== 1077936157
								? 16
								: e.destructible);
		else {
			(g |= 32), (p = vt(e, t, 1, r, 1, e.tokenPos, e.linePos, e.colPos));
			let { token: L, tokenPos: y, linePos: F, colPos: k } = e;
			return (
				L === 1077936157 && L !== i && L !== 18
					? (e.assignable & 2 && x(e, 24),
						(p = Se(e, t, r, c, y, F, k, p)),
						(g |= 16))
					: (L === 18
							? (g |= 16)
							: L !== i && (p = Se(e, t, r, c, y, F, k, p)),
						(g |= e.assignable & 1 ? 32 : 16)),
				(e.destructible = g),
				e.token !== i && e.token !== 18 && x(e, 156),
				I(e, t, l, d, f, {
					type: c ? "RestElement" : "SpreadElement",
					argument: p,
				})
			);
		}
		if (e.token !== i)
			if ((a & 1 && (g |= s ? 16 : 32), oe(e, t | 32768, 1077936157))) {
				g & 16 && x(e, 24), Dt(e, p);
				let L = Ae(e, t, 1, 1, r, e.tokenPos, e.linePos, e.colPos);
				(p = I(
					e,
					t,
					S,
					E,
					A,
					c
						? { type: "AssignmentPattern", left: p, right: L }
						: {
								type: "AssignmentExpression",
								left: p,
								operator: "=",
								right: L,
							},
				)),
					(g = 16);
			} else g |= 16;
		return (
			(e.destructible = g),
			I(e, t, l, d, f, {
				type: c ? "RestElement" : "SpreadElement",
				argument: p,
			})
		);
	}
	function St(e, t, n, i, a, o, s) {
		let r = n & 64 ? 14680064 : 31981568;
		t = ((t | r) ^ r) | ((n & 88) << 18) | 100925440;
		let c = t & 64 ? Oe(gn(), 512) : void 0,
			l = V4(e, t | 8388608, c, n, 1, i);
		c && (c = Oe(c, 128));
		let d = io(e, t & -134230017, c, 0, void 0, void 0);
		return I(e, t, a, o, s, {
			type: "FunctionExpression",
			params: l,
			body: d,
			async: (n & 16) > 0,
			generator: (n & 8) > 0,
			id: null,
		});
	}
	function Y4(e, t, n, i, a, o, s) {
		let r = Tt(e, t, void 0, n, i, 0, 2, 0, a, o, s);
		return (
			t & 256 && e.destructible & 64 && x(e, 61),
			e.destructible & 8 && x(e, 60),
			r
		);
	}
	function Tt(e, t, n, i, a, o, s, r, c, l, d) {
		U(e, t);
		let f = [],
			p = 0,
			g = 0;
		for (t = (t | 134217728) ^ 134217728; e.token !== 1074790415; ) {
			let {
				token: D,
				tokenValue: S,
				linePos: E,
				colPos: A,
				tokenPos: L,
			} = e;
			if (D === 14)
				f.push(Yn(e, t, n, 1074790415, s, r, 0, a, o, L, E, A));
			else {
				let y = 0,
					F = null,
					k,
					J = e.token;
				if (e.token & 143360 || e.token === 121)
					if (
						((F = le(e, t, 0)),
						e.token === 18 ||
							e.token === 1074790415 ||
							e.token === 1077936157)
					)
						if (
							((y |= 4),
							t & 1024 && (D & 537079808) === 537079808
								? (p |= 16)
								: Ja(e, t, s, D, 0),
							n && Yt(e, t, n, S, s, r),
							oe(e, t | 32768, 1077936157))
						) {
							p |= 8;
							let N = Ae(
								e,
								t,
								1,
								1,
								a,
								e.tokenPos,
								e.linePos,
								e.colPos,
							);
							(p |=
								e.destructible & 256
									? 256
									: 0 | (e.destructible & 128)
										? 128
										: 0),
								(k = I(e, t, L, E, A, {
									type: "AssignmentPattern",
									left:
										t & -2147483648
											? Object.assign({}, F)
											: F,
									right: N,
								}));
						} else
							(p |=
								(D === 209008 ? 128 : 0) |
								(D === 121 ? 16 : 0)),
								(k =
									t & -2147483648 ? Object.assign({}, F) : F);
					else if (oe(e, t | 32768, 21)) {
						let { tokenPos: N, linePos: W, colPos: G } = e;
						if ((S === "__proto__" && g++, e.token & 143360)) {
							let R = e.token,
								j = e.tokenValue;
							(p |= J === 121 ? 16 : 0),
								(k = ft(e, t, s, 0, 1, 0, a, 1, N, W, G));
							let { token: K } = e;
							(k = he(e, t, k, a, 0, N, W, G)),
								e.token === 18 || e.token === 1074790415
									? K === 1077936157 ||
										K === 1074790415 ||
										K === 18
										? ((p |=
												e.destructible & 128 ? 128 : 0),
											e.assignable & 2
												? (p |= 16)
												: n &&
													(R & 143360) === 143360 &&
													Yt(e, t, n, j, s, r))
										: (p |= e.assignable & 1 ? 32 : 16)
									: (e.token & 4194304) === 4194304
										? (e.assignable & 2
												? (p |= 16)
												: K !== 1077936157
													? (p |= 32)
													: n && Yt(e, t, n, j, s, r),
											(k = Se(e, t, a, o, N, W, G, k)))
										: ((p |= 16),
											(e.token & 8454144) === 8454144 &&
												(k = en(
													e,
													t,
													1,
													N,
													W,
													G,
													4,
													K,
													k,
												)),
											oe(e, t | 32768, 22) &&
												(k = mn(e, t, k, N, W, G)));
						} else
							(e.token & 2097152) === 2097152
								? ((k =
										e.token === 69271571
											? At(
													e,
													t,
													n,
													0,
													a,
													o,
													s,
													r,
													N,
													W,
													G,
												)
											: Tt(
													e,
													t,
													n,
													0,
													a,
													o,
													s,
													r,
													N,
													W,
													G,
												)),
									(p = e.destructible),
									(e.assignable = p & 16 ? 2 : 1),
									e.token === 18 || e.token === 1074790415
										? e.assignable & 2 && (p |= 16)
										: e.destructible & 8
											? x(e, 69)
											: ((k = he(e, t, k, a, 0, N, W, G)),
												(p = e.assignable & 2 ? 16 : 0),
												(e.token & 4194304) === 4194304
													? (k = Wa(
															e,
															t,
															a,
															o,
															N,
															W,
															G,
															k,
														))
													: ((e.token & 8454144) ===
															8454144 &&
															(k = en(
																e,
																t,
																1,
																N,
																W,
																G,
																4,
																D,
																k,
															)),
														oe(e, t | 32768, 22) &&
															(k = mn(
																e,
																t,
																k,
																N,
																W,
																G,
															)),
														(p |=
															e.assignable & 2
																? 16
																: 32))))
								: ((k = vt(e, t, 1, a, 1, N, W, G)),
									(p |= e.assignable & 1 ? 32 : 16),
									e.token === 18 || e.token === 1074790415
										? e.assignable & 2 && (p |= 16)
										: ((k = he(e, t, k, a, 0, N, W, G)),
											(p = e.assignable & 2 ? 16 : 0),
											e.token !== 18 &&
												D !== 1074790415 &&
												(e.token !== 1077936157 &&
													(p |= 16),
												(k = Se(
													e,
													t,
													a,
													o,
													N,
													W,
													G,
													k,
												)))));
					} else
						e.token === 69271571
							? ((p |= 16),
								D === 209007 && (y |= 16),
								(y |=
									(D === 12402
										? 256
										: D === 12403
											? 512
											: 1) | 2),
								(F = Mn(e, t, a)),
								(p |= e.assignable),
								(k = St(
									e,
									t,
									y,
									a,
									e.tokenPos,
									e.linePos,
									e.colPos,
								)))
							: e.token & 143360
								? ((p |= 16),
									D === 121 && x(e, 93),
									D === 209007 &&
										(e.flags & 1 && x(e, 129), (y |= 16)),
									(F = le(e, t, 0)),
									(y |=
										D === 12402
											? 256
											: D === 12403
												? 512
												: 1),
									(k = St(
										e,
										t,
										y,
										a,
										e.tokenPos,
										e.linePos,
										e.colPos,
									)))
								: e.token === 67174411
									? ((p |= 16),
										(y |= 1),
										(k = St(
											e,
											t,
											y,
											a,
											e.tokenPos,
											e.linePos,
											e.colPos,
										)))
									: e.token === 8457014
										? ((p |= 16),
											D === 12402
												? x(e, 40)
												: D === 12403
													? x(e, 41)
													: D === 143483 && x(e, 93),
											U(e, t),
											(y |= 9 | (D === 209007 ? 16 : 0)),
											e.token & 143360
												? (F = le(e, t, 0))
												: (e.token & 134217728) ===
													  134217728
													? (F = ut(e, t))
													: e.token === 69271571
														? ((y |= 2),
															(F = Mn(e, t, a)),
															(p |= e.assignable))
														: x(
																e,
																28,
																De[
																	e.token &
																		255
																],
															),
											(k = St(
												e,
												t,
												y,
												a,
												e.tokenPos,
												e.linePos,
												e.colPos,
											)))
										: (e.token & 134217728) === 134217728
											? (D === 209007 && (y |= 16),
												(y |=
													D === 12402
														? 256
														: D === 12403
															? 512
															: 1),
												(p |= 16),
												(F = ut(e, t)),
												(k = St(
													e,
													t,
													y,
													a,
													e.tokenPos,
													e.linePos,
													e.colPos,
												)))
											: x(e, 130);
				else if ((e.token & 134217728) === 134217728)
					if (((F = ut(e, t)), e.token === 21)) {
						X(e, t | 32768, 21);
						let { tokenPos: N, linePos: W, colPos: G } = e;
						if ((S === "__proto__" && g++, e.token & 143360)) {
							k = ft(e, t, s, 0, 1, 0, a, 1, N, W, G);
							let { token: R, tokenValue: j } = e;
							(k = he(e, t, k, a, 0, N, W, G)),
								e.token === 18 || e.token === 1074790415
									? R === 1077936157 ||
										R === 1074790415 ||
										R === 18
										? e.assignable & 2
											? (p |= 16)
											: n && Yt(e, t, n, j, s, r)
										: (p |= e.assignable & 1 ? 32 : 16)
									: e.token === 1077936157
										? (e.assignable & 2 && (p |= 16),
											(k = Se(e, t, a, o, N, W, G, k)))
										: ((p |= 16),
											(k = Se(e, t, a, o, N, W, G, k)));
						} else
							(e.token & 2097152) === 2097152
								? ((k =
										e.token === 69271571
											? At(
													e,
													t,
													n,
													0,
													a,
													o,
													s,
													r,
													N,
													W,
													G,
												)
											: Tt(
													e,
													t,
													n,
													0,
													a,
													o,
													s,
													r,
													N,
													W,
													G,
												)),
									(p = e.destructible),
									(e.assignable = p & 16 ? 2 : 1),
									e.token === 18 || e.token === 1074790415
										? e.assignable & 2 && (p |= 16)
										: (e.destructible & 8) !== 8 &&
											((k = he(e, t, k, a, 0, N, W, G)),
											(p = e.assignable & 2 ? 16 : 0),
											(e.token & 4194304) === 4194304
												? (k = Wa(
														e,
														t,
														a,
														o,
														N,
														W,
														G,
														k,
													))
												: ((e.token & 8454144) ===
														8454144 &&
														(k = en(
															e,
															t,
															1,
															N,
															W,
															G,
															4,
															D,
															k,
														)),
													oe(e, t | 32768, 22) &&
														(k = mn(
															e,
															t,
															k,
															N,
															W,
															G,
														)),
													(p |=
														e.assignable & 2
															? 16
															: 32))))
								: ((k = vt(e, t, 1, 0, 1, N, W, G)),
									(p |= e.assignable & 1 ? 32 : 16),
									e.token === 18 || e.token === 1074790415
										? e.assignable & 2 && (p |= 16)
										: ((k = he(e, t, k, a, 0, N, W, G)),
											(p = e.assignable & 1 ? 0 : 16),
											e.token !== 18 &&
												e.token !== 1074790415 &&
												(e.token !== 1077936157 &&
													(p |= 16),
												(k = Se(
													e,
													t,
													a,
													o,
													N,
													W,
													G,
													k,
												)))));
					} else
						e.token === 67174411
							? ((y |= 1),
								(k = St(
									e,
									t,
									y,
									a,
									e.tokenPos,
									e.linePos,
									e.colPos,
								)),
								(p = e.assignable | 16))
							: x(e, 131);
				else if (e.token === 69271571)
					if (
						((F = Mn(e, t, a)),
						(p |= e.destructible & 256 ? 256 : 0),
						(y |= 2),
						e.token === 21)
					) {
						U(e, t | 32768);
						let {
							tokenPos: N,
							linePos: W,
							colPos: G,
							tokenValue: R,
							token: j,
						} = e;
						if (e.token & 143360) {
							k = ft(e, t, s, 0, 1, 0, a, 1, N, W, G);
							let { token: K } = e;
							(k = he(e, t, k, a, 0, N, W, G)),
								(e.token & 4194304) === 4194304
									? ((p |=
											e.assignable & 2
												? 16
												: K === 1077936157
													? 0
													: 32),
										(k = Wa(e, t, a, o, N, W, G, k)))
									: e.token === 18 || e.token === 1074790415
										? K === 1077936157 ||
											K === 1074790415 ||
											K === 18
											? e.assignable & 2
												? (p |= 16)
												: n &&
													(j & 143360) === 143360 &&
													Yt(e, t, n, R, s, r)
											: (p |= e.assignable & 1 ? 32 : 16)
										: ((p |= 16),
											(k = Se(e, t, a, o, N, W, G, k)));
						} else
							(e.token & 2097152) === 2097152
								? ((k =
										e.token === 69271571
											? At(
													e,
													t,
													n,
													0,
													a,
													o,
													s,
													r,
													N,
													W,
													G,
												)
											: Tt(
													e,
													t,
													n,
													0,
													a,
													o,
													s,
													r,
													N,
													W,
													G,
												)),
									(p = e.destructible),
									(e.assignable = p & 16 ? 2 : 1),
									e.token === 18 || e.token === 1074790415
										? e.assignable & 2 && (p |= 16)
										: p & 8
											? x(e, 60)
											: ((k = he(e, t, k, a, 0, N, W, G)),
												(p =
													e.assignable & 2
														? p | 16
														: 0),
												(e.token & 4194304) === 4194304
													? (e.token !== 1077936157 &&
															(p |= 16),
														(k = Wa(
															e,
															t,
															a,
															o,
															N,
															W,
															G,
															k,
														)))
													: ((e.token & 8454144) ===
															8454144 &&
															(k = en(
																e,
																t,
																1,
																N,
																W,
																G,
																4,
																D,
																k,
															)),
														oe(e, t | 32768, 22) &&
															(k = mn(
																e,
																t,
																k,
																N,
																W,
																G,
															)),
														(p |=
															e.assignable & 2
																? 16
																: 32))))
								: ((k = vt(e, t, 1, 0, 1, N, W, G)),
									(p |= e.assignable & 1 ? 32 : 16),
									e.token === 18 || e.token === 1074790415
										? e.assignable & 2 && (p |= 16)
										: ((k = he(e, t, k, a, 0, N, W, G)),
											(p = e.assignable & 1 ? 0 : 16),
											e.token !== 18 &&
												e.token !== 1074790415 &&
												(e.token !== 1077936157 &&
													(p |= 16),
												(k = Se(
													e,
													t,
													a,
													o,
													N,
													W,
													G,
													k,
												)))));
					} else
						e.token === 67174411
							? ((y |= 1),
								(k = St(e, t, y, a, e.tokenPos, E, A)),
								(p = 16))
							: x(e, 42);
				else if (D === 8457014)
					if (
						(X(e, t | 32768, 8457014), (y |= 8), e.token & 143360)
					) {
						let { token: N, line: W, index: G } = e;
						(F = le(e, t, 0)),
							(y |= 1),
							e.token === 67174411
								? ((p |= 16),
									(k = St(
										e,
										t,
										y,
										a,
										e.tokenPos,
										e.linePos,
										e.colPos,
									)))
								: jn(
										G,
										W,
										G,
										N === 209007
											? 44
											: N === 12402 || e.token === 12403
												? 43
												: 45,
										De[N & 255],
									);
					} else
						(e.token & 134217728) === 134217728
							? ((p |= 16),
								(F = ut(e, t)),
								(y |= 1),
								(k = St(e, t, y, a, L, E, A)))
							: e.token === 69271571
								? ((p |= 16),
									(y |= 3),
									(F = Mn(e, t, a)),
									(k = St(
										e,
										t,
										y,
										a,
										e.tokenPos,
										e.linePos,
										e.colPos,
									)))
								: x(e, 123);
				else x(e, 28, De[D & 255]);
				(p |= e.destructible & 128 ? 128 : 0),
					(e.destructible = p),
					f.push(
						I(e, t, L, E, A, {
							type: "Property",
							key: F,
							value: k,
							kind: y & 768 ? (y & 512 ? "set" : "get") : "init",
							computed: (y & 2) > 0,
							method: (y & 1) > 0,
							shorthand: (y & 4) > 0,
						}),
					);
			}
			if (((p |= e.destructible), e.token !== 18)) break;
			U(e, t);
		}
		X(e, t, 1074790415), g > 1 && (p |= 64);
		let T = I(e, t, c, l, d, {
			type: o ? "ObjectPattern" : "ObjectExpression",
			properties: f,
		});
		return !i && e.token & 4194304
			? Mp(e, t, p, a, o, c, l, d, T)
			: ((e.destructible = p), T);
	}
	function V4(e, t, n, i, a, o) {
		X(e, t, 67174411);
		let s = [];
		if (((e.flags = (e.flags | 128) ^ 128), e.token === 16))
			return i & 512 && x(e, 35, "Setter", "one", ""), U(e, t), s;
		i & 256 && x(e, 35, "Getter", "no", "s"),
			i & 512 && e.token === 14 && x(e, 36),
			(t = (t | 134217728) ^ 134217728);
		let r = 0,
			c = 0;
		for (; e.token !== 18; ) {
			let l = null,
				{ tokenPos: d, linePos: f, colPos: p } = e;
			if (
				(e.token & 143360
					? (t & 1024 ||
							((e.token & 36864) === 36864 && (e.flags |= 256),
							(e.token & 537079808) === 537079808 &&
								(e.flags |= 512)),
						(l = Vu(e, t, n, i | 1, 0, d, f, p)))
					: (e.token === 2162700
							? (l = Tt(e, t, n, 1, o, 1, a, 0, d, f, p))
							: e.token === 69271571
								? (l = At(e, t, n, 1, o, 1, a, 0, d, f, p))
								: e.token === 14 &&
									(l = Yn(
										e,
										t,
										n,
										16,
										a,
										0,
										0,
										o,
										1,
										d,
										f,
										p,
									)),
						(c = 1),
						e.destructible & 48 && x(e, 48)),
				e.token === 1077936157)
			) {
				U(e, t | 32768), (c = 1);
				let g = Ae(e, t, 1, 1, 0, e.tokenPos, e.linePos, e.colPos);
				l = I(e, t, d, f, p, {
					type: "AssignmentPattern",
					left: l,
					right: g,
				});
			}
			if ((r++, s.push(l), !oe(e, t, 18) || e.token === 16)) break;
		}
		return (
			i & 512 && r !== 1 && x(e, 35, "Setter", "one", ""),
			n && n.scopeError !== void 0 && to(n.scopeError),
			c && (e.flags |= 128),
			X(e, t, 16),
			s
		);
	}
	function Mn(e, t, n) {
		U(e, t | 32768);
		let i = Ae(
			e,
			(t | 134217728) ^ 134217728,
			1,
			0,
			n,
			e.tokenPos,
			e.linePos,
			e.colPos,
		);
		return X(e, t, 20), i;
	}
	function W4(e, t, n, i, a, o, s, r) {
		e.flags = (e.flags | 128) ^ 128;
		let { tokenPos: c, linePos: l, colPos: d } = e;
		U(e, t | 32768 | 1073741824);
		let f = t & 64 ? Oe(gn(), 1024) : void 0;
		if (((t = (t | 134217728) ^ 134217728), oe(e, t, 16)))
			return $a(e, t, f, [], n, 0, o, s, r);
		let p = 0;
		e.destructible &= -385;
		let g,
			T = [],
			D = 0,
			S = 0,
			{ tokenPos: E, linePos: A, colPos: L } = e;
		for (e.assignable = 1; e.token !== 16; ) {
			let { token: y, tokenPos: F, linePos: k, colPos: J } = e;
			if (y & 143360)
				f && nn(e, t, f, e.tokenValue, 1, 0),
					(g = ft(e, t, i, 0, 1, 0, 1, 1, F, k, J)),
					e.token === 16 || e.token === 18
						? e.assignable & 2
							? ((p |= 16), (S = 1))
							: ((y & 537079808) === 537079808 ||
									(y & 36864) === 36864) &&
								(S = 1)
						: (e.token === 1077936157 ? (S = 1) : (p |= 16),
							(g = he(e, t, g, 1, 0, F, k, J)),
							e.token !== 16 &&
								e.token !== 18 &&
								(g = Se(e, t, 1, 0, F, k, J, g)));
			else if ((y & 2097152) === 2097152)
				(g =
					y === 2162700
						? Tt(e, t | 1073741824, f, 0, 1, 0, i, a, F, k, J)
						: At(e, t | 1073741824, f, 0, 1, 0, i, a, F, k, J)),
					(p |= e.destructible),
					(S = 1),
					(e.assignable = 2),
					e.token !== 16 &&
						e.token !== 18 &&
						(p & 8 && x(e, 119),
						(g = he(e, t, g, 0, 0, F, k, J)),
						(p |= 16),
						e.token !== 16 &&
							e.token !== 18 &&
							(g = Se(e, t, 0, 0, F, k, J, g)));
			else if (y === 14) {
				(g = Yn(e, t, f, 16, i, a, 0, 1, 0, F, k, J)),
					e.destructible & 16 && x(e, 72),
					(S = 1),
					D && (e.token === 16 || e.token === 18) && T.push(g),
					(p |= 8);
				break;
			} else {
				if (
					((p |= 16),
					(g = Ae(e, t, 1, 0, 1, F, k, J)),
					D && (e.token === 16 || e.token === 18) && T.push(g),
					e.token === 18 && (D || ((D = 1), (T = [g]))),
					D)
				) {
					for (; oe(e, t | 32768, 18); )
						T.push(
							Ae(e, t, 1, 0, 1, e.tokenPos, e.linePos, e.colPos),
						);
					(e.assignable = 2),
						(g = I(e, t, E, A, L, {
							type: "SequenceExpression",
							expressions: T,
						}));
				}
				return X(e, t, 16), (e.destructible = p), g;
			}
			if (
				(D && (e.token === 16 || e.token === 18) && T.push(g),
				!oe(e, t | 32768, 18))
			)
				break;
			if ((D || ((D = 1), (T = [g])), e.token === 16)) {
				p |= 8;
				break;
			}
		}
		return (
			D &&
				((e.assignable = 2),
				(g = I(e, t, E, A, L, {
					type: "SequenceExpression",
					expressions: T,
				}))),
			X(e, t, 16),
			p & 16 && p & 8 && x(e, 146),
			(p |=
				e.destructible & 256
					? 256
					: 0 | (e.destructible & 128)
						? 128
						: 0),
			e.token === 10
				? (p & 48 && x(e, 47),
					t & 4196352 && p & 128 && x(e, 29),
					t & 2098176 && p & 256 && x(e, 30),
					S && (e.flags |= 128),
					$a(e, t, f, D ? T : [g], n, 0, o, s, r))
				: (p & 8 && x(e, 140),
					(e.destructible = ((e.destructible | 256) ^ 256) | p),
					t & 128
						? I(e, t, c, l, d, {
								type: "ParenthesizedExpression",
								expression: g,
							})
						: g)
		);
	}
	function zu(e, t, n, i, a) {
		let { tokenValue: o } = e,
			s = le(e, t, 0);
		if (((e.assignable = 1), e.token === 10)) {
			let r;
			return (
				t & 64 && (r = no(e, t, o)),
				(e.flags = (e.flags | 128) ^ 128),
				Bi(e, t, r, [s], 0, n, i, a)
			);
		}
		return s;
	}
	function ao(e, t, n, i, a, o, s, r, c, l) {
		o || x(e, 55), a && x(e, 49), (e.flags &= -129);
		let d = t & 64 ? no(e, t, n) : void 0;
		return Bi(e, t, d, [i], s, r, c, l);
	}
	function $a(e, t, n, i, a, o, s, r, c) {
		a || x(e, 55);
		for (let l = 0; l < i.length; ++l) Dt(e, i[l]);
		return Bi(e, t, n, i, o, s, r, c);
	}
	function Bi(e, t, n, i, a, o, s, r) {
		e.flags & 1 && x(e, 46),
			X(e, t | 32768, 10),
			(t = ((t | 15728640) ^ 15728640) | (a << 22));
		let c = e.token !== 2162700,
			l;
		if ((n && n.scopeError !== void 0 && to(n.scopeError), c))
			l = Ae(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
		else {
			switch (
				(n && (n = Oe(n, 128)),
				(l = io(
					e,
					(t | 134221824 | 8192 | 16384) ^ 134246400,
					n,
					16,
					void 0,
					void 0,
				)),
				e.token)
			) {
				case 69271571:
					e.flags & 1 || x(e, 113);
					break;
				case 67108877:
				case 67174409:
				case 22:
					x(e, 114);
				case 67174411:
					e.flags & 1 || x(e, 113), (e.flags |= 1024);
					break;
			}
			(e.token & 8454144) === 8454144 &&
				!(e.flags & 1) &&
				x(e, 28, De[e.token & 255]),
				(e.token & 33619968) === 33619968 && x(e, 122);
		}
		return (
			(e.assignable = 2),
			I(e, t, o, s, r, {
				type: "ArrowFunctionExpression",
				params: i,
				body: l,
				async: a === 1,
				expression: c,
			})
		);
	}
	function Up(e, t, n, i, a) {
		X(e, t, 67174411), (e.flags = (e.flags | 128) ^ 128);
		let o = [];
		if (oe(e, t, 16)) return o;
		t = (t | 134217728) ^ 134217728;
		let s = 0;
		for (; e.token !== 18; ) {
			let r,
				{ tokenPos: c, linePos: l, colPos: d } = e;
			if (
				(e.token & 143360
					? (t & 1024 ||
							((e.token & 36864) === 36864 && (e.flags |= 256),
							(e.token & 537079808) === 537079808 &&
								(e.flags |= 512)),
						(r = Vu(e, t, n, a | 1, 0, c, l, d)))
					: (e.token === 2162700
							? (r = Tt(e, t, n, 1, i, 1, a, 0, c, l, d))
							: e.token === 69271571
								? (r = At(e, t, n, 1, i, 1, a, 0, c, l, d))
								: e.token === 14
									? (r = Yn(
											e,
											t,
											n,
											16,
											a,
											0,
											0,
											i,
											1,
											c,
											l,
											d,
										))
									: x(e, 28, De[e.token & 255]),
						(s = 1),
						e.destructible & 48 && x(e, 48)),
				e.token === 1077936157)
			) {
				U(e, t | 32768), (s = 1);
				let f = Ae(e, t, 1, 1, i, e.tokenPos, e.linePos, e.colPos);
				r = I(e, t, c, l, d, {
					type: "AssignmentPattern",
					left: r,
					right: f,
				});
			}
			if ((o.push(r), !oe(e, t, 18) || e.token === 16)) break;
		}
		return (
			s && (e.flags |= 128),
			n && (s || t & 1024) && n.scopeError !== void 0 && to(n.scopeError),
			X(e, t, 16),
			o
		);
	}
	function Ka(e, t, n, i, a, o, s) {
		let { token: r } = e;
		if (r & 67108864) {
			if (r === 67108877) {
				U(e, t | 1073741824), (e.assignable = 1);
				let c = Pp(e, t);
				return Ka(
					e,
					t,
					I(e, t, a, o, s, {
						type: "MemberExpression",
						object: n,
						computed: !1,
						property: c,
					}),
					0,
					a,
					o,
					s,
				);
			} else if (r === 69271571) {
				U(e, t | 32768);
				let { tokenPos: c, linePos: l, colPos: d } = e,
					f = it(e, t, i, 1, c, l, d);
				return (
					X(e, t, 20),
					(e.assignable = 1),
					Ka(
						e,
						t,
						I(e, t, a, o, s, {
							type: "MemberExpression",
							object: n,
							computed: !0,
							property: f,
						}),
						0,
						a,
						o,
						s,
					)
				);
			} else if (r === 67174408 || r === 67174409)
				return (
					(e.assignable = 2),
					Ka(
						e,
						t,
						I(e, t, a, o, s, {
							type: "TaggedTemplateExpression",
							tag: n,
							quasi:
								e.token === 67174408
									? ju(e, t | 65536)
									: Hu(e, t, e.tokenPos, e.linePos, e.colPos),
						}),
						0,
						a,
						o,
						s,
					)
				);
		}
		return n;
	}
	function G4(e, t, n, i, a, o) {
		let s = le(e, t | 32768, 0),
			{ tokenPos: r, linePos: c, colPos: l } = e;
		if (oe(e, t, 67108877)) {
			if (t & 67108864 && e.token === 143494)
				return (e.assignable = 2), X4(e, t, s, i, a, o);
			x(e, 92);
		}
		(e.assignable = 2),
			(e.token & 16842752) === 16842752 && x(e, 63, De[e.token & 255]);
		let d = ft(e, t, 2, 1, 0, 0, n, 1, r, c, l);
		(t = (t | 134217728) ^ 134217728), e.token === 67108991 && x(e, 163);
		let f = Ka(e, t, d, n, r, c, l);
		return (
			(e.assignable = 2),
			I(e, t, i, a, o, {
				type: "NewExpression",
				callee: f,
				arguments: e.token === 67174411 ? qu(e, t, n) : [],
			})
		);
	}
	function X4(e, t, n, i, a, o) {
		let s = le(e, t, 0);
		return I(e, t, i, a, o, { type: "MetaProperty", meta: n, property: s });
	}
	function Hp(e, t, n, i, a, o) {
		return (
			e.token === 209008 && x(e, 29),
			t & 2098176 && e.token === 241773 && x(e, 30),
			(e.token & 537079808) === 537079808 && (e.flags |= 512),
			ao(e, t, e.tokenValue, le(e, t, 0), 0, n, 1, i, a, o)
		);
	}
	function Yu(e, t, n, i, a, o, s, r, c, l) {
		U(e, t | 32768);
		let d = t & 64 ? Oe(gn(), 1024) : void 0;
		if (((t = (t | 134217728) ^ 134217728), oe(e, t, 16)))
			return e.token === 10
				? (s & 1 && x(e, 46), $a(e, t, d, [], i, 1, r, c, l))
				: I(e, t, r, c, l, {
						type: "CallExpression",
						callee: n,
						arguments: [],
					});
		let f = 0,
			p = null,
			g = 0;
		e.destructible = (e.destructible | 256 | 128) ^ 384;
		let T = [];
		for (; e.token !== 16; ) {
			let { token: D, tokenPos: S, linePos: E, colPos: A } = e;
			if (D & 143360)
				d && nn(e, t, d, e.tokenValue, a, 0),
					(p = ft(e, t, a, 0, 1, 0, 1, 1, S, E, A)),
					e.token === 16 || e.token === 18
						? e.assignable & 2
							? ((f |= 16), (g = 1))
							: (D & 537079808) === 537079808
								? (e.flags |= 512)
								: (D & 36864) === 36864 && (e.flags |= 256)
						: (e.token === 1077936157 ? (g = 1) : (f |= 16),
							(p = he(e, t, p, 1, 0, S, E, A)),
							e.token !== 16 &&
								e.token !== 18 &&
								(p = Se(e, t, 1, 0, S, E, A, p)));
			else if (D & 2097152)
				(p =
					D === 2162700
						? Tt(e, t, d, 0, 1, 0, a, o, S, E, A)
						: At(e, t, d, 0, 1, 0, a, o, S, E, A)),
					(f |= e.destructible),
					(g = 1),
					e.token !== 16 &&
						e.token !== 18 &&
						(f & 8 && x(e, 119),
						(p = he(e, t, p, 0, 0, S, E, A)),
						(f |= 16),
						(e.token & 8454144) === 8454144 &&
							(p = en(e, t, 1, r, c, l, 4, D, p)),
						oe(e, t | 32768, 22) && (p = mn(e, t, p, r, c, l)));
			else if (D === 14)
				(p = Yn(e, t, d, 16, a, o, 1, 1, 0, S, E, A)),
					(f |= (e.token === 16 ? 0 : 16) | e.destructible),
					(g = 1);
			else {
				for (
					p = Ae(e, t, 1, 0, 0, S, E, A), f = e.assignable, T.push(p);
					oe(e, t | 32768, 18);

				)
					T.push(Ae(e, t, 1, 0, 0, S, E, A));
				return (
					(f |= e.assignable),
					X(e, t, 16),
					(e.destructible = f | 16),
					(e.assignable = 2),
					I(e, t, r, c, l, {
						type: "CallExpression",
						callee: n,
						arguments: T,
					})
				);
			}
			if ((T.push(p), !oe(e, t | 32768, 18))) break;
		}
		return (
			X(e, t, 16),
			(f |=
				e.destructible & 256
					? 256
					: 0 | (e.destructible & 128)
						? 128
						: 0),
			e.token === 10
				? (f & 48 && x(e, 25),
					(e.flags & 1 || s & 1) && x(e, 46),
					f & 128 && x(e, 29),
					t & 2098176 && f & 256 && x(e, 30),
					g && (e.flags |= 128),
					$a(e, t, d, T, i, 1, r, c, l))
				: (f & 8 && x(e, 60),
					(e.assignable = 2),
					I(e, t, r, c, l, {
						type: "CallExpression",
						callee: n,
						arguments: T,
					}))
		);
	}
	function K4(e, t, n, i, a) {
		let { tokenRaw: o, tokenRegExp: s, tokenValue: r } = e;
		return (
			U(e, t),
			(e.assignable = 2),
			t & 512
				? I(e, t, n, i, a, {
						type: "Literal",
						value: r,
						regex: s,
						raw: o,
					})
				: I(e, t, n, i, a, { type: "Literal", value: r, regex: s })
		);
	}
	function Nu(e, t, n, i, a, o, s) {
		t = (t | 16777216 | 1024) ^ 16777216;
		let r = oo(e, t);
		r.length && ((a = e.tokenPos), (o = e.linePos), (s = e.colPos)),
			e.leadingDecorators.length &&
				(e.leadingDecorators.push(...r),
				(r = e.leadingDecorators),
				(e.leadingDecorators = [])),
			U(e, t);
		let c = null,
			l = null,
			{ tokenValue: d } = e;
		e.token & 4096 && e.token !== 20567
			? (kp(e, t, e.token) && x(e, 115),
				(e.token & 537079808) === 537079808 && x(e, 116),
				n && (nn(e, t, n, d, 32, 0), i && i & 2 && fn(e, d)),
				(c = le(e, t, 0)))
			: i & 1 || x(e, 37, "Class");
		let f = t;
		oe(e, t | 32768, 20567)
			? ((l = vt(e, t, 0, 0, 0, e.tokenPos, e.linePos, e.colPos)),
				(f |= 524288))
			: (f = (f | 524288) ^ 524288);
		let p = jp(e, f, t, n, 2, 8, 0);
		return I(
			e,
			t,
			a,
			o,
			s,
			t & 1
				? {
						type: "ClassDeclaration",
						id: c,
						superClass: l,
						decorators: r,
						body: p,
					}
				: { type: "ClassDeclaration", id: c, superClass: l, body: p },
		);
	}
	function Q4(e, t, n, i, a, o) {
		let s = null,
			r = null;
		t = (t | 1024 | 16777216) ^ 16777216;
		let c = oo(e, t);
		c.length && ((i = e.tokenPos), (a = e.linePos), (o = e.colPos)),
			U(e, t),
			e.token & 4096 &&
				e.token !== 20567 &&
				(kp(e, t, e.token) && x(e, 115),
				(e.token & 537079808) === 537079808 && x(e, 116),
				(s = le(e, t, 0)));
		let l = t;
		oe(e, t | 32768, 20567)
			? ((r = vt(e, t, 0, n, 0, e.tokenPos, e.linePos, e.colPos)),
				(l |= 524288))
			: (l = (l | 524288) ^ 524288);
		let d = jp(e, l, t, void 0, 2, 0, n);
		return (
			(e.assignable = 2),
			I(
				e,
				t,
				i,
				a,
				o,
				t & 1
					? {
							type: "ClassExpression",
							id: s,
							superClass: r,
							decorators: c,
							body: d,
						}
					: {
							type: "ClassExpression",
							id: s,
							superClass: r,
							body: d,
						},
			)
		);
	}
	function oo(e, t) {
		let n = [];
		if (t & 1)
			for (; e.token === 133; )
				n.push(J4(e, t, e.tokenPos, e.linePos, e.colPos));
		return n;
	}
	function J4(e, t, n, i, a) {
		U(e, t | 32768);
		let o = ft(e, t, 2, 0, 1, 0, 0, 1, n, i, a);
		return (
			(o = he(e, t, o, 0, 0, n, i, a)),
			I(e, t, n, i, a, { type: "Decorator", expression: o })
		);
	}
	function jp(e, t, n, i, a, o, s) {
		let { tokenPos: r, linePos: c, colPos: l } = e;
		X(e, t | 32768, 2162700), (t = (t | 134217728) ^ 134217728);
		let d = e.flags & 32;
		e.flags = (e.flags | 32) ^ 32;
		let f = [],
			p;
		for (; e.token !== 1074790415; ) {
			let g = 0;
			if (
				((p = oo(e, t)),
				(g = p.length),
				g > 0 && e.tokenValue === "constructor" && x(e, 107),
				e.token === 1074790415 && x(e, 106),
				oe(e, t, 1074790417))
			) {
				g > 0 && x(e, 117);
				continue;
			}
			f.push(qp(e, t, i, n, a, p, 0, s, e.tokenPos, e.linePos, e.colPos));
		}
		return (
			X(e, o & 8 ? t | 32768 : t, 1074790415),
			(e.flags = (e.flags & -33) | d),
			I(e, t, r, c, l, { type: "ClassBody", body: f })
		);
	}
	function qp(e, t, n, i, a, o, s, r, c, l, d) {
		let f = s ? 32 : 0,
			p = null,
			{ token: g, tokenPos: T, linePos: D, colPos: S } = e;
		if (g & 176128)
			switch (((p = le(e, t, 0)), g)) {
				case 36972:
					if (
						!s &&
						e.token !== 67174411 &&
						(e.token & 1048576) !== 1048576 &&
						e.token !== 1077936157
					)
						return qp(e, t, n, i, a, o, 1, r, c, l, d);
					break;
				case 209007:
					if (e.token !== 67174411 && !(e.flags & 1)) {
						if (t & 1 && (e.token & 1073741824) === 1073741824)
							return Ga(e, t, p, f, o, T, D, S);
						f |= 16 | (Ou(e, t, 8457014) ? 8 : 0);
					}
					break;
				case 12402:
					if (e.token !== 67174411) {
						if (t & 1 && (e.token & 1073741824) === 1073741824)
							return Ga(e, t, p, f, o, T, D, S);
						f |= 256;
					}
					break;
				case 12403:
					if (e.token !== 67174411) {
						if (t & 1 && (e.token & 1073741824) === 1073741824)
							return Ga(e, t, p, f, o, T, D, S);
						f |= 512;
					}
					break;
			}
		else if (g === 69271571) (f |= 2), (p = Mn(e, i, r));
		else if ((g & 134217728) === 134217728) p = ut(e, t);
		else if (g === 8457014) (f |= 8), U(e, t);
		else if (t & 1 && e.token === 131)
			(f |= 4096), (p = eo(e, t | 16384, T, D, S));
		else if (t & 1 && (e.token & 1073741824) === 1073741824) f |= 128;
		else {
			if (s && g === 2162700) return y4(e, t, n, T, D, S);
			g === 122
				? ((p = le(e, t, 0)),
					e.token !== 67174411 && x(e, 28, De[e.token & 255]))
				: x(e, 28, De[e.token & 255]);
		}
		if (
			(f & 792 &&
				(e.token & 143360
					? (p = le(e, t, 0))
					: (e.token & 134217728) === 134217728
						? (p = ut(e, t))
						: e.token === 69271571
							? ((f |= 2), (p = Mn(e, t, 0)))
							: e.token === 122
								? (p = le(e, t, 0))
								: t & 1 && e.token === 131
									? ((f |= 4096), (p = eo(e, t, T, D, S)))
									: x(e, 132)),
			f & 2 ||
				(e.tokenValue === "constructor"
					? ((e.token & 1073741824) === 1073741824
							? x(e, 126)
							: !(f & 32) &&
								e.token === 67174411 &&
								(f & 920
									? x(e, 51, "accessor")
									: t & 524288 ||
										(e.flags & 32
											? x(e, 52)
											: (e.flags |= 32))),
						(f |= 64))
					: !(f & 4096) &&
						f & 824 &&
						e.tokenValue === "prototype" &&
						x(e, 50)),
			t & 1 && e.token !== 67174411)
		)
			return Ga(e, t, p, f, o, T, D, S);
		let E = St(e, t, f, r, e.tokenPos, e.linePos, e.colPos);
		return I(
			e,
			t,
			c,
			l,
			d,
			t & 1
				? {
						type: "MethodDefinition",
						kind:
							!(f & 32) && f & 64
								? "constructor"
								: f & 256
									? "get"
									: f & 512
										? "set"
										: "method",
						static: (f & 32) > 0,
						computed: (f & 2) > 0,
						key: p,
						decorators: o,
						value: E,
					}
				: {
						type: "MethodDefinition",
						kind:
							!(f & 32) && f & 64
								? "constructor"
								: f & 256
									? "get"
									: f & 512
										? "set"
										: "method",
						static: (f & 32) > 0,
						computed: (f & 2) > 0,
						key: p,
						value: E,
					},
		);
	}
	function eo(e, t, n, i, a) {
		U(e, t);
		let { tokenValue: o } = e;
		return (
			o === "constructor" && x(e, 125),
			U(e, t),
			I(e, t, n, i, a, { type: "PrivateIdentifier", name: o })
		);
	}
	function Ga(e, t, n, i, a, o, s, r) {
		let c = null;
		if ((i & 8 && x(e, 0), e.token === 1077936157)) {
			U(e, t | 32768);
			let { tokenPos: l, linePos: d, colPos: f } = e;
			e.token === 537079928 && x(e, 116),
				(c = ft(e, t | 16384, 2, 0, 1, 0, 0, 1, l, d, f)),
				((e.token & 1073741824) !== 1073741824 ||
					(e.token & 4194304) === 4194304) &&
					((c = he(e, t | 16384, c, 0, 0, l, d, f)),
					(c = Se(e, t | 16384, 0, 0, l, d, f, c)),
					e.token === 18 && (c = Vt(e, t, 0, o, s, r, c)));
		}
		return I(e, t, o, s, r, {
			type: "PropertyDefinition",
			key: n,
			value: c,
			static: (i & 32) > 0,
			computed: (i & 2) > 0,
			decorators: a,
		});
	}
	function zp(e, t, n, i, a, o, s, r) {
		if (e.token & 143360) return Vu(e, t, n, i, a, o, s, r);
		(e.token & 2097152) !== 2097152 && x(e, 28, De[e.token & 255]);
		let c =
			e.token === 69271571
				? At(e, t, n, 1, 0, 1, i, a, o, s, r)
				: Tt(e, t, n, 1, 0, 1, i, a, o, s, r);
		return (
			e.destructible & 16 && x(e, 48), e.destructible & 32 && x(e, 48), c
		);
	}
	function Vu(e, t, n, i, a, o, s, r) {
		let { tokenValue: c, token: l } = e;
		return (
			t & 1024 &&
				((l & 537079808) === 537079808
					? x(e, 116)
					: (l & 36864) === 36864 && x(e, 115)),
			(l & 20480) === 20480 && x(e, 100),
			t & 2099200 && l === 241773 && x(e, 30),
			l === 241739 && i & 24 && x(e, 98),
			t & 4196352 && l === 209008 && x(e, 96),
			U(e, t),
			n && Yt(e, t, n, c, i, a),
			I(e, t, o, s, r, { type: "Identifier", name: c })
		);
	}
	function Wu(e, t, n, i, a, o) {
		if ((U(e, t), e.token === 8456259))
			return I(e, t, i, a, o, {
				type: "JSXFragment",
				openingFragment: Z4(e, t, i, a, o),
				children: fp(e, t),
				closingFragment: e6(e, t, n, e.tokenPos, e.linePos, e.colPos),
			});
		let s = null,
			r = [],
			c = i6(e, t, n, i, a, o);
		if (!c.selfClosing) {
			(r = fp(e, t)), (s = $4(e, t, n, e.tokenPos, e.linePos, e.colPos));
			let l = Za(s.name);
			Za(c.name) !== l && x(e, 150, l);
		}
		return I(e, t, i, a, o, {
			type: "JSXElement",
			children: r,
			openingElement: c,
			closingElement: s,
		});
	}
	function Z4(e, t, n, i, a) {
		return bn(e, t), I(e, t, n, i, a, { type: "JSXOpeningFragment" });
	}
	function $4(e, t, n, i, a, o) {
		X(e, t, 25);
		let s = Yp(e, t, e.tokenPos, e.linePos, e.colPos);
		return (
			n ? X(e, t, 8456259) : (e.token = bn(e, t)),
			I(e, t, i, a, o, { type: "JSXClosingElement", name: s })
		);
	}
	function e6(e, t, n, i, a, o) {
		return (
			X(e, t, 25),
			X(e, t, 8456259),
			I(e, t, i, a, o, { type: "JSXClosingFragment" })
		);
	}
	function fp(e, t) {
		let n = [];
		for (; e.token !== 25; )
			(e.index = e.tokenPos = e.startPos),
				(e.column = e.colPos = e.startColumn),
				(e.line = e.linePos = e.startLine),
				bn(e, t),
				n.push(t6(e, t, e.tokenPos, e.linePos, e.colPos));
		return n;
	}
	function t6(e, t, n, i, a) {
		if (e.token === 138) return n6(e, t, n, i, a);
		if (e.token === 2162700) return Wp(e, t, 0, 0, n, i, a);
		if (e.token === 8456258) return Wu(e, t, 0, n, i, a);
		x(e, 0);
	}
	function n6(e, t, n, i, a) {
		bn(e, t);
		let o = { type: "JSXText", value: e.tokenValue };
		return t & 512 && (o.raw = e.tokenRaw), I(e, t, n, i, a, o);
	}
	function i6(e, t, n, i, a, o) {
		(e.token & 143360) !== 143360 && (e.token & 4096) !== 4096 && x(e, 0);
		let s = Yp(e, t, e.tokenPos, e.linePos, e.colPos),
			r = o6(e, t),
			c = e.token === 8457016;
		return (
			e.token === 8456259
				? bn(e, t)
				: (X(e, t, 8457016), n ? X(e, t, 8456259) : bn(e, t)),
			I(e, t, i, a, o, {
				type: "JSXOpeningElement",
				name: s,
				attributes: r,
				selfClosing: c,
			})
		);
	}
	function Yp(e, t, n, i, a) {
		Du(e);
		let o = so(e, t, n, i, a);
		if (e.token === 21) return Vp(e, t, o, n, i, a);
		for (; oe(e, t, 67108877); ) Du(e), (o = a6(e, t, o, n, i, a));
		return o;
	}
	function a6(e, t, n, i, a, o) {
		let s = so(e, t, e.tokenPos, e.linePos, e.colPos);
		return I(e, t, i, a, o, {
			type: "JSXMemberExpression",
			object: n,
			property: s,
		});
	}
	function o6(e, t) {
		let n = [];
		for (
			;
			e.token !== 8457016 && e.token !== 8456259 && e.token !== 1048576;

		)
			n.push(r6(e, t, e.tokenPos, e.linePos, e.colPos));
		return n;
	}
	function s6(e, t, n, i, a) {
		U(e, t), X(e, t, 14);
		let o = Ae(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
		return (
			X(e, t, 1074790415),
			I(e, t, n, i, a, { type: "JSXSpreadAttribute", argument: o })
		);
	}
	function r6(e, t, n, i, a) {
		if (e.token === 2162700) return s6(e, t, n, i, a);
		Du(e);
		let o = null,
			s = so(e, t, n, i, a);
		if (
			(e.token === 21 && (s = Vp(e, t, s, n, i, a)),
			e.token === 1077936157)
		) {
			let r = $E(e, t),
				{ tokenPos: c, linePos: l, colPos: d } = e;
			switch (r) {
				case 134283267:
					o = ut(e, t);
					break;
				case 8456258:
					o = Wu(e, t, 1, c, l, d);
					break;
				case 2162700:
					o = Wp(e, t, 1, 1, c, l, d);
					break;
				default:
					x(e, 149);
			}
		}
		return I(e, t, n, i, a, { type: "JSXAttribute", value: o, name: s });
	}
	function Vp(e, t, n, i, a, o) {
		X(e, t, 21);
		let s = so(e, t, e.tokenPos, e.linePos, e.colPos);
		return I(e, t, i, a, o, {
			type: "JSXNamespacedName",
			namespace: n,
			name: s,
		});
	}
	function Wp(e, t, n, i, a, o, s) {
		U(e, t | 32768);
		let { tokenPos: r, linePos: c, colPos: l } = e;
		if (e.token === 14) return u6(e, t, a, o, s);
		let d = null;
		return (
			e.token === 1074790415
				? (i && x(e, 152),
					(d = c6(e, t, e.startPos, e.startLine, e.startColumn)))
				: (d = Ae(e, t, 1, 0, 0, r, c, l)),
			n ? X(e, t, 1074790415) : bn(e, t),
			I(e, t, a, o, s, { type: "JSXExpressionContainer", expression: d })
		);
	}
	function u6(e, t, n, i, a) {
		X(e, t, 14);
		let o = Ae(e, t, 1, 0, 0, e.tokenPos, e.linePos, e.colPos);
		return (
			X(e, t, 1074790415),
			I(e, t, n, i, a, { type: "JSXSpreadChild", expression: o })
		);
	}
	function c6(e, t, n, i, a) {
		return (
			(e.startPos = e.tokenPos),
			(e.startLine = e.linePos),
			(e.startColumn = e.colPos),
			I(e, t, n, i, a, { type: "JSXEmptyExpression" })
		);
	}
	function so(e, t, n, i, a) {
		let { tokenValue: o } = e;
		return U(e, t), I(e, t, n, i, a, { type: "JSXIdentifier", name: o });
	}
	function Gp(e, t) {
		return r4(e, t, 0);
	}
	var ec = ht($u(), 1),
		uf = ht(Xn(), 1),
		tc = class extends uf.default {
			constructor() {
				super(),
					(this.parseOptions = {
						ranges: !0,
						module: !0,
						globalReturn: !0,
					}),
					(this.generationOptions = {
						format: {
							quotes: "double",
							escapeless: !0,
							compact: !0,
						},
					}),
					(this.parse = Gp),
					(this.generate = ec.generate);
			}
			rewrite(t, n = {}) {
				return this.recast(t, n, "rewrite");
			}
			source(t, n = {}) {
				return this.recast(t, n, "source");
			}
			recast(t, n = {}, i = "") {
				try {
					let a = [],
						o = this.parse(t, this.parseOptions),
						s = {
							data: n,
							changes: [],
							input: t,
							ast: o,
							get slice() {
								return r;
							},
						},
						r = 0;
					this.iterate(o, (c, l = null) => {
						l && l.inTransformer && (c.isTransformer = !0),
							(c.parent = l),
							this.emit(c.type, c, s, i);
					}),
						s.changes.sort(
							(c, l) => c.start - l.start || c.end - l.end,
						);
					for (let c of s.changes)
						"start" in c &&
							typeof c.start == "number" &&
							a.push(t.slice(r, c.start)),
							c.node &&
								a.push(
									typeof c.node == "string"
										? c.node
										: (0, ec.generate)(
												c.node,
												this.generationOptions,
											),
								),
							"end" in c &&
								typeof c.end == "number" &&
								(r = c.end);
					return a.push(t.slice(r)), a.join("");
				} catch {
					return t;
				}
			}
			iterate(t, n) {
				if (typeof t != "object" || !n) return;
				i(t, null, n);
				function i(a, o, s) {
					if (!(typeof a != "object" || !s)) {
						s(a, o, s);
						for (let r in a)
							r !== "parent" &&
								(Array.isArray(a[r])
									? a[r].forEach((c) => {
											c && i(c, a, s);
										})
									: a[r] && i(a[r], a, s));
						typeof a.iterateEnd == "function" && a.iterateEnd();
					}
				}
			}
		},
		cf = tc;
	var Dc = ht(ac(), 1);
	var sc = ht(kf(), 1),
		wf = ht(Sf(), 1),
		Df = location.origin + navigator.userAgent,
		If = {
			encode(e) {
				return (
					e &&
					encodeURIComponent(
						e
							.toString()
							.split("")
							.map((t, n) =>
								n % 2
									? String.fromCharCode(t.charCodeAt() ^ 2)
									: t,
							)
							.join(""),
					)
				);
			},
			decode(e) {
				if (!e) return e;
				let [t, ...n] = e.split("?");
				return (
					decodeURIComponent(t)
						.split("")
						.map((i, a) =>
							a % 2
								? String.fromCharCode(i.charCodeAt(0) ^ 2)
								: i,
						)
						.join("") + (n.length ? "?" + n.join("?") : "")
				);
			},
		},
		Nf = {
			encode: (e) =>
				e && sc.default.encrypt(e, Df).toString().substring(10),
			decode: (e) =>
				e &&
				sc.default.decrypt("U2FsdGVkX1" + e, Df).toString(wf.default),
		},
		Lf = {
			encode(e) {
				return e && encodeURIComponent(e);
			},
			decode(e) {
				return e && decodeURIComponent(e);
			},
		},
		Pf = {
			encode(e) {
				if (!e) return e;
				e = e.toString();
				let t = Array.from(
						"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
					),
					n,
					i,
					a,
					o,
					s = "",
					r = e.length % 3;
				for (let c = 0; c < e.length; ) {
					if (
						(i = e.charCodeAt(c++)) > 255 ||
						(a = e.charCodeAt(c++)) > 255 ||
						(o = e.charCodeAt(c++)) > 255
					)
						throw new TypeError("invalid character found");
					(n = (i << 16) | (a << 8) | o),
						(s +=
							t[(n >> 18) & 63] +
							t[(n >> 12) & 63] +
							t[(n >> 6) & 63] +
							t[n & 63]);
				}
				return encodeURIComponent(
					r ? s.slice(0, r - 3) + "===".substr(r) : s,
				);
			},
			decode(e) {
				if (!e) return e;
				e = decodeURIComponent(e.toString());
				let t = {
					0: 52,
					1: 53,
					2: 54,
					3: 55,
					4: 56,
					5: 57,
					6: 58,
					7: 59,
					8: 60,
					9: 61,
					A: 0,
					B: 1,
					C: 2,
					D: 3,
					E: 4,
					F: 5,
					G: 6,
					H: 7,
					I: 8,
					J: 9,
					K: 10,
					L: 11,
					M: 12,
					N: 13,
					O: 14,
					P: 15,
					Q: 16,
					R: 17,
					S: 18,
					T: 19,
					U: 20,
					V: 21,
					W: 22,
					X: 23,
					Y: 24,
					Z: 25,
					a: 26,
					b: 27,
					c: 28,
					d: 29,
					e: 30,
					f: 31,
					g: 32,
					h: 33,
					i: 34,
					j: 35,
					k: 36,
					l: 37,
					m: 38,
					n: 39,
					o: 40,
					p: 41,
					q: 42,
					r: 43,
					s: 44,
					t: 45,
					u: 46,
					v: 47,
					w: 48,
					x: 49,
					y: 50,
					z: 51,
					"+": 62,
					"/": 63,
					"=": 64,
				};
				(e = e.replace(/\s+/g, "")),
					(e += "==".slice(2 - (e.length & 3)));
				let n,
					i = "",
					a,
					o;
				for (let s = 0; s < e.length; )
					(n =
						(t[e.charAt(s++)] << 18) |
						(t[e.charAt(s++)] << 12) |
						((a = t[e.charAt(s++)]) << 6) |
						(o = t[e.charAt(s++)])),
						(i +=
							a === 64
								? String.fromCharCode((n >> 16) & 255)
								: o === 64
									? String.fromCharCode(
											(n >> 16) & 255,
											(n >> 8) & 255,
										)
									: String.fromCharCode(
											(n >> 16) & 255,
											(n >> 8) & 255,
											n & 255,
										));
				return i;
			},
		};
	var uc = {};
	te(uc, {
		charset: () => rc,
		charsets: () => O6,
		contentType: () => B6,
		extension: () => F6,
		lookup: () => Hf,
	});
	var Ui = ht(Bf(), 1),
		Ff = /^\s*([^;\s]*)(?:;|\s|$)/,
		R6 = /^text\//i,
		Mf = Object.create(null),
		Uf = Object.create(null),
		O6 = { lookup: rc };
	M6(Mf, Uf);
	function rc(e) {
		if (!e || typeof e != "string") return !1;
		let t = Ff.exec(e),
			n = t && Ui.default[t[1].toLowerCase()];
		return n && n.charset ? n.charset : t && R6.test(t[1]) ? "UTF-8" : !1;
	}
	function B6(e) {
		if (!e || typeof e != "string") return !1;
		let t = e.indexOf("/") === -1 ? Hf(e) : e;
		if (!t) return !1;
		if (t.indexOf("charset") === -1) {
			let n = rc(t);
			n && (t += "; charset=" + n.toLowerCase());
		}
		return t;
	}
	function F6(e) {
		if (!e || typeof e != "string") return !1;
		let t = Ff.exec(e),
			n = t && Mf[t[1].toLowerCase()];
		return !n || !n.length ? !1 : n[0];
	}
	function Hf(e) {
		if (!e || typeof e != "string") return !1;
		let t = U6("x." + e)
			.toLowerCase()
			.slice(1);
		return (t && Uf[t]) || !1;
	}
	function M6(e, t) {
		let n = ["nginx", "apache", void 0, "iana"];
		for (let i in Ui.default) {
			let a = Ui.default[i],
				o = a.extensions;
			if (!o || !o.length) return;
			e[i] = o;
			for (let s = 0; s < o.length; s++) {
				let r = o[s];
				if (t[r]) {
					let c = n.indexOf(Ui.default[t[r]].source),
						l = n.indexOf(a.source);
					if (
						t[r] !== "application/octet-stream" &&
						(c > l ||
							(c === l && t[r].substr(0, 12) === "application/"))
					)
						continue;
				}
				t[r] = i;
			}
		}
	}
	function U6(e = "") {
		if (!e.includes(".")) return "";
		let t = e.split(".");
		return "." + t[t.length - 1];
	}
	var jf = ht(ac(), 1);
	function cc(e, t, n = !1) {
		return e.httpOnly && n
			? !1
			: e.domain.startsWith(".")
				? !!t.url.hostname.endsWith(e.domain.slice(1))
				: !(
						e.domain !== t.url.hostname ||
						(e.secure && t.url.protocol === "http:") ||
						!t.url.pathname.startsWith(e.path)
					);
	}
	async function qf(e) {
		let t = await e("__op", 1, {
			upgrade(n) {
				n.createObjectStore("cookies", { keyPath: "id" }).createIndex(
					"path",
					"path",
				);
			},
		});
		return t.transaction(["cookies"], "readwrite").store.index("path"), t;
	}
	function zf(e = [], t, n) {
		let i = "";
		for (let a of e)
			cc(a, t, n) &&
				(i.length && (i += "; "),
				(i += a.name),
				(i += "="),
				(i += a.value));
		return i;
	}
	async function Yf(e) {
		let t = new Date();
		return (await e.getAll("cookies")).filter((n) => {
			let i = !1;
			return (
				n.set &&
					(n.maxAge
						? (i = n.set.getTime() + n.maxAge * 1e3 < t)
						: n.expires &&
							(i = new Date(n.expires.toLocaleString()) < t)),
				i ? (e.delete("cookies", n.id), !1) : !0
			);
		});
	}
	function Vf(e, t, n) {
		if (!t) return !1;
		let i = (0, jf.default)(e, { decodeValues: !1 });
		for (let a of i)
			a.domain || (a.domain = "." + n.url.hostname),
				a.path || (a.path = "/"),
				a.domain.startsWith(".") || (a.domain = "." + a.domain),
				t.put("cookies", {
					...a,
					id: `${a.domain}@${a.path}@${a.name}`,
					set: new Date(Date.now()),
				});
		return !0;
	}
	function Wf(e, t = e.meta) {
		let { html: n, js: i, attributePrefix: a } = e,
			o = a + "-attr-";
		n.on("attr", (s, r) => {
			s.node.tagName === "base" &&
				s.name === "href" &&
				s.options.document &&
				(t.base = new URL(s.value, t.url)),
				r === "rewrite" &&
					lc(s.name, s.tagName) &&
					(s.node.setAttribute(o + s.name, s.value),
					(s.value = e.rewriteUrl(s.value, t))),
				r === "rewrite" &&
					hc(s.name) &&
					(s.node.setAttribute(o + s.name, s.value),
					(s.value = n.wrapSrcset(s.value, t))),
				r === "rewrite" &&
					fc(s.name) &&
					(s.node.setAttribute(o + s.name, s.value),
					(s.value = n.rewrite(s.value, {
						...t,
						document: !0,
						injectHead: s.options.injectHead || [],
					}))),
				r === "rewrite" &&
					mc(s.name) &&
					(s.node.setAttribute(o + s.name, s.value),
					(s.value = e.rewriteCSS(s.value, {
						context: "declarationList",
					}))),
				r === "rewrite" && pc(s.name) && (s.name = o + s.name),
				r === "rewrite" &&
					H6(s.name) &&
					(s.node.setAttribute(o + s.name, s.value),
					(s.value = i.rewrite(s.value, t))),
				r === "source" &&
					s.name.startsWith(o) &&
					(s.node.hasAttribute(s.name.slice(o.length)) &&
						s.node.removeAttribute(s.name.slice(o.length)),
					(s.name = s.name.slice(o.length)));
		});
	}
	function Gf(e) {
		let { html: t, js: n, css: i } = e;
		return (
			t.on("text", (a, o) => {
				a.element.tagName === "script" &&
					(a.value =
						o === "rewrite"
							? n.rewrite(a.value)
							: n.source(a.value)),
					a.element.tagName === "style" &&
						(a.value =
							o === "rewrite"
								? i.rewrite(a.value)
								: i.source(a.value));
			}),
			!0
		);
	}
	function lc(e, t) {
		return (
			(t === "object" && e === "data") ||
			[
				"src",
				"href",
				"ping",
				"movie",
				"action",
				"poster",
				"profile",
				"background",
			].indexOf(e) > -1
		);
	}
	function H6(e) {
		return (
			[
				"onafterprint",
				"onbeforeprint",
				"onbeforeunload",
				"onerror",
				"onhashchange",
				"onload",
				"onmessage",
				"onoffline",
				"ononline",
				"onpagehide",
				"onpopstate",
				"onstorage",
				"onunload",
				"onblur",
				"onchange",
				"oncontextmenu",
				"onfocus",
				"oninput",
				"oninvalid",
				"onreset",
				"onsearch",
				"onselect",
				"onsubmit",
				"onkeydown",
				"onkeypress",
				"onkeyup",
				"onclick",
				"ondblclick",
				"onmousedown",
				"onmousemove",
				"onmouseout",
				"onmouseover",
				"onmouseup",
				"onmousewheel",
				"onwheel",
				"ondrag",
				"ondragend",
				"ondragenter",
				"ondragleave",
				"ondragover",
				"ondragstart",
				"ondrop",
				"onscroll",
				"oncopy",
				"oncut",
				"onpaste",
				"onabort",
				"oncanplay",
				"oncanplaythrough",
				"oncuechange",
				"ondurationchange",
				"onemptied",
				"onended",
				"onerror",
				"onloadeddata",
				"onloadedmetadata",
				"onloadstart",
				"onpause",
				"onplay",
				"onplaying",
				"onprogress",
				"onratechange",
				"onseeked",
				"onseeking",
				"onstalled",
				"onsuspend",
				"ontimeupdate",
				"onvolumechange",
				"onwaiting",
			].indexOf(e) > -1
		);
	}
	function Xf(e) {
		let { html: t } = e;
		t.on("element", (n, i) => {
			if (
				i !== "rewrite" ||
				n.tagName !== "head" ||
				!("injectHead" in n.options)
			)
				return !1;
			n.childNodes.unshift(...n.options.injectHead);
		});
	}
	function dc(e = "", t = {}, n = "", i = "") {
		return `self.__uv$bareData = ${JSON.stringify(t)};self.__uv$cookies = ${JSON.stringify(n)};self.__uv$referrer = ${JSON.stringify(i)};self.__uv$bareURL = ${JSON.stringify(e)}; `;
	}
	function Kf(e, t, n, i, a, o, s, r) {
		return [
			{
				tagName: "script",
				nodeName: "script",
				childNodes: [{ nodeName: "#text", value: dc(a, o, s, r) }],
				attrs: [{ name: "__uv-script", value: "1", skip: !0 }],
				skip: !0,
			},
			{
				tagName: "script",
				nodeName: "script",
				childNodes: [],
				attrs: [
					{ name: "src", value: t, skip: !0 },
					{ name: "__uv-script", value: "1", skip: !0 },
				],
			},
			{
				tagName: "script",
				nodeName: "script",
				childNodes: [],
				attrs: [
					{ name: "src", value: n, skip: !0 },
					{ name: "__uv-script", value: "1", skip: !0 },
				],
			},
			{
				tagName: "script",
				nodeName: "script",
				childNodes: [],
				attrs: [
					{ name: "src", value: i, skip: !0 },
					{ name: "__uv-script", value: "1", skip: !0 },
				],
			},
			{
				tagName: "script",
				nodeName: "script",
				childNodes: [],
				attrs: [
					{ name: "src", value: e, skip: !0 },
					{ name: "__uv-script", value: "1", skip: !0 },
				],
			},
		];
	}
	function pc(e) {
		return (
			[
				"http-equiv",
				"integrity",
				"sandbox",
				"nonce",
				"crossorigin",
			].indexOf(e) > -1
		);
	}
	function fc(e) {
		return e === "srcdoc";
	}
	function mc(e) {
		return e === "style";
	}
	function hc(e) {
		return e === "srcset" || e === "imagesrcset";
	}
	function Qf(e) {
		let { css: t } = e;
		t.on("Url", (n, i, a) => {
			n.value =
				a === "rewrite" ? e.rewriteUrl(n.value) : e.sourceUrl(n.value);
		});
	}
	function Jf(e) {
		let { css: t } = e;
		t.on("Atrule", (n, i, a) => {
			if (n.name !== "import") return !1;
			let { data: o } = n.prelude.children.head;
			if (o.type === "Url") return !1;
			o.value =
				a === "rewrite" ? e.rewriteUrl(o.value) : e.sourceUrl(o.value);
		});
	}
	var Te = ht($u(), 1);
	function Zf(e) {
		let { js: t } = e;
		t.on("MemberExpression", (n, i, a) => {
			if (n.object.type === "Super") return !1;
			if (
				(a === "rewrite" &&
					j6(n) &&
					(i.changes.push({
						node: "__uv.$wrap((",
						start: n.property.start,
						end: n.property.start,
					}),
					(n.iterateEnd = function () {
						i.changes.push({
							node: "))",
							start: n.property.end,
							end: n.property.end,
						});
					})),
				((!n.computed &&
					n.property.name === "location" &&
					a === "rewrite") ||
					(n.property.name === "__uv$location" && a === "source")) &&
					i.changes.push({
						start: n.property.start,
						end: n.property.end,
						node:
							a === "rewrite"
								? "__uv$setSource(__uv).__uv$location"
								: "location",
					}),
				((!n.computed &&
					n.property.name === "top" &&
					a === "rewrite") ||
					(n.property.name === "__uv$top" && a === "source")) &&
					i.changes.push({
						start: n.property.start,
						end: n.property.end,
						node:
							a === "rewrite"
								? "__uv$setSource(__uv).__uv$top"
								: "top",
					}),
				((!n.computed &&
					n.property.name === "parent" &&
					a === "rewrite") ||
					(n.property.name === "__uv$parent" && a === "source")) &&
					i.changes.push({
						start: n.property.start,
						end: n.property.end,
						node:
							a === "rewrite"
								? "__uv$setSource(__uv).__uv$parent"
								: "parent",
					}),
				!n.computed &&
					n.property.name === "postMessage" &&
					a === "rewrite" &&
					i.changes.push({
						start: n.property.start,
						end: n.property.end,
						node: "__uv$setSource(__uv).postMessage",
					}),
				((!n.computed &&
					n.property.name === "eval" &&
					a === "rewrite") ||
					(n.property.name === "__uv$eval" && a === "source")) &&
					i.changes.push({
						start: n.property.start,
						end: n.property.end,
						node:
							a === "rewrite"
								? "__uv$setSource(__uv).__uv$eval"
								: "eval",
					}),
				!n.computed &&
					n.property.name === "__uv$setSource" &&
					a === "source" &&
					n.parent.type === Te.Syntax.CallExpression)
			) {
				let { parent: o, property: s } = n;
				i.changes.push({ start: s.start - 1, end: o.end }),
					(n.iterateEnd = function () {
						i.changes.push({ start: s.start, end: o.end });
					});
			}
		});
	}
	function $f(e) {
		let { js: t } = e;
		t.on("Identifier", (n, i, a) => {
			if (a !== "rewrite") return !1;
			let { parent: o } = n;
			if (
				!["location", "eval", "parent", "top"].includes(n.name) ||
				(o.type === Te.Syntax.VariableDeclarator && o.id === n) ||
				((o.type === Te.Syntax.AssignmentExpression ||
					o.type === Te.Syntax.AssignmentPattern) &&
					o.left === n) ||
				((o.type === Te.Syntax.FunctionExpression ||
					o.type === Te.Syntax.FunctionDeclaration) &&
					o.id === n) ||
				(o.type === Te.Syntax.MemberExpression &&
					o.property === n &&
					!o.computed) ||
				(n.name === "eval" &&
					o.type === Te.Syntax.CallExpression &&
					o.callee === n) ||
				(o.type === Te.Syntax.Property && o.key === n) ||
				(o.type === Te.Syntax.Property &&
					o.value === n &&
					o.shorthand) ||
				(o.type === Te.Syntax.UpdateExpression &&
					(o.operator === "++" || o.operator === "--")) ||
				((o.type === Te.Syntax.FunctionExpression ||
					o.type === Te.Syntax.FunctionDeclaration ||
					o.type === Te.Syntax.ArrowFunctionExpression) &&
					o.params.indexOf(n) !== -1) ||
				o.type === Te.Syntax.MethodDefinition ||
				o.type === Te.Syntax.ClassDeclaration ||
				o.type === Te.Syntax.RestElement ||
				o.type === Te.Syntax.ExportSpecifier ||
				o.type === Te.Syntax.ImportSpecifier
			)
				return !1;
			i.changes.push({
				start: n.start,
				end: n.end,
				node: "__uv.$get(" + n.name + ")",
			});
		});
	}
	function em(e) {
		let { js: t } = e;
		t.on("CallExpression", (n, i, a) => {
			if (
				a !== "rewrite" ||
				!n.arguments.length ||
				n.callee.type !== "Identifier" ||
				n.callee.name !== "eval"
			)
				return !1;
			let [o] = n.arguments;
			i.changes.push({
				node: "__uv.js.rewrite(",
				start: o.start,
				end: o.start,
			}),
				(n.iterateEnd = function () {
					i.changes.push({ node: ")", start: o.end, end: o.end });
				});
		});
	}
	function tm(e) {
		let { js: t } = e;
		t.on(Te.Syntax.Literal, (n, i, a) => {
			if (
				!(
					(n.parent.type === Te.Syntax.ImportDeclaration ||
						n.parent.type === Te.Syntax.ExportAllDeclaration ||
						n.parent.type === Te.Syntax.ExportNamedDeclaration) &&
					n.parent.source === n
				)
			)
				return !1;
			i.changes.push({
				start: n.start + 1,
				end: n.end - 1,
				node:
					a === "rewrite"
						? e.rewriteUrl(n.value)
						: e.sourceUrl(n.value),
			});
		});
	}
	function nm(e) {
		let { js: t } = e;
		t.on(Te.Syntax.ImportExpression, (n, i, a) => {
			if (a !== "rewrite") return !1;
			i.changes.push({
				node: `__uv.rewriteImport(${JSON.stringify(e.meta.url)},`,
				start: n.source.start,
				end: n.source.start,
			}),
				(n.iterateEnd = function () {
					i.changes.push({
						node: ")",
						start: n.source.end,
						end: n.source.end,
					});
				});
		});
	}
	function im(e) {
		let { js: t } = e;
		t.on("CallExpression", (n, i, a) => {
			if (a !== "source" || !am(n.callee)) return !1;
			switch (n.callee.property.name) {
				case "$wrap":
					{
						if (
							!n.arguments ||
							n.parent.type !== Te.Syntax.MemberExpression ||
							n.parent.property !== n
						)
							return !1;
						let [o] = n.arguments;
						i.changes.push({ start: n.callee.start, end: o.start }),
							(n.iterateEnd = function () {
								i.changes.push({
									start: n.end - 2,
									end: n.end,
								});
							});
					}
					break;
				case "$get":
				case "rewriteUrl":
					{
						let [o] = n.arguments;
						i.changes.push({ start: n.callee.start, end: o.start }),
							(n.iterateEnd = function () {
								i.changes.push({
									start: n.end - 1,
									end: n.end,
								});
							});
					}
					break;
				case "rewrite":
					{
						let [o] = n.arguments;
						i.changes.push({ start: n.callee.start, end: o.start }),
							(n.iterateEnd = function () {
								i.changes.push({
									start: n.end - 1,
									end: n.end,
								});
							});
					}
					break;
			}
		});
	}
	function am(e) {
		return e.type !== Te.Syntax.MemberExpression
			? !1
			: e.property.name === "rewrite" && am(e.object)
				? !0
				: !(
						e.object.type !== Te.Syntax.Identifier ||
						e.object.name !== "__uv" ||
						!["js", "$get", "$wrap", "rewriteUrl"].includes(
							e.property.name,
						)
					);
	}
	function j6(e) {
		if (!e.computed) return !1;
		let { property: t } = e;
		return t.type, !0;
	}
	var q6 = (e, t) => t.some((n) => e instanceof n),
		om,
		sm;
	function z6() {
		return (
			om ||
			(om = [
				IDBDatabase,
				IDBObjectStore,
				IDBIndex,
				IDBCursor,
				IDBTransaction,
			])
		);
	}
	function Y6() {
		return (
			sm ||
			(sm = [
				IDBCursor.prototype.advance,
				IDBCursor.prototype.continue,
				IDBCursor.prototype.continuePrimaryKey,
			])
		);
	}
	var rm = new WeakMap(),
		gc = new WeakMap(),
		um = new WeakMap(),
		bc = new WeakMap(),
		Ec = new WeakMap();
	function V6(e) {
		let t = new Promise((n, i) => {
			let a = () => {
					e.removeEventListener("success", o),
						e.removeEventListener("error", s);
				},
				o = () => {
					n(Mt(e.result)), a();
				},
				s = () => {
					i(e.error), a();
				};
			e.addEventListener("success", o), e.addEventListener("error", s);
		});
		return (
			t
				.then((n) => {
					n instanceof IDBCursor && rm.set(n, e);
				})
				.catch(() => {}),
			Ec.set(t, e),
			t
		);
	}
	function W6(e) {
		if (gc.has(e)) return;
		let t = new Promise((n, i) => {
			let a = () => {
					e.removeEventListener("complete", o),
						e.removeEventListener("error", s),
						e.removeEventListener("abort", s);
				},
				o = () => {
					n(), a();
				},
				s = () => {
					i(e.error || new DOMException("AbortError", "AbortError")),
						a();
				};
			e.addEventListener("complete", o),
				e.addEventListener("error", s),
				e.addEventListener("abort", s);
		});
		gc.set(e, t);
	}
	var xc = {
		get(e, t, n) {
			if (e instanceof IDBTransaction) {
				if (t === "done") return gc.get(e);
				if (t === "objectStoreNames")
					return e.objectStoreNames || um.get(e);
				if (t === "store")
					return n.objectStoreNames[1]
						? void 0
						: n.objectStore(n.objectStoreNames[0]);
			}
			return Mt(e[t]);
		},
		set(e, t, n) {
			return (e[t] = n), !0;
		},
		has(e, t) {
			return e instanceof IDBTransaction &&
				(t === "done" || t === "store")
				? !0
				: t in e;
		},
	};
	function cm(e) {
		xc = e(xc);
	}
	function G6(e) {
		return e === IDBDatabase.prototype.transaction &&
			!("objectStoreNames" in IDBTransaction.prototype)
			? function (t, ...n) {
					let i = e.call(Ao(this), t, ...n);
					return um.set(i, t.sort ? t.sort() : [t]), Mt(i);
				}
			: Y6().includes(e)
				? function (...t) {
						return e.apply(Ao(this), t), Mt(rm.get(this));
					}
				: function (...t) {
						return Mt(e.apply(Ao(this), t));
					};
	}
	function X6(e) {
		return typeof e == "function"
			? G6(e)
			: (e instanceof IDBTransaction && W6(e),
				q6(e, z6()) ? new Proxy(e, xc) : e);
	}
	function Mt(e) {
		if (e instanceof IDBRequest) return V6(e);
		if (bc.has(e)) return bc.get(e);
		let t = X6(e);
		return t !== e && (bc.set(e, t), Ec.set(t, e)), t;
	}
	var Ao = (e) => Ec.get(e);
	function dm(
		e,
		t,
		{ blocked: n, upgrade: i, blocking: a, terminated: o } = {},
	) {
		let s = indexedDB.open(e, t),
			r = Mt(s);
		return (
			i &&
				s.addEventListener("upgradeneeded", (c) => {
					i(
						Mt(s.result),
						c.oldVersion,
						c.newVersion,
						Mt(s.transaction),
						c,
					);
				}),
			n &&
				s.addEventListener("blocked", (c) =>
					n(c.oldVersion, c.newVersion, c),
				),
			r
				.then((c) => {
					o && c.addEventListener("close", () => o()),
						a &&
							c.addEventListener("versionchange", (l) =>
								a(l.oldVersion, l.newVersion, l),
							);
				})
				.catch(() => {}),
			r
		);
	}
	var K6 = ["get", "getKey", "getAll", "getAllKeys", "count"],
		Q6 = ["put", "add", "delete", "clear"],
		vc = new Map();
	function lm(e, t) {
		if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
			return;
		if (vc.get(t)) return vc.get(t);
		let n = t.replace(/FromIndex$/, ""),
			i = t !== n,
			a = Q6.includes(n);
		if (
			!(n in (i ? IDBIndex : IDBObjectStore).prototype) ||
			!(a || K6.includes(n))
		)
			return;
		let o = async function (s, ...r) {
			let c = this.transaction(s, a ? "readwrite" : "readonly"),
				l = c.store;
			return (
				i && (l = l.index(r.shift())),
				(await Promise.all([l[n](...r), a && c.done]))[0]
			);
		};
		return vc.set(t, o), o;
	}
	cm((e) => ({
		...e,
		get: (t, n, i) => lm(t, n) || e.get(t, n, i),
		has: (t, n) => !!lm(t, n) || e.has(t, n),
	}));
	var To,
		J6 = new Uint8Array(16);
	function Ac() {
		if (
			!To &&
			((To =
				typeof crypto < "u" &&
				crypto.getRandomValues &&
				crypto.getRandomValues.bind(crypto)),
			!To)
		)
			throw new Error(
				"crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
			);
		return To(J6);
	}
	var Ke = [];
	for (let e = 0; e < 256; ++e) Ke.push((e + 256).toString(16).slice(1));
	function pm(e, t = 0) {
		return (
			Ke[e[t + 0]] +
			Ke[e[t + 1]] +
			Ke[e[t + 2]] +
			Ke[e[t + 3]] +
			"-" +
			Ke[e[t + 4]] +
			Ke[e[t + 5]] +
			"-" +
			Ke[e[t + 6]] +
			Ke[e[t + 7]] +
			"-" +
			Ke[e[t + 8]] +
			Ke[e[t + 9]] +
			"-" +
			Ke[e[t + 10]] +
			Ke[e[t + 11]] +
			Ke[e[t + 12]] +
			Ke[e[t + 13]] +
			Ke[e[t + 14]] +
			Ke[e[t + 15]]
		);
	}
	var Z6 =
			typeof crypto < "u" &&
			crypto.randomUUID &&
			crypto.randomUUID.bind(crypto),
		Tc = { randomUUID: Z6 };
	function $6(e, t, n) {
		if (Tc.randomUUID && !t && !e) return Tc.randomUUID();
		e = e || {};
		let i = e.random || (e.rng || Ac)();
		if (((i[6] = (i[6] & 15) | 64), (i[8] = (i[8] & 63) | 128), t)) {
			n = n || 0;
			for (let a = 0; a < 16; ++a) t[n + a] = i[a];
			return t;
		}
		return pm(i);
	}
	var Cc = $6;
	var ev = 20,
		tv = globalThis.fetch,
		an = globalThis.WebSocket,
		nv = globalThis.Request,
		yc = globalThis.Response,
		Gn = {
			prototype: { send: an.prototype.send },
			CLOSED: an.CLOSED,
			CLOSING: an.CLOSING,
			CONNECTING: an.CONNECTING,
			OPEN: an.OPEN,
		};
	var kc;
	"ServiceWorkerGlobalScope" in self &&
		addEventListener("message", async ({ data: e }) => {
			if (e.type === "response") {
				let t = kc.promises.get(e.id);
				t && (t(e), kc.promises.delete(e.id));
			}
		});
	var _c = class {
		canstart = !0;
		ready = !1;
		promises = new Map();
		constructor() {
			if (!("ServiceWorkerGlobalScope" in self))
				throw new TypeError(
					"Attempt to construct RemoteClient from outside a service worker",
				);
		}
		async init() {
			(kc = this), (this.ready = !0);
		}
		async meta() {}
		async request(t, n, i, a, o) {
			let s = Cc(),
				r = await self.clients.matchAll();
			if (r.length < 1) throw new Error("no available clients");
			for (let c of r)
				c.postMessage({
					type: "request",
					id: s,
					remote: t.toString(),
					method: n,
					body: i,
					headers: a,
				});
			return await new Promise((c, l) => {
				this.promises.set(s, c);
			});
		}
		connect(t, n, i, a, o, s, r, c) {
			throw "why are you calling connect from remoteclient";
		}
	};
	self.BCC_VERSION = "3.0.4";
	console.warn("BCC_VERSION: " + self.BCC_VERSION);
	function iv(e, t) {
		let n = new ((0, eval)(e))(...t);
		return (n.initpromise = n.init()), n;
	}
	var Hi = class {
		active = null;
		channel = new BroadcastChannel("bare-mux");
		constructor() {
			this.channel.addEventListener(
				"message",
				({ data: { type: t, data: n } }) => {
					switch (
						(console.log(t, n, "ServiceWorker" in globalThis), t)
					) {
						case "setremote":
							this.active = new _c();
							break;
						case "set":
							let { name: i, config: a } = n;
							this.active = iv(i, a);
							break;
					}
				},
			);
		}
	};
	function Sc() {
		if (globalThis.gSwitcher) return globalThis.gSwitcher;
		if ("ServiceWorkerGlobalScope" in globalThis)
			return (globalThis.gSwitcher = new Hi()), globalThis.gSwitcher;
		let e = window;
		for (let t = 0; t < 20; t++)
			try {
				if (e == e.parent)
					return (
						(globalThis.gSwitcher = new Hi()), globalThis.gSwitcher
					);
				if (((e = e.parent), e && e.gSwitcher))
					return (
						console.warn("found implementation on parent"),
						(globalThis.gSwitcher = e.gSwitcher),
						e.gSwitcher
					);
			} catch {
				return (globalThis.gSwitcher = new Hi()), globalThis.gSwitcher;
			}
		throw "unreachable";
	}
	Sc();
	var av =
		"!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz|~";
	function ov(e) {
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			if (!av.includes(n)) return !1;
		}
		return !0;
	}
	var sv = Object.getOwnPropertyDescriptor(an.prototype, "readyState").get,
		rv = ["ws:", "wss:"],
		uv = [101, 204, 205, 304],
		cv = [301, 302, 303, 307, 308],
		Co = class {
			constructor() {}
			createWebSocket(t, n = [], i, a, o) {
				let r = Sc().active;
				if (!r) throw "invalid switcher";
				if (!r.ready)
					throw new TypeError(
						"You need to wait for the client to finish fetching the manifest before creating any WebSockets. Try caching the manifest data before making this request.",
					);
				try {
					t = new URL(t);
				} catch {
					throw new DOMException(
						`Faiiled to construct 'WebSocket': The URL '${t}' is invalid.`,
					);
				}
				if (!rv.includes(t.protocol))
					throw new DOMException(
						`Failed to construct 'WebSocket': The URL's scheme must be either 'ws' or 'wss'. '${t.protocol}' is not allowed.`,
					);
				Array.isArray(n) || (n = [n]), (n = n.map(String));
				for (let A of n)
					if (!ov(A))
						throw new DOMException(
							`Failed to construct 'WebSocket': The subprotocol '${A}' is invalid.`,
						);
				let c = i || an,
					l = new c("ws://127.0.0.1:1", n),
					d = "",
					f = Gn.CONNECTING,
					p = !1;
				l.addEventListener("error", (A) => {
					p ||
						((f = an.CONNECTING),
						A.stopImmediatePropagation(),
						(p = !0));
				});
				let g = !1;
				l.addEventListener("close", (A) => {
					g || (A.stopImmediatePropagation(), (g = !0));
				}),
					(o =
						o ||
						i.constructor.constructor("return ArrayBuffer")()
							.prototype),
					(a.Host = new URL(t).host),
					(a.Pragma = "no-cache"),
					(a["Cache-Control"] = "no-cache"),
					(a.Upgrade = "websocket"),
					(a.Connection = "Upgrade");
				let T = r.connect(
						t,
						origin,
						n,
						a,
						(A) => {
							(f = Gn.OPEN),
								(d = A),
								(l.meta = {
									headers: { "sec-websocket-protocol": A },
								}),
								l.dispatchEvent(new Event("open"));
						},
						async (A) => {
							typeof A == "string"
								? l.dispatchEvent(
										new MessageEvent("message", {
											data: A,
										}),
									)
								: "byteLength" in A
									? (l.binaryType === "blob"
											? (A = new Blob([A]))
											: Object.setPrototypeOf(A, o),
										l.dispatchEvent(
											new MessageEvent("message", {
												data: A,
											}),
										))
									: "arrayBuffer" in A &&
										(l.binaryType === "arraybuffer" &&
											((A = await A.arrayBuffer()),
											Object.setPrototypeOf(A, o)),
										l.dispatchEvent(
											new MessageEvent("message", {
												data: A,
											}),
										));
						},
						(A, L) => {
							(f = Gn.CLOSED),
								l.dispatchEvent(
									new CloseEvent("close", {
										code: A,
										reason: L,
									}),
								);
						},
						() => {
							f = Gn.CLOSED;
						},
					),
					D = () => {
						let A = sv.call(l);
						return A === Gn.OPEN ? f : A;
					};
				Object.defineProperty(l, "readyState", {
					get: D,
					configurable: !0,
					enumerable: !0,
				});
				let S = () => {
					if (D() === Gn.CONNECTING)
						return new DOMException(
							"Failed to execute 'send' on 'WebSocket': Still in CONNECTING state.",
						);
				};
				return (
					(l.send = function (...A) {
						let L = S();
						if (L) throw L;
						T(A[0]);
					}),
					Object.defineProperty(l, "url", {
						get: () => t.toString(),
						configurable: !0,
						enumerable: !0,
					}),
					Object.defineProperty(l, "protocol", {
						get: () => d,
						configurable: !0,
						enumerable: !0,
					}),
					l
				);
			}
			async fetch(t, n) {
				let i = new nv(t, n),
					a = n?.headers || i.headers,
					o = a instanceof Headers ? Object.fromEntries(a) : a,
					s = n?.body || i.body,
					r = new URL(i.url);
				if (r.protocol.startsWith("blob:")) {
					let d = await tv(r),
						f = new yc(d.body, d);
					return (
						(f.rawHeaders = Object.fromEntries(d.headers)),
						(f.rawResponse = d),
						f
					);
				}
				let c = Sc();
				if (!c.active) throw "there are no bare clients";
				let l = c.active;
				l.ready || (await l.init());
				for (let d = 0; ; d++) {
					"host" in o ? (o.host = r.host) : (o.Host = r.host);
					let f = await l.request(r, i.method, s, o, i.signal),
						p = new yc(uv.includes(f.status) ? void 0 : f.body, {
							headers: new Headers(f.headers),
							status: f.status,
							statusText: f.statusText,
						});
					(p.rawHeaders = f.headers),
						(p.rawResponse = new yc(f.body)),
						(p.finalURL = r.toString());
					let g = n?.redirect || i.redirect;
					if (cv.includes(p.status))
						switch (g) {
							case "follow": {
								let T = p.headers.get("location");
								if (ev > d && T !== null) {
									r = new URL(T, r);
									continue;
								} else throw new TypeError("Failed to fetch");
							}
							case "error":
								throw new TypeError("Failed to fetch");
							case "manual":
								return p;
						}
					else return p;
				}
			}
		};
	var fm = ht(Xn(), 1),
		yo = class e {
			constructor(t = {}) {
				(this.prefix = t.prefix || "/service/"),
					(this.urlRegex = /^(#|about:|data:|mailto:)/),
					(this.rewriteUrl = t.rewriteUrl || this.rewriteUrl),
					(this.rewriteImport =
						t.rewriteImport || this.rewriteImport),
					(this.sourceUrl = t.sourceUrl || this.sourceUrl),
					(this.encodeUrl = t.encodeUrl || this.encodeUrl),
					(this.decodeUrl = t.decodeUrl || this.decodeUrl),
					(this.vanilla = "vanilla" in t ? t.vanilla : !1),
					(this.meta = t.meta || {}),
					(this.meta.base ||= void 0),
					(this.meta.origin ||= ""),
					(this.bundleScript = t.bundle || "/uv.bundle.js"),
					(this.handlerScript = t.handler || "/uv.handler.js"),
					(this.clientScript =
						t.client ||
						(t.bundle &&
							t.bundle.includes("uv.bundle.js") &&
							t.bundle.replace("uv.bundle.js", "uv.client.js")) ||
						"/uv.client.js"),
					(this.configScript = t.config || "/uv.config.js"),
					(this.meta.url ||= this.meta.base || ""),
					(this.codec = e.codec),
					(this.html = new Rl(this)),
					(this.css = new ap(this)),
					(this.js = new cf(this)),
					(this.openDB = this.constructor.openDB),
					(this.master = "__uv"),
					(this.dataPrefix = "__uv$"),
					(this.attributePrefix = "__uv"),
					(this.createHtmlInject = Kf),
					(this.createJsInject = dc),
					(this.attrs = {
						isUrl: lc,
						isForbidden: pc,
						isHtml: fc,
						isSrcset: hc,
						isStyle: mc,
					}),
					this.vanilla || this.implementUVMiddleware(),
					(this.cookie = {
						validateCookie: cc,
						db: () => qf(this.constructor.openDB),
						getCookies: Yf,
						setCookies: Vf,
						serialize: zf,
						setCookie: Dc.default,
					});
			}
			rewriteImport(t, n, i = this.meta) {
				return this.rewriteUrl(t, { ...i, base: n });
			}
			rewriteUrl(t, n = this.meta) {
				if (((t = new String(t).trim()), !t || this.urlRegex.test(t)))
					return t;
				if (t.startsWith("javascript:"))
					return "javascript:" + this.js.rewrite(t.slice(11));
				try {
					return (
						n.origin +
						this.prefix +
						this.encodeUrl(new URL(t, n.base).href)
					);
				} catch {
					return n.origin + this.prefix + this.encodeUrl(t);
				}
			}
			sourceUrl(t, n = this.meta) {
				if (!t || this.urlRegex.test(t)) return t;
				try {
					return new URL(
						this.decodeUrl(
							t.slice(this.prefix.length + n.origin.length),
						),
						n.base,
					).href;
				} catch {
					return this.decodeUrl(
						t.slice(this.prefix.length + n.origin.length),
					);
				}
			}
			encodeUrl(t) {
				return encodeURIComponent(t);
			}
			decodeUrl(t) {
				return decodeURIComponent(t);
			}
			implementUVMiddleware() {
				Wf(this),
					Gf(this),
					Xf(this),
					Qf(this),
					Jf(this),
					tm(this),
					nm(this),
					Zf(this),
					em(this),
					$f(this),
					im(this);
			}
			get rewriteHtml() {
				return this.html.rewrite.bind(this.html);
			}
			get sourceHtml() {
				return this.html.source.bind(this.html);
			}
			get rewriteCSS() {
				return this.css.rewrite.bind(this.css);
			}
			get sourceCSS() {
				return this.css.source.bind(this.css);
			}
			get rewriteJS() {
				return this.js.rewrite.bind(this.js);
			}
			get sourceJS() {
				return this.js.source.bind(this.js);
			}
			static codec = { xor: If, base64: Pf, plain: Lf, aes: Nf };
			static mime = uc;
			static setCookie = Dc.default;
			static openDB = dm;
			static BareClient = Co;
			static EventEmitter = fm.default;
		},
		O7 = yo;
	typeof self == "object" && (self.Ultraviolet = yo);
})();
/*! Bundled license information:

mime-db/index.js:
  (*!
   * mime-db
   * Copyright(c) 2014 Jonathan Ong
   * Copyright(c) 2015-2022 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=uv.bundle.js.map
