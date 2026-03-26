// @__NO_SIDE_EFFECTS__
function Ms(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Z = {}, Ot = [], Xe = () => {
}, Xo = () => !1, Dn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Vn = (e) => e.startsWith("onUpdate:"), se = Object.assign, Is = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, gr = Object.prototype.hasOwnProperty, U = (e, t) => gr.call(e, t), O = Array.isArray, Mt = (e) => pn(e) === "[object Map]", Qo = (e) => pn(e) === "[object Set]", uo = (e) => pn(e) === "[object Date]", I = (e) => typeof e == "function", le = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", $ = (e) => e !== null && typeof e == "object", ei = (e) => ($(e) || I(e)) && I(e.then) && I(e.catch), ti = Object.prototype.toString, pn = (e) => ti.call(e), mr = (e) => pn(e).slice(8, -1), zn = (e) => pn(e) === "[object Object]", Ns = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jt = /* @__PURE__ */ Ms(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), jn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, vr = /-\w/g, ue = jn(
  (e) => e.replace(vr, (t) => t.slice(1).toUpperCase())
), _r = /\B([A-Z])/g, Le = jn(
  (e) => e.replace(_r, "-$1").toLowerCase()
), Bn = jn((e) => e.charAt(0).toUpperCase() + e.slice(1)), os = jn(
  (e) => e ? `on${Bn(e)}` : ""
), Ze = (e, t) => !Object.is(e, t), is = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ni = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, br = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, bs = (e) => {
  const t = le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ho;
const Un = () => ho || (ho = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ds(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = le(s) ? wr(s) : Ds(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (le(e) || $(e))
    return e;
}
const yr = /;(?![^(]*\))/g, Sr = /:([^]+)/, xr = /\/\*[^]*?\*\//g;
function wr(e) {
  const t = {};
  return e.replace(xr, "").split(yr).forEach((n) => {
    if (n) {
      const s = n.split(Sr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function zt(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const s = zt(e[n]);
      s && (t += s + " ");
    }
  else if ($(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Cr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Tr = /* @__PURE__ */ Ms(Cr);
function si(e) {
  return !!e || e === "";
}
function Ar(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Vs(e[s], t[s]);
  return n;
}
function Vs(e, t) {
  if (e === t) return !0;
  let n = uo(e), s = uo(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Qe(e), s = Qe(t), n || s)
    return e === t;
  if (n = O(e), s = O(t), n || s)
    return n && s ? Ar(e, t) : !1;
  if (n = $(e), s = $(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), c = t.hasOwnProperty(r);
      if (l && !c || !l && c || !Vs(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const oi = (e) => !!(e && e.__v_isRef === !0), ke = (e) => le(e) ? e : e == null ? "" : O(e) || $(e) && (e.toString === ti || !I(e.toString)) ? oi(e) ? ke(e.value) : JSON.stringify(e, ii, 2) : String(e), ii = (e, t) => oi(t) ? ii(e, t.value) : Mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[rs(s, i) + " =>"] = o, n),
    {}
  )
} : Qo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => rs(n))
} : Qe(t) ? rs(t) : $(t) && !O(t) && !zn(t) ? String(t) : t, rs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let we;
class kr {
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
function Pr() {
  return we;
}
let ee;
const ls = /* @__PURE__ */ new WeakSet();
class ri {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, we && we.active && we.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ls.has(this) && (ls.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ci(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, po(this), ai(this);
    const t = ee, n = De;
    ee = this, De = !0;
    try {
      return this.fn();
    } finally {
      fi(this), ee = t, De = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Bs(t);
      this.deps = this.depsTail = void 0, po(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ls.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ys(this) && this.run();
  }
  get dirty() {
    return ys(this);
  }
}
let li = 0, Xt, Qt;
function ci(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Qt, Qt = e;
    return;
  }
  e.next = Xt, Xt = e;
}
function zs() {
  li++;
}
function js() {
  if (--li > 0)
    return;
  if (Qt) {
    let t = Qt;
    for (Qt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Xt; ) {
    let t = Xt;
    for (Xt = void 0; t; ) {
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
function ai(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function fi(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Bs(s), Er(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function ys(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ui(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ui(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === rn) || (e.globalVersion = rn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ys(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ee, s = De;
  ee = e, De = !0;
  try {
    ai(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ze(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ee = n, De = s, fi(e), e.flags &= -3;
  }
}
function Bs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Bs(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Er(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let De = !0;
const di = [];
function ct() {
  di.push(De), De = !1;
}
function at() {
  const e = di.pop();
  De = e === void 0 ? !0 : e;
}
function po(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ee;
    ee = void 0;
    try {
      t();
    } finally {
      ee = n;
    }
  }
}
let rn = 0;
class Hr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Us {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ee || !De || ee === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ee)
      n = this.activeLink = new Hr(ee, this), ee.deps ? (n.prevDep = ee.depsTail, ee.depsTail.nextDep = n, ee.depsTail = n) : ee.deps = ee.depsTail = n, hi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ee.depsTail, n.nextDep = void 0, ee.depsTail.nextDep = n, ee.depsTail = n, ee.deps === n && (ee.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, rn++, this.notify(t);
  }
  notify(t) {
    zs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      js();
    }
  }
}
function hi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        hi(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ss = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ Symbol(
  ""
), xs = /* @__PURE__ */ Symbol(
  ""
), ln = /* @__PURE__ */ Symbol(
  ""
);
function pe(e, t, n) {
  if (De && ee) {
    let s = Ss.get(e);
    s || Ss.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Us()), o.map = s, o.key = n), o.track();
  }
}
function rt(e, t, n, s, o, i) {
  const r = Ss.get(e);
  if (!r) {
    rn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (zs(), t === "clear")
    r.forEach(l);
  else {
    const c = O(e), d = c && Ns(n);
    if (c && n === "length") {
      const f = Number(s);
      r.forEach((h, x) => {
        (x === "length" || x === ln || !Qe(x) && x >= f) && l(h);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), d && l(r.get(ln)), t) {
        case "add":
          c ? d && l(r.get("length")) : (l(r.get(Et)), Mt(e) && l(r.get(xs)));
          break;
        case "delete":
          c || (l(r.get(Et)), Mt(e) && l(r.get(xs)));
          break;
        case "set":
          Mt(e) && l(r.get(Et));
          break;
      }
  }
  js();
}
function Ft(e) {
  const t = /* @__PURE__ */ B(e);
  return t === e ? t : (pe(t, "iterate", ln), /* @__PURE__ */ Ve(e) ? t : t.map(ft));
}
function Ws(e) {
  return pe(e = /* @__PURE__ */ B(e), "iterate", ln), e;
}
function Ye(e, t) {
  return /* @__PURE__ */ _t(e) ? cn(/* @__PURE__ */ It(e) ? ft(t) : t) : ft(t);
}
const Rr = {
  __proto__: null,
  [Symbol.iterator]() {
    return cs(this, Symbol.iterator, (e) => Ye(this, e));
  },
  concat(...e) {
    return Ft(this).concat(
      ...e.map((t) => O(t) ? Ft(t) : t)
    );
  },
  entries() {
    return cs(this, "entries", (e) => (e[1] = Ye(this, e[1]), e));
  },
  every(e, t) {
    return nt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return nt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Ye(this, s)),
      arguments
    );
  },
  find(e, t) {
    return nt(
      this,
      "find",
      e,
      t,
      (n) => Ye(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return nt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return nt(
      this,
      "findLast",
      e,
      t,
      (n) => Ye(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return nt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return nt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return as(this, "includes", e);
  },
  indexOf(...e) {
    return as(this, "indexOf", e);
  },
  join(e) {
    return Ft(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return as(this, "lastIndexOf", e);
  },
  map(e, t) {
    return nt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return $t(this, "pop");
  },
  push(...e) {
    return $t(this, "push", e);
  },
  reduce(e, ...t) {
    return go(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return go(this, "reduceRight", e, t);
  },
  shift() {
    return $t(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return nt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return $t(this, "splice", e);
  },
  toReversed() {
    return Ft(this).toReversed();
  },
  toSorted(e) {
    return Ft(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ft(this).toSpliced(...e);
  },
  unshift(...e) {
    return $t(this, "unshift", e);
  },
  values() {
    return cs(this, "values", (e) => Ye(this, e));
  }
};
function cs(e, t, n) {
  const s = Ws(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Ve(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const Fr = Array.prototype;
function nt(e, t, n, s, o, i) {
  const r = Ws(e), l = r !== e && !/* @__PURE__ */ Ve(e), c = r[t];
  if (c !== Fr[t]) {
    const h = c.apply(e, i);
    return l ? ft(h) : h;
  }
  let d = n;
  r !== e && (l ? d = function(h, x) {
    return n.call(this, Ye(e, h), x, e);
  } : n.length > 2 && (d = function(h, x) {
    return n.call(this, h, x, e);
  }));
  const f = c.call(r, d, s);
  return l && o ? o(f) : f;
}
function go(e, t, n, s) {
  const o = Ws(e), i = o !== e && !/* @__PURE__ */ Ve(e);
  let r = n, l = !1;
  o !== e && (i ? (l = s.length === 0, r = function(d, f, h) {
    return l && (l = !1, d = Ye(e, d)), n.call(this, d, Ye(e, f), h, e);
  }) : n.length > 3 && (r = function(d, f, h) {
    return n.call(this, d, f, h, e);
  }));
  const c = o[t](r, ...s);
  return l ? Ye(e, c) : c;
}
function as(e, t, n) {
  const s = /* @__PURE__ */ B(e);
  pe(s, "iterate", ln);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ qs(n[0]) ? (n[0] = /* @__PURE__ */ B(n[0]), s[t](...n)) : o;
}
function $t(e, t, n = []) {
  ct(), zs();
  const s = (/* @__PURE__ */ B(e))[t].apply(e, n);
  return js(), at(), s;
}
const Lr = /* @__PURE__ */ Ms("__proto__,__v_isRef,__isVue"), pi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
);
function Or(e) {
  Qe(e) || (e = String(e));
  const t = /* @__PURE__ */ B(this);
  return pe(t, "has", e), t.hasOwnProperty(e);
}
class gi {
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
      return s === (o ? i ? Wr : bi : i ? _i : vi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = O(t);
    if (!o) {
      let c;
      if (r && (c = Rr[n]))
        return c;
      if (n === "hasOwnProperty")
        return Or;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ve(t) ? t : s
    );
    if ((Qe(n) ? pi.has(n) : Lr(n)) || (o || pe(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ ve(l)) {
      const c = r && Ns(n) ? l : l.value;
      return o && $(c) ? /* @__PURE__ */ Cs(c) : c;
    }
    return $(l) ? o ? /* @__PURE__ */ Cs(l) : /* @__PURE__ */ Wn(l) : l;
  }
}
class mi extends gi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const r = O(t) && Ns(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ _t(i);
      if (!/* @__PURE__ */ Ve(s) && !/* @__PURE__ */ _t(s) && (i = /* @__PURE__ */ B(i), s = /* @__PURE__ */ B(s)), !r && /* @__PURE__ */ ve(i) && !/* @__PURE__ */ ve(s))
        return d || (i.value = s), !0;
    }
    const l = r ? Number(n) < t.length : U(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ve(t) ? t : o
    );
    return t === /* @__PURE__ */ B(o) && (l ? Ze(s, i) && rt(t, "set", n, s) : rt(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = U(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && rt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Qe(n) || !pi.has(n)) && pe(t, "has", n), s;
  }
  ownKeys(t) {
    return pe(
      t,
      "iterate",
      O(t) ? "length" : Et
    ), Reflect.ownKeys(t);
  }
}
class Mr extends gi {
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
const Ir = /* @__PURE__ */ new mi(), Nr = /* @__PURE__ */ new Mr(), Dr = /* @__PURE__ */ new mi(!0);
const ws = (e) => e, vn = (e) => Reflect.getPrototypeOf(e);
function Vr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ B(o), r = Mt(i), l = e === "entries" || e === Symbol.iterator && r, c = e === "keys" && r, d = o[e](...s), f = n ? ws : t ? cn : ft;
    return !t && pe(
      i,
      "iterate",
      c ? xs : Et
    ), se(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: x } = d.next();
          return x ? { value: h, done: x } : {
            value: l ? [f(h[0]), f(h[1])] : f(h),
            done: x
          };
        }
      }
    );
  };
}
function _n(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function zr(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ B(i), l = /* @__PURE__ */ B(o);
      e || (Ze(o, l) && pe(r, "get", o), pe(r, "get", l));
      const { has: c } = vn(r), d = t ? ws : e ? cn : ft;
      if (c.call(r, o))
        return d(i.get(o));
      if (c.call(r, l))
        return d(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && pe(/* @__PURE__ */ B(o), "iterate", Et), o.size;
    },
    has(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ B(i), l = /* @__PURE__ */ B(o);
      return e || (Ze(o, l) && pe(r, "has", o), pe(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, c = /* @__PURE__ */ B(l), d = t ? ws : e ? cn : ft;
      return !e && pe(c, "iterate", Et), l.forEach((f, h) => o.call(i, d(f), d(h), r));
    }
  };
  return se(
    n,
    e ? {
      add: _n("add"),
      set: _n("set"),
      delete: _n("delete"),
      clear: _n("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ B(this), r = vn(i), l = /* @__PURE__ */ B(o), c = !t && !/* @__PURE__ */ Ve(o) && !/* @__PURE__ */ _t(o) ? l : o;
        return r.has.call(i, c) || Ze(o, c) && r.has.call(i, o) || Ze(l, c) && r.has.call(i, l) || (i.add(c), rt(i, "add", c, c)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Ve(i) && !/* @__PURE__ */ _t(i) && (i = /* @__PURE__ */ B(i));
        const r = /* @__PURE__ */ B(this), { has: l, get: c } = vn(r);
        let d = l.call(r, o);
        d || (o = /* @__PURE__ */ B(o), d = l.call(r, o));
        const f = c.call(r, o);
        return r.set(o, i), d ? Ze(i, f) && rt(r, "set", o, i) : rt(r, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ B(this), { has: r, get: l } = vn(i);
        let c = r.call(i, o);
        c || (o = /* @__PURE__ */ B(o), c = r.call(i, o)), l && l.call(i, o);
        const d = i.delete(o);
        return c && rt(i, "delete", o, void 0), d;
      },
      clear() {
        const o = /* @__PURE__ */ B(this), i = o.size !== 0, r = o.clear();
        return i && rt(
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
    n[o] = Vr(o, e, t);
  }), n;
}
function Ks(e, t) {
  const n = zr(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    U(n, o) && o in s ? n : s,
    o,
    i
  );
}
const jr = {
  get: /* @__PURE__ */ Ks(!1, !1)
}, Br = {
  get: /* @__PURE__ */ Ks(!1, !0)
}, Ur = {
  get: /* @__PURE__ */ Ks(!0, !1)
};
const vi = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap();
function Kr(e) {
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
function $r(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Kr(mr(e));
}
// @__NO_SIDE_EFFECTS__
function Wn(e) {
  return /* @__PURE__ */ _t(e) ? e : $s(
    e,
    !1,
    Ir,
    jr,
    vi
  );
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  return $s(
    e,
    !1,
    Dr,
    Br,
    _i
  );
}
// @__NO_SIDE_EFFECTS__
function Cs(e) {
  return $s(
    e,
    !0,
    Nr,
    Ur,
    bi
  );
}
function $s(e, t, n, s, o) {
  if (!$(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = $r(e);
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
function It(e) {
  return /* @__PURE__ */ _t(e) ? /* @__PURE__ */ It(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function _t(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ve(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function qs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ B(t) : e;
}
function Yr(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && ni(e, "__v_skip", !0), e;
}
const ft = (e) => $(e) ? /* @__PURE__ */ Wn(e) : e, cn = (e) => $(e) ? /* @__PURE__ */ Cs(e) : e;
// @__NO_SIDE_EFFECTS__
function ve(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  return Gr(e, !1);
}
function Gr(e, t) {
  return /* @__PURE__ */ ve(e) ? e : new Zr(e, t);
}
class Zr {
  constructor(t, n) {
    this.dep = new Us(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ B(t), this._value = n ? t : ft(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ve(t) || /* @__PURE__ */ _t(t);
    t = s ? t : /* @__PURE__ */ B(t), Ze(t, n) && (this._rawValue = t, this._value = s ? t : ft(t), this.dep.trigger());
  }
}
function yi(e) {
  return /* @__PURE__ */ ve(e) ? e.value : e;
}
const Jr = {
  get: (e, t, n) => t === "__v_raw" ? e : yi(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ ve(o) && !/* @__PURE__ */ ve(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Si(e) {
  return /* @__PURE__ */ It(e) ? e : new Proxy(e, Jr);
}
class Xr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Us(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = rn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ee !== this)
      return ci(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ui(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Qr(e, t, n = !1) {
  let s, o;
  return I(e) ? s = e : (s = e.get, o = e.set), new Xr(s, o, n);
}
const bn = {}, wn = /* @__PURE__ */ new WeakMap();
let kt;
function el(e, t = !1, n = kt) {
  if (n) {
    let s = wn.get(n);
    s || wn.set(n, s = []), s.push(e);
  }
}
function tl(e, t, n = Z) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: c } = n, d = (k) => o ? k : /* @__PURE__ */ Ve(k) || o === !1 || o === 0 ? lt(k, 1) : lt(k);
  let f, h, x, w, E = !1, A = !1;
  if (/* @__PURE__ */ ve(e) ? (h = () => e.value, E = /* @__PURE__ */ Ve(e)) : /* @__PURE__ */ It(e) ? (h = () => d(e), E = !0) : O(e) ? (A = !0, E = e.some((k) => /* @__PURE__ */ It(k) || /* @__PURE__ */ Ve(k)), h = () => e.map((k) => {
    if (/* @__PURE__ */ ve(k))
      return k.value;
    if (/* @__PURE__ */ It(k))
      return d(k);
    if (I(k))
      return c ? c(k, 2) : k();
  })) : I(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (x) {
      ct();
      try {
        x();
      } finally {
        at();
      }
    }
    const k = kt;
    kt = f;
    try {
      return c ? c(e, 3, [w]) : e(w);
    } finally {
      kt = k;
    }
  } : h = Xe, t && o) {
    const k = h, D = o === !0 ? 1 / 0 : o;
    h = () => lt(k(), D);
  }
  const F = Pr(), N = () => {
    f.stop(), F && F.active && Is(F.effects, f);
  };
  if (i && t) {
    const k = t;
    t = (...D) => {
      k(...D), N();
    };
  }
  let H = A ? new Array(e.length).fill(bn) : bn;
  const L = (k) => {
    if (!(!(f.flags & 1) || !f.dirty && !k))
      if (t) {
        const D = f.run();
        if (o || E || (A ? D.some((oe, ce) => Ze(oe, H[ce])) : Ze(D, H))) {
          x && x();
          const oe = kt;
          kt = f;
          try {
            const ce = [
              D,
              // pass undefined as the old value when it's changed for the first time
              H === bn ? void 0 : A && H[0] === bn ? [] : H,
              w
            ];
            H = D, c ? c(t, 3, ce) : (
              // @ts-expect-error
              t(...ce)
            );
          } finally {
            kt = oe;
          }
        }
      } else
        f.run();
  };
  return l && l(L), f = new ri(h), f.scheduler = r ? () => r(L, !1) : L, w = (k) => el(k, !1, f), x = f.onStop = () => {
    const k = wn.get(f);
    if (k) {
      if (c)
        c(k, 4);
      else
        for (const D of k) D();
      wn.delete(f);
    }
  }, t ? s ? L(!0) : H = f.run() : r ? r(L.bind(null, !0), !0) : f.run(), N.pause = f.pause.bind(f), N.resume = f.resume.bind(f), N.stop = N, N;
}
function lt(e, t = 1 / 0, n) {
  if (t <= 0 || !$(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ve(e))
    lt(e.value, t, n);
  else if (O(e))
    for (let s = 0; s < e.length; s++)
      lt(e[s], t, n);
  else if (Qo(e) || Mt(e))
    e.forEach((s) => {
      lt(s, t, n);
    });
  else if (zn(e)) {
    for (const s in e)
      lt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && lt(e[s], t, n);
  }
  return e;
}
function gn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Kn(o, t, n);
  }
}
function ze(e, t, n, s) {
  if (I(e)) {
    const o = gn(e, t, n, s);
    return o && ei(o) && o.catch((i) => {
      Kn(i, t, n);
    }), o;
  }
  if (O(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(ze(e[i], t, n, s));
    return o;
  }
}
function Kn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || Z;
  if (t) {
    let l = t.parent;
    const c = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, c, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      ct(), gn(i, null, 10, [
        e,
        c,
        d
      ]), at();
      return;
    }
  }
  nl(e, n, o, s, r);
}
function nl(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const ye = [];
let $e = -1;
const Nt = [];
let vt = null, Lt = 0;
const xi = /* @__PURE__ */ Promise.resolve();
let Cn = null;
function Ys(e) {
  const t = Cn || xi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sl(e) {
  let t = $e + 1, n = ye.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = ye[s], i = an(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Gs(e) {
  if (!(e.flags & 1)) {
    const t = an(e), n = ye[ye.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= an(n) ? ye.push(e) : ye.splice(sl(t), 0, e), e.flags |= 1, wi();
  }
}
function wi() {
  Cn || (Cn = xi.then(Ti));
}
function ol(e) {
  O(e) ? Nt.push(...e) : vt && e.id === -1 ? vt.splice(Lt + 1, 0, e) : e.flags & 1 || (Nt.push(e), e.flags |= 1), wi();
}
function mo(e, t, n = $e + 1) {
  for (; n < ye.length; n++) {
    const s = ye[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ye.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ci(e) {
  if (Nt.length) {
    const t = [...new Set(Nt)].sort(
      (n, s) => an(n) - an(s)
    );
    if (Nt.length = 0, vt) {
      vt.push(...t);
      return;
    }
    for (vt = t, Lt = 0; Lt < vt.length; Lt++) {
      const n = vt[Lt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    vt = null, Lt = 0;
  }
}
const an = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ti(e) {
  try {
    for ($e = 0; $e < ye.length; $e++) {
      const t = ye[$e];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), gn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; $e < ye.length; $e++) {
      const t = ye[$e];
      t && (t.flags &= -2);
    }
    $e = -1, ye.length = 0, Ci(), Cn = null, (ye.length || Nt.length) && Ti();
  }
}
let Pe = null, Ai = null;
function Tn(e) {
  const t = Pe;
  return Pe = e, Ai = e && e.type.__scopeId || null, t;
}
function ki(e, t = Pe, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && En(-1);
    const i = Tn(t);
    let r;
    try {
      r = e(...o);
    } finally {
      Tn(i), s._d && En(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function An(e, t) {
  if (Pe === null)
    return e;
  const n = Jn(Pe), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, c = Z] = t[o];
    i && (I(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && lt(r), s.push({
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
function wt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let c = l.dir[s];
    c && (ct(), ze(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), at());
  }
}
function Zs(e, t) {
  if (ge) {
    let n = ge.provides;
    const s = ge.parent && ge.parent.provides;
    s === n && (n = ge.provides = Object.create(s)), n[e] = t;
  }
}
function Dt(e, t, n = !1) {
  const s = no();
  if (s || Vt) {
    let o = Vt ? Vt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(s && s.proxy) : t;
  }
}
const il = /* @__PURE__ */ Symbol.for("v-scx"), rl = () => Dt(il);
function yn(e, t, n) {
  return Pi(e, t, n);
}
function Pi(e, t, n = Z) {
  const { immediate: s, deep: o, flush: i, once: r } = n, l = se({}, n), c = t && s || !t && i !== "post";
  let d;
  if (dn) {
    if (i === "sync") {
      const w = rl();
      d = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!c) {
      const w = () => {
      };
      return w.stop = Xe, w.resume = Xe, w.pause = Xe, w;
    }
  }
  const f = ge;
  l.call = (w, E, A) => ze(w, f, E, A);
  let h = !1;
  i === "post" ? l.scheduler = (w) => {
    xe(w, f && f.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (w, E) => {
    E ? w() : Gs(w);
  }), l.augmentJob = (w) => {
    t && (w.flags |= 4), h && (w.flags |= 2, f && (w.id = f.uid, w.i = f));
  };
  const x = tl(e, t, l);
  return dn && (d ? d.push(x) : c && x()), x;
}
function ll(e, t, n) {
  const s = this.proxy, o = le(e) ? e.includes(".") ? Ei(s, e) : () => s[e] : e.bind(s, s);
  let i;
  I(t) ? i = t : (i = t.handler, n = t);
  const r = mn(this), l = Pi(o, i.bind(s), n);
  return r(), l;
}
function Ei(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const cl = /* @__PURE__ */ Symbol("_vte"), Hi = (e) => e.__isTeleport, qe = /* @__PURE__ */ Symbol("_leaveCb"), qt = /* @__PURE__ */ Symbol("_enterCb");
function al() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Yn(() => {
    e.isMounted = !0;
  }), Js(() => {
    e.isUnmounting = !0;
  }), e;
}
const Fe = [Function, Array], Ri = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Fe,
  onEnter: Fe,
  onAfterEnter: Fe,
  onEnterCancelled: Fe,
  // leave
  onBeforeLeave: Fe,
  onLeave: Fe,
  onAfterLeave: Fe,
  onLeaveCancelled: Fe,
  // appear
  onBeforeAppear: Fe,
  onAppear: Fe,
  onAfterAppear: Fe,
  onAppearCancelled: Fe
}, Fi = (e) => {
  const t = e.subTree;
  return t.component ? Fi(t.component) : t;
}, fl = {
  name: "BaseTransition",
  props: Ri,
  setup(e, { slots: t }) {
    const n = no(), s = al();
    return () => {
      const o = t.default && Mi(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = Li(o), r = /* @__PURE__ */ B(e), { mode: l } = r;
      if (s.isLeaving)
        return fs(i);
      const c = vo(i);
      if (!c)
        return fs(i);
      let d = Ts(
        c,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      c.type !== Se && fn(c, d);
      let f = n.subTree && vo(n.subTree);
      if (f && f.type !== Se && !Pt(f, c) && Fi(n).type !== Se) {
        let h = Ts(
          f,
          r,
          s,
          n
        );
        if (fn(f, h), l === "out-in" && c.type !== Se)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, f = void 0;
          }, fs(i);
        l === "in-out" && c.type !== Se ? h.delayLeave = (x, w, E) => {
          const A = Oi(
            s,
            f
          );
          A[String(f.key)] = f, x[qe] = () => {
            w(), x[qe] = void 0, delete d.delayedLeave, f = void 0;
          }, d.delayedLeave = () => {
            E(), delete d.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return i;
    };
  }
};
function Li(e) {
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
const ul = fl;
function Oi(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Ts(e, t, n, s, o) {
  const {
    appear: i,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: d,
    onAfterEnter: f,
    onEnterCancelled: h,
    onBeforeLeave: x,
    onLeave: w,
    onAfterLeave: E,
    onLeaveCancelled: A,
    onBeforeAppear: F,
    onAppear: N,
    onAfterAppear: H,
    onAppearCancelled: L
  } = t, k = String(e.key), D = Oi(n, e), oe = (V, W) => {
    V && ze(
      V,
      s,
      9,
      W
    );
  }, ce = (V, W) => {
    const te = W[1];
    oe(V, W), O(V) ? V.every((T) => T.length <= 1) && te() : V.length <= 1 && te();
  }, ne = {
    mode: r,
    persisted: l,
    beforeEnter(V) {
      let W = c;
      if (!n.isMounted)
        if (i)
          W = F || c;
        else
          return;
      V[qe] && V[qe](
        !0
        /* cancelled */
      );
      const te = D[k];
      te && Pt(e, te) && te.el[qe] && te.el[qe](), oe(W, [V]);
    },
    enter(V) {
      if (D[k] === e) return;
      let W = d, te = f, T = h;
      if (!n.isMounted)
        if (i)
          W = N || d, te = H || f, T = L || h;
        else
          return;
      let J = !1;
      V[qt] = (Ie) => {
        J || (J = !0, Ie ? oe(T, [V]) : oe(te, [V]), ne.delayedLeave && ne.delayedLeave(), V[qt] = void 0);
      };
      const ae = V[qt].bind(null, !1);
      W ? ce(W, [V, ae]) : ae();
    },
    leave(V, W) {
      const te = String(e.key);
      if (V[qt] && V[qt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return W();
      oe(x, [V]);
      let T = !1;
      V[qe] = (ae) => {
        T || (T = !0, W(), ae ? oe(A, [V]) : oe(E, [V]), V[qe] = void 0, D[te] === e && delete D[te]);
      };
      const J = V[qe].bind(null, !1);
      D[te] = e, w ? ce(w, [V, J]) : J();
    },
    clone(V) {
      const W = Ts(
        V,
        t,
        n,
        s,
        o
      );
      return o && o(W), W;
    }
  };
  return ne;
}
function fs(e) {
  if ($n(e))
    return e = bt(e), e.children = null, e;
}
function vo(e) {
  if (!$n(e))
    return Hi(e.type) && e.children ? Li(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && I(n.default))
      return n.default();
  }
}
function fn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, fn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Mi(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === Ae ? (r.patchFlag & 128 && o++, s = s.concat(
      Mi(r.children, t, l)
    )) : (t || r.type !== Se) && s.push(l != null ? bt(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function dl(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    se({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ii(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function _o(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const kn = /* @__PURE__ */ new WeakMap();
function en(e, t, n, s, o = !1) {
  if (O(e)) {
    e.forEach(
      (A, F) => en(
        A,
        t && (O(t) ? t[F] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (tn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && en(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Jn(s.component) : s.el, r = o ? null : i, { i: l, r: c } = e, d = t && t.r, f = l.refs === Z ? l.refs = {} : l.refs, h = l.setupState, x = /* @__PURE__ */ B(h), w = h === Z ? Xo : (A) => _o(f, A) ? !1 : U(x, A), E = (A, F) => !(F && _o(f, F));
  if (d != null && d !== c) {
    if (bo(t), le(d))
      f[d] = null, w(d) && (h[d] = null);
    else if (/* @__PURE__ */ ve(d)) {
      const A = t;
      E(d, A.k) && (d.value = null), A.k && (f[A.k] = null);
    }
  }
  if (I(c))
    gn(c, l, 12, [r, f]);
  else {
    const A = le(c), F = /* @__PURE__ */ ve(c);
    if (A || F) {
      const N = () => {
        if (e.f) {
          const H = A ? w(c) ? h[c] : f[c] : E() || !e.k ? c.value : f[e.k];
          if (o)
            O(H) && Is(H, i);
          else if (O(H))
            H.includes(i) || H.push(i);
          else if (A)
            f[c] = [i], w(c) && (h[c] = f[c]);
          else {
            const L = [i];
            E(c, e.k) && (c.value = L), e.k && (f[e.k] = L);
          }
        } else A ? (f[c] = r, w(c) && (h[c] = r)) : F && (E(c, e.k) && (c.value = r), e.k && (f[e.k] = r));
      };
      if (r) {
        const H = () => {
          N(), kn.delete(e);
        };
        H.id = -1, kn.set(e, H), xe(H, n);
      } else
        bo(e), N();
    }
  }
}
function bo(e) {
  const t = kn.get(e);
  t && (t.flags |= 8, kn.delete(e));
}
Un().requestIdleCallback;
Un().cancelIdleCallback;
const tn = (e) => !!e.type.__asyncLoader, $n = (e) => e.type.__isKeepAlive;
function hl(e, t) {
  Ni(e, "a", t);
}
function pl(e, t) {
  Ni(e, "da", t);
}
function Ni(e, t, n = ge) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (qn(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      $n(o.parent.vnode) && gl(s, t, n, o), o = o.parent;
  }
}
function gl(e, t, n, s) {
  const o = qn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Xs(() => {
    Is(s[t], o);
  }, n);
}
function qn(e, t, n = ge, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      ct();
      const l = mn(n), c = ze(t, n, e, r);
      return l(), at(), c;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const ht = (e) => (t, n = ge) => {
  (!dn || e === "sp") && qn(e, (...s) => t(...s), n);
}, ml = ht("bm"), Yn = ht("m"), vl = ht(
  "bu"
), _l = ht("u"), Js = ht(
  "bum"
), Xs = ht("um"), bl = ht(
  "sp"
), yl = ht("rtg"), Sl = ht("rtc");
function xl(e, t = ge) {
  qn("ec", e, t);
}
const wl = "components";
function Je(e, t) {
  return Tl(wl, e, !0, t) || e;
}
const Cl = /* @__PURE__ */ Symbol.for("v-ndc");
function Tl(e, t, n = !0, s = !1) {
  const o = Pe || ge;
  if (o) {
    const i = o.type;
    {
      const l = ac(
        i,
        !1
      );
      if (l && (l === t || l === ue(t) || l === Bn(ue(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      yo(o[e] || i[e], t) || // global registration
      yo(o.appContext[e], t)
    );
    return !r && s ? i : r;
  }
}
function yo(e, t) {
  return e && (e[t] || e[ue(t)] || e[Bn(ue(t))]);
}
const As = (e) => e ? sr(e) ? Jn(e) : As(e.parent) : null, nn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => As(e.parent),
    $root: (e) => As(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Vi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Gs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ys.bind(e.proxy)),
    $watch: (e) => ll.bind(e)
  })
), us = (e, t) => e !== Z && !e.__isScriptSetup && U(e, t), Al = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const x = r[t];
      if (x !== void 0)
        switch (x) {
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
        if (us(s, t))
          return r[t] = 1, s[t];
        if (o !== Z && U(o, t))
          return r[t] = 2, o[t];
        if (U(i, t))
          return r[t] = 3, i[t];
        if (n !== Z && U(n, t))
          return r[t] = 4, n[t];
        ks && (r[t] = 0);
      }
    }
    const d = nn[t];
    let f, h;
    if (d)
      return t === "$attrs" && pe(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Z && U(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, U(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return us(o, t) ? (o[t] = n, !0) : s !== Z && U(s, t) ? (s[t] = n, !0) : U(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: r }
  }, l) {
    let c;
    return !!(n[l] || e !== Z && l[0] !== "$" && U(e, l) || us(t, l) || U(i, l) || U(s, l) || U(nn, l) || U(o.config.globalProperties, l) || (c = r.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function So(e) {
  return O(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ks = !0;
function kl(e) {
  const t = Vi(e), n = e.proxy, s = e.ctx;
  ks = !1, t.beforeCreate && xo(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: c,
    inject: d,
    // lifecycle
    created: f,
    beforeMount: h,
    mounted: x,
    beforeUpdate: w,
    updated: E,
    activated: A,
    deactivated: F,
    beforeDestroy: N,
    beforeUnmount: H,
    destroyed: L,
    unmounted: k,
    render: D,
    renderTracked: oe,
    renderTriggered: ce,
    errorCaptured: ne,
    serverPrefetch: V,
    // public API
    expose: W,
    inheritAttrs: te,
    // assets
    components: T,
    directives: J,
    filters: ae
  } = t;
  if (d && Pl(d, s, null), r)
    for (const X in r) {
      const j = r[X];
      I(j) && (s[X] = j.bind(n));
    }
  if (o) {
    const X = o.call(n, n);
    $(X) && (e.data = /* @__PURE__ */ Wn(X));
  }
  if (ks = !0, i)
    for (const X in i) {
      const j = i[X], He = I(j) ? j.bind(n, n) : I(j.get) ? j.get.bind(n, n) : Xe, pt = !I(j) && I(j.set) ? j.set.bind(n) : Xe, et = be({
        get: He,
        set: pt
      });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (Re) => et.value = Re
      });
    }
  if (l)
    for (const X in l)
      Di(l[X], s, n, X);
  if (c) {
    const X = I(c) ? c.call(n) : c;
    Reflect.ownKeys(X).forEach((j) => {
      Zs(j, X[j]);
    });
  }
  f && xo(f, e, "c");
  function ie(X, j) {
    O(j) ? j.forEach((He) => X(He.bind(n))) : j && X(j.bind(n));
  }
  if (ie(ml, h), ie(Yn, x), ie(vl, w), ie(_l, E), ie(hl, A), ie(pl, F), ie(xl, ne), ie(Sl, oe), ie(yl, ce), ie(Js, H), ie(Xs, k), ie(bl, V), O(W))
    if (W.length) {
      const X = e.exposed || (e.exposed = {});
      W.forEach((j) => {
        Object.defineProperty(X, j, {
          get: () => n[j],
          set: (He) => n[j] = He,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === Xe && (e.render = D), te != null && (e.inheritAttrs = te), T && (e.components = T), J && (e.directives = J), V && Ii(e);
}
function Pl(e, t, n = Xe) {
  O(e) && (e = Ps(e));
  for (const s in e) {
    const o = e[s];
    let i;
    $(o) ? "default" in o ? i = Dt(
      o.from || s,
      o.default,
      !0
    ) : i = Dt(o.from || s) : i = Dt(o), /* @__PURE__ */ ve(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[s] = i;
  }
}
function xo(e, t, n) {
  ze(
    O(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Di(e, t, n, s) {
  let o = s.includes(".") ? Ei(n, s) : () => n[s];
  if (le(e)) {
    const i = t[e];
    I(i) && yn(o, i);
  } else if (I(e))
    yn(o, e.bind(n));
  else if ($(e))
    if (O(e))
      e.forEach((i) => Di(i, t, n, s));
    else {
      const i = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(i) && yn(o, i, e);
    }
}
function Vi(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !o.length && !n && !s ? c = t : (c = {}, o.length && o.forEach(
    (d) => Pn(c, d, r, !0)
  ), Pn(c, t, r)), $(t) && i.set(t, c), c;
}
function Pn(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Pn(e, i, n, !0), o && o.forEach(
    (r) => Pn(e, r, n, !0)
  );
  for (const r in t)
    if (!(s && r === "expose")) {
      const l = El[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const El = {
  data: wo,
  props: Co,
  emits: Co,
  // objects
  methods: Zt,
  computed: Zt,
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
  components: Zt,
  directives: Zt,
  // watch
  watch: Rl,
  // provide / inject
  provide: wo,
  inject: Hl
};
function wo(e, t) {
  return t ? e ? function() {
    return se(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Hl(e, t) {
  return Zt(Ps(e), Ps(t));
}
function Ps(e) {
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
function Zt(e, t) {
  return e ? se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Co(e, t) {
  return e ? O(e) && O(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : se(
    /* @__PURE__ */ Object.create(null),
    So(e),
    So(t ?? {})
  ) : t;
}
function Rl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = se(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = _e(e[s], t[s]);
  return n;
}
function zi() {
  return {
    app: null,
    config: {
      isNativeTag: Xo,
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
let Fl = 0;
function Ll(e, t) {
  return function(s, o = null) {
    I(s) || (s = se({}, s)), o != null && !$(o) && (o = null);
    const i = zi(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const d = i.app = {
      _uid: Fl++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: dc,
      get config() {
        return i.config;
      },
      set config(f) {
      },
      use(f, ...h) {
        return r.has(f) || (f && I(f.install) ? (r.add(f), f.install(d, ...h)) : I(f) && (r.add(f), f(d, ...h))), d;
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), d;
      },
      component(f, h) {
        return h ? (i.components[f] = h, d) : i.components[f];
      },
      directive(f, h) {
        return h ? (i.directives[f] = h, d) : i.directives[f];
      },
      mount(f, h, x) {
        if (!c) {
          const w = d._ceVNode || q(s, o);
          return w.appContext = i, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(w, f, x), c = !0, d._container = f, f.__vue_app__ = d, Jn(w.component);
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        c && (ze(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(f, h) {
        return i.provides[f] = h, d;
      },
      runWithContext(f) {
        const h = Vt;
        Vt = d;
        try {
          return f();
        } finally {
          Vt = h;
        }
      }
    };
    return d;
  };
}
let Vt = null;
const Ol = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ue(t)}Modifiers`] || e[`${Le(t)}Modifiers`];
function Ml(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Z;
  let o = n;
  const i = t.startsWith("update:"), r = i && Ol(s, t.slice(7));
  r && (r.trim && (o = n.map((f) => le(f) ? f.trim() : f)), r.number && (o = n.map(br)));
  let l, c = s[l = os(t)] || // also try camelCase event handler (#2249)
  s[l = os(ue(t))];
  !c && i && (c = s[l = os(Le(t))]), c && ze(
    c,
    e,
    6,
    o
  );
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ze(
      d,
      e,
      6,
      o
    );
  }
}
const Il = /* @__PURE__ */ new WeakMap();
function ji(e, t, n = !1) {
  const s = n ? Il : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!I(e)) {
    const c = (d) => {
      const f = ji(d, t, !0);
      f && (l = !0, se(r, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? ($(e) && s.set(e, null), null) : (O(i) ? i.forEach((c) => r[c] = null) : se(r, i), $(e) && s.set(e, r), r);
}
function Gn(e, t) {
  return !e || !Dn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, Le(t)) || U(e, t));
}
function To(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: c,
    render: d,
    renderCache: f,
    props: h,
    data: x,
    setupState: w,
    ctx: E,
    inheritAttrs: A
  } = e, F = Tn(e);
  let N, H;
  try {
    if (n.shapeFlag & 4) {
      const k = o || s, D = k;
      N = Ge(
        d.call(
          D,
          k,
          f,
          h,
          w,
          x,
          E
        )
      ), H = l;
    } else {
      const k = t;
      N = Ge(
        k.length > 1 ? k(
          h,
          { attrs: l, slots: r, emit: c }
        ) : k(
          h,
          null
        )
      ), H = t.props ? l : Nl(l);
    }
  } catch (k) {
    sn.length = 0, Kn(k, e, 1), N = q(Se);
  }
  let L = N;
  if (H && A !== !1) {
    const k = Object.keys(H), { shapeFlag: D } = L;
    k.length && D & 7 && (i && k.some(Vn) && (H = Dl(
      H,
      i
    )), L = bt(L, H, !1, !0));
  }
  return n.dirs && (L = bt(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && fn(L, n.transition), N = L, Tn(F), N;
}
const Nl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Dn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Dl = (e, t) => {
  const n = {};
  for (const s in e)
    (!Vn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Vl(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: c } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Ao(s, r, d) : !!r;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const x = f[h];
        if (Bi(r, s, x) && !Gn(d, x))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? Ao(s, r, d) : !0 : !!r;
  return !1;
}
function Ao(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (Bi(t, e, i) && !Gn(n, i))
      return !0;
  }
  return !1;
}
function Bi(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && $(s) && $(o) ? !Vs(s, o) : s !== o;
}
function zl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = s, e = o), o === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Ui = {}, Wi = () => Object.create(Ui), Ki = (e) => Object.getPrototypeOf(e) === Ui;
function jl(e, t, n, s = !1) {
  const o = {}, i = Wi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), $i(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ qr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function Bl(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ B(o), [c] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let x = f[h];
        if (Gn(e.emitsOptions, x))
          continue;
        const w = t[x];
        if (c)
          if (U(i, x))
            w !== i[x] && (i[x] = w, d = !0);
          else {
            const E = ue(x);
            o[E] = Es(
              c,
              l,
              E,
              w,
              e,
              !1
            );
          }
        else
          w !== i[x] && (i[x] = w, d = !0);
      }
    }
  } else {
    $i(e, t, o, i) && (d = !0);
    let f;
    for (const h in l)
      (!t || // for camelCase
      !U(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Le(h)) === h || !U(t, f))) && (c ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[f] !== void 0) && (o[h] = Es(
        c,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete o[h]);
    if (i !== l)
      for (const h in i)
        (!t || !U(t, h)) && (delete i[h], d = !0);
  }
  d && rt(e.attrs, "set", "");
}
function $i(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let c in t) {
      if (Jt(c))
        continue;
      const d = t[c];
      let f;
      o && U(o, f = ue(c)) ? !i || !i.includes(f) ? n[f] = d : (l || (l = {}))[f] = d : Gn(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d, r = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ B(n), d = l || Z;
    for (let f = 0; f < i.length; f++) {
      const h = i[f];
      n[h] = Es(
        o,
        c,
        h,
        d[h],
        e,
        !U(d, h)
      );
    }
  }
  return r;
}
function Es(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = U(r, "default");
    if (l && s === void 0) {
      const c = r.default;
      if (r.type !== Function && !r.skipFactory && I(c)) {
        const { propsDefaults: d } = o;
        if (n in d)
          s = d[n];
        else {
          const f = mn(o);
          s = d[n] = c.call(
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
    ] && (s === "" || s === Le(n)) && (s = !0));
  }
  return s;
}
const Ul = /* @__PURE__ */ new WeakMap();
function qi(e, t, n = !1) {
  const s = n ? Ul : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let c = !1;
  if (!I(e)) {
    const f = (h) => {
      c = !0;
      const [x, w] = qi(h, t, !0);
      se(r, x), w && l.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c)
    return $(e) && s.set(e, Ot), Ot;
  if (O(i))
    for (let f = 0; f < i.length; f++) {
      const h = ue(i[f]);
      ko(h) && (r[h] = Z);
    }
  else if (i)
    for (const f in i) {
      const h = ue(f);
      if (ko(h)) {
        const x = i[f], w = r[h] = O(x) || I(x) ? { type: x } : se({}, x), E = w.type;
        let A = !1, F = !0;
        if (O(E))
          for (let N = 0; N < E.length; ++N) {
            const H = E[N], L = I(H) && H.name;
            if (L === "Boolean") {
              A = !0;
              break;
            } else L === "String" && (F = !1);
          }
        else
          A = I(E) && E.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = A, w[
          1
          /* shouldCastTrue */
        ] = F, (A || U(w, "default")) && l.push(h);
      }
    }
  const d = [r, l];
  return $(e) && s.set(e, d), d;
}
function ko(e) {
  return e[0] !== "$" && !Jt(e);
}
const Qs = (e) => e === "_" || e === "_ctx" || e === "$stable", eo = (e) => O(e) ? e.map(Ge) : [Ge(e)], Wl = (e, t, n) => {
  if (t._n)
    return t;
  const s = ki((...o) => eo(t(...o)), n);
  return s._c = !1, s;
}, Yi = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Qs(o)) continue;
    const i = e[o];
    if (I(i))
      t[o] = Wl(o, i, s);
    else if (i != null) {
      const r = eo(i);
      t[o] = () => r;
    }
  }
}, Gi = (e, t) => {
  const n = eo(t);
  e.slots.default = () => n;
}, Zi = (e, t, n) => {
  for (const s in t)
    (n || !Qs(s)) && (e[s] = t[s]);
}, Kl = (e, t, n) => {
  const s = e.slots = Wi();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Zi(s, t, n), n && ni(s, "_", o, !0)) : Yi(t, s);
  } else t && Gi(e, t);
}, $l = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = Z;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Zi(o, t, n) : (i = !t.$stable, Yi(t, o)), r = t;
  } else t && (Gi(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !Qs(l) && r[l] == null && delete o[l];
}, xe = Jl;
function ql(e) {
  return Yl(e);
}
function Yl(e, t) {
  const n = Un();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: c,
    setText: d,
    setElementText: f,
    parentNode: h,
    nextSibling: x,
    setScopeId: w = Xe,
    insertStaticContent: E
  } = e, A = (a, u, p, y = null, v = null, _ = null, b = void 0, m = null, S = !!u.dynamicChildren) => {
    if (a === u)
      return;
    a && !Pt(a, u) && (y = Rt(a), Re(a, v, _, !0), a = null), u.patchFlag === -2 && (S = !1, u.dynamicChildren = null);
    const { type: g, ref: P, shapeFlag: C } = u;
    switch (g) {
      case Zn:
        F(a, u, p, y);
        break;
      case Se:
        N(a, u, p, y);
        break;
      case hs:
        a == null && H(u, p, y, b);
        break;
      case Ae:
        T(
          a,
          u,
          p,
          y,
          v,
          _,
          b,
          m,
          S
        );
        break;
      default:
        C & 1 ? D(
          a,
          u,
          p,
          y,
          v,
          _,
          b,
          m,
          S
        ) : C & 6 ? J(
          a,
          u,
          p,
          y,
          v,
          _,
          b,
          m,
          S
        ) : (C & 64 || C & 128) && g.process(
          a,
          u,
          p,
          y,
          v,
          _,
          b,
          m,
          S,
          xt
        );
    }
    P != null && v ? en(P, a && a.ref, _, u || a, !u) : P == null && a && a.ref != null && en(a.ref, null, _, a, !0);
  }, F = (a, u, p, y) => {
    if (a == null)
      s(
        u.el = l(u.children),
        p,
        y
      );
    else {
      const v = u.el = a.el;
      u.children !== a.children && d(v, u.children);
    }
  }, N = (a, u, p, y) => {
    a == null ? s(
      u.el = c(u.children || ""),
      p,
      y
    ) : u.el = a.el;
  }, H = (a, u, p, y) => {
    [a.el, a.anchor] = E(
      a.children,
      u,
      p,
      y,
      a.el,
      a.anchor
    );
  }, L = ({ el: a, anchor: u }, p, y) => {
    let v;
    for (; a && a !== u; )
      v = x(a), s(a, p, y), a = v;
    s(u, p, y);
  }, k = ({ el: a, anchor: u }) => {
    let p;
    for (; a && a !== u; )
      p = x(a), o(a), a = p;
    o(u);
  }, D = (a, u, p, y, v, _, b, m, S) => {
    if (u.type === "svg" ? b = "svg" : u.type === "math" && (b = "mathml"), a == null)
      oe(
        u,
        p,
        y,
        v,
        _,
        b,
        m,
        S
      );
    else {
      const g = a.el && a.el._isVueCE ? a.el : null;
      try {
        g && g._beginPatch(), V(
          a,
          u,
          v,
          _,
          b,
          m,
          S
        );
      } finally {
        g && g._endPatch();
      }
    }
  }, oe = (a, u, p, y, v, _, b, m) => {
    let S, g;
    const { props: P, shapeFlag: C, transition: R, dirs: M } = a;
    if (S = a.el = r(
      a.type,
      _,
      P && P.is,
      P
    ), C & 8 ? f(S, a.children) : C & 16 && ne(
      a.children,
      S,
      null,
      y,
      v,
      ds(a, _),
      b,
      m
    ), M && wt(a, null, y, "created"), ce(S, a, a.scopeId, b, y), P) {
      for (const Y in P)
        Y !== "value" && !Jt(Y) && i(S, Y, null, P[Y], _, y);
      "value" in P && i(S, "value", null, P.value, _), (g = P.onVnodeBeforeMount) && We(g, y, a);
    }
    M && wt(a, null, y, "beforeMount");
    const z = Gl(v, R);
    z && R.beforeEnter(S), s(S, u, p), ((g = P && P.onVnodeMounted) || z || M) && xe(() => {
      g && We(g, y, a), z && R.enter(S), M && wt(a, null, y, "mounted");
    }, v);
  }, ce = (a, u, p, y, v) => {
    if (p && w(a, p), y)
      for (let _ = 0; _ < y.length; _++)
        w(a, y[_]);
    if (v) {
      let _ = v.subTree;
      if (u === _ || er(_.type) && (_.ssContent === u || _.ssFallback === u)) {
        const b = v.vnode;
        ce(
          a,
          b,
          b.scopeId,
          b.slotScopeIds,
          v.parent
        );
      }
    }
  }, ne = (a, u, p, y, v, _, b, m, S = 0) => {
    for (let g = S; g < a.length; g++) {
      const P = a[g] = m ? it(a[g]) : Ge(a[g]);
      A(
        null,
        P,
        u,
        p,
        y,
        v,
        _,
        b,
        m
      );
    }
  }, V = (a, u, p, y, v, _, b) => {
    const m = u.el = a.el;
    let { patchFlag: S, dynamicChildren: g, dirs: P } = u;
    S |= a.patchFlag & 16;
    const C = a.props || Z, R = u.props || Z;
    let M;
    if (p && Ct(p, !1), (M = R.onVnodeBeforeUpdate) && We(M, p, u, a), P && wt(u, a, p, "beforeUpdate"), p && Ct(p, !0), (C.innerHTML && R.innerHTML == null || C.textContent && R.textContent == null) && f(m, ""), g ? W(
      a.dynamicChildren,
      g,
      m,
      p,
      y,
      ds(u, v),
      _
    ) : b || j(
      a,
      u,
      m,
      null,
      p,
      y,
      ds(u, v),
      _,
      !1
    ), S > 0) {
      if (S & 16)
        te(m, C, R, p, v);
      else if (S & 2 && C.class !== R.class && i(m, "class", null, R.class, v), S & 4 && i(m, "style", C.style, R.style, v), S & 8) {
        const z = u.dynamicProps;
        for (let Y = 0; Y < z.length; Y++) {
          const Q = z[Y], re = C[Q], de = R[Q];
          (de !== re || Q === "value") && i(m, Q, re, de, v, p);
        }
      }
      S & 1 && a.children !== u.children && f(m, u.children);
    } else !b && g == null && te(m, C, R, p, v);
    ((M = R.onVnodeUpdated) || P) && xe(() => {
      M && We(M, p, u, a), P && wt(u, a, p, "updated");
    }, y);
  }, W = (a, u, p, y, v, _, b) => {
    for (let m = 0; m < u.length; m++) {
      const S = a[m], g = u[m], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === Ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pt(S, g) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? h(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      A(
        S,
        g,
        P,
        null,
        y,
        v,
        _,
        b,
        !0
      );
    }
  }, te = (a, u, p, y, v) => {
    if (u !== p) {
      if (u !== Z)
        for (const _ in u)
          !Jt(_) && !(_ in p) && i(
            a,
            _,
            u[_],
            null,
            v,
            y
          );
      for (const _ in p) {
        if (Jt(_)) continue;
        const b = p[_], m = u[_];
        b !== m && _ !== "value" && i(a, _, m, b, v, y);
      }
      "value" in p && i(a, "value", u.value, p.value, v);
    }
  }, T = (a, u, p, y, v, _, b, m, S) => {
    const g = u.el = a ? a.el : l(""), P = u.anchor = a ? a.anchor : l("");
    let { patchFlag: C, dynamicChildren: R, slotScopeIds: M } = u;
    M && (m = m ? m.concat(M) : M), a == null ? (s(g, p, y), s(P, p, y), ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      p,
      P,
      v,
      _,
      b,
      m,
      S
    )) : C > 0 && C & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === R.length ? (W(
      a.dynamicChildren,
      R,
      p,
      v,
      _,
      b,
      m
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || v && u === v.subTree) && Ji(
      a,
      u,
      !0
      /* shallow */
    )) : j(
      a,
      u,
      p,
      P,
      v,
      _,
      b,
      m,
      S
    );
  }, J = (a, u, p, y, v, _, b, m, S) => {
    u.slotScopeIds = m, a == null ? u.shapeFlag & 512 ? v.ctx.activate(
      u,
      p,
      y,
      b,
      S
    ) : ae(
      u,
      p,
      y,
      v,
      _,
      b,
      S
    ) : Ie(a, u, S);
  }, ae = (a, u, p, y, v, _, b) => {
    const m = a.component = oc(
      a,
      y,
      v
    );
    if ($n(a) && (m.ctx.renderer = xt), ic(m, !1, b), m.asyncDep) {
      if (v && v.registerDep(m, ie, b), !a.el) {
        const S = m.subTree = q(Se);
        N(null, S, u, p), a.placeholder = S.el;
      }
    } else
      ie(
        m,
        a,
        u,
        p,
        v,
        _,
        b
      );
  }, Ie = (a, u, p) => {
    const y = u.component = a.component;
    if (Vl(a, u, p))
      if (y.asyncDep && !y.asyncResolved) {
        X(y, u, p);
        return;
      } else
        y.next = u, y.update();
    else
      u.el = a.el, y.vnode = u;
  }, ie = (a, u, p, y, v, _, b) => {
    const m = () => {
      if (a.isMounted) {
        let { next: C, bu: R, u: M, parent: z, vnode: Y } = a;
        {
          const Be = Xi(a);
          if (Be) {
            C && (C.el = Y.el, X(a, C, b)), Be.asyncDep.then(() => {
              xe(() => {
                a.isUnmounted || g();
              }, v);
            });
            return;
          }
        }
        let Q = C, re;
        Ct(a, !1), C ? (C.el = Y.el, X(a, C, b)) : C = Y, R && is(R), (re = C.props && C.props.onVnodeBeforeUpdate) && We(re, z, C, Y), Ct(a, !0);
        const de = To(a), je = a.subTree;
        a.subTree = de, A(
          je,
          de,
          // parent may have changed if it's in a teleport
          h(je.el),
          // anchor may have changed if it's in a fragment
          Rt(je),
          a,
          v,
          _
        ), C.el = de.el, Q === null && zl(a, de.el), M && xe(M, v), (re = C.props && C.props.onVnodeUpdated) && xe(
          () => We(re, z, C, Y),
          v
        );
      } else {
        let C;
        const { el: R, props: M } = u, { bm: z, m: Y, parent: Q, root: re, type: de } = a, je = tn(u);
        Ct(a, !1), z && is(z), !je && (C = M && M.onVnodeBeforeMount) && We(C, Q, u), Ct(a, !0);
        {
          re.ce && re.ce._hasShadowRoot() && re.ce._injectChildStyle(
            de,
            a.parent ? a.parent.type : void 0
          );
          const Be = a.subTree = To(a);
          A(
            null,
            Be,
            p,
            y,
            a,
            v,
            _
          ), u.el = Be.el;
        }
        if (Y && xe(Y, v), !je && (C = M && M.onVnodeMounted)) {
          const Be = u;
          xe(
            () => We(C, Q, Be),
            v
          );
        }
        (u.shapeFlag & 256 || Q && tn(Q.vnode) && Q.vnode.shapeFlag & 256) && a.a && xe(a.a, v), a.isMounted = !0, u = p = y = null;
      }
    };
    a.scope.on();
    const S = a.effect = new ri(m);
    a.scope.off();
    const g = a.update = S.run.bind(S), P = a.job = S.runIfDirty.bind(S);
    P.i = a, P.id = a.uid, S.scheduler = () => Gs(P), Ct(a, !0), g();
  }, X = (a, u, p) => {
    u.component = a;
    const y = a.vnode.props;
    a.vnode = u, a.next = null, Bl(a, u.props, y, p), $l(a, u.children, p), ct(), mo(a), at();
  }, j = (a, u, p, y, v, _, b, m, S = !1) => {
    const g = a && a.children, P = a ? a.shapeFlag : 0, C = u.children, { patchFlag: R, shapeFlag: M } = u;
    if (R > 0) {
      if (R & 128) {
        pt(
          g,
          C,
          p,
          y,
          v,
          _,
          b,
          m,
          S
        );
        return;
      } else if (R & 256) {
        He(
          g,
          C,
          p,
          y,
          v,
          _,
          b,
          m,
          S
        );
        return;
      }
    }
    M & 8 ? (P & 16 && St(g, v, _), C !== g && f(p, C)) : P & 16 ? M & 16 ? pt(
      g,
      C,
      p,
      y,
      v,
      _,
      b,
      m,
      S
    ) : St(g, v, _, !0) : (P & 8 && f(p, ""), M & 16 && ne(
      C,
      p,
      y,
      v,
      _,
      b,
      m,
      S
    ));
  }, He = (a, u, p, y, v, _, b, m, S) => {
    a = a || Ot, u = u || Ot;
    const g = a.length, P = u.length, C = Math.min(g, P);
    let R;
    for (R = 0; R < C; R++) {
      const M = u[R] = S ? it(u[R]) : Ge(u[R]);
      A(
        a[R],
        M,
        p,
        null,
        v,
        _,
        b,
        m,
        S
      );
    }
    g > P ? St(
      a,
      v,
      _,
      !0,
      !1,
      C
    ) : ne(
      u,
      p,
      y,
      v,
      _,
      b,
      m,
      S,
      C
    );
  }, pt = (a, u, p, y, v, _, b, m, S) => {
    let g = 0;
    const P = u.length;
    let C = a.length - 1, R = P - 1;
    for (; g <= C && g <= R; ) {
      const M = a[g], z = u[g] = S ? it(u[g]) : Ge(u[g]);
      if (Pt(M, z))
        A(
          M,
          z,
          p,
          null,
          v,
          _,
          b,
          m,
          S
        );
      else
        break;
      g++;
    }
    for (; g <= C && g <= R; ) {
      const M = a[C], z = u[R] = S ? it(u[R]) : Ge(u[R]);
      if (Pt(M, z))
        A(
          M,
          z,
          p,
          null,
          v,
          _,
          b,
          m,
          S
        );
      else
        break;
      C--, R--;
    }
    if (g > C) {
      if (g <= R) {
        const M = R + 1, z = M < P ? u[M].el : y;
        for (; g <= R; )
          A(
            null,
            u[g] = S ? it(u[g]) : Ge(u[g]),
            p,
            z,
            v,
            _,
            b,
            m,
            S
          ), g++;
      }
    } else if (g > R)
      for (; g <= C; )
        Re(a[g], v, _, !0), g++;
    else {
      const M = g, z = g, Y = /* @__PURE__ */ new Map();
      for (g = z; g <= R; g++) {
        const Ce = u[g] = S ? it(u[g]) : Ge(u[g]);
        Ce.key != null && Y.set(Ce.key, g);
      }
      let Q, re = 0;
      const de = R - z + 1;
      let je = !1, Be = 0;
      const Kt = new Array(de);
      for (g = 0; g < de; g++) Kt[g] = 0;
      for (g = M; g <= C; g++) {
        const Ce = a[g];
        if (re >= de) {
          Re(Ce, v, _, !0);
          continue;
        }
        let Ue;
        if (Ce.key != null)
          Ue = Y.get(Ce.key);
        else
          for (Q = z; Q <= R; Q++)
            if (Kt[Q - z] === 0 && Pt(Ce, u[Q])) {
              Ue = Q;
              break;
            }
        Ue === void 0 ? Re(Ce, v, _, !0) : (Kt[Ue - z] = g + 1, Ue >= Be ? Be = Ue : je = !0, A(
          Ce,
          u[Ue],
          p,
          null,
          v,
          _,
          b,
          m,
          S
        ), re++);
      }
      const co = je ? Zl(Kt) : Ot;
      for (Q = co.length - 1, g = de - 1; g >= 0; g--) {
        const Ce = z + g, Ue = u[Ce], ao = u[Ce + 1], fo = Ce + 1 < P ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ao.el || Qi(ao)
        ) : y;
        Kt[g] === 0 ? A(
          null,
          Ue,
          p,
          fo,
          v,
          _,
          b,
          m,
          S
        ) : je && (Q < 0 || g !== co[Q] ? et(Ue, p, fo, 2) : Q--);
      }
    }
  }, et = (a, u, p, y, v = null) => {
    const { el: _, type: b, transition: m, children: S, shapeFlag: g } = a;
    if (g & 6) {
      et(a.component.subTree, u, p, y);
      return;
    }
    if (g & 128) {
      a.suspense.move(u, p, y);
      return;
    }
    if (g & 64) {
      b.move(a, u, p, xt);
      return;
    }
    if (b === Ae) {
      s(_, u, p);
      for (let C = 0; C < S.length; C++)
        et(S[C], u, p, y);
      s(a.anchor, u, p);
      return;
    }
    if (b === hs) {
      L(a, u, p);
      return;
    }
    if (y !== 2 && g & 1 && m)
      if (y === 0)
        m.beforeEnter(_), s(_, u, p), xe(() => m.enter(_), v);
      else {
        const { leave: C, delayLeave: R, afterLeave: M } = m, z = () => {
          a.ctx.isUnmounted ? o(_) : s(_, u, p);
        }, Y = () => {
          _._isLeaving && _[qe](
            !0
            /* cancelled */
          ), C(_, () => {
            z(), M && M();
          });
        };
        R ? R(_, z, Y) : Y();
      }
    else
      s(_, u, p);
  }, Re = (a, u, p, y = !1, v = !1) => {
    const {
      type: _,
      props: b,
      ref: m,
      children: S,
      dynamicChildren: g,
      shapeFlag: P,
      patchFlag: C,
      dirs: R,
      cacheIndex: M,
      memo: z
    } = a;
    if (C === -2 && (v = !1), m != null && (ct(), en(m, null, p, a, !0), at()), M != null && (u.renderCache[M] = void 0), P & 256) {
      u.ctx.deactivate(a);
      return;
    }
    const Y = P & 1 && R, Q = !tn(a);
    let re;
    if (Q && (re = b && b.onVnodeBeforeUnmount) && We(re, u, a), P & 6)
      ss(a.component, p, y);
    else {
      if (P & 128) {
        a.suspense.unmount(p, y);
        return;
      }
      Y && wt(a, null, u, "beforeUnmount"), P & 64 ? a.type.remove(
        a,
        u,
        p,
        xt,
        y
      ) : g && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !g.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Ae || C > 0 && C & 64) ? St(
        g,
        u,
        p,
        !1,
        !0
      ) : (_ === Ae && C & 384 || !v && P & 16) && St(S, u, p), y && tt(a);
    }
    const de = z != null && M == null;
    (Q && (re = b && b.onVnodeUnmounted) || Y || de) && xe(() => {
      re && We(re, u, a), Y && wt(a, null, u, "unmounted"), de && (a.el = null);
    }, p);
  }, tt = (a) => {
    const { type: u, el: p, anchor: y, transition: v } = a;
    if (u === Ae) {
      Bt(p, y);
      return;
    }
    if (u === hs) {
      k(a);
      return;
    }
    const _ = () => {
      o(p), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (a.shapeFlag & 1 && v && !v.persisted) {
      const { leave: b, delayLeave: m } = v, S = () => b(p, _);
      m ? m(a.el, _, S) : S();
    } else
      _();
  }, Bt = (a, u) => {
    let p;
    for (; a !== u; )
      p = x(a), o(a), a = p;
    o(u);
  }, ss = (a, u, p) => {
    const { bum: y, scope: v, job: _, subTree: b, um: m, m: S, a: g } = a;
    Po(S), Po(g), y && is(y), v.stop(), _ && (_.flags |= 8, Re(b, a, u, p)), m && xe(m, u), xe(() => {
      a.isUnmounted = !0;
    }, u);
  }, St = (a, u, p, y = !1, v = !1, _ = 0) => {
    for (let b = _; b < a.length; b++)
      Re(a[b], u, p, y, v);
  }, Rt = (a) => {
    if (a.shapeFlag & 6)
      return Rt(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const u = x(a.anchor || a.el), p = u && u[cl];
    return p ? x(p) : u;
  };
  let Ut = !1;
  const Wt = (a, u, p) => {
    let y;
    a == null ? u._vnode && (Re(u._vnode, null, null, !0), y = u._vnode.component) : A(
      u._vnode || null,
      a,
      u,
      null,
      null,
      null,
      p
    ), u._vnode = a, Ut || (Ut = !0, mo(y), Ci(), Ut = !1);
  }, xt = {
    p: A,
    um: Re,
    m: et,
    r: tt,
    mt: ae,
    mc: ne,
    pc: j,
    pbc: W,
    n: Rt,
    o: e
  };
  return {
    render: Wt,
    hydrate: void 0,
    createApp: Ll(Wt)
  };
}
function ds({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ct({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Gl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ji(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (O(s) && O(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = it(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && Ji(r, l)), l.type === Zn && (l.patchFlag === -1 && (l = o[i] = it(l)), l.el = r.el), l.type === Se && !l.el && (l.el = r.el);
    }
}
function Zl(e) {
  const t = e.slice(), n = [0];
  let s, o, i, r, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const d = e[s];
    if (d !== 0) {
      if (o = n[n.length - 1], e[o] < d) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        l = i + r >> 1, e[n[l]] < d ? i = l + 1 : r = l;
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
function Xi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Xi(t);
}
function Po(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Qi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Qi(t.subTree) : null;
}
const er = (e) => e.__isSuspense;
function Jl(e, t) {
  t && t.pendingBranch ? O(e) ? t.effects.push(...e) : t.effects.push(e) : ol(e);
}
const Ae = /* @__PURE__ */ Symbol.for("v-fgt"), Zn = /* @__PURE__ */ Symbol.for("v-txt"), Se = /* @__PURE__ */ Symbol.for("v-cmt"), hs = /* @__PURE__ */ Symbol.for("v-stc"), sn = [];
let Ee = null;
function G(e = !1) {
  sn.push(Ee = e ? null : []);
}
function Xl() {
  sn.pop(), Ee = sn[sn.length - 1] || null;
}
let un = 1;
function En(e, t = !1) {
  un += e, e < 0 && Ee && t && (Ee.hasOnce = !0);
}
function tr(e) {
  return e.dynamicChildren = un > 0 ? Ee || Ot : null, Xl(), un > 0 && Ee && Ee.push(e), e;
}
function me(e, t, n, s, o, i) {
  return tr(
    K(
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
function Ne(e, t, n, s, o) {
  return tr(
    q(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Hn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const nr = ({ key: e }) => e ?? null, Sn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || /* @__PURE__ */ ve(e) || I(e) ? { i: Pe, r: e, k: t, f: !!n } : e : null);
function K(e, t = null, n = null, s = 0, o = null, i = e === Ae ? 0 : 1, r = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && nr(t),
    ref: t && Sn(t),
    scopeId: Ai,
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
  return l ? (to(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= le(n) ? 8 : 16), un > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ee.push(c), c;
}
const q = Ql;
function Ql(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Cl) && (e = Se), Hn(e)) {
    const l = bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && to(l, n), un > 0 && !i && Ee && (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)), l.patchFlag = -2, l;
  }
  if (fc(e) && (e = e.__vccOpts), t) {
    t = ec(t);
    let { class: l, style: c } = t;
    l && !le(l) && (t.class = zt(l)), $(c) && (/* @__PURE__ */ qs(c) && !O(c) && (c = se({}, c)), t.style = Ds(c));
  }
  const r = le(e) ? 1 : er(e) ? 128 : Hi(e) ? 64 : $(e) ? 4 : I(e) ? 2 : 0;
  return K(
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
function ec(e) {
  return e ? /* @__PURE__ */ qs(e) || Ki(e) ? se({}, e) : e : null;
}
function bt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: c } = e, d = t ? tc(o || {}, t) : o, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && nr(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? O(i) ? i.concat(Sn(t)) : [i, Sn(t)] : Sn(t)
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
    ssContent: e.ssContent && bt(e.ssContent),
    ssFallback: e.ssFallback && bt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && fn(
    f,
    c.clone(f)
  ), f;
}
function on(e = " ", t = 0) {
  return q(Zn, null, e, t);
}
function fe(e = "", t = !1) {
  return t ? (G(), Ne(Se, null, e)) : q(Se, null, e);
}
function Ge(e) {
  return e == null || typeof e == "boolean" ? q(Se) : O(e) ? q(
    Ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Hn(e) ? it(e) : q(Zn, null, String(e));
}
function it(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bt(e);
}
function to(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (O(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), to(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Ki(t) ? t._ctx = Pe : o === 3 && Pe && (Pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: Pe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [on(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function tc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = zt([t.class, s.class]));
      else if (o === "style")
        t.style = Ds([t.style, s.style]);
      else if (Dn(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(O(i) && i.includes(r)) ? t[o] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Vn(o) && (t[o] = r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function We(e, t, n, s = null) {
  ze(e, t, 7, [
    n,
    s
  ]);
}
const nc = zi();
let sc = 0;
function oc(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || nc, i = {
    uid: sc++,
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
    scope: new kr(
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
    propsOptions: qi(s, o),
    emitsOptions: ji(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Z,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Z,
    data: Z,
    props: Z,
    attrs: Z,
    slots: Z,
    refs: Z,
    setupState: Z,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ml.bind(null, i), e.ce && e.ce(i), i;
}
let ge = null;
const no = () => ge || Pe;
let Rn, Hs;
{
  const e = Un(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  Rn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ge = n
  ), Hs = t(
    "__VUE_SSR_SETTERS__",
    (n) => dn = n
  );
}
const mn = (e) => {
  const t = ge;
  return Rn(e), e.scope.on(), () => {
    e.scope.off(), Rn(t);
  };
}, Eo = () => {
  ge && ge.scope.off(), Rn(null);
};
function sr(e) {
  return e.vnode.shapeFlag & 4;
}
let dn = !1;
function ic(e, t = !1, n = !1) {
  t && Hs(t);
  const { props: s, children: o } = e.vnode, i = sr(e);
  jl(e, s, i, t), Kl(e, o, n || t);
  const r = i ? rc(e, t) : void 0;
  return t && Hs(!1), r;
}
function rc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Al);
  const { setup: s } = n;
  if (s) {
    ct();
    const o = e.setupContext = s.length > 1 ? cc(e) : null, i = mn(e), r = gn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = ei(r);
    if (at(), i(), (l || e.sp) && !tn(e) && Ii(e), l) {
      if (r.then(Eo, Eo), t)
        return r.then((c) => {
          Ho(e, c);
        }).catch((c) => {
          Kn(c, e, 0);
        });
      e.asyncDep = r;
    } else
      Ho(e, r);
  } else
    or(e);
}
function Ho(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $(t) && (e.setupState = Si(t)), or(e);
}
function or(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Xe);
  {
    const o = mn(e);
    ct();
    try {
      kl(e);
    } finally {
      at(), o();
    }
  }
}
const lc = {
  get(e, t) {
    return pe(e, "get", ""), e[t];
  }
};
function cc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, lc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Jn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Si(Yr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in nn)
        return nn[n](e);
    },
    has(t, n) {
      return n in t || n in nn;
    }
  })) : e.proxy;
}
function ac(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function fc(e) {
  return I(e) && "__vccOpts" in e;
}
const be = (e, t) => /* @__PURE__ */ Qr(e, t, dn);
function uc(e, t, n) {
  try {
    En(-1);
    const s = arguments.length;
    return s === 2 ? $(t) && !O(t) ? Hn(t) ? q(e, null, [t]) : q(e, t) : q(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Hn(n) && (n = [n]), q(e, t, n));
  } finally {
    En(1);
  }
}
const dc = "3.5.31";
let Rs;
const Ro = typeof window < "u" && window.trustedTypes;
if (Ro)
  try {
    Rs = /* @__PURE__ */ Ro.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ir = Rs ? (e) => Rs.createHTML(e) : (e) => e, hc = "http://www.w3.org/2000/svg", pc = "http://www.w3.org/1998/Math/MathML", ot = typeof document < "u" ? document : null, Fo = ot && /* @__PURE__ */ ot.createElement("template"), gc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? ot.createElementNS(hc, e) : t === "mathml" ? ot.createElementNS(pc, e) : n ? ot.createElement(e, { is: n }) : ot.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => ot.createTextNode(e),
  createComment: (e) => ot.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ot.querySelector(e),
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
      Fo.innerHTML = ir(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Fo.content;
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
}, gt = "transition", Yt = "animation", hn = /* @__PURE__ */ Symbol("_vtc"), rr = {
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
}, mc = /* @__PURE__ */ se(
  {},
  Ri,
  rr
), vc = (e) => (e.displayName = "Transition", e.props = mc, e), _c = /* @__PURE__ */ vc(
  (e, { slots: t }) => uc(ul, bc(e), t)
), Tt = (e, t = []) => {
  O(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Lo = (e) => e ? O(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function bc(e) {
  const t = {};
  for (const T in e)
    T in rr || (t[T] = e[T]);
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
    appearActiveClass: d = r,
    appearToClass: f = l,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: x = `${n}-leave-active`,
    leaveToClass: w = `${n}-leave-to`
  } = e, E = yc(o), A = E && E[0], F = E && E[1], {
    onBeforeEnter: N,
    onEnter: H,
    onEnterCancelled: L,
    onLeave: k,
    onLeaveCancelled: D,
    onBeforeAppear: oe = N,
    onAppear: ce = H,
    onAppearCancelled: ne = L
  } = t, V = (T, J, ae, Ie) => {
    T._enterCancelled = Ie, At(T, J ? f : l), At(T, J ? d : r), ae && ae();
  }, W = (T, J) => {
    T._isLeaving = !1, At(T, h), At(T, w), At(T, x), J && J();
  }, te = (T) => (J, ae) => {
    const Ie = T ? ce : H, ie = () => V(J, T, ae);
    Tt(Ie, [J, ie]), Oo(() => {
      At(J, T ? c : i), st(J, T ? f : l), Lo(Ie) || Mo(J, s, A, ie);
    });
  };
  return se(t, {
    onBeforeEnter(T) {
      Tt(N, [T]), st(T, i), st(T, r);
    },
    onBeforeAppear(T) {
      Tt(oe, [T]), st(T, c), st(T, d);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(T, J) {
      T._isLeaving = !0;
      const ae = () => W(T, J);
      st(T, h), T._enterCancelled ? (st(T, x), Do(T)) : (Do(T), st(T, x)), Oo(() => {
        T._isLeaving && (At(T, h), st(T, w), Lo(k) || Mo(T, s, F, ae));
      }), Tt(k, [T, ae]);
    },
    onEnterCancelled(T) {
      V(T, !1, void 0, !0), Tt(L, [T]);
    },
    onAppearCancelled(T) {
      V(T, !0, void 0, !0), Tt(ne, [T]);
    },
    onLeaveCancelled(T) {
      W(T), Tt(D, [T]);
    }
  });
}
function yc(e) {
  if (e == null)
    return null;
  if ($(e))
    return [ps(e.enter), ps(e.leave)];
  {
    const t = ps(e);
    return [t, t];
  }
}
function ps(e) {
  return bs(e);
}
function st(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[hn] || (e[hn] = /* @__PURE__ */ new Set())).add(t);
}
function At(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[hn];
  n && (n.delete(t), n.size || (e[hn] = void 0));
}
function Oo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Sc = 0;
function Mo(e, t, n, s) {
  const o = e._endId = ++Sc, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: r, timeout: l, propCount: c } = xc(e, t);
  if (!r)
    return s();
  const d = r + "end";
  let f = 0;
  const h = () => {
    e.removeEventListener(d, x), i();
  }, x = (w) => {
    w.target === e && ++f >= c && h();
  };
  setTimeout(() => {
    f < c && h();
  }, l + 1), e.addEventListener(d, x);
}
function xc(e, t) {
  const n = window.getComputedStyle(e), s = (E) => (n[E] || "").split(", "), o = s(`${gt}Delay`), i = s(`${gt}Duration`), r = Io(o, i), l = s(`${Yt}Delay`), c = s(`${Yt}Duration`), d = Io(l, c);
  let f = null, h = 0, x = 0;
  t === gt ? r > 0 && (f = gt, h = r, x = i.length) : t === Yt ? d > 0 && (f = Yt, h = d, x = c.length) : (h = Math.max(r, d), f = h > 0 ? r > d ? gt : Yt : null, x = f ? f === gt ? i.length : c.length : 0);
  const w = f === gt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${gt}Property`).toString()
  );
  return {
    type: f,
    timeout: h,
    propCount: x,
    hasTransform: w
  };
}
function Io(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => No(n) + No(e[s])));
}
function No(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Do(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function wc(e, t, n) {
  const s = e[hn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Fn = /* @__PURE__ */ Symbol("_vod"), lr = /* @__PURE__ */ Symbol("_vsh"), Ln = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Fn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Gt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Gt(e, !0), s.enter(e)) : s.leave(e, () => {
      Gt(e, !1);
    }) : Gt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Gt(e, t);
  }
};
function Gt(e, t) {
  e.style.display = t ? e[Fn] : "none", e[lr] = !t;
}
const Cc = /* @__PURE__ */ Symbol(""), Tc = /(?:^|;)\s*display\s*:/;
function Ac(e, t, n) {
  const s = e.style, o = le(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (le(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && xn(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && xn(s, r, "");
    for (const r in n)
      r === "display" && (i = !0), xn(s, r, n[r]);
  } else if (o) {
    if (t !== n) {
      const r = s[Cc];
      r && (n += ";" + r), s.cssText = n, i = Tc.test(n);
    }
  } else t && e.removeAttribute("style");
  Fn in e && (e[Fn] = i ? s.display : "", e[lr] && (s.display = "none"));
}
const Vo = /\s*!important$/;
function xn(e, t, n) {
  if (O(n))
    n.forEach((s) => xn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = kc(e, t);
    Vo.test(n) ? e.setProperty(
      Le(s),
      n.replace(Vo, ""),
      "important"
    ) : e[s] = n;
  }
}
const zo = ["Webkit", "Moz", "ms"], gs = {};
function kc(e, t) {
  const n = gs[t];
  if (n)
    return n;
  let s = ue(t);
  if (s !== "filter" && s in e)
    return gs[t] = s;
  s = Bn(s);
  for (let o = 0; o < zo.length; o++) {
    const i = zo[o] + s;
    if (i in e)
      return gs[t] = i;
  }
  return t;
}
const jo = "http://www.w3.org/1999/xlink";
function Bo(e, t, n, s, o, i = Tr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(jo, t.slice(6, t.length)) : e.setAttributeNS(jo, t, n) : n == null || i && !si(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Qe(n) ? String(n) : n
  );
}
function Uo(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ir(n) : n);
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
    l === "boolean" ? n = si(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(o || t);
}
function Pc(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ec(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Wo = /* @__PURE__ */ Symbol("_vei");
function Hc(e, t, n, s, o = null) {
  const i = e[Wo] || (e[Wo] = {}), r = i[t];
  if (s && r)
    r.value = s;
  else {
    const [l, c] = Rc(t);
    if (s) {
      const d = i[t] = Oc(
        s,
        o
      );
      Pc(e, l, d, c);
    } else r && (Ec(e, l, r, c), i[t] = void 0);
  }
}
const Ko = /(?:Once|Passive|Capture)$/;
function Rc(e) {
  let t;
  if (Ko.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ko); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Le(e.slice(2)), t];
}
let ms = 0;
const Fc = /* @__PURE__ */ Promise.resolve(), Lc = () => ms || (Fc.then(() => ms = 0), ms = Date.now());
function Oc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ze(
      Mc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Lc(), n;
}
function Mc(e, t) {
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
const $o = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ic = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? wc(e, s, r) : t === "style" ? Ac(e, n, s) : Dn(t) ? Vn(t) || Hc(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nc(e, t, s, r)) ? (Uo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bo(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Dc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !le(s))) ? Uo(e, ue(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Bo(e, t, s, r));
};
function Nc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && $o(t) && I(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return $o(t) && le(n) ? !1 : t in e;
}
function Dc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = ue(t);
  return Array.isArray(n) ? n.some((o) => ue(o) === s) : Object.keys(n).some((o) => ue(o) === s);
}
const qo = {};
// @__NO_SIDE_EFFECTS__
function Vc(e, t, n) {
  let s = /* @__PURE__ */ dl(e, t);
  zn(s) && (s = se({}, s, t));
  class o extends so {
    constructor(r) {
      super(s, r, n);
    }
  }
  return o.def = s, o;
}
const zc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class so extends zc {
  constructor(t, n = {}, s = Go) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && s !== Go ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      se({}, t.shadowRootOptions, {
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
      if (t instanceof so) {
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
    this._connected = !1, Ys(() => {
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
          const d = i[c];
          (d === Number || d && d.type === Number) && (c in this._props && (this._props[c] = bs(this._props[c])), (l || (l = /* @__PURE__ */ Object.create(null)))[ue(c)] = !0);
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
        U(this, s) || Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => yi(n[s])
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
    let s = n ? this.getAttribute(t) : qo;
    const o = ue(t);
    n && this._numberProps && this._numberProps[o] && (s = bs(s)), this._setProp(o, s, !1, !0);
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
    if (n !== this._props[t] && (this._dirty = !0, n === qo ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const i = this._ob;
      i && (this._processMutations(i.takeRecords()), i.disconnect()), n === !0 ? this.setAttribute(Le(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Le(t), n + "") : n || this.removeAttribute(Le(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Bc(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = q(this._def, se(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const o = (i, r) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            zn(r[0]) ? se({ detail: r }, r[0]) : { detail: r }
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
    for (let c = t.length - 1; c >= 0; c--) {
      const d = document.createElement("style");
      o && d.setAttribute("nonce", o), d.textContent = t[c], i.insertBefore(d, l || r), l = d, c === 0 && (s || this._styleAnchors.set(this._def, d), n && this._styleAnchors.set(n, d));
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
            const d = n + "-s", f = document.createTreeWalker(c, 1);
            c.setAttribute(d, "");
            let h;
            for (; h = f.nextNode(); )
              h.setAttribute(d, "");
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
const jc = /* @__PURE__ */ se({ patchProp: Ic }, gc);
let Yo;
function cr() {
  return Yo || (Yo = ql(jc));
}
const Bc = ((...e) => {
  cr().render(...e);
}), Go = ((...e) => {
  const t = cr().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Wc(s);
    if (!o) return;
    const i = t._component;
    !I(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, Uc(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
});
function Uc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Wc(e) {
  return le(e) ? document.querySelector(e) : e;
}
const ar = /* @__PURE__ */ Symbol("voiceState");
function Kc() {
  const e = /* @__PURE__ */ Wn({
    currentStage: null,
    isListening: !1,
    isHelpStage: !1,
    isPopupOpened: !0
  });
  return {
    state: e,
    toggleListening: (r) => {
      e.isListening = r;
    },
    togglePopupState: (r) => {
      e.isPopupOpened = r;
    },
    toggleHelpStage: (r) => {
      e.isHelpStage = r;
    },
    updateCurrentStage: (r) => {
      e.currentStage = r;
    }
  };
}
function $c(e) {
  Zs(ar, e);
}
function oo() {
  const e = Dt(ar);
  if (!e)
    throw new Error("[HandsfreeCooking] useVoiceState() called without a provider. Ensure provideVoiceState() is called in a parent component.");
  return e;
}
function qc(e, t, n, s) {
  const o = {};
  let i = null, r = null, l = [], c = -1;
  const d = window.innerWidth < 768 ? 75 : 60, {
    state: f,
    toggleHelpStage: h,
    toggleListening: x,
    togglePopupState: w,
    updateCurrentStage: E
  } = n, A = () => {
    !i && t.instructions && (i = document.querySelector(t.instructions)), !r && t.ingredients && (r = document.querySelector(t.ingredients)), t.steps && (l = Array.from(document.querySelectorAll(t.steps)));
  }, F = new MutationObserver(() => {
    A();
  });
  F.observe(document.body, { childList: !0, subtree: !0 });
  const N = () => {
    if (l.length > 0 && l[c]) {
      const D = l[c].getBoundingClientRect().top + window.scrollY - d;
      window.scrollTo({
        top: D,
        behavior: "smooth"
      });
    }
    l.length === c + 1 ? (E("listening almost-done"), w(!0)) : (E("listening"), w(!1));
  }, H = (L, k) => {
    L && L.forEach((D) => {
      o[D] = k;
    });
  };
  return e ? (H(e.help, () => {
    E("listening help"), h(!0), w(!0), s("handsfree-command", { command: "help" }), c > 0 && (c -= 1);
  }), H(e.scrollUp, () => {
    window.scrollBy({ top: -300, behavior: "smooth" }), s("handsfree-command", { command: "scroll-up" });
  }), H(e.scrollDown, () => {
    window.scrollBy({ top: 300, behavior: "smooth" }), s("handsfree-command", { command: "scroll-down" });
  }), H(e.exit, () => {
    E("listening"), h(!1), s("handsfree-command", { command: "exit" });
  }), H(e.goToInstructions, () => {
    i || A(), i && (window.scrollTo({
      top: i.offsetTop - d,
      behavior: "smooth"
    }), s("handsfree-command", { command: "go-to-instructions" })), c > 0 && (c -= 1, E("listening"), w(!1));
  }), H(e.goToIngredients, () => {
    r || A(), r && (window.scrollTo({
      top: r.offsetTop - d,
      behavior: "smooth"
    }), s("handsfree-command", { command: "go-to-ingredients" })), c > 0 && (c -= 1, E("listening"), w(!1));
  }), H(e.nextStep, () => {
    l.length === 0 && A(), c < l.length - 1 && (c += 1, N(), s("handsfree-command", { command: "next-step" }));
  }), H(e.previousStep, () => {
    l.length === 0 && A(), c > 0 && (c -= 1, N(), s("handsfree-command", { command: "previous-step" }));
  }), H(e.letsCook, () => {
    x(!0), E("listening"), w(!1), s("handsfree-command", { command: "lets-cook" });
  }), H(e.imDone, () => {
    s("handsfree-command", { command: "im-done" });
  }), { commands: o, destroy: () => F.disconnect() }) : { commands: o, destroy: () => F.disconnect() };
}
function Yc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vs, Zo;
function Gc() {
  if (Zo) return vs;
  Zo = 1, vs = e;
  function e() {
  }
  return e.mixin = function(t) {
    var n = t.prototype || t;
    n.isWildEmitter = !0, n.on = function(s, o, i) {
      this.callbacks = this.callbacks || {};
      var r = arguments.length === 3, l = r ? arguments[1] : void 0, c = r ? arguments[2] : arguments[1];
      return c._groupName = l, (this.callbacks[s] = this.callbacks[s] || []).push(c), this;
    }, n.once = function(s, o, i) {
      var r = this, l = arguments.length === 3, c = l ? arguments[1] : void 0, d = l ? arguments[2] : arguments[1];
      function f() {
        r.off(s, f), d.apply(this, arguments);
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
      var o = [].slice.call(arguments, 1), i = this.callbacks[s], r = this.getWildcardCallbacks(s), l, c, d;
      if (i)
        for (d = i.slice(), l = 0, c = d.length; l < c && d[l]; ++l)
          d[l].apply(this, o);
      if (r)
        for (c = r.length, d = r.slice(), l = 0, c = d.length; l < c && d[l]; ++l)
          d[l].apply(this, [s].concat(o));
      return this;
    }, n.getWildcardCallbacks = function(s) {
      this.callbacks = this.callbacks || {};
      var o, i, r = [];
      for (o in this.callbacks)
        i = o.split("*"), (o === "*" || i.length === 2 && s.slice(0, i[0].length) === i[0]) && (r = r.concat(this.callbacks[o]));
      return r;
    };
  }, e.mixin(e), vs;
}
var _s, Jo;
function Zc() {
  if (Jo) return _s;
  Jo = 1;
  var e = Gc();
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
  return _s = function(o, l) {
    var r = new e();
    if (!n) return r;
    var l = l || {}, c = l.smoothing || 0.1, d = l.interval || 50, f = l.threshold, h = l.play, x = l.history || 10, w = !0;
    s = l.audioContext || s || new n();
    var E, A, F;
    F = s.createAnalyser(), F.fftSize = 512, F.smoothingTimeConstant = c, A = new Float32Array(F.frequencyBinCount), o.jquery && (o = o[0]), o instanceof HTMLAudioElement || o instanceof HTMLVideoElement ? (E = s.createMediaElementSource(o), typeof h > "u" && (h = !0), f = f || -50) : (E = s.createMediaStreamSource(o), f = f || -50), E.connect(F), h && F.connect(s.destination), r.speaking = !1, r.suspend = function() {
      return s.suspend();
    }, r.resume = function() {
      return s.resume();
    }, Object.defineProperty(r, "state", { get: function() {
      return s.state;
    } }), s.onstatechange = function() {
      r.emit("state_change", s.state);
    }, r.setThreshold = function(L) {
      f = L;
    }, r.setInterval = function(L) {
      d = L;
    }, r.stop = function() {
      w = !1, r.emit("volume_change", -100, f), r.speaking && (r.speaking = !1, r.emit("stopped_speaking")), F.disconnect(), E.disconnect();
    }, r.speakingHistory = [];
    for (var N = 0; N < x; N++)
      r.speakingHistory.push(0);
    var H = function() {
      setTimeout(function() {
        if (w) {
          var L = t(F, A);
          r.emit("volume_change", L, f);
          var k = 0;
          if (L > f && !r.speaking) {
            for (var D = r.speakingHistory.length - 3; D < r.speakingHistory.length; D++)
              k += r.speakingHistory[D];
            k >= 2 && (r.speaking = !0, r.emit("speaking"));
          } else if (L < f && r.speaking) {
            for (var D = 0; D < r.speakingHistory.length; D++)
              k += r.speakingHistory[D];
            k == 0 && (r.speaking = !1, r.emit("stopped_speaking"));
          }
          r.speakingHistory.shift(), r.speakingHistory.push(0 + (L > f)), H();
        }
      }, d);
    };
    return H(), r;
  }, _s;
}
var Jc = Zc();
const Xc = /* @__PURE__ */ Yc(Jc);
class fr {
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
    this.audioStreamSpeechEvents = Xc(t, {
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
let On, Te, Fs, Ls, Os, io = !1;
function Oe() {
  return /Android/i.test(navigator.userAgent);
}
let Xn, Me;
const Qc = 120 * 1e3, ea = 3 * 1e3, ta = {
  error: null,
  status: "stopped",
  transcriptions: [],
  finalTranscriptions: !1
}, yt = (e = {}) => {
  Xn({
    ...ta,
    ...e
  });
}, na = {
  lang: "en-US",
  interimResults: !0,
  maxAlternatives: 10
};
function Qn() {
  clearTimeout(Fs), clearTimeout(Ls);
}
function ur() {
  Qn(), Te.abort(), yt(), Oe() || Me(0);
}
function sa() {
  Qn(), Te && Te.stop(), yt(), Oe() || Me(0);
}
function dr() {
  yt({
    status: "starting"
  }), Oe() || Me(0);
  try {
    Te.start();
  } catch (e) {
    console.error(e);
  }
}
function hr() {
  try {
    setTimeout(dr, 100);
  } catch {
    hr();
  }
}
function oa() {
  On && On.stop(), Oe() || Me(0);
}
function ia() {
  Qn(), yt(), Oe() || Me(0), io || hr();
}
function ra() {
  yt({
    status: "recording"
  }), Oe() || Me(0);
}
function la(e, t) {
  clearTimeout(Fs), t || (Fs = setTimeout(() => {
    yt({
      finalTranscriptions: !0,
      status: "recording",
      transcriptions: e
    }), ur();
  }, ea));
}
function ca(e) {
  if (!e || !e.results)
    return;
  const t = e.results[e.resultIndex], n = Object.values(t).map((s) => ({
    confidence: s.confidence,
    text: s.transcript
  }));
  yt({
    finalTranscriptions: t.isFinal,
    status: "recording",
    transcriptions: n
  }), la(n, t.isFinal);
}
function aa(e) {
  yt({
    error: e.error,
    status: "error"
  }), Oe() || Me(0);
}
function fa() {
  Os || ur();
}
function ua() {
  On = new fr({
    onSpeaking: () => {
      Os = !0;
    },
    onStopSpeaking: () => {
      Os = !1, clearTimeout(Ls), Ls = setTimeout(fa, Qc);
    },
    onVolumeChange: (e) => {
      Oe() || Me(e);
    }
  }), Oe() || Me(0), On.start();
}
function da({ lang: e, interimResults: t, maxAlternatives: n }) {
  const s = window.SpeechRecognition || window.webkitSpeechRecognition;
  Te = new s(), Te.continuous = !0, Te.lang = e, Te.interimResults = t, Te.maxAlternatives = n, Te.onstart = ra, Te.onresult = ca, Te.onerror = aa, Te.onend = ia;
}
function ha(e) {
  const t = {
    ...na,
    ...e
  };
  Xn = e.onUserSpeech, Oe() || (Me = e.onUserSpeak), da(t);
}
function pa() {
  io = !1, Oe() || Me && ua(), Xn && dr();
}
function ga() {
  io = !0, Qn(), Oe() || Me && oa(), Xn && sa();
}
const ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  init: ha,
  start: pa,
  stop: ga
}, Symbol.toStringTag, { value: "Module" }));
let Mn, Ke, In = !1, es, ut, Nn;
function dt() {
  return /Android/i.test(navigator.userAgent);
}
const va = {
  lang: "en-US",
  interimResults: !0,
  maxAlternatives: 10
}, _a = {
  error: null,
  status: "stopped",
  transcriptions: [],
  finalTranscriptions: !1
}, Ht = (e = {}) => {
  es({
    ..._a,
    ...e
  });
};
function ba() {
  Ht({
    status: "recording"
  });
}
function ts() {
  dt() || ut(0), Mn && Mn.stop();
}
function ya() {
  Mn = new fr({
    onVolumeChange: (e) => {
      dt() || ut(e);
    }
  }), Mn.start(), dt() || ut(0);
}
function Sa(e, t) {
  clearTimeout(Nn), t || (Nn = setTimeout(() => {
    Ht({
      finalTranscriptions: !0,
      transcriptions: e
    });
  }, 2e3));
}
function xa() {
  dt() || ut && ts(), In = !1, clearTimeout(Nn), Ht();
}
function wa(e) {
  if (!e || !e.results)
    return;
  const t = e.results[e.resultIndex], n = Object.values(t).map((s) => ({
    confidence: s.confidence,
    text: s.transcript
  }));
  Ht({
    finalTranscriptions: t.isFinal,
    status: "recording",
    transcriptions: n
  }), Sa(n, t.isFinal);
}
function Ca() {
  In = !1, clearTimeout(Nn), dt() || ut && ts(), Ht();
}
function Ta(e) {
  Ht({
    error: e.error,
    status: "error"
  }), dt() || ut && ts();
}
function Aa() {
  if (!In) {
    Ht({
      status: "starting"
    });
    try {
      Ke.start(), In = !0;
    } catch (e) {
      console.error(e);
    }
  }
}
function ka({ lang: e, interimResults: t, maxAlternatives: n }) {
  const s = window.SpeechRecognition || window.webkitSpeechRecognition;
  Ke = new s(), Ke.continuous = !1, Ke.lang = e, Ke.interimResults = t, Ke.maxAlternatives = n, Ke.onstart = ba, Ke.onresult = wa, Ke.onerror = Ta, Ke.onend = Ca;
}
function Pa(e) {
  const t = {
    ...va,
    ...e
  };
  ka(t), es = e.onUserSpeech, dt() || (ut = e.onUserSpeak);
}
function Ea() {
  dt() || ut && ya(), es && Aa();
}
function Ha() {
  dt() || ut && ts(), es && xa();
}
const Ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  init: Pa,
  start: Ea,
  stop: Ha
}, Symbol.toStringTag, { value: "Module" })), Fa = navigator.language || navigator.userLanguage || "en-US";
let mt;
function La({
  continuesRecognition: e = !0,
  lang: t = Fa,
  onUserSpeech: n,
  onUserSpeak: s
}) {
  return mt && mt.stop && mt.stop(), e ? mt = ma : mt = Ra, mt.init({
    lang: t,
    onUserSpeech: n,
    onUserSpeak: s
  }), {
    start: mt.start,
    stop: mt.stop
  };
}
const Oa = {
  init: La
}, Ma = {
  mic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><path d="M14.9815 9.25V11.125C14.9815 13.5437 13.0252 15.5 10.6065 15.5C8.18771 15.5 6.23146 13.5437 6.23146 11.125V9.25H4.98146V11.125C4.97521 13.9938 7.13146 16.4 9.98146 16.7125V18H7.48146V19.25H13.7315V18H11.2315V16.7125C14.0752 16.3938 16.2252 13.9875 16.2315 11.125V9.25H14.9815Z"/><path d="M10.6064 14.25C12.3314 14.25 13.7314 12.85 13.7314 11.125V4.875C13.7314 3.15 12.3314 1.75 10.6064 1.75C8.88145 1.75 7.48145 3.15 7.48145 4.875V11.125C7.48145 12.85 8.88145 14.25 10.6064 14.25ZM8.73145 4.875C8.73145 3.8375 9.56895 3 10.6064 3C11.6439 3 12.4814 3.8375 12.4814 4.875V11.125C12.4814 12.1625 11.6439 13 10.6064 13C9.56895 13 8.73145 12.1625 8.73145 11.125V4.875Z"/></svg>',
  help: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/><circle cx="16" cy="23.5" r="1.5"/><path d="M17,8H15.5A4.49,4.49,0,0,0,11,12.5V13h2v-.5A2.5,2.5,0,0,1,15.5,10H17a2.5,2.5,0,0,1,0,5H15v4.5h2V17a4.5,4.5,0,0,0,0-9Z"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"/></svg>',
  "chevron--left": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10 16L20 6 21.4 7.4 12.8 16 21.4 24.6 20 26z"/></svg>',
  "chevron--right": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"/></svg>',
  "chevron--down": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"/></svg>',
  "thumbs-up": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z"/></svg>',
  "thumbs-down": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30,16V9a7.0078,7.0078,0,0,0-7-7H2V16H8.4648l3.5774,5.3662.8453,5.9165A2.0094,2.0094,0,0,0,14.8672,29H17a3.0033,3.0033,0,0,0,3-3V20h6A4.0045,4.0045,0,0,0,30,16ZM8,14H4V4H8Zm20,2a2.0025,2.0025,0,0,1-2,2H18v8a1.0008,1.0008,0,0,1-1,1H14.8672l-.9094-6.3662L10,14.6973V4H23a5.0057,5.0057,0,0,1,5,5Z"/></svg>',
  "checkmark--outline": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><polygon points="14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414"/><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/></svg>'
}, jt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Ia = {
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
    const t = be(() => Ma[e.icon] || ""), n = be(() => e.size ? `hf-icon-${e.size}` : "");
    return {
      svgContent: t,
      cssClass: n
    };
  }
}, Na = ["innerHTML"];
function Da(e, t, n, s, o, i) {
  return G(), me("span", {
    class: zt(["hf-icon", s.cssClass]),
    innerHTML: s.svgContent
  }, null, 10, Na);
}
const ns = /* @__PURE__ */ jt(Ia, [["render", Da]]), Va = {
  components: {
    HfIcon: ns
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
    }, s = be(() => e.isCloseState ? "close" : "chevron--down");
    return {
      togglePopup: n,
      icon: s
    };
  }
}, za = { class: "hf-headline__title" }, ja = { class: "hf-headline__opener" }, Ba = {
  key: 0,
  class: "hf-spinner"
};
function Ua(e, t, n, s, o, i) {
  const r = Je("HfIcon");
  return G(), me("button", {
    class: "hf-headline",
    onClick: t[0] || (t[0] = (...l) => s.togglePopup && s.togglePopup(...l))
  }, [
    q(r, {
      icon: "mic",
      size: 24
    }),
    K("span", za, ke(n.title), 1),
    K("span", ja, [
      n.isLoading ? (G(), me("span", Ba, [...t[1] || (t[1] = [
        K("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          K("circle", {
            cx: "8",
            cy: "8",
            r: "7",
            "stroke-width": "2"
          })
        ], -1)
      ])])) : (G(), Ne(r, {
        key: 1,
        icon: s.icon,
        size: 24
      }, null, 8, ["icon"]))
    ])
  ]);
}
const ro = /* @__PURE__ */ jt(Va, [["render", Ua]]), Wa = {
  components: {
    PopupHeadline: ro
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
    const n = oo();
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
}, Ka = { class: "hf-content-area" }, $a = ["innerHTML"];
function qa(e, t, n, s, o, i) {
  const r = Je("PopupHeadline");
  return G(), me(Ae, null, [
    q(r, {
      class: zt(n.additionalClassname),
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": n.isCloseState,
      onTogglePopup: s.togglePopup
    }, null, 8, ["class", "title", "is-loading", "is-close-state", "onTogglePopup"]),
    An(K("div", Ka, [
      K("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, $a),
      n.translations.buttonText ? (G(), me("button", {
        key: 0,
        class: "hf-button",
        onClick: t[0] || (t[0] = (...l) => s.buttonAction && s.buttonAction(...l))
      }, ke(n.translations.buttonText), 1)) : fe("", !0)
    ], 512), [
      [Ln, n.translations.content && n.translations.content !== "" && s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const Ya = /* @__PURE__ */ jt(Wa, [["render", qa]]), Ga = {
  components: {
    PopupHeadline: ro,
    HfIcon: ns
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
    const n = oo(), s = /* @__PURE__ */ he(0), o = be(() => e.isCloseState && !n.state.isListening);
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
        s.value += 1, s.value === e.translations.steps.length && (n.updateCurrentStage("listening"), n.togglePopupState(!1));
      },
      isClose: o,
      currentStep: s,
      voiceState: n
    };
  }
}, Za = { class: "hf-content-area" }, Ja = ["innerHTML"], Xa = {
  key: 1,
  class: "hf-introduction-steps"
}, Qa = ["innerHTML"], ef = { class: "hf-introduction-buttons" }, tf = ["disabled"];
function nf(e, t, n, s, o, i) {
  const r = Je("PopupHeadline"), l = Je("HfIcon");
  return G(), me(Ae, null, [
    q(r, {
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": s.isClose,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "is-loading", "is-close-state", "onTogglePopup"]),
    An(K("div", Za, [
      s.voiceState.state.isListening ? fe("", !0) : (G(), me("div", {
        key: 0,
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, Ja)),
      s.voiceState.state.isListening ? (G(), me("div", Xa, [
        K("div", {
          class: "hf-step",
          innerHTML: n.translations.steps[s.currentStep]
        }, null, 8, Qa),
        K("div", ef, [
          K("button", {
            class: "hf-button",
            disabled: s.currentStep < 1,
            onClick: t[0] || (t[0] = (...c) => s.goToPrevStep && s.goToPrevStep(...c))
          }, [
            q(l, {
              icon: "chevron--left",
              size: 24
            })
          ], 8, tf),
          K("button", {
            class: "hf-button",
            onClick: t[1] || (t[1] = (...c) => s.goToNextStep && s.goToNextStep(...c))
          }, [
            q(l, {
              icon: "chevron--right",
              size: 24
            })
          ])
        ])
      ])) : fe("", !0),
      s.voiceState.state.isListening ? fe("", !0) : (G(), me("button", {
        key: 2,
        class: "hf-button",
        onClick: t[2] || (t[2] = (...c) => s.beginListening && s.beginListening(...c))
      }, ke(n.translations.buttonText), 1))
    ], 512), [
      [Ln, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const sf = /* @__PURE__ */ jt(Ga, [["render", nf]]), of = {
  components: {
    HfIcon: ns,
    PopupHeadline: ro
  },
  props: {
    translations: {
      type: Object,
      required: !0
    }
  },
  emits: ["closeHandsFreeFlow", "togglePopup"],
  setup(e, { emit: t }) {
    const n = oo(), s = Dt("emitEvent"), o = /* @__PURE__ */ he(null), i = /* @__PURE__ */ he(null), r = /* @__PURE__ */ he(null), l = () => {
      t("closeHandsFreeFlow"), s("handsfree-feedback", { vote: "close" });
    }, c = () => {
      t("togglePopup");
    }, d = /* @__PURE__ */ he(!1), f = () => {
      d.value = !0, s("handsfree-feedback", { vote: "up", text: props.translations.voteUp });
    }, h = () => {
      d.value = !0, s("handsfree-feedback", { vote: "down", text: props.translations.voteDown });
    }, x = () => {
      Ys(() => {
        const w = o.value, E = i.value, A = r.value;
        if (!w || !E || !A)
          return;
        const F = E.offsetWidth + A.offsetWidth, N = w.offsetWidth;
        F > N ? w.classList.add("hf-vote--stack") : w.classList.remove("hf-vote--stack");
      });
    };
    return Yn(() => {
      x(), window.addEventListener("resize", x);
    }), Js(() => {
      window.removeEventListener("resize", x);
    }), {
      closeHandsFreeFlow: l,
      votedUp: f,
      votedDown: h,
      togglePopup: c,
      voted: d,
      voiceState: n,
      handsFreeVotes: o,
      voteUp: i,
      voteDown: r
    };
  }
}, rf = { class: "hf-content-area" }, lf = ["innerHTML"], cf = {
  ref: "handsFreeVotes",
  class: "hf-vote"
}, af = { class: "hf-success-message" };
function ff(e, t, n, s, o, i) {
  const r = Je("PopupHeadline"), l = Je("HfIcon");
  return G(), me(Ae, null, [
    q(r, {
      title: n.translations.title,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "onTogglePopup"]),
    An(K("div", rf, [
      K("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, lf),
      K("div", cf, [
        s.voted ? fe("", !0) : (G(), me("button", {
          key: 0,
          ref: "voteUp",
          class: "hf-button",
          onClick: t[0] || (t[0] = (...c) => s.votedUp && s.votedUp(...c))
        }, [
          q(l, {
            icon: "thumbs-up",
            size: 16
          }),
          K("span", null, ke(n.translations.voteUp), 1)
        ], 512)),
        s.voted ? fe("", !0) : (G(), me("button", {
          key: 1,
          ref: "voteDown",
          class: "hf-button",
          onClick: t[1] || (t[1] = (...c) => s.votedDown && s.votedDown(...c))
        }, [
          q(l, {
            icon: "thumbs-down",
            size: 16
          }),
          K("span", null, ke(n.translations.voteDown), 1)
        ], 512)),
        An(K("div", af, [
          q(l, {
            icon: "checkmark--outline",
            size: 16
          }),
          on(" " + ke(n.translations.successMessage), 1)
        ], 512), [
          [Ln, s.voted]
        ])
      ], 512),
      K("button", {
        class: "hf-button hf-button--solid",
        onClick: t[2] || (t[2] = (...c) => s.closeHandsFreeFlow && s.closeHandsFreeFlow(...c))
      }, ke(n.translations.buttonText), 1)
    ], 512), [
      [Ln, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const uf = /* @__PURE__ */ jt(of, [["render", ff]]), df = ':host{--hf-color-bg: #ffffff;--hf-color-text: #000000;--hf-color-primary: #000000;--hf-color-primary-hover: #000000;--hf-color-error: #cc0033;--hf-color-border: #d9d9d9;--hf-spacing-xxs: 4px;--hf-spacing-xs: 8px;--hf-spacing-s: 16px;--hf-spacing-sm: 24px;--hf-spacing-m: 32px;--hf-font-family: inherit;--hf-font-size-base: 16px;--hf-font-size-small: 14px;--hf-font-size-large: 18px;--hf-popup-width: 410px;--hf-popup-shadow: 0 12px 24px 0 rgba(0, 0, 0, .2);--hf-z-index: 10000;display:block;font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);color:var(--hf-color-text);line-height:1.5}*,*:before,*:after{box-sizing:border-box}.hf-root{margin-bottom:var(--hf-spacing-m)}.hf-intro-row{display:flex;align-items:center;margin-bottom:var(--hf-spacing-s)}.hf-intro-label{margin-right:var(--hf-spacing-xs);font-weight:600;text-transform:uppercase;font-size:var(--hf-font-size-base)}.hf-button{position:relative;display:inline-flex;align-items:center;padding:var(--hf-spacing-s) var(--hf-spacing-sm);border:1px solid var(--hf-color-primary);border-radius:0;background-color:transparent;color:var(--hf-color-primary);font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);font-weight:400;line-height:1;vertical-align:middle;text-decoration:none;cursor:pointer;transition:background-color .2s ease-out,color .2s ease-out}.hf-button .hf-icon{margin-inline-end:var(--hf-spacing-xs)}.hf-button:hover{background-color:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button:hover .hf-icon svg{fill:var(--hf-color-bg)}.hf-button:disabled{opacity:.4;cursor:default}.hf-button--solid{background-color:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button--solid:hover{background-color:var(--hf-color-bg);color:var(--hf-color-primary)}.hf-button--handsfree{padding:var(--hf-spacing-s) var(--hf-spacing-sm)}.hf-button--handsfree .hf-icon{margin-inline-end:var(--hf-spacing-xxs)}.hf-icon{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;line-height:0}.hf-icon svg{fill:currentColor;width:1em;height:1em}.hf-icon-16 svg{width:16px;height:16px}.hf-icon-24 svg{width:24px;height:24px}.hf-tooltip-wrapper{cursor:pointer;position:relative;display:inline-flex;align-items:baseline}.hf-tooltip-content{position:absolute;bottom:30px;left:8px;transform:translate(-50%);width:350px;padding:var(--hf-spacing-s);background:var(--hf-color-bg);box-shadow:var(--hf-popup-shadow);cursor:default;z-index:calc(var(--hf-z-index) + 1)}.hf-tooltip-content:after{content:"";position:absolute;bottom:-10px;left:50%;transform:translate(-50%);width:0;height:0;border-style:solid;border-width:10px 10px 0 10px;border-color:var(--hf-color-bg) transparent transparent transparent}.hf-tooltip-title{display:flex;justify-content:space-between;text-transform:uppercase;font-weight:600;font-size:var(--hf-font-size-large);margin-bottom:var(--hf-spacing-xs)}.hf-tooltip-title span{cursor:pointer}.hf-tooltip-text{display:block;font-size:var(--hf-font-size-small);line-height:1.5}.hf-fade-enter-active,.hf-fade-leave-active{transition:opacity .2s ease-in-out}.hf-fade-enter-from,.hf-fade-leave-to{opacity:0}.hf-popup{position:fixed;bottom:20px;right:20px;width:calc(100% - 40px);max-width:var(--hf-popup-width);background:var(--hf-color-bg);z-index:var(--hf-z-index);box-shadow:var(--hf-popup-shadow);padding:var(--hf-spacing-s);transition:bottom .3s ease}.hf-popup--hidden{bottom:-100px;pointer-events:none;opacity:0}.hf-popup--opened{bottom:20px}.hf-headline{position:relative;border:0;display:flex;align-items:center;width:100%;background:none;padding:0;margin:0;cursor:pointer;font-family:var(--hf-font-family);color:var(--hf-color-text);font-size:var(--hf-font-size-base)}.hf-headline__title{text-transform:uppercase;font-weight:600;font-size:var(--hf-font-size-base);margin-left:var(--hf-spacing-xxs)}.hf-headline__opener{margin-left:auto;display:flex;align-items:center}.hf-headline__opener svg{transition:transform .2s}.hf-popup--opened .hf-headline__opener svg{transform:rotate(0)}.hf-popup:not(.hf-popup--opened) .hf-headline__opener svg{transform:rotate(180deg)}.hf-spinner{display:inline-block;width:22px;height:22px}.hf-spinner svg{width:100%;height:100%;overflow:visible;animation:hf-rotation 1455ms infinite linear}.hf-spinner circle{stroke:currentColor;stroke-dasharray:44px;stroke-dashoffset:11px;transform-origin:center;transform:rotateY(180deg) rotate(90deg);animation:hf-spinner 3.85s infinite ease}@keyframes hf-spinner{0%{stroke-dashoffset:33px;transform:rotateY(0) rotate(0)}24.9999%{stroke-dashoffset:11px;transform:rotateY(0) rotate(0)}25%{stroke-dashoffset:11px;transform:rotateY(180deg) rotate(270deg)}49.9999%{stroke-dashoffset:33px;transform:rotateY(180deg) rotate(270deg)}50%{stroke-dashoffset:33px;transform:rotateY(0) rotate(180deg)}74.9999%{stroke-dashoffset:11px;transform:rotateY(0) rotate(180deg)}75%{stroke-dashoffset:11px;transform:rotateY(180deg) rotate(90deg)}to{stroke-dashoffset:33px;transform:rotateY(180deg) rotate(90deg)}}@keyframes hf-rotation{to{transform:rotate(360deg)}}.hf-content-area{margin-top:var(--hf-spacing-s)}.hf-content p{margin:0 0 var(--hf-spacing-s);font-size:var(--hf-font-size-base)}.hf-content p:last-of-type{margin:0}.hf-content ul{margin:0;padding:var(--hf-spacing-xs) 0 var(--hf-spacing-xs) var(--hf-spacing-s);line-height:1}.hf-content ul li{margin:0 0 var(--hf-spacing-xs)}.hf-content a{color:var(--hf-color-text)}.hf-content-area>.hf-button{margin-top:var(--hf-spacing-s)}.hf-introduction-steps .hf-step{margin-bottom:var(--hf-spacing-xs)}.hf-introduction-steps .hf-step p{margin:0 0 var(--hf-spacing-xs)}.hf-introduction-buttons{display:flex;gap:0}.hf-introduction-buttons .hf-button{padding:var(--hf-spacing-s) calc(var(--hf-spacing-s) - var(--hf-spacing-xxs))}.hf-introduction-buttons .hf-button .hf-icon{margin-inline-end:0}.hf-introduction-buttons .hf-button:last-of-type{margin-left:-1px}.hf-popup.hf-not-recognized{border:1px solid var(--hf-color-error)}.hf-popup.hf-error-state{color:var(--hf-color-error)}.hf-hide-chevron .hf-headline__opener{pointer-events:none}.hf-hide-chevron .hf-headline__opener .hf-icon{display:none}.hf-vote{display:flex;gap:0;margin:var(--hf-spacing-s) 0}.hf-vote .hf-button{white-space:nowrap}.hf-vote .hf-button:last-of-type{margin-left:-1px}.hf-vote--stack{flex-direction:column}.hf-vote--stack .hf-button{justify-content:center}.hf-vote--stack .hf-button:last-of-type{margin-left:0;margin-top:-1px}.hf-success-message{display:flex;align-items:center;gap:var(--hf-spacing-xxs)}.hf-hidden-button{position:absolute;left:-9999px;opacity:0}@media print{.hf-root,.hf-popup{display:none}}@media(max-width:767px){.hf-tooltip-content{left:30px;width:290px}.hf-tooltip-content:after{transform:translate(calc(-50% - 22px))}}', hf = {
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
}, pf = {
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
function pr(e, t) {
  const n = { ...e };
  for (const s of Object.keys(t))
    t[s] && typeof t[s] == "object" && !Array.isArray(t[s]) && e[s] && typeof e[s] == "object" && !Array.isArray(e[s]) ? n[s] = pr(e[s], t[s]) : n[s] = t[s];
  return n;
}
const gf = {
  components: {
    Finish: uf,
    Popup: Ya,
    Introduction: sf,
    HfIcon: ns
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
    const t = Kc();
    $c(t);
    const {
      state: n,
      toggleHelpStage: s,
      toggleListening: o,
      togglePopupState: i,
      updateCurrentStage: r
    } = t, l = no(), c = (b, m = {}) => {
      const S = l?.proxy?.$el?.parentNode?.host || l?.proxy?.$el;
      S && S.dispatchEvent && S.dispatchEvent(new CustomEvent(b, {
        detail: m,
        bubbles: !0,
        composed: !0
      }));
    };
    Zs("emitEvent", c);
    const d = be(() => {
      let b = {};
      if (e.translations)
        try {
          b = JSON.parse(e.translations);
        } catch (m) {
          console.warn("[HandsfreeCooking] Invalid translations JSON:", m);
        }
      return pr(hf, b);
    }), f = be(() => {
      let b = {};
      if (e.commands)
        try {
          b = JSON.parse(e.commands);
        } catch (m) {
          console.warn("[HandsfreeCooking] Invalid commands JSON:", m);
        }
      return { ...pf, ...b };
    }), h = be(() => ({
      steps: e.stepsSelector,
      ingredients: e.ingredientsSelector,
      instructions: e.instructionsSelector
    })), x = /* @__PURE__ */ he(
      e.lang || document.documentElement.lang || "en"
    ), { commands: w, destroy: E } = qc(
      f.value,
      h.value,
      t,
      c
    ), A = /* @__PURE__ */ he(w), F = /* @__PURE__ */ he(null), N = /* @__PURE__ */ he(!1), H = /* @__PURE__ */ he(null), L = /* @__PURE__ */ he(null), k = /* @__PURE__ */ he(null), D = /* @__PURE__ */ he(0), oe = /* @__PURE__ */ he(!1), ce = /* @__PURE__ */ he(!1), ne = /* @__PURE__ */ he(!1), V = /* @__PURE__ */ he(null), W = be(() => n.isPopupOpened), te = be(() => n.isHelpStage), T = be(() => n.currentStage), J = be(() => T.value && T.value.includes("listening")), ae = be(() => T.value && T.value.includes("not-recognized")), Ie = be(() => T.value && T.value.includes("recognized-error")), ie = be(() => T.value && T.value.includes("almost-done"));
    let X = !1, j = !1, He = !1, pt = null;
    function et() {
      !F.value || j || (ne.value && F.value.stop(), setTimeout(() => {
        if (!ne.value)
          try {
            F.value.start();
          } catch {
            setTimeout(() => {
              try {
                ne.value || F.value.start();
              } catch (m) {
                console.error("[HandsfreeCooking] Restart failed:", m);
              }
            }, 1e3);
          }
      }, 500));
    }
    const Re = () => {
      N.value = !N.value;
    };
    let tt = null;
    const Bt = (b) => {
      H.value && !b.composedPath().includes(H.value) && (N.value = !1);
    };
    yn(N, (b) => {
      tt && (cancelAnimationFrame(tt), tt = null), document.removeEventListener("click", Bt, !0), b && (tt = requestAnimationFrame(() => {
        document.addEventListener("click", Bt, !0);
      }));
    });
    const ss = (b) => {
      let m = null;
      const S = b.toLowerCase().replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, "").replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, "").replace(/\s+/g, " ").replace(/[.,!?;:。，！？；：．]+$/g, "").trim().normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "").normalize("NFC").trim(), g = [];
      Object.keys(A.value).forEach((P) => {
        const C = P.toLowerCase().replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, "").replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, "").replace(/\s+/g, " ").trim().normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "").normalize("NFC").trim();
        S === C ? g.push({ alias: P, normalizedAlias: C, score: 3, type: "exact" }) : S.startsWith(C) ? g.push({ alias: P, normalizedAlias: C, score: 2, type: "starts-with" }) : S.endsWith(C) ? g.push({ alias: P, normalizedAlias: C, score: 2, type: "ends-with" }) : new RegExp(`(^|\\s)${C.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`, "i").test(S) && g.push({ alias: P, normalizedAlias: C, score: 1, type: "word-boundary" });
      }), g.sort((P, C) => P.score !== C.score ? C.score - P.score : C.normalizedAlias.length - P.normalizedAlias.length), g.length > 0 && (m = g[0].alias), m ? (ie.value || (s(!1), i(!1), r("listening")), ie.value && f.value.imDone.includes(m) && (r("finish"), Wt(), c("handsfree-finished", { reason: "completed recipe flow" })), k.value = m, D.value = 0, requestAnimationFrame(() => {
        L.value ? L.value.click() : A.value[m] && (A.value[m](), k.value = null);
      })) : (D.value += 1, T.value.includes("help") || (r("listening not-recognized"), s(!1), i(!1)), D.value > 3 && r("listening recognized-error"));
    }, St = (b) => {
      f.value.letsCook.includes(b) && A.value[b] && (k.value = b, setTimeout(() => {
        L.value && L.value.click();
      }, 100));
    }, Rt = window.SpeechRecognition || window.webkitSpeechRecognition, Ut = () => {
      if (j = !1, r("introduction"), c("handsfree-activated"), !Rt)
        c("handsfree-error", { error: "browser-not-supported" }), r("not-supported");
      else {
        let b = !1;
        F.value = Oa.init({
          lang: x.value,
          continuesRecognition: !0,
          onUserSpeech: (m) => {
            if (ne.value = ["starting", "recording"].includes(m.status), ["stopped", "aborted", "error"].includes(m.status) && (ne.value = !1), V.value = m.status, !b && m.status === "starting") {
              b = !0;
              return;
            }
            if (m.status === "error" && (m.error === "not-allowed" || m.error === "service-not-allowed")) {
              ce.value = !0, r("not-allowed"), o(!1), F.value.stop(), c("handsfree-error", { error: "microphone-not-allowed" });
              return;
            }
            if (m.status === "recording" && (o(!0), X || (c("handsfree-state-change", { stage: "microphone-allowed", isListening: !0 }), X = !0), m.transcriptions.length && !m.finalTranscriptions && (oe.value = !0), m.finalTranscriptions)) {
              oe.value = !1;
              const S = m.transcriptions[0].text.toLowerCase().trim();
              T.value.includes("introduction") ? St(S) : ss(S);
            }
          },
          onUserSpeak: () => {
          }
        });
      }
    }, Wt = () => {
      F.value && F.value.stop(), j = !0, s(!1), o(!1), i(!0), ne.value = !1;
    }, xt = () => {
      r("finish"), Wt(), c("handsfree-finished", { reason: "stop-cooking-button" });
    }, lo = () => {
      i(!0), s(!0), r("listening help");
    }, a = () => {
      k.value && A.value[k.value] && (A.value[k.value](), k.value = null);
    }, u = () => {
      if (ce.value)
        r("not-allowed");
      else {
        if (!ne.value)
          try {
            F.value.start();
          } catch (b) {
            console.warn("[HandsfreeCooking] Cannot start recognizer:", b);
          }
        r("listening introduction"), c("handsfree-state-change", { stage: "listening", isListening: !0 });
      }
    };
    function p() {
      alert("Microphone access is blocked. Please enable it in browser settings."), c("handsfree-error", { error: "microphone-blocked" });
    }
    const y = () => {
      n.isPopupOpened ? i(!1) : i(!0), c("handsfree-state-change", {
        stage: T.value,
        isListening: n.isListening,
        isPopupOpened: n.isPopupOpened
      });
    }, v = () => {
      i(!1), s(!1), r("listening");
    }, _ = () => {
      !n.isListening && F.value ? (F.value.stop(), r(null)) : y();
    };
    return Yn(() => {
      pt = setInterval(() => {
        V.value === "stopped" && T.value === "listening" && !j && !He && !ne.value && (et(), He = !0), V.value === "listening" && He && (He = !1);
      }, 1e3);
    }), Xs(() => {
      document.removeEventListener("click", Bt, !0), tt && cancelAnimationFrame(tt), pt && clearInterval(pt);
      try {
        F.value && F.value.stop();
      } catch (b) {
        console.warn("[HandsfreeCooking] Failed to stop on unmount:", b);
      }
      E(), ne.value = !1;
    }), {
      isPopupOpened: W,
      currentStage: T,
      isListeningStage: J,
      isHelpStage: te,
      isNotRecognizedStage: ae,
      isNotRecognizedStageError: Ie,
      isAlmostDone: ie,
      isTooltipVisible: N,
      mergedTranslations: d,
      mergedCommands: f,
      tooltip: H,
      fakeButton: L,
      isLoading: oe,
      toggleTooltip: Re,
      openHelp: lo,
      startHandsFreeFlow: Ut,
      finishHandsFreeFlow: xt,
      togglePopup: y,
      requestMicrophoneAccess: p,
      runCommand: a,
      beginListening: u,
      continueListening: v,
      closeHandsFreeFlow: _
    };
  }
}, mf = { class: "hf-root" }, vf = { class: "hf-trigger" }, _f = { class: "hf-intro-row" }, bf = { class: "hf-intro-label" }, yf = {
  ref: "tooltip",
  class: "hf-tooltip-wrapper"
}, Sf = {
  key: 0,
  class: "hf-tooltip-content"
}, xf = { class: "hf-tooltip-title" }, wf = { class: "hf-tooltip-text" };
function Cf(e, t, n, s, o, i) {
  const r = Je("HfIcon"), l = Je("Introduction"), c = Je("Popup"), d = Je("Finish");
  return G(), me("div", mf, [
    K("div", vf, [
      K("div", _f, [
        K("span", bf, ke(s.mergedTranslations.intro), 1),
        K("span", yf, [
          q(r, {
            icon: "help",
            size: 16,
            onClick: s.toggleTooltip
          }, null, 8, ["onClick"]),
          q(_c, { name: "hf-fade" }, {
            default: ki(() => [
              s.isTooltipVisible ? (G(), me("span", Sf, [
                K("strong", xf, [
                  on(ke(s.mergedTranslations.tooltip.title) + " ", 1),
                  K("span", {
                    onClick: t[0] || (t[0] = (f) => s.isTooltipVisible = !1)
                  }, [
                    q(r, {
                      icon: "close",
                      size: 24
                    })
                  ])
                ]),
                K("span", wf, ke(s.mergedTranslations.tooltip.text), 1)
              ])) : fe("", !0)
            ]),
            _: 1
          })
        ], 512)
      ]),
      s.currentStage !== "listening" && !s.isListeningStage ? (G(), me("button", {
        key: 0,
        class: "hf-button hf-button--handsfree",
        onClick: t[1] || (t[1] = (...f) => s.startHandsFreeFlow && s.startHandsFreeFlow(...f))
      }, [
        q(r, {
          icon: "mic",
          size: 24
        }),
        on(" " + ke(s.mergedTranslations.letsCook), 1)
      ])) : fe("", !0),
      s.isListeningStage ? (G(), me("button", {
        key: 1,
        class: "hf-button hf-button--handsfree",
        onClick: t[2] || (t[2] = (...f) => s.finishHandsFreeFlow && s.finishHandsFreeFlow(...f))
      }, [
        q(r, {
          icon: "mic",
          size: 24
        }),
        on(" " + ke(s.mergedTranslations.stopCooking), 1)
      ])) : fe("", !0)
    ]),
    K("div", {
      class: zt(["hf-popup", {
        "hf-popup--opened": s.isPopupOpened,
        "hf-popup--hidden": s.currentStage === null,
        "hf-not-recognized": s.isNotRecognizedStage || s.isNotRecognizedStageError,
        "hf-error-state": s.isNotRecognizedStageError
      }])
    }, [
      s.currentStage && s.currentStage.includes("introduction") ? (G(), Ne(l, {
        key: 0,
        translations: s.mergedTranslations.introduction,
        "is-loading": s.isLoading,
        "is-close-state": !0,
        onTogglePopup: s.closeHandsFreeFlow,
        onBeginListening: s.beginListening
      }, null, 8, ["translations", "is-loading", "onTogglePopup", "onBeginListening"])) : fe("", !0),
      s.currentStage === "not-allowed" ? (G(), Ne(c, {
        key: 1,
        translations: s.mergedTranslations.notAllowed,
        "is-loading": s.isLoading,
        "is-close-state": !0,
        onTogglePopup: s.closeHandsFreeFlow,
        onButtonAction: s.requestMicrophoneAccess
      }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : fe("", !0),
      s.currentStage === "listening" ? (G(), Ne(c, {
        key: 2,
        translations: s.mergedTranslations.listening,
        "is-loading": s.isLoading,
        onTogglePopup: s.openHelp
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : fe("", !0),
      s.isHelpStage ? (G(), Ne(c, {
        key: 3,
        translations: s.mergedTranslations.help,
        "is-loading": s.isLoading,
        onTogglePopup: s.continueListening,
        onButtonAction: s.finishHandsFreeFlow
      }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : fe("", !0),
      s.isNotRecognizedStage ? (G(), Ne(c, {
        key: 4,
        translations: s.mergedTranslations.notRecognized,
        "is-loading": s.isLoading,
        onTogglePopup: s.openHelp
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : fe("", !0),
      s.isNotRecognizedStageError ? (G(), Ne(c, {
        key: 5,
        translations: s.mergedTranslations.notRecognizedError,
        "is-loading": s.isLoading,
        onTogglePopup: s.openHelp
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : fe("", !0),
      s.currentStage === "not-supported" ? (G(), Ne(c, {
        key: 6,
        "additional-classname": "hf-hide-chevron",
        translations: s.mergedTranslations.notSupported,
        "is-loading": s.isLoading,
        onButtonAction: s.closeHandsFreeFlow
      }, null, 8, ["translations", "is-loading", "onButtonAction"])) : fe("", !0),
      s.isAlmostDone ? (G(), Ne(c, {
        key: 7,
        translations: s.mergedTranslations.almostDone,
        "is-loading": s.isLoading,
        onTogglePopup: s.togglePopup
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : fe("", !0),
      s.currentStage === "finish" ? (G(), Ne(d, {
        key: 8,
        translations: s.mergedTranslations.finish,
        onCloseHandsFreeFlow: s.closeHandsFreeFlow,
        onTogglePopup: s.togglePopup
      }, null, 8, ["translations", "onCloseHandsFreeFlow", "onTogglePopup"])) : fe("", !0),
      K("button", {
        ref: "fakeButton",
        class: "hf-hidden-button",
        onClick: t[3] || (t[3] = (...f) => s.runCommand && s.runCommand(...f))
      }, " Run Command ", 512)
    ], 2)
  ]);
}
const Tf = /* @__PURE__ */ jt(gf, [["render", Cf], ["styles", [df]]]), Af = /* @__PURE__ */ Vc(Tf, {
  shadowRoot: !0
});
customElements.get("handsfree-cooking") || customElements.define("handsfree-cooking", Af);
export {
  Af as HandsfreeCookingElement
};
