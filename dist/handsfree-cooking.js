// @__NO_SIDE_EFFECTS__
function vs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Q = {}, At = [], $e = () => {
}, Mo = () => !1, kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Pn = (e) => e.startsWith("onUpdate:"), re = Object.assign, bs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Yi = Object.prototype.hasOwnProperty, K = (e, t) => Yi.call(e, t), O = Array.isArray, Et = (e) => on(e) === "[object Map]", Io = (e) => on(e) === "[object Set]", Gs = (e) => on(e) === "[object Date]", D = (e) => typeof e == "function", ae = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", Y = (e) => e !== null && typeof e == "object", No = (e) => (Y(e) || D(e)) && D(e.then) && D(e.catch), Do = Object.prototype.toString, on = (e) => Do.call(e), $i = (e) => on(e).slice(8, -1), Fn = (e) => on(e) === "[object Object]", ys = (e) => ae(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bt = /* @__PURE__ */ vs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Zi = /-\w/g, de = Rn(
  (e) => e.replace(Zi, (t) => t.slice(1).toUpperCase())
), Ji = /\B([A-Z])/g, Oe = Rn(
  (e) => e.replace(Ji, "-$1").toLowerCase()
), Hn = Rn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Wn = Rn(
  (e) => e ? `on${Hn(e)}` : ""
), Ge = (e, t) => !Object.is(e, t), Kn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Vo = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Xi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, is = (e) => {
  const t = ae(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ys;
const Ln = () => Ys || (Ys = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xs(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ae(s) ? nr(s) : xs(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (ae(e) || Y(e))
    return e;
}
const Qi = /;(?![^(]*\))/g, er = /:([^]+)/, tr = /\/\*[^]*?\*\//g;
function nr(e) {
  const t = {};
  return e.replace(tr, "").split(Qi).forEach((n) => {
    if (n) {
      const s = n.split(er);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Lt(e) {
  let t = "";
  if (ae(e))
    t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const s = Lt(e[n]);
      s && (t += s + " ");
    }
  else if (Y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const sr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", or = /* @__PURE__ */ vs(sr);
function zo(e) {
  return !!e || e === "";
}
function ir(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Ss(e[s], t[s]);
  return n;
}
function Ss(e, t) {
  if (e === t) return !0;
  let n = Gs(e), s = Gs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ze(e), s = Ze(t), n || s)
    return e === t;
  if (n = O(e), s = O(t), n || s)
    return n && s ? ir(e, t) : !1;
  if (n = Y(e), s = Y(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !Ss(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const jo = (e) => !!(e && e.__v_isRef === !0), Ce = (e) => ae(e) ? e : e == null ? "" : O(e) || Y(e) && (e.toString === Do || !D(e.toString)) ? jo(e) ? Ce(e.value) : JSON.stringify(e, Bo, 2) : String(e), Bo = (e, t) => jo(t) ? Bo(e, t.value) : Et(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[qn(s, i) + " =>"] = o, n),
    {}
  )
} : Io(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => qn(n))
} : Ze(t) ? qn(t) : Y(t) && !O(t) && !Fn(t) ? String(t) : t, qn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ze(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let we;
class rr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = we, !t && we && (this.index = (we.scopes || (we.scopes = [])).push(
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
      const n = we;
      try {
        return we = this, t();
      } finally {
        we = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = we, we = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (we = this.prevScope, this.prevScope = void 0);
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
function lr() {
  return we;
}
let ne;
const Gn = /* @__PURE__ */ new WeakSet();
class Uo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, we && we.active && we.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Gn.has(this) && (Gn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ko(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $s(this), qo(this);
    const t = ne, n = Ie;
    ne = this, Ie = !0;
    try {
      return this.fn();
    } finally {
      Go(this), ne = t, Ie = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Cs(t);
      this.deps = this.depsTail = void 0, $s(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Gn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    rs(this) && this.run();
  }
  get dirty() {
    return rs(this);
  }
}
let Wo = 0, Ut, Wt;
function Ko(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Wt, Wt = e;
    return;
  }
  e.next = Ut, Ut = e;
}
function ws() {
  Wo++;
}
function Ts() {
  if (--Wo > 0)
    return;
  if (Wt) {
    let t = Wt;
    for (Wt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ut; ) {
    let t = Ut;
    for (Ut = void 0; t; ) {
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
function qo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Go(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Cs(s), ar(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function rs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Yo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Yo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Zt) || (e.globalVersion = Zt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !rs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ne, s = Ie;
  ne = e, Ie = !0;
  try {
    qo(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ge(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ne = n, Ie = s, Go(e), e.flags &= -3;
  }
}
function Cs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Cs(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ar(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ie = !0;
const $o = [];
function it() {
  $o.push(Ie), Ie = !1;
}
function rt() {
  const e = $o.pop();
  Ie = e === void 0 ? !0 : e;
}
function $s(e) {
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
class cr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class As {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ne || !Ie || ne === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ne)
      n = this.activeLink = new cr(ne, this), ne.deps ? (n.prevDep = ne.depsTail, ne.depsTail.nextDep = n, ne.depsTail = n) : ne.deps = ne.depsTail = n, Zo(n);
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
    ws();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ts();
    }
  }
}
function Zo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Zo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ls = /* @__PURE__ */ new WeakMap(), St = /* @__PURE__ */ Symbol(
  ""
), as = /* @__PURE__ */ Symbol(
  ""
), Jt = /* @__PURE__ */ Symbol(
  ""
);
function ge(e, t, n) {
  if (Ie && ne) {
    let s = ls.get(e);
    s || ls.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new As()), o.map = s, o.key = n), o.track();
  }
}
function st(e, t, n, s, o, i) {
  const r = ls.get(e);
  if (!r) {
    Zt++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (ws(), t === "clear")
    r.forEach(l);
  else {
    const a = O(e), u = a && ys(n);
    if (a && n === "length") {
      const f = Number(s);
      r.forEach((p, y) => {
        (y === "length" || y === Jt || !Ze(y) && y >= f) && l(p);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), u && l(r.get(Jt)), t) {
        case "add":
          a ? u && l(r.get("length")) : (l(r.get(St)), Et(e) && l(r.get(as)));
          break;
        case "delete":
          a || (l(r.get(St)), Et(e) && l(r.get(as)));
          break;
        case "set":
          Et(e) && l(r.get(St));
          break;
      }
  }
  Ts();
}
function Tt(e) {
  const t = /* @__PURE__ */ W(e);
  return t === e ? t : (ge(t, "iterate", Jt), /* @__PURE__ */ Ne(e) ? t : t.map(lt));
}
function Es(e) {
  return ge(e = /* @__PURE__ */ W(e), "iterate", Jt), e;
}
function Ke(e, t) {
  return /* @__PURE__ */ ht(e) ? Xt(/* @__PURE__ */ kt(e) ? lt(t) : t) : lt(t);
}
const fr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Yn(this, Symbol.iterator, (e) => Ke(this, e));
  },
  concat(...e) {
    return Tt(this).concat(
      ...e.map((t) => O(t) ? Tt(t) : t)
    );
  },
  entries() {
    return Yn(this, "entries", (e) => (e[1] = Ke(this, e[1]), e));
  },
  every(e, t) {
    return Xe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Xe(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Ke(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Xe(
      this,
      "find",
      e,
      t,
      (n) => Ke(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Xe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Xe(
      this,
      "findLast",
      e,
      t,
      (n) => Ke(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Xe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Xe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return $n(this, "includes", e);
  },
  indexOf(...e) {
    return $n(this, "indexOf", e);
  },
  join(e) {
    return Tt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return $n(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Xe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Nt(this, "pop");
  },
  push(...e) {
    return Nt(this, "push", e);
  },
  reduce(e, ...t) {
    return Zs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Zs(this, "reduceRight", e, t);
  },
  shift() {
    return Nt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Xe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Nt(this, "splice", e);
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
    return Nt(this, "unshift", e);
  },
  values() {
    return Yn(this, "values", (e) => Ke(this, e));
  }
};
function Yn(e, t, n) {
  const s = Es(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Ne(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const ur = Array.prototype;
function Xe(e, t, n, s, o, i) {
  const r = Es(e), l = r !== e && !/* @__PURE__ */ Ne(e), a = r[t];
  if (a !== ur[t]) {
    const p = a.apply(e, i);
    return l ? lt(p) : p;
  }
  let u = n;
  r !== e && (l ? u = function(p, y) {
    return n.call(this, Ke(e, p), y, e);
  } : n.length > 2 && (u = function(p, y) {
    return n.call(this, p, y, e);
  }));
  const f = a.call(r, u, s);
  return l && o ? o(f) : f;
}
function Zs(e, t, n, s) {
  const o = Es(e), i = o !== e && !/* @__PURE__ */ Ne(e);
  let r = n, l = !1;
  o !== e && (i ? (l = s.length === 0, r = function(u, f, p) {
    return l && (l = !1, u = Ke(e, u)), n.call(this, u, Ke(e, f), p, e);
  }) : n.length > 3 && (r = function(u, f, p) {
    return n.call(this, u, f, p, e);
  }));
  const a = o[t](r, ...s);
  return l ? Ke(e, a) : a;
}
function $n(e, t, n) {
  const s = /* @__PURE__ */ W(e);
  ge(s, "iterate", Jt);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Fs(n[0]) ? (n[0] = /* @__PURE__ */ W(n[0]), s[t](...n)) : o;
}
function Nt(e, t, n = []) {
  it(), ws();
  const s = (/* @__PURE__ */ W(e))[t].apply(e, n);
  return Ts(), rt(), s;
}
const dr = /* @__PURE__ */ vs("__proto__,__v_isRef,__isVue"), Jo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
);
function hr(e) {
  Ze(e) || (e = String(e));
  const t = /* @__PURE__ */ W(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
class Xo {
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
      return s === (o ? i ? wr : ni : i ? ti : ei).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = O(t);
    if (!o) {
      let a;
      if (r && (a = fr[n]))
        return a;
      if (n === "hasOwnProperty")
        return hr;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ pe(t) ? t : s
    );
    if ((Ze(n) ? Jo.has(n) : dr(n)) || (o || ge(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ pe(l)) {
      const a = r && ys(n) ? l : l.value;
      return o && Y(a) ? /* @__PURE__ */ fs(a) : a;
    }
    return Y(l) ? o ? /* @__PURE__ */ fs(l) : /* @__PURE__ */ On(l) : l;
  }
}
class Qo extends Xo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const r = O(t) && ys(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ ht(i);
      if (!/* @__PURE__ */ Ne(s) && !/* @__PURE__ */ ht(s) && (i = /* @__PURE__ */ W(i), s = /* @__PURE__ */ W(s)), !r && /* @__PURE__ */ pe(i) && !/* @__PURE__ */ pe(s))
        return u || (i.value = s), !0;
    }
    const l = r ? Number(n) < t.length : K(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ pe(t) ? t : o
    );
    return t === /* @__PURE__ */ W(o) && (l ? Ge(s, i) && st(t, "set", n, s) : st(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = K(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && st(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ze(n) || !Jo.has(n)) && ge(t, "has", n), s;
  }
  ownKeys(t) {
    return ge(
      t,
      "iterate",
      O(t) ? "length" : St
    ), Reflect.ownKeys(t);
  }
}
class pr extends Xo {
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
const gr = /* @__PURE__ */ new Qo(), mr = /* @__PURE__ */ new pr(), _r = /* @__PURE__ */ new Qo(!0);
const cs = (e) => e, dn = (e) => Reflect.getPrototypeOf(e);
function vr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ W(o), r = Et(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, u = o[e](...s), f = n ? cs : t ? Xt : lt;
    return !t && ge(
      i,
      "iterate",
      a ? as : St
    ), re(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: p, done: y } = u.next();
          return y ? { value: p, done: y } : {
            value: l ? [f(p[0]), f(p[1])] : f(p),
            done: y
          };
        }
      }
    );
  };
}
function hn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function br(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ W(i), l = /* @__PURE__ */ W(o);
      e || (Ge(o, l) && ge(r, "get", o), ge(r, "get", l));
      const { has: a } = dn(r), u = t ? cs : e ? Xt : lt;
      if (a.call(r, o))
        return u(i.get(o));
      if (a.call(r, l))
        return u(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ge(/* @__PURE__ */ W(o), "iterate", St), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ W(i), l = /* @__PURE__ */ W(o);
      return e || (Ge(o, l) && ge(r, "has", o), ge(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ W(l), u = t ? cs : e ? Xt : lt;
      return !e && ge(a, "iterate", St), l.forEach((f, p) => o.call(i, u(f), u(p), r));
    }
  };
  return re(
    n,
    e ? {
      add: hn("add"),
      set: hn("set"),
      delete: hn("delete"),
      clear: hn("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ W(this), r = dn(i), l = /* @__PURE__ */ W(o), a = !t && !/* @__PURE__ */ Ne(o) && !/* @__PURE__ */ ht(o) ? l : o;
        return r.has.call(i, a) || Ge(o, a) && r.has.call(i, o) || Ge(l, a) && r.has.call(i, l) || (i.add(a), st(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Ne(i) && !/* @__PURE__ */ ht(i) && (i = /* @__PURE__ */ W(i));
        const r = /* @__PURE__ */ W(this), { has: l, get: a } = dn(r);
        let u = l.call(r, o);
        u || (o = /* @__PURE__ */ W(o), u = l.call(r, o));
        const f = a.call(r, o);
        return r.set(o, i), u ? Ge(i, f) && st(r, "set", o, i) : st(r, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ W(this), { has: r, get: l } = dn(i);
        let a = r.call(i, o);
        a || (o = /* @__PURE__ */ W(o), a = r.call(i, o)), l && l.call(i, o);
        const u = i.delete(o);
        return a && st(i, "delete", o, void 0), u;
      },
      clear() {
        const o = /* @__PURE__ */ W(this), i = o.size !== 0, r = o.clear();
        return i && st(
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
    n[o] = vr(o, e, t);
  }), n;
}
function ks(e, t) {
  const n = br(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    K(n, o) && o in s ? n : s,
    o,
    i
  );
}
const yr = {
  get: /* @__PURE__ */ ks(!1, !1)
}, xr = {
  get: /* @__PURE__ */ ks(!1, !0)
}, Sr = {
  get: /* @__PURE__ */ ks(!0, !1)
};
const ei = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap();
function Tr(e) {
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
function Cr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Tr($i(e));
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  return /* @__PURE__ */ ht(e) ? e : Ps(
    e,
    !1,
    gr,
    yr,
    ei
  );
}
// @__NO_SIDE_EFFECTS__
function Ar(e) {
  return Ps(
    e,
    !1,
    _r,
    xr,
    ti
  );
}
// @__NO_SIDE_EFFECTS__
function fs(e) {
  return Ps(
    e,
    !0,
    mr,
    Sr,
    ni
  );
}
function Ps(e, t, n, s, o) {
  if (!Y(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Cr(e);
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
  return /* @__PURE__ */ ht(e) ? /* @__PURE__ */ kt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Fs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ W(t) : e;
}
function Er(e) {
  return !K(e, "__v_skip") && Object.isExtensible(e) && Vo(e, "__v_skip", !0), e;
}
const lt = (e) => Y(e) ? /* @__PURE__ */ On(e) : e, Xt = (e) => Y(e) ? /* @__PURE__ */ fs(e) : e;
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return kr(e, !1);
}
function kr(e, t) {
  return /* @__PURE__ */ pe(e) ? e : new Pr(e, t);
}
class Pr {
  constructor(t, n) {
    this.dep = new As(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ W(t), this._value = n ? t : lt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ne(t) || /* @__PURE__ */ ht(t);
    t = s ? t : /* @__PURE__ */ W(t), Ge(t, n) && (this._rawValue = t, this._value = s ? t : lt(t), this.dep.trigger());
  }
}
function Rs(e) {
  return /* @__PURE__ */ pe(e) ? e.value : e;
}
function Js(e) {
  return D(e) ? e() : Rs(e);
}
const Fr = {
  get: (e, t, n) => t === "__v_raw" ? e : Rs(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ pe(o) && !/* @__PURE__ */ pe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function si(e) {
  return /* @__PURE__ */ kt(e) ? e : new Proxy(e, Fr);
}
class Rr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new As(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ne !== this)
      return Ko(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Yo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Hr(e, t, n = !1) {
  let s, o;
  return D(e) ? s = e : (s = e.get, o = e.set), new Rr(s, o, n);
}
const pn = {}, _n = /* @__PURE__ */ new WeakMap();
let yt;
function Lr(e, t = !1, n = yt) {
  if (n) {
    let s = _n.get(n);
    s || _n.set(n, s = []), s.push(e);
  }
}
function Or(e, t, n = Q) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = n, u = (v) => o ? v : /* @__PURE__ */ Ne(v) || o === !1 || o === 0 ? ot(v, 1) : ot(v);
  let f, p, y, S, k = !1, A = !1;
  if (/* @__PURE__ */ pe(e) ? (p = () => e.value, k = /* @__PURE__ */ Ne(e)) : /* @__PURE__ */ kt(e) ? (p = () => u(e), k = !0) : O(e) ? (A = !0, k = e.some((v) => /* @__PURE__ */ kt(v) || /* @__PURE__ */ Ne(v)), p = () => e.map((v) => {
    if (/* @__PURE__ */ pe(v))
      return v.value;
    if (/* @__PURE__ */ kt(v))
      return u(v);
    if (D(v))
      return a ? a(v, 2) : v();
  })) : D(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (y) {
      it();
      try {
        y();
      } finally {
        rt();
      }
    }
    const v = yt;
    yt = f;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      yt = v;
    }
  } : p = $e, t && o) {
    const v = p, F = o === !0 ? 1 / 0 : o;
    p = () => ot(v(), F);
  }
  const M = lr(), z = () => {
    f.stop(), M && M.active && bs(M.effects, f);
  };
  if (i && t) {
    const v = t;
    t = (...F) => {
      v(...F), z();
    };
  }
  let E = A ? new Array(e.length).fill(pn) : pn;
  const H = (v) => {
    if (!(!(f.flags & 1) || !f.dirty && !v))
      if (t) {
        const F = f.run();
        if (o || k || (A ? F.some((q, ee) => Ge(q, E[ee])) : Ge(F, E))) {
          y && y();
          const q = yt;
          yt = f;
          try {
            const ee = [
              F,
              // pass undefined as the old value when it's changed for the first time
              E === pn ? void 0 : A && E[0] === pn ? [] : E,
              S
            ];
            E = F, a ? a(t, 3, ee) : (
              // @ts-expect-error
              t(...ee)
            );
          } finally {
            yt = q;
          }
        }
      } else
        f.run();
  };
  return l && l(H), f = new Uo(p), f.scheduler = r ? () => r(H, !1) : H, S = (v) => Lr(v, !1, f), y = f.onStop = () => {
    const v = _n.get(f);
    if (v) {
      if (a)
        a(v, 4);
      else
        for (const F of v) F();
      _n.delete(f);
    }
  }, t ? s ? H(!0) : E = f.run() : r ? r(H.bind(null, !0), !0) : f.run(), z.pause = f.pause.bind(f), z.resume = f.resume.bind(f), z.stop = z, z;
}
function ot(e, t = 1 / 0, n) {
  if (t <= 0 || !Y(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ pe(e))
    ot(e.value, t, n);
  else if (O(e))
    for (let s = 0; s < e.length; s++)
      ot(e[s], t, n);
  else if (Io(e) || Et(e))
    e.forEach((s) => {
      ot(s, t, n);
    });
  else if (Fn(e)) {
    for (const s in e)
      ot(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ot(e[s], t, n);
  }
  return e;
}
function rn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Mn(o, t, n);
  }
}
function De(e, t, n, s) {
  if (D(e)) {
    const o = rn(e, t, n, s);
    return o && No(o) && o.catch((i) => {
      Mn(i, t, n);
    }), o;
  }
  if (O(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(De(e[i], t, n, s));
    return o;
  }
}
function Mn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || Q;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let p = 0; p < f.length; p++)
          if (f[p](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      it(), rn(i, null, 10, [
        e,
        a,
        u
      ]), rt();
      return;
    }
  }
  Mr(e, n, o, s, r);
}
function Mr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const be = [];
let Ue = -1;
const Pt = [];
let dt = null, Ct = 0;
const oi = /* @__PURE__ */ Promise.resolve();
let vn = null;
function Hs(e) {
  const t = vn || oi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ir(e) {
  let t = Ue + 1, n = be.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = be[s], i = Qt(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ls(e) {
  if (!(e.flags & 1)) {
    const t = Qt(e), n = be[be.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Qt(n) ? be.push(e) : be.splice(Ir(t), 0, e), e.flags |= 1, ii();
  }
}
function ii() {
  vn || (vn = oi.then(li));
}
function Nr(e) {
  O(e) ? Pt.push(...e) : dt && e.id === -1 ? dt.splice(Ct + 1, 0, e) : e.flags & 1 || (Pt.push(e), e.flags |= 1), ii();
}
function Xs(e, t, n = Ue + 1) {
  for (; n < be.length; n++) {
    const s = be[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      be.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ri(e) {
  if (Pt.length) {
    const t = [...new Set(Pt)].sort(
      (n, s) => Qt(n) - Qt(s)
    );
    if (Pt.length = 0, dt) {
      dt.push(...t);
      return;
    }
    for (dt = t, Ct = 0; Ct < dt.length; Ct++) {
      const n = dt[Ct];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    dt = null, Ct = 0;
  }
}
const Qt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function li(e) {
  try {
    for (Ue = 0; Ue < be.length; Ue++) {
      const t = be[Ue];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ue < be.length; Ue++) {
      const t = be[Ue];
      t && (t.flags &= -2);
    }
    Ue = -1, be.length = 0, ri(), vn = null, (be.length || Pt.length) && li();
  }
}
let ke = null, ai = null;
function bn(e) {
  const t = ke;
  return ke = e, ai = e && e.type.__scopeId || null, t;
}
function ci(e, t = ke, n) {
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
function yn(e, t) {
  if (ke === null)
    return e;
  const n = jn(ke), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, a = Q] = t[o];
    i && (D(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && ot(r), s.push({
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
function mt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let a = l.dir[s];
    a && (it(), De(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), rt());
  }
}
function Os(e, t) {
  if (me) {
    let n = me.provides;
    const s = me.parent && me.parent.provides;
    s === n && (n = me.provides = Object.create(s)), n[e] = t;
  }
}
function Ft(e, t, n = !1) {
  const s = zs();
  if (s || Ht) {
    let o = Ht ? Ht._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && D(t) ? t.call(s && s.proxy) : t;
  }
}
const Dr = /* @__PURE__ */ Symbol.for("v-scx"), Vr = () => Ft(Dr);
function Rt(e, t, n) {
  return fi(e, t, n);
}
function fi(e, t, n = Q) {
  const { immediate: s, deep: o, flush: i, once: r } = n, l = re({}, n), a = t && s || !t && i !== "post";
  let u;
  if (nn) {
    if (i === "sync") {
      const S = Vr();
      u = S.__watcherHandles || (S.__watcherHandles = []);
    } else if (!a) {
      const S = () => {
      };
      return S.stop = $e, S.resume = $e, S.pause = $e, S;
    }
  }
  const f = me;
  l.call = (S, k, A) => De(S, f, k, A);
  let p = !1;
  i === "post" ? l.scheduler = (S) => {
    Se(S, f && f.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (S, k) => {
    k ? S() : Ls(S);
  }), l.augmentJob = (S) => {
    t && (S.flags |= 4), p && (S.flags |= 2, f && (S.id = f.uid, S.i = f));
  };
  const y = Or(e, t, l);
  return nn && (u ? u.push(y) : a && y()), y;
}
function zr(e, t, n) {
  const s = this.proxy, o = ae(e) ? e.includes(".") ? ui(s, e) : () => s[e] : e.bind(s, s);
  let i;
  D(t) ? i = t : (i = t.handler, n = t);
  const r = ln(this), l = fi(o, i.bind(s), n);
  return r(), l;
}
function ui(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const jr = /* @__PURE__ */ Symbol("_vte"), di = (e) => e.__isTeleport, We = /* @__PURE__ */ Symbol("_leaveCb"), Dt = /* @__PURE__ */ Symbol("_enterCb");
function Br() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Dn(() => {
    e.isMounted = !0;
  }), Ms(() => {
    e.isUnmounting = !0;
  }), e;
}
const He = [Function, Array], hi = {
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
}, pi = (e) => {
  const t = e.subTree;
  return t.component ? pi(t.component) : t;
}, Ur = {
  name: "BaseTransition",
  props: hi,
  setup(e, { slots: t }) {
    const n = zs(), s = Br();
    return () => {
      const o = t.default && _i(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = gi(o), r = /* @__PURE__ */ W(e), { mode: l } = r;
      if (s.isLeaving)
        return Zn(i);
      const a = Qs(i);
      if (!a)
        return Zn(i);
      let u = us(
        a,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (p) => u = p
      );
      a.type !== ye && en(a, u);
      let f = n.subTree && Qs(n.subTree);
      if (f && f.type !== ye && !xt(f, a) && pi(n).type !== ye) {
        let p = us(
          f,
          r,
          s,
          n
        );
        if (en(f, p), l === "out-in" && a.type !== ye)
          return s.isLeaving = !0, p.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete p.afterLeave, f = void 0;
          }, Zn(i);
        l === "in-out" && a.type !== ye ? p.delayLeave = (y, S, k) => {
          const A = mi(
            s,
            f
          );
          A[String(f.key)] = f, y[We] = () => {
            S(), y[We] = void 0, delete u.delayedLeave, f = void 0;
          }, u.delayedLeave = () => {
            k(), delete u.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return i;
    };
  }
};
function gi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ye) {
        t = n;
        break;
      }
  }
  return t;
}
const Wr = Ur;
function mi(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function us(e, t, n, s, o) {
  const {
    appear: i,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: f,
    onEnterCancelled: p,
    onBeforeLeave: y,
    onLeave: S,
    onAfterLeave: k,
    onLeaveCancelled: A,
    onBeforeAppear: M,
    onAppear: z,
    onAfterAppear: E,
    onAppearCancelled: H
  } = t, v = String(e.key), F = mi(n, e), q = (V, B) => {
    V && De(
      V,
      s,
      9,
      B
    );
  }, ee = (V, B) => {
    const I = B[1];
    q(V, B), O(V) ? V.every((C) => C.length <= 1) && I() : V.length <= 1 && I();
  }, ce = {
    mode: r,
    persisted: l,
    beforeEnter(V) {
      let B = a;
      if (!n.isMounted)
        if (i)
          B = M || a;
        else
          return;
      V[We] && V[We](
        !0
        /* cancelled */
      );
      const I = F[v];
      I && xt(e, I) && I.el[We] && I.el[We](), q(B, [V]);
    },
    enter(V) {
      if (F[v] === e) return;
      let B = u, I = f, C = p;
      if (!n.isMounted)
        if (i)
          B = z || u, I = E || f, C = H || p;
        else
          return;
      let j = !1;
      V[Dt] = (Fe) => {
        j || (j = !0, Fe ? q(C, [V]) : q(I, [V]), ce.delayedLeave && ce.delayedLeave(), V[Dt] = void 0);
      };
      const oe = V[Dt].bind(null, !1);
      B ? ee(B, [V, oe]) : oe();
    },
    leave(V, B) {
      const I = String(e.key);
      if (V[Dt] && V[Dt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return B();
      q(y, [V]);
      let C = !1;
      V[We] = (oe) => {
        C || (C = !0, B(), oe ? q(A, [V]) : q(k, [V]), V[We] = void 0, F[I] === e && delete F[I]);
      };
      const j = V[We].bind(null, !1);
      F[I] = e, S ? ee(S, [V, j]) : j();
    },
    clone(V) {
      const B = us(
        V,
        t,
        n,
        s,
        o
      );
      return o && o(B), B;
    }
  };
  return ce;
}
function Zn(e) {
  if (In(e))
    return e = pt(e), e.children = null, e;
}
function Qs(e) {
  if (!In(e))
    return di(e.type) && e.children ? gi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && D(n.default))
      return n.default();
  }
}
function en(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, en(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function _i(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === Ee ? (r.patchFlag & 128 && o++, s = s.concat(
      _i(r.children, t, l)
    )) : (t || r.type !== ye) && s.push(l != null ? pt(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Kr(e, t) {
  return D(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    re({ name: e.name }, t, { setup: e })
  ) : e;
}
function vi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function eo(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const xn = /* @__PURE__ */ new WeakMap();
function Kt(e, t, n, s, o = !1) {
  if (O(e)) {
    e.forEach(
      (A, M) => Kt(
        A,
        t && (O(t) ? t[M] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (qt(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Kt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? jn(s.component) : s.el, r = o ? null : i, { i: l, r: a } = e, u = t && t.r, f = l.refs === Q ? l.refs = {} : l.refs, p = l.setupState, y = /* @__PURE__ */ W(p), S = p === Q ? Mo : (A) => eo(f, A) ? !1 : K(y, A), k = (A, M) => !(M && eo(f, M));
  if (u != null && u !== a) {
    if (to(t), ae(u))
      f[u] = null, S(u) && (p[u] = null);
    else if (/* @__PURE__ */ pe(u)) {
      const A = t;
      k(u, A.k) && (u.value = null), A.k && (f[A.k] = null);
    }
  }
  if (D(a))
    rn(a, l, 12, [r, f]);
  else {
    const A = ae(a), M = /* @__PURE__ */ pe(a);
    if (A || M) {
      const z = () => {
        if (e.f) {
          const E = A ? S(a) ? p[a] : f[a] : k() || !e.k ? a.value : f[e.k];
          if (o)
            O(E) && bs(E, i);
          else if (O(E))
            E.includes(i) || E.push(i);
          else if (A)
            f[a] = [i], S(a) && (p[a] = f[a]);
          else {
            const H = [i];
            k(a, e.k) && (a.value = H), e.k && (f[e.k] = H);
          }
        } else A ? (f[a] = r, S(a) && (p[a] = r)) : M && (k(a, e.k) && (a.value = r), e.k && (f[e.k] = r));
      };
      if (r) {
        const E = () => {
          z(), xn.delete(e);
        };
        E.id = -1, xn.set(e, E), Se(E, n);
      } else
        to(e), z();
    }
  }
}
function to(e) {
  const t = xn.get(e);
  t && (t.flags |= 8, xn.delete(e));
}
Ln().requestIdleCallback;
Ln().cancelIdleCallback;
const qt = (e) => !!e.type.__asyncLoader, In = (e) => e.type.__isKeepAlive;
function qr(e, t) {
  bi(e, "a", t);
}
function Gr(e, t) {
  bi(e, "da", t);
}
function bi(e, t, n = me) {
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
      In(o.parent.vnode) && Yr(s, t, n, o), o = o.parent;
  }
}
function Yr(e, t, n, s) {
  const o = Nn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Is(() => {
    bs(s[t], o);
  }, n);
}
function Nn(e, t, n = me, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      it();
      const l = ln(n), a = De(t, n, e, r);
      return l(), rt(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const at = (e) => (t, n = me) => {
  (!nn || e === "sp") && Nn(e, (...s) => t(...s), n);
}, $r = at("bm"), Dn = at("m"), Zr = at(
  "bu"
), Jr = at("u"), Ms = at(
  "bum"
), Is = at("um"), Xr = at(
  "sp"
), Qr = at("rtg"), el = at("rtc");
function tl(e, t = me) {
  Nn("ec", e, t);
}
const nl = "components";
function Ye(e, t) {
  return ol(nl, e, !0, t) || e;
}
const sl = /* @__PURE__ */ Symbol.for("v-ndc");
function ol(e, t, n = !0, s = !1) {
  const o = ke || me;
  if (o) {
    const i = o.type;
    {
      const l = Bl(
        i,
        !1
      );
      if (l && (l === t || l === de(t) || l === Hn(de(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      no(o[e] || i[e], t) || // global registration
      no(o.appContext[e], t)
    );
    return !r && s ? i : r;
  }
}
function no(e, t) {
  return e && (e[t] || e[de(t)] || e[Hn(de(t))]);
}
const ds = (e) => e ? Vi(e) ? jn(e) : ds(e.parent) : null, Gt = (
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
    $parent: (e) => ds(e.parent),
    $root: (e) => ds(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ls(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Hs.bind(e.proxy)),
    $watch: (e) => zr.bind(e)
  })
), Jn = (e, t) => e !== Q && !e.__isScriptSetup && K(e, t), il = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const y = r[t];
      if (y !== void 0)
        switch (y) {
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
        if (Jn(s, t))
          return r[t] = 1, s[t];
        if (o !== Q && K(o, t))
          return r[t] = 2, o[t];
        if (K(i, t))
          return r[t] = 3, i[t];
        if (n !== Q && K(n, t))
          return r[t] = 4, n[t];
        hs && (r[t] = 0);
      }
    }
    const u = Gt[t];
    let f, p;
    if (u)
      return t === "$attrs" && ge(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Q && K(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, K(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return Jn(o, t) ? (o[t] = n, !0) : s !== Q && K(s, t) ? (s[t] = n, !0) : K(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: r }
  }, l) {
    let a;
    return !!(n[l] || e !== Q && l[0] !== "$" && K(e, l) || Jn(t, l) || K(i, l) || K(s, l) || K(Gt, l) || K(o.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : K(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function so(e) {
  return O(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let hs = !0;
function rl(e) {
  const t = xi(e), n = e.proxy, s = e.ctx;
  hs = !1, t.beforeCreate && oo(t.beforeCreate, e, "bc");
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
    beforeMount: p,
    mounted: y,
    beforeUpdate: S,
    updated: k,
    activated: A,
    deactivated: M,
    beforeDestroy: z,
    beforeUnmount: E,
    destroyed: H,
    unmounted: v,
    render: F,
    renderTracked: q,
    renderTriggered: ee,
    errorCaptured: ce,
    serverPrefetch: V,
    // public API
    expose: B,
    inheritAttrs: I,
    // assets
    components: C,
    directives: j,
    filters: oe
  } = t;
  if (u && ll(u, s, null), r)
    for (const se in r) {
      const $ = r[se];
      D($) && (s[se] = $.bind(n));
    }
  if (o) {
    const se = o.call(n, n);
    Y(se) && (e.data = /* @__PURE__ */ On(se));
  }
  if (hs = !0, i)
    for (const se in i) {
      const $ = i[se], xe = D($) ? $.bind(n, n) : D($.get) ? $.get.bind(n, n) : $e, ct = !D($) && D($.set) ? $.set.bind(n) : $e, Je = ue({
        get: xe,
        set: ct
      });
      Object.defineProperty(s, se, {
        enumerable: !0,
        configurable: !0,
        get: () => Je.value,
        set: (Re) => Je.value = Re
      });
    }
  if (l)
    for (const se in l)
      yi(l[se], s, n, se);
  if (a) {
    const se = D(a) ? a.call(n) : a;
    Reflect.ownKeys(se).forEach(($) => {
      Os($, se[$]);
    });
  }
  f && oo(f, e, "c");
  function ie(se, $) {
    O($) ? $.forEach((xe) => se(xe.bind(n))) : $ && se($.bind(n));
  }
  if (ie($r, p), ie(Dn, y), ie(Zr, S), ie(Jr, k), ie(qr, A), ie(Gr, M), ie(tl, ce), ie(el, q), ie(Qr, ee), ie(Ms, E), ie(Is, v), ie(Xr, V), O(B))
    if (B.length) {
      const se = e.exposed || (e.exposed = {});
      B.forEach(($) => {
        Object.defineProperty(se, $, {
          get: () => n[$],
          set: (xe) => n[$] = xe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === $e && (e.render = F), I != null && (e.inheritAttrs = I), C && (e.components = C), j && (e.directives = j), V && vi(e);
}
function ll(e, t, n = $e) {
  O(e) && (e = ps(e));
  for (const s in e) {
    const o = e[s];
    let i;
    Y(o) ? "default" in o ? i = Ft(
      o.from || s,
      o.default,
      !0
    ) : i = Ft(o.from || s) : i = Ft(o), /* @__PURE__ */ pe(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[s] = i;
  }
}
function oo(e, t, n) {
  De(
    O(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function yi(e, t, n, s) {
  let o = s.includes(".") ? ui(n, s) : () => n[s];
  if (ae(e)) {
    const i = t[e];
    D(i) && Rt(o, i);
  } else if (D(e))
    Rt(o, e.bind(n));
  else if (Y(e))
    if (O(e))
      e.forEach((i) => yi(i, t, n, s));
    else {
      const i = D(e.handler) ? e.handler.bind(n) : t[e.handler];
      D(i) && Rt(o, i, e);
    }
}
function xi(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (u) => Sn(a, u, r, !0)
  ), Sn(a, t, r)), Y(t) && i.set(t, a), a;
}
function Sn(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Sn(e, i, n, !0), o && o.forEach(
    (r) => Sn(e, r, n, !0)
  );
  for (const r in t)
    if (!(s && r === "expose")) {
      const l = al[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const al = {
  data: io,
  props: ro,
  emits: ro,
  // objects
  methods: jt,
  computed: jt,
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
  components: jt,
  directives: jt,
  // watch
  watch: fl,
  // provide / inject
  provide: io,
  inject: cl
};
function io(e, t) {
  return t ? e ? function() {
    return re(
      D(e) ? e.call(this, this) : e,
      D(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function cl(e, t) {
  return jt(ps(e), ps(t));
}
function ps(e) {
  if (O(e)) {
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
function jt(e, t) {
  return e ? re(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ro(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : re(
    /* @__PURE__ */ Object.create(null),
    so(e),
    so(t ?? {})
  ) : t;
}
function fl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = re(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ve(e[s], t[s]);
  return n;
}
function Si() {
  return {
    app: null,
    config: {
      isNativeTag: Mo,
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
let ul = 0;
function dl(e, t) {
  return function(s, o = null) {
    D(s) || (s = re({}, s)), o != null && !Y(o) && (o = null);
    const i = Si(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = i.app = {
      _uid: ul++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Kl,
      get config() {
        return i.config;
      },
      set config(f) {
      },
      use(f, ...p) {
        return r.has(f) || (f && D(f.install) ? (r.add(f), f.install(u, ...p)) : D(f) && (r.add(f), f(u, ...p))), u;
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
      mount(f, p, y) {
        if (!a) {
          const S = u._ceVNode || Z(s, o);
          return S.appContext = i, y === !0 ? y = "svg" : y === !1 && (y = void 0), e(S, f, y), a = !0, u._container = f, f.__vue_app__ = u, jn(S.component);
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        a && (De(
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
const hl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${de(t)}Modifiers`] || e[`${Oe(t)}Modifiers`];
function pl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Q;
  let o = n;
  const i = t.startsWith("update:"), r = i && hl(s, t.slice(7));
  r && (r.trim && (o = n.map((f) => ae(f) ? f.trim() : f)), r.number && (o = n.map(Xi)));
  let l, a = s[l = Wn(t)] || // also try camelCase event handler (#2249)
  s[l = Wn(de(t))];
  !a && i && (a = s[l = Wn(Oe(t))]), a && De(
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
    e.emitted[l] = !0, De(
      u,
      e,
      6,
      o
    );
  }
}
const gl = /* @__PURE__ */ new WeakMap();
function wi(e, t, n = !1) {
  const s = n ? gl : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!D(e)) {
    const a = (u) => {
      const f = wi(u, t, !0);
      f && (l = !0, re(r, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (Y(e) && s.set(e, null), null) : (O(i) ? i.forEach((a) => r[a] = null) : re(r, i), Y(e) && s.set(e, r), r);
}
function Vn(e, t) {
  return !e || !kn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), K(e, t[0].toLowerCase() + t.slice(1)) || K(e, Oe(t)) || K(e, t));
}
function lo(e) {
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
    props: p,
    data: y,
    setupState: S,
    ctx: k,
    inheritAttrs: A
  } = e, M = bn(e);
  let z, E;
  try {
    if (n.shapeFlag & 4) {
      const v = o || s, F = v;
      z = qe(
        u.call(
          F,
          v,
          f,
          p,
          S,
          y,
          k
        )
      ), E = l;
    } else {
      const v = t;
      z = qe(
        v.length > 1 ? v(
          p,
          { attrs: l, slots: r, emit: a }
        ) : v(
          p,
          null
        )
      ), E = t.props ? l : ml(l);
    }
  } catch (v) {
    Yt.length = 0, Mn(v, e, 1), z = Z(ye);
  }
  let H = z;
  if (E && A !== !1) {
    const v = Object.keys(E), { shapeFlag: F } = H;
    v.length && F & 7 && (i && v.some(Pn) && (E = _l(
      E,
      i
    )), H = pt(H, E, !1, !0));
  }
  return n.dirs && (H = pt(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && en(H, n.transition), z = H, bn(M), z;
}
const ml = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || kn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, _l = (e, t) => {
  const n = {};
  for (const s in e)
    (!Pn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function vl(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: a } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? ao(s, r, u) : !!r;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const y = f[p];
        if (Ti(r, s, y) && !Vn(u, y))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? ao(s, r, u) : !0 : !!r;
  return !1;
}
function ao(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (Ti(t, e, i) && !Vn(n, i))
      return !0;
  }
  return !1;
}
function Ti(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && Y(s) && Y(o) ? !Ss(s, o) : s !== o;
}
function bl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = s, e = o), o === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Ci = {}, Ai = () => Object.create(Ci), Ei = (e) => Object.getPrototypeOf(e) === Ci;
function yl(e, t, n, s = !1) {
  const o = {}, i = Ai();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ki(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ Ar(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function xl(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ W(o), [a] = e.propsOptions;
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
        let y = f[p];
        if (Vn(e.emitsOptions, y))
          continue;
        const S = t[y];
        if (a)
          if (K(i, y))
            S !== i[y] && (i[y] = S, u = !0);
          else {
            const k = de(y);
            o[k] = gs(
              a,
              l,
              k,
              S,
              e,
              !1
            );
          }
        else
          S !== i[y] && (i[y] = S, u = !0);
      }
    }
  } else {
    ki(e, t, o, i) && (u = !0);
    let f;
    for (const p in l)
      (!t || // for camelCase
      !K(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Oe(p)) === p || !K(t, f))) && (a ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[f] !== void 0) && (o[p] = gs(
        a,
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
  u && st(e.attrs, "set", "");
}
function ki(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (Bt(a))
        continue;
      const u = t[a];
      let f;
      o && K(o, f = de(a)) ? !i || !i.includes(f) ? n[f] = u : (l || (l = {}))[f] = u : Vn(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, r = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ W(n), u = l || Q;
    for (let f = 0; f < i.length; f++) {
      const p = i[f];
      n[p] = gs(
        o,
        a,
        p,
        u[p],
        e,
        !K(u, p)
      );
    }
  }
  return r;
}
function gs(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = K(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && D(a)) {
        const { propsDefaults: u } = o;
        if (n in u)
          s = u[n];
        else {
          const f = ln(o);
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
    ] && (s === "" || s === Oe(n)) && (s = !0));
  }
  return s;
}
const Sl = /* @__PURE__ */ new WeakMap();
function Pi(e, t, n = !1) {
  const s = n ? Sl : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let a = !1;
  if (!D(e)) {
    const f = (p) => {
      a = !0;
      const [y, S] = Pi(p, t, !0);
      re(r, y), S && l.push(...S);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !a)
    return Y(e) && s.set(e, At), At;
  if (O(i))
    for (let f = 0; f < i.length; f++) {
      const p = de(i[f]);
      co(p) && (r[p] = Q);
    }
  else if (i)
    for (const f in i) {
      const p = de(f);
      if (co(p)) {
        const y = i[f], S = r[p] = O(y) || D(y) ? { type: y } : re({}, y), k = S.type;
        let A = !1, M = !0;
        if (O(k))
          for (let z = 0; z < k.length; ++z) {
            const E = k[z], H = D(E) && E.name;
            if (H === "Boolean") {
              A = !0;
              break;
            } else H === "String" && (M = !1);
          }
        else
          A = D(k) && k.name === "Boolean";
        S[
          0
          /* shouldCast */
        ] = A, S[
          1
          /* shouldCastTrue */
        ] = M, (A || K(S, "default")) && l.push(p);
      }
    }
  const u = [r, l];
  return Y(e) && s.set(e, u), u;
}
function co(e) {
  return e[0] !== "$" && !Bt(e);
}
const Ns = (e) => e === "_" || e === "_ctx" || e === "$stable", Ds = (e) => O(e) ? e.map(qe) : [qe(e)], wl = (e, t, n) => {
  if (t._n)
    return t;
  const s = ci((...o) => Ds(t(...o)), n);
  return s._c = !1, s;
}, Fi = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Ns(o)) continue;
    const i = e[o];
    if (D(i))
      t[o] = wl(o, i, s);
    else if (i != null) {
      const r = Ds(i);
      t[o] = () => r;
    }
  }
}, Ri = (e, t) => {
  const n = Ds(t);
  e.slots.default = () => n;
}, Hi = (e, t, n) => {
  for (const s in t)
    (n || !Ns(s)) && (e[s] = t[s]);
}, Tl = (e, t, n) => {
  const s = e.slots = Ai();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Hi(s, t, n), n && Vo(s, "_", o, !0)) : Fi(t, s);
  } else t && Ri(e, t);
}, Cl = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = Q;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Hi(o, t, n) : (i = !t.$stable, Fi(t, o)), r = t;
  } else t && (Ri(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !Ns(l) && r[l] == null && delete o[l];
}, Se = Fl;
function Al(e) {
  return El(e);
}
function El(e, t) {
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
    parentNode: p,
    nextSibling: y,
    setScopeId: S = $e,
    insertStaticContent: k
  } = e, A = (c, d, h, g = null, m = null, _ = null, w = void 0, x = null, T = !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !xt(c, d) && (g = wt(c), Re(c, m, _, !0), c = null), d.patchFlag === -2 && (T = !1, d.dynamicChildren = null);
    const { type: b, ref: L, shapeFlag: P } = d;
    switch (b) {
      case zn:
        M(c, d, h, g);
        break;
      case ye:
        z(c, d, h, g);
        break;
      case Qn:
        c == null && E(d, h, g, w);
        break;
      case Ee:
        C(
          c,
          d,
          h,
          g,
          m,
          _,
          w,
          x,
          T
        );
        break;
      default:
        P & 1 ? F(
          c,
          d,
          h,
          g,
          m,
          _,
          w,
          x,
          T
        ) : P & 6 ? j(
          c,
          d,
          h,
          g,
          m,
          _,
          w,
          x,
          T
        ) : (P & 64 || P & 128) && b.process(
          c,
          d,
          h,
          g,
          m,
          _,
          w,
          x,
          T,
          ft
        );
    }
    L != null && m ? Kt(L, c && c.ref, _, d || c, !d) : L == null && c && c.ref != null && Kt(c.ref, null, _, c, !0);
  }, M = (c, d, h, g) => {
    if (c == null)
      s(
        d.el = l(d.children),
        h,
        g
      );
    else {
      const m = d.el = c.el;
      d.children !== c.children && u(m, d.children);
    }
  }, z = (c, d, h, g) => {
    c == null ? s(
      d.el = a(d.children || ""),
      h,
      g
    ) : d.el = c.el;
  }, E = (c, d, h, g) => {
    [c.el, c.anchor] = k(
      c.children,
      d,
      h,
      g,
      c.el,
      c.anchor
    );
  }, H = ({ el: c, anchor: d }, h, g) => {
    let m;
    for (; c && c !== d; )
      m = y(c), s(c, h, g), c = m;
    s(d, h, g);
  }, v = ({ el: c, anchor: d }) => {
    let h;
    for (; c && c !== d; )
      h = y(c), o(c), c = h;
    o(d);
  }, F = (c, d, h, g, m, _, w, x, T) => {
    if (d.type === "svg" ? w = "svg" : d.type === "math" && (w = "mathml"), c == null)
      q(
        d,
        h,
        g,
        m,
        _,
        w,
        x,
        T
      );
    else {
      const b = c.el && c.el._isVueCE ? c.el : null;
      try {
        b && b._beginPatch(), V(
          c,
          d,
          m,
          _,
          w,
          x,
          T
        );
      } finally {
        b && b._endPatch();
      }
    }
  }, q = (c, d, h, g, m, _, w, x) => {
    let T, b;
    const { props: L, shapeFlag: P, transition: R, dirs: N } = c;
    if (T = c.el = r(
      c.type,
      _,
      L && L.is,
      L
    ), P & 8 ? f(T, c.children) : P & 16 && ce(
      c.children,
      T,
      null,
      g,
      m,
      Xn(c, _),
      w,
      x
    ), N && mt(c, null, g, "created"), ee(T, c, c.scopeId, w, g), L) {
      for (const J in L)
        J !== "value" && !Bt(J) && i(T, J, null, L[J], _, g);
      "value" in L && i(T, "value", null, L.value, _), (b = L.onVnodeBeforeMount) && Be(b, g, c);
    }
    N && mt(c, null, g, "beforeMount");
    const U = kl(m, R);
    U && R.beforeEnter(T), s(T, d, h), ((b = L && L.onVnodeMounted) || U || N) && Se(() => {
      b && Be(b, g, c), U && R.enter(T), N && mt(c, null, g, "mounted");
    }, m);
  }, ee = (c, d, h, g, m) => {
    if (h && S(c, h), g)
      for (let _ = 0; _ < g.length; _++)
        S(c, g[_]);
    if (m) {
      let _ = m.subTree;
      if (d === _ || Ii(_.type) && (_.ssContent === d || _.ssFallback === d)) {
        const w = m.vnode;
        ee(
          c,
          w,
          w.scopeId,
          w.slotScopeIds,
          m.parent
        );
      }
    }
  }, ce = (c, d, h, g, m, _, w, x, T = 0) => {
    for (let b = T; b < c.length; b++) {
      const L = c[b] = x ? nt(c[b]) : qe(c[b]);
      A(
        null,
        L,
        d,
        h,
        g,
        m,
        _,
        w,
        x
      );
    }
  }, V = (c, d, h, g, m, _, w) => {
    const x = d.el = c.el;
    let { patchFlag: T, dynamicChildren: b, dirs: L } = d;
    T |= c.patchFlag & 16;
    const P = c.props || Q, R = d.props || Q;
    let N;
    if (h && _t(h, !1), (N = R.onVnodeBeforeUpdate) && Be(N, h, d, c), L && mt(d, c, h, "beforeUpdate"), h && _t(h, !0), (P.innerHTML && R.innerHTML == null || P.textContent && R.textContent == null) && f(x, ""), b ? B(
      c.dynamicChildren,
      b,
      x,
      h,
      g,
      Xn(d, m),
      _
    ) : w || $(
      c,
      d,
      x,
      null,
      h,
      g,
      Xn(d, m),
      _,
      !1
    ), T > 0) {
      if (T & 16)
        I(x, P, R, h, m);
      else if (T & 2 && P.class !== R.class && i(x, "class", null, R.class, m), T & 4 && i(x, "style", P.style, R.style, m), T & 8) {
        const U = d.dynamicProps;
        for (let J = 0; J < U.length; J++) {
          const te = U[J], le = P[te], he = R[te];
          (he !== le || te === "value") && i(x, te, le, he, m, h);
        }
      }
      T & 1 && c.children !== d.children && f(x, d.children);
    } else !w && b == null && I(x, P, R, h, m);
    ((N = R.onVnodeUpdated) || L) && Se(() => {
      N && Be(N, h, d, c), L && mt(d, c, h, "updated");
    }, g);
  }, B = (c, d, h, g, m, _, w) => {
    for (let x = 0; x < d.length; x++) {
      const T = c[x], b = d[x], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        T.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (T.type === Ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xt(T, b) || // - In the case of a component, it could contain anything.
        T.shapeFlag & 198) ? p(T.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      A(
        T,
        b,
        L,
        null,
        g,
        m,
        _,
        w,
        !0
      );
    }
  }, I = (c, d, h, g, m) => {
    if (d !== h) {
      if (d !== Q)
        for (const _ in d)
          !Bt(_) && !(_ in h) && i(
            c,
            _,
            d[_],
            null,
            m,
            g
          );
      for (const _ in h) {
        if (Bt(_)) continue;
        const w = h[_], x = d[_];
        w !== x && _ !== "value" && i(c, _, x, w, m, g);
      }
      "value" in h && i(c, "value", d.value, h.value, m);
    }
  }, C = (c, d, h, g, m, _, w, x, T) => {
    const b = d.el = c ? c.el : l(""), L = d.anchor = c ? c.anchor : l("");
    let { patchFlag: P, dynamicChildren: R, slotScopeIds: N } = d;
    N && (x = x ? x.concat(N) : N), c == null ? (s(b, h, g), s(L, h, g), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      h,
      L,
      m,
      _,
      w,
      x,
      T
    )) : P > 0 && P & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === R.length ? (B(
      c.dynamicChildren,
      R,
      h,
      m,
      _,
      w,
      x
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || m && d === m.subTree) && Li(
      c,
      d,
      !0
      /* shallow */
    )) : $(
      c,
      d,
      h,
      L,
      m,
      _,
      w,
      x,
      T
    );
  }, j = (c, d, h, g, m, _, w, x, T) => {
    d.slotScopeIds = x, c == null ? d.shapeFlag & 512 ? m.ctx.activate(
      d,
      h,
      g,
      w,
      T
    ) : oe(
      d,
      h,
      g,
      m,
      _,
      w,
      T
    ) : Fe(c, d, T);
  }, oe = (c, d, h, g, m, _, w) => {
    const x = c.component = Nl(
      c,
      g,
      m
    );
    if (In(c) && (x.ctx.renderer = ft), Dl(x, !1, w), x.asyncDep) {
      if (m && m.registerDep(x, ie, w), !c.el) {
        const T = x.subTree = Z(ye);
        z(null, T, d, h), c.placeholder = T.el;
      }
    } else
      ie(
        x,
        c,
        d,
        h,
        m,
        _,
        w
      );
  }, Fe = (c, d, h) => {
    const g = d.component = c.component;
    if (vl(c, d, h))
      if (g.asyncDep && !g.asyncResolved) {
        se(g, d, h);
        return;
      } else
        g.next = d, g.update();
    else
      d.el = c.el, g.vnode = d;
  }, ie = (c, d, h, g, m, _, w) => {
    const x = () => {
      if (c.isMounted) {
        let { next: P, bu: R, u: N, parent: U, vnode: J } = c;
        {
          const ze = Oi(c);
          if (ze) {
            P && (P.el = J.el, se(c, P, w)), ze.asyncDep.then(() => {
              Se(() => {
                c.isUnmounted || b();
              }, m);
            });
            return;
          }
        }
        let te = P, le;
        _t(c, !1), P ? (P.el = J.el, se(c, P, w)) : P = J, R && Kn(R), (le = P.props && P.props.onVnodeBeforeUpdate) && Be(le, U, P, J), _t(c, !0);
        const he = lo(c), Ve = c.subTree;
        c.subTree = he, A(
          Ve,
          he,
          // parent may have changed if it's in a teleport
          p(Ve.el),
          // anchor may have changed if it's in a fragment
          wt(Ve),
          c,
          m,
          _
        ), P.el = he.el, te === null && bl(c, he.el), N && Se(N, m), (le = P.props && P.props.onVnodeUpdated) && Se(
          () => Be(le, U, P, J),
          m
        );
      } else {
        let P;
        const { el: R, props: N } = d, { bm: U, m: J, parent: te, root: le, type: he } = c, Ve = qt(d);
        _t(c, !1), U && Kn(U), !Ve && (P = N && N.onVnodeBeforeMount) && Be(P, te, d), _t(c, !0);
        {
          le.ce && le.ce._hasShadowRoot() && le.ce._injectChildStyle(
            he,
            c.parent ? c.parent.type : void 0
          );
          const ze = c.subTree = lo(c);
          A(
            null,
            ze,
            h,
            g,
            c,
            m,
            _
          ), d.el = ze.el;
        }
        if (J && Se(J, m), !Ve && (P = N && N.onVnodeMounted)) {
          const ze = d;
          Se(
            () => Be(P, te, ze),
            m
          );
        }
        (d.shapeFlag & 256 || te && qt(te.vnode) && te.vnode.shapeFlag & 256) && c.a && Se(c.a, m), c.isMounted = !0, d = h = g = null;
      }
    };
    c.scope.on();
    const T = c.effect = new Uo(x);
    c.scope.off();
    const b = c.update = T.run.bind(T), L = c.job = T.runIfDirty.bind(T);
    L.i = c, L.id = c.uid, T.scheduler = () => Ls(L), _t(c, !0), b();
  }, se = (c, d, h) => {
    d.component = c;
    const g = c.vnode.props;
    c.vnode = d, c.next = null, xl(c, d.props, g, h), Cl(c, d.children, h), it(), Xs(c), rt();
  }, $ = (c, d, h, g, m, _, w, x, T = !1) => {
    const b = c && c.children, L = c ? c.shapeFlag : 0, P = d.children, { patchFlag: R, shapeFlag: N } = d;
    if (R > 0) {
      if (R & 128) {
        ct(
          b,
          P,
          h,
          g,
          m,
          _,
          w,
          x,
          T
        );
        return;
      } else if (R & 256) {
        xe(
          b,
          P,
          h,
          g,
          m,
          _,
          w,
          x,
          T
        );
        return;
      }
    }
    N & 8 ? (L & 16 && gt(b, m, _), P !== b && f(h, P)) : L & 16 ? N & 16 ? ct(
      b,
      P,
      h,
      g,
      m,
      _,
      w,
      x,
      T
    ) : gt(b, m, _, !0) : (L & 8 && f(h, ""), N & 16 && ce(
      P,
      h,
      g,
      m,
      _,
      w,
      x,
      T
    ));
  }, xe = (c, d, h, g, m, _, w, x, T) => {
    c = c || At, d = d || At;
    const b = c.length, L = d.length, P = Math.min(b, L);
    let R;
    for (R = 0; R < P; R++) {
      const N = d[R] = T ? nt(d[R]) : qe(d[R]);
      A(
        c[R],
        N,
        h,
        null,
        m,
        _,
        w,
        x,
        T
      );
    }
    b > L ? gt(
      c,
      m,
      _,
      !0,
      !1,
      P
    ) : ce(
      d,
      h,
      g,
      m,
      _,
      w,
      x,
      T,
      P
    );
  }, ct = (c, d, h, g, m, _, w, x, T) => {
    let b = 0;
    const L = d.length;
    let P = c.length - 1, R = L - 1;
    for (; b <= P && b <= R; ) {
      const N = c[b], U = d[b] = T ? nt(d[b]) : qe(d[b]);
      if (xt(N, U))
        A(
          N,
          U,
          h,
          null,
          m,
          _,
          w,
          x,
          T
        );
      else
        break;
      b++;
    }
    for (; b <= P && b <= R; ) {
      const N = c[P], U = d[R] = T ? nt(d[R]) : qe(d[R]);
      if (xt(N, U))
        A(
          N,
          U,
          h,
          null,
          m,
          _,
          w,
          x,
          T
        );
      else
        break;
      P--, R--;
    }
    if (b > P) {
      if (b <= R) {
        const N = R + 1, U = N < L ? d[N].el : g;
        for (; b <= R; )
          A(
            null,
            d[b] = T ? nt(d[b]) : qe(d[b]),
            h,
            U,
            m,
            _,
            w,
            x,
            T
          ), b++;
      }
    } else if (b > R)
      for (; b <= P; )
        Re(c[b], m, _, !0), b++;
    else {
      const N = b, U = b, J = /* @__PURE__ */ new Map();
      for (b = U; b <= R; b++) {
        const Ae = d[b] = T ? nt(d[b]) : qe(d[b]);
        Ae.key != null && J.set(Ae.key, b);
      }
      let te, le = 0;
      const he = R - U + 1;
      let Ve = !1, ze = 0;
      const It = new Array(he);
      for (b = 0; b < he; b++) It[b] = 0;
      for (b = N; b <= P; b++) {
        const Ae = c[b];
        if (le >= he) {
          Re(Ae, m, _, !0);
          continue;
        }
        let je;
        if (Ae.key != null)
          je = J.get(Ae.key);
        else
          for (te = U; te <= R; te++)
            if (It[te - U] === 0 && xt(Ae, d[te])) {
              je = te;
              break;
            }
        je === void 0 ? Re(Ae, m, _, !0) : (It[je - U] = b + 1, je >= ze ? ze = je : Ve = !0, A(
          Ae,
          d[je],
          h,
          null,
          m,
          _,
          w,
          x,
          T
        ), le++);
      }
      const Ws = Ve ? Pl(It) : At;
      for (te = Ws.length - 1, b = he - 1; b >= 0; b--) {
        const Ae = U + b, je = d[Ae], Ks = d[Ae + 1], qs = Ae + 1 < L ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ks.el || Mi(Ks)
        ) : g;
        It[b] === 0 ? A(
          null,
          je,
          h,
          qs,
          m,
          _,
          w,
          x,
          T
        ) : Ve && (te < 0 || b !== Ws[te] ? Je(je, h, qs, 2) : te--);
      }
    }
  }, Je = (c, d, h, g, m = null) => {
    const { el: _, type: w, transition: x, children: T, shapeFlag: b } = c;
    if (b & 6) {
      Je(c.component.subTree, d, h, g);
      return;
    }
    if (b & 128) {
      c.suspense.move(d, h, g);
      return;
    }
    if (b & 64) {
      w.move(c, d, h, ft);
      return;
    }
    if (w === Ee) {
      s(_, d, h);
      for (let P = 0; P < T.length; P++)
        Je(T[P], d, h, g);
      s(c.anchor, d, h);
      return;
    }
    if (w === Qn) {
      H(c, d, h);
      return;
    }
    if (g !== 2 && b & 1 && x)
      if (g === 0)
        x.beforeEnter(_), s(_, d, h), Se(() => x.enter(_), m);
      else {
        const { leave: P, delayLeave: R, afterLeave: N } = x, U = () => {
          c.ctx.isUnmounted ? o(_) : s(_, d, h);
        }, J = () => {
          _._isLeaving && _[We](
            !0
            /* cancelled */
          ), P(_, () => {
            U(), N && N();
          });
        };
        R ? R(_, U, J) : J();
      }
    else
      s(_, d, h);
  }, Re = (c, d, h, g = !1, m = !1) => {
    const {
      type: _,
      props: w,
      ref: x,
      children: T,
      dynamicChildren: b,
      shapeFlag: L,
      patchFlag: P,
      dirs: R,
      cacheIndex: N,
      memo: U
    } = c;
    if (P === -2 && (m = !1), x != null && (it(), Kt(x, null, h, c, !0), rt()), N != null && (d.renderCache[N] = void 0), L & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const J = L & 1 && R, te = !qt(c);
    let le;
    if (te && (le = w && w.onVnodeBeforeUnmount) && Be(le, d, c), L & 6)
      fn(c.component, h, g);
    else {
      if (L & 128) {
        c.suspense.unmount(h, g);
        return;
      }
      J && mt(c, null, d, "beforeUnmount"), L & 64 ? c.type.remove(
        c,
        d,
        h,
        ft,
        g
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Ee || P > 0 && P & 64) ? gt(
        b,
        d,
        h,
        !1,
        !0
      ) : (_ === Ee && P & 384 || !m && L & 16) && gt(T, d, h), g && an(c);
    }
    const he = U != null && N == null;
    (te && (le = w && w.onVnodeUnmounted) || J || he) && Se(() => {
      le && Be(le, d, c), J && mt(c, null, d, "unmounted"), he && (c.el = null);
    }, h);
  }, an = (c) => {
    const { type: d, el: h, anchor: g, transition: m } = c;
    if (d === Ee) {
      cn(h, g);
      return;
    }
    if (d === Qn) {
      v(c);
      return;
    }
    const _ = () => {
      o(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (c.shapeFlag & 1 && m && !m.persisted) {
      const { leave: w, delayLeave: x } = m, T = () => w(h, _);
      x ? x(c.el, _, T) : T();
    } else
      _();
  }, cn = (c, d) => {
    let h;
    for (; c !== d; )
      h = y(c), o(c), c = h;
    o(d);
  }, fn = (c, d, h) => {
    const { bum: g, scope: m, job: _, subTree: w, um: x, m: T, a: b } = c;
    fo(T), fo(b), g && Kn(g), m.stop(), _ && (_.flags |= 8, Re(w, c, d, h)), x && Se(x, d), Se(() => {
      c.isUnmounted = !0;
    }, d);
  }, gt = (c, d, h, g = !1, m = !1, _ = 0) => {
    for (let w = _; w < c.length; w++)
      Re(c[w], d, h, g, m);
  }, wt = (c) => {
    if (c.shapeFlag & 6)
      return wt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = y(c.anchor || c.el), h = d && d[jr];
    return h ? y(h) : d;
  };
  let Mt = !1;
  const un = (c, d, h) => {
    let g;
    c == null ? d._vnode && (Re(d._vnode, null, null, !0), g = d._vnode.component) : A(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      h
    ), d._vnode = c, Mt || (Mt = !0, Xs(g), ri(), Mt = !1);
  }, ft = {
    p: A,
    um: Re,
    m: Je,
    r: an,
    mt: oe,
    mc: ce,
    pc: $,
    pbc: B,
    n: wt,
    o: e
  };
  return {
    render: un,
    hydrate: void 0,
    createApp: dl(un)
  };
}
function Xn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function _t({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function kl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Li(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (O(s) && O(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = nt(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && Li(r, l)), l.type === zn && (l.patchFlag === -1 && (l = o[i] = nt(l)), l.el = r.el), l.type === ye && !l.el && (l.el = r.el);
    }
}
function Pl(e) {
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
function Oi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Oi(t);
}
function fo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Mi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Mi(t.subTree) : null;
}
const Ii = (e) => e.__isSuspense;
function Fl(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : Nr(e);
}
const Ee = /* @__PURE__ */ Symbol.for("v-fgt"), zn = /* @__PURE__ */ Symbol.for("v-txt"), ye = /* @__PURE__ */ Symbol.for("v-cmt"), Qn = /* @__PURE__ */ Symbol.for("v-stc"), Yt = [];
let Pe = null;
function X(e = !1) {
  Yt.push(Pe = e ? null : []);
}
function Rl() {
  Yt.pop(), Pe = Yt[Yt.length - 1] || null;
}
let tn = 1;
function wn(e, t = !1) {
  tn += e, e < 0 && Pe && t && (Pe.hasOnce = !0);
}
function Ni(e) {
  return e.dynamicChildren = tn > 0 ? Pe || At : null, Rl(), tn > 0 && Pe && Pe.push(e), e;
}
function _e(e, t, n, s, o, i) {
  return Ni(
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
function Me(e, t, n, s, o) {
  return Ni(
    Z(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Tn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Di = ({ key: e }) => e ?? null, gn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ae(e) || /* @__PURE__ */ pe(e) || D(e) ? { i: ke, r: e, k: t, f: !!n } : e : null);
function G(e, t = null, n = null, s = 0, o = null, i = e === Ee ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Di(t),
    ref: t && gn(t),
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
    ctx: ke
  };
  return l ? (Vs(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ae(n) ? 8 : 16), tn > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Pe.push(a), a;
}
const Z = Hl;
function Hl(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === sl) && (e = ye), Tn(e)) {
    const l = pt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Vs(l, n), tn > 0 && !i && Pe && (l.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = l : Pe.push(l)), l.patchFlag = -2, l;
  }
  if (Ul(e) && (e = e.__vccOpts), t) {
    t = Ll(t);
    let { class: l, style: a } = t;
    l && !ae(l) && (t.class = Lt(l)), Y(a) && (/* @__PURE__ */ Fs(a) && !O(a) && (a = re({}, a)), t.style = xs(a));
  }
  const r = ae(e) ? 1 : Ii(e) ? 128 : di(e) ? 64 : Y(e) ? 4 : D(e) ? 2 : 0;
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
function Ll(e) {
  return e ? /* @__PURE__ */ Fs(e) || Ei(e) ? re({}, e) : e : null;
}
function pt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: a } = e, u = t ? Ol(o || {}, t) : o, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Di(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? O(i) ? i.concat(gn(t)) : [i, gn(t)] : gn(t)
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
    patchFlag: t && e.type !== Ee ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && pt(e.ssContent),
    ssFallback: e.ssFallback && pt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && en(
    f,
    a.clone(f)
  ), f;
}
function $t(e = " ", t = 0) {
  return Z(zn, null, e, t);
}
function fe(e = "", t = !1) {
  return t ? (X(), Me(ye, null, e)) : Z(ye, null, e);
}
function qe(e) {
  return e == null || typeof e == "boolean" ? Z(ye) : O(e) ? Z(
    Ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Tn(e) ? nt(e) : Z(zn, null, String(e));
}
function nt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : pt(e);
}
function Vs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (O(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Vs(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Ei(t) ? t._ctx = ke : o === 3 && ke && (ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else D(t) ? (t = { default: t, _ctx: ke }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [$t(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ol(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Lt([t.class, s.class]));
      else if (o === "style")
        t.style = xs([t.style, s.style]);
      else if (kn(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(O(i) && i.includes(r)) ? t[o] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Pn(o) && (t[o] = r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Be(e, t, n, s = null) {
  De(e, t, 7, [
    n,
    s
  ]);
}
const Ml = Si();
let Il = 0;
function Nl(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Ml, i = {
    uid: Il++,
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
    scope: new rr(
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
    propsOptions: Pi(s, o),
    emitsOptions: wi(s, o),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = pl.bind(null, i), e.ce && e.ce(i), i;
}
let me = null;
const zs = () => me || ke;
let Cn, ms;
{
  const e = Ln(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  Cn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => me = n
  ), ms = t(
    "__VUE_SSR_SETTERS__",
    (n) => nn = n
  );
}
const ln = (e) => {
  const t = me;
  return Cn(e), e.scope.on(), () => {
    e.scope.off(), Cn(t);
  };
}, uo = () => {
  me && me.scope.off(), Cn(null);
};
function Vi(e) {
  return e.vnode.shapeFlag & 4;
}
let nn = !1;
function Dl(e, t = !1, n = !1) {
  t && ms(t);
  const { props: s, children: o } = e.vnode, i = Vi(e);
  yl(e, s, i, t), Tl(e, o, n || t);
  const r = i ? Vl(e, t) : void 0;
  return t && ms(!1), r;
}
function Vl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, il);
  const { setup: s } = n;
  if (s) {
    it();
    const o = e.setupContext = s.length > 1 ? jl(e) : null, i = ln(e), r = rn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = No(r);
    if (rt(), i(), (l || e.sp) && !qt(e) && vi(e), l) {
      if (r.then(uo, uo), t)
        return r.then((a) => {
          ho(e, a);
        }).catch((a) => {
          Mn(a, e, 0);
        });
      e.asyncDep = r;
    } else
      ho(e, r);
  } else
    zi(e);
}
function ho(e, t, n) {
  D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Y(t) && (e.setupState = si(t)), zi(e);
}
function zi(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || $e);
  {
    const o = ln(e);
    it();
    try {
      rl(e);
    } finally {
      rt(), o();
    }
  }
}
const zl = {
  get(e, t) {
    return ge(e, "get", ""), e[t];
  }
};
function jl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, zl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function jn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(si(Er(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Gt)
        return Gt[n](e);
    },
    has(t, n) {
      return n in t || n in Gt;
    }
  })) : e.proxy;
}
function Bl(e, t = !0) {
  return D(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ul(e) {
  return D(e) && "__vccOpts" in e;
}
const ue = (e, t) => /* @__PURE__ */ Hr(e, t, nn);
function Wl(e, t, n) {
  try {
    wn(-1);
    const s = arguments.length;
    return s === 2 ? Y(t) && !O(t) ? Tn(t) ? Z(e, null, [t]) : Z(e, t) : Z(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Tn(n) && (n = [n]), Z(e, t, n));
  } finally {
    wn(1);
  }
}
const Kl = "3.5.31";
let _s;
const po = typeof window < "u" && window.trustedTypes;
if (po)
  try {
    _s = /* @__PURE__ */ po.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ji = _s ? (e) => _s.createHTML(e) : (e) => e, ql = "http://www.w3.org/2000/svg", Gl = "http://www.w3.org/1998/Math/MathML", tt = typeof document < "u" ? document : null, go = tt && /* @__PURE__ */ tt.createElement("template"), Yl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? tt.createElementNS(ql, e) : t === "mathml" ? tt.createElementNS(Gl, e) : n ? tt.createElement(e, { is: n }) : tt.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => tt.createTextNode(e),
  createComment: (e) => tt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => tt.querySelector(e),
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
      go.innerHTML = ji(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = go.content;
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
}, ut = "transition", Vt = "animation", sn = /* @__PURE__ */ Symbol("_vtc"), Bi = {
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
}, $l = /* @__PURE__ */ re(
  {},
  hi,
  Bi
), Zl = (e) => (e.displayName = "Transition", e.props = $l, e), Jl = /* @__PURE__ */ Zl(
  (e, { slots: t }) => Wl(Wr, Xl(e), t)
), vt = (e, t = []) => {
  O(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, mo = (e) => e ? O(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Xl(e) {
  const t = {};
  for (const C in e)
    C in Bi || (t[C] = e[C]);
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
    leaveFromClass: p = `${n}-leave-from`,
    leaveActiveClass: y = `${n}-leave-active`,
    leaveToClass: S = `${n}-leave-to`
  } = e, k = Ql(o), A = k && k[0], M = k && k[1], {
    onBeforeEnter: z,
    onEnter: E,
    onEnterCancelled: H,
    onLeave: v,
    onLeaveCancelled: F,
    onBeforeAppear: q = z,
    onAppear: ee = E,
    onAppearCancelled: ce = H
  } = t, V = (C, j, oe, Fe) => {
    C._enterCancelled = Fe, bt(C, j ? f : l), bt(C, j ? u : r), oe && oe();
  }, B = (C, j) => {
    C._isLeaving = !1, bt(C, p), bt(C, S), bt(C, y), j && j();
  }, I = (C) => (j, oe) => {
    const Fe = C ? ee : E, ie = () => V(j, C, oe);
    vt(Fe, [j, ie]), _o(() => {
      bt(j, C ? a : i), Qe(j, C ? f : l), mo(Fe) || vo(j, s, A, ie);
    });
  };
  return re(t, {
    onBeforeEnter(C) {
      vt(z, [C]), Qe(C, i), Qe(C, r);
    },
    onBeforeAppear(C) {
      vt(q, [C]), Qe(C, a), Qe(C, u);
    },
    onEnter: I(!1),
    onAppear: I(!0),
    onLeave(C, j) {
      C._isLeaving = !0;
      const oe = () => B(C, j);
      Qe(C, p), C._enterCancelled ? (Qe(C, y), xo(C)) : (xo(C), Qe(C, y)), _o(() => {
        C._isLeaving && (bt(C, p), Qe(C, S), mo(v) || vo(C, s, M, oe));
      }), vt(v, [C, oe]);
    },
    onEnterCancelled(C) {
      V(C, !1, void 0, !0), vt(H, [C]);
    },
    onAppearCancelled(C) {
      V(C, !0, void 0, !0), vt(ce, [C]);
    },
    onLeaveCancelled(C) {
      B(C), vt(F, [C]);
    }
  });
}
function Ql(e) {
  if (e == null)
    return null;
  if (Y(e))
    return [es(e.enter), es(e.leave)];
  {
    const t = es(e);
    return [t, t];
  }
}
function es(e) {
  return is(e);
}
function Qe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[sn] || (e[sn] = /* @__PURE__ */ new Set())).add(t);
}
function bt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[sn];
  n && (n.delete(t), n.size || (e[sn] = void 0));
}
function _o(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let ea = 0;
function vo(e, t, n, s) {
  const o = e._endId = ++ea, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: r, timeout: l, propCount: a } = ta(e, t);
  if (!r)
    return s();
  const u = r + "end";
  let f = 0;
  const p = () => {
    e.removeEventListener(u, y), i();
  }, y = (S) => {
    S.target === e && ++f >= a && p();
  };
  setTimeout(() => {
    f < a && p();
  }, l + 1), e.addEventListener(u, y);
}
function ta(e, t) {
  const n = window.getComputedStyle(e), s = (k) => (n[k] || "").split(", "), o = s(`${ut}Delay`), i = s(`${ut}Duration`), r = bo(o, i), l = s(`${Vt}Delay`), a = s(`${Vt}Duration`), u = bo(l, a);
  let f = null, p = 0, y = 0;
  t === ut ? r > 0 && (f = ut, p = r, y = i.length) : t === Vt ? u > 0 && (f = Vt, p = u, y = a.length) : (p = Math.max(r, u), f = p > 0 ? r > u ? ut : Vt : null, y = f ? f === ut ? i.length : a.length : 0);
  const S = f === ut && /\b(?:transform|all)(?:,|$)/.test(
    s(`${ut}Property`).toString()
  );
  return {
    type: f,
    timeout: p,
    propCount: y,
    hasTransform: S
  };
}
function bo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => yo(n) + yo(e[s])));
}
function yo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function xo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function na(e, t, n) {
  const s = e[sn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const An = /* @__PURE__ */ Symbol("_vod"), Ui = /* @__PURE__ */ Symbol("_vsh"), En = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[An] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : zt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), zt(e, !0), s.enter(e)) : s.leave(e, () => {
      zt(e, !1);
    }) : zt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    zt(e, t);
  }
};
function zt(e, t) {
  e.style.display = t ? e[An] : "none", e[Ui] = !t;
}
const sa = /* @__PURE__ */ Symbol(""), oa = /(?:^|;)\s*display\s*:/;
function ia(e, t, n) {
  const s = e.style, o = ae(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (ae(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && mn(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && mn(s, r, "");
    for (const r in n)
      r === "display" && (i = !0), mn(s, r, n[r]);
  } else if (o) {
    if (t !== n) {
      const r = s[sa];
      r && (n += ";" + r), s.cssText = n, i = oa.test(n);
    }
  } else t && e.removeAttribute("style");
  An in e && (e[An] = i ? s.display : "", e[Ui] && (s.display = "none"));
}
const So = /\s*!important$/;
function mn(e, t, n) {
  if (O(n))
    n.forEach((s) => mn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = ra(e, t);
    So.test(n) ? e.setProperty(
      Oe(s),
      n.replace(So, ""),
      "important"
    ) : e[s] = n;
  }
}
const wo = ["Webkit", "Moz", "ms"], ts = {};
function ra(e, t) {
  const n = ts[t];
  if (n)
    return n;
  let s = de(t);
  if (s !== "filter" && s in e)
    return ts[t] = s;
  s = Hn(s);
  for (let o = 0; o < wo.length; o++) {
    const i = wo[o] + s;
    if (i in e)
      return ts[t] = i;
  }
  return t;
}
const To = "http://www.w3.org/1999/xlink";
function Co(e, t, n, s, o, i = or(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(To, t.slice(6, t.length)) : e.setAttributeNS(To, t, n) : n == null || i && !zo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ze(n) ? String(n) : n
  );
}
function Ao(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ji(n) : n);
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
    l === "boolean" ? n = zo(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(o || t);
}
function la(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function aa(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Eo = /* @__PURE__ */ Symbol("_vei");
function ca(e, t, n, s, o = null) {
  const i = e[Eo] || (e[Eo] = {}), r = i[t];
  if (s && r)
    r.value = s;
  else {
    const [l, a] = fa(t);
    if (s) {
      const u = i[t] = ha(
        s,
        o
      );
      la(e, l, u, a);
    } else r && (aa(e, l, r, a), i[t] = void 0);
  }
}
const ko = /(?:Once|Passive|Capture)$/;
function fa(e) {
  let t;
  if (ko.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ko); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Oe(e.slice(2)), t];
}
let ns = 0;
const ua = /* @__PURE__ */ Promise.resolve(), da = () => ns || (ua.then(() => ns = 0), ns = Date.now());
function ha(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    De(
      pa(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = da(), n;
}
function pa(e, t) {
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
const Po = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ga = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? na(e, s, r) : t === "style" ? ia(e, n, s) : kn(t) ? Pn(t) || ca(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ma(e, t, s, r)) ? (Ao(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Co(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (_a(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ae(s))) ? Ao(e, de(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Co(e, t, s, r));
};
function ma(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Po(t) && D(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Po(t) && ae(n) ? !1 : t in e;
}
function _a(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = de(t);
  return Array.isArray(n) ? n.some((o) => de(o) === s) : Object.keys(n).some((o) => de(o) === s);
}
const Fo = {};
// @__NO_SIDE_EFFECTS__
function va(e, t, n) {
  let s = /* @__PURE__ */ Kr(e, t);
  Fn(s) && (s = re({}, s, t));
  class o extends js {
    constructor(r) {
      super(s, r, n);
    }
  }
  return o.def = s, o;
}
const ba = typeof HTMLElement < "u" ? HTMLElement : class {
};
class js extends ba {
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
      if (t instanceof js) {
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
        for (const a in i) {
          const u = i[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = is(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[de(a)] = !0);
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
    let s = n ? this.getAttribute(t) : Fo;
    const o = de(t);
    n && this._numberProps && this._numberProps[o] && (s = is(s)), this._setProp(o, s, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === Fo ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const i = this._ob;
      i && (this._processMutations(i.takeRecords()), i.disconnect()), n === !0 ? this.setAttribute(Oe(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Oe(t), n + "") : n || this.removeAttribute(Oe(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), xa(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Z(this._def, re(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const o = (i, r) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            Fn(r[0]) ? re({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      s.emit = (i, ...r) => {
        o(i, r), Oe(i) !== i && o(Oe(i), r);
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
            let p;
            for (; p = f.nextNode(); )
              p.setAttribute(u, "");
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
const ya = /* @__PURE__ */ re({ patchProp: ga }, Yl);
let Ro;
function Wi() {
  return Ro || (Ro = Al(ya));
}
const xa = ((...e) => {
  Wi().render(...e);
}), Ho = ((...e) => {
  const t = Wi().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = wa(s);
    if (!o) return;
    const i = t._component;
    !D(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, Sa(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
});
function Sa(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wa(e) {
  return ae(e) ? document.querySelector(e) : e;
}
const Ki = /* @__PURE__ */ Symbol("voiceState");
function Ta() {
  const e = /* @__PURE__ */ On({
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
function Ca(e) {
  Os(Ki, e);
}
function Bs() {
  const e = Ft(Ki);
  if (!e)
    throw new Error("[HandsfreeCooking] useVoiceState() called without a provider. Ensure provideVoiceState() is called in a parent component.");
  return e;
}
function Aa(e, t, n, s) {
  let o = null, i = null, r = [], l = -1;
  const a = () => window.innerWidth < 768 ? 75 : 60, { setStage: u, toggleListening: f, togglePopupState: p } = n, y = () => Js(t), S = () => {
    const E = y();
    E.instructions && (o = document.querySelector(E.instructions)), E.ingredients && (i = document.querySelector(E.ingredients)), E.steps && (r = Array.from(document.querySelectorAll(E.steps)));
  }, k = new MutationObserver(() => {
    S();
  });
  k.observe(document.body, { childList: !0, subtree: !0 }), /* @__PURE__ */ pe(t) && Rt(t, () => {
    o = null, i = null, r = [], S();
  });
  const A = (E) => {
    const H = a(), v = E.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: v - H,
      behavior: "smooth"
    });
  }, M = () => {
    r.length > 0 && r[l] && A(r[l]), r.length === l + 1 ? (u("listening", "almost-done"), p(!0)) : (u("listening"), p(!1));
  };
  return { commands: ue(() => {
    const E = Js(e);
    if (!E) return {};
    const H = {}, v = (F, q) => {
      F && F.forEach((ee) => {
        H[ee] = q;
      });
    };
    return v(E.help, () => {
      u("listening", "help"), p(!0), s("handsfree-command", { command: "help" });
    }), v(E.scrollUp, () => {
      window.scrollBy({ top: -300, behavior: "smooth" }), s("handsfree-command", { command: "scroll up" });
    }), v(E.scrollDown, () => {
      window.scrollBy({ top: 300, behavior: "smooth" }), s("handsfree-command", { command: "scroll down" });
    }), v(E.exit, () => {
      u("listening"), s("handsfree-command", { command: "exit" });
    }), v(E.goToInstructions, () => {
      o || S(), o && (A(o), s("handsfree-command", { command: "go to instructions" })), u("listening"), p(!1);
    }), v(E.goToIngredients, () => {
      i || S(), i && (A(i), s("handsfree-command", { command: "go to ingredients" })), u("listening"), p(!1);
    }), v(E.nextStep, () => {
      r.length === 0 && S(), l < r.length - 1 && (l += 1, M(), s("handsfree-command", { command: "next step" }));
    }), v(E.previousStep, () => {
      r.length === 0 && S(), l > 0 && (l -= 1, M(), s("handsfree-command", { command: "previous step" }));
    }), v(E.letsCook, () => {
      f(!0), u("listening"), p(!1), s("handsfree-command", { command: "let's cook" });
    }), v(E.imDone, () => {
      s("handsfree-command", { command: "i'm done" });
    }), H;
  }), destroy: () => k.disconnect() };
}
function Ea(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ss, Lo;
function ka() {
  if (Lo) return ss;
  Lo = 1, ss = e;
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
  }, e.mixin(e), ss;
}
var os, Oo;
function Pa() {
  if (Oo) return os;
  Oo = 1;
  var e = ka();
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
  return os = function(o, l) {
    var r = new e();
    if (!n) return r;
    var l = l || {}, a = l.smoothing || 0.1, u = l.interval || 50, f = l.threshold, p = l.play, y = l.history || 10, S = !0;
    s = l.audioContext || s || new n();
    var k, A, M;
    M = s.createAnalyser(), M.fftSize = 512, M.smoothingTimeConstant = a, A = new Float32Array(M.frequencyBinCount), o.jquery && (o = o[0]), o instanceof HTMLAudioElement || o instanceof HTMLVideoElement ? (k = s.createMediaElementSource(o), typeof p > "u" && (p = !0), f = f || -50) : (k = s.createMediaStreamSource(o), f = f || -50), k.connect(M), p && M.connect(s.destination), r.speaking = !1, r.suspend = function() {
      return s.suspend();
    }, r.resume = function() {
      return s.resume();
    }, Object.defineProperty(r, "state", { get: function() {
      return s.state;
    } }), s.onstatechange = function() {
      r.emit("state_change", s.state);
    }, r.setThreshold = function(H) {
      f = H;
    }, r.setInterval = function(H) {
      u = H;
    }, r.stop = function() {
      S = !1, r.emit("volume_change", -100, f), r.speaking && (r.speaking = !1, r.emit("stopped_speaking")), M.disconnect(), k.disconnect();
    }, r.speakingHistory = [];
    for (var z = 0; z < y; z++)
      r.speakingHistory.push(0);
    var E = function() {
      setTimeout(function() {
        if (S) {
          var H = t(M, A);
          r.emit("volume_change", H, f);
          var v = 0;
          if (H > f && !r.speaking) {
            for (var F = r.speakingHistory.length - 3; F < r.speakingHistory.length; F++)
              v += r.speakingHistory[F];
            v >= 2 && (r.speaking = !0, r.emit("speaking"));
          } else if (H < f && r.speaking) {
            for (var F = 0; F < r.speakingHistory.length; F++)
              v += r.speakingHistory[F];
            v == 0 && (r.speaking = !1, r.emit("stopped_speaking"));
          }
          r.speakingHistory.shift(), r.speakingHistory.push(0 + (H > f)), E();
        }
      }, u);
    };
    return E(), r;
  }, os;
}
var Fa = Pa();
const Ra = /* @__PURE__ */ Ea(Fa);
class qi {
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
    this.audioStreamSpeechEvents = Ra(t, {
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
function Le() {
  return /Android/i.test(navigator.userAgent);
}
const Ha = 120 * 1e3, La = 3 * 1e3, Oa = {
  lang: "en-US",
  interimResults: !0,
  maxAlternatives: 10
}, Ma = {
  error: null,
  status: "stopped",
  transcriptions: [],
  finalTranscriptions: !1
}, Ia = 5;
function Na() {
  let e, t, n, s, o = !1, i = !1, r, l, a = 0;
  function u(I = {}) {
    r({ ...Ma, ...I });
  }
  function f() {
    clearTimeout(n), clearTimeout(s);
  }
  function p() {
    f(), t.abort(), u(), Le() || l(0);
  }
  function y() {
    f(), t && t.stop(), u(), Le() || l(0);
  }
  function S() {
    u({ status: "starting" }), Le() || l(0);
    try {
      t.start(), a = 0;
    } catch (I) {
      console.error(I);
    }
  }
  function k() {
    if (a >= Ia) {
      console.warn("[HandsfreeCooking] Max restart retries reached");
      return;
    }
    a += 1, setTimeout(S, 100);
  }
  function A() {
    e && e.stop(), Le() || l(0);
  }
  function M() {
    f(), u(), Le() || l(0), i || k();
  }
  function z() {
    u({ status: "recording" }), Le() || l(0);
  }
  function E(I, C) {
    clearTimeout(n), C || (n = setTimeout(() => {
      u({
        finalTranscriptions: !0,
        status: "recording",
        transcriptions: I
      }), p();
    }, La));
  }
  function H(I) {
    if (!I || !I.results) return;
    const C = I.results[I.resultIndex], j = Object.values(C).map((oe) => ({
      confidence: oe.confidence,
      text: oe.transcript
    }));
    u({
      finalTranscriptions: C.isFinal,
      status: "recording",
      transcriptions: j
    }), E(j, C.isFinal);
  }
  function v(I) {
    u({ error: I.error, status: "error" }), Le() || l(0);
  }
  function F() {
    o || p();
  }
  function q() {
    e = new qi({
      onSpeaking: () => {
        o = !0;
      },
      onStopSpeaking: () => {
        o = !1, clearTimeout(s), s = setTimeout(F, Ha);
      },
      onVolumeChange: (I) => {
        Le() || l(I);
      }
    }), Le() || l(0), e.start();
  }
  function ee({ lang: I, interimResults: C, maxAlternatives: j }) {
    const oe = window.SpeechRecognition || window.webkitSpeechRecognition;
    t = new oe(), t.continuous = !0, t.lang = I, t.interimResults = C, t.maxAlternatives = j, t.onstart = z, t.onresult = H, t.onerror = v, t.onend = M;
  }
  function ce(I) {
    const C = { ...Oa, ...I };
    r = I.onUserSpeech, Le() || (l = I.onUserSpeak), ee(C);
  }
  function V() {
    i = !1, a = 0, !Le() && l && q(), r && S();
  }
  function B() {
    i = !0, f(), !Le() && l && A(), r && y();
  }
  return { init: ce, start: V, stop: B };
}
function et() {
  return /Android/i.test(navigator.userAgent);
}
const Da = {
  lang: "en-US",
  interimResults: !0,
  maxAlternatives: 10
}, Va = {
  error: null,
  status: "stopped",
  transcriptions: [],
  finalTranscriptions: !1
};
function za() {
  let e, t, n = !1, s, o, i;
  function r(v = {}) {
    s({ ...Va, ...v });
  }
  function l() {
    r({ status: "recording" });
  }
  function a() {
    et() || o(0), e && e.stop();
  }
  function u() {
    e = new qi({
      onVolumeChange: (v) => {
        et() || o(v);
      }
    }), e.start(), et() || o(0);
  }
  function f(v, F) {
    clearTimeout(i), F || (i = setTimeout(() => {
      r({
        finalTranscriptions: !0,
        transcriptions: v
      });
    }, 2e3));
  }
  function p() {
    !et() && o && a(), n = !1, clearTimeout(i), r();
  }
  function y(v) {
    if (!v || !v.results) return;
    const F = v.results[v.resultIndex], q = Object.values(F).map((ee) => ({
      confidence: ee.confidence,
      text: ee.transcript
    }));
    r({
      finalTranscriptions: F.isFinal,
      status: "recording",
      transcriptions: q
    }), f(q, F.isFinal);
  }
  function S() {
    n = !1, clearTimeout(i), !et() && o && a(), r();
  }
  function k(v) {
    r({ error: v.error, status: "error" }), !et() && o && a();
  }
  function A() {
    if (!n) {
      r({ status: "starting" });
      try {
        t.start(), n = !0;
      } catch (v) {
        console.error(v);
      }
    }
  }
  function M({ lang: v, interimResults: F, maxAlternatives: q }) {
    const ee = window.SpeechRecognition || window.webkitSpeechRecognition;
    t = new ee(), t.continuous = !1, t.lang = v, t.interimResults = F, t.maxAlternatives = q, t.onstart = l, t.onresult = y, t.onerror = k, t.onend = S;
  }
  function z(v) {
    const F = { ...Da, ...v };
    M(F), s = v.onUserSpeech, et() || (o = v.onUserSpeak);
  }
  function E() {
    !et() && o && u(), s && A();
  }
  function H() {
    !et() && o && a(), s && p();
  }
  return { init: z, start: E, stop: H };
}
const ja = navigator.language || "en-US";
function Ba({
  continuesRecognition: e = !0,
  lang: t = ja,
  onUserSpeech: n,
  onUserSpeak: s
}) {
  const o = e ? Na() : za();
  return o.init({ lang: t, onUserSpeech: n, onUserSpeak: s }), {
    start: o.start,
    stop: o.stop
  };
}
const Ua = {
  init: Ba
}, Wa = {
  mic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><path d="M14.9815 9.25V11.125C14.9815 13.5437 13.0252 15.5 10.6065 15.5C8.18771 15.5 6.23146 13.5437 6.23146 11.125V9.25H4.98146V11.125C4.97521 13.9938 7.13146 16.4 9.98146 16.7125V18H7.48146V19.25H13.7315V18H11.2315V16.7125C14.0752 16.3938 16.2252 13.9875 16.2315 11.125V9.25H14.9815Z"/><path d="M10.6064 14.25C12.3314 14.25 13.7314 12.85 13.7314 11.125V4.875C13.7314 3.15 12.3314 1.75 10.6064 1.75C8.88145 1.75 7.48145 3.15 7.48145 4.875V11.125C7.48145 12.85 8.88145 14.25 10.6064 14.25ZM8.73145 4.875C8.73145 3.8375 9.56895 3 10.6064 3C11.6439 3 12.4814 3.8375 12.4814 4.875V11.125C12.4814 12.1625 11.6439 13 10.6064 13C9.56895 13 8.73145 12.1625 8.73145 11.125V4.875Z"/></svg>',
  help: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/><circle cx="16" cy="23.5" r="1.5"/><path d="M17,8H15.5A4.49,4.49,0,0,0,11,12.5V13h2v-.5A2.5,2.5,0,0,1,15.5,10H17a2.5,2.5,0,0,1,0,5H15v4.5h2V17a4.5,4.5,0,0,0,0-9Z"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"/></svg>',
  "chevron--left": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10 16L20 6 21.4 7.4 12.8 16 21.4 24.6 20 26z"/></svg>',
  "chevron--right": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"/></svg>',
  "chevron--down": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"/></svg>',
  "thumbs-up": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z"/></svg>',
  "thumbs-down": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30,16V9a7.0078,7.0078,0,0,0-7-7H2V16H8.4648l3.5774,5.3662.8453,5.9165A2.0094,2.0094,0,0,0,14.8672,29H17a3.0033,3.0033,0,0,0,3-3V20h6A4.0045,4.0045,0,0,0,30,16ZM8,14H4V4H8Zm20,2a2.0025,2.0025,0,0,1-2,2H18v8a1.0008,1.0008,0,0,1-1,1H14.8672l-.9094-6.3662L10,14.6973V4H23a5.0057,5.0057,0,0,1,5,5Z"/></svg>',
  "checkmark--outline": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><polygon points="14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414"/><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/></svg>'
}, Ot = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Ka = {
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
    const t = ue(() => Wa[e.icon] || ""), n = ue(() => e.size ? `hf-icon-${e.size}` : "");
    return {
      svgContent: t,
      cssClass: n
    };
  }
}, qa = ["innerHTML"];
function Ga(e, t, n, s, o, i) {
  return X(), _e("span", {
    class: Lt(["hf-icon", s.cssClass]),
    innerHTML: s.svgContent
  }, null, 10, qa);
}
const Bn = /* @__PURE__ */ Ot(Ka, [["render", Ga]]), Ya = {
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
}, $a = ["aria-label"], Za = { class: "hf-headline__title" }, Ja = { class: "hf-headline__opener" }, Xa = {
  key: 0,
  class: "hf-spinner"
};
function Qa(e, t, n, s, o, i) {
  const r = Ye("HfIcon");
  return X(), _e("button", {
    class: "hf-headline",
    "aria-label": n.title + " - " + (n.isCloseState ? "Close" : "Toggle"),
    onClick: t[0] || (t[0] = (...l) => s.togglePopup && s.togglePopup(...l))
  }, [
    Z(r, {
      icon: "mic",
      size: 24
    }),
    G("span", Za, Ce(n.title), 1),
    G("span", Ja, [
      n.isLoading ? (X(), _e("span", Xa, [...t[1] || (t[1] = [
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
      ])])) : (X(), Me(r, {
        key: 1,
        icon: s.icon,
        size: 24
      }, null, 8, ["icon"]))
    ])
  ], 8, $a);
}
const Us = /* @__PURE__ */ Ot(Ya, [["render", Qa]]), ec = {
  components: {
    PopupHeadline: Us
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
    const n = Bs();
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
}, tc = { class: "hf-content-area" }, nc = ["innerHTML"];
function sc(e, t, n, s, o, i) {
  const r = Ye("PopupHeadline");
  return X(), _e(Ee, null, [
    Z(r, {
      class: Lt(n.additionalClassname),
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": n.isCloseState,
      onTogglePopup: s.togglePopup
    }, null, 8, ["class", "title", "is-loading", "is-close-state", "onTogglePopup"]),
    yn(G("div", tc, [
      G("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, nc),
      n.translations.buttonText ? (X(), _e("button", {
        key: 0,
        class: "hf-button",
        onClick: t[0] || (t[0] = (...l) => s.buttonAction && s.buttonAction(...l))
      }, Ce(n.translations.buttonText), 1)) : fe("", !0)
    ], 512), [
      [En, n.translations.content && n.translations.content !== "" && s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const oc = /* @__PURE__ */ Ot(ec, [["render", sc]]), ic = {
  components: {
    PopupHeadline: Us,
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
    const n = Bs(), s = /* @__PURE__ */ Te(0), o = ue(() => e.isCloseState && !n.state.isListening);
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
}, rc = { class: "hf-content-area" }, lc = ["innerHTML"], ac = {
  key: 1,
  class: "hf-introduction-steps"
}, cc = ["innerHTML"], fc = { class: "hf-introduction-buttons" }, uc = ["disabled"];
function dc(e, t, n, s, o, i) {
  const r = Ye("PopupHeadline"), l = Ye("HfIcon");
  return X(), _e(Ee, null, [
    Z(r, {
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": s.isClose,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "is-loading", "is-close-state", "onTogglePopup"]),
    yn(G("div", rc, [
      s.voiceState.state.isListening ? fe("", !0) : (X(), _e("div", {
        key: 0,
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, lc)),
      s.voiceState.state.isListening ? (X(), _e("div", ac, [
        G("div", {
          class: "hf-step",
          innerHTML: n.translations.steps[s.currentStep]
        }, null, 8, cc),
        G("div", fc, [
          G("button", {
            class: "hf-button",
            "aria-label": "Previous step",
            disabled: s.currentStep < 1,
            onClick: t[0] || (t[0] = (...a) => s.goToPrevStep && s.goToPrevStep(...a))
          }, [
            Z(l, {
              icon: "chevron--left",
              size: 24
            })
          ], 8, uc),
          G("button", {
            class: "hf-button",
            "aria-label": "Next step",
            onClick: t[1] || (t[1] = (...a) => s.goToNextStep && s.goToNextStep(...a))
          }, [
            Z(l, {
              icon: "chevron--right",
              size: 24
            })
          ])
        ])
      ])) : fe("", !0),
      s.voiceState.state.isListening ? fe("", !0) : (X(), _e("button", {
        key: 2,
        class: "hf-button",
        onClick: t[2] || (t[2] = (...a) => s.beginListening && s.beginListening(...a))
      }, Ce(n.translations.buttonText), 1))
    ], 512), [
      [En, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const hc = /* @__PURE__ */ Ot(ic, [["render", dc]]);
function pc(e, t) {
  let n = null;
  return (...s) => {
    clearTimeout(n), n = setTimeout(() => e(...s), t);
  };
}
const gc = {
  components: {
    HfIcon: Bn,
    PopupHeadline: Us
  },
  props: {
    translations: {
      type: Object,
      required: !0
    }
  },
  emits: ["closeHandsFreeFlow", "togglePopup"],
  setup(e, { emit: t }) {
    const n = Bs(), s = Ft("emitEvent"), o = /* @__PURE__ */ Te(null), i = /* @__PURE__ */ Te(null), r = /* @__PURE__ */ Te(null), l = () => {
      t("closeHandsFreeFlow"), s("handsfree-feedback", { vote: "close", text: e.translations.buttonText });
    }, a = () => {
      t("togglePopup");
    }, u = /* @__PURE__ */ Te(!1), f = () => {
      u.value = !0, s("handsfree-feedback", { vote: "up", text: e.translations.voteUp });
    }, p = () => {
      u.value = !0, s("handsfree-feedback", { vote: "down", text: e.translations.voteDown });
    }, y = () => {
      Hs(() => {
        const k = o.value, A = i.value, M = r.value;
        if (!k || !A || !M)
          return;
        const z = A.offsetWidth + M.offsetWidth, E = k.offsetWidth;
        z > E ? k.classList.add("hf-vote--stack") : k.classList.remove("hf-vote--stack");
      });
    }, S = pc(y, 200);
    return Dn(() => {
      y(), window.addEventListener("resize", S);
    }), Ms(() => {
      window.removeEventListener("resize", S);
    }), {
      closeHandsFreeFlow: l,
      votedUp: f,
      votedDown: p,
      togglePopup: a,
      voted: u,
      voiceState: n,
      handsFreeVotes: o,
      voteUp: i,
      voteDown: r
    };
  }
}, mc = { class: "hf-content-area" }, _c = ["innerHTML"], vc = {
  ref: "handsFreeVotes",
  class: "hf-vote"
}, bc = { class: "hf-success-message" };
function yc(e, t, n, s, o, i) {
  const r = Ye("PopupHeadline"), l = Ye("HfIcon");
  return X(), _e(Ee, null, [
    Z(r, {
      title: n.translations.title,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "onTogglePopup"]),
    yn(G("div", mc, [
      G("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, _c),
      G("div", vc, [
        s.voted ? fe("", !0) : (X(), _e("button", {
          key: 0,
          ref: "voteUp",
          class: "hf-button",
          onClick: t[0] || (t[0] = (...a) => s.votedUp && s.votedUp(...a))
        }, [
          Z(l, {
            icon: "thumbs-up",
            size: 16
          }),
          G("span", null, Ce(n.translations.voteUp), 1)
        ], 512)),
        s.voted ? fe("", !0) : (X(), _e("button", {
          key: 1,
          ref: "voteDown",
          class: "hf-button",
          onClick: t[1] || (t[1] = (...a) => s.votedDown && s.votedDown(...a))
        }, [
          Z(l, {
            icon: "thumbs-down",
            size: 16
          }),
          G("span", null, Ce(n.translations.voteDown), 1)
        ], 512)),
        yn(G("div", bc, [
          Z(l, {
            icon: "checkmark--outline",
            size: 16
          }),
          $t(" " + Ce(n.translations.successMessage), 1)
        ], 512), [
          [En, s.voted]
        ])
      ], 512),
      G("button", {
        class: "hf-button hf-button--solid",
        onClick: t[2] || (t[2] = (...a) => s.closeHandsFreeFlow && s.closeHandsFreeFlow(...a))
      }, Ce(n.translations.buttonText), 1)
    ], 512), [
      [En, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const xc = /* @__PURE__ */ Ot(gc, [["render", yc]]), Sc = ':host{--hf-color-bg: #ffffff;--hf-color-text: #000000;--hf-color-primary: #000000;--hf-color-primary-hover: #000000;--hf-color-error: #cc0033;--hf-color-border: #d9d9d9;--hf-spacing-xxs: 4px;--hf-spacing-xs: 8px;--hf-spacing-s: 16px;--hf-spacing-sm: 24px;--hf-spacing-m: 32px;--hf-font-family: inherit;--hf-font-size-base: 16px;--hf-font-size-small: 14px;--hf-font-size-large: 18px;--hf-popup-width: 410px;--hf-popup-shadow: 0 12px 24px 0 rgba(0, 0, 0, .2);--hf-z-index: 10000;display:block;font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);color:var(--hf-color-text);line-height:1.5}*,*:before,*:after{box-sizing:border-box}.hf-root{margin-bottom:var(--hf-spacing-m)}.hf-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.hf-intro-row{display:flex;align-items:center;margin-bottom:var(--hf-spacing-s)}.hf-intro-label{margin-right:var(--hf-spacing-xs);font-weight:600;text-transform:uppercase;font-size:var(--hf-font-size-base)}.hf-button{position:relative;display:inline-flex;align-items:center;padding:var(--hf-spacing-s) var(--hf-spacing-sm);border:1px solid var(--hf-color-primary);border-radius:0;background-color:transparent;color:var(--hf-color-primary);font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);font-weight:400;line-height:1;vertical-align:middle;text-decoration:none;cursor:pointer;transition:background-color .2s ease-out,color .2s ease-out}.hf-button .hf-icon{margin-inline-end:var(--hf-spacing-xs)}.hf-button:hover{background-color:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button:hover .hf-icon svg{fill:var(--hf-color-bg)}.hf-button:disabled{opacity:.4;cursor:default}.hf-button--solid{background-color:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button--solid:hover{background-color:var(--hf-color-bg);color:var(--hf-color-primary)}.hf-button--handsfree{padding:var(--hf-spacing-s) var(--hf-spacing-sm)}.hf-button--handsfree .hf-icon{margin-inline-end:var(--hf-spacing-xxs)}.hf-icon{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;line-height:0}.hf-icon svg{fill:currentColor;width:1em;height:1em}.hf-icon-16 svg{width:16px;height:16px}.hf-icon-24 svg{width:24px;height:24px}.hf-tooltip-wrapper{cursor:pointer;position:relative;display:inline-flex;align-items:baseline}.hf-tooltip-content{position:absolute;bottom:30px;left:8px;transform:translate(-50%);width:350px;padding:var(--hf-spacing-s);background:var(--hf-color-bg);box-shadow:var(--hf-popup-shadow);cursor:default;z-index:calc(var(--hf-z-index) + 1)}.hf-tooltip-content:after{content:"";position:absolute;bottom:-10px;left:50%;transform:translate(-50%);width:0;height:0;border-style:solid;border-width:10px 10px 0 10px;border-color:var(--hf-color-bg) transparent transparent transparent}.hf-tooltip-title{display:flex;justify-content:space-between;text-transform:uppercase;font-weight:600;font-size:var(--hf-font-size-large);margin-bottom:var(--hf-spacing-xs)}.hf-tooltip-title span{cursor:pointer}.hf-tooltip-text{display:block;font-size:var(--hf-font-size-small);line-height:1.5}.hf-fade-enter-active,.hf-fade-leave-active{transition:opacity .2s ease-in-out}.hf-fade-enter-from,.hf-fade-leave-to{opacity:0}.hf-popup{position:fixed;bottom:20px;right:20px;width:calc(100% - 40px);max-width:var(--hf-popup-width);background:var(--hf-color-bg);z-index:var(--hf-z-index);box-shadow:var(--hf-popup-shadow);padding:var(--hf-spacing-s);transition:bottom .3s ease,opacity .3s ease}.hf-popup--hidden{bottom:-100px;pointer-events:none;opacity:0}.hf-popup--opened{bottom:20px}.hf-headline{position:relative;border:0;display:flex;align-items:center;width:100%;background:none;padding:0;margin:0;cursor:pointer;font-family:var(--hf-font-family);color:var(--hf-color-text);font-size:var(--hf-font-size-base)}.hf-headline__title{text-transform:uppercase;font-weight:600;font-size:var(--hf-font-size-base);margin-left:var(--hf-spacing-xxs)}.hf-headline__opener{margin-left:auto;display:flex;align-items:center}.hf-headline__opener svg{transition:transform .2s}.hf-popup--opened .hf-headline__opener svg{transform:rotate(0)}.hf-popup:not(.hf-popup--opened) .hf-headline__opener svg{transform:rotate(180deg)}.hf-spinner{display:inline-block;width:22px;height:22px}.hf-spinner svg{width:100%;height:100%;overflow:visible;animation:hf-rotation 1455ms infinite linear}.hf-spinner circle{stroke:currentColor;stroke-dasharray:44px;stroke-dashoffset:11px;transform-origin:center;transform:rotateY(180deg) rotate(90deg);animation:hf-spinner 3.85s infinite ease}@keyframes hf-spinner{0%{stroke-dashoffset:33px;transform:rotateY(0) rotate(0)}24.9999%{stroke-dashoffset:11px;transform:rotateY(0) rotate(0)}25%{stroke-dashoffset:11px;transform:rotateY(180deg) rotate(270deg)}49.9999%{stroke-dashoffset:33px;transform:rotateY(180deg) rotate(270deg)}50%{stroke-dashoffset:33px;transform:rotateY(0) rotate(180deg)}74.9999%{stroke-dashoffset:11px;transform:rotateY(0) rotate(180deg)}75%{stroke-dashoffset:11px;transform:rotateY(180deg) rotate(90deg)}to{stroke-dashoffset:33px;transform:rotateY(180deg) rotate(90deg)}}@keyframes hf-rotation{to{transform:rotate(360deg)}}.hf-content-area{margin-top:var(--hf-spacing-s)}.hf-content p{margin:0 0 var(--hf-spacing-s);font-size:var(--hf-font-size-base)}.hf-content p:last-of-type{margin:0}.hf-content ul{margin:0;padding:var(--hf-spacing-xs) 0 var(--hf-spacing-xs) var(--hf-spacing-s);line-height:1}.hf-content ul li{margin:0 0 var(--hf-spacing-xs)}.hf-content a{color:var(--hf-color-text)}.hf-content-area>.hf-button{margin-top:var(--hf-spacing-s)}.hf-introduction-steps .hf-step{margin-bottom:var(--hf-spacing-xs)}.hf-introduction-steps .hf-step p{margin:0 0 var(--hf-spacing-xs)}.hf-introduction-buttons{display:flex;gap:0}.hf-introduction-buttons .hf-button{padding:var(--hf-spacing-s) calc(var(--hf-spacing-s) - var(--hf-spacing-xxs))}.hf-introduction-buttons .hf-button .hf-icon{margin-inline-end:0}.hf-introduction-buttons .hf-button:last-of-type{margin-left:-1px}.hf-popup.hf-not-recognized{border:1px solid var(--hf-color-error)}.hf-popup.hf-error-state{color:var(--hf-color-error)}.hf-hide-chevron .hf-headline__opener{pointer-events:none}.hf-hide-chevron .hf-headline__opener .hf-icon{display:none}.hf-vote{display:flex;gap:0;margin:var(--hf-spacing-s) 0}.hf-vote .hf-button{white-space:nowrap}.hf-vote .hf-button:last-of-type{margin-left:-1px}.hf-vote--stack{flex-direction:column}.hf-vote--stack .hf-button{justify-content:center}.hf-vote--stack .hf-button:last-of-type{margin-left:0;margin-top:-1px}.hf-success-message{display:flex;align-items:center;gap:var(--hf-spacing-xxs)}@media print{.hf-root,.hf-popup{display:none}}@media(max-width:767px){.hf-tooltip-content{left:30px;width:290px}.hf-tooltip-content:after{transform:translate(calc(-50% - 22px))}}', wc = {
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
}, Tc = {
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
};
function Gi(e, t) {
  const n = { ...e };
  for (const s of Object.keys(t))
    t[s] && typeof t[s] == "object" && !Array.isArray(t[s]) && e[s] && typeof e[s] == "object" && !Array.isArray(e[s]) ? n[s] = Gi(e[s], t[s]) : n[s] = t[s];
  return n;
}
const Cc = {
  components: {
    Finish: xc,
    Popup: oc,
    Introduction: hc,
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
    const t = Ta();
    Ca(t);
    const { state: n, setStage: s, toggleListening: o, togglePopupState: i } = t, r = zs(), l = (h, g = {}) => {
      const m = r?.proxy?.$el?.parentNode?.host || r?.proxy?.$el;
      m && m.dispatchEvent && m.dispatchEvent(new CustomEvent(h, {
        detail: g,
        bubbles: !0,
        composed: !0
      }));
    };
    Os("emitEvent", l);
    const a = ue(() => {
      let h = {};
      if (e.translations)
        try {
          h = JSON.parse(e.translations);
        } catch (g) {
          console.warn("[HandsfreeCooking] Invalid translations JSON:", g);
        }
      return Gi(wc, h);
    }), u = ue(() => {
      let h = {};
      if (e.commands)
        try {
          h = JSON.parse(e.commands);
        } catch (g) {
          console.warn("[HandsfreeCooking] Invalid commands JSON:", g);
        }
      return { ...Tc, ...h };
    }), f = ue(() => ({
      steps: e.stepsSelector,
      ingredients: e.ingredientsSelector,
      instructions: e.instructionsSelector
    })), p = /* @__PURE__ */ Te(
      e.lang || document.documentElement.lang || "en"
    ), { commands: y, destroy: S } = Aa(
      u,
      f,
      t,
      l
    ), k = /* @__PURE__ */ Te(null), A = /* @__PURE__ */ Te(!1), M = /* @__PURE__ */ Te(null), z = /* @__PURE__ */ Te(0), E = /* @__PURE__ */ Te(!1), H = /* @__PURE__ */ Te(!1), v = /* @__PURE__ */ Te(!1), F = /* @__PURE__ */ Te(null), q = ue(() => n.stage), ee = ue(() => n.subState), ce = ue(() => n.isPopupOpened), V = ue(
      () => n.stage === "introduction" || n.stage === "listening" && n.subState === "intro"
    ), B = ue(
      () => n.stage === "listening" && n.subState === "help"
    ), I = ue(
      () => n.stage === "listening" && n.subState === "not-recognized"
    ), C = ue(
      () => n.stage === "listening" && n.subState === "recognized-error"
    ), j = ue(
      () => n.stage === "listening" && n.subState === "almost-done"
    ), oe = ue(() => I.value ? a.value.notRecognized.title : C.value ? a.value.notRecognizedError.title : n.stage === "listening" && n.subState === null ? a.value.listening.title : "");
    let Fe = !1, ie = !1;
    function se() {
      !k.value || ie || (v.value && k.value.stop(), setTimeout(() => {
        if (!v.value)
          try {
            k.value.start();
          } catch {
            setTimeout(() => {
              try {
                v.value || k.value.start();
              } catch (g) {
                console.error("[HandsfreeCooking] Restart failed:", g);
              }
            }, 1e3);
          }
      }, 500));
    }
    const $ = () => {
      A.value = !A.value;
    };
    let xe = null;
    const ct = (h) => {
      M.value && !h.composedPath().includes(M.value) && (A.value = !1);
    };
    Rt(A, (h) => {
      xe && (cancelAnimationFrame(xe), xe = null), document.removeEventListener("click", ct, !0), h && (xe = requestAnimationFrame(() => {
        document.addEventListener("click", ct, !0);
      }));
    });
    const Je = (h) => {
      let g = null;
      const m = h.toLowerCase().replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, "").replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, "").replace(/\s+/g, " ").replace(/[.,!?;:。，！？；：．]+$/g, "").trim().normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "").normalize("NFC").trim(), _ = [];
      Object.keys(y.value).forEach((w) => {
        const x = w.toLowerCase().replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, "").replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, "").replace(/\s+/g, " ").trim().normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "").normalize("NFC").trim();
        m === x ? _.push({ alias: w, normalizedAlias: x, score: 3, type: "exact" }) : m.startsWith(x) ? _.push({ alias: w, normalizedAlias: x, score: 2, type: "starts-with" }) : m.endsWith(x) ? _.push({ alias: w, normalizedAlias: x, score: 2, type: "ends-with" }) : new RegExp(`(^|\\s)${x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`, "i").test(m) && _.push({ alias: w, normalizedAlias: x, score: 1, type: "word-boundary" });
      }), _.sort((w, x) => w.score !== x.score ? x.score - w.score : x.normalizedAlias.length - w.normalizedAlias.length), _.length > 0 && (g = _[0].alias), g ? (j.value || (s("listening"), i(!1)), j.value && u.value.imDone.includes(g) && (s("finish"), fn(), l("handsfree-finished", { reason: "completed recipe flow" })), z.value = 0, requestAnimationFrame(() => {
        y.value[g] && y.value[g]();
      })) : (z.value += 1, n.subState !== "help" && (s("listening", "not-recognized"), i(!1)), z.value > 3 && s("listening", "recognized-error"));
    }, Re = (h) => {
      u.value.letsCook.includes(h) && y.value[h] && setTimeout(() => {
        y.value[h] && y.value[h]();
      }, 100);
    }, an = window.SpeechRecognition || window.webkitSpeechRecognition, cn = () => {
      if (ie = !1, s("introduction"), l("handsfree-activated"), !an)
        l("handsfree-error", { error: "browser-not-supported" }), s("not-supported");
      else {
        let h = !1;
        k.value = Ua.init({
          lang: p.value,
          continuesRecognition: !0,
          onUserSpeech: (g) => {
            if (v.value = ["starting", "recording"].includes(g.status), ["stopped", "aborted", "error"].includes(g.status) && (v.value = !1), F.value = g.status, !h && g.status === "starting") {
              h = !0;
              return;
            }
            if (g.status === "error" && (g.error === "not-allowed" || g.error === "service-not-allowed")) {
              H.value = !0, s("not-allowed"), o(!1), k.value.stop(), l("handsfree-error", { error: "microphone-not-allowed" });
              return;
            }
            if (g.status === "recording" && (o(!0), Fe || (l("handsfree-state-change", { stage: "microphone-allowed", isListening: !0 }), Fe = !0), g.transcriptions.length && !g.finalTranscriptions && (E.value = !0), g.finalTranscriptions)) {
              E.value = !1;
              const m = g.transcriptions[0].text.toLowerCase().trim();
              V.value ? Re(m) : Je(m);
            }
          },
          onUserSpeak: () => {
          }
        });
      }
    }, fn = () => {
      k.value && k.value.stop(), ie = !0, o(!1), i(!0), v.value = !1;
    }, gt = () => {
      s("finish"), fn(), l("handsfree-finished", { reason: "stop-cooking-button" });
    }, wt = () => {
      i(!0), s("listening", "help");
    }, Mt = () => {
      if (H.value)
        s("not-allowed");
      else {
        if (!v.value)
          try {
            k.value.start();
          } catch (h) {
            console.warn("[HandsfreeCooking] Cannot start recognizer:", h);
          }
        s("listening", "intro"), l("handsfree-state-change", { stage: "listening", isListening: !0 });
      }
    };
    async function un() {
      try {
        (await navigator.mediaDevices.getUserMedia({ audio: !0 })).getTracks().forEach((g) => g.stop()), H.value = !1, cn();
      } catch {
        l("handsfree-error", { error: "microphone-blocked" });
      }
    }
    const ft = () => {
      i(!n.isPopupOpened), l("handsfree-state-change", {
        stage: n.stage,
        isListening: n.isListening,
        isPopupOpened: n.isPopupOpened
      });
    }, Un = () => {
      i(!1), s("listening");
    }, c = () => {
      !n.isListening && k.value ? (k.value.stop(), s(null)) : ft();
    }, d = (h) => {
      if (h.key === "Escape") {
        if (A.value) {
          A.value = !1;
          return;
        }
        n.isPopupOpened && n.stage !== null && (n.subState === "help" ? Un() : c());
      }
    };
    return Rt(F, (h) => {
      h === "stopped" && n.stage === "listening" && !ie && !v.value && se();
    }), Dn(() => {
      document.addEventListener("keydown", d);
    }), Is(() => {
      document.removeEventListener("keydown", d), document.removeEventListener("click", ct, !0), xe && cancelAnimationFrame(xe);
      try {
        k.value && k.value.stop();
      } catch (h) {
        console.warn("[HandsfreeCooking] Failed to stop on unmount:", h);
      }
      S(), v.value = !1;
    }), {
      isPopupOpened: ce,
      stage: q,
      subState: ee,
      isIntroductionVisible: V,
      isHelpVisible: B,
      isNotRecognized: I,
      isNotRecognizedError: C,
      isAlmostDone: j,
      isTooltipVisible: A,
      mergedTranslations: a,
      mergedCommands: u,
      tooltip: M,
      isLoading: E,
      statusAnnouncement: oe,
      toggleTooltip: $,
      openHelp: wt,
      startHandsFreeFlow: cn,
      finishHandsFreeFlow: gt,
      togglePopup: ft,
      requestMicrophoneAccess: un,
      beginListening: Mt,
      continueListening: Un,
      closeHandsFreeFlow: c
    };
  }
}, Ac = { class: "hf-root" }, Ec = { class: "hf-trigger" }, kc = { class: "hf-intro-row" }, Pc = { class: "hf-intro-label" }, Fc = {
  ref: "tooltip",
  class: "hf-tooltip-wrapper"
}, Rc = {
  key: 0,
  class: "hf-tooltip-content"
}, Hc = { class: "hf-tooltip-title" }, Lc = { class: "hf-tooltip-text" }, Oc = ["aria-hidden"], Mc = {
  "aria-live": "polite",
  class: "hf-sr-only"
};
function Ic(e, t, n, s, o, i) {
  const r = Ye("HfIcon"), l = Ye("Introduction"), a = Ye("Popup"), u = Ye("Finish");
  return X(), _e("div", Ac, [
    G("div", Ec, [
      G("div", kc, [
        G("span", Pc, Ce(s.mergedTranslations.intro), 1),
        G("span", Fc, [
          Z(r, {
            icon: "help",
            size: 16,
            onClick: s.toggleTooltip
          }, null, 8, ["onClick"]),
          Z(Jl, { name: "hf-fade" }, {
            default: ci(() => [
              s.isTooltipVisible ? (X(), _e("span", Rc, [
                G("strong", Hc, [
                  $t(Ce(s.mergedTranslations.tooltip.title) + " ", 1),
                  G("span", {
                    role: "button",
                    "aria-label": "Close tooltip",
                    onClick: t[0] || (t[0] = (f) => s.isTooltipVisible = !1)
                  }, [
                    Z(r, {
                      icon: "close",
                      size: 24
                    })
                  ])
                ]),
                G("span", Lc, Ce(s.mergedTranslations.tooltip.text), 1)
              ])) : fe("", !0)
            ]),
            _: 1
          })
        ], 512)
      ]),
      s.stage !== "listening" ? (X(), _e("button", {
        key: 0,
        class: "hf-button hf-button--handsfree",
        onClick: t[1] || (t[1] = (...f) => s.startHandsFreeFlow && s.startHandsFreeFlow(...f))
      }, [
        Z(r, {
          icon: "mic",
          size: 24
        }),
        $t(" " + Ce(s.mergedTranslations.letsCook), 1)
      ])) : fe("", !0),
      s.stage === "listening" ? (X(), _e("button", {
        key: 1,
        class: "hf-button hf-button--handsfree",
        onClick: t[2] || (t[2] = (...f) => s.finishHandsFreeFlow && s.finishHandsFreeFlow(...f))
      }, [
        Z(r, {
          icon: "mic",
          size: 24
        }),
        $t(" " + Ce(s.mergedTranslations.stopCooking), 1)
      ])) : fe("", !0)
    ]),
    G("div", {
      class: Lt(["hf-popup", {
        "hf-popup--opened": s.isPopupOpened,
        "hf-popup--hidden": s.stage === null,
        "hf-not-recognized": s.isNotRecognized || s.isNotRecognizedError,
        "hf-error-state": s.isNotRecognizedError
      }]),
      role: "dialog",
      "aria-label": "Handsfree cooking assistant",
      "aria-hidden": s.stage === null
    }, [
      G("div", Mc, Ce(s.statusAnnouncement), 1),
      s.isIntroductionVisible ? (X(), Me(l, {
        key: 0,
        translations: s.mergedTranslations.introduction,
        "is-loading": s.isLoading,
        "is-close-state": !0,
        onTogglePopup: s.closeHandsFreeFlow,
        onBeginListening: s.beginListening
      }, null, 8, ["translations", "is-loading", "onTogglePopup", "onBeginListening"])) : fe("", !0),
      s.stage === "not-allowed" ? (X(), Me(a, {
        key: 1,
        translations: s.mergedTranslations.notAllowed,
        "is-loading": s.isLoading,
        "is-close-state": !0,
        onTogglePopup: s.closeHandsFreeFlow,
        onButtonAction: s.requestMicrophoneAccess
      }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : fe("", !0),
      s.stage === "listening" && s.subState === null ? (X(), Me(a, {
        key: 2,
        translations: s.mergedTranslations.listening,
        "is-loading": s.isLoading,
        onTogglePopup: s.openHelp
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : fe("", !0),
      s.isHelpVisible ? (X(), Me(a, {
        key: 3,
        translations: s.mergedTranslations.help,
        "is-loading": s.isLoading,
        onTogglePopup: s.continueListening,
        onButtonAction: s.finishHandsFreeFlow
      }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : fe("", !0),
      s.isNotRecognized ? (X(), Me(a, {
        key: 4,
        translations: s.mergedTranslations.notRecognized,
        "is-loading": s.isLoading,
        onTogglePopup: s.openHelp
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : fe("", !0),
      s.isNotRecognizedError ? (X(), Me(a, {
        key: 5,
        translations: s.mergedTranslations.notRecognizedError,
        "is-loading": s.isLoading,
        onTogglePopup: s.openHelp
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : fe("", !0),
      s.stage === "not-supported" ? (X(), Me(a, {
        key: 6,
        "additional-classname": "hf-hide-chevron",
        translations: s.mergedTranslations.notSupported,
        "is-loading": s.isLoading,
        onButtonAction: s.closeHandsFreeFlow
      }, null, 8, ["translations", "is-loading", "onButtonAction"])) : fe("", !0),
      s.isAlmostDone ? (X(), Me(a, {
        key: 7,
        translations: s.mergedTranslations.almostDone,
        "is-loading": s.isLoading,
        onTogglePopup: s.togglePopup
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : fe("", !0),
      s.stage === "finish" ? (X(), Me(u, {
        key: 8,
        translations: s.mergedTranslations.finish,
        onCloseHandsFreeFlow: s.closeHandsFreeFlow,
        onTogglePopup: s.togglePopup
      }, null, 8, ["translations", "onCloseHandsFreeFlow", "onTogglePopup"])) : fe("", !0)
    ], 10, Oc)
  ]);
}
const Nc = /* @__PURE__ */ Ot(Cc, [["render", Ic], ["styles", [Sc]]]), Dc = /* @__PURE__ */ va(Nc, {
  shadowRoot: !0
});
customElements.get("handsfree-cooking") || customElements.define("handsfree-cooking", Dc);
export {
  Dc as HandsfreeCookingElement
};
