// @__NO_SIDE_EFFECTS__
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const te = {}, Et = [], Je = () => {
}, Ko = () => !1, En = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Pn = (e) => e.startsWith("onUpdate:"), re = Object.assign, Ss = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ar = Object.prototype.hasOwnProperty, Z = (e, t) => ar.call(e, t), V = Array.isArray, Pt = (e) => on(e) === "[object Map]", qo = (e) => on(e) === "[object Set]", Qs = (e) => on(e) === "[object Date]", B = (e) => typeof e == "function", ce = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", Go = (e) => (Q(e) || B(e)) && B(e.then) && B(e.catch), Jo = Object.prototype.toString, on = (e) => Jo.call(e), cr = (e) => on(e).slice(8, -1), On = (e) => on(e) === "[object Object]", ws = (e) => ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bt = /* @__PURE__ */ xs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), In = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, fr = /-\w/g, de = In(
  (e) => e.replace(fr, (t) => t.slice(1).toUpperCase())
), ur = /\B([A-Z])/g, Le = In(
  (e) => e.replace(ur, "-$1").toLowerCase()
), Rn = In((e) => e.charAt(0).toUpperCase() + e.slice(1)), qn = In(
  (e) => e ? `on${Rn(e)}` : ""
), qe = (e, t) => !Object.is(e, t), Gn = (e, ...t) => {
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
}, ls = (e) => {
  const t = ce(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let $s;
const Ln = () => $s || ($s = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Hn(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ce(s) ? mr(s) : Hn(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (ce(e) || Q(e))
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
  if (ce(e))
    t = e;
  else if (V(e))
    for (let n = 0; n < e.length; n++) {
      const s = st(e[n]);
      s && (t += s + " ");
    }
  else if (Q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const br = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", vr = /* @__PURE__ */ xs(br);
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
  if (n = Q(e), s = Q(t), n || s) {
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
const Yo = (e) => !!(e && e.__v_isRef === !0), ae = (e) => ce(e) ? e : e == null ? "" : V(e) || Q(e) && (e.toString === Jo || !B(e.toString)) ? Yo(e) ? ae(e.value) : JSON.stringify(e, Qo, 2) : String(e), Qo = (e, t) => Yo(t) ? Qo(e, t.value) : Pt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Jn(s, i) + " =>"] = o, n),
    {}
  )
} : qo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Jn(n))
} : Ze(t) ? Jn(t) : Q(t) && !V(t) && !On(t) ? String(t) : t, Jn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ze(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let we;
class yr {
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
function Ar() {
  return we;
}
let se;
const Zn = /* @__PURE__ */ new WeakSet();
class $o {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, we && we.active && we.effects.push(this);
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
    const t = se, n = Me;
    se = this, Me = !0;
    try {
      return this.fn();
    } finally {
      si(this), se = t, Me = n, this.flags &= -3;
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
    this.flags & 64 ? Zn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    as(this) && this.run();
  }
  get dirty() {
    return as(this);
  }
}
let ei = 0, Ut, zt;
function ti(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = zt, zt = e;
    return;
  }
  e.next = Ut, Ut = e;
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
function as(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (oi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function oi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xt) || (e.globalVersion = Xt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !as(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = se, s = Me;
  se = e, Me = !0;
  try {
    ni(e);
    const o = e.fn(e._value);
    (t.version === 0 || qe(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    se = n, Me = s, si(e), e.flags &= -3;
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
    const n = se;
    se = void 0;
    try {
      t();
    } finally {
      se = n;
    }
  }
}
let Xt = 0;
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
    if (!se || !Me || se === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== se)
      n = this.activeLink = new Sr(se, this), se.deps ? (n.prevDep = se.depsTail, se.depsTail.nextDep = n, se.depsTail = n) : se.deps = se.depsTail = n, ri(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = se.depsTail, n.nextDep = void 0, se.depsTail.nextDep = n, se.depsTail = n, se.deps === n && (se.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Xt++, this.notify(t);
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
const cs = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ Symbol(
  ""
), fs = /* @__PURE__ */ Symbol(
  ""
), Yt = /* @__PURE__ */ Symbol(
  ""
);
function ve(e, t, n) {
  if (Me && se) {
    let s = cs.get(e);
    s || cs.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ps()), o.map = s, o.key = n), o.track();
  }
}
function tt(e, t, n, s, o, i) {
  const r = cs.get(e);
  if (!r) {
    Xt++;
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
        (b === "length" || b === Yt || !Ze(b) && b >= f) && l(h);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), u && l(r.get(Yt)), t) {
        case "add":
          a ? u && l(r.get("length")) : (l(r.get(At)), Pt(e) && l(r.get(fs)));
          break;
        case "delete":
          a || (l(r.get(At)), Pt(e) && l(r.get(fs)));
          break;
        case "set":
          Pt(e) && l(r.get(At));
          break;
      }
  }
  ks();
}
function Tt(e) {
  const t = /* @__PURE__ */ J(e);
  return t === e ? t : (ve(t, "iterate", Yt), /* @__PURE__ */ Fe(e) ? t : t.map(rt));
}
function Os(e) {
  return ve(e = /* @__PURE__ */ J(e), "iterate", Yt), e;
}
function We(e, t) {
  return /* @__PURE__ */ ft(e) ? Qt(/* @__PURE__ */ Ot(e) ? rt(t) : t) : rt(t);
}
const wr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xn(this, Symbol.iterator, (e) => We(this, e));
  },
  concat(...e) {
    return Tt(this).concat(
      ...e.map((t) => V(t) ? Tt(t) : t)
    );
  },
  entries() {
    return Xn(this, "entries", (e) => (e[1] = We(this, e[1]), e));
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
    return Ye(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ft(this, "pop");
  },
  push(...e) {
    return Ft(this, "push", e);
  },
  reduce(e, ...t) {
    return to(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return to(this, "reduceRight", e, t);
  },
  shift() {
    return Ft(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ye(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ft(this, "splice", e);
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
    return Ft(this, "unshift", e);
  },
  values() {
    return Xn(this, "values", (e) => We(this, e));
  }
};
function Xn(e, t, n) {
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
function Yn(e, t, n) {
  const s = /* @__PURE__ */ J(e);
  ve(s, "iterate", Yt);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Ls(n[0]) ? (n[0] = /* @__PURE__ */ J(n[0]), s[t](...n)) : o;
}
function Ft(e, t, n = []) {
  ot(), Ts();
  const s = (/* @__PURE__ */ J(e))[t].apply(e, n);
  return ks(), it(), s;
}
const Tr = /* @__PURE__ */ xs("__proto__,__v_isRef,__isVue"), li = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
);
function kr(e) {
  Ze(e) || (e = String(e));
  const t = /* @__PURE__ */ J(this);
  return ve(t, "has", e), t.hasOwnProperty(e);
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
      if (r && (a = wr[n]))
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
      /* @__PURE__ */ me(t) ? t : s
    );
    if ((Ze(n) ? li.has(n) : Tr(n)) || (o || ve(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ me(l)) {
      const a = r && ws(n) ? l : l.value;
      return o && Q(a) ? /* @__PURE__ */ ds(a) : a;
    }
    return Q(l) ? o ? /* @__PURE__ */ ds(l) : /* @__PURE__ */ Mn(l) : l;
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
      const u = /* @__PURE__ */ ft(i);
      if (!/* @__PURE__ */ Fe(s) && !/* @__PURE__ */ ft(s) && (i = /* @__PURE__ */ J(i), s = /* @__PURE__ */ J(s)), !r && /* @__PURE__ */ me(i) && !/* @__PURE__ */ me(s))
        return u || (i.value = s), !0;
    }
    const l = r ? Number(n) < t.length : Z(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ me(t) ? t : o
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
    return (!Ze(n) || !li.has(n)) && ve(t, "has", n), s;
  }
  ownKeys(t) {
    return ve(
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
const us = (e) => e, cn = (e) => Reflect.getPrototypeOf(e);
function Rr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ J(o), r = Pt(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, u = o[e](...s), f = n ? us : t ? Qt : rt;
    return !t && ve(
      i,
      "iterate",
      a ? fs : At
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
      e || (qe(o, l) && ve(r, "get", o), ve(r, "get", l));
      const { has: a } = cn(r), u = t ? us : e ? Qt : rt;
      if (a.call(r, o))
        return u(i.get(o));
      if (a.call(r, l))
        return u(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ve(/* @__PURE__ */ J(o), "iterate", At), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ J(i), l = /* @__PURE__ */ J(o);
      return e || (qe(o, l) && ve(r, "has", o), ve(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = /* @__PURE__ */ J(l), u = t ? us : e ? Qt : rt;
      return !e && ve(a, "iterate", At), l.forEach((f, h) => o.call(i, u(f), u(h), r));
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
        const i = /* @__PURE__ */ J(this), r = cn(i), l = /* @__PURE__ */ J(o), a = !t && !/* @__PURE__ */ Fe(o) && !/* @__PURE__ */ ft(o) ? l : o;
        return r.has.call(i, a) || qe(o, a) && r.has.call(i, o) || qe(l, a) && r.has.call(i, l) || (i.add(a), tt(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Fe(i) && !/* @__PURE__ */ ft(i) && (i = /* @__PURE__ */ J(i));
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
function Mn(e) {
  return /* @__PURE__ */ ft(e) ? e : Rs(
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
function ds(e) {
  return Rs(
    e,
    !0,
    Or,
    Fr,
    di
  );
}
function Rs(e, t, n, s, o) {
  if (!Q(e) || e.__v_raw && !(t && e.__v_isReactive))
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
function Ot(e) {
  return /* @__PURE__ */ ft(e) ? /* @__PURE__ */ Ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
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
const rt = (e) => Q(e) ? /* @__PURE__ */ Mn(e) : e, Qt = (e) => Q(e) ? /* @__PURE__ */ ds(e) : e;
// @__NO_SIDE_EFFECTS__
function me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  return Ur(e, !1);
}
function Ur(e, t) {
  return /* @__PURE__ */ me(e) ? e : new zr(e, t);
}
class zr {
  constructor(t, n) {
    this.dep = new Ps(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ J(t), this._value = n ? t : rt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Fe(t) || /* @__PURE__ */ ft(t);
    t = s ? t : /* @__PURE__ */ J(t), qe(t, n) && (this._rawValue = t, this._value = s ? t : rt(t), this.dep.trigger());
  }
}
function Hs(e) {
  return /* @__PURE__ */ me(e) ? e.value : e;
}
function no(e) {
  return B(e) ? e() : Hs(e);
}
const Wr = {
  get: (e, t, n) => t === "__v_raw" ? e : Hs(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ me(o) && !/* @__PURE__ */ me(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function hi(e) {
  return /* @__PURE__ */ Ot(e) ? e : new Proxy(e, Wr);
}
class Kr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ps(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    se !== this)
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
  return B(e) ? s = e : (s = e.get, o = e.set), new Kr(s, o, n);
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
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = n, u = (x) => o ? x : /* @__PURE__ */ Fe(x) || o === !1 || o === 0 ? nt(x, 1) : nt(x);
  let f, h, b, _, E = !1, S = !1;
  if (/* @__PURE__ */ me(e) ? (h = () => e.value, E = /* @__PURE__ */ Fe(e)) : /* @__PURE__ */ Ot(e) ? (h = () => u(e), E = !0) : V(e) ? (S = !0, E = e.some((x) => /* @__PURE__ */ Ot(x) || /* @__PURE__ */ Fe(x)), h = () => e.map((x) => {
    if (/* @__PURE__ */ me(x))
      return x.value;
    if (/* @__PURE__ */ Ot(x))
      return u(x);
    if (B(x))
      return a ? a(x, 2) : x();
  })) : B(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (b) {
      ot();
      try {
        b();
      } finally {
        it();
      }
    }
    const x = _t;
    _t = f;
    try {
      return a ? a(e, 3, [_]) : e(_);
    } finally {
      _t = x;
    }
  } : h = Je, t && o) {
    const x = h, T = o === !0 ? 1 / 0 : o;
    h = () => nt(x(), T);
  }
  const I = Ar(), L = () => {
    f.stop(), I && I.active && Ss(I.effects, f);
  };
  if (i && t) {
    const x = t;
    t = (...T) => {
      x(...T), L();
    };
  }
  let R = S ? new Array(e.length).fill(un) : un;
  const P = (x) => {
    if (!(!(f.flags & 1) || !f.dirty && !x))
      if (t) {
        const T = f.run();
        if (o || E || (S ? T.some((z, W) => qe(z, R[W])) : qe(T, R))) {
          b && b();
          const z = _t;
          _t = f;
          try {
            const W = [
              T,
              // pass undefined as the old value when it's changed for the first time
              R === un ? void 0 : S && R[0] === un ? [] : R,
              _
            ];
            R = T, a ? a(t, 3, W) : (
              // @ts-expect-error
              t(...W)
            );
          } finally {
            _t = z;
          }
        }
      } else
        f.run();
  };
  return l && l(P), f = new $o(h), f.scheduler = r ? () => r(P, !1) : P, _ = (x) => Gr(x, !1, f), b = f.onStop = () => {
    const x = mn.get(f);
    if (x) {
      if (a)
        a(x, 4);
      else
        for (const T of x) T();
      mn.delete(f);
    }
  }, t ? s ? P(!0) : R = f.run() : r ? r(P.bind(null, !0), !0) : f.run(), L.pause = f.pause.bind(f), L.resume = f.resume.bind(f), L.stop = L, L;
}
function nt(e, t = 1 / 0, n) {
  if (t <= 0 || !Q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ me(e))
    nt(e.value, t, n);
  else if (V(e))
    for (let s = 0; s < e.length; s++)
      nt(e[s], t, n);
  else if (qo(e) || Pt(e))
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
function rn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Fn(o, t, n);
  }
}
function Ne(e, t, n, s) {
  if (B(e)) {
    const o = rn(e, t, n, s);
    return o && Go(o) && o.catch((i) => {
      Fn(i, t, n);
    }), o;
  }
  if (V(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Ne(e[i], t, n, s));
    return o;
  }
}
function Fn(e, t, n, s = !0) {
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
      ot(), rn(i, null, 10, [
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
const xe = [];
let Ue = -1;
const It = [];
let ct = null, kt = 0;
const pi = /* @__PURE__ */ Promise.resolve();
let bn = null;
function Ms(e) {
  const t = bn || pi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xr(e) {
  let t = Ue + 1, n = xe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = xe[s], i = $t(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Fs(e) {
  if (!(e.flags & 1)) {
    const t = $t(e), n = xe[xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= $t(n) ? xe.push(e) : xe.splice(Xr(t), 0, e), e.flags |= 1, gi();
  }
}
function gi() {
  bn || (bn = pi.then(bi));
}
function Yr(e) {
  V(e) ? It.push(...e) : ct && e.id === -1 ? ct.splice(kt + 1, 0, e) : e.flags & 1 || (It.push(e), e.flags |= 1), gi();
}
function so(e, t, n = Ue + 1) {
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
  if (It.length) {
    const t = [...new Set(It)].sort(
      (n, s) => $t(n) - $t(s)
    );
    if (It.length = 0, ct) {
      ct.push(...t);
      return;
    }
    for (ct = t, kt = 0; kt < ct.length; kt++) {
      const n = ct[kt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ct = null, kt = 0;
  }
}
const $t = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function bi(e) {
  try {
    for (Ue = 0; Ue < xe.length; Ue++) {
      const t = xe[Ue];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ue < xe.length; Ue++) {
      const t = xe[Ue];
      t && (t.flags &= -2);
    }
    Ue = -1, xe.length = 0, mi(), bn = null, (xe.length || It.length) && bi();
  }
}
let ke = null, vi = null;
function vn(e) {
  const t = ke;
  return ke = e, vi = e && e.type.__scopeId || null, t;
}
function _i(e, t = ke, n) {
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
  if (ke === null)
    return e;
  const n = Un(ke), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, a = te] = t[o];
    i && (B(i) && (i = {
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
  if (_e) {
    let n = _e.provides;
    const s = _e.parent && _e.parent.provides;
    s === n && (n = _e.provides = Object.create(s)), n[e] = t;
  }
}
function Rt(e, t, n = !1) {
  const s = Ws();
  if (s || Lt) {
    let o = Lt ? Lt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && B(t) ? t.call(s && s.proxy) : t;
  }
}
const Qr = /* @__PURE__ */ Symbol.for("v-scx"), $r = () => Rt(Qr);
function xt(e, t, n) {
  return yi(e, t, n);
}
function yi(e, t, n = te) {
  const { immediate: s, deep: o, flush: i, once: r } = n, l = re({}, n), a = t && s || !t && i !== "post";
  let u;
  if (nn) {
    if (i === "sync") {
      const _ = $r();
      u = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!a) {
      const _ = () => {
      };
      return _.stop = Je, _.resume = Je, _.pause = Je, _;
    }
  }
  const f = _e;
  l.call = (_, E, S) => Ne(_, f, E, S);
  let h = !1;
  i === "post" ? l.scheduler = (_) => {
    be(_, f && f.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (_, E) => {
    E ? _() : Fs(_);
  }), l.augmentJob = (_) => {
    t && (_.flags |= 4), h && (_.flags |= 2, f && (_.id = f.uid, _.i = f));
  };
  const b = Jr(e, t, l);
  return nn && (u ? u.push(b) : a && b()), b;
}
function el(e, t, n) {
  const s = this.proxy, o = ce(e) ? e.includes(".") ? Ai(s, e) : () => s[e] : e.bind(s, s);
  let i;
  B(t) ? i = t : (i = t.handler, n = t);
  const r = ln(this), l = yi(o, i.bind(s), n);
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
const xi = /* @__PURE__ */ Symbol("_vte"), Si = (e) => e.__isTeleport, Wt = (e) => e && (e.disabled || e.disabled === ""), tl = (e) => e && (e.defer || e.defer === ""), oo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, io = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, hs = (e, t) => {
  const n = e && e.to;
  return ce(n) ? t ? t(n) : null : n;
}, wi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, r, l, a, u) {
    const {
      mc: f,
      pc: h,
      pbc: b,
      o: { insert: _, querySelector: E, createText: S, createComment: I }
    } = u, L = Wt(t.props);
    let { shapeFlag: R, children: P, dynamicChildren: x } = t;
    if (e == null) {
      const T = t.el = S(""), z = t.anchor = S("");
      _(T, n, s), _(z, n, s);
      const W = (H, K) => {
        R & 16 && f(
          P,
          H,
          K,
          o,
          i,
          r,
          l,
          a
        );
      }, U = () => {
        const H = t.target = hs(t.props, E), K = ps(H, t, S, _);
        H && (r !== "svg" && oo(H) ? r = "svg" : r !== "mathml" && io(H) && (r = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(H), L || (W(H, K), hn(t, !1)));
      };
      L && (W(n, z), hn(t, !0)), tl(t.props) || i && i.pendingBranch ? (t.el.__isMounted = !1, be(() => {
        t.el.__isMounted === !1 && (U(), delete t.el.__isMounted);
      }, i)) : U();
    } else {
      t.el = e.el, t.targetStart = e.targetStart;
      const T = t.anchor = e.anchor, z = t.target = e.target, W = t.targetAnchor = e.targetAnchor;
      if (e.el.__isMounted === !1) {
        be(() => {
          wi.process(
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
      const U = Wt(e.props), H = U ? n : z, K = U ? T : W;
      if (r === "svg" || oo(z) ? r = "svg" : (r === "mathml" || io(z)) && (r = "mathml"), x ? (b(
        e.dynamicChildren,
        x,
        H,
        o,
        i,
        r,
        l
      ), Us(e, t, !0)) : a || h(
        e,
        t,
        H,
        K,
        o,
        i,
        r,
        l,
        !1
      ), L)
        U ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : dn(
          t,
          n,
          T,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const D = t.target = hs(
          t.props,
          E
        );
        D && dn(
          t,
          D,
          null,
          u,
          0
        );
      } else U && dn(
        t,
        z,
        W,
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
      const _ = i || !Wt(b);
      for (let E = 0; E < l.length; E++) {
        const S = l[E];
        s(
          S,
          t,
          n,
          _,
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
  if (h && s(r, t, n), (!h || Wt(f)) && a & 16)
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
  function b(I, L) {
    let R = L;
    for (; R; ) {
      if (R && R.nodeType === 8) {
        if (R.data === "teleport start anchor")
          t.targetStart = R;
        else if (R.data === "teleport anchor") {
          t.targetAnchor = R, I._lpa = t.targetAnchor && r(t.targetAnchor);
          break;
        }
      }
      R = r(R);
    }
  }
  function _(I, L) {
    L.anchor = h(
      r(I),
      L,
      l(I),
      n,
      s,
      o,
      i
    );
  }
  const E = t.target = hs(
    t.props,
    a
  ), S = Wt(t.props);
  if (E) {
    const I = E._lpa || E.firstChild;
    t.shapeFlag & 16 && (S ? (_(e, t), b(E, I), t.targetAnchor || ps(
      E,
      t,
      f,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === E ? e : null
    )) : (t.anchor = r(e), b(E, I), t.targetAnchor || ps(E, t, f, u), h(
      I && r(I),
      t,
      E,
      n,
      s,
      o,
      i
    ))), hn(t, S);
  } else S && t.shapeFlag & 16 && (_(e, t), t.targetStart = e, t.targetAnchor = r(e));
  return t.anchor && r(t.anchor);
}
const sl = wi;
function hn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function ps(e, t, n, s, o = null) {
  const i = t.targetStart = n(""), r = t.targetAnchor = n("");
  return i[xi] = r, e && (s(i, e, o), s(r, e, o)), r;
}
const ze = /* @__PURE__ */ Symbol("_leaveCb"), Nt = /* @__PURE__ */ Symbol("_enterCb");
function ol() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Vn(() => {
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
        return Qn(i);
      const a = ro(i);
      if (!a)
        return Qn(i);
      let u = gs(
        a,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => u = h
      );
      a.type !== Se && en(a, u);
      let f = n.subTree && ro(n.subTree);
      if (f && f.type !== Se && !yt(f, a) && Ti(n).type !== Se) {
        let h = gs(
          f,
          r,
          s,
          n
        );
        if (en(f, h), l === "out-in" && a.type !== Se)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, f = void 0;
          }, Qn(i);
        l === "in-out" && a.type !== Se ? h.delayLeave = (b, _, E) => {
          const S = Ei(
            s,
            f
          );
          S[String(f.key)] = f, b[ze] = () => {
            _(), b[ze] = void 0, delete u.delayedLeave, f = void 0;
          }, u.delayedLeave = () => {
            E(), delete u.delayedLeave, f = void 0;
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
      if (n.type !== Se) {
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
function gs(e, t, n, s, o) {
  const {
    appear: i,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: f,
    onEnterCancelled: h,
    onBeforeLeave: b,
    onLeave: _,
    onAfterLeave: E,
    onLeaveCancelled: S,
    onBeforeAppear: I,
    onAppear: L,
    onAfterAppear: R,
    onAppearCancelled: P
  } = t, x = String(e.key), T = Ei(n, e), z = (H, K) => {
    H && Ne(
      H,
      s,
      9,
      K
    );
  }, W = (H, K) => {
    const D = K[1];
    z(H, K), V(H) ? H.every((k) => k.length <= 1) && D() : H.length <= 1 && D();
  }, U = {
    mode: r,
    persisted: l,
    beforeEnter(H) {
      let K = a;
      if (!n.isMounted)
        if (i)
          K = I || a;
        else
          return;
      H[ze] && H[ze](
        !0
        /* cancelled */
      );
      const D = T[x];
      D && yt(e, D) && D.el[ze] && D.el[ze](), z(K, [H]);
    },
    enter(H) {
      if (T[x] === e) return;
      let K = u, D = f, k = h;
      if (!n.isMounted)
        if (i)
          K = L || u, D = R || f, k = P || h;
        else
          return;
      let G = !1;
      H[Nt] = (Pe) => {
        G || (G = !0, Pe ? z(k, [H]) : z(D, [H]), U.delayedLeave && U.delayedLeave(), H[Nt] = void 0);
      };
      const ie = H[Nt].bind(null, !1);
      K ? W(K, [H, ie]) : ie();
    },
    leave(H, K) {
      const D = String(e.key);
      if (H[Nt] && H[Nt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return K();
      z(b, [H]);
      let k = !1;
      H[ze] = (ie) => {
        k || (k = !0, K(), ie ? z(S, [H]) : z(E, [H]), H[ze] = void 0, T[D] === e && delete T[D]);
      };
      const G = H[ze].bind(null, !1);
      T[D] = e, _ ? W(_, [H, G]) : G();
    },
    clone(H) {
      const K = gs(
        H,
        t,
        n,
        s,
        o
      );
      return o && o(K), K;
    }
  };
  return U;
}
function Qn(e) {
  if (Nn(e))
    return e = ut(e), e.children = null, e;
}
function ro(e) {
  if (!Nn(e))
    return Si(e.type) && e.children ? ki(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && B(n.default))
      return n.default();
  }
}
function en(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, en(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Pi(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === Ce ? (r.patchFlag & 128 && o++, s = s.concat(
      Pi(r.children, t, l)
    )) : (t || r.type !== Se) && s.push(l != null ? ut(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function ll(e, t) {
  return B(e) ? (
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
function Kt(e, t, n, s, o = !1) {
  if (V(e)) {
    e.forEach(
      (S, I) => Kt(
        S,
        t && (V(t) ? t[I] : t),
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
  const i = s.shapeFlag & 4 ? Un(s.component) : s.el, r = o ? null : i, { i: l, r: a } = e, u = t && t.r, f = l.refs === te ? l.refs = {} : l.refs, h = l.setupState, b = /* @__PURE__ */ J(h), _ = h === te ? Ko : (S) => lo(f, S) ? !1 : Z(b, S), E = (S, I) => !(I && lo(f, I));
  if (u != null && u !== a) {
    if (ao(t), ce(u))
      f[u] = null, _(u) && (h[u] = null);
    else if (/* @__PURE__ */ me(u)) {
      const S = t;
      E(u, S.k) && (u.value = null), S.k && (f[S.k] = null);
    }
  }
  if (B(a))
    rn(a, l, 12, [r, f]);
  else {
    const S = ce(a), I = /* @__PURE__ */ me(a);
    if (S || I) {
      const L = () => {
        if (e.f) {
          const R = S ? _(a) ? h[a] : f[a] : E() || !e.k ? a.value : f[e.k];
          if (o)
            V(R) && Ss(R, i);
          else if (V(R))
            R.includes(i) || R.push(i);
          else if (S)
            f[a] = [i], _(a) && (h[a] = f[a]);
          else {
            const P = [i];
            E(a, e.k) && (a.value = P), e.k && (f[e.k] = P);
          }
        } else S ? (f[a] = r, _(a) && (h[a] = r)) : I && (E(a, e.k) && (a.value = r), e.k && (f[e.k] = r));
      };
      if (r) {
        const R = () => {
          L(), yn.delete(e);
        };
        R.id = -1, yn.set(e, R), be(R, n);
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
const qt = (e) => !!e.type.__asyncLoader, Nn = (e) => e.type.__isKeepAlive;
function al(e, t) {
  Ii(e, "a", t);
}
function cl(e, t) {
  Ii(e, "da", t);
}
function Ii(e, t, n = _e) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Dn(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Nn(o.parent.vnode) && fl(s, t, n, o), o = o.parent;
  }
}
function fl(e, t, n, s) {
  const o = Dn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Vs(() => {
    Ss(s[t], o);
  }, n);
}
function Dn(e, t, n = _e, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      ot();
      const l = ln(n), a = Ne(t, n, e, r);
      return l(), it(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const lt = (e) => (t, n = _e) => {
  (!nn || e === "sp") && Dn(e, (...s) => t(...s), n);
}, ul = lt("bm"), Vn = lt("m"), dl = lt(
  "bu"
), hl = lt("u"), Ds = lt(
  "bum"
), Vs = lt("um"), pl = lt(
  "sp"
), gl = lt("rtg"), ml = lt("rtc");
function bl(e, t = _e) {
  Dn("ec", e, t);
}
const vl = "components";
function Ge(e, t) {
  return yl(vl, e, !0, t) || e;
}
const _l = /* @__PURE__ */ Symbol.for("v-ndc");
function yl(e, t, n = !0, s = !1) {
  const o = ke || _e;
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
const ms = (e) => e ? Xi(e) ? Un(e) : ms(e.parent) : null, Gt = (
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
    $parent: (e) => ms(e.parent),
    $root: (e) => ms(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Li(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ms.bind(e.proxy)),
    $watch: (e) => el.bind(e)
  })
), $n = (e, t) => e !== te && !e.__isScriptSetup && Z(e, t), Al = {
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
        if ($n(s, t))
          return r[t] = 1, s[t];
        if (o !== te && Z(o, t))
          return r[t] = 2, o[t];
        if (Z(i, t))
          return r[t] = 3, i[t];
        if (n !== te && Z(n, t))
          return r[t] = 4, n[t];
        bs && (r[t] = 0);
      }
    }
    const u = Gt[t];
    let f, h;
    if (u)
      return t === "$attrs" && ve(e.attrs, "get", ""), u(e);
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
    return $n(o, t) ? (o[t] = n, !0) : s !== te && Z(s, t) ? (s[t] = n, !0) : Z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: r }
  }, l) {
    let a;
    return !!(n[l] || e !== te && l[0] !== "$" && Z(e, l) || $n(t, l) || Z(i, l) || Z(s, l) || Z(Gt, l) || Z(o.config.globalProperties, l) || (a = r.__cssModules) && a[l]);
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
let bs = !0;
function xl(e) {
  const t = Li(e), n = e.proxy, s = e.ctx;
  bs = !1, t.beforeCreate && uo(t.beforeCreate, e, "bc");
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
    beforeUpdate: _,
    updated: E,
    activated: S,
    deactivated: I,
    beforeDestroy: L,
    beforeUnmount: R,
    destroyed: P,
    unmounted: x,
    render: T,
    renderTracked: z,
    renderTriggered: W,
    errorCaptured: U,
    serverPrefetch: H,
    // public API
    expose: K,
    inheritAttrs: D,
    // assets
    components: k,
    directives: G,
    filters: ie
  } = t;
  if (u && Sl(u, s, null), r)
    for (const oe in r) {
      const X = r[oe];
      B(X) && (s[oe] = X.bind(n));
    }
  if (o) {
    const oe = o.call(n, n);
    Q(oe) && (e.data = /* @__PURE__ */ Mn(oe));
  }
  if (bs = !0, i)
    for (const oe in i) {
      const X = i[oe], Oe = B(X) ? X.bind(n, n) : B(X.get) ? X.get.bind(n, n) : Je, St = !B(X) && B(X.set) ? X.set.bind(n) : Je, Xe = ue({
        get: Oe,
        set: St
      });
      Object.defineProperty(s, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => Xe.value,
        set: (he) => Xe.value = he
      });
    }
  if (l)
    for (const oe in l)
      Ri(l[oe], s, n, oe);
  if (a) {
    const oe = B(a) ? a.call(n) : a;
    Reflect.ownKeys(oe).forEach((X) => {
      Ns(X, oe[X]);
    });
  }
  f && uo(f, e, "c");
  function le(oe, X) {
    V(X) ? X.forEach((Oe) => oe(Oe.bind(n))) : X && oe(X.bind(n));
  }
  if (le(ul, h), le(Vn, b), le(dl, _), le(hl, E), le(al, S), le(cl, I), le(bl, U), le(ml, z), le(gl, W), le(Ds, R), le(Vs, x), le(pl, H), V(K))
    if (K.length) {
      const oe = e.exposed || (e.exposed = {});
      K.forEach((X) => {
        Object.defineProperty(oe, X, {
          get: () => n[X],
          set: (Oe) => n[X] = Oe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === Je && (e.render = T), D != null && (e.inheritAttrs = D), k && (e.components = k), G && (e.directives = G), H && Oi(e);
}
function Sl(e, t, n = Je) {
  V(e) && (e = vs(e));
  for (const s in e) {
    const o = e[s];
    let i;
    Q(o) ? "default" in o ? i = Rt(
      o.from || s,
      o.default,
      !0
    ) : i = Rt(o.from || s) : i = Rt(o), /* @__PURE__ */ me(i) ? Object.defineProperty(t, s, {
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
  if (ce(e)) {
    const i = t[e];
    B(i) && xt(o, i);
  } else if (B(e))
    xt(o, e.bind(n));
  else if (Q(e))
    if (V(e))
      e.forEach((i) => Ri(i, t, n, s));
    else {
      const i = B(e.handler) ? e.handler.bind(n) : t[e.handler];
      B(i) && xt(o, i, e);
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
  ), An(a, t, r)), Q(t) && i.set(t, a), a;
}
function An(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && An(e, i, n, !0), o && o.forEach(
    (r) => An(e, r, n, !0)
  );
  for (const r in t)
    if (!(s && r === "expose")) {
      const l = wl[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const wl = {
  data: ho,
  props: po,
  emits: po,
  // objects
  methods: jt,
  computed: jt,
  // lifecycle
  beforeCreate: ye,
  created: ye,
  beforeMount: ye,
  mounted: ye,
  beforeUpdate: ye,
  updated: ye,
  beforeDestroy: ye,
  beforeUnmount: ye,
  destroyed: ye,
  unmounted: ye,
  activated: ye,
  deactivated: ye,
  errorCaptured: ye,
  serverPrefetch: ye,
  // assets
  components: jt,
  directives: jt,
  // watch
  watch: Tl,
  // provide / inject
  provide: ho,
  inject: Cl
};
function ho(e, t) {
  return t ? e ? function() {
    return re(
      B(e) ? e.call(this, this) : e,
      B(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Cl(e, t) {
  return jt(vs(e), vs(t));
}
function vs(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function jt(e, t) {
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
    n[s] = ye(e[s], t[s]);
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
    B(s) || (s = re({}, s)), o != null && !Q(o) && (o = null);
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
        return r.has(f) || (f && B(f.install) ? (r.add(f), f.install(u, ...h)) : B(f) && (r.add(f), f(u, ...h))), u;
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
          const _ = u._ceVNode || $(s, o);
          return _.appContext = i, b === !0 ? b = "svg" : b === !1 && (b = void 0), e(_, f, b), a = !0, u._container = f, f.__vue_app__ = u, Un(_.component);
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
        const h = Lt;
        Lt = u;
        try {
          return f();
        } finally {
          Lt = h;
        }
      }
    };
    return u;
  };
}
let Lt = null;
const Pl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${de(t)}Modifiers`] || e[`${Le(t)}Modifiers`];
function Ol(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || te;
  let o = n;
  const i = t.startsWith("update:"), r = i && Pl(s, t.slice(7));
  r && (r.trim && (o = n.map((f) => ce(f) ? f.trim() : f)), r.number && (o = n.map(dr)));
  let l, a = s[l = qn(t)] || // also try camelCase event handler (#2249)
  s[l = qn(de(t))];
  !a && i && (a = s[l = qn(Le(t))]), a && Ne(
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
  if (!B(e)) {
    const a = (u) => {
      const f = Mi(u, t, !0);
      f && (l = !0, re(r, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (Q(e) && s.set(e, null), null) : (V(i) ? i.forEach((a) => r[a] = null) : re(r, i), Q(e) && s.set(e, r), r);
}
function jn(e, t) {
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
    setupState: _,
    ctx: E,
    inheritAttrs: S
  } = e, I = vn(e);
  let L, R;
  try {
    if (n.shapeFlag & 4) {
      const x = o || s, T = x;
      L = Ke(
        u.call(
          T,
          x,
          f,
          h,
          _,
          b,
          E
        )
      ), R = l;
    } else {
      const x = t;
      L = Ke(
        x.length > 1 ? x(
          h,
          { attrs: l, slots: r, emit: a }
        ) : x(
          h,
          null
        )
      ), R = t.props ? l : Rl(l);
    }
  } catch (x) {
    Jt.length = 0, Fn(x, e, 1), L = $(Se);
  }
  let P = L;
  if (R && S !== !1) {
    const x = Object.keys(R), { shapeFlag: T } = P;
    x.length && T & 7 && (i && x.some(Pn) && (R = Ll(
      R,
      i
    )), P = ut(P, R, !1, !0));
  }
  return n.dirs && (P = ut(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(n.dirs) : n.dirs), n.transition && en(P, n.transition), L = P, vn(I), L;
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
        if (Fi(r, s, b) && !jn(u, b))
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
    if (Fi(t, e, i) && !jn(n, i))
      return !0;
  }
  return !1;
}
function Fi(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && Q(s) && Q(o) ? !Cs(s, o) : s !== o;
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
        if (jn(e.emitsOptions, b))
          continue;
        const _ = t[b];
        if (a)
          if (Z(i, b))
            _ !== i[b] && (i[b] = _, u = !0);
          else {
            const E = de(b);
            o[E] = _s(
              a,
              l,
              E,
              _,
              e,
              !1
            );
          }
        else
          _ !== i[b] && (i[b] = _, u = !0);
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
      n[f] !== void 0) && (o[h] = _s(
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
      if (Bt(a))
        continue;
      const u = t[a];
      let f;
      o && Z(o, f = de(a)) ? !i || !i.includes(f) ? n[f] = u : (l || (l = {}))[f] = u : jn(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, r = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ J(n), u = l || te;
    for (let f = 0; f < i.length; f++) {
      const h = i[f];
      n[h] = _s(
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
function _s(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = Z(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && B(a)) {
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
  if (!B(e)) {
    const f = (h) => {
      a = !0;
      const [b, _] = Bi(h, t, !0);
      re(r, b), _ && l.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !a)
    return Q(e) && s.set(e, Et), Et;
  if (V(i))
    for (let f = 0; f < i.length; f++) {
      const h = de(i[f]);
      bo(h) && (r[h] = te);
    }
  else if (i)
    for (const f in i) {
      const h = de(f);
      if (bo(h)) {
        const b = i[f], _ = r[h] = V(b) || B(b) ? { type: b } : re({}, b), E = _.type;
        let S = !1, I = !0;
        if (V(E))
          for (let L = 0; L < E.length; ++L) {
            const R = E[L], P = B(R) && R.name;
            if (P === "Boolean") {
              S = !0;
              break;
            } else P === "String" && (I = !1);
          }
        else
          S = B(E) && E.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = S, _[
          1
          /* shouldCastTrue */
        ] = I, (S || Z(_, "default")) && l.push(h);
      }
    }
  const u = [r, l];
  return Q(e) && s.set(e, u), u;
}
function bo(e) {
  return e[0] !== "$" && !Bt(e);
}
const js = (e) => e === "_" || e === "_ctx" || e === "$stable", Bs = (e) => V(e) ? e.map(Ke) : [Ke(e)], Vl = (e, t, n) => {
  if (t._n)
    return t;
  const s = _i((...o) => Bs(t(...o)), n);
  return s._c = !1, s;
}, Ui = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (js(o)) continue;
    const i = e[o];
    if (B(i))
      t[o] = Vl(o, i, s);
    else if (i != null) {
      const r = Bs(i);
      t[o] = () => r;
    }
  }
}, zi = (e, t) => {
  const n = Bs(t);
  e.slots.default = () => n;
}, Wi = (e, t, n) => {
  for (const s in t)
    (n || !js(s)) && (e[s] = t[s]);
}, jl = (e, t, n) => {
  const s = e.slots = Di();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Wi(s, t, n), n && Zo(s, "_", o, !0)) : Ui(t, s);
  } else t && zi(e, t);
}, Bl = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = te;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Wi(o, t, n) : (i = !t.$stable, Ui(t, o)), r = t;
  } else t && (zi(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !js(l) && r[l] == null && delete o[l];
}, be = ql;
function Ul(e) {
  return zl(e);
}
function zl(e, t) {
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
    setScopeId: _ = Je,
    insertStaticContent: E
  } = e, S = (c, d, g, y = null, v = null, p = null, m = void 0, w = null, C = !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !yt(c, d) && (y = ht(c), he(c, v, p, !0), c = null), d.patchFlag === -2 && (C = !1, d.dynamicChildren = null);
    const { type: A, ref: F, shapeFlag: O } = d;
    switch (A) {
      case Bn:
        I(c, d, g, y);
        break;
      case Se:
        L(c, d, g, y);
        break;
      case ts:
        c == null && R(d, g, y, m);
        break;
      case Ce:
        k(
          c,
          d,
          g,
          y,
          v,
          p,
          m,
          w,
          C
        );
        break;
      default:
        O & 1 ? T(
          c,
          d,
          g,
          y,
          v,
          p,
          m,
          w,
          C
        ) : O & 6 ? G(
          c,
          d,
          g,
          y,
          v,
          p,
          m,
          w,
          C
        ) : (O & 64 || O & 128) && A.process(
          c,
          d,
          g,
          y,
          v,
          p,
          m,
          w,
          C,
          pt
        );
    }
    F != null && v ? Kt(F, c && c.ref, p, d || c, !d) : F == null && c && c.ref != null && Kt(c.ref, null, p, c, !0);
  }, I = (c, d, g, y) => {
    if (c == null)
      s(
        d.el = l(d.children),
        g,
        y
      );
    else {
      const v = d.el = c.el;
      d.children !== c.children && u(v, d.children);
    }
  }, L = (c, d, g, y) => {
    c == null ? s(
      d.el = a(d.children || ""),
      g,
      y
    ) : d.el = c.el;
  }, R = (c, d, g, y) => {
    [c.el, c.anchor] = E(
      c.children,
      d,
      g,
      y,
      c.el,
      c.anchor
    );
  }, P = ({ el: c, anchor: d }, g, y) => {
    let v;
    for (; c && c !== d; )
      v = b(c), s(c, g, y), c = v;
    s(d, g, y);
  }, x = ({ el: c, anchor: d }) => {
    let g;
    for (; c && c !== d; )
      g = b(c), o(c), c = g;
    o(d);
  }, T = (c, d, g, y, v, p, m, w, C) => {
    if (d.type === "svg" ? m = "svg" : d.type === "math" && (m = "mathml"), c == null)
      z(
        d,
        g,
        y,
        v,
        p,
        m,
        w,
        C
      );
    else {
      const A = c.el && c.el._isVueCE ? c.el : null;
      try {
        A && A._beginPatch(), H(
          c,
          d,
          v,
          p,
          m,
          w,
          C
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, z = (c, d, g, y, v, p, m, w) => {
    let C, A;
    const { props: F, shapeFlag: O, transition: M, dirs: j } = c;
    if (C = c.el = r(
      c.type,
      p,
      F && F.is,
      F
    ), O & 8 ? f(C, c.children) : O & 16 && U(
      c.children,
      C,
      null,
      y,
      v,
      es(c, p),
      m,
      w
    ), j && gt(c, null, y, "created"), W(C, c, c.scopeId, m, y), F) {
      for (const ee in F)
        ee !== "value" && !Bt(ee) && i(C, ee, null, F[ee], p, y);
      "value" in F && i(C, "value", null, F.value, p), (A = F.onVnodeBeforeMount) && Be(A, y, c);
    }
    j && gt(c, null, y, "beforeMount");
    const q = Wl(v, M);
    q && M.beforeEnter(C), s(C, d, g), ((A = F && F.onVnodeMounted) || q || j) && be(() => {
      A && Be(A, y, c), q && M.enter(C), j && gt(c, null, y, "mounted");
    }, v);
  }, W = (c, d, g, y, v) => {
    if (g && _(c, g), y)
      for (let p = 0; p < y.length; p++)
        _(c, y[p]);
    if (v) {
      let p = v.subTree;
      if (d === p || Gi(p.type) && (p.ssContent === d || p.ssFallback === d)) {
        const m = v.vnode;
        W(
          c,
          m,
          m.scopeId,
          m.slotScopeIds,
          v.parent
        );
      }
    }
  }, U = (c, d, g, y, v, p, m, w, C = 0) => {
    for (let A = C; A < c.length; A++) {
      const F = c[A] = w ? et(c[A]) : Ke(c[A]);
      S(
        null,
        F,
        d,
        g,
        y,
        v,
        p,
        m,
        w
      );
    }
  }, H = (c, d, g, y, v, p, m) => {
    const w = d.el = c.el;
    let { patchFlag: C, dynamicChildren: A, dirs: F } = d;
    C |= c.patchFlag & 16;
    const O = c.props || te, M = d.props || te;
    let j;
    if (g && mt(g, !1), (j = M.onVnodeBeforeUpdate) && Be(j, g, d, c), F && gt(d, c, g, "beforeUpdate"), g && mt(g, !0), (O.innerHTML && M.innerHTML == null || O.textContent && M.textContent == null) && f(w, ""), A ? K(
      c.dynamicChildren,
      A,
      w,
      g,
      y,
      es(d, v),
      p
    ) : m || X(
      c,
      d,
      w,
      null,
      g,
      y,
      es(d, v),
      p,
      !1
    ), C > 0) {
      if (C & 16)
        D(w, O, M, g, v);
      else if (C & 2 && O.class !== M.class && i(w, "class", null, M.class, v), C & 4 && i(w, "style", O.style, M.style, v), C & 8) {
        const q = d.dynamicProps;
        for (let ee = 0; ee < q.length; ee++) {
          const ne = q[ee], fe = O[ne], pe = M[ne];
          (pe !== fe || ne === "value") && i(w, ne, fe, pe, v, g);
        }
      }
      C & 1 && c.children !== d.children && f(w, d.children);
    } else !m && A == null && D(w, O, M, g, v);
    ((j = M.onVnodeUpdated) || F) && be(() => {
      j && Be(j, g, d, c), F && gt(d, c, g, "updated");
    }, y);
  }, K = (c, d, g, y, v, p, m) => {
    for (let w = 0; w < d.length; w++) {
      const C = c[w], A = d[w], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === Ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !yt(C, A) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? h(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      S(
        C,
        A,
        F,
        null,
        y,
        v,
        p,
        m,
        !0
      );
    }
  }, D = (c, d, g, y, v) => {
    if (d !== g) {
      if (d !== te)
        for (const p in d)
          !Bt(p) && !(p in g) && i(
            c,
            p,
            d[p],
            null,
            v,
            y
          );
      for (const p in g) {
        if (Bt(p)) continue;
        const m = g[p], w = d[p];
        m !== w && p !== "value" && i(c, p, w, m, v, y);
      }
      "value" in g && i(c, "value", d.value, g.value, v);
    }
  }, k = (c, d, g, y, v, p, m, w, C) => {
    const A = d.el = c ? c.el : l(""), F = d.anchor = c ? c.anchor : l("");
    let { patchFlag: O, dynamicChildren: M, slotScopeIds: j } = d;
    j && (w = w ? w.concat(j) : j), c == null ? (s(A, g, y), s(F, g, y), U(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      F,
      v,
      p,
      m,
      w,
      C
    )) : O > 0 && O & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === M.length ? (K(
      c.dynamicChildren,
      M,
      g,
      v,
      p,
      m,
      w
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || v && d === v.subTree) && Us(
      c,
      d,
      !0
      /* shallow */
    )) : X(
      c,
      d,
      g,
      F,
      v,
      p,
      m,
      w,
      C
    );
  }, G = (c, d, g, y, v, p, m, w, C) => {
    d.slotScopeIds = w, c == null ? d.shapeFlag & 512 ? v.ctx.activate(
      d,
      g,
      y,
      m,
      C
    ) : ie(
      d,
      g,
      y,
      v,
      p,
      m,
      C
    ) : Pe(c, d, C);
  }, ie = (c, d, g, y, v, p, m) => {
    const w = c.component = $l(
      c,
      y,
      v
    );
    if (Nn(c) && (w.ctx.renderer = pt), ea(w, !1, m), w.asyncDep) {
      if (v && v.registerDep(w, le, m), !c.el) {
        const C = w.subTree = $(Se);
        L(null, C, d, g), c.placeholder = C.el;
      }
    } else
      le(
        w,
        c,
        d,
        g,
        v,
        p,
        m
      );
  }, Pe = (c, d, g) => {
    const y = d.component = c.component;
    if (Hl(c, d, g))
      if (y.asyncDep && !y.asyncResolved) {
        oe(y, d, g);
        return;
      } else
        y.next = d, y.update();
    else
      d.el = c.el, y.vnode = d;
  }, le = (c, d, g, y, v, p, m) => {
    const w = () => {
      if (c.isMounted) {
        let { next: O, bu: M, u: j, parent: q, vnode: ee } = c;
        {
          const Ve = Ki(c);
          if (Ve) {
            O && (O.el = ee.el, oe(c, O, m)), Ve.asyncDep.then(() => {
              be(() => {
                c.isUnmounted || A();
              }, v);
            });
            return;
          }
        }
        let ne = O, fe;
        mt(c, !1), O ? (O.el = ee.el, oe(c, O, m)) : O = ee, M && Gn(M), (fe = O.props && O.props.onVnodeBeforeUpdate) && Be(fe, q, O, ee), mt(c, !0);
        const pe = go(c), De = c.subTree;
        c.subTree = pe, S(
          De,
          pe,
          // parent may have changed if it's in a teleport
          h(De.el),
          // anchor may have changed if it's in a fragment
          ht(De),
          c,
          v,
          p
        ), O.el = pe.el, ne === null && Ml(c, pe.el), j && be(j, v), (fe = O.props && O.props.onVnodeUpdated) && be(
          () => Be(fe, q, O, ee),
          v
        );
      } else {
        let O;
        const { el: M, props: j } = d, { bm: q, m: ee, parent: ne, root: fe, type: pe } = c, De = qt(d);
        mt(c, !1), q && Gn(q), !De && (O = j && j.onVnodeBeforeMount) && Be(O, ne, d), mt(c, !0);
        {
          fe.ce && fe.ce._hasShadowRoot() && fe.ce._injectChildStyle(
            pe,
            c.parent ? c.parent.type : void 0
          );
          const Ve = c.subTree = go(c);
          S(
            null,
            Ve,
            g,
            y,
            c,
            v,
            p
          ), d.el = Ve.el;
        }
        if (ee && be(ee, v), !De && (O = j && j.onVnodeMounted)) {
          const Ve = d;
          be(
            () => Be(O, ne, Ve),
            v
          );
        }
        (d.shapeFlag & 256 || ne && qt(ne.vnode) && ne.vnode.shapeFlag & 256) && c.a && be(c.a, v), c.isMounted = !0, d = g = y = null;
      }
    };
    c.scope.on();
    const C = c.effect = new $o(w);
    c.scope.off();
    const A = c.update = C.run.bind(C), F = c.job = C.runIfDirty.bind(C);
    F.i = c, F.id = c.uid, C.scheduler = () => Fs(F), mt(c, !0), A();
  }, oe = (c, d, g) => {
    d.component = c;
    const y = c.vnode.props;
    c.vnode = d, c.next = null, Nl(c, d.props, y, g), Bl(c, d.children, g), ot(), so(c), it();
  }, X = (c, d, g, y, v, p, m, w, C = !1) => {
    const A = c && c.children, F = c ? c.shapeFlag : 0, O = d.children, { patchFlag: M, shapeFlag: j } = d;
    if (M > 0) {
      if (M & 128) {
        St(
          A,
          O,
          g,
          y,
          v,
          p,
          m,
          w,
          C
        );
        return;
      } else if (M & 256) {
        Oe(
          A,
          O,
          g,
          y,
          v,
          p,
          m,
          w,
          C
        );
        return;
      }
    }
    j & 8 ? (F & 16 && dt(A, v, p), O !== A && f(g, O)) : F & 16 ? j & 16 ? St(
      A,
      O,
      g,
      y,
      v,
      p,
      m,
      w,
      C
    ) : dt(A, v, p, !0) : (F & 8 && f(g, ""), j & 16 && U(
      O,
      g,
      y,
      v,
      p,
      m,
      w,
      C
    ));
  }, Oe = (c, d, g, y, v, p, m, w, C) => {
    c = c || Et, d = d || Et;
    const A = c.length, F = d.length, O = Math.min(A, F);
    let M;
    for (M = 0; M < O; M++) {
      const j = d[M] = C ? et(d[M]) : Ke(d[M]);
      S(
        c[M],
        j,
        g,
        null,
        v,
        p,
        m,
        w,
        C
      );
    }
    A > F ? dt(
      c,
      v,
      p,
      !0,
      !1,
      O
    ) : U(
      d,
      g,
      y,
      v,
      p,
      m,
      w,
      C,
      O
    );
  }, St = (c, d, g, y, v, p, m, w, C) => {
    let A = 0;
    const F = d.length;
    let O = c.length - 1, M = F - 1;
    for (; A <= O && A <= M; ) {
      const j = c[A], q = d[A] = C ? et(d[A]) : Ke(d[A]);
      if (yt(j, q))
        S(
          j,
          q,
          g,
          null,
          v,
          p,
          m,
          w,
          C
        );
      else
        break;
      A++;
    }
    for (; A <= O && A <= M; ) {
      const j = c[O], q = d[M] = C ? et(d[M]) : Ke(d[M]);
      if (yt(j, q))
        S(
          j,
          q,
          g,
          null,
          v,
          p,
          m,
          w,
          C
        );
      else
        break;
      O--, M--;
    }
    if (A > O) {
      if (A <= M) {
        const j = M + 1, q = j < F ? d[j].el : y;
        for (; A <= M; )
          S(
            null,
            d[A] = C ? et(d[A]) : Ke(d[A]),
            g,
            q,
            v,
            p,
            m,
            w,
            C
          ), A++;
      }
    } else if (A > M)
      for (; A <= O; )
        he(c[A], v, p, !0), A++;
    else {
      const j = A, q = A, ee = /* @__PURE__ */ new Map();
      for (A = q; A <= M; A++) {
        const Te = d[A] = C ? et(d[A]) : Ke(d[A]);
        Te.key != null && ee.set(Te.key, A);
      }
      let ne, fe = 0;
      const pe = M - q + 1;
      let De = !1, Ve = 0;
      const Mt = new Array(pe);
      for (A = 0; A < pe; A++) Mt[A] = 0;
      for (A = j; A <= O; A++) {
        const Te = c[A];
        if (fe >= pe) {
          he(Te, v, p, !0);
          continue;
        }
        let je;
        if (Te.key != null)
          je = ee.get(Te.key);
        else
          for (ne = q; ne <= M; ne++)
            if (Mt[ne - q] === 0 && yt(Te, d[ne])) {
              je = ne;
              break;
            }
        je === void 0 ? he(Te, v, p, !0) : (Mt[je - q] = A + 1, je >= Ve ? Ve = je : De = !0, S(
          Te,
          d[je],
          g,
          null,
          v,
          p,
          m,
          w,
          C
        ), fe++);
      }
      const Zs = De ? Kl(Mt) : Et;
      for (ne = Zs.length - 1, A = pe - 1; A >= 0; A--) {
        const Te = q + A, je = d[Te], Xs = d[Te + 1], Ys = Te + 1 < F ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Xs.el || qi(Xs)
        ) : y;
        Mt[A] === 0 ? S(
          null,
          je,
          g,
          Ys,
          v,
          p,
          m,
          w,
          C
        ) : De && (ne < 0 || A !== Zs[ne] ? Xe(je, g, Ys, 2) : ne--);
      }
    }
  }, Xe = (c, d, g, y, v = null) => {
    const { el: p, type: m, transition: w, children: C, shapeFlag: A } = c;
    if (A & 6) {
      Xe(c.component.subTree, d, g, y);
      return;
    }
    if (A & 128) {
      c.suspense.move(d, g, y);
      return;
    }
    if (A & 64) {
      m.move(c, d, g, pt);
      return;
    }
    if (m === Ce) {
      s(p, d, g);
      for (let O = 0; O < C.length; O++)
        Xe(C[O], d, g, y);
      s(c.anchor, d, g);
      return;
    }
    if (m === ts) {
      P(c, d, g);
      return;
    }
    if (y !== 2 && A & 1 && w)
      if (y === 0)
        w.beforeEnter(p), s(p, d, g), be(() => w.enter(p), v);
      else {
        const { leave: O, delayLeave: M, afterLeave: j } = w, q = () => {
          c.ctx.isUnmounted ? o(p) : s(p, d, g);
        }, ee = () => {
          p._isLeaving && p[ze](
            !0
            /* cancelled */
          ), O(p, () => {
            q(), j && j();
          });
        };
        M ? M(p, q, ee) : ee();
      }
    else
      s(p, d, g);
  }, he = (c, d, g, y = !1, v = !1) => {
    const {
      type: p,
      props: m,
      ref: w,
      children: C,
      dynamicChildren: A,
      shapeFlag: F,
      patchFlag: O,
      dirs: M,
      cacheIndex: j,
      memo: q
    } = c;
    if (O === -2 && (v = !1), w != null && (ot(), Kt(w, null, g, c, !0), it()), j != null && (d.renderCache[j] = void 0), F & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const ee = F & 1 && M, ne = !qt(c);
    let fe;
    if (ne && (fe = m && m.onVnodeBeforeUnmount) && Be(fe, d, c), F & 6)
      Kn(c.component, g, y);
    else {
      if (F & 128) {
        c.suspense.unmount(g, y);
        return;
      }
      ee && gt(c, null, d, "beforeUnmount"), F & 64 ? c.type.remove(
        c,
        d,
        g,
        pt,
        y
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (p !== Ce || O > 0 && O & 64) ? dt(
        A,
        d,
        g,
        !1,
        !0
      ) : (p === Ce && O & 384 || !v && F & 16) && dt(C, d, g), y && wt(c);
    }
    const pe = q != null && j == null;
    (ne && (fe = m && m.onVnodeUnmounted) || ee || pe) && be(() => {
      fe && Be(fe, d, c), ee && gt(c, null, d, "unmounted"), pe && (c.el = null);
    }, g);
  }, wt = (c) => {
    const { type: d, el: g, anchor: y, transition: v } = c;
    if (d === Ce) {
      Wn(g, y);
      return;
    }
    if (d === ts) {
      x(c);
      return;
    }
    const p = () => {
      o(g), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (c.shapeFlag & 1 && v && !v.persisted) {
      const { leave: m, delayLeave: w } = v, C = () => m(g, p);
      w ? w(c.el, p, C) : C();
    } else
      p();
  }, Wn = (c, d) => {
    let g;
    for (; c !== d; )
      g = b(c), o(c), c = g;
    o(d);
  }, Kn = (c, d, g) => {
    const { bum: y, scope: v, job: p, subTree: m, um: w, m: C, a: A } = c;
    vo(C), vo(A), y && Gn(y), v.stop(), p && (p.flags |= 8, he(m, c, d, g)), w && be(w, d), be(() => {
      c.isUnmounted = !0;
    }, d);
  }, dt = (c, d, g, y = !1, v = !1, p = 0) => {
    for (let m = p; m < c.length; m++)
      he(c[m], d, g, y, v);
  }, ht = (c) => {
    if (c.shapeFlag & 6)
      return ht(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = b(c.anchor || c.el), g = d && d[xi];
    return g ? b(g) : d;
  };
  let Ct = !1;
  const an = (c, d, g) => {
    let y;
    c == null ? d._vnode && (he(d._vnode, null, null, !0), y = d._vnode.component) : S(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = c, Ct || (Ct = !0, so(y), mi(), Ct = !1);
  }, pt = {
    p: S,
    um: he,
    m: Xe,
    r: wt,
    mt: ie,
    mc: U,
    pc: X,
    pbc: K,
    n: ht,
    o: e
  };
  return {
    render: an,
    hydrate: void 0,
    createApp: El(an)
  };
}
function es({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function mt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Us(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (V(s) && V(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = et(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && Us(r, l)), l.type === Bn && (l.patchFlag === -1 && (l = o[i] = et(l)), l.el = r.el), l.type === Se && !l.el && (l.el = r.el);
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
const Ce = /* @__PURE__ */ Symbol.for("v-fgt"), Bn = /* @__PURE__ */ Symbol.for("v-txt"), Se = /* @__PURE__ */ Symbol.for("v-cmt"), ts = /* @__PURE__ */ Symbol.for("v-stc"), Jt = [];
let Ee = null;
function Y(e = !1) {
  Jt.push(Ee = e ? null : []);
}
function Gl() {
  Jt.pop(), Ee = Jt[Jt.length - 1] || null;
}
let tn = 1;
function xn(e, t = !1) {
  tn += e, e < 0 && Ee && t && (Ee.hasOnce = !0);
}
function Ji(e) {
  return e.dynamicChildren = tn > 0 ? Ee || Et : null, Gl(), tn > 0 && Ee && Ee.push(e), e;
}
function ge(e, t, n, s, o, i) {
  return Ji(
    N(
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
function Sn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function yt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zi = ({ key: e }) => e ?? null, pn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ce(e) || /* @__PURE__ */ me(e) || B(e) ? { i: ke, r: e, k: t, f: !!n } : e : null);
function N(e, t = null, n = null, s = 0, o = null, i = e === Ce ? 0 : 1, r = !1, l = !1) {
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
    ctx: ke
  };
  return l ? (zs(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ce(n) ? 8 : 16), tn > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ee.push(a), a;
}
const $ = Jl;
function Jl(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === _l) && (e = Se), Sn(e)) {
    const l = ut(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && zs(l, n), tn > 0 && !i && Ee && (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)), l.patchFlag = -2, l;
  }
  if (ia(e) && (e = e.__vccOpts), t) {
    t = Zl(t);
    let { class: l, style: a } = t;
    l && !ce(l) && (t.class = st(l)), Q(a) && (/* @__PURE__ */ Ls(a) && !V(a) && (a = re({}, a)), t.style = Hn(a));
  }
  const r = ce(e) ? 1 : Gi(e) ? 128 : Si(e) ? 64 : Q(e) ? 4 : B(e) ? 2 : 0;
  return N(
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
function ut(e, t, n = !1, s = !1) {
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
    patchFlag: t && e.type !== Ce ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && ut(e.ssContent),
    ssFallback: e.ssFallback && ut(e.ssFallback),
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
function Zt(e = " ", t = 0) {
  return $(Bn, null, e, t);
}
function He(e = "", t = !1) {
  return t ? (Y(), Re(Se, null, e)) : $(Se, null, e);
}
function Ke(e) {
  return e == null || typeof e == "boolean" ? $(Se) : V(e) ? $(
    Ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Sn(e) ? et(e) : $(Bn, null, String(e));
}
function et(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ut(e);
}
function zs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (V(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), zs(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Vi(t) ? t._ctx = ke : o === 3 && ke && (ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else B(t) ? (t = { default: t, _ctx: ke }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Zt(t)]) : n = 8);
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
        t.style = Hn([t.style, s.style]);
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
let _e = null;
const Ws = () => _e || ke;
let wn, ys;
{
  const e = Ln(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  wn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => _e = n
  ), ys = t(
    "__VUE_SSR_SETTERS__",
    (n) => nn = n
  );
}
const ln = (e) => {
  const t = _e;
  return wn(e), e.scope.on(), () => {
    e.scope.off(), wn(t);
  };
}, _o = () => {
  _e && _e.scope.off(), wn(null);
};
function Xi(e) {
  return e.vnode.shapeFlag & 4;
}
let nn = !1;
function ea(e, t = !1, n = !1) {
  t && ys(t);
  const { props: s, children: o } = e.vnode, i = Xi(e);
  Fl(e, s, i, t), jl(e, o, n || t);
  const r = i ? ta(e, t) : void 0;
  return t && ys(!1), r;
}
function ta(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Al);
  const { setup: s } = n;
  if (s) {
    ot();
    const o = e.setupContext = s.length > 1 ? sa(e) : null, i = ln(e), r = rn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = Go(r);
    if (it(), i(), (l || e.sp) && !qt(e) && Oi(e), l) {
      if (r.then(_o, _o), t)
        return r.then((a) => {
          yo(e, a);
        }).catch((a) => {
          Fn(a, e, 0);
        });
      e.asyncDep = r;
    } else
      yo(e, r);
  } else
    Yi(e);
}
function yo(e, t, n) {
  B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) && (e.setupState = hi(t)), Yi(e);
}
function Yi(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Je);
  {
    const o = ln(e);
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
    return ve(e, "get", ""), e[t];
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
function Un(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hi(Br(e.exposed)), {
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
function oa(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ia(e) {
  return B(e) && "__vccOpts" in e;
}
const ue = (e, t) => /* @__PURE__ */ qr(e, t, nn);
function ra(e, t, n) {
  try {
    xn(-1);
    const s = arguments.length;
    return s === 2 ? Q(t) && !V(t) ? Sn(t) ? $(e, null, [t]) : $(e, t) : $(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Sn(n) && (n = [n]), $(e, t, n));
  } finally {
    xn(1);
  }
}
const la = "3.5.31";
let As;
const Ao = typeof window < "u" && window.trustedTypes;
if (Ao)
  try {
    As = /* @__PURE__ */ Ao.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Qi = As ? (e) => As.createHTML(e) : (e) => e, aa = "http://www.w3.org/2000/svg", ca = "http://www.w3.org/1998/Math/MathML", $e = typeof document < "u" ? document : null, xo = $e && /* @__PURE__ */ $e.createElement("template"), fa = {
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
}, at = "transition", Dt = "animation", sn = /* @__PURE__ */ Symbol("_vtc"), $i = {
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
}, So = (e) => e ? V(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
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
    leaveToClass: _ = `${n}-leave-to`
  } = e, E = ga(o), S = E && E[0], I = E && E[1], {
    onBeforeEnter: L,
    onEnter: R,
    onEnterCancelled: P,
    onLeave: x,
    onLeaveCancelled: T,
    onBeforeAppear: z = L,
    onAppear: W = R,
    onAppearCancelled: U = P
  } = t, H = (k, G, ie, Pe) => {
    k._enterCancelled = Pe, vt(k, G ? f : l), vt(k, G ? u : r), ie && ie();
  }, K = (k, G) => {
    k._isLeaving = !1, vt(k, h), vt(k, _), vt(k, b), G && G();
  }, D = (k) => (G, ie) => {
    const Pe = k ? W : R, le = () => H(G, k, ie);
    bt(Pe, [G, le]), wo(() => {
      vt(G, k ? a : i), Qe(G, k ? f : l), So(Pe) || Co(G, s, S, le);
    });
  };
  return re(t, {
    onBeforeEnter(k) {
      bt(L, [k]), Qe(k, i), Qe(k, r);
    },
    onBeforeAppear(k) {
      bt(z, [k]), Qe(k, a), Qe(k, u);
    },
    onEnter: D(!1),
    onAppear: D(!0),
    onLeave(k, G) {
      k._isLeaving = !0;
      const ie = () => K(k, G);
      Qe(k, h), k._enterCancelled ? (Qe(k, b), Eo(k)) : (Eo(k), Qe(k, b)), wo(() => {
        k._isLeaving && (vt(k, h), Qe(k, _), So(x) || Co(k, s, I, ie));
      }), bt(x, [k, ie]);
    },
    onEnterCancelled(k) {
      H(k, !1, void 0, !0), bt(P, [k]);
    },
    onAppearCancelled(k) {
      H(k, !0, void 0, !0), bt(U, [k]);
    },
    onLeaveCancelled(k) {
      K(k), bt(T, [k]);
    }
  });
}
function ga(e) {
  if (e == null)
    return null;
  if (Q(e))
    return [ns(e.enter), ns(e.leave)];
  {
    const t = ns(e);
    return [t, t];
  }
}
function ns(e) {
  return ls(e);
}
function Qe(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[sn] || (e[sn] = /* @__PURE__ */ new Set())).add(t);
}
function vt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[sn];
  n && (n.delete(t), n.size || (e[sn] = void 0));
}
function wo(e) {
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
  }, b = (_) => {
    _.target === e && ++f >= a && h();
  };
  setTimeout(() => {
    f < a && h();
  }, l + 1), e.addEventListener(u, b);
}
function ba(e, t) {
  const n = window.getComputedStyle(e), s = (E) => (n[E] || "").split(", "), o = s(`${at}Delay`), i = s(`${at}Duration`), r = To(o, i), l = s(`${Dt}Delay`), a = s(`${Dt}Duration`), u = To(l, a);
  let f = null, h = 0, b = 0;
  t === at ? r > 0 && (f = at, h = r, b = i.length) : t === Dt ? u > 0 && (f = Dt, h = u, b = a.length) : (h = Math.max(r, u), f = h > 0 ? r > u ? at : Dt : null, b = f ? f === at ? i.length : a.length : 0);
  const _ = f === at && /\b(?:transform|all)(?:,|$)/.test(
    s(`${at}Property`).toString()
  );
  return {
    type: f,
    timeout: h,
    propCount: b,
    hasTransform: _
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
  const s = e[sn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Cn = /* @__PURE__ */ Symbol("_vod"), er = /* @__PURE__ */ Symbol("_vsh"), Tn = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Cn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Vt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Vt(e, !0), s.enter(e)) : s.leave(e, () => {
      Vt(e, !1);
    }) : Vt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Vt(e, t);
  }
};
function Vt(e, t) {
  e.style.display = t ? e[Cn] : "none", e[er] = !t;
}
const _a = /* @__PURE__ */ Symbol(""), ya = /(?:^|;)\s*display\s*:/;
function Aa(e, t, n) {
  const s = e.style, o = ce(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (ce(t))
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
const Oo = ["Webkit", "Moz", "ms"], ss = {};
function xa(e, t) {
  const n = ss[t];
  if (n)
    return n;
  let s = de(t);
  if (s !== "filter" && s in e)
    return ss[t] = s;
  s = Rn(s);
  for (let o = 0; o < Oo.length; o++) {
    const i = Oo[o] + s;
    if (i in e)
      return ss[t] = i;
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
function Sa(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function wa(e, t, n, s) {
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
      Sa(e, l, u, a);
    } else r && (wa(e, l, r, a), i[t] = void 0);
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
let os = 0;
const ka = /* @__PURE__ */ Promise.resolve(), Ea = () => os || (ka.then(() => os = 0), os = Date.now());
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
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ce(s))) ? Lo(e, de(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ro(e, t, s, r));
};
function Ra(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fo(t) && B(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Fo(t) && ce(n) ? !1 : t in e;
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
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = ls(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[de(a)] = !0);
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
    n && this._numberProps && this._numberProps[o] && (s = ls(s)), this._setProp(o, s, !1, !0);
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
  return Do || (Do = Ul(Fa));
}
const Na = ((...e) => {
  tr().render(...e);
}), Vo = ((...e) => {
  const t = tr().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Va(s);
    if (!o) return;
    const i = t._component;
    !B(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
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
  return ce(e) ? document.querySelector(e) : e;
}
const nr = /* @__PURE__ */ Symbol("voiceState");
function ja() {
  const e = /* @__PURE__ */ Mn({
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
  const e = Rt(nr);
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
function Ua(e, t, n, s) {
  let o = null, i = null, r = [], l = -1;
  const a = () => window.innerWidth < 768 ? 75 : 60, { setStage: u, toggleListening: f, togglePopupState: h } = n, b = () => no(t), _ = () => {
    const P = b();
    P.instructions && (o = document.querySelector(P.instructions)), P.ingredients && (i = document.querySelector(P.ingredients)), P.steps && (r = Array.from(document.querySelectorAll(P.steps)));
  }, E = sr(_, 300), S = new MutationObserver(E);
  S.observe(document.body, { childList: !0, subtree: !0 }), /* @__PURE__ */ me(t) && xt(t, () => {
    o = null, i = null, r = [], _();
  });
  const I = (P) => {
    const x = a(), T = P.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: T - x,
      behavior: "smooth"
    });
  }, L = () => {
    r.length > 0 && r[l] && I(r[l]), r.length === l + 1 ? (u("listening", "almost-done"), h(!0)) : (u("listening"), h(!1));
  };
  return { commands: ue(() => {
    const P = no(e);
    if (!P) return {};
    const x = {}, T = (z, W) => {
      z && z.forEach((U) => {
        x[U] = W;
      });
    };
    return T(P.help, () => {
      u("listening", "help"), h(!0), s("handsfree-command", { command: "help" });
    }), T(P.scrollUp, () => {
      window.scrollBy({ top: -jo, behavior: "smooth" }), s("handsfree-command", { command: "scroll up" });
    }), T(P.scrollDown, () => {
      window.scrollBy({ top: jo, behavior: "smooth" }), s("handsfree-command", { command: "scroll down" });
    }), T(P.exit, () => {
      u("listening"), s("handsfree-command", { command: "exit" });
    }), T(P.goToInstructions, () => {
      o || _(), o && (I(o), s("handsfree-command", { command: "go to instructions" })), u("listening"), h(!1);
    }), T(P.goToIngredients, () => {
      i || _(), i && (I(i), s("handsfree-command", { command: "go to ingredients" })), u("listening"), h(!1);
    }), T(P.nextStep, () => {
      r.length === 0 && _(), l < r.length - 1 && (l += 1, L(), s("handsfree-command", { command: "next step" }));
    }), T(P.previousStep, () => {
      r.length === 0 && _(), l > 0 && (l -= 1, L(), s("handsfree-command", { command: "previous step" }));
    }), T(P.letsCook, () => {
      f(!0), u("listening"), h(!1), s("handsfree-command", { command: "let's cook" });
    }), T(P.imDone, () => {
      s("handsfree-command", { command: "i'm done" });
    }), x;
  }), destroy: () => S.disconnect() };
}
function za(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var is, Bo;
function Wa() {
  if (Bo) return is;
  Bo = 1, is = e;
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
  }, e.mixin(e), is;
}
var rs, Uo;
function Ka() {
  if (Uo) return rs;
  Uo = 1;
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
  return rs = function(o, l) {
    var r = new e();
    if (!n) return r;
    var l = l || {}, a = l.smoothing || 0.1, u = l.interval || 50, f = l.threshold, h = l.play, b = l.history || 10, _ = !0;
    s = l.audioContext || s || new n();
    var E, S, I;
    I = s.createAnalyser(), I.fftSize = 512, I.smoothingTimeConstant = a, S = new Float32Array(I.frequencyBinCount), o.jquery && (o = o[0]), o instanceof HTMLAudioElement || o instanceof HTMLVideoElement ? (E = s.createMediaElementSource(o), typeof h > "u" && (h = !0), f = f || -50) : (E = s.createMediaStreamSource(o), f = f || -50), E.connect(I), h && I.connect(s.destination), r.speaking = !1, r.suspend = function() {
      return s.suspend();
    }, r.resume = function() {
      return s.resume();
    }, Object.defineProperty(r, "state", { get: function() {
      return s.state;
    } }), s.onstatechange = function() {
      r.emit("state_change", s.state);
    }, r.setThreshold = function(P) {
      f = P;
    }, r.setInterval = function(P) {
      u = P;
    }, r.stop = function() {
      _ = !1, r.emit("volume_change", -100, f), r.speaking && (r.speaking = !1, r.emit("stopped_speaking")), I.disconnect(), E.disconnect();
    }, r.speakingHistory = [];
    for (var L = 0; L < b; L++)
      r.speakingHistory.push(0);
    var R = function() {
      setTimeout(function() {
        if (_) {
          var P = t(I, S);
          r.emit("volume_change", P, f);
          var x = 0;
          if (P > f && !r.speaking) {
            for (var T = r.speakingHistory.length - 3; T < r.speakingHistory.length; T++)
              x += r.speakingHistory[T];
            x >= 2 && (r.speaking = !0, r.emit("speaking"));
          } else if (P < f && r.speaking) {
            for (var T = 0; T < r.speakingHistory.length; T++)
              x += r.speakingHistory[T];
            x == 0 && (r.speaking = !1, r.emit("stopped_speaking"));
          }
          r.speakingHistory.shift(), r.speakingHistory.push(0 + (P > f)), R();
        }
      }, u);
    };
    return R(), r;
  }, rs;
}
var qa = Ka();
const Ga = /* @__PURE__ */ za(qa);
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
  function u(D = {}) {
    r({ ...rr, ...D });
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
  function _() {
    u({ status: "starting" }), l(0);
    try {
      t.start(), a = 0;
    } catch (D) {
      console.error(D);
    }
  }
  function E() {
    if (a >= Xa) {
      console.warn("[HandsfreeCooking] Max restart retries reached");
      return;
    }
    a += 1, setTimeout(_, 100);
  }
  function S() {
    e && e.stop(), l(0);
  }
  function I() {
    f(), u(), l(0), i || E();
  }
  function L() {
    u({ status: "recording" }), l(0);
  }
  function R(D, k) {
    clearTimeout(n), k || (n = setTimeout(() => {
      u({
        finalTranscriptions: !0,
        status: "recording",
        transcriptions: D
      }), h();
    }, Za));
  }
  function P(D) {
    if (!D || !D.results) return;
    const k = D.results[D.resultIndex], G = Object.values(k).map((ie) => ({
      confidence: ie.confidence,
      text: ie.transcript
    }));
    u({
      finalTranscriptions: k.isFinal,
      status: "recording",
      transcriptions: G
    }), R(G, k.isFinal);
  }
  function x(D) {
    u({ error: D.error, status: "error" }), l(0);
  }
  function T() {
    o || h();
  }
  function z() {
    e = new or({
      onSpeaking: () => {
        o = !0;
      },
      onStopSpeaking: () => {
        o = !1, clearTimeout(s), s = setTimeout(T, Ja);
      },
      onVolumeChange: (D) => {
        l(D);
      }
    }), l(0), e.start();
  }
  function W({ lang: D, interimResults: k, maxAlternatives: G }) {
    const ie = window.SpeechRecognition || window.webkitSpeechRecognition;
    t = new ie(), t.continuous = !0, t.lang = D, t.interimResults = k, t.maxAlternatives = G, t.onstart = L, t.onresult = P, t.onerror = x, t.onend = I;
  }
  function U(D) {
    const k = { ...ir, ...D };
    r = D.onUserSpeech, l = D.onUserSpeak || (() => {
    }), W(k);
  }
  function H() {
    i = !1, a = 0, !kn() && l && z(), r && _();
  }
  function K() {
    i = !0, f(), !kn() && l && S(), r && b();
  }
  return { init: U, start: H, stop: K };
}
function Qa() {
  let e, t, n = !1, s, o, i;
  function r(x = {}) {
    s({ ...rr, ...x });
  }
  function l() {
    r({ status: "recording" });
  }
  function a() {
    o(0), e && e.stop();
  }
  function u() {
    e = new or({
      onVolumeChange: (x) => {
        o(x);
      }
    }), e.start(), o(0);
  }
  function f(x, T) {
    clearTimeout(i), T || (i = setTimeout(() => {
      r({
        finalTranscriptions: !0,
        transcriptions: x
      });
    }, 2e3));
  }
  function h() {
    n = !1, clearTimeout(i), r();
  }
  function b(x) {
    if (!x || !x.results) return;
    const T = x.results[x.resultIndex], z = Object.values(T).map((W) => ({
      confidence: W.confidence,
      text: W.transcript
    }));
    r({
      finalTranscriptions: T.isFinal,
      status: "recording",
      transcriptions: z
    }), f(z, T.isFinal);
  }
  function _() {
    n = !1, clearTimeout(i), r();
  }
  function E(x) {
    r({ error: x.error, status: "error" });
  }
  function S() {
    if (!n) {
      r({ status: "starting" });
      try {
        t.start(), n = !0;
      } catch (x) {
        console.error(x);
      }
    }
  }
  function I({ lang: x, interimResults: T, maxAlternatives: z }) {
    const W = window.SpeechRecognition || window.webkitSpeechRecognition;
    t = new W(), t.continuous = !1, t.lang = x, t.interimResults = T, t.maxAlternatives = z, t.onstart = l, t.onresult = b, t.onerror = E, t.onend = _;
  }
  function L(x) {
    const T = { ...ir, ...x };
    I(T), s = x.onUserSpeech, o = x.onUserSpeak || (() => {
    });
  }
  function R() {
    !kn() && o && u(), s && S();
  }
  function P() {
    !kn() && o && a(), s && h();
  }
  return { init: L, start: R, stop: P };
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
function zo(e) {
  return e.toLowerCase().replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, "").replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, "").replace(/\s+/g, " ").replace(/[.,!?;:。，！？；：．]+$/g, "").trim().normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "").normalize("NFC").trim();
}
function Wo(e, t) {
  const n = zo(e), s = [];
  for (const o of t) {
    const i = zo(o);
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
}, Ht = (e, t) => {
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
  return Y(), ge("span", {
    class: st(["hf-icon", s.cssClass]),
    innerHTML: s.svgContent
  }, null, 10, oc);
}
const zn = /* @__PURE__ */ Ht(sc, [["render", ic]]), rc = {
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
  return Y(), ge("button", {
    class: "hf-headline",
    "aria-label": n.title + " - " + (n.isCloseState ? "Close" : "Toggle"),
    onClick: t[0] || (t[0] = (...l) => s.togglePopup && s.togglePopup(...l))
  }, [
    $(r, {
      icon: "mic",
      size: 24
    }),
    N("span", ac, ae(n.title), 1),
    N("span", cc, [
      n.isLoading ? (Y(), ge("span", fc, [...t[1] || (t[1] = [
        N("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          N("circle", {
            cx: "8",
            cy: "8",
            r: "7",
            "stroke-width": "2"
          })
        ], -1)
      ])])) : (Y(), Re(r, {
        key: 1,
        icon: s.icon,
        size: 24
      }, null, 8, ["icon"]))
    ])
  ], 8, lc);
}
const Gs = /* @__PURE__ */ Ht(rc, [["render", uc]]), dc = {
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
  return Y(), ge(Ce, null, [
    $(r, {
      class: st(n.additionalClassname),
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": n.isCloseState,
      onTogglePopup: s.togglePopup
    }, null, 8, ["class", "title", "is-loading", "is-close-state", "onTogglePopup"]),
    _n(N("div", hc, [
      N("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, pc),
      n.translations.buttonText ? (Y(), ge("button", {
        key: 0,
        class: "hf-button",
        onClick: t[0] || (t[0] = (...l) => s.buttonAction && s.buttonAction(...l))
      }, ae(n.translations.buttonText), 1)) : He("", !0)
    ], 512), [
      [Tn, n.translations.content && n.translations.content !== "" && s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const mc = /* @__PURE__ */ Ht(dc, [["render", gc]]), bc = {
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
    const n = qs(), s = /* @__PURE__ */ Ae(0), o = ue(() => e.isCloseState && !n.state.isListening);
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
}, Ac = ["innerHTML"], xc = { class: "hf-introduction-buttons" }, Sc = ["disabled"];
function wc(e, t, n, s, o, i) {
  const r = Ge("PopupHeadline"), l = Ge("HfIcon");
  return Y(), ge(Ce, null, [
    $(r, {
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": s.isClose,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "is-loading", "is-close-state", "onTogglePopup"]),
    _n(N("div", vc, [
      s.voiceState.state.isListening ? He("", !0) : (Y(), ge("div", {
        key: 0,
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, _c)),
      s.voiceState.state.isListening ? (Y(), ge("div", yc, [
        N("div", {
          class: "hf-step",
          innerHTML: n.translations.steps[s.currentStep]
        }, null, 8, Ac),
        N("div", xc, [
          N("button", {
            class: "hf-button",
            "aria-label": "Previous step",
            disabled: s.currentStep < 1,
            onClick: t[0] || (t[0] = (...a) => s.goToPrevStep && s.goToPrevStep(...a))
          }, [
            $(l, {
              icon: "chevron--left",
              size: 24
            })
          ], 8, Sc),
          N("button", {
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
      s.voiceState.state.isListening ? He("", !0) : (Y(), ge("button", {
        key: 2,
        class: "hf-button",
        onClick: t[2] || (t[2] = (...a) => s.beginListening && s.beginListening(...a))
      }, ae(n.translations.buttonText), 1))
    ], 512), [
      [Tn, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const Cc = /* @__PURE__ */ Ht(bc, [["render", wc]]), Tc = {
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
    const n = qs(), s = Rt("emitEvent"), o = /* @__PURE__ */ Ae(null), i = /* @__PURE__ */ Ae(null), r = /* @__PURE__ */ Ae(null), l = () => {
      t("closeHandsFreeFlow"), s("handsfree-feedback", { vote: "close", text: e.translations.buttonText });
    }, a = () => {
      t("togglePopup");
    }, u = /* @__PURE__ */ Ae(!1), f = /* @__PURE__ */ Ae(!1), h = () => {
      u.value = !0, s("handsfree-feedback", { vote: "up", text: e.translations.voteUp });
    }, b = () => {
      u.value = !0, s("handsfree-feedback", { vote: "down", text: e.translations.voteDown });
    }, _ = () => {
      Ms(() => {
        const S = i.value, I = r.value, L = o.value;
        if (!L || !S || !I)
          return;
        const R = S.offsetWidth + I.offsetWidth, P = L.offsetWidth;
        f.value = R > P;
      });
    }, E = sr(_, 200);
    return Vn(() => {
      _(), window.addEventListener("resize", E);
    }), Ds(() => {
      window.removeEventListener("resize", E);
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
  return Y(), ge(Ce, null, [
    $(r, {
      title: n.translations.title,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "onTogglePopup"]),
    _n(N("div", kc, [
      N("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, Ec),
      N("div", {
        ref: "handsFreeVotes",
        class: st(["hf-vote", { "hf-vote--stack": s.isStacked }])
      }, [
        s.voted ? He("", !0) : (Y(), ge("button", {
          key: 0,
          ref: "voteUp",
          class: "hf-button",
          onClick: t[0] || (t[0] = (...a) => s.votedUp && s.votedUp(...a))
        }, [
          $(l, {
            icon: "thumbs-up",
            size: 16
          }),
          N("span", null, ae(n.translations.voteUp), 1)
        ], 512)),
        s.voted ? He("", !0) : (Y(), ge("button", {
          key: 1,
          ref: "voteDown",
          class: "hf-button",
          onClick: t[1] || (t[1] = (...a) => s.votedDown && s.votedDown(...a))
        }, [
          $(l, {
            icon: "thumbs-down",
            size: 16
          }),
          N("span", null, ae(n.translations.voteDown), 1)
        ], 512)),
        _n(N("div", Pc, [
          $(l, {
            icon: "checkmark--outline",
            size: 16
          }),
          Zt(" " + ae(n.translations.successMessage), 1)
        ], 512), [
          [Tn, s.voted]
        ])
      ], 2),
      N("button", {
        class: "hf-button hf-button--solid",
        onClick: t[2] || (t[2] = (...a) => s.closeHandsFreeFlow && s.closeHandsFreeFlow(...a))
      }, ae(n.translations.buttonText), 1)
    ], 512), [
      [Tn, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const Ic = /* @__PURE__ */ Ht(Tc, [["render", Oc]]), Rc = ':host{--hf-color-bg: #ffffff;--hf-color-text: #000000;--hf-color-primary: #000000;--hf-color-primary-hover: #000000;--hf-color-error: #cc0033;--hf-color-border: #d9d9d9;--hf-spacing-xxs: 4px;--hf-spacing-xs: 8px;--hf-spacing-s: 16px;--hf-spacing-sm: 24px;--hf-spacing-m: 32px;--hf-font-family: inherit;--hf-font-size-base: 16px;--hf-font-size-small: 14px;--hf-font-size-large: 18px;--hf-popup-width: 410px;--hf-popup-shadow: 0 12px 24px 0 rgba(0, 0, 0, .2);--hf-z-index: 10000;display:block;font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);color:var(--hf-color-text);line-height:1.5}*,*:before,*:after{box-sizing:border-box}.hf-root{margin-bottom:var(--hf-spacing-m)}.hf-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.hf-intro-row{display:flex;align-items:center;margin-bottom:var(--hf-spacing-s)}.hf-intro-label{margin-right:var(--hf-spacing-xs);font-weight:600;text-transform:uppercase;font-size:var(--hf-font-size-base)}.hf-button{position:relative;display:inline-flex;align-items:center;padding:var(--hf-spacing-s) var(--hf-spacing-sm);border:1px solid var(--hf-color-primary);border-radius:0;background-color:transparent;color:var(--hf-color-primary);font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);font-weight:400;line-height:1;vertical-align:middle;text-decoration:none;cursor:pointer;transition:background-color .2s ease-out,color .2s ease-out}.hf-button .hf-icon{margin-inline-end:var(--hf-spacing-xs)}.hf-button:not(.hf-button--skin):hover{background-color:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button:not(.hf-button--skin):hover .hf-icon svg{fill:var(--hf-color-bg)}.hf-button:disabled{opacity:.4;cursor:default}.hf-button--solid{background-color:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button--solid:hover{background-color:var(--hf-color-bg);color:var(--hf-color-primary)}.hf-button--handsfree{padding:var(--hf-spacing-s) var(--hf-spacing-sm)}.hf-button--handsfree .hf-icon{margin-inline-end:var(--hf-spacing-xxs)}.hf-button--skin{aspect-ratio:394 / 116;padding:30px 0;justify-content:center;font-size:20px;border:0;color:#001f5a;background-color:transparent;background-image:var(--hf-button-skin-image, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYoAAAB0CAYAAACbkXXNAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAADklJREFUeJzt3WtQnNd9x/H/cltgl+WOAHHHAgQSCGRdbfmqOK2daRzP9EVqJdO8aDydOs1MXjSZpDN1U9d1OtNMm3ac9Paq08bOi3jsOpNOFDvuJJFjWchtHceSJQySQGJZLgu7LLvLRT3/sywCGT9CMmi5fD8zR+d5nt1lHjTs+T3nnOfikkXeeuutz6anp/+Jy+WqN3XW1atX001JEwDAppWWljZn2vqrc3NzGWY1asoznZ2dzyRfdyUXTp069eWMjIxjPp+vubKyMs/tdqdifwEAKTI9PS1+v18mJiZmTW5079q164But0FhQuJZkyifLC0tbamqqspOfsi80RYAwOZl2v8l66OjoxoYV2dmZt5sb28/5DIhcb/L5fp2bm5udUtLS7G+yXQ/ZGoqauqrdhkAsDmlp6ebf69KdrZbMjIyFrb39/fL5ORkNBKJfMPV3d39okmT+rq6uo6CggIbDJHIlOTkZM//AADAZpZs97Ozs01YJNr9WCwm586dk9nZ2UENitMmRUpbW1urNE0mJyM2WQgJANg6dJpB23+PJ1dcrsT09dmzZ3XeIqBB8d9ut7u2ra2tVt8YDkckL8+T4l0GANxu13cU+vr6tGfhd50+fdrOVnd2dtpEGR8PSUGBL6U7CwC4/UKhsOTk5CwMP505c0ZmZmbCBAUAwCIoAACOCAoAgCOCAgDgiKAAADgiKAAAjggKAIAjggIA4IigAAA4IigAAI4ICgCAI4ICAOCIoAAAOCIoAACOCAoAgCOCAgDgiKAAADgiKAAAjggKAIAjggIA4IigAAA4IigAAI4ICgCAI4ICAOCIoAAAOCIoAACOCAoAgCOCAgDgiKAAADgiKAAAjggKAIAjggIA4IigAAA4IigAAI4ICgCAI4ICAOCIoAAAOCIoAACOCAoAgCOCAgDgiKAAADgiKAAAjggKAIAjggIA4IigAAA4IigAAI4ICgCAI4ICAOCIoAAAOCIoAACOCAoAgCOCAgDgiKAAADgiKAAAjggKAIAjggIA4IigAAA4IigAAI4ICgCAI4ICAOCIoAAAOCIoAACOCAoAgCOCAgDgiKAAADgiKAAAjggKAIAjggIA4IigAAA4IigAAI4ICgCbTiQSkVgsZks8Hjd13NS6PG3XFy9PT8eXLE9Pz8wvTy8pum2t+Hw+8Xq94vF4bPF6tfbabT5f3vy2xHoqEBQA1q1oNGqKNvhRuxwOh01bNG7KhK0nJ8MyNRW1r2sYaEBsdiUlJfOlWIqLS6S0VEupDZO1QlAASAlt1BON/rgEg+MyMTFh6jG7HAwG7TpWLjc3V8rKSk1olEllZaXU1dXaAFkNBAWANaNDNskw8Pv9MjQUMGXIFu0hYG1peNTV1Ul9fZ00NjaaICm7pZ9DUAD4WDQERkZGJBAYltHRURsCuk17BDcTBllZWba43Vq7Te2eX3cvlOzsa9sS70m8VxuwjIwMSU/XOnPJur53tS2eA1m+xOeHzRIlMXQWW1ifnJxc9X1aCZ3jaGhokObmJlOazf9n9oo+R1AAuCENgLGxoA2EsbFRGwpjY2N2u/YarpeXl2dLcgL22oRsYluigc9aEgZJU9G4hCajEgpPSTgSs3VyXesJ3T5fh8Lz9WRi21R0WmJxLTPz9fxybNp+drX5vDmS5802de6iZVN7TJ2XKwW+XPHmZku+L0fyzXqiJJY9OZnikjmRubgJ1ZCEwyE7B6PLoVDIBu3Nhu3N0uGp5uYW6ehotxPqH4WgAGCPgoeHh20QaOOfDAYNBZ0zyMzMXHRGjteelaNBoEMbenaOLns8uQvbkoZGJmQwEJSh4Qm5MhS0y4OB8cQ281pwImIb+ERDH5Px0OafjF7O9vJC2b6tSLaV5ktFWcG1UlooZcXm/zc3XXKyXAtzOcPDATuMFwgElg3qW1FbWyO7d++2bf71vTCCAtgitOFPTBYHbYOjoZAcQtEhGj3q9/nyTWPvtUeXeXm++dM0PUsajoHBMfEPj5uGftzUEyYExmU0OCkD/lEbCPpaMgywumq3l0h1ZbEJlUKprSqRuqpSqS7Pl22FWRKbCsngoN+UQVtulQ7ZaWAcOXL3wpwGQQFsEtd6BaN2GEPP+5+ZmTVlWubmri4MAWkYaJ2fn297Ckk9F/xy2R+0Df5l/5ht7C9dHlnoCWgPYGw8NWPruLGSojxpvWO77DRld0u1bC/NlbKCTAmOjcjFixelv7//pn9mU1OTPPTQJ2yvkaAANqjLly/bempqSlyuNNsb0OGfxZOUF21jP2Yb/GQA9F9JhEEiFIKmRxBO1a+ANdZQUyZ7Wmula1ed1FX4pLwwXQJDg9Lb27viSfUnnvii6XVmSGVlhV1fNih+9NrbcldXI0EBrCN6lH9hYNgc9Y8uBEEyDK4EEsvDo6FU7ybWoab6CjnQ2Si7myqkdluOxCeHpaen5yPnO44dOybHj/9UKirK5VOfekT6+vo+HBTbDzwpb7/yTfnWP/5Yvvh7D0hzQ8Vt/aWArUiP8nsvBaSvP2Drxcta69lBwGooLy2Q+w7ulLbGEqktTZPenrNLblmSDAq/f1DKy8vl6NEHPxwUVQeflO6Xvynl+79kP3R4b5M8/uhh+dxjR+xpYABujTb2752/LOf6BuVc76Cc/eCKnDfLvzk3YE/7BFJhX0eDHNhdJTsqM2Toct+SoCgqKpKHH/7t5XsUp//zWlAs9vijd8mxz9wlv3Vvx23/ZYCNQk/77H6nV/7vzCV59/1+Gwrv916xw0PAenZ47w7517/6fXn9Z69J/6Xejw6K63sUy9ELSO4/1CoPHG41XZhWO+sObBU6TNQ/OGonibVcujIiPReGpPfSkJy/4GeuABvaa//xVfnK089Lkc8tD+7fLo89fPeHg6L60Jfk1Et/7hgU19NTtR443Ca/c7RLHr5/jxTmr92dDYHbQecFdPL4fJ9fPrg4ZHsEOl9wpueyTEZiqd49YM0kg+J/fnPBrr/03T8w34XR6E33KG5E5zUeeWCPPHRkt9zZ3rA6ew+sopGxsJ0reP+DK9JjgkDD4MJAQPouDdseArBVXR8U3//25+XPvvNjWfEcxa3werLlUNcOuWd/i9x1Z5NdznZn3viDwMegVwzbU0fnTyHVcs70DpLzBVxMBixvRUGxGj2KG+nYWSOtO6rshSHtO6vNeq291wmwEjr0kzxtNDlEpOs6X6AXlWkN4Nasm6BYjs5rdLbV2fBoa6qS9pZqhq22GJ0E1ltHJO4tZOrAuAyPhWyvQLdprRPGOmwEYG2s66D4KFUVRdJQXSZ11aW2rte6pszeIEtfw/qlDbo29MkA0BvLBUYSywEtoxOJ7fM3lwPWE0+uW/I8124nrrcQv97s3JxEpmISjU0vFL1eJllvRCsKils56ymVdtSXS70JDQ2S6opiKSv2SVmJz9alRaaYWu8Tj49Hh3uSjb6O72vDrkEwEgzbO4oGzPaRsWQIhGwIAKmk33u9ClmHtbUdKC/Nl5LCPDtvqo2+13MtCDw5Znn+2RL6ugbDatHbq2toLC3TZvvkku+Ufnd0Wb9L2nNO1XU3mzIoVkr/WGx4LARInhQXeCXX/IHokYPWudlZC0cRxYVee9qvfmYji9qHuCQe+hKORG2dXF/8gJjltun1Ask/ZP05wHqgDXldVYnUV8+PLJQX2YPDym2F9ju9rSR/04w26IkXff3DNjh0Hk4v5NSylidjbMihp/XAhoY5EtGQSU9LW/Y9WVkZNmhs4ORcq1fjDK94fEbi01pm7bI+ySuxPmOf6JV8PTIVX9TgT9kjGWCj0aN5DQB9BoM+k8Eu2zqxrAdwW532Nt45e8mGxnvnB+z1PWd7rqzKrWAICgDrhs43tjRW2mcqaK2lrWm7FJleAW6NBsivTYAc/8Wv5ZVX37YhcrNSch0FgK1L5wn0NtfNjRU2EHbUlds7UnPbn9tDLx596SfdJjjekdffeG9FPQ6CAsCa0R6BXiOlp7lrEOj1Ufp8aKwfv3r7vLx24l0bHif/t2fZ9zD0BGBVaCgc2NMoe3fXy4HOO2R/R2Oqdwk3Sc9MfPn4afn+yyfk1V++u7CdoABw0/QswYNdd9jb7+xrb5CDJhi8PJtmU9EnKP7bD38h3/v3V+Vfnv3CjYOict8fyXNPf14+88R3UrrjAG4/vUOC3hEh2VvY197I8NEW8965S/LU374oP/jRm3Z92aDYtvcP5e+f+px87a9/YM/bBbB57Wquknv275Qj+5vlzt0NckfdtlTvElIsFAqL1+uRH/7XW/LVZ5+Xp7/8yURQdHd3/zwrK6umra2tpsL0KKorCuVPn/y0PPrE36V6nwGsouRdnO/e12zLal6BjI1vcjIimZkZYvJgYdvPfn5SvvE3L81qULySmZlZ29LSsqvq4B/bS8n1pnx/8ZXH7OXkesEZgI2nIC/XXpdQWOCRQh8PFMPy0tLSZHZ2TtzuLBMSSy8S7unpkXg8fkGD4lsul6urtrb2aPPRry88ytHlEulqqxWvh6MOYL0z32E7dNTZWid7zPe2vbnGfPEzUr1b2AC0rU9LSzfFtWR7JBKRgYEBicVir7tOnTpVYxLlBbfbXfWJLzxXpQ95AbD+tbfUyH2HdsqDh3fJvQdb7PPsgdVy8eJFiUajo+Fw+HEbIadPn77HVH/53eff6PjnF37JzVSAdUif1XL/oVZb7ju4k9tdYM1oSJgeRSgej3+to6PjuYW+xsmTJ+81fZB/+KcX3mh58fg7GSNBHhcJpJJe4byrqdqeqvq7jxyQmsriVO8SNrGZmRkJBoPi9/t1OTQ3N/dMV1fXs/rakkGpEydObJ+Zk6f6BsY+G4/PeLrauCcLAGwFLpcrZqqoKW+akPj63r17u5Ov/T9G7pX7llmhsQAAAABJRU5ErkJggg==));background-repeat:no-repeat;background-position:center;background-size:100% 100%;line-height:0;transition:transform .2s ease-out,opacity .2s ease-out}.hf-button--skin:hover{background-color:transparent;color:inherit;transform:translateY(-1px)}.hf-button--skin:focus-visible{outline:2px solid #00205b;outline-offset:4px;border-radius:8px}.hf-icon{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;line-height:0}.hf-icon svg{fill:currentColor;width:1em;height:1em}.hf-icon-16 svg{width:16px;height:16px}.hf-icon-24 svg{width:24px;height:24px}.hf-tooltip-wrapper{cursor:pointer;position:relative;display:inline-flex;align-items:baseline}.hf-tooltip-content{position:absolute;bottom:30px;left:8px;transform:translate(-50%);width:350px;padding:var(--hf-spacing-s);background:var(--hf-color-bg);box-shadow:var(--hf-popup-shadow);cursor:default;z-index:calc(var(--hf-z-index) + 1)}.hf-tooltip-content:after{content:"";position:absolute;bottom:-10px;left:50%;transform:translate(-50%);width:0;height:0;border-style:solid;border-width:10px 10px 0 10px;border-color:var(--hf-color-bg) transparent transparent transparent}.hf-tooltip-title{display:flex;justify-content:space-between;text-transform:uppercase;font-weight:600;font-size:var(--hf-font-size-large);margin-bottom:var(--hf-spacing-xs)}.hf-tooltip-title span{cursor:pointer}.hf-tooltip-text{display:block;font-size:var(--hf-font-size-small);line-height:1.5}.hf-fade-enter-active,.hf-fade-leave-active{transition:opacity .2s ease-in-out}.hf-fade-enter-from,.hf-fade-leave-to{opacity:0}.hf-popup{position:fixed;bottom:20px;right:20px;width:calc(100% - 40px);max-width:var(--hf-popup-width);background:var(--hf-color-bg);z-index:var(--hf-z-index);box-shadow:var(--hf-popup-shadow);padding:var(--hf-spacing-s);transition:bottom .3s ease,opacity .3s ease}.hf-popup--hidden{bottom:-100px;pointer-events:none;opacity:0}.hf-popup--opened{bottom:20px}.hf-headline{position:relative;border:0;display:flex;align-items:center;width:100%;background:none;padding:0;margin:0;cursor:pointer;font-family:var(--hf-font-family);color:var(--hf-color-text);font-size:var(--hf-font-size-base)}.hf-headline__title{text-transform:uppercase;font-weight:600;font-size:var(--hf-font-size-base);margin-left:var(--hf-spacing-xxs)}.hf-headline__opener{margin-left:auto;display:flex;align-items:center}.hf-headline__opener svg{transition:transform .2s}.hf-popup--opened .hf-headline__opener svg{transform:rotate(0)}.hf-popup:not(.hf-popup--opened) .hf-headline__opener svg{transform:rotate(180deg)}.hf-spinner{display:inline-block;width:22px;height:22px}.hf-spinner svg{width:100%;height:100%;overflow:visible;animation:hf-rotation 1455ms infinite linear}.hf-spinner circle{stroke:currentColor;stroke-dasharray:44px;stroke-dashoffset:33px;transform-origin:center;animation:hf-spinner 2s infinite ease-in-out}@keyframes hf-spinner{0%{stroke-dashoffset:33px;transform:rotate(0)}50%{stroke-dashoffset:11px;transform:rotate(135deg)}to{stroke-dashoffset:33px;transform:rotate(360deg)}}@keyframes hf-rotation{to{transform:rotate(360deg)}}.hf-content-area{margin-top:var(--hf-spacing-s)}.hf-content p{margin:0 0 var(--hf-spacing-s);font-size:var(--hf-font-size-base)}.hf-content p:last-of-type{margin:0}.hf-content ul{margin:0;padding:var(--hf-spacing-xs) 0 var(--hf-spacing-xs) var(--hf-spacing-s);line-height:1}.hf-content ul li{margin:0 0 var(--hf-spacing-xs)}.hf-content a{color:var(--hf-color-text)}.hf-content-area>.hf-button{margin-top:var(--hf-spacing-s)}.hf-introduction-steps .hf-step{margin-bottom:var(--hf-spacing-xs)}.hf-introduction-steps .hf-step p{margin:0 0 var(--hf-spacing-xs)}.hf-introduction-buttons{display:flex;gap:0}.hf-introduction-buttons .hf-button{padding:var(--hf-spacing-s) calc(var(--hf-spacing-s) - var(--hf-spacing-xxs))}.hf-introduction-buttons .hf-button .hf-icon{margin-inline-end:0}.hf-introduction-buttons .hf-button:last-of-type{margin-left:-1px}.hf-popup.hf-not-recognized{border:1px solid var(--hf-color-error)}.hf-popup.hf-error-state .hf-headline{color:var(--hf-color-error)}.hf-hide-chevron .hf-headline__opener{pointer-events:none}.hf-hide-chevron .hf-headline__opener .hf-icon{display:none}.hf-vote{display:flex;gap:0;margin:var(--hf-spacing-s) 0}.hf-vote .hf-button{white-space:nowrap}.hf-vote .hf-button:last-of-type{margin-left:-1px}.hf-vote--stack{flex-direction:column}.hf-vote--stack .hf-button{justify-content:center}.hf-vote--stack .hf-button:last-of-type{margin-left:0;margin-top:-1px}.hf-success-message{display:flex;align-items:center;gap:var(--hf-spacing-xxs)}@media print{.hf-root,.hf-popup{display:none}}@media(max-width:767px){.hf-tooltip-content{left:30px;width:290px}.hf-tooltip-content:after{transform:translate(calc(-50% - 22px))}}.hf-debug{position:fixed;bottom:16px;left:16px;z-index:calc(var(--hf-z-index) + 100);width:320px;background:#000000e0;color:#e0e0e0;font-family:monospace;font-size:12px;line-height:1.5;border-radius:6px;overflow:hidden;box-shadow:0 4px 16px #00000080;pointer-events:none}.hf-debug__header{background:#1a1a2e;color:#7eb8f7;font-weight:700;padding:6px 10px;letter-spacing:.05em;font-size:11px;text-transform:uppercase}.hf-debug__table{width:100%;border-collapse:collapse;padding:4px 0}.hf-debug__table tr:not(:last-child){border-bottom:1px solid rgba(255,255,255,.06)}.hf-debug__label{color:#888;padding:4px 10px;white-space:nowrap;vertical-align:top;width:56px}.hf-debug__value{color:#e0e0e0;padding:4px 10px 4px 4px;word-break:break-word}.hf-debug__speech{color:#f0d080;font-style:italic}.hf-debug__matched{color:#6edb8f;font-weight:700}.hf-debug__no-match{color:#f07070}.hf-debug__status--recording{color:#6edb8f}.hf-debug__status--starting{color:#f0d080}.hf-debug__status--stopped{color:#888}.hf-debug__status--error{color:#f07070}', Lc = {
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
    },
    buttonSkinUrl: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = ja();
    Ba(t);
    const { state: n, setStage: s, toggleListening: o, togglePopupState: i } = t, r = Ws(), l = (p, m = {}) => {
      const w = r?.proxy?.$el?.parentNode?.host || r?.proxy?.$el;
      w && w.dispatchEvent && w.dispatchEvent(new CustomEvent(p, {
        detail: m,
        bubbles: !0,
        composed: !0
      }));
    };
    Ns("emitEvent", l);
    const a = ue(() => {
      let p = {};
      if (e.translations)
        try {
          p = JSON.parse(e.translations);
        } catch (m) {
          console.warn("[HandsfreeCooking] Invalid translations JSON:", m);
        }
      return lr(Lc, p);
    }), u = ue(() => {
      let p = {};
      if (e.commands)
        try {
          p = JSON.parse(e.commands);
        } catch (m) {
          console.warn("[HandsfreeCooking] Invalid commands JSON:", m);
        }
      return { ...Hc, ...p };
    }), f = ue(() => ({
      steps: e.stepsSelector,
      ingredients: e.ingredientsSelector,
      instructions: e.instructionsSelector
    })), h = ue(() => e.buttonSkinUrl ? { "--hf-button-skin-image": `url("${e.buttonSkinUrl}")` } : {}), b = ue(
      () => e.lang || document.documentElement.lang || "en"
    ), { commands: _, destroy: E } = Ua(
      u,
      f,
      t,
      l
    ), S = /* @__PURE__ */ Ae(null), I = /* @__PURE__ */ Ae(!1), L = /* @__PURE__ */ Ae(null), R = /* @__PURE__ */ Ae(0), P = /* @__PURE__ */ Ae(!1), x = /* @__PURE__ */ Ae(!1), T = /* @__PURE__ */ Ae(!1), z = /* @__PURE__ */ Ae(null), W = typeof window < "u" && (window.location.hash.includes("debugHF") || new URLSearchParams(window.location.search).has("debugHF")), U = /* @__PURE__ */ Ae({
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
      ([p, m]) => {
        W && (U.value.stage = p ?? "null", U.value.subState = m ?? "");
      },
      { immediate: !0 }
    );
    const H = ue(() => n.stage), K = ue(() => n.subState), D = ue(() => n.isPopupOpened), k = ue(
      () => n.stage === "introduction" || n.stage === "listening" && n.subState === "intro"
    ), G = ue(
      () => n.stage === "listening" && n.subState === "help"
    ), ie = ue(
      () => n.stage === "listening" && n.subState === "not-recognized"
    ), Pe = ue(
      () => n.stage === "listening" && n.subState === "recognized-error"
    ), le = ue(
      () => n.stage === "listening" && n.subState === "almost-done"
    ), oe = ue(() => ie.value ? a.value.notRecognized.title : Pe.value ? a.value.notRecognizedError.title : n.stage === "listening" && n.subState === null ? a.value.listening.title : "");
    let X = !1, Oe = !1;
    function St() {
      !S.value || Oe || (T.value && S.value.stop(), setTimeout(() => {
        if (!T.value)
          try {
            S.value.start();
          } catch {
            setTimeout(() => {
              try {
                T.value || S.value.start();
              } catch (m) {
                console.error("[HandsfreeCooking] Restart failed:", m);
              }
            }, 1e3);
          }
      }, 500));
    }
    const Xe = () => {
      I.value = !I.value;
    };
    let he = null;
    const wt = (p) => {
      L.value && !p.composedPath().includes(L.value) && (I.value = !1);
    };
    xt(I, (p) => {
      he && (cancelAnimationFrame(he), he = null), document.removeEventListener("click", wt, !0), p && (he = requestAnimationFrame(() => {
        document.addEventListener("click", wt, !0);
      }));
    });
    const Wn = (p) => {
      const m = Wo(p, Object.keys(_.value));
      W && (U.value.matched = m || "no match"), m ? (le.value || (s("listening"), i(!1)), le.value && u.value.imDone.includes(m) && (s("finish"), Ct(), l("handsfree-finished", { reason: "completed recipe flow" })), R.value = 0, requestAnimationFrame(() => {
        _.value[m] && _.value[m]();
      })) : (R.value += 1, n.subState !== "help" && (s("listening", "not-recognized"), i(!1)), R.value > Mc && s("listening", "recognized-error"));
    }, Kn = (p) => {
      const m = Wo(p, Object.keys(_.value));
      W && (U.value.matched = m && u.value.letsCook.includes(m) ? m : "no match (intro)"), m && u.value.letsCook.includes(m) && setTimeout(() => {
        _.value[m] && _.value[m]();
      }, 100);
    }, dt = window.SpeechRecognition || window.webkitSpeechRecognition, ht = () => {
      if (Oe = !1, s("introduction"), l("handsfree-activated"), !dt)
        l("handsfree-error", { error: "browser-not-supported" }), s("not-supported");
      else {
        let p = !1;
        W && (U.value.lang = b.value, U.value.matched = "", U.value.interim = "", U.value.final = ""), S.value = tc.init({
          lang: b.value,
          continuesRecognition: !0,
          onUserSpeech: (m) => {
            if (T.value = ["starting", "recording"].includes(m.status), ["stopped", "aborted", "error"].includes(m.status) && (T.value = !1), z.value = m.status, W && (U.value.status = m.error ? `${m.status} (${m.error})` : m.status), !p && m.status === "starting") {
              p = !0;
              return;
            }
            if (m.status === "error" && (m.error === "not-allowed" || m.error === "service-not-allowed")) {
              x.value = !0, s("not-allowed"), o(!1), S.value.stop(), l("handsfree-error", { error: "microphone-not-allowed" });
              return;
            }
            if (m.status === "recording" && (o(!0), X || (l("handsfree-state-change", { stage: "microphone-allowed", isListening: !0 }), X = !0), m.transcriptions.length && !m.finalTranscriptions && (P.value = !0, W && (U.value.interim = m.transcriptions[0].text)), m.finalTranscriptions)) {
              P.value = !1;
              const w = m.transcriptions[0].text.toLowerCase().trim();
              W && (U.value.interim = "", U.value.final = m.transcriptions[0].text, U.value.matched = ""), k.value ? Kn(w) : Wn(w);
            }
          },
          onUserSpeak: () => {
          }
        });
      }
    }, Ct = () => {
      S.value && S.value.stop(), Oe = !0, o(!1), i(!0), T.value = !1;
    }, an = () => {
      s("finish"), Ct(), l("handsfree-finished", { reason: "stop-cooking-button" });
    }, pt = () => {
      i(!0), s("listening", "help");
    }, Js = () => {
      if (x.value)
        s("not-allowed");
      else {
        if (!T.value)
          try {
            S.value.start();
          } catch (p) {
            console.warn("[HandsfreeCooking] Cannot start recognizer:", p);
          }
        s("listening", "intro"), l("handsfree-state-change", { stage: "listening", isListening: !0 });
      }
    };
    async function c() {
      try {
        (await navigator.mediaDevices.getUserMedia({ audio: !0 })).getTracks().forEach((m) => m.stop()), x.value = !1, ht();
      } catch {
        l("handsfree-error", { error: "microphone-blocked" });
      }
    }
    const d = () => {
      i(!n.isPopupOpened), l("handsfree-state-change", {
        stage: n.stage,
        isListening: n.isListening,
        isPopupOpened: n.isPopupOpened
      });
    }, g = () => {
      i(!1), s("listening");
    }, y = () => {
      !n.isListening && S.value ? (S.value.stop(), s(null)) : d();
    }, v = (p) => {
      if (p.key === "Escape") {
        if (I.value) {
          I.value = !1;
          return;
        }
        n.isPopupOpened && n.stage !== null && (n.subState === "help" ? g() : y());
      }
    };
    return xt(z, (p) => {
      p === "stopped" && n.stage === "listening" && !Oe && !T.value && St();
    }), Vn(() => {
      document.addEventListener("keydown", v);
    }), Vs(() => {
      document.removeEventListener("keydown", v), document.removeEventListener("click", wt, !0), he && cancelAnimationFrame(he);
      try {
        S.value && S.value.stop();
      } catch (p) {
        console.warn("[HandsfreeCooking] Failed to stop on unmount:", p);
      }
      E(), T.value = !1;
    }), {
      isPopupOpened: D,
      stage: H,
      subState: K,
      isIntroductionVisible: k,
      isHelpVisible: G,
      isNotRecognized: ie,
      isNotRecognizedError: Pe,
      isAlmostDone: le,
      isTooltipVisible: I,
      mergedTranslations: a,
      mergedCommands: u,
      rootStyle: h,
      tooltip: L,
      isLoading: P,
      statusAnnouncement: oe,
      toggleTooltip: Xe,
      openHelp: pt,
      startHandsFreeFlow: ht,
      finishHandsFreeFlow: an,
      togglePopup: d,
      requestMicrophoneAccess: c,
      beginListening: Js,
      continueListening: g,
      closeHandsFreeFlow: y,
      isDebugMode: W,
      debugInfo: U
    };
  }
}, Nc = { class: "hf-trigger" }, Dc = { class: "hf-intro-row" }, Vc = { class: "hf-intro-label" }, jc = {
  ref: "tooltip",
  class: "hf-tooltip-wrapper"
}, Bc = {
  key: 0,
  class: "hf-tooltip-content"
}, Uc = { class: "hf-tooltip-title" }, zc = { class: "hf-tooltip-text" }, Wc = ["aria-hidden"], Kc = {
  "aria-live": "polite",
  class: "hf-sr-only"
}, qc = {
  key: 0,
  class: "hf-debug"
}, Gc = { class: "hf-debug__table" }, Jc = { class: "hf-debug__value" }, Zc = { class: "hf-debug__value" }, Xc = { class: "hf-debug__value hf-debug__speech" }, Yc = { class: "hf-debug__value hf-debug__speech" };
function Qc(e, t, n, s, o, i) {
  const r = Ge("HfIcon"), l = Ge("Introduction"), a = Ge("Popup"), u = Ge("Finish");
  return Y(), ge(Ce, null, [
    N("div", {
      class: "hf-root",
      style: Hn(s.rootStyle)
    }, [
      N("div", Nc, [
        N("div", Dc, [
          N("span", Vc, ae(s.mergedTranslations.intro), 1),
          N("span", jc, [
            $(r, {
              icon: "help",
              size: 16,
              onClick: s.toggleTooltip
            }, null, 8, ["onClick"]),
            $(ha, { name: "hf-fade" }, {
              default: _i(() => [
                s.isTooltipVisible ? (Y(), ge("span", Bc, [
                  N("strong", Uc, [
                    Zt(ae(s.mergedTranslations.tooltip.title) + " ", 1),
                    N("span", {
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
                  N("span", zc, ae(s.mergedTranslations.tooltip.text), 1)
                ])) : He("", !0)
              ]),
              _: 1
            })
          ], 512)
        ]),
        s.stage !== "listening" ? (Y(), ge("button", {
          key: 0,
          class: "hf-button hf-button--handsfree hf-button--skin",
          onClick: t[1] || (t[1] = (...f) => s.startHandsFreeFlow && s.startHandsFreeFlow(...f))
        }, [
          $(r, {
            icon: "mic",
            size: 24
          }),
          Zt(" " + ae(s.mergedTranslations.letsCook), 1)
        ])) : He("", !0),
        s.stage === "listening" ? (Y(), ge("button", {
          key: 1,
          class: "hf-button hf-button--handsfree hf-button--skin",
          onClick: t[2] || (t[2] = (...f) => s.finishHandsFreeFlow && s.finishHandsFreeFlow(...f))
        }, [
          $(r, {
            icon: "mic",
            size: 24
          }),
          Zt(" " + ae(s.mergedTranslations.stopCooking), 1)
        ])) : He("", !0)
      ]),
      N("div", {
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
        N("div", Kc, ae(s.statusAnnouncement), 1),
        s.isIntroductionVisible ? (Y(), Re(l, {
          key: 0,
          translations: s.mergedTranslations.introduction,
          "is-loading": s.isLoading,
          "is-close-state": !0,
          onTogglePopup: s.closeHandsFreeFlow,
          onBeginListening: s.beginListening
        }, null, 8, ["translations", "is-loading", "onTogglePopup", "onBeginListening"])) : s.stage === "not-allowed" ? (Y(), Re(a, {
          key: 1,
          translations: s.mergedTranslations.notAllowed,
          "is-loading": s.isLoading,
          "is-close-state": !0,
          onTogglePopup: s.closeHandsFreeFlow,
          onButtonAction: s.requestMicrophoneAccess
        }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : s.stage === "listening" && s.subState === null ? (Y(), Re(a, {
          key: 2,
          translations: s.mergedTranslations.listening,
          "is-loading": s.isLoading,
          onTogglePopup: s.openHelp
        }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.isHelpVisible ? (Y(), Re(a, {
          key: 3,
          translations: s.mergedTranslations.help,
          "is-loading": s.isLoading,
          onTogglePopup: s.continueListening,
          onButtonAction: s.finishHandsFreeFlow
        }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : s.isNotRecognized ? (Y(), Re(a, {
          key: 4,
          translations: s.mergedTranslations.notRecognized,
          "is-loading": s.isLoading,
          onTogglePopup: s.openHelp
        }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.isNotRecognizedError ? (Y(), Re(a, {
          key: 5,
          translations: s.mergedTranslations.notRecognizedError,
          "is-loading": s.isLoading,
          onTogglePopup: s.openHelp
        }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.stage === "not-supported" ? (Y(), Re(a, {
          key: 6,
          "additional-classname": "hf-hide-chevron",
          translations: s.mergedTranslations.notSupported,
          "is-loading": s.isLoading,
          onButtonAction: s.closeHandsFreeFlow
        }, null, 8, ["translations", "is-loading", "onButtonAction"])) : s.isAlmostDone ? (Y(), Re(a, {
          key: 7,
          translations: s.mergedTranslations.almostDone,
          "is-loading": s.isLoading,
          onTogglePopup: s.togglePopup
        }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : s.stage === "finish" ? (Y(), Re(u, {
          key: 8,
          translations: s.mergedTranslations.finish,
          onCloseHandsFreeFlow: s.closeHandsFreeFlow,
          onTogglePopup: s.togglePopup
        }, null, 8, ["translations", "onCloseHandsFreeFlow", "onTogglePopup"])) : He("", !0)
      ], 10, Wc)
    ], 4),
    (Y(), Re(sl, {
      to: "body",
      disabled: !0
    }, [
      s.isDebugMode ? (Y(), ge("div", qc, [
        t[9] || (t[9] = N("div", { class: "hf-debug__header" }, "🎤 HF Debug", -1)),
        N("table", Gc, [
          N("tr", null, [
            t[3] || (t[3] = N("td", { class: "hf-debug__label" }, "Lang", -1)),
            N("td", Jc, ae(s.debugInfo.lang), 1)
          ]),
          N("tr", null, [
            t[4] || (t[4] = N("td", { class: "hf-debug__label" }, "Status", -1)),
            N("td", {
              class: st(["hf-debug__value", "hf-debug__status--" + s.debugInfo.status])
            }, ae(s.debugInfo.status || "—"), 3)
          ]),
          N("tr", null, [
            t[5] || (t[5] = N("td", { class: "hf-debug__label" }, "Stage", -1)),
            N("td", Zc, ae(s.debugInfo.stage) + ae(s.debugInfo.subState ? " / " + s.debugInfo.subState : ""), 1)
          ]),
          N("tr", null, [
            t[6] || (t[6] = N("td", { class: "hf-debug__label" }, "Interim", -1)),
            N("td", Xc, ae(s.debugInfo.interim || "—"), 1)
          ]),
          N("tr", null, [
            t[7] || (t[7] = N("td", { class: "hf-debug__label" }, "Final", -1)),
            N("td", Yc, ae(s.debugInfo.final || "—"), 1)
          ]),
          N("tr", null, [
            t[8] || (t[8] = N("td", { class: "hf-debug__label" }, "Matched", -1)),
            N("td", {
              class: st(["hf-debug__value", s.debugInfo.matched === "no match" ? "hf-debug__no-match" : "hf-debug__matched"])
            }, ae(s.debugInfo.matched || "—"), 3)
          ])
        ])
      ])) : He("", !0)
    ]))
  ], 64);
}
const $c = /* @__PURE__ */ Ht(Fc, [["render", Qc], ["styles", [Rc]]]), ef = /* @__PURE__ */ Ha($c, {
  shadowRoot: !0
});
customElements.get("handsfree-cooking") || customElements.define("handsfree-cooking", ef);
export {
  ef as HandsfreeCookingElement
};
