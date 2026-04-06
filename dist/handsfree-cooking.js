// @__NO_SIDE_EFFECTS__
function As(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const te = {}, Tt = [], Je = () => {
}, Ko = () => !1, En = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Pn = (e) => e.startsWith("onUpdate:"), re = Object.assign, xs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ar = Object.prototype.hasOwnProperty, Z = (e, t) => ar.call(e, t), V = Array.isArray, kt = (e) => sn(e) === "[object Map]", qo = (e) => sn(e) === "[object Set]", Qs = (e) => sn(e) === "[object Date]", U = (e) => typeof e == "function", ae = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", Go = (e) => (Y(e) || U(e)) && U(e.then) && U(e.catch), Jo = Object.prototype.toString, sn = (e) => Jo.call(e), cr = (e) => sn(e).slice(8, -1), On = (e) => sn(e) === "[object Object]", ws = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jt = /* @__PURE__ */ As(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), In = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, fr = /-\w/g, de = In(
  (e) => e.replace(fr, (t) => t.slice(1).toUpperCase())
), ur = /\B([A-Z])/g, Le = In(
  (e) => e.replace(ur, "-$1").toLowerCase()
), Rn = In((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kn = In(
  (e) => e ? `on${Rn(e)}` : ""
), qe = (e, t) => !Object.is(e, t), qn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Zo = (e, t, n, s = !1) => {
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
let $s;
const Ln = () => $s || ($s = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ss(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ae(s) ? mr(s) : Ss(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (ae(e) || Y(e))
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
  else if (Y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const br = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vr = /* @__PURE__ */ As(br);
function Xo(e) {
  return !!e || e === "";
}
function _r(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Cs(e[s], t[s]);
  return n;
}
function Cs(e, t) {
  if (e === t) return !0;
  let n = Qs(e), s = Qs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ze(e), s = Ze(t), n || s)
    return e === t;
  if (n = V(e), s = V(t), n || s)
    return n && s ? _r(e, t) : !1;
  if (n = Y(e), s = Y(t), n || s) {
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
const Yo = (e) => !!(e && e.__v_isRef === !0), le = (e) => ae(e) ? e : e == null ? "" : V(e) || Y(e) && (e.toString === Jo || !U(e.toString)) ? Yo(e) ? le(e.value) : JSON.stringify(e, Qo, 2) : String(e), Qo = (e, t) => Yo(t) ? Qo(e, t.value) : kt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Gn(s, i) + " =>"] = o, n),
    {}
  )
} : qo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Gn(n))
} : Ze(t) ? Gn(t) : Y(t) && !V(t) && !On(t) ? String(t) : t, Gn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ze(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
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
function Ar() {
  return Ce;
}
let oe;
const Jn = /* @__PURE__ */ new WeakSet();
class $o {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ce && Ce.active && Ce.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jn.has(this) && (Jn.delete(this), this.trigger()));
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
    const t = oe, n = Me;
    oe = this, Me = !0;
    try {
      return this.fn();
    } finally {
      si(this), oe = t, Me = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Es(t);
      this.deps = this.depsTail = void 0, eo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Jn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let ei = 0, Bt, zt;
function ti(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = zt, zt = e;
    return;
  }
  e.next = Bt, Bt = e;
}
function Ts() {
  ei++;
}
function ks() {
  if (--ei > 0)
    return;
  if (zt) {
    let t = zt;
    for (zt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Bt; ) {
    let t = Bt;
    for (Bt = void 0; t; ) {
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
    s.version === -1 ? (s === n && (n = o), Es(s), xr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Zt) || (e.globalVersion = Zt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ls(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = oe, s = Me;
  oe = e, Me = !0;
  try {
    ni(e);
    const o = e.fn(e._value);
    (t.version === 0 || qe(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    oe = n, Me = s, si(e), e.flags &= -3;
  }
}
function Es(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Es(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function xr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Me = !0;
const ii = [];
function ot() {
  ii.push(Me), Me = !1;
}
function it() {
  const e = ii.pop();
  Me = e === void 0 ? !0 : e;
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
let Zt = 0;
class wr {
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
    if (!oe || !Me || oe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== oe)
      n = this.activeLink = new wr(oe, this), oe.deps ? (n.prevDep = oe.depsTail, oe.depsTail.nextDep = n, oe.depsTail = n) : oe.deps = oe.depsTail = n, ri(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = oe.depsTail, n.nextDep = void 0, oe.depsTail.nextDep = n, oe.depsTail = n, oe.deps === n && (oe.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Zt++, this.notify(t);
  }
  notify(t) {
    Ts();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ks();
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
const as = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ Symbol(
  ""
), cs = /* @__PURE__ */ Symbol(
  ""
), Xt = /* @__PURE__ */ Symbol(
  ""
);
function be(e, t, n) {
  if (Me && oe) {
    let s = as.get(e);
    s || as.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ps()), o.map = s, o.key = n), o.track();
  }
}
function tt(e, t, n, s, o, i) {
  const r = as.get(e);
  if (!r) {
    Zt++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Ts(), t === "clear")
    r.forEach(l);
  else {
    const a = V(e), u = a && ws(n);
    if (a && n === "length") {
      const f = Number(s);
      r.forEach((h, b) => {
        (b === "length" || b === Xt || !Ze(b) && b >= f) && l(h);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), u && l(r.get(Xt)), t) {
        case "add":
          a ? u && l(r.get("length")) : (l(r.get(At)), kt(e) && l(r.get(cs)));
          break;
        case "delete":
          a || (l(r.get(At)), kt(e) && l(r.get(cs)));
          break;
        case "set":
          kt(e) && l(r.get(At));
          break;
      }
  }
  ks();
}
function St(e) {
  const t = /* @__PURE__ */ J(e);
  return t === e ? t : (be(t, "iterate", Xt), /* @__PURE__ */ Fe(e) ? t : t.map(rt));
}
function Os(e) {
  return be(e = /* @__PURE__ */ J(e), "iterate", Xt), e;
}
function We(e, t) {
  return /* @__PURE__ */ ut(e) ? Yt(/* @__PURE__ */ Et(e) ? rt(t) : t) : rt(t);
}
const Sr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Zn(this, Symbol.iterator, (e) => We(this, e));
  },
  concat(...e) {
    return St(this).concat(
      ...e.map((t) => V(t) ? St(t) : t)
    );
  },
  entries() {
    return Zn(this, "entries", (e) => (e[1] = We(this, e[1]), e));
  },
  every(e, t) {
    return Ye(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ye(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => We(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ye(
      this,
      "find",
      e,
      t,
      (n) => We(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ye(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ye(
      this,
      "findLast",
      e,
      t,
      (n) => We(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ye(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ye(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Xn(this, "includes", e);
  },
  indexOf(...e) {
    return Xn(this, "indexOf", e);
  },
  join(e) {
    return St(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Xn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ye(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Mt(this, "pop");
  },
  push(...e) {
    return Mt(this, "push", e);
  },
  reduce(e, ...t) {
    return to(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return to(this, "reduceRight", e, t);
  },
  shift() {
    return Mt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ye(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Mt(this, "splice", e);
  },
  toReversed() {
    return St(this).toReversed();
  },
  toSorted(e) {
    return St(this).toSorted(e);
  },
  toSpliced(...e) {
    return St(this).toSpliced(...e);
  },
  unshift(...e) {
    return Mt(this, "unshift", e);
  },
  values() {
    return Zn(this, "values", (e) => We(this, e));
  }
};
function Zn(e, t, n) {
  const s = Os(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Fe(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const Cr = Array.prototype;
function Ye(e, t, n, s, o, i) {
  const r = Os(e), l = r !== e && !/* @__PURE__ */ Fe(e), a = r[t];
  if (a !== Cr[t]) {
    const h = a.apply(e, i);
    return l ? rt(h) : h;
  }
  let u = n;
  r !== e && (l ? u = function(h, b) {
    return n.call(this, We(e, h), b, e);
  } : n.length > 2 && (u = function(h, b) {
    return n.call(this, h, b, e);
  }));
  const f = a.call(r, u, s);
  return l && o ? o(f) : f;
}
function to(e, t, n, s) {
  const o = Os(e), i = o !== e && !/* @__PURE__ */ Fe(e);
  let r = n, l = !1;
  o !== e && (i ? (l = s.length === 0, r = function(u, f, h) {
    return l && (l = !1, u = We(e, u)), n.call(this, u, We(e, f), h, e);
  }) : n.length > 3 && (r = function(u, f, h) {
    return n.call(this, u, f, h, e);
  }));
  const a = o[t](r, ...s);
  return l ? We(e, a) : a;
}
function Xn(e, t, n) {
  const s = /* @__PURE__ */ J(e);
  be(s, "iterate", Xt);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ J(n[0]), s[t](...n)) : o;
}
function Mt(e, t, n = []) {
  ot(), Ts();
  const s = (/* @__PURE__ */ J(e))[t].apply(e, n);
  return ks(), it(), s;
}
const Tr = /* @__PURE__ */ As("__proto__,__v_isRef,__isVue"), li = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
);
function kr(e) {
  Ze(e) || (e = String(e));
  const t = /* @__PURE__ */ J(this);
  return be(t, "has", e), t.hasOwnProperty(e);
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
      if (r && (a = Sr[n]))
        return a;
      if (n === "hasOwnProperty")
        return kr;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ge(t) ? t : s
    );
    if ((Ze(n) ? li.has(n) : Tr(n)) || (o || be(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ ge(l)) {
      const a = r && ws(n) ? l : l.value;
      return o && Y(a) ? /* @__PURE__ */ us(a) : a;
    }
    return Y(l) ? o ? /* @__PURE__ */ us(l) : /* @__PURE__ */ Hn(l) : l;
  }
}
class ci extends ai {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const r = V(t) && ws(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ ut(i);
      if (!/* @__PURE__ */ Fe(s) && !/* @__PURE__ */ ut(s) && (i = /* @__PURE__ */ J(i), s = /* @__PURE__ */ J(s)), !r && /* @__PURE__ */ ge(i) && !/* @__PURE__ */ ge(s))
        return u || (i.value = s), !0;
    }
    const l = r ? Number(n) < t.length : Z(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ge(t) ? t : o
    );
    return t === /* @__PURE__ */ J(o) && (l ? qe(s, i) && tt(t, "set", n, s) : tt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = Z(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && tt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ze(n) || !li.has(n)) && be(t, "has", n), s;
  }
  ownKeys(t) {
    return be(
      t,
      "iterate",
      V(t) ? "length" : At
    ), Reflect.ownKeys(t);
  }
}
class Er extends ai {
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
const Pr = /* @__PURE__ */ new ci(), Or = /* @__PURE__ */ new Er(), Ir = /* @__PURE__ */ new ci(!0);
const fs = (e) => e, cn = (e) => Reflect.getPrototypeOf(e);
function Rr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ J(o), r = kt(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, u = o[e](...s), f = n ? fs : t ? Yt : rt;
    return !t && be(
      i,
      "iterate",
      a ? cs : At
    ), re(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: h, done: b } = u.next();
          return b ? { value: h, done: b } : {
            value: l ? [f(h[0]), f(h[1])] : f(h),
            done: b
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
function Lr(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ J(i), l = /* @__PURE__ */ J(o);
      e || (qe(o, l) && be(r, "get", o), be(r, "get", l));
      const { has: a } = cn(r), u = t ? fs : e ? Yt : rt;
      if (a.call(r, o))
        return u(i.get(o));
      if (a.call(r, l))
        return u(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && be(/* @__PURE__ */ J(o), "iterate", At), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ J(i), l = /* @__PURE__ */ J(o);
      return e || (qe(o, l) && be(r, "has", o), be(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ J(l), u = t ? fs : e ? Yt : rt;
      return !e && be(a, "iterate", At), l.forEach((f, h) => o.call(i, u(f), u(h), r));
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
        const i = /* @__PURE__ */ J(this), r = cn(i), l = /* @__PURE__ */ J(o), a = !t && !/* @__PURE__ */ Fe(o) && !/* @__PURE__ */ ut(o) ? l : o;
        return r.has.call(i, a) || qe(o, a) && r.has.call(i, o) || qe(l, a) && r.has.call(i, l) || (i.add(a), tt(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Fe(i) && !/* @__PURE__ */ ut(i) && (i = /* @__PURE__ */ J(i));
        const r = /* @__PURE__ */ J(this), { has: l, get: a } = cn(r);
        let u = l.call(r, o);
        u || (o = /* @__PURE__ */ J(o), u = l.call(r, o));
        const f = a.call(r, o);
        return r.set(o, i), u ? qe(i, f) && tt(r, "set", o, i) : tt(r, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ J(this), { has: r, get: l } = cn(i);
        let a = r.call(i, o);
        a || (o = /* @__PURE__ */ J(o), a = r.call(i, o)), l && l.call(i, o);
        const u = i.delete(o);
        return a && tt(i, "delete", o, void 0), u;
      },
      clear() {
        const o = /* @__PURE__ */ J(this), i = o.size !== 0, r = o.clear();
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
    n[o] = Rr(o, e, t);
  }), n;
}
function Is(e, t) {
  const n = Lr(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    Z(n, o) && o in s ? n : s,
    o,
    i
  );
}
const Hr = {
  get: /* @__PURE__ */ Is(!1, !1)
}, Mr = {
  get: /* @__PURE__ */ Is(!1, !0)
}, Fr = {
  get: /* @__PURE__ */ Is(!0, !1)
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
function Hn(e) {
  return /* @__PURE__ */ ut(e) ? e : Rs(
    e,
    !1,
    Pr,
    Hr,
    fi
  );
}
// @__NO_SIDE_EFFECTS__
function jr(e) {
  return Rs(
    e,
    !1,
    Ir,
    Mr,
    ui
  );
}
// @__NO_SIDE_EFFECTS__
function us(e) {
  return Rs(
    e,
    !0,
    Or,
    Fr,
    di
  );
}
function Rs(e, t, n, s, o) {
  if (!Y(e) || e.__v_raw && !(t && e.__v_isReactive))
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
function Et(e) {
  return /* @__PURE__ */ ut(e) ? /* @__PURE__ */ Et(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Fe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ls(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function J(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ J(t) : e;
}
function Br(e) {
  return !Z(e, "__v_skip") && Object.isExtensible(e) && Zo(e, "__v_skip", !0), e;
}
const rt = (e) => Y(e) ? /* @__PURE__ */ Hn(e) : e, Yt = (e) => Y(e) ? /* @__PURE__ */ us(e) : e;
// @__NO_SIDE_EFFECTS__
function ge(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return zr(e, !1);
}
function zr(e, t) {
  return /* @__PURE__ */ ge(e) ? e : new Ur(e, t);
}
class Ur {
  constructor(t, n) {
    this.dep = new Ps(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ J(t), this._value = n ? t : rt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Fe(t) || /* @__PURE__ */ ut(t);
    t = s ? t : /* @__PURE__ */ J(t), qe(t, n) && (this._rawValue = t, this._value = s ? t : rt(t), this.dep.trigger());
  }
}
function Hs(e) {
  return /* @__PURE__ */ ge(e) ? e.value : e;
}
function no(e) {
  return U(e) ? e() : Hs(e);
}
const Wr = {
  get: (e, t, n) => t === "__v_raw" ? e : Hs(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ ge(o) && !/* @__PURE__ */ ge(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function hi(e) {
  return /* @__PURE__ */ Et(e) ? e : new Proxy(e, Wr);
}
class Kr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ps(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
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
let _t;
function Gr(e, t = !1, n = _t) {
  if (n) {
    let s = mn.get(n);
    s || mn.set(n, s = []), s.push(e);
  }
}
function Jr(e, t, n = te) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = n, u = (y) => o ? y : /* @__PURE__ */ Fe(y) || o === !1 || o === 0 ? nt(y, 1) : nt(y);
  let f, h, b, A, x = !1, w = !1;
  if (/* @__PURE__ */ ge(e) ? (h = () => e.value, x = /* @__PURE__ */ Fe(e)) : /* @__PURE__ */ Et(e) ? (h = () => u(e), x = !0) : V(e) ? (w = !0, x = e.some((y) => /* @__PURE__ */ Et(y) || /* @__PURE__ */ Fe(y)), h = () => e.map((y) => {
    if (/* @__PURE__ */ ge(y))
      return y.value;
    if (/* @__PURE__ */ Et(y))
      return u(y);
    if (U(y))
      return a ? a(y, 2) : y();
  })) : U(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (b) {
      ot();
      try {
        b();
      } finally {
        it();
      }
    }
    const y = _t;
    _t = f;
    try {
      return a ? a(e, 3, [A]) : e(A);
    } finally {
      _t = y;
    }
  } : h = Je, t && o) {
    const y = h, O = o === !0 ? 1 / 0 : o;
    h = () => nt(y(), O);
  }
  const R = Ar(), L = () => {
    f.stop(), R && R.active && xs(R.effects, f);
  };
  if (i && t) {
    const y = t;
    t = (...O) => {
      y(...O), L();
    };
  }
  let I = w ? new Array(e.length).fill(un) : un;
  const E = (y) => {
    if (!(!(f.flags & 1) || !f.dirty && !y))
      if (t) {
        const O = f.run();
        if (o || x || (w ? O.some((B, z) => qe(B, I[z])) : qe(O, I))) {
          b && b();
          const B = _t;
          _t = f;
          try {
            const z = [
              O,
              // pass undefined as the old value when it's changed for the first time
              I === un ? void 0 : w && I[0] === un ? [] : I,
              A
            ];
            I = O, a ? a(t, 3, z) : (
              // @ts-expect-error
              t(...z)
            );
          } finally {
            _t = B;
          }
        }
      } else
        f.run();
  };
  return l && l(E), f = new $o(h), f.scheduler = r ? () => r(E, !1) : E, A = (y) => Gr(y, !1, f), b = f.onStop = () => {
    const y = mn.get(f);
    if (y) {
      if (a)
        a(y, 4);
      else
        for (const O of y) O();
      mn.delete(f);
    }
  }, t ? s ? E(!0) : I = f.run() : r ? r(E.bind(null, !0), !0) : f.run(), L.pause = f.pause.bind(f), L.resume = f.resume.bind(f), L.stop = L, L;
}
function nt(e, t = 1 / 0, n) {
  if (t <= 0 || !Y(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ge(e))
    nt(e.value, t, n);
  else if (V(e))
    for (let s = 0; s < e.length; s++)
      nt(e[s], t, n);
  else if (qo(e) || kt(e))
    e.forEach((s) => {
      nt(s, t, n);
    });
  else if (On(e)) {
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
    Mn(o, t, n);
  }
}
function Ne(e, t, n, s) {
  if (U(e)) {
    const o = on(e, t, n, s);
    return o && Go(o) && o.catch((i) => {
      Mn(i, t, n);
    }), o;
  }
  if (V(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Ne(e[i], t, n, s));
    return o;
  }
}
function Mn(e, t, n, s = !0) {
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
  Zr(e, n, o, s, r);
}
function Zr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Ae = [];
let ze = -1;
const Pt = [];
let ft = null, Ct = 0;
const pi = /* @__PURE__ */ Promise.resolve();
let bn = null;
function Ms(e) {
  const t = bn || pi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xr(e) {
  let t = ze + 1, n = Ae.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = Ae[s], i = Qt(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = Qt(e), n = Ae[Ae.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Qt(n) ? Ae.push(e) : Ae.splice(Xr(t), 0, e), e.flags |= 1, gi();
  }
}
function gi() {
  bn || (bn = pi.then(bi));
}
function Yr(e) {
  V(e) ? Pt.push(...e) : ft && e.id === -1 ? ft.splice(Ct + 1, 0, e) : e.flags & 1 || (Pt.push(e), e.flags |= 1), gi();
}
function so(e, t, n = ze + 1) {
  for (; n < Ae.length; n++) {
    const s = Ae[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ae.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function mi(e) {
  if (Pt.length) {
    const t = [...new Set(Pt)].sort(
      (n, s) => Qt(n) - Qt(s)
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
const Qt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function bi(e) {
  try {
    for (ze = 0; ze < Ae.length; ze++) {
      const t = Ae[ze];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), on(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ze < Ae.length; ze++) {
      const t = Ae[ze];
      t && (t.flags &= -2);
    }
    ze = -1, Ae.length = 0, mi(), bn = null, (Ae.length || Pt.length) && bi();
  }
}
let Pe = null, vi = null;
function vn(e) {
  const t = Pe;
  return Pe = e, vi = e && e.type.__scopeId || null, t;
}
function _i(e, t = Pe, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && xn(-1);
    const i = vn(t);
    let r;
    try {
      r = e(...o);
    } finally {
      vn(i), s._d && xn(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function _n(e, t) {
  if (Pe === null)
    return e;
  const n = Bn(Pe), s = e.dirs || (e.dirs = []);
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
  if (ve) {
    let n = ve.provides;
    const s = ve.parent && ve.parent.provides;
    s === n && (n = ve.provides = Object.create(s)), n[e] = t;
  }
}
function Ot(e, t, n = !1) {
  const s = Ws();
  if (s || It) {
    let o = It ? It._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && U(t) ? t.call(s && s.proxy) : t;
  }
}
const Qr = /* @__PURE__ */ Symbol.for("v-scx"), $r = () => Ot(Qr);
function xt(e, t, n) {
  return yi(e, t, n);
}
function yi(e, t, n = te) {
  const { immediate: s, deep: o, flush: i, once: r } = n, l = re({}, n), a = t && s || !t && i !== "post";
  let u;
  if (tn) {
    if (i === "sync") {
      const A = $r();
      u = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!a) {
      const A = () => {
      };
      return A.stop = Je, A.resume = Je, A.pause = Je, A;
    }
  }
  const f = ve;
  l.call = (A, x, w) => Ne(A, f, x, w);
  let h = !1;
  i === "post" ? l.scheduler = (A) => {
    me(A, f && f.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (A, x) => {
    x ? A() : Fs(A);
  }), l.augmentJob = (A) => {
    t && (A.flags |= 4), h && (A.flags |= 2, f && (A.id = f.uid, A.i = f));
  };
  const b = Jr(e, t, l);
  return tn && (u ? u.push(b) : a && b()), b;
}
function el(e, t, n) {
  const s = this.proxy, o = ae(e) ? e.includes(".") ? Ai(s, e) : () => s[e] : e.bind(s, s);
  let i;
  U(t) ? i = t : (i = t.handler, n = t);
  const r = rn(this), l = yi(o, i.bind(s), n);
  return r(), l;
}
function Ai(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const xi = /* @__PURE__ */ Symbol("_vte"), wi = (e) => e.__isTeleport, Ut = (e) => e && (e.disabled || e.disabled === ""), tl = (e) => e && (e.defer || e.defer === ""), oo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, io = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ds = (e, t) => {
  const n = e && e.to;
  return ae(n) ? t ? t(n) : null : n;
}, Si = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, r, l, a, u) {
    const {
      mc: f,
      pc: h,
      pbc: b,
      o: { insert: A, querySelector: x, createText: w, createComment: R }
    } = u, L = Ut(t.props);
    let { shapeFlag: I, children: E, dynamicChildren: y } = t;
    if (e == null) {
      const O = t.el = w(""), B = t.anchor = w("");
      A(O, n, s), A(B, n, s);
      const z = (H, W) => {
        I & 16 && f(
          E,
          H,
          W,
          o,
          i,
          r,
          l,
          a
        );
      }, Q = () => {
        const H = t.target = ds(t.props, x), W = hs(H, t, w, A);
        H && (r !== "svg" && oo(H) ? r = "svg" : r !== "mathml" && io(H) && (r = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(H), L || (z(H, W), hn(t, !1)));
      };
      L && (z(n, B), hn(t, !0)), tl(t.props) || i && i.pendingBranch ? (t.el.__isMounted = !1, me(() => {
        t.el.__isMounted === !1 && (Q(), delete t.el.__isMounted);
      }, i)) : Q();
    } else {
      t.el = e.el, t.targetStart = e.targetStart;
      const O = t.anchor = e.anchor, B = t.target = e.target, z = t.targetAnchor = e.targetAnchor;
      if (e.el.__isMounted === !1) {
        me(() => {
          Si.process(
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
      const Q = Ut(e.props), H = Q ? n : B, W = Q ? O : z;
      if (r === "svg" || oo(B) ? r = "svg" : (r === "mathml" || io(B)) && (r = "mathml"), y ? (b(
        e.dynamicChildren,
        y,
        H,
        o,
        i,
        r,
        l
      ), zs(e, t, !0)) : a || h(
        e,
        t,
        H,
        W,
        o,
        i,
        r,
        l,
        !1
      ), L)
        Q ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : dn(
          t,
          n,
          O,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = t.target = ds(
          t.props,
          x
        );
        F && dn(
          t,
          F,
          null,
          u,
          0
        );
      } else Q && dn(
        t,
        B,
        z,
        u,
        1
      );
      hn(t, L);
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
      props: b
    } = e;
    if (h && (o(u), o(f)), i && o(a), r & 16) {
      const A = i || !Ut(b);
      for (let x = 0; x < l.length; x++) {
        const w = l[x];
        s(
          w,
          t,
          n,
          A,
          !!w.dynamicChildren
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
    for (let b = 0; b < u.length; b++)
      o(
        u[b],
        t,
        n,
        2
      );
  h && s(l, t, n);
}
function nl(e, t, n, s, o, i, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: u, createText: f }
}, h) {
  function b(R, L) {
    let I = L;
    for (; I; ) {
      if (I && I.nodeType === 8) {
        if (I.data === "teleport start anchor")
          t.targetStart = I;
        else if (I.data === "teleport anchor") {
          t.targetAnchor = I, R._lpa = t.targetAnchor && r(t.targetAnchor);
          break;
        }
      }
      I = r(I);
    }
  }
  function A(R, L) {
    L.anchor = h(
      r(R),
      L,
      l(R),
      n,
      s,
      o,
      i
    );
  }
  const x = t.target = ds(
    t.props,
    a
  ), w = Ut(t.props);
  if (x) {
    const R = x._lpa || x.firstChild;
    t.shapeFlag & 16 && (w ? (A(e, t), b(x, R), t.targetAnchor || hs(
      x,
      t,
      f,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === x ? e : null
    )) : (t.anchor = r(e), b(x, R), t.targetAnchor || hs(x, t, f, u), h(
      R && r(R),
      t,
      x,
      n,
      s,
      o,
      i
    ))), hn(t, w);
  } else w && t.shapeFlag & 16 && (A(e, t), t.targetStart = e, t.targetAnchor = r(e));
  return t.anchor && r(t.anchor);
}
const sl = Si;
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
  return i[xi] = r, e && (s(i, e, o), s(r, e, o)), r;
}
const Ue = /* @__PURE__ */ Symbol("_leaveCb"), Ft = /* @__PURE__ */ Symbol("_enterCb");
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
const Ie = [Function, Array], Ci = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ie,
  onEnter: Ie,
  onAfterEnter: Ie,
  onEnterCancelled: Ie,
  // leave
  onBeforeLeave: Ie,
  onLeave: Ie,
  onAfterLeave: Ie,
  onLeaveCancelled: Ie,
  // appear
  onBeforeAppear: Ie,
  onAppear: Ie,
  onAfterAppear: Ie,
  onAppearCancelled: Ie
}, Ti = (e) => {
  const t = e.subTree;
  return t.component ? Ti(t.component) : t;
}, il = {
  name: "BaseTransition",
  props: Ci,
  setup(e, { slots: t }) {
    const n = Ws(), s = ol();
    return () => {
      const o = t.default && Pi(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = ki(o), r = /* @__PURE__ */ J(e), { mode: l } = r;
      if (s.isLeaving)
        return Yn(i);
      const a = ro(i);
      if (!a)
        return Yn(i);
      let u = ps(
        a,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => u = h
      );
      a.type !== xe && $t(a, u);
      let f = n.subTree && ro(n.subTree);
      if (f && f.type !== xe && !yt(f, a) && Ti(n).type !== xe) {
        let h = ps(
          f,
          r,
          s,
          n
        );
        if ($t(f, h), l === "out-in" && a.type !== xe)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, f = void 0;
          }, Yn(i);
        l === "in-out" && a.type !== xe ? h.delayLeave = (b, A, x) => {
          const w = Ei(
            s,
            f
          );
          w[String(f.key)] = f, b[Ue] = () => {
            A(), b[Ue] = void 0, delete u.delayedLeave, f = void 0;
          }, u.delayedLeave = () => {
            x(), delete u.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return i;
    };
  }
};
function ki(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== xe) {
        t = n;
        break;
      }
  }
  return t;
}
const rl = il;
function Ei(e, t) {
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
    onBeforeLeave: b,
    onLeave: A,
    onAfterLeave: x,
    onLeaveCancelled: w,
    onBeforeAppear: R,
    onAppear: L,
    onAfterAppear: I,
    onAppearCancelled: E
  } = t, y = String(e.key), O = Ei(n, e), B = (H, W) => {
    H && Ne(
      H,
      s,
      9,
      W
    );
  }, z = (H, W) => {
    const F = W[1];
    B(H, W), V(H) ? H.every((k) => k.length <= 1) && F() : H.length <= 1 && F();
  }, Q = {
    mode: r,
    persisted: l,
    beforeEnter(H) {
      let W = a;
      if (!n.isMounted)
        if (i)
          W = R || a;
        else
          return;
      H[Ue] && H[Ue](
        !0
        /* cancelled */
      );
      const F = O[y];
      F && yt(e, F) && F.el[Ue] && F.el[Ue](), B(W, [H]);
    },
    enter(H) {
      if (O[y] === e) return;
      let W = u, F = f, k = h;
      if (!n.isMounted)
        if (i)
          W = L || u, F = I || f, k = E || h;
        else
          return;
      let K = !1;
      H[Ft] = (ke) => {
        K || (K = !0, ke ? B(k, [H]) : B(F, [H]), Q.delayedLeave && Q.delayedLeave(), H[Ft] = void 0);
      };
      const ie = H[Ft].bind(null, !1);
      W ? z(W, [H, ie]) : ie();
    },
    leave(H, W) {
      const F = String(e.key);
      if (H[Ft] && H[Ft](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return W();
      B(b, [H]);
      let k = !1;
      H[Ue] = (ie) => {
        k || (k = !0, W(), ie ? B(w, [H]) : B(x, [H]), H[Ue] = void 0, O[F] === e && delete O[F]);
      };
      const K = H[Ue].bind(null, !1);
      O[F] = e, A ? z(A, [H, K]) : K();
    },
    clone(H) {
      const W = ps(
        H,
        t,
        n,
        s,
        o
      );
      return o && o(W), W;
    }
  };
  return Q;
}
function Yn(e) {
  if (Fn(e))
    return e = dt(e), e.children = null, e;
}
function ro(e) {
  if (!Fn(e))
    return wi(e.type) && e.children ? ki(e.children) : e;
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
function $t(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, $t(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Pi(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === Te ? (r.patchFlag & 128 && o++, s = s.concat(
      Pi(r.children, t, l)
    )) : (t || r.type !== xe) && s.push(l != null ? dt(r, { key: l }) : r);
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
function Oi(e) {
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
      (w, R) => Wt(
        w,
        t && (V(t) ? t[R] : t),
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
  const i = s.shapeFlag & 4 ? Bn(s.component) : s.el, r = o ? null : i, { i: l, r: a } = e, u = t && t.r, f = l.refs === te ? l.refs = {} : l.refs, h = l.setupState, b = /* @__PURE__ */ J(h), A = h === te ? Ko : (w) => lo(f, w) ? !1 : Z(b, w), x = (w, R) => !(R && lo(f, R));
  if (u != null && u !== a) {
    if (ao(t), ae(u))
      f[u] = null, A(u) && (h[u] = null);
    else if (/* @__PURE__ */ ge(u)) {
      const w = t;
      x(u, w.k) && (u.value = null), w.k && (f[w.k] = null);
    }
  }
  if (U(a))
    on(a, l, 12, [r, f]);
  else {
    const w = ae(a), R = /* @__PURE__ */ ge(a);
    if (w || R) {
      const L = () => {
        if (e.f) {
          const I = w ? A(a) ? h[a] : f[a] : x() || !e.k ? a.value : f[e.k];
          if (o)
            V(I) && xs(I, i);
          else if (V(I))
            I.includes(i) || I.push(i);
          else if (w)
            f[a] = [i], A(a) && (h[a] = f[a]);
          else {
            const E = [i];
            x(a, e.k) && (a.value = E), e.k && (f[e.k] = E);
          }
        } else w ? (f[a] = r, A(a) && (h[a] = r)) : R && (x(a, e.k) && (a.value = r), e.k && (f[e.k] = r));
      };
      if (r) {
        const I = () => {
          L(), yn.delete(e);
        };
        I.id = -1, yn.set(e, I), me(I, n);
      } else
        ao(e), L();
    }
  }
}
function ao(e) {
  const t = yn.get(e);
  t && (t.flags |= 8, yn.delete(e));
}
Ln().requestIdleCallback;
Ln().cancelIdleCallback;
const Kt = (e) => !!e.type.__asyncLoader, Fn = (e) => e.type.__isKeepAlive;
function al(e, t) {
  Ii(e, "a", t);
}
function cl(e, t) {
  Ii(e, "da", t);
}
function Ii(e, t, n = ve) {
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
      Fn(o.parent.vnode) && fl(s, t, n, o), o = o.parent;
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
    xs(s[t], o);
  }, n);
}
function Nn(e, t, n = ve, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      ot();
      const l = rn(n), a = Ne(t, n, e, r);
      return l(), it(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const lt = (e) => (t, n = ve) => {
  (!tn || e === "sp") && Nn(e, (...s) => t(...s), n);
}, ul = lt("bm"), Dn = lt("m"), dl = lt(
  "bu"
), hl = lt("u"), Ds = lt(
  "bum"
), Vs = lt("um"), pl = lt(
  "sp"
), gl = lt("rtg"), ml = lt("rtc");
function bl(e, t = ve) {
  Nn("ec", e, t);
}
const vl = "components";
function Ge(e, t) {
  return yl(vl, e, !0, t) || e;
}
const _l = /* @__PURE__ */ Symbol.for("v-ndc");
function yl(e, t, n = !0, s = !1) {
  const o = Pe || ve;
  if (o) {
    const i = o.type;
    {
      const l = oa(
        i,
        !1
      );
      if (l && (l === t || l === de(t) || l === Rn(de(t))))
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
  return e && (e[t] || e[de(t)] || e[Rn(de(t))]);
}
const gs = (e) => e ? Xi(e) ? Bn(e) : gs(e.parent) : null, qt = (
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
    $options: (e) => Li(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ms.bind(e.proxy)),
    $watch: (e) => el.bind(e)
  })
), Qn = (e, t) => e !== te && !e.__isScriptSetup && Z(e, t), Al = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const b = r[t];
      if (b !== void 0)
        switch (b) {
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
        if (Qn(s, t))
          return r[t] = 1, s[t];
        if (o !== te && Z(o, t))
          return r[t] = 2, o[t];
        if (Z(i, t))
          return r[t] = 3, i[t];
        if (n !== te && Z(n, t))
          return r[t] = 4, n[t];
        ms && (r[t] = 0);
      }
    }
    const u = qt[t];
    let f, h;
    if (u)
      return t === "$attrs" && be(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== te && Z(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, Z(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return Qn(o, t) ? (o[t] = n, !0) : s !== te && Z(s, t) ? (s[t] = n, !0) : Z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: r }
  }, l) {
    let a;
    return !!(n[l] || e !== te && l[0] !== "$" && Z(e, l) || Qn(t, l) || Z(i, l) || Z(s, l) || Z(qt, l) || Z(o.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function fo(e) {
  return V(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ms = !0;
function xl(e) {
  const t = Li(e), n = e.proxy, s = e.ctx;
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
    mounted: b,
    beforeUpdate: A,
    updated: x,
    activated: w,
    deactivated: R,
    beforeDestroy: L,
    beforeUnmount: I,
    destroyed: E,
    unmounted: y,
    render: O,
    renderTracked: B,
    renderTriggered: z,
    errorCaptured: Q,
    serverPrefetch: H,
    // public API
    expose: W,
    inheritAttrs: F,
    // assets
    components: k,
    directives: K,
    filters: ie
  } = t;
  if (u && wl(u, s, null), r)
    for (const ne in r) {
      const G = r[ne];
      U(G) && (s[ne] = G.bind(n));
    }
  if (o) {
    const ne = o.call(n, n);
    Y(ne) && (e.data = /* @__PURE__ */ Hn(ne));
  }
  if (ms = !0, i)
    for (const ne in i) {
      const G = i[ne], Xe = U(G) ? G.bind(n, n) : U(G.get) ? G.get.bind(n, n) : Je, wt = !U(G) && U(G.set) ? G.set.bind(n) : Je, we = ue({
        get: Xe,
        set: wt
      });
      Object.defineProperty(s, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (Se) => we.value = Se
      });
    }
  if (l)
    for (const ne in l)
      Ri(l[ne], s, n, ne);
  if (a) {
    const ne = U(a) ? a.call(n) : a;
    Reflect.ownKeys(ne).forEach((G) => {
      Ns(G, ne[G]);
    });
  }
  f && uo(f, e, "c");
  function ce(ne, G) {
    V(G) ? G.forEach((Xe) => ne(Xe.bind(n))) : G && ne(G.bind(n));
  }
  if (ce(ul, h), ce(Dn, b), ce(dl, A), ce(hl, x), ce(al, w), ce(cl, R), ce(bl, Q), ce(ml, B), ce(gl, z), ce(Ds, I), ce(Vs, y), ce(pl, H), V(W))
    if (W.length) {
      const ne = e.exposed || (e.exposed = {});
      W.forEach((G) => {
        Object.defineProperty(ne, G, {
          get: () => n[G],
          set: (Xe) => n[G] = Xe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Je && (e.render = O), F != null && (e.inheritAttrs = F), k && (e.components = k), K && (e.directives = K), H && Oi(e);
}
function wl(e, t, n = Je) {
  V(e) && (e = bs(e));
  for (const s in e) {
    const o = e[s];
    let i;
    Y(o) ? "default" in o ? i = Ot(
      o.from || s,
      o.default,
      !0
    ) : i = Ot(o.from || s) : i = Ot(o), /* @__PURE__ */ ge(i) ? Object.defineProperty(t, s, {
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
function Ri(e, t, n, s) {
  let o = s.includes(".") ? Ai(n, s) : () => n[s];
  if (ae(e)) {
    const i = t[e];
    U(i) && xt(o, i);
  } else if (U(e))
    xt(o, e.bind(n));
  else if (Y(e))
    if (V(e))
      e.forEach((i) => Ri(i, t, n, s));
    else {
      const i = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(i) && xt(o, i, e);
    }
}
function Li(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (u) => An(a, u, r, !0)
  ), An(a, t, r)), Y(t) && i.set(t, a), a;
}
function An(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && An(e, i, n, !0), o && o.forEach(
    (r) => An(e, r, n, !0)
  );
  for (const r in t)
    if (!(s && r === "expose")) {
      const l = Sl[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const Sl = {
  data: ho,
  props: po,
  emits: po,
  // objects
  methods: Vt,
  computed: Vt,
  // lifecycle
  beforeCreate: _e,
  created: _e,
  beforeMount: _e,
  mounted: _e,
  beforeUpdate: _e,
  updated: _e,
  beforeDestroy: _e,
  beforeUnmount: _e,
  destroyed: _e,
  unmounted: _e,
  activated: _e,
  deactivated: _e,
  errorCaptured: _e,
  serverPrefetch: _e,
  // assets
  components: Vt,
  directives: Vt,
  // watch
  watch: Tl,
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
  return Vt(bs(e), bs(t));
}
function bs(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function _e(e, t) {
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
function Tl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = re(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = _e(e[s], t[s]);
  return n;
}
function Hi() {
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
let kl = 0;
function El(e, t) {
  return function(s, o = null) {
    U(s) || (s = re({}, s)), o != null && !Y(o) && (o = null);
    const i = Hi(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = i.app = {
      _uid: kl++,
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
      mount(f, h, b) {
        if (!a) {
          const A = u._ceVNode || $(s, o);
          return A.appContext = i, b === !0 ? b = "svg" : b === !1 && (b = void 0), e(A, f, b), a = !0, u._container = f, f.__vue_app__ = u, Bn(A.component);
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
        const h = It;
        It = u;
        try {
          return f();
        } finally {
          It = h;
        }
      }
    };
    return u;
  };
}
let It = null;
const Pl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${de(t)}Modifiers`] || e[`${Le(t)}Modifiers`];
function Ol(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || te;
  let o = n;
  const i = t.startsWith("update:"), r = i && Pl(s, t.slice(7));
  r && (r.trim && (o = n.map((f) => ae(f) ? f.trim() : f)), r.number && (o = n.map(dr)));
  let l, a = s[l = Kn(t)] || // also try camelCase event handler (#2249)
  s[l = Kn(de(t))];
  !a && i && (a = s[l = Kn(Le(t))]), a && Ne(
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
const Il = /* @__PURE__ */ new WeakMap();
function Mi(e, t, n = !1) {
  const s = n ? Il : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!U(e)) {
    const a = (u) => {
      const f = Mi(u, t, !0);
      f && (l = !0, re(r, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (Y(e) && s.set(e, null), null) : (V(i) ? i.forEach((a) => r[a] = null) : re(r, i), Y(e) && s.set(e, r), r);
}
function Vn(e, t) {
  return !e || !En(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Z(e, t[0].toLowerCase() + t.slice(1)) || Z(e, Le(t)) || Z(e, t));
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
    data: b,
    setupState: A,
    ctx: x,
    inheritAttrs: w
  } = e, R = vn(e);
  let L, I;
  try {
    if (n.shapeFlag & 4) {
      const y = o || s, O = y;
      L = Ke(
        u.call(
          O,
          y,
          f,
          h,
          A,
          b,
          x
        )
      ), I = l;
    } else {
      const y = t;
      L = Ke(
        y.length > 1 ? y(
          h,
          { attrs: l, slots: r, emit: a }
        ) : y(
          h,
          null
        )
      ), I = t.props ? l : Rl(l);
    }
  } catch (y) {
    Gt.length = 0, Mn(y, e, 1), L = $(xe);
  }
  let E = L;
  if (I && w !== !1) {
    const y = Object.keys(I), { shapeFlag: O } = E;
    y.length && O & 7 && (i && y.some(Pn) && (I = Ll(
      I,
      i
    )), E = dt(E, I, !1, !0));
  }
  return n.dirs && (E = dt(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && $t(E, n.transition), L = E, vn(R), L;
}
const Rl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || En(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ll = (e, t) => {
  const n = {};
  for (const s in e)
    (!Pn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Hl(e, t, n) {
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
        const b = f[h];
        if (Fi(r, s, b) && !Vn(u, b))
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
    if (Fi(t, e, i) && !Vn(n, i))
      return !0;
  }
  return !1;
}
function Fi(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && Y(s) && Y(o) ? !Cs(s, o) : s !== o;
}
function Ml({ vnode: e, parent: t, suspense: n }, s) {
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
function Fl(e, t, n, s = !1) {
  const o = {}, i = Di();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ji(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ jr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function Nl(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ J(o), [a] = e.propsOptions;
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
        let b = f[h];
        if (Vn(e.emitsOptions, b))
          continue;
        const A = t[b];
        if (a)
          if (Z(i, b))
            A !== i[b] && (i[b] = A, u = !0);
          else {
            const x = de(b);
            o[x] = vs(
              a,
              l,
              x,
              A,
              e,
              !1
            );
          }
        else
          A !== i[b] && (i[b] = A, u = !0);
      }
    }
  } else {
    ji(e, t, o, i) && (u = !0);
    let f;
    for (const h in l)
      (!t || // for camelCase
      !Z(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Le(h)) === h || !Z(t, f))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[f] !== void 0) && (o[h] = vs(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete o[h]);
    if (i !== l)
      for (const h in i)
        (!t || !Z(t, h)) && (delete i[h], u = !0);
  }
  u && tt(e.attrs, "set", "");
}
function ji(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (jt(a))
        continue;
      const u = t[a];
      let f;
      o && Z(o, f = de(a)) ? !i || !i.includes(f) ? n[f] = u : (l || (l = {}))[f] = u : Vn(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, r = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ J(n), u = l || te;
    for (let f = 0; f < i.length; f++) {
      const h = i[f];
      n[h] = vs(
        o,
        a,
        h,
        u[h],
        e,
        !Z(u, h)
      );
    }
  }
  return r;
}
function vs(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = Z(r, "default");
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
    ] && (s === "" || s === Le(n)) && (s = !0));
  }
  return s;
}
const Dl = /* @__PURE__ */ new WeakMap();
function Bi(e, t, n = !1) {
  const s = n ? Dl : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let a = !1;
  if (!U(e)) {
    const f = (h) => {
      a = !0;
      const [b, A] = Bi(h, t, !0);
      re(r, b), A && l.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !a)
    return Y(e) && s.set(e, Tt), Tt;
  if (V(i))
    for (let f = 0; f < i.length; f++) {
      const h = de(i[f]);
      bo(h) && (r[h] = te);
    }
  else if (i)
    for (const f in i) {
      const h = de(f);
      if (bo(h)) {
        const b = i[f], A = r[h] = V(b) || U(b) ? { type: b } : re({}, b), x = A.type;
        let w = !1, R = !0;
        if (V(x))
          for (let L = 0; L < x.length; ++L) {
            const I = x[L], E = U(I) && I.name;
            if (E === "Boolean") {
              w = !0;
              break;
            } else E === "String" && (R = !1);
          }
        else
          w = U(x) && x.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = w, A[
          1
          /* shouldCastTrue */
        ] = R, (w || Z(A, "default")) && l.push(h);
      }
    }
  const u = [r, l];
  return Y(e) && s.set(e, u), u;
}
function bo(e) {
  return e[0] !== "$" && !jt(e);
}
const js = (e) => e === "_" || e === "_ctx" || e === "$stable", Bs = (e) => V(e) ? e.map(Ke) : [Ke(e)], Vl = (e, t, n) => {
  if (t._n)
    return t;
  const s = _i((...o) => Bs(t(...o)), n);
  return s._c = !1, s;
}, zi = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (js(o)) continue;
    const i = e[o];
    if (U(i))
      t[o] = Vl(o, i, s);
    else if (i != null) {
      const r = Bs(i);
      t[o] = () => r;
    }
  }
}, Ui = (e, t) => {
  const n = Bs(t);
  e.slots.default = () => n;
}, Wi = (e, t, n) => {
  for (const s in t)
    (n || !js(s)) && (e[s] = t[s]);
}, jl = (e, t, n) => {
  const s = e.slots = Di();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Wi(s, t, n), n && Zo(s, "_", o, !0)) : zi(t, s);
  } else t && Ui(e, t);
}, Bl = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = te;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Wi(o, t, n) : (i = !t.$stable, zi(t, o)), r = t;
  } else t && (Ui(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !js(l) && r[l] == null && delete o[l];
}, me = ql;
function zl(e) {
  return Ul(e);
}
function Ul(e, t) {
  const n = Ln();
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
    nextSibling: b,
    setScopeId: A = Je,
    insertStaticContent: x
  } = e, w = (c, d, m, v = null, g = null, p = null, C = void 0, T = null, S = !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !yt(c, d) && (v = ht(c), Se(c, g, p, !0), c = null), d.patchFlag === -2 && (S = !1, d.dynamicChildren = null);
    const { type: _, ref: N, shapeFlag: P } = d;
    switch (_) {
      case jn:
        R(c, d, m, v);
        break;
      case xe:
        L(c, d, m, v);
        break;
      case es:
        c == null && I(d, m, v, C);
        break;
      case Te:
        k(
          c,
          d,
          m,
          v,
          g,
          p,
          C,
          T,
          S
        );
        break;
      default:
        P & 1 ? O(
          c,
          d,
          m,
          v,
          g,
          p,
          C,
          T,
          S
        ) : P & 6 ? K(
          c,
          d,
          m,
          v,
          g,
          p,
          C,
          T,
          S
        ) : (P & 64 || P & 128) && _.process(
          c,
          d,
          m,
          v,
          g,
          p,
          C,
          T,
          S,
          pt
        );
    }
    N != null && g ? Wt(N, c && c.ref, p, d || c, !d) : N == null && c && c.ref != null && Wt(c.ref, null, p, c, !0);
  }, R = (c, d, m, v) => {
    if (c == null)
      s(
        d.el = l(d.children),
        m,
        v
      );
    else {
      const g = d.el = c.el;
      d.children !== c.children && u(g, d.children);
    }
  }, L = (c, d, m, v) => {
    c == null ? s(
      d.el = a(d.children || ""),
      m,
      v
    ) : d.el = c.el;
  }, I = (c, d, m, v) => {
    [c.el, c.anchor] = x(
      c.children,
      d,
      m,
      v,
      c.el,
      c.anchor
    );
  }, E = ({ el: c, anchor: d }, m, v) => {
    let g;
    for (; c && c !== d; )
      g = b(c), s(c, m, v), c = g;
    s(d, m, v);
  }, y = ({ el: c, anchor: d }) => {
    let m;
    for (; c && c !== d; )
      m = b(c), o(c), c = m;
    o(d);
  }, O = (c, d, m, v, g, p, C, T, S) => {
    if (d.type === "svg" ? C = "svg" : d.type === "math" && (C = "mathml"), c == null)
      B(
        d,
        m,
        v,
        g,
        p,
        C,
        T,
        S
      );
    else {
      const _ = c.el && c.el._isVueCE ? c.el : null;
      try {
        _ && _._beginPatch(), H(
          c,
          d,
          g,
          p,
          C,
          T,
          S
        );
      } finally {
        _ && _._endPatch();
      }
    }
  }, B = (c, d, m, v, g, p, C, T) => {
    let S, _;
    const { props: N, shapeFlag: P, transition: M, dirs: j } = c;
    if (S = c.el = r(
      c.type,
      p,
      N && N.is,
      N
    ), P & 8 ? f(S, c.children) : P & 16 && Q(
      c.children,
      S,
      null,
      v,
      g,
      $n(c, p),
      C,
      T
    ), j && gt(c, null, v, "created"), z(S, c, c.scopeId, C, v), N) {
      for (const ee in N)
        ee !== "value" && !jt(ee) && i(S, ee, null, N[ee], p, v);
      "value" in N && i(S, "value", null, N.value, p), (_ = N.onVnodeBeforeMount) && Be(_, v, c);
    }
    j && gt(c, null, v, "beforeMount");
    const q = Wl(g, M);
    q && M.beforeEnter(S), s(S, d, m), ((_ = N && N.onVnodeMounted) || q || j) && me(() => {
      _ && Be(_, v, c), q && M.enter(S), j && gt(c, null, v, "mounted");
    }, g);
  }, z = (c, d, m, v, g) => {
    if (m && A(c, m), v)
      for (let p = 0; p < v.length; p++)
        A(c, v[p]);
    if (g) {
      let p = g.subTree;
      if (d === p || Gi(p.type) && (p.ssContent === d || p.ssFallback === d)) {
        const C = g.vnode;
        z(
          c,
          C,
          C.scopeId,
          C.slotScopeIds,
          g.parent
        );
      }
    }
  }, Q = (c, d, m, v, g, p, C, T, S = 0) => {
    for (let _ = S; _ < c.length; _++) {
      const N = c[_] = T ? et(c[_]) : Ke(c[_]);
      w(
        null,
        N,
        d,
        m,
        v,
        g,
        p,
        C,
        T
      );
    }
  }, H = (c, d, m, v, g, p, C) => {
    const T = d.el = c.el;
    let { patchFlag: S, dynamicChildren: _, dirs: N } = d;
    S |= c.patchFlag & 16;
    const P = c.props || te, M = d.props || te;
    let j;
    if (m && mt(m, !1), (j = M.onVnodeBeforeUpdate) && Be(j, m, d, c), N && gt(d, c, m, "beforeUpdate"), m && mt(m, !0), (P.innerHTML && M.innerHTML == null || P.textContent && M.textContent == null) && f(T, ""), _ ? W(
      c.dynamicChildren,
      _,
      T,
      m,
      v,
      $n(d, g),
      p
    ) : C || G(
      c,
      d,
      T,
      null,
      m,
      v,
      $n(d, g),
      p,
      !1
    ), S > 0) {
      if (S & 16)
        F(T, P, M, m, g);
      else if (S & 2 && P.class !== M.class && i(T, "class", null, M.class, g), S & 4 && i(T, "style", P.style, M.style, g), S & 8) {
        const q = d.dynamicProps;
        for (let ee = 0; ee < q.length; ee++) {
          const se = q[ee], fe = P[se], he = M[se];
          (he !== fe || se === "value") && i(T, se, fe, he, g, m);
        }
      }
      S & 1 && c.children !== d.children && f(T, d.children);
    } else !C && _ == null && F(T, P, M, m, g);
    ((j = M.onVnodeUpdated) || N) && me(() => {
      j && Be(j, m, d, c), N && gt(d, c, m, "updated");
    }, v);
  }, W = (c, d, m, v, g, p, C) => {
    for (let T = 0; T < d.length; T++) {
      const S = c[T], _ = d[T], N = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !yt(S, _) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? h(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      w(
        S,
        _,
        N,
        null,
        v,
        g,
        p,
        C,
        !0
      );
    }
  }, F = (c, d, m, v, g) => {
    if (d !== m) {
      if (d !== te)
        for (const p in d)
          !jt(p) && !(p in m) && i(
            c,
            p,
            d[p],
            null,
            g,
            v
          );
      for (const p in m) {
        if (jt(p)) continue;
        const C = m[p], T = d[p];
        C !== T && p !== "value" && i(c, p, T, C, g, v);
      }
      "value" in m && i(c, "value", d.value, m.value, g);
    }
  }, k = (c, d, m, v, g, p, C, T, S) => {
    const _ = d.el = c ? c.el : l(""), N = d.anchor = c ? c.anchor : l("");
    let { patchFlag: P, dynamicChildren: M, slotScopeIds: j } = d;
    j && (T = T ? T.concat(j) : j), c == null ? (s(_, m, v), s(N, m, v), Q(
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
      T,
      S
    )) : P > 0 && P & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === M.length ? (W(
      c.dynamicChildren,
      M,
      m,
      g,
      p,
      C,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || g && d === g.subTree) && zs(
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
      T,
      S
    );
  }, K = (c, d, m, v, g, p, C, T, S) => {
    d.slotScopeIds = T, c == null ? d.shapeFlag & 512 ? g.ctx.activate(
      d,
      m,
      v,
      C,
      S
    ) : ie(
      d,
      m,
      v,
      g,
      p,
      C,
      S
    ) : ke(c, d, S);
  }, ie = (c, d, m, v, g, p, C) => {
    const T = c.component = $l(
      c,
      v,
      g
    );
    if (Fn(c) && (T.ctx.renderer = pt), ea(T, !1, C), T.asyncDep) {
      if (g && g.registerDep(T, ce, C), !c.el) {
        const S = T.subTree = $(xe);
        L(null, S, d, m), c.placeholder = S.el;
      }
    } else
      ce(
        T,
        c,
        d,
        m,
        g,
        p,
        C
      );
  }, ke = (c, d, m) => {
    const v = d.component = c.component;
    if (Hl(c, d, m))
      if (v.asyncDep && !v.asyncResolved) {
        ne(v, d, m);
        return;
      } else
        v.next = d, v.update();
    else
      d.el = c.el, v.vnode = d;
  }, ce = (c, d, m, v, g, p, C) => {
    const T = () => {
      if (c.isMounted) {
        let { next: P, bu: M, u: j, parent: q, vnode: ee } = c;
        {
          const Ve = Ki(c);
          if (Ve) {
            P && (P.el = ee.el, ne(c, P, C)), Ve.asyncDep.then(() => {
              me(() => {
                c.isUnmounted || _();
              }, g);
            });
            return;
          }
        }
        let se = P, fe;
        mt(c, !1), P ? (P.el = ee.el, ne(c, P, C)) : P = ee, M && qn(M), (fe = P.props && P.props.onVnodeBeforeUpdate) && Be(fe, q, P, ee), mt(c, !0);
        const he = go(c), De = c.subTree;
        c.subTree = he, w(
          De,
          he,
          // parent may have changed if it's in a teleport
          h(De.el),
          // anchor may have changed if it's in a fragment
          ht(De),
          c,
          g,
          p
        ), P.el = he.el, se === null && Ml(c, he.el), j && me(j, g), (fe = P.props && P.props.onVnodeUpdated) && me(
          () => Be(fe, q, P, ee),
          g
        );
      } else {
        let P;
        const { el: M, props: j } = d, { bm: q, m: ee, parent: se, root: fe, type: he } = c, De = Kt(d);
        mt(c, !1), q && qn(q), !De && (P = j && j.onVnodeBeforeMount) && Be(P, se, d), mt(c, !0);
        {
          fe.ce && fe.ce._hasShadowRoot() && fe.ce._injectChildStyle(
            he,
            c.parent ? c.parent.type : void 0
          );
          const Ve = c.subTree = go(c);
          w(
            null,
            Ve,
            m,
            v,
            c,
            g,
            p
          ), d.el = Ve.el;
        }
        if (ee && me(ee, g), !De && (P = j && j.onVnodeMounted)) {
          const Ve = d;
          me(
            () => Be(P, se, Ve),
            g
          );
        }
        (d.shapeFlag & 256 || se && Kt(se.vnode) && se.vnode.shapeFlag & 256) && c.a && me(c.a, g), c.isMounted = !0, d = m = v = null;
      }
    };
    c.scope.on();
    const S = c.effect = new $o(T);
    c.scope.off();
    const _ = c.update = S.run.bind(S), N = c.job = S.runIfDirty.bind(S);
    N.i = c, N.id = c.uid, S.scheduler = () => Fs(N), mt(c, !0), _();
  }, ne = (c, d, m) => {
    d.component = c;
    const v = c.vnode.props;
    c.vnode = d, c.next = null, Nl(c, d.props, v, m), Bl(c, d.children, m), ot(), so(c), it();
  }, G = (c, d, m, v, g, p, C, T, S = !1) => {
    const _ = c && c.children, N = c ? c.shapeFlag : 0, P = d.children, { patchFlag: M, shapeFlag: j } = d;
    if (M > 0) {
      if (M & 128) {
        wt(
          _,
          P,
          m,
          v,
          g,
          p,
          C,
          T,
          S
        );
        return;
      } else if (M & 256) {
        Xe(
          _,
          P,
          m,
          v,
          g,
          p,
          C,
          T,
          S
        );
        return;
      }
    }
    j & 8 ? (N & 16 && at(_, g, p), P !== _ && f(m, P)) : N & 16 ? j & 16 ? wt(
      _,
      P,
      m,
      v,
      g,
      p,
      C,
      T,
      S
    ) : at(_, g, p, !0) : (N & 8 && f(m, ""), j & 16 && Q(
      P,
      m,
      v,
      g,
      p,
      C,
      T,
      S
    ));
  }, Xe = (c, d, m, v, g, p, C, T, S) => {
    c = c || Tt, d = d || Tt;
    const _ = c.length, N = d.length, P = Math.min(_, N);
    let M;
    for (M = 0; M < P; M++) {
      const j = d[M] = S ? et(d[M]) : Ke(d[M]);
      w(
        c[M],
        j,
        m,
        null,
        g,
        p,
        C,
        T,
        S
      );
    }
    _ > N ? at(
      c,
      g,
      p,
      !0,
      !1,
      P
    ) : Q(
      d,
      m,
      v,
      g,
      p,
      C,
      T,
      S,
      P
    );
  }, wt = (c, d, m, v, g, p, C, T, S) => {
    let _ = 0;
    const N = d.length;
    let P = c.length - 1, M = N - 1;
    for (; _ <= P && _ <= M; ) {
      const j = c[_], q = d[_] = S ? et(d[_]) : Ke(d[_]);
      if (yt(j, q))
        w(
          j,
          q,
          m,
          null,
          g,
          p,
          C,
          T,
          S
        );
      else
        break;
      _++;
    }
    for (; _ <= P && _ <= M; ) {
      const j = c[P], q = d[M] = S ? et(d[M]) : Ke(d[M]);
      if (yt(j, q))
        w(
          j,
          q,
          m,
          null,
          g,
          p,
          C,
          T,
          S
        );
      else
        break;
      P--, M--;
    }
    if (_ > P) {
      if (_ <= M) {
        const j = M + 1, q = j < N ? d[j].el : v;
        for (; _ <= M; )
          w(
            null,
            d[_] = S ? et(d[_]) : Ke(d[_]),
            m,
            q,
            g,
            p,
            C,
            T,
            S
          ), _++;
      }
    } else if (_ > M)
      for (; _ <= P; )
        Se(c[_], g, p, !0), _++;
    else {
      const j = _, q = _, ee = /* @__PURE__ */ new Map();
      for (_ = q; _ <= M; _++) {
        const Ee = d[_] = S ? et(d[_]) : Ke(d[_]);
        Ee.key != null && ee.set(Ee.key, _);
      }
      let se, fe = 0;
      const he = M - q + 1;
      let De = !1, Ve = 0;
      const Ht = new Array(he);
      for (_ = 0; _ < he; _++) Ht[_] = 0;
      for (_ = j; _ <= P; _++) {
        const Ee = c[_];
        if (fe >= he) {
          Se(Ee, g, p, !0);
          continue;
        }
        let je;
        if (Ee.key != null)
          je = ee.get(Ee.key);
        else
          for (se = q; se <= M; se++)
            if (Ht[se - q] === 0 && yt(Ee, d[se])) {
              je = se;
              break;
            }
        je === void 0 ? Se(Ee, g, p, !0) : (Ht[je - q] = _ + 1, je >= Ve ? Ve = je : De = !0, w(
          Ee,
          d[je],
          m,
          null,
          g,
          p,
          C,
          T,
          S
        ), fe++);
      }
      const Zs = De ? Kl(Ht) : Tt;
      for (se = Zs.length - 1, _ = he - 1; _ >= 0; _--) {
        const Ee = q + _, je = d[Ee], Xs = d[Ee + 1], Ys = Ee + 1 < N ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Xs.el || qi(Xs)
        ) : v;
        Ht[_] === 0 ? w(
          null,
          je,
          m,
          Ys,
          g,
          p,
          C,
          T,
          S
        ) : De && (se < 0 || _ !== Zs[se] ? we(je, m, Ys, 2) : se--);
      }
    }
  }, we = (c, d, m, v, g = null) => {
    const { el: p, type: C, transition: T, children: S, shapeFlag: _ } = c;
    if (_ & 6) {
      we(c.component.subTree, d, m, v);
      return;
    }
    if (_ & 128) {
      c.suspense.move(d, m, v);
      return;
    }
    if (_ & 64) {
      C.move(c, d, m, pt);
      return;
    }
    if (C === Te) {
      s(p, d, m);
      for (let P = 0; P < S.length; P++)
        we(S[P], d, m, v);
      s(c.anchor, d, m);
      return;
    }
    if (C === es) {
      E(c, d, m);
      return;
    }
    if (v !== 2 && _ & 1 && T)
      if (v === 0)
        T.beforeEnter(p), s(p, d, m), me(() => T.enter(p), g);
      else {
        const { leave: P, delayLeave: M, afterLeave: j } = T, q = () => {
          c.ctx.isUnmounted ? o(p) : s(p, d, m);
        }, ee = () => {
          p._isLeaving && p[Ue](
            !0
            /* cancelled */
          ), P(p, () => {
            q(), j && j();
          });
        };
        M ? M(p, q, ee) : ee();
      }
    else
      s(p, d, m);
  }, Se = (c, d, m, v = !1, g = !1) => {
    const {
      type: p,
      props: C,
      ref: T,
      children: S,
      dynamicChildren: _,
      shapeFlag: N,
      patchFlag: P,
      dirs: M,
      cacheIndex: j,
      memo: q
    } = c;
    if (P === -2 && (g = !1), T != null && (ot(), Wt(T, null, m, c, !0), it()), j != null && (d.renderCache[j] = void 0), N & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const ee = N & 1 && M, se = !Kt(c);
    let fe;
    if (se && (fe = C && C.onVnodeBeforeUnmount) && Be(fe, d, c), N & 6)
      Wn(c.component, m, v);
    else {
      if (N & 128) {
        c.suspense.unmount(m, v);
        return;
      }
      ee && gt(c, null, d, "beforeUnmount"), N & 64 ? c.type.remove(
        c,
        d,
        m,
        pt,
        v
      ) : _ && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !_.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (p !== Te || P > 0 && P & 64) ? at(
        _,
        d,
        m,
        !1,
        !0
      ) : (p === Te && P & 384 || !g && N & 16) && at(S, d, m), v && ln(c);
    }
    const he = q != null && j == null;
    (se && (fe = C && C.onVnodeUnmounted) || ee || he) && me(() => {
      fe && Be(fe, d, c), ee && gt(c, null, d, "unmounted"), he && (c.el = null);
    }, m);
  }, ln = (c) => {
    const { type: d, el: m, anchor: v, transition: g } = c;
    if (d === Te) {
      Un(m, v);
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
      const { leave: C, delayLeave: T } = g, S = () => C(m, p);
      T ? T(c.el, p, S) : S();
    } else
      p();
  }, Un = (c, d) => {
    let m;
    for (; c !== d; )
      m = b(c), o(c), c = m;
    o(d);
  }, Wn = (c, d, m) => {
    const { bum: v, scope: g, job: p, subTree: C, um: T, m: S, a: _ } = c;
    vo(S), vo(_), v && qn(v), g.stop(), p && (p.flags |= 8, Se(C, c, d, m)), T && me(T, d), me(() => {
      c.isUnmounted = !0;
    }, d);
  }, at = (c, d, m, v = !1, g = !1, p = 0) => {
    for (let C = p; C < c.length; C++)
      Se(c[C], d, m, v, g);
  }, ht = (c) => {
    if (c.shapeFlag & 6)
      return ht(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = b(c.anchor || c.el), m = d && d[xi];
    return m ? b(m) : d;
  };
  let Lt = !1;
  const an = (c, d, m) => {
    let v;
    c == null ? d._vnode && (Se(d._vnode, null, null, !0), v = d._vnode.component) : w(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      m
    ), d._vnode = c, Lt || (Lt = !0, so(v), mi(), Lt = !1);
  }, pt = {
    p: w,
    um: Se,
    m: we,
    r: ln,
    mt: ie,
    mc: Q,
    pc: G,
    pbc: W,
    n: ht,
    o: e
  };
  return {
    render: an,
    hydrate: void 0,
    createApp: El(an)
  };
}
function $n({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function mt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function zs(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (V(s) && V(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = et(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && zs(r, l)), l.type === jn && (l.patchFlag === -1 && (l = o[i] = et(l)), l.el = r.el), l.type === xe && !l.el && (l.el = r.el);
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
function vo(e) {
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
  t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : Yr(e);
}
const Te = /* @__PURE__ */ Symbol.for("v-fgt"), jn = /* @__PURE__ */ Symbol.for("v-txt"), xe = /* @__PURE__ */ Symbol.for("v-cmt"), es = /* @__PURE__ */ Symbol.for("v-stc"), Gt = [];
let Oe = null;
function X(e = !1) {
  Gt.push(Oe = e ? null : []);
}
function Gl() {
  Gt.pop(), Oe = Gt[Gt.length - 1] || null;
}
let en = 1;
function xn(e, t = !1) {
  en += e, e < 0 && Oe && t && (Oe.hasOnce = !0);
}
function Ji(e) {
  return e.dynamicChildren = en > 0 ? Oe || Tt : null, Gl(), en > 0 && Oe && Oe.push(e), e;
}
function pe(e, t, n, s, o, i) {
  return Ji(
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
function Re(e, t, n, s, o) {
  return Ji(
    $(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function wn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function yt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zi = ({ key: e }) => e ?? null, pn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || /* @__PURE__ */ ge(e) || U(e) ? { i: Pe, r: e, k: t, f: !!n } : e : null);
function D(e, t = null, n = null, s = 0, o = null, i = e === Te ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zi(t),
    ref: t && pn(t),
    scopeId: vi,
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
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Oe.push(a), a;
}
const $ = Jl;
function Jl(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === _l) && (e = xe), wn(e)) {
    const l = dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Us(l, n), en > 0 && !i && Oe && (l.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = l : Oe.push(l)), l.patchFlag = -2, l;
  }
  if (ia(e) && (e = e.__vccOpts), t) {
    t = Zl(t);
    let { class: l, style: a } = t;
    l && !ae(l) && (t.class = st(l)), Y(a) && (/* @__PURE__ */ Ls(a) && !V(a) && (a = re({}, a)), t.style = Ss(a));
  }
  const r = ae(e) ? 1 : Gi(e) ? 128 : wi(e) ? 64 : Y(e) ? 4 : U(e) ? 2 : 0;
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
function Zl(e) {
  return e ? /* @__PURE__ */ Ls(e) || Vi(e) ? re({}, e) : e : null;
}
function dt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: a } = e, u = t ? Xl(o || {}, t) : o, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Zi(u),
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
    patchFlag: t && e.type !== Te ? r === -1 ? 16 : r | 16 : r,
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
  return a && s && $t(
    f,
    a.clone(f)
  ), f;
}
function Jt(e = " ", t = 0) {
  return $(jn, null, e, t);
}
function He(e = "", t = !1) {
  return t ? (X(), Re(xe, null, e)) : $(xe, null, e);
}
function Ke(e) {
  return e == null || typeof e == "boolean" ? $(xe) : V(e) ? $(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : wn(e) ? et(e) : $(jn, null, String(e));
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
  else U(t) ? (t = { default: t, _ctx: Pe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Jt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Xl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = st([t.class, s.class]));
      else if (o === "style")
        t.style = Ss([t.style, s.style]);
      else if (En(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(V(i) && i.includes(r)) ? t[o] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Pn(o) && (t[o] = r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Be(e, t, n, s = null) {
  Ne(e, t, 7, [
    n,
    s
  ]);
}
const Yl = Hi();
let Ql = 0;
function $l(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Yl, i = {
    uid: Ql++,
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
    propsOptions: Bi(s, o),
    emitsOptions: Mi(s, o),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ol.bind(null, i), e.ce && e.ce(i), i;
}
let ve = null;
const Ws = () => ve || Pe;
let Sn, _s;
{
  const e = Ln(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  Sn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ve = n
  ), _s = t(
    "__VUE_SSR_SETTERS__",
    (n) => tn = n
  );
}
const rn = (e) => {
  const t = ve;
  return Sn(e), e.scope.on(), () => {
    e.scope.off(), Sn(t);
  };
}, _o = () => {
  ve && ve.scope.off(), Sn(null);
};
function Xi(e) {
  return e.vnode.shapeFlag & 4;
}
let tn = !1;
function ea(e, t = !1, n = !1) {
  t && _s(t);
  const { props: s, children: o } = e.vnode, i = Xi(e);
  Fl(e, s, i, t), jl(e, o, n || t);
  const r = i ? ta(e, t) : void 0;
  return t && _s(!1), r;
}
function ta(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Al);
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
    if (it(), i(), (l || e.sp) && !Kt(e) && Oi(e), l) {
      if (r.then(_o, _o), t)
        return r.then((a) => {
          yo(e, a);
        }).catch((a) => {
          Mn(a, e, 0);
        });
      e.asyncDep = r;
    } else
      yo(e, r);
  } else
    Yi(e);
}
function yo(e, t, n) {
  U(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) && (e.setupState = hi(t)), Yi(e);
}
function Yi(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Je);
  {
    const o = rn(e);
    ot();
    try {
      xl(e);
    } finally {
      it(), o();
    }
  }
}
const na = {
  get(e, t) {
    return be(e, "get", ""), e[t];
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
function Bn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hi(Br(e.exposed)), {
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
    xn(-1);
    const s = arguments.length;
    return s === 2 ? Y(t) && !V(t) ? wn(t) ? $(e, null, [t]) : $(e, t) : $(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && wn(n) && (n = [n]), $(e, t, n));
  } finally {
    xn(1);
  }
}
const la = "3.5.31";
let ys;
const Ao = typeof window < "u" && window.trustedTypes;
if (Ao)
  try {
    ys = /* @__PURE__ */ Ao.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Qi = ys ? (e) => ys.createHTML(e) : (e) => e, aa = "http://www.w3.org/2000/svg", ca = "http://www.w3.org/1998/Math/MathML", $e = typeof document < "u" ? document : null, xo = $e && /* @__PURE__ */ $e.createElement("template"), fa = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? $e.createElementNS(aa, e) : t === "mathml" ? $e.createElementNS(ca, e) : n ? $e.createElement(e, { is: n }) : $e.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => $e.createTextNode(e),
  createComment: (e) => $e.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => $e.querySelector(e),
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
      xo.innerHTML = Qi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = xo.content;
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
}, ct = "transition", Nt = "animation", nn = /* @__PURE__ */ Symbol("_vtc"), $i = {
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
  $i
), da = (e) => (e.displayName = "Transition", e.props = ua, e), ha = /* @__PURE__ */ da(
  (e, { slots: t }) => ra(rl, pa(e), t)
), bt = (e, t = []) => {
  V(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, wo = (e) => e ? V(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function pa(e) {
  const t = {};
  for (const k in e)
    k in $i || (t[k] = e[k]);
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
    leaveActiveClass: b = `${n}-leave-active`,
    leaveToClass: A = `${n}-leave-to`
  } = e, x = ga(o), w = x && x[0], R = x && x[1], {
    onBeforeEnter: L,
    onEnter: I,
    onEnterCancelled: E,
    onLeave: y,
    onLeaveCancelled: O,
    onBeforeAppear: B = L,
    onAppear: z = I,
    onAppearCancelled: Q = E
  } = t, H = (k, K, ie, ke) => {
    k._enterCancelled = ke, vt(k, K ? f : l), vt(k, K ? u : r), ie && ie();
  }, W = (k, K) => {
    k._isLeaving = !1, vt(k, h), vt(k, A), vt(k, b), K && K();
  }, F = (k) => (K, ie) => {
    const ke = k ? z : I, ce = () => H(K, k, ie);
    bt(ke, [K, ce]), So(() => {
      vt(K, k ? a : i), Qe(K, k ? f : l), wo(ke) || Co(K, s, w, ce);
    });
  };
  return re(t, {
    onBeforeEnter(k) {
      bt(L, [k]), Qe(k, i), Qe(k, r);
    },
    onBeforeAppear(k) {
      bt(B, [k]), Qe(k, a), Qe(k, u);
    },
    onEnter: F(!1),
    onAppear: F(!0),
    onLeave(k, K) {
      k._isLeaving = !0;
      const ie = () => W(k, K);
      Qe(k, h), k._enterCancelled ? (Qe(k, b), Eo(k)) : (Eo(k), Qe(k, b)), So(() => {
        k._isLeaving && (vt(k, h), Qe(k, A), wo(y) || Co(k, s, R, ie));
      }), bt(y, [k, ie]);
    },
    onEnterCancelled(k) {
      H(k, !1, void 0, !0), bt(E, [k]);
    },
    onAppearCancelled(k) {
      H(k, !0, void 0, !0), bt(Q, [k]);
    },
    onLeaveCancelled(k) {
      W(k), bt(O, [k]);
    }
  });
}
function ga(e) {
  if (e == null)
    return null;
  if (Y(e))
    return [ts(e.enter), ts(e.leave)];
  {
    const t = ts(e);
    return [t, t];
  }
}
function ts(e) {
  return rs(e);
}
function Qe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[nn] || (e[nn] = /* @__PURE__ */ new Set())).add(t);
}
function vt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[nn];
  n && (n.delete(t), n.size || (e[nn] = void 0));
}
function So(e) {
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
  const { type: r, timeout: l, propCount: a } = ba(e, t);
  if (!r)
    return s();
  const u = r + "end";
  let f = 0;
  const h = () => {
    e.removeEventListener(u, b), i();
  }, b = (A) => {
    A.target === e && ++f >= a && h();
  };
  setTimeout(() => {
    f < a && h();
  }, l + 1), e.addEventListener(u, b);
}
function ba(e, t) {
  const n = window.getComputedStyle(e), s = (x) => (n[x] || "").split(", "), o = s(`${ct}Delay`), i = s(`${ct}Duration`), r = To(o, i), l = s(`${Nt}Delay`), a = s(`${Nt}Duration`), u = To(l, a);
  let f = null, h = 0, b = 0;
  t === ct ? r > 0 && (f = ct, h = r, b = i.length) : t === Nt ? u > 0 && (f = Nt, h = u, b = a.length) : (h = Math.max(r, u), f = h > 0 ? r > u ? ct : Nt : null, b = f ? f === ct ? i.length : a.length : 0);
  const A = f === ct && /\b(?:transform|all)(?:,|$)/.test(
    s(`${ct}Property`).toString()
  );
  return {
    type: f,
    timeout: h,
    propCount: b,
    hasTransform: A
  };
}
function To(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => ko(n) + ko(e[s])));
}
function ko(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Eo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function va(e, t, n) {
  const s = e[nn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Cn = /* @__PURE__ */ Symbol("_vod"), er = /* @__PURE__ */ Symbol("_vsh"), Tn = {
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
const _a = /* @__PURE__ */ Symbol(""), ya = /(?:^|;)\s*display\s*:/;
function Aa(e, t, n) {
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
      const r = s[_a];
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
    const s = xa(e, t);
    Po.test(n) ? e.setProperty(
      Le(s),
      n.replace(Po, ""),
      "important"
    ) : e[s] = n;
  }
}
const Oo = ["Webkit", "Moz", "ms"], ns = {};
function xa(e, t) {
  const n = ns[t];
  if (n)
    return n;
  let s = de(t);
  if (s !== "filter" && s in e)
    return ns[t] = s;
  s = Rn(s);
  for (let o = 0; o < Oo.length; o++) {
    const i = Oo[o] + s;
    if (i in e)
      return ns[t] = i;
  }
  return t;
}
const Io = "http://www.w3.org/1999/xlink";
function Ro(e, t, n, s, o, i = vr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Io, t.slice(6, t.length)) : e.setAttributeNS(Io, t, n) : n == null || i && !Xo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ze(n) ? String(n) : n
  );
}
function Lo(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Qi(n) : n);
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
    l === "boolean" ? n = Xo(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(o || t);
}
function wa(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Sa(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ho = /* @__PURE__ */ Symbol("_vei");
function Ca(e, t, n, s, o = null) {
  const i = e[Ho] || (e[Ho] = {}), r = i[t];
  if (s && r)
    r.value = s;
  else {
    const [l, a] = Ta(t);
    if (s) {
      const u = i[t] = Pa(
        s,
        o
      );
      wa(e, l, u, a);
    } else r && (Sa(e, l, r, a), i[t] = void 0);
  }
}
const Mo = /(?:Once|Passive|Capture)$/;
function Ta(e) {
  let t;
  if (Mo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Mo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Le(e.slice(2)), t];
}
let ss = 0;
const ka = /* @__PURE__ */ Promise.resolve(), Ea = () => ss || (ka.then(() => ss = 0), ss = Date.now());
function Pa(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ne(
      Oa(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Ea(), n;
}
function Oa(e, t) {
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
const Fo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ia = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? va(e, s, r) : t === "style" ? Aa(e, n, s) : En(t) ? Pn(t) || Ca(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ra(e, t, s, r)) ? (Lo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ro(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (La(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ae(s))) ? Lo(e, de(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ro(e, t, s, r));
};
function Ra(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fo(t) && U(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Fo(t) && ae(n) ? !1 : t in e;
}
function La(e, t) {
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
function Ha(e, t, n) {
  let s = /* @__PURE__ */ ll(e, t);
  On(s) && (s = re({}, s, t));
  class o extends Ks {
    constructor(r) {
      super(s, r, n);
    }
  }
  return o.def = s, o;
}
const Ma = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ks extends Ma {
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
    this._connected = !1, Ms(() => {
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
        Z(this, s) || Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Hs(n[s])
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
      i && (this._processMutations(i.takeRecords()), i.disconnect()), n === !0 ? this.setAttribute(Le(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Le(t), n + "") : n || this.removeAttribute(Le(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Na(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = $(this._def, re(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const o = (i, r) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            On(r[0]) ? re({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      s.emit = (i, ...r) => {
        o(i, r), Le(i) !== i && o(Le(i), r);
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
const Fa = /* @__PURE__ */ re({ patchProp: Ia }, fa);
let Do;
function tr() {
  return Do || (Do = zl(Fa));
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
function ja() {
  const e = /* @__PURE__ */ Hn({
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
function Ba(e) {
  Ns(nr, e);
}
function qs() {
  const e = Ot(nr);
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
const jo = 300;
function za(e, t, n, s) {
  let o = null, i = null, r = [], l = -1;
  const a = () => window.innerWidth < 768 ? 75 : 60, { setStage: u, toggleListening: f, togglePopupState: h } = n, b = () => no(t), A = () => {
    const E = b();
    E.instructions && (o = document.querySelector(E.instructions)), E.ingredients && (i = document.querySelector(E.ingredients)), E.steps && (r = Array.from(document.querySelectorAll(E.steps)));
  }, x = sr(A, 300), w = new MutationObserver(x);
  w.observe(document.body, { childList: !0, subtree: !0 }), /* @__PURE__ */ ge(t) && xt(t, () => {
    o = null, i = null, r = [], A();
  });
  const R = (E) => {
    const y = a(), O = E.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: O - y,
      behavior: "smooth"
    });
  }, L = () => {
    r.length > 0 && r[l] && R(r[l]), r.length === l + 1 ? (u("listening", "almost-done"), h(!0)) : (u("listening"), h(!1));
  };
  return { commands: ue(() => {
    const E = no(e);
    if (!E) return {};
    const y = {}, O = (B, z) => {
      B && B.forEach((Q) => {
        y[Q] = z;
      });
    };
    return O(E.help, () => {
      u("listening", "help"), h(!0), s("handsfree-command", { command: "help" });
    }), O(E.scrollUp, () => {
      window.scrollBy({ top: -jo, behavior: "smooth" }), s("handsfree-command", { command: "scroll up" });
    }), O(E.scrollDown, () => {
      window.scrollBy({ top: jo, behavior: "smooth" }), s("handsfree-command", { command: "scroll down" });
    }), O(E.exit, () => {
      u("listening"), s("handsfree-command", { command: "exit" });
    }), O(E.goToInstructions, () => {
      o || A(), o && (R(o), s("handsfree-command", { command: "go to instructions" })), u("listening"), h(!1);
    }), O(E.goToIngredients, () => {
      i || A(), i && (R(i), s("handsfree-command", { command: "go to ingredients" })), u("listening"), h(!1);
    }), O(E.nextStep, () => {
      r.length === 0 && A(), l < r.length - 1 && (l += 1, L(), s("handsfree-command", { command: "next step" }));
    }), O(E.previousStep, () => {
      r.length === 0 && A(), l > 0 && (l -= 1, L(), s("handsfree-command", { command: "previous step" }));
    }), O(E.letsCook, () => {
      f(!0), u("listening"), h(!1), s("handsfree-command", { command: "let's cook" });
    }), O(E.imDone, () => {
      s("handsfree-command", { command: "i'm done" });
    }), y;
  }), destroy: () => w.disconnect() };
}
function Ua(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var os, Bo;
function Wa() {
  if (Bo) return os;
  Bo = 1, os = e;
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
var is, zo;
function Ka() {
  if (zo) return is;
  zo = 1;
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
    var l = l || {}, a = l.smoothing || 0.1, u = l.interval || 50, f = l.threshold, h = l.play, b = l.history || 10, A = !0;
    s = l.audioContext || s || new n();
    var x, w, R;
    R = s.createAnalyser(), R.fftSize = 512, R.smoothingTimeConstant = a, w = new Float32Array(R.frequencyBinCount), o.jquery && (o = o[0]), o instanceof HTMLAudioElement || o instanceof HTMLVideoElement ? (x = s.createMediaElementSource(o), typeof h > "u" && (h = !0), f = f || -50) : (x = s.createMediaStreamSource(o), f = f || -50), x.connect(R), h && R.connect(s.destination), r.speaking = !1, r.suspend = function() {
      return s.suspend();
    }, r.resume = function() {
      return s.resume();
    }, Object.defineProperty(r, "state", { get: function() {
      return s.state;
    } }), s.onstatechange = function() {
      r.emit("state_change", s.state);
    }, r.setThreshold = function(E) {
      f = E;
    }, r.setInterval = function(E) {
      u = E;
    }, r.stop = function() {
      A = !1, r.emit("volume_change", -100, f), r.speaking && (r.speaking = !1, r.emit("stopped_speaking")), R.disconnect(), x.disconnect();
    }, r.speakingHistory = [];
    for (var L = 0; L < b; L++)
      r.speakingHistory.push(0);
    var I = function() {
      setTimeout(function() {
        if (A) {
          var E = t(R, w);
          r.emit("volume_change", E, f);
          var y = 0;
          if (E > f && !r.speaking) {
            for (var O = r.speakingHistory.length - 3; O < r.speakingHistory.length; O++)
              y += r.speakingHistory[O];
            y >= 2 && (r.speaking = !0, r.emit("speaking"));
          } else if (E < f && r.speaking) {
            for (var O = 0; O < r.speakingHistory.length; O++)
              y += r.speakingHistory[O];
            y == 0 && (r.speaking = !1, r.emit("stopped_speaking"));
          }
          r.speakingHistory.shift(), r.speakingHistory.push(0 + (E > f)), I();
        }
      }, u);
    };
    return I(), r;
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
function kn() {
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
}, Ja = 120 * 1e3, Za = 3 * 1e3, Xa = 5;
function Ya() {
  let e, t, n, s, o = !1, i = !1, r, l, a = 0;
  function u(F = {}) {
    r({ ...rr, ...F });
  }
  function f() {
    clearTimeout(n), clearTimeout(s);
  }
  function h() {
    f(), t.abort(), u(), l(0);
  }
  function b() {
    f(), t && t.stop(), u(), l(0);
  }
  function A() {
    u({ status: "starting" }), l(0);
    try {
      t.start(), a = 0;
    } catch (F) {
      console.error(F);
    }
  }
  function x() {
    if (a >= Xa) {
      console.warn("[HandsfreeCooking] Max restart retries reached");
      return;
    }
    a += 1, setTimeout(A, 100);
  }
  function w() {
    e && e.stop(), l(0);
  }
  function R() {
    f(), u(), l(0), i || x();
  }
  function L() {
    u({ status: "recording" }), l(0);
  }
  function I(F, k) {
    clearTimeout(n), k || (n = setTimeout(() => {
      u({
        finalTranscriptions: !0,
        status: "recording",
        transcriptions: F
      }), h();
    }, Za));
  }
  function E(F) {
    if (!F || !F.results) return;
    const k = F.results[F.resultIndex], K = Object.values(k).map((ie) => ({
      confidence: ie.confidence,
      text: ie.transcript
    }));
    u({
      finalTranscriptions: k.isFinal,
      status: "recording",
      transcriptions: K
    }), I(K, k.isFinal);
  }
  function y(F) {
    u({ error: F.error, status: "error" }), l(0);
  }
  function O() {
    o || h();
  }
  function B() {
    e = new or({
      onSpeaking: () => {
        o = !0;
      },
      onStopSpeaking: () => {
        o = !1, clearTimeout(s), s = setTimeout(O, Ja);
      },
      onVolumeChange: (F) => {
        l(F);
      }
    }), l(0), e.start();
  }
  function z({ lang: F, interimResults: k, maxAlternatives: K }) {
    const ie = window.SpeechRecognition || window.webkitSpeechRecognition;
    t = new ie(), t.continuous = !0, t.lang = F, t.interimResults = k, t.maxAlternatives = K, t.onstart = L, t.onresult = E, t.onerror = y, t.onend = R;
  }
  function Q(F) {
    const k = { ...ir, ...F };
    r = F.onUserSpeech, l = F.onUserSpeak || (() => {
    }), z(k);
  }
  function H() {
    i = !1, a = 0, !kn() && l && B(), r && A();
  }
  function W() {
    i = !0, f(), !kn() && l && w(), r && b();
  }
  return { init: Q, start: H, stop: W };
}
function Qa() {
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
  function f(y, O) {
    clearTimeout(i), O || (i = setTimeout(() => {
      r({
        finalTranscriptions: !0,
        transcriptions: y
      });
    }, 2e3));
  }
  function h() {
    n = !1, clearTimeout(i), r();
  }
  function b(y) {
    if (!y || !y.results) return;
    const O = y.results[y.resultIndex], B = Object.values(O).map((z) => ({
      confidence: z.confidence,
      text: z.transcript
    }));
    r({
      finalTranscriptions: O.isFinal,
      status: "recording",
      transcriptions: B
    }), f(B, O.isFinal);
  }
  function A() {
    n = !1, clearTimeout(i), r();
  }
  function x(y) {
    r({ error: y.error, status: "error" });
  }
  function w() {
    if (!n) {
      r({ status: "starting" });
      try {
        t.start(), n = !0;
      } catch (y) {
        console.error(y);
      }
    }
  }
  function R({ lang: y, interimResults: O, maxAlternatives: B }) {
    const z = window.SpeechRecognition || window.webkitSpeechRecognition;
    t = new z(), t.continuous = !1, t.lang = y, t.interimResults = O, t.maxAlternatives = B, t.onstart = l, t.onresult = b, t.onerror = x, t.onend = A;
  }
  function L(y) {
    const O = { ...ir, ...y };
    R(O), s = y.onUserSpeech, o = y.onUserSpeak || (() => {
    });
  }
  function I() {
    !kn() && o && u(), s && w();
  }
  function E() {
    !kn() && o && a(), s && h();
  }
  return { init: L, start: I, stop: E };
}
const $a = navigator.language || "en-US";
function ec({
  continuesRecognition: e = !0,
  lang: t = $a,
  onUserSpeech: n,
  onUserSpeak: s
}) {
  const o = e ? Ya() : Qa();
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
}, Rt = (e, t) => {
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
  return X(), pe("span", {
    class: st(["hf-icon", s.cssClass]),
    innerHTML: s.svgContent
  }, null, 10, oc);
}
const zn = /* @__PURE__ */ Rt(sc, [["render", ic]]), rc = {
  components: {
    HfIcon: zn
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
  return X(), pe("button", {
    class: "hf-headline",
    "aria-label": n.title + " - " + (n.isCloseState ? "Close" : "Toggle"),
    onClick: t[0] || (t[0] = (...l) => s.togglePopup && s.togglePopup(...l))
  }, [
    $(r, {
      icon: "mic",
      size: 24
    }),
    D("span", ac, le(n.title), 1),
    D("span", cc, [
      n.isLoading ? (X(), pe("span", fc, [...t[1] || (t[1] = [
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
      ])])) : (X(), Re(r, {
        key: 1,
        icon: s.icon,
        size: 24
      }, null, 8, ["icon"]))
    ])
  ], 8, lc);
}
const Gs = /* @__PURE__ */ Rt(rc, [["render", uc]]), dc = {
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
  return X(), pe(Te, null, [
    $(r, {
      class: st(n.additionalClassname),
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": n.isCloseState,
      onTogglePopup: s.togglePopup
    }, null, 8, ["class", "title", "is-loading", "is-close-state", "onTogglePopup"]),
    _n(D("div", hc, [
      D("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, pc),
      n.translations.buttonText ? (X(), pe("button", {
        key: 0,
        class: "hf-button",
        onClick: t[0] || (t[0] = (...l) => s.buttonAction && s.buttonAction(...l))
      }, le(n.translations.buttonText), 1)) : He("", !0)
    ], 512), [
      [Tn, n.translations.content && n.translations.content !== "" && s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const mc = /* @__PURE__ */ Rt(dc, [["render", gc]]), bc = {
  components: {
    PopupHeadline: Gs,
    HfIcon: zn
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
}, vc = { class: "hf-content-area" }, _c = ["innerHTML"], yc = {
  key: 1,
  class: "hf-introduction-steps"
}, Ac = ["innerHTML"], xc = { class: "hf-introduction-buttons" }, wc = ["disabled"];
function Sc(e, t, n, s, o, i) {
  const r = Ge("PopupHeadline"), l = Ge("HfIcon");
  return X(), pe(Te, null, [
    $(r, {
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": s.isClose,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "is-loading", "is-close-state", "onTogglePopup"]),
    _n(D("div", vc, [
      s.voiceState.state.isListening ? He("", !0) : (X(), pe("div", {
        key: 0,
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, _c)),
      s.voiceState.state.isListening ? (X(), pe("div", yc, [
        D("div", {
          class: "hf-step",
          innerHTML: n.translations.steps[s.currentStep]
        }, null, 8, Ac),
        D("div", xc, [
          D("button", {
            class: "hf-button",
            "aria-label": "Previous step",
            disabled: s.currentStep < 1,
            onClick: t[0] || (t[0] = (...a) => s.goToPrevStep && s.goToPrevStep(...a))
          }, [
            $(l, {
              icon: "chevron--left",
              size: 24
            })
          ], 8, wc),
          D("button", {
            class: "hf-button",
            "aria-label": "Next step",
            onClick: t[1] || (t[1] = (...a) => s.goToNextStep && s.goToNextStep(...a))
          }, [
            $(l, {
              icon: "chevron--right",
              size: 24
            })
          ])
        ])
      ])) : He("", !0),
      s.voiceState.state.isListening ? He("", !0) : (X(), pe("button", {
        key: 2,
        class: "hf-button",
        onClick: t[2] || (t[2] = (...a) => s.beginListening && s.beginListening(...a))
      }, le(n.translations.buttonText), 1))
    ], 512), [
      [Tn, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const Cc = /* @__PURE__ */ Rt(bc, [["render", Sc]]), Tc = {
  components: {
    HfIcon: zn,
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
    const n = qs(), s = Ot("emitEvent"), o = /* @__PURE__ */ ye(null), i = /* @__PURE__ */ ye(null), r = /* @__PURE__ */ ye(null), l = () => {
      t("closeHandsFreeFlow"), s("handsfree-feedback", { vote: "close", text: e.translations.buttonText });
    }, a = () => {
      t("togglePopup");
    }, u = /* @__PURE__ */ ye(!1), f = /* @__PURE__ */ ye(!1), h = () => {
      u.value = !0, s("handsfree-feedback", { vote: "up", text: e.translations.voteUp });
    }, b = () => {
      u.value = !0, s("handsfree-feedback", { vote: "down", text: e.translations.voteDown });
    }, A = () => {
      Ms(() => {
        const w = i.value, R = r.value, L = o.value;
        if (!L || !w || !R)
          return;
        const I = w.offsetWidth + R.offsetWidth, E = L.offsetWidth;
        f.value = I > E;
      });
    }, x = sr(A, 200);
    return Dn(() => {
      A(), window.addEventListener("resize", x);
    }), Ds(() => {
      window.removeEventListener("resize", x);
    }), {
      closeHandsFreeFlow: l,
      votedUp: h,
      votedDown: b,
      togglePopup: a,
      voted: u,
      isStacked: f,
      voiceState: n,
      handsFreeVotes: o,
      voteUp: i,
      voteDown: r
    };
  }
}, kc = { class: "hf-content-area" }, Ec = ["innerHTML"], Pc = { class: "hf-success-message" };
function Oc(e, t, n, s, o, i) {
  const r = Ge("PopupHeadline"), l = Ge("HfIcon");
  return X(), pe(Te, null, [
    $(r, {
      title: n.translations.title,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "onTogglePopup"]),
    _n(D("div", kc, [
      D("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, Ec),
      D("div", {
        ref: "handsFreeVotes",
        class: st(["hf-vote", { "hf-vote--stack": s.isStacked }])
      }, [
        s.voted ? He("", !0) : (X(), pe("button", {
          key: 0,
          ref: "voteUp",
          class: "hf-button",
          onClick: t[0] || (t[0] = (...a) => s.votedUp && s.votedUp(...a))
        }, [
          $(l, {
            icon: "thumbs-up",
            size: 16
          }),
          D("span", null, le(n.translations.voteUp), 1)
        ], 512)),
        s.voted ? He("", !0) : (X(), pe("button", {
          key: 1,
          ref: "voteDown",
          class: "hf-button",
          onClick: t[1] || (t[1] = (...a) => s.votedDown && s.votedDown(...a))
        }, [
          $(l, {
            icon: "thumbs-down",
            size: 16
          }),
          D("span", null, le(n.translations.voteDown), 1)
        ], 512)),
        _n(D("div", Pc, [
          $(l, {
            icon: "checkmark--outline",
            size: 16
          }),
          Jt(" " + le(n.translations.successMessage), 1)
        ], 512), [
          [Tn, s.voted]
        ])
      ], 2),
      D("button", {
        class: "hf-button hf-button--solid",
        onClick: t[2] || (t[2] = (...a) => s.closeHandsFreeFlow && s.closeHandsFreeFlow(...a))
      }, le(n.translations.buttonText), 1)
    ], 512), [
      [Tn, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const Ic = /* @__PURE__ */ Rt(Tc, [["render", Oc]]), Rc = ':host{--hf-color-bg: #ffffff;--hf-color-text: #000000;--hf-color-primary: #000000;--hf-color-primary-hover: #000000;--hf-color-error: #cc0033;--hf-color-border: #d9d9d9;--hf-spacing-xxs: 4px;--hf-spacing-xs: 8px;--hf-spacing-s: 16px;--hf-spacing-sm: 24px;--hf-spacing-m: 32px;--hf-font-family: inherit;--hf-font-size-base: 16px;--hf-font-size-small: 14px;--hf-font-size-large: 18px;--hf-popup-width: 410px;--hf-popup-shadow: 0 12px 24px 0 rgba(0, 0, 0, .2);--hf-z-index: 10000;display:block;font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);color:var(--hf-color-text);line-height:1.5}*,*:before,*:after{box-sizing:border-box}.hf-root{margin-bottom:var(--hf-spacing-m)}.hf-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.hf-intro-row{display:flex;align-items:center;margin-bottom:var(--hf-spacing-s)}.hf-intro-label{margin-right:var(--hf-spacing-xs);font-weight:600;text-transform:uppercase;font-size:var(--hf-font-size-base)}.hf-button{position:relative;display:inline-flex;align-items:center;padding:var(--hf-spacing-s) var(--hf-spacing-sm);border:1px solid var(--hf-color-primary);border-radius:0;background-color:transparent;color:var(--hf-color-primary);font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);font-weight:400;line-height:1;vertical-align:middle;text-decoration:none;cursor:pointer;transition:background-color .2s ease-out,color .2s ease-out}.hf-button .hf-icon{margin-inline-end:var(--hf-spacing-xs)}.hf-button:not(.hf-button--skin):hover{background-color:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button:not(.hf-button--skin):hover .hf-icon svg{fill:var(--hf-color-bg)}.hf-button:disabled{opacity:.4;cursor:default}.hf-button--solid{background-color:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button--solid:hover{background-color:var(--hf-color-bg);color:var(--hf-color-primary)}.hf-button--handsfree{padding:var(--hf-spacing-s) var(--hf-spacing-sm)}.hf-button--handsfree .hf-icon{margin-inline-end:var(--hf-spacing-xxs)}.hf-button--skin{aspect-ratio:394 / 116;padding:25px 0 30px;justify-content:center;font-size:var(--hf-font-size-large);border:0;color:#001f5a;background-color:transparent;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYoAAAB0CAYAAACbkXXNAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAADklJREFUeJzt3WtQnNd9x/H/cltgl+WOAHHHAgQSCGRdbfmqOK2daRzP9EVqJdO8aDydOs1MXjSZpDN1U9d1OtNMm3ac9Paq08bOi3jsOpNOFDvuJJFjWchtHceSJQySQGJZLgu7LLvLRT3/sywCGT9CMmi5fD8zR+d5nt1lHjTs+T3nnOfikkXeeuutz6anp/+Jy+WqN3XW1atX001JEwDAppWWljZn2vqrc3NzGWY1asoznZ2dzyRfdyUXTp069eWMjIxjPp+vubKyMs/tdqdifwEAKTI9PS1+v18mJiZmTW5079q164But0FhQuJZkyifLC0tbamqqspOfsi80RYAwOZl2v8l66OjoxoYV2dmZt5sb28/5DIhcb/L5fp2bm5udUtLS7G+yXQ/ZGoqauqrdhkAsDmlp6ebf69KdrZbMjIyFrb39/fL5ORkNBKJfMPV3d39okmT+rq6uo6CggIbDJHIlOTkZM//AADAZpZs97Ozs01YJNr9WCwm586dk9nZ2UENitMmRUpbW1urNE0mJyM2WQgJANg6dJpB23+PJ1dcrsT09dmzZ3XeIqBB8d9ut7u2ra2tVt8YDkckL8+T4l0GANxu13cU+vr6tGfhd50+fdrOVnd2dtpEGR8PSUGBL6U7CwC4/UKhsOTk5CwMP505c0ZmZmbCBAUAwCIoAACOCAoAgCOCAgDgiKAAADgiKAAAjggKAIAjggIA4IigAAA4IigAAI4ICgCAI4ICAOCIoAAAOCIoAACOCAoAgCOCAgDgiKAAADgiKAAAjggKAIAjggIA4IigAAA4IigAAI4ICgCAI4ICAOCIoAAAOCIoAACOCAoAgCOCAgDgiKAAADgiKAAAjggKAIAjggIA4IigAAA4IigAAI4ICgCAI4ICAOCIoAAAOCIoAACOCAoAgCOCAgDgiKAAADgiKAAAjggKAIAjggIA4IigAAA4IigAAI4ICgCAI4ICAOCIoAAAOCIoAACOCAoAgCOCAgDgiKAAADgiKAAAjggKAIAjggIA4IigAAA4IigAAI4ICgCAI4ICAOCIoAAAOCIoAACOCAoAgCOCAgDgiKAAADgiKAAAjggKAIAjggIA4IigAAA4IigAAI4ICgCbTiQSkVgsZks8Hjd13NS6PG3XFy9PT8eXLE9Pz8wvTy8pum2t+Hw+8Xq94vF4bPF6tfbabT5f3vy2xHoqEBQA1q1oNGqKNvhRuxwOh01bNG7KhK0nJ8MyNRW1r2sYaEBsdiUlJfOlWIqLS6S0VEupDZO1QlAASAlt1BON/rgEg+MyMTFh6jG7HAwG7TpWLjc3V8rKSk1olEllZaXU1dXaAFkNBAWANaNDNskw8Pv9MjQUMGXIFu0hYG1peNTV1Ul9fZ00NjaaICm7pZ9DUAD4WDQERkZGJBAYltHRURsCuk17BDcTBllZWba43Vq7Te2eX3cvlOzsa9sS70m8VxuwjIwMSU/XOnPJur53tS2eA1m+xOeHzRIlMXQWW1ifnJxc9X1aCZ3jaGhokObmJlOazf9n9oo+R1AAuCENgLGxoA2EsbFRGwpjY2N2u/YarpeXl2dLcgL22oRsYluigc9aEgZJU9G4hCajEgpPSTgSs3VyXesJ3T5fh8Lz9WRi21R0WmJxLTPz9fxybNp+drX5vDmS5802de6iZVN7TJ2XKwW+XPHmZku+L0fyzXqiJJY9OZnikjmRubgJ1ZCEwyE7B6PLoVDIBu3Nhu3N0uGp5uYW6ehotxPqH4WgAGCPgoeHh20QaOOfDAYNBZ0zyMzMXHRGjteelaNBoEMbenaOLns8uQvbkoZGJmQwEJSh4Qm5MhS0y4OB8cQ281pwImIb+ERDH5Px0OafjF7O9vJC2b6tSLaV5ktFWcG1UlooZcXm/zc3XXKyXAtzOcPDATuMFwgElg3qW1FbWyO7d++2bf71vTCCAtgitOFPTBYHbYOjoZAcQtEhGj3q9/nyTWPvtUeXeXm++dM0PUsajoHBMfEPj5uGftzUEyYExmU0OCkD/lEbCPpaMgywumq3l0h1ZbEJlUKprSqRuqpSqS7Pl22FWRKbCsngoN+UQVtulQ7ZaWAcOXL3wpwGQQFsEtd6BaN2GEPP+5+ZmTVlWubmri4MAWkYaJ2fn297Ckk9F/xy2R+0Df5l/5ht7C9dHlnoCWgPYGw8NWPruLGSojxpvWO77DRld0u1bC/NlbKCTAmOjcjFixelv7//pn9mU1OTPPTQJ2yvkaAANqjLly/bempqSlyuNNsb0OGfxZOUF21jP2Yb/GQA9F9JhEEiFIKmRxBO1a+ANdZQUyZ7Wmula1ed1FX4pLwwXQJDg9Lb27viSfUnnvii6XVmSGVlhV1fNih+9NrbcldXI0EBrCN6lH9hYNgc9Y8uBEEyDK4EEsvDo6FU7ybWoab6CjnQ2Si7myqkdluOxCeHpaen5yPnO44dOybHj/9UKirK5VOfekT6+vo+HBTbDzwpb7/yTfnWP/5Yvvh7D0hzQ8Vt/aWArUiP8nsvBaSvP2Drxcta69lBwGooLy2Q+w7ulLbGEqktTZPenrNLblmSDAq/f1DKy8vl6NEHPxwUVQeflO6Xvynl+79kP3R4b5M8/uhh+dxjR+xpYABujTb2752/LOf6BuVc76Cc/eCKnDfLvzk3YE/7BFJhX0eDHNhdJTsqM2Toct+SoCgqKpKHH/7t5XsUp//zWlAs9vijd8mxz9wlv3Vvx23/ZYCNQk/77H6nV/7vzCV59/1+Gwrv916xw0PAenZ47w7517/6fXn9Z69J/6Xejw6K63sUy9ELSO4/1CoPHG41XZhWO+sObBU6TNQ/OGonibVcujIiPReGpPfSkJy/4GeuABvaa//xVfnK089Lkc8tD+7fLo89fPeHg6L60Jfk1Et/7hgU19NTtR443Ca/c7RLHr5/jxTmr92dDYHbQecFdPL4fJ9fPrg4ZHsEOl9wpueyTEZiqd49YM0kg+J/fnPBrr/03T8w34XR6E33KG5E5zUeeWCPPHRkt9zZ3rA6ew+sopGxsJ0reP+DK9JjgkDD4MJAQPouDdseArBVXR8U3//25+XPvvNjWfEcxa3werLlUNcOuWd/i9x1Z5NdznZn3viDwMegVwzbU0fnTyHVcs70DpLzBVxMBixvRUGxGj2KG+nYWSOtO6rshSHtO6vNeq291wmwEjr0kzxtNDlEpOs6X6AXlWkN4Nasm6BYjs5rdLbV2fBoa6qS9pZqhq22GJ0E1ltHJO4tZOrAuAyPhWyvQLdprRPGOmwEYG2s66D4KFUVRdJQXSZ11aW2rte6pszeIEtfw/qlDbo29MkA0BvLBUYSywEtoxOJ7fM3lwPWE0+uW/I8124nrrcQv97s3JxEpmISjU0vFL1eJllvRCsKils56ymVdtSXS70JDQ2S6opiKSv2SVmJz9alRaaYWu8Tj49Hh3uSjb6O72vDrkEwEgzbO4oGzPaRsWQIhGwIAKmk33u9ClmHtbUdKC/Nl5LCPDtvqo2+13MtCDw5Znn+2RL6ugbDatHbq2toLC3TZvvkku+Ufnd0Wb9L2nNO1XU3mzIoVkr/WGx4LARInhQXeCXX/IHokYPWudlZC0cRxYVee9qvfmYji9qHuCQe+hKORG2dXF/8gJjltun1Ask/ZP05wHqgDXldVYnUV8+PLJQX2YPDym2F9ju9rSR/04w26IkXff3DNjh0Hk4v5NSylidjbMihp/XAhoY5EtGQSU9LW/Y9WVkZNmhs4ORcq1fjDK94fEbi01pm7bI+ySuxPmOf6JV8PTIVX9TgT9kjGWCj0aN5DQB9BoM+k8Eu2zqxrAdwW532Nt45e8mGxnvnB+z1PWd7rqzKrWAICgDrhs43tjRW2mcqaK2lrWm7FJleAW6NBsivTYAc/8Wv5ZVX37YhcrNSch0FgK1L5wn0NtfNjRU2EHbUlds7UnPbn9tDLx596SfdJjjekdffeG9FPQ6CAsCa0R6BXiOlp7lrEOj1Ufp8aKwfv3r7vLx24l0bHif/t2fZ9zD0BGBVaCgc2NMoe3fXy4HOO2R/R2Oqdwk3Sc9MfPn4afn+yyfk1V++u7CdoABw0/QswYNdd9jb7+xrb5CDJhi8PJtmU9EnKP7bD38h3/v3V+Vfnv3CjYOict8fyXNPf14+88R3UrrjAG4/vUOC3hEh2VvY197I8NEW8965S/LU374oP/jRm3Z92aDYtvcP5e+f+px87a9/YM/bBbB57Wquknv275Qj+5vlzt0NckfdtlTvElIsFAqL1+uRH/7XW/LVZ5+Xp7/8yURQdHd3/zwrK6umra2tpsL0KKorCuVPn/y0PPrE36V6nwGsouRdnO/e12zLal6BjI1vcjIimZkZYvJgYdvPfn5SvvE3L81qULySmZlZ29LSsqvq4B/bS8n1pnx/8ZXH7OXkesEZgI2nIC/XXpdQWOCRQh8PFMPy0tLSZHZ2TtzuLBMSSy8S7unpkXg8fkGD4lsul6urtrb2aPPRry88ytHlEulqqxWvh6MOYL0z32E7dNTZWid7zPe2vbnGfPEzUr1b2AC0rU9LSzfFtWR7JBKRgYEBicVir7tOnTpVYxLlBbfbXfWJLzxXpQ95AbD+tbfUyH2HdsqDh3fJvQdb7PPsgdVy8eJFiUajo+Fw+HEbIadPn77HVH/53eff6PjnF37JzVSAdUif1XL/oVZb7ju4k9tdYM1oSJgeRSgej3+to6PjuYW+xsmTJ+81fZB/+KcX3mh58fg7GSNBHhcJpJJe4byrqdqeqvq7jxyQmsriVO8SNrGZmRkJBoPi9/t1OTQ3N/dMV1fXs/rakkGpEydObJ+Zk6f6BsY+G4/PeLrauCcLAGwFLpcrZqqoKW+akPj63r17u5Ov/T9G7pX7llmhsQAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center;background-size:100% 100%;line-height:0;transition:transform .2s ease-out,opacity .2s ease-out}.hf-button--skin:hover{background-color:transparent;color:inherit;transform:translateY(-1px)}.hf-button--skin:focus-visible{outline:2px solid #00205b;outline-offset:4px;border-radius:8px}.hf-icon{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;line-height:0}.hf-icon svg{fill:currentColor;width:1em;height:1em}.hf-icon-16 svg{width:16px;height:16px}.hf-icon-24 svg{width:24px;height:24px}.hf-tooltip-wrapper{cursor:pointer;position:relative;display:inline-flex;align-items:baseline}.hf-tooltip-content{position:absolute;bottom:30px;left:8px;transform:translate(-50%);width:350px;padding:var(--hf-spacing-s);background:var(--hf-color-bg);box-shadow:var(--hf-popup-shadow);cursor:default;z-index:calc(var(--hf-z-index) + 1)}.hf-tooltip-content:after{content:"";position:absolute;bottom:-10px;left:50%;transform:translate(-50%);width:0;height:0;border-style:solid;border-width:10px 10px 0 10px;border-color:var(--hf-color-bg) transparent transparent transparent}.hf-tooltip-title{display:flex;justify-content:space-between;text-transform:uppercase;font-weight:600;font-size:var(--hf-font-size-large);margin-bottom:var(--hf-spacing-xs)}.hf-tooltip-title span{cursor:pointer}.hf-tooltip-text{display:block;font-size:var(--hf-font-size-small);line-height:1.5}.hf-fade-enter-active,.hf-fade-leave-active{transition:opacity .2s ease-in-out}.hf-fade-enter-from,.hf-fade-leave-to{opacity:0}.hf-popup{position:fixed;bottom:20px;right:20px;width:calc(100% - 40px);max-width:var(--hf-popup-width);background:var(--hf-color-bg);z-index:var(--hf-z-index);box-shadow:var(--hf-popup-shadow);padding:var(--hf-spacing-s);transition:bottom .3s ease,opacity .3s ease}.hf-popup--hidden{bottom:-100px;pointer-events:none;opacity:0}.hf-popup--opened{bottom:20px}.hf-headline{position:relative;border:0;display:flex;align-items:center;width:100%;background:none;padding:0;margin:0;cursor:pointer;font-family:var(--hf-font-family);color:var(--hf-color-text);font-size:var(--hf-font-size-base)}.hf-headline__title{text-transform:uppercase;font-weight:600;font-size:var(--hf-font-size-base);margin-left:var(--hf-spacing-xxs)}.hf-headline__opener{margin-left:auto;display:flex;align-items:center}.hf-headline__opener svg{transition:transform .2s}.hf-popup--opened .hf-headline__opener svg{transform:rotate(0)}.hf-popup:not(.hf-popup--opened) .hf-headline__opener svg{transform:rotate(180deg)}.hf-spinner{display:inline-block;width:22px;height:22px}.hf-spinner svg{width:100%;height:100%;overflow:visible;animation:hf-rotation 1455ms infinite linear}.hf-spinner circle{stroke:currentColor;stroke-dasharray:44px;stroke-dashoffset:33px;transform-origin:center;animation:hf-spinner 2s infinite ease-in-out}@keyframes hf-spinner{0%{stroke-dashoffset:33px;transform:rotate(0)}50%{stroke-dashoffset:11px;transform:rotate(135deg)}to{stroke-dashoffset:33px;transform:rotate(360deg)}}@keyframes hf-rotation{to{transform:rotate(360deg)}}.hf-content-area{margin-top:var(--hf-spacing-s)}.hf-content p{margin:0 0 var(--hf-spacing-s);font-size:var(--hf-font-size-base)}.hf-content p:last-of-type{margin:0}.hf-content ul{margin:0;padding:var(--hf-spacing-xs) 0 var(--hf-spacing-xs) var(--hf-spacing-s);line-height:1}.hf-content ul li{margin:0 0 var(--hf-spacing-xs)}.hf-content a{color:var(--hf-color-text)}.hf-content-area>.hf-button{margin-top:var(--hf-spacing-s)}.hf-introduction-steps .hf-step{margin-bottom:var(--hf-spacing-xs)}.hf-introduction-steps .hf-step p{margin:0 0 var(--hf-spacing-xs)}.hf-introduction-buttons{display:flex;gap:0}.hf-introduction-buttons .hf-button{padding:var(--hf-spacing-s) calc(var(--hf-spacing-s) - var(--hf-spacing-xxs))}.hf-introduction-buttons .hf-button .hf-icon{margin-inline-end:0}.hf-introduction-buttons .hf-button:last-of-type{margin-left:-1px}.hf-popup.hf-not-recognized{border:1px solid var(--hf-color-error)}.hf-popup.hf-error-state .hf-headline{color:var(--hf-color-error)}.hf-hide-chevron .hf-headline__opener{pointer-events:none}.hf-hide-chevron .hf-headline__opener .hf-icon{display:none}.hf-vote{display:flex;gap:0;margin:var(--hf-spacing-s) 0}.hf-vote .hf-button{white-space:nowrap}.hf-vote .hf-button:last-of-type{margin-left:-1px}.hf-vote--stack{flex-direction:column}.hf-vote--stack .hf-button{justify-content:center}.hf-vote--stack .hf-button:last-of-type{margin-left:0;margin-top:-1px}.hf-success-message{display:flex;align-items:center;gap:var(--hf-spacing-xxs)}@media print{.hf-root,.hf-popup{display:none}}@media(max-width:767px){.hf-tooltip-content{left:30px;width:290px}.hf-tooltip-content:after{transform:translate(calc(-50% - 22px))}}.hf-debug{position:fixed;bottom:16px;left:16px;z-index:calc(var(--hf-z-index) + 100);width:320px;background:#000000e0;color:#e0e0e0;font-family:monospace;font-size:12px;line-height:1.5;border-radius:6px;overflow:hidden;box-shadow:0 4px 16px #00000080;pointer-events:none}.hf-debug__header{background:#1a1a2e;color:#7eb8f7;font-weight:700;padding:6px 10px;letter-spacing:.05em;font-size:11px;text-transform:uppercase}.hf-debug__table{width:100%;border-collapse:collapse;padding:4px 0}.hf-debug__table tr:not(:last-child){border-bottom:1px solid rgba(255,255,255,.06)}.hf-debug__label{color:#888;padding:4px 10px;white-space:nowrap;vertical-align:top;width:56px}.hf-debug__value{color:#e0e0e0;padding:4px 10px 4px 4px;word-break:break-word}.hf-debug__speech{color:#f0d080;font-style:italic}.hf-debug__matched{color:#6edb8f;font-weight:700}.hf-debug__no-match{color:#f07070}.hf-debug__status--recording{color:#6edb8f}.hf-debug__status--starting{color:#f0d080}.hf-debug__status--stopped{color:#888}.hf-debug__status--error{color:#f07070}', Lc = {
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
}, Hc = {
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
}, Mc = 3, Fc = {
  components: {
    Finish: Ic,
    Popup: mc,
    Introduction: Cc,
    HfIcon: zn
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
    const t = ja();
    Ba(t);
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
      return lr(Lc, g);
    }), u = ue(() => {
      let g = {};
      if (e.commands)
        try {
          g = JSON.parse(e.commands);
        } catch (p) {
          console.warn("[HandsfreeCooking] Invalid commands JSON:", p);
        }
      return { ...Hc, ...g };
    }), f = ue(() => ({
      steps: e.stepsSelector,
      ingredients: e.ingredientsSelector,
      instructions: e.instructionsSelector
    })), h = ue(
      () => e.lang || document.documentElement.lang || "en"
    ), { commands: b, destroy: A } = za(
      u,
      f,
      t,
      l
    ), x = /* @__PURE__ */ ye(null), w = /* @__PURE__ */ ye(!1), R = /* @__PURE__ */ ye(null), L = /* @__PURE__ */ ye(0), I = /* @__PURE__ */ ye(!1), E = /* @__PURE__ */ ye(!1), y = /* @__PURE__ */ ye(!1), O = /* @__PURE__ */ ye(null), B = typeof window < "u" && (window.location.hash.includes("debugHF") || new URLSearchParams(window.location.search).has("debugHF")), z = /* @__PURE__ */ ye({
      lang: "",
      status: "",
      stage: "",
      subState: "",
      interim: "",
      final: "",
      matched: ""
    });
    xt(
      () => [n.stage, n.subState],
      ([g, p]) => {
        B && (z.value.stage = g ?? "null", z.value.subState = p ?? "");
      },
      { immediate: !0 }
    );
    const Q = ue(() => n.stage), H = ue(() => n.subState), W = ue(() => n.isPopupOpened), F = ue(
      () => n.stage === "introduction" || n.stage === "listening" && n.subState === "intro"
    ), k = ue(
      () => n.stage === "listening" && n.subState === "help"
    ), K = ue(
      () => n.stage === "listening" && n.subState === "not-recognized"
    ), ie = ue(
      () => n.stage === "listening" && n.subState === "recognized-error"
    ), ke = ue(
      () => n.stage === "listening" && n.subState === "almost-done"
    ), ce = ue(() => K.value ? a.value.notRecognized.title : ie.value ? a.value.notRecognizedError.title : n.stage === "listening" && n.subState === null ? a.value.listening.title : "");
    let ne = !1, G = !1;
    function Xe() {
      !x.value || G || (y.value && x.value.stop(), setTimeout(() => {
        if (!y.value)
          try {
            x.value.start();
          } catch {
            setTimeout(() => {
              try {
                y.value || x.value.start();
              } catch (p) {
                console.error("[HandsfreeCooking] Restart failed:", p);
              }
            }, 1e3);
          }
      }, 500));
    }
    const wt = () => {
      w.value = !w.value;
    };
    let we = null;
    const Se = (g) => {
      R.value && !g.composedPath().includes(R.value) && (w.value = !1);
    };
    xt(w, (g) => {
      we && (cancelAnimationFrame(we), we = null), document.removeEventListener("click", Se, !0), g && (we = requestAnimationFrame(() => {
        document.addEventListener("click", Se, !0);
      }));
    });
    const ln = (g) => {
      const p = Wo(g, Object.keys(b.value));
      B && (z.value.matched = p || "no match"), p ? (ke.value || (s("listening"), i(!1)), ke.value && u.value.imDone.includes(p) && (s("finish"), ht(), l("handsfree-finished", { reason: "completed recipe flow" })), L.value = 0, requestAnimationFrame(() => {
        b.value[p] && b.value[p]();
      })) : (L.value += 1, n.subState !== "help" && (s("listening", "not-recognized"), i(!1)), L.value > Mc && s("listening", "recognized-error"));
    }, Un = (g) => {
      const p = Wo(g, Object.keys(b.value));
      B && (z.value.matched = p && u.value.letsCook.includes(p) ? p : "no match (intro)"), p && u.value.letsCook.includes(p) && setTimeout(() => {
        b.value[p] && b.value[p]();
      }, 100);
    }, Wn = window.SpeechRecognition || window.webkitSpeechRecognition, at = () => {
      if (G = !1, s("introduction"), l("handsfree-activated"), !Wn)
        l("handsfree-error", { error: "browser-not-supported" }), s("not-supported");
      else {
        let g = !1;
        B && (z.value.lang = h.value, z.value.matched = "", z.value.interim = "", z.value.final = ""), x.value = tc.init({
          lang: h.value,
          continuesRecognition: !0,
          onUserSpeech: (p) => {
            if (y.value = ["starting", "recording"].includes(p.status), ["stopped", "aborted", "error"].includes(p.status) && (y.value = !1), O.value = p.status, B && (z.value.status = p.error ? `${p.status} (${p.error})` : p.status), !g && p.status === "starting") {
              g = !0;
              return;
            }
            if (p.status === "error" && (p.error === "not-allowed" || p.error === "service-not-allowed")) {
              E.value = !0, s("not-allowed"), o(!1), x.value.stop(), l("handsfree-error", { error: "microphone-not-allowed" });
              return;
            }
            if (p.status === "recording" && (o(!0), ne || (l("handsfree-state-change", { stage: "microphone-allowed", isListening: !0 }), ne = !0), p.transcriptions.length && !p.finalTranscriptions && (I.value = !0, B && (z.value.interim = p.transcriptions[0].text)), p.finalTranscriptions)) {
              I.value = !1;
              const C = p.transcriptions[0].text.toLowerCase().trim();
              B && (z.value.interim = "", z.value.final = p.transcriptions[0].text, z.value.matched = ""), F.value ? Un(C) : ln(C);
            }
          },
          onUserSpeak: () => {
          }
        });
      }
    }, ht = () => {
      x.value && x.value.stop(), G = !0, o(!1), i(!0), y.value = !1;
    }, Lt = () => {
      s("finish"), ht(), l("handsfree-finished", { reason: "stop-cooking-button" });
    }, an = () => {
      i(!0), s("listening", "help");
    }, pt = () => {
      if (E.value)
        s("not-allowed");
      else {
        if (!y.value)
          try {
            x.value.start();
          } catch (g) {
            console.warn("[HandsfreeCooking] Cannot start recognizer:", g);
          }
        s("listening", "intro"), l("handsfree-state-change", { stage: "listening", isListening: !0 });
      }
    };
    async function Js() {
      try {
        (await navigator.mediaDevices.getUserMedia({ audio: !0 })).getTracks().forEach((p) => p.stop()), E.value = !1, at();
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
      !n.isListening && x.value ? (x.value.stop(), s(null)) : c();
    }, v = (g) => {
      if (g.key === "Escape") {
        if (w.value) {
          w.value = !1;
          return;
        }
        n.isPopupOpened && n.stage !== null && (n.subState === "help" ? d() : m());
      }
    };
    return xt(O, (g) => {
      g === "stopped" && n.stage === "listening" && !G && !y.value && Xe();
    }), Dn(() => {
      document.addEventListener("keydown", v);
    }), Vs(() => {
      document.removeEventListener("keydown", v), document.removeEventListener("click", Se, !0), we && cancelAnimationFrame(we);
      try {
        x.value && x.value.stop();
      } catch (g) {
        console.warn("[HandsfreeCooking] Failed to stop on unmount:", g);
      }
      A(), y.value = !1;
    }), {
      isPopupOpened: W,
      stage: Q,
      subState: H,
      isIntroductionVisible: F,
      isHelpVisible: k,
      isNotRecognized: K,
      isNotRecognizedError: ie,
      isAlmostDone: ke,
      isTooltipVisible: w,
      mergedTranslations: a,
      mergedCommands: u,
      tooltip: R,
      isLoading: I,
      statusAnnouncement: ce,
      toggleTooltip: wt,
      openHelp: an,
      startHandsFreeFlow: at,
      finishHandsFreeFlow: Lt,
      togglePopup: c,
      requestMicrophoneAccess: Js,
      beginListening: pt,
      continueListening: d,
      closeHandsFreeFlow: m,
      isDebugMode: B,
      debugInfo: z
    };
  }
}, Nc = { class: "hf-root" }, Dc = { class: "hf-trigger" }, Vc = { class: "hf-intro-row" }, jc = { class: "hf-intro-label" }, Bc = {
  ref: "tooltip",
  class: "hf-tooltip-wrapper"
}, zc = {
  key: 0,
  class: "hf-tooltip-content"
}, Uc = { class: "hf-tooltip-title" }, Wc = { class: "hf-tooltip-text" }, Kc = ["aria-hidden"], qc = {
  "aria-live": "polite",
  class: "hf-sr-only"
}, Gc = {
  key: 0,
  class: "hf-debug"
}, Jc = { class: "hf-debug__table" }, Zc = { class: "hf-debug__value" }, Xc = { class: "hf-debug__value" }, Yc = { class: "hf-debug__value hf-debug__speech" }, Qc = { class: "hf-debug__value hf-debug__speech" };
function $c(e, t, n, s, o, i) {
  const r = Ge("HfIcon"), l = Ge("Introduction"), a = Ge("Popup"), u = Ge("Finish");
  return X(), pe(Te, null, [
    D("div", Nc, [
      D("div", Dc, [
        D("div", Vc, [
          D("span", jc, le(s.mergedTranslations.intro), 1),
          D("span", Bc, [
            $(r, {
              icon: "help",
              size: 16,
              onClick: s.toggleTooltip
            }, null, 8, ["onClick"]),
            $(ha, { name: "hf-fade" }, {
              default: _i(() => [
                s.isTooltipVisible ? (X(), pe("span", zc, [
                  D("strong", Uc, [
                    Jt(le(s.mergedTranslations.tooltip.title) + " ", 1),
                    D("span", {
                      role: "button",
                      "aria-label": "Close tooltip",
                      onClick: t[0] || (t[0] = (f) => s.isTooltipVisible = !1)
                    }, [
                      $(r, {
                        icon: "close",
                        size: 24
                      })
                    ])
                  ]),
                  D("span", Wc, le(s.mergedTranslations.tooltip.text), 1)
                ])) : He("", !0)
              ]),
              _: 1
            })
          ], 512)
        ]),
        s.stage !== "listening" ? (X(), pe("button", {
          key: 0,
          class: "hf-button hf-button--handsfree hf-button--skin",
          onClick: t[1] || (t[1] = (...f) => s.startHandsFreeFlow && s.startHandsFreeFlow(...f))
        }, [
          $(r, {
            icon: "mic",
            size: 24
          }),
          Jt(" " + le(s.mergedTranslations.letsCook), 1)
        ])) : He("", !0),
        s.stage === "listening" ? (X(), pe("button", {
          key: 1,
          class: "hf-button hf-button--handsfree hf-button--skin",
          onClick: t[2] || (t[2] = (...f) => s.finishHandsFreeFlow && s.finishHandsFreeFlow(...f))
        }, [
          $(r, {
            icon: "mic",
            size: 24
          }),
          Jt(" " + le(s.mergedTranslations.stopCooking), 1)
        ])) : He("", !0)
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
        s.isIntroductionVisible ? (X(), Re(l, {
          key: 0,
          translations: s.mergedTranslations.introduction,
          "is-loading": s.isLoading,
          "is-close-state": !0,
          onTogglePopup: s.closeHandsFreeFlow,
          onBeginListening: s.beginListening
        }, null, 8, ["translations", "is-loading", "onTogglePopup", "onBeginListening"])) : s.stage === "not-allowed" ? (X(), Re(a, {
          key: 1,
          translations: s.mergedTranslations.notAllowed,
          "is-loading": s.isLoading,
          "is-close-state": !0,
          onTogglePopup: s.closeHandsFreeFlow,
          onButtonAction: s.requestMicrophoneAccess
        }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : s.stage === "listening" && s.subState === null ? (X(), Re(a, {
          key: 2,
          translations: s.mergedTranslations.listening,
          "is-loading": s.isLoading,
          onTogglePopup: s.openHelp
        }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.isHelpVisible ? (X(), Re(a, {
          key: 3,
          translations: s.mergedTranslations.help,
          "is-loading": s.isLoading,
          onTogglePopup: s.continueListening,
          onButtonAction: s.finishHandsFreeFlow
        }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : s.isNotRecognized ? (X(), Re(a, {
          key: 4,
          translations: s.mergedTranslations.notRecognized,
          "is-loading": s.isLoading,
          onTogglePopup: s.openHelp
        }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.isNotRecognizedError ? (X(), Re(a, {
          key: 5,
          translations: s.mergedTranslations.notRecognizedError,
          "is-loading": s.isLoading,
          onTogglePopup: s.openHelp
        }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.stage === "not-supported" ? (X(), Re(a, {
          key: 6,
          "additional-classname": "hf-hide-chevron",
          translations: s.mergedTranslations.notSupported,
          "is-loading": s.isLoading,
          onButtonAction: s.closeHandsFreeFlow
        }, null, 8, ["translations", "is-loading", "onButtonAction"])) : s.isAlmostDone ? (X(), Re(a, {
          key: 7,
          translations: s.mergedTranslations.almostDone,
          "is-loading": s.isLoading,
          onTogglePopup: s.togglePopup
        }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.stage === "finish" ? (X(), Re(u, {
          key: 8,
          translations: s.mergedTranslations.finish,
          onCloseHandsFreeFlow: s.closeHandsFreeFlow,
          onTogglePopup: s.togglePopup
        }, null, 8, ["translations", "onCloseHandsFreeFlow", "onTogglePopup"])) : He("", !0)
      ], 10, Kc)
    ]),
    (X(), Re(sl, {
      to: "body",
      disabled: !0
    }, [
      s.isDebugMode ? (X(), pe("div", Gc, [
        t[9] || (t[9] = D("div", { class: "hf-debug__header" }, "🎤 HF Debug", -1)),
        D("table", Jc, [
          D("tr", null, [
            t[3] || (t[3] = D("td", { class: "hf-debug__label" }, "Lang", -1)),
            D("td", Zc, le(s.debugInfo.lang), 1)
          ]),
          D("tr", null, [
            t[4] || (t[4] = D("td", { class: "hf-debug__label" }, "Status", -1)),
            D("td", {
              class: st(["hf-debug__value", "hf-debug__status--" + s.debugInfo.status])
            }, le(s.debugInfo.status || "—"), 3)
          ]),
          D("tr", null, [
            t[5] || (t[5] = D("td", { class: "hf-debug__label" }, "Stage", -1)),
            D("td", Xc, le(s.debugInfo.stage) + le(s.debugInfo.subState ? " / " + s.debugInfo.subState : ""), 1)
          ]),
          D("tr", null, [
            t[6] || (t[6] = D("td", { class: "hf-debug__label" }, "Interim", -1)),
            D("td", Yc, le(s.debugInfo.interim || "—"), 1)
          ]),
          D("tr", null, [
            t[7] || (t[7] = D("td", { class: "hf-debug__label" }, "Final", -1)),
            D("td", Qc, le(s.debugInfo.final || "—"), 1)
          ]),
          D("tr", null, [
            t[8] || (t[8] = D("td", { class: "hf-debug__label" }, "Matched", -1)),
            D("td", {
              class: st(["hf-debug__value", s.debugInfo.matched === "no match" ? "hf-debug__no-match" : "hf-debug__matched"])
            }, le(s.debugInfo.matched || "—"), 3)
          ])
        ])
      ])) : He("", !0)
    ]))
  ], 64);
}
const ef = /* @__PURE__ */ Rt(Fc, [["render", $c], ["styles", [Rc]]]), tf = /* @__PURE__ */ Ha(ef, {
  shadowRoot: !0
});
customElements.get("handsfree-cooking") || customElements.define("handsfree-cooking", tf);
export {
  tf as HandsfreeCookingElement
};
