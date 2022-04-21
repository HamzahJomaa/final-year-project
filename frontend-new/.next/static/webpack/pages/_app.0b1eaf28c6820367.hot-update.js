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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/index */ \"./redux/index.jsx\");\n/* harmony import */ var _components_Script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Script */ \"./components/Script.jsx\");\n/* harmony import */ var _components_FooterComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FooterComponent */ \"./components/FooterComponent.jsx\");\n/* harmony import */ var _components_HeaderComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HeaderComponent */ \"./components/HeaderComponent.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_LoginComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LoginComponent */ \"./components/LoginComponent.jsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_SignUpComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SignUpComponent */ \"./components/SignUpComponent.jsx\");\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar ref = (0,_redux_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), store = ref.store, persistor = ref.persistor;\nvar Loader = function() {\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"preloader\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"logo\",\n                src: \"images/logo1.png\",\n                alt: \"\",\n                width: \"119\",\n                height: \"58\"\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"status\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_c = Loader;\nvar theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__.createTheme)({\n    typography: {\n        fontFamily: 'Dosis,sans-serif'\n    },\n    palette: {\n        secondary: {\n            main: \"#dcf836\"\n        }\n    },\n    components: {\n        // Name of the component\n        MuiPaginationItem: {\n            styleOverrides: {\n                // Name of the slot\n                root: {\n                    // Some CSS\n                    color: \"white\",\n                    \"&.Mui-selected\": {\n                        background: \"rgba(255,255,255,.7)\"\n                    }\n                }\n            }\n        },\n        MuiInputLabel: {\n            styleOverrides: {\n                root: {\n                    fontWeight: 600\n                }\n            }\n        },\n        MuiButtonBase: {\n            styleOverrides: {\n                root: {\n                    \"&:hover\": {\n                        backgroundColor: \"#020d18 !important\"\n                    },\n                    \"&.MuiTab-textColorPrimary\": {\n                        color: \"white\",\n                        fontWeight: \"bolder\",\n                        fontSize: \"1.2rem\"\n                    },\n                    \"&.MuiTab-textColorPrimary.Mui-selected\": {\n                        color: \"#dcf836\"\n                    }\n                }\n            }\n        }\n    }\n});\nvar tabs = function(theme1) {\n    return {\n        root: // Match [sm, md)\n        //       [600px, 900px)\n        _defineProperty({\n            backgroundColor: 'blue'\n        }, theme1.breakpoints.between('sm', 'md'), {\n            backgroundColor: 'red'\n        })\n    };\n};\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.ThemeProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"stylesheet\",\n                href: \"/css/style.css\"\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 89,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"stylesheet\",\n                href: \"/css/plugins.css\"\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 90,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loader, {}, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 91,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeaderComponent__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 92,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 93,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Script__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 94,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FooterComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n                lineNumber: 95,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/pages/_app.js\",\n        lineNumber: 88,\n        columnNumber: 7\n    }, this));\n}\n_c1 = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c, _c1;\n$RefreshReg$(_c, \"Loader\");\n$RefreshReg$(_c1, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RCdUIsQ0FBSTtnQkFBQ0MsR0FBRyxFQUFDLENBQVk7Z0JBQUNDLElBQUksRUFBQyxDQUFnQjs7Ozs7O3dGQUMzQ0YsQ0FBSTtnQkFBQ0MsR0FBRyxFQUFDLENBQVk7Z0JBQUNDLElBQUksRUFBQyxDQUFrQjs7Ozs7O3dGQUM3Q25DLE1BQU07Ozs7O3dGQUNOUixtRUFBZTs7Ozs7d0ZBQ2Z1QyxTQUFTLG9CQUFLQyxTQUFTOzs7Ozt3RkFDdkIxQywwREFBTTs7Ozs7d0ZBQ05DLG1FQUFlOzs7Ozs7Ozs7OztBQUcxQixDQUFDO01BWlF1QyxLQUFLO0FBY2QsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5pbXBvcnQgbG9hZFN0b3JlIGZyb20gXCIuLi9yZWR1eC9pbmRleFwiO1xuaW1wb3J0IFNjcmlwdCBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JpcHRcIjtcbmltcG9ydCBGb290ZXJDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyQ29tcG9uZW50XCI7XG5pbXBvcnQgSGVhZGVyQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ2luQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luQ29tcG9uZW50XCI7XG5pbXBvcnQge2NyZWF0ZVRoZW1lLCBUaGVtZVByb3ZpZGVyfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFNpZ25VcENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWduVXBDb21wb25lbnRcIjtcblxuY29uc3Qge3N0b3JlLCBwZXJzaXN0b3J9ID0gbG9hZFN0b3JlKCk7XG5cbmNvbnN0IExvYWRlciA9ICgpID0+IChcbiAgICAgICAgPGRpdiBpZD1cInByZWxvYWRlclwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCJpbWFnZXMvbG9nbzEucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIxMTlcIiBoZWlnaHQ9XCI1OFwiLz5cbiAgICAgICAgPGRpdiBpZD1cInN0YXR1c1wiPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbilcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gICAgdHlwb2dyYXBoeToge1xuICAgICAgICBmb250RmFtaWx5OiAnRG9zaXMsc2Fucy1zZXJpZicsXG4gICAgfSxcbiAgICBwYWxldHRlOntcbiAgICAgICAgc2Vjb25kYXJ5OntcbiAgICAgICAgICAgIG1haW46XCIjZGNmODM2XCJcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgLy8gTmFtZSBvZiB0aGUgY29tcG9uZW50XG4gICAgICAgIE11aVBhZ2luYXRpb25JdGVtOiB7XG4gICAgICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICAgICAgICAgIC8vIE5hbWUgb2YgdGhlIHNsb3RcbiAgICAgICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNvbWUgQ1NTXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiJi5NdWktc2VsZWN0ZWRcIjp7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlwicmdiYSgyNTUsMjU1LDI1NSwuNylcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIE11aUlucHV0TGFiZWw6e1xuICAgICAgICAgICAgc3R5bGVPdmVycmlkZXM6e1xuICAgICAgICAgICAgICAgIHJvb3Q6e1xuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIE11aUJ1dHRvbkJhc2U6e1xuICAgICAgICAgICAgc3R5bGVPdmVycmlkZXM6e1xuICAgICAgICAgICAgICAgIHJvb3Q6e1xuICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjp7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAyMGQxOCAhaW1wb3J0YW50XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCImLk11aVRhYi10ZXh0Q29sb3JQcmltYXJ5XCI6e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIiYuTXVpVGFiLXRleHRDb2xvclByaW1hcnkuTXVpLXNlbGVjdGVkXCI6e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XCIjZGNmODM2XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgIH0sXG59KVxuXG5jb25zdCB0YWJzID0gKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsXG4gICAgICAgIC8vIE1hdGNoIFtzbSwgbWQpXG4gICAgICAgIC8vICAgICAgIFs2MDBweCwgOTAwcHgpXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5iZXR3ZWVuKCdzbScsICdtZCcpXToge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgICAgfSxcbiAgICB9LFxufSlcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPScvY3NzL3N0eWxlLmNzcycvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPScvY3NzL3BsdWdpbnMuY3NzJy8+XG4gICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgIDxIZWFkZXJDb21wb25lbnQgLz5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPFNjcmlwdC8+XG4gICAgICAgICAgPEZvb3RlckNvbXBvbmVudCAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsibG9hZFN0b3JlIiwiU2NyaXB0IiwiRm9vdGVyQ29tcG9uZW50IiwiSGVhZGVyQ29tcG9uZW50IiwiUmVhY3QiLCJMb2dpbkNvbXBvbmVudCIsImNyZWF0ZVRoZW1lIiwiVGhlbWVQcm92aWRlciIsIlNpZ25VcENvbXBvbmVudCIsInN0b3JlIiwicGVyc2lzdG9yIiwiTG9hZGVyIiwiZGl2IiwiaWQiLCJpbWciLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNwYW4iLCJ0aGVtZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJjb21wb25lbnRzIiwiTXVpUGFnaW5hdGlvbkl0ZW0iLCJzdHlsZU92ZXJyaWRlcyIsInJvb3QiLCJjb2xvciIsImJhY2tncm91bmQiLCJNdWlJbnB1dExhYmVsIiwiZm9udFdlaWdodCIsIk11aUJ1dHRvbkJhc2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250U2l6ZSIsInRhYnMiLCJicmVha3BvaW50cyIsImJldHdlZW4iLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});