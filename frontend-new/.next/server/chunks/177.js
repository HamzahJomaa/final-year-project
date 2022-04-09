"use strict";
exports.id = 177;
exports.ids = [177];
exports.modules = {

/***/ 444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_contenthelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6502);



const LastReview = ({ last_review  })=>{
    var ref, ref1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "title-hd-sm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: "Reviews"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "#",
                        className: "time",
                        children: [
                            "Full Cast & Crew ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "ion-ios-arrow-right"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mvcast-item",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mv-user-review-item",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: last_review === null || last_review === void 0 ? void 0 : last_review.title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "no-star",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: `ion-android-star ${(last_review === null || last_review === void 0 ? void 0 : last_review.rate) >= 1 ? "" : "last"}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: `ion-android-star ${(last_review === null || last_review === void 0 ? void 0 : last_review.rate) >= 2 ? "" : "last"}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: `ion-android-star ${(last_review === null || last_review === void 0 ? void 0 : last_review.rate) >= 3 ? "" : "last"}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: `ion-android-star ${(last_review === null || last_review === void 0 ? void 0 : last_review.rate) >= 4 ? "" : "last"}`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: `ion-android-star ${(last_review === null || last_review === void 0 ? void 0 : last_review.rate) >= 5 ? "" : "last"}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "time",
                            children: [
                                (0,_helpers_contenthelper__WEBPACK_IMPORTED_MODULE_2__/* .BeautifyShortDate */ .Nd)(last_review === null || last_review === void 0 ? void 0 : last_review.createdAt),
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "#",
                                    children: [
                                        " ",
                                        `${last_review === null || last_review === void 0 ? void 0 : (ref = last_review.userId) === null || ref === void 0 ? void 0 : ref.firstName} ${last_review === null || last_review === void 0 ? void 0 : (ref1 = last_review.userId) === null || ref1 === void 0 ? void 0 : ref1.lastName}`
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: last_review === null || last_review === void 0 ? void 0 : last_review.body
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastReview);


/***/ }),

/***/ 5541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_contenthelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6502);



const RecommendationComponent = ({ recommendation  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "moviesrelated",
        className: "tab",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: "Related Movies To"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "Skyfall: Quantum of Spectre"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "topbar-filter",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Found ",
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        recommendation.length,
                                        " movies"
                                    ]
                                }),
                                " in total"
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: "Sort by:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "popularity",
                                    children: "Popularity Descending"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "popularity",
                                    children: "Popularity Ascending"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "rating",
                                    children: "Rating Descending"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "rating",
                                    children: "Rating Ascending"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "date",
                                    children: "Release date Descending"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "date",
                                    children: "Release date Ascending"
                                })
                            ]
                        })
                    ]
                }),
                recommendation.length > 0 ? recommendation.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "movie-item-style-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `https://image.tmdb.org/t/p/w342/${item.poster_path}`,
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mv-item-infor",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "#",
                                            children: item.title
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "rate",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "ion-android-star"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: item.vote_count
                                            }),
                                            " /5"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "describe",
                                        children: (0,_helpers_contenthelper__WEBPACK_IMPORTED_MODULE_2__/* .SpliceByWord */ .pb)(item.overview, 30)
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "run-time",
                                        children: [
                                            " Run Time: 2h21’ . ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "MMPA: PG-13 "
                                            }),
                                            " . ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    "Release: ",
                                                    (0,_helpers_contenthelper__WEBPACK_IMPORTED_MODULE_2__/* .BeautifyShortDate */ .Nd)(new Date(item.release_date))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Director: ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: "Joss Whedon"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Stars: ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: "Robert Downey Jr.,"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: "Chris Evans,"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "#",
                                                children: " Chris Hemsworth"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, index)
                ) : "",
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "topbar-filter",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            children: "Movies per page:"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "range",
                                    children: "5 Movies"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "saab",
                                    children: "10 Movies"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "pagination2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Page 1 of 2:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "active",
                                    href: "#",
                                    children: "1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    children: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "ion-arrow-right-b"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecommendationComponent);


/***/ }),

/***/ 7516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ReviewsComponent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./helpers/contenthelper.js
var contenthelper = __webpack_require__(6502);
// EXTERNAL MODULE: ./api/Main.js
var Main = __webpack_require__(529);
// EXTERNAL MODULE: external "@mui/material/Pagination"
var Pagination_ = __webpack_require__(216);
var Pagination_default = /*#__PURE__*/__webpack_require__.n(Pagination_);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Modal"
var Modal_ = __webpack_require__(9564);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: external "@mui/material/Rating"
var Rating_ = __webpack_require__(802);
var Rating_default = /*#__PURE__*/__webpack_require__.n(Rating_);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/WriteReview.jsx











const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};
const WriteReviewComponent = ({ on , onModel , reviewAdded  })=>{
    let router = (0,router_.useRouter)();
    const [open, setOpen] = external_react_.useState(false);
    const handleOpen = ()=>setOpen(true)
    ;
    const handleClose = ()=>setOpen(false)
    ;
    const [rate, setRate] = external_react_.useState(3);
    const [body, setBody] = external_react_.useState("");
    const [title, setTitle] = external_react_.useState("");
    let userId, token;
    if (false) {}
    const handleSubmit = async ()=>{
        let review = {
            userId,
            title,
            on,
            onModel,
            rate,
            body
        };
        try {
            let review_added = await (0,Main/* AddReview */.zM)({
                review,
                token
            });
            if (review_added.status === 200) {
                setOpen(false);
                router.reload("#reviews");
            } else {
                setStatus("An Error Occured");
            }
        } catch (e) {
            console.error(e);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            userId && /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                className: "redbtn",
                onClick: handleOpen,
                children: "Write Review"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Modal_default()), {
                open: open,
                onClose: handleClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: style,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        container: true,
                        spacing: 3,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                item: true,
                                xs: 12,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        component: "legend",
                                        children: "Review Rate"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Rating_default()), {
                                        name: "simple-controlled",
                                        value: rate,
                                        onChange: (event, newValue)=>{
                                            setRate(newValue);
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    label: "Review Title",
                                    multiline: true,
                                    fullWidth: true,
                                    value: title,
                                    onChange: (e)=>setTitle(e.target.value)
                                    ,
                                    variant: "standard"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                    label: "Review Body",
                                    multiline: true,
                                    maxRows: 10,
                                    fullWidth: true,
                                    value: body,
                                    onChange: (e)=>setBody(e.target.value)
                                    ,
                                    variant: "standard"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 12,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                    fullWidth: true,
                                    onClick: handleSubmit,
                                    className: "redbtn",
                                    children: "Write Review"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const WriteReview = (WriteReviewComponent);

;// CONCATENATED MODULE: ./components/ReviewsComponent.jsx






const ReviewsComponent = ({ id , title , review_count  })=>{
    const { 0: reviews , 1: setReviews  } = (0,external_react_.useState)([]);
    const { 0: perPage , 1: setPerPage  } = (0,external_react_.useState)(20);
    const { 0: page , 1: setPage  } = (0,external_react_.useState)(1);
    const perPageHandler = (e)=>{
        setPerPage(parseInt(e.target.value));
    };
    const pageHandler = (event, value)=>{
        setPage(value);
    };
    const reviewAdded = ()=>{
        console.log("Review Added");
    };
    (0,external_react_.useEffect)(async ()=>{
        try {
            var ref;
            let reviewData = await (0,Main/* getStreamReviews */.iw)(id, perPage, page);
            setReviews(reviewData === null || reviewData === void 0 ? void 0 : (ref = reviewData.data) === null || ref === void 0 ? void 0 : ref.statusMessage);
        } catch (e) {
            console.error(e);
        }
    }, [
        perPage,
        page,
        reviewAdded
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "reviews",
        className: "tab review",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "rv-hd",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "div",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Related Movies To"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    children: title
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(WriteReview, {
                            on: id,
                            onModel: "Movies",
                            reviewAdded: reviewAdded
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "topbar-filter",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "Found ",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        reviews === null || reviews === void 0 ? void 0 : reviews.length,
                                        " reviews"
                                    ]
                                }),
                                " in total"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            children: "Filter by:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "popularity",
                                    children: "Popularity Descending"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "popularity",
                                    children: "Popularity Ascending"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "rating",
                                    children: "Rating Descending"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "rating",
                                    children: "Rating Ascending"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "date",
                                    children: "Release date Descending"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "date",
                                    children: "Release date Ascending"
                                })
                            ]
                        })
                    ]
                }),
                (reviews === null || reviews === void 0 ? void 0 : reviews.length) > 0 ? reviews.map((review)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mv-user-review-item",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: review.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "no-star",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: `ion-android-star ${review.rate >= 1 ? "" : "last"}`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: `ion-android-star ${review.rate >= 2 ? "" : "last"}`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: `ion-android-star ${review.rate >= 3 ? "" : "last"}`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: `ion-android-star ${review.rate >= 4 ? "" : "last"}`
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: `ion-android-star ${review.rate >= 5 ? "" : "last"}`
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "time",
                                    children: [
                                        (0,contenthelper/* BeautifyShortDate */.Nd)(review.createdAt),
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "#",
                                            children: [
                                                " ",
                                                `${review.userId.firstName} ${review.userId.lastName}`
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: review.body
                                })
                            ]
                        }, review._id)
                    })
                ) : /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                    style: {
                        color: "white"
                    },
                    children: "No Reviews Available"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "topbar-filter",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            children: "Movies per page:"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                            onChange: perPageHandler,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "1",
                                    children: "1 Movies"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "10",
                                    children: "10 Movies"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "15",
                                    children: "15 Movies"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    selected: true,
                                    value: "20",
                                    children: "20 Movies"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "25",
                                    children: "25 Movies"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "50",
                                    children: "50 Movies"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    value: "100",
                                    children: "100 Movies"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pagination2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        "Page 1 of ",
                                        (review_count / perPage).toFixed(0) || 1,
                                        ":"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Pagination_default()), {
                                    size: "small",
                                    style: {
                                        color: "red"
                                    },
                                    count: 10,
                                    page: page,
                                    onChange: pageHandler
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_ReviewsComponent = (ReviewsComponent);


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