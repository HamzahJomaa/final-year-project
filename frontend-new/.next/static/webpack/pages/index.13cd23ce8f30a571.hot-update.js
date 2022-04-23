"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/GenreComponent.jsx":
/*!***************************************!*\
  !*** ./components/GenreComponent.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/effect-cards */ \"./node_modules/swiper/modules/effect-cards/effect-cards.min.css\");\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers_contenthelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/contenthelper */ \"./helpers/contenthelper.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\n\n// Import Swiper React components\n\n// Import Swiper styles\n\n\n\n// import required modules\n\nvar _this = undefined;\nvar GenreComponent = function(param) {\n    var title = param.title, items = param.items;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                effect: \"cards\",\n                grabCursor: true,\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_6__.EffectCards\n                ],\n                className: \"cards-swiper\",\n                children: (items === null || items === void 0 ? void 0 : items.length) > 0 && items.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            style: {\n                                background: \"url('https://image.tmdb.org/t/p/w342/\".concat(item === null || item === void 0 ? void 0 : item.poster_path, \"')\")\n                            },\n                            href: \"/movie/\".concat(item === null || item === void 0 ? void 0 : item.tmdb, \"/\").concat((0,_helpers_contenthelper__WEBPACK_IMPORTED_MODULE_5__.to_slug)(item === null || item === void 0 ? void 0 : item.title))\n                        }, void 0, false, {\n                            fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/GenreComponent.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/GenreComponent.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/GenreComponent.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                style: {\n                    color: \"white\"\n                },\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/GenreComponent.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/GenreComponent.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this));\n};\n_c = GenreComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GenreComponent);\nvar _c;\n$RefreshReg$(_c, \"GenreComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dlbnJlQ29tcG9uZW50LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStDO0FBQy9DLEVBQWlDO0FBQ2lCO0FBRWxELEVBQXVCO0FBQ0o7QUFDYTtBQUVnQjtBQUdoRCxFQUEwQjtBQUNVOztBQUVwQyxHQUFLLENBQUNPLGNBQWMsR0FBRyxRQUFRQyxRQUFVLENBQUM7UUFBakJDLEtBQUssU0FBTEEsS0FBSyxFQUFDRCxLQUFLLFNBQUxBLEtBQUs7O0lBQ2hDLE1BQU0sNkVBQ0xFLENBQUc7UUFBQ0MsS0FBSyxFQUFFLENBQUNDO1lBQUFBLFNBQVMsRUFBQyxDQUFRO1FBQUEsQ0FBQzs7d0ZBQzdCVCxnREFBTTtnQkFDTFUsTUFBTSxFQUFFLENBQU87Z0JBQ2ZDLFVBQVUsRUFBRSxJQUFJO2dCQUNoQkMsT0FBTyxFQUFFLENBQUNUO29CQUFBQSwrQ0FBVztnQkFBQSxDQUFDO2dCQUN0QlUsU0FBUyxFQUFDLENBQWM7MkJBR3JCUixLQUFLLGFBQUxBLEtBQUssS0FBTEEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxLQUFLLENBQUVTLE1BQU0sSUFBRyxDQUFDLElBQUlULEtBQUssQ0FBQ1UsR0FBRyxDQUFDQyxRQUMxQyxDQUQwQ0EsSUFBSTtrQ0FDbEMsTUFBTSwrREFBTGYscURBQVc7OEdBQ1RnQixDQUFDOzRCQUFDVCxLQUFLLEVBQUUsQ0FBQ1U7Z0NBQUFBLFVBQVUsRUFBRSxDQUFxQyx1Q0FBb0IsTUFBRSxDQUFwQkYsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBRUcsV0FBVyxFQUFDLENBQUU7NEJBQUMsQ0FBQzs0QkFBRUMsSUFBSSxFQUFHLENBQU8sU0FBZ0JsQixNQUFvQixDQUFsQ2MsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBVSxHQUFWQSxJQUFJLENBQUpBLENBQVUsR0FBVkEsSUFBSSxDQUFFSyxJQUFJLEVBQUMsQ0FBQyxJQUF1QixPQUFyQm5CLCtEQUFPLENBQUNjLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBRVYsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSTlJZ0IsQ0FBRTtnQkFBQ2QsS0FBSyxFQUFFLENBQUNlO29CQUFBQSxLQUFLLEVBQUMsQ0FBTztnQkFBQSxDQUFDOzBCQUFJakIsS0FBSzs7Ozs7Ozs7Ozs7O0FBR3pDLENBQUM7S0FuQktGLGNBQWM7QUFxQnBCLCtEQUFlQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2VucmVDb21wb25lbnQuanN4PzU0NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIEltcG9ydCBTd2lwZXIgUmVhY3QgY29tcG9uZW50c1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcblxuLy8gSW1wb3J0IFN3aXBlciBzdHlsZXNcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvZWZmZWN0LWNhcmRzXCI7XG5cbmltcG9ydCB7dG9fc2x1Z30gZnJvbSBcIi4uL2hlbHBlcnMvY29udGVudGhlbHBlclwiO1xuXG5cbi8vIGltcG9ydCByZXF1aXJlZCBtb2R1bGVzXG5pbXBvcnQgeyBFZmZlY3RDYXJkcyB9IGZyb20gXCJzd2lwZXJcIjtcblxuY29uc3QgR2VucmVDb21wb25lbnQgPSAoe3RpdGxlLGl0ZW1zfSkgPT57XG4gICAgcmV0dXJuKFxuICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxuICAgICAgPFN3aXBlclxuICAgICAgICBlZmZlY3Q9e1wiY2FyZHNcIn1cbiAgICAgICAgZ3JhYkN1cnNvcj17dHJ1ZX1cbiAgICAgICAgbW9kdWxlcz17W0VmZmVjdENhcmRzXX1cbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZHMtc3dpcGVyXCJcbiAgICAgID5cbiAgICAgICAgXG4gICAgICAgICAge2l0ZW1zPy5sZW5ndGggPiAwICYmIGl0ZW1zLm1hcChpdGVtPT4oXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGU+XG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7YmFja2dyb3VuZDpgdXJsKCdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzQyLyR7aXRlbT8ucG9zdGVyX3BhdGh9JylgfX0gaHJlZj17YC9tb3ZpZS8ke2l0ZW0/LnRtZGJ9LyR7dG9fc2x1ZyhpdGVtPy50aXRsZSl9YH0+PC9hPlxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvU3dpcGVyPlxuICAgICAgPGg0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0gPnt0aXRsZX08L2g0PlxuICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VucmVDb21wb25lbnQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwidG9fc2x1ZyIsIkVmZmVjdENhcmRzIiwiR2VucmVDb21wb25lbnQiLCJpdGVtcyIsInRpdGxlIiwiZGl2Iiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJlZmZlY3QiLCJncmFiQ3Vyc29yIiwibW9kdWxlcyIsImNsYXNzTmFtZSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJhIiwiYmFja2dyb3VuZCIsInBvc3Rlcl9wYXRoIiwiaHJlZiIsInRtZGIiLCJoNCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GenreComponent.jsx\n");

/***/ })

});