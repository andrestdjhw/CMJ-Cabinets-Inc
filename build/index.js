/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Navbar.js"
/*!*******************************!*\
  !*** ./src/scripts/Navbar.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const cfg = window.cmjConfig || {};
const NAV_ITEMS = [{
  label: "Home",
  url: "/"
}, {
  label: "About",
  url: "/about/"
}, {
  label: "Services",
  url: "/services/",
  children: [{
    label: "Kitchen Cabinets",
    url: "/kitchen/"
  }, {
    label: "Custom Closets",
    url: "/closet/"
  }, {
    label: "Bar Cabinets",
    url: "/bar-cabinets/"
  }, {
    label: "Bathroom Vanities",
    url: "/bathroom-vanity/"
  }, {
    label: "Garage Cabinets",
    url: "/garages/"
  }, {
    label: "Murphy Beds",
    url: "/murphy-beds/"
  }, {
    label: "Laundry Room",
    url: "/laundry-room/"
  }, {
    label: "Entertainment Centers",
    url: "/entertainment-centers/"
  }, {
    label: "Additional Services",
    url: "/additional-services/"
  }]
}, {
  label: "Gallery",
  url: "/gallery/"
}, {
  label: "Testimonials",
  url: "/testimonials/"
}, {
  label: "Contact",
  url: "/contact-us/"
}];
const SOCIALS = [{
  label: "Facebook",
  key: "facebook",
  Icon: Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  label: "Instagram",
  key: "instagram",
  Icon: Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  label: "TikTok",
  key: "tiktok",
  Icon: Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  label: "YouTube",
  key: "youtube",
  Icon: Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}, {
  label: "Yelp",
  key: "yelp",
  Icon: Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
}];
function Navbar() {
  const [topbarHidden, setTopbarHidden] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [scrolled, setScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [mobileOpen, setMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [servicesOpen, setServicesOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const lastY = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const ticking = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  // Topbar: se esconde al bajar, reaparece al subir (smooth vía CSS)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 8);
        if (y > lastY.current && y > 96) {
          setTopbarHidden(true);
        } else if (y < lastY.current - 2) {
          setTopbarHidden(false);
        }
        lastY.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear scroll del body con el drawer abierto
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Cerrar dropdown con Escape
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onKey = e => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  const socials = SOCIALS.filter(({
    key
  }) => cfg.socials && cfg.socials[key]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header", {
    className: "sticky top-0 z-50",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: `bg-ink text-cream/80 overflow-hidden transition-all duration-300 ease-in-out ${topbarHidden ? "max-h-0 opacity-0" : "max-h-12 opacity-100"}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 h-10 flex items-center justify-between gap-4 text-[13px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center gap-4 min-w-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
            href: `tel:${cfg.phoneRaw || ""}`,
            className: "flex items-center gap-1.5 hover:text-tan transition-colors whitespace-nowrap",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: cfg.phone
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
            href: `mailto:${cfg.email || ""}`,
            className: "hidden sm:flex items-center gap-1.5 hover:text-tan transition-colors truncate",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "truncate",
              children: cfg.email
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
          href: cfg.mapsUrl || "#",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hidden md:flex items-center gap-1.5 hover:text-tan transition-colors whitespace-nowrap",
          title: "Open in Google Maps",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            children: cfg.address
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "flex items-center gap-3",
          children: socials.map(({
            label,
            key,
            Icon
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            href: cfg.socials[key],
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": label,
            className: "hover:text-tan transition-colors",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {})
          }, key))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: `bg-paper transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 h-[76px] flex items-center justify-between gap-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
          href: cfg.homeUrl || "/",
          className: "flex items-center shrink-0",
          "aria-label": "CMJ Cabinets \u2014 Home",
          children: cfg.logoUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            src: cfg.logoUrl,
            alt: "CMJ Cabinets, Inc.",
            className: "h-12 w-auto"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
            className: "text-2xl font-bold tracking-tight text-ink",
            children: ["CMJ ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "text-tan-2",
              children: "Cabinets"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav", {
          className: "hidden lg:flex items-center gap-7",
          "aria-label": "Main",
          children: NAV_ITEMS.map(item => item.children ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "relative",
            onMouseEnter: () => setServicesOpen(true),
            onMouseLeave: () => setServicesOpen(false),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
              href: item.url,
              "aria-expanded": servicesOpen,
              "aria-haspopup": "true",
              onFocus: () => setServicesOpen(true),
              className: "flex items-center gap-1 text-[15px] font-medium text-ink hover:text-tan-2 transition-colors py-6",
              children: [item.label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                className: `transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: `absolute left-1/2 -translate-x-1/2 top-full w-64 bg-paper border-t-2 border-tan shadow-xl transition-all duration-200 origin-top ${servicesOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"}`,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
                className: "py-2",
                children: item.children.map(child => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                    href: child.url,
                    className: "block px-5 py-2.5 text-[14px] text-ink/85 hover:bg-cream hover:text-tan-2 transition-colors",
                    children: child.label
                  })
                }, child.label))
              })
            })]
          }, item.label) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
            href: item.url,
            className: "text-[15px] font-medium text-ink hover:text-tan-2 transition-colors",
            children: item.label
          }, item.label))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
            href: cfg.ctaUrl || "/contact-us/",
            "aria-label": cfg.ctaLabel || "Free Estimate",
            className: "cmj-cta hidden lg:flex items-center justify-center relative overflow-hidden w-[178px] h-[46px] bg-tan text-paper text-[13px] font-semibold uppercase",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "cmj-cta__frame",
              "aria-hidden": "true"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "cmj-cta__label",
              "data-title": cfg.ctaLabel || "Free Estimate",
              "data-text": cfg.ctaHover || "Let's Talk"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
            type: "button",
            className: "lg:hidden text-ink p-1",
            "aria-label": mobileOpen ? "Close menu" : "Open menu",
            "aria-expanded": mobileOpen,
            onClick: () => setMobileOpen(v => !v),
            children: mobileOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: `lg:hidden fixed inset-x-0 bottom-0 top-[76px] bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
      onClick: () => setMobileOpen(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
        "aria-label": "Mobile",
        className: `absolute right-0 top-0 bottom-0 w-[86%] max-w-sm bg-paper shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"}`,
        onClick: e => e.stopPropagation(),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
          className: "py-3",
          children: NAV_ITEMS.map(item => item.children ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            className: "border-b border-cream",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("details", {
              className: "group",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("summary", {
                className: "flex items-center justify-between px-5 py-3.5 text-ink font-medium cursor-pointer list-none",
                children: [item.label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                  className: "transition-transform duration-200 group-open:rotate-180"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
                className: "pb-2 bg-cream/50",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                    href: item.url,
                    className: "block px-8 py-2.5 text-[14px] font-medium text-tan-2",
                    children: "All Services"
                  })
                }), item.children.map(child => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                    href: child.url,
                    className: "block px-8 py-2.5 text-[14px] text-ink/85 hover:text-tan-2",
                    children: child.label
                  })
                }, child.label))]
              })]
            })
          }, item.label) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            className: "border-b border-cream",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: item.url,
              className: "block px-5 py-3.5 text-ink font-medium hover:text-tan-2",
              children: item.label
            })
          }, item.label))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "px-5 py-4 space-y-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
            href: cfg.ctaUrl || "/contact-us/",
            "aria-label": cfg.ctaLabel || "Free Estimate",
            className: "cmj-cta flex items-center justify-center relative overflow-hidden w-full h-[50px] bg-tan text-paper text-[13px] font-semibold uppercase",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              className: "cmj-cta__frame",
              "aria-hidden": "true"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
              className: "cmj-cta__label",
              "data-title": cfg.ctaLabel || "Free Estimate",
              "data-text": cfg.ctaHover || "Let's Talk"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
            href: `tel:${cfg.phoneRaw || ""}`,
            className: "flex items-center justify-center gap-2 text-ink font-medium",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { const e = new Error("Cannot find module './Iconscons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}), " ", cfg.phone]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "flex items-center justify-center gap-4 pt-1 text-ink/70",
            children: socials.map(({
              label,
              key,
              Icon
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: cfg.socials[key],
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": label,
              className: "hover:text-tan-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Icon, {})
            }, key))
          })]
        })]
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react-dom/client"
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
(module) {

module.exports = window["ReactDOM"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Navbar */ "./src/scripts/Navbar.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const navbarMount = document.querySelector("#cmj-navbar");
if (navbarMount) {
  react_dom_client__WEBPACK_IMPORTED_MODULE_1___default().createRoot(navbarMount).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_scripts_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map