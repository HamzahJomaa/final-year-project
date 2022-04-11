"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ baseLink)
/* harmony export */ });
const baseLink = "http://localhost:3000/api";


/***/ }),

/***/ 3580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./redux/reducers/Profile.jsx

let initialState = {
    id: "",
    token: ""
};
const profileReducer = (0,toolkit_namespaceObject.createSlice)({
    name: "profile",
    initialState,
    reducers: {
        setProfile: (state, action)=>action.payload
    }
});
const { setProfile , addNewFollower , removeFollow , updateLang  } = profileReducer.actions;
/* harmony default export */ const Profile = (profileReducer.reducer);

;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: external "redux-persist/lib/stateReconciler/hardSet"
const hardSet_namespaceObject = require("redux-persist/lib/stateReconciler/hardSet");
var hardSet_default = /*#__PURE__*/__webpack_require__.n(hardSet_namespaceObject);
;// CONCATENATED MODULE: ./redux/index.jsx





const persistConfig = {
    key: 'root',
    storage: (storage_default()),
    stateReconciler: (hardSet_default()),
    version: 1,
    debug: true
};
const persistedProfileReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, Profile);
/* harmony default export */ const redux = (()=>{
    const store = (0,toolkit_namespaceObject.configureStore)({
        reducer: {
            profile: persistedProfileReducer
        },
        middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [
                        external_redux_persist_namespaceObject.FLUSH,
                        external_redux_persist_namespaceObject.REHYDRATE,
                        external_redux_persist_namespaceObject.PAUSE,
                        external_redux_persist_namespaceObject.PERSIST,
                        external_redux_persist_namespaceObject.PURGE,
                        external_redux_persist_namespaceObject.REGISTER
                    ]
                }
            })
    });
    const persistor = (0,external_redux_persist_namespaceObject.persistStore)(store);
    return {
        store,
        persistor
    };
});

// EXTERNAL MODULE: ./components/Script.jsx
var Script = __webpack_require__(4127);
// EXTERNAL MODULE: ./components/FooterComponent.jsx
var FooterComponent = __webpack_require__(3297);
// EXTERNAL MODULE: ./components/HeaderComponent.jsx
var HeaderComponent = __webpack_require__(9601);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/LoginComponent.jsx
var LoginComponent = __webpack_require__(3474);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./api/Auth.js
var Auth = __webpack_require__(5415);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/SignUpComponent.jsx




const SignUpComponent = ()=>{
    const router = (0,router_.useRouter)();
    const { 0: username , 1: setUsername  } = (0,external_react_.useState)("");
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: password , 1: setPassword  } = (0,external_react_.useState)("");
    const { 0: cpassword , 1: setCPassword  } = (0,external_react_.useState)("");
    const { 0: error , 1: setError  } = (0,external_react_.useState)("");
    const handleSignup = async ()=>{
        try {
            const signup = await (0,Auth/* SignUp */.Mo)({
                username,
                password,
                email
            });
            if ((signup === null || signup === void 0 ? void 0 : signup.status) === 200) {
                if (false) { var ref, ref1; }
            } else {
                setError("An Error Occured");
                console.error(signup);
            }
        } catch (e) {
            var ref2, ref3, ref4, ref5;
            setError(e === null || e === void 0 ? void 0 : (ref2 = e.response) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.data) === null || ref3 === void 0 ? void 0 : ref3.statusMessage);
            console.error(e === null || e === void 0 ? void 0 : (ref4 = e.response) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.data) === null || ref5 === void 0 ? void 0 : ref5.statusMessage);
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "login-wrapper",
        id: "signup-content",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "login-content",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    className: "close",
                    children: "x"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: "sign up"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        htmlFor: "username-2",
                        children: [
                            "Username:",
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "username",
                                id: "username-2",
                                onChange: (e)=>{
                                    setUsername(e.target.value);
                                },
                                placeholder: "Hugh Jackman",
                                pattern: "^[a-zA-Z][a-zA-Z0-9-_\\.]{8,20}$",
                                required: "required"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        htmlFor: "email-2",
                        children: [
                            "your email:",
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "email",
                                name: "email",
                                id: "email-2",
                                onChange: (e)=>{
                                    setEmail(e.target.value);
                                },
                                placeholder: "",
                                pattern: "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$",
                                required: "required"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        htmlFor: "password-2",
                        children: [
                            "Password:",
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "password",
                                name: "password",
                                id: "password-2",
                                onChange: (e)=>{
                                    setPassword(e.target.value);
                                },
                                placeholder: "",
                                pattern: "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$",
                                required: "required"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                        htmlFor: "repassword-2",
                        children: [
                            "re-type Password:",
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "password",
                                name: "password",
                                id: "repassword-2",
                                onChange: (e)=>{
                                    setCPassword(e.target.value);
                                },
                                placeholder: "",
                                pattern: "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$",
                                required: "required"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "error-signup",
                    children: error
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: handleSignup,
                        type: "submit",
                        children: "sign up"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_SignUpComponent = (SignUpComponent);

;// CONCATENATED MODULE: ./pages/_app.js










const { store , persistor  } = redux();
const Loader = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "preloader",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "logo",
                src: "images/logo1.png",
                alt: "",
                width: "119",
                height: "58"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "status",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                ]
            })
        ]
    })
;
const theme = (0,material_.createTheme)({
    typography: {
        fontFamily: 'Dosis,sans-serif'
    },
    components: {
        // Name of the component
        MuiPaginationItem: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    color: "white",
                    "&.Mui-selected": {
                        background: "rgba(255,255,255,.7)"
                    }
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontWeight: 600
                }
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "#020d18 !important"
                    }
                }
            }
        }
    }
});
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "/css/style.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "/css/plugins.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Loader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderComponent/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(LoginComponent/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_SignUpComponent, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Script/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(FooterComponent/* default */.Z, {})
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [415,731], () => (__webpack_exec__(3580)));
module.exports = __webpack_exports__;

})();