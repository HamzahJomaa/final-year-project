(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[494],{1121:function(s,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movie/[id]/[title]",function(){return a(2820)}])},2820:function(s,e,a){"use strict";a.r(e),a.d(e,{__N_SSP:function(){return u}});var i=a(4051),l=a.n(i),r=a(5893),c=a(7294),t=a(1163),n=a(529),d=a(5705),o=a(5059),h=a(7516),m=a(5541),x=a(2180);function j(s,e){(null==e||e>s.length)&&(e=s.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=s[a];return i}function g(s,e,a,i,l,r,c){try{var t=s[r](c),n=t.value}catch(d){return void a(d)}t.done?e(n):Promise.resolve(n).then(i,l)}function v(s){return function(){var e=this,a=arguments;return new Promise((function(i,l){var r=s.apply(e,a);function c(s){g(r,i,l,c,t,"next",s)}function t(s){g(r,i,l,c,t,"throw",s)}c(void 0)}))}}function p(s){return function(s){if(Array.isArray(s))return j(s)}(s)||function(s){if("undefined"!==typeof Symbol&&null!=s[Symbol.iterator]||null!=s["@@iterator"])return Array.from(s)}(s)||function(s,e){if(!s)return;if("string"===typeof s)return j(s,e);var a=Object.prototype.toString.call(s).slice(8,-1);"Object"===a&&s.constructor&&(a=s.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return j(s,e)}(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=!0;e.default=function(s){s.id;var e,a,i,j,g=s.movie,u=s.recommendation,f=s.cast,N=s.images,b=s.last_review,y=s.review_count,w=s.trailer,_=((0,t.useRouter)(),(0,c.useState)(new Date(g.date))),S=_[0],k=(_[1],c.useState.apply(void 0,p(f.crew.filter((function(s){return"Director"===s.job}))))),J=k[0],C=(k[1],c.useState.apply(void 0,p(f.crew.filter((function(s){return"Writer"===s.job}))))),R=C[0],A=(C[1],(0,c.useState)([])),M=(A[0],A[1],(0,c.useState)(!1)),D=M[0],F=M[1];i=localStorage.getItem("id"),j=localStorage.getItem("token");var P=function(){var s=v(l().mark((function s(){var e;return l().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,(0,n.Qh)({StreamModel:"Movies",Stream:g._id,userId:i,token:j});case 3:e=s.sent,console.log(e),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),console.error(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})));return function(){return s.apply(this,arguments)}}();return(0,c.useEffect)(v(l().mark((function s(){var e;return l().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,!i){s.next=8;break}return s.next=4,(0,n.eP)({StreamModel:"Movies",Stream:g._id,userId:i,token:j});case 4:return s.next=6,(0,n.Ot)({profile:i,ref:g._id,token:j});case 6:e=s.sent,F(e.data);case 8:s.next=14;break;case 10:s.prev=10,s.t0=s.catch(0),console.log(s.t0),401!==s.t0.response.status&&403!==s.t0.response.status||localStorage.clear();case 14:case"end":return s.stop()}}),s,null,[[0,10]])}))),[P]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{type:"mv-single-hero",bgimg:null===g||void 0===g?void 0:g.backdrop_path}),(0,r.jsx)("div",{className:"page-single movie-single movie_single",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row ipad-width2",children:[(0,r.jsx)("div",{className:"col-md-4 col-sm-12 col-xs-12",children:(0,r.jsxs)("div",{className:"movie-img sticky-sb",children:[(0,r.jsx)("img",{src:"https://image.tmdb.org/t/p/w342/".concat(null===g||void 0===g?void 0:g.poster_path),alt:""}),(0,r.jsxs)("div",{className:"movie-btn",children:[(0,r.jsxs)("div",{className:"btn-transform transform-vertical red",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("a",{href:"#",className:"item item-1 redbtn",children:[" ",(0,r.jsx)("i",{className:"ion-play"})," Watch Trailer"]})}),(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:"https://www.youtube.com/embed/".concat(w,"?&autoplay=1"),className:"item item-2 redbtn fancybox-media hvr-grow",children:(0,r.jsx)("i",{className:"ion-play"})})})]}),i&&!D&&(0,r.jsxs)("div",{className:"btn-transform transform-vertical",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("button",{onClick:P,className:"item item-1 yellowbtn",children:[" ",(0,r.jsx)("i",{className:"ion-card"})," Buy ticket"]})}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{onClick:P,className:"item item-2 yellowbtn",children:(0,r.jsx)("i",{className:"ion-card"})})})]})]})]})}),(0,r.jsx)("div",{className:"col-md-8 col-sm-12 col-xs-12",children:(0,r.jsxs)("div",{className:"movie-single-ct main-content",children:[(0,r.jsxs)("h1",{className:"bd-hd",children:[null===g||void 0===g?void 0:g.title," ",(0,r.jsx)("span",{children:S.getFullYear()})]}),(0,r.jsxs)("div",{className:"social-btn",children:[(0,r.jsxs)("a",{href:"#",className:"parent-btn",children:[(0,r.jsx)("i",{className:"ion-heart"})," Add to Favorite"]}),(0,r.jsxs)("div",{className:"hover-bnt",children:[(0,r.jsxs)("a",{href:"#",className:"parent-btn",children:[(0,r.jsx)("i",{className:"ion-android-share-alt"}),"share"]}),(0,r.jsxs)("div",{className:"hvr-item",children:[(0,r.jsx)("a",{href:"#",className:"hvr-grow",children:(0,r.jsx)("i",{className:"ion-social-facebook"})}),(0,r.jsx)("a",{href:"#",className:"hvr-grow",children:(0,r.jsx)("i",{className:"ion-social-twitter"})}),(0,r.jsx)("a",{href:"#",className:"hvr-grow",children:(0,r.jsx)("i",{className:"ion-social-googleplus"})}),(0,r.jsx)("a",{href:"#",className:"hvr-grow",children:(0,r.jsx)("i",{className:"ion-social-youtube"})})]})]})]}),(0,r.jsxs)("div",{className:"movie-rate",children:[(0,r.jsxs)("div",{className:"rate",children:[(0,r.jsx)("i",{className:"ion-android-star"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{children:null===g||void 0===g?void 0:g.vote_average.toFixed(0)})," /5",(0,r.jsx)("br",{}),(0,r.jsxs)("span",{className:"rv",children:[null===g||void 0===g?void 0:g.vote_count," Reviews"]})]})]}),(0,r.jsxs)("div",{className:"rate-star",children:[(0,r.jsx)("p",{children:"Rate This Movie: "}),(0,r.jsx)("i",{className:"".concat((null===g||void 0===g?void 0:g.vote_average)>=1?"ion-ios-star":"ion-ios-star-outline"," ")}),(0,r.jsx)("i",{className:"".concat((null===g||void 0===g?void 0:g.vote_average)>=2?"ion-ios-star":"ion-ios-star-outline"," ")}),(0,r.jsx)("i",{className:"".concat((null===g||void 0===g?void 0:g.vote_average)>=3?"ion-ios-star":"ion-ios-star-outline"," ")}),(0,r.jsx)("i",{className:"".concat((null===g||void 0===g?void 0:g.vote_average)>=4?"ion-ios-star":"ion-ios-star-outline"," ")}),(0,r.jsx)("i",{className:"".concat((null===g||void 0===g?void 0:g.vote_average)>=5?"ion-ios-star":"ion-ios-star-outline"," ")})]})]}),(0,r.jsx)("div",{className:"movie-tabs",children:(0,r.jsxs)("div",{className:"tabs",children:[(0,r.jsxs)("ul",{className:"tab-links tabs-mv",children:[(0,r.jsx)("li",{className:"active",children:(0,r.jsx)("a",{href:"#overview",children:"Overview"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#reviews",children:" Reviews"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#cast",children:" Cast & Crew "})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#media",children:" Media"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#moviesrelated",children:" Related Movies"})})]}),(0,r.jsxs)("div",{className:"tab-content",children:[(0,r.jsx)("div",{id:"overview",className:"tab active",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-md-8 col-sm-12 col-xs-12",children:[(0,r.jsx)("p",{children:null===g||void 0===g?void 0:g.overview}),(0,r.jsxs)("div",{className:"title-hd-sm",children:[(0,r.jsx)("h4",{children:"Videos & Photos"}),(0,r.jsxs)("a",{href:"#",className:"time",children:["All 5 Videos & 245 Photos ",(0,r.jsx)("i",{className:"ion-ios-arrow-right"})]})]}),(0,r.jsx)("div",{className:"mvsingle-item ov-item",children:(null===N||void 0===N||null===(e=N.backdrops)||void 0===e?void 0:e.length)>0?null===N||void 0===N||null===(a=N.backdrops)||void 0===a?void 0:a.map((function(s,e){return(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/".concat(s.file_path),children:(0,r.jsx)("img",{src:"https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/".concat(s.file_path),width:"100",alt:""})},e)})):""}),(0,r.jsxs)("div",{className:"title-hd-sm",children:[(0,r.jsx)("h4",{children:"cast"}),(0,r.jsxs)("a",{href:"#",className:"time",children:["Full Cast & Crew ",(0,r.jsx)("i",{className:"ion-ios-arrow-right"})]})]}),(0,r.jsx)("div",{className:"mvcast-item",children:f.cast.length>0?f.cast.map((function(s,e){if(e<11)return(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("img",{src:"images/uploads/cast1.jpg",alt:""}),(0,r.jsx)("a",{href:"#",children:s.name})]}),(0,r.jsx)("p",{children:s.character})]},e)})):""}),b&&(0,r.jsx)(x.Z,{last_review:b})]}),(0,r.jsxs)("div",{className:"col-md-4 col-xs-12 col-sm-12",children:[(0,r.jsxs)("div",{className:"sb-it",children:[(0,r.jsx)("h6",{children:"Director: "}),(0,r.jsx)("p",{children:null===J||void 0===J?void 0:J.name})]}),(0,r.jsxs)("div",{className:"sb-it",children:[(0,r.jsx)("h6",{children:"Writer: "}),(0,r.jsx)("p",{children:null===R||void 0===R?void 0:R.name})]}),(0,r.jsxs)("div",{className:"sb-it",children:[(0,r.jsx)("h6",{children:"Stars: "}),(0,r.jsxs)("p",{children:[(0,r.jsx)("a",{href:"#",children:"Robert Downey Jr,"})," ",(0,r.jsx)("a",{href:"#",children:"Chris Evans,"})," ",(0,r.jsx)("a",{href:"#",children:"Mark Ruffalo,"}),(0,r.jsx)("a",{href:"#",children:" Scarlett Johansson"})]})]}),(0,r.jsxs)("div",{className:"sb-it",children:[(0,r.jsx)("h6",{children:"Genres:"}),(0,r.jsx)("p",{children:null===g||void 0===g?void 0:g.genres})]}),(0,r.jsxs)("div",{className:"sb-it",children:[(0,r.jsx)("h6",{children:"Release Date:"}),(0,r.jsx)("p",{children:(0,o.Nd)(S)})]}),(0,r.jsxs)("div",{className:"sb-it",children:[(0,r.jsx)("h6",{children:"Run Time:"}),(0,r.jsx)("p",{children:"141 min"})]}),(0,r.jsx)("div",{className:"ads",children:(0,r.jsx)("img",{src:"images/uploads/ads1.png",alt:""})})]})]})}),(0,r.jsx)(h.Z,{review_count:y,type:"Movies",id:g._id,title:g.title}),(0,r.jsx)("div",{id:"cast",className:"tab",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("h3",{children:"Cast & Crew of"}),(0,r.jsx)("h2",{children:"Avengers: Age of Ultron"}),(0,r.jsx)("div",{className:"title-hd-sm",children:(0,r.jsx)("h4",{children:"Directors & Credit Writers"})}),(0,r.jsx)("div",{className:"mvcast-item",children:(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"JW"}),(0,r.jsx)("a",{href:"#",children:"Joss Whedon"})]}),(0,r.jsx)("p",{children:"... Director"})]})}),(0,r.jsx)("div",{className:"title-hd-sm",children:(0,r.jsx)("h4",{children:"Directors & Credit Writers"})}),(0,r.jsxs)("div",{className:"mvcast-item",children:[(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"SL"}),(0,r.jsx)("a",{href:"#",children:"Stan Lee"})]}),(0,r.jsx)("p",{children:"... (based on Marvel comics)"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"JK"}),(0,r.jsx)("a",{href:"#",children:"Jack Kirby"})]}),(0,r.jsx)("p",{children:"... (based on Marvel comics)"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"JS"}),(0,r.jsx)("a",{href:"#",children:"Joe Simon"})]}),(0,r.jsx)("p",{children:"... (character created by: Captain America)"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"JS"}),(0,r.jsx)("a",{href:"#",children:"Joe Simon"})]}),(0,r.jsx)("p",{children:"... (character created by: Thanos)"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"RT"}),(0,r.jsx)("a",{href:"#",children:"Roy Thomas"})]}),(0,r.jsx)("p",{children:"... (character created by: Ultron, Vision)"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"JB"}),(0,r.jsx)("a",{href:"#",children:"John Buscema"})]}),(0,r.jsx)("p",{children:"... (character created by: Ultron, Vision)"})]})]}),(0,r.jsx)("div",{className:"title-hd-sm",children:(0,r.jsx)("h4",{children:"Cast"})}),(0,r.jsxs)("div",{className:"mvcast-item",children:[(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("img",{src:"images/uploads/cast1.jpg",alt:""}),(0,r.jsx)("a",{href:"#",children:"Robert Downey Jr."})]}),(0,r.jsx)("p",{children:"... Robert Downey Jr."})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("img",{src:"images/uploads/cast2.jpg",alt:""}),(0,r.jsx)("a",{href:"#",children:"Chris Hemsworth"})]}),(0,r.jsx)("p",{children:"... Thor"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("img",{src:"images/uploads/cast3.jpg",alt:""}),(0,r.jsx)("a",{href:"#",children:"Mark Ruffalo"})]}),(0,r.jsx)("p",{children:"... Bruce Banner/ Hulk"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("img",{src:"images/uploads/cast4.jpg",alt:""}),(0,r.jsx)("a",{href:"#",children:"Chris Evans"})]}),(0,r.jsx)("p",{children:"... Steve Rogers/ Captain America"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("img",{src:"images/uploads/cast5.jpg",alt:""}),(0,r.jsx)("a",{href:"#",children:"Scarlett Johansson"})]}),(0,r.jsx)("p",{children:"... Natasha Romanoff/ Black Widow"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("img",{src:"images/uploads/cast6.jpg",alt:""}),(0,r.jsx)("a",{href:"#",children:"Jeremy Renner"})]}),(0,r.jsx)("p",{children:"... Clint Barton/ Hawkeye"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("img",{src:"images/uploads/cast7.jpg",alt:""}),(0,r.jsx)("a",{href:"#",children:"James Spader"})]}),(0,r.jsx)("p",{children:"... Ultron"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("img",{src:"images/uploads/cast9.jpg",alt:""}),(0,r.jsx)("a",{href:"#",children:"Don Cheadle"})]}),(0,r.jsx)("p",{children:"... James Rhodes/ War Machine"})]})]}),(0,r.jsx)("div",{className:"title-hd-sm",children:(0,r.jsx)("h4",{children:"Produced by"})}),(0,r.jsxs)("div",{className:"mvcast-item",children:[(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"VA"}),(0,r.jsx)("a",{href:"#",children:"Victoria Alonso"})]}),(0,r.jsx)("p",{children:"... executive producer"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"MB"}),(0,r.jsx)("a",{href:"#",children:"Mitchel Bell"})]}),(0,r.jsx)("p",{children:"... co-producer (as Mitch Bell)"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"JC"}),(0,r.jsx)("a",{href:"#",children:"Jamie Christopher"})]}),(0,r.jsx)("p",{children:"... associate producer"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"LD"}),(0,r.jsx)("a",{href:"#",children:"Louis D\u2019Esposito"})]}),(0,r.jsx)("p",{children:"... executive producer"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"JF"}),(0,r.jsx)("a",{href:"#",children:"Jon Favreau"})]}),(0,r.jsx)("p",{children:"... executive producer"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"KF"}),(0,r.jsx)("a",{href:"#",children:"Kevin Feige"})]}),(0,r.jsx)("p",{children:"... producer"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"AF"}),(0,r.jsx)("a",{href:"#",children:"Alan Fine"})]}),(0,r.jsx)("p",{children:"... executive producer"})]}),(0,r.jsxs)("div",{className:"cast-it",children:[(0,r.jsxs)("div",{className:"cast-left",children:[(0,r.jsx)("h4",{children:"JF"}),(0,r.jsx)("a",{href:"#",children:"Jeffrey Ford"})]}),(0,r.jsx)("p",{children:"... associate producer"})]})]})]})}),(0,r.jsx)("div",{id:"media",className:"tab",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"rv-hd",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Videos & Photos of"}),(0,r.jsx)("h2",{children:"Skyfall: Quantum of Spectre"})]})}),(0,r.jsx)("div",{className:"title-hd-sm",children:(0,r.jsxs)("h4",{children:["Photos ",(0,r.jsxs)("span",{children:[" (",N.backdrops.length,")"]})]})}),(0,r.jsxs)("div",{className:"mvsingle-item",children:[(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image11.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image1.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image21.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image2.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image31.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image3.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image41.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image4.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image51.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image5.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image61.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image6.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image71.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image7.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image81.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image8.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image91.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image9.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image101.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image10.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image111.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image1-1.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image121.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image12.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image131.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image13.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image141.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image14.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image151.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image15.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image161.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image16.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image171.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image17.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image181.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image18.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image191.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image19.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image201.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image20.jpg",alt:""})}),(0,r.jsx)("a",{className:"img-lightbox","data-fancybox-group":"gallery",href:"images/uploads/image211.jpg",children:(0,r.jsx)("img",{src:"images/uploads/image2-1.jpg",alt:""})})]})]})}),(0,r.jsx)(m.Z,{recommendation:u})]})]})})]})})]})})})]})}}},function(s){s.O(0,[428,376,54,862,85,774,888,179],(function(){return e=1121,s(s.s=e);var e}));var e=s.O();_N_E=e}]);