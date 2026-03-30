// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const te = {}, At = [], Ze = () => {
}, Ko = () => !1, kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Pn = (e) => e.startsWith("onUpdate:"), re = Object.assign, ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ar = Object.prototype.hasOwnProperty, J = (e, t) => ar.call(e, t), V = Array.isArray, Et = (e) => sn(e) === "[object Map]", qo = (e) => sn(e) === "[object Set]", Xs = (e) => sn(e) === "[object Date]", U = (e) => typeof e == "function", ae = (e) => typeof e == "string", Je = (e) => typeof e == "symbol", $ = (e) => e !== null && typeof e == "object", Go = (e) => ($(e) || U(e)) && U(e.then) && U(e.catch), Zo = Object.prototype.toString, sn = (e) => Zo.call(e), cr = (e) => sn(e).slice(8, -1), Hn = (e) => sn(e) === "[object Object]", Ss = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zt = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, fr = /-\w/g, de = Rn(
  (e) => e.replace(fr, (t) => t.slice(1).toUpperCase())
), ur = /\B([A-Z])/g, Me = Rn(
  (e) => e.replace(ur, "-$1").toLowerCase()
), Fn = Rn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kn = Rn(
  (e) => e ? `on${Fn(e)}` : ""
), qe = (e, t) => !Object.is(e, t), qn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Jo = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, dr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, rs = (e) => {
  const t = ae(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Qs;
const Mn = () => Qs || (Qs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ts(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ae(s) ? mr(s) : Ts(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (ae(e) || $(e))
    return e;
}
const hr = /;(?![^(]*\))/g, pr = /:([^]+)/, gr = /\/\*[^]*?\*\//g;
function mr(e) {
  const t = {};
  return e.replace(gr, "").split(hr).forEach((n) => {
    if (n) {
      const s = n.split(pr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function st(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (V(e))
    for (let n = 0; n < e.length; n++) {
      const s = st(e[n]);
      s && (t += s + " ");
    }
  else if ($(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const _r = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", br = /* @__PURE__ */ xs(_r);
function Yo(e) {
  return !!e || e === "";
}
function vr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Cs(e[s], t[s]);
  return n;
}
function Cs(e, t) {
  if (e === t) return !0;
  let n = Xs(e), s = Xs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Je(e), s = Je(t), n || s)
    return e === t;
  if (n = V(e), s = V(t), n || s)
    return n && s ? vr(e, t) : !1;
  if (n = $(e), s = $(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !Cs(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const $o = (e) => !!(e && e.__v_isRef === !0), le = (e) => ae(e) ? e : e == null ? "" : V(e) || $(e) && (e.toString === Zo || !U(e.toString)) ? $o(e) ? le(e.value) : JSON.stringify(e, Xo, 2) : String(e), Xo = (e, t) => $o(t) ? Xo(e, t.value) : Et(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Gn(s, i) + " =>"] = o, n),
    {}
  )
} : qo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Gn(n))
} : Je(t) ? Gn(t) : $(t) && !V(t) && !Hn(t) ? String(t) : t, Gn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Ce;
class yr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Ce, !t && Ce && (this.index = (Ce.scopes || (Ce.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ce;
      try {
        return Ce = this, t();
      } finally {
        Ce = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ce, Ce = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ce = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function xr() {
  return Ce;
}
let oe;
const Zn = /* @__PURE__ */ new WeakSet();
class Qo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ce && Ce.active && Ce.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Zn.has(this) && (Zn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ti(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, eo(this), ni(this);
    const t = oe, n = Oe;
    oe = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      si(this), oe = t, Oe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ks(t);
      this.deps = this.depsTail = void 0, eo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Zn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ls(this) && this.run();
  }
  get dirty() {
    return ls(this);
  }
}
let ei = 0, jt, Bt;
function ti(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Bt, Bt = e;
    return;
  }
  e.next = jt, jt = e;
}
function As() {
  ei++;
}
function Es() {
  if (--ei > 0)
    return;
  if (Bt) {
    let t = Bt;
    for (Bt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; jt; ) {
    let t = jt;
    for (jt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ni(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function si(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), ks(s), wr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function ls(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (oi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function oi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Jt) || (e.globalVersion = Jt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ls(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = oe, s = Oe;
  oe = e, Oe = !0;
  try {
    ni(e);
    const o = e.fn(e._value);
    (t.version === 0 || qe(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    oe = n, Oe = s, si(e), e.flags &= -3;
  }
}
function ks(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      ks(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function wr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const ii = [];
function ot() {
  ii.push(Oe), Oe = !1;
}
function it() {
  const e = ii.pop();
  Oe = e === void 0 ? !0 : e;
}
function eo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = oe;
    oe = void 0;
    try {
      t();
    } finally {
      oe = n;
    }
  }
}
let Jt = 0;
class Sr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ps {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!oe || !Oe || oe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== oe)
      n = this.activeLink = new Sr(oe, this), oe.deps ? (n.prevDep = oe.depsTail, oe.depsTail.nextDep = n, oe.depsTail = n) : oe.deps = oe.depsTail = n, ri(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = oe.depsTail, n.nextDep = void 0, oe.depsTail.nextDep = n, oe.depsTail = n, oe.deps === n && (oe.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Jt++, this.notify(t);
  }
  notify(t) {
    As();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Es();
    }
  }
}
function ri(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        ri(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const as = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ Symbol(
  ""
), cs = /* @__PURE__ */ Symbol(
  ""
), Yt = /* @__PURE__ */ Symbol(
  ""
);
function _e(e, t, n) {
  if (Oe && oe) {
    let s = as.get(e);
    s || as.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ps()), o.map = s, o.key = n), o.track();
  }
}
function tt(e, t, n, s, o, i) {
  const r = as.get(e);
  if (!r) {
    Jt++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (As(), t === "clear")
    r.forEach(l);
  else {
    const a = V(e), u = a && Ss(n);
    if (a && n === "length") {
      const f = Number(s);
      r.forEach((h, _) => {
        (_ === "length" || _ === Yt || !Je(_) && _ >= f) && l(h);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), u && l(r.get(Yt)), t) {
        case "add":
          a ? u && l(r.get("length")) : (l(r.get(xt)), Et(e) && l(r.get(cs)));
          break;
        case "delete":
          a || (l(r.get(xt)), Et(e) && l(r.get(cs)));
          break;
        case "set":
          Et(e) && l(r.get(xt));
          break;
      }
  }
  Es();
}
function Tt(e) {
  const t = /* @__PURE__ */ Z(e);
  return t === e ? t : (_e(t, "iterate", Yt), /* @__PURE__ */ Ie(e) ? t : t.map(rt));
}
function Hs(e) {
  return _e(e = /* @__PURE__ */ Z(e), "iterate", Yt), e;
}
function We(e, t) {
  return /* @__PURE__ */ ut(e) ? $t(/* @__PURE__ */ kt(e) ? rt(t) : t) : rt(t);
}
const Tr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Jn(this, Symbol.iterator, (e) => We(this, e));
  },
  concat(...e) {
    return Tt(this).concat(
      ...e.map((t) => V(t) ? Tt(t) : t)
    );
  },
  entries() {
    return Jn(this, "entries", (e) => (e[1] = We(this, e[1]), e));
  },
  every(e, t) {
    return $e(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return $e(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => We(this, s)),
      arguments
    );
  },
  find(e, t) {
    return $e(
      this,
      "find",
      e,
      t,
      (n) => We(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return $e(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return $e(
      this,
      "findLast",
      e,
      t,
      (n) => We(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return $e(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return $e(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Yn(this, "includes", e);
  },
  indexOf(...e) {
    return Yn(this, "indexOf", e);
  },
  join(e) {
    return Tt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Yn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return $e(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ot(this, "pop");
  },
  push(...e) {
    return Ot(this, "push", e);
  },
  reduce(e, ...t) {
    return to(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return to(this, "reduceRight", e, t);
  },
  shift() {
    return Ot(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return $e(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ot(this, "splice", e);
  },
  toReversed() {
    return Tt(this).toReversed();
  },
  toSorted(e) {
    return Tt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Tt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ot(this, "unshift", e);
  },
  values() {
    return Jn(this, "values", (e) => We(this, e));
  }
};
function Jn(e, t, n) {
  const s = Hs(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Ie(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const Cr = Array.prototype;
function $e(e, t, n, s, o, i) {
  const r = Hs(e), l = r !== e && !/* @__PURE__ */ Ie(e), a = r[t];
  if (a !== Cr[t]) {
    const h = a.apply(e, i);
    return l ? rt(h) : h;
  }
  let u = n;
  r !== e && (l ? u = function(h, _) {
    return n.call(this, We(e, h), _, e);
  } : n.length > 2 && (u = function(h, _) {
    return n.call(this, h, _, e);
  }));
  const f = a.call(r, u, s);
  return l && o ? o(f) : f;
}
function to(e, t, n, s) {
  const o = Hs(e), i = o !== e && !/* @__PURE__ */ Ie(e);
  let r = n, l = !1;
  o !== e && (i ? (l = s.length === 0, r = function(u, f, h) {
    return l && (l = !1, u = We(e, u)), n.call(this, u, We(e, f), h, e);
  }) : n.length > 3 && (r = function(u, f, h) {
    return n.call(this, u, f, h, e);
  }));
  const a = o[t](r, ...s);
  return l ? We(e, a) : a;
}
function Yn(e, t, n) {
  const s = /* @__PURE__ */ Z(e);
  _e(s, "iterate", Yt);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Ms(n[0]) ? (n[0] = /* @__PURE__ */ Z(n[0]), s[t](...n)) : o;
}
function Ot(e, t, n = []) {
  ot(), As();
  const s = (/* @__PURE__ */ Z(e))[t].apply(e, n);
  return Es(), it(), s;
}
const Ar = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), li = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Je)
);
function Er(e) {
  Je(e) || (e = String(e));
  const t = /* @__PURE__ */ Z(this);
  return _e(t, "has", e), t.hasOwnProperty(e);
}
class ai {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (o ? i ? Nr : di : i ? ui : fi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = V(t);
    if (!o) {
      let a;
      if (r && (a = Tr[n]))
        return a;
      if (n === "hasOwnProperty")
        return Er;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ge(t) ? t : s
    );
    if ((Je(n) ? li.has(n) : Ar(n)) || (o || _e(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ ge(l)) {
      const a = r && Ss(n) ? l : l.value;
      return o && $(a) ? /* @__PURE__ */ us(a) : a;
    }
    return $(l) ? o ? /* @__PURE__ */ us(l) : /* @__PURE__ */ Ln(l) : l;
  }
}
class ci extends ai {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const r = V(t) && Ss(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ ut(i);
      if (!/* @__PURE__ */ Ie(s) && !/* @__PURE__ */ ut(s) && (i = /* @__PURE__ */ Z(i), s = /* @__PURE__ */ Z(s)), !r && /* @__PURE__ */ ge(i) && !/* @__PURE__ */ ge(s))
        return u || (i.value = s), !0;
    }
    const l = r ? Number(n) < t.length : J(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ge(t) ? t : o
    );
    return t === /* @__PURE__ */ Z(o) && (l ? qe(s, i) && tt(t, "set", n, s) : tt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = J(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && tt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Je(n) || !li.has(n)) && _e(t, "has", n), s;
  }
  ownKeys(t) {
    return _e(
      t,
      "iterate",
      V(t) ? "length" : xt
    ), Reflect.ownKeys(t);
  }
}
class kr extends ai {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Pr = /* @__PURE__ */ new ci(), Hr = /* @__PURE__ */ new kr(), Rr = /* @__PURE__ */ new ci(!0);
const fs = (e) => e, cn = (e) => Reflect.getPrototypeOf(e);
function Fr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ Z(o), r = Et(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, u = o[e](...s), f = n ? fs : t ? $t : rt;
    return !t && _e(
      i,
      "iterate",
      a ? cs : xt
    ), re(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: h, done: _ } = u.next();
          return _ ? { value: h, done: _ } : {
            value: l ? [f(h[0]), f(h[1])] : f(h),
            done: _
          };
        }
      }
    );
  };
}
function fn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Mr(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ Z(i), l = /* @__PURE__ */ Z(o);
      e || (qe(o, l) && _e(r, "get", o), _e(r, "get", l));
      const { has: a } = cn(r), u = t ? fs : e ? $t : rt;
      if (a.call(r, o))
        return u(i.get(o));
      if (a.call(r, l))
        return u(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && _e(/* @__PURE__ */ Z(o), "iterate", xt), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ Z(i), l = /* @__PURE__ */ Z(o);
      return e || (qe(o, l) && _e(r, "has", o), _e(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ Z(l), u = t ? fs : e ? $t : rt;
      return !e && _e(a, "iterate", xt), l.forEach((f, h) => o.call(i, u(f), u(h), r));
    }
  };
  return re(
    n,
    e ? {
      add: fn("add"),
      set: fn("set"),
      delete: fn("delete"),
      clear: fn("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ Z(this), r = cn(i), l = /* @__PURE__ */ Z(o), a = !t && !/* @__PURE__ */ Ie(o) && !/* @__PURE__ */ ut(o) ? l : o;
        return r.has.call(i, a) || qe(o, a) && r.has.call(i, o) || qe(l, a) && r.has.call(i, l) || (i.add(a), tt(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Ie(i) && !/* @__PURE__ */ ut(i) && (i = /* @__PURE__ */ Z(i));
        const r = /* @__PURE__ */ Z(this), { has: l, get: a } = cn(r);
        let u = l.call(r, o);
        u || (o = /* @__PURE__ */ Z(o), u = l.call(r, o));
        const f = a.call(r, o);
        return r.set(o, i), u ? qe(i, f) && tt(r, "set", o, i) : tt(r, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ Z(this), { has: r, get: l } = cn(i);
        let a = r.call(i, o);
        a || (o = /* @__PURE__ */ Z(o), a = r.call(i, o)), l && l.call(i, o);
        const u = i.delete(o);
        return a && tt(i, "delete", o, void 0), u;
      },
      clear() {
        const o = /* @__PURE__ */ Z(this), i = o.size !== 0, r = o.clear();
        return i && tt(
          o,
          "clear",
          void 0,
          void 0
        ), r;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Fr(o, e, t);
  }), n;
}
function Rs(e, t) {
  const n = Mr(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    J(n, o) && o in s ? n : s,
    o,
    i
  );
}
const Lr = {
  get: /* @__PURE__ */ Rs(!1, !1)
}, Or = {
  get: /* @__PURE__ */ Rs(!1, !0)
}, Ir = {
  get: /* @__PURE__ */ Rs(!0, !1)
};
const fi = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap();
function Dr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Vr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Dr(cr(e));
}
// @__NO_SIDE_EFFECTS__
function Ln(e) {
  return /* @__PURE__ */ ut(e) ? e : Fs(
    e,
    !1,
    Pr,
    Lr,
    fi
  );
}
// @__NO_SIDE_EFFECTS__
function zr(e) {
  return Fs(
    e,
    !1,
    Rr,
    Or,
    ui
  );
}
// @__NO_SIDE_EFFECTS__
function us(e) {
  return Fs(
    e,
    !0,
    Hr,
    Ir,
    di
  );
}
function Fs(e, t, n, s, o) {
  if (!$(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Vr(e);
  if (i === 0)
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  return /* @__PURE__ */ ut(e) ? /* @__PURE__ */ kt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ms(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Z(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Z(t) : e;
}
function jr(e) {
  return !J(e, "__v_skip") && Object.isExtensible(e) && Jo(e, "__v_skip", !0), e;
}
const rt = (e) => $(e) ? /* @__PURE__ */ Ln(e) : e, $t = (e) => $(e) ? /* @__PURE__ */ us(e) : e;
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return Br(e, !1);
}
function Br(e, t) {
  return /* @__PURE__ */ ge(e) ? e : new Ur(e, t);
}
class Ur {
  constructor(t, n) {
    this.dep = new Ps(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Z(t), this._value = n ? t : rt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ie(t) || /* @__PURE__ */ ut(t);
    t = s ? t : /* @__PURE__ */ Z(t), qe(t, n) && (this._rawValue = t, this._value = s ? t : rt(t), this.dep.trigger());
  }
}
function Ls(e) {
  return /* @__PURE__ */ ge(e) ? e.value : e;
}
function no(e) {
  return U(e) ? e() : Ls(e);
}
const Wr = {
  get: (e, t, n) => t === "__v_raw" ? e : Ls(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ ge(o) && !/* @__PURE__ */ ge(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function hi(e) {
  return /* @__PURE__ */ kt(e) ? e : new Proxy(e, Wr);
}
class Kr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ps(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Jt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    oe !== this)
      return ti(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return oi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function qr(e, t, n = !1) {
  let s, o;
  return U(e) ? s = e : (s = e.get, o = e.set), new Kr(s, o, n);
}
const un = {}, mn = /* @__PURE__ */ new WeakMap();
let vt;
function Gr(e, t = !1, n = vt) {
  if (n) {
    let s = mn.get(n);
    s || mn.set(n, s = []), s.push(e);
  }
}
function Zr(e, t, n = te) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = n, u = (y) => o ? y : /* @__PURE__ */ Ie(y) || o === !1 || o === 0 ? nt(y, 1) : nt(y);
  let f, h, _, x, w = !1, S = !1;
  if (/* @__PURE__ */ ge(e) ? (h = () => e.value, w = /* @__PURE__ */ Ie(e)) : /* @__PURE__ */ kt(e) ? (h = () => u(e), w = !0) : V(e) ? (S = !0, w = e.some((y) => /* @__PURE__ */ kt(y) || /* @__PURE__ */ Ie(y)), h = () => e.map((y) => {
    if (/* @__PURE__ */ ge(y))
      return y.value;
    if (/* @__PURE__ */ kt(y))
      return u(y);
    if (U(y))
      return a ? a(y, 2) : y();
  })) : U(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (_) {
      ot();
      try {
        _();
      } finally {
        it();
      }
    }
    const y = vt;
    vt = f;
    try {
      return a ? a(e, 3, [x]) : e(x);
    } finally {
      vt = y;
    }
  } : h = Ze, t && o) {
    const y = h, H = o === !0 ? 1 / 0 : o;
    h = () => nt(y(), H);
  }
  const F = xr(), M = () => {
    f.stop(), F && F.active && ws(F.effects, f);
  };
  if (i && t) {
    const y = t;
    t = (...H) => {
      y(...H), M();
    };
  }
  let R = S ? new Array(e.length).fill(un) : un;
  const k = (y) => {
    if (!(!(f.flags & 1) || !f.dirty && !y))
      if (t) {
        const H = f.run();
        if (o || w || (S ? H.some((j, B) => qe(j, R[B])) : qe(H, R))) {
          _ && _();
          const j = vt;
          vt = f;
          try {
            const B = [
              H,
              // pass undefined as the old value when it's changed for the first time
              R === un ? void 0 : S && R[0] === un ? [] : R,
              x
            ];
            R = H, a ? a(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            vt = j;
          }
        }
      } else
        f.run();
  };
  return l && l(k), f = new Qo(h), f.scheduler = r ? () => r(k, !1) : k, x = (y) => Gr(y, !1, f), _ = f.onStop = () => {
    const y = mn.get(f);
    if (y) {
      if (a)
        a(y, 4);
      else
        for (const H of y) H();
      mn.delete(f);
    }
  }, t ? s ? k(!0) : R = f.run() : r ? r(k.bind(null, !0), !0) : f.run(), M.pause = f.pause.bind(f), M.resume = f.resume.bind(f), M.stop = M, M;
}
function nt(e, t = 1 / 0, n) {
  if (t <= 0 || !$(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ge(e))
    nt(e.value, t, n);
  else if (V(e))
    for (let s = 0; s < e.length; s++)
      nt(e[s], t, n);
  else if (qo(e) || Et(e))
    e.forEach((s) => {
      nt(s, t, n);
    });
  else if (Hn(e)) {
    for (const s in e)
      nt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && nt(e[s], t, n);
  }
  return e;
}
function on(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    On(o, t, n);
  }
}
function Ne(e, t, n, s) {
  if (U(e)) {
    const o = on(e, t, n, s);
    return o && Go(o) && o.catch((i) => {
      On(i, t, n);
    }), o;
  }
  if (V(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Ne(e[i], t, n, s));
    return o;
  }
}
function On(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || te;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      ot(), on(i, null, 10, [
        e,
        a,
        u
      ]), it();
      return;
    }
  }
  Jr(e, n, o, s, r);
}
function Jr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const xe = [];
let Be = -1;
const Pt = [];
let ft = null, Ct = 0;
const pi = /* @__PURE__ */ Promise.resolve();
let _n = null;
function Os(e) {
  const t = _n || pi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Yr(e) {
  let t = Be + 1, n = xe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = xe[s], i = Xt(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Is(e) {
  if (!(e.flags & 1)) {
    const t = Xt(e), n = xe[xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xt(n) ? xe.push(e) : xe.splice(Yr(t), 0, e), e.flags |= 1, gi();
  }
}
function gi() {
  _n || (_n = pi.then(_i));
}
function $r(e) {
  V(e) ? Pt.push(...e) : ft && e.id === -1 ? ft.splice(Ct + 1, 0, e) : e.flags & 1 || (Pt.push(e), e.flags |= 1), gi();
}
function so(e, t, n = Be + 1) {
  for (; n < xe.length; n++) {
    const s = xe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      xe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function mi(e) {
  if (Pt.length) {
    const t = [...new Set(Pt)].sort(
      (n, s) => Xt(n) - Xt(s)
    );
    if (Pt.length = 0, ft) {
      ft.push(...t);
      return;
    }
    for (ft = t, Ct = 0; Ct < ft.length; Ct++) {
      const n = ft[Ct];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ft = null, Ct = 0;
  }
}
const Xt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function _i(e) {
  try {
    for (Be = 0; Be < xe.length; Be++) {
      const t = xe[Be];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), on(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Be < xe.length; Be++) {
      const t = xe[Be];
      t && (t.flags &= -2);
    }
    Be = -1, xe.length = 0, mi(), _n = null, (xe.length || Pt.length) && _i();
  }
}
let Pe = null, bi = null;
function bn(e) {
  const t = Pe;
  return Pe = e, bi = e && e.type.__scopeId || null, t;
}
function vi(e, t = Pe, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && wn(-1);
    const i = bn(t);
    let r;
    try {
      r = e(...o);
    } finally {
      bn(i), s._d && wn(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function vn(e, t) {
  if (Pe === null)
    return e;
  const n = jn(Pe), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, a = te] = t[o];
    i && (U(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && nt(r), s.push({
      dir: i,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function gt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let a = l.dir[s];
    a && (ot(), Ne(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), it());
  }
}
function Ns(e, t) {
  if (be) {
    let n = be.provides;
    const s = be.parent && be.parent.provides;
    s === n && (n = be.provides = Object.create(s)), n[e] = t;
  }
}
function Ht(e, t, n = !1) {
  const s = Ws();
  if (s || Rt) {
    let o = Rt ? Rt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && U(t) ? t.call(s && s.proxy) : t;
  }
}
const Xr = /* @__PURE__ */ Symbol.for("v-scx"), Qr = () => Ht(Xr);
function wt(e, t, n) {
  return yi(e, t, n);
}
function yi(e, t, n = te) {
  const { immediate: s, deep: o, flush: i, once: r } = n, l = re({}, n), a = t && s || !t && i !== "post";
  let u;
  if (tn) {
    if (i === "sync") {
      const x = Qr();
      u = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!a) {
      const x = () => {
      };
      return x.stop = Ze, x.resume = Ze, x.pause = Ze, x;
    }
  }
  const f = be;
  l.call = (x, w, S) => Ne(x, f, w, S);
  let h = !1;
  i === "post" ? l.scheduler = (x) => {
    me(x, f && f.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (x, w) => {
    w ? x() : Is(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), h && (x.flags |= 2, f && (x.id = f.uid, x.i = f));
  };
  const _ = Zr(e, t, l);
  return tn && (u ? u.push(_) : a && _()), _;
}
function el(e, t, n) {
  const s = this.proxy, o = ae(e) ? e.includes(".") ? xi(s, e) : () => s[e] : e.bind(s, s);
  let i;
  U(t) ? i = t : (i = t.handler, n = t);
  const r = rn(this), l = yi(o, i.bind(s), n);
  return r(), l;
}
function xi(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const wi = /* @__PURE__ */ Symbol("_vte"), Si = (e) => e.__isTeleport, Ut = (e) => e && (e.disabled || e.disabled === ""), tl = (e) => e && (e.defer || e.defer === ""), oo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, io = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ds = (e, t) => {
  const n = e && e.to;
  return ae(n) ? t ? t(n) : null : n;
}, Ti = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, r, l, a, u) {
    const {
      mc: f,
      pc: h,
      pbc: _,
      o: { insert: x, querySelector: w, createText: S, createComment: F }
    } = u, M = Ut(t.props);
    let { shapeFlag: R, children: k, dynamicChildren: y } = t;
    if (e == null) {
      const H = t.el = S(""), j = t.anchor = S("");
      x(H, n, s), x(j, n, s);
      const B = (L, W) => {
        R & 16 && f(
          k,
          L,
          W,
          o,
          i,
          r,
          l,
          a
        );
      }, X = () => {
        const L = t.target = ds(t.props, w), W = hs(L, t, S, x);
        L && (r !== "svg" && oo(L) ? r = "svg" : r !== "mathml" && io(L) && (r = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(L), M || (B(L, W), hn(t, !1)));
      };
      M && (B(n, j), hn(t, !0)), tl(t.props) || i && i.pendingBranch ? (t.el.__isMounted = !1, me(() => {
        t.el.__isMounted === !1 && (X(), delete t.el.__isMounted);
      }, i)) : X();
    } else {
      t.el = e.el, t.targetStart = e.targetStart;
      const H = t.anchor = e.anchor, j = t.target = e.target, B = t.targetAnchor = e.targetAnchor;
      if (e.el.__isMounted === !1) {
        me(() => {
          Ti.process(
            e,
            t,
            n,
            s,
            o,
            i,
            r,
            l,
            a,
            u
          );
        }, i);
        return;
      }
      const X = Ut(e.props), L = X ? n : j, W = X ? H : B;
      if (r === "svg" || oo(j) ? r = "svg" : (r === "mathml" || io(j)) && (r = "mathml"), y ? (_(
        e.dynamicChildren,
        y,
        L,
        o,
        i,
        r,
        l
      ), Bs(e, t, !0)) : a || h(
        e,
        t,
        L,
        W,
        o,
        i,
        r,
        l,
        !1
      ), M)
        X ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : dn(
          t,
          n,
          H,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const I = t.target = ds(
          t.props,
          w
        );
        I && dn(
          t,
          I,
          null,
          u,
          0
        );
      } else X && dn(
        t,
        j,
        B,
        u,
        1
      );
      hn(t, M);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, i) {
    const {
      shapeFlag: r,
      children: l,
      anchor: a,
      targetStart: u,
      targetAnchor: f,
      target: h,
      props: _
    } = e;
    if (h && (o(u), o(f)), i && o(a), r & 16) {
      const x = i || !Ut(_);
      for (let w = 0; w < l.length; w++) {
        const S = l[w];
        s(
          S,
          t,
          n,
          x,
          !!S.dynamicChildren
        );
      }
    }
  },
  move: dn,
  hydrate: nl
};
function dn(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: r, anchor: l, shapeFlag: a, children: u, props: f } = e, h = i === 2;
  if (h && s(r, t, n), (!h || Ut(f)) && a & 16)
    for (let _ = 0; _ < u.length; _++)
      o(
        u[_],
        t,
        n,
        2
      );
  h && s(l, t, n);
}
function nl(e, t, n, s, o, i, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: u, createText: f }
}, h) {
  function _(F, M) {
    let R = M;
    for (; R; ) {
      if (R && R.nodeType === 8) {
        if (R.data === "teleport start anchor")
          t.targetStart = R;
        else if (R.data === "teleport anchor") {
          t.targetAnchor = R, F._lpa = t.targetAnchor && r(t.targetAnchor);
          break;
        }
      }
      R = r(R);
    }
  }
  function x(F, M) {
    M.anchor = h(
      r(F),
      M,
      l(F),
      n,
      s,
      o,
      i
    );
  }
  const w = t.target = ds(
    t.props,
    a
  ), S = Ut(t.props);
  if (w) {
    const F = w._lpa || w.firstChild;
    t.shapeFlag & 16 && (S ? (x(e, t), _(w, F), t.targetAnchor || hs(
      w,
      t,
      f,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === w ? e : null
    )) : (t.anchor = r(e), _(w, F), t.targetAnchor || hs(w, t, f, u), h(
      F && r(F),
      t,
      w,
      n,
      s,
      o,
      i
    ))), hn(t, S);
  } else S && t.shapeFlag & 16 && (x(e, t), t.targetStart = e, t.targetAnchor = r(e));
  return t.anchor && r(t.anchor);
}
const sl = Ti;
function hn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function hs(e, t, n, s, o = null) {
  const i = t.targetStart = n(""), r = t.targetAnchor = n("");
  return i[wi] = r, e && (s(i, e, o), s(r, e, o)), r;
}
const Ue = /* @__PURE__ */ Symbol("_leaveCb"), It = /* @__PURE__ */ Symbol("_enterCb");
function ol() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Dn(() => {
    e.isMounted = !0;
  }), Ds(() => {
    e.isUnmounting = !0;
  }), e;
}
const Re = [Function, Array], Ci = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Re,
  onEnter: Re,
  onAfterEnter: Re,
  onEnterCancelled: Re,
  // leave
  onBeforeLeave: Re,
  onLeave: Re,
  onAfterLeave: Re,
  onLeaveCancelled: Re,
  // appear
  onBeforeAppear: Re,
  onAppear: Re,
  onAfterAppear: Re,
  onAppearCancelled: Re
}, Ai = (e) => {
  const t = e.subTree;
  return t.component ? Ai(t.component) : t;
}, il = {
  name: "BaseTransition",
  props: Ci,
  setup(e, { slots: t }) {
    const n = Ws(), s = ol();
    return () => {
      const o = t.default && Pi(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = Ei(o), r = /* @__PURE__ */ Z(e), { mode: l } = r;
      if (s.isLeaving)
        return $n(i);
      const a = ro(i);
      if (!a)
        return $n(i);
      let u = ps(
        a,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => u = h
      );
      a.type !== we && Qt(a, u);
      let f = n.subTree && ro(n.subTree);
      if (f && f.type !== we && !yt(f, a) && Ai(n).type !== we) {
        let h = ps(
          f,
          r,
          s,
          n
        );
        if (Qt(f, h), l === "out-in" && a.type !== we)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, f = void 0;
          }, $n(i);
        l === "in-out" && a.type !== we ? h.delayLeave = (_, x, w) => {
          const S = ki(
            s,
            f
          );
          S[String(f.key)] = f, _[Ue] = () => {
            x(), _[Ue] = void 0, delete u.delayedLeave, f = void 0;
          }, u.delayedLeave = () => {
            w(), delete u.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return i;
    };
  }
};
function Ei(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== we) {
        t = n;
        break;
      }
  }
  return t;
}
const rl = il;
function ki(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function ps(e, t, n, s, o) {
  const {
    appear: i,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: f,
    onEnterCancelled: h,
    onBeforeLeave: _,
    onLeave: x,
    onAfterLeave: w,
    onLeaveCancelled: S,
    onBeforeAppear: F,
    onAppear: M,
    onAfterAppear: R,
    onAppearCancelled: k
  } = t, y = String(e.key), H = ki(n, e), j = (L, W) => {
    L && Ne(
      L,
      s,
      9,
      W
    );
  }, B = (L, W) => {
    const I = W[1];
    j(L, W), V(L) ? L.every((E) => E.length <= 1) && I() : L.length <= 1 && I();
  }, X = {
    mode: r,
    persisted: l,
    beforeEnter(L) {
      let W = a;
      if (!n.isMounted)
        if (i)
          W = F || a;
        else
          return;
      L[Ue] && L[Ue](
        !0
        /* cancelled */
      );
      const I = H[y];
      I && yt(e, I) && I.el[Ue] && I.el[Ue](), j(W, [L]);
    },
    enter(L) {
      if (H[y] === e) return;
      let W = u, I = f, E = h;
      if (!n.isMounted)
        if (i)
          W = M || u, I = R || f, E = k || h;
        else
          return;
      let K = !1;
      L[It] = (Ee) => {
        K || (K = !0, Ee ? j(E, [L]) : j(I, [L]), X.delayedLeave && X.delayedLeave(), L[It] = void 0);
      };
      const ie = L[It].bind(null, !1);
      W ? B(W, [L, ie]) : ie();
    },
    leave(L, W) {
      const I = String(e.key);
      if (L[It] && L[It](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return W();
      j(_, [L]);
      let E = !1;
      L[Ue] = (ie) => {
        E || (E = !0, W(), ie ? j(S, [L]) : j(w, [L]), L[Ue] = void 0, H[I] === e && delete H[I]);
      };
      const K = L[Ue].bind(null, !1);
      H[I] = e, x ? B(x, [L, K]) : K();
    },
    clone(L) {
      const W = ps(
        L,
        t,
        n,
        s,
        o
      );
      return o && o(W), W;
    }
  };
  return X;
}
function $n(e) {
  if (In(e))
    return e = dt(e), e.children = null, e;
}
function ro(e) {
  if (!In(e))
    return Si(e.type) && e.children ? Ei(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && U(n.default))
      return n.default();
  }
}
function Qt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Qt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Pi(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === Ae ? (r.patchFlag & 128 && o++, s = s.concat(
      Pi(r.children, t, l)
    )) : (t || r.type !== we) && s.push(l != null ? dt(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function ll(e, t) {
  return U(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    re({ name: e.name }, t, { setup: e })
  ) : e;
}
function Hi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function lo(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const yn = /* @__PURE__ */ new WeakMap();
function Wt(e, t, n, s, o = !1) {
  if (V(e)) {
    e.forEach(
      (S, F) => Wt(
        S,
        t && (V(t) ? t[F] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Kt(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Wt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? jn(s.component) : s.el, r = o ? null : i, { i: l, r: a } = e, u = t && t.r, f = l.refs === te ? l.refs = {} : l.refs, h = l.setupState, _ = /* @__PURE__ */ Z(h), x = h === te ? Ko : (S) => lo(f, S) ? !1 : J(_, S), w = (S, F) => !(F && lo(f, F));
  if (u != null && u !== a) {
    if (ao(t), ae(u))
      f[u] = null, x(u) && (h[u] = null);
    else if (/* @__PURE__ */ ge(u)) {
      const S = t;
      w(u, S.k) && (u.value = null), S.k && (f[S.k] = null);
    }
  }
  if (U(a))
    on(a, l, 12, [r, f]);
  else {
    const S = ae(a), F = /* @__PURE__ */ ge(a);
    if (S || F) {
      const M = () => {
        if (e.f) {
          const R = S ? x(a) ? h[a] : f[a] : w() || !e.k ? a.value : f[e.k];
          if (o)
            V(R) && ws(R, i);
          else if (V(R))
            R.includes(i) || R.push(i);
          else if (S)
            f[a] = [i], x(a) && (h[a] = f[a]);
          else {
            const k = [i];
            w(a, e.k) && (a.value = k), e.k && (f[e.k] = k);
          }
        } else S ? (f[a] = r, x(a) && (h[a] = r)) : F && (w(a, e.k) && (a.value = r), e.k && (f[e.k] = r));
      };
      if (r) {
        const R = () => {
          M(), yn.delete(e);
        };
        R.id = -1, yn.set(e, R), me(R, n);
      } else
        ao(e), M();
    }
  }
}
function ao(e) {
  const t = yn.get(e);
  t && (t.flags |= 8, yn.delete(e));
}
Mn().requestIdleCallback;
Mn().cancelIdleCallback;
const Kt = (e) => !!e.type.__asyncLoader, In = (e) => e.type.__isKeepAlive;
function al(e, t) {
  Ri(e, "a", t);
}
function cl(e, t) {
  Ri(e, "da", t);
}
function Ri(e, t, n = be) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Nn(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      In(o.parent.vnode) && fl(s, t, n, o), o = o.parent;
  }
}
function fl(e, t, n, s) {
  const o = Nn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Vs(() => {
    ws(s[t], o);
  }, n);
}
function Nn(e, t, n = be, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      ot();
      const l = rn(n), a = Ne(t, n, e, r);
      return l(), it(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const lt = (e) => (t, n = be) => {
  (!tn || e === "sp") && Nn(e, (...s) => t(...s), n);
}, ul = lt("bm"), Dn = lt("m"), dl = lt(
  "bu"
), hl = lt("u"), Ds = lt(
  "bum"
), Vs = lt("um"), pl = lt(
  "sp"
), gl = lt("rtg"), ml = lt("rtc");
function _l(e, t = be) {
  Nn("ec", e, t);
}
const bl = "components";
function Ge(e, t) {
  return yl(bl, e, !0, t) || e;
}
const vl = /* @__PURE__ */ Symbol.for("v-ndc");
function yl(e, t, n = !0, s = !1) {
  const o = Pe || be;
  if (o) {
    const i = o.type;
    {
      const l = oa(
        i,
        !1
      );
      if (l && (l === t || l === de(t) || l === Fn(de(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      co(o[e] || i[e], t) || // global registration
      co(o.appContext[e], t)
    );
    return !r && s ? i : r;
  }
}
function co(e, t) {
  return e && (e[t] || e[de(t)] || e[Fn(de(t))]);
}
const gs = (e) => e ? Yi(e) ? jn(e) : gs(e.parent) : null, qt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ re(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => gs(e.parent),
    $root: (e) => gs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Mi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Is(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Os.bind(e.proxy)),
    $watch: (e) => el.bind(e)
  })
), Xn = (e, t) => e !== te && !e.__isScriptSetup && J(e, t), xl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const _ = r[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Xn(s, t))
          return r[t] = 1, s[t];
        if (o !== te && J(o, t))
          return r[t] = 2, o[t];
        if (J(i, t))
          return r[t] = 3, i[t];
        if (n !== te && J(n, t))
          return r[t] = 4, n[t];
        ms && (r[t] = 0);
      }
    }
    const u = qt[t];
    let f, h;
    if (u)
      return t === "$attrs" && _e(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== te && J(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, J(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return Xn(o, t) ? (o[t] = n, !0) : s !== te && J(s, t) ? (s[t] = n, !0) : J(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: r }
  }, l) {
    let a;
    return !!(n[l] || e !== te && l[0] !== "$" && J(e, l) || Xn(t, l) || J(i, l) || J(s, l) || J(qt, l) || J(o.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function fo(e) {
  return V(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ms = !0;
function wl(e) {
  const t = Mi(e), n = e.proxy, s = e.ctx;
  ms = !1, t.beforeCreate && uo(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: f,
    beforeMount: h,
    mounted: _,
    beforeUpdate: x,
    updated: w,
    activated: S,
    deactivated: F,
    beforeDestroy: M,
    beforeUnmount: R,
    destroyed: k,
    unmounted: y,
    render: H,
    renderTracked: j,
    renderTriggered: B,
    errorCaptured: X,
    serverPrefetch: L,
    // public API
    expose: W,
    inheritAttrs: I,
    // assets
    components: E,
    directives: K,
    filters: ie
  } = t;
  if (u && Sl(u, s, null), r)
    for (const ne in r) {
      const G = r[ne];
      U(G) && (s[ne] = G.bind(n));
    }
  if (o) {
    const ne = o.call(n, n);
    $(ne) && (e.data = /* @__PURE__ */ Ln(ne));
  }
  if (ms = !0, i)
    for (const ne in i) {
      const G = i[ne], Ye = U(G) ? G.bind(n, n) : U(G.get) ? G.get.bind(n, n) : Ze, St = !U(G) && U(G.set) ? G.set.bind(n) : Ze, Se = ue({
        get: Ye,
        set: St
      });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (Te) => Se.value = Te
      });
    }
  if (l)
    for (const ne in l)
      Fi(l[ne], s, n, ne);
  if (a) {
    const ne = U(a) ? a.call(n) : a;
    Reflect.ownKeys(ne).forEach((G) => {
      Ns(G, ne[G]);
    });
  }
  f && uo(f, e, "c");
  function ce(ne, G) {
    V(G) ? G.forEach((Ye) => ne(Ye.bind(n))) : G && ne(G.bind(n));
  }
  if (ce(ul, h), ce(Dn, _), ce(dl, x), ce(hl, w), ce(al, S), ce(cl, F), ce(_l, X), ce(ml, j), ce(gl, B), ce(Ds, R), ce(Vs, y), ce(pl, L), V(W))
    if (W.length) {
      const ne = e.exposed || (e.exposed = {});
      W.forEach((G) => {
        Object.defineProperty(ne, G, {
          get: () => n[G],
          set: (Ye) => n[G] = Ye,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === Ze && (e.render = H), I != null && (e.inheritAttrs = I), E && (e.components = E), K && (e.directives = K), L && Hi(e);
}
function Sl(e, t, n = Ze) {
  V(e) && (e = _s(e));
  for (const s in e) {
    const o = e[s];
    let i;
    $(o) ? "default" in o ? i = Ht(
      o.from || s,
      o.default,
      !0
    ) : i = Ht(o.from || s) : i = Ht(o), /* @__PURE__ */ ge(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[s] = i;
  }
}
function uo(e, t, n) {
  Ne(
    V(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Fi(e, t, n, s) {
  let o = s.includes(".") ? xi(n, s) : () => n[s];
  if (ae(e)) {
    const i = t[e];
    U(i) && wt(o, i);
  } else if (U(e))
    wt(o, e.bind(n));
  else if ($(e))
    if (V(e))
      e.forEach((i) => Fi(i, t, n, s));
    else {
      const i = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(i) && wt(o, i, e);
    }
}
function Mi(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (u) => xn(a, u, r, !0)
  ), xn(a, t, r)), $(t) && i.set(t, a), a;
}
function xn(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && xn(e, i, n, !0), o && o.forEach(
    (r) => xn(e, r, n, !0)
  );
  for (const r in t)
    if (!(s && r === "expose")) {
      const l = Tl[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const Tl = {
  data: ho,
  props: po,
  emits: po,
  // objects
  methods: Vt,
  computed: Vt,
  // lifecycle
  beforeCreate: ve,
  created: ve,
  beforeMount: ve,
  mounted: ve,
  beforeUpdate: ve,
  updated: ve,
  beforeDestroy: ve,
  beforeUnmount: ve,
  destroyed: ve,
  unmounted: ve,
  activated: ve,
  deactivated: ve,
  errorCaptured: ve,
  serverPrefetch: ve,
  // assets
  components: Vt,
  directives: Vt,
  // watch
  watch: Al,
  // provide / inject
  provide: ho,
  inject: Cl
};
function ho(e, t) {
  return t ? e ? function() {
    return re(
      U(e) ? e.call(this, this) : e,
      U(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Cl(e, t) {
  return Vt(_s(e), _s(t));
}
function _s(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Vt(e, t) {
  return e ? re(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function po(e, t) {
  return e ? V(e) && V(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : re(
    /* @__PURE__ */ Object.create(null),
    fo(e),
    fo(t ?? {})
  ) : t;
}
function Al(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = re(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ve(e[s], t[s]);
  return n;
}
function Li() {
  return {
    app: null,
    config: {
      isNativeTag: Ko,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let El = 0;
function kl(e, t) {
  return function(s, o = null) {
    U(s) || (s = re({}, s)), o != null && !$(o) && (o = null);
    const i = Li(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = i.app = {
      _uid: El++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: la,
      get config() {
        return i.config;
      },
      set config(f) {
      },
      use(f, ...h) {
        return r.has(f) || (f && U(f.install) ? (r.add(f), f.install(u, ...h)) : U(f) && (r.add(f), f(u, ...h))), u;
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), u;
      },
      component(f, h) {
        return h ? (i.components[f] = h, u) : i.components[f];
      },
      directive(f, h) {
        return h ? (i.directives[f] = h, u) : i.directives[f];
      },
      mount(f, h, _) {
        if (!a) {
          const x = u._ceVNode || Q(s, o);
          return x.appContext = i, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), e(x, f, _), a = !0, u._container = f, f.__vue_app__ = u, jn(x.component);
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        a && (Ne(
          l,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, h) {
        return i.provides[f] = h, u;
      },
      runWithContext(f) {
        const h = Rt;
        Rt = u;
        try {
          return f();
        } finally {
          Rt = h;
        }
      }
    };
    return u;
  };
}
let Rt = null;
const Pl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${de(t)}Modifiers`] || e[`${Me(t)}Modifiers`];
function Hl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || te;
  let o = n;
  const i = t.startsWith("update:"), r = i && Pl(s, t.slice(7));
  r && (r.trim && (o = n.map((f) => ae(f) ? f.trim() : f)), r.number && (o = n.map(dr)));
  let l, a = s[l = Kn(t)] || // also try camelCase event handler (#2249)
  s[l = Kn(de(t))];
  !a && i && (a = s[l = Kn(Me(t))]), a && Ne(
    a,
    e,
    6,
    o
  );
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ne(
      u,
      e,
      6,
      o
    );
  }
}
const Rl = /* @__PURE__ */ new WeakMap();
function Oi(e, t, n = !1) {
  const s = n ? Rl : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!U(e)) {
    const a = (u) => {
      const f = Oi(u, t, !0);
      f && (l = !0, re(r, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? ($(e) && s.set(e, null), null) : (V(i) ? i.forEach((a) => r[a] = null) : re(r, i), $(e) && s.set(e, r), r);
}
function Vn(e, t) {
  return !e || !kn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, Me(t)) || J(e, t));
}
function go(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: a,
    render: u,
    renderCache: f,
    props: h,
    data: _,
    setupState: x,
    ctx: w,
    inheritAttrs: S
  } = e, F = bn(e);
  let M, R;
  try {
    if (n.shapeFlag & 4) {
      const y = o || s, H = y;
      M = Ke(
        u.call(
          H,
          y,
          f,
          h,
          x,
          _,
          w
        )
      ), R = l;
    } else {
      const y = t;
      M = Ke(
        y.length > 1 ? y(
          h,
          { attrs: l, slots: r, emit: a }
        ) : y(
          h,
          null
        )
      ), R = t.props ? l : Fl(l);
    }
  } catch (y) {
    Gt.length = 0, On(y, e, 1), M = Q(we);
  }
  let k = M;
  if (R && S !== !1) {
    const y = Object.keys(R), { shapeFlag: H } = k;
    y.length && H & 7 && (i && y.some(Pn) && (R = Ml(
      R,
      i
    )), k = dt(k, R, !1, !0));
  }
  return n.dirs && (k = dt(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && Qt(k, n.transition), M = k, bn(F), M;
}
const Fl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || kn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ml = (e, t) => {
  const n = {};
  for (const s in e)
    (!Pn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Ll(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: a } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? mo(s, r, u) : !!r;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const _ = f[h];
        if (Ii(r, s, _) && !Vn(u, _))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? mo(s, r, u) : !0 : !!r;
  return !1;
}
function mo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (Ii(t, e, i) && !Vn(n, i))
      return !0;
  }
  return !1;
}
function Ii(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && $(s) && $(o) ? !Cs(s, o) : s !== o;
}
function Ol({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = s, e = o), o === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Ni = {}, Di = () => Object.create(Ni), Vi = (e) => Object.getPrototypeOf(e) === Ni;
function Il(e, t, n, s = !1) {
  const o = {}, i = Di();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zi(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ zr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function Nl(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ Z(o), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let _ = f[h];
        if (Vn(e.emitsOptions, _))
          continue;
        const x = t[_];
        if (a)
          if (J(i, _))
            x !== i[_] && (i[_] = x, u = !0);
          else {
            const w = de(_);
            o[w] = bs(
              a,
              l,
              w,
              x,
              e,
              !1
            );
          }
        else
          x !== i[_] && (i[_] = x, u = !0);
      }
    }
  } else {
    zi(e, t, o, i) && (u = !0);
    let f;
    for (const h in l)
      (!t || // for camelCase
      !J(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Me(h)) === h || !J(t, f))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[f] !== void 0) && (o[h] = bs(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete o[h]);
    if (i !== l)
      for (const h in i)
        (!t || !J(t, h)) && (delete i[h], u = !0);
  }
  u && tt(e.attrs, "set", "");
}
function zi(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (zt(a))
        continue;
      const u = t[a];
      let f;
      o && J(o, f = de(a)) ? !i || !i.includes(f) ? n[f] = u : (l || (l = {}))[f] = u : Vn(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, r = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ Z(n), u = l || te;
    for (let f = 0; f < i.length; f++) {
      const h = i[f];
      n[h] = bs(
        o,
        a,
        h,
        u[h],
        e,
        !J(u, h)
      );
    }
  }
  return r;
}
function bs(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = J(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && U(a)) {
        const { propsDefaults: u } = o;
        if (n in u)
          s = u[n];
        else {
          const f = rn(o);
          s = u[n] = a.call(
            null,
            t
          ), f();
        }
      } else
        s = a;
      o.ce && o.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Me(n)) && (s = !0));
  }
  return s;
}
const Dl = /* @__PURE__ */ new WeakMap();
function ji(e, t, n = !1) {
  const s = n ? Dl : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let a = !1;
  if (!U(e)) {
    const f = (h) => {
      a = !0;
      const [_, x] = ji(h, t, !0);
      re(r, _), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !a)
    return $(e) && s.set(e, At), At;
  if (V(i))
    for (let f = 0; f < i.length; f++) {
      const h = de(i[f]);
      _o(h) && (r[h] = te);
    }
  else if (i)
    for (const f in i) {
      const h = de(f);
      if (_o(h)) {
        const _ = i[f], x = r[h] = V(_) || U(_) ? { type: _ } : re({}, _), w = x.type;
        let S = !1, F = !0;
        if (V(w))
          for (let M = 0; M < w.length; ++M) {
            const R = w[M], k = U(R) && R.name;
            if (k === "Boolean") {
              S = !0;
              break;
            } else k === "String" && (F = !1);
          }
        else
          S = U(w) && w.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = S, x[
          1
          /* shouldCastTrue */
        ] = F, (S || J(x, "default")) && l.push(h);
      }
    }
  const u = [r, l];
  return $(e) && s.set(e, u), u;
}
function _o(e) {
  return e[0] !== "$" && !zt(e);
}
const zs = (e) => e === "_" || e === "_ctx" || e === "$stable", js = (e) => V(e) ? e.map(Ke) : [Ke(e)], Vl = (e, t, n) => {
  if (t._n)
    return t;
  const s = vi((...o) => js(t(...o)), n);
  return s._c = !1, s;
}, Bi = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (zs(o)) continue;
    const i = e[o];
    if (U(i))
      t[o] = Vl(o, i, s);
    else if (i != null) {
      const r = js(i);
      t[o] = () => r;
    }
  }
}, Ui = (e, t) => {
  const n = js(t);
  e.slots.default = () => n;
}, Wi = (e, t, n) => {
  for (const s in t)
    (n || !zs(s)) && (e[s] = t[s]);
}, zl = (e, t, n) => {
  const s = e.slots = Di();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Wi(s, t, n), n && Jo(s, "_", o, !0)) : Bi(t, s);
  } else t && Ui(e, t);
}, jl = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = te;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Wi(o, t, n) : (i = !t.$stable, Bi(t, o)), r = t;
  } else t && (Ui(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !zs(l) && r[l] == null && delete o[l];
}, me = ql;
function Bl(e) {
  return Ul(e);
}
function Ul(e, t) {
  const n = Mn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: f,
    parentNode: h,
    nextSibling: _,
    setScopeId: x = Ze,
    insertStaticContent: w
  } = e, S = (c, d, m, b = null, g = null, p = null, C = void 0, A = null, T = !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !yt(c, d) && (b = ht(c), Te(c, g, p, !0), c = null), d.patchFlag === -2 && (T = !1, d.dynamicChildren = null);
    const { type: v, ref: N, shapeFlag: P } = d;
    switch (v) {
      case zn:
        F(c, d, m, b);
        break;
      case we:
        M(c, d, m, b);
        break;
      case es:
        c == null && R(d, m, b, C);
        break;
      case Ae:
        E(
          c,
          d,
          m,
          b,
          g,
          p,
          C,
          A,
          T
        );
        break;
      default:
        P & 1 ? H(
          c,
          d,
          m,
          b,
          g,
          p,
          C,
          A,
          T
        ) : P & 6 ? K(
          c,
          d,
          m,
          b,
          g,
          p,
          C,
          A,
          T
        ) : (P & 64 || P & 128) && v.process(
          c,
          d,
          m,
          b,
          g,
          p,
          C,
          A,
          T,
          pt
        );
    }
    N != null && g ? Wt(N, c && c.ref, p, d || c, !d) : N == null && c && c.ref != null && Wt(c.ref, null, p, c, !0);
  }, F = (c, d, m, b) => {
    if (c == null)
      s(
        d.el = l(d.children),
        m,
        b
      );
    else {
      const g = d.el = c.el;
      d.children !== c.children && u(g, d.children);
    }
  }, M = (c, d, m, b) => {
    c == null ? s(
      d.el = a(d.children || ""),
      m,
      b
    ) : d.el = c.el;
  }, R = (c, d, m, b) => {
    [c.el, c.anchor] = w(
      c.children,
      d,
      m,
      b,
      c.el,
      c.anchor
    );
  }, k = ({ el: c, anchor: d }, m, b) => {
    let g;
    for (; c && c !== d; )
      g = _(c), s(c, m, b), c = g;
    s(d, m, b);
  }, y = ({ el: c, anchor: d }) => {
    let m;
    for (; c && c !== d; )
      m = _(c), o(c), c = m;
    o(d);
  }, H = (c, d, m, b, g, p, C, A, T) => {
    if (d.type === "svg" ? C = "svg" : d.type === "math" && (C = "mathml"), c == null)
      j(
        d,
        m,
        b,
        g,
        p,
        C,
        A,
        T
      );
    else {
      const v = c.el && c.el._isVueCE ? c.el : null;
      try {
        v && v._beginPatch(), L(
          c,
          d,
          g,
          p,
          C,
          A,
          T
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, j = (c, d, m, b, g, p, C, A) => {
    let T, v;
    const { props: N, shapeFlag: P, transition: O, dirs: z } = c;
    if (T = c.el = r(
      c.type,
      p,
      N && N.is,
      N
    ), P & 8 ? f(T, c.children) : P & 16 && X(
      c.children,
      T,
      null,
      b,
      g,
      Qn(c, p),
      C,
      A
    ), z && gt(c, null, b, "created"), B(T, c, c.scopeId, C, b), N) {
      for (const ee in N)
        ee !== "value" && !zt(ee) && i(T, ee, null, N[ee], p, b);
      "value" in N && i(T, "value", null, N.value, p), (v = N.onVnodeBeforeMount) && je(v, b, c);
    }
    z && gt(c, null, b, "beforeMount");
    const q = Wl(g, O);
    q && O.beforeEnter(T), s(T, d, m), ((v = N && N.onVnodeMounted) || q || z) && me(() => {
      v && je(v, b, c), q && O.enter(T), z && gt(c, null, b, "mounted");
    }, g);
  }, B = (c, d, m, b, g) => {
    if (m && x(c, m), b)
      for (let p = 0; p < b.length; p++)
        x(c, b[p]);
    if (g) {
      let p = g.subTree;
      if (d === p || Gi(p.type) && (p.ssContent === d || p.ssFallback === d)) {
        const C = g.vnode;
        B(
          c,
          C,
          C.scopeId,
          C.slotScopeIds,
          g.parent
        );
      }
    }
  }, X = (c, d, m, b, g, p, C, A, T = 0) => {
    for (let v = T; v < c.length; v++) {
      const N = c[v] = A ? et(c[v]) : Ke(c[v]);
      S(
        null,
        N,
        d,
        m,
        b,
        g,
        p,
        C,
        A
      );
    }
  }, L = (c, d, m, b, g, p, C) => {
    const A = d.el = c.el;
    let { patchFlag: T, dynamicChildren: v, dirs: N } = d;
    T |= c.patchFlag & 16;
    const P = c.props || te, O = d.props || te;
    let z;
    if (m && mt(m, !1), (z = O.onVnodeBeforeUpdate) && je(z, m, d, c), N && gt(d, c, m, "beforeUpdate"), m && mt(m, !0), (P.innerHTML && O.innerHTML == null || P.textContent && O.textContent == null) && f(A, ""), v ? W(
      c.dynamicChildren,
      v,
      A,
      m,
      b,
      Qn(d, g),
      p
    ) : C || G(
      c,
      d,
      A,
      null,
      m,
      b,
      Qn(d, g),
      p,
      !1
    ), T > 0) {
      if (T & 16)
        I(A, P, O, m, g);
      else if (T & 2 && P.class !== O.class && i(A, "class", null, O.class, g), T & 4 && i(A, "style", P.style, O.style, g), T & 8) {
        const q = d.dynamicProps;
        for (let ee = 0; ee < q.length; ee++) {
          const se = q[ee], fe = P[se], he = O[se];
          (he !== fe || se === "value") && i(A, se, fe, he, g, m);
        }
      }
      T & 1 && c.children !== d.children && f(A, d.children);
    } else !C && v == null && I(A, P, O, m, g);
    ((z = O.onVnodeUpdated) || N) && me(() => {
      z && je(z, m, d, c), N && gt(d, c, m, "updated");
    }, b);
  }, W = (c, d, m, b, g, p, C) => {
    for (let A = 0; A < d.length; A++) {
      const T = c[A], v = d[A], N = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === Ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !yt(T, v) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 198) ? h(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      S(
        T,
        v,
        N,
        null,
        b,
        g,
        p,
        C,
        !0
      );
    }
  }, I = (c, d, m, b, g) => {
    if (d !== m) {
      if (d !== te)
        for (const p in d)
          !zt(p) && !(p in m) && i(
            c,
            p,
            d[p],
            null,
            g,
            b
          );
      for (const p in m) {
        if (zt(p)) continue;
        const C = m[p], A = d[p];
        C !== A && p !== "value" && i(c, p, A, C, g, b);
      }
      "value" in m && i(c, "value", d.value, m.value, g);
    }
  }, E = (c, d, m, b, g, p, C, A, T) => {
    const v = d.el = c ? c.el : l(""), N = d.anchor = c ? c.anchor : l("");
    let { patchFlag: P, dynamicChildren: O, slotScopeIds: z } = d;
    z && (A = A ? A.concat(z) : z), c == null ? (s(v, m, b), s(N, m, b), X(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      m,
      N,
      g,
      p,
      C,
      A,
      T
    )) : P > 0 && P & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === O.length ? (W(
      c.dynamicChildren,
      O,
      m,
      g,
      p,
      C,
      A
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || g && d === g.subTree) && Bs(
      c,
      d,
      !0
      /* shallow */
    )) : G(
      c,
      d,
      m,
      N,
      g,
      p,
      C,
      A,
      T
    );
  }, K = (c, d, m, b, g, p, C, A, T) => {
    d.slotScopeIds = A, c == null ? d.shapeFlag & 512 ? g.ctx.activate(
      d,
      m,
      b,
      C,
      T
    ) : ie(
      d,
      m,
      b,
      g,
      p,
      C,
      T
    ) : Ee(c, d, T);
  }, ie = (c, d, m, b, g, p, C) => {
    const A = c.component = Ql(
      c,
      b,
      g
    );
    if (In(c) && (A.ctx.renderer = pt), ea(A, !1, C), A.asyncDep) {
      if (g && g.registerDep(A, ce, C), !c.el) {
        const T = A.subTree = Q(we);
        M(null, T, d, m), c.placeholder = T.el;
      }
    } else
      ce(
        A,
        c,
        d,
        m,
        g,
        p,
        C
      );
  }, Ee = (c, d, m) => {
    const b = d.component = c.component;
    if (Ll(c, d, m))
      if (b.asyncDep && !b.asyncResolved) {
        ne(b, d, m);
        return;
      } else
        b.next = d, b.update();
    else
      d.el = c.el, b.vnode = d;
  }, ce = (c, d, m, b, g, p, C) => {
    const A = () => {
      if (c.isMounted) {
        let { next: P, bu: O, u: z, parent: q, vnode: ee } = c;
        {
          const Ve = Ki(c);
          if (Ve) {
            P && (P.el = ee.el, ne(c, P, C)), Ve.asyncDep.then(() => {
              me(() => {
                c.isUnmounted || v();
              }, g);
            });
            return;
          }
        }
        let se = P, fe;
        mt(c, !1), P ? (P.el = ee.el, ne(c, P, C)) : P = ee, O && qn(O), (fe = P.props && P.props.onVnodeBeforeUpdate) && je(fe, q, P, ee), mt(c, !0);
        const he = go(c), De = c.subTree;
        c.subTree = he, S(
          De,
          he,
          // parent may have changed if it's in a teleport
          h(De.el),
          // anchor may have changed if it's in a fragment
          ht(De),
          c,
          g,
          p
        ), P.el = he.el, se === null && Ol(c, he.el), z && me(z, g), (fe = P.props && P.props.onVnodeUpdated) && me(
          () => je(fe, q, P, ee),
          g
        );
      } else {
        let P;
        const { el: O, props: z } = d, { bm: q, m: ee, parent: se, root: fe, type: he } = c, De = Kt(d);
        mt(c, !1), q && qn(q), !De && (P = z && z.onVnodeBeforeMount) && je(P, se, d), mt(c, !0);
        {
          fe.ce && fe.ce._hasShadowRoot() && fe.ce._injectChildStyle(
            he,
            c.parent ? c.parent.type : void 0
          );
          const Ve = c.subTree = go(c);
          S(
            null,
            Ve,
            m,
            b,
            c,
            g,
            p
          ), d.el = Ve.el;
        }
        if (ee && me(ee, g), !De && (P = z && z.onVnodeMounted)) {
          const Ve = d;
          me(
            () => je(P, se, Ve),
            g
          );
        }
        (d.shapeFlag & 256 || se && Kt(se.vnode) && se.vnode.shapeFlag & 256) && c.a && me(c.a, g), c.isMounted = !0, d = m = b = null;
      }
    };
    c.scope.on();
    const T = c.effect = new Qo(A);
    c.scope.off();
    const v = c.update = T.run.bind(T), N = c.job = T.runIfDirty.bind(T);
    N.i = c, N.id = c.uid, T.scheduler = () => Is(N), mt(c, !0), v();
  }, ne = (c, d, m) => {
    d.component = c;
    const b = c.vnode.props;
    c.vnode = d, c.next = null, Nl(c, d.props, b, m), jl(c, d.children, m), ot(), so(c), it();
  }, G = (c, d, m, b, g, p, C, A, T = !1) => {
    const v = c && c.children, N = c ? c.shapeFlag : 0, P = d.children, { patchFlag: O, shapeFlag: z } = d;
    if (O > 0) {
      if (O & 128) {
        St(
          v,
          P,
          m,
          b,
          g,
          p,
          C,
          A,
          T
        );
        return;
      } else if (O & 256) {
        Ye(
          v,
          P,
          m,
          b,
          g,
          p,
          C,
          A,
          T
        );
        return;
      }
    }
    z & 8 ? (N & 16 && at(v, g, p), P !== v && f(m, P)) : N & 16 ? z & 16 ? St(
      v,
      P,
      m,
      b,
      g,
      p,
      C,
      A,
      T
    ) : at(v, g, p, !0) : (N & 8 && f(m, ""), z & 16 && X(
      P,
      m,
      b,
      g,
      p,
      C,
      A,
      T
    ));
  }, Ye = (c, d, m, b, g, p, C, A, T) => {
    c = c || At, d = d || At;
    const v = c.length, N = d.length, P = Math.min(v, N);
    let O;
    for (O = 0; O < P; O++) {
      const z = d[O] = T ? et(d[O]) : Ke(d[O]);
      S(
        c[O],
        z,
        m,
        null,
        g,
        p,
        C,
        A,
        T
      );
    }
    v > N ? at(
      c,
      g,
      p,
      !0,
      !1,
      P
    ) : X(
      d,
      m,
      b,
      g,
      p,
      C,
      A,
      T,
      P
    );
  }, St = (c, d, m, b, g, p, C, A, T) => {
    let v = 0;
    const N = d.length;
    let P = c.length - 1, O = N - 1;
    for (; v <= P && v <= O; ) {
      const z = c[v], q = d[v] = T ? et(d[v]) : Ke(d[v]);
      if (yt(z, q))
        S(
          z,
          q,
          m,
          null,
          g,
          p,
          C,
          A,
          T
        );
      else
        break;
      v++;
    }
    for (; v <= P && v <= O; ) {
      const z = c[P], q = d[O] = T ? et(d[O]) : Ke(d[O]);
      if (yt(z, q))
        S(
          z,
          q,
          m,
          null,
          g,
          p,
          C,
          A,
          T
        );
      else
        break;
      P--, O--;
    }
    if (v > P) {
      if (v <= O) {
        const z = O + 1, q = z < N ? d[z].el : b;
        for (; v <= O; )
          S(
            null,
            d[v] = T ? et(d[v]) : Ke(d[v]),
            m,
            q,
            g,
            p,
            C,
            A,
            T
          ), v++;
      }
    } else if (v > O)
      for (; v <= P; )
        Te(c[v], g, p, !0), v++;
    else {
      const z = v, q = v, ee = /* @__PURE__ */ new Map();
      for (v = q; v <= O; v++) {
        const ke = d[v] = T ? et(d[v]) : Ke(d[v]);
        ke.key != null && ee.set(ke.key, v);
      }
      let se, fe = 0;
      const he = O - q + 1;
      let De = !1, Ve = 0;
      const Lt = new Array(he);
      for (v = 0; v < he; v++) Lt[v] = 0;
      for (v = z; v <= P; v++) {
        const ke = c[v];
        if (fe >= he) {
          Te(ke, g, p, !0);
          continue;
        }
        let ze;
        if (ke.key != null)
          ze = ee.get(ke.key);
        else
          for (se = q; se <= O; se++)
            if (Lt[se - q] === 0 && yt(ke, d[se])) {
              ze = se;
              break;
            }
        ze === void 0 ? Te(ke, g, p, !0) : (Lt[ze - q] = v + 1, ze >= Ve ? Ve = ze : De = !0, S(
          ke,
          d[ze],
          m,
          null,
          g,
          p,
          C,
          A,
          T
        ), fe++);
      }
      const Js = De ? Kl(Lt) : At;
      for (se = Js.length - 1, v = he - 1; v >= 0; v--) {
        const ke = q + v, ze = d[ke], Ys = d[ke + 1], $s = ke + 1 < N ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ys.el || qi(Ys)
        ) : b;
        Lt[v] === 0 ? S(
          null,
          ze,
          m,
          $s,
          g,
          p,
          C,
          A,
          T
        ) : De && (se < 0 || v !== Js[se] ? Se(ze, m, $s, 2) : se--);
      }
    }
  }, Se = (c, d, m, b, g = null) => {
    const { el: p, type: C, transition: A, children: T, shapeFlag: v } = c;
    if (v & 6) {
      Se(c.component.subTree, d, m, b);
      return;
    }
    if (v & 128) {
      c.suspense.move(d, m, b);
      return;
    }
    if (v & 64) {
      C.move(c, d, m, pt);
      return;
    }
    if (C === Ae) {
      s(p, d, m);
      for (let P = 0; P < T.length; P++)
        Se(T[P], d, m, b);
      s(c.anchor, d, m);
      return;
    }
    if (C === es) {
      k(c, d, m);
      return;
    }
    if (b !== 2 && v & 1 && A)
      if (b === 0)
        A.beforeEnter(p), s(p, d, m), me(() => A.enter(p), g);
      else {
        const { leave: P, delayLeave: O, afterLeave: z } = A, q = () => {
          c.ctx.isUnmounted ? o(p) : s(p, d, m);
        }, ee = () => {
          p._isLeaving && p[Ue](
            !0
            /* cancelled */
          ), P(p, () => {
            q(), z && z();
          });
        };
        O ? O(p, q, ee) : ee();
      }
    else
      s(p, d, m);
  }, Te = (c, d, m, b = !1, g = !1) => {
    const {
      type: p,
      props: C,
      ref: A,
      children: T,
      dynamicChildren: v,
      shapeFlag: N,
      patchFlag: P,
      dirs: O,
      cacheIndex: z,
      memo: q
    } = c;
    if (P === -2 && (g = !1), A != null && (ot(), Wt(A, null, m, c, !0), it()), z != null && (d.renderCache[z] = void 0), N & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const ee = N & 1 && O, se = !Kt(c);
    let fe;
    if (se && (fe = C && C.onVnodeBeforeUnmount) && je(fe, d, c), N & 6)
      Wn(c.component, m, b);
    else {
      if (N & 128) {
        c.suspense.unmount(m, b);
        return;
      }
      ee && gt(c, null, d, "beforeUnmount"), N & 64 ? c.type.remove(
        c,
        d,
        m,
        pt,
        b
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (p !== Ae || P > 0 && P & 64) ? at(
        v,
        d,
        m,
        !1,
        !0
      ) : (p === Ae && P & 384 || !g && N & 16) && at(T, d, m), b && ln(c);
    }
    const he = q != null && z == null;
    (se && (fe = C && C.onVnodeUnmounted) || ee || he) && me(() => {
      fe && je(fe, d, c), ee && gt(c, null, d, "unmounted"), he && (c.el = null);
    }, m);
  }, ln = (c) => {
    const { type: d, el: m, anchor: b, transition: g } = c;
    if (d === Ae) {
      Un(m, b);
      return;
    }
    if (d === es) {
      y(c);
      return;
    }
    const p = () => {
      o(m), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: C, delayLeave: A } = g, T = () => C(m, p);
      A ? A(c.el, p, T) : T();
    } else
      p();
  }, Un = (c, d) => {
    let m;
    for (; c !== d; )
      m = _(c), o(c), c = m;
    o(d);
  }, Wn = (c, d, m) => {
    const { bum: b, scope: g, job: p, subTree: C, um: A, m: T, a: v } = c;
    bo(T), bo(v), b && qn(b), g.stop(), p && (p.flags |= 8, Te(C, c, d, m)), A && me(A, d), me(() => {
      c.isUnmounted = !0;
    }, d);
  }, at = (c, d, m, b = !1, g = !1, p = 0) => {
    for (let C = p; C < c.length; C++)
      Te(c[C], d, m, b, g);
  }, ht = (c) => {
    if (c.shapeFlag & 6)
      return ht(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = _(c.anchor || c.el), m = d && d[wi];
    return m ? _(m) : d;
  };
  let Mt = !1;
  const an = (c, d, m) => {
    let b;
    c == null ? d._vnode && (Te(d._vnode, null, null, !0), b = d._vnode.component) : S(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      m
    ), d._vnode = c, Mt || (Mt = !0, so(b), mi(), Mt = !1);
  }, pt = {
    p: S,
    um: Te,
    m: Se,
    r: ln,
    mt: ie,
    mc: X,
    pc: G,
    pbc: W,
    n: ht,
    o: e
  };
  return {
    render: an,
    hydrate: void 0,
    createApp: kl(an)
  };
}
function Qn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function mt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Bs(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (V(s) && V(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = et(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && Bs(r, l)), l.type === zn && (l.patchFlag === -1 && (l = o[i] = et(l)), l.el = r.el), l.type === we && !l.el && (l.el = r.el);
    }
}
function Kl(e) {
  const t = e.slice(), n = [0];
  let s, o, i, r, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        l = i + r >> 1, e[n[l]] < u ? i = l + 1 : r = l;
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
function Ki(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ki(t);
}
function bo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function qi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? qi(t.subTree) : null;
}
const Gi = (e) => e.__isSuspense;
function ql(e, t) {
  t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : $r(e);
}
const Ae = /* @__PURE__ */ Symbol.for("v-fgt"), zn = /* @__PURE__ */ Symbol.for("v-txt"), we = /* @__PURE__ */ Symbol.for("v-cmt"), es = /* @__PURE__ */ Symbol.for("v-stc"), Gt = [];
let He = null;
function Y(e = !1) {
  Gt.push(He = e ? null : []);
}
function Gl() {
  Gt.pop(), He = Gt[Gt.length - 1] || null;
}
let en = 1;
function wn(e, t = !1) {
  en += e, e < 0 && He && t && (He.hasOnce = !0);
}
function Zi(e) {
  return e.dynamicChildren = en > 0 ? He || At : null, Gl(), en > 0 && He && He.push(e), e;
}
function pe(e, t, n, s, o, i) {
  return Zi(
    D(
      e,
      t,
      n,
      s,
      o,
      i,
      !0
    )
  );
}
function Fe(e, t, n, s, o) {
  return Zi(
    Q(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Sn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function yt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ji = ({ key: e }) => e ?? null, pn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || /* @__PURE__ */ ge(e) || U(e) ? { i: Pe, r: e, k: t, f: !!n } : e : null);
function D(e, t = null, n = null, s = 0, o = null, i = e === Ae ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ji(t),
    ref: t && pn(t),
    scopeId: bi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Pe
  };
  return l ? (Us(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ae(n) ? 8 : 16), en > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  He && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && He.push(a), a;
}
const Q = Zl;
function Zl(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === vl) && (e = we), Sn(e)) {
    const l = dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Us(l, n), en > 0 && !i && He && (l.shapeFlag & 6 ? He[He.indexOf(e)] = l : He.push(l)), l.patchFlag = -2, l;
  }
  if (ia(e) && (e = e.__vccOpts), t) {
    t = Jl(t);
    let { class: l, style: a } = t;
    l && !ae(l) && (t.class = st(l)), $(a) && (/* @__PURE__ */ Ms(a) && !V(a) && (a = re({}, a)), t.style = Ts(a));
  }
  const r = ae(e) ? 1 : Gi(e) ? 128 : Si(e) ? 64 : $(e) ? 4 : U(e) ? 2 : 0;
  return D(
    e,
    t,
    n,
    s,
    o,
    r,
    i,
    !0
  );
}
function Jl(e) {
  return e ? /* @__PURE__ */ Ms(e) || Vi(e) ? re({}, e) : e : null;
}
function dt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: a } = e, u = t ? Yl(o || {}, t) : o, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Ji(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? V(i) ? i.concat(pn(t)) : [i, pn(t)] : pn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ae ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && dt(e.ssContent),
    ssFallback: e.ssFallback && dt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Qt(
    f,
    a.clone(f)
  ), f;
}
function Zt(e = " ", t = 0) {
  return Q(zn, null, e, t);
}
function Le(e = "", t = !1) {
  return t ? (Y(), Fe(we, null, e)) : Q(we, null, e);
}
function Ke(e) {
  return e == null || typeof e == "boolean" ? Q(we) : V(e) ? Q(
    Ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Sn(e) ? et(e) : Q(zn, null, String(e));
}
function et(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : dt(e);
}
function Us(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (V(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Us(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Vi(t) ? t._ctx = Pe : o === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else U(t) ? (t = { default: t, _ctx: Pe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Zt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Yl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = st([t.class, s.class]));
      else if (o === "style")
        t.style = Ts([t.style, s.style]);
      else if (kn(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(V(i) && i.includes(r)) ? t[o] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Pn(o) && (t[o] = r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function je(e, t, n, s = null) {
  Ne(e, t, 7, [
    n,
    s
  ]);
}
const $l = Li();
let Xl = 0;
function Ql(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || $l, i = {
    uid: Xl++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new yr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ji(s, o),
    emitsOptions: Oi(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: te,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: te,
    data: te,
    props: te,
    attrs: te,
    slots: te,
    refs: te,
    setupState: te,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Hl.bind(null, i), e.ce && e.ce(i), i;
}
let be = null;
const Ws = () => be || Pe;
let Tn, vs;
{
  const e = Mn(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  Tn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => be = n
  ), vs = t(
    "__VUE_SSR_SETTERS__",
    (n) => tn = n
  );
}
const rn = (e) => {
  const t = be;
  return Tn(e), e.scope.on(), () => {
    e.scope.off(), Tn(t);
  };
}, vo = () => {
  be && be.scope.off(), Tn(null);
};
function Yi(e) {
  return e.vnode.shapeFlag & 4;
}
let tn = !1;
function ea(e, t = !1, n = !1) {
  t && vs(t);
  const { props: s, children: o } = e.vnode, i = Yi(e);
  Il(e, s, i, t), zl(e, o, n || t);
  const r = i ? ta(e, t) : void 0;
  return t && vs(!1), r;
}
function ta(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xl);
  const { setup: s } = n;
  if (s) {
    ot();
    const o = e.setupContext = s.length > 1 ? sa(e) : null, i = rn(e), r = on(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = Go(r);
    if (it(), i(), (l || e.sp) && !Kt(e) && Hi(e), l) {
      if (r.then(vo, vo), t)
        return r.then((a) => {
          yo(e, a);
        }).catch((a) => {
          On(a, e, 0);
        });
      e.asyncDep = r;
    } else
      yo(e, r);
  } else
    $i(e);
}
function yo(e, t, n) {
  U(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $(t) && (e.setupState = hi(t)), $i(e);
}
function $i(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ze);
  {
    const o = rn(e);
    ot();
    try {
      wl(e);
    } finally {
      it(), o();
    }
  }
}
const na = {
  get(e, t) {
    return _e(e, "get", ""), e[t];
  }
};
function sa(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, na),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function jn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hi(jr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in qt)
        return qt[n](e);
    },
    has(t, n) {
      return n in t || n in qt;
    }
  })) : e.proxy;
}
function oa(e, t = !0) {
  return U(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ia(e) {
  return U(e) && "__vccOpts" in e;
}
const ue = (e, t) => /* @__PURE__ */ qr(e, t, tn);
function ra(e, t, n) {
  try {
    wn(-1);
    const s = arguments.length;
    return s === 2 ? $(t) && !V(t) ? Sn(t) ? Q(e, null, [t]) : Q(e, t) : Q(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Sn(n) && (n = [n]), Q(e, t, n));
  } finally {
    wn(1);
  }
}
const la = "3.5.31";
let ys;
const xo = typeof window < "u" && window.trustedTypes;
if (xo)
  try {
    ys = /* @__PURE__ */ xo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Xi = ys ? (e) => ys.createHTML(e) : (e) => e, aa = "http://www.w3.org/2000/svg", ca = "http://www.w3.org/1998/Math/MathML", Qe = typeof document < "u" ? document : null, wo = Qe && /* @__PURE__ */ Qe.createElement("template"), fa = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Qe.createElementNS(aa, e) : t === "mathml" ? Qe.createElementNS(ca, e) : n ? Qe.createElement(e, { is: n }) : Qe.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Qe.createTextNode(e),
  createComment: (e) => Qe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Qe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      wo.innerHTML = Xi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = wo.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ct = "transition", Nt = "animation", nn = /* @__PURE__ */ Symbol("_vtc"), Qi = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, ua = /* @__PURE__ */ re(
  {},
  Ci,
  Qi
), da = (e) => (e.displayName = "Transition", e.props = ua, e), ha = /* @__PURE__ */ da(
  (e, { slots: t }) => ra(rl, pa(e), t)
), _t = (e, t = []) => {
  V(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, So = (e) => e ? V(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function pa(e) {
  const t = {};
  for (const E in e)
    E in Qi || (t[E] = e[E]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: r = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = i,
    appearActiveClass: u = r,
    appearToClass: f = l,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: _ = `${n}-leave-active`,
    leaveToClass: x = `${n}-leave-to`
  } = e, w = ga(o), S = w && w[0], F = w && w[1], {
    onBeforeEnter: M,
    onEnter: R,
    onEnterCancelled: k,
    onLeave: y,
    onLeaveCancelled: H,
    onBeforeAppear: j = M,
    onAppear: B = R,
    onAppearCancelled: X = k
  } = t, L = (E, K, ie, Ee) => {
    E._enterCancelled = Ee, bt(E, K ? f : l), bt(E, K ? u : r), ie && ie();
  }, W = (E, K) => {
    E._isLeaving = !1, bt(E, h), bt(E, x), bt(E, _), K && K();
  }, I = (E) => (K, ie) => {
    const Ee = E ? B : R, ce = () => L(K, E, ie);
    _t(Ee, [K, ce]), To(() => {
      bt(K, E ? a : i), Xe(K, E ? f : l), So(Ee) || Co(K, s, S, ce);
    });
  };
  return re(t, {
    onBeforeEnter(E) {
      _t(M, [E]), Xe(E, i), Xe(E, r);
    },
    onBeforeAppear(E) {
      _t(j, [E]), Xe(E, a), Xe(E, u);
    },
    onEnter: I(!1),
    onAppear: I(!0),
    onLeave(E, K) {
      E._isLeaving = !0;
      const ie = () => W(E, K);
      Xe(E, h), E._enterCancelled ? (Xe(E, _), ko(E)) : (ko(E), Xe(E, _)), To(() => {
        E._isLeaving && (bt(E, h), Xe(E, x), So(y) || Co(E, s, F, ie));
      }), _t(y, [E, ie]);
    },
    onEnterCancelled(E) {
      L(E, !1, void 0, !0), _t(k, [E]);
    },
    onAppearCancelled(E) {
      L(E, !0, void 0, !0), _t(X, [E]);
    },
    onLeaveCancelled(E) {
      W(E), _t(H, [E]);
    }
  });
}
function ga(e) {
  if (e == null)
    return null;
  if ($(e))
    return [ts(e.enter), ts(e.leave)];
  {
    const t = ts(e);
    return [t, t];
  }
}
function ts(e) {
  return rs(e);
}
function Xe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[nn] || (e[nn] = /* @__PURE__ */ new Set())).add(t);
}
function bt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[nn];
  n && (n.delete(t), n.size || (e[nn] = void 0));
}
function To(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ma = 0;
function Co(e, t, n, s) {
  const o = e._endId = ++ma, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: r, timeout: l, propCount: a } = _a(e, t);
  if (!r)
    return s();
  const u = r + "end";
  let f = 0;
  const h = () => {
    e.removeEventListener(u, _), i();
  }, _ = (x) => {
    x.target === e && ++f >= a && h();
  };
  setTimeout(() => {
    f < a && h();
  }, l + 1), e.addEventListener(u, _);
}
function _a(e, t) {
  const n = window.getComputedStyle(e), s = (w) => (n[w] || "").split(", "), o = s(`${ct}Delay`), i = s(`${ct}Duration`), r = Ao(o, i), l = s(`${Nt}Delay`), a = s(`${Nt}Duration`), u = Ao(l, a);
  let f = null, h = 0, _ = 0;
  t === ct ? r > 0 && (f = ct, h = r, _ = i.length) : t === Nt ? u > 0 && (f = Nt, h = u, _ = a.length) : (h = Math.max(r, u), f = h > 0 ? r > u ? ct : Nt : null, _ = f ? f === ct ? i.length : a.length : 0);
  const x = f === ct && /\b(?:transform|all)(?:,|$)/.test(
    s(`${ct}Property`).toString()
  );
  return {
    type: f,
    timeout: h,
    propCount: _,
    hasTransform: x
  };
}
function Ao(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Eo(n) + Eo(e[s])));
}
function Eo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ko(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function ba(e, t, n) {
  const s = e[nn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Cn = /* @__PURE__ */ Symbol("_vod"), er = /* @__PURE__ */ Symbol("_vsh"), An = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Cn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Dt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Dt(e, !0), s.enter(e)) : s.leave(e, () => {
      Dt(e, !1);
    }) : Dt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Dt(e, t);
  }
};
function Dt(e, t) {
  e.style.display = t ? e[Cn] : "none", e[er] = !t;
}
const va = /* @__PURE__ */ Symbol(""), ya = /(?:^|;)\s*display\s*:/;
function xa(e, t, n) {
  const s = e.style, o = ae(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (ae(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && gn(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && gn(s, r, "");
    for (const r in n)
      r === "display" && (i = !0), gn(s, r, n[r]);
  } else if (o) {
    if (t !== n) {
      const r = s[va];
      r && (n += ";" + r), s.cssText = n, i = ya.test(n);
    }
  } else t && e.removeAttribute("style");
  Cn in e && (e[Cn] = i ? s.display : "", e[er] && (s.display = "none"));
}
const Po = /\s*!important$/;
function gn(e, t, n) {
  if (V(n))
    n.forEach((s) => gn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = wa(e, t);
    Po.test(n) ? e.setProperty(
      Me(s),
      n.replace(Po, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ho = ["Webkit", "Moz", "ms"], ns = {};
function wa(e, t) {
  const n = ns[t];
  if (n)
    return n;
  let s = de(t);
  if (s !== "filter" && s in e)
    return ns[t] = s;
  s = Fn(s);
  for (let o = 0; o < Ho.length; o++) {
    const i = Ho[o] + s;
    if (i in e)
      return ns[t] = i;
  }
  return t;
}
const Ro = "http://www.w3.org/1999/xlink";
function Fo(e, t, n, s, o, i = br(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ro, t.slice(6, t.length)) : e.setAttributeNS(Ro, t, n) : n == null || i && !Yo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Je(n) ? String(n) : n
  );
}
function Mo(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Xi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Yo(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(o || t);
}
function Sa(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ta(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Lo = /* @__PURE__ */ Symbol("_vei");
function Ca(e, t, n, s, o = null) {
  const i = e[Lo] || (e[Lo] = {}), r = i[t];
  if (s && r)
    r.value = s;
  else {
    const [l, a] = Aa(t);
    if (s) {
      const u = i[t] = Pa(
        s,
        o
      );
      Sa(e, l, u, a);
    } else r && (Ta(e, l, r, a), i[t] = void 0);
  }
}
const Oo = /(?:Once|Passive|Capture)$/;
function Aa(e) {
  let t;
  if (Oo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Oo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Me(e.slice(2)), t];
}
let ss = 0;
const Ea = /* @__PURE__ */ Promise.resolve(), ka = () => ss || (Ea.then(() => ss = 0), ss = Date.now());
function Pa(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ne(
      Ha(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = ka(), n;
}
function Ha(e, t) {
  if (V(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const Io = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ra = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? ba(e, s, r) : t === "style" ? xa(e, n, s) : kn(t) ? Pn(t) || Ca(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Fa(e, t, s, r)) ? (Mo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Fo(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ma(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ae(s))) ? Mo(e, de(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Fo(e, t, s, r));
};
function Fa(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Io(t) && U(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Io(t) && ae(n) ? !1 : t in e;
}
function Ma(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = de(t);
  return Array.isArray(n) ? n.some((o) => de(o) === s) : Object.keys(n).some((o) => de(o) === s);
}
const No = {};
// @__NO_SIDE_EFFECTS__
function La(e, t, n) {
  let s = /* @__PURE__ */ ll(e, t);
  Hn(s) && (s = re({}, s, t));
  class o extends Ks {
    constructor(r) {
      super(s, r, n);
    }
  }
  return o.def = s, o;
}
const Oa = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ks extends Oa {
  constructor(t, n = {}, s = Vo) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && s !== Vo ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      re({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && // #12479 should check assignedSlot first to get correct parent
    (t.assignedSlot || t.parentNode || t.host); )
      if (t instanceof Ks) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, Os(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const n of t)
      this._setAttr(n.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (s, o = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: r } = s;
      let l;
      if (i && !V(i))
        for (const a in i) {
          const u = i[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = rs(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[de(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot && this._applyStyles(r), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((s) => {
      s.configureApp = this._def.configureApp, t(this._def = s, !0);
    }) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        J(this, s) || Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Ls(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = V(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o]);
    for (const o of s.map(de))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(i) {
          this._setProp(o, i, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : No;
    const o = de(t);
    n && this._numberProps && this._numberProps[o] && (s = rs(s)), this._setProp(o, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, o = !1) {
    if (n !== this._props[t] && (this._dirty = !0, n === No ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const i = this._ob;
      i && (this._processMutations(i.takeRecords()), i.disconnect()), n === !0 ? this.setAttribute(Me(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Me(t), n + "") : n || this.removeAttribute(Me(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Na(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Q(this._def, re(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const o = (i, r) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            Hn(r[0]) ? re({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      s.emit = (i, ...r) => {
        o(i, r), Me(i) !== i && o(Me(i), r);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n, s) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const o = this._nonce, i = this.shadowRoot, r = s ? this._getStyleAnchor(s) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i);
    let l = null;
    for (let a = t.length - 1; a >= 0; a--) {
      const u = document.createElement("style");
      o && u.setAttribute("nonce", o), u.textContent = t[a], i.insertBefore(u, l || r), l = u, a === 0 && (s || this._styleAnchors.set(this._def, u), n && this._styleAnchors.set(n, u));
    }
  }
  _getStyleAnchor(t) {
    if (!t)
      return null;
    const n = this._styleAnchors.get(t);
    return n && n.parentNode === this.shadowRoot ? n : (n && this._styleAnchors.delete(t), null);
  }
  _getRootStyleInsertionAnchor(t) {
    for (let n = 0; n < t.childNodes.length; n++) {
      const s = t.childNodes[n];
      if (!(s instanceof HTMLStyleElement))
        return s;
    }
    return null;
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const o = t[s], i = o.getAttribute("name") || "default", r = this._slots[i], l = o.parentNode;
      if (r)
        for (const a of r) {
          if (n && a.nodeType === 1) {
            const u = n + "-s", f = document.createTreeWalker(a, 1);
            a.setAttribute(u, "");
            let h;
            for (; h = f.nextNode(); )
              h.setAttribute(u, "");
          }
          l.insertBefore(a, o);
        }
      else
        for (; o.firstChild; ) l.insertBefore(o.firstChild, o);
      l.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const n = /* @__PURE__ */ new Set();
    for (const s of t) {
      const o = s.querySelectorAll("slot");
      for (let i = 0; i < o.length; i++)
        n.add(o[i]);
    }
    return Array.from(n);
  }
  /**
   * @internal
   */
  _injectChildStyle(t, n) {
    this._applyStyles(t.styles, t, n);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _hasShadowRoot() {
    return this._def.shadowRoot !== !1;
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const Ia = /* @__PURE__ */ re({ patchProp: Ra }, fa);
let Do;
function tr() {
  return Do || (Do = Bl(Ia));
}
const Na = ((...e) => {
  tr().render(...e);
}), Vo = ((...e) => {
  const t = tr().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Va(s);
    if (!o) return;
    const i = t._component;
    !U(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, Da(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
});
function Da(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Va(e) {
  return ae(e) ? document.querySelector(e) : e;
}
const nr = /* @__PURE__ */ Symbol("voiceState");
function za() {
  const e = /* @__PURE__ */ Ln({
    stage: null,
    subState: null,
    isListening: !1,
    isPopupOpened: !0
  });
  return {
    state: e,
    setStage: (o, i = null) => {
      e.stage = o, e.subState = i;
    },
    toggleListening: (o) => {
      e.isListening = o;
    },
    togglePopupState: (o) => {
      e.isPopupOpened = o;
    }
  };
}
function ja(e) {
  Ns(nr, e);
}
function qs() {
  const e = Ht(nr);
  if (!e)
    throw new Error("[HandsfreeCooking] useVoiceState() called without a provider. Ensure provideVoiceState() is called in a parent component.");
  return e;
}
function sr(e, t) {
  let n = null;
  return (...s) => {
    clearTimeout(n), n = setTimeout(() => e(...s), t);
  };
}
const zo = 300;
function Ba(e, t, n, s) {
  let o = null, i = null, r = [], l = -1;
  const a = () => window.innerWidth < 768 ? 75 : 60, { setStage: u, toggleListening: f, togglePopupState: h } = n, _ = () => no(t), x = () => {
    const k = _();
    k.instructions && (o = document.querySelector(k.instructions)), k.ingredients && (i = document.querySelector(k.ingredients)), k.steps && (r = Array.from(document.querySelectorAll(k.steps)));
  }, w = sr(x, 300), S = new MutationObserver(w);
  S.observe(document.body, { childList: !0, subtree: !0 }), /* @__PURE__ */ ge(t) && wt(t, () => {
    o = null, i = null, r = [], x();
  });
  const F = (k) => {
    const y = a(), H = k.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: H - y,
      behavior: "smooth"
    });
  }, M = () => {
    r.length > 0 && r[l] && F(r[l]), r.length === l + 1 ? (u("listening", "almost-done"), h(!0)) : (u("listening"), h(!1));
  };
  return { commands: ue(() => {
    const k = no(e);
    if (!k) return {};
    const y = {}, H = (j, B) => {
      j && j.forEach((X) => {
        y[X] = B;
      });
    };
    return H(k.help, () => {
      u("listening", "help"), h(!0), s("handsfree-command", { command: "help" });
    }), H(k.scrollUp, () => {
      window.scrollBy({ top: -zo, behavior: "smooth" }), s("handsfree-command", { command: "scroll up" });
    }), H(k.scrollDown, () => {
      window.scrollBy({ top: zo, behavior: "smooth" }), s("handsfree-command", { command: "scroll down" });
    }), H(k.exit, () => {
      u("listening"), s("handsfree-command", { command: "exit" });
    }), H(k.goToInstructions, () => {
      o || x(), o && (F(o), s("handsfree-command", { command: "go to instructions" })), u("listening"), h(!1);
    }), H(k.goToIngredients, () => {
      i || x(), i && (F(i), s("handsfree-command", { command: "go to ingredients" })), u("listening"), h(!1);
    }), H(k.nextStep, () => {
      r.length === 0 && x(), l < r.length - 1 && (l += 1, M(), s("handsfree-command", { command: "next step" }));
    }), H(k.previousStep, () => {
      r.length === 0 && x(), l > 0 && (l -= 1, M(), s("handsfree-command", { command: "previous step" }));
    }), H(k.letsCook, () => {
      f(!0), u("listening"), h(!1), s("handsfree-command", { command: "let's cook" });
    }), H(k.imDone, () => {
      s("handsfree-command", { command: "i'm done" });
    }), y;
  }), destroy: () => S.disconnect() };
}
function Ua(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var os, jo;
function Wa() {
  if (jo) return os;
  jo = 1, os = e;
  function e() {
  }
  return e.mixin = function(t) {
    var n = t.prototype || t;
    n.isWildEmitter = !0, n.on = function(s, o, i) {
      this.callbacks = this.callbacks || {};
      var r = arguments.length === 3, l = r ? arguments[1] : void 0, a = r ? arguments[2] : arguments[1];
      return a._groupName = l, (this.callbacks[s] = this.callbacks[s] || []).push(a), this;
    }, n.once = function(s, o, i) {
      var r = this, l = arguments.length === 3, a = l ? arguments[1] : void 0, u = l ? arguments[2] : arguments[1];
      function f() {
        r.off(s, f), u.apply(this, arguments);
      }
      return this.on(s, a, f), this;
    }, n.releaseGroup = function(s) {
      this.callbacks = this.callbacks || {};
      var o, i, r, l;
      for (o in this.callbacks)
        for (l = this.callbacks[o], i = 0, r = l.length; i < r; i++)
          l[i]._groupName === s && (l.splice(i, 1), i--, r--);
      return this;
    }, n.off = function(s, o) {
      this.callbacks = this.callbacks || {};
      var i = this.callbacks[s], r;
      return i ? arguments.length === 1 ? (delete this.callbacks[s], this) : (r = i.indexOf(o), r !== -1 && (i.splice(r, 1), i.length === 0 && delete this.callbacks[s]), this) : this;
    }, n.emit = function(s) {
      this.callbacks = this.callbacks || {};
      var o = [].slice.call(arguments, 1), i = this.callbacks[s], r = this.getWildcardCallbacks(s), l, a, u;
      if (i)
        for (u = i.slice(), l = 0, a = u.length; l < a && u[l]; ++l)
          u[l].apply(this, o);
      if (r)
        for (a = r.length, u = r.slice(), l = 0, a = u.length; l < a && u[l]; ++l)
          u[l].apply(this, [s].concat(o));
      return this;
    }, n.getWildcardCallbacks = function(s) {
      this.callbacks = this.callbacks || {};
      var o, i, r = [];
      for (o in this.callbacks)
        i = o.split("*"), (o === "*" || i.length === 2 && s.slice(0, i[0].length) === i[0]) && (r = r.concat(this.callbacks[o]));
      return r;
    };
  }, e.mixin(e), os;
}
var is, Bo;
function Ka() {
  if (Bo) return is;
  Bo = 1;
  var e = Wa();
  function t(o, i) {
    var r = -1 / 0;
    o.getFloatFrequencyData(i);
    for (var l = 4, a = i.length; l < a; l++)
      i[l] > r && i[l] < 0 && (r = i[l]);
    return r;
  }
  var n;
  typeof window < "u" && (n = window.AudioContext || window.webkitAudioContext);
  var s = null;
  return is = function(o, l) {
    var r = new e();
    if (!n) return r;
    var l = l || {}, a = l.smoothing || 0.1, u = l.interval || 50, f = l.threshold, h = l.play, _ = l.history || 10, x = !0;
    s = l.audioContext || s || new n();
    var w, S, F;
    F = s.createAnalyser(), F.fftSize = 512, F.smoothingTimeConstant = a, S = new Float32Array(F.frequencyBinCount), o.jquery && (o = o[0]), o instanceof HTMLAudioElement || o instanceof HTMLVideoElement ? (w = s.createMediaElementSource(o), typeof h > "u" && (h = !0), f = f || -50) : (w = s.createMediaStreamSource(o), f = f || -50), w.connect(F), h && F.connect(s.destination), r.speaking = !1, r.suspend = function() {
      return s.suspend();
    }, r.resume = function() {
      return s.resume();
    }, Object.defineProperty(r, "state", { get: function() {
      return s.state;
    } }), s.onstatechange = function() {
      r.emit("state_change", s.state);
    }, r.setThreshold = function(k) {
      f = k;
    }, r.setInterval = function(k) {
      u = k;
    }, r.stop = function() {
      x = !1, r.emit("volume_change", -100, f), r.speaking && (r.speaking = !1, r.emit("stopped_speaking")), F.disconnect(), w.disconnect();
    }, r.speakingHistory = [];
    for (var M = 0; M < _; M++)
      r.speakingHistory.push(0);
    var R = function() {
      setTimeout(function() {
        if (x) {
          var k = t(F, S);
          r.emit("volume_change", k, f);
          var y = 0;
          if (k > f && !r.speaking) {
            for (var H = r.speakingHistory.length - 3; H < r.speakingHistory.length; H++)
              y += r.speakingHistory[H];
            y >= 2 && (r.speaking = !0, r.emit("speaking"));
          } else if (k < f && r.speaking) {
            for (var H = 0; H < r.speakingHistory.length; H++)
              y += r.speakingHistory[H];
            y == 0 && (r.speaking = !1, r.emit("stopped_speaking"));
          }
          r.speakingHistory.shift(), r.speakingHistory.push(0 + (k > f)), R();
        }
      }, u);
    };
    return R(), r;
  }, is;
}
var qa = Ka();
const Ga = /* @__PURE__ */ Ua(qa);
class or {
  constructor(t) {
    this.settings = {
      onSpeaking: () => {
      },
      onStopSpeaking: () => {
      },
      onVolumeChange: () => {
      },
      ...t
    }, this.healthCheckInterval = null;
  }
  async start() {
    try {
      const t = await navigator.mediaDevices.getUserMedia({
        audio: !0,
        video: !1
      });
      this.audioStream = t, this.trackSpeaking(t), this.startHealthCheck();
    } catch (t) {
      console.error(t);
    }
  }
  trackSpeaking(t) {
    const { settings: n } = this;
    this.audioStreamSpeechEvents = Ga(t, {
      interval: 1e3 / 8
    }), this.audioStreamSpeechEvents.on("speaking", n.onSpeaking), this.audioStreamSpeechEvents.on("stopped_speaking", n.onStopSpeaking);
  }
  startHealthCheck() {
    this.healthCheckInterval || (this.healthCheckInterval = setInterval(async () => {
      this.audioStream && !this.audioStream.active && (console.warn("[HandsfreeCooking] Audio stream inactive — attempting to recover..."), this.stop(), await this.start());
    }, 5e3));
  }
  stop() {
    this.healthCheckInterval && (clearInterval(this.healthCheckInterval), this.healthCheckInterval = null), this.audioStream && this.audioStream.getTracks().forEach((t) => t.stop()), this.audioStreamSpeechEvents && this.audioStreamSpeechEvents.stop();
  }
}
function En() {
  return /Android/i.test(navigator.userAgent);
}
const ir = {
  lang: "en-US",
  interimResults: !0,
  maxAlternatives: 10
}, rr = {
  error: null,
  status: "stopped",
  transcriptions: [],
  finalTranscriptions: !1
}, Za = 120 * 1e3, Ja = 3 * 1e3, Ya = 5;
function $a() {
  let e, t, n, s, o = !1, i = !1, r, l, a = 0;
  function u(I = {}) {
    r({ ...rr, ...I });
  }
  function f() {
    clearTimeout(n), clearTimeout(s);
  }
  function h() {
    f(), t.abort(), u(), l(0);
  }
  function _() {
    f(), t && t.stop(), u(), l(0);
  }
  function x() {
    u({ status: "starting" }), l(0);
    try {
      t.start(), a = 0;
    } catch (I) {
      console.error(I);
    }
  }
  function w() {
    if (a >= Ya) {
      console.warn("[HandsfreeCooking] Max restart retries reached");
      return;
    }
    a += 1, setTimeout(x, 100);
  }
  function S() {
    e && e.stop(), l(0);
  }
  function F() {
    f(), u(), l(0), i || w();
  }
  function M() {
    u({ status: "recording" }), l(0);
  }
  function R(I, E) {
    clearTimeout(n), E || (n = setTimeout(() => {
      u({
        finalTranscriptions: !0,
        status: "recording",
        transcriptions: I
      }), h();
    }, Ja));
  }
  function k(I) {
    if (!I || !I.results) return;
    const E = I.results[I.resultIndex], K = Object.values(E).map((ie) => ({
      confidence: ie.confidence,
      text: ie.transcript
    }));
    u({
      finalTranscriptions: E.isFinal,
      status: "recording",
      transcriptions: K
    }), R(K, E.isFinal);
  }
  function y(I) {
    u({ error: I.error, status: "error" }), l(0);
  }
  function H() {
    o || h();
  }
  function j() {
    e = new or({
      onSpeaking: () => {
        o = !0;
      },
      onStopSpeaking: () => {
        o = !1, clearTimeout(s), s = setTimeout(H, Za);
      },
      onVolumeChange: (I) => {
        l(I);
      }
    }), l(0), e.start();
  }
  function B({ lang: I, interimResults: E, maxAlternatives: K }) {
    const ie = window.SpeechRecognition || window.webkitSpeechRecognition;
    t = new ie(), t.continuous = !0, t.lang = I, t.interimResults = E, t.maxAlternatives = K, t.onstart = M, t.onresult = k, t.onerror = y, t.onend = F;
  }
  function X(I) {
    const E = { ...ir, ...I };
    r = I.onUserSpeech, l = I.onUserSpeak || (() => {
    }), B(E);
  }
  function L() {
    i = !1, a = 0, !En() && l && j(), r && x();
  }
  function W() {
    i = !0, f(), !En() && l && S(), r && _();
  }
  return { init: X, start: L, stop: W };
}
function Xa() {
  let e, t, n = !1, s, o, i;
  function r(y = {}) {
    s({ ...rr, ...y });
  }
  function l() {
    r({ status: "recording" });
  }
  function a() {
    o(0), e && e.stop();
  }
  function u() {
    e = new or({
      onVolumeChange: (y) => {
        o(y);
      }
    }), e.start(), o(0);
  }
  function f(y, H) {
    clearTimeout(i), H || (i = setTimeout(() => {
      r({
        finalTranscriptions: !0,
        transcriptions: y
      });
    }, 2e3));
  }
  function h() {
    n = !1, clearTimeout(i), r();
  }
  function _(y) {
    if (!y || !y.results) return;
    const H = y.results[y.resultIndex], j = Object.values(H).map((B) => ({
      confidence: B.confidence,
      text: B.transcript
    }));
    r({
      finalTranscriptions: H.isFinal,
      status: "recording",
      transcriptions: j
    }), f(j, H.isFinal);
  }
  function x() {
    n = !1, clearTimeout(i), r();
  }
  function w(y) {
    r({ error: y.error, status: "error" });
  }
  function S() {
    if (!n) {
      r({ status: "starting" });
      try {
        t.start(), n = !0;
      } catch (y) {
        console.error(y);
      }
    }
  }
  function F({ lang: y, interimResults: H, maxAlternatives: j }) {
    const B = window.SpeechRecognition || window.webkitSpeechRecognition;
    t = new B(), t.continuous = !1, t.lang = y, t.interimResults = H, t.maxAlternatives = j, t.onstart = l, t.onresult = _, t.onerror = w, t.onend = x;
  }
  function M(y) {
    const H = { ...ir, ...y };
    F(H), s = y.onUserSpeech, o = y.onUserSpeak || (() => {
    });
  }
  function R() {
    !En() && o && u(), s && S();
  }
  function k() {
    !En() && o && a(), s && h();
  }
  return { init: M, start: R, stop: k };
}
const Qa = navigator.language || "en-US";
function ec({
  continuesRecognition: e = !0,
  lang: t = Qa,
  onUserSpeech: n,
  onUserSpeak: s
}) {
  const o = e ? $a() : Xa();
  return o.init({ lang: t, onUserSpeech: n, onUserSpeak: s }), {
    start: o.start,
    stop: o.stop
  };
}
const tc = {
  init: ec
};
function lr(e, t) {
  const n = { ...e };
  for (const s of Object.keys(t))
    t[s] && typeof t[s] == "object" && !Array.isArray(t[s]) && e[s] && typeof e[s] == "object" && !Array.isArray(e[s]) ? n[s] = lr(e[s], t[s]) : n[s] = t[s];
  return n;
}
function Uo(e) {
  return e.toLowerCase().replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, "").replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, "").replace(/\s+/g, " ").replace(/[.,!?;:。，！？；：．]+$/g, "").trim().normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "").normalize("NFC").trim();
}
function Wo(e, t) {
  const n = Uo(e), s = [];
  for (const o of t) {
    const i = Uo(o);
    if (n === i)
      s.push({ alias: o, normalizedAlias: i, score: 3 });
    else if (n.startsWith(i))
      s.push({ alias: o, normalizedAlias: i, score: 2 });
    else if (n.endsWith(i))
      s.push({ alias: o, normalizedAlias: i, score: 2 });
    else {
      const r = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      new RegExp(`(^|\\s)${r}(\\s|$)`, "i").test(n) && s.push({ alias: o, normalizedAlias: i, score: 1 });
    }
  }
  return s.sort((o, i) => o.score !== i.score ? i.score - o.score : i.normalizedAlias.length - o.normalizedAlias.length), s.length > 0 ? s[0].alias : null;
}
const nc = {
  mic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><path d="M14.9815 9.25V11.125C14.9815 13.5437 13.0252 15.5 10.6065 15.5C8.18771 15.5 6.23146 13.5437 6.23146 11.125V9.25H4.98146V11.125C4.97521 13.9938 7.13146 16.4 9.98146 16.7125V18H7.48146V19.25H13.7315V18H11.2315V16.7125C14.0752 16.3938 16.2252 13.9875 16.2315 11.125V9.25H14.9815Z"/><path d="M10.6064 14.25C12.3314 14.25 13.7314 12.85 13.7314 11.125V4.875C13.7314 3.15 12.3314 1.75 10.6064 1.75C8.88145 1.75 7.48145 3.15 7.48145 4.875V11.125C7.48145 12.85 8.88145 14.25 10.6064 14.25ZM8.73145 4.875C8.73145 3.8375 9.56895 3 10.6064 3C11.6439 3 12.4814 3.8375 12.4814 4.875V11.125C12.4814 12.1625 11.6439 13 10.6064 13C9.56895 13 8.73145 12.1625 8.73145 11.125V4.875Z"/></svg>',
  help: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/><circle cx="16" cy="23.5" r="1.5"/><path d="M17,8H15.5A4.49,4.49,0,0,0,11,12.5V13h2v-.5A2.5,2.5,0,0,1,15.5,10H17a2.5,2.5,0,0,1,0,5H15v4.5h2V17a4.5,4.5,0,0,0,0-9Z"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"/></svg>',
  "chevron--left": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10 16L20 6 21.4 7.4 12.8 16 21.4 24.6 20 26z"/></svg>',
  "chevron--right": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"/></svg>',
  "chevron--down": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"/></svg>',
  "thumbs-up": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z"/></svg>',
  "thumbs-down": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30,16V9a7.0078,7.0078,0,0,0-7-7H2V16H8.4648l3.5774,5.3662.8453,5.9165A2.0094,2.0094,0,0,0,14.8672,29H17a3.0033,3.0033,0,0,0,3-3V20h6A4.0045,4.0045,0,0,0,30,16ZM8,14H4V4H8Zm20,2a2.0025,2.0025,0,0,1-2,2H18v8a1.0008,1.0008,0,0,1-1,1H14.8672l-.9094-6.3662L10,14.6973V4H23a5.0057,5.0057,0,0,1,5,5Z"/></svg>',
  "checkmark--outline": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><polygon points="14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414"/><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/></svg>'
}, Ft = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, sc = {
  props: {
    icon: {
      type: String,
      required: !0
    },
    size: {
      type: Number,
      default: null
    }
  },
  setup(e) {
    const t = ue(() => nc[e.icon] || ""), n = ue(() => e.size ? `hf-icon-${e.size}` : "");
    return {
      svgContent: t,
      cssClass: n
    };
  }
}, oc = ["innerHTML"];
function ic(e, t, n, s, o, i) {
  return Y(), pe("span", {
    class: st(["hf-icon", s.cssClass]),
    innerHTML: s.svgContent
  }, null, 10, oc);
}
const Bn = /* @__PURE__ */ Ft(sc, [["render", ic]]), rc = {
  components: {
    HfIcon: Bn
  },
  props: {
    title: {
      type: String,
      required: !0
    },
    isLoading: {
      type: Boolean,
      default: !1
    },
    isCloseState: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["togglePopup"],
  setup(e, { emit: t }) {
    const n = () => {
      t("togglePopup");
    }, s = ue(() => e.isCloseState ? "close" : "chevron--down");
    return {
      togglePopup: n,
      icon: s
    };
  }
}, lc = ["aria-label"], ac = { class: "hf-headline__title" }, cc = { class: "hf-headline__opener" }, fc = {
  key: 0,
  class: "hf-spinner"
};
function uc(e, t, n, s, o, i) {
  const r = Ge("HfIcon");
  return Y(), pe("button", {
    class: "hf-headline",
    "aria-label": n.title + " - " + (n.isCloseState ? "Close" : "Toggle"),
    onClick: t[0] || (t[0] = (...l) => s.togglePopup && s.togglePopup(...l))
  }, [
    Q(r, {
      icon: "mic",
      size: 24
    }),
    D("span", ac, le(n.title), 1),
    D("span", cc, [
      n.isLoading ? (Y(), pe("span", fc, [...t[1] || (t[1] = [
        D("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          D("circle", {
            cx: "8",
            cy: "8",
            r: "7",
            "stroke-width": "2"
          })
        ], -1)
      ])])) : (Y(), Fe(r, {
        key: 1,
        icon: s.icon,
        size: 24
      }, null, 8, ["icon"]))
    ])
  ], 8, lc);
}
const Gs = /* @__PURE__ */ Ft(rc, [["render", uc]]), dc = {
  components: {
    PopupHeadline: Gs
  },
  props: {
    translations: {
      type: Object,
      required: !0
    },
    additionalClassname: {
      type: String,
      default: ""
    },
    isLoading: {
      type: Boolean,
      default: !1
    },
    isCloseState: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["togglePopup", "buttonAction"],
  setup(e, { emit: t }) {
    const n = qs();
    return {
      togglePopup: () => {
        t("togglePopup");
      },
      buttonAction: () => {
        t("buttonAction");
      },
      voiceState: n
    };
  }
}, hc = { class: "hf-content-area" }, pc = ["innerHTML"];
function gc(e, t, n, s, o, i) {
  const r = Ge("PopupHeadline");
  return Y(), pe(Ae, null, [
    Q(r, {
      class: st(n.additionalClassname),
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": n.isCloseState,
      onTogglePopup: s.togglePopup
    }, null, 8, ["class", "title", "is-loading", "is-close-state", "onTogglePopup"]),
    vn(D("div", hc, [
      D("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, pc),
      n.translations.buttonText ? (Y(), pe("button", {
        key: 0,
        class: "hf-button",
        onClick: t[0] || (t[0] = (...l) => s.buttonAction && s.buttonAction(...l))
      }, le(n.translations.buttonText), 1)) : Le("", !0)
    ], 512), [
      [An, n.translations.content && n.translations.content !== "" && s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const mc = /* @__PURE__ */ Ft(dc, [["render", gc]]), _c = {
  components: {
    PopupHeadline: Gs,
    HfIcon: Bn
  },
  props: {
    translations: {
      type: Object,
      required: !0
    },
    isLoading: {
      type: Boolean,
      default: !1
    },
    isCloseState: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["togglePopup", "beginListening"],
  setup(e, { emit: t }) {
    const n = qs(), s = /* @__PURE__ */ ye(0), o = ue(() => e.isCloseState && !n.state.isListening);
    return {
      togglePopup: () => {
        t("togglePopup");
      },
      beginListening: () => {
        t("beginListening");
      },
      goToPrevStep: () => {
        s.value > 0 && (s.value -= 1);
      },
      goToNextStep: () => {
        s.value < e.translations.steps.length - 1 ? s.value += 1 : (n.setStage("listening"), n.togglePopupState(!1));
      },
      isClose: o,
      currentStep: s,
      voiceState: n
    };
  }
}, bc = { class: "hf-content-area" }, vc = ["innerHTML"], yc = {
  key: 1,
  class: "hf-introduction-steps"
}, xc = ["innerHTML"], wc = { class: "hf-introduction-buttons" }, Sc = ["disabled"];
function Tc(e, t, n, s, o, i) {
  const r = Ge("PopupHeadline"), l = Ge("HfIcon");
  return Y(), pe(Ae, null, [
    Q(r, {
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": s.isClose,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "is-loading", "is-close-state", "onTogglePopup"]),
    vn(D("div", bc, [
      s.voiceState.state.isListening ? Le("", !0) : (Y(), pe("div", {
        key: 0,
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, vc)),
      s.voiceState.state.isListening ? (Y(), pe("div", yc, [
        D("div", {
          class: "hf-step",
          innerHTML: n.translations.steps[s.currentStep]
        }, null, 8, xc),
        D("div", wc, [
          D("button", {
            class: "hf-button",
            "aria-label": "Previous step",
            disabled: s.currentStep < 1,
            onClick: t[0] || (t[0] = (...a) => s.goToPrevStep && s.goToPrevStep(...a))
          }, [
            Q(l, {
              icon: "chevron--left",
              size: 24
            })
          ], 8, Sc),
          D("button", {
            class: "hf-button",
            "aria-label": "Next step",
            onClick: t[1] || (t[1] = (...a) => s.goToNextStep && s.goToNextStep(...a))
          }, [
            Q(l, {
              icon: "chevron--right",
              size: 24
            })
          ])
        ])
      ])) : Le("", !0),
      s.voiceState.state.isListening ? Le("", !0) : (Y(), pe("button", {
        key: 2,
        class: "hf-button",
        onClick: t[2] || (t[2] = (...a) => s.beginListening && s.beginListening(...a))
      }, le(n.translations.buttonText), 1))
    ], 512), [
      [An, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const Cc = /* @__PURE__ */ Ft(_c, [["render", Tc]]), Ac = {
  components: {
    HfIcon: Bn,
    PopupHeadline: Gs
  },
  props: {
    translations: {
      type: Object,
      required: !0
    }
  },
  emits: ["closeHandsFreeFlow", "togglePopup"],
  setup(e, { emit: t }) {
    const n = qs(), s = Ht("emitEvent"), o = /* @__PURE__ */ ye(null), i = /* @__PURE__ */ ye(null), r = /* @__PURE__ */ ye(null), l = () => {
      t("closeHandsFreeFlow"), s("handsfree-feedback", { vote: "close", text: e.translations.buttonText });
    }, a = () => {
      t("togglePopup");
    }, u = /* @__PURE__ */ ye(!1), f = /* @__PURE__ */ ye(!1), h = () => {
      u.value = !0, s("handsfree-feedback", { vote: "up", text: e.translations.voteUp });
    }, _ = () => {
      u.value = !0, s("handsfree-feedback", { vote: "down", text: e.translations.voteDown });
    }, x = () => {
      Os(() => {
        const S = i.value, F = r.value, M = o.value;
        if (!M || !S || !F)
          return;
        const R = S.offsetWidth + F.offsetWidth, k = M.offsetWidth;
        f.value = R > k;
      });
    }, w = sr(x, 200);
    return Dn(() => {
      x(), window.addEventListener("resize", w);
    }), Ds(() => {
      window.removeEventListener("resize", w);
    }), {
      closeHandsFreeFlow: l,
      votedUp: h,
      votedDown: _,
      togglePopup: a,
      voted: u,
      isStacked: f,
      voiceState: n,
      handsFreeVotes: o,
      voteUp: i,
      voteDown: r
    };
  }
}, Ec = { class: "hf-content-area" }, kc = ["innerHTML"], Pc = { class: "hf-success-message" };
function Hc(e, t, n, s, o, i) {
  const r = Ge("PopupHeadline"), l = Ge("HfIcon");
  return Y(), pe(Ae, null, [
    Q(r, {
      title: n.translations.title,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "onTogglePopup"]),
    vn(D("div", Ec, [
      D("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, kc),
      D("div", {
        ref: "handsFreeVotes",
        class: st(["hf-vote", { "hf-vote--stack": s.isStacked }])
      }, [
        s.voted ? Le("", !0) : (Y(), pe("button", {
          key: 0,
          ref: "voteUp",
          class: "hf-button",
          onClick: t[0] || (t[0] = (...a) => s.votedUp && s.votedUp(...a))
        }, [
          Q(l, {
            icon: "thumbs-up",
            size: 16
          }),
          D("span", null, le(n.translations.voteUp), 1)
        ], 512)),
        s.voted ? Le("", !0) : (Y(), pe("button", {
          key: 1,
          ref: "voteDown",
          class: "hf-button",
          onClick: t[1] || (t[1] = (...a) => s.votedDown && s.votedDown(...a))
        }, [
          Q(l, {
            icon: "thumbs-down",
            size: 16
          }),
          D("span", null, le(n.translations.voteDown), 1)
        ], 512)),
        vn(D("div", Pc, [
          Q(l, {
            icon: "checkmark--outline",
            size: 16
          }),
          Zt(" " + le(n.translations.successMessage), 1)
        ], 512), [
          [An, s.voted]
        ])
      ], 2),
      D("button", {
        class: "hf-button hf-button--solid",
        onClick: t[2] || (t[2] = (...a) => s.closeHandsFreeFlow && s.closeHandsFreeFlow(...a))
      }, le(n.translations.buttonText), 1)
    ], 512), [
      [An, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const Rc = /* @__PURE__ */ Ft(Ac, [["render", Hc]]), Fc = ':host{--hf-color-bg: #ffffff;--hf-color-text: #000000;--hf-color-primary: #000000;--hf-color-primary-hover: #000000;--hf-color-error: #cc0033;--hf-color-border: #d9d9d9;--hf-spacing-xxs: 4px;--hf-spacing-xs: 8px;--hf-spacing-s: 16px;--hf-spacing-sm: 24px;--hf-spacing-m: 32px;--hf-font-family: inherit;--hf-font-size-base: 16px;--hf-font-size-small: 14px;--hf-font-size-large: 18px;--hf-popup-width: 410px;--hf-popup-shadow: 0 12px 24px 0 rgba(0, 0, 0, .2);--hf-z-index: 10000;display:block;font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);color:var(--hf-color-text);line-height:1.5}*,*:before,*:after{box-sizing:border-box}.hf-root{margin-bottom:var(--hf-spacing-m)}.hf-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.hf-intro-row{display:flex;align-items:center;margin-bottom:var(--hf-spacing-s)}.hf-intro-label{margin-right:var(--hf-spacing-xs);font-weight:600;text-transform:uppercase;font-size:var(--hf-font-size-base)}.hf-button{position:relative;display:inline-flex;align-items:center;padding:var(--hf-spacing-s) var(--hf-spacing-sm);border:1px solid var(--hf-color-primary);border-radius:0;background-color:transparent;color:var(--hf-color-primary);font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);font-weight:400;line-height:1;vertical-align:middle;text-decoration:none;cursor:pointer;transition:background-color .2s ease-out,color .2s ease-out}.hf-button .hf-icon{margin-inline-end:var(--hf-spacing-xs)}.hf-button:hover{background-color:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button:hover .hf-icon svg{fill:var(--hf-color-bg)}.hf-button:disabled{opacity:.4;cursor:default}.hf-button--solid{background-color:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button--solid:hover{background-color:var(--hf-color-bg);color:var(--hf-color-primary)}.hf-button--handsfree{padding:var(--hf-spacing-s) var(--hf-spacing-sm)}.hf-button--handsfree .hf-icon{margin-inline-end:var(--hf-spacing-xxs)}.hf-icon{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;line-height:0}.hf-icon svg{fill:currentColor;width:1em;height:1em}.hf-icon-16 svg{width:16px;height:16px}.hf-icon-24 svg{width:24px;height:24px}.hf-tooltip-wrapper{cursor:pointer;position:relative;display:inline-flex;align-items:baseline}.hf-tooltip-content{position:absolute;bottom:30px;left:8px;transform:translate(-50%);width:350px;padding:var(--hf-spacing-s);background:var(--hf-color-bg);box-shadow:var(--hf-popup-shadow);cursor:default;z-index:calc(var(--hf-z-index) + 1)}.hf-tooltip-content:after{content:"";position:absolute;bottom:-10px;left:50%;transform:translate(-50%);width:0;height:0;border-style:solid;border-width:10px 10px 0 10px;border-color:var(--hf-color-bg) transparent transparent transparent}.hf-tooltip-title{display:flex;justify-content:space-between;text-transform:uppercase;font-weight:600;font-size:var(--hf-font-size-large);margin-bottom:var(--hf-spacing-xs)}.hf-tooltip-title span{cursor:pointer}.hf-tooltip-text{display:block;font-size:var(--hf-font-size-small);line-height:1.5}.hf-fade-enter-active,.hf-fade-leave-active{transition:opacity .2s ease-in-out}.hf-fade-enter-from,.hf-fade-leave-to{opacity:0}.hf-popup{position:fixed;bottom:20px;right:20px;width:calc(100% - 40px);max-width:var(--hf-popup-width);background:var(--hf-color-bg);z-index:var(--hf-z-index);box-shadow:var(--hf-popup-shadow);padding:var(--hf-spacing-s);transition:bottom .3s ease,opacity .3s ease}.hf-popup--hidden{bottom:-100px;pointer-events:none;opacity:0}.hf-popup--opened{bottom:20px}.hf-headline{position:relative;border:0;display:flex;align-items:center;width:100%;background:none;padding:0;margin:0;cursor:pointer;font-family:var(--hf-font-family);color:var(--hf-color-text);font-size:var(--hf-font-size-base)}.hf-headline__title{text-transform:uppercase;font-weight:600;font-size:var(--hf-font-size-base);margin-left:var(--hf-spacing-xxs)}.hf-headline__opener{margin-left:auto;display:flex;align-items:center}.hf-headline__opener svg{transition:transform .2s}.hf-popup--opened .hf-headline__opener svg{transform:rotate(0)}.hf-popup:not(.hf-popup--opened) .hf-headline__opener svg{transform:rotate(180deg)}.hf-spinner{display:inline-block;width:22px;height:22px}.hf-spinner svg{width:100%;height:100%;overflow:visible;animation:hf-rotation 1455ms infinite linear}.hf-spinner circle{stroke:currentColor;stroke-dasharray:44px;stroke-dashoffset:33px;transform-origin:center;animation:hf-spinner 2s infinite ease-in-out}@keyframes hf-spinner{0%{stroke-dashoffset:33px;transform:rotate(0)}50%{stroke-dashoffset:11px;transform:rotate(135deg)}to{stroke-dashoffset:33px;transform:rotate(360deg)}}@keyframes hf-rotation{to{transform:rotate(360deg)}}.hf-content-area{margin-top:var(--hf-spacing-s)}.hf-content p{margin:0 0 var(--hf-spacing-s);font-size:var(--hf-font-size-base)}.hf-content p:last-of-type{margin:0}.hf-content ul{margin:0;padding:var(--hf-spacing-xs) 0 var(--hf-spacing-xs) var(--hf-spacing-s);line-height:1}.hf-content ul li{margin:0 0 var(--hf-spacing-xs)}.hf-content a{color:var(--hf-color-text)}.hf-content-area>.hf-button{margin-top:var(--hf-spacing-s)}.hf-introduction-steps .hf-step{margin-bottom:var(--hf-spacing-xs)}.hf-introduction-steps .hf-step p{margin:0 0 var(--hf-spacing-xs)}.hf-introduction-buttons{display:flex;gap:0}.hf-introduction-buttons .hf-button{padding:var(--hf-spacing-s) calc(var(--hf-spacing-s) - var(--hf-spacing-xxs))}.hf-introduction-buttons .hf-button .hf-icon{margin-inline-end:0}.hf-introduction-buttons .hf-button:last-of-type{margin-left:-1px}.hf-popup.hf-not-recognized{border:1px solid var(--hf-color-error)}.hf-popup.hf-error-state .hf-headline{color:var(--hf-color-error)}.hf-hide-chevron .hf-headline__opener{pointer-events:none}.hf-hide-chevron .hf-headline__opener .hf-icon{display:none}.hf-vote{display:flex;gap:0;margin:var(--hf-spacing-s) 0}.hf-vote .hf-button{white-space:nowrap}.hf-vote .hf-button:last-of-type{margin-left:-1px}.hf-vote--stack{flex-direction:column}.hf-vote--stack .hf-button{justify-content:center}.hf-vote--stack .hf-button:last-of-type{margin-left:0;margin-top:-1px}.hf-success-message{display:flex;align-items:center;gap:var(--hf-spacing-xxs)}@media print{.hf-root,.hf-popup{display:none}}@media(max-width:767px){.hf-tooltip-content{left:30px;width:290px}.hf-tooltip-content:after{transform:translate(calc(-50% - 22px))}}.hf-debug{position:fixed;bottom:16px;left:16px;z-index:calc(var(--hf-z-index) + 100);width:320px;background:#000000e0;color:#e0e0e0;font-family:monospace;font-size:12px;line-height:1.5;border-radius:6px;overflow:hidden;box-shadow:0 4px 16px #00000080;pointer-events:none}.hf-debug__header{background:#1a1a2e;color:#7eb8f7;font-weight:700;padding:6px 10px;letter-spacing:.05em;font-size:11px;text-transform:uppercase}.hf-debug__table{width:100%;border-collapse:collapse;padding:4px 0}.hf-debug__table tr:not(:last-child){border-bottom:1px solid rgba(255,255,255,.06)}.hf-debug__label{color:#888;padding:4px 10px;white-space:nowrap;vertical-align:top;width:56px}.hf-debug__value{color:#e0e0e0;padding:4px 10px 4px 4px;word-break:break-word}.hf-debug__speech{color:#f0d080;font-style:italic}.hf-debug__matched{color:#6edb8f;font-weight:700}.hf-debug__no-match{color:#f07070}.hf-debug__status--recording{color:#6edb8f}.hf-debug__status--starting{color:#f0d080}.hf-debug__status--stopped{color:#888}.hf-debug__status--error{color:#f07070}', Mc = {
  intro: "Handsfree cooking",
  letsCook: "Let's cook",
  stopCooking: "Stop cooking",
  tooltip: {
    title: "Handsfree cooking",
    text: 'Handsfree cooking is our voice activated assistant that helps you through steps of the recipe. Simply say e.g. "Go to next step" – this way you can focus on cooking, not scrolling.'
  },
  introduction: {
    title: "Introduction",
    content: "<p>In order for this feature to work we need access to your microphone.</p>",
    buttonText: "Allow microphone access",
    steps: [
      `<p>Navigate between steps using commands such as "Go to next step" or "Go to ingredients".</p><p>We'd recommend reducing background noise for the best possible experience.</p>`,
      `<p>We'd recommend preparing all your ingredients beforehand.</p><p>Whenever you're ready say "Let's cook" or simply press the right arrow button below.</p>`
    ]
  },
  notAllowed: {
    title: "Something went wrong",
    content: "<p>In order to use handsfree cooking, we need access to your microphone.</p>",
    buttonText: "Click here to allow access"
  },
  listening: {
    title: "Ready for instructions"
  },
  help: {
    title: "List of commands",
    content: "<p>Are you stuck? One of these commands might help you move on.</p><span>Commands</span><ul><li>Next step</li><li>Previous step</li><li>Scroll up</li><li>Scroll down</li><li>Go to ingredients</li><li>Go to method</li><li>Help</li></ul>",
    buttonText: "Stop cooking"
  },
  finish: {
    title: "You’re done!",
    content: "<p>Enjoy your meal!</p><p>How was your experience using handsfree cooking?</p>",
    buttonText: "Close handsfree cooking",
    voteUp: "Very helpful",
    voteDown: "Needs tweaking",
    successMessage: "Your feedback is appreciated!"
  },
  notSupported: {
    title: "Browser not supported",
    content: "<span>This feature is unfortunately not supported in Firefox. Use any of the following browsers to get started with handsfree cooking:</span><ul><li>Google Chrome</li><li>Safari</li><li>Microsoft Edge</li></ul>",
    buttonText: "Close handsfree cooking"
  },
  notRecognized: {
    title: "Command not recognized"
  },
  notRecognizedError: {
    title: 'Say "Help" to see commands'
  },
  almostDone: {
    title: "Almost there",
    content: `<p>You've made it to the last bit!</p><p>Continue by saying "I'm done" so we can make sure to send you off right.</p>`
  }
}, Lc = {
  nextStep: ["next step", "go forward", "next"],
  previousStep: ["previous step", "go back", "previous"],
  scrollUp: ["scroll up"],
  scrollDown: ["scroll down"],
  goToIngredients: ["go to ingredients", "ingredients"],
  goToInstructions: ["go to instructions", "go to method", "instructions"],
  help: ["help", "commands"],
  letsCook: ["let's cook", "lets cook", "start cooking"],
  imDone: ["i'm done", "im done", "done", "finish"],
  exit: ["exit", "close"]
}, Oc = 3, Ic = {
  components: {
    Finish: Rc,
    Popup: mc,
    Introduction: Cc,
    HfIcon: Bn
  },
  props: {
    lang: {
      type: String,
      default: ""
    },
    stepsSelector: {
      type: String,
      default: ".recipe-step"
    },
    ingredientsSelector: {
      type: String,
      default: "#ingredients"
    },
    instructionsSelector: {
      type: String,
      default: "#instructions"
    },
    translations: {
      type: String,
      default: ""
    },
    commands: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = za();
    ja(t);
    const { state: n, setStage: s, toggleListening: o, togglePopupState: i } = t, r = Ws(), l = (g, p = {}) => {
      const C = r?.proxy?.$el?.parentNode?.host || r?.proxy?.$el;
      C && C.dispatchEvent && C.dispatchEvent(new CustomEvent(g, {
        detail: p,
        bubbles: !0,
        composed: !0
      }));
    };
    Ns("emitEvent", l);
    const a = ue(() => {
      let g = {};
      if (e.translations)
        try {
          g = JSON.parse(e.translations);
        } catch (p) {
          console.warn("[HandsfreeCooking] Invalid translations JSON:", p);
        }
      return lr(Mc, g);
    }), u = ue(() => {
      let g = {};
      if (e.commands)
        try {
          g = JSON.parse(e.commands);
        } catch (p) {
          console.warn("[HandsfreeCooking] Invalid commands JSON:", p);
        }
      return { ...Lc, ...g };
    }), f = ue(() => ({
      steps: e.stepsSelector,
      ingredients: e.ingredientsSelector,
      instructions: e.instructionsSelector
    })), h = ue(
      () => e.lang || document.documentElement.lang || "en"
    ), { commands: _, destroy: x } = Ba(
      u,
      f,
      t,
      l
    ), w = /* @__PURE__ */ ye(null), S = /* @__PURE__ */ ye(!1), F = /* @__PURE__ */ ye(null), M = /* @__PURE__ */ ye(0), R = /* @__PURE__ */ ye(!1), k = /* @__PURE__ */ ye(!1), y = /* @__PURE__ */ ye(!1), H = /* @__PURE__ */ ye(null), j = typeof window < "u" && (window.location.hash.includes("debugHF") || new URLSearchParams(window.location.search).has("debugHF")), B = /* @__PURE__ */ ye({
      lang: "",
      status: "",
      stage: "",
      subState: "",
      interim: "",
      final: "",
      matched: ""
    });
    wt(
      () => [n.stage, n.subState],
      ([g, p]) => {
        j && (B.value.stage = g ?? "null", B.value.subState = p ?? "");
      },
      { immediate: !0 }
    );
    const X = ue(() => n.stage), L = ue(() => n.subState), W = ue(() => n.isPopupOpened), I = ue(
      () => n.stage === "introduction" || n.stage === "listening" && n.subState === "intro"
    ), E = ue(
      () => n.stage === "listening" && n.subState === "help"
    ), K = ue(
      () => n.stage === "listening" && n.subState === "not-recognized"
    ), ie = ue(
      () => n.stage === "listening" && n.subState === "recognized-error"
    ), Ee = ue(
      () => n.stage === "listening" && n.subState === "almost-done"
    ), ce = ue(() => K.value ? a.value.notRecognized.title : ie.value ? a.value.notRecognizedError.title : n.stage === "listening" && n.subState === null ? a.value.listening.title : "");
    let ne = !1, G = !1;
    function Ye() {
      !w.value || G || (y.value && w.value.stop(), setTimeout(() => {
        if (!y.value)
          try {
            w.value.start();
          } catch {
            setTimeout(() => {
              try {
                y.value || w.value.start();
              } catch (p) {
                console.error("[HandsfreeCooking] Restart failed:", p);
              }
            }, 1e3);
          }
      }, 500));
    }
    const St = () => {
      S.value = !S.value;
    };
    let Se = null;
    const Te = (g) => {
      F.value && !g.composedPath().includes(F.value) && (S.value = !1);
    };
    wt(S, (g) => {
      Se && (cancelAnimationFrame(Se), Se = null), document.removeEventListener("click", Te, !0), g && (Se = requestAnimationFrame(() => {
        document.addEventListener("click", Te, !0);
      }));
    });
    const ln = (g) => {
      const p = Wo(g, Object.keys(_.value));
      j && (B.value.matched = p || "no match"), p ? (Ee.value || (s("listening"), i(!1)), Ee.value && u.value.imDone.includes(p) && (s("finish"), ht(), l("handsfree-finished", { reason: "completed recipe flow" })), M.value = 0, requestAnimationFrame(() => {
        _.value[p] && _.value[p]();
      })) : (M.value += 1, n.subState !== "help" && (s("listening", "not-recognized"), i(!1)), M.value > Oc && s("listening", "recognized-error"));
    }, Un = (g) => {
      const p = Wo(g, Object.keys(_.value));
      j && (B.value.matched = p && u.value.letsCook.includes(p) ? p : "no match (intro)"), p && u.value.letsCook.includes(p) && setTimeout(() => {
        _.value[p] && _.value[p]();
      }, 100);
    }, Wn = window.SpeechRecognition || window.webkitSpeechRecognition, at = () => {
      if (G = !1, s("introduction"), l("handsfree-activated"), !Wn)
        l("handsfree-error", { error: "browser-not-supported" }), s("not-supported");
      else {
        let g = !1;
        j && (B.value.lang = h.value, B.value.matched = "", B.value.interim = "", B.value.final = ""), w.value = tc.init({
          lang: h.value,
          continuesRecognition: !0,
          onUserSpeech: (p) => {
            if (y.value = ["starting", "recording"].includes(p.status), ["stopped", "aborted", "error"].includes(p.status) && (y.value = !1), H.value = p.status, j && (B.value.status = p.error ? `${p.status} (${p.error})` : p.status), !g && p.status === "starting") {
              g = !0;
              return;
            }
            if (p.status === "error" && (p.error === "not-allowed" || p.error === "service-not-allowed")) {
              k.value = !0, s("not-allowed"), o(!1), w.value.stop(), l("handsfree-error", { error: "microphone-not-allowed" });
              return;
            }
            if (p.status === "recording" && (o(!0), ne || (l("handsfree-state-change", { stage: "microphone-allowed", isListening: !0 }), ne = !0), p.transcriptions.length && !p.finalTranscriptions && (R.value = !0, j && (B.value.interim = p.transcriptions[0].text)), p.finalTranscriptions)) {
              R.value = !1;
              const C = p.transcriptions[0].text.toLowerCase().trim();
              j && (B.value.interim = "", B.value.final = p.transcriptions[0].text, B.value.matched = ""), I.value ? Un(C) : ln(C);
            }
          },
          onUserSpeak: () => {
          }
        });
      }
    }, ht = () => {
      w.value && w.value.stop(), G = !0, o(!1), i(!0), y.value = !1;
    }, Mt = () => {
      s("finish"), ht(), l("handsfree-finished", { reason: "stop-cooking-button" });
    }, an = () => {
      i(!0), s("listening", "help");
    }, pt = () => {
      if (k.value)
        s("not-allowed");
      else {
        if (!y.value)
          try {
            w.value.start();
          } catch (g) {
            console.warn("[HandsfreeCooking] Cannot start recognizer:", g);
          }
        s("listening", "intro"), l("handsfree-state-change", { stage: "listening", isListening: !0 });
      }
    };
    async function Zs() {
      try {
        (await navigator.mediaDevices.getUserMedia({ audio: !0 })).getTracks().forEach((p) => p.stop()), k.value = !1, at();
      } catch {
        l("handsfree-error", { error: "microphone-blocked" });
      }
    }
    const c = () => {
      i(!n.isPopupOpened), l("handsfree-state-change", {
        stage: n.stage,
        isListening: n.isListening,
        isPopupOpened: n.isPopupOpened
      });
    }, d = () => {
      i(!1), s("listening");
    }, m = () => {
      !n.isListening && w.value ? (w.value.stop(), s(null)) : c();
    }, b = (g) => {
      if (g.key === "Escape") {
        if (S.value) {
          S.value = !1;
          return;
        }
        n.isPopupOpened && n.stage !== null && (n.subState === "help" ? d() : m());
      }
    };
    return wt(H, (g) => {
      g === "stopped" && n.stage === "listening" && !G && !y.value && Ye();
    }), Dn(() => {
      document.addEventListener("keydown", b);
    }), Vs(() => {
      document.removeEventListener("keydown", b), document.removeEventListener("click", Te, !0), Se && cancelAnimationFrame(Se);
      try {
        w.value && w.value.stop();
      } catch (g) {
        console.warn("[HandsfreeCooking] Failed to stop on unmount:", g);
      }
      x(), y.value = !1;
    }), {
      isPopupOpened: W,
      stage: X,
      subState: L,
      isIntroductionVisible: I,
      isHelpVisible: E,
      isNotRecognized: K,
      isNotRecognizedError: ie,
      isAlmostDone: Ee,
      isTooltipVisible: S,
      mergedTranslations: a,
      mergedCommands: u,
      tooltip: F,
      isLoading: R,
      statusAnnouncement: ce,
      toggleTooltip: St,
      openHelp: an,
      startHandsFreeFlow: at,
      finishHandsFreeFlow: Mt,
      togglePopup: c,
      requestMicrophoneAccess: Zs,
      beginListening: pt,
      continueListening: d,
      closeHandsFreeFlow: m,
      isDebugMode: j,
      debugInfo: B
    };
  }
}, Nc = { class: "hf-root" }, Dc = { class: "hf-trigger" }, Vc = { class: "hf-intro-row" }, zc = { class: "hf-intro-label" }, jc = {
  ref: "tooltip",
  class: "hf-tooltip-wrapper"
}, Bc = {
  key: 0,
  class: "hf-tooltip-content"
}, Uc = { class: "hf-tooltip-title" }, Wc = { class: "hf-tooltip-text" }, Kc = ["aria-hidden"], qc = {
  "aria-live": "polite",
  class: "hf-sr-only"
}, Gc = {
  key: 0,
  class: "hf-debug"
}, Zc = { class: "hf-debug__table" }, Jc = { class: "hf-debug__value" }, Yc = { class: "hf-debug__value" }, $c = { class: "hf-debug__value hf-debug__speech" }, Xc = { class: "hf-debug__value hf-debug__speech" };
function Qc(e, t, n, s, o, i) {
  const r = Ge("HfIcon"), l = Ge("Introduction"), a = Ge("Popup"), u = Ge("Finish");
  return Y(), pe(Ae, null, [
    D("div", Nc, [
      D("div", Dc, [
        D("div", Vc, [
          D("span", zc, le(s.mergedTranslations.intro), 1),
          D("span", jc, [
            Q(r, {
              icon: "help",
              size: 16,
              onClick: s.toggleTooltip
            }, null, 8, ["onClick"]),
            Q(ha, { name: "hf-fade" }, {
              default: vi(() => [
                s.isTooltipVisible ? (Y(), pe("span", Bc, [
                  D("strong", Uc, [
                    Zt(le(s.mergedTranslations.tooltip.title) + " ", 1),
                    D("span", {
                      role: "button",
                      "aria-label": "Close tooltip",
                      onClick: t[0] || (t[0] = (f) => s.isTooltipVisible = !1)
                    }, [
                      Q(r, {
                        icon: "close",
                        size: 24
                      })
                    ])
                  ]),
                  D("span", Wc, le(s.mergedTranslations.tooltip.text), 1)
                ])) : Le("", !0)
              ]),
              _: 1
            })
          ], 512)
        ]),
        s.stage !== "listening" ? (Y(), pe("button", {
          key: 0,
          class: "hf-button hf-button--handsfree",
          onClick: t[1] || (t[1] = (...f) => s.startHandsFreeFlow && s.startHandsFreeFlow(...f))
        }, [
          Q(r, {
            icon: "mic",
            size: 24
          }),
          Zt(" " + le(s.mergedTranslations.letsCook), 1)
        ])) : Le("", !0),
        s.stage === "listening" ? (Y(), pe("button", {
          key: 1,
          class: "hf-button hf-button--handsfree",
          onClick: t[2] || (t[2] = (...f) => s.finishHandsFreeFlow && s.finishHandsFreeFlow(...f))
        }, [
          Q(r, {
            icon: "mic",
            size: 24
          }),
          Zt(" " + le(s.mergedTranslations.stopCooking), 1)
        ])) : Le("", !0)
      ]),
      D("div", {
        class: st(["hf-popup", {
          "hf-popup--opened": s.isPopupOpened,
          "hf-popup--hidden": s.stage === null,
          "hf-not-recognized": s.isNotRecognized || s.isNotRecognizedError,
          "hf-error-state": s.isNotRecognizedError
        }]),
        role: "dialog",
        "aria-label": "Handsfree cooking assistant",
        "aria-hidden": s.stage === null
      }, [
        D("div", qc, le(s.statusAnnouncement), 1),
        s.isIntroductionVisible ? (Y(), Fe(l, {
          key: 0,
          translations: s.mergedTranslations.introduction,
          "is-loading": s.isLoading,
          "is-close-state": !0,
          onTogglePopup: s.closeHandsFreeFlow,
          onBeginListening: s.beginListening
        }, null, 8, ["translations", "is-loading", "onTogglePopup", "onBeginListening"])) : s.stage === "not-allowed" ? (Y(), Fe(a, {
          key: 1,
          translations: s.mergedTranslations.notAllowed,
          "is-loading": s.isLoading,
          "is-close-state": !0,
          onTogglePopup: s.closeHandsFreeFlow,
          onButtonAction: s.requestMicrophoneAccess
        }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : s.stage === "listening" && s.subState === null ? (Y(), Fe(a, {
          key: 2,
          translations: s.mergedTranslations.listening,
          "is-loading": s.isLoading,
          onTogglePopup: s.openHelp
        }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.isHelpVisible ? (Y(), Fe(a, {
          key: 3,
          translations: s.mergedTranslations.help,
          "is-loading": s.isLoading,
          onTogglePopup: s.continueListening,
          onButtonAction: s.finishHandsFreeFlow
        }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : s.isNotRecognized ? (Y(), Fe(a, {
          key: 4,
          translations: s.mergedTranslations.notRecognized,
          "is-loading": s.isLoading,
          onTogglePopup: s.openHelp
        }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.isNotRecognizedError ? (Y(), Fe(a, {
          key: 5,
          translations: s.mergedTranslations.notRecognizedError,
          "is-loading": s.isLoading,
          onTogglePopup: s.openHelp
        }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.stage === "not-supported" ? (Y(), Fe(a, {
          key: 6,
          "additional-classname": "hf-hide-chevron",
          translations: s.mergedTranslations.notSupported,
          "is-loading": s.isLoading,
          onButtonAction: s.closeHandsFreeFlow
        }, null, 8, ["translations", "is-loading", "onButtonAction"])) : s.isAlmostDone ? (Y(), Fe(a, {
          key: 7,
          translations: s.mergedTranslations.almostDone,
          "is-loading": s.isLoading,
          onTogglePopup: s.togglePopup
        }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.stage === "finish" ? (Y(), Fe(u, {
          key: 8,
          translations: s.mergedTranslations.finish,
          onCloseHandsFreeFlow: s.closeHandsFreeFlow,
          onTogglePopup: s.togglePopup
        }, null, 8, ["translations", "onCloseHandsFreeFlow", "onTogglePopup"])) : Le("", !0)
      ], 10, Kc)
    ]),
    (Y(), Fe(sl, {
      to: "body",
      disabled: !0
    }, [
      s.isDebugMode ? (Y(), pe("div", Gc, [
        t[9] || (t[9] = D("div", { class: "hf-debug__header" }, "🎤 HF Debug", -1)),
        D("table", Zc, [
          D("tr", null, [
            t[3] || (t[3] = D("td", { class: "hf-debug__label" }, "Lang", -1)),
            D("td", Jc, le(s.debugInfo.lang), 1)
          ]),
          D("tr", null, [
            t[4] || (t[4] = D("td", { class: "hf-debug__label" }, "Status", -1)),
            D("td", {
              class: st(["hf-debug__value", "hf-debug__status--" + s.debugInfo.status])
            }, le(s.debugInfo.status || "—"), 3)
          ]),
          D("tr", null, [
            t[5] || (t[5] = D("td", { class: "hf-debug__label" }, "Stage", -1)),
            D("td", Yc, le(s.debugInfo.stage) + le(s.debugInfo.subState ? " / " + s.debugInfo.subState : ""), 1)
          ]),
          D("tr", null, [
            t[6] || (t[6] = D("td", { class: "hf-debug__label" }, "Interim", -1)),
            D("td", $c, le(s.debugInfo.interim || "—"), 1)
          ]),
          D("tr", null, [
            t[7] || (t[7] = D("td", { class: "hf-debug__label" }, "Final", -1)),
            D("td", Xc, le(s.debugInfo.final || "—"), 1)
          ]),
          D("tr", null, [
            t[8] || (t[8] = D("td", { class: "hf-debug__label" }, "Matched", -1)),
            D("td", {
              class: st(["hf-debug__value", s.debugInfo.matched === "no match" ? "hf-debug__no-match" : "hf-debug__matched"])
            }, le(s.debugInfo.matched || "—"), 3)
          ])
        ])
      ])) : Le("", !0)
    ]))
  ], 64);
}
const ef = /* @__PURE__ */ Ft(Ic, [["render", Qc], ["styles", [Fc]]]), tf = /* @__PURE__ */ La(ef, {
  shadowRoot: !0
});
customElements.get("handsfree-cooking") || customElements.define("handsfree-cooking", tf);
export {
  tf as HandsfreeCookingElement
};
