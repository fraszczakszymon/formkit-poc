import { ref as De, nextTick as ap, reactive as Dr, computed as Sr, markRaw as oa, triggerRef as Gr, isRef as Cn, isReactive as Ta, watch as Lr, defineComponent as Dl, getCurrentInstance as Ln, watchEffect as et, onMounted as Sl, onUnmounted as sp, h as In, inject as Xr, provide as lp, toRef as ip, onBeforeUnmount as up, createTextVNode as pp, resolveComponent as dp } from "vue";
var cp = typeof window < "u", Cl = [
  "__key",
  "__init",
  "__shim",
  "__original",
  "__index",
  "__prevKey"
];
function cr() {
  return Math.random().toString(36).substring(2, 15);
}
function fp(e, t) {
  return [...e instanceof Set ? e : new Set(e)];
}
function q(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function j(e, t, r = !0, o = ["__key"]) {
  if (e === t)
    return !0;
  if (typeof t == "object" && typeof e == "object") {
    if (e instanceof Map || e instanceof Set)
      return !1;
    if (e instanceof Date && t instanceof Date)
      return e.getTime() === t.getTime();
    if (e instanceof RegExp && t instanceof RegExp)
      return gp(e, t);
    if (e === null || t === null || Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const n of o)
      if ((n in e || n in t) && e[n] !== t[n])
        return !1;
    for (const n in e)
      if (!(n in t) || e[n] !== t[n] && !r || r && !j(e[n], t[n], r, o))
        return !1;
    return !0;
  }
  return !1;
}
function gp(e, t) {
  return e.source === t.source && e.flags.split("").sort().join("") === t.flags.split("").sort().join("");
}
function Te(e) {
  const t = typeof e;
  if (t === "number")
    return !1;
  if (e === void 0)
    return !0;
  if (t === "string")
    return e === "";
  if (t === "object") {
    if (e === null)
      return !0;
    for (const r in e)
      return !1;
    return !(e instanceof RegExp || e instanceof Date);
  }
  return !1;
}
function mp(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function hp(e) {
  const t = `^${mp(e)}$`, r = {
    MM: "(0[1-9]|1[012])",
    M: "([1-9]|1[012])",
    DD: "([012][0-9]|3[01])",
    D: "([012]?[0-9]|3[01])",
    YYYY: "\\d{4}",
    YY: "\\d{2}"
  }, o = Object.keys(r);
  return new RegExp(
    o.reduce((n, a) => n.replace(a, r[a]), t)
  );
}
function Ot(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Gt(e) {
  return Ot(e) || Array.isArray(e);
}
function yt(e) {
  if (Ot(e) === !1 || e.__FKNode__ || e.__POJO__ === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(Ot(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1);
}
var xt = /* @__NO_SIDE_EFFECTS__ */ (e, t, r = !1, o = !1) => {
  if (t === null)
    return null;
  const n = {};
  if (typeof t == "string")
    return t;
  for (const a in e)
    if (q(t, a) && (t[a] !== void 0 || !o)) {
      if (r && Array.isArray(e[a]) && Array.isArray(t[a])) {
        n[a] = e[a].concat(t[a]);
        continue;
      }
      if (t[a] === void 0)
        continue;
      yt(e[a]) && yt(t[a]) ? n[a] = /* @__PURE__ */ xt(
        e[a],
        t[a],
        r,
        o
      ) : n[a] = t[a];
    } else
      n[a] = e[a];
  for (const a in t)
    !q(n, a) && t[a] !== void 0 && (n[a] = t[a]);
  return n;
};
function vp(e) {
  if (e[0] !== '"' && e[0] !== "'" || e[0] !== e[e.length - 1])
    return !1;
  const t = e[0];
  for (let r = 1; r < e.length; r++)
    if (e[r] === t && (r === 1 || e[r - 1] !== "\\") && r !== e.length - 1)
      return !1;
  return !0;
}
function bp(e) {
  if (!e.length)
    return "";
  let t = "", r = "";
  for (let o = 0; o < e.length; o++) {
    const n = e.charAt(o);
    (n !== "\\" || r === "\\") && (t += n), r = n;
  }
  return t;
}
function Rt(...e) {
  return e.reduce((t, r) => {
    const { value: o, name: n, modelValue: a, config: s, plugins: l, ...i } = r;
    return Object.assign(t, i);
  }, {});
}
function $p(e) {
  const t = [];
  let r = "", o = 0, n = "", a = "";
  for (let s = 0; s < e.length; s++) {
    const l = e.charAt(s);
    l === n && a !== "\\" ? n = "" : (l === "'" || l === '"') && !n && a !== "\\" ? n = l : l === "(" && !n ? o++ : l === ")" && !n && o--, l === "," && !n && o === 0 ? (t.push(r), r = "") : (l !== " " || n) && (r += l), a = l;
  }
  return r && t.push(r), t;
}
function Oa(e, t) {
  const r = {}, o = t.filter((a) => a instanceof RegExp), n = new Set(t);
  for (const a in e)
    !n.has(a) && !o.some((s) => s.test(a)) && (r[a] = e[a]);
  return r;
}
function Pa(e, t) {
  const r = {}, o = t.filter((n) => n instanceof RegExp);
  return t.forEach((n) => {
    n instanceof RegExp || (r[n] = e[n]);
  }), Object.keys(e).forEach((n) => {
    o.some((a) => a.test(n)) && (r[n] = e[n]);
  }), r;
}
function Xt(e) {
  return e.replace(
    /-([a-z0-9])/gi,
    (t, r) => r.toUpperCase()
  );
}
function Ll(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (t, r, o) => r + "-" + o.toLowerCase()
  ).replace(" ", "-").toLowerCase();
}
function An(e, t = Cl) {
  if (e !== null && typeof e == "object") {
    let r;
    if (Array.isArray(e) ? r = [...e] : yt(e) && (r = { ...e }), r)
      return xp(e, r, t), r;
  }
  return e;
}
function wt(e, t = Cl) {
  if (e === null || e instanceof RegExp || e instanceof Date || e instanceof Map || e instanceof Set || typeof File == "function" && e instanceof File)
    return e;
  let r;
  Array.isArray(e) ? r = e.map((o) => typeof o == "object" ? wt(o, t) : o) : r = Object.keys(e).reduce((o, n) => (o[n] = typeof e[n] == "object" ? wt(e[n], t) : e[n], o), {});
  for (const o of t)
    o in e && Object.defineProperty(r, o, {
      enumerable: !1,
      value: e[o]
    });
  return r;
}
function Fe(e) {
  return typeof e == "object" ? wt(e) : e;
}
function yp(e, t) {
  if (!e || typeof e != "object")
    return null;
  const r = t.split(".");
  let o = e;
  for (const n in r) {
    const a = r[n];
    if (q(o, a) && (o = o[a]), +n === r.length - 1)
      return o;
    if (!o || typeof o != "object")
      return null;
  }
  return null;
}
function R(e) {
  return e !== void 0 && e !== "false" && e !== !1 ? !0 : void 0;
}
function rr(e) {
  return Object.isFrozen(e) ? e : Object.defineProperty(e, "__init", {
    enumerable: !1,
    value: !0
  });
}
function na(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, " ").trim().replace(/\s+/g, "-");
}
function xp(e, t, r) {
  for (const o of r)
    o in e && Object.defineProperty(t, o, {
      enumerable: !1,
      value: e[o]
    });
  return t;
}
function me(e, t, r) {
  if (!cp)
    return;
  r || (r = document);
  const o = r.getElementById(e);
  if (o)
    return t(o);
  const n = new MutationObserver(() => {
    const a = r == null ? void 0 : r.getElementById(e);
    a && (n == null || n.disconnect(), t(a));
  });
  n.observe(r, { childList: !0, subtree: !0 });
}
function wp(e) {
  let t = !1;
  return (...r) => {
    if (!t)
      return t = !0, queueMicrotask(() => t = !1), e(...r);
  };
}
function _p(e) {
  if (!(e === "false" || e === !1))
    return !0;
}
function aa() {
  const e = [];
  let t = 0;
  const r = (n) => e.push(n), o = (n) => {
    const a = e[t];
    return typeof a == "function" ? a(n, (s) => (t++, o(s))) : (t = 0, n);
  };
  return r.dispatch = o, r.unshift = (n) => e.unshift(n), r.remove = (n) => {
    const a = e.indexOf(n);
    a > -1 && e.splice(a, 1);
  }, r;
}
function Il() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  let r;
  const o = (n, a) => {
    if (r) {
      r.set(a.name, [n, a]);
      return;
    }
    e.has(a.name) && e.get(a.name).forEach((s) => {
      (a.origin === n || s.modifiers.includes("deep")) && s.listener(a);
    }), a.bubble && n.bubble(a);
  };
  return o.flush = () => {
    e.clear(), t.clear(), r == null || r.clear();
  }, o.on = (n, a, s = "push") => {
    const [l, ...i] = n.split("."), u = a.receipt || cr(), c = {
      modifiers: i,
      event: l,
      listener: a,
      receipt: u
    };
    return e.has(l) ? e.get(l)[s](c) : e.set(l, [c]), t.has(u) ? t.get(u)[s](l) : t.set(u, [l]), u;
  }, o.off = (n) => {
    var a;
    t.has(n) && ((a = t.get(n)) == null || a.forEach((s) => {
      const l = e.get(s);
      Array.isArray(l) && e.set(
        s,
        l.filter((i) => i.receipt !== n)
      );
    }), t.delete(n));
  }, o.pause = (n) => {
    r || (r = /* @__PURE__ */ new Map()), n && n.walk((a) => a._e.pause());
  }, o.play = (n) => {
    if (!r)
      return;
    const a = r;
    r = void 0, a.forEach(([s, l]) => o(s, l)), n && n.walk((s) => s._e.play());
  }, o;
}
function kp(e, t, r, o, n = !0, a) {
  return t._e(e, {
    payload: o,
    name: r,
    bubble: n,
    origin: e,
    meta: a
  }), e;
}
function Dp(e, t, r) {
  return jr(e.parent) && e.parent._e(e.parent, r), e;
}
function Sp(e, t, r, o, n) {
  return t._e.on(r, o, n);
}
function Cp(e, t, r) {
  return t._e.off(r), e;
}
var sa = aa();
sa((e, t) => (e.message || (e.message = `E${e.code}`), t(e)));
var la = aa();
la((e, t) => {
  e.message || (e.message = `W${e.code}`);
  const r = t(e);
  return console && typeof console.warn == "function" && console.warn(r.message), r;
});
function _t(e, t = {}) {
  la.dispatch({ code: e, data: t });
}
function Se(e, t = {}) {
  throw Error(sa.dispatch({ code: e, data: t }).message);
}
function ye(e, t) {
  return {
    blocking: !1,
    key: cr(),
    meta: {},
    type: "state",
    visible: !0,
    ...e
  };
}
var Va = {
  apply: Tp,
  set: Ip,
  remove: Al,
  filter: Ep,
  reduce: Mp,
  release: Vp,
  touch: Ap
};
function Lp(e = !1) {
  const t = {};
  let r, o = e, n = [];
  const a = /* @__PURE__ */ new Map();
  let s;
  const l = new Proxy(t, {
    get(...i) {
      const [u, c] = i;
      return c === "buffer" ? o : c === "_b" ? n : c === "_m" ? a : c === "_r" ? s : q(Va, c) ? Va[c].bind(
        null,
        t,
        l,
        r
      ) : Reflect.get(...i);
    },
    set(i, u, c) {
      return u === "_n" ? (r = c, s === "__n" && El(r, l), !0) : u === "_b" ? (n = c, !0) : u === "buffer" ? (o = c, !0) : u === "_r" ? (s = c, !0) : (Se(101, r), !1);
    }
  });
  return l;
}
function Ip(e, t, r, o) {
  if (t.buffer)
    return t._b.push([[o]]), t;
  if (e[o.key] !== o) {
    if (typeof o.value == "string" && o.meta.localize !== !1) {
      const a = o.value;
      o.value = r.t(o), o.value !== a && (o.meta.locale = r.props.locale);
    }
    const n = `message-${q(e, o.key) ? "updated" : "added"}`;
    e[o.key] = Object.freeze(
      r.hook.message.dispatch(o)
    ), r.emit(n, o);
  }
  return t;
}
function Ap(e, t) {
  for (const r in e) {
    const o = { ...e[r] };
    t.set(o);
  }
}
function Al(e, t, r, o) {
  if (q(e, o)) {
    const n = e[o];
    delete e[o], r.emit("message-removed", n);
  }
  return t.buffer === !0 && (t._b = t._b.filter((n) => (n[0] = n[0].filter((a) => a.key !== o), n[1] || n[0].length))), t;
}
function Ep(e, t, r, o, n) {
  for (const a in e) {
    const s = e[a];
    (!n || s.type === n) && !o(s) && Al(e, t, r, a);
  }
}
function Mp(e, t, r, o, n) {
  for (const a in e) {
    const s = e[a];
    n = o(n, s);
  }
  return n;
}
function Tp(e, t, r, o, n) {
  if (Array.isArray(o)) {
    if (t.buffer) {
      t._b.push([o, n]);
      return;
    }
    const a = new Set(
      o.map((s) => (t.set(s), s.key))
    );
    typeof n == "string" ? t.filter(
      (s) => s.type !== n || a.has(s.key)
    ) : typeof n == "function" && t.filter((s) => !n(s) || a.has(s.key));
  } else
    for (const a in o) {
      const s = r.at(a);
      s ? s.store.apply(o[a], n) : Pp(r, t, a, o[a], n);
    }
}
function Op(e, ...t) {
  const r = `${e.name}-set`, o = (n) => /* @__PURE__ */ ye({
    key: na(n),
    type: "error",
    value: n,
    meta: { source: r, autoClear: !0 }
  });
  return t.filter((n) => !!n).map((n) => {
    if (typeof n == "string" && (n = [n]), Array.isArray(n))
      return n.map((a) => o(a));
    {
      const a = {};
      for (const s in n)
        Array.isArray(n[s]) ? a[s] = n[s].map(
          (l) => o(l)
        ) : a[s] = [o(n[s])];
      return a;
    }
  });
}
function Pp(e, t, r, o, n) {
  var s;
  const a = t._m;
  a.has(r) || a.set(r, []), t._r || (t._r = El(e, t)), (s = a.get(r)) == null || s.push([o, n]);
}
function El(e, t) {
  return e.on(
    "child.deep",
    ({ payload: r }) => {
      t._m.forEach((o, n) => {
        e.at(n) === r && (o.forEach(([a, s]) => {
          r.store.apply(a, s);
        }), t._m.delete(n));
      }), t._m.size === 0 && t._r && (e.off(t._r), t._r = void 0);
    }
  );
}
function Vp(e, t) {
  t.buffer = !1, t._b.forEach(([r, o]) => t.apply(r, o)), t._b = [];
}
function Fp() {
  const e = {};
  let t;
  return {
    count: (...r) => Np(t, e, ...r),
    init(r) {
      t = r, r.on("message-added.deep", Fa(e, 1)), r.on("message-removed.deep", Fa(e, -1));
    },
    merge: (r) => Na(t, e, r),
    settled(r) {
      return q(e, r) ? e[r].promise : Promise.resolve();
    },
    unmerge: (r) => Na(t, e, r, !0),
    value(r) {
      return q(e, r) ? e[r].count : 0;
    }
  };
}
function Np(e, t, r, o, n = 0) {
  if (o = Bp(o || r), !q(t, r)) {
    const a = {
      condition: o,
      count: 0,
      name: r,
      node: e,
      promise: Promise.resolve(),
      resolve: () => {
      }
      // eslint-disable-line @typescript-eslint/no-empty-function
    };
    t[r] = a, n = e.store.reduce(
      (s, l) => s + a.condition(l) * 1,
      n
    ), e.each((s) => {
      s.ledger.count(a.name, a.condition), n += s.ledger.value(a.name);
    });
  }
  return Ml(t[r], n).promise;
}
function Bp(e) {
  return typeof e == "function" ? e : (t) => t.type === e;
}
function Ml(e, t) {
  const r = e.count, o = e.count + t;
  return e.count = o, r === 0 && o !== 0 ? (e.node.emit(`unsettled:${e.name}`, e.count, !1), e.promise = new Promise((n) => e.resolve = n)) : r !== 0 && o === 0 && (e.node.emit(`settled:${e.name}`, e.count, !1), e.resolve()), e.node.emit(`count:${e.name}`, e.count, !1), e;
}
function Fa(e, t) {
  return (r) => {
    for (const o in e) {
      const n = e[o];
      n.condition(r.payload) && Ml(n, t);
    }
  };
}
function Na(e, t, r, o = !1) {
  const n = e;
  for (const a in t) {
    const s = t[a].condition;
    o || r.ledger.count(a, s);
    const l = r.ledger.value(a) * (o ? -1 : 1);
    if (e) {
      do
        e.ledger.count(a, s, l), e = e.parent;
      while (e);
      e = n;
    }
  }
}
var ia = /* @__PURE__ */ new Map(), io = /* @__PURE__ */ new Map(), ua = Il();
function Rp(e) {
  e.props.id && (ia.set(e.props.id, e), io.set(e, e.props.id), ua(e, {
    payload: e,
    name: e.props.id,
    bubble: !1,
    origin: e
  }));
}
function Hp(e) {
  if (io.has(e)) {
    const t = io.get(e);
    io.delete(e), ia.delete(t), ua(e, {
      payload: null,
      name: t,
      bubble: !1,
      origin: e
    });
  }
}
function Wr(e) {
  return ia.get(e);
}
function Wp(e, t) {
  return ua.on(e, t);
}
function En(e, t, r) {
  let o = !0;
  return t in e.config._t ? o = !1 : e.emit(`config:${t}`, r, !1), t in e.props || (e.emit("prop", { prop: t, value: r }), e.emit(`prop:${t}`, r)), o;
}
function jp(e = {}) {
  const t = /* @__PURE__ */ new Set(), r = {
    ...e,
    _add: (n) => t.add(n),
    _rm: (n) => t.delete(n)
  };
  return new Proxy(r, {
    set(n, a, s, l) {
      return typeof a == "string" && t.forEach((i) => En(i, a, s)), Reflect.set(n, a, s, l);
    }
  });
}
function Tl(e, t) {
  const r = (t || document).getElementById(e);
  if (r instanceof HTMLFormElement) {
    const o = new Event("submit", { cancelable: !0, bubbles: !0 });
    r.dispatchEvent(o);
    return;
  }
  _t(151, e);
}
function Kp(e) {
  const t = (r) => {
    for (const o in r.store) {
      const n = r.store[o];
      n.type === "error" || n.type === "ui" && o === "incomplete" ? r.store.remove(o) : n.type === "state" && r.store.set({ ...n, value: !1 });
    }
  };
  t(e), e.walk(t);
}
function Ol(e, t) {
  const r = typeof e == "string" ? Wr(e) : e;
  if (r) {
    const o = (s) => Fe(s.props.initial) || (s.type === "group" ? {} : s.type === "list" ? [] : void 0);
    r._e.pause(r);
    const n = Fe(t);
    return t && !Te(t) && (r.props.initial = Gt(n) ? rr(n) : n, r.props._init = r.props.initial), r.input(o(r), !1), r.walk((s) => {
      s.type === "list" && s.sync || s.input(o(s), !1);
    }), r.input(
      Te(n) && n ? n : o(r),
      !1
    ), r.type !== "input" && t && !Te(t) && Gt(t) && r.walk((s) => {
      s.props.initial = Gt(s.value) ? rr(s.value) : s.value, s.props._init = s.props.initial;
    }), r._e.play(r), Kp(r), r.emit("reset", r), r;
  }
  _t(152, e);
}
var zp = {
  delimiter: ".",
  delay: 0,
  locale: "en",
  rootClasses: (e) => ({ [`formkit-${Ll(e)}`]: !0 })
}, Pl = Symbol("index"), Mn = Symbol("removed"), Tn = Symbol("moved"), Vl = Symbol("inserted");
function Yp(e) {
  return e.type === "list" && Array.isArray(e._value);
}
function jr(e) {
  return e && typeof e == "object" && e.__FKNode__ === !0;
}
var uo = (e, t, r) => {
  Se(102, [e, r]);
}, Zp = {
  _c: te(gd, uo, !1),
  add: te(sd),
  addProps: te(ad),
  address: te(hd, uo, !1),
  at: te(vd),
  bubble: te(Dp),
  clearErrors: te(Sd),
  calm: te(rd),
  config: te(!1),
  define: te(nd),
  disturb: te(td),
  destroy: te(od),
  extend: te(Ld),
  hydrate: te(Qp),
  index: te(fd, cd, !1),
  input: te(Bl),
  each: te(ud),
  emit: te(kp),
  find: te($d),
  on: te(Sp),
  off: te(Cp),
  parent: te(!1, ld),
  plugins: te(!1),
  remove: te(id),
  root: te(xd, uo, !1),
  reset: te(kd),
  resetConfig: te(dd),
  setErrors: te(Dd),
  submit: te(_d),
  t: te(wd),
  use: te(pa),
  name: te(md, !1, !1),
  walk: te(pd)
};
function Up() {
  return new Map(Object.entries(Zp));
}
function te(e, t, r = !0) {
  return {
    get: e ? (o, n) => r ? (...a) => e(o, n, ...a) : e(o, n) : !1,
    set: t !== void 0 ? t : uo.bind(null)
  };
}
function qp() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(e, {
    get(t, r) {
      return e.has(r) || e.set(r, aa()), e.get(r);
    }
  });
}
var Fl = 0, Gp = 0;
function Xp(e) {
  var t, r;
  return ((t = e.parent) == null ? void 0 : t.type) === "list" ? Pl : e.name || `${((r = e.props) == null ? void 0 : r.type) || "input"}_${++Fl}`;
}
function Nl(e) {
  return e.type === "group" ? rr(
    e.value && typeof e.value == "object" && !Array.isArray(e.value) ? e.value : {}
  ) : e.type === "list" ? rr(Array.isArray(e.value) ? e.value : []) : e.value;
}
function Bl(e, t, r, o = !0) {
  return t._value = Jp(e, e.hook.input.dispatch(r)), e.emit("input", t._value), e.isCreated && e.type === "input" && j(t._value, t.value) && !e.props.mergeStrategy ? (e.emit("commitRaw", t.value), t.settled) : (t.isSettled && e.disturb(), o ? (t._tmo && clearTimeout(t._tmo), t._tmo = setTimeout(
    vo,
    e.props.delay,
    e,
    t
  )) : vo(e, t), t.settled);
}
function Jp(e, t) {
  switch (e.type) {
    case "input":
      break;
    case "group":
      (!t || typeof t != "object") && Se(107, [e, t]);
      break;
    case "list":
      Array.isArray(t) || Se(108, [e, t]);
      break;
  }
  return t;
}
function vo(e, t, r = !0, o = !0) {
  t._value = t.value = e.hook.commit.dispatch(t._value), e.type !== "input" && o && e.hydrate(), e.emit("commitRaw", t.value), e.emit("commit", t.value), r && e.calm();
}
function Rl(e, { name: t, value: r, from: o }) {
  if (!Object.isFrozen(e._value)) {
    if (Yp(e)) {
      const n = r === Mn ? [] : r === Tn && typeof o == "number" ? e._value.splice(o, 1) : [r];
      e._value.splice(
        t,
        r === Tn || o === Vl ? 0 : 1,
        ...n
      );
      return;
    }
    r !== Mn ? e._value[t] = r : delete e._value[t];
  }
}
function Qp(e, t) {
  const r = t._value;
  return e.type === "list" && e.sync && ed(e, t), t.children.forEach((o) => {
    if (typeof r == "object")
      if (o.name in r) {
        const n = o.type !== "input" || r[o.name] && typeof r[o.name] == "object" ? rr(r[o.name]) : r[o.name];
        if (!o.isSettled || (!Gt(n) || o.props.mergeStrategy) && j(n, o._value))
          return;
        o.input(n, !1);
      } else
        (e.type !== "list" || typeof o.name == "number") && Rl(t, { name: o.name, value: o.value }), r.__init || (o.type === "group" ? o.input({}, !1) : o.type === "list" ? o.input([], !1) : o.input(void 0, !1));
  }), e;
}
function ed(e, t) {
  const r = e._value;
  if (!Array.isArray(r))
    return;
  const o = [], n = new Set(t.children), a = /* @__PURE__ */ new Map();
  r.forEach((l, i) => {
    if (t.children[i] && t.children[i]._value === l)
      o.push(t.children[i]), n.delete(t.children[i]);
    else {
      o.push(null);
      const u = a.get(l) || [];
      u.push(i), a.set(l, u);
    }
  }), n.size && a.size && n.forEach((l) => {
    if (a.has(l._value)) {
      const i = a.get(l._value), u = i.shift();
      o[u] = l, n.delete(l), i.length || a.delete(l._value);
    }
  });
  const s = [];
  for (a.forEach((l) => {
    s.push(...l);
  }); n.size && s.length; ) {
    const l = n.values().next().value, i = s.shift();
    if (i === void 0)
      break;
    o[i] = l, n.delete(l);
  }
  s.forEach((l, i) => {
    o[l] = Md({ value: i });
  }), n.size && n.forEach((l) => {
    if (!("__FKP" in l)) {
      const i = l._c.parent;
      if (!i || Td(i))
        return;
      i.ledger.unmerge(l), l._c.parent = null, l.destroy();
    }
  }), t.children = o;
}
function td(e, t) {
  var r;
  return t._d <= 0 && (t.isSettled = !1, e.emit("settled", !1, !1), t.settled = new Promise((o) => {
    t._resolve = o;
  }), e.parent && ((r = e.parent) == null || r.disturb())), t._d++, e;
}
function rd(e, t, r) {
  var o;
  if (r !== void 0 && e.type !== "input") {
    Rl(t, r);
    const n = !!(e.config.mergeStrategy && e.config.mergeStrategy[r.name]);
    return vo(e, t, !0, n);
  }
  t._d > 0 && t._d--, t._d === 0 && (t.isSettled = !0, e.emit("settled", !0, !1), e.parent && ((o = e.parent) == null || o.calm({ name: e.name, value: t.value })), t._resolve && t._resolve(t.value));
}
function od(e, t) {
  e.emit("destroying", e), e.store.filter(() => !1), e.parent && e.parent.remove(e), Hp(e), e.emit("destroyed", e), t._e.flush(), t._value = t.value = void 0;
  for (const r in t.context)
    delete t.context[r];
  t.plugins.clear(), t.context = null;
}
function nd(e, t, r) {
  t.type = r.type;
  const o = wt(r);
  e.props.__propDefs = Hl(
    e.props.__propDefs ?? [],
    (o == null ? void 0 : o.props) || []
  ), o.props = e.props.__propDefs, t.props.definition = o, t.value = t._value = Nl({
    type: e.type,
    value: t.value
  }), r.forceTypeProp && (e.props.type && (e.props.originalType = e.props.type), t.props.type = r.forceTypeProp), r.family && (t.props.family = r.family), r.features && r.features.forEach((n) => n(e)), r.props && e.addProps(r.props), e.emit("defined", r);
}
function ad(e, t, r) {
  const o = Array.isArray(r) ? r : Object.keys(r), n = Array.isArray(r) ? {} : o.reduce((s, l) => ("default" in r[l] && (s[l] = r[l].default), s), {});
  if (e.props.attrs) {
    const s = { ...e.props.attrs };
    e.props._emit = !1;
    for (const i in s) {
      const u = Xt(i);
      o.includes(u) && (e.props[u] = s[i], delete s[i]);
    }
    Array.isArray(r) || o.forEach((i) => {
      "default" in r[i] && e.props[i] === void 0 && (e.props[i] = n[i]);
    });
    const l = Fe(t._value);
    e.props.initial = e.type !== "input" ? rr(l) : l, e.props._emit = !0, e.props.attrs = s;
  }
  const a = Hl(e.props.__propDefs ?? [], r);
  return e.props.definition && (e.props.definition.props = a), e.props.__propDefs = a, e.emit("added-props", r), e;
}
function On(e) {
  return Array.isArray(e) ? e.reduce((t, r) => (t[r] = {}, t), {}) : e;
}
function Hl(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? e.concat(t) : xt(On(e), On(t));
}
function sd(e, t, r, o) {
  if (e.type === "input" && Se(100, e), r.parent && r.parent !== e && r.parent.remove(r), !t.children.includes(r)) {
    if (o !== void 0 && e.type === "list") {
      const n = t.children[o];
      n && "__FKP" in n ? (r._c.uid = n.uid, t.children.splice(o, 1, r)) : t.children.splice(o, 0, r), Array.isArray(e.value) && e.value.length < t.children.length && e.disturb().calm({
        name: o,
        value: r.value,
        from: Vl
      });
    } else
      t.children.push(r);
    r.isSettled || e.disturb();
  }
  if (r.parent !== e) {
    if (r.parent = e, r.parent !== e)
      return e.remove(r), r.parent.add(r), e;
  } else
    r.use(e.plugins);
  return vo(e, t, !1), e.ledger.merge(r), e.emit("child", r), e;
}
function ld(e, t, r, o) {
  return jr(o) ? (e.parent && e.parent !== o && e.parent.remove(e), t.parent = o, e.resetConfig(), o.children.includes(e) ? e.use(o.plugins) : o.add(e), !0) : o === null ? (t.parent = null, !0) : !1;
}
function id(e, t, r) {
  const o = t.children.indexOf(r);
  if (o !== -1) {
    r.isSettled && e.disturb(), t.children.splice(o, 1);
    let n = R(r.props.preserve), a = r.parent;
    for (; n === void 0 && a; )
      n = R(a.props.preserve), a = a.parent;
    n ? e.calm() : e.calm({
      name: e.type === "list" ? o : r.name,
      value: Mn
    }), r.parent = null, r.config._rmn = r;
  }
  return e.ledger.unmerge(r), e.emit("childRemoved", r), e;
}
function ud(e, t, r) {
  t.children.forEach((o) => !("__FKP" in o) && r(o));
}
function pd(e, t, r, o = !1, n = !1) {
  t.children.some((a) => {
    if ("__FKP" in a)
      return !1;
    const s = r(a);
    return o && s === !1 ? !0 : n && s === !1 ? !1 : a.walk(r, o, n);
  });
}
function dd(e, t) {
  const r = e.parent || void 0;
  t.config = Wl(e.config._t, r), e.walk((o) => o.resetConfig());
}
function pa(e, t, r, o = !0, n = !0) {
  return Array.isArray(r) || r instanceof Set ? (r.forEach((a) => pa(e, t, a)), e) : (t.plugins.has(r) || (n && typeof r.library == "function" && r.library(e), o && r(e) !== !1 && (t.plugins.add(r), e.children.forEach((a) => a.use(r)))), e);
}
function cd(e, t, r, o) {
  if (jr(e.parent)) {
    const n = e.parent.children, a = o >= n.length ? n.length - 1 : o < 0 ? 0 : o, s = n.indexOf(e);
    return s === -1 ? !1 : (n.splice(s, 1), n.splice(a, 0, e), e.parent.children = n, e.parent.type === "list" && e.parent.disturb().calm({ name: a, value: Tn, from: s }), !0);
  }
  return !1;
}
function fd(e) {
  if (e.parent) {
    const t = [...e.parent.children].indexOf(e);
    return t === -1 ? e.parent.children.length : t;
  }
  return -1;
}
function gd(e, t) {
  return t;
}
function md(e, t) {
  var r;
  return ((r = e.parent) == null ? void 0 : r.type) === "list" ? e.index : t.name !== Pl ? t.name : e.index;
}
function hd(e, t) {
  return t.parent ? t.parent.address.concat([e.name]) : [e.name];
}
function vd(e, t, r) {
  const o = typeof r == "string" ? r.split(e.config.delimiter) : r;
  if (!o.length)
    return;
  const n = o[0];
  let a = e.parent;
  for (a || (String(o[0]) === String(e.name) && o.shift(), a = e), n === "$parent" && o.shift(); a && o.length; ) {
    const s = o.shift();
    switch (s) {
      case "$root":
        a = e.root;
        break;
      case "$parent":
        a = a.parent;
        break;
      case "$self":
        a = e;
        break;
      default:
        a = a.children.find(
          (l) => !("__FKP" in l) && String(l.name) === String(s)
        ) || bd(a, s);
    }
  }
  return a || void 0;
}
function bd(e, t) {
  const r = String(t).match(/^(find)\((.*)\)$/);
  if (r) {
    const [, o, n] = r, a = n.split(",").map((s) => s.trim());
    switch (o) {
      case "find":
        return e.find(a[0], a[1]);
      default:
        return;
    }
  }
}
function $d(e, t, r, o) {
  return yd(e, r, o);
}
function yd(e, t, r = "name") {
  const o = typeof r == "string" ? (a) => a[r] == t : r, n = [e];
  for (; n.length; ) {
    const a = n.shift();
    if (!("__FKP" in a)) {
      if (o(a, t))
        return a;
      n.push(...a.children);
    }
  }
}
function xd(e) {
  let t = e;
  for (; t.parent; )
    t = t.parent;
  return t;
}
function Wl(e = {}, t) {
  let r;
  return new Proxy(e, {
    get(...o) {
      const n = o[1];
      if (n === "_t")
        return e;
      const a = Reflect.get(...o);
      if (a !== void 0)
        return a;
      if (t) {
        const s = t.config[n];
        if (s !== void 0)
          return s;
      }
      if (e.rootConfig && typeof n == "string") {
        const s = e.rootConfig[n];
        if (s !== void 0)
          return s;
      }
      return n === "delay" && (r == null ? void 0 : r.type) === "input" ? 20 : zp[n];
    },
    set(...o) {
      const n = o[1], a = o[2];
      if (n === "_n")
        return r = a, e.rootConfig && e.rootConfig._add(r), !0;
      if (n === "_rmn")
        return e.rootConfig && e.rootConfig._rm(r), r = void 0, !0;
      if (!j(e[n], a, !1)) {
        const s = Reflect.set(...o);
        return r && (r.emit(`config:${n}`, a, !1), En(r, n, a), r.walk((l) => En(l, n, a), !1, !0)), s;
      }
      return !0;
    }
  });
}
function wd(e, t, r, o = "ui") {
  const n = typeof r == "string" ? { key: r, value: r, type: o } : r, a = e.hook.text.dispatch(n);
  return e.emit("text", a, !1), a.value;
}
function _d(e) {
  const t = e.name;
  do {
    if (e.props.isForm === !0)
      break;
    e.parent || Se(106, t), e = e.parent;
  } while (e);
  e.props.id && Tl(e.props.id, e.props.__root);
}
function kd(e, t, r) {
  return Ol(e, r);
}
function Dd(e, t, r, o) {
  const n = `${e.name}-set`, a = e.hook.setErrors.dispatch({ localErrors: r, childErrors: o });
  return Op(e, a.localErrors, a.childErrors).forEach(
    (s) => {
      e.store.apply(s, (l) => l.meta.source === n);
    }
  ), e;
}
function Sd(e, t, r = !0, o) {
  return e.store.filter((n) => !(o === void 0 || n.meta.source === o), "error"), r && (o = o || `${e.name}-set`, e.walk((n) => {
    n.store.filter((a) => !(a.type === "error" && a.meta && a.meta.source === o));
  })), e;
}
function Cd(e) {
  const t = {
    initial: typeof e == "object" ? Fe(e) : e
  };
  let r, o = !0, n = {};
  return new Proxy(t, {
    get(...a) {
      var c, f, p, g;
      const [s, l] = a;
      let i;
      q(t, l) ? (i = Reflect.get(...a), (c = n[l]) != null && c.boolean && (i = _p(i))) : r && typeof l == "string" && r.config[l] !== void 0 ? (i = r.config[l], l === "mergeStrategy" && (r == null ? void 0 : r.type) === "input" && Ot(i) && r.name in i && (i = i[r.name])) : i = (f = n[l]) == null ? void 0 : f.default;
      const u = (p = n[l]) == null ? void 0 : p.getter;
      return (g = n[l]) != null && g.boolean && (i = !!i), u ? u(i, r) : i;
    },
    set(a, s, l, i) {
      var p;
      if (s === "_n")
        return r = l, !0;
      if (s === "_emit")
        return o = l, !0;
      let { prop: u, value: c } = r.hook.prop.dispatch({
        prop: s,
        value: l
      });
      const f = (p = n[u]) == null ? void 0 : p.setter;
      if (c = f ? f(c, r) : c, !j(t[u], c, !1) || typeof c == "object") {
        const g = Reflect.set(a, u, c, i);
        return u === "__propDefs" && (n = On(c)), o && (r.emit("prop", { prop: u, value: c }), typeof u == "string" && r.emit(`prop:${u}`, c)), g;
      }
      return !0;
    }
  });
}
function Ld(e, t, r, o) {
  return t.traps.set(r, o), e;
}
function Id(e, t) {
  if (e.props.definition)
    return e.define(e.props.definition);
  for (const r of t) {
    if (e.props.definition)
      return;
    typeof r.library == "function" && r.library(e);
  }
}
function Ad(e) {
  const t = Nl(e), r = Wl(e.config || {}, e.parent);
  return {
    _d: 0,
    _e: Il(),
    uid: Symbol(),
    _resolve: !1,
    _tmo: !1,
    _value: t,
    children: fp(e.children || []),
    config: r,
    hook: qp(),
    isCreated: !1,
    isSettled: !0,
    ledger: Fp(),
    name: Xp(e),
    parent: e.parent || null,
    plugins: /* @__PURE__ */ new Set(),
    props: Cd(t),
    settled: Promise.resolve(t),
    store: Lp(!0),
    sync: e.sync || !1,
    traps: Up(),
    type: e.type || "input",
    value: t
  };
}
function Ed(e, t) {
  var o, n;
  const r = (o = t.props) == null ? void 0 : o.id;
  if (r || (n = t.props) == null || delete n.id, e.ledger.init(e.store._n = e.props._n = e.config._n = e), e.props._emit = !1, Object.assign(
    e.props,
    r ? {} : { id: `input_${Gp++}` },
    t.props ?? {}
  ), e.props._emit = !0, Id(
    e,
    /* @__PURE__ */ new Set([
      ...t.plugins || [],
      ...e.parent ? e.parent.plugins : []
    ])
  ), t.plugins)
    for (const a of t.plugins)
      pa(e, e._c, a, !0, !1);
  return e.each((a) => e.add(a)), e.parent && e.parent.add(e, t.index), e.type === "input" && e.children.length && Se(100, e), Bl(e, e._c, e._value, !1), e.store.release(), r && Rp(e), e.emit("created", e), e.isCreated = !0, e;
}
function Md(e) {
  return {
    __FKP: !0,
    uid: Symbol(),
    name: (e == null ? void 0 : e.name) ?? `p_${Fl++}`,
    value: (e == null ? void 0 : e.value) ?? null,
    _value: (e == null ? void 0 : e.value) ?? null,
    type: (e == null ? void 0 : e.type) ?? "input",
    props: {},
    use: () => {
    },
    input(t) {
      return this._value = t, this.value = t, Promise.resolve();
    },
    isSettled: !0
  };
}
function Td(e) {
  return "__FKP" in e;
}
function Od(e) {
  const t = e || {}, r = Ad(t), o = new Proxy(r, {
    get(...n) {
      const [, a] = n;
      if (a === "__FKNode__")
        return !0;
      const s = r.traps.get(a);
      return s && s.get ? s.get(o, r) : Reflect.get(...n);
    },
    set(...n) {
      const [, a, s] = n, l = r.traps.get(a);
      return l && l.set ? l.set(o, r, a, s) : Reflect.set(...n);
    }
  });
  return Ed(o, t);
}
function Pt(e) {
  return typeof e != "string" && q(e, "$el");
}
function Or(e) {
  return typeof e != "string" && q(e, "$cmp");
}
function zt(e) {
  return !e || typeof e == "string" ? !1 : q(e, "if") && q(e, "then");
}
function Pd(e) {
  return typeof e != "string" && "$formkit" in e;
}
function Vd(e) {
  if (typeof e == "string")
    return {
      $el: "text",
      children: e
    };
  if (Pd(e)) {
    const {
      $formkit: t,
      for: r,
      if: o,
      children: n,
      bind: a,
      ...s
    } = e;
    return Object.assign(
      {
        $cmp: "FormKit",
        props: { ...s, type: t }
      },
      o ? { if: o } : {},
      r ? { for: r } : {},
      n ? { children: n } : {},
      a ? { bind: a } : {}
    );
  }
  return e;
}
function Ve(e) {
  let t;
  const r = /* @__PURE__ */ new Set(), o = function($, h) {
    return typeof $ == "function" ? $(h) : $;
  }, n = [
    {
      "&&": (v, $, h) => o(v, h) && o($, h),
      "||": (v, $, h) => o(v, h) || o($, h)
    },
    {
      "===": (v, $, h) => o(v, h) === o($, h),
      "!==": (v, $, h) => o(v, h) !== o($, h),
      "==": (v, $, h) => o(v, h) == o($, h),
      "!=": (v, $, h) => o(v, h) != o($, h),
      ">=": (v, $, h) => o(v, h) >= o($, h),
      "<=": (v, $, h) => o(v, h) <= o($, h),
      ">": (v, $, h) => o(v, h) > o($, h),
      "<": (v, $, h) => o(v, h) < o($, h)
    },
    {
      "+": (v, $, h) => o(v, h) + o($, h),
      "-": (v, $, h) => o(v, h) - o($, h)
    },
    {
      "*": (v, $, h) => o(v, h) * o($, h),
      "/": (v, $, h) => o(v, h) / o($, h),
      "%": (v, $, h) => o(v, h) % o($, h)
    }
  ], a = n.reduce((v, $) => v.concat(Object.keys($)), []), s = new Set(a.map((v) => v.charAt(0)));
  function l(v, $, h, m) {
    const k = v.filter((y) => y.startsWith($));
    return k.length ? k.find((y) => m.length >= h + y.length && m.substring(h, h + y.length) === y ? y : !1) : !1;
  }
  function i(v, $, h = 1) {
    let m = h ? $.substring(v + 1).trim() : $.substring(0, v).trim();
    if (!m.length)
      return -1;
    if (!h) {
      const y = m.split("").reverse(), D = y.findIndex((x) => s.has(x));
      m = y.slice(D).join("");
    }
    const k = m[0];
    return n.findIndex((y) => {
      const D = Object.keys(y);
      return !!l(D, k, 0, m);
    });
  }
  function u(v, $) {
    let h = "";
    const m = $.length;
    let k = 0;
    for (let y = v; y < m; y++) {
      const D = $.charAt(y);
      if (D === "(")
        k++;
      else if (D === ")")
        k--;
      else if (k === 0 && D === " ")
        continue;
      if (k === 0 && l(a, D, y, $))
        return [h, y - 1];
      h += D;
    }
    return [h, $.length - 1];
  }
  function c(v, $ = 0) {
    const h = n[$], m = v.length, k = Object.keys(h);
    let y = 0, D = !1, x = null, C = "", w = null, L, d = "", _ = "", I = "", O = "", N = 0;
    const z = (W, G) => {
      W ? I += G : C += G;
    };
    for (let W = 0; W < m; W++)
      if (d = _, _ = v.charAt(W), (_ === "'" || _ === '"') && d !== "\\" && (y === 0 && !D || y && !O)) {
        y ? O = _ : D = _, z(y, _);
        continue;
      } else if (D && (_ !== D || d === "\\") || O && (_ !== O || d === "\\")) {
        z(y, _);
        continue;
      } else if (D === _) {
        D = !1, z(y, _);
        continue;
      } else if (O === _) {
        O = !1, z(y, _);
        continue;
      } else {
        if (_ === " ")
          continue;
        if (_ === "(")
          y === 0 ? N = W : I += _, y++;
        else if (_ === ")")
          if (y--, y === 0) {
            const G = typeof C == "string" && C.startsWith("$") ? C : void 0, $e = G && v.charAt(W + 1) === ".";
            let ge = "";
            $e && ([ge, W] = u(W + 2, v));
            const Pe = x ? $ : i(N, v, 0), Ge = i(W, v);
            Pe === -1 && Ge === -1 ? (C = f(I, -1, G, ge), typeof C == "string" && (C = I)) : x && (Pe >= Ge || Ge === -1) && $ === Pe ? (w = x.bind(null, f(I, -1, G, ge)), x = null, C = "") : Ge > Pe && $ === Ge ? C = f(I, -1, G, ge) : C += `(${I})${$e ? `.${ge}` : ""}`, I = "";
          } else
            I += _;
        else if (y === 0 && (L = l(k, _, W, v))) {
          W === 0 && Se(103, [L, v]), W += L.length - 1, W === v.length - 1 && Se(104, [L, v]), x ? C && (w = x.bind(null, f(C, $)), x = h[L].bind(null, w), C = "") : w ? (x = h[L].bind(null, f(w, $)), w = null) : (x = h[L].bind(null, f(C, $)), C = "");
          continue;
        } else
          z(y, _);
      }
    return C && x && (x = x.bind(null, f(C, $))), x = !x && w ? w : x, !x && C && (x = (W, G) => typeof W == "function" ? W(G) : W, x = x.bind(null, f(C, $))), !x && !C && Se(105, v), x;
  }
  function f(v, $, h, m) {
    if (h) {
      const k = f(h, n.length);
      let y, D = m ? Ve(`$${m}`) : !1;
      if (typeof k == "function") {
        const x = $p(String(v)).map(
          (C) => f(C, -1)
        );
        return (C) => {
          const w = k(C);
          return typeof w != "function" ? (_t(150, h), w) : (y = w(
            ...x.map(
              (L) => typeof L == "function" ? L(C) : L
            )
          ), D && (D = D.provide((L) => {
            const d = t(L);
            return L.reduce(
              (I, O) => {
                if (O === m || (m == null ? void 0 : m.startsWith(`${O}(`))) {
                  const z = yp(y, O);
                  I[O] = () => z;
                } else
                  I[O] = d[O];
                return I;
              },
              {}
            );
          })), D ? D() : y);
        };
      }
    } else if (typeof v == "string") {
      if (v === "true")
        return !0;
      if (v === "false")
        return !1;
      if (v === "undefined")
        return;
      if (vp(v))
        return bp(v.substring(1, v.length - 1));
      if (!isNaN(+v))
        return Number(v);
      if ($ < n.length - 1)
        return c(v, $ + 1);
      if (v.startsWith("$")) {
        const k = v.substring(1);
        return r.add(k), function(D) {
          return k in D ? D[k]() : void 0;
        };
      }
      return v;
    }
    return v;
  }
  const p = c(
    e.startsWith("$:") ? e.substring(2) : e
  ), g = Array.from(r);
  function b(v) {
    return t = v, Object.assign(
      // @ts-ignore - @rollup/plugin-typescript doesn't like this
      p.bind(null, v(g)),
      { provide: b }
    );
  }
  return Object.assign(p, {
    provide: b
  });
}
function po(e, t, r) {
  return r ? typeof r == "string" ? r.split(" ").reduce(
    (n, a) => Object.assign(n, { [a]: !0 }),
    {}
  ) : typeof r == "function" ? po(
    e,
    t,
    r(t, e)
  ) : r : {};
}
function Fd(e, t, ...r) {
  const o = r.reduce((n, a) => {
    if (!a)
      return Jo(n);
    const { $reset: s, ...l } = a;
    return Jo(s ? l : Object.assign(n, l));
  }, {});
  return Object.keys(
    e.hook.classes.dispatch({ property: t, classes: o }).classes
  ).filter((n) => o[n]).join(" ") || null;
}
function Jo(e) {
  const t = "$remove:";
  let r = !1;
  const o = Object.keys(e).filter((n) => (e[n] && n.startsWith(t) && (r = !0), e[n]));
  return o.length > 1 && r && o.filter((a) => a.startsWith(t)).map((a) => {
    const s = a.substring(t.length);
    e[s] = !1, e[a] = !1;
  }), e;
}
function Nd(e, t, r) {
  const o = Wr(e);
  o ? o.setErrors(t, r) : _t(651, e);
}
function Bd(e, t = !0) {
  const r = Wr(e);
  r ? r.clearErrors(t) : _t(652, e);
}
var bo = "1.6.2";
function jl(...e) {
  const t = e.reduce(
    (o, n) => xt(o, n),
    {}
  ), r = () => {
  };
  return r.library = function(o) {
    const n = Xt(o.props.type);
    q(t, n) && o.define(t[n]);
  }, r;
}
var Rd = [
  "classes",
  "config",
  "delay",
  "errors",
  "id",
  "index",
  "inputErrors",
  "library",
  "modelValue",
  "onUpdate:modelValue",
  "name",
  "number",
  "parent",
  "plugins",
  "sectionsSchema",
  "type",
  "validation",
  "validationLabel",
  "validationMessages",
  "validationRules",
  // Runtime event props:
  "onInput",
  "onInputRaw",
  "onUpdate:modelValue",
  "onNode",
  "onSubmit",
  "onSubmitInvalid",
  "onSubmitRaw"
];
function Ro(e) {
  return e && typeof e == "object" && "group" in e && Array.isArray(e.options);
}
function $o(e, t = { count: 1 }) {
  return Array.isArray(e) ? e.map(
    (r) => {
      if (typeof r == "string" || typeof r == "number")
        return {
          label: String(r),
          value: String(r)
        };
      if (typeof r == "object") {
        if ("group" in r)
          return r.options = $o(r.options || [], t), r;
        "value" in r && typeof r.value != "string" && Object.assign(r, {
          value: `__mask_${t.count++}`,
          __original: r.value
        });
      }
      return r;
    }
  ) : Object.keys(e).map((r) => ({
    label: e[r],
    value: r
  }));
}
function Vt(e, t, r = !1) {
  if (Array.isArray(e)) {
    for (const o of e)
      if (!(typeof o != "object" && o)) {
        if (Ro(o)) {
          const n = Vt(o.options, t, !0);
          if (n !== void 0)
            return n;
        } else if (t == o.value)
          return "__original" in o ? o.__original : o.value;
      }
  }
  return r ? void 0 : t;
}
function or(e, t) {
  return e === null && t === void 0 || e === void 0 && t === null ? !1 : e == t ? !0 : yt(e) && yt(t) ? j(e, t) : !1;
}
function We(e) {
  e.hook.prop((t, r) => {
    var o;
    return t.prop === "options" && (typeof t.value == "function" ? (e.props.optionsLoader = t.value, t.value = []) : ((o = e.props)._normalizeCounter ?? (o._normalizeCounter = { count: 1 }), t.value = $o(t.value, e.props._normalizeCounter))), r(t);
  });
}
// @__NO_SIDE_EFFECTS__
function U(e, t, r = !1) {
  return (...o) => {
    const n = (a) => {
      const s = !t || typeof t == "string" ? { $el: t } : t();
      return (Pt(s) || Or(s)) && (s.meta || (s.meta = { section: e }), o.length && !s.children && (s.children = [
        ...o.map(
          (l) => typeof l == "function" ? l(a) : l
        )
      ]), Pt(s) && (s.attrs = {
        class: `$classes.${e}`,
        ...s.attrs || {}
      })), {
        if: `$slots.${e}`,
        then: `$slots.${e}`,
        else: e in a ? /* @__PURE__ */ Mt(s, a[e]) : s
      };
    };
    return n._s = e, r ? /* @__PURE__ */ Hd(n) : n;
  };
}
// @__NO_SIDE_EFFECTS__
function Hd(e) {
  return (t) => [e(t)];
}
function Pr(e) {
  return !!(e && typeof e == "object" && ("$el" in e || "$cmp" in e || "$formkit" in e));
}
// @__NO_SIDE_EFFECTS__
function Mt(e, t = {}) {
  return typeof e == "string" ? Pr(t) || typeof t == "string" ? t : e : Array.isArray(e) ? Pr(t) ? t : e : xt(e, t);
}
var Wd = /* @__PURE__ */ U("actions", () => ({
  $el: "div",
  if: "$actions"
})), yo = /* @__PURE__ */ U("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "$type",
    name: "$node.props.altName || $node.name",
    disabled: "$option.attrs.disabled || $disabled",
    onInput: "$handlers.toggleChecked",
    checked: "$fns.eq($_value, $onValue)",
    onBlur: "$handlers.blur",
    value: "$: true",
    id: "$id",
    "aria-describedby": {
      if: "$options.length",
      then: {
        if: "$option.help",
        then: '$: "help-" + $option.attrs.id',
        else: void 0
      },
      else: {
        if: "$help",
        then: '$: "help-" + $id',
        else: void 0
      }
    }
  }
})), Kl = /* @__PURE__ */ U("optionHelp", () => ({
  $el: "div",
  if: "$option.help",
  attrs: {
    id: '$: "help-" + $option.attrs.id'
  }
})), xo = /* @__PURE__ */ U("inner", "span"), wo = /* @__PURE__ */ U("label", "span"), zl = /* @__PURE__ */ U("option", () => ({
  $el: "li",
  for: ["option", "$options"],
  attrs: {
    "data-disabled": "$option.attrs.disabled || $disabled || undefined"
  }
})), Yl = /* @__PURE__ */ U("options", "ul"), _o = /* @__PURE__ */ U("wrapper", () => ({
  $el: "label",
  attrs: {
    "data-disabled": {
      if: "$options.length",
      then: void 0,
      else: "$disabled || undefined"
    },
    "data-checked": {
      if: "$options == undefined",
      then: "$fns.eq($_value, $onValue) || undefined",
      else: "$fns.isChecked($option.value) || undefined"
    }
  }
})), jd = /* @__PURE__ */ U("input", () => ({
  $el: "button",
  bind: "$attrs",
  attrs: {
    type: "$type",
    disabled: "$disabled",
    name: "$node.name",
    id: "$id"
  }
})), Kd = /* @__PURE__ */ U("default", null), ko = /* @__PURE__ */ U("decorator", () => ({
  $el: "span",
  attrs: {
    "aria-hidden": "true"
  }
})), Zl = /* @__PURE__ */ U("fieldset", () => ({
  $el: "fieldset",
  attrs: {
    id: "$id",
    "aria-describedby": {
      if: "$help",
      then: '$: "help-" + $id',
      else: void 0
    }
  }
})), zd = /* @__PURE__ */ U("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "file",
    disabled: "$disabled",
    name: "$node.name",
    onChange: "$handlers.files",
    onBlur: "$handlers.blur",
    id: "$id",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  }
})), Yd = /* @__PURE__ */ U("fileItem", () => ({
  $el: "li",
  for: ["file", "$value"]
})), Zd = /* @__PURE__ */ U("fileList", () => ({
  $el: "ul",
  if: "$value.length",
  attrs: {
    "data-has-multiple": "$_hasMultipleFiles"
  }
})), Ud = /* @__PURE__ */ U("fileName", () => ({
  $el: "span",
  attrs: {
    class: "$classes.fileName"
  }
})), Ba = /* @__PURE__ */ U("fileRemove", () => ({
  $el: "button",
  attrs: {
    type: "button",
    onClick: "$handlers.resetFiles"
  }
})), qd = /* @__PURE__ */ U("form", () => ({
  $el: "form",
  bind: "$attrs",
  attrs: {
    id: "$id",
    name: "$node.name",
    onSubmit: "$handlers.submit",
    "data-loading": "$state.loading || undefined"
  }
})), da = /* @__PURE__ */ U("wrapper", null, !0), ut = /* @__PURE__ */ U("help", () => ({
  $el: "div",
  if: "$help",
  attrs: {
    id: '$: "help-" + $id'
  }
})), ve = (e, t) => (/* @__PURE__ */ U(`${e}Icon`, () => {
  const r = `_raw${e.charAt(0).toUpperCase()}${e.slice(1)}Icon`;
  return {
    if: `$${e}Icon && $${r}`,
    $el: `${t || "span"}`,
    attrs: {
      class: `$classes.${e}Icon + " " + $classes.icon`,
      innerHTML: `$${r}`,
      onClick: `$handlers.iconClick(${e})`,
      role: `$fns.iconRole(${e})`,
      tabindex: `$fns.iconRole(${e}) === "button" && "0" || undefined`,
      for: {
        if: `${t === "label"}`,
        then: "$id"
      }
    }
  };
}))(), Ho = /* @__PURE__ */ U("inner", "div"), Wo = /* @__PURE__ */ U("label", () => ({
  $el: "label",
  if: "$label",
  attrs: {
    for: "$id"
  }
})), Ul = /* @__PURE__ */ U("legend", () => ({
  $el: "legend",
  if: "$label"
})), kt = /* @__PURE__ */ U("message", () => ({
  $el: "li",
  for: ["message", "$messages"],
  attrs: {
    key: "$message.key",
    id: "$id + '-' + $message.key",
    "data-message-type": "$message.type"
  }
})), Dt = /* @__PURE__ */ U("messages", () => ({
  $el: "ul",
  if: "$defaultMessagePlacement && $fns.length($messages)"
})), Gd = /* @__PURE__ */ U("noFiles", () => ({
  $el: "span",
  if: "$value.length == 0"
})), Xd = /* @__PURE__ */ U("optGroup", () => ({
  $el: "optgroup",
  bind: "$option.attrs",
  attrs: {
    label: "$option.group"
  }
})), Ra = /* @__PURE__ */ U("option", () => ({
  $el: "option",
  bind: "$option.attrs",
  attrs: {
    class: "$classes.option",
    value: "$option.value",
    selected: "$fns.isSelected($option)"
  }
})), Ha = /* @__PURE__ */ U("options", () => ({
  $el: null,
  if: "$options.length",
  for: ["option", "$option.options || $options"]
})), Bt = /* @__PURE__ */ U("outer", () => ({
  $el: "div",
  attrs: {
    key: "$id",
    "data-family": "$family || undefined",
    "data-type": "$type",
    "data-multiple": '$attrs.multiple || ($type != "select" && $options != undefined) || undefined',
    "data-has-multiple": "$_hasMultipleFiles",
    "data-disabled": '$: ($disabled !== "false" && $disabled) || undefined',
    "data-empty": "$state.empty || undefined",
    "data-complete": "$state.complete || undefined",
    "data-invalid": "$state.valid === false && $state.validationVisible || undefined",
    "data-errors": "$state.errors || undefined",
    "data-submitted": "$state.submitted || undefined",
    "data-prefix-icon": "$_rawPrefixIcon !== undefined || undefined",
    "data-suffix-icon": "$_rawSuffixIcon !== undefined || undefined",
    "data-prefix-icon-click": "$onPrefixIconClick !== undefined || undefined",
    "data-suffix-icon-click": "$onSuffixIconClick !== undefined || undefined"
  }
})), pt = /* @__PURE__ */ U("prefix", null), Jd = /* @__PURE__ */ U("input", () => ({
  $el: "select",
  bind: "$attrs",
  attrs: {
    id: "$id",
    "data-placeholder": "$fns.showPlaceholder($_value, $placeholder)",
    disabled: "$disabled",
    class: "$classes.input",
    name: "$node.name",
    onChange: "$handlers.onChange",
    onInput: "$handlers.selectInput",
    onBlur: "$handlers.blur",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  }
})), Qd = /* @__PURE__ */ U("submit", () => ({
  $cmp: "FormKit",
  bind: "$submitAttrs",
  props: {
    type: "submit",
    label: "$submitLabel"
  }
})), dt = /* @__PURE__ */ U("suffix", null), ql = /* @__PURE__ */ U("input", () => ({
  $el: "input",
  bind: "$attrs",
  attrs: {
    type: "$type",
    disabled: "$disabled",
    name: "$node.name",
    onInput: "$handlers.DOMInput",
    onBlur: "$handlers.blur",
    value: "$_value",
    id: "$id",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  }
})), ec = /* @__PURE__ */ U("input", () => ({
  $el: "textarea",
  bind: "$attrs",
  attrs: {
    disabled: "$disabled",
    name: "$node.name",
    onInput: "$handlers.DOMInput",
    onBlur: "$handlers.blur",
    value: "$_value",
    id: "$id",
    "aria-describedby": "$describedBy",
    "aria-required": "$state.required || undefined"
  },
  children: "$initialValue"
})), Kr = /* @__PURE__ */ U("wrapper", "div"), tc = 0;
function Gl(e) {
  (e.type === "group" || e.type === "list") && e.plugins.add(rc);
}
function rc(e) {
  e.props.type === "radio" && (e.addProps(["altName"]), e.props.altName = `${e.name}_${tc++}`);
}
function Xl(e) {
  return function(t, r) {
    return t.prop === "options" && Array.isArray(t.value) && (t.value = t.value.map((o) => {
      var n;
      return (n = o.attrs) != null && n.id ? o : xt(o, {
        attrs: {
          id: `${e.props.id}-option-${na(String(o.value))}`
        }
      });
    }), e.props.type === "checkbox" && !Array.isArray(e.value) && (e.isCreated ? e.input([], !1) : e.on("created", () => {
      Array.isArray(e.value) || e.input([], !1);
    }))), r(t);
  };
}
function oc(e, t) {
  const r = t.target;
  if (r instanceof HTMLInputElement) {
    const o = Array.isArray(e.props.options) ? Vt(e.props.options, r.value) : r.value;
    Array.isArray(e.props.options) && e.props.options.length ? Array.isArray(e._value) ? e._value.some((n) => or(o, n)) ? e.input(
      e._value.filter(
        (n) => !or(o, n)
      )
    ) : e.input([...e._value, o]) : e.input([o]) : r.checked ? e.input(e.props.onValue) : e.input(e.props.offValue);
  }
}
function nc(e, t) {
  var r, o;
  return (r = e.context) == null || r.value, (o = e.context) == null || o._value, Array.isArray(e._value) ? e._value.some(
    (n) => or(Vt(e.props.options, t), n)
  ) : !1;
}
function ac(e) {
  e.on("created", () => {
    var t, r;
    (t = e.context) != null && t.handlers && (e.context.handlers.toggleChecked = oc.bind(null, e)), (r = e.context) != null && r.fns && (e.context.fns.isChecked = nc.bind(null, e)), q(e.props, "onValue") || (e.props.onValue = !0), q(e.props, "offValue") || (e.props.offValue = !1);
  }), e.hook.prop(Xl(e));
}
function X(e, t) {
  return (r) => {
    r.props[`${e}Icon`] === void 0 && (r.props[`${e}Icon`] = t.startsWith("<svg") ? t : `default:${t}`);
  };
}
function jo(e) {
  e.on("created", () => {
    "disabled" in e.props && (e.props.disabled = R(e.props.disabled), e.config.disabled = R(e.props.disabled));
  }), e.hook.prop(({ prop: t, value: r }, o) => (r = t === "disabled" ? R(r) : r, o({ prop: t, value: r }))), e.on("prop:disabled", ({ payload: t }) => {
    e.config.disabled = R(t);
  });
}
function re(e, t) {
  return (r) => {
    r.store.set(
      /* @__PURE__ */ ye({
        key: e,
        type: "ui",
        value: t || e,
        meta: {
          localize: !0,
          i18nArgs: [r]
        }
      })
    );
  };
}
var Qo = typeof window < "u";
function Jl(e) {
  e.target instanceof HTMLElement && e.target.hasAttribute("data-file-hover") && e.target.removeAttribute("data-file-hover");
}
function Wa(e, t) {
  t.target instanceof HTMLInputElement ? e === "dragover" && t.target.setAttribute("data-file-hover", "true") : t.preventDefault(), e === "drop" && Jl(t);
}
function sc(e) {
  re("noFiles", "Select file")(e), re("removeAll", "Remove all")(e), re("remove")(e), e.addProps(["_hasMultipleFiles"]), Qo && (window._FormKit_File_Drop || (window.addEventListener(
    "dragover",
    Wa.bind(null, "dragover")
  ), window.addEventListener("drop", Wa.bind(null, "drop")), window.addEventListener("dragleave", Jl), window._FormKit_File_Drop = !0)), e.hook.input((t, r) => r(Array.isArray(t) ? t : [])), e.on("input", ({ payload: t }) => {
    e.props._hasMultipleFiles = Array.isArray(t) && t.length > 1 ? !0 : void 0;
  }), e.on("reset", () => {
    if (e.props.id && Qo) {
      const t = document.getElementById(e.props.id);
      t && (t.value = "");
    }
  }), e.on("created", () => {
    Array.isArray(e.value) || e.input([], !1), e.context && (e.context.handlers.resetFiles = (t) => {
      if (t.preventDefault(), e.input([]), e.props.id && Qo) {
        const r = document.getElementById(e.props.id);
        r && (r.value = ""), r == null || r.focus();
      }
    }, e.context.handlers.files = (t) => {
      var o, n;
      const r = [];
      if (t.target instanceof HTMLInputElement && t.target.files) {
        for (let a = 0; a < t.target.files.length; a++) {
          let s;
          (s = t.target.files.item(a)) && r.push({ name: s.name, file: s });
        }
        e.input(r);
      }
      e.context && (e.context.files = r), typeof ((o = e.props.attrs) == null ? void 0 : o.onChange) == "function" && ((n = e.props.attrs) == null || n.onChange(t));
    });
  });
}
var ja = /* @__PURE__ */ ye({
  key: "loading",
  value: !0,
  visible: !1
});
async function lc(e, t) {
  const r = Math.random();
  if (e.props._submitNonce = r, t.preventDefault(), await e.settled, e.ledger.value("validating") && (e.store.set(ja), await e.ledger.settled("validating"), e.store.remove("loading"), e.props._submitNonce !== r))
    return;
  const o = (n) => n.store.set(
    /* @__PURE__ */ ye({
      key: "submitted",
      value: !0,
      visible: !1
    })
  );
  if (e.walk(o), o(e), e.emit("submit-raw"), typeof e.props.onSubmitRaw == "function" && e.props.onSubmitRaw(t, e), e.ledger.value("blocking"))
    typeof e.props.onSubmitInvalid == "function" && e.props.onSubmitInvalid(e), e.props.incompleteMessage !== !1 && Ql(e);
  else if (typeof e.props.onSubmit == "function") {
    const n = e.props.onSubmit(
      e.hook.submit.dispatch(wt(e.value)),
      e
    );
    if (n instanceof Promise) {
      const a = e.props.disabled === void 0 && e.props.submitBehavior !== "live";
      a && (e.props.disabled = !0), e.store.set(ja), await n, a && (e.props.disabled = !1), e.store.remove("loading");
    }
  } else
    t.target instanceof HTMLFormElement && t.target.submit();
}
function Ql(e) {
  e.store.set(
    /* @__PURE__ */ ye({
      blocking: !1,
      key: "incomplete",
      meta: {
        localize: e.props.incompleteMessage === void 0,
        i18nArgs: [{ node: e }],
        showAsMessage: !0
      },
      type: "ui",
      value: e.props.incompleteMessage || "Form incomplete."
    })
  );
}
function ic(e) {
  var t;
  e.props.isForm = !0, e.ledger.count("validating", (r) => r.key === "validating"), (t = e.props).submitAttrs ?? (t.submitAttrs = {
    disabled: e.props.disabled
  }), e.on("prop:disabled", ({ payload: r }) => {
    e.props.submitAttrs = { ...e.props.submitAttrs, disabled: r };
  }), e.on("created", () => {
    var r;
    (r = e.context) != null && r.handlers && (e.context.handlers.submit = lc.bind(null, e)), q(e.props, "actions") || (e.props.actions = !0);
  }), e.on("prop:incompleteMessage", () => {
    e.store.incomplete && Ql(e);
  }), e.on("settled:blocking", () => e.store.remove("incomplete"));
}
function uc(e) {
  e.props.ignore === void 0 && (e.props.ignore = !0, e.parent = null);
}
function pc(e) {
  e.on("created", () => {
    e.context && (e.context.initialValue = e.value || "");
  });
}
function ei(e) {
  if (typeof e.props.number > "u")
    return;
  const t = ["number", "range", "hidden"].includes(e.props.type);
  e.hook.input((r, o) => {
    if (r === "")
      return o(void 0);
    const n = e.props.number === "integer" ? parseInt(r) : parseFloat(r);
    return Number.isFinite(n) ? o(n) : o(t ? void 0 : r);
  });
}
function dc(e, t) {
  t.target instanceof HTMLInputElement && e.input(Vt(e.props.options, t.target.value));
}
function cc(e, t) {
  var r, o;
  return (r = e.context) == null || r.value, (o = e.context) == null || o._value, or(Vt(e.props.options, t), e._value);
}
function fc(e) {
  e.on("created", () => {
    var t, r;
    Array.isArray(e.props.options) || _t(350, {
      node: e,
      inputType: "radio"
    }), (t = e.context) != null && t.handlers && (e.context.handlers.toggleChecked = dc.bind(null, e)), (r = e.context) != null && r.fns && (e.context.fns.isChecked = cc.bind(null, e));
  }), e.hook.prop(Xl(e));
}
function gc(e, t) {
  if (Ro(t))
    return !1;
  e.context && e.context.value;
  const r = "__original" in t ? t.__original : t.value;
  return Array.isArray(e._value) ? e._value.some((o) => or(o, r)) : (e._value === void 0 || e._value === null && !ti(e.props.options, null)) && t.attrs && t.attrs["data-is-placeholder"] ? !0 : or(r, e._value);
}
function ti(e, t) {
  return e.some((r) => Ro(r) ? ti(r.options, t) : ("__original" in r ? r.__original : r.value) === t);
}
async function mc(e, t) {
  var r;
  typeof ((r = e.props.attrs) == null ? void 0 : r.onChange) == "function" && (await new Promise((o) => setTimeout(o, 0)), await e.settled, e.props.attrs.onChange(t));
}
function hc(e, t) {
  const r = t.target, o = r.hasAttribute("multiple") ? Array.from(r.selectedOptions).map(
    (n) => Vt(e.props.options, n.value)
  ) : Vt(e.props.options, r.value);
  e.input(o);
}
function Ka(e, t) {
  return e.some(
    (r) => r.attrs && r.attrs["data-is-placeholder"]
  ) ? e : [
    {
      label: t,
      value: "",
      attrs: {
        hidden: !0,
        disabled: !0,
        "data-is-placeholder": "true"
      }
    },
    ...e
  ];
}
function ri(e) {
  const t = e.length > 0 ? e[0] : void 0;
  if (t)
    return Ro(t) ? ri(t.options) : "__original" in t ? t.__original : t.value;
}
function vc(e) {
  e.on("created", () => {
    var r, o, n;
    const t = R((r = e.props.attrs) == null ? void 0 : r.multiple);
    !t && e.props.placeholder && Array.isArray(e.props.options) && (e.hook.prop(({ prop: a, value: s }, l) => (a === "options" && (s = Ka(s, e.props.placeholder)), l({ prop: a, value: s }))), e.props.options = Ka(
      e.props.options,
      e.props.placeholder
    )), t ? e.value === void 0 && e.input([], !1) : e.context && !e.context.options && (e.props.attrs = Object.assign({}, e.props.attrs, {
      value: e._value
    }), e.on("input", ({ payload: a }) => {
      e.props.attrs = Object.assign({}, e.props.attrs, {
        value: a
      });
    })), (o = e.context) != null && o.handlers && (e.context.handlers.selectInput = hc.bind(null, e), e.context.handlers.onChange = mc.bind(null, e)), (n = e.context) != null && n.fns && (e.context.fns.isSelected = gc.bind(null, e), e.context.fns.showPlaceholder = (a, s) => {
      if (!Array.isArray(e.props.options))
        return !1;
      const l = e.props.options.some(
        (i) => {
          if (i.attrs && "data-is-placeholder" in i.attrs)
            return !1;
          const u = "__original" in i ? i.__original : i.value;
          return j(a, u);
        }
      );
      return s && !l ? !0 : void 0;
    });
  }), e.hook.input((t, r) => {
    var o, n, a;
    return !e.props.placeholder && t === void 0 && Array.isArray((o = e.props) == null ? void 0 : o.options) && e.props.options.length && !R((a = (n = e.props) == null ? void 0 : n.attrs) == null ? void 0 : a.multiple) && (t = ri(e.props.options)), r(t);
  });
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  return !!(zt(e) && e.if && e.if.startsWith("$slots.") && typeof e.then == "string" && e.then.startsWith("$slots.") && "else" in e);
}
// @__NO_SIDE_EFFECTS__
function rt(e, t, r) {
  const o = (n) => {
    const a = t(n);
    if (r || Pr(a) && "if" in a || /* @__PURE__ */ Vr(a)) {
      const s = {
        if: e,
        then: a
      };
      return r && (s.else = r(n)), s;
    } else
      /* @__PURE__ */ Vr(a) ? Object.assign(a.else, { if: e }) : Pr(a) && Object.assign(a, { if: e });
    return a;
  };
  return o._s = cr(), o;
}
// @__NO_SIDE_EFFECTS__
function Jt(e, t) {
  const r = (o) => {
    const n = e({});
    return /* @__PURE__ */ Vr(n) ? (Array.isArray(n.else) || (n.else = /* @__PURE__ */ Mt(
      /* @__PURE__ */ Mt(n.else, t),
      e._s ? o[e._s] : {}
    )), n) : /* @__PURE__ */ Mt(
      /* @__PURE__ */ Mt(n, t),
      e._s ? o[e._s] : {}
    );
  };
  return r._s = e._s, r;
}
var za = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Bt(
    /* @__PURE__ */ Dt(/* @__PURE__ */ kt("$message.value")),
    /* @__PURE__ */ Kr(
      /* @__PURE__ */ jd(
        /* @__PURE__ */ ve("prefix"),
        /* @__PURE__ */ pt(),
        /* @__PURE__ */ Kd("$label || $ui.submit.value"),
        /* @__PURE__ */ dt(),
        /* @__PURE__ */ ve("suffix")
      )
    ),
    /* @__PURE__ */ ut("$help")
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "button",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [re("submit"), uc],
  /**
   * A key to use for memoizing the schema. This is used to prevent the schema
   * from needing to be stringified when performing a memo lookup.
   */
  schemaMemoKey: "h6st4epl3j8"
}, bc = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Bt(
    /* @__PURE__ */ rt(
      "$options == undefined",
      /**
       * Single checkbox structure.
       */
      /* @__PURE__ */ _o(
        /* @__PURE__ */ xo(/* @__PURE__ */ pt(), /* @__PURE__ */ yo(), /* @__PURE__ */ ko(/* @__PURE__ */ ve("decorator")), /* @__PURE__ */ dt()),
        /* @__PURE__ */ Jt(/* @__PURE__ */ wo("$label"), {
          if: "$label"
        })
      ),
      /**
       * Multi checkbox structure.
       */
      /* @__PURE__ */ Zl(
        /* @__PURE__ */ Ul("$label"),
        /* @__PURE__ */ ut("$help"),
        /* @__PURE__ */ Yl(
          /* @__PURE__ */ zl(
            /* @__PURE__ */ _o(
              /* @__PURE__ */ xo(
                /* @__PURE__ */ pt(),
                /* @__PURE__ */ Jt(/* @__PURE__ */ yo(), {
                  bind: "$option.attrs",
                  attrs: {
                    id: "$option.attrs.id",
                    value: "$option.value",
                    checked: "$fns.isChecked($option.value)"
                  }
                }),
                /* @__PURE__ */ ko(/* @__PURE__ */ ve("decorator")),
                /* @__PURE__ */ dt()
              ),
              /* @__PURE__ */ Jt(/* @__PURE__ */ wo("$option.label"), {
                if: "$option.label"
              })
            ),
            /* @__PURE__ */ Kl("$option.help")
          )
        )
      )
    ),
    // Help text only goes under the input when it is a single.
    /* @__PURE__ */ rt("$options == undefined && $help", /* @__PURE__ */ ut("$help")),
    /* @__PURE__ */ Dt(/* @__PURE__ */ kt("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "box",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["options", "onValue", "offValue", "optionsLoader"],
  /**
   * Additional features that should be added to your input
   */
  features: [
    We,
    ac,
    X("decorator", "checkboxDecorator")
  ],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "qje02tb3gu8"
}, $c = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Bt(
    /* @__PURE__ */ Kr(
      /* @__PURE__ */ Wo("$label"),
      /* @__PURE__ */ Ho(
        /* @__PURE__ */ ve("prefix", "label"),
        /* @__PURE__ */ pt(),
        /* @__PURE__ */ zd(),
        /* @__PURE__ */ Zd(
          /* @__PURE__ */ Yd(
            /* @__PURE__ */ ve("fileItem"),
            /* @__PURE__ */ Ud("$file.name"),
            /* @__PURE__ */ rt(
              "$value.length === 1",
              /* @__PURE__ */ Ba(
                /* @__PURE__ */ ve("fileRemove"),
                '$ui.remove.value + " " + $file.name'
              )
            )
          )
        ),
        /* @__PURE__ */ rt("$value.length > 1", /* @__PURE__ */ Ba("$ui.removeAll.value")),
        /* @__PURE__ */ Gd(/* @__PURE__ */ ve("noFiles"), "$ui.noFiles.value"),
        /* @__PURE__ */ dt(),
        /* @__PURE__ */ ve("suffix")
      )
    ),
    /* @__PURE__ */ ut("$help"),
    /* @__PURE__ */ Dt(/* @__PURE__ */ kt("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "text",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [
    sc,
    X("fileItem", "fileItem"),
    X("fileRemove", "fileRemove"),
    X("noFiles", "noFiles")
  ],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "9kqc4852fv8"
}, oi = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ qd(
    "$slots.default",
    /* @__PURE__ */ Dt(/* @__PURE__ */ kt("$message.value")),
    /* @__PURE__ */ Wd(/* @__PURE__ */ Qd())
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "group",
  /**
   * An array of extra props to accept for this input.
   */
  props: [
    "actions",
    "submit",
    "submitLabel",
    "submitAttrs",
    "submitBehavior",
    "incompleteMessage"
  ],
  /**
   * Additional features that should be added to your input
   */
  features: [ic, jo],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "5bg016redjo"
}, yc = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ da("$slots.default"),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "group",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [jo, Gl]
}, xc = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ ql(),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [ei]
}, wc = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ da("$slots.default"),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "list",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["sync", "dynamic"],
  /**
   * Additional features that should be added to your input
   */
  features: [jo, Gl]
}, _c = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ da(),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: []
}, kc = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Bt(
    /* @__PURE__ */ rt(
      "$options == undefined",
      /**
       * Single radio structure.
       */
      /* @__PURE__ */ _o(
        /* @__PURE__ */ xo(/* @__PURE__ */ pt(), /* @__PURE__ */ yo(), /* @__PURE__ */ ko(/* @__PURE__ */ ve("decorator")), /* @__PURE__ */ dt()),
        /* @__PURE__ */ Jt(/* @__PURE__ */ wo("$label"), {
          if: "$label"
        })
      ),
      /**
       * Multi radio structure.
       */
      /* @__PURE__ */ Zl(
        /* @__PURE__ */ Ul("$label"),
        /* @__PURE__ */ ut("$help"),
        /* @__PURE__ */ Yl(
          /* @__PURE__ */ zl(
            /* @__PURE__ */ _o(
              /* @__PURE__ */ xo(
                /* @__PURE__ */ pt(),
                /* @__PURE__ */ Jt(/* @__PURE__ */ yo(), {
                  bind: "$option.attrs",
                  attrs: {
                    id: "$option.attrs.id",
                    value: "$option.value",
                    checked: "$fns.isChecked($option.value)"
                  }
                }),
                /* @__PURE__ */ ko(/* @__PURE__ */ ve("decorator")),
                /* @__PURE__ */ dt()
              ),
              /* @__PURE__ */ Jt(/* @__PURE__ */ wo("$option.label"), {
                if: "$option.label"
              })
            ),
            /* @__PURE__ */ Kl("$option.help")
          )
        )
      )
    ),
    // Help text only goes under the input when it is a single.
    /* @__PURE__ */ rt("$options == undefined && $help", /* @__PURE__ */ ut("$help")),
    /* @__PURE__ */ Dt(/* @__PURE__ */ kt("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "box",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["options", "onValue", "offValue", "optionsLoader"],
  /**
   * Additional features that should be added to your input
   */
  features: [We, fc, X("decorator", "radioDecorator")],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "qje02tb3gu8"
}, ni = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Bt(
    /* @__PURE__ */ Kr(
      /* @__PURE__ */ Wo("$label"),
      /* @__PURE__ */ Ho(
        /* @__PURE__ */ ve("prefix"),
        /* @__PURE__ */ pt(),
        /* @__PURE__ */ Jd(
          /* @__PURE__ */ rt(
            "$slots.default",
            () => "$slots.default",
            /* @__PURE__ */ Ha(
              /* @__PURE__ */ rt(
                "$option.group",
                /* @__PURE__ */ Xd(/* @__PURE__ */ Ha(/* @__PURE__ */ Ra("$option.label"))),
                /* @__PURE__ */ Ra("$option.label")
              )
            )
          )
        ),
        /* @__PURE__ */ rt("$attrs.multiple !== undefined", () => "", /* @__PURE__ */ ve("select")),
        /* @__PURE__ */ dt(),
        /* @__PURE__ */ ve("suffix")
      )
    ),
    /* @__PURE__ */ ut("$help"),
    /* @__PURE__ */ Dt(/* @__PURE__ */ kt("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: ["options", "placeholder", "optionsLoader"],
  /**
   * Additional features that should be added to your input
   */
  features: [We, vc, X("select", "select")],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "cb119h43krg"
}, Dc = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Bt(
    /* @__PURE__ */ Kr(
      /* @__PURE__ */ Wo("$label"),
      /* @__PURE__ */ Ho(
        /* @__PURE__ */ ve("prefix", "label"),
        /* @__PURE__ */ pt(),
        /* @__PURE__ */ ec(),
        /* @__PURE__ */ dt(),
        /* @__PURE__ */ ve("suffix")
      )
    ),
    /* @__PURE__ */ ut("$help"),
    /* @__PURE__ */ Dt(/* @__PURE__ */ kt("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [pc],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "b1n0td79m9g"
}, xe = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /* @__PURE__ */ Bt(
    /* @__PURE__ */ Kr(
      /* @__PURE__ */ Wo("$label"),
      /* @__PURE__ */ Ho(
        /* @__PURE__ */ ve("prefix", "label"),
        /* @__PURE__ */ pt(),
        /* @__PURE__ */ ql(),
        /* @__PURE__ */ dt(),
        /* @__PURE__ */ ve("suffix")
      )
    ),
    /* @__PURE__ */ ut("$help"),
    /* @__PURE__ */ Dt(/* @__PURE__ */ kt("$message.value"))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: "input",
  /**
   * The family of inputs this one belongs too. For example "text" and "email"
   * are both part of the "text" family. This is primary used for styling.
   */
  family: "text",
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [ei],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: "c3cc4kflsg"
}, Sc = {
  button: za,
  submit: za,
  checkbox: bc,
  file: $c,
  form: oi,
  group: yc,
  hidden: xc,
  list: wc,
  meta: _c,
  radio: kc,
  select: ni,
  textarea: Dc,
  text: xe,
  color: xe,
  date: xe,
  datetimeLocal: xe,
  email: xe,
  month: xe,
  number: xe,
  password: xe,
  search: xe,
  tel: xe,
  time: xe,
  url: xe,
  week: xe,
  range: xe
}, ai = /* @__PURE__ */ new WeakSet();
function Fr(e, t) {
  const r = t || Object.assign(/* @__PURE__ */ new Map(), { active: !1 }), o = /* @__PURE__ */ new Map(), n = function(c) {
    var f;
    r.active && (r.has(e) || r.set(e, /* @__PURE__ */ new Set()), (f = r.get(e)) == null || f.add(c));
  }, a = function(c) {
    return new Proxy(c, {
      get(...f) {
        return typeof f[1] == "string" && n(`prop:${f[1]}`), Reflect.get(...f);
      }
    });
  }, s = function(c) {
    return new Proxy(c, {
      get(...f) {
        return f[1] === "value" ? (p) => (n(`count:${p}`), c.value(p)) : Reflect.get(...f);
      }
    });
  }, l = function(c, f) {
    return jr(c) ? Fr(c, r) : (f === "value" && n("commit"), f === "_value" && n("input"), f === "props" ? a(c) : f === "ledger" ? s(c) : (f === "children" && (n("child"), n("childRemoved")), c));
  }, {
    proxy: i,
    revoke: u
  } = Proxy.revocable(e, {
    get(...c) {
      switch (c[1]) {
        case "_node":
          return e;
        case "deps":
          return r;
        case "watch":
          return (p, g, b) => ii(i, p, g, b);
        case "observe":
          return () => {
            const p = new Map(r);
            return r.clear(), r.active = !0, p;
          };
        case "stopObserve":
          return () => {
            const p = new Map(r);
            return r.active = !1, p;
          };
        case "receipts":
          return o;
        case "kill":
          return () => {
            li(o), ai.add(c[2]), u();
          };
      }
      const f = Reflect.get(...c);
      return typeof f == "function" ? (...p) => {
        const g = f(...p);
        return l(g, c[1]);
      } : l(f, c[1]);
    }
  });
  return i;
}
function si(e, [t, r], o, n) {
  t.forEach((a, s) => {
    a.forEach((l) => {
      e.receipts.has(s) || e.receipts.set(s, {});
      const i = e.receipts.get(s) ?? {};
      i[l] = i[l] ?? [], i[l].push(s.on(l, o, n)), e.receipts.set(s, i);
    });
  }), r.forEach((a, s) => {
    a.forEach((l) => {
      if (e.receipts.has(s)) {
        const i = e.receipts.get(s);
        i && q(i, l) && (i[l].map(s.off), delete i[l], e.receipts.set(s, i));
      }
    });
  });
}
function li(e) {
  e.forEach((t, r) => {
    for (const o in t)
      t[o].map(r.off);
  }), e.clear();
}
function ii(e, t, r, o) {
  const n = (l) => {
    const i = e.stopObserve();
    si(
      e,
      ui(a, i),
      () => ii(e, t, r, o),
      o
    ), r && r(l);
  }, a = new Map(e.deps);
  e.observe();
  const s = t(e);
  s instanceof Promise ? s.then((l) => n(l)) : n(s);
}
function ui(e, t) {
  const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  return t.forEach((n, a) => {
    if (!e.has(a))
      r.set(a, n);
    else {
      const s = /* @__PURE__ */ new Set(), l = e.get(a);
      n.forEach(
        (i) => !(l != null && l.has(i)) && s.add(i)
      ), r.set(a, s);
    }
  }), e.forEach((n, a) => {
    if (!t.has(a))
      o.set(a, n);
    else {
      const s = /* @__PURE__ */ new Set(), l = t.get(a);
      n.forEach(
        (i) => !(l != null && l.has(i)) && s.add(i)
      ), o.set(a, s);
    }
  }), [r, o];
}
function pi(e) {
  return ai.has(e);
}
var di = function({ value: t }) {
  return ["yes", "on", "1", 1, !0, "true"].includes(t);
};
di.skipEmpty = !1;
var Cc = di, Lc = function({ value: e }, t = !1) {
  const r = Date.parse(t || /* @__PURE__ */ new Date()), o = Date.parse(String(e));
  return isNaN(o) ? !1 : o > r;
}, Ic = Lc, Ac = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("^\\p{L}+$", "u"),
    latin: /^[a-z]+$/i
  }, o = q(r, t) ? t : "default";
  return r[o].test(String(e));
}, Ec = Ac, Mc = function({ value: e }, t = "default") {
  const r = {
    default: /^[\p{L} ]+$/u,
    latin: /^[a-z ]+$/i
  }, o = q(r, t) ? t : "default";
  return r[o].test(String(e));
}, Tc = Mc, Oc = function({ value: e }, t = "default") {
  const r = {
    default: /^[0-9\p{L}]+$/u,
    latin: /^[0-9a-z]+$/i
  }, o = q(r, t) ? t : "default";
  return r[o].test(String(e));
}, Pc = Oc, Vc = function({ value: e }, t = !1) {
  const r = Date.parse(t || /* @__PURE__ */ new Date()), o = Date.parse(String(e));
  return isNaN(o) ? !1 : o < r;
}, Fc = Vc, Nc = function({ value: t }, r, o) {
  if (!isNaN(t) && !isNaN(r) && !isNaN(o)) {
    const n = 1 * t;
    r = Number(r), o = Number(o);
    const [a, s] = r <= o ? [r, o] : [o, r];
    return n >= 1 * a && n <= 1 * s;
  }
  return !1;
}, Bc = Nc, Ya = /(_confirm(?:ed)?)$/, Rc = function(t, r, o = "loose") {
  var a;
  r || (r = Ya.test(t.name) ? t.name.replace(Ya, "") : `${t.name}_confirm`);
  const n = (a = t.at(r)) == null ? void 0 : a.value;
  return o === "strict" ? t.value === n : t.value == n;
}, Hc = Rc, Wc = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("\\p{L}", "u"),
    latin: /[a-z]/i
  }, o = q(r, t) ? t : "default";
  return r[o].test(String(e));
}, jc = Wc, Kc = function({ value: e }, t = "default") {
  const r = {
    default: /[\p{L} ]/u,
    latin: /[a-z ]/i
  }, o = q(r, t) ? t : "default";
  return r[o].test(String(e));
}, zc = Kc, Yc = function({ value: e }, t = "default") {
  const r = {
    default: /[0-9\p{L}]/u,
    latin: /[0-9a-z]/i
  }, o = q(r, t) ? t : "default";
  return r[o].test(String(e));
}, Zc = Yc, Uc = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("\\p{Ll}", "u"),
    latin: /[a-z]/
  }, o = q(r, t) ? t : "default";
  return r[o].test(String(e));
}, qc = Uc, Gc = function({ value: t }) {
  return /[0-9]/.test(String(t));
}, Xc = Gc, Jc = function({ value: e }) {
  return /[!-/:-@[-`{-~]/.test(String(e));
}, Qc = Jc, ef = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("\\p{Lu}", "u"),
    latin: /[A-Z]/
  }, o = q(r, t) ? t : "default";
  return r[o].test(String(e));
}, tf = ef, rf = function({ value: t }, r, o) {
  r = r instanceof Date ? r.getTime() : Date.parse(r), o = o instanceof Date ? o.getTime() : Date.parse(o);
  const n = t instanceof Date ? t.getTime() : Date.parse(String(t));
  if (r && !o)
    o = r, r = Date.now();
  else if (!r || !n)
    return !1;
  return n >= r && n <= o;
}, of = rf, nf = function({ value: t }, r) {
  return r && typeof r == "string" ? hp(r).test(String(t)) : !isNaN(Date.parse(String(t)));
}, af = nf, sf = function({ value: t }) {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(t));
}, lf = sf, uf = function({ value: t }, ...r) {
  return typeof t == "string" && r.length ? r.some((o) => t.endsWith(o)) : typeof t == "string" && r.length === 0;
}, pf = uf, df = function({ value: t }, ...r) {
  return r.some((o) => typeof o == "object" ? j(o, t) : o == t);
}, cf = df, ff = function({ value: t }, r = 0, o = 1 / 0) {
  r = parseInt(r), o = isNaN(parseInt(o)) ? 1 / 0 : parseInt(o);
  const n = r <= o ? r : o, a = o >= r ? o : r;
  if (typeof t == "string" || Array.isArray(t))
    return t.length >= n && t.length <= a;
  if (t && typeof t == "object") {
    const s = Object.keys(t).length;
    return s >= n && s <= a;
  }
  return !1;
}, gf = ff, mf = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("^\\p{Ll}+$", "u"),
    allow_non_alpha: /^[0-9\p{Ll}!-/:-@[-`{-~]+$/u,
    allow_numeric: /^[0-9\p{Ll}]+$/u,
    allow_numeric_dashes: /^[0-9\p{Ll}-]+$/u,
    latin: /^[a-z]+$/
  }, o = q(r, t) ? t : "default";
  return r[o].test(String(e));
}, hf = mf, vf = function({ value: t }, ...r) {
  return r.some((o) => (typeof o == "string" && o.substr(0, 1) === "/" && o.substr(-1) === "/" && (o = new RegExp(o.substr(1, o.length - 2))), o instanceof RegExp ? o.test(String(t)) : o === t));
}, bf = vf, $f = function({ value: t }, r = 10) {
  return Array.isArray(t) ? t.length <= r : Number(t) <= Number(r);
}, yf = $f, xf = function({ value: t }, r = 1) {
  return Array.isArray(t) ? t.length >= r : Number(t) >= Number(r);
}, wf = xf, _f = function({ value: t }, ...r) {
  return !r.some((o) => typeof o == "object" ? j(o, t) : o === t);
}, kf = _f, Df = function({ value: t }) {
  return !isNaN(t);
}, Sf = Df, ci = function(e, ...t) {
  return Te(e.value) ? t.map((o) => {
    var n;
    return (n = e.at(o)) == null ? void 0 : n.value;
  }).some((o) => !Te(o)) : !0;
};
ci.skipEmpty = !1;
var Cf = ci, fi = function({ value: t }, r = "default") {
  return r === "trim" && typeof t == "string" ? !Te(t.trim()) : !Te(t);
};
fi.skipEmpty = !1;
var Lf = fi, If = function({ value: t }, ...r) {
  return typeof t == "string" && r.length ? r.some((o) => t.startsWith(o)) : typeof t == "string" && r.length === 0;
}, Af = If, Ef = function({ value: e }) {
  return /^[!-/:-@[-`{-~]+$/.test(String(e));
}, Mf = Ef, Tf = function({ value: e }, t = "default") {
  const r = {
    default: new RegExp("^\\p{Lu}+$", "u"),
    latin: /^[A-Z]+$/
  }, o = q(r, t) ? t : "default";
  return r[o].test(String(e));
}, Of = Tf, Pf = function({ value: t }, ...r) {
  try {
    const o = r.length ? r : ["http:", "https:"], n = new URL(String(t));
    return o.includes(n.protocol);
  } catch {
    return !1;
  }
}, Vf = Pf;
const Ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  accepted: Cc,
  alpha: Ec,
  alpha_spaces: Tc,
  alphanumeric: Pc,
  between: Bc,
  confirm: Hc,
  contains_alpha: jc,
  contains_alpha_spaces: zc,
  contains_alphanumeric: Zc,
  contains_lowercase: qc,
  contains_numeric: Xc,
  contains_symbol: Qc,
  contains_uppercase: tf,
  date_after: Ic,
  date_before: Fc,
  date_between: of,
  date_format: af,
  email: lf,
  ends_with: pf,
  is: cf,
  length: gf,
  lowercase: hf,
  matches: bf,
  max: yf,
  min: wf,
  not: kf,
  number: Sf,
  require_one: Cf,
  required: Lf,
  starts_with: Af,
  symbol: Mf,
  uppercase: Of,
  url: Vf
}, Symbol.toStringTag, { value: "Module" }));
var Pn = /* @__PURE__ */ ye({
  type: "state",
  blocking: !0,
  visible: !1,
  value: !0,
  key: "validating"
});
function Nf(e = {}) {
  return function(r) {
    let o = Fe(r.props.validationRules || {}), n = { ...e, ...o }, a = Fr(r);
    const s = { input: cr(), rerun: null, isPassing: !0 };
    let l = Fe(r.props.validation);
    r.on("prop:validation", ({ payload: u }) => i(u, o)), r.on(
      "prop:validationRules",
      ({ payload: u }) => i(l, u)
    );
    function i(u, c) {
      var f;
      j(Object.keys(o || {}), Object.keys(c || {})) && j(l, u) || (o = Fe(c), l = Fe(u), n = { ...e, ...o }, li(a.receipts), (f = r.props.parsedRules) == null || f.forEach((p) => {
        var g;
        p.messageObserver = (g = p.messageObserver) == null ? void 0 : g.kill();
      }), r.store.filter(() => !1, "validation"), r.props.parsedRules = Ua(u, n), a.kill(), a = Fr(r), Vn(a, r.props.parsedRules, s));
    }
    r.props.parsedRules = Ua(l, n), Vn(a, r.props.parsedRules, s);
  };
}
function Vn(e, t, r) {
  pi(e) || (r.input = cr(), r.isPassing = !0, e.store.filter((o) => !o.meta.removeImmediately, "validation"), t.forEach(
    (o) => o.debounce && clearTimeout(o.timer)
  ), t.length && (e.store.set(Pn), Fn(0, t, e, r, !1, () => {
    e.store.remove(Pn.key);
  })));
}
function Fn(e, t, r, o, n, a) {
  const s = t[e];
  if (!s)
    return a();
  const l = o.input;
  s.state = null;
  function i(u, c) {
    o.isPassing = o.isPassing && !!c, s.queued = !1;
    const f = r.stopObserve();
    si(
      r,
      ui(s.deps, f),
      function() {
        try {
          r.store.set(Pn);
        } catch {
        }
        s.queued = !0, o.rerun && clearTimeout(o.rerun), o.rerun = setTimeout(
          Vn,
          0,
          r,
          t,
          o
        );
      },
      "unshift"
      // We want these listeners to run before other events are emitted so the 'state.validating' will be reliable.
    ), s.deps = f, o.input === l && (s.state = c, c === !1 ? Hf(r, s, n || u) : Rf(r, s), t.length > e + 1 ? Fn(
      e + 1,
      t,
      r,
      o,
      n || u,
      a
    ) : a());
  }
  (!Te(r.value) || !s.skipEmpty) && (o.isPassing || s.force) ? s.queued ? Bf(s, r, (u) => {
    u instanceof Promise ? u.then((c) => i(!0, c)) : i(!1, u);
  }) : Fn(e + 1, t, r, o, n, a) : Te(r.value) && s.skipEmpty && o.isPassing ? (r.observe(), r.value, i(!1, o.isPassing)) : i(!1, null);
}
function Bf(e, t, r) {
  e.debounce ? e.timer = setTimeout(() => {
    t.observe(), r(e.rule(t, ...e.args));
  }, e.debounce) : (t.observe(), r(e.rule(t, ...e.args)));
}
function Rf(e, t) {
  const r = `rule_${t.name}`;
  t.messageObserver && (t.messageObserver = t.messageObserver.kill()), q(e.store, r) && e.store.remove(r);
}
function Hf(e, t, r) {
  pi(e) || (t.messageObserver || (t.messageObserver = Fr(e._node)), t.messageObserver.watch(
    (o) => jf(
      o,
      t
    ),
    (o) => {
      const n = Wf(e, t, o), a = /* @__PURE__ */ ye({
        blocking: t.blocking,
        key: `rule_${t.name}`,
        meta: {
          /**
           * Use this key instead of the message root key to produce i18n validation
           * messages.
           */
          messageKey: t.name,
          /**
           * For messages that were created *by or after* a debounced or async
           * validation rule — we make note of it so we can immediately remove them
           * as soon as the next commit happens.
           */
          removeImmediately: r,
          /**
           * Determines if this message should be passed to localization.
           */
          localize: !n,
          /**
           * The arguments that will be passed to the validation rules
           */
          i18nArgs: o
        },
        type: "validation",
        value: n || "This field is not valid."
      });
      e.store.set(a);
    }
  ));
}
function Wf(e, t, r) {
  const o = e.props.validationMessages && q(e.props.validationMessages, t.name) ? e.props.validationMessages[t.name] : void 0;
  return typeof o == "function" ? o(...r) : o;
}
function jf(e, t) {
  return [
    {
      node: e,
      name: gi(e),
      args: t.args
    }
  ];
}
function gi(e) {
  return typeof e.props.validationLabel == "function" ? e.props.validationLabel(e) : e.props.validationLabel || e.props.label || e.props.name || String(e.name);
}
var mi = "(?:[\\*+?()0-9]+)", hi = "[a-zA-Z][a-zA-Z0-9_]+", Kf = new RegExp(
  `^(${mi}?${hi})(?:\\:(.*)+)?$`,
  "i"
), zf = new RegExp(`^(${mi})(${hi})$`, "i"), Yf = /([\*+?]+)?(\(\d+\))([\*+?]+)?/, Za = /\(\d+\)/, Zf = {
  blocking: !0,
  debounce: 0,
  force: !1,
  skipEmpty: !0,
  name: ""
};
function Ua(e, t) {
  return e ? (typeof e == "string" ? Uf(e) : wt(e)).reduce((o, n) => {
    let a = n.shift();
    const s = {};
    if (typeof a == "string") {
      const [l, i] = Gf(a);
      q(t, l) && (a = t[l], Object.assign(s, i));
    }
    return typeof a == "function" && o.push({
      rule: a,
      args: n,
      timer: 0,
      state: null,
      queued: !0,
      deps: /* @__PURE__ */ new Map(),
      ...Zf,
      ...Xf(s, a)
    }), o;
  }, []) : [];
}
function Uf(e) {
  return e.split("|").reduce((t, r) => {
    const o = qf(r);
    return o && t.push(o), t;
  }, []);
}
function qf(e) {
  const t = e.trim();
  if (t) {
    const r = t.match(Kf);
    if (r && typeof r[1] == "string") {
      const o = r[1].trim(), n = r[2] && typeof r[2] == "string" ? r[2].split(",").map((a) => a.trim()) : [];
      return [o, ...n];
    }
  }
  return !1;
}
function Gf(e) {
  const t = e.match(zf);
  if (!t)
    return [e, { name: e }];
  const r = {
    "*": { force: !0 },
    "+": { skipEmpty: !1 },
    "?": { blocking: !1 }
  }, [, o, n] = t, a = Za.test(o) ? o.match(Yf) || [] : [, o];
  return [
    n,
    [a[1], a[2], a[3]].reduce(
      (s, l) => (l && (Za.test(l) ? s.debounce = parseInt(l.substr(1, l.length - 1)) : l.split("").forEach(
        (i) => q(r, i) && Object.assign(s, r[i])
      )), s),
      { name: n }
    )
  ];
}
function Xf(e, t) {
  return e.name || (e.name = t.ruleName || t.name), ["skipEmpty", "force", "debounce", "blocking"].reduce(
    (r, o) => (q(t, o) && !q(r, o) && Object.assign(r, {
      [o]: t[o]
    }), r),
    e
  );
}
function Q(e) {
  return e[0].toUpperCase() + e.substr(1);
}
function qa(e, t = "or") {
  return e.reduce((r, o, n) => (r += o, n <= e.length - 2 && e.length > 2 && (r += ", "), n === e.length - 2 && (r += `${e.length === 2 ? " " : ""}${t} `), r), "");
}
function Jr(e) {
  const t = typeof e == "string" ? new Date(Date.parse(e)) : e;
  return t instanceof Date ? new Intl.DateTimeFormat(void 0, {
    dateStyle: "medium",
    timeZone: "UTC"
  }).format(t) : "(unknown)";
}
function Jf(e, t) {
  return Number(e) >= Number(t) ? [t, e] : [e, t];
}
var Qf = {
  /**
   * Shown on a button for adding additional items.
   */
  add: "Add",
  /**
   * Shown when a button to remove items is visible.
   */
  remove: "Remove",
  /**
   * Shown when there are multiple items to remove at the same time.
   */
  removeAll: "Remove all",
  /**
   * Shown when all fields are not filled out correctly.
   */
  incomplete: "Sorry, not all fields are filled out correctly.",
  /**
   * Shown in a button inside a form to submit the form.
   */
  submit: "Submit",
  /**
   * Shown when no files are selected.
   */
  noFiles: "No file chosen",
  /**
   * Shown on buttons that move fields up in a list.
   */
  moveUp: "Move up",
  /**
   * Shown on buttons that move fields down in a list.
   */
  moveDown: "Move down",
  /**
   * Shown when something is actively loading.
   */
  isLoading: "Loading...",
  /**
   * Shown when there is more to load.
   */
  loadMore: "Load more",
  /**
   * Show on buttons that navigate state forward
   */
  next: "Next",
  /**
   * Show on buttons that navigate state backward
   */
  prev: "Previous",
  /**
   * Shown when adding all values.
   */
  addAllValues: "Add all values",
  /**
   * Shown when adding selected values.
   */
  addSelectedValues: "Add selected values",
  /**
   * Shown when removing all values.
   */
  removeAllValues: "Remove all values",
  /**
   * Shown when removing selected values.
   */
  removeSelectedValues: "Remove selected values",
  /**
   * Shown when there is a date to choose.
   */
  chooseDate: "Choose date",
  /**
   * Shown when there is a date to change.
   */
  changeDate: "Change date",
  /**
   * Shown above error summaries when someone attempts to submit a form with
   * errors and the developer has implemented `<FormKitSummary />`.
   */
  summaryHeader: "There were errors in your form.",
  /*
   * Shown when there is something to close
   */
  close: "Close",
  /**
   * Shown when there is something to open.
   */
  open: "Open"
}, eg = {
  /**
   * The value is not an accepted value.
   * @see {@link https://formkit.com/essentials/validation#accepted}
   */
  accepted({ name: e }) {
    return `Please accept the ${e}.`;
  },
  /**
   * The date is not after
   * @see {@link https://formkit.com/essentials/validation#date-after}
   */
  date_after({ name: e, args: t }) {
    return Array.isArray(t) && t.length ? `${Q(e)} must be after ${Jr(t[0])}.` : `${Q(e)} must be in the future.`;
  },
  /**
   * The value is not a letter.
   * @see {@link https://formkit.com/essentials/validation#alpha}
   */
  alpha({ name: e }) {
    return `${Q(e)} can only contain alphabetical characters.`;
  },
  /**
   * The value is not alphanumeric
   * @see {@link https://formkit.com/essentials/validation#alphanumeric}
   */
  alphanumeric({ name: e }) {
    return `${Q(e)} can only contain letters and numbers.`;
  },
  /**
   * The value is not letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#alpha-spaces}
   */
  alpha_spaces({ name: e }) {
    return `${Q(e)} can only contain letters and spaces.`;
  },
  /**
   * The value have no letter.
   * @see {@link https://formkit.com/essentials/validation#contains_alpha}
   */
  contains_alpha({ name: e }) {
    return `${Q(e)} must contain alphabetical characters.`;
  },
  /**
   * The value have no alphanumeric
   * @see {@link https://formkit.com/essentials/validation#contains_alphanumeric}
   */
  contains_alphanumeric({ name: e }) {
    return `${Q(e)} must contain letters or numbers.`;
  },
  /**
   * The value have no letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#contains_alpha-spaces}
   */
  contains_alpha_spaces({ name: e }) {
    return `${Q(e)} must contain letters or spaces.`;
  },
  /**
   * The value have no symbol
   * @see {@link https://formkit.com/essentials/validation#contains_symbol}
   */
  contains_symbol({ name: e }) {
    return `${Q(e)} must contain a symbol.`;
  },
  /**
   * The value have no uppercase
   * @see {@link https://formkit.com/essentials/validation#contains_uppercase}
   */
  contains_uppercase({ name: e }) {
    return `${Q(e)} must contain an uppercase letter.`;
  },
  /**
   * The value have no lowercase
   * @see {@link https://formkit.com/essentials/validation#contains_lowercase}
   */
  contains_lowercase({ name: e }) {
    return `${Q(e)} must contain a lowercase letter.`;
  },
  /**
   *  The value have no numeric
   * @see {@link https://formkit.com/essentials/validation#contains_numeric}
   */
  contains_numeric({ name: e }) {
    return `${Q(e)} must contain numbers.`;
  },
  /**
   * The value is not symbol
   * @see {@link https://formkit.com/essentials/validation#symbol}
   */
  symbol({ name: e }) {
    return `${Q(e)} must be a symbol.`;
  },
  /**
   * The value is not uppercase
   * @see {@link https://formkit.com/essentials/validation#uppercase}
   */
  uppercase({ name: e }) {
    return `${Q(e)} can only contain uppercase letters.`;
  },
  /**
   * The value is not lowercase
   * @see {@link https://formkit.com/essentials/validation#lowercase}
   */
  lowercase({ name: e, args: t }) {
    let r = "";
    return Array.isArray(t) && t.length && (t[0] === "allow_non_alpha" && (r = ", numbers and symbols"), t[0] === "allow_numeric" && (r = " and numbers"), t[0] === "allow_numeric_dashes" && (r = ", numbers and dashes")), `${Q(e)} can only contain lowercase letters${r}.`;
  },
  /**
   * The date is not before
   * @see {@link https://formkit.com/essentials/validation#date-before}
   */
  date_before({ name: e, args: t }) {
    return Array.isArray(t) && t.length ? `${Q(e)} must be before ${Jr(t[0])}.` : `${Q(e)} must be in the past.`;
  },
  /**
   * The value is not between two numbers
   * @see {@link https://formkit.com/essentials/validation#between}
   */
  between({ name: e, args: t }) {
    if (isNaN(t[0]) || isNaN(t[1]))
      return "This field was configured incorrectly and can’t be submitted.";
    const [r, o] = Jf(t[0], t[1]);
    return `${Q(e)} must be between ${r} and ${o}.`;
  },
  /**
   * The confirmation field does not match
   * @see {@link https://formkit.com/essentials/validation#confirm}
   */
  confirm({ name: e }) {
    return `${Q(e)} does not match.`;
  },
  /**
   * The value is not a valid date
   * @see {@link https://formkit.com/essentials/validation#date-format}
   */
  date_format({ name: e, args: t }) {
    return Array.isArray(t) && t.length ? `${Q(e)} is not a valid date, please use the format ${t[0]}` : "This field was configured incorrectly and can’t be submitted";
  },
  /**
   * Is not within expected date range
   * @see {@link https://formkit.com/essentials/validation#date-between}
   */
  date_between({ name: e, args: t }) {
    return `${Q(e)} must be between ${Jr(t[0])} and ${Jr(t[1])}`;
  },
  /**
   * Shown when the user-provided value is not a valid email address.
   * @see {@link https://formkit.com/essentials/validation#email}
   */
  email: "Please enter a valid email address.",
  /**
   * Does not end with the specified value
   * @see {@link https://formkit.com/essentials/validation#ends-with}
   */
  ends_with({ name: e, args: t }) {
    return `${Q(e)} doesn’t end with ${qa(t)}.`;
  },
  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#is}
   */
  is({ name: e }) {
    return `${Q(e)} is not an allowed value.`;
  },
  /**
   * Does not match specified length
   * @see {@link https://formkit.com/essentials/validation#length}
   */
  length({ name: e, args: [t = 0, r = 1 / 0] }) {
    const o = Number(t) <= Number(r) ? t : r, n = Number(r) >= Number(t) ? r : t;
    return o == 1 && n === 1 / 0 ? `${Q(e)} must be at least one character.` : o == 0 && n ? `${Q(e)} must be less than or equal to ${n} characters.` : o === n ? `${Q(e)} should be ${n} characters long.` : o && n === 1 / 0 ? `${Q(e)} must be greater than or equal to ${o} characters.` : `${Q(e)} must be between ${o} and ${n} characters.`;
  },
  /**
   * Value is not a match
   * @see {@link https://formkit.com/essentials/validation#matches}
   */
  matches({ name: e }) {
    return `${Q(e)} is not an allowed value.`;
  },
  /**
   * Exceeds maximum allowed value
   * @see {@link https://formkit.com/essentials/validation#max}
   */
  max({ name: e, node: { value: t }, args: r }) {
    return Array.isArray(t) ? `Cannot have more than ${r[0]} ${e}.` : `${Q(e)} must be no more than ${r[0]}.`;
  },
  /**
   * The (field-level) value does not match specified mime type
   * @see {@link https://formkit.com/essentials/validation#mime}
   */
  mime({ name: e, args: t }) {
    return t[0] ? `${Q(e)} must be of the type: ${t[0]}` : "No file formats allowed.";
  },
  /**
   * Does not fulfill minimum allowed value
   * @see {@link https://formkit.com/essentials/validation#min}
   */
  min({ name: e, node: { value: t }, args: r }) {
    return Array.isArray(t) ? `Cannot have fewer than ${r[0]} ${e}.` : `${Q(e)} must be at least ${r[0]}.`;
  },
  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#not}
   */
  not({ name: e, node: { value: t } }) {
    return `“${t}” is not an allowed ${e}.`;
  },
  /**
   *  Is not a number
   * @see {@link https://formkit.com/essentials/validation#number}
   */
  number({ name: e }) {
    return `${Q(e)} must be a number.`;
  },
  /**
   * Require one field.
   * @see {@link https://formkit.com/essentials/validation#require-one}
   */
  require_one: ({ name: e, node: t, args: r }) => {
    const o = r.map((n) => {
      const a = t.at(n);
      return a ? gi(a) : !1;
    }).filter((n) => !!n);
    return o.unshift(e), `${o.join(" or ")} is required.`;
  },
  /**
   * Required field.
   * @see {@link https://formkit.com/essentials/validation#required}
   */
  required({ name: e }) {
    return `${Q(e)} is required.`;
  },
  /**
   * Does not start with specified value
   * @see {@link https://formkit.com/essentials/validation#starts-with}
   */
  starts_with({ name: e, args: t }) {
    return `${Q(e)} doesn’t start with ${qa(t)}.`;
  },
  /**
   * Is not a url
   * @see {@link https://formkit.com/essentials/validation#url}
   */
  url() {
    return "Please enter a valid URL.";
  },
  /**
   * Shown when the date is invalid.
   */
  invalidDate: "The selected date is invalid."
}, tg = { ui: Qf, validation: eg }, Ga = /* @__PURE__ */ new Set();
function rg(e) {
  return function(r) {
    Ga.add(r), r.on("destroying", () => Ga.delete(r));
    let o = Xa(r.config.locale, e), n = o ? e[o] : {};
    r.on("prop:locale", ({ payload: a }) => {
      o = Xa(a, e), n = o ? e[o] : {}, r.store.touch();
    }), r.on("prop:label", () => r.store.touch()), r.on("prop:validationLabel", () => r.store.touch()), r.hook.text((a, s) => {
      var i, u;
      const l = ((i = a.meta) == null ? void 0 : i.messageKey) || a.key;
      if (q(n, a.type) && q(n[a.type], l)) {
        const c = n[a.type][l];
        typeof c == "function" ? a.value = Array.isArray((u = a.meta) == null ? void 0 : u.i18nArgs) ? c(...a.meta.i18nArgs) : c(a) : a.value = c;
      }
      return s(a);
    });
  };
}
function Xa(e, t) {
  if (q(t, e))
    return e;
  const [r] = e.split("-");
  if (q(t, r))
    return r;
  for (const o in t)
    return o;
  return !1;
}
var Ne = void 0, Ke = null, Do, vi = !1, Cr = !1, og = /* @__PURE__ */ new Promise((e) => {
  Do = () => {
    vi = !0, e();
  };
}), ot = typeof window < "u" && typeof fetch < "u";
Ne = ot ? /* @__PURE__ */ getComputedStyle(document.documentElement) : void 0;
var Ut = {}, en = {};
function bi(e, t, r, o) {
  t && Object.assign(Ut, t), ot && !Cr && (Ne != null && Ne.getPropertyValue("--formkit-theme")) ? (Do(), Cr = !0) : e && !Cr && ot ? ng(e) : !Cr && ot && Do();
  const n = function(s) {
    var l, i;
    s.addProps(["iconLoader", "iconLoaderUrl"]), s.props.iconHandler = Ja(
      (l = s.props) != null && l.iconLoader ? s.props.iconLoader : o,
      (i = s.props) != null && i.iconLoaderUrl ? s.props.iconLoaderUrl : r
    ), lg(s, s.props.iconHandler), s.on("created", () => {
      var u, c;
      (u = s == null ? void 0 : s.context) != null && u.handlers && (s.context.handlers.iconClick = (f) => {
        const p = `on${f.charAt(0).toUpperCase()}${f.slice(1)}IconClick`, g = s.props[p];
        if (g && typeof g == "function")
          return (b) => g(s, b);
      }), (c = s == null ? void 0 : s.context) != null && c.fns && (s.context.fns.iconRole = (f) => {
        const p = `on${f.charAt(0).toUpperCase()}${f.slice(1)}IconClick`;
        return typeof s.props[p] == "function" ? "button" : null;
      });
    });
  };
  return n.iconHandler = Ja(o, r), n;
}
function ng(e) {
  if (!(!e || !ot || typeof getComputedStyle != "function") && (Cr = !0, Ke = document.getElementById("formkit-theme"), e && // if we have a window object
  ot && // we don't have an existing theme OR the theme being set up is different
  (!(Ne != null && Ne.getPropertyValue("--formkit-theme")) && !Ke || Ke != null && Ke.getAttribute("data-theme") && (Ke == null ? void 0 : Ke.getAttribute("data-theme")) !== e))) {
    const r = `https://cdn.jsdelivr.net/npm/@formkit/themes@${bo.startsWith("__") ? "latest" : bo}/dist/${e}/theme.css`, o = document.createElement("link");
    o.type = "text/css", o.rel = "stylesheet", o.id = "formkit-theme", o.setAttribute("data-theme", e), o.onload = () => {
      Ne = getComputedStyle(document.documentElement), Do();
    }, document.head.appendChild(o), o.href = r, Ke && Ke.remove();
  }
}
function Ja(e, t) {
  return (r) => {
    if (typeof r != "string")
      return;
    if (r.startsWith("<svg"))
      return r;
    const o = r.startsWith("default:");
    r = o ? r.split(":")[1] : r;
    const n = r in Ut;
    let a;
    if (n)
      return Ut[r];
    if (!en[r]) {
      if (a = ag(r), a = ot && typeof a > "u" ? Promise.resolve(a) : a, a instanceof Promise)
        en[r] = a.then((s) => !s && typeof r == "string" && !o ? a = typeof e == "function" ? e(r) : sg(r, t) : s).then((s) => (typeof r == "string" && (Ut[o ? `default:${r}` : r] = s), s));
      else if (typeof a == "string")
        return Ut[o ? `default:${r}` : r] = a, a;
    }
    return en[r];
  };
}
function ag(e) {
  if (ot)
    return vi ? Qa(e) : og.then(() => Qa(e));
}
function Qa(e) {
  const t = Ne == null ? void 0 : Ne.getPropertyValue(`--fk-icon-${e}`);
  if (t) {
    const r = atob(t);
    if (r.startsWith("<svg"))
      return Ut[e] = r, r;
  }
}
function sg(e, t) {
  const r = bo.startsWith("__") ? "latest" : bo, o = typeof t == "function" ? t(e) : `https://cdn.jsdelivr.net/npm/@formkit/icons@${r}/dist/icons/${e}.svg`;
  if (ot)
    return fetch(`${o}`).then(async (n) => {
      const a = await n.text();
      if (a.startsWith("<svg"))
        return a;
    }).catch((n) => {
      console.error(n);
    });
}
function lg(e, t) {
  const r = /^[a-zA-Z-]+(?:-icon|Icon)$/;
  Object.keys(e.props).filter((n) => r.test(n)).forEach((n) => ig(e, t, n));
}
function ig(e, t, r) {
  const o = e.props[r], n = t(o), a = `_raw${r.charAt(0).toUpperCase()}${r.slice(1)}`, s = `on${r.charAt(0).toUpperCase()}${r.slice(1)}Click`;
  if (e.addProps([a, s]), e.on(`prop:${r}`, ug), n instanceof Promise)
    return n.then((l) => {
      e.props[a] = l;
    });
  e.props[a] = n;
}
function ug(e) {
  var s;
  const t = e.origin, r = e.payload, o = (s = t == null ? void 0 : t.props) == null ? void 0 : s.iconHandler, n = e.name.split(":")[1], a = `_raw${n.charAt(0).toUpperCase()}${n.slice(1)}`;
  if (o && typeof o == "function") {
    const l = o(r);
    if (l instanceof Promise)
      return l.then((i) => {
        t.props[a] = i;
      });
    t.props[a] = l;
  }
}
var es = {
  /**
   * FormKit errors:
   */
  100: ({ data: e }) => `Only groups, lists, and forms can have children (${e.name}).`,
  101: ({ data: e }) => `You cannot directly modify the store (${e.name}). See: https://formkit.com/advanced/core#message-store`,
  102: ({
    data: [e, t]
  }) => `You cannot directly assign node.${t} (${e.name})`,
  103: ({ data: [e] }) => `Schema expressions cannot start with an operator (${e})`,
  104: ({ data: [e, t] }) => `Schema expressions cannot end with an operator (${e} in "${t}")`,
  105: ({ data: e }) => `Invalid schema expression: ${e}`,
  106: ({ data: e }) => `Cannot submit because (${e}) is not in a form.`,
  107: ({ data: [e, t] }) => `Cannot set ${e.name} to non object value: ${t}`,
  108: ({ data: [e, t] }) => `Cannot set ${e.name} to non array value: ${t}`,
  /**
   * Input specific errors:
   */
  300: ({ data: [e] }) => `Cannot set behavior prop to overscroll (on ${e.name} input) when options prop is a function.`,
  /**
   * FormKit vue errors:
   */
  600: ({ data: e }) => `Unknown input type${typeof e.props.type == "string" ? ' "' + e.props.type + '"' : ""} ("${e.name}")`,
  601: ({ data: e }) => `Input definition${typeof e.props.type == "string" ? ' "' + e.props.type + '"' : ""} is missing a schema or component property (${e.name}).`
}, ts = {
  /**
   * Core warnings:
   */
  150: ({ data: e }) => `Schema function "${e}()" is not a valid function.`,
  151: ({ data: e }) => `No form element with id: ${e}`,
  152: ({ data: e }) => `No input element with id: ${e}`,
  /**
   * Input specific warnings:
   */
  350: ({
    data: { node: e, inputType: t }
  }) => `Invalid options prop for ${e.name} input (${t}). See https://formkit.com/inputs/${t}`,
  /**
   * Vue warnings:
   */
  650: 'Schema "$get()" must use the id of an input to access.',
  651: ({ data: e }) => `Cannot setErrors() on "${e}" because no such id exists.`,
  652: ({ data: e }) => `Cannot clearErrors() on "${e}" because no such id exists.`,
  /**
   * Deprecation warnings:
   */
  800: ({ data: e }) => `${e} is deprecated.`
}, pg = (e, t) => {
  if (e.code in es) {
    const r = es[e.code];
    e.message = typeof r == "function" ? r(e) : r;
  }
  return t(e);
}, rs = !1;
function dg() {
  rs || (sa(pg), la(cg), rs = !0);
}
var cg = (e, t) => {
  if (e.code in ts) {
    const r = ts[e.code];
    e.message = typeof r == "function" ? r(e) : r;
  }
  return t(e);
}, fg = Object.defineProperty, gg = Object.getOwnPropertyNames, $i = (e, t) => function() {
  return e && (t = (0, e[gg(e)[0]])(e = 0)), t;
}, mg = (e, t) => {
  for (var r in t)
    fg(e, r, { get: t[r], enumerable: !0 });
}, os, ca, yi = $i({
  "packages/vue/src/bindings.ts"() {
    os = function(t) {
      t.ledger.count("blocking", (d) => d.blocking);
      const r = De(!t.ledger.value("blocking"));
      t.ledger.count("errors", (d) => d.type === "error");
      const o = De(!!t.ledger.value("errors"));
      let n = !1;
      ap(() => {
        n = !0;
      });
      const a = Dr(
        t.store.reduce((d, _) => (_.visible && (d[_.key] = _), d), {})
      ), s = De(
        t.props.validationVisibility || (t.props.type === "checkbox" ? "dirty" : "blur")
      );
      t.on("prop:validationVisibility", ({ payload: d }) => {
        s.value = d;
      });
      const l = De(s.value === "live"), i = De(!1), u = (d) => {
        i.value = (d ?? []).some(
          (_) => _.name === "required"
        );
      };
      u(t.props.parsedRules), t.on("prop:parsedRules", ({ payload: d }) => u(d));
      const c = De(t.children.map((d) => d.uid)), f = Sr(() => {
        if (!D.state)
          return !1;
        if (D.state.submitted)
          return !0;
        if (!l.value && !D.state.settled)
          return !1;
        switch (s.value) {
          case "live":
            return !0;
          case "blur":
            return D.state.blurred;
          case "dirty":
            return D.state.dirty;
          default:
            return !1;
        }
      }), p = Sr(() => D && g.value ? r.value && !o.value : D.state.dirty && !Te(D.value)), g = De(
        Array.isArray(t.props.parsedRules) && t.props.parsedRules.length > 0
      );
      t.on("prop:parsedRules", ({ payload: d }) => {
        g.value = Array.isArray(d) && d.length > 0;
      });
      const b = Sr(() => {
        const d = {};
        for (const _ in a) {
          const I = a[_];
          (I.type !== "validation" || f.value) && (d[_] = I);
        }
        return d;
      }), v = Dr(
        t.store.reduce((d, _) => (_.type === "ui" && _.visible && (d[_.key] = _), d), {})
      ), $ = Dr({}), h = new Proxy($, {
        get(...d) {
          const [_, I] = d;
          let O = Reflect.get(...d);
          return !O && typeof I == "string" && !q(_, I) && !I.startsWith("__v") && Fr(t).watch((z) => {
            const W = typeof z.config.rootClasses == "function" ? z.config.rootClasses(I, z) : {}, G = z.config.classes ? po(I, z, z.config.classes[I]) : {}, $e = po(
              I,
              z,
              z.props[`_${I}Class`]
            ), ge = po(
              I,
              z,
              z.props[`${I}Class`]
            );
            O = Fd(
              z,
              I,
              W,
              G,
              $e,
              ge
            ), _[I] = O ?? "";
          }), O;
        }
      });
      t.on("prop:rootClasses", () => {
        const d = Object.keys($);
        for (const _ of d)
          delete $[_];
      });
      const m = Sr(() => {
        const d = [];
        D.help && d.push(`help-${t.props.id}`);
        for (const _ in b.value)
          d.push(`${t.props.id}-${_}`);
        return d.length ? d.join(" ") : void 0;
      }), k = De(t.value), y = De(t.value), D = Dr({
        _value: y,
        attrs: t.props.attrs,
        disabled: t.props.disabled,
        describedBy: m,
        fns: {
          length: (d) => Object.keys(d).length,
          number: (d) => Number(d),
          string: (d) => String(d),
          json: (d) => JSON.stringify(d),
          eq: j
        },
        handlers: {
          blur: (d) => {
            t && (t.store.set(
              /* @__PURE__ */ ye({ key: "blurred", visible: !1, value: !0 })
            ), typeof t.props.attrs.onBlur == "function" && t.props.attrs.onBlur(d));
          },
          touch: () => {
            var I;
            const d = D.dirtyBehavior === "compare";
            if ((I = t.store.dirty) != null && I.value && !d)
              return;
            const _ = !j(t.props._init, t._value);
            !_ && !d || t.store.set(
              /* @__PURE__ */ ye({ key: "dirty", visible: !1, value: _ })
            );
          },
          DOMInput: (d) => {
            t.input(d.target.value), t.emit("dom-input-event", d);
          }
        },
        help: t.props.help,
        id: t.props.id,
        items: c,
        label: t.props.label,
        messages: b,
        didMount: !1,
        node: oa(t),
        options: t.props.options,
        defaultMessagePlacement: !0,
        slots: t.props.__slots,
        state: {
          blurred: !1,
          complete: p,
          dirty: !1,
          empty: Te(k),
          submitted: !1,
          settled: t.isSettled,
          valid: r,
          errors: o,
          rules: g,
          validationVisible: f,
          required: i
        },
        type: t.props.type,
        family: t.props.family,
        ui: v,
        value: k,
        classes: h
      });
      t.on("created", () => {
        j(D.value, t.value) || (y.value = t.value, k.value = t.value, Gr(k), Gr(y)), (async () => (await t.settled, t && (t.props._init = Fe(t.value))))();
      }), t.on("mounted", () => {
        D.didMount = !0;
      }), t.on("settled", ({ payload: d }) => {
        D.state.settled = d;
      });
      function x(d) {
        (Array.isArray(d) ? d : Object.keys(d)).forEach((I) => {
          I = Xt(I), q(D, I) || (D[I] = t.props[I]), t.on(`prop:${I}`, ({ payload: O }) => {
            D[I] = O;
          });
        });
      }
      x((() => {
        const d = [
          "__root",
          "help",
          "label",
          "disabled",
          "options",
          "type",
          "attrs",
          "preserve",
          "preserveErrors",
          "id",
          "dirtyBehavior"
        ], _ = /^[a-zA-Z-]+(?:-icon|Icon)$/, I = Object.keys(t.props).filter((O) => _.test(O));
        return d.concat(I);
      })());
      function w(d) {
        d.props && x(d.props);
      }
      t.props.definition && w(t.props.definition), t.on("added-props", ({ payload: d }) => x(d)), t.on("input", ({ payload: d }) => {
        t.type !== "input" && !Cn(d) && !Ta(d) ? y.value = An(d) : (y.value = d, Gr(y));
      }), t.on("commitRaw", ({ payload: d }) => {
        t.type !== "input" && !Cn(d) && !Ta(d) ? k.value = y.value = An(d) : (k.value = y.value = d, Gr(k)), t.emit("modelUpdated");
      }), t.on("commit", ({ payload: d }) => {
        var _;
        if ((!D.state.dirty || D.dirtyBehavior === "compare") && t.isCreated && n)
          if (!((_ = t.store.validating) != null && _.value))
            D.handlers.touch();
          else {
            const I = t.on("message-removed", ({ payload: O }) => {
              O.key === "validating" && (D.handlers.touch(), t.off(I));
            });
          }
        p && t.type === "input" && o.value && !R(t.props.preserveErrors) && t.store.filter(
          (I) => {
            var O;
            return !(I.type === "error" && ((O = I.meta) == null ? void 0 : O.autoClear) === !0);
          }
        ), t.type === "list" && t.sync && (c.value = t.children.map((I) => I.uid)), D.state.empty = Te(d);
      });
      const L = async (d) => {
        d.type === "ui" && d.visible && !d.meta.showAsMessage ? v[d.key] = d : d.visible ? a[d.key] = d : d.type === "state" && (D.state[d.key] = !!d.value);
      };
      t.on("message-added", (d) => L(d.payload)), t.on("message-updated", (d) => L(d.payload)), t.on("message-removed", ({ payload: d }) => {
        delete v[d.key], delete a[d.key], delete D.state[d.key];
      }), t.on("settled:blocking", () => {
        r.value = !0;
      }), t.on("unsettled:blocking", () => {
        r.value = !1;
      }), t.on("settled:errors", () => {
        o.value = !1;
      }), t.on("unsettled:errors", () => {
        o.value = !0;
      }), Lr(f, (d) => {
        d && (l.value = !0);
      }), t.context = D, t.emit("context", t, !1), t.on("destroyed", () => {
        t.context = void 0, t = null;
      });
    }, ca = os;
  }
}), hg = {};
mg(hg, {
  defaultConfig: () => xi
});
var xi, vg = $i({
  "packages/vue/src/defaultConfig.ts"() {
    yi(), xi = (e = {}) => {
      dg();
      const {
        rules: t = {},
        locales: r = {},
        inputs: o = {},
        messages: n = {},
        locale: a = void 0,
        theme: s = void 0,
        iconLoaderUrl: l = void 0,
        iconLoader: i = void 0,
        icons: u = {},
        ...c
      } = e, f = Nf({
        ...Ff,
        ...t || {}
      }), p = rg(
        xt({ en: tg, ...r || {} }, n)
      ), g = jl(Sc, o), b = bi(s, u, l, i);
      return xt(
        {
          plugins: [g, b, ca, p, f],
          ...a ? { config: { locale: a } } : {}
        },
        c || {},
        !0
      );
    };
  }
}), bg = typeof window > "u", tn = /* @__PURE__ */ new Map();
function $g(e, t) {
  var r;
  !bg || !e || (tn.has(e) || tn.set(e, /* @__PURE__ */ new Set()), (r = tn.get(e)) == null || r.add(t));
}
var wi = typeof window > "u", Ir = {}, Qt = {}, _e, tt = /* @__PURE__ */ new WeakMap(), yg = "__raw__", xg = /[a-zA-Z0-9\-][cC]lass$/;
function wg(e, t) {
  const r = De(null);
  if (e === "get") {
    const n = {};
    return r.value = _g.bind(null, n), r;
  }
  const o = e.split(".");
  return et(() => {
    r.value = fa(
      Cn(t) ? t.value : t,
      o
    );
  }), r;
}
function fa(e, t) {
  if (Array.isArray(e)) {
    for (const n of e) {
      const a = n !== !1 && fa(n, t);
      if (a !== void 0)
        return a;
    }
    return;
  }
  let r, o = e;
  for (const n in t) {
    const a = t[n];
    if (typeof o != "object" || o === null) {
      r = void 0;
      break;
    }
    const s = o[a];
    if (Number(n) === t.length - 1 && s !== void 0) {
      r = typeof s == "function" ? s.bind(o) : s;
      break;
    }
    o = s;
  }
  return r;
}
function _g(e, t) {
  if (typeof t != "string")
    return _t(650);
  if (t in e || (e[t] = De(void 0)), e[t].value === void 0) {
    e[t].value = null;
    const r = Wr(t);
    r && (e[t].value = r.context), Wp(t, ({ payload: o }) => {
      e[t].value = jr(o) ? o.context : o;
    });
  }
  return e[t].value;
}
function ns(e, t, r) {
  function o(g, b) {
    const v = f(Ve(b.if), { if: !0 }), $ = u(g, b.then), h = b.else ? u(g, b.else) : null;
    return [v, $, h];
  }
  function n(g, b) {
    var m, k;
    const v = f(Ve(g.if));
    let $ = () => b, h = () => b;
    return typeof g.then == "object" ? h = a(g.then, void 0) : typeof g.then == "string" && ((m = g.then) != null && m.startsWith("$")) ? h = f(Ve(g.then)) : h = () => g.then, q(g, "else") && (typeof g.else == "object" ? $ = a(g.else) : typeof g.else == "string" && ((k = g.else) != null && k.startsWith("$")) ? $ = f(Ve(g.else)) : $ = () => g.else), () => v() ? h() : $();
  }
  function a(g, b, v = {}) {
    const $ = new Set(Object.keys(g || {})), h = b ? f(Ve(b)) : () => ({}), m = [
      (k) => {
        const y = h();
        for (const D in y)
          $.has(D) || (k[D] = y[D]);
      }
    ];
    if (g) {
      if (zt(g))
        return n(
          g,
          v
        );
      for (let k in g) {
        const y = g[k];
        let D;
        const x = typeof y == "string";
        k.startsWith(yg) ? (k = k.substring(7), D = () => y) : x && y.startsWith("$") && y.length > 1 && !(y.startsWith("$reset") && xg.test(k)) ? D = f(Ve(y)) : typeof y == "object" && zt(y) ? D = n(y, void 0) : typeof y == "object" && yt(y) ? D = a(y) : D = () => y, m.push((C) => {
          C[k] = D();
        });
      }
    }
    return () => {
      const k = Array.isArray(g) ? [] : {};
      return m.forEach((y) => y(k)), k;
    };
  }
  function s(g, b) {
    let v = null, $ = () => null, h = !1, m = null, k = null, y = null, D = !1;
    const x = Vd(b);
    if (Pt(x) ? (v = x.$el, $ = x.$el !== "text" ? a(x.attrs, x.bind) : () => null) : Or(x) ? (typeof x.$cmp == "string" ? q(g, x.$cmp) ? v = g[x.$cmp] : (v = x.$cmp, D = !0) : v = x.$cmp, $ = a(x.props, x.bind)) : zt(x) && ([h, m, k] = o(g, x)), !zt(x) && "if" in x ? h = f(Ve(x.if)) : !zt(x) && v === null && (h = () => !0), "children" in x && x.children)
      if (typeof x.children == "string")
        if (x.children.startsWith("$slots."))
          v = v === "text" ? "slot" : v, m = f(Ve(x.children));
        else if (x.children.startsWith("$") && x.children.length > 1) {
          const C = f(Ve(x.children));
          m = () => String(C());
        } else
          m = () => String(x.children);
      else if (Array.isArray(x.children))
        m = u(g, x.children);
      else {
        const [C, w, L] = o(g, x.children);
        m = (d) => C && C() ? w && w(d) : L && L(d);
      }
    if (Or(x))
      if (m) {
        const C = m;
        m = (w) => ({
          default(L, d) {
            var O, N, z, W;
            const _ = _e;
            d && (_e = d), L && ((O = tt.get(_e)) == null || O.unshift(L)), w && ((N = tt.get(_e)) == null || N.unshift(w));
            const I = C(w);
            return L && ((z = tt.get(_e)) == null || z.shift()), w && ((W = tt.get(_e)) == null || W.shift()), _e = _, I;
          }
        }), m.slot = !0;
      } else
        m = () => ({});
    if ("for" in x && x.for) {
      const C = x.for.length === 3 ? x.for[2] : x.for[1];
      y = [
        typeof C == "string" && C.startsWith("$") ? f(Ve(C)) : () => C,
        x.for[0],
        x.for.length === 3 ? String(x.for[1]) : null
      ];
    }
    return [h, v, $, m, k, y, D];
  }
  function l(g, b) {
    const v = g(b), $ = _e;
    return Object.keys(v).reduce((h, m) => {
      const k = v && v[m];
      return h[m] = (y) => k && k(y, $) || null, h;
    }, {});
  }
  function i(g, b) {
    const [v, $, h, m, k, y, D] = s(g, b);
    let x = (C) => {
      if (v && $ === null && m)
        return v() ? m(C) : k && k(C);
      if ($ && (!v || v())) {
        if ($ === "text" && m)
          return pp(String(m()));
        if ($ === "slot" && m)
          return m(C);
        const w = D ? dp($) : $, L = m != null && m.slot ? l(m, C) : null;
        return In(
          w,
          h(),
          L || (m ? m(C) : [])
        );
      }
      return typeof k == "function" ? k(C) : k;
    };
    if (y) {
      const C = x, [w, L, d] = y;
      x = () => {
        const _ = w(), I = Number.isFinite(_) ? Array(Number(_)).fill(0).map((W, G) => G) : _, O = [];
        if (typeof I != "object")
          return null;
        const N = tt.get(_e) || [], z = Array.isArray(I);
        for (const W in I) {
          if (z && W in Array.prototype)
            continue;
          const G = Object.defineProperty(
            {
              ...N.reduce(
                ($e, ge) => $e.__idata ? { ...$e, ...ge } : ge,
                {}
              ),
              [L]: I[W],
              ...d !== null ? { [d]: z ? Number(W) : W } : {}
            },
            "__idata",
            { enumerable: !1, value: !0 }
          );
          N.unshift(G), O.push(C.bind(null, G)()), N.shift();
        }
        return O;
      };
    }
    return x;
  }
  function u(g, b) {
    if (Array.isArray(b)) {
      const $ = b.map(i.bind(null, g));
      return (h) => $.map((m) => m(h));
    }
    const v = i(g, b);
    return ($) => v($);
  }
  const c = [];
  function f(g, b = {}) {
    const v = /* @__PURE__ */ new WeakMap();
    return c.push(($, h) => {
      v.set(
        h,
        g.provide((m) => $(m, b))
      );
    }), () => v.get(_e)();
  }
  function p(g, b) {
    r ?? (r = ki(t));
    const [v, $] = q(Ir, r) ? Ir[r] : [u(e, t), c];
    return wi || (Qt[r] ?? (Qt[r] = 0), Qt[r]++, Ir[r] = [v, $]), $.forEach((h) => {
      h(g, b);
    }), () => (_e = b, v());
  }
  return p;
}
function _i(e, t) {
  const r = tt.get(_e) || [];
  let o;
  return r.length && (o = fa(r, e.split("."))), o === void 0 ? t : o;
}
function kg(e, t) {
  return new Proxy(e, {
    get(...r) {
      let o;
      const n = r[1];
      if (typeof n == "string") {
        const a = _e;
        _e = t, o = _i(n, void 0), _e = a;
      }
      return o !== void 0 ? o : Reflect.get(...r);
    }
  });
}
function as(e, t, r) {
  return e(
    (o, n = {}) => o.reduce((a, s) => {
      if (s.startsWith("slots.")) {
        const l = s.substring(6), i = () => t.slots && q(t.slots, l) && typeof t.slots[l] == "function";
        if (n.if)
          a[s] = i;
        else if (t.slots) {
          const u = kg(t, r);
          a[s] = () => i() ? t.slots[l](u) : null;
        }
      } else {
        const l = wg(s, t);
        a[s] = () => _i(s, l.value);
      }
      return a;
    }, {}),
    r
  );
}
function ss(e, t, r) {
  if (t ?? (t = ki(e)), Qt[t]--, Qt[t] === 0) {
    delete Qt[t];
    const [, o] = Ir[t];
    delete Ir[t], o.length = 0;
  }
  tt.delete(r);
}
function ki(e) {
  return JSON.stringify(e, (t, r) => typeof r == "function" ? r.toString() : r);
}
var Di = /* @__PURE__ */ Dl({
  name: "FormKitSchema",
  props: {
    schema: {
      type: [Array, Object],
      required: !0
    },
    data: {
      type: Object,
      default: () => ({})
    },
    library: {
      type: Object,
      default: () => ({})
    },
    memoKey: {
      type: String,
      required: !1
    }
  },
  emits: ["mounted"],
  setup(e, t) {
    var u;
    const r = Ln();
    let o = {};
    tt.set(o, []);
    const n = { FormKit: oa(Ci), ...e.library };
    let a = ns(n, e.schema, e.memoKey), s, l;
    wi || Lr(
      () => e.schema,
      (c, f) => {
        var g;
        const p = o;
        o = {}, tt.set(o, []), a = ns(n, e.schema, e.memoKey), s = as(a, l, o), c === f && ((g = r == null ? void 0 : r.proxy) == null ? void 0 : g.$forceUpdate).call(g), ss(e.schema, e.memoKey, p);
      },
      { deep: !0 }
    ), et(() => {
      l = Object.assign(Dr(e.data ?? {}), {
        slots: t.slots
      }), t.slots, s = as(a, l, o);
    });
    function i() {
      ss(e.schema, e.memoKey, o), l.node && l.node.destroy(), l.slots = null, l = null, s = null;
    }
    return Sl(() => t.emit("mounted")), sp(i), $g((u = Ln()) == null ? void 0 : u.appContext.app, i), () => s ? s() : null;
  }
}), Dg = Di, Sg = typeof window > "u", ls = Symbol("FormKitParent"), Cg = Symbol("FormKitComponentCallback");
function Lg(e, t) {
  const r = Vg(e, t);
  if (r.props.definition || Se(600, r), r.props.definition.component)
    return () => {
      var u;
      return In(
        (u = r.props.definition) == null ? void 0 : u.component,
        {
          context: r.context
        },
        { ...t.slots }
      );
    };
  const o = De([]);
  let n = r.props.definition.schemaMemoKey;
  const a = () => {
    var c, f;
    const u = (f = (c = r.props) == null ? void 0 : c.definition) == null ? void 0 : f.schema;
    u || Se(601, r), typeof u == "function" ? (o.value = u({ ...e.sectionsSchema || {} }), (n && e.sectionsSchema || "memoKey" in u && typeof u.memoKey == "string") && (n = (n ?? (u == null ? void 0 : u.memoKey)) + JSON.stringify(e.sectionsSchema))) : o.value = u;
  };
  a(), Sg || r.on("schema", () => {
    n += "♻️", a();
  }), t.emit("node", r);
  const s = r.props.definition.library, l = {
    FormKit: oa(Si),
    ...s,
    ...e.library ?? {}
  };
  function i() {
    r.emit("mounted");
  }
  return t.expose({ node: r }), () => In(
    Di,
    {
      schema: o.value,
      data: r.context,
      onMounted: i,
      library: l,
      memoKey: n
    },
    { ...t.slots }
  );
}
var Si = /* @__PURE__ */ Dl(
  Lg,
  {
    props: Rd,
    inheritAttrs: !1
  }
), Ci = Si, Ig = Symbol();
function Ag(e, t) {
  return e.component(t.alias || "FormKit", Ci).component(t.schemaAlias || "FormKitSchema", Dg), {
    get: Wr,
    setLocale: (r) => {
      var o;
      (o = t.config) != null && o.rootConfig && (t.config.rootConfig.locale = r);
    },
    clearErrors: Bd,
    setErrors: Nd,
    submit: Tl,
    reset: Ol
  };
}
var Li = Symbol.for("FormKitOptions"), Eg = Symbol.for("FormKitConfig"), Mg = {
  install(e, t) {
    const r = Object.assign(
      {
        alias: "FormKit",
        schemaAlias: "FormKitSchema"
      },
      typeof t == "function" ? t() : t
    ), o = jp(r.config || {});
    r.config = { rootConfig: o }, e.config.globalProperties.$formkit = Ag(e, r), e.provide(Li, r), e.provide(Eg, o), typeof window < "u" && (globalThis.__FORMKIT_CONFIGS__ = (globalThis.__FORMKIT_CONFIGS__ || []).concat([o]));
  }
}, Tg = typeof window < "u", rn = [
  // Boolean props
  "ignore",
  "disabled",
  "preserve",
  // String props
  "help",
  "label",
  /^preserve(-e|E)rrors/,
  /^[a-z]+(?:-visibility|Visibility|-behavior|Behavior)$/,
  /^[a-zA-Z-]+(?:-class|Class)$/,
  "prefixIcon",
  "suffixIcon",
  /^[a-zA-Z-]+(?:-icon|Icon)$/
], Og = ["disabled", "ignore", "preserve"];
function is(e, t) {
  t.classes && Object.keys(t.classes).forEach(
    (r) => {
      typeof r == "string" && (e.props[`_${r}Class`] = t.classes[r], Gt(t.classes[r]) && r === "inner" && Object.values(t.classes[r]));
    }
  );
}
function Pg(e) {
  return e ? ["Submit", "SubmitRaw", "SubmitInvalid"].reduce(
    (r, o) => {
      const n = `on${o}`;
      return n in e && typeof e[n] == "function" && (r[n] = e[n]), r;
    },
    {}
  ) : {};
}
function Vg(e, t, r = {}) {
  const o = Object.assign({}, Xr(Li) || {}, r), n = Xr(Ig, De(Tg ? document : void 0)), a = Xr(Cg, () => {
  }), s = Ln(), l = Pg(s == null ? void 0 : s.vnode.props), i = ["modelValue", "model-value"].some(
    (x) => x in ((s == null ? void 0 : s.vnode.props) ?? {})
  );
  let u = !1;
  Sl(() => {
    u = !0;
  });
  const c = e.modelValue !== void 0 ? e.modelValue : Fe(t.attrs.value);
  function f() {
    const x = {
      ...Rt(e),
      ...l,
      type: e.type ?? "text",
      __root: n.value,
      __slots: t.slots
    }, C = Oa(Rt(t.attrs), rn);
    C.key || (C.key = cr()), x.attrs = C;
    const w = Pa(Rt(t.attrs), rn);
    for (const d in w)
      Og.includes(d) && w[d] === "" && (w[d] = !0), x[Xt(d)] = w[d];
    const L = { props: {} };
    return is(L, e), Object.assign(x, L.props), typeof x.type != "string" && (x.definition = x.type, delete x.type), x;
  }
  const p = f(), g = p.ignore ? null : e.parent || Xr(ls, null), b = Od(
    xt(
      o || {},
      {
        name: e.name || void 0,
        value: c,
        parent: g,
        plugins: (o.plugins || []).concat(e.plugins ?? []),
        config: e.config || {},
        props: p,
        index: e.index,
        sync: !!R(t.attrs.sync || t.attrs.dynamic)
      },
      !1,
      !0
    )
  );
  a(b), b.props.definition || Se(600, b);
  const v = De(
    new Set(
      Array.isArray(b.props.__propDefs) ? b.props.__propDefs : Object.keys(b.props.__propDefs ?? {})
    )
  );
  b.on(
    "added-props",
    ({ payload: x }) => {
      (Array.isArray(x) ? x : Object.keys(x ?? {})).forEach((w) => v.value.add(w));
    }
  );
  const $ = Sr(
    () => rn.concat([...v.value]).reduce((x, C) => (typeof C == "string" ? (x.push(Xt(C)), x.push(Ll(C))) : x.push(C), x), [])
  );
  et(() => is(b, e));
  const h = Rt(e);
  for (const x in h)
    Lr(
      () => e[x],
      () => {
        e[x] !== void 0 && (b.props[x] = e[x]);
      }
    );
  et(() => {
    b.props.__root = n.value;
  });
  const m = /* @__PURE__ */ new Set(), k = Rt(t.attrs);
  et(() => {
    y(Pa(k, $.value));
  });
  function y(x) {
    m.forEach((C) => {
      C(), m.delete(C);
    });
    for (const C in x) {
      const w = Xt(C);
      m.add(
        Lr(
          () => t.attrs[C],
          () => {
            b.props[w] = t.attrs[C];
          }
        )
      );
    }
  }
  if (et(() => {
    const x = Oa(Rt(t.attrs), $.value);
    "multiple" in x && (x.multiple = R(x.multiple)), typeof x.onBlur == "function" && (x.onBlur = wp(x.onBlur)), b.props.attrs = Object.assign({}, b.props.attrs || {}, x);
  }), et(() => {
    const x = (e.errors ?? []).map(
      (C) => /* @__PURE__ */ ye({
        key: na(C),
        type: "error",
        value: C,
        meta: { source: "prop" }
      })
    );
    b.store.apply(
      x,
      (C) => C.type === "error" && C.meta.source === "prop"
    );
  }), b.type !== "input") {
    const x = `${b.name}-prop`;
    et(() => {
      const C = e.inputErrors ?? {}, w = Object.keys(C);
      w.length || b.clearErrors(!0, x);
      const L = w.reduce((d, _) => {
        let I = C[_];
        return typeof I == "string" && (I = [I]), Array.isArray(I) && (d[_] = I.map(
          (O) => /* @__PURE__ */ ye({
            key: O,
            type: "error",
            value: O,
            meta: { source: x }
          })
        )), d;
      }, {});
      b.store.apply(
        L,
        (d) => d.type === "error" && d.meta.source === x
      );
    });
  }
  et(() => Object.assign(b.config, e.config)), b.type !== "input" && lp(ls, b);
  let D;
  return b.on("modelUpdated", () => {
    var x, C;
    t.emit("inputRaw", (x = b.context) == null ? void 0 : x.value, b), u && t.emit("input", (C = b.context) == null ? void 0 : C.value, b), i && b.context && (D = Fe(b.value), t.emit("update:modelValue", An(b.value)));
  }), i && (Lr(
    ip(e, "modelValue"),
    (x) => {
      j(D, x) || b.input(x, !1);
    },
    { deep: !0 }
  ), b.value !== c && b.emit("modelUpdated")), up(() => b.destroy()), b;
}
var Fg = /* @__PURE__ */ U("messages", () => ({
  $el: "ul",
  if: "$fns.length($messages)"
})), Ng = /* @__PURE__ */ U("message", () => ({
  $el: "li",
  for: ["message", "$messages"],
  attrs: {
    key: "$message.key",
    id: "$id + '-' + $message.key",
    "data-message-type": "$message.type"
  }
}));
Fg(Ng("$message.value"));
var Bg = /* @__PURE__ */ U("summary", () => ({
  $el: "div",
  attrs: {
    "aria-live": "polite"
  }
})), Rg = /* @__PURE__ */ U("summaryInner", () => ({
  $el: "div",
  if: "$summaries.length && $showSummaries"
})), Hg = /* @__PURE__ */ U("messages", () => ({
  $el: "ul",
  if: "$summaries.length && $showSummaries"
})), Wg = /* @__PURE__ */ U("message", () => ({
  $el: "li",
  for: ["summary", "$summaries"],
  attrs: {
    key: "$summary.key",
    "data-message-type": "$summary.type"
  }
})), jg = /* @__PURE__ */ U("summaryHeader", () => ({
  $el: "h2",
  attrs: {
    id: "$id"
  }
})), Kg = /* @__PURE__ */ U("messageLink", () => ({
  $el: "a",
  attrs: {
    id: "$summary.key",
    href: '$: "#" + $summary.id',
    onClick: "$jumpLink"
  }
}));
Bg(
  Rg(
    jg("$summaryHeader"),
    Hg(Wg(Kg("$summary.message")))
  )
);
vg();
yi();
function zg(e, t) {
  var r = !1;
  return function(...o) {
    r || (e.call(null, ...o), r = !0, setTimeout(function() {
      r = !1;
    }, t));
  };
}
function Ii(e) {
  return e.split(" ").filter((t) => t);
}
var Yg = typeof window < "u";
function Oe(e, t, r = !1) {
  if (!t)
    return;
  const o = Ii(t);
  if (o.length && !o.includes("longTouch"))
    for (const n of e) {
      if (!zr(n) || !Be.has(n)) {
        n.classList.add(...o);
        continue;
      }
      const a = [], s = Be.get(n);
      if (s) {
        for (const l of o)
          n.classList.contains(l) ? n.classList.contains(l) && r === !1 && a.push(l) : n.classList.add(l);
        s.privateClasses = a, Be.set(n, s);
      }
    }
}
function nr(e, t) {
  if (!t)
    return;
  const r = Ii(t);
  if (r.length)
    for (const o of e) {
      if (!zr(o)) {
        o.classList.remove(...r);
        continue;
      }
      const n = Be.get(o);
      if (n)
        for (const a of r)
          n.privateClasses.includes(a) || o.classList.remove(a);
    }
}
function Ai(e) {
  if (e != null) {
    if (e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth)
      return e;
    if (e.parentNode instanceof HTMLElement)
      return Ai(e.parentNode);
  }
}
function Zg(e) {
  if (!(e.e instanceof TouchEvent))
    return;
  const t = e.e.touches[0].clientX, r = e.e.touches[0].clientY, o = document.elementsFromPoint(t, r);
  if (Be) {
    for (const n of o)
      if (zr(n) && Be.has(n)) {
        const a = n, s = Be.get(a), l = Re.get(a.parentNode);
        return !s || !l ? void 0 : {
          node: {
            el: a,
            data: s
          },
          parent: {
            el: a.parentNode,
            data: l
          }
        };
      } else if (n instanceof HTMLElement) {
        const a = Re.get(n);
        if (a)
          return {
            parent: {
              el: n,
              data: a
            }
          };
      }
  }
}
function zr(e) {
  return e instanceof HTMLElement && e.parentNode instanceof HTMLElement;
}
function Ei(e, t) {
  const r = new AbortController();
  for (const o in t) {
    const n = t[o];
    e.addEventListener(o, n, {
      signal: r.signal,
      passive: !1
    });
  }
  return r;
}
function ga(e, t, r = !1) {
  const o = window.getComputedStyle(e), n = [
    "position",
    "z-index",
    "top",
    "left",
    "x",
    "y",
    "transform-origin",
    "filter",
    "-webkit-text-fill-color"
  ];
  for (const a of Array.from(o))
    r === !1 && a && n.includes(a) || t.style.setProperty(
      a,
      o.getPropertyValue(a),
      o.getPropertyPriority(a)
    );
  for (const a of Array.from(e.children)) {
    if (!zr(a))
      continue;
    const s = t.children[Array.from(e.children).indexOf(a)];
    ga(a, s, r);
  }
}
function ma(e) {
  return e instanceof DragEvent ? { x: e.clientX, y: e.clientY } : { x: e.touches[0].clientX, y: e.touches[0].clientY };
}
var Ye = {
  selectedNodes: Array(),
  activeNode: void 0,
  isTouch: !1
};
function us(e = {}) {
  return (t) => {
    const r = Re.get(t);
    if (!r)
      return;
    const o = {
      ...r.config,
      multiDragConfig: e
    };
    return {
      setup() {
        var n, a;
        o.handleDragstart = e.multiHandleDragstart || Xg, o.handleTouchstart = e.multiHandleTouchstart || Qg, o.handleEnd = e.multiHandleEnd || qg, o.reapplyDragClasses = e.multiReapplyDragClasses || Ug, r.config = o, (n = o.multiDragConfig.plugins) == null || n.forEach((s) => {
          var l, i;
          (i = (l = s(t)) == null ? void 0 : l.tearDown) == null || i.call(l);
        }), (a = o.multiDragConfig.plugins) == null || a.forEach((s) => {
          var l, i;
          (i = (l = s(t)) == null ? void 0 : l.setup) == null || i.call(l);
        });
      },
      tearDownNodeRemap(n) {
        var a, s;
        (s = (a = o.multiDragConfig) == null ? void 0 : a.plugins) == null || s.forEach((l) => {
          var i, u;
          (u = (i = l(n.parent)) == null ? void 0 : i.tearDownNodeRemap) == null || u.call(i, n);
        });
      },
      tearDownNode(n) {
        var a, s;
        (s = (a = o.multiDragConfig) == null ? void 0 : a.plugins) == null || s.forEach((l) => {
          var i, u;
          (u = (i = l(n.parent)) == null ? void 0 : i.tearDownNode) == null || u.call(i, n);
        });
      },
      setupNodeRemap(n) {
        var a, s;
        (s = (a = o.multiDragConfig) == null ? void 0 : a.plugins) == null || s.forEach((l) => {
          var i, u;
          (u = (i = l(n.parent)) == null ? void 0 : i.setupNodeRemap) == null || u.call(i, n);
        });
      },
      setupNode(n) {
        var a, s;
        (s = (a = o.multiDragConfig) == null ? void 0 : a.plugins) == null || s.forEach((l) => {
          var i, u;
          (u = (i = l(n.parent)) == null ? void 0 : i.setupNode) == null || u.call(i, n);
        });
      }
    };
  };
}
function Ug(e, t) {
  if (!H)
    return;
  const r = "touchedNode" in H ? t.config.multiDragConfig.touchDropZoneClass : t.config.multiDragConfig.dropZoneClass;
  H.draggedNodes.map((n) => n.el).includes(e) && Oe([e], r, !0);
}
function qg(e) {
  !H || H && "touchedNode" in H && "touchMoving" in H && !H.touchMoving || (ji(e, H), Gg(e, H), Oi());
}
function Gg(e, t) {
  var s;
  const r = e.targetData.parent.data.config.multiDragConfig, o = (s = e.targetData.parent.data.config.selectionsConfig) == null ? void 0 : s.selectedClass, n = t && "touchedNode" in t;
  o && nr(
    Ye.selectedNodes.map((l) => l.el),
    o
  ), Ye.selectedNodes = [], Ye.activeNode = void 0;
  const a = n ? r.selectionDropZoneClass : r.touchSelectionDraggingClass;
  nr(
    t.draggedNodes.map((l) => l.el),
    a
  );
}
function Xg(e) {
  e.e instanceof DragEvent && Jg({
    e: e.e,
    targetData: e.targetData
  });
}
function Jg(e) {
  const t = Ri(e);
  Ye.isTouch = !1;
  const r = e.targetData.parent.data.config.multiDragConfig, o = e.targetData.parent.data.getValues(
    e.targetData.parent.el
  );
  let n = Ye.selectedNodes.length ? Ye.selectedNodes.map((s) => s.data.value) : r.selections && r.selections(o, e.targetData.parent.el);
  if (n === void 0)
    return;
  if (!n.includes(e.targetData.node.data.value)) {
    n = [e.targetData.node.data.value, ...n];
    const s = e.targetData.parent.data.config.selectionsConfig;
    Oe([e.targetData.node.el], s == null ? void 0 : s.selectedClass, !0), Ye.selectedNodes.push(e.targetData.node);
  }
  const a = e.targetData.node.el.style.zIndex;
  if (t.originalZIndex = a, e.targetData.node.el.style.zIndex = "9999", Array.isArray(n) && n.length) {
    const s = e.targetData.node.el.getBoundingClientRect(), [l, i] = [
      e.e.clientX - s.left,
      e.e.clientY - s.top
    ];
    Ti(Mi(e, n, t, l, i));
  } else {
    const s = e.targetData.parent.data.config;
    Bi(
      t.draggedNode.el,
      s.draggingClass,
      s.dropZoneClass
    );
  }
}
function Qg(e) {
  e.e instanceof TouchEvent && em({
    e: e.e,
    targetData: e.targetData
  });
}
function em(e) {
  const t = Ki(e);
  Ye.isTouch = !0, Ye.activeNode = e.targetData.node;
  const r = e.targetData.parent.data.config.multiDragConfig, o = e.targetData.parent.data.getValues(
    e.targetData.parent.el
  );
  let n = [];
  e.targetData.parent.data.config.selectionsConfig ? n = Ye.selectedNodes.map((s) => s.data.value) : n = r.selections && r.selections(o, e.targetData.parent.el), n = [e.targetData.node.data.value, ...n];
  const a = e.targetData.parent.data.config.selectionsConfig;
  Oe([e.targetData.node.el], a == null ? void 0 : a.selectedClass, !0), Array.isArray(n) && n.length ? Ti(
    Mi(
      e,
      n,
      t,
      t.touchStartLeft,
      t.touchStartTop
    )
  ) : zi(e, t), Yi(e, t);
}
function Mi(e, t, r, o, n) {
  for (const l of e.targetData.parent.data.enabledNodes)
    l.el !== r.draggedNode.el && t.includes(l.data.value) && r.draggedNodes.push(l);
  const a = e.targetData.parent.data.config.multiDragConfig, s = r.draggedNodes.map((l) => {
    const i = l.el.cloneNode(!0);
    return ga(l.el, i, !0), e.e instanceof DragEvent && Oe([i], a.draggingClass), i;
  });
  return setTimeout(() => {
    e.e instanceof DragEvent && Oe(
      r.draggedNodes.map((l) => l.el),
      a.dropZoneClass
    );
  }), r.clonedDraggedEls = s, { data: e, state: r, x: o, y: n };
}
function Ti({
  data: e,
  state: t,
  x: r,
  y: o
}) {
  var s;
  const n = document.createElement("div");
  for (const l of t.clonedDraggedEls)
    n.append(l);
  const { width: a } = t.draggedNode.el.getBoundingClientRect();
  n.style.cssText = `
        display: flex;
        flex-direction: column;
        width: ${a}px;
        position: absolute;
        z-index: 9999;
        left: -9999px
      `, document.body.append(n), e.e instanceof DragEvent ? ((s = e.e.dataTransfer) == null || s.setDragImage(n, r, o), setTimeout(() => {
    n.remove();
  })) : "touchedNode" in t && (t.touchedNode = n);
}
var ps = [
  {
    transform: "translateY(100%)"
  },
  {
    transform: "translateY(0)"
  }
], ds = [
  {
    transform: "translateY(-100%)"
  },
  {
    transform: "translateY(0)"
  }
], on = [
  {
    transform: "translateX(100%)"
  },
  {
    transform: "translateX(0)"
  }
], nn = [
  {
    transform: "translateX(-100%)"
  },
  {
    transform: "translateX(0)"
  }
];
function Ko(e = {}) {
  return (t) => {
    const r = Re.get(t);
    if (r)
      return {
        setup() {
          r.config.remapFinished = () => {
          }, document.head.querySelector("[data-drag-and-drop]");
        },
        setupNodeRemap(o) {
          if (!H)
            return;
          const n = e.duration || 150;
          if (o.nodeData.value === H.draggedNode.data.value) {
            switch (H.incomingDirection) {
              case "below":
                ze(o.node, ps, n);
                break;
              case "above":
                ze(o.node, ds, n);
                break;
              case "left":
                ze(o.node, nn, n);
                break;
              case "right":
                ze(o.node, on, n);
                break;
            }
            return;
          }
          if (!H.affectedNodes.map((c) => c.data.value).includes(o.nodeData.value))
            return;
          const a = o.node.getBoundingClientRect(), s = H.affectedNodes.findIndex(
            (c) => c.data.value === o.nodeData.value
          ), i = H.draggedNode.data.index >= H.targetIndex;
          let u;
          if (i ? u = H.affectedNodes[s + 1] ? H.affectedNodes[s + 1] : H.affectedNodes[s - 1] : u = H.affectedNodes[s - 1] ? H.affectedNodes[s - 1] : H.affectedNodes[s + 1], u) {
            const c = Math.abs(
              a.x - u.el.getBoundingClientRect().x
            ), f = Math.abs(
              a.y - u.el.getBoundingClientRect().y
            );
            c > f && i ? ze(o.node, nn, n) : c > f && !i && ze(o.node, on, n);
          } else
            switch (H.incomingDirection) {
              case "below":
                ze(o.node, ds, n);
                break;
              case "above":
                ze(o.node, ps, n);
                break;
              case "left":
                ze(o.node, on, n);
                break;
              case "right":
                ze(o.node, nn, n);
                break;
            }
        }
      };
  };
}
function ze(e, t, r) {
  e.animate(t, {
    duration: r
  }), setTimeout(() => {
    H && (H.swappedNodeValue = void 0, H.preventEnter = !1);
  }, r);
}
var Be = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), H = void 0;
function Oi() {
  H = void 0;
}
function Pi(e) {
  return H = {
    ascendingDirection: !1,
    incomingDirection: void 0,
    enterCount: 0,
    targetIndex: 0,
    affectedNodes: [],
    lastValue: void 0,
    activeNode: void 0,
    lastTargetValue: void 0,
    remapJustFinished: !1,
    preventEnter: !1,
    clonedDraggedEls: [],
    swappedNodeValue: !1,
    originalZIndex: void 0,
    ...e
  }, H;
}
function tm(e, t) {
  return H = {
    ...e,
    ...t
  }, H;
}
function Vi(e) {
  return {
    draggedNode: {
      el: e.node.el,
      data: e.node.data
    },
    draggedNodes: [
      {
        el: e.node.el,
        data: e.node.data
      }
    ],
    initialIndex: e.node.data.index,
    initialParent: {
      el: e.parent.el,
      data: e.parent.data
    },
    lastParent: {
      el: e.parent.el,
      data: e.parent.data
    }
  };
}
function rm(e, t) {
  const r = Fi(e), n = [
    ...Nn(
      t.targetData.parent.el,
      t.targetData.parent.data
    ).filter((a) => !r.includes(a))
  ];
  n.splice(t.targetData.node.data.index, 0, ...r), e.lastTargetValue = t.targetData.node.data.value, Bn(t.targetData.parent.el, t.targetData.parent.data, [
    ...n
  ]);
}
function Nn(e, t) {
  return [...t.getValues(e)];
}
function Bn(e, t, r) {
  t.setValues(r, e);
}
function Fi(e) {
  return [...e.draggedNodes.map((t) => t.data.value)];
}
function he({
  parent: e,
  getValues: t,
  setValues: r,
  config: o = {}
}) {
  var a, s;
  if (!Yg)
    return;
  document.addEventListener("dragover", (l) => {
    l.preventDefault();
  }), om(e);
  const n = {
    getValues: t,
    setValues: r,
    config: {
      handleDragstart: So,
      handleDragoverNode: vm,
      handleDragoverParent: $m,
      handleEnd: Co,
      handleTouchstart: Lo,
      handleTouchmove: Zi,
      handleTouchOverNode: um,
      handleTouchOverParent: ym,
      performSort: rm,
      performTransfer: km,
      root: document,
      setupNode: pm,
      setupNodeRemap: Wi,
      reapplyDragClasses: dm,
      tearDownNode: fm,
      tearDownNodeRemap: cm,
      remapFinished: sm,
      threshold: {
        horizontal: 0,
        vertical: 0
      },
      ...o
    },
    enabledNodes: [],
    abortControllers: {}
  };
  nm(e, n), (a = o.plugins) == null || a.forEach((l) => {
    var i, u;
    (u = (i = l(e)) == null ? void 0 : i.tearDown) == null || u.call(i);
  }), (s = o.plugins) == null || s.forEach((l) => {
    var i, u;
    (u = (i = l(e)) == null ? void 0 : i.setup) == null || u.call(i);
  }), Ni(e, !0);
}
function om(e) {
  const t = Re.get(e);
  t && t.abortControllers.mainParent && t.abortControllers.mainParent.abort();
}
function nm(e, t) {
  new MutationObserver(am).observe(e, { childList: !0 }), Re.set(e, t), t.abortControllers.mainParent = Ei(e, {
    dragover: Dm(
      zg(t.config.handleDragoverParent, 10)
    ),
    touchOverParent: t.config.handleTouchOverParent
  });
}
function am(e) {
  const t = e[0].target;
  t instanceof HTMLElement && Ni(t);
}
function Ni(e, t) {
  const r = Re.get(e);
  if (!r)
    return;
  const o = [], n = r.config;
  for (let l = 0; l < e.children.length; l++) {
    const i = e.children[l];
    if (!zr(i))
      continue;
    const u = Be.get(i);
    (t || !u) && n.tearDownNode({ node: i, parent: e, nodeData: u, parentData: r }), !n.disabled && (!n.draggable || n.draggable && n.draggable(i)) && o.push(i);
  }
  if (o.length !== r.getValues(e).length && !n.disabled) {
    console.warn(
      "The number of enabled nodes does not match the number of values."
    );
    return;
  }
  const a = r.getValues(e), s = [];
  for (let l = 0; l < o.length; l++) {
    const i = o[l], u = Be.get(i), c = Object.assign(
      u ?? {
        privateClasses: [],
        abortControllers: {}
      },
      {
        value: a[l],
        index: l
      }
    );
    if (H && c.value === H.draggedNode.data.value && (H.draggedNode.data = c, H.draggedNode.el = i), H && H.draggedNodes.map((p) => p.data.value).includes(c.value)) {
      const p = H.draggedNodes.find(
        (g) => g.data.value === c.value
      );
      p && (p.el = i);
    }
    s.push({
      el: i,
      data: c
    });
    const f = {
      node: i,
      parent: e,
      parentData: r,
      nodeData: c
    };
    (t || !u) && n.setupNode(f), Wi(f);
  }
  Re.set(e, { ...r, enabledNodes: s }), n.remapFinished(r);
}
function sm() {
  H && (H.preventEnter = !1, H.swappedNodeValue = void 0, H.remapJustFinished = !0);
}
function So(e) {
  e.e instanceof DragEvent && im({
    e: e.e,
    targetData: e.targetData
  });
}
function Bi(e, t, r) {
  Oe([e], t), setTimeout(() => {
    nr([e], t), Oe([e], r);
  });
}
function Ri(e) {
  const t = Pi(Vi(e.targetData));
  return e.e.stopPropagation(), e.e.dataTransfer && (e.e.dataTransfer.dropEffect = "move", e.e.dataTransfer.effectAllowed = "move", e.e.dataTransfer.setDragImage(
    e.targetData.node.el,
    e.e.offsetX,
    e.e.offsetY
  )), t;
}
function Hi(e) {
  if (!(e.e instanceof DragEvent) && !(e.e instanceof TouchEvent))
    return !1;
  const t = e.targetData.parent.data.config;
  if (!t.dragHandle)
    return !0;
  const r = e.targetData.node.el.querySelectorAll(
    t.dragHandle
  );
  if (!r)
    return !1;
  const o = ma(e.e), n = t.root.elementFromPoint(
    o.x,
    o.y
  );
  if (!n)
    return !1;
  for (const a of Array.from(r))
    if (n === a || a.contains(n))
      return !0;
  return !1;
}
function lm(e) {
  if (!Hi(e)) {
    e.e.preventDefault();
    return;
  }
  const t = Ki(e);
  zi(e, t), Yi(e, t);
}
function im(e) {
  if (!Hi(e)) {
    e.e.preventDefault();
    return;
  }
  const t = e.targetData.parent.data.config, r = Ri(e), o = e.targetData.node.el.style.zIndex;
  r.originalZIndex = o, e.targetData.node.el.style.zIndex = "9999", Bi(
    r.draggedNode.el,
    t.draggingClass,
    t.dropZoneClass
  );
}
function um(e) {
  H && H.draggedNode.el !== e.detail.targetData.node.el && (e.detail.targetData.parent.el === H.lastParent.el ? Ui(e.detail, H) : zo(e.detail, H));
}
function pm(e) {
  var r;
  const t = e.parentData.config;
  e.node.draggable = !0, e.nodeData.abortControllers.mainNode = Ei(e.node, {
    dragstart: Ht(t.handleDragstart),
    dragover: Ht(t.handleDragoverNode),
    dragend: Ht(t.handleEnd),
    touchstart: Ht(t.handleTouchstart),
    touchmove: Ht(t.handleTouchmove),
    touchend: Ht(t.handleEnd),
    touchOverNode: t.handleTouchOverNode
  }), t.reapplyDragClasses(e.node, e.parentData), (r = e.parentData.config.plugins) == null || r.forEach((o) => {
    var n, a;
    (a = (n = o(e.parent)) == null ? void 0 : n.setupNode) == null || a.call(n, e);
  });
}
function Wi(e) {
  var t;
  Be.set(e.node, e.nodeData), (t = e.parentData.config.plugins) == null || t.forEach((r) => {
    var o, n;
    (n = (o = r(e.parent)) == null ? void 0 : o.setupNodeRemap) == null || n.call(o, e);
  });
}
function dm(e, t) {
  if (!H)
    return;
  const r = "touchedNode" in H ? t.config.touchDropZoneClass : t.config.dropZoneClass;
  H.draggedNode.el === e && Oe([e], r, !0);
}
function cm(e) {
  var t;
  (t = e.parentData.config.plugins) == null || t.forEach((r) => {
    var o, n;
    (n = (o = r(e.parent)) == null ? void 0 : o.tearDownNodeRemap) == null || n.call(o, e);
  });
}
function fm(e) {
  var t, r, o, n, a;
  (t = e.parentData.config.plugins) == null || t.forEach((s) => {
    var l, i;
    (i = (l = s(e.parent)) == null ? void 0 : l.tearDownNode) == null || i.call(l, e);
  }), e.node.draggable = !1, (o = (r = e.nodeData) == null ? void 0 : r.abortControllers) != null && o.mainNode && ((a = (n = e.nodeData) == null ? void 0 : n.abortControllers) == null || a.mainNode.abort());
}
function Co(e) {
  H && (ji(e, H), Oi());
}
function ji(e, t) {
  var a, s, l, i;
  "longTouchTimeout" in t && t.longTouchTimeout && clearTimeout(t.longTouchTimeout);
  const r = (a = Re.get(t.initialParent.el)) == null ? void 0 : a.config, n = "touchedNode" in t ? r == null ? void 0 : r.touchDropZoneClass : r == null ? void 0 : r.dropZoneClass;
  t.originalZIndex !== void 0 && (t.draggedNode.el.style.zIndex = t.originalZIndex), Oe(
    t.draggedNodes.map((u) => u.el),
    n,
    !0
  ), nr(
    t.draggedNodes.map((u) => u.el),
    n
  ), r != null && r.longTouchClass && nr(
    t.draggedNodes.map((u) => u.el),
    (l = (s = t.initialParent.data) == null ? void 0 : s.config) == null ? void 0 : l.longTouchClass
  ), "touchedNode" in t && ((i = t.touchedNode) == null || i.remove(), t.scrollParent && (t.scrollParent.style.overflow = t.scrollParentOverflow || ""));
}
function Lo(e) {
  e.e instanceof TouchEvent && lm({
    e: e.e,
    targetData: e.targetData
  });
}
function Ki(e) {
  e.e.stopPropagation();
  const t = e.targetData.node.el.cloneNode(!0), r = e.targetData.node.el.getBoundingClientRect();
  return tm(
    Pi(Vi(e.targetData)),
    {
      touchStartLeft: e.e.touches[0].clientX - r.left,
      touchStartTop: e.e.touches[0].clientY - r.top,
      touchedNode: t,
      touchMoving: !1
    }
  );
}
function zi(e, t) {
  t.touchedNodeDisplay = t.touchedNode.style.display;
  const r = e.targetData.node.el.getBoundingClientRect();
  t.touchedNode.style.cssText = `
            width: ${r.width}px;
            position: absolute;
            pointer-events: none;
            top: -9999px;
            z-index: 999999;
            display: none;
          `, document.body.append(t.touchedNode), ga(e.targetData.node.el, t.touchedNode), t.touchedNode.style.display = "none";
}
function Yi(e, t) {
  const r = e.targetData.parent.data.config;
  r.longTouch && (t.longTouchTimeout = setTimeout(() => {
    if (!t)
      return;
    t.longTouch = !0;
    const o = Ai(t.draggedNode.el);
    o && (t.scrollParent = o, t.scrollParentOverflow = o.style.overflow, o.style.overflow = "hidden"), r.longTouchClass && e.e.cancelable && Oe(
      t.draggedNodes.map((n) => n.el),
      r.longTouchClass
    ), e.e.preventDefault(), document.addEventListener("contextmenu", function(n) {
      n.preventDefault();
    });
  }, r.longTouchTimeout || 200));
}
function Zi(e) {
  !H || !("touchedNode" in H) || hm(e, H);
}
function gm(e, t) {
  t.longTouchClass && nr(
    e.draggedNodes.map((r) => r.el),
    t == null ? void 0 : t.longTouchClass
  ), t.touchDraggingClass && Oe([e.touchedNode], t.touchDraggingClass), t.touchDropZoneClass && Oe(
    e.draggedNodes.map((r) => r.el),
    t.touchDropZoneClass
  );
}
function mm(e, t) {
  t.touchedNode.style.display = t.touchedNodeDisplay || "";
  const r = e.e.touches[0].clientX + window.scrollX, o = e.e.touches[0].clientY + window.scrollY, n = window.innerHeight + window.scrollY;
  o > n - 50 ? window.scrollBy(0, 10) : o < window.scrollY + 50 && window.scrollBy(0, -10);
  const a = t.touchStartLeft ?? 0, s = t.touchStartTop ?? 0;
  t.touchedNode.style.left = `${r - a}px`, t.touchedNode.style.top = `${o - s}px`;
}
function hm(e, t) {
  e.e.cancelable && e.e.preventDefault();
  const r = e.targetData.parent.data.config;
  if (r.longTouch && !t.longTouch) {
    clearTimeout(t.longTouchTimeout);
    return;
  }
  t.touchMoving !== !0 && (t.touchMoving = !0, gm(t, r)), mm(e, t);
  const o = Zg(e);
  if (!o)
    return;
  if ("node" in o && o.node.el === t.draggedNodes[0].el) {
    t.lastValue = e.targetData.node.data.value;
    return;
  }
  const n = {
    e: e.e,
    targetData: o
  };
  "node" in o ? o.node.el.dispatchEvent(
    new CustomEvent("touchOverNode", {
      detail: n
    })
  ) : o.parent.el.dispatchEvent(
    new CustomEvent("touchOverParent", {
      detail: n
    })
  );
}
function vm(e) {
  H && wm(e, H);
}
function bm(e, t) {
  const r = e.getBoundingClientRect(), { x: o } = ma(t);
  o > r.right * 0.85 ? e.scrollBy(10, 0) : o < r.left + r.width * 0.15 && e.scrollBy(-10, 0);
}
function $m(e) {
  H && (e.e instanceof DragEvent && bm(e.targetData.parent.el, e.e), zo(e, H));
}
function ym(e) {
  H && zo(e.detail, H);
}
function xm(e, t) {
  if (e.targetData.parent.el === t.lastParent.el)
    return !1;
  const r = e.targetData.parent.data.config;
  if (r.dropZone === !1)
    return !1;
  const o = t.initialParent.data.config;
  return r.accepts ? r.accepts(
    e.targetData.parent,
    t.initialParent,
    t.lastParent,
    t
  ) : !(!r.group || r.group !== o.group);
}
function wm(e, t) {
  var r;
  e.e.preventDefault(), t.remapJustFinished ? (t.lastTargetValue = e.targetData.node.data.value, t.remapJustFinished = !1) : t.draggedNode.el === e.targetData.node.el && (t.lastTargetValue = t.draggedNode.data.value), t.lastTargetValue !== e.targetData.node.data.value && (t.draggedNodes.map((o) => o.el).includes(e.targetData.node.el) || (e.targetData.parent.el === ((r = t.lastParent) == null ? void 0 : r.el) ? Ui(e, t) : zo(e, t)));
}
function _m(e, t, r, o) {
  var f;
  if (!t || t.preventEnter || t.swappedNodeValue === e.targetData.node.data.value || e.targetData.parent.el !== ((f = t.lastParent) == null ? void 0 : f.el) || e.targetData.parent.data.config.sortable === !1)
    return !1;
  const n = e.targetData.node.el.getBoundingClientRect(), a = t.draggedNode.el.getBoundingClientRect(), s = n.y - a.y, l = n.x - a.x;
  let i;
  const u = t.draggedNode.data.index > e.targetData.node.data.index ? [e.targetData.node.data.index, t.draggedNode.data.index] : [t.draggedNode.data.index, e.targetData.node.data.index];
  t.targetIndex = e.targetData.node.data.index, t.affectedNodes = e.targetData.parent.data.enabledNodes.filter(
    (p) => u[0] <= p.data.index && p.data.index <= u[1] && p.el !== t.draggedNode.el
  ), Math.abs(s) > Math.abs(l) ? i = s > 0 ? "above" : "below" : i = l > 0 ? "left" : "right";
  const c = t.lastParent.data.config.threshold;
  switch (i) {
    case "left":
      if (r > n.x + n.width * c.horizontal)
        return t.incomingDirection = "left", !0;
      break;
    case "right":
      if (r < n.x + n.width * (1 - c.horizontal))
        return t.incomingDirection = "right", !0;
      break;
    case "above":
      if (o > n.y + n.height * c.vertical)
        return t.incomingDirection = "above", !0;
      break;
    case "below":
      if (o < n.y + n.height * (1 - c.vertical))
        return t.incomingDirection = "below", !0;
      break;
  }
  return !1;
}
function Ui(e, t) {
  const { x: r, y: o } = ma(e.e);
  _m(e, t, r, o) && (t.swappedNodeValue = e.targetData.node.data.value, t.preventEnter = !0, e.targetData.parent.data.config.performSort(t, e));
}
function Ht(e) {
  function t(r) {
    var s;
    const o = Be.get(r), n = r.parentNode || ((s = H == null ? void 0 : H.lastParent) == null ? void 0 : s.el);
    if (!o)
      return;
    const a = Re.get(n);
    if (a)
      return {
        node: {
          el: r,
          data: o
        },
        parent: {
          el: n,
          data: a
        }
      };
  }
  return (r) => {
    const o = t(r.currentTarget);
    if (o)
      return e({
        e: r,
        targetData: o
      });
  };
}
function km(e, t) {
  const r = Fi(e), o = Nn(
    e.lastParent.el,
    e.lastParent.data
  ).filter((l) => !r.includes(l)), n = Nn(
    t.targetData.parent.el,
    t.targetData.parent.data
  ), a = e.initialParent.el === t.targetData.parent.el && t.targetData.parent.data.config.sortable === !1;
  let s;
  "node" in t.targetData ? (a ? s = e.initialIndex : t.targetData.parent.data.config.sortable === !1 ? s = t.targetData.parent.data.enabledNodes.length : s = t.targetData.node.data.index, n.splice(s, 0, ...r)) : (s = a ? e.initialIndex : t.targetData.parent.data.enabledNodes.length, n.splice(s, 0, ...r)), Bn(e.lastParent.el, e.lastParent.data, o), Bn(
    t.targetData.parent.el,
    t.targetData.parent.data,
    n
  );
}
function zo(e, t) {
  xm(e, t) && (e.targetData.parent.data.config.performTransfer(t, e), t.lastParent = e.targetData.parent);
}
function Dm(e) {
  function t(r) {
    const o = Re.get(r);
    if (o)
      return {
        parent: {
          el: r,
          data: o
        }
      };
  }
  return (r) => {
    const o = t(r.currentTarget);
    if (o)
      return e({
        e: r,
        targetData: o
      });
  };
}
function Sm(e, t) {
  e in oo || (oo[e] = { timer: 0, inputs: /* @__PURE__ */ new Set() });
  const r = oo[e];
  clearTimeout(r.timer), r.inputs.add(t), r.timer = cn(() => {
    Un[e] || (Un[e] = cn(() => qo.add(e), 2e3)), function(o) {
      if (Le) {
        window.addEventListener(zh(), (u) => {
          const c = new URL(u.blockedURI).hostname;
          Zn.some((f, p) => zs(p) === c) && (cs(o), console.warn("[FormKit]: Enterprise license required for restrictive CSP."));
        });
        let n = 0;
        const a = lt(Wh), s = "://", l = (/* @__PURE__ */ new Date()).getDate(), i = async () => {
          const u = Array.from(oo[o].inputs), c = u.filter((f) => !(yr[o] && yr[o].has(f))).join("");
          if (Zh(o), c) {
            n++;
            try {
              const f = await window[lt(Kh)](`${a}${s}${zs((l + n) % Zn.length)}/${function(g) {
                const b = Math.round(9 * Math.random());
                let v = "";
                for (let $ = 0; $ < g.length; $++) {
                  let h = g.charCodeAt($);
                  h >= 48 && h <= 57 ? h = 48 + (h + b) % 58 % 48 : h >= 97 && h <= 122 && (h = 97 + (h + b) % 123 % 97), v += String.fromCharCode(h);
                }
                return `${b}${v}`;
              }(`${o.substring(3)}x${c}`)}`), p = await f.json();
              if (p[lt(jh)])
                return cs(o, p.schema);
              if (f.ok)
                return yr[o] || (yr[o] = /* @__PURE__ */ new Set()), void u.forEach((g) => yr[o].add(g));
            } catch {
            }
            n < 2 && cn(i, 1e4 * Math.random());
          }
        };
        i();
      }
    }(e);
  }, 500);
}
function cs(e, t) {
  qo.add(e), function(r, o) {
    Mr[r] && Mr[r].forEach((n) => n(o));
  }(e, t);
}
function an(e, t, r) {
  if (Sm(t, r), !t)
    throw new Error("FormKitNoKey");
  return qo.has(t) ? null : e;
}
function $t(e, t) {
  return new Array(e).fill("").map((r, o) => t(o));
}
function Cm(e, t, r, o) {
  return (...n) => (a) => (s) => {
    const l = function(i, u, c, f, p, g) {
      const b = g[c], v = typeof f == "function" ? f() : { $el: f }, $ = p.map((m) => typeof m == "string" ? m : m(u)(g));
      let h = $.length && v ? /* @__PURE__ */ Mt(v, { children: $ }) : v;
      if (h = /* @__PURE__ */ Mt(h, b), typeof h == "object") {
        let m = h;
        if (!Pt(h) && !Or(h) || h.meta || (h.meta = { section: c, node: f }), Pt(h)) {
          const { $el: k, ...y } = h;
          y.attrs ? "class" in y.attrs || "if" in y.attrs || (y.attrs = { class: `$classes.${c}`, ...y.attrs }) : y.attrs = { class: `$classes.${c}` }, m = Qr(u, c, Object.defineProperty(y, "$el", { enumerable: !1, get: an.bind(null, k, u, i) }));
        } else if (Or(h)) {
          const { $cmp: k, ...y } = h;
          m = Qr(u, c, Object.defineProperty(y, "$cmp", { enumerable: !1, get: an.bind(null, k, u, i) }));
        } else if ("$formkit" in h) {
          h.outerClass = `$classes.${c}`;
          const { $formkit: k, ...y } = h;
          m = Qr(u, c, Object.defineProperty(y, "$formkit", { enumerable: !1, get: an.bind(null, k, u, i) }));
        }
        return m;
      }
      return Qr(u, c, h);
    }(e, a, t, r, n, s);
    return o && Ot(l) && (l.memo = e + JSON.stringify(s)), o ? [l] : l;
  };
}
function Qr(e, t, r) {
  const o = (n) => e ? n || `$slots.${t}` : null;
  return Object.defineProperties({}, { if: { enumerable: !1, get: o }, then: { enumerable: !1, get: o }, else: { enumerable: !1, get: o.bind(null, r) } });
}
function Ae(e) {
  return (t, r, o = !1) => Cm(e, t, r, o);
}
function Ee(e) {
  return { outer: e("outer", Uh, !0), wrapper: e("wrapper", "div", !1), inner: e("inner", qh, !1), icon: fo, label: e("label", Gh, !1), prefix: e("prefix", Ys, !1), suffix: e("suffix", Ys, !1), help: e("help", Qh, !1), messages: e("messages", Xh, !1), message: e("message", Jh, !1) };
}
function qi(e) {
  return { overlayPlaceholder: e("overlayPlaceholder", e0), overlayLiteral: e("overlayLiteral", t0), overlayChar: e("overlayChar", r0), overlayEnum: e("overlayEnum", o0), overlay: e("overlay", n0), overlayParts: e("overlayParts", s0), overlayInner: e("overlayInner", a0) };
}
function B(e, t, r) {
  return (o) => (n) => {
    const a = typeof t == "string" ? t : t(o)(n);
    return r ? { if: e, then: a, else: typeof r == "string" ? r : r(o)(n) } : (/* @__PURE__ */ Vr(a) ? Object.assign(a.else, { if: e }) : Pr(a) && Object.assign(a, { if: e }), a);
  };
}
function ha(e) {
  const t = e("dropdownWrapper", () => ({ $el: "div", attrs: { id: '$id + "_popover"', popover: { if: "$usePopover", then: "$popover", else: void 0 }, "data-is-wrapper": !0, style: "$dropdownWrapperStyles", onScroll: "$handlers.scroll" } })), r = e("listbox", () => ({ $el: "ul", if: "$expanded || $setForceExpanded", attrs: { style: "$listboxStyles", id: '$id + "_listbox"', role: "listbox", "aria-activedescendant": "$activeDescendant", "aria-labelledby": '$id + "_label"' } })), o = e("listitem", () => ({ $el: "li", bind: "$option.attrs", attrs: { id: '$id + "_listitem_" + $index', "data-disabled": "$option.attrs.disabled", "data-value": "$option.value", key: "$option.value", onClick: "$handlers.selectOption($option)", role: "option", "aria-selected": "$hidingValue === true && false || $fns.isSelected($option)", "data-is-active": "$fns.isActive($option)", tabindex: "-1" } })), n = e("loadMore", () => ({ $el: "li", if: "$state.loading || $state.hasNextPage", attrs: { id: '$id + "_load_more"', key: "loadMore", role: "option", onClick: "$handlers.selectOption($loadMoreOption)", "aria-selected": "false", "data-is-active": "$fns.isActive($loadMoreOption)", tabindex: "-1" } })), a = e("loadMoreInner", "span"), s = e("emptyMessage", () => ({ $el: "li", if: "$showEmptyMessage && $state.loading !== true", attrs: { id: '$id + "_empty_message"', key: "$emptyMessage", role: "presentation" } })), l = e("emptyMessageInner", "span"), i = e("option", () => ({ $el: "div", attrs: { "data-checked": "$fns.isSelected($option)" } })), u = e("listitems", () => ({ $el: null, if: "$options.length", for: ["option", "index", "$option.options || $options"] })), c = e("innerListitems", () => ({ $el: null, for: ["option", "innerIndex", "$option.options"] })), f = e("listitemGroup", () => ({ $el: "li", attrs: { "aria-label": "$option.group", role: "group", onClick: "$handlers.listitemGroupClick", tabindex: "-1" } })), p = e("groupLabel", "span"), g = e("groupList", () => ({ $el: "ul", attrs: { role: "group" } }));
  return () => {
    return t(r(s(l("$emptyMessage")), u(B("$option.group", f(p("$option.group"), g(c((b = () => ({ id: '$id + "_listitem_" + $index + "_" + $innerIndex' }), v = o(B("$fns.isSelected($option)", fo("selected")), i("$option.label")), ($) => {
      const h = (m) => {
        const k = v($)(m), y = typeof b == "function" ? b($) : b;
        return Gt(y) && (/* @__PURE__ */ Vr(k) && Pt(k.else) ? k.else.attrs = { ...k.else.attrs, ...y } : Pt(k) && (k.attrs = { ...k.attrs, ...y })), k;
      };
      return h._s = v._s, h;
    })))), o(B("$fns.isSelected($option)", fo("selected")), i("$option.label")))), n(B("$state.loading && $optionLoadingCounter === 0 || $state.hasNextPage", a(B("$state.loading", fo("loader")), "$state.loading && $ui.isLoading.value || $ui.loadMore.value")))));
    var b, v;
  };
}
function fs(e) {
  return Ot(e) && "value" in e && "label" in e;
}
function va(e) {
  return e ? e.reduce((t, r) => {
    var o;
    return ((o = t.at(-1)) === null || o === void 0 ? void 0 : o.type) === r.type ? t.at(-1).value += r.value : t.push({ type: r.type, value: r.value }), t;
  }, []) : [];
}
function Ft() {
  var e, t, r;
  const o = ((e = document.activeElement) === null || e === void 0 ? void 0 : e.tagName.toLowerCase()) || "";
  if (customElements.get(o)) {
    const n = (r = (t = document.activeElement) === null || t === void 0 ? void 0 : t.shadowRoot) === null || r === void 0 ? void 0 : r.activeElement;
    if (n)
      return n;
  }
  return document.activeElement;
}
function P(e) {
  return "__original" in e ? e.__original : e.value;
}
async function He(e, t, r = !1, o = !1) {
  if (typeof e.props.optionsLoader == "function") {
    e.props.search = t, clearTimeout(Us.get(e));
    const n = t ? e.props.debounce : 0;
    n === 0 ? Io(e, o) : Us.set(e, setTimeout(() => {
      e.props.page = 1, Io(e, o);
    }, n));
  } else if (Array.isArray(e.props.options)) {
    const n = JSON.parse(JSON.stringify(e.props.initialOptions));
    e.props.options = [...n.filter((a) => {
      if ("options" in a) {
        const s = a.options = [...a.options].filter((l) => e.props.filter(l, t ?? "", e));
        return s.length > 0 && { ...a, options: s };
      }
      return e.props.filter(a, t ?? "", e);
    })];
  }
}
function Io(e, t) {
  e.props.allowAppendOptions = t, ar(e);
}
function Lm(e, t) {
  if (e.props.allowAppendOptions)
    return e.props.allowAppendOptions = !1, function(o, n) {
      const a = $o(n);
      o.props.appendingOptions = !0, o.props.activeValue = P(a[0]), o.props.options = o.props.options.concat(a);
    }(e, t);
  const r = $o(t);
  e.props.options = r, e.props.options.length || (e.store.set(Br), e.store.set(ye({ key: "hasNextPage", type: "state", value: !1, visible: !1 }))), Nu.set(e, e.props.searchValue);
}
function Gi(e, t, r) {
  if (e.store.set(Bu), e.props.optionLoadingCounter++, e.props.multiple && e.props.selectionAppearance !== "truncate") {
    let s;
    s = yt(t) ? { label: "Loading...", value: String(t) } : { label: String(t), value: t }, e.props.optionLoaderValues.includes(s.value) || e.props.optionLoaderValues.push(s.value), e.props.type === "transferlist" || e.props.selections.includes(s) || (e.props.selections = [...e.props.selections, s]);
  }
  const o = e.props.optionLoader(t, r), n = (s) => typeof s == "string" ? { label: s, value: t } : fs(s) ? s : Ot(s) ? Object.assign({ label: String(t), value: t }, s) : { label: String(t), value: t }, a = (s) => {
    const l = e.props.memoOptions.findIndex((i) => j(P(i), P(s)));
    return l === -1 ? e.props.memoOptions = [...e.props.memoOptions, s] : e.props.memoOptions[l] = s, s;
  };
  return o instanceof Promise ? o.then((s) => {
    if (typeof s == "string" || fs(s))
      return a(n(s));
  }).finally(() => {
    e.props.optionLoaderValues = e.props.optionLoaderValues.filter((s) => s !== t), e.props.optionLoadingCounter--;
  }) : (e.props.optionLoaderValues = e.props.optionLoaderValues.filter((s) => s !== t), e.props.optionLoadingCounter--, a(n(o)));
}
function ar(e) {
  e.store.set(Bu), e.props.optionsLoadingCounter++, e.store.set(ye({ key: "hasNextPage", type: "state", value: !1, visible: !1 }));
  const t = e.props.nonceKey && e.props[e.props.nonceKey], r = e.props.optionsLoader(e.context, Ru.get(e)), o = Lm.bind(null, e), n = r instanceof Promise ? r.then((...a) => {
    e.props.nonceKey !== void 0 && t !== e.props[e.props.nonceKey] || o(...a);
  }) : (o(r), e.props.optionsLoadingCounter--);
  if (n instanceof Promise)
    return n.finally(() => {
      e.props.optionsLoadingCounter--;
    });
}
function Xi(e, t) {
  e.props.page++, Ru.set(e, t), e.store.set(ye({ key: "hasNextPage", type: "state", value: !0, visible: !1 }));
}
function Yo(e, t) {
  if (e.props.optionRemoved = !0, t) {
    const r = (e.props.inputStd || []).filter((o) => !j(P(t), o));
    e.input(r);
  } else
    e.input(void 0);
  e.props.openOnRemove && !e.props.expanded && e.isCreated && (e.props.expanded = !0), setTimeout(() => {
    var r;
    return e.emit("selectRange", [(r = e.props.highlightedRange) === null || r === void 0 ? void 0 : r.option]);
  }, 20);
}
async function eo(e) {
  const t = Ca(e);
  e.props.resetSearchOnCommit && e.props.optionsLoader === "function" && (e.props.searchValue = ""), e.props.selections = [...t];
  const r = [...t, ...e.props.memoOptions];
  e.props.memoOptions = [...new Set(r)], function(o) {
    var n, a;
    o.props.firstCommit ? o.props.firstCommit = !1 : Le && o.isCreated && (o.props.optionRemoved ? o.props.optionRemoved = !1 : (o.props.expanded && o.props.closeOnSelect && (o.props.expanded = !1), o.props.userAction && (o.props.openOnFocus && (o.props.skipOpen = !0), o.props.userAction.type !== "tagDelete" && ((a = (n = o.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${o.props.id}`)) === null || a === void 0 || a.focus()), o.props.userAction = void 0)));
  }(e);
}
function ba(e) {
  var t, r;
  if (e.props.allOptions && e.props.allOptions.length)
    if (!((t = e.props.highlightedRange) === null || t === void 0) && t.option.value)
      e.props.activeValue = P(e.props.highlightedRange.option);
    else {
      if (e.props.activeSelectionValue) {
        const o = e.props.allOptions.find((n) => j(P(n), e.props.activeSelectionValue));
        if (o)
          return void (e.props.activeValue = o.value);
      }
      if (e.props.reloadOnCommit)
        e.props.activeValue = P(e.props.allOptions[0]);
      else {
        if (e.props.searchValue && !e.props.appendingOptions)
          e.props.activeValue = P(e.props.allOptions[0]);
        else if (e.props.inputStd.length > 0 && !e.props.multiple || e.props.multiple && (!((r = e.context) === null || r === void 0) && r.state.dirty))
          e.props.selections[e.props.selections.length - 1] ? e.props.activeValue = P(e.props.selections[e.props.selections.length - 1]) : e.props.activeValue = P(e.props.allOptions[0]);
        else {
          if (e.props.appendingOptions)
            return void (e.props.appendingOptions = !1);
          e.props.activeValue = P(e.props.allOptions[0]);
        }
        e.props.appendingOptions && (e.props.appendingOptions = !1);
      }
    }
}
function Rn(e) {
  return e.reduce((t, r) => (r.options ? t.push(...Rn(r.options)) : t.push(r), t), []);
}
function $a(e, t) {
  var r, o;
  !((r = t.attrs) === null || r === void 0) && r.disabled || (P(t) !== fr ? (e.props.option = t, e.props.maxReached && !Hn(e, t) || (e.input(Ji(e, P(t))), Hn(e, t) && e.props.closeOnSelect && (e.props.expanded = !1))) : (o = e.context) === null || o === void 0 || o.handlers.loadMore(!0));
}
function Ji(e, t) {
  if (e.props.multiple) {
    const r = Array.isArray(e.value) ? e.value : [];
    for (const o of r)
      if (j(o, t))
        return e.props.optionRemoved = !0, r.filter((n) => !j(n, t));
    return [...r, t];
  }
  return j(t, e.value) && e.props.deselect ? void (e.props.optionRemoved = !0) : t;
}
function Im(e, t) {
  return j(e.props.activeValue, P(t)) || void 0;
}
function Hn(e, t) {
  if (e.props.multiple) {
    if (!Array.isArray(e.value))
      return !1;
    for (const r of e.value)
      if (j(r, P(t)))
        return !0;
    return !1;
  }
  return j(e.value, P(t));
}
function gs(e) {
  var t, r;
  if (!e.props.usePopover || e.props.behavior === "overscroll")
    return;
  const o = e.props.invertPopover ? e.props.popoverCoordinates.y - e.props.popoverCoordinates.height - e.props.popoverOffset - e.props.popoverAncestorCoordinates.height : e.props.popoverCoordinates.y + e.props.popoverOffset;
  e.props.dropdownWrapperStyles = { ...e.props.dropdownWrapperStyles, minWidth: 0, width: "100%", maxWidth: ((r = (t = e.props) === null || t === void 0 ? void 0 : t.popoverAncestorCoordinates) === null || r === void 0 ? void 0 : r.width) + "px", top: o + "px", bottom: "unset", left: e.props.popoverCoordinates.x + "px", margin: 0, padding: 0 };
}
function Am(e) {
  e.props.firstCommit = !0;
  let t = null;
  e.on("commit", () => {
    if (e.props.inputStd.length === 0 && e.isCreated)
      return function(r) {
        var o, n;
        r.props.selections = [], r.props.userAction && (r.props.userAction = void 0, r.props.openOnFocus && (r.props.skipOpen = !0), (n = (o = r.props.__root) === null || o === void 0 ? void 0 : o.getElementById(`${r.props.id}`)) === null || n === void 0 || n.focus()), r.props.optionRemoved = !1;
      }(e), void (t = e.props.inputStd);
    if (e.props.inputStd.length && typeof e.props.optionsLoader == "function" && e.props.options.length === 0 && typeof e.props.optionLoader != "function" && e.props.optionsLoadingCounter === 0) {
      e.props.optionsLoaded = !0;
      const r = ar(e);
      r instanceof Promise && r.then(() => {
        eo(e);
      });
    }
    typeof e.props.optionLoader != "function" || e.props.optionRemoved || function(r, o) {
      if (r === o)
        return !0;
      if (r == null || o == null || r.length !== o.length)
        return !1;
      for (let n = 0; n < r.length; ++n)
        if (r[n] !== o[n])
          return !1;
      return !0;
    }(t, e.props.inputStd) ? e.props.optionsLoadingCounter === 0 && eo(e) : (t = e.props.inputStd, async function(r) {
      const o = Ca(r);
      if ((r.props.inputStd.length > 1 ? r.props.inputStd.filter((a) => !r.props.memoOptions.find((s) => j(P(s), a))) : r.props.inputStd).forEach((a) => {
        Gi(r, a, Array.isArray(o) && o.find((s) => j(P(s), a) && !s.noOptionFound));
      }), r.props.optionLoadingCounter) {
        const a = r.on("prop:optionLoadingCounter", () => {
          eo(r), r.props.optionLoadingCounter || r.off(a);
        });
      } else
        eo(r);
    }(e));
  });
}
function Em(e) {
  function t(s, l) {
    s.props.behavior !== "overscroll" && getComputedStyle(l).maxHeight === "none" && (s.props.dropdownWrapperStyles = { ...s.props.dropdownWrapperStyles, maxHeight: "400px" }), new MutationObserver((u) => {
      const c = u[0].target;
      if (s.props.behavior === "overscroll" && c.id !== `${s.props.id}_popover`)
        return;
      const f = s.props.positionListBox(l);
      xr.delete(s), r(s, f);
      let p, g = null;
      const b = new ResizeObserver(() => {
        clearTimeout(p), p = setTimeout(() => {
          s.props.styleWrapper(), s.props.positionListBox(l), g || (g = s.on("prop:expanded", () => {
            b.disconnect(), s.off(g);
          }));
        });
      });
      b.observe(l);
    }).observe(l, { childList: !0, subtree: !0 });
  }
  function r(s, l) {
    var i;
    if (!s.props.expanded || !s.props.options || !s.props.options.length || xr.has(s))
      return;
    const u = s.props.options.reduce((f, p, g) => {
      var b, v, $;
      if (!((b = p.attrs) === null || b === void 0) && b.disabled)
        return f;
      if ("group" in p && (!((v = p.options) === null || v === void 0) && v.length))
        return p.options.forEach((m, k) => {
          var y;
          const D = (y = s.props.__root) === null || y === void 0 ? void 0 : y.getElementById(`${s.props.id}_listitem_${g}_${k}`);
          D && f.push([D, m]);
        }), f;
      const h = ($ = s.props.__root) === null || $ === void 0 ? void 0 : $.getElementById(`${s.props.id}_listitem_${g}`);
      return h && f.push([h, p]), f;
    }, []), c = (i = s.props.__root) === null || i === void 0 ? void 0 : i.getElementById(`${s.props.id}_load_more`);
    c && u.push([c, s.props.loadMoreOption]), xr.add(s), u.length && o(s, u, l);
  }
  function o(s, l, i) {
    var u, c, f, p;
    const g = (u = s.props.__root) === null || u === void 0 ? void 0 : u.getElementById(`${s.props.id}_popover`);
    if (s.props.trackHover) {
      const b = g ? g.getBoundingClientRect() : { top: 0, bottom: 0 };
      if (i = null, s.props.mouseY > b.top && s.props.mouseY < b.bottom) {
        let v = i || 0, $ = i;
        const h = (m, k) => {
          var y;
          const D = k[0], { y: x, height: C, x: w, width: L } = D.getBoundingClientRect();
          if (s.props.mouseX > w && s.props.mouseX < w + L && s.props.mouseY > x && s.props.mouseY < x + C) {
            i = m;
            const d = k[1];
            return d && !(!((y = d.attrs) === null || y === void 0) && y.disabled) ? s.props.activeValue = P(d) : s.props.activeValue = void 0, !0;
          }
          return !1;
        };
        do {
          if (v !== null && h(v, l[v]) || $ !== null && h($, l[$]))
            break;
          v !== null && (v++, v > l.length - 1 && (v = null)), $ !== null && ($--, $ < 0 && ($ = null));
        } while (v !== null || $ !== null);
      }
      i === null && (s.props.activeValue = void 0);
    }
    s.props.trackHover || ms(s), s.props.expanded ? (g && s.props.loadOnScroll && !(!((c = s.store.loading) === null || c === void 0) && c.value) && (!((f = s.store.hasNextPage) === null || f === void 0) && f.value) && g.scrollTop + g.offsetHeight > g.scrollHeight - 200 && ((p = s.context) === null || p === void 0 || p.handlers.loadMore(!0)), xr.has(s) ? requestAnimationFrame(o.bind(null, s, l, i)) : r(s, i)) : xr.delete(s);
  }
  if (!Le)
    return;
  e.props.positionListBox = (function(s, l) {
    var i, u;
    let c = null;
    if (s.props.activeDescendant && (c = s.props.options.filter((g) => {
      var b;
      return !(!((b = g.attrs) === null || b === void 0) && b.disabled);
    }).findIndex((g) => j(s.value, P(g))), c === -1 && (c = null), !((i = s.props.__root) === null || i === void 0) && i.getElementById(s.props.activeDescendant) && ms(s)), typeof window > "u")
      return c;
    const f = l.getBoundingClientRect(), p = (u = s.props.__root) === null || u === void 0 ? void 0 : u.getElementById(`${s.props.id}`);
    if (p) {
      const g = p.getBoundingClientRect();
      g.top + g.height + f.height > window.innerHeight && g.top + g.height > f.height ? (s.props.invertPopover = !0, s.props.usePopover || (s.props.dropdownWrapperStyles = { ...s.props.dropdownWrapperStyles, top: "auto", bottom: "100%" })) : (s.props.invertPopover = !1, s.props.usePopover || (s.props.dropdownWrapperStyles = { ...s.props.dropdownWrapperStyles, bottom: "auto", top: "100%" }));
    }
    return c;
  }).bind(null, e), e.props.styleWrapper = Mm.bind(null), e.on("mounted", () => {
    me(`${e.props.id}_popover`, t.bind(null, e), e.props.__root);
  });
  const n = (s) => {
    var l;
    e.props.mouseX = s.clientX, e.props.mouseY = s.clientY;
    const i = (l = e.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${e.props.id}_popover`);
    if (i) {
      const u = i.getBoundingClientRect();
      s.clientX > u.x && s.clientX < u.x + u.width && s.clientY > u.y && s.clientY < u.y + u.height && (e.props.trackHover = !0);
    }
  }, a = () => {
    e.props.ignoreScroll ? e.props.ignoreScroll = !1 : e.props.trackHover = !0;
  };
  e.on("prop:trackHover", ({ payload: s }) => {
    var l, i, u;
    Le && (s ? (u = (i = e.props.__root) === null || i === void 0 ? void 0 : i.getElementById(`${e.props.id}_popover`)) === null || u === void 0 || u.removeEventListener("scroll", a) : (l = e.props.__root) === null || l === void 0 || l.getElementById(`${e.props.id}_popover`));
  }), e.on("prop:expanded", ({ payload: s }) => {
    e.props.dropdownWrapperStyles = { ...e.props.dropdownWrapperStyles, zIndex: s || e.props.forceExpanded ? "999" : "-1", pointerEvents: s ? "auto" : "none" }, s ? (document.addEventListener("mousemove", n), e.props.styleWrapper(), ba(e)) : document.removeEventListener("mousemove", n);
  }), e.on("prop:trackHover", ({ payload: s }) => {
    var l, i;
    Le && (s ? (i = document.getElementById(`${e.props.id}_popover`)) === null || i === void 0 || i.removeEventListener("scroll", a) : (l = document.getElementById(`${e.props.id}_popover`)) === null || l === void 0 || l.addEventListener("scroll", a));
  }), e.on("prop:activeValue", ({ payload: s }) => {
    if (s === fr)
      return void (e.props.activeDescendant = `${e.props.id}_load_more`);
    let l, i = -1;
    for (let u = 0; u < e.props.options.length; u++) {
      if ("group" in e.props.options[u]) {
        for (let c = 0; c < e.props.options[u].options.length; c++)
          if (j(P(e.props.options[u].options[c]), s)) {
            i = c, l = u;
            break;
          }
      }
      if (j(P(e.props.options[u]), s)) {
        i = u;
        break;
      }
    }
    e.props.activeDescendant = i < 0 ? void 0 : l === void 0 ? `${e.props.id}_listitem_${i}` : `${e.props.id}_listitem_${l}_${i}`;
  });
}
function ms(e) {
  var t, r;
  if (!Le)
    return;
  const o = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_popover`), n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.activeDescendant);
  if (!o || !n)
    return;
  const { y: a, height: s } = n.getBoundingClientRect(), { y: l, height: i } = o.getBoundingClientRect();
  a < l ? (e.props.ignoreScroll = !0, o.scrollTop = n.offsetTop) : a + s > l + i && (e.props.ignoreScroll = !0, o.scrollTop = n.offsetTop + s - i);
}
function Mm() {
}
function Tm(e) {
  e.on("created", () => {
    if (!e.context || !Le)
      return;
    e.context.fns.isActive = Im.bind(null, e), e.context.fns.isSelected = (r) => Hn(e, r), e.context.fns.hasOptionLoaderValue = (r) => {
      for (const o of e.props.optionLoaderValues)
        if (j(P(r), o))
          return !0;
      return !1;
    }, e.context.handlers.listitemGroupClick = Wm, e.context.handlers.selectOption = (r) => (o) => jm.call(null, e, r, o), e.context.handlers.loadMore = Io.bind(null, e), e.context.handlers.removeSelection = (r) => (o) => hs(e, r, o), e.context.handlers.tagTouchstart = (r) => (o) => hs(e, r, o), e.context.handlers.selectionClick = (r) => e.props.multiple ? Fm.bind(null, e, r) : Vm.bind(null, e), e.context.handlers.selectionBlur = () => Nm.bind(null, e), e.context.fns.isActiveSelection = (r, o) => j(r, P(o)), e.context.handlers.tagClick = (r) => Bm.bind(null, e, r), e.context.handlers.tagFocus = (r) => Rm.bind(null, e, r), e.context.handlers.tagBlur = () => Hm.bind(null, e);
    const t = e.context.handlers.blur;
    e.context.handlers.blur = (function(r, o) {
      var n;
      if (o && o.relatedTarget instanceof HTMLElement) {
        const a = (n = r.props.__root) === null || n === void 0 ? void 0 : n.getElementById(r.props.id + "_inner");
        if (a instanceof HTMLElement && a.contains(o.relatedTarget))
          return;
      }
      t(), function(a) {
        a.props.disabled || (a.props.expanded = !1, a.props.activeSelectionValue = void 0, a.emit("blur"));
      }(r);
    }).bind(null, e), e.context.handlers.touchmove = Om.bind(null, e), e.context.handlers.touchend = Pm.bind(null, e);
  });
}
function Om(e, t) {
  var r;
  const o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`);
  if (o instanceof HTMLInputElement) {
    const n = qn.get(e);
    if (n) {
      const [a, s] = n, l = t.touches[0].clientX - s;
      o.scrollLeft = a - l;
    } else
      qn.set(e, [o.scrollLeft, t.changedTouches[0].clientX]);
  }
}
function Pm(e) {
  qn.delete(e);
}
function Vm(e, t) {
  e.props.disabled || ((!e.props.expanded && e.props.openOnClick || e.props.openOnFocus) && (e.props.expanded = !0), t.currentTarget instanceof HTMLElement && t.currentTarget.focus());
}
function Fm(e, t, r) {
  r.currentTarget instanceof HTMLElement && (j(e.props.activeSelectionValue, P(t)) ? e.props.activeSelectionValue = void 0 : (e.props.activeSelectionValue = P(t), r.currentTarget.focus()));
}
function Nm(e, t) {
  var r;
  if (t.relatedTarget instanceof HTMLElement) {
    const o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.id + "_inner");
    if (o instanceof HTMLElement && o.contains(t.relatedTarget))
      return;
  }
  e.props.activeSelectionValue = void 0;
}
function Bm(e, t, r) {
  r.stopPropagation(), e.props.disabled || (e.props.justFocused ? e.props.justFocused = !1 : r.currentTarget instanceof HTMLElement && (j(e.props.activeSelectionValue, P(t)) ? e.props.activeSelectionValue = void 0 : (e.props.activeSelectionValue = P(t), r.currentTarget.focus())));
}
function Rm(e, t, r) {
  r.stopPropagation(), e.props.disabled || r.currentTarget instanceof HTMLElement && (e.props.activeSelectionValue = P(t), e.props.justFocused = !0);
}
function Hm(e, t) {
  var r;
  if (t.relatedTarget instanceof HTMLElement) {
    const o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.id + "_inner");
    if (o instanceof HTMLElement && o.contains(t.relatedTarget))
      return;
  }
  e.props.activeSelectionValue = void 0;
}
function hs(e, t, r) {
  r && r.stopPropagation(), e.props.disabled || (e.props.userAction = { type: "handleRemoveSelection" }, Yo(e, t));
}
function Wm(e) {
  e.stopPropagation();
}
function jm(e, t, r) {
  r.stopPropagation(), e.props.disabled || (e.props.userAction = { type: "handleListitemClick" }, $a(e, t));
}
function ya(e, t, r, o) {
  (function(n) {
    n.addProps(["options", "expanded", "placeholder", "multiple", "selections", "activeValue", "activeDescendant", "forceExpanded", "optionLoader", "showEmptyMessage", "emptyMessage", "option", "listboxStyles", "invertPopover", "dropdownWrapperStyles", "optionsLoader", "loadMoreOption", "hasNextPage", "page", "behavior", "selectionRemovable", "openOnRemove", "clearOnClick", "openOnClick", "hideOnOpen", "closeOnSelect", "openOnFocus", "selectionAppearance", "optionsAppearance", "filter", "inputText", "formattedSelections", "lastVisibleIndex", "optionLoaderValues", "disabledInternally", "isLoadingOption", "isLoadingOptions", "thereIsAnOptionSelected", "formattedSelections", "activeSelections", "allowNewValues", "inputStd", "isSingleOption", "max", "disableDragAndDrop", "clearSearchOnOpen", "firstSelectionLabel", "memoOptions", "loadOnCreated", "alwaysLoadOnOpen", "showFormattedSelections", "truncationCount", "reloadOnCommit", "activeSelectionValue", "setForceExpanded", "option", "loadOnScroll", "optionsLoadingCounter", "optionLoadingCounter", "draggable", "deselect"]), n.props.deselect === void 0 ? n.props.deselect = !0 : n.props.deselect = R(n.props.deselect), n.props.option = {}, n.props.expanded = !1, n.props.inputStd = [], n.props.draggable === void 0 ? n.props.draggable = !0 : n.props.draggable === "false" && (n.props.draggable = !1), n.props.options || (_t(350, { node: n, inputType: n.props.type }), n.props.options = []), "disabled" in n.props && (n.props.disabled = R(n.props.disabled)), n.props.allOptions = Rn(n.props.options), n.props.selections = [], n.props.memoOptions = [], n.props.invertPopover = !1, n.props.dropdownWrapperStyles = { position: "absolute", top: "100%", overflow: "auto", minWidth: "100%" }, n.props.decrementCount = 0, n.props.page = 1, n.props.loadMoreOption = { label: "Load more", value: fr }, n.props.loadOptions = ar, n.props.listboxStyles = {}, n.props.optionsLoadingCounter = 0, n.props.optionLoadingCounter = 0, n.props.searchable = R(n.props.searchable), n.props.loadOnScroll = R(n.props.loadOnScroll), n.props.multiple = R(n.props.multiple) || !1, n.props.type === "taglist" && (n.props.multiple = !0), n.props.openOnFocus = R(n.props.openOnFocus), n.props.openOnRemove = n.props.openOnRemove !== void 0 && R(n.props.openOnRemove), n.props.hasNextPage = Xi.bind(null, n), n.props.initialOptions = [...n.props.options], n.props.optionLoaderValues = [], n.props.loadOnCreated = R(n.props.loadOnCreated), n.props.max && typeof n.props.max != "number" ? n.props.max = parseInt(n.props.max) : n.props.max && !n.props.multiple && (n.props.max = void 0), n.on("mounted", () => gs(n)), n.on("prop:popoverCoordinates", () => setTimeout(() => {
      gs(n);
    }, 10));
  })(o), o.props.multiple ? function(n) {
    n.hook.input((a, s) => (n.props.highlightedRange && !n.props.optionRemoved && (a.splice(n.props.highlightedRange.index, 1, P(n.props.option)), a = a.filter((l) => l !== void 0)), n.props.inputStd = a && Array.isArray(a) ? [...new Set(a)] : [], s(a === void 0 ? void 0 : [...n.props.inputStd])));
  }(o) : function(n) {
    n.hook.input((a, s) => (n.props.inputStd = a === void 0 || a === "" || a === null ? [] : [a], s(a)));
  }(o), e(o), Am(o), function(n) {
    n.on("created", () => {
      n.context && (n.props.trackHover = !0, n.props.disabled !== void 0 || n.props.optionsLoader || !n.props.options || n.props.options.length || n.props.emptyMessage !== void 0 || n.props.allowNewValues || n.props.inputStd.length !== 0 || (n.props.disabledInternally = !0), Em(n), n.props.loadOnCreated && !n.props.optionsLoaded ? ar(n) : n.props.optionsLoaded && (n.props.optionsLoaded = !1), n.props.forceExpanded = R(n.props.forceExpanded), n.props.forceExpanded && (n.props.dropdownWrapperStyles = { ...n.props.dropdownWrapperStyles, zIndex: "999", pointerEvents: "auto" }, setTimeout(() => {
        n.props.setForceExpanded = !0;
      }, 100)));
    });
  }(o), Tm(o), t(o), function(n) {
    n.on("prop:selections", ({ payload: s }) => {
      n.props.max && (n.props.maxReached = s.length >= n.props.max);
    }), n.on("prop:maxReached", ({ payload: s }) => {
      s && (n.props.expanded = !1);
    }), n.on("prop:optionsLoadingCounter", ({ payload: s }) => {
      s === 0 && (n.props.emptyMessage && (n.props.showEmptyMessage = !n.props.options.length), n.props.optionLoadingCounter === 0 && n.store.set(Br));
    }), n.on("prop:optionLoadingCounter", ({ payload: s }) => {
      s === 0 && n.props.optionsLoadingCounter === 0 && n.store.set(Br);
    }), n.on("prop:disabled", ({ payload: s }) => {
      s && (n.props.expanded = !1);
    }), n.on("prop:options", ({ payload: s }) => {
      n.props.allOptions = Rn(n.props.options), n.props.emptyMessage && typeof n.props.optionsLoader != "function" && (n.props.showEmptyMessage = !s.length), s.length ? n.props.disabledInternally = !1 : s.length || n.props.optionsLoader || n.props.emptyMessage !== void 0 || n.props.allowNewValues || n.props.inputStd.length !== 0 || n.props.searchValue || (n.props.disabledInternally = !0), ba(n);
    }), n.on("prop:expanded", ({ payload: s }) => {
      var l;
      if (Le)
        if (n.props.alwaysLoadOnOpen && (n.props.page = 1), s) {
          if (n.props.trackHover = !1, n.props.options && !n.props.options.length && typeof n.props.optionsLoader != "function" && n.props.emptyMessage && (n.props.showEmptyMessage = !0), setTimeout(() => document.addEventListener("click", a), 10), n.props.selectionAppearance === "text-input" && n.props.multiple)
            return;
          const i = (l = n.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${n.props.id}`);
          i instanceof HTMLInputElement && (i.focus(), n.props.searchExpand || (i.value = "", i.value = n.props.inputText));
        } else
          document.removeEventListener("click", a), n.props.trackHover = !1, n.props.showEmptyMessage = !1;
    });
    const a = () => {
      n.props.activeSelectionValue = void 0, n.props.expanded = !1;
    };
  }(o), r(o);
}
function Qi(e) {
  var t, r;
  e.props.searchValue || (r = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_tag-wrapper_${e.props.selections.length - 1}`)) === null || r === void 0 || r.focus();
}
function eu(e, t, r) {
  var o, n, a;
  if (r.preventDefault(), e.props.trackHover = !1, e.props.expanded) {
    const s = e.props.allOptions.reduce((i, u) => {
      var c;
      return !((c = u == null ? void 0 : u.attrs) === null || c === void 0) && c.disabled || i.push(P(u)), i;
    }, []);
    !((o = e.store.hasNextPage) === null || o === void 0) && o.value && s.push(fr);
    let l = -1;
    e.props.activeValue && (l = s.findIndex((i) => j(i, e.props.activeValue))), l === -1 && s.length ? e.props.activeValue = s[0] : t === "ArrowDown" && s.length > l + 1 ? e.props.activeValue = s[l + 1] : t === "ArrowUp" && l > 0 ? e.props.activeValue = s[l - 1] : t === "ArrowUp" && l === 0 && ((a = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${e.props.id}_tag-wrapper_${e.props.selections.length - 1}`)) === null || a === void 0 || a.focus(), e.props.expanded = !1);
  } else
    e.props.expanded || t !== "ArrowDown" || (e.props.expanded = !0);
}
function tu(e, t) {
  var r, o, n;
  if ((e.props.type === "taglist" || e.props.selectionAppearance === "tags") && e.props.inputStd.length && !e.props.inputText) {
    if (t === "ArrowLeft")
      return e.props.selections.length && ((o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_tag-wrapper_${e.props.selections.length - 1}`)) === null || o === void 0 || o.focus(), e.props.selections[e.props.selections.length - 1] ? e.props.activeSelectionValue = P(e.props.selections[e.props.selections.length - 1]) : e.props.activeSelectionValue = void 0), void (e.props.expanded = !1);
    t === "ArrowRight" && ((n = document.getElementById(`${e.props.id}_tag-wrapper_0`)) === null || n === void 0 || n.focus(), e.props.selections[0] ? e.props.activeSelectionValue = P(e.props.selections[0]) : e.props.activeSelectionValue = void 0), e.props.expanded = !1;
  }
}
function ru(e) {
  var t, r;
  e.props.expanded = !0, (r = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}`)) === null || r === void 0 || r.focus();
}
function ou(e, t, r, o = !0) {
  var n, a, s, l, i, u, c;
  const f = r.key;
  if (r.altKey) {
    const p = Ft(), g = e.props.selections.findIndex((v) => j(P(v), P(t))), b = [...e.props.selections];
    r.key === "ArrowRight" ? g < e.props.selections.length - 1 && (b.splice(g, 1), b.splice(g + 1, 0, t)) : r.key === "ArrowLeft" && g > 0 && (b.splice(g, 1), b.splice(g - 1, 0, t)), e.props.activeSelectionValue = P(t), e.input([...b.map(P)]), setTimeout(() => {
      p instanceof HTMLElement && p.focus();
    }, 100);
  } else {
    const p = e.props.selections.findIndex((v) => j(P(v), P(t)));
    if (p === -1)
      return;
    const g = f === "ArrowRight" ? p + 1 : p - 1;
    if (g >= e.props.selections.length) {
      if (!o)
        return e.props.expanded = !0, e.props.activeSelectionValue = void 0, void ((a = (n = e.props.__root) === null || n === void 0 ? void 0 : n.getElementById(`${e.props.id}`)) === null || a === void 0 || a.focus());
      (l = (s = e.props.__root) === null || s === void 0 ? void 0 : s.getElementById(`${e.props.id}`)) === null || l === void 0 || l.focus();
    } else if (g < 0 && p === 0)
      (u = (i = e.props.__root) === null || i === void 0 ? void 0 : i.getElementById(`${e.props.id}`)) === null || u === void 0 || u.focus();
    else if (g < 0)
      return;
    const b = (c = e.props.__root) === null || c === void 0 ? void 0 : c.getElementById(`${e.props.id}_tag-wrapper_${g}`);
    b && b.focus(), e.props.selections[g] ? e.props.activeSelectionValue = P(e.props.selections[g]) : e.props.activeSelectionValue = void 0;
  }
}
function nu(e, t, r) {
  var o;
  if (!(r.currentTarget instanceof HTMLElement) || e.props.searchValue)
    return;
  const n = e.props.selections.findIndex((l) => j(P(l), P(t)));
  if (n === -1)
    return;
  const a = e.props.selections[n + 1] ? n + 1 : n - 1, s = (o = e.props.__root) === null || o === void 0 ? void 0 : o.getElementById(`${e.props.id}_tag-wrapper_${a}`);
  s && s.focus(), e.props.userAction = { type: "tagDelete" }, Yo(e, t);
}
function au(e, t) {
  var r;
  if (t.preventDefault(), e.props.allowNewValues && e.props.searchValue && e.input(Ji(e, e.props.searchValue)), e.props.expanded) {
    if (e.props.activeValue === fr)
      return void ((r = e.context) === null || r === void 0 || r.handlers.loadMore(!0));
    const o = e.props.allOptions.find((n) => j(P(n), e.props.activeValue));
    if (!o)
      return;
    $a(e, o);
  } else
    e.props.expanded = !0;
}
function su(e) {
  e.props.expanded && (e.props.expanded = !1);
}
function Km(e, t, r) {
  if (r.stopPropagation(), !e.props.disabled)
    switch (r.key) {
      case "ArrowDown":
        ru(e);
        break;
      case "ArrowRight":
      case "ArrowLeft":
        ou(e, t, r, !1);
        break;
      case "Delete":
      case "Backspace":
        nu(e, t, r);
    }
}
function zm(e, t, r) {
  if (!e.props.disabled)
    switch (r.key) {
      case "ArrowUp":
      case "ArrowDown":
        (function(o, n, a) {
          var s, l, i, u;
          a.preventDefault();
          const c = a.key, f = o.props.selections.findIndex((b) => j(P(b), P(n)));
          if (f === -1)
            return;
          const p = c === "ArrowDown" ? f + 1 : f - 1;
          if (p < 0 && ((l = (s = o.props.__root) === null || s === void 0 ? void 0 : s.getElementById(`${o.props.id}`)) === null || l === void 0 || l.focus()), p < 0 || p >= o.props.selections.length)
            return;
          const g = (i = o.props.__root) === null || i === void 0 ? void 0 : i.getElementById(`${o.props.id}_selection_wrapper_${p}`);
          g && g.focus(), o.props.activeSelectionValue = ((u = o.props.selections[p]) === null || u === void 0 ? void 0 : u.value) || void 0;
        })(e, t, r);
        break;
      case "Enter":
        break;
      case "Tab":
        (function(o, n, a) {
          var s, l, i, u;
          if (n) {
            const c = o.props.selections.findIndex((g) => j(P(g), P(n)));
            if (c === -1)
              return;
            const f = a.shiftKey ? c - 1 : c + 1;
            if (f >= o.props.selections.length)
              return;
            if (f < 0)
              return void ((l = (s = o.props.__root) === null || s === void 0 ? void 0 : s.getElementById(`${o.props.id}`)) === null || l === void 0 || l.focus());
            const p = (i = o.props.__root) === null || i === void 0 ? void 0 : i.getElementById(`${o.props.id}_selection_wrapper_${f}`);
            p && p.focus(), o.props.activeSelectionValue = ((u = o.props.selections[f]) === null || u === void 0 ? void 0 : u.value) || void 0;
          }
        })(e, t, r);
        break;
      case "Delete":
      case "Backspace":
        (function(o, n) {
          var a;
          if (n) {
            const s = o.props.selections.findIndex((u) => j(P(u), P(n)));
            if (s === -1)
              return;
            const l = o.props.selections[s + 1] ? s + 1 : s - 1, i = (a = o.props.__root) === null || a === void 0 ? void 0 : a.getElementById(`${o.props.id}_selection_wrapper_${l}`);
            i && i.focus(), o.props.selections[l] ? o.props.activeSelectionValue = P(o.props.selections[l]) : o.props.activeSelectionValue = void 0;
          }
          n && o.props.selections.length !== 1 || (o.props.userAction = { type: "selectionDelete" }), Yo(o, n);
        })(e, t);
    }
}
function Ym(e, t) {
  if (e.props.disabled || !(t.currentTarget instanceof HTMLElement) || e.props.id !== t.currentTarget.id)
    return;
  const r = t.key;
  switch (r) {
    case "Tab":
      (function(o) {
        o.props.expanded && (o.props.expanded = !1);
      })(e);
      break;
    case "ArrowUp":
    case "ArrowDown":
      eu(e, r, t);
      break;
    case "ArrowLeft":
    case "ArrowRight":
      tu(e, r);
      break;
    case "Enter":
      au(e, t);
      break;
    case "Escape":
      su(e);
      break;
    case "Delete":
    case "Backspace":
      Qi(e);
      break;
    default:
      e.emit("unusedKeydown", t);
  }
}
function Zm(e, t) {
  if (e.props.disabled || !(t.currentTarget instanceof HTMLElement) || e.props.id !== t.currentTarget.id)
    return;
  const r = t.key;
  switch (r) {
    case "Tab":
      (function(o, n) {
        var a, s, l;
        o.props.expanded = !1, o.props.multiple && o.props.selections.length && o.props.type === "autocomplete" && o.props.selectionAppearance === "option" && (n.preventDefault(), (s = (a = o.props.__root) === null || a === void 0 ? void 0 : a.getElementById(`${o.props.id}_selection_wrapper_0`)) === null || s === void 0 || s.focus(), o.props.activeSelectionValue = ((l = o.props.selections[0]) === null || l === void 0 ? void 0 : l.value) || void 0);
      })(e, t);
      break;
    case "ArrowUp":
    case "ArrowDown":
      eu(e, r, t);
      break;
    case "ArrowRight":
    case "ArrowLeft":
      tu(e, r);
      break;
    case "Enter":
      au(e, t);
      break;
    case "Escape":
      su(e);
      break;
    case "Delete":
    case "Backspace":
      Qi(e);
  }
}
function Um(e, t) {
  var r;
  if (t.stopPropagation(), t.detail === 0 || e.props.disabled)
    return;
  e.props.attrs.onClick && e.props.attrs.onClick(t);
  const o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`);
  e.props.justOpened ? e.props.justOpened = !1 : e.props.expanded ? e.props.expanded = !1 : (o && t.pointerType !== "mouse" ? (e.props.mouseX = -1, e.props.mouseY = -1) : (e.props.mouseX = t.clientX, e.props.mouseY = t.clientY), e.props.expanded = !0, o == null || o.focus());
}
function qm(e) {
  e.props.disabled || (e.props.attrs.onFocus && e.props.attrs.onFocus(), e.props.skipOpen ? e.props.skipOpen = !1 : e.props.openOnFocus && (e.props.justOpened = !0, e.props.expanded = !0));
}
function Gm(e) {
  let t, r = "";
  e.on("unusedKeydown", ({ payload: o }) => {
    if (!o.isComposing && [...o.key].length === 1) {
      if (!r && o.key === " ")
        return void function(a, s) {
          var l;
          if (s.preventDefault(), a.props.expanded) {
            if (a.props.activeValue === fr)
              return void ((l = a.context) === null || l === void 0 || l.handlers.loadMore());
            const i = a.props.allOptions.find((u) => j(P(u), a.props.activeValue));
            if (!i)
              return;
            $a(a, i);
          } else
            a.props.expanded = !0;
        }(e, o);
      e.props.expanded = !0, clearTimeout(t), r += o.key;
      const n = e.props.allOptions.find((a) => a.label.toLowerCase().startsWith(r.toLowerCase()));
      n && (e.props.activeValue = P(n)), t = setTimeout(() => {
        r = "";
      }, 400);
    }
  });
}
function vs(e) {
  Ao(e), e.on("prop:selections", () => {
    e.props.skipFormatSelections = !1, Ao(e);
  }), Le && me(`${e.props.id}_selections`, Xm.bind(null, e), e.props.__root);
}
function Ao(e) {
  e.isCreated && (e.props.selections.length && e.props.lastVisibleIndex && e.props.selections.length - e.props.lastVisibleIndex > 1 ? e.props.truncationCount = "+ " + (e.props.selections.length - e.props.lastVisibleIndex - 1).toString() : e.props.truncationCount = void 0, e.props.formattedSelections = e.props.selections.map((t, r) => e.props.lastVisibleIndex && r === e.props.lastVisibleIndex && r !== 0 ? e.props.lastTruncatedElText && r === e.props.selections.length - 1 ? e.props.lastTruncatedElText : r === e.props.selections.length - 1 ? t.label : t.label + "..." : r === e.props.selections.length - 1 ? t.label : t.label + ", "));
}
function bs(e) {
  var t, r;
  if (!Le || !e.context)
    return;
  const o = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_selections`);
  if (!(o instanceof HTMLElement))
    return;
  const n = o.parentNode;
  if (!(n instanceof HTMLElement))
    return;
  let a = o.getBoundingClientRect().width;
  const s = 0.98 * n.getBoundingClientRect().width, l = Array.prototype.slice.call(o.children), i = [...e.props.selections];
  if (a > s) {
    const u = [];
    let c = 0;
    for (let f = 0; f < i.length; f++)
      u.push([i[f], l[f]]);
    for (let f = u.length - 1; f >= 0; f--) {
      const p = u[f];
      if (!(p[1] instanceof HTMLElement))
        return;
      c += p[1].getBoundingClientRect().width + parseFloat(window.getComputedStyle(p[1]).marginRight) + parseFloat(window.getComputedStyle(p[1]).marginLeft);
      const g = a - c;
      if (s > g) {
        const b = p[0].label;
        e.props.skipFormatSelections = !0, p[1].textContent = b;
        let v = !1;
        for (let $ = b.length; $ >= 0; $--) {
          if (e.props.skipFormatSelections = !0, p[1].textContent = b.slice(0, $).trim() + "...", g + p[1].getBoundingClientRect().width < s) {
            if ($ < 4) {
              e.props.lastVisibleIndex = f - 1, e.props.lastTruncatedElText = null;
              break;
            }
            if (e.props.lastVisibleIndex = f, e.props.lastTruncatedElText && p[1].textContent.slice(0, 4) === e.props.lastTruncatedElText.slice(0, 4))
              break;
            e.props.lastTruncatedElText = (r = p[1]) === null || r === void 0 ? void 0 : r.textContent;
            break;
          }
          $ === 0 && (v = !0);
        }
        p[1].textContent = e.props.lastTruncatedElText && !v && f !== 0 ? e.props.lastTruncatedElText : b, e.props.lastVisibleIndex === null && (e.props.lastVisibleIndex = f === 0 ? 0 : f - 1, e.props.lastTruncatedElText = null), setTimeout(() => {
          Ao(e);
        });
        break;
      }
    }
  } else
    e.props.lastTruncatedElText = null, e.props.lastVisibleIndex = null, Ao(e);
}
function Xm(e, t) {
  const r = new ResizeObserver(() => {
    e.props.selections && e.props.selections.length !== 0 && (e.props.skipFormatSelections ? e.props.skipFormatSelections = !1 : bs(e));
  }), o = new ResizeObserver(() => {
    bs(e);
  });
  r.observe(t), t.parentNode instanceof Element && o.observe(t.parentNode);
}
function Jm(e) {
  var t, r;
  if (typeof window > "u")
    return;
  const o = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_popover`), n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`);
  if (!n || !o)
    return;
  const a = o.style.paddingTop, s = o.style.paddingBottom, l = o.style.paddingLeft;
  o.style.paddingTop = "0", o.style.paddingBottom = "0", o.style.paddingLeft = "0";
  const i = n.getBoundingClientRect(), u = o.getBoundingClientRect(), c = Math.round(i.top - u.top) + "px", f = Math.round(i.left - u.left - 5) + "px", p = Math.max(Math.round(Math.min(u.height - u.top, window.innerHeight) - (i.top + i.height)), 0) + "px";
  o.style.paddingTop = a, o.style.paddingBottom = s, o.style.paddingLeft = l, e.props.dropdownWrapperStyles = { ...e.props.dropdownWrapperStyles, paddingTop: c, paddingLeft: f, paddingBottom: p }, e.props.listboxStyles = { ...e.props.listboxStyles, minWidth: e.props.behavior === "overscroll" ? `min(${i.width + "px"}, calc(100vw - 4em))` : i.width + "px", maxWidth: "calc(100vw - 4em)" };
}
function Qm(e, t) {
  var r, o;
  let n = null;
  if (e.props.activeDescendant) {
    const a = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.activeDescendant);
    if (!a)
      return n;
    e.props.ignoreScroll = !0;
    const s = (o = e.props.__root) === null || o === void 0 ? void 0 : o.getElementById(`${e.props.id}_listbox`);
    if (!s)
      return n;
    const l = t.getBoundingClientRect(), i = s.getBoundingClientRect(), u = parseInt(getComputedStyle(t).paddingTop), c = parseInt(getComputedStyle(t).paddingBottom), f = a.offsetTop - u, p = Math.max(f - u, 0), g = Math.max(t.scrollHeight - c - f - l.height, 0), b = i.height - p - g;
    t.scrollTop = f;
    const v = () => {
      t.scrollTop = g > 0 ? g < u ? t.scrollHeight : u : p < c ? 0 : f - c;
    }, $ = Math.min(150, i.height);
    p > 0 && g > 0 || p === 0 && g === 0 || b > $ ? t.scrollTop = f : v(), t.clientHeight / 2 < t.scrollTop && (n = e.props.options.filter((h) => {
      var m;
      return !(!((m = h.attrs) === null || m === void 0) && m.disabled);
    }).findIndex((h) => j(e.value, P(h)))), n === -1 && (n = null);
  }
  return n;
}
function eh(e) {
  e.addProps(["behavior"]), e.on("created", () => {
    e.props.behavior === "overscroll" && (typeof e.props.optionsLoader == "function" && Se(300, [e]), e.props.dropdownWrapperStyles = wt(M0), e.props.listboxStyles = { display: "inline-block" }, e.props.styleWrapper = Jm.bind(null, e), e.props.positionListBox = Qm.bind(null, e));
  }), e.on("prop:expanded", ({ payload: t }) => {
    e.props.behavior === "overscroll" && (t ? function() {
      hn = document.documentElement.scrollTop;
      for (const r in gn)
        Gs[r] = document.documentElement.style[r], document.documentElement.style[r] = gn[r];
      for (const r in mn)
        qs[r] = document.body.style[r], document.body.style[r] = mn[r];
      document.body.scrollTop = hn;
    }() : function() {
      for (const r in gn)
        document.documentElement.style[r] = Gs[r];
      for (const r in mn)
        document.body.style[r] = qs[r];
      document.body.scrollTop = 0, document.documentElement.scrollTop = hn;
    }());
  });
}
function lu(e) {
  e.addProps(["multiLine"]), e.on("created", () => {
    Le && (e.props.multiLineHeight = void 0, me(`${e.props.id}_selections`, th.bind(null, e), e.props.__root));
  });
}
function th(e) {
  var t;
  const r = new ResizeObserver((n) => {
    for (const a of n) {
      const { height: s } = a.contentRect;
      e.props.selectionsHeight !== s && (e.props.selectionsHeight = s), rh(e, a.target);
    }
  }), o = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_selections`);
  o && r.observe(o);
}
function rh(e, t) {
  var r;
  const o = t.querySelectorAll(`[id^="${e.props.id}_tag-wrapper"`);
  let n, a = [];
  if (e.props.type === "taglist") {
    const l = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`);
    if (!l)
      return;
    a = [l, ...Array.from(o)];
  } else
    a = Array.from(o);
  if (!o)
    return;
  let s = !1;
  for (const l of a)
    if (n === void 0)
      n = l.getBoundingClientRect();
    else {
      const i = l.getBoundingClientRect();
      if (n.top >= i.top + i.height / 5 || n.top <= i.top - i.height / 5) {
        s = !0, e.props.multiLine = !0;
        break;
      }
    }
  s || (e.props.multiLine = !1);
}
function Yr(e) {
  function t() {
    const { x: i, y: u, width: c, height: f } = function(p, g) {
      if (!p || !g)
        return { x: 0, y: 0 };
      const { left: b, top: v, width: $, height: h } = g.getBoundingClientRect();
      return { x: b + window.scrollX, y: v + h + window.scrollY, width: $, height: h };
    }(o, n);
    e.props.popoverAncestorCoordinates = { x: i, y: u, width: c, height: f }, e.props.popoverCoordinates = { x: i, y: u, width: c, height: 0 };
  }
  function r(i) {
    i ? (o == null || o.showPopover(), setTimeout(() => {
      e.props.popoverCoordinates.height = (o == null ? void 0 : o.offsetHeight) || 0;
    }, 5)) : o != null && o.matches(":popover-open") && (o == null || o.hidePopover(), e.props.popoverCoordinates.height = 0);
  }
  if (e.addProps(["popover", "popoverOffset", "usePopover", "popoverCoordinates", "popoverAncestorCoordinates"]), e.props.popover = R(e.props.popover) ? "manual" : void 0, e.type !== "input" || e.props.behavior === "overscroll")
    return;
  let o = null, n = null, a = [], s = null;
  if (e.props.popoverOffset = R(e.props.popoverOffset) ? parseInt(e.props.popoverOffset) : 0, !e.props.popover)
    return;
  if (typeof document > "u" || !("popover" in HTMLElement.prototype))
    return void console.warn('FormKit: Popover API is not supported in this browser — input panels will be rendered with fallback CSS positioning. This could result in inaccessible inputs due to parent containers using "overflow: hidden" or z-index conflicts.');
  const l = () => {
    document.removeEventListener("resize", s), document.removeEventListener("scroll", s), a.forEach((i) => {
      i.removeEventListener("scroll", s);
    });
  };
  e.on("mounted", () => {
    e.context && (e.props.usePopover = !0, e.props.popoverCoordinates = { x: 0, y: 0, width: 0, height: 0 }, e.props.popoverAncestorCoordinates = { x: 0, y: 0, width: 0, height: 0 });
  }), e.on("destroyed", () => {
    l();
  }), e.on("prop:expanded", ({ payload: i }) => {
    var u;
    e.context && (i === !1 ? l() : me(`${(u = e.context) === null || u === void 0 ? void 0 : u.id}_popover`, () => {
      if (!e.context)
        return;
      o = document.querySelector(`#${e.context.id}_popover[popover]`) || document.querySelector(`#${e.context.id}_popover [popover]`), n || (n = function(f) {
        if (!f)
          return null;
        let p = f.parentElement;
        for (; p && window.getComputedStyle(p).position === "static"; )
          p = p.parentElement;
        return p;
      }(o)), t(), r(i), s = T0(() => {
        e.context && (t(), r(i));
      }, 10), document.addEventListener("resize", s), document.addEventListener("scroll", s), a = [];
      let c = o == null ? void 0 : o.parentElement;
      for (; c; )
        c.scrollHeight > c.clientHeight && a.push(c), c = c.parentElement;
      a.forEach((f) => {
        f.addEventListener("scroll", s);
      });
    }));
  });
}
function oh(e) {
  var t, r, o, n, a, s, l, i, u, c, f, p, g, b;
  if ((t = (i = e.props).removeControl) !== null && t !== void 0 || (i.removeControl = !0), (r = (u = e.props).upControl) !== null && r !== void 0 || (u.upControl = !0), (o = (c = e.props).downControl) !== null && o !== void 0 || (c.downControl = !0), (n = (f = e.props).insertControl) !== null && n !== void 0 || (f.insertControl = !1), (a = (p = e.props).addButton) !== null && a !== void 0 || (p.addButton = !0), (s = (g = e.props).addLabel) !== null && s !== void 0 || (g.addLabel = !1), (l = (b = e.props).addAttrs) !== null && l !== void 0 || (b.addAttrs = {}), e.props.draggable = R(e.props.draggable), e.props.min = e.props.min !== void 0 ? Number(e.props.min) : 1, e.props.max = e.props.max !== void 0 ? Number(e.props.max) : 1 / 0, e.props.min > e.props.max)
    throw Error("Repeater: min must be less than max");
  if (Array.isArray(e.value))
    if (e.value.length < e.props.min) {
      const v = $t(e.props.min - e.value.length, () => ({}));
      e.input(e.value.concat(v), !1);
    } else
      e.value.length > e.props.max && e.input(e.value.slice(0, e.props.max), !1);
  else
    e.input($t(e.props.min, () => ({})), !1);
  e.context && function(v, $) {
    $.createShift = (h, m) => () => {
      const k = v._value;
      k.splice(h + m, 0, k.splice(h, 1)[0]), v.input(k, !1);
    }, $.createInsert = (h) => () => {
      const m = v._value;
      m.splice(h + 1, 0, {}), v.input(m, !1);
    }, $.createAppend = () => () => {
      const h = v._value;
      h.push({}), v.input(h, !1);
    }, $.createRemover = (h) => () => {
      const m = v._value;
      m.splice(h, 1), v.input(m, !1);
    };
  }(e, e.context.fns);
}
function $s(e, t) {
  function r() {
    return Array.isArray(t.value) ? t.value : [];
  }
  function o(a) {
    t.input(a);
  }
  if (!t.context)
    return;
  const n = { group: t.props.id, dragHandle: `#${t.props.id}_drag_handle`, draggingClass: t.context.classes.dragging, dropZoneClass: t.context.classes.dropZone, root: t.props.__root, disabled: !t.props.draggable, plugins: [Ko({ duration: 100 })], touchDraggingClass: t.context.classes.touchDragging, touchDropZoneClass: t.context.classes.touchDropZone, draggable: (a) => a.tagName === "LI" };
  he({ parent: e, getValues: r, setValues: o, config: n }), t.on("prop:disabled", ({ payload: a }) => {
    n.disabled = a, he({ parent: e, getValues: r, setValues: o, config: n });
  }), t.on("prop:draggable", ({ payload: a }) => {
    n.disabled = !a, he({ parent: e, getValues: r, setValues: o, config: n });
  });
}
function Zr(e, t) {
  const r = { onItems: [], offItems: [] }, o = t || Number(e.value || 0);
  for (let n = 0; n < e.props.max; n++)
    if (n < o && n + 1 >= o) {
      const a = e.props.rightToLeft ? 100 - 100 * (o - n) : 100 * (o - n);
      r.onItems.push(a + "%"), r.offItems.push(100 - a + "%");
    } else
      n < o ? (r.offItems.push("0%"), r.onItems.push("100%")) : n >= o && (r.offItems.push("100%"), r.onItems.push("0%"));
  e.props.itemsToPercentages = r;
}
function nh(e, t) {
  var r;
  (r = e.context) === null || r === void 0 || r.handlers.blur(t);
}
function ah(e, t) {
  const { x: r, y: o } = uu(t);
  let n = document.elementFromPoint(r, o);
  const a = Array.from(document.querySelectorAll(`#${e.props.id}_items_wrapper > .formkit-ratingItem`));
  let s = !0;
  for (; n && s; ) {
    if (a.includes(n)) {
      s = !1;
      break;
    }
    n = n.parentNode;
  }
  if (!s) {
    const l = a.indexOf(n);
    if (e.props.step === 1)
      return void e.input(l + 1, !1);
  }
}
function sh(e, t, r) {
  e.props.disabled || (r.preventDefault(), e.props.hoverHighlight = !0, e.props.touchStarted = !0, e.props.step !== 1 ? Zo(e, t, r) : e.input(t + 1, !1));
}
function iu(e, t) {
  if (!e.props.dragStarted)
    return;
  t.preventDefault(), e.props.hoverHighlight = !1, e.props.dragStarted = !1, Zr(e);
  const r = Gn.get(e);
  r && (r.abort(), Gn.delete(e));
}
function lh(e, t, r) {
  if (e.props.hoverHighlight || e.props.disabled)
    return;
  r.preventDefault(), e.props.hoverHighlight = !0, e.props.dragStarted = !0;
  const o = new AbortController();
  document.addEventListener("mouseup", (n) => iu(e, n), { signal: o.signal }), Gn.set(e, o), e.props.step === 1 ? e.input(t + 1, !1) : Zo(e, t, r);
}
function ih(e, t) {
  if (document.activeElement === t.currentTarget) {
    if (t.key === "ArrowRight" || t.key === "ArrowDown") {
      e.props.arrow = 1;
      const r = document.getElementById(e.props.id + "_0_0");
      r == null || r.focus(), e.input(Number(r == null ? void 0 : r.getAttribute("value")));
    } else if (t.key === "ArrowLeft" || t.key === "ArrowUp") {
      e.props.arrow = -1;
      const r = document.getElementById(e.props.id + `_${e.props.max - 1}_${e.props.stepsPerValue - 1}`);
      r == null || r.focus(), e.input(Number(r == null ? void 0 : r.getAttribute("value")));
    }
  }
}
function uh(e, t) {
  if (!e.props.preventFocus) {
    if (e.props.preventFocus = !0, setTimeout(() => {
      e.props.preventFocus = !1;
    }, 50), t.relatedTarget instanceof HTMLElement && t.relatedTarget.id === e.props.id + "_items_wrapper")
      e.props.arrow > 0 ? setTimeout(() => {
        var r, o;
        (o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.id + "_0_0")) === null || o === void 0 || o.focus();
      }) : e.props.arrow < 0 && setTimeout(() => {
        var r, o;
        (o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.id + `_${e.props.max - 1}_${e.props.stepsPerValue - 1}`)) === null || o === void 0 || o.focus();
      });
    else if (t.target instanceof HTMLInputElement) {
      if (Number(t.target.value) === e.props.step && e.value === e.props.max || Number(t.target.value) === e.props.max && e.value === e.props.step) {
        const r = document.getElementById(e.props.id + "_items_wrapper");
        return r == null || r.focus(), void e.input(0);
      }
      e.input(Number(t.target.value));
    }
  }
}
function ph(e, t, r) {
  e.props.hoverHighlight && (e.props.disabled || (e.props.step === 1 ? (Zr(e, t + 1), e.props.dragStarted && e.input(t + 1, !1)) : Zo(e, t, r, !!e.props.dragStarted)));
}
function dh(e) {
  Zr(e);
}
function ch(e, t, r) {
  if (!e.props.disabled && r.type !== "touchstart" && (r.preventDefault(), (r.clientX !== 0 || r.clientY !== 0) && r.currentTarget instanceof HTMLElement))
    return e.props.step === 1 ? e.props.deselect && Number(e.value) === t + 1 ? void e.input(0) : void e.input(t + 1) : void Zo(e, t, r);
}
function uu(e) {
  return e instanceof MouseEvent ? { x: e.clientX, y: e.clientY } : { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
}
function Zo(e, t, r, o = !0) {
  if (!(r.currentTarget instanceof HTMLElement))
    return;
  const { x: n, y: a } = uu(r), s = r.currentTarget.getBoundingClientRect();
  let l = function(i, u) {
    u || (u = 1);
    const c = 1 / u;
    return Math.ceil(i * c) / c;
  }((n - s.x) / s.width + t, e.props.step);
  l = l > e.props.min ? l : e.props.min, l = l < e.props.max ? l : e.props.max, !e.props.deselect || l !== Number(e.value) || e.props.dragStarted ? o ? e.input(l, !1) : Zr(e, l) : e.input(0);
}
function pu(e) {
  e.addProps(["inputText", "selectionAppearance", "searchValue", "openOnClick", "filteredOptions", "search", "debounce", "showInput", "visibilityStyles", "selectionStyles", "multiple", "filter", "hasHighlightedRange", "clearOnClick", "debounce"]), e.props.debounce === void 0 ? e.props.debounce = 200 : e.props.debounce = parseInt(e.props.debounce), e.props.nonceKey = "searchValue", e.props.searchValue = "", e.props.inputText = "", e.props.filterOptions = He.bind(null, e), e.props.reloadOnCommit = R(e.props.reloadOnCommit), e.props.alwaysLoadOnOpen === void 0 ? e.props.alwaysLoadOnOpen = !0 : e.props.alwaysLoadOnOpen = R(e.props.alwaysLoadOnOpen), typeof e.props.filter != "function" && (e.props.filter = (t, r) => t.label.toLowerCase().includes(r.toLowerCase())), e.on("created", () => {
    e.context && Le && (e.context.handlers.focus = ys.bind(null, e), e.context.handlers.input = fh.bind(null, e), e.context.handlers.focus = ys.bind(null, e), e.context.handlers.click = gh.bind(null, e), e.context.handlers.toggleListbox = du.bind(null, e), e.context.handlers.toggleListboxKeydown = mh.bind(null, e), e.context.handlers.keydown = Zm.bind(null, e), e.context.handlers.selectionKeydown = (t) => (r) => zm(e, t, r), e.context.handlers.searchInputTagKeydown = (t) => (r) => function(o, n, a) {
      if (a.stopPropagation(), !o.props.disabled)
        switch (a.key) {
          case "ArrowDown":
            ru(o);
            break;
          case "ArrowRight":
          case "ArrowLeft":
            ou(o, n, a);
            break;
          case "Delete":
          case "Backspace":
            nu(o, n, a);
        }
    }(e, t, r), e.on("prop:options", ({ payload: t }) => {
      if ((e.props.initialOptions.length === 0 && typeof e.props.optionsLoader != "function" || !e.props.searchValue && t.length) && (e.props.initialOptions = [...t]), e.props.selections && e.props.selections.length && t.length)
        for (let r = 0; r < e.props.selections.length; r++) {
          const o = e.props.selections[r], n = t.find((a) => P(a) === o.value);
          n && (e.props.selections[r] = n);
        }
    }));
  }), e.on("prop:expanded", ({ payload: t }) => {
    t || Nu.delete(e);
  });
}
function fh(e, t) {
  if (e.props.disabled)
    return;
  const r = t.target;
  e.props.inputText = r.value, e.emit("handleSearchInput", r.value), e.props.searchValue && He(e, e.props.searchValue, !0);
}
function gh(e, t) {
  t.stopPropagation(), e.props.disabled || e.props.disabledInternally || (e.props.attrs.onClick && e.props.attrs.onClick(t), (!e.props.expanded && e.props.openOnClick || e.props.openOnFocus) && (e.props.expanded = !0));
}
function ys(e) {
  e.props.disabled || e.props.disabledInternally || (e.props.attrs.onFocus && e.props.attrs.onFocus(), e.props.activeSelectionValue = void 0, e.props.skipOpen ? e.props.skipOpen = !1 : e.props.openOnFocus && (e.props.expanded = !0));
}
function du(e) {
  var t, r, o;
  e.props.disabled || e.props.disabledInternally || !((t = e.context) === null || t === void 0) && t.state.loading || (e.props.expanded = !e.props.expanded, e.props.openOnFocus || (o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}`)) === null || o === void 0 || o.focus());
}
function mh(e, t) {
  t.key !== "Enter" && t.key !== " " || (t.preventDefault(), t.stopPropagation(), du(e));
}
function hh(e) {
  e.props.searchValue = null, e.on("commit", () => {
    e.props.searchValue = null, e.props.highlightedRange || xs(e);
  }), e.on("created", () => {
    if (!e.context || !go)
      return;
    e.on("handleSearchInput", ({ payload: a }) => {
      a === "" ? (e.props.searchValue = null, e.input([])) : a && e.props.inputStd.length === 0 ? e.props.searchValue = a : a && e.props.inputStd.length > 0 && (e.props.searchValue = function(s) {
        var l;
        const i = to(s);
        if (s.props.highlightedRange) {
          const [u, c] = ws(s, i);
          return s.props.inputText.slice(u, c);
        }
        return s.props.inputText.slice(((l = i[i.length - 1]) === null || l === void 0 ? void 0 : l.end) + 2);
      }(e)), !e.props.expanded && a ? e.props.expanded = !0 : !a && e.props.expanded && (e.props.expanded = !1);
    }), function(a) {
      me(`${a.props.id}`, (s) => {
        s instanceof HTMLInputElement && bn.set(s, a);
      }, a.props.__root), go && !nl && (nl = !0, document.addEventListener("selectionchange", () => {
        const s = Ft();
        if (s instanceof HTMLInputElement && bn.has(s)) {
          const l = bn.get(s);
          l && function(i) {
            clearTimeout(ol.get(i)), ol.set(i, setTimeout(() => {
              var u, c, f, p;
              const g = (u = i.props.__root) === null || u === void 0 ? void 0 : u.getElementById(`${i.props.id}`);
              if (g instanceof HTMLInputElement) {
                const b = to(i), v = b.findIndex((h) => g.selectionStart !== null ? g.selectionStart >= h.start && g.selectionStart <= h.end : g.selectionEnd !== null && g.selectionEnd >= h.start && g.selectionEnd <= h.end), $ = (c = b[b.length - 1]) === null || c === void 0 ? void 0 : c.end;
                if (g.selectionStart === 0 && g.selectionEnd === ((f = i.props.inputText) === null || f === void 0 ? void 0 : f.length))
                  return;
                if (typeof i.props.searchValue == "string" && i.props.highlightedRange) {
                  if (b.length) {
                    const h = i.props.highlightedRange, [m, k] = ws(i, b);
                    if (g.selectionEnd !== null && (g.selectionEnd < m || g.selectionEnd > k)) {
                      const y = h.end - h.start - (k - m), D = g.selectionEnd;
                      i.props.inputText = i.props.option.label, i.props.highlightedRange = void 0, i.props.searchValue = null, g.value = i.props.inputText, g.selectionStart = g.selectionEnd = D + (D > m ? y : 0);
                    }
                  }
                } else if (v >= 0 && g.selectionStart !== null && ($ !== ((p = i.props.inputText) === null || p === void 0 ? void 0 : p.length) || g.selectionStart < $)) {
                  const h = b[v], m = i.props.inputText.substr(0, $), k = h.start + (h.index > 0 ? 1 : 0), y = h.end + (b.length - 1 > h.index ? -1 : 0);
                  m !== i.props.inputText && (i.props.inputText = m, g.value = m), i.props.highlightedRange = h, g.selectionStart = k, g.selectionEnd = y;
                } else
                  i.props.highlightedRange = void 0, xs(i);
                if (g.selectionStart !== null && g.selectionStart >= $ && i.props.inputText.substring($, $ + 2) !== ", ") {
                  let h = i.props.inputText.substring(0, $);
                  h = i.props.multiple && i.props.max && Array.isArray(i.props.inputStd) && i.props.inputStd.length >= i.props.max ? h : `${h},`, i.props.inputText = `${h} ${i.props.inputText.substring($).replace(/^[,\s]{1,2}/, "")}`;
                }
              }
            }, 5));
          }(l);
        }
      }));
    }(e);
    const o = e.context.handlers.keydown;
    e.context.handlers.keydown = (a) => {
      o(a), function(s, l) {
        var i, u, c, f;
        if (["ArrowRight", "ArrowLeft"].includes(l.key) && l.target instanceof HTMLInputElement && l.target.selectionEnd !== null && l.target.selectionStart !== null) {
          if (l.target.selectionStart === 0 && l.target.selectionEnd === ((i = s.props.inputText) === null || i === void 0 ? void 0 : i.length))
            l.key === "ArrowLeft" ? t(0) : t(-1);
          else if (!s.props.searchValue) {
            s.props.searchValue = null;
            const p = to(s), g = (u = p[p.length - 1]) === null || u === void 0 ? void 0 : u.end;
            l.target.selectionStart < g && (l.target.selectionStart = Math.max(0, l.key === "ArrowLeft" ? l.target.selectionStart - 2 : l.target.selectionEnd + 2));
          }
        } else if (["Delete", "Backspace"].includes(l.key))
          s.props.highlightedRange && !s.props.searchValue ? (Yo(s, s.props.highlightedRange.option), s.props.inputStd.length === 0 && (s.props.highlightedRange = void 0)) : l.target instanceof HTMLInputElement && (s.props.searchValue = null, t(-1, !0) && l.preventDefault());
        else if (l.target instanceof HTMLInputElement && l.target.selectionStart === 0 && l.target.selectionEnd === ((c = s.props.inputText) === null || c === void 0 ? void 0 : c.length) && (!((f = s.props.inputText) === null || f === void 0) && f.length) && s.props.selections.length === 0)
          l.preventDefault();
        else if (l.key === "Tab")
          return;
        l.key === "ArrowLeft" && t(-1, !0) && l.preventDefault();
      }(e, a);
    };
    const n = e.context.handlers.focus;
    e.context.handlers.focus = (a) => {
      n(e, a);
      const s = new Event("selectionchange");
      document.dispatchEvent(s);
    }, e.on("blur", () => {
      e.props.selections.length ? (e.props.inputText = e.props.selections.map((a) => a.label).join(", "), e.props.searchValue = null) : e.props.selections.length || (e.props.inputText = "", e.props.searchValue = "");
    });
  }), e.on("prop:expanded", ({ payload: o }) => {
    o || e.props.inputStd.length ? o && (e.props.options.length && !e.props.alwaysLoadOnOpen || (e.props.options = [], He(e, e.props.searchValue))) : (e.props.searchValue = "", e.props.inputText = "");
  }), e.on("prop:selections", () => {
    var o;
    const n = [...e.props.selections].map((s) => s.label).join(", ");
    let a = "";
    if (go && e.isCreated) {
      const s = (o = e.props.__root) === null || o === void 0 ? void 0 : o.getElementById(`${e.props.id}`);
      if (s == null || s.focus(), Ft() === s && Array.isArray(e._value) && e._value.length) {
        if (e.props.max && e._value.length >= Number(e.props.max))
          return;
        a = ", ";
      }
    }
    e.props.inputText = `${n}${a}`, e.props.reloadOnCommit && (e.props.searchValue = "", He(e, e.props.searchValue));
  });
  const t = (o, n = !1) => {
    var a, s;
    const l = (a = e.props.__root) === null || a === void 0 ? void 0 : a.getElementById(`${e.props.id}`);
    if (!(l instanceof HTMLInputElement))
      return !1;
    const i = to(e), u = o >= 0 ? o : i.length - 1;
    if (i[u] === void 0)
      return !1;
    const c = (s = i[u]) === null || s === void 0 ? void 0 : s.end;
    return l.selectionStart !== null && (!n || l.selectionStart >= c && l.selectionStart <= c + 2) && (l.selectionStart = i[u].start + (u > 0 ? 1 : 0), l.selectionEnd = i[u].end + (u < i.length - 1 ? -1 : 0), !0);
  };
  let r;
  e.on("selectRange", ({ payload: o }) => t(...o)), e.on("prop:highlightedRange", ({ payload: o }) => {
    e.props.hasHighlightedRange = !!o, o && e.props.expanded && r !== o.option && (r = o.option, ba(e));
  });
}
function xs(e) {
  var t;
  if (!go)
    return;
  const r = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}`);
  r && r.scrollTo({ left: r.scrollWidth, behavior: "smooth" });
}
function ws(e, t) {
  var r;
  const o = e.props.highlightedRange, n = o.index, a = o.start + (n ? 1 : 0), s = t.length - 1 > n ? t[t.length - 1].end - t[n + 1].start : 0;
  return [a, ((r = e.props.inputText) === null || r === void 0 ? void 0 : r.length) - s + (t.length - 1 > o.index ? -1 : 0)];
}
function to(e) {
  const t = Ca(e);
  return Array.isArray(t) && t.length ? t.reduce((r, o, n) => {
    var a;
    const s = ((a = r[n - 1]) === null || a === void 0 ? void 0 : a.end) || 0;
    let l = 0;
    return t.length - 1 !== n && l++, n !== 0 && l++, r.push({ option: o, index: n, start: s, end: s + o.label.length + l }), r;
  }, []) : [];
}
function cu(e) {
  (function(t) {
    t.on("prop:expanded", ({ payload: r }) => {
      r ? (t.props.searchValue = "", t.props.options.length && !t.props.alwaysLoadOnOpen || (t.props.options = [], He(t, t.props.searchValue, !0))) : (t.props.searchValue = "", t.props.inputText = "");
    });
  })(e), function(t) {
    t.on("handleSearchInput", ({ payload: r }) => {
      r && !t.props.expanded ? (t.props.searchExpand = !0, t.props.expanded = !0) : !r && t.props.expanded && (t.props.expanded = !1), t.props.searchValue = t.props.inputText;
    });
  }(e), function(t) {
    t.on("prop:selections", () => {
      t.isCreated && (t.props.inputText = "", t.props.searchValue = "", t.props.optionRemoved || t.props.reloadOnCommit && He(t, t.props.searchValue, !0));
    });
  }(e);
}
function vh(e) {
  (function(t) {
    function r(n) {
      n.props.inputStd.length === 0 ? (n.props.inputText = "", n.props.searchValue = "") : (n.props.inputText = n.props.selections[0].label, n.props.searchValue = n.props.selections[0].label);
    }
    function o(n) {
      n.props.clearSearchOnOpen && !n.props.searchExpand && (n.props.inputText = "", n.props.searchValue = ""), n.props.searchValue = n.props.inputText, n.props.options.length && !n.props.alwaysLoadOnOpen || n.props.searchExpand || (n.props.options = [], He(n, n.props.searchValue, !0)), n.props.searchExpand && (n.props.searchExpand = !1);
    }
    t.on("prop:expanded", ({ payload: n }) => {
      n ? o(t) : r(t);
    });
  })(e), function(t) {
    t.on("handleSearchInput", ({ payload: r }) => {
      r === "" ? (t.props.inputStd.length === 0 && (t.props.expanded = !1), t.input(void 0)) : r && !t.props.expanded && (t.props.searchExpand = !0, t.props.expanded = !0), t.props.searchValue = t.props.inputText;
    });
  }(e), function(t) {
    t.on("prop:selections", ({ payload: r }) => {
      t.props.inputText = r.length ? r[0].label : "", t.props.searchValue = r.length ? r[0].label : "", t.isCreated && t.props.expanded && r.length === 0 && He(t, t.props.searchValue, !0);
    });
  }(e);
}
function xa(e, t) {
  var r;
  if (it.has(e))
    return;
  it.set(e, []), t.reverse && tr.add(e), t.prefix && gr.set(e, t.prefix), t.suffix && Xo.set(e, t.suffix), gu(e, t.pattern, t.partOverrides, t.explicitParts);
  const o = Go.get(e), n = o == null ? void 0 : o.some((l) => ct(l)), a = o == null ? void 0 : o.some((l) => function(i) {
    return !!i && i.type === "group" && Array.isArray(i.parts);
  }(l));
  if (n && a)
    throw new Error("Cannot use enums and groups in the same mask.");
  const s = n ? "select" : (r = t.mode) !== null && r !== void 0 ? r : "shift";
  if (a && s === "select")
    throw new Error("Cannot use groups in select mode.");
  (t.placeholder || s === "select") && Xn.add(e), bt.set(e, s), t.onChange && Tr.set(e, t.onChange), e.addEventListener("beforeinput", (l) => {
    if (ho || l.inputType === "insertLineBreak")
      return;
    if (l.inputType.startsWith("history"))
      return function(p, g) {
        p.addEventListener("input", (b) => {
          var v;
          b.preventDefault(), b.stopImmediatePropagation();
          const $ = it.get(p);
          if ($ != null && $.length) {
            const h = ((v = ir.get(p)) !== null && v !== void 0 ? v : $.length - 1) + (g.endsWith("Undo") ? -1 : 1), m = $[h];
            if (!m)
              return;
            hu(p, m), p.setSelectionRange(...m.selectionAfter), ir.set(p, h), Tr.has(p) && Tr.get(p)(m, p);
          }
        }, { once: !0 });
      }(e, l.inputType);
    l.preventDefault();
    const i = (u = l.inputType).startsWith("insert") ? "insert" : !!u.startsWith("delete") && (u === "deleteContentForward" ? "deleteContentForward" : "deleteContentBackward");
    var u;
    const c = Ze(e), f = e.value;
    i && Nr(e, { type: i, selectionBefore: c, data: l.data, valueBefore: f, suffix: t.suffix, prefix: t.prefix });
  }), s === "select" && e.addEventListener("keydown", (l) => {
    switch (l.key) {
      case "ArrowRight":
        return l.preventDefault(), sn(e);
      case "ArrowLeft":
        return l.preventDefault(), sn(e, -1);
      case "ArrowUp":
        return void (Es(e, 1) && l.preventDefault());
      case "ArrowDown":
        return void (Es(e, -1) && l.preventDefault());
      case "Tab":
        return Jn ? void l.preventDefault() : void (sn(e, l.shiftKey ? -1 : 1) && l.preventDefault());
    }
  }), e.addEventListener("focus", () => function(l) {
    var i;
    const u = Xn.has(l), c = bt.get(l);
    if (u) {
      let f = null, p = null, g = !1;
      const b = c === "shift" ? 0 : 1, v = l.value;
      jn(l, { type: "insert", data: v, selectionBefore: [0, 0, "none"], valueBefore: v }, c === "shift" ? "" : v, (h, m) => (f === null && m.type === "char" && (f = h.pos - b), (nt(m) || ct(m)) && h.value.endsWith(m.placeholder) ? (p = h.pos - b, !1) : (m.type === "char" && (g = !0), !0)));
      const $ = (i = p ?? (g ? v.length : f)) !== null && i !== void 0 ? i : null;
      if ($ !== null) {
        let h = [$, $, "none"];
        if (bt.get(l) === "select") {
          const [m] = Ce(l), k = at(l, h);
          k !== void 0 && k in m && (h = m[k]);
        }
        return function(m, k, y = 50) {
          Et.set(m, Ar(m, k));
          const D = async () => {
            if (!Rr || Ft() !== m)
              return;
            bt.get(m) === "select" && (await new Promise((C) => setTimeout(C, 10)), function(C) {
              let w = Ze(C);
              if (w[0] === w[1] && w[0] === 0 || C.value.length === w[1] && w[0] === 0)
                return;
              w = Wn(C, w);
              const [L] = Ce(C), d = at(C, w), _ = w[0];
              d !== void 0 && L.some((I) => _ >= I[0] && _ < I[1]) && Et.set(C, Ar(C, L[d]));
            }(m));
            const x = Et.get(m);
            x && m.setSelectionRange(...x);
          };
          D(), document.addEventListener("selectionchange", D), setTimeout(() => {
            document.removeEventListener("selectionchange", D), Et.delete(m);
          }, y);
        }(l, h);
      }
    }
  }(e)), e.addEventListener("selection", (l) => function(i, u) {
    if (Et.get(i))
      return;
    Du(i), u = Wn(i, u);
    const [c] = Ce(i), f = at(i, u), p = f !== void 0 && Ar(i, c[f]);
    p && !Nt(u, p) && Eo(i, p, !0);
  }(e, l.detail)), Nr(e, { type: "insert", selectionBefore: [0, 0, "forward"], data: e.value, valueBefore: "", suffix: t.suffix, prefix: t.prefix });
}
function _s(e) {
  var t, r;
  if (Tt.has(e))
    return;
  const o = (t = it.get(e)) !== null && t !== void 0 ? t : [], n = o[(r = ir.get(e)) !== null && r !== void 0 ? r : o.length - 1];
  if (n) {
    const a = n.selectionAfter, [s, l] = Ce(e, n.valueAfter), i = at(e, a, [s, l]);
    if (i !== void 0 && i in s) {
      const u = l[i], c = s[i], f = [a[0] - c[0], a[1] - c[0], "none"];
      Tt.set(e, [u, f]);
    }
  }
}
function ks(e) {
  Tt.delete(e);
}
function Ds(e, t) {
  const r = typeof e == "string" || !it.has(e), o = typeof e == "string" ? fu(e) : e;
  if (r)
    t.prefix && gr.set(o, t.prefix), t.suffix && Xo.set(o, t.suffix), o.value = wa(o, o.value), xa(o, t);
  else {
    const n = _a(o), a = o.value;
    o.value = "", Nr(o, { type: "insert", selectionBefore: [0, n ? n.valueAfter.length : 0, "none"], valueBefore: n ? n.valueAfter : "", data: a, suffix: t.suffix, prefix: t.prefix });
  }
  return o.value;
}
function fu(e) {
  return { value: e, selectionStart: 0, selectionEnd: 0, scrollWidth: 0, clientWidth: 0, addEventListener: () => {
  }, dispatchEvent: () => {
  }, setSelectionRange: () => {
  } };
}
function gu(e, t, r, o, n) {
  n = e && tr.has(e) || n;
  const a = (o ?? function(p) {
    const g = Object.values(Gb);
    if (!p)
      return g;
    const b = { ...p }, v = [];
    for (const h of g)
      if (!sr(h))
        if ("token" in h && h.token in p) {
          const m = { ...h, ...p[h.token] };
          Ss(m) && v.push(m), delete b[h.token];
        } else
          v.push(h);
    const $ = Object.values(b);
    for (const h of $)
      Ss(h) ? v.push(h) : console.warn(`Invalid ${h.type} token`, h);
    return v;
  }(r)).sort((p, g) => {
    const b = "token" in p ? p.token.length : -1, v = "token" in g ? g.token.length : -1;
    return b === v ? 0 : b > v ? -1 : 1;
  });
  let s = [];
  [t, s] = function(p, g, b, v) {
    let $, h = 0, m = "", k = "", y = "";
    const D = [];
    for (; m = ke(p); )
      m === g && $ !== v ? (h++, h > 1 && (y += m)) : m === b && h && $ !== v ? (h--, h === 0 ? (k += `{$${D.length}}`, D.push(y), y = "") : y += m) : h ? y += m : $ !== v || m !== g && m !== b ? k += m : k = `${k.substring(0, k.length - 1)}${m}`, $ = m, p = p.substring(m.length);
    return [k, D];
  }(t, "{", "}", "\\");
  const l = s.length;
  t = a.reduce((p, g, b) => "token" in g ? p.replaceAll(`\\${g.token}`, "{“!”}").replaceAll(g.token, `{$${l + b}}`).replaceAll("{“!”}", g.token) : p, t);
  const i = function(p, g, b) {
    return p.reduce((v, $) => {
      const [h, m] = function(D) {
        const [x, ...C] = D.split("|"), w = C.reduce((L, d) => {
          const [_, I = !0] = d.split(":");
          return Object.assign(L, { [_]: I });
        }, {});
        return [x, w];
      }($);
      let k = gu(null, h, void 0, g, b);
      k = k.map((D) => {
        const x = { ...D };
        if (x.type === "char" && m.placeholder)
          x.placeholder = m.placeholder;
        else if (x.type === "enum")
          throw new Error("Groups cannot contain enums.");
        return x;
      });
      const y = { type: "group", parts: k, ...m };
      return v.push(y), v;
    }, []);
  }(s, a, n).concat(a), u = /\{\$\d+\}/g, c = t.match(u), f = t.split(u).reduce((p, g, b) => {
    if (g && (g = g.replaceAll("\\", ""), p.push({ type: "literal", value: n ? [...g].reverse().join("") : g })), c && c[b]) {
      const v = c[b], $ = Number(v.substring(2, v.length - 1));
      !isNaN($) && i[$] && p.push(i[$]);
    }
    return p;
  }, []);
  return n && f.reverse(), e && Go.set(e, f), f;
}
function Ss(e) {
  return !!e && (sr(e) || nt(e) || ct(e));
}
function nt(e) {
  return !!e && e.type === "char" && e.pattern instanceof RegExp && mu(e);
}
function ct(e) {
  return !!e && e.type === "enum" && Array.isArray(e.values) && mu(e);
}
function mu(e) {
  return !!e && "placeholder" in e && "token" in e;
}
function sr(e) {
  return !!e && e.type === "literal" && typeof e.value == "string";
}
function Nt(e, t) {
  return e === t || e !== void 0 && t !== void 0 && e[0] === t[0] && e[1] === t[1];
}
function Ze(e) {
  var t, r;
  return [(t = e.selectionStart) !== null && t !== void 0 ? t : e.value.length, (r = e.selectionEnd) !== null && r !== void 0 ? r : e.value.length, "none"];
}
function Nr(e, t) {
  var r;
  tr.has(e) && Ms(t);
  let o = !1;
  switch (mo.set(e, "playing"), t.type) {
    case "insert":
      o = function(n, a) {
        let s = Cs(a);
        const l = a.selectionBefore, i = function(c, f) {
          var p, g, b;
          if (bt.get(c) === "select") {
            const [v, $] = Ce(c), h = v.findIndex((k) => Nt(k, f.selectionBefore)), m = (p = $[h]) !== null && p !== void 0 ? p : null;
            if (nt(m)) {
              const k = f.selectionBefore, y = k[1] - k[0], D = f.valueBefore.substring(k[0], k[1]), x = m.selectDirection === "left", C = bu(D, m), w = x ? 0 : function(d, _, I) {
                if (!d)
                  return 0;
                let O = "";
                for (; d.length; ) {
                  const N = ke(d);
                  d = d.substring(N.length), _.pattern.test(N) && (O += N);
                }
                return Math.min(Math.max(O.length, 1), I);
              }(f.data, m, y);
              if (C.length >= y)
                return x || (f.insertPos = k[1] - w), ((g = m.selectFill) !== null && g !== void 0 ? g : m.placeholder).repeat(y);
              const L = ((b = m.selectFill) !== null && b !== void 0 ? b : m.placeholder).repeat(y - C.length - (x ? 0 : w));
              return f.insertPos = x ? k[0] + C.length : k[1] - w, m.selectDirection === "left" ? `${C}${L}` : `${L}${C}${m.placeholder}`;
            }
            if (ct(m)) {
              const k = f.selectionBefore;
              return f.valueBefore.substring(k[0], k[1]);
            }
          }
          return "";
        }(n, a);
        s = `${s.substring(0, l[0])}${i}${s.substring(l[1])}`;
        const u = jn(n, a, s);
        return qb.set(n, u.endPos), { ...a, valueAfter: u.value, selectionAfter: yh(n, u), unmasked: u.unmasked, complete: u.complete, meta: u.meta };
      }(e, t);
      break;
    case "deleteContentBackward":
    case "deleteContentForward":
      o = function(n, a) {
        const s = Cs(a), l = a.selectionBefore, i = tr.has(n);
        let u = l[0], c = l[1];
        u === c && (a.type !== "deleteContentBackward" || i ? c += co(s, u) : u -= co(s, u, "backward"));
        const f = bt.get(n);
        let p = "";
        if (f === "select") {
          const [v, $] = Ce(n), h = at(n, [u, c, "none"]);
          if (h !== void 0) {
            const m = $[h], k = v[h];
            nt(m) ? p = m.placeholder.repeat(c - u) : ct(m) && ([p, u] = Nt(k, Ze(n)) ? [m.placeholder, u] : function(y, D, x, C) {
              const w = C.valueBefore, L = co(w, C.selectionBefore[0], "backward"), d = Math.max(x[0], C.selectionBefore[0] - L), _ = w.substring(x[0], d), I = Ur(D.values, _);
              let O = I == null ? void 0 : I.substring(_.length);
              return I && !O && yu(D.values, I) && (O = I), [O ?? D.placeholder, O ? d : x[0]];
            }(0, m, k, a));
          }
        }
        const g = `${s.substring(0, u)}${p}${s.substring(c)}`, b = jn(n, a, g);
        return { ...a, valueAfter: b.value, selectionAfter: kh(n, b, a, u), unmasked: b.unmasked, complete: b.complete, meta: b.meta };
      }(e, t);
  }
  if (tr.has(e) && o && Ms(o), o && function(n, a) {
    a.prefix && (a.valueAfter = a.prefix + a.valueAfter, a.selectionAfter = Ar(n, a.selectionAfter)), a.suffix && (a.valueAfter += a.suffix);
  }(e, o), o && function(n) {
    return n.valueBefore !== n.valueAfter || n.selectionBefore[0] !== n.selectionAfter[0] || n.selectionBefore[1] !== n.selectionAfter[1];
  }(o)) {
    Tr.has(e) && wn.set(e, () => {
      wn.delete(e), o && Tr.get(e)(o, e);
    }), mo.set(e, "beforeCallback");
    let n = (r = it.get(e)) !== null && r !== void 0 ? r : [];
    const a = ir.get(e);
    a && (n = n.slice(0, a), ir.delete(e)), n.push(o), it.set(e, n), Rr && Ft() === e && typeof document.execCommand == "function" && !ho ? (Eo(e, [0, e.value.length, "forward"], !0), ho = !0, document.execCommand("insertText", void 0, o.valueAfter), ho = !1) : hu(e, o), Rr && Ft() === e && Eo(e, o.selectionAfter);
    const s = wn.get(e);
    s && s(), Du(e);
  }
  mo.set(e, "complete");
}
function wa(e, t) {
  var r, o;
  const n = (r = gr.get(e)) !== null && r !== void 0 ? r : "", a = (o = Xo.get(e)) !== null && o !== void 0 ? o : "";
  return n && t.startsWith(n) && (t = t.substring(n.length)), a && t.endsWith(a) && (t = t.substring(0, t.length - a.length)), t;
}
function Ar(e, t) {
  const r = gr.get(e), o = [...t];
  return r && (o[0] += r.length, o[1] += r.length), o;
}
function Wn(e, t) {
  const r = gr.get(e), o = [...t];
  return r && (o[0] -= r.length, o[1] -= r.length), o;
}
function Cs(e) {
  let t = e.valueBefore;
  const r = e.selectionBefore;
  if (e.suffix && t.endsWith(e.suffix) && (t = t.substring(0, t.length - e.suffix.length), e.valueBefore = t, r[0] >= t.length && (r[0] = t.length), r[1] >= t.length && (r[1] = t.length)), e.prefix && t.startsWith(e.prefix)) {
    const o = e.prefix.length;
    t = t.substring(o), e.valueBefore = t, r[0] = Math.max(r[0] - o, 0), r[1] = Math.max(r[1] - o, 0);
  }
  return t;
}
function Eo(e, t, r = !1) {
  r && (ur.add(e), setTimeout(() => ur.delete(e), 5)), Et.get(e) && Et.set(e, t), e.setSelectionRange(...t);
}
function hu(e, t, r = "After") {
  if (e.value = t[`value${r}`], Rr) {
    const o = new InputEvent("input", { inputType: t.type === "insert" ? "insertText" : t.type, data: t.data });
    e.dispatchEvent(o);
  }
}
function ke(e) {
  if (e == null)
    return "";
  const t = Vo.test(e.charAt(0)) && Vo.test(e.charAt(1)) ? 2 : 1;
  return e.substring(0, t);
}
function co(e, t, r = "forward") {
  if (r === "backward")
    return t === 0 ? 0 : t === 1 ? 1 : Vo.test(e.charAt(t)) && Vo.test(e.charAt(t - 1)) ? 2 : 1;
  const o = e.length - t;
  return o === 0 ? 0 : o === 1 ? 1 : ke(e.substring(t)).length;
}
function vu(e, t) {
  const r = ke(e.data), o = r.length;
  if (e.value += r, e.pos += o, typeof e.data == "string" && (e.data = e.data.substring(o), e.data.length || (e.endPos = e.pos)), t)
    return t.substring(o);
}
function Ls(e) {
  const t = ke(e.buffer), r = t.length;
  e.value += t, e.pos += r, e.buffer = e.buffer.substring(r);
}
function bh(e, t) {
  const r = ke(t), o = r.length;
  return e.value += r, e.pos += o, t.substring(o);
}
function $h(e, t) {
  for (; t.buffer; ) {
    const r = ke(t.buffer);
    if (e.pattern.test(r) || t.placeholder && e.placeholder === r)
      return void (t.mode !== "replace" && t.mode !== "select" || (t.buffer = t.buffer.substring(r.length)));
    t.buffer = t.buffer.substring(r.length);
  }
}
function Is(e, t) {
  const r = e.values.concat([e.placeholder]).map((o) => o.toLowerCase()).sort((o, n) => o.length > n.length ? -1 : 1);
  for (; t.buffer; ) {
    const o = t.buffer.toLowerCase(), n = r.find((a) => o.startsWith(a));
    if (n) {
      const a = t.buffer.substring(0, n.length);
      return t.buffer = t.buffer.substring(n.length), a;
    }
    t.buffer = t.buffer.substring(co(t.buffer, 0));
  }
  return null;
}
function bu(e, t) {
  let r = e.replaceAll(t.placeholder, "");
  const o = t.selectDirection === "left";
  if (t.selectFill) {
    const a = new RegExp(`${o ? "" : "^"}${n = t.selectFill, n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")}+${o ? "$" : ""}`);
    r = r.replace(a, "");
  }
  var n;
  return r;
}
function yh(e, t) {
  let r = [t.endPos, t.endPos, "forward"];
  if (t.mode !== "select")
    return r;
  const o = Ze(e);
  r = [o[0], t.endPos, "none"];
  const [n, a] = Ce(e, t.value), s = at(e, r, [n, a]);
  if (s === void 0 || !(s in n) || !(s in a))
    return r;
  const l = n[s], i = a[s], u = t.value.slice(l[0], l[1]);
  if (nt(i) && bu(u, i).length === u.length && s < n.length - 1)
    return sl(), n[s + 1];
  if (ct(i) && t.insertPos >= l[0] && t.insertPos <= l[1]) {
    if (t.cycle)
      return l;
    const c = function(p, g, b) {
      if (p.originalData === null)
        return 0;
      const v = p.insertPos >= g ? p.value.substring(g, p.insertPos) : "", $ = `${v}${p.originalData}`, h = Ur(b.values, $);
      return h ? $u($, h).length - v.length : 0;
    }(t, l[0], i);
    if (t.insertPos + c === l[1])
      return yu(i.values, u) ? [l[1], l[1], "forward"] : (sl(), n[s + 1] ? n[s + 1] : n[s]);
    const f = [t.insertPos + c, l[1], "none"];
    return Nt(f, o) || (ur.add(e), setTimeout(() => ur.delete(e), 5)), f;
  }
  return l;
}
function jn(e, t, r, o) {
  var n, a;
  const s = (n = Go.get(e)) !== null && n !== void 0 ? n : [], l = { pos: 0, insertPos: (a = t.insertPos) !== null && a !== void 0 ? a : t.selectionBefore[0], range: t.selectionBefore, chars: 0, placeholder: Xn.has(e), buffer: r, data: t.data, originalData: t.data, value: "", mode: bt.get(e) || "replace", endPos: t.selectionBefore[0], rangeParts: Ce(e), unmasked: "", complete: !0, cycle: t.cycle, meta: [] };
  return Kn(s, l, void 0, o), l;
}
function Kn(e, t, r, o) {
  var n, a;
  const s = { ...t };
  r != null && r.placeholder && (t.placeholder = !0);
  const l = r != null && r.repeat && ((n = r.nextPart) === null || n === void 0 ? void 0 : n.type) === "literal" ? r.nextPart.value : null;
  let i = 0;
  const u = e.reduce((f, p) => f + (p.type === "char" ? 1 : 0), 0), c = t.chars;
  for (const f of e) {
    const p = e[i + 1];
    switch (f.type) {
      case "literal":
        wh(f, t, e.at(-1) === f);
        break;
      case "char":
        _h(f, t, l);
        break;
      case "enum":
        xh(f, t);
        break;
      case "group":
        const b = { repeat: (a = f.repeat) !== null && a !== void 0 && a, nextPart: p, repeats: 0, placeholder: !!f.placeholder };
        Kn(f.parts, t, b, o);
    }
    if (o && o(t, f) === !1)
      break;
    const g = sr(p) && i + 2 === e.length && c !== t.chars;
    if (!(t.buffer || t.data || t.placeholder || g))
      break;
    i++;
  }
  if (t.chars < u && (t.complete = !1), r) {
    const f = t.chars - c, p = f === u, g = !(!t.data || l && t.data.startsWith(l) && t.insertPos <= t.pos), b = !(t.buffer && l && t.buffer.startsWith(l) && t.insertPos >= t.pos + l.length) && (t.buffer || g);
    if (r.repeat && b && p)
      return r.repeats++, Kn(e, t, r, o);
    if (!p) {
      t.complete = !1;
      const v = e.reverse().find(($) => $.type === "literal");
      e.reverse(), sr(v) && t.value.endsWith(v.value) && (t.value = t.value.substring(0, t.value.length - v.value.length), t.pos = t.value.length);
    }
    u > 1 && f < u && f !== 0 && t.insertPos <= t.pos ? t.data = "" : r.repeat && !p && r.repeats && Object.assign(t, s);
  }
  t.placeholder = s.placeholder;
}
function xh(e, t) {
  const [r, o] = t.rangeParts, n = r[o.indexOf(e)];
  if (n && (t.insertPos <= t.pos || t.insertPos >= n[0] && t.insertPos <= n[1]) && t.data) {
    const a = t.buffer.substring(0, t.insertPos - t.pos), s = `${a}${t.data}`, l = Ur(e.values.concat([e.placeholder]), s);
    if (l) {
      const i = $u(s, l);
      return t.data = t.data.substring(i.length), t.value += l, l !== e.placeholder ? t.unmasked += l : t.complete = !1, t.meta.push({ type: l !== e.placeholder ? "enum" : "placeholder", value: l }), a ? t.buffer = t.buffer.substring(a.length) : Is(e, t), t.endPos = t.pos + i.length, void (t.pos = t.value.length);
    }
    t.data = "";
  }
  if (t.buffer) {
    const a = Is(e, t);
    if (a)
      return t.value += a, a !== e.placeholder ? t.unmasked += a : t.complete = !1, t.meta.push({ type: a !== e.placeholder ? "enum" : "placeholder", value: a }), void (t.pos = t.value.length);
  }
  t.complete = !1, t.value += e.placeholder, t.meta.push({ type: "placeholder", value: e.placeholder }), t.pos = t.value.length;
}
function wh(e, t, r) {
  let o = e.value;
  if (t.data === "" && !t.buffer && !t.placeholder && !r)
    return;
  let n = !1;
  for (; o; ) {
    const a = t.insertPos <= t.pos ? ke(t.data) : "", s = ke(o);
    if (a === s)
      o = vu(t, o), t.meta.push({ type: "literal", value: s }), n = !0;
    else if (!n || t.data || t.data === null || t.placeholder || r)
      o = bh(t, o), t.meta.push({ type: "literal", value: s });
    else if (n && !t.data)
      break;
    t.buffer.startsWith(s) && (t.buffer = t.buffer.substring(s.length));
  }
  t.data === null && !t.buffer && t.insertPos <= t.pos && !t.placeholder && (t.value = t.value.substring(0, t.value.length - e.value.length), t.pos = t.endPos = t.value.length);
}
function _h(e, t, r) {
  var o;
  let n = !0;
  if (t.insertPos <= t.pos)
    for (; !((o = t.data) === null || o === void 0) && o.length; ) {
      const a = ke(t.data);
      if (e.pattern.test(a))
        return vu(t), t.meta.push({ type: "char", value: a }), t.chars++, t.unmasked += a, void $h(e, t);
      if (typeof t.data == "string") {
        if (r && t.data.startsWith(r)) {
          n = !1;
          break;
        }
        t.data = t.data.substring(a.length);
      }
    }
  for (; n && t.buffer; ) {
    const a = ke(t.buffer);
    if (e.pattern.test(a))
      return t.chars++, t.unmasked += a, Ls(t), void t.meta.push({ type: "char", value: a });
    if (t.placeholder && a === e.placeholder)
      return Ls(t), void t.meta.push({ type: "placeholder", value: a });
    if (typeof t.buffer == "string") {
      if (r && t.buffer.startsWith(r)) {
        t.buffer = t.buffer.substring(r.length);
        break;
      }
      t.buffer = t.buffer.substring(a.length);
    }
  }
  t.placeholder ? (t.value += e.placeholder, t.meta.push({ type: "placeholder", value: e.placeholder })) : t.endPos = t.pos;
}
function kh(e, t, r, o) {
  const n = [o, o, "none"];
  if (t.mode === "select") {
    const a = Ce(e), s = at(e, n, a), [l, i] = Ce(e, t.value), u = s !== void 0 && As(r.valueBefore, a[0][s], a[1][s]);
    if (s !== void 0 && s in l)
      return u ? l.slice(s).every((f, p) => As(t.value, f, i[s + p])) && l[s - 1] ? l[s - 1] : l[s] : [o, l[s][1], "none"];
  }
  return n;
}
function As(e, t, r) {
  if (sr(r))
    return !1;
  if (nt(r)) {
    let o = t[0];
    for (; o < t[1]; ) {
      const n = ke(e.substring(o));
      if (n !== r.placeholder)
        return !1;
      o += n.length;
    }
  }
  return !ct(r) || e.substring(t[0], t[1]) === r.placeholder;
}
function $u(e, t) {
  let r = "";
  do {
    const o = ke(e).toLowerCase(), n = ke(t).toLowerCase();
    if (o !== n)
      break;
    r += o, e = e.substring(o.length), t = t.substring(n.length);
  } while (e.length && t.length);
  return r;
}
function Ce(e, t) {
  const r = Go.get(e);
  if (!r)
    return [[], []];
  if (yn.has(e))
    return yn.get(e);
  const o = t ?? wa(e, e.value), n = [], a = [];
  let s = null, l = null, i = 0, u = !0;
  for (const f of r)
    if (sr(f))
      s = f, l !== null && (n.push([l, i, "none"]), l = null), i += f.value.length;
    else {
      if (nt(s) && nt(f) && f.token === s.token)
        i++;
      else if (nt(f))
        l === null ? (l = i, a.push(f)) : (n.push([l, i, "none"]), l = i, a.push(f)), i++;
      else if (ct(f)) {
        l && n.push([l, i, "none"]), xu(f) || (u = !1);
        const p = Dh(o, f, i);
        l = null, n.push([i, i + p, "none"]), a.push(f), i += p;
      }
      s = f;
    }
  l !== null && n.push([l, i, "none"]);
  const c = [[...n], [...a]];
  return u && !t && yn.set(e, c), c;
}
function Dh(e, t, r) {
  if (xu(t))
    return t.values[0].length;
  const o = e.slice(r), n = Ur(t.values.concat([t.placeholder]), o);
  return n ? n.length : 0;
}
function Ur(e, t, r = null, o) {
  var n;
  if (t.length === 0)
    return r;
  if (!o) {
    const u = e.find((c) => c.toLowerCase() === t.toLowerCase());
    if (u)
      return u;
  }
  const a = ke(t.toLowerCase()), s = `${o ?? ""}${a}`, l = e.filter((u) => u.toLowerCase().startsWith(s)), i = l.find((u) => u.toLowerCase() === s);
  return i && (r = i), l.length === 0 ? r : l.length === 1 ? l[0] : (l.length > 1 && (r = l[0]), (n = Ur(l, t.substring(a.length), r, s)) !== null && n !== void 0 ? n : l[0]);
}
function yu(e, t) {
  return t = t.toLowerCase(), e.some((r) => (r = r.toLowerCase()).startsWith(t.toLocaleLowerCase()) && r !== t);
}
function xu(e) {
  if (!xn.has(e) && Array.isArray(e.values) && e.values.length > 0) {
    const t = e.values[0].length;
    if (e.placeholder.length !== t)
      return !1;
    xn.set(e, e.values.every((r) => r.length === t));
  }
  return xn.get(e);
}
function sn(e, t = 1) {
  const [r] = Ce(e), o = at(e, Wn(e, Ze(e)));
  return o !== void 0 && r[o + t] !== void 0 && (e.setSelectionRange(...Ar(e, r[o + t])), !0);
}
function Es(e, t = 1) {
  const [r, o] = Ce(e), n = at(e, Ze(e));
  if (n !== void 0 && n in o) {
    const a = o[n];
    if (ct(a)) {
      const s = r[n], l = e.value.slice(s[0], s[1]);
      let i = null, u = a.values.indexOf(l);
      const c = a.values.length - 1;
      if (u !== -1) {
        const f = u + t;
        u = f < 0 ? c : f > c ? 0 : f, i = a.values[u];
      } else
        l === a.placeholder && (i = t > 0 ? a.values[0] : a.values[c]);
      if (i !== null) {
        const f = { selectionBefore: s, insertPos: s[0], type: "insert", data: i, valueBefore: e.value, cycle: !0 };
        return setTimeout(() => Nr(e, f), 0), !0;
      }
    }
  }
  return !1;
}
function wu(e, t) {
  if (!e.length)
    return -1;
  if (e.length === 1)
    return e[0];
  const r = e.length / 2, o = Number.isInteger(r) ? r : Math.floor(r), n = Math.abs(t - e[o - 1]) < Math.abs(t - e[o]) ? [0, o] : [o];
  return wu(e.slice(...n), t);
}
function at(e, t, r) {
  const [o] = r ?? Ce(e), n = o.findIndex((i) => i[0] !== i[1] && (!!Nt(i, t) || t[1] > i[0] && t[1] < i[1]));
  if (n !== -1)
    return n;
  const [a, s] = o.reduce((i, u, c) => (i[0].add(u[0]), i[0].add(u[1]), i[1][u[0]] = c, i[1][u[1]] = c, i), [/* @__PURE__ */ new Set(), {}]), l = wu([...a], t[1]);
  return l in s ? s[l] : void 0;
}
function _a(e) {
  var t, r;
  const o = (t = it.get(e)) !== null && t !== void 0 ? t : [];
  return o[(r = ir.get(e)) !== null && r !== void 0 ? r : o.length - 1];
}
function _u(e, t = !1) {
  const r = _a(e);
  return r && (r.complete || t) ? tr.has(e) ? [...r.unmasked].reverse().join("") : r.unmasked : t ? "" : null;
}
function ku(e) {
  var t;
  const r = _a(e);
  return (t = r == null ? void 0 : r.meta) !== null && t !== void 0 ? t : null;
}
function Ms(e) {
  const t = (o) => [...o].reverse().join(""), r = (o, n) => [n - o[1], n - o[0], o[2]];
  e.data && (e.data = t(e.data)), e.valueBefore = t(e.valueBefore), "valueAfter" in e && (e.valueAfter = t(e.valueAfter)), "selectionAfter" in e && (e.selectionAfter = r(e.selectionBefore, e.valueAfter.length)), e.selectionBefore = r(e.selectionBefore, e.valueBefore.length);
}
function Du(e) {
  if (e.scrollWidth > e.clientWidth && e.selectionStart !== null && e.selectionEnd !== null) {
    const t = e.selectionStart / e.value.length, r = e.selectionEnd / e.value.length;
    e.scrollLeft = r > 0.9 ? e.scrollWidth : t * e.scrollWidth - 20, e.dispatchEvent(new CustomEvent("input-scroll", { bubbles: !1, detail: e.scrollLeft }));
  }
}
function de(e) {
  if (e || (e = /* @__PURE__ */ new Date()), e instanceof Date) {
    const t = new Date(e);
    return t.setMilliseconds(0), t;
  }
  if (function(t) {
    const r = t.match(il);
    if (r) {
      const o = Number(r[2]);
      if (o < 1 || o > 12)
        return !1;
      if (typeof r[3] !== void 0) {
        const n = Number(r[3]);
        if (n < 1 || n > 31)
          return !1;
      }
      if (typeof r[4] !== void 0) {
        const n = Number(r[4]);
        if (n < 0 || n > 23)
          return !1;
      }
      return !0;
    }
    return !1;
  }(e = e.trim()))
    return new Date(function(t) {
      const r = t.match(il);
      return r && r[4] === void 0 ? t + "T00:00:00" : t;
    }(e));
  throw new Error(`Non ISO 8601 compliant date (${e}).`);
}
function er(e, t = 1) {
  const r = de(e);
  return r.setDate(r.getDate() + t), r;
}
function Mo(e) {
  const t = de(e);
  return t.setDate(1), t.setMonth(t.getMonth() + 1), t.setDate(0), t;
}
function qr(e) {
  return Mo(e).getDate();
}
function vt(e, t = 1, r = !1) {
  const o = de(e), n = o.getDate();
  if (r || o.setDate(1), o.setMonth(o.getMonth() + t), !r) {
    const a = qr(o);
    o.setDate(a < n ? a : n);
  }
  return o;
}
function Yt(e, t = 1, r = !1) {
  const o = de(e), n = o.getDate();
  if (r || o.setDate(1), o.setFullYear(o.getFullYear() + t), !r) {
    const a = qr(o);
    o.setDate(a < n ? a : n);
  }
  return o;
}
function st(e) {
  return e.type === "literal" && (e.value = e.value.normalize("NFKC")), e;
}
function Sh(e, t, r, o = !1) {
  function n({ partName: l, partValue: i, token: u }) {
    if (l === "literal")
      return i;
    const c = a[l];
    if (l === "hour" && u === "H")
      return c.replace(/^0/, "");
    if (!(l !== "minute" && l !== "second" || u !== "mm" && u !== "ss" || c.length !== 1))
      return `0${c}`;
    if (l === "dayPeriod") {
      const f = qt(s.getHours() < 12 ? "am" : "pm", r);
      return u === "A" ? f.toUpperCase() : f.toLowerCase();
    }
    return l === "timeZoneName" ? Su(-1 * s.getTimezoneOffset()) : c;
  }
  const a = function(l, i, u, c = !1) {
    function f(h, m = !1) {
      const k = `${u}-u-hc-${m ? "h12" : "h23"}`;
      if (v.push(...new Intl.DateTimeFormat(k, h.reduce((y, D) => D.partName === "literal" ? y : (c && Xb.includes(D.token) && $.push(D), Object.assign(y, D.option)), {})).formatToParts(p).map(st)), c && $.length)
        for (const y of $) {
          let D = [];
          switch (y.token) {
            case "MMMM":
              D = new Intl.DateTimeFormat(k, { dateStyle: "long" }).formatToParts(p).map(st);
              break;
            case "MMM":
              D = new Intl.DateTimeFormat(k, { dateStyle: "medium" }).formatToParts(p).map(st);
          }
          const x = D.find((w) => w.type === y.partName), C = v.findIndex((w) => w.type === y.partName);
          x && C > -1 && (v[C] = x);
        }
    }
    const p = de(l), g = i.filter((h) => h.hour12), b = i.filter((h) => !h.hour12), v = [], $ = [];
    return g.length && f(g, !0), b.length && f(b), v.reduce((h, m) => (h[m.type] = m.value, h), {});
  }(e, t, r, o), s = de(e);
  return t.map((l) => ({ ...l, value: n(l) }));
}
function Su(e) {
  return `${e < 0 ? "-" : "+"}${String(Math.floor(Math.abs(e / 60))).padStart(2, "0")}${String(Math.abs(e % 60)).padStart(2, "0")}`;
}
function Cu(e) {
  if (!/^([+-])[0-3][0-9][0-6][0-9]$/.test(e))
    throw new Error(`Invalid offset: ${e}`);
  return e;
}
function Ch(e) {
  return ["numeric", "2-digit"].includes(e.partValue);
}
function qt(e, t) {
  const r = ul.get(t);
  if (r && r[e])
    return r[e];
  const o = new Date(La);
  o.setUTCHours(e === "am" ? 5 : 20);
  const n = new Intl.DateTimeFormat(t, { timeStyle: "full", timeZone: "UTC", hour12: !0 }).formatToParts(o).map(st).find((a) => a.type === "dayPeriod");
  if (n) {
    const a = r || {};
    return ul.set(t, Object.assign(a, { [e]: n.value })), n.value;
  }
  return e;
}
function Lu(e, t = "+0000") {
  const r = de(e), o = function(n) {
    Cu(n);
    const [a, s, l, i] = n.match(/([+-])([0-3][0-9])([0-6][0-9])/), u = 60 * Number(l) + Number(i);
    return s === "+" ? u : -u;
  }(t);
  return new Date(r.getTime() + 1e3 * o * 60);
}
function Ts(e, t) {
  const r = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: t, hourCycle: "h23" }).formatToParts(e).map(st), o = {};
  return r.forEach((n) => {
    o[n.type] = n.value;
  }), /* @__PURE__ */ new Date(`${o.year}-${o.month}-${o.day}T${o.hour}:${o.minute}:${o.second}Z`);
}
function To(e, t = "UTC", r = "device") {
  r = r === "device" ? Intl.DateTimeFormat().resolvedOptions().timeZone : r;
  const o = de(e), n = Ts(o, t);
  return Su((Ts(o, r).getTime() - n.getTime()) / 1e3 / 60);
}
function lr(e, t) {
  function r(i, [u, c, f]) {
    const p = Object.keys(c)[0];
    return { option: c, partName: p, partValue: c[p], token: u, pattern: f, hour12: i };
  }
  if (Hu.includes(e) || typeof e == "object")
    return function(i, u) {
      const c = { timeZone: "UTC" };
      typeof i == "string" ? c.dateStyle = i : ("date" in i && (c.dateStyle = i.date), "time" in i && (c.timeStyle = i.time));
      const f = new Intl.DateTimeFormat(u, c), p = f.formatToParts(new Date(La)).map(st), g = f.formatToParts(/* @__PURE__ */ new Date("1999-04-05T23:05:01.000Z")).map(st).find((v) => v.type === "hour"), b = g && g.value === "23" ? 24 : 12;
      return p.map((v) => {
        const $ = v.type, h = function(k, y, D, x) {
          const C = y.length, w = !isNaN(Number(y));
          let L;
          switch (k) {
            case "year":
              return C === 2 ? pe.get("YY") : pe.get("YYYY");
            case "month":
              return w ? C === 1 ? pe.get("M") : pe.get("MM") : (L = Os(D, k, y), L === "long" ? pe.get("MMMM") : pe.get("MMM"));
            case "day":
              return C === 1 ? pe.get("D") : pe.get("DD");
            case "weekday":
              switch (L = Os(D, k, y), L) {
                case "narrow":
                  return pe.get("d");
                case "short":
                  return pe.get("ddd");
                default:
                  return pe.get("dddd");
              }
            case "hour":
              return x === 12 ? C === 1 ? pe.get("h") : pe.get("hh") : C === 1 ? pe.get("H") : pe.get("HH");
            case "minute":
              return C === 1 ? pe.get("m") : pe.get("mm");
            case "second":
              return C === 1 ? pe.get("s") : pe.get("ss");
            case "dayPeriod":
              return /^[A-Z]+$/u.test(y) ? pe.get("A") : pe.get("a");
            case "literal":
              return [y, { literal: y }, new RegExp("")];
            case "timeZoneName":
              const d = y.split("-");
              return d.length === 2 && d[1].length === 4 ? pe.get("ZZ") : pe.get("Z");
            default:
              return;
          }
        }(v.type, v.value, u, v.type === "hour" ? b : void 0);
        if (h === void 0)
          return;
        const m = h[1][$];
        return m ? (h[2] || (h[2] = new RegExp(`${h[0]}`, "g")), { option: { [$]: m }, partName: $, partValue: m, token: h[0], pattern: h[2], hour12: b === 12 }) : void 0;
      }).filter((v) => !!v);
    }(e, t);
  let o = e, n = 0;
  const a = (i) => {
    if (i[2] || (i[2] = new RegExp(`(.)?(${i[0]})`, "g")), i[2].test(o)) {
      let u = 0;
      return o = o.replace(i[2], (c, f, p) => f === "\\" ? p : `${typeof f == "string" ? f : ""}{!${u++ ? n : n++}!}`), !!u;
    }
    return !1;
  }, s = function(i) {
    const u = i.map((f) => f.partName), c = new Set(u);
    if (u.length > c.size)
      throw new Error("Cannot reuse format tokens.");
    return i;
  }(Ia.filter(a).concat(Aa.filter(a)).map(r.bind(null, !1)).concat(Ea.filter(a).map(r.bind(null, !0)))), l = /^\{!(\d+)!\}$/;
  return o.split(/(\{!\d+!\})/).map((i) => {
    const u = i.match(l);
    return u ? s[Number(u[1])] : { option: { literal: i }, partName: "literal", partValue: i, token: i, pattern: new RegExp(""), hour12: !1 };
  }).filter((i) => !(i.partName === "literal" && i.partValue === ""));
}
function Os(e, t, r) {
  if (!_n.has(e)) {
    const n = new Date(La), a = [3, 8, 9, 7, 6, 4, 3], s = ["weekday", "month", "dayPeriod"], l = ["long", "short", "narrow"], i = {};
    for (let u = 0; u < 12; u++) {
      n.setMonth(0 + u), u in a && n.setDate(a[u]), n.setUTCHours(8 + u);
      for (const c of l) {
        const f = new Intl.DateTimeFormat(e, s.reduce((p, g) => Object.assign(p, { [g]: c }), { hour12: !0, timeZone: "UTC" })).formatToParts(n).map(st);
        if (c === "long" || c === "short") {
          const p = new Intl.DateTimeFormat(e, { dateStyle: c === "short" ? "medium" : "long" }).formatToParts(n).map(st).find((b) => b.type === "month"), g = f.findIndex((b) => b.type === "month");
          g > -1 && p && (f[g] = p);
        }
        f.forEach((p) => {
          if (p.type === "literal")
            return;
          const g = p.type;
          i[g] = Object.assign(i[g] || {}, { [p.value]: c });
        });
      }
    }
    _n.set(e, i);
  }
  const o = _n.get(e);
  return o ? o[t][r] : void 0;
}
function At(e, t = "+0000") {
  const r = t.slice(0, 1) === "+";
  return Lu(e, t.replace(r ? "+" : "-", r ? "-" : "+"));
}
function Ie(e, t = "long", r = "device", o = !1, n) {
  let a;
  return typeof e != "object" || e instanceof Date || ({ date: e, format: t, locale: r, genitive: o, partFilter: n, tz: a } = e), t === "ISO8601" ? de(e).toISOString() : (a && (e = At(e, To(e, a))), r && r !== "device" || (r = Intl.DateTimeFormat().resolvedOptions().locale), Sh(e, lr(t, r).filter(n ?? (() => !0)), r, o).map((s) => s.value).join(""));
}
function ka(e, t = "en", r = !1, o = () => !0) {
  return lr(e, t).filter(o).reduce((n, a) => n + (r && a.partName === "literal" ? function(s) {
    return Ia.concat(Aa).concat(Ea).sort((l, i) => l[0].length > i[0].length ? 1 : -1).reduce((l, i) => l.replace(i[0], `\\${i[0]}`), s);
  }(a.token) : a.token), "").normalize("NFKC");
}
function Ps(e) {
  const t = de(e);
  return t.setDate(1), t.setHours(0, 0, 0), t;
}
function vr(e, t, r = 7) {
  let o, n;
  const a = de(e);
  switch (r) {
    case "month":
      n = a.getDate(), o = qr(a) - a.getDate();
      break;
    case "week":
      n = a.getDay() + 1, o = 6 - a.getDay();
      break;
    case "year":
      const s = function(i) {
        const u = de(i);
        return (new Date(u.getFullYear() + 1, 0, 0).getTime() - new Date(u.getFullYear(), 0, 0).getTime()) / 864e5;
      }(a), l = function(i) {
        const u = de(i);
        return Math.round((new Date(u.getFullYear(), u.getMonth(), u.getDate(), 0, 0).getTime() - new Date(u.getFullYear(), 0, 0).getTime()) / 864e5);
      }(a);
      n = l, o = s - l;
      break;
    default:
      o = n = r;
  }
  for (let s = 0; s <= o || s < n; s++) {
    if (s <= o) {
      const l = er(a, s);
      if (t(l))
        return l;
    }
    if (s && s <= n) {
      const l = er(a, -s);
      if (t(l))
        return l;
    }
  }
  return null;
}
function Uo(e, t = "en", r = !1) {
  const o = (n, a) => Array(n).fill("").map((s, l) => `${a(l)}`);
  if (e === "M")
    return o(12, (n) => n + 1);
  if (e === "MM")
    return o(12, (n) => {
      const a = n + 1;
      return a < 10 ? `0${a}` : a;
    });
  if (e.startsWith("M"))
    return Uo("MM").map((n) => Ie(`2000-${n}-05`, e, t, r));
  if (e.startsWith("d"))
    return o(7, (n) => `0${n + 2}`).map((n) => Ie(`2022-10-${n}`, e, t));
  if (e === "a")
    return [qt("am", t).toLowerCase(), qt("pm", t).toLowerCase()];
  if (e === "A")
    return [qt("am", t).toUpperCase(), qt("pm", t).toUpperCase()];
  if (e.startsWith("Y")) {
    const n = (/* @__PURE__ */ new Date()).getFullYear();
    return o(120, (a) => a + 1).reduce((a, s) => (s !== "120" && a.push(Ie(`${n + Number(s)}-06-06`, e, t)), a.unshift(Ie(n - Number(s) + "-06-06", e, t)), a), [Ie(`${n}-06-06`, e, t)]);
  }
  return e.startsWith("D") ? o(31, (n) => `${e === "DD" && n < 9 ? "0" : ""}${n + 1}`) : e.startsWith("H") ? o(24, (n) => `${e === "HH" && n < 10 ? "0" : ""}${n}`) : e.startsWith("h") ? o(12, (n) => `${e === "hh" && n < 9 ? "0" : ""}${n + 1}`) : e.startsWith("m") || e.startsWith("s") ? o(60, (n) => `${e.length > 1 && n < 10 ? "0" : ""}${n}`) : [];
}
function ht(e, t = "ISO8601", r = "device") {
  let o, n = () => !0, a = "backward";
  if (typeof e == "object" ? { date: o, format: t = "ISO8601", locale: r = "device", dateOverflow: a = "backward", partFilter: n = () => !0 } = e : o = e, !o)
    throw new Error("parse() requires a date string.");
  const s = () => {
    throw new Error(`Date (${o}) does not match format (${ka(t, r)})`);
  };
  if (t === "ISO8601")
    return de(o);
  const l = Hu.includes(t) || typeof t == "object", i = function(w) {
    let L;
    for (const d of w) {
      if (d.partName === "literal" && !isNaN(parseFloat(d.partValue)))
        throw new Error(`Numbers in format (${d.partValue}).`);
      if (L && L.partName !== "literal" && d.partName !== "literal" && !(L.token in Fo || d.token in Fo || Ch(L) && d.token.toLowerCase() === "a"))
        throw new Error(`Illegal adjacent tokens (${L.token}, ${d.token})`);
      L = d;
    }
    return w;
  }(lr(t, r).filter(n));
  if (!i.length)
    throw new Error("parse() requires a pattern.");
  let u;
  try {
    u = Iu(o, i);
  } catch {
    return s();
  }
  const c = /* @__PURE__ */ new Date(), f = /* @__PURE__ */ new Map([["YYYY", c.getFullYear()], ["MM", c.getMonth() + 1], ["DD", c.getDate()], ["HH", 0], ["mm", 0], ["ss", 0]]);
  let p = null, g = "";
  u.forEach((w) => {
    if (w.partName === "literal")
      return;
    if (w.token === w.value)
      return s();
    const L = Number(w.value);
    if (f.has(w.token))
      f.set(w.token, L);
    else if (w.token === "YY")
      f.set("YYYY", function(d) {
        const _ = (/* @__PURE__ */ new Date()).getFullYear(), I = _ % 100, O = Math.floor(_ / 100), N = Number(d);
        return 100 * (O + (N > I + 20 ? -1 : 0)) + N;
      }(w.value));
    else {
      const d = w.token;
      if (d.startsWith("d"))
        return;
      if (d === "D")
        f.set("DD", L);
      else if (d === "H" || d.startsWith("h"))
        f.set("HH", L);
      else if (d === "M")
        f.set("MM", L);
      else if (d === "a" || d === "A")
        p = w.value.toLowerCase() === qt("am", r).toLowerCase();
      else if (d === "Z")
        g = Cu(w.value);
      else {
        const _ = Uo(d, r, l).indexOf(w.value);
        if (_ !== -1)
          switch (d) {
            case "MMM":
            case "MMMM":
              f.set("MM", _ + 1);
          }
      }
    }
  });
  let b = f.get("HH") || 0;
  p === !1 ? (b += b === 12 ? 0 : 12, f.set("HH", b === 24 ? 0 : b)) : p === !0 && b === 12 && f.set("HH", 0), f.set("MM", (f.get("MM") || 1) - 1);
  let [v, $, h, m, k, y] = Array.from(f.values());
  const D = qr(/* @__PURE__ */ new Date(`${kn(v)}-${mt($ + 1)}-10`));
  if (D < h && a === "throw")
    throw new Error(`Invalid date ${kn(v)}-${mt($ + 1)}-${mt(h)}`);
  h = a === "backward" ? Math.min(h, D) : h;
  const x = `${kn(v)}-${mt($ + 1)}-${mt(h)}T${mt(m)}:${mt(k)}:${mt(y)}${g}`, C = new Date(x);
  return isFinite(+C) ? C : s();
}
function Iu(e, t) {
  let r = 0, o = 0;
  const n = [];
  let a;
  do {
    const [l, i] = [(s = t)[r++], s[r]];
    a = i;
    let u = 1;
    if (l.partName === "literal")
      u = l.partValue.length;
    else if (l.token in Fo)
      u = Fo[l.token];
    else if (i)
      if (i.partName === "literal") {
        if (u = e.indexOf(i.partValue, o) - o, u < 0)
          throw new Error();
      } else if (i.partName === "dayPeriod") {
        for (let c = 1; c <= 4; c++)
          if (isNaN(Number(e.charAt(o + c)))) {
            u = c;
            break;
          }
      } else {
        const c = e.substring(o).search(/\d/);
        c !== -1 && (u = o + c);
      }
    else
      u = e.length;
    n.push({ ...l, value: e.substring(o, o + u) }), o += u;
  } while (a);
  var s;
  return n;
}
function Vs(e, t) {
  const r = de(e), o = de(t);
  return r.getDate() === o.getDate() && r.getMonth() === o.getMonth() && r.getFullYear() === o.getFullYear();
}
function Fs(e, t = 0) {
  const r = de(e);
  let o = t - r.getDay();
  return o > 0 && (o -= 7), r.setDate(r.getDate() + o), r.setHours(0, 0, 0), r;
}
function Er(e) {
  return e.partName !== "timeZoneName";
}
function Lh(e, t) {
  const r = [], o = de(t);
  o.setDate(1);
  let n = Fs(o, e.props.weekStart);
  n.setHours(o.getHours(), o.getMinutes(), o.getSeconds());
  const a = function(l, i = 0) {
    const u = Fs(l, i);
    return u.setDate(u.getDate() + 6), u.setHours(23, 59, 59), u;
  }(Mo(t), e.props.weekStart);
  let s = [];
  do
    s.push(n), s.length === 7 && (r.push(s), s = []), n = er(n);
  while (n.getTime() <= a.getTime());
  return { monthDay: o, weeks: r };
}
function Ns(e) {
  e.props.calendar = $t(e.props.showMonths, (t) => t).map((t) => Lh(e, vt(e.props.renderedDate, t))), e.props.years = function(t) {
    const r = Number(Ie(t.props.renderedDate, "YYYY")), o = r - r % 10;
    return t.props.decade = `${o} - ${o + 9}`, $t(10, (n) => Yt(t.props.renderedDate, o + n - r));
  }(e), e.props.months = function(t) {
    const r = de(t.props.renderedDate);
    return r.setMonth(0), $t(12, (o) => vt(r, o));
  }(e);
}
function Ih(e, t) {
  var r;
  t.target && t.target instanceof Element && (t.target.closest(`#${e.props.id}_popover`) || !(!((r = e.props.__root) === null || r === void 0) && r.contains(t.target))) || (e.props.expanded = !1);
}
function Ct(e, t) {
  if (!t)
    return e.props.inputText = "", /* @__PURE__ */ new Date();
  const r = t instanceof Date ? t : ht(t, e.props.valueFormat, e.props.valueLocale);
  return e.props.inputText = e.props.formatDate(r, e.props.format, e.props.locale, !1, Er), r;
}
function Bs(e) {
  return Array.isArray(e.props.sequence) ? wt(e.props.sequence) : ["day"];
}
function br(e, t, r = !0) {
  var o, n;
  if (e._value === t)
    return;
  if (t == null)
    return e.input(t, r);
  e.props.offset = e.props.timezone ? To(t, e.props.timezone) : "+0000";
  const a = Lu(t, (o = (n = e.props).offset) !== null && o !== void 0 ? o : n.offset = "+0000");
  e.input(Ie(a, e.props.valueFormat, e.props.valueLocale, !1), r);
}
function ln(e, t) {
  var r;
  const o = ["prev_button", "month_button", "day_button", "year_button", "next_button"].find((a) => {
    var s;
    return (s = e.props.__root) === null || s === void 0 ? void 0 : s.getElementById(`${e.props.id}_${a}`);
  }), n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_${o}`);
  n instanceof HTMLElement && (t.preventDefault(), n.focus());
}
function Ah(e, t) {
  var r;
  let o = "";
  if (!(t instanceof HTMLInputElement) || e.props.pickerOnly)
    return;
  No.set(e, t), (r = e.props.__root) === null || r === void 0 || r.addEventListener("click", (s) => {
    e.props.expanded && s.target instanceof HTMLElement && s.target.closest(`#${e.props.id}_popover`) ? ea.add(e) : ea.delete(e);
  }), e.on("prop:inputText", ({ payload: s }) => {
    s !== t.value && (mo.get(t) === "beforeCallback" && (o = t.value), _s(t), t.selectionStart = 0, t.selectionEnd = t.value.length, function(l, i) {
      var u, c;
      if (!it.has(l))
        return;
      const f = (u = gr.get(l)) !== null && u !== void 0 ? u : "", p = (c = Xo.get(l)) !== null && c !== void 0 ? c : "";
      Nr(l, { type: "insert", selectionBefore: Ze(l), data: i, valueBefore: l.value, suffix: p, prefix: f });
    }(t, s), t.value = s, setTimeout(() => ks(t), 10));
  });
  const [n, a] = Eh(e);
  xa(t, { pattern: n, explicitParts: a, onChange: ({ valueAfter: s }) => {
    if (Au(e), Qn.has(e))
      return Qn.delete(e);
    o && o === s ? o = "" : (_s(t), e.props.inputText = s, setTimeout(() => ks(t), 10));
  } });
}
function Au(e) {
  var t, r;
  if (e.props.overlay) {
    const o = No.get(e);
    !o || !(!((t = e.props.attrs) === null || t === void 0) && t.placeholder) || e._value || _u(o, !0) || e.props._isFocused || e.props.activeDate && e.props.expanded ? o && (e.props._isPlaceholder = !1, e.props._overlayParts = va(ku(o))) : (e.props._isPlaceholder = !0, e.props._overlayParts = [{ type: "placeholder", value: (r = e.props.attrs) === null || r === void 0 ? void 0 : r.placeholder }]);
  }
}
function Eh(e) {
  const t = e.props.locale, r = ["full", "long", "medium", "short"].includes(e.props.format) || typeof e.props.format == "object", o = lr(e.props.format, t);
  return [ka(e.props.format, t, !0, Er), o.reduce((n, a) => {
    if (a.partName === "literal")
      return n;
    let s = Uo(a.token, t, r);
    if (a.token === "YYYY" && e.props.minDate && e.props.maxDate) {
      const i = e.props.minDate.getFullYear();
      s = $t(e.props.maxDate.getFullYear() - i + 1, (u) => String(i + u));
    }
    const l = { type: "enum", token: a.token, values: s, placeholder: a.token === "A" ? "A/P" : a.token, selectDirection: "left" };
    return n.push(l), a.token.startsWith("D") && Wu.set(e, s), n;
  }, [])];
}
function Mh(e, t) {
  return !t || !!(e.props.minDate && t < e.props.minDate) || !!(e.props.maxDate && t > e.props.maxDate) || void 0;
}
function Th(e) {
  return typeof e.props.validationLabel == "function" ? e.props.validationLabel(e) : e.props.validationLabel || e.props.label || e.props.name || String(e.name);
}
function Oh(e, t) {
  var r, o;
  if (t instanceof HTMLInputElement && !cl.get(e) && Jb) {
    const n = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_overlay`), a = (o = e.props.__root) === null || o === void 0 ? void 0 : o.getElementById(`${e.props.id}_overlay_inner`);
    if (n && t && a) {
      cl.set(e, n);
      const s = getComputedStyle(t).color;
      t.style.color = "transparent", t.style.caretColor = s;
      const l = new ResizeObserver(() => {
        var u;
        const c = getComputedStyle(t), f = t.getBoundingClientRect(), p = (u = t.parentElement) === null || u === void 0 ? void 0 : u.getBoundingClientRect();
        e.props._overlayStyles = { ...e.props._overlayStyles, width: c.width, height: c.height, boxSizing: c.boxSizing, padding: c.padding, margin: c.margin, fontSize: c.fontSize, lineHeight: c.lineHeight, top: f.top - ((p == null ? void 0 : p.top) || f.top) + "px", left: f.left - ((p == null ? void 0 : p.left) || f.left) + "px" };
      });
      l.observe(t);
      const i = (u) => {
        a.scrollLeft = u.detail;
      };
      t.addEventListener("input-scroll", i), e.on("destroyed", () => {
        t.removeEventListener("input-scroll", i), l.disconnect();
      });
    }
  }
}
function Eu(e) {
  e.addProps(["_overlayStyles", "_overlayParts", "_overlayInnerStyles", "_isPlaceholder"]), e.props._overlayStyles = { position: "absolute", top: "0", left: "0", pointerEvents: e.props._isPlaceholder ? "auto" : "none" }, e.props._overlayInnerStyles = { overflow: "hidden", whiteSpace: "nowrap", paddingRight: "20px" }, e.on("created", () => {
    e.props.overlay = R(e.props.overlay), e.props.pickerOnly = R(e.props.pickerOnly), e.props.overlay = e.props.pickerOnly ? void 0 : e.props.overlay, e.props.overlay && me(`${e.props.id}`, Oh.bind(null, e), e.props.__root);
  }), e.on("prop:_isPlaceholder", () => {
    e.props._overlayStyles = { ...e.props._overlayStyles, pointerEvents: e.props._isPlaceholder ? "auto" : "none" };
  });
}
function Ph(e, t) {
  if (!(t instanceof HTMLInputElement))
    throw new Error(`Masks can only be applied to an HTMLInputElement (id: ${t.id}).`);
  ra.set(e, t), xa(t, { ...ta.get(e), onChange: ({ valueAfter: r, meta: o }) => {
    e.props._maskValue = r, e.input({ maskValue: r }), e.props._overlayParts = va(o);
  } });
}
function Da(e, t, r, o) {
  if (!(e.props.disabled || (e.props.isSourceOption = r, e.props.isSourceOption && Array.isArray(e.value) && e.value.length >= e.props.max)))
    if (r) {
      if (e.props.selectedSourceItems.includes(t))
        return e.props.selectedSourceItems = e.props.selectedSourceItems.filter((n) => n !== t), e.props.activeValue = void 0, void (e.props.activeDescendant = void 0);
      e.props.selectedTargetItems = [], e.props.selectedSourceItems = [...e.props.selectedSourceItems, t];
    } else {
      if (e.props.selectedTargetItems.includes(t))
        return void (e.props.selectedTargetItems = e.props.selectedTargetItems.filter((n) => n !== t));
      e.props.selectedSourceItems = [], e.props.selectedTargetItems = [...e.props.selectedTargetItems, t];
    }
}
function Oo(e, t) {
  if (e.props.sourceListOrigin = !0, e.props.maxReached)
    return;
  if (t) {
    const o = Array.isArray(e.value) ? [...e.value, t] : [t];
    return void e.input(o);
  }
  const r = e.props.selectedSourceItems.map((o) => P(o));
  Array.isArray(e.value) ? e.input([...e.value, ...r]) : e.input(r), e.props.selectedSourceItems = [];
}
function Po(e, t) {
  if (e.props.sourceListOrigin = !1, t) {
    const o = Array.isArray(e.value) ? e.value.filter((n) => n !== t) : [];
    return void e.input(o);
  }
  const r = e.props.selectedTargetItems.map((o) => P(o));
  if (Array.isArray(e.value)) {
    const o = e.value.filter((n) => !r.includes(n));
    e.input(o);
  }
  e.props.selectedTargetItems = [];
}
function Mu(e) {
  var t, r;
  if (e.props.activeValue === pr) {
    const n = (t = e.props.__root) === null || t === void 0 ? void 0 : t.getElementById(`${e.props.id}_source_load_more`);
    return void (n && n.scrollIntoView({ block: "nearest", inline: "start" }));
  }
  const o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(e.props.activeDescendant);
  o && o.scrollIntoView({ block: "nearest", inline: "start" });
}
function ro(e) {
  var t;
  if (Array.isArray(e.value)) {
    const r = [];
    let o = [...e.props.options];
    e.value.forEach((n) => {
      const a = e.props.memoOptions.find((s) => j(P(s), n));
      if (a && !a.noOptionFound)
        r.push(a), e.props.options.findIndex((l) => j(P(l), n)) !== -1 && (o = o.filter((l) => !j(P(l), n)));
      else {
        const s = o.find((l) => j(P(l), n));
        s ? (r.push(s), o = o.filter((l) => !j(P(l), n))) : r.push({ label: String(n), value: n, noOptionFound: !0 });
      }
    }), e.props.targetOptions = r, e.props.sourceOptions = o;
  } else
    e.props.sourceOptions = [...e.props.options], e.props.targetOptions = [];
  if (e.props.skipSetActiveValue)
    return void (e.props.skipSetActiveValue = !1);
  !((t = e.props.__root) === null || t === void 0) && t.getElementById(e.props.id + "_source_list_items") && function(r) {
    var o, n, a, s, l, i, u;
    if (r.props.isDragging)
      return;
    if (r.props.sourceSearchActive) {
      if (((n = (o = r.props.__root) === null || o === void 0 ? void 0 : o.activeElement) === null || n === void 0 ? void 0 : n.id) === `${r.props.id}_source_search_input`) {
        const p = r.props.sourceOptions.find((g) => {
          var b;
          return !(!((b = g.attrs) === null || b === void 0) && b.disabled);
        });
        return p ? void (r.props.activeValue = P(p)) : void (r.props.activeValue = void 0);
      }
      r.props.sourceSearchActive = !1;
    }
    if (r.props.transferOnSelect === !1)
      return void (r.props.activeValue = void 0);
    const c = r.props.sourceListOrigin ? r.props.sourceOptions : r.props.targetOptions;
    let f = !1;
    for (let p = r.props.activeIndex; p <= c.length; p++)
      if (!(!((a = c.attrs) === null || a === void 0) && a.disabled) && c[p]) {
        f = !0, r.props.activeValue = P(c[p]);
        break;
      }
    if (!f && c.length) {
      for (let p = r.props.activeIndex; p >= 0; p--)
        if (!(!((s = c.attrs) === null || s === void 0) && s.disabled) && c[p])
          return f = !0, void (r.props.activeValue = P(c[p]));
    }
    if (!f) {
      let p;
      p = r.props.sourceListOrigin ? (u = r.props.__root) === null || u === void 0 ? void 0 : u.getElementById(`${r.props.id}`) : r.props.searchable ? (l = r.props.__root) === null || l === void 0 ? void 0 : l.getElementById(`${r.props.id}_source_search_input`) : (i = r.props.__root) === null || i === void 0 ? void 0 : i.getElementById(`${r.props.id}_source_list_items`), p && p.focus();
    }
  }(e);
}
function Tu(e, t) {
  return (t ? e.props.sourceOptions : e.props.targetOptions).find((r) => {
    var o;
    return !(!((o = r.attrs) === null || o === void 0) && o.disabled);
  });
}
function Vh(e) {
  Array.isArray(e.value) && e.value.forEach(async (t) => {
    Gi(e, t, function(r, o) {
      return [...r.props.options, ...r.props.memoOptions].find((a) => j(P(a), o));
    }(e, t));
  });
}
function Fh(e) {
  e.context && (e.context.handlers.loadMore = Io.bind(null, e), e.context.fns.getSourceItemCount = (t) => e.props.transferOnSelect === !1 && t.length ? t.length + "/" + e.props.sourceOptions.length : e.props.sourceOptions.length, e.context.fns.getTargetItemCount = (t) => e.props.transferOnSelect === !1 && t.length ? t.length + "/" + e.props.targetOptions.length : e.props.targetOptions.length, e.context.fns.isActive = (t, r) => {
    if (!e.props.isDragging && !e.props.touchStarted)
      return j(r, P(t)) || void 0;
  }, e.context.fns.isSelected = (t, r) => !!r && !!Array.isArray(r) && r.includes(t), e.context.fns.optionLoading = (t) => e.props.optionLoaderValues.includes(P(t)), e.context.handlers.clearSearch = () => {
    (function(t) {
      var r;
      t.props.sourceSearchActive = !1, t.props.inputText = "", He(t, "", !0);
      const o = (r = t.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${t.props.id}_source_search_input`);
      o && o.focus();
    })(e);
  }, e.context.handlers.sourceSearchBlur = (t) => {
    setTimeout(() => {
      var r;
      if (t.relatedTarget && t.relatedTarget instanceof HTMLElement && (t.relatedTarget.id === `${e.props.id}_source_list_items` || t.relatedTarget.id === `${e.props.id}`)) {
        const o = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_source_search_input`);
        if (!o)
          return;
        o.focus();
      } else
        e.props.activeValue = void 0;
    });
  }, e.context.handlers.listitemClick = (t, r) => (o) => {
    Rs(e, t, r);
  }, e.context.handlers.transferForward = Oo.bind(null, e, void 0), e.context.handlers.transferForwardAll = () => {
    let t;
    if (e.props.maxReached)
      return;
    const r = e.props.sourceOptions.map((o) => P(o));
    t = Array.isArray(e.value) ? [...e.value, ...r] : [...r], e.input(t), e.props.selectedSourceItems = [];
  }, e.context.handlers.transferBackward = Po.bind(null, e, void 0), e.context.handlers.transferBackwardAll = () => {
    Array.isArray(e.value) && (e.input([]), e.props.selectedTargetItems = []);
  }, e.context.handlers.onSearch = (t) => {
    (function(r, o) {
      r.props.sourceSearchActive = !0;
      const n = o.target;
      r.props.inputText = n.value, He(r, n.value, !0);
    })(e, t);
  }, e.context.handlers.onMouseenter = (t) => (r) => {
    r.type !== "touchstart" && (t ? e.props.mouseOnSource = !0 : e.props.mouseOnTarget = !0);
  }, e.context.handlers.onMouseleave = (t) => (r) => {
    var o;
    if (r.type === "touchend")
      return;
    const n = (o = e.props.__root) === null || o === void 0 ? void 0 : o.getElementById(t ? `${e.props.id}_source_list_items` : `${e.props.id}`);
    n && (n.contains(r.relatedTarget) || (e.props.trackHover = !1, e.props.activeValue = void 0, e.props.activeDescendant = void 0, e.props.activeIndex = void 0, t ? e.props.mouseOnSource = !1 : e.props.mouseOnTarget = !1));
  }, e.context.handlers.listitemClick = (t, r) => (o) => {
    o instanceof MouseEvent && e.props.touchStarted || Rs(e, t, r);
  }, e.context.handlers.listitemTouchstart = () => () => {
    (function(t) {
      t.props.touchStarted = !0;
    })(e);
  }, e.context.handlers.listitemTouchend = (t, r) => (o) => {
    (function(n, a, s, l) {
      if (n.props.touchMoved)
        return n.props.touchMoved = !1, void (n.props.touchStarted = !1);
      const i = P(a);
      n.props.activeIndex = n.props.sourceOptions.findIndex((u) => P(u) === i), n.props.transferOnSelect ? s ? Oo(n, i) : Po(n, i) : Da(n, a, s);
    })(e, t, r);
  }, e.context.handlers.listitemTouchmove = () => (t) => {
    (function(r) {
      r.props.touchMoved = !0;
    })(e);
  }, e.context.handlers.sourceSearchFocus = (t) => {
    un(e, !0);
  }, e.context.handlers.sourceListFocused = (t) => {
    un(e, !0);
  }, e.context.handlers.targetListFocused = () => {
    un(e, !1);
  }, e.context.handlers.sourceListBlurred = (t) => {
    e.props.activeValue = void 0;
  }, e.context.handlers.targetListBlurred = (t) => {
    e.props.activeValue = void 0;
  }, e.context.handlers.sourceListKeydown = (t) => {
    pn(e, t, !0);
  }, e.context.handlers.targetListKeydown = (t) => {
    pn(e, t, !1);
  }, e.context.handlers.sourceSearchKeydown = (t) => {
    pn(e, t, !0);
  });
}
function Rs(e, t, r, o) {
  var n;
  if (P(t) === pr)
    return void ((n = e.context) === null || n === void 0 || n.handlers.loadMore(!0));
  const a = P(t);
  e.props.activeIndex = e.props.sourceOptions.findIndex((s) => P(s) === a), e.props.transferOnSelect ? r ? Oo(e, a) : Po(e, a) : Da(e, t, r);
}
function un(e, t) {
  const r = Tu(e, t);
  r && (e.props.sourceListOrigin = t, e.props.activeValue = P(r));
}
function pn(e, t, r) {
  if (t.key === "ArrowDown" || t.key === "ArrowUp")
    (function(o, n, a) {
      var s, l, i;
      o.preventDefault();
      const u = a ? n.props.sourceOptions : n.props.targetOptions, c = u.reduce((p, g) => {
        var b;
        return !((b = g == null ? void 0 : g.attrs) === null || b === void 0) && b.disabled || p.push(P(g)), p;
      }, []);
      !((s = n.store.hasNextPage) === null || s === void 0) && s.value && c.push(pr);
      const f = c.indexOf(n.props.activeValue);
      if (o.key === "ArrowUp" && f !== 0)
        for (let p = f - 1; p >= 0; p--) {
          n.props.sourceListOrigin = a, n.props.activeValue = c[f - 1];
          break;
        }
      else if (o.key === "ArrowDown" && f !== c.length - 1) {
        for (let p = f + 1; p < c.length; p++)
          if (!(!((i = (l = u[p]) === null || l === void 0 ? void 0 : l.attrs) === null || i === void 0) && i.disabled)) {
            n.props.sourceListOrigin = a, n.props.activeValue = c[p];
            break;
          }
      }
      Mu(n);
    })(t, e, r);
  else if (t.key === "ArrowRight" || t.key === "ArrowLeft") {
    if (t.key === "ArrowLeft" && r || t.key === "ArrowRight" && !r)
      return;
    (function(o, n, a) {
      n.props.searchable || (o.preventDefault(), function(s, l) {
        var i, u, c;
        if (Tu(s, !l))
          if (l) {
            const f = (i = s.props.__root) === null || i === void 0 ? void 0 : i.getElementById(`${s.props.id}`);
            f && f.focus();
          } else if (s.props.searchable) {
            const f = (u = s.props.__root) === null || u === void 0 ? void 0 : u.getElementById(`${s.props.id}_source_search_input`);
            f && f.focus();
          } else {
            const f = (c = s.props.__root) === null || c === void 0 ? void 0 : c.getElementById(`${s.props.id}_source_list_items`);
            f && f.focus();
          }
      }(n, a));
    })(t, e, r);
  } else
    t.key === "Enter" && function(o, n, a) {
      var s;
      if (o.preventDefault(), !n.props.activeValue)
        return;
      if (n.props.activeValue === pr)
        return void ((s = n.context) === null || s === void 0 || s.handlers.loadMore(!0));
      const l = a ? n.props.sourceOptions : n.props.targetOptions, i = l.findIndex((c) => P(c) === n.props.activeValue);
      n.props.activeIndex = i;
      const u = l[i];
      u && (n.props.transferOnSelect ? a ? Oo(n, P(u)) : Po(n, P(u)) : Da(n, u, a));
    }(t, e, r);
}
function Nh(e) {
  e.on("created", () => {
    if (e.props.skipSetActiveValue = !0, typeof e.props.optionsLoader == "function" && ar(e), Fh(e), e.props.disabled && (e.props.draggable = !1), Le) {
      me(e.props.id + "_source_list_items", (r) => {
        r instanceof HTMLElement && function(o, n) {
          function a() {
            return o.props.sourceOptions.map((i) => P(i));
          }
          function s() {
            return [];
          }
          if (!o.context)
            return;
          const l = { longTouch: !0, draggingClass: o.context.classes.dragging, dropZoneClass: o.context.classes.dropZone, group: o.props.id, root: o.props.__root || document, disabled: !o.props.draggable || o.props.maxReached, touchDraggingClass: o.context.classes.touchDragging, touchDropZoneClass: o.context.classes.touchDropZone, selectionDraggingClass: o.context.classes.selectionDragging, selectionDropZoneClass: o.context.classes.selectionDropZone, touchSelectionDraggingClass: o.context.classes.touchSelectionDragging, touchSelectionDropZoneClass: o.context.classes.touchSelectionDropZone, longTouchClass: o.context.classes.longTouch, handleTouchmove(i) {
            o.props.selectedSourceItems = [], Zi(i);
          }, draggable: (i) => i.getAttribute("role") === "option" };
          l.plugins = [us({ handleDragstart(i) {
            o.props.isDragging = !0, o.props.trackHover = !1, o.props.activeValue = void 0, o.props.activeDescendant = void 0, So(i);
          }, handleEnd(i) {
            Co(i), o.props.isDragging = !1, o.props.activeValue = void 0, o.props.activeDescendant = void 0, o.props.activeDescendant = void 0, o.props.isDragging = !1, o.props.selectedTargetItems = [], o.props.selectedSourceItems = [];
          }, handleTouchstart(i) {
            o.props.isDragging = !0, o.props.trackHover = !1, o.props.activeValue = void 0, o.props.activeDescendant = void 0, o.props.mouseOnSource = !1, o.props.mouseOnTarget = !1, Lo(i);
          }, selections: () => o.props.selectedSourceItems.map((i) => P(i)) })], he({ parent: n, getValues: a, setValues: s, config: l }), o.on("prop:disabled", ({ payload: i }) => {
            l.disabled = i, he({ parent: n, getValues: a, setValues: s, config: l });
          }), o.on("prop:draggable", ({ payload: i }) => {
            l.disabled = !i, he({ parent: n, getValues: a, setValues: s, config: l });
          }), o.on("prop:maxReached", ({ payload: i }) => {
            l.disabled = i, he({ parent: n, getValues: a, setValues: s, config: l });
          });
        }(e, r);
      }, e.props.__root), me(`${e.props.id}`, (r) => {
        r instanceof HTMLElement && function(o, n) {
          function a() {
            return Array.isArray(o.value) ? [...o.value] : [];
          }
          function s(i, u) {
            o.props.sourceListOrigin = !0, o.input(i);
          }
          if (!o.context)
            return;
          const l = { longTouch: !0, root: o.props.__root, group: o.props.id, disabled: !o.props.draggable, draggingClass: o.context.classes.dragging, dropZoneClass: o.context.classes.dropZone, touchDraggingClass: o.context.classes.touchDragging, touchDropZoneClass: o.context.classes.touchDropZone, selectionDraggingClass: o.context.classes.selectionDragging, selectionDropZoneClass: o.context.classes.selectionDropZone, touchSelectionDraggingClass: o.context.classes.touchSelectionDragging, touchSelectionDropZoneClass: o.context.classes.touchSelectionDropZone, longTouchClass: o.context.classes.longTouch, draggable: (i) => i.getAttribute("role") === "option", plugins: [] };
          l.plugins = [us({ handleDragstart(i) {
            o.props.isDragging = !0, o.props.trackHover = !1, o.props.activeValue = void 0, So(i);
          }, handleEnd(i) {
            Co(i), o.props.selectedTargetItems = [], o.props.selectedSourceItems = [], o.props.activeValue = void 0, o.props.trackHover = !0, o.props.isDragging = !1;
          }, handleTouchstart(i) {
            o.props.trackHover = !1, o.props.activeValue = void 0, o.props.isDragging = !0, o.props.activeDescendant = void 0, Lo(i);
          }, selections: () => o.props.selectedTargetItems.map((i) => P(i)) })], he({ parent: n, getValues: a, setValues: s, config: l }), o.on("prop:disabled", ({ payload: i }) => {
            l.disabled = i, he({ parent: n, getValues: a, setValues: s, config: l });
          }), o.on("prop:draggable", ({ payload: i }) => {
            l.disabled = !i, he({ parent: n, getValues: a, setValues: s, config: l });
          });
        }(e, r);
      }, e.props.__root);
      const t = (r) => {
        var o;
        if (e.props.isDragging)
          return;
        e.props.mouseX = r.clientX, e.props.mouseY = r.clientY;
        const n = e.props.mouseOnSource ? `${e.props.id}_source_list_items` : `${e.props.id}`, a = (o = e.props.__root) === null || o === void 0 ? void 0 : o.getElementById(n);
        if (a) {
          const s = a.getBoundingClientRect();
          r.clientX > s.x && r.clientX < s.x + s.width && r.clientY > s.y && r.clientY < s.y + s.height && (e.props.trackHover = !0);
        }
      };
      document.addEventListener("mousemove", t);
    }
  });
}
function zn(e, t) {
  var r;
  let o = null, n = "", a = [];
  if (e.props.mouseOnSource) {
    if (o = dr.has(e), n = `${e.props.id}_source_list_item`, a = [...e.props.sourceOptions], !a || !a.length || o)
      return a = [], n = "", void (o = null);
  } else if (e.props.mouseOnTarget && (o = Hr.has(e), n = `${e.props.id}_target_list_item`, a = [...e.props.targetOptions], !a || !a.length || o))
    return a = [], n = "", void (o = null);
  const s = a.reduce((i, u, c) => {
    var f, p;
    if (!((f = u.attrs) === null || f === void 0) && f.disabled)
      return i;
    const g = (p = e.props.__root) === null || p === void 0 ? void 0 : p.getElementById(n + `_${c}`);
    return g && i.push([g, u]), i;
  }, []), l = (r = e.props.__root) === null || r === void 0 ? void 0 : r.getElementById(`${e.props.id}_load_more`);
  l && s.push([l, e.props.loadMoreOption]), e.props.mouseOnSource && dr.add(e), e.props.mouseOnTarget && Hr.add(e), s.length && Ou(e, s, null, t);
}
function Ou(e, t, r, o) {
  const n = o ? o.getBoundingClientRect() : { top: 0, bottom: 0 };
  if (r = null, e.props.trackHover) {
    if (e.props.mouseY > n.top && e.props.mouseY < n.bottom) {
      let a = r || 0, s = r;
      const l = (i, u) => {
        var c;
        const f = u[0], { y: p, height: g, x: b, width: v } = f.getBoundingClientRect();
        if (e.props.mouseX > b && e.props.mouseX < b + v && e.props.mouseY > p && e.props.mouseY < p + g) {
          r = i;
          const $ = u[1];
          return e.props.activeValue = $ && !(!((c = $.attrs) === null || c === void 0) && c.disabled) ? P($) : void 0, !0;
        }
        return !1;
      };
      do {
        if (a !== null && l(a, t[a]) || s !== null && l(s, t[s]))
          break;
        a !== null && (a++, a > t.length - 1 && (a = null)), s !== null && (s--, s < 0 && (s = null));
      } while (a !== null || s !== null);
    }
  } else
    Mu(e);
  e.props.mouseOnSource || e.props.mouseOnTarget ? e.props.mouseOnSource && dr.has(e) || e.props.mouseOnTarget && Hr.has(e) ? requestAnimationFrame(Ou.bind(null, e, t, r, o)) : zn(e, o) : (dr.delete(e), Hr.delete(e));
}
function J(e, t) {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}
function Yn(e) {
  const [t, r, o, n] = function(a) {
    a = a.replace("#", ""), a.length === 3 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]);
    const s = parseInt(a.slice(0, 2), 16), l = parseInt(a.slice(2, 4), 16), i = parseInt(a.slice(4, 6), 16), u = a.length >= 8 ? parseInt(a.slice(6, 8), 16) / 255 : 1;
    return function(c, f, p, g = 1) {
      const b = c / 255, v = f / 255, $ = p / 255, h = Math.max(b, v, $), m = Math.min(b, v, $);
      let k, y = 0;
      const D = (h + m) / 2;
      if (h === m)
        y = k = 0;
      else {
        const x = h - m;
        switch (k = D > 0.5 ? x / (2 - h - m) : x / (h + m), h) {
          case b:
            y = (v - $) / x + (v < $ ? 6 : 0);
            break;
          case v:
            y = ($ - b) / x + 2;
            break;
          case $:
            y = (b - v) / x + 4;
        }
        y *= 60;
      }
      return [y, 255 * k, 255 * D, g];
    }(s, l, i, u);
  }(e);
  return [...Sa(t, r, o, n)];
}
function Hs(e, t, r, o = 1) {
  const n = t / 100, a = r / 100, s = (2 - n) * a / 2;
  return s !== 0 && (s === 1 || (t = s < 0.5 ? n * a / (2 * s) : n * a / (2 - 2 * s))), [e, J(255 * t, 2), J(255 * s, 2), o];
}
function Sa(e, t, r, o = 1) {
  const n = J(t / 255, 4), a = J(r / 255, 4);
  if (a === 1)
    return [e, 0, 100, o];
  const s = J(a + n * Math.min(a, 1 - a), 4);
  let l = t / 2.55;
  return s !== 0 && (l = a !== 1 && a !== 0 ? 2 * (s - a) / s * 100 : t / 2.55), [e, J(l, 2), J(100 * s, 2), o];
}
function Pu(e, t, r, o = 1) {
  const n = r / 100, a = n * (t / 100), s = a * (1 - Math.abs(e / 60 % 2 - 1)), l = n - a;
  let i = 0, u = 0, c = 0;
  return [i, u, c] = e < 60 ? [a, s, 0] : e < 120 ? [s, a, 0] : e < 180 ? [0, a, s] : e < 240 ? [0, s, a] : e < 300 ? [s, 0, a] : [a, 0, s], i = Math.round(255 * (i + l)), u = Math.round(255 * (u + l)), c = Math.round(255 * (c + l)), [Math.min(Math.max(i, 0), 255), Math.min(Math.max(u, 0), 255), Math.min(Math.max(c, 0), 255), o];
}
function Vu(e, t, r, o = 1) {
  const n = e / 255, a = t / 255, s = r / 255, l = Math.max(n, a, s), i = Math.min(n, a, s);
  let u = 0;
  const c = l, f = l - i, p = l === 0 ? 0 : f / l;
  if (l !== i) {
    switch (l) {
      case n:
        u = (a - s) / f + (a < s ? 6 : 0);
        break;
      case a:
        u = (s - n) / f + 2;
        break;
      case s:
        u = (n - a) / f + 4;
    }
    u /= 6;
  }
  return [360 * u, 100 * p, 100 * c, o];
}
function Bh(e, t, r, o = 1) {
  const [n, a, s, l] = Pu(e, t, r, o);
  return function(i, u, c, f = 1) {
    const p = (b) => Math.round(b).toString(16).padStart(2, "0").toUpperCase(), g = function(b) {
      return Math.round(255 * b).toString(16).padStart(2, "0").toUpperCase();
    }(f);
    return "#" + p(i) + p(u) + p(c) + `${g === "FF" ? "" : g}`;
  }(n, a, s, l);
}
function Zt(e) {
  return /^(#?)([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(e);
}
function dn(e) {
  if (e) {
    if (Zt(e))
      return Yn(e);
    if (e.startsWith("rgb")) {
      const t = e.match(ju);
      if (!t)
        return [0, 0, 0, 1];
      const r = (o) => o.endsWith("%") ? Math.round(2.55 * Number(o.slice(0, -1))) : Number(o);
      return Vu(r(t[1]), r(t[2]), r(t[3]), t[4] ? t[4].endsWith("%") ? Number(t[4].slice(0, -1)) / 100 : Number(t[4]) : 1);
    }
    if (e.startsWith("hsl")) {
      const t = e.match(Ku);
      if (!t)
        return [0, 0, 0, 1];
      const r = Number(t[1].replace("deg", "").trim()), o = Number(t[2].slice(0, -1)) / 100, n = Number(t[3].slice(0, -1)) / 100, a = t[4] ? t[4].endsWith("%") ? Number(t[4].slice(0, -1)) / 100 : Number(t[4]) : 1;
      return Sa(r, J(255 * o, 2), J(255 * n, 2), a);
    }
  }
}
function Ws(e) {
  const [t, r, o, n] = e.split("-").map((a) => Number(a));
  return [t, r, o, n];
}
function Wt(e, t = 150, r = !0) {
  let o = null, n = !0;
  return (...a) => {
    const s = () => {
      e(...a), o = null;
    };
    r && n && (n = !1, s()), o || (o = setTimeout(s, t));
  };
}
function $r(e) {
  return e !== !1 && e !== "false";
}
function Rh(e) {
  return e.tabIndex >= 0 && !e.disabled && e.offsetParent !== null;
}
function js(e, t) {
  return t = t != null && t.hasOwnProperty("__original") ? t == null ? void 0 : t.__original : t == null ? void 0 : t.value, e.props.multiple ? !!Array.isArray(e.value) && e.value.filter((r) => j(r, t)).length > 0 : t !== void 0 ? j(e.value, t) : (e.props._isChecked = j(e.value, e.props.onValue), e.props._isChecked);
}
function Fu(e) {
  function t(p) {
    var g, b, v;
    const $ = (`${p}`.match(/\-/g) || []).length % 2 == 1;
    p = function(D) {
      if (D = function(x) {
        return x.replace(/[\u0660-\u0669\u06f0-\u06f9]/g, (C) => (15 & C.charCodeAt(0)).toString());
      }(`${D}`), isNaN(D) && (D = D.split(u.decimal).map((x) => x.replace(/[^0-9]/g, "")).join(".")), D = D.replace(/[^0-9\.]/g, ""), D.includes(".")) {
        const x = D.split(".");
        e.props.decimals === 0 ? D = x[0] : (x[1] = x[1].padEnd(i(), "0").slice(0, i()), D = x.join("."));
      }
      return D;
    }(p);
    const h = {};
    n() === "unit" && (h.minimumFractionDigits = p.includes(".") ? 1 : 0), h.maximumFractionDigits = i(), e.props.minDecimals && (h.minimumFractionDigits = e.props.minDecimals, p.includes(".") || (p += ".".padEnd(e.props.minDecimals, "0"))), h.maximumFractionDigits === 0 && p.includes(".") && (p = p.split(".")[0]);
    let m = "";
    isNaN(p) || p.trim() === "" || (p = $ ? `-${p}` : p, e.props.max && !isNaN(e.props.max) && (p = `${Math.min(p, e.props.max)}`), e.props.min && !isNaN(e.props.min) && (p = `${Math.max(p, e.props.min)}`), p.includes(".") ? p = p.split(".")[0].padStart(1, "0") + "." + ((g = p.split(".")[1]) !== null && g !== void 0 ? g : "0") : h.maximumFractionDigits = (b = h.minimumFractionDigits) !== null && b !== void 0 ? b : 0, m = a(e.props.displayLocale, h).format(p));
    let k, y = p.split(".");
    return y = y[0] + ((v = y[1]) !== null && v !== void 0 ? v : "").padEnd(i(), "0"), y.length > 1 && (y = y.replace(/^0+/, ""), y = p !== "" && y === "" ? "0" : y), f = { number: p, integer: y, string: m }, c = !0, f && (k = f.hasOwnProperty(e.props.valueFormat) ? f[e.props.valueFormat] : f.number), e.input(k === "" ? void 0 : k).then(() => (c = !1, Promise.resolve()));
  }
  function r() {
    var p, g;
    const b = (p = e.props.__root) === null || p === void 0 ? void 0 : p.querySelector(`#${e.props.id}_inner input`);
    return b && (b.value = (g = f == null ? void 0 : f.string) !== null && g !== void 0 ? g : ""), Promise.resolve();
  }
  function o() {
    var p, g;
    const b = (p = e.props.__root) === null || p === void 0 ? void 0 : p.querySelector(`#${e.props.id}_inner input`);
    return (g = b == null ? void 0 : b.value) !== null && g !== void 0 ? g : "";
  }
  function n() {
    return e.props.currency ? "currency" : "unit";
  }
  function a(p, g = {}) {
    const b = n(), v = Object.assign({}, { style: b, roundingMode: "trunc" }, g);
    return v[b] = e.props[b], new Intl.NumberFormat(p, v);
  }
  function s() {
    var p, g, b;
    const v = (p = e.props.__root) === null || p === void 0 ? void 0 : p.querySelector(`#${e.props.id}_inner input`);
    if (v) {
      v.dataset.placeholder || (v.dataset.placeholder = (g = v.getAttribute("placeholder")) !== null && g !== void 0 ? g : "");
      const $ = ((u.unitLeft ? `${u.unit} ` : "") + ((b = v.dataset.placeholder) !== null && b !== void 0 ? b : "") + (u.unitLeft ? "" : ` ${u.unit}`)).trim();
      v.setAttribute("placeholder", $);
    }
  }
  function l(p) {
    var g;
    const b = (g = e.props.__root) === null || g === void 0 ? void 0 : g.querySelector(`#${e.props.id}_inner input`);
    if (!b)
      return;
    const v = u.unit.length + u.literal.length;
    p = u.unitLeft ? Math.max(p, v) : Math.min(p, o().length - v), b.setSelectionRange(p, p);
  }
  function i() {
    return e.props.decimals === !1 || e.props.decimals === "false" ? 0 : isNaN(`${e.props.decimals}`) ? u.fractionLength : e.props.decimals;
  }
  let u = null, c = !1, f = null;
  e.on("input", ({ payload: p }) => {
    c || (t(p), r());
  }), e.on("mounted", () => {
    s();
  }), e.context && (e.context.handlers.setPlaceholder = s, e.context.handlers.init = (p = null) => {
    var g;
    (function() {
      var v, $, h, m, k, y, D;
      const x = a(e.props.displayLocale).formatToParts(1234567812345678e-8);
      u = { decimal: (v = x.find((C) => C.type == "decimal")) === null || v === void 0 ? void 0 : v.value, group: ($ = x.find((C) => C.type == "group")) === null || $ === void 0 ? void 0 : $.value, unit: (h = x.find((C) => ["unit", "currency"].includes(C.type))) === null || h === void 0 ? void 0 : h.value, unitLeft: ["unit", "currency"].includes(x[0].type), literal: (k = (m = x.find((C) => C.type == "literal")) === null || m === void 0 ? void 0 : m.value) !== null && k !== void 0 ? k : "", fractionLength: (D = (y = x.find((C) => C.type == "fraction")) === null || y === void 0 ? void 0 : y.value.length) !== null && D !== void 0 ? D : 0 };
    })();
    let b = (g = p ?? e._value) !== null && g !== void 0 ? g : "";
    f ? b = f.number : e.props.valueFormat === "integer" && (b = function(v) {
      var $;
      return (parseFloat(`${v}`) / Math.pow(10, ($ = i()) !== null && $ !== void 0 ? $ : 0)).toString().replace(".", i());
    }(`${b ?? ""}`)), t(b), r();
  }, e.context.handlers.handleBeforeInput = (p) => {
    var g, b, v, $, h, m, k;
    if (p.preventDefault(), p.stopPropagation(), p.target instanceof HTMLInputElement) {
      const y = p.target, D = (g = p.data) !== null && g !== void 0 ? g : "", x = (b = p.target.value) !== null && b !== void 0 ? b : "", C = (v = p.target.selectionStart) !== null && v !== void 0 ? v : 0, w = ($ = p.target.selectionEnd) !== null && $ !== void 0 ? $ : 0, L = x.indexOf(u.decimal);
      let d = ((h = p.target.selectionStart) !== null && h !== void 0 ? h : 0) + (p.data ? 0 : -1), _ = x, I = 1;
      if (x.includes(u.decimal) && D === u.decimal)
        return D === u.decimal && (d = _.indexOf(u.decimal) + 1), void l(d);
      if (!(e.props.min === null || e.props.min < 0 || e.props.max < 0) && D === "-" || D.match(/[a-zA-Z]/))
        return;
      p.inputType === "deleteContentBackward" && x[C - 1] === u.group ? (I += 1, d -= 1) : p.inputType === "deleteContentForward" && x[C] === u.group && (I += 1, d += 1), L !== -1 && d > L && p.inputType === "insertText" ? _ = function(O, N, z) {
        return O.substring(0, N) + z + O.substring(N + z.length);
      }(_, d, (m = p.data) !== null && m !== void 0 ? m : "0") : p.inputType === "insertText" ? _ = _.slice(0, C) + p.data + _.slice(w) : p.inputType === "deleteContentForward" ? (d += 2, _ = _.slice(0, C) + _.slice(w + I)) : p.inputType === "deleteContentBackward" && (d += 1, _ = _.slice(0, Math.max(C - I, 0)) + _.slice(w)), p.inputType.includes("delete") && x[C - 1] === u.decimal && (_ = _.slice(0, C - 1)), t(_), _ = (k = f == null ? void 0 : f.string) !== null && k !== void 0 ? k : "", d = _.length - x.length + d, _.length === x.length && (d += p.inputType.includes("delete") ? -1 : 1), y.setSelectionRange(0, x.length), document.execCommand("insertText", !1, _), D === u.decimal ? d = _.indexOf(u.decimal) + 1 : x.includes(u.decimal) && !_.includes(u.decimal) && (d = _.length), l(Math.max(0, d));
    }
  }, e.context.handlers.handleInput = (p) => {
    p.target instanceof HTMLInputElement && t(p.target.value);
  }, e.context.handlers.handleKeyDown = (p) => {
    var g;
    if (p.target instanceof HTMLInputElement && (p.key === "ArrowUp" || p.key === "ArrowDown")) {
      const b = p.key === "ArrowUp" ? 1 * e.props.step : -1 * e.props.step;
      t(function(v, $) {
        var h, m, k, y;
        let D = `${v}`.split("."), x = `${$}`.split("."), C = (h = D[0]) !== null && h !== void 0 ? h : "0", w = (m = x[0]) !== null && m !== void 0 ? m : "0", L = (k = D[1]) !== null && k !== void 0 ? k : "", d = (y = x[1]) !== null && y !== void 0 ? y : "";
        const _ = Math.max(L.length, d.length);
        _ > 0 && (C += L.padEnd(_, "0"), w += d.padEnd(_, "0"));
        const I = BigInt(BigInt(C) + BigInt(w)).toString();
        return _ > 0 ? I.slice(0, -1 * _) + "." + I.slice(-1 * _) : I;
      }((g = f == null ? void 0 : f.number) !== null && g !== void 0 ? g : 0, b)), r(), setTimeout(() => {
        l(o().length);
      }, 1);
    }
  });
}
function Hh(e, t = {}) {
  const r = e;
  try {
    let o = function(n) {
      kl.has(n) && function(s, l) {
        Mr[s] ? Mr[s].add(l) : Mr[s] = /* @__PURE__ */ new Set([l]);
      }(e, (s) => {
        n.props.definition && (n.props.definition.schema = s || [{ $el: lt(13919), children: `${lt(451228594)}${lt(32863693)}` }]), n.emit("schema"), setTimeout(() => n.destroy(), 1e3);
      });
    };
    return function(n) {
      const a = () => {
        throw new Error(`InvalidFormKitKey ${n}`);
      };
      if (!/^fk-/i.test(n))
        return a();
      const s = n.substring(3);
      if (!Yh.test(s))
        return a();
      const l = parseInt(s, 16).toString(), i = Number(l[0]) < 6 ? Number(l[0]) : 6, u = l.substring(i, i + (l.length - 6)), c = l.substring(0, i) + l.substring(i + u.length), f = c.slice(0, 2), p = `${c[c.length - 1]}${c[0]}`;
      Number(u) !== Math.floor(Number(c) * Number(f) / Number(p)) && a();
    }(r), o.library = (n) => {
      if (n.props.type in t) {
        const { schema: a, ...s } = t[n.props.type];
        kl.add(n), n.define({ ...s, schema: a(e) });
      }
      zx(() => qo.has(e) && n.emit("schema"), 4e3);
    }, o;
  } catch (o) {
    throw o instanceof Error && function(n) {
      if (n.message === "FormKitNoKey")
        throw new Error("A FormKit API key is required, please visit https://formkit.com/pro");
    }(o), o;
  }
}
const Ks = [988, 24029, 396, 13078, 980], Wh = 18806588, jh = 502357, Kh = 16217489;
let jt = 189024;
const zh = () => [30548127325, 27022924, 34729821653783].map(lt).join("y"), Yh = /^[0-9a-f]+$/, Le = typeof window < "u", Zn = $t(32, (e) => e).map(() => {
  jt |= 0, jt = jt + 1831565813 | 0;
  let e = jt ^ jt >>> 15 | jt;
  return e = e + e ^ e >>> 427, ((e ^ e >>> 14) >>> 0) / 4294967296;
}), cn = Le ? setTimeout : () => 0, Zh = (e) => {
  clearTimeout(Un[e]);
}, Un = {}, lt = (e) => e.toString(32), zs = (e) => `${lt(Zn[e]).substring(2)}.${lt(Ks[e % (Ks.length - 1)])}`, oo = {}, yr = {}, qo = /* @__PURE__ */ new Set(["", null, void 0]), Mr = {}, Uh = () => ({ $el: "div", attrs: { key: "$id", "data-type": "$type", "data-family": "$family", "data-multiple": "$attrs.multiple || $multiple || undefined", "data-disabled": "$disabled || $disabledInternally || undefined", "data-empty": "$state.empty || undefined", "data-complete": "$state.complete || undefined", "data-invalid": "$state.valid === false && $state.validationVisible || undefined", "data-errors": "$state.errors || undefined", "data-submitted": "$state.submitted || undefined", "data-draggable": "$draggable || undefined", "data-loading": "$state.loading || undefined", "data-overscroll": '$behavior === "overscroll" && true || undefined', "data-id": "$id", "data-inline": "$inline || undefined", "data-is-max": "$max && $value && $value.length >= $max || undefined", "data-multi-select": "$transferOnSelect === false || undefined", "data-has-overlay": "$overlay || undefined", "data-expanded": "$expanded || undefined", "data-focused": "$_isFocused || undefined", "data-appearance": "$selectionAppearance || undefined", "data-is-multiline": "$multiLine || undefined" } }), qh = () => ({ $el: "div", attrs: { id: '$id + "_inner"' } }), Gh = () => ({ if: "$label", $el: "label", attrs: { for: "$id", id: "$id + '_label'" } }), Xh = () => ({ $el: "ul", if: "$fns.length($messages)" }), Jh = () => ({ $el: "li", for: ["message", "$messages"], attrs: { key: "$message.key", id: "$id + '-' + $message.key", "data-message-type": "$message.type" } }), Qh = () => ({ $el: "div", if: "$help" }), Ys = () => ({ $el: null }), fo = (e, t) => () => ve(e, t), e0 = () => ({ $el: "span", if: '$part.type === "placeholder" && $part.value' }), t0 = () => ({ $el: "span", if: '$part.type === "literal" && $part.value' }), r0 = () => ({ $el: "span", if: '$part.type === "char" && $part.value' }), o0 = () => ({ $el: "span", if: '$part.type === "enum" && $part.value' }), n0 = () => ({ $el: "div", if: "$overlay", attrs: { id: '$id + "_overlay"', class: "$classes.overlay", style: "$_overlayStyles", onClick: "$_isPlaceholder && $handlers.overlayClick" } }), a0 = () => ({ $el: "div", attrs: { id: '$id + "_overlay_inner"', class: "$classes.overlayInner", style: "$_overlayInnerStyles" } }), s0 = () => ({ $el: null, for: ["part", "$_overlayParts"] }), be = Ae("dd"), { outer: l0, wrapper: i0, inner: u0, icon: Kt, label: p0, prefix: d0, suffix: c0, help: f0, messages: g0, message: m0 } = Ee(be), h0 = be("selector", () => ({ $el: "button", bind: "$attrs", attrs: { id: "$id", type: "button", onClick: "$handlers.click", onBlur: "$handlers.blur", onFocus: "$handlers.focus", onKeydown: "$handlers.keydown", tabindex: "0", name: "$node.name", disabled: "$disabled || $disabledInternally || undefined", "aria-haspopup": "listbox", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined', "aria-describedBy": "$describedBy" } })), v0 = be("selectionWrapper", () => ({ if: "$option || $state.loading", $el: "div" })), b0 = be("selection", () => ({ $el: "div" })), $0 = be("placeholder", () => ({ $el: "div", attrs: { key: "placeholder", "data-is-placeholder": "true", "aria-hidden": '$placeholder === undefined && "true" || undefined', style: { opacity: '$placeholder === undefined && "0" || undefined', "pointer-events": '$placeholder === undefined && "none" || undefined' } } })), fn = be("optionLoading", "span"), y0 = be("option", () => ({ $el: "div" })), Zs = be("removeSelection", () => ({ $el: "div", attrs: { id: '$selectionAppearance === "tags" && $id + "_remove_selection_" + $index || $id + "_remove_selection"', tabindex: "-1", type: "button", key: "$value", "aria-label": "$ui.remove.value", onClick: '$handlers.removeSelection && $handlers.removeSelection($selectionAppearance === "tags" && $option || undefined)', onTouchstart: '$handlers.removeSelection && $handlers.removeSelection($selectionAppearance === "tags" && $option || undefined)', "aria-controls": "$id" } })), x0 = be("selectionsWrapper", () => ({ $el: "div", attrs: { id: '$id + "_selections_wrapper"' } })), w0 = be("selections", () => ({ $el: "div", attrs: { "aria-live": "polite", "aria-hidden": '$lastVisibleIndex && "true" || undefined', "data-test": "$lastVisibleIndex", id: '$id + "_selections"' } })), _0 = be("truncationCount", () => ({ $el: "div", attrs: { id: '$id + "_truncation_count"' } })), k0 = be("selectionsItem", () => ({ $el: "div", for: ["selectionLabel", "index", "$formattedSelections"], attrs: { id: '$id + "_selections_item_" + $index', "data-check": "$selectionLabel", key: "$selectionLabel", "aria-hidden": '$lastVisibleIndex && $index > $lastVisibleIndex && "true" || undefined', style: { visibility: '$lastVisibleIndex && $index > $lastVisibleIndex && "hidden" || undefined' } }, children: '$selectionLabel || ""' })), D0 = be("tagWrapper", () => ({ $el: "span", for: ["option", "index", "$selections"], attrs: { id: '$id + "_tag-wrapper_" + $index', key: "$option.value", "data-value": "$option.value", tabindex: "-1", onClick: "$handlers.tagClick && $handlers.tagClick($option)", onKeydown: "$handlers.selectorTagKeydownHandler($option)", onFocus: "$handlers.tagFocus && $handlers.tagFocus($option)", onBlur: "$handlers.tagBlur && $handlers.tagBlur($option)", "data-is-tag": "true", "data-active-selection": "$fns.isActiveSelection($activeSelectionValue, $option)" } })), S0 = be("tag", () => ({ $el: "div", attrs: { id: '$id + "_tag_" + $index', role: "button", tabindex: "-1" } })), C0 = be("tagLabel", () => ({ $el: "span" })), L0 = be("tagsWrapper", () => ({ $el: "span", attrs: { id: '$id + "_tags_wrapper"', "aria-live": "polite" } })), I0 = be("tags", () => ({ $el: "span", attrs: { id: '$id + "_selections"' } })), A0 = be("tagLoading", "span"), E0 = ha(be), Nu = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Bu = ye({ key: "loading", type: "state", value: !0, visible: !1 }), Br = ye({ key: "loading", type: "state", value: !1, visible: !1 }), Ru = /* @__PURE__ */ new WeakMap(), fr = Symbol(), Ca = (e) => {
  const t = ((n) => {
    const a = [...n.props.allOptions, ...n.props.initialOptions];
    return [...n.props.memoOptions || [], ...a];
  })(e), r = e.props.inputStd || [], o = [];
  for (const n of r) {
    let a, s = t.find((l) => j(P(l), n));
    a = yt(n) ? void 0 : Array.isArray(n) ? n.join(", ") : n, s || (s = { value: n, label: a, isPlaceholder: !1, noOptionFound: !0 }), o.push(s);
  }
  return o;
}, xr = /* @__PURE__ */ new WeakSet(), qn = /* @__PURE__ */ new WeakMap(), M0 = { position: "fixed", top: 0, bottom: 0, right: 0, left: 0, pointerEvents: "none", zIndex: -1, overflowY: "auto", "-webkit-overflow-scrolling": "auto" }, gn = { position: "fixed", overflow: "hidden", height: "100%", width: "100%" }, mn = { overflow: "hidden", height: "100%" }, qs = {}, Gs = {};
let hn = 0;
const T0 = (e, t) => {
  let r = null, o = null, n = null;
  return function(...a) {
    const s = this;
    r ? (o = a, n = s) : (e.apply(s, a), r = window.setTimeout(() => {
      r = null, o !== null && n !== null && (e.apply(n, o), o = null, n = null);
    }, t));
  };
}, O0 = { schema: l0(i0(p0("$label"), u0(Kt("prefix"), d0(), h0(B("$inputStd.length === 0 && $state.loading !== true", $0('$placeholder || "placeholder"'), B("$multiple !== true", v0(B("$state.loading && $selections.length === 0", fn("$ui.isLoading.value"), b0(y0("$option.label")))), B('$multiple && $selectionAppearance === "truncate"', x0(w0(B("$state.loading && $selections.length === 0", fn("$ui.isLoading.value"), k0()))), B('$multiple && $selectionAppearance === "tags"', L0(I0(B("$state.loading && $isLoadingOption !== true && $selections.length === 0", fn("$ui.isLoading.value"), D0(S0(B("$state.loading && $optionLoaderValues.includes($option.value) || $option.label === undefined", A0("$ui.isLoading.value"), C0("$option.label")), Zs(Kt("close"))))))))))), B("$truncationCount && $state.loading !== true", _0("$truncationCount")), B("$state.loading", Kt("loader")), B("$inputStd.length !== 0 && $selectionRemovable", Zs(Kt("close")), Kt("select"))), E0(), c0(), Kt("suffix"))), f0("$help"), g0(m0("$message.value"))), type: "input", family: "dropdown", props: [], features: [X("select", "select"), X("close", "close"), X("selected", "check"), X("loader", "spinner"), re("isLoading"), re("loadMore"), re("remove"), We, ya.bind(null, function(e) {
  e.props.closeOnSelect === void 0 ? e.props.closeOnSelect = !e.props.multiple : e.props.closeOnSelect = R(e.props.closeOnSelect), (e.props.multiple && e.props.selectionAppearance === void 0 || e.props.selectionAppearance === "truncate") && (e.props.selectionAppearance = "truncate", e.props.formattedSelections = []), e.props.multiple ? e.props.selectionRemovable = !1 : e.props.selectionRemovable = R(e.props.selectionRemovable);
}, function(e) {
  e.props.alwaysLoadOnOpen = e.props.alwaysLoadOnOpen !== void 0 && R(e.props.alwaysLoadOnOpen), e.on("created", () => {
    e.context && (e.context.handlers.click = Um.bind(null, e), e.context.handlers.focus = qm.bind(null, e), e.context.handlers.keydown = Ym.bind(null, e), e.context.handlers.selectorTagKeydownHandler = (t) => Km.bind(null, e, t));
  });
}, function(e) {
  if (e.on("created", () => {
    e.context && Gm(e);
  }), e.props.multiple || function(t) {
    t.on("prop:selections", ({ payload: r }) => {
      var o;
      t.props.firstSelectionLabel = ((o = r[0]) === null || o === void 0 ? void 0 : o.label) || "", t.props.option = r[0];
    });
  }(e), e.props.selectionAppearance === "truncate" && (e.props.lastVisibleIndex = null, vs(e), e.on("prop:selections", () => {
    vs(e);
  })), e.props.selectionAppearance === "tags" && lu(e), e.props.multiple && e.props.selectionAppearance === "tags") {
    let t = function() {
      return Array.isArray(e.value) ? e.value : [];
    }, r = function(o, n) {
      e.input(o);
    };
    e.on("created", () => {
      e.props.disabled && (e.props.draggable = !1), me(`${e.props.id}_selections`, (o) => {
        if (e.context && o instanceof HTMLElement) {
          const n = { threshold: { horizontal: 0.25, vertical: 0 }, plugins: [Ko()], draggingClass: e.context.classes.dragging, dropZoneClass: e.context.classes.dropZone, disabled: !e.props.draggable, root: e.props.__root, touchDraggingClass: e.context.classes.touchDragging, touchDropZoneClass: e.context.classes.touchDropZone, draggable: (a) => a.hasAttribute("data-is-tag") };
          he({ parent: o, getValues: t, setValues: r, config: n }), e.on("prop:disabled", ({ payload: a }) => {
            n.disabled = a, he({ parent: o, getValues: t, setValues: r, config: n });
          }), e.on("prop:draggable", ({ payload: a }) => {
            n.disabled = !a, he({ parent: o, getValues: t, setValues: r, config: n });
          });
        }
      }, e.props.__root);
    });
  }
  e.on("prop:expanded", ({ payload: t }) => {
    t && e.props.optionsLoader && typeof e.props.optionsLoader == "function" && (!e.props.options.length || e.props.alwaysLoadOnOpen) && (e.props.options = [], ar(e));
  }), e.props.behavior === "overscroll" && eh(e);
}), Yr] }, ft = Ae("tg"), { outer: P0, wrapper: V0, label: Jx, prefix: F0, suffix: N0, help: B0, messages: R0, message: H0, icon: W0 } = Ee(ft), j0 = ft("input", () => ({ $el: "input", bind: "$attrs", attrs: { type: "checkbox", id: "$id", value: "$value", name: "$node.name", checked: "$checked", onInput: "$handlers.toggles", onBlur: "$handlers.blur", disabled: "$disabled" } })), K0 = ft("label", () => ({ if: "($label && $onValueLabel === undefined && $offValueLabel === undefined) || ($valueLabelDisplay === inner) && $altLabelPosition !== true", $el: "label", attrs: { for: "$id" }, children: "$label" })), z0 = ft("altLabel", () => ({ $el: "label", if: "($label && ($onValueLabel || $offValueLabel) && $valueLabelDisplay !== hidden && $valueLabelDisplay !== inner) || $altLabelPosition === true", attrs: { for: "$id", "data-label-alt": "true", style: { color: { if: "$checked", then: "$valueLabelColorOn", else: "$valueLabelColorOff" } } }, children: "$label" })), Y0 = ft("innerLabel", () => ({ $el: "div", if: "$valueLabelDisplay === inner && ($checked && $onValueLabel || $offValueLabel)", attrs: { style: { color: { if: "$checked", then: "$valueLabelColorOn", else: "$valueLabelColorOff" } } }, children: { if: "$checked", then: "$onValueLabel", else: "$offValueLabel" } })), Z0 = ft("valueLabel", () => ({ $el: "label", if: "$valueLabelDisplay !== hidden && $valueLabelDisplay !== inner && (($checked === true && $onValueLabel) || ($checked === false && $offValueLabel))", attrs: { for: "$id" }, children: { if: "$checked && $onValueLabel", then: "$onValueLabel", else: { if: "$offValueLabel", then: "$offValueLabel" } } })), U0 = ft("inner", () => ({ $el: "label", attrs: { for: "$id", id: "$id + '_label'" } })), q0 = ft("track", () => ({ $el: "div", attrs: { style: { backgroundColor: { if: "$checked", then: "$trackColorOn", else: "$trackColorOff" } } } })), G0 = ft("thumb", () => ({ $el: "div", attrs: { style: { color: { if: "$checked", then: "$iconColorOn", else: "$iconColorOff" }, backgroundColor: { if: "$checked", then: "$thumbColorOn", else: "$thumbColorOff" } } } })), X0 = { schema: P0(V0(z0(), U0(F0(), j0(), q0(Y0(), G0(B("$slots.default", "$slots.default", W0("thumb")))), N0()), Z0(), K0()), B0("$help"), R0(H0("$message.value"))), type: "input", props: ["checked", "thumbColorOff", "thumbColorOn", "iconColorOff", "iconColorOn", "valueLabelColorOff", "valueLabelColorOn", "offValue", "offValueLabel", "onValue", "onValueLabel", "thumbIcon", "trackColorOff", "trackColorOn", "valueLabelDisplay", "altLabelPosition"], features: [function(e) {
  function t(r, o) {
    o.target instanceof HTMLInputElement && (r.input(o.target.checked ? r.props.onValue : r.props.offValue), r.props.checked = o.target.checked);
  }
  e.on("created", () => {
    "disabled" in e.props && (e.props.disabled = R(e.props.disabled)), e.props.altLabelPosition = R(e.props.altLabelPosition), e.props.offValue === void 0 && (e.props.offValue = !1), e.props.onValue === void 0 && (e.props.onValue = !0), e.props.checked = j(e.value, e.props.onValue), e.context && (e.context.handlers.toggles = t.bind(null, e));
  }), e.on("commit", ({ payload: r }) => {
    e.props.checked = j(r, e.props.onValue);
  });
}] }, ce = Ae("rp"), { outer: J0, inner: Q0, prefix: ev, suffix: tv, help: rv, messages: ov, message: nv, icon: wr } = Ee(ce), av = ce("empty", () => ({ $el: "div" })), sv = ce("insertControl", () => ({ $el: "button", attrs: { disabled: "$value.length >= $max", onClick: "$fns.createInsert($index)", type: "button" } })), lv = ce("addButton", () => ({ $formkit: "button", bind: "$addAttrs", if: "$addButton", disabled: "$value.length >= $max", onClick: "$fns.createAppend()", type: "button" })), iv = ce("removeControl", () => ({ $el: "button", attrs: { disabled: "$value.length <= $min", onClick: "$fns.createRemover($index)", type: "button" } })), uv = ce("items", () => ({ $el: "ul", meta: { autoAnimate: !0 }, attrs: { role: "list", id: '$id + "_items"' } })), pv = ce("item", () => ({ $el: "li", for: ["item", "index", "$items"], attrs: { role: "listitem", key: "$item", "data-index": "$index" } })), dv = ce("downControl", () => ({ $el: "button", attrs: { disabled: "$index >= $value.length - 1", onClick: "$fns.createShift($index, 1)", type: "button" } })), cv = ce("upControl", () => ({ $el: "button", attrs: { disabled: "$index <= 0", onClick: "$fns.createShift($index, -1)", type: "button" } })), fv = ce("content", "div"), gv = ce("fieldset", () => ({ $el: "fieldset", attrs: { id: "$id" } })), mv = ce("legend", () => ({ $el: "legend", if: "$label" })), hv = ce("group", () => ({ $formkit: "group", index: "$index" })), vv = ce("controls", () => ({ $el: "ul", if: "$removeControl || $insertControl || $upControl || $downControl" })), bv = ce("remove", () => ({ $el: "li", if: "$removeControl" })), $v = ce("insert", () => ({ $el: "li", if: "$insertControl" })), yv = ce("up", () => ({ $el: "li", if: "$upControl" })), xv = ce("down", () => ({ $el: "li", if: "$downControl" })), no = ce("controlLabel", "span"), wv = ce("dragHandleWrapper", () => ({ if: "$draggable", $el: "div" })), _v = ce("dragHandle", () => ({ $el: "div", attrs: { id: '$id + "_drag_handle"' } })), kv = { schema: J0(gv(mv("$label"), rv("$help"), Q0(ev(), B("$value.length === 0", B("$slots.empty", av()), B("$slots.default", uv(pv(wv(_v(wr("dragHandle"))), fv(hv("$slots.default")), vv(yv(cv(no("$ui.moveUp.value"), wr("moveUp"))), bv(iv(no("$ui.remove.value"), wr("remove"))), $v(sv(no("$ui.add.value"), wr("add"))), xv(dv(no("$ui.moveDown.value"), wr("moveDown")))))), tv()))), lv('$addLabel || ($ui.add.value + " " + ($label || ""))')), ov(nv("$message.value"))), type: "list", props: ["min", "max", "total", "upControl", "downControl", "removeControl", "insertControl", "addLabel", "addButton", "addAttrs", "draggable"], features: [function(e) {
  e._c.sync = !0, e.on("created", oh.bind(null, e)), e.on("mounted", () => {
    me(`${e.props.id}_items`, (t) => {
      if (t instanceof HTMLElement) {
        let r = function(o) {
          for (const n of o)
            for (const a of Array.from(n.addedNodes))
              if (a instanceof HTMLElement && a.id === `${e.props.id}_items`)
                return void $s(a, e);
        };
        $s(t, e), new MutationObserver(r).observe(t.parentNode, { childList: !0 });
      }
    }, e.props.__root);
  });
}, jo, re("remove"), re("add"), re("moveUp"), re("moveDown"), X("dragHandle", "dragHandle"), X("remove", "trash"), X("add", "add"), X("moveUp", "arrowUp"), X("moveDown", "arrowDown")] }, Gn = /* @__PURE__ */ new WeakMap(), je = Ae("rt"), { outer: Dv, wrapper: Sv, inner: Cv, label: Lv, prefix: Iv, suffix: Av, help: Ev, messages: Mv, message: Tv, icon: ao } = Ee(je), Ov = je("itemsWrapper", () => ({ $el: "span", attrs: { style: { "flex-direction": '$rightToLeft && "row-reverse" || undefined' }, tabindex: "$value !== undefined && $value !== 0 && '-1' || '0'", id: "$id + _items_wrapper", onKeydown: "$handlers.handleWrapperKeydown", "data-disabled": "$disabled", onBlur: "$handlers.handleWrapperBlur", onMouseleave: "$hoverHighlight && $handlers.handleMouseleave" } })), Pv = je("ratingItem", () => ({ for: ["item", "index", "$max"], $el: "span", attrs: { id: '$id + "_item_" + $index', onClick: "$handlers.handleItemClick($item)", draggable: "$hoverHighlight !== true && && $disabled !== true && true", onMousemove: "$handlers.handleMousemove($item)", onDragstart: "$handlers.handleDragstart($item)", onDragend: "$handlers.handleDragend", onTouchstart: "$handlers.handleTouchstart($item)", onTouchmove: "$handlers.handleTouchmove" } })), Vv = je("template", () => ({ for: ["increment", "stepIndex", "$stepsPerValue"], $el: null })), Fv = je("itemLabel", () => ({ $el: "label", attrs: { id: '$id + "_label_" + $index + "_" + $stepIndex', for: '$id + "_" + $index + "_" + $stepIndex', "data-checked": '$value === $fns.getValue($item, $increment) && "true" || "false"', style: { width: '$fns.showLabel($fns.getValue($item, $increment), $stepIndex, $item) && "100%" || "0%"' } } })), Nv = je("itemLabelInner", () => ({ $el: "span", children: "$fns.getValue($item, $increment)" })), Bv = je("input", () => ({ $el: "input", attrs: { type: "radio", value: "$fns.getValue($item, $increment)", id: '$id + "_" + $index + "_" + $stepIndex', onFocus: "$handlers.handleFocus", tabindex: '$value === $fns.getValue($item, $increment) && "0" || "-1"', disabled: "$disabled", name: "$id", checked: "$value === $fns.getValue($item, $increment) && true", onKeydown: "$handlers.handleKeydown($fns.getValue($item, $increment))" } })), Rv = je("onItemRow", () => ({ $el: "span", attrs: { style: { width: "$fns.getPercentage($itemsToPercentages, $item)", display: "flex", position: "relative", overflow: "hidden", top: "0", left: "0", bottom: "0" } } })), Hv = je("offItemRow", () => ({ $el: "span", attrs: { style: { width: "$fns.getPercentage($itemsToPercentages, $item, false)", display: "flex", "flex-direction": "row-reverse", position: "absolute", zIndex: "$offItemStyles && 100", overflow: "hidden", top: "0", right: "0" } } })), Wv = je("onItemWrapper", () => ({ $el: "div", attrs: { style: { color: "$onColor" } } })), jv = je("offItemWrapper", () => ({ $el: "div", attrs: { style: { color: "$offColor" } } })), Kv = { schema: Dv(Sv(Lv("$label"), Cv(ao("prefix"), Iv(), Ov(Pv(Vv(Fv(Rv(Wv(B("$slots.onItem", () => () => "$slots.onItem", B("$slots.default", () => () => "$slots.default", ao("rating"))))), Hv(jv(B("$slots.offItem", () => () => "$slots.offItem", B("$slots.default", () => () => "$slots.default", ao("rating"))))), Nv()), Bv()))), Av(), ao("suffix"))), Ev("$help"), Mv(Tv("$message.value"))), type: "input", props: [], features: [function(e) {
  function t(r) {
    setTimeout(() => {
      const o = Array.from(document.querySelectorAll(`#${r.props.id}_items_wrapper > .formkit-ratingItem`));
      for (let n = 0; n < o.length; n++) {
        const a = o[n].querySelectorAll(".formkit-onItemWrapper"), s = o[n].querySelectorAll(".formkit-offItemWrapper");
        for (let l = 0; l < a.length; l++)
          a[l].style.flex = `0 0 ${o[n].getBoundingClientRect().width}px`;
        for (let l = 0; l < s.length; l++)
          s[l].style.flex = `0 0 ${o[n].getBoundingClientRect().width}px`;
      }
    });
  }
  e.addProps(["max", "step", "stepsPerValue", "itemsToPercentages", "rightToLeft", "onItemStyles", "offItemStyles", "hoverHighlight", "deselect", "disabled", "wrapperWidth", "onColor", "offColor"]), e.props.hoverHighlight !== !1 && e.props.hoverHighlight !== "false" && (e.props.hoverHighlight = !0), e.props.deselect = R(e.props.deselect), e.props.max = Number(e.props.max) || 5, e.props.min = Number(e.props.min) || 0, e.props.step = Number(e.props.step) || 1, e.props.numberOfSteps = e.props.max / e.props.step, e.props.lastIndex = 1 / e.props.step - 1, e.props.itemsToPercentages = {}, "disabled" in e.props && (e.props.disabled = R(e.props.disabled)), e.props.rightToLeft ? (e.props.onItemStyles = void 0, e.props.offItemStyles = { position: "absolute", top: "0", left: "0", overflow: "hidden", height: "100%", zIndex: 100 }) : e.props.onItemStyles = { position: "absolute", top: "0", left: "0", overflow: "hidden", height: "100%" }, e.props.stepsPerValue = 1 / e.props.step, e.hook.input((r, o) => {
    if (r === null || r === "" || isNaN(r))
      return o(r);
    const n = Number(r), a = Number(e.props.min), s = Number(e.props.max);
    return n > s ? o(s) : e.props.min && n <= a ? o(a) : o(n);
  }), e.on("commit", ({ payload: r }) => {
    const o = Number(r || 0);
    Zr(e, o);
  }), e.on("created", () => {
    e.context && (me(`${e.props.id}_items_wrapper`, () => {
      t(e), function(r) {
        var o;
        const n = (o = r.props.__root) === null || o === void 0 ? void 0 : o.getElementById(`${r.props.id}_items_wrapper`);
        n && new ResizeObserver(() => {
          t(r);
        }).observe(n);
      }(e), setTimeout(() => t(e), 100);
    }, e.props.__root), e.context.fns.getPercentage = (r, o, n = !0) => (n ? r.onItems : r.offItems)[o], e.context.fns.getValue = (r, o) => r + Number((o * e.props.step + e.props.step).toFixed(1)), e.context.fns.showLabel = (r, o) => {
      const n = Number(e.value || 0);
      return n === 0 && o === 0 || n && r === n || r > n && o === 0 || n > r && o === e.props.lastIndex;
    }, e.context.handlers.handleFocus = (r) => uh.call(null, e, r), e.context.handlers.handleWrapperKeydown = (r) => ih.call(null, e, r), e.context.handlers.handleWrapperBlur = (r) => nh.call(null, e, r), e.context.handlers.handleItemClick = (r) => (o) => ch.call(null, e, r, o), e.context.handlers.handleMousemove = (r) => (o) => ph.call(null, e, r, o), e.context.handlers.handleMouseleave = () => dh.call(null, e), e.context.handlers.handleDragstart = (r) => (o) => lh.call(null, e, r, o), e.context.handlers.handleMouseup = (r) => iu.call(null, e, r), e.context.handlers.handleTouchstart = (r) => (o) => sh.call(null, e, r, o), e.context.handlers.handleTouchmove = (r) => ah.call(null, e, r), e.context.handlers.handleKeydown = (r) => (o) => function(n, a, s) {
      const l = Number(n.value);
      n.props.deselect && s.key === " " && l === a ? n.input(0) : s.key === " " && n.input(a);
    }(e, r, o));
  });
}, X("rating", "star")] }, Ue = Ae("ac"), { outer: zv, wrapper: Yv, inner: Zv, icon: Je, label: Uv, prefix: qv, suffix: Gv, help: Xv, messages: Jv, message: Qv } = Ee(Ue), eb = Ue("input", () => ({ $el: "input", bind: "$attrs", attrs: { id: "$id", type: "text", onClick: "$handlers.click", onBlur: "$handlers.blur", onKeydown: "$handlers.keydown", onInput: "$handlers.input", onFocus: "$handlers.focus", value: "$inputText || undefined", name: "$node.name", placeholder: "$state.loading && $ui.isLoading.value || $placeholder || undefined", tabindex: '$disabled && "-1" || 0', role: "combobox", autocomplete: '$attrs.autocomplete || "off"', autocapitalize: "none", readonly: "$attrs.readonly || $state.loading || $multiple && $max && $value && $value.length >= $max && $hasHighlightedRange !== true || undefined", "data-selection-appearance": "$selectionAppearance", disabled: "$disabled || $disabledInternally || undefined", onTouchmove: "$handlers.touchmove", onTouchstart: "$handlers.touchmove", onTouchend: "$handlers.touchend", "aria-autocomplete": "list", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined', "aria-describedBy": "$describedBy", "aria-activedescendant": "$expanded && $activeDescendant || undefined" } })), Xs = Ue("listboxButton", () => ({ $el: "div", attrs: { style: "$visibilityStyles", id: '$id + "_listbox_button"', role: "button", "aria-label": "$expanded && $ui.close.value || $ui.open.value", onClick: "$handlers.toggleListbox", onKeydown: "$handlers.toggleListboxKeydown", tabindex: '$disabled && "-1" || 0', "aria-haspopup": "true", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined', "aria-disabled": "$disabled || $state.loading || undefined", "data-disabled": "$disabled || $disabledInternally || undefined" } })), Js = Ue("selectionWrapper", () => ({ for: ["option", "index", "$selections"], $el: "div", attrs: { id: '$id + "_selection_wrapper_" + $index', key: "$option.value", "data-value": "$option.value", tabindex: '$disabled && "-1" || 1', onKeydown: "$handlers.selectionKeydown && $handlers.selectionKeydown($multiple && $option || undefined)", onClick: "$handlers.selectionClick && $handlers.selectionClick($multiple && $option || undefined)", onFocus: "$handlers.selectionFocus && $handlers.selectionFocus($multiple && $option || undefined)", onBlur: "$handlers.selectionBlur && $handlers.selectionBlur($multiple && $option || undefined)", "data-is-selection": "true", "data-active-selection": "$fns.isActiveSelection($activeSelectionValue, $option)" } })), Qs = Ue("selection", () => ({ $el: "div", attrs: { id: '$id + "_selection_" + $index' } })), el = Ue("selections", () => ({ $el: "div", attrs: { "aria-live": "polite", id: '$id + "_selections"' } })), vn = Ue("removeSelection", () => ({ $el: "button", attrs: { id: '$selectionAppearance === "option" && $multiple && $id + "_remove_selection_" + $index || $id + "_remove_selection"', tabindex: "0", title: "$ui.remove.value", type: "button", "aria-label": "$ui.remove.value", onClick: "$handlers.removeSelection && $handlers.removeSelection($multiple && $option || undefined)", onTouchend: "$handlers.removeSelection && $handlers.removeSelection($multiple && $option || undefined)", "aria-controls": "$id" } })), tl = Ue("optionLoading", "span"), rl = Ue("option", () => ({ $el: "div", if: "$value !== undefined" })), tb = ha(Ue), ol = /* @__PURE__ */ new WeakMap(), go = typeof window < "u", bn = /* @__PURE__ */ new WeakMap();
let nl = !1;
const rb = { schema: zv(Yv(Uv("$label"), Zv(Je("prefix"), qv(), eb(), B("$multiple !== true && $selectionAppearance === option && $expanded === false", el(Js(Qs(rl(B("$state.loading", tl("$ui.isLoading.value"), "$option.label"))), B("$state.loading && $isSingleOption !== true && $optionLoaderValues.includes($option.value)", Je("loader")), B("$selectionRemovable && $isSingleOption", vn(Je("close")))))), B("$state.loading && ($isSingleOption !== true || $selections.length === 0)", Je("loader")), B('$selectionRemovable && $selectionAppearance === "text-input" && $selections.length > 0', vn(Je("close")), B('$selectionAppearance === "text-input" || ($selectionAppearance === "option" && $multiple)', Xs(Je("select")))), B("$isSingleOption && ($inputStd.length === 0 || $selectionRemovable === undefined || ($expanded) || $state.loading || $optionLoaderValues.length > 0)", Xs(Je("select"))), tb(), Gv(), Je("suffix")), B("$multiple && $selectionAppearance === option", el(Js(Qs(rl(B("$state.loading && $isLoadingOption", tl("$ui.isLoading.value"), "$option.label"))), vn(Je("close")))))), Xv("$help"), Jv(Qv("$message.value"))), type: "input", family: "dropdown", props: [], features: [X("select", "select"), X("close", "close"), X("selected", "check"), X("loader", "spinner"), re("isLoading"), re("loadMore"), re("remove"), re("open"), re("close"), We, ya.bind(null, function(e) {
  e.props.selectionAppearance !== "option" || e.props.multiple || e.props.selectionRemovable === !1 || e.props.selectionRemovable === "false" || (e.props.selectionRemovable = !0), e.props.multiple || (e.props.clearSearchOnOpen = R(e.props.clearSearchOnOpen)), e.props.selectionRemovable = R(e.props.selectionRemovable), e.props.openOnClick = R(e.props.openOnClick), e.props.selectionAppearance !== "option" || e.props.multiple || (e.props.isSingleOption = !0), e.props.closeOnSelect === void 0 && (e.props.closeOnSelect = !0), e.props.selectionAppearance === void 0 && (e.props.selectionAppearance = "text-input"), e.props.closeOnSelect === void 0 && (e.props.closeOnSelect = !0), e.props.closeOnSelect ? e.props.resetSearchOnCommit = !1 : e.props.resetSearchOnCommit === void 0 && (e.props.resetSearchOnCommit = e.props.multiple), e.props.allowNewValues = R(e.props.allowNewValues);
}, pu, function(e) {
  if (e.props.multiple)
    if (e.props.multiple && e.props.selectionAppearance === "option") {
      let t = function() {
        return Array.isArray(e.value) ? e.value : [];
      }, r = function(o) {
        e.input(o);
      };
      cu(e), e.on("created", () => {
        e.props.disabled && (e.props.draggable = !1), me(`${e.props.id}_selections`, (o) => {
          if (o instanceof HTMLElement && e.context) {
            const n = { draggingClass: e.context.classes.dragging, dropZoneClass: e.context.classes.dropZone, root: e.props.__root, disabled: !e.props.draggable, plugins: [Ko()], touchDraggingClass: e.context.classes.touchDragging, touchDropZoneClass: e.context.classes.touchDropZone, draggable: (a) => a.hasAttribute("data-is-selection") };
            he({ parent: o, getValues: t, setValues: r, config: n }), e.on("prop:disabled", ({ payload: a }) => {
              n.disabled = a, he({ parent: o, getValues: t, setValues: r, config: n });
            }), e.on("prop:draggable", ({ payload: a }) => {
              n.disabled = !a, he({ parent: o, getValues: t, setValues: r, config: n });
            });
          }
        }, e.props.__root);
      });
    } else
      e.props.multiple && e.props.selectionAppearance === "text-input" && hh(e);
  else
    vh(e);
}), Yr] }, ee = Ae("dp"), { outer: ob, wrapper: nb, inner: ab, icon: Lt, label: sb, prefix: lb, suffix: ib, help: ub, messages: pb, message: db } = Ee(ee), cb = ee("input", () => ({ $el: "input", bind: "$attrs", attrs: { name: "$node.name", id: "$id", onKeydown: "$handlers.inputKeydown", value: "$inputText", onInput: "$handlers.dateInput", onClick: "$pickerOnly && $handlers.open", onBlur: "$handlers._blur", onFocus: "$handlers.focus", readonly: "$pickerOnly || $expanded", disabled: "$disabled" } })), fb = ee("panelWrapper", () => ({ $el: "div", if: "$expanded", attrs: { id: '$id + "_popover"', role: "dialog", onBlur: "$handlers._blurOut()", tabindex: "-1", popover: "$popover", "aria-modal": "true", "aria-label": "Choose date", "data-panel": "$panel", style: { if: "$usePopover", then: { margin: 0, top: '$popoverCoordinates.y + "px"', left: '$popoverCoordinates.x + "px"', width: '$popoverCoordinates.width + "px"' } } } })), gb = ee("next", () => ({ $el: "button", if: "$showPagination", attrs: { id: "$id + _next_button", type: "button", onClick: "$handlers.next" } })), mb = ee("nextLabel", "span"), hb = ee("prev", () => ({ $el: "button", if: "$showPagination", attrs: { id: "$id + _prev_button", type: "button", onClick: "$handlers.prev" } })), vb = ee("prevLabel", "span"), bb = ee("calendar", () => ({ if: '$panel === "day"', $el: "table", for: ["month", "$calendar"], attrs: { key: '$fns.format($month.monthDay, "YYYY-MM")' } })), $b = ee("calendarWeeks", () => ({ $el: "tbody" })), yb = ee("calendarHeader", () => ({ $el: "thead" })), xb = ee("weekDays", () => ({ $el: "tr" })), wb = ee("weekDay", () => ({ $el: "th", for: ["day", "$month.weeks.0"], attrs: { "aria-label": '$fns.format($day, "dddd")' } })), _b = ee("week", () => ({ $el: "tr", for: ["week", "$month.weeks"] })), kb = ee("dayCell", () => ({ $el: "td", for: ["day", "$week"], attrs: { key: '$: "day" + $fns.format($day, "D")', onClick: "$handlers.setDate($day)", onKeydown: "$handlers.keyDown", onMouseenter: "$handlers.mouseEnter($day)", onMouseleave: "$handlers.mouseLeave", onBlur: "$handlers._blurOut(day)", tabindex: '$fns.sameDay($day) && "0" || "-1"', "data-is-extra": "$fns.notInMonth($month.monthDay, $day)", "data-disabled": "$fns.isDisabled($day)", "aria-selected": "$fns.isSelected($day)", "aria-label": '$fns.format($day, "long")' } })), Db = ee("day", "div"), Sb = ee("openButton", () => ({ $el: "div", attrs: { style: "$visibilityStyles", id: '$id + "_listbox_button"', type: "div", role: "button", onClick: "$handlers.open", onKeydown: "$handlers.openKeydown", tabIndex: '$pickerOnly && "-1" || "0"', "data-disabled": "$disabled", "aria-disabled": "$disabled", "aria-label": '$value && ($ui.changeDate.value + ", " + $inputText) || $ui.chooseDate.value', "aria-haspopup": "true", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined' } })), Cb = ee("years", () => ({ if: '$panel === "year"', $el: "ul" })), Lb = ee("year", () => ({ for: ["year", "$years"], $el: "li", attrs: { key: '$: "year" + $fns.format($year, "YYYY")', onClick: "$handlers.setDate($year)", onKeydown: "$handlers.keyDown", onMouseenter: "$handlers.mouseEnter($year)", onMouseleave: "$handlers.mouseLeave", onBlur: "$handlers._blurOut(year)", tabindex: '$fns.sameYear($year) && "0" || "-1"', "aria-selected": "$fns.isSelected($year)", "data-disabled": "$fns.isDisabledYear($year)" } })), Ib = ee("months", () => ({ if: '$panel === "month"', $el: "ul" })), Ab = ee("month", () => ({ $el: "li", for: ["month", "$months"], attrs: { key: '$: "month" + $fns.format($month, "M")', onClick: "$handlers.setDate($month)", onKeydown: "$handlers.keyDown", onMouseenter: "$handlers.mouseEnter($month)", onMouseleave: "$handlers.mouseLeave", onBlur: "$handlers._blurOut(month)", tabindex: '$fns.sameMonth($month) && "0" || "-1"', "aria-selected": "$fns.isSelected($month)", "data-disabled": "$fns.isDisabledMonth($month)" } })), Eb = ee("panelHeader", () => ({ $el: "header", attrs: { "aria-live": "polite" } })), Mb = ee("yearsHeader", () => ({ $el: "div", if: '$panel === "year"' })), Tb = ee("monthsHeader", () => ({ $el: "div", if: '$panel === "month"' })), Ob = ee("daysHeader", () => ({ $el: "div", if: '$panel === "day"' })), Pb = ee("timeHeader", () => ({ $el: "div", if: '$panel === "time"' })), $n = ee("yearButton", () => ({ $el: "button", attrs: { type: "button", id: "$id + _year_button", onClick: "$handlers.jumpTo(year)" }, children: "$fns.format($renderedDate, $yearFormat)" })), al = ee("monthButton", () => ({ $el: "button", attrs: { type: "button", id: "$id + _month_button", onClick: "$handlers.jumpTo(month)" }, children: "$fns.format($renderedDate, $monthButtonFormat)" })), Vb = ee("dayButton", () => ({ $el: "button", attrs: { type: "button", id: "$id + _day_button", onClick: "$handlers.jumpTo(day)", tabindex: "2" }, children: "$fns.format($renderedDate, $dayButtonFormat)" })), Fb = ee("removeSelection", () => ({ $el: "button", if: "$clearable && $_value", attrs: { id: '$id + "_remove_selection"', type: "button", onClick: "$handlers.clear", "aria-controls": "$id" } })), Nb = ee("time", () => ({ $el: "div", if: '$panel === "time"' })), Bb = ee("timeInput", () => ({ $el: "input", attrs: { type: "time", value: "$localTime", onInput: "$handlers.localTime", onKeydown: "$handlers.keyDown", spellcheck: "false", onBlur: "$handlers._blurOut(time)" } })), Rb = ee("panelClose", () => ({ $el: "button", if: "$showPanelClose && ($inline === undefined || $inline === false)", attrs: { type: "button", class: "$classes.panelClose", onClick: "$handlers.closePanel", tabindex: -1, "aria-label": "$ui.close.value" } })), { overlayPlaceholder: Hb, overlayLiteral: Wb, overlayChar: jb, overlayEnum: Kb, overlay: zb, overlayParts: Yb, overlayInner: Zb } = qi(ee), Ub = ee("panel", "div"), it = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakSet(), qb = /* @__PURE__ */ new WeakMap(), Go = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakSet(), bt = /* @__PURE__ */ new WeakMap(), Vo = /[\uD800-\uDBFF]/, Et = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap(), mo = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakSet(), gr = /* @__PURE__ */ new WeakMap(), Xo = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap();
let Jn = !1;
const sl = () => {
  Jn = !0, setTimeout(() => {
    Jn = !1;
  }, 500);
}, Gb = { "#": { type: "char", pattern: /\d/, token: "#", placeholder: "_", selectDirection: "right" }, a: { type: "char", pattern: /[a-zA-Z]/, token: "a", placeholder: "_", selectDirection: "left" }, h: { type: "char", pattern: /[0-9a-fA-F]/, token: "h", placeholder: "_", selectDirection: "left" }, "*": { type: "char", pattern: /./, token: "*", placeholder: "_", selectDirection: "left" } }, ll = /* @__PURE__ */ new WeakMap(), Rr = typeof window < "u";
let ho = !1;
Rr && document.addEventListener("selectionchange", () => {
  const e = Ft();
  if (!(e instanceof HTMLInputElement))
    return;
  if (Tt.has(e))
    return function(r) {
      const o = Tt.get(r);
      if (o) {
        const [n, a] = o, [s, l] = Ce(r), i = l.indexOf(n);
        if (i === -1)
          return void Tt.delete(r);
        const u = s[i], c = [u[0] + a[0], u[1], "none"];
        Nt(Ze(r), c) || Eo(r, c);
      }
    }(e);
  if (bt.get(e) !== "select")
    return;
  const t = Ze(e);
  if (!Nt(t, ll.get(e))) {
    if (ll.set(e, t), ur.has(e))
      return ur.delete(e);
    e.dispatchEvent(new CustomEvent("selection", { detail: Ze(e) }));
  }
});
var il = /^([0-9]{4})-([0-1][0-9])(?:-([0-3][0-9]))?(?:[T ]?([0-2][0-9])(?::([0-5][0-9]))?(?::([0-5][0-9]))?)?(?:\.[0-9]+)?(Z|(?:\+|\-)[0-9]{4})?$/, La = "1999-03-04T02:05:01.000Z", _n = /* @__PURE__ */ new Map(), Ia = [["YYYY", { year: "numeric" }], ["YY", { year: "2-digit" }], ["MMMM", { month: "long" }], ["MMM", { month: "short" }], ["MM", { month: "2-digit" }], ["M", { month: "numeric" }], ["DD", { day: "2-digit" }], ["D", { day: "numeric" }], ["dddd", { weekday: "long" }], ["ddd", { weekday: "short" }], ["d", { weekday: "narrow" }], ["mm", { minute: "2-digit" }], ["m", { minute: "numeric" }], ["ss", { second: "2-digit" }], ["s", { second: "numeric" }], ["Z", { timeZoneName: "short" }]], Aa = [["HH", { hour: "2-digit" }], ["H", { hour: "numeric" }]], Ea = [["hh", { hour: "2-digit" }], ["h", { hour: "numeric" }], ["a", { dayPeriod: "narrow" }], ["A", { dayPeriod: "narrow" }]], Fo = { DD: 2, HH: 2, MM: 2, YY: 2, YYYY: 4, hh: 2, mm: 2, ss: 2, Z: 5 }, Xb = ["MMMM", "MMM", "dddd", "ddd"], pe = new Map([...Ia, ...Aa, ...Ea].map((e) => [e[0], e])), ul = /* @__PURE__ */ new Map(), Hu = ["full", "long", "medium", "short"], mt = (e) => String(e).padStart(2, "0"), kn = (e) => String(e).padStart(2, "0");
const pl = typeof window < "u", Qn = /* @__PURE__ */ new WeakSet(), Dn = /* @__PURE__ */ new WeakSet(), dl = /* @__PURE__ */ new WeakSet(), No = /* @__PURE__ */ new WeakMap(), Wu = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakSet(), ea = /* @__PURE__ */ new WeakSet(), Jb = typeof window < "u", cl = /* @__PURE__ */ new WeakMap(), Qb = { schema: ob(nb(sb("$label"), ab(Lt("prefix"), lb(), zb(Zb(Yb(Hb("$part.value"), Wb("$part.value"), jb("$part.value"), Kb("$part.value")))), cb(), fb(Eb(hb(vb("$ui.prev.value"), Lt("prev")), Mb("$decade"), Tb($n()), Ob(al(), $n()), Pb(al(), Vb(), $n()), gb(mb("$ui.next.value"), Lt("next")), Rb(Lt("close"))), Ub(Cb(Lb("$fns.format($year, $yearFormat)")), Ib(Ab("$fns.format($month, $monthFormat)")), bb(yb(xb(wb("$fns.format($day, $weekdayFormat)"))), $b(_b(kb(Db("$fns.format($day, $dateFormat)"))))), Nb(Bb()))), Fb(Lt("clear")), Sb(Lt("calendar")), ib(), Lt("suffix"))), ub("$help"), pb(db("$message.value"))), type: "input", family: "text", props: ["dateFormat", "dayButtonFormat", "format", "monthButtonFormat", "monthFormat", "overlay", "pickerOnly", "showMonths", "showPagination", "weekStart", "weekdayFormat", "yearFormat", "years"], features: [Eu, function(e) {
  var t, r, o, n, a, s, l, i, u, c, f, p, g, b, v, $, h, m, k, y, D, x;
  e.addProps(["_isDisabled", "_isFocused", "activeDate", "calendar", "clearable", "disabled", "decade", "disabledDays", "expanded", "inputText", "localTime", "maxDate", "maxScan", "minDate", "months", "offset", "paginatedPanels", "panel", "pickerOnly", "renderedDate", "sequence", "timezone", "valueFormat", "valueLocale", "showPanelClose"]), e.hook.prop((w, L) => (w.prop === "expanded" && e.props.disabled && (w.value = !1), w.prop === "weekStart" && (w.value = Number(w.value || 0)), w.prop === "showMonths" && (w.value = Number(w.value || 1)), w.prop === "maxScan" && (w.value = Number(w.value || 7)), w.prop === "timezone" && (typeof e._value == "string" || e._value instanceof Date) && (e.props.offset = To(e._value, w.value)), L(w))), e.props._isFocused = !1, e.props._isPlaceholder = !1, (t = (p = e.props).valueFormat) !== null && t !== void 0 || (p.valueFormat = "ISO8601"), (r = (g = e.props).weekdayFormat) !== null && r !== void 0 || (g.weekdayFormat = "d"), (o = (b = e.props).monthFormat) !== null && o !== void 0 || (b.monthFormat = "MMM"), (n = (v = e.props).monthButtonFormat) !== null && n !== void 0 || (v.monthButtonFormat = "MMMM"), (a = ($ = e.props).dayButtonFormat) !== null && a !== void 0 || ($.dayButtonFormat = "D"), (s = (h = e.props).dateFormat) !== null && s !== void 0 || (h.dateFormat = "D"), (l = (m = e.props).yearFormat) !== null && l !== void 0 || (m.yearFormat = "YYYY"), (i = (k = e.props).paginatedPanels) !== null && i !== void 0 || (k.paginatedPanels = ["day", "year"]), (u = (y = e.props).valueLocale) !== null && u !== void 0 || (y.valueLocale = e.props.locale), (c = (D = e.props).format) !== null && c !== void 0 || (D.format = "long"), e.props.panels = Bs(e), e.props.pickerOnly = R(e.props.pickerOnly), "disabled" in e.props && (e.props.disabled = R(e.props.disabled)), "clearable" in e.props && (e.props.clearable = R(e.props.clearable)), (f = (x = e.props).maxScan) !== null && f !== void 0 || (x.maxScan = 7), e.props._isDisabled = typeof e.props.disabledDays == "function" ? e.props.disabledDays.bind(null, e) : Mh.bind(null, e), function(w) {
    const L = w._value;
    let d = /* @__PURE__ */ new Date();
    if (L instanceof Date)
      d = de(L);
    else if (typeof L == "string")
      try {
        d = de(ht(L, w.props.valueFormat, w.props.valueLocale));
      } catch {
        console.warn(`Date (${L}) does not match format (${ka(w.props.valueFormat, w.props.valueLocale)})`), d = void 0;
      }
    else
      L || (d = void 0);
    if (w.props.offset = w.props.timezone ? To(d || /* @__PURE__ */ new Date(), w.props.timezone) : "+0000", w.props.minDate) {
      const I = typeof w.props.minDate == "string" ? ht(w.props.minDate) : w.props.minDate;
      w.props.minDate = At(I, w.props.offset);
    }
    if (w.props.maxDate) {
      const I = typeof w.props.maxDate == "string" ? ht(w.props.maxDate) : w.props.maxDate;
      w.props.maxDate = At(I, w.props.offset);
    }
    d = d && At(d, w.props.offset), d && br(w, d, !1);
    let _ = d || /* @__PURE__ */ new Date();
    _ = w.props.minDate > _ ? w.props.minDate : _, w.props.renderedDate = _, w.props.activeDate = _, w.props.localTime = d && Ie(d, "HH:mm") || "12:00";
  }(e), e.props.calendar = [], e.props.inputText = "", e.props.showMonths = e.props.showMonths || 1, typeof e.props.format == "function" ? (e.props.formatDate = e.props.format, e.props.format = null) : e.props.formatDate = Ie, e.on("created", () => {
    if (me(`${e.props.id}`, Ah.bind(null, e), e.props.__root), e.context) {
      let w;
      e.context.fns.format = (L, d) => Ie(L, d, e.props.locale || "en", !1, Er), e.context.fns.isDisabled = e.props._isDisabled, e.context.fns.isDisabledMonth = (L) => !vr(L, (d) => !e.props._isDisabled(d), "month"), e.context.fns.isDisabledYear = (L) => !vr(L, (d) => !e.props._isDisabled(d), "year"), e.context.fns.isSelected = (L) => {
        var d;
        const _ = (d = e.context) === null || d === void 0 ? void 0 : d.value;
        if (_ != null)
          return Vs(L, At(_ instanceof Date ? _ : ht(_, e.props.valueFormat, e.props.valueLocale), e.props.offset));
      }, e.context.handlers._blur = (L) => {
        var d, _;
        e.props._isFocused = !1, typeof ((d = e.context) === null || d === void 0 ? void 0 : d.handlers.blur) == "function" && ((_ = e.context) === null || _ === void 0 || _.handlers.blur(L));
      }, e.context.handlers.closePanel = () => {
        e.props.expanded = !1;
      }, e.context.handlers._blurOut = (L) => (d) => {
        var _;
        d.preventDefault(), L && L !== e.props.panel || e.props.pickerOnly && d.relatedTarget instanceof Element && (d.relatedTarget === document.getElementById(`${e.props.id}_inner`) || d.relatedTarget.closest(`#${e.props.id}_inner`)) || d.relatedTarget && d.relatedTarget instanceof Element && (d.relatedTarget.closest(`#${e.props.id}_popover`) || !(!((_ = e.props.__root) === null || _ === void 0) && _.contains(d.relatedTarget)) || d.relatedTarget.id === `${e.props.id}_popover`) || (e.props.expanded = !1);
      }, e.context.handlers.overlayClick = () => {
        const L = No.get(e);
        L && (L.focus(), e.props._isPlaceholder = !1);
      }, e.context.handlers.focus = () => {
        e.props.pickerOnly || (e.props._isFocused = !0, e.props.pickerOnly && !Dn.has(e) && (dl.add(e), e.props.expanded = !0, setTimeout(() => dl.delete(e), 200)));
      }, e.context.handlers.clear = () => {
        var L, d;
        br(e, void 0, !0), Ct(e, void 0);
        const _ = (d = (L = e.props) === null || L === void 0 ? void 0 : L.__root) === null || d === void 0 ? void 0 : d.getElementById(`${e.props.id}`);
        _ instanceof HTMLInputElement && (_.focus(), setTimeout(() => {
          _.setSelectionRange(0, 0);
        }, 50));
      }, e.context.handlers.dateInput = (L) => {
        var d;
        if (Sn.has(e))
          return Sn.delete(e);
        if (L.target instanceof HTMLInputElement && !e.props.expanded)
          try {
            let _ = ht({ date: L.target.value, format: e.props.format, locale: e.props.locale, partFilter: Er });
            if (function(I) {
              return lr(I.props.format, I.props.locale).some((O) => O.partName === "weekday");
            }(e) && e.props.activeDate instanceof Date && e.props.activeDate.getTime() === _.getTime() && !Tt.get(L.target) && Ie(_, e.props.format, e.props.locale, !1, Er) !== L.target.value) {
              const I = Uo("dddd", e.props.locale), O = lr(e.props.format, e.props.locale), N = (d = Iu(L.target.value, O).find((W) => W.token === "dddd")) === null || d === void 0 ? void 0 : d.value, z = Ie(_, "dddd", e.props.locale);
              if (N && I.includes(N) && z !== N) {
                let W = I.indexOf(N) - I.indexOf(z);
                W = W < -1 ? 7 + W : W, _ = er(_, W), Qn.add(e);
              }
            }
            br(e, _);
          } catch {
            br(e, void 0);
          }
      }, e.context.handlers.open = () => {
        e.props.expanded = !0;
      }, e.context.handlers.next = () => {
        switch (e.props.panel) {
          case "year":
            return void (e.props.renderedDate = Yt(e.props.renderedDate, 10));
          case "day":
            return void (e.props.renderedDate = vt(e.props.renderedDate, 1));
        }
      }, e.context.handlers.prev = () => {
        switch (e.props.panel) {
          case "year":
            return void (e.props.renderedDate = Yt(e.props.renderedDate, -10));
          case "day":
            return void (e.props.renderedDate = vt(e.props.renderedDate, -1));
        }
      }, e.context.handlers.setDate = (L) => () => {
        var d;
        e.props.panel !== "month" && e.props.panel !== "year" || !e.props.activeDate || (L = e.props.activeDate), !((d = e.context) === null || d === void 0) && d.fns.isDisabled(L) || e.emit("dateSelected", L);
      }, e.context.handlers.localTime = (L) => {
        const d = L.target;
        if (!d.value)
          return;
        const [_, I] = d.value.split(":");
        e.props.localTime = d.value, e.props.activeDate.setHours(_, I), Ct(e, e.props.activeDate);
      }, e.context.handlers.keyDown = (L) => {
        switch (e.props.panel) {
          case "day":
            return e.emit("calendarKeydown", L);
          case "year":
            return e.emit("yearKeydown", L);
          case "month":
            return e.emit("monthKeydown", L);
          case "time":
            return e.emit("timeKeydown", L);
          default:
            return;
        }
      }, e.context.handlers.inputKeydown = (L) => {
        e.emit("keydown", L);
      }, e.context.handlers.openKeydown = (L) => {
        L.key !== "Enter" && L.key !== "Space" || (e.props.expanded = !0);
      }, e.context.handlers.mouseEnter = (L) => (d) => {
        clearTimeout(w), d.target instanceof HTMLElement && d.target.getAttribute("tabindex") === "-1" && d.target.getAttribute("data-is-extra") !== "true" && (e.props.panel === "month" || e.props.panel === "year" ? e.props.activeDate = vr(L, (_) => !e.props._isDisabled(_), e.props.panel) : e.props.activeDate = L);
      }, e.context.handlers.mouseLeave = () => {
        clearTimeout(w), w = setTimeout(() => {
        }, 100);
      }, e.context.handlers.jumpTo = (L) => () => {
        e.props.panels.unshift(e.props.panel), e.props.panel = L;
      }, e.context.fns.sameDay = (L) => {
        var d;
        return ((d = e.context) === null || d === void 0 ? void 0 : d.activeDate) instanceof Date && Vs(L, e.context.activeDate);
      }, e.context.fns.sameMonth = (L) => {
        var d;
        return ((d = e.context) === null || d === void 0 ? void 0 : d.activeDate) instanceof Date && L.getMonth() === e.context.activeDate.getMonth();
      }, e.context.fns.sameYear = (L) => {
        var d, _;
        return ((d = e.context) === null || d === void 0 ? void 0 : d.activeDate) instanceof Date && L.getFullYear() === ((_ = e.context) === null || _ === void 0 ? void 0 : _.activeDate.getFullYear());
      }, e.context.fns.notInMonth = (L, d) => {
        const _ = function(I) {
          const O = de(I);
          return O.setHours(0, 0, 0), O;
        }(d).getTime();
        return _ < Ps(L).getTime() || _ > Mo(L).getTime() || void 0;
      };
    }
  });
  const C = Ih.bind(null, e);
  e.on("prop:panel", ({ payload: w }) => {
    e.props.showPagination = e.props.paginatedPanels.includes(w);
  }), e.on("dateSelected", ({ payload: w }) => {
    var L, d;
    w && e.props._isDisabled(w) || (Array.isArray(e.props.panels) && e.props.panels.length ? e.props.panel = e.props.panels.shift() : (e.props.expanded = !1, (d = (L = e.props.__root) === null || L === void 0 ? void 0 : L.getElementById(`${e.props.id}`)) === null || d === void 0 || d.focus()), br(e, w));
  }), e.on("input", ({ payload: w }) => {
    if (w === void 0 && !e.props._isFocused)
      return void Ct(e, void 0);
    const L = /* @__PURE__ */ new Date(), d = w ? Ct(e, At(typeof w == "string" ? ht(w, e.props.valueFormat, e.props.valueLocale) : w, e.props.offset)) : L;
    e.props.activeDate = !w && e.props.activeDate ? e.props.activeDate : d, e.props.renderedDate = !w && e.props.renderedDate ? e.props.renderedDate : d, e.props.localTime = Ie(d, "HH:mm"), function(_) {
      const I = Wu.get(_);
      if (_._value && I) {
        const O = qr(_.props.activeDate);
        if (I.length > O)
          I.splice(O, I.length - O);
        else if (I.length < O)
          for (let N = I.length + 1; N <= O; N++)
            I.push(String(N));
      }
    }(e);
  }), e.on("prop:renderedDate", Ns.bind(null, e)), e.on("prop:expanded", ({ payload: w }) => {
    if (w) {
      if (ea.delete(e), e.props.panels = Bs(e), e.props.panel = e.props.panels.shift(), window.innerWidth <= 430 && !window.matchMedia("(hover: hover)").matches ? e.props.showPanelClose = !0 : e.props.showPanelClose = !1, e.props.panel === "day") {
        const L = e.props.activeDate;
        e.props.activeDate = vr(e.props.activeDate, (d) => !e.props._isDisabled(d), "month") || L;
      }
      Ns(e), me(`${e.props.id}_popover`, (L) => {
        const d = L.querySelector('[tabindex="0"]');
        d && setTimeout(() => {
          d.focus(), function(_, I) {
            const O = new MutationObserver((z) => {
              for (const W of z)
                W.type === "attributes" && W.target instanceof HTMLElement && W.target.getAttribute("tabindex") === "0" ? W.target.focus() : W.addedNodes.length && W.addedNodes.forEach((G) => {
                  var $e;
                  if (G instanceof HTMLElement && G.getAttribute("tabindex") === "0")
                    G.focus();
                  else if (G instanceof HTMLElement && G.querySelector('[tabindex="0"]')) {
                    const ge = G.querySelector('[tabindex="0"]');
                    ge instanceof HTMLElement && ge.focus();
                  } else
                    G instanceof HTMLElement && G.querySelector('input[type="time"]') && (($e = G.querySelector('input[type="time"]')) === null || $e === void 0 || $e.focus());
                });
            });
            O.observe(I, { attributes: !0, attributeFilter: ["tabindex"], childList: !0, subtree: !0 });
            const N = _.on("prop:expanded", ({ payload: z }) => {
              z || (_.off(N), O.disconnect());
            });
          }(e, L);
        }, 0);
      }, e.props.__root), pl && setTimeout(() => {
        document.addEventListener("click", C);
      }, 10);
    } else {
      if (e.props.panel === "time")
        e.emit("dateSelected", e.props.activeDate);
      else if (e._value) {
        Sn.add(e);
        const L = typeof e._value == "string" ? ht(e._value, e.props.valueFormat, e.props.valueLocale) : e._value;
        Ct(e, At(L, e.props.offset));
      } else
        Ct(e, void 0);
      pl && (Dn.add(e), document.removeEventListener("click", C), setTimeout(() => Dn.delete(e), 50));
    }
  }), e.on("prop:activeDate", ({ payload: w }) => {
    if (Array.isArray(e.props.calendar) && e.props.calendar.length) {
      if (e.props.panel === "day") {
        const L = e.props.calendar, d = Ps(e.props.renderedDate), _ = Mo(vt(e.props.renderedDate, L.length - 1));
        w.getTime() < d.getTime() ? e.props.renderedDate = vt(e.props.renderedDate, -1) : w.getTime() > _.getTime() && (e.props.renderedDate = vt(e.props.renderedDate));
      } else if (e.props.panel === "year") {
        const L = e.props.years, d = L[0].getFullYear(), _ = L[L.length - 1].getFullYear(), I = e.props.activeDate.getFullYear();
        I > _ ? e.props.renderedDate = Yt(e.props.renderedDate, 10) : I < d && (e.props.renderedDate = Yt(e.props.renderedDate, -10));
      }
    }
    e.props.expanded && Ct(e, e.props.activeDate);
  }), e.on("keydown", ({ payload: w }) => {
    switch (w.key) {
      case "ArrowDown":
      case "ArrowUp":
      case " ":
        w.preventDefault(), e.props.pickerOnly && (e.props.expanded = !0);
        break;
      case "Enter":
      case "Return":
        e.props.expanded || (e.props.expanded = !0);
        break;
      case "Escape":
        e.props.expanded = !1;
    }
  }), e.on("calendarKeydown", ({ payload: w }) => {
    w.preventDefault();
    let L = null, d = 0;
    switch (w.key) {
      case "ArrowRight":
        d = 1;
        break;
      case "ArrowLeft":
        d = -1;
        break;
      case "ArrowDown":
        d = 7;
        break;
      case "ArrowUp":
        d = -7;
        break;
      case "Return":
      case "Enter":
        e.emit("dateSelected", e.props.activeDate);
        break;
      case "Tab":
        w.shiftKey || ln(e, w);
        break;
      case "Escape":
        e.props.expanded = !1;
    }
    if (d && (w.preventDefault(), L = er(e.props.activeDate, d)), L && !e.props._isDisabled(L))
      e.props.activeDate = L;
    else if (L && e.props._isDisabled(L)) {
      const _ = d > 0 ? 1 : -1;
      $t(Number(e.props.maxScan), (I) => _ * I).some((I) => {
        const O = er(L, I);
        return !e.props._isDisabled(O) && (e.props.activeDate = O, !0);
      });
    }
  }), e.on("yearKeydown", ({ payload: w }) => {
    let L = 0;
    switch (w.key) {
      case "ArrowDown":
        L = 5;
        break;
      case "ArrowRight":
        L = 1;
        break;
      case "ArrowUp":
        L = -5;
        break;
      case "ArrowLeft":
        L = -1;
        break;
      case "Tab":
        w.shiftKey || ln(e, w);
        break;
      case "Return":
      case "Enter":
        e.emit("dateSelected", e.props.activeDate);
        break;
      case "Escape":
        e.props.expanded = !1;
    }
    const d = e.props.activeDate.getFullYear() + L - e.props.renderedDate.getFullYear();
    e.props.activeDate = Yt(e.props.renderedDate, d);
  }), e.on("monthKeydown", ({ payload: w }) => {
    let L = 0;
    switch (w.key) {
      case "ArrowDown":
        L = 3;
        break;
      case "ArrowRight":
        L = 1;
        break;
      case "ArrowLeft":
        L = -1;
        break;
      case "ArrowUp":
        L = -3;
        break;
      case "Tab":
        w.shiftKey || ln(e, w);
        break;
      case "Return":
      case "Enter":
        e.emit("dateSelected", e.props.activeDate);
        break;
      case "Escape":
        e.props.expanded = !1;
    }
    L && w.preventDefault();
    let d = (e.props.activeDate.getMonth() + L) % 12;
    d = d < 0 ? 12 + d : d;
    const _ = d - e.props.renderedDate.getMonth();
    let I = vt(e.props.renderedDate, _);
    if (e.props._isDisabled(I)) {
      const O = vr(I, (N) => !e.props._isDisabled(N), "month");
      O && (I = O);
    }
    e.props.activeDate = I;
  }), e.on("timeKeydown", ({ payload: w }) => {
    switch (w.key) {
      case "Return":
      case "Enter":
        w.preventDefault(), e.emit("dateSelected", e.props.activeDate);
    }
  }), e.on("prop:_isFocused", () => {
    No.get(e) && Au(e);
  }), e.on("commit", () => {
    if (e.props.activeDate && e.props._isDisabled(e.props.activeDate)) {
      const w = ye({ blocking: !0, key: "rule_invalidDate", meta: { messageKey: "invalidDate", removeImmediately: !1, localize: !0, i18nArgs: [{ node: e, name: Th(e), args: [] }] }, type: "validation", value: "The selected date is invalid." });
      e.store.set(w);
    } else
      e.store.remove("rule_invalidDate");
  });
}, Yr, re("next"), re("prev"), re("changeDate"), re("chooseDate"), X("close", "close"), X("next", "right"), X("clear", "close"), X("prev", "left"), X("calendar", "date")] }, qe = Ae("tl"), { outer: e$, wrapper: t$, inner: r$, icon: _r, label: o$, prefix: n$, suffix: a$, help: s$, messages: l$, message: i$ } = Ee(qe), u$ = qe("input", () => ({ $el: "input", bind: "$attrs", attrs: { id: "$id", type: "text", onClick: "$handlers.click", onBlur: "$handlers.blur", onKeydown: "$handlers.keydown", onInput: "$handlers.input", onFocus: "$handlers.focus", value: "$inputText", name: "$node.name", tabindex: "0", placeholder: "$state.loading && $inputStd.length === 0 && $ui.isLoading.value || $placeholder || undefined", role: "combobox", autocomplete: "off", autocapitalize: "none", readonly: "$attrs.readonly || $isLoadingOption || undefined || $multiple && $max && $value && $value.length >= $max", disabled: "$disabled || $disabledInternally || undefined", "aria-autocomplete": "list", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined', "aria-describedBy": "$describedBy", "aria-activedescendant": "$expanded && $activeDescendant || undefined" } })), p$ = qe("listboxButton", () => ({ $el: "button", attrs: { style: "$visibilityStyles", id: '$id + "_listbox_button"', type: "button", onClick: "$handlers.toggleListbox", tabindex: "-1", "aria-label": "$expanded && $ui.close.value || $ui.open.value", disabled: "$disabled || undefined", "aria-haspopup": "true", "aria-expanded": "$expanded", "aria-controls": '$expanded && $id + "_listbox" || undefined' } })), d$ = qe("tagWrapper", () => ({ $el: "span", for: ["option", "index", "$selections"], attrs: { id: '$id + "_tag-wrapper_" + $index', key: "$option.value", "data-value": "$option.value", tabindex: "-1", onClick: "$handlers.tagClick && $handlers.tagClick($option)", onFocus: "$handlers.tagFocus && $handlers.tagFocus($option)", onBlur: "$handlers.tagBlur && $handlers.tagBlur($option)", onKeydown: "$handlers.searchInputTagKeydown && $handlers.searchInputTagKeydown($option)", "data-is-tag": "true", "data-active-selection": "$fns.isActiveSelection($activeSelectionValue, $option)" } })), c$ = qe("tag", () => ({ $el: "div", attrs: { id: '$id + "_tag_" + $index', role: "button" } })), f$ = qe("removeSelection", () => ({ $el: "button", if: "$selections.length > 0", attrs: { id: '$id + "_remove_selection_" + $index', tabindex: "-1", "aria-label": "$ui.remove.value", type: "button", onClick: "$handlers.removeSelection && $handlers.removeSelection($option)", onTouchstart: "$handlers.removeSelection && $handlers.removeSelection($option)", "aria-controls": "$id" } })), g$ = qe("tagLabel", () => ({ $el: "span" })), m$ = qe("tags", () => ({ $el: "div", attrs: { id: '$id + "_selections"', "aria-live": "polite" } })), h$ = qe("tagLoading", "span"), v$ = ha(qe), b$ = { schema: e$(t$(o$("$label"), r$(_r("prefix"), n$(), m$(d$(c$(B("$state.loading && $fns.hasOptionLoaderValue($option) || $option.label === undefined", h$("$ui.isLoading.value"), g$("$option.label")), f$(_r("close")))), u$()), B("$state.loading", _r("loader")), p$(_r("select")), v$(), a$(), _r("suffix"))), s$("$help"), l$(i$("$message.value"))), type: "input", family: "dropdown", props: [], features: [We, ya.bind(null, function(e) {
  e.props.multiple = !0, e.props.openOnClick = R(e.props.openOnClick), e.props.closeOnSelect === void 0 && (e.props.closeOnSelect = !0), e.props.closeOnSelect ? e.props.resetSearchOnCommit = !1 : e.props.resetSearchOnCommit === void 0 && (e.props.resetSearchOnCommit = e.props.multiple), e.props.allowNewValues = R(e.props.allowNewValues);
}, pu, function(e) {
  cu(e), lu(e), e.on("created", () => {
    function t() {
      return Array.isArray(e.value) ? e.value : [];
    }
    function r(o) {
      e.input(o);
    }
    e.props.disabled && (e.props.draggable = !1), me(`${e.props.id}_selections`, (o) => {
      if (o instanceof HTMLElement) {
        if (!e.context)
          return;
        const n = { draggingClass: e.context.classes.dragging, dropZoneClass: e.context.classes.dropZone, disabled: !e.props.draggable, threshold: { horizontal: 0.25, vertical: 0 }, plugins: [Ko()], root: e.props.__root, touchDraggingClass: e.context.classes.touchDragging, touchDropZoneClass: e.context.classes.touchDropZone, draggable: (a) => a.hasAttribute("data-is-tag"), handleEnd(a) {
          e.props.activeSelectionValue = void 0, Co(a);
        }, handleDragstart(a) {
          e.props.activeSelectionValue = void 0, So(a);
        }, handleTouchstart(a) {
          e.props.activeSelectionValue = void 0, Lo(a);
        } };
        he({ parent: o, getValues: t, setValues: r, config: n }), e.on("prop:disabled", ({ payload: a }) => {
          n.disabled = a, he({ parent: o, getValues: t, setValues: r, config: n });
        }), e.on("prop:draggable", ({ payload: a }) => {
          n.disabled = !a, he({ parent: o, getValues: t, setValues: r, config: n });
        });
      }
    }, e.props.__root);
  });
}), X("select", "select"), X("close", "close"), X("selected", "check"), X("loader", "spinner"), re("isLoading"), re("loadMore"), re("remove"), re("open"), re("close"), Yr] }, Ma = Ae("mk"), { outer: $$, wrapper: y$, inner: x$, label: w$, prefix: _$, suffix: k$, help: D$, messages: S$, message: C$, icon: fl } = Ee(Ma), { overlayPlaceholder: L$, overlayLiteral: I$, overlayChar: A$, overlayEnum: E$, overlay: M$, overlayParts: T$, overlayInner: O$ } = qi(Ma), P$ = Ma("input", () => ({ $el: "input", bind: "$attrs", attrs: { type: "$type", disabled: "$disabled", name: "$node.name", onBlur: "$handlers.blur", onInput: "$handlers.DOMInput", value: "$_maskValue", placeholder: "$placeholder", id: "$id", "aria-describedby": "$describedBy" } })), ta = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), gl = /* @__PURE__ */ new WeakMap(), V$ = { schema: $$(y$(w$("$label"), x$(fl("prefix"), _$(), M$(O$(T$(L$("$part.value"), I$("$part.value"), A$("$part.value"), E$("$part.value")))), P$(), k$(), fl("suffix"))), D$("$help"), S$(C$("$message.value"))), type: "input", props: ["allowIncomplete", "mask", "mode", "tokens", "showMask", "unmaskValue", "prefix", "suffix", "reverse", "overlay"], family: "text", features: [Eu, function(e) {
  e.addProps(["_maskValue", "_overlayParts"]), e.on("created", () => {
    var t, r, o, n, a;
    const s = fu(typeof e._value == "string" ? e._value : "");
    ra.set(e, s), gl.set(e, s), e.props.allowIncomplete = R(e.props.allowIncomplete), e.props.overlay = R(e.props.overlay);
    const l = !(e.props.showMask !== void 0 && !R(e.props.showMask));
    e.props.unmaskValue = R(e.props.unmaskValue), e.hook.prop((u, c) => (u.prop === "unmaskValue" && (u.value = R(u)), c(u)));
    const i = { placeholder: l, pattern: (t = e.props.mask) !== null && t !== void 0 ? t : "", mode: (r = e.props.mode) !== null && r !== void 0 ? r : "shift", partOverrides: (o = e.props.tokens) !== null && o !== void 0 ? o : {}, prefix: (n = e.props.prefix) !== null && n !== void 0 ? n : void 0, suffix: (a = e.props.suffix) !== null && a !== void 0 ? a : void 0, reverse: R(e.props.reverse) };
    ta.set(e, i), e.hook.input((u, c) => {
      const f = function(p, g) {
        const b = ra.get(p), v = typeof g == "object" && "maskValue" in g;
        g = typeof g == "string" ? g : v ? g.maskValue : "";
        const $ = gl.get(p);
        $.value = wa($, g);
        const h = Ds($, ta.get(p)), m = _u($, p.props.allowIncomplete);
        return g === b.value ? p.props.unmaskValue ? m ?? "" : m === null ? "" : typeof g == "string" ? g : "" : g === "" && b.value !== "" && !p.props.allowIncomplete ? g : (v || h === p.props._maskValue || (b.value = h, p.props._maskValue = h, p.props._overlayParts = va(ku($) || [])), m === null ? "" : p.props.unmaskValue ? m : h);
      }(e, u);
      return c(f);
    }), e.props._maskValue = Ds(s, i), e.input(e.props._maskValue, !1), e.context && (e.context.handlers.DOMInput = (u) => {
      e.emit("dom-input-event", u);
    }), me(`${e.props.id}`, Ph.bind(null, e), e.props.__root);
  });
}] }, oe = Ae("tf"), { outer: F$, wrapper: N$, inner: Qx, icon: Qe, prefix: ew, suffix: tw, help: B$, messages: R$, message: H$ } = Ee(oe), W$ = oe("fieldset", () => ({ $el: "fieldset", attrs: { id: '$id + "_fieldset"', role: "presentation", "aria-describedby": { if: "$help", then: '$: "help-" + $id', else: void 0 } } })), j$ = oe("legend", () => ({ if: "$label", $el: "legend" })), K$ = oe("source", () => ({ $el: "div", attrs: { id: '$id + "_source"', class: '$classes.transferlist + " " + $classes.source' } })), z$ = oe("sourceHeader", () => ({ $el: "div", attrs: { id: '$id + "_source_header"', role: "presentation", class: '$classes.transferlistHeader + " " + $classes.sourceHeader' } })), Y$ = oe("sourceHeaderLabel", () => ({ if: "$sourceLabel", $el: "label", attrs: { id: '$id + "_source_header_label"', for: '$id + "_source_search_input"', class: '$classes.transferlistHeaderLabel + " " + $classes.sourceHeaderLabel' }, children: "$sourceLabel || $label" })), Z$ = oe("sourceHeaderItemCount", () => ({ $el: "span", attrs: { id: '$id + "_source_header_item_count"', role: "presentation", "aria-label": '$sourceOptions.length " items"', class: '$classes.transferlistHeaderItemCount + " " + $classes.sourceHeaderItemCount' } })), U$ = oe("targetHeaderLabel", () => ({ if: "$targetLabel", $el: "label", attrs: { id: '$id + "_target_header_label"', for: '$id + "_target_search_input"', class: '$classes.transferlistHeaderLabel + " " + $classes.targetHeaderLabel' }, children: "$targetLabel || $label" })), q$ = oe("targetHeaderItemCount", () => ({ $el: "span", attrs: { id: '$id + "_target_header_item_count"', role: "presentation", "aria-label": '$targetOptions.length + " items"', class: '$classes.transferlistHeaderItemCount + " " + $classes.targetHeaderItemCount' }, children: "$targetOptions.length" })), G$ = oe("sourceControls", () => ({ $el: "div", if: "$searchable", attrs: { id: '$id + "_source_controls"', class: '$classes.transferlistControls + " " + $classes.sourceControls' } })), X$ = oe("sourceSearch", () => ({ if: "$searchable", $el: "div", attrs: { id: '$id + "_source_search"', class: '$classes.transferlistSearch + " " + $classes.sourceSearch' } })), J$ = oe("sourceSearchInput", () => ({ $el: "input", attrs: { id: '$id + "_source_search_input"', type: "text", placeholder: "$placeholder", onInput: "$handlers.onSearch", value: "$inputText", onKeydown: "$handlers.sourceSearchKeydown", disabled: "$disabled", "aria-label": "Search", role: "searchbox", autocomplete: "off", class: '$classes.transferlistSearchInput + " " + $classes.sourceSearchInput', onFocus: "$handlers.sourceSearchFocus", onBlur: "$handlers.sourceSearchBlur" } })), Q$ = oe("sourceSearchClear", () => ({ $el: "button", if: '$inputText !== ""', attrs: { id: '$id + "_source_search_clear"', type: "button", onClick: "$handlers.clearSearch", "aria-label": "Clear search", class: '$classes.transferlistSearchClear + " " + $classes.sourceSearchClear' } })), ey = oe("sourceListItems", () => ({ $el: "ul", attrs: { id: '$id + "_source_list_items"', "aria-activedescendant": "$activeDescendant", onMouseenter: "$handlers.onMouseenter(true)", onMouseout: "$handlers.onMouseleave(true)", role: "listbox", "aria-multiselectable": "true", "aria-roledescription": "List of options to choose from.", class: '$classes.transferlistListItems + " " + $classes.sourceListItems', onKeydown: "$handlers.sourceListKeydown", tabindex: "$searchable || $sourceOptions.length === 0 && -1 || 0", onFocus: "$handlers.sourceListFocused", onBlur: "$handlers.sourceListBlurred" } })), ty = oe("sourceListItem", () => ({ for: ["option", "index", "$sourceOptions"], $el: "li", attrs: { id: '$id + "_source_list_item_" + $index', "data-value": "$option.value", "aria-selected": "$transferOnSelect === false && $fns.isSelected($option, $selectedSourceItems)", "data-is-active": "$fns.isActive($option, $activeValue)", "data-disabled": "$option.attrs.disabled", role: "option", onClick: "$handlers.listitemClick($option, true)", onTouchstart: "$handlers.listitemTouchstart($option, true)", onTouchmove: "$handlers.listitemTouchmove($option, true)", onTouchend: "$handlers.listitemTouchend($option, true)", key: "$option.value", class: '$classes.transferlistListItem + " " + $classes.sourceListItem' } })), ry = oe("sourceOption", () => ({ $el: "div", attrs: { "data-checked": "$fns.isSelected($option, $selectedSourceItems)", class: '$classes.transferlistOption + " " + $classes.sourceOption' } })), oy = oe("sourceLoadMore", () => ({ $el: "li", if: "$state.loading || $state.hasNextPage", attrs: { id: '$id + "_source_load_more"', key: "loadMore", onClick: "$handlers.listitemClick($loadMoreOption)", "aria-selected": "false", "data-is-active": "$fns.isActive($loadMoreOption)", tabindex: "-1" } })), ny = oe("loadMoreInner", "span"), ay = oe("target", () => ({ $el: "div", attrs: { id: '$id + "_target"', class: '$classes.transferlist + " " + $classes.target' } })), sy = oe("targetHeader", () => ({ $el: "div", attrs: { id: '$id + "_target_header"', role: "presentation", class: '$classes.transferlistHeader + " " + $classes.targetHeader' } })), ly = oe("targetListItems", () => ({ $el: "ul", attrs: { id: "$id", "aria-activedescendant": "$activeDescendant", onMouseenter: "$handlers.onMouseenter(false)", onMouseout: "$handlers.onMouseleave(false)", class: '$classes.transferlistListItems + " " + $classes.targetListItems', tabindex: "$targetOptions.length === 0 && -1 || 0", onKeydown: "$handlers.targetListKeydown", onFocus: "$handlers.targetListFocused", onBlur: "$handlers.targetListBlurred" } })), iy = oe("targetListItem", () => ({ for: ["option", "index", "$targetOptions"], $el: "li", attrs: { id: '$id + "_target_list_item_" + $index', "data-disabled": "$option.attrs.disabled", "data-value": "$option.value", "aria-selected": "$transferOnSelect === false && $fns.isSelected($option, $selectedTargetItems)", "data-is-active": "$fns.isActive($option, $activeValue)", role: "option", onClick: "$handlers.listitemClick($option, false)", onTouchstart: "$handlers.listitemTouchstart($option, false)", onTouchmove: "$handlers.listitemTouchmove($option, false)", onTouchend: "$handlers.listitemTouchend($option, false)", key: "$option.value", class: '$classes.transferlistListItem + " " + $classes.targetListItem' } })), uy = oe("targetOption", () => ({ $el: "div", attrs: { id: '$id + "_target_list_item_" + $index + "_option"', "data-checked": "$fns.isSelected($option, $selectedTargetItems)", class: '$classes.transferlistOption + " " + $classes.targetOption' } })), py = oe("transferControls", () => ({ $el: "div", attrs: { id: '$id + "_transfer_controls"' } })), dy = oe("transferButtonForward", () => ({ if: "$transferOnSelect !== true", $el: "button", attrs: { id: '$id + "_transfer_button_forward"', type: "button", disabled: "$selectedSourceItems.length === 0 || $disabled || ($max && $value && $value.length >= $max)", onClick: "$handlers.transferForward", "aria-label": "$ui.addSelectedValues.value", title: "$ui.addSelectedValues.value", class: '$classes.transferlistButton + " " + $classes.transferButtonForward' } })), cy = oe("transferButtonForwardAll", () => ({ $el: "button", attrs: { id: '$id + "_transfer_button_forward_all"', type: "button", disabled: "$sourceOptions.length === 0 || $disabled || ($max && $value && $value.length >= $max)", onClick: "$handlers.transferForwardAll", "aria-label": "$ui.addAllValues.value", title: "$ui.addAllValues.value", onFocus: "$handlers.transferForwardAllFocused", class: '$classes.transferlistButton + " " + $classes.transferButtonForwardAll' } })), fy = oe("transferButtonBackward", () => ({ if: "$transferOnSelect !== true", $el: "button", attrs: { id: '$id + "_transfer_button_backward"', onClick: "$handlers.transferBackward", type: "button", disabled: "$selectedTargetItems.length === 0 || $targetOptions.length === 0 || $disabled", "aria-label": "$ui.removeSelectedValues.value", title: "$ui.removeSelectedValues.value", class: '$classes.transferlistButton + " " + $classes.transferButtonBackward' } })), gy = oe("transferButtonBackwardAll", () => ({ $el: "button", attrs: { id: '$id + "_transfer_button_backward_all"', onClick: "$handlers.transferBackwardAll", type: "button", disabled: "$targetOptions.length === 0 || $disabled", "aria-label": "$ui.removeAllValues.value", title: "$ui.removeAllValues.value", class: '$classes.transferlistButton + " " + $classes.transferButtonBackwardAll' } })), so = oe("controlLabel", "span"), my = oe("sourceEmptyMessage", () => ({ $el: "li", if: "$showSourceEmptyMessage && $sourceEmptyMessage && $state.loading !== true", attrs: { id: '$id + "_source_empty_message"', key: "$sourceEmptyMessage", role: "presentation" } })), hy = oe("targetEmptyMessage", () => ({ $el: "li", if: "$showTargetEmptyMessage && $targetEmptyMessage", attrs: { id: '$id + "_empty_message"', key: "$emptyMessage", role: "presentation" } })), ml = oe("emptyMessageInner", "span"), pr = Symbol(), dr = /* @__PURE__ */ new WeakSet(), Hr = /* @__PURE__ */ new WeakSet(), vy = { schema: F$(W$(j$("$label"), B$("$help"), N$(K$(z$(Y$(), Z$(B("$optionsLoadingCounter > 0", Qe("loader"), "$fns.getSourceItemCount($selectedSourceItems)"))), G$(X$(J$(), Q$(Qe("close")))), ey(my(ml("$sourceEmptyMessage")), ty(B("$transferOnSelect !== true && $fns.isSelected($option, $selectedSourceItems)", Qe("selected")), ry("$option.label")), oy(B("$state.loading && $optionLoadingCounter === 0 || $state.hasNextPage", ny(B("$state.loading", Qe("loader")), "$state.loading && $ui.isLoading.value || $ui.loadMore.value"))))), py(cy(so("$ui.addAllValues.value"), Qe("fastForward")), dy(so("$ui.addSelectedValues.value"), Qe("moveRight")), fy(so("$ui.removeSelectedValues.value"), Qe("moveLeft")), gy(so("$ui.removeAllValues.value"), Qe("rewind"))), ay(sy(U$(), q$("$fns.getTargetItemCount($selectedTargetItems)")), ly(hy(B("$state.loading !== true", ml("$targetEmptyMessage"))), iy(B("$transferOnSelect !== true && $fns.isSelected($option, $selectedTargetItems)", Qe("selected")), uy(B("$fns.optionLoading($option, $optionLoaderValues)", "$ui.isLoading.value", "$option.label")))))), R$(H$("$message.value")))), type: "input", props: [], features: [X("moveRight", "right"), X("moveLeft", "left"), X("fastForward", "fastForward"), X("rewind", "rewind"), X("close", "close"), X("loader", "spinner"), X("selected", "check"), re("isLoading"), re("loadMore"), re("addAllValues"), re("addSelectedValues"), re("removeSelectedValues"), re("removeAllValues"), We, function(e) {
  (function(t) {
    t.addProps(["search", "options", "selectedItems", "activeValue", "activeIndex", "activeDescendant", "targetOptions", "sourceOptions", "optionLoader", "isLoadingOptions", "filterOptions", "inputText", "hasNextPage", "page", "targetLoading", "searchable", "sourceLabel", "targetLabel", "transferOnSelect", "disabled", "placeholder", "filter", "showSourceEmptyMessage", "showTargetEmptyMessage", "sourceEmptyMessage", "targetEmptyMessage", "clearOnSelect", "max", "maxReached", "debounce", "sourceListActive", "optionLoaderValues", "optionLoadingCounter", "optionsLoadingCounter", "memoOptions", "optionsLoaded", "selectedSourceItems", "selectedTargetItems", "draggable", "loadMore", "loadMoreOption"]), t.props.loadMoreOption = { label: "Load more", value: pr }, t.props.draggable === void 0 ? t.props.draggable = !0 : t.props.draggable === "false" && (t.props.draggable = !1), t.props.optionsLoaderValues = [], t.props.selectedSourceItems = [], t.props.selectedTargetItems = [], t.props.optionsLoaded = void 0, t.props.memoOptions = [], t.props.multiple = !0, t.props.debounce = t.props.debounce ? parseInt(t.props.debounce) : 200, t.props.optionLoaderValues = [], t.props.optionsLoadingCounter = 0, t.props.optionLoadingCounter = 0, t.props.page = 1, t.props.hasNextPage = Xi.bind(null, t), t.props.options ? t.props.options = [...t.props.options] : t.props.options = [], t.props.sourceOptions = [], t.props.targetOptions = [], "disabled" in t.props && (t.props.disabled = R(t.props.disabled)), t.props.searchable = R(t.props.searchable), t.props.searchable && (t.props.inputText = ""), t.props.clearOnSelect = R(t.props.clearOnSelect), t.props.transferOnSelect === void 0 ? t.props.transferOnSelect = !0 : t.props.transferOnSelect === "false" && (t.props.transferOnSelect = !1), t.props.targetOptions.length && (t.props.targetOptionValues = t.props.targetOptions.map((r) => P(r))), t.props.initialOptions = [...t.props.options], t.props.max && (t.props.max = parseInt(t.props.max)), t.props.sourceListOrigin = void 0, typeof t.props.filter != "function" && (t.props.filter = (r, o) => r.label.toLowerCase().includes(o.toLowerCase()));
  })(e), function(t) {
    t.on("commit", async ({ payload: r }) => {
      t.props.activeValue = void 0, t.props.max && (t.props.maxReached = r.length >= t.props.max), t.props.clearOnSelect && t.props.inputText && (t.props.reFilter = !0, t.props.inputText = ""), t.props.memoOptions = [.../* @__PURE__ */ new Set([...t.props.targetOptions, ...t.props.memoOptions])], t.props.searchable && t.props.reFilter && !t.props.initialLoad ? (He(t, t.props.inputText), t.props.reFilter = !1) : t.props.initialLoad || (t.isCreated || (t.props.skipSetActiveValue = !0), ro(t)), typeof t.props.optionLoader == "function" ? Vh(t) : t.props.initialLoad || (t.props.memoOptions = [.../* @__PURE__ */ new Set([...t.props.targetOptions, ...t.props.memoOptions])]);
    });
  }(e), Nh(e), function(t) {
    t.on("prop:options", () => {
      t.props.appendingOptions && (t.props.skipSetActiveValue = !0, t.props.appendingOptions = !1), ro(t);
    }), t.on("prop:memoOptions", () => {
      t.props.skipSetActiveValue = !0, ro(t);
    }), t.on("prop:sourceOptions", () => {
      t.props.sourceOptions.length === 0 ? t.props.showSourceEmptyMessage = !0 : t.props.showSourceEmptyMessage = !1, dr.delete(t);
    }), t.on("prop:targetOptions", () => {
      t.props.targetOptions.length === 0 ? t.props.showTargetEmptyMessage = !0 : t.props.showTargetEmptyMessage = !1;
    }), t.on("prop:activeValue", ({ payload: r }) => {
      if (t.props.isDragging)
        return void (t.props.activeDescendant = void 0);
      if (r === pr)
        return void (t.props.activeDescendant = `${t.props.id}_load_more`);
      const o = (t.props.sourceListOrigin ? t.props.sourceOptions : t.props.targetOptions).findIndex((n) => j(P(n), r));
      o >= 0 && t.props.sourceListOrigin ? t.props.activeDescendant = `${t.props.id}_source_list_item_${o}` : t.props.activeDescendant = o >= 0 ? `${t.props.id}_target_list_item_${o}` : void 0;
    }), t.on("prop:mouseOnSource", ({ payload: r }) => {
      var o;
      if (r && t.props.disabled !== !0 && !t.props.isDragging) {
        const n = (o = t.props.__root) === null || o === void 0 ? void 0 : o.getElementById(t.props.id + "_source_list_items");
        if (!n)
          return;
        t.props.mouseOnTarget = !1, t.props.sourceListOrigin = !0, dr.delete(t), zn(t, n);
      }
    }), t.on("prop:mouseOnTarget", ({ payload: r }) => {
      var o;
      if (r && t.props.disabled !== !0 && !t.props.isDragging) {
        const n = (o = t.props.__root) === null || o === void 0 ? void 0 : o.getElementById(`${t.props.id}`);
        if (!n)
          return;
        t.props.mouseOnSource = !1, t.props.sourceListOrigin = !1, Hr.delete(t), zn(t, n);
      }
    }), t.on("prop:optionsLoadingCounter", ({ payload: r }) => {
      r === 0 && t.props.optionLoadingCounter === 0 && t.store.set(Br);
    }), t.on("prop:optionLoadingCounter", ({ payload: r }) => {
      r === 0 && t.props.optionsLoadingCounter === 0 && (t.store.set(Br), t.props.skipSetActiveValue = !0, ro(t));
    });
  }(e);
}] }, fe = Ae("sl"), { outer: by, wrapper: $y, inner: rw, icon: hl, label: yy, prefix: xy, suffix: wy, help: _y, messages: ky, message: Dy } = Ee(fe), Sy = fe("chart", () => ({ $el: "div", if: "$chart" })), Cy = fe("chartBar", () => ({ $el: "div", for: ["bar", "index", "$chart"], attrs: { "data-active": { if: "$isMulti", then: { if: "$_value.0 < $_value.1", then: "$bar.at >= $_value.0 && $bar.at <= $_value.1", else: "$bar.at >= $_value.1 && $bar.at <= $_value.0" }, else: "$bar.at <= $_value" }, style: { left: '$bar.at / ($max - $min) * 100 + "%"', width: '$: "calc(" + (100 / $chart.length) + "% - 2px)"', height: { if: "$largestBar", then: '$bar.value / $largestBar * 100 + "%"' } } } })), Ly = fe("sliderInner", () => ({ $el: "div", attrs: { "data-has-mark-labels": "$markLabels && $marks.length > 0" } })), Iy = fe("track", () => ({ $el: "div", attrs: { id: "$: 'track-' + $id", onClick: "$handlers.clickTrack" } })), Ay = fe("trackWrapper", () => ({ $el: "div" })), Ey = fe("trackInner", () => ({ $el: "div" })), My = fe("fill", () => ({ $el: "div", attrs: { style: "$fillStyles" } })), Ty = fe("linkedValues", () => ({ $el: "div" })), vl = fe("maxValue", () => ({ $formkit: "number", bind: "$computedMaxInputAttrs", ignore: !0, value: { if: "$isMulti", then: "$_value.1", else: "$_value" }, tabindex: { if: "$disabled", then: -1 }, onNode: "$handlers.maxNode", onBlur: "$handlers.inputBlur" })), Oy = fe("minValue", () => ({ $formkit: "number", if: "$isMulti", bind: "$computedMinInputAttrs", ignore: !0, value: { if: "$isMulti", then: "$_value.0", else: "$_value" }, tabindex: { if: "$disabled", then: -1 }, onNode: "$handlers.minNode", onBlur: "$handlers.inputBlur" })), Py = fe("marks", () => ({ $el: "div", if: "$marks" })), Vy = fe("mark", () => ({ $el: "span", for: ["step", "index", "$marks"], attrs: { "data-active": { if: "$isMulti", then: { if: "$_value.0 < $_value.1", then: "$step.at >= $_value.0 && $step.at <= $_value.1", else: "$step.at >= $_value.1 && $step.at <= $_value.0" }, else: "$step.at <= $_value" }, class: { if: "$step.class", then: '$: $classes.mark + " " + $step.class', else: "$classes.mark" }, style: { left: '$: $fns.calculateMarkPosition($step.at) + "%"' } } })), Fy = fe("markLabel", () => ({ $el: "span", if: "$markLabels", children: { if: "$step.label !== undefined", then: "$step.label", else: "" }, attrs: { class: '$: $classes.markLabel + " " + $step.labelClass' } })), Ny = fe("handles", () => ({ $el: "ul" })), By = fe("handleMax", () => ({ $el: "li", attrs: { "data-active": "$dragging", "data-is-target": '$lastHandleInteraction === "max"', "data-handle": "max", "data-show-tooltip": "$tooltip", class: "$: 'formkit-handle ' + $classes.handle + ' ' + $classes.handleMax", onFocus: "$handlers.focus", onClick: "$handlers.clickHandle", onMousedown: "$handlers.startDrag", onTouchstart: "$handlers.startDrag", style: "$maxHandleStyles", tabindex: { if: "$disabled", then: -1, else: 0 }, onBlur: "$handlers.blur", onKeydown: "$handlers.keydown" } })), Ry = fe("handleMin", () => ({ $el: "li", if: "$isMulti", attrs: { "data-active": "$dragging", "data-is-target": '$lastHandleInteraction === "min"', "data-handle": "min", "data-show-tooltip": "$tooltip", class: "$: $classes.handle + ' ' + $classes.handleMin", onFocus: "$handlers.focus", onClick: "$handlers.clickHandle", onMousedown: "$handlers.startDrag", onTouchstart: "$handlers.startDrag", style: "$minHandleStyles", tabindex: { if: "$disabled", then: -1, else: 0 }, onBlur: "$handlers.blur", onKeydown: "$handlers.keydown" } })), Hy = fe("handleMinInner", () => ({ $el: "div", attrs: { class: '$: $classes.handleInner + " " + $classes.handleMinInner' } })), Wy = fe("handleMaxInner", () => ({ $el: "div", attrs: { class: '$: $classes.handleInner + " " + $classes.handleMaxInner' } })), jy = fe("tooltipMax", () => ({ $el: "div", if: '$tooltip === true || $tooltip === "auto"', children: { if: "$isMulti", then: { if: "$_value.0 < $_value.1", then: '$tooltipFormat($_value.1, "max")', else: '$tooltipFormat($_value.0, "max")' }, else: '$tooltipFormat($_value, "max")' }, attrs: { class: "$classes.tooltip + ' ' + $classes.tooltipMax" } })), Ky = fe("tooltipMin", () => ({ $el: "div", if: '$isMulti && ($tooltip === true || $tooltip === "auto")', children: { if: "$_value.0 < $_value.1", then: '$tooltipFormat($_value.0, "min")', else: '$tooltipFormat($_value.1, "min")' }, attrs: { class: "$classes.tooltip + ' ' + $classes.tooltipMin" } })), zy = { schema: by($y(yy("$label"), _y("$help"), Ly(hl("prefix"), xy(), Iy(Sy(Cy()), Ay(Ey(My(), Py(Vy(Fy())), Ny(Ry(Ky(), Hy()), By(jy(), Wy()))))), wy(), hl("suffix"), B("$showInput && $isMulti === false", vl())), B("$showInput && $isMulti", Ty(Oy(), vl())), ky(Dy("$message.value")))), type: "input", family: "", props: ["min", "max", "step", "showInput", "tooltip", "tooltipFormat", "inputAttrs", "maxInputAttrs", "minInputAttrs", "marks", "markLabels", "snapToMarks", "chart", "scalingFunction", "intervals"], features: [function(e) {
  function t(m) {
    const { min: k, max: y, intervals: D } = e.props;
    if (m = Math.min(Math.max(m, 0), 100), !D || D.length === 0) {
      p();
      const C = k + m / 100 * (y - k);
      return e.props.scalingFunction.reverse(C, k, y);
    }
    const x = o(D, k, y);
    for (let C = 0; C < x.length; C++) {
      const { value: w, step: L, left: d, width: _, stepsInInterval: I } = x[C];
      if (m >= d && m <= d + _) {
        const O = w + (m - d) / _ * I * L, N = O % L;
        return u(N < L / 2 ? O - N : O + (L - N));
      }
    }
    return m > 100 ? y : m < 0 ? k : void 0;
  }
  function r(m, k = e.props.min, y = e.props.max) {
    const D = e.props.intervals;
    if (!D || D.length === 0)
      return p(), (e.props.scalingFunction.forward(m, k, y) - k) / (y - k) * 100;
    const x = o(D, k, y);
    for (let C = 0; C < x.length; C++) {
      const { value: w, step: L, left: d, width: _, stepsInInterval: I } = x[C], O = C < x.length - 1 ? x[C + 1].value : y;
      if (m >= w && m <= O)
        return 100 * ((d + (m - w) / L / I * _) / 100);
    }
    return 100;
  }
  function o(m, k = e.props.min, y = e.props.max) {
    (m = [...m]).sort((C, w) => C.value - w.value), m[0].value !== k && m.unshift({ value: k, step: e.props.step });
    let D = 0;
    for (let C = 0; C < m.length; C++) {
      const w = m[C].value, L = ((C < m.length - 1 ? m[C + 1].value : y) - w) / m[C].step;
      D += L;
    }
    let x = 0;
    return m.map((C, w) => {
      const L = C.value, d = ((w < m.length - 1 ? m[w + 1].value : y) - L) / C.step, _ = x / D * 100;
      return x += d, { value: C.value, step: C.step, left: _, width: d / D * 100, stepsInInterval: d, totalSteps: D };
    });
  }
  function n() {
    const m = parseFloat(`${e.props.min}`), k = parseFloat(`${e.props.max}`);
    let y, D = 0;
    if (Array.isArray(e._value)) {
      const x = [...e._value].sort(a);
      D = parseFloat(`${x[0]}`), y = parseFloat(`${x[1]}`);
    } else
      y = parseFloat(`${e._value}`);
    e.props.maxHandleStyles = { left: `${r(y, m, k)}%` }, e.props.isMulti && Array.isArray(e._value) ? (e.props.minHandleStyles = { left: `${r(D, m, k)}%` }, e.props.fillStyles = { left: `${r(D, m, k)}%`, width: r(y, m, k) - r(D, m, k) + "%" }) : e.props.fillStyles = { left: "0%", width: `${r(y, m, k)}%` };
  }
  function a(m, k) {
    return parseFloat(`${m}`) - parseFloat(`${k}`);
  }
  function s(m, k = !0) {
    if (e.props.disabled)
      return;
    let y;
    if (m === void 0) {
      if (e.props.isMulti)
        e.input([e.props.min, e.props.max]);
      else {
        const x = e.props.min + (e.props.max - e.props.min) / 2;
        e.input(x);
      }
      return n(), void l();
    }
    if (e.props.isMulti && Array.isArray(e._value) && !Array.isArray(m)) {
      const x = e.props.lastHandleInteraction === "min" ? 0 : 1;
      e._value[x] = m;
      const [C, w] = [...e._value];
      if (C >= w) {
        const L = g == null ? void 0 : g.querySelector(`[data-handle="${e.props.lastHandleInteraction === "min" ? "max" : "min"}"]`);
        L == null || L.focus();
      }
      y = c([...e._value].sort(a));
    } else
      Array.isArray(m) ? y = c(m) : (y = c(m), y = isNaN(y) ? e.props.min : y);
    e.props.snapToMarks && (y = f(y));
    const D = i(y);
    k && e.input(D), n(), l();
  }
  function l() {
    if (e.props.isMulti && Array.isArray(e._value)) {
      const [m, k] = [...e._value];
      b && b.input(m), v && v.input(k);
    } else
      v && v.input(e._value);
  }
  function i(m) {
    return e.props.isMulti && Array.isArray(m) ? [i(m[0]), i(m[1])] : (m = isNaN(m) ? e.props.min : m, Math.min(Math.max(parseFloat(`${m}`), e.props.min), e.props.max));
  }
  function u(m) {
    return parseFloat(m.toFixed(e.props.decimals));
  }
  function c(m) {
    if (e.props.snapToMarks)
      return m;
    if (!e.props.intervals)
      return Array.isArray(m) ? m.map((y) => u(Math.round(y / e.props.step) * e.props.step)) : u(Math.round(m / e.props.step) * e.props.step);
    const k = o(e.props.intervals);
    if (Array.isArray(m))
      return m.map((y) => {
        const D = k.find((x, C) => {
          var w;
          return y >= x.value && y < (((w = k[C + 1]) === null || w === void 0 ? void 0 : w.value) || e.props.max);
        });
        return D ? u(D.value + Math.round((y - D.value) / D.step) * D.step) : y;
      });
    {
      const y = k.find((D, x) => {
        var C;
        return m >= D.value && m < (((C = k[x + 1]) === null || C === void 0 ? void 0 : C.value) || e.props.max);
      });
      return y ? u(y.value + Math.round((m - y.value) / y.step) * y.step) : m;
    }
  }
  function f(m) {
    if (Array.isArray(m))
      return m[0] = f(m[0]), m[1] = f(m[1]), m;
    {
      const k = e.props.marks;
      return k.reduce((D, x) => Math.abs(x.at - m) < Math.abs(D.at - m) ? x : D, k[0]).at;
    }
  }
  function p() {
    h || (R(e.props.scalingFunction) ? typeof e.props.scalingFunction == "string" ? e.props.scalingFunction = $[e.props.scalingFunction] || $.linear : typeof e.props.scalingFunction == "object" && (e.props.scalingFunction = { ...$.linear, ...e.props.scalingFunction }) : e.props.scalingFunction = $.linear, h = !0);
  }
  let g, b, v;
  e.addProps(["isMulti", "maxHandleStyles", "minHandleStyles", "fillStyles", "decimals", "dragging", "lastHandleInteraction", "largestBar", "computedMaxInputAttrs", "computedMinInputAttrs"]);
  const $ = { linear: { forward: (m) => m, reverse: (m) => m }, log: { forward: (m, k = e.props.min, y = e.props.max) => y * Math.pow(m / y, 1.5), reverse: (m, k = e.props.min, y = e.props.max) => y * Math.pow(m / y, 1 / 1.5) } };
  let h = !1;
  e.props.maxHandleStyles = { left: "0%" }, e.props.fillStyles = { left: "0%", width: "0%" }, e.props.isMulti = !1, e.props.step = 1, e.props.min = 0, e.props.max = 100, e.props.tooltipFormat = typeof e.props.tooltipFormat == "function" ? e.props.tooltipFormat : (m, k) => {
    if (k)
      return m;
  }, e.props.largestBar = 0, "disabled" in e.props && (e.props.disabled = R(e.props.disabled)), e.on("created", () => {
    function m(C) {
      var w;
      if (!g || !e.props.dragging)
        return;
      C.preventDefault();
      const L = C.clientX || ((w = C.touches) === null || w === void 0 ? void 0 : w.length) && C.touches[0].clientX, { left: d, width: _ } = g.getBoundingClientRect();
      s(t((L - d) / _ * 100));
    }
    var k;
    p(), e.props.isMulti = Array.isArray(e.value), e.props.step = parseFloat(`${e.props.step}`), e.props.decimals = ((k = e.props.step.toString().split(".")[1]) === null || k === void 0 ? void 0 : k.length) || 0, e.props.min = parseFloat(`${e.props.min}`), e.props.max = parseFloat(`${e.props.max}`);
    const y = R(e.props.tooltip);
    e.props.tooltip = e.props.tooltip === void 0 ? "auto" : y;
    const D = R(e.props.marks);
    e.props.marks = !!D && (Array.isArray(e.props.marks) ? e.props.marks : function() {
      const { min: C, max: w, step: L } = e.props, d = [];
      for (let _ = C; _ <= w; _ += L)
        d.push({ at: _, label: _ });
      return d;
    }()), e.props.markLabels = R(e.props.markLabels), e.props.snapToMarks = R(e.props.snapToMarks), e.props.showInput = R(e.props.showInput), e.props.largestBar = e.props.chart ? e.props.chart.reduce((C, w) => w.value > C ? w.value : C, 0) : e.props.largestBar;
    const x = { disabled: e.props.disabled, min: e.props.min, max: e.props.max, step: e.props.step };
    if (e.props.inputAttrs = e.props.inputAttrs && typeof e.props.inputAttrs == "object" ? Object.assign(x, e.props.inputAttrs) : x, e.props.computedMaxInputAttrs = e.props.maxInputAttrs && typeof e.props.maxInputAttrs == "object" ? Object.assign({}, e.props.inputAttrs, e.props.maxInputAttrs) : e.props.inputAttrs, e.props.computedMinInputAttrs = e.props.minInputAttrs && typeof e.props.minInputAttrs == "object" ? Object.assign({}, e.props.inputAttrs, e.props.minInputAttrs) : e.props.inputAttrs, me(`track-${e.props.id}`, () => {
      var C;
      g = (C = e.props.__root) === null || C === void 0 ? void 0 : C.getElementById(`track-${e.props.id}`), s(e.value, !1), n();
    }, e.props.__root), e.context) {
      let C = 0, w = "";
      const L = e.context.handlers.blur;
      e.context.handlers.blur = (d) => {
        L(d), e.emit("blur");
      }, e.context.handlers.clickTrack = (d) => {
        if (!g)
          return;
        e.props.dragging = !1;
        const { left: _, width: I } = g.getBoundingClientRect(), O = (d.clientX - _) / I;
        if (e.props.isMulti && Array.isArray(e.value)) {
          const [N, z] = e.value, W = Math.abs(N - O * e.props.max) < Math.abs(z - O * e.props.max) ? "min" : "max", G = W === "min" ? 0 : 1;
          e.props.lastHandleInteraction = W, e.value[G] = t(100 * O), s(e._value);
        } else
          s(t(100 * O));
      }, e.context.handlers.focus = (d) => {
        if (!g)
          return;
        const _ = d.target.dataset.handle;
        _ && (e.props.lastHandleInteraction = _);
      }, e.context.handlers.clickHandle = (d) => {
        d.stopPropagation(), e.props.attrs.onClick && e.props.attrs.onClick(d), e.props.dragging = !1, s(e._value);
      }, e.context.handlers.startDrag = (d) => {
        if (!g)
          return;
        e.props.dragging = !0;
        const _ = d.type === "touchstart", I = _ ? "touchmove" : "mousemove", O = _ ? "touchend" : "mouseup";
        e.props.lastHandleInteraction = d.target.dataset.handle || e.props.lastHandleInteraction, document.addEventListener(I, m, { passive: !1 }), document.addEventListener(O, () => {
          e.context && (e.props.dragging = !1, document.removeEventListener(I, m), _ && d.target instanceof HTMLElement && d.target.blur());
        });
      }, e.context.handlers.keydown = (d) => {
        if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "-"].includes(d.key)) {
          d.preventDefault(), clearTimeout(C), w += d.key;
          const _ = w === "-" ? -1 : 1;
          C = window.setTimeout(() => {
            w !== "-" && s(parseFloat(w) * _), w = "";
          }, 350);
        }
        if (["ArrowLeft", "ArrowDown", "ArrowRight", "ArrowUp", "PageUp", "PageDown", "Home", "End"].includes(d.key)) {
          d.preventDefault();
          const _ = e.props.lastHandleInteraction === "min" ? 0 : 1, I = Array.isArray(e._value) ? e._value[_] : e._value, O = function(N, z) {
            if (!e.props.intervals)
              return e.props.step;
            const W = o(e.props.intervals);
            if (N >= e.props.max)
              return W[W.length - 1].step;
            let G = W.find(($e, ge) => {
              var Pe;
              return N >= $e.value && N < (((Pe = W[ge + 1]) === null || Pe === void 0 ? void 0 : Pe.value) || e.props.max);
            });
            return G ? (z === -1 && N - G.step < G.value && (G = W[W.indexOf(G) - 1] || G), G.step) : e.props.step;
          }(I, ["ArrowLeft", "ArrowDown", "PageDown"].includes(d.key) ? -1 : 1);
          if (e.props.marks && e.props.snapToMarks) {
            const N = f(I), z = e.props.marks.find((ge) => ge.at === N), W = e.props.marks.indexOf(z), G = ["ArrowLeft", "ArrowDown"].includes(d.key) ? -1 : 1, $e = Math.min(Math.max(0, W + G), e.props.marks.length - 1);
            return void s(e.props.marks[$e].at);
          }
          if (d.metaKey)
            return void (d.key === "ArrowLeft" || d.key === "ArrowDown" ? s(e.props.min) : s(e.props.max));
          if (d.key === "Home")
            return void s(e.props.min);
          if (d.key === "End")
            return void s(e.props.max);
          ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(d.key) && s(I + (d.shiftKey ? 10 * O : O) * (["ArrowLeft", "ArrowDown"].includes(d.key) ? -1 : 1)), d.key === "PageUp" ? s(I + 10 * O) : d.key === "PageDown" && s(I - 10 * O);
        }
      }, e.context.handlers.maxNode = (d) => {
        v = d, d.hook.commit((_, I) => {
          if (j(d.value, _))
            return I(_);
          const O = parseFloat(_);
          return e.props.isMulti && Array.isArray(e.value) ? (e.value[1] = O, s(e.value)) : s(O), I(i(O));
        });
      }, e.context.handlers.minNode = (d) => {
        b = d, d.hook.commit((_, I) => {
          if (j(d.value, _))
            return I(_);
          const O = parseFloat(_);
          return e.props.isMulti && Array.isArray(e.value) ? (e.value[0] = O, s(e.value)) : s(O), I(i(O));
        });
      }, e.context.handlers.inputBlur = () => {
        e.props.isMulti && Array.isArray(e.value) && (e.value.sort(a), b && b.input(e.value[0]), v && v.input(e.value[1]));
      }, e.context.fns.calculateMarkPosition = (d) => r(d, e.props.min, e.props.max);
    }
    s(e.value, !1);
  }), e.on("input", ({ payload: m }) => {
    Array.isArray(e.value) && Array.isArray(m) ? e.value[0] === m[0] && e.value[1] === m[1] || s(m, !1) : e.value !== m && s(m, !1);
  }), e.on("prop:max", () => {
    e.props.max = parseFloat(`${e.props.max}`), s(e.value);
  }), e.on("prop:min", () => {
    e.props.min = parseFloat(`${e.props.min}`), s(e.value);
  });
}] }, ne = Ae("cp"), { outer: Yy, wrapper: Zy, inner: Uy, label: qy, prefix: Gy, suffix: Xy, help: bl, messages: Jy, message: Qy, icon: kr } = Ee(ne), ex = ne("swatchPreview", () => ({ $el: "div", attrs: { id: "$id", class: "$classes.swatchPreview", tabindex: { if: "$disabled", then: -1, else: 0 }, onClick: "$handlers.inputPreviewClick", onFocusout: "$handlers.inputPreviewFocusout", onKeydown: "$handlers.inputPreviewKeydown", role: "button", "aria-valuetext": '$: "Current color: " + $value' } })), tx = ne("valueString", () => ({ $el: "span", attrs: { class: "$classes.valueString" }, children: { if: '$format === "hex"', then: "$hex", else: { if: '$format === "rgba"', then: "$rgbaString", else: { if: '$format === "hsla"', then: "$hslaString", else: "" } } } })), rx = ne("panel", () => ({ $el: "div", attrs: { id: '$: $id + "_popover"', class: "$classes.panel", onKeydown: "$handlers.panelKeydown", "aria-role": { if: "$layout === popover", then: "dialog" }, "aria-modal": { if: "$layout === popover", then: "true" }, "aria-label": "$label", popover: "$popover", style: { if: "$usePopover", then: { margin: 0, top: '$popoverCoordinates.y + "px"', left: '$popoverCoordinates.x + "px"' }, else: { position: { if: "$inline === undefined || $inline === false", then: "absolute" } } } } })), ox = ne("panelClose", () => ({ $el: "button", attrs: { type: "button", class: "$classes.panelClose", onClick: "$handlers.closePanel", tabindex: { if: "$showPanelClose", then: -1, else: 0 }, onKeydown: "$handlers.panelCloseKeydown", "aria-label": "$ui.close.value" } })), nx = ne("controlGroup", () => ({ $el: "div", attrs: { class: "$classes.controlGroup", "data-eye-dropper": "$hasNativeEyeDropper && $eyeDropper", role: "group" } })), ax = ne("LS", () => ({ $el: "div", attrs: { class: "$classes.LS" } })), sx = ne("canvasLS", () => ({ $el: "canvas", attrs: { id: '$: "canvas-ls-" + $id', class: '$classes.canvas + " " + $classes.canvasLS', width: 256, height: 256, "aria-hidden": "true" } })), lx = ne("controlLS", () => ({ $el: "div", attrs: { tabindex: { if: "$disabled", then: -1, else: 0 }, class: '$classes.control + " " + $classes.controlLS', onKeydown: "$handlers.lsKeydown", style: { left: '$controlLSPosition.x + "%"', top: '$controlLSPosition.y + "%"', backgroundColor: '$: "hsl(" + $hsla.h + "deg, " + ($hsla.s / 255) * 100 + "%, " + ($hsla.l / 255) * 100 + "%)"' }, role: "slider", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuetext": '$: "Lightness: " + $hslaPercent.l + "%, Saturation: " + $hslaPercent.s + "%"' } })), ix = ne("hue", () => ({ $el: "div", attrs: { class: "$classes.hue" } })), ux = ne("canvasHue", () => ({ $el: "canvas", attrs: { id: '$: "canvas-hue-" + $id', class: '$classes.canvas + " " + $classes.canvasHue', width: 256, height: 10, "aria-hidden": "true" } })), px = ne("controlHue", () => ({ $el: "div", attrs: { tabindex: { if: "$disabled", then: -1, else: 0 }, onKeydown: "$handlers.hueControlKeydown", class: '$classes.control + " " + $classes.controlHue', style: { left: '$: "min(max(" + (($hsla.h / 360) * 100) + "%, 3px), calc(100% - 3px))"', backgroundColor: '$: "hsl(" + $hsla.h + "deg, 100%, 50%)"' }, role: "slider", "aria-valuemin": 0, "aria-valuemax": 360, "aria-valuenow": "$h" } })), dx = ne("alpha", () => ({ $el: "div", attrs: { class: "$classes.alpha" } })), cx = ne("canvasAlpha", () => ({ $el: "canvas", attrs: { id: '$: "canvas-alpha-" + $id', class: '$classes.canvas + " " + $classes.canvasAlpha', width: 256, height: 10, "aria-hidden": "true" } })), fx = ne("controlAlpha", () => ({ $el: "div", attrs: { tabindex: { if: "$disabled", then: -1, else: 0 }, onKeydown: "$handlers.alphaControlKeydown", class: '$classes.control + " " + $classes.controlAlpha', style: { left: '$: "min(max(" + ($hsla.a * 100) + "%, 3px), calc(100% - 3px))"', backgroundImage: '$: "linear-gradient(to right, hsla(" + $hsla.h + "deg, " + ($hsla.s / 255) * 100 + "%, " + ($hsla.l / 255) * 100 + "%, " + $hsla.a + "), hsla(" + $hsla.h + "deg, " + ($hsla.s / 255) * 100 + "%, " + ($hsla.l / 255) * 100 + "%, " + $hsla.a + ")), linear-gradient(to right, white, white)"' }, role: "slider", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": "$hsla.a" } })), gx = ne("preview", () => ({ $el: "div", attrs: { class: "$classes.preview" } })), mx = ne("canvasPreview", () => ({ $el: "canvas", attrs: { id: '$: "canvas-preview-" + $id', class: '$classes.canvas + " " + $classes.canvasPreview', width: 33, height: 33, "aria-hidden": "true" } })), hx = ne("canvasSwatchPreview", () => ({ $el: "div", attrs: { class: "$classes.canvasSwatchPreviewWrapper" }, children: [{ $el: "canvas", attrs: { id: '$: "canvas-swatch-preview-" + $id', class: '$classes.canvas + " " + $classes.canvasSwatchPreview', width: 33, height: 33, "aria-hidden": "true" } }] })), vx = ne("eyeDropper", () => ({ $el: "div", attrs: { tabindex: { if: "$disabled", then: -1, else: 0 }, role: "button", onKeydown: "$handlers.eyeDropperKeydown", id: '$: "eye-dropper-" + $id', class: "$classes.eyeDropper" } })), bx = ne("formatField", () => ({ $el: "div", attrs: { class: "$classes.formatField" } })), $x = ne("colorInputGroup", () => ({ $el: "div", attrs: { class: "$classes.colorInputGroup", "aria-role": "group" } })), yx = ne("hexField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.hexFieldGroup' }, children: [{ $el: "input", attrs: { onInput: "$handlers.hexInput", onKeydown: "$handlers.hexKeydown", onFocus: "$handlers.hexFocus", onBlur: "$handlers.hexBlur", id: '$: "hex-" + $id', tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", class: '$classes.colorField + " " + $classes.hexField', value: "$hex", autocomplete: "off" } }, { $el: "label", children: "HEX", attrs: { for: '$: "hex-" + $id', class: "$classes.fieldLabel" } }] })), xx = ne("rField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.rFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "r-" + $id', onInput: '$handlers.rangeLimitInput("rgba", 0, 255)', onKeydown: '$handlers.rangeLimitKeydown("rgba", 0, 255, 1)', type: "number", class: '$classes.colorField + " " + $classes.rField', min: 0, max: 255, step: 1, tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$rgba.r", autocomplete: "off" } }, { $el: "label", children: "R", attrs: { for: '$: "r-" + $id', class: "$classes.fieldLabel" } }] })), wx = ne("gField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.gFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "g-" + $id', onInput: '$handlers.rangeLimitInput("rgba", 0, 255)', onKeydown: '$handlers.rangeLimitKeydown("rgba", 0, 255, 1)', type: "number", class: '$classes.colorField + " " + $classes.gField', min: 0, max: 255, step: 1, tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$rgba.g", autocomplete: "off" } }, { $el: "label", children: "G", attrs: { for: '$: "g-" + $id', class: "$classes.fieldLabel" } }] })), _x = ne("bField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.bFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "b-" + $id', onInput: '$handlers.rangeLimitInput("rgba", 0, 255)', onKeydown: '$handlers.rangeLimitKeydown("rgba", 0, 255, 1)', type: "number", class: '$classes.colorField + " " + $classes.bField', min: 0, max: 255, step: 1, tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$rgba.b", autocomplete: "off" } }, { $el: "label", children: "B", attrs: { for: '$: "b-" + $id', class: "$classes.fieldLabel" } }] })), kx = ne("aField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.aFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "a-" + $id', onInput: '$handlers.rangeLimitInput("alpha", 0, 1)', onKeydown: '$handlers.rangeLimitKeydown("alpha", 0, 1, 0.01)', type: "text", class: '$classes.colorField + " " + $classes.aField', value: "$rgba.a", tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", autocomplete: "off" }, "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": "$rgba.a" }, { $el: "label", children: "A", attrs: { for: '$: "a-" + $id', class: "$classes.fieldLabel" } }] })), Dx = ne("hField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.hFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "h-" + $id', onInput: '$handlers.rangeLimitInput("hsla", 0, 360)', onKeydown: '$handlers.rangeLimitKeydown("hsla", 0, 360, 1)', type: "text", class: '$classes.colorField + " " + $classes.hField', tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$hslaPercent.h", autocomplete: "off", "aria-valuemin": 0, "aria-valuemax": 360, "aria-valuenow": "$hsla.h" } }, { $el: "label", children: "H", attrs: { for: '$: "h-" + $id', class: "$classes.fieldLabel" } }] })), Sx = ne("sField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.sFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "s-" + $id', onInput: '$handlers.rangeLimitInput("hsla", 0, 100)', onKeydown: '$handlers.rangeLimitKeydown("hsla", 0, 100, 1)', type: "text", class: '$classes.colorField + " " + $classes.sField', tabindex: { if: "$disabled", then: -1, else: 0 }, value: "$hslaPercent.s", autocomplete: "off", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": "$hsla.s" } }, { $el: "label", children: "S", attrs: { for: '$: "s-" + $id', class: "$classes.fieldLabel" } }] })), Cx = ne("lField", () => ({ $el: "div", attrs: { class: '$classes.fieldGroup + " " + $classes.lFieldGroup' }, children: [{ $el: "input", attrs: { id: '$: "l-" + $id', onInput: '$handlers.rangeLimitInput("hsla", 0, 100)', onKeydown: '$handlers.rangeLimitKeydown("hsla", 0, 100, 1)', type: "text", class: '$classes.colorField + " " + $classes.lField', tabindex: { if: "$disabled", then: -1, else: 0 }, disabled: "$disabled", value: "$hslaPercent.l", autocomplete: "off", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": "$hsla.l" } }, { $el: "label", children: "L", attrs: { for: '$: "l-" + $id', class: "$classes.fieldLabel" } }] })), Lx = ne("formatSwitcher", () => ({ $el: "div", attrs: { class: "$classes.formatSwitcher", onClick: "$handlers.toggleFormat", tabindex: { if: "$disabled", then: -1, else: 0 }, onKeydown: "$handlers.formatSwitcherKeydown", role: "button", "aria-label": "$ui.next.value" } })), Ix = ne("swatches", () => ({ $el: "div", attrs: { id: '$: "swatches-" + $id', class: "$classes.swatches", "data-keyboard-nav": "$swatchIsUsingKeyboardNav" } })), Ax = ne("swatch", () => ({ $el: "div", for: ["swatch", "index", "$options"], if: "$swatch", attrs: { if: "$swatch.group", then: { class: "$classes.swatchGroup" }, else: { class: "$classes.swatch", title: "$swatch.label" } }, children: { if: "$swatch.group", then: [{ $el: "span", attrs: { class: "$classes.swatchGroupLabel" }, children: "$swatch.group" }, { $el: "div", for: ["groupSwatch", "swatchIndex", "$swatch.options"], attrs: { class: "$classes.swatch", title: "$groupSwatch.label" }, children: [{ $el: "canvas", attrs: { class: "$classes.swatchCanvas", width: 21, height: 21, onClick: "$handlers.swatchClick", onKeydown: "$handlers.swatchKeydown", tabindex: { if: "$: ($focusedSwatch === $fns.anyToHsvaString($groupSwatch.value, 0))", then: { if: "$disabled", then: -1, else: 0 }, else: -1 }, key: '$groupSwatch.label + "-" + $groupSwatch.value', "data-color": "$fns.anyToHsvaString($groupSwatch.value, 0)", "data-color-precise": "$fns.anyToHsvaString($groupSwatch.value, 2)", "data-group": "$index", "data-label": "$swatch.label", role: "button", "aria-label": "$swatch.label" } }] }], else: { $el: "canvas", attrs: { class: "$classes.swatchCanvas", width: 21, height: 21, onClick: "$handlers.swatchClick", onKeydown: "$handlers.swatchKeydown", tabindex: { if: "$: ($focusedSwatch === $fns.anyToHsvaString($swatch.value, 0))", then: { if: "$disabled", then: -1, else: 0 }, else: -1 }, key: '$swatch.label + "-" + $swatch.value', "data-color": "$fns.anyToHsvaString($swatch.value, 0)", "data-color-precise": "$fns.anyToHsvaString($swatch.value, 2)", "data-group": 0, "data-label": "$swatch.label", role: "button", "aria-label": "$swatch.label" } } } })), ju = /rgba?\((\d+%?)\s*(?:,?\s*|\s+)(\d+%?)\s*(?:,?\s*|\s+)(\d+%?)(?:\s*(?:,?\s*|\s+|\/\s*)(\d*(?:\.\d+)?%?))?\)/i, Ku = /^hsla?\((\d{1,3}deg|[\d.]+)\s*,?\s*([\d.]+%)\s*,?\s*([\d.]+%)(?:\s*,?\s*([\d.]+%?))?\)$/i, $l = { "canvas-ls": "LS", "canvas-hue": "Hue", "canvas-alpha": "Alpha" }, Ex = { schema: Yy(Zy(qy("$label"), B("$inline && $help", bl("$help")), Uy(B("($inline === undefined || $inline === false) && $prefixIcon !== undefined", kr("prefix", "label")), B("$inline === undefined || $inline === false", Gy()), B("$inline === undefined || $inline === false", ex(hx(), B("$showValue", tx()))), B("$inline || $expanded)", rx(B("$showPanelClose && ($inline === undefined || $inline === false)", ox(kr("close"))), B("$panelControls", nx(ax(sx(), lx()), gx(mx()), ix(ux(), px()), dx(cx(), fx()), B("$eyeDropper && $hasNativeEyeDropper", vx(kr("eyeDropper"))))), B("$panelFormat", bx($x(B('$panelActiveFormat === "hex"', yx()), B('$panelActiveFormat === "rgba"', xx()), B('$panelActiveFormat === "rgba"', wx()), B('$panelActiveFormat === "rgba"', _x()), B('$panelActiveFormat === "hsla"', Dx()), B('$panelActiveFormat === "hsla"', Sx()), B('$panelActiveFormat === "hsla"', Cx()), B('$panelActiveFormat === "rgba" || $panelActiveFormat === "hsla"', kx())), Lx(kr("switch")))), B("$options", Ix(Ax())))), B("$inline === undefined || $inline === false", Xy()), B("($inline === undefined || $inline === false) && $suffixIcon !== undefined", kr("suffix"))), B("$: ($inline === undefined || $inline === false) && $help", bl("$help"))), Jy(Qy("$message.value"))), type: "input", family: "text", props: ["disbaled", "format", "valueFormat", "panelControls", "panelFormat", "eyeDropper", "inline", "options", "showValue", "closeOnSelect", "allowPaste"], features: [function(e) {
  function t(S) {
    var A, M;
    if (!e.context || !e.props.allowPaste || e.props.disabled)
      return;
    const T = (A = e.props.__root) === null || A === void 0 ? void 0 : A.activeElement;
    if (w && w.contains(T)) {
      const E = (M = S.clipboardData) === null || M === void 0 ? void 0 : M.getData("text");
      if (!E || T.tagName === "INPUT" && !Zt(E) && !ju.test(E) && !Ku.test(E))
        return;
      (Zt(E) || E.startsWith("hsl") || E.startsWith("rgb")) && (e.props.hexInputFocused && (e.props.hexInputFocused = !1, setTimeout(() => {
        e.props.hexInputFocused = !0;
      }, 10)), S.preventDefault(), r(E));
    }
  }
  function r(S) {
    var A;
    if (!S)
      return;
    const M = dn(S);
    if (M) {
      const [T, E, V, F] = M;
      S !== "undefined" && (typeof T != "number" || isNaN(T) || typeof E != "number" || isNaN(E) || typeof V != "number" || isNaN(V) || typeof F != "number" || isNaN(F) || J(T, 2) === e.props.h && J(E, 2) === e.props.s && J(V, 2) === e.props.v && J(F, 2) === e.props.alpha) || (e.props.alpha = J(F, 2), D(T, E, V));
    } else {
      const T = (A = e.props.options) === null || A === void 0 ? void 0 : A.find((E) => {
        var V;
        return ((V = E.label) === null || V === void 0 ? void 0 : V.toLowerCase()) === S.toLowerCase();
      });
      if (T && T.value) {
        const E = dn(T.value);
        if (E) {
          const [V, F, Z, le] = E;
          e.props.alpha = J(le, 2), D(V, F, Z);
        } else
          D(e.props.h, e.props.s, e.props.v);
      } else
        D(e.props.h, e.props.s, e.props.v);
    }
  }
  function o(S) {
    if (!e.context || !N)
      return;
    const A = N[S];
    A && (e.props.focusedSwatch = A.dataset.color);
  }
  function n(S, A) {
    new ResizeObserver(() => {
      const M = S.getBoundingClientRect();
      S.width = Math.round(M.width), S.height = Math.round(M.height), A(S);
    }).observe(S);
  }
  function a() {
    e.context && e.props.eyeDropper && (e.context.hasNativeEyeDropper = !(typeof window > "u" || !window.EyeDropper), me(`eye-dropper-${e.props.id}`, () => {
      var S;
      const A = new window.EyeDropper(), M = (S = e.props.__root) === null || S === void 0 ? void 0 : S.getElementById(`eye-dropper-${e.props.id}`);
      M == null || M.addEventListener("click", async () => {
        const T = await A.open();
        if (!T.sRGBHex)
          return;
        const [E, V, F] = Yn(T.sRGBHex);
        e.props.alpha = 1, D(E, V, F);
      });
    }, e.props.__root));
  }
  function s() {
    l("canvas-ls", (S) => {
      L = S;
    }, G, v), l("canvas-hue", (S) => {
      d = S;
    }, c, $), l("canvas-alpha", (S) => {
      _ = S;
    }, $e, h), i(`canvas-preview-${e.props.id}`, (S) => {
      I = S, f();
    }, ge), i(`canvas-swatch-preview-${e.props.id}`, (S) => {
      O = S, p();
    }, Pe), u();
  }
  function l(S, A, M, T) {
    let E = !1;
    const V = () => {
      document.removeEventListener("mousemove", F), document.removeEventListener("mouseup", le), document.removeEventListener("touchmove", Z), document.removeEventListener("touchend", K);
    }, F = (Y) => {
      Y.buttons === 1 && C && T(Y);
    }, Z = (Y) => {
      C && T(Y);
    }, le = () => {
      C = void 0, V();
    }, K = () => {
      C = void 0, V();
    };
    i(`${S}-${e.props.id}`, (Y) => {
      const se = Y.nextElementSibling;
      A(Y), M(), function(ae, we) {
        const ie = (ue) => {
          ae && (ue.preventDefault(), we(ue));
        };
        ae == null || ae.addEventListener("mousedown", ie), ae == null || ae.addEventListener("touchstart", ie);
      }(Y, T), E || function(ae, we) {
        E = !0, ae.addEventListener("blur", () => {
          ae.removeAttribute("data-prevent-focus-style");
        }), we.addEventListener("touchend", () => {
          ae.removeAttribute("data-prevent-focus-style"), ae.blur();
        }), ae.addEventListener("keydown", (ie) => {
          ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(ie.key) && ae.removeAttribute("data-prevent-focus-style");
        });
      }(se, Y), Y.addEventListener("mousedown", (ae) => {
        se.focus(), se.setAttribute("data-prevent-focus-style", "true"), C = $l[S], T(ae), document.addEventListener("mousemove", F), document.addEventListener("mouseup", le);
      }), Y.addEventListener("touchstart", () => {
        se.setAttribute("data-prevent-focus-style", "true"), se.focus(), C = $l[S], document.addEventListener("touchmove", Z), document.addEventListener("touchend", K);
      });
    }, M);
  }
  function i(S, A, M) {
    me(S, () => {
      var T;
      const E = (T = e.props.__root) === null || T === void 0 ? void 0 : T.getElementById(S);
      E && (A(E), M && n(E, M));
    }, e.props.__root);
  }
  function u() {
    me(`swatches-${e.props.id}`, () => {
      var S, A, M;
      N = Array.from(((S = e.props.__root) === null || S === void 0 ? void 0 : S.querySelectorAll(`#swatches-${e.props.id} canvas`)) || []), N.forEach((T) => {
        n(T, g);
      }), e.props.focusedSwatch = (M = (A = N[0]) === null || A === void 0 ? void 0 : A.dataset) === null || M === void 0 ? void 0 : M.color, k();
    }, e.props.__root);
  }
  function c() {
    if (!d)
      return;
    const S = d.getContext("2d");
    if (!S)
      return;
    const A = d.width, M = d.height;
    for (let T = 0; T < A; T++) {
      const E = Math.floor(T / A * 360);
      S.fillStyle = `hsl(${E}, 100%, 50%)`, S.fillRect(T, 0, 1, M);
    }
  }
  function f() {
    if (!I)
      return;
    const S = I.getContext("2d");
    if (!S)
      return;
    m(I, I.width / 3);
    const { r: A, g: M, b: T, a: E } = e.props.rgba;
    S.fillStyle = `rgba(${A}, ${M}, ${T}, ${E})`, S.fillRect(0, 0, I.width, I.height);
  }
  function p() {
    if (!O)
      return;
    const S = O.getContext("2d");
    if (!S)
      return;
    m(O, O.height / 2);
    const { r: A, g: M, b: T, a: E } = e.props.rgba;
    S.fillStyle = `rgba(${A}, ${M}, ${T}, ${E})`, S.fillRect(0, 0, O.width, O.height);
  }
  function g(S) {
    if (!S)
      return;
    const A = S.getContext("2d");
    if (!A)
      return;
    m(S, S.width / 2);
    const M = S.dataset.colorPrecise;
    if (!M)
      return;
    const [T, E, V, F] = Ws(M), [Z, le, K, Y] = Hs(T, E, V, F);
    A.fillStyle = `hsla(${Z}, ${le / 255 * 100}%, ${K / 255 * 100}%, ${Y})`, A.fillRect(0, 0, Math.round(S.width), Math.round(S.height));
  }
  function b(S, A, M) {
    let T = null;
    const E = (K) => {
      T !== null && cancelAnimationFrame(T), T = requestAnimationFrame(() => {
        if (!A)
          return;
        const Y = A.getBoundingClientRect();
        let se, ae;
        "touches" in K ? (se = K.touches[0].clientX - Y.left, ae = K.touches[0].clientY - Y.top) : (se = K.clientX - Y.left, ae = K.clientY - Y.top), se = Math.min(Math.max(se, 0), Y.width), ae = Math.min(Math.max(ae, 0), Y.height), M(se, ae);
      });
    };
    E(S);
    const V = (K) => {
      K.preventDefault(), E(K);
    }, F = (K) => {
      K.preventDefault(), E(K);
    }, Z = () => {
      C = void 0, document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", Z);
    }, le = () => {
      C = void 0, document.removeEventListener("touchmove", F), document.removeEventListener("touchend", le);
    };
    "touches" in S ? (document.addEventListener("touchmove", F), document.addEventListener("touchend", le)) : (document.addEventListener("mousemove", V), document.addEventListener("mouseup", Z));
  }
  function v(S) {
    b(S, L, (A, M) => {
      const T = A / L.width * 100, E = 100 - M / L.height * 100;
      Ge(e.props.hue, T, E);
    });
  }
  function $(S) {
    b(S, d, (A, M) => {
      if (!d)
        return;
      const T = d.width, E = Math.floor(A / T * 360);
      e.props.h = E, Ge(e.props.h, e.props.s, e.props.v);
    });
  }
  function h(S) {
    b(S, _, (A, M) => {
      const T = A / _.width * 100 / 100;
      e.props.alpha = T, Ge(e.props.hue, e.props.s, e.props.v);
    });
  }
  function m(S, A) {
    const M = S.getContext("2d");
    if (!M)
      return;
    const T = Math.ceil(S.height / A), E = Math.ceil(S.width / A);
    for (let V = 0; V < T; V++)
      for (let F = 0; F < E; F++)
        M.fillStyle = (V + F) % 2 == 1 ? "#FFFFFF" : "#CCCCCC", M.fillRect(F * A, V * A, A, A);
  }
  function k() {
    var S, A;
    if (!e.context || !e.props.options || !N)
      return;
    const { h: M, s: T, v: E, alpha: V } = e.props, F = function(K, Y, se, ae = 1) {
      const we = se === 0 ? 0 : Y;
      return `${J(se === 0 || se === 100 && Y === 0 ? 0 : K, 0)}-${J(we, 0)}-${J(se, 0)}-${J(ae, 2)}`;
    }(M, T, E, V);
    let Z = !1, le = !1;
    N.forEach((K) => {
      const Y = K.dataset.color;
      if (!Y)
        return;
      const [se, ae, we, ie] = Y.split("-");
      we === "0" && E === 0 && ie === `${V}` && (le = !0);
      const ue = K.parentElement;
      le || Y === F ? (ue.dataset.active = "true", K.ariaSelected = "true", le = !1, !Z && N && (o(N.indexOf(K)), Z = !0)) : (delete ue.dataset.active, K.ariaSelected = "false");
    }), Z || (e.props.focusedSwatch = (A = (S = N[0]) === null || S === void 0 ? void 0 : S.dataset) === null || A === void 0 ? void 0 : A.color);
  }
  function y(S) {
    S = S.replace("#", ""), e.props.hexInputFocused || S.length !== 3 || (S = S[0] + S[0] + S[1] + S[1] + S[2] + S[2]), S = `#${S = S.toUpperCase()}`, e.props.hex = S.slice(0, 9);
  }
  function D(S, A, M, T = !1) {
    e.props.h = S === void 0 || isNaN(S) ? e.props.h : J(Math.max(Math.min(S, 360), 0), 2), e.props.s = A === void 0 || isNaN(A) ? e.props.s : J(Math.max(Math.min(A, 100), 0), 2), e.props.v = M === void 0 || isNaN(M) ? e.props.v : J(Math.max(Math.min(M, 100), 0), 2);
    const { h: E, s: V, v: F, alpha: Z } = e.props, [le, K, Y] = Hs(E, V, F), [se, ae, we] = Pu(E, V, F), ie = e.props.hexInputFocused ? e.props.hex : Bh(E, V, F, Z), ue = J(Z, 2);
    e.props.hsla = { h: E, s: K, l: Y, a: ue }, e.props.hslaPercent = { h: J(E, 0), s: F === 100 && V === 0 ? 0 : J(F === 0 ? K / 255 : Math.max(Math.min(K / 255 * 100, 100), 0), 0), l: J(Math.max(Math.min(e.props.hsla.l / 255 * 100, 100), 0), 0), a: ue }, e.props.hslaString = `hsla(${e.props.hslaPercent.h}, ${e.props.hslaPercent.s}%, ${e.props.hslaPercent.l}%, ${ue})`, e.props.hslaStringPrecise = `hsla(${E}, ${J(F === 0 ? K / 255 : K / 255 * 100, 2)}%, ${J(Y / 255 * 100, 2)}%, ${ue})`, e.props.rgba = { r: se, g: ae, b: we, a: ue }, e.props.rgbaString = `rgba(${se}, ${ae}, ${we}, ${ue})`, y(ie), setTimeout(() => {
      var gt;
      x(), function() {
        const St = e.props.s, hr = 100 - e.props.v;
        e.props.controlLSPosition = { x: St, y: hr };
      }(), rp(), w || typeof window > "u" || (w = (gt = e.props.__root) === null || gt === void 0 ? void 0 : gt.querySelector(`[data-id="${e.props.id}"]`));
    }, 0);
    const Me = e.props.valueFormat ? e.props.valueFormat : e.props.format;
    T || (Me === "hex" ? e.input(e.props.hex) : Me === "rgba" ? e.input(e.props.rgbaString) : Me === "hsla" && e.input(e.props.hslaStringPrecise));
  }
  function x() {
    G(), $e(), ge(), Pe();
  }
  let C, w = null, L = null, d = null, _ = null, I = null, O = null, N = null, z = 0;
  const W = ["hex", "rgba", "hsla"], G = Wt(function() {
    if (!L)
      return;
    const S = L.getContext("2d");
    if (!S)
      return;
    const { width: A, height: M } = L, T = e.props.h || 0;
    S.fillStyle = `hsl(${T}, 100%, 50%)`, S.fillRect(0, 0, A, M);
    const E = S.createLinearGradient(0, 0, A, 0);
    E.addColorStop(0, "rgba(255, 255, 255, 1)"), E.addColorStop(1, "rgba(255, 255, 255, 0)"), S.fillStyle = E, S.fillRect(0, 0, A, M);
    const V = S.createLinearGradient(0, 0, 0, M);
    V.addColorStop(0, "rgba(0,0,0,0)"), V.addColorStop(1, "rgba(0,0,0,1)"), S.fillStyle = V, S.fillRect(0, 0, A, M);
  }, 2), $e = Wt(function() {
    if (!_)
      return;
    const S = _.getContext("2d");
    if (!S)
      return;
    const A = Math.round(_.width), M = Math.round(_.height);
    S.clearRect(0, 0, A, M), m(_, M / 2);
    const T = e.props.rgba.r || 0, E = e.props.rgba.g || 0, V = e.props.rgba.b || 0, F = S.createLinearGradient(0, 0, A, 0);
    F.addColorStop(0, `rgba(${T}, ${E}, ${V}, 0)`), F.addColorStop(1, `rgba(${T}, ${E}, ${V}, 1)`), S.fillStyle = F, S.fillRect(0, 0, A, M);
  }, 2), ge = Wt(f, 2), Pe = Wt(p, 2), Ge = Wt(D, 2), rp = Wt(k, 10, !1);
  e.addProps(["expanded", "h", "s", "v", "alpha", "hsla", "hslaPercent", "hslaString", "hslaStringPrecise", "rgba", "rgbaString", "hex", "controlLSPosition", "panelActiveFormat", "hexInputFocused", "hasNativeEyeDropper", "focusedSwatch", "swatchIsUsingKeyboardNav", "showPanelClose"]), e.props.h = e.props.h || void 0, e.props.s = e.props.s || void 0, e.props.v = e.props.v || void 0, e.props.alpha = e.props.alpha || 1, e.props.controlLSPosition = e.props.controlLSPosition || { x: 0, y: 0 }, e.props.switchIcon = e.props.switchIcon || '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.2 179.7L154.4 66.2c1.4-1.3 3.5-2.2 5.6-2.2s4.2 .8 5.6 2.2L285.8 179.7c1.4 1.3 2.2 3.2 2.2 5.2c0 3.9-3.2 7.1-7.1 7.1H39.1c-3.9 0-7.1-3.2-7.1-7.1c0-2 .8-3.8 2.2-5.2zm-22-23.3C4.4 163.8 0 174.1 0 184.9C0 206.5 17.5 224 39.1 224H280.9c21.6 0 39.1-17.5 39.1-39.1c0-10.8-4.4-21.1-12.3-28.4L187.6 42.9C180.1 35.9 170.2 32 160 32s-20.1 3.9-27.6 10.9L12.3 156.4zm22 175.9c-1.4-1.3-2.2-3.2-2.2-5.2c0-3.9 3.2-7.1 7.1-7.1H280.9c3.9 0 7.1 3.2 7.1 7.1c0 2-.8 3.8-2.2 5.2L165.6 445.8c-1.4 1.3-3.5 2.2-5.6 2.2s-4.2-.8-5.6-2.2L34.2 332.3zm-22 23.3L132.4 469.1c7.4 7 17.4 10.9 27.6 10.9s20.1-3.9 27.6-10.9L307.7 355.6c7.8-7.4 12.3-17.7 12.3-28.5c0-21.6-17.5-39.1-39.1-39.1H39.1C17.5 288 0 305.5 0 327.1c0 10.8 4.4 21.1 12.3 28.5z"/></svg>', e.props.hexInputFocused = !1, e.props.swatchIsUsingKeyboardNav = !1, e.on("destroying", () => {
    e.context && typeof document < "u" && document.removeEventListener("paste", t);
  }), e.on("created", () => {
    e.context && (typeof window < "u" && document.addEventListener("paste", t), e.props.expanded = !1, e.props.panelActiveFormat = e.props.format || W[0], e.props.panelControls = $r(e.props.panelControls), e.props.eyeDropper = $r(e.props.eyeDropper), e.props.panelFormat = $r(e.props.panelFormat), e.props.showValue = $r(e.props.showValue), e.props.allowPaste = $r(e.props.allowPaste), e.props.inline = R(e.props.inline), e.props.disabled = R(e.props.disabled), e.props.format = e.props.format || "hex", e.props.valueFormat = e.props.valueFormat || e.props.format, e.props.closeOnSelect = R(e.props.closeOnSelect), e.props.focusedSwatch = void 0, e.value === void 0 || e.value === "" || e.value === null ? (e.props.rgba = { r: 0, g: 0, b: 0 }, D(0, 0, 0, !0)) : r(`${e.value}`), e.on("input", ({ payload: S }) => {
      w && e.props.__root !== void 0 && !w.contains(e.props.__root.activeElement) && r(S);
    }), setTimeout(() => {
      a();
    }, 5), s(), e.on("prop:expanded", () => {
      function S(M) {
        M.key === "Escape" && (M.preventDefault(), e.props.expanded = !1);
      }
      var A;
      e.props.expanded ? (a(), s(), u(), document.addEventListener("keydown", S), window.innerWidth <= 430 && !window.matchMedia("(hover: hover)").matches ? e.props.showPanelClose = !0 : e.props.showPanelClose = !1, setTimeout(() => {
        var M;
        const T = (M = e.props.__root) === null || M === void 0 ? void 0 : M.querySelector(`[data-id="${e.props.id}"] *:not(.formkit-swatch-preview)[tabindex="0"]`);
        T && T.focus();
      }, 0)) : (document.removeEventListener("keydown", S), ((A = e.props.__root) === null || A === void 0 ? void 0 : A.querySelector(`[data-id="${e.props.id}"] *[tabindex="0"]`)).focus());
    }), e.context.fns.anyToHsvaString = (S, A) => {
      const M = dn(S);
      if (!M)
        return "0-0-0-1";
      let [T, E, V, F] = M;
      return A === 0 && (T = V === 0 || V === 100 && E === 0 ? 0 : T), `${J(T, A)}-${J(E, A)}-${J(V, A)}-${J(F, 2)}`;
    }, e.context.handlers.inputPreviewClick = (S) => {
      e.props.expanded = !e.props.expanded;
    }, e.context.handlers.inputPreviewFocusout = (S) => {
      var A, M, T;
      const E = (A = e.props.__root) === null || A === void 0 ? void 0 : A.querySelector(`[data-id="${e.props.id}"] .formkit-inner`), V = S.relatedTarget;
      if (E.contains(V)) {
        let F = function(Z) {
          var le, K;
          E.contains(Z.target) || (e.props.expanded = !1, (le = e.props.__root) === null || le === void 0 || le.removeEventListener("mousedown", F), (K = e.props.__root) === null || K === void 0 || K.removeEventListener("touchstart", F));
        };
        (M = e.props.__root) === null || M === void 0 || M.addEventListener("mousedown", F), (T = e.props.__root) === null || T === void 0 || T.addEventListener("touchstart", F);
      } else
        e.props.expanded = !1;
    }, e.context.handlers.inputPreviewKeydown = (S) => {
      S.key === "Escape" && (S.preventDefault(), e.props.expanded = !1), S.key !== "Enter" && S.key !== " " || (S.preventDefault(), e.props.expanded = !e.props.expanded);
    }, e.context.handlers.closePanel = () => {
      e.props.expanded = !1;
    }, e.context.handlers.panelCloseKeydown = (S) => {
      S.key !== "Enter" && S.key !== " " || (S.preventDefault(), e.props.expanded = !1);
    }, e.context.handlers.toggleFormat = (S = 1) => {
      S = typeof S == "number" ? S : 1;
      const A = (W.indexOf(e.props.panelActiveFormat) + S + W.length) % W.length;
      e.props.panelActiveFormat = W[A];
    }, e.context.handlers.panelKeydown = (S) => {
      var A, M, T;
      if (S.key === "Tab" && e.props.expanded) {
        S.preventDefault();
        const E = Array.from(((A = e.props.__root) === null || A === void 0 ? void 0 : A.querySelectorAll(`[data-id="${e.props.id}"] *:not(.formkit-swatch-preview)[tabindex="0"]`)) || []).filter(Rh), V = E.indexOf(!((M = e.props.__root) === null || M === void 0) && M.activeElement ? (T = e.props.__root) === null || T === void 0 ? void 0 : T.activeElement : e.props.__root);
        let F;
        F = S.shiftKey ? (V - 1 + E.length) % E.length : (V + 1) % E.length, E[F].focus();
      }
    }, e.context.handlers.lsKeydown = (S) => {
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(S.key)) {
        S.preventDefault();
        const { h: A, s: M, v: T } = e.props, E = S.shiftKey ? 10 : 1;
        switch (S.key) {
          case "ArrowLeft":
            D(A, M - E, T);
            break;
          case "ArrowRight":
            D(A, M + E, T);
            break;
          case "ArrowUp":
            D(A, M, T + E);
            break;
          case "ArrowDown":
            D(A, M, T - E);
            break;
          case "PageUp":
            D(A, M, T + 10);
            break;
          case "PageDown":
            D(A, M, T - 10);
            break;
          case "Home":
            D(A, M - 10, T);
            break;
          case "End":
            D(A, M + 10, T);
        }
        x();
      }
    }, e.context.handlers.hueControlKeydown = (S) => {
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(S.key)) {
        S.preventDefault();
        const { h: A, s: M, v: T } = e.props, E = S.shiftKey ? 10 : 1;
        switch (S.key) {
          case "ArrowLeft":
          case "ArrowDown":
            D(A - E, M, T);
            break;
          case "ArrowRight":
          case "ArrowUp":
            D(A + E, M, T);
            break;
          case "PageUp":
            D(A + 10, M, T);
            break;
          case "PageDown":
            D(A - 10, M, T);
            break;
          case "Home":
            D(0, M, T);
            break;
          case "End":
            D(360, M, T);
        }
        x();
      }
    }, e.context.handlers.alphaControlKeydown = (S) => {
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(S.key)) {
        S.preventDefault();
        const { h: A, s: M, v: T, alpha: E } = e.props, V = S.shiftKey ? 0.1 : 0.01;
        switch (S.key) {
          case "ArrowLeft":
          case "ArrowDown":
            e.props.alpha = J(Math.min(Math.max(E - V, 0), 1), 2);
            break;
          case "ArrowRight":
          case "ArrowUp":
            e.props.alpha = J(Math.min(Math.max(E + V, 0), 1), 2);
            break;
          case "PageUp":
            e.props.alpha = J(Math.min(Math.max(E + 0.1, 0), 1), 2);
            break;
          case "PageDown":
            e.props.alpha = J(Math.min(Math.max(E - 0.1, 0), 1), 2);
            break;
          case "Home":
            e.props.alpha = 0;
            break;
          case "End":
            e.props.alpha = 1;
        }
        D(A, M, T);
      }
    }, e.context.handlers.eyeDropperKeydown = (S) => {
      var A;
      if (S.key === "Enter" || S.key === " ") {
        S.preventDefault();
        const M = (A = e.props.__root) === null || A === void 0 ? void 0 : A.getElementById(`eye-dropper-${e.props.id}`);
        M == null || M.click();
      }
    }, e.context.handlers.formatSwitcherKeydown = (S) => {
      e.context && (S.key !== "Enter" && S.key !== " " && S.key !== "ArrowDown" || (S.preventDefault(), e.context.handlers.toggleFormat()), S.key === "ArrowUp" && (S.preventDefault(), e.context.handlers.toggleFormat(-1)));
    }, e.context.handlers.hexInput = (S) => {
      const A = S.target, M = A.value.startsWith("#") ? 9 : 8, T = A.value.slice(0, M);
      if (A.value = T, Zt(T)) {
        const [E, V, F, Z] = Yn(T);
        e.props.alpha = Z, y(T), D(E, V, F);
      }
    }, e.context.handlers.hexKeydown = (S) => {
      const A = S.target, M = A.value;
      let T = "";
      if (!Zt(M))
        return;
      const E = M.startsWith("#") ? M.slice(1) : M, V = E.length === 8, F = V ? E.substring(0, 6) : E, Z = V ? E.substring(6, 8) : "", le = S.shiftKey ? 10 : 1, K = 16777215;
      let Y;
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(S.key))
        switch (S.preventDefault(), S.key) {
          case "ArrowUp":
            Y = (parseInt(F, 16) + le) % 16777216;
            break;
          case "ArrowDown":
            Y = (parseInt(F, 16) - le + K + 1) % 16777216;
            break;
          case "PageUp":
            Y = (parseInt(F, 16) + 10) % 16777216;
            break;
          case "PageDown":
            Y = (parseInt(F, 16) - 10 + K + 1) % 16777216;
            break;
          case "Home":
            Y = 0;
            break;
          case "End":
            Y = K;
        }
      Y !== void 0 && (T = Y.toString(16).padStart(6, "0").toUpperCase()), T && (A.value = V ? `#${T}${Z}` : `#${T}`), e.context && e.context.handlers.hexInput(S);
    }, e.context.handlers.hexFocus = () => {
      e.context && (e.props.hexInputFocused = !0);
    }, e.context.handlers.hexBlur = (S) => {
      if (!e.context)
        return;
      e.props.hexInputFocused = !1;
      const A = S.target.value;
      Zt(A) && y(A);
    }, e.context.handlers.rangeLimitInput = (S, A, M, T) => (E) => {
      const V = T || E;
      if (!V || !e.context)
        return;
      const F = V.target;
      if (F.value.endsWith("."))
        return;
      const Z = Math.max(Math.min(Number(F.value), M), A);
      F.value = `${Z}`;
      const le = F.id;
      if (S === "hsla") {
        switch (le) {
          case `h-${e.props.id}`:
            e.props.h = Z;
            break;
          case `s-${e.props.id}`:
            e.props.hslaPercent.s = Z;
            break;
          case `l-${e.props.id}`:
            e.props.hslaPercent.l = Z;
        }
        const [K, Y, se] = Sa(e.props.h, 2.55 * e.props.hslaPercent.s, 2.55 * e.props.hslaPercent.l);
        D(K, Y, se);
      } else if (S === "rgba") {
        switch (le) {
          case `r-${e.props.id}`:
            e.props.rgba.r = Z;
            break;
          case `g-${e.props.id}`:
            e.props.rgba.g = Z;
            break;
          case `b-${e.props.id}`:
            e.props.rgba.b = Z;
        }
        const [K, Y, se] = Vu(e.props.rgba.r, e.props.rgba.g, e.props.rgba.b);
        D(K, Y, se);
      } else
        S == "alpha" && (e.props.alpha = Z, D());
    }, e.context.handlers.rangeLimitKeydown = (S, A, M, T) => (E) => {
      if (e.context)
        if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", "Backspace", "Tab", "Enter"].includes(E.key) || E.metaKey || !/[a-zA-Z!@#$%^&*()_+={}\[\]:;"'<,>?\/|\\`~]/g.test(E.key)) {
          if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(E.key)) {
            const V = E.target, F = Number(V.value), Z = E.shiftKey ? 10 * T : T;
            switch (E.key) {
              case "ArrowUp":
                E.preventDefault(), V.value = `${Math.min(F + Z, M)}`;
                break;
              case "ArrowDown":
                E.preventDefault(), V.value = `${Math.max(F - Z, A)}`;
                break;
              case "PageUp":
                E.preventDefault(), V.value = `${Math.min(F + 10 * T, M)}`;
                break;
              case "PageDown":
                E.preventDefault(), V.value = `${Math.max(F - 10 * T, A)}`;
                break;
              case "Home":
                E.preventDefault(), V.value = `${A}`;
                break;
              case "End":
                E.preventDefault(), V.value = `${M}`;
            }
            e.context.handlers.rangeLimitInput(S, A, M, E)();
          }
        } else
          E.preventDefault();
    }, e.context.handlers.swatchClick = (S) => {
      const A = S.target;
      if (A.dataset.colorPrecise) {
        const [M, T, E, V] = Ws(A.dataset.colorPrecise);
        e.props.alpha = V, D(M, T, E), e.props.closeOnSelect && (e.props.expanded = !1);
      }
      e.context && S.type !== "keydown" && e.context.handlers.swatchKeydown(S);
    }, e.context.handlers.swatchKeydown = (S) => {
      var A, M, T, E;
      if (!e.context || !N || !N.length)
        return;
      const V = N.indexOf(S.currentTarget);
      let F = null;
      const Z = function(ie) {
        var ue;
        if (!ie.length)
          return 0;
        const Me = (ue = ie[0].parentElement) === null || ue === void 0 ? void 0 : ue.parentElement;
        if (!Me)
          return 0;
        const gt = Me.getBoundingClientRect().width, St = ie[0].parentElement;
        if (!St)
          return 0;
        const hr = St.getBoundingClientRect(), Xe = window.getComputedStyle(St), op = parseFloat(Xe.marginLeft) + parseFloat(Xe.marginRight), np = hr.width + op;
        return Math.floor(gt / np);
      }(N), le = N.length;
      let K = 0, Y = le, se = !1;
      const ae = N[V].dataset.group;
      if (ae !== void 0) {
        const ie = N.filter((ue) => ue.dataset.group === ae);
        K = N.indexOf(ie[0]), Y = N.indexOf(ie[ie.length - 1]);
      }
      const we = (V - K) % Z;
      if (!S.key || S.key === "Tab")
        return S.key || (e.props.swatchIsUsingKeyboardNav = !1, z = we, o(V)), S.key === "Tab" && (e.props.swatchIsUsingKeyboardNav = !1), void N.forEach((ie) => {
          delete ie.parentElement.dataset.focused;
        });
      if (S.key === "Enter" || S.key === " ")
        return S.preventDefault(), z = we, e.context.handlers.swatchClick(S), void o(V);
      switch (S.key !== "ArrowUp" && S.key !== "ArrowDown" && S.key !== "ArrowLeft" && S.key !== "ArrowRight" || (e.props.swatchIsUsingKeyboardNav = !0, S.preventDefault()), S.key) {
        case "ArrowUp":
          F = Math.max(V - Z, V - (Z - (z - we))), se = !0;
          break;
        case "ArrowDown":
          F = Math.max(V + Z, V + (Z + (z - we))), se = !0;
          break;
        case "ArrowLeft":
          F = V - 1, z = (F - K) % Z;
          break;
        case "ArrowRight":
          F = V + 1, z = (F - K) % Z;
      }
      if (se && F !== null && (F < K || F > Y)) {
        let ie;
        ie = F < K ? (M = (A = N[K - 1]) === null || A === void 0 ? void 0 : A.dataset) === null || M === void 0 ? void 0 : M.group : (E = (T = N[Y + 1]) === null || T === void 0 ? void 0 : T.dataset) === null || E === void 0 ? void 0 : E.group;
        const ue = N.filter((Xe) => Xe.dataset.group === ae), Me = N.filter((Xe) => Xe.dataset.group === ie), gt = (V - K) % Z, St = ue.length % Z || Z, hr = V >= K + ue.length - St;
        if (F < K) {
          const Xe = Me.length % Z || Z;
          F = K - Xe + Math.min(Math.max(gt, z), Xe - 1);
        } else
          F > Y && (F = hr ? Math.min(Y + Math.max(gt, z) + 1, N.indexOf(Me[Me.length - 1])) : Math.min(F, Y));
      }
      if (F !== null && F >= 0 && F < le) {
        o(F), N.forEach((Me) => {
          delete Me.parentElement.dataset.focused;
        });
        const ie = N[F], ue = ie.parentElement;
        ie.focus(), ue.dataset.focused = "true";
      }
    });
  });
}, Yr, We, X("eyeDropper", "color"), X("close", "close"), re("close"), re("next")] }, mr = Ae("tb"), { outer: Mx, inner: ow, wrapper: yl, label: xl, prefix: Tx, suffix: Ox, help: Px, messages: Vx, message: Fx, icon: wl } = Ee(mr), Nx = mr("singleToggle", () => ({ bind: "$attrs", $el: "button", attrs: { id: "$id", type: "button", "aria-label": "$label", "aria-pressed": "$fns.isChecked($onValue, $value)", onClick: "$handlers.toggleValue()", disabled: "$disabled", class: "$classes.input", onBlur: "$handlers.blur" } })), Bx = mr("multiToggle", () => ({ bind: "$attrs", $el: "button", attrs: { type: "button", id: "$id+'_'+$index", "aria-label": "$label", "aria-pressed": "$fns.isChecked($option, $value)", onClick: "$handlers.toggleValue($option)", class: "$classes.input", title: "$option.help", disabled: "$disabled || $option.disabled", onBlur: "$handlers.blur" } })), lo = mr("inputInner", () => ({ bind: "$attrs", $el: "span" })), Rx = mr("options", () => ({ $el: "ul", attrs: { id: "$id", "data-vertical": '$vertical && "true" || "false"', "aria-labelledby": "$id" } })), Hx = mr("option", () => ({ $el: "li", for: ["option", "index", "$options"], attrs: { key: "$option.value", "data-index": "$index" } })), Wx = { schema: Mx(B("$options", yl(xl("$label"), Rx(Hx(Bx(B("$fns.isChecked($option) === true", lo("$slots.default || $slots.on || $option.onLabel || $option.label"), lo("$slots.default || $slots.off || $option.offLabel || $option.label")))))), yl(B("$label && ($slots.default || $slots.on || $onLabel)", xl("$label")), Nx(wl("prefix"), Tx(), B("$_isChecked === true", lo("$slots.default || $slots.on || $onLabel || $label"), lo("$slots.default || $slots.off || $offLabel || $label")), Ox(), wl("suffix")))), Px("$help"), Vx(Fx("$message.value"))), type: "input", family: "button", props: ["options"], features: [function(e) {
  var t, r, o, n;
  e.addProps(["enforced", "multiple", "offLabel", "offValue", "onLabel", "onValue", "vertical", "_isChecked"]), e.props._isChecked = !1, e.props.enforced = R(e.props.enforced), e.props.multiple = R(e.props.multiple), e.props.vertical = R(e.props.vertical), e.props.disabled = R(e.props.disabled), (t = (o = e.props).onValue) !== null && t !== void 0 || (o.onValue = !0), (r = (n = e.props).offValue) !== null && r !== void 0 || (n.offValue = !1), e.on("created", () => {
    var a;
    e.props._isChecked = js(e, null), e.props.options && e.props.multiple && e.input((a = e.value) !== null && a !== void 0 ? a : [], !1), e.context && (e.context.fns.isChecked = (s) => js(e, s), e.context.handlers.toggleValue = (s) => (l) => function(i, u, c) {
      if (c.preventDefault(), u = u && P(u), i.props.options)
        if (i.props.multiple) {
          const f = Array.isArray(i.value) ? [...i.value] : [], p = f.findIndex((g) => j(g, u));
          p > -1 && (!i.props.enforced || f.length > 1) ? f.splice(p, 1) : p === -1 && f.push(u), i.input(f);
        } else
          j(i.value, u) && !i.props.enforced ? i.input(void 0) : i.input(u);
      else
        i.input(j(i.value, i.props.onValue) ? i.props.offValue : i.props.onValue);
    }(e, s, l));
  });
}, We] }, zu = Ae("tb"), { outer: Yu, inner: Zu, wrapper: Uu, label: qu, prefix: Gu, suffix: Xu, help: Ju, messages: Qu, message: ep, icon: Bo } = Ee(zu), tp = zu("input", () => ({ $el: "input", bind: "$attrs", attrs: { name: "$node.name", type: "tel", autocomplete: "off", id: "$id", onChange: "$handlers.handleInput", onInput: "$handlers.handleInput", onKeydown: "$handlers.handleKeyDown", onBeforeinput: "$handlers.handleBeforeInput", readonly: "$readonly", disabled: "$disabled", "data-unit": "$unit", "data-currency": "$currency", "data-display-locale": "$displayLocale", "data-value-locale": "$valueLocale", "data-decimals": "$decimals", "data-trailing": "$trailingZeros", "data-numeric-value": "$_numericValue", "data-align": "$_valueAlignAuto" } })), jx = { schema: Yu(Uu(qu("$label"), Zu(Bo("prefix"), Gu(), tp(), Xu(), Bo("suffix"))), Ju("$help"), Qu(ep("$message.value"))), type: "input", family: "text", props: ["options"], features: [function(e) {
  var t, r, o, n, a, s, l, i, u, c, f, p, g, b, v, $;
  const h = ["unit", "decimals", "minDecimals", "displayLocale", "min", "max", "step", "valueFormat"];
  e.addProps(h), (t = (u = e.props).displayLocale) !== null && t !== void 0 || (u.displayLocale = e.props.locale || "en-US"), (r = (c = e.props).decimals) !== null && r !== void 0 || (c.decimals = null), (o = (f = e.props).minDecimals) !== null && o !== void 0 || (f.minDecimals = null), (n = (p = e.props).min) !== null && n !== void 0 || (p.min = null), (a = (g = e.props).max) !== null && a !== void 0 || (g.max = null), (s = (b = e.props).step) !== null && s !== void 0 || (b.step = 1), (l = (v = e.props).unit) !== null && l !== void 0 || (v.unit = e.props.unit || "percent"), ["acre", "bit", "byte", "celsius", "centimeter", "day", "degree", "fahrenheit", "fluid-ounce", "foot", "gallon", "gigabit", "gigabyte", "gram", "hectare", "hour", "inch", "kilobit", "kilobyte", "kilogram", "kilometer", "liter", "megabit", "megabyte", "meter", "microsecond", "mile", "mile-scandinavian", "milliliter", "millimeter", "millisecond", "minute", "month", "nanosecond", "ounce", "percent", "petabyte", "pound", "second", "stone", "terabit", "terabyte", "week", "yard", "year"].indexOf(e.props.unit) === -1 && (e.props.unit = "percent"), (i = ($ = e.props).valueFormat) !== null && i !== void 0 || ($.valueFormat = "number"), ["string", "number"].indexOf(e.props.valueFormat) === -1 && (e.props.valueFormat = "number"), e.on("created", () => {
    e.context && (Fu(e), e.context.handlers.init(), h.forEach((m) => {
      e.on(`prop:${m}`, () => {
        var k, y;
        (k = e == null ? void 0 : e.context) === null || k === void 0 || k.handlers.init(), (y = e == null ? void 0 : e.context) === null || y === void 0 || y.handlers.setPlaceholder();
      });
    }));
  });
}, We] }, Kx = { schema: Yu(Uu(qu("$label"), Zu(Bo("prefix"), Gu(), tp(), Xu(), Bo("suffix"))), Ju("$help"), Qu(ep("$message.value"))), type: "input", family: "text", props: ["options"], features: [function(e) {
  var t, r, o, n, a, s, l, i, u, c, f, p, g, b, v, $;
  const h = ["currency", "decimals", "minDecimals", "displayLocale", "min", "max", "step", "valueFormat"];
  e.addProps(h), (t = (u = e.props).displayLocale) !== null && t !== void 0 || (u.displayLocale = e.props.locale || "en-US"), (r = (c = e.props).currency) !== null && r !== void 0 || (c.currency = e.props.currency || "USD"), (o = (f = e.props).decimals) !== null && o !== void 0 || (f.decimals = null), (n = (p = e.props).minDecimals) !== null && n !== void 0 || (p.minDecimals = null), (a = (g = e.props).min) !== null && a !== void 0 || (g.min = null), (s = (b = e.props).max) !== null && s !== void 0 || (b.max = null), (l = (v = e.props).step) !== null && l !== void 0 || (v.step = 1), (i = ($ = e.props).valueFormat) !== null && i !== void 0 || ($.valueFormat = "number"), ["string", "number", "integer"].indexOf(e.props.valueFormat) === -1 && (e.props.valueFormat = "number"), e.on("created", () => {
    e.context && (Fu(e), e.context.handlers.init(), h.forEach((m) => {
      e.on(`prop:${m}`, () => {
        var k, y;
        (k = e == null ? void 0 : e.context) === null || k === void 0 || k.handlers.init(), (y = e == null ? void 0 : e.context) === null || y === void 0 || y.handlers.setPlaceholder();
      });
    }));
  });
}, We] };
var _l = Object.freeze({ __proto__: null, autocomplete: rb, colorpicker: Ex, currency: Kx, datepicker: Qb, dropdown: O0, mask: V$, rating: Kv, repeater: kv, slider: zy, taglist: b$, toggle: X0, togglebuttons: Wx, transferlist: vy, unit: jx });
const zx = typeof window < "u" ? setInterval : () => 0, kl = /* @__PURE__ */ new WeakSet();
function Yx(e, t) {
  const r = `${t.props.type}__${e}`, o = `formkit-${e}`, n = t.props.family ? `family:${t.props.family}__${e}` : "", a = `${r}__${n}`;
  if (!(a in It)) {
    const s = It[r] ?? Zx[e] ?? {};
    s[o] = !0, n in It ? It[a] = { ...It[n], ...s } : It[a] = s;
  }
  return It[a] ?? { [o]: !0 };
}
const It = {
  "family:button__wrapper": {
    "group-data-[disabled=true]:grayscale": !0
  },
  "family:button__input": {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "font-bold": !0,
    rounded: !0,
    "outline-none": !0,
    flex: !0,
    "!text-sm": !0,
    "px-7": !0,
    "py-3": !0,
    "items-center": !0,
    "mb-1.5": !0,
    "text-sm": !0,
    "ring-offset-2": !0,
    "ring-blue-500": !0,
    "focus-visible:ring-2": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    shadow: !0,
    "group-data-[prefix-icon]:pl-5": !0,
    "group-data-[suffix-icon]:pr-5": !0,
    border: !0,
    "border-blue-600": !0,
    "text-blue-600": !0,
    "group-[]/repeater:shadow-sm": !0,
    "group-[]/multistep:shadow-sm": !0,
    "dark:border-blue-500": !0
  },
  "family:box__wrapper": {
    "inline-flex": !0,
    "items-center": !0,
    "mb-1": !0,
    "group-data-[multiple]:mb-0": !0
  },
  "family:box__legend": {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "dark:text-neutral-300": !0,
    "mb-2": !0
  },
  "family:box__input": {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    peer: !0,
    "pointer-events-none": !0,
    absolute: !0,
    "h-0": !0,
    "w-0": !0,
    "overflow-hidden": !0,
    "opacity-0": !0
  },
  "family:box__decorator": {
    "mr-1.5": !0,
    "bg-white": !0,
    "ring-blue-500": !0,
    "peer-checked:border-blue-600": !0,
    relative: !0,
    block: !0,
    "text-lg": !0,
    "w-[1em]": !0,
    "aspect-[1/1]": !0,
    border: !0,
    "border-neutral-400": !0,
    "text-transparent": !0,
    "peer-checked:bg-blue-50": !0,
    "peer-checked:text-blue-600": !0,
    "peer-focus-visible:ring-2": !0,
    "peer-focus-visible:ring-offset-1": !0,
    "select-none": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "peer-disabled:bg-neutral-100": !0,
    "group-data-[disabled]:grayscale": !0,
    shadow: !0,
    "peer-disabled:cursor-not-allowed": !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "dark:border-neutral-500": !0,
    "dark:bg-transparent": !0,
    "dark:ring-offset-blue-500": !0,
    "dark:peer-focus-visible:ring-1": !0,
    "dark:peer-disabled:bg-neutral-600/50": !0,
    "dark:peer-checked:bg-blue-900": !0,
    "dark:peer-checked:text-blue-400": !0
  },
  "family:box__decoratorIcon": {
    absolute: !0,
    "left-1/2": !0,
    "top-1/2": !0,
    flex: !0,
    "h-full": !0,
    "w-full": !0,
    "-translate-x-1/2": !0,
    "-translate-y-1/2": !0
  },
  "family:box__option": {
    "mb-1.5": !0,
    "last:mb-0": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:select-none": !0,
    "group-data-[disabled]:data-[disabled]:opacity-100": !0
  },
  "family:box__label": {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "mb-1": !0,
    "!mb-0": !0,
    "!font-normal": !0,
    "!text-sm": !0,
    "dark:text-neutral-300": !0
  },
  "family:box__optionHelp": {
    "text-neutral-500": !0,
    "text-xs": !0,
    "-mt-1": !0,
    "mb-1.5": !0,
    "ml-[min(2em,1.7rem)]": !0,
    relative: !0,
    "left-px": !0
  },
  "family:box__help": {
    "text-neutral-500": !0,
    "text-xs": !0,
    "dark:text-neutral-400": !0,
    "mb-1": !0,
    "group-data-[multiple]:mb-2": !0,
    "group-data-[multiple]:-mt-1.5": !0
  },
  "family:text__wrapper": {
    flex: !0,
    "flex-col": !0,
    "items-start": !0,
    "justify-start": !0,
    "mb-1.5": !0,
    "last:mb-0": !0
  },
  "family:text__label": {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "dark:text-neutral-300": !0,
    "!inline-flex": !0,
    "mb-1": !0
  },
  "family:text__inner": {
    "text-base": !0,
    flex: !0,
    "items-center": !0,
    "w-full": !0,
    "py-2": !0,
    "px-3": !0,
    rounded: !0,
    border: !0,
    "border-neutral-400": !0,
    "bg-white": !0,
    "focus-within:ring-1": !0,
    "focus-within:!ring-blue-500": !0,
    "focus-within:!border-blue-500": !0,
    "group-data-[invalid]:border-red-500": !0,
    "group-data-[invalid]:ring-1": !0,
    "group-data-[invalid]:ring-red-500": !0,
    "group-data-[disabled]:bg-neutral-100": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    shadow: !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "dark:bg-transparent": !0,
    "dark:border-neutral-500": !0,
    "dark:group-data-[disabled]:bg-neutral-800/5": !0,
    "dark:group-data-[invalid]:border-red-500": !0,
    "dark:group-data-[invalid]:ring-red-500": !0
  },
  "family:text__input": {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "text-base": !0,
    "text-neutral-700": !0,
    "min-w-0": !0,
    "min-h-[1.5em]": !0,
    grow: !0,
    "outline-none": !0,
    "bg-transparent": !0,
    "selection:bg-blue-100": !0,
    "placeholder:text-neutral-400": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "dark:placeholder-neutral-400/50": !0,
    "dark:text-neutral-300": !0,
    "border-none": !0,
    "p-0": !0,
    "focus:ring-0": !0
  },
  "family:text__prefixIcon": {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  "family:text__suffixIcon": {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  "family:dropdown__wrapper": {
    "mb-1.5": !0
  },
  "family:dropdown__inner": {
    relative: !0,
    flex: !0,
    "items-center": !0,
    "bg-white": !0,
    border: !0,
    "border-neutral-400": !0,
    rounded: !0,
    "group-data-[is-multiline]:!rounded": !0,
    "focus-within:ring-1": !0,
    "focus-within:!ring-blue-500": !0,
    "focus-within:!border-blue-500": !0,
    "group-data-[invalid]:border-red-500": !0,
    "group-data-[invalid]:ring-1": !0,
    "group-data-[invalid]:ring-red-500": !0,
    "group-data-[disabled]:bg-neutral-100": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    shadow: !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "dark:bg-transparent": !0,
    "dark:border-neutral-500": !0,
    "dark:group-data-[disabled]:bg-neutral-700/40": !0,
    "dark:group-data-[invalid]:border-red-500": !0,
    "dark:group-data-[invalid]:ring-red-500": !0
  },
  "family:dropdown__input": {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    grow: !0,
    "p-2": !0,
    "pr-0": !0,
    "pl-3": !0,
    "text-base": !0,
    "text-neutral-700": !0,
    "text-ellipsis": !0,
    "min-w-0": !0,
    "outline-none": !0,
    "bg-transparent": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "group-data-[prefix-icon]:!pl-0": !0,
    "group-data-[suffix-icon]:!pr-0": !0,
    "placeholder:text-neutral-400": !0,
    "selection:bg-blue-100": !0,
    "dark:placeholder:text-neutral-500": !0,
    "dark:text-neutral-300": !0,
    "border-none": !0,
    "focus:ring-0": !0,
    "bg-none": !0
  },
  "family:dropdown__listboxButton": {
    "w-[2.5em]": !0,
    "self-stretch": !0,
    "text-base": !0,
    flex: !0,
    "items-center": !0,
    "text-neutral-700": !0,
    "z-10": !0,
    "dark:text-neutral-300": !0,
    "data-[disabled]:cursor-not-allowed": !0
  },
  "family:dropdown__removeSelection": {
    "w-[2.5em]": !0,
    "self-stretch": !0,
    "text-base": !0,
    flex: !0,
    "items-center": !0,
    "text-neutral-700": !0,
    "hover:text-red-400": !0,
    "z-10": !0,
    "dark:text-neutral-300": !0
  },
  "family:dropdown__controlLabel": {
    absolute: !0,
    "opacity-0": !0,
    "pointer-events-none": !0,
    "text-[0px]": !0
  },
  "family:dropdown__selectIcon": {
    "text-base": !0,
    "inline-flex": !0,
    "justify-center": !0,
    "w-[2.5em]": !0,
    relative: !0,
    "my-auto": !0,
    "[&>svg]:w-[1em]": !0,
    "[&>svg]:mx-auto": !0
  },
  "family:dropdown__closeIcon": {
    "text-base": !0,
    "w-[0.75em]": !0,
    relative: !0,
    "m-auto": !0
  },
  "family:dropdown__prefixIcon": {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "!ml-2": !0,
    "!mr-0": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  "family:dropdown__suffixIcon": {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "!mr-2": !0,
    "!ml-0": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  "family:dropdown__dropdownWrapper": {
    rounded: !0,
    "shadow-lg": !0,
    "mt-1": !0,
    "overflow-clip": !0,
    "empty:hidden": !0,
    border: !0,
    "border-neutral-300": !0,
    "dark:border-neutral-600": !0,
    "group-data-[expanded]:opacity-100": !0,
    "group-data-[overscroll]:m-0": !0,
    "group-data-[overscroll]:shadow-none": !0,
    "group-data-[overscroll]:border-none": !0
  },
  "family:dropdown__listitemGroup": {
    "group/optgroup": !0,
    "last:pb-0": !0,
    "border-t": !0,
    "border-b": !0,
    "-mb-px": !0,
    "border-neutral-300": !0,
    "dark:border-neutral-600": !0
  },
  "family:dropdown__groupLabel": {
    block: !0,
    "pt-1.5": !0,
    "pb-1": !0,
    "px-2.5": !0,
    "font-bold": !0,
    "pointer-events-none": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  "family:dropdown__listbox": {
    "bg-white": !0,
    rounded: !0,
    "empty:hidden": !0,
    "dark:bg-neutral-800": !0,
    "group-data-[overscroll]:shadow-lg": !0,
    "group-data-[overscroll]:border": !0,
    "group-data-[overscroll]:border-neutral-300": !0,
    "group-data-[overscroll]:dark:border-neutral-600": !0
  },
  "family:dropdown__listitem": {
    relative: !0,
    flex: !0,
    "items-center": !0,
    "px-2": !0,
    "py-1.5": !0,
    "first:pt-2": !0,
    "last:pb-2": !0,
    "text-neutral-700": !0,
    "text-base": !0,
    "data-[is-active]:bg-blue-100": !0,
    "dark:text-neutral-200": !0,
    "dark:data-[is-active]:text-neutral-700": !0,
    "before:content-['']": !0,
    "before:absolute": !0,
    "before:inset-0": !0,
    "data-[is-active]:first:before:rounded": !0,
    "data-[is-active]:first:before:rounded-b-none": !0,
    "data-[is-active]:last:before:rounded": !0,
    "data-[is-active]:last:before:rounded-t-none": !0,
    "data-[is-active]:first:last:before:rounded": !0,
    "data-[is-active]:before:ring-1": !0,
    "data-[is-active]:before:ring-blue-500": !0,
    "data-[is-active]:before:ring-inset": !0,
    "data-[is-active]:before:ring-offset-blue-100": !0,
    "group-[]/optgroup:first:before:!rounded-none": !0,
    "group-[]/optgroup:last:before:!rounded-none": !0
  },
  "family:dropdown__selectedIcon": {
    flex: !0,
    absolute: !0,
    "items-center": !0,
    "text-blue-600": !0,
    "left-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  "family:dropdown__option": {
    "ml-[1.5em]": !0
  },
  "family:dropdown__loadMore": {
    "data-[is-active]:bg-blue-100": !0
  },
  "family:dropdown__loadMoreInner": {
    flex: !0,
    "text-sm": !0,
    "text-neutral-500": !0,
    "p-2": !0,
    "items-center": !0,
    "justify-center": !0,
    "[&>span]:mr-2": !0,
    "cursor-pointer": !0,
    "dark:text-neutral-200": !0,
    "dark:hover:text-blue-500": !0
  },
  "family:dropdown__selectionWrapper": {
    grow: !0,
    flex: !0,
    "items-center": !0,
    "text-neutral-700": !0
  },
  "family:dropdown__selection": {
    grow: !0,
    "text-neutral-700": !0,
    "group-data-[multiple]:p-2": !0,
    "dark:text-neutral-300": !0
  },
  "family:dropdown__tagsWrapper": {
    "w-full": !0
  },
  "family:dropdown__tagWrapper": {
    "group/tag": !0,
    rounded: !0,
    "mr-1": !0,
    "mb-1": !0,
    "outline-none": !0,
    "data-[active-selection=true]:ring-2": !0,
    "data-[active-selection=true]:ring-blue-500": !0
  },
  "family:dropdown__tags": {
    "inline-flex": !0,
    "flex-wrap": !0,
    "items-center": !0,
    "w-full": !0,
    "-mb-1": !0,
    "empty:mb-0": !0
  },
  "family:dropdown__tag": {
    flex: !0,
    "items-center": !0,
    "cursor-default": !0,
    rounded: !0,
    "text-sm": !0,
    "px-1.5": !0,
    "py-0.5": !0,
    "bg-blue-600": !0,
    "text-white": !0,
    "[&>[type=button]]:!w-[0.5em]": !0,
    "[&>[type=button]]:aspect-[1/1]": !0,
    "[&>[type=button]]:!text-inherit": !0,
    "[&>[type=button]]:cursor-pointer": !0,
    "group-data-[active-selection=true]/tag:bg-blue-400": !0,
    "group-data-[active-selection=true]/tag:text-neutral-700": !0
  },
  "family:dropdown__tagLabel": {
    "mr-1": !0
  },
  "family:dropdown__emptyMessage": {
    flex: !0,
    "items-center": !0,
    "px-2": !0,
    "py-1.5": !0,
    "first:pt-2": !0,
    "last:pb-2": !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "aria-selected:text-white": !0,
    "aria-selected:bg-blue-600": !0
  },
  button__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "bg-blue-50": !0,
    "hover:bg-blue-100": !0,
    "dark:text-blue-500": !0,
    "dark:bg-transparent": !0,
    "dark:hover:bg-blue-50/5": !0
  },
  checkbox__decorator: {
    rounded: !0
  },
  checkbox__decoratorIcon: {
    "max-w-[66.66%]": !0
  },
  color__inner: {
    "!w-auto": !0,
    "!p-1.5": !0,
    "!inline-flex": !0,
    "group-data-[prefix-icon]:border": !0,
    "group-data-[prefix-icon]:border-neutral-400": !0,
    "group-data-[suffix-icon]:border": !0,
    "group-data-[suffix-icon]:border-neutral-400": !0,
    "dark:group-data-[prefix-icon]:border-neutral-500": !0,
    "dark:group-data-[suffix-icon]:border-neutral-500": !0
  },
  color__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "!w-14": !0,
    "bg-transparent": !0,
    "cursor-pointer": !0,
    rounded: !0,
    "overflow-clip": !0,
    "[&::-webkit-color-swatch-wrapper]:p-0": !0,
    "[&::-webkit-color-swatch]:border-none": !0,
    "[&::-moz-color-swatch]:border-none": !0,
    "group-data-[prefix-icon]:mx-2": !0,
    "group-data-[suffix-icon]:mx-2": !0
  },
  color__prefixIcon: {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "group-data-[prefix-icon]:m-1.5": !0,
    "group-data-[prefix-icon]:mr-0": !0
  },
  color__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "group-data-[suffix-icon]:m-1.5": !0,
    "group-data-[prefix-icon]:ml-0": !0
  },
  date__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "focus:[&::-webkit-datetime-edit-day-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-month-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-year-field]:bg-blue-100": !0
  },
  "datetime-local__input": {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "focus:[&::-webkit-datetime-edit-day-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-month-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-year-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-hour-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-minute-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-ampm-field]:bg-blue-100": !0
  },
  file__fileList: {
    "group/list": !0,
    peer: !0,
    "w-full": !0,
    "min-w-0": !0,
    "data-[has-multiple]:mb-[1.25em]": !0
  },
  file__fileItemIcon: {
    "h-[1em]": !0,
    "w-[1em]": !0,
    "mr-2": !0,
    "shrink-0": !0
  },
  file__fileItem: {
    flex: !0,
    "min-w-0": !0,
    "items-center": !0,
    "text-neutral-700": !0,
    "mb-1.5": !0,
    "last:mb-0": !0,
    "dark:text-neutral-300": !0
  },
  file__fileName: {
    truncate: !0,
    "min-w-0": !0,
    "w-full": !0,
    shrink: !0,
    "leading-5": !0,
    "group-data-[has-multiple]/list:text-sm": !0
  },
  file__fileRemove: {
    "right-2": !0,
    "ring-blue-500": !0,
    rounded: !0,
    "z-20": !0,
    flex: !0,
    "appearance-none": !0,
    "items-center": !0,
    "text-[0px]": !0,
    "outline-none": !0,
    "hover:!text-red-500": !0,
    "focus-visible:ring-2": !0,
    "group-data-[disabled]:pointer-events-none": !0,
    "group-data-[disabled]:!text-neutral-500": !0,
    "peer-data-[has-multiple]:absolute": !0,
    "peer-data-[has-multiple]:bottom-[max(0.5em,8px)]": !0,
    "peer-data-[has-multiple]:left-3": !0,
    "peer-data-[has-multiple]:text-blue-600": !0,
    "peer-data-[has-multiple]:text-xs": !0,
    "peer-data-[has-multiple]:whitespace-nowrap": !0,
    "group-data-[prefix-icon]:peer-data-[has-multiple]:left-2": !0,
    "dark:hover:!text-red-400": !0
  },
  file__fileRemoveIcon: {
    block: !0,
    "text-base": !0,
    "w-[0.75em]": !0,
    relative: !0,
    "z-10": !0
  },
  file__inner: {
    relative: !0,
    "cursor-pointer": !0,
    "group-data-[has-multiple]:rounded": !0
  },
  file__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "cursor-pointer": !0,
    "text-transparent": !0,
    absolute: !0,
    "inset-0": !0,
    "opacity-0": !0,
    "z-10": !0,
    "file:pointer-events-none": !0,
    "file:w-0": !0,
    "file:h-0": !0,
    "file:overflow-hidden": !0
  },
  file__noFiles: {
    flex: !0,
    "w-full": !0,
    "items-center": !0,
    "text-neutral-400": !0,
    "dark:text-neutral-500": !0
  },
  file__noFilesIcon: {
    "w-[1em]": !0,
    "mr-2": !0
  },
  form__form: {
    "group/form": !0
  },
  form__actions: {
    "": !0
  },
  form__summaryInner: {
    "group/summary": !0,
    border: !0,
    "border-neutral-400": !0,
    "bg-white": !0,
    rounded: !0,
    "py-2": !0,
    "px-3": !0,
    shadow: !0,
    "dark:bg-transparent": !0,
    "dark:border-neutral-500": !0
  },
  form__summaryHeader: {
    "text-lg": !0,
    "text-neutral-700": !0,
    "font-bold": !0,
    "mb-2": !0,
    "dark:text-neutral-300": !0
  },
  form__messages: {
    "": !0
  },
  form__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0,
    "group-[]/summary:text-sm": !0
  },
  form__messageLink: {
    "group-[]/summary:outline-none": !0,
    "group-[]/summary:focus-visible:ring-2": !0,
    "group-[]/summary:ring-blue-600": !0
  },
  month__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "focus:[&::-webkit-datetime-edit-month-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-year-field]:bg-blue-100": !0
  },
  radio__decorator: {
    "rounded-full": !0
  },
  radio__decoratorIcon: {
    "max-w-[50%]": !0
  },
  range__inner: {
    relative: !0,
    "!border-none": !0,
    "!ring-0": !0,
    "!px-0": !0,
    "!bg-transparent": !0,
    "!shadow-none": !0
  },
  range__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "group/input": !0,
    "cursor-pointer": !0,
    "[&::-webkit-slider-runnable-track]:bg-neutral-400/50": !0,
    "[&::-webkit-slider-runnable-track]:h-[0.25em]": !0,
    "[&::-webkit-slider-runnable-track]:rounded": !0,
    "dark:[&::-webkit-slider-runnable-track]:bg-neutral-500/50": !0,
    "[&::-webkit-slider-thumb]:appearance-none": !0,
    "[&::-webkit-slider-thumb]:w-[0.85em]": !0,
    "[&::-webkit-slider-thumb]:aspect-[1/1]": !0,
    "[&::-webkit-slider-thumb]:bg-blue-600": !0,
    "[&::-webkit-slider-thumb]:rounded-full": !0,
    "[&::-webkit-slider-thumb]:relative": !0,
    "[&::-webkit-slider-thumb]:top-1/2": !0,
    "[&::-webkit-slider-thumb]:-translate-y-1/2": !0,
    "[&::-webkit-slider-thumb]:group-data-[disabled]:bg-neutral-500": !0,
    "[&::-webkit-slider-thumb]:group-data-[disabled]:!ring-neutral-300": !0,
    "[&::-webkit-slider-thumb]:focus-visible:ring-2": !0,
    "[&::-webkit-slider-thumb]:focus:!ring-blue-500": !0,
    "[&::-webkit-slider-thumb]:focus:ring-offset-2": !0,
    "[&::-webkit-slider-thumb]:shadow": !0,
    "dark:[&::-webkit-slider-thumb]:group-data-[disabled]:!ring-neutral-600": !0,
    "dark:[&::-webkit-slider-thumb]:focus:ring-offset-neutral-700": !0,
    "[&::-moz-range-track]:bg-neutral-400/50": !0,
    "[&::-moz-range-track]:h-[0.25]": !0,
    "[&::-moz-range-track]:rounded": !0,
    "dark:[&::-moz-range-track]:bg-neutral-500/50": !0,
    "[&::-moz-range-thumb]:appearance-none": !0,
    "[&::-moz-range-thumb]:border-none": !0,
    "[&::-moz-range-thumb]:w-[0.85em]": !0,
    "[&::-moz-range-thumb]:h-[0.85em]": !0,
    "[&::-moz-range-thumb]:bg-blue-600": !0,
    "[&::-moz-range-thumb]:rounded-full": !0,
    "[&::-moz-range-thumb]:group-data-[disabled]:bg-neutral-500": !0,
    "[&::-moz-range-thumb]:group-data-[disabled]:!ring-neutral-300": !0,
    "[&::-moz-range-thumb]:focus-visible:ring-2": !0,
    "[&::-moz-range-thumb]:focus:!ring-blue-500": !0,
    "[&::-moz-range-thumb]:focus:ring-offset-2": !0,
    "[&::-moz-range-thumb]:shadow": !0,
    "dark:[&::-moz-range-thumb]:group-data-[disabled]:!ring-neutral-500": !0,
    "dark:[&::-moz-range-thumb]:focus:ring-offset-neutral-700": !0
  },
  select__wrapper: {
    "mb-1.5": !0
  },
  select__inner: {
    relative: !0,
    flex: !0,
    "items-center": !0,
    "bg-white": !0,
    border: !0,
    "border-neutral-400": !0,
    rounded: !0,
    "focus-within:ring-1": !0,
    "focus-within:!ring-blue-500": !0,
    "focus-within:!border-blue-500": !0,
    "group-data-[invalid]:border-red-500": !0,
    "group-data-[invalid]:ring-1": !0,
    "group-data-[invalid]:ring-red-500": !0,
    "group-data-[disabled]:bg-neutral-100": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    shadow: !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "group-data-[multiple]:rounded": !0,
    "dark:bg-transparent": !0,
    "dark:border-neutral-500": !0,
    "dark:group-data-[disabled]:bg-neutral-800/5": !0,
    "dark:group-data-[invalid]:border-red-500": !0,
    "dark:group-data-[invalid]:ring-red-500": !0
  },
  select__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    grow: !0,
    "p-2": !0,
    "py-2": !0,
    "px-3": !0,
    "pr-[2em]": !0,
    "text-base": !0,
    "text-neutral-700": !0,
    "text-ellipsis": !0,
    "min-w-0": !0,
    "outline-none": !0,
    "bg-transparent": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "group-data-[prefix-icon]:!pl-0": !0,
    "group-data-[suffix-icon]:!pr-0": !0,
    "data-[placeholder]:text-neutral-400": !0,
    "group-data-[multiple]:!p-0": !0,
    "selection:bg-blue-100": !0,
    "dark:data-[placeholder]:text-neutral-400/50": !0,
    "dark:text-neutral-300": !0,
    "border-none": !0,
    "focus:ring-0": !0,
    "bg-none": !0
  },
  select__selectIcon: {
    absolute: !0,
    "w-[1em]": !0,
    "text-neutral-700": !0,
    "pointer-events-none": !0,
    "right-2": !0,
    "group-data-[suffix-icon]:mr-[1.5em]": !0,
    "dark:text-neutral-300": !0
  },
  select__optGroup: {
    "bg-white": !0,
    "text-neutral-700": !0,
    "group/optgroup": !0,
    "group-data-[multiple]:px-1.5": !0,
    "pt-1.5": !0,
    "font-bold": !0,
    "text-sm": !0,
    "dark:bg-neutral-800": !0,
    "dark:text-neutral-300": !0
  },
  select__option: {
    "bg-white": !0,
    "text-neutral-700": !0,
    "group-data-[disabled]:opacity-50": !0,
    "group-data-[disabled]:select-none": !0,
    "group-data-[multiple]:checked:bg-blue-100": !0,
    "group-data-[multiple]:focus:bg-blue-100": !0,
    "group-data-[multiple]:text-sm": !0,
    "group-data-[multiple]:outline-none": !0,
    "group-data-[multiple]:border-none": !0,
    "group-data-[multiple]:py-1.5": !0,
    "group-data-[multiple]:px-2": !0,
    "dark:bg-neutral-800": !0,
    "dark:text-neutral-300": !0,
    "dark:group-data-[multiple]:focus:bg-blue-800": !0,
    "dark:group-data-[multiple]:checked:bg-blue-800": !0
  },
  select__prefixIcon: {
    flex: !0,
    "items-center": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "ml-2": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  select__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "mr-2": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  submit__outer: {
    group: !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "text-base": !0,
    "data-[disabled]:opacity-100": !0
  },
  submit__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "bg-blue-600": !0,
    "!text-white": !0,
    "active:text-blue-100": !0,
    "active:bg-blue-700": !0,
    "hover:bg-blue-700": !0,
    "disabled:border-neutral-400": !0,
    "disabled:bg-neutral-400": !0,
    "disabled:text-neutral-100": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "dark:disabled:border-neutral-100": !0,
    "dark:disabled:bg-neutral-500": !0,
    "dark:disabled:text-neutral-200": !0,
    "dark:text-white": !0,
    "dark:ring-offset-blue-500": !0,
    "before:transition-all": !0,
    "group-data-[loading=true]/form:before:content['']": !0,
    "group-data-[loading=true]/form:before:block": !0,
    "group-data-[loading=true]/form:before:animate-spin": !0,
    "group-data-[loading=true]/form:before:w-5": !0,
    "group-data-[loading=true]/form:before:h-5": !0,
    "group-data-[loading=true]/form:before:rounded-full": !0,
    "group-data-[loading=true]/form:before:mr-3": !0,
    "group-data-[loading=true]/form:before:-ml-1.5": !0,
    "group-data-[loading=true]/form:before:border-2": !0,
    "group-data-[loading=true]/form:before:border-solid": !0,
    "group-data-[loading=true]/form:before:border-white": !0,
    "group-data-[loading=true]/form:before:border-r-transparent": !0
  },
  submit__prefixIcon: {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-100": !0
  },
  submit__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-100": !0
  },
  textarea__inner: {
    flex: !0,
    "items-center": !0,
    "mb-1.5": !0,
    "bg-white": !0,
    border: !0,
    "border-neutral-400": !0,
    rounded: !0,
    "focus-within:ring-1": !0,
    "focus-within:!ring-blue-500": !0,
    "focus-within:!border-blue-500": !0,
    "group-data-[invalid]:border-red-500": !0,
    "group-data-[invalid]:ring-1": !0,
    "group-data-[invalid]:ring-red-500": !0,
    "group-data-[disabled]:bg-neutral-100": !0,
    shadow: !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "dark:border-neutral-500": !0,
    "dark:group-data-[disabled]:bg-neutral-800/5": !0,
    "dark:group-data-[invalid]:border-red-500": !0,
    "dark:group-data-[invalid]:ring-red-500": !0,
    "dark:bg-transparent": !0
  },
  textarea__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "text-base": !0,
    "h-24": !0,
    "text-neutral-700": !0,
    "min-w-0": !0,
    grow: !0,
    shrink: !0,
    "!py-2": !0,
    "!px-3": !0,
    "outline-none": !0,
    "bg-transparent": !0,
    "selection:bg-blue-100": !0,
    "placeholder:text-neutral-400": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "dark:placeholder-neutral-400/50": !0,
    "dark:text-neutral-300": !0,
    "p-0": !0,
    "border-none": !0,
    "focus:ring-0": !0
  },
  textarea__prefixIcon: {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "!ml-2": !0,
    "!mr-0": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  textarea__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "!mr-2": !0,
    "!ml-0": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  time__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "focus:[&::-webkit-datetime-edit-hour-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-minute-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-ampm-field]:bg-blue-100": !0
  },
  week__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "focus:[&::-webkit-datetime-edit-week-field]:bg-blue-100": !0,
    "focus:[&::-webkit-datetime-edit-year-field]:bg-blue-100": !0
  },
  autocomplete__selections: {
    flex: !0,
    absolute: !0,
    "inset-0": !0,
    "group-data-[multiple]:static": !0,
    "group-data-[multiple]:block": !0,
    "group-data-[empty]:hidden": !0,
    "group-data-[multiple]:mt-1.5": !0
  },
  autocomplete__selectionWrapper: {
    "bg-neutral-100": !0,
    rounded: !0,
    "group-data-[multiple]:border": !0,
    "group-data-[multiple]:border-neutral-300": !0,
    "group-data-[multiple]:mb-1.5": !0,
    "outline-none": !0,
    "data-[active-selection=true]:ring-2": !0,
    "data-[active-selection=true]:ring-blue-500": !0,
    "dark:bg-neutral-600": !0,
    "dark:group-data-[multiple]:border-neutral-500": !0,
    "[&.formkit-dropZone]:opacity-25": !0,
    "[&.formkit-touchDropZone]:opacity-25": !0,
    "[&.formkit-touchDragging]:!flex": !0,
    "[&.formkit-longTouch]:opacity-25": !0
  },
  autocomplete__selection: {
    rounded: !0,
    just: !0,
    "pl-2": !0,
    "[&>*]:ml-0": !0,
    "dark:text-neutral-200": !0
  },
  colorpicker__outer: {
    group: !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "text-base": !0,
    "data-[disabled]:cursor-not-allowed": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  colorpicker__help: {
    "text-neutral-500": !0,
    "text-xs": !0,
    "dark:text-neutral-400": !0,
    "group-data-[inline]:-mt-1": !0,
    "group-data-[inline]:mb-2": !0
  },
  colorpicker__inner: {
    relative: !0,
    "inline-flex": !0,
    "!w-auto": !0,
    "pl-2": !0,
    "group-data-[inline]:border-none": !0,
    "group-data-[inline]:shadow-none": !0,
    "group-data-[inline]:p-0": !0,
    "group-data-[inline]:bg-transparent": !0,
    "group-data-[inline]:outline-none": !0,
    "group-data-[inline]:!ring-0": !0,
    "group-data-[inline]:!w-full": !0,
    "group-data-[inline]:rounded": !0
  },
  colorpicker__swatchPreview: {
    "w-full": !0,
    flex: !0,
    "justify-start": !0,
    "items-center": !0,
    rounded: !0,
    "text-sm": !0,
    "cursor-pointer": !0,
    "outline-none": !0
  },
  colorpicker__canvasSwatchPreviewWrapper: {
    relative: !0,
    "before:content-['']": !0,
    "before:absolute": !0,
    "before:inset-0": !0,
    "before:rounded": !0,
    "before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]": !0,
    "before:z-[2]": !0
  },
  colorpicker__canvasSwatchPreview: {
    "text-base": !0,
    rounded: !0,
    "aspect-[1/1]": !0,
    "shrink-0": !0,
    grow: !0,
    "!w-[1.5em]": !0
  },
  colorpicker__valueString: {
    "text-base": !0,
    "text-neutral-700": !0,
    "selection:bg-blue-100": !0,
    "font-mono": !0,
    "inline-block": !0,
    "ml-2": !0,
    "mr-1.5": !0,
    "dark:text-neutral-300": !0,
    "dark:selection:text-neutral-700": !0
  },
  colorpicker__panel: {
    absolute: !0,
    "left-0": !0,
    "top-full": !0,
    "z-[99]": !0,
    flex: !0,
    "w-[100vw]": !0,
    "max-w-[18.5em]": !0,
    "touch-manipulation": !0,
    "flex-col": !0,
    rounded: !0,
    border: !0,
    "bg-white": !0,
    "p-2": !0,
    "shadow-md": !0,
    "group-data-[inline]:static": !0,
    "group-data-[inline]:max-w-none": !0,
    "border-neutral-400": !0,
    "group-data-[inline]:z-auto": !0,
    "group-data-[inline]:w-full": !0,
    "group-data-[inline]:shadow": !0,
    "group-data-[inline]:group-data-[disabled]:!cursor-not-allowed": !0,
    "group-data-[inline]:group-data-[disabled]:!pointer-events-none": !0,
    "group-data-[inline]:[&:has([id^=swatches]:first-child:last-child)]:w-auto": !0,
    "group-data-[inline]:[&:has([id^=swatches]:first-child:last-child)_[id^=swatches]>div]:w-[1.5em]": !0,
    "dark:bg-neutral-800": !0,
    "dark:border-neutral-500": !0,
    "dark:group-data-[inline]:bg-transparent": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:!fixed": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:top-auto": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:max-w-none": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:bottom-0": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:left-0": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:rounded-none": !0
  },
  colorpicker__panelClose: {
    flex: !0,
    "justify-end": !0,
    "items-center": !0,
    "text-neutral-600": !0,
    "mb-1.5": !0,
    "-mt-1": !0,
    "border-none": !0,
    "bg-none": !0,
    "border-b": !0,
    "border-neutral-300": !0,
    "w-[calc(100%+1rem)]": !0,
    "-ml-2": !0,
    "pt-0": !0,
    "pr-2": !0,
    "pb-1.5": !0,
    "pl-2": !0,
    "dark:border-neutral-600": !0
  },
  colorpicker__closeIcon: {
    "w-[2rem]": !0,
    "aspect-[1/1]": !0,
    "p-1": !0,
    rounded: !0,
    border: !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:aspect-[1/1]": !0,
    "[&>svg]:max-w-none": !0,
    "[&>svg]:max-h-none": !0
  },
  colorpicker__controlGroup: {
    grid: !0,
    "[grid-template-areas:'a_a_a'_'b_c_e'_'b_d_e']": !0,
    "mb-2": !0
  },
  colorpicker__LS: {
    "[grid-area:a]": !0,
    relative: !0,
    "mb-2": !0
  },
  colorpicker__canvas: {
    block: !0,
    "w-full": !0
  },
  colorpicker__canvasLS: {
    "aspect-[2/1]": !0,
    "cursor-pointer": !0,
    "rounded-none": !0
  },
  colorpicker__canvasHue: {
    "rounded-none": !0
  },
  colorpicker__canvasAlpha: {
    "rounded-none": !0
  },
  colorpicker__preview: {
    rounded: !0,
    "after:rounded": !0,
    relative: !0,
    "inline-flex": !0,
    "aspect-[1/1]": !0,
    "overflow-hidden": !0,
    "[grid-area:b]": !0,
    "mr-2": !0,
    "after:absolute": !0,
    "after:left-0": !0,
    "after:top-0": !0,
    "after:h-full": !0,
    "after:w-full": !0,
    "after:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]": !0,
    "after:content-['']": !0,
    "w-[2em]": !0,
    "dark:after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]": !0
  },
  colorpicker__hue: {
    "[grid-area:c]": !0,
    relative: !0,
    "inline-flex": !0,
    "h-3/4": !0
  },
  colorpicker__alpha: {
    "[grid-area:d]": !0,
    relative: !0,
    "inline-flex": !0,
    "h-3/4": !0
  },
  colorpicker__eyeDropper: {
    "[grid-area:e]": !0,
    "w-[2em]": !0,
    "ml-2": !0,
    "inline-flex": !0,
    "self-center": !0,
    "justify-center": !0,
    "justify-self-center": !0,
    "aspect-[1/1]": !0,
    rounded: !0,
    border: !0,
    "border-neutral-300": !0,
    "cursor-pointer": !0,
    "content-center": !0,
    "items-center": !0,
    "text-neutral-600": !0,
    "dark:border-neutral-600": !0
  },
  colorpicker__eyeDropperIcon: {
    "w-auto": !0,
    "[&>svg]:w-[1em]": !0,
    "dark:text-neutral-400": !0
  },
  colorpicker__control: {
    absolute: !0,
    "bg-white": !0,
    "shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)]": !0,
    "-translate-y-1/2": !0,
    "-translate-x-1/2": !0,
    "pointer-events-none": !0,
    "data-[prevent-focus-style]:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)]": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-offset-2": !0,
    "focus-visible:ring-blue-500": !0
  },
  colorpicker__controlLS: {
    "w-[10px]": !0,
    "h-[10px]": !0,
    "rounded-full": !0
  },
  colorpicker__controlHue: {
    "w-[4px]": !0,
    "h-[calc(100%-2px)]": !0,
    "top-1/2": !0,
    rounded: !0
  },
  colorpicker__controlAlpha: {
    "w-[4px]": !0,
    "h-[calc(100%-2px)]": !0,
    "top-1/2": !0,
    rounded: !0
  },
  colorpicker__formatField: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    grow: !0
  },
  colorpicker__colorField: {
    "bg-transparent": !0,
    "text-neutral-700": !0,
    border: !0,
    "border-neutral-300": !0,
    "dark:border-neutral-600": !0,
    "dark:text-neutral-300": !0,
    "dark:selection:text-neutral-700": !0
  },
  colorpicker__colorInputGroup: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    grow: !0
  },
  colorpicker__fieldGroup: {
    flex: !0,
    "flex-col": !0,
    "items-center": !0,
    "justify-center": !0,
    "w-full": !0,
    "mr-1": !0,
    "[&>input]:p-1": !0,
    "[&>input]:text-sm": !0,
    "[&>input]:text-neutral-700": !0,
    "[&>input]:selection:bg-blue-100": !0,
    "[&>input]:m-0": !0,
    "[&>input]:grow": !0,
    "[&>input]:shrink": !0,
    "[&>input]:w-full": !0,
    "[&>input]:border": !0,
    "[&>input]:border-neutral-300": !0,
    "[&>input]:rounded": !0,
    "[&>input]:text-center": !0,
    "[&>input]:appearance-none": !0,
    "[&>input::-webkit-outer-spin-button]:appearance-none": !0,
    "[&>input::-webkit-inner-spin-button]:appearance-none": !0,
    "[&>input::-webkit-inner-spin-button]:m-0": !0,
    "[&>input:focus]:outline-none": !0,
    "[&>input:focus]:ring-1": !0,
    "[&>input:focus]:ring-blue-600": !0,
    "[&>input:focus]:border-blue-600": !0,
    "max-[431px]:[&>input]:text-base": !0
  },
  colorpicker__fieldLabel: {
    "text-xs": !0,
    "text-neutral-500": !0,
    "mt-1.5": !0,
    "dark:text-neutral-400": !0
  },
  colorpicker__formatSwitcher: {
    flex: !0,
    "justify-end": !0,
    "self-start": !0,
    uppercase: !0,
    "shrink-0": !0,
    "p-1": !0,
    "mt-0.5": !0,
    "text-neutral-600": !0,
    rounded: !0,
    "select-none": !0,
    "dark:text-neutral-400": !0
  },
  colorpicker__switchIcon: {
    "[&>svg]:w-3": !0
  },
  colorpicker__swatches: {
    "inline-flex": !0,
    "flex-wrap": !0,
    "w-full": !0,
    "justify-self-center": !0,
    "min-w-0": !0,
    "mx-auto": !0,
    "px-[1px]": !0,
    "pt-2": !0,
    "pb-2": !0,
    "mt-2": !0,
    "-mb-2": !0,
    "border-t": !0,
    "border-neutral-300": !0,
    "overflow-auto": !0,
    "max-h-[200px]": !0,
    "select-none": !0,
    "first:-mt-[3px]": !0,
    "first:last:-mb-[3px]": !0,
    "first:last:pb-[2px]": !0,
    "first:pt-px": !0,
    "first:border-t-0": !0,
    "dark:border-neutral-600": !0
  },
  colorpicker__swatchGroup: {
    flex: !0,
    "flex-wrap": !0,
    "w-full": !0,
    "mb-2": !0,
    "last:mb-0": !0
  },
  colorpicker__swatchGroupLabel: {
    "ml-1": !0,
    block: !0,
    "w-full": !0,
    "text-sm": !0,
    "text-neutral-500": !0,
    "dark:text-neutral-400": !0
  },
  colorpicker__swatch: {
    relative: !0,
    "text-base": !0,
    "w-[calc((100%/10)-0.5em)]": !0,
    "max-w-[22px]": !0,
    "m-[0.16em]": !0,
    "cursor-pointer": !0,
    "before:content-['']": !0,
    "before:absolute": !0,
    "before:inset-0": !0,
    "before:rounded": !0,
    "before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]": !0,
    "before:pointer-events-none": !0,
    "before:z-[2]": !0,
    "dark:before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]": !0,
    "data-[active=true]:after:content-['']": !0,
    "data-[active=true]:after:block": !0,
    "data-[active=true]:after:absolute": !0,
    "data-[active=true]:after:w-1.5": !0,
    "data-[active=true]:after:h-1.5": !0,
    "data-[active=true]:after:top-1/2": !0,
    "data-[active=true]:after:left-1/2": !0,
    "data-[active=true]:after:pointer-events-none": !0,
    "data-[active=true]:after:rounded-full": !0,
    "data-[active=true]:after:-translate-x-1/2": !0,
    "data-[active=true]:after:-translate-y-1/2": !0,
    "data-[active=true]:after:bg-white": !0,
    "data-[active=true]:after:z-[2]": !0,
    "data-[active=true]:after:ring-1": !0,
    "data-[active=true]:after:ring-[rgba(0,0,0,0.33)]": !0,
    "[&>canvas]:block": !0,
    "[&>canvas]:w-full": !0,
    "[&>canvas]:aspect-[1/1]": !0,
    "[&>canvas]:rounded": !0,
    "[&>canvas:focus-visible]:outline-none": !0,
    "[&>canvas:focus-visible]:ring-2": !0,
    "[&>canvas:focus-visible]:ring-blue-500": !0,
    "[&>canvas:focus-visible]:ring-offset-2": !0,
    "[&>canvas:focus-visible]:ring-offset-white": !0,
    "dark:[&>canvas:focus-visible]:ring-offset-neutral-700": !0
  },
  datepicker__inner: {
    relative: !0,
    "pl-0": !0
  },
  datepicker__removeSelection: {
    "self-stretch": !0,
    "text-base": !0,
    flex: !0,
    "items-center": !0,
    "ml-1": !0,
    "mr-2": !0,
    "text-neutral-700": !0,
    "hover:text-red-400": !0,
    "z-10": !0,
    "dark:text-neutral-300": !0
  },
  datepicker__clearIcon: {
    "[&>svg]:w-[0.75em]": !0
  },
  datepicker__panelWrapper: {
    "group/panel": !0,
    absolute: !0,
    "min-w-[20em]": !0,
    "top-[calc(100%_+_0.5em)]": !0,
    "shadow-[0_0_1.25em_rgba(0,0,0,.25)]": !0,
    rounded: !0,
    "p-4": !0,
    "bg-white": !0,
    "z-10": !0,
    "dark:bg-neutral-800": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:!fixed": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:top-auto": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:max-w-none": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:bottom-0": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:left-0": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:rounded-none": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:w-full": !0
  },
  datepicker__panelHeader: {
    grid: !0,
    "grid-cols-[2.5em_1fr_2.5em]": !0,
    "justify-center": !0,
    "items-center": !0,
    "border-b-2": !0,
    "border-neutral-300": !0,
    "mb-2": !0,
    "pb-2.5": !0,
    "dark:border-neutral-600": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:grid-cols-[2.5em_1fr_2.5em_2.5em]": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:group-data-[panel=time]/panel:grid-cols-[2.5em_1fr_2.5em]": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:group-data-[panel=month]/panel:grid-cols-[2.5em_1fr_2.5em]": !0
  },
  datepicker__panelClose: {
    "aspect-[1/1]": !0,
    border: !0,
    "border-neutral-300": !0,
    rounded: !0,
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "text-neutral-700": !0,
    "[&_svg]:w-[1.25em]": !0,
    "dark:text-neutral-300": !0,
    "dark:border-neutral-600": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-data-[panel=time]/panel:col-start-3": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-data-[panel=month]/panel:col-start-3": !0
  },
  datepicker__panel: {
    flex: !0,
    "justify-center": !0
  },
  datepicker__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "pl-3": !0,
    "placeholder:text-neutral-400": !0
  },
  datepicker__monthsHeader: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "col-start-2": !0,
    "col-end-2": !0
  },
  datepicker__timeHeader: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "col-start-2": !0,
    "col-end-2": !0
  },
  datepicker__months: {
    grid: !0,
    "grid-cols-3": !0,
    "w-full": !0
  },
  datepicker__month: {
    "m-1.5": !0,
    "p-1.5": !0,
    "text-center": !0,
    "text-neutral-700": !0,
    rounded: !0,
    "bg-neutral-200": !0,
    "aria-selected:!bg-blue-600": !0,
    "aria-selected:!text-white": !0,
    "focus:outline": !0,
    "focus:outline-2": !0,
    "focus:outline-blue-600": !0,
    "focus:outline-offset-2": !0,
    "focus:bg-white": !0,
    "focus:text-neutral-700": !0,
    "data-[is-extra=true]:opacity-25": !0,
    "group-data-[disabled=true]:opacity-50": !0,
    "group-data-[disabled=true]:cursor-default": !0,
    "group-data-[disabled=true]:pointer-events-none": !0,
    "dark:bg-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  datepicker__yearsHeader: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "text-neutral-700": !0,
    "col-start-2": !0,
    "col-end-2": !0,
    "dark:text-neutral-300": !0
  },
  datepicker__years: {
    grid: !0,
    "grid-cols-5": !0,
    "w-full": !0
  },
  datepicker__year: {
    "text-base": !0,
    "text-center": !0,
    "text-neutral-700": !0,
    "items-center": !0,
    "m-1.5": !0,
    "p-1.5": !0,
    rounded: !0,
    "bg-neutral-200": !0,
    "aria-selected:!bg-blue-600": !0,
    "aria-selected:!text-white": !0,
    "focus:outline": !0,
    "focus:outline-2": !0,
    "focus:outline-blue-600": !0,
    "focus:outline-offset-2": !0,
    "focus:bg-white": !0,
    "data-[is-extra=true]:opacity-25": !0,
    "group-data-[disabled=true]:opacity-50": !0,
    "group-data-[disabled=true]:cursor-default": !0,
    "group-data-[disabled=true]:pointer-events-none": !0,
    "dark:bg-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  datepicker__weekDays: {
    grid: !0,
    "grid-cols-7": !0
  },
  datepicker__weekDay: {
    "w-[2.25em]": !0,
    "text-neutral-700": !0,
    "m-1.5": !0,
    rounded: !0,
    "font-medium": !0,
    lowercase: !0,
    "dark:text-neutral-500": !0
  },
  datepicker__calendarWeeks: {
    "": !0
  },
  datepicker__week: {
    grid: !0,
    "grid-cols-7": !0,
    "group-data-[disabled=true]:opacity-50": !0,
    "group-data-[disabled=true]:cursor-default": !0,
    "group-data-[disabled=true]:pointer-events-none": !0
  },
  datepicker__dayCell: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "text-center": !0,
    "text-neutral-700": !0,
    "w-[2.25em]": !0,
    "h-[2.25em]": !0,
    "m-1": !0,
    "p-2": !0,
    rounded: !0,
    "bg-neutral-200": !0,
    "aria-selected:bg-blue-600": !0,
    "aria-selected:text-white": !0,
    "focus:outline": !0,
    "focus:outline-2": !0,
    "focus:outline-blue-600": !0,
    "focus:outline-offset-2": !0,
    "focus:bg-white": !0,
    "data-[is-extra=true]:opacity-25": !0,
    "data-[disabled=true]:opacity-50": !0,
    "data-[disabled=true]:cursor-default": !0,
    "data-[disabled=true]:pointer-events-none": !0,
    "dark:bg-neutral-600": !0,
    "dark:text-neutral-300": !0,
    "dark:aria-selected:bg-blue-600": !0,
    "dark:aria-selected:text-white": !0,
    "dark:focus:outline-blue-600": !0,
    "dark:focus:bg-neutral-200": !0,
    "dark:focus:text-neutral-700": !0
  },
  datepicker__timeInput: {
    "w-full": !0,
    "border-2": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "text-neutral-700": !0,
    "border-neutral-300": !0,
    rounded: !0,
    "p-1.5": !0,
    "my-2.5": !0,
    "focus-visible:outline-blue-600": !0,
    "dark:text-neutral-300": !0,
    "dark:bg-transparent": !0,
    "dark:border-neutral-600": !0
  },
  datepicker__daysHeader: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0
  },
  datepicker__prev: {
    "mr-auto": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    "hover:bg-neutral-100": !0,
    rounded: !0,
    "col-start-1": !0,
    "col-end-1": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:ring-offset-2": !0
  },
  datepicker__prevLabel: {
    hidden: !0
  },
  datepicker__prevIcon: {
    flex: !0,
    "w-[0.75em]": !0,
    "select-none": !0,
    "text-neutral-700": !0,
    "[&>svg]:w-full": !0,
    "dark:text-neutral-300": !0
  },
  datepicker__dayButton: {
    "appearance-none": !0,
    "text-neutral-700": !0,
    "cursor-pointer": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    "border-2": !0,
    "border-neutral-300": !0,
    rounded: !0,
    "mx-1": !0,
    "hover:border-blue-600": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:ring-offset-2": !0,
    "dark:text-neutral-300": !0,
    "dark:border-neutral-600": !0,
    "dark:hover:border-blue-500": !0
  },
  datepicker__monthButton: {
    "appearance-none": !0,
    "text-neutral-700": !0,
    "cursor-pointer": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    "border-2": !0,
    "border-neutral-300": !0,
    rounded: !0,
    "mx-1": !0,
    "hover:border-blue-600": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:ring-offset-2": !0,
    "dark:text-neutral-300": !0,
    "dark:border-neutral-600": !0,
    "dark:hover:border-blue-500": !0
  },
  datepicker__yearButton: {
    "appearance-none": !0,
    "text-neutral-700": !0,
    "cursor-pointer": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    "border-2": !0,
    "border-neutral-300": !0,
    rounded: !0,
    "mx-1": !0,
    "hover:border-blue-600": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:ring-offset-2": !0,
    "dark:text-neutral-300": !0,
    "dark:border-neutral-600": !0,
    "dark:hover:border-blue-500": !0
  },
  datepicker__next: {
    "ml-auto": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    rounded: !0,
    "hover:bg-neutral-100": !0,
    "hover:rounded": !0,
    "col-start-3": !0,
    "col-end-3": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:ring-offset-2": !0
  },
  datepicker__nextLabel: {
    hidden: !0
  },
  datepicker__nextIcon: {
    flex: !0,
    "w-[0.75em]": !0,
    "select-none": !0,
    "text-neutral-700": !0,
    "[&>svg]:w-full": !0,
    "dark:text-neutral-300": !0
  },
  datepicker__openButton: {
    "appearance-none": !0,
    "border-0": !0,
    "bg-transparent": !0,
    flex: !0,
    "p-0": !0,
    "self-stretch": !0,
    "cursor-pointer": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:ring-offset-2": !0,
    "focus-visible:rounded": !0
  },
  datepicker__calendarIcon: {
    "text-neutral-600": !0,
    "focus-visible:text-blue-600": !0,
    flex: !0,
    "w-[1em]": !0,
    "grow-0": !0,
    "shrink-0": !0,
    "self-stretch": !0,
    "select-none": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:max-h-[1em]": !0,
    "[&>svg]:max-w-[1em]": !0
  },
  dropdown__placeholder: {
    "text-neutral-400": !0,
    grow: !0,
    "dark:text-neutral-400/50": !0
  },
  dropdown__selector: {
    flex: !0,
    grow: !0,
    "justify-between": !0,
    "w-full": !0,
    "py-2": !0,
    "pl-3": !0,
    "pr-0": !0,
    "text-base": !0,
    "text-neutral-700": !0,
    "text-left": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "group-data-[prefix-icon]:!pl-0": !0,
    "group-data-[suffix-icon]:!pr-0": !0,
    "data-[placeholder]:text-neutral-400": !0,
    "selection:bg-blue-100": !0,
    "dark:data-[placeholder]:text-neutral-400/50": !0,
    "dark:text-neutral-300": !0
  },
  dropdown__selectIcon: {
    "shrink-0": !0
  },
  dropdown__selectionsWrapper: {
    "w-[85%]": !0,
    "overflow-hidden": !0
  },
  dropdown__selection: {
    "[&>*]:ml-0": !0
  },
  dropdown__selections: {
    "inline-flex": !0,
    "items-center": !0
  },
  dropdown__selectionsItem: {
    "whitespace-nowrap": !0,
    "mr-1": !0
  },
  dropdown__tagWrapper: {
    "[&.formkit-dropZone_.formkit-tag]:opacity-25": !0,
    "[&.formkit-touchDropZone_.formkit-tag]:opacity-25": !0
  },
  dropdown__truncationCount: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "h-[1.5em]": !0,
    rounded: !0,
    "bg-neutral-400": !0,
    "text-white": !0,
    "whitespace-nowrap": !0,
    "text-[11px]": !0,
    "[line-height:1em]": !0,
    "tracking-tighter": !0,
    "leading-0": !0,
    "py-1": !0,
    "px-1": !0,
    "shrink-0": !0,
    "my-auto": !0
  },
  mask__inner: {
    relative: !0
  },
  mask__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "group-data-[has-overlay]:!caret-neutral-700": !0,
    "dark:group-data-[has-overlay]:!caret-neutral-300": !0
  },
  rating__inner: {
    "text-neutral-300": !0
  },
  rating__itemsWrapper: {
    relative: !0,
    "inline-flex": !0,
    "focus:border-blue-600": !0
  },
  rating__onItemRow: {
    "h-full": !0,
    "w-full": !0
  },
  rating__offItemRow: {
    "h-full": !0,
    "w-full": !0
  },
  rating__onItemWrapper: {
    "[&>*]:w-full": !0,
    "[&>*]:h-full": !0,
    "w-full": !0,
    "h-full": !0,
    "text-yellow-400": !0
  },
  rating__offItemWrapper: {
    "text-neutral-400": !0,
    "w-full": !0,
    "h-full": !0,
    "[&>*]:w-full": !0,
    "[&>*]:h-full": !0,
    "dark:text-neutral-500": !0
  },
  rating__ratingItem: {
    relative: !0,
    "focus-within:outline": !0,
    "focus-within:outline-blue-600": !0,
    "w-[1.5em]": !0,
    "h-[1.5em]": !0
  },
  rating__itemLabelInner: {
    "h-px": !0,
    "w-px": !0,
    "overflow-hidden": !0,
    absolute: !0,
    "white-space-nowrap": !0
  },
  rating__itemLabel: {
    absolute: !0,
    "h-full": !0
  },
  rating__ratingIcon: {
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    flex: !0
  },
  rating__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "outline-none": !0
  },
  rating__messages: {
    "mt-1.5": !0
  },
  repeater__outer: {
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "text-base": !0,
    "group/repeater": !0,
    "max-w-full": !0
  },
  repeater__fieldset: {
    "min-w-0": !0
  },
  repeater__legend: {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "dark:text-neutral-300": !0,
    "mb-2": !0
  },
  repeater__content: {
    "min-w-0": !0,
    grow: !0,
    "p-5": !0,
    flex: !0,
    "flex-col": !0,
    "align-center": !0,
    "[&>div[data-type]]:max-w-none": !0,
    "[&>div[data-type]:last-child]:mb-0": !0
  },
  repeater__addButton: {
    "!mb-0": !0,
    "group-data-[disabled]/repeater:pointer-events-none": !0,
    "group-data-[disabled]/repeater:opacity-50": !0,
    "group-data-[disabled]/repeater:grayscale": !0
  },
  repeater__controlLabel: {
    absolute: !0,
    "opacity-0": !0,
    "pointer-events-none": !0,
    "text-[0px]": !0
  },
  repeater__controls: {
    flex: !0,
    "flex-col": !0,
    "items-center": !0,
    "justify-center": !0,
    "bg-neutral-50": !0,
    "p-2": !0,
    "[&>li]:aspect-[1/1]": !0,
    "dark:bg-neutral-800": !0,
    rounded: !0,
    "rounded-tl-none": !0,
    "rounded-bl-none": !0
  },
  repeater__downControl: {
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    "my-1.5": !0,
    "mx-auto": !0,
    flex: !0,
    "items-center": !0,
    "appearance-none": !0,
    "justify-center": !0,
    "aspect-[1/1]": !0,
    "text-neutral-500": !0,
    "hover:text-blue-600": !0,
    "disabled:hover:text-inherit": !0,
    "disabled:opacity-25": !0,
    "disabled:!text-neutral-500": !0,
    "dark:text-neutral-300": !0,
    "dark:disabled:!text-neutral-300": !0,
    "dark:hover:text-blue-500": !0
  },
  repeater__upControl: {
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    "my-1.5": !0,
    "mx-auto": !0,
    flex: !0,
    "items-center": !0,
    "appearance-none": !0,
    "justify-center": !0,
    "aspect-[1/1]": !0,
    "text-neutral-500": !0,
    "hover:text-blue-600": !0,
    "disabled:hover:text-inherit": !0,
    "disabled:opacity-25": !0,
    "disabled:!text-neutral-500": !0,
    "dark:text-neutral-300": !0,
    "dark:disabled:!text-neutral-300": !0,
    "dark:hover:text-blue-500": !0
  },
  repeater__removeControl: {
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    "my-1.5": !0,
    "mx-auto": !0,
    flex: !0,
    "items-center": !0,
    "appearance-none": !0,
    "justify-center": !0,
    "aspect-[1/1]": !0,
    "text-neutral-500": !0,
    "hover:text-blue-600": !0,
    "disabled:hover:text-inherit": !0,
    "disabled:opacity-25": !0,
    "disabled:!text-neutral-500": !0,
    "dark:text-neutral-300": !0,
    "dark:disabled:!text-neutral-300": !0,
    "dark:hover:text-blue-500": !0
  },
  repeater__insertControl: {
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    "my-1.5": !0,
    "mx-auto": !0,
    flex: !0,
    "items-center": !0,
    "appearance-none": !0,
    "justify-center": !0,
    "aspect-[1/1]": !0,
    "text-neutral-500": !0,
    "hover:text-blue-600": !0,
    "disabled:hover:text-inherit": !0,
    "disabled:opacity-25": !0,
    "disabled:!text-neutral-500": !0,
    "dark:text-neutral-300": !0,
    "dark:disabled:!text-neutral-300": !0,
    "dark:hover:text-blue-500": !0
  },
  repeater__help: {
    "text-neutral-500": !0,
    "text-xs": !0,
    "dark:text-neutral-400": !0,
    "mb-2": !0,
    "-mt-1": !0
  },
  repeater__item: {
    flex: !0,
    relative: !0,
    "w-full": !0,
    "mb-2": !0,
    "bg-white": !0,
    border: !0,
    "border-neutral-300": !0,
    rounded: !0,
    shadow: !0,
    "dark:border-neutral-600": !0,
    "dark:bg-transparent": !0,
    "[&.formkit-dropZone]:opacity-30": !0,
    "[&.formkit-dropZone]:pointer-events-none": !0,
    "[&.formkit-dropZone]:blur-[2px]": !0
  },
  repeater__dragHandleWrapper: {
    relative: !0,
    "w-8": !0,
    "bg-neutral-50": !0,
    rounded: !0,
    "rounded-tr-none": !0,
    "rounded-br-none": !0,
    "dark:bg-neutral-800": !0
  },
  repeater__dragHandle: {
    "w-full": !0,
    "h-full": !0,
    flex: !0,
    absolute: !0,
    "top-0": !0,
    "left-0": !0,
    "cursor-grab": !0,
    "active:cursor-grabbing": !0
  },
  repeater__dragHandleIcon: {
    "w-2": !0,
    "m-auto": !0,
    "text-neutral-500": !0,
    "dark:text-neutral-400": !0,
    "[&>svg>path]:fill-current": !0
  },
  repeater__moveDownIcon: {
    block: !0,
    "w-[0.75em]": !0,
    "aspect-[1/1]": !0
  },
  repeater__moveUpIcon: {
    block: !0,
    "w-[0.75em]": !0,
    "aspect-[1/1]": !0
  },
  repeater__removeIcon: {
    block: !0,
    "w-[1.25em]": !0,
    "aspect-[1/1]": !0
  },
  repeater__addIcon: {
    block: !0,
    "w-[1.25em]": !0,
    "aspect-[1/1]": !0
  },
  slider__outer: {
    group: !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "text-base": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  slider__help: {
    "text-neutral-500": !0,
    "text-xs": !0,
    "dark:text-neutral-400": !0,
    "-mt-0.5": !0,
    "mb-1.5": !0
  },
  slider__sliderInner: {
    flex: !0,
    "items-center": !0,
    "[&>[data-type=number]]:mb-0": !0,
    "[&>[data-type=number]]:ml-2.5": !0,
    "[&>[data-type=number]]:shrink": !0,
    "[&>[data-type=number]]:grow-0": !0,
    "[&[data-has-mark-labels=true]_[id^=track]]:mb-5": !0
  },
  slider__track: {
    grow: !0,
    relative: !0,
    "z-20": !0,
    "py-2.5": !0,
    "select-none": !0
  },
  slider__trackWrapper: {
    "px-[2px]": !0,
    "rounded-full": !0,
    "bg-neutral-300": !0,
    "dark:bg-neutral-500": !0
  },
  slider__trackInner: {
    "h-1.5": !0,
    "mx-0.5": !0,
    relative: !0
  },
  slider__prefixIcon: {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  slider__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-300": !0
  },
  slider__fill: {
    "h-full": !0,
    "rounded-full": !0,
    absolute: !0,
    "top-0": !0,
    "-mx-1": !0,
    "bg-blue-600": !0,
    "group-data-[disabled]:bg-neutral-500": !0
  },
  slider__marks: {
    absolute: !0,
    "pointer-events-none": !0,
    "inset-0": !0
  },
  slider__mark: {
    absolute: !0,
    "top-1/2": !0,
    "w-[3px]": !0,
    "h-[3px]": !0,
    "rounded-full": !0,
    "-translate-x-1/2": !0,
    "-translate-y-1/2": !0,
    "bg-neutral-400": !0,
    "data-[active=true]:bg-white": !0
  },
  slider__markLabel: {
    absolute: !0,
    "top-[calc(100%+0.5em)]": !0,
    "left-1/2": !0,
    "text-neutral-400": !0,
    "text-xs": !0,
    "-translate-x-1/2": !0
  },
  slider__handles: {
    "m-0": !0,
    "p-0": !0,
    "list-none": !0
  },
  slider__handle: {
    group: !0,
    "select-none": !0,
    "w-4": !0,
    "h-4": !0,
    "rounded-full": !0,
    "bg-white": !0,
    absolute: !0,
    "top-1/2": !0,
    "left-0": !0,
    "z-30": !0,
    "-translate-x-1/2": !0,
    "-translate-y-1/2": !0,
    "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.5)]": !0,
    "focus-visible:outline-0": !0,
    "focus-visible:ring-2": !0,
    "ring-blue-600": !0,
    "data-[is-target=true]:z-20": !0,
    "dark:bg-neutral-200": !0
  },
  slider__tooltip: {
    absolute: !0,
    "bottom-full": !0,
    "left-1/2": !0,
    "-translate-x-1/2": !0,
    "-translate-y-[4px]": !0,
    "bg-blue-600": !0,
    "text-white": !0,
    "py-1": !0,
    "px-1.5": !0,
    "text-xs": !0,
    "leading-none": !0,
    "whitespace-nowrap": !0,
    rounded: !0,
    "opacity-0": !0,
    "pointer-events-none": !0,
    "transition-opacity": !0,
    'after:content-[""]': !0,
    "after:absolute": !0,
    "after:top-full": !0,
    "after:left-1/2": !0,
    "after:-translate-x-1/2": !0,
    "after:-translate-y-[1px]": !0,
    "after:border-4": !0,
    "after:border-transparent": !0,
    "after:border-t-blue-600": !0,
    "group-hover:opacity-100": !0,
    "group-focus-visible:opacity-100": !0,
    "group-data-[show-tooltip=true]:opacity-100": !0
  },
  slider__linkedValues: {
    flex: !0,
    "items-start": !0,
    "justify-between": !0
  },
  slider__minValue: {
    grow: !0,
    "!max-w-[45%]": !0,
    "mb-0": !0,
    "[&>div>div]:relative": !0,
    '[&>div>div::after]:content-[""]': !0,
    "[&>div>div::after]:absolute": !0,
    "[&>div>div::after]:top-1/2": !0,
    "[&>div>div::after]:left-[105.5%]": !0,
    "[&>div>div::after]:w-[12%]": !0,
    "[&>div>div::after]:h-[1px]": !0,
    "[&>div>div::after]:bg-neutral-400": !0,
    "dark:[&>div>div::after]:bg-neutral-500": !0
  },
  slider__maxValue: {
    grow: !0,
    "!max-w-[45%]": !0,
    "mb-0": !0,
    relative: !0
  },
  slider__chart: {
    relative: !0,
    "z-20": !0,
    "mb-2": !0,
    flex: !0,
    "justify-between": !0,
    "items-center": !0,
    "w-full": !0,
    "aspect-[3/1]": !0
  },
  slider__chartBar: {
    absolute: !0,
    "bottom-0": !0,
    "h-full": !0,
    "bg-neutral-400": !0,
    "data-[active=false]:bg-neutral-300": !0,
    "dark:bg-neutral-500": !0,
    "dark:data-[active=false]:bg-neutral-600": !0
  },
  taglist__inner: {
    "py-2": !0,
    "pr-0": !0,
    "pl-0": !0
  },
  taglist__tags: {
    "pl-3": !0
  },
  taglist__tagWrapper: {
    "[&.formkit-dropZone_.formkit-tag]:opacity-25": !0,
    "[&.formkit-touchDropZone_.formkit-tag]:opacity-25": !0
  },
  taglist__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "!p-0": !0,
    "!w-[0%]": !0,
    "min-w-[1em]": !0,
    "inline-block": !0,
    "-mt-1": !0,
    "first:mt-0": !0,
    "first:mb-1": !0
  },
  taglist__listboxButton: {
    "ml-auto": !0,
    "shrink-0": !0
  },
  toggle__outer: {
    group: !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "text-base": !0,
    "max-w-none": !0
  },
  toggle__altLabel: {
    block: !0,
    "w-full": !0,
    "mb-1.5": !0,
    "font-bold": !0,
    "text-xs": !0,
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  toggle__inner: {
    peer: !0,
    "inline-block": !0,
    "mr-2": !0
  },
  toggle__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    peer: !0,
    absolute: !0,
    "opacity-0": !0,
    "w-0": !0,
    "h-0": !0
  },
  toggle__label: {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "mb-1": !0,
    "dark:text-neutral-300": !0,
    "peer-first:font-normal": !0,
    "peer-first:mb-0": !0
  },
  toggle__innerLabel: {
    absolute: !0,
    "text-neutral-200": !0,
    "text-[10px]": !0,
    "font-bold": !0,
    "select-none": !0,
    "left-full": !0,
    "top-1/2": !0,
    "-translate-x-full": !0,
    "-translate-y-1/2": !0,
    "px-1": !0
  },
  toggle__thumb: {
    relative: !0,
    "p-0.5": !0,
    "left-0": !0,
    "aspect-[1/1]": !0,
    "rounded-full": !0,
    "transition-all": !0,
    "w-[1.25em]": !0,
    "bg-neutral-50": !0,
    "text-neutral-600": !0,
    "shadow-base": !0
  },
  toggle__track: {
    "p-0.5": !0,
    "min-w-[3em]": !0,
    relative: !0,
    "cursor-pointer": !0,
    "select-none": !0,
    "rounded-full": !0,
    "transition-all": !0,
    "bg-neutral-400": !0,
    "peer-checked:bg-blue-600": !0,
    "peer-checked:[&>div:last-child]:left-full": !0,
    "peer-checked:[&>div:last-child]:-translate-x-full": !0,
    "peer-checked:[&>div:first-child:not(:last-child)]:left-0": !0,
    "peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0": !0,
    "shadow-sm": !0,
    "peer-focus-visible:ring-2": !0,
    "peer-focus-visible:ring-blue-500": !0,
    "peer-focus-visible:ring-offset-2": !0,
    "dark:bg-neutral-500": !0
  },
  toggle__valueLabel: {
    "font-bold": !0,
    "text-xs": !0,
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  toggle__wrapper: {
    flex: !0,
    "flex-wrap": !0,
    "items-center": !0,
    "mb-1.5": !0
  },
  togglebuttons__wrapper: {
    "mb-1.5": !0
  },
  togglebuttons__options: {
    "group/options": !0,
    "inline-flex": !0,
    "data-[vertical=true]:flex-col": !0
  },
  togglebuttons__option: {
    "group/option": !0
  },
  togglebuttons__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0,
    "!px-4": !0,
    "!mb-0": !0,
    relative: !0,
    "focus:z-10": !0,
    "group-data-[vertical=true]/options:w-full": !0,
    "justify-center": !0,
    "bg-blue-50": !0,
    "disabled:opacity-50": !0,
    "disabled:cursor-not-allowed": !0,
    "group-data-[disabled]:disabled:opacity-100": !0,
    "dark:bg-transparent": !0,
    "dark:disabled:bg-transparent": !0,
    "dark:disabled:text-blue-500": !0,
    "dark:text-blue-500": !0,
    "aria-[pressed=true]:bg-blue-600": !0,
    "aria-[pressed=true]:text-white": !0,
    "dark:aria-[pressed=true]:bg-blue-600": !0,
    "dark:aria-[pressed=true]:text-white": !0,
    "group-[]/option:!rounded-none": !0,
    "group-data-[vertical=false]/options:group-first/option:!rounded": !0,
    "group-data-[vertical=true]/options:group-first/option:!rounded": !0,
    "group-data-[vertical=false]/options:group-first/option:!rounded-tr-none": !0,
    "group-data-[vertical=false]/options:group-first/option:!rounded-br-none": !0,
    "group-data-[vertical=true]/options:group-first/option:!rounded-bl-none": !0,
    "group-data-[vertical=true]/options:group-first/option:!rounded-br-none": !0,
    "group-data-[vertical=false]/options:group-last/option:!rounded": !0,
    "group-data-[vertical=true]/options:group-last/option:!rounded": !0,
    "group-data-[vertical=false]/options:group-last/option:!rounded-tl-none": !0,
    "group-data-[vertical=false]/options:group-last/option:!rounded-bl-none": !0,
    "group-data-[vertical=true]/options:group-last/option:!rounded-tl-none": !0,
    "group-data-[vertical=true]/options:group-last/option:!rounded-tr-none": !0,
    "group-data-[vertical=false]/options:group-[]/option:!border-r-0": !0,
    "group-data-[vertical=false]/options:group-last/option:!border-r": !0,
    "group-data-[vertical=false]/options:group-[]/option:aria-[pressed=true]:border-x-blue-500": !0,
    "group-data-[vertical=false]/options:group-first/option:aria-[pressed=true]:border-l-blue-600": !0,
    "group-data-[vertical=false]/options:group-last/option:aria-[pressed=true]:border-r-blue-600": !0,
    "dark:group-data-[vertical=false]/options:group-[]/option:aria-[pressed=true]:border-x-blue-600": !0,
    "dark:group-data-[vertical=false]/options:group-first/option:aria-[pressed=true]:border-l-blue-600": !0,
    "dark:group-data-[vertical=false]/options:group-last/option:aria-[pressed=true]:border-r-blue-600": !0,
    "group-data-[vertical=true]/options:group-[]/option:!border-b-0": !0,
    "group-data-[vertical=true]/options:group-last/option:!border-b": !0,
    "group-data-[vertical=true]/options:group-[]/option:aria-[pressed=true]:border-y-blue-500": !0,
    "group-data-[vertical=true]/options:group-first/option:aria-[pressed=true]:border-t-blue-600": !0,
    "group-data-[vertical=true]/options:group-last/option:aria-[pressed=true]:border-b-blue-600": !0,
    "dark:group-data-[vertical=true]/options:group-[]/option:aria-[pressed=true]:border-y-blue-600": !0,
    "dark:group-data-[vertical=true]/options:group-first/option:aria-[pressed=true]:border-t-blue-600": !0,
    "dark:group-data-[vertical=true]/options:group-last/option:aria-[pressed=true]:border-b-blue-600": !0
  },
  transferlist__outer: {
    group: !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "text-base": !0,
    "max-w-none": !0,
    "[&_.dnd-placeholder]:bg-blue-600": !0,
    "[&_.dnd-placeholder]:text-white": !0
  },
  transferlist__wrapper: {
    flex: !0,
    "flex-col": !0,
    "sm:flex-row": !0,
    "justify-between": !0,
    "w-full": !0,
    "max-w-none": !0
  },
  transferlist__help: {
    "text-neutral-500": !0,
    "text-xs": !0,
    "dark:text-neutral-400": !0,
    "pb-2": !0
  },
  transferlist__transferlist: {
    grow: !0,
    shrink: !0,
    "min-w-0": !0,
    shadow: !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "aspect-[4/5]": !0,
    flex: !0,
    "flex-col": !0,
    "h-[350px]": !0,
    border: !0,
    "border-neutral-300": !0,
    rounded: !0,
    "overflow-hidden": !0,
    "select-none": !0,
    "[&:has(:focus-visible)]:ring-1": !0,
    "[&:has(:focus-visible)]:ring-blue-500": !0,
    "dark:border-neutral-600": !0,
    "dark:bg-neutral-900/50": !0
  },
  transferlist__transferlistHeader: {
    flex: !0,
    "bg-neutral-100": !0,
    "text-neutral-600": !0,
    "text-sm": !0,
    "justify-between": !0,
    "items-center": !0,
    "border-b": !0,
    "border-neutral-300": !0,
    "py-2": !0,
    "px-2.5": !0,
    "dark:bg-neutral-700": !0,
    "dark:border-neutral-600": !0,
    "dark:text-neutral-400": !0
  },
  transferlist__transferlistHeaderItemCount: {
    "ml-auto": !0,
    "text-xs": !0,
    "min-w-[1.5em]": !0,
    "[line-height:1.5em]": !0,
    "px-2": !0,
    "text-center": !0,
    "rounded-xl": !0,
    "bg-neutral-200": !0,
    "text-neutral-700": !0,
    "dark:bg-neutral-500": !0,
    "dark:text-neutral-300": !0
  },
  transferlist__transferlistListItems: {
    "list-none": !0,
    "bg-white": !0,
    "h-full": !0,
    "overflow-x-hidden": !0,
    "overflow-y-auto": !0,
    "dark:bg-transparent": !0,
    "outline-none": !0
  },
  transferlist__transferlistListItem: {
    "py-2": !0,
    "px-2": !0,
    "text-neutral-700": !0,
    "ring-1": !0,
    "ring-neutral-200": !0,
    "aria-selected:bg-blue-100": !0,
    "data-[is-active=true]:bg-blue-100": !0,
    "data-[is-active=true]:ring-blue-200": !0,
    "aria-selected:ring-blue-200": !0,
    relative: !0,
    flex: !0,
    "cursor-pointer": !0,
    "items-center": !0,
    "bg-white": !0,
    "pl-[1.5em]": !0,
    "first:-mt-px": !0,
    "first:border-t": !0,
    "aria-selected:z-[2]": !0,
    "aria-selected:border-transparent": !0,
    "aria-selected:ring-1": !0,
    "data-[is-active=true]:z-[2]": !0,
    "data-[is-active=true]:border-transparent": !0,
    "data-[is-active=true]:ring-1": !0,
    "group-data-[is-max=true]:cursor-not-allowed": !0,
    "dark:bg-neutral-800": !0,
    "dark:text-neutral-300": !0,
    "dark:data-[is-active=true]:bg-blue-900": !0,
    "dark:aria-selected:bg-blue-900": !0,
    "dark:ring-neutral-700": !0,
    "dark:data-[is-active=true]:ring-blue-600": !0,
    "dark:aria-selected:ring-blue-600": !0,
    "[&.formkit-dropZone]:bg-blue-100": !0,
    "[&.formkit-selectionDropZone]:bg-blue-100": !0,
    "[&.formkit-touchDropZone]:bg-blue-100": !0,
    "[&.formkit-touchSelectionDropZone]:bg-blue-100": !0,
    "[&.formkit-longTouch]:bg-blue-100": !0,
    "dark:[&.formkit-dropZone]:bg-blue-900": !0,
    "dark:[&.formkit-selectionDropZone]:bg-blue-900": !0,
    "dark:[&.formkit-touchDropZone]:bg-blue-900": !0,
    "dark:[&.formkit-touchSelectionDropZone]:bg-blue-900": !0,
    "dark:[&.formkit-longTouch]:bg-blue-900": !0
  },
  transferlist__transferlistOption: {
    "text-sm": !0
  },
  transferlist__transferControls: {
    "inline-flex": !0,
    "grow-0": !0,
    shrink: !0,
    border: !0,
    "border-neutral-300": !0,
    "flex-row": !0,
    "sm:flex-col": !0,
    "justify-center": !0,
    "my-2": !0,
    "sm:my-auto": !0,
    "mx-auto": !0,
    "sm:mx-2": !0,
    rounded: !0,
    "overflow-clip": !0,
    "shadow-none": !0,
    "group-[]/repeater:shadow-none": !0,
    "group-[]/multistep:shadow-none": !0,
    "dark:border-neutral-800": !0
  },
  transferlist__sourceEmptyMessage: {
    "appearance-none": !0,
    "border-none": !0,
    "w-full": !0,
    "my-2": !0,
    "text-center": !0,
    "text-neutral-500": !0,
    italic: !0
  },
  transferlist__sourceListItems: {
    "group-data-[is-max=true]:opacity-50": !0
  },
  transferlist__targetEmptyMessage: {
    "appearance-none": !0,
    "border-none": !0,
    "w-full": !0,
    "my-2": !0,
    "text-center": !0,
    "text-neutral-500": !0,
    italic: !0
  },
  transferlist__emptyMessageInner: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "p-2": !0,
    "text-sm": !0
  },
  transferlist__transferlistControls: {
    "bg-white": !0,
    "p-2": !0,
    "border-b": !0,
    "border-neutral-200": !0,
    "dark:bg-neutral-700": !0,
    "dark:border-neutral-700": !0
  },
  transferlist__transferlistSearch: {
    flex: !0,
    border: !0,
    "border-neutral-300": !0,
    rounded: !0,
    "items-center": !0,
    "text-neutral-700": !0,
    "selection:bg-blue-100": !0,
    "dark:border-neutral-600": !0,
    "dark:text-neutral-300": !0,
    "dark:selection:bg-blue-100": !0,
    "dark:selection:text-neutral-700": !0,
    "dark:bg-neutral-800": !0
  },
  transferlist__transferlistSearchInput: {
    "border-none": !0,
    "px-2": !0,
    "py-1.5": !0,
    "w-full": !0,
    "bg-transparent": !0,
    "outline-none": !0,
    "text-sm": !0
  },
  transferlist__transferlistSearchClear: {
    flex: !0,
    "w-[0.75em]": !0,
    "mr-2": !0,
    "[&_svg]:w-full": !0
  },
  transferlist__controlLabel: {
    absolute: !0,
    "opacity-0": !0,
    "pointer-events-none": !0,
    "text-[0px]": !0
  },
  transferlist__selectedIcon: {
    "w-[0.75em]": !0,
    absolute: !0,
    "left-[0.5em]": !0,
    "select-none": !0,
    "text-blue-600": !0,
    "dark:text-blue-500": !0
  },
  transferlist__transferlistButton: {
    "sm:w-5": !0,
    relative: !0,
    flex: !0,
    "justify-center": !0,
    "text-sm": !0,
    "shrink-0": !0,
    "box-content": !0,
    "text-neutral-700": !0,
    "disabled:bg-neutral-200": !0,
    "disabled:!text-neutral-400": !0,
    "bg-neutral-50": !0,
    "hover:text-blue-600": !0,
    "cursor-pointer": !0,
    "appearance-none": !0,
    "border-none": !0,
    "p-2.5": !0,
    "hover:z-10": !0,
    "disabled:cursor-not-allowed": !0,
    "disabled:opacity-50": !0,
    "disabled:hover:text-current": !0,
    "disabled:hover:outline-none": !0,
    "focus-visible:ring-1": !0,
    "focus-visible:ring-blue-500": !0,
    "focus-visible:z-10": !0,
    "dark:bg-neutral-800": !0,
    "dark:text-neutral-400": !0,
    "dark:disabled:!text-neutral-600": !0,
    "dark:disabled:bg-neutral-900": !0,
    "dark:disabled:hover:text-current": !0,
    "dark:disabled:hover:outline-none": !0,
    "dark:hover:text-blue-500": !0
  },
  transferlist__fastForwardIcon: {
    "w-4": !0,
    flex: !0,
    "select-none": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:max-w-[1rem]": !0,
    "[&>svg]:max-h-[1rem]": !0,
    "rotate-90": !0,
    "sm:rotate-0": !0
  },
  transferlist__moveRightIcon: {
    "w-4": !0,
    flex: !0,
    "select-none": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:max-w-[1rem]": !0,
    "[&>svg]:max-h-[1rem]": !0,
    "rotate-90": !0,
    "sm:rotate-0": !0
  },
  transferlist__moveLeftIcon: {
    "w-4": !0,
    flex: !0,
    "select-none": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:max-w-[1rem]": !0,
    "[&>svg]:max-h-[1rem]": !0,
    "rotate-90": !0,
    "sm:rotate-0": !0
  },
  transferlist__rewindIcon: {
    "w-4": !0,
    flex: !0,
    "select-none": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:max-w-[1rem]": !0,
    "[&>svg]:max-h-[1rem]": !0,
    "rotate-90": !0,
    "sm:rotate-0": !0
  },
  transferlist__messages: {
    "mt-2": !0
  },
  barcode__barcodeIcon: {
    "w-[1.5em]": !0,
    "text-neutral-700": !0,
    "cursor-pointer": !0,
    "dark:text-neutral-300": !0
  },
  barcode__dialog: {
    "border-none": !0,
    "outline-none": !0,
    "overflow-clip": !0,
    "p-0": !0,
    "bg-black": !0,
    rounded: !0,
    "w-[100%-2rem]": !0,
    "max-w-[30rem]": !0,
    "[&::backdrop]:bg-neutral-800/50": !0
  },
  barcode__video: {
    "w-full": !0,
    "aspect-[1/1]": !0,
    "object-cover": !0,
    block: !0,
    "pointer-events-none": !0
  },
  barcode__closeIcon: {
    "cursor-pointer": !0,
    absolute: !0,
    "bg-white": !0,
    "color-neutral-700": !0,
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    rounded: !0,
    flex: !0,
    "top-2": !0,
    "right-2": !0,
    "z-20": !0,
    "[&>svg]:w-[1.25em]": !0,
    "[&>svg]:h-[1.25em]": !0,
    "[&>svg]:m-auto": !0
  },
  barcode__overlay: {
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0,
    absolute: !0,
    "top-1/2": !0,
    "left-1/2": !0,
    "w-[min(20em,75%)]": !0,
    "aspect-[1/1]": !0,
    "-translate-x-1/2": !0,
    "-translate-y-1/2": !0,
    rounded: !0,
    "pointer-events-none": !0,
    "shadow-[0_0_0_999em_rgba(0,0,0,0.5)]": !0
  },
  barcode__overlayDecorators: {
    absolute: !0,
    "inset-0": !0,
    "z-10": !0
  },
  barcode__overlayDecoratorTopLeft: {
    absolute: !0,
    "w-[1.5rem]": !0,
    "h-[1.5rem]": !0,
    rounded: !0,
    "top-0": !0,
    "left-0": !0,
    "border-l-4": !0,
    "border-t-4": !0,
    "rounded-tr-none": !0,
    "rounded-bl-none": !0
  },
  barcode__overlayDecoratorTopRight: {
    absolute: !0,
    "w-[1.5rem]": !0,
    "h-[1.5rem]": !0,
    rounded: !0,
    "top-0": !0,
    "right-0": !0,
    "border-r-4": !0,
    "border-t-4": !0,
    "rounded-tl-none": !0,
    "rounded-br-none": !0
  },
  barcode__overlayDecoratorBottomRight: {
    absolute: !0,
    "w-[1.5rem]": !0,
    "h-[1.5rem]": !0,
    rounded: !0,
    "bottom-0": !0,
    "right-0": !0,
    "border-r-4": !0,
    "border-b-4": !0,
    "rounded-tr-none": !0,
    "rounded-bl-none": !0
  },
  barcode__overlayDecoratorBottomLeft: {
    absolute: !0,
    "w-[1.5rem]": !0,
    "h-[1.5rem]": !0,
    rounded: !0,
    "bottom-0": !0,
    "left-0": !0,
    "border-l-4": !0,
    "border-b-4": !0,
    "rounded-tl-none": !0,
    "rounded-br-none": !0
  },
  "multi-step__outer": {
    group: !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "text-base": !0,
    "group/multistep": !0,
    "max-w-[32rem]": !0
  },
  "multi-step__wrapper": {
    "group/wrapper": !0,
    "data-[tab-style=tab]:shadow": !0,
    "data-[tab-style=tab]:rounded": !0
  },
  "multi-step__tabs": {
    flex: !0,
    "items-center": !0,
    "group-data-[tab-style=tab]/wrapper:overflow-auto": !0,
    "group-data-[tab-style=tab]/wrapper:border": !0,
    "group-data-[tab-style=tab]/wrapper:border-b-0": !0,
    "group-data-[tab-style=tab]/wrapper:border-neutral-300": !0,
    "group-data-[tab-style=tab]/wrapper:rounded": !0,
    "group-data-[tab-style=tab]/wrapper:rounded-bl-none": !0,
    "group-data-[tab-style=tab]/wrapper:rounded-br-none": !0,
    "dark:group-data-[tab-style=tab]/wrapper:border-neutral-600": !0,
    "group-data-[tab-style=progress]/wrapper:my-6": !0,
    "group-data-[tab-style=progress]/wrapper:justify-around": !0,
    "group-data-[tab-style=progress]/wrapper:overflow-visible": !0,
    "group-data-[tab-style=progress]/wrapper:group-data-[hide-labels=true]/wrapper:mb-3.5": !0
  },
  "multi-step__tab": {
    "group/tab": !0,
    "group-data-[tab-style=tab]/wrapper:relative": !0,
    "group-data-[tab-style=tab]/wrapper:flex": !0,
    "group-data-[tab-style=tab]/wrapper:grow": !0,
    "group-data-[tab-style=tab]/wrapper:text-sm": !0,
    "group-data-[tab-style=tab]/wrapper:items-center": !0,
    "group-data-[tab-style=tab]/wrapper:justify-center": !0,
    "group-data-[tab-style=tab]/wrapper:cursor-pointer": !0,
    "group-data-[tab-style=tab]/wrapper:text-neutral-700": !0,
    "group-data-[tab-style=tab]/wrapper:bg-neutral-100": !0,
    "group-data-[tab-style=tab]/wrapper:py-3.5": !0,
    "group-data-[tab-style=tab]/wrapper:px-4": !0,
    "group-data-[tab-style=tab]/wrapper:border-r": !0,
    "group-data-[tab-style=tab]/wrapper:border-b": !0,
    "group-data-[tab-style=tab]/wrapper:border-neutral-300": !0,
    "group-data-[tab-style=tab]/wrapper:last:border-r-0": !0,
    "group-data-[tab-style=tab]/wrapper:shadow-[inset_0_-0.5em_0.5em_-0.5em_rgba(0,0,0,0.1)]": !0,
    "group-data-[tab-style=tab]/wrapper:data-[active=true]:bg-white": !0,
    "group-data-[tab-style=tab]/wrapper:data-[active=true]:font-bold": !0,
    "group-data-[tab-style=tab]/wrapper:data-[active=true]:border-b-white": !0,
    "group-data-[tab-style=tab]/wrapper:data-[active=true]:z-10": !0,
    "group-data-[tab-style=tab]/wrapper:data-[active=true]:shadow-[0_0_0.5em_0_rgba(0,0,0,0.1)]": !0,
    "dark:group-data-[tab-style=tab]/wrapper:text-neutral-300": !0,
    "dark:group-data-[tab-style=tab]/wrapper:bg-neutral-950/20": !0,
    "dark:group-data-[tab-style=tab]/wrapper:data-[active=true]:bg-transparent": !0,
    "dark:group-data-[tab-style=tab]/wrapper:data-[active=true]:border-b-transparent": !0,
    "dark:group-data-[tab-style=tab]/wrapper:border-neutral-600": !0,
    "group-data-[tab-style=progress]/wrapper:flex": !0,
    "group-data-[tab-style=progress]/wrapper:flex-col": !0,
    "group-data-[tab-style=progress]/wrapper:items-center": !0,
    "group-data-[tab-style=progress]/wrapper:grow": !0,
    "group-data-[tab-style=progress]/wrapper:shrink-0": !0,
    "group-data-[tab-style=progress]/wrapper:relative": !0,
    "group-data-[tab-style=progress]/wrapper:before:block": !0,
    "group-data-[tab-style=progress]/wrapper:before:text-sm": !0,
    "group-data-[tab-style=progress]/wrapper:before:w-[1.25rem]": !0,
    "group-data-[tab-style=progress]/wrapper:before:h-[1.25rem]": !0,
    "group-data-[tab-style=progress]/wrapper:before:border-4": !0,
    "group-data-[tab-style=progress]/wrapper:before:border-neutral-300": !0,
    "group-data-[tab-style=progress]/wrapper:before:rounded-full": !0,
    "group-data-[tab-style=progress]/wrapper:before:bg-white": !0,
    "group-data-[tab-style=progress]/wrapper:before:z-10": !0,
    "dark:group-data-[tab-style=progress]/wrapper:before:border-neutral-600": !0,
    "dark:group-data-[tab-style=progress]/wrapper:before:bg-neutral-950": !0,
    "group-data-[tab-style=progress]/wrapper:after:block": !0,
    "group-data-[tab-style=progress]/wrapper:after:h-1": !0,
    "group-data-[tab-style=progress]/wrapper:after:w-full": !0,
    "group-data-[tab-style=progress]/wrapper:after:absolute": !0,
    "group-data-[tab-style=progress]/wrapper:after:top-[0.5em]": !0,
    "group-data-[tab-style=progress]/wrapper:after:left-[calc(50%+0.5em)]": !0,
    "group-data-[tab-style=progress]/wrapper:after:bg-neutral-300": !0,
    "group-data-[tab-style=progress]/wrapper:data-[valid=true]:data-[visited=true]:after:bg-blue-600": !0,
    "group-data-[tab-style=progress]/wrapper:last:after:hidden": !0,
    "dark:group-data-[tab-style=progress]/wrapper:after:bg-neutral-600": !0,
    "dark:group-data-[tab-style=progress]/wrapper:data-[valid=true]:data-[visited=true]:after:bg-blue-600": !0
  },
  "multi-step__tabLabel": {
    "group-data-[tab-style=progress]/wrapper:absolute": !0,
    "group-data-[tab-style=progress]/wrapper:text-neutral-800": !0,
    "group-data-[tab-style=progress]/wrapper:top-full": !0,
    "group-data-[tab-style=progress]/wrapper:w-full": !0,
    "group-data-[tab-style=progress]/wrapper:whitespace-nowrap": !0,
    "group-data-[tab-style=progress]/wrapper:text-xs": !0,
    "dark:group-data-[tab-style=progress]/wrapper:text-neutral-300": !0
  },
  "multi-step__badge": {
    "bg-red-600": !0,
    absolute: !0,
    "font-mono": !0,
    "font-bold": !0,
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "aspect-[1/1]": !0,
    "[line-height:1.25rem]": !0,
    "text-white": !0,
    "rounded-full": !0,
    "group-data-[valid=true]/tab:bg-blue-600": !0,
    "group-data-[tab-style=tab]/wrapper:text-[0.66rem]": !0,
    "group-data-[tab-style=tab]/wrapper:p-1.5": !0,
    "group-data-[tab-style=tab]/wrapper:w-5": !0,
    "group-data-[tab-style=tab]/wrapper:h-5": !0,
    "group-data-[tab-style=tab]/wrapper:top-1.5": !0,
    "group-data-[tab-style=tab]/wrapper:right-1.5": !0,
    "group-data-[tab-style=progress]/wrapper:w-[1.25rem]": !0,
    "group-data-[tab-style=progress]/wrapper:h-[1.25rem]": !0,
    "group-data-[tab-style=progress]/wrapper:p-1": !0,
    "group-data-[tab-style=progress]/wrapper:text-[10px]": !0,
    "group-data-[tab-style=progress]/wrapper:[line-height:0]": !0,
    "group-data-[tab-style=progress]/wrapper:z-10": !0
  },
  "multi-step__validStepIcon": {
    "w-full": !0,
    "h-full": !0,
    "mt-0.5": !0
  },
  "multi-step__steps": {
    "px-10": !0,
    "pt-8": !0,
    "pb-4": !0,
    "bg-white": !0,
    border: !0,
    "border-neutral-300": !0,
    rounded: !0,
    "dark:bg-transparent": !0,
    "dark:border-neutral-600": !0,
    "group-data-[tab-style=tab]/wrapper:border-t-0": !0,
    "group-data-[tab-style=tab]/wrapper:rounded-tl-none": !0,
    "group-data-[tab-style=tab]/wrapper:rounded-tr-none": !0,
    "group-data-[tab-style=progress]/wrapper:shadow": !0,
    "[&_[data-type]]:max-w-none": !0
  },
  step__stepActions: {
    flex: !0,
    "justify-between": !0,
    "[&>*]:grow-0": !0
  },
  step__stepPrevious: {
    "mr-1.5": !0
  },
  step__stepNext: {
    "ml-auto": !0
  }
}, Zx = {
  outer: {
    group: !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    grow: !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "text-base": !0
  },
  label: {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "mb-1": !0,
    "dark:text-neutral-300": !0
  },
  legend: {
    block: !0,
    "text-neutral-700": !0,
    "text-sm": !0,
    "font-bold": !0,
    "dark:text-neutral-300": !0
  },
  input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "selection:bg-blue-100": !0,
    "selection:text-neutral-700": !0,
    "group-data-[has-overlay]:selection:!text-transparent": !0
  },
  prefixIcon: {
    flex: !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  loaderIcon: {
    "animate-spin": !0,
    flex: !0,
    "items-center": !0,
    "my-auto": !0,
    "ml-2": !0,
    "text-base": !0,
    "text-neutral-500": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  loadMoreInner: {
    flex: !0,
    "text-sm": !0,
    "text-neutral-500": !0,
    "p-2": !0,
    "items-center": !0,
    "justify-center": !0,
    "[&>span]:mr-2": !0
  },
  help: {
    "text-neutral-500": !0,
    "text-xs": !0,
    "dark:text-neutral-400": !0
  },
  message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  overlay: {
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  overlayPlaceholder: {
    "text-neutral-400": !0,
    "dark:text-neutral-400/50": !0
  },
  overlayLiteral: {
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  overlayChar: {
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0
  },
  overlayEnum: {
    "text-neutral-700": !0,
    "dark:text-neutral-300": !0
  }
}, Ux = jl({ text: xe, form: oi, select: ni, month: xe }), qx = bi("genesis"), Gx = Hh("fk-7dff3553dc7", {
  autocomplete: _l.autocomplete,
  colorpicker: _l.colorpicker
});
function nw(e) {
  e.use(Mg, {
    config: {
      rootClasses: Yx
    },
    plugins: [Ux, qx, Gx, ca]
  });
}
export {
  nw as initializeFormKit
};
