// @__NO_SIDE_EFFECTS__
function _s(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Q = {}, Ct = [], Ze = () => {
}, Io = () => !1, En = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), kn = (e) => e.startsWith("onUpdate:"), re = Object.assign, vs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Xi = Object.prototype.hasOwnProperty, K = (e, t) => Xi.call(e, t), O = Array.isArray, At = (e) => nn(e) === "[object Map]", No = (e) => nn(e) === "[object Set]", qs = (e) => nn(e) === "[object Date]", V = (e) => typeof e == "function", ae = (e) => typeof e == "string", Je = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", Do = (e) => (Z(e) || V(e)) && V(e.then) && V(e.catch), Vo = Object.prototype.toString, nn = (e) => Vo.call(e), Qi = (e) => nn(e).slice(8, -1), Pn = (e) => nn(e) === "[object Object]", bs = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zt = /* @__PURE__ */ _s(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, er = /-\w/g, ue = Rn(
  (e) => e.replace(er, (t) => t.slice(1).toUpperCase())
), tr = /\B([A-Z])/g, Fe = Rn(
  (e) => e.replace(tr, "-$1").toLowerCase()
), Hn = Rn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Un = Rn(
  (e) => e ? `on${Hn(e)}` : ""
), Ke = (e, t) => !Object.is(e, t), Wn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, zo = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, nr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, os = (e) => {
  const t = ae(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Gs;
const Fn = () => Gs || (Gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ys(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ae(s) ? rr(s) : ys(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (ae(e) || Z(e))
    return e;
}
const sr = /;(?![^(]*\))/g, or = /:([^]+)/, ir = /\/\*[^]*?\*\//g;
function rr(e) {
  const t = {};
  return e.replace(ir, "").split(sr).forEach((n) => {
    if (n) {
      const s = n.split(or);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function xt(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const s = xt(e[n]);
      s && (t += s + " ");
    }
  else if (Z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const lr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", cr = /* @__PURE__ */ _s(lr);
function jo(e) {
  return !!e || e === "";
}
function ar(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = xs(e[s], t[s]);
  return n;
}
function xs(e, t) {
  if (e === t) return !0;
  let n = qs(e), s = qs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Je(e), s = Je(t), n || s)
    return e === t;
  if (n = O(e), s = O(t), n || s)
    return n && s ? ar(e, t) : !1;
  if (n = Z(e), s = Z(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), c = t.hasOwnProperty(r);
      if (l && !c || !l && c || !xs(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Bo = (e) => !!(e && e.__v_isRef === !0), Te = (e) => ae(e) ? e : e == null ? "" : O(e) || Z(e) && (e.toString === Vo || !V(e.toString)) ? Bo(e) ? Te(e.value) : JSON.stringify(e, Uo, 2) : String(e), Uo = (e, t) => Bo(t) ? Uo(e, t.value) : At(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Kn(s, i) + " =>"] = o, n),
    {}
  )
} : No(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Kn(n))
} : Je(t) ? Kn(t) : Z(t) && !O(t) && !Pn(t) ? String(t) : t, Kn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Se;
class fr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Se, !t && Se && (this.index = (Se.scopes || (Se.scopes = [])).push(
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
      const n = Se;
      try {
        return Se = this, t();
      } finally {
        Se = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Se, Se = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Se = this.prevScope, this.prevScope = void 0);
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
function ur() {
  return Se;
}
let ne;
const qn = /* @__PURE__ */ new WeakSet();
class Wo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Se && Se.active && Se.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qn.has(this) && (qn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Zs(this), Go(this);
    const t = ne, n = Oe;
    ne = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      Zo(this), ne = t, Oe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ts(t);
      this.deps = this.depsTail = void 0, Zs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    is(this) && this.run();
  }
  get dirty() {
    return is(this);
  }
}
let Ko = 0, jt, Bt;
function qo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Bt, Bt = e;
    return;
  }
  e.next = jt, jt = e;
}
function Ss() {
  Ko++;
}
function ws() {
  if (--Ko > 0)
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
function Go(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Zo(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Ts(s), dr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function is(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Jo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Jo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Zt) || (e.globalVersion = Zt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !is(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ne, s = Oe;
  ne = e, Oe = !0;
  try {
    Go(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ke(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ne = n, Oe = s, Zo(e), e.flags &= -3;
  }
}
function Ts(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ts(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function dr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const $o = [];
function st() {
  $o.push(Oe), Oe = !1;
}
function ot() {
  const e = $o.pop();
  Oe = e === void 0 ? !0 : e;
}
function Zs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ne;
    ne = void 0;
    try {
      t();
    } finally {
      ne = n;
    }
  }
}
let Zt = 0;
class hr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Cs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ne || !Oe || ne === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ne)
      n = this.activeLink = new hr(ne, this), ne.deps ? (n.prevDep = ne.depsTail, ne.depsTail.nextDep = n, ne.depsTail = n) : ne.deps = ne.depsTail = n, Yo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ne.depsTail, n.nextDep = void 0, ne.depsTail.nextDep = n, ne.depsTail = n, ne.deps === n && (ne.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Zt++, this.notify(t);
  }
  notify(t) {
    Ss();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ws();
    }
  }
}
function Yo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Yo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const rs = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ Symbol(
  ""
), ls = /* @__PURE__ */ Symbol(
  ""
), Jt = /* @__PURE__ */ Symbol(
  ""
);
function pe(e, t, n) {
  if (Oe && ne) {
    let s = rs.get(e);
    s || rs.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Cs()), o.map = s, o.key = n), o.track();
  }
}
function tt(e, t, n, s, o, i) {
  const r = rs.get(e);
  if (!r) {
    Zt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Ss(), t === "clear")
    r.forEach(l);
  else {
    const c = O(e), u = c && bs(n);
    if (c && n === "length") {
      const f = Number(s);
      r.forEach((p, b) => {
        (b === "length" || b === Jt || !Je(b) && b >= f) && l(p);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), u && l(r.get(Jt)), t) {
        case "add":
          c ? u && l(r.get("length")) : (l(r.get(yt)), At(e) && l(r.get(ls)));
          break;
        case "delete":
          c || (l(r.get(yt)), At(e) && l(r.get(ls)));
          break;
        case "set":
          At(e) && l(r.get(yt));
          break;
      }
  }
  ws();
}
function wt(e) {
  const t = /* @__PURE__ */ W(e);
  return t === e ? t : (pe(t, "iterate", Jt), /* @__PURE__ */ Me(e) ? t : t.map(it));
}
function As(e) {
  return pe(e = /* @__PURE__ */ W(e), "iterate", Jt), e;
}
function Ue(e, t) {
  return /* @__PURE__ */ ut(e) ? $t(/* @__PURE__ */ Et(e) ? it(t) : t) : it(t);
}
const pr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Gn(this, Symbol.iterator, (e) => Ue(this, e));
  },
  concat(...e) {
    return wt(this).concat(
      ...e.map((t) => O(t) ? wt(t) : t)
    );
  },
  entries() {
    return Gn(this, "entries", (e) => (e[1] = Ue(this, e[1]), e));
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
      (n) => n.map((s) => Ue(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ye(
      this,
      "find",
      e,
      t,
      (n) => Ue(this, n),
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
      (n) => Ue(this, n),
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
    return Zn(this, "includes", e);
  },
  indexOf(...e) {
    return Zn(this, "indexOf", e);
  },
  join(e) {
    return wt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Zn(this, "lastIndexOf", e);
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
    return Js(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Js(this, "reduceRight", e, t);
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
    return wt(this).toReversed();
  },
  toSorted(e) {
    return wt(this).toSorted(e);
  },
  toSpliced(...e) {
    return wt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Mt(this, "unshift", e);
  },
  values() {
    return Gn(this, "values", (e) => Ue(this, e));
  }
};
function Gn(e, t, n) {
  const s = As(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Me(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const gr = Array.prototype;
function Ye(e, t, n, s, o, i) {
  const r = As(e), l = r !== e && !/* @__PURE__ */ Me(e), c = r[t];
  if (c !== gr[t]) {
    const p = c.apply(e, i);
    return l ? it(p) : p;
  }
  let u = n;
  r !== e && (l ? u = function(p, b) {
    return n.call(this, Ue(e, p), b, e);
  } : n.length > 2 && (u = function(p, b) {
    return n.call(this, p, b, e);
  }));
  const f = c.call(r, u, s);
  return l && o ? o(f) : f;
}
function Js(e, t, n, s) {
  const o = As(e), i = o !== e && !/* @__PURE__ */ Me(e);
  let r = n, l = !1;
  o !== e && (i ? (l = s.length === 0, r = function(u, f, p) {
    return l && (l = !1, u = Ue(e, u)), n.call(this, u, Ue(e, f), p, e);
  }) : n.length > 3 && (r = function(u, f, p) {
    return n.call(this, u, f, p, e);
  }));
  const c = o[t](r, ...s);
  return l ? Ue(e, c) : c;
}
function Zn(e, t, n) {
  const s = /* @__PURE__ */ W(e);
  pe(s, "iterate", Jt);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Ps(n[0]) ? (n[0] = /* @__PURE__ */ W(n[0]), s[t](...n)) : o;
}
function Mt(e, t, n = []) {
  st(), Ss();
  const s = (/* @__PURE__ */ W(e))[t].apply(e, n);
  return ws(), ot(), s;
}
const mr = /* @__PURE__ */ _s("__proto__,__v_isRef,__isVue"), Xo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Je)
);
function _r(e) {
  Je(e) || (e = String(e));
  const t = /* @__PURE__ */ W(this);
  return pe(t, "has", e), t.hasOwnProperty(e);
}
class Qo {
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
      return s === (o ? i ? Er : si : i ? ni : ti).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = O(t);
    if (!o) {
      let c;
      if (r && (c = pr[n]))
        return c;
      if (n === "hasOwnProperty")
        return _r;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ he(t) ? t : s
    );
    if ((Je(n) ? Xo.has(n) : mr(n)) || (o || pe(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ he(l)) {
      const c = r && bs(n) ? l : l.value;
      return o && Z(c) ? /* @__PURE__ */ as(c) : c;
    }
    return Z(l) ? o ? /* @__PURE__ */ as(l) : /* @__PURE__ */ Ln(l) : l;
  }
}
class ei extends Qo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const r = O(t) && bs(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ ut(i);
      if (!/* @__PURE__ */ Me(s) && !/* @__PURE__ */ ut(s) && (i = /* @__PURE__ */ W(i), s = /* @__PURE__ */ W(s)), !r && /* @__PURE__ */ he(i) && !/* @__PURE__ */ he(s))
        return u || (i.value = s), !0;
    }
    const l = r ? Number(n) < t.length : K(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ he(t) ? t : o
    );
    return t === /* @__PURE__ */ W(o) && (l ? Ke(s, i) && tt(t, "set", n, s) : tt(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = K(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && tt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Je(n) || !Xo.has(n)) && pe(t, "has", n), s;
  }
  ownKeys(t) {
    return pe(
      t,
      "iterate",
      O(t) ? "length" : yt
    ), Reflect.ownKeys(t);
  }
}
class vr extends Qo {
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
const br = /* @__PURE__ */ new ei(), yr = /* @__PURE__ */ new vr(), xr = /* @__PURE__ */ new ei(!0);
const cs = (e) => e, fn = (e) => Reflect.getPrototypeOf(e);
function Sr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ W(o), r = At(i), l = e === "entries" || e === Symbol.iterator && r, c = e === "keys" && r, u = o[e](...s), f = n ? cs : t ? $t : it;
    return !t && pe(
      i,
      "iterate",
      c ? ls : yt
    ), re(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: p, done: b } = u.next();
          return b ? { value: p, done: b } : {
            value: l ? [f(p[0]), f(p[1])] : f(p),
            done: b
          };
        }
      }
    );
  };
}
function un(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wr(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ W(i), l = /* @__PURE__ */ W(o);
      e || (Ke(o, l) && pe(r, "get", o), pe(r, "get", l));
      const { has: c } = fn(r), u = t ? cs : e ? $t : it;
      if (c.call(r, o))
        return u(i.get(o));
      if (c.call(r, l))
        return u(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && pe(/* @__PURE__ */ W(o), "iterate", yt), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ W(i), l = /* @__PURE__ */ W(o);
      return e || (Ke(o, l) && pe(r, "has", o), pe(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, c = /* @__PURE__ */ W(l), u = t ? cs : e ? $t : it;
      return !e && pe(c, "iterate", yt), l.forEach((f, p) => o.call(i, u(f), u(p), r));
    }
  };
  return re(
    n,
    e ? {
      add: un("add"),
      set: un("set"),
      delete: un("delete"),
      clear: un("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ W(this), r = fn(i), l = /* @__PURE__ */ W(o), c = !t && !/* @__PURE__ */ Me(o) && !/* @__PURE__ */ ut(o) ? l : o;
        return r.has.call(i, c) || Ke(o, c) && r.has.call(i, o) || Ke(l, c) && r.has.call(i, l) || (i.add(c), tt(i, "add", c, c)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Me(i) && !/* @__PURE__ */ ut(i) && (i = /* @__PURE__ */ W(i));
        const r = /* @__PURE__ */ W(this), { has: l, get: c } = fn(r);
        let u = l.call(r, o);
        u || (o = /* @__PURE__ */ W(o), u = l.call(r, o));
        const f = c.call(r, o);
        return r.set(o, i), u ? Ke(i, f) && tt(r, "set", o, i) : tt(r, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ W(this), { has: r, get: l } = fn(i);
        let c = r.call(i, o);
        c || (o = /* @__PURE__ */ W(o), c = r.call(i, o)), l && l.call(i, o);
        const u = i.delete(o);
        return c && tt(i, "delete", o, void 0), u;
      },
      clear() {
        const o = /* @__PURE__ */ W(this), i = o.size !== 0, r = o.clear();
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
    n[o] = Sr(o, e, t);
  }), n;
}
function Es(e, t) {
  const n = wr(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    K(n, o) && o in s ? n : s,
    o,
    i
  );
}
const Tr = {
  get: /* @__PURE__ */ Es(!1, !1)
}, Cr = {
  get: /* @__PURE__ */ Es(!1, !0)
}, Ar = {
  get: /* @__PURE__ */ Es(!0, !1)
};
const ti = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ new WeakMap(), si = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap();
function kr(e) {
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
function Pr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : kr(Qi(e));
}
// @__NO_SIDE_EFFECTS__
function Ln(e) {
  return /* @__PURE__ */ ut(e) ? e : ks(
    e,
    !1,
    br,
    Tr,
    ti
  );
}
// @__NO_SIDE_EFFECTS__
function Rr(e) {
  return ks(
    e,
    !1,
    xr,
    Cr,
    ni
  );
}
// @__NO_SIDE_EFFECTS__
function as(e) {
  return ks(
    e,
    !0,
    yr,
    Ar,
    si
  );
}
function ks(e, t, n, s, o) {
  if (!Z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Pr(e);
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
function Me(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ W(t) : e;
}
function Hr(e) {
  return !K(e, "__v_skip") && Object.isExtensible(e) && zo(e, "__v_skip", !0), e;
}
const it = (e) => Z(e) ? /* @__PURE__ */ Ln(e) : e, $t = (e) => Z(e) ? /* @__PURE__ */ as(e) : e;
// @__NO_SIDE_EFFECTS__
function he(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return Fr(e, !1);
}
function Fr(e, t) {
  return /* @__PURE__ */ he(e) ? e : new Lr(e, t);
}
class Lr {
  constructor(t, n) {
    this.dep = new Cs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ W(t), this._value = n ? t : it(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Me(t) || /* @__PURE__ */ ut(t);
    t = s ? t : /* @__PURE__ */ W(t), Ke(t, n) && (this._rawValue = t, this._value = s ? t : it(t), this.dep.trigger());
  }
}
function Rs(e) {
  return /* @__PURE__ */ he(e) ? e.value : e;
}
function $s(e) {
  return V(e) ? e() : Rs(e);
}
const Or = {
  get: (e, t, n) => t === "__v_raw" ? e : Rs(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ he(o) && !/* @__PURE__ */ he(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function oi(e) {
  return /* @__PURE__ */ Et(e) ? e : new Proxy(e, Or);
}
class Mr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Cs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ne !== this)
      return qo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Jo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ir(e, t, n = !1) {
  let s, o;
  return V(e) ? s = e : (s = e.get, o = e.set), new Mr(s, o, n);
}
const dn = {}, gn = /* @__PURE__ */ new WeakMap();
let vt;
function Nr(e, t = !1, n = vt) {
  if (n) {
    let s = gn.get(n);
    s || gn.set(n, s = []), s.push(e);
  }
}
function Dr(e, t, n = Q) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: c } = n, u = (y) => o ? y : /* @__PURE__ */ Me(y) || o === !1 || o === 0 ? nt(y, 1) : nt(y);
  let f, p, b, x, P = !1, A = !1;
  if (/* @__PURE__ */ he(e) ? (p = () => e.value, P = /* @__PURE__ */ Me(e)) : /* @__PURE__ */ Et(e) ? (p = () => u(e), P = !0) : O(e) ? (A = !0, P = e.some((y) => /* @__PURE__ */ Et(y) || /* @__PURE__ */ Me(y)), p = () => e.map((y) => {
    if (/* @__PURE__ */ he(y))
      return y.value;
    if (/* @__PURE__ */ Et(y))
      return u(y);
    if (V(y))
      return c ? c(y, 2) : y();
  })) : V(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
    if (b) {
      st();
      try {
        b();
      } finally {
        ot();
      }
    }
    const y = vt;
    vt = f;
    try {
      return c ? c(e, 3, [x]) : e(x);
    } finally {
      vt = y;
    }
  } : p = Ze, t && o) {
    const y = p, R = o === !0 ? 1 / 0 : o;
    p = () => nt(y(), R);
  }
  const M = ur(), N = () => {
    f.stop(), M && M.active && vs(M.effects, f);
  };
  if (i && t) {
    const y = t;
    t = (...R) => {
      y(...R), N();
    };
  }
  let F = A ? new Array(e.length).fill(dn) : dn;
  const E = (y) => {
    if (!(!(f.flags & 1) || !f.dirty && !y))
      if (t) {
        const R = f.run();
        if (o || P || (A ? R.some((q, ee) => Ke(q, F[ee])) : Ke(R, F))) {
          b && b();
          const q = vt;
          vt = f;
          try {
            const ee = [
              R,
              // pass undefined as the old value when it's changed for the first time
              F === dn ? void 0 : A && F[0] === dn ? [] : F,
              x
            ];
            F = R, c ? c(t, 3, ee) : (
              // @ts-expect-error
              t(...ee)
            );
          } finally {
            vt = q;
          }
        }
      } else
        f.run();
  };
  return l && l(E), f = new Wo(p), f.scheduler = r ? () => r(E, !1) : E, x = (y) => Nr(y, !1, f), b = f.onStop = () => {
    const y = gn.get(f);
    if (y) {
      if (c)
        c(y, 4);
      else
        for (const R of y) R();
      gn.delete(f);
    }
  }, t ? s ? E(!0) : F = f.run() : r ? r(E.bind(null, !0), !0) : f.run(), N.pause = f.pause.bind(f), N.resume = f.resume.bind(f), N.stop = N, N;
}
function nt(e, t = 1 / 0, n) {
  if (t <= 0 || !Z(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ he(e))
    nt(e.value, t, n);
  else if (O(e))
    for (let s = 0; s < e.length; s++)
      nt(e[s], t, n);
  else if (No(e) || At(e))
    e.forEach((s) => {
      nt(s, t, n);
    });
  else if (Pn(e)) {
    for (const s in e)
      nt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && nt(e[s], t, n);
  }
  return e;
}
function sn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    On(o, t, n);
  }
}
function Ie(e, t, n, s) {
  if (V(e)) {
    const o = sn(e, t, n, s);
    return o && Do(o) && o.catch((i) => {
      On(i, t, n);
    }), o;
  }
  if (O(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Ie(e[i], t, n, s));
    return o;
  }
}
function On(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || Q;
  if (t) {
    let l = t.parent;
    const c = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let p = 0; p < f.length; p++)
          if (f[p](e, c, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      st(), sn(i, null, 10, [
        e,
        c,
        u
      ]), ot();
      return;
    }
  }
  Vr(e, n, o, s, r);
}
function Vr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const ve = [];
let je = -1;
const kt = [];
let ft = null, Tt = 0;
const ii = /* @__PURE__ */ Promise.resolve();
let mn = null;
function Hs(e) {
  const t = mn || ii;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function zr(e) {
  let t = je + 1, n = ve.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = ve[s], i = Yt(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = Yt(e), n = ve[ve.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Yt(n) ? ve.push(e) : ve.splice(zr(t), 0, e), e.flags |= 1, ri();
  }
}
function ri() {
  mn || (mn = ii.then(ci));
}
function jr(e) {
  O(e) ? kt.push(...e) : ft && e.id === -1 ? ft.splice(Tt + 1, 0, e) : e.flags & 1 || (kt.push(e), e.flags |= 1), ri();
}
function Ys(e, t, n = je + 1) {
  for (; n < ve.length; n++) {
    const s = ve[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ve.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function li(e) {
  if (kt.length) {
    const t = [...new Set(kt)].sort(
      (n, s) => Yt(n) - Yt(s)
    );
    if (kt.length = 0, ft) {
      ft.push(...t);
      return;
    }
    for (ft = t, Tt = 0; Tt < ft.length; Tt++) {
      const n = ft[Tt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ft = null, Tt = 0;
  }
}
const Yt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ci(e) {
  try {
    for (je = 0; je < ve.length; je++) {
      const t = ve[je];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), sn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; je < ve.length; je++) {
      const t = ve[je];
      t && (t.flags &= -2);
    }
    je = -1, ve.length = 0, li(), mn = null, (ve.length || kt.length) && ci();
  }
}
let Ee = null, ai = null;
function _n(e) {
  const t = Ee;
  return Ee = e, ai = e && e.type.__scopeId || null, t;
}
function fi(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && xn(-1);
    const i = _n(t);
    let r;
    try {
      r = e(...o);
    } finally {
      _n(i), s._d && xn(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function vn(e, t) {
  if (Ee === null)
    return e;
  const n = zn(Ee), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, c = Q] = t[o];
    i && (V(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && nt(r), s.push({
      dir: i,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function pt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let c = l.dir[s];
    c && (st(), Ie(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ot());
  }
}
function Ls(e, t) {
  if (ge) {
    let n = ge.provides;
    const s = ge.parent && ge.parent.provides;
    s === n && (n = ge.provides = Object.create(s)), n[e] = t;
  }
}
function Pt(e, t, n = !1) {
  const s = Vs();
  if (s || Ht) {
    let o = Ht ? Ht._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && V(t) ? t.call(s && s.proxy) : t;
  }
}
const Br = /* @__PURE__ */ Symbol.for("v-scx"), Ur = () => Pt(Br);
function Rt(e, t, n) {
  return ui(e, t, n);
}
function ui(e, t, n = Q) {
  const { immediate: s, deep: o, flush: i, once: r } = n, l = re({}, n), c = t && s || !t && i !== "post";
  let u;
  if (en) {
    if (i === "sync") {
      const x = Ur();
      u = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!c) {
      const x = () => {
      };
      return x.stop = Ze, x.resume = Ze, x.pause = Ze, x;
    }
  }
  const f = ge;
  l.call = (x, P, A) => Ie(x, f, P, A);
  let p = !1;
  i === "post" ? l.scheduler = (x) => {
    xe(x, f && f.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (x, P) => {
    P ? x() : Fs(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), p && (x.flags |= 2, f && (x.id = f.uid, x.i = f));
  };
  const b = Dr(e, t, l);
  return en && (u ? u.push(b) : c && b()), b;
}
function Wr(e, t, n) {
  const s = this.proxy, o = ae(e) ? e.includes(".") ? di(s, e) : () => s[e] : e.bind(s, s);
  let i;
  V(t) ? i = t : (i = t.handler, n = t);
  const r = on(this), l = ui(o, i.bind(s), n);
  return r(), l;
}
function di(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Kr = /* @__PURE__ */ Symbol("_vte"), hi = (e) => e.__isTeleport, Be = /* @__PURE__ */ Symbol("_leaveCb"), It = /* @__PURE__ */ Symbol("_enterCb");
function qr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Nn(() => {
    e.isMounted = !0;
  }), Os(() => {
    e.isUnmounting = !0;
  }), e;
}
const He = [Function, Array], pi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: He,
  onEnter: He,
  onAfterEnter: He,
  onEnterCancelled: He,
  // leave
  onBeforeLeave: He,
  onLeave: He,
  onAfterLeave: He,
  onLeaveCancelled: He,
  // appear
  onBeforeAppear: He,
  onAppear: He,
  onAfterAppear: He,
  onAppearCancelled: He
}, gi = (e) => {
  const t = e.subTree;
  return t.component ? gi(t.component) : t;
}, Gr = {
  name: "BaseTransition",
  props: pi,
  setup(e, { slots: t }) {
    const n = Vs(), s = qr();
    return () => {
      const o = t.default && vi(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = mi(o), r = /* @__PURE__ */ W(e), { mode: l } = r;
      if (s.isLeaving)
        return Jn(i);
      const c = Xs(i);
      if (!c)
        return Jn(i);
      let u = fs(
        c,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => u = p
      );
      c.type !== be && Xt(c, u);
      let f = n.subTree && Xs(n.subTree);
      if (f && f.type !== be && !bt(f, c) && gi(n).type !== be) {
        let p = fs(
          f,
          r,
          s,
          n
        );
        if (Xt(f, p), l === "out-in" && c.type !== be)
          return s.isLeaving = !0, p.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, f = void 0;
          }, Jn(i);
        l === "in-out" && c.type !== be ? p.delayLeave = (b, x, P) => {
          const A = _i(
            s,
            f
          );
          A[String(f.key)] = f, b[Be] = () => {
            x(), b[Be] = void 0, delete u.delayedLeave, f = void 0;
          }, u.delayedLeave = () => {
            P(), delete u.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return i;
    };
  }
};
function mi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== be) {
        t = n;
        break;
      }
  }
  return t;
}
const Zr = Gr;
function _i(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function fs(e, t, n, s, o) {
  const {
    appear: i,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: u,
    onAfterEnter: f,
    onEnterCancelled: p,
    onBeforeLeave: b,
    onLeave: x,
    onAfterLeave: P,
    onLeaveCancelled: A,
    onBeforeAppear: M,
    onAppear: N,
    onAfterAppear: F,
    onAppearCancelled: E
  } = t, y = String(e.key), R = _i(n, e), q = (z, B) => {
    z && Ie(
      z,
      s,
      9,
      B
    );
  }, ee = (z, B) => {
    const I = B[1];
    q(z, B), O(z) ? z.every((T) => T.length <= 1) && I() : z.length <= 1 && I();
  }, le = {
    mode: r,
    persisted: l,
    beforeEnter(z) {
      let B = c;
      if (!n.isMounted)
        if (i)
          B = M || c;
        else
          return;
      z[Be] && z[Be](
        !0
        /* cancelled */
      );
      const I = R[y];
      I && bt(e, I) && I.el[Be] && I.el[Be](), q(B, [z]);
    },
    enter(z) {
      if (R[y] === e) return;
      let B = u, I = f, T = p;
      if (!n.isMounted)
        if (i)
          B = N || u, I = F || f, T = E || p;
        else
          return;
      let j = !1;
      z[It] = (Pe) => {
        j || (j = !0, Pe ? q(T, [z]) : q(I, [z]), le.delayedLeave && le.delayedLeave(), z[It] = void 0);
      };
      const oe = z[It].bind(null, !1);
      B ? ee(B, [z, oe]) : oe();
    },
    leave(z, B) {
      const I = String(e.key);
      if (z[It] && z[It](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return B();
      q(b, [z]);
      let T = !1;
      z[Be] = (oe) => {
        T || (T = !0, B(), oe ? q(A, [z]) : q(P, [z]), z[Be] = void 0, R[I] === e && delete R[I]);
      };
      const j = z[Be].bind(null, !1);
      R[I] = e, x ? ee(x, [z, j]) : j();
    },
    clone(z) {
      const B = fs(
        z,
        t,
        n,
        s,
        o
      );
      return o && o(B), B;
    }
  };
  return le;
}
function Jn(e) {
  if (Mn(e))
    return e = dt(e), e.children = null, e;
}
function Xs(e) {
  if (!Mn(e))
    return hi(e.type) && e.children ? mi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && V(n.default))
      return n.default();
  }
}
function Xt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Xt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function vi(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === Ae ? (r.patchFlag & 128 && o++, s = s.concat(
      vi(r.children, t, l)
    )) : (t || r.type !== be) && s.push(l != null ? dt(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Jr(e, t) {
  return V(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    re({ name: e.name }, t, { setup: e })
  ) : e;
}
function bi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Qs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const bn = /* @__PURE__ */ new WeakMap();
function Ut(e, t, n, s, o = !1) {
  if (O(e)) {
    e.forEach(
      (A, M) => Ut(
        A,
        t && (O(t) ? t[M] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Wt(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Ut(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? zn(s.component) : s.el, r = o ? null : i, { i: l, r: c } = e, u = t && t.r, f = l.refs === Q ? l.refs = {} : l.refs, p = l.setupState, b = /* @__PURE__ */ W(p), x = p === Q ? Io : (A) => Qs(f, A) ? !1 : K(b, A), P = (A, M) => !(M && Qs(f, M));
  if (u != null && u !== c) {
    if (eo(t), ae(u))
      f[u] = null, x(u) && (p[u] = null);
    else if (/* @__PURE__ */ he(u)) {
      const A = t;
      P(u, A.k) && (u.value = null), A.k && (f[A.k] = null);
    }
  }
  if (V(c))
    sn(c, l, 12, [r, f]);
  else {
    const A = ae(c), M = /* @__PURE__ */ he(c);
    if (A || M) {
      const N = () => {
        if (e.f) {
          const F = A ? x(c) ? p[c] : f[c] : P() || !e.k ? c.value : f[e.k];
          if (o)
            O(F) && vs(F, i);
          else if (O(F))
            F.includes(i) || F.push(i);
          else if (A)
            f[c] = [i], x(c) && (p[c] = f[c]);
          else {
            const E = [i];
            P(c, e.k) && (c.value = E), e.k && (f[e.k] = E);
          }
        } else A ? (f[c] = r, x(c) && (p[c] = r)) : M && (P(c, e.k) && (c.value = r), e.k && (f[e.k] = r));
      };
      if (r) {
        const F = () => {
          N(), bn.delete(e);
        };
        F.id = -1, bn.set(e, F), xe(F, n);
      } else
        eo(e), N();
    }
  }
}
function eo(e) {
  const t = bn.get(e);
  t && (t.flags |= 8, bn.delete(e));
}
Fn().requestIdleCallback;
Fn().cancelIdleCallback;
const Wt = (e) => !!e.type.__asyncLoader, Mn = (e) => e.type.__isKeepAlive;
function $r(e, t) {
  yi(e, "a", t);
}
function Yr(e, t) {
  yi(e, "da", t);
}
function yi(e, t, n = ge) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (In(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Mn(o.parent.vnode) && Xr(s, t, n, o), o = o.parent;
  }
}
function Xr(e, t, n, s) {
  const o = In(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Ms(() => {
    vs(s[t], o);
  }, n);
}
function In(e, t, n = ge, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      st();
      const l = on(n), c = Ie(t, n, e, r);
      return l(), ot(), c;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const rt = (e) => (t, n = ge) => {
  (!en || e === "sp") && In(e, (...s) => t(...s), n);
}, Qr = rt("bm"), Nn = rt("m"), el = rt(
  "bu"
), tl = rt("u"), Os = rt(
  "bum"
), Ms = rt("um"), nl = rt(
  "sp"
), sl = rt("rtg"), ol = rt("rtc");
function il(e, t = ge) {
  In("ec", e, t);
}
const rl = "components";
function qe(e, t) {
  return cl(rl, e, !0, t) || e;
}
const ll = /* @__PURE__ */ Symbol.for("v-ndc");
function cl(e, t, n = !0, s = !1) {
  const o = Ee || ge;
  if (o) {
    const i = o.type;
    {
      const l = ql(
        i,
        !1
      );
      if (l && (l === t || l === ue(t) || l === Hn(ue(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      to(o[e] || i[e], t) || // global registration
      to(o.appContext[e], t)
    );
    return !r && s ? i : r;
  }
}
function to(e, t) {
  return e && (e[t] || e[ue(t)] || e[Hn(ue(t))]);
}
const us = (e) => e ? zi(e) ? zn(e) : us(e.parent) : null, Kt = (
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
    $parent: (e) => us(e.parent),
    $root: (e) => us(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Si(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Hs.bind(e.proxy)),
    $watch: (e) => Wr.bind(e)
  })
), $n = (e, t) => e !== Q && !e.__isScriptSetup && K(e, t), al = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: c } = e;
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
        if ($n(s, t))
          return r[t] = 1, s[t];
        if (o !== Q && K(o, t))
          return r[t] = 2, o[t];
        if (K(i, t))
          return r[t] = 3, i[t];
        if (n !== Q && K(n, t))
          return r[t] = 4, n[t];
        ds && (r[t] = 0);
      }
    }
    const u = Kt[t];
    let f, p;
    if (u)
      return t === "$attrs" && pe(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Q && K(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, K(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return $n(o, t) ? (o[t] = n, !0) : s !== Q && K(s, t) ? (s[t] = n, !0) : K(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: r }
  }, l) {
    let c;
    return !!(n[l] || e !== Q && l[0] !== "$" && K(e, l) || $n(t, l) || K(i, l) || K(s, l) || K(Kt, l) || K(o.config.globalProperties, l) || (c = r.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : K(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function no(e) {
  return O(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ds = !0;
function fl(e) {
  const t = Si(e), n = e.proxy, s = e.ctx;
  ds = !1, t.beforeCreate && so(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: c,
    inject: u,
    // lifecycle
    created: f,
    beforeMount: p,
    mounted: b,
    beforeUpdate: x,
    updated: P,
    activated: A,
    deactivated: M,
    beforeDestroy: N,
    beforeUnmount: F,
    destroyed: E,
    unmounted: y,
    render: R,
    renderTracked: q,
    renderTriggered: ee,
    errorCaptured: le,
    serverPrefetch: z,
    // public API
    expose: B,
    inheritAttrs: I,
    // assets
    components: T,
    directives: j,
    filters: oe
  } = t;
  if (u && ul(u, s, null), r)
    for (const se in r) {
      const J = r[se];
      V(J) && (s[se] = J.bind(n));
    }
  if (o) {
    const se = o.call(n, n);
    Z(se) && (e.data = /* @__PURE__ */ Ln(se));
  }
  if (ds = !0, i)
    for (const se in i) {
      const J = i[se], ye = V(J) ? J.bind(n, n) : V(J.get) ? J.get.bind(n, n) : Ze, lt = !V(J) && V(J.set) ? J.set.bind(n) : Ze, $e = fe({
        get: ye,
        set: lt
      });
      Object.defineProperty(s, se, {
        enumerable: !0,
        configurable: !0,
        get: () => $e.value,
        set: (Re) => $e.value = Re
      });
    }
  if (l)
    for (const se in l)
      xi(l[se], s, n, se);
  if (c) {
    const se = V(c) ? c.call(n) : c;
    Reflect.ownKeys(se).forEach((J) => {
      Ls(J, se[J]);
    });
  }
  f && so(f, e, "c");
  function ie(se, J) {
    O(J) ? J.forEach((ye) => se(ye.bind(n))) : J && se(J.bind(n));
  }
  if (ie(Qr, p), ie(Nn, b), ie(el, x), ie(tl, P), ie($r, A), ie(Yr, M), ie(il, le), ie(ol, q), ie(sl, ee), ie(Os, F), ie(Ms, y), ie(nl, z), O(B))
    if (B.length) {
      const se = e.exposed || (e.exposed = {});
      B.forEach((J) => {
        Object.defineProperty(se, J, {
          get: () => n[J],
          set: (ye) => n[J] = ye,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  R && e.render === Ze && (e.render = R), I != null && (e.inheritAttrs = I), T && (e.components = T), j && (e.directives = j), z && bi(e);
}
function ul(e, t, n = Ze) {
  O(e) && (e = hs(e));
  for (const s in e) {
    const o = e[s];
    let i;
    Z(o) ? "default" in o ? i = Pt(
      o.from || s,
      o.default,
      !0
    ) : i = Pt(o.from || s) : i = Pt(o), /* @__PURE__ */ he(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[s] = i;
  }
}
function so(e, t, n) {
  Ie(
    O(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function xi(e, t, n, s) {
  let o = s.includes(".") ? di(n, s) : () => n[s];
  if (ae(e)) {
    const i = t[e];
    V(i) && Rt(o, i);
  } else if (V(e))
    Rt(o, e.bind(n));
  else if (Z(e))
    if (O(e))
      e.forEach((i) => xi(i, t, n, s));
    else {
      const i = V(e.handler) ? e.handler.bind(n) : t[e.handler];
      V(i) && Rt(o, i, e);
    }
}
function Si(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (u) => yn(c, u, r, !0)
  ), yn(c, t, r)), Z(t) && i.set(t, c), c;
}
function yn(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && yn(e, i, n, !0), o && o.forEach(
    (r) => yn(e, r, n, !0)
  );
  for (const r in t)
    if (!(s && r === "expose")) {
      const l = dl[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const dl = {
  data: oo,
  props: io,
  emits: io,
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
  watch: pl,
  // provide / inject
  provide: oo,
  inject: hl
};
function oo(e, t) {
  return t ? e ? function() {
    return re(
      V(e) ? e.call(this, this) : e,
      V(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function hl(e, t) {
  return Vt(hs(e), hs(t));
}
function hs(e) {
  if (O(e)) {
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
function io(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : re(
    /* @__PURE__ */ Object.create(null),
    no(e),
    no(t ?? {})
  ) : t;
}
function pl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = re(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = _e(e[s], t[s]);
  return n;
}
function wi() {
  return {
    app: null,
    config: {
      isNativeTag: Io,
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
let gl = 0;
function ml(e, t) {
  return function(s, o = null) {
    V(s) || (s = re({}, s)), o != null && !Z(o) && (o = null);
    const i = wi(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const u = i.app = {
      _uid: gl++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Jl,
      get config() {
        return i.config;
      },
      set config(f) {
      },
      use(f, ...p) {
        return r.has(f) || (f && V(f.install) ? (r.add(f), f.install(u, ...p)) : V(f) && (r.add(f), f(u, ...p))), u;
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), u;
      },
      component(f, p) {
        return p ? (i.components[f] = p, u) : i.components[f];
      },
      directive(f, p) {
        return p ? (i.directives[f] = p, u) : i.directives[f];
      },
      mount(f, p, b) {
        if (!c) {
          const x = u._ceVNode || $(s, o);
          return x.appContext = i, b === !0 ? b = "svg" : b === !1 && (b = void 0), e(x, f, b), c = !0, u._container = f, f.__vue_app__ = u, zn(x.component);
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        c && (Ie(
          l,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, p) {
        return i.provides[f] = p, u;
      },
      runWithContext(f) {
        const p = Ht;
        Ht = u;
        try {
          return f();
        } finally {
          Ht = p;
        }
      }
    };
    return u;
  };
}
let Ht = null;
const _l = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ue(t)}Modifiers`] || e[`${Fe(t)}Modifiers`];
function vl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Q;
  let o = n;
  const i = t.startsWith("update:"), r = i && _l(s, t.slice(7));
  r && (r.trim && (o = n.map((f) => ae(f) ? f.trim() : f)), r.number && (o = n.map(nr)));
  let l, c = s[l = Un(t)] || // also try camelCase event handler (#2249)
  s[l = Un(ue(t))];
  !c && i && (c = s[l = Un(Fe(t))]), c && Ie(
    c,
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
    e.emitted[l] = !0, Ie(
      u,
      e,
      6,
      o
    );
  }
}
const bl = /* @__PURE__ */ new WeakMap();
function Ti(e, t, n = !1) {
  const s = n ? bl : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!V(e)) {
    const c = (u) => {
      const f = Ti(u, t, !0);
      f && (l = !0, re(r, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (Z(e) && s.set(e, null), null) : (O(i) ? i.forEach((c) => r[c] = null) : re(r, i), Z(e) && s.set(e, r), r);
}
function Dn(e, t) {
  return !e || !En(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, Fe(t)) || K(e, t));
}
function ro(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    props: p,
    data: b,
    setupState: x,
    ctx: P,
    inheritAttrs: A
  } = e, M = _n(e);
  let N, F;
  try {
    if (n.shapeFlag & 4) {
      const y = o || s, R = y;
      N = We(
        u.call(
          R,
          y,
          f,
          p,
          x,
          b,
          P
        )
      ), F = l;
    } else {
      const y = t;
      N = We(
        y.length > 1 ? y(
          p,
          { attrs: l, slots: r, emit: c }
        ) : y(
          p,
          null
        )
      ), F = t.props ? l : yl(l);
    }
  } catch (y) {
    qt.length = 0, On(y, e, 1), N = $(be);
  }
  let E = N;
  if (F && A !== !1) {
    const y = Object.keys(F), { shapeFlag: R } = E;
    y.length && R & 7 && (i && y.some(kn) && (F = xl(
      F,
      i
    )), E = dt(E, F, !1, !0));
  }
  return n.dirs && (E = dt(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && Xt(E, n.transition), N = E, _n(M), N;
}
const yl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || En(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, xl = (e, t) => {
  const n = {};
  for (const s in e)
    (!kn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Sl(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: c } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? lo(s, r, u) : !!r;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const b = f[p];
        if (Ci(r, s, b) && !Dn(u, b))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? lo(s, r, u) : !0 : !!r;
  return !1;
}
function lo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (Ci(t, e, i) && !Dn(n, i))
      return !0;
  }
  return !1;
}
function Ci(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && Z(s) && Z(o) ? !xs(s, o) : s !== o;
}
function wl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = s, e = o), o === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Ai = {}, Ei = () => Object.create(Ai), ki = (e) => Object.getPrototypeOf(e) === Ai;
function Tl(e, t, n, s = !1) {
  const o = {}, i = Ei();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Pi(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ Rr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function Cl(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ W(o), [c] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let b = f[p];
        if (Dn(e.emitsOptions, b))
          continue;
        const x = t[b];
        if (c)
          if (K(i, b))
            x !== i[b] && (i[b] = x, u = !0);
          else {
            const P = ue(b);
            o[P] = ps(
              c,
              l,
              P,
              x,
              e,
              !1
            );
          }
        else
          x !== i[b] && (i[b] = x, u = !0);
      }
    }
  } else {
    Pi(e, t, o, i) && (u = !0);
    let f;
    for (const p in l)
      (!t || // for camelCase
      !K(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Fe(p)) === p || !K(t, f))) && (c ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[f] !== void 0) && (o[p] = ps(
        c,
        l,
        p,
        void 0,
        e,
        !0
      )) : delete o[p]);
    if (i !== l)
      for (const p in i)
        (!t || !K(t, p)) && (delete i[p], u = !0);
  }
  u && tt(e.attrs, "set", "");
}
function Pi(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let c in t) {
      if (zt(c))
        continue;
      const u = t[c];
      let f;
      o && K(o, f = ue(c)) ? !i || !i.includes(f) ? n[f] = u : (l || (l = {}))[f] = u : Dn(e.emitsOptions, c) || (!(c in s) || u !== s[c]) && (s[c] = u, r = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ W(n), u = l || Q;
    for (let f = 0; f < i.length; f++) {
      const p = i[f];
      n[p] = ps(
        o,
        c,
        p,
        u[p],
        e,
        !K(u, p)
      );
    }
  }
  return r;
}
function ps(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = K(r, "default");
    if (l && s === void 0) {
      const c = r.default;
      if (r.type !== Function && !r.skipFactory && V(c)) {
        const { propsDefaults: u } = o;
        if (n in u)
          s = u[n];
        else {
          const f = on(o);
          s = u[n] = c.call(
            null,
            t
          ), f();
        }
      } else
        s = c;
      o.ce && o.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Fe(n)) && (s = !0));
  }
  return s;
}
const Al = /* @__PURE__ */ new WeakMap();
function Ri(e, t, n = !1) {
  const s = n ? Al : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let c = !1;
  if (!V(e)) {
    const f = (p) => {
      c = !0;
      const [b, x] = Ri(p, t, !0);
      re(r, b), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c)
    return Z(e) && s.set(e, Ct), Ct;
  if (O(i))
    for (let f = 0; f < i.length; f++) {
      const p = ue(i[f]);
      co(p) && (r[p] = Q);
    }
  else if (i)
    for (const f in i) {
      const p = ue(f);
      if (co(p)) {
        const b = i[f], x = r[p] = O(b) || V(b) ? { type: b } : re({}, b), P = x.type;
        let A = !1, M = !0;
        if (O(P))
          for (let N = 0; N < P.length; ++N) {
            const F = P[N], E = V(F) && F.name;
            if (E === "Boolean") {
              A = !0;
              break;
            } else E === "String" && (M = !1);
          }
        else
          A = V(P) && P.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = A, x[
          1
          /* shouldCastTrue */
        ] = M, (A || K(x, "default")) && l.push(p);
      }
    }
  const u = [r, l];
  return Z(e) && s.set(e, u), u;
}
function co(e) {
  return e[0] !== "$" && !zt(e);
}
const Is = (e) => e === "_" || e === "_ctx" || e === "$stable", Ns = (e) => O(e) ? e.map(We) : [We(e)], El = (e, t, n) => {
  if (t._n)
    return t;
  const s = fi((...o) => Ns(t(...o)), n);
  return s._c = !1, s;
}, Hi = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Is(o)) continue;
    const i = e[o];
    if (V(i))
      t[o] = El(o, i, s);
    else if (i != null) {
      const r = Ns(i);
      t[o] = () => r;
    }
  }
}, Fi = (e, t) => {
  const n = Ns(t);
  e.slots.default = () => n;
}, Li = (e, t, n) => {
  for (const s in t)
    (n || !Is(s)) && (e[s] = t[s]);
}, kl = (e, t, n) => {
  const s = e.slots = Ei();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Li(s, t, n), n && zo(s, "_", o, !0)) : Hi(t, s);
  } else t && Fi(e, t);
}, Pl = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = Q;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Li(o, t, n) : (i = !t.$stable, Hi(t, o)), r = t;
  } else t && (Fi(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !Is(l) && r[l] == null && delete o[l];
}, xe = Ol;
function Rl(e) {
  return Hl(e);
}
function Hl(e, t) {
  const n = Fn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: c,
    setText: u,
    setElementText: f,
    parentNode: p,
    nextSibling: b,
    setScopeId: x = Ze,
    insertStaticContent: P
  } = e, A = (a, d, h, g = null, m = null, _ = null, C = void 0, w = null, S = !!d.dynamicChildren) => {
    if (a === d)
      return;
    a && !bt(a, d) && (g = St(a), Re(a, m, _, !0), a = null), d.patchFlag === -2 && (S = !1, d.dynamicChildren = null);
    const { type: v, ref: L, shapeFlag: k } = d;
    switch (v) {
      case Vn:
        M(a, d, h, g);
        break;
      case be:
        N(a, d, h, g);
        break;
      case Xn:
        a == null && F(d, h, g, C);
        break;
      case Ae:
        T(
          a,
          d,
          h,
          g,
          m,
          _,
          C,
          w,
          S
        );
        break;
      default:
        k & 1 ? R(
          a,
          d,
          h,
          g,
          m,
          _,
          C,
          w,
          S
        ) : k & 6 ? j(
          a,
          d,
          h,
          g,
          m,
          _,
          C,
          w,
          S
        ) : (k & 64 || k & 128) && v.process(
          a,
          d,
          h,
          g,
          m,
          _,
          C,
          w,
          S,
          ct
        );
    }
    L != null && m ? Ut(L, a && a.ref, _, d || a, !d) : L == null && a && a.ref != null && Ut(a.ref, null, _, a, !0);
  }, M = (a, d, h, g) => {
    if (a == null)
      s(
        d.el = l(d.children),
        h,
        g
      );
    else {
      const m = d.el = a.el;
      d.children !== a.children && u(m, d.children);
    }
  }, N = (a, d, h, g) => {
    a == null ? s(
      d.el = c(d.children || ""),
      h,
      g
    ) : d.el = a.el;
  }, F = (a, d, h, g) => {
    [a.el, a.anchor] = P(
      a.children,
      d,
      h,
      g,
      a.el,
      a.anchor
    );
  }, E = ({ el: a, anchor: d }, h, g) => {
    let m;
    for (; a && a !== d; )
      m = b(a), s(a, h, g), a = m;
    s(d, h, g);
  }, y = ({ el: a, anchor: d }) => {
    let h;
    for (; a && a !== d; )
      h = b(a), o(a), a = h;
    o(d);
  }, R = (a, d, h, g, m, _, C, w, S) => {
    if (d.type === "svg" ? C = "svg" : d.type === "math" && (C = "mathml"), a == null)
      q(
        d,
        h,
        g,
        m,
        _,
        C,
        w,
        S
      );
    else {
      const v = a.el && a.el._isVueCE ? a.el : null;
      try {
        v && v._beginPatch(), z(
          a,
          d,
          m,
          _,
          C,
          w,
          S
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, q = (a, d, h, g, m, _, C, w) => {
    let S, v;
    const { props: L, shapeFlag: k, transition: H, dirs: D } = a;
    if (S = a.el = r(
      a.type,
      _,
      L && L.is,
      L
    ), k & 8 ? f(S, a.children) : k & 16 && le(
      a.children,
      S,
      null,
      g,
      m,
      Yn(a, _),
      C,
      w
    ), D && pt(a, null, g, "created"), ee(S, a, a.scopeId, C, g), L) {
      for (const Y in L)
        Y !== "value" && !zt(Y) && i(S, Y, null, L[Y], _, g);
      "value" in L && i(S, "value", null, L.value, _), (v = L.onVnodeBeforeMount) && ze(v, g, a);
    }
    D && pt(a, null, g, "beforeMount");
    const U = Fl(m, H);
    U && H.beforeEnter(S), s(S, d, h), ((v = L && L.onVnodeMounted) || U || D) && xe(() => {
      v && ze(v, g, a), U && H.enter(S), D && pt(a, null, g, "mounted");
    }, m);
  }, ee = (a, d, h, g, m) => {
    if (h && x(a, h), g)
      for (let _ = 0; _ < g.length; _++)
        x(a, g[_]);
    if (m) {
      let _ = m.subTree;
      if (d === _ || Ni(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const C = m.vnode;
        ee(
          a,
          C,
          C.scopeId,
          C.slotScopeIds,
          m.parent
        );
      }
    }
  }, le = (a, d, h, g, m, _, C, w, S = 0) => {
    for (let v = S; v < a.length; v++) {
      const L = a[v] = w ? et(a[v]) : We(a[v]);
      A(
        null,
        L,
        d,
        h,
        g,
        m,
        _,
        C,
        w
      );
    }
  }, z = (a, d, h, g, m, _, C) => {
    const w = d.el = a.el;
    let { patchFlag: S, dynamicChildren: v, dirs: L } = d;
    S |= a.patchFlag & 16;
    const k = a.props || Q, H = d.props || Q;
    let D;
    if (h && gt(h, !1), (D = H.onVnodeBeforeUpdate) && ze(D, h, d, a), L && pt(d, a, h, "beforeUpdate"), h && gt(h, !0), (k.innerHTML && H.innerHTML == null || k.textContent && H.textContent == null) && f(w, ""), v ? B(
      a.dynamicChildren,
      v,
      w,
      h,
      g,
      Yn(d, m),
      _
    ) : C || J(
      a,
      d,
      w,
      null,
      h,
      g,
      Yn(d, m),
      _,
      !1
    ), S > 0) {
      if (S & 16)
        I(w, k, H, h, m);
      else if (S & 2 && k.class !== H.class && i(w, "class", null, H.class, m), S & 4 && i(w, "style", k.style, H.style, m), S & 8) {
        const U = d.dynamicProps;
        for (let Y = 0; Y < U.length; Y++) {
          const te = U[Y], ce = k[te], de = H[te];
          (de !== ce || te === "value") && i(w, te, ce, de, m, h);
        }
      }
      S & 1 && a.children !== d.children && f(w, d.children);
    } else !C && v == null && I(w, k, H, h, m);
    ((D = H.onVnodeUpdated) || L) && xe(() => {
      D && ze(D, h, d, a), L && pt(d, a, h, "updated");
    }, g);
  }, B = (a, d, h, g, m, _, C) => {
    for (let w = 0; w < d.length; w++) {
      const S = a[w], v = d[w], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === Ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !bt(S, v) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? p(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      A(
        S,
        v,
        L,
        null,
        g,
        m,
        _,
        C,
        !0
      );
    }
  }, I = (a, d, h, g, m) => {
    if (d !== h) {
      if (d !== Q)
        for (const _ in d)
          !zt(_) && !(_ in h) && i(
            a,
            _,
            d[_],
            null,
            m,
            g
          );
      for (const _ in h) {
        if (zt(_)) continue;
        const C = h[_], w = d[_];
        C !== w && _ !== "value" && i(a, _, w, C, m, g);
      }
      "value" in h && i(a, "value", d.value, h.value, m);
    }
  }, T = (a, d, h, g, m, _, C, w, S) => {
    const v = d.el = a ? a.el : l(""), L = d.anchor = a ? a.anchor : l("");
    let { patchFlag: k, dynamicChildren: H, slotScopeIds: D } = d;
    D && (w = w ? w.concat(D) : D), a == null ? (s(v, h, g), s(L, h, g), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      h,
      L,
      m,
      _,
      C,
      w,
      S
    )) : k > 0 && k & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === H.length ? (B(
      a.dynamicChildren,
      H,
      h,
      m,
      _,
      C,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || m && d === m.subTree) && Oi(
      a,
      d,
      !0
      /* shallow */
    )) : J(
      a,
      d,
      h,
      L,
      m,
      _,
      C,
      w,
      S
    );
  }, j = (a, d, h, g, m, _, C, w, S) => {
    d.slotScopeIds = w, a == null ? d.shapeFlag & 512 ? m.ctx.activate(
      d,
      h,
      g,
      C,
      S
    ) : oe(
      d,
      h,
      g,
      m,
      _,
      C,
      S
    ) : Pe(a, d, S);
  }, oe = (a, d, h, g, m, _, C) => {
    const w = a.component = jl(
      a,
      g,
      m
    );
    if (Mn(a) && (w.ctx.renderer = ct), Bl(w, !1, C), w.asyncDep) {
      if (m && m.registerDep(w, ie, C), !a.el) {
        const S = w.subTree = $(be);
        N(null, S, d, h), a.placeholder = S.el;
      }
    } else
      ie(
        w,
        a,
        d,
        h,
        m,
        _,
        C
      );
  }, Pe = (a, d, h) => {
    const g = d.component = a.component;
    if (Sl(a, d, h))
      if (g.asyncDep && !g.asyncResolved) {
        se(g, d, h);
        return;
      } else
        g.next = d, g.update();
    else
      d.el = a.el, g.vnode = d;
  }, ie = (a, d, h, g, m, _, C) => {
    const w = () => {
      if (a.isMounted) {
        let { next: k, bu: H, u: D, parent: U, vnode: Y } = a;
        {
          const De = Mi(a);
          if (De) {
            k && (k.el = Y.el, se(a, k, C)), De.asyncDep.then(() => {
              xe(() => {
                a.isUnmounted || v();
              }, m);
            });
            return;
          }
        }
        let te = k, ce;
        gt(a, !1), k ? (k.el = Y.el, se(a, k, C)) : k = Y, H && Wn(H), (ce = k.props && k.props.onVnodeBeforeUpdate) && ze(ce, U, k, Y), gt(a, !0);
        const de = ro(a), Ne = a.subTree;
        a.subTree = de, A(
          Ne,
          de,
          // parent may have changed if it's in a teleport
          p(Ne.el),
          // anchor may have changed if it's in a fragment
          St(Ne),
          a,
          m,
          _
        ), k.el = de.el, te === null && wl(a, de.el), D && xe(D, m), (ce = k.props && k.props.onVnodeUpdated) && xe(
          () => ze(ce, U, k, Y),
          m
        );
      } else {
        let k;
        const { el: H, props: D } = d, { bm: U, m: Y, parent: te, root: ce, type: de } = a, Ne = Wt(d);
        gt(a, !1), U && Wn(U), !Ne && (k = D && D.onVnodeBeforeMount) && ze(k, te, d), gt(a, !0);
        {
          ce.ce && ce.ce._hasShadowRoot() && ce.ce._injectChildStyle(
            de,
            a.parent ? a.parent.type : void 0
          );
          const De = a.subTree = ro(a);
          A(
            null,
            De,
            h,
            g,
            a,
            m,
            _
          ), d.el = De.el;
        }
        if (Y && xe(Y, m), !Ne && (k = D && D.onVnodeMounted)) {
          const De = d;
          xe(
            () => ze(k, te, De),
            m
          );
        }
        (d.shapeFlag & 256 || te && Wt(te.vnode) && te.vnode.shapeFlag & 256) && a.a && xe(a.a, m), a.isMounted = !0, d = h = g = null;
      }
    };
    a.scope.on();
    const S = a.effect = new Wo(w);
    a.scope.off();
    const v = a.update = S.run.bind(S), L = a.job = S.runIfDirty.bind(S);
    L.i = a, L.id = a.uid, S.scheduler = () => Fs(L), gt(a, !0), v();
  }, se = (a, d, h) => {
    d.component = a;
    const g = a.vnode.props;
    a.vnode = d, a.next = null, Cl(a, d.props, g, h), Pl(a, d.children, h), st(), Ys(a), ot();
  }, J = (a, d, h, g, m, _, C, w, S = !1) => {
    const v = a && a.children, L = a ? a.shapeFlag : 0, k = d.children, { patchFlag: H, shapeFlag: D } = d;
    if (H > 0) {
      if (H & 128) {
        lt(
          v,
          k,
          h,
          g,
          m,
          _,
          C,
          w,
          S
        );
        return;
      } else if (H & 256) {
        ye(
          v,
          k,
          h,
          g,
          m,
          _,
          C,
          w,
          S
        );
        return;
      }
    }
    D & 8 ? (L & 16 && ht(v, m, _), k !== v && f(h, k)) : L & 16 ? D & 16 ? lt(
      v,
      k,
      h,
      g,
      m,
      _,
      C,
      w,
      S
    ) : ht(v, m, _, !0) : (L & 8 && f(h, ""), D & 16 && le(
      k,
      h,
      g,
      m,
      _,
      C,
      w,
      S
    ));
  }, ye = (a, d, h, g, m, _, C, w, S) => {
    a = a || Ct, d = d || Ct;
    const v = a.length, L = d.length, k = Math.min(v, L);
    let H;
    for (H = 0; H < k; H++) {
      const D = d[H] = S ? et(d[H]) : We(d[H]);
      A(
        a[H],
        D,
        h,
        null,
        m,
        _,
        C,
        w,
        S
      );
    }
    v > L ? ht(
      a,
      m,
      _,
      !0,
      !1,
      k
    ) : le(
      d,
      h,
      g,
      m,
      _,
      C,
      w,
      S,
      k
    );
  }, lt = (a, d, h, g, m, _, C, w, S) => {
    let v = 0;
    const L = d.length;
    let k = a.length - 1, H = L - 1;
    for (; v <= k && v <= H; ) {
      const D = a[v], U = d[v] = S ? et(d[v]) : We(d[v]);
      if (bt(D, U))
        A(
          D,
          U,
          h,
          null,
          m,
          _,
          C,
          w,
          S
        );
      else
        break;
      v++;
    }
    for (; v <= k && v <= H; ) {
      const D = a[k], U = d[H] = S ? et(d[H]) : We(d[H]);
      if (bt(D, U))
        A(
          D,
          U,
          h,
          null,
          m,
          _,
          C,
          w,
          S
        );
      else
        break;
      k--, H--;
    }
    if (v > k) {
      if (v <= H) {
        const D = H + 1, U = D < L ? d[D].el : g;
        for (; v <= H; )
          A(
            null,
            d[v] = S ? et(d[v]) : We(d[v]),
            h,
            U,
            m,
            _,
            C,
            w,
            S
          ), v++;
      }
    } else if (v > H)
      for (; v <= k; )
        Re(a[v], m, _, !0), v++;
    else {
      const D = v, U = v, Y = /* @__PURE__ */ new Map();
      for (v = U; v <= H; v++) {
        const Ce = d[v] = S ? et(d[v]) : We(d[v]);
        Ce.key != null && Y.set(Ce.key, v);
      }
      let te, ce = 0;
      const de = H - U + 1;
      let Ne = !1, De = 0;
      const Ot = new Array(de);
      for (v = 0; v < de; v++) Ot[v] = 0;
      for (v = D; v <= k; v++) {
        const Ce = a[v];
        if (ce >= de) {
          Re(Ce, m, _, !0);
          continue;
        }
        let Ve;
        if (Ce.key != null)
          Ve = Y.get(Ce.key);
        else
          for (te = U; te <= H; te++)
            if (Ot[te - U] === 0 && bt(Ce, d[te])) {
              Ve = te;
              break;
            }
        Ve === void 0 ? Re(Ce, m, _, !0) : (Ot[Ve - U] = v + 1, Ve >= De ? De = Ve : Ne = !0, A(
          Ce,
          d[Ve],
          h,
          null,
          m,
          _,
          C,
          w,
          S
        ), ce++);
      }
      const Us = Ne ? Ll(Ot) : Ct;
      for (te = Us.length - 1, v = de - 1; v >= 0; v--) {
        const Ce = U + v, Ve = d[Ce], Ws = d[Ce + 1], Ks = Ce + 1 < L ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ws.el || Ii(Ws)
        ) : g;
        Ot[v] === 0 ? A(
          null,
          Ve,
          h,
          Ks,
          m,
          _,
          C,
          w,
          S
        ) : Ne && (te < 0 || v !== Us[te] ? $e(Ve, h, Ks, 2) : te--);
      }
    }
  }, $e = (a, d, h, g, m = null) => {
    const { el: _, type: C, transition: w, children: S, shapeFlag: v } = a;
    if (v & 6) {
      $e(a.component.subTree, d, h, g);
      return;
    }
    if (v & 128) {
      a.suspense.move(d, h, g);
      return;
    }
    if (v & 64) {
      C.move(a, d, h, ct);
      return;
    }
    if (C === Ae) {
      s(_, d, h);
      for (let k = 0; k < S.length; k++)
        $e(S[k], d, h, g);
      s(a.anchor, d, h);
      return;
    }
    if (C === Xn) {
      E(a, d, h);
      return;
    }
    if (g !== 2 && v & 1 && w)
      if (g === 0)
        w.beforeEnter(_), s(_, d, h), xe(() => w.enter(_), m);
      else {
        const { leave: k, delayLeave: H, afterLeave: D } = w, U = () => {
          a.ctx.isUnmounted ? o(_) : s(_, d, h);
        }, Y = () => {
          _._isLeaving && _[Be](
            !0
            /* cancelled */
          ), k(_, () => {
            U(), D && D();
          });
        };
        H ? H(_, U, Y) : Y();
      }
    else
      s(_, d, h);
  }, Re = (a, d, h, g = !1, m = !1) => {
    const {
      type: _,
      props: C,
      ref: w,
      children: S,
      dynamicChildren: v,
      shapeFlag: L,
      patchFlag: k,
      dirs: H,
      cacheIndex: D,
      memo: U
    } = a;
    if (k === -2 && (m = !1), w != null && (st(), Ut(w, null, h, a, !0), ot()), D != null && (d.renderCache[D] = void 0), L & 256) {
      d.ctx.deactivate(a);
      return;
    }
    const Y = L & 1 && H, te = !Wt(a);
    let ce;
    if (te && (ce = C && C.onVnodeBeforeUnmount) && ze(ce, d, a), L & 6)
      cn(a.component, h, g);
    else {
      if (L & 128) {
        a.suspense.unmount(h, g);
        return;
      }
      Y && pt(a, null, d, "beforeUnmount"), L & 64 ? a.type.remove(
        a,
        d,
        h,
        ct,
        g
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Ae || k > 0 && k & 64) ? ht(
        v,
        d,
        h,
        !1,
        !0
      ) : (_ === Ae && k & 384 || !m && L & 16) && ht(S, d, h), g && rn(a);
    }
    const de = U != null && D == null;
    (te && (ce = C && C.onVnodeUnmounted) || Y || de) && xe(() => {
      ce && ze(ce, d, a), Y && pt(a, null, d, "unmounted"), de && (a.el = null);
    }, h);
  }, rn = (a) => {
    const { type: d, el: h, anchor: g, transition: m } = a;
    if (d === Ae) {
      ln(h, g);
      return;
    }
    if (d === Xn) {
      y(a);
      return;
    }
    const _ = () => {
      o(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (a.shapeFlag & 1 && m && !m.persisted) {
      const { leave: C, delayLeave: w } = m, S = () => C(h, _);
      w ? w(a.el, _, S) : S();
    } else
      _();
  }, ln = (a, d) => {
    let h;
    for (; a !== d; )
      h = b(a), o(a), a = h;
    o(d);
  }, cn = (a, d, h) => {
    const { bum: g, scope: m, job: _, subTree: C, um: w, m: S, a: v } = a;
    ao(S), ao(v), g && Wn(g), m.stop(), _ && (_.flags |= 8, Re(C, a, d, h)), w && xe(w, d), xe(() => {
      a.isUnmounted = !0;
    }, d);
  }, ht = (a, d, h, g = !1, m = !1, _ = 0) => {
    for (let C = _; C < a.length; C++)
      Re(a[C], d, h, g, m);
  }, St = (a) => {
    if (a.shapeFlag & 6)
      return St(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const d = b(a.anchor || a.el), h = d && d[Kr];
    return h ? b(h) : d;
  };
  let Lt = !1;
  const an = (a, d, h) => {
    let g;
    a == null ? d._vnode && (Re(d._vnode, null, null, !0), g = d._vnode.component) : A(
      d._vnode || null,
      a,
      d,
      null,
      null,
      null,
      h
    ), d._vnode = a, Lt || (Lt = !0, Ys(g), li(), Lt = !1);
  }, ct = {
    p: A,
    um: Re,
    m: $e,
    r: rn,
    mt: oe,
    mc: le,
    pc: J,
    pbc: B,
    n: St,
    o: e
  };
  return {
    render: an,
    hydrate: void 0,
    createApp: ml(an)
  };
}
function Yn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function gt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Fl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Oi(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (O(s) && O(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = et(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && Oi(r, l)), l.type === Vn && (l.patchFlag === -1 && (l = o[i] = et(l)), l.el = r.el), l.type === be && !l.el && (l.el = r.el);
    }
}
function Ll(e) {
  const t = e.slice(), n = [0];
  let s, o, i, r, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
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
function Mi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Mi(t);
}
function ao(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ii(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ii(t.subTree) : null;
}
const Ni = (e) => e.__isSuspense;
function Ol(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : jr(e);
}
const Ae = /* @__PURE__ */ Symbol.for("v-fgt"), Vn = /* @__PURE__ */ Symbol.for("v-txt"), be = /* @__PURE__ */ Symbol.for("v-cmt"), Xn = /* @__PURE__ */ Symbol.for("v-stc"), qt = [];
let ke = null;
function X(e = !1) {
  qt.push(ke = e ? null : []);
}
function Ml() {
  qt.pop(), ke = qt[qt.length - 1] || null;
}
let Qt = 1;
function xn(e, t = !1) {
  Qt += e, e < 0 && ke && t && (ke.hasOnce = !0);
}
function Di(e) {
  return e.dynamicChildren = Qt > 0 ? ke || Ct : null, Ml(), Qt > 0 && ke && ke.push(e), e;
}
function me(e, t, n, s, o, i) {
  return Di(
    G(
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
function Le(e, t, n, s, o) {
  return Di(
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
function Sn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function bt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vi = ({ key: e }) => e ?? null, hn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || /* @__PURE__ */ he(e) || V(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function G(e, t = null, n = null, s = 0, o = null, i = e === Ae ? 0 : 1, r = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vi(t),
    ref: t && hn(t),
    scopeId: ai,
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
    ctx: Ee
  };
  return l ? (Ds(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= ae(n) ? 8 : 16), Qt > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ke.push(c), c;
}
const $ = Il;
function Il(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === ll) && (e = be), Sn(e)) {
    const l = dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ds(l, n), Qt > 0 && !i && ke && (l.shapeFlag & 6 ? ke[ke.indexOf(e)] = l : ke.push(l)), l.patchFlag = -2, l;
  }
  if (Gl(e) && (e = e.__vccOpts), t) {
    t = Nl(t);
    let { class: l, style: c } = t;
    l && !ae(l) && (t.class = xt(l)), Z(c) && (/* @__PURE__ */ Ps(c) && !O(c) && (c = re({}, c)), t.style = ys(c));
  }
  const r = ae(e) ? 1 : Ni(e) ? 128 : hi(e) ? 64 : Z(e) ? 4 : V(e) ? 2 : 0;
  return G(
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
function Nl(e) {
  return e ? /* @__PURE__ */ Ps(e) || ki(e) ? re({}, e) : e : null;
}
function dt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: c } = e, u = t ? Dl(o || {}, t) : o, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Vi(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? O(i) ? i.concat(hn(t)) : [i, hn(t)] : hn(t)
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
    transition: c,
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
  return c && s && Xt(
    f,
    c.clone(f)
  ), f;
}
function Gt(e = " ", t = 0) {
  return $(Vn, null, e, t);
}
function Ge(e = "", t = !1) {
  return t ? (X(), Le(be, null, e)) : $(be, null, e);
}
function We(e) {
  return e == null || typeof e == "boolean" ? $(be) : O(e) ? $(
    Ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Sn(e) ? et(e) : $(Vn, null, String(e));
}
function et(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : dt(e);
}
function Ds(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (O(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Ds(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !ki(t) ? t._ctx = Ee : o === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else V(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Gt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Dl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = xt([t.class, s.class]));
      else if (o === "style")
        t.style = ys([t.style, s.style]);
      else if (En(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(O(i) && i.includes(r)) ? t[o] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !kn(o) && (t[o] = r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function ze(e, t, n, s = null) {
  Ie(e, t, 7, [
    n,
    s
  ]);
}
const Vl = wi();
let zl = 0;
function jl(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Vl, i = {
    uid: zl++,
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
    scope: new fr(
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
    propsOptions: Ri(s, o),
    emitsOptions: Ti(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = vl.bind(null, i), e.ce && e.ce(i), i;
}
let ge = null;
const Vs = () => ge || Ee;
let wn, gs;
{
  const e = Fn(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  wn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ge = n
  ), gs = t(
    "__VUE_SSR_SETTERS__",
    (n) => en = n
  );
}
const on = (e) => {
  const t = ge;
  return wn(e), e.scope.on(), () => {
    e.scope.off(), wn(t);
  };
}, fo = () => {
  ge && ge.scope.off(), wn(null);
};
function zi(e) {
  return e.vnode.shapeFlag & 4;
}
let en = !1;
function Bl(e, t = !1, n = !1) {
  t && gs(t);
  const { props: s, children: o } = e.vnode, i = zi(e);
  Tl(e, s, i, t), kl(e, o, n || t);
  const r = i ? Ul(e, t) : void 0;
  return t && gs(!1), r;
}
function Ul(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, al);
  const { setup: s } = n;
  if (s) {
    st();
    const o = e.setupContext = s.length > 1 ? Kl(e) : null, i = on(e), r = sn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = Do(r);
    if (ot(), i(), (l || e.sp) && !Wt(e) && bi(e), l) {
      if (r.then(fo, fo), t)
        return r.then((c) => {
          uo(e, c);
        }).catch((c) => {
          On(c, e, 0);
        });
      e.asyncDep = r;
    } else
      uo(e, r);
  } else
    ji(e);
}
function uo(e, t, n) {
  V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) && (e.setupState = oi(t)), ji(e);
}
function ji(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ze);
  {
    const o = on(e);
    st();
    try {
      fl(e);
    } finally {
      ot(), o();
    }
  }
}
const Wl = {
  get(e, t) {
    return pe(e, "get", ""), e[t];
  }
};
function Kl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Wl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function zn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(oi(Hr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Kt)
        return Kt[n](e);
    },
    has(t, n) {
      return n in t || n in Kt;
    }
  })) : e.proxy;
}
function ql(e, t = !0) {
  return V(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Gl(e) {
  return V(e) && "__vccOpts" in e;
}
const fe = (e, t) => /* @__PURE__ */ Ir(e, t, en);
function Zl(e, t, n) {
  try {
    xn(-1);
    const s = arguments.length;
    return s === 2 ? Z(t) && !O(t) ? Sn(t) ? $(e, null, [t]) : $(e, t) : $(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Sn(n) && (n = [n]), $(e, t, n));
  } finally {
    xn(1);
  }
}
const Jl = "3.5.31";
let ms;
const ho = typeof window < "u" && window.trustedTypes;
if (ho)
  try {
    ms = /* @__PURE__ */ ho.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Bi = ms ? (e) => ms.createHTML(e) : (e) => e, $l = "http://www.w3.org/2000/svg", Yl = "http://www.w3.org/1998/Math/MathML", Qe = typeof document < "u" ? document : null, po = Qe && /* @__PURE__ */ Qe.createElement("template"), Xl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Qe.createElementNS($l, e) : t === "mathml" ? Qe.createElementNS(Yl, e) : n ? Qe.createElement(e, { is: n }) : Qe.createElement(e);
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
      po.innerHTML = Bi(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = po.content;
      if (s === "svg" || s === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
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
}, at = "transition", Nt = "animation", tn = /* @__PURE__ */ Symbol("_vtc"), Ui = {
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
}, Ql = /* @__PURE__ */ re(
  {},
  pi,
  Ui
), ec = (e) => (e.displayName = "Transition", e.props = Ql, e), tc = /* @__PURE__ */ ec(
  (e, { slots: t }) => Zl(Zr, nc(e), t)
), mt = (e, t = []) => {
  O(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, go = (e) => e ? O(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function nc(e) {
  const t = {};
  for (const T in e)
    T in Ui || (t[T] = e[T]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: r = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = i,
    appearActiveClass: u = r,
    appearToClass: f = l,
    leaveFromClass: p = `${n}-leave-from`,
    leaveActiveClass: b = `${n}-leave-active`,
    leaveToClass: x = `${n}-leave-to`
  } = e, P = sc(o), A = P && P[0], M = P && P[1], {
    onBeforeEnter: N,
    onEnter: F,
    onEnterCancelled: E,
    onLeave: y,
    onLeaveCancelled: R,
    onBeforeAppear: q = N,
    onAppear: ee = F,
    onAppearCancelled: le = E
  } = t, z = (T, j, oe, Pe) => {
    T._enterCancelled = Pe, _t(T, j ? f : l), _t(T, j ? u : r), oe && oe();
  }, B = (T, j) => {
    T._isLeaving = !1, _t(T, p), _t(T, x), _t(T, b), j && j();
  }, I = (T) => (j, oe) => {
    const Pe = T ? ee : F, ie = () => z(j, T, oe);
    mt(Pe, [j, ie]), mo(() => {
      _t(j, T ? c : i), Xe(j, T ? f : l), go(Pe) || _o(j, s, A, ie);
    });
  };
  return re(t, {
    onBeforeEnter(T) {
      mt(N, [T]), Xe(T, i), Xe(T, r);
    },
    onBeforeAppear(T) {
      mt(q, [T]), Xe(T, c), Xe(T, u);
    },
    onEnter: I(!1),
    onAppear: I(!0),
    onLeave(T, j) {
      T._isLeaving = !0;
      const oe = () => B(T, j);
      Xe(T, p), T._enterCancelled ? (Xe(T, b), yo(T)) : (yo(T), Xe(T, b)), mo(() => {
        T._isLeaving && (_t(T, p), Xe(T, x), go(y) || _o(T, s, M, oe));
      }), mt(y, [T, oe]);
    },
    onEnterCancelled(T) {
      z(T, !1, void 0, !0), mt(E, [T]);
    },
    onAppearCancelled(T) {
      z(T, !0, void 0, !0), mt(le, [T]);
    },
    onLeaveCancelled(T) {
      B(T), mt(R, [T]);
    }
  });
}
function sc(e) {
  if (e == null)
    return null;
  if (Z(e))
    return [Qn(e.enter), Qn(e.leave)];
  {
    const t = Qn(e);
    return [t, t];
  }
}
function Qn(e) {
  return os(e);
}
function Xe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[tn] || (e[tn] = /* @__PURE__ */ new Set())).add(t);
}
function _t(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[tn];
  n && (n.delete(t), n.size || (e[tn] = void 0));
}
function mo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let oc = 0;
function _o(e, t, n, s) {
  const o = e._endId = ++oc, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: r, timeout: l, propCount: c } = ic(e, t);
  if (!r)
    return s();
  const u = r + "end";
  let f = 0;
  const p = () => {
    e.removeEventListener(u, b), i();
  }, b = (x) => {
    x.target === e && ++f >= c && p();
  };
  setTimeout(() => {
    f < c && p();
  }, l + 1), e.addEventListener(u, b);
}
function ic(e, t) {
  const n = window.getComputedStyle(e), s = (P) => (n[P] || "").split(", "), o = s(`${at}Delay`), i = s(`${at}Duration`), r = vo(o, i), l = s(`${Nt}Delay`), c = s(`${Nt}Duration`), u = vo(l, c);
  let f = null, p = 0, b = 0;
  t === at ? r > 0 && (f = at, p = r, b = i.length) : t === Nt ? u > 0 && (f = Nt, p = u, b = c.length) : (p = Math.max(r, u), f = p > 0 ? r > u ? at : Nt : null, b = f ? f === at ? i.length : c.length : 0);
  const x = f === at && /\b(?:transform|all)(?:,|$)/.test(
    s(`${at}Property`).toString()
  );
  return {
    type: f,
    timeout: p,
    propCount: b,
    hasTransform: x
  };
}
function vo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => bo(n) + bo(e[s])));
}
function bo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function yo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function rc(e, t, n) {
  const s = e[tn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Tn = /* @__PURE__ */ Symbol("_vod"), Wi = /* @__PURE__ */ Symbol("_vsh"), Cn = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Tn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Dt(e, t);
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
  e.style.display = t ? e[Tn] : "none", e[Wi] = !t;
}
const lc = /* @__PURE__ */ Symbol(""), cc = /(?:^|;)\s*display\s*:/;
function ac(e, t, n) {
  const s = e.style, o = ae(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (ae(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && pn(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && pn(s, r, "");
    for (const r in n)
      r === "display" && (i = !0), pn(s, r, n[r]);
  } else if (o) {
    if (t !== n) {
      const r = s[lc];
      r && (n += ";" + r), s.cssText = n, i = cc.test(n);
    }
  } else t && e.removeAttribute("style");
  Tn in e && (e[Tn] = i ? s.display : "", e[Wi] && (s.display = "none"));
}
const xo = /\s*!important$/;
function pn(e, t, n) {
  if (O(n))
    n.forEach((s) => pn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = fc(e, t);
    xo.test(n) ? e.setProperty(
      Fe(s),
      n.replace(xo, ""),
      "important"
    ) : e[s] = n;
  }
}
const So = ["Webkit", "Moz", "ms"], es = {};
function fc(e, t) {
  const n = es[t];
  if (n)
    return n;
  let s = ue(t);
  if (s !== "filter" && s in e)
    return es[t] = s;
  s = Hn(s);
  for (let o = 0; o < So.length; o++) {
    const i = So[o] + s;
    if (i in e)
      return es[t] = i;
  }
  return t;
}
const wo = "http://www.w3.org/1999/xlink";
function To(e, t, n, s, o, i = cr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wo, t.slice(6, t.length)) : e.setAttributeNS(wo, t, n) : n == null || i && !jo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Je(n) ? String(n) : n
  );
}
function Co(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Bi(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = jo(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(o || t);
}
function uc(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function dc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ao = /* @__PURE__ */ Symbol("_vei");
function hc(e, t, n, s, o = null) {
  const i = e[Ao] || (e[Ao] = {}), r = i[t];
  if (s && r)
    r.value = s;
  else {
    const [l, c] = pc(t);
    if (s) {
      const u = i[t] = _c(
        s,
        o
      );
      uc(e, l, u, c);
    } else r && (dc(e, l, r, c), i[t] = void 0);
  }
}
const Eo = /(?:Once|Passive|Capture)$/;
function pc(e) {
  let t;
  if (Eo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Eo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Fe(e.slice(2)), t];
}
let ts = 0;
const gc = /* @__PURE__ */ Promise.resolve(), mc = () => ts || (gc.then(() => ts = 0), ts = Date.now());
function _c(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ie(
      vc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = mc(), n;
}
function vc(e, t) {
  if (O(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const ko = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, bc = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? rc(e, s, r) : t === "style" ? ac(e, n, s) : En(t) ? kn(t) || hc(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : yc(e, t, s, r)) ? (Co(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && To(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (xc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ae(s))) ? Co(e, ue(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), To(e, t, s, r));
};
function yc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ko(t) && V(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return ko(t) && ae(n) ? !1 : t in e;
}
function xc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = ue(t);
  return Array.isArray(n) ? n.some((o) => ue(o) === s) : Object.keys(n).some((o) => ue(o) === s);
}
const Po = {};
// @__NO_SIDE_EFFECTS__
function Sc(e, t, n) {
  let s = /* @__PURE__ */ Jr(e, t);
  Pn(s) && (s = re({}, s, t));
  class o extends zs {
    constructor(r) {
      super(s, r, n);
    }
  }
  return o.def = s, o;
}
const wc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class zs extends wc {
  constructor(t, n = {}, s = Ho) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && s !== Ho ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
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
      if (t instanceof zs) {
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
    this._connected = !1, Hs(() => {
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
      if (i && !O(i))
        for (const c in i) {
          const u = i[c];
          (u === Number || u && u.type === Number) && (c in this._props && (this._props[c] = os(this._props[c])), (l || (l = /* @__PURE__ */ Object.create(null)))[ue(c)] = !0);
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
        K(this, s) || Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Rs(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = O(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o]);
    for (const o of s.map(ue))
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
    let s = n ? this.getAttribute(t) : Po;
    const o = ue(t);
    n && this._numberProps && this._numberProps[o] && (s = os(s)), this._setProp(o, s, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === Po ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const i = this._ob;
      i && (this._processMutations(i.takeRecords()), i.disconnect()), n === !0 ? this.setAttribute(Fe(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Fe(t), n + "") : n || this.removeAttribute(Fe(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Cc(t, this._root);
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
            Pn(r[0]) ? re({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      s.emit = (i, ...r) => {
        o(i, r), Fe(i) !== i && o(Fe(i), r);
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
    for (let c = t.length - 1; c >= 0; c--) {
      const u = document.createElement("style");
      o && u.setAttribute("nonce", o), u.textContent = t[c], i.insertBefore(u, l || r), l = u, c === 0 && (s || this._styleAnchors.set(this._def, u), n && this._styleAnchors.set(n, u));
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
        for (const c of r) {
          if (n && c.nodeType === 1) {
            const u = n + "-s", f = document.createTreeWalker(c, 1);
            c.setAttribute(u, "");
            let p;
            for (; p = f.nextNode(); )
              p.setAttribute(u, "");
          }
          l.insertBefore(c, o);
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
const Tc = /* @__PURE__ */ re({ patchProp: bc }, Xl);
let Ro;
function Ki() {
  return Ro || (Ro = Rl(Tc));
}
const Cc = ((...e) => {
  Ki().render(...e);
}), Ho = ((...e) => {
  const t = Ki().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Ec(s);
    if (!o) return;
    const i = t._component;
    !V(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, Ac(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
});
function Ac(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ec(e) {
  return ae(e) ? document.querySelector(e) : e;
}
const qi = /* @__PURE__ */ Symbol("voiceState");
function kc() {
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
function Pc(e) {
  Ls(qi, e);
}
function js() {
  const e = Pt(qi);
  if (!e)
    throw new Error("[HandsfreeCooking] useVoiceState() called without a provider. Ensure provideVoiceState() is called in a parent component.");
  return e;
}
function Gi(e, t) {
  let n = null;
  return (...s) => {
    clearTimeout(n), n = setTimeout(() => e(...s), t);
  };
}
const Fo = 300;
function Rc(e, t, n, s) {
  let o = null, i = null, r = [], l = -1;
  const c = () => window.innerWidth < 768 ? 75 : 60, { setStage: u, toggleListening: f, togglePopupState: p } = n, b = () => $s(t), x = () => {
    const E = b();
    E.instructions && (o = document.querySelector(E.instructions)), E.ingredients && (i = document.querySelector(E.ingredients)), E.steps && (r = Array.from(document.querySelectorAll(E.steps)));
  }, P = Gi(x, 300), A = new MutationObserver(P);
  A.observe(document.body, { childList: !0, subtree: !0 }), /* @__PURE__ */ he(t) && Rt(t, () => {
    o = null, i = null, r = [], x();
  });
  const M = (E) => {
    const y = c(), R = E.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: R - y,
      behavior: "smooth"
    });
  }, N = () => {
    r.length > 0 && r[l] && M(r[l]), r.length === l + 1 ? (u("listening", "almost-done"), p(!0)) : (u("listening"), p(!1));
  };
  return { commands: fe(() => {
    const E = $s(e);
    if (!E) return {};
    const y = {}, R = (q, ee) => {
      q && q.forEach((le) => {
        y[le] = ee;
      });
    };
    return R(E.help, () => {
      u("listening", "help"), p(!0), s("handsfree-command", { command: "help" });
    }), R(E.scrollUp, () => {
      window.scrollBy({ top: -Fo, behavior: "smooth" }), s("handsfree-command", { command: "scroll up" });
    }), R(E.scrollDown, () => {
      window.scrollBy({ top: Fo, behavior: "smooth" }), s("handsfree-command", { command: "scroll down" });
    }), R(E.exit, () => {
      u("listening"), s("handsfree-command", { command: "exit" });
    }), R(E.goToInstructions, () => {
      o || x(), o && (M(o), s("handsfree-command", { command: "go to instructions" })), u("listening"), p(!1);
    }), R(E.goToIngredients, () => {
      i || x(), i && (M(i), s("handsfree-command", { command: "go to ingredients" })), u("listening"), p(!1);
    }), R(E.nextStep, () => {
      r.length === 0 && x(), l < r.length - 1 && (l += 1, N(), s("handsfree-command", { command: "next step" }));
    }), R(E.previousStep, () => {
      r.length === 0 && x(), l > 0 && (l -= 1, N(), s("handsfree-command", { command: "previous step" }));
    }), R(E.letsCook, () => {
      f(!0), u("listening"), p(!1), s("handsfree-command", { command: "let's cook" });
    }), R(E.imDone, () => {
      s("handsfree-command", { command: "i'm done" });
    }), y;
  }), destroy: () => A.disconnect() };
}
function Hc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ns, Lo;
function Fc() {
  if (Lo) return ns;
  Lo = 1, ns = e;
  function e() {
  }
  return e.mixin = function(t) {
    var n = t.prototype || t;
    n.isWildEmitter = !0, n.on = function(s, o, i) {
      this.callbacks = this.callbacks || {};
      var r = arguments.length === 3, l = r ? arguments[1] : void 0, c = r ? arguments[2] : arguments[1];
      return c._groupName = l, (this.callbacks[s] = this.callbacks[s] || []).push(c), this;
    }, n.once = function(s, o, i) {
      var r = this, l = arguments.length === 3, c = l ? arguments[1] : void 0, u = l ? arguments[2] : arguments[1];
      function f() {
        r.off(s, f), u.apply(this, arguments);
      }
      return this.on(s, c, f), this;
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
      var o = [].slice.call(arguments, 1), i = this.callbacks[s], r = this.getWildcardCallbacks(s), l, c, u;
      if (i)
        for (u = i.slice(), l = 0, c = u.length; l < c && u[l]; ++l)
          u[l].apply(this, o);
      if (r)
        for (c = r.length, u = r.slice(), l = 0, c = u.length; l < c && u[l]; ++l)
          u[l].apply(this, [s].concat(o));
      return this;
    }, n.getWildcardCallbacks = function(s) {
      this.callbacks = this.callbacks || {};
      var o, i, r = [];
      for (o in this.callbacks)
        i = o.split("*"), (o === "*" || i.length === 2 && s.slice(0, i[0].length) === i[0]) && (r = r.concat(this.callbacks[o]));
      return r;
    };
  }, e.mixin(e), ns;
}
var ss, Oo;
function Lc() {
  if (Oo) return ss;
  Oo = 1;
  var e = Fc();
  function t(o, i) {
    var r = -1 / 0;
    o.getFloatFrequencyData(i);
    for (var l = 4, c = i.length; l < c; l++)
      i[l] > r && i[l] < 0 && (r = i[l]);
    return r;
  }
  var n;
  typeof window < "u" && (n = window.AudioContext || window.webkitAudioContext);
  var s = null;
  return ss = function(o, l) {
    var r = new e();
    if (!n) return r;
    var l = l || {}, c = l.smoothing || 0.1, u = l.interval || 50, f = l.threshold, p = l.play, b = l.history || 10, x = !0;
    s = l.audioContext || s || new n();
    var P, A, M;
    M = s.createAnalyser(), M.fftSize = 512, M.smoothingTimeConstant = c, A = new Float32Array(M.frequencyBinCount), o.jquery && (o = o[0]), o instanceof HTMLAudioElement || o instanceof HTMLVideoElement ? (P = s.createMediaElementSource(o), typeof p > "u" && (p = !0), f = f || -50) : (P = s.createMediaStreamSource(o), f = f || -50), P.connect(M), p && M.connect(s.destination), r.speaking = !1, r.suspend = function() {
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
      x = !1, r.emit("volume_change", -100, f), r.speaking && (r.speaking = !1, r.emit("stopped_speaking")), M.disconnect(), P.disconnect();
    }, r.speakingHistory = [];
    for (var N = 0; N < b; N++)
      r.speakingHistory.push(0);
    var F = function() {
      setTimeout(function() {
        if (x) {
          var E = t(M, A);
          r.emit("volume_change", E, f);
          var y = 0;
          if (E > f && !r.speaking) {
            for (var R = r.speakingHistory.length - 3; R < r.speakingHistory.length; R++)
              y += r.speakingHistory[R];
            y >= 2 && (r.speaking = !0, r.emit("speaking"));
          } else if (E < f && r.speaking) {
            for (var R = 0; R < r.speakingHistory.length; R++)
              y += r.speakingHistory[R];
            y == 0 && (r.speaking = !1, r.emit("stopped_speaking"));
          }
          r.speakingHistory.shift(), r.speakingHistory.push(0 + (E > f)), F();
        }
      }, u);
    };
    return F(), r;
  }, ss;
}
var Oc = Lc();
const Mc = /* @__PURE__ */ Hc(Oc);
class Zi {
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
    this.audioStreamSpeechEvents = Mc(t, {
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
function An() {
  return /Android/i.test(navigator.userAgent);
}
const Ji = {
  lang: "en-US",
  interimResults: !0,
  maxAlternatives: 10
}, $i = {
  error: null,
  status: "stopped",
  transcriptions: [],
  finalTranscriptions: !1
}, Ic = 120 * 1e3, Nc = 3 * 1e3, Dc = 5;
function Vc() {
  let e, t, n, s, o = !1, i = !1, r, l, c = 0;
  function u(I = {}) {
    r({ ...$i, ...I });
  }
  function f() {
    clearTimeout(n), clearTimeout(s);
  }
  function p() {
    f(), t.abort(), u(), l(0);
  }
  function b() {
    f(), t && t.stop(), u(), l(0);
  }
  function x() {
    u({ status: "starting" }), l(0);
    try {
      t.start(), c = 0;
    } catch (I) {
      console.error(I);
    }
  }
  function P() {
    if (c >= Dc) {
      console.warn("[HandsfreeCooking] Max restart retries reached");
      return;
    }
    c += 1, setTimeout(x, 100);
  }
  function A() {
    e && e.stop(), l(0);
  }
  function M() {
    f(), u(), l(0), i || P();
  }
  function N() {
    u({ status: "recording" }), l(0);
  }
  function F(I, T) {
    clearTimeout(n), T || (n = setTimeout(() => {
      u({
        finalTranscriptions: !0,
        status: "recording",
        transcriptions: I
      }), p();
    }, Nc));
  }
  function E(I) {
    if (!I || !I.results) return;
    const T = I.results[I.resultIndex], j = Object.values(T).map((oe) => ({
      confidence: oe.confidence,
      text: oe.transcript
    }));
    u({
      finalTranscriptions: T.isFinal,
      status: "recording",
      transcriptions: j
    }), F(j, T.isFinal);
  }
  function y(I) {
    u({ error: I.error, status: "error" }), l(0);
  }
  function R() {
    o || p();
  }
  function q() {
    e = new Zi({
      onSpeaking: () => {
        o = !0;
      },
      onStopSpeaking: () => {
        o = !1, clearTimeout(s), s = setTimeout(R, Ic);
      },
      onVolumeChange: (I) => {
        l(I);
      }
    }), l(0), e.start();
  }
  function ee({ lang: I, interimResults: T, maxAlternatives: j }) {
    const oe = window.SpeechRecognition || window.webkitSpeechRecognition;
    t = new oe(), t.continuous = !0, t.lang = I, t.interimResults = T, t.maxAlternatives = j, t.onstart = N, t.onresult = E, t.onerror = y, t.onend = M;
  }
  function le(I) {
    const T = { ...Ji, ...I };
    r = I.onUserSpeech, l = I.onUserSpeak || (() => {
    }), ee(T);
  }
  function z() {
    i = !1, c = 0, !An() && l && q(), r && x();
  }
  function B() {
    i = !0, f(), !An() && l && A(), r && b();
  }
  return { init: le, start: z, stop: B };
}
function zc() {
  let e, t, n = !1, s, o, i;
  function r(y = {}) {
    s({ ...$i, ...y });
  }
  function l() {
    r({ status: "recording" });
  }
  function c() {
    o(0), e && e.stop();
  }
  function u() {
    e = new Zi({
      onVolumeChange: (y) => {
        o(y);
      }
    }), e.start(), o(0);
  }
  function f(y, R) {
    clearTimeout(i), R || (i = setTimeout(() => {
      r({
        finalTranscriptions: !0,
        transcriptions: y
      });
    }, 2e3));
  }
  function p() {
    n = !1, clearTimeout(i), r();
  }
  function b(y) {
    if (!y || !y.results) return;
    const R = y.results[y.resultIndex], q = Object.values(R).map((ee) => ({
      confidence: ee.confidence,
      text: ee.transcript
    }));
    r({
      finalTranscriptions: R.isFinal,
      status: "recording",
      transcriptions: q
    }), f(q, R.isFinal);
  }
  function x() {
    n = !1, clearTimeout(i), r();
  }
  function P(y) {
    r({ error: y.error, status: "error" });
  }
  function A() {
    if (!n) {
      r({ status: "starting" });
      try {
        t.start(), n = !0;
      } catch (y) {
        console.error(y);
      }
    }
  }
  function M({ lang: y, interimResults: R, maxAlternatives: q }) {
    const ee = window.SpeechRecognition || window.webkitSpeechRecognition;
    t = new ee(), t.continuous = !1, t.lang = y, t.interimResults = R, t.maxAlternatives = q, t.onstart = l, t.onresult = b, t.onerror = P, t.onend = x;
  }
  function N(y) {
    const R = { ...Ji, ...y };
    M(R), s = y.onUserSpeech, o = y.onUserSpeak || (() => {
    });
  }
  function F() {
    !An() && o && u(), s && A();
  }
  function E() {
    !An() && o && c(), s && p();
  }
  return { init: N, start: F, stop: E };
}
const jc = navigator.language || "en-US";
function Bc({
  continuesRecognition: e = !0,
  lang: t = jc,
  onUserSpeech: n,
  onUserSpeak: s
}) {
  const o = e ? Vc() : zc();
  return o.init({ lang: t, onUserSpeech: n, onUserSpeak: s }), {
    start: o.start,
    stop: o.stop
  };
}
const Uc = {
  init: Bc
};
function Yi(e, t) {
  const n = { ...e };
  for (const s of Object.keys(t))
    t[s] && typeof t[s] == "object" && !Array.isArray(t[s]) && e[s] && typeof e[s] == "object" && !Array.isArray(e[s]) ? n[s] = Yi(e[s], t[s]) : n[s] = t[s];
  return n;
}
function Mo(e) {
  return e.toLowerCase().replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, "").replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, "").replace(/\s+/g, " ").replace(/[.,!?;:。，！？；：．]+$/g, "").trim().normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "").normalize("NFC").trim();
}
function Wc(e, t) {
  const n = Mo(e), s = [];
  for (const o of t) {
    const i = Mo(o);
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
const Kc = {
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
}, qc = {
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
    const t = fe(() => Kc[e.icon] || ""), n = fe(() => e.size ? `hf-icon-${e.size}` : "");
    return {
      svgContent: t,
      cssClass: n
    };
  }
}, Gc = ["innerHTML"];
function Zc(e, t, n, s, o, i) {
  return X(), me("span", {
    class: xt(["hf-icon", s.cssClass]),
    innerHTML: s.svgContent
  }, null, 10, Gc);
}
const jn = /* @__PURE__ */ Ft(qc, [["render", Zc]]), Jc = {
  components: {
    HfIcon: jn
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
    }, s = fe(() => e.isCloseState ? "close" : "chevron--down");
    return {
      togglePopup: n,
      icon: s
    };
  }
}, $c = ["aria-label"], Yc = { class: "hf-headline__title" }, Xc = { class: "hf-headline__opener" }, Qc = {
  key: 0,
  class: "hf-spinner"
};
function ea(e, t, n, s, o, i) {
  const r = qe("HfIcon");
  return X(), me("button", {
    class: "hf-headline",
    "aria-label": n.title + " - " + (n.isCloseState ? "Close" : "Toggle"),
    onClick: t[0] || (t[0] = (...l) => s.togglePopup && s.togglePopup(...l))
  }, [
    $(r, {
      icon: "mic",
      size: 24
    }),
    G("span", Yc, Te(n.title), 1),
    G("span", Xc, [
      n.isLoading ? (X(), me("span", Qc, [...t[1] || (t[1] = [
        G("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          G("circle", {
            cx: "8",
            cy: "8",
            r: "7",
            "stroke-width": "2"
          })
        ], -1)
      ])])) : (X(), Le(r, {
        key: 1,
        icon: s.icon,
        size: 24
      }, null, 8, ["icon"]))
    ])
  ], 8, $c);
}
const Bs = /* @__PURE__ */ Ft(Jc, [["render", ea]]), ta = {
  components: {
    PopupHeadline: Bs
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
    const n = js();
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
}, na = { class: "hf-content-area" }, sa = ["innerHTML"];
function oa(e, t, n, s, o, i) {
  const r = qe("PopupHeadline");
  return X(), me(Ae, null, [
    $(r, {
      class: xt(n.additionalClassname),
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": n.isCloseState,
      onTogglePopup: s.togglePopup
    }, null, 8, ["class", "title", "is-loading", "is-close-state", "onTogglePopup"]),
    vn(G("div", na, [
      G("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, sa),
      n.translations.buttonText ? (X(), me("button", {
        key: 0,
        class: "hf-button",
        onClick: t[0] || (t[0] = (...l) => s.buttonAction && s.buttonAction(...l))
      }, Te(n.translations.buttonText), 1)) : Ge("", !0)
    ], 512), [
      [Cn, n.translations.content && n.translations.content !== "" && s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const ia = /* @__PURE__ */ Ft(ta, [["render", oa]]), ra = {
  components: {
    PopupHeadline: Bs,
    HfIcon: jn
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
    const n = js(), s = /* @__PURE__ */ we(0), o = fe(() => e.isCloseState && !n.state.isListening);
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
}, la = { class: "hf-content-area" }, ca = ["innerHTML"], aa = {
  key: 1,
  class: "hf-introduction-steps"
}, fa = ["innerHTML"], ua = { class: "hf-introduction-buttons" }, da = ["disabled"];
function ha(e, t, n, s, o, i) {
  const r = qe("PopupHeadline"), l = qe("HfIcon");
  return X(), me(Ae, null, [
    $(r, {
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": s.isClose,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "is-loading", "is-close-state", "onTogglePopup"]),
    vn(G("div", la, [
      s.voiceState.state.isListening ? Ge("", !0) : (X(), me("div", {
        key: 0,
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, ca)),
      s.voiceState.state.isListening ? (X(), me("div", aa, [
        G("div", {
          class: "hf-step",
          innerHTML: n.translations.steps[s.currentStep]
        }, null, 8, fa),
        G("div", ua, [
          G("button", {
            class: "hf-button",
            "aria-label": "Previous step",
            disabled: s.currentStep < 1,
            onClick: t[0] || (t[0] = (...c) => s.goToPrevStep && s.goToPrevStep(...c))
          }, [
            $(l, {
              icon: "chevron--left",
              size: 24
            })
          ], 8, da),
          G("button", {
            class: "hf-button",
            "aria-label": "Next step",
            onClick: t[1] || (t[1] = (...c) => s.goToNextStep && s.goToNextStep(...c))
          }, [
            $(l, {
              icon: "chevron--right",
              size: 24
            })
          ])
        ])
      ])) : Ge("", !0),
      s.voiceState.state.isListening ? Ge("", !0) : (X(), me("button", {
        key: 2,
        class: "hf-button",
        onClick: t[2] || (t[2] = (...c) => s.beginListening && s.beginListening(...c))
      }, Te(n.translations.buttonText), 1))
    ], 512), [
      [Cn, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const pa = /* @__PURE__ */ Ft(ra, [["render", ha]]), ga = {
  components: {
    HfIcon: jn,
    PopupHeadline: Bs
  },
  props: {
    translations: {
      type: Object,
      required: !0
    }
  },
  emits: ["closeHandsFreeFlow", "togglePopup"],
  setup(e, { emit: t }) {
    const n = js(), s = Pt("emitEvent"), o = /* @__PURE__ */ we(null), i = /* @__PURE__ */ we(null), r = /* @__PURE__ */ we(null), l = () => {
      t("closeHandsFreeFlow"), s("handsfree-feedback", { vote: "close", text: e.translations.buttonText });
    }, c = () => {
      t("togglePopup");
    }, u = /* @__PURE__ */ we(!1), f = /* @__PURE__ */ we(!1), p = () => {
      u.value = !0, s("handsfree-feedback", { vote: "up", text: e.translations.voteUp });
    }, b = () => {
      u.value = !0, s("handsfree-feedback", { vote: "down", text: e.translations.voteDown });
    }, x = () => {
      Hs(() => {
        const A = i.value, M = r.value, N = o.value;
        if (!N || !A || !M)
          return;
        const F = A.offsetWidth + M.offsetWidth, E = N.offsetWidth;
        f.value = F > E;
      });
    }, P = Gi(x, 200);
    return Nn(() => {
      x(), window.addEventListener("resize", P);
    }), Os(() => {
      window.removeEventListener("resize", P);
    }), {
      closeHandsFreeFlow: l,
      votedUp: p,
      votedDown: b,
      togglePopup: c,
      voted: u,
      isStacked: f,
      voiceState: n,
      handsFreeVotes: o,
      voteUp: i,
      voteDown: r
    };
  }
}, ma = { class: "hf-content-area" }, _a = ["innerHTML"], va = { class: "hf-success-message" };
function ba(e, t, n, s, o, i) {
  const r = qe("PopupHeadline"), l = qe("HfIcon");
  return X(), me(Ae, null, [
    $(r, {
      title: n.translations.title,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "onTogglePopup"]),
    vn(G("div", ma, [
      G("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, _a),
      G("div", {
        ref: "handsFreeVotes",
        class: xt(["hf-vote", { "hf-vote--stack": s.isStacked }])
      }, [
        s.voted ? Ge("", !0) : (X(), me("button", {
          key: 0,
          ref: "voteUp",
          class: "hf-button",
          onClick: t[0] || (t[0] = (...c) => s.votedUp && s.votedUp(...c))
        }, [
          $(l, {
            icon: "thumbs-up",
            size: 16
          }),
          G("span", null, Te(n.translations.voteUp), 1)
        ], 512)),
        s.voted ? Ge("", !0) : (X(), me("button", {
          key: 1,
          ref: "voteDown",
          class: "hf-button",
          onClick: t[1] || (t[1] = (...c) => s.votedDown && s.votedDown(...c))
        }, [
          $(l, {
            icon: "thumbs-down",
            size: 16
          }),
          G("span", null, Te(n.translations.voteDown), 1)
        ], 512)),
        vn(G("div", va, [
          $(l, {
            icon: "checkmark--outline",
            size: 16
          }),
          Gt(" " + Te(n.translations.successMessage), 1)
        ], 512), [
          [Cn, s.voted]
        ])
      ], 2),
      G("button", {
        class: "hf-button hf-button--solid",
        onClick: t[2] || (t[2] = (...c) => s.closeHandsFreeFlow && s.closeHandsFreeFlow(...c))
      }, Te(n.translations.buttonText), 1)
    ], 512), [
      [Cn, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const ya = /* @__PURE__ */ Ft(ga, [["render", ba]]), xa = ':host{--hf-color-bg: #ffffff;--hf-color-text: #000000;--hf-color-primary: #000000;--hf-color-primary-hover: #000000;--hf-color-error: #cc0033;--hf-color-border: #d9d9d9;--hf-spacing-xxs: 4px;--hf-spacing-xs: 8px;--hf-spacing-s: 16px;--hf-spacing-sm: 24px;--hf-spacing-m: 32px;--hf-font-family: inherit;--hf-font-size-base: 16px;--hf-font-size-small: 14px;--hf-font-size-large: 18px;--hf-popup-width: 410px;--hf-popup-shadow: 0 12px 24px 0 rgba(0, 0, 0, .2);--hf-z-index: 10000;display:block;font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);color:var(--hf-color-text);line-height:1.5}*,*:before,*:after{box-sizing:border-box}.hf-root{margin-bottom:var(--hf-spacing-m)}.hf-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.hf-intro-row{display:flex;align-items:center;margin-bottom:var(--hf-spacing-s)}.hf-intro-label{margin-right:var(--hf-spacing-xs);font-weight:600;text-transform:uppercase;font-size:var(--hf-font-size-base)}.hf-button{position:relative;display:inline-flex;align-items:center;padding:var(--hf-spacing-s) var(--hf-spacing-sm);border:1px solid var(--hf-color-primary);border-radius:0;background-color:transparent;color:var(--hf-color-primary);font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);font-weight:400;line-height:1;vertical-align:middle;text-decoration:none;cursor:pointer;transition:background-color .2s ease-out,color .2s ease-out}.hf-button .hf-icon{margin-inline-end:var(--hf-spacing-xs)}.hf-button:hover{background-color:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button:hover .hf-icon svg{fill:var(--hf-color-bg)}.hf-button:disabled{opacity:.4;cursor:default}.hf-button--solid{background-color:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button--solid:hover{background-color:var(--hf-color-bg);color:var(--hf-color-primary)}.hf-button--handsfree{padding:var(--hf-spacing-s) var(--hf-spacing-sm)}.hf-button--handsfree .hf-icon{margin-inline-end:var(--hf-spacing-xxs)}.hf-icon{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;line-height:0}.hf-icon svg{fill:currentColor;width:1em;height:1em}.hf-icon-16 svg{width:16px;height:16px}.hf-icon-24 svg{width:24px;height:24px}.hf-tooltip-wrapper{cursor:pointer;position:relative;display:inline-flex;align-items:baseline}.hf-tooltip-content{position:absolute;bottom:30px;left:8px;transform:translate(-50%);width:350px;padding:var(--hf-spacing-s);background:var(--hf-color-bg);box-shadow:var(--hf-popup-shadow);cursor:default;z-index:calc(var(--hf-z-index) + 1)}.hf-tooltip-content:after{content:"";position:absolute;bottom:-10px;left:50%;transform:translate(-50%);width:0;height:0;border-style:solid;border-width:10px 10px 0 10px;border-color:var(--hf-color-bg) transparent transparent transparent}.hf-tooltip-title{display:flex;justify-content:space-between;text-transform:uppercase;font-weight:600;font-size:var(--hf-font-size-large);margin-bottom:var(--hf-spacing-xs)}.hf-tooltip-title span{cursor:pointer}.hf-tooltip-text{display:block;font-size:var(--hf-font-size-small);line-height:1.5}.hf-fade-enter-active,.hf-fade-leave-active{transition:opacity .2s ease-in-out}.hf-fade-enter-from,.hf-fade-leave-to{opacity:0}.hf-popup{position:fixed;bottom:20px;right:20px;width:calc(100% - 40px);max-width:var(--hf-popup-width);background:var(--hf-color-bg);z-index:var(--hf-z-index);box-shadow:var(--hf-popup-shadow);padding:var(--hf-spacing-s);transition:bottom .3s ease,opacity .3s ease}.hf-popup--hidden{bottom:-100px;pointer-events:none;opacity:0}.hf-popup--opened{bottom:20px}.hf-headline{position:relative;border:0;display:flex;align-items:center;width:100%;background:none;padding:0;margin:0;cursor:pointer;font-family:var(--hf-font-family);color:var(--hf-color-text);font-size:var(--hf-font-size-base)}.hf-headline__title{text-transform:uppercase;font-weight:600;font-size:var(--hf-font-size-base);margin-left:var(--hf-spacing-xxs)}.hf-headline__opener{margin-left:auto;display:flex;align-items:center}.hf-headline__opener svg{transition:transform .2s}.hf-popup--opened .hf-headline__opener svg{transform:rotate(0)}.hf-popup:not(.hf-popup--opened) .hf-headline__opener svg{transform:rotate(180deg)}.hf-spinner{display:inline-block;width:22px;height:22px}.hf-spinner svg{width:100%;height:100%;overflow:visible;animation:hf-rotation 1455ms infinite linear}.hf-spinner circle{stroke:currentColor;stroke-dasharray:44px;stroke-dashoffset:33px;transform-origin:center;animation:hf-spinner 2s infinite ease-in-out}@keyframes hf-spinner{0%{stroke-dashoffset:33px;transform:rotate(0)}50%{stroke-dashoffset:11px;transform:rotate(135deg)}to{stroke-dashoffset:33px;transform:rotate(360deg)}}@keyframes hf-rotation{to{transform:rotate(360deg)}}.hf-content-area{margin-top:var(--hf-spacing-s)}.hf-content p{margin:0 0 var(--hf-spacing-s);font-size:var(--hf-font-size-base)}.hf-content p:last-of-type{margin:0}.hf-content ul{margin:0;padding:var(--hf-spacing-xs) 0 var(--hf-spacing-xs) var(--hf-spacing-s);line-height:1}.hf-content ul li{margin:0 0 var(--hf-spacing-xs)}.hf-content a{color:var(--hf-color-text)}.hf-content-area>.hf-button{margin-top:var(--hf-spacing-s)}.hf-introduction-steps .hf-step{margin-bottom:var(--hf-spacing-xs)}.hf-introduction-steps .hf-step p{margin:0 0 var(--hf-spacing-xs)}.hf-introduction-buttons{display:flex;gap:0}.hf-introduction-buttons .hf-button{padding:var(--hf-spacing-s) calc(var(--hf-spacing-s) - var(--hf-spacing-xxs))}.hf-introduction-buttons .hf-button .hf-icon{margin-inline-end:0}.hf-introduction-buttons .hf-button:last-of-type{margin-left:-1px}.hf-popup.hf-not-recognized{border:1px solid var(--hf-color-error)}.hf-popup.hf-error-state .hf-headline{color:var(--hf-color-error)}.hf-hide-chevron .hf-headline__opener{pointer-events:none}.hf-hide-chevron .hf-headline__opener .hf-icon{display:none}.hf-vote{display:flex;gap:0;margin:var(--hf-spacing-s) 0}.hf-vote .hf-button{white-space:nowrap}.hf-vote .hf-button:last-of-type{margin-left:-1px}.hf-vote--stack{flex-direction:column}.hf-vote--stack .hf-button{justify-content:center}.hf-vote--stack .hf-button:last-of-type{margin-left:0;margin-top:-1px}.hf-success-message{display:flex;align-items:center;gap:var(--hf-spacing-xxs)}@media print{.hf-root,.hf-popup{display:none}}@media(max-width:767px){.hf-tooltip-content{left:30px;width:290px}.hf-tooltip-content:after{transform:translate(calc(-50% - 22px))}}', Sa = {
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
}, wa = {
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
}, Ta = 3, Ca = {
  components: {
    Finish: ya,
    Popup: ia,
    Introduction: pa,
    HfIcon: jn
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
    const t = kc();
    Pc(t);
    const { state: n, setStage: s, toggleListening: o, togglePopupState: i } = t, r = Vs(), l = (h, g = {}) => {
      const m = r?.proxy?.$el?.parentNode?.host || r?.proxy?.$el;
      m && m.dispatchEvent && m.dispatchEvent(new CustomEvent(h, {
        detail: g,
        bubbles: !0,
        composed: !0
      }));
    };
    Ls("emitEvent", l);
    const c = fe(() => {
      let h = {};
      if (e.translations)
        try {
          h = JSON.parse(e.translations);
        } catch (g) {
          console.warn("[HandsfreeCooking] Invalid translations JSON:", g);
        }
      return Yi(Sa, h);
    }), u = fe(() => {
      let h = {};
      if (e.commands)
        try {
          h = JSON.parse(e.commands);
        } catch (g) {
          console.warn("[HandsfreeCooking] Invalid commands JSON:", g);
        }
      return { ...wa, ...h };
    }), f = fe(() => ({
      steps: e.stepsSelector,
      ingredients: e.ingredientsSelector,
      instructions: e.instructionsSelector
    })), p = fe(
      () => e.lang || document.documentElement.lang || "en"
    ), { commands: b, destroy: x } = Rc(
      u,
      f,
      t,
      l
    ), P = /* @__PURE__ */ we(null), A = /* @__PURE__ */ we(!1), M = /* @__PURE__ */ we(null), N = /* @__PURE__ */ we(0), F = /* @__PURE__ */ we(!1), E = /* @__PURE__ */ we(!1), y = /* @__PURE__ */ we(!1), R = /* @__PURE__ */ we(null), q = fe(() => n.stage), ee = fe(() => n.subState), le = fe(() => n.isPopupOpened), z = fe(
      () => n.stage === "introduction" || n.stage === "listening" && n.subState === "intro"
    ), B = fe(
      () => n.stage === "listening" && n.subState === "help"
    ), I = fe(
      () => n.stage === "listening" && n.subState === "not-recognized"
    ), T = fe(
      () => n.stage === "listening" && n.subState === "recognized-error"
    ), j = fe(
      () => n.stage === "listening" && n.subState === "almost-done"
    ), oe = fe(() => I.value ? c.value.notRecognized.title : T.value ? c.value.notRecognizedError.title : n.stage === "listening" && n.subState === null ? c.value.listening.title : "");
    let Pe = !1, ie = !1;
    function se() {
      !P.value || ie || (y.value && P.value.stop(), setTimeout(() => {
        if (!y.value)
          try {
            P.value.start();
          } catch {
            setTimeout(() => {
              try {
                y.value || P.value.start();
              } catch (g) {
                console.error("[HandsfreeCooking] Restart failed:", g);
              }
            }, 1e3);
          }
      }, 500));
    }
    const J = () => {
      A.value = !A.value;
    };
    let ye = null;
    const lt = (h) => {
      M.value && !h.composedPath().includes(M.value) && (A.value = !1);
    };
    Rt(A, (h) => {
      ye && (cancelAnimationFrame(ye), ye = null), document.removeEventListener("click", lt, !0), h && (ye = requestAnimationFrame(() => {
        document.addEventListener("click", lt, !0);
      }));
    });
    const $e = (h) => {
      const g = Wc(h, Object.keys(b.value));
      g ? (j.value || (s("listening"), i(!1)), j.value && u.value.imDone.includes(g) && (s("finish"), cn(), l("handsfree-finished", { reason: "completed recipe flow" })), N.value = 0, requestAnimationFrame(() => {
        b.value[g] && b.value[g]();
      })) : (N.value += 1, n.subState !== "help" && (s("listening", "not-recognized"), i(!1)), N.value > Ta && s("listening", "recognized-error"));
    }, Re = (h) => {
      u.value.letsCook.includes(h) && b.value[h] && setTimeout(() => {
        b.value[h] && b.value[h]();
      }, 100);
    }, rn = window.SpeechRecognition || window.webkitSpeechRecognition, ln = () => {
      if (ie = !1, s("introduction"), l("handsfree-activated"), !rn)
        l("handsfree-error", { error: "browser-not-supported" }), s("not-supported");
      else {
        let h = !1;
        P.value = Uc.init({
          lang: p.value,
          continuesRecognition: !0,
          onUserSpeech: (g) => {
            if (y.value = ["starting", "recording"].includes(g.status), ["stopped", "aborted", "error"].includes(g.status) && (y.value = !1), R.value = g.status, !h && g.status === "starting") {
              h = !0;
              return;
            }
            if (g.status === "error" && (g.error === "not-allowed" || g.error === "service-not-allowed")) {
              E.value = !0, s("not-allowed"), o(!1), P.value.stop(), l("handsfree-error", { error: "microphone-not-allowed" });
              return;
            }
            if (g.status === "recording" && (o(!0), Pe || (l("handsfree-state-change", { stage: "microphone-allowed", isListening: !0 }), Pe = !0), g.transcriptions.length && !g.finalTranscriptions && (F.value = !0), g.finalTranscriptions)) {
              F.value = !1;
              const m = g.transcriptions[0].text.toLowerCase().trim();
              z.value ? Re(m) : $e(m);
            }
          },
          onUserSpeak: () => {
          }
        });
      }
    }, cn = () => {
      P.value && P.value.stop(), ie = !0, o(!1), i(!0), y.value = !1;
    }, ht = () => {
      s("finish"), cn(), l("handsfree-finished", { reason: "stop-cooking-button" });
    }, St = () => {
      i(!0), s("listening", "help");
    }, Lt = () => {
      if (E.value)
        s("not-allowed");
      else {
        if (!y.value)
          try {
            P.value.start();
          } catch (h) {
            console.warn("[HandsfreeCooking] Cannot start recognizer:", h);
          }
        s("listening", "intro"), l("handsfree-state-change", { stage: "listening", isListening: !0 });
      }
    };
    async function an() {
      try {
        (await navigator.mediaDevices.getUserMedia({ audio: !0 })).getTracks().forEach((g) => g.stop()), E.value = !1, ln();
      } catch {
        l("handsfree-error", { error: "microphone-blocked" });
      }
    }
    const ct = () => {
      i(!n.isPopupOpened), l("handsfree-state-change", {
        stage: n.stage,
        isListening: n.isListening,
        isPopupOpened: n.isPopupOpened
      });
    }, Bn = () => {
      i(!1), s("listening");
    }, a = () => {
      !n.isListening && P.value ? (P.value.stop(), s(null)) : ct();
    }, d = (h) => {
      if (h.key === "Escape") {
        if (A.value) {
          A.value = !1;
          return;
        }
        n.isPopupOpened && n.stage !== null && (n.subState === "help" ? Bn() : a());
      }
    };
    return Rt(R, (h) => {
      h === "stopped" && n.stage === "listening" && !ie && !y.value && se();
    }), Nn(() => {
      document.addEventListener("keydown", d);
    }), Ms(() => {
      document.removeEventListener("keydown", d), document.removeEventListener("click", lt, !0), ye && cancelAnimationFrame(ye);
      try {
        P.value && P.value.stop();
      } catch (h) {
        console.warn("[HandsfreeCooking] Failed to stop on unmount:", h);
      }
      x(), y.value = !1;
    }), {
      isPopupOpened: le,
      stage: q,
      subState: ee,
      isIntroductionVisible: z,
      isHelpVisible: B,
      isNotRecognized: I,
      isNotRecognizedError: T,
      isAlmostDone: j,
      isTooltipVisible: A,
      mergedTranslations: c,
      mergedCommands: u,
      tooltip: M,
      isLoading: F,
      statusAnnouncement: oe,
      toggleTooltip: J,
      openHelp: St,
      startHandsFreeFlow: ln,
      finishHandsFreeFlow: ht,
      togglePopup: ct,
      requestMicrophoneAccess: an,
      beginListening: Lt,
      continueListening: Bn,
      closeHandsFreeFlow: a
    };
  }
}, Aa = { class: "hf-root" }, Ea = { class: "hf-trigger" }, ka = { class: "hf-intro-row" }, Pa = { class: "hf-intro-label" }, Ra = {
  ref: "tooltip",
  class: "hf-tooltip-wrapper"
}, Ha = {
  key: 0,
  class: "hf-tooltip-content"
}, Fa = { class: "hf-tooltip-title" }, La = { class: "hf-tooltip-text" }, Oa = ["aria-hidden"], Ma = {
  "aria-live": "polite",
  class: "hf-sr-only"
};
function Ia(e, t, n, s, o, i) {
  const r = qe("HfIcon"), l = qe("Introduction"), c = qe("Popup"), u = qe("Finish");
  return X(), me("div", Aa, [
    G("div", Ea, [
      G("div", ka, [
        G("span", Pa, Te(s.mergedTranslations.intro), 1),
        G("span", Ra, [
          $(r, {
            icon: "help",
            size: 16,
            onClick: s.toggleTooltip
          }, null, 8, ["onClick"]),
          $(tc, { name: "hf-fade" }, {
            default: fi(() => [
              s.isTooltipVisible ? (X(), me("span", Ha, [
                G("strong", Fa, [
                  Gt(Te(s.mergedTranslations.tooltip.title) + " ", 1),
                  G("span", {
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
                G("span", La, Te(s.mergedTranslations.tooltip.text), 1)
              ])) : Ge("", !0)
            ]),
            _: 1
          })
        ], 512)
      ]),
      s.stage !== "listening" ? (X(), me("button", {
        key: 0,
        class: "hf-button hf-button--handsfree",
        onClick: t[1] || (t[1] = (...f) => s.startHandsFreeFlow && s.startHandsFreeFlow(...f))
      }, [
        $(r, {
          icon: "mic",
          size: 24
        }),
        Gt(" " + Te(s.mergedTranslations.letsCook), 1)
      ])) : Ge("", !0),
      s.stage === "listening" ? (X(), me("button", {
        key: 1,
        class: "hf-button hf-button--handsfree",
        onClick: t[2] || (t[2] = (...f) => s.finishHandsFreeFlow && s.finishHandsFreeFlow(...f))
      }, [
        $(r, {
          icon: "mic",
          size: 24
        }),
        Gt(" " + Te(s.mergedTranslations.stopCooking), 1)
      ])) : Ge("", !0)
    ]),
    G("div", {
      class: xt(["hf-popup", {
        "hf-popup--opened": s.isPopupOpened,
        "hf-popup--hidden": s.stage === null,
        "hf-not-recognized": s.isNotRecognized || s.isNotRecognizedError,
        "hf-error-state": s.isNotRecognizedError
      }]),
      role: "dialog",
      "aria-label": "Handsfree cooking assistant",
      "aria-hidden": s.stage === null
    }, [
      G("div", Ma, Te(s.statusAnnouncement), 1),
      s.isIntroductionVisible ? (X(), Le(l, {
        key: 0,
        translations: s.mergedTranslations.introduction,
        "is-loading": s.isLoading,
        "is-close-state": !0,
        onTogglePopup: s.closeHandsFreeFlow,
        onBeginListening: s.beginListening
      }, null, 8, ["translations", "is-loading", "onTogglePopup", "onBeginListening"])) : s.stage === "not-allowed" ? (X(), Le(c, {
        key: 1,
        translations: s.mergedTranslations.notAllowed,
        "is-loading": s.isLoading,
        "is-close-state": !0,
        onTogglePopup: s.closeHandsFreeFlow,
        onButtonAction: s.requestMicrophoneAccess
      }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : s.stage === "listening" && s.subState === null ? (X(), Le(c, {
        key: 2,
        translations: s.mergedTranslations.listening,
        "is-loading": s.isLoading,
        onTogglePopup: s.openHelp
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.isHelpVisible ? (X(), Le(c, {
        key: 3,
        translations: s.mergedTranslations.help,
        "is-loading": s.isLoading,
        onTogglePopup: s.continueListening,
        onButtonAction: s.finishHandsFreeFlow
      }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : s.isNotRecognized ? (X(), Le(c, {
        key: 4,
        translations: s.mergedTranslations.notRecognized,
        "is-loading": s.isLoading,
        onTogglePopup: s.openHelp
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.isNotRecognizedError ? (X(), Le(c, {
        key: 5,
        translations: s.mergedTranslations.notRecognizedError,
        "is-loading": s.isLoading,
        onTogglePopup: s.openHelp
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.stage === "not-supported" ? (X(), Le(c, {
        key: 6,
        "additional-classname": "hf-hide-chevron",
        translations: s.mergedTranslations.notSupported,
        "is-loading": s.isLoading,
        onButtonAction: s.closeHandsFreeFlow
      }, null, 8, ["translations", "is-loading", "onButtonAction"])) : s.isAlmostDone ? (X(), Le(c, {
        key: 7,
        translations: s.mergedTranslations.almostDone,
        "is-loading": s.isLoading,
        onTogglePopup: s.togglePopup
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.stage === "finish" ? (X(), Le(u, {
        key: 8,
        translations: s.mergedTranslations.finish,
        onCloseHandsFreeFlow: s.closeHandsFreeFlow,
        onTogglePopup: s.togglePopup
      }, null, 8, ["translations", "onCloseHandsFreeFlow", "onTogglePopup"])) : Ge("", !0)
    ], 10, Oa)
  ]);
}
const Na = /* @__PURE__ */ Ft(Ca, [["render", Ia], ["styles", [xa]]]), Da = /* @__PURE__ */ Sc(Na, {
  shadowRoot: !0
});
customElements.get("handsfree-cooking") || customElements.define("handsfree-cooking", Da);
export {
  Da as HandsfreeCookingElement
};
