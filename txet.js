var kS = Object.defineProperty;
var PS = (e, t, n) => t in e ? kS(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var Bi = (e, t, n) => PS(e, typeof t != "symbol" ? t + "" : t, n);
function TS(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
}
)();
function zy(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Uy = {
    exports: {}
}
  , al = {}
  , Wy = {
    exports: {}
}
  , H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ts = Symbol.for("react.element")
  , bS = Symbol.for("react.portal")
  , RS = Symbol.for("react.fragment")
  , AS = Symbol.for("react.strict_mode")
  , OS = Symbol.for("react.profiler")
  , MS = Symbol.for("react.provider")
  , NS = Symbol.for("react.context")
  , LS = Symbol.for("react.forward_ref")
  , DS = Symbol.for("react.suspense")
  , IS = Symbol.for("react.memo")
  , _S = Symbol.for("react.lazy")
  , ch = Symbol.iterator;
function jS(e) {
    return e === null || typeof e != "object" ? null : (e = ch && e[ch] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Hy = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Ky = Object.assign
  , Gy = {};
function bi(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Gy,
    this.updater = n || Hy
}
bi.prototype.isReactComponent = {};
bi.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
bi.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Xy() {}
Xy.prototype = bi.prototype;
function Zf(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Gy,
    this.updater = n || Hy
}
var ed = Zf.prototype = new Xy;
ed.constructor = Zf;
Ky(ed, bi.prototype);
ed.isPureReactComponent = !0;
var fh = Array.isArray
  , Yy = Object.prototype.hasOwnProperty
  , td = {
    current: null
}
  , qy = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Qy(e, t, n) {
    var r, i = {}, o = null, s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            Yy.call(t, r) && !qy.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: ts,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: td.current
    }
}
function $S(e, t) {
    return {
        $$typeof: ts,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function nd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ts
}
function FS(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var dh = /\/+/g;
function yu(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? FS("" + e.key) : t.toString(36)
}
function Ys(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null)
        s = !0;
    else
        switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ts:
            case bS:
                s = !0
            }
        }
    if (s)
        return s = e,
        i = i(s),
        e = r === "" ? "." + yu(s, 0) : r,
        fh(i) ? (n = "",
        e != null && (n = e.replace(dh, "$&/") + "/"),
        Ys(i, t, n, "", function(u) {
            return u
        })) : i != null && (nd(i) && (i = $S(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(dh, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (s = 0,
    r = r === "" ? "." : r + ":",
    fh(e))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + yu(o, a);
            s += Ys(o, t, n, l, i)
        }
    else if (l = jS(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(o = e.next()).done; )
            o = o.value,
            l = r + yu(o, a++),
            s += Ys(o, t, n, l, i);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}
function Ss(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Ys(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }),
    r
}
function BS(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ye = {
    current: null
}
  , qs = {
    transition: null
}
  , VS = {
    ReactCurrentDispatcher: Ye,
    ReactCurrentBatchConfig: qs,
    ReactCurrentOwner: td
};
function Jy() {
    throw Error("act(...) is not supported in production builds of React.")
}
H.Children = {
    map: Ss,
    forEach: function(e, t, n) {
        Ss(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ss(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Ss(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!nd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
H.Component = bi;
H.Fragment = RS;
H.Profiler = OS;
H.PureComponent = Zf;
H.StrictMode = AS;
H.Suspense = DS;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = VS;
H.act = Jy;
H.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ky({}, e.props)
      , i = e.key
      , o = e.ref
      , s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        s = td.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Yy.call(t, l) && !qy.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: ts,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
}
;
H.createContext = function(e) {
    return e = {
        $$typeof: NS,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: MS,
        _context: e
    },
    e.Consumer = e
}
;
H.createElement = Qy;
H.createFactory = function(e) {
    var t = Qy.bind(null, e);
    return t.type = e,
    t
}
;
H.createRef = function() {
    return {
        current: null
    }
}
;
H.forwardRef = function(e) {
    return {
        $$typeof: LS,
        render: e
    }
}
;
H.isValidElement = nd;
H.lazy = function(e) {
    return {
        $$typeof: _S,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: BS
    }
}
;
H.memo = function(e, t) {
    return {
        $$typeof: IS,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
H.startTransition = function(e) {
    var t = qs.transition;
    qs.transition = {};
    try {
        e()
    } finally {
        qs.transition = t
    }
}
;
H.unstable_act = Jy;
H.useCallback = function(e, t) {
    return Ye.current.useCallback(e, t)
}
;
H.useContext = function(e) {
    return Ye.current.useContext(e)
}
;
H.useDebugValue = function() {}
;
H.useDeferredValue = function(e) {
    return Ye.current.useDeferredValue(e)
}
;
H.useEffect = function(e, t) {
    return Ye.current.useEffect(e, t)
}
;
H.useId = function() {
    return Ye.current.useId()
}
;
H.useImperativeHandle = function(e, t, n) {
    return Ye.current.useImperativeHandle(e, t, n)
}
;
H.useInsertionEffect = function(e, t) {
    return Ye.current.useInsertionEffect(e, t)
}
;
H.useLayoutEffect = function(e, t) {
    return Ye.current.useLayoutEffect(e, t)
}
;
H.useMemo = function(e, t) {
    return Ye.current.useMemo(e, t)
}
;
H.useReducer = function(e, t, n) {
    return Ye.current.useReducer(e, t, n)
}
;
H.useRef = function(e) {
    return Ye.current.useRef(e)
}
;
H.useState = function(e) {
    return Ye.current.useState(e)
}
;
H.useSyncExternalStore = function(e, t, n) {
    return Ye.current.useSyncExternalStore(e, t, n)
}
;
H.useTransition = function() {
    return Ye.current.useTransition()
}
;
H.version = "18.3.1";
Wy.exports = H;
var S = Wy.exports;
const Re = zy(S)
  , hc = TS({
    __proto__: null,
    default: Re
}, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zS = S
  , US = Symbol.for("react.element")
  , WS = Symbol.for("react.fragment")
  , HS = Object.prototype.hasOwnProperty
  , KS = zS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , GS = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Zy(e, t, n) {
    var r, i = {}, o = null, s = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
    for (r in t)
        HS.call(t, r) && !GS.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: US,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: KS.current
    }
}
al.Fragment = WS;
al.jsx = Zy;
al.jsxs = Zy;
Uy.exports = al;
var k = Uy.exports
  , e0 = {
    exports: {}
}
  , ht = {}
  , t0 = {
    exports: {}
}
  , n0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(M, D) {
        var $ = M.length;
        M.push(D);
        e: for (; 0 < $; ) {
            var Y = $ - 1 >>> 1
              , ee = M[Y];
            if (0 < i(ee, D))
                M[Y] = D,
                M[$] = ee,
                $ = Y;
            else
                break e
        }
    }
    function n(M) {
        return M.length === 0 ? null : M[0]
    }
    function r(M) {
        if (M.length === 0)
            return null;
        var D = M[0]
          , $ = M.pop();
        if ($ !== D) {
            M[0] = $;
            e: for (var Y = 0, ee = M.length, bn = ee >>> 1; Y < bn; ) {
                var on = 2 * (Y + 1) - 1
                  , $i = M[on]
                  , sn = on + 1
                  , Lr = M[sn];
                if (0 > i($i, $))
                    sn < ee && 0 > i(Lr, $i) ? (M[Y] = Lr,
                    M[sn] = $,
                    Y = sn) : (M[Y] = $i,
                    M[on] = $,
                    Y = on);
                else if (sn < ee && 0 > i(Lr, $))
                    M[Y] = Lr,
                    M[sn] = $,
                    Y = sn;
                else
                    break e
            }
        }
        return D
    }
    function i(M, D) {
        var $ = M.sortIndex - D.sortIndex;
        return $ !== 0 ? $ : M.id - D.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date
          , a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , y = !1
      , g = !1
      , m = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(M) {
        for (var D = n(u); D !== null; ) {
            if (D.callback === null)
                r(u);
            else if (D.startTime <= M)
                r(u),
                D.sortIndex = D.expirationTime,
                t(l, D);
            else
                break;
            D = n(u)
        }
    }
    function C(M) {
        if (m = !1,
        v(M),
        !g)
            if (n(l) !== null)
                g = !0,
                X(E);
            else {
                var D = n(u);
                D !== null && V(C, D.startTime - M)
            }
    }
    function E(M, D) {
        g = !1,
        m && (m = !1,
        p(b),
        b = -1),
        y = !0;
        var $ = d;
        try {
            for (v(D),
            f = n(l); f !== null && (!(f.expirationTime > D) || M && !O()); ) {
                var Y = f.callback;
                if (typeof Y == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var ee = Y(f.expirationTime <= D);
                    D = e.unstable_now(),
                    typeof ee == "function" ? f.callback = ee : f === n(l) && r(l),
                    v(D)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var bn = !0;
            else {
                var on = n(u);
                on !== null && V(C, on.startTime - D),
                bn = !1
            }
            return bn
        } finally {
            f = null,
            d = $,
            y = !1
        }
    }
    var P = !1
      , T = null
      , b = -1
      , L = 5
      , x = -1;
    function O() {
        return !(e.unstable_now() - x < L)
    }
    function I() {
        if (T !== null) {
            var M = e.unstable_now();
            x = M;
            var D = !0;
            try {
                D = T(!0, M)
            } finally {
                D ? j() : (P = !1,
                T = null)
            }
        } else
            P = !1
    }
    var j;
    if (typeof h == "function")
        j = function() {
            h(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var U = new MessageChannel
          , B = U.port2;
        U.port1.onmessage = I,
        j = function() {
            B.postMessage(null)
        }
    } else
        j = function() {
            w(I, 0)
        }
        ;
    function X(M) {
        T = M,
        P || (P = !0,
        j())
    }
    function V(M, D) {
        b = w(function() {
            M(e.unstable_now())
        }, D)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(M) {
        M.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        g || y || (g = !0,
        X(E))
    }
    ,
    e.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < M ? Math.floor(1e3 / M) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(M) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var D = 3;
            break;
        default:
            D = d
        }
        var $ = d;
        d = D;
        try {
            return M()
        } finally {
            d = $
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(M, D) {
        switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            M = 3
        }
        var $ = d;
        d = M;
        try {
            return D()
        } finally {
            d = $
        }
    }
    ,
    e.unstable_scheduleCallback = function(M, D, $) {
        var Y = e.unstable_now();
        switch (typeof $ == "object" && $ !== null ? ($ = $.delay,
        $ = typeof $ == "number" && 0 < $ ? Y + $ : Y) : $ = Y,
        M) {
        case 1:
            var ee = -1;
            break;
        case 2:
            ee = 250;
            break;
        case 5:
            ee = 1073741823;
            break;
        case 4:
            ee = 1e4;
            break;
        default:
            ee = 5e3
        }
        return ee = $ + ee,
        M = {
            id: c++,
            callback: D,
            priorityLevel: M,
            startTime: $,
            expirationTime: ee,
            sortIndex: -1
        },
        $ > Y ? (M.sortIndex = $,
        t(u, M),
        n(l) === null && M === n(u) && (m ? (p(b),
        b = -1) : m = !0,
        V(C, $ - Y))) : (M.sortIndex = ee,
        t(l, M),
        g || y || (g = !0,
        X(E))),
        M
    }
    ,
    e.unstable_shouldYield = O,
    e.unstable_wrapCallback = function(M) {
        var D = d;
        return function() {
            var $ = d;
            d = D;
            try {
                return M.apply(this, arguments)
            } finally {
                d = $
            }
        }
    }
}
)(n0);
t0.exports = n0;
var XS = t0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var YS = S
  , dt = XS;
function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var r0 = new Set
  , Po = {};
function Rr(e, t) {
    hi(e, t),
    hi(e + "Capture", t)
}
function hi(e, t) {
    for (Po[e] = t,
    e = 0; e < t.length; e++)
        r0.add(t[e])
}
var vn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , mc = Object.prototype.hasOwnProperty
  , qS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , ph = {}
  , hh = {};
function QS(e) {
    return mc.call(hh, e) ? !0 : mc.call(ph, e) ? !1 : qS.test(e) ? hh[e] = !0 : (ph[e] = !0,
    !1)
}
function JS(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function ZS(e, t, n, r) {
    if (t === null || typeof t > "u" || JS(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function qe(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = s
}
var je = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    je[e] = new qe(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    je[t] = new qe(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    je[e] = new qe(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    je[e] = new qe(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    je[e] = new qe(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    je[e] = new qe(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    je[e] = new qe(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    je[e] = new qe(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    je[e] = new qe(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var rd = /[\-:]([a-z])/g;
function id(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(rd, id);
    je[t] = new qe(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(rd, id);
    je[t] = new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(rd, id);
    je[t] = new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    je[e] = new qe(e,1,!1,e.toLowerCase(),null,!1,!1)
});
je.xlinkHref = new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    je[e] = new qe(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function od(e, t, n, r) {
    var i = je.hasOwnProperty(t) ? je[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ZS(t, n, i, r) && (n = null),
    r || i === null ? QS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var kn = YS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Cs = Symbol.for("react.element")
  , Ur = Symbol.for("react.portal")
  , Wr = Symbol.for("react.fragment")
  , sd = Symbol.for("react.strict_mode")
  , gc = Symbol.for("react.profiler")
  , i0 = Symbol.for("react.provider")
  , o0 = Symbol.for("react.context")
  , ad = Symbol.for("react.forward_ref")
  , yc = Symbol.for("react.suspense")
  , vc = Symbol.for("react.suspense_list")
  , ld = Symbol.for("react.memo")
  , Mn = Symbol.for("react.lazy")
  , s0 = Symbol.for("react.offscreen")
  , mh = Symbol.iterator;
function Vi(e) {
    return e === null || typeof e != "object" ? null : (e = mh && e[mh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var me = Object.assign, vu;
function eo(e) {
    if (vu === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            vu = t && t[1] || ""
        }
    return `
` + vu + e
}
var xu = !1;
function wu(e, t) {
    if (!e || xu)
        return "";
    xu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a]; )
                a--;
            for (; 1 <= s && 0 <= a; s--,
            a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--,
                            a--,
                            0 > a || i[s] !== o[a]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        xu = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? eo(e) : ""
}
function eC(e) {
    switch (e.tag) {
    case 5:
        return eo(e.type);
    case 16:
        return eo("Lazy");
    case 13:
        return eo("Suspense");
    case 19:
        return eo("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = wu(e.type, !1),
        e;
    case 11:
        return e = wu(e.type.render, !1),
        e;
    case 1:
        return e = wu(e.type, !0),
        e;
    default:
        return ""
    }
}
function xc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Wr:
        return "Fragment";
    case Ur:
        return "Portal";
    case gc:
        return "Profiler";
    case sd:
        return "StrictMode";
    case yc:
        return "Suspense";
    case vc:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case o0:
            return (e.displayName || "Context") + ".Consumer";
        case i0:
            return (e._context.displayName || "Context") + ".Provider";
        case ad:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case ld:
            return t = e.displayName || null,
            t !== null ? t : xc(e.type) || "Memo";
        case Mn:
            t = e._payload,
            e = e._init;
            try {
                return xc(e(t))
            } catch {}
        }
    return null
}
function tC(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return xc(t);
    case 8:
        return t === sd ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Hn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function a0(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function nC(e) {
    var t = a0(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s,
                o.call(this, s)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Es(e) {
    e._valueTracker || (e._valueTracker = nC(e))
}
function l0(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = a0(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function xa(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function wc(e, t) {
    var n = t.checked;
    return me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function gh(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Hn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function u0(e, t) {
    t = t.checked,
    t != null && od(e, "checked", t, !1)
}
function Sc(e, t) {
    u0(e, t);
    var n = Hn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Cc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Cc(e, t.type, Hn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function yh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Cc(e, t, n) {
    (t !== "number" || xa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var to = Array.isArray;
function si(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Hn(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Ec(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(N(91));
    return me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function vh(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(N(92));
            if (to(n)) {
                if (1 < n.length)
                    throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Hn(n)
    }
}
function c0(e, t) {
    var n = Hn(t.value)
      , r = Hn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function xh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function f0(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function kc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? f0(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ks, d0 = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ks = ks || document.createElement("div"),
        ks.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ks.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function To(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var co = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , rC = ["Webkit", "ms", "Moz", "O"];
Object.keys(co).forEach(function(e) {
    rC.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        co[t] = co[e]
    })
});
function p0(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || co.hasOwnProperty(e) && co[e] ? ("" + t).trim() : t + "px"
}
function h0(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = p0(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var iC = me({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Pc(e, t) {
    if (t) {
        if (iC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(N(62))
    }
}
function Tc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var bc = null;
function ud(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Rc = null
  , ai = null
  , li = null;
function wh(e) {
    if (e = is(e)) {
        if (typeof Rc != "function")
            throw Error(N(280));
        var t = e.stateNode;
        t && (t = dl(t),
        Rc(e.stateNode, e.type, t))
    }
}
function m0(e) {
    ai ? li ? li.push(e) : li = [e] : ai = e
}
function g0() {
    if (ai) {
        var e = ai
          , t = li;
        if (li = ai = null,
        wh(e),
        t)
            for (e = 0; e < t.length; e++)
                wh(t[e])
    }
}
function y0(e, t) {
    return e(t)
}
function v0() {}
var Su = !1;
function x0(e, t, n) {
    if (Su)
        return e(t, n);
    Su = !0;
    try {
        return y0(e, t, n)
    } finally {
        Su = !1,
        (ai !== null || li !== null) && (v0(),
        g0())
    }
}
function bo(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = dl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(N(231, t, typeof n));
    return n
}
var Ac = !1;
if (vn)
    try {
        var zi = {};
        Object.defineProperty(zi, "passive", {
            get: function() {
                Ac = !0
            }
        }),
        window.addEventListener("test", zi, zi),
        window.removeEventListener("test", zi, zi)
    } catch {
        Ac = !1
    }
function oC(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var fo = !1
  , wa = null
  , Sa = !1
  , Oc = null
  , sC = {
    onError: function(e) {
        fo = !0,
        wa = e
    }
};
function aC(e, t, n, r, i, o, s, a, l) {
    fo = !1,
    wa = null,
    oC.apply(sC, arguments)
}
function lC(e, t, n, r, i, o, s, a, l) {
    if (aC.apply(this, arguments),
    fo) {
        if (fo) {
            var u = wa;
            fo = !1,
            wa = null
        } else
            throw Error(N(198));
        Sa || (Sa = !0,
        Oc = u)
    }
}
function Ar(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function w0(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Sh(e) {
    if (Ar(e) !== e)
        throw Error(N(188))
}
function uC(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Ar(e),
        t === null)
            throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n)
                    return Sh(i),
                    e;
                if (o === r)
                    return Sh(i),
                    t;
                o = o.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return)
            n = i,
            r = o;
        else {
            for (var s = !1, a = i.child; a; ) {
                if (a === n) {
                    s = !0,
                    n = i,
                    r = o;
                    break
                }
                if (a === r) {
                    s = !0,
                    r = i,
                    n = o;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        s = !0,
                        n = o,
                        r = i;
                        break
                    }
                    if (a === r) {
                        s = !0,
                        r = o,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!s)
                    throw Error(N(189))
            }
        }
        if (n.alternate !== r)
            throw Error(N(190))
    }
    if (n.tag !== 3)
        throw Error(N(188));
    return n.stateNode.current === n ? e : t
}
function S0(e) {
    return e = uC(e),
    e !== null ? C0(e) : null
}
function C0(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = C0(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var E0 = dt.unstable_scheduleCallback
  , Ch = dt.unstable_cancelCallback
  , cC = dt.unstable_shouldYield
  , fC = dt.unstable_requestPaint
  , Ce = dt.unstable_now
  , dC = dt.unstable_getCurrentPriorityLevel
  , cd = dt.unstable_ImmediatePriority
  , k0 = dt.unstable_UserBlockingPriority
  , Ca = dt.unstable_NormalPriority
  , pC = dt.unstable_LowPriority
  , P0 = dt.unstable_IdlePriority
  , ll = null
  , qt = null;
function hC(e) {
    if (qt && typeof qt.onCommitFiberRoot == "function")
        try {
            qt.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var It = Math.clz32 ? Math.clz32 : yC
  , mC = Math.log
  , gC = Math.LN2;
function yC(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (mC(e) / gC | 0) | 0
}
var Ps = 64
  , Ts = 4194304;
function no(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Ea(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , o = e.pingedLanes
      , s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? r = no(a) : (o &= s,
        o !== 0 && (r = no(o)))
    } else
        s = n & ~i,
        s !== 0 ? r = no(s) : o !== 0 && (r = no(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    o = t & -t,
    i >= o || i === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - It(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function vC(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function xC(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - It(o)
          , a = 1 << s
          , l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = vC(a, t)) : l <= t && (e.expiredLanes |= a),
        o &= ~a
    }
}
function Mc(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function T0() {
    var e = Ps;
    return Ps <<= 1,
    !(Ps & 4194240) && (Ps = 64),
    e
}
function Cu(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ns(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - It(t),
    e[t] = n
}
function wC(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - It(n)
          , o = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~o
    }
}
function fd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - It(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var J = 0;
function b0(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var R0, dd, A0, O0, M0, Nc = !1, bs = [], jn = null, $n = null, Fn = null, Ro = new Map, Ao = new Map, Ln = [], SC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Eh(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        jn = null;
        break;
    case "dragenter":
    case "dragleave":
        $n = null;
        break;
    case "mouseover":
    case "mouseout":
        Fn = null;
        break;
    case "pointerover":
    case "pointerout":
        Ro.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Ao.delete(t.pointerId)
    }
}
function Ui(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    },
    t !== null && (t = is(t),
    t !== null && dd(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function CC(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return jn = Ui(jn, e, t, n, r, i),
        !0;
    case "dragenter":
        return $n = Ui($n, e, t, n, r, i),
        !0;
    case "mouseover":
        return Fn = Ui(Fn, e, t, n, r, i),
        !0;
    case "pointerover":
        var o = i.pointerId;
        return Ro.set(o, Ui(Ro.get(o) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return o = i.pointerId,
        Ao.set(o, Ui(Ao.get(o) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function N0(e) {
    var t = ur(e.target);
    if (t !== null) {
        var n = Ar(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = w0(n),
                t !== null) {
                    e.blockedOn = t,
                    M0(e.priority, function() {
                        A0(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Qs(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Lc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            bc = r,
            n.target.dispatchEvent(r),
            bc = null
        } else
            return t = is(n),
            t !== null && dd(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function kh(e, t, n) {
    Qs(e) && n.delete(t)
}
function EC() {
    Nc = !1,
    jn !== null && Qs(jn) && (jn = null),
    $n !== null && Qs($n) && ($n = null),
    Fn !== null && Qs(Fn) && (Fn = null),
    Ro.forEach(kh),
    Ao.forEach(kh)
}
function Wi(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Nc || (Nc = !0,
    dt.unstable_scheduleCallback(dt.unstable_NormalPriority, EC)))
}
function Oo(e) {
    function t(i) {
        return Wi(i, e)
    }
    if (0 < bs.length) {
        Wi(bs[0], e);
        for (var n = 1; n < bs.length; n++) {
            var r = bs[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (jn !== null && Wi(jn, e),
    $n !== null && Wi($n, e),
    Fn !== null && Wi(Fn, e),
    Ro.forEach(t),
    Ao.forEach(t),
    n = 0; n < Ln.length; n++)
        r = Ln[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ln.length && (n = Ln[0],
    n.blockedOn === null); )
        N0(n),
        n.blockedOn === null && Ln.shift()
}
var ui = kn.ReactCurrentBatchConfig
  , ka = !0;
function kC(e, t, n, r) {
    var i = J
      , o = ui.transition;
    ui.transition = null;
    try {
        J = 1,
        pd(e, t, n, r)
    } finally {
        J = i,
        ui.transition = o
    }
}
function PC(e, t, n, r) {
    var i = J
      , o = ui.transition;
    ui.transition = null;
    try {
        J = 4,
        pd(e, t, n, r)
    } finally {
        J = i,
        ui.transition = o
    }
}
function pd(e, t, n, r) {
    if (ka) {
        var i = Lc(e, t, n, r);
        if (i === null)
            Nu(e, t, r, Pa, n),
            Eh(e, r);
        else if (CC(i, e, t, n, r))
            r.stopPropagation();
        else if (Eh(e, r),
        t & 4 && -1 < SC.indexOf(e)) {
            for (; i !== null; ) {
                var o = is(i);
                if (o !== null && R0(o),
                o = Lc(e, t, n, r),
                o === null && Nu(e, t, r, Pa, n),
                o === i)
                    break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else
            Nu(e, t, r, null, n)
    }
}
var Pa = null;
function Lc(e, t, n, r) {
    if (Pa = null,
    e = ud(r),
    e = ur(e),
    e !== null)
        if (t = Ar(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = w0(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Pa = e,
    null
}
function L0(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (dC()) {
        case cd:
            return 1;
        case k0:
            return 4;
        case Ca:
        case pC:
            return 16;
        case P0:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var In = null
  , hd = null
  , Js = null;
function D0() {
    if (Js)
        return Js;
    var e, t = hd, n = t.length, r, i = "value"in In ? In.value : In.textContent, o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++)
        ;
    return Js = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Zs(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Rs() {
    return !0
}
function Ph() {
    return !1
}
function mt(e) {
    function t(n, r, i, o, s) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = o,
        this.target = s,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(o) : o[a]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Rs : Ph,
        this.isPropagationStopped = Ph,
        this
    }
    return me(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Rs)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Rs)
        },
        persist: function() {},
        isPersistent: Rs
    }),
    t
}
var Ri = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, md = mt(Ri), rs = me({}, Ri, {
    view: 0,
    detail: 0
}), TC = mt(rs), Eu, ku, Hi, ul = me({}, rs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gd,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Hi && (Hi && e.type === "mousemove" ? (Eu = e.screenX - Hi.screenX,
        ku = e.screenY - Hi.screenY) : ku = Eu = 0,
        Hi = e),
        Eu)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : ku
    }
}), Th = mt(ul), bC = me({}, ul, {
    dataTransfer: 0
}), RC = mt(bC), AC = me({}, rs, {
    relatedTarget: 0
}), Pu = mt(AC), OC = me({}, Ri, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), MC = mt(OC), NC = me({}, Ri, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), LC = mt(NC), DC = me({}, Ri, {
    data: 0
}), bh = mt(DC), IC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, _C = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, jC = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function $C(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = jC[e]) ? !!t[e] : !1
}
function gd() {
    return $C
}
var FC = me({}, rs, {
    key: function(e) {
        if (e.key) {
            var t = IC[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Zs(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _C[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gd,
    charCode: function(e) {
        return e.type === "keypress" ? Zs(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Zs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , BC = mt(FC)
  , VC = me({}, ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Rh = mt(VC)
  , zC = me({}, rs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gd
})
  , UC = mt(zC)
  , WC = me({}, Ri, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , HC = mt(WC)
  , KC = me({}, ul, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , GC = mt(KC)
  , XC = [9, 13, 27, 32]
  , yd = vn && "CompositionEvent"in window
  , po = null;
vn && "documentMode"in document && (po = document.documentMode);
var YC = vn && "TextEvent"in window && !po
  , I0 = vn && (!yd || po && 8 < po && 11 >= po)
  , Ah = " "
  , Oh = !1;
function _0(e, t) {
    switch (e) {
    case "keyup":
        return XC.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function j0(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Hr = !1;
function qC(e, t) {
    switch (e) {
    case "compositionend":
        return j0(t);
    case "keypress":
        return t.which !== 32 ? null : (Oh = !0,
        Ah);
    case "textInput":
        return e = t.data,
        e === Ah && Oh ? null : e;
    default:
        return null
    }
}
function QC(e, t) {
    if (Hr)
        return e === "compositionend" || !yd && _0(e, t) ? (e = D0(),
        Js = hd = In = null,
        Hr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return I0 && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var JC = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Mh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!JC[e.type] : t === "textarea"
}
function $0(e, t, n, r) {
    m0(r),
    t = Ta(t, "onChange"),
    0 < t.length && (n = new md("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var ho = null
  , Mo = null;
function ZC(e) {
    Y0(e, 0)
}
function cl(e) {
    var t = Xr(e);
    if (l0(t))
        return e
}
function eE(e, t) {
    if (e === "change")
        return t
}
var F0 = !1;
if (vn) {
    var Tu;
    if (vn) {
        var bu = "oninput"in document;
        if (!bu) {
            var Nh = document.createElement("div");
            Nh.setAttribute("oninput", "return;"),
            bu = typeof Nh.oninput == "function"
        }
        Tu = bu
    } else
        Tu = !1;
    F0 = Tu && (!document.documentMode || 9 < document.documentMode)
}
function Lh() {
    ho && (ho.detachEvent("onpropertychange", B0),
    Mo = ho = null)
}
function B0(e) {
    if (e.propertyName === "value" && cl(Mo)) {
        var t = [];
        $0(t, Mo, e, ud(e)),
        x0(ZC, t)
    }
}
function tE(e, t, n) {
    e === "focusin" ? (Lh(),
    ho = t,
    Mo = n,
    ho.attachEvent("onpropertychange", B0)) : e === "focusout" && Lh()
}
function nE(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return cl(Mo)
}
function rE(e, t) {
    if (e === "click")
        return cl(t)
}
function iE(e, t) {
    if (e === "input" || e === "change")
        return cl(t)
}
function oE(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var jt = typeof Object.is == "function" ? Object.is : oE;
function No(e, t) {
    if (jt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!mc.call(t, i) || !jt(e[i], t[i]))
            return !1
    }
    return !0
}
function Dh(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Ih(e, t) {
    var n = Dh(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Dh(n)
    }
}
function V0(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? V0(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function z0() {
    for (var e = window, t = xa(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = xa(e.document)
    }
    return t
}
function vd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function sE(e) {
    var t = z0()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && V0(n.ownerDocument.documentElement, n)) {
        if (r !== null && vd(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i),
                !e.extend && o > r && (i = r,
                r = o,
                o = i),
                i = Ih(n, o);
                var s = Ih(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var aE = vn && "documentMode"in document && 11 >= document.documentMode
  , Kr = null
  , Dc = null
  , mo = null
  , Ic = !1;
function _h(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ic || Kr == null || Kr !== xa(r) || (r = Kr,
    "selectionStart"in r && vd(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    mo && No(mo, r) || (mo = r,
    r = Ta(Dc, "onSelect"),
    0 < r.length && (t = new md("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Kr)))
}
function As(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Gr = {
    animationend: As("Animation", "AnimationEnd"),
    animationiteration: As("Animation", "AnimationIteration"),
    animationstart: As("Animation", "AnimationStart"),
    transitionend: As("Transition", "TransitionEnd")
}
  , Ru = {}
  , U0 = {};
vn && (U0 = document.createElement("div").style,
"AnimationEvent"in window || (delete Gr.animationend.animation,
delete Gr.animationiteration.animation,
delete Gr.animationstart.animation),
"TransitionEvent"in window || delete Gr.transitionend.transition);
function fl(e) {
    if (Ru[e])
        return Ru[e];
    if (!Gr[e])
        return e;
    var t = Gr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in U0)
            return Ru[e] = t[n];
    return e
}
var W0 = fl("animationend")
  , H0 = fl("animationiteration")
  , K0 = fl("animationstart")
  , G0 = fl("transitionend")
  , X0 = new Map
  , jh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Qn(e, t) {
    X0.set(e, t),
    Rr(t, [e])
}
for (var Au = 0; Au < jh.length; Au++) {
    var Ou = jh[Au]
      , lE = Ou.toLowerCase()
      , uE = Ou[0].toUpperCase() + Ou.slice(1);
    Qn(lE, "on" + uE)
}
Qn(W0, "onAnimationEnd");
Qn(H0, "onAnimationIteration");
Qn(K0, "onAnimationStart");
Qn("dblclick", "onDoubleClick");
Qn("focusin", "onFocus");
Qn("focusout", "onBlur");
Qn(G0, "onTransitionEnd");
hi("onMouseEnter", ["mouseout", "mouseover"]);
hi("onMouseLeave", ["mouseout", "mouseover"]);
hi("onPointerEnter", ["pointerout", "pointerover"]);
hi("onPointerLeave", ["pointerout", "pointerover"]);
Rr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ro = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , cE = new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));
function $h(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    lC(r, t, void 0, e),
    e.currentTarget = null
}
function Y0(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s]
                      , l = a.instance
                      , u = a.currentTarget;
                    if (a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    $h(i, a, u),
                    o = l
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (a = r[s],
                    l = a.instance,
                    u = a.currentTarget,
                    a = a.listener,
                    l !== o && i.isPropagationStopped())
                        break e;
                    $h(i, a, u),
                    o = l
                }
        }
    }
    if (Sa)
        throw e = Oc,
        Sa = !1,
        Oc = null,
        e
}
function oe(e, t) {
    var n = t[Bc];
    n === void 0 && (n = t[Bc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (q0(t, e, 2, !1),
    n.add(r))
}
function Mu(e, t, n) {
    var r = 0;
    t && (r |= 4),
    q0(n, e, r, t)
}
var Os = "_reactListening" + Math.random().toString(36).slice(2);
function Lo(e) {
    if (!e[Os]) {
        e[Os] = !0,
        r0.forEach(function(n) {
            n !== "selectionchange" && (cE.has(n) || Mu(n, !1, e),
            Mu(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Os] || (t[Os] = !0,
        Mu("selectionchange", !1, t))
    }
}
function q0(e, t, n, r) {
    switch (L0(t)) {
    case 1:
        var i = kC;
        break;
    case 4:
        i = PC;
        break;
    default:
        i = pd
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Ac || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function Nu(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        s = s.return
                    }
                for (; a !== null; ) {
                    if (s = ur(a),
                    s === null)
                        return;
                    if (l = s.tag,
                    l === 5 || l === 6) {
                        r = o = s;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    x0(function() {
        var u = o
          , c = ud(n)
          , f = [];
        e: {
            var d = X0.get(e);
            if (d !== void 0) {
                var y = md
                  , g = e;
                switch (e) {
                case "keypress":
                    if (Zs(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = BC;
                    break;
                case "focusin":
                    g = "focus",
                    y = Pu;
                    break;
                case "focusout":
                    g = "blur",
                    y = Pu;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = Pu;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = Th;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = RC;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = UC;
                    break;
                case W0:
                case H0:
                case K0:
                    y = MC;
                    break;
                case G0:
                    y = HC;
                    break;
                case "scroll":
                    y = TC;
                    break;
                case "wheel":
                    y = GC;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = LC;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = Rh
                }
                var m = (t & 4) !== 0
                  , w = !m && e === "scroll"
                  , p = m ? d !== null ? d + "Capture" : null : d;
                m = [];
                for (var h = u, v; h !== null; ) {
                    v = h;
                    var C = v.stateNode;
                    if (v.tag === 5 && C !== null && (v = C,
                    p !== null && (C = bo(h, p),
                    C != null && m.push(Do(h, C, v)))),
                    w)
                        break;
                    h = h.return
                }
                0 < m.length && (d = new y(d,g,null,n,c),
                f.push({
                    event: d,
                    listeners: m
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                d && n !== bc && (g = n.relatedTarget || n.fromElement) && (ur(g) || g[xn]))
                    break e;
                if ((y || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                y ? (g = n.relatedTarget || n.toElement,
                y = u,
                g = g ? ur(g) : null,
                g !== null && (w = Ar(g),
                g !== w || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null,
                g = u),
                y !== g)) {
                    if (m = Th,
                    C = "onMouseLeave",
                    p = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (m = Rh,
                    C = "onPointerLeave",
                    p = "onPointerEnter",
                    h = "pointer"),
                    w = y == null ? d : Xr(y),
                    v = g == null ? d : Xr(g),
                    d = new m(C,h + "leave",y,n,c),
                    d.target = w,
                    d.relatedTarget = v,
                    C = null,
                    ur(c) === u && (m = new m(p,h + "enter",g,n,c),
                    m.target = v,
                    m.relatedTarget = w,
                    C = m),
                    w = C,
                    y && g)
                        t: {
                            for (m = y,
                            p = g,
                            h = 0,
                            v = m; v; v = Dr(v))
                                h++;
                            for (v = 0,
                            C = p; C; C = Dr(C))
                                v++;
                            for (; 0 < h - v; )
                                m = Dr(m),
                                h--;
                            for (; 0 < v - h; )
                                p = Dr(p),
                                v--;
                            for (; h--; ) {
                                if (m === p || p !== null && m === p.alternate)
                                    break t;
                                m = Dr(m),
                                p = Dr(p)
                            }
                            m = null
                        }
                    else
                        m = null;
                    y !== null && Fh(f, d, y, m, !1),
                    g !== null && w !== null && Fh(f, w, g, m, !0)
                }
            }
            e: {
                if (d = u ? Xr(u) : window,
                y = d.nodeName && d.nodeName.toLowerCase(),
                y === "select" || y === "input" && d.type === "file")
                    var E = eE;
                else if (Mh(d))
                    if (F0)
                        E = iE;
                    else {
                        E = nE;
                        var P = tE
                    }
                else
                    (y = d.nodeName) && y.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (E = rE);
                if (E && (E = E(e, u))) {
                    $0(f, E, n, c);
                    break e
                }
                P && P(e, d, u),
                e === "focusout" && (P = d._wrapperState) && P.controlled && d.type === "number" && Cc(d, "number", d.value)
            }
            switch (P = u ? Xr(u) : window,
            e) {
            case "focusin":
                (Mh(P) || P.contentEditable === "true") && (Kr = P,
                Dc = u,
                mo = null);
                break;
            case "focusout":
                mo = Dc = Kr = null;
                break;
            case "mousedown":
                Ic = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Ic = !1,
                _h(f, n, c);
                break;
            case "selectionchange":
                if (aE)
                    break;
            case "keydown":
            case "keyup":
                _h(f, n, c)
            }
            var T;
            if (yd)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var b = "onCompositionStart";
                        break e;
                    case "compositionend":
                        b = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        b = "onCompositionUpdate";
                        break e
                    }
                    b = void 0
                }
            else
                Hr ? _0(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
            b && (I0 && n.locale !== "ko" && (Hr || b !== "onCompositionStart" ? b === "onCompositionEnd" && Hr && (T = D0()) : (In = c,
            hd = "value"in In ? In.value : In.textContent,
            Hr = !0)),
            P = Ta(u, b),
            0 < P.length && (b = new bh(b,e,null,n,c),
            f.push({
                event: b,
                listeners: P
            }),
            T ? b.data = T : (T = j0(n),
            T !== null && (b.data = T)))),
            (T = YC ? qC(e, n) : QC(e, n)) && (u = Ta(u, "onBeforeInput"),
            0 < u.length && (c = new bh("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = T))
        }
        Y0(f, t)
    })
}
function Do(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ta(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , o = i.stateNode;
        i.tag === 5 && o !== null && (i = o,
        o = bo(e, n),
        o != null && r.unshift(Do(e, o, i)),
        o = bo(e, t),
        o != null && r.push(Do(e, o, i))),
        e = e.return
    }
    return r
}
function Dr(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Fh(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , u = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && u !== null && (a = u,
        i ? (l = bo(n, o),
        l != null && s.unshift(Do(n, l, a))) : i || (l = bo(n, o),
        l != null && s.push(Do(n, l, a)))),
        n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var fE = /\r\n?/g
  , dE = /\u0000|\uFFFD/g;
function Bh(e) {
    return (typeof e == "string" ? e : "" + e).replace(fE, `
`).replace(dE, "")
}
function Ms(e, t, n) {
    if (t = Bh(t),
    Bh(e) !== t && n)
        throw Error(N(425))
}
function ba() {}
var _c = null
  , jc = null;
function $c(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Fc = typeof setTimeout == "function" ? setTimeout : void 0
  , pE = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Vh = typeof Promise == "function" ? Promise : void 0
  , hE = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vh < "u" ? function(e) {
    return Vh.resolve(null).then(e).catch(mE)
}
: Fc;
function mE(e) {
    setTimeout(function() {
        throw e
    })
}
function Lu(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Oo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Oo(t)
}
function Bn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function zh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Ai = Math.random().toString(36).slice(2)
  , Yt = "__reactFiber$" + Ai
  , Io = "__reactProps$" + Ai
  , xn = "__reactContainer$" + Ai
  , Bc = "__reactEvents$" + Ai
  , gE = "__reactListeners$" + Ai
  , yE = "__reactHandles$" + Ai;
function ur(e) {
    var t = e[Yt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[xn] || n[Yt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = zh(e); e !== null; ) {
                    if (n = e[Yt])
                        return n;
                    e = zh(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function is(e) {
    return e = e[Yt] || e[xn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Xr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(N(33))
}
function dl(e) {
    return e[Io] || null
}
var Vc = []
  , Yr = -1;
function Jn(e) {
    return {
        current: e
    }
}
function se(e) {
    0 > Yr || (e.current = Vc[Yr],
    Vc[Yr] = null,
    Yr--)
}
function ie(e, t) {
    Yr++,
    Vc[Yr] = e.current,
    e.current = t
}
var Kn = {}
  , Ke = Jn(Kn)
  , Ze = Jn(!1)
  , Sr = Kn;
function mi(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Kn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, o;
    for (o in n)
        i[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function et(e) {
    return e = e.childContextTypes,
    e != null
}
function Ra() {
    se(Ze),
    se(Ke)
}
function Uh(e, t, n) {
    if (Ke.current !== Kn)
        throw Error(N(168));
    ie(Ke, t),
    ie(Ze, n)
}
function Q0(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(N(108, tC(e) || "Unknown", i));
    return me({}, n, r)
}
function Aa(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Kn,
    Sr = Ke.current,
    ie(Ke, e),
    ie(Ze, Ze.current),
    !0
}
function Wh(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(N(169));
    n ? (e = Q0(e, t, Sr),
    r.__reactInternalMemoizedMergedChildContext = e,
    se(Ze),
    se(Ke),
    ie(Ke, e)) : se(Ze),
    ie(Ze, n)
}
var cn = null
  , pl = !1
  , Du = !1;
function J0(e) {
    cn === null ? cn = [e] : cn.push(e)
}
function vE(e) {
    pl = !0,
    J0(e)
}
function Zn() {
    if (!Du && cn !== null) {
        Du = !0;
        var e = 0
          , t = J;
        try {
            var n = cn;
            for (J = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            cn = null,
            pl = !1
        } catch (i) {
            throw cn !== null && (cn = cn.slice(e + 1)),
            E0(cd, Zn),
            i
        } finally {
            J = t,
            Du = !1
        }
    }
    return null
}
var qr = []
  , Qr = 0
  , Oa = null
  , Ma = 0
  , wt = []
  , St = 0
  , Cr = null
  , dn = 1
  , pn = "";
function rr(e, t) {
    qr[Qr++] = Ma,
    qr[Qr++] = Oa,
    Oa = e,
    Ma = t
}
function Z0(e, t, n) {
    wt[St++] = dn,
    wt[St++] = pn,
    wt[St++] = Cr,
    Cr = e;
    var r = dn;
    e = pn;
    var i = 32 - It(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var o = 32 - It(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32),
        r >>= s,
        i -= s,
        dn = 1 << 32 - It(t) + i | n << i | r,
        pn = o + e
    } else
        dn = 1 << o | n << i | r,
        pn = e
}
function xd(e) {
    e.return !== null && (rr(e, 1),
    Z0(e, 1, 0))
}
function wd(e) {
    for (; e === Oa; )
        Oa = qr[--Qr],
        qr[Qr] = null,
        Ma = qr[--Qr],
        qr[Qr] = null;
    for (; e === Cr; )
        Cr = wt[--St],
        wt[St] = null,
        pn = wt[--St],
        wt[St] = null,
        dn = wt[--St],
        wt[St] = null
}
var at = null
  , st = null
  , ue = !1
  , Lt = null;
function ev(e, t) {
    var n = Et(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Hh(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        at = e,
        st = Bn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        at = e,
        st = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Cr !== null ? {
            id: dn,
            overflow: pn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Et(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        at = e,
        st = null,
        !0) : !1;
    default:
        return !1
    }
}
function zc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Uc(e) {
    if (ue) {
        var t = st;
        if (t) {
            var n = t;
            if (!Hh(e, t)) {
                if (zc(e))
                    throw Error(N(418));
                t = Bn(n.nextSibling);
                var r = at;
                t && Hh(e, t) ? ev(r, n) : (e.flags = e.flags & -4097 | 2,
                ue = !1,
                at = e)
            }
        } else {
            if (zc(e))
                throw Error(N(418));
            e.flags = e.flags & -4097 | 2,
            ue = !1,
            at = e
        }
    }
}
function Kh(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    at = e
}
function Ns(e) {
    if (e !== at)
        return !1;
    if (!ue)
        return Kh(e),
        ue = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !$c(e.type, e.memoizedProps)),
    t && (t = st)) {
        if (zc(e))
            throw tv(),
            Error(N(418));
        for (; t; )
            ev(e, t),
            t = Bn(t.nextSibling)
    }
    if (Kh(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(N(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            st = Bn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            st = null
        }
    } else
        st = at ? Bn(e.stateNode.nextSibling) : null;
    return !0
}
function tv() {
    for (var e = st; e; )
        e = Bn(e.nextSibling)
}
function gi() {
    st = at = null,
    ue = !1
}
function Sd(e) {
    Lt === null ? Lt = [e] : Lt.push(e)
}
var xE = kn.ReactCurrentBatchConfig;
function Ki(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(N(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(N(147, e));
            var i = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var a = i.refs;
                s === null ? delete a[o] : a[o] = s
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(N(284));
        if (!n._owner)
            throw Error(N(290, e))
    }
    return e
}
function Ls(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Gh(e) {
    var t = e._init;
    return t(e._payload)
}
function nv(e) {
    function t(p, h) {
        if (e) {
            var v = p.deletions;
            v === null ? (p.deletions = [h],
            p.flags |= 16) : v.push(h)
        }
    }
    function n(p, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(p, h),
            h = h.sibling;
        return null
    }
    function r(p, h) {
        for (p = new Map; h !== null; )
            h.key !== null ? p.set(h.key, h) : p.set(h.index, h),
            h = h.sibling;
        return p
    }
    function i(p, h) {
        return p = Wn(p, h),
        p.index = 0,
        p.sibling = null,
        p
    }
    function o(p, h, v) {
        return p.index = v,
        e ? (v = p.alternate,
        v !== null ? (v = v.index,
        v < h ? (p.flags |= 2,
        h) : v) : (p.flags |= 2,
        h)) : (p.flags |= 1048576,
        h)
    }
    function s(p) {
        return e && p.alternate === null && (p.flags |= 2),
        p
    }
    function a(p, h, v, C) {
        return h === null || h.tag !== 6 ? (h = Vu(v, p.mode, C),
        h.return = p,
        h) : (h = i(h, v),
        h.return = p,
        h)
    }
    function l(p, h, v, C) {
        var E = v.type;
        return E === Wr ? c(p, h, v.props.children, C, v.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mn && Gh(E) === h.type) ? (C = i(h, v.props),
        C.ref = Ki(p, h, v),
        C.return = p,
        C) : (C = sa(v.type, v.key, v.props, null, p.mode, C),
        C.ref = Ki(p, h, v),
        C.return = p,
        C)
    }
    function u(p, h, v, C) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== v.containerInfo || h.stateNode.implementation !== v.implementation ? (h = zu(v, p.mode, C),
        h.return = p,
        h) : (h = i(h, v.children || []),
        h.return = p,
        h)
    }
    function c(p, h, v, C, E) {
        return h === null || h.tag !== 7 ? (h = gr(v, p.mode, C, E),
        h.return = p,
        h) : (h = i(h, v),
        h.return = p,
        h)
    }
    function f(p, h, v) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = Vu("" + h, p.mode, v),
            h.return = p,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case Cs:
                return v = sa(h.type, h.key, h.props, null, p.mode, v),
                v.ref = Ki(p, null, h),
                v.return = p,
                v;
            case Ur:
                return h = zu(h, p.mode, v),
                h.return = p,
                h;
            case Mn:
                var C = h._init;
                return f(p, C(h._payload), v)
            }
            if (to(h) || Vi(h))
                return h = gr(h, p.mode, v, null),
                h.return = p,
                h;
            Ls(p, h)
        }
        return null
    }
    function d(p, h, v, C) {
        var E = h !== null ? h.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return E !== null ? null : a(p, h, "" + v, C);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Cs:
                return v.key === E ? l(p, h, v, C) : null;
            case Ur:
                return v.key === E ? u(p, h, v, C) : null;
            case Mn:
                return E = v._init,
                d(p, h, E(v._payload), C)
            }
            if (to(v) || Vi(v))
                return E !== null ? null : c(p, h, v, C, null);
            Ls(p, v)
        }
        return null
    }
    function y(p, h, v, C, E) {
        if (typeof C == "string" && C !== "" || typeof C == "number")
            return p = p.get(v) || null,
            a(h, p, "" + C, E);
        if (typeof C == "object" && C !== null) {
            switch (C.$$typeof) {
            case Cs:
                return p = p.get(C.key === null ? v : C.key) || null,
                l(h, p, C, E);
            case Ur:
                return p = p.get(C.key === null ? v : C.key) || null,
                u(h, p, C, E);
            case Mn:
                var P = C._init;
                return y(p, h, v, P(C._payload), E)
            }
            if (to(C) || Vi(C))
                return p = p.get(v) || null,
                c(h, p, C, E, null);
            Ls(h, C)
        }
        return null
    }
    function g(p, h, v, C) {
        for (var E = null, P = null, T = h, b = h = 0, L = null; T !== null && b < v.length; b++) {
            T.index > b ? (L = T,
            T = null) : L = T.sibling;
            var x = d(p, T, v[b], C);
            if (x === null) {
                T === null && (T = L);
                break
            }
            e && T && x.alternate === null && t(p, T),
            h = o(x, h, b),
            P === null ? E = x : P.sibling = x,
            P = x,
            T = L
        }
        if (b === v.length)
            return n(p, T),
            ue && rr(p, b),
            E;
        if (T === null) {
            for (; b < v.length; b++)
                T = f(p, v[b], C),
                T !== null && (h = o(T, h, b),
                P === null ? E = T : P.sibling = T,
                P = T);
            return ue && rr(p, b),
            E
        }
        for (T = r(p, T); b < v.length; b++)
            L = y(T, p, b, v[b], C),
            L !== null && (e && L.alternate !== null && T.delete(L.key === null ? b : L.key),
            h = o(L, h, b),
            P === null ? E = L : P.sibling = L,
            P = L);
        return e && T.forEach(function(O) {
            return t(p, O)
        }),
        ue && rr(p, b),
        E
    }
    function m(p, h, v, C) {
        var E = Vi(v);
        if (typeof E != "function")
            throw Error(N(150));
        if (v = E.call(v),
        v == null)
            throw Error(N(151));
        for (var P = E = null, T = h, b = h = 0, L = null, x = v.next(); T !== null && !x.done; b++,
        x = v.next()) {
            T.index > b ? (L = T,
            T = null) : L = T.sibling;
            var O = d(p, T, x.value, C);
            if (O === null) {
                T === null && (T = L);
                break
            }
            e && T && O.alternate === null && t(p, T),
            h = o(O, h, b),
            P === null ? E = O : P.sibling = O,
            P = O,
            T = L
        }
        if (x.done)
            return n(p, T),
            ue && rr(p, b),
            E;
        if (T === null) {
            for (; !x.done; b++,
            x = v.next())
                x = f(p, x.value, C),
                x !== null && (h = o(x, h, b),
                P === null ? E = x : P.sibling = x,
                P = x);
            return ue && rr(p, b),
            E
        }
        for (T = r(p, T); !x.done; b++,
        x = v.next())
            x = y(T, p, b, x.value, C),
            x !== null && (e && x.alternate !== null && T.delete(x.key === null ? b : x.key),
            h = o(x, h, b),
            P === null ? E = x : P.sibling = x,
            P = x);
        return e && T.forEach(function(I) {
            return t(p, I)
        }),
        ue && rr(p, b),
        E
    }
    function w(p, h, v, C) {
        if (typeof v == "object" && v !== null && v.type === Wr && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Cs:
                e: {
                    for (var E = v.key, P = h; P !== null; ) {
                        if (P.key === E) {
                            if (E = v.type,
                            E === Wr) {
                                if (P.tag === 7) {
                                    n(p, P.sibling),
                                    h = i(P, v.props.children),
                                    h.return = p,
                                    p = h;
                                    break e
                                }
                            } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Mn && Gh(E) === P.type) {
                                n(p, P.sibling),
                                h = i(P, v.props),
                                h.ref = Ki(p, P, v),
                                h.return = p,
                                p = h;
                                break e
                            }
                            n(p, P);
                            break
                        } else
                            t(p, P);
                        P = P.sibling
                    }
                    v.type === Wr ? (h = gr(v.props.children, p.mode, C, v.key),
                    h.return = p,
                    p = h) : (C = sa(v.type, v.key, v.props, null, p.mode, C),
                    C.ref = Ki(p, h, v),
                    C.return = p,
                    p = C)
                }
                return s(p);
            case Ur:
                e: {
                    for (P = v.key; h !== null; ) {
                        if (h.key === P)
                            if (h.tag === 4 && h.stateNode.containerInfo === v.containerInfo && h.stateNode.implementation === v.implementation) {
                                n(p, h.sibling),
                                h = i(h, v.children || []),
                                h.return = p,
                                p = h;
                                break e
                            } else {
                                n(p, h);
                                break
                            }
                        else
                            t(p, h);
                        h = h.sibling
                    }
                    h = zu(v, p.mode, C),
                    h.return = p,
                    p = h
                }
                return s(p);
            case Mn:
                return P = v._init,
                w(p, h, P(v._payload), C)
            }
            if (to(v))
                return g(p, h, v, C);
            if (Vi(v))
                return m(p, h, v, C);
            Ls(p, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        h !== null && h.tag === 6 ? (n(p, h.sibling),
        h = i(h, v),
        h.return = p,
        p = h) : (n(p, h),
        h = Vu(v, p.mode, C),
        h.return = p,
        p = h),
        s(p)) : n(p, h)
    }
    return w
}
var yi = nv(!0)
  , rv = nv(!1)
  , Na = Jn(null)
  , La = null
  , Jr = null
  , Cd = null;
function Ed() {
    Cd = Jr = La = null
}
function kd(e) {
    var t = Na.current;
    se(Na),
    e._currentValue = t
}
function Wc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function ci(e, t) {
    La = e,
    Cd = Jr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Je = !0),
    e.firstContext = null)
}
function Pt(e) {
    var t = e._currentValue;
    if (Cd !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Jr === null) {
            if (La === null)
                throw Error(N(308));
            Jr = e,
            La.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Jr = Jr.next = e;
    return t
}
var cr = null;
function Pd(e) {
    cr === null ? cr = [e] : cr.push(e)
}
function iv(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Pd(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    wn(e, r)
}
function wn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Nn = !1;
function Td(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function ov(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function hn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Vn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    G & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        wn(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Pd(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    wn(e, n)
}
function ea(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        fd(e, n)
    }
}
function Xh(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s,
                n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else
            i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Da(e, t, n, r) {
    var i = e.updateQueue;
    Nn = !1;
    var o = i.firstBaseUpdate
      , s = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , u = l.next;
        l.next = null,
        s === null ? o = u : s.next = u,
        s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        a = c.lastBaseUpdate,
        a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u,
        c.lastBaseUpdate = l))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0,
        c = u = l = null,
        a = o;
        do {
            var d = a.lane
              , y = a.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: y,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var g = e
                      , m = a;
                    switch (d = t,
                    y = n,
                    m.tag) {
                    case 1:
                        if (g = m.payload,
                        typeof g == "function") {
                            f = g.call(y, f, d);
                            break e
                        }
                        f = g;
                        break e;
                    case 3:
                        g.flags = g.flags & -65537 | 128;
                    case 0:
                        if (g = m.payload,
                        d = typeof g == "function" ? g.call(y, f, d) : g,
                        d == null)
                            break e;
                        f = me({}, f, d);
                        break e;
                    case 2:
                        Nn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                d = i.effects,
                d === null ? i.effects = [a] : d.push(a))
            } else
                y = {
                    eventTime: y,
                    lane: d,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                c === null ? (u = c = y,
                l = f) : c = c.next = y,
                s |= d;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                d = a,
                a = d.next,
                d.next = null,
                i.lastBaseUpdate = d,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = f),
        i.baseState = l,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                s |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            o === null && (i.shared.lanes = 0);
        kr |= s,
        e.lanes = s,
        e.memoizedState = f
    }
}
function Yh(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(N(191, i));
                i.call(r)
            }
        }
}
var os = {}
  , Qt = Jn(os)
  , _o = Jn(os)
  , jo = Jn(os);
function fr(e) {
    if (e === os)
        throw Error(N(174));
    return e
}
function bd(e, t) {
    switch (ie(jo, t),
    ie(_o, e),
    ie(Qt, os),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : kc(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = kc(t, e)
    }
    se(Qt),
    ie(Qt, t)
}
function vi() {
    se(Qt),
    se(_o),
    se(jo)
}
function sv(e) {
    fr(jo.current);
    var t = fr(Qt.current)
      , n = kc(t, e.type);
    t !== n && (ie(_o, e),
    ie(Qt, n))
}
function Rd(e) {
    _o.current === e && (se(Qt),
    se(_o))
}
var fe = Jn(0);
function Ia(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Iu = [];
function Ad() {
    for (var e = 0; e < Iu.length; e++)
        Iu[e]._workInProgressVersionPrimary = null;
    Iu.length = 0
}
var ta = kn.ReactCurrentDispatcher
  , _u = kn.ReactCurrentBatchConfig
  , Er = 0
  , pe = null
  , be = null
  , Oe = null
  , _a = !1
  , go = !1
  , $o = 0
  , wE = 0;
function $e() {
    throw Error(N(321))
}
function Od(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!jt(e[n], t[n]))
            return !1;
    return !0
}
function Md(e, t, n, r, i, o) {
    if (Er = o,
    pe = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ta.current = e === null || e.memoizedState === null ? kE : PE,
    e = n(r, i),
    go) {
        o = 0;
        do {
            if (go = !1,
            $o = 0,
            25 <= o)
                throw Error(N(301));
            o += 1,
            Oe = be = null,
            t.updateQueue = null,
            ta.current = TE,
            e = n(r, i)
        } while (go)
    }
    if (ta.current = ja,
    t = be !== null && be.next !== null,
    Er = 0,
    Oe = be = pe = null,
    _a = !1,
    t)
        throw Error(N(300));
    return e
}
function Nd() {
    var e = $o !== 0;
    return $o = 0,
    e
}
function Kt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Oe === null ? pe.memoizedState = Oe = e : Oe = Oe.next = e,
    Oe
}
function Tt() {
    if (be === null) {
        var e = pe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = be.next;
    var t = Oe === null ? pe.memoizedState : Oe.next;
    if (t !== null)
        Oe = t,
        be = e;
    else {
        if (e === null)
            throw Error(N(310));
        be = e,
        e = {
            memoizedState: be.memoizedState,
            baseState: be.baseState,
            baseQueue: be.baseQueue,
            queue: be.queue,
            next: null
        },
        Oe === null ? pe.memoizedState = Oe = e : Oe = Oe.next = e
    }
    return Oe
}
function Fo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function ju(e) {
    var t = Tt()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = be
      , i = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next,
            o.next = s
        }
        r.baseQueue = i = o,
        n.pending = null
    }
    if (i !== null) {
        o = i.next,
        r = r.baseState;
        var a = s = null
          , l = null
          , u = o;
        do {
            var c = u.lane;
            if ((Er & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                s = r) : l = l.next = f,
                pe.lanes |= c,
                kr |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        l === null ? s = r : l.next = a,
        jt(r, t.memoizedState) || (Je = !0),
        t.memoizedState = r,
        t.baseState = s,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            o = i.lane,
            pe.lanes |= o,
            kr |= o,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function $u(e) {
    var t = Tt()
      , n = t.queue;
    if (n === null)
        throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do
            o = e(o, s.action),
            s = s.next;
        while (s !== i);
        jt(o, t.memoizedState) || (Je = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function av() {}
function lv(e, t) {
    var n = pe
      , r = Tt()
      , i = t()
      , o = !jt(r.memoizedState, i);
    if (o && (r.memoizedState = i,
    Je = !0),
    r = r.queue,
    Ld(fv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || Oe !== null && Oe.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Bo(9, cv.bind(null, n, r, i, t), void 0, null),
        Me === null)
            throw Error(N(349));
        Er & 30 || uv(n, t, i)
    }
    return i
}
function uv(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = pe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    pe.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function cv(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    dv(t) && pv(e)
}
function fv(e, t, n) {
    return n(function() {
        dv(t) && pv(e)
    })
}
function dv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !jt(e, n)
    } catch {
        return !0
    }
}
function pv(e) {
    var t = wn(e, 1);
    t !== null && _t(t, e, 1, -1)
}
function qh(e) {
    var t = Kt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = EE.bind(null, pe, e),
    [t.memoizedState, e]
}
function Bo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = pe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    pe.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function hv() {
    return Tt().memoizedState
}
function na(e, t, n, r) {
    var i = Kt();
    pe.flags |= e,
    i.memoizedState = Bo(1 | t, n, void 0, r === void 0 ? null : r)
}
function hl(e, t, n, r) {
    var i = Tt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (be !== null) {
        var s = be.memoizedState;
        if (o = s.destroy,
        r !== null && Od(r, s.deps)) {
            i.memoizedState = Bo(t, n, o, r);
            return
        }
    }
    pe.flags |= e,
    i.memoizedState = Bo(1 | t, n, o, r)
}
function Qh(e, t) {
    return na(8390656, 8, e, t)
}
function Ld(e, t) {
    return hl(2048, 8, e, t)
}
function mv(e, t) {
    return hl(4, 2, e, t)
}
function gv(e, t) {
    return hl(4, 4, e, t)
}
function yv(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function vv(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    hl(4, 4, yv.bind(null, t, e), n)
}
function Dd() {}
function xv(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Od(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function wv(e, t) {
    var n = Tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Od(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Sv(e, t, n) {
    return Er & 21 ? (jt(n, t) || (n = T0(),
    pe.lanes |= n,
    kr |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Je = !0),
    e.memoizedState = n)
}
function SE(e, t) {
    var n = J;
    J = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = _u.transition;
    _u.transition = {};
    try {
        e(!1),
        t()
    } finally {
        J = n,
        _u.transition = r
    }
}
function Cv() {
    return Tt().memoizedState
}
function CE(e, t, n) {
    var r = Un(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ev(e))
        kv(t, n);
    else if (n = iv(e, t, n, r),
    n !== null) {
        var i = Xe();
        _t(n, e, r, i),
        Pv(n, t, r)
    }
}
function EE(e, t, n) {
    var r = Un(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ev(e))
        kv(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var s = t.lastRenderedState
                  , a = o(s, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                jt(a, s)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    Pd(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = iv(e, t, i, r),
        n !== null && (i = Xe(),
        _t(n, e, r, i),
        Pv(n, t, r))
    }
}
function Ev(e) {
    var t = e.alternate;
    return e === pe || t !== null && t === pe
}
function kv(e, t) {
    go = _a = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Pv(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        fd(e, n)
    }
}
var ja = {
    readContext: Pt,
    useCallback: $e,
    useContext: $e,
    useEffect: $e,
    useImperativeHandle: $e,
    useInsertionEffect: $e,
    useLayoutEffect: $e,
    useMemo: $e,
    useReducer: $e,
    useRef: $e,
    useState: $e,
    useDebugValue: $e,
    useDeferredValue: $e,
    useTransition: $e,
    useMutableSource: $e,
    useSyncExternalStore: $e,
    useId: $e,
    unstable_isNewReconciler: !1
}
  , kE = {
    readContext: Pt,
    useCallback: function(e, t) {
        return Kt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Pt,
    useEffect: Qh,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        na(4194308, 4, yv.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return na(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return na(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Kt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Kt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = CE.bind(null, pe, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Kt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: qh,
    useDebugValue: Dd,
    useDeferredValue: function(e) {
        return Kt().memoizedState = e
    },
    useTransition: function() {
        var e = qh(!1)
          , t = e[0];
        return e = SE.bind(null, e[1]),
        Kt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = pe
          , i = Kt();
        if (ue) {
            if (n === void 0)
                throw Error(N(407));
            n = n()
        } else {
            if (n = t(),
            Me === null)
                throw Error(N(349));
            Er & 30 || uv(r, t, n)
        }
        i.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return i.queue = o,
        Qh(fv.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        Bo(9, cv.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Kt()
          , t = Me.identifierPrefix;
        if (ue) {
            var n = pn
              , r = dn;
            n = (r & ~(1 << 32 - It(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = $o++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = wE++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , PE = {
    readContext: Pt,
    useCallback: xv,
    useContext: Pt,
    useEffect: Ld,
    useImperativeHandle: vv,
    useInsertionEffect: mv,
    useLayoutEffect: gv,
    useMemo: wv,
    useReducer: ju,
    useRef: hv,
    useState: function() {
        return ju(Fo)
    },
    useDebugValue: Dd,
    useDeferredValue: function(e) {
        var t = Tt();
        return Sv(t, be.memoizedState, e)
    },
    useTransition: function() {
        var e = ju(Fo)[0]
          , t = Tt().memoizedState;
        return [e, t]
    },
    useMutableSource: av,
    useSyncExternalStore: lv,
    useId: Cv,
    unstable_isNewReconciler: !1
}
  , TE = {
    readContext: Pt,
    useCallback: xv,
    useContext: Pt,
    useEffect: Ld,
    useImperativeHandle: vv,
    useInsertionEffect: mv,
    useLayoutEffect: gv,
    useMemo: wv,
    useReducer: $u,
    useRef: hv,
    useState: function() {
        return $u(Fo)
    },
    useDebugValue: Dd,
    useDeferredValue: function(e) {
        var t = Tt();
        return be === null ? t.memoizedState = e : Sv(t, be.memoizedState, e)
    },
    useTransition: function() {
        var e = $u(Fo)[0]
          , t = Tt().memoizedState;
        return [e, t]
    },
    useMutableSource: av,
    useSyncExternalStore: lv,
    useId: Cv,
    unstable_isNewReconciler: !1
};
function Mt(e, t) {
    if (e && e.defaultProps) {
        t = me({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Hc(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : me({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var ml = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Ar(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Xe()
          , i = Un(e)
          , o = hn(r, i);
        o.payload = t,
        n != null && (o.callback = n),
        t = Vn(e, o, i),
        t !== null && (_t(t, e, i, r),
        ea(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Xe()
          , i = Un(e)
          , o = hn(r, i);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = Vn(e, o, i),
        t !== null && (_t(t, e, i, r),
        ea(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Xe()
          , r = Un(e)
          , i = hn(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Vn(e, i, r),
        t !== null && (_t(t, e, r, n),
        ea(t, e, r))
    }
};
function Jh(e, t, n, r, i, o, s) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !No(n, r) || !No(i, o) : !0
}
function Tv(e, t, n) {
    var r = !1
      , i = Kn
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Pt(o) : (i = et(t) ? Sr : Ke.current,
    r = t.contextTypes,
    o = (r = r != null) ? mi(e, i) : Kn),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = ml,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function Zh(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ml.enqueueReplaceState(t, t.state, null)
}
function Kc(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    Td(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = Pt(o) : (o = et(t) ? Sr : Ke.current,
    i.context = mi(e, o)),
    i.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Hc(e, t, o, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && ml.enqueueReplaceState(i, i.state, null),
    Da(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function xi(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += eC(r),
            r = r.return;
        while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Fu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Gc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var bE = typeof WeakMap == "function" ? WeakMap : Map;
function bv(e, t, n) {
    n = hn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Fa || (Fa = !0,
        rf = r),
        Gc(e, t)
    }
    ,
    n
}
function Rv(e, t, n) {
    n = hn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Gc(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Gc(e, t),
        typeof r != "function" && (zn === null ? zn = new Set([this]) : zn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }
    ),
    n
}
function em(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new bE;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = VE.bind(null, e, t, n),
    t.then(e, e))
}
function tm(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function nm(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = hn(-1, 1),
    t.tag = 2,
    Vn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var RE = kn.ReactCurrentOwner
  , Je = !1;
function Ge(e, t, n, r) {
    t.child = e === null ? rv(t, null, n, r) : yi(t, e.child, n, r)
}
function rm(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return ci(t, i),
    r = Md(e, t, n, r, o, i),
    n = Nd(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Sn(e, t, i)) : (ue && n && xd(t),
    t.flags |= 1,
    Ge(e, t, r, i),
    t.child)
}
function im(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !zd(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Av(e, t, o, r, i)) : (e = sa(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : No,
        n(s, r) && e.ref === t.ref)
            return Sn(e, t, i)
    }
    return t.flags |= 1,
    e = Wn(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Av(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (No(o, r) && e.ref === t.ref)
            if (Je = !1,
            t.pendingProps = r = o,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Je = !0);
            else
                return t.lanes = e.lanes,
                Sn(e, t, i)
    }
    return Xc(e, t, n, r, i)
}
function Ov(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ie(ei, it),
            it |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ie(ei, it),
                it |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            ie(ei, it),
            it |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        ie(ei, it),
        it |= r;
    return Ge(e, t, i, n),
    t.child
}
function Mv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Xc(e, t, n, r, i) {
    var o = et(n) ? Sr : Ke.current;
    return o = mi(t, o),
    ci(t, i),
    n = Md(e, t, n, r, o, i),
    r = Nd(),
    e !== null && !Je ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Sn(e, t, i)) : (ue && r && xd(t),
    t.flags |= 1,
    Ge(e, t, n, i),
    t.child)
}
function om(e, t, n, r, i) {
    if (et(n)) {
        var o = !0;
        Aa(t)
    } else
        o = !1;
    if (ci(t, i),
    t.stateNode === null)
        ra(e, t),
        Tv(t, n, r),
        Kc(t, n, r, i),
        r = !0;
    else if (e === null) {
        var s = t.stateNode
          , a = t.memoizedProps;
        s.props = a;
        var l = s.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = Pt(u) : (u = et(n) ? Sr : Ke.current,
        u = mi(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && Zh(t, s, r, u),
        Nn = !1;
        var d = t.memoizedState;
        s.state = d,
        Da(t, r, s, i),
        l = t.memoizedState,
        a !== r || d !== l || Ze.current || Nn ? (typeof c == "function" && (Hc(t, n, c, r),
        l = t.memoizedState),
        (a = Nn || Jh(t, n, a, r, d, l, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        s.props = r,
        s.state = l,
        s.context = u,
        r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        s = t.stateNode,
        ov(e, t),
        a = t.memoizedProps,
        u = t.type === t.elementType ? a : Mt(t.type, a),
        s.props = u,
        f = t.pendingProps,
        d = s.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Pt(l) : (l = et(n) ? Sr : Ke.current,
        l = mi(t, l));
        var y = n.getDerivedStateFromProps;
        (c = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== f || d !== l) && Zh(t, s, r, l),
        Nn = !1,
        d = t.memoizedState,
        s.state = d,
        Da(t, r, s, i);
        var g = t.memoizedState;
        a !== f || d !== g || Ze.current || Nn ? (typeof y == "function" && (Hc(t, n, y, r),
        g = t.memoizedState),
        (u = Nn || Jh(t, n, u, r, d, g, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l),
        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)),
        typeof s.componentDidUpdate == "function" && (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = g),
        s.props = r,
        s.state = g,
        s.context = l,
        r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Yc(e, t, n, r, o, i)
}
function Yc(e, t, n, r, i, o) {
    Mv(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s)
        return i && Wh(t, n, !1),
        Sn(e, t, o);
    r = t.stateNode,
    RE.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && s ? (t.child = yi(t, e.child, null, o),
    t.child = yi(t, null, a, o)) : Ge(e, t, a, o),
    t.memoizedState = r.state,
    i && Wh(t, n, !0),
    t.child
}
function Nv(e) {
    var t = e.stateNode;
    t.pendingContext ? Uh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Uh(e, t.context, !1),
    bd(e, t.containerInfo)
}
function sm(e, t, n, r, i) {
    return gi(),
    Sd(i),
    t.flags |= 256,
    Ge(e, t, n, r),
    t.child
}
var qc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Qc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Lv(e, t, n) {
    var r = t.pendingProps, i = fe.current, o = !1, s = (t.flags & 128) !== 0, a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    ie(fe, i & 1),
    e === null)
        return Uc(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (s = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        s = {
            mode: "hidden",
            children: s
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = s) : o = vl(s, r, 0, null),
        e = gr(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Qc(n),
        t.memoizedState = qc,
        e) : Id(t, s));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return AE(e, t, s, r, a, i, n);
    if (o) {
        o = r.fallback,
        s = t.mode,
        i = e.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = Wn(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? o = Wn(a, o) : (o = gr(o, s, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        s = e.child.memoizedState,
        s = s === null ? Qc(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        },
        o.memoizedState = s,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = qc,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = Wn(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Id(e, t) {
    return t = vl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ds(e, t, n, r) {
    return r !== null && Sd(r),
    yi(t, e.child, null, n),
    e = Id(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function AE(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Fu(Error(N(422))),
        Ds(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        i = t.mode,
        r = vl({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        o = gr(o, i, s, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && yi(t, e.child, null, s),
        t.child.memoizedState = Qc(s),
        t.memoizedState = qc,
        o);
    if (!(t.mode & 1))
        return Ds(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        o = Error(N(419)),
        r = Fu(o, r, void 0),
        Ds(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0,
    Je || a) {
        if (r = Me,
        r !== null) {
            switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i,
            i !== 0 && i !== o.retryLane && (o.retryLane = i,
            wn(e, i),
            _t(r, e, i, -1))
        }
        return Vd(),
        r = Fu(Error(N(421))),
        Ds(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = zE.bind(null, e),
    i._reactRetry = t,
    null) : (e = o.treeContext,
    st = Bn(i.nextSibling),
    at = t,
    ue = !0,
    Lt = null,
    e !== null && (wt[St++] = dn,
    wt[St++] = pn,
    wt[St++] = Cr,
    dn = e.id,
    pn = e.overflow,
    Cr = t),
    t = Id(t, r.children),
    t.flags |= 4096,
    t)
}
function am(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Wc(e.return, t, n)
}
function Bu(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = i)
}
function Dv(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , o = r.tail;
    if (Ge(e, t, r.children, n),
    r = fe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && am(e, n, t);
                else if (e.tag === 19)
                    am(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ie(fe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Ia(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Bu(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Ia(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Bu(t, !0, n, null, o);
            break;
        case "together":
            Bu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ra(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Sn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    kr |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Wn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Wn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function OE(e, t, n) {
    switch (t.tag) {
    case 3:
        Nv(t),
        gi();
        break;
    case 5:
        sv(t);
        break;
    case 1:
        et(t.type) && Aa(t);
        break;
    case 4:
        bd(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        ie(Na, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ie(fe, fe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Lv(e, t, n) : (ie(fe, fe.current & 1),
            e = Sn(e, t, n),
            e !== null ? e.sibling : null);
        ie(fe, fe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Dv(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        ie(fe, fe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Ov(e, t, n)
    }
    return Sn(e, t, n)
}
var Iv, Jc, _v, jv;
Iv = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Jc = function() {}
;
_v = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        fr(Qt.current);
        var o = null;
        switch (n) {
        case "input":
            i = wc(e, i),
            r = wc(e, r),
            o = [];
            break;
        case "select":
            i = me({}, i, {
                value: void 0
            }),
            r = me({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            i = Ec(e, i),
            r = Ec(e, r),
            o = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ba)
        }
        Pc(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}),
                        n[s] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Po.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}),
                            n[s] = "");
                        for (s in l)
                            l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}),
                            n[s] = l[s])
                    } else
                        n || (o || (o = []),
                        o.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (o = o || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Po.hasOwnProperty(u) ? (l != null && u === "onScroll" && oe("scroll", e),
                    o || a === l || (o = [])) : (o = o || []).push(u, l))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
jv = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Gi(e, t) {
    if (!ue)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function ME(e, t, n) {
    var r = t.pendingProps;
    switch (wd(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Fe(t),
        null;
    case 1:
        return et(t.type) && Ra(),
        Fe(t),
        null;
    case 3:
        return r = t.stateNode,
        vi(),
        se(Ze),
        se(Ke),
        Ad(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ns(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Lt !== null && (af(Lt),
        Lt = null))),
        Jc(e, t),
        Fe(t),
        null;
    case 5:
        Rd(t);
        var i = fr(jo.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            _v(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(N(166));
                return Fe(t),
                null
            }
            if (e = fr(Qt.current),
            Ns(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Yt] = t,
                r[Io] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    oe("cancel", r),
                    oe("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    oe("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < ro.length; i++)
                        oe(ro[i], r);
                    break;
                case "source":
                    oe("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    oe("error", r),
                    oe("load", r);
                    break;
                case "details":
                    oe("toggle", r);
                    break;
                case "input":
                    gh(r, o),
                    oe("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    oe("invalid", r);
                    break;
                case "textarea":
                    vh(r, o),
                    oe("invalid", r)
                }
                Pc(n, o),
                i = null;
                for (var s in o)
                    if (o.hasOwnProperty(s)) {
                        var a = o[s];
                        s === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && Ms(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && Ms(r.textContent, a, e),
                        i = ["children", "" + a]) : Po.hasOwnProperty(s) && a != null && s === "onScroll" && oe("scroll", r)
                    }
                switch (n) {
                case "input":
                    Es(r),
                    yh(r, o, !0);
                    break;
                case "textarea":
                    Es(r),
                    xh(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = ba)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                s = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = f0(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                    is: r.is
                }) : (e = s.createElement(n),
                n === "select" && (s = e,
                r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                e[Yt] = t,
                e[Io] = r,
                Iv(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (s = Tc(n, r),
                    n) {
                    case "dialog":
                        oe("cancel", e),
                        oe("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        oe("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < ro.length; i++)
                            oe(ro[i], e);
                        i = r;
                        break;
                    case "source":
                        oe("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        oe("error", e),
                        oe("load", e),
                        i = r;
                        break;
                    case "details":
                        oe("toggle", e),
                        i = r;
                        break;
                    case "input":
                        gh(e, r),
                        i = wc(e, r),
                        oe("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = me({}, r, {
                            value: void 0
                        }),
                        oe("invalid", e);
                        break;
                    case "textarea":
                        vh(e, r),
                        i = Ec(e, r),
                        oe("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Pc(n, i),
                    a = i;
                    for (o in a)
                        if (a.hasOwnProperty(o)) {
                            var l = a[o];
                            o === "style" ? h0(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && d0(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && To(e, l) : typeof l == "number" && To(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Po.hasOwnProperty(o) ? l != null && o === "onScroll" && oe("scroll", e) : l != null && od(e, o, l, s))
                        }
                    switch (n) {
                    case "input":
                        Es(e),
                        yh(e, r, !1);
                        break;
                    case "textarea":
                        Es(e),
                        xh(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Hn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? si(e, !!r.multiple, o, !1) : r.defaultValue != null && si(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = ba)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Fe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            jv(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(N(166));
            if (n = fr(jo.current),
            fr(Qt.current),
            Ns(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Yt] = t,
                (o = r.nodeValue !== n) && (e = at,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ms(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ms(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Yt] = t,
                t.stateNode = r
        }
        return Fe(t),
        null;
    case 13:
        if (se(fe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ue && st !== null && t.mode & 1 && !(t.flags & 128))
                tv(),
                gi(),
                t.flags |= 98560,
                o = !1;
            else if (o = Ns(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(N(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(N(317));
                    o[Yt] = t
                } else
                    gi(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Fe(t),
                o = !1
            } else
                Lt !== null && (af(Lt),
                Lt = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || fe.current & 1 ? Ae === 0 && (Ae = 3) : Vd())),
        t.updateQueue !== null && (t.flags |= 4),
        Fe(t),
        null);
    case 4:
        return vi(),
        Jc(e, t),
        e === null && Lo(t.stateNode.containerInfo),
        Fe(t),
        null;
    case 10:
        return kd(t.type._context),
        Fe(t),
        null;
    case 17:
        return et(t.type) && Ra(),
        Fe(t),
        null;
    case 19:
        if (se(fe),
        o = t.memoizedState,
        o === null)
            return Fe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        s = o.rendering,
        s === null)
            if (r)
                Gi(o, !1);
            else {
                if (Ae !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (s = Ia(e),
                        s !== null) {
                            for (t.flags |= 128,
                            Gi(o, !1),
                            r = s.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                s = o.alternate,
                                s === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = s.childLanes,
                                o.lanes = s.lanes,
                                o.child = s.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = s.memoizedProps,
                                o.memoizedState = s.memoizedState,
                                o.updateQueue = s.updateQueue,
                                o.type = s.type,
                                e = s.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ie(fe, fe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && Ce() > wi && (t.flags |= 128,
                r = !0,
                Gi(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ia(s),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Gi(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !s.alternate && !ue)
                        return Fe(t),
                        null
                } else
                    2 * Ce() - o.renderingStartTime > wi && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Gi(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (s.sibling = t.child,
            t.child = s) : (n = o.last,
            n !== null ? n.sibling = s : t.child = s,
            o.last = s)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = Ce(),
        t.sibling = null,
        n = fe.current,
        ie(fe, r ? n & 1 | 2 : n & 1),
        t) : (Fe(t),
        null);
    case 22:
    case 23:
        return Bd(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? it & 1073741824 && (Fe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(N(156, t.tag))
}
function NE(e, t) {
    switch (wd(t),
    t.tag) {
    case 1:
        return et(t.type) && Ra(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return vi(),
        se(Ze),
        se(Ke),
        Ad(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Rd(t),
        null;
    case 13:
        if (se(fe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(N(340));
            gi()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return se(fe),
        null;
    case 4:
        return vi(),
        null;
    case 10:
        return kd(t.type._context),
        null;
    case 22:
    case 23:
        return Bd(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Is = !1
  , ze = !1
  , LE = typeof WeakSet == "function" ? WeakSet : Set
  , _ = null;
function Zr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                xe(e, t, r)
            }
        else
            n.current = null
}
function Zc(e, t, n) {
    try {
        n()
    } catch (r) {
        xe(e, t, r)
    }
}
var lm = !1;
function DE(e, t) {
    if (_c = ka,
    e = z0(),
    vd(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var s = 0
                      , a = -1
                      , l = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , d = null;
                    t: for (; ; ) {
                        for (var y; f !== n || i !== 0 && f.nodeType !== 3 || (a = s + i),
                        f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r),
                        f.nodeType === 3 && (s += f.nodeValue.length),
                        (y = f.firstChild) !== null; )
                            d = f,
                            f = y;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (d === n && ++u === i && (a = s),
                            d === o && ++c === r && (l = s),
                            (y = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = y
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (jc = {
        focusedElem: e,
        selectionRange: n
    },
    ka = !1,
    _ = t; _ !== null; )
        if (t = _,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            _ = e;
        else
            for (; _ !== null; ) {
                t = _;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var m = g.memoizedProps
                                  , w = g.memoizedState
                                  , p = t.stateNode
                                  , h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? m : Mt(t.type, m), w);
                                p.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                        }
                } catch (C) {
                    xe(t, t.return, C)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    _ = e;
                    break
                }
                _ = t.return
            }
    return g = lm,
    lm = !1,
    g
}
function yo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0,
                o !== void 0 && Zc(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}
function gl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function ef(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function $v(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    $v(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Yt],
    delete t[Io],
    delete t[Bc],
    delete t[gE],
    delete t[yE])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Fv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function um(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Fv(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function tf(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ba));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (tf(e, t, n),
        e = e.sibling; e !== null; )
            tf(e, t, n),
            e = e.sibling
}
function nf(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (nf(e, t, n),
        e = e.sibling; e !== null; )
            nf(e, t, n),
            e = e.sibling
}
var Le = null
  , Nt = !1;
function Rn(e, t, n) {
    for (n = n.child; n !== null; )
        Bv(e, t, n),
        n = n.sibling
}
function Bv(e, t, n) {
    if (qt && typeof qt.onCommitFiberUnmount == "function")
        try {
            qt.onCommitFiberUnmount(ll, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ze || Zr(n, t);
    case 6:
        var r = Le
          , i = Nt;
        Le = null,
        Rn(e, t, n),
        Le = r,
        Nt = i,
        Le !== null && (Nt ? (e = Le,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Le.removeChild(n.stateNode));
        break;
    case 18:
        Le !== null && (Nt ? (e = Le,
        n = n.stateNode,
        e.nodeType === 8 ? Lu(e.parentNode, n) : e.nodeType === 1 && Lu(e, n),
        Oo(e)) : Lu(Le, n.stateNode));
        break;
    case 4:
        r = Le,
        i = Nt,
        Le = n.stateNode.containerInfo,
        Nt = !0,
        Rn(e, t, n),
        Le = r,
        Nt = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ze && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var o = i
                  , s = o.destroy;
                o = o.tag,
                s !== void 0 && (o & 2 || o & 4) && Zc(n, t, s),
                i = i.next
            } while (i !== r)
        }
        Rn(e, t, n);
        break;
    case 1:
        if (!ze && (Zr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                xe(n, t, a)
            }
        Rn(e, t, n);
        break;
    case 21:
        Rn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null,
        Rn(e, t, n),
        ze = r) : Rn(e, t, n);
        break;
    default:
        Rn(e, t, n)
    }
}
function cm(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new LE),
        t.forEach(function(r) {
            var i = UE.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function At(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e
                  , s = t
                  , a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Le = a.stateNode,
                        Nt = !1;
                        break e;
                    case 3:
                        Le = a.stateNode.containerInfo,
                        Nt = !0;
                        break e;
                    case 4:
                        Le = a.stateNode.containerInfo,
                        Nt = !0;
                        break e
                    }
                    a = a.return
                }
                if (Le === null)
                    throw Error(N(160));
                Bv(o, s, i),
                Le = null,
                Nt = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (u) {
                xe(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Vv(t, e),
            t = t.sibling
}
function Vv(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (At(t, e),
        Ut(e),
        r & 4) {
            try {
                yo(3, e, e.return),
                gl(3, e)
            } catch (m) {
                xe(e, e.return, m)
            }
            try {
                yo(5, e, e.return)
            } catch (m) {
                xe(e, e.return, m)
            }
        }
        break;
    case 1:
        At(t, e),
        Ut(e),
        r & 512 && n !== null && Zr(n, n.return);
        break;
    case 5:
        if (At(t, e),
        Ut(e),
        r & 512 && n !== null && Zr(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                To(i, "")
            } catch (m) {
                xe(e, e.return, m)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var o = e.memoizedProps
              , s = n !== null ? n.memoizedProps : o
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && o.type === "radio" && o.name != null && u0(i, o),
                    Tc(a, s);
                    var u = Tc(a, o);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s]
                          , f = l[s + 1];
                        c === "style" ? h0(i, f) : c === "dangerouslySetInnerHTML" ? d0(i, f) : c === "children" ? To(i, f) : od(i, c, f, u)
                    }
                    switch (a) {
                    case "input":
                        Sc(i, o);
                        break;
                    case "textarea":
                        c0(i, o);
                        break;
                    case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!o.multiple;
                        var y = o.value;
                        y != null ? si(i, !!o.multiple, y, !1) : d !== !!o.multiple && (o.defaultValue != null ? si(i, !!o.multiple, o.defaultValue, !0) : si(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[Io] = o
                } catch (m) {
                    xe(e, e.return, m)
                }
        }
        break;
    case 6:
        if (At(t, e),
        Ut(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(N(162));
            i = e.stateNode,
            o = e.memoizedProps;
            try {
                i.nodeValue = o
            } catch (m) {
                xe(e, e.return, m)
            }
        }
        break;
    case 3:
        if (At(t, e),
        Ut(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Oo(t.containerInfo)
            } catch (m) {
                xe(e, e.return, m)
            }
        break;
    case 4:
        At(t, e),
        Ut(e);
        break;
    case 13:
        At(t, e),
        Ut(e),
        i = e.child,
        i.flags & 8192 && (o = i.memoizedState !== null,
        i.stateNode.isHidden = o,
        !o || i.alternate !== null && i.alternate.memoizedState !== null || ($d = Ce())),
        r & 4 && cm(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ze = (u = ze) || c,
        At(t, e),
        ze = u) : At(t, e),
        Ut(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (_ = e,
                c = e.child; c !== null; ) {
                    for (f = _ = c; _ !== null; ) {
                        switch (d = _,
                        y = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            yo(4, d, d.return);
                            break;
                        case 1:
                            Zr(d, d.return);
                            var g = d.stateNode;
                            if (typeof g.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    t = r,
                                    g.props = t.memoizedProps,
                                    g.state = t.memoizedState,
                                    g.componentWillUnmount()
                                } catch (m) {
                                    xe(r, n, m)
                                }
                            }
                            break;
                        case 5:
                            Zr(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                dm(f);
                                continue
                            }
                        }
                        y !== null ? (y.return = d,
                        _ = y) : dm(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            i = f.stateNode,
                            u ? (o = i.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = f.stateNode,
                            l = f.memoizedProps.style,
                            s = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = p0("display", s))
                        } catch (m) {
                            xe(e, e.return, m)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (m) {
                            xe(e, e.return, m)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        At(t, e),
        Ut(e),
        r & 4 && cm(e);
        break;
    case 21:
        break;
    default:
        At(t, e),
        Ut(e)
    }
}
function Ut(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Fv(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (To(i, ""),
                r.flags &= -33);
                var o = um(e);
                nf(e, o, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo
                  , a = um(e);
                tf(e, a, s);
                break;
            default:
                throw Error(N(161))
            }
        } catch (l) {
            xe(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function IE(e, t, n) {
    _ = e,
    zv(e)
}
function zv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
        var i = _
          , o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Is;
            if (!s) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || ze;
                a = Is;
                var u = ze;
                if (Is = s,
                (ze = l) && !u)
                    for (_ = i; _ !== null; )
                        s = _,
                        l = s.child,
                        s.tag === 22 && s.memoizedState !== null ? pm(i) : l !== null ? (l.return = s,
                        _ = l) : pm(i);
                for (; o !== null; )
                    _ = o,
                    zv(o),
                    o = o.sibling;
                _ = i,
                Is = a,
                ze = u
            }
            fm(e)
        } else
            i.subtreeFlags & 8772 && o !== null ? (o.return = i,
            _ = o) : fm(e)
    }
}
function fm(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ze || gl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ze)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Mt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Yh(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Yh(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Oo(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(N(163))
                    }
                ze || t.flags & 512 && ef(t)
            } catch (d) {
                xe(t, t.return, d)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function dm(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function pm(e) {
    for (; _ !== null; ) {
        var t = _;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    gl(4, t)
                } catch (l) {
                    xe(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        xe(t, i, l)
                    }
                }
                var o = t.return;
                try {
                    ef(t)
                } catch (l) {
                    xe(t, o, l)
                }
                break;
            case 5:
                var s = t.return;
                try {
                    ef(t)
                } catch (l) {
                    xe(t, s, l)
                }
            }
        } catch (l) {
            xe(t, t.return, l)
        }
        if (t === e) {
            _ = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            _ = a;
            break
        }
        _ = t.return
    }
}
var _E = Math.ceil
  , $a = kn.ReactCurrentDispatcher
  , _d = kn.ReactCurrentOwner
  , kt = kn.ReactCurrentBatchConfig
  , G = 0
  , Me = null
  , Te = null
  , _e = 0
  , it = 0
  , ei = Jn(0)
  , Ae = 0
  , Vo = null
  , kr = 0
  , yl = 0
  , jd = 0
  , vo = null
  , Qe = null
  , $d = 0
  , wi = 1 / 0
  , un = null
  , Fa = !1
  , rf = null
  , zn = null
  , _s = !1
  , _n = null
  , Ba = 0
  , xo = 0
  , of = null
  , ia = -1
  , oa = 0;
function Xe() {
    return G & 6 ? Ce() : ia !== -1 ? ia : ia = Ce()
}
function Un(e) {
    return e.mode & 1 ? G & 2 && _e !== 0 ? _e & -_e : xE.transition !== null ? (oa === 0 && (oa = T0()),
    oa) : (e = J,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : L0(e.type)),
    e) : 1
}
function _t(e, t, n, r) {
    if (50 < xo)
        throw xo = 0,
        of = null,
        Error(N(185));
    ns(e, n, r),
    (!(G & 2) || e !== Me) && (e === Me && (!(G & 2) && (yl |= n),
    Ae === 4 && Dn(e, _e)),
    tt(e, r),
    n === 1 && G === 0 && !(t.mode & 1) && (wi = Ce() + 500,
    pl && Zn()))
}
function tt(e, t) {
    var n = e.callbackNode;
    xC(e, t);
    var r = Ea(e, e === Me ? _e : 0);
    if (r === 0)
        n !== null && Ch(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Ch(n),
        t === 1)
            e.tag === 0 ? vE(hm.bind(null, e)) : J0(hm.bind(null, e)),
            hE(function() {
                !(G & 6) && Zn()
            }),
            n = null;
        else {
            switch (b0(r)) {
            case 1:
                n = cd;
                break;
            case 4:
                n = k0;
                break;
            case 16:
                n = Ca;
                break;
            case 536870912:
                n = P0;
                break;
            default:
                n = Ca
            }
            n = qv(n, Uv.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Uv(e, t) {
    if (ia = -1,
    oa = 0,
    G & 6)
        throw Error(N(327));
    var n = e.callbackNode;
    if (fi() && e.callbackNode !== n)
        return null;
    var r = Ea(e, e === Me ? _e : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Va(e, r);
    else {
        t = r;
        var i = G;
        G |= 2;
        var o = Hv();
        (Me !== e || _e !== t) && (un = null,
        wi = Ce() + 500,
        mr(e, t));
        do
            try {
                FE();
                break
            } catch (a) {
                Wv(e, a)
            }
        while (!0);
        Ed(),
        $a.current = o,
        G = i,
        Te !== null ? t = 0 : (Me = null,
        _e = 0,
        t = Ae)
    }
    if (t !== 0) {
        if (t === 2 && (i = Mc(e),
        i !== 0 && (r = i,
        t = sf(e, i))),
        t === 1)
            throw n = Vo,
            mr(e, 0),
            Dn(e, r),
            tt(e, Ce()),
            n;
        if (t === 6)
            Dn(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !jE(i) && (t = Va(e, r),
            t === 2 && (o = Mc(e),
            o !== 0 && (r = o,
            t = sf(e, o))),
            t === 1))
                throw n = Vo,
                mr(e, 0),
                Dn(e, r),
                tt(e, Ce()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(N(345));
            case 2:
                ir(e, Qe, un);
                break;
            case 3:
                if (Dn(e, r),
                (r & 130023424) === r && (t = $d + 500 - Ce(),
                10 < t)) {
                    if (Ea(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        Xe(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Fc(ir.bind(null, e, Qe, un), t);
                    break
                }
                ir(e, Qe, un);
                break;
            case 4:
                if (Dn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var s = 31 - It(r);
                    o = 1 << s,
                    s = t[s],
                    s > i && (i = s),
                    r &= ~o
                }
                if (r = i,
                r = Ce() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _E(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Fc(ir.bind(null, e, Qe, un), r);
                    break
                }
                ir(e, Qe, un);
                break;
            case 5:
                ir(e, Qe, un);
                break;
            default:
                throw Error(N(329))
            }
        }
    }
    return tt(e, Ce()),
    e.callbackNode === n ? Uv.bind(null, e) : null
}
function sf(e, t) {
    var n = vo;
    return e.current.memoizedState.isDehydrated && (mr(e, t).flags |= 256),
    e = Va(e, t),
    e !== 2 && (t = Qe,
    Qe = n,
    t !== null && af(t)),
    e
}
function af(e) {
    Qe === null ? Qe = e : Qe.push.apply(Qe, e)
}
function jE(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!jt(o(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Dn(e, t) {
    for (t &= ~jd,
    t &= ~yl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - It(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function hm(e) {
    if (G & 6)
        throw Error(N(327));
    fi();
    var t = Ea(e, 0);
    if (!(t & 1))
        return tt(e, Ce()),
        null;
    var n = Va(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Mc(e);
        r !== 0 && (t = r,
        n = sf(e, r))
    }
    if (n === 1)
        throw n = Vo,
        mr(e, 0),
        Dn(e, t),
        tt(e, Ce()),
        n;
    if (n === 6)
        throw Error(N(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    ir(e, Qe, un),
    tt(e, Ce()),
    null
}
function Fd(e, t) {
    var n = G;
    G |= 1;
    try {
        return e(t)
    } finally {
        G = n,
        G === 0 && (wi = Ce() + 500,
        pl && Zn())
    }
}
function Pr(e) {
    _n !== null && _n.tag === 0 && !(G & 6) && fi();
    var t = G;
    G |= 1;
    var n = kt.transition
      , r = J;
    try {
        if (kt.transition = null,
        J = 1,
        e)
            return e()
    } finally {
        J = r,
        kt.transition = n,
        G = t,
        !(G & 6) && Zn()
    }
}
function Bd() {
    it = ei.current,
    se(ei)
}
function mr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    pE(n)),
    Te !== null)
        for (n = Te.return; n !== null; ) {
            var r = n;
            switch (wd(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ra();
                break;
            case 3:
                vi(),
                se(Ze),
                se(Ke),
                Ad();
                break;
            case 5:
                Rd(r);
                break;
            case 4:
                vi();
                break;
            case 13:
                se(fe);
                break;
            case 19:
                se(fe);
                break;
            case 10:
                kd(r.type._context);
                break;
            case 22:
            case 23:
                Bd()
            }
            n = n.return
        }
    if (Me = e,
    Te = e = Wn(e.current, null),
    _e = it = t,
    Ae = 0,
    Vo = null,
    jd = yl = kr = 0,
    Qe = vo = null,
    cr !== null) {
        for (t = 0; t < cr.length; t++)
            if (n = cr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i,
                    r.next = s
                }
                n.pending = r
            }
        cr = null
    }
    return e
}
function Wv(e, t) {
    do {
        var n = Te;
        try {
            if (Ed(),
            ta.current = ja,
            _a) {
                for (var r = pe.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                _a = !1
            }
            if (Er = 0,
            Oe = be = pe = null,
            go = !1,
            $o = 0,
            _d.current = null,
            n === null || n.return === null) {
                Ae = 1,
                Vo = t,
                Te = null;
                break
            }
            e: {
                var o = e
                  , s = n.return
                  , a = n
                  , l = t;
                if (t = _e,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l
                      , c = a
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var y = tm(s);
                    if (y !== null) {
                        y.flags &= -257,
                        nm(y, s, a, o, t),
                        y.mode & 1 && em(o, u, t),
                        t = y,
                        l = u;
                        var g = t.updateQueue;
                        if (g === null) {
                            var m = new Set;
                            m.add(l),
                            t.updateQueue = m
                        } else
                            g.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            em(o, u, t),
                            Vd();
                            break e
                        }
                        l = Error(N(426))
                    }
                } else if (ue && a.mode & 1) {
                    var w = tm(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        nm(w, s, a, o, t),
                        Sd(xi(l, a));
                        break e
                    }
                }
                o = l = xi(l, a),
                Ae !== 4 && (Ae = 2),
                vo === null ? vo = [o] : vo.push(o),
                o = s;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var p = bv(o, l, t);
                        Xh(o, p);
                        break e;
                    case 1:
                        a = l;
                        var h = o.type
                          , v = o.stateNode;
                        if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (zn === null || !zn.has(v)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var C = Rv(o, a, t);
                            Xh(o, C);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            Gv(n)
        } catch (E) {
            t = E,
            Te === n && n !== null && (Te = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Hv() {
    var e = $a.current;
    return $a.current = ja,
    e === null ? ja : e
}
function Vd() {
    (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
    Me === null || !(kr & 268435455) && !(yl & 268435455) || Dn(Me, _e)
}
function Va(e, t) {
    var n = G;
    G |= 2;
    var r = Hv();
    (Me !== e || _e !== t) && (un = null,
    mr(e, t));
    do
        try {
            $E();
            break
        } catch (i) {
            Wv(e, i)
        }
    while (!0);
    if (Ed(),
    G = n,
    $a.current = r,
    Te !== null)
        throw Error(N(261));
    return Me = null,
    _e = 0,
    Ae
}
function $E() {
    for (; Te !== null; )
        Kv(Te)
}
function FE() {
    for (; Te !== null && !cC(); )
        Kv(Te)
}
function Kv(e) {
    var t = Yv(e.alternate, e, it);
    e.memoizedProps = e.pendingProps,
    t === null ? Gv(e) : Te = t,
    _d.current = null
}
function Gv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = NE(n, t),
            n !== null) {
                n.flags &= 32767,
                Te = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Ae = 6,
                Te = null;
                return
            }
        } else if (n = ME(n, t, it),
        n !== null) {
            Te = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Te = t;
            return
        }
        Te = t = e
    } while (t !== null);
    Ae === 0 && (Ae = 5)
}
function ir(e, t, n) {
    var r = J
      , i = kt.transition;
    try {
        kt.transition = null,
        J = 1,
        BE(e, t, n, r)
    } finally {
        kt.transition = i,
        J = r
    }
    return null
}
function BE(e, t, n, r) {
    do
        fi();
    while (_n !== null);
    if (G & 6)
        throw Error(N(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(N(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (wC(e, o),
    e === Me && (Te = Me = null,
    _e = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _s || (_s = !0,
    qv(Ca, function() {
        return fi(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = kt.transition,
        kt.transition = null;
        var s = J;
        J = 1;
        var a = G;
        G |= 4,
        _d.current = null,
        DE(e, n),
        Vv(n, e),
        sE(jc),
        ka = !!_c,
        jc = _c = null,
        e.current = n,
        IE(n),
        fC(),
        G = a,
        J = s,
        kt.transition = o
    } else
        e.current = n;
    if (_s && (_s = !1,
    _n = e,
    Ba = i),
    o = e.pendingLanes,
    o === 0 && (zn = null),
    hC(n.stateNode),
    tt(e, Ce()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Fa)
        throw Fa = !1,
        e = rf,
        rf = null,
        e;
    return Ba & 1 && e.tag !== 0 && fi(),
    o = e.pendingLanes,
    o & 1 ? e === of ? xo++ : (xo = 0,
    of = e) : xo = 0,
    Zn(),
    null
}
function fi() {
    if (_n !== null) {
        var e = b0(Ba)
          , t = kt.transition
          , n = J;
        try {
            if (kt.transition = null,
            J = 16 > e ? 16 : e,
            _n === null)
                var r = !1;
            else {
                if (e = _n,
                _n = null,
                Ba = 0,
                G & 6)
                    throw Error(N(331));
                var i = G;
                for (G |= 4,
                _ = e.current; _ !== null; ) {
                    var o = _
                      , s = o.child;
                    if (_.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (_ = u; _ !== null; ) {
                                    var c = _;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        yo(8, c, o)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        _ = f;
                                    else
                                        for (; _ !== null; ) {
                                            c = _;
                                            var d = c.sibling
                                              , y = c.return;
                                            if ($v(c),
                                            c === u) {
                                                _ = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = y,
                                                _ = d;
                                                break
                                            }
                                            _ = y
                                        }
                                }
                            }
                            var g = o.alternate;
                            if (g !== null) {
                                var m = g.child;
                                if (m !== null) {
                                    g.child = null;
                                    do {
                                        var w = m.sibling;
                                        m.sibling = null,
                                        m = w
                                    } while (m !== null)
                                }
                            }
                            _ = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null)
                        s.return = o,
                        _ = s;
                    else
                        e: for (; _ !== null; ) {
                            if (o = _,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    yo(9, o, o.return)
                                }
                            var p = o.sibling;
                            if (p !== null) {
                                p.return = o.return,
                                _ = p;
                                break e
                            }
                            _ = o.return
                        }
                }
                var h = e.current;
                for (_ = h; _ !== null; ) {
                    s = _;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null)
                        v.return = s,
                        _ = v;
                    else
                        e: for (s = h; _ !== null; ) {
                            if (a = _,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        gl(9, a)
                                    }
                                } catch (E) {
                                    xe(a, a.return, E)
                                }
                            if (a === s) {
                                _ = null;
                                break e
                            }
                            var C = a.sibling;
                            if (C !== null) {
                                C.return = a.return,
                                _ = C;
                                break e
                            }
                            _ = a.return
                        }
                }
                if (G = i,
                Zn(),
                qt && typeof qt.onPostCommitFiberRoot == "function")
                    try {
                        qt.onPostCommitFiberRoot(ll, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            J = n,
            kt.transition = t
        }
    }
    return !1
}
function mm(e, t, n) {
    t = xi(n, t),
    t = bv(e, t, 1),
    e = Vn(e, t, 1),
    t = Xe(),
    e !== null && (ns(e, 1, t),
    tt(e, t))
}
function xe(e, t, n) {
    if (e.tag === 3)
        mm(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                mm(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (zn === null || !zn.has(r))) {
                    e = xi(n, e),
                    e = Rv(t, e, 1),
                    t = Vn(t, e, 1),
                    e = Xe(),
                    t !== null && (ns(t, 1, e),
                    tt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function VE(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Xe(),
    e.pingedLanes |= e.suspendedLanes & n,
    Me === e && (_e & n) === n && (Ae === 4 || Ae === 3 && (_e & 130023424) === _e && 500 > Ce() - $d ? mr(e, 0) : jd |= n),
    tt(e, t)
}
function Xv(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ts,
    Ts <<= 1,
    !(Ts & 130023424) && (Ts = 4194304)) : t = 1);
    var n = Xe();
    e = wn(e, t),
    e !== null && (ns(e, t, n),
    tt(e, n))
}
function zE(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Xv(e, n)
}
function UE(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(N(314))
    }
    r !== null && r.delete(t),
    Xv(e, n)
}
var Yv;
Yv = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ze.current)
            Je = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Je = !1,
                OE(e, t, n);
            Je = !!(e.flags & 131072)
        }
    else
        Je = !1,
        ue && t.flags & 1048576 && Z0(t, Ma, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ra(e, t),
        e = t.pendingProps;
        var i = mi(t, Ke.current);
        ci(t, n),
        i = Md(null, t, r, e, i, n);
        var o = Nd();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        et(r) ? (o = !0,
        Aa(t)) : o = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Td(t),
        i.updater = ml,
        t.stateNode = i,
        i._reactInternals = t,
        Kc(t, r, e, n),
        t = Yc(null, t, r, !0, o, n)) : (t.tag = 0,
        ue && o && xd(t),
        Ge(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ra(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = HE(r),
            e = Mt(r, e),
            i) {
            case 0:
                t = Xc(null, t, r, e, n);
                break e;
            case 1:
                t = om(null, t, r, e, n);
                break e;
            case 11:
                t = rm(null, t, r, e, n);
                break e;
            case 14:
                t = im(null, t, r, Mt(r.type, e), n);
                break e
            }
            throw Error(N(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Mt(r, i),
        Xc(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Mt(r, i),
        om(e, t, r, i, n);
    case 3:
        e: {
            if (Nv(t),
            e === null)
                throw Error(N(387));
            r = t.pendingProps,
            o = t.memoizedState,
            i = o.element,
            ov(e, t),
            Da(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: s.cache,
                    pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                    transitions: s.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    i = xi(Error(N(423)), t),
                    t = sm(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = xi(Error(N(424)), t),
                    t = sm(e, t, r, n, i);
                    break e
                } else
                    for (st = Bn(t.stateNode.containerInfo.firstChild),
                    at = t,
                    ue = !0,
                    Lt = null,
                    n = rv(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (gi(),
                r === i) {
                    t = Sn(e, t, n);
                    break e
                }
                Ge(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return sv(t),
        e === null && Uc(t),
        r = t.type,
        i = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        s = i.children,
        $c(r, i) ? s = null : o !== null && $c(r, o) && (t.flags |= 32),
        Mv(e, t),
        Ge(e, t, s, n),
        t.child;
    case 6:
        return e === null && Uc(t),
        null;
    case 13:
        return Lv(e, t, n);
    case 4:
        return bd(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = yi(t, null, r, n) : Ge(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Mt(r, i),
        rm(e, t, r, i, n);
    case 7:
        return Ge(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ge(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ge(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            o = t.memoizedProps,
            s = i.value,
            ie(Na, r._currentValue),
            r._currentValue = s,
            o !== null)
                if (jt(o.value, s)) {
                    if (o.children === i.children && !Ze.current) {
                        t = Sn(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var a = o.dependencies;
                        if (a !== null) {
                            s = o.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (o.tag === 1) {
                                        l = hn(-1, n & -n),
                                        l.tag = 2;
                                        var u = o.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next,
                                            c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    o.lanes |= n,
                                    l = o.alternate,
                                    l !== null && (l.lanes |= n),
                                    Wc(o.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (o.tag === 10)
                            s = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (s = o.return,
                            s === null)
                                throw Error(N(341));
                            s.lanes |= n,
                            a = s.alternate,
                            a !== null && (a.lanes |= n),
                            Wc(s, n, t),
                            s = o.sibling
                        } else
                            s = o.child;
                        if (s !== null)
                            s.return = o;
                        else
                            for (s = o; s !== null; ) {
                                if (s === t) {
                                    s = null;
                                    break
                                }
                                if (o = s.sibling,
                                o !== null) {
                                    o.return = s.return,
                                    s = o;
                                    break
                                }
                                s = s.return
                            }
                        o = s
                    }
            Ge(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        ci(t, n),
        i = Pt(i),
        r = r(i),
        t.flags |= 1,
        Ge(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Mt(r, t.pendingProps),
        i = Mt(r.type, i),
        im(e, t, r, i, n);
    case 15:
        return Av(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Mt(r, i),
        ra(e, t),
        t.tag = 1,
        et(r) ? (e = !0,
        Aa(t)) : e = !1,
        ci(t, n),
        Tv(t, r, i),
        Kc(t, r, i, n),
        Yc(null, t, r, !0, e, n);
    case 19:
        return Dv(e, t, n);
    case 22:
        return Ov(e, t, n)
    }
    throw Error(N(156, t.tag))
}
;
function qv(e, t) {
    return E0(e, t)
}
function WE(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Et(e, t, n, r) {
    return new WE(e,t,n,r)
}
function zd(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function HE(e) {
    if (typeof e == "function")
        return zd(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === ad)
            return 11;
        if (e === ld)
            return 14
    }
    return 2
}
function Wn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Et(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function sa(e, t, n, r, i, o) {
    var s = 2;
    if (r = e,
    typeof e == "function")
        zd(e) && (s = 1);
    else if (typeof e == "string")
        s = 5;
    else
        e: switch (e) {
        case Wr:
            return gr(n.children, i, o, t);
        case sd:
            s = 8,
            i |= 8;
            break;
        case gc:
            return e = Et(12, n, t, i | 2),
            e.elementType = gc,
            e.lanes = o,
            e;
        case yc:
            return e = Et(13, n, t, i),
            e.elementType = yc,
            e.lanes = o,
            e;
        case vc:
            return e = Et(19, n, t, i),
            e.elementType = vc,
            e.lanes = o,
            e;
        case s0:
            return vl(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case i0:
                    s = 10;
                    break e;
                case o0:
                    s = 9;
                    break e;
                case ad:
                    s = 11;
                    break e;
                case ld:
                    s = 14;
                    break e;
                case Mn:
                    s = 16,
                    r = null;
                    break e
                }
            throw Error(N(130, e == null ? e : typeof e, ""))
        }
    return t = Et(s, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function gr(e, t, n, r) {
    return e = Et(7, e, r, t),
    e.lanes = n,
    e
}
function vl(e, t, n, r) {
    return e = Et(22, e, r, t),
    e.elementType = s0,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Vu(e, t, n) {
    return e = Et(6, e, null, t),
    e.lanes = n,
    e
}
function zu(e, t, n) {
    return t = Et(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function KE(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Cu(0),
    this.expirationTimes = Cu(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Cu(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Ud(e, t, n, r, i, o, s, a, l) {
    return e = new KE(e,t,n,a,l),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Et(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Td(o),
    e
}
function GE(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ur,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Qv(e) {
    if (!e)
        return Kn;
    e = e._reactInternals;
    e: {
        if (Ar(e) !== e || e.tag !== 1)
            throw Error(N(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (et(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (et(n))
            return Q0(e, n, t)
    }
    return t
}
function Jv(e, t, n, r, i, o, s, a, l) {
    return e = Ud(n, r, !0, e, i, o, s, a, l),
    e.context = Qv(null),
    n = e.current,
    r = Xe(),
    i = Un(n),
    o = hn(r, i),
    o.callback = t ?? null,
    Vn(n, o, i),
    e.current.lanes = i,
    ns(e, i, r),
    tt(e, r),
    e
}
function xl(e, t, n, r) {
    var i = t.current
      , o = Xe()
      , s = Un(i);
    return n = Qv(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = hn(o, s),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Vn(i, t, s),
    e !== null && (_t(e, i, s, o),
    ea(e, i, s)),
    s
}
function za(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function gm(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Wd(e, t) {
    gm(e, t),
    (e = e.alternate) && gm(e, t)
}
function XE() {
    return null
}
var Zv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Hd(e) {
    this._internalRoot = e
}
wl.prototype.render = Hd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(N(409));
    xl(e, t, null, null)
}
;
wl.prototype.unmount = Hd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Pr(function() {
            xl(null, e, null, null)
        }),
        t[xn] = null
    }
}
;
function wl(e) {
    this._internalRoot = e
}
wl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = O0();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ln.length && t !== 0 && t < Ln[n].priority; n++)
            ;
        Ln.splice(n, 0, e),
        n === 0 && N0(e)
    }
}
;
function Kd(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Sl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function ym() {}
function YE(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = za(s);
                o.call(u)
            }
        }
        var s = Jv(t, r, e, 0, null, !1, !1, "", ym);
        return e._reactRootContainer = s,
        e[xn] = s.current,
        Lo(e.nodeType === 8 ? e.parentNode : e),
        Pr(),
        s
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = za(l);
            a.call(u)
        }
    }
    var l = Ud(e, 0, !1, null, null, !1, !1, "", ym);
    return e._reactRootContainer = l,
    e[xn] = l.current,
    Lo(e.nodeType === 8 ? e.parentNode : e),
    Pr(function() {
        xl(t, l, n, r)
    }),
    l
}
function Cl(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = za(s);
                a.call(l)
            }
        }
        xl(t, s, e, i)
    } else
        s = YE(n, t, e, i, r);
    return za(s)
}
R0 = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = no(t.pendingLanes);
            n !== 0 && (fd(t, n | 1),
            tt(t, Ce()),
            !(G & 6) && (wi = Ce() + 500,
            Zn()))
        }
        break;
    case 13:
        Pr(function() {
            var r = wn(e, 1);
            if (r !== null) {
                var i = Xe();
                _t(r, e, 1, i)
            }
        }),
        Wd(e, 1)
    }
}
;
dd = function(e) {
    if (e.tag === 13) {
        var t = wn(e, 134217728);
        if (t !== null) {
            var n = Xe();
            _t(t, e, 134217728, n)
        }
        Wd(e, 134217728)
    }
}
;
A0 = function(e) {
    if (e.tag === 13) {
        var t = Un(e)
          , n = wn(e, t);
        if (n !== null) {
            var r = Xe();
            _t(n, e, t, r)
        }
        Wd(e, t)
    }
}
;
O0 = function() {
    return J
}
;
M0 = function(e, t) {
    var n = J;
    try {
        return J = e,
        t()
    } finally {
        J = n
    }
}
;
Rc = function(e, t, n) {
    switch (t) {
    case "input":
        if (Sc(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = dl(r);
                    if (!i)
                        throw Error(N(90));
                    l0(r),
                    Sc(r, i)
                }
            }
        }
        break;
    case "textarea":
        c0(e, n);
        break;
    case "select":
        t = n.value,
        t != null && si(e, !!n.multiple, t, !1)
    }
}
;
y0 = Fd;
v0 = Pr;
var qE = {
    usingClientEntryPoint: !1,
    Events: [is, Xr, dl, m0, g0, Fd]
}
  , Xi = {
    findFiberByHostInstance: ur,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , QE = {
    bundleType: Xi.bundleType,
    version: Xi.version,
    rendererPackageName: Xi.rendererPackageName,
    rendererConfig: Xi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = S0(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Xi.findFiberByHostInstance || XE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var js = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!js.isDisabled && js.supportsFiber)
        try {
            ll = js.inject(QE),
            qt = js
        } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qE;
ht.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(t))
        throw Error(N(200));
    return GE(e, t, null, n)
}
;
ht.createRoot = function(e, t) {
    if (!Kd(e))
        throw Error(N(299));
    var n = !1
      , r = ""
      , i = Zv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Ud(e, 1, !1, null, null, n, !1, r, i),
    e[xn] = t.current,
    Lo(e.nodeType === 8 ? e.parentNode : e),
    new Hd(t)
}
;
ht.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","),
        Error(N(268, e)));
    return e = S0(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ht.flushSync = function(e) {
    return Pr(e)
}
;
ht.hydrate = function(e, t, n) {
    if (!Sl(t))
        throw Error(N(200));
    return Cl(null, e, t, !0, n)
}
;
ht.hydrateRoot = function(e, t, n) {
    if (!Kd(e))
        throw Error(N(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , o = ""
      , s = Zv;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    t = Jv(t, null, e, 1, n ?? null, i, !1, o, s),
    e[xn] = t.current,
    Lo(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new wl(t)
}
;
ht.render = function(e, t, n) {
    if (!Sl(t))
        throw Error(N(200));
    return Cl(null, e, t, !1, n)
}
;
ht.unmountComponentAtNode = function(e) {
    if (!Sl(e))
        throw Error(N(40));
    return e._reactRootContainer ? (Pr(function() {
        Cl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[xn] = null
        })
    }),
    !0) : !1
}
;
ht.unstable_batchedUpdates = Fd;
ht.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Sl(n))
        throw Error(N(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(N(38));
    return Cl(e, t, n, !1, r)
}
;
ht.version = "18.3.1-next-f1338f8080-20240426";
function e1() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e1)
        } catch (e) {
            console.error(e)
        }
}
e1(),
e0.exports = ht;
var t1 = e0.exports;
const $s = zy(t1);
var n1, vm = t1;
n1 = vm.createRoot,
vm.hydrateRoot;
var Gd = {};
Object.defineProperty(Gd, "__esModule", {
    value: !0
});
Gd.parse = ik;
Gd.serialize = ok;
const JE = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/
  , ZE = /^[\u0021-\u003A\u003C-\u007E]*$/
  , ek = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i
  , tk = /^[\u0020-\u003A\u003D-\u007E]*$/
  , nk = Object.prototype.toString
  , rk = ( () => {
    const e = function() {};
    return e.prototype = Object.create(null),
    e
}
)();
function ik(e, t) {
    const n = new rk
      , r = e.length;
    if (r < 2)
        return n;
    const i = (t == null ? void 0 : t.decode) || sk;
    let o = 0;
    do {
        const s = e.indexOf("=", o);
        if (s === -1)
            break;
        const a = e.indexOf(";", o)
          , l = a === -1 ? r : a;
        if (s > l) {
            o = e.lastIndexOf(";", s - 1) + 1;
            continue
        }
        const u = xm(e, o, s)
          , c = wm(e, s, u)
          , f = e.slice(u, c);
        if (n[f] === void 0) {
            let d = xm(e, s + 1, l)
              , y = wm(e, l, d);
            const g = i(e.slice(d, y));
            n[f] = g
        }
        o = l + 1
    } while (o < r);
    return n
}
function xm(e, t, n) {
    do {
        const r = e.charCodeAt(t);
        if (r !== 32 && r !== 9)
            return t
    } while (++t < n);
    return n
}
function wm(e, t, n) {
    for (; t > n; ) {
        const r = e.charCodeAt(--t);
        if (r !== 32 && r !== 9)
            return t + 1
    }
    return n
}
function ok(e, t, n) {
    const r = (n == null ? void 0 : n.encode) || encodeURIComponent;
    if (!JE.test(e))
        throw new TypeError(`argument name is invalid: ${e}`);
    const i = r(t);
    if (!ZE.test(i))
        throw new TypeError(`argument val is invalid: ${t}`);
    let o = e + "=" + i;
    if (!n)
        return o;
    if (n.maxAge !== void 0) {
        if (!Number.isInteger(n.maxAge))
            throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);
        o += "; Max-Age=" + n.maxAge
    }
    if (n.domain) {
        if (!ek.test(n.domain))
            throw new TypeError(`option domain is invalid: ${n.domain}`);
        o += "; Domain=" + n.domain
    }
    if (n.path) {
        if (!tk.test(n.path))
            throw new TypeError(`option path is invalid: ${n.path}`);
        o += "; Path=" + n.path
    }
    if (n.expires) {
        if (!ak(n.expires) || !Number.isFinite(n.expires.valueOf()))
            throw new TypeError(`option expires is invalid: ${n.expires}`);
        o += "; Expires=" + n.expires.toUTCString()
    }
    if (n.httpOnly && (o += "; HttpOnly"),
    n.secure && (o += "; Secure"),
    n.partitioned && (o += "; Partitioned"),
    n.priority)
        switch (typeof n.priority == "string" ? n.priority.toLowerCase() : void 0) {
        case "low":
            o += "; Priority=Low";
            break;
        case "medium":
            o += "; Priority=Medium";
            break;
        case "high":
            o += "; Priority=High";
            break;
        default:
            throw new TypeError(`option priority is invalid: ${n.priority}`)
        }
    if (n.sameSite)
        switch (typeof n.sameSite == "string" ? n.sameSite.toLowerCase() : n.sameSite) {
        case !0:
        case "strict":
            o += "; SameSite=Strict";
            break;
        case "lax":
            o += "; SameSite=Lax";
            break;
        case "none":
            o += "; SameSite=None";
            break;
        default:
            throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)
        }
    return o
}
function sk(e) {
    if (e.indexOf("%") === -1)
        return e;
    try {
        return decodeURIComponent(e)
    } catch {
        return e
    }
}
function ak(e) {
    return nk.call(e) === "[object Date]"
}
/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Sm = "popstate";
function lk(e={}) {
    function t(r, i) {
        let {pathname: o, search: s, hash: a} = r.location;
        return lf("", {
            pathname: o,
            search: s,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : zo(i)
    }
    return ck(t, n, null, e)
}
function he(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function tn(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function uk() {
    return Math.random().toString(36).substring(2, 10)
}
function Cm(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function lf(e, t, n=null, r) {
    return {
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: "",
        ...typeof t == "string" ? Oi(t) : t,
        state: n,
        key: t && t.key || r || uk()
    }
}
function zo({pathname: e="/", search: t="", hash: n=""}) {
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
}
function Oi(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substring(n),
        e = e.substring(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substring(r),
        e = e.substring(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function ck(e, t, n, r={}) {
    let {window: i=document.defaultView, v5Compat: o=!1} = r
      , s = i.history
      , a = "POP"
      , l = null
      , u = c();
    u == null && (u = 0,
    s.replaceState({
        ...s.state,
        idx: u
    }, ""));
    function c() {
        return (s.state || {
            idx: null
        }).idx
    }
    function f() {
        a = "POP";
        let w = c()
          , p = w == null ? null : w - u;
        u = w,
        l && l({
            action: a,
            location: m.location,
            delta: p
        })
    }
    function d(w, p) {
        a = "PUSH";
        let h = lf(m.location, w, p);
        u = c() + 1;
        let v = Cm(h, u)
          , C = m.createHref(h);
        try {
            s.pushState(v, "", C)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError")
                throw E;
            i.location.assign(C)
        }
        o && l && l({
            action: a,
            location: m.location,
            delta: 1
        })
    }
    function y(w, p) {
        a = "REPLACE";
        let h = lf(m.location, w, p);
        u = c();
        let v = Cm(h, u)
          , C = m.createHref(h);
        s.replaceState(v, "", C),
        o && l && l({
            action: a,
            location: m.location,
            delta: 0
        })
    }
    function g(w) {
        let p = i.location.origin !== "null" ? i.location.origin : i.location.href
          , h = typeof w == "string" ? w : zo(w);
        return h = h.replace(/ $/, "%20"),
        he(p, `No window.location.(origin|href) available to create URL for href: ${h}`),
        new URL(h,p)
    }
    let m = {
        get action() {
            return a
        },
        get location() {
            return e(i, s)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(Sm, f),
            l = w,
            () => {
                i.removeEventListener(Sm, f),
                l = null
            }
        },
        createHref(w) {
            return t(i, w)
        },
        createURL: g,
        encodeLocation(w) {
            let p = g(w);
            return {
                pathname: p.pathname,
                search: p.search,
                hash: p.hash
            }
        },
        push: d,
        replace: y,
        go(w) {
            return s.go(w)
        }
    };
    return m
}
function r1(e, t, n="/") {
    return fk(e, t, n, !1)
}
function fk(e, t, n, r) {
    let i = typeof t == "string" ? Oi(t) : t
      , o = Gn(i.pathname || "/", n);
    if (o == null)
        return null;
    let s = i1(e);
    dk(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = Ek(o);
        a = Sk(s[l], u, r)
    }
    return a
}
function i1(e, t=[], n=[], r="") {
    let i = (o, s, a) => {
        let l = {
            relativePath: a === void 0 ? o.path || "" : a,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        l.relativePath.startsWith("/") && (he(l.relativePath.startsWith(r), `Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
        l.relativePath = l.relativePath.slice(r.length));
        let u = mn([r, l.relativePath])
          , c = n.concat(l);
        o.children && o.children.length > 0 && (he(o.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${u}".`),
        i1(o.children, t, c, u)),
        !(o.path == null && !o.index) && t.push({
            path: u,
            score: xk(u, o.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (o, s) => {
        var a;
        if (o.path === "" || !((a = o.path) != null && a.includes("?")))
            i(o, s);
        else
            for (let l of o1(o.path))
                i(o, s, l)
    }
    ),
    t
}
function o1(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , o = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [o, ""] : [o];
    let s = o1(r.join("/"))
      , a = [];
    return a.push(...s.map(l => l === "" ? o : [o, l].join("/"))),
    i && a.push(...s),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function dk(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : wk(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
var pk = /^:[\w-]+$/
  , hk = 3
  , mk = 2
  , gk = 1
  , yk = 10
  , vk = -2
  , Em = e => e === "*";
function xk(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Em) && (r += vk),
    t && (r += mk),
    n.filter(i => !Em(i)).reduce( (i, o) => i + (pk.test(o) ? hk : o === "" ? gk : yk), r)
}
function wk(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Sk(e, t, n=!1) {
    let {routesMeta: r} = e
      , i = {}
      , o = "/"
      , s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , u = a === r.length - 1
          , c = o === "/" ? t : t.slice(o.length) || "/"
          , f = Ua({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: u
        }, c)
          , d = l.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = Ua({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, c)),
        !f)
            return null;
        Object.assign(i, f.params),
        s.push({
            params: i,
            pathname: mn([o, f.pathname]),
            pathnameBase: bk(mn([o, f.pathnameBase])),
            route: d
        }),
        f.pathnameBase !== "/" && (o = mn([o, f.pathnameBase]))
    }
    return s
}
function Ua(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Ck(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let o = i[0]
      , s = o.replace(/(.)\/+$/, "$1")
      , a = i.slice(1);
    return {
        params: r.reduce( (u, {paramName: c, isOptional: f}, d) => {
            if (c === "*") {
                let g = a[d] || "";
                s = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const y = a[d];
            return f && !y ? u[c] = void 0 : u[c] = (y || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: o,
        pathnameBase: s,
        pattern: e
    }
}
function Ck(e, t=!1, n=!0) {
    tn(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function Ek(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return tn(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),
        e
    }
}
function Gn(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function kk(e, t="/") {
    let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? Oi(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Pk(n, t) : t,
        search: Rk(r),
        hash: Ak(i)
    }
}
function Pk(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Uu(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function Tk(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function s1(e) {
    let t = Tk(e);
    return t.map( (n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase)
}
function a1(e, t, n, r=!1) {
    let i;
    typeof e == "string" ? i = Oi(e) : (i = {
        ...e
    },
    he(!i.pathname || !i.pathname.includes("?"), Uu("?", "pathname", "search", i)),
    he(!i.pathname || !i.pathname.includes("#"), Uu("#", "pathname", "hash", i)),
    he(!i.search || !i.search.includes("#"), Uu("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "", s = o ? "/" : i.pathname, a;
    if (s == null)
        a = n;
    else {
        let f = t.length - 1;
        if (!r && s.startsWith("..")) {
            let d = s.split("/");
            for (; d[0] === ".."; )
                d.shift(),
                f -= 1;
            i.pathname = d.join("/")
        }
        a = f >= 0 ? t[f] : "/"
    }
    let l = kk(i, a)
      , u = s && s !== "/" && s.endsWith("/")
      , c = (o || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"),
    l
}
var mn = e => e.join("/").replace(/\/\/+/g, "/")
  , bk = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Rk = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , Ak = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Ok(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
var l1 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(l1);
var Mk = ["GET", ...l1];
new Set(Mk);
var Mi = S.createContext(null);
Mi.displayName = "DataRouter";
var El = S.createContext(null);
El.displayName = "DataRouterState";
var u1 = S.createContext({
    isTransitioning: !1
});
u1.displayName = "ViewTransition";
var Nk = S.createContext(new Map);
Nk.displayName = "Fetchers";
var Lk = S.createContext(null);
Lk.displayName = "Await";
var nn = S.createContext(null);
nn.displayName = "Navigation";
var ss = S.createContext(null);
ss.displayName = "Location";
var Pn = S.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Pn.displayName = "Route";
var Xd = S.createContext(null);
Xd.displayName = "RouteError";
function Dk(e, {relative: t}={}) {
    he(as(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: n, navigator: r} = S.useContext(nn)
      , {hash: i, pathname: o, search: s} = ls(e, {
        relative: t
    })
      , a = o;
    return n !== "/" && (a = o === "/" ? n : mn([n, o])),
    r.createHref({
        pathname: a,
        search: s,
        hash: i
    })
}
function as() {
    return S.useContext(ss) != null
}
function Or() {
    return he(as(), "useLocation() may be used only in the context of a <Router> component."),
    S.useContext(ss).location
}
var c1 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function f1(e) {
    S.useContext(nn).static || S.useLayoutEffect(e)
}
function Ik() {
    let {isDataRoute: e} = S.useContext(Pn);
    return e ? Xk() : _k()
}
function _k() {
    he(as(), "useNavigate() may be used only in the context of a <Router> component.");
    let e = S.useContext(Mi)
      , {basename: t, navigator: n} = S.useContext(nn)
      , {matches: r} = S.useContext(Pn)
      , {pathname: i} = Or()
      , o = JSON.stringify(s1(r))
      , s = S.useRef(!1);
    return f1( () => {
        s.current = !0
    }
    ),
    S.useCallback( (l, u={}) => {
        if (tn(s.current, c1),
        !s.current)
            return;
        if (typeof l == "number") {
            n.go(l);
            return
        }
        let c = a1(l, JSON.parse(o), i, u.relative === "path");
        e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : mn([t, c.pathname])),
        (u.replace ? n.replace : n.push)(c, u.state, u)
    }
    , [t, n, o, i, e])
}
S.createContext(null);
function ls(e, {relative: t}={}) {
    let {matches: n} = S.useContext(Pn)
      , {pathname: r} = Or()
      , i = JSON.stringify(s1(n));
    return S.useMemo( () => a1(e, JSON.parse(i), r, t === "path"), [e, i, r, t])
}
function jk(e, t) {
    return d1(e, t)
}
function d1(e, t, n, r) {
    var h;
    he(as(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: i, static: o} = S.useContext(nn)
      , {matches: s} = S.useContext(Pn)
      , a = s[s.length - 1]
      , l = a ? a.params : {}
      , u = a ? a.pathname : "/"
      , c = a ? a.pathnameBase : "/"
      , f = a && a.route;
    {
        let v = f && f.path || "";
        p1(u, !f || v.endsWith("*") || v.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v === "/" ? "*" : `${v}/*`}">.`)
    }
    let d = Or(), y;
    if (t) {
        let v = typeof t == "string" ? Oi(t) : t;
        he(c === "/" || ((h = v.pathname) == null ? void 0 : h.startsWith(c)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${v.pathname}" was given in the \`location\` prop.`),
        y = v
    } else
        y = d;
    let g = y.pathname || "/"
      , m = g;
    if (c !== "/") {
        let v = c.replace(/^\//, "").split("/");
        m = "/" + g.replace(/^\//, "").split("/").slice(v.length).join("/")
    }
    let w = !o && n && n.matches && n.matches.length > 0 ? n.matches : r1(e, {
        pathname: m
    });
    tn(f || w != null, `No routes matched location "${y.pathname}${y.search}${y.hash}" `),
    tn(w == null || w[w.length - 1].route.element !== void 0 || w[w.length - 1].route.Component !== void 0 || w[w.length - 1].route.lazy !== void 0, `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let p = zk(w && w.map(v => Object.assign({}, v, {
        params: Object.assign({}, l, v.params),
        pathname: mn([c, i.encodeLocation ? i.encodeLocation(v.pathname).pathname : v.pathname]),
        pathnameBase: v.pathnameBase === "/" ? c : mn([c, i.encodeLocation ? i.encodeLocation(v.pathnameBase).pathname : v.pathnameBase])
    })), s, n, r);
    return t && p ? S.createElement(ss.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...y
            },
            navigationType: "POP"
        }
    }, p) : p
}
function $k() {
    let e = Gk()
      , t = Ok(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , r = "rgba(200,200,200, 0.5)"
      , i = {
        padding: "0.5rem",
        backgroundColor: r
    }
      , o = {
        padding: "2px 4px",
        backgroundColor: r
    }
      , s = null;
    return console.error("Error handled by React Router default ErrorBoundary:", e),
    s = S.createElement(S.Fragment, null, S.createElement("p", null, "💿 Hey developer 👋"), S.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", S.createElement("code", {
        style: o
    }, "ErrorBoundary"), " or", " ", S.createElement("code", {
        style: o
    }, "errorElement"), " prop on your route.")),
    S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? S.createElement("pre", {
        style: i
    }, n) : null, s)
}
var Fk = S.createElement($k, null)
  , Bk = class extends S.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
        }
    }
    componentDidCatch(e, t) {
        console.error("React Router caught the following error during render", e, t)
    }
    render() {
        return this.state.error !== void 0 ? S.createElement(Pn.Provider, {
            value: this.props.routeContext
        }, S.createElement(Xd.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
;
function Vk({routeContext: e, match: t, children: n}) {
    let r = S.useContext(Mi);
    return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    S.createElement(Pn.Provider, {
        value: e
    }, n)
}
function zk(e, t=[], n=null, r=null) {
    if (e == null) {
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if (t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let i = e
      , o = n == null ? void 0 : n.errors;
    if (o != null) {
        let l = i.findIndex(u => u.route.id && (o == null ? void 0 : o[u.route.id]) !== void 0);
        he(l >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),
        i = i.slice(0, Math.min(i.length, l + 1))
    }
    let s = !1
      , a = -1;
    if (n)
        for (let l = 0; l < i.length; l++) {
            let u = i[l];
            if ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (a = l),
            u.route.id) {
                let {loaderData: c, errors: f} = n
                  , d = u.route.loader && !c.hasOwnProperty(u.route.id) && (!f || f[u.route.id] === void 0);
                if (u.route.lazy || d) {
                    s = !0,
                    a >= 0 ? i = i.slice(0, a + 1) : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight( (l, u, c) => {
        let f, d = !1, y = null, g = null;
        n && (f = o && u.route.id ? o[u.route.id] : void 0,
        y = u.route.errorElement || Fk,
        s && (a < 0 && c === 0 ? (p1("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        d = !0,
        g = null) : a === c && (d = !0,
        g = u.route.hydrateFallbackElement || null)));
        let m = t.concat(i.slice(0, c + 1))
          , w = () => {
            let p;
            return f ? p = y : d ? p = g : u.route.Component ? p = S.createElement(u.route.Component, null) : u.route.element ? p = u.route.element : p = l,
            S.createElement(Vk, {
                match: u,
                routeContext: {
                    outlet: l,
                    matches: m,
                    isDataRoute: n != null
                },
                children: p
            })
        }
        ;
        return n && (u.route.ErrorBoundary || u.route.errorElement || c === 0) ? S.createElement(Bk, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: f,
            children: w(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : w()
    }
    , null)
}
function Yd(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Uk(e) {
    let t = S.useContext(Mi);
    return he(t, Yd(e)),
    t
}
function Wk(e) {
    let t = S.useContext(El);
    return he(t, Yd(e)),
    t
}
function Hk(e) {
    let t = S.useContext(Pn);
    return he(t, Yd(e)),
    t
}
function qd(e) {
    let t = Hk(e)
      , n = t.matches[t.matches.length - 1];
    return he(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
}
function Kk() {
    return qd("useRouteId")
}
function Gk() {
    var r;
    let e = S.useContext(Xd)
      , t = Wk("useRouteError")
      , n = qd("useRouteError");
    return e !== void 0 ? e : (r = t.errors) == null ? void 0 : r[n]
}
function Xk() {
    let {router: e} = Uk("useNavigate")
      , t = qd("useNavigate")
      , n = S.useRef(!1);
    return f1( () => {
        n.current = !0
    }
    ),
    S.useCallback(async (i, o={}) => {
        tn(n.current, c1),
        n.current && (typeof i == "number" ? e.navigate(i) : await e.navigate(i, {
            fromRouteId: t,
            ...o
        }))
    }
    , [e, t])
}
var km = {};
function p1(e, t, n) {
    !t && !km[e] && (km[e] = !0,
    tn(!1, n))
}
S.memo(Yk);
function Yk({routes: e, future: t, state: n}) {
    return d1(e, void 0, n, t)
}
function uf(e) {
    he(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function qk({basename: e="/", children: t=null, location: n, navigationType: r="POP", navigator: i, static: o=!1}) {
    he(!as(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let s = e.replace(/^\/*/, "/")
      , a = S.useMemo( () => ({
        basename: s,
        navigator: i,
        static: o,
        future: {}
    }), [s, i, o]);
    typeof n == "string" && (n = Oi(n));
    let {pathname: l="/", search: u="", hash: c="", state: f=null, key: d="default"} = n
      , y = S.useMemo( () => {
        let g = Gn(l, s);
        return g == null ? null : {
            location: {
                pathname: g,
                search: u,
                hash: c,
                state: f,
                key: d
            },
            navigationType: r
        }
    }
    , [s, l, u, c, f, d, r]);
    return tn(y != null, `<Router basename="${s}"> is not able to match the URL "${l}${u}${c}" because it does not start with the basename, so the <Router> won't render anything.`),
    y == null ? null : S.createElement(nn.Provider, {
        value: a
    }, S.createElement(ss.Provider, {
        children: t,
        value: y
    }))
}
function Qk({children: e, location: t}) {
    return jk(cf(e), t)
}
function cf(e, t=[]) {
    let n = [];
    return S.Children.forEach(e, (r, i) => {
        if (!S.isValidElement(r))
            return;
        let o = [...t, i];
        if (r.type === S.Fragment) {
            n.push.apply(n, cf(r.props.children, o));
            return
        }
        he(r.type === uf, `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        he(!r.props.index || !r.props.children, "An index route cannot have child routes.");
        let s = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            hydrateFallbackElement: r.props.hydrateFallbackElement,
            HydrateFallback: r.props.HydrateFallback,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = cf(r.props.children, o)),
        n.push(s)
    }
    ),
    n
}
var aa = "get"
  , la = "application/x-www-form-urlencoded";
function kl(e) {
    return e != null && typeof e.tagName == "string"
}
function Jk(e) {
    return kl(e) && e.tagName.toLowerCase() === "button"
}
function Zk(e) {
    return kl(e) && e.tagName.toLowerCase() === "form"
}
function e2(e) {
    return kl(e) && e.tagName.toLowerCase() === "input"
}
function t2(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function n2(e, t) {
    return e.button === 0 && (!t || t === "_self") && !t2(e)
}
var Fs = null;
function r2() {
    if (Fs === null)
        try {
            new FormData(document.createElement("form"),0),
            Fs = !1
        } catch {
            Fs = !0
        }
    return Fs
}
var i2 = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Wu(e) {
    return e != null && !i2.has(e) ? (tn(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${la}"`),
    null) : e
}
function o2(e, t) {
    let n, r, i, o, s;
    if (Zk(e)) {
        let a = e.getAttribute("action");
        r = a ? Gn(a, t) : null,
        n = e.getAttribute("method") || aa,
        i = Wu(e.getAttribute("enctype")) || la,
        o = new FormData(e)
    } else if (Jk(e) || e2(e) && (e.type === "submit" || e.type === "image")) {
        let a = e.form;
        if (a == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let l = e.getAttribute("formaction") || a.getAttribute("action");
        if (r = l ? Gn(l, t) : null,
        n = e.getAttribute("formmethod") || a.getAttribute("method") || aa,
        i = Wu(e.getAttribute("formenctype")) || Wu(a.getAttribute("enctype")) || la,
        o = new FormData(a,e),
        !r2()) {
            let {name: u, type: c, value: f} = e;
            if (c === "image") {
                let d = u ? `${u}.` : "";
                o.append(`${d}x`, "0"),
                o.append(`${d}y`, "0")
            } else
                u && o.append(u, f)
        }
    } else {
        if (kl(e))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        n = aa,
        r = null,
        i = la,
        s = e
    }
    return o && i === "text/plain" && (s = o,
    o = void 0),
    {
        action: r,
        method: n.toLowerCase(),
        encType: i,
        formData: o,
        body: s
    }
}
function Qd(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
async function s2(e, t) {
    if (e.id in t)
        return t[e.id];
    try {
        let n = await import(e.module);
        return t[e.id] = n,
        n
    } catch (n) {
        return console.error(`Error loading route module \`${e.module}\`, reloading page...`),
        console.error(n),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function a2(e) {
    return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string"
}
async function l2(e, t, n) {
    let r = await Promise.all(e.map(async i => {
        let o = t.routes[i.route.id];
        if (o) {
            let s = await s2(o, n);
            return s.links ? s.links() : []
        }
        return []
    }
    ));
    return d2(r.flat(1).filter(a2).filter(i => i.rel === "stylesheet" || i.rel === "preload").map(i => i.rel === "stylesheet" ? {
        ...i,
        rel: "prefetch",
        as: "style"
    } : {
        ...i,
        rel: "prefetch"
    }))
}
function Pm(e, t, n, r, i, o) {
    let s = (l, u) => n[u] ? l.route.id !== n[u].route.id : !0
      , a = (l, u) => {
        var c;
        return n[u].pathname !== l.pathname || ((c = n[u].route.path) == null ? void 0 : c.endsWith("*")) && n[u].params["*"] !== l.params["*"]
    }
    ;
    return o === "assets" ? t.filter( (l, u) => s(l, u) || a(l, u)) : o === "data" ? t.filter( (l, u) => {
        var f;
        let c = r.routes[l.route.id];
        if (!c || !c.hasLoader)
            return !1;
        if (s(l, u) || a(l, u))
            return !0;
        if (l.route.shouldRevalidate) {
            let d = l.route.shouldRevalidate({
                currentUrl: new URL(i.pathname + i.search + i.hash,window.origin),
                currentParams: ((f = n[0]) == null ? void 0 : f.params) || {},
                nextUrl: new URL(e,window.origin),
                nextParams: l.params,
                defaultShouldRevalidate: !0
            });
            if (typeof d == "boolean")
                return d
        }
        return !0
    }
    ) : []
}
function u2(e, t) {
    return c2(e.map(n => {
        let r = t.routes[n.route.id];
        if (!r)
            return [];
        let i = [r.module];
        return r.imports && (i = i.concat(r.imports)),
        i
    }
    ).flat(1))
}
function c2(e) {
    return [...new Set(e)]
}
function f2(e) {
    let t = {}
      , n = Object.keys(e).sort();
    for (let r of n)
        t[r] = e[r];
    return t
}
function d2(e, t) {
    let n = new Set;
    return new Set(t),
    e.reduce( (r, i) => {
        let o = JSON.stringify(f2(i));
        return n.has(o) || (n.add(o),
        r.push({
            key: o,
            link: i
        })),
        r
    }
    , [])
}
function p2(e) {
    let t = typeof e == "string" ? new URL(e,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
    return t.pathname === "/" ? t.pathname = "_root.data" : t.pathname = `${t.pathname.replace(/\/$/, "")}.data`,
    t
}
function h2() {
    let e = S.useContext(Mi);
    return Qd(e, "You must render this element inside a <DataRouterContext.Provider> element"),
    e
}
function m2() {
    let e = S.useContext(El);
    return Qd(e, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    e
}
var Jd = S.createContext(void 0);
Jd.displayName = "FrameworkContext";
function h1() {
    let e = S.useContext(Jd);
    return Qd(e, "You must render this element inside a <HydratedRouter> element"),
    e
}
function g2(e, t) {
    let n = S.useContext(Jd)
      , [r,i] = S.useState(!1)
      , [o,s] = S.useState(!1)
      , {onFocus: a, onBlur: l, onMouseEnter: u, onMouseLeave: c, onTouchStart: f} = t
      , d = S.useRef(null);
    S.useEffect( () => {
        if (e === "render" && s(!0),
        e === "viewport") {
            let m = p => {
                p.forEach(h => {
                    s(h.isIntersecting)
                }
                )
            }
              , w = new IntersectionObserver(m,{
                threshold: .5
            });
            return d.current && w.observe(d.current),
            () => {
                w.disconnect()
            }
        }
    }
    , [e]),
    S.useEffect( () => {
        if (r) {
            let m = setTimeout( () => {
                s(!0)
            }
            , 100);
            return () => {
                clearTimeout(m)
            }
        }
    }
    , [r]);
    let y = () => {
        i(!0)
    }
      , g = () => {
        i(!1),
        s(!1)
    }
    ;
    return n ? e !== "intent" ? [o, d, {}] : [o, d, {
        onFocus: Yi(a, y),
        onBlur: Yi(l, g),
        onMouseEnter: Yi(u, y),
        onMouseLeave: Yi(c, g),
        onTouchStart: Yi(f, y)
    }] : [!1, d, {}]
}
function Yi(e, t) {
    return n => {
        e && e(n),
        n.defaultPrevented || t(n)
    }
}
function y2({page: e, ...t}) {
    let {router: n} = h2()
      , r = S.useMemo( () => r1(n.routes, e, n.basename), [n.routes, e, n.basename]);
    return r ? S.createElement(x2, {
        page: e,
        matches: r,
        ...t
    }) : null
}
function v2(e) {
    let {manifest: t, routeModules: n} = h1()
      , [r,i] = S.useState([]);
    return S.useEffect( () => {
        let o = !1;
        return l2(e, t, n).then(s => {
            o || i(s)
        }
        ),
        () => {
            o = !0
        }
    }
    , [e, t, n]),
    r
}
function x2({page: e, matches: t, ...n}) {
    let r = Or()
      , {manifest: i, routeModules: o} = h1()
      , {loaderData: s, matches: a} = m2()
      , l = S.useMemo( () => Pm(e, t, a, i, r, "data"), [e, t, a, i, r])
      , u = S.useMemo( () => Pm(e, t, a, i, r, "assets"), [e, t, a, i, r])
      , c = S.useMemo( () => {
        if (e === r.pathname + r.search + r.hash)
            return [];
        let y = new Set
          , g = !1;
        if (t.forEach(w => {
            var h;
            let p = i.routes[w.route.id];
            !p || !p.hasLoader || (!l.some(v => v.route.id === w.route.id) && w.route.id in s && ((h = o[w.route.id]) != null && h.shouldRevalidate) || p.hasClientLoader ? g = !0 : y.add(w.route.id))
        }
        ),
        y.size === 0)
            return [];
        let m = p2(e);
        return g && y.size > 0 && m.searchParams.set("_routes", t.filter(w => y.has(w.route.id)).map(w => w.route.id).join(",")),
        [m.pathname + m.search]
    }
    , [s, r, i, l, t, e, o])
      , f = S.useMemo( () => u2(u, i), [u, i])
      , d = v2(u);
    return S.createElement(S.Fragment, null, c.map(y => S.createElement("link", {
        key: y,
        rel: "prefetch",
        as: "fetch",
        href: y,
        ...n
    })), f.map(y => S.createElement("link", {
        key: y,
        rel: "modulepreload",
        href: y,
        ...n
    })), d.map( ({key: y, link: g}) => S.createElement("link", {
        key: y,
        ...g
    })))
}
function w2(...e) {
    return t => {
        e.forEach(n => {
            typeof n == "function" ? n(t) : n != null && (n.current = t)
        }
        )
    }
}
var m1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    m1 && (window.__reactRouterVersion = "7.1.5")
} catch {}
function S2({basename: e, children: t, window: n}) {
    let r = S.useRef();
    r.current == null && (r.current = lk({
        window: n,
        v5Compat: !0
    }));
    let i = r.current
      , [o,s] = S.useState({
        action: i.action,
        location: i.location
    })
      , a = S.useCallback(l => {
        S.startTransition( () => s(l))
    }
    , [s]);
    return S.useLayoutEffect( () => i.listen(a), [i, a]),
    S.createElement(qk, {
        basename: e,
        children: t,
        location: o.location,
        navigationType: o.action,
        navigator: i
    })
}
var g1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Zd = S.forwardRef(function({onClick: t, discover: n="render", prefetch: r="none", relative: i, reloadDocument: o, replace: s, state: a, target: l, to: u, preventScrollReset: c, viewTransition: f, ...d}, y) {
    let {basename: g} = S.useContext(nn), m = typeof u == "string" && g1.test(u), w, p = !1;
    if (typeof u == "string" && m && (w = u,
    m1))
        try {
            let L = new URL(window.location.href)
              , x = u.startsWith("//") ? new URL(L.protocol + u) : new URL(u)
              , O = Gn(x.pathname, g);
            x.origin === L.origin && O != null ? u = O + x.search + x.hash : p = !0
        } catch {
            tn(!1, `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    let h = Dk(u, {
        relative: i
    })
      , [v,C,E] = g2(r, d)
      , P = k2(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: f
    });
    function T(L) {
        t && t(L),
        L.defaultPrevented || P(L)
    }
    let b = S.createElement("a", {
        ...d,
        ...E,
        href: w || h,
        onClick: p || o ? t : T,
        ref: w2(y, C),
        target: l,
        "data-discover": !m && n === "render" ? "true" : void 0
    });
    return v && !m ? S.createElement(S.Fragment, null, b, S.createElement(y2, {
        page: h
    })) : b
});
Zd.displayName = "Link";
var ff = S.forwardRef(function({"aria-current": t="page", caseSensitive: n=!1, className: r="", end: i=!1, style: o, to: s, viewTransition: a, children: l, ...u}, c) {
    let f = ls(s, {
        relative: u.relative
    })
      , d = Or()
      , y = S.useContext(El)
      , {navigator: g, basename: m} = S.useContext(nn)
      , w = y != null && A2(f) && a === !0
      , p = g.encodeLocation ? g.encodeLocation(f).pathname : f.pathname
      , h = d.pathname
      , v = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
    n || (h = h.toLowerCase(),
    v = v ? v.toLowerCase() : null,
    p = p.toLowerCase()),
    v && m && (v = Gn(v, m) || v);
    const C = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let E = h === p || !i && h.startsWith(p) && h.charAt(C) === "/", P = v != null && (v === p || !i && v.startsWith(p) && v.charAt(p.length) === "/"), T = {
        isActive: E,
        isPending: P,
        isTransitioning: w
    }, b = E ? t : void 0, L;
    typeof r == "function" ? L = r(T) : L = [r, E ? "active" : null, P ? "pending" : null, w ? "transitioning" : null].filter(Boolean).join(" ");
    let x = typeof o == "function" ? o(T) : o;
    return S.createElement(Zd, {
        ...u,
        "aria-current": b,
        className: L,
        ref: c,
        style: x,
        to: s,
        viewTransition: a
    }, typeof l == "function" ? l(T) : l)
});
ff.displayName = "NavLink";
var C2 = S.forwardRef( ({discover: e="render", fetcherKey: t, navigate: n, reloadDocument: r, replace: i, state: o, method: s=aa, action: a, onSubmit: l, relative: u, preventScrollReset: c, viewTransition: f, ...d}, y) => {
    let g = b2()
      , m = R2(a, {
        relative: u
    })
      , w = s.toLowerCase() === "get" ? "get" : "post"
      , p = typeof a == "string" && g1.test(a)
      , h = v => {
        if (l && l(v),
        v.defaultPrevented)
            return;
        v.preventDefault();
        let C = v.nativeEvent.submitter
          , E = (C == null ? void 0 : C.getAttribute("formmethod")) || s;
        g(C || v.currentTarget, {
            fetcherKey: t,
            method: E,
            navigate: n,
            replace: i,
            state: o,
            relative: u,
            preventScrollReset: c,
            viewTransition: f
        })
    }
    ;
    return S.createElement("form", {
        ref: y,
        method: w,
        action: m,
        onSubmit: r ? l : h,
        ...d,
        "data-discover": !p && e === "render" ? "true" : void 0
    })
}
);
C2.displayName = "Form";
function E2(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function y1(e) {
    let t = S.useContext(Mi);
    return he(t, E2(e)),
    t
}
function k2(e, {target: t, replace: n, state: r, preventScrollReset: i, relative: o, viewTransition: s}={}) {
    let a = Ik()
      , l = Or()
      , u = ls(e, {
        relative: o
    });
    return S.useCallback(c => {
        if (n2(c, t)) {
            c.preventDefault();
            let f = n !== void 0 ? n : zo(l) === zo(u);
            a(e, {
                replace: f,
                state: r,
                preventScrollReset: i,
                relative: o,
                viewTransition: s
            })
        }
    }
    , [l, a, u, n, r, t, e, i, o, s])
}
var P2 = 0
  , T2 = () => `__${String(++P2)}__`;
function b2() {
    let {router: e} = y1("useSubmit")
      , {basename: t} = S.useContext(nn)
      , n = Kk();
    return S.useCallback(async (r, i={}) => {
        let {action: o, method: s, encType: a, formData: l, body: u} = o2(r, t);
        if (i.navigate === !1) {
            let c = i.fetcherKey || T2();
            await e.fetch(c, n, i.action || o, {
                preventScrollReset: i.preventScrollReset,
                formData: l,
                body: u,
                formMethod: i.method || s,
                formEncType: i.encType || a,
                flushSync: i.flushSync
            })
        } else
            await e.navigate(i.action || o, {
                preventScrollReset: i.preventScrollReset,
                formData: l,
                body: u,
                formMethod: i.method || s,
                formEncType: i.encType || a,
                replace: i.replace,
                state: i.state,
                fromRouteId: n,
                flushSync: i.flushSync,
                viewTransition: i.viewTransition
            })
    }
    , [e, t, n])
}
function R2(e, {relative: t}={}) {
    let {basename: n} = S.useContext(nn)
      , r = S.useContext(Pn);
    he(r, "useFormAction must be used inside a RouteContext");
    let[i] = r.matches.slice(-1)
      , o = {
        ...ls(e || ".", {
            relative: t
        })
    }
      , s = Or();
    if (e == null) {
        o.search = s.search;
        let a = new URLSearchParams(o.search)
          , l = a.getAll("index");
        if (l.some(c => c === "")) {
            a.delete("index"),
            l.filter(f => f).forEach(f => a.append("index", f));
            let c = a.toString();
            o.search = c ? `?${c}` : ""
        }
    }
    return (!e || e === ".") && i.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (o.pathname = o.pathname === "/" ? n : mn([n, o.pathname])),
    zo(o)
}
function A2(e, t={}) {
    let n = S.useContext(u1);
    he(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: r} = y1("useViewTransitionState")
      , i = ls(e, {
        relative: t.relative
    });
    if (!n.isTransitioning)
        return !1;
    let o = Gn(n.currentLocation.pathname, r) || n.currentLocation.pathname
      , s = Gn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return Ua(i.pathname, s) != null || Ua(i.pathname, o) != null
}
new TextEncoder;
const ep = S.createContext({});
function tp(e) {
    const t = S.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const Pl = S.createContext(null)
  , np = S.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
class O2 extends S.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function M2({children: e, isPresent: t}) {
    const n = S.useId()
      , r = S.useRef(null)
      , i = S.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: o} = S.useContext(np);
    return S.useInsertionEffect( () => {
        const {width: s, height: a, top: l, left: u} = i.current;
        if (t || !r.current || !s || !a)
            return;
        r.current.dataset.motionPopId = n;
        const c = document.createElement("style");
        return o && (c.nonce = o),
        document.head.appendChild(c),
        c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
            document.head.removeChild(c)
        }
    }
    , [t]),
    k.jsx(O2, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: S.cloneElement(e, {
            ref: r
        })
    })
}
const N2 = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: o, mode: s}) => {
    const a = tp(L2)
      , l = S.useId()
      , u = S.useCallback(f => {
        a.set(f, !0);
        for (const d of a.values())
            if (!d)
                return;
        r && r()
    }
    , [a, r])
      , c = S.useMemo( () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: f => (a.set(f, !1),
        () => a.delete(f))
    }), o ? [Math.random(), u] : [n, u]);
    return S.useMemo( () => {
        a.forEach( (f, d) => a.set(d, !1))
    }
    , [n]),
    S.useEffect( () => {
        !n && !a.size && r && r()
    }
    , [n]),
    s === "popLayout" && (e = k.jsx(M2, {
        isPresent: n,
        children: e
    })),
    k.jsx(Pl.Provider, {
        value: c,
        children: e
    })
}
;
function L2() {
    return new Map
}
function v1(e=!0) {
    const t = S.useContext(Pl);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , o = S.useId();
    S.useEffect( () => {
        e && i(o)
    }
    , [e]);
    const s = S.useCallback( () => e && r && r(o), [o, r, e]);
    return !n && r ? [!1, s] : [!0]
}
const Bs = e => e.key || "";
function Tm(e) {
    const t = [];
    return S.Children.forEach(e, n => {
        S.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const rp = typeof window < "u"
  , x1 = rp ? S.useLayoutEffect : S.useEffect
  , D2 = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: o="sync", propagate: s=!1}) => {
    const [a,l] = v1(s)
      , u = S.useMemo( () => Tm(e), [e])
      , c = s && !a ? [] : u.map(Bs)
      , f = S.useRef(!0)
      , d = S.useRef(u)
      , y = tp( () => new Map)
      , [g,m] = S.useState(u)
      , [w,p] = S.useState(u);
    x1( () => {
        f.current = !1,
        d.current = u;
        for (let C = 0; C < w.length; C++) {
            const E = Bs(w[C]);
            c.includes(E) ? y.delete(E) : y.get(E) !== !0 && y.set(E, !1)
        }
    }
    , [w, c.length, c.join("-")]);
    const h = [];
    if (u !== g) {
        let C = [...u];
        for (let E = 0; E < w.length; E++) {
            const P = w[E]
              , T = Bs(P);
            c.includes(T) || (C.splice(E, 0, P),
            h.push(P))
        }
        o === "wait" && h.length && (C = h),
        p(Tm(C)),
        m(u);
        return
    }
    const {forceRender: v} = S.useContext(ep);
    return k.jsx(k.Fragment, {
        children: w.map(C => {
            const E = Bs(C)
              , P = s && !a ? !1 : u === w || c.includes(E)
              , T = () => {
                if (y.has(E))
                    y.set(E, !0);
                else
                    return;
                let b = !0;
                y.forEach(L => {
                    L || (b = !1)
                }
                ),
                b && (v == null || v(),
                p(d.current),
                s && (l == null || l()),
                r && r())
            }
            ;
            return k.jsx(N2, {
                isPresent: P,
                initial: !f.current || n ? void 0 : !1,
                custom: P ? void 0 : t,
                presenceAffectsLayout: i,
                mode: o,
                onExitComplete: P ? void 0 : T,
                children: C
            }, E)
        }
        )
    })
}
  , lt = e => e;
let df = lt;
function ip(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const Si = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , gn = e => e * 1e3
  , yn = e => e / 1e3
  , I2 = {
    skipAnimations: !1,
    useManualTiming: !1
};
function _2(e) {
    let t = new Set
      , n = new Set
      , r = !1
      , i = !1;
    const o = new WeakSet;
    let s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function a(u) {
        o.has(u) && (l.schedule(u),
        e()),
        u(s)
    }
    const l = {
        schedule: (u, c=!1, f=!1) => {
            const y = f && r ? t : n;
            return c && o.add(u),
            y.has(u) || y.add(u),
            u
        }
        ,
        cancel: u => {
            n.delete(u),
            o.delete(u)
        }
        ,
        process: u => {
            if (s = u,
            r) {
                i = !0;
                return
            }
            r = !0,
            [t,n] = [n, t],
            t.forEach(a),
            t.clear(),
            r = !1,
            i && (i = !1,
            l.process(u))
        }
    };
    return l
}
const Vs = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , j2 = 40;
function w1(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = () => n = !0
      , s = Vs.reduce( (p, h) => (p[h] = _2(o),
    p), {})
      , {read: a, resolveKeyframes: l, update: u, preRender: c, render: f, postRender: d} = s
      , y = () => {
        const p = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, j2), 1),
        i.timestamp = p,
        i.isProcessing = !0,
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(y))
    }
      , g = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(y)
    }
    ;
    return {
        schedule: Vs.reduce( (p, h) => {
            const v = s[h];
            return p[h] = (C, E=!1, P=!1) => (n || g(),
            v.schedule(C, E, P)),
            p
        }
        , {}),
        cancel: p => {
            for (let h = 0; h < Vs.length; h++)
                s[Vs[h]].cancel(p)
        }
        ,
        state: i,
        steps: s
    }
}
const {schedule: ae, cancel: Xn, state: De, steps: Hu} = w1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : lt, !0)
  , S1 = S.createContext({
    strict: !1
})
  , bm = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Ci = {};
for (const e in bm)
    Ci[e] = {
        isEnabled: t => bm[e].some(n => !!t[n])
    };
function $2(e) {
    for (const t in e)
        Ci[t] = {
            ...Ci[t],
            ...e[t]
        }
}
const F2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Wa(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || F2.has(e)
}
let C1 = e => !Wa(e);
function B2(e) {
    e && (C1 = t => t.startsWith("on") ? !Wa(t) : e(t))
}
try {
    B2(require("@emotion/is-prop-valid").default)
} catch {}
function V2(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (C1(i) || n === !0 && Wa(i) || !t && !Wa(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function z2(e) {
    if (typeof Proxy > "u")
        return e;
    const t = new Map
      , n = (...r) => e(...r);
    return new Proxy(n,{
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)),
        t.get(i))
    })
}
const Tl = S.createContext({});
function Uo(e) {
    return typeof e == "string" || Array.isArray(e)
}
function bl(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const op = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , sp = ["initial", ...op];
function Rl(e) {
    return bl(e.animate) || sp.some(t => Uo(e[t]))
}
function E1(e) {
    return !!(Rl(e) || e.variants)
}
function U2(e, t) {
    if (Rl(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Uo(n) ? n : void 0,
            animate: Uo(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function W2(e) {
    const {initial: t, animate: n} = U2(e, S.useContext(Tl));
    return S.useMemo( () => ({
        initial: t,
        animate: n
    }), [Rm(t), Rm(n)])
}
function Rm(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const H2 = Symbol.for("motionComponentSymbol");
function ti(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function K2(e, t, n) {
    return S.useCallback(r => {
        r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : ti(n) && (n.current = r))
    }
    , [t])
}
const ap = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , G2 = "framerAppearId"
  , k1 = "data-" + ap(G2)
  , {schedule: lp, cancel: d3} = w1(queueMicrotask, !1)
  , P1 = S.createContext({});
function X2(e, t, n, r, i) {
    var o, s;
    const {visualElement: a} = S.useContext(Tl)
      , l = S.useContext(S1)
      , u = S.useContext(Pl)
      , c = S.useContext(np).reducedMotion
      , f = S.useRef(null);
    r = r || l.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c
    }));
    const d = f.current
      , y = S.useContext(P1);
    d && !d.projection && i && (d.type === "html" || d.type === "svg") && Y2(f.current, n, i, y);
    const g = S.useRef(!1);
    S.useInsertionEffect( () => {
        d && g.current && d.update(n, u)
    }
    );
    const m = n[k1]
      , w = S.useRef(!!m && !(!((o = window.MotionHandoffIsComplete) === null || o === void 0) && o.call(window, m)) && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, m)));
    return x1( () => {
        d && (g.current = !0,
        window.MotionIsMounted = !0,
        d.updateFeatures(),
        lp.render(d.render),
        w.current && d.animationState && d.animationState.animateChanges())
    }
    ),
    S.useEffect( () => {
        d && (!w.current && d.animationState && d.animationState.animateChanges(),
        w.current && (queueMicrotask( () => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null || p === void 0 || p.call(window, m)
        }
        ),
        w.current = !1))
    }
    ),
    d
}
function Y2(e, t, n, r) {
    const {layoutId: i, layout: o, drag: s, dragConstraints: a, layoutScroll: l, layoutRoot: u} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : T1(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!s || a && ti(a),
        visualElement: e,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: r,
        layoutScroll: l,
        layoutRoot: u
    })
}
function T1(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : T1(e.parent)
}
function q2({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    var o, s;
    e && $2(e);
    function a(u, c) {
        let f;
        const d = {
            ...S.useContext(np),
            ...u,
            layoutId: Q2(u)
        }
          , {isStatic: y} = d
          , g = W2(u)
          , m = r(u, y);
        if (!y && rp) {
            J2();
            const w = Z2(d);
            f = w.MeasureLayout,
            g.visualElement = X2(i, m, d, t, w.ProjectionNode)
        }
        return k.jsxs(Tl.Provider, {
            value: g,
            children: [f && g.visualElement ? k.jsx(f, {
                visualElement: g.visualElement,
                ...d
            }) : null, n(i, u, K2(m, g.visualElement, c), m, y, g.visualElement)]
        })
    }
    a.displayName = `motion.${typeof i == "string" ? i : `create(${(s = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !== null && s !== void 0 ? s : ""})`}`;
    const l = S.forwardRef(a);
    return l[H2] = i,
    l
}
function Q2({layoutId: e}) {
    const t = S.useContext(ep).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function J2(e, t) {
    S.useContext(S1).strict
}
function Z2(e) {
    const {drag: t, layout: n} = Ci;
    if (!t && !n)
        return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const eP = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function up(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(eP.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function Am(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function cp(e, t, n, r) {
    if (typeof t == "function") {
        const [i,o] = Am(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,o] = Am(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}
const pf = e => Array.isArray(e)
  , tP = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , nP = e => pf(e) ? e[e.length - 1] || 0 : e
  , We = e => !!(e && e.getVelocity);
function ua(e) {
    const t = We(e) ? e.get() : e;
    return tP(t) ? t.toValue() : t
}
function rP({scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n}, r, i, o) {
    const s = {
        latestValues: iP(r, i, o, e),
        renderState: t()
    };
    return n && (s.onMount = a => n({
        props: r,
        current: a,
        ...s
    }),
    s.onUpdate = a => n(a)),
    s
}
const b1 = e => (t, n) => {
    const r = S.useContext(Tl)
      , i = S.useContext(Pl)
      , o = () => rP(e, t, r, i);
    return n ? o() : tp(o)
}
;
function iP(e, t, n, r) {
    const i = {}
      , o = r(e, {});
    for (const d in o)
        i[d] = ua(o[d]);
    let {initial: s, animate: a} = e;
    const l = Rl(e)
      , u = E1(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial),
    a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const f = c ? a : s;
    if (f && typeof f != "boolean" && !bl(f)) {
        const d = Array.isArray(f) ? f : [f];
        for (let y = 0; y < d.length; y++) {
            const g = cp(e, d[y]);
            if (g) {
                const {transitionEnd: m, transition: w, ...p} = g;
                for (const h in p) {
                    let v = p[h];
                    if (Array.isArray(v)) {
                        const C = c ? v.length - 1 : 0;
                        v = v[C]
                    }
                    v !== null && (i[h] = v)
                }
                for (const h in m)
                    i[h] = m[h]
            }
        }
    }
    return i
}
const Ni = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Mr = new Set(Ni)
  , R1 = e => t => typeof t == "string" && t.startsWith(e)
  , A1 = R1("--")
  , oP = R1("var(--")
  , fp = e => oP(e) ? sP.test(e.split("/*")[0].trim()) : !1
  , sP = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , O1 = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , Cn = (e, t, n) => n > t ? t : n < e ? e : n
  , Li = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Wo = {
    ...Li,
    transform: e => Cn(0, 1, e)
}
  , zs = {
    ...Li,
    default: 1
}
  , us = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , On = us("deg")
  , Jt = us("%")
  , F = us("px")
  , aP = us("vh")
  , lP = us("vw")
  , Om = {
    ...Jt,
    parse: e => Jt.parse(e) / 100,
    transform: e => Jt.transform(e * 100)
}
  , uP = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    radius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    backgroundPositionX: F,
    backgroundPositionY: F
}
  , cP = {
    rotate: On,
    rotateX: On,
    rotateY: On,
    rotateZ: On,
    scale: zs,
    scaleX: zs,
    scaleY: zs,
    scaleZ: zs,
    skew: On,
    skewX: On,
    skewY: On,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: Wo,
    originX: Om,
    originY: Om,
    originZ: F
}
  , Mm = {
    ...Li,
    transform: Math.round
}
  , dp = {
    ...uP,
    ...cP,
    zIndex: Mm,
    size: F,
    fillOpacity: Wo,
    strokeOpacity: Wo,
    numOctaves: Mm
}
  , fP = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , dP = Ni.length;
function pP(e, t, n) {
    let r = ""
      , i = !0;
    for (let o = 0; o < dP; o++) {
        const s = Ni[o]
          , a = e[s];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (s.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0,
        !l || n) {
            const u = O1(a, dp[s]);
            if (!l) {
                i = !1;
                const c = fP[s] || s;
                r += `${c}(${u}) `
            }
            n && (t[s] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function pp(e, t, n) {
    const {style: r, vars: i, transformOrigin: o} = e;
    let s = !1
      , a = !1;
    for (const l in t) {
        const u = t[l];
        if (Mr.has(l)) {
            s = !0;
            continue
        } else if (A1(l)) {
            i[l] = u;
            continue
        } else {
            const c = O1(u, dp[l]);
            l.startsWith("origin") ? (a = !0,
            o[l] = c) : r[l] = c
        }
    }
    if (t.transform || (s || n ? r.transform = pP(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: u="50%", originZ: c=0} = o;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}
const hP = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , mP = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function gP(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const o = i ? hP : mP;
    e[o.offset] = F.transform(-r);
    const s = F.transform(t)
      , a = F.transform(n);
    e[o.array] = `${s} ${a}`
}
function Nm(e, t, n) {
    return typeof e == "string" ? e : F.transform(t + n * e)
}
function yP(e, t, n) {
    const r = Nm(t, e.x, e.width)
      , i = Nm(n, e.y, e.height);
    return `${r} ${i}`
}
function hp(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: o, pathLength: s, pathSpacing: a=1, pathOffset: l=0, ...u}, c, f) {
    if (pp(e, u, f),
    c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: y, dimensions: g} = e;
    d.transform && (g && (y.transform = d.transform),
    delete d.transform),
    g && (i !== void 0 || o !== void 0 || y.transform) && (y.transformOrigin = yP(g, i !== void 0 ? i : .5, o !== void 0 ? o : .5)),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && gP(d, s, a, l, !1)
}
const mp = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , M1 = () => ({
    ...mp(),
    attrs: {}
})
  , gp = e => typeof e == "string" && e.toLowerCase() === "svg";
function N1(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n)
        e.style.setProperty(o, n[o])
}
const L1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function D1(e, t, n, r) {
    N1(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(L1.has(i) ? i : ap(i), t.attrs[i])
}
const Ha = {};
function vP(e) {
    Object.assign(Ha, e)
}
function I1(e, {layout: t, layoutId: n}) {
    return Mr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ha[e] || e === "opacity")
}
function yp(e, t, n) {
    var r;
    const {style: i} = e
      , o = {};
    for (const s in i)
        (We(i[s]) || t.style && We(t.style[s]) || I1(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return o
}
function _1(e, t, n) {
    const r = yp(e, t, n);
    for (const i in e)
        if (We(e[i]) || We(t[i])) {
            const o = Ni.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        }
    return r
}
function xP(e, t) {
    try {
        t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
    } catch {
        t.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const Lm = ["x", "y", "width", "height", "cx", "cy", "r"]
  , wP = {
    useVisualState: b1({
        scrapeMotionValuesFromProps: _1,
        createRenderState: M1,
        onUpdate: ({props: e, prevProps: t, current: n, renderState: r, latestValues: i}) => {
            if (!n)
                return;
            let o = !!e.drag;
            if (!o) {
                for (const a in i)
                    if (Mr.has(a)) {
                        o = !0;
                        break
                    }
            }
            if (!o)
                return;
            let s = !t;
            if (t)
                for (let a = 0; a < Lm.length; a++) {
                    const l = Lm[a];
                    e[l] !== t[l] && (s = !0)
                }
            s && ae.read( () => {
                xP(n, r),
                ae.render( () => {
                    hp(r, i, gp(n.tagName), e.transformTemplate),
                    D1(n, r)
                }
                )
            }
            )
        }
    })
}
  , SP = {
    useVisualState: b1({
        scrapeMotionValuesFromProps: yp,
        createRenderState: mp
    })
};
function j1(e, t, n) {
    for (const r in t)
        !We(t[r]) && !I1(r, n) && (e[r] = t[r])
}
function CP({transformTemplate: e}, t) {
    return S.useMemo( () => {
        const n = mp();
        return pp(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function EP(e, t) {
    const n = e.style || {}
      , r = {};
    return j1(r, n, e),
    Object.assign(r, CP(e, t)),
    r
}
function kP(e, t) {
    const n = {}
      , r = EP(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
function PP(e, t, n, r) {
    const i = S.useMemo( () => {
        const o = M1();
        return hp(o, t, gp(r), e.transformTemplate),
        {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const o = {};
        j1(o, e.style, e),
        i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}
function TP(e=!1) {
    return (n, r, i, {latestValues: o}, s) => {
        const l = (up(n) ? PP : kP)(r, o, s, n)
          , u = V2(r, typeof n == "string", e)
          , c = n !== S.Fragment ? {
            ...u,
            ...l,
            ref: i
        } : {}
          , {children: f} = r
          , d = S.useMemo( () => We(f) ? f.get() : f, [f]);
        return S.createElement(n, {
            ...c,
            children: d
        })
    }
}
function bP(e, t) {
    return function(r, {forwardMotionProps: i}={
        forwardMotionProps: !1
    }) {
        const s = {
            ...up(r) ? wP : SP,
            preloadedFeatures: e,
            useRender: TP(i),
            createVisualElement: t,
            Component: r
        };
        return q2(s)
    }
}
function $1(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function Al(e, t, n) {
    const r = e.getProps();
    return cp(r, t, n !== void 0 ? n : r.custom, e)
}
const RP = ip( () => window.ScrollTimeline !== void 0);
class AP {
    constructor(t) {
        this.stop = () => this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => {
            if (RP() && i.attachTimeline)
                return i.attachTimeline(t);
            if (typeof n == "function")
                return n(i)
        }
        );
        return () => {
            r.forEach( (i, o) => {
                i && i(),
                this.animations[o].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class OP extends AP {
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
}
function vp(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const hf = 2e4;
function F1(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < hf; )
        t += n,
        r = e.next(t);
    return t >= hf ? 1 / 0 : t
}
function xp(e) {
    return typeof e == "function"
}
function Dm(e, t) {
    e.timeline = t,
    e.onfinish = null
}
const wp = e => Array.isArray(e) && typeof e[0] == "number"
  , MP = {
    linearEasing: void 0
};
function NP(e, t) {
    const n = ip(e);
    return () => {
        var r;
        return (r = MP[t]) !== null && r !== void 0 ? r : n()
    }
}
const Ka = NP( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , B1 = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++)
        r += e(Si(0, i - 1, o)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
;
function V1(e) {
    return !!(typeof e == "function" && Ka() || !e || typeof e == "string" && (e in mf || Ka()) || wp(e) || Array.isArray(e) && e.every(V1))
}
const io = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , mf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: io([0, .65, .55, 1]),
    circOut: io([.55, 0, 1, .45]),
    backIn: io([.31, .01, .66, -.59]),
    backOut: io([.33, 1.53, .69, .99])
};
function z1(e, t) {
    if (e)
        return typeof e == "function" && Ka() ? B1(e, t) : wp(e) ? io(e) : Array.isArray(e) ? e.map(n => z1(n, t) || mf.easeOut) : mf[e]
}
const Ot = {
    x: !1,
    y: !1
};
function U1() {
    return Ot.x || Ot.y
}
function LP(e, t, n) {
    var r;
    if (e instanceof Element)
        return [e];
    if (typeof e == "string") {
        let i = document;
        const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
        return o ? Array.from(o) : []
    }
    return Array.from(e)
}
function W1(e, t) {
    const n = LP(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function Im(e) {
    return t => {
        t.pointerType === "touch" || U1() || e(t)
    }
}
function DP(e, t, n={}) {
    const [r,i,o] = W1(e, n)
      , s = Im(a => {
        const {target: l} = a
          , u = t(a);
        if (typeof u != "function" || !l)
            return;
        const c = Im(f => {
            u(f),
            l.removeEventListener("pointerleave", c)
        }
        );
        l.addEventListener("pointerleave", c, i)
    }
    );
    return r.forEach(a => {
        a.addEventListener("pointerenter", s, i)
    }
    ),
    o
}
const H1 = (e, t) => t ? e === t ? !0 : H1(e, t.parentElement) : !1
  , Sp = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , IP = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function _P(e) {
    return IP.has(e.tagName) || e.tabIndex !== -1
}
const oo = new WeakSet;
function _m(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Ku(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const jP = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = _m( () => {
        if (oo.has(n))
            return;
        Ku(n, "down");
        const i = _m( () => {
            Ku(n, "up")
        }
        )
          , o = () => Ku(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", o, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function jm(e) {
    return Sp(e) && !U1()
}
function $P(e, t, n={}) {
    const [r,i,o] = W1(e, n)
      , s = a => {
        const l = a.currentTarget;
        if (!jm(a) || oo.has(l))
            return;
        oo.add(l);
        const u = t(a)
          , c = (y, g) => {
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            !(!jm(y) || !oo.has(l)) && (oo.delete(l),
            typeof u == "function" && u(y, {
                success: g
            }))
        }
          , f = y => {
            c(y, n.useGlobalTarget || H1(l, y.target))
        }
          , d = y => {
            c(y, !1)
        }
        ;
        window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i)
    }
    ;
    return r.forEach(a => {
        !_P(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
        a.addEventListener("focus", u => jP(u, i), i)
    }
    ),
    o
}
function FP(e) {
    return e === "x" || e === "y" ? Ot[e] ? null : (Ot[e] = !0,
    () => {
        Ot[e] = !1
    }
    ) : Ot.x || Ot.y ? null : (Ot.x = Ot.y = !0,
    () => {
        Ot.x = Ot.y = !1
    }
    )
}
const K1 = new Set(["width", "height", "top", "left", "right", "bottom", ...Ni]);
let ca;
function BP() {
    ca = void 0
}
const Zt = {
    now: () => (ca === void 0 && Zt.set(De.isProcessing || I2.useManualTiming ? De.timestamp : performance.now()),
    ca),
    set: e => {
        ca = e,
        queueMicrotask(BP)
    }
};
function Cp(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Ep(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class kp {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Cp(this.subscriptions, t),
        () => Ep(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function G1(e, t) {
    return t ? e * (1e3 / t) : 0
}
const $m = 30
  , VP = e => !isNaN(parseFloat(e));
class zP {
    constructor(t, n={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (r, i=!0) => {
            const o = Zt.now();
            this.updatedAt !== o && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = Zt.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = VP(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new kp);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            ae.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Zt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > $m)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, $m);
        return G1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Ho(e, t) {
    return new zP(e,t)
}
function UP(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ho(n))
}
function WP(e, t) {
    const n = Al(e, t);
    let {transitionEnd: r={}, transition: i={}, ...o} = n || {};
    o = {
        ...o,
        ...r
    };
    for (const s in o) {
        const a = nP(o[s]);
        UP(e, s, a)
    }
}
function HP(e) {
    return !!(We(e) && e.add)
}
function gf(e, t) {
    const n = e.getValue("willChange");
    if (HP(n))
        return n.add(t)
}
function X1(e) {
    return e.props[k1]
}
const Y1 = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , KP = 1e-7
  , GP = 12;
function XP(e, t, n, r, i) {
    let o, s, a = 0;
    do
        s = t + (n - t) / 2,
        o = Y1(s, r, i) - e,
        o > 0 ? n = s : t = s;
    while (Math.abs(o) > KP && ++a < GP);
    return s
}
function cs(e, t, n, r) {
    if (e === t && n === r)
        return lt;
    const i = o => XP(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : Y1(i(o), t, r)
}
const q1 = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Q1 = e => t => 1 - e(1 - t)
  , J1 = cs(.33, 1.53, .69, .99)
  , Pp = Q1(J1)
  , Z1 = q1(Pp)
  , ex = e => (e *= 2) < 1 ? .5 * Pp(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Tp = e => 1 - Math.sin(Math.acos(e))
  , tx = Q1(Tp)
  , nx = q1(Tp)
  , rx = e => /^0[^.\s]+$/u.test(e);
function YP(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || rx(e) : !0
}
const wo = e => Math.round(e * 1e5) / 1e5
  , bp = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function qP(e) {
    return e == null
}
const QP = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Rp = (e, t) => n => !!(typeof n == "string" && QP.test(n) && n.startsWith(e) || t && !qP(n) && Object.prototype.hasOwnProperty.call(n, t))
  , ix = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,o,s,a] = r.match(bp);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , JP = e => Cn(0, 255, e)
  , Gu = {
    ...Li,
    transform: e => Math.round(JP(e))
}
  , dr = {
    test: Rp("rgb", "red"),
    parse: ix("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Gu.transform(e) + ", " + Gu.transform(t) + ", " + Gu.transform(n) + ", " + wo(Wo.transform(r)) + ")"
};
function ZP(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const yf = {
    test: Rp("#"),
    parse: ZP,
    transform: dr.transform
}
  , ni = {
    test: Rp("hsl", "hue"),
    parse: ix("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + Jt.transform(wo(t)) + ", " + Jt.transform(wo(n)) + ", " + wo(Wo.transform(r)) + ")"
}
  , Ve = {
    test: e => dr.test(e) || yf.test(e) || ni.test(e),
    parse: e => dr.test(e) ? dr.parse(e) : ni.test(e) ? ni.parse(e) : yf.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? dr.transform(e) : ni.transform(e)
}
  , eT = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function tT(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(bp)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(eT)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const ox = "number"
  , sx = "color"
  , nT = "var"
  , rT = "var("
  , Fm = "${}"
  , iT = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ko(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let o = 0;
    const a = t.replace(iT, l => (Ve.test(l) ? (r.color.push(o),
    i.push(sx),
    n.push(Ve.parse(l))) : l.startsWith(rT) ? (r.var.push(o),
    i.push(nT),
    n.push(l)) : (r.number.push(o),
    i.push(ox),
    n.push(parseFloat(l))),
    ++o,
    Fm)).split(Fm);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}
function ax(e) {
    return Ko(e).values
}
function lx(e) {
    const {split: t, types: n} = Ko(e)
      , r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++)
            if (o += t[s],
            i[s] !== void 0) {
                const a = n[s];
                a === ox ? o += wo(i[s]) : a === sx ? o += Ve.transform(i[s]) : o += i[s]
            }
        return o
    }
}
const oT = e => typeof e == "number" ? 0 : e;
function sT(e) {
    const t = ax(e);
    return lx(e)(t.map(oT))
}
const Yn = {
    test: tT,
    parse: ax,
    createTransformer: lx,
    getAnimatableNone: sT
}
  , aT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function lT(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(bp) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let o = aT.has(t) ? 1 : 0;
    return r !== n && (o *= 100),
    t + "(" + o + i + ")"
}
const uT = /\b([a-z-]*)\(.*?\)/gu
  , vf = {
    ...Yn,
    getAnimatableNone: e => {
        const t = e.match(uT);
        return t ? t.map(lT).join(" ") : e
    }
}
  , cT = {
    ...dp,
    color: Ve,
    backgroundColor: Ve,
    outlineColor: Ve,
    fill: Ve,
    stroke: Ve,
    borderColor: Ve,
    borderTopColor: Ve,
    borderRightColor: Ve,
    borderBottomColor: Ve,
    borderLeftColor: Ve,
    filter: vf,
    WebkitFilter: vf
}
  , Ap = e => cT[e];
function ux(e, t) {
    let n = Ap(e);
    return n !== vf && (n = Yn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const fT = new Set(["auto", "none", "0"]);
function dT(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const o = e[r];
        typeof o == "string" && !fT.has(o) && Ko(o).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const o of t)
            e[o] = ux(n, i)
}
const Bm = e => e === Li || e === F
  , Vm = (e, t) => parseFloat(e.split(", ")[t])
  , zm = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return Vm(i[1], t);
    {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Vm(o[1], e) : 0
    }
}
  , pT = new Set(["x", "y", "z"])
  , hT = Ni.filter(e => !pT.has(e));
function mT(e) {
    const t = [];
    return hT.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const Ei = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: zm(4, 13),
    y: zm(5, 14)
};
Ei.translateX = Ei.x;
Ei.translateY = Ei.y;
const yr = new Set;
let xf = !1
  , wf = !1;
function cx() {
    if (wf) {
        const e = Array.from(yr).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = mT(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([o,s]) => {
                var a;
                (a = r.getValue(o)) === null || a === void 0 || a.set(s)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    wf = !1,
    xf = !1,
    yr.forEach(e => e.complete()),
    yr.clear()
}
function fx() {
    yr.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (wf = !0)
    }
    )
}
function gT() {
    fx(),
    cx()
}
class Op {
    constructor(t, n, r, i, o, s=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = o,
        this.isAsync = s
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (yr.add(this),
        xf || (xf = !0,
        ae.read(fx),
        ae.resolveKeyframes(cx))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        for (let o = 0; o < t.length; o++)
            if (t[o] === null)
                if (o === 0) {
                    const s = i == null ? void 0 : i.get()
                      , a = t[t.length - 1];
                    if (s !== void 0)
                        t[0] = s;
                    else if (r && n) {
                        const l = r.readValue(n, a);
                        l != null && (t[0] = l)
                    }
                    t[0] === void 0 && (t[0] = a),
                    i && s === void 0 && i.set(t[0])
                } else
                    t[o] = t[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        yr.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        yr.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const dx = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , yT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function vT(e) {
    const t = yT.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
function px(e, t, n=1) {
    const [r,i] = vT(e);
    if (!r)
        return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return dx(s) ? parseFloat(s) : s
    }
    return fp(i) ? px(i, t, n + 1) : i
}
const hx = e => t => t.test(e)
  , xT = {
    test: e => e === "auto",
    parse: e => e
}
  , mx = [Li, F, Jt, On, lP, aP, xT]
  , Um = e => mx.find(hx(e));
class gx extends Op {
    constructor(t, n, r, i, o) {
        super(t, n, r, i, o, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let u = t[l];
            if (typeof u == "string" && (u = u.trim(),
            fp(u))) {
                const c = px(u, n.current);
                c !== void 0 && (t[l] = c),
                l === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(),
        !K1.has(r) || t.length !== 2)
            return;
        const [i,o] = t
          , s = Um(i)
          , a = Um(o);
        if (s !== a)
            if (Bm(s) && Bm(a))
                for (let l = 0; l < t.length; l++) {
                    const u = t[l];
                    typeof u == "string" && (t[l] = parseFloat(u))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            YP(t[i]) && r.push(i);
        r.length && dT(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Ei[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {element: n, name: r, unresolvedKeyframes: i} = this;
        if (!n || !n.current)
            return;
        const o = n.getValue(r);
        o && o.jump(this.measuredOrigin, !1);
        const s = i.length - 1
          , a = i[s];
        i[s] = Ei[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach( ([l,u]) => {
            n.getValue(l).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const Wm = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Yn.test(e) || e === "0") && !e.startsWith("url("));
function wT(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function ST(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const o = e[e.length - 1]
      , s = Wm(i, t)
      , a = Wm(o, t);
    return !s || !a ? !1 : wT(e) || (n === "spring" || xp(n)) && r
}
const CT = e => e !== null;
function Ol(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(CT)
      , o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
const ET = 40;
class yx {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: o=0, repeatType: s="loop", ...a}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = Zt.now(),
        this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: s,
            ...a
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > ET ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && gT(),
        this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = Zt.now(),
        this.hasAttemptedResolve = !0;
        const {name: r, type: i, velocity: o, delay: s, onComplete: a, onUpdate: l, isGenerator: u} = this.options;
        if (!u && !ST(t, r, i, o))
            if (s)
                this.options.duration = 0;
            else {
                l && l(Ol(t, this.options, n)),
                a && a(),
                this.resolveFinishedPromise();
                return
            }
        const c = this.initPlayback(t, n);
        c !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...c
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        }
        )
    }
}
const de = (e, t, n) => e + (t - e) * n;
function Xu(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function kT({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , o = 0
      , s = 0;
    if (!t)
        i = o = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        i = Xu(l, a, e + 1 / 3),
        o = Xu(l, a, e),
        s = Xu(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
function Ga(e, t) {
    return n => n > 0 ? t : e
}
const Yu = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , PT = [yf, dr, ni]
  , TT = e => PT.find(t => t.test(e));
function Hm(e) {
    const t = TT(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === ni && (n = kT(n)),
    n
}
const Km = (e, t) => {
    const n = Hm(e)
      , r = Hm(t);
    if (!n || !r)
        return Ga(e, t);
    const i = {
        ...n
    };
    return o => (i.red = Yu(n.red, r.red, o),
    i.green = Yu(n.green, r.green, o),
    i.blue = Yu(n.blue, r.blue, o),
    i.alpha = de(n.alpha, r.alpha, o),
    dr.transform(i))
}
  , bT = (e, t) => n => t(e(n))
  , fs = (...e) => e.reduce(bT)
  , Sf = new Set(["none", "hidden"]);
function RT(e, t) {
    return Sf.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function AT(e, t) {
    return n => de(e, t, n)
}
function Mp(e) {
    return typeof e == "number" ? AT : typeof e == "string" ? fp(e) ? Ga : Ve.test(e) ? Km : NT : Array.isArray(e) ? vx : typeof e == "object" ? Ve.test(e) ? Km : OT : Ga
}
function vx(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (o, s) => Mp(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++)
            n[s] = i[s](o);
        return n
    }
}
function OT(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Mp(e[i])(e[i], t[i]));
    return i => {
        for (const o in r)
            n[o] = r[o](i);
        return n
    }
}
function MT(e, t) {
    var n;
    const r = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < t.values.length; o++) {
        const s = t.types[o]
          , a = e.indexes[s][i[s]]
          , l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
        r[o] = l,
        i[s]++
    }
    return r
}
const NT = (e, t) => {
    const n = Yn.createTransformer(t)
      , r = Ko(e)
      , i = Ko(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Sf.has(e) && !i.values.length || Sf.has(t) && !r.values.length ? RT(e, t) : fs(vx(MT(r, i), i.values), n) : Ga(e, t)
}
;
function xx(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? de(e, t, n) : Mp(e)(e, t)
}
const LT = 5;
function wx(e, t, n) {
    const r = Math.max(t - LT, 0);
    return G1(n - e(r), t - r)
}
const ve = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , qu = .001;
function DT({duration: e=ve.duration, bounce: t=ve.bounce, velocity: n=ve.velocity, mass: r=ve.mass}) {
    let i, o, s = 1 - t;
    s = Cn(ve.minDamping, ve.maxDamping, s),
    e = Cn(ve.minDuration, ve.maxDuration, yn(e)),
    s < 1 ? (i = u => {
        const c = u * s
          , f = c * e
          , d = c - n
          , y = Cf(u, s)
          , g = Math.exp(-f);
        return qu - d / y * g
    }
    ,
    o = u => {
        const f = u * s * e
          , d = f * n + n
          , y = Math.pow(s, 2) * Math.pow(u, 2) * e
          , g = Math.exp(-f)
          , m = Cf(Math.pow(u, 2), s);
        return (-i(u) + qu > 0 ? -1 : 1) * ((d - y) * g) / m
    }
    ) : (i = u => {
        const c = Math.exp(-u * e)
          , f = (u - n) * e + 1;
        return -qu + c * f
    }
    ,
    o = u => {
        const c = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return c * f
    }
    );
    const a = 5 / e
      , l = _T(i, o, a);
    if (e = gn(e),
    isNaN(l))
        return {
            stiffness: ve.stiffness,
            damping: ve.damping,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const IT = 12;
function _T(e, t, n) {
    let r = n;
    for (let i = 1; i < IT; i++)
        r = r - e(r) / t(r);
    return r
}
function Cf(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const jT = ["duration", "bounce"]
  , $T = ["stiffness", "damping", "mass"];
function Gm(e, t) {
    return t.some(n => e[n] !== void 0)
}
function FT(e) {
    let t = {
        velocity: ve.velocity,
        stiffness: ve.stiffness,
        damping: ve.damping,
        mass: ve.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Gm(e, $T) && Gm(e, jT))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , o = 2 * Cn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: ve.mass,
                stiffness: i,
                damping: o
            }
        } else {
            const n = DT(e);
            t = {
                ...t,
                ...n,
                mass: ve.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function Sx(e=ve.visualDuration, t=ve.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const o = n.keyframes[0]
      , s = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: o
    }
      , {stiffness: l, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: y} = FT({
        ...n,
        velocity: -yn(n.velocity || 0)
    })
      , g = d || 0
      , m = u / (2 * Math.sqrt(l * c))
      , w = s - o
      , p = yn(Math.sqrt(l / c))
      , h = Math.abs(w) < 5;
    r || (r = h ? ve.restSpeed.granular : ve.restSpeed.default),
    i || (i = h ? ve.restDelta.granular : ve.restDelta.default);
    let v;
    if (m < 1) {
        const E = Cf(p, m);
        v = P => {
            const T = Math.exp(-m * p * P);
            return s - T * ((g + m * p * w) / E * Math.sin(E * P) + w * Math.cos(E * P))
        }
    } else if (m === 1)
        v = E => s - Math.exp(-p * E) * (w + (g + p * w) * E);
    else {
        const E = p * Math.sqrt(m * m - 1);
        v = P => {
            const T = Math.exp(-m * p * P)
              , b = Math.min(E * P, 300);
            return s - T * ((g + m * p * w) * Math.sinh(b) + E * w * Math.cosh(b)) / E
        }
    }
    const C = {
        calculatedDuration: y && f || null,
        next: E => {
            const P = v(E);
            if (y)
                a.done = E >= f;
            else {
                let T = 0;
                m < 1 && (T = E === 0 ? gn(g) : wx(v, E, P));
                const b = Math.abs(T) <= r
                  , L = Math.abs(s - P) <= i;
                a.done = b && L
            }
            return a.value = a.done ? s : P,
            a
        }
        ,
        toString: () => {
            const E = Math.min(F1(C), hf)
              , P = B1(T => C.next(E * T).value, E, 30);
            return E + "ms " + P
        }
    };
    return C
}
function Xm({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: o=500, modifyTarget: s, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const f = e[0]
      , d = {
        done: !1,
        value: f
    }
      , y = b => a !== void 0 && b < a || l !== void 0 && b > l
      , g = b => a === void 0 ? l : l === void 0 || Math.abs(a - b) < Math.abs(l - b) ? a : l;
    let m = n * t;
    const w = f + m
      , p = s === void 0 ? w : s(w);
    p !== w && (m = p - f);
    const h = b => -m * Math.exp(-b / r)
      , v = b => p + h(b)
      , C = b => {
        const L = h(b)
          , x = v(b);
        d.done = Math.abs(L) <= u,
        d.value = d.done ? p : x
    }
    ;
    let E, P;
    const T = b => {
        y(d.value) && (E = b,
        P = Sx({
            keyframes: [d.value, g(d.value)],
            velocity: wx(v, b, d.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return T(0),
    {
        calculatedDuration: null,
        next: b => {
            let L = !1;
            return !P && E === void 0 && (L = !0,
            C(b),
            T(b)),
            E !== void 0 && b >= E ? P.next(b - E) : (!L && C(b),
            d)
        }
    }
}
const BT = cs(.42, 0, 1, 1)
  , VT = cs(0, 0, .58, 1)
  , Cx = cs(.42, 0, .58, 1)
  , zT = e => Array.isArray(e) && typeof e[0] != "number"
  , Ym = {
    linear: lt,
    easeIn: BT,
    easeInOut: Cx,
    easeOut: VT,
    circIn: Tp,
    circInOut: nx,
    circOut: tx,
    backIn: Pp,
    backInOut: Z1,
    backOut: J1,
    anticipate: ex
}
  , qm = e => {
    if (wp(e)) {
        df(e.length === 4);
        const [t,n,r,i] = e;
        return cs(t, n, r, i)
    } else if (typeof e == "string")
        return df(Ym[e] !== void 0),
        Ym[e];
    return e
}
;
function UT(e, t, n) {
    const r = []
      , i = n || xx
      , o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let a = i(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || lt : t;
            a = fs(l, a)
        }
        r.push(a)
    }
    return r
}
function WT(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const o = e.length;
    if (df(o === t.length),
    o === 1)
        return () => t[0];
    if (o === 2 && t[0] === t[1])
        return () => t[1];
    const s = e[0] === e[1];
    e[0] > e[o - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = UT(t, r, i)
      , l = a.length
      , u = c => {
        if (s && c < e[0])
            return t[0];
        let f = 0;
        if (l > 1)
            for (; f < e.length - 2 && !(c < e[f + 1]); f++)
                ;
        const d = Si(e[f], e[f + 1], c);
        return a[f](d)
    }
    ;
    return n ? c => u(Cn(e[0], e[o - 1], c)) : u
}
function HT(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = Si(0, t, r);
        e.push(de(n, 1, i))
    }
}
function KT(e) {
    const t = [0];
    return HT(t, e.length - 1),
    t
}
function GT(e, t) {
    return e.map(n => n * t)
}
function XT(e, t) {
    return e.map( () => t || Cx).splice(0, e.length - 1)
}
function Xa({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = zT(r) ? r.map(qm) : qm(r)
      , o = {
        done: !1,
        value: t[0]
    }
      , s = GT(n && n.length === t.length ? n : KT(t), e)
      , a = WT(s, t, {
        ease: Array.isArray(i) ? i : XT(t, i)
    });
    return {
        calculatedDuration: e,
        next: l => (o.value = a(l),
        o.done = l >= e,
        o)
    }
}
const YT = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => ae.update(t, !0),
        stop: () => Xn(t),
        now: () => De.isProcessing ? De.timestamp : Zt.now()
    }
}
  , qT = {
    decay: Xm,
    inertia: Xm,
    tween: Xa,
    keyframes: Xa,
    spring: Sx
}
  , QT = e => e / 100;
class Np extends yx {
    constructor(t) {
        super(t),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: l} = this.options;
            l && l()
        }
        ;
        const {name: n, motionValue: r, element: i, keyframes: o} = this.options
          , s = (i == null ? void 0 : i.KeyframeResolver) || Op
          , a = (l, u) => this.onKeyframesResolved(l, u);
        this.resolver = new s(o,a,n,r,i),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: o, velocity: s=0} = this.options
          , a = xp(n) ? n : qT[n] || Xa;
        let l, u;
        a !== Xa && typeof t[0] != "number" && (l = fs(QT, xx(t[0], t[1])),
        t = [0, 100]);
        const c = a({
            ...this.options,
            keyframes: t
        });
        o === "mirror" && (u = a({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -s
        })),
        c.calculatedDuration === null && (c.calculatedDuration = F1(c));
        const {calculatedDuration: f} = c
          , d = f + i
          , y = d * (r + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: l,
            calculatedDuration: f,
            resolvedDuration: d,
            totalDuration: y
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n=!1) {
        const {resolved: r} = this;
        if (!r) {
            const {keyframes: b} = this.options;
            return {
                done: !0,
                value: b[b.length - 1]
            }
        }
        const {finalKeyframe: i, generator: o, mirroredGenerator: s, mapPercentToKeyframes: a, keyframes: l, calculatedDuration: u, totalDuration: c, resolvedDuration: f} = r;
        if (this.startTime === null)
            return o.next(0);
        const {delay: d, repeat: y, repeatType: g, repeatDelay: m, onUpdate: w} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)),
        n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
          , h = this.speed >= 0 ? p < 0 : p > c;
        this.currentTime = Math.max(p, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let v = this.currentTime
          , C = o;
        if (y) {
            const b = Math.min(this.currentTime, c) / f;
            let L = Math.floor(b)
              , x = b % 1;
            !x && b >= 1 && (x = 1),
            x === 1 && L--,
            L = Math.min(L, y + 1),
            !!(L % 2) && (g === "reverse" ? (x = 1 - x,
            m && (x -= m / f)) : g === "mirror" && (C = s)),
            v = Cn(0, 1, x) * f
        }
        const E = h ? {
            done: !1,
            value: l[0]
        } : C.next(v);
        a && (E.value = a(E.value));
        let {done: P} = E;
        !h && u !== null && (P = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const T = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
        return T && i !== void 0 && (E.value = Ol(l, this.options, i)),
        w && w(E.value),
        T && this.finish(),
        E
    }
    get duration() {
        const {resolved: t} = this;
        return t ? yn(t.calculatedDuration) : 0
    }
    get time() {
        return yn(this.currentTime)
    }
    set time(t) {
        t = gn(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = yn(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=YT, onPlay: n, startTime: r} = this.options;
        this.driver || (this.driver = t(o => this.tick(o))),
        n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const JT = new Set(["opacity", "clipPath", "filter", "transform"]);
function ZT(e, t, n, {delay: r=0, duration: i=300, repeat: o=0, repeatType: s="loop", ease: a="easeInOut", times: l}={}) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const c = z1(a, i);
    return Array.isArray(c) && (u.easing = c),
    e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}
const eb = ip( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Ya = 10
  , tb = 2e4;
function nb(e) {
    return xp(e.type) || e.type === "spring" || !V1(e.ease)
}
function rb(e, t) {
    const n = new Np({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let o = 0;
    for (; !r.done && o < tb; )
        r = n.sample(o),
        i.push(r.value),
        o += Ya;
    return {
        times: void 0,
        keyframes: i,
        duration: o - Ya,
        ease: "linear"
    }
}
const Ex = {
    anticipate: ex,
    backInOut: Z1,
    circInOut: nx
};
function ib(e) {
    return e in Ex
}
class Qm extends yx {
    constructor(t) {
        super(t);
        const {name: n, motionValue: r, element: i, keyframes: o} = this.options;
        this.resolver = new gx(o, (s, a) => this.onKeyframesResolved(s, a),n,r,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        let {duration: r=300, times: i, ease: o, type: s, motionValue: a, name: l, startTime: u} = this.options;
        if (!a.owner || !a.owner.current)
            return !1;
        if (typeof o == "string" && Ka() && ib(o) && (o = Ex[o]),
        nb(this.options)) {
            const {onComplete: f, onUpdate: d, motionValue: y, element: g, ...m} = this.options
              , w = rb(t, m);
            t = w.keyframes,
            t.length === 1 && (t[1] = t[0]),
            r = w.duration,
            i = w.times,
            o = w.ease,
            s = "keyframes"
        }
        const c = ZT(a.owner.current, l, t, {
            ...this.options,
            duration: r,
            times: i,
            ease: o
        });
        return c.startTime = u ?? this.calcStartTime(),
        this.pendingTimeline ? (Dm(c, this.pendingTimeline),
        this.pendingTimeline = void 0) : c.onfinish = () => {
            const {onComplete: f} = this.options;
            a.set(Ol(t, this.options, n)),
            f && f(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: c,
            duration: r,
            times: i,
            type: s,
            ease: o,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: n} = t;
        return yn(n)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: n} = t;
        return yn(n.currentTime || 0)
    }
    set time(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.currentTime = gn(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: n} = t;
        return n.playbackRate
    }
    set speed(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: n} = t;
        return n.playState
    }
    get startTime() {
        const {resolved: t} = this;
        if (!t)
            return null;
        const {animation: n} = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: n} = this;
            if (!n)
                return lt;
            const {animation: r} = n;
            Dm(r, t)
        }
        return lt
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n, keyframes: r, duration: i, type: o, ease: s, times: a} = t;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: u, onUpdate: c, onComplete: f, element: d, ...y} = this.options
              , g = new Np({
                ...y,
                keyframes: r,
                duration: i,
                type: o,
                ease: s,
                times: a,
                isGenerator: !0
            })
              , m = gn(this.time);
            u.setWithVelocity(g.sample(m - Ya).value, g.sample(m).value, Ya)
        }
        const {onStop: l} = this.options;
        l && l(),
        this.cancel()
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: n, name: r, repeatDelay: i, repeatType: o, damping: s, type: a} = t;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: l, transformTemplate: u} = n.owner.getProps();
        return eb() && r && JT.has(r) && !l && !u && !i && o !== "mirror" && s !== 0 && a !== "inertia"
    }
}
const ob = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , sb = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , ab = {
    type: "keyframes",
    duration: .8
}
  , lb = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , ub = (e, {keyframes: t}) => t.length > 2 ? ab : Mr.has(e) ? e.startsWith("scale") ? sb(t[1]) : ob : lb;
function cb({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const Lp = (e, t, n, r={}, i, o) => s => {
    const a = vp(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - gn(l);
    let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: d => {
            t.set(d),
            a.onUpdate && a.onUpdate(d)
        }
        ,
        onComplete: () => {
            s(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: o ? void 0 : i
    };
    cb(a) || (c = {
        ...c,
        ...ub(e, c)
    }),
    c.duration && (c.duration = gn(c.duration)),
    c.repeatDelay && (c.repeatDelay = gn(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0,
    c.delay === 0 && (f = !0)),
    f && !o && t.get() !== void 0) {
        const d = Ol(c.keyframes, a);
        if (d !== void 0)
            return ae.update( () => {
                c.onUpdate(d),
                c.onComplete()
            }
            ),
            new OP([])
    }
    return !o && Qm.supports(c) ? new Qm(c) : new Np(c)
}
;
function fb({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function kx(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    var o;
    let {transition: s=e.getDefaultTransition(), transitionEnd: a, ...l} = t;
    r && (s = r);
    const u = []
      , c = i && e.animationState && e.animationState.getState()[i];
    for (const f in l) {
        const d = e.getValue(f, (o = e.latestValues[f]) !== null && o !== void 0 ? o : null)
          , y = l[f];
        if (y === void 0 || c && fb(c, f))
            continue;
        const g = {
            delay: n,
            ...vp(s || {}, f)
        };
        let m = !1;
        if (window.MotionHandoffAnimation) {
            const p = X1(e);
            if (p) {
                const h = window.MotionHandoffAnimation(p, f, ae);
                h !== null && (g.startTime = h,
                m = !0)
            }
        }
        gf(e, f),
        d.start(Lp(f, d, y, e.shouldReduceMotion && K1.has(f) ? {
            type: !1
        } : g, e, m));
        const w = d.animation;
        w && u.push(w)
    }
    return a && Promise.all(u).then( () => {
        ae.update( () => {
            a && WP(e, a)
        }
        )
    }
    ),
    u
}
function Ef(e, t, n={}) {
    var r;
    const i = Al(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {transition: o=e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? () => Promise.all(kx(e, i, n)) : () => Promise.resolve()
      , a = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: f, staggerDirection: d} = o;
        return db(e, t, c + u, f, d, n)
    }
    : () => Promise.resolve()
      , {when: l} = o;
    if (l) {
        const [u,c] = l === "beforeChildren" ? [s, a] : [a, s];
        return u().then( () => c())
    } else
        return Promise.all([s(), a(n.delay)])
}
function db(e, t, n=0, r=0, i=1, o) {
    const s = []
      , a = (e.variantChildren.size - 1) * r
      , l = i === 1 ? (u=0) => u * r : (u=0) => a - u * r;
    return Array.from(e.variantChildren).sort(pb).forEach( (u, c) => {
        u.notify("AnimationStart", t),
        s.push(Ef(u, t, {
            ...o,
            delay: n + l(c)
        }).then( () => u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(s)
}
function pb(e, t) {
    return e.sortNodePosition(t)
}
function hb(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => Ef(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = Ef(e, t, n);
    else {
        const i = typeof t == "function" ? Al(e, t, n.custom) : t;
        r = Promise.all(kx(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const mb = sp.length;
function Px(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? Px(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < mb; n++) {
        const r = sp[n]
          , i = e.props[r];
        (Uo(i) || i === !1) && (t[r] = i)
    }
    return t
}
const gb = [...op].reverse()
  , yb = op.length;
function vb(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => hb(e, n, r)))
}
function xb(e) {
    let t = vb(e)
      , n = Jm()
      , r = !0;
    const i = l => (u, c) => {
        var f;
        const d = Al(e, c, l === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (d) {
            const {transition: y, transitionEnd: g, ...m} = d;
            u = {
                ...u,
                ...m,
                ...g
            }
        }
        return u
    }
    ;
    function o(l) {
        t = l(e)
    }
    function s(l) {
        const {props: u} = e
          , c = Px(e.parent) || {}
          , f = []
          , d = new Set;
        let y = {}
          , g = 1 / 0;
        for (let w = 0; w < yb; w++) {
            const p = gb[w]
              , h = n[p]
              , v = u[p] !== void 0 ? u[p] : c[p]
              , C = Uo(v)
              , E = p === l ? h.isActive : null;
            E === !1 && (g = w);
            let P = v === c[p] && v !== u[p] && C;
            if (P && r && e.manuallyAnimateOnMount && (P = !1),
            h.protectedKeys = {
                ...y
            },
            !h.isActive && E === null || !v && !h.prevProp || bl(v) || typeof v == "boolean")
                continue;
            const T = wb(h.prevProp, v);
            let b = T || p === l && h.isActive && !P && C || w > g && C
              , L = !1;
            const x = Array.isArray(v) ? v : [v];
            let O = x.reduce(i(p), {});
            E === !1 && (O = {});
            const {prevResolvedValues: I={}} = h
              , j = {
                ...I,
                ...O
            }
              , U = V => {
                b = !0,
                d.has(V) && (L = !0,
                d.delete(V)),
                h.needsAnimating[V] = !0;
                const M = e.getValue(V);
                M && (M.liveStyle = !1)
            }
            ;
            for (const V in j) {
                const M = O[V]
                  , D = I[V];
                if (y.hasOwnProperty(V))
                    continue;
                let $ = !1;
                pf(M) && pf(D) ? $ = !$1(M, D) : $ = M !== D,
                $ ? M != null ? U(V) : d.add(V) : M !== void 0 && d.has(V) ? U(V) : h.protectedKeys[V] = !0
            }
            h.prevProp = v,
            h.prevResolvedValues = O,
            h.isActive && (y = {
                ...y,
                ...O
            }),
            r && e.blockInitialAnimation && (b = !1),
            b && (!(P && T) || L) && f.push(...x.map(V => ({
                animation: V,
                options: {
                    type: p
                }
            })))
        }
        if (d.size) {
            const w = {};
            d.forEach(p => {
                const h = e.getBaseTarget(p)
                  , v = e.getValue(p);
                v && (v.liveStyle = !0),
                w[p] = h ?? null
            }
            ),
            f.push({
                animation: w
            })
        }
        let m = !!f.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (m = !1),
        r = !1,
        m ? t(f) : Promise.resolve()
    }
    function a(l, u) {
        var c;
        if (n[l].isActive === u)
            return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(d => {
            var y;
            return (y = d.animationState) === null || y === void 0 ? void 0 : y.setActive(l, u)
        }
        ),
        n[l].isActive = u;
        const f = s(l);
        for (const d in n)
            n[d].protectedKeys = {};
        return f
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = Jm(),
            r = !0
        }
    }
}
function wb(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !$1(t, e) : !1
}
function tr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Jm() {
    return {
        animate: tr(!0),
        whileInView: tr(),
        whileHover: tr(),
        whileTap: tr(),
        whileDrag: tr(),
        whileFocus: tr(),
        exit: tr()
    }
}
class er {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class Sb extends er {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = xb(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        bl(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let Cb = 0;
class Eb extends er {
    constructor() {
        super(...arguments),
        this.id = Cb++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const kb = {
    animation: {
        Feature: Sb
    },
    exit: {
        Feature: Eb
    }
};
function Go(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function ds(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const Pb = e => t => Sp(t) && e(t, ds(t));
function So(e, t, n, r) {
    return Go(e, t, Pb(n), r)
}
const Zm = (e, t) => Math.abs(e - t);
function Tb(e, t) {
    const n = Zm(e.x, t.x)
      , r = Zm(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Tx {
    constructor(t, n, {transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const f = Ju(this.lastMoveEventInfo, this.history)
              , d = this.startEvent !== null
              , y = Tb(f.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!d && !y)
                return;
            const {point: g} = f
              , {timestamp: m} = De;
            this.history.push({
                ...g,
                timestamp: m
            });
            const {onStart: w, onMove: p} = this.handlers;
            d || (w && w(this.lastMoveEvent, f),
            this.startEvent = this.lastMoveEvent),
            p && p(this.lastMoveEvent, f)
        }
        ,
        this.handlePointerMove = (f, d) => {
            this.lastMoveEvent = f,
            this.lastMoveEventInfo = Qu(d, this.transformPagePoint),
            ae.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (f, d) => {
            this.end();
            const {onEnd: y, onSessionEnd: g, resumeAnimation: m} = this.handlers;
            if (this.dragSnapToOrigin && m && m(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const w = Ju(f.type === "pointercancel" ? this.lastMoveEventInfo : Qu(d, this.transformPagePoint), this.history);
            this.startEvent && y && y(f, w),
            g && g(f, w)
        }
        ,
        !Sp(t))
            return;
        this.dragSnapToOrigin = o,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = i || window;
        const s = ds(t)
          , a = Qu(s, this.transformPagePoint)
          , {point: l} = a
          , {timestamp: u} = De;
        this.history = [{
            ...l,
            timestamp: u
        }];
        const {onSessionStart: c} = n;
        c && c(t, Ju(a, this.history)),
        this.removeListeners = fs(So(this.contextWindow, "pointermove", this.handlePointerMove), So(this.contextWindow, "pointerup", this.handlePointerUp), So(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Xn(this.updatePoint)
    }
}
function Qu(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function eg(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Ju({point: e}, t) {
    return {
        point: e,
        delta: eg(e, bx(t)),
        offset: eg(e, bb(t)),
        velocity: Rb(t, .1)
    }
}
function bb(e) {
    return e[0]
}
function bx(e) {
    return e[e.length - 1]
}
function Rb(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = bx(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > gn(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const o = yn(i.timestamp - r.timestamp);
    if (o === 0)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
const Rx = 1e-4
  , Ab = 1 - Rx
  , Ob = 1 + Rx
  , Ax = .01
  , Mb = 0 - Ax
  , Nb = 0 + Ax;
function pt(e) {
    return e.max - e.min
}
function Lb(e, t, n) {
    return Math.abs(e - t) <= n
}
function tg(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = de(t.min, t.max, e.origin),
    e.scale = pt(n) / pt(t),
    e.translate = de(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= Ab && e.scale <= Ob || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= Mb && e.translate <= Nb || isNaN(e.translate)) && (e.translate = 0)
}
function Co(e, t, n, r) {
    tg(e.x, t.x, n.x, r ? r.originX : void 0),
    tg(e.y, t.y, n.y, r ? r.originY : void 0)
}
function ng(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + pt(t)
}
function Db(e, t, n) {
    ng(e.x, t.x, n.x),
    ng(e.y, t.y, n.y)
}
function rg(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + pt(t)
}
function Eo(e, t, n) {
    rg(e.x, t.x, n.x),
    rg(e.y, t.y, n.y)
}
function Ib(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? de(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? de(n, e, r.max) : Math.min(e, n)),
    e
}
function ig(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function _b(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: ig(e.x, n, i),
        y: ig(e.y, t, r)
    }
}
function og(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function jb(e, t) {
    return {
        x: og(e.x, t.x),
        y: og(e.y, t.y)
    }
}
function $b(e, t) {
    let n = .5;
    const r = pt(e)
      , i = pt(t);
    return i > r ? n = Si(t.min, t.max - r, e.min) : r > i && (n = Si(e.min, e.max - i, t.min)),
    Cn(0, 1, n)
}
function Fb(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const kf = .35;
function Bb(e=kf) {
    return e === !1 ? e = 0 : e === !0 && (e = kf),
    {
        x: sg(e, "left", "right"),
        y: sg(e, "top", "bottom")
    }
}
function sg(e, t, n) {
    return {
        min: ag(e, t),
        max: ag(e, n)
    }
}
function ag(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const lg = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , ri = () => ({
    x: lg(),
    y: lg()
})
  , ug = () => ({
    min: 0,
    max: 0
})
  , we = () => ({
    x: ug(),
    y: ug()
});
function vt(e) {
    return [e("x"), e("y")]
}
function Ox({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function Vb({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function zb(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Zu(e) {
    return e === void 0 || e === 1
}
function Pf({scale: e, scaleX: t, scaleY: n}) {
    return !Zu(e) || !Zu(t) || !Zu(n)
}
function or(e) {
    return Pf(e) || Mx(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function Mx(e) {
    return cg(e.x) || cg(e.y)
}
function cg(e) {
    return e && e !== "0%"
}
function qa(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function fg(e, t, n, r, i) {
    return i !== void 0 && (e = qa(e, i, r)),
    qa(e, n, r) + t
}
function Tf(e, t=0, n=1, r, i) {
    e.min = fg(e.min, t, n, r, i),
    e.max = fg(e.max, t, n, r, i)
}
function Nx(e, {x: t, y: n}) {
    Tf(e.x, t.translate, t.scale, t.originPoint),
    Tf(e.y, n.translate, n.scale, n.originPoint)
}
const dg = .999999999999
  , pg = 1.0000000000001;
function Ub(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let o, s;
    for (let a = 0; a < i; a++) {
        o = n[a],
        s = o.projectionDelta;
        const {visualElement: l} = o.options;
        l && l.props.style && l.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && oi(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }),
        s && (t.x *= s.x.scale,
        t.y *= s.y.scale,
        Nx(e, s)),
        r && or(o.latestValues) && oi(e, o.latestValues))
    }
    t.x < pg && t.x > dg && (t.x = 1),
    t.y < pg && t.y > dg && (t.y = 1)
}
function ii(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function hg(e, t, n, r, i=.5) {
    const o = de(e.min, e.max, i);
    Tf(e, t, n, o, r)
}
function oi(e, t) {
    hg(e.x, t.x, t.scaleX, t.scale, t.originX),
    hg(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function Lx(e, t) {
    return Ox(zb(e.getBoundingClientRect(), t))
}
function Wb(e, t, n) {
    const r = Lx(e, n)
      , {scroll: i} = t;
    return i && (ii(r.x, i.offset.x),
    ii(r.y, i.offset.y)),
    r
}
const Dx = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , Hb = new WeakMap;
class Kb {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = we(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = c => {
            const {dragSnapToOrigin: f} = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(ds(c).point)
        }
          , o = (c, f) => {
            const {drag: d, dragPropagation: y, onDragStart: g} = this.getProps();
            if (d && !y && (this.openDragLock && this.openDragLock(),
            this.openDragLock = FP(d),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            vt(w => {
                let p = this.getAxisMotionValue(w).get() || 0;
                if (Jt.test(p)) {
                    const {projection: h} = this.visualElement;
                    if (h && h.layout) {
                        const v = h.layout.layoutBox[w];
                        v && (p = pt(v) * (parseFloat(p) / 100))
                    }
                }
                this.originPoint[w] = p
            }
            ),
            g && ae.postRender( () => g(c, f)),
            gf(this.visualElement, "transform");
            const {animationState: m} = this.visualElement;
            m && m.setActive("whileDrag", !0)
        }
          , s = (c, f) => {
            const {dragPropagation: d, dragDirectionLock: y, onDirectionLock: g, onDrag: m} = this.getProps();
            if (!d && !this.openDragLock)
                return;
            const {offset: w} = f;
            if (y && this.currentDirection === null) {
                this.currentDirection = Gb(w),
                this.currentDirection !== null && g && g(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, w),
            this.updateAxis("y", f.point, w),
            this.visualElement.render(),
            m && m(c, f)
        }
          , a = (c, f) => this.stop(c, f)
          , l = () => vt(c => {
            var f;
            return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new Tx(t,{
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: a,
            resumeAnimation: l
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: Dx(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: o} = this.getProps();
        o && ae.postRender( () => o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Us(t, i, this.currentDirection))
            return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = Ib(s, this.constraints[t], this.elastic[t])),
        o.set(s)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , o = this.constraints;
        n && ti(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = _b(i.layoutBox, n) : this.constraints = !1,
        this.elastic = Bb(r),
        o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && vt(s => {
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = Fb(i.layoutBox[s], this.constraints[s]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !ti(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const o = Wb(r, i.root, this.visualElement.getTransformPagePoint());
        let s = jb(i.layout.layoutBox, o);
        if (n) {
            const a = n(Vb(s));
            this.hasMutatedConstraints = !!a,
            a && (s = Ox(a))
        }
        return s
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: o, dragSnapToOrigin: s, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , u = vt(c => {
            if (!Us(c, n, this.currentDirection))
                return;
            let f = l && l[c] || {};
            s && (f = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6
              , y = i ? 40 : 1e7
              , g = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: d,
                bounceDamping: y,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...f
            };
            return this.startAxisValueAnimation(c, g)
        }
        );
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return gf(this.visualElement, t),
        r.start(Lp(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        vt(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        vt(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        vt(n => {
            const {drag: r} = this.getProps();
            if (!Us(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: s, max: a} = i.layout.layoutBox[n];
                o.set(t[n] - de(s, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!ti(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        vt(s => {
            const a = this.getAxisMotionValue(s);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[s] = $b({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        }
        );
        const {transformTemplate: o} = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        vt(s => {
            if (!Us(s, t, null))
                return;
            const a = this.getAxisMotionValue(s)
              , {min: l, max: u} = this.constraints[s];
            a.set(de(l, u, i[s]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Hb.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = So(t, "pointerdown", l => {
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(l)
        }
        )
          , r = () => {
            const {dragConstraints: l} = this.getProps();
            ti(l) && l.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        ae.read(r);
        const s = Go(window, "resize", () => this.scalePositionWithinConstraints())
          , a = i.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: u}) => {
            this.isDragging && u && (vt(c => {
                const f = this.getAxisMotionValue(c);
                f && (this.originPoint[c] += l[c].translate,
                f.set(f.get() + l[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            s(),
            n(),
            o(),
            a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: o=!1, dragElastic: s=kf, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: a
        }
    }
}
function Us(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function Gb(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class Xb extends er {
    constructor(t) {
        super(t),
        this.removeGroupControls = lt,
        this.removeListeners = lt,
        this.controls = new Kb(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || lt
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const mg = e => (t, n) => {
    e && ae.postRender( () => e(t, n))
}
;
class Yb extends er {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = lt
    }
    onPointerDown(t) {
        this.session = new Tx(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Dx(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: mg(t),
            onStart: mg(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session,
                i && ae.postRender( () => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = So(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const fa = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function gg(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const qi = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (F.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = gg(e, t.target.x)
          , r = gg(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , qb = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = Yn.parse(e);
        if (i.length > 5)
            return r;
        const o = Yn.createTransformer(e)
          , s = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        i[0 + s] /= a,
        i[1 + s] /= l;
        const u = de(a, l, .5);
        return typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
    }
};
class Qb extends S.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: o} = t;
        vP(Jb),
        o && (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        o.setOptions({
            ...o.options,
            onExitComplete: () => this.safeToRemove()
        })),
        fa.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: o} = this.props
          , s = r.projection;
        return s && (s.isPresent = o,
        i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(),
        t.isPresent !== o && (o ? s.promote() : s.relegate() || ae.postRender( () => {
            const a = s.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        lp.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function Ix(e) {
    const [t,n] = v1()
      , r = S.useContext(ep);
    return k.jsx(Qb, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: S.useContext(P1),
        isPresent: t,
        safeToRemove: n
    })
}
const Jb = {
    borderRadius: {
        ...qi,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: qi,
    borderTopRightRadius: qi,
    borderBottomLeftRadius: qi,
    borderBottomRightRadius: qi,
    boxShadow: qb
};
function Zb(e, t, n) {
    const r = We(e) ? e : Ho(e);
    return r.start(Lp("", r, t, n)),
    r.animation
}
function eR(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const tR = (e, t) => e.depth - t.depth;
class nR {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Cp(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Ep(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(tR),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function rR(e, t) {
    const n = Zt.now()
      , r = ({timestamp: i}) => {
        const o = i - n;
        o >= t && (Xn(r),
        e(o - t))
    }
    ;
    return ae.read(r, !0),
    () => Xn(r)
}
const _x = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , iR = _x.length
  , yg = e => typeof e == "string" ? parseFloat(e) : e
  , vg = e => typeof e == "number" || F.test(e);
function oR(e, t, n, r, i, o) {
    i ? (e.opacity = de(0, n.opacity !== void 0 ? n.opacity : 1, sR(r)),
    e.opacityExit = de(t.opacity !== void 0 ? t.opacity : 1, 0, aR(r))) : o && (e.opacity = de(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < iR; s++) {
        const a = `border${_x[s]}Radius`;
        let l = xg(t, a)
          , u = xg(n, a);
        if (l === void 0 && u === void 0)
            continue;
        l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || vg(l) === vg(u) ? (e[a] = Math.max(de(yg(l), yg(u), r), 0),
        (Jt.test(u) || Jt.test(l)) && (e[a] += "%")) : e[a] = u
    }
    (t.rotate || n.rotate) && (e.rotate = de(t.rotate || 0, n.rotate || 0, r))
}
function xg(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const sR = jx(0, .5, tx)
  , aR = jx(.5, .95, lt);
function jx(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Si(e, t, r))
}
function wg(e, t) {
    e.min = t.min,
    e.max = t.max
}
function yt(e, t) {
    wg(e.x, t.x),
    wg(e.y, t.y)
}
function Sg(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function Cg(e, t, n, r, i) {
    return e -= t,
    e = qa(e, 1 / n, r),
    i !== void 0 && (e = qa(e, 1 / i, r)),
    e
}
function lR(e, t=0, n=1, r=.5, i, o=e, s=e) {
    if (Jt.test(t) && (t = parseFloat(t),
    t = de(s.min, s.max, t / 100) - s.min),
    typeof t != "number")
        return;
    let a = de(o.min, o.max, r);
    e === o && (a -= t),
    e.min = Cg(e.min, t, n, a, i),
    e.max = Cg(e.max, t, n, a, i)
}
function Eg(e, t, [n,r,i], o, s) {
    lR(e, t[n], t[r], t[i], t.scale, o, s)
}
const uR = ["x", "scaleX", "originX"]
  , cR = ["y", "scaleY", "originY"];
function kg(e, t, n, r) {
    Eg(e.x, t, uR, n ? n.x : void 0, r ? r.x : void 0),
    Eg(e.y, t, cR, n ? n.y : void 0, r ? r.y : void 0)
}
function Pg(e) {
    return e.translate === 0 && e.scale === 1
}
function $x(e) {
    return Pg(e.x) && Pg(e.y)
}
function Tg(e, t) {
    return e.min === t.min && e.max === t.max
}
function fR(e, t) {
    return Tg(e.x, t.x) && Tg(e.y, t.y)
}
function bg(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function Fx(e, t) {
    return bg(e.x, t.x) && bg(e.y, t.y)
}
function Rg(e) {
    return pt(e.x) / pt(e.y)
}
function Ag(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class dR {
    constructor() {
        this.members = []
    }
    add(t) {
        Cp(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (Ep(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function pR(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , o = e.y.translate / t.y
      , s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: y, skewY: g} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        f && (r += `rotateX(${f}deg) `),
        d && (r += `rotateY(${d}deg) `),
        y && (r += `skewX(${y}deg) `),
        g && (r += `skewY(${g}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const sr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , so = typeof window < "u" && window.MotionDebug !== void 0
  , ec = ["", "X", "Y", "Z"]
  , hR = {
    visibility: "hidden"
}
  , Og = 1e3;
let mR = 0;
function tc(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function Bx(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = X1(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: o} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", ae, !(i || o))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && Bx(r)
}
function Vx({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(s={}, a=t == null ? void 0 : t()) {
            this.id = mR++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                so && (sr.totalNodes = sr.resolvedTargetDeltas = sr.recalculatedProjection = 0),
                this.nodes.forEach(vR),
                this.nodes.forEach(ER),
                this.nodes.forEach(kR),
                this.nodes.forEach(xR),
                so && window.MotionDebug.record(sr)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = s,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nR)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new kp),
            this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, a=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = eR(s),
            this.instance = s;
            const {layoutId: l, layout: u, visualElement: c} = this.options;
            if (c && !c.current && c.mount(s),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            a && (u || l) && (this.isLayoutDirty = !0),
            e) {
                let f;
                const d = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = rR(d, 250),
                    fa.hasAnimatedSinceResize && (fa.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Ng))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
            this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: y, layout: g}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const m = this.options.transition || c.getDefaultTransition() || AR
                  , {onLayoutAnimationStart: w, onLayoutAnimationComplete: p} = c.getProps()
                  , h = !this.targetLayout || !Fx(this.targetLayout, g) || y
                  , v = !d && y;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || v || d && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, v);
                    const C = {
                        ...vp(m, "layout"),
                        onPlay: w,
                        onComplete: p
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0,
                    C.type = !1),
                    this.startAnimation(C)
                } else
                    d || Ng(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = g
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Xn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(PR),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: s} = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Bx(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Mg);
                return
            }
            this.isUpdating || this.nodes.forEach(SR),
            this.isUpdating = !1,
            this.nodes.forEach(CR),
            this.nodes.forEach(gR),
            this.nodes.forEach(yR),
            this.clearAllSnapshots();
            const a = Zt.now();
            De.delta = Cn(0, 1e3 / 60, a - De.timestamp),
            De.timestamp = a,
            De.isProcessing = !0,
            Hu.update.process(De),
            Hu.preRender.process(De),
            Hu.render.process(De),
            De.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            lp.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(wR),
            this.sharedNodes.forEach(TR)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            ae.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            ae.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = we(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1),
            a) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !$x(this.projectionDelta)
              , l = this.getTransformTemplate()
              , u = l ? l(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            s && (a || or(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(s=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)),
            OR(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var s;
            const {visualElement: a} = this.options;
            if (!a)
                return we();
            const l = a.measureViewportBox();
            if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(MR))) {
                const {scroll: c} = this.root;
                c && (ii(l.x, c.offset.x),
                ii(l.y, c.offset.y))
            }
            return l
        }
        removeElementScroll(s) {
            var a;
            const l = we();
            if (yt(l, s),
            !((a = this.scroll) === null || a === void 0) && a.wasRoot)
                return l;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: f, options: d} = c;
                c !== this.root && f && d.layoutScroll && (f.wasRoot && yt(l, s),
                ii(l.x, f.offset.x),
                ii(l.y, f.offset.y))
            }
            return l
        }
        applyTransform(s, a=!1) {
            const l = we();
            yt(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && oi(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                or(c.latestValues) && oi(l, c.latestValues)
            }
            return or(this.latestValues) && oi(l, this.latestValues),
            l
        }
        removeTransform(s) {
            const a = we();
            yt(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !or(u.latestValues))
                    continue;
                Pf(u.latestValues) && u.updateSnapshot();
                const c = we()
                  , f = u.measurePageBox();
                yt(c, f),
                kg(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return or(this.latestValues) && kg(a, this.latestValues),
            a
        }
        setTargetDelta(s) {
            this.targetDelta = s,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== De.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s=!1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: f, layoutId: d} = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = De.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const y = this.getClosestProjectingParent();
                    y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = we(),
                    this.relativeTargetOrigin = we(),
                    Eo(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox),
                    yt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = we(),
                    this.targetWithTransforms = we()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    Db(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : yt(this.target, this.layout.layoutBox),
                    Nx(this.target, this.targetDelta)) : yt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const y = this.getClosestProjectingParent();
                        y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = we(),
                        this.relativeTargetOrigin = we(),
                        Eo(this.relativeTargetOrigin, this.target, y.target),
                        yt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    so && sr.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Pf(this.parent.latestValues) || Mx(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const a = this.getLead()
              , l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1),
            l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === De.timestamp && (u = !1),
            u)
                return;
            const {layout: c, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || f))
                return;
            yt(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , y = this.treeScale.y;
            Ub(this.layoutCorrected, this.treeScale, this.path, l),
            a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox,
            a.targetWithTransforms = we());
            const {target: g} = a;
            if (!g) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Sg(this.prevProjectionDelta.x, this.projectionDelta.x),
            Sg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Co(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== y || !Ag(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ag(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", g)),
            so && sr.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s=!0) {
            var a;
            if ((a = this.options.visualElement) === null || a === void 0 || a.scheduleRender(),
            s) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = ri(),
            this.projectionDelta = ri(),
            this.projectionDeltaWithTransform = ri()
        }
        setAnimationOrigin(s, a=!1) {
            const l = this.snapshot
              , u = l ? l.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , f = ri();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const d = we()
              , y = l ? l.source : void 0
              , g = this.layout ? this.layout.source : void 0
              , m = y !== g
              , w = this.getStack()
              , p = !w || w.members.length <= 1
              , h = !!(m && !p && this.options.crossfade === !0 && !this.path.some(RR));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = C => {
                const E = C / 1e3;
                Lg(f.x, s.x, E),
                Lg(f.y, s.y, E),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Eo(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                bR(this.relativeTarget, this.relativeTargetOrigin, d, E),
                v && fR(this.relativeTarget, v) && (this.isProjectionDirty = !1),
                v || (v = we()),
                yt(v, this.relativeTarget)),
                m && (this.animationValues = c,
                oR(c, u, this.latestValues, E, h, p)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = E
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Xn(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = ae.update( () => {
                fa.hasAnimatedSinceResize = !0,
                this.currentAnimation = Zb(0, Og, {
                    ...s,
                    onUpdate: a => {
                        this.mixTargetDelta(a),
                        s.onUpdate && s.onUpdate(a)
                    }
                    ,
                    onComplete: () => {
                        s.onComplete && s.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Og),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {targetWithTransforms: a, target: l, layout: u, latestValues: c} = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && zx(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || we();
                    const f = pt(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min,
                    l.x.max = l.x.min + f;
                    const d = pt(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min,
                    l.y.max = l.y.min + d
                }
                yt(a, l),
                oi(a, c),
                Co(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new dR),
            this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {layoutId: a} = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {layoutId: a} = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {layoutId: s} = this.options;
            if (s)
                return this.root.sharedNodes.get(s)
        }
        promote({needsReset: s, transition: a, preserveFollowOpacity: l}={}) {
            const u = this.getStack();
            u && u.promote(this, l),
            s && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: s} = this.options;
            if (!s)
                return;
            let a = !1;
            const {latestValues: l} = s;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const u = {};
            l.z && tc("z", s, u, this.animationValues);
            for (let c = 0; c < ec.length; c++)
                tc(`rotate${ec[c]}`, s, u, this.animationValues),
                tc(`skew${ec[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u)
                s.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return hR;
            const u = {
                visibility: ""
            }
              , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = ua(s == null ? void 0 : s.pointerEvents) || "",
                u.transform = c ? c(this.latestValues, "") : "none",
                u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const m = {};
                return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                m.pointerEvents = ua(s == null ? void 0 : s.pointerEvents) || ""),
                this.hasProjected && !or(this.latestValues) && (m.transform = c ? c({}, "") : "none",
                this.hasProjected = !1),
                m
            }
            const d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            u.transform = pR(this.projectionDeltaWithTransform, this.treeScale, d),
            c && (u.transform = c(d, u.transform));
            const {x: y, y: g} = this.projectionDelta;
            u.transformOrigin = `${y.origin * 100}% ${g.origin * 100}% 0`,
            f.animationValues ? u.opacity = f === this ? (l = (a = d.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const m in Ha) {
                if (d[m] === void 0)
                    continue;
                const {correct: w, applyTo: p} = Ha[m]
                  , h = u.transform === "none" ? d[m] : w(d[m], f);
                if (p) {
                    const v = p.length;
                    for (let C = 0; C < v; C++)
                        u[p[C]] = h
                } else
                    u[m] = h
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? ua(s == null ? void 0 : s.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(Mg),
            this.root.sharedNodes.clear()
        }
    }
}
function gR(e) {
    e.updateLayout()
}
function yR(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: o} = e.options
          , s = n.source !== e.layout.source;
        o === "size" ? vt(f => {
            const d = s ? n.measuredBox[f] : n.layoutBox[f]
              , y = pt(d);
            d.min = r[f].min,
            d.max = d.min + y
        }
        ) : zx(o, n.layoutBox, r) && vt(f => {
            const d = s ? n.measuredBox[f] : n.layoutBox[f]
              , y = pt(r[f]);
            d.max = d.min + y,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[f].max = e.relativeTarget[f].min + y)
        }
        );
        const a = ri();
        Co(a, r, n.layoutBox);
        const l = ri();
        s ? Co(l, e.applyTransform(i, !0), n.measuredBox) : Co(l, r, n.layoutBox);
        const u = !$x(a);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {snapshot: d, layout: y} = f;
                if (d && y) {
                    const g = we();
                    Eo(g, n.layoutBox, d.layoutBox);
                    const m = we();
                    Eo(m, r, y.layoutBox),
                    Fx(g, m) || (c = !0),
                    f.options.layoutRoot && (e.relativeTarget = m,
                    e.relativeTargetOrigin = g,
                    e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function vR(e) {
    so && sr.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function xR(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function wR(e) {
    e.clearSnapshot()
}
function Mg(e) {
    e.clearMeasurements()
}
function SR(e) {
    e.isLayoutDirty = !1
}
function CR(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Ng(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function ER(e) {
    e.resolveTargetDelta()
}
function kR(e) {
    e.calcProjection()
}
function PR(e) {
    e.resetSkewAndRotation()
}
function TR(e) {
    e.removeLeadSnapshot()
}
function Lg(e, t, n) {
    e.translate = de(t.translate, 0, n),
    e.scale = de(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Dg(e, t, n, r) {
    e.min = de(t.min, n.min, r),
    e.max = de(t.max, n.max, r)
}
function bR(e, t, n, r) {
    Dg(e.x, t.x, n.x, r),
    Dg(e.y, t.y, n.y, r)
}
function RR(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const AR = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Ig = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , _g = Ig("applewebkit/") && !Ig("chrome/") ? Math.round : lt;
function jg(e) {
    e.min = _g(e.min),
    e.max = _g(e.max)
}
function OR(e) {
    jg(e.x),
    jg(e.y)
}
function zx(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Lb(Rg(t), Rg(n), .2)
}
function MR(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const NR = Vx({
    attachResizeListener: (e, t) => Go(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , nc = {
    current: void 0
}
  , Ux = Vx({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!nc.current) {
            const e = new NR({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            nc.current = e
        }
        return nc.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , LR = {
    pan: {
        Feature: Yb
    },
    drag: {
        Feature: Xb,
        ProjectionNode: Ux,
        MeasureLayout: Ix
    }
};
function $g(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , o = r[i];
    o && ae.postRender( () => o(t, ds(t)))
}
class DR extends er {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = DP(t, n => ($g(this.node, n, "Start"),
        r => $g(this.node, r, "End"))))
    }
    unmount() {}
}
class IR extends er {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = fs(Go(this.node.current, "focus", () => this.onFocus()), Go(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Fg(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , o = r[i];
    o && ae.postRender( () => o(t, ds(t)))
}
class _R extends er {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = $P(t, n => (Fg(this.node, n, "Start"),
        (r, {success: i}) => Fg(this.node, r, i ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const bf = new WeakMap
  , rc = new WeakMap
  , jR = e => {
    const t = bf.get(e.target);
    t && t(e)
}
  , $R = e => {
    e.forEach(jR)
}
;
function FR({root: e, ...t}) {
    const n = e || document;
    rc.has(n) || rc.set(n, {});
    const r = rc.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver($R,{
        root: e,
        ...t
    })),
    r[i]
}
function BR(e, t, n) {
    const r = FR(t);
    return bf.set(e, n),
    r.observe(e),
    () => {
        bf.delete(e),
        r.unobserve(e)
    }
}
const VR = {
    some: 0,
    all: 1
};
class zR extends er {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: o} = t
          , s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : VR[i]
        }
          , a = l => {
            const {isIntersecting: u} = l;
            if (this.isInView === u || (this.isInView = u,
            o && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: f} = this.node.getProps()
              , d = u ? c : f;
            d && d(l)
        }
        ;
        return BR(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(UR(t, n)) && this.startObserver()
    }
    unmount() {}
}
function UR({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const WR = {
    inView: {
        Feature: zR
    },
    tap: {
        Feature: _R
    },
    focus: {
        Feature: IR
    },
    hover: {
        Feature: DR
    }
}
  , HR = {
    layout: {
        ProjectionNode: Ux,
        MeasureLayout: Ix
    }
}
  , Rf = {
    current: null
}
  , Wx = {
    current: !1
};
function KR() {
    if (Wx.current = !0,
    !!rp)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Rf.current = e.matches;
            e.addListener(t),
            t()
        } else
            Rf.current = !1
}
const GR = [...mx, Ve, Yn]
  , XR = e => GR.find(hx(e))
  , Bg = new WeakMap;
function YR(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , o = n[r];
        if (We(i))
            e.addValue(r, i);
        else if (We(o))
            e.addValue(r, Ho(i, {
                owner: e
            }));
        else if (o !== i)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, Ho(s !== void 0 ? s : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Vg = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class qR {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: o, visualState: s}, a={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Op,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const y = Zt.now();
            this.renderScheduledAt < y && (this.renderScheduledAt = y,
            ae.render(this.render, !1, !0))
        }
        ;
        const {latestValues: l, renderState: u, onUpdate: c} = s;
        this.onUpdate = c,
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = a,
        this.blockInitialAnimation = !!o,
        this.isControllingVariants = Rl(n),
        this.isVariantNode = E1(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: f, ...d} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const y in d) {
            const g = d[y];
            l[y] !== void 0 && We(g) && g.set(l[y], !1)
        }
    }
    mount(t) {
        this.current = t,
        Bg.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        Wx.current || KR(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Rf.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Bg.delete(this.current),
        this.projection && this.projection.unmount(),
        Xn(this.notifyUpdate),
        Xn(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = Mr.has(t)
          , i = n.on("change", a => {
            this.latestValues[t] = a,
            this.props.onUpdate && ae.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , o = n.on("renderRequest", this.scheduleRender);
        let s;
        window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            o(),
            s && s(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Ci) {
            const n = Ci[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const o = this.features[t];
                o.isMounted ? o.update() : (o.mount(),
                o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : we()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Vg.length; r++) {
            const i = Vg[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const o = "on" + i
              , s = t[o];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = YR(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Ho(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (dx(i) || rx(i)) ? i = parseFloat(i) : !XR(i) && Yn.test(n) && (i = ux(t, n)),
        this.setBaseTarget(t, We(i) ? i.get() : i)),
        We(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const s = cp(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            s && (i = s[t])
        }
        if (r && i !== void 0)
            return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !We(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new kp),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Hx extends qR {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = gx
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        We(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function QR(e) {
    return window.getComputedStyle(e)
}
class JR extends Hx {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = N1
    }
    readValueFromInstance(t, n) {
        if (Mr.has(n)) {
            const r = Ap(n);
            return r && r.default || 0
        } else {
            const r = QR(t)
              , i = (A1(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return Lx(t, n)
    }
    build(t, n, r) {
        pp(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return yp(t, n, r)
    }
}
class ZR extends Hx {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = we
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Mr.has(n)) {
            const r = Ap(n);
            return r && r.default || 0
        }
        return n = L1.has(n) ? n : ap(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return _1(t, n, r)
    }
    build(t, n, r) {
        hp(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        D1(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = gp(t.tagName),
        super.mount(t)
    }
}
const eA = (e, t) => up(e) ? new ZR(t) : new JR(t,{
    allowProjection: e !== S.Fragment
})
  , tA = bP({
    ...kb,
    ...WR,
    ...LR,
    ...HR
}, eA)
  , He = z2(tA);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var nA = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rA = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , Di = (e, t) => {
    const n = S.forwardRef( ({color: r="currentColor", size: i=24, strokeWidth: o=2, absoluteStrokeWidth: s, className: a="", children: l, ...u}, c) => S.createElement("svg", {
        ref: c,
        ...nA,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: s ? Number(o) * 24 / Number(i) : o,
        className: ["lucide", `lucide-${rA(e)}`, a].join(" "),
        ...u
    }, [...t.map( ([f,d]) => S.createElement(f, d)), ...Array.isArray(l) ? l : [l]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iA = Di("ArrowDown", [["path", {
    d: "M12 5v14",
    key: "s699le"
}], ["path", {
    d: "m19 12-7 7-7-7",
    key: "1idqje"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oA = Di("Linkedin", [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sA = Di("Shirt", [["path", {
    d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
    key: "1wgbhj"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zg = Di("Star", [["polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
    key: "8f66p6"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aA = Di("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lA = Di("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , uA = "/assets/iuaredis-DUCjZkjs.jpg"
  , cA = () => k.jsx(He.header, {
    initial: {
        y: -100
    },
    animate: {
        y: 0
    },
    className: "fixed top-0 left-0 right-0 bg-white shadow-md z-50",
    children: k.jsx("div", {
        className: "container mx-auto px-4 py-4",
        children: k.jsxs("div", {
            className: "flex items-center justify-between",
            children: [k.jsxs("section", {
                className: "flex items-center gap-3 ",
                children: [k.jsx("img", {
                    src: uA,
                    alt: "",
                    className: "size-10 rounded-full"
                }), k.jsx(Zd, {
                    to: "/",
                    className: "flex items-center space-x-2 sm:space-x-4",
                    children: k.jsx("h1", {
                        className: "text-xl sm:text-2xl font-bold text-[#34b6e8]",
                        children: "Polo Redis"
                    })
                })]
            }), k.jsxs("div", {
                className: "flex items-center space-x-4 sm:space-x-6",
                children: [k.jsxs(ff, {
                    to: "/",
                    className: " flex items-center space-x-2 text-gray-600 hover:text-[#3c86a4]",
                    style: ({isActive: e}) => ({
                        color: e ? "#34b6e8" : ""
                    }),
                    children: [k.jsx(sA, {
                        className: "h-5 w-5"
                    }), k.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Acceuil"
                    })]
                }), k.jsxs(ff, {
                    to: "/team",
                    className: " flex items-center space-x-2 text-gray-600 hover:text-[#3c86a4]",
                    style: ({isActive: e}) => ({
                        color: e ? "#34b6e8" : ""
                    }),
                    children: [k.jsx(aA, {
                        className: "h-5 w-5"
                    }), k.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Équipe"
                    })]
                })]
            })]
        })
    })
});
function Kx(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = Kx(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Se() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = Kx(e)) && (r && (r += " "),
        r += t);
    return r
}
function Qa(e, t) {
    const n = {
        ...t
    };
    for (const r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            const i = r;
            if (i === "components" || i === "slots")
                n[i] = {
                    ...e[i],
                    ...n[i]
                };
            else if (i === "componentsProps" || i === "slotProps") {
                const o = e[i]
                  , s = t[i];
                if (!s)
                    n[i] = o || {};
                else if (!o)
                    n[i] = s;
                else {
                    n[i] = {
                        ...s
                    };
                    for (const a in o)
                        if (Object.prototype.hasOwnProperty.call(o, a)) {
                            const l = a;
                            n[i][l] = Qa(o[l], s[l])
                        }
                }
            } else
                n[i] === void 0 && (n[i] = e[i])
        }
    return n
}
function rn(e, t, n=void 0) {
    const r = {};
    for (const i in e) {
        const o = e[i];
        let s = ""
          , a = !0;
        for (let l = 0; l < o.length; l += 1) {
            const u = o[l];
            u && (s += (a === !0 ? "" : " ") + t(u),
            a = !1,
            n && n[u] && (s += " " + n[u]))
        }
        r[i] = s
    }
    return r
}
function Tr(e, ...t) {
    const n = new URL(`https://mui.com/production-error/?code=${e}`);
    return t.forEach(r => n.searchParams.append("args[]", r)),
    `Minified MUI error #${e}; visit ${n} for the full message.`
}
function fA(e, t=Number.MIN_SAFE_INTEGER, n=Number.MAX_SAFE_INTEGER) {
    return Math.max(t, Math.min(e, n))
}
function Dp(e, t=0, n=1) {
    return fA(e, t, n)
}
function dA(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`,"g");
    let n = e.match(t);
    return n && n[0].length === 1 && (n = n.map(r => r + r)),
    n ? `rgb${n.length === 4 ? "a" : ""}(${n.map( (r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : ""
}
function qn(e) {
    if (e.type)
        return e;
    if (e.charAt(0) === "#")
        return qn(dA(e));
    const t = e.indexOf("(")
      , n = e.substring(0, t);
    if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
        throw new Error(Tr(9, e));
    let r = e.substring(t + 1, e.length - 1), i;
    if (n === "color") {
        if (r = r.split(" "),
        i = r.shift(),
        r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
        !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
            throw new Error(Tr(10, i))
    } else
        r = r.split(",");
    return r = r.map(o => parseFloat(o)),
    {
        type: n,
        values: r,
        colorSpace: i
    }
}
const pA = e => {
    const t = qn(e);
    return t.values.slice(0, 3).map( (n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ")
}
  , ao = (e, t) => {
    try {
        return pA(e)
    } catch {
        return e
    }
}
;
function Ml(e) {
    const {type: t, colorSpace: n} = e;
    let {values: r} = e;
    return t.includes("rgb") ? r = r.map( (i, o) => o < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`,
    r[2] = `${r[2]}%`),
    t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`,
    `${t}(${r})`
}
function Gx(e) {
    e = qn(e);
    const {values: t} = e
      , n = t[0]
      , r = t[1] / 100
      , i = t[2] / 100
      , o = r * Math.min(i, 1 - i)
      , s = (u, c=(u + n / 30) % 12) => i - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
    return e.type === "hsla" && (a += "a",
    l.push(t[3])),
    Ml({
        type: a,
        values: l
    })
}
function Af(e) {
    e = qn(e);
    let t = e.type === "hsl" || e.type === "hsla" ? qn(Gx(e)).values : e.values;
    return t = t.map(n => (e.type !== "color" && (n /= 255),
    n <= .03928 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4)),
    Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
}
function hA(e, t) {
    const n = Af(e)
      , r = Af(t);
    return (Math.max(n, r) + .05) / (Math.min(n, r) + .05)
}
function Dt(e, t) {
    return e = qn(e),
    t = Dp(t),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t,
    Ml(e)
}
function Ws(e, t, n) {
    try {
        return Dt(e, t)
    } catch {
        return e
    }
}
function Xo(e, t) {
    if (e = qn(e),
    t = Dp(t),
    e.type.includes("hsl"))
        e.values[2] *= 1 - t;
    else if (e.type.includes("rgb") || e.type.includes("color"))
        for (let n = 0; n < 3; n += 1)
            e.values[n] *= 1 - t;
    return Ml(e)
}
function te(e, t, n) {
    try {
        return Xo(e, t)
    } catch {
        return e
    }
}
function Yo(e, t) {
    if (e = qn(e),
    t = Dp(t),
    e.type.includes("hsl"))
        e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.includes("rgb"))
        for (let n = 0; n < 3; n += 1)
            e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.includes("color"))
        for (let n = 0; n < 3; n += 1)
            e.values[n] += (1 - e.values[n]) * t;
    return Ml(e)
}
function ne(e, t, n) {
    try {
        return Yo(e, t)
    } catch {
        return e
    }
}
function Xx(e, t=.15) {
    return Af(e) > .5 ? Xo(e, t) : Yo(e, t)
}
function Hs(e, t, n) {
    try {
        return Xx(e, t)
    } catch {
        return e
    }
}
var Yx = {
    exports: {}
}
  , re = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ip = Symbol.for("react.transitional.element")
  , _p = Symbol.for("react.portal")
  , Nl = Symbol.for("react.fragment")
  , Ll = Symbol.for("react.strict_mode")
  , Dl = Symbol.for("react.profiler")
  , Il = Symbol.for("react.consumer")
  , _l = Symbol.for("react.context")
  , jl = Symbol.for("react.forward_ref")
  , $l = Symbol.for("react.suspense")
  , Fl = Symbol.for("react.suspense_list")
  , Bl = Symbol.for("react.memo")
  , Vl = Symbol.for("react.lazy")
  , mA = Symbol.for("react.offscreen")
  , gA = Symbol.for("react.client.reference");
function bt(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case Ip:
            switch (e = e.type,
            e) {
            case Nl:
            case Dl:
            case Ll:
            case $l:
            case Fl:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case _l:
                case jl:
                case Vl:
                case Bl:
                    return e;
                case Il:
                    return e;
                default:
                    return t
                }
            }
        case _p:
            return t
        }
    }
}
re.ContextConsumer = Il;
re.ContextProvider = _l;
re.Element = Ip;
re.ForwardRef = jl;
re.Fragment = Nl;
re.Lazy = Vl;
re.Memo = Bl;
re.Portal = _p;
re.Profiler = Dl;
re.StrictMode = Ll;
re.Suspense = $l;
re.SuspenseList = Fl;
re.isContextConsumer = function(e) {
    return bt(e) === Il
}
;
re.isContextProvider = function(e) {
    return bt(e) === _l
}
;
re.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ip
}
;
re.isForwardRef = function(e) {
    return bt(e) === jl
}
;
re.isFragment = function(e) {
    return bt(e) === Nl
}
;
re.isLazy = function(e) {
    return bt(e) === Vl
}
;
re.isMemo = function(e) {
    return bt(e) === Bl
}
;
re.isPortal = function(e) {
    return bt(e) === _p
}
;
re.isProfiler = function(e) {
    return bt(e) === Dl
}
;
re.isStrictMode = function(e) {
    return bt(e) === Ll
}
;
re.isSuspense = function(e) {
    return bt(e) === $l
}
;
re.isSuspenseList = function(e) {
    return bt(e) === Fl
}
;
re.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Nl || e === Dl || e === Ll || e === $l || e === Fl || e === mA || typeof e == "object" && e !== null && (e.$$typeof === Vl || e.$$typeof === Bl || e.$$typeof === _l || e.$$typeof === Il || e.$$typeof === jl || e.$$typeof === gA || e.getModuleId !== void 0)
}
;
re.typeOf = bt;
Yx.exports = re;
var qx = Yx.exports;
function fn(e) {
    if (typeof e != "object" || e === null)
        return !1;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
function Qx(e) {
    if (S.isValidElement(e) || qx.isValidElementType(e) || !fn(e))
        return e;
    const t = {};
    return Object.keys(e).forEach(n => {
        t[n] = Qx(e[n])
    }
    ),
    t
}
function ut(e, t, n={
    clone: !0
}) {
    const r = n.clone ? {
        ...e
    } : e;
    return fn(e) && fn(t) && Object.keys(t).forEach(i => {
        S.isValidElement(t[i]) || qx.isValidElementType(t[i]) ? r[i] = t[i] : fn(t[i]) && Object.prototype.hasOwnProperty.call(e, i) && fn(e[i]) ? r[i] = ut(e[i], t[i], n) : n.clone ? r[i] = fn(t[i]) ? Qx(t[i]) : t[i] : r[i] = t[i]
    }
    ),
    r
}
function K(e) {
    if (typeof e != "string")
        throw new Error(Tr(7));
    return e.charAt(0).toUpperCase() + e.slice(1)
}
function ic(e) {
    return e && e.ownerDocument || document
}
function yA(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t)
}
const vA = typeof window < "u" ? S.useLayoutEffect : S.useEffect;
let Ug = 0;
function xA(e) {
    const [t,n] = S.useState(e)
      , r = e || t;
    return S.useEffect( () => {
        t == null && (Ug += 1,
        n(`mui-${Ug}`))
    }
    , [t]),
    r
}
const wA = {
    ...hc
}
  , Wg = wA.useId;
function Jx(e) {
    if (Wg !== void 0) {
        const t = Wg();
        return e ?? t
    }
    return xA(e)
}
function vr(e) {
    const t = S.useRef(e);
    return vA( () => {
        t.current = e
    }
    ),
    S.useRef( (...n) => (0,
    t.current)(...n)).current
}
function ki(...e) {
    return S.useMemo( () => e.every(t => t == null) ? null : t => {
        e.forEach(n => {
            yA(n, t)
        }
        )
    }
    , e)
}
const Hg = {};
function Zx(e, t) {
    const n = S.useRef(Hg);
    return n.current === Hg && (n.current = e(t)),
    n
}
const SA = [];
function CA(e) {
    S.useEffect(e, SA)
}
class jp {
    constructor() {
        Bi(this, "currentId", null);
        Bi(this, "clear", () => {
            this.currentId !== null && (clearTimeout(this.currentId),
            this.currentId = null)
        }
        );
        Bi(this, "disposeEffect", () => this.clear)
    }
    static create() {
        return new jp
    }
    start(t, n) {
        this.clear(),
        this.currentId = setTimeout( () => {
            this.currentId = null,
            n()
        }
        , t)
    }
}
function $p() {
    const e = Zx(jp.create).current;
    return CA(e.disposeEffect),
    e
}
function Kg(e) {
    try {
        return e.matches(":focus-visible")
    } catch {}
    return !1
}
const Gg = e => e
  , EA = () => {
    let e = Gg;
    return {
        configure(t) {
            e = t
        },
        generate(t) {
            return e(t)
        },
        reset() {
            e = Gg
        }
    }
}
  , kA = EA()
  , PA = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
};
function Ft(e, t, n="Mui") {
    const r = PA[t];
    return r ? `${n}-${r}` : `${kA.generate(e)}-${t}`
}
function Bt(e, t, n="Mui") {
    const r = {};
    return t.forEach(i => {
        r[i] = Ft(e, i, n)
    }
    ),
    r
}
function TA(e) {
    return typeof e == "string"
}
function ew(e, t, n) {
    return e === void 0 || TA(e) ? t : {
        ...t,
        ownerState: {
            ...t.ownerState,
            ...n
        }
    }
}
function Of(e, t=[]) {
    if (e === void 0)
        return {};
    const n = {};
    return Object.keys(e).filter(r => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach(r => {
        n[r] = e[r]
    }
    ),
    n
}
function Xg(e) {
    if (e === void 0)
        return {};
    const t = {};
    return Object.keys(e).filter(n => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach(n => {
        t[n] = e[n]
    }
    ),
    t
}
function tw(e) {
    const {getSlotProps: t, additionalProps: n, externalSlotProps: r, externalForwardedProps: i, className: o} = e;
    if (!t) {
        const y = Se(n == null ? void 0 : n.className, o, i == null ? void 0 : i.className, r == null ? void 0 : r.className)
          , g = {
            ...n == null ? void 0 : n.style,
            ...i == null ? void 0 : i.style,
            ...r == null ? void 0 : r.style
        }
          , m = {
            ...n,
            ...i,
            ...r
        };
        return y.length > 0 && (m.className = y),
        Object.keys(g).length > 0 && (m.style = g),
        {
            props: m,
            internalRef: void 0
        }
    }
    const s = Of({
        ...i,
        ...r
    })
      , a = Xg(r)
      , l = Xg(i)
      , u = t(s)
      , c = Se(u == null ? void 0 : u.className, n == null ? void 0 : n.className, o, i == null ? void 0 : i.className, r == null ? void 0 : r.className)
      , f = {
        ...u == null ? void 0 : u.style,
        ...n == null ? void 0 : n.style,
        ...i == null ? void 0 : i.style,
        ...r == null ? void 0 : r.style
    }
      , d = {
        ...u,
        ...n,
        ...l,
        ...a
    };
    return c.length > 0 && (d.className = c),
    Object.keys(f).length > 0 && (d.style = f),
    {
        props: d,
        internalRef: u.ref
    }
}
function nw(e, t, n) {
    return typeof e == "function" ? e(t, n) : e
}
function bA(e) {
    var f;
    const {elementType: t, externalSlotProps: n, ownerState: r, skipResolvingSlotProps: i=!1, ...o} = e
      , s = i ? {} : nw(n, r)
      , {props: a, internalRef: l} = tw({
        ...o,
        externalSlotProps: s
    })
      , u = ki(l, s == null ? void 0 : s.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
    return ew(t, {
        ...a,
        ref: u
    }, r)
}
function rw(e) {
    var t;
    return parseInt(S.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null
}
function ko(e, t) {
    return t ? ut(e, t, {
        clone: !1
    }) : e
}
function RA(e, t) {
    if (!e.containerQueries)
        return t;
    const n = Object.keys(t).filter(r => r.startsWith("@container")).sort( (r, i) => {
        var s, a;
        const o = /min-width:\s*([0-9.]+)/;
        return +(((s = r.match(o)) == null ? void 0 : s[1]) || 0) - +(((a = i.match(o)) == null ? void 0 : a[1]) || 0)
    }
    );
    return n.length ? n.reduce( (r, i) => {
        const o = t[i];
        return delete r[i],
        r[i] = o,
        r
    }
    , {
        ...t
    }) : t
}
function AA(e, t) {
    return t === "@" || t.startsWith("@") && (e.some(n => t.startsWith(`@${n}`)) || !!t.match(/^@\d/))
}
function OA(e, t) {
    const n = t.match(/^@([^/]+)?\/?(.+)?$/);
    if (!n)
        return null;
    const [,r,i] = n
      , o = Number.isNaN(+r) ? r || 0 : +r;
    return e.containerQueries(i).up(o)
}
function MA(e) {
    const t = (o, s) => o.replace("@media", s ? `@container ${s}` : "@container");
    function n(o, s) {
        o.up = (...a) => t(e.breakpoints.up(...a), s),
        o.down = (...a) => t(e.breakpoints.down(...a), s),
        o.between = (...a) => t(e.breakpoints.between(...a), s),
        o.only = (...a) => t(e.breakpoints.only(...a), s),
        o.not = (...a) => {
            const l = t(e.breakpoints.not(...a), s);
            return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l
        }
    }
    const r = {}
      , i = o => (n(r, o),
    r);
    return n(i),
    {
        ...e,
        containerQueries: i
    }
}
const zl = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
}
  , Yg = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: e => `@media (min-width:${zl[e]}px)`
}
  , NA = {
    containerQueries: e => ({
        up: t => {
            let n = typeof t == "number" ? t : zl[t] || t;
            return typeof n == "number" && (n = `${n}px`),
            e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`
        }
    })
};
function En(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
        const o = r.breakpoints || Yg;
        return t.reduce( (s, a, l) => (s[o.up(o.keys[l])] = n(t[l]),
        s), {})
    }
    if (typeof t == "object") {
        const o = r.breakpoints || Yg;
        return Object.keys(t).reduce( (s, a) => {
            if (AA(o.keys, a)) {
                const l = OA(r.containerQueries ? r : NA, a);
                l && (s[l] = n(t[a], a))
            } else if (Object.keys(o.values || zl).includes(a)) {
                const l = o.up(a);
                s[l] = n(t[a], a)
            } else {
                const l = a;
                s[l] = t[l]
            }
            return s
        }
        , {})
    }
    return n(t)
}
function LA(e={}) {
    var n;
    return ((n = e.keys) == null ? void 0 : n.reduce( (r, i) => {
        const o = e.up(i);
        return r[o] = {},
        r
    }
    , {})) || {}
}
function DA(e, t) {
    return e.reduce( (n, r) => {
        const i = n[r];
        return (!i || Object.keys(i).length === 0) && delete n[r],
        n
    }
    , t)
}
function Ul(e, t, n=!0) {
    if (!t || typeof t != "string")
        return null;
    if (e && e.vars && n) {
        const r = `vars.${t}`.split(".").reduce( (i, o) => i && i[o] ? i[o] : null, e);
        if (r != null)
            return r
    }
    return t.split(".").reduce( (r, i) => r && r[i] != null ? r[i] : null, e)
}
function Ja(e, t, n, r=n) {
    let i;
    return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Ul(e, n) || r,
    t && (i = t(i, r, e)),
    i
}
function ke(e) {
    const {prop: t, cssProperty: n=e.prop, themeKey: r, transform: i} = e
      , o = s => {
        if (s[t] == null)
            return null;
        const a = s[t]
          , l = s.theme
          , u = Ul(l, r) || {};
        return En(s, a, f => {
            let d = Ja(u, i, f);
            return f === d && typeof f == "string" && (d = Ja(u, i, `${t}${f === "default" ? "" : K(f)}`, f)),
            n === !1 ? d : {
                [n]: d
            }
        }
        )
    }
    ;
    return o.propTypes = {},
    o.filterProps = [t],
    o
}
function IA(e) {
    const t = {};
    return n => (t[n] === void 0 && (t[n] = e(n)),
    t[n])
}
const _A = {
    m: "margin",
    p: "padding"
}
  , jA = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
}
  , qg = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
}
  , $A = IA(e => {
    if (e.length > 2)
        if (qg[e])
            e = qg[e];
        else
            return [e];
    const [t,n] = e.split("")
      , r = _A[t]
      , i = jA[n] || "";
    return Array.isArray(i) ? i.map(o => r + o) : [r + i]
}
)
  , Fp = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]
  , Bp = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Fp, ...Bp];
function ps(e, t, n, r) {
    const i = Ul(e, t, !0) ?? n;
    return typeof i == "number" || typeof i == "string" ? o => typeof o == "string" ? o : typeof i == "string" ? `calc(${o} * ${i})` : i * o : Array.isArray(i) ? o => {
        if (typeof o == "string")
            return o;
        const s = Math.abs(o)
          , a = i[s];
        return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`
    }
    : typeof i == "function" ? i : () => {}
}
function Vp(e) {
    return ps(e, "spacing", 8)
}
function hs(e, t) {
    return typeof t == "string" || t == null ? t : e(t)
}
function FA(e, t) {
    return n => e.reduce( (r, i) => (r[i] = hs(t, n),
    r), {})
}
function BA(e, t, n, r) {
    if (!t.includes(n))
        return null;
    const i = $A(n)
      , o = FA(i, r)
      , s = e[n];
    return En(e, s, o)
}
function iw(e, t) {
    const n = Vp(e.theme);
    return Object.keys(e).map(r => BA(e, t, r, n)).reduce(ko, {})
}
function ge(e) {
    return iw(e, Fp)
}
ge.propTypes = {};
ge.filterProps = Fp;
function ye(e) {
    return iw(e, Bp)
}
ye.propTypes = {};
ye.filterProps = Bp;
function Wl(...e) {
    const t = e.reduce( (r, i) => (i.filterProps.forEach(o => {
        r[o] = i
    }
    ),
    r), {})
      , n = r => Object.keys(r).reduce( (i, o) => t[o] ? ko(i, t[o](r)) : i, {});
    return n.propTypes = {},
    n.filterProps = e.reduce( (r, i) => r.concat(i.filterProps), []),
    n
}
function Ct(e) {
    return typeof e != "number" ? e : `${e}px solid`
}
function Rt(e, t) {
    return ke({
        prop: e,
        themeKey: "borders",
        transform: t
    })
}
const VA = Rt("border", Ct)
  , zA = Rt("borderTop", Ct)
  , UA = Rt("borderRight", Ct)
  , WA = Rt("borderBottom", Ct)
  , HA = Rt("borderLeft", Ct)
  , KA = Rt("borderColor")
  , GA = Rt("borderTopColor")
  , XA = Rt("borderRightColor")
  , YA = Rt("borderBottomColor")
  , qA = Rt("borderLeftColor")
  , QA = Rt("outline", Ct)
  , JA = Rt("outlineColor")
  , Hl = e => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
        const t = ps(e.theme, "shape.borderRadius", 4)
          , n = r => ({
            borderRadius: hs(t, r)
        });
        return En(e, e.borderRadius, n)
    }
    return null
}
;
Hl.propTypes = {};
Hl.filterProps = ["borderRadius"];
Wl(VA, zA, UA, WA, HA, KA, GA, XA, YA, qA, Hl, QA, JA);
const Kl = e => {
    if (e.gap !== void 0 && e.gap !== null) {
        const t = ps(e.theme, "spacing", 8)
          , n = r => ({
            gap: hs(t, r)
        });
        return En(e, e.gap, n)
    }
    return null
}
;
Kl.propTypes = {};
Kl.filterProps = ["gap"];
const Gl = e => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
        const t = ps(e.theme, "spacing", 8)
          , n = r => ({
            columnGap: hs(t, r)
        });
        return En(e, e.columnGap, n)
    }
    return null
}
;
Gl.propTypes = {};
Gl.filterProps = ["columnGap"];
const Xl = e => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
        const t = ps(e.theme, "spacing", 8)
          , n = r => ({
            rowGap: hs(t, r)
        });
        return En(e, e.rowGap, n)
    }
    return null
}
;
Xl.propTypes = {};
Xl.filterProps = ["rowGap"];
const ZA = ke({
    prop: "gridColumn"
})
  , e5 = ke({
    prop: "gridRow"
})
  , t5 = ke({
    prop: "gridAutoFlow"
})
  , n5 = ke({
    prop: "gridAutoColumns"
})
  , r5 = ke({
    prop: "gridAutoRows"
})
  , i5 = ke({
    prop: "gridTemplateColumns"
})
  , o5 = ke({
    prop: "gridTemplateRows"
})
  , s5 = ke({
    prop: "gridTemplateAreas"
})
  , a5 = ke({
    prop: "gridArea"
});
Wl(Kl, Gl, Xl, ZA, e5, t5, n5, r5, i5, o5, s5, a5);
function di(e, t) {
    return t === "grey" ? t : e
}
const l5 = ke({
    prop: "color",
    themeKey: "palette",
    transform: di
})
  , u5 = ke({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: di
})
  , c5 = ke({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: di
});
Wl(l5, u5, c5);
function ot(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e
}
const f5 = ke({
    prop: "width",
    transform: ot
})
  , zp = e => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
        const t = n => {
            var i, o, s, a, l;
            const r = ((s = (o = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : o.values) == null ? void 0 : s[n]) || zl[n];
            return r ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
                maxWidth: `${r}${e.theme.breakpoints.unit}`
            } : {
                maxWidth: r
            } : {
                maxWidth: ot(n)
            }
        }
        ;
        return En(e, e.maxWidth, t)
    }
    return null
}
;
zp.filterProps = ["maxWidth"];
const d5 = ke({
    prop: "minWidth",
    transform: ot
})
  , p5 = ke({
    prop: "height",
    transform: ot
})
  , h5 = ke({
    prop: "maxHeight",
    transform: ot
})
  , m5 = ke({
    prop: "minHeight",
    transform: ot
});
ke({
    prop: "size",
    cssProperty: "width",
    transform: ot
});
ke({
    prop: "size",
    cssProperty: "height",
    transform: ot
});
const g5 = ke({
    prop: "boxSizing"
});
Wl(f5, zp, d5, p5, h5, m5, g5);
const Yl = {
    border: {
        themeKey: "borders",
        transform: Ct
    },
    borderTop: {
        themeKey: "borders",
        transform: Ct
    },
    borderRight: {
        themeKey: "borders",
        transform: Ct
    },
    borderBottom: {
        themeKey: "borders",
        transform: Ct
    },
    borderLeft: {
        themeKey: "borders",
        transform: Ct
    },
    borderColor: {
        themeKey: "palette"
    },
    borderTopColor: {
        themeKey: "palette"
    },
    borderRightColor: {
        themeKey: "palette"
    },
    borderBottomColor: {
        themeKey: "palette"
    },
    borderLeftColor: {
        themeKey: "palette"
    },
    outline: {
        themeKey: "borders",
        transform: Ct
    },
    outlineColor: {
        themeKey: "palette"
    },
    borderRadius: {
        themeKey: "shape.borderRadius",
        style: Hl
    },
    color: {
        themeKey: "palette",
        transform: di
    },
    bgcolor: {
        themeKey: "palette",
        cssProperty: "backgroundColor",
        transform: di
    },
    backgroundColor: {
        themeKey: "palette",
        transform: di
    },
    p: {
        style: ye
    },
    pt: {
        style: ye
    },
    pr: {
        style: ye
    },
    pb: {
        style: ye
    },
    pl: {
        style: ye
    },
    px: {
        style: ye
    },
    py: {
        style: ye
    },
    padding: {
        style: ye
    },
    paddingTop: {
        style: ye
    },
    paddingRight: {
        style: ye
    },
    paddingBottom: {
        style: ye
    },
    paddingLeft: {
        style: ye
    },
    paddingX: {
        style: ye
    },
    paddingY: {
        style: ye
    },
    paddingInline: {
        style: ye
    },
    paddingInlineStart: {
        style: ye
    },
    paddingInlineEnd: {
        style: ye
    },
    paddingBlock: {
        style: ye
    },
    paddingBlockStart: {
        style: ye
    },
    paddingBlockEnd: {
        style: ye
    },
    m: {
        style: ge
    },
    mt: {
        style: ge
    },
    mr: {
        style: ge
    },
    mb: {
        style: ge
    },
    ml: {
        style: ge
    },
    mx: {
        style: ge
    },
    my: {
        style: ge
    },
    margin: {
        style: ge
    },
    marginTop: {
        style: ge
    },
    marginRight: {
        style: ge
    },
    marginBottom: {
        style: ge
    },
    marginLeft: {
        style: ge
    },
    marginX: {
        style: ge
    },
    marginY: {
        style: ge
    },
    marginInline: {
        style: ge
    },
    marginInlineStart: {
        style: ge
    },
    marginInlineEnd: {
        style: ge
    },
    marginBlock: {
        style: ge
    },
    marginBlockStart: {
        style: ge
    },
    marginBlockEnd: {
        style: ge
    },
    displayPrint: {
        cssProperty: !1,
        transform: e => ({
            "@media print": {
                display: e
            }
        })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {
        style: Kl
    },
    rowGap: {
        style: Xl
    },
    columnGap: {
        style: Gl
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {
        themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
        themeKey: "shadows"
    },
    width: {
        transform: ot
    },
    maxWidth: {
        style: zp
    },
    minWidth: {
        transform: ot
    },
    height: {
        transform: ot
    },
    maxHeight: {
        transform: ot
    },
    minHeight: {
        transform: ot
    },
    boxSizing: {},
    font: {
        themeKey: "font"
    },
    fontFamily: {
        themeKey: "typography"
    },
    fontSize: {
        themeKey: "typography"
    },
    fontStyle: {
        themeKey: "typography"
    },
    fontWeight: {
        themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
        cssProperty: !1,
        themeKey: "typography"
    }
};
function y5(...e) {
    const t = e.reduce( (r, i) => r.concat(Object.keys(i)), [])
      , n = new Set(t);
    return e.every(r => n.size === Object.keys(r).length)
}
function v5(e, t) {
    return typeof e == "function" ? e(t) : e
}
function x5() {
    function e(n, r, i, o) {
        const s = {
            [n]: r,
            theme: i
        }
          , a = o[n];
        if (!a)
            return {
                [n]: r
            };
        const {cssProperty: l=n, themeKey: u, transform: c, style: f} = a;
        if (r == null)
            return null;
        if (u === "typography" && r === "inherit")
            return {
                [n]: r
            };
        const d = Ul(i, u) || {};
        return f ? f(s) : En(s, r, g => {
            let m = Ja(d, c, g);
            return g === m && typeof g == "string" && (m = Ja(d, c, `${n}${g === "default" ? "" : K(g)}`, g)),
            l === !1 ? m : {
                [l]: m
            }
        }
        )
    }
    function t(n) {
        const {sx: r, theme: i={}} = n || {};
        if (!r)
            return null;
        const o = i.unstable_sxConfig ?? Yl;
        function s(a) {
            let l = a;
            if (typeof a == "function")
                l = a(i);
            else if (typeof a != "object")
                return a;
            if (!l)
                return null;
            const u = LA(i.breakpoints)
              , c = Object.keys(u);
            let f = u;
            return Object.keys(l).forEach(d => {
                const y = v5(l[d], i);
                if (y != null)
                    if (typeof y == "object")
                        if (o[d])
                            f = ko(f, e(d, y, i, o));
                        else {
                            const g = En({
                                theme: i
                            }, y, m => ({
                                [d]: m
                            }));
                            y5(g, y) ? f[d] = t({
                                sx: y,
                                theme: i
                            }) : f = ko(f, g)
                        }
                    else
                        f = ko(f, e(d, y, i, o))
            }
            ),
            RA(i, DA(c, f))
        }
        return Array.isArray(r) ? r.map(s) : s(r)
    }
    return t
}
const Pi = x5();
Pi.filterProps = ["sx"];
function Za() {
    return Za = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Za.apply(null, arguments)
}
var w5 = !1;
function S5(e) {
    if (e.sheet)
        return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e)
            return document.styleSheets[t]
}
function C5(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
}
var E5 = function() {
    function e(n) {
        var r = this;
        this._insertTag = function(i) {
            var o;
            r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling,
            r.container.insertBefore(i, o),
            r.tags.push(i)
        }
        ,
        this.isSpeedy = n.speedy === void 0 ? !w5 : n.speedy,
        this.tags = [],
        this.ctr = 0,
        this.nonce = n.nonce,
        this.key = n.key,
        this.container = n.container,
        this.prepend = n.prepend,
        this.insertionPoint = n.insertionPoint,
        this.before = null
    }
    var t = e.prototype;
    return t.hydrate = function(r) {
        r.forEach(this._insertTag)
    }
    ,
    t.insert = function(r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(C5(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
            var o = S5(i);
            try {
                o.insertRule(r, o.cssRules.length)
            } catch {}
        } else
            i.appendChild(document.createTextNode(r));
        this.ctr++
    }
    ,
    t.flush = function() {
        this.tags.forEach(function(r) {
            var i;
            return (i = r.parentNode) == null ? void 0 : i.removeChild(r)
        }),
        this.tags = [],
        this.ctr = 0
    }
    ,
    e
}()
  , Be = "-ms-"
  , el = "-moz-"
  , q = "-webkit-"
  , ow = "comm"
  , Up = "rule"
  , Wp = "decl"
  , k5 = "@import"
  , sw = "@keyframes"
  , P5 = "@layer"
  , T5 = Math.abs
  , ql = String.fromCharCode
  , b5 = Object.assign;
function R5(e, t) {
    return Ie(e, 0) ^ 45 ? (((t << 2 ^ Ie(e, 0)) << 2 ^ Ie(e, 1)) << 2 ^ Ie(e, 2)) << 2 ^ Ie(e, 3) : 0
}
function aw(e) {
    return e.trim()
}
function A5(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}
function Q(e, t, n) {
    return e.replace(t, n)
}
function Mf(e, t) {
    return e.indexOf(t)
}
function Ie(e, t) {
    return e.charCodeAt(t) | 0
}
function qo(e, t, n) {
    return e.slice(t, n)
}
function Gt(e) {
    return e.length
}
function Hp(e) {
    return e.length
}
function Ks(e, t) {
    return t.push(e),
    e
}
function O5(e, t) {
    return e.map(t).join("")
}
var Ql = 1
  , Ti = 1
  , lw = 0
  , rt = 0
  , Pe = 0
  , Ii = "";
function Jl(e, t, n, r, i, o, s) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: i,
        children: o,
        line: Ql,
        column: Ti,
        length: s,
        return: ""
    }
}
function Qi(e, t) {
    return b5(Jl("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, t)
}
function M5() {
    return Pe
}
function N5() {
    return Pe = rt > 0 ? Ie(Ii, --rt) : 0,
    Ti--,
    Pe === 10 && (Ti = 1,
    Ql--),
    Pe
}
function ct() {
    return Pe = rt < lw ? Ie(Ii, rt++) : 0,
    Ti++,
    Pe === 10 && (Ti = 1,
    Ql++),
    Pe
}
function en() {
    return Ie(Ii, rt)
}
function da() {
    return rt
}
function ms(e, t) {
    return qo(Ii, e, t)
}
function Qo(e) {
    switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
        return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
        return 4;
    case 58:
        return 3;
    case 34:
    case 39:
    case 40:
    case 91:
        return 2;
    case 41:
    case 93:
        return 1
    }
    return 0
}
function uw(e) {
    return Ql = Ti = 1,
    lw = Gt(Ii = e),
    rt = 0,
    []
}
function cw(e) {
    return Ii = "",
    e
}
function pa(e) {
    return aw(ms(rt - 1, Nf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function L5(e) {
    for (; (Pe = en()) && Pe < 33; )
        ct();
    return Qo(e) > 2 || Qo(Pe) > 3 ? "" : " "
}
function D5(e, t) {
    for (; --t && ct() && !(Pe < 48 || Pe > 102 || Pe > 57 && Pe < 65 || Pe > 70 && Pe < 97); )
        ;
    return ms(e, da() + (t < 6 && en() == 32 && ct() == 32))
}
function Nf(e) {
    for (; ct(); )
        switch (Pe) {
        case e:
            return rt;
        case 34:
        case 39:
            e !== 34 && e !== 39 && Nf(Pe);
            break;
        case 40:
            e === 41 && Nf(e);
            break;
        case 92:
            ct();
            break
        }
    return rt
}
function I5(e, t) {
    for (; ct() && e + Pe !== 57; )
        if (e + Pe === 84 && en() === 47)
            break;
    return "/*" + ms(t, rt - 1) + "*" + ql(e === 47 ? e : ct())
}
function _5(e) {
    for (; !Qo(en()); )
        ct();
    return ms(e, rt)
}
function j5(e) {
    return cw(ha("", null, null, null, [""], e = uw(e), 0, [0], e))
}
function ha(e, t, n, r, i, o, s, a, l) {
    for (var u = 0, c = 0, f = s, d = 0, y = 0, g = 0, m = 1, w = 1, p = 1, h = 0, v = "", C = i, E = o, P = r, T = v; w; )
        switch (g = h,
        h = ct()) {
        case 40:
            if (g != 108 && Ie(T, f - 1) == 58) {
                Mf(T += Q(pa(h), "&", "&\f"), "&\f") != -1 && (p = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            T += pa(h);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            T += L5(g);
            break;
        case 92:
            T += D5(da() - 1, 7);
            continue;
        case 47:
            switch (en()) {
            case 42:
            case 47:
                Ks($5(I5(ct(), da()), t, n), l);
                break;
            default:
                T += "/"
            }
            break;
        case 123 * m:
            a[u++] = Gt(T) * p;
        case 125 * m:
        case 59:
        case 0:
            switch (h) {
            case 0:
            case 125:
                w = 0;
            case 59 + c:
                p == -1 && (T = Q(T, /\f/g, "")),
                y > 0 && Gt(T) - f && Ks(y > 32 ? Jg(T + ";", r, n, f - 1) : Jg(Q(T, " ", "") + ";", r, n, f - 2), l);
                break;
            case 59:
                T += ";";
            default:
                if (Ks(P = Qg(T, t, n, u, c, i, a, v, C = [], E = [], f), o),
                h === 123)
                    if (c === 0)
                        ha(T, t, P, P, C, o, f, a, E);
                    else
                        switch (d === 99 && Ie(T, 3) === 110 ? 100 : d) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            ha(e, P, P, r && Ks(Qg(e, P, P, 0, 0, i, a, v, i, C = [], f), E), i, E, f, a, r ? C : E);
                            break;
                        default:
                            ha(T, P, P, P, [""], E, 0, a, E)
                        }
            }
            u = c = y = 0,
            m = p = 1,
            v = T = "",
            f = s;
            break;
        case 58:
            f = 1 + Gt(T),
            y = g;
        default:
            if (m < 1) {
                if (h == 123)
                    --m;
                else if (h == 125 && m++ == 0 && N5() == 125)
                    continue
            }
            switch (T += ql(h),
            h * m) {
            case 38:
                p = c > 0 ? 1 : (T += "\f",
                -1);
                break;
            case 44:
                a[u++] = (Gt(T) - 1) * p,
                p = 1;
                break;
            case 64:
                en() === 45 && (T += pa(ct())),
                d = en(),
                c = f = Gt(v = T += _5(da())),
                h++;
                break;
            case 45:
                g === 45 && Gt(T) == 2 && (m = 0)
            }
        }
    return o
}
function Qg(e, t, n, r, i, o, s, a, l, u, c) {
    for (var f = i - 1, d = i === 0 ? o : [""], y = Hp(d), g = 0, m = 0, w = 0; g < r; ++g)
        for (var p = 0, h = qo(e, f + 1, f = T5(m = s[g])), v = e; p < y; ++p)
            (v = aw(m > 0 ? d[p] + " " + h : Q(h, /&\f/g, d[p]))) && (l[w++] = v);
    return Jl(e, t, n, i === 0 ? Up : a, l, u, c)
}
function $5(e, t, n) {
    return Jl(e, t, n, ow, ql(M5()), qo(e, 2, -2), 0)
}
function Jg(e, t, n, r) {
    return Jl(e, t, n, Wp, qo(e, 0, r), qo(e, r + 1, -1), r)
}
function pi(e, t) {
    for (var n = "", r = Hp(e), i = 0; i < r; i++)
        n += t(e[i], i, e, t) || "";
    return n
}
function F5(e, t, n, r) {
    switch (e.type) {
    case P5:
        if (e.children.length)
            break;
    case k5:
    case Wp:
        return e.return = e.return || e.value;
    case ow:
        return "";
    case sw:
        return e.return = e.value + "{" + pi(e.children, r) + "}";
    case Up:
        e.value = e.props.join(",")
    }
    return Gt(n = pi(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}
function B5(e) {
    var t = Hp(e);
    return function(n, r, i, o) {
        for (var s = "", a = 0; a < t; a++)
            s += e[a](n, r, i, o) || "";
        return s
    }
}
function V5(e) {
    return function(t) {
        t.root || (t = t.return) && e(t)
    }
}
function fw(e) {
    var t = Object.create(null);
    return function(n) {
        return t[n] === void 0 && (t[n] = e(n)),
        t[n]
    }
}
var z5 = function(t, n, r) {
    for (var i = 0, o = 0; i = o,
    o = en(),
    i === 38 && o === 12 && (n[r] = 1),
    !Qo(o); )
        ct();
    return ms(t, rt)
}
  , U5 = function(t, n) {
    var r = -1
      , i = 44;
    do
        switch (Qo(i)) {
        case 0:
            i === 38 && en() === 12 && (n[r] = 1),
            t[r] += z5(rt - 1, n, r);
            break;
        case 2:
            t[r] += pa(i);
            break;
        case 4:
            if (i === 44) {
                t[++r] = en() === 58 ? "&\f" : "",
                n[r] = t[r].length;
                break
            }
        default:
            t[r] += ql(i)
        }
    while (i = ct());
    return t
}
  , W5 = function(t, n) {
    return cw(U5(uw(t), n))
}
  , Zg = new WeakMap
  , H5 = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
        for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
            if (r = r.parent,
            !r)
                return;
        if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Zg.get(r)) && !i) {
            Zg.set(t, !0);
            for (var o = [], s = W5(n, o), a = r.props, l = 0, u = 0; l < s.length; l++)
                for (var c = 0; c < a.length; c++,
                u++)
                    t.props[u] = o[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l]
        }
    }
}
  , K5 = function(t) {
    if (t.type === "decl") {
        var n = t.value;
        n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "",
        t.value = "")
    }
};
function dw(e, t) {
    switch (R5(e, t)) {
    case 5103:
        return q + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
        return q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
        return q + e + el + e + Be + e + e;
    case 6828:
    case 4268:
        return q + e + Be + e + e;
    case 6165:
        return q + e + Be + "flex-" + e + e;
    case 5187:
        return q + e + Q(e, /(\w+).+(:[^]+)/, q + "box-$1$2" + Be + "flex-$1$2") + e;
    case 5443:
        return q + e + Be + "flex-item-" + Q(e, /flex-|-self/, "") + e;
    case 4675:
        return q + e + Be + "flex-line-pack" + Q(e, /align-content|flex-|-self/, "") + e;
    case 5548:
        return q + e + Be + Q(e, "shrink", "negative") + e;
    case 5292:
        return q + e + Be + Q(e, "basis", "preferred-size") + e;
    case 6060:
        return q + "box-" + Q(e, "-grow", "") + q + e + Be + Q(e, "grow", "positive") + e;
    case 4554:
        return q + Q(e, /([^-])(transform)/g, "$1" + q + "$2") + e;
    case 6187:
        return Q(Q(Q(e, /(zoom-|grab)/, q + "$1"), /(image-set)/, q + "$1"), e, "") + e;
    case 5495:
    case 3959:
        return Q(e, /(image-set\([^]*)/, q + "$1$`$1");
    case 4968:
        return Q(Q(e, /(.+:)(flex-)?(.*)/, q + "box-pack:$3" + Be + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + q + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
        return Q(e, /(.+)-inline(.+)/, q + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
        if (Gt(e) - 1 - t > 6)
            switch (Ie(e, t + 1)) {
            case 109:
                if (Ie(e, t + 4) !== 45)
                    break;
            case 102:
                return Q(e, /(.+:)(.+)-([^]+)/, "$1" + q + "$2-$3$1" + el + (Ie(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
            case 115:
                return ~Mf(e, "stretch") ? dw(Q(e, "stretch", "fill-available"), t) + e : e
            }
        break;
    case 4949:
        if (Ie(e, t + 1) !== 115)
            break;
    case 6444:
        switch (Ie(e, Gt(e) - 3 - (~Mf(e, "!important") && 10))) {
        case 107:
            return Q(e, ":", ":" + q) + e;
        case 101:
            return Q(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + q + (Ie(e, 14) === 45 ? "inline-" : "") + "box$3$1" + q + "$2$3$1" + Be + "$2box$3") + e
        }
        break;
    case 5936:
        switch (Ie(e, t + 11)) {
        case 114:
            return q + e + Be + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
            return q + e + Be + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
            return q + e + Be + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e
        }
        return q + e + Be + e + e
    }
    return e
}
var G5 = function(t, n, r, i) {
    if (t.length > -1 && !t.return)
        switch (t.type) {
        case Wp:
            t.return = dw(t.value, t.length);
            break;
        case sw:
            return pi([Qi(t, {
                value: Q(t.value, "@", "@" + q)
            })], i);
        case Up:
            if (t.length)
                return O5(t.props, function(o) {
                    switch (A5(o, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        return pi([Qi(t, {
                            props: [Q(o, /:(read-\w+)/, ":" + el + "$1")]
                        })], i);
                    case "::placeholder":
                        return pi([Qi(t, {
                            props: [Q(o, /:(plac\w+)/, ":" + q + "input-$1")]
                        }), Qi(t, {
                            props: [Q(o, /:(plac\w+)/, ":" + el + "$1")]
                        }), Qi(t, {
                            props: [Q(o, /:(plac\w+)/, Be + "input-$1")]
                        })], i)
                    }
                    return ""
                })
        }
}
  , X5 = [G5]
  , Y5 = function(t) {
    var n = t.key;
    if (n === "css") {
        var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(r, function(m) {
            var w = m.getAttribute("data-emotion");
            w.indexOf(" ") !== -1 && (document.head.appendChild(m),
            m.setAttribute("data-s", ""))
        })
    }
    var i = t.stylisPlugins || X5, o = {}, s, a = [];
    s = t.container || document.head,
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(m) {
        for (var w = m.getAttribute("data-emotion").split(" "), p = 1; p < w.length; p++)
            o[w[p]] = !0;
        a.push(m)
    });
    var l, u = [H5, K5];
    {
        var c, f = [F5, V5(function(m) {
            c.insert(m)
        })], d = B5(u.concat(i, f)), y = function(w) {
            return pi(j5(w), d)
        };
        l = function(w, p, h, v) {
            c = h,
            y(w ? w + "{" + p.styles + "}" : p.styles),
            v && (g.inserted[p.name] = !0)
        }
    }
    var g = {
        key: n,
        sheet: new E5({
            key: n,
            container: s,
            nonce: t.nonce,
            speedy: t.speedy,
            prepend: t.prepend,
            insertionPoint: t.insertionPoint
        }),
        nonce: t.nonce,
        inserted: o,
        registered: {},
        insert: l
    };
    return g.sheet.hydrate(a),
    g
}
  , pw = {
    exports: {}
}
  , Z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne = typeof Symbol == "function" && Symbol.for
  , Kp = Ne ? Symbol.for("react.element") : 60103
  , Gp = Ne ? Symbol.for("react.portal") : 60106
  , Zl = Ne ? Symbol.for("react.fragment") : 60107
  , eu = Ne ? Symbol.for("react.strict_mode") : 60108
  , tu = Ne ? Symbol.for("react.profiler") : 60114
  , nu = Ne ? Symbol.for("react.provider") : 60109
  , ru = Ne ? Symbol.for("react.context") : 60110
  , Xp = Ne ? Symbol.for("react.async_mode") : 60111
  , iu = Ne ? Symbol.for("react.concurrent_mode") : 60111
  , ou = Ne ? Symbol.for("react.forward_ref") : 60112
  , su = Ne ? Symbol.for("react.suspense") : 60113
  , q5 = Ne ? Symbol.for("react.suspense_list") : 60120
  , au = Ne ? Symbol.for("react.memo") : 60115
  , lu = Ne ? Symbol.for("react.lazy") : 60116
  , Q5 = Ne ? Symbol.for("react.block") : 60121
  , J5 = Ne ? Symbol.for("react.fundamental") : 60117
  , Z5 = Ne ? Symbol.for("react.responder") : 60118
  , eO = Ne ? Symbol.for("react.scope") : 60119;
function gt(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case Kp:
            switch (e = e.type,
            e) {
            case Xp:
            case iu:
            case Zl:
            case tu:
            case eu:
            case su:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case ru:
                case ou:
                case lu:
                case au:
                case nu:
                    return e;
                default:
                    return t
                }
            }
        case Gp:
            return t
        }
    }
}
function hw(e) {
    return gt(e) === iu
}
Z.AsyncMode = Xp;
Z.ConcurrentMode = iu;
Z.ContextConsumer = ru;
Z.ContextProvider = nu;
Z.Element = Kp;
Z.ForwardRef = ou;
Z.Fragment = Zl;
Z.Lazy = lu;
Z.Memo = au;
Z.Portal = Gp;
Z.Profiler = tu;
Z.StrictMode = eu;
Z.Suspense = su;
Z.isAsyncMode = function(e) {
    return hw(e) || gt(e) === Xp
}
;
Z.isConcurrentMode = hw;
Z.isContextConsumer = function(e) {
    return gt(e) === ru
}
;
Z.isContextProvider = function(e) {
    return gt(e) === nu
}
;
Z.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Kp
}
;
Z.isForwardRef = function(e) {
    return gt(e) === ou
}
;
Z.isFragment = function(e) {
    return gt(e) === Zl
}
;
Z.isLazy = function(e) {
    return gt(e) === lu
}
;
Z.isMemo = function(e) {
    return gt(e) === au
}
;
Z.isPortal = function(e) {
    return gt(e) === Gp
}
;
Z.isProfiler = function(e) {
    return gt(e) === tu
}
;
Z.isStrictMode = function(e) {
    return gt(e) === eu
}
;
Z.isSuspense = function(e) {
    return gt(e) === su
}
;
Z.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Zl || e === iu || e === tu || e === eu || e === su || e === q5 || typeof e == "object" && e !== null && (e.$$typeof === lu || e.$$typeof === au || e.$$typeof === nu || e.$$typeof === ru || e.$$typeof === ou || e.$$typeof === J5 || e.$$typeof === Z5 || e.$$typeof === eO || e.$$typeof === Q5)
}
;
Z.typeOf = gt;
pw.exports = Z;
var tO = pw.exports
  , mw = tO
  , nO = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}
  , rO = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}
  , gw = {};
gw[mw.ForwardRef] = nO;
gw[mw.Memo] = rO;
var iO = !0;
function yw(e, t, n) {
    var r = "";
    return n.split(" ").forEach(function(i) {
        e[i] !== void 0 ? t.push(e[i] + ";") : i && (r += i + " ")
    }),
    r
}
var Yp = function(t, n, r) {
    var i = t.key + "-" + n.name;
    (r === !1 || iO === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles)
}
  , vw = function(t, n, r) {
    Yp(t, n, r);
    var i = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
        var o = n;
        do
            t.insert(n === o ? "." + i : "", o, t.sheet, !0),
            o = o.next;
        while (o !== void 0)
    }
};
function oO(e) {
    for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r,
    i -= 4)
        n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24,
        n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16),
        n ^= n >>> 24,
        t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (i) {
    case 3:
        t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
        t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
        t ^= e.charCodeAt(r) & 255,
        t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13,
    t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16),
    ((t ^ t >>> 15) >>> 0).toString(36)
}
var sO = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
}
  , aO = !1
  , lO = /[A-Z]|^ms/g
  , uO = /_EMO_([^_]+?)_([^]*?)_EMO_/g
  , xw = function(t) {
    return t.charCodeAt(1) === 45
}
  , ey = function(t) {
    return t != null && typeof t != "boolean"
}
  , oc = fw(function(e) {
    return xw(e) ? e : e.replace(lO, "-$&").toLowerCase()
})
  , ty = function(t, n) {
    switch (t) {
    case "animation":
    case "animationName":
        if (typeof n == "string")
            return n.replace(uO, function(r, i, o) {
                return Xt = {
                    name: i,
                    styles: o,
                    next: Xt
                },
                i
            })
    }
    return sO[t] !== 1 && !xw(t) && typeof n == "number" && n !== 0 ? n + "px" : n
}
  , cO = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Jo(e, t, n) {
    if (n == null)
        return "";
    var r = n;
    if (r.__emotion_styles !== void 0)
        return r;
    switch (typeof n) {
    case "boolean":
        return "";
    case "object":
        {
            var i = n;
            if (i.anim === 1)
                return Xt = {
                    name: i.name,
                    styles: i.styles,
                    next: Xt
                },
                i.name;
            var o = n;
            if (o.styles !== void 0) {
                var s = o.next;
                if (s !== void 0)
                    for (; s !== void 0; )
                        Xt = {
                            name: s.name,
                            styles: s.styles,
                            next: Xt
                        },
                        s = s.next;
                var a = o.styles + ";";
                return a
            }
            return fO(e, t, n)
        }
    case "function":
        {
            if (e !== void 0) {
                var l = Xt
                  , u = n(e);
                return Xt = l,
                Jo(e, t, u)
            }
            break
        }
    }
    var c = n;
    if (t == null)
        return c;
    var f = t[c];
    return f !== void 0 ? f : c
}
function fO(e, t, n) {
    var r = "";
    if (Array.isArray(n))
        for (var i = 0; i < n.length; i++)
            r += Jo(e, t, n[i]) + ";";
    else
        for (var o in n) {
            var s = n[o];
            if (typeof s != "object") {
                var a = s;
                t != null && t[a] !== void 0 ? r += o + "{" + t[a] + "}" : ey(a) && (r += oc(o) + ":" + ty(o, a) + ";")
            } else {
                if (o === "NO_COMPONENT_SELECTOR" && aO)
                    throw new Error(cO);
                if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
                    for (var l = 0; l < s.length; l++)
                        ey(s[l]) && (r += oc(o) + ":" + ty(o, s[l]) + ";");
                else {
                    var u = Jo(e, t, s);
                    switch (o) {
                    case "animation":
                    case "animationName":
                        {
                            r += oc(o) + ":" + u + ";";
                            break
                        }
                    default:
                        r += o + "{" + u + "}"
                    }
                }
            }
        }
    return r
}
var ny = /label:\s*([^\s;{]+)\s*(;|$)/g, Xt;
function uu(e, t, n) {
    if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
        return e[0];
    var r = !0
      , i = "";
    Xt = void 0;
    var o = e[0];
    if (o == null || o.raw === void 0)
        r = !1,
        i += Jo(n, t, o);
    else {
        var s = o;
        i += s[0]
    }
    for (var a = 1; a < e.length; a++)
        if (i += Jo(n, t, e[a]),
        r) {
            var l = o;
            i += l[a]
        }
    ny.lastIndex = 0;
    for (var u = "", c; (c = ny.exec(i)) !== null; )
        u += "-" + c[1];
    var f = oO(i) + u;
    return {
        name: f,
        styles: i,
        next: Xt
    }
}
var dO = function(t) {
    return t()
}
  , pO = hc.useInsertionEffect ? hc.useInsertionEffect : !1
  , ww = pO || dO
  , hO = !1
  , Sw = S.createContext(typeof HTMLElement < "u" ? Y5({
    key: "css"
}) : null);
Sw.Provider;
var Cw = function(t) {
    return S.forwardRef(function(n, r) {
        var i = S.useContext(Sw);
        return t(n, i, r)
    })
}
  , qp = S.createContext({})
  , Qp = {}.hasOwnProperty
  , Lf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__"
  , mO = function(t, n) {
    var r = {};
    for (var i in n)
        Qp.call(n, i) && (r[i] = n[i]);
    return r[Lf] = t,
    r
}
  , gO = function(t) {
    var n = t.cache
      , r = t.serialized
      , i = t.isStringTag;
    return Yp(n, r, i),
    ww(function() {
        return vw(n, r, i)
    }),
    null
}
  , yO = Cw(function(e, t, n) {
    var r = e.css;
    typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
    var i = e[Lf]
      , o = [r]
      , s = "";
    typeof e.className == "string" ? s = yw(t.registered, o, e.className) : e.className != null && (s = e.className + " ");
    var a = uu(o, void 0, S.useContext(qp));
    s += t.key + "-" + a.name;
    var l = {};
    for (var u in e)
        Qp.call(e, u) && u !== "css" && u !== Lf && !hO && (l[u] = e[u]);
    return l.className = s,
    n && (l.ref = n),
    S.createElement(S.Fragment, null, S.createElement(gO, {
        cache: t,
        serialized: a,
        isStringTag: typeof i == "string"
    }), S.createElement(i, l))
})
  , vO = yO
  , ry = function(t, n) {
    var r = arguments;
    if (n == null || !Qp.call(n, "css"))
        return S.createElement.apply(void 0, r);
    var i = r.length
      , o = new Array(i);
    o[0] = vO,
    o[1] = mO(t, n);
    for (var s = 2; s < i; s++)
        o[s] = r[s];
    return S.createElement.apply(null, o)
};
(function(e) {
    var t;
    t || (t = e.JSX || (e.JSX = {}))
}
)(ry || (ry = {}));
function gs() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return uu(t)
}
function Nr() {
    var e = gs.apply(void 0, arguments)
      , t = "animation-" + e.name;
    return {
        name: t,
        styles: "@keyframes " + t + "{" + e.styles + "}",
        anim: 1,
        toString: function() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
        }
    }
}
var xO = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/
  , wO = fw(function(e) {
    return xO.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91
})
  , SO = !1
  , CO = wO
  , EO = function(t) {
    return t !== "theme"
}
  , iy = function(t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? CO : EO
}
  , oy = function(t, n, r) {
    var i;
    if (n) {
        var o = n.shouldForwardProp;
        i = t.__emotion_forwardProp && o ? function(s) {
            return t.__emotion_forwardProp(s) && o(s)
        }
        : o
    }
    return typeof i != "function" && r && (i = t.__emotion_forwardProp),
    i
}
  , kO = function(t) {
    var n = t.cache
      , r = t.serialized
      , i = t.isStringTag;
    return Yp(n, r, i),
    ww(function() {
        return vw(n, r, i)
    }),
    null
}
  , PO = function e(t, n) {
    var r = t.__emotion_real === t, i = r && t.__emotion_base || t, o, s;
    n !== void 0 && (o = n.label,
    s = n.target);
    var a = oy(t, n, r)
      , l = a || iy(i)
      , u = !l("as");
    return function() {
        var c = arguments
          , f = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
        if (o !== void 0 && f.push("label:" + o + ";"),
        c[0] == null || c[0].raw === void 0)
            f.push.apply(f, c);
        else {
            var d = c[0];
            f.push(d[0]);
            for (var y = c.length, g = 1; g < y; g++)
                f.push(c[g], d[g])
        }
        var m = Cw(function(w, p, h) {
            var v = u && w.as || i
              , C = ""
              , E = []
              , P = w;
            if (w.theme == null) {
                P = {};
                for (var T in w)
                    P[T] = w[T];
                P.theme = S.useContext(qp)
            }
            typeof w.className == "string" ? C = yw(p.registered, E, w.className) : w.className != null && (C = w.className + " ");
            var b = uu(f.concat(E), p.registered, P);
            C += p.key + "-" + b.name,
            s !== void 0 && (C += " " + s);
            var L = u && a === void 0 ? iy(v) : l
              , x = {};
            for (var O in w)
                u && O === "as" || L(O) && (x[O] = w[O]);
            return x.className = C,
            h && (x.ref = h),
            S.createElement(S.Fragment, null, S.createElement(kO, {
                cache: p,
                serialized: b,
                isStringTag: typeof v == "string"
            }), S.createElement(v, x))
        });
        return m.displayName = o !== void 0 ? o : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")",
        m.defaultProps = t.defaultProps,
        m.__emotion_real = m,
        m.__emotion_base = i,
        m.__emotion_styles = f,
        m.__emotion_forwardProp = a,
        Object.defineProperty(m, "toString", {
            value: function() {
                return s === void 0 && SO ? "NO_COMPONENT_SELECTOR" : "." + s
            }
        }),
        m.withComponent = function(w, p) {
            var h = e(w, Za({}, n, p, {
                shouldForwardProp: oy(m, p, !0)
            }));
            return h.apply(void 0, f)
        }
        ,
        m
    }
}
  , TO = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]
  , Df = PO.bind(null);
TO.forEach(function(e) {
    Df[e] = Df(e)
});
/**
 * @mui/styled-engine v6.4.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function bO(e, t) {
    return Df(e, t)
}
function RO(e, t) {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles))
}
const sy = [];
function ay(e) {
    return sy[0] = e,
    uu(sy)
}
const AO = e => {
    const t = Object.keys(e).map(n => ({
        key: n,
        val: e[n]
    })) || [];
    return t.sort( (n, r) => n.val - r.val),
    t.reduce( (n, r) => ({
        ...n,
        [r.key]: r.val
    }), {})
}
;
function OO(e) {
    const {values: t={
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
    }, unit: n="px", step: r=5, ...i} = e
      , o = AO(t)
      , s = Object.keys(o);
    function a(d) {
        return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`
    }
    function l(d) {
        return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`
    }
    function u(d, y) {
        const g = s.indexOf(y);
        return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : y) - r / 100}${n})`
    }
    function c(d) {
        return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : a(d)
    }
    function f(d) {
        const y = s.indexOf(d);
        return y === 0 ? a(s[1]) : y === s.length - 1 ? l(s[y]) : u(d, s[s.indexOf(d) + 1]).replace("@media", "@media not all and")
    }
    return {
        keys: s,
        values: o,
        up: a,
        down: l,
        between: u,
        only: c,
        not: f,
        unit: n,
        ...i
    }
}
const MO = {
    borderRadius: 4
};
function Ew(e=8, t=Vp({
    spacing: e
})) {
    if (e.mui)
        return e;
    const n = (...r) => (r.length === 0 ? [1] : r).map(o => {
        const s = t(o);
        return typeof s == "number" ? `${s}px` : s
    }
    ).join(" ");
    return n.mui = !0,
    n
}
function NO(e, t) {
    var r;
    const n = this;
    if (n.vars) {
        if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
            return {};
        let i = n.getColorSchemeSelector(e);
        return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`),
        {
            [i]: t
        })
    }
    return n.palette.mode === e ? t : {}
}
function Jp(e={}, ...t) {
    const {breakpoints: n={}, palette: r={}, spacing: i, shape: o={}, ...s} = e
      , a = OO(n)
      , l = Ew(i);
    let u = ut({
        breakpoints: a,
        direction: "ltr",
        components: {},
        palette: {
            mode: "light",
            ...r
        },
        spacing: l,
        shape: {
            ...MO,
            ...o
        }
    }, s);
    return u = MA(u),
    u.applyStyles = NO,
    u = t.reduce( (c, f) => ut(c, f), u),
    u.unstable_sxConfig = {
        ...Yl,
        ...s == null ? void 0 : s.unstable_sxConfig
    },
    u.unstable_sx = function(f) {
        return Pi({
            sx: f,
            theme: this
        })
    }
    ,
    u
}
function LO(e) {
    return Object.keys(e).length === 0
}
function DO(e=null) {
    const t = S.useContext(qp);
    return !t || LO(t) ? e : t
}
const IO = Jp();
function _O(e=IO) {
    return DO(e)
}
function kw(e) {
    const {variants: t, ...n} = e
      , r = {
        variants: t,
        style: ay(n),
        isProcessed: !0
    };
    return r.style === n || t && t.forEach(i => {
        typeof i.style != "function" && (i.style = ay(i.style))
    }
    ),
    r
}
const jO = Jp();
function sc(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as"
}
function $O(e) {
    return e ? (t, n) => n[e] : null
}
function FO(e, t, n) {
    e.theme = zO(e.theme) ? n : e.theme[t] || e.theme
}
function ma(e, t) {
    const n = typeof t == "function" ? t(e) : t;
    if (Array.isArray(n))
        return n.flatMap(r => ma(e, r));
    if (Array.isArray(n == null ? void 0 : n.variants)) {
        let r;
        if (n.isProcessed)
            r = n.style;
        else {
            const {variants: i, ...o} = n;
            r = o
        }
        return Pw(e, n.variants, [r])
    }
    return n != null && n.isProcessed ? n.style : n
}
function Pw(e, t, n=[]) {
    var i;
    let r;
    e: for (let o = 0; o < t.length; o += 1) {
        const s = t[o];
        if (typeof s.props == "function") {
            if (r ?? (r = {
                ...e,
                ...e.ownerState,
                ownerState: e.ownerState
            }),
            !s.props(r))
                continue
        } else
            for (const a in s.props)
                if (e[a] !== s.props[a] && ((i = e.ownerState) == null ? void 0 : i[a]) !== s.props[a])
                    continue e;
        typeof s.style == "function" ? (r ?? (r = {
            ...e,
            ...e.ownerState,
            ownerState: e.ownerState
        }),
        n.push(s.style(r))) : n.push(s.style)
    }
    return n
}
function BO(e={}) {
    const {themeId: t, defaultTheme: n=jO, rootShouldForwardProp: r=sc, slotShouldForwardProp: i=sc} = e;
    function o(a) {
        FO(a, t, n)
    }
    return (a, l={}) => {
        RO(a, E => E.filter(P => P !== Pi));
        const {name: u, slot: c, skipVariantsResolver: f, skipSx: d, overridesResolver: y=$O(WO(c)), ...g} = l
          , m = f !== void 0 ? f : c && c !== "Root" && c !== "root" || !1
          , w = d || !1;
        let p = sc;
        c === "Root" || c === "root" ? p = r : c ? p = i : UO(a) && (p = void 0);
        const h = bO(a, {
            shouldForwardProp: p,
            label: VO(),
            ...g
        })
          , v = E => {
            if (typeof E == "function" && E.__emotion_real !== E)
                return function(T) {
                    return ma(T, E)
                }
                ;
            if (fn(E)) {
                const P = kw(E);
                return P.variants ? function(b) {
                    return ma(b, P)
                }
                : P.style
            }
            return E
        }
          , C = (...E) => {
            const P = []
              , T = E.map(v)
              , b = [];
            if (P.push(o),
            u && y && b.push(function(I) {
                var X, V;
                const U = (V = (X = I.theme.components) == null ? void 0 : X[u]) == null ? void 0 : V.styleOverrides;
                if (!U)
                    return null;
                const B = {};
                for (const M in U)
                    B[M] = ma(I, U[M]);
                return y(I, B)
            }),
            u && !m && b.push(function(I) {
                var B, X;
                const j = I.theme
                  , U = (X = (B = j == null ? void 0 : j.components) == null ? void 0 : B[u]) == null ? void 0 : X.variants;
                return U ? Pw(I, U) : null
            }),
            w || b.push(Pi),
            Array.isArray(T[0])) {
                const O = T.shift()
                  , I = new Array(P.length).fill("")
                  , j = new Array(b.length).fill("");
                let U;
                U = [...I, ...O, ...j],
                U.raw = [...I, ...O.raw, ...j],
                P.unshift(U)
            }
            const L = [...P, ...T, ...b]
              , x = h(...L);
            return a.muiName && (x.muiName = a.muiName),
            x
        }
        ;
        return h.withConfig && (C.withConfig = h.withConfig),
        C
    }
}
function VO(e, t) {
    return void 0
}
function zO(e) {
    for (const t in e)
        return !1;
    return !0
}
function UO(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96
}
function WO(e) {
    return e && e.charAt(0).toLowerCase() + e.slice(1)
}
const HO = S.createContext(void 0);
function KO(e) {
    const {theme: t, name: n, props: r} = e;
    if (!t || !t.components || !t.components[n])
        return r;
    const i = t.components[n];
    return i.defaultProps ? Qa(i.defaultProps, r) : !i.styleOverrides && !i.variants ? Qa(i, r) : r
}
function GO({props: e, name: t}) {
    const n = S.useContext(HO);
    return KO({
        props: e,
        name: t,
        theme: {
            components: n
        }
    })
}
const ly = {
    theme: void 0
};
function XO(e) {
    let t, n;
    return function(i) {
        let o = t;
        return (o === void 0 || i.theme !== n) && (ly.theme = i.theme,
        o = kw(e(ly)),
        t = o,
        n = i.theme),
        o
    }
}
function YO(e="") {
    function t(...r) {
        if (!r.length)
            return "";
        const i = r[0];
        return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`
    }
    return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`
}
const uy = (e, t, n, r=[]) => {
    let i = e;
    t.forEach( (o, s) => {
        s === t.length - 1 ? Array.isArray(i) ? i[Number(o)] = n : i && typeof i == "object" && (i[o] = n) : i && typeof i == "object" && (i[o] || (i[o] = r.includes(o) ? [] : {}),
        i = i[o])
    }
    )
}
  , qO = (e, t, n) => {
    function r(i, o=[], s=[]) {
        Object.entries(i).forEach( ([a,l]) => {
            (!n || n && !n([...o, a])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? r(l, [...o, a], Array.isArray(l) ? [...s, a] : s) : t([...o, a], l, s))
        }
        )
    }
    r(e)
}
  , QO = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some(r => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ac(e, t) {
    const {prefix: n, shouldSkipGeneratingVar: r} = t || {}
      , i = {}
      , o = {}
      , s = {};
    return qO(e, (a, l, u) => {
        if ((typeof l == "string" || typeof l == "number") && (!r || !r(a, l))) {
            const c = `--${n ? `${n}-` : ""}${a.join("-")}`
              , f = QO(a, l);
            Object.assign(i, {
                [c]: f
            }),
            uy(o, a, `var(${c})`, u),
            uy(s, a, `var(${c}, ${f})`, u)
        }
    }
    , a => a[0] === "vars"),
    {
        css: i,
        vars: o,
        varsWithDefaults: s
    }
}
function JO(e, t={}) {
    const {getSelector: n=w, disableCssColorScheme: r, colorSchemeSelector: i} = t
      , {colorSchemes: o={}, components: s, defaultColorScheme: a="light", ...l} = e
      , {vars: u, css: c, varsWithDefaults: f} = ac(l, t);
    let d = f;
    const y = {}
      , {[a]: g, ...m} = o;
    if (Object.entries(m || {}).forEach( ([v,C]) => {
        const {vars: E, css: P, varsWithDefaults: T} = ac(C, t);
        d = ut(d, T),
        y[v] = {
            css: P,
            vars: E
        }
    }
    ),
    g) {
        const {css: v, vars: C, varsWithDefaults: E} = ac(g, t);
        d = ut(d, E),
        y[a] = {
            css: v,
            vars: C
        }
    }
    function w(v, C) {
        var P, T;
        let E = i;
        if (i === "class" && (E = ".%s"),
        i === "data" && (E = "[data-%s]"),
        i != null && i.startsWith("data-") && !i.includes("%s") && (E = `[${i}="%s"]`),
        v) {
            if (E === "media")
                return e.defaultColorScheme === v ? ":root" : {
                    [`@media (prefers-color-scheme: ${((T = (P = o[v]) == null ? void 0 : P.palette) == null ? void 0 : T.mode) || v})`]: {
                        ":root": C
                    }
                };
            if (E)
                return e.defaultColorScheme === v ? `:root, ${E.replace("%s", String(v))}` : E.replace("%s", String(v))
        }
        return ":root"
    }
    return {
        vars: d,
        generateThemeVars: () => {
            let v = {
                ...u
            };
            return Object.entries(y).forEach( ([,{vars: C}]) => {
                v = ut(v, C)
            }
            ),
            v
        }
        ,
        generateStyleSheets: () => {
            var b, L;
            const v = []
              , C = e.defaultColorScheme || "light";
            function E(x, O) {
                Object.keys(O).length && v.push(typeof x == "string" ? {
                    [x]: {
                        ...O
                    }
                } : x)
            }
            E(n(void 0, {
                ...c
            }), c);
            const {[C]: P, ...T} = y;
            if (P) {
                const {css: x} = P
                  , O = (L = (b = o[C]) == null ? void 0 : b.palette) == null ? void 0 : L.mode
                  , I = !r && O ? {
                    colorScheme: O,
                    ...x
                } : {
                    ...x
                };
                E(n(C, {
                    ...I
                }), I)
            }
            return Object.entries(T).forEach( ([x,{css: O}]) => {
                var U, B;
                const I = (B = (U = o[x]) == null ? void 0 : U.palette) == null ? void 0 : B.mode
                  , j = !r && I ? {
                    colorScheme: I,
                    ...O
                } : {
                    ...O
                };
                E(n(x, {
                    ...j
                }), j)
            }
            ),
            v
        }
    }
}
function ZO(e) {
    return function(n) {
        return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&"
    }
}
const Zo = {
    black: "#000",
    white: "#fff"
}
  , eM = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
}
  , Ir = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff"
}
  , _r = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000"
}
  , Ji = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00"
}
  , jr = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
}
  , $r = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea"
}
  , Fr = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
};
function Tw() {
    return {
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)"
        },
        divider: "rgba(0, 0, 0, 0.12)",
        background: {
            paper: Zo.white,
            default: Zo.white
        },
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: .04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: .08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: .38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: .12,
            activatedOpacity: .12
        }
    }
}
const tM = Tw();
function bw() {
    return {
        text: {
            primary: Zo.white,
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)"
        },
        divider: "rgba(255, 255, 255, 0.12)",
        background: {
            paper: "#121212",
            default: "#121212"
        },
        action: {
            active: Zo.white,
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: .08,
            selected: "rgba(255, 255, 255, 0.16)",
            selectedOpacity: .16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: .38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: .12,
            activatedOpacity: .24
        }
    }
}
const cy = bw();
function fy(e, t, n, r) {
    const i = r.light || r
      , o = r.dark || r * 1.5;
    e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Yo(e.main, i) : t === "dark" && (e.dark = Xo(e.main, o)))
}
function nM(e="light") {
    return e === "dark" ? {
        main: jr[200],
        light: jr[50],
        dark: jr[400]
    } : {
        main: jr[700],
        light: jr[400],
        dark: jr[800]
    }
}
function rM(e="light") {
    return e === "dark" ? {
        main: Ir[200],
        light: Ir[50],
        dark: Ir[400]
    } : {
        main: Ir[500],
        light: Ir[300],
        dark: Ir[700]
    }
}
function iM(e="light") {
    return e === "dark" ? {
        main: _r[500],
        light: _r[300],
        dark: _r[700]
    } : {
        main: _r[700],
        light: _r[400],
        dark: _r[800]
    }
}
function oM(e="light") {
    return e === "dark" ? {
        main: $r[400],
        light: $r[300],
        dark: $r[700]
    } : {
        main: $r[700],
        light: $r[500],
        dark: $r[900]
    }
}
function sM(e="light") {
    return e === "dark" ? {
        main: Fr[400],
        light: Fr[300],
        dark: Fr[700]
    } : {
        main: Fr[800],
        light: Fr[500],
        dark: Fr[900]
    }
}
function aM(e="light") {
    return e === "dark" ? {
        main: Ji[400],
        light: Ji[300],
        dark: Ji[700]
    } : {
        main: "#ed6c02",
        light: Ji[500],
        dark: Ji[900]
    }
}
function Zp(e) {
    const {mode: t="light", contrastThreshold: n=3, tonalOffset: r=.2, ...i} = e
      , o = e.primary || nM(t)
      , s = e.secondary || rM(t)
      , a = e.error || iM(t)
      , l = e.info || oM(t)
      , u = e.success || sM(t)
      , c = e.warning || aM(t);
    function f(m) {
        return hA(m, cy.text.primary) >= n ? cy.text.primary : tM.text.primary
    }
    const d = ({color: m, name: w, mainShade: p=500, lightShade: h=300, darkShade: v=700}) => {
        if (m = {
            ...m
        },
        !m.main && m[p] && (m.main = m[p]),
        !m.hasOwnProperty("main"))
            throw new Error(Tr(11, w ? ` (${w})` : "", p));
        if (typeof m.main != "string")
            throw new Error(Tr(12, w ? ` (${w})` : "", JSON.stringify(m.main)));
        return fy(m, "light", h, r),
        fy(m, "dark", v, r),
        m.contrastText || (m.contrastText = f(m.main)),
        m
    }
    ;
    let y;
    return t === "light" ? y = Tw() : t === "dark" && (y = bw()),
    ut({
        common: {
            ...Zo
        },
        mode: t,
        primary: d({
            color: o,
            name: "primary"
        }),
        secondary: d({
            color: s,
            name: "secondary",
            mainShade: "A400",
            lightShade: "A200",
            darkShade: "A700"
        }),
        error: d({
            color: a,
            name: "error"
        }),
        warning: d({
            color: c,
            name: "warning"
        }),
        info: d({
            color: l,
            name: "info"
        }),
        success: d({
            color: u,
            name: "success"
        }),
        grey: eM,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: d,
        tonalOffset: r,
        ...y
    }, i)
}
function lM(e) {
    const t = {};
    return Object.entries(e).forEach(r => {
        const [i,o] = r;
        typeof o == "object" && (t[i] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`)
    }
    ),
    t
}
function uM(e, t) {
    return {
        toolbar: {
            minHeight: 56,
            [e.up("xs")]: {
                "@media (orientation: landscape)": {
                    minHeight: 48
                }
            },
            [e.up("sm")]: {
                minHeight: 64
            }
        },
        ...t
    }
}
function cM(e) {
    return Math.round(e * 1e5) / 1e5
}
const dy = {
    textTransform: "uppercase"
}
  , py = '"Roboto", "Helvetica", "Arial", sans-serif';
function fM(e, t) {
    const {fontFamily: n=py, fontSize: r=14, fontWeightLight: i=300, fontWeightRegular: o=400, fontWeightMedium: s=500, fontWeightBold: a=700, htmlFontSize: l=16, allVariants: u, pxToRem: c, ...f} = typeof t == "function" ? t(e) : t
      , d = r / 14
      , y = c || (w => `${w / l * d}rem`)
      , g = (w, p, h, v, C) => ({
        fontFamily: n,
        fontWeight: w,
        fontSize: y(p),
        lineHeight: h,
        ...n === py ? {
            letterSpacing: `${cM(v / p)}em`
        } : {},
        ...C,
        ...u
    })
      , m = {
        h1: g(i, 96, 1.167, -1.5),
        h2: g(i, 60, 1.2, -.5),
        h3: g(o, 48, 1.167, 0),
        h4: g(o, 34, 1.235, .25),
        h5: g(o, 24, 1.334, 0),
        h6: g(s, 20, 1.6, .15),
        subtitle1: g(o, 16, 1.75, .15),
        subtitle2: g(s, 14, 1.57, .1),
        body1: g(o, 16, 1.5, .15),
        body2: g(o, 14, 1.43, .15),
        button: g(s, 14, 1.75, .4, dy),
        caption: g(o, 12, 1.66, .4),
        overline: g(o, 12, 2.66, 1, dy),
        inherit: {
            fontFamily: "inherit",
            fontWeight: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            letterSpacing: "inherit"
        }
    };
    return ut({
        htmlFontSize: l,
        pxToRem: y,
        fontFamily: n,
        fontSize: r,
        fontWeightLight: i,
        fontWeightRegular: o,
        fontWeightMedium: s,
        fontWeightBold: a,
        ...m
    }, f, {
        clone: !1
    })
}
const dM = .2
  , pM = .14
  , hM = .12;
function le(...e) {
    return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${dM})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${pM})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${hM})`].join(",")
}
const mM = ["none", le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)]
  , gM = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}
  , yM = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
};
function hy(e) {
    return `${Math.round(e)}ms`
}
function vM(e) {
    if (!e)
        return 0;
    const t = e / 36;
    return Math.min(Math.round((4 + 15 * t ** .25 + t / 5) * 10), 3e3)
}
function xM(e) {
    const t = {
        ...gM,
        ...e.easing
    }
      , n = {
        ...yM,
        ...e.duration
    };
    return {
        getAutoHeightDuration: vM,
        create: (i=["all"], o={}) => {
            const {duration: s=n.standard, easing: a=t.easeInOut, delay: l=0, ...u} = o;
            return (Array.isArray(i) ? i : [i]).map(c => `${c} ${typeof s == "string" ? s : hy(s)} ${a} ${typeof l == "string" ? l : hy(l)}`).join(",")
        }
        ,
        ...e,
        easing: t,
        duration: n
    }
}
const wM = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
};
function SM(e) {
    return fn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e)
}
function Rw(e={}) {
    const t = {
        ...e
    };
    function n(r) {
        const i = Object.entries(r);
        for (let o = 0; o < i.length; o++) {
            const [s,a] = i[o];
            !SM(a) || s.startsWith("unstable_") ? delete r[s] : fn(a) && (r[s] = {
                ...a
            },
            n(r[s]))
        }
    }
    return n(t),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
}
function If(e={}, ...t) {
    const {breakpoints: n, mixins: r={}, spacing: i, palette: o={}, transitions: s={}, typography: a={}, shape: l, ...u} = e;
    if (e.vars)
        throw new Error(Tr(20));
    const c = Zp(o)
      , f = Jp(e);
    let d = ut(f, {
        mixins: uM(f.breakpoints, r),
        palette: c,
        shadows: mM.slice(),
        typography: fM(c, a),
        transitions: xM(s),
        zIndex: {
            ...wM
        }
    });
    return d = ut(d, u),
    d = t.reduce( (y, g) => ut(y, g), d),
    d.unstable_sxConfig = {
        ...Yl,
        ...u == null ? void 0 : u.unstable_sxConfig
    },
    d.unstable_sx = function(g) {
        return Pi({
            sx: g,
            theme: this
        })
    }
    ,
    d.toRuntimeSource = Rw,
    d
}
function _f(e) {
    let t;
    return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2,
    Math.round(t * 10) / 1e3
}
const CM = [...Array(25)].map( (e, t) => {
    if (t === 0)
        return "none";
    const n = _f(t);
    return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`
}
);
function Aw(e) {
    return {
        inputPlaceholder: e === "dark" ? .5 : .42,
        inputUnderline: e === "dark" ? .7 : .42,
        switchTrackDisabled: e === "dark" ? .2 : .12,
        switchTrack: e === "dark" ? .3 : .38
    }
}
function Ow(e) {
    return e === "dark" ? CM : []
}
function EM(e) {
    const {palette: t={
        mode: "light"
    }, opacity: n, overlays: r, ...i} = e
      , o = Zp(t);
    return {
        palette: o,
        opacity: {
            ...Aw(o.mode),
            ...n
        },
        overlays: r || Ow(o.mode),
        ...i
    }
}
function kM(e) {
    var t;
    return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/))
}
const PM = e => [...[...Array(25)].map( (t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`]
  , TM = e => (t, n) => {
    const r = e.rootSelector || ":root"
      , i = e.colorSchemeSelector;
    let o = i;
    if (i === "class" && (o = ".%s"),
    i === "data" && (o = "[data-%s]"),
    i != null && i.startsWith("data-") && !i.includes("%s") && (o = `[${i}="%s"]`),
    e.defaultColorScheme === t) {
        if (t === "dark") {
            const s = {};
            return PM(e.cssVarPrefix).forEach(a => {
                s[a] = n[a],
                delete n[a]
            }
            ),
            o === "media" ? {
                [r]: n,
                "@media (prefers-color-scheme: dark)": {
                    [r]: s
                }
            } : o ? {
                [o.replace("%s", t)]: s,
                [`${r}, ${o.replace("%s", t)}`]: n
            } : {
                [r]: {
                    ...n,
                    ...s
                }
            }
        }
        if (o && o !== "media")
            return `${r}, ${o.replace("%s", String(t))}`
    } else if (t) {
        if (o === "media")
            return {
                [`@media (prefers-color-scheme: ${String(t)})`]: {
                    [r]: n
                }
            };
        if (o)
            return o.replace("%s", String(t))
    }
    return r
}
;
function bM(e, t) {
    t.forEach(n => {
        e[n] || (e[n] = {})
    }
    )
}
function A(e, t, n) {
    !e[t] && n && (e[t] = n)
}
function lo(e) {
    return typeof e != "string" || !e.startsWith("hsl") ? e : Gx(e)
}
function an(e, t) {
    `${t}Channel`in e || (e[`${t}Channel`] = ao(lo(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))
}
function RM(e) {
    return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px"
}
const Wt = e => {
    try {
        return e()
    } catch {}
}
  , AM = (e="mui") => YO(e);
function lc(e, t, n, r) {
    if (!t)
        return;
    t = t === !0 ? {} : t;
    const i = r === "dark" ? "dark" : "light";
    if (!n) {
        e[r] = EM({
            ...t,
            palette: {
                mode: i,
                ...t == null ? void 0 : t.palette
            }
        });
        return
    }
    const {palette: o, ...s} = If({
        ...n,
        palette: {
            mode: i,
            ...t == null ? void 0 : t.palette
        }
    });
    return e[r] = {
        ...t,
        palette: o,
        opacity: {
            ...Aw(i),
            ...t == null ? void 0 : t.opacity
        },
        overlays: (t == null ? void 0 : t.overlays) || Ow(i)
    },
    s
}
function OM(e={}, ...t) {
    const {colorSchemes: n={
        light: !0
    }, defaultColorScheme: r, disableCssColorScheme: i=!1, cssVarPrefix: o="mui", shouldSkipGeneratingVar: s=kM, colorSchemeSelector: a=n.light && n.dark ? "media" : void 0, rootSelector: l=":root", ...u} = e
      , c = Object.keys(n)[0]
      , f = r || (n.light && c !== "light" ? "light" : c)
      , d = AM(o)
      , {[f]: y, light: g, dark: m, ...w} = n
      , p = {
        ...w
    };
    let h = y;
    if ((f === "dark" && !("dark"in n) || f === "light" && !("light"in n)) && (h = !0),
    !h)
        throw new Error(Tr(21, f));
    const v = lc(p, h, u, f);
    g && !p.light && lc(p, g, void 0, "light"),
    m && !p.dark && lc(p, m, void 0, "dark");
    let C = {
        defaultColorScheme: f,
        ...v,
        cssVarPrefix: o,
        colorSchemeSelector: a,
        rootSelector: l,
        getCssVar: d,
        colorSchemes: p,
        font: {
            ...lM(v.typography),
            ...v.font
        },
        spacing: RM(u.spacing)
    };
    Object.keys(C.colorSchemes).forEach(L => {
        const x = C.colorSchemes[L].palette
          , O = I => {
            const j = I.split("-")
              , U = j[1]
              , B = j[2];
            return d(I, x[U][B])
        }
        ;
        if (x.mode === "light" && (A(x.common, "background", "#fff"),
        A(x.common, "onBackground", "#000")),
        x.mode === "dark" && (A(x.common, "background", "#000"),
        A(x.common, "onBackground", "#fff")),
        bM(x, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]),
        x.mode === "light") {
            A(x.Alert, "errorColor", te(x.error.light, .6)),
            A(x.Alert, "infoColor", te(x.info.light, .6)),
            A(x.Alert, "successColor", te(x.success.light, .6)),
            A(x.Alert, "warningColor", te(x.warning.light, .6)),
            A(x.Alert, "errorFilledBg", O("palette-error-main")),
            A(x.Alert, "infoFilledBg", O("palette-info-main")),
            A(x.Alert, "successFilledBg", O("palette-success-main")),
            A(x.Alert, "warningFilledBg", O("palette-warning-main")),
            A(x.Alert, "errorFilledColor", Wt( () => x.getContrastText(x.error.main))),
            A(x.Alert, "infoFilledColor", Wt( () => x.getContrastText(x.info.main))),
            A(x.Alert, "successFilledColor", Wt( () => x.getContrastText(x.success.main))),
            A(x.Alert, "warningFilledColor", Wt( () => x.getContrastText(x.warning.main))),
            A(x.Alert, "errorStandardBg", ne(x.error.light, .9)),
            A(x.Alert, "infoStandardBg", ne(x.info.light, .9)),
            A(x.Alert, "successStandardBg", ne(x.success.light, .9)),
            A(x.Alert, "warningStandardBg", ne(x.warning.light, .9)),
            A(x.Alert, "errorIconColor", O("palette-error-main")),
            A(x.Alert, "infoIconColor", O("palette-info-main")),
            A(x.Alert, "successIconColor", O("palette-success-main")),
            A(x.Alert, "warningIconColor", O("palette-warning-main")),
            A(x.AppBar, "defaultBg", O("palette-grey-100")),
            A(x.Avatar, "defaultBg", O("palette-grey-400")),
            A(x.Button, "inheritContainedBg", O("palette-grey-300")),
            A(x.Button, "inheritContainedHoverBg", O("palette-grey-A100")),
            A(x.Chip, "defaultBorder", O("palette-grey-400")),
            A(x.Chip, "defaultAvatarColor", O("palette-grey-700")),
            A(x.Chip, "defaultIconColor", O("palette-grey-700")),
            A(x.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
            A(x.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
            A(x.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
            A(x.LinearProgress, "primaryBg", ne(x.primary.main, .62)),
            A(x.LinearProgress, "secondaryBg", ne(x.secondary.main, .62)),
            A(x.LinearProgress, "errorBg", ne(x.error.main, .62)),
            A(x.LinearProgress, "infoBg", ne(x.info.main, .62)),
            A(x.LinearProgress, "successBg", ne(x.success.main, .62)),
            A(x.LinearProgress, "warningBg", ne(x.warning.main, .62)),
            A(x.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.11)`),
            A(x.Slider, "primaryTrack", ne(x.primary.main, .62)),
            A(x.Slider, "secondaryTrack", ne(x.secondary.main, .62)),
            A(x.Slider, "errorTrack", ne(x.error.main, .62)),
            A(x.Slider, "infoTrack", ne(x.info.main, .62)),
            A(x.Slider, "successTrack", ne(x.success.main, .62)),
            A(x.Slider, "warningTrack", ne(x.warning.main, .62));
            const I = Hs(x.background.default, .8);
            A(x.SnackbarContent, "bg", I),
            A(x.SnackbarContent, "color", Wt( () => x.getContrastText(I))),
            A(x.SpeedDialAction, "fabHoverBg", Hs(x.background.paper, .15)),
            A(x.StepConnector, "border", O("palette-grey-400")),
            A(x.StepContent, "border", O("palette-grey-400")),
            A(x.Switch, "defaultColor", O("palette-common-white")),
            A(x.Switch, "defaultDisabledColor", O("palette-grey-100")),
            A(x.Switch, "primaryDisabledColor", ne(x.primary.main, .62)),
            A(x.Switch, "secondaryDisabledColor", ne(x.secondary.main, .62)),
            A(x.Switch, "errorDisabledColor", ne(x.error.main, .62)),
            A(x.Switch, "infoDisabledColor", ne(x.info.main, .62)),
            A(x.Switch, "successDisabledColor", ne(x.success.main, .62)),
            A(x.Switch, "warningDisabledColor", ne(x.warning.main, .62)),
            A(x.TableCell, "border", ne(Ws(x.divider, 1), .88)),
            A(x.Tooltip, "bg", Ws(x.grey[700], .92))
        }
        if (x.mode === "dark") {
            A(x.Alert, "errorColor", ne(x.error.light, .6)),
            A(x.Alert, "infoColor", ne(x.info.light, .6)),
            A(x.Alert, "successColor", ne(x.success.light, .6)),
            A(x.Alert, "warningColor", ne(x.warning.light, .6)),
            A(x.Alert, "errorFilledBg", O("palette-error-dark")),
            A(x.Alert, "infoFilledBg", O("palette-info-dark")),
            A(x.Alert, "successFilledBg", O("palette-success-dark")),
            A(x.Alert, "warningFilledBg", O("palette-warning-dark")),
            A(x.Alert, "errorFilledColor", Wt( () => x.getContrastText(x.error.dark))),
            A(x.Alert, "infoFilledColor", Wt( () => x.getContrastText(x.info.dark))),
            A(x.Alert, "successFilledColor", Wt( () => x.getContrastText(x.success.dark))),
            A(x.Alert, "warningFilledColor", Wt( () => x.getContrastText(x.warning.dark))),
            A(x.Alert, "errorStandardBg", te(x.error.light, .9)),
            A(x.Alert, "infoStandardBg", te(x.info.light, .9)),
            A(x.Alert, "successStandardBg", te(x.success.light, .9)),
            A(x.Alert, "warningStandardBg", te(x.warning.light, .9)),
            A(x.Alert, "errorIconColor", O("palette-error-main")),
            A(x.Alert, "infoIconColor", O("palette-info-main")),
            A(x.Alert, "successIconColor", O("palette-success-main")),
            A(x.Alert, "warningIconColor", O("palette-warning-main")),
            A(x.AppBar, "defaultBg", O("palette-grey-900")),
            A(x.AppBar, "darkBg", O("palette-background-paper")),
            A(x.AppBar, "darkColor", O("palette-text-primary")),
            A(x.Avatar, "defaultBg", O("palette-grey-600")),
            A(x.Button, "inheritContainedBg", O("palette-grey-800")),
            A(x.Button, "inheritContainedHoverBg", O("palette-grey-700")),
            A(x.Chip, "defaultBorder", O("palette-grey-700")),
            A(x.Chip, "defaultAvatarColor", O("palette-grey-300")),
            A(x.Chip, "defaultIconColor", O("palette-grey-300")),
            A(x.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
            A(x.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
            A(x.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
            A(x.LinearProgress, "primaryBg", te(x.primary.main, .5)),
            A(x.LinearProgress, "secondaryBg", te(x.secondary.main, .5)),
            A(x.LinearProgress, "errorBg", te(x.error.main, .5)),
            A(x.LinearProgress, "infoBg", te(x.info.main, .5)),
            A(x.LinearProgress, "successBg", te(x.success.main, .5)),
            A(x.LinearProgress, "warningBg", te(x.warning.main, .5)),
            A(x.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.13)`),
            A(x.Slider, "primaryTrack", te(x.primary.main, .5)),
            A(x.Slider, "secondaryTrack", te(x.secondary.main, .5)),
            A(x.Slider, "errorTrack", te(x.error.main, .5)),
            A(x.Slider, "infoTrack", te(x.info.main, .5)),
            A(x.Slider, "successTrack", te(x.success.main, .5)),
            A(x.Slider, "warningTrack", te(x.warning.main, .5));
            const I = Hs(x.background.default, .98);
            A(x.SnackbarContent, "bg", I),
            A(x.SnackbarContent, "color", Wt( () => x.getContrastText(I))),
            A(x.SpeedDialAction, "fabHoverBg", Hs(x.background.paper, .15)),
            A(x.StepConnector, "border", O("palette-grey-600")),
            A(x.StepContent, "border", O("palette-grey-600")),
            A(x.Switch, "defaultColor", O("palette-grey-300")),
            A(x.Switch, "defaultDisabledColor", O("palette-grey-600")),
            A(x.Switch, "primaryDisabledColor", te(x.primary.main, .55)),
            A(x.Switch, "secondaryDisabledColor", te(x.secondary.main, .55)),
            A(x.Switch, "errorDisabledColor", te(x.error.main, .55)),
            A(x.Switch, "infoDisabledColor", te(x.info.main, .55)),
            A(x.Switch, "successDisabledColor", te(x.success.main, .55)),
            A(x.Switch, "warningDisabledColor", te(x.warning.main, .55)),
            A(x.TableCell, "border", te(Ws(x.divider, 1), .68)),
            A(x.Tooltip, "bg", Ws(x.grey[700], .92))
        }
        an(x.background, "default"),
        an(x.background, "paper"),
        an(x.common, "background"),
        an(x.common, "onBackground"),
        an(x, "divider"),
        Object.keys(x).forEach(I => {
            const j = x[I];
            I !== "tonalOffset" && j && typeof j == "object" && (j.main && A(x[I], "mainChannel", ao(lo(j.main))),
            j.light && A(x[I], "lightChannel", ao(lo(j.light))),
            j.dark && A(x[I], "darkChannel", ao(lo(j.dark))),
            j.contrastText && A(x[I], "contrastTextChannel", ao(lo(j.contrastText))),
            I === "text" && (an(x[I], "primary"),
            an(x[I], "secondary")),
            I === "action" && (j.active && an(x[I], "active"),
            j.selected && an(x[I], "selected")))
        }
        )
    }
    ),
    C = t.reduce( (L, x) => ut(L, x), C);
    const E = {
        prefix: o,
        disableCssColorScheme: i,
        shouldSkipGeneratingVar: s,
        getSelector: TM(C)
    }
      , {vars: P, generateThemeVars: T, generateStyleSheets: b} = JO(C, E);
    return C.vars = P,
    Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach( ([L,x]) => {
        C[L] = x
    }
    ),
    C.generateThemeVars = T,
    C.generateStyleSheets = b,
    C.generateSpacing = function() {
        return Ew(u.spacing, Vp(this))
    }
    ,
    C.getColorSchemeSelector = ZO(a),
    C.spacing = C.generateSpacing(),
    C.shouldSkipGeneratingVar = s,
    C.unstable_sxConfig = {
        ...Yl,
        ...u == null ? void 0 : u.unstable_sxConfig
    },
    C.unstable_sx = function(x) {
        return Pi({
            sx: x,
            theme: this
        })
    }
    ,
    C.toRuntimeSource = Rw,
    C
}
function my(e, t, n) {
    e.colorSchemes && n && (e.colorSchemes[t] = {
        ...n !== !0 && n,
        palette: Zp({
            ...n === !0 ? {} : n.palette,
            mode: t
        })
    })
}
function MM(e={}, ...t) {
    const {palette: n, cssVariables: r=!1, colorSchemes: i=n ? void 0 : {
        light: !0
    }, defaultColorScheme: o=n == null ? void 0 : n.mode, ...s} = e
      , a = o || "light"
      , l = i == null ? void 0 : i[a]
      , u = {
        ...i,
        ...n ? {
            [a]: {
                ...typeof l != "boolean" && l,
                palette: n
            }
        } : void 0
    };
    if (r === !1) {
        if (!("colorSchemes"in e))
            return If(e, ...t);
        let c = n;
        "palette"in e || u[a] && (u[a] !== !0 ? c = u[a].palette : a === "dark" && (c = {
            mode: "dark"
        }));
        const f = If({
            ...e,
            palette: c
        }, ...t);
        return f.defaultColorScheme = a,
        f.colorSchemes = u,
        f.palette.mode === "light" && (f.colorSchemes.light = {
            ...u.light !== !0 && u.light,
            palette: f.palette
        },
        my(f, "dark", u.dark)),
        f.palette.mode === "dark" && (f.colorSchemes.dark = {
            ...u.dark !== !0 && u.dark,
            palette: f.palette
        },
        my(f, "light", u.light)),
        f
    }
    return !n && !("light"in u) && a === "light" && (u.light = !0),
    OM({
        ...s,
        colorSchemes: u,
        defaultColorScheme: a,
        ...typeof r != "boolean" && r
    }, ...t)
}
const Mw = MM()
  , Nw = "$$material";
function eh() {
    const e = _O(Mw);
    return e[Nw] || e
}
function NM(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as"
}
const Lw = e => NM(e) && e !== "classes"
  , ce = BO({
    themeId: Nw,
    defaultTheme: Mw,
    rootShouldForwardProp: Lw
})
  , $t = XO;
function Vt(e) {
    return GO(e)
}
function LM(e) {
    return Ft("MuiSvgIcon", e)
}
Bt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const DM = e => {
    const {color: t, fontSize: n, classes: r} = e
      , i = {
        root: ["root", t !== "inherit" && `color${K(t)}`, `fontSize${K(n)}`]
    };
    return rn(i, LM, r)
}
  , IM = ce("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, n.color !== "inherit" && t[`color${K(n.color)}`], t[`fontSize${K(n.fontSize)}`]]
    }
})($t( ({theme: e}) => {
    var t, n, r, i, o, s, a, l, u, c, f, d, y, g;
    return {
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        flexShrink: 0,
        transition: (i = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : i.call(t, "fill", {
            duration: (r = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : r.shorter
        }),
        variants: [{
            props: m => !m.hasSvgAsChild,
            style: {
                fill: "currentColor"
            }
        }, {
            props: {
                fontSize: "inherit"
            },
            style: {
                fontSize: "inherit"
            }
        }, {
            props: {
                fontSize: "small"
            },
            style: {
                fontSize: ((s = (o = e.typography) == null ? void 0 : o.pxToRem) == null ? void 0 : s.call(o, 20)) || "1.25rem"
            }
        }, {
            props: {
                fontSize: "medium"
            },
            style: {
                fontSize: ((l = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : l.call(a, 24)) || "1.5rem"
            }
        }, {
            props: {
                fontSize: "large"
            },
            style: {
                fontSize: ((c = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : c.call(u, 35)) || "2.1875rem"
            }
        }, ...Object.entries((e.vars ?? e).palette).filter( ([,m]) => m && m.main).map( ([m]) => {
            var w, p;
            return {
                props: {
                    color: m
                },
                style: {
                    color: (p = (w = (e.vars ?? e).palette) == null ? void 0 : w[m]) == null ? void 0 : p.main
                }
            }
        }
        ), {
            props: {
                color: "action"
            },
            style: {
                color: (d = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : d.active
            }
        }, {
            props: {
                color: "disabled"
            },
            style: {
                color: (g = (y = (e.vars ?? e).palette) == null ? void 0 : y.action) == null ? void 0 : g.disabled
            }
        }, {
            props: {
                color: "inherit"
            },
            style: {
                color: void 0
            }
        }]
    }
}
))
  , jf = S.forwardRef(function(t, n) {
    const r = Vt({
        props: t,
        name: "MuiSvgIcon"
    })
      , {children: i, className: o, color: s="inherit", component: a="svg", fontSize: l="medium", htmlColor: u, inheritViewBox: c=!1, titleAccess: f, viewBox: d="0 0 24 24", ...y} = r
      , g = S.isValidElement(i) && i.type === "svg"
      , m = {
        ...r,
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: d,
        hasSvgAsChild: g
    }
      , w = {};
    c || (w.viewBox = d);
    const p = DM(m);
    return k.jsxs(IM, {
        as: a,
        className: Se(p.root, o),
        focusable: "false",
        color: u,
        "aria-hidden": f ? void 0 : !0,
        role: f ? "img" : void 0,
        ref: n,
        ...w,
        ...y,
        ...g && i.props,
        ownerState: m,
        children: [g ? i.props.children : i, f ? k.jsx("title", {
            children: f
        }) : null]
    })
});
jf.muiName = "SvgIcon";
function ys(e, t) {
    function n(r, i) {
        return k.jsx(jf, {
            "data-testid": `${t}Icon`,
            ref: i,
            ...r,
            children: e
        })
    }
    return n.muiName = jf.muiName,
    S.memo(S.forwardRef(n))
}
class tl {
    constructor() {
        Bi(this, "mountEffect", () => {
            this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0,
            this.mounted.resolve())
        }
        );
        this.ref = {
            current: null
        },
        this.mounted = null,
        this.didMount = !1,
        this.shouldMount = !1,
        this.setShouldMount = null
    }
    static create() {
        return new tl
    }
    static use() {
        const t = Zx(tl.create).current
          , [n,r] = S.useState(!1);
        return t.shouldMount = n,
        t.setShouldMount = r,
        S.useEffect(t.mountEffect, [n]),
        t
    }
    mount() {
        return this.mounted || (this.mounted = jM(),
        this.shouldMount = !0,
        this.setShouldMount(this.shouldMount)),
        this.mounted
    }
    start(...t) {
        this.mount().then( () => {
            var n;
            return (n = this.ref.current) == null ? void 0 : n.start(...t)
        }
        )
    }
    stop(...t) {
        this.mount().then( () => {
            var n;
            return (n = this.ref.current) == null ? void 0 : n.stop(...t)
        }
        )
    }
    pulsate(...t) {
        this.mount().then( () => {
            var n;
            return (n = this.ref.current) == null ? void 0 : n.pulsate(...t)
        }
        )
    }
}
function _M() {
    return tl.use()
}
function jM() {
    let e, t;
    const n = new Promise( (r, i) => {
        e = r,
        t = i
    }
    );
    return n.resolve = e,
    n.reject = t,
    n
}
function Dw(e, t) {
    if (e == null)
        return {};
    var n = {};
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) !== -1)
                continue;
            n[r] = e[r]
        }
    return n
}
function $f(e, t) {
    return $f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
        return n.__proto__ = r,
        n
    }
    ,
    $f(e, t)
}
function Iw(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    $f(e, t)
}
const gy = {
    disabled: !1
}
  , nl = Re.createContext(null);
var $M = function(t) {
    return t.scrollTop
}
  , uo = "unmounted"
  , ar = "exited"
  , lr = "entering"
  , zr = "entered"
  , Ff = "exiting"
  , Tn = function(e) {
    Iw(t, e);
    function t(r, i) {
        var o;
        o = e.call(this, r, i) || this;
        var s = i, a = s && !s.isMounting ? r.enter : r.appear, l;
        return o.appearStatus = null,
        r.in ? a ? (l = ar,
        o.appearStatus = lr) : l = zr : r.unmountOnExit || r.mountOnEnter ? l = uo : l = ar,
        o.state = {
            status: l
        },
        o.nextCallback = null,
        o
    }
    t.getDerivedStateFromProps = function(i, o) {
        var s = i.in;
        return s && o.status === uo ? {
            status: ar
        } : null
    }
    ;
    var n = t.prototype;
    return n.componentDidMount = function() {
        this.updateStatus(!0, this.appearStatus)
    }
    ,
    n.componentDidUpdate = function(i) {
        var o = null;
        if (i !== this.props) {
            var s = this.state.status;
            this.props.in ? s !== lr && s !== zr && (o = lr) : (s === lr || s === zr) && (o = Ff)
        }
        this.updateStatus(!1, o)
    }
    ,
    n.componentWillUnmount = function() {
        this.cancelNextCallback()
    }
    ,
    n.getTimeouts = function() {
        var i = this.props.timeout, o, s, a;
        return o = s = a = i,
        i != null && typeof i != "number" && (o = i.exit,
        s = i.enter,
        a = i.appear !== void 0 ? i.appear : s),
        {
            exit: o,
            enter: s,
            appear: a
        }
    }
    ,
    n.updateStatus = function(i, o) {
        if (i === void 0 && (i = !1),
        o !== null)
            if (this.cancelNextCallback(),
            o === lr) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var s = this.props.nodeRef ? this.props.nodeRef.current : $s.findDOMNode(this);
                    s && $M(s)
                }
                this.performEnter(i)
            } else
                this.performExit();
        else
            this.props.unmountOnExit && this.state.status === ar && this.setState({
                status: uo
            })
    }
    ,
    n.performEnter = function(i) {
        var o = this
          , s = this.props.enter
          , a = this.context ? this.context.isMounting : i
          , l = this.props.nodeRef ? [a] : [$s.findDOMNode(this), a]
          , u = l[0]
          , c = l[1]
          , f = this.getTimeouts()
          , d = a ? f.appear : f.enter;
        if (!i && !s || gy.disabled) {
            this.safeSetState({
                status: zr
            }, function() {
                o.props.onEntered(u)
            });
            return
        }
        this.props.onEnter(u, c),
        this.safeSetState({
            status: lr
        }, function() {
            o.props.onEntering(u, c),
            o.onTransitionEnd(d, function() {
                o.safeSetState({
                    status: zr
                }, function() {
                    o.props.onEntered(u, c)
                })
            })
        })
    }
    ,
    n.performExit = function() {
        var i = this
          , o = this.props.exit
          , s = this.getTimeouts()
          , a = this.props.nodeRef ? void 0 : $s.findDOMNode(this);
        if (!o || gy.disabled) {
            this.safeSetState({
                status: ar
            }, function() {
                i.props.onExited(a)
            });
            return
        }
        this.props.onExit(a),
        this.safeSetState({
            status: Ff
        }, function() {
            i.props.onExiting(a),
            i.onTransitionEnd(s.exit, function() {
                i.safeSetState({
                    status: ar
                }, function() {
                    i.props.onExited(a)
                })
            })
        })
    }
    ,
    n.cancelNextCallback = function() {
        this.nextCallback !== null && (this.nextCallback.cancel(),
        this.nextCallback = null)
    }
    ,
    n.safeSetState = function(i, o) {
        o = this.setNextCallback(o),
        this.setState(i, o)
    }
    ,
    n.setNextCallback = function(i) {
        var o = this
          , s = !0;
        return this.nextCallback = function(a) {
            s && (s = !1,
            o.nextCallback = null,
            i(a))
        }
        ,
        this.nextCallback.cancel = function() {
            s = !1
        }
        ,
        this.nextCallback
    }
    ,
    n.onTransitionEnd = function(i, o) {
        this.setNextCallback(o);
        var s = this.props.nodeRef ? this.props.nodeRef.current : $s.findDOMNode(this)
          , a = i == null && !this.props.addEndListener;
        if (!s || a) {
            setTimeout(this.nextCallback, 0);
            return
        }
        if (this.props.addEndListener) {
            var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback]
              , u = l[0]
              , c = l[1];
            this.props.addEndListener(u, c)
        }
        i != null && setTimeout(this.nextCallback, i)
    }
    ,
    n.render = function() {
        var i = this.state.status;
        if (i === uo)
            return null;
        var o = this.props
          , s = o.children;
        o.in,
        o.mountOnEnter,
        o.unmountOnExit,
        o.appear,
        o.enter,
        o.exit,
        o.timeout,
        o.addEndListener,
        o.onEnter,
        o.onEntering,
        o.onEntered,
        o.onExit,
        o.onExiting,
        o.onExited,
        o.nodeRef;
        var a = Dw(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return Re.createElement(nl.Provider, {
            value: null
        }, typeof s == "function" ? s(i, a) : Re.cloneElement(Re.Children.only(s), a))
    }
    ,
    t
}(Re.Component);
Tn.contextType = nl;
Tn.propTypes = {};
function Br() {}
Tn.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: Br,
    onEntering: Br,
    onEntered: Br,
    onExit: Br,
    onExiting: Br,
    onExited: Br
};
Tn.UNMOUNTED = uo;
Tn.EXITED = ar;
Tn.ENTERING = lr;
Tn.ENTERED = zr;
Tn.EXITING = Ff;
function FM(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function th(e, t) {
    var n = function(o) {
        return t && S.isValidElement(o) ? t(o) : o
    }
      , r = Object.create(null);
    return e && S.Children.map(e, function(i) {
        return i
    }).forEach(function(i) {
        r[i.key] = n(i)
    }),
    r
}
function BM(e, t) {
    e = e || {},
    t = t || {};
    function n(c) {
        return c in t ? t[c] : e[c]
    }
    var r = Object.create(null)
      , i = [];
    for (var o in e)
        o in t ? i.length && (r[o] = i,
        i = []) : i.push(o);
    var s, a = {};
    for (var l in t) {
        if (r[l])
            for (s = 0; s < r[l].length; s++) {
                var u = r[l][s];
                a[r[l][s]] = n(u)
            }
        a[l] = n(l)
    }
    for (s = 0; s < i.length; s++)
        a[i[s]] = n(i[s]);
    return a
}
function pr(e, t, n) {
    return n[t] != null ? n[t] : e.props[t]
}
function VM(e, t) {
    return th(e.children, function(n) {
        return S.cloneElement(n, {
            onExited: t.bind(null, n),
            in: !0,
            appear: pr(n, "appear", e),
            enter: pr(n, "enter", e),
            exit: pr(n, "exit", e)
        })
    })
}
function zM(e, t, n) {
    var r = th(e.children)
      , i = BM(t, r);
    return Object.keys(i).forEach(function(o) {
        var s = i[o];
        if (S.isValidElement(s)) {
            var a = o in t
              , l = o in r
              , u = t[o]
              , c = S.isValidElement(u) && !u.props.in;
            l && (!a || c) ? i[o] = S.cloneElement(s, {
                onExited: n.bind(null, s),
                in: !0,
                exit: pr(s, "exit", e),
                enter: pr(s, "enter", e)
            }) : !l && a && !c ? i[o] = S.cloneElement(s, {
                in: !1
            }) : l && a && S.isValidElement(u) && (i[o] = S.cloneElement(s, {
                onExited: n.bind(null, s),
                in: u.props.in,
                exit: pr(s, "exit", e),
                enter: pr(s, "enter", e)
            }))
        }
    }),
    i
}
var UM = Object.values || function(e) {
    return Object.keys(e).map(function(t) {
        return e[t]
    })
}
  , WM = {
    component: "div",
    childFactory: function(t) {
        return t
    }
}
  , nh = function(e) {
    Iw(t, e);
    function t(r, i) {
        var o;
        o = e.call(this, r, i) || this;
        var s = o.handleExited.bind(FM(o));
        return o.state = {
            contextValue: {
                isMounting: !0
            },
            handleExited: s,
            firstRender: !0
        },
        o
    }
    var n = t.prototype;
    return n.componentDidMount = function() {
        this.mounted = !0,
        this.setState({
            contextValue: {
                isMounting: !1
            }
        })
    }
    ,
    n.componentWillUnmount = function() {
        this.mounted = !1
    }
    ,
    t.getDerivedStateFromProps = function(i, o) {
        var s = o.children
          , a = o.handleExited
          , l = o.firstRender;
        return {
            children: l ? VM(i, a) : zM(i, s, a),
            firstRender: !1
        }
    }
    ,
    n.handleExited = function(i, o) {
        var s = th(this.props.children);
        i.key in s || (i.props.onExited && i.props.onExited(o),
        this.mounted && this.setState(function(a) {
            var l = Za({}, a.children);
            return delete l[i.key],
            {
                children: l
            }
        }))
    }
    ,
    n.render = function() {
        var i = this.props
          , o = i.component
          , s = i.childFactory
          , a = Dw(i, ["component", "childFactory"])
          , l = this.state.contextValue
          , u = UM(this.state.children).map(s);
        return delete a.appear,
        delete a.enter,
        delete a.exit,
        o === null ? Re.createElement(nl.Provider, {
            value: l
        }, u) : Re.createElement(nl.Provider, {
            value: l
        }, Re.createElement(o, a, u))
    }
    ,
    t
}(Re.Component);
nh.propTypes = {};
nh.defaultProps = WM;
function HM(e) {
    const {className: t, classes: n, pulsate: r=!1, rippleX: i, rippleY: o, rippleSize: s, in: a, onExited: l, timeout: u} = e
      , [c,f] = S.useState(!1)
      , d = Se(t, n.ripple, n.rippleVisible, r && n.ripplePulsate)
      , y = {
        width: s,
        height: s,
        top: -(s / 2) + o,
        left: -(s / 2) + i
    }
      , g = Se(n.child, c && n.childLeaving, r && n.childPulsate);
    return !a && !c && f(!0),
    S.useEffect( () => {
        if (!a && l != null) {
            const m = setTimeout(l, u);
            return () => {
                clearTimeout(m)
            }
        }
    }
    , [l, a, u]),
    k.jsx("span", {
        className: d,
        style: y,
        children: k.jsx("span", {
            className: g
        })
    })
}
const xt = Bt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"])
  , Bf = 550
  , KM = 80
  , GM = Nr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`
  , XM = Nr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`
  , YM = Nr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`
  , qM = ce("span", {
    name: "MuiTouchRipple",
    slot: "Root"
})({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit"
})
  , QM = ce(HM, {
    name: "MuiTouchRipple",
    slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${xt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${GM};
    animation-duration: ${Bf}ms;
    animation-timing-function: ${ ({theme: e}) => e.transitions.easing.easeInOut};
  }

  &.${xt.ripplePulsate} {
    animation-duration: ${ ({theme: e}) => e.transitions.duration.shorter}ms;
  }

  & .${xt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${xt.childLeaving} {
    opacity: 0;
    animation-name: ${XM};
    animation-duration: ${Bf}ms;
    animation-timing-function: ${ ({theme: e}) => e.transitions.easing.easeInOut};
  }

  & .${xt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${YM};
    animation-duration: 2500ms;
    animation-timing-function: ${ ({theme: e}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`
  , JM = S.forwardRef(function(t, n) {
    const r = Vt({
        props: t,
        name: "MuiTouchRipple"
    })
      , {center: i=!1, classes: o={}, className: s, ...a} = r
      , [l,u] = S.useState([])
      , c = S.useRef(0)
      , f = S.useRef(null);
    S.useEffect( () => {
        f.current && (f.current(),
        f.current = null)
    }
    , [l]);
    const d = S.useRef(!1)
      , y = $p()
      , g = S.useRef(null)
      , m = S.useRef(null)
      , w = S.useCallback(C => {
        const {pulsate: E, rippleX: P, rippleY: T, rippleSize: b, cb: L} = C;
        u(x => [...x, k.jsx(QM, {
            classes: {
                ripple: Se(o.ripple, xt.ripple),
                rippleVisible: Se(o.rippleVisible, xt.rippleVisible),
                ripplePulsate: Se(o.ripplePulsate, xt.ripplePulsate),
                child: Se(o.child, xt.child),
                childLeaving: Se(o.childLeaving, xt.childLeaving),
                childPulsate: Se(o.childPulsate, xt.childPulsate)
            },
            timeout: Bf,
            pulsate: E,
            rippleX: P,
            rippleY: T,
            rippleSize: b
        }, c.current)]),
        c.current += 1,
        f.current = L
    }
    , [o])
      , p = S.useCallback( (C={}, E={}, P= () => {}
    ) => {
        const {pulsate: T=!1, center: b=i || E.pulsate, fakeElement: L=!1} = E;
        if ((C == null ? void 0 : C.type) === "mousedown" && d.current) {
            d.current = !1;
            return
        }
        (C == null ? void 0 : C.type) === "touchstart" && (d.current = !0);
        const x = L ? null : m.current
          , O = x ? x.getBoundingClientRect() : {
            width: 0,
            height: 0,
            left: 0,
            top: 0
        };
        let I, j, U;
        if (b || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
            I = Math.round(O.width / 2),
            j = Math.round(O.height / 2);
        else {
            const {clientX: B, clientY: X} = C.touches && C.touches.length > 0 ? C.touches[0] : C;
            I = Math.round(B - O.left),
            j = Math.round(X - O.top)
        }
        if (b)
            U = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3),
            U % 2 === 0 && (U += 1);
        else {
            const B = Math.max(Math.abs((x ? x.clientWidth : 0) - I), I) * 2 + 2
              , X = Math.max(Math.abs((x ? x.clientHeight : 0) - j), j) * 2 + 2;
            U = Math.sqrt(B ** 2 + X ** 2)
        }
        C != null && C.touches ? g.current === null && (g.current = () => {
            w({
                pulsate: T,
                rippleX: I,
                rippleY: j,
                rippleSize: U,
                cb: P
            })
        }
        ,
        y.start(KM, () => {
            g.current && (g.current(),
            g.current = null)
        }
        )) : w({
            pulsate: T,
            rippleX: I,
            rippleY: j,
            rippleSize: U,
            cb: P
        })
    }
    , [i, w, y])
      , h = S.useCallback( () => {
        p({}, {
            pulsate: !0
        })
    }
    , [p])
      , v = S.useCallback( (C, E) => {
        if (y.clear(),
        (C == null ? void 0 : C.type) === "touchend" && g.current) {
            g.current(),
            g.current = null,
            y.start(0, () => {
                v(C, E)
            }
            );
            return
        }
        g.current = null,
        u(P => P.length > 0 ? P.slice(1) : P),
        f.current = E
    }
    , [y]);
    return S.useImperativeHandle(n, () => ({
        pulsate: h,
        start: p,
        stop: v
    }), [h, p, v]),
    k.jsx(qM, {
        className: Se(xt.root, o.root, s),
        ref: m,
        ...a,
        children: k.jsx(nh, {
            component: null,
            exit: !0,
            children: l
        })
    })
});
function ZM(e) {
    return Ft("MuiButtonBase", e)
}
const e4 = Bt("MuiButtonBase", ["root", "disabled", "focusVisible"])
  , t4 = e => {
    const {disabled: t, focusVisible: n, focusVisibleClassName: r, classes: i} = e
      , s = rn({
        root: ["root", t && "disabled", n && "focusVisible"]
    }, ZM, i);
    return n && r && (s.root += ` ${r}`),
    s
}
  , n4 = ce("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root
})({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": {
        borderStyle: "none"
    },
    [`&.${e4.disabled}`]: {
        pointerEvents: "none",
        cursor: "default"
    },
    "@media print": {
        colorAdjust: "exact"
    }
})
  , _w = S.forwardRef(function(t, n) {
    const r = Vt({
        props: t,
        name: "MuiButtonBase"
    })
      , {action: i, centerRipple: o=!1, children: s, className: a, component: l="button", disabled: u=!1, disableRipple: c=!1, disableTouchRipple: f=!1, focusRipple: d=!1, focusVisibleClassName: y, LinkComponent: g="a", onBlur: m, onClick: w, onContextMenu: p, onDragLeave: h, onFocus: v, onFocusVisible: C, onKeyDown: E, onKeyUp: P, onMouseDown: T, onMouseLeave: b, onMouseUp: L, onTouchEnd: x, onTouchMove: O, onTouchStart: I, tabIndex: j=0, TouchRippleProps: U, touchRippleRef: B, type: X, ...V} = r
      , M = S.useRef(null)
      , D = _M()
      , $ = ki(D.ref, B)
      , [Y,ee] = S.useState(!1);
    u && Y && ee(!1),
    S.useImperativeHandle(i, () => ({
        focusVisible: () => {
            ee(!0),
            M.current.focus()
        }
    }), []);
    const bn = D.shouldMount && !c && !u;
    S.useEffect( () => {
        Y && d && !c && D.pulsate()
    }
    , [c, d, Y, D]);
    const on = ln(D, "start", T, f)
      , $i = ln(D, "stop", p, f)
      , sn = ln(D, "stop", h, f)
      , Lr = ln(D, "stop", L, f)
      , hS = ln(D, "stop", W => {
        Y && W.preventDefault(),
        b && b(W)
    }
    , f)
      , mS = ln(D, "start", I, f)
      , gS = ln(D, "stop", x, f)
      , yS = ln(D, "stop", O, f)
      , vS = ln(D, "stop", W => {
        Kg(W.target) || ee(!1),
        m && m(W)
    }
    , !1)
      , xS = vr(W => {
        M.current || (M.current = W.currentTarget),
        Kg(W.target) && (ee(!0),
        C && C(W)),
        v && v(W)
    }
    )
      , gu = () => {
        const W = M.current;
        return l && l !== "button" && !(W.tagName === "A" && W.href)
    }
      , wS = vr(W => {
        d && !W.repeat && Y && W.key === " " && D.stop(W, () => {
            D.start(W)
        }
        ),
        W.target === W.currentTarget && gu() && W.key === " " && W.preventDefault(),
        E && E(W),
        W.target === W.currentTarget && gu() && W.key === "Enter" && !u && (W.preventDefault(),
        w && w(W))
    }
    )
      , SS = vr(W => {
        d && W.key === " " && Y && !W.defaultPrevented && D.stop(W, () => {
            D.pulsate(W)
        }
        ),
        P && P(W),
        w && W.target === W.currentTarget && gu() && W.key === " " && !W.defaultPrevented && w(W)
    }
    );
    let ws = l;
    ws === "button" && (V.href || V.to) && (ws = g);
    const Fi = {};
    ws === "button" ? (Fi.type = X === void 0 ? "button" : X,
    Fi.disabled = u) : (!V.href && !V.to && (Fi.role = "button"),
    u && (Fi["aria-disabled"] = u));
    const CS = ki(n, M)
      , uh = {
        ...r,
        centerRipple: o,
        component: l,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: f,
        focusRipple: d,
        tabIndex: j,
        focusVisible: Y
    }
      , ES = t4(uh);
    return k.jsxs(n4, {
        as: ws,
        className: Se(ES.root, a),
        ownerState: uh,
        onBlur: vS,
        onClick: w,
        onContextMenu: $i,
        onFocus: xS,
        onKeyDown: wS,
        onKeyUp: SS,
        onMouseDown: on,
        onMouseLeave: hS,
        onMouseUp: Lr,
        onDragLeave: sn,
        onTouchEnd: gS,
        onTouchMove: yS,
        onTouchStart: mS,
        ref: CS,
        tabIndex: u ? -1 : j,
        type: X,
        ...Fi,
        ...V,
        children: [s, bn ? k.jsx(JM, {
            ref: $,
            center: o,
            ...U
        }) : null]
    })
});
function ln(e, t, n, r=!1) {
    return vr(i => (n && n(i),
    r || e[t](i),
    !0))
}
function r4(e) {
    return typeof e.main == "string"
}
function i4(e, t=[]) {
    if (!r4(e))
        return !1;
    for (const n of t)
        if (!e.hasOwnProperty(n) || typeof e[n] != "string")
            return !1;
    return !0
}
function xr(e=[]) {
    return ([,t]) => t && i4(t, e)
}
function o4(e) {
    return Ft("MuiCircularProgress", e)
}
Bt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const An = 44
  , Vf = Nr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`
  , zf = Nr`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`
  , s4 = typeof Vf != "string" ? gs`
        animation: ${Vf} 1.4s linear infinite;
      ` : null
  , a4 = typeof zf != "string" ? gs`
        animation: ${zf} 1.4s ease-in-out infinite;
      ` : null
  , l4 = e => {
    const {classes: t, variant: n, color: r, disableShrink: i} = e
      , o = {
        root: ["root", n, `color${K(r)}`],
        svg: ["svg"],
        circle: ["circle", `circle${K(n)}`, i && "circleDisableShrink"]
    };
    return rn(o, o4, t)
}
  , u4 = ce("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, t[n.variant], t[`color${K(n.color)}`]]
    }
})($t( ({theme: e}) => ({
    display: "inline-block",
    variants: [{
        props: {
            variant: "determinate"
        },
        style: {
            transition: e.transitions.create("transform")
        }
    }, {
        props: {
            variant: "indeterminate"
        },
        style: s4 || {
            animation: `${Vf} 1.4s linear infinite`
        }
    }, ...Object.entries(e.palette).filter(xr()).map( ([t]) => ({
        props: {
            color: t
        },
        style: {
            color: (e.vars || e).palette[t].main
        }
    }))]
})))
  , c4 = ce("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (e, t) => t.svg
})({
    display: "block"
})
  , f4 = ce("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.circle, t[`circle${K(n.variant)}`], n.disableShrink && t.circleDisableShrink]
    }
})($t( ({theme: e}) => ({
    stroke: "currentColor",
    variants: [{
        props: {
            variant: "determinate"
        },
        style: {
            transition: e.transitions.create("stroke-dashoffset")
        }
    }, {
        props: {
            variant: "indeterminate"
        },
        style: {
            strokeDasharray: "80px, 200px",
            strokeDashoffset: 0
        }
    }, {
        props: ({ownerState: t}) => t.variant === "indeterminate" && !t.disableShrink,
        style: a4 || {
            animation: `${zf} 1.4s ease-in-out infinite`
        }
    }]
})))
  , jw = S.forwardRef(function(t, n) {
    const r = Vt({
        props: t,
        name: "MuiCircularProgress"
    })
      , {className: i, color: o="primary", disableShrink: s=!1, size: a=40, style: l, thickness: u=3.6, value: c=0, variant: f="indeterminate", ...d} = r
      , y = {
        ...r,
        color: o,
        disableShrink: s,
        size: a,
        thickness: u,
        value: c,
        variant: f
    }
      , g = l4(y)
      , m = {}
      , w = {}
      , p = {};
    if (f === "determinate") {
        const h = 2 * Math.PI * ((An - u) / 2);
        m.strokeDasharray = h.toFixed(3),
        p["aria-valuenow"] = Math.round(c),
        m.strokeDashoffset = `${((100 - c) / 100 * h).toFixed(3)}px`,
        w.transform = "rotate(-90deg)"
    }
    return k.jsx(u4, {
        className: Se(g.root, i),
        style: {
            width: a,
            height: a,
            ...w,
            ...l
        },
        ownerState: y,
        ref: n,
        role: "progressbar",
        ...p,
        ...d,
        children: k.jsx(c4, {
            className: g.svg,
            ownerState: y,
            viewBox: `${An / 2} ${An / 2} ${An} ${An}`,
            children: k.jsx(f4, {
                className: g.circle,
                style: m,
                ownerState: y,
                cx: An,
                cy: An,
                r: (An - u) / 2,
                fill: "none",
                strokeWidth: u
            })
        })
    })
});
function d4(e) {
    return Ft("MuiButton", e)
}
const nr = Bt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"])
  , p4 = S.createContext({})
  , h4 = S.createContext(void 0)
  , m4 = e => {
    const {color: t, disableElevation: n, fullWidth: r, size: i, variant: o, loading: s, loadingPosition: a, classes: l} = e
      , u = {
        root: ["root", s && "loading", o, `${o}${K(t)}`, `size${K(i)}`, `${o}Size${K(i)}`, `color${K(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${K(a)}`],
        startIcon: ["icon", "startIcon", `iconSize${K(i)}`],
        endIcon: ["icon", "endIcon", `iconSize${K(i)}`],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"]
    }
      , c = rn(u, d4, l);
    return {
        ...l,
        ...c
    }
}
  , $w = [{
    props: {
        size: "small"
    },
    style: {
        "& > *:nth-of-type(1)": {
            fontSize: 18
        }
    }
}, {
    props: {
        size: "medium"
    },
    style: {
        "& > *:nth-of-type(1)": {
            fontSize: 20
        }
    }
}, {
    props: {
        size: "large"
    },
    style: {
        "& > *:nth-of-type(1)": {
            fontSize: 22
        }
    }
}]
  , g4 = ce(_w, {
    shouldForwardProp: e => Lw(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, t[n.variant], t[`${n.variant}${K(n.color)}`], t[`size${K(n.size)}`], t[`${n.variant}Size${K(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading]
    }
})($t( ({theme: e}) => {
    const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800]
      , n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
    return {
        ...e.typography.button,
        minWidth: 64,
        padding: "6px 16px",
        border: 0,
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
            duration: e.transitions.duration.short
        }),
        "&:hover": {
            textDecoration: "none"
        },
        [`&.${nr.disabled}`]: {
            color: (e.vars || e).palette.action.disabled
        },
        variants: [{
            props: {
                variant: "contained"
            },
            style: {
                color: "var(--variant-containedColor)",
                backgroundColor: "var(--variant-containedBg)",
                boxShadow: (e.vars || e).shadows[2],
                "&:hover": {
                    boxShadow: (e.vars || e).shadows[4],
                    "@media (hover: none)": {
                        boxShadow: (e.vars || e).shadows[2]
                    }
                },
                "&:active": {
                    boxShadow: (e.vars || e).shadows[8]
                },
                [`&.${nr.focusVisible}`]: {
                    boxShadow: (e.vars || e).shadows[6]
                },
                [`&.${nr.disabled}`]: {
                    color: (e.vars || e).palette.action.disabled,
                    boxShadow: (e.vars || e).shadows[0],
                    backgroundColor: (e.vars || e).palette.action.disabledBackground
                }
            }
        }, {
            props: {
                variant: "outlined"
            },
            style: {
                padding: "5px 15px",
                border: "1px solid currentColor",
                borderColor: "var(--variant-outlinedBorder, currentColor)",
                backgroundColor: "var(--variant-outlinedBg)",
                color: "var(--variant-outlinedColor)",
                [`&.${nr.disabled}`]: {
                    border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
                }
            }
        }, {
            props: {
                variant: "text"
            },
            style: {
                padding: "6px 8px",
                color: "var(--variant-textColor)",
                backgroundColor: "var(--variant-textBg)"
            }
        }, ...Object.entries(e.palette).filter(xr()).map( ([r]) => ({
            props: {
                color: r
            },
            style: {
                "--variant-textColor": (e.vars || e).palette[r].main,
                "--variant-outlinedColor": (e.vars || e).palette[r].main,
                "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / 0.5)` : Dt(e.palette[r].main, .5),
                "--variant-containedColor": (e.vars || e).palette[r].contrastText,
                "--variant-containedBg": (e.vars || e).palette[r].main,
                "@media (hover: hover)": {
                    "&:hover": {
                        "--variant-containedBg": (e.vars || e).palette[r].dark,
                        "--variant-textBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Dt(e.palette[r].main, e.palette.action.hoverOpacity),
                        "--variant-outlinedBorder": (e.vars || e).palette[r].main,
                        "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[r].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Dt(e.palette[r].main, e.palette.action.hoverOpacity)
                    }
                }
            }
        })), {
            props: {
                color: "inherit"
            },
            style: {
                color: "inherit",
                borderColor: "currentColor",
                "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
                "@media (hover: hover)": {
                    "&:hover": {
                        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : n,
                        "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Dt(e.palette.text.primary, e.palette.action.hoverOpacity),
                        "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Dt(e.palette.text.primary, e.palette.action.hoverOpacity)
                    }
                }
            }
        }, {
            props: {
                size: "small",
                variant: "text"
            },
            style: {
                padding: "4px 5px",
                fontSize: e.typography.pxToRem(13)
            }
        }, {
            props: {
                size: "large",
                variant: "text"
            },
            style: {
                padding: "8px 11px",
                fontSize: e.typography.pxToRem(15)
            }
        }, {
            props: {
                size: "small",
                variant: "outlined"
            },
            style: {
                padding: "3px 9px",
                fontSize: e.typography.pxToRem(13)
            }
        }, {
            props: {
                size: "large",
                variant: "outlined"
            },
            style: {
                padding: "7px 21px",
                fontSize: e.typography.pxToRem(15)
            }
        }, {
            props: {
                size: "small",
                variant: "contained"
            },
            style: {
                padding: "4px 10px",
                fontSize: e.typography.pxToRem(13)
            }
        }, {
            props: {
                size: "large",
                variant: "contained"
            },
            style: {
                padding: "8px 22px",
                fontSize: e.typography.pxToRem(15)
            }
        }, {
            props: {
                disableElevation: !0
            },
            style: {
                boxShadow: "none",
                "&:hover": {
                    boxShadow: "none"
                },
                [`&.${nr.focusVisible}`]: {
                    boxShadow: "none"
                },
                "&:active": {
                    boxShadow: "none"
                },
                [`&.${nr.disabled}`]: {
                    boxShadow: "none"
                }
            }
        }, {
            props: {
                fullWidth: !0
            },
            style: {
                width: "100%"
            }
        }, {
            props: {
                loadingPosition: "center"
            },
            style: {
                transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
                    duration: e.transitions.duration.short
                }),
                [`&.${nr.loading}`]: {
                    color: "transparent"
                }
            }
        }]
    }
}
))
  , y4 = ce("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.startIcon, n.loading && t.startIconLoadingStart, t[`iconSize${K(n.size)}`]]
    }
})( ({theme: e}) => ({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4,
    variants: [{
        props: {
            size: "small"
        },
        style: {
            marginLeft: -2
        }
    }, {
        props: {
            loadingPosition: "start",
            loading: !0
        },
        style: {
            transition: e.transitions.create(["opacity"], {
                duration: e.transitions.duration.short
            }),
            opacity: 0
        }
    }, {
        props: {
            loadingPosition: "start",
            loading: !0,
            fullWidth: !0
        },
        style: {
            marginRight: -8
        }
    }, ...$w]
}))
  , v4 = ce("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.endIcon, n.loading && t.endIconLoadingEnd, t[`iconSize${K(n.size)}`]]
    }
})( ({theme: e}) => ({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8,
    variants: [{
        props: {
            size: "small"
        },
        style: {
            marginRight: -2
        }
    }, {
        props: {
            loadingPosition: "end",
            loading: !0
        },
        style: {
            transition: e.transitions.create(["opacity"], {
                duration: e.transitions.duration.short
            }),
            opacity: 0
        }
    }, {
        props: {
            loadingPosition: "end",
            loading: !0,
            fullWidth: !0
        },
        style: {
            marginLeft: -8
        }
    }, ...$w]
}))
  , x4 = ce("span", {
    name: "MuiButton",
    slot: "LoadingIndicator",
    overridesResolver: (e, t) => t.loadingIndicator
})( ({theme: e}) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    variants: [{
        props: {
            loading: !0
        },
        style: {
            display: "flex"
        }
    }, {
        props: {
            loadingPosition: "start"
        },
        style: {
            left: 14
        }
    }, {
        props: {
            loadingPosition: "start",
            size: "small"
        },
        style: {
            left: 10
        }
    }, {
        props: {
            variant: "text",
            loadingPosition: "start"
        },
        style: {
            left: 6
        }
    }, {
        props: {
            loadingPosition: "center"
        },
        style: {
            left: "50%",
            transform: "translate(-50%)",
            color: (e.vars || e).palette.action.disabled
        }
    }, {
        props: {
            loadingPosition: "end"
        },
        style: {
            right: 14
        }
    }, {
        props: {
            loadingPosition: "end",
            size: "small"
        },
        style: {
            right: 10
        }
    }, {
        props: {
            variant: "text",
            loadingPosition: "end"
        },
        style: {
            right: 6
        }
    }, {
        props: {
            loadingPosition: "start",
            fullWidth: !0
        },
        style: {
            position: "relative",
            left: -10
        }
    }, {
        props: {
            loadingPosition: "end",
            fullWidth: !0
        },
        style: {
            position: "relative",
            right: -10
        }
    }]
}))
  , yy = ce("span", {
    name: "MuiButton",
    slot: "LoadingIconPlaceholder",
    overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
    display: "inline-block",
    width: "1em",
    height: "1em"
})
  , w4 = S.forwardRef(function(t, n) {
    const r = S.useContext(p4)
      , i = S.useContext(h4)
      , o = Qa(r, t)
      , s = Vt({
        props: o,
        name: "MuiButton"
    })
      , {children: a, color: l="primary", component: u="button", className: c, disabled: f=!1, disableElevation: d=!1, disableFocusRipple: y=!1, endIcon: g, focusVisibleClassName: m, fullWidth: w=!1, id: p, loading: h=null, loadingIndicator: v, loadingPosition: C="center", size: E="medium", startIcon: P, type: T, variant: b="text", ...L} = s
      , x = Jx(p)
      , O = v ?? k.jsx(jw, {
        "aria-labelledby": x,
        color: "inherit",
        size: 16
    })
      , I = {
        ...s,
        color: l,
        component: u,
        disabled: f,
        disableElevation: d,
        disableFocusRipple: y,
        fullWidth: w,
        loading: h,
        loadingIndicator: O,
        loadingPosition: C,
        size: E,
        type: T,
        variant: b
    }
      , j = m4(I)
      , U = (P || h && C === "start") && k.jsx(y4, {
        className: j.startIcon,
        ownerState: I,
        children: P || k.jsx(yy, {
            className: j.loadingIconPlaceholder,
            ownerState: I
        })
    })
      , B = (g || h && C === "end") && k.jsx(v4, {
        className: j.endIcon,
        ownerState: I,
        children: g || k.jsx(yy, {
            className: j.loadingIconPlaceholder,
            ownerState: I
        })
    })
      , X = i || ""
      , V = typeof h == "boolean" ? k.jsx("span", {
        className: j.loadingWrapper,
        style: {
            display: "contents"
        },
        children: h && k.jsx(x4, {
            className: j.loadingIndicator,
            ownerState: I,
            children: O
        })
    }) : null;
    return k.jsxs(g4, {
        ownerState: I,
        className: Se(r.className, j.root, c, X),
        component: u,
        disabled: f || h,
        focusRipple: !y,
        focusVisibleClassName: Se(j.focusVisible, m),
        ref: n,
        type: T,
        id: h ? x : p,
        ...L,
        classes: j,
        children: [U, C !== "end" && V, a, C === "end" && V, B]
    })
})
  , vy = e => {
    let t;
    const n = new Set
      , r = (u, c) => {
        const f = typeof u == "function" ? u(t) : u;
        if (!Object.is(f, t)) {
            const d = t;
            t = c ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f),
            n.forEach(y => y(t, d))
        }
    }
      , i = () => t
      , a = {
        setState: r,
        getState: i,
        getInitialState: () => l,
        subscribe: u => (n.add(u),
        () => n.delete(u))
    }
      , l = t = e(r, i, a);
    return a
}
  , S4 = e => e ? vy(e) : vy
  , C4 = e => e;
function E4(e, t=C4) {
    const n = Re.useSyncExternalStore(e.subscribe, () => t(e.getState()), () => t(e.getInitialState()));
    return Re.useDebugValue(n),
    n
}
const xy = e => {
    const t = S4(e)
      , n = r => E4(t, r);
    return Object.assign(n, t),
    n
}
  , Fw = e => e ? xy(e) : xy
  , Bw = Fw(e => ({
    message: "",
    severity: "info",
    setSnackMessage: ({message: t, severity: n}) => e({
        message: t,
        severity: n
    }),
    clearSnackMessage: () => e({
        message: "",
        severity: "info"
    })
}));
function Vw(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: k4} = Object.prototype
  , {getPrototypeOf: rh} = Object
  , cu = (e => t => {
    const n = k4.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , zt = e => (e = e.toLowerCase(),
t => cu(t) === e)
  , fu = e => t => typeof t === e
  , {isArray: _i} = Array
  , es = fu("undefined");
function P4(e) {
    return e !== null && !es(e) && e.constructor !== null && !es(e.constructor) && ft(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const zw = zt("ArrayBuffer");
function T4(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && zw(e.buffer),
    t
}
const b4 = fu("string")
  , ft = fu("function")
  , Uw = fu("number")
  , du = e => e !== null && typeof e == "object"
  , R4 = e => e === !0 || e === !1
  , ga = e => {
    if (cu(e) !== "object")
        return !1;
    const t = rh(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , A4 = zt("Date")
  , O4 = zt("File")
  , M4 = zt("Blob")
  , N4 = zt("FileList")
  , L4 = e => du(e) && ft(e.pipe)
  , D4 = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || ft(e.append) && ((t = cu(e)) === "formdata" || t === "object" && ft(e.toString) && e.toString() === "[object FormData]"))
}
  , I4 = zt("URLSearchParams")
  , [_4,j4,$4,F4] = ["ReadableStream", "Request", "Response", "Headers"].map(zt)
  , B4 = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vs(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, i;
    if (typeof e != "object" && (e = [e]),
    _i(e))
        for (r = 0,
        i = e.length; r < i; r++)
            t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , s = o.length;
        let a;
        for (r = 0; r < s; r++)
            a = o[r],
            t.call(null, e[a], a, e)
    }
}
function Ww(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, i;
    for (; r-- > 0; )
        if (i = n[r],
        t === i.toLowerCase())
            return i;
    return null
}
const hr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , Hw = e => !es(e) && e !== hr;
function Uf() {
    const {caseless: e} = Hw(this) && this || {}
      , t = {}
      , n = (r, i) => {
        const o = e && Ww(t, i) || i;
        ga(t[o]) && ga(r) ? t[o] = Uf(t[o], r) : ga(r) ? t[o] = Uf({}, r) : _i(r) ? t[o] = r.slice() : t[o] = r
    }
    ;
    for (let r = 0, i = arguments.length; r < i; r++)
        arguments[r] && vs(arguments[r], n);
    return t
}
const V4 = (e, t, n, {allOwnKeys: r}={}) => (vs(t, (i, o) => {
    n && ft(i) ? e[o] = Vw(i, n) : e[o] = i
}
, {
    allOwnKeys: r
}),
e)
  , z4 = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , U4 = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , W4 = (e, t, n, r) => {
    let i, o, s;
    const a = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (i = Object.getOwnPropertyNames(e),
        o = i.length; o-- > 0; )
            s = i[o],
            (!r || r(s, e, t)) && !a[s] && (t[s] = e[s],
            a[s] = !0);
        e = n !== !1 && rh(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , H4 = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , K4 = e => {
    if (!e)
        return null;
    if (_i(e))
        return e;
    let t = e.length;
    if (!Uw(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , G4 = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && rh(Uint8Array))
  , X4 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
        const o = i.value;
        t.call(e, o[0], o[1])
    }
}
  , Y4 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , q4 = zt("HTMLFormElement")
  , Q4 = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
    return r.toUpperCase() + i
})
  , wy = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , J4 = zt("RegExp")
  , Kw = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    vs(n, (i, o) => {
        let s;
        (s = t(i, o, e)) !== !1 && (r[o] = s || i)
    }
    ),
    Object.defineProperties(e, r)
}
  , Z4 = e => {
    Kw(e, (t, n) => {
        if (ft(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (ft(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , eN = (e, t) => {
    const n = {}
      , r = i => {
        i.forEach(o => {
            n[o] = !0
        }
        )
    }
    ;
    return _i(e) ? r(e) : r(String(e).split(t)),
    n
}
  , tN = () => {}
  , nN = (e, t) => e != null && Number.isFinite(e = +e) ? e : t
  , uc = "abcdefghijklmnopqrstuvwxyz"
  , Sy = "0123456789"
  , Gw = {
    DIGIT: Sy,
    ALPHA: uc,
    ALPHA_DIGIT: uc + uc.toUpperCase() + Sy
}
  , rN = (e=16, t=Gw.ALPHA_DIGIT) => {
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function iN(e) {
    return !!(e && ft(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const oN = e => {
    const t = new Array(10)
      , n = (r, i) => {
        if (du(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[i] = r;
                const o = _i(r) ? [] : {};
                return vs(r, (s, a) => {
                    const l = n(s, i + 1);
                    !es(l) && (o[a] = l)
                }
                ),
                t[i] = void 0,
                o
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , sN = zt("AsyncFunction")
  , aN = e => e && (du(e) || ft(e)) && ft(e.then) && ft(e.catch)
  , Xw = ( (e, t) => e ? setImmediate : t ? ( (n, r) => (hr.addEventListener("message", ({source: i, data: o}) => {
    i === hr && o === n && r.length && r.shift()()
}
, !1),
i => {
    r.push(i),
    hr.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", ft(hr.postMessage))
  , lN = typeof queueMicrotask < "u" ? queueMicrotask.bind(hr) : typeof process < "u" && process.nextTick || Xw
  , R = {
    isArray: _i,
    isArrayBuffer: zw,
    isBuffer: P4,
    isFormData: D4,
    isArrayBufferView: T4,
    isString: b4,
    isNumber: Uw,
    isBoolean: R4,
    isObject: du,
    isPlainObject: ga,
    isReadableStream: _4,
    isRequest: j4,
    isResponse: $4,
    isHeaders: F4,
    isUndefined: es,
    isDate: A4,
    isFile: O4,
    isBlob: M4,
    isRegExp: J4,
    isFunction: ft,
    isStream: L4,
    isURLSearchParams: I4,
    isTypedArray: G4,
    isFileList: N4,
    forEach: vs,
    merge: Uf,
    extend: V4,
    trim: B4,
    stripBOM: z4,
    inherits: U4,
    toFlatObject: W4,
    kindOf: cu,
    kindOfTest: zt,
    endsWith: H4,
    toArray: K4,
    forEachEntry: X4,
    matchAll: Y4,
    isHTMLForm: q4,
    hasOwnProperty: wy,
    hasOwnProp: wy,
    reduceDescriptors: Kw,
    freezeMethods: Z4,
    toObjectSet: eN,
    toCamelCase: Q4,
    noop: tN,
    toFiniteNumber: nN,
    findKey: Ww,
    global: hr,
    isContextDefined: Hw,
    ALPHABET: Gw,
    generateString: rN,
    isSpecCompliantForm: iN,
    toJSONObject: oN,
    isAsyncFn: sN,
    isThenable: aN,
    setImmediate: Xw,
    asap: lN
};
function z(e, t, n, r, i) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i,
    this.status = i.status ? i.status : null)
}
R.inherits(z, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: R.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const Yw = z.prototype
  , qw = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    qw[e] = {
        value: e
    }
}
);
Object.defineProperties(z, qw);
Object.defineProperty(Yw, "isAxiosError", {
    value: !0
});
z.from = (e, t, n, r, i, o) => {
    const s = Object.create(Yw);
    return R.toFlatObject(e, s, function(l) {
        return l !== Error.prototype
    }, a => a !== "isAxiosError"),
    z.call(s, e.message, t, n, r, i),
    s.cause = e,
    s.name = e.name,
    o && Object.assign(s, o),
    s
}
;
const uN = null;
function Wf(e) {
    return R.isPlainObject(e) || R.isArray(e)
}
function Qw(e) {
    return R.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Cy(e, t, n) {
    return e ? e.concat(t).map(function(i, o) {
        return i = Qw(i),
        !n && o ? "[" + i + "]" : i
    }).join(n ? "." : "") : t
}
function cN(e) {
    return R.isArray(e) && !e.some(Wf)
}
const fN = R.toFlatObject(R, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function pu(e, t, n) {
    if (!R.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = R.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(m, w) {
        return !R.isUndefined(w[m])
    });
    const r = n.metaTokens
      , i = n.visitor || c
      , o = n.dots
      , s = n.indexes
      , l = (n.Blob || typeof Blob < "u" && Blob) && R.isSpecCompliantForm(t);
    if (!R.isFunction(i))
        throw new TypeError("visitor must be a function");
    function u(g) {
        if (g === null)
            return "";
        if (R.isDate(g))
            return g.toISOString();
        if (!l && R.isBlob(g))
            throw new z("Blob is not supported. Use a Buffer instead.");
        return R.isArrayBuffer(g) || R.isTypedArray(g) ? l && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g
    }
    function c(g, m, w) {
        let p = g;
        if (g && !w && typeof g == "object") {
            if (R.endsWith(m, "{}"))
                m = r ? m : m.slice(0, -2),
                g = JSON.stringify(g);
            else if (R.isArray(g) && cN(g) || (R.isFileList(g) || R.endsWith(m, "[]")) && (p = R.toArray(g)))
                return m = Qw(m),
                p.forEach(function(v, C) {
                    !(R.isUndefined(v) || v === null) && t.append(s === !0 ? Cy([m], C, o) : s === null ? m : m + "[]", u(v))
                }),
                !1
        }
        return Wf(g) ? !0 : (t.append(Cy(w, m, o), u(g)),
        !1)
    }
    const f = []
      , d = Object.assign(fN, {
        defaultVisitor: c,
        convertValue: u,
        isVisitable: Wf
    });
    function y(g, m) {
        if (!R.isUndefined(g)) {
            if (f.indexOf(g) !== -1)
                throw Error("Circular reference detected in " + m.join("."));
            f.push(g),
            R.forEach(g, function(p, h) {
                (!(R.isUndefined(p) || p === null) && i.call(t, p, R.isString(h) ? h.trim() : h, m, d)) === !0 && y(p, m ? m.concat(h) : [h])
            }),
            f.pop()
        }
    }
    if (!R.isObject(e))
        throw new TypeError("data must be an object");
    return y(e),
    t
}
function Ey(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function ih(e, t) {
    this._pairs = [],
    e && pu(e, this, t)
}
const Jw = ih.prototype;
Jw.append = function(t, n) {
    this._pairs.push([t, n])
}
;
Jw.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Ey)
    }
    : Ey;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
}
;
function dN(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Zw(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || dN;
    R.isFunction(n) && (n = {
        serialize: n
    });
    const i = n && n.serialize;
    let o;
    if (i ? o = i(t, n) : o = R.isURLSearchParams(t) ? t.toString() : new ih(t,n).toString(r),
    o) {
        const s = e.indexOf("#");
        s !== -1 && (e = e.slice(0, s)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class ky {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        R.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const eS = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , pN = typeof URLSearchParams < "u" ? URLSearchParams : ih
  , hN = typeof FormData < "u" ? FormData : null
  , mN = typeof Blob < "u" ? Blob : null
  , gN = {
    isBrowser: !0,
    classes: {
        URLSearchParams: pN,
        FormData: hN,
        Blob: mN
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , oh = typeof window < "u" && typeof document < "u"
  , Hf = typeof navigator == "object" && navigator || void 0
  , yN = oh && (!Hf || ["ReactNative", "NativeScript", "NS"].indexOf(Hf.product) < 0)
  , vN = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , xN = oh && window.location.href || "http://localhost"
  , wN = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: oh,
    hasStandardBrowserEnv: yN,
    hasStandardBrowserWebWorkerEnv: vN,
    navigator: Hf,
    origin: xN
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ue = {
    ...wN,
    ...gN
};
function SN(e, t) {
    return pu(e, new Ue.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, i, o) {
            return Ue.isNode && R.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function CN(e) {
    return R.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function EN(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++)
        o = n[r],
        t[o] = e[o];
    return t
}
function tS(e) {
    function t(n, r, i, o) {
        let s = n[o++];
        if (s === "__proto__")
            return !0;
        const a = Number.isFinite(+s)
          , l = o >= n.length;
        return s = !s && R.isArray(i) ? i.length : s,
        l ? (R.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r,
        !a) : ((!i[s] || !R.isObject(i[s])) && (i[s] = []),
        t(n, r, i[s], o) && R.isArray(i[s]) && (i[s] = EN(i[s])),
        !a)
    }
    if (R.isFormData(e) && R.isFunction(e.entries)) {
        const n = {};
        return R.forEachEntry(e, (r, i) => {
            t(CN(r), i, n, 0)
        }
        ),
        n
    }
    return null
}
function kN(e, t, n) {
    if (R.isString(e))
        try {
            return (t || JSON.parse)(e),
            R.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (0,
    JSON.stringify)(e)
}
const xs = {
    transitional: eS,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , i = r.indexOf("application/json") > -1
          , o = R.isObject(t);
        if (o && R.isHTMLForm(t) && (t = new FormData(t)),
        R.isFormData(t))
            return i ? JSON.stringify(tS(t)) : t;
        if (R.isArrayBuffer(t) || R.isBuffer(t) || R.isStream(t) || R.isFile(t) || R.isBlob(t) || R.isReadableStream(t))
            return t;
        if (R.isArrayBufferView(t))
            return t.buffer;
        if (R.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let a;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return SN(t, this.formSerializer).toString();
            if ((a = R.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return pu(a ? {
                    "files[]": t
                } : t, l && new l, this.formSerializer)
            }
        }
        return o || i ? (n.setContentType("application/json", !1),
        kN(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || xs.transitional
          , r = n && n.forcedJSONParsing
          , i = this.responseType === "json";
        if (R.isResponse(t) || R.isReadableStream(t))
            return t;
        if (t && R.isString(t) && (r && !this.responseType || i)) {
            const s = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (s)
                    throw a.name === "SyntaxError" ? z.from(a, z.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: Ue.classes.FormData,
        Blob: Ue.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
R.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    xs.headers[e] = {}
}
);
const PN = R.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , TN = e => {
    const t = {};
    let n, r, i;
    return e && e.split(`
`).forEach(function(s) {
        i = s.indexOf(":"),
        n = s.substring(0, i).trim().toLowerCase(),
        r = s.substring(i + 1).trim(),
        !(!n || t[n] && PN[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , Py = Symbol("internals");
function Zi(e) {
    return e && String(e).trim().toLowerCase()
}
function ya(e) {
    return e === !1 || e == null ? e : R.isArray(e) ? e.map(ya) : String(e)
}
function bN(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const RN = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function cc(e, t, n, r, i) {
    if (R.isFunction(r))
        return r.call(this, t, n);
    if (i && (t = n),
    !!R.isString(t)) {
        if (R.isString(r))
            return t.indexOf(r) !== -1;
        if (R.isRegExp(r))
            return r.test(t)
    }
}
function AN(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function ON(e, t) {
    const n = R.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(i, o, s) {
                return this[r].call(this, t, i, o, s)
            },
            configurable: !0
        })
    }
    )
}
class nt {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const i = this;
        function o(a, l, u) {
            const c = Zi(l);
            if (!c)
                throw new Error("header name must be a non-empty string");
            const f = R.findKey(i, c);
            (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || l] = ya(a))
        }
        const s = (a, l) => R.forEach(a, (u, c) => o(u, c, l));
        if (R.isPlainObject(t) || t instanceof this.constructor)
            s(t, n);
        else if (R.isString(t) && (t = t.trim()) && !RN(t))
            s(TN(t), n);
        else if (R.isHeaders(t))
            for (const [a,l] of t.entries())
                o(l, a, r);
        else
            t != null && o(n, t, r);
        return this
    }
    get(t, n) {
        if (t = Zi(t),
        t) {
            const r = R.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n)
                    return i;
                if (n === !0)
                    return bN(i);
                if (R.isFunction(n))
                    return n.call(this, i, r);
                if (R.isRegExp(n))
                    return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = Zi(t),
        t) {
            const r = R.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || cc(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let i = !1;
        function o(s) {
            if (s = Zi(s),
            s) {
                const a = R.findKey(r, s);
                a && (!n || cc(r, r[a], a, n)) && (delete r[a],
                i = !0)
            }
        }
        return R.isArray(t) ? t.forEach(o) : o(t),
        i
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , i = !1;
        for (; r--; ) {
            const o = n[r];
            (!t || cc(this, this[o], o, t, !0)) && (delete this[o],
            i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this
          , r = {};
        return R.forEach(this, (i, o) => {
            const s = R.findKey(r, o);
            if (s) {
                n[s] = ya(i),
                delete n[o];
                return
            }
            const a = t ? AN(o) : String(o).trim();
            a !== o && delete n[o],
            n[a] = ya(i),
            r[a] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return R.forEach(this, (r, i) => {
            r != null && r !== !1 && (n[i] = t && R.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(i => r.set(i)),
        r
    }
    static accessor(t) {
        const r = (this[Py] = this[Py] = {
            accessors: {}
        }).accessors
          , i = this.prototype;
        function o(s) {
            const a = Zi(s);
            r[a] || (ON(i, s),
            r[a] = !0)
        }
        return R.isArray(t) ? t.forEach(o) : o(t),
        this
    }
}
nt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
R.reduceDescriptors(nt.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
R.freezeMethods(nt);
function fc(e, t) {
    const n = this || xs
      , r = t || n
      , i = nt.from(r.headers);
    let o = r.data;
    return R.forEach(e, function(a) {
        o = a.call(n, o, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    o
}
function nS(e) {
    return !!(e && e.__CANCEL__)
}
function ji(e, t, n) {
    z.call(this, e ?? "canceled", z.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
R.inherits(ji, z, {
    __CANCEL__: !0
});
function rS(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new z("Request failed with status code " + n.status,[z.ERR_BAD_REQUEST, z.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function MN(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function NN(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let i = 0, o = 0, s;
    return t = t !== void 0 ? t : 1e3,
    function(l) {
        const u = Date.now()
          , c = r[o];
        s || (s = u),
        n[i] = l,
        r[i] = u;
        let f = o
          , d = 0;
        for (; f !== i; )
            d += n[f++],
            f = f % e;
        if (i = (i + 1) % e,
        i === o && (o = (o + 1) % e),
        u - s < t)
            return;
        const y = c && u - c;
        return y ? Math.round(d * 1e3 / y) : void 0
    }
}
function LN(e, t) {
    let n = 0, r = 1e3 / t, i, o;
    const s = (u, c=Date.now()) => {
        n = c,
        i = null,
        o && (clearTimeout(o),
        o = null),
        e.apply(null, u)
    }
    ;
    return [ (...u) => {
        const c = Date.now()
          , f = c - n;
        f >= r ? s(u, c) : (i = u,
        o || (o = setTimeout( () => {
            o = null,
            s(i)
        }
        , r - f)))
    }
    , () => i && s(i)]
}
const rl = (e, t, n=3) => {
    let r = 0;
    const i = NN(50, 250);
    return LN(o => {
        const s = o.loaded
          , a = o.lengthComputable ? o.total : void 0
          , l = s - r
          , u = i(l)
          , c = s <= a;
        r = s;
        const f = {
            loaded: s,
            total: a,
            progress: a ? s / a : void 0,
            bytes: l,
            rate: u || void 0,
            estimated: u && a && c ? (a - s) / u : void 0,
            event: o,
            lengthComputable: a != null,
            [t ? "download" : "upload"]: !0
        };
        e(f)
    }
    , n)
}
  , Ty = (e, t) => {
    const n = e != null;
    return [r => t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , by = e => (...t) => R.asap( () => e(...t))
  , DN = Ue.hasStandardBrowserEnv ? ( (e, t) => n => (n = new URL(n,Ue.origin),
e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(Ue.origin), Ue.navigator && /(msie|trident)/i.test(Ue.navigator.userAgent)) : () => !0
  , IN = Ue.hasStandardBrowserEnv ? {
    write(e, t, n, r, i, o) {
        const s = [e + "=" + encodeURIComponent(t)];
        R.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
        R.isString(r) && s.push("path=" + r),
        R.isString(i) && s.push("domain=" + i),
        o === !0 && s.push("secure"),
        document.cookie = s.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function _N(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function jN(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function iS(e, t) {
    return e && !_N(t) ? jN(e, t) : t
}
const Ry = e => e instanceof nt ? {
    ...e
} : e;
function br(e, t) {
    t = t || {};
    const n = {};
    function r(u, c, f, d) {
        return R.isPlainObject(u) && R.isPlainObject(c) ? R.merge.call({
            caseless: d
        }, u, c) : R.isPlainObject(c) ? R.merge({}, c) : R.isArray(c) ? c.slice() : c
    }
    function i(u, c, f, d) {
        if (R.isUndefined(c)) {
            if (!R.isUndefined(u))
                return r(void 0, u, f, d)
        } else
            return r(u, c, f, d)
    }
    function o(u, c) {
        if (!R.isUndefined(c))
            return r(void 0, c)
    }
    function s(u, c) {
        if (R.isUndefined(c)) {
            if (!R.isUndefined(u))
                return r(void 0, u)
        } else
            return r(void 0, c)
    }
    function a(u, c, f) {
        if (f in t)
            return r(u, c);
        if (f in e)
            return r(void 0, u)
    }
    const l = {
        url: o,
        method: o,
        data: o,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        withXSRFToken: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: a,
        headers: (u, c, f) => i(Ry(u), Ry(c), f, !0)
    };
    return R.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
        const f = l[c] || i
          , d = f(e[c], t[c], c);
        R.isUndefined(d) && f !== a || (n[c] = d)
    }),
    n
}
const oS = e => {
    const t = br({}, e);
    let {data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: s, auth: a} = t;
    t.headers = s = nt.from(s),
    t.url = Zw(iS(t.baseURL, t.url), e.params, e.paramsSerializer),
    a && s.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")));
    let l;
    if (R.isFormData(n)) {
        if (Ue.hasStandardBrowserEnv || Ue.hasStandardBrowserWebWorkerEnv)
            s.setContentType(void 0);
        else if ((l = s.getContentType()) !== !1) {
            const [u,...c] = l ? l.split(";").map(f => f.trim()).filter(Boolean) : [];
            s.setContentType([u || "multipart/form-data", ...c].join("; "))
        }
    }
    if (Ue.hasStandardBrowserEnv && (r && R.isFunction(r) && (r = r(t)),
    r || r !== !1 && DN(t.url))) {
        const u = i && o && IN.read(o);
        u && s.set(i, u)
    }
    return t
}
  , $N = typeof XMLHttpRequest < "u"
  , FN = $N && function(e) {
    return new Promise(function(n, r) {
        const i = oS(e);
        let o = i.data;
        const s = nt.from(i.headers).normalize();
        let {responseType: a, onUploadProgress: l, onDownloadProgress: u} = i, c, f, d, y, g;
        function m() {
            y && y(),
            g && g(),
            i.cancelToken && i.cancelToken.unsubscribe(c),
            i.signal && i.signal.removeEventListener("abort", c)
        }
        let w = new XMLHttpRequest;
        w.open(i.method.toUpperCase(), i.url, !0),
        w.timeout = i.timeout;
        function p() {
            if (!w)
                return;
            const v = nt.from("getAllResponseHeaders"in w && w.getAllResponseHeaders())
              , E = {
                data: !a || a === "text" || a === "json" ? w.responseText : w.response,
                status: w.status,
                statusText: w.statusText,
                headers: v,
                config: e,
                request: w
            };
            rS(function(T) {
                n(T),
                m()
            }, function(T) {
                r(T),
                m()
            }, E),
            w = null
        }
        "onloadend"in w ? w.onloadend = p : w.onreadystatechange = function() {
            !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(p)
        }
        ,
        w.onabort = function() {
            w && (r(new z("Request aborted",z.ECONNABORTED,e,w)),
            w = null)
        }
        ,
        w.onerror = function() {
            r(new z("Network Error",z.ERR_NETWORK,e,w)),
            w = null
        }
        ,
        w.ontimeout = function() {
            let C = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
            const E = i.transitional || eS;
            i.timeoutErrorMessage && (C = i.timeoutErrorMessage),
            r(new z(C,E.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,e,w)),
            w = null
        }
        ,
        o === void 0 && s.setContentType(null),
        "setRequestHeader"in w && R.forEach(s.toJSON(), function(C, E) {
            w.setRequestHeader(E, C)
        }),
        R.isUndefined(i.withCredentials) || (w.withCredentials = !!i.withCredentials),
        a && a !== "json" && (w.responseType = i.responseType),
        u && ([d,g] = rl(u, !0),
        w.addEventListener("progress", d)),
        l && w.upload && ([f,y] = rl(l),
        w.upload.addEventListener("progress", f),
        w.upload.addEventListener("loadend", y)),
        (i.cancelToken || i.signal) && (c = v => {
            w && (r(!v || v.type ? new ji(null,e,w) : v),
            w.abort(),
            w = null)
        }
        ,
        i.cancelToken && i.cancelToken.subscribe(c),
        i.signal && (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
        const h = MN(i.url);
        if (h && Ue.protocols.indexOf(h) === -1) {
            r(new z("Unsupported protocol " + h + ":",z.ERR_BAD_REQUEST,e));
            return
        }
        w.send(o || null)
    }
    )
}
  , BN = (e, t) => {
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let r = new AbortController, i;
        const o = function(u) {
            if (!i) {
                i = !0,
                a();
                const c = u instanceof Error ? u : this.reason;
                r.abort(c instanceof z ? c : new ji(c instanceof Error ? c.message : c))
            }
        };
        let s = t && setTimeout( () => {
            s = null,
            o(new z(`timeout ${t} of ms exceeded`,z.ETIMEDOUT))
        }
        , t);
        const a = () => {
            e && (s && clearTimeout(s),
            s = null,
            e.forEach(u => {
                u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o)
            }
            ),
            e = null)
        }
        ;
        e.forEach(u => u.addEventListener("abort", o));
        const {signal: l} = r;
        return l.unsubscribe = () => R.asap(a),
        l
    }
}
  , VN = function*(e, t) {
    let n = e.byteLength;
    if (n < t) {
        yield e;
        return
    }
    let r = 0, i;
    for (; r < n; )
        i = r + t,
        yield e.slice(r, i),
        r = i
}
  , zN = async function*(e, t) {
    for await(const n of UN(e))
        yield*VN(n, t)
}
  , UN = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    const t = e.getReader();
    try {
        for (; ; ) {
            const {done: n, value: r} = await t.read();
            if (n)
                break;
            yield r
        }
    } finally {
        await t.cancel()
    }
}
  , Ay = (e, t, n, r) => {
    const i = zN(e, t);
    let o = 0, s, a = l => {
        s || (s = !0,
        r && r(l))
    }
    ;
    return new ReadableStream({
        async pull(l) {
            try {
                const {done: u, value: c} = await i.next();
                if (u) {
                    a(),
                    l.close();
                    return
                }
                let f = c.byteLength;
                if (n) {
                    let d = o += f;
                    n(d)
                }
                l.enqueue(new Uint8Array(c))
            } catch (u) {
                throw a(u),
                u
            }
        },
        cancel(l) {
            return a(l),
            i.return()
        }
    },{
        highWaterMark: 2
    })
}
  , hu = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , sS = hu && typeof ReadableStream == "function"
  , WN = hu && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
  , aS = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , HN = sS && aS( () => {
    let e = !1;
    const t = new Request(Ue.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)
  , Oy = 64 * 1024
  , Kf = sS && aS( () => R.isReadableStream(new Response("").body))
  , il = {
    stream: Kf && (e => e.body)
};
hu && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !il[t] && (il[t] = R.isFunction(e[t]) ? n => n[t]() : (n, r) => {
            throw new z(`Response type '${t}' is not supported`,z.ERR_NOT_SUPPORT,r)
        }
        )
    }
    )
}
)(new Response);
const KN = async e => {
    if (e == null)
        return 0;
    if (R.isBlob(e))
        return e.size;
    if (R.isSpecCompliantForm(e))
        return (await new Request(Ue.origin,{
            method: "POST",
            body: e
        }).arrayBuffer()).byteLength;
    if (R.isArrayBufferView(e) || R.isArrayBuffer(e))
        return e.byteLength;
    if (R.isURLSearchParams(e) && (e = e + ""),
    R.isString(e))
        return (await WN(e)).byteLength
}
  , GN = async (e, t) => {
    const n = R.toFiniteNumber(e.getContentLength());
    return n ?? KN(t)
}
  , XN = hu && (async e => {
    let {url: t, method: n, data: r, signal: i, cancelToken: o, timeout: s, onDownloadProgress: a, onUploadProgress: l, responseType: u, headers: c, withCredentials: f="same-origin", fetchOptions: d} = oS(e);
    u = u ? (u + "").toLowerCase() : "text";
    let y = BN([i, o && o.toAbortSignal()], s), g;
    const m = y && y.unsubscribe && ( () => {
        y.unsubscribe()
    }
    );
    let w;
    try {
        if (l && HN && n !== "get" && n !== "head" && (w = await GN(c, r)) !== 0) {
            let E = new Request(t,{
                method: "POST",
                body: r,
                duplex: "half"
            }), P;
            if (R.isFormData(r) && (P = E.headers.get("content-type")) && c.setContentType(P),
            E.body) {
                const [T,b] = Ty(w, rl(by(l)));
                r = Ay(E.body, Oy, T, b)
            }
        }
        R.isString(f) || (f = f ? "include" : "omit");
        const p = "credentials"in Request.prototype;
        g = new Request(t,{
            ...d,
            signal: y,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: p ? f : void 0
        });
        let h = await fetch(g);
        const v = Kf && (u === "stream" || u === "response");
        if (Kf && (a || v && m)) {
            const E = {};
            ["status", "statusText", "headers"].forEach(L => {
                E[L] = h[L]
            }
            );
            const P = R.toFiniteNumber(h.headers.get("content-length"))
              , [T,b] = a && Ty(P, rl(by(a), !0)) || [];
            h = new Response(Ay(h.body, Oy, T, () => {
                b && b(),
                m && m()
            }
            ),E)
        }
        u = u || "text";
        let C = await il[R.findKey(il, u) || "text"](h, e);
        return !v && m && m(),
        await new Promise( (E, P) => {
            rS(E, P, {
                data: C,
                headers: nt.from(h.headers),
                status: h.status,
                statusText: h.statusText,
                config: e,
                request: g
            })
        }
        )
    } catch (p) {
        throw m && m(),
        p && p.name === "TypeError" && /fetch/i.test(p.message) ? Object.assign(new z("Network Error",z.ERR_NETWORK,e,g), {
            cause: p.cause || p
        }) : z.from(p, p && p.code, e, g)
    }
}
)
  , Gf = {
    http: uN,
    xhr: FN,
    fetch: XN
};
R.forEach(Gf, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const My = e => `- ${e}`
  , YN = e => R.isFunction(e) || e === null || e === !1
  , lS = {
    getAdapter: e => {
        e = R.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const i = {};
        for (let o = 0; o < t; o++) {
            n = e[o];
            let s;
            if (r = n,
            !YN(n) && (r = Gf[(s = String(n)).toLowerCase()],
            r === void 0))
                throw new z(`Unknown adapter '${s}'`);
            if (r)
                break;
            i[s || "#" + o] = r
        }
        if (!r) {
            const o = Object.entries(i).map( ([a,l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
            let s = t ? o.length > 1 ? `since :
` + o.map(My).join(`
`) : " " + My(o[0]) : "as no adapter specified";
            throw new z("There is no suitable adapter to dispatch the request " + s,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: Gf
};
function dc(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new ji(null,e)
}
function Ny(e) {
    return dc(e),
    e.headers = nt.from(e.headers),
    e.data = fc.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    lS.getAdapter(e.adapter || xs.adapter)(e).then(function(r) {
        return dc(e),
        r.data = fc.call(e, e.transformResponse, r),
        r.headers = nt.from(r.headers),
        r
    }, function(r) {
        return nS(r) || (dc(e),
        r && r.response && (r.response.data = fc.call(e, e.transformResponse, r.response),
        r.response.headers = nt.from(r.response.headers))),
        Promise.reject(r)
    })
}
const uS = "1.7.9"
  , mu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    mu[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const Ly = {};
mu.transitional = function(t, n, r) {
    function i(o, s) {
        return "[Axios v" + uS + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "")
    }
    return (o, s, a) => {
        if (t === !1)
            throw new z(i(s, " has been removed" + (n ? " in " + n : "")),z.ERR_DEPRECATED);
        return n && !Ly[s] && (Ly[s] = !0,
        console.warn(i(s, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(o, s, a) : !0
    }
}
;
mu.spelling = function(t) {
    return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`),
    !0)
}
;
function qN(e, t, n) {
    if (typeof e != "object")
        throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0; ) {
        const o = r[i]
          , s = t[o];
        if (s) {
            const a = e[o]
              , l = a === void 0 || s(a, o, e);
            if (l !== !0)
                throw new z("option " + o + " must be " + l,z.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new z("Unknown option " + o,z.ERR_BAD_OPTION)
    }
}
const va = {
    assertOptions: qN,
    validators: mu
}
  , Ht = va.validators;
class wr {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new ky,
            response: new ky
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let i = {};
                Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error;
                const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = br(this.defaults, n);
        const {transitional: r, paramsSerializer: i, headers: o} = n;
        r !== void 0 && va.assertOptions(r, {
            silentJSONParsing: Ht.transitional(Ht.boolean),
            forcedJSONParsing: Ht.transitional(Ht.boolean),
            clarifyTimeoutError: Ht.transitional(Ht.boolean)
        }, !1),
        i != null && (R.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : va.assertOptions(i, {
            encode: Ht.function,
            serialize: Ht.function
        }, !0)),
        va.assertOptions(n, {
            baseUrl: Ht.spelling("baseURL"),
            withXsrfToken: Ht.spelling("withXSRFToken")
        }, !0),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let s = o && R.merge(o.common, o[n.method]);
        o && R.forEach(["delete", "get", "head", "post", "put", "patch", "common"], g => {
            delete o[g]
        }
        ),
        n.headers = nt.concat(s, o);
        const a = [];
        let l = !0;
        this.interceptors.request.forEach(function(m) {
            typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous,
            a.unshift(m.fulfilled, m.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(m) {
            u.push(m.fulfilled, m.rejected)
        });
        let c, f = 0, d;
        if (!l) {
            const g = [Ny.bind(this), void 0];
            for (g.unshift.apply(g, a),
            g.push.apply(g, u),
            d = g.length,
            c = Promise.resolve(n); f < d; )
                c = c.then(g[f++], g[f++]);
            return c
        }
        d = a.length;
        let y = n;
        for (f = 0; f < d; ) {
            const g = a[f++]
              , m = a[f++];
            try {
                y = g(y)
            } catch (w) {
                m.call(this, w);
                break
            }
        }
        try {
            c = Ny.call(this, y)
        } catch (g) {
            return Promise.reject(g)
        }
        for (f = 0,
        d = u.length; f < d; )
            c = c.then(u[f++], u[f++]);
        return c
    }
    getUri(t) {
        t = br(this.defaults, t);
        const n = iS(t.baseURL, t.url);
        return Zw(n, t.params, t.paramsSerializer)
    }
}
R.forEach(["delete", "get", "head", "options"], function(t) {
    wr.prototype[t] = function(n, r) {
        return this.request(br(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
R.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, s, a) {
            return this.request(br(a || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: s
            }))
        }
    }
    wr.prototype[t] = n(),
    wr.prototype[t + "Form"] = n(!0)
});
class sh {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        }
        );
        const r = this;
        this.promise.then(i => {
            if (!r._listeners)
                return;
            let o = r._listeners.length;
            for (; o-- > 0; )
                r._listeners[o](i);
            r._listeners = null
        }
        ),
        this.promise.then = i => {
            let o;
            const s = new Promise(a => {
                r.subscribe(a),
                o = a
            }
            ).then(i);
            return s.cancel = function() {
                r.unsubscribe(o)
            }
            ,
            s
        }
        ,
        t(function(o, s, a) {
            r.reason || (r.reason = new ji(o,s,a),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController
          , n = r => {
            t.abort(r)
        }
        ;
        return this.subscribe(n),
        t.signal.unsubscribe = () => this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new sh(function(i) {
                t = i
            }
            ),
            cancel: t
        }
    }
}
function QN(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function JN(e) {
    return R.isObject(e) && e.isAxiosError === !0
}
const Xf = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Xf).forEach( ([e,t]) => {
    Xf[t] = e
}
);
function cS(e) {
    const t = new wr(e)
      , n = Vw(wr.prototype.request, t);
    return R.extend(n, wr.prototype, t, {
        allOwnKeys: !0
    }),
    R.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(i) {
        return cS(br(e, i))
    }
    ,
    n
}
const Ee = cS(xs);
Ee.Axios = wr;
Ee.CanceledError = ji;
Ee.CancelToken = sh;
Ee.isCancel = nS;
Ee.VERSION = uS;
Ee.toFormData = pu;
Ee.AxiosError = z;
Ee.Cancel = Ee.CanceledError;
Ee.all = function(t) {
    return Promise.all(t)
}
;
Ee.spread = QN;
Ee.isAxiosError = JN;
Ee.mergeConfig = br;
Ee.AxiosHeaders = nt;
Ee.formToJSON = e => tS(R.isHTMLForm(e) ? new FormData(e) : e);
Ee.getAdapter = lS.getAdapter;
Ee.HttpStatusCode = Xf;
Ee.default = Ee;
const ah = "https://poloredis.elogekohou.site";
console.log(ah);
const ZN = async () => {
    try {
        const e = await Ee.get(`${ah}/api/liste/polo`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });
        if (e.data.status !== 1)
            throw new Error("Error fetching polos");
        return e.data.polos
    } catch (e) {
        throw console.error("Error fetching polos:", e),
        e
    }
}
  , eL = async e => {
    try {
        const t = await Ee.post(`${ah}/api/commande/polo`, e);
        if (t.data.status !== 1)
            throw new Error("Error Post polos");
        return t.data
    } catch (t) {
        throw console.error("Error posting command:", t),
        t
    }
}
  , lh = Fw(e => ({
    polos: [],
    loadingFtPl: !0,
    errorMessage: null,
    loadingPstCmd: !1,
    fetchPolos: async () => {
        e({
            loadingFtPl: !0,
            errorMessage: null
        });
        try {
            const t = await ZN();
            e({
                polos: t,
                loadingFtPl: !1
            })
        } catch (t) {
            throw e({
                errorMessage: "Erreur lors du chargement des polos"
            }),
            console.error("Error fetching polos:", t),
            t
        } finally {
            e({
                loadingFtPl: !1
            })
        }
    }
    ,
    sendCommand: async t => {
        e({
            loadingPstCmd: !0
        });
        try {
            await eL(t)
        } catch (n) {
            throw e({
                errorMessage: "Erreur lors de la commande"
            }),
            console.error("Error posting command:", n),
            n
        } finally {
            e({
                loadingPstCmd: !1
            })
        }
    }
}))
  , tL = ({polo: e, isOpen: t, onClose: n}) => {
    const [r,i] = S.useState(e.sizes[0])
      , [o,s] = S.useState(1)
      , [a,l] = S.useState({
        name: "",
        email: "",
        phone: ""
    })
      , {clearSnackMessage: u, setSnackMessage: c} = Bw()
      , {sendCommand: f, loadingPstCmd: d} = lh()
      , y = () => {
        const {name: m, email: w, phone: p} = a;
        return !(m.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w) || !/^\d{10}$/.test(p))
    }
      , g = async m => {
        if (m.preventDefault(),
        u(),
        !y()) {
            setTimeout( () => {
                c({
                    message: "Remplissez correctement tous les champs",
                    severity: "error"
                })
            }
            , 0);
            return
        }
        try {
            await f({
                nom_et: a.name,
                tel_et: a.phone,
                email_et: a.email,
                id_polo: e.id,
                qt_polo: o,
                taille: r
            }),
            c({
                message: "Commande enregistrée avec succès",
                severity: "success"
            }),
            l({
                name: "",
                email: "",
                phone: ""
            }),
            s(1),
            i(e.sizes[0]),
            n()
        } catch (w) {
            console.error("Erreur lors de l'envoi de la commande:", w),
            c({
                message: "Erreur lors de l'envoi de la commande",
                severity: "error"
            });
            return
        }
    }
    ;
    return k.jsx(D2, {
        children: t && k.jsx("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
            children: k.jsxs(He.div, {
                initial: {
                    opacity: 0,
                    scale: .9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: .9
                },
                className: "bg-white rounded-xl p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto scrollbar-hidden",
                children: [k.jsxs("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [k.jsx("h2", {
                        className: "text-2xl font-bold",
                        children: e.nom
                    }), k.jsx("button", {
                        onClick: n,
                        children: k.jsx(lA, {
                            className: "h-6 w-6"
                        })
                    })]
                }), k.jsxs("form", {
                    onSubmit: g,
                    className: "space-y-4",
                    children: [k.jsxs("div", {
                        className: "space-y-4",
                        children: [k.jsxs("div", {
                            children: [k.jsx("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: "Nom complet"
                            }), k.jsx("input", {
                                type: "text",
                                required: !0,
                                value: a.name,
                                onChange: m => l({
                                    ...a,
                                    name: m.target.value
                                }),
                                className: "mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-50 transition-all"
                            })]
                        }), k.jsxs("div", {
                            children: [k.jsx("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: "Email"
                            }), k.jsx("input", {
                                type: "email",
                                required: !0,
                                value: a.email,
                                onChange: m => l({
                                    ...a,
                                    email: m.target.value
                                }),
                                className: "mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-50 transition-all"
                            })]
                        }), k.jsxs("div", {
                            children: [k.jsx("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: "Téléphone"
                            }), k.jsx("input", {
                                type: "tel",
                                required: !0,
                                value: a.phone,
                                onChange: m => l({
                                    ...a,
                                    phone: m.target.value
                                }),
                                className: "mt-1 p-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-50 transition-all"
                            })]
                        })]
                    }), k.jsxs("div", {
                        children: [k.jsx("label", {
                            className: "block text-sm font-medium text-gray-700",
                            children: "Taille"
                        }), k.jsx("div", {
                            className: "mt-2 flex gap-2",
                            children: e.sizes.map(m => k.jsx("button", {
                                type: "button",
                                onClick: () => i(m),
                                className: `px-3 py-1 rounded-md ${r === m ? "bg-black text-white" : "bg-gray-100 border border-gray-300"}`,
                                children: m
                            }, m))
                        })]
                    }), k.jsxs("div", {
                        children: [k.jsx("label", {
                            className: "block text-sm font-medium text-gray-700",
                            children: "Quantité"
                        }), k.jsxs("div", {
                            className: "mt-1 flex items-center gap-2",
                            children: [k.jsx("button", {
                                type: "button",
                                onClick: () => s(m => Math.max(1, m - 1)),
                                className: "px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors border border-gray-300",
                                children: "-"
                            }), k.jsx("div", {
                                className: "px-4 py-2 bg-blue-400 rounded-md text-center text-white font-bold border border-blue-500",
                                children: o
                            }), k.jsx("button", {
                                type: "button",
                                onClick: () => s(m => Math.min(5, m + 1)),
                                className: "px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors border border-gray-300",
                                children: "+"
                            })]
                        })]
                    }), !d && k.jsxs(He.button, {
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: .98
                        },
                        type: "submit",
                        className: "w-full py-3 font-bold bg-[#2b97c1] text-white rounded-lg hover:bg-gray-800 transition-colors border ",
                        children: ["Ajouter au panier - ", e.prix * o, " FCFA"]
                    }), d && k.jsx(w4, {
                        disabled: !0,
                        loading: !0,
                        variant: "contained",
                        className: "w-full py-3  text-white rounded-lg bg-[#34b6e8] transition-colors border border-black",
                        children: "Submit"
                    })]
                })]
            })
        })
    })
}
  , nL = "/assets/wlc-BPR481Fa.jpeg"
  , rL = () => k.jsxs("div", {
    className: "relative h-screen",
    children: [k.jsx("div", {
        className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
        style: {
            backgroundImage: `url(${nL})`,
            backgroundAttachment: "fixed"
        },
        children: k.jsx("div", {
            className: "absolute inset-0 bg-black bg-opacity-50"
        })
    }), k.jsxs("div", {
        className: "relative h-full flex flex-col items-center justify-center text-white px-4",
        children: [k.jsx(He.h1, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: .2
            },
            className: "text-5xl md:text-7xl font-bold text-center mb-6",
            children: "Style et Code : l'Alliance Parfaite."
        }), k.jsx(He.p, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: .4
            },
            className: "text-xl md:text-2xl text-center mb-12 max-w-2xl",
            children: "Une collection de polos Redis stylés conçus pour les informaticiens, où luxe et confort s'allient pour optimiser votre quotidien."
        }), k.jsx(He.button, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: 0
            },
            whileHover: {
                scale: 1.05
            },
            whileTap: {
                scale: .95
            },
            className: "bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors",
            onClick: () => {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth"
                })
            }
            ,
            children: "Découvrir la Collection"
        }), k.jsx(He.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                delay: 1,
                duration: 1,
                repeat: 1 / 0
            },
            className: "absolute bottom-8",
            children: k.jsx(iA, {
                className: "h-8 w-8"
            })
        })]
    })]
});
function iL(e={}) {
    const {autoHideDuration: t=null, disableWindowBlurListener: n=!1, onClose: r, open: i, resumeHideDuration: o} = e
      , s = $p();
    S.useEffect( () => {
        if (!i)
            return;
        function p(h) {
            h.defaultPrevented || h.key === "Escape" && (r == null || r(h, "escapeKeyDown"))
        }
        return document.addEventListener("keydown", p),
        () => {
            document.removeEventListener("keydown", p)
        }
    }
    , [i, r]);
    const a = vr( (p, h) => {
        r == null || r(p, h)
    }
    )
      , l = vr(p => {
        !r || p == null || s.start(p, () => {
            a(null, "timeout")
        }
        )
    }
    );
    S.useEffect( () => (i && l(t),
    s.clear), [i, t, l, s]);
    const u = p => {
        r == null || r(p, "clickaway")
    }
      , c = s.clear
      , f = S.useCallback( () => {
        t != null && l(o ?? t * .5)
    }
    , [t, o, l])
      , d = p => h => {
        const v = p.onBlur;
        v == null || v(h),
        f()
    }
      , y = p => h => {
        const v = p.onFocus;
        v == null || v(h),
        c()
    }
      , g = p => h => {
        const v = p.onMouseEnter;
        v == null || v(h),
        c()
    }
      , m = p => h => {
        const v = p.onMouseLeave;
        v == null || v(h),
        f()
    }
    ;
    return S.useEffect( () => {
        if (!n && i)
            return window.addEventListener("focus", f),
            window.addEventListener("blur", c),
            () => {
                window.removeEventListener("focus", f),
                window.removeEventListener("blur", c)
            }
    }
    , [n, i, f, c]),
    {
        getRootProps: (p={}) => {
            const h = {
                ...Of(e),
                ...Of(p)
            };
            return {
                role: "presentation",
                ...p,
                ...h,
                onBlur: d(h),
                onFocus: y(h),
                onMouseEnter: g(h),
                onMouseLeave: m(h)
            }
        }
        ,
        onClickAway: u
    }
}
function Dy(e) {
    return e.substring(2).toLowerCase()
}
function oL(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY
}
function sL(e) {
    const {children: t, disableReactTree: n=!1, mouseEvent: r="onClick", onClickAway: i, touchEvent: o="onTouchEnd"} = e
      , s = S.useRef(!1)
      , a = S.useRef(null)
      , l = S.useRef(!1)
      , u = S.useRef(!1);
    S.useEffect( () => (setTimeout( () => {
        l.current = !0
    }
    , 0),
    () => {
        l.current = !1
    }
    ), []);
    const c = ki(rw(t), a)
      , f = vr(g => {
        const m = u.current;
        u.current = !1;
        const w = ic(a.current);
        if (!l.current || !a.current || "clientX"in g && oL(g, w))
            return;
        if (s.current) {
            s.current = !1;
            return
        }
        let p;
        g.composedPath ? p = g.composedPath().includes(a.current) : p = !w.documentElement.contains(g.target) || a.current.contains(g.target),
        !p && (n || !m) && i(g)
    }
    )
      , d = g => m => {
        u.current = !0;
        const w = t.props[g];
        w && w(m)
    }
      , y = {
        ref: c
    };
    return o !== !1 && (y[o] = d(o)),
    S.useEffect( () => {
        if (o !== !1) {
            const g = Dy(o)
              , m = ic(a.current)
              , w = () => {
                s.current = !0
            }
            ;
            return m.addEventListener(g, f),
            m.addEventListener("touchmove", w),
            () => {
                m.removeEventListener(g, f),
                m.removeEventListener("touchmove", w)
            }
        }
    }
    , [f, o]),
    r !== !1 && (y[r] = d(r)),
    S.useEffect( () => {
        if (r !== !1) {
            const g = Dy(r)
              , m = ic(a.current);
            return m.addEventListener(g, f),
            () => {
                m.removeEventListener(g, f)
            }
        }
    }
    , [f, r]),
    S.cloneElement(t, y)
}
const aL = e => e.scrollTop;
function Iy(e, t) {
    const {timeout: n, easing: r, style: i={}} = e;
    return {
        duration: i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
        easing: i.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
        delay: i.transitionDelay
    }
}
function Yf(e) {
    return `scale(${e}, ${e ** 2})`
}
const lL = {
    entering: {
        opacity: 1,
        transform: Yf(1)
    },
    entered: {
        opacity: 1,
        transform: "none"
    }
}
  , pc = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent)
  , qf = S.forwardRef(function(t, n) {
    const {addEndListener: r, appear: i=!0, children: o, easing: s, in: a, onEnter: l, onEntered: u, onEntering: c, onExit: f, onExited: d, onExiting: y, style: g, timeout: m="auto", TransitionComponent: w=Tn, ...p} = t
      , h = $p()
      , v = S.useRef()
      , C = eh()
      , E = S.useRef(null)
      , P = ki(E, rw(o), n)
      , T = B => X => {
        if (B) {
            const V = E.current;
            X === void 0 ? B(V) : B(V, X)
        }
    }
      , b = T(c)
      , L = T( (B, X) => {
        aL(B);
        const {duration: V, delay: M, easing: D} = Iy({
            style: g,
            timeout: m,
            easing: s
        }, {
            mode: "enter"
        });
        let $;
        m === "auto" ? ($ = C.transitions.getAutoHeightDuration(B.clientHeight),
        v.current = $) : $ = V,
        B.style.transition = [C.transitions.create("opacity", {
            duration: $,
            delay: M
        }), C.transitions.create("transform", {
            duration: pc ? $ : $ * .666,
            delay: M,
            easing: D
        })].join(","),
        l && l(B, X)
    }
    )
      , x = T(u)
      , O = T(y)
      , I = T(B => {
        const {duration: X, delay: V, easing: M} = Iy({
            style: g,
            timeout: m,
            easing: s
        }, {
            mode: "exit"
        });
        let D;
        m === "auto" ? (D = C.transitions.getAutoHeightDuration(B.clientHeight),
        v.current = D) : D = X,
        B.style.transition = [C.transitions.create("opacity", {
            duration: D,
            delay: V
        }), C.transitions.create("transform", {
            duration: pc ? D : D * .666,
            delay: pc ? V : V || D * .333,
            easing: M
        })].join(","),
        B.style.opacity = 0,
        B.style.transform = Yf(.75),
        f && f(B)
    }
    )
      , j = T(d)
      , U = B => {
        m === "auto" && h.start(v.current || 0, B),
        r && r(E.current, B)
    }
    ;
    return k.jsx(w, {
        appear: i,
        in: a,
        nodeRef: E,
        onEnter: L,
        onEntered: x,
        onEntering: b,
        onExit: I,
        onExited: j,
        onExiting: O,
        addEndListener: U,
        timeout: m === "auto" ? null : m,
        ...p,
        children: (B, {ownerState: X, ...V}) => S.cloneElement(o, {
            style: {
                opacity: 0,
                transform: Yf(.75),
                visibility: B === "exited" && !a ? "hidden" : void 0,
                ...lL[B],
                ...g,
                ...o.props.style
            },
            ref: P,
            ...V
        })
    })
});
qf && (qf.muiSupportAuto = !0);
function uL(e) {
    return Ft("MuiPaper", e)
}
Bt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const cL = e => {
    const {square: t, elevation: n, variant: r, classes: i} = e
      , o = {
        root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
    };
    return rn(o, uL, i)
}
  , fL = ce("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]]
    }
})($t( ({theme: e}) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow"),
    variants: [{
        props: ({ownerState: t}) => !t.square,
        style: {
            borderRadius: e.shape.borderRadius
        }
    }, {
        props: {
            variant: "outlined"
        },
        style: {
            border: `1px solid ${(e.vars || e).palette.divider}`
        }
    }, {
        props: {
            variant: "elevation"
        },
        style: {
            boxShadow: "var(--Paper-shadow)",
            backgroundImage: "var(--Paper-overlay)"
        }
    }]
})))
  , fS = S.forwardRef(function(t, n) {
    var y;
    const r = Vt({
        props: t,
        name: "MuiPaper"
    })
      , i = eh()
      , {className: o, component: s="div", elevation: a=1, square: l=!1, variant: u="elevation", ...c} = r
      , f = {
        ...r,
        component: s,
        elevation: a,
        square: l,
        variant: u
    }
      , d = cL(f);
    return k.jsx(fL, {
        as: s,
        ownerState: f,
        className: Se(d.root, o),
        ref: n,
        ...c,
        style: {
            ...u === "elevation" && {
                "--Paper-shadow": (i.vars || i).shadows[a],
                ...i.vars && {
                    "--Paper-overlay": (y = i.vars.overlays) == null ? void 0 : y[a]
                },
                ...!i.vars && i.palette.mode === "dark" && {
                    "--Paper-overlay": `linear-gradient(${Dt("#fff", _f(a))}, ${Dt("#fff", _f(a))})`
                }
            },
            ...c.style
        }
    })
});
function dL(e) {
    return Ft("MuiSnackbarContent", e)
}
Bt("MuiSnackbarContent", ["root", "message", "action"]);
const pL = e => {
    const {classes: t} = e;
    return rn({
        root: ["root"],
        action: ["action"],
        message: ["message"]
    }, dL, t)
}
  , hL = ce(fS, {
    name: "MuiSnackbarContent",
    slot: "Root",
    overridesResolver: (e, t) => t.root
})($t( ({theme: e}) => {
    const t = e.palette.mode === "light" ? .8 : .98
      , n = Xx(e.palette.background.default, t);
    return {
        ...e.typography.body2,
        color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(n),
        backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : n,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "6px 16px",
        borderRadius: (e.vars || e).shape.borderRadius,
        flexGrow: 1,
        [e.breakpoints.up("sm")]: {
            flexGrow: "initial",
            minWidth: 288
        }
    }
}
))
  , mL = ce("div", {
    name: "MuiSnackbarContent",
    slot: "Message",
    overridesResolver: (e, t) => t.message
})({
    padding: "8px 0"
})
  , gL = ce("div", {
    name: "MuiSnackbarContent",
    slot: "Action",
    overridesResolver: (e, t) => t.action
})({
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
})
  , yL = S.forwardRef(function(t, n) {
    const r = Vt({
        props: t,
        name: "MuiSnackbarContent"
    })
      , {action: i, className: o, message: s, role: a="alert", ...l} = r
      , u = r
      , c = pL(u);
    return k.jsxs(hL, {
        role: a,
        square: !0,
        elevation: 6,
        className: Se(c.root, o),
        ownerState: u,
        ref: n,
        ...l,
        children: [k.jsx(mL, {
            className: c.message,
            ownerState: u,
            children: s
        }), i ? k.jsx(gL, {
            className: c.action,
            ownerState: u,
            children: i
        }) : null]
    })
});
function vL(e) {
    return Ft("MuiSnackbar", e)
}
Bt("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const xL = e => {
    const {classes: t, anchorOrigin: n} = e
      , r = {
        root: ["root", `anchorOrigin${K(n.vertical)}${K(n.horizontal)}`]
    };
    return rn(r, vL, t)
}
  , _y = ce("div", {
    name: "MuiSnackbar",
    slot: "Root",
    overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, t[`anchorOrigin${K(n.anchorOrigin.vertical)}${K(n.anchorOrigin.horizontal)}`]]
    }
})($t( ({theme: e}) => ({
    zIndex: (e.vars || e).zIndex.snackbar,
    position: "fixed",
    display: "flex",
    left: 8,
    right: 8,
    justifyContent: "center",
    alignItems: "center",
    variants: [{
        props: ({ownerState: t}) => t.anchorOrigin.vertical === "top",
        style: {
            top: 8,
            [e.breakpoints.up("sm")]: {
                top: 24
            }
        }
    }, {
        props: ({ownerState: t}) => t.anchorOrigin.vertical !== "top",
        style: {
            bottom: 8,
            [e.breakpoints.up("sm")]: {
                bottom: 24
            }
        }
    }, {
        props: ({ownerState: t}) => t.anchorOrigin.horizontal === "left",
        style: {
            justifyContent: "flex-start",
            [e.breakpoints.up("sm")]: {
                left: 24,
                right: "auto"
            }
        }
    }, {
        props: ({ownerState: t}) => t.anchorOrigin.horizontal === "right",
        style: {
            justifyContent: "flex-end",
            [e.breakpoints.up("sm")]: {
                right: 24,
                left: "auto"
            }
        }
    }, {
        props: ({ownerState: t}) => t.anchorOrigin.horizontal === "center",
        style: {
            [e.breakpoints.up("sm")]: {
                left: "50%",
                right: "auto",
                transform: "translateX(-50%)"
            }
        }
    }]
})))
  , wL = S.forwardRef(function(t, n) {
    const r = Vt({
        props: t,
        name: "MuiSnackbar"
    })
      , i = eh()
      , o = {
        enter: i.transitions.duration.enteringScreen,
        exit: i.transitions.duration.leavingScreen
    }
      , {action: s, anchorOrigin: {vertical: a, horizontal: l}={
        vertical: "bottom",
        horizontal: "left"
    }, autoHideDuration: u=null, children: c, className: f, ClickAwayListenerProps: d, ContentProps: y, disableWindowBlurListener: g=!1, message: m, onBlur: w, onClose: p, onFocus: h, onMouseEnter: v, onMouseLeave: C, open: E, resumeHideDuration: P, TransitionComponent: T=qf, transitionDuration: b=o, TransitionProps: {onEnter: L, onExited: x, ...O}={}, ...I} = r
      , j = {
        ...r,
        anchorOrigin: {
            vertical: a,
            horizontal: l
        },
        autoHideDuration: u,
        disableWindowBlurListener: g,
        TransitionComponent: T,
        transitionDuration: b
    }
      , U = xL(j)
      , {getRootProps: B, onClickAway: X} = iL({
        ...j
    })
      , [V,M] = S.useState(!0)
      , D = bA({
        elementType: _y,
        getSlotProps: B,
        externalForwardedProps: I,
        ownerState: j,
        additionalProps: {
            ref: n
        },
        className: [U.root, f]
    })
      , $ = ee => {
        M(!0),
        x && x(ee)
    }
      , Y = (ee, bn) => {
        M(!1),
        L && L(ee, bn)
    }
    ;
    return !E && V ? null : k.jsx(sL, {
        onClickAway: X,
        ...d,
        children: k.jsx(_y, {
            ...D,
            children: k.jsx(T, {
                appear: !0,
                in: E,
                timeout: b,
                direction: a === "top" ? "down" : "up",
                onEnter: Y,
                onExited: $,
                ...O,
                children: c || k.jsx(yL, {
                    message: m,
                    action: s,
                    ...y
                })
            })
        })
    })
});
function Vr(e, t) {
    const {className: n, elementType: r, ownerState: i, externalForwardedProps: o, internalForwardedProps: s, shouldForwardComponentProp: a=!1, ...l} = t
      , {component: u, slots: c={
        [e]: void 0
    }, slotProps: f={
        [e]: void 0
    }, ...d} = o
      , y = c[e] || r
      , g = nw(f[e], i)
      , {props: {component: m, ...w}, internalRef: p} = tw({
        className: n,
        ...l,
        externalForwardedProps: e === "root" ? d : void 0,
        externalSlotProps: g
    })
      , h = ki(p, g == null ? void 0 : g.ref, t.ref)
      , v = e === "root" ? m || u : m
      , C = ew(y, {
        ...e === "root" && !u && !c[e] && s,
        ...e !== "root" && !c[e] && s,
        ...w,
        ...v && !a && {
            as: v
        },
        ...v && a && {
            component: v
        },
        ref: h
    }, i);
    return [y, C]
}
function SL(e) {
    return Ft("MuiAlert", e)
}
const jy = Bt("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]);
function CL(e) {
    return Ft("MuiIconButton", e)
}
const $y = Bt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"])
  , EL = e => {
    const {classes: t, disabled: n, color: r, edge: i, size: o, loading: s} = e
      , a = {
        root: ["root", s && "loading", n && "disabled", r !== "default" && `color${K(r)}`, i && `edge${K(i)}`, `size${K(o)}`],
        loadingIndicator: ["loadingIndicator"],
        loadingWrapper: ["loadingWrapper"]
    };
    return rn(a, CL, t)
}
  , kL = ce(_w, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${K(n.color)}`], n.edge && t[`edge${K(n.edge)}`], t[`size${K(n.size)}`]]
    }
})($t( ({theme: e}) => ({
    textAlign: "center",
    flex: "0 0 auto",
    fontSize: e.typography.pxToRem(24),
    padding: 8,
    borderRadius: "50%",
    color: (e.vars || e).palette.action.active,
    transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shortest
    }),
    variants: [{
        props: t => !t.disableRipple,
        style: {
            "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Dt(e.palette.action.active, e.palette.action.hoverOpacity),
            "&:hover": {
                backgroundColor: "var(--IconButton-hoverBg)",
                "@media (hover: none)": {
                    backgroundColor: "transparent"
                }
            }
        }
    }, {
        props: {
            edge: "start"
        },
        style: {
            marginLeft: -12
        }
    }, {
        props: {
            edge: "start",
            size: "small"
        },
        style: {
            marginLeft: -3
        }
    }, {
        props: {
            edge: "end"
        },
        style: {
            marginRight: -12
        }
    }, {
        props: {
            edge: "end",
            size: "small"
        },
        style: {
            marginRight: -3
        }
    }]
})), $t( ({theme: e}) => ({
    variants: [{
        props: {
            color: "inherit"
        },
        style: {
            color: "inherit"
        }
    }, ...Object.entries(e.palette).filter(xr()).map( ([t]) => ({
        props: {
            color: t
        },
        style: {
            color: (e.vars || e).palette[t].main
        }
    })), ...Object.entries(e.palette).filter(xr()).map( ([t]) => ({
        props: {
            color: t
        },
        style: {
            "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Dt((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
        }
    })), {
        props: {
            size: "small"
        },
        style: {
            padding: 5,
            fontSize: e.typography.pxToRem(18)
        }
    }, {
        props: {
            size: "large"
        },
        style: {
            padding: 12,
            fontSize: e.typography.pxToRem(28)
        }
    }],
    [`&.${$y.disabled}`]: {
        backgroundColor: "transparent",
        color: (e.vars || e).palette.action.disabled
    },
    [`&.${$y.loading}`]: {
        color: "transparent"
    }
})))
  , PL = ce("span", {
    name: "MuiIconButton",
    slot: "LoadingIndicator",
    overridesResolver: (e, t) => t.loadingIndicator
})( ({theme: e}) => ({
    display: "none",
    position: "absolute",
    visibility: "visible",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: (e.vars || e).palette.action.disabled,
    variants: [{
        props: {
            loading: !0
        },
        style: {
            display: "flex"
        }
    }]
}))
  , TL = S.forwardRef(function(t, n) {
    const r = Vt({
        props: t,
        name: "MuiIconButton"
    })
      , {edge: i=!1, children: o, className: s, color: a="default", disabled: l=!1, disableFocusRipple: u=!1, size: c="medium", id: f, loading: d=null, loadingIndicator: y, ...g} = r
      , m = Jx(f)
      , w = y ?? k.jsx(jw, {
        "aria-labelledby": m,
        color: "inherit",
        size: 16
    })
      , p = {
        ...r,
        edge: i,
        color: a,
        disabled: l,
        disableFocusRipple: u,
        loading: d,
        loadingIndicator: w,
        size: c
    }
      , h = EL(p);
    return k.jsxs(kL, {
        id: d ? m : f,
        className: Se(h.root, s),
        centerRipple: !0,
        focusRipple: !u,
        disabled: l || d,
        ref: n,
        ...g,
        ownerState: p,
        children: [typeof d == "boolean" && k.jsx("span", {
            className: h.loadingWrapper,
            style: {
                display: "contents"
            },
            children: k.jsx(PL, {
                className: h.loadingIndicator,
                ownerState: p,
                children: d && w
            })
        }), o]
    })
})
  , bL = ys(k.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined")
  , RL = ys(k.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined")
  , AL = ys(k.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline")
  , OL = ys(k.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined")
  , ML = ys(k.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close")
  , NL = e => {
    const {variant: t, color: n, severity: r, classes: i} = e
      , o = {
        root: ["root", `color${K(n || r)}`, `${t}${K(n || r)}`, `${t}`],
        icon: ["icon"],
        message: ["message"],
        action: ["action"]
    };
    return rn(o, SL, i)
}
  , LL = ce(fS, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, t[n.variant], t[`${n.variant}${K(n.color || n.severity)}`]]
    }
})($t( ({theme: e}) => {
    const t = e.palette.mode === "light" ? Xo : Yo
      , n = e.palette.mode === "light" ? Yo : Xo;
    return {
        ...e.typography.body2,
        backgroundColor: "transparent",
        display: "flex",
        padding: "6px 16px",
        variants: [...Object.entries(e.palette).filter(xr(["light"])).map( ([r]) => ({
            props: {
                colorSeverity: r,
                variant: "standard"
            },
            style: {
                color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, .6),
                backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, .9),
                [`& .${jy.icon}`]: e.vars ? {
                    color: e.vars.palette.Alert[`${r}IconColor`]
                } : {
                    color: e.palette[r].main
                }
            }
        })), ...Object.entries(e.palette).filter(xr(["light"])).map( ([r]) => ({
            props: {
                colorSeverity: r,
                variant: "outlined"
            },
            style: {
                color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, .6),
                border: `1px solid ${(e.vars || e).palette[r].light}`,
                [`& .${jy.icon}`]: e.vars ? {
                    color: e.vars.palette.Alert[`${r}IconColor`]
                } : {
                    color: e.palette[r].main
                }
            }
        })), ...Object.entries(e.palette).filter(xr(["dark"])).map( ([r]) => ({
            props: {
                colorSeverity: r,
                variant: "filled"
            },
            style: {
                fontWeight: e.typography.fontWeightMedium,
                ...e.vars ? {
                    color: e.vars.palette.Alert[`${r}FilledColor`],
                    backgroundColor: e.vars.palette.Alert[`${r}FilledBg`]
                } : {
                    backgroundColor: e.palette.mode === "dark" ? e.palette[r].dark : e.palette[r].main,
                    color: e.palette.getContrastText(e.palette[r].main)
                }
            }
        }))]
    }
}
))
  , DL = ce("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
})({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: .9
})
  , IL = ce("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
})({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
})
  , _L = ce("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
})({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
})
  , Fy = {
    success: k.jsx(bL, {
        fontSize: "inherit"
    }),
    warning: k.jsx(RL, {
        fontSize: "inherit"
    }),
    error: k.jsx(AL, {
        fontSize: "inherit"
    }),
    info: k.jsx(OL, {
        fontSize: "inherit"
    })
}
  , jL = S.forwardRef(function(t, n) {
    const r = Vt({
        props: t,
        name: "MuiAlert"
    })
      , {action: i, children: o, className: s, closeText: a="Close", color: l, components: u={}, componentsProps: c={}, icon: f, iconMapping: d=Fy, onClose: y, role: g="alert", severity: m="success", slotProps: w={}, slots: p={}, variant: h="standard", ...v} = r
      , C = {
        ...r,
        color: l,
        severity: m,
        variant: h,
        colorSeverity: l || m
    }
      , E = NL(C)
      , P = {
        slots: {
            closeButton: u.CloseButton,
            closeIcon: u.CloseIcon,
            ...p
        },
        slotProps: {
            ...c,
            ...w
        }
    }
      , [T,b] = Vr("root", {
        ref: n,
        shouldForwardComponentProp: !0,
        className: Se(E.root, s),
        elementType: LL,
        externalForwardedProps: {
            ...P,
            ...v
        },
        ownerState: C,
        additionalProps: {
            role: g,
            elevation: 0
        }
    })
      , [L,x] = Vr("icon", {
        className: E.icon,
        elementType: DL,
        externalForwardedProps: P,
        ownerState: C
    })
      , [O,I] = Vr("message", {
        className: E.message,
        elementType: IL,
        externalForwardedProps: P,
        ownerState: C
    })
      , [j,U] = Vr("action", {
        className: E.action,
        elementType: _L,
        externalForwardedProps: P,
        ownerState: C
    })
      , [B,X] = Vr("closeButton", {
        elementType: TL,
        externalForwardedProps: P,
        ownerState: C
    })
      , [V,M] = Vr("closeIcon", {
        elementType: ML,
        externalForwardedProps: P,
        ownerState: C
    });
    return k.jsxs(T, {
        ...b,
        children: [f !== !1 ? k.jsx(L, {
            ...x,
            children: f || d[m] || Fy[m]
        }) : null, k.jsx(O, {
            ...I,
            children: o
        }), i != null ? k.jsx(j, {
            ...U,
            children: i
        }) : null, i == null && y ? k.jsx(j, {
            ...U,
            children: k.jsx(B, {
                size: "small",
                "aria-label": a,
                title: a,
                color: "inherit",
                onClick: y,
                ...X,
                children: k.jsx(V, {
                    fontSize: "small",
                    ...M
                })
            })
        }) : null]
    })
});
function $L({message: e, severity: t}) {
    const [n,r] = S.useState(!0)
      , i = (o, s) => {
        s !== "clickaway" && r(!1)
    }
    ;
    return k.jsx("div", {
        children: k.jsx(wL, {
            open: n,
            autoHideDuration: 3e3,
            onClose: i,
            children: k.jsx(jL, {
                onClose: i,
                severity: t,
                variant: "filled",
                sx: {
                    width: "100%"
                },
                children: e
            })
        })
    })
}
var dS = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , By = Re.createContext && Re.createContext(dS)
  , FL = ["attr", "size", "title"];
function BL(e, t) {
    if (e == null)
        return {};
    var n = VL(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++)
            r = o[i],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function VL(e, t) {
    if (e == null)
        return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0)
                continue;
            n[r] = e[r]
        }
    return n
}
function ol() {
    return ol = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ol.apply(this, arguments)
}
function Vy(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function sl(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Vy(Object(n), !0).forEach(function(r) {
            zL(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vy(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function zL(e, t, n) {
    return t = UL(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function UL(e) {
    var t = WL(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function WL(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function pS(e) {
    return e && e.map( (t, n) => Re.createElement(t.tag, sl({
        key: n
    }, t.attr), pS(t.child)))
}
function HL(e) {
    return t => Re.createElement(KL, ol({
        attr: sl({}, e.attr)
    }, t), pS(e.child))
}
function KL(e) {
    var t = n => {
        var {attr: r, size: i, title: o} = e, s = BL(e, FL), a = i || n.size || "1em", l;
        return n.className && (l = n.className),
        e.className && (l = (l ? l + " " : "") + e.className),
        Re.createElement("svg", ol({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, s, {
            className: l,
            style: sl(sl({
                color: e.color || n.color
            }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg"
        }), o && Re.createElement("title", null, o), e.children)
    }
    ;
    return By !== void 0 ? Re.createElement(By.Consumer, null, n => t(n)) : t(dS)
}
function GL(e) {
    return HL({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
            },
            child: []
        }]
    })(e)
}
const XL = "/assets/elogepic-BmHtht-w.jpg"
  , YL = "/assets/judicaelpic-CY5-ptF7.jpg"
  , qL = "/assets/younousspic--OpooAzR.jpg"
  , QL = "/assets/marcpic-RkqVsUwZ.jpg"
  , JL = "/assets/calixtepic-BWML72DX.jpg"
  , ZL = [{
    name: "Tinde Pehe Calixte",
    role: "Développement Frontend",
    image: JL,
    bio: "Dévéloppeur React , Tailwind , Zustand",
    social: {
        whatsapp: "https://wa.me/+22552767349",
        linkedin: "https://www.linkedin.com/in/tinde-p%C3%A9h%C3%A9-calixte-hassan-6a982b336",
        email: "mailto:sophie@example.com"
    }
}, {
    name: "Cakpo Judicael",
    role: "Développement Frontend",
    image: YL,
    bio: "Dévéloppeur React , Tailwind , Zustand",
    social: {
        whatsapp: "https://wa.me/+2250564624366",
        linkedin: "https://www.linkedin.com/in/judicael-cakpo-6907b32a0",
        email: "mailto:thomas@example.com"
    }
}, {
    name: "Bamba Younouss",
    role: "Développement Backend",
    image: qL,
    bio: "Développeur API PHP/Laravel",
    social: {
        whatsapp: "https://wa.me/+22566293579",
        linkedin: "https://www.linkedin.com/in/bamba-younouss-b63277314",
        email: "mailto:marie@example.com"
    }
}, {
    name: "Bamidele Marc Emmanuel",
    role: "Développement Backend",
    image: QL,
    bio: "Développeur API PHP/Laravel",
    social: {
        whatsapp: "https://wa.me/+22540022693",
        linkedin: "https://linkedin.com",
        email: "mailto:marie@example.com"
    }
}, {
    name: "Kouhou Moneka Eloge",
    role: "Développement Backend",
    image: XL,
    bio: "Développeur API PHP/Laravel",
    social: {
        whatsapp: "https://wa.me/+22540834531",
        linkedin: "https://www.linkedin.com/in/monneka-ange-eloge-kohou-143415327/",
        email: "mailto:marie@example.com"
    }
}]
  , e3 = () => k.jsxs("div", {
    className: "container mx-auto px-4 pt-24 pb-12",
    children: [k.jsx(He.h2, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: "text-4xl font-bold text-center mb-12",
        children: "Notre Équipe"
    }), k.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto",
        children: ZL.map( (e, t) => k.jsxs(He.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: t * .1
            },
            className: "bg-white rounded-xl shadow-lg overflow-hidden",
            children: [k.jsx("div", {
                className: "aspect-w-1 aspect-h-1",
                children: k.jsx("img", {
                    src: e.image,
                    alt: e.name,
                    className: "w-full h-64 object-cover"
                })
            }), k.jsxs("div", {
                className: "p-6",
                children: [k.jsx("h3", {
                    className: "text-xl font-semibold mb-2",
                    children: e.name
                }), k.jsx("p", {
                    className: "text-indigo-600 font-medium mb-4",
                    children: e.role
                }), k.jsx("p", {
                    className: "text-gray-600 mb-6",
                    children: e.bio
                }), k.jsxs("div", {
                    className: "flex justify-center space-x-4",
                    children: [k.jsx(He.a, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: .95
                        },
                        href: e.social.whatsapp,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-600 hover:text-gray-900",
                        children: k.jsx(GL, {
                            className: "h-5 w-5"
                        })
                    }), k.jsx(He.a, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: .95
                        },
                        href: e.social.linkedin,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-gray-600 hover:text-gray-900",
                        children: k.jsx(oA, {
                            className: "h-5 w-5"
                        })
                    })]
                })]
            })]
        }, e.name))
    })]
})
  , t3 = ({polo: e, onSelect: t}) => k.jsxs(He.div, {
    whileHover: {
        y: -5
    },
    className: "bg-white rounded-xl shadow-lg overflow-hidden",
    children: [k.jsxs("div", {
        className: "relative h-64",
        children: [k.jsx("img", {
            src: e.img,
            alt: e.nom,
            className: "w-full h-full object-cover"
        }), k.jsxs("div", {
            className: "absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 rounded-full flex items-center shadow-md",
            children: [k.jsx(zg, {
                className: "w-4 h-4 mr-1"
            }), k.jsx("span", {
                className: "text-xs font-semibold",
                children: "Exclusivité"
            })]
        })]
    }), k.jsxs("div", {
        className: "p-4",
        children: [k.jsxs("section", {
            className: "flex justify-between",
            children: [k.jsx("h3", {
                className: "text-xl font-semibold text-gray-900",
                children: e.nom
            }), k.jsxs("div", {
                className: " bg-yellow-400 text-white px-2 py-1 rounded-full flex items-center shadow-md",
                children: [k.jsx(zg, {
                    className: "w-4 h-4 mr-1"
                }), k.jsx("span", {
                    className: "text-xs font-semibold",
                    children: "Exclusivité"
                })]
            })]
        }), k.jsxs("div", {
            className: "mt-4 flex justify-between items-center",
            children: [k.jsxs("span", {
                className: "text-2xl font-bold text-gray-900",
                children: [e.prix, " FCFA"]
            }), k.jsx(He.button, {
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: .95
                },
                onClick: () => t(e),
                className: "px-4 py-2 bg-[#1e7394] text-white rounded-lg hover:bg-gray-800 transition-colors",
                children: "Précommander"
            })]
        })]
    })]
});
function n3(e) {
    return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || ""
}
function r3(e) {
    return parseFloat(e)
}
function i3(e) {
    return Ft("MuiSkeleton", e)
}
Bt("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const o3 = e => {
    const {classes: t, variant: n, animation: r, hasChildren: i, width: o, height: s} = e;
    return rn({
        root: ["root", n, r, i && "withChildren", i && !o && "fitContent", i && !s && "heightAuto"]
    }, i3, t)
}
  , Qf = Nr`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`
  , Jf = Nr`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`
  , s3 = typeof Qf != "string" ? gs`
        animation: ${Qf} 2s ease-in-out 0.5s infinite;
      ` : null
  , a3 = typeof Jf != "string" ? gs`
        &::after {
          animation: ${Jf} 2s linear 0.5s infinite;
        }
      ` : null
  , l3 = ce("span", {
    name: "MuiSkeleton",
    slot: "Root",
    overridesResolver: (e, t) => {
        const {ownerState: n} = e;
        return [t.root, t[n.variant], n.animation !== !1 && t[n.animation], n.hasChildren && t.withChildren, n.hasChildren && !n.width && t.fitContent, n.hasChildren && !n.height && t.heightAuto]
    }
})($t( ({theme: e}) => {
    const t = n3(e.shape.borderRadius) || "px"
      , n = r3(e.shape.borderRadius);
    return {
        display: "block",
        backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : Dt(e.palette.text.primary, e.palette.mode === "light" ? .11 : .13),
        height: "1.2em",
        variants: [{
            props: {
                variant: "text"
            },
            style: {
                marginTop: 0,
                marginBottom: 0,
                height: "auto",
                transformOrigin: "0 55%",
                transform: "scale(1, 0.60)",
                borderRadius: `${n}${t}/${Math.round(n / .6 * 10) / 10}${t}`,
                "&:empty:before": {
                    content: '"\\00a0"'
                }
            }
        }, {
            props: {
                variant: "circular"
            },
            style: {
                borderRadius: "50%"
            }
        }, {
            props: {
                variant: "rounded"
            },
            style: {
                borderRadius: (e.vars || e).shape.borderRadius
            }
        }, {
            props: ({ownerState: r}) => r.hasChildren,
            style: {
                "& > *": {
                    visibility: "hidden"
                }
            }
        }, {
            props: ({ownerState: r}) => r.hasChildren && !r.width,
            style: {
                maxWidth: "fit-content"
            }
        }, {
            props: ({ownerState: r}) => r.hasChildren && !r.height,
            style: {
                height: "auto"
            }
        }, {
            props: {
                animation: "pulse"
            },
            style: s3 || {
                animation: `${Qf} 2s ease-in-out 0.5s infinite`
            }
        }, {
            props: {
                animation: "wave"
            },
            style: {
                position: "relative",
                overflow: "hidden",
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                "&::after": {
                    background: `linear-gradient(
                90deg,
                transparent,
                ${(e.vars || e).palette.action.hover},
                transparent
              )`,
                    content: '""',
                    position: "absolute",
                    transform: "translateX(-100%)",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0
                }
            }
        }, {
            props: {
                animation: "wave"
            },
            style: a3 || {
                "&::after": {
                    animation: `${Jf} 2s linear 0.5s infinite`
                }
            }
        }]
    }
}
))
  , Gs = S.forwardRef(function(t, n) {
    const r = Vt({
        props: t,
        name: "MuiSkeleton"
    })
      , {animation: i="pulse", className: o, component: s="span", height: a, style: l, variant: u="text", width: c, ...f} = r
      , d = {
        ...r,
        animation: i,
        component: s,
        variant: u,
        hasChildren: !!f.children
    }
      , y = o3(d);
    return k.jsx(l3, {
        as: s,
        ref: n,
        className: Se(y.root, o),
        ownerState: d,
        ...f,
        style: {
            width: c,
            height: a,
            ...l
        }
    })
})
  , Xs = () => k.jsxs("div", {
    className: "bg-white rounded-xl shadow-lg overflow-hidden",
    children: [k.jsx("div", {
        className: "relative h-64",
        children: k.jsx(Gs, {
            variant: "rectangular",
            width: "100%",
            height: "100%"
        })
    }), k.jsxs("div", {
        className: "p-4",
        children: [k.jsx(Gs, {
            variant: "text",
            width: "60%",
            height: 32
        }), k.jsxs("div", {
            className: "mt-4 flex justify-between items-center",
            children: [k.jsx(Gs, {
                variant: "text",
                width: "30%",
                height: 40
            }), k.jsx(Gs, {
                variant: "rectangular",
                width: 120,
                height: 40
            })]
        })]
    })]
})
  , u3 = ({onSelect: e}) => {
    const {loadingFtPl: t, polos: n} = lh();
    return k.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto",
        children: [t && k.jsxs(k.Fragment, {
            children: [k.jsx(Xs, {}), k.jsx(Xs, {}), k.jsx(Xs, {}), k.jsx(Xs, {})]
        }), !t && n.map(r => k.jsx(t3, {
            polo: r,
            onSelect: () => e(r)
        }, r.id))]
    })
}
;
function c3() {
    const [e,t] = S.useState(null)
      , [n,r] = S.useState(!1)
      , {message: i, severity: o} = Bw()
      , {fetchPolos: s} = lh();
    return S.useEffect( () => {
        s()
    }
    , []),
    k.jsx(S2, {
        children: k.jsxs("div", {
            className: "min-h-screen bg-gray-50",
            children: [i !== "" && k.jsx($L, {
                severity: o,
                message: i
            }), k.jsx(cA, {}), k.jsxs(Qk, {
                children: [k.jsx(uf, {
                    path: "/",
                    element: k.jsxs(He.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        children: [k.jsx(rL, {}), k.jsxs("main", {
                            className: "container mx-auto px-4 py-12",
                            children: [k.jsxs(He.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                className: "text-center mb-12",
                                children: [k.jsx("h2", {
                                    className: "text-4xl font-bold text-gray-900 mb-4",
                                    children: "Notre Collection"
                                }), k.jsx("p", {
                                    className: "text-xl text-gray-600",
                                    children: "Découvrez nos polos de luxe et précommandez dès maintenant"
                                })]
                            }), k.jsx(u3, {
                                onSelect: a => {
                                    t(a),
                                    r(!0)
                                }
                            })]
                        })]
                    })
                }), k.jsx(uf, {
                    path: "/team",
                    element: k.jsx(He.div, {
                        initial: {
                            opacity: 0,
                            x: 100
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        exit: {
                            opacity: 0,
                            x: -100
                        },
                        children: k.jsx(e3, {})
                    })
                })]
            }), e && k.jsx(tL, {
                polo: e,
                isOpen: n,
                onClose: () => r(!1)
            })]
        })
    })
}
n1(document.getElementById("root")).render(k.jsx(S.StrictMode, {
    children: k.jsx(c3, {})
}));
