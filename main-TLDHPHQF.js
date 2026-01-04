import{A as S1,B as M,C as s0,D as D1,E as f0,F as P1,G as q1,H as T1,I as R1,J as j1,K as O1,L as _1,M as U1,N as W1,O as $1,P as b0,Q as X1,R as r0,S as G1,T as Y1,U as J1,V as Q1,W as K1,X as E1,a as M1,b as O,c as m1,d as V1,e as H1,f as C1,g as A1,h as i0,i as Z1,j as q,k as L1,l as Z,m as S,n as _,o as p0,p as R0,q as h0,r as u,s as x,t as F,u as B1,v as G,w as e0,x as F1,y as y1,z as k1}from"./chunk-Q3QBYFUQ.js";var T2=[{path:"",loadChildren:()=>import("./chunk-3YMRDTOI.js").then(a=>a.ComponentsModule)}],z0=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=_({type:a});static \u0275inj=O({imports:[r0.forRoot(T2,{useHash:!0,scrollPositionRestoration:"top",preloadingStrategy:X1,onSameUrlNavigation:"reload"}),r0]})};function O2(a,l){if(a&1){let t=B1();u(0,"a",21),G("click",function(){let h=V1(t).$implicit,e=e0();return H1(e.ChangePage(h))}),M(1),x()}if(a&2){let t=l.$implicit;q(),s0(t)}}function _2(a,l){if(a&1&&(u(0,"span",22),M(1),x()),a&2){let t=e0();q(),s0(t.cartItemCount)}}function U2(a,l){if(a&1&&(u(0,"span",22),M(1),x()),a&2){let t=e0();q(),s0(t.WishlistCount)}}function W2(a,l){if(a&1&&(u(0,"span",23),M(1),x()),a&2){let t=e0();q(),s0(t.WishlistCount)}}var I=class a{constructor(l,t,i,h,e){this.location=l;this.element=t;this.router=i;this.route=h;this.componentsService=e;this.sidebarVisible=!1,this.cartItemCount=0,this.flora_detail=this.componentsService.getAllCategory(),this.flora_detail=Array.from(new Set(this.flora_detail.flatMap(s=>s.split(",").map(r=>r.trim()))))}toggleButton;sidebarVisible;cartItemCount;WishlistCount=0;flora_detail=[];enableColorOnScroll=!1;isMobile=!1;ngOnInit(){let l=this.element.nativeElement;this.toggleButton=l.getElementsByClassName("navbar-toggler")[0],this.router.events.pipe(M1(t=>t instanceof U1)).subscribe(()=>{let t=this.route.root;for(;t.firstChild;)t=t.firstChild;this.enableColorOnScroll=t.snapshot.data.colorOnScroll??!1}),this.componentsService.wishlist$.subscribe(t=>{this.WishlistCount=t.length||0}),this.checkScreen(),window.addEventListener("resize",()=>{this.checkScreen()})}checkScreen(){this.isMobile=window.innerWidth<=768}sidebarOpen(){let l=this.toggleButton,t=document.getElementsByTagName("html")[0];setTimeout(function(){l.classList.add("toggled")},500),t.classList.add("nav-open"),this.sidebarVisible=!0}sidebarClose(){let l=document.getElementsByTagName("html")[0];this.toggleButton.classList.remove("toggled"),this.sidebarVisible=!1,l.classList.remove("nav-open")}sidebarToggle(){this.sidebarVisible===!1?this.sidebarOpen():this.sidebarClose()}ChangePage(l){this.router.navigate(["/collection/",l])}goToWishlist(){this.router.navigate(["/wishlist"])}static \u0275fac=function(t){return new(t||a)(Z(f0),Z(i0),Z(b0),Z(W1),Z(G1))};static \u0275cmp=S({type:a,selectors:[["app-navbar"]],standalone:!1,decls:30,vars:5,consts:[[1,"navbar","navbar-expand-lg","fixed-top","navbar-transparent","nav"],[1,"container"],[1,"navbar-translate"],["src","img/riyaorangery_nobg.png","alt","Description of the image",2,"max-width","5%"],["href","http://rahulrajand.github.io/RiyaOrangery/",1,"navbar-brand"],["ngbDropdown","",1,"d-inline-block","dropdown"],["id","dropdownBasic1","ngbDropdownToggle","",1,"navbar-brand"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1",1,"dropdown"],["class","dropdown-item",3,"click",4,"ngFor","ngForOf"],["type","button","data-toggle","collapse","data-target","#navbarToggler","aria-controls","navbarTogglerDemo02","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","navbar-burger",2,"margin-left","auto",3,"click"],[1,"navbar-toggler-bar"],["id","navbarToggler",1,"navbar-collapse"],[1,"navbar-nav","ml-auto"],[1,"nav-item"],["rel","tooltip","title","Cart","data-placement","bottom","target","_blank",1,"nav-link",2,"position","relative"],[1,"nc-icon","nc-bag-16"],[1,"d-lg-none"],["class","cart-count","style","position: absolute; top: 0px; right: 0px",4,"ngIf"],["rel","tooltip","title","Wishlist","data-placement","bottom","target","_blank",1,"nav-link",2,"position","relative",3,"click"],[1,"nc-icon","nc-favourite-28"],["class","cart-count","style","position: absolute",4,"ngIf"],[1,"dropdown-item",3,"click"],[1,"cart-count",2,"position","absolute","top","0px","right","0px"],[1,"cart-count",2,"position","absolute"]],template:function(t,i){t&1&&(u(0,"nav",0)(1,"div",1)(2,"div",2),F(3,"img",3),u(4,"a",4),M(5,"Riya Orangery"),x(),u(6,"div",5)(7,"a",6),M(8,"Flora"),x(),u(9,"div",7),p0(10,O2,2,1,"a",8),x()(),u(11,"button",9),G("click",function(){return i.sidebarToggle()}),F(12,"span",10)(13,"span",10)(14,"span",10),x()(),u(15,"div",11)(16,"ul",12)(17,"li",13)(18,"a",14),F(19,"i",15),u(20,"p",16),M(21,"Cart\xA0"),x(),p0(22,_2,2,1,"span",17),x()(),u(23,"li",13)(24,"a",18),G("click",function(){return i.goToWishlist()}),F(25,"i",19),u(26,"p",16),M(27,"Wishlist\xA0"),x(),p0(28,U2,2,1,"span",17)(29,W2,2,1,"span",20),x()()()()()()),t&2&&(R0("color-on-scroll",i.enableColorOnScroll?"500":null),q(10),h0("ngForOf",i.flora_detail),q(12),h0("ngIf",i.cartItemCount!==0),q(6),h0("ngIf",i.WishlistCount!==0&&!i.isMobile),q(),h0("ngIf",i.WishlistCount!==0&&i.isMobile))},dependencies:[q1,T1,Q1,J1,Y1],encapsulation:2})};var u0=class a{isVisible=!1;onWindowScroll(){this.isVisible=window.scrollY>300}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=S({type:a,selectors:[["app-scroll-to-top"]],hostBindings:function(t,i){t&1&&G("scroll",function(){return i.onWindowScroll()},Z1)},standalone:!1,decls:2,vars:2,consts:[["aria-label","Scroll to top",1,"scroll-top",3,"click"]],template:function(t,i){t&1&&(u(0,"button",0),G("click",function(){return i.scrollToTop()}),M(1,` \u2191
`),x()),t&2&&S1("show",i.isVisible)},styles:[".scroll-top[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:30px;width:48px;height:48px;border-radius:50%;border:none;background:#000;color:#fff;font-size:22px;cursor:pointer;z-index:9999;opacity:0;pointer-events:none;transition:opacity .3s,transform .3s}.scroll-top.show[_ngcontent-%COMP%]{opacity:1;pointer-events:auto}.scroll-top[_ngcontent-%COMP%]:hover{transform:scale(1.1)}"]})};var x0=class a{test=new Date;static \u0275fac=function(t){return new(t||a)};static \u0275cmp=S({type:a,selectors:[["app-footer"]],standalone:!1,decls:28,vars:0,consts:[[1,"footer",2,"background-color","rgb(87, 65, 39)"],[1,"container"],[1,"row"],[1,"footer-nav"],[1,"container","footer-section"],[1,"footer-section-item"]],template:function(t,i){t&1&&(u(0,"footer",0)(1,"div",1)(2,"div",2)(3,"nav",3)(4,"ul")(5,"li")(6,"a"),M(7,"Riya Orangery"),x()(),u(8,"li")(9,"a"),M(10,"About Us"),x()(),u(11,"li")(12,"a"),M(13,"Contact Us"),x()()()()()(),F(14,"hr"),u(15,"div",4)(16,"div",5)(17,"h6"),M(18,"40, East Car Street, Chinnamanur, Theni District - 625515"),x()(),u(19,"div",5)(20,"h6"),M(21,"7373829090"),F(22,"br"),M(23,"rahulrajand@gmail.com"),x()(),F(24,"div",5),u(25,"div",5)(26,"h6"),M(27,"Let's create the garden of your dream"),x()()()())},encapsulation:2})};var M0=class a{constructor(l,t,i,h,e){this.renderer=l;this.router=t;this.document=i;this.element=h;this.location=e}navbarr;ngOnInit(){let l=this.element.nativeElement.children[0].children[0],t=()=>{if(window.location.hash.toLowerCase().includes("/product")){l.classList.remove("navbar-transparent");return}window.pageYOffset<150?l.classList.add("navbar-transparent"):l.classList.remove("navbar-transparent")};t(),this.renderer.listen("window","scroll",()=>{t()}),this.renderer.listen("window","popstate",()=>{t()})}removeFooter(){var l=this.location.prepareExternalUrl(this.location.path());return l=l.slice(1),!(l==="signup"||l==="nucleoicons")}static \u0275fac=function(t){return new(t||a)(Z(L1),Z(b0),Z(C1),Z(i0),Z(f0))};static \u0275cmp=S({type:a,selectors:[["app-root"]],viewQuery:function(t,i){if(t&1&&F1(I,5),t&2){let h;y1(h=k1())&&(i.navbarr=h.first)}},standalone:!1,decls:4,vars:0,template:function(t,i){t&1&&F(0,"app-navbar")(1,"router-outlet")(2,"app-scroll-to-top")(3,"app-footer")},dependencies:[$1,I,u0,x0],encapsulation:2})};function Y0(a,l){(l==null||l>a.length)&&(l=a.length);for(var t=0,i=Array(l);t<l;t++)i[t]=a[t];return i}function Y2(a){if(Array.isArray(a))return a}function J2(a){if(Array.isArray(a))return Y0(a)}function Q2(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function I1(a,l){for(var t=0;t<l.length;t++){var i=l[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,F5(i.key),i)}}function K2(a,l,t){return l&&I1(a.prototype,l),t&&I1(a,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function H0(a,l){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=o1(a))||l&&a&&typeof a.length=="number"){t&&(a=t);var i=0,h=function(){};return{s:h,n:function(){return i>=a.length?{done:!0}:{done:!1,value:a[i++]}},e:function(o){throw o},f:h}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var e,s=!0,r=!1;return{s:function(){t=t.call(a)},n:function(){var o=t.next();return s=o.done,o},e:function(o){r=!0,e=o},f:function(){try{s||t.return==null||t.return()}finally{if(r)throw e}}}}function d(a,l,t){return(l=F5(l))in a?Object.defineProperty(a,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[l]=t,a}function E2(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function I2(a,l){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var i,h,e,s,r=[],o=!0,c=!1;try{if(e=(t=t.call(a)).next,l===0){if(Object(t)!==t)return;o=!1}else for(;!(o=(i=e.call(t)).done)&&(r.push(i.value),r.length!==l);o=!0);}catch(n){c=!0,h=n}finally{try{if(!o&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw h}}return r}}function N2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function N1(a,l){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);l&&(i=i.filter(function(h){return Object.getOwnPropertyDescriptor(a,h).enumerable})),t.push.apply(t,i)}return t}function v(a){for(var l=1;l<arguments.length;l++){var t=arguments[l]!=null?arguments[l]:{};l%2?N1(Object(t),!0).forEach(function(i){d(a,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):N1(Object(t)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(t,i))})}return a}function F0(a,l){return Y2(a)||I2(a,l)||o1(a,l)||N2()}function k(a){return J2(a)||E2(a)||o1(a)||a3()}function l3(a,l){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var i=t.call(a,l||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function F5(a){var l=l3(a,"string");return typeof l=="symbol"?l:l+""}function Z0(a){"@babel/helpers - typeof";return Z0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},Z0(a)}function o1(a,l){if(a){if(typeof a=="string")return Y0(a,l);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Y0(a,l):void 0}}var a5=function(){},v1={},y5={},k5=null,S5={mark:a5,measure:a5};try{typeof window<"u"&&(v1=window),typeof document<"u"&&(y5=document),typeof MutationObserver<"u"&&(k5=MutationObserver),typeof performance<"u"&&(S5=performance)}catch{}var t3=v1.navigator||{},l5=t3.userAgent,t5=l5===void 0?"":l5,W=v1,b=y5,i5=k5,m0=S5,La=!!W.document,j=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",D5=~t5.indexOf("MSIE")||~t5.indexOf("Trident/"),O0,i3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,h3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,P5={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},e3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},q5=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],H="classic",g0="duotone",T5="sharp",R5="sharp-duotone",j5="chisel",O5="etch",_5="jelly",U5="jelly-duo",W5="jelly-fill",$5="notdog",X5="notdog-duo",G5="slab",Y5="slab-press",J5="thumbprint",Q5="utility",K5="utility-duo",E5="utility-fill",I5="whiteboard",s3="Classic",r3="Duotone",o3="Sharp",v3="Sharp Duotone",c3="Chisel",w3="Etch",g3="Jelly",n3="Jelly Duo",d3="Jelly Fill",p3="Notdog",f3="Notdog Duo",b3="Slab",z3="Slab Press",u3="Thumbprint",x3="Utility",M3="Utility Duo",m3="Utility Fill",V3="Whiteboard",N5=[H,g0,T5,R5,j5,O5,_5,U5,W5,$5,X5,G5,Y5,J5,Q5,K5,E5,I5],Ba=(O0={},d(d(d(d(d(d(d(d(d(d(O0,H,s3),g0,r3),T5,o3),R5,v3),j5,c3),O5,w3),_5,g3),U5,n3),W5,d3),$5,p3),d(d(d(d(d(d(d(d(O0,X5,f3),G5,b3),Y5,z3),J5,u3),Q5,x3),K5,M3),E5,m3),I5,V3)),H3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},C3={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},A3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Z3={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},a2=["fak","fa-kit","fakd","fa-kit-duotone"],h5={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},L3=["kit"],B3="kit",F3="kit-duotone",y3="Kit",k3="Kit Duotone",Fa=d(d({},B3,y3),F3,k3),S3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},D3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},P3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},e5={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},_0,V0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},q3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],T3="classic",R3="duotone",j3="sharp",O3="sharp-duotone",_3="chisel",U3="etch",W3="jelly",$3="jelly-duo",X3="jelly-fill",G3="notdog",Y3="notdog-duo",J3="slab",Q3="slab-press",K3="thumbprint",E3="utility",I3="utility-duo",N3="utility-fill",a6="whiteboard",l6="Classic",t6="Duotone",i6="Sharp",h6="Sharp Duotone",e6="Chisel",s6="Etch",r6="Jelly",o6="Jelly Duo",v6="Jelly Fill",c6="Notdog",w6="Notdog Duo",g6="Slab",n6="Slab Press",d6="Thumbprint",p6="Utility",f6="Utility Duo",b6="Utility Fill",z6="Whiteboard",ya=(_0={},d(d(d(d(d(d(d(d(d(d(_0,T3,l6),R3,t6),j3,i6),O3,h6),_3,e6),U3,s6),W3,r6),$3,o6),X3,v6),G3,c6),d(d(d(d(d(d(d(d(_0,Y3,w6),J3,g6),Q3,n6),K3,d6),E3,p6),I3,f6),N3,b6),a6,z6)),u6="kit",x6="kit-duotone",M6="Kit",m6="Kit Duotone",ka=d(d({},u6,M6),x6,m6),V6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},H6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},J0={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},C6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],l2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(q3,C6),A6=["solid","regular","light","thin","duotone","brands","semibold"],t2=[1,2,3,4,5,6,7,8,9,10],Z6=t2.concat([11,12,13,14,15,16,17,18,19,20]),L6=["aw","fw","pull-left","pull-right"],B6=[].concat(k(Object.keys(H6)),A6,L6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",V0.GROUP,V0.SWAP_OPACITY,V0.PRIMARY,V0.SECONDARY]).concat(t2.map(function(a){return"".concat(a,"x")})).concat(Z6.map(function(a){return"w-".concat(a)})),F6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},T="___FONT_AWESOME___",Q0=16,i2="fa",h2="svg-inline--fa",Q="data-fa-i2svg",K0="data-fa-pseudo-element",y6="data-fa-pseudo-element-pending",c1="data-prefix",w1="data-icon",s5="fontawesome-i2svg",k6="async",S6=["HTML","HEAD","STYLE","SCRIPT"],e2=["::before","::after",":before",":after"],s2=(function(){try{return!0}catch{return!1}})();function n0(a){return new Proxy(a,{get:function(t,i){return i in t?t[i]:t[H]}})}var r2=v({},P5);r2[H]=v(v(v(v({},{"fa-duotone":"duotone"}),P5[H]),h5.kit),h5["kit-duotone"]);var D6=n0(r2),E0=v({},Z3);E0[H]=v(v(v(v({},{duotone:"fad"}),E0[H]),e5.kit),e5["kit-duotone"]);var r5=n0(E0),I0=v({},J0);I0[H]=v(v({},I0[H]),P3.kit);var g1=n0(I0),N0=v({},V6);N0[H]=v(v({},N0[H]),S3.kit);var Sa=n0(N0),P6=i3,o2="fa-layers-text",q6=h3,T6=v({},H3),Da=n0(T6),R6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],U0=e3,j6=[].concat(k(L3),k(B6)),v0=W.FontAwesomeConfig||{};function O6(a){var l=b.querySelector("script["+a+"]");if(l)return l.getAttribute(a)}function _6(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}b&&typeof b.querySelector=="function"&&(o5=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],o5.forEach(function(a){var l=F0(a,2),t=l[0],i=l[1],h=_6(O6(t));h!=null&&(v0[i]=h)}));var o5,v2={styleDefault:"solid",familyDefault:H,cssPrefix:i2,replacementClass:h2,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};v0.familyPrefix&&(v0.cssPrefix=v0.familyPrefix);var l0=v(v({},v2),v0);l0.autoReplaceSvg||(l0.observeMutations=!1);var g={};Object.keys(v2).forEach(function(a){Object.defineProperty(g,a,{enumerable:!0,set:function(t){l0[a]=t,c0.forEach(function(i){return i(g)})},get:function(){return l0[a]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(l){l0.cssPrefix=l,c0.forEach(function(t){return t(g)})},get:function(){return l0.cssPrefix}});W.FontAwesomeConfig=g;var c0=[];function U6(a){return c0.push(a),function(){c0.splice(c0.indexOf(a),1)}}var U=Q0,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function W6(a){if(!(!a||!j)){var l=b.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=a;for(var t=b.head.childNodes,i=null,h=t.length-1;h>-1;h--){var e=t[h],s=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=e)}return b.head.insertBefore(l,i),a}}var $6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function v5(){for(var a=12,l="";a-- >0;)l+=$6[Math.random()*62|0];return l}function t0(a){for(var l=[],t=(a||[]).length>>>0;t--;)l[t]=a[t];return l}function n1(a){return a.classList?t0(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(l){return l})}function c2(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function X6(a){return Object.keys(a||{}).reduce(function(l,t){return l+"".concat(t,'="').concat(c2(a[t]),'" ')},"").trim()}function y0(a){return Object.keys(a||{}).reduce(function(l,t){return l+"".concat(t,": ").concat(a[t].trim(),";")},"")}function d1(a){return a.size!==D.size||a.x!==D.x||a.y!==D.y||a.rotate!==D.rotate||a.flipX||a.flipY}function G6(a){var l=a.transform,t=a.containerWidth,i=a.iconWidth,h={transform:"translate(".concat(t/2," 256)")},e="translate(".concat(l.x*32,", ").concat(l.y*32,") "),s="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),r="rotate(".concat(l.rotate," 0 0)"),o={transform:"".concat(e," ").concat(s," ").concat(r)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:h,inner:o,path:c}}function Y6(a){var l=a.transform,t=a.width,i=t===void 0?Q0:t,h=a.height,e=h===void 0?Q0:h,s=a.startCentered,r=s===void 0?!1:s,o="";return r&&D5?o+="translate(".concat(l.x/U-i/2,"em, ").concat(l.y/U-e/2,"em) "):r?o+="translate(calc(-50% + ".concat(l.x/U,"em), calc(-50% + ").concat(l.y/U,"em)) "):o+="translate(".concat(l.x/U,"em, ").concat(l.y/U,"em) "),o+="scale(".concat(l.size/U*(l.flipX?-1:1),", ").concat(l.size/U*(l.flipY?-1:1),") "),o+="rotate(".concat(l.rotate,"deg) "),o}var J6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function w2(){var a=i2,l=h2,t=g.cssPrefix,i=g.replacementClass,h=J6;if(t!==a||i!==l){var e=new RegExp("\\.".concat(a,"\\-"),"g"),s=new RegExp("\\--".concat(a,"\\-"),"g"),r=new RegExp("\\.".concat(l),"g");h=h.replace(e,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(r,".".concat(i))}return h}var c5=!1;function W0(){g.autoAddCss&&!c5&&(W6(w2()),c5=!0)}var Q6={mixout:function(){return{dom:{css:w2,insertCss:W0}}},hooks:function(){return{beforeDOMElementCreation:function(){W0()},beforeI2svg:function(){W0()}}}},R=W||{};R[T]||(R[T]={});R[T].styles||(R[T].styles={});R[T].hooks||(R[T].hooks={});R[T].shims||(R[T].shims=[]);var y=R[T],g2=[],n2=function(){b.removeEventListener("DOMContentLoaded",n2),L0=1,g2.map(function(l){return l()})},L0=!1;j&&(L0=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),L0||b.addEventListener("DOMContentLoaded",n2));function K6(a){j&&(L0?setTimeout(a,0):g2.push(a))}function d0(a){var l=a.tag,t=a.attributes,i=t===void 0?{}:t,h=a.children,e=h===void 0?[]:h;return typeof a=="string"?c2(a):"<".concat(l," ").concat(X6(i),">").concat(e.map(d0).join(""),"</").concat(l,">")}function w5(a,l,t){if(a&&a[l]&&a[l][t])return{prefix:l,iconName:t,icon:a[l][t]}}var E6=function(l,t){return function(i,h,e,s){return l.call(t,i,h,e,s)}},$0=function(l,t,i,h){var e=Object.keys(l),s=e.length,r=h!==void 0?E6(t,h):t,o,c,n;for(i===void 0?(o=1,n=l[e[0]]):(o=0,n=i);o<s;o++)c=e[o],n=r(n,l[c],c,l);return n};function d2(a){return k(a).length!==1?null:a.codePointAt(0).toString(16)}function g5(a){return Object.keys(a).reduce(function(l,t){var i=a[t],h=!!i.icon;return h?l[i.iconName]=i.icon:l[t]=i,l},{})}function a1(a,l){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,h=i===void 0?!1:i,e=g5(l);typeof y.hooks.addPack=="function"&&!h?y.hooks.addPack(a,g5(l)):y.styles[a]=v(v({},y.styles[a]||{}),e),a==="fas"&&a1("fa",l)}var w0=y.styles,I6=y.shims,p2=Object.keys(g1),N6=p2.reduce(function(a,l){return a[l]=Object.keys(g1[l]),a},{}),p1=null,f2={},b2={},z2={},u2={},x2={};function a4(a){return~j6.indexOf(a)}function l4(a,l){var t=l.split("-"),i=t[0],h=t.slice(1).join("-");return i===a&&h!==""&&!a4(h)?h:null}var M2=function(){var l=function(e){return $0(w0,function(s,r,o){return s[o]=$0(r,e,{}),s},{})};f2=l(function(h,e,s){if(e[3]&&(h[e[3]]=s),e[2]){var r=e[2].filter(function(o){return typeof o=="number"});r.forEach(function(o){h[o.toString(16)]=s})}return h}),b2=l(function(h,e,s){if(h[s]=s,e[2]){var r=e[2].filter(function(o){return typeof o=="string"});r.forEach(function(o){h[o]=s})}return h}),x2=l(function(h,e,s){var r=e[2];return h[s]=s,r.forEach(function(o){h[o]=s}),h});var t="far"in w0||g.autoFetchSvg,i=$0(I6,function(h,e){var s=e[0],r=e[1],o=e[2];return r==="far"&&!t&&(r="fas"),typeof s=="string"&&(h.names[s]={prefix:r,iconName:o}),typeof s=="number"&&(h.unicodes[s.toString(16)]={prefix:r,iconName:o}),h},{names:{},unicodes:{}});z2=i.names,u2=i.unicodes,p1=k0(g.styleDefault,{family:g.familyDefault})};U6(function(a){p1=k0(a.styleDefault,{family:g.familyDefault})});M2();function f1(a,l){return(f2[a]||{})[l]}function t4(a,l){return(b2[a]||{})[l]}function J(a,l){return(x2[a]||{})[l]}function m2(a){return z2[a]||{prefix:null,iconName:null}}function i4(a){var l=u2[a],t=f1("fas",a);return l||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function $(){return p1}var V2=function(){return{prefix:null,iconName:null,rest:[]}};function h4(a){var l=H,t=p2.reduce(function(i,h){return i[h]="".concat(g.cssPrefix,"-").concat(h),i},{});return N5.forEach(function(i){(a.includes(t[i])||a.some(function(h){return N6[i].includes(h)}))&&(l=i)}),l}function k0(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=l.family,i=t===void 0?H:t,h=D6[i][a];if(i===g0&&!a)return"fad";var e=r5[i][a]||r5[i][h],s=a in y.styles?a:null,r=e||s||null;return r}function e4(a){var l=[],t=null;return a.forEach(function(i){var h=l4(g.cssPrefix,i);h?t=h:i&&l.push(i)}),{iconName:t,rest:l}}function n5(a){return a.sort().filter(function(l,t,i){return i.indexOf(l)===t})}var d5=l2.concat(a2);function S0(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=l.skipLookups,i=t===void 0?!1:t,h=null,e=n5(a.filter(function(p){return d5.includes(p)})),s=n5(a.filter(function(p){return!d5.includes(p)})),r=e.filter(function(p){return h=p,!q5.includes(p)}),o=F0(r,1),c=o[0],n=c===void 0?null:c,w=h4(e),f=v(v({},e4(s)),{},{prefix:k0(n,{family:w})});return v(v(v({},f),v4({values:a,family:w,styles:w0,config:g,canonical:f,givenPrefix:h})),s4(i,h,f))}function s4(a,l,t){var i=t.prefix,h=t.iconName;if(a||!i||!h)return{prefix:i,iconName:h};var e=l==="fa"?m2(h):{},s=J(i,h);return h=e.iconName||s||h,i=e.prefix||i,i==="far"&&!w0.far&&w0.fas&&!g.autoFetchSvg&&(i="fas"),{prefix:i,iconName:h}}var r4=N5.filter(function(a){return a!==H||a!==g0}),o4=Object.keys(J0).filter(function(a){return a!==H}).map(function(a){return Object.keys(J0[a])}).flat();function v4(a){var l=a.values,t=a.family,i=a.canonical,h=a.givenPrefix,e=h===void 0?"":h,s=a.styles,r=s===void 0?{}:s,o=a.config,c=o===void 0?{}:o,n=t===g0,w=l.includes("fa-duotone")||l.includes("fad"),f=c.familyDefault==="duotone",p=i.prefix==="fad"||i.prefix==="fa-duotone";if(!n&&(w||f||p)&&(i.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(i.prefix="fab"),!i.prefix&&r4.includes(t)){var m=Object.keys(r).find(function(C){return o4.includes(C)});if(m||c.autoFetchSvg){var z=A3.get(t).defaultShortPrefixId;i.prefix=z,i.iconName=J(i.prefix,i.iconName)||i.iconName}}return(i.prefix==="fa"||e==="fa")&&(i.prefix=$()||"fas"),i}var c4=(function(){function a(){Q2(this,a),this.definitions={}}return K2(a,[{key:"add",value:function(){for(var t=this,i=arguments.length,h=new Array(i),e=0;e<i;e++)h[e]=arguments[e];var s=h.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(r){t.definitions[r]=v(v({},t.definitions[r]||{}),s[r]),a1(r,s[r]);var o=g1[H][r];o&&a1(o,s[r]),M2()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var h=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(h).map(function(e){var s=h[e],r=s.prefix,o=s.iconName,c=s.icon,n=c[2];t[r]||(t[r]={}),n.length>0&&n.forEach(function(w){typeof w=="string"&&(t[r][w]=c)}),t[r][o]=c}),t}}])})(),p5=[],N={},a0={},w4=Object.keys(a0);function g4(a,l){var t=l.mixoutsTo;return p5=a,N={},Object.keys(a0).forEach(function(i){w4.indexOf(i)===-1&&delete a0[i]}),p5.forEach(function(i){var h=i.mixout?i.mixout():{};if(Object.keys(h).forEach(function(s){typeof h[s]=="function"&&(t[s]=h[s]),Z0(h[s])==="object"&&Object.keys(h[s]).forEach(function(r){t[s]||(t[s]={}),t[s][r]=h[s][r]})}),i.hooks){var e=i.hooks();Object.keys(e).forEach(function(s){N[s]||(N[s]=[]),N[s].push(e[s])})}i.provides&&i.provides(a0)}),t}function l1(a,l){for(var t=arguments.length,i=new Array(t>2?t-2:0),h=2;h<t;h++)i[h-2]=arguments[h];var e=N[a]||[];return e.forEach(function(s){l=s.apply(null,[l].concat(i))}),l}function K(a){for(var l=arguments.length,t=new Array(l>1?l-1:0),i=1;i<l;i++)t[i-1]=arguments[i];var h=N[a]||[];h.forEach(function(e){e.apply(null,t)})}function X(){var a=arguments[0],l=Array.prototype.slice.call(arguments,1);return a0[a]?a0[a].apply(null,l):void 0}function t1(a){a.prefix==="fa"&&(a.prefix="fas");var l=a.iconName,t=a.prefix||$();if(l)return l=J(t,l)||l,w5(H2.definitions,t,l)||w5(y.styles,t,l)}var H2=new c4,n4=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,K("noAuto")},d4={i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(K("beforeI2svg",l),X("pseudoElements2svg",l),X("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=l.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,K6(function(){f4({autoReplaceSvgRoot:t}),K("watch",l)})}},p4={icon:function(l){if(l===null)return null;if(Z0(l)==="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:J(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var t=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],i=k0(l[0]);return{prefix:i,iconName:J(i,t)||t}}if(typeof l=="string"&&(l.indexOf("".concat(g.cssPrefix,"-"))>-1||l.match(P6))){var h=S0(l.split(" "),{skipLookups:!0});return{prefix:h.prefix||$(),iconName:J(h.prefix,h.iconName)||h.iconName}}if(typeof l=="string"){var e=$();return{prefix:e,iconName:J(e,l)||l}}}},L={noAuto:n4,config:g,dom:d4,parse:p4,library:H2,findIconDefinition:t1,toHtml:d0},f4=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=l.autoReplaceSvgRoot,i=t===void 0?b:t;(Object.keys(y.styles).length>0||g.autoFetchSvg)&&j&&g.autoReplaceSvg&&L.dom.i2svg({node:i})};function D0(a,l){return Object.defineProperty(a,"abstract",{get:l}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(i){return d0(i)})}}),Object.defineProperty(a,"node",{get:function(){if(j){var i=b.createElement("div");return i.innerHTML=a.html,i.children}}}),a}function b4(a){var l=a.children,t=a.main,i=a.mask,h=a.attributes,e=a.styles,s=a.transform;if(d1(s)&&t.found&&!i.found){var r=t.width,o=t.height,c={x:r/o/2,y:.5};h.style=y0(v(v({},e),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:h,children:l}]}function z4(a){var l=a.prefix,t=a.iconName,i=a.children,h=a.attributes,e=a.symbol,s=e===!0?"".concat(l,"-").concat(g.cssPrefix,"-").concat(t):e;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},h),{},{id:s}),children:i}]}]}function u4(a){var l=["aria-label","aria-labelledby","title","role"];return l.some(function(t){return t in a})}function b1(a){var l=a.icons,t=l.main,i=l.mask,h=a.prefix,e=a.iconName,s=a.transform,r=a.symbol,o=a.maskId,c=a.extra,n=a.watchable,w=n===void 0?!1:n,f=i.found?i:t,p=f.width,m=f.height,z=[g.replacementClass,e?"".concat(g.cssPrefix,"-").concat(e):""].filter(function(P){return c.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(c.classes).join(" "),C={children:[],attributes:v(v({},c.attributes),{},{"data-prefix":h,"data-icon":e,class:z,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(m)})};!u4(c.attributes)&&!c.attributes["aria-hidden"]&&(C.attributes["aria-hidden"]="true"),w&&(C.attributes[Q]="");var V=v(v({},C),{},{prefix:h,iconName:e,main:t,mask:i,maskId:o,transform:s,symbol:r,styles:v({},c.styles)}),A=i.found&&t.found?X("generateAbstractMask",V)||{children:[],attributes:{}}:X("generateAbstractIcon",V)||{children:[],attributes:{}},B=A.children,E=A.attributes;return V.children=B,V.attributes=E,r?z4(V):b4(V)}function f5(a){var l=a.content,t=a.width,i=a.height,h=a.transform,e=a.extra,s=a.watchable,r=s===void 0?!1:s,o=v(v({},e.attributes),{},{class:e.classes.join(" ")});r&&(o[Q]="");var c=v({},e.styles);d1(h)&&(c.transform=Y6({transform:h,startCentered:!0,width:t,height:i}),c["-webkit-transform"]=c.transform);var n=y0(c);n.length>0&&(o.style=n);var w=[];return w.push({tag:"span",attributes:o,children:[l]}),w}function x4(a){var l=a.content,t=a.extra,i=v(v({},t.attributes),{},{class:t.classes.join(" ")}),h=y0(t.styles);h.length>0&&(i.style=h);var e=[];return e.push({tag:"span",attributes:i,children:[l]}),e}var X0=y.styles;function i1(a){var l=a[0],t=a[1],i=a.slice(4),h=F0(i,1),e=h[0],s=null;return Array.isArray(e)?s={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(U0.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(U0.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(U0.PRIMARY),fill:"currentColor",d:e[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:l,height:t,icon:s}}var M4={found:!1,width:512,height:512};function m4(a,l){!s2&&!g.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(l,'" is missing.'))}function h1(a,l){var t=l;return l==="fa"&&g.styleDefault!==null&&(l=$()),new Promise(function(i,h){if(t==="fa"){var e=m2(a)||{};a=e.iconName||a,l=e.prefix||l}if(a&&l&&X0[l]&&X0[l][a]){var s=X0[l][a];return i(i1(s))}m4(a,l),i(v(v({},M4),{},{icon:g.showMissingIcons&&a?X("missingIconAbstract")||{}:{}}))})}var b5=function(){},e1=g.measurePerformance&&m0&&m0.mark&&m0.measure?m0:{mark:b5,measure:b5},o0='FA "7.1.0"',V4=function(l){return e1.mark("".concat(o0," ").concat(l," begins")),function(){return C2(l)}},C2=function(l){e1.mark("".concat(o0," ").concat(l," ends")),e1.measure("".concat(o0," ").concat(l),"".concat(o0," ").concat(l," begins"),"".concat(o0," ").concat(l," ends"))},z1={begin:V4,end:C2},C0=function(){};function z5(a){var l=a.getAttribute?a.getAttribute(Q):null;return typeof l=="string"}function H4(a){var l=a.getAttribute?a.getAttribute(c1):null,t=a.getAttribute?a.getAttribute(w1):null;return l&&t}function C4(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(g.replacementClass)}function A4(){if(g.autoReplaceSvg===!0)return A0.replace;var a=A0[g.autoReplaceSvg];return a||A0.replace}function Z4(a){return b.createElementNS("http://www.w3.org/2000/svg",a)}function L4(a){return b.createElement(a)}function A2(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=l.ceFn,i=t===void 0?a.tag==="svg"?Z4:L4:t;if(typeof a=="string")return b.createTextNode(a);var h=i(a.tag);Object.keys(a.attributes||[]).forEach(function(s){h.setAttribute(s,a.attributes[s])});var e=a.children||[];return e.forEach(function(s){h.appendChild(A2(s,{ceFn:i}))}),h}function B4(a){var l=" ".concat(a.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var A0={replace:function(l){var t=l[0];if(t.parentNode)if(l[1].forEach(function(h){t.parentNode.insertBefore(A2(h),t)}),t.getAttribute(Q)===null&&g.keepOriginalSource){var i=b.createComment(B4(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(l){var t=l[0],i=l[1];if(~n1(t).indexOf(g.replacementClass))return A0.replace(l);var h=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var e=i[0].attributes.class.split(" ").reduce(function(r,o){return o===g.replacementClass||o.match(h)?r.toSvg.push(o):r.toNode.push(o),r},{toNode:[],toSvg:[]});i[0].attributes.class=e.toSvg.join(" "),e.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",e.toNode.join(" "))}var s=i.map(function(r){return d0(r)}).join(`
`);t.setAttribute(Q,""),t.innerHTML=s}};function u5(a){a()}function Z2(a,l){var t=typeof l=="function"?l:C0;if(a.length===0)t();else{var i=u5;g.mutateApproach===k6&&(i=W.requestAnimationFrame||u5),i(function(){var h=A4(),e=z1.begin("mutate");a.map(h),e(),t()})}}var u1=!1;function L2(){u1=!0}function s1(){u1=!1}var B0=null;function x5(a){if(i5&&g.observeMutations){var l=a.treeCallback,t=l===void 0?C0:l,i=a.nodeCallback,h=i===void 0?C0:i,e=a.pseudoElementsCallback,s=e===void 0?C0:e,r=a.observeMutationsRoot,o=r===void 0?b:r;B0=new i5(function(c){if(!u1){var n=$();t0(c).forEach(function(w){if(w.type==="childList"&&w.addedNodes.length>0&&!z5(w.addedNodes[0])&&(g.searchPseudoElements&&s(w.target),t(w.target)),w.type==="attributes"&&w.target.parentNode&&g.searchPseudoElements&&s([w.target],!0),w.type==="attributes"&&z5(w.target)&&~R6.indexOf(w.attributeName))if(w.attributeName==="class"&&H4(w.target)){var f=S0(n1(w.target)),p=f.prefix,m=f.iconName;w.target.setAttribute(c1,p||n),m&&w.target.setAttribute(w1,m)}else C4(w.target)&&h(w.target)})}}),j&&B0.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function F4(){B0&&B0.disconnect()}function y4(a){var l=a.getAttribute("style"),t=[];return l&&(t=l.split(";").reduce(function(i,h){var e=h.split(":"),s=e[0],r=e.slice(1);return s&&r.length>0&&(i[s]=r.join(":").trim()),i},{})),t}function k4(a){var l=a.getAttribute("data-prefix"),t=a.getAttribute("data-icon"),i=a.innerText!==void 0?a.innerText.trim():"",h=S0(n1(a));return h.prefix||(h.prefix=$()),l&&t&&(h.prefix=l,h.iconName=t),h.iconName&&h.prefix||(h.prefix&&i.length>0&&(h.iconName=t4(h.prefix,a.innerText)||f1(h.prefix,d2(a.innerText))),!h.iconName&&g.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(h.iconName=a.firstChild.data)),h}function S4(a){var l=t0(a.attributes).reduce(function(t,i){return t.name!=="class"&&t.name!=="style"&&(t[i.name]=i.value),t},{});return l}function D4(){return{iconName:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function M5(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=k4(a),i=t.iconName,h=t.prefix,e=t.rest,s=S4(a),r=l1("parseNodeAttributes",{},a),o=l.styleParser?y4(a):[];return v({iconName:i,prefix:h,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:o,attributes:s}},r)}var P4=y.styles;function B2(a){var l=g.autoReplaceSvg==="nest"?M5(a,{styleParser:!1}):M5(a);return~l.extra.classes.indexOf(o2)?X("generateLayersText",a,l):X("generateSvgReplacementMutation",a,l)}function q4(){return[].concat(k(a2),k(l2))}function m5(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var t=b.documentElement.classList,i=function(w){return t.add("".concat(s5,"-").concat(w))},h=function(w){return t.remove("".concat(s5,"-").concat(w))},e=g.autoFetchSvg?q4():q5.concat(Object.keys(P4));e.includes("fa")||e.push("fa");var s=[".".concat(o2,":not([").concat(Q,"])")].concat(e.map(function(n){return".".concat(n,":not([").concat(Q,"])")})).join(", ");if(s.length===0)return Promise.resolve();var r=[];try{r=t0(a.querySelectorAll(s))}catch{}if(r.length>0)i("pending"),h("complete");else return Promise.resolve();var o=z1.begin("onTree"),c=r.reduce(function(n,w){try{var f=B2(w);f&&n.push(f)}catch(p){s2||p.name==="MissingIcon"&&console.error(p)}return n},[]);return new Promise(function(n,w){Promise.all(c).then(function(f){Z2(f,function(){i("active"),i("complete"),h("pending"),typeof l=="function"&&l(),o(),n()})}).catch(function(f){o(),w(f)})})}function T4(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;B2(a).then(function(t){t&&Z2([t],l)})}function R4(a){return function(l){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(l||{}).icon?l:t1(l||{}),h=t.mask;return h&&(h=(h||{}).icon?h:t1(h||{})),a(i,v(v({},t),{},{mask:h}))}}var j4=function(l){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,h=i===void 0?D:i,e=t.symbol,s=e===void 0?!1:e,r=t.mask,o=r===void 0?null:r,c=t.maskId,n=c===void 0?null:c,w=t.classes,f=w===void 0?[]:w,p=t.attributes,m=p===void 0?{}:p,z=t.styles,C=z===void 0?{}:z;if(l){var V=l.prefix,A=l.iconName,B=l.icon;return D0(v({type:"icon"},l),function(){return K("beforeDOMElementCreation",{iconDefinition:l,params:t}),b1({icons:{main:i1(B),mask:o?i1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:A,transform:v(v({},D),h),symbol:s,maskId:n,extra:{attributes:m,styles:C,classes:f}})})}},O4={mixout:function(){return{icon:R4(j4)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=m5,t.nodeCallback=T4,t}}},provides:function(l){l.i2svg=function(t){var i=t.node,h=i===void 0?b:i,e=t.callback,s=e===void 0?function(){}:e;return m5(h,s)},l.generateSvgReplacementMutation=function(t,i){var h=i.iconName,e=i.prefix,s=i.transform,r=i.symbol,o=i.mask,c=i.maskId,n=i.extra;return new Promise(function(w,f){Promise.all([h1(h,e),o.iconName?h1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var m=F0(p,2),z=m[0],C=m[1];w([t,b1({icons:{main:z,mask:C},prefix:e,iconName:h,transform:s,symbol:r,maskId:c,extra:n,watchable:!0})])}).catch(f)})},l.generateAbstractIcon=function(t){var i=t.children,h=t.attributes,e=t.main,s=t.transform,r=t.styles,o=y0(r);o.length>0&&(h.style=o);var c;return d1(s)&&(c=X("generateAbstractTransformGrouping",{main:e,transform:s,containerWidth:e.width,iconWidth:e.width})),i.push(c||e.icon),{children:i,attributes:h}}}},_4={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.classes,e=h===void 0?[]:h;return D0({type:"layer"},function(){K("beforeDOMElementCreation",{assembler:t,params:i});var s=[];return t(function(r){Array.isArray(r)?r.map(function(o){s=s.concat(o.abstract)}):s=s.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(k(e)).join(" ")},children:s}]})}}}},U4={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.title,e=h===void 0?null:h,s=i.classes,r=s===void 0?[]:s,o=i.attributes,c=o===void 0?{}:o,n=i.styles,w=n===void 0?{}:n;return D0({type:"counter",content:t},function(){return K("beforeDOMElementCreation",{content:t,params:i}),x4({content:t.toString(),title:e,extra:{attributes:c,styles:w,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(k(r))}})})}}}},W4={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.transform,e=h===void 0?D:h,s=i.classes,r=s===void 0?[]:s,o=i.attributes,c=o===void 0?{}:o,n=i.styles,w=n===void 0?{}:n;return D0({type:"text",content:t},function(){return K("beforeDOMElementCreation",{content:t,params:i}),f5({content:t,transform:v(v({},D),e),extra:{attributes:c,styles:w,classes:["".concat(g.cssPrefix,"-layers-text")].concat(k(r))}})})}}},provides:function(l){l.generateLayersText=function(t,i){var h=i.transform,e=i.extra,s=null,r=null;if(D5){var o=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();s=c.width/o,r=c.height/o}return Promise.resolve([t,f5({content:t.innerHTML,width:s,height:r,transform:h,extra:e,watchable:!0})])}}},F2=new RegExp('"',"ug"),V5=[1105920,1112319],H5=v(v(v(v({},{FontAwesome:{normal:"fas",400:"fas"}}),C3),F6),D3),r1=Object.keys(H5).reduce(function(a,l){return a[l.toLowerCase()]=H5[l],a},{}),$4=Object.keys(r1).reduce(function(a,l){var t=r1[l];return a[l]=t[900]||k(Object.entries(t))[0][1],a},{});function X4(a){var l=a.replace(F2,"");return d2(k(l)[0]||"")}function G4(a){var l=a.getPropertyValue("font-feature-settings").includes("ss01"),t=a.getPropertyValue("content"),i=t.replace(F2,""),h=i.codePointAt(0),e=h>=V5[0]&&h<=V5[1],s=i.length===2?i[0]===i[1]:!1;return e||s||l}function Y4(a,l){var t=a.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(l),h=isNaN(i)?"normal":i;return(r1[t]||{})[h]||$4[t]}function C5(a,l){var t="".concat(y6).concat(l.replace(":","-"));return new Promise(function(i,h){if(a.getAttribute(t)!==null)return i();var e=t0(a.children),s=e.filter(function(q0){return q0.getAttribute(K0)===l})[0],r=W.getComputedStyle(a,l),o=r.getPropertyValue("font-family"),c=o.match(q6),n=r.getPropertyValue("font-weight"),w=r.getPropertyValue("content");if(s&&!c)return a.removeChild(s),i();if(c&&w!=="none"&&w!==""){var f=r.getPropertyValue("content"),p=Y4(o,n),m=X4(f),z=c[0].startsWith("FontAwesome"),C=G4(r),V=f1(p,m),A=V;if(z){var B=i4(m);B.iconName&&B.prefix&&(V=B.iconName,p=B.prefix)}if(V&&!C&&(!s||s.getAttribute(c1)!==p||s.getAttribute(w1)!==A)){a.setAttribute(t,A),s&&a.removeChild(s);var E=D4(),P=E.extra;P.attributes[K0]=l,h1(V,p).then(function(q0){var P2=b1(v(v({},E),{},{icons:{main:q0,mask:V2()},prefix:p,iconName:A,extra:P,watchable:!0})),T0=b.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?a.insertBefore(T0,a.firstChild):a.appendChild(T0),T0.outerHTML=P2.map(function(q2){return d0(q2)}).join(`
`),a.removeAttribute(t),i()}).catch(h)}else i()}else i()})}function J4(a){return Promise.all([C5(a,"::before"),C5(a,"::after")])}function Q4(a){return a.parentNode!==document.head&&!~S6.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(K0)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var K4=function(l){return!!l&&e2.some(function(t){return l.includes(t)})},E4=function(l){if(!l)return[];var t=new Set,i=l.split(/,(?![^()]*\))/).map(function(o){return o.trim()});i=i.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(c){return c.trim()})});var h=H0(i),e;try{for(h.s();!(e=h.n()).done;){var s=e.value;if(K4(s)){var r=e2.reduce(function(o,c){return o.replace(c,"")},s);r!==""&&r!=="*"&&t.add(r)}}}catch(o){h.e(o)}finally{h.f()}return t};function A5(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(j){var t;if(l)t=a;else if(g.searchPseudoElementsFullScan)t=a.querySelectorAll("*");else{var i=new Set,h=H0(document.styleSheets),e;try{for(h.s();!(e=h.n()).done;){var s=e.value;try{var r=H0(s.cssRules),o;try{for(r.s();!(o=r.n()).done;){var c=o.value,n=E4(c.selectorText),w=H0(n),f;try{for(w.s();!(f=w.n()).done;){var p=f.value;i.add(p)}}catch(z){w.e(z)}finally{w.f()}}}catch(z){r.e(z)}finally{r.f()}}catch(z){g.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(s.href," (").concat(z.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(z){h.e(z)}finally{h.f()}if(!i.size)return;var m=Array.from(i).join(", ");try{t=a.querySelectorAll(m)}catch{}}return new Promise(function(z,C){var V=t0(t).filter(Q4).map(J4),A=z1.begin("searchPseudoElements");L2(),Promise.all(V).then(function(){A(),s1(),z()}).catch(function(){A(),s1(),C()})})}}var I4={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=A5,t}}},provides:function(l){l.pseudoElements2svg=function(t){var i=t.node,h=i===void 0?b:i;g.searchPseudoElements&&A5(h)}}},Z5=!1,N4={mixout:function(){return{dom:{unwatch:function(){L2(),Z5=!0}}}},hooks:function(){return{bootstrap:function(){x5(l1("mutationObserverCallbacks",{}))},noAuto:function(){F4()},watch:function(t){var i=t.observeMutationsRoot;Z5?s1():x5(l1("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},L5=function(l){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce(function(i,h){var e=h.toLowerCase().split("-"),s=e[0],r=e.slice(1).join("-");if(s&&r==="h")return i.flipX=!0,i;if(s&&r==="v")return i.flipY=!0,i;if(r=parseFloat(r),isNaN(r))return i;switch(s){case"grow":i.size=i.size+r;break;case"shrink":i.size=i.size-r;break;case"left":i.x=i.x-r;break;case"right":i.x=i.x+r;break;case"up":i.y=i.y-r;break;case"down":i.y=i.y+r;break;case"rotate":i.rotate=i.rotate+r;break}return i},t)},aa={mixout:function(){return{parse:{transform:function(t){return L5(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var h=i.getAttribute("data-fa-transform");return h&&(t.transform=L5(h)),t}}},provides:function(l){l.generateAbstractTransformGrouping=function(t){var i=t.main,h=t.transform,e=t.containerWidth,s=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(h.x*32,", ").concat(h.y*32,") "),c="scale(".concat(h.size/16*(h.flipX?-1:1),", ").concat(h.size/16*(h.flipY?-1:1),") "),n="rotate(".concat(h.rotate," 0 0)"),w={transform:"".concat(o," ").concat(c," ").concat(n)},f={transform:"translate(".concat(s/2*-1," -256)")},p={outer:r,inner:w,path:f};return{tag:"g",attributes:v({},p.outer),children:[{tag:"g",attributes:v({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:v(v({},i.icon.attributes),p.path)}]}]}}}},G0={x:0,y:0,width:"100%",height:"100%"};function B5(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||l)&&(a.attributes.fill="black"),a}function la(a){return a.tag==="g"?a.children:[a]}var ta={hooks:function(){return{parseNodeAttributes:function(t,i){var h=i.getAttribute("data-fa-mask"),e=h?S0(h.split(" ").map(function(s){return s.trim()})):V2();return e.prefix||(e.prefix=$()),t.mask=e,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(l){l.generateAbstractMask=function(t){var i=t.children,h=t.attributes,e=t.main,s=t.mask,r=t.maskId,o=t.transform,c=e.width,n=e.icon,w=s.width,f=s.icon,p=G6({transform:o,containerWidth:w,iconWidth:c}),m={tag:"rect",attributes:v(v({},G0),{},{fill:"white"})},z=n.children?{children:n.children.map(B5)}:{},C={tag:"g",attributes:v({},p.inner),children:[B5(v({tag:n.tag,attributes:v(v({},n.attributes),p.path)},z))]},V={tag:"g",attributes:v({},p.outer),children:[C]},A="mask-".concat(r||v5()),B="clip-".concat(r||v5()),E={tag:"mask",attributes:v(v({},G0),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,V]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:B},children:la(f)},E]};return i.push(P,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(B,")"),mask:"url(#".concat(A,")")},G0)}),{children:i,attributes:h}}}},ia={provides:function(l){var t=!1;W.matchMedia&&(t=W.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){var i=[],h={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:v(v({},h),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=v(v({},e),{},{attributeName:"opacity"}),r={tag:"circle",attributes:v(v({},h),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||r.children.push({tag:"animate",attributes:v(v({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},s),{},{values:"1;0;1;1;0;1;"})}),i.push(r),i.push({tag:"path",attributes:v(v({},h),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:v(v({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:v(v({},h),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},ha={hooks:function(){return{parseNodeAttributes:function(t,i){var h=i.getAttribute("data-fa-symbol"),e=h===null?!1:h===""?!0:h;return t.symbol=e,t}}}},ea=[Q6,O4,_4,U4,W4,I4,N4,aa,ta,ia,ha];g4(ea,{mixoutsTo:L});var Pa=L.noAuto,sa=L.config,qa=L.library,ra=L.dom,oa=L.parse,Ta=L.findIconDefinition,Ra=L.toHtml,va=L.icon,ja=L.layer,ca=L.text,wa=L.counter;var y2=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=_({type:a});static \u0275inj=O({})}return a})();var da=new m1("ngx-bootstrap-icons-module-configuration");var x1=class{constructor(l){this._icons=l}};var k2=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower1" viewBox="0 0 16 16">
  <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 0-.998 1.03l.01.091c.012.077.029.176.054.296.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a4.997 4.997 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1zM2 9l.03-.002.091-.01a4.99 4.99 0 0 0 .296-.054c.241-.049.542-.122.887-.213a60.59 60.59 0 0 0 2.314-.676L5.762 8l-.144-.045a60.59 60.59 0 0 0-2.314-.676 16.705 16.705 0 0 0-.887-.213 4.99 4.99 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2zm7 5-.002-.03a5.005 5.005 0 0 0-.064-.386 16.398 16.398 0 0 0-.213-.888 60.582 60.582 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a4.996 4.996 0 0 0-.064.386L7 14a1 1 0 1 0 2 0zm-5.696-2.134.025-.017a5.001 5.001 0 0 0 .303-.248c.184-.164.408-.377.661-.629A60.614 60.614 0 0 0 5.96 9.23l.103-.111-.147.033a60.88 60.88 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5.063 5.063 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027c-.01.02-.021.048-.036.084a5.09 5.09 0 0 0-.102.283c-.078.233-.165.53-.258.875a60.62 60.62 0 0 0-.572 2.342l-.033.147.11-.102a60.848 60.848 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5.001 5.001 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196.017.025a4.996 4.996 0 0 0 .248.303c.164.184.377.408.629.661A60.597 60.597 0 0 0 6.77 5.96l.111.102-.033-.147a60.602 60.602 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5.006 5.006 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1zm9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a60.619 60.619 0 0 0-2.342-.572l-.147-.033.102.111a60.73 60.73 0 0 0 1.667 1.742c.253.252.477.465.66.629a4.946 4.946 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg>`,S2=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower2" viewBox="0 0 16 16">
  <path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4zm3-12c0 .073-.01.155-.03.247-.544.241-1.091.638-1.598 1.084A2.987 2.987 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1.117 1.117 0 0 1 5 4a3 3 0 0 1 6 0zm-.812 6.052A2.99 2.99 0 0 0 11 8a2.99 2.99 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a6.833 6.833 0 0 1-.647-.487zm-3.56.617a3.001 3.001 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084.02.091.03.174.03.247a3 3 0 1 1-6 0c0-.073.01-.155.03-.247.544-.242 1.091-.638 1.598-1.084zm-.816-4.721A2.99 2.99 0 0 0 5 8c0 .794.308 1.516.812 2.052a6.83 6.83 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
</svg>`;var D2=(()=>{class a{static pick(t,i){return{ngModule:a,providers:[{provide:x1,multi:!0,useValue:t},{provide:da,useValue:i}]}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=_({type:a}),a.\u0275inj=O({}),a})();var pa={flower1:k2,flower2:S2},P0=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=_({type:a,bootstrap:[M0]});static \u0275inj=O({providers:[A1(),_1(O1()),{provide:D1,useClass:P1}],imports:[j1,E1,K1,r0,z0,y2,D2.pick(pa)]})};R1().bootstrapModule(P0,{}).catch(a=>console.error(a));
