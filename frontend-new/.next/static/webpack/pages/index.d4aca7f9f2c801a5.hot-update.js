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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/effect-cards */ \"./node_modules/swiper/modules/effect-cards/effect-cards.min.css\");\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n\n\n// Import Swiper React components\n\n\n// Import Swiper styles\n\n\n// import required modules\n\nvar _this = undefined;\nvar GenreComponent = function(param) {\n    var title = param.title, items = param.items;\n    var _this1 = _this;\n    var router = next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter;\n    var handleClick = function(stream, id, title) {\n        router.push();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                effect: \"cards\",\n                grabCursor: true,\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_6__.EffectCards\n                ],\n                className: \"cards-swiper\",\n                children: (items === null || items === void 0 ? void 0 : items.length) > 0 && items.map(function(item) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        onClick: handleClick,\n                        style: {\n                            background: \"url('https://image.tmdb.org/t/p/w342/\".concat(item === null || item === void 0 ? void 0 : item.poster_path, \"')\")\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/GenreComponent.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 50\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/GenreComponent.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                style: {\n                    color: \"white\"\n                },\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/GenreComponent.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/GenreComponent.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this));\n};\n_c = GenreComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GenreComponent);\nvar _c;\n$RefreshReg$(_c, \"GenreComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dlbnJlQ29tcG9uZW50LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErQztBQUMvQyxFQUFpQztBQUNpQjtBQUViO0FBRXJDLEVBQXVCO0FBQ0o7QUFDYTtBQUdoQyxFQUEwQjtBQUNVOztBQUlwQyxHQUFLLENBQUNPLGNBQWMsR0FBRyxRQUFRQyxRQUFVLENBQUM7UUFBakJDLEtBQUssU0FBTEEsS0FBSyxFQUFDRCxLQUFLLFNBQUxBLEtBQUs7O0lBQ2xDLEdBQUcsQ0FBQ0UsTUFBTSxHQUFHTCxrREFBUztJQUV0QixHQUFLLENBQUNNLFdBQVcsR0FBRyxRQUFRQyxDQUFQQyxNQUFNLEVBQUNELEVBQUUsRUFBQ0gsS0FBSyxFQUFJLENBQUM7UUFDdkNDLE1BQU0sQ0FBQ0ksSUFBSTtJQUNiLENBQUM7SUFFQyxNQUFNLDZFQUNMQyxDQUFHO1FBQUNDLEtBQUssRUFBRSxDQUFDQztZQUFBQSxTQUFTLEVBQUMsQ0FBUTtRQUFBLENBQUM7O3dGQUM3QmQsZ0RBQU07Z0JBQ0xlLE1BQU0sRUFBRSxDQUFPO2dCQUNmQyxVQUFVLEVBQUUsSUFBSTtnQkFDaEJDLE9BQU8sRUFBRSxDQUFDZDtvQkFBQUEsK0NBQVc7Z0JBQUEsQ0FBQztnQkFDdEJlLFNBQVMsRUFBQyxDQUFjOzJCQUdyQmIsS0FBSyxhQUFMQSxLQUFLLEtBQUxBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsS0FBSyxDQUFFYyxNQUFNLElBQUcsQ0FBQyxJQUFJZCxLQUFLLENBQUNlLEdBQUcsQ0FBQ0MsUUFBUXBCLENBQVJvQixJQUFJO2tDQUFHLE1BQU0sK0RBQUxwQixxREFBVzt3QkFBQ3FCLE9BQU8sRUFBRWQsV0FBVzt3QkFBRUssS0FBSyxFQUFFLENBQUNVOzRCQUFBQSxVQUFVLEVBQUUsQ0FBcUMsdUNBQW9CLE1BQUUsQ0FBcEJGLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUVHLFdBQVcsRUFBQyxDQUFFO3dCQUFDLENBQUM7Ozs7Ozs7Ozs7Ozt3RkFFOUpDLENBQUU7Z0JBQUNaLEtBQUssRUFBRSxDQUFDYTtvQkFBQUEsS0FBSyxFQUFDLENBQU87Z0JBQUEsQ0FBQzswQkFBSXBCLEtBQUs7Ozs7Ozs7Ozs7OztBQUd6QyxDQUFDO0tBckJLRixjQUFjO0FBdUJwQiwrREFBZUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dlbnJlQ29tcG9uZW50LmpzeD81NDcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBJbXBvcnQgU3dpcGVyIFJlYWN0IGNvbXBvbmVudHNcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5cbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG4vLyBJbXBvcnQgU3dpcGVyIHN0eWxlc1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9lZmZlY3QtY2FyZHNcIjtcblxuXG4vLyBpbXBvcnQgcmVxdWlyZWQgbW9kdWxlc1xuaW1wb3J0IHsgRWZmZWN0Q2FyZHMgfSBmcm9tIFwic3dpcGVyXCI7XG5cblxuXG5jb25zdCBHZW5yZUNvbXBvbmVudCA9ICh7dGl0bGUsaXRlbXN9KSA9PntcbiAgbGV0IHJvdXRlciA9IHVzZVJvdXRlclxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHN0cmVhbSxpZCx0aXRsZSkgPT57XG4gICAgcm91dGVyLnB1c2goKVxuICB9XG5cbiAgICByZXR1cm4oXG4gICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwifX0+XG4gICAgICA8U3dpcGVyXG4gICAgICAgIGVmZmVjdD17XCJjYXJkc1wifVxuICAgICAgICBncmFiQ3Vyc29yPXt0cnVlfVxuICAgICAgICBtb2R1bGVzPXtbRWZmZWN0Q2FyZHNdfVxuICAgICAgICBjbGFzc05hbWU9XCJjYXJkcy1zd2lwZXJcIlxuICAgICAgPlxuICAgICAgICBcbiAgICAgICAgICB7aXRlbXM/Lmxlbmd0aCA+IDAgJiYgaXRlbXMubWFwKGl0ZW09Pig8U3dpcGVyU2xpZGUgb25DbGljaz17aGFuZGxlQ2xpY2t9IHN0eWxlPXt7YmFja2dyb3VuZDpgdXJsKCdodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzQyLyR7aXRlbT8ucG9zdGVyX3BhdGh9JylgfX0+PC9Td2lwZXJTbGlkZT4pKX1cbiAgICAgIDwvU3dpcGVyPlxuICAgICAgPGg0IHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZVwifX0gPnt0aXRsZX08L2g0PlxuICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VucmVDb21wb25lbnQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwidXNlUm91dGVyIiwiRWZmZWN0Q2FyZHMiLCJHZW5yZUNvbXBvbmVudCIsIml0ZW1zIiwidGl0bGUiLCJyb3V0ZXIiLCJoYW5kbGVDbGljayIsImlkIiwic3RyZWFtIiwicHVzaCIsImRpdiIsInN0eWxlIiwidGV4dEFsaWduIiwiZWZmZWN0IiwiZ3JhYkN1cnNvciIsIm1vZHVsZXMiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwib25DbGljayIsImJhY2tncm91bmQiLCJwb3N0ZXJfcGF0aCIsImg0IiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GenreComponent.jsx\n");

/***/ })

});