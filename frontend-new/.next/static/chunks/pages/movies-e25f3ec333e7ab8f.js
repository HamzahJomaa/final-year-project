(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{9681:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies",function(){return t(7052)}])},529:function(e,n,t){"use strict";t.d(n,{Dy:function(){return u},zM:function(){return d},Ot:function(){return v},Qh:function(){return h},eP:function(){return p},iQ:function(){return f},Ai:function(){return m},xe:function(){return x},iw:function(){return j},w8:function(){return g}});var r=t(4051),i=t.n(r),a=t(9669),s=t.n(a),c=t(8498);function o(e,n,t,r,i,a,s){try{var c=e[a](s),o=c.value}catch(l){return void t(l)}c.done?n(o):Promise.resolve(o).then(r,i)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function s(e){o(a,r,i,s,c,"next",e)}function c(e){o(a,r,i,s,c,"throw",e)}s(void 0)}))}}var u=function(){var e=l(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,r=n.token,e.next=3,s().get("".concat(c.A,"/review/user"),{headers:{"x-access-token":r,user:t}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=l(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.review,r=n.token,e.next=3,s().post("".concat(c.A,"/review/add"),{review:t},{headers:{"x-access-token":r}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=l(i().mark((function e(n){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.profile,r=n.ref,a=n.token,e.next=3,s().get("".concat(c.A,"/profile/ticket"),{headers:{"x-access-token":a,userid:t,ref:r}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=l(i().mark((function e(n){var t,r,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.StreamModel,r=n.Stream,a=n.userId,o=n.token,e.next=3,s().patch("".concat(c.A,"/profile/ticket"),{userId:a,Stream:r,StreamModel:t},{headers:{"x-access-token":o}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=l(i().mark((function e(n){var t,r,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.StreamModel,r=n.Stream,a=n.userId,o=n.token,e.next=3,s().post("".concat(c.A,"/stream/visit"),{StreamModel:t,Stream:r,userId:a},{headers:{"x-access-token":o}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=l(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(c.A,"/nationality"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=l(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.userId,e.next=3,s().get("".concat(c.A,"/profile/").concat(t));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=l(i().mark((function e(n,t,r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(c.A,"/stream/").concat(n,"/").concat(r,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),j=function(){var e=l(i().mark((function e(n,t,r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(c.A,"/review/ref/").concat(t,"/").concat(r),{headers:{ref:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),g=(function(){var e=l(i().mark((function e(n,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(c.A,"/stream/").concat(n,"/id/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))}(),function(){var e=l(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("".concat(c.A,"/homepage"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}())},5705:function(e,n,t){"use strict";var r=t(5893);t(7294);n.Z=function(e){var n=e.type,t=e.title,i=e.location,a=e.bgimg;return(0,r.jsx)("div",{className:"hero ".concat(n),style:{background:"url('".concat("common-hero"==n||"user-hero"==n?"":"https://image.tmdb.org/t/p/w1920_and_h800_multi_faces","/").concat(a,"')")},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-md-12",children:(0,r.jsxs)("div",{className:"hero-ct",children:[(0,r.jsx)("h1",{children:t}),(0,r.jsxs)("ul",{className:"breadcumb",children:[i?i.map((function(e,n){if(n!==i.length-1)return(0,r.jsxs)("li",{className:"active",children:[(0,r.jsx)("a",{href:"#",children:e}),(0,r.jsx)("span",{className:"ion-ios-arrow-right"})]})})):"",(0,r.jsx)("li",{children:i&&i[i.length-1]})]})]})})})})})}},5742:function(e,n,t){"use strict";var r=t(5893),i=t(5675),a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=function(){var e=navigator.connection||navigator.mozConnection||navigator.webkitConnection;return"cellular"===(null===e||void 0===e?void 0:e.type)||"slow-2g"===(null===e||void 0===e?void 0:e.effectiveType)||"2g"===(null===e||void 0===e?void 0:e.effectiveType)||"3g"===(null===e||void 0===e?void 0:e.effectiveType)||!0===(null===e||void 0===e?void 0:e.saveData)},o=function(e){if(window.requestIdleCallback){var n=window.requestIdleCallback(e);return function(){return window.cancelIdleCallback(n)}}var t=setTimeout(e,2345+1e3*Math.random());return function(){return clearTimeout(t)}};n.Z=function(e){var n=(0,a.useState)(e.loading),t=n[0],l=n[1];return(0,a.useEffect)((function(){if("eager"!==e.loading&&!e.priority&&!c()){var n,t=function(){n=o((function(){return l("eager")}))};return window.addEventListener("load",t),function(){window.removeEventListener("load",t),n&&n()}}}),[e.loading,e.priority]),(0,r.jsx)(i.default,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}({loading:t},e))}},5059:function(e,n,t){"use strict";t.d(n,{Eg:function(){return r},pb:function(){return i},Nd:function(){return a}});var r=function(e){return e.toLowerCase().replaceAll(" ","_")},i=function(e,n){return(e?e.replace(/<[^>]+>/g,""):"").split(" ").splice(0,n).join(" ")},a=function(e){var n=(e=new Date(e)).getDate(),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],r=e.getFullYear();return"".concat(n," ").concat(t," ").concat(r)}},7052:function(e,n,t){"use strict";t.r(n);var r=t(4051),i=t.n(r),a=t(5893),s=t(7294),c=t(5705),o=t(529),l=t(5059),u=t(5054),d=(t(5675),t(5742));function v(e,n,t,r,i,a,s){try{var c=e[a](s),o=c.value}catch(l){return void t(l)}c.done?n(o):Promise.resolve(o).then(r,i)}n.default=function(){var e,n,t,r=(0,s.useState)([]),h=r[0],p=r[1],f=(0,s.useState)([]),m=f[0],x=f[1],j=(0,s.useState)(20),g=j[0],w=j[1],b=(0,s.useState)(1),N=b[0],y=b[1],k=(0,s.useState)(!1),A=k[0],_=k[1];return(0,s.useEffect)((t=i().mark((function e(){var n,t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=5,(0,o.xe)("movie",N,g);case 5:r=e.sent,x(null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.metadata),p(null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:return e.prev=13,_(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})),function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function s(e){v(a,r,i,s,c,"next",e)}function c(e){v(a,r,i,s,c,"throw",e)}s(void 0)}))}),[g,N]),(0,a.jsxs)("div",{children:[(0,a.jsx)(c.Z,{type:"common-hero",title:"Movie Listing",bgimg:"slider-bg.jpeg",location:["home","movies"]}),(0,a.jsx)("div",{className:"page-single",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row ipad-width",children:[(0,a.jsxs)("div",{className:"col-md-8 col-sm-12 col-xs-12",children:[(0,a.jsxs)("div",{className:"topbar-filter",children:[(0,a.jsxs)("p",{children:["Found ",(0,a.jsxs)("span",{children:[null===(e=m[0])||void 0===e?void 0:e.total," movies"]})," in total"]}),(0,a.jsx)("label",{children:"Sort by:"}),(0,a.jsxs)("select",{children:[(0,a.jsx)("option",{value:"popularity",children:"Popularity Descending"}),(0,a.jsx)("option",{value:"popularity",children:"Popularity Ascending"}),(0,a.jsx)("option",{value:"rating",children:"Rating Descending"}),(0,a.jsx)("option",{value:"rating",children:"Rating Ascending"}),(0,a.jsx)("option",{value:"date",children:"Release date Descending"}),(0,a.jsx)("option",{value:"date",children:"Release date Ascending"})]}),(0,a.jsx)("a",{href:"movielist.html",className:"list",children:(0,a.jsx)("i",{className:"ion-ios-list-outline "})}),(0,a.jsx)("a",{href:"moviegrid.html",className:"grid",children:(0,a.jsx)("i",{className:"ion-grid active"})})]}),(0,a.jsx)("div",{className:"flex-wrap-movielist",children:h.length>0&&!A?h.map((function(e,n){return(0,a.jsxs)("div",{className:"movie-item-style-2 movie-item-style-1",children:[(0,a.jsx)(d.Z,{src:"https://image.tmdb.org/t/p/w342/".concat(null===e||void 0===e?void 0:e.poster_path),alt:"I'm a lazy image",width:"600",loading:"eager",height:"800",placeholder:"blur",blurDataURL:"/images/owl.video.play.png"}),(0,a.jsx)("div",{className:"hvr-inner",children:(0,a.jsxs)("a",{href:"./movie/".concat(null===e||void 0===e?void 0:e.tmdb,"/").concat((0,l.Eg)(null===e||void 0===e?void 0:e.title)),children:[" Read more ",(0,a.jsx)("i",{className:"ion-android-arrow-dropright"})," "]})}),(0,a.jsxs)("div",{className:"mv-item-infor",children:[(0,a.jsx)("h6",{children:(0,a.jsx)("a",{href:"#",children:null===e||void 0===e?void 0:e.title})}),(0,a.jsxs)("p",{className:"rate",children:[(0,a.jsx)("i",{className:"ion-android-star"}),(0,a.jsx)("span",{children:null===e||void 0===e?void 0:e.vote_average.toFixed(1)})," /5"]})]})]},n)})):"No Results"}),(0,a.jsxs)("div",{className:"topbar-filter",children:[(0,a.jsx)("label",{children:"Movies per page:"}),(0,a.jsxs)("select",{onChange:function(e){w(parseInt(e.target.value))},children:[(0,a.jsx)("option",{value:"5",children:"5 Movies"}),(0,a.jsx)("option",{value:"10",children:"10 Movies"}),(0,a.jsx)("option",{value:"15",children:"15 Movies"}),(0,a.jsx)("option",{selected:!0,value:"20",children:"20 Movies"}),(0,a.jsx)("option",{value:"25",children:"25 Movies"}),(0,a.jsx)("option",{value:"50",children:"50 Movies"}),(0,a.jsx)("option",{value:"100",children:"100 Movies"})]}),(0,a.jsxs)("div",{className:"pagination2",children:[(0,a.jsxs)("span",{children:["Page 1 of ",((null===(n=m[0])||void 0===n?void 0:n.total)/g).toFixed(0),":"]}),(0,a.jsx)(u.Z,{size:"small",style:{color:"red"},count:10,page:N,onChange:function(e,n){y(n)}})]})]})]}),(0,a.jsx)("div",{className:"col-md-4 col-sm-12 col-xs-12",children:(0,a.jsxs)("div",{className:"sidebar",children:[(0,a.jsxs)("div",{className:"searh-form",children:[(0,a.jsx)("h4",{className:"sb-title",children:"Search for movie"}),(0,a.jsx)("form",{className:"form-style-1",action:"#",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-md-12 form-it",children:[(0,a.jsx)("label",{children:"Movie name"}),(0,a.jsx)("input",{type:"text",placeholder:"Enter keywords"})]}),(0,a.jsxs)("div",{className:"col-md-12 form-it",children:[(0,a.jsx)("label",{children:"Genres & Subgenres"}),(0,a.jsx)("div",{className:"group-ip",children:(0,a.jsxs)("select",{name:"skills",multiple:"",className:"ui fluid dropdown",children:[(0,a.jsx)("option",{value:"",children:"Enter to filter genres"}),(0,a.jsx)("option",{value:"Action1",children:"Action 1"}),(0,a.jsx)("option",{value:"Action2",children:"Action 2"}),(0,a.jsx)("option",{value:"Action3",children:"Action 3"}),(0,a.jsx)("option",{value:"Action4",children:"Action 4"}),(0,a.jsx)("option",{value:"Action5",children:"Action 5"})]})})]}),(0,a.jsxs)("div",{className:"col-md-12 form-it",children:[(0,a.jsx)("label",{children:"Rating Range"}),(0,a.jsxs)("select",{children:[(0,a.jsx)("option",{value:"range",children:"-- Select the rating range below --"}),(0,a.jsx)("option",{value:"saab",children:"-- Select the rating range below --"})]})]}),(0,a.jsxs)("div",{className:"col-md-12 form-it",children:[(0,a.jsx)("label",{children:"Release Year"}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-md-6",children:(0,a.jsxs)("select",{children:[(0,a.jsx)("option",{value:"range",children:"From"}),(0,a.jsx)("option",{value:"number",children:"10"})]})}),(0,a.jsx)("div",{className:"col-md-6",children:(0,a.jsxs)("select",{children:[(0,a.jsx)("option",{value:"range",children:"To"}),(0,a.jsx)("option",{value:"number",children:"20"})]})})]})]}),(0,a.jsx)("div",{className:"col-md-12 ",children:(0,a.jsx)("input",{className:"submit",type:"submit",value:"submit"})})]})})]}),(0,a.jsx)("div",{className:"ads",children:(0,a.jsx)("img",{src:"images/uploads/ads1.png",alt:""})}),(0,a.jsxs)("div",{className:"sb-facebook sb-it",children:[(0,a.jsx)("h4",{className:"sb-title",children:"Find us on Facebook"}),(0,a.jsx)("iframe",{src:"","data-src":"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhaintheme%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId",height:"315",style:{width:"100%",border:"none",overflow:"hidden"}})]}),(0,a.jsxs)("div",{className:"sb-twitter sb-it",children:[(0,a.jsx)("h4",{className:"sb-title",children:"Tweet to us"}),(0,a.jsxs)("div",{className:"slick-tw",children:[(0,a.jsx)("div",{className:"tweet item",id:"599202861751410688"}),(0,a.jsx)("div",{className:"tweet item",id:"297462728598122498"})]})]})]})})]})})})]})}}},function(e){e.O(0,[376,54,675,774,888,179],(function(){return n=9681,e(e.s=n);var n}));var n=e.O();_N_E=n}]);