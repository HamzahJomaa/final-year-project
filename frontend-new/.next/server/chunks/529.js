"use strict";
exports.id = 529;
exports.ids = [529];
exports.modules = {

/***/ 529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ol": () => (/* binding */ Search),
/* harmony export */   "z6": () => (/* binding */ getGenre),
/* harmony export */   "Dy": () => (/* binding */ getUserReviews),
/* harmony export */   "zM": () => (/* binding */ AddReview),
/* harmony export */   "Ot": () => (/* binding */ CheckWatched),
/* harmony export */   "Qh": () => (/* binding */ BuyTicket),
/* harmony export */   "eP": () => (/* binding */ VisitedStream),
/* harmony export */   "iQ": () => (/* binding */ getNationality),
/* harmony export */   "Ai": () => (/* binding */ getProfile),
/* harmony export */   "xe": () => (/* binding */ ListStream),
/* harmony export */   "iw": () => (/* binding */ getStreamReviews),
/* harmony export */   "MV": () => (/* binding */ getStream),
/* harmony export */   "w8": () => (/* binding */ GetHomePage)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8498);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5687);
/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_1__);



const agent = new (https__WEBPACK_IMPORTED_MODULE_1___default().Agent)({
    rejectUnauthorized: false
});
const Search = async (data)=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseLink */ .A}/search`, data);
};
const getGenre = async ({ type  })=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseLink */ .A}/genre/${type}`);
};
const getUserReviews = async ({ id , token , perPage , page  })=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseLink */ .A}/review/user/${perPage}/${page}`, {
        headers: {
            "x-access-token": token,
            user: id
        }
    });
};
const AddReview = async ({ review , token  })=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseLink */ .A}/review/add`, {
        review
    }, {
        headers: {
            "x-access-token": token
        }
    });
};
const CheckWatched = async ({ profile , ref , token  })=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseLink */ .A}/profile/ticket`, {
        headers: {
            "x-access-token": token,
            "userid": profile,
            "ref": ref
        }
    });
};
const BuyTicket = async ({ StreamModel , Stream , userId , token  })=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().patch(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseLink */ .A}/profile/ticket`, {
        userId,
        Stream,
        StreamModel
    }, {
        headers: {
            "x-access-token": token
        }
    });
};
const VisitedStream = async ({ StreamModel , Stream , userId , token  })=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseLink */ .A}/stream/visit`, {
        StreamModel,
        Stream,
        userId
    }, {
        headers: {
            "x-access-token": token
        }
    });
};
const getNationality = async ()=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseLink */ .A}/nationality`);
};
const getProfile = async ({ userId  })=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseLink */ .A}/profile/${userId}`);
};
const ListStream = async (type, page, perPage)=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseLink */ .A}/stream/${type}/${perPage}/${page}`);
};
const getStreamReviews = async (id, perPage, currentPage)=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseLink */ .A}/review/ref/${perPage}/${currentPage}`, {
        headers: {
            ref: id
        }
    });
};
const getStream = async (type, tmdb)=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseLink */ .A}/stream/${type}/id/${tmdb}`, {
        httpsAgent: agent
    });
};
const GetHomePage = async ()=>{
    return await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${_config__WEBPACK_IMPORTED_MODULE_2__/* .baseLink */ .A}/homepage`);
};


/***/ }),

/***/ 8498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ baseLink)
/* harmony export */ });
const baseLink = "https://rhu-computerscience.tech/api";


/***/ })

};
;