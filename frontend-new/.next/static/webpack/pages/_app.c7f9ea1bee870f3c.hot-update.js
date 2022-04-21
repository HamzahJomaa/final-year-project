"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/index */ \"./redux/index.jsx\");\n/* harmony import */ var _components_Script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Script */ \"./components/Script.jsx\");\n/* harmony import */ var _components_FooterComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FooterComponent */ \"./components/FooterComponent.jsx\");\n/* harmony import */ var _components_HeaderComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HeaderComponent */ \"./components/HeaderComponent.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_LoginComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LoginComponent */ \"./components/LoginComponent.jsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_SignUpComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SignUpComponent */ \"./components/SignUpComponent.jsx\");\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar ref = (0,_redux_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), store = ref.store, persistor = ref.persistor;\nvar Loader = function() {\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"preloader\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"logo\",\n                src: \"images/logo1.png\",\n                alt: \"\",\n                width: \"119\",\n                height: \"58\"\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"status\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_c = Loader;\nvar tabs = function(theme) {\n    return {\n        root: {\n            \"&:hover\": {\n                backgroundColor: \"#020d18 !important\"\n            },\n            \"&.MuiTab-textColorPrimary\": {\n                color: \"white\",\n                fontWeight: \"bolder\",\n                fontSize: \"1.2rem\"\n            },\n            \"&.MuiTab-textColorPrimary.Mui-selected\": {\n                color: \"#dcf836\"\n            }\n        }\n    };\n};\nvar styles = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__.createTheme)({\n    typography: {\n        fontFamily: 'Dosis,sans-serif'\n    },\n    palette: {\n        secondary: {\n            main: \"#dcf836\"\n        }\n    },\n    components: {\n        // Name of the component\n        MuiPaginationItem: {\n            styleOverrides: {\n                // Name of the slot\n                root: {\n                    // Some CSS\n                    color: \"white\",\n                    \"&.Mui-selected\": {\n                        background: \"rgba(255,255,255,.7)\"\n                    }\n                }\n            }\n        },\n        MuiInputLabel: {\n            styleOverrides: {\n                root: {\n                    fontWeight: 600\n                }\n            }\n        },\n        MuiButtonBase: {\n            styleOverrides: _objectSpread({}, tabs)\n        }\n    }\n});\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.ThemeProvider, {\n        theme: styles,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"stylesheet\",\n                href: \"/css/style.css\"\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 83,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"stylesheet\",\n                href: \"/css/plugins.css\"\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 84,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loader, {}, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 85,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeaderComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 86,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 87,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Script__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 88,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FooterComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 89,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n        lineNumber: 82,\n        columnNumber: 7\n    }, this));\n}\n_c1 = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c, _c1;\n$RefreshReg$(_c, \"Loader\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUVRO0FBQ0c7QUFDa0I7QUFDQTtBQUNsQztBQUNnQztBQUNEO0FBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxHQUFLLENBQXNCQSxHQUFXLEdBQVhBLHdEQUFTLElBQTdCUyxLQUFLLEdBQWVULEdBQVcsQ0FBL0JTLEtBQUssRUFBRUMsU0FBUyxHQUFJVixHQUFXLENBQXhCVSxTQUFTO0FBRXZCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQ2Y7a0JBQVEsTUFBTSwrREFBTEMsQ0FBRztRQUFDQyxFQUFFLEVBQUMsQ0FBVzs7d0ZBQ2xCQyxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTTtnQkFBQ0MsR0FBRyxFQUFDLENBQWtCO2dCQUFDQyxHQUFHLEVBQUMsQ0FBRTtnQkFBQ0MsS0FBSyxFQUFDLENBQUs7Z0JBQUNDLE1BQU0sRUFBQyxDQUFJOzs7Ozs7d0ZBQzFFUCxDQUFHO2dCQUFDQyxFQUFFLEVBQUMsQ0FBUTs7Z0dBQ1hPLENBQUk7Ozs7O2dHQUNKQSxDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FMWFQsTUFBTTtBQVNaLEdBQUssQ0FBQ1UsSUFBSSxHQUFHLFFBQVEsQ0FBUEMsS0FBSztJQUFLLE1BQ3JCLENBRHNCLENBQUM7UUFDdEJDLElBQUksRUFBQyxDQUFDO1lBQ0YsQ0FBUyxVQUFDLENBQUM7Z0JBQ1BDLGVBQWUsRUFBRSxDQUFvQjtZQUN6QyxDQUFDO1lBQ0QsQ0FBMkIsNEJBQUMsQ0FBQztnQkFDekJDLEtBQUssRUFBQyxDQUFPO2dCQUNiQyxVQUFVLEVBQUUsQ0FBUTtnQkFDcEJDLFFBQVEsRUFBRSxDQUFRO1lBQ3RCLENBQUM7WUFDRCxDQUF3Qyx5Q0FBQyxDQUFDO2dCQUN0Q0YsS0FBSyxFQUFDLENBQVM7WUFDbkIsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDOztBQUVELEdBQUssQ0FBQ0csTUFBTSxHQUFHdEIsMERBQVcsQ0FBQyxDQUFDO0lBQ3hCdUIsVUFBVSxFQUFFLENBQUM7UUFDVEMsVUFBVSxFQUFFLENBQWtCO0lBQ2xDLENBQUM7SUFDREMsT0FBTyxFQUFDLENBQUM7UUFDTEMsU0FBUyxFQUFDLENBQUM7WUFDUEMsSUFBSSxFQUFDLENBQVM7UUFDbEIsQ0FBQztJQUNMLENBQUM7SUFDREMsVUFBVSxFQUFFLENBQUM7UUFDVCxFQUF3QjtRQUN4QkMsaUJBQWlCLEVBQUUsQ0FBQztZQUNoQkMsY0FBYyxFQUFFLENBQUM7Z0JBQ2IsRUFBbUI7Z0JBQ25CYixJQUFJLEVBQUUsQ0FBQztvQkFDSCxFQUFXO29CQUNYRSxLQUFLLEVBQUUsQ0FBTztvQkFDZCxDQUFnQixpQkFBQyxDQUFDO3dCQUNkWSxVQUFVLEVBQUMsQ0FBc0I7b0JBQ3JDLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO1FBQ0RDLGFBQWEsRUFBQyxDQUFDO1lBQ1hGLGNBQWMsRUFBQyxDQUFDO2dCQUNaYixJQUFJLEVBQUMsQ0FBQztvQkFDRkcsVUFBVSxFQUFFLEdBQUc7Z0JBQ25CLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNEYSxhQUFhLEVBQUMsQ0FBQztZQUNYSCxjQUFjLG9CQUNQZixJQUFJO1FBRWYsQ0FBQztJQUVMLENBQUM7QUFDTCxDQUFDO1NBSVFtQixLQUFLLENBQUMsS0FBd0IsRUFBRSxDQUFDO1FBQXpCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTO0lBQ25DLE1BQU0sNkVBQ0RuQyx3REFBYTtRQUFDZSxLQUFLLEVBQUVNLE1BQU07O3dGQUN2QmUsQ0FBSTtnQkFBQ0MsR0FBRyxFQUFDLENBQVk7Z0JBQUNDLElBQUksRUFBQyxDQUFnQjs7Ozs7O3dGQUMzQ0YsQ0FBSTtnQkFBQ0MsR0FBRyxFQUFDLENBQVk7Z0JBQUNDLElBQUksRUFBQyxDQUFrQjs7Ozs7O3dGQUM3Q2xDLE1BQU07Ozs7O3dGQUNOUixtRUFBZTs7Ozs7d0ZBQ2ZzQyxTQUFTLG9CQUFLQyxTQUFTOzs7Ozt3RkFDdkJ6QywwREFBTTs7Ozs7d0ZBQ05DLG1FQUFlOzs7Ozs7Ozs7OztBQUcxQixDQUFDO01BWlFzQyxLQUFLO0FBY2QsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5pbXBvcnQgbG9hZFN0b3JlIGZyb20gXCIuLi9yZWR1eC9pbmRleFwiO1xuaW1wb3J0IFNjcmlwdCBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JpcHRcIjtcbmltcG9ydCBGb290ZXJDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgSGVhZGVyQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2luQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50XCI7XG5pbXBvcnQge2NyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFNpZ25VcENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWduVXBDb21wb25lbnRcIjtcblxuY29uc3Qge3N0b3JlLCBwZXJzaXN0b3J9ID0gbG9hZFN0b3JlKCk7XG5cbmNvbnN0IExvYWRlciA9ICgpID0+IChcbiAgICAgICAgPGRpdiBpZD1cInByZWxvYWRlclwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCJpbWFnZXMvbG9nbzEucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIxMTlcIiBoZWlnaHQ9XCI1OFwiLz5cbiAgICAgICAgPGRpdiBpZD1cInN0YXR1c1wiPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbilcbmNvbnN0IHRhYnMgPSAodGhlbWUpID0+ICh7XG4gICAgcm9vdDp7XG4gICAgICAgIFwiJjpob3ZlclwiOntcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDIwZDE4ICFpbXBvcnRhbnRcIlxuICAgICAgICB9LFxuICAgICAgICBcIiYuTXVpVGFiLXRleHRDb2xvclByaW1hcnlcIjp7XG4gICAgICAgICAgICBjb2xvcjpcIndoaXRlXCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRlclwiLFxuICAgICAgICAgICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwiJi5NdWlUYWItdGV4dENvbG9yUHJpbWFyeS5NdWktc2VsZWN0ZWRcIjp7XG4gICAgICAgICAgICBjb2xvcjpcIiNkY2Y4MzZcIlxuICAgICAgICB9XG4gICAgfVxufSlcblxuY29uc3Qgc3R5bGVzID0gY3JlYXRlVGhlbWUoe1xuICAgIHR5cG9ncmFwaHk6IHtcbiAgICAgICAgZm9udEZhbWlseTogJ0Rvc2lzLHNhbnMtc2VyaWYnLFxuICAgIH0sXG4gICAgcGFsZXR0ZTp7XG4gICAgICAgIHNlY29uZGFyeTp7XG4gICAgICAgICAgICBtYWluOlwiI2RjZjgzNlwiXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIC8vIE5hbWUgb2YgdGhlIGNvbXBvbmVudFxuICAgICAgICBNdWlQYWdpbmF0aW9uSXRlbToge1xuICAgICAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICAgICAgICAvLyBOYW1lIG9mIHRoZSBzbG90XG4gICAgICAgICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgICAgICAgICAvLyBTb21lIENTU1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIiYuTXVpLXNlbGVjdGVkXCI6e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcInJnYmEoMjU1LDI1NSwyNTUsLjcpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBNdWlJbnB1dExhYmVsOntcbiAgICAgICAgICAgIHN0eWxlT3ZlcnJpZGVzOntcbiAgICAgICAgICAgICAgICByb290OntcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBNdWlCdXR0b25CYXNlOntcbiAgICAgICAgICAgIHN0eWxlT3ZlcnJpZGVzOntcbiAgICAgICAgICAgICAgICAuLi50YWJzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICB9LFxufSlcblxuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3N0eWxlc30+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9Jy9jc3Mvc3R5bGUuY3NzJy8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9Jy9jc3MvcGx1Z2lucy5jc3MnLz5cbiAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgPEhlYWRlckNvbXBvbmVudCAvPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8U2NyaXB0Lz5cbiAgICAgICAgICA8Rm9vdGVyQ29tcG9uZW50IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJsb2FkU3RvcmUiLCJTY3JpcHQiLCJGb290ZXJDb21wb25lbnQiLCJIZWFkZXJDb21wb25lbnQiLCJSZWFjdCIsIkxvZ2luQ29tcG9uZW50IiwiY3JlYXRlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiU2lnblVwQ29tcG9uZW50Iiwic3RvcmUiLCJwZXJzaXN0b3IiLCJMb2FkZXIiLCJkaXYiLCJpZCIsImltZyIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3BhbiIsInRhYnMiLCJ0aGVtZSIsInJvb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInN0eWxlcyIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJjb21wb25lbnRzIiwiTXVpUGFnaW5hdGlvbkl0ZW0iLCJzdHlsZU92ZXJyaWRlcyIsImJhY2tncm91bmQiLCJNdWlJbnB1dExhYmVsIiwiTXVpQnV0dG9uQmFzZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});