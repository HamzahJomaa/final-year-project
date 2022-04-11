"use strict";
exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 5742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Image = (props)=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.loading);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Skip if image is already eager or has priority (disables lazy loading)
        if (props.loading === 'eager' || props.priority) {
            return;
        }
        if (!isMobileConnection()) {
            let clearDefer;
            // Set loading to eager if all resources of document are loaded, but defer it a bit
            const onLoad = ()=>{
                clearDefer = defer(()=>setLoading('eager')
                );
            };
            window.addEventListener('load', onLoad);
            return ()=>{
                // Clean up the load event listener and an eventual defer
                window.removeEventListener('load', onLoad);
                if (clearDefer) {
                    clearDefer();
                }
            };
        }
    }, [
        props.loading,
        props.priority
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
        loading: loading,
        ...props
    }));
};
const isMobileConnection = ()=>{
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    return (connection === null || connection === void 0 ? void 0 : connection.type) === 'cellular' || (connection === null || connection === void 0 ? void 0 : connection.effectiveType) === 'slow-2g' || (connection === null || connection === void 0 ? void 0 : connection.effectiveType) === '2g' || (connection === null || connection === void 0 ? void 0 : connection.effectiveType) === '3g' || (connection === null || connection === void 0 ? void 0 : connection.saveData) === true;
};
const defer = (callback)=>{
    // Check if we can use requestIdleCallback
    if (window.requestIdleCallback) {
        const handle = window.requestIdleCallback(callback);
        return ()=>window.cancelIdleCallback(handle)
        ;
    }
    // Just defer using setTimeout with some random delay otherwise
    const handle = setTimeout(callback, 2345 + Math.random() * 1000);
    return ()=>clearTimeout(handle)
    ;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ 6502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eg": () => (/* binding */ to_slug),
/* harmony export */   "pb": () => (/* binding */ SpliceByWord),
/* harmony export */   "Nd": () => (/* binding */ BeautifyShortDate)
/* harmony export */ });
const to_slug = (text)=>{
    return text.toLowerCase().replaceAll(" ", "_");
};
const SpliceByWord = (text, count)=>{
    var stripedHtml = text ? text.replace(/<[^>]+>/g, "") : "";
    return stripedHtml.split(" ").splice(0, count).join(" ");
};
const BeautifyShortDate = (date)=>{
    date = new Date(date);
    let monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let monthName = monthNames[monthIndex];
    let year = date.getFullYear();
    return `${day} ${monthName} ${year}`;
};


/***/ })

};
;