// @__NO_SIDE_EFFECTS__
function Os(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Z = {}, Lt = [], Xe = () => {
}, Xo = () => !1, In = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Nn = (e) => e.startsWith("onUpdate:"), se = Object.assign, Is = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, gr = Object.prototype.hasOwnProperty, U = (e, t) => gr.call(e, t), M = Array.isArray, Mt = (e) => un(e) === "[object Map]", Qo = (e) => un(e) === "[object Set]", uo = (e) => un(e) === "[object Date]", I = (e) => typeof e == "function", le = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", $ = (e) => e !== null && typeof e == "object", ei = (e) => ($(e) || I(e)) && I(e.then) && I(e.catch), ti = Object.prototype.toString, un = (e) => ti.call(e), mr = (e) => un(e).slice(8, -1), Dn = (e) => un(e) === "[object Object]", Ns = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Yt = /* @__PURE__ */ Os(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, vr = /-\w/g, ue = Vn(
  (e) => e.replace(vr, (t) => t.slice(1).toUpperCase())
), _r = /\B([A-Z])/g, Le = Vn(
  (e) => e.replace(_r, "-$1").toLowerCase()
), jn = Vn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ss = Vn(
  (e) => e ? `on${jn(e)}` : ""
), Ze = (e, t) => !Object.is(e, t), os = (e, ...t) => {
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
const zn = () => ho || (ho = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ds(e) {
  if (M(e)) {
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
const yr = /;(?![^(]*\))/g, xr = /:([^]+)/, Sr = /\/\*[^]*?\*\//g;
function wr(e) {
  const t = {};
  return e.replace(Sr, "").split(yr).forEach((n) => {
    if (n) {
      const s = n.split(xr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Vt(e) {
  let t = "";
  if (le(e))
    t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const s = Vt(e[n]);
      s && (t += s + " ");
    }
  else if ($(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Cr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Tr = /* @__PURE__ */ Os(Cr);
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
  if (n = M(e), s = M(t), n || s)
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
const oi = (e) => !!(e && e.__v_isRef === !0), Pe = (e) => le(e) ? e : e == null ? "" : M(e) || $(e) && (e.toString === ti || !I(e.toString)) ? oi(e) ? Pe(e.value) : JSON.stringify(e, ii, 2) : String(e), ii = (e, t) => oi(t) ? ii(e, t.value) : Mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[is(s, i) + " =>"] = o, n),
    {}
  )
} : Qo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => is(n))
} : Qe(t) ? is(t) : $(t) && !M(t) && !Dn(t) ? String(t) : t, is = (e, t = "") => {
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
const rs = /* @__PURE__ */ new WeakSet();
class ri {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, we && we.active && we.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, rs.has(this) && (rs.delete(this), this.trigger()));
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
    this.flags & 64 ? rs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let li = 0, Gt, Zt;
function ci(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Zt, Zt = e;
    return;
  }
  e.next = Gt, Gt = e;
}
function js() {
  li++;
}
function zs() {
  if (--li > 0)
    return;
  if (Zt) {
    let t = Zt;
    for (Zt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Gt; ) {
    let t = Gt;
    for (Gt = void 0; t; ) {
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nn) || (e.globalVersion = nn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ys(e))))
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
function lt() {
  di.push(De), De = !1;
}
function ct() {
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
let nn = 0;
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
    this.version++, nn++, this.notify(t);
  }
  notify(t) {
    js();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      zs();
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
const xs = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ Symbol(
  ""
), Ss = /* @__PURE__ */ Symbol(
  ""
), sn = /* @__PURE__ */ Symbol(
  ""
);
function pe(e, t, n) {
  if (De && ee) {
    let s = xs.get(e);
    s || xs.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Us()), o.map = s, o.key = n), o.track();
  }
}
function it(e, t, n, s, o, i) {
  const r = xs.get(e);
  if (!r) {
    nn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (js(), t === "clear")
    r.forEach(l);
  else {
    const c = M(e), d = c && Ns(n);
    if (c && n === "length") {
      const f = Number(s);
      r.forEach((h, y) => {
        (y === "length" || y === sn || !Qe(y) && y >= f) && l(h);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), d && l(r.get(sn)), t) {
        case "add":
          c ? d && l(r.get("length")) : (l(r.get(Et)), Mt(e) && l(r.get(Ss)));
          break;
        case "delete":
          c || (l(r.get(Et)), Mt(e) && l(r.get(Ss)));
          break;
        case "set":
          Mt(e) && l(r.get(Et));
          break;
      }
  }
  zs();
}
function Rt(e) {
  const t = /* @__PURE__ */ B(e);
  return t === e ? t : (pe(t, "iterate", sn), /* @__PURE__ */ Ve(e) ? t : t.map(at));
}
function Ws(e) {
  return pe(e = /* @__PURE__ */ B(e), "iterate", sn), e;
}
function Ye(e, t) {
  return /* @__PURE__ */ vt(e) ? on(/* @__PURE__ */ Ot(e) ? at(t) : t) : at(t);
}
const Rr = {
  __proto__: null,
  [Symbol.iterator]() {
    return ls(this, Symbol.iterator, (e) => Ye(this, e));
  },
  concat(...e) {
    return Rt(this).concat(
      ...e.map((t) => M(t) ? Rt(t) : t)
    );
  },
  entries() {
    return ls(this, "entries", (e) => (e[1] = Ye(this, e[1]), e));
  },
  every(e, t) {
    return tt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return tt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Ye(this, s)),
      arguments
    );
  },
  find(e, t) {
    return tt(
      this,
      "find",
      e,
      t,
      (n) => Ye(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return tt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return tt(
      this,
      "findLast",
      e,
      t,
      (n) => Ye(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return tt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return tt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return cs(this, "includes", e);
  },
  indexOf(...e) {
    return cs(this, "indexOf", e);
  },
  join(e) {
    return Rt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return cs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return tt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ut(this, "pop");
  },
  push(...e) {
    return Ut(this, "push", e);
  },
  reduce(e, ...t) {
    return go(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return go(this, "reduceRight", e, t);
  },
  shift() {
    return Ut(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return tt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ut(this, "splice", e);
  },
  toReversed() {
    return Rt(this).toReversed();
  },
  toSorted(e) {
    return Rt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Rt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ut(this, "unshift", e);
  },
  values() {
    return ls(this, "values", (e) => Ye(this, e));
  }
};
function ls(e, t, n) {
  const s = Ws(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Ve(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const Fr = Array.prototype;
function tt(e, t, n, s, o, i) {
  const r = Ws(e), l = r !== e && !/* @__PURE__ */ Ve(e), c = r[t];
  if (c !== Fr[t]) {
    const h = c.apply(e, i);
    return l ? at(h) : h;
  }
  let d = n;
  r !== e && (l ? d = function(h, y) {
    return n.call(this, Ye(e, h), y, e);
  } : n.length > 2 && (d = function(h, y) {
    return n.call(this, h, y, e);
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
function cs(e, t, n) {
  const s = /* @__PURE__ */ B(e);
  pe(s, "iterate", sn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ qs(n[0]) ? (n[0] = /* @__PURE__ */ B(n[0]), s[t](...n)) : o;
}
function Ut(e, t, n = []) {
  lt(), js();
  const s = (/* @__PURE__ */ B(e))[t].apply(e, n);
  return zs(), ct(), s;
}
const Lr = /* @__PURE__ */ Os("__proto__,__v_isRef,__isVue"), pi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
);
function Mr(e) {
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
    const r = M(t);
    if (!o) {
      let c;
      if (r && (c = Rr[n]))
        return c;
      if (n === "hasOwnProperty")
        return Mr;
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
    return $(l) ? o ? /* @__PURE__ */ Cs(l) : /* @__PURE__ */ Bn(l) : l;
  }
}
class mi extends gi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const r = M(t) && Ns(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ vt(i);
      if (!/* @__PURE__ */ Ve(s) && !/* @__PURE__ */ vt(s) && (i = /* @__PURE__ */ B(i), s = /* @__PURE__ */ B(s)), !r && /* @__PURE__ */ ve(i) && !/* @__PURE__ */ ve(s))
        return d || (i.value = s), !0;
    }
    const l = r ? Number(n) < t.length : U(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ve(t) ? t : o
    );
    return t === /* @__PURE__ */ B(o) && (l ? Ze(s, i) && it(t, "set", n, s) : it(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = U(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && it(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Qe(n) || !pi.has(n)) && pe(t, "has", n), s;
  }
  ownKeys(t) {
    return pe(
      t,
      "iterate",
      M(t) ? "length" : Et
    ), Reflect.ownKeys(t);
  }
}
class Or extends gi {
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
const Ir = /* @__PURE__ */ new mi(), Nr = /* @__PURE__ */ new Or(), Dr = /* @__PURE__ */ new mi(!0);
const ws = (e) => e, mn = (e) => Reflect.getPrototypeOf(e);
function Vr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ B(o), r = Mt(i), l = e === "entries" || e === Symbol.iterator && r, c = e === "keys" && r, d = o[e](...s), f = n ? ws : t ? on : at;
    return !t && pe(
      i,
      "iterate",
      c ? Ss : Et
    ), se(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: y } = d.next();
          return y ? { value: h, done: y } : {
            value: l ? [f(h[0]), f(h[1])] : f(h),
            done: y
          };
        }
      }
    );
  };
}
function vn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function jr(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = /* @__PURE__ */ B(i), l = /* @__PURE__ */ B(o);
      e || (Ze(o, l) && pe(r, "get", o), pe(r, "get", l));
      const { has: c } = mn(r), d = t ? ws : e ? on : at;
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
      const r = this, l = r.__v_raw, c = /* @__PURE__ */ B(l), d = t ? ws : e ? on : at;
      return !e && pe(c, "iterate", Et), l.forEach((f, h) => o.call(i, d(f), d(h), r));
    }
  };
  return se(
    n,
    e ? {
      add: vn("add"),
      set: vn("set"),
      delete: vn("delete"),
      clear: vn("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ B(this), r = mn(i), l = /* @__PURE__ */ B(o), c = !t && !/* @__PURE__ */ Ve(o) && !/* @__PURE__ */ vt(o) ? l : o;
        return r.has.call(i, c) || Ze(o, c) && r.has.call(i, o) || Ze(l, c) && r.has.call(i, l) || (i.add(c), it(i, "add", c, c)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Ve(i) && !/* @__PURE__ */ vt(i) && (i = /* @__PURE__ */ B(i));
        const r = /* @__PURE__ */ B(this), { has: l, get: c } = mn(r);
        let d = l.call(r, o);
        d || (o = /* @__PURE__ */ B(o), d = l.call(r, o));
        const f = c.call(r, o);
        return r.set(o, i), d ? Ze(i, f) && it(r, "set", o, i) : it(r, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ B(this), { has: r, get: l } = mn(i);
        let c = r.call(i, o);
        c || (o = /* @__PURE__ */ B(o), c = r.call(i, o)), l && l.call(i, o);
        const d = i.delete(o);
        return c && it(i, "delete", o, void 0), d;
      },
      clear() {
        const o = /* @__PURE__ */ B(this), i = o.size !== 0, r = o.clear();
        return i && it(
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
  const n = jr(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    U(n, o) && o in s ? n : s,
    o,
    i
  );
}
const zr = {
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
function Bn(e) {
  return /* @__PURE__ */ vt(e) ? e : $s(
    e,
    !1,
    Ir,
    zr,
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
function Ot(e) {
  return /* @__PURE__ */ vt(e) ? /* @__PURE__ */ Ot(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function vt(e) {
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
const at = (e) => $(e) ? /* @__PURE__ */ Bn(e) : e, on = (e) => $(e) ? /* @__PURE__ */ Cs(e) : e;
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
    this.dep = new Us(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ B(t), this._value = n ? t : at(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ve(t) || /* @__PURE__ */ vt(t);
    t = s ? t : /* @__PURE__ */ B(t), Ze(t, n) && (this._rawValue = t, this._value = s ? t : at(t), this.dep.trigger());
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
function xi(e) {
  return /* @__PURE__ */ Ot(e) ? e : new Proxy(e, Jr);
}
class Xr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Us(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
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
const _n = {}, xn = /* @__PURE__ */ new WeakMap();
let kt;
function el(e, t = !1, n = kt) {
  if (n) {
    let s = xn.get(n);
    s || xn.set(n, s = []), s.push(e);
  }
}
function tl(e, t, n = Z) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: c } = n, d = (k) => o ? k : /* @__PURE__ */ Ve(k) || o === !1 || o === 0 ? rt(k, 1) : rt(k);
  let f, h, y, w, P = !1, A = !1;
  if (/* @__PURE__ */ ve(e) ? (h = () => e.value, P = /* @__PURE__ */ Ve(e)) : /* @__PURE__ */ Ot(e) ? (h = () => d(e), P = !0) : M(e) ? (A = !0, P = e.some((k) => /* @__PURE__ */ Ot(k) || /* @__PURE__ */ Ve(k)), h = () => e.map((k) => {
    if (/* @__PURE__ */ ve(k))
      return k.value;
    if (/* @__PURE__ */ Ot(k))
      return d(k);
    if (I(k))
      return c ? c(k, 2) : k();
  })) : I(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (y) {
      lt();
      try {
        y();
      } finally {
        ct();
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
    const k = h, N = o === !0 ? 1 / 0 : o;
    h = () => rt(k(), N);
  }
  const H = Pr(), V = () => {
    f.stop(), H && H.active && Is(H.effects, f);
  };
  if (i && t) {
    const k = t;
    t = (...N) => {
      k(...N), V();
    };
  }
  let E = A ? new Array(e.length).fill(_n) : _n;
  const L = (k) => {
    if (!(!(f.flags & 1) || !f.dirty && !k))
      if (t) {
        const N = f.run();
        if (o || P || (A ? N.some((oe, ce) => Ze(oe, E[ce])) : Ze(N, E))) {
          y && y();
          const oe = kt;
          kt = f;
          try {
            const ce = [
              N,
              // pass undefined as the old value when it's changed for the first time
              E === _n ? void 0 : A && E[0] === _n ? [] : E,
              w
            ];
            E = N, c ? c(t, 3, ce) : (
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
  return l && l(L), f = new ri(h), f.scheduler = r ? () => r(L, !1) : L, w = (k) => el(k, !1, f), y = f.onStop = () => {
    const k = xn.get(f);
    if (k) {
      if (c)
        c(k, 4);
      else
        for (const N of k) N();
      xn.delete(f);
    }
  }, t ? s ? L(!0) : E = f.run() : r ? r(L.bind(null, !0), !0) : f.run(), V.pause = f.pause.bind(f), V.resume = f.resume.bind(f), V.stop = V, V;
}
function rt(e, t = 1 / 0, n) {
  if (t <= 0 || !$(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ve(e))
    rt(e.value, t, n);
  else if (M(e))
    for (let s = 0; s < e.length; s++)
      rt(e[s], t, n);
  else if (Qo(e) || Mt(e))
    e.forEach((s) => {
      rt(s, t, n);
    });
  else if (Dn(e)) {
    for (const s in e)
      rt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && rt(e[s], t, n);
  }
  return e;
}
function dn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Un(o, t, n);
  }
}
function je(e, t, n, s) {
  if (I(e)) {
    const o = dn(e, t, n, s);
    return o && ei(o) && o.catch((i) => {
      Un(i, t, n);
    }), o;
  }
  if (M(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(je(e[i], t, n, s));
    return o;
  }
}
function Un(e, t, n, s = !0) {
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
      lt(), dn(i, null, 10, [
        e,
        c,
        d
      ]), ct();
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
const It = [];
let mt = null, Ft = 0;
const Si = /* @__PURE__ */ Promise.resolve();
let Sn = null;
function Ys(e) {
  const t = Sn || Si;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sl(e) {
  let t = $e + 1, n = ye.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = ye[s], i = rn(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Gs(e) {
  if (!(e.flags & 1)) {
    const t = rn(e), n = ye[ye.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rn(n) ? ye.push(e) : ye.splice(sl(t), 0, e), e.flags |= 1, wi();
  }
}
function wi() {
  Sn || (Sn = Si.then(Ti));
}
function ol(e) {
  M(e) ? It.push(...e) : mt && e.id === -1 ? mt.splice(Ft + 1, 0, e) : e.flags & 1 || (It.push(e), e.flags |= 1), wi();
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
  if (It.length) {
    const t = [...new Set(It)].sort(
      (n, s) => rn(n) - rn(s)
    );
    if (It.length = 0, mt) {
      mt.push(...t);
      return;
    }
    for (mt = t, Ft = 0; Ft < mt.length; Ft++) {
      const n = mt[Ft];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    mt = null, Ft = 0;
  }
}
const rn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ti(e) {
  try {
    for ($e = 0; $e < ye.length; $e++) {
      const t = ye[$e];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), dn(
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
    $e = -1, ye.length = 0, Ci(), Sn = null, (ye.length || It.length) && Ti();
  }
}
let Ee = null, Ai = null;
function wn(e) {
  const t = Ee;
  return Ee = e, Ai = e && e.type.__scopeId || null, t;
}
function ki(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && kn(-1);
    const i = wn(t);
    let r;
    try {
      r = e(...o);
    } finally {
      wn(i), s._d && kn(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Cn(e, t) {
  if (Ee === null)
    return e;
  const n = Gn(Ee), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, c = Z] = t[o];
    i && (I(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && rt(r), s.push({
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
    c && (lt(), je(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ct());
  }
}
function Zs(e, t) {
  if (ge) {
    let n = ge.provides;
    const s = ge.parent && ge.parent.provides;
    s === n && (n = ge.provides = Object.create(s)), n[e] = t;
  }
}
function Nt(e, t, n = !1) {
  const s = no();
  if (s || Dt) {
    let o = Dt ? Dt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(s && s.proxy) : t;
  }
}
const il = /* @__PURE__ */ Symbol.for("v-scx"), rl = () => Nt(il);
function as(e, t, n) {
  return Pi(e, t, n);
}
function Pi(e, t, n = Z) {
  const { immediate: s, deep: o, flush: i, once: r } = n, l = se({}, n), c = t && s || !t && i !== "post";
  let d;
  if (an) {
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
  l.call = (w, P, A) => je(w, f, P, A);
  let h = !1;
  i === "post" ? l.scheduler = (w) => {
    Se(w, f && f.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (w, P) => {
    P ? w() : Gs(w);
  }), l.augmentJob = (w) => {
    t && (w.flags |= 4), h && (w.flags |= 2, f && (w.id = f.uid, w.i = f));
  };
  const y = tl(e, t, l);
  return an && (d ? d.push(y) : c && y()), y;
}
function ll(e, t, n) {
  const s = this.proxy, o = le(e) ? e.includes(".") ? Ei(s, e) : () => s[e] : e.bind(s, s);
  let i;
  I(t) ? i = t : (i = t.handler, n = t);
  const r = hn(this), l = Pi(o, i.bind(s), n);
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
const cl = /* @__PURE__ */ Symbol("_vte"), Hi = (e) => e.__isTeleport, qe = /* @__PURE__ */ Symbol("_leaveCb"), Wt = /* @__PURE__ */ Symbol("_enterCb");
function al() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return $n(() => {
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
      const o = t.default && Oi(t.default(), !0);
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
      c.type !== xe && ln(c, d);
      let f = n.subTree && vo(n.subTree);
      if (f && f.type !== xe && !Pt(f, c) && Fi(n).type !== xe) {
        let h = Ts(
          f,
          r,
          s,
          n
        );
        if (ln(f, h), l === "out-in" && c.type !== xe)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, f = void 0;
          }, fs(i);
        l === "in-out" && c.type !== xe ? h.delayLeave = (y, w, P) => {
          const A = Mi(
            s,
            f
          );
          A[String(f.key)] = f, y[qe] = () => {
            w(), y[qe] = void 0, delete d.delayedLeave, f = void 0;
          }, d.delayedLeave = () => {
            P(), delete d.delayedLeave, f = void 0;
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
      if (n.type !== xe) {
        t = n;
        break;
      }
  }
  return t;
}
const ul = fl;
function Mi(e, t) {
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
    onBeforeLeave: y,
    onLeave: w,
    onAfterLeave: P,
    onLeaveCancelled: A,
    onBeforeAppear: H,
    onAppear: V,
    onAfterAppear: E,
    onAppearCancelled: L
  } = t, k = String(e.key), N = Mi(n, e), oe = (D, W) => {
    D && je(
      D,
      s,
      9,
      W
    );
  }, ce = (D, W) => {
    const te = W[1];
    oe(D, W), M(D) ? D.every((C) => C.length <= 1) && te() : D.length <= 1 && te();
  }, ne = {
    mode: r,
    persisted: l,
    beforeEnter(D) {
      let W = c;
      if (!n.isMounted)
        if (i)
          W = H || c;
        else
          return;
      D[qe] && D[qe](
        !0
        /* cancelled */
      );
      const te = N[k];
      te && Pt(e, te) && te.el[qe] && te.el[qe](), oe(W, [D]);
    },
    enter(D) {
      if (N[k] === e) return;
      let W = d, te = f, C = h;
      if (!n.isMounted)
        if (i)
          W = V || d, te = E || f, C = L || h;
        else
          return;
      let J = !1;
      D[Wt] = (Ie) => {
        J || (J = !0, Ie ? oe(C, [D]) : oe(te, [D]), ne.delayedLeave && ne.delayedLeave(), D[Wt] = void 0);
      };
      const ae = D[Wt].bind(null, !1);
      W ? ce(W, [D, ae]) : ae();
    },
    leave(D, W) {
      const te = String(e.key);
      if (D[Wt] && D[Wt](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return W();
      oe(y, [D]);
      let C = !1;
      D[qe] = (ae) => {
        C || (C = !0, W(), ae ? oe(A, [D]) : oe(P, [D]), D[qe] = void 0, N[te] === e && delete N[te]);
      };
      const J = D[qe].bind(null, !1);
      N[te] = e, w ? ce(w, [D, J]) : J();
    },
    clone(D) {
      const W = Ts(
        D,
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
  if (Wn(e))
    return e = _t(e), e.children = null, e;
}
function vo(e) {
  if (!Wn(e))
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
function ln(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ln(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Oi(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === ke ? (r.patchFlag & 128 && o++, s = s.concat(
      Oi(r.children, t, l)
    )) : (t || r.type !== xe) && s.push(l != null ? _t(r, { key: l }) : r);
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
const Tn = /* @__PURE__ */ new WeakMap();
function Jt(e, t, n, s, o = !1) {
  if (M(e)) {
    e.forEach(
      (A, H) => Jt(
        A,
        t && (M(t) ? t[H] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Xt(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Jt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Gn(s.component) : s.el, r = o ? null : i, { i: l, r: c } = e, d = t && t.r, f = l.refs === Z ? l.refs = {} : l.refs, h = l.setupState, y = /* @__PURE__ */ B(h), w = h === Z ? Xo : (A) => _o(f, A) ? !1 : U(y, A), P = (A, H) => !(H && _o(f, H));
  if (d != null && d !== c) {
    if (bo(t), le(d))
      f[d] = null, w(d) && (h[d] = null);
    else if (/* @__PURE__ */ ve(d)) {
      const A = t;
      P(d, A.k) && (d.value = null), A.k && (f[A.k] = null);
    }
  }
  if (I(c))
    dn(c, l, 12, [r, f]);
  else {
    const A = le(c), H = /* @__PURE__ */ ve(c);
    if (A || H) {
      const V = () => {
        if (e.f) {
          const E = A ? w(c) ? h[c] : f[c] : P() || !e.k ? c.value : f[e.k];
          if (o)
            M(E) && Is(E, i);
          else if (M(E))
            E.includes(i) || E.push(i);
          else if (A)
            f[c] = [i], w(c) && (h[c] = f[c]);
          else {
            const L = [i];
            P(c, e.k) && (c.value = L), e.k && (f[e.k] = L);
          }
        } else A ? (f[c] = r, w(c) && (h[c] = r)) : H && (P(c, e.k) && (c.value = r), e.k && (f[e.k] = r));
      };
      if (r) {
        const E = () => {
          V(), Tn.delete(e);
        };
        E.id = -1, Tn.set(e, E), Se(E, n);
      } else
        bo(e), V();
    }
  }
}
function bo(e) {
  const t = Tn.get(e);
  t && (t.flags |= 8, Tn.delete(e));
}
zn().requestIdleCallback;
zn().cancelIdleCallback;
const Xt = (e) => !!e.type.__asyncLoader, Wn = (e) => e.type.__isKeepAlive;
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
  if (Kn(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Wn(o.parent.vnode) && gl(s, t, n, o), o = o.parent;
  }
}
function gl(e, t, n, s) {
  const o = Kn(
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
function Kn(e, t, n = ge, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      lt();
      const l = hn(n), c = je(t, n, e, r);
      return l(), ct(), c;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const dt = (e) => (t, n = ge) => {
  (!an || e === "sp") && Kn(e, (...s) => t(...s), n);
}, ml = dt("bm"), $n = dt("m"), vl = dt(
  "bu"
), _l = dt("u"), Js = dt(
  "bum"
), Xs = dt("um"), bl = dt(
  "sp"
), yl = dt("rtg"), xl = dt("rtc");
function Sl(e, t = ge) {
  Kn("ec", e, t);
}
const wl = "components";
function Je(e, t) {
  return Tl(wl, e, !0, t) || e;
}
const Cl = /* @__PURE__ */ Symbol.for("v-ndc");
function Tl(e, t, n = !0, s = !1) {
  const o = Ee || ge;
  if (o) {
    const i = o.type;
    {
      const l = ac(
        i,
        !1
      );
      if (l && (l === t || l === ue(t) || l === jn(ue(t))))
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
  return e && (e[t] || e[ue(t)] || e[jn(ue(t))]);
}
const As = (e) => e ? sr(e) ? Gn(e) : As(e.parent) : null, Qt = (
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
    const d = Qt[t];
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
    return !!(n[l] || e !== Z && l[0] !== "$" && U(e, l) || us(t, l) || U(i, l) || U(s, l) || U(Qt, l) || U(o.config.globalProperties, l) || (c = r.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function xo(e) {
  return M(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ks = !0;
function kl(e) {
  const t = Vi(e), n = e.proxy, s = e.ctx;
  ks = !1, t.beforeCreate && So(t.beforeCreate, e, "bc");
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
    mounted: y,
    beforeUpdate: w,
    updated: P,
    activated: A,
    deactivated: H,
    beforeDestroy: V,
    beforeUnmount: E,
    destroyed: L,
    unmounted: k,
    render: N,
    renderTracked: oe,
    renderTriggered: ce,
    errorCaptured: ne,
    serverPrefetch: D,
    // public API
    expose: W,
    inheritAttrs: te,
    // assets
    components: C,
    directives: J,
    filters: ae
  } = t;
  if (d && Pl(d, s, null), r)
    for (const X in r) {
      const z = r[X];
      I(z) && (s[X] = z.bind(n));
    }
  if (o) {
    const X = o.call(n, n);
    $(X) && (e.data = /* @__PURE__ */ Bn(X));
  }
  if (ks = !0, i)
    for (const X in i) {
      const z = i[X], Re = I(z) ? z.bind(n, n) : I(z.get) ? z.get.bind(n, n) : Xe, ht = !I(z) && I(z.set) ? z.set.bind(n) : Xe, et = be({
        get: Re,
        set: ht
      });
      Object.defineProperty(s, X, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (Ce) => et.value = Ce
      });
    }
  if (l)
    for (const X in l)
      Di(l[X], s, n, X);
  if (c) {
    const X = I(c) ? c.call(n) : c;
    Reflect.ownKeys(X).forEach((z) => {
      Zs(z, X[z]);
    });
  }
  f && So(f, e, "c");
  function ie(X, z) {
    M(z) ? z.forEach((Re) => X(Re.bind(n))) : z && X(z.bind(n));
  }
  if (ie(ml, h), ie($n, y), ie(vl, w), ie(_l, P), ie(hl, A), ie(pl, H), ie(Sl, ne), ie(xl, oe), ie(yl, ce), ie(Js, E), ie(Xs, k), ie(bl, D), M(W))
    if (W.length) {
      const X = e.exposed || (e.exposed = {});
      W.forEach((z) => {
        Object.defineProperty(X, z, {
          get: () => n[z],
          set: (Re) => n[z] = Re,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === Xe && (e.render = N), te != null && (e.inheritAttrs = te), C && (e.components = C), J && (e.directives = J), D && Ii(e);
}
function Pl(e, t, n = Xe) {
  M(e) && (e = Ps(e));
  for (const s in e) {
    const o = e[s];
    let i;
    $(o) ? "default" in o ? i = Nt(
      o.from || s,
      o.default,
      !0
    ) : i = Nt(o.from || s) : i = Nt(o), /* @__PURE__ */ ve(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[s] = i;
  }
}
function So(e, t, n) {
  je(
    M(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Di(e, t, n, s) {
  let o = s.includes(".") ? Ei(n, s) : () => n[s];
  if (le(e)) {
    const i = t[e];
    I(i) && as(o, i);
  } else if (I(e))
    as(o, e.bind(n));
  else if ($(e))
    if (M(e))
      e.forEach((i) => Di(i, t, n, s));
    else {
      const i = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(i) && as(o, i, e);
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
    (d) => An(c, d, r, !0)
  ), An(c, t, r)), $(t) && i.set(t, c), c;
}
function An(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && An(e, i, n, !0), o && o.forEach(
    (r) => An(e, r, n, !0)
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
  methods: qt,
  computed: qt,
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
  components: qt,
  directives: qt,
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
  return qt(Ps(e), Ps(t));
}
function Ps(e) {
  if (M(e)) {
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
function qt(e, t) {
  return e ? se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Co(e, t) {
  return e ? M(e) && M(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : se(
    /* @__PURE__ */ Object.create(null),
    xo(e),
    xo(t ?? {})
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
function ji() {
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
    const i = ji(), r = /* @__PURE__ */ new WeakSet(), l = [];
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
      mount(f, h, y) {
        if (!c) {
          const w = d._ceVNode || q(s, o);
          return w.appContext = i, y === !0 ? y = "svg" : y === !1 && (y = void 0), e(w, f, y), c = !0, d._container = f, f.__vue_app__ = d, Gn(w.component);
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        c && (je(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(f, h) {
        return i.provides[f] = h, d;
      },
      runWithContext(f) {
        const h = Dt;
        Dt = d;
        try {
          return f();
        } finally {
          Dt = h;
        }
      }
    };
    return d;
  };
}
let Dt = null;
const Ml = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ue(t)}Modifiers`] || e[`${Le(t)}Modifiers`];
function Ol(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Z;
  let o = n;
  const i = t.startsWith("update:"), r = i && Ml(s, t.slice(7));
  r && (r.trim && (o = n.map((f) => le(f) ? f.trim() : f)), r.number && (o = n.map(br)));
  let l, c = s[l = ss(t)] || // also try camelCase event handler (#2249)
  s[l = ss(ue(t))];
  !c && i && (c = s[l = ss(Le(t))]), c && je(
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
    e.emitted[l] = !0, je(
      d,
      e,
      6,
      o
    );
  }
}
const Il = /* @__PURE__ */ new WeakMap();
function zi(e, t, n = !1) {
  const s = n ? Il : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!I(e)) {
    const c = (d) => {
      const f = zi(d, t, !0);
      f && (l = !0, se(r, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? ($(e) && s.set(e, null), null) : (M(i) ? i.forEach((c) => r[c] = null) : se(r, i), $(e) && s.set(e, r), r);
}
function qn(e, t) {
  return !e || !In(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, Le(t)) || U(e, t));
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
    data: y,
    setupState: w,
    ctx: P,
    inheritAttrs: A
  } = e, H = wn(e);
  let V, E;
  try {
    if (n.shapeFlag & 4) {
      const k = o || s, N = k;
      V = Ge(
        d.call(
          N,
          k,
          f,
          h,
          w,
          y,
          P
        )
      ), E = l;
    } else {
      const k = t;
      V = Ge(
        k.length > 1 ? k(
          h,
          { attrs: l, slots: r, emit: c }
        ) : k(
          h,
          null
        )
      ), E = t.props ? l : Nl(l);
    }
  } catch (k) {
    en.length = 0, Un(k, e, 1), V = q(xe);
  }
  let L = V;
  if (E && A !== !1) {
    const k = Object.keys(E), { shapeFlag: N } = L;
    k.length && N & 7 && (i && k.some(Nn) && (E = Dl(
      E,
      i
    )), L = _t(L, E, !1, !0));
  }
  return n.dirs && (L = _t(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && ln(L, n.transition), V = L, wn(H), V;
}
const Nl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || In(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Dl = (e, t) => {
  const n = {};
  for (const s in e)
    (!Nn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
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
        const y = f[h];
        if (Bi(r, s, y) && !qn(d, y))
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
    if (Bi(t, e, i) && !qn(n, i))
      return !0;
  }
  return !1;
}
function Bi(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && $(s) && $(o) ? !Vs(s, o) : s !== o;
}
function jl({ vnode: e, parent: t, suspense: n }, s) {
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
function zl(e, t, n, s = !1) {
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
        let y = f[h];
        if (qn(e.emitsOptions, y))
          continue;
        const w = t[y];
        if (c)
          if (U(i, y))
            w !== i[y] && (i[y] = w, d = !0);
          else {
            const P = ue(y);
            o[P] = Es(
              c,
              l,
              P,
              w,
              e,
              !1
            );
          }
        else
          w !== i[y] && (i[y] = w, d = !0);
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
  d && it(e.attrs, "set", "");
}
function $i(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let c in t) {
      if (Yt(c))
        continue;
      const d = t[c];
      let f;
      o && U(o, f = ue(c)) ? !i || !i.includes(f) ? n[f] = d : (l || (l = {}))[f] = d : qn(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d, r = !0);
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
          const f = hn(o);
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
      const [y, w] = qi(h, t, !0);
      se(r, y), w && l.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c)
    return $(e) && s.set(e, Lt), Lt;
  if (M(i))
    for (let f = 0; f < i.length; f++) {
      const h = ue(i[f]);
      ko(h) && (r[h] = Z);
    }
  else if (i)
    for (const f in i) {
      const h = ue(f);
      if (ko(h)) {
        const y = i[f], w = r[h] = M(y) || I(y) ? { type: y } : se({}, y), P = w.type;
        let A = !1, H = !0;
        if (M(P))
          for (let V = 0; V < P.length; ++V) {
            const E = P[V], L = I(E) && E.name;
            if (L === "Boolean") {
              A = !0;
              break;
            } else L === "String" && (H = !1);
          }
        else
          A = I(P) && P.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = A, w[
          1
          /* shouldCastTrue */
        ] = H, (A || U(w, "default")) && l.push(h);
      }
    }
  const d = [r, l];
  return $(e) && s.set(e, d), d;
}
function ko(e) {
  return e[0] !== "$" && !Yt(e);
}
const Qs = (e) => e === "_" || e === "_ctx" || e === "$stable", eo = (e) => M(e) ? e.map(Ge) : [Ge(e)], Wl = (e, t, n) => {
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
}, Se = Jl;
function ql(e) {
  return Yl(e);
}
function Yl(e, t) {
  const n = zn();
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
    nextSibling: y,
    setScopeId: w = Xe,
    insertStaticContent: P
  } = e, A = (a, u, p, _ = null, m = null, g = null, x = void 0, S = null, b = !!u.dynamicChildren) => {
    if (a === u)
      return;
    a && !Pt(a, u) && (_ = xt(a), Ce(a, m, g, !0), a = null), u.patchFlag === -2 && (b = !1, u.dynamicChildren = null);
    const { type: v, ref: F, shapeFlag: T } = u;
    switch (v) {
      case Yn:
        H(a, u, p, _);
        break;
      case xe:
        V(a, u, p, _);
        break;
      case hs:
        a == null && E(u, p, _, x);
        break;
      case ke:
        C(
          a,
          u,
          p,
          _,
          m,
          g,
          x,
          S,
          b
        );
        break;
      default:
        T & 1 ? N(
          a,
          u,
          p,
          _,
          m,
          g,
          x,
          S,
          b
        ) : T & 6 ? J(
          a,
          u,
          p,
          _,
          m,
          g,
          x,
          S,
          b
        ) : (T & 64 || T & 128) && v.process(
          a,
          u,
          p,
          _,
          m,
          g,
          x,
          S,
          b,
          St
        );
    }
    F != null && m ? Jt(F, a && a.ref, g, u || a, !u) : F == null && a && a.ref != null && Jt(a.ref, null, g, a, !0);
  }, H = (a, u, p, _) => {
    if (a == null)
      s(
        u.el = l(u.children),
        p,
        _
      );
    else {
      const m = u.el = a.el;
      u.children !== a.children && d(m, u.children);
    }
  }, V = (a, u, p, _) => {
    a == null ? s(
      u.el = c(u.children || ""),
      p,
      _
    ) : u.el = a.el;
  }, E = (a, u, p, _) => {
    [a.el, a.anchor] = P(
      a.children,
      u,
      p,
      _,
      a.el,
      a.anchor
    );
  }, L = ({ el: a, anchor: u }, p, _) => {
    let m;
    for (; a && a !== u; )
      m = y(a), s(a, p, _), a = m;
    s(u, p, _);
  }, k = ({ el: a, anchor: u }) => {
    let p;
    for (; a && a !== u; )
      p = y(a), o(a), a = p;
    o(u);
  }, N = (a, u, p, _, m, g, x, S, b) => {
    if (u.type === "svg" ? x = "svg" : u.type === "math" && (x = "mathml"), a == null)
      oe(
        u,
        p,
        _,
        m,
        g,
        x,
        S,
        b
      );
    else {
      const v = a.el && a.el._isVueCE ? a.el : null;
      try {
        v && v._beginPatch(), D(
          a,
          u,
          m,
          g,
          x,
          S,
          b
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, oe = (a, u, p, _, m, g, x, S) => {
    let b, v;
    const { props: F, shapeFlag: T, transition: R, dirs: O } = a;
    if (b = a.el = r(
      a.type,
      g,
      F && F.is,
      F
    ), T & 8 ? f(b, a.children) : T & 16 && ne(
      a.children,
      b,
      null,
      _,
      m,
      ds(a, g),
      x,
      S
    ), O && wt(a, null, _, "created"), ce(b, a, a.scopeId, x, _), F) {
      for (const Y in F)
        Y !== "value" && !Yt(Y) && i(b, Y, null, F[Y], g, _);
      "value" in F && i(b, "value", null, F.value, g), (v = F.onVnodeBeforeMount) && We(v, _, a);
    }
    O && wt(a, null, _, "beforeMount");
    const j = Gl(m, R);
    j && R.beforeEnter(b), s(b, u, p), ((v = F && F.onVnodeMounted) || j || O) && Se(() => {
      v && We(v, _, a), j && R.enter(b), O && wt(a, null, _, "mounted");
    }, m);
  }, ce = (a, u, p, _, m) => {
    if (p && w(a, p), _)
      for (let g = 0; g < _.length; g++)
        w(a, _[g]);
    if (m) {
      let g = m.subTree;
      if (u === g || er(g.type) && (g.ssContent === u || g.ssFallback === u)) {
        const x = m.vnode;
        ce(
          a,
          x,
          x.scopeId,
          x.slotScopeIds,
          m.parent
        );
      }
    }
  }, ne = (a, u, p, _, m, g, x, S, b = 0) => {
    for (let v = b; v < a.length; v++) {
      const F = a[v] = S ? ot(a[v]) : Ge(a[v]);
      A(
        null,
        F,
        u,
        p,
        _,
        m,
        g,
        x,
        S
      );
    }
  }, D = (a, u, p, _, m, g, x) => {
    const S = u.el = a.el;
    let { patchFlag: b, dynamicChildren: v, dirs: F } = u;
    b |= a.patchFlag & 16;
    const T = a.props || Z, R = u.props || Z;
    let O;
    if (p && Ct(p, !1), (O = R.onVnodeBeforeUpdate) && We(O, p, u, a), F && wt(u, a, p, "beforeUpdate"), p && Ct(p, !0), (T.innerHTML && R.innerHTML == null || T.textContent && R.textContent == null) && f(S, ""), v ? W(
      a.dynamicChildren,
      v,
      S,
      p,
      _,
      ds(u, m),
      g
    ) : x || z(
      a,
      u,
      S,
      null,
      p,
      _,
      ds(u, m),
      g,
      !1
    ), b > 0) {
      if (b & 16)
        te(S, T, R, p, m);
      else if (b & 2 && T.class !== R.class && i(S, "class", null, R.class, m), b & 4 && i(S, "style", T.style, R.style, m), b & 8) {
        const j = u.dynamicProps;
        for (let Y = 0; Y < j.length; Y++) {
          const Q = j[Y], re = T[Q], de = R[Q];
          (de !== re || Q === "value") && i(S, Q, re, de, m, p);
        }
      }
      b & 1 && a.children !== u.children && f(S, u.children);
    } else !x && v == null && te(S, T, R, p, m);
    ((O = R.onVnodeUpdated) || F) && Se(() => {
      O && We(O, p, u, a), F && wt(u, a, p, "updated");
    }, _);
  }, W = (a, u, p, _, m, g, x) => {
    for (let S = 0; S < u.length; S++) {
      const b = a[S], v = u[S], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        b.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pt(b, v) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 198) ? h(b.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      A(
        b,
        v,
        F,
        null,
        _,
        m,
        g,
        x,
        !0
      );
    }
  }, te = (a, u, p, _, m) => {
    if (u !== p) {
      if (u !== Z)
        for (const g in u)
          !Yt(g) && !(g in p) && i(
            a,
            g,
            u[g],
            null,
            m,
            _
          );
      for (const g in p) {
        if (Yt(g)) continue;
        const x = p[g], S = u[g];
        x !== S && g !== "value" && i(a, g, S, x, m, _);
      }
      "value" in p && i(a, "value", u.value, p.value, m);
    }
  }, C = (a, u, p, _, m, g, x, S, b) => {
    const v = u.el = a ? a.el : l(""), F = u.anchor = a ? a.anchor : l("");
    let { patchFlag: T, dynamicChildren: R, slotScopeIds: O } = u;
    O && (S = S ? S.concat(O) : O), a == null ? (s(v, p, _), s(F, p, _), ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      p,
      F,
      m,
      g,
      x,
      S,
      b
    )) : T > 0 && T & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === R.length ? (W(
      a.dynamicChildren,
      R,
      p,
      m,
      g,
      x,
      S
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (u.key != null || m && u === m.subTree) && Ji(
      a,
      u,
      !0
      /* shallow */
    )) : z(
      a,
      u,
      p,
      F,
      m,
      g,
      x,
      S,
      b
    );
  }, J = (a, u, p, _, m, g, x, S, b) => {
    u.slotScopeIds = S, a == null ? u.shapeFlag & 512 ? m.ctx.activate(
      u,
      p,
      _,
      x,
      b
    ) : ae(
      u,
      p,
      _,
      m,
      g,
      x,
      b
    ) : Ie(a, u, b);
  }, ae = (a, u, p, _, m, g, x) => {
    const S = a.component = oc(
      a,
      _,
      m
    );
    if (Wn(a) && (S.ctx.renderer = St), ic(S, !1, x), S.asyncDep) {
      if (m && m.registerDep(S, ie, x), !a.el) {
        const b = S.subTree = q(xe);
        V(null, b, u, p), a.placeholder = b.el;
      }
    } else
      ie(
        S,
        a,
        u,
        p,
        m,
        g,
        x
      );
  }, Ie = (a, u, p) => {
    const _ = u.component = a.component;
    if (Vl(a, u, p))
      if (_.asyncDep && !_.asyncResolved) {
        X(_, u, p);
        return;
      } else
        _.next = u, _.update();
    else
      u.el = a.el, _.vnode = u;
  }, ie = (a, u, p, _, m, g, x) => {
    const S = () => {
      if (a.isMounted) {
        let { next: T, bu: R, u: O, parent: j, vnode: Y } = a;
        {
          const Be = Xi(a);
          if (Be) {
            T && (T.el = Y.el, X(a, T, x)), Be.asyncDep.then(() => {
              Se(() => {
                a.isUnmounted || v();
              }, m);
            });
            return;
          }
        }
        let Q = T, re;
        Ct(a, !1), T ? (T.el = Y.el, X(a, T, x)) : T = Y, R && os(R), (re = T.props && T.props.onVnodeBeforeUpdate) && We(re, j, T, Y), Ct(a, !0);
        const de = To(a), ze = a.subTree;
        a.subTree = de, A(
          ze,
          de,
          // parent may have changed if it's in a teleport
          h(ze.el),
          // anchor may have changed if it's in a fragment
          xt(ze),
          a,
          m,
          g
        ), T.el = de.el, Q === null && jl(a, de.el), O && Se(O, m), (re = T.props && T.props.onVnodeUpdated) && Se(
          () => We(re, j, T, Y),
          m
        );
      } else {
        let T;
        const { el: R, props: O } = u, { bm: j, m: Y, parent: Q, root: re, type: de } = a, ze = Xt(u);
        Ct(a, !1), j && os(j), !ze && (T = O && O.onVnodeBeforeMount) && We(T, Q, u), Ct(a, !0);
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
            _,
            a,
            m,
            g
          ), u.el = Be.el;
        }
        if (Y && Se(Y, m), !ze && (T = O && O.onVnodeMounted)) {
          const Be = u;
          Se(
            () => We(T, Q, Be),
            m
          );
        }
        (u.shapeFlag & 256 || Q && Xt(Q.vnode) && Q.vnode.shapeFlag & 256) && a.a && Se(a.a, m), a.isMounted = !0, u = p = _ = null;
      }
    };
    a.scope.on();
    const b = a.effect = new ri(S);
    a.scope.off();
    const v = a.update = b.run.bind(b), F = a.job = b.runIfDirty.bind(b);
    F.i = a, F.id = a.uid, b.scheduler = () => Gs(F), Ct(a, !0), v();
  }, X = (a, u, p) => {
    u.component = a;
    const _ = a.vnode.props;
    a.vnode = u, a.next = null, Bl(a, u.props, _, p), $l(a, u.children, p), lt(), mo(a), ct();
  }, z = (a, u, p, _, m, g, x, S, b = !1) => {
    const v = a && a.children, F = a ? a.shapeFlag : 0, T = u.children, { patchFlag: R, shapeFlag: O } = u;
    if (R > 0) {
      if (R & 128) {
        ht(
          v,
          T,
          p,
          _,
          m,
          g,
          x,
          S,
          b
        );
        return;
      } else if (R & 256) {
        Re(
          v,
          T,
          p,
          _,
          m,
          g,
          x,
          S,
          b
        );
        return;
      }
    }
    O & 8 ? (F & 16 && yt(v, m, g), T !== v && f(p, T)) : F & 16 ? O & 16 ? ht(
      v,
      T,
      p,
      _,
      m,
      g,
      x,
      S,
      b
    ) : yt(v, m, g, !0) : (F & 8 && f(p, ""), O & 16 && ne(
      T,
      p,
      _,
      m,
      g,
      x,
      S,
      b
    ));
  }, Re = (a, u, p, _, m, g, x, S, b) => {
    a = a || Lt, u = u || Lt;
    const v = a.length, F = u.length, T = Math.min(v, F);
    let R;
    for (R = 0; R < T; R++) {
      const O = u[R] = b ? ot(u[R]) : Ge(u[R]);
      A(
        a[R],
        O,
        p,
        null,
        m,
        g,
        x,
        S,
        b
      );
    }
    v > F ? yt(
      a,
      m,
      g,
      !0,
      !1,
      T
    ) : ne(
      u,
      p,
      _,
      m,
      g,
      x,
      S,
      b,
      T
    );
  }, ht = (a, u, p, _, m, g, x, S, b) => {
    let v = 0;
    const F = u.length;
    let T = a.length - 1, R = F - 1;
    for (; v <= T && v <= R; ) {
      const O = a[v], j = u[v] = b ? ot(u[v]) : Ge(u[v]);
      if (Pt(O, j))
        A(
          O,
          j,
          p,
          null,
          m,
          g,
          x,
          S,
          b
        );
      else
        break;
      v++;
    }
    for (; v <= T && v <= R; ) {
      const O = a[T], j = u[R] = b ? ot(u[R]) : Ge(u[R]);
      if (Pt(O, j))
        A(
          O,
          j,
          p,
          null,
          m,
          g,
          x,
          S,
          b
        );
      else
        break;
      T--, R--;
    }
    if (v > T) {
      if (v <= R) {
        const O = R + 1, j = O < F ? u[O].el : _;
        for (; v <= R; )
          A(
            null,
            u[v] = b ? ot(u[v]) : Ge(u[v]),
            p,
            j,
            m,
            g,
            x,
            S,
            b
          ), v++;
      }
    } else if (v > R)
      for (; v <= T; )
        Ce(a[v], m, g, !0), v++;
    else {
      const O = v, j = v, Y = /* @__PURE__ */ new Map();
      for (v = j; v <= R; v++) {
        const Te = u[v] = b ? ot(u[v]) : Ge(u[v]);
        Te.key != null && Y.set(Te.key, v);
      }
      let Q, re = 0;
      const de = R - j + 1;
      let ze = !1, Be = 0;
      const Bt = new Array(de);
      for (v = 0; v < de; v++) Bt[v] = 0;
      for (v = O; v <= T; v++) {
        const Te = a[v];
        if (re >= de) {
          Ce(Te, m, g, !0);
          continue;
        }
        let Ue;
        if (Te.key != null)
          Ue = Y.get(Te.key);
        else
          for (Q = j; Q <= R; Q++)
            if (Bt[Q - j] === 0 && Pt(Te, u[Q])) {
              Ue = Q;
              break;
            }
        Ue === void 0 ? Ce(Te, m, g, !0) : (Bt[Ue - j] = v + 1, Ue >= Be ? Be = Ue : ze = !0, A(
          Te,
          u[Ue],
          p,
          null,
          m,
          g,
          x,
          S,
          b
        ), re++);
      }
      const co = ze ? Zl(Bt) : Lt;
      for (Q = co.length - 1, v = de - 1; v >= 0; v--) {
        const Te = j + v, Ue = u[Te], ao = u[Te + 1], fo = Te + 1 < F ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ao.el || Qi(ao)
        ) : _;
        Bt[v] === 0 ? A(
          null,
          Ue,
          p,
          fo,
          m,
          g,
          x,
          S,
          b
        ) : ze && (Q < 0 || v !== co[Q] ? et(Ue, p, fo, 2) : Q--);
      }
    }
  }, et = (a, u, p, _, m = null) => {
    const { el: g, type: x, transition: S, children: b, shapeFlag: v } = a;
    if (v & 6) {
      et(a.component.subTree, u, p, _);
      return;
    }
    if (v & 128) {
      a.suspense.move(u, p, _);
      return;
    }
    if (v & 64) {
      x.move(a, u, p, St);
      return;
    }
    if (x === ke) {
      s(g, u, p);
      for (let T = 0; T < b.length; T++)
        et(b[T], u, p, _);
      s(a.anchor, u, p);
      return;
    }
    if (x === hs) {
      L(a, u, p);
      return;
    }
    if (_ !== 2 && v & 1 && S)
      if (_ === 0)
        S.beforeEnter(g), s(g, u, p), Se(() => S.enter(g), m);
      else {
        const { leave: T, delayLeave: R, afterLeave: O } = S, j = () => {
          a.ctx.isUnmounted ? o(g) : s(g, u, p);
        }, Y = () => {
          g._isLeaving && g[qe](
            !0
            /* cancelled */
          ), T(g, () => {
            j(), O && O();
          });
        };
        R ? R(g, j, Y) : Y();
      }
    else
      s(g, u, p);
  }, Ce = (a, u, p, _ = !1, m = !1) => {
    const {
      type: g,
      props: x,
      ref: S,
      children: b,
      dynamicChildren: v,
      shapeFlag: F,
      patchFlag: T,
      dirs: R,
      cacheIndex: O,
      memo: j
    } = a;
    if (T === -2 && (m = !1), S != null && (lt(), Jt(S, null, p, a, !0), ct()), O != null && (u.renderCache[O] = void 0), F & 256) {
      u.ctx.deactivate(a);
      return;
    }
    const Y = F & 1 && R, Q = !Xt(a);
    let re;
    if (Q && (re = x && x.onVnodeBeforeUnmount) && We(re, u, a), F & 6)
      ns(a.component, p, _);
    else {
      if (F & 128) {
        a.suspense.unmount(p, _);
        return;
      }
      Y && wt(a, null, u, "beforeUnmount"), F & 64 ? a.type.remove(
        a,
        u,
        p,
        St,
        _
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (g !== ke || T > 0 && T & 64) ? yt(
        v,
        u,
        p,
        !1,
        !0
      ) : (g === ke && T & 384 || !m && F & 16) && yt(b, u, p), _ && pn(a);
    }
    const de = j != null && O == null;
    (Q && (re = x && x.onVnodeUnmounted) || Y || de) && Se(() => {
      re && We(re, u, a), Y && wt(a, null, u, "unmounted"), de && (a.el = null);
    }, p);
  }, pn = (a) => {
    const { type: u, el: p, anchor: _, transition: m } = a;
    if (u === ke) {
      ts(p, _);
      return;
    }
    if (u === hs) {
      k(a);
      return;
    }
    const g = () => {
      o(p), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (a.shapeFlag & 1 && m && !m.persisted) {
      const { leave: x, delayLeave: S } = m, b = () => x(p, g);
      S ? S(a.el, g, b) : b();
    } else
      g();
  }, ts = (a, u) => {
    let p;
    for (; a !== u; )
      p = y(a), o(a), a = p;
    o(u);
  }, ns = (a, u, p) => {
    const { bum: _, scope: m, job: g, subTree: x, um: S, m: b, a: v } = a;
    Po(b), Po(v), _ && os(_), m.stop(), g && (g.flags |= 8, Ce(x, a, u, p)), S && Se(S, u), Se(() => {
      a.isUnmounted = !0;
    }, u);
  }, yt = (a, u, p, _ = !1, m = !1, g = 0) => {
    for (let x = g; x < a.length; x++)
      Ce(a[x], u, p, _, m);
  }, xt = (a) => {
    if (a.shapeFlag & 6)
      return xt(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const u = y(a.anchor || a.el), p = u && u[cl];
    return p ? y(p) : u;
  };
  let zt = !1;
  const gn = (a, u, p) => {
    let _;
    a == null ? u._vnode && (Ce(u._vnode, null, null, !0), _ = u._vnode.component) : A(
      u._vnode || null,
      a,
      u,
      null,
      null,
      null,
      p
    ), u._vnode = a, zt || (zt = !0, mo(_), Ci(), zt = !1);
  }, St = {
    p: A,
    um: Ce,
    m: et,
    r: pn,
    mt: ae,
    mc: ne,
    pc: z,
    pbc: W,
    n: xt,
    o: e
  };
  return {
    render: gn,
    hydrate: void 0,
    createApp: Ll(gn)
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
  if (M(s) && M(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = ot(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && Ji(r, l)), l.type === Yn && (l.patchFlag === -1 && (l = o[i] = ot(l)), l.el = r.el), l.type === xe && !l.el && (l.el = r.el);
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
  t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : ol(e);
}
const ke = /* @__PURE__ */ Symbol.for("v-fgt"), Yn = /* @__PURE__ */ Symbol.for("v-txt"), xe = /* @__PURE__ */ Symbol.for("v-cmt"), hs = /* @__PURE__ */ Symbol.for("v-stc"), en = [];
let He = null;
function G(e = !1) {
  en.push(He = e ? null : []);
}
function Xl() {
  en.pop(), He = en[en.length - 1] || null;
}
let cn = 1;
function kn(e, t = !1) {
  cn += e, e < 0 && He && t && (He.hasOnce = !0);
}
function tr(e) {
  return e.dynamicChildren = cn > 0 ? He || Lt : null, Xl(), cn > 0 && He && He.push(e), e;
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
function Pn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const nr = ({ key: e }) => e ?? null, bn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || /* @__PURE__ */ ve(e) || I(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function K(e, t = null, n = null, s = 0, o = null, i = e === ke ? 0 : 1, r = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && nr(t),
    ref: t && bn(t),
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
    ctx: Ee
  };
  return l ? (to(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= le(n) ? 8 : 16), cn > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  He && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && He.push(c), c;
}
const q = Ql;
function Ql(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Cl) && (e = xe), Pn(e)) {
    const l = _t(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && to(l, n), cn > 0 && !i && He && (l.shapeFlag & 6 ? He[He.indexOf(e)] = l : He.push(l)), l.patchFlag = -2, l;
  }
  if (fc(e) && (e = e.__vccOpts), t) {
    t = ec(t);
    let { class: l, style: c } = t;
    l && !le(l) && (t.class = Vt(l)), $(c) && (/* @__PURE__ */ qs(c) && !M(c) && (c = se({}, c)), t.style = Ds(c));
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
function _t(e, t, n = !1, s = !1) {
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
      n && i ? M(i) ? i.concat(bn(t)) : [i, bn(t)] : bn(t)
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
    patchFlag: t && e.type !== ke ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && _t(e.ssContent),
    ssFallback: e.ssFallback && _t(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && ln(
    f,
    c.clone(f)
  ), f;
}
function tn(e = " ", t = 0) {
  return q(Yn, null, e, t);
}
function fe(e = "", t = !1) {
  return t ? (G(), Ne(xe, null, e)) : q(xe, null, e);
}
function Ge(e) {
  return e == null || typeof e == "boolean" ? q(xe) : M(e) ? q(
    ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Pn(e) ? ot(e) : q(Yn, null, String(e));
}
function ot(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : _t(e);
}
function to(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (M(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), to(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Ki(t) ? t._ctx = Ee : o === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [tn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function tc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = Vt([t.class, s.class]));
      else if (o === "style")
        t.style = Ds([t.style, s.style]);
      else if (In(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(M(i) && i.includes(r)) ? t[o] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Nn(o) && (t[o] = r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function We(e, t, n, s = null) {
  je(e, t, 7, [
    n,
    s
  ]);
}
const nc = ji();
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
    emitsOptions: zi(s, o),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ol.bind(null, i), e.ce && e.ce(i), i;
}
let ge = null;
const no = () => ge || Ee;
let En, Hs;
{
  const e = zn(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  En = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ge = n
  ), Hs = t(
    "__VUE_SSR_SETTERS__",
    (n) => an = n
  );
}
const hn = (e) => {
  const t = ge;
  return En(e), e.scope.on(), () => {
    e.scope.off(), En(t);
  };
}, Eo = () => {
  ge && ge.scope.off(), En(null);
};
function sr(e) {
  return e.vnode.shapeFlag & 4;
}
let an = !1;
function ic(e, t = !1, n = !1) {
  t && Hs(t);
  const { props: s, children: o } = e.vnode, i = sr(e);
  zl(e, s, i, t), Kl(e, o, n || t);
  const r = i ? rc(e, t) : void 0;
  return t && Hs(!1), r;
}
function rc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Al);
  const { setup: s } = n;
  if (s) {
    lt();
    const o = e.setupContext = s.length > 1 ? cc(e) : null, i = hn(e), r = dn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), l = ei(r);
    if (ct(), i(), (l || e.sp) && !Xt(e) && Ii(e), l) {
      if (r.then(Eo, Eo), t)
        return r.then((c) => {
          Ho(e, c);
        }).catch((c) => {
          Un(c, e, 0);
        });
      e.asyncDep = r;
    } else
      Ho(e, r);
  } else
    or(e);
}
function Ho(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $(t) && (e.setupState = xi(t)), or(e);
}
function or(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Xe);
  {
    const o = hn(e);
    lt();
    try {
      kl(e);
    } finally {
      ct(), o();
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
function Gn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(xi(Yr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Qt)
        return Qt[n](e);
    },
    has(t, n) {
      return n in t || n in Qt;
    }
  })) : e.proxy;
}
function ac(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function fc(e) {
  return I(e) && "__vccOpts" in e;
}
const be = (e, t) => /* @__PURE__ */ Qr(e, t, an);
function uc(e, t, n) {
  try {
    kn(-1);
    const s = arguments.length;
    return s === 2 ? $(t) && !M(t) ? Pn(t) ? q(e, null, [t]) : q(e, t) : q(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Pn(n) && (n = [n]), q(e, t, n));
  } finally {
    kn(1);
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
const ir = Rs ? (e) => Rs.createHTML(e) : (e) => e, hc = "http://www.w3.org/2000/svg", pc = "http://www.w3.org/1998/Math/MathML", st = typeof document < "u" ? document : null, Fo = st && /* @__PURE__ */ st.createElement("template"), gc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? st.createElementNS(hc, e) : t === "mathml" ? st.createElementNS(pc, e) : n ? st.createElement(e, { is: n }) : st.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => st.createTextNode(e),
  createComment: (e) => st.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => st.querySelector(e),
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
}, pt = "transition", Kt = "animation", fn = /* @__PURE__ */ Symbol("_vtc"), rr = {
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
  M(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Lo = (e) => e ? M(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function bc(e) {
  const t = {};
  for (const C in e)
    C in rr || (t[C] = e[C]);
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
    leaveActiveClass: y = `${n}-leave-active`,
    leaveToClass: w = `${n}-leave-to`
  } = e, P = yc(o), A = P && P[0], H = P && P[1], {
    onBeforeEnter: V,
    onEnter: E,
    onEnterCancelled: L,
    onLeave: k,
    onLeaveCancelled: N,
    onBeforeAppear: oe = V,
    onAppear: ce = E,
    onAppearCancelled: ne = L
  } = t, D = (C, J, ae, Ie) => {
    C._enterCancelled = Ie, At(C, J ? f : l), At(C, J ? d : r), ae && ae();
  }, W = (C, J) => {
    C._isLeaving = !1, At(C, h), At(C, w), At(C, y), J && J();
  }, te = (C) => (J, ae) => {
    const Ie = C ? ce : E, ie = () => D(J, C, ae);
    Tt(Ie, [J, ie]), Mo(() => {
      At(J, C ? c : i), nt(J, C ? f : l), Lo(Ie) || Oo(J, s, A, ie);
    });
  };
  return se(t, {
    onBeforeEnter(C) {
      Tt(V, [C]), nt(C, i), nt(C, r);
    },
    onBeforeAppear(C) {
      Tt(oe, [C]), nt(C, c), nt(C, d);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(C, J) {
      C._isLeaving = !0;
      const ae = () => W(C, J);
      nt(C, h), C._enterCancelled ? (nt(C, y), Do(C)) : (Do(C), nt(C, y)), Mo(() => {
        C._isLeaving && (At(C, h), nt(C, w), Lo(k) || Oo(C, s, H, ae));
      }), Tt(k, [C, ae]);
    },
    onEnterCancelled(C) {
      D(C, !1, void 0, !0), Tt(L, [C]);
    },
    onAppearCancelled(C) {
      D(C, !0, void 0, !0), Tt(ne, [C]);
    },
    onLeaveCancelled(C) {
      W(C), Tt(N, [C]);
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
function nt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[fn] || (e[fn] = /* @__PURE__ */ new Set())).add(t);
}
function At(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[fn];
  n && (n.delete(t), n.size || (e[fn] = void 0));
}
function Mo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let xc = 0;
function Oo(e, t, n, s) {
  const o = e._endId = ++xc, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: r, timeout: l, propCount: c } = Sc(e, t);
  if (!r)
    return s();
  const d = r + "end";
  let f = 0;
  const h = () => {
    e.removeEventListener(d, y), i();
  }, y = (w) => {
    w.target === e && ++f >= c && h();
  };
  setTimeout(() => {
    f < c && h();
  }, l + 1), e.addEventListener(d, y);
}
function Sc(e, t) {
  const n = window.getComputedStyle(e), s = (P) => (n[P] || "").split(", "), o = s(`${pt}Delay`), i = s(`${pt}Duration`), r = Io(o, i), l = s(`${Kt}Delay`), c = s(`${Kt}Duration`), d = Io(l, c);
  let f = null, h = 0, y = 0;
  t === pt ? r > 0 && (f = pt, h = r, y = i.length) : t === Kt ? d > 0 && (f = Kt, h = d, y = c.length) : (h = Math.max(r, d), f = h > 0 ? r > d ? pt : Kt : null, y = f ? f === pt ? i.length : c.length : 0);
  const w = f === pt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${pt}Property`).toString()
  );
  return {
    type: f,
    timeout: h,
    propCount: y,
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
  const s = e[fn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Hn = /* @__PURE__ */ Symbol("_vod"), lr = /* @__PURE__ */ Symbol("_vsh"), Rn = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Hn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : $t(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), $t(e, !0), s.enter(e)) : s.leave(e, () => {
      $t(e, !1);
    }) : $t(e, t));
  },
  beforeUnmount(e, { value: t }) {
    $t(e, t);
  }
};
function $t(e, t) {
  e.style.display = t ? e[Hn] : "none", e[lr] = !t;
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
          n[l] == null && yn(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && yn(s, r, "");
    for (const r in n)
      r === "display" && (i = !0), yn(s, r, n[r]);
  } else if (o) {
    if (t !== n) {
      const r = s[Cc];
      r && (n += ";" + r), s.cssText = n, i = Tc.test(n);
    }
  } else t && e.removeAttribute("style");
  Hn in e && (e[Hn] = i ? s.display : "", e[lr] && (s.display = "none"));
}
const Vo = /\s*!important$/;
function yn(e, t, n) {
  if (M(n))
    n.forEach((s) => yn(e, t, s));
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
const jo = ["Webkit", "Moz", "ms"], gs = {};
function kc(e, t) {
  const n = gs[t];
  if (n)
    return n;
  let s = ue(t);
  if (s !== "filter" && s in e)
    return gs[t] = s;
  s = jn(s);
  for (let o = 0; o < jo.length; o++) {
    const i = jo[o] + s;
    if (i in e)
      return gs[t] = i;
  }
  return t;
}
const zo = "http://www.w3.org/1999/xlink";
function Bo(e, t, n, s, o, i = Tr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(zo, t.slice(6, t.length)) : e.setAttributeNS(zo, t, n) : n == null || i && !si(n) ? e.removeAttribute(t) : e.setAttribute(
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
      const d = i[t] = Mc(
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
function Mc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    je(
      Oc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Lc(), n;
}
function Oc(e, t) {
  if (M(t)) {
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
  t === "class" ? wc(e, s, r) : t === "style" ? Ac(e, n, s) : In(t) ? Nn(t) || Hc(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nc(e, t, s, r)) ? (Uo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bo(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
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
  Dn(s) && (s = se({}, s, t));
  class o extends so {
    constructor(r) {
      super(s, r, n);
    }
  }
  return o.def = s, o;
}
const jc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class so extends jc {
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
      if (i && !M(i))
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
    const { props: n } = t, s = M(n) ? n : Object.keys(n || {});
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
    this._app && (t.appContext = this._app._context), Kc(t, this._root);
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
            Dn(r[0]) ? se({ detail: r }, r[0]) : { detail: r }
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
const zc = ["ctrl", "shift", "alt", "meta"], Bc = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => zc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Uc = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((o, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const l = Bc[t[r]];
      if (l && l(o, t)) return;
    }
    return e(o, ...i);
  }));
}, Wc = /* @__PURE__ */ se({ patchProp: Ic }, gc);
let Yo;
function cr() {
  return Yo || (Yo = ql(Wc));
}
const Kc = ((...e) => {
  cr().render(...e);
}), Go = ((...e) => {
  const t = cr().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = qc(s);
    if (!o) return;
    const i = t._component;
    !I(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, $c(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
});
function $c(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function qc(e) {
  return le(e) ? document.querySelector(e) : e;
}
const ar = /* @__PURE__ */ Symbol("voiceState");
function Yc() {
  const e = /* @__PURE__ */ Bn({
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
function Gc(e) {
  Zs(ar, e);
}
function oo() {
  const e = Nt(ar);
  if (!e)
    throw new Error("[HandsfreeCooking] useVoiceState() called without a provider. Ensure provideVoiceState() is called in a parent component.");
  return e;
}
function Zc(e, t, n, s) {
  const o = {};
  let i = null, r = null, l = [], c = -1;
  const d = window.innerWidth < 768 ? 75 : 60, {
    state: f,
    toggleHelpStage: h,
    toggleListening: y,
    togglePopupState: w,
    updateCurrentStage: P
  } = n, A = () => {
    !i && t.instructions && (i = document.querySelector(t.instructions)), !r && t.ingredients && (r = document.querySelector(t.ingredients)), t.steps && (l = Array.from(document.querySelectorAll(t.steps)));
  }, H = new MutationObserver(() => {
    A();
  });
  H.observe(document.body, { childList: !0, subtree: !0 });
  const V = () => {
    if (l.length > 0 && l[c]) {
      const N = l[c].getBoundingClientRect().top + window.scrollY - d;
      window.scrollTo({
        top: N,
        behavior: "smooth"
      });
    }
    l.length === c + 1 ? (P("listening almost-done"), w(!0)) : (P("listening"), w(!1));
  }, E = (L, k) => {
    L && L.forEach((N) => {
      o[N] = k;
    });
  };
  return e ? (E(e.help, () => {
    P("listening help"), h(!0), w(!0), s("handsfree-command", { command: "help" }), c > 0 && (c -= 1);
  }), E(e.scrollUp, () => {
    window.scrollBy({ top: -300, behavior: "smooth" }), s("handsfree-command", { command: "scroll-up" });
  }), E(e.scrollDown, () => {
    window.scrollBy({ top: 300, behavior: "smooth" }), s("handsfree-command", { command: "scroll-down" });
  }), E(e.exit, () => {
    P("listening"), h(!1), s("handsfree-command", { command: "exit" });
  }), E(e.goToInstructions, () => {
    i || A(), i && (window.scrollTo({
      top: i.offsetTop - d,
      behavior: "smooth"
    }), s("handsfree-command", { command: "go-to-instructions" })), c > 0 && (c -= 1, P("listening"), w(!1));
  }), E(e.goToIngredients, () => {
    r || A(), r && (window.scrollTo({
      top: r.offsetTop - d,
      behavior: "smooth"
    }), s("handsfree-command", { command: "go-to-ingredients" })), c > 0 && (c -= 1, P("listening"), w(!1));
  }), E(e.nextStep, () => {
    l.length === 0 && A(), c < l.length - 1 && (c += 1, V(), s("handsfree-command", { command: "next-step" }));
  }), E(e.previousStep, () => {
    l.length === 0 && A(), c > 0 && (c -= 1, V(), s("handsfree-command", { command: "previous-step" }));
  }), E(e.letsCook, () => {
    y(!0), P("listening"), w(!1), s("handsfree-command", { command: "lets-cook" });
  }), E(e.imDone, () => {
    s("handsfree-command", { command: "im-done" });
  }), { commands: o, destroy: () => H.disconnect() }) : { commands: o, destroy: () => H.disconnect() };
}
function Jc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vs, Zo;
function Xc() {
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
function Qc() {
  if (Jo) return _s;
  Jo = 1;
  var e = Xc();
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
    var l = l || {}, c = l.smoothing || 0.1, d = l.interval || 50, f = l.threshold, h = l.play, y = l.history || 10, w = !0;
    s = l.audioContext || s || new n();
    var P, A, H;
    H = s.createAnalyser(), H.fftSize = 512, H.smoothingTimeConstant = c, A = new Float32Array(H.frequencyBinCount), o.jquery && (o = o[0]), o instanceof HTMLAudioElement || o instanceof HTMLVideoElement ? (P = s.createMediaElementSource(o), typeof h > "u" && (h = !0), f = f || -50) : (P = s.createMediaStreamSource(o), f = f || -50), P.connect(H), h && H.connect(s.destination), r.speaking = !1, r.suspend = function() {
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
      w = !1, r.emit("volume_change", -100, f), r.speaking && (r.speaking = !1, r.emit("stopped_speaking")), H.disconnect(), P.disconnect();
    }, r.speakingHistory = [];
    for (var V = 0; V < y; V++)
      r.speakingHistory.push(0);
    var E = function() {
      setTimeout(function() {
        if (w) {
          var L = t(H, A);
          r.emit("volume_change", L, f);
          var k = 0;
          if (L > f && !r.speaking) {
            for (var N = r.speakingHistory.length - 3; N < r.speakingHistory.length; N++)
              k += r.speakingHistory[N];
            k >= 2 && (r.speaking = !0, r.emit("speaking"));
          } else if (L < f && r.speaking) {
            for (var N = 0; N < r.speakingHistory.length; N++)
              k += r.speakingHistory[N];
            k == 0 && (r.speaking = !1, r.emit("stopped_speaking"));
          }
          r.speakingHistory.shift(), r.speakingHistory.push(0 + (L > f)), E();
        }
      }, d);
    };
    return E(), r;
  }, _s;
}
var ea = Qc();
const ta = /* @__PURE__ */ Jc(ea);
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
    this.audioStreamSpeechEvents = ta(t, {
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
let Fn, Ae, Fs, Ls, Ms, io = !1;
function Me() {
  return /Android/i.test(navigator.userAgent);
}
let Zn, Oe;
const na = 120 * 1e3, sa = 3 * 1e3, oa = {
  error: null,
  status: "stopped",
  transcriptions: [],
  finalTranscriptions: !1
}, bt = (e = {}) => {
  Zn({
    ...oa,
    ...e
  });
}, ia = {
  lang: "en-US",
  interimResults: !0,
  maxAlternatives: 10
};
function Jn() {
  clearTimeout(Fs), clearTimeout(Ls);
}
function ur() {
  Jn(), Ae.abort(), bt(), Me() || Oe(0);
}
function ra() {
  Jn(), Ae && Ae.stop(), bt(), Me() || Oe(0);
}
function dr() {
  bt({
    status: "starting"
  }), Me() || Oe(0);
  try {
    Ae.start();
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
function la() {
  Fn && Fn.stop(), Me() || Oe(0);
}
function ca() {
  Jn(), bt(), Me() || Oe(0), io || hr();
}
function aa() {
  bt({
    status: "recording"
  }), Me() || Oe(0);
}
function fa(e, t) {
  clearTimeout(Fs), t || (Fs = setTimeout(() => {
    bt({
      finalTranscriptions: !0,
      status: "recording",
      transcriptions: e
    }), ur();
  }, sa));
}
function ua(e) {
  if (!e || !e.results)
    return;
  const t = e.results[e.resultIndex], n = Object.values(t).map((s) => ({
    confidence: s.confidence,
    text: s.transcript
  }));
  bt({
    finalTranscriptions: t.isFinal,
    status: "recording",
    transcriptions: n
  }), fa(n, t.isFinal);
}
function da(e) {
  bt({
    error: e.error,
    status: "error"
  }), Me() || Oe(0);
}
function ha() {
  Ms || ur();
}
function pa() {
  Fn = new fr({
    onSpeaking: () => {
      Ms = !0;
    },
    onStopSpeaking: () => {
      Ms = !1, clearTimeout(Ls), Ls = setTimeout(ha, na);
    },
    onVolumeChange: (e) => {
      Me() || Oe(e);
    }
  }), Me() || Oe(0), Fn.start();
}
function ga({ lang: e, interimResults: t, maxAlternatives: n }) {
  const s = window.SpeechRecognition || window.webkitSpeechRecognition;
  Ae = new s(), Ae.continuous = !0, Ae.lang = e, Ae.interimResults = t, Ae.maxAlternatives = n, Ae.onstart = aa, Ae.onresult = ua, Ae.onerror = da, Ae.onend = ca;
}
function ma(e) {
  const t = {
    ...ia,
    ...e
  };
  Zn = e.onUserSpeech, Me() || (Oe = e.onUserSpeak), ga(t);
}
function va() {
  io = !1, Me() || Oe && pa(), Zn && dr();
}
function _a() {
  io = !0, Jn(), Me() || Oe && la(), Zn && ra();
}
const ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  init: ma,
  start: va,
  stop: _a
}, Symbol.toStringTag, { value: "Module" }));
let Ln, Ke, Mn = !1, Xn, ft, On;
function ut() {
  return /Android/i.test(navigator.userAgent);
}
const ya = {
  lang: "en-US",
  interimResults: !0,
  maxAlternatives: 10
}, xa = {
  error: null,
  status: "stopped",
  transcriptions: [],
  finalTranscriptions: !1
}, Ht = (e = {}) => {
  Xn({
    ...xa,
    ...e
  });
};
function Sa() {
  Ht({
    status: "recording"
  });
}
function Qn() {
  ut() || ft(0), Ln && Ln.stop();
}
function wa() {
  Ln = new fr({
    onVolumeChange: (e) => {
      ut() || ft(e);
    }
  }), Ln.start(), ut() || ft(0);
}
function Ca(e, t) {
  clearTimeout(On), t || (On = setTimeout(() => {
    Ht({
      finalTranscriptions: !0,
      transcriptions: e
    });
  }, 2e3));
}
function Ta() {
  ut() || ft && Qn(), Mn = !1, clearTimeout(On), Ht();
}
function Aa(e) {
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
  }), Ca(n, t.isFinal);
}
function ka() {
  Mn = !1, clearTimeout(On), ut() || ft && Qn(), Ht();
}
function Pa(e) {
  Ht({
    error: e.error,
    status: "error"
  }), ut() || ft && Qn();
}
function Ea() {
  if (!Mn) {
    Ht({
      status: "starting"
    });
    try {
      Ke.start(), Mn = !0;
    } catch (e) {
      console.error(e);
    }
  }
}
function Ha({ lang: e, interimResults: t, maxAlternatives: n }) {
  const s = window.SpeechRecognition || window.webkitSpeechRecognition;
  Ke = new s(), Ke.continuous = !1, Ke.lang = e, Ke.interimResults = t, Ke.maxAlternatives = n, Ke.onstart = Sa, Ke.onresult = Aa, Ke.onerror = Pa, Ke.onend = ka;
}
function Ra(e) {
  const t = {
    ...ya,
    ...e
  };
  Ha(t), Xn = e.onUserSpeech, ut() || (ft = e.onUserSpeak);
}
function Fa() {
  ut() || ft && wa(), Xn && Ea();
}
function La() {
  ut() || ft && Qn(), Xn && Ta();
}
const Ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  init: Ra,
  start: Fa,
  stop: La
}, Symbol.toStringTag, { value: "Module" })), Oa = navigator.language || navigator.userLanguage || "en-US";
let gt;
function Ia({
  continuesRecognition: e = !0,
  lang: t = Oa,
  onUserSpeech: n,
  onUserSpeak: s
}) {
  return gt && gt.stop && gt.stop(), e ? gt = ba : gt = Ma, gt.init({
    lang: t,
    onUserSpeech: n,
    onUserSpeak: s
  }), {
    start: gt.start,
    stop: gt.stop
  };
}
const Na = {
  init: Ia
}, Da = {
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
}, Va = {
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
    const t = be(() => Da[e.icon] || ""), n = be(() => e.size ? `hf-icon-${e.size}` : "");
    return {
      svgContent: t,
      cssClass: n
    };
  }
}, ja = ["innerHTML"];
function za(e, t, n, s, o, i) {
  return G(), me("span", {
    class: Vt(["hf-icon", s.cssClass]),
    innerHTML: s.svgContent
  }, null, 10, ja);
}
const es = /* @__PURE__ */ jt(Va, [["render", za]]), Ba = {
  components: {
    HfIcon: es
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
}, Ua = { class: "hf-headline__title" }, Wa = { class: "hf-headline__opener" }, Ka = {
  key: 0,
  class: "hf-spinner"
};
function $a(e, t, n, s, o, i) {
  const r = Je("HfIcon");
  return G(), me("button", {
    class: "hf-headline",
    onClick: t[0] || (t[0] = (...l) => s.togglePopup && s.togglePopup(...l))
  }, [
    q(r, {
      icon: "mic",
      size: 24
    }),
    K("span", Ua, Pe(n.title), 1),
    K("span", Wa, [
      n.isLoading ? (G(), me("span", Ka, [...t[1] || (t[1] = [
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
const ro = /* @__PURE__ */ jt(Ba, [["render", $a]]), qa = {
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
}, Ya = { class: "hf-content-area" }, Ga = ["innerHTML"];
function Za(e, t, n, s, o, i) {
  const r = Je("PopupHeadline");
  return G(), me(ke, null, [
    q(r, {
      class: Vt(n.additionalClassname),
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": n.isCloseState,
      onTogglePopup: s.togglePopup
    }, null, 8, ["class", "title", "is-loading", "is-close-state", "onTogglePopup"]),
    Cn(K("div", Ya, [
      K("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, Ga),
      n.translations.buttonText ? (G(), me("button", {
        key: 0,
        class: "hf-button",
        onClick: t[0] || (t[0] = (...l) => s.buttonAction && s.buttonAction(...l))
      }, Pe(n.translations.buttonText), 1)) : fe("", !0)
    ], 512), [
      [Rn, n.translations.content && n.translations.content !== "" && s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const Ja = /* @__PURE__ */ jt(qa, [["render", Za]]), Xa = {
  components: {
    PopupHeadline: ro,
    HfIcon: es
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
}, Qa = { class: "hf-content-area" }, ef = ["innerHTML"], tf = {
  key: 1,
  class: "hf-introduction-steps"
}, nf = ["innerHTML"], sf = { class: "hf-introduction-buttons" }, of = ["disabled"];
function rf(e, t, n, s, o, i) {
  const r = Je("PopupHeadline"), l = Je("HfIcon");
  return G(), me(ke, null, [
    q(r, {
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": s.isClose,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "is-loading", "is-close-state", "onTogglePopup"]),
    Cn(K("div", Qa, [
      s.voiceState.state.isListening ? fe("", !0) : (G(), me("div", {
        key: 0,
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, ef)),
      s.voiceState.state.isListening ? (G(), me("div", tf, [
        K("div", {
          class: "hf-step",
          innerHTML: n.translations.steps[s.currentStep]
        }, null, 8, nf),
        K("div", sf, [
          K("button", {
            class: "hf-button",
            disabled: s.currentStep < 1,
            onClick: t[0] || (t[0] = (...c) => s.goToPrevStep && s.goToPrevStep(...c))
          }, [
            q(l, {
              icon: "chevron--left",
              size: 24
            })
          ], 8, of),
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
      }, Pe(n.translations.buttonText), 1))
    ], 512), [
      [Rn, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const lf = /* @__PURE__ */ jt(Xa, [["render", rf]]), cf = {
  components: {
    HfIcon: es,
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
    const n = oo(), s = Nt("emitEvent"), o = /* @__PURE__ */ he(null), i = /* @__PURE__ */ he(null), r = /* @__PURE__ */ he(null), l = () => {
      t("closeHandsFreeFlow"), s("handsfree-feedback", { vote: "close" });
    }, c = () => {
      t("togglePopup");
    }, d = /* @__PURE__ */ he(!1), f = () => {
      d.value = !0, s("handsfree-feedback", { vote: "up" });
    }, h = () => {
      d.value = !0, s("handsfree-feedback", { vote: "down" });
    }, y = () => {
      Ys(() => {
        const w = o.value, P = i.value, A = r.value;
        if (!w || !P || !A)
          return;
        const H = P.offsetWidth + A.offsetWidth, V = w.offsetWidth;
        H > V ? w.classList.add("hf-vote--stack") : w.classList.remove("hf-vote--stack");
      });
    };
    return $n(() => {
      y(), window.addEventListener("resize", y);
    }), Js(() => {
      window.removeEventListener("resize", y);
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
}, af = { class: "hf-content-area" }, ff = ["innerHTML"], uf = {
  ref: "handsFreeVotes",
  class: "hf-vote"
}, df = { class: "hf-success-message" };
function hf(e, t, n, s, o, i) {
  const r = Je("PopupHeadline"), l = Je("HfIcon");
  return G(), me(ke, null, [
    q(r, {
      title: n.translations.title,
      onTogglePopup: s.togglePopup
    }, null, 8, ["title", "onTogglePopup"]),
    Cn(K("div", af, [
      K("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, ff),
      K("div", uf, [
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
          K("span", null, Pe(n.translations.voteUp), 1)
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
          K("span", null, Pe(n.translations.voteDown), 1)
        ], 512)),
        Cn(K("div", df, [
          q(l, {
            icon: "checkmark--outline",
            size: 16
          }),
          tn(" " + Pe(n.translations.successMessage), 1)
        ], 512), [
          [Rn, s.voted]
        ])
      ], 512),
      K("button", {
        class: "hf-button hf-button--solid",
        onClick: t[2] || (t[2] = (...c) => s.closeHandsFreeFlow && s.closeHandsFreeFlow(...c))
      }, Pe(n.translations.buttonText), 1)
    ], 512), [
      [Rn, s.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const pf = /* @__PURE__ */ jt(cf, [["render", hf]]), gf = ':host{--hf-color-bg: #ffffff;--hf-color-text: #1a1a1a;--hf-color-primary: #003da5;--hf-color-primary-hover: #002d7a;--hf-color-error: #d32f2f;--hf-color-border: #cccccc;--hf-spacing-xxs: 4px;--hf-spacing-xs: 8px;--hf-spacing-s: 12px;--hf-spacing-m: 16px;--hf-spacing-l: 24px;--hf-font-family: inherit;--hf-font-size-base: 16px;--hf-font-size-small: 14px;--hf-font-size-large: 18px;--hf-popup-width: 410px;--hf-popup-shadow: 0 12px 24px 0 rgba(0, 0, 0, .2);--hf-z-index: 10000;display:block;font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);color:var(--hf-color-text);line-height:1.5}*,*:before,*:after{box-sizing:border-box}.hf-root{margin-bottom:var(--hf-spacing-m)}.hf-intro-row{display:flex;align-items:center;margin-bottom:var(--hf-spacing-xs)}.hf-intro-label{margin-right:var(--hf-spacing-xxs);font-weight:700;text-transform:uppercase;font-size:var(--hf-font-size-small)}.hf-button{display:inline-flex;align-items:center;gap:var(--hf-spacing-xxs);padding:var(--hf-spacing-xs) var(--hf-spacing-m);border:1px solid var(--hf-color-primary);background:var(--hf-color-bg);color:var(--hf-color-primary);font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);cursor:pointer;transition:background .15s,color .15s}.hf-button:hover{background:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button:hover .hf-icon svg{fill:var(--hf-color-bg)}.hf-button:disabled{opacity:.4;cursor:not-allowed}.hf-button--solid{background:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button--solid:hover{background:var(--hf-color-primary-hover)}.hf-button--handsfree{padding:var(--hf-spacing-xs) var(--hf-spacing-l)}.hf-icon{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;line-height:0}.hf-icon svg{fill:currentColor;width:1em;height:1em}.hf-icon-16 svg{width:16px;height:16px}.hf-icon-24 svg{width:24px;height:24px}.hf-tooltip-wrapper{cursor:pointer;position:relative;display:inline-flex;align-items:baseline}.hf-tooltip-content{position:absolute;bottom:30px;left:8px;transform:translate(-50%);width:350px;padding:var(--hf-spacing-s);background:var(--hf-color-bg);box-shadow:var(--hf-popup-shadow);cursor:default;z-index:calc(var(--hf-z-index) + 1)}.hf-tooltip-content:after{content:"";position:absolute;bottom:-10px;left:50%;transform:translate(-50%);width:0;height:0;border-style:solid;border-width:10px 10px 0 10px;border-color:var(--hf-color-bg) transparent transparent transparent}.hf-tooltip-title{display:flex;justify-content:space-between;text-transform:uppercase;font-weight:700;font-size:var(--hf-font-size-large);margin-bottom:var(--hf-spacing-xs)}.hf-tooltip-title span{cursor:pointer}.hf-tooltip-text{display:block;font-size:var(--hf-font-size-base);line-height:1.5}.hf-fade-enter-active,.hf-fade-leave-active{transition:opacity .2s ease-in-out}.hf-fade-enter-from,.hf-fade-leave-to{opacity:0}.hf-popup{position:fixed;bottom:20px;right:20px;width:calc(100% - 40px);max-width:var(--hf-popup-width);background:var(--hf-color-bg);z-index:var(--hf-z-index);box-shadow:var(--hf-popup-shadow);padding:var(--hf-spacing-s);transition:bottom .3s ease}.hf-popup--hidden{bottom:-100px;pointer-events:none;opacity:0}.hf-popup--opened{bottom:20px}.hf-headline{position:relative;border:0;display:flex;align-items:center;width:100%;background:none;padding:0;margin:0;cursor:pointer;font-family:var(--hf-font-family);color:var(--hf-color-text);font-size:var(--hf-font-size-base)}.hf-headline__title{text-transform:uppercase;font-weight:700;font-size:var(--hf-font-size-large);margin-left:var(--hf-spacing-xxs)}.hf-headline__opener{margin-left:auto;display:flex;align-items:center}.hf-headline__opener svg{transition:transform .2s}.hf-popup--opened .hf-headline__opener svg{transform:rotate(0)}.hf-popup:not(.hf-popup--opened) .hf-headline__opener svg{transform:rotate(180deg)}.hf-spinner{display:inline-block;width:22px;height:22px}.hf-spinner svg{width:100%;height:100%;overflow:visible;animation:hf-rotation 1455ms infinite linear}.hf-spinner circle{stroke:currentColor;stroke-dasharray:44px;stroke-dashoffset:11px;transform-origin:center;transform:rotateY(180deg) rotate(90deg);animation:hf-spinner 3.85s infinite ease}@keyframes hf-spinner{0%{stroke-dashoffset:33px;transform:rotateY(0) rotate(0)}24.9999%{stroke-dashoffset:11px;transform:rotateY(0) rotate(0)}25%{stroke-dashoffset:11px;transform:rotateY(180deg) rotate(270deg)}49.9999%{stroke-dashoffset:33px;transform:rotateY(180deg) rotate(270deg)}50%{stroke-dashoffset:33px;transform:rotateY(0) rotate(180deg)}74.9999%{stroke-dashoffset:11px;transform:rotateY(0) rotate(180deg)}75%{stroke-dashoffset:11px;transform:rotateY(180deg) rotate(90deg)}to{stroke-dashoffset:33px;transform:rotateY(180deg) rotate(90deg)}}@keyframes hf-rotation{to{transform:rotate(360deg)}}.hf-content-area{margin-top:var(--hf-spacing-s)}.hf-content p{margin:0 0 var(--hf-spacing-xs);font-size:var(--hf-font-size-base)}.hf-content p:last-of-type{margin:0}.hf-content ul{margin:0;padding:var(--hf-spacing-xxs) 0 var(--hf-spacing-xxs) var(--hf-spacing-m);line-height:1}.hf-content ul li{margin:0 0 var(--hf-spacing-xxs)}.hf-content a{color:var(--hf-color-primary)}.hf-introduction-steps .hf-step{margin-bottom:var(--hf-spacing-xs)}.hf-introduction-steps .hf-step p{margin:0 0 var(--hf-spacing-xs)}.hf-introduction-buttons{display:flex;gap:0}.hf-introduction-buttons .hf-button{padding:var(--hf-spacing-xs)}.hf-introduction-buttons .hf-button:last-of-type{margin-left:-1px}.hf-not-recognized .hf-headline__opener{border:1px solid var(--hf-color-error)}.hf-error-state{color:var(--hf-color-error)}.hf-hide-chevron .hf-headline__opener{pointer-events:none}.hf-hide-chevron .hf-headline__opener .hf-icon{display:none}.hf-vote{display:flex;gap:0;margin:var(--hf-spacing-xs) 0}.hf-vote .hf-button{white-space:nowrap}.hf-vote .hf-button:last-of-type{margin-left:-1px}.hf-vote--stack{flex-direction:column}.hf-vote--stack .hf-button{justify-content:center}.hf-vote--stack .hf-button:last-of-type{margin-left:0;margin-top:-1px}.hf-success-message{display:flex;align-items:center;gap:var(--hf-spacing-xxs)}.hf-hidden-button{position:absolute;left:-9999px;opacity:0}@media print{.hf-root,.hf-popup{display:none}}@media(max-width:767px){.hf-tooltip-content{left:30px;width:290px}.hf-tooltip-content:after{transform:translate(calc(-50% - 22px))}}', mf = {
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
}, vf = {
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
const _f = {
  components: {
    Finish: pf,
    Popup: Ja,
    Introduction: lf,
    HfIcon: es
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
    const t = Yc();
    Gc(t);
    const {
      state: n,
      toggleHelpStage: s,
      toggleListening: o,
      togglePopupState: i,
      updateCurrentStage: r
    } = t, l = no(), c = (m, g = {}) => {
      const x = l?.proxy?.$el?.parentNode?.host || l?.proxy?.$el;
      x && x.dispatchEvent && x.dispatchEvent(new CustomEvent(m, {
        detail: g,
        bubbles: !0,
        composed: !0
      }));
    };
    Zs("emitEvent", c);
    const d = be(() => {
      let m = {};
      if (e.translations)
        try {
          m = JSON.parse(e.translations);
        } catch (g) {
          console.warn("[HandsfreeCooking] Invalid translations JSON:", g);
        }
      return pr(mf, m);
    }), f = be(() => {
      let m = {};
      if (e.commands)
        try {
          m = JSON.parse(e.commands);
        } catch (g) {
          console.warn("[HandsfreeCooking] Invalid commands JSON:", g);
        }
      return { ...vf, ...m };
    }), h = be(() => ({
      steps: e.stepsSelector,
      ingredients: e.ingredientsSelector,
      instructions: e.instructionsSelector
    })), y = /* @__PURE__ */ he(
      e.lang || document.documentElement.lang || "en"
    ), { commands: w, destroy: P } = Zc(
      f.value,
      h.value,
      t,
      c
    ), A = /* @__PURE__ */ he(w), H = /* @__PURE__ */ he(null), V = /* @__PURE__ */ he(!1), E = /* @__PURE__ */ he(null), L = /* @__PURE__ */ he(null), k = /* @__PURE__ */ he(null), N = /* @__PURE__ */ he(0), oe = /* @__PURE__ */ he(!1), ce = /* @__PURE__ */ he(!1), ne = /* @__PURE__ */ he(!1), D = /* @__PURE__ */ he(null), W = be(() => n.isPopupOpened), te = be(() => n.isHelpStage), C = be(() => n.currentStage), J = be(() => C.value && C.value.includes("listening")), ae = be(() => C.value && C.value.includes("not-recognized")), Ie = be(() => C.value && C.value.includes("recognized-error")), ie = be(() => C.value && C.value.includes("almost-done"));
    let X = !1, z = !1, Re = !1, ht = null;
    function et() {
      !H.value || z || (ne.value && H.value.stop(), setTimeout(() => {
        if (!ne.value)
          try {
            H.value.start();
          } catch {
            setTimeout(() => {
              try {
                ne.value || H.value.start();
              } catch (g) {
                console.error("[HandsfreeCooking] Restart failed:", g);
              }
            }, 1e3);
          }
      }, 500));
    }
    const Ce = (m) => {
      E.value && !m.composedPath().includes(E.value) && (V.value = !1);
    }, pn = (m) => {
      let g = null;
      const x = m.toLowerCase().replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, "").replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, "").replace(/\s+/g, " ").replace(/[.,!?;:。，！？；：．]+$/g, "").trim().normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "").normalize("NFC").trim(), S = [];
      Object.keys(A.value).forEach((b) => {
        const v = b.toLowerCase().replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, "").replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, "").replace(/\s+/g, " ").trim().normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "").normalize("NFC").trim();
        x === v ? S.push({ alias: b, normalizedAlias: v, score: 3, type: "exact" }) : x.startsWith(v) ? S.push({ alias: b, normalizedAlias: v, score: 2, type: "starts-with" }) : x.endsWith(v) ? S.push({ alias: b, normalizedAlias: v, score: 2, type: "ends-with" }) : new RegExp(`(^|\\s)${v.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`, "i").test(x) && S.push({ alias: b, normalizedAlias: v, score: 1, type: "word-boundary" });
      }), S.sort((b, v) => b.score !== v.score ? v.score - b.score : v.normalizedAlias.length - b.normalizedAlias.length), S.length > 0 && (g = S[0].alias), g ? (ie.value || (s(!1), i(!1), r("listening")), ie.value && f.value.imDone.includes(g) && (r("finish"), xt(), c("handsfree-finished", { reason: "completed recipe flow" })), k.value = g, N.value = 0, requestAnimationFrame(() => {
        L.value ? L.value.click() : A.value[g] && (A.value[g](), k.value = null);
      })) : (N.value += 1, C.value.includes("help") || (r("listening not-recognized"), s(!1), i(!1)), N.value > 3 && r("listening recognized-error"));
    }, ts = (m) => {
      f.value.letsCook.includes(m) && A.value[m] && (k.value = m, setTimeout(() => {
        L.value && L.value.click();
      }, 100));
    }, ns = window.SpeechRecognition || window.webkitSpeechRecognition, yt = () => {
      if (z = !1, r("introduction"), c("handsfree-activated"), !ns)
        c("handsfree-error", { error: "browser-not-supported" }), r("not-supported");
      else {
        let m = !1;
        H.value = Na.init({
          lang: y.value,
          continuesRecognition: !0,
          onUserSpeech: (g) => {
            if (ne.value = ["starting", "recording"].includes(g.status), ["stopped", "aborted", "error"].includes(g.status) && (ne.value = !1), D.value = g.status, !m && g.status === "starting") {
              m = !0;
              return;
            }
            if (g.status === "error" && (g.error === "not-allowed" || g.error === "service-not-allowed")) {
              ce.value = !0, r("not-allowed"), o(!1), H.value.stop(), c("handsfree-error", { error: "microphone-not-allowed" });
              return;
            }
            if (g.status === "recording" && (o(!0), X || (c("handsfree-state-change", { stage: "microphone-allowed", isListening: !0 }), X = !0), g.transcriptions.length && !g.finalTranscriptions && (oe.value = !0), g.finalTranscriptions)) {
              oe.value = !1;
              const x = g.transcriptions[0].text.toLowerCase().trim();
              C.value.includes("introduction") ? ts(x) : pn(x);
            }
          },
          onUserSpeak: () => {
          }
        });
      }
    }, xt = () => {
      H.value && H.value.stop(), z = !0, s(!1), o(!1), i(!0), ne.value = !1;
    }, zt = () => {
      r("finish"), xt(), c("handsfree-finished", { reason: "stop-cooking-button" });
    }, gn = () => {
      i(!0), s(!0), r("listening help");
    }, St = () => {
      k.value && A.value[k.value] && (A.value[k.value](), k.value = null);
    }, lo = () => {
      if (ce.value)
        r("not-allowed");
      else {
        if (!ne.value)
          try {
            H.value.start();
          } catch (m) {
            console.warn("[HandsfreeCooking] Cannot start recognizer:", m);
          }
        r("listening introduction"), c("handsfree-state-change", { stage: "listening", isListening: !0 });
      }
    };
    function a() {
      alert("Microphone access is blocked. Please enable it in browser settings."), c("handsfree-error", { error: "microphone-blocked" });
    }
    const u = () => {
      n.isPopupOpened ? i(!1) : i(!0), c("handsfree-state-change", {
        stage: C.value,
        isListening: n.isListening,
        isPopupOpened: n.isPopupOpened
      });
    }, p = () => {
      i(!1), s(!1), r("listening");
    }, _ = () => {
      !n.isListening && H.value ? (H.value.stop(), r(null)) : u();
    };
    return $n(() => {
      document.addEventListener("click", Ce), ht = setInterval(() => {
        D.value === "stopped" && C.value === "listening" && !z && !Re && !ne.value && (et(), Re = !0), D.value === "listening" && Re && (Re = !1);
      }, 1e3);
    }), Xs(() => {
      document.removeEventListener("click", Ce), ht && clearInterval(ht);
      try {
        H.value && H.value.stop();
      } catch (m) {
        console.warn("[HandsfreeCooking] Failed to stop on unmount:", m);
      }
      P(), ne.value = !1;
    }), {
      isPopupOpened: W,
      currentStage: C,
      isListeningStage: J,
      isHelpStage: te,
      isNotRecognizedStage: ae,
      isNotRecognizedStageError: Ie,
      isAlmostDone: ie,
      isTooltipVisible: V,
      mergedTranslations: d,
      mergedCommands: f,
      tooltip: E,
      fakeButton: L,
      isLoading: oe,
      openHelp: gn,
      startHandsFreeFlow: yt,
      finishHandsFreeFlow: zt,
      togglePopup: u,
      requestMicrophoneAccess: a,
      runCommand: St,
      beginListening: lo,
      continueListening: p,
      closeHandsFreeFlow: _
    };
  }
}, bf = { class: "hf-root" }, yf = { class: "hf-trigger" }, xf = { class: "hf-intro-row" }, Sf = { class: "hf-intro-label" }, wf = {
  key: 0,
  class: "hf-tooltip-content"
}, Cf = { class: "hf-tooltip-title" }, Tf = { class: "hf-tooltip-text" };
function Af(e, t, n, s, o, i) {
  const r = Je("HfIcon"), l = Je("Introduction"), c = Je("Popup"), d = Je("Finish");
  return G(), me("div", bf, [
    K("div", yf, [
      K("div", xf, [
        K("span", Sf, Pe(s.mergedTranslations.intro), 1),
        K("span", {
          ref: "tooltip",
          class: "hf-tooltip-wrapper",
          onClick: t[2] || (t[2] = Uc(() => {
          }, ["stop"]))
        }, [
          q(r, {
            icon: "help",
            size: 16,
            onClick: t[0] || (t[0] = (f) => s.isTooltipVisible = !s.isTooltipVisible)
          }),
          q(_c, { name: "hf-fade" }, {
            default: ki(() => [
              s.isTooltipVisible ? (G(), me("span", wf, [
                K("strong", Cf, [
                  tn(Pe(s.mergedTranslations.tooltip.title) + " ", 1),
                  K("span", {
                    onClick: t[1] || (t[1] = (f) => s.isTooltipVisible = !1)
                  }, [
                    q(r, {
                      icon: "close",
                      size: 24
                    })
                  ])
                ]),
                K("span", Tf, Pe(s.mergedTranslations.tooltip.text), 1)
              ])) : fe("", !0)
            ]),
            _: 1
          })
        ], 512)
      ]),
      s.currentStage !== "listening" && !s.isListeningStage ? (G(), me("button", {
        key: 0,
        class: "hf-button hf-button--handsfree",
        onClick: t[3] || (t[3] = (...f) => s.startHandsFreeFlow && s.startHandsFreeFlow(...f))
      }, [
        q(r, {
          icon: "mic",
          size: 24
        }),
        tn(" " + Pe(s.mergedTranslations.letsCook), 1)
      ])) : fe("", !0),
      s.isListeningStage ? (G(), me("button", {
        key: 1,
        class: "hf-button hf-button--handsfree",
        onClick: t[4] || (t[4] = (...f) => s.finishHandsFreeFlow && s.finishHandsFreeFlow(...f))
      }, [
        q(r, {
          icon: "mic",
          size: 24
        }),
        tn(" " + Pe(s.mergedTranslations.stopCooking), 1)
      ])) : fe("", !0)
    ]),
    K("div", {
      class: Vt(["hf-popup", {
        "hf-popup--opened": s.isPopupOpened,
        "hf-popup--hidden": s.currentStage === null
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
        "additional-classname": "hf-not-recognized",
        translations: s.mergedTranslations.notRecognized,
        "is-loading": s.isLoading,
        onTogglePopup: s.openHelp
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : fe("", !0),
      s.isNotRecognizedStageError ? (G(), Ne(c, {
        key: 5,
        "additional-classname": "hf-not-recognized hf-error-state",
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
        onClick: t[5] || (t[5] = (...f) => s.runCommand && s.runCommand(...f))
      }, " Run Command ", 512)
    ], 2)
  ]);
}
const kf = /* @__PURE__ */ jt(_f, [["render", Af], ["styles", [gf]]]), Pf = /* @__PURE__ */ Vc(kf, {
  shadowRoot: !0
});
customElements.get("handsfree-cooking") || customElements.define("handsfree-cooking", Pf);
export {
  Pf as HandsfreeCookingElement
};
