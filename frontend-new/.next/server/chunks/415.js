"use strict";
exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 5415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tq": () => (/* binding */ ResetPassword),
/* harmony export */   "Ot": () => (/* binding */ UpdateProfile),
/* harmony export */   "Mo": () => (/* binding */ SignUp),
/* harmony export */   "Ig": () => (/* binding */ LoginApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8498);


const ResetPassword = async ({ oldpassword , newpassword , userId , token  })=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().patch(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .baseLink */ .A}/profile/resetpassword`, {
        newpassword,
        oldpassword,
        userId
    }, {
        headers: {
            "x-access-token": token
        }
    });
};
const UpdateProfile = async ({ profile , token  })=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().patch(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .baseLink */ .A}/profile/update`, {
        profile
    }, {
        headers: {
            "x-access-token": token
        }
    });
};
const SignUp = async ({ username , password , email  })=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .baseLink */ .A}/auth/signup`, {
        user: {
            username,
            password,
            email
        }
    });
};
const LoginApi = async ({ username , password  })=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().patch(`${_config__WEBPACK_IMPORTED_MODULE_1__/* .baseLink */ .A}/auth/signin`, {
        username,
        password
    });
};


/***/ })

};
;