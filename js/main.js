(() => {
  var e = {
      765: () => {
        document.addEventListener("DOMContentLoaded", () => {
          let e = document.querySelector(".nav__search"),
            t = e.querySelector(".nav__btn"),
            o = e.querySelector(".nav__input");
          t.addEventListener("click", () => {
            e.classList.toggle("active"),
              setTimeout(() => {
                o.classList.toggle("active");
              }, 200);
          });
        });
      },
      241: () => {
        document.addEventListener("DOMContentLoaded", () => {
          let e = document.querySelector(".video");
          if (e) {
            let t = e.querySelector(".video__body");
            t.addEventListener("click", () => {
              t.querySelector(".video__btn").remove(),
                t.insertAdjacentHTML(
                  "beforeend",
                  '<iframe class = "video__player" src="https://www.youtube.com/embed/ipuqLy87-3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                );
            });
          }
        });
      },
      598: () => {
        function e(e) {
          var t = !0,
            o = !1,
            n = null,
            i = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function d(e) {
            return !!(
              e &&
              e !== document &&
              "HTML" !== e.nodeName &&
              "BODY" !== e.nodeName &&
              "classList" in e &&
              "contains" in e.classList
            );
          }
          function s(e) {
            e.classList.contains("focus-visible") ||
              (e.classList.add("focus-visible"),
              e.setAttribute("data-focus-visible-added", ""));
          }
          function a(e) {
            t = !1;
          }
          function r() {
            document.addEventListener("mousemove", c),
              document.addEventListener("mousedown", c),
              document.addEventListener("mouseup", c),
              document.addEventListener("pointermove", c),
              document.addEventListener("pointerdown", c),
              document.addEventListener("pointerup", c),
              document.addEventListener("touchmove", c),
              document.addEventListener("touchstart", c),
              document.addEventListener("touchend", c);
          }
          function c(e) {
            (e.target.nodeName && "html" === e.target.nodeName.toLowerCase()) ||
              ((t = !1),
              document.removeEventListener("mousemove", c),
              document.removeEventListener("mousedown", c),
              document.removeEventListener("mouseup", c),
              document.removeEventListener("pointermove", c),
              document.removeEventListener("pointerdown", c),
              document.removeEventListener("pointerup", c),
              document.removeEventListener("touchmove", c),
              document.removeEventListener("touchstart", c),
              document.removeEventListener("touchend", c));
          }
          document.addEventListener(
            "keydown",
            function (o) {
              o.metaKey ||
                o.altKey ||
                o.ctrlKey ||
                (d(e.activeElement) && s(e.activeElement), (t = !0));
            },
            !0
          ),
            document.addEventListener("mousedown", a, !0),
            document.addEventListener("pointerdown", a, !0),
            document.addEventListener("touchstart", a, !0),
            document.addEventListener(
              "visibilitychange",
              function (e) {
                "hidden" === document.visibilityState && (o && (t = !0), r());
              },
              !0
            ),
            r(),
            e.addEventListener(
              "focus",
              function (e) {
                var o, n, a;
                d(e.target) &&
                  (t ||
                    ((n = (o = e.target).type),
                    ("INPUT" === (a = o.tagName) && i[n] && !o.readOnly) ||
                      ("TEXTAREA" === a && !o.readOnly) ||
                      o.isContentEditable)) &&
                  s(e.target);
              },
              !0
            ),
            e.addEventListener(
              "blur",
              function (e) {
                var t;
                d(e.target) &&
                  (e.target.classList.contains("focus-visible") ||
                    e.target.hasAttribute("data-focus-visible-added")) &&
                  ((o = !0),
                  window.clearTimeout(n),
                  (n = window.setTimeout(function () {
                    o = !1;
                  }, 100)),
                  (t = e.target).hasAttribute("data-focus-visible-added") &&
                    (t.classList.remove("focus-visible"),
                    t.removeAttribute("data-focus-visible-added")));
              },
              !0
            ),
            e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host
              ? e.host.setAttribute("data-js-focus-visible", "")
              : e.nodeType === Node.DOCUMENT_NODE &&
                (document.documentElement.classList.add("js-focus-visible"),
                document.documentElement.setAttribute(
                  "data-js-focus-visible",
                  ""
                ));
        }
        if ("undefined" != typeof window && "undefined" != typeof document) {
          var t;
          window.applyFocusVisiblePolyfill = e;
          try {
            t = new CustomEvent("focus-visible-polyfill-ready");
          } catch (e) {
            (t = document.createEvent("CustomEvent")).initCustomEvent(
              "focus-visible-polyfill-ready",
              !1,
              !1,
              {}
            );
          }
          window.dispatchEvent(t);
        }
        "undefined" != typeof document && e(document);
      },
    },
    t = {};
  function o(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var d = (t[n] = { exports: {} });
    return e[n](d, d.exports, o), d.exports;
  }
  (() => {
    "use strict";
    o(598);
    const e = {
        windowEl: window,
        documentEl: document,
        htmlEl: document.documentElement,
        bodyEl: document.body,
      },
      t = () => {
        const t = document?.querySelectorAll(".fixed-block"),
          o = (document.body, parseInt(e.bodyEl.dataset.position, 10));
        t.forEach((e) => {
          e.style.paddingRight = "0px";
        }),
          (e.bodyEl.style.paddingRight = "0px"),
          (e.bodyEl.style.top = "auto"),
          e.bodyEl.classList.remove("dis-scroll"),
          window.scroll({ top: o, left: 0 }),
          e.bodyEl.removeAttribute("data-position"),
          (e.htmlEl.style.scrollBehavior = "smooth");
      };
    !(function () {
      const o = document?.querySelector("[data-burger]"),
        n = document?.querySelector("[data-menu]"),
        i = document?.querySelectorAll("[data-menu-item]"),
        d = document?.querySelector("[data-menu-overlay]");
      o?.addEventListener("click", (i) => {
        o?.classList.toggle("burger--active"),
          n?.classList.toggle("menu--active"),
          n?.classList.contains("menu--active")
            ? (o?.setAttribute("aria-expanded", "true"),
              o?.setAttribute("aria-label", "Закрыть меню"),
              (() => {
                const t = document?.querySelectorAll(".fixed-block"),
                  o = window.scrollY,
                  n = window.innerWidth - e.bodyEl.offsetWidth + "px";
                (e.htmlEl.style.scrollBehavior = "none"),
                  t.forEach((e) => {
                    e.style.paddingRight = n;
                  }),
                  (e.bodyEl.style.paddingRight = n),
                  e.bodyEl.classList.add("dis-scroll"),
                  (e.bodyEl.dataset.position = o),
                  (e.bodyEl.style.top = `-${o}px`);
              })())
            : (o?.setAttribute("aria-expanded", "false"),
              o?.setAttribute("aria-label", "Открыть меню"),
              t());
      }),
        d?.addEventListener("click", () => {
          o?.setAttribute("aria-expanded", "false"),
            o?.setAttribute("aria-label", "Открыть меню"),
            o.classList.remove("burger--active"),
            n.classList.remove("menu--active"),
            t();
        }),
        i?.forEach((e) => {
          e.addEventListener("click", () => {
            o?.setAttribute("aria-expanded", "false"),
              o?.setAttribute("aria-label", "Открыть меню"),
              o.classList.remove("burger--active"),
              n.classList.remove("menu--active"),
              t();
          });
        });
    })(),
      console.log(
        (() => {
          const t = navigator.userAgent || navigator.vendor || window.opera;
          return /android/i.test(t)
            ? (e.htmlEl.classList.add("page--android"), "Android")
            : /iPad|iPhone|iPod/.test(t) && !window.MSStream
            ? (e.htmlEl.classList.add("page--ios"), "iOS")
            : "unknown";
        })()
      ),
      o(765),
      o(241);
  })();
})();
