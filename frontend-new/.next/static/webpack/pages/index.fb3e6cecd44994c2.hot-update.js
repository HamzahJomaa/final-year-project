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

/***/ "./components/SectionComponent.jsx":
/*!*****************************************!*\
  !*** ./components/SectionComponent.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BasicTabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Tabs */ \"./node_modules/@mui/material/Tabs/index.js\");\n/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Tab */ \"./node_modules/@mui/material/Tab/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction TabPanel(props) {\n    var children = props.children, value = props.value, index = props.index, other = _objectWithoutProperties(props, [\n        \"children\",\n        \"value\",\n        \"index\"\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", _objectSpread({\n        role: \"tabpanel\",\n        hidden: value !== index,\n        id: \"simple-tabpanel-\".concat(index),\n        \"aria-labelledby\": \"simple-tab-\".concat(index)\n    }, other, {\n        children: value === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            sx: {\n                p: 3\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n                lineNumber: 21,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this)\n    }), void 0, false, {\n        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n}\n_c = TabPanel;\nTabPanel.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),\n    index: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired),\n    value: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired)\n};\nfunction a11yProps(index) {\n    return {\n        id: \"simple-tab-\".concat(index),\n        'aria-controls': \"simple-tabpanel-\".concat(index)\n    };\n}\nfunction BasicTabs(param) {\n    var title = param.title, titles = param.titles, data = param.data;\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(0), 2), value = ref[0], setValue = ref[1];\n    var handleChange = function(event, newValue) {\n        setValue(newValue);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sx: {\n            width: '100%'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"title-hd\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        className: \"viewall\",\n                        children: [\n                            \"View all \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"ion-ios-arrow-right\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 54\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                sx: {\n                    borderBottom: 1,\n                    borderColor: 'divider'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    value: value,\n                    onChange: handleChange,\n                    indicatorColor: \"secondary\",\n                    \"aria-label\": \"basic tabs example\",\n                    children: titles.map(function(single_title, index) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _objectSpread({\n                            xs: {\n                                fontSize: \"1.2rem\"\n                            },\n                            lg: {\n                                fontSize: \"2.3rem\"\n                            },\n                            label: single_title\n                        }, a11yProps(index)), void 0, false, {\n                            fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 48\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabPanel, {\n                value: value,\n                index: 0,\n                children: \"Item One\"\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabPanel, {\n                value: value,\n                index: 1,\n                children: \"Item Two\"\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TabPanel, {\n                value: value,\n                index: 2,\n                children: \"Item Three\"\n            }, void 0, false, {\n                fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hamzahjomaa/Desktop/FinalYearProject/frontend-new/components/SectionComponent.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this));\n};\n_s(BasicTabs, \"qPBOvRc2Co1iWTsdTL0g7j/rpjU=\");\n_c1 = BasicTabs;\nvar _c, _c1;\n$RefreshReg$(_c, \"TabPanel\");\n$RefreshReg$(_c1, \"BasicTabs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlY3Rpb25Db21wb25lbnQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNJO0FBQ0c7QUFDRjtBQUNjO0FBQ2Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFMUJNLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDeEIsR0FBSyxDQUFHQyxRQUFRLEdBQTZCRCxLQUFLLENBQTFDQyxRQUFRLEVBQUVDLEtBQUssR0FBc0JGLEtBQUssQ0FBaENFLEtBQUssRUFBRUMsS0FBSyxHQUFlSCxLQUFLLENBQXpCRyxLQUFLLEVBQUtDLEtBQUssNEJBQUtKLEtBQUs7UUFBMUNDLENBQVE7UUFBRUMsQ0FBSztRQUFFQyxDQUFLOztJQUU5QixNQUFNLDZFQUNIRSxDQUFHO1FBQ0ZDLElBQUksRUFBQyxDQUFVO1FBQ2ZDLE1BQU0sRUFBRUwsS0FBSyxLQUFLQyxLQUFLO1FBQ3ZCSyxFQUFFLEVBQUcsQ0FBZ0Isa0JBQVEsT0FBTkwsS0FBSztRQUM1Qk0sQ0FBZSxrQkFBRyxDQUFXLGFBQVEsT0FBTk4sS0FBSztPQUNoQ0MsS0FBSztrQkFFUkYsS0FBSyxLQUFLQyxLQUFLLGdGQUNiTCx5REFBRztZQUFDWSxFQUFFLEVBQUUsQ0FBQztnQkFBQ0MsQ0FBQyxFQUFFLENBQUM7WUFBQyxDQUFDO2tHQUNkZCxnRUFBVTswQkFBRUksUUFBUTs7Ozs7Ozs7Ozs7Ozs7OztBQUsvQixDQUFDO0tBbEJRRixRQUFRO0FBb0JqQkEsUUFBUSxDQUFDYSxTQUFTLEdBQUcsQ0FBQztJQUNwQlgsUUFBUSxFQUFFUCx3REFBYztJQUN4QlMsS0FBSyxFQUFFVCxxRUFBMkI7SUFDbENRLEtBQUssRUFBRVIscUVBQTJCO0FBQ3BDLENBQUM7U0FFUXNCLFNBQVMsQ0FBQ2IsS0FBSyxFQUFFLENBQUM7SUFDekIsTUFBTSxDQUFDLENBQUM7UUFDTkssRUFBRSxFQUFHLENBQVcsYUFBUSxPQUFOTCxLQUFLO1FBQ3ZCLENBQWUsZ0JBQUcsQ0FBZ0Isa0JBQVEsT0FBTkEsS0FBSztJQUMzQyxDQUFDO0FBQ0gsQ0FBQztBQUVjLFFBQVEsQ0FBQ2MsU0FBUyxDQUFDLEtBQW1CLEVBQUUsQ0FBQztRQUFyQkMsS0FBSyxHQUFOLEtBQW1CLENBQWxCQSxLQUFLLEVBQUNDLE1BQU0sR0FBYixLQUFtQixDQUFaQSxNQUFNLEVBQUNDLElBQUksR0FBbEIsS0FBbUIsQ0FBTEEsSUFBSTs7O0lBQ2xELEdBQUssQ0FBcUIzQixHQUFpQixrQkFBakJBLDJDQUFjLENBQUMsQ0FBQyxPQUFuQ1MsS0FBSyxHQUFjVCxHQUFpQixLQUE3QjZCLFFBQVEsR0FBSTdCLEdBQWlCO0lBRTNDLEdBQUssQ0FBQzhCLFlBQVksR0FBRyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELFFBQVEsRUFBSyxDQUFDO1FBQ3pDRixRQUFRLENBQUNFLFFBQVE7SUFDbkIsQ0FBQztJQUVELE1BQU0sNkVBQ0gxQix5REFBRztRQUFDWSxFQUFFLEVBQUUsQ0FBQztZQUFDZ0IsS0FBSyxFQUFFLENBQU07UUFBQyxDQUFDOzt3RkFDckI1Qix5REFBRztnQkFBQzZCLFNBQVMsRUFBQyxDQUFVOztnR0FDcEJDLENBQUU7a0NBQUVWLEtBQUs7Ozs7OztnR0FDVFcsQ0FBQzt3QkFBQ0MsSUFBSSxFQUFDLENBQUc7d0JBQUNILFNBQVMsRUFBQyxDQUFTOzs0QkFBQyxDQUFTO3dHQUFDSSxDQUFDO2dDQUFDSixTQUFTLEVBQUMsQ0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFFaEY3Qix5REFBRztnQkFBQ1ksRUFBRSxFQUFFLENBQUM7b0JBQUNzQixZQUFZLEVBQUUsQ0FBQztvQkFBRUMsV0FBVyxFQUFFLENBQVM7Z0JBQUMsQ0FBQztzR0FDakR0QywwREFBSTtvQkFBQ08sS0FBSyxFQUFFQSxLQUFLO29CQUFFZ0MsUUFBUSxFQUFFWCxZQUFZO29CQUFFWSxjQUFjLEVBQUUsQ0FBVztvQkFBRUMsQ0FBVSxhQUFDLENBQW9COzhCQUNuR2pCLE1BQU0sQ0FBQ2tCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLFlBQVksRUFBQ25DLEtBQUs7c0NBQUksTUFBTSwrREFBTFAseURBQUc7NEJBQUMyQyxFQUFFLEVBQUUsQ0FBQ0M7Z0NBQUFBLFFBQVEsRUFBQyxDQUFROzRCQUFBLENBQUM7NEJBQUVDLEVBQUUsRUFBRSxDQUFDRDtnQ0FBQUEsUUFBUSxFQUFDLENBQVE7NEJBQUEsQ0FBQzs0QkFBRUUsS0FBSyxFQUFFSixZQUFZOzJCQUFNdEIsU0FBUyxDQUFDYixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O3dGQUd2SUosUUFBUTtnQkFBQ0csS0FBSyxFQUFFQSxLQUFLO2dCQUFFQyxLQUFLLEVBQUUsQ0FBQzswQkFBRSxDQUVsQzs7Ozs7O3dGQUNDSixRQUFRO2dCQUFDRyxLQUFLLEVBQUVBLEtBQUs7Z0JBQUVDLEtBQUssRUFBRSxDQUFDOzBCQUFFLENBRWxDOzs7Ozs7d0ZBQ0NKLFFBQVE7Z0JBQUNHLEtBQUssRUFBRUEsS0FBSztnQkFBRUMsS0FBSyxFQUFFLENBQUM7MEJBQUUsQ0FFbEM7Ozs7Ozs7Ozs7OztBQUdOLENBQUM7R0E3QnVCYyxTQUFTO01BQVRBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWN0aW9uQ29tcG9uZW50LmpzeD9jMzlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGFicyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYnMnO1xuaW1wb3J0IFRhYiBmcm9tICdAbXVpL21hdGVyaWFsL1RhYic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5cbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHZhbHVlLCBpbmRleCwgLi4ub3RoZXIgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgIGhpZGRlbj17dmFsdWUgIT09IGluZGV4fVxuICAgICAgaWQ9e2BzaW1wbGUtdGFicGFuZWwtJHtpbmRleH1gfVxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgc2ltcGxlLXRhYi0ke2luZGV4fWB9XG4gICAgICB7Li4ub3RoZXJ9XG4gICAgPlxuICAgICAge3ZhbHVlID09PSBpbmRleCAmJiAoXG4gICAgICAgIDxCb3ggc3g9e3sgcDogMyB9fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblRhYlBhbmVsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZnVuY3Rpb24gYTExeVByb3BzKGluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGBzaW1wbGUtdGFiLSR7aW5kZXh9YCxcbiAgICAnYXJpYS1jb250cm9scyc6IGBzaW1wbGUtdGFicGFuZWwtJHtpbmRleH1gLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNpY1RhYnMoe3RpdGxlLHRpdGxlcyxkYXRhfSkge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwidGl0bGUtaGRcIj5cbiAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidmlld2FsbFwiPlZpZXcgYWxsIDxpIGNsYXNzTmFtZT1cImlvbi1pb3MtYXJyb3ctcmlnaHRcIj48L2k+PC9hPlxuICAgICAgICA8L0JveD5cbiAgICAgIDxCb3ggc3g9e3sgYm9yZGVyQm90dG9tOiAxLCBib3JkZXJDb2xvcjogJ2RpdmlkZXInIH19PlxuICAgICAgICA8VGFicyB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGluZGljYXRvckNvbG9yPXtcInNlY29uZGFyeVwifSBhcmlhLWxhYmVsPVwiYmFzaWMgdGFicyBleGFtcGxlXCI+XG4gICAgICAgICAgICB7dGl0bGVzLm1hcCgoc2luZ2xlX3RpdGxlLGluZGV4KT0+KDxUYWIgeHM9e3tmb250U2l6ZTpcIjEuMnJlbVwifX0gbGc9e3tmb250U2l6ZTpcIjIuM3JlbVwifX0gbGFiZWw9e3NpbmdsZV90aXRsZX0gey4uLmExMXlQcm9wcyhpbmRleCl9IC8+KSl9XG4gICAgICAgIDwvVGFicz5cbiAgICAgIDwvQm94PlxuICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9PlxuICAgICAgICBJdGVtIE9uZVxuICAgICAgPC9UYWJQYW5lbD5cbiAgICAgIDxUYWJQYW5lbCB2YWx1ZT17dmFsdWV9IGluZGV4PXsxfT5cbiAgICAgICAgSXRlbSBUd29cbiAgICAgIDwvVGFiUGFuZWw+XG4gICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17Mn0+XG4gICAgICAgIEl0ZW0gVGhyZWVcbiAgICAgIDwvVGFiUGFuZWw+XG4gICAgPC9Cb3g+XG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiVGFicyIsIlRhYiIsIlR5cG9ncmFwaHkiLCJCb3giLCJUYWJQYW5lbCIsInByb3BzIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImluZGV4Iiwib3RoZXIiLCJkaXYiLCJyb2xlIiwiaGlkZGVuIiwiaWQiLCJhcmlhLWxhYmVsbGVkYnkiLCJzeCIsInAiLCJwcm9wVHlwZXMiLCJub2RlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImExMXlQcm9wcyIsIkJhc2ljVGFicyIsInRpdGxlIiwidGl0bGVzIiwiZGF0YSIsInVzZVN0YXRlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZSIsImV2ZW50Iiwid2lkdGgiLCJjbGFzc05hbWUiLCJoMiIsImEiLCJocmVmIiwiaSIsImJvcmRlckJvdHRvbSIsImJvcmRlckNvbG9yIiwib25DaGFuZ2UiLCJpbmRpY2F0b3JDb2xvciIsImFyaWEtbGFiZWwiLCJtYXAiLCJzaW5nbGVfdGl0bGUiLCJ4cyIsImZvbnRTaXplIiwibGciLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SectionComponent.jsx\n");

/***/ })

});