/*
	Copyright 2022 Michael Dayah - All Rights Reserved.
	Ptable® is a registered trademark of Michael Dayah
	Electronic redistribution in any form is strictly prohibited.

	Learn from this clean, library-free, framework-free code,
	but use what you learn to create something original.
*/
const e = e=>document.getElementById(e);
function t(e, t) {
    if (void 0 === e) {
        const e = this.map((e=>e[t]));
        if (e.filter(Boolean).length)
            return e
    } else {
        if (void 0 === t)
            return this[e];
        if (e)
            return this[e][t]
    }
}
async function n(e, n) {
    const a = window.PropertiesURL;
    this.in_progress || (this.property_fetcher = new Promise(((e,t)=>fetch(a).then((e=>{
        if (e.ok)
            return e.json();
        throw Error(e)
    }
    )).then((t=>e(t))).catch(reportError)))),
    this.in_progress = !0;
    const o = await this.property_fetcher;
    return this.cached_properties = this.cached_properties.map(((e,t)=>Object.assign(this.cached_properties[t], o[t]))),
    t.call(this.cached_properties, e, n)
}
function a(e, a) {
    const o = t.call(this.cached_properties, e, a);
    return void 0 === o ? n.call(this, e, a) : new Promise(((e,t)=>e(o)))
}
function o(e, n, a) {
    const o = this.isotope_properties[e];
    if (o)
        return t.call(o, n, a)
}
let i = new class {
    constructor() {
        var t, n, a;
        navigator.language.split("-")[0] == document.documentElement.lang.split("-")[0] ? (this.locale = navigator.language,
        document.documentElement.lang = this.locale) : this.locale = document.documentElement.lang,
        this.atomic_map = function() {
            const e = document.querySelectorAll("ol > li:not([id])");
            return new Map([...e].map(((e,t)=>[t + 1, e])))
        }(),
        this.local_states = function() {
            const e = [];
            return document.querySelectorAll("#StateOfMatter > div > dd").forEach((t=>e[t.previousElementSibling.classList.value] = t.textContent)),
            e
        }(),
        this.local_series = function() {
            const e = [];
            return document.querySelectorAll("#Series > *").forEach((t=>e[t.classList.value] = t.textContent)),
            e
        }(),
        this.local_decaymodes = function() {
            const e = [];
            return document.querySelectorAll("#DecayModes > * > dt").forEach((t=>t.classList.forEach((n=>e[n] = t.nextElementSibling.textContent)))),
            e
        }(),
        this.cached_properties = [],
        t = this.atomic_map,
        n = this.cached_properties,
        a = this.locale,
        t.forEach(((e,t)=>{
            e.dataset.atomic = t,
            n[t] = {},
            n[t].symbol = e.children[1].textContent,
            e.children[0].textContent = t.toLocaleString(a);
            let o = e.children[3].dataset.abridged;
            const i = o.replace(/\./, "").length
              , r = {
                style: "decimal",
                useGrouping: !0,
                minimumSignificantDigits: i,
                maximumSignificantDigits: i
            };
            o = Number(o).toLocaleString(a, r),
            e.children[3].dataset.unstable && (o = `(${o})`),
            e.children[3].textContent = o,
            n[t].abridged = o,
            n[t].name = e.children[2].textContent;
            const s = /(Solid|Liquid|Gas|UnknownState)/.exec(e.classList.value)[0];
            n[t].state = {
                C: s,
                K: s,
                F: s
            },
            n[t].wiki = e.dataset.wiki || n[t].name,
            e.tabIndex = 0
        }
        )),
        e("Parentheses").dataset.default = e("Parentheses").textContent,
        document.querySelectorAll("[data-num]").forEach((e=>e.textContent = Number(e.dataset.num).toLocaleString(this.locale))),
        this.isotope_properties = [],
        this.activeProperty = ".Reset #Reset input:checked, .Property #Property input:checked, .Electron #Electron input:checked, .Isotope #Isotope input:checked, .Compound #Compound input:checked",
        this.hoverElement = new Event("hoverElement",{
            bubbles: !0
        }),
        this.activateElement = new Event("activateElement",{
            bubbles: !0
        }),
        this.deactivateElement = new Event("deactivateElement",{
            bubbles: !0
        }),
        this.changeProperty = new Event("changeProperty",{
            bubbles: !0
        }),
        this.recolorTable = new Event("recolorTable",{
            bubbles: !0
        }),
        this.updateOutput = new Event("updateOutput"),
        this.syncThemes = new Event("syncThemes"),
        this.table_map = {
            traditional: [[1, , , , , , , , , , , , , , , , , 2], [3, 4, , , , , , , , , , , 5, 6, 7, 8, 9, 10], [11, 12, , , , , , , , , , , 13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54], [55, 56, , 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86], [87, 88, , 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118], [], [, , , 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71], [, , , 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]],
            wide: [[1, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 2], [3, 4, , , , , , , , , , , , , , , , , , , , , , , , , 5, 6, 7, 8, 9, 10], [11, 12, , , , , , , , , , , , , , , , , , , , , , , , , 13, 14, 15, 16, 17, 18], [19, 20, , , , , , , , , , , , , , , 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], [37, 38, , , , , , , , , , , , , , , 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54], [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86], [87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118]]
        }
    }
    value(e, t, n) {
        return !1 !== t && "isotopes" !== n && document.querySelector(`[name="isotopes"][value="${n}"]`) ? o.call(this, e, t, n) : a.call(this, e, n)
    }
    insert(e, t, n) {
        this.cached_properties[e][t] = n
    }
    insert_iso(e, t, n) {
        this.isotope_properties[e] || (this.isotope_properties[e] = []),
        this.isotope_properties[e][t] = n
    }
}
;
const r = e=>document.getElementById(e);
let s, c;
const l = {
    to: {
        F: e=>1.8 * (e - 273.15) + 32,
        C: e=>e - 273.15,
        K: e=>e
    },
    from: {
        F: e=>5 / 9 * (e - 32) + 273.15,
        C: e=>e + 273.15,
        K: e=>e
    }
};
function u(e) {
    cancelAnimationFrame(c),
    c = requestAnimationFrame((()=>async function(e) {
        const t = e.target
          , n = (await i.value(void 0, void 0, "melt")).map(parseFloat)
          , a = (await i.value(void 0, void 0, "boil")).map(parseFloat);
        function o(e) {
            function t(e, t, n) {
                return n || t && !(e >= t) ? n && e >= n ? "Gas" : e >= t || !t ? "Liquid" : "Solid" : "UnknownState"
            }
            i.atomic_map.forEach(((o,r)=>{
                const s = t(e, n[r], a[r]);
                i.insert(r, "state", {
                    C: s,
                    K: s,
                    F: s
                }),
                o.classList.contains(s) || (o.classList.remove("Solid", "Liquid", "Gas", "UnknownState"),
                o.classList.add(s))
            }
            ))
        }
        r("Ptable").classList.add("Delay");
        const s = parseInt(t.value, 10);
        if (isNaN(s))
            return;
        [r("Celsius"), r("TempRange"), r("Fahrenheit"), r("Kelvin"), r("Temperature")].forEach((e=>{
            const n = l.from[t.dataset.unit](s);
            e.value = Math.round(l.to[e.dataset.unit](n))
        }
        )),
        o(parseFloat(r("Kelvin").value)),
        document.querySelector("input[value=state] + li > output").dispatchEvent(i.updateOutput),
        r("PropertyClass").classList.contains("state") && r("Property").dispatchEvent(i.changeProperty);
        (r("PropertyClass").classList.contains("melt") || r("PropertyClass").classList.contains("boil")) && document.querySelector("#Property input:checked").dispatchEvent(i.recolorTable)
    }(e)))
}
function d() {
    window.addEventListener("pointerup", (function e() {
        clearInterval(s),
        window.removeEventListener("pointerup", e)
    }
    ));
    const e = this.closest(".Slider").querySelector('input[type="range"]');
    e.value = Number(e.value) + Number(this.dataset.skip),
    s = setTimeout((()=>d.call(this)), 25),
    e.dispatchEvent(new Event("input"))
}
function m() {
    r("TempRange").value = 0,
    r("TempRange").dispatchEvent(new Event("input"))
}
r("Temperature").oninput = r("TempRange").oninput = r("Celsius").oninput = r("Fahrenheit").oninput = r("Kelvin").oninput = u,
r("TempAdd").addEventListener("pointerdown", d),
r("TempSub").addEventListener("pointerdown", d),
document.querySelector("#SliderTemp > label").onclick = m,
document.querySelector("#ResetTab + label").addEventListener("click", m);
const p = document.documentElement.dataset.wiki
  , h = {
    electrons: function(e, t) {
        switch (t) {
        case "weight":
            const t = 3;
            e.length > t && (e = e.slice(-1 * t)).unshift("-"),
            e = f(e = e.map((e=>e.toLocaleString(i.locale))), "narrow");
            break;
        case "aside":
            e = f(e = e.map((e=>e.toLocaleString(i.locale))), "short");
            break;
        case "gradient":
        case "search":
            (e = e.slice(-1))[0] > 8 && (e = 0)
        }
        return e
    },
    name: function(e, t) {
        switch (t) {
        case "aside":
            e = `<a>${e}</a>`,
            e = document.createRange().createContextualFragment(e);
            break;
        case "weight":
            const t = document.querySelector("input[value='name'] + li > select").textContent;
            e = `<a href="https://${p}.wikipedia.org/wiki/${e}" tabindex="-1">${t}</a>`,
            e = document.createRange().createContextualFragment(e);
            break;
        case "gradient":
            e = "Wikipedia"
        }
        return e
    },
    state: function(e, t) {
        switch (t) {
        case "aside":
        case "search":
        case "weight":
            e = i.local_states[e]
        }
        return e
    },
    series: function(e, t) {
        if ("aside" === t)
            e = i.local_series[e];
        return e
    },
    isoname: function(e, t) {
        switch (t) {
        case "aside":
            e = `<a>${e || ""}</a>`,
            e = document.createRange().createContextualFragment(e);
            break;
        case "weight":
            const t = document.querySelector("input[value='isoname'] + li > select").textContent;
            e = `<a href="https://${p}.wikipedia.org/wiki/${e}" tabindex="-1">${t}</a>`,
            e = document.createRange().createContextualFragment(e)
        }
        return e
    },
    halflife: function(e, t) {
        if (null == e)
            return e;
        switch (t) {
        case "search":
            e = "Infinity" === e.raw ? Number.POSITIVE_INFINITY : e.converted;
            break;
        case "aside":
            e = "Infinity" === e.raw ? "Stable" : e.converted;
            break;
        case "weight":
            e = "Infinity" === e.raw ? "Stable" : `${e.converted} ${e.unit}`;
            break;
        case "gradient":
            e = "Infinity" === e.raw ? "MAX" : e.raw
        }
        return e
    },
    decaymode: function(e, t) {
        switch (t) {
        case "aside":
        case "weight":
            i.local_decaymodes[e] ? e = i.local_decaymodes[e] : e && (e = e.split(/(?=[A-Z])/).join(" "))
        }
        return e
    },
    oxidation: function(e, t) {
        if (void 0 === e)
            return e;
        switch (t) {
        case "search":
            e = e.split(",").filter((e=>"c" === e.slice(-1))).map((e=>e.replace("c", ""))).join(",");
            break;
        case "weight":
            e = f(e = e.split(",").filter((e=>"c" === e.slice(-1))).map((e=>Number(e.slice(0, -1)).toLocaleString(i.locale))), "narrow");
            break;
        case "aside":
            e = f(e = e.split(",").map((e=>"c" === e.slice(-1) ? "<b>" + Number(e.slice(0, -1)).toLocaleString(i.locale) + "</b>" : Number(e).toLocaleString(i.locale))), "short"),
            e = document.createRange().createContextualFragment(e)
        }
        return e
    },
    quantum: function(e, t) {
        switch (t) {
        case "search":
            e = `l=${e.l},m=${e.m},n=${e.n}`;
            break;
        case "aside":
            e = f(e = [`\u{1d459}=${e.l.toLocaleString(i.locale)}`, `\u{1d45a}=${e.m.toLocaleString(i.locale)}`, `\u{1d45b}=${e.n.toLocaleString(i.locale)}`], "short");
            break;
        case "weight":
            e = f(e = [`\u{1d459}${e.l.toLocaleString(i.locale)}`, `\u{1d45a}${e.m.toLocaleString(i.locale)}`, `\u{1d45b}${e.n.toLocaleString(i.locale)}`], "narrow")
        }
        return e
    },
    electronstring: function(e, t) {
        switch (t) {
        case "weight":
            e = e.split("]").pop().split(" ").slice(-2).join(" ");
            break;
        case "aside":
            e = e.split(" ").map((e=>e.replace(/[spdf]\d+/, (e=>g(e, "sup"))))).join(" "),
            e = document.createRange().createContextualFragment(e);
            break;
        case "gradient":
            e = e.split(" ").slice(-1)[0].split(/[spdf]/)[1]
        }
        return e
    },
    expandedconfig: function(e, t) {
        let n;
        switch (t) {
        case "weight":
            e = e.split(" ").slice(-2).join(" ");
            break;
        case "aside":
            n = b(e),
            e = e.split(" ").map(((e,t)=>e === n[t] ? e : `<b>${e}</b>`)).map((e=>e.replace(/[spdf]\d+/, (e=>g(e, "sup"))))).join(" "),
            e = document.createRange().createContextualFragment(e);
            break;
        case "gradient":
            n = b(e),
            e = e.split(" ").map(((e,t)=>e !== n[t])).some(Boolean).toString()
        }
        return e
    },
    discover: function(e, t) {
        const n = new Date(Number(e),0,1);
        switch (t) {
        case "weight":
            e = n.toLocaleString(i.locale, {
                year: "numeric",
                era: "narrow"
            });
            break;
        case "aside":
            e = n.toLocaleString(i.locale, {
                year: "numeric",
                era: "short"
            })
        }
        return e
    },
    isotopes: function(e, t) {
        if ("gradient" === t)
            if (e)
                return "MATCHES";
        return e
    },
    compounds: function(e, t) {
        if ("gradient" === t)
            if (e)
                return "MATCHES";
        return e
    }
};
function f(e, t) {
    if ("ListFormat"in Intl)
        return new Intl.ListFormat(i.locale,{
            type: "unit",
            style: t
        }).format(e);
    {
        const n = {
            short: ", ",
            narrow: " "
        };
        return e.join(n[t])
    }
}
function g(e, t) {
    const n = {
        sup: {
            0: 8304,
            1: 185,
            2: 178,
            3: 179,
            4: 8308,
            5: 8309,
            6: 8310,
            7: 8311,
            8: 8312,
            9: 8313,
            "+": 8314,
            "-": 8315
        },
        sub: {
            0: 8320,
            1: 8321,
            2: 8322,
            3: 8323,
            4: 8324,
            5: 8325,
            6: 8326,
            7: 8327,
            8: 8328,
            9: 8329,
            "+": 8330,
            "-": 8331
        }
    };
    return String(e).split("").map((e=>e in n[t] ? String.fromCodePoint(n[t][e]) : e)).join("")
}
function v(e, t, n={
    style: "decimal"
}) {
    const a = 1e-5
      , o = 1e6;
    ((e = Number(e)) < a && e > 0 || e > -1e-5 && e < 0 || e > o || e < -1e6) && (n.minimumSignificantDigits = n.maximumSignificantDigits = Math.min(t, 5),
    n.notation = "scientific");
    let r = e.toLocaleString(i.locale, n);
    const s = void 0 !== window.safari;
    return "scientific" === n.notation && s && (r = e.toExponential(t - 1)),
    r
}
function E(e, t, n) {
    const a = e.previousElementSibling.getElementsByTagName("select")[0];
    a && void 0 !== t && (t = t[a.value]);
    let o = function(e) {
        var t, n;
        if ("object" != typeof e && "undefined" !== e && (t = e,
        !isNaN(parseFloat(t)) && isFinite(t)))
            return 0 == (n = e) ? 1 : (n = String(n)).replace(/\+|-/, "").replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length
    }(t);
    const i = function(e) {
        return [...e.closest("li").querySelectorAll(":scope > select")].find((e=>"none" !== window.getComputedStyle(e).display))
    }(e);
    if (t = function(e, t) {
        const n = {
            C: e=>e - 273.15,
            F: e=>1.8 * (e - 273.15) + 32,
            eV: e=>.0103642688 * e,
            g: e=>e / 1e3,
            ppm: e=>1e4 * e,
            auto: e=>e,
            y: e=>e / 31556926,
            d: e=>e / 86400,
            h: e=>e / 3600,
            min: e=>e / 60,
            s: e=>1 * e,
            ms: e=>e / .001,
            \u00b5s: e=>e / 1e-6,
            ns: e=>e / 1e-9,
            ps: e=>e / 1e-12
        };
        return null != e && t?.value in n && (t.querySelector("[value=auto]") && "false" !== t.dataset.auto && (t.value = function(e) {
            const t = {
                y: 31556926,
                d: 86400,
                h: 3600,
                min: 60,
                s: 1,
                ms: .001,
                \u00b5s: 1e-6,
                ns: 1e-9,
                ps: 1e-12
            };
            for (let n in t)
                if (e >= t[n])
                    return n;
            return "ps"
        }(e)),
        e = t.classList.contains("Half-Life") ? {
            unit: t.value,
            converted: n[t.value](e),
            raw: e
        } : n[t.value](e)),
        e
    }(t, i),
    ["weight", "aside"].includes(n) && o && "true" !== e.dataset.passthrough) {
        "weight" === n && (o = Math.min(o, 7));
        const e = {
            minimumSignificantDigits: o,
            maximumSignificantDigits: o
        };
        "object" == typeof t ? t.converted = v(t.converted, o, e) : t = v(t, o, e)
    }
    const r = e.closest("li").previousElementSibling.value;
    return t = r in h ? h[r](t, n) : t
}
async function y(e, t) {
    let n, a;
    if ("isotopes" !== e.value && document.querySelector(`[name="isotopes"][value="${e.value}"]`)) {
        const e = document.querySelector("ol > li.Active");
        a = e ? e.dataset.atomic : 0;
        const t = document.querySelectorAll(`ol > li.Tope[data-atomic="${a}"]`);
        n = new Map([...t].map((e=>[Number(e.dataset.neutrons), e])))
    } else
        n = i.atomic_map;
    const o = {
        series: "abridged"
    }[e.value] || e.value
      , r = e.nextElementSibling.querySelector("li > output");
    let s = await i.value(a, void 0, o);
    return s || (s = []),
    new Map([...n].map((([e,n])=>[n, E(r, s[e], t)])))
}
function b(e) {
    let t = e.split(" ").reduce(((e,t)=>e + Number(t.replace(/^\d+[spdf](\d+)$/, "$1"))), 0);
    const n = [];
    for (let e = 1; e <= 8; e++)
        for (let t = Math.floor((e - 1) / 2), a = e - t; t >= 0; t--,
        a++)
            n.push({
                n: a,
                l: t
            });
    const a = n.map((e=>{
        const n = 4 * e.l + 2
          , a = Math.min(n, t);
        return t -= a,
        a
    }
    )).filter(Boolean)
      , o = ["s", "p", "d", "f"];
    return a.map(((e,t)=>n[t].n + o[n[t].l] + e))
}
const w = e=>document.getElementById(e)
  , L = document.documentElement.dataset.wiki;
let S;
async function C(e) {
    const t = e.target;
    w("CloseUp").className = t.classList[0],
    w("CloseUp").classList.toggle("Tope", t.classList.contains("Tope"));
    const n = Number(t.dataset.atomic)
      , a = await i.value(n)
      , o = w("CloseUp");
    if (o.getElementsByTagName("b")[0].textContent = n.toLocaleString(i.locale),
    o.getElementsByTagName("abbr")[0].replaceWith(t.getElementsByTagName("abbr")[0].cloneNode(!0)),
    o.querySelector("em > a").textContent = a.name,
    o.getElementsByTagName("em")[0].style.cssText = t.getElementsByTagName("em")[0].style.cssText,
    t.classList.contains("Tope")) {
        const e = await i.value(t.dataset.atomic, t.dataset.neutrons, "isowiki");
        o.querySelector("em > a").href = `https://en.wikipedia.org/wiki/${e}`;
        const n = document.querySelector("#t_isomass + li > output")
          , a = await i.value(t.dataset.atomic, t.dataset.neutrons, "isomass");
        o.getElementsByTagName("data")[0].textContent = E(n, a, "weight")
    } else {
        let e = await i.value(n, void 0, "wiki");
        e = e.replace(/ /g, "_"),
        o.querySelector("em > a").href = `https://${L}.wikipedia.org/wiki/${e}`,
        o.getElementsByTagName("data")[0].textContent = a.abridged
    }
    if (a.electrons) {
        const e = o.getElementsByTagName("small")[0].children
          , t = a.electrons;
        [...e].forEach(((e,n)=>e.textContent = t[n] ? t[n].toLocaleString(i.locale) : "\xa0"))
    }
}
w("Ptable").addEventListener("hoverElement", (e=>{
    cancelAnimationFrame(S),
    S = requestAnimationFrame((()=>C(e)))
}
)),
w("Ptable").addEventListener("activateElement", C);
const x = document.domain.split(".")
  , T = x[x.length - 2]
  , N = String.fromCharCode(80, 84, 65, 66, 76, 69);
T?.toLowerCase() !== N.toLowerCase() && Math.random() < .1 && (reportError({
    name: "Spacer",
    message: document.domain
}),
(new Image).src = "//" + N + "." + String.fromCharCode(67, 79, 77) + "/favicon.ico?");
const k = e=>document.getElementById(e)
  , $ = document.documentElement.dataset.wiki
  , q = {
    atomic: !1,
    isotope: !1
};
let P;
function A(e) {
    const t = e.target;
    q.atomic = Number(t.dataset.atomic),
    q.isotope = !!t.classList.contains("Tope") && Number(t.dataset.neutrons),
    document.querySelectorAll("aside li > output").forEach((e=>e.dispatchEvent(i.updateOutput)))
}
function I() {
    this.closest("li").className = this.value;
    this.closest("label").nextElementSibling.dispatchEvent(i.updateOutput)
}
function M() {
    document.querySelectorAll(`select [value="${this.value}"]`).forEach((e=>{
        e.selected = !0;
        const t = e.closest("select").previousElementSibling
          , n = t.closest("li");
        n.previousElementSibling?.checked && n.closest("ul").dispatchEvent(i.changeProperty),
        t.dispatchEvent(i.updateOutput)
    }
    ))
}
function R() {
    const e = document.querySelector(".Temperature").value
      , t = k("SliderTemp").querySelector(`[data-unit="${e}"]`);
    k("Temperature").dataset.unit = e,
    k("Temperature").setAttribute("max", t.getAttribute("max")),
    k("Temperature").setAttribute("min", t.getAttribute("min")),
    k("TempRange").dispatchEvent(new Event("input"))
}
async function _() {
    const e = this.closest("li").previousElementSibling;
    if (e.disabled)
        return void (this.textContent = "");
    const t = E(this, await i.value(q.atomic, q.isotope, e.value), "aside");
    this.classList.toggle("Unknown", null == t),
    null == t ? this.textContent = "N/A" : "object" == typeof t ? (this.textContent = "",
    this.appendChild(t)) : this.textContent = t
}
async function F() {
    let e = await i.value(q.atomic, void 0, "wiki");
    e = e.replace(/ /g, "_"),
    this.querySelector("a").href = `https://${$}.wikipedia.org/wiki/${e}`
}
async function B() {
    if (!q.isotope)
        return;
    const e = await i.value(q.atomic, q.isotope, "isowiki")
      , t = this.querySelector("a");
    t && (t.href = `https://en.wikipedia.org/wiki/${e}`)
}
function D(e) {
    if (["SELECT", "INPUT", "A"].includes(e.target.nodeName))
        return;
    const t = this.previousElementSibling
      , n = this.closest("li").querySelector("input:checked") !== t;
    t.disabled ? (k("Ptable").classList.add("FlashPlaceholder"),
    setTimeout((()=>k("Ptable").classList.remove("FlashPlaceholder")), 200)) : this.previousElementSibling.checked = !0,
    this.previousElementSibling.focus(),
    this.closest("ul").dispatchEvent(new CustomEvent("change",{
        detail: n
    }))
}
document.querySelectorAll("aside li").forEach((e=>e.addEventListener("click", D))),
document.querySelectorAll("aside label > select").forEach((e=>e.addEventListener("change", I))),
document.querySelectorAll("aside li > output").forEach((e=>e.addEventListener("updateOutput", _))),
k("Temperature").addEventListener("updateOutput", R),
k("AsideWriteup").addEventListener("updateOutput", F),
k("AsideWriteupIso").addEventListener("updateOutput", B),
document.querySelectorAll("aside li > select, .Temperature").forEach((e=>e.addEventListener("change", M))),
document.querySelector("aside li > select.Half-Life").addEventListener("change", (e=>e.target.dataset.auto = "auto" === e.target.value)),
k("Ptable").addEventListener("activateElement", A),
k("Ptable").addEventListener("hoverElement", (e=>{
    cancelAnimationFrame(P),
    P = requestAnimationFrame((()=>A(e)))
}
));
const O = {
    activate: function() {
        document.documentElement.classList.add("Reset")
    },
    cleanup: function() {
        document.documentElement.classList.remove("Reset")
    }
};
function j(e, t, n) {
    e.prototype = t.prototype = n,
    n.constructor = e
}
function U(e, t) {
    var n = Object.create(e.prototype);
    for (var a in t)
        n[a] = t[a];
    return n
}
function H() {}
var z = 1 / .7
  , W = "\\s*([+-]?\\d+)\\s*"
  , K = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*"
  , V = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
  , X = /^#([0-9a-f]{3,8})$/
  , G = new RegExp(`^rgb\\(${W},${W},${W}\\)$`)
  , Y = new RegExp(`^rgb\\(${V},${V},${V}\\)$`)
  , Z = new RegExp(`^rgba\\(${W},${W},${W},${K}\\)$`)
  , J = new RegExp(`^rgba\\(${V},${V},${V},${K}\\)$`)
  , Q = new RegExp(`^hsl\\(${K},${V},${V}\\)$`)
  , ee = new RegExp(`^hsla\\(${K},${V},${V},${K}\\)$`);
function te() {
    return this.rgb().formatHex()
}
function ne() {
    return this.rgb().formatRgb()
}
function ae(e) {
    var t, n, a;
    return e = (e + "").trim().toLowerCase(),
    (t = X.exec(e)) ? (n = t[1].length,
    t = parseInt(t[1], 16),
    6 === n ? new re((a = t) >> 16 & 255,a >> 8 & 255,255 & a,1) : 3 === n ? new re(t >> 8 & 15 | t >> 4 & 240,t >> 4 & 15 | 240 & t,(15 & t) << 4 | 15 & t,1) : 8 === n ? oe(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (255 & t) / 255) : 4 === n ? oe(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, ((15 & t) << 4 | 15 & t) / 255) : null) : (t = G.exec(e)) ? new re(t[1],t[2],t[3],1) : (t = Y.exec(e)) ? new re(255 * t[1] / 100,255 * t[2] / 100,255 * t[3] / 100,1) : (t = Z.exec(e)) ? oe(t[1], t[2], t[3], t[4]) : (t = J.exec(e)) ? oe(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = Q.exec(e)) ? me(t[1], t[2] / 100, t[3] / 100, 1) : (t = ee.exec(e)) ? me(t[1], t[2] / 100, t[3] / 100, t[4]) : "transparent" === e ? new re(NaN,NaN,NaN,0) : null
}
function oe(e, t, n, a) {
    return a <= 0 && (e = t = n = NaN),
    new re(e,t,n,a)
}
function ie(e) {
    return e instanceof H || (e = ae(e)),
    e ? new re((e = e.rgb()).r,e.g,e.b,e.opacity) : new re
}
function re(e, t, n, a) {
    this.r = +e,
    this.g = +t,
    this.b = +n,
    this.opacity = +a
}
function se() {
    return `#${de(this.r)}${de(this.g)}${de(this.b)}`
}
function ce() {
    const e = le(this.opacity);
    return `${1 === e ? "rgb(" : "rgba("}${ue(this.r)}, ${ue(this.g)}, ${ue(this.b)}${1 === e ? ")" : `, ${e})`}`
}
function le(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
}
function ue(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0))
}
function de(e) {
    return ((e = ue(e)) < 16 ? "0" : "") + e.toString(16)
}
function me(e, t, n, a) {
    return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN),
    new he(e,t,n,a)
}
function pe(e) {
    if (e instanceof he)
        return new he(e.h,e.s,e.l,e.opacity);
    if (e instanceof H || (e = ae(e)),
    !e)
        return new he;
    if (e instanceof he)
        return e;
    var t = (e = e.rgb()).r / 255
      , n = e.g / 255
      , a = e.b / 255
      , o = Math.min(t, n, a)
      , i = Math.max(t, n, a)
      , r = NaN
      , s = i - o
      , c = (i + o) / 2;
    return s ? (r = t === i ? (n - a) / s + 6 * (n < a) : n === i ? (a - t) / s + 2 : (t - n) / s + 4,
    s /= c < .5 ? i + o : 2 - i - o,
    r *= 60) : s = c > 0 && c < 1 ? 0 : r,
    new he(r,s,c,e.opacity)
}
function he(e, t, n, a) {
    this.h = +e,
    this.s = +t,
    this.l = +n,
    this.opacity = +a
}
function fe(e) {
    return (e = (e || 0) % 360) < 0 ? e + 360 : e
}
function ge(e) {
    return Math.max(0, Math.min(1, e || 0))
}
function ve(e, t, n) {
    return 255 * (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t)
}
j(H, ae, {
    copy(e) {
        return Object.assign(new this.constructor, this, e)
    },
    displayable() {
        return this.rgb().displayable()
    },
    hex: te,
    formatHex: te,
    formatHex8: function() {
        return this.rgb().formatHex8()
    },
    formatHsl: function() {
        return pe(this).formatHsl()
    },
    formatRgb: ne,
    toString: ne
}),
j(re, (function(e, t, n, a) {
    return 1 === arguments.length ? ie(e) : new re(e,t,n,null == a ? 1 : a)
}
), U(H, {
    brighter(e) {
        return e = null == e ? z : Math.pow(z, e),
        new re(this.r * e,this.g * e,this.b * e,this.opacity)
    },
    darker(e) {
        return e = null == e ? .7 : Math.pow(.7, e),
        new re(this.r * e,this.g * e,this.b * e,this.opacity)
    },
    rgb() {
        return this
    },
    clamp() {
        return new re(ue(this.r),ue(this.g),ue(this.b),le(this.opacity))
    },
    displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
    },
    hex: se,
    formatHex: se,
    formatHex8: function() {
        return `#${de(this.r)}${de(this.g)}${de(this.b)}${de(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`
    },
    formatRgb: ce,
    toString: ce
})),
j(he, (function(e, t, n, a) {
    return 1 === arguments.length ? pe(e) : new he(e,t,n,null == a ? 1 : a)
}
), U(H, {
    brighter(e) {
        return e = null == e ? z : Math.pow(z, e),
        new he(this.h,this.s,this.l * e,this.opacity)
    },
    darker(e) {
        return e = null == e ? .7 : Math.pow(.7, e),
        new he(this.h,this.s,this.l * e,this.opacity)
    },
    rgb() {
        var e = this.h % 360 + 360 * (this.h < 0)
          , t = isNaN(e) || isNaN(this.s) ? 0 : this.s
          , n = this.l
          , a = n + (n < .5 ? n : 1 - n) * t
          , o = 2 * n - a;
        return new re(ve(e >= 240 ? e - 240 : e + 120, o, a),ve(e, o, a),ve(e < 120 ? e + 240 : e - 120, o, a),this.opacity)
    },
    clamp() {
        return new he(fe(this.h),ge(this.s),ge(this.l),le(this.opacity))
    },
    displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
    },
    formatHsl() {
        const e = le(this.opacity);
        return `${1 === e ? "hsl(" : "hsla("}${fe(this.h)}, ${100 * ge(this.s)}%, ${100 * ge(this.l)}%${1 === e ? ")" : `, ${e})`}`
    }
}));
const Ee = Math.PI / 180
  , ye = 180 / Math.PI
  , be = 4 / 29
  , we = 6 / 29
  , Le = 3 * we * we;
function Se(e) {
    if (e instanceof xe)
        return new xe(e.l,e.a,e.b,e.opacity);
    if (e instanceof Pe)
        return Ae(e);
    e instanceof re || (e = ie(e));
    var t, n, a = $e(e.r), o = $e(e.g), i = $e(e.b), r = Te((.2225045 * a + .7168786 * o + .0606169 * i) / 1);
    return a === o && o === i ? t = n = r : (t = Te((.4360747 * a + .3850649 * o + .1430804 * i) / .96422),
    n = Te((.0139322 * a + .0971045 * o + .7141733 * i) / .82521)),
    new xe(116 * r - 16,500 * (t - r),200 * (r - n),e.opacity)
}
function Ce(e, t, n, a) {
    return 1 === arguments.length ? Se(e) : new xe(e,t,n,null == a ? 1 : a)
}
function xe(e, t, n, a) {
    this.l = +e,
    this.a = +t,
    this.b = +n,
    this.opacity = +a
}
function Te(e) {
    return e > .008856451679035631 ? Math.pow(e, 1 / 3) : e / Le + be
}
function Ne(e) {
    return e > we ? e * e * e : Le * (e - be)
}
function ke(e) {
    return 255 * (e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055)
}
function $e(e) {
    return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
}
function qe(e) {
    if (e instanceof Pe)
        return new Pe(e.h,e.c,e.l,e.opacity);
    if (e instanceof xe || (e = Se(e)),
    0 === e.a && 0 === e.b)
        return new Pe(NaN,0 < e.l && e.l < 100 ? 0 : NaN,e.l,e.opacity);
    var t = Math.atan2(e.b, e.a) * ye;
    return new Pe(t < 0 ? t + 360 : t,Math.sqrt(e.a * e.a + e.b * e.b),e.l,e.opacity)
}
function Pe(e, t, n, a) {
    this.h = +e,
    this.c = +t,
    this.l = +n,
    this.opacity = +a
}
function Ae(e) {
    if (isNaN(e.h))
        return new xe(e.l,0,0,e.opacity);
    var t = e.h * Ee;
    return new xe(e.l,Math.cos(t) * e.c,Math.sin(t) * e.c,e.opacity)
}
j(xe, Ce, U(H, {
    brighter(e) {
        return new xe(this.l + 18 * (null == e ? 1 : e),this.a,this.b,this.opacity)
    },
    darker(e) {
        return new xe(this.l - 18 * (null == e ? 1 : e),this.a,this.b,this.opacity)
    },
    rgb() {
        var e = (this.l + 16) / 116
          , t = isNaN(this.a) ? e : e + this.a / 500
          , n = isNaN(this.b) ? e : e - this.b / 200;
        return new re(ke(3.1338561 * (t = .96422 * Ne(t)) - 1.6168667 * (e = 1 * Ne(e)) - .4906146 * (n = .82521 * Ne(n))),ke(-.9787684 * t + 1.9161415 * e + .033454 * n),ke(.0719453 * t - .2289914 * e + 1.4052427 * n),this.opacity)
    }
})),
j(Pe, (function(e, t, n, a) {
    return 1 === arguments.length ? qe(e) : new Pe(e,t,n,null == a ? 1 : a)
}
), U(H, {
    brighter(e) {
        return new Pe(this.h,this.c,this.l + 18 * (null == e ? 1 : e),this.opacity)
    },
    darker(e) {
        return new Pe(this.h,this.c,this.l - 18 * (null == e ? 1 : e),this.opacity)
    },
    rgb() {
        return Ae(this).rgb()
    }
}));
function Ie(e, t) {
    var n, a = t - e;
    return a ? function(e, t) {
        return function(n) {
            return e + n * t
        }
    }(e, a) : (n = isNaN(e) ? t : e,
    ()=>n)
}
function Me(e, t) {
    var n = Ie((e = Ce(e)).l, (t = Ce(t)).l)
      , a = Ie(e.a, t.a)
      , o = Ie(e.b, t.b)
      , i = Ie(e.opacity, t.opacity);
    return function(t) {
        return e.l = n(t),
        e.a = a(t),
        e.b = o(t),
        e.opacity = i(t),
        e + ""
    }
}
const Re = e=>document.getElementById(e)
  , _e = /var\((.*)\)/;
function Fe(e) {
    const t = e.target.name.toLowerCase()
      , n = e.target.value
      , a = Re("Property").querySelector("input:checked");
    if (a) {
        const e = Be(a, t);
        e && (e[t] = n),
        a.dispatchEvent(i.recolorTable)
    }
}
function Be(e, t) {
    if (!(e = e.closest(`[data-${t}]`)))
        return !1;
    const n = e.nextElementSibling.querySelector("label > select option:checked");
    return n?.dataset[t] ? n.dataset : e.dataset
}
function De(e) {
    return _e.test(e) && (e = window.getComputedStyle(document.documentElement).getPropertyValue(_e.exec(e)[1])),
    ae(e || "#000000")
}
function Oe(e, t) {
    let n = {};
    return n.unknown = e.closest("[data-schemeunknown]").dataset.schemeunknown,
    e.dataset.schemestart && e.dataset.schemeend ? (n.start = e.dataset.schemestart,
    n.end = e.dataset.schemeend,
    n.scale = Be(e, "schemescale").schemescale,
    Re("SchemeStart").value = De(n.start).formatHex(),
    Re("SchemeEnd").value = De(n.end).formatHex(),
    Re("SchemeUnknown").value = De(n.unknown).formatHex(),
    Re("SchemeScale").querySelector(`input[value="${n.scale}"]`).checked = !0,
    Re("SchemeZero").closest("div").classList.add("Hide"),
    Re("SchemeScale").querySelector("#Logarithmic").disabled = e.dataset.schemezero,
    e.dataset.schemezero && (n.zero = e.dataset.schemezero,
    Re("SchemeZero").value = De(n.zero).formatHex(),
    Re("SchemeZero").closest("div").classList.remove("Hide")),
    function(e, t, n) {
        if (n) {
            const a = Number(Re("Kelvin").value) / Number(Re("Kelvin").max) * 100;
            Re("RangeGradient").style.background = `linear-gradient(to bottom, ${e}, ${n} ${a}%, ${t})`
        } else
            Re("RangeGradient").style.background = `linear-gradient(to bottom, ${e}, ${t})`
    }(n.start, n.end, n.zero),
    Re("UnknownSwatch").style.backgroundColor = n.unknown,
    function(e, t) {
        const n = {
            lin: e=>e,
            log: e=>Math.log(e),
            exp: e=>Math.exp(e)
        }[t.scale]
          , a = e.map(n)
          , o = Math.min(...a.filter((e=>!isNaN(e))).map((e=>isFinite(e) ? e : 0)))
          , i = Math.max(...a.filter((e=>!isNaN(e))).map((e=>isFinite(e) ? e : 0)));
        return function(e) {
            if (null == e)
                return t.unknown;
            if ("MAX" === e)
                return t.end;
            if ("MIN" === e || o === i)
                return t.start;
            if (e = n(e) === -1 / 0 ? o : n(e),
            t.zero) {
                const n = Number(Re("Temperature").value);
                if (e < n) {
                    const a = (e - o) / (n - o);
                    return Me(Ce(De(t.start)), Ce(De(t.zero)))(a)
                }
                {
                    const a = (e - n) / (i - n);
                    return Me(Ce(De(t.zero)), Ce(De(t.end)))(a)
                }
            }
            {
                const n = (e - o) / (i - o);
                return Me(Ce(De(t.start)), Ce(De(t.end)))(n)
            }
        }
    }(t, n)) : e.dataset.schemevalues ? function(e, t) {
        const n = new Map(e.dataset.schemevalues.split(",").map((e=>e.split("="))));
        return e=>void 0 === n.get(e) ? t : n.get(e)
    }(e, n.unknown) : ()=>""
}
async function je(e) {
    if (e.target !== this)
        return;
    const t = this.querySelector("input:checked")
      , n = await y(t, "weight")
      , a = t.dataset.help || Re("Parentheses").dataset.default;
    Re("PropertyClass").className = t.value,
    Re("Ptable").classList.add("Flash"),
    Re("Ptable").classList.toggle("FlashHelp", Re("Parentheses").textContent !== a),
    setTimeout((()=>Re("Ptable").classList.remove("Flash", "FlashHelp")), 200),
    setTimeout((()=>{
        n.forEach(((e,t)=>{
            const n = t.getElementsByTagName("data")[0];
            null == e ? n.textContent = "\xa0" : "object" == typeof e ? (n.textContent = "",
            n.appendChild(e)) : n.textContent = e
        }
        )),
        Re("Parentheses").textContent = a
    }
    ), 100),
    t.dispatchEvent(i.recolorTable)
}
async function Ue(e) {
    const t = e.target
      , n = await y(t, "gradient")
      , a = Oe(t, [...n.values()]);
    n.forEach(((e,t)=>{
        let n = a(e);
        t.style.backgroundColor = n,
        _e.test(n) && (n = window.getComputedStyle(t).getPropertyValue(_e.exec(n)[1]));
        const o = function(e) {
            if ("" === e)
                return e;
            const t = .1791;
            function n(e) {
                function t(e) {
                    return (e /= 255) <= .03928 ? e /= 12.92 : e = Math.pow((e + .055) / 1.055, 2.4),
                    e
                }
                return .2126 * t(e.r) + .7152 * t(e.g) + .0722 * t(e.b)
            }
            return n(ae(e).rgb()) > t ? "Black" : "White"
        }(n);
        t.classList.toggle("White", "White" === o),
        t.classList.toggle("Black", "Black" === o)
    }
    ))
}
Re("PropertyKey").addEventListener("input", Fe),
["Reset", "Property", "Electron", "Isotope", "Compound"].forEach((e=>{
    Re(e).addEventListener("changeProperty", je),
    Re(e).addEventListener("recolorTable", Ue)
}
));
const He = {
    activate: function() {
        document.documentElement.classList.add("Property")
    },
    cleanup: function() {
        (e=>document.getElementById(e))("PropertyClass").className = "",
        document.documentElement.classList.remove("Property")
    }
};
function ze(e, t, n) {
    let a;
    return function() {
        const o = ()=>{
            a = null,
            n || e.apply(this, arguments)
        }
          , i = n && !a;
        clearTimeout(a),
        a = setTimeout(o, t),
        i && e.apply(this, arguments)
    }
}
function We(e, t) {
    const n = t.findIndex((t=>t.includes(e)));
    return [t[n].indexOf(e), n]
}
const Ke = e=>document.getElementById(e);
let Ve, Xe, Ge;
function Ye() {
    Ve && et(Ve)
}
function Ze() {
    const e = [...this.parentNode.children].indexOf(this)
      , t = this.parentNode
      , n = [...t.parentNode.children].indexOf(t)
      , a = t.parentNode
      , o = [...a.parentNode.children].indexOf(a);
    return {
        l: o,
        m: e - o - 1,
        n: n + o + 1
    }
}
function Je() {
    const e = Ze.call(this)
      , t = document.querySelector(".Active");
    t && t.classList.remove("Active"),
    this.classList.add("Active"),
    et(e)
}
async function Qe(e) {
    const t = await i.value(e, void 0, "quantum");
    Je.call(function(e) {
        return Ke("ConfigBlocks").children[e.l].children[e.n - e.l - 1].children[e.m + e.l + 1]
    }(t))
}
const et = ze((e=>{
    const t = new CustomEvent("drawOrbital",{
        detail: e
    });
    document.documentElement.classList.contains("Electron") && window.dispatchEvent(t),
    Ve = e
}
), 300);
async function tt(e) {
    if (!document.documentElement.classList.contains("Electron"))
        return void (Ge = e);
    const t = Number(e.target.dataset.atomic);
    !function(e) {
        const t = e=>Number(e.match(/[spdf](\d+)$/)[1]);
        function n(e, t) {
            const n = e.length;
            for (let a = 0; a < 2 * n; a++)
                a < n ? e[a % n].classList.toggle("One", t > a) : e[a % n].classList.toggle("Two", t > a)
        }
        const a = new Map(e.map((e=>[e.substr(0, 2), t(e)])));
        Ke("ConfigBlocks").querySelectorAll("#ConfigBlocks > div > div").forEach((e=>{
            const t = a.get(e.firstElementChild.textContent);
            n(e.querySelectorAll("div"), t || 0)
        }
        ))
    }((await i.value(t, void 0, "expandedconfig")).split(" ")),
    Qe(t)
}
const nt = {
    activate: function() {
        import("./orbital-b717169f.js").catch(reportError),
        document.documentElement.classList.add("Electron"),
        Ge && tt(Ge),
        Ye()
    },
    cleanup: function() {
        Ke("PropertyClass").className = "";
        const e = new CustomEvent("stopOrbital");
        window.dispatchEvent(e),
        document.documentElement.classList.remove("Electron")
    }
};
Ke("Ptable").addEventListener("hoverElement", (e=>{
    cancelAnimationFrame(Xe),
    Xe = requestAnimationFrame((()=>tt(e)))
}
)),
Ke("Ptable").addEventListener("activateElement", tt),
Ke("DarkButton").addEventListener("change", Ye),
Ke("ConfigBlocks").querySelectorAll(":scope > div > div > div").forEach((e=>{
    e.tabIndex = 0,
    e.addEventListener("focus", Je)
}
));
const at = e=>document.getElementById(e)
  , ot = document.getElementsByTagName("main")[0];
let it, rt;
function st() {
    const e = document.querySelector("ol > li.Active");
    e && e.dispatchEvent(new Event("pointerdown"))
}
const ct = ze((()=>at("Ptable").classList.remove("Tilt")), 1e3);
function lt(e) {
    if (e.target.classList.contains("Tope"))
        return;
    const t = Number(e.target.dataset.atomic);
    e.target.classList.add("Loading");
    const n = `/JSON/isotope/${t}.json`;
    at("Ptable").classList.add("Fanned", "Tilt"),
    fetch(n).then((e=>{
        if (e.ok)
            return e.json();
        throw Error(e)
    }
    )).then((t=>dt.call(e.target, t))).catch((e=>{
        reportError(e),
        st()
    }
    )).finally((()=>{
        e.target.classList.remove("Loading"),
        ct()
    }
    ))
}
function ut(e) {
    if (e.target.classList.contains("Tope"))
        return;
    const t = e.target.dataset.atomic
      , n = document.querySelectorAll(`ol > li.Tope[data-atomic="${t}"]`);
    if (n.forEach((e=>{
        e.addEventListener("transitionend", e.remove),
        e.style.removeProperty("--offset")
    }
    )),
    n.length) {
        const e = Number(n[0].dataset.atomic);
        i.atomic_map.get(e).dispatchEvent(i.hoverElement)
    }
    at("Ptable").classList.remove("Fanned")
}
function dt(e) {
    const t = Number(this.dataset.atomic);
    for (let n = e.length - 1; n >= 0; n--) {
        const a = this.cloneNode(!0);
        a.classList.add("Tope", e[n].decaymode),
        a.classList.remove("Active", "Loading");
        const o = e[n].neutrons + t
          , r = at("IsotopeSymbol");
        r.content.querySelector("sup").textContent = o,
        r.content.querySelector("sub").textContent = t;
        const s = document.importNode(r.content, !0);
        s.querySelector("abbr").insertAdjacentText("beforeend", a.children[1].textContent),
        a.replaceChild(s, a.children[1]),
        e[n].isoname = a.children[2].textContent + "-" + o,
        i.insert_iso(t, e[n].neutrons, e[n]),
        a.dataset.neutrons = e[n].neutrons,
        gt(a),
        this.insertAdjacentElement("afterend", a),
        a.style.setProperty("--offsetFinal", n + 1),
        a.addEventListener("pointerenter", (()=>clearTimeout(it))),
        a.addEventListener("pointerleave", (()=>{
            document.querySelector("ol > li.Active.Tope") || (it = setTimeout(ht, 300))
        }
        ))
    }
    !function(e, t) {
        function n(e) {
            cancelAnimationFrame(rt),
            rt = requestAnimationFrame((()=>s(e)))
        }
        const a = 1.1 * t[0].offsetWidth;
        let o = !1
          , i = !1;
        function r(t) {
            if (t.target.closest(".isoname"))
                return;
            document.addEventListener("pointermove", n),
            document.addEventListener("pointerup", c);
            const a = t.target.closest(".Tope");
            if (a) {
                o = {},
                o.index = a.style.getPropertyValue("--offset");
                const n = e.getBoundingClientRect();
                o.X = n.left + t.offsetX,
                o.Y = n.top + t.offsetY
            }
        }
        function s(e) {
            if (!o)
                return;
            i = !0;
            const t = Math.max(Math.min((e.clientX - o.X) / o.index, a), -1 * a)
              , n = Math.max(Math.min((e.clientY - o.Y) / o.index, a), -1 * a)
              , r = document.querySelector("ol.Fanned");
            r && (r.style.setProperty("--shiftX", `${t}px`),
            r.style.setProperty("--shiftY", `${n}px`))
        }
        function c(e) {
            document.removeEventListener("pointermove", n),
            document.removeEventListener("pointerup", c),
            i && e.target.dispatchEvent(new Event("pointerdown")),
            o = i = !1
        }
        t.forEach((e=>e.addEventListener("pointerdown", r)))
    }(this, document.querySelectorAll("ol > li.Tope")),
    document.querySelectorAll(`ol > li.Tope[data-atomic="${t}"]`).forEach((e=>e.style.setProperty("--offset", e.style.getPropertyValue("--offsetFinal")))),
    at("Isotope").dispatchEvent(i.changeProperty)
}
async function mt(e) {
    e.target.classList.contains("Tope") && (ot.className = await i.value(e.target.dataset.atomic, e.target.dataset.neutrons, "decaymode"))
}
function pt() {
    ot.className = this.getElementsByTagName("dt")[0].className
}
function ht() {
    ot.className = ot.dataset.default
}
function ft() {
    [...at("Ptable").getElementsByClassName("Tope")].forEach((e=>gt(e)))
}
function gt(e) {
    const t = We(Number(e.dataset.atomic), at("Wide").checked ? i.table_map.wide : i.table_map.traditional);
    !1 !== t && function(e, t) {
        this.style.gridColumnStart = e + 1 + 1,
        this.style.gridRowStart = t + 1 + 1
    }
    .call(e, ...t)
}
const vt = {
    activate: function() {
        document.documentElement.classList.add("Isotope"),
        st(),
        at("Ptable").addEventListener("activateElement", lt),
        at("Ptable").addEventListener("deactivateElement", ut),
        at("Ptable").addEventListener("hoverElement", mt)
    },
    cleanup: function() {
        st(),
        at("Ptable").removeEventListener("activateElement", lt),
        at("Ptable").removeEventListener("deactivateElement", ut),
        document.documentElement.classList.remove("Isotope")
    }
};
ot.dataset.default = ot.className,
document.querySelectorAll("#DecayModes > div").forEach((e=>e.addEventListener("pointerenter", pt))),
at("DecayModes").addEventListener("pointerleave", ht),
at("Wide").addEventListener("change", ft),
at("RemoveIsotopes").addEventListener("click", st),
function() {
    const e = at("Isotope").querySelectorAll(':scope > input:not([value="isotopes"])')
      , t = at("Isotope").querySelectorAll(':scope > input[value="isotopes"]')
      , n = (e,t)=>e.forEach((e=>e.disabled = !t));
    at("Ptable").addEventListener("activateElement", (a=>{
        a.target.classList.contains("Tope") || (n(e, !0),
        n(t, !1))
    }
    )),
    at("Ptable").addEventListener("deactivateElement", (a=>{
        a.target.classList.contains("Tope") || (n(e, !1),
        n(t, !0))
    }
    ))
}();
const Et = e=>document.getElementById(e)
  , yt = Et("CompoundResults")
  , bt = !window.matchMedia("(hover: none), (pointer: coarse)").matches;
let wt, Lt = [];
function St(e) {
    const t = e=>{
        e.dataTransfer.setData("text", e.currentTarget.dataset.atomic),
        e.dataTransfer.setData("element", "")
    }
    ;
    i.atomic_map.forEach((n=>{
        n.setAttribute("draggable", e),
        e ? (n.ondragstart = t,
        n.ondragend = ()=>Et("CompoundDragTarget").classList.remove("DragOver")) : n.ondragstart = n.ondragend = null
    }
    ))
}
function Ct(e) {
    const t = e.dataTransfer ? Number(e.dataTransfer.getData("text")) : Number(e.target.dataset.atomic)
      , n = Et("CompoundDragTarget").querySelector(`[data-atomic="${t}"]`);
    n && n.remove(),
    e.preventDefault && e.preventDefault()
}
async function xt(e) {
    function t(e, t) {
        if (e.dataset.count = Number(e.dataset.count) + t,
        e.dataset.count <= "-1") {
            Ct({
                target: e
            });
            const t = Number(e.dataset.atomic);
            i.atomic_map.get(t).dispatchEvent(new Event("pointerdown"))
        } else
            e.querySelector("abbr").dataset.count = e.dataset.count
    }
    e.preventDefault(),
    e.stopPropagation();
    const n = e.dataTransfer ? Number(e.dataTransfer.getData("text")) : Number(e.target.dataset.atomic)
      , a = Et("CompoundDragTarget")
      , o = a.querySelector(`[data-atomic="${n}"]`);
    if (!await i.value(n, void 0, "compounds")) {
        a.querySelectorAll("[data-atomic]").forEach((e=>e.remove()))
    }
    if (o)
        ;
    else {
        const e = Et("CompoundArrows")
          , a = document.importNode(e.content, !0);
        a.querySelector(".Up").addEventListener("click", (e=>t(e.currentTarget.closest("[data-atomic]"), 1))),
        a.querySelector(".Down").addEventListener("click", (e=>t(e.currentTarget.closest("[data-atomic]"), -1))),
        a.firstElementChild.dataset.atomic = n,
        a.firstElementChild.dataset.symbol = await i.value(n, void 0, "symbol"),
        a.firstElementChild.dataset.count = "0";
        const o = i.atomic_map.get(n).cloneNode(!0);
        o.style.backgroundColor = "",
        bt && (o.setAttribute("draggable", !0),
        o.ondragstart = function(e) {
            e.dataTransfer.setData("text", this.closest("[data-atomic]").dataset.atomic),
            e.dataTransfer.setData("element", ""),
            document.ondrop = Ct,
            document.ondragover = Tt
        }
        ,
        o.ondragend = function() {
            document.ondrop = document.ondragover = null,
            Et("CompoundDragTarget").classList.remove("DragOver")
        }
        ),
        a.firstElementChild.insertBefore(o, a.querySelector(".Down")),
        Et("CompoundDragTarget").appendChild(a)
    }
}
function Tt(e) {
    e.dataTransfer.types.includes("element") && e.preventDefault()
}
function Nt(e) {
    e && $t(yt, e.matches, e.totalresults, e.formula)
}
function kt(e) {
    for (; yt.lastChild; )
        yt.lastChild.remove();
    Object.keys(e).length || (e.counts = []);
    new Map([...i.atomic_map].map((([t,n])=>[n, e.counts[t]]))).forEach(((e,t)=>i.insert(t.dataset.atomic, "compounds", e))),
    $t(yt, e.matches, e.totalresults, e.formula),
    yt.scrollTop = 0,
    Et("Compound").dispatchEvent(i.changeProperty),
    Et("CompoundResults").classList.remove("Dim")
}
function $t(e, t=[], n, a) {
    function o() {
        if (wt === this)
            return;
        const e = this.ordered;
        for (let t = 0; t < Lt.length; t++)
            e.includes(Lt[t]);
        wt = this
    }
    const i = document.createDocumentFragment();
    var r;
    t.forEach((e=>{
        const t = document.createElement("li")
          , a = document.createElement("label")
          , r = document.createRange().createContextualFragment(function(e) {
            let t = e;
            return t = t.replace(/([A-Z][a-z]?)(\d+)/g, "$1<sub>$2</sub>"),
            t = t.replace(/\^(\d+)/g, "<sup>$1</sup>"),
            t = t.replace(/(\]|\))(n|\d+)/g, "$1<sub>$2</sub>"),
            t = t.replace(/x/g, "<i>x</i>"),
            t
        }(e.molecularformula));
        a.appendChild(r),
        t.appendChild(a);
        const s = e.allnames
          , c = e.articles;
        for (let e = 0; e < s.length; e++)
            if (0 === e || "" === c[0] && "" !== c[e] || 1 === n) {
                const n = document.createElement("a");
                "" !== c[e] && (n.href = `//en.wikipedia.org/wiki/${encodeURIComponent(c[e].replace(/ /g, "_"))}`),
                n.textContent = s[e],
                t.appendChild(n)
            }
        t.addEventListener("pointerenter", o);
        const l = e.ordered.split(",");
        for (let e = 0; e < l.length; e++)
            l[e] = parseInt(l[e], 10);
        t.ordered = l,
        i.appendChild(t)
    }
    )),
    e.appendChild(i),
    yt.getElementsByTagName("li").length < n && "IntersectionObserver"in window && (r = e.lastElementChild,
    new IntersectionObserver(Pt,{
        root: yt,
        threshold: .5
    }).observe(r))
}
function qt(e, t) {
    const n = Et("CompoundResults").dataset.query
      , a = [];
    n && a.push(`formula=${n}`),
    e && a.push(`offset=${e}`);
    let o = a.join("_");
    "" === o && (o = "DEFAULT"),
    fetch(`/JSON/compounds/${o}`).then((e=>e.ok ? e.json() : {})).catch((e=>(reportError(e),
    {}))).then((e=>{
        t(e)
    }
    ))
}
function Pt(e) {
    e[0].isIntersecting && (this.disconnect(),
    qt(yt.getElementsByTagName("li").length, Nt))
}
function At() {
    const e = [...document.querySelectorAll("#CompoundDragTarget > div")].map((e=>e.dataset.symbol + (Number(e.dataset.count) || "")));
    yt.classList.add("Dim"),
    yt.dataset.query = e.sort().join(""),
    qt(0, kt)
}
const It = {
    activate: function() {
        var e;
        if (document.documentElement.classList.add("Compound"),
        e = Et("CompoundDragTarget"),
        new MutationObserver(At).observe(e, {
            childList: !0
        }),
        At(),
        Et("Ptable").addEventListener("activateElement", xt),
        Et("Ptable").addEventListener("deactivateElement", Ct),
        bt) {
            St(!0);
            const e = Et("CompoundDragTarget");
            e.ondrop = xt,
            e.ondragover = Tt,
            e.ondragenter = ()=>e.classList.add("DragOver"),
            e.ondragleave = ()=>e.classList.remove("DragOver")
        }
    },
    cleanup: function() {
        Et("Ptable").removeEventListener("activateElement", xt),
        Et("Ptable").removeEventListener("deactivateElement", Ct);
        const e = Et("CompoundDragTarget");
        e.ondrop = e.ondragover = e.ondragenter = e.ondragleave = null,
        document.documentElement.classList.remove("Compound"),
        St(!1)
    }
}
  , Mt = e=>document.getElementById(e)
  , Rt = document.querySelector("title").textContent;
function _t(e) {
    function t(e) {
        const t = document.querySelector(`header a[href^="#${e}"]`);
        if (t) {
            return t.closest("label").previousElementSibling.id.replace(/Tab$/, "")
        }
    }
    function n(e) {
        return (e = e.split("#"))[1] ? e[1].split("/") : [""]
    }
    const a = {
        Reset: O,
        Property: He,
        Electron: nt,
        Isotope: vt,
        Compound: It
    }
      , o = n(e.oldURL)
      , r = t(o[0])
      , s = n(e.newURL);
    let c = t(s[0]);
    r !== c && ("Reset" !== r && "Reset" !== c || (document.documentElement.classList.add("SmoothResize"),
    document.getElementsByTagName("aside")[0].addEventListener("transitionend", jt)),
    a[c] ? (a[r] && a[r].cleanup(),
    Mt(`${c}Tab`).checked = !0,
    a[c].activate()) : c = document.querySelector('header input[name="Tab"]:checked').id.replace(/Tab$/, ""));
    const l = [Ft(c)];
    let u = [...Mt(c).querySelectorAll(':scope > input[type="radio"]')].find((e=>Ot(Dt(e)) === decodeURIComponent(s[1])));
    u && !u.disabled ? u.checked = !0 : (u = Mt(c).querySelector("input:enabled:checked"),
    u ? u.checked = !0 : Mt(c).querySelector("input:enabled").checked = !0,
    u = Mt(c).querySelector("input:enabled:checked")),
    l.push(Dt(u));
    const d = u.nextElementSibling.querySelector("label > select");
    if (d) {
        let e;
        s[2] && (e = [...d.options].find((e=>Ot(e.textContent) === decodeURIComponent(s[2])))),
        e ? e.checked = !0 : e = d.options[d.selectedIndex],
        d.value = e.value,
        l.push(e.textContent)
    }
    o.join("/") !== s.join("/") && (Ht(l),
    Mt(c).dispatchEvent(i.changeProperty))
}
function Ft(e) {
    return Mt(`${e}Tab`).nextElementSibling.querySelector("a").textContent
}
function Bt(e) {
    const t = this.querySelector("input:checked")
      , n = [Ft(e.currentTarget.id)];
    n.push(Dt(t));
    const a = t.nextElementSibling.querySelector("label > select");
    a && n.push(a.options[a.selectedIndex].text),
    _t({
        oldURL: window.location.hash,
        newURL: Ut(n)
    })
}
function Dt(e) {
    return e.nextElementSibling.getElementsByTagName("span")[0].textContent
}
function Ot(e) {
    return (t = e,
    t.replace(/[^\s]+/g, (e=>e.replace(/^./, (e=>e.toUpperCase()))))).replace(/\s/g, "");
    var t
}
function jt(e) {
    e.target === this && (this.removeEventListener("transitionend", jt),
    document.documentElement.classList.remove("SmoothResize"))
}
function Ut(e) {
    return "#" + (e = e.map(Ot)).map(encodeURIComponent).join("/")
}
function Ht(e) {
    e = e.filter(Boolean);
    const t = Ut([...e]);
    return history.replaceState(null, "", t),
    function(e) {
        e.unshift(Rt),
        document.title = e.join(" - ")
    }(e),
    t
}
!function() {
    window.addEventListener("hashchange", _t, !1);
    const e = "#" + encodeURIComponent(Ft("Property"));
    "" === window.location.hash && "#" !== window.location.href.slice(-1) ? Ht([Ft("Property")]) : window.location.hash === e || _t({
        oldURL: e,
        newURL: window.location.hash
    }),
    document.querySelectorAll('header input[name="Tab"]').forEach((e=>e.addEventListener("click", (()=>e.nextElementSibling.querySelector("a").click())))),
    Mt("Property").addEventListener("change", Bt),
    Mt("Electron").addEventListener("change", Bt),
    Mt("Isotope").addEventListener("change", Bt)
}();
const zt = e=>document.getElementById(e)
  , Wt = !window.matchMedia("(hover: none), (pointer: coarse)").matches;
let Kt = !0;
function Vt(e) {
    e.forEach((e=>{
        e.addedNodes.forEach((e=>{
            Yt(e, !0),
            e.addEventListener("focus", Zt),
            e.addEventListener("keypress", tn),
            e.addEventListener("keyup", nn)
        }
        ))
    }
    ))
}
function Xt(e) {
    document.querySelector("ol > li.Active.Tope") || e.target.closest("li").dispatchEvent(i.hoverElement)
}
function Gt(e, t) {
    zt("Ptable").classList.toggle("Hover", t),
    [...e].forEach((e=>Yt(e, t)))
}
function Yt(e, t) {
    t ? (e.addEventListener("pointerenter", Xt),
    e.addEventListener("focusin", Xt)) : (e.removeEventListener("pointerenter", Xt),
    e.removeEventListener("focusin", Xt))
}
async function Zt(e) {
    if (!Kt || "BUTTON" === e.relatedTarget?.nodeName)
        return;
    const t = await i.value(e.target.dataset.atomic, void 0, "compounds");
    let n;
    document.documentElement.classList.contains("Compound") && !t && document.querySelectorAll("ol > li.Active").forEach((e=>{
        Jt({
            currentTarget: e
        }),
        an.call(e)
    }
    ));
    const a = Number(getComputedStyle(document.querySelector("article")).getPropertyValue("--lock"))
      , o = e.target.classList.contains("Tope") ? ".Tope" : "";
    for (; n = document.querySelectorAll(`ol > li.Active${o}`),
    n.length && n.length >= a; )
        Jt({
            currentTarget: n[0]
        });
    a > 0 ? function(e) {
        const t = e.currentTarget;
        t.classList.add("Active"),
        t.dispatchEvent(i.activateElement),
        t.removeEventListener("focus", Zt),
        t.addEventListener("pointerdown", Jt),
        t.removeEventListener("pointerleave", an);
        Number(getComputedStyle(document.querySelector("article")).getPropertyValue("--lock")) >= 1 && Gt(i.atomic_map.values(), !1)
    }({
        currentTarget: e.target
    }) : !0 === e.force && e.target.dispatchEvent(i.activateElement)
}
function Jt(e) {
    const t = e.currentTarget;
    t.classList.remove("Active"),
    t.dispatchEvent(i.deactivateElement),
    setTimeout((()=>t.addEventListener("focus", Zt)), 150),
    t.removeEventListener("pointerdown", Jt),
    Wt && (t.addEventListener("pointerleave", an),
    t.classList.contains("Tope") || Gt(i.atomic_map.values(), !0))
}
function Qt(e) {
    ("Tab" === e?.key || e?.key?.startsWith("Arrow")) && (Kt = !1)
}
function en(e) {
    ("Tab" === e?.key || e?.key?.startsWith("Arrow")) && (Kt = !0)
}
function tn(e) {
    "Enter" === e.key && (this.classList.contains("Active") ? Jt({
        currentTarget: this
    }) : Zt({
        target: this,
        force: !0
    }))
}
function nn(e) {
    "Escape" === e.key && this.classList.contains("Active") && Jt({
        currentTarget: this
    })
}
function an() {
    this.blur()
}
var on;
Wt && Gt(i.atomic_map.values(), !0),
i.atomic_map.forEach((e=>e.addEventListener("focus", Zt))),
i.atomic_map.forEach((e=>e.addEventListener("keypress", tn))),
i.atomic_map.forEach((e=>e.addEventListener("keyup", nn))),
document.addEventListener("keydown", Qt),
document.addEventListener("keyup", en),
on = zt("Ptable"),
new MutationObserver(Vt).observe(on, {
    childList: !0
}),
i.atomic_map.get(1).dispatchEvent(i.hoverElement),
window.onfocus = e=>setTimeout((()=>Kt = !0), 0),
window.onblur = e=>Kt = !1,
import("./bugsnag-f0c206ee.js").then((function(e) {
    return e.b
}
)).catch(reportError),
import("./extra-4bfde388.js").catch(reportError);
export {i as P, We as f, y as g};
