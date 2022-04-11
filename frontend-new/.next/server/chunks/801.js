"use strict";
exports.id = 801;
exports.ids = [801];
exports.modules = {

/***/ 1801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Profile_ProfileComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/HeroComponent.jsx
var HeroComponent = __webpack_require__(5705);
// EXTERNAL MODULE: external "browser-image-compression"
var external_browser_image_compression_ = __webpack_require__(1022);
var external_browser_image_compression_default = /*#__PURE__*/__webpack_require__.n(external_browser_image_compression_);
;// CONCATENATED MODULE: ./helpers/compress.js

const compress = (setter, limit)=>async (e)=>{
        if (e.target.files.length > limit) return alert(`يسمح بصور عدد ${limit}`);
        const filesObj = e.target.files;
        const files = await Promise.all(Object.values(filesObj).map(async (img)=>{
            const resized = await external_browser_image_compression_default()(img, {
                maxSizeMB: 0.25,
                maxWidthOrHeight: 1920
            });
            return external_browser_image_compression_default().getDataUrlFromFile(resized);
        }));
        setter(files);
    }
;

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Profile/ProfileComponent.jsx





const ProfileComponent = ({ Component , location  })=>{
    const { 0: profilePicture , 1: setProfilePicture  } = (0,external_react_.useState)(null);
    const router = (0,router_.useRouter)();
    const handleLogout = ()=>{
        if (false) {}
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeroComponent/* default */.Z, {
                type: "user-hero",
                bgimg: "slider-bg.jpeg",
                location: [
                    "Home",
                    "Profile"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "page-single",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row ipad-width",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-3 col-sm-12 col-xs-12",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "user-information",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "user-img",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    href: "#",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "images/uploads/user-img.png",
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "upload-btn-wrapper",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            className: "redbtn",
                                                            children: "Upload a file"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "file",
                                                            name: "myfile",
                                                            accept: ".png, .jpg, .jpeg",
                                                            onChange: compress(setProfilePicture, 1)
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "user-fav",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Account Details"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: location === "index" && "active",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "/profile",
                                                                children: "Profile"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: location === "favorite" && "active",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "userfavoritelist.html",
                                                                children: "Favorite movies"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: location === "rate" && "active",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "profile/rate",
                                                                children: "Rated movies"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "user-fav",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Others"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Change password"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                onClick: handleLogout,
                                                                children: "Log out"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            Component
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const Profile_ProfileComponent = (ProfileComponent);


/***/ })

};
;