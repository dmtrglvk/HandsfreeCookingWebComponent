// @__NO_SIDE_EFFECTS__
function Et(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const X = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Zt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ge = () => {
}, qi = () => !1, Pn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Sn = (e) => e.startsWith("onUpdate:"), se = Object.assign, _s = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, yl = Object.prototype.hasOwnProperty, U = (e, t) => yl.call(e, t), k = Array.isArray, It = (e) => Hn(e) === "[object Map]", Gi = (e) => Hn(e) === "[object Set]", Zs = (e) => Hn(e) === "[object Date]", F = (e) => typeof e == "function", re = (e) => typeof e == "string", ct = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", bs = (e) => (W(e) || F(e)) && F(e.then) && F(e.catch), Yi = Object.prototype.toString, Hn = (e) => Yi.call(e), ys = (e) => Hn(e).slice(8, -1), bo = (e) => Hn(e) === "[object Object]", Es = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vn = /* @__PURE__ */ Et(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), El = /* @__PURE__ */ Et(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), yo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Nl = /-\w/g, ce = yo(
  (e) => e.replace(Nl, (t) => t.slice(1).toUpperCase())
), wl = /\B([A-Z])/g, He = yo(
  (e) => e.replace(wl, "-$1").toLowerCase()
), zt = yo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Rt = yo(
  (e) => e ? `on${zt(e)}` : ""
), st = (e, t) => !Object.is(e, t), an = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Qn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Sl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Xo = (e) => {
  const t = re(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Xs;
const Rn = () => Xs || (Xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ns(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = re(o) ? Tl(o) : Ns(o);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (re(e) || W(e))
    return e;
}
const xl = /;(?![^(]*\))/g, Ol = /:([^]+)/, Cl = /\/\*[^]*?\*\//g;
function Tl(e) {
  const t = {};
  return e.replace(Cl, "").split(xl).forEach((n) => {
    if (n) {
      const o = n.split(Ol);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function nn(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (k(e))
    for (let n = 0; n < e.length; n++) {
      const o = nn(e[n]);
      o && (t += o + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Dl = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Vl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", kl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Al = /* @__PURE__ */ Et(Dl), Pl = /* @__PURE__ */ Et(Vl), Hl = /* @__PURE__ */ Et(kl), Rl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ml = /* @__PURE__ */ Et(Rl);
function Ji(e) {
  return !!e || e === "";
}
function Fl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = ws(e[o], t[o]);
  return n;
}
function ws(e, t) {
  if (e === t) return !0;
  let n = Zs(e), o = Zs(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = ct(e), o = ct(t), n || o)
    return e === t;
  if (n = k(e), o = k(t), n || o)
    return n && o ? Fl(e, t) : !1;
  if (n = W(e), o = W(t), n || o) {
    if (!n || !o)
      return !1;
    const s = Object.keys(e).length, i = Object.keys(t).length;
    if (s !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), c = t.hasOwnProperty(r);
      if (l && !c || !l && c || !ws(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Zi = (e) => !!(e && e.__v_isRef === !0), Re = (e) => re(e) ? e : e == null ? "" : k(e) || W(e) && (e.toString === Yi || !F(e.toString)) ? Zi(e) ? Re(e.value) : JSON.stringify(e, Xi, 2) : String(e), Xi = (e, t) => Zi(t) ? Xi(e, t.value) : It(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], i) => (n[Fo(o, i) + " =>"] = s, n),
    {}
  )
} : Gi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fo(n))
} : ct(t) ? Fo(t) : W(t) && !k(t) && !bo(t) ? String(t) : t, Fo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ct(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function We(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let De;
class Il {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = De, !t && De && (this.index = (De.scopes || (De.scopes = [])).push(
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
      const n = De;
      try {
        return De = this, t();
      } finally {
        De = n;
      }
    } else process.env.NODE_ENV !== "production" && We("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = De, De = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (De = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ll() {
  return De;
}
let Z;
const Io = /* @__PURE__ */ new WeakSet();
class Qi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, De && De.active && De.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Io.has(this) && (Io.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || tr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Qs(this), nr(this);
    const t = Z, n = Ue;
    Z = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && Z !== this && We(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), or(this), Z = t, Ue = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Os(t);
      this.deps = this.depsTail = void 0, Qs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Io.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Qo(this) && this.run();
  }
  get dirty() {
    return Qo(this);
  }
}
let er = 0, _n, bn;
function tr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = bn, bn = e;
    return;
  }
  e.next = _n, _n = e;
}
function Ss() {
  er++;
}
function xs() {
  if (--er > 0)
    return;
  if (bn) {
    let t = bn;
    for (bn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; _n; ) {
    let t = _n;
    for (_n = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function nr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function or(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), Os(o), $l(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function Qo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (sr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function sr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xn) || (e.globalVersion = xn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Qo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Z, o = Ue;
  Z = e, Ue = !0;
  try {
    nr(e);
    const s = e.fn(e._value);
    (t.version === 0 || st(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Z = n, Ue = o, or(e), e.flags &= -3;
  }
}
function Os(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Os(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function $l(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ue = !0;
const ir = [];
function Ke() {
  ir.push(Ue), Ue = !1;
}
function qe() {
  const e = ir.pop();
  Ue = e === void 0 ? !0 : e;
}
function Qs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Z;
    Z = void 0;
    try {
      t();
    } finally {
      Z = n;
    }
  }
}
let xn = 0;
class jl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Cs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Z || !Ue || Z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Z)
      n = this.activeLink = new jl(Z, this), Z.deps ? (n.prevDep = Z.depsTail, Z.depsTail.nextDep = n, Z.depsTail = n) : Z.deps = Z.depsTail = n, rr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = Z.depsTail, n.nextDep = void 0, Z.depsTail.nextDep = n, Z.depsTail = n, Z.deps === n && (Z.deps = o);
    }
    return process.env.NODE_ENV !== "production" && Z.onTrack && Z.onTrack(
      se(
        {
          effect: Z
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, xn++, this.notify(t);
  }
  notify(t) {
    Ss();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            se(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      xs();
    }
  }
}
function rr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        rr(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const es = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), ts = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), On = /* @__PURE__ */ Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function he(e, t, n) {
  if (Ue && Z) {
    let o = es.get(e);
    o || es.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new Cs()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function it(e, t, n, o, s, i) {
  const r = es.get(e);
  if (!r) {
    xn++;
    return;
  }
  const l = (c) => {
    c && (process.env.NODE_ENV !== "production" ? c.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: i
    }) : c.trigger());
  };
  if (Ss(), t === "clear")
    r.forEach(l);
  else {
    const c = k(e), d = c && Es(n);
    if (c && n === "length") {
      const f = Number(o);
      r.forEach((u, g) => {
        (g === "length" || g === On || !ct(g) && g >= f) && l(u);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), d && l(r.get(On)), t) {
        case "add":
          c ? d && l(r.get("length")) : (l(r.get(Lt)), It(e) && l(r.get(ts)));
          break;
        case "delete":
          c || (l(r.get(Lt)), It(e) && l(r.get(ts)));
          break;
        case "set":
          It(e) && l(r.get(Lt));
          break;
      }
  }
  xs();
}
function qt(e) {
  const t = /* @__PURE__ */ L(e);
  return t === e ? t : (he(t, "iterate", On), /* @__PURE__ */ Ae(e) ? t : t.map(_t));
}
function Ts(e) {
  return he(e = /* @__PURE__ */ L(e), "iterate", On), e;
}
function ot(e, t) {
  return /* @__PURE__ */ at(e) ? Cn(/* @__PURE__ */ $t(e) ? _t(t) : t) : _t(t);
}
const Bl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Lo(this, Symbol.iterator, (e) => ot(this, e));
  },
  concat(...e) {
    return qt(this).concat(
      ...e.map((t) => k(t) ? qt(t) : t)
    );
  },
  entries() {
    return Lo(this, "entries", (e) => (e[1] = ot(this, e[1]), e));
  },
  every(e, t) {
    return pt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return pt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((o) => ot(this, o)),
      arguments
    );
  },
  find(e, t) {
    return pt(
      this,
      "find",
      e,
      t,
      (n) => ot(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return pt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return pt(
      this,
      "findLast",
      e,
      t,
      (n) => ot(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return pt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return pt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return $o(this, "includes", e);
  },
  indexOf(...e) {
    return $o(this, "indexOf", e);
  },
  join(e) {
    return qt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return $o(this, "lastIndexOf", e);
  },
  map(e, t) {
    return pt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return fn(this, "pop");
  },
  push(...e) {
    return fn(this, "push", e);
  },
  reduce(e, ...t) {
    return ei(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ei(this, "reduceRight", e, t);
  },
  shift() {
    return fn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return pt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return fn(this, "splice", e);
  },
  toReversed() {
    return qt(this).toReversed();
  },
  toSorted(e) {
    return qt(this).toSorted(e);
  },
  toSpliced(...e) {
    return qt(this).toSpliced(...e);
  },
  unshift(...e) {
    return fn(this, "unshift", e);
  },
  values() {
    return Lo(this, "values", (e) => ot(this, e));
  }
};
function Lo(e, t, n) {
  const o = Ts(e), s = o[t]();
  return o !== e && !/* @__PURE__ */ Ae(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.done || (i.value = n(i.value)), i;
  }), s;
}
const zl = Array.prototype;
function pt(e, t, n, o, s, i) {
  const r = Ts(e), l = r !== e && !/* @__PURE__ */ Ae(e), c = r[t];
  if (c !== zl[t]) {
    const u = c.apply(e, i);
    return l ? _t(u) : u;
  }
  let d = n;
  r !== e && (l ? d = function(u, g) {
    return n.call(this, ot(e, u), g, e);
  } : n.length > 2 && (d = function(u, g) {
    return n.call(this, u, g, e);
  }));
  const f = c.call(r, d, o);
  return l && s ? s(f) : f;
}
function ei(e, t, n, o) {
  const s = Ts(e), i = s !== e && !/* @__PURE__ */ Ae(e);
  let r = n, l = !1;
  s !== e && (i ? (l = o.length === 0, r = function(d, f, u) {
    return l && (l = !1, d = ot(e, d)), n.call(this, d, ot(e, f), u, e);
  }) : n.length > 3 && (r = function(d, f, u) {
    return n.call(this, d, f, u, e);
  }));
  const c = s[t](r, ...o);
  return l ? ot(e, c) : c;
}
function $o(e, t, n) {
  const o = /* @__PURE__ */ L(e);
  he(o, "iterate", On);
  const s = o[t](...n);
  return (s === -1 || s === !1) && /* @__PURE__ */ eo(n[0]) ? (n[0] = /* @__PURE__ */ L(n[0]), o[t](...n)) : s;
}
function fn(e, t, n = []) {
  Ke(), Ss();
  const o = (/* @__PURE__ */ L(e))[t].apply(e, n);
  return xs(), qe(), o;
}
const Ul = /* @__PURE__ */ Et("__proto__,__v_isRef,__isVue"), lr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ct)
);
function Wl(e) {
  ct(e) || (e = String(e));
  const t = /* @__PURE__ */ L(this);
  return he(t, "has", e), t.hasOwnProperty(e);
}
class cr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return o === (s ? i ? hr : dr : i ? pr : ur).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const r = k(t);
    if (!s) {
      let c;
      if (r && (c = Bl[n]))
        return c;
      if (n === "hasOwnProperty")
        return Wl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ de(t) ? t : o
    );
    if ((ct(n) ? lr.has(n) : Ul(n)) || (s || he(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ de(l)) {
      const c = r && Es(n) ? l : l.value;
      return s && W(c) ? /* @__PURE__ */ os(c) : c;
    }
    return W(l) ? s ? /* @__PURE__ */ os(l) : /* @__PURE__ */ No(l) : l;
  }
}
class ar extends cr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let i = t[n];
    const r = k(t) && Es(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ at(i);
      if (!/* @__PURE__ */ Ae(o) && !/* @__PURE__ */ at(o) && (i = /* @__PURE__ */ L(i), o = /* @__PURE__ */ L(o)), !r && /* @__PURE__ */ de(i) && !/* @__PURE__ */ de(o))
        return d ? (process.env.NODE_ENV !== "production" && We(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (i.value = o, !0);
    }
    const l = r ? Number(n) < t.length : U(t, n), c = Reflect.set(
      t,
      n,
      o,
      /* @__PURE__ */ de(t) ? t : s
    );
    return t === /* @__PURE__ */ L(s) && (l ? st(o, i) && it(t, "set", n, o, i) : it(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = U(t, n), s = t[n], i = Reflect.deleteProperty(t, n);
    return i && o && it(t, "delete", n, void 0, s), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!ct(n) || !lr.has(n)) && he(t, "has", n), o;
  }
  ownKeys(t) {
    return he(
      t,
      "iterate",
      k(t) ? "length" : Lt
    ), Reflect.ownKeys(t);
  }
}
class fr extends cr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && We(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && We(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Kl = /* @__PURE__ */ new ar(), ql = /* @__PURE__ */ new fr(), Gl = /* @__PURE__ */ new ar(!0), Yl = /* @__PURE__ */ new fr(!0), ns = (e) => e, zn = (e) => Reflect.getPrototypeOf(e);
function Jl(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, i = /* @__PURE__ */ L(s), r = It(i), l = e === "entries" || e === Symbol.iterator && r, c = e === "keys" && r, d = s[e](...o), f = n ? ns : t ? Cn : _t;
    return !t && he(
      i,
      "iterate",
      c ? ts : Lt
    ), se(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: u, done: g } = d.next();
          return g ? { value: u, done: g } : {
            value: l ? [f(u[0]), f(u[1])] : f(u),
            done: g
          };
        }
      }
    );
  };
}
function Un(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      We(
        `${zt(e)} operation ${n}failed: target is readonly.`,
        /* @__PURE__ */ L(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Zl(e, t) {
  const n = {
    get(s) {
      const i = this.__v_raw, r = /* @__PURE__ */ L(i), l = /* @__PURE__ */ L(s);
      e || (st(s, l) && he(r, "get", s), he(r, "get", l));
      const { has: c } = zn(r), d = t ? ns : e ? Cn : _t;
      if (c.call(r, s))
        return d(i.get(s));
      if (c.call(r, l))
        return d(i.get(l));
      i !== r && i.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && he(/* @__PURE__ */ L(s), "iterate", Lt), s.size;
    },
    has(s) {
      const i = this.__v_raw, r = /* @__PURE__ */ L(i), l = /* @__PURE__ */ L(s);
      return e || (st(s, l) && he(r, "has", s), he(r, "has", l)), s === l ? i.has(s) : i.has(s) || i.has(l);
    },
    forEach(s, i) {
      const r = this, l = r.__v_raw, c = /* @__PURE__ */ L(l), d = t ? ns : e ? Cn : _t;
      return !e && he(c, "iterate", Lt), l.forEach((f, u) => s.call(i, d(f), d(u), r));
    }
  };
  return se(
    n,
    e ? {
      add: Un("add"),
      set: Un("set"),
      delete: Un("delete"),
      clear: Un("clear")
    } : {
      add(s) {
        const i = /* @__PURE__ */ L(this), r = zn(i), l = /* @__PURE__ */ L(s), c = !t && !/* @__PURE__ */ Ae(s) && !/* @__PURE__ */ at(s) ? l : s;
        return r.has.call(i, c) || st(s, c) && r.has.call(i, s) || st(l, c) && r.has.call(i, l) || (i.add(c), it(i, "add", c, c)), this;
      },
      set(s, i) {
        !t && !/* @__PURE__ */ Ae(i) && !/* @__PURE__ */ at(i) && (i = /* @__PURE__ */ L(i));
        const r = /* @__PURE__ */ L(this), { has: l, get: c } = zn(r);
        let d = l.call(r, s);
        d ? process.env.NODE_ENV !== "production" && ti(r, l, s) : (s = /* @__PURE__ */ L(s), d = l.call(r, s));
        const f = c.call(r, s);
        return r.set(s, i), d ? st(i, f) && it(r, "set", s, i, f) : it(r, "add", s, i), this;
      },
      delete(s) {
        const i = /* @__PURE__ */ L(this), { has: r, get: l } = zn(i);
        let c = r.call(i, s);
        c ? process.env.NODE_ENV !== "production" && ti(i, r, s) : (s = /* @__PURE__ */ L(s), c = r.call(i, s));
        const d = l ? l.call(i, s) : void 0, f = i.delete(s);
        return c && it(i, "delete", s, void 0, d), f;
      },
      clear() {
        const s = /* @__PURE__ */ L(this), i = s.size !== 0, r = process.env.NODE_ENV !== "production" ? It(s) ? new Map(s) : new Set(s) : void 0, l = s.clear();
        return i && it(
          s,
          "clear",
          void 0,
          void 0,
          r
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = Jl(s, e, t);
  }), n;
}
function Eo(e, t) {
  const n = Zl(e, t);
  return (o, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    U(n, s) && s in o ? n : o,
    s,
    i
  );
}
const Xl = {
  get: /* @__PURE__ */ Eo(!1, !1)
}, Ql = {
  get: /* @__PURE__ */ Eo(!1, !0)
}, ec = {
  get: /* @__PURE__ */ Eo(!0, !1)
}, tc = {
  get: /* @__PURE__ */ Eo(!0, !0)
};
function ti(e, t, n) {
  const o = /* @__PURE__ */ L(n);
  if (o !== n && t.call(e, o)) {
    const s = ys(e);
    We(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ur = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap();
function nc(e) {
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
function oc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : nc(ys(e));
}
// @__NO_SIDE_EFFECTS__
function No(e) {
  return /* @__PURE__ */ at(e) ? e : wo(
    e,
    !1,
    Kl,
    Xl,
    ur
  );
}
// @__NO_SIDE_EFFECTS__
function sc(e) {
  return wo(
    e,
    !1,
    Gl,
    Ql,
    pr
  );
}
// @__NO_SIDE_EFFECTS__
function os(e) {
  return wo(
    e,
    !0,
    ql,
    ec,
    dr
  );
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  return wo(
    e,
    !0,
    Yl,
    tc,
    hr
  );
}
function wo(e, t, n, o, s) {
  if (!W(e))
    return process.env.NODE_ENV !== "production" && We(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = oc(e);
  if (i === 0)
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return /* @__PURE__ */ at(e) ? /* @__PURE__ */ $t(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function eo(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function L(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ L(t) : e;
}
function ic(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && Qn(e, "__v_skip", !0), e;
}
const _t = (e) => W(e) ? /* @__PURE__ */ No(e) : e, Cn = (e) => W(e) ? /* @__PURE__ */ os(e) : e;
// @__NO_SIDE_EFFECTS__
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  return rc(e, !1);
}
function rc(e, t) {
  return /* @__PURE__ */ de(e) ? e : new lc(e, t);
}
class lc {
  constructor(t, n) {
    this.dep = new Cs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ L(t), this._value = n ? t : _t(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || /* @__PURE__ */ Ae(t) || /* @__PURE__ */ at(t);
    t = o ? t : /* @__PURE__ */ L(t), st(t, n) && (this._rawValue = t, this._value = o ? t : _t(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function gr(e) {
  return /* @__PURE__ */ de(e) ? e.value : e;
}
const cc = {
  get: (e, t, n) => t === "__v_raw" ? e : gr(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return /* @__PURE__ */ de(s) && !/* @__PURE__ */ de(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function mr(e) {
  return /* @__PURE__ */ $t(e) ? e : new Proxy(e, cc);
}
class ac {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Cs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
      return tr(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return sr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && We("Write operation failed: computed value is readonly");
  }
}
// @__NO_SIDE_EFFECTS__
function fc(e, t, n = !1) {
  let o, s;
  F(e) ? o = e : (o = e.get, s = e.set);
  const i = new ac(o, s, n);
  return process.env.NODE_ENV, i;
}
const Wn = {}, to = /* @__PURE__ */ new WeakMap();
let Mt;
function uc(e, t = !1, n = Mt) {
  if (n) {
    let o = to.get(n);
    o || to.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && We(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function pc(e, t, n = X) {
  const { immediate: o, deep: s, once: i, scheduler: r, augmentJob: l, call: c } = n, d = (T) => {
    (n.onWarn || We)(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = (T) => s ? T : /* @__PURE__ */ Ae(T) || s === !1 || s === 0 ? vt(T, 1) : vt(T);
  let u, g, b, D, O = !1, A = !1;
  if (/* @__PURE__ */ de(e) ? (g = () => e.value, O = /* @__PURE__ */ Ae(e)) : /* @__PURE__ */ $t(e) ? (g = () => f(e), O = !0) : k(e) ? (A = !0, O = e.some((T) => /* @__PURE__ */ $t(T) || /* @__PURE__ */ Ae(T)), g = () => e.map((T) => {
    if (/* @__PURE__ */ de(T))
      return T.value;
    if (/* @__PURE__ */ $t(T))
      return f(T);
    if (F(T))
      return c ? c(T, 2) : T();
    process.env.NODE_ENV !== "production" && d(T);
  })) : F(e) ? t ? g = c ? () => c(e, 2) : e : g = () => {
    if (b) {
      Ke();
      try {
        b();
      } finally {
        qe();
      }
    }
    const T = Mt;
    Mt = u;
    try {
      return c ? c(e, 3, [D]) : e(D);
    } finally {
      Mt = T;
    }
  } : (g = ge, process.env.NODE_ENV !== "production" && d(e)), t && s) {
    const T = g, K = s === !0 ? 1 / 0 : s;
    g = () => vt(T(), K);
  }
  const $ = Ll(), P = () => {
    u.stop(), $ && $.active && _s($.effects, u);
  };
  if (i && t) {
    const T = t;
    t = (...K) => {
      T(...K), P();
    };
  }
  let V = A ? new Array(e.length).fill(Wn) : Wn;
  const z = (T) => {
    if (!(!(u.flags & 1) || !u.dirty && !T))
      if (t) {
        const K = u.run();
        if (s || O || (A ? K.some((ae, q) => st(ae, V[q])) : st(K, V))) {
          b && b();
          const ae = Mt;
          Mt = u;
          try {
            const q = [
              K,
              // pass undefined as the old value when it's changed for the first time
              V === Wn ? void 0 : A && V[0] === Wn ? [] : V,
              D
            ];
            V = K, c ? c(t, 3, q) : (
              // @ts-expect-error
              t(...q)
            );
          } finally {
            Mt = ae;
          }
        }
      } else
        u.run();
  };
  return l && l(z), u = new Qi(g), u.scheduler = r ? () => r(z, !1) : z, D = (T) => uc(T, !1, u), b = u.onStop = () => {
    const T = to.get(u);
    if (T) {
      if (c)
        c(T, 4);
      else
        for (const K of T) K();
      to.delete(u);
    }
  }, process.env.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? o ? z(!0) : V = u.run() : r ? r(z.bind(null, !0), !0) : u.run(), P.pause = u.pause.bind(u), P.resume = u.resume.bind(u), P.stop = P, P;
}
function vt(e, t = 1 / 0, n) {
  if (t <= 0 || !W(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ de(e))
    vt(e.value, t, n);
  else if (k(e))
    for (let o = 0; o < e.length; o++)
      vt(e[o], t, n);
  else if (Gi(e) || It(e))
    e.forEach((o) => {
      vt(o, t, n);
    });
  else if (bo(e)) {
    for (const o in e)
      vt(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && vt(e[o], t, n);
  }
  return e;
}
const jt = [];
function Kn(e) {
  jt.push(e);
}
function qn() {
  jt.pop();
}
let jo = !1;
function w(e, ...t) {
  if (jo) return;
  jo = !0, Ke();
  const n = jt.length ? jt[jt.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = dc();
  if (o)
    on(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var r, l;
          return (l = (r = i.toString) == null ? void 0 : r.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: i }) => `at <${jn(n, i.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    s.length && i.push(`
`, ...hc(s)), console.warn(...i);
  }
  qe(), jo = !1;
}
function dc() {
  let e = jt[jt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function hc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...gc(n));
  }), t;
}
function gc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${jn(
    e.component,
    e.type,
    o
  )}`, i = ">" + n;
  return e.props ? [s, ...mc(e.props), i] : [s + i];
}
function mc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...vr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function vr(e, t, n) {
  return re(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ de(t) ? (t = vr(e, /* @__PURE__ */ L(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : F(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ L(t), n ? t : [`${e}=`, t]);
}
function vc(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? w(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && w(`${t} is NaN - the duration expression might be incorrect.`));
}
const Ds = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function on(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Mn(s, t, n);
  }
}
function Ge(e, t, n, o) {
  if (F(e)) {
    const s = on(e, t, n, o);
    return s && bs(s) && s.catch((i) => {
      Mn(i, t, n);
    }), s;
  }
  if (k(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Ge(e[i], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && w(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Mn(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || X;
  if (t) {
    let l = t.parent;
    const c = t.proxy, d = process.env.NODE_ENV !== "production" ? Ds[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let u = 0; u < f.length; u++)
          if (f[u](e, c, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ke(), on(i, null, 10, [
        e,
        c,
        d
      ]), qe();
      return;
    }
  }
  _c(e, n, s, o, r);
}
function _c(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const i = Ds[t];
    if (n && Kn(n), w(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && qn(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const Ce = [];
let tt = -1;
const Xt = [];
let Ot = null, Jt = 0;
const _r = /* @__PURE__ */ Promise.resolve();
let no = null;
const bc = 100;
function Vs(e) {
  const t = no || _r;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function yc(e) {
  let t = tt + 1, n = Ce.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = Ce[o], i = Tn(s);
    i < e || i === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function So(e) {
  if (!(e.flags & 1)) {
    const t = Tn(e), n = Ce[Ce.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Tn(n) ? Ce.push(e) : Ce.splice(yc(t), 0, e), e.flags |= 1, br();
  }
}
function br() {
  no || (no = _r.then(Nr));
}
function yr(e) {
  k(e) ? Xt.push(...e) : Ot && e.id === -1 ? Ot.splice(Jt + 1, 0, e) : e.flags & 1 || (Xt.push(e), e.flags |= 1), br();
}
function ni(e, t, n = tt + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ce.length; n++) {
    const o = Ce[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && ks(t, o))
        continue;
      Ce.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Er(e) {
  if (Xt.length) {
    const t = [...new Set(Xt)].sort(
      (n, o) => Tn(n) - Tn(o)
    );
    if (Xt.length = 0, Ot) {
      Ot.push(...t);
      return;
    }
    for (Ot = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Jt = 0; Jt < Ot.length; Jt++) {
      const n = Ot[Jt];
      process.env.NODE_ENV !== "production" && ks(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Ot = null, Jt = 0;
  }
}
const Tn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Nr(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => ks(e, n) : ge;
  try {
    for (tt = 0; tt < Ce.length; tt++) {
      const n = Ce[tt];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), on(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; tt < Ce.length; tt++) {
      const n = Ce[tt];
      n && (n.flags &= -2);
    }
    tt = -1, Ce.length = 0, Er(e), no = null, (Ce.length || Xt.length) && Nr(e);
  }
}
function ks(e, t) {
  const n = e.get(t) || 0;
  if (n > bc) {
    const o = t.i, s = o && Bs(o.type);
    return Mn(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let ke = !1;
const oi = (e) => {
  try {
    return ke;
  } finally {
    ke = e;
  }
}, Gn = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Rn().__VUE_HMR_RUNTIME__ = {
  createRecord: Bo(wr),
  rerender: Bo(wc),
  reload: Bo(Sc)
});
const Ut = /* @__PURE__ */ new Map();
function Ec(e) {
  const t = e.type.__hmrId;
  let n = Ut.get(t);
  n || (wr(t, e.type), n = Ut.get(t)), n.instances.add(e);
}
function Nc(e) {
  Ut.get(e.type.__hmrId).instances.delete(e);
}
function wr(e, t) {
  return Ut.has(e) ? !1 : (Ut.set(e, {
    initialDef: oo(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function oo(e) {
  return al(e) ? e.__vccOpts : e;
}
function wc(e, t) {
  const n = Ut.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, oo(o.type).render = t), o.renderCache = [], ke = !0, o.job.flags & 8 || o.update(), ke = !1;
  }));
}
function Sc(e, t) {
  const n = Ut.get(e);
  if (!n) return;
  t = oo(t), si(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const i = o[s], r = oo(i.type);
    let l = Gn.get(r);
    l || (r !== n.initialDef && si(r, t), Gn.set(r, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? So(() => {
      i.job.flags & 8 || (ke = !0, i.parent.update(), ke = !1, l.delete(i));
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(r);
  }
  yr(() => {
    Gn.clear();
  });
}
function si(e, t) {
  se(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Bo(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ze, gn = [], ss = !1;
function Fn(e, ...t) {
  ze ? ze.emit(e, ...t) : ss || gn.push({ event: e, args: t });
}
function As(e, t) {
  var n, o;
  ze = e, ze ? (ze.enabled = !0, gn.forEach(({ event: s, args: i }) => ze.emit(s, ...i)), gn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    As(i, t);
  }), setTimeout(() => {
    ze || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ss = !0, gn = []);
  }, 3e3)) : (ss = !0, gn = []);
}
function xc(e, t) {
  Fn("app:init", e, t, {
    Fragment: Ve,
    Text: Ln,
    Comment: pe,
    Static: Jn
  });
}
function Oc(e) {
  Fn("app:unmount", e);
}
const Cc = /* @__PURE__ */ Ps(
  "component:added"
  /* COMPONENT_ADDED */
), Sr = /* @__PURE__ */ Ps(
  "component:updated"
  /* COMPONENT_UPDATED */
), Tc = /* @__PURE__ */ Ps(
  "component:removed"
  /* COMPONENT_REMOVED */
), Dc = (e) => {
  ze && typeof ze.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ze.cleanupBuffer(e) && Tc(e);
};
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  return (t) => {
    Fn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Vc = /* @__PURE__ */ xr(
  "perf:start"
  /* PERFORMANCE_START */
), kc = /* @__PURE__ */ xr(
  "perf:end"
  /* PERFORMANCE_END */
);
function xr(e) {
  return (t, n, o) => {
    Fn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Ac(e, t, n) {
  Fn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ee = null, Or = null;
function so(e) {
  const t = Ee;
  return Ee = e, Or = e && e.type.__scopeId || null, t;
}
function Cr(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && fo(-1);
    const i = so(t);
    let r;
    try {
      r = e(...s);
    } finally {
      so(i), o._d && fo(1);
    }
    return process.env.NODE_ENV !== "production" && Sr(t), r;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Tr(e) {
  El(e) && w("Do not use built-in directive ids as custom directive id: " + e);
}
function io(e, t) {
  if (Ee === null)
    return process.env.NODE_ENV !== "production" && w("withDirectives can only be used inside render functions."), e;
  const n = Do(Ee), o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [i, r, l, c = X] = t[s];
    i && (F(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && vt(r), o.push({
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
function kt(e, t, n, o) {
  const s = e.dirs, i = t && t.dirs;
  for (let r = 0; r < s.length; r++) {
    const l = s[r];
    i && (l.oldValue = i[r].value);
    let c = l.dir[o];
    c && (Ke(), Ge(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), qe());
  }
}
function Hs(e, t) {
  if (process.env.NODE_ENV !== "production" && (!ue || ue.isMounted) && w("provide() can only be used inside setup()."), ue) {
    let n = ue.provides;
    const o = ue.parent && ue.parent.provides;
    o === n && (n = ue.provides = Object.create(o)), n[e] = t;
  }
}
function Qt(e, t, n = !1) {
  const o = To();
  if (o || en) {
    let s = en ? en._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && F(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
const Pc = /* @__PURE__ */ Symbol.for("v-scx"), Hc = () => {
  {
    const e = Qt(Pc);
    return e || process.env.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function zo(e, t, n) {
  return process.env.NODE_ENV !== "production" && !F(t) && w(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Dr(e, t, n);
}
function Dr(e, t, n = X) {
  const { immediate: o, deep: s, flush: i, once: r } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && w(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = se({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = w);
  const c = t && o || !t && i !== "post";
  let d;
  if (kn) {
    if (i === "sync") {
      const b = Hc();
      d = b.__watcherHandles || (b.__watcherHandles = []);
    } else if (!c) {
      const b = () => {
      };
      return b.stop = ge, b.resume = ge, b.pause = ge, b;
    }
  }
  const f = ue;
  l.call = (b, D, O) => Ge(b, f, D, O);
  let u = !1;
  i === "post" ? l.scheduler = (b) => {
    Te(b, f && f.suspense);
  } : i !== "sync" && (u = !0, l.scheduler = (b, D) => {
    D ? b() : So(b);
  }), l.augmentJob = (b) => {
    t && (b.flags |= 4), u && (b.flags |= 2, f && (b.id = f.uid, b.i = f));
  };
  const g = pc(e, t, l);
  return kn && (d ? d.push(g) : c && g()), g;
}
function Rc(e, t, n) {
  const o = this.proxy, s = re(e) ? e.includes(".") ? Vr(o, e) : () => o[e] : e.bind(o, o);
  let i;
  F(t) ? i = t : (i = t.handler, n = t);
  const r = $n(this), l = Dr(s, i.bind(o), n);
  return r(), l;
}
function Vr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const Mc = /* @__PURE__ */ Symbol("_vte"), kr = (e) => e.__isTeleport, nt = /* @__PURE__ */ Symbol("_leaveCb"), un = /* @__PURE__ */ Symbol("_enterCb");
function Fc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Oo(() => {
    e.isMounted = !0;
  }), Rs(() => {
    e.isUnmounting = !0;
  }), e;
}
const Fe = [Function, Array], Ar = {
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
}, Pr = (e) => {
  const t = e.subTree;
  return t.component ? Pr(t.component) : t;
}, Ic = {
  name: "BaseTransition",
  props: Ar,
  setup(e, { slots: t }) {
    const n = To(), o = Fc();
    return () => {
      const s = t.default && Mr(t.default(), !0);
      if (!s || !s.length)
        return;
      const i = Hr(s), r = /* @__PURE__ */ L(e), { mode: l } = r;
      if (process.env.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && w(`invalid <transition> mode: ${l}`), o.isLeaving)
        return Uo(i);
      const c = ii(i);
      if (!c)
        return Uo(i);
      let d = is(
        c,
        r,
        o,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (u) => d = u
      );
      c.type !== pe && Dn(c, d);
      let f = n.subTree && ii(n.subTree);
      if (f && f.type !== pe && !Ft(f, c) && Pr(n).type !== pe) {
        let u = is(
          f,
          r,
          o,
          n
        );
        if (Dn(f, u), l === "out-in" && c.type !== pe)
          return o.isLeaving = !0, u.afterLeave = () => {
            o.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, f = void 0;
          }, Uo(i);
        l === "in-out" && c.type !== pe ? u.delayLeave = (g, b, D) => {
          const O = Rr(
            o,
            f
          );
          O[String(f.key)] = f, g[nt] = () => {
            b(), g[nt] = void 0, delete d.delayedLeave, f = void 0;
          }, d.delayedLeave = () => {
            D(), delete d.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return i;
    };
  }
};
function Hr(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const o of e)
      if (o.type !== pe) {
        if (process.env.NODE_ENV !== "production" && n) {
          w(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = o, n = !0, process.env.NODE_ENV === "production") break;
      }
  }
  return t;
}
const Lc = Ic;
function Rr(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function is(e, t, n, o, s) {
  const {
    appear: i,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: d,
    onAfterEnter: f,
    onEnterCancelled: u,
    onBeforeLeave: g,
    onLeave: b,
    onAfterLeave: D,
    onLeaveCancelled: O,
    onBeforeAppear: A,
    onAppear: $,
    onAfterAppear: P,
    onAppearCancelled: V
  } = t, z = String(e.key), T = Rr(n, e), K = (R, G) => {
    R && Ge(
      R,
      o,
      9,
      G
    );
  }, ae = (R, G) => {
    const te = G[1];
    K(R, G), k(R) ? R.every((x) => x.length <= 1) && te() : R.length <= 1 && te();
  }, q = {
    mode: r,
    persisted: l,
    beforeEnter(R) {
      let G = c;
      if (!n.isMounted)
        if (i)
          G = A || c;
        else
          return;
      R[nt] && R[nt](
        !0
        /* cancelled */
      );
      const te = T[z];
      te && Ft(e, te) && te.el[nt] && te.el[nt](), K(G, [R]);
    },
    enter(R) {
      if (!ke && T[z] === e) return;
      let G = d, te = f, x = u;
      if (!n.isMounted)
        if (i)
          G = $ || d, te = P || f, x = V || u;
        else
          return;
      let ie = !1;
      R[un] = (_e) => {
        ie || (ie = !0, _e ? K(x, [R]) : K(te, [R]), q.delayedLeave && q.delayedLeave(), R[un] = void 0);
      };
      const ve = R[un].bind(null, !1);
      G ? ae(G, [R, ve]) : ve();
    },
    leave(R, G) {
      const te = String(e.key);
      if (R[un] && R[un](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return G();
      K(g, [R]);
      let x = !1;
      R[nt] = (ve) => {
        x || (x = !0, G(), ve ? K(O, [R]) : K(D, [R]), R[nt] = void 0, T[te] === e && delete T[te]);
      };
      const ie = R[nt].bind(null, !1);
      T[te] = e, b ? ae(b, [R, ie]) : ie();
    },
    clone(R) {
      const G = is(
        R,
        t,
        n,
        o,
        s
      );
      return s && s(G), G;
    }
  };
  return q;
}
function Uo(e) {
  if (In(e))
    return e = ft(e), e.children = null, e;
}
function ii(e) {
  if (!In(e))
    return kr(e.type) && e.children ? Hr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && F(n.default))
      return n.default();
  }
}
function Dn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Dn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Mr(e, t = !1, n) {
  let o = [], s = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === Ve ? (r.patchFlag & 128 && s++, o = o.concat(
      Mr(r.children, t, l)
    )) : (t || r.type !== pe) && o.push(l != null ? ft(r, { key: l }) : r);
  }
  if (s > 1)
    for (let i = 0; i < o.length; i++)
      o[i].patchFlag = -2;
  return o;
}
// @__NO_SIDE_EFFECTS__
function $c(e, t) {
  return F(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    se({ name: e.name }, t, { setup: e })
  ) : e;
}
function Fr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ri = /* @__PURE__ */ new WeakSet();
function li(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ro = /* @__PURE__ */ new WeakMap();
function yn(e, t, n, o, s = !1) {
  if (k(e)) {
    e.forEach(
      (O, A) => yn(
        O,
        t && (k(t) ? t[A] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (En(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && yn(e, t, n, o.component.subTree);
    return;
  }
  const i = o.shapeFlag & 4 ? Do(o.component) : o.el, r = s ? null : i, { i: l, r: c } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    w(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, f = l.refs === X ? l.refs = {} : l.refs, u = l.setupState, g = /* @__PURE__ */ L(u), b = u === X ? qi : (O) => process.env.NODE_ENV !== "production" && (U(g, O) && !/* @__PURE__ */ de(g[O]) && w(
    `Template ref "${O}" used on a non-ref value. It will not work in the production build.`
  ), ri.has(g[O])) || li(f, O) ? !1 : U(g, O), D = (O, A) => !(process.env.NODE_ENV !== "production" && ri.has(O) || A && li(f, A));
  if (d != null && d !== c) {
    if (ci(t), re(d))
      f[d] = null, b(d) && (u[d] = null);
    else if (/* @__PURE__ */ de(d)) {
      const O = t;
      D(d, O.k) && (d.value = null), O.k && (f[O.k] = null);
    }
  }
  if (F(c))
    on(c, l, 12, [r, f]);
  else {
    const O = re(c), A = /* @__PURE__ */ de(c);
    if (O || A) {
      const $ = () => {
        if (e.f) {
          const P = O ? b(c) ? u[c] : f[c] : D(c) || !e.k ? c.value : f[e.k];
          if (s)
            k(P) && _s(P, i);
          else if (k(P))
            P.includes(i) || P.push(i);
          else if (O)
            f[c] = [i], b(c) && (u[c] = f[c]);
          else {
            const V = [i];
            D(c, e.k) && (c.value = V), e.k && (f[e.k] = V);
          }
        } else O ? (f[c] = r, b(c) && (u[c] = r)) : A ? (D(c, e.k) && (c.value = r), e.k && (f[e.k] = r)) : process.env.NODE_ENV !== "production" && w("Invalid template ref type:", c, `(${typeof c})`);
      };
      if (r) {
        const P = () => {
          $(), ro.delete(e);
        };
        P.id = -1, ro.set(e, P), Te(P, n);
      } else
        ci(e), $();
    } else process.env.NODE_ENV !== "production" && w("Invalid template ref type:", c, `(${typeof c})`);
  }
}
function ci(e) {
  const t = ro.get(e);
  t && (t.flags |= 8, ro.delete(e));
}
Rn().requestIdleCallback;
Rn().cancelIdleCallback;
const En = (e) => !!e.type.__asyncLoader, In = (e) => e.type.__isKeepAlive;
function jc(e, t) {
  Ir(e, "a", t);
}
function Bc(e, t) {
  Ir(e, "da", t);
}
function Ir(e, t, n = ue) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (xo(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      In(s.parent.vnode) && zc(o, t, n, s), s = s.parent;
  }
}
function zc(e, t, n, o) {
  const s = xo(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Ms(() => {
    _s(o[t], s);
  }, n);
}
function xo(e, t, n = ue, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      Ke();
      const l = $n(n), c = Ge(t, n, e, r);
      return l(), qe(), c;
    });
    return o ? s.unshift(i) : s.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Rt(Ds[e].replace(/ hook$/, ""));
    w(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Nt = (e) => (t, n = ue) => {
  (!kn || e === "sp") && xo(e, (...o) => t(...o), n);
}, Uc = Nt("bm"), Oo = Nt("m"), Wc = Nt(
  "bu"
), Kc = Nt("u"), Rs = Nt(
  "bum"
), Ms = Nt("um"), qc = Nt(
  "sp"
), Gc = Nt("rtg"), Yc = Nt("rtc");
function Jc(e, t = ue) {
  xo("ec", e, t);
}
const Zc = "components";
function lt(e, t) {
  return Qc(Zc, e, !0, t) || e;
}
const Xc = /* @__PURE__ */ Symbol.for("v-ndc");
function Qc(e, t, n = !0, o = !1) {
  const s = Ee || ue;
  if (s) {
    const i = s.type;
    {
      const l = Bs(
        i,
        !1
      );
      if (l && (l === t || l === ce(t) || l === zt(ce(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      ai(s[e] || i[e], t) || // global registration
      ai(s.appContext[e], t)
    );
    return !r && o ? i : (process.env.NODE_ENV !== "production" && n && !r && w(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), r);
  } else process.env.NODE_ENV !== "production" && w(
    `resolve${zt(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function ai(e, t) {
  return e && (e[t] || e[ce(t)] || e[zt(ce(t))]);
}
const rs = (e) => e ? ll(e) ? Do(e) : rs(e.parent) : null, Bt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ rt(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ rt(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ rt(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? /* @__PURE__ */ rt(e.refs) : e.refs,
    $parent: (e) => rs(e.parent),
    $root: (e) => rs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => jr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      So(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Vs.bind(e.proxy)),
    $watch: (e) => Rc.bind(e)
  })
), Fs = (e) => e === "_" || e === "$", Wo = (e, t) => e !== X && !e.__isScriptSetup && U(e, t), Lr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: i, accessCache: r, type: l, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const g = r[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Wo(o, t))
          return r[t] = 1, o[t];
        if (s !== X && U(s, t))
          return r[t] = 2, s[t];
        if (U(i, t))
          return r[t] = 3, i[t];
        if (n !== X && U(n, t))
          return r[t] = 4, n[t];
        ls && (r[t] = 0);
      }
    }
    const d = Bt[t];
    let f, u;
    if (d)
      return t === "$attrs" ? (he(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && co()) : process.env.NODE_ENV !== "production" && t === "$slots" && he(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== X && U(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      u = c.config.globalProperties, U(u, t)
    )
      return u[t];
    process.env.NODE_ENV !== "production" && Ee && (!re(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== X && Fs(t[0]) && U(s, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ee && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: i } = e;
    return Wo(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && U(s, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== X && U(o, t) ? (o[t] = n, !0) : U(e.props, t) ? (process.env.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && w(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, props: i, type: r }
  }, l) {
    let c;
    return !!(n[l] || e !== X && l[0] !== "$" && U(e, l) || Wo(t, l) || U(i, l) || U(o, l) || U(Bt, l) || U(s.config.globalProperties, l) || (c = r.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Lr.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ea(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Bt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Bt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ge
    });
  }), t;
}
function ta(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ge
    });
  });
}
function na(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(/* @__PURE__ */ L(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Fs(o[0])) {
        w(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ge
      });
    }
  });
}
function fi(e) {
  return k(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function oa() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? w(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let ls = !0;
function sa(e) {
  const t = jr(e), n = e.proxy, o = e.ctx;
  ls = !1, t.beforeCreate && ui(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: i,
    methods: r,
    watch: l,
    provide: c,
    inject: d,
    // lifecycle
    created: f,
    beforeMount: u,
    mounted: g,
    beforeUpdate: b,
    updated: D,
    activated: O,
    deactivated: A,
    beforeDestroy: $,
    beforeUnmount: P,
    destroyed: V,
    unmounted: z,
    render: T,
    renderTracked: K,
    renderTriggered: ae,
    errorCaptured: q,
    serverPrefetch: R,
    // public API
    expose: G,
    inheritAttrs: te,
    // assets
    components: x,
    directives: ie,
    filters: ve
  } = t, _e = process.env.NODE_ENV !== "production" ? oa() : null;
  if (process.env.NODE_ENV !== "production") {
    const [B] = e.propsOptions;
    if (B)
      for (const j in B)
        _e("Props", j);
  }
  if (d && ia(d, o, _e), r)
    for (const B in r) {
      const j = r[B];
      F(j) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, B, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[B] = j.bind(n), process.env.NODE_ENV !== "production" && _e("Methods", B)) : process.env.NODE_ENV !== "production" && w(
        `Method "${B}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !F(s) && w(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const B = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && bs(B) && w(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !W(B))
      process.env.NODE_ENV !== "production" && w("data() should return an object.");
    else if (e.data = /* @__PURE__ */ No(B), process.env.NODE_ENV !== "production")
      for (const j in B)
        _e("Data", j), Fs(j[0]) || Object.defineProperty(o, j, {
          configurable: !0,
          enumerable: !0,
          get: () => B[j],
          set: ge
        });
  }
  if (ls = !0, i)
    for (const B in i) {
      const j = i[B], we = F(j) ? j.bind(n, n) : F(j.get) ? j.get.bind(n, n) : ge;
      process.env.NODE_ENV !== "production" && we === ge && w(`Computed property "${B}" has no getter.`);
      const Tt = !F(j) && F(j.set) ? j.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        w(
          `Write operation failed: computed property "${B}" is readonly.`
        );
      } : ge, Dt = Oe({
        get: we,
        set: Tt
      });
      Object.defineProperty(o, B, {
        enumerable: !0,
        configurable: !0,
        get: () => Dt.value,
        set: (ut) => Dt.value = ut
      }), process.env.NODE_ENV !== "production" && _e("Computed", B);
    }
  if (l)
    for (const B in l)
      $r(l[B], o, n, B);
  if (c) {
    const B = F(c) ? c.call(n) : c;
    Reflect.ownKeys(B).forEach((j) => {
      Hs(j, B[j]);
    });
  }
  f && ui(f, e, "c");
  function le(B, j) {
    k(j) ? j.forEach((we) => B(we.bind(n))) : j && B(j.bind(n));
  }
  if (le(Uc, u), le(Oo, g), le(Wc, b), le(Kc, D), le(jc, O), le(Bc, A), le(Jc, q), le(Yc, K), le(Gc, ae), le(Rs, P), le(Ms, z), le(qc, R), k(G))
    if (G.length) {
      const B = e.exposed || (e.exposed = {});
      G.forEach((j) => {
        Object.defineProperty(B, j, {
          get: () => n[j],
          set: (we) => n[j] = we,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === ge && (e.render = T), te != null && (e.inheritAttrs = te), x && (e.components = x), ie && (e.directives = ie), R && Fr(e);
}
function ia(e, t, n = ge) {
  k(e) && (e = cs(e));
  for (const o in e) {
    const s = e[o];
    let i;
    W(s) ? "default" in s ? i = Qt(
      s.from || o,
      s.default,
      !0
    ) : i = Qt(s.from || o) : i = Qt(s), /* @__PURE__ */ de(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[o] = i, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function ui(e, t, n) {
  Ge(
    k(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function $r(e, t, n, o) {
  let s = o.includes(".") ? Vr(n, o) : () => n[o];
  if (re(e)) {
    const i = t[e];
    F(i) ? zo(s, i) : process.env.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e}"`, i);
  } else if (F(e))
    zo(s, e.bind(n));
  else if (W(e))
    if (k(e))
      e.forEach((i) => $r(i, t, n, o));
    else {
      const i = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(i) ? zo(s, i, e) : process.env.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else process.env.NODE_ENV !== "production" && w(`Invalid watch option: "${o}"`, e);
}
function jr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (d) => lo(c, d, r, !0)
  ), lo(c, t, r)), W(t) && i.set(t, c), c;
}
function lo(e, t, n, o = !1) {
  const { mixins: s, extends: i } = t;
  i && lo(e, i, n, !0), s && s.forEach(
    (r) => lo(e, r, n, !0)
  );
  for (const r in t)
    if (o && r === "expose")
      process.env.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = ra[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const ra = {
  data: pi,
  props: di,
  emits: di,
  // objects
  methods: mn,
  computed: mn,
  // lifecycle
  beforeCreate: xe,
  created: xe,
  beforeMount: xe,
  mounted: xe,
  beforeUpdate: xe,
  updated: xe,
  beforeDestroy: xe,
  beforeUnmount: xe,
  destroyed: xe,
  unmounted: xe,
  activated: xe,
  deactivated: xe,
  errorCaptured: xe,
  serverPrefetch: xe,
  // assets
  components: mn,
  directives: mn,
  // watch
  watch: ca,
  // provide / inject
  provide: pi,
  inject: la
};
function pi(e, t) {
  return t ? e ? function() {
    return se(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function la(e, t) {
  return mn(cs(e), cs(t));
}
function cs(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function mn(e, t) {
  return e ? se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function di(e, t) {
  return e ? k(e) && k(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : se(
    /* @__PURE__ */ Object.create(null),
    fi(e),
    fi(t ?? {})
  ) : t;
}
function ca(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = se(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = xe(e[o], t[o]);
  return n;
}
function Br() {
  return {
    app: null,
    config: {
      isNativeTag: qi,
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
let aa = 0;
function fa(e, t) {
  return function(o, s = null) {
    F(o) || (o = se({}, o)), s != null && !W(s) && (process.env.NODE_ENV !== "production" && w("root props passed to app.mount() must be an object."), s = null);
    const i = Br(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const d = i.app = {
      _uid: aa++,
      _component: o,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Si,
      get config() {
        return i.config;
      },
      set config(f) {
        process.env.NODE_ENV !== "production" && w(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...u) {
        return r.has(f) ? process.env.NODE_ENV !== "production" && w("Plugin has already been applied to target app.") : f && F(f.install) ? (r.add(f), f.install(d, ...u)) : F(f) ? (r.add(f), f(d, ...u)) : process.env.NODE_ENV !== "production" && w(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(f) {
        return i.mixins.includes(f) ? process.env.NODE_ENV !== "production" && w(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : i.mixins.push(f), d;
      },
      component(f, u) {
        return process.env.NODE_ENV !== "production" && ds(f, i.config), u ? (process.env.NODE_ENV !== "production" && i.components[f] && w(`Component "${f}" has already been registered in target app.`), i.components[f] = u, d) : i.components[f];
      },
      directive(f, u) {
        return process.env.NODE_ENV !== "production" && Tr(f), u ? (process.env.NODE_ENV !== "production" && i.directives[f] && w(`Directive "${f}" has already been registered in target app.`), i.directives[f] = u, d) : i.directives[f];
      },
      mount(f, u, g) {
        if (c)
          process.env.NODE_ENV !== "production" && w(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && f.__vue_app__ && w(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const b = d._ceVNode || ne(o, s);
          return b.appContext = i, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (i.reload = () => {
            const D = ft(b);
            D.el = null, e(D, f, g);
          }), e(b, f, g), c = !0, d._container = f, f.__vue_app__ = d, process.env.NODE_ENV !== "production" && (d._instance = b.component, xc(d, Si)), Do(b.component);
        }
      },
      onUnmount(f) {
        process.env.NODE_ENV !== "production" && typeof f != "function" && w(
          `Expected function as first argument to app.onUnmount(), but got ${typeof f}`
        ), l.push(f);
      },
      unmount() {
        c ? (Ge(
          l,
          d._instance,
          16
        ), e(null, d._container), process.env.NODE_ENV !== "production" && (d._instance = null, Oc(d)), delete d._container.__vue_app__) : process.env.NODE_ENV !== "production" && w("Cannot unmount an app that is not mounted.");
      },
      provide(f, u) {
        return process.env.NODE_ENV !== "production" && f in i.provides && (U(i.provides, f) ? w(
          `App already provides property with key "${String(f)}". It will be overwritten with the new value.`
        ) : w(
          `App already provides property with key "${String(f)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[f] = u, d;
      },
      runWithContext(f) {
        const u = en;
        en = d;
        try {
          return f();
        } finally {
          en = u;
        }
      }
    };
    return d;
  };
}
let en = null;
const ua = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ce(t)}Modifiers`] || e[`${He(t)}Modifiers`];
function pa(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || X;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: f,
      propsOptions: [u]
    } = e;
    if (f)
      if (!(t in f))
        (!u || !(Rt(ce(t)) in u)) && w(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Rt(ce(t))}" prop.`
        );
      else {
        const g = f[t];
        F(g) && (g(...n) || w(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const i = t.startsWith("update:"), r = i && ua(o, t.slice(7));
  if (r && (r.trim && (s = n.map((f) => re(f) ? f.trim() : f)), r.number && (s = n.map(Sl))), process.env.NODE_ENV !== "production" && Ac(e, t, s), process.env.NODE_ENV !== "production") {
    const f = t.toLowerCase();
    f !== t && o[Rt(f)] && w(
      `Event "${f}" is emitted in component ${jn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${He(
        t
      )}" instead of "${t}".`
    );
  }
  let l, c = o[l = Rt(t)] || // also try camelCase event handler (#2249)
  o[l = Rt(ce(t))];
  !c && i && (c = o[l = Rt(He(t))]), c && Ge(
    c,
    e,
    6,
    s
  );
  const d = o[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ge(
      d,
      e,
      6,
      s
    );
  }
}
const da = /* @__PURE__ */ new WeakMap();
function zr(e, t, n = !1) {
  const o = n ? da : t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const i = e.emits;
  let r = {}, l = !1;
  if (!F(e)) {
    const c = (d) => {
      const f = zr(d, t, !0);
      f && (l = !0, se(r, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (W(e) && o.set(e, null), null) : (k(i) ? i.forEach((c) => r[c] = null) : se(r, i), W(e) && o.set(e, r), r);
}
function Co(e, t) {
  return !e || !Pn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, He(t)) || U(e, t));
}
let as = !1;
function co() {
  as = !0;
}
function hi(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: c,
    render: d,
    renderCache: f,
    props: u,
    data: g,
    setupState: b,
    ctx: D,
    inheritAttrs: O
  } = e, A = so(e);
  let $, P;
  process.env.NODE_ENV !== "production" && (as = !1);
  try {
    if (n.shapeFlag & 4) {
      const T = s || o, K = process.env.NODE_ENV !== "production" && b.__isScriptSetup ? new Proxy(T, {
        get(ae, q, R) {
          return w(
            `Property '${String(
              q
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ae, q, R);
        }
      }) : T;
      $ = Be(
        d.call(
          K,
          T,
          f,
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ rt(u) : u,
          b,
          g,
          D
        )
      ), P = l;
    } else {
      const T = t;
      process.env.NODE_ENV !== "production" && l === u && co(), $ = Be(
        T.length > 1 ? T(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ rt(u) : u,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return co(), /* @__PURE__ */ rt(l);
            },
            slots: r,
            emit: c
          } : { attrs: l, slots: r, emit: c }
        ) : T(
          process.env.NODE_ENV !== "production" ? /* @__PURE__ */ rt(u) : u,
          null
        )
      ), P = t.props ? l : ha(l);
    }
  } catch (T) {
    Nn.length = 0, Mn(T, e, 1), $ = ne(pe);
  }
  let V = $, z;
  if (process.env.NODE_ENV !== "production" && $.patchFlag > 0 && $.patchFlag & 2048 && ([V, z] = Ur($)), P && O !== !1) {
    const T = Object.keys(P), { shapeFlag: K } = V;
    if (T.length) {
      if (K & 7)
        i && T.some(Sn) && (P = ga(
          P,
          i
        )), V = ft(V, P, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !as && V.type !== pe) {
        const ae = Object.keys(l), q = [], R = [];
        for (let G = 0, te = ae.length; G < te; G++) {
          const x = ae[G];
          Pn(x) ? Sn(x) || q.push(x[2].toLowerCase() + x.slice(3)) : R.push(x);
        }
        R.length && w(
          `Extraneous non-props attributes (${R.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), q.length && w(
          `Extraneous non-emits event listeners (${q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !gi(V) && w(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), V = ft(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !gi(V) && w(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Dn(V, n.transition)), process.env.NODE_ENV !== "production" && z ? z(V) : $ = V, so(A), $;
}
const Ur = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Is(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Ur(o);
  } else return [e, void 0];
  const s = t.indexOf(o), i = n ? n.indexOf(o) : -1, r = (l) => {
    t[s] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Be(o), r];
};
function Is(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (tn(s)) {
      if (s.type !== pe || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Is(n.children);
      }
    } else
      return;
  }
  return n;
}
const ha = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Pn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ga = (e, t) => {
  const n = {};
  for (const o in e)
    (!Sn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, gi = (e) => e.shapeFlag & 7 || e.type === pe;
function ma(e, t, n) {
  const { props: o, children: s, component: i } = e, { props: r, children: l, patchFlag: c } = t, d = i.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && ke || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return o ? mi(o, r, d) : !!r;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const g = f[u];
        if (Wr(r, o, g) && !Co(d, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === r ? !1 : o ? r ? mi(o, r, d) : !0 : !!r;
  return !1;
}
function mi(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const i = o[s];
    if (Wr(t, e, i) && !Co(n, i))
      return !0;
  }
  return !1;
}
function Wr(e, t, n) {
  const o = e[n], s = t[n];
  return n === "style" && W(o) && W(s) ? !ws(o, s) : o !== s;
}
function va({ vnode: e, parent: t, suspense: n }, o) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.suspense.vnode.el = s.el = o, e = s), s === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = o);
}
const Kr = {}, qr = () => Object.create(Kr), Gr = (e) => Object.getPrototypeOf(e) === Kr;
function _a(e, t, n, o = !1) {
  const s = {}, i = qr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Yr(e, t, s, i);
  for (const r in e.propsOptions[0])
    r in s || (s[r] = void 0);
  process.env.NODE_ENV !== "production" && Zr(t || {}, s, e), n ? e.props = o ? s : /* @__PURE__ */ sc(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
}
function ba(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function ya(e, t, n, o) {
  const {
    props: s,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = /* @__PURE__ */ L(s), [c] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && ba(e)) && (o || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const f = e.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let g = f[u];
        if (Co(e.emitsOptions, g))
          continue;
        const b = t[g];
        if (c)
          if (U(i, g))
            b !== i[g] && (i[g] = b, d = !0);
          else {
            const D = ce(g);
            s[D] = fs(
              c,
              l,
              D,
              b,
              e,
              !1
            );
          }
        else
          b !== i[g] && (i[g] = b, d = !0);
      }
    }
  } else {
    Yr(e, t, s, i) && (d = !0);
    let f;
    for (const u in l)
      (!t || // for camelCase
      !U(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = He(u)) === u || !U(t, f))) && (c ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[f] !== void 0) && (s[u] = fs(
        c,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete s[u]);
    if (i !== l)
      for (const u in i)
        (!t || !U(t, u)) && (delete i[u], d = !0);
  }
  d && it(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Zr(t || {}, s, e);
}
function Yr(e, t, n, o) {
  const [s, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let c in t) {
      if (vn(c))
        continue;
      const d = t[c];
      let f;
      s && U(s, f = ce(c)) ? !i || !i.includes(f) ? n[f] = d : (l || (l = {}))[f] = d : Co(e.emitsOptions, c) || (!(c in o) || d !== o[c]) && (o[c] = d, r = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ L(n), d = l || X;
    for (let f = 0; f < i.length; f++) {
      const u = i[f];
      n[u] = fs(
        s,
        c,
        u,
        d[u],
        e,
        !U(d, u)
      );
    }
  }
  return r;
}
function fs(e, t, n, o, s, i) {
  const r = e[n];
  if (r != null) {
    const l = U(r, "default");
    if (l && o === void 0) {
      const c = r.default;
      if (r.type !== Function && !r.skipFactory && F(c)) {
        const { propsDefaults: d } = s;
        if (n in d)
          o = d[n];
        else {
          const f = $n(s);
          o = d[n] = c.call(
            null,
            t
          ), f();
        }
      } else
        o = c;
      s.ce && s.ce._setProp(n, o);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !l ? o = !1 : r[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === He(n)) && (o = !0));
  }
  return o;
}
const Ea = /* @__PURE__ */ new WeakMap();
function Jr(e, t, n = !1) {
  const o = n ? Ea : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const i = e.props, r = {}, l = [];
  let c = !1;
  if (!F(e)) {
    const f = (u) => {
      c = !0;
      const [g, b] = Jr(u, t, !0);
      se(r, g), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c)
    return W(e) && o.set(e, Zt), Zt;
  if (k(i))
    for (let f = 0; f < i.length; f++) {
      process.env.NODE_ENV !== "production" && !re(i[f]) && w("props must be strings when using array syntax.", i[f]);
      const u = ce(i[f]);
      vi(u) && (r[u] = X);
    }
  else if (i) {
    process.env.NODE_ENV !== "production" && !W(i) && w("invalid props options", i);
    for (const f in i) {
      const u = ce(f);
      if (vi(u)) {
        const g = i[f], b = r[u] = k(g) || F(g) ? { type: g } : se({}, g), D = b.type;
        let O = !1, A = !0;
        if (k(D))
          for (let $ = 0; $ < D.length; ++$) {
            const P = D[$], V = F(P) && P.name;
            if (V === "Boolean") {
              O = !0;
              break;
            } else V === "String" && (A = !1);
          }
        else
          O = F(D) && D.name === "Boolean";
        b[
          0
          /* shouldCast */
        ] = O, b[
          1
          /* shouldCastTrue */
        ] = A, (O || U(b, "default")) && l.push(u);
      }
    }
  }
  const d = [r, l];
  return W(e) && o.set(e, d), d;
}
function vi(e) {
  return e[0] !== "$" && !vn(e) ? !0 : (process.env.NODE_ENV !== "production" && w(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Na(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Zr(e, t, n) {
  const o = /* @__PURE__ */ L(t), s = n.propsOptions[0], i = Object.keys(e).map((r) => ce(r));
  for (const r in s) {
    let l = s[r];
    l != null && wa(
      r,
      o[r],
      l,
      process.env.NODE_ENV !== "production" ? /* @__PURE__ */ rt(o) : o,
      !i.includes(r)
    );
  }
}
function wa(e, t, n, o, s) {
  const { type: i, required: r, validator: l, skipCheck: c } = n;
  if (r && s) {
    w('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (i != null && i !== !0 && !c) {
      let d = !1;
      const f = k(i) ? i : [i], u = [];
      for (let g = 0; g < f.length && !d; g++) {
        const { valid: b, expectedType: D } = xa(t, f[g]);
        u.push(D || ""), d = b;
      }
      if (!d) {
        w(Oa(e, t, u));
        return;
      }
    }
    l && !l(t, o) && w('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Sa = /* @__PURE__ */ Et(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function xa(e, t) {
  let n;
  const o = Na(t);
  if (o === "null")
    n = e === null;
  else if (Sa(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else o === "Object" ? n = W(e) : o === "Array" ? n = k(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Oa(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(zt).join(" | ")}`;
  const s = n[0], i = ys(t), r = _i(t, s), l = _i(t, i);
  return n.length === 1 && bi(s) && !Ca(s, i) && (o += ` with value ${r}`), o += `, got ${i} `, bi(i) && (o += `with value ${l}.`), o;
}
function _i(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function bi(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Ca(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ls = (e) => e === "_" || e === "_ctx" || e === "$stable", $s = (e) => k(e) ? e.map(Be) : [Be(e)], Ta = (e, t, n) => {
  if (t._n)
    return t;
  const o = Cr((...s) => (process.env.NODE_ENV !== "production" && ue && !(n === null && Ee) && !(n && n.root !== ue.root) && w(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), $s(t(...s))), n);
  return o._c = !1, o;
}, Xr = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (Ls(s)) continue;
    const i = e[s];
    if (F(i))
      t[s] = Ta(s, i, o);
    else if (i != null) {
      process.env.NODE_ENV !== "production" && w(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const r = $s(i);
      t[s] = () => r;
    }
  }
}, Qr = (e, t) => {
  process.env.NODE_ENV !== "production" && !In(e.vnode) && w(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = $s(t);
  e.slots.default = () => n;
}, us = (e, t, n) => {
  for (const o in t)
    (n || !Ls(o)) && (e[o] = t[o]);
}, Da = (e, t, n) => {
  const o = e.slots = qr();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (us(o, t, n), n && Qn(o, "_", s, !0)) : Xr(t, o);
  } else t && Qr(e, t);
}, Va = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let i = !0, r = X;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && ke ? (us(s, t, n), it(e, "set", "$slots")) : n && l === 1 ? i = !1 : us(s, t, n) : (i = !t.$stable, Xr(t, s)), r = t;
  } else t && (Qr(e, t), r = { default: 1 });
  if (i)
    for (const l in s)
      !Ls(l) && r[l] == null && delete s[l];
};
let pn, gt;
function Gt(e, t) {
  e.appContext.config.performance && ao() && gt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Vc(e, t, ao() ? gt.now() : Date.now());
}
function Yt(e, t) {
  if (e.appContext.config.performance && ao()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", s = `<${jn(e, e.type)}> ${t}`;
    gt.mark(o), gt.measure(s, n, o), gt.clearMeasures(s), gt.clearMarks(n), gt.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && kc(e, t, ao() ? gt.now() : Date.now());
}
function ao() {
  return pn !== void 0 || (typeof window < "u" && window.performance ? (pn = !0, gt = window.performance) : pn = !1), pn;
}
function ka() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Te = Ma;
function Aa(e) {
  return Pa(e);
}
function Pa(e, t) {
  ka();
  const n = Rn();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && As(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: c,
    setText: d,
    setElementText: f,
    parentNode: u,
    nextSibling: g,
    setScopeId: b = ge,
    insertStaticContent: D
  } = e, O = (a, p, m, v = null, h = null, _ = null, S = void 0, N = null, E = process.env.NODE_ENV !== "production" && ke ? !1 : !!p.dynamicChildren) => {
    if (a === p)
      return;
    a && !Ft(a, p) && (v = Kt(a), Ye(a, h, _, !0), a = null), p.patchFlag === -2 && (E = !1, p.dynamicChildren = null);
    const { type: y, ref: M, shapeFlag: C } = p;
    switch (y) {
      case Ln:
        A(a, p, m, v);
        break;
      case pe:
        $(a, p, m, v);
        break;
      case Jn:
        a == null ? P(p, m, v, S) : process.env.NODE_ENV !== "production" && V(a, p, m, S);
        break;
      case Ve:
        ie(
          a,
          p,
          m,
          v,
          h,
          _,
          S,
          N,
          E
        );
        break;
      default:
        C & 1 ? K(
          a,
          p,
          m,
          v,
          h,
          _,
          S,
          N,
          E
        ) : C & 6 ? ve(
          a,
          p,
          m,
          v,
          h,
          _,
          S,
          N,
          E
        ) : C & 64 || C & 128 ? y.process(
          a,
          p,
          m,
          v,
          h,
          _,
          S,
          N,
          E,
          Vt
        ) : process.env.NODE_ENV !== "production" && w("Invalid VNode type:", y, `(${typeof y})`);
    }
    M != null && h ? yn(M, a && a.ref, _, p || a, !p) : M == null && a && a.ref != null && yn(a.ref, null, _, a, !0);
  }, A = (a, p, m, v) => {
    if (a == null)
      o(
        p.el = l(p.children),
        m,
        v
      );
    else {
      const h = p.el = a.el;
      p.children !== a.children && d(h, p.children);
    }
  }, $ = (a, p, m, v) => {
    a == null ? o(
      p.el = c(p.children || ""),
      m,
      v
    ) : p.el = a.el;
  }, P = (a, p, m, v) => {
    [a.el, a.anchor] = D(
      a.children,
      p,
      m,
      v,
      a.el,
      a.anchor
    );
  }, V = (a, p, m, v) => {
    if (p.children !== a.children) {
      const h = g(a.anchor);
      T(a), [p.el, p.anchor] = D(
        p.children,
        m,
        h,
        v
      );
    } else
      p.el = a.el, p.anchor = a.anchor;
  }, z = ({ el: a, anchor: p }, m, v) => {
    let h;
    for (; a && a !== p; )
      h = g(a), o(a, m, v), a = h;
    o(p, m, v);
  }, T = ({ el: a, anchor: p }) => {
    let m;
    for (; a && a !== p; )
      m = g(a), s(a), a = m;
    s(p);
  }, K = (a, p, m, v, h, _, S, N, E) => {
    if (p.type === "svg" ? S = "svg" : p.type === "math" && (S = "mathml"), a == null)
      ae(
        p,
        m,
        v,
        h,
        _,
        S,
        N,
        E
      );
    else {
      const y = a.el && a.el._isVueCE ? a.el : null;
      try {
        y && y._beginPatch(), G(
          a,
          p,
          h,
          _,
          S,
          N,
          E
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, ae = (a, p, m, v, h, _, S, N) => {
    let E, y;
    const { props: M, shapeFlag: C, transition: H, dirs: I } = a;
    if (E = a.el = r(
      a.type,
      _,
      M && M.is,
      M
    ), C & 8 ? f(E, a.children) : C & 16 && R(
      a.children,
      E,
      null,
      v,
      h,
      Ko(a, _),
      S,
      N
    ), I && kt(a, null, v, "created"), q(E, a, a.scopeId, S, v), M) {
      for (const J in M)
        J !== "value" && !vn(J) && i(E, J, null, M[J], _, v);
      "value" in M && i(E, "value", null, M.value, _), (y = M.onVnodeBeforeMount) && Qe(y, v, a);
    }
    process.env.NODE_ENV !== "production" && (Qn(E, "__vnode", a, !0), Qn(E, "__vueParentComponent", v, !0)), I && kt(a, null, v, "beforeMount");
    const Y = Ha(h, H);
    if (Y && H.beforeEnter(E), o(E, p, m), (y = M && M.onVnodeMounted) || Y || I) {
      const J = process.env.NODE_ENV !== "production" && ke;
      Te(() => {
        let Q;
        process.env.NODE_ENV !== "production" && (Q = oi(J));
        try {
          y && Qe(y, v, a), Y && H.enter(E), I && kt(a, null, v, "mounted");
        } finally {
          process.env.NODE_ENV !== "production" && oi(Q);
        }
      }, h);
    }
  }, q = (a, p, m, v, h) => {
    if (m && b(a, m), v)
      for (let _ = 0; _ < v.length; _++)
        b(a, v[_]);
    if (h) {
      let _ = h.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = Is(_.children) || _), p === _ || nl(_.type) && (_.ssContent === p || _.ssFallback === p)) {
        const S = h.vnode;
        q(
          a,
          S,
          S.scopeId,
          S.slotScopeIds,
          h.parent
        );
      }
    }
  }, R = (a, p, m, v, h, _, S, N, E = 0) => {
    for (let y = E; y < a.length; y++) {
      const M = a[y] = N ? mt(a[y]) : Be(a[y]);
      O(
        null,
        M,
        p,
        m,
        v,
        h,
        _,
        S,
        N
      );
    }
  }, G = (a, p, m, v, h, _, S) => {
    const N = p.el = a.el;
    process.env.NODE_ENV !== "production" && (N.__vnode = p);
    let { patchFlag: E, dynamicChildren: y, dirs: M } = p;
    E |= a.patchFlag & 16;
    const C = a.props || X, H = p.props || X;
    let I;
    if (m && At(m, !1), (I = H.onVnodeBeforeUpdate) && Qe(I, m, p, a), M && kt(p, a, m, "beforeUpdate"), m && At(m, !0), process.env.NODE_ENV !== "production" && ke && (E = 0, S = !1, y = null), (C.innerHTML && H.innerHTML == null || C.textContent && H.textContent == null) && f(N, ""), y ? (te(
      a.dynamicChildren,
      y,
      N,
      m,
      v,
      Ko(p, h),
      _
    ), process.env.NODE_ENV !== "production" && Yn(a, p)) : S || we(
      a,
      p,
      N,
      null,
      m,
      v,
      Ko(p, h),
      _,
      !1
    ), E > 0) {
      if (E & 16)
        x(N, C, H, m, h);
      else if (E & 2 && C.class !== H.class && i(N, "class", null, H.class, h), E & 4 && i(N, "style", C.style, H.style, h), E & 8) {
        const Y = p.dynamicProps;
        for (let J = 0; J < Y.length; J++) {
          const Q = Y[J], fe = C[Q], be = H[Q];
          (be !== fe || Q === "value") && i(N, Q, fe, be, h, m);
        }
      }
      E & 1 && a.children !== p.children && f(N, p.children);
    } else !S && y == null && x(N, C, H, m, h);
    ((I = H.onVnodeUpdated) || M) && Te(() => {
      I && Qe(I, m, p, a), M && kt(p, a, m, "updated");
    }, v);
  }, te = (a, p, m, v, h, _, S) => {
    for (let N = 0; N < p.length; N++) {
      const E = a[N], y = p[N], M = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === Ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ft(E, y) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 198) ? u(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      O(
        E,
        y,
        M,
        null,
        v,
        h,
        _,
        S,
        !0
      );
    }
  }, x = (a, p, m, v, h) => {
    if (p !== m) {
      if (p !== X)
        for (const _ in p)
          !vn(_) && !(_ in m) && i(
            a,
            _,
            p[_],
            null,
            h,
            v
          );
      for (const _ in m) {
        if (vn(_)) continue;
        const S = m[_], N = p[_];
        S !== N && _ !== "value" && i(a, _, N, S, h, v);
      }
      "value" in m && i(a, "value", p.value, m.value, h);
    }
  }, ie = (a, p, m, v, h, _, S, N, E) => {
    const y = p.el = a ? a.el : l(""), M = p.anchor = a ? a.anchor : l("");
    let { patchFlag: C, dynamicChildren: H, slotScopeIds: I } = p;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (ke || C & 2048) && (C = 0, E = !1, H = null), I && (N = N ? N.concat(I) : I), a == null ? (o(y, m, v), o(M, m, v), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      m,
      M,
      h,
      _,
      S,
      N,
      E
    )) : C > 0 && C & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === H.length ? (te(
      a.dynamicChildren,
      H,
      m,
      h,
      _,
      S,
      N
    ), process.env.NODE_ENV !== "production" ? Yn(a, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || h && p === h.subTree) && Yn(
        a,
        p,
        !0
        /* shallow */
      )
    )) : we(
      a,
      p,
      m,
      M,
      h,
      _,
      S,
      N,
      E
    );
  }, ve = (a, p, m, v, h, _, S, N, E) => {
    p.slotScopeIds = N, a == null ? p.shapeFlag & 512 ? h.ctx.activate(
      p,
      m,
      v,
      S,
      E
    ) : _e(
      p,
      m,
      v,
      h,
      _,
      S,
      E
    ) : le(a, p, E);
  }, _e = (a, p, m, v, h, _, S) => {
    const N = a.component = za(
      a,
      v,
      h
    );
    if (process.env.NODE_ENV !== "production" && N.type.__hmrId && Ec(N), process.env.NODE_ENV !== "production" && (Kn(a), Gt(N, "mount")), In(a) && (N.ctx.renderer = Vt), process.env.NODE_ENV !== "production" && Gt(N, "init"), Wa(N, !1, S), process.env.NODE_ENV !== "production" && Yt(N, "init"), process.env.NODE_ENV !== "production" && ke && (a.el = null), N.asyncDep) {
      if (h && h.registerDep(N, B, S), !a.el) {
        const E = N.subTree = ne(pe);
        $(null, E, p, m), a.placeholder = E.el;
      }
    } else
      B(
        N,
        a,
        p,
        m,
        h,
        _,
        S
      );
    process.env.NODE_ENV !== "production" && (qn(), Yt(N, "mount"));
  }, le = (a, p, m) => {
    const v = p.component = a.component;
    if (ma(a, p, m))
      if (v.asyncDep && !v.asyncResolved) {
        process.env.NODE_ENV !== "production" && Kn(p), j(v, p, m), process.env.NODE_ENV !== "production" && qn();
        return;
      } else
        v.next = p, v.update();
    else
      p.el = a.el, v.vnode = p;
  }, B = (a, p, m, v, h, _, S) => {
    const N = () => {
      if (a.isMounted) {
        let { next: C, bu: H, u: I, parent: Y, vnode: J } = a;
        {
          const Ze = el(a);
          if (Ze) {
            C && (C.el = J.el, j(a, C, S)), Ze.asyncDep.then(() => {
              Te(() => {
                a.isUnmounted || y();
              }, h);
            });
            return;
          }
        }
        let Q = C, fe;
        process.env.NODE_ENV !== "production" && Kn(C || a.vnode), At(a, !1), C ? (C.el = J.el, j(a, C, S)) : C = J, H && an(H), (fe = C.props && C.props.onVnodeBeforeUpdate) && Qe(fe, Y, C, J), At(a, !0), process.env.NODE_ENV !== "production" && Gt(a, "render");
        const be = hi(a);
        process.env.NODE_ENV !== "production" && Yt(a, "render");
        const Je = a.subTree;
        a.subTree = be, process.env.NODE_ENV !== "production" && Gt(a, "patch"), O(
          Je,
          be,
          // parent may have changed if it's in a teleport
          u(Je.el),
          // anchor may have changed if it's in a fragment
          Kt(Je),
          a,
          h,
          _
        ), process.env.NODE_ENV !== "production" && Yt(a, "patch"), C.el = be.el, Q === null && va(a, be.el), I && Te(I, h), (fe = C.props && C.props.onVnodeUpdated) && Te(
          () => Qe(fe, Y, C, J),
          h
        ), process.env.NODE_ENV !== "production" && Sr(a), process.env.NODE_ENV !== "production" && qn();
      } else {
        let C;
        const { el: H, props: I } = p, { bm: Y, m: J, parent: Q, root: fe, type: be } = a, Je = En(p);
        At(a, !1), Y && an(Y), !Je && (C = I && I.onVnodeBeforeMount) && Qe(C, Q, p), At(a, !0);
        {
          fe.ce && fe.ce._hasShadowRoot() && fe.ce._injectChildStyle(
            be,
            a.parent ? a.parent.type : void 0
          ), process.env.NODE_ENV !== "production" && Gt(a, "render");
          const Ze = a.subTree = hi(a);
          process.env.NODE_ENV !== "production" && Yt(a, "render"), process.env.NODE_ENV !== "production" && Gt(a, "patch"), O(
            null,
            Ze,
            m,
            v,
            a,
            h,
            _
          ), process.env.NODE_ENV !== "production" && Yt(a, "patch"), p.el = Ze.el;
        }
        if (J && Te(J, h), !Je && (C = I && I.onVnodeMounted)) {
          const Ze = p;
          Te(
            () => Qe(C, Q, Ze),
            h
          );
        }
        (p.shapeFlag & 256 || Q && En(Q.vnode) && Q.vnode.shapeFlag & 256) && a.a && Te(a.a, h), a.isMounted = !0, process.env.NODE_ENV !== "production" && Cc(a), p = m = v = null;
      }
    };
    a.scope.on();
    const E = a.effect = new Qi(N);
    a.scope.off();
    const y = a.update = E.run.bind(E), M = a.job = E.runIfDirty.bind(E);
    M.i = a, M.id = a.uid, E.scheduler = () => So(M), At(a, !0), process.env.NODE_ENV !== "production" && (E.onTrack = a.rtc ? (C) => an(a.rtc, C) : void 0, E.onTrigger = a.rtg ? (C) => an(a.rtg, C) : void 0), y();
  }, j = (a, p, m) => {
    p.component = a;
    const v = a.vnode.props;
    a.vnode = p, a.next = null, ya(a, p.props, v, m), Va(a, p.children, m), Ke(), ni(a), qe();
  }, we = (a, p, m, v, h, _, S, N, E = !1) => {
    const y = a && a.children, M = a ? a.shapeFlag : 0, C = p.children, { patchFlag: H, shapeFlag: I } = p;
    if (H > 0) {
      if (H & 128) {
        Dt(
          y,
          C,
          m,
          v,
          h,
          _,
          S,
          N,
          E
        );
        return;
      } else if (H & 256) {
        Tt(
          y,
          C,
          m,
          v,
          h,
          _,
          S,
          N,
          E
        );
        return;
      }
    }
    I & 8 ? (M & 16 && wt(y, h, _), C !== y && f(m, C)) : M & 16 ? I & 16 ? Dt(
      y,
      C,
      m,
      v,
      h,
      _,
      S,
      N,
      E
    ) : wt(y, h, _, !0) : (M & 8 && f(m, ""), I & 16 && R(
      C,
      m,
      v,
      h,
      _,
      S,
      N,
      E
    ));
  }, Tt = (a, p, m, v, h, _, S, N, E) => {
    a = a || Zt, p = p || Zt;
    const y = a.length, M = p.length, C = Math.min(y, M);
    let H;
    for (H = 0; H < C; H++) {
      const I = p[H] = E ? mt(p[H]) : Be(p[H]);
      O(
        a[H],
        I,
        m,
        null,
        h,
        _,
        S,
        N,
        E
      );
    }
    y > M ? wt(
      a,
      h,
      _,
      !0,
      !1,
      C
    ) : R(
      p,
      m,
      v,
      h,
      _,
      S,
      N,
      E,
      C
    );
  }, Dt = (a, p, m, v, h, _, S, N, E) => {
    let y = 0;
    const M = p.length;
    let C = a.length - 1, H = M - 1;
    for (; y <= C && y <= H; ) {
      const I = a[y], Y = p[y] = E ? mt(p[y]) : Be(p[y]);
      if (Ft(I, Y))
        O(
          I,
          Y,
          m,
          null,
          h,
          _,
          S,
          N,
          E
        );
      else
        break;
      y++;
    }
    for (; y <= C && y <= H; ) {
      const I = a[C], Y = p[H] = E ? mt(p[H]) : Be(p[H]);
      if (Ft(I, Y))
        O(
          I,
          Y,
          m,
          null,
          h,
          _,
          S,
          N,
          E
        );
      else
        break;
      C--, H--;
    }
    if (y > C) {
      if (y <= H) {
        const I = H + 1, Y = I < M ? p[I].el : v;
        for (; y <= H; )
          O(
            null,
            p[y] = E ? mt(p[y]) : Be(p[y]),
            m,
            Y,
            h,
            _,
            S,
            N,
            E
          ), y++;
      }
    } else if (y > H)
      for (; y <= C; )
        Ye(a[y], h, _, !0), y++;
    else {
      const I = y, Y = y, J = /* @__PURE__ */ new Map();
      for (y = Y; y <= H; y++) {
        const Se = p[y] = E ? mt(p[y]) : Be(p[y]);
        Se.key != null && (process.env.NODE_ENV !== "production" && J.has(Se.key) && w(
          "Duplicate keys found during update:",
          JSON.stringify(Se.key),
          "Make sure keys are unique."
        ), J.set(Se.key, y));
      }
      let Q, fe = 0;
      const be = H - Y + 1;
      let Je = !1, Ze = 0;
      const cn = new Array(be);
      for (y = 0; y < be; y++) cn[y] = 0;
      for (y = I; y <= C; y++) {
        const Se = a[y];
        if (fe >= be) {
          Ye(Se, h, _, !0);
          continue;
        }
        let Xe;
        if (Se.key != null)
          Xe = J.get(Se.key);
        else
          for (Q = Y; Q <= H; Q++)
            if (cn[Q - Y] === 0 && Ft(Se, p[Q])) {
              Xe = Q;
              break;
            }
        Xe === void 0 ? Ye(Se, h, _, !0) : (cn[Xe - Y] = y + 1, Xe >= Ze ? Ze = Xe : Je = !0, O(
          Se,
          p[Xe],
          m,
          null,
          h,
          _,
          S,
          N,
          E
        ), fe++);
      }
      const Gs = Je ? Ra(cn) : Zt;
      for (Q = Gs.length - 1, y = be - 1; y >= 0; y--) {
        const Se = Y + y, Xe = p[Se], Ys = p[Se + 1], Js = Se + 1 < M ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ys.el || tl(Ys)
        ) : v;
        cn[y] === 0 ? O(
          null,
          Xe,
          m,
          Js,
          h,
          _,
          S,
          N,
          E
        ) : Je && (Q < 0 || y !== Gs[Q] ? ut(Xe, m, Js, 2) : Q--);
      }
    }
  }, ut = (a, p, m, v, h = null) => {
    const { el: _, type: S, transition: N, children: E, shapeFlag: y } = a;
    if (y & 6) {
      ut(a.component.subTree, p, m, v);
      return;
    }
    if (y & 128) {
      a.suspense.move(p, m, v);
      return;
    }
    if (y & 64) {
      S.move(a, p, m, Vt);
      return;
    }
    if (S === Ve) {
      o(_, p, m);
      for (let C = 0; C < E.length; C++)
        ut(E[C], p, m, v);
      o(a.anchor, p, m);
      return;
    }
    if (S === Jn) {
      z(a, p, m);
      return;
    }
    if (v !== 2 && y & 1 && N)
      if (v === 0)
        N.beforeEnter(_), o(_, p, m), Te(() => N.enter(_), h);
      else {
        const { leave: C, delayLeave: H, afterLeave: I } = N, Y = () => {
          a.ctx.isUnmounted ? s(_) : o(_, p, m);
        }, J = () => {
          _._isLeaving && _[nt](
            !0
            /* cancelled */
          ), C(_, () => {
            Y(), I && I();
          });
        };
        H ? H(_, Y, J) : J();
      }
    else
      o(_, p, m);
  }, Ye = (a, p, m, v = !1, h = !1) => {
    const {
      type: _,
      props: S,
      ref: N,
      children: E,
      dynamicChildren: y,
      shapeFlag: M,
      patchFlag: C,
      dirs: H,
      cacheIndex: I,
      memo: Y
    } = a;
    if (C === -2 && (h = !1), N != null && (Ke(), yn(N, null, m, a, !0), qe()), I != null && (p.renderCache[I] = void 0), M & 256) {
      p.ctx.deactivate(a);
      return;
    }
    const J = M & 1 && H, Q = !En(a);
    let fe;
    if (Q && (fe = S && S.onVnodeBeforeUnmount) && Qe(fe, p, a), M & 6)
      Mo(a.component, m, v);
    else {
      if (M & 128) {
        a.suspense.unmount(m, v);
        return;
      }
      J && kt(a, null, p, "beforeUnmount"), M & 64 ? a.type.remove(
        a,
        p,
        m,
        Vt,
        v
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Ve || C > 0 && C & 64) ? wt(
        y,
        p,
        m,
        !1,
        !0
      ) : (_ === Ve && C & 384 || !h && M & 16) && wt(E, p, m), v && rn(a);
    }
    const be = Y != null && I == null;
    (Q && (fe = S && S.onVnodeUnmounted) || J || be) && Te(() => {
      fe && Qe(fe, p, a), J && kt(a, null, p, "unmounted"), be && (a.el = null);
    }, m);
  }, rn = (a) => {
    const { type: p, el: m, anchor: v, transition: h } = a;
    if (p === Ve) {
      process.env.NODE_ENV !== "production" && a.patchFlag > 0 && a.patchFlag & 2048 && h && !h.persisted ? a.children.forEach((S) => {
        S.type === pe ? s(S.el) : rn(S);
      }) : Ro(m, v);
      return;
    }
    if (p === Jn) {
      T(a);
      return;
    }
    const _ = () => {
      s(m), h && !h.persisted && h.afterLeave && h.afterLeave();
    };
    if (a.shapeFlag & 1 && h && !h.persisted) {
      const { leave: S, delayLeave: N } = h, E = () => S(m, _);
      N ? N(a.el, _, E) : E();
    } else
      _();
  }, Ro = (a, p) => {
    let m;
    for (; a !== p; )
      m = g(a), s(a), a = m;
    s(p);
  }, Mo = (a, p, m) => {
    process.env.NODE_ENV !== "production" && a.type.__hmrId && Nc(a);
    const { bum: v, scope: h, job: _, subTree: S, um: N, m: E, a: y } = a;
    yi(E), yi(y), v && an(v), h.stop(), _ && (_.flags |= 8, Ye(S, a, p, m)), N && Te(N, p), Te(() => {
      a.isUnmounted = !0;
    }, p), process.env.NODE_ENV !== "production" && Dc(a);
  }, wt = (a, p, m, v = !1, h = !1, _ = 0) => {
    for (let S = _; S < a.length; S++)
      Ye(a[S], p, m, v, h);
  }, Kt = (a) => {
    if (a.shapeFlag & 6)
      return Kt(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const p = g(a.anchor || a.el), m = p && p[Mc];
    return m ? g(m) : p;
  };
  let ln = !1;
  const Bn = (a, p, m) => {
    let v;
    a == null ? p._vnode && (Ye(p._vnode, null, null, !0), v = p._vnode.component) : O(
      p._vnode || null,
      a,
      p,
      null,
      null,
      null,
      m
    ), p._vnode = a, ln || (ln = !0, ni(v), Er(), ln = !1);
  }, Vt = {
    p: O,
    um: Ye,
    m: ut,
    r: rn,
    mt: _e,
    mc: R,
    pc: we,
    pbc: te,
    n: Kt,
    o: e
  };
  return {
    render: Bn,
    hydrate: void 0,
    createApp: fa(Bn)
  };
}
function Ko({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function At({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ha(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Yn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (k(o) && k(s))
    for (let i = 0; i < o.length; i++) {
      const r = o[i];
      let l = s[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[i] = mt(s[i]), l.el = r.el), !n && l.patchFlag !== -2 && Yn(r, l)), l.type === Ln && (l.patchFlag === -1 && (l = s[i] = mt(l)), l.el = r.el), l.type === pe && !l.el && (l.el = r.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Ra(e) {
  const t = e.slice(), n = [0];
  let o, s, i, r, l;
  const c = e.length;
  for (o = 0; o < c; o++) {
    const d = e[o];
    if (d !== 0) {
      if (s = n[n.length - 1], e[s] < d) {
        t[o] = s, n.push(o);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        l = i + r >> 1, e[n[l]] < d ? i = l + 1 : r = l;
      d < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
function el(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : el(t);
}
function yi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function tl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? tl(t.subTree) : null;
}
const nl = (e) => e.__isSuspense;
function Ma(e, t) {
  t && t.pendingBranch ? k(e) ? t.effects.push(...e) : t.effects.push(e) : yr(e);
}
const Ve = /* @__PURE__ */ Symbol.for("v-fgt"), Ln = /* @__PURE__ */ Symbol.for("v-txt"), pe = /* @__PURE__ */ Symbol.for("v-cmt"), Jn = /* @__PURE__ */ Symbol.for("v-stc"), Nn = [];
let Me = null;
function oe(e = !1) {
  Nn.push(Me = e ? null : []);
}
function Fa() {
  Nn.pop(), Me = Nn[Nn.length - 1] || null;
}
let Vn = 1;
function fo(e, t = !1) {
  Vn += e, e < 0 && Me && t && (Me.hasOnce = !0);
}
function ol(e) {
  return e.dynamicChildren = Vn > 0 ? Me || Zt : null, Fa(), Vn > 0 && Me && Me.push(e), e;
}
function Ne(e, t, n, o, s, i) {
  return ol(
    ee(
      e,
      t,
      n,
      o,
      s,
      i,
      !0
    )
  );
}
function je(e, t, n, o, s) {
  return ol(
    ne(
      e,
      t,
      n,
      o,
      s,
      !0
    )
  );
}
function tn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ft(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Gn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Ia = (...e) => il(
  ...e
), sl = ({ key: e }) => e ?? null, Zn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || /* @__PURE__ */ de(e) || F(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function ee(e, t = null, n = null, o = 0, s = null, i = e === Ve ? 0 : 1, r = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && sl(t),
    ref: t && Zn(t),
    scopeId: Or,
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
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ee
  };
  return l ? (js(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= re(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && w("VNode created with invalid key (NaN). VNode type:", c.type), Vn > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  Me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Me.push(c), c;
}
const ne = process.env.NODE_ENV !== "production" ? Ia : il;
function il(e, t = null, n = null, o = 0, s = null, i = !1) {
  if ((!e || e === Xc) && (process.env.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = pe), tn(e)) {
    const l = ft(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && js(l, n), Vn > 0 && !i && Me && (l.shapeFlag & 6 ? Me[Me.indexOf(e)] = l : Me.push(l)), l.patchFlag = -2, l;
  }
  if (al(e) && (e = e.__vccOpts), t) {
    t = La(t);
    let { class: l, style: c } = t;
    l && !re(l) && (t.class = nn(l)), W(c) && (/* @__PURE__ */ eo(c) && !k(c) && (c = se({}, c)), t.style = Ns(c));
  }
  const r = re(e) ? 1 : nl(e) ? 128 : kr(e) ? 64 : W(e) ? 4 : F(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && /* @__PURE__ */ eo(e) && (e = /* @__PURE__ */ L(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ee(
    e,
    t,
    n,
    o,
    s,
    r,
    i,
    !0
  );
}
function La(e) {
  return e ? /* @__PURE__ */ eo(e) || Gr(e) ? se({}, e) : e : null;
}
function ft(e, t, n = !1, o = !1) {
  const { props: s, ref: i, patchFlag: r, children: l, transition: c } = e, d = t ? $a(s || {}, t) : s, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && sl(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? k(i) ? i.concat(Zn(t)) : [i, Zn(t)] : Zn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && k(l) ? l.map(rl) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ve ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && ft(e.ssContent),
    ssFallback: e.ssFallback && ft(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && o && Dn(
    f,
    c.clone(f)
  ), f;
}
function rl(e) {
  const t = ft(e);
  return k(e.children) && (t.children = e.children.map(rl)), t;
}
function wn(e = " ", t = 0) {
  return ne(Ln, null, e, t);
}
function me(e = "", t = !1) {
  return t ? (oe(), je(pe, null, e)) : ne(pe, null, e);
}
function Be(e) {
  return e == null || typeof e == "boolean" ? ne(pe) : k(e) ? ne(
    Ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : tn(e) ? mt(e) : ne(Ln, null, String(e));
}
function mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ft(e);
}
function js(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (k(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), js(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Gr(t) ? t._ctx = Ee : s === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else F(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [wn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function $a(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = nn([t.class, o.class]));
      else if (s === "style")
        t.style = Ns([t.style, o.style]);
      else if (Pn(s)) {
        const i = t[s], r = o[s];
        r && i !== r && !(k(i) && i.includes(r)) ? t[s] = i ? [].concat(i, r) : r : r == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Sn(s) && (t[s] = r);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Qe(e, t, n, o = null) {
  Ge(e, t, 7, [
    n,
    o
  ]);
}
const ja = Br();
let Ba = 0;
function za(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || ja, i = {
    uid: Ba++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Il(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Jr(o, s),
    emitsOptions: zr(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
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
  return process.env.NODE_ENV !== "production" ? i.ctx = ea(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = pa.bind(null, i), e.ce && e.ce(i), i;
}
let ue = null;
const To = () => ue || Ee;
let uo, ps;
{
  const e = Rn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (i) => {
      s.length > 1 ? s.forEach((r) => r(i)) : s[0](i);
    };
  };
  uo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ue = n
  ), ps = t(
    "__VUE_SSR_SETTERS__",
    (n) => kn = n
  );
}
const $n = (e) => {
  const t = ue;
  return uo(e), e.scope.on(), () => {
    e.scope.off(), uo(t);
  };
}, Ei = () => {
  ue && ue.scope.off(), uo(null);
}, Ua = /* @__PURE__ */ Et("slot,component");
function ds(e, { isNativeTag: t }) {
  (Ua(e) || t(e)) && w(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function ll(e) {
  return e.vnode.shapeFlag & 4;
}
let kn = !1;
function Wa(e, t = !1, n = !1) {
  t && ps(t);
  const { props: o, children: s } = e.vnode, i = ll(e);
  _a(e, o, i, t), Da(e, s, n || t);
  const r = i ? Ka(e, t) : void 0;
  return t && ps(!1), r;
}
function Ka(e, t) {
  const n = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (n.name && ds(n.name, e.appContext.config), n.components) {
      const s = Object.keys(n.components);
      for (let i = 0; i < s.length; i++)
        ds(s[i], e.appContext.config);
    }
    if (n.directives) {
      const s = Object.keys(n.directives);
      for (let i = 0; i < s.length; i++)
        Tr(s[i]);
    }
    n.compilerOptions && qa() && w(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Lr), process.env.NODE_ENV !== "production" && ta(e);
  const { setup: o } = n;
  if (o) {
    Ke();
    const s = e.setupContext = o.length > 1 ? Ya(e) : null, i = $n(e), r = on(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? /* @__PURE__ */ rt(e.props) : e.props,
        s
      ]
    ), l = bs(r);
    if (qe(), i(), (l || e.sp) && !En(e) && Fr(e), l) {
      if (r.then(Ei, Ei), t)
        return r.then((c) => {
          Ni(e, c, t);
        }).catch((c) => {
          Mn(c, e, 0);
        });
      if (e.asyncDep = r, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = jn(e, n);
        w(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Ni(e, r, t);
  } else
    cl(e, t);
}
function Ni(e, t, n) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) ? (process.env.NODE_ENV !== "production" && tn(t) && w(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = mr(t), process.env.NODE_ENV !== "production" && na(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && w(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), cl(e, n);
}
const qa = () => !0;
function cl(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || ge);
  {
    const s = $n(e);
    Ke();
    try {
      sa(e);
    } finally {
      qe(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === ge && !t && (o.template ? w(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : w("Component is missing template or render function: ", o));
}
const wi = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return co(), he(e, "get", ""), e[t];
  },
  set() {
    return w("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return w("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return he(e, "get", ""), e[t];
  }
};
function Ga(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return he(e, "get", "$slots"), t[n];
    }
  });
}
function Ya(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && w("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (k(n) ? o = "array" : /* @__PURE__ */ de(n) && (o = "ref")), o !== "object" && w(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, wi));
      },
      get slots() {
        return o || (o = Ga(e));
      },
      get emit() {
        return (s, ...i) => e.emit(s, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, wi),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Do(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(mr(ic(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Bt)
        return Bt[n](e);
    },
    has(t, n) {
      return n in t || n in Bt;
    }
  })) : e.proxy;
}
const Ja = /(?:^|[-_])\w/g, Za = (e) => e.replace(Ja, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Bs(e, t = !0) {
  return F(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function jn(e, t, n = !1) {
  let o = Bs(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e) {
    const s = (i) => {
      for (const r in i)
        if (i[r] === t)
          return r;
    };
    o = s(e.components) || e.parent && s(
      e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? Za(o) : n ? "App" : "Anonymous";
}
function al(e) {
  return F(e) && "__vccOpts" in e;
}
const Oe = (e, t) => {
  const n = /* @__PURE__ */ fc(e, t, kn);
  if (process.env.NODE_ENV !== "production") {
    const o = To();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Xa(e, t, n) {
  try {
    fo(-1);
    const o = arguments.length;
    return o === 2 ? W(t) && !k(t) ? tn(t) ? ne(e, null, [t]) : ne(e, t) : ne(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && tn(n) && (n = [n]), ne(e, t, n));
  } finally {
    fo(1);
  }
}
function Qa() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!W(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (/* @__PURE__ */ de(u)) {
        Ke();
        const g = u.value;
        return qe(), [
          "div",
          {},
          ["span", e, f(u)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (/* @__PURE__ */ $t(u))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ Ae(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${/* @__PURE__ */ at(u) ? " (readonly)" : ""}`
          ];
        if (/* @__PURE__ */ at(u))
          return [
            "div",
            {},
            ["span", e, /* @__PURE__ */ Ae(u) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(u),
            ">"
          ];
      }
      return null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...i(u.$)
        ];
    }
  };
  function i(u) {
    const g = [];
    u.type.props && u.props && g.push(r("props", /* @__PURE__ */ L(u.props))), u.setupState !== X && g.push(r("setup", u.setupState)), u.data !== X && g.push(r("data", /* @__PURE__ */ L(u.data)));
    const b = c(u, "computed");
    b && g.push(r("computed", b));
    const D = c(u, "inject");
    return D && g.push(r("injected", D)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), g;
  }
  function r(u, g) {
    return g = se({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((b) => [
          "div",
          {},
          ["span", o, b + ": "],
          l(g[b], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, g = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : W(u) ? ["object", { object: g ? /* @__PURE__ */ L(u) : u }] : ["span", n, String(u)];
  }
  function c(u, g) {
    const b = u.type;
    if (F(b))
      return;
    const D = {};
    for (const O in u.ctx)
      d(b, O, g) && (D[O] = u.ctx[O]);
    return D;
  }
  function d(u, g, b) {
    const D = u[b];
    if (k(D) && D.includes(g) || W(D) && g in D || u.extends && d(u.extends, g, b) || u.mixins && u.mixins.some((O) => d(O, g, b)))
      return !0;
  }
  function f(u) {
    return /* @__PURE__ */ Ae(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Si = "3.5.31", Ie = process.env.NODE_ENV !== "production" ? w : ge;
process.env.NODE_ENV;
process.env.NODE_ENV;
let hs;
const xi = typeof window < "u" && window.trustedTypes;
if (xi)
  try {
    hs = /* @__PURE__ */ xi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Ie(`Error creating trusted types policy: ${e}`);
  }
const fl = hs ? (e) => hs.createHTML(e) : (e) => e, ef = "http://www.w3.org/2000/svg", tf = "http://www.w3.org/1998/Math/MathML", ht = typeof document < "u" ? document : null, Oi = ht && /* @__PURE__ */ ht.createElement("template"), nf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? ht.createElementNS(ef, e) : t === "mathml" ? ht.createElementNS(tf, e) : n ? ht.createElement(e, { is: n }) : ht.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => ht.createTextNode(e),
  createComment: (e) => ht.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ht.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (s && (s === i || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
        ;
    else {
      Oi.innerHTML = fl(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Oi.content;
      if (o === "svg" || o === "mathml") {
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
}, St = "transition", dn = "animation", An = /* @__PURE__ */ Symbol("_vtc"), ul = {
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
}, of = /* @__PURE__ */ se(
  {},
  Ar,
  ul
), sf = (e) => (e.displayName = "Transition", e.props = of, e), rf = /* @__PURE__ */ sf(
  (e, { slots: t }) => Xa(Lc, lf(e), t)
), Pt = (e, t = []) => {
  k(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ci = (e) => e ? k(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function lf(e) {
  const t = {};
  for (const x in e)
    x in ul || (t[x] = e[x]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: s,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: r = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = i,
    appearActiveClass: d = r,
    appearToClass: f = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: g = `${n}-leave-active`,
    leaveToClass: b = `${n}-leave-to`
  } = e, D = cf(s), O = D && D[0], A = D && D[1], {
    onBeforeEnter: $,
    onEnter: P,
    onEnterCancelled: V,
    onLeave: z,
    onLeaveCancelled: T,
    onBeforeAppear: K = $,
    onAppear: ae = P,
    onAppearCancelled: q = V
  } = t, R = (x, ie, ve, _e) => {
    x._enterCancelled = _e, Ht(x, ie ? f : l), Ht(x, ie ? d : r), ve && ve();
  }, G = (x, ie) => {
    x._isLeaving = !1, Ht(x, u), Ht(x, b), Ht(x, g), ie && ie();
  }, te = (x) => (ie, ve) => {
    const _e = x ? ae : P, le = () => R(ie, x, ve);
    Pt(_e, [ie, le]), Ti(() => {
      Ht(ie, x ? c : i), dt(ie, x ? f : l), Ci(_e) || Di(ie, o, O, le);
    });
  };
  return se(t, {
    onBeforeEnter(x) {
      Pt($, [x]), dt(x, i), dt(x, r);
    },
    onBeforeAppear(x) {
      Pt(K, [x]), dt(x, c), dt(x, d);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(x, ie) {
      x._isLeaving = !0;
      const ve = () => G(x, ie);
      dt(x, u), x._enterCancelled ? (dt(x, g), Ai(x)) : (Ai(x), dt(x, g)), Ti(() => {
        x._isLeaving && (Ht(x, u), dt(x, b), Ci(z) || Di(x, o, A, ve));
      }), Pt(z, [x, ve]);
    },
    onEnterCancelled(x) {
      R(x, !1, void 0, !0), Pt(V, [x]);
    },
    onAppearCancelled(x) {
      R(x, !0, void 0, !0), Pt(q, [x]);
    },
    onLeaveCancelled(x) {
      G(x), Pt(T, [x]);
    }
  });
}
function cf(e) {
  if (e == null)
    return null;
  if (W(e))
    return [qo(e.enter), qo(e.leave)];
  {
    const t = qo(e);
    return [t, t];
  }
}
function qo(e) {
  const t = Xo(e);
  return process.env.NODE_ENV !== "production" && vc(t, "<transition> explicit duration"), t;
}
function dt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[An] || (e[An] = /* @__PURE__ */ new Set())).add(t);
}
function Ht(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[An];
  n && (n.delete(t), n.size || (e[An] = void 0));
}
function Ti(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let af = 0;
function Di(e, t, n, o) {
  const s = e._endId = ++af, i = () => {
    s === e._endId && o();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: r, timeout: l, propCount: c } = ff(e, t);
  if (!r)
    return o();
  const d = r + "end";
  let f = 0;
  const u = () => {
    e.removeEventListener(d, g), i();
  }, g = (b) => {
    b.target === e && ++f >= c && u();
  };
  setTimeout(() => {
    f < c && u();
  }, l + 1), e.addEventListener(d, g);
}
function ff(e, t) {
  const n = window.getComputedStyle(e), o = (D) => (n[D] || "").split(", "), s = o(`${St}Delay`), i = o(`${St}Duration`), r = Vi(s, i), l = o(`${dn}Delay`), c = o(`${dn}Duration`), d = Vi(l, c);
  let f = null, u = 0, g = 0;
  t === St ? r > 0 && (f = St, u = r, g = i.length) : t === dn ? d > 0 && (f = dn, u = d, g = c.length) : (u = Math.max(r, d), f = u > 0 ? r > d ? St : dn : null, g = f ? f === St ? i.length : c.length : 0);
  const b = f === St && /\b(?:transform|all)(?:,|$)/.test(
    o(`${St}Property`).toString()
  );
  return {
    type: f,
    timeout: u,
    propCount: g,
    hasTransform: b
  };
}
function Vi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => ki(n) + ki(e[o])));
}
function ki(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ai(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function uf(e, t, n) {
  const o = e[An];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const po = /* @__PURE__ */ Symbol("_vod"), pl = /* @__PURE__ */ Symbol("_vsh"), ho = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[po] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : hn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: o }) {
    !t != !n && (o ? t ? (o.beforeEnter(e), hn(e, !0), o.enter(e)) : o.leave(e, () => {
      hn(e, !1);
    }) : hn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    hn(e, t);
  }
};
function hn(e, t) {
  e.style.display = t ? e[po] : "none", e[pl] = !t;
}
const pf = /* @__PURE__ */ Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), df = /(?:^|;)\s*display\s*:/;
function hf(e, t, n) {
  const o = e.style, s = re(n);
  let i = !1;
  if (n && !s) {
    if (t)
      if (re(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && Xn(o, l, "");
        }
      else
        for (const r in t)
          n[r] == null && Xn(o, r, "");
    for (const r in n)
      r === "display" && (i = !0), Xn(o, r, n[r]);
  } else if (s) {
    if (t !== n) {
      const r = o[pf];
      r && (n += ";" + r), o.cssText = n, i = df.test(n);
    }
  } else t && e.removeAttribute("style");
  po in e && (e[po] = i ? o.display : "", e[pl] && (o.display = "none"));
}
const gf = /[^\\];\s*$/, Pi = /\s*!important$/;
function Xn(e, t, n) {
  if (k(n))
    n.forEach((o) => Xn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && gf.test(n) && Ie(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = mf(e, t);
    Pi.test(n) ? e.setProperty(
      He(o),
      n.replace(Pi, ""),
      "important"
    ) : e[o] = n;
  }
}
const Hi = ["Webkit", "Moz", "ms"], Go = {};
function mf(e, t) {
  const n = Go[t];
  if (n)
    return n;
  let o = ce(t);
  if (o !== "filter" && o in e)
    return Go[t] = o;
  o = zt(o);
  for (let s = 0; s < Hi.length; s++) {
    const i = Hi[s] + o;
    if (i in e)
      return Go[t] = i;
  }
  return t;
}
const Ri = "http://www.w3.org/1999/xlink";
function Mi(e, t, n, o, s, i = Ml(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ri, t.slice(6, t.length)) : e.setAttributeNS(Ri, t, n) : n == null || i && !Ji(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ct(n) ? String(n) : n
  );
}
function Fi(e, t, n, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? fl(n) : n);
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
    l === "boolean" ? n = Ji(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !r && Ie(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(s || t);
}
function vf(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function _f(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Ii = /* @__PURE__ */ Symbol("_vei");
function bf(e, t, n, o, s = null) {
  const i = e[Ii] || (e[Ii] = {}), r = i[t];
  if (o && r)
    r.value = process.env.NODE_ENV !== "production" ? $i(o, t) : o;
  else {
    const [l, c] = yf(t);
    if (o) {
      const d = i[t] = wf(
        process.env.NODE_ENV !== "production" ? $i(o, t) : o,
        s
      );
      vf(e, l, d, c);
    } else r && (_f(e, l, r, c), i[t] = void 0);
  }
}
const Li = /(?:Once|Passive|Capture)$/;
function yf(e) {
  let t;
  if (Li.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Li); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : He(e.slice(2)), t];
}
let Yo = 0;
const Ef = /* @__PURE__ */ Promise.resolve(), Nf = () => Yo || (Ef.then(() => Yo = 0), Yo = Date.now());
function wf(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ge(
      Sf(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Nf(), n;
}
function $i(e, t) {
  return F(e) || k(e) ? e : (Ie(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ge);
}
function Sf(e, t) {
  if (k(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const ji = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, xf = (e, t, n, o, s, i) => {
  const r = s === "svg";
  t === "class" ? uf(e, o, r) : t === "style" ? hf(e, n, o) : Pn(t) ? Sn(t) || bf(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Of(e, t, o, r)) ? (Fi(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Mi(e, t, o, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Cf(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !re(o))) ? Fi(e, ce(t), o, i, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Mi(e, t, o, r));
};
function Of(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ji(t) && F(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return ji(t) && re(n) ? !1 : t in e;
}
function Cf(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const o = ce(t);
  return Array.isArray(n) ? n.some((s) => ce(s) === o) : Object.keys(n).some((s) => ce(s) === o);
}
const Bi = {};
// @__NO_SIDE_EFFECTS__
function Tf(e, t, n) {
  let o = /* @__PURE__ */ $c(e, t);
  bo(o) && (o = se({}, o, t));
  class s extends zs {
    constructor(r) {
      super(o, r, n);
    }
  }
  return s.def = o, s;
}
const Df = typeof HTMLElement < "u" ? HTMLElement : class {
};
class zs extends Df {
  constructor(t, n = {}, o = Ui) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && o !== Ui ? this._root = this.shadowRoot : (process.env.NODE_ENV !== "production" && this.shadowRoot && Ie(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow(
      se({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this);
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
    this._connected = !1, Vs(() => {
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
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (o, s = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: r } = o;
      let l;
      if (i && !k(i))
        for (const c in i) {
          const d = i[c];
          (d === Number || d && d.type === Number) && (c in this._props && (this._props[c] = Xo(this._props[c])), (l || (l = /* @__PURE__ */ Object.create(null)))[ce(c)] = !0);
        }
      this._numberProps = l, this._resolveProps(o), this.shadowRoot ? this._applyStyles(r) : process.env.NODE_ENV !== "production" && r && Ie(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((o) => {
      o.configureApp = this._def.configureApp, t(this._def = o, !0);
    }) : t(this._def);
  }
  _mount(t) {
    process.env.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        U(this, o) ? process.env.NODE_ENV !== "production" && Ie(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => gr(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = k(n) ? n : Object.keys(n || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && o.includes(s) && this._setProp(s, this[s]);
    for (const s of o.map(ce))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(i) {
          this._setProp(s, i, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let o = n ? this.getAttribute(t) : Bi;
    const s = ce(t);
    n && this._numberProps && this._numberProps[s] && (o = Xo(o)), this._setProp(s, o, !1, !0);
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
  _setProp(t, n, o = !0, s = !1) {
    if (n !== this._props[t] && (this._dirty = !0, n === Bi ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), s && this._instance && this._update(), o)) {
      const i = this._ob;
      i && (this._processMutations(i.takeRecords()), i.disconnect()), n === !0 ? this.setAttribute(He(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(He(t), n + "") : n || this.removeAttribute(He(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), kf(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ne(this._def, se(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, process.env.NODE_ENV !== "production" && (o.ceReload = (i) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._styleAnchors.delete(this._def), this._applyStyles(i), this._instance = null, this._update();
      });
      const s = (i, r) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            bo(r[0]) ? se({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      o.emit = (i, ...r) => {
        s(i, r), He(i) !== i && s(He(i), r);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n, o) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce, i = this.shadowRoot, r = o ? this._getStyleAnchor(o) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i);
    let l = null;
    for (let c = t.length - 1; c >= 0; c--) {
      const d = document.createElement("style");
      if (s && d.setAttribute("nonce", s), d.textContent = t[c], i.insertBefore(d, l || r), l = d, c === 0 && (o || this._styleAnchors.set(this._def, d), n && this._styleAnchors.set(n, d)), process.env.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let f = this._childStyles.get(n.__hmrId);
            f || this._childStyles.set(n.__hmrId, f = []), f.push(d);
          }
        } else
          (this._styles || (this._styles = [])).push(d);
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
      const o = t.childNodes[n];
      if (!(o instanceof HTMLStyleElement))
        return o;
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
      const o = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[o] || (t[o] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), n = this._instance.type.__scopeId;
    for (let o = 0; o < t.length; o++) {
      const s = t[o], i = s.getAttribute("name") || "default", r = this._slots[i], l = s.parentNode;
      if (r)
        for (const c of r) {
          if (n && c.nodeType === 1) {
            const d = n + "-s", f = document.createTreeWalker(c, 1);
            c.setAttribute(d, "");
            let u;
            for (; u = f.nextNode(); )
              u.setAttribute(d, "");
          }
          l.insertBefore(c, s);
        }
      else
        for (; s.firstChild; ) l.insertBefore(s.firstChild, s);
      l.removeChild(s);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const n = /* @__PURE__ */ new Set();
    for (const o of t) {
      const s = o.querySelectorAll("slot");
      for (let i = 0; i < s.length; i++)
        n.add(s[i]);
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
    if (process.env.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._styleAnchors.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((o) => this._root.removeChild(o)), n.length = 0);
    }
  }
}
const Vf = /* @__PURE__ */ se({ patchProp: xf }, nf);
let zi;
function dl() {
  return zi || (zi = Aa(Vf));
}
const kf = ((...e) => {
  dl().render(...e);
}), Ui = ((...e) => {
  const t = dl().createApp(...e);
  process.env.NODE_ENV !== "production" && (Pf(t), Hf(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Rf(o);
    if (!s) return;
    const i = t._component;
    !F(i) && !i.render && !i.template && (i.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const r = n(s, !1, Af(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), r;
  }, t;
});
function Af(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Pf(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Al(t) || Pl(t) || Hl(t),
    writable: !1
  });
}
function Hf(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ie(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ie(o), n;
      },
      set() {
        Ie(o);
      }
    });
  }
}
function Rf(e) {
  if (re(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Ie(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ie(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
function Mf() {
  Qa();
}
process.env.NODE_ENV !== "production" && Mf();
const hl = /* @__PURE__ */ Symbol("voiceState");
function Ff() {
  const e = /* @__PURE__ */ No({
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
function If(e) {
  Hs(hl, e);
}
function Us() {
  const e = Qt(hl);
  if (!e)
    throw new Error("[HandsfreeCooking] useVoiceState() called without a provider. Ensure provideVoiceState() is called in a parent component.");
  return e;
}
function Lf(e, t, n, o) {
  const s = {};
  let i = null, r = null, l = [], c = -1;
  const d = window.innerWidth < 768 ? 75 : 60, {
    state: f,
    toggleHelpStage: u,
    toggleListening: g,
    togglePopupState: b,
    updateCurrentStage: D
  } = n, O = () => {
    !i && t.instructions && (i = document.querySelector(t.instructions)), !r && t.ingredients && (r = document.querySelector(t.ingredients)), t.steps && (l = Array.from(document.querySelectorAll(t.steps)));
  }, A = new MutationObserver(() => {
    O();
  });
  A.observe(document.body, { childList: !0, subtree: !0 });
  const $ = () => {
    if (l.length > 0 && l[c]) {
      const T = l[c].getBoundingClientRect().top + window.scrollY - d;
      window.scrollTo({
        top: T,
        behavior: "smooth"
      });
    }
    l.length === c + 1 ? (D("listening almost-done"), b(!0)) : (D("listening"), b(!1));
  }, P = (V, z) => {
    V && V.forEach((T) => {
      s[T] = z;
    });
  };
  return e ? (P(e.help, () => {
    D("listening help"), u(!0), b(!0), o("handsfree-command", { command: "help" }), c > 0 && (c -= 1);
  }), P(e.scrollUp, () => {
    window.scrollBy({ top: -300, behavior: "smooth" }), o("handsfree-command", { command: "scroll-up" });
  }), P(e.scrollDown, () => {
    window.scrollBy({ top: 300, behavior: "smooth" }), o("handsfree-command", { command: "scroll-down" });
  }), P(e.exit, () => {
    D("listening"), u(!1), o("handsfree-command", { command: "exit" });
  }), P(e.goToInstructions, () => {
    i || O(), i && (window.scrollTo({
      top: i.offsetTop - d,
      behavior: "smooth"
    }), o("handsfree-command", { command: "go-to-instructions" })), c > 0 && (c -= 1, D("listening"), b(!1));
  }), P(e.goToIngredients, () => {
    r || O(), r && (window.scrollTo({
      top: r.offsetTop - d,
      behavior: "smooth"
    }), o("handsfree-command", { command: "go-to-ingredients" })), c > 0 && (c -= 1, D("listening"), b(!1));
  }), P(e.nextStep, () => {
    l.length === 0 && O(), c < l.length - 1 && (c += 1, $(), o("handsfree-command", { command: "next-step" }));
  }), P(e.previousStep, () => {
    l.length === 0 && O(), c > 0 && (c -= 1, $(), o("handsfree-command", { command: "previous-step" }));
  }), P(e.letsCook, () => {
    g(!0), D("listening"), b(!1), o("handsfree-command", { command: "lets-cook" });
  }), P(e.imDone, () => {
    o("handsfree-command", { command: "im-done" });
  }), { commands: s, destroy: () => A.disconnect() }) : { commands: s, destroy: () => A.disconnect() };
}
function $f(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jo, Wi;
function jf() {
  if (Wi) return Jo;
  Wi = 1, Jo = e;
  function e() {
  }
  return e.mixin = function(t) {
    var n = t.prototype || t;
    n.isWildEmitter = !0, n.on = function(o, s, i) {
      this.callbacks = this.callbacks || {};
      var r = arguments.length === 3, l = r ? arguments[1] : void 0, c = r ? arguments[2] : arguments[1];
      return c._groupName = l, (this.callbacks[o] = this.callbacks[o] || []).push(c), this;
    }, n.once = function(o, s, i) {
      var r = this, l = arguments.length === 3, c = l ? arguments[1] : void 0, d = l ? arguments[2] : arguments[1];
      function f() {
        r.off(o, f), d.apply(this, arguments);
      }
      return this.on(o, c, f), this;
    }, n.releaseGroup = function(o) {
      this.callbacks = this.callbacks || {};
      var s, i, r, l;
      for (s in this.callbacks)
        for (l = this.callbacks[s], i = 0, r = l.length; i < r; i++)
          l[i]._groupName === o && (l.splice(i, 1), i--, r--);
      return this;
    }, n.off = function(o, s) {
      this.callbacks = this.callbacks || {};
      var i = this.callbacks[o], r;
      return i ? arguments.length === 1 ? (delete this.callbacks[o], this) : (r = i.indexOf(s), r !== -1 && (i.splice(r, 1), i.length === 0 && delete this.callbacks[o]), this) : this;
    }, n.emit = function(o) {
      this.callbacks = this.callbacks || {};
      var s = [].slice.call(arguments, 1), i = this.callbacks[o], r = this.getWildcardCallbacks(o), l, c, d;
      if (i)
        for (d = i.slice(), l = 0, c = d.length; l < c && d[l]; ++l)
          d[l].apply(this, s);
      if (r)
        for (c = r.length, d = r.slice(), l = 0, c = d.length; l < c && d[l]; ++l)
          d[l].apply(this, [o].concat(s));
      return this;
    }, n.getWildcardCallbacks = function(o) {
      this.callbacks = this.callbacks || {};
      var s, i, r = [];
      for (s in this.callbacks)
        i = s.split("*"), (s === "*" || i.length === 2 && o.slice(0, i[0].length) === i[0]) && (r = r.concat(this.callbacks[s]));
      return r;
    };
  }, e.mixin(e), Jo;
}
var Zo, Ki;
function Bf() {
  if (Ki) return Zo;
  Ki = 1;
  var e = jf();
  function t(s, i) {
    var r = -1 / 0;
    s.getFloatFrequencyData(i);
    for (var l = 4, c = i.length; l < c; l++)
      i[l] > r && i[l] < 0 && (r = i[l]);
    return r;
  }
  var n;
  typeof window < "u" && (n = window.AudioContext || window.webkitAudioContext);
  var o = null;
  return Zo = function(s, l) {
    var r = new e();
    if (!n) return r;
    var l = l || {}, c = l.smoothing || 0.1, d = l.interval || 50, f = l.threshold, u = l.play, g = l.history || 10, b = !0;
    o = l.audioContext || o || new n();
    var D, O, A;
    A = o.createAnalyser(), A.fftSize = 512, A.smoothingTimeConstant = c, O = new Float32Array(A.frequencyBinCount), s.jquery && (s = s[0]), s instanceof HTMLAudioElement || s instanceof HTMLVideoElement ? (D = o.createMediaElementSource(s), typeof u > "u" && (u = !0), f = f || -50) : (D = o.createMediaStreamSource(s), f = f || -50), D.connect(A), u && A.connect(o.destination), r.speaking = !1, r.suspend = function() {
      return o.suspend();
    }, r.resume = function() {
      return o.resume();
    }, Object.defineProperty(r, "state", { get: function() {
      return o.state;
    } }), o.onstatechange = function() {
      r.emit("state_change", o.state);
    }, r.setThreshold = function(V) {
      f = V;
    }, r.setInterval = function(V) {
      d = V;
    }, r.stop = function() {
      b = !1, r.emit("volume_change", -100, f), r.speaking && (r.speaking = !1, r.emit("stopped_speaking")), A.disconnect(), D.disconnect();
    }, r.speakingHistory = [];
    for (var $ = 0; $ < g; $++)
      r.speakingHistory.push(0);
    var P = function() {
      setTimeout(function() {
        if (b) {
          var V = t(A, O);
          r.emit("volume_change", V, f);
          var z = 0;
          if (V > f && !r.speaking) {
            for (var T = r.speakingHistory.length - 3; T < r.speakingHistory.length; T++)
              z += r.speakingHistory[T];
            z >= 2 && (r.speaking = !0, r.emit("speaking"));
          } else if (V < f && r.speaking) {
            for (var T = 0; T < r.speakingHistory.length; T++)
              z += r.speakingHistory[T];
            z == 0 && (r.speaking = !1, r.emit("stopped_speaking"));
          }
          r.speakingHistory.shift(), r.speakingHistory.push(0 + (V > f)), P();
        }
      }, d);
    };
    return P(), r;
  }, Zo;
}
var zf = Bf();
const Uf = /* @__PURE__ */ $f(zf);
class gl {
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
    this.audioStreamSpeechEvents = Uf(t, {
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
let go, Pe, gs, ms, vs, Ws = !1;
function Le() {
  return /Android/i.test(navigator.userAgent);
}
let Vo, $e;
const Wf = 120 * 1e3, Kf = 3 * 1e3, qf = {
  error: null,
  status: "stopped",
  transcriptions: [],
  finalTranscriptions: !1
}, Ct = (e = {}) => {
  Vo({
    ...qf,
    ...e
  });
}, Gf = {
  lang: "en-US",
  interimResults: !0,
  maxAlternatives: 10
};
function ko() {
  clearTimeout(gs), clearTimeout(ms);
}
function ml() {
  ko(), Pe.abort(), Ct(), Le() || $e(0);
}
function Yf() {
  ko(), Pe && Pe.stop(), Ct(), Le() || $e(0);
}
function vl() {
  Ct({
    status: "starting"
  }), Le() || $e(0);
  try {
    Pe.start();
  } catch (e) {
    console.error(e);
  }
}
function _l() {
  try {
    setTimeout(vl, 100);
  } catch {
    _l();
  }
}
function Jf() {
  go && go.stop(), Le() || $e(0);
}
function Zf() {
  ko(), Ct(), Le() || $e(0), Ws || _l();
}
function Xf() {
  Ct({
    status: "recording"
  }), Le() || $e(0);
}
function Qf(e, t) {
  clearTimeout(gs), t || (gs = setTimeout(() => {
    Ct({
      finalTranscriptions: !0,
      status: "recording",
      transcriptions: e
    }), ml();
  }, Kf));
}
function eu(e) {
  if (!e || !e.results)
    return;
  const t = e.results[e.resultIndex], n = Object.values(t).map((o) => ({
    confidence: o.confidence,
    text: o.transcript
  }));
  Ct({
    finalTranscriptions: t.isFinal,
    status: "recording",
    transcriptions: n
  }), Qf(n, t.isFinal);
}
function tu(e) {
  Ct({
    error: e.error,
    status: "error"
  }), Le() || $e(0);
}
function nu() {
  vs || ml();
}
function ou() {
  go = new gl({
    onSpeaking: () => {
      vs = !0;
    },
    onStopSpeaking: () => {
      vs = !1, clearTimeout(ms), ms = setTimeout(nu, Wf);
    },
    onVolumeChange: (e) => {
      Le() || $e(e);
    }
  }), Le() || $e(0), go.start();
}
function su({ lang: e, interimResults: t, maxAlternatives: n }) {
  const o = window.SpeechRecognition || window.webkitSpeechRecognition;
  Pe = new o(), Pe.continuous = !0, Pe.lang = e, Pe.interimResults = t, Pe.maxAlternatives = n, Pe.onstart = Xf, Pe.onresult = eu, Pe.onerror = tu, Pe.onend = Zf;
}
function iu(e) {
  const t = {
    ...Gf,
    ...e
  };
  Vo = e.onUserSpeech, Le() || ($e = e.onUserSpeak), su(t);
}
function ru() {
  Ws = !1, Le() || $e && ou(), Vo && vl();
}
function lu() {
  Ws = !0, ko(), Le() || $e && Jf(), Vo && Yf();
}
const cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  init: iu,
  start: ru,
  stop: lu
}, Symbol.toStringTag, { value: "Module" }));
let mo, et, vo = !1, Ao, bt, _o;
function yt() {
  return /Android/i.test(navigator.userAgent);
}
const au = {
  lang: "en-US",
  interimResults: !0,
  maxAlternatives: 10
}, fu = {
  error: null,
  status: "stopped",
  transcriptions: [],
  finalTranscriptions: !1
}, Wt = (e = {}) => {
  Ao({
    ...fu,
    ...e
  });
};
function uu() {
  Wt({
    status: "recording"
  });
}
function Po() {
  yt() || bt(0), mo && mo.stop();
}
function pu() {
  mo = new gl({
    onVolumeChange: (e) => {
      yt() || bt(e);
    }
  }), mo.start(), yt() || bt(0);
}
function du(e, t) {
  clearTimeout(_o), t || (_o = setTimeout(() => {
    Wt({
      finalTranscriptions: !0,
      transcriptions: e
    });
  }, 2e3));
}
function hu() {
  yt() || bt && Po(), vo = !1, clearTimeout(_o), Wt();
}
function gu(e) {
  if (!e || !e.results)
    return;
  const t = e.results[e.resultIndex], n = Object.values(t).map((o) => ({
    confidence: o.confidence,
    text: o.transcript
  }));
  Wt({
    finalTranscriptions: t.isFinal,
    status: "recording",
    transcriptions: n
  }), du(n, t.isFinal);
}
function mu() {
  vo = !1, clearTimeout(_o), yt() || bt && Po(), Wt();
}
function vu(e) {
  Wt({
    error: e.error,
    status: "error"
  }), yt() || bt && Po();
}
function _u() {
  if (!vo) {
    Wt({
      status: "starting"
    });
    try {
      et.start(), vo = !0;
    } catch (e) {
      console.error(e);
    }
  }
}
function bu({ lang: e, interimResults: t, maxAlternatives: n }) {
  const o = window.SpeechRecognition || window.webkitSpeechRecognition;
  et = new o(), et.continuous = !1, et.lang = e, et.interimResults = t, et.maxAlternatives = n, et.onstart = uu, et.onresult = gu, et.onerror = vu, et.onend = mu;
}
function yu(e) {
  const t = {
    ...au,
    ...e
  };
  bu(t), Ao = e.onUserSpeech, yt() || (bt = e.onUserSpeak);
}
function Eu() {
  yt() || bt && pu(), Ao && _u();
}
function Nu() {
  yt() || bt && Po(), Ao && hu();
}
const wu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  init: yu,
  start: Eu,
  stop: Nu
}, Symbol.toStringTag, { value: "Module" })), Su = navigator.language || navigator.userLanguage || "en-US";
let xt;
function xu({
  continuesRecognition: e = !0,
  lang: t = Su,
  onUserSpeech: n,
  onUserSpeak: o
}) {
  return xt && xt.stop && xt.stop(), e ? xt = cu : xt = wu, xt.init({
    lang: t,
    onUserSpeech: n,
    onUserSpeak: o
  }), {
    start: xt.start,
    stop: xt.stop
  };
}
const Ou = {
  init: xu
}, Cu = {
  mic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><path d="M14.9815 9.25V11.125C14.9815 13.5437 13.0252 15.5 10.6065 15.5C8.18771 15.5 6.23146 13.5437 6.23146 11.125V9.25H4.98146V11.125C4.97521 13.9938 7.13146 16.4 9.98146 16.7125V18H7.48146V19.25H13.7315V18H11.2315V16.7125C14.0752 16.3938 16.2252 13.9875 16.2315 11.125V9.25H14.9815Z"/><path d="M10.6064 14.25C12.3314 14.25 13.7314 12.85 13.7314 11.125V4.875C13.7314 3.15 12.3314 1.75 10.6064 1.75C8.88145 1.75 7.48145 3.15 7.48145 4.875V11.125C7.48145 12.85 8.88145 14.25 10.6064 14.25ZM8.73145 4.875C8.73145 3.8375 9.56895 3 10.6064 3C11.6439 3 12.4814 3.8375 12.4814 4.875V11.125C12.4814 12.1625 11.6439 13 10.6064 13C9.56895 13 8.73145 12.1625 8.73145 11.125V4.875Z"/></svg>',
  help: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/><circle cx="16" cy="23.5" r="1.5"/><path d="M17,8H15.5A4.49,4.49,0,0,0,11,12.5V13h2v-.5A2.5,2.5,0,0,1,15.5,10H17a2.5,2.5,0,0,1,0,5H15v4.5h2V17a4.5,4.5,0,0,0,0-9Z"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"/></svg>',
  "chevron--left": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10 16L20 6 21.4 7.4 12.8 16 21.4 24.6 20 26z"/></svg>',
  "chevron--right": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"/></svg>',
  "chevron--down": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"/></svg>',
  "thumbs-up": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M26,12H20V6a3.0033,3.0033,0,0,0-3-3H14.8672a2.0094,2.0094,0,0,0-1.98,1.7173l-.8453,5.9165L8.4648,16H2V30H23a7.0078,7.0078,0,0,0,7-7V16A4.0045,4.0045,0,0,0,26,12ZM8,28H4V18H8Zm20-5a5.0057,5.0057,0,0,1-5,5H10V17.3027l3.9578-5.9365L14.8672,5H17a1.0008,1.0008,0,0,1,1,1v8h8a2.0025,2.0025,0,0,1,2,2Z"/></svg>',
  "thumbs-down": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30,16V9a7.0078,7.0078,0,0,0-7-7H2V16H8.4648l3.5774,5.3662.8453,5.9165A2.0094,2.0094,0,0,0,14.8672,29H17a3.0033,3.0033,0,0,0,3-3V20h6A4.0045,4.0045,0,0,0,30,16ZM8,14H4V4H8Zm20,2a2.0025,2.0025,0,0,1-2,2H18v8a1.0008,1.0008,0,0,1-1,1H14.8672l-.9094-6.3662L10,14.6973V4H23a5.0057,5.0057,0,0,1,5,5Z"/></svg>',
  "checkmark--outline": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><polygon points="14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414"/><path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"/></svg>'
}, sn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Tu = {
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
    const t = Oe(() => Cu[e.icon] || ""), n = Oe(() => e.size ? `hf-icon-${e.size}` : "");
    return {
      svgContent: t,
      cssClass: n
    };
  }
}, Du = ["innerHTML"];
function Vu(e, t, n, o, s, i) {
  return oe(), Ne("span", {
    class: nn(["hf-icon", o.cssClass]),
    innerHTML: o.svgContent
  }, null, 10, Du);
}
const Ho = /* @__PURE__ */ sn(Tu, [["render", Vu]]), ku = {
  components: {
    HfIcon: Ho
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
    }, o = Oe(() => e.isCloseState ? "close" : "chevron--down");
    return {
      togglePopup: n,
      icon: o
    };
  }
}, Au = { class: "hf-headline__title" }, Pu = { class: "hf-headline__opener" }, Hu = {
  key: 0,
  class: "hf-spinner"
};
function Ru(e, t, n, o, s, i) {
  const r = lt("HfIcon");
  return oe(), Ne("button", {
    class: "hf-headline",
    onClick: t[0] || (t[0] = (...l) => o.togglePopup && o.togglePopup(...l))
  }, [
    ne(r, {
      icon: "mic",
      size: 24
    }),
    ee("span", Au, Re(n.title), 1),
    ee("span", Pu, [
      n.isLoading ? (oe(), Ne("span", Hu, [...t[1] || (t[1] = [
        ee("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          ee("circle", {
            cx: "8",
            cy: "8",
            r: "7",
            "stroke-width": "2"
          })
        ], -1)
      ])])) : (oe(), je(r, {
        key: 1,
        icon: o.icon,
        size: 24
      }, null, 8, ["icon"]))
    ])
  ]);
}
const Ks = /* @__PURE__ */ sn(ku, [["render", Ru]]), Mu = {
  components: {
    PopupHeadline: Ks
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
    const n = Us();
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
}, Fu = { class: "hf-content-area" }, Iu = ["innerHTML"];
function Lu(e, t, n, o, s, i) {
  const r = lt("PopupHeadline");
  return oe(), Ne(Ve, null, [
    ne(r, {
      class: nn(n.additionalClassname),
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": n.isCloseState,
      onTogglePopup: o.togglePopup
    }, null, 8, ["class", "title", "is-loading", "is-close-state", "onTogglePopup"]),
    io(ee("div", Fu, [
      ee("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, Iu),
      n.translations.buttonText ? (oe(), Ne("button", {
        key: 0,
        class: "hf-button",
        onClick: t[0] || (t[0] = (...l) => o.buttonAction && o.buttonAction(...l))
      }, Re(n.translations.buttonText), 1)) : me("", !0)
    ], 512), [
      [ho, n.translations.content && n.translations.content !== "" && o.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const $u = /* @__PURE__ */ sn(Mu, [["render", Lu]]), ju = {
  components: {
    PopupHeadline: Ks,
    HfIcon: Ho
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
    const n = Us(), o = /* @__PURE__ */ ye(0), s = Oe(() => e.isCloseState && !n.state.isListening);
    return {
      togglePopup: () => {
        t("togglePopup");
      },
      beginListening: () => {
        t("beginListening");
      },
      goToPrevStep: () => {
        o.value > 0 && (o.value -= 1);
      },
      goToNextStep: () => {
        o.value += 1, o.value === e.translations.steps.length && (n.updateCurrentStage("listening"), n.togglePopupState(!1));
      },
      isClose: s,
      currentStep: o,
      voiceState: n
    };
  }
}, Bu = { class: "hf-content-area" }, zu = ["innerHTML"], Uu = {
  key: 1,
  class: "hf-introduction-steps"
}, Wu = ["innerHTML"], Ku = { class: "hf-introduction-buttons" }, qu = ["disabled"];
function Gu(e, t, n, o, s, i) {
  const r = lt("PopupHeadline"), l = lt("HfIcon");
  return oe(), Ne(Ve, null, [
    ne(r, {
      title: n.translations.title,
      "is-loading": n.isLoading,
      "is-close-state": o.isClose,
      onTogglePopup: o.togglePopup
    }, null, 8, ["title", "is-loading", "is-close-state", "onTogglePopup"]),
    io(ee("div", Bu, [
      o.voiceState.state.isListening ? me("", !0) : (oe(), Ne("div", {
        key: 0,
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, zu)),
      o.voiceState.state.isListening ? (oe(), Ne("div", Uu, [
        ee("div", {
          class: "hf-step",
          innerHTML: n.translations.steps[o.currentStep]
        }, null, 8, Wu),
        ee("div", Ku, [
          ee("button", {
            class: "hf-button",
            disabled: o.currentStep < 1,
            onClick: t[0] || (t[0] = (...c) => o.goToPrevStep && o.goToPrevStep(...c))
          }, [
            ne(l, {
              icon: "chevron--left",
              size: 24
            })
          ], 8, qu),
          ee("button", {
            class: "hf-button",
            onClick: t[1] || (t[1] = (...c) => o.goToNextStep && o.goToNextStep(...c))
          }, [
            ne(l, {
              icon: "chevron--right",
              size: 24
            })
          ])
        ])
      ])) : me("", !0),
      o.voiceState.state.isListening ? me("", !0) : (oe(), Ne("button", {
        key: 2,
        class: "hf-button",
        onClick: t[2] || (t[2] = (...c) => o.beginListening && o.beginListening(...c))
      }, Re(n.translations.buttonText), 1))
    ], 512), [
      [ho, o.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const Yu = /* @__PURE__ */ sn(ju, [["render", Gu]]), Ju = {
  components: {
    HfIcon: Ho,
    PopupHeadline: Ks
  },
  props: {
    translations: {
      type: Object,
      required: !0
    }
  },
  emits: ["closeHandsFreeFlow", "togglePopup"],
  setup(e, { emit: t }) {
    const n = Us(), o = Qt("emitEvent"), s = /* @__PURE__ */ ye(null), i = /* @__PURE__ */ ye(null), r = /* @__PURE__ */ ye(null), l = () => {
      t("closeHandsFreeFlow"), o("handsfree-feedback", { vote: "close" });
    }, c = () => {
      t("togglePopup");
    }, d = /* @__PURE__ */ ye(!1), f = () => {
      d.value = !0, o("handsfree-feedback", { vote: "up" });
    }, u = () => {
      d.value = !0, o("handsfree-feedback", { vote: "down" });
    }, g = () => {
      Vs(() => {
        const b = s.value, D = i.value, O = r.value;
        if (!b || !D || !O)
          return;
        const A = D.offsetWidth + O.offsetWidth, $ = b.offsetWidth;
        A > $ ? b.classList.add("hf-vote--stack") : b.classList.remove("hf-vote--stack");
      });
    };
    return Oo(() => {
      g(), window.addEventListener("resize", g);
    }), Rs(() => {
      window.removeEventListener("resize", g);
    }), {
      closeHandsFreeFlow: l,
      votedUp: f,
      votedDown: u,
      togglePopup: c,
      voted: d,
      voiceState: n,
      handsFreeVotes: s,
      voteUp: i,
      voteDown: r
    };
  }
}, Zu = { class: "hf-content-area" }, Xu = ["innerHTML"], Qu = {
  ref: "handsFreeVotes",
  class: "hf-vote"
}, ep = { class: "hf-success-message" };
function tp(e, t, n, o, s, i) {
  const r = lt("PopupHeadline"), l = lt("HfIcon");
  return oe(), Ne(Ve, null, [
    ne(r, {
      title: n.translations.title,
      onTogglePopup: o.togglePopup
    }, null, 8, ["title", "onTogglePopup"]),
    io(ee("div", Zu, [
      ee("div", {
        class: "hf-content",
        innerHTML: n.translations.content
      }, null, 8, Xu),
      ee("div", Qu, [
        o.voted ? me("", !0) : (oe(), Ne("button", {
          key: 0,
          ref: "voteUp",
          class: "hf-button",
          onClick: t[0] || (t[0] = (...c) => o.votedUp && o.votedUp(...c))
        }, [
          ne(l, {
            icon: "thumbs-up",
            size: 16
          }),
          ee("span", null, Re(n.translations.voteUp), 1)
        ], 512)),
        o.voted ? me("", !0) : (oe(), Ne("button", {
          key: 1,
          ref: "voteDown",
          class: "hf-button",
          onClick: t[1] || (t[1] = (...c) => o.votedDown && o.votedDown(...c))
        }, [
          ne(l, {
            icon: "thumbs-down",
            size: 16
          }),
          ee("span", null, Re(n.translations.voteDown), 1)
        ], 512)),
        io(ee("div", ep, [
          ne(l, {
            icon: "checkmark--outline",
            size: 16
          }),
          wn(" " + Re(n.translations.successMessage), 1)
        ], 512), [
          [ho, o.voted]
        ])
      ], 512),
      ee("button", {
        class: "hf-button hf-button--solid",
        onClick: t[2] || (t[2] = (...c) => o.closeHandsFreeFlow && o.closeHandsFreeFlow(...c))
      }, Re(n.translations.buttonText), 1)
    ], 512), [
      [ho, o.voiceState.state.isPopupOpened]
    ])
  ], 64);
}
const np = /* @__PURE__ */ sn(Ju, [["render", tp]]), op = ':host{--hf-color-bg: #ffffff;--hf-color-text: #1a1a1a;--hf-color-primary: #003da5;--hf-color-primary-hover: #002d7a;--hf-color-error: #d32f2f;--hf-color-border: #cccccc;--hf-spacing-xxs: 4px;--hf-spacing-xs: 8px;--hf-spacing-s: 12px;--hf-spacing-m: 16px;--hf-spacing-l: 24px;--hf-font-family: inherit;--hf-font-size-base: 16px;--hf-font-size-small: 14px;--hf-font-size-large: 18px;--hf-popup-width: 410px;--hf-popup-shadow: 0 12px 24px 0 rgba(0, 0, 0, .2);--hf-z-index: 10000;display:block;font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);color:var(--hf-color-text);line-height:1.5}*,*:before,*:after{box-sizing:border-box}.hf-root{margin-bottom:var(--hf-spacing-m)}.hf-intro-row{display:flex;align-items:center;margin-bottom:var(--hf-spacing-xs)}.hf-intro-label{margin-right:var(--hf-spacing-xxs);font-weight:700;text-transform:uppercase;font-size:var(--hf-font-size-small)}.hf-button{display:inline-flex;align-items:center;gap:var(--hf-spacing-xxs);padding:var(--hf-spacing-xs) var(--hf-spacing-m);border:1px solid var(--hf-color-primary);background:var(--hf-color-bg);color:var(--hf-color-primary);font-family:var(--hf-font-family);font-size:var(--hf-font-size-base);cursor:pointer;transition:background .15s,color .15s}.hf-button:hover{background:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button:hover .hf-icon svg{fill:var(--hf-color-bg)}.hf-button:disabled{opacity:.4;cursor:not-allowed}.hf-button--solid{background:var(--hf-color-primary);color:var(--hf-color-bg)}.hf-button--solid:hover{background:var(--hf-color-primary-hover)}.hf-button--handsfree{padding:var(--hf-spacing-xs) var(--hf-spacing-l)}.hf-icon{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;line-height:0}.hf-icon svg{fill:currentColor;width:1em;height:1em}.hf-icon-16 svg{width:16px;height:16px}.hf-icon-24 svg{width:24px;height:24px}.hf-tooltip-wrapper{cursor:pointer;position:relative;display:inline-flex;align-items:baseline}.hf-tooltip-content{position:absolute;bottom:30px;left:8px;transform:translate(-50%);width:350px;padding:var(--hf-spacing-s);background:var(--hf-color-bg);box-shadow:var(--hf-popup-shadow);cursor:default;z-index:calc(var(--hf-z-index) + 1)}.hf-tooltip-content:after{content:"";position:absolute;bottom:-10px;left:50%;transform:translate(-50%);width:0;height:0;border-style:solid;border-width:10px 10px 0 10px;border-color:var(--hf-color-bg) transparent transparent transparent}.hf-tooltip-title{display:flex;justify-content:space-between;text-transform:uppercase;font-weight:700;font-size:var(--hf-font-size-large);margin-bottom:var(--hf-spacing-xs)}.hf-tooltip-title span{cursor:pointer}.hf-tooltip-text{display:block;font-size:var(--hf-font-size-base);line-height:1.5}.hf-fade-enter-active,.hf-fade-leave-active{transition:opacity .2s ease-in-out}.hf-fade-enter-from,.hf-fade-leave-to{opacity:0}.hf-popup{position:fixed;bottom:20px;right:20px;width:calc(100% - 40px);max-width:var(--hf-popup-width);background:var(--hf-color-bg);z-index:var(--hf-z-index);box-shadow:var(--hf-popup-shadow);padding:var(--hf-spacing-s);transition:bottom .3s ease}.hf-popup--hidden{bottom:-100px;pointer-events:none;opacity:0}.hf-popup--opened{bottom:20px}.hf-headline{position:relative;border:0;display:flex;align-items:center;width:100%;background:none;padding:0;margin:0;cursor:pointer;font-family:var(--hf-font-family);color:var(--hf-color-text);font-size:var(--hf-font-size-base)}.hf-headline__title{text-transform:uppercase;font-weight:700;font-size:var(--hf-font-size-large);margin-left:var(--hf-spacing-xxs)}.hf-headline__opener{margin-left:auto;display:flex;align-items:center}.hf-headline__opener svg{transition:transform .2s}.hf-popup--opened .hf-headline__opener svg{transform:rotate(0)}.hf-popup:not(.hf-popup--opened) .hf-headline__opener svg{transform:rotate(180deg)}.hf-spinner{display:inline-block;width:22px;height:22px}.hf-spinner svg{width:100%;height:100%;overflow:visible;animation:hf-rotation 1455ms infinite linear}.hf-spinner circle{stroke:currentColor;stroke-dasharray:44px;stroke-dashoffset:11px;transform-origin:center;transform:rotateY(180deg) rotate(90deg);animation:hf-spinner 3.85s infinite ease}@keyframes hf-spinner{0%{stroke-dashoffset:33px;transform:rotateY(0) rotate(0)}24.9999%{stroke-dashoffset:11px;transform:rotateY(0) rotate(0)}25%{stroke-dashoffset:11px;transform:rotateY(180deg) rotate(270deg)}49.9999%{stroke-dashoffset:33px;transform:rotateY(180deg) rotate(270deg)}50%{stroke-dashoffset:33px;transform:rotateY(0) rotate(180deg)}74.9999%{stroke-dashoffset:11px;transform:rotateY(0) rotate(180deg)}75%{stroke-dashoffset:11px;transform:rotateY(180deg) rotate(90deg)}to{stroke-dashoffset:33px;transform:rotateY(180deg) rotate(90deg)}}@keyframes hf-rotation{to{transform:rotate(360deg)}}.hf-content-area{margin-top:var(--hf-spacing-s)}.hf-content p{margin:0 0 var(--hf-spacing-xs);font-size:var(--hf-font-size-base)}.hf-content p:last-of-type{margin:0}.hf-content ul{margin:0;padding:var(--hf-spacing-xxs) 0 var(--hf-spacing-xxs) var(--hf-spacing-m);line-height:1}.hf-content ul li{margin:0 0 var(--hf-spacing-xxs)}.hf-content a{color:var(--hf-color-primary)}.hf-introduction-steps .hf-step{margin-bottom:var(--hf-spacing-xs)}.hf-introduction-steps .hf-step p{margin:0 0 var(--hf-spacing-xs)}.hf-introduction-buttons{display:flex;gap:0}.hf-introduction-buttons .hf-button{padding:var(--hf-spacing-xs)}.hf-introduction-buttons .hf-button:last-of-type{margin-left:-1px}.hf-not-recognized .hf-headline__opener{border:1px solid var(--hf-color-error)}.hf-error-state{color:var(--hf-color-error)}.hf-hide-chevron .hf-headline__opener{pointer-events:none}.hf-hide-chevron .hf-headline__opener .hf-icon{display:none}.hf-vote{display:flex;gap:0;margin:var(--hf-spacing-xs) 0}.hf-vote .hf-button{white-space:nowrap}.hf-vote .hf-button:last-of-type{margin-left:-1px}.hf-vote--stack{flex-direction:column}.hf-vote--stack .hf-button{justify-content:center}.hf-vote--stack .hf-button:last-of-type{margin-left:0;margin-top:-1px}.hf-success-message{display:flex;align-items:center;gap:var(--hf-spacing-xxs)}.hf-hidden-button{position:absolute;left:-9999px;opacity:0}@media print{.hf-root,.hf-popup{display:none}}@media(max-width:767px){.hf-tooltip-content{left:30px;width:290px}.hf-tooltip-content:after{transform:translate(calc(-50% - 22px))}}', sp = {
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
}, ip = {
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
function bl(e, t) {
  const n = { ...e };
  for (const o of Object.keys(t))
    t[o] && typeof t[o] == "object" && !Array.isArray(t[o]) && e[o] && typeof e[o] == "object" && !Array.isArray(e[o]) ? n[o] = bl(e[o], t[o]) : n[o] = t[o];
  return n;
}
const rp = {
  components: {
    Finish: np,
    Popup: $u,
    Introduction: Yu,
    HfIcon: Ho
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
    const t = Ff();
    If(t);
    const {
      state: n,
      toggleHelpStage: o,
      toggleListening: s,
      togglePopupState: i,
      updateCurrentStage: r
    } = t, l = To(), c = (v, h = {}) => {
      const _ = l?.proxy?.$el?.parentNode?.host || l?.proxy?.$el;
      _ && _.dispatchEvent && _.dispatchEvent(new CustomEvent(v, {
        detail: h,
        bubbles: !0,
        composed: !0
      }));
    };
    Hs("emitEvent", c);
    const d = Oe(() => {
      let v = {};
      if (e.translations)
        try {
          v = JSON.parse(e.translations);
        } catch (h) {
          console.warn("[HandsfreeCooking] Invalid translations JSON:", h);
        }
      return bl(sp, v);
    }), f = Oe(() => {
      let v = {};
      if (e.commands)
        try {
          v = JSON.parse(e.commands);
        } catch (h) {
          console.warn("[HandsfreeCooking] Invalid commands JSON:", h);
        }
      return { ...ip, ...v };
    }), u = Oe(() => ({
      steps: e.stepsSelector,
      ingredients: e.ingredientsSelector,
      instructions: e.instructionsSelector
    })), g = /* @__PURE__ */ ye(
      e.lang || document.documentElement.lang || "en"
    ), { commands: b, destroy: D } = Lf(
      f.value,
      u.value,
      t,
      c
    ), O = /* @__PURE__ */ ye(b), A = /* @__PURE__ */ ye(null), $ = /* @__PURE__ */ ye(!1), P = /* @__PURE__ */ ye(null), V = /* @__PURE__ */ ye(null), z = /* @__PURE__ */ ye(null), T = /* @__PURE__ */ ye(0), K = /* @__PURE__ */ ye(!1), ae = /* @__PURE__ */ ye(!1), q = /* @__PURE__ */ ye(!1), R = /* @__PURE__ */ ye(null), G = Oe(() => n.isPopupOpened), te = Oe(() => n.isHelpStage), x = Oe(() => n.currentStage), ie = Oe(() => x.value && x.value.includes("listening")), ve = Oe(() => x.value && x.value.includes("not-recognized")), _e = Oe(() => x.value && x.value.includes("recognized-error")), le = Oe(() => x.value && x.value.includes("almost-done"));
    let B = !1, j = !1, we = !1, Tt = null;
    function Dt() {
      !A.value || j || (q.value && A.value.stop(), setTimeout(() => {
        if (!q.value)
          try {
            A.value.start();
          } catch {
            setTimeout(() => {
              try {
                q.value || A.value.start();
              } catch (h) {
                console.error("[HandsfreeCooking] Restart failed:", h);
              }
            }, 1e3);
          }
      }, 500));
    }
    const ut = (v) => {
      P.value && !P.value.contains(v.target) && ($.value = !1);
    }, Ye = (v) => {
      let h = null;
      const _ = v.toLowerCase().replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, "").replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, "").replace(/\s+/g, " ").replace(/[.,!?;:。，！？；：．]+$/g, "").trim().normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "").normalize("NFC").trim(), S = [];
      Object.keys(O.value).forEach((N) => {
        const E = N.toLowerCase().replace(/[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+$/g, "").replace(/^[\s\u00A0\u2000-\u200B\u2028\u2029\uFEFF]+/g, "").replace(/\s+/g, " ").trim().normalize("NFD").replace(/[\u064B-\u065F\u0670]/g, "").normalize("NFC").trim();
        _ === E ? S.push({ alias: N, normalizedAlias: E, score: 3, type: "exact" }) : _.startsWith(E) ? S.push({ alias: N, normalizedAlias: E, score: 2, type: "starts-with" }) : _.endsWith(E) ? S.push({ alias: N, normalizedAlias: E, score: 2, type: "ends-with" }) : new RegExp(`(^|\\s)${E.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\s|$)`, "i").test(_) && S.push({ alias: N, normalizedAlias: E, score: 1, type: "word-boundary" });
      }), S.sort((N, E) => N.score !== E.score ? E.score - N.score : E.normalizedAlias.length - N.normalizedAlias.length), S.length > 0 && (h = S[0].alias), h ? (le.value || (o(!1), i(!1), r("listening")), le.value && f.value.imDone.includes(h) && (r("finish"), wt(), c("handsfree-finished", { reason: "completed recipe flow" })), z.value = h, T.value = 0, requestAnimationFrame(() => {
        V.value ? V.value.click() : O.value[h] && (O.value[h](), z.value = null);
      })) : (T.value += 1, x.value.includes("help") || (r("listening not-recognized"), o(!1), i(!1)), T.value > 3 && r("listening recognized-error"));
    }, rn = (v) => {
      f.value.letsCook.includes(v) && O.value[v] && (z.value = v, setTimeout(() => {
        V.value && V.value.click();
      }, 100));
    }, Ro = window.SpeechRecognition || window.webkitSpeechRecognition, Mo = () => {
      if (j = !1, r("introduction"), c("handsfree-activated"), !Ro)
        c("handsfree-error", { error: "browser-not-supported" }), r("not-supported");
      else {
        let v = !1;
        A.value = Ou.init({
          lang: g.value,
          continuesRecognition: !0,
          onUserSpeech: (h) => {
            if (q.value = ["starting", "recording"].includes(h.status), ["stopped", "aborted", "error"].includes(h.status) && (q.value = !1), R.value = h.status, !v && h.status === "starting") {
              v = !0;
              return;
            }
            if (h.status === "error" && (h.error === "not-allowed" || h.error === "service-not-allowed")) {
              ae.value = !0, r("not-allowed"), s(!1), A.value.stop(), c("handsfree-error", { error: "microphone-not-allowed" });
              return;
            }
            if (h.status === "recording" && (s(!0), B || (c("handsfree-state-change", { stage: "microphone-allowed", isListening: !0 }), B = !0), h.transcriptions.length && !h.finalTranscriptions && (K.value = !0), h.finalTranscriptions)) {
              K.value = !1;
              const _ = h.transcriptions[0].text.toLowerCase().trim();
              x.value.includes("introduction") ? rn(_) : Ye(_);
            }
          },
          onUserSpeak: () => {
          }
        });
      }
    }, wt = () => {
      A.value && A.value.stop(), j = !0, o(!1), s(!1), i(!0), q.value = !1;
    }, Kt = () => {
      r("finish"), wt(), c("handsfree-finished", { reason: "stop-cooking-button" });
    }, ln = () => {
      i(!0), o(!0), r("listening help");
    }, Bn = () => {
      z.value && O.value[z.value] && (O.value[z.value](), z.value = null);
    }, Vt = () => {
      if (ae.value)
        r("not-allowed");
      else {
        if (!q.value)
          try {
            A.value.start();
          } catch (v) {
            console.warn("[HandsfreeCooking] Cannot start recognizer:", v);
          }
        r("listening introduction"), c("handsfree-state-change", { stage: "listening", isListening: !0 });
      }
    };
    function qs() {
      alert("Microphone access is blocked. Please enable it in browser settings."), c("handsfree-error", { error: "microphone-blocked" });
    }
    const a = () => {
      n.isPopupOpened ? i(!1) : i(!0), c("handsfree-state-change", {
        stage: x.value,
        isListening: n.isListening,
        isPopupOpened: n.isPopupOpened
      });
    }, p = () => {
      i(!1), o(!1), r("listening");
    }, m = () => {
      !n.isListening && A.value ? (A.value.stop(), r(null)) : a();
    };
    return Oo(() => {
      document.addEventListener("click", ut), Tt = setInterval(() => {
        R.value === "stopped" && x.value === "listening" && !j && !we && !q.value && (Dt(), we = !0), R.value === "listening" && we && (we = !1);
      }, 1e3);
    }), Ms(() => {
      document.removeEventListener("click", ut), Tt && clearInterval(Tt);
      try {
        A.value && A.value.stop();
      } catch (v) {
        console.warn("[HandsfreeCooking] Failed to stop on unmount:", v);
      }
      D(), q.value = !1;
    }), {
      isPopupOpened: G,
      currentStage: x,
      isListeningStage: ie,
      isHelpStage: te,
      isNotRecognizedStage: ve,
      isNotRecognizedStageError: _e,
      isAlmostDone: le,
      isTooltipVisible: $,
      mergedTranslations: d,
      mergedCommands: f,
      tooltip: P,
      fakeButton: V,
      isLoading: K,
      openHelp: ln,
      startHandsFreeFlow: Mo,
      finishHandsFreeFlow: Kt,
      togglePopup: a,
      requestMicrophoneAccess: qs,
      runCommand: Bn,
      beginListening: Vt,
      continueListening: p,
      closeHandsFreeFlow: m
    };
  }
}, lp = { class: "hf-root" }, cp = { class: "hf-trigger" }, ap = { class: "hf-intro-row" }, fp = { class: "hf-intro-label" }, up = {
  ref: "tooltip",
  class: "hf-tooltip-wrapper"
}, pp = {
  key: 0,
  class: "hf-tooltip-content"
}, dp = { class: "hf-tooltip-title" }, hp = { class: "hf-tooltip-text" };
function gp(e, t, n, o, s, i) {
  const r = lt("HfIcon"), l = lt("Introduction"), c = lt("Popup"), d = lt("Finish");
  return oe(), Ne("div", lp, [
    ee("div", cp, [
      ee("div", ap, [
        ee("span", fp, Re(o.mergedTranslations.intro), 1),
        ee("span", up, [
          ne(r, {
            icon: "help",
            size: 16,
            onClick: t[0] || (t[0] = (f) => o.isTooltipVisible = !o.isTooltipVisible)
          }),
          ne(rf, { name: "hf-fade" }, {
            default: Cr(() => [
              o.isTooltipVisible ? (oe(), Ne("span", pp, [
                ee("strong", dp, [
                  wn(Re(o.mergedTranslations.tooltip.title) + " ", 1),
                  ee("span", {
                    onClick: t[1] || (t[1] = (f) => o.isTooltipVisible = !1)
                  }, [
                    ne(r, {
                      icon: "close",
                      size: 24
                    })
                  ])
                ]),
                ee("span", hp, Re(o.mergedTranslations.tooltip.text), 1)
              ])) : me("", !0)
            ]),
            _: 1
          })
        ], 512)
      ]),
      o.currentStage !== "listening" && !o.isListeningStage ? (oe(), Ne("button", {
        key: 0,
        class: "hf-button hf-button--handsfree",
        onClick: t[2] || (t[2] = (...f) => o.startHandsFreeFlow && o.startHandsFreeFlow(...f))
      }, [
        ne(r, {
          icon: "mic",
          size: 24
        }),
        wn(" " + Re(o.mergedTranslations.letsCook), 1)
      ])) : me("", !0),
      o.isListeningStage ? (oe(), Ne("button", {
        key: 1,
        class: "hf-button hf-button--handsfree",
        onClick: t[3] || (t[3] = (...f) => o.finishHandsFreeFlow && o.finishHandsFreeFlow(...f))
      }, [
        ne(r, {
          icon: "mic",
          size: 24
        }),
        wn(" " + Re(o.mergedTranslations.stopCooking), 1)
      ])) : me("", !0)
    ]),
    ee("div", {
      class: nn(["hf-popup", {
        "hf-popup--opened": o.isPopupOpened,
        "hf-popup--hidden": o.currentStage === null
      }])
    }, [
      o.currentStage && o.currentStage.includes("introduction") ? (oe(), je(l, {
        key: 0,
        translations: o.mergedTranslations.introduction,
        "is-loading": o.isLoading,
        "is-close-state": !0,
        onTogglePopup: o.closeHandsFreeFlow,
        onBeginListening: o.beginListening
      }, null, 8, ["translations", "is-loading", "onTogglePopup", "onBeginListening"])) : me("", !0),
      o.currentStage === "not-allowed" ? (oe(), je(c, {
        key: 1,
        translations: o.mergedTranslations.notAllowed,
        "is-loading": o.isLoading,
        "is-close-state": !0,
        onTogglePopup: o.closeHandsFreeFlow,
        onButtonAction: o.requestMicrophoneAccess
      }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : me("", !0),
      o.currentStage === "listening" ? (oe(), je(c, {
        key: 2,
        translations: o.mergedTranslations.listening,
        "is-loading": o.isLoading,
        onTogglePopup: o.openHelp
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : me("", !0),
      o.isHelpStage ? (oe(), je(c, {
        key: 3,
        translations: o.mergedTranslations.help,
        "is-loading": o.isLoading,
        onTogglePopup: o.continueListening,
        onButtonAction: o.finishHandsFreeFlow
      }, null, 8, ["translations", "is-loading", "onTogglePopup", "onButtonAction"])) : me("", !0),
      o.isNotRecognizedStage ? (oe(), je(c, {
        key: 4,
        "additional-classname": "hf-not-recognized",
        translations: o.mergedTranslations.notRecognized,
        "is-loading": o.isLoading,
        onTogglePopup: o.openHelp
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : me("", !0),
      o.isNotRecognizedStageError ? (oe(), je(c, {
        key: 5,
        "additional-classname": "hf-not-recognized hf-error-state",
        translations: o.mergedTranslations.notRecognizedError,
        "is-loading": o.isLoading,
        onTogglePopup: o.openHelp
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : me("", !0),
      o.currentStage === "not-supported" ? (oe(), je(c, {
        key: 6,
        "additional-classname": "hf-hide-chevron",
        translations: o.mergedTranslations.notSupported,
        "is-loading": o.isLoading,
        onButtonAction: o.closeHandsFreeFlow
      }, null, 8, ["translations", "is-loading", "onButtonAction"])) : me("", !0),
      o.isAlmostDone ? (oe(), je(c, {
        key: 7,
        translations: o.mergedTranslations.almostDone,
        "is-loading": o.isLoading,
        onTogglePopup: o.togglePopup
      }, null, 8, ["translations", "is-loading", "onTogglePopup"])) : me("", !0),
      o.currentStage === "finish" ? (oe(), je(d, {
        key: 8,
        translations: o.mergedTranslations.finish,
        onCloseHandsFreeFlow: o.closeHandsFreeFlow,
        onTogglePopup: o.togglePopup
      }, null, 8, ["translations", "onCloseHandsFreeFlow", "onTogglePopup"])) : me("", !0),
      ee("button", {
        ref: "fakeButton",
        class: "hf-hidden-button",
        onClick: t[4] || (t[4] = (...f) => o.runCommand && o.runCommand(...f))
      }, " Run Command ", 512)
    ], 2)
  ]);
}
const mp = /* @__PURE__ */ sn(rp, [["render", gp], ["styles", [op]]]), vp = /* @__PURE__ */ Tf(mp, {
  shadowRoot: !0
});
customElements.get("handsfree-cooking") || customElements.define("handsfree-cooking", vp);
export {
  vp as HandsfreeCookingElement
};
