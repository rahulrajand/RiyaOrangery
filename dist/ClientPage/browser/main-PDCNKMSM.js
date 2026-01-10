import{$ as t5,A as q1,B as T1,C as R1,D as M,E as i0,F as j1,G as u0,H as O1,I as _1,J as P,K as U1,L as W1,M as $1,N as X1,O as x0,P as G1,Q as Y1,R as M0,S as J1,T as Q1,U as K1,V as c0,W as E1,X as I1,Y as N1,Z as a5,_ as l5,a as z0,aa as i5,b as _,c as A1,d as Z1,e as L1,f as B1,g as F1,h as v0,i as a0,j as y1,k as B,l as k1,m as H,n as D,o as U,p as l0,q as U0,r as W,s as b,t as z,u as Z,v as S1,w as J,x as t0,y as D1,z as P1}from"./chunk-27M2KY44.js";import"./chunk-FK6H3RFT.js";import"./chunk-DAQOROHW.js";var W0=[{path:"",loadChildren:()=>import("./chunk-UHO45NHS.js").then(a=>a.ComponentsModule)}],m0=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=U({type:a});static \u0275inj=_({imports:[c0.forRoot(W0,{scrollPositionRestoration:"top",preloadingStrategy:Q1,onSameUrlNavigation:"reload"}),c0]})};function X2(a,l){if(a&1){let t=S1();b(0,"a",21),J("click",function(){let h=Z1(t).$implicit,e=t0();return L1(e.ChangePage(h))}),M(1),z()}if(a&2){let t=l.$implicit;B(),i0(t)}}function G2(a,l){if(a&1&&(b(0,"span",22),M(1),z()),a&2){let t=t0();B(),i0(t.cartItemCount)}}function Y2(a,l){if(a&1&&(b(0,"span",23),M(1),z()),a&2){let t=t0();B(),i0(t.cartItemCount)}}function J2(a,l){if(a&1&&(b(0,"span",22),M(1),z()),a&2){let t=t0();B(),i0(t.WishlistCount)}}function Q2(a,l){if(a&1&&(b(0,"span",23),M(1),z()),a&2){let t=t0();B(),i0(t.WishlistCount)}}var h0=class a{constructor(l,t,i,h,e,s){this.location=l;this.element=t;this.router=i;this.route=h;this.platformId=e;this.componentsService=s;this.sidebarVisible=!1,this.flora_detail=this.componentsService.getAllCategory(),this.flora_detail.splice(0,0,"All Flora"),this.flora_detail=Array.from(new Set(this.flora_detail.flatMap(r=>r.split(",").map(o=>o.trim()))))}toggleButton;sidebarVisible;cartItemCount=0;WishlistCount=0;flora_detail=[];enableColorOnScroll=!1;isMobile=!1;ngOnInit(){let l=this.element.nativeElement;this.toggleButton=l.getElementsByClassName("navbar-toggler")[0],this.router.events.pipe(z0(t=>t instanceof x0)).subscribe(()=>{let t=this.route.root;for(;t.firstChild;)t=t.firstChild;this.enableColorOnScroll=t.snapshot.data.colorOnScroll??!1}),this.componentsService.wishlist$.subscribe(t=>{this.WishlistCount=t.length||0}),this.componentsService.cartlist$.subscribe(t=>{this.cartItemCount=t.reduce((i,h)=>i+h.productcount,0)}),this.checkScreen(),P(this.platformId)&&window.addEventListener("resize",()=>{this.checkScreen()})}checkScreen(){P(this.platformId)&&(this.isMobile=window.innerWidth<=768)}sidebarOpen(){if(!P(this.platformId))return;let l=this.toggleButton,t=document.getElementsByTagName("html")[0];setTimeout(function(){l.classList.add("toggled")},500),t.classList.add("nav-open"),this.sidebarVisible=!0}sidebarClose(){if(!P(this.platformId))return;let l=document.getElementsByTagName("html")[0];this.toggleButton.classList.remove("toggled"),this.sidebarVisible=!1,l.classList.remove("nav-open")}sidebarToggle(){this.sidebarVisible===!1?this.sidebarOpen():this.sidebarClose()}ChangePage(l){l==="All Flora"&&(l="all"),this.router.navigate(["/collection/",l])}goToWishlist(){this.router.navigate(["/wishlist"])}static \u0275fac=function(t){return new(t||a)(H(u0),H(v0),H(M0),H(G1),H(a0),H(E1))};static \u0275cmp=D({type:a,selectors:[["app-navbar"]],standalone:!1,decls:31,vars:6,consts:[[1,"navbar","navbar-expand-lg","fixed-top","navbar-transparent","nav"],[1,"container"],[1,"navbar-translate"],["src","img/riyaorangery_nobg.png","alt","Riya Orangery logo \u2013 Indoor plants and succulents",2,"max-width","5%"],["routerLink","/",1,"navbar-brand"],["ngbDropdown","",1,"d-inline-block","dropdown"],["id","dropdownBasic1","ngbDropdownToggle","",1,"navbar-brand",2,"cursor","pointer"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1",1,"dropdown"],["class","dropdown-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],["type","button","data-toggle","collapse","data-target","#navbarToggler","aria-controls","navbarTogglerDemo02","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","navbar-burger",2,"margin-left","auto",3,"click"],[1,"navbar-toggler-bar"],["id","navbarToggler",1,"navbar-collapse"],[1,"navbar-nav","ml-auto"],[1,"nav-item"],["rel","tooltip","title","Cart","data-placement","bottom","routerLink","/cart",1,"nav-link",2,"position","relative","cursor","pointer"],[1,"nc-icon","nc-bag-16"],[1,"d-lg-none"],["class","cart-count","style","position: absolute; top: 0px; right: 0px",4,"ngIf"],["class","cart-count","style","position: absolute",4,"ngIf"],["rel","tooltip","title","Wishlist","data-placement","bottom","target","_blank",1,"nav-link",2,"position","relative",3,"click"],[1,"nc-icon","nc-favourite-28"],[1,"dropdown-item",2,"cursor","pointer",3,"click"],[1,"cart-count",2,"position","absolute","top","0px","right","0px"],[1,"cart-count",2,"position","absolute"]],template:function(t,i){t&1&&(b(0,"nav",0)(1,"div",1)(2,"div",2),Z(3,"img",3),b(4,"a",4),M(5,"Riya Orangery"),z(),b(6,"div",5)(7,"a",6),M(8,"Flora"),z(),b(9,"div",7),l0(10,X2,2,1,"a",8),z()(),b(11,"button",9),J("click",function(){return i.sidebarToggle()}),Z(12,"span",10)(13,"span",10)(14,"span",10),z()(),b(15,"div",11)(16,"ul",12)(17,"li",13)(18,"a",14),Z(19,"i",15),b(20,"p",16),M(21,"Cart\xA0"),z(),l0(22,G2,2,1,"span",17)(23,Y2,2,1,"span",18),z()(),b(24,"li",13)(25,"a",19),J("click",function(){return i.goToWishlist()}),Z(26,"i",20),b(27,"p",16),M(28,"Wishlist\xA0"),z(),l0(29,J2,2,1,"span",17)(30,Q2,2,1,"span",18),z()()()()()()),t&2&&(U0("color-on-scroll",i.enableColorOnScroll?"500":null),B(10),W("ngForOf",i.flora_detail),B(12),W("ngIf",i.cartItemCount!==0&&!i.isMobile),B(),W("ngIf",i.cartItemCount!==0&&i.isMobile),B(6),W("ngIf",i.WishlistCount!==0&&!i.isMobile),B(),W("ngIf",i.WishlistCount!==0&&i.isMobile))},dependencies:[O1,_1,a5,N1,I1,J1],encapsulation:2})};var V0=class a{constructor(l){this.platformId=l}isVisible=!1;onWindowScroll(){P(this.platformId)&&(this.isVisible=window.scrollY>300)}scrollToTop(){P(this.platformId)&&window.scrollTo({top:0,behavior:"smooth"})}static \u0275fac=function(t){return new(t||a)(H(a0))};static \u0275cmp=D({type:a,selectors:[["app-scroll-to-top"]],hostBindings:function(t,i){t&1&&J("scroll",function(){return i.onWindowScroll()},y1)},standalone:!1,decls:2,vars:2,consts:[["aria-label","Scroll to top",1,"scroll-top",3,"click"]],template:function(t,i){t&1&&(b(0,"button",0),J("click",function(){return i.scrollToTop()}),M(1,` \u2191
`),z()),t&2&&R1("show",i.isVisible)},styles:[".scroll-top[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:30px;width:48px;height:48px;border-radius:50%;border:none;background:#000;color:#fff;font-size:22px;cursor:pointer;z-index:9999;opacity:0;pointer-events:none;transition:opacity .3s,transform .3s}.scroll-top.show[_ngcontent-%COMP%]{opacity:1;pointer-events:auto}.scroll-top[_ngcontent-%COMP%]:hover{transform:scale(1.1)}"]})};function I2(a,l){a&1&&(M(0," Mobile : 7373829090 "),Z(1,"br"),M(2," Address : Chinnamanur-625515,"),Z(3,"br"),M(4,` Tamil Nadu, India
`))}var H0=class a{test=new Date;static \u0275fac=function(t){return new(t||a)};static \u0275cmp=D({type:a,selectors:[["app-footer"]],standalone:!1,decls:17,vars:1,consts:[["contactTpl",""],[1,"footer",2,"background-color","rgb(87, 65, 39)"],[1,"container","footer-section"],[1,"footer-section-item"],["placement","top","ngbPopover","We Not only Deliver Indoor plants, We deliver Peace in Small Containers.","popoverTitle","Riya Orangery",2,"cursor","pointer"],["placement","top","popoverTitle","Contact Us",2,"cursor","pointer",3,"ngbPopover"]],template:function(t,i){if(t&1&&(b(0,"footer",1)(1,"div",2)(2,"div",3)(3,"label",4)(4,"h6"),M(5,"About Us"),z()()(),b(6,"div",3)(7,"label",5)(8,"h6"),M(9,"Contact Us"),z()(),Z(10,"h6"),z(),Z(11,"div",3),b(12,"div",3)(13,"h6"),M(14,"Let's create the garden of your dream"),z()()()(),l0(15,I2,5,0,"ng-template",null,0,j1)),t&2){let h=T1(16);B(7),W("ngbPopover",h)}},dependencies:[l5],encapsulation:2})};var C0=class a{constructor(l,t,i,h,e,s){this.renderer=l;this.router=t;this.document=i;this.platformId=h;this.element=e;this.location=s}navbarr;isProductPage=!1;ngOnInit(){if(!P(this.platformId))return;let l=this.element.nativeElement.children[0].children[0],t=()=>{if(this.router.events.pipe(z0(h=>h instanceof x0)).subscribe(h=>{let e=h.urlAfterRedirects.toLowerCase();if(console.log("Navigated to URL:",e),this.isProductPage=e.includes("/product"),console.log("isProductPage",this.isProductPage),this.isProductPage){l.classList.remove("navbar-transparent");return}else window.pageYOffset<150?l.classList.add("navbar-transparent"):l.classList.remove("navbar-transparent")}),console.log("isProductPage",this.isProductPage),this.isProductPage){l.classList.remove("navbar-transparent");return}window.pageYOffset<150?l.classList.add("navbar-transparent"):l.classList.remove("navbar-transparent")};t(),this.renderer.listen("window","scroll",()=>{t()}),this.renderer.listen("window","popstate",()=>{t()})}removeFooter(){var l=this.location.prepareExternalUrl(this.location.path());return l=l.slice(1),!(l==="signup"||l==="nucleoicons")}static \u0275fac=function(t){return new(t||a)(H(k1),H(M0),H(B1),H(a0),H(v0),H(u0))};static \u0275cmp=D({type:a,selectors:[["app-root"]],viewQuery:function(t,i){if(t&1&&D1(h0,5),t&2){let h;P1(h=q1())&&(i.navbarr=h.first)}},standalone:!1,decls:11,vars:0,consts:[["id","main-content"]],template:function(t,i){t&1&&(Z(0,"app-navbar"),b(1,"main",0),Z(2,"router-outlet"),z(),b(3,"footer"),Z(4,"app-footer"),z(),Z(5,"app-scroll-to-top"),b(6,"noscript")(7,"h1"),M(8,"Riya Orangery \u2013 Indoor Plants & Succulents"),z(),b(9,"p"),M(10," Riya Orangery offers healthy indoor plants, succulents, cactus, and expert plant care tips for homes and offices. "),z()())},dependencies:[Y1,h0,V0,H0],encapsulation:2})};function I0(a,l){(l==null||l>a.length)&&(l=a.length);for(var t=0,i=Array(l);t<l;t++)i[t]=a[t];return i}function a3(a){if(Array.isArray(a))return a}function l3(a){if(Array.isArray(a))return I0(a)}function t3(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}function h5(a,l){for(var t=0;t<l.length;t++){var i=l[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,q5(i.key),i)}}function i3(a,l,t){return l&&h5(a.prototype,l),t&&h5(a,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function L0(a,l){var t=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!t){if(Array.isArray(a)||(t=n1(a))||l&&a&&typeof a.length=="number"){t&&(a=t);var i=0,h=function(){};return{s:h,n:function(){return i>=a.length?{done:!0}:{done:!1,value:a[i++]}},e:function(o){throw o},f:h}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var e,s=!0,r=!1;return{s:function(){t=t.call(a)},n:function(){var o=t.next();return s=o.done,o},e:function(o){r=!0,e=o},f:function(){try{s||t.return==null||t.return()}finally{if(r)throw e}}}}function d(a,l,t){return(l=q5(l))in a?Object.defineProperty(a,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[l]=t,a}function h3(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function e3(a,l){var t=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var i,h,e,s,r=[],o=!0,c=!1;try{if(e=(t=t.call(a)).next,l===0){if(Object(t)!==t)return;o=!1}else for(;!(o=(i=e.call(t)).done)&&(r.push(i.value),r.length!==l);o=!0);}catch(n){c=!0,h=n}finally{try{if(!o&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(c)throw h}}return r}}function s3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e5(a,l){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);l&&(i=i.filter(function(h){return Object.getOwnPropertyDescriptor(a,h).enumerable})),t.push.apply(t,i)}return t}function v(a){for(var l=1;l<arguments.length;l++){var t=arguments[l]!=null?arguments[l]:{};l%2?e5(Object(t),!0).forEach(function(i){d(a,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):e5(Object(t)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(t,i))})}return a}function D0(a,l){return a3(a)||e3(a,l)||n1(a,l)||s3()}function S(a){return l3(a)||h3(a)||n1(a)||r3()}function o3(a,l){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var i=t.call(a,l||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(a)}function q5(a){var l=o3(a,"string");return typeof l=="symbol"?l:l+""}function y0(a){"@babel/helpers - typeof";return y0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},y0(a)}function n1(a,l){if(a){if(typeof a=="string")return I0(a,l);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?I0(a,l):void 0}}var s5=function(){},d1={},T5={},R5=null,j5={mark:s5,measure:s5};try{typeof window<"u"&&(d1=window),typeof document<"u"&&(T5=document),typeof MutationObserver<"u"&&(R5=MutationObserver),typeof performance<"u"&&(j5=performance)}catch{}var v3=d1.navigator||{},r5=v3.userAgent,o5=r5===void 0?"":r5,X=d1,u=T5,v5=R5,A0=j5,o7=!!X.document,O=!!u.documentElement&&!!u.head&&typeof u.addEventListener=="function"&&typeof u.createElement=="function",O5=~o5.indexOf("MSIE")||~o5.indexOf("Trident/"),X0,c3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,w3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,_5={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},g3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},U5=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],C="classic",p0="duotone",W5="sharp",$5="sharp-duotone",X5="chisel",G5="etch",Y5="jelly",J5="jelly-duo",Q5="jelly-fill",K5="notdog",E5="notdog-duo",I5="slab",N5="slab-press",a2="thumbprint",l2="utility",t2="utility-duo",i2="utility-fill",h2="whiteboard",n3="Classic",d3="Duotone",p3="Sharp",f3="Sharp Duotone",b3="Chisel",z3="Etch",u3="Jelly",x3="Jelly Duo",M3="Jelly Fill",m3="Notdog",V3="Notdog Duo",H3="Slab",C3="Slab Press",A3="Thumbprint",Z3="Utility",L3="Utility Duo",B3="Utility Fill",F3="Whiteboard",e2=[C,p0,W5,$5,X5,G5,Y5,J5,Q5,K5,E5,I5,N5,a2,l2,t2,i2,h2],v7=(X0={},d(d(d(d(d(d(d(d(d(d(X0,C,n3),p0,d3),W5,p3),$5,f3),X5,b3),G5,z3),Y5,u3),J5,x3),Q5,M3),K5,m3),d(d(d(d(d(d(d(d(X0,E5,V3),I5,H3),N5,C3),a2,A3),l2,Z3),t2,L3),i2,B3),h2,F3)),y3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},k3={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},S3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),D3={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},s2=["fak","fa-kit","fakd","fa-kit-duotone"],c5={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},P3=["kit"],q3="kit",T3="kit-duotone",R3="Kit",j3="Kit Duotone",c7=d(d({},q3,R3),T3,j3),O3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},_3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},U3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},w5={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},G0,Z0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},W3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],$3="classic",X3="duotone",G3="sharp",Y3="sharp-duotone",J3="chisel",Q3="etch",K3="jelly",E3="jelly-duo",I3="jelly-fill",N3="notdog",a6="notdog-duo",l6="slab",t6="slab-press",i6="thumbprint",h6="utility",e6="utility-duo",s6="utility-fill",r6="whiteboard",o6="Classic",v6="Duotone",c6="Sharp",w6="Sharp Duotone",g6="Chisel",n6="Etch",d6="Jelly",p6="Jelly Duo",f6="Jelly Fill",b6="Notdog",z6="Notdog Duo",u6="Slab",x6="Slab Press",M6="Thumbprint",m6="Utility",V6="Utility Duo",H6="Utility Fill",C6="Whiteboard",w7=(G0={},d(d(d(d(d(d(d(d(d(d(G0,$3,o6),X3,v6),G3,c6),Y3,w6),J3,g6),Q3,n6),K3,d6),E3,p6),I3,f6),N3,b6),d(d(d(d(d(d(d(d(G0,a6,z6),l6,u6),t6,x6),i6,M6),h6,m6),e6,V6),s6,H6),r6,C6)),A6="kit",Z6="kit-duotone",L6="Kit",B6="Kit Duotone",g7=d(d({},A6,L6),Z6,B6),F6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},y6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},N0={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},k6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],r2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(W3,k6),S6=["solid","regular","light","thin","duotone","brands","semibold"],o2=[1,2,3,4,5,6,7,8,9,10],D6=o2.concat([11,12,13,14,15,16,17,18,19,20]),P6=["aw","fw","pull-left","pull-right"],q6=[].concat(S(Object.keys(y6)),S6,P6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Z0.GROUP,Z0.SWAP_OPACITY,Z0.PRIMARY,Z0.SECONDARY]).concat(o2.map(function(a){return"".concat(a,"x")})).concat(D6.map(function(a){return"w-".concat(a)})),T6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},R="___FONT_AWESOME___",a1=16,v2="fa",c2="svg-inline--fa",E="data-fa-i2svg",l1="data-fa-pseudo-element",R6="data-fa-pseudo-element-pending",p1="data-prefix",f1="data-icon",g5="fontawesome-i2svg",j6="async",O6=["HTML","HEAD","STYLE","SCRIPT"],w2=["::before","::after",":before",":after"],g2=(function(){try{return!0}catch{return!1}})();function f0(a){return new Proxy(a,{get:function(t,i){return i in t?t[i]:t[C]}})}var n2=v({},_5);n2[C]=v(v(v(v({},{"fa-duotone":"duotone"}),_5[C]),c5.kit),c5["kit-duotone"]);var _6=f0(n2),t1=v({},D3);t1[C]=v(v(v(v({},{duotone:"fad"}),t1[C]),w5.kit),w5["kit-duotone"]);var n5=f0(t1),i1=v({},N0);i1[C]=v(v({},i1[C]),U3.kit);var b1=f0(i1),h1=v({},F6);h1[C]=v(v({},h1[C]),O3.kit);var n7=f0(h1),U6=c3,d2="fa-layers-text",W6=w3,$6=v({},y3),d7=f0($6),X6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Y0=g3,G6=[].concat(S(P3),S(q6)),g0=X.FontAwesomeConfig||{};function Y6(a){var l=u.querySelector("script["+a+"]");if(l)return l.getAttribute(a)}function J6(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}u&&typeof u.querySelector=="function"&&(d5=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],d5.forEach(function(a){var l=D0(a,2),t=l[0],i=l[1],h=J6(Y6(t));h!=null&&(g0[i]=h)}));var d5,p2={styleDefault:"solid",familyDefault:C,cssPrefix:v2,replacementClass:c2,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};g0.familyPrefix&&(g0.cssPrefix=g0.familyPrefix);var r0=v(v({},p2),g0);r0.autoReplaceSvg||(r0.observeMutations=!1);var g={};Object.keys(p2).forEach(function(a){Object.defineProperty(g,a,{enumerable:!0,set:function(t){r0[a]=t,n0.forEach(function(i){return i(g)})},get:function(){return r0[a]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(l){r0.cssPrefix=l,n0.forEach(function(t){return t(g)})},get:function(){return r0.cssPrefix}});X.FontAwesomeConfig=g;var n0=[];function Q6(a){return n0.push(a),function(){n0.splice(n0.indexOf(a),1)}}var $=a1,q={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function K6(a){if(!(!a||!O)){var l=u.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=a;for(var t=u.head.childNodes,i=null,h=t.length-1;h>-1;h--){var e=t[h],s=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(i=e)}return u.head.insertBefore(l,i),a}}var E6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function p5(){for(var a=12,l="";a-- >0;)l+=E6[Math.random()*62|0];return l}function o0(a){for(var l=[],t=(a||[]).length>>>0;t--;)l[t]=a[t];return l}function z1(a){return a.classList?o0(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(l){return l})}function f2(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function I6(a){return Object.keys(a||{}).reduce(function(l,t){return l+"".concat(t,'="').concat(f2(a[t]),'" ')},"").trim()}function P0(a){return Object.keys(a||{}).reduce(function(l,t){return l+"".concat(t,": ").concat(a[t].trim(),";")},"")}function u1(a){return a.size!==q.size||a.x!==q.x||a.y!==q.y||a.rotate!==q.rotate||a.flipX||a.flipY}function N6(a){var l=a.transform,t=a.containerWidth,i=a.iconWidth,h={transform:"translate(".concat(t/2," 256)")},e="translate(".concat(l.x*32,", ").concat(l.y*32,") "),s="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),r="rotate(".concat(l.rotate," 0 0)"),o={transform:"".concat(e," ").concat(s," ").concat(r)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:h,inner:o,path:c}}function a4(a){var l=a.transform,t=a.width,i=t===void 0?a1:t,h=a.height,e=h===void 0?a1:h,s=a.startCentered,r=s===void 0?!1:s,o="";return r&&O5?o+="translate(".concat(l.x/$-i/2,"em, ").concat(l.y/$-e/2,"em) "):r?o+="translate(calc(-50% + ".concat(l.x/$,"em), calc(-50% + ").concat(l.y/$,"em)) "):o+="translate(".concat(l.x/$,"em, ").concat(l.y/$,"em) "),o+="scale(".concat(l.size/$*(l.flipX?-1:1),", ").concat(l.size/$*(l.flipY?-1:1),") "),o+="rotate(".concat(l.rotate,"deg) "),o}var l4=`:root, :host {
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
}`;function b2(){var a=v2,l=c2,t=g.cssPrefix,i=g.replacementClass,h=l4;if(t!==a||i!==l){var e=new RegExp("\\.".concat(a,"\\-"),"g"),s=new RegExp("\\--".concat(a,"\\-"),"g"),r=new RegExp("\\.".concat(l),"g");h=h.replace(e,".".concat(t,"-")).replace(s,"--".concat(t,"-")).replace(r,".".concat(i))}return h}var f5=!1;function J0(){g.autoAddCss&&!f5&&(K6(b2()),f5=!0)}var t4={mixout:function(){return{dom:{css:b2,insertCss:J0}}},hooks:function(){return{beforeDOMElementCreation:function(){J0()},beforeI2svg:function(){J0()}}}},j=X||{};j[R]||(j[R]={});j[R].styles||(j[R].styles={});j[R].hooks||(j[R].hooks={});j[R].shims||(j[R].shims=[]);var k=j[R],z2=[],u2=function(){u.removeEventListener("DOMContentLoaded",u2),k0=1,z2.map(function(l){return l()})},k0=!1;O&&(k0=(u.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(u.readyState),k0||u.addEventListener("DOMContentLoaded",u2));function i4(a){O&&(k0?setTimeout(a,0):z2.push(a))}function b0(a){var l=a.tag,t=a.attributes,i=t===void 0?{}:t,h=a.children,e=h===void 0?[]:h;return typeof a=="string"?f2(a):"<".concat(l," ").concat(I6(i),">").concat(e.map(b0).join(""),"</").concat(l,">")}function b5(a,l,t){if(a&&a[l]&&a[l][t])return{prefix:l,iconName:t,icon:a[l][t]}}var h4=function(l,t){return function(i,h,e,s){return l.call(t,i,h,e,s)}},Q0=function(l,t,i,h){var e=Object.keys(l),s=e.length,r=h!==void 0?h4(t,h):t,o,c,n;for(i===void 0?(o=1,n=l[e[0]]):(o=0,n=i);o<s;o++)c=e[o],n=r(n,l[c],c,l);return n};function x2(a){return S(a).length!==1?null:a.codePointAt(0).toString(16)}function z5(a){return Object.keys(a).reduce(function(l,t){var i=a[t],h=!!i.icon;return h?l[i.iconName]=i.icon:l[t]=i,l},{})}function e1(a,l){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.skipHooks,h=i===void 0?!1:i,e=z5(l);typeof k.hooks.addPack=="function"&&!h?k.hooks.addPack(a,z5(l)):k.styles[a]=v(v({},k.styles[a]||{}),e),a==="fas"&&e1("fa",l)}var d0=k.styles,e4=k.shims,M2=Object.keys(b1),s4=M2.reduce(function(a,l){return a[l]=Object.keys(b1[l]),a},{}),x1=null,m2={},V2={},H2={},C2={},A2={};function r4(a){return~G6.indexOf(a)}function o4(a,l){var t=l.split("-"),i=t[0],h=t.slice(1).join("-");return i===a&&h!==""&&!r4(h)?h:null}var Z2=function(){var l=function(e){return Q0(d0,function(s,r,o){return s[o]=Q0(r,e,{}),s},{})};m2=l(function(h,e,s){if(e[3]&&(h[e[3]]=s),e[2]){var r=e[2].filter(function(o){return typeof o=="number"});r.forEach(function(o){h[o.toString(16)]=s})}return h}),V2=l(function(h,e,s){if(h[s]=s,e[2]){var r=e[2].filter(function(o){return typeof o=="string"});r.forEach(function(o){h[o]=s})}return h}),A2=l(function(h,e,s){var r=e[2];return h[s]=s,r.forEach(function(o){h[o]=s}),h});var t="far"in d0||g.autoFetchSvg,i=Q0(e4,function(h,e){var s=e[0],r=e[1],o=e[2];return r==="far"&&!t&&(r="fas"),typeof s=="string"&&(h.names[s]={prefix:r,iconName:o}),typeof s=="number"&&(h.unicodes[s.toString(16)]={prefix:r,iconName:o}),h},{names:{},unicodes:{}});H2=i.names,C2=i.unicodes,x1=q0(g.styleDefault,{family:g.familyDefault})};Q6(function(a){x1=q0(a.styleDefault,{family:g.familyDefault})});Z2();function M1(a,l){return(m2[a]||{})[l]}function v4(a,l){return(V2[a]||{})[l]}function K(a,l){return(A2[a]||{})[l]}function L2(a){return H2[a]||{prefix:null,iconName:null}}function c4(a){var l=C2[a],t=M1("fas",a);return l||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function G(){return x1}var B2=function(){return{prefix:null,iconName:null,rest:[]}};function w4(a){var l=C,t=M2.reduce(function(i,h){return i[h]="".concat(g.cssPrefix,"-").concat(h),i},{});return e2.forEach(function(i){(a.includes(t[i])||a.some(function(h){return s4[i].includes(h)}))&&(l=i)}),l}function q0(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=l.family,i=t===void 0?C:t,h=_6[i][a];if(i===p0&&!a)return"fad";var e=n5[i][a]||n5[i][h],s=a in k.styles?a:null,r=e||s||null;return r}function g4(a){var l=[],t=null;return a.forEach(function(i){var h=o4(g.cssPrefix,i);h?t=h:i&&l.push(i)}),{iconName:t,rest:l}}function u5(a){return a.sort().filter(function(l,t,i){return i.indexOf(l)===t})}var x5=r2.concat(s2);function T0(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=l.skipLookups,i=t===void 0?!1:t,h=null,e=u5(a.filter(function(p){return x5.includes(p)})),s=u5(a.filter(function(p){return!x5.includes(p)})),r=e.filter(function(p){return h=p,!U5.includes(p)}),o=D0(r,1),c=o[0],n=c===void 0?null:c,w=w4(e),f=v(v({},g4(s)),{},{prefix:q0(n,{family:w})});return v(v(v({},f),f4({values:a,family:w,styles:d0,config:g,canonical:f,givenPrefix:h})),n4(i,h,f))}function n4(a,l,t){var i=t.prefix,h=t.iconName;if(a||!i||!h)return{prefix:i,iconName:h};var e=l==="fa"?L2(h):{},s=K(i,h);return h=e.iconName||s||h,i=e.prefix||i,i==="far"&&!d0.far&&d0.fas&&!g.autoFetchSvg&&(i="fas"),{prefix:i,iconName:h}}var d4=e2.filter(function(a){return a!==C||a!==p0}),p4=Object.keys(N0).filter(function(a){return a!==C}).map(function(a){return Object.keys(N0[a])}).flat();function f4(a){var l=a.values,t=a.family,i=a.canonical,h=a.givenPrefix,e=h===void 0?"":h,s=a.styles,r=s===void 0?{}:s,o=a.config,c=o===void 0?{}:o,n=t===p0,w=l.includes("fa-duotone")||l.includes("fad"),f=c.familyDefault==="duotone",p=i.prefix==="fad"||i.prefix==="fa-duotone";if(!n&&(w||f||p)&&(i.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(i.prefix="fab"),!i.prefix&&d4.includes(t)){var m=Object.keys(r).find(function(A){return p4.includes(A)});if(m||c.autoFetchSvg){var x=S3.get(t).defaultShortPrefixId;i.prefix=x,i.iconName=K(i.prefix,i.iconName)||i.iconName}}return(i.prefix==="fa"||e==="fa")&&(i.prefix=G()||"fas"),i}var b4=(function(){function a(){t3(this,a),this.definitions={}}return i3(a,[{key:"add",value:function(){for(var t=this,i=arguments.length,h=new Array(i),e=0;e<i;e++)h[e]=arguments[e];var s=h.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(r){t.definitions[r]=v(v({},t.definitions[r]||{}),s[r]),e1(r,s[r]);var o=b1[C][r];o&&e1(o,s[r]),Z2()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,i){var h=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(h).map(function(e){var s=h[e],r=s.prefix,o=s.iconName,c=s.icon,n=c[2];t[r]||(t[r]={}),n.length>0&&n.forEach(function(w){typeof w=="string"&&(t[r][w]=c)}),t[r][o]=c}),t}}])})(),M5=[],e0={},s0={},z4=Object.keys(s0);function u4(a,l){var t=l.mixoutsTo;return M5=a,e0={},Object.keys(s0).forEach(function(i){z4.indexOf(i)===-1&&delete s0[i]}),M5.forEach(function(i){var h=i.mixout?i.mixout():{};if(Object.keys(h).forEach(function(s){typeof h[s]=="function"&&(t[s]=h[s]),y0(h[s])==="object"&&Object.keys(h[s]).forEach(function(r){t[s]||(t[s]={}),t[s][r]=h[s][r]})}),i.hooks){var e=i.hooks();Object.keys(e).forEach(function(s){e0[s]||(e0[s]=[]),e0[s].push(e[s])})}i.provides&&i.provides(s0)}),t}function s1(a,l){for(var t=arguments.length,i=new Array(t>2?t-2:0),h=2;h<t;h++)i[h-2]=arguments[h];var e=e0[a]||[];return e.forEach(function(s){l=s.apply(null,[l].concat(i))}),l}function I(a){for(var l=arguments.length,t=new Array(l>1?l-1:0),i=1;i<l;i++)t[i-1]=arguments[i];var h=e0[a]||[];h.forEach(function(e){e.apply(null,t)})}function Y(){var a=arguments[0],l=Array.prototype.slice.call(arguments,1);return s0[a]?s0[a].apply(null,l):void 0}function r1(a){a.prefix==="fa"&&(a.prefix="fas");var l=a.iconName,t=a.prefix||G();if(l)return l=K(t,l)||l,b5(F2.definitions,t,l)||b5(k.styles,t,l)}var F2=new b4,x4=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,I("noAuto")},M4={i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return O?(I("beforeI2svg",l),Y("pseudoElements2svg",l),Y("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=l.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,i4(function(){V4({autoReplaceSvgRoot:t}),I("watch",l)})}},m4={icon:function(l){if(l===null)return null;if(y0(l)==="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:K(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var t=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],i=q0(l[0]);return{prefix:i,iconName:K(i,t)||t}}if(typeof l=="string"&&(l.indexOf("".concat(g.cssPrefix,"-"))>-1||l.match(U6))){var h=T0(l.split(" "),{skipLookups:!0});return{prefix:h.prefix||G(),iconName:K(h.prefix,h.iconName)||h.iconName}}if(typeof l=="string"){var e=G();return{prefix:e,iconName:K(e,l)||l}}}},F={noAuto:x4,config:g,dom:M4,parse:m4,library:F2,findIconDefinition:r1,toHtml:b0},V4=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=l.autoReplaceSvgRoot,i=t===void 0?u:t;(Object.keys(k.styles).length>0||g.autoFetchSvg)&&O&&g.autoReplaceSvg&&F.dom.i2svg({node:i})};function R0(a,l){return Object.defineProperty(a,"abstract",{get:l}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(i){return b0(i)})}}),Object.defineProperty(a,"node",{get:function(){if(O){var i=u.createElement("div");return i.innerHTML=a.html,i.children}}}),a}function H4(a){var l=a.children,t=a.main,i=a.mask,h=a.attributes,e=a.styles,s=a.transform;if(u1(s)&&t.found&&!i.found){var r=t.width,o=t.height,c={x:r/o/2,y:.5};h.style=P0(v(v({},e),{},{"transform-origin":"".concat(c.x+s.x/16,"em ").concat(c.y+s.y/16,"em")}))}return[{tag:"svg",attributes:h,children:l}]}function C4(a){var l=a.prefix,t=a.iconName,i=a.children,h=a.attributes,e=a.symbol,s=e===!0?"".concat(l,"-").concat(g.cssPrefix,"-").concat(t):e;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},h),{},{id:s}),children:i}]}]}function A4(a){var l=["aria-label","aria-labelledby","title","role"];return l.some(function(t){return t in a})}function m1(a){var l=a.icons,t=l.main,i=l.mask,h=a.prefix,e=a.iconName,s=a.transform,r=a.symbol,o=a.maskId,c=a.extra,n=a.watchable,w=n===void 0?!1:n,f=i.found?i:t,p=f.width,m=f.height,x=[g.replacementClass,e?"".concat(g.cssPrefix,"-").concat(e):""].filter(function(T){return c.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(c.classes).join(" "),A={children:[],attributes:v(v({},c.attributes),{},{"data-prefix":h,"data-icon":e,class:x,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(m)})};!A4(c.attributes)&&!c.attributes["aria-hidden"]&&(A.attributes["aria-hidden"]="true"),w&&(A.attributes[E]="");var V=v(v({},A),{},{prefix:h,iconName:e,main:t,mask:i,maskId:o,transform:s,symbol:r,styles:v({},c.styles)}),L=i.found&&t.found?Y("generateAbstractMask",V)||{children:[],attributes:{}}:Y("generateAbstractIcon",V)||{children:[],attributes:{}},y=L.children,N=L.attributes;return V.children=y,V.attributes=N,r?C4(V):H4(V)}function m5(a){var l=a.content,t=a.width,i=a.height,h=a.transform,e=a.extra,s=a.watchable,r=s===void 0?!1:s,o=v(v({},e.attributes),{},{class:e.classes.join(" ")});r&&(o[E]="");var c=v({},e.styles);u1(h)&&(c.transform=a4({transform:h,startCentered:!0,width:t,height:i}),c["-webkit-transform"]=c.transform);var n=P0(c);n.length>0&&(o.style=n);var w=[];return w.push({tag:"span",attributes:o,children:[l]}),w}function Z4(a){var l=a.content,t=a.extra,i=v(v({},t.attributes),{},{class:t.classes.join(" ")}),h=P0(t.styles);h.length>0&&(i.style=h);var e=[];return e.push({tag:"span",attributes:i,children:[l]}),e}var K0=k.styles;function o1(a){var l=a[0],t=a[1],i=a.slice(4),h=D0(i,1),e=h[0],s=null;return Array.isArray(e)?s={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(Y0.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Y0.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Y0.PRIMARY),fill:"currentColor",d:e[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:l,height:t,icon:s}}var L4={found:!1,width:512,height:512};function B4(a,l){!g2&&!g.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(l,'" is missing.'))}function v1(a,l){var t=l;return l==="fa"&&g.styleDefault!==null&&(l=G()),new Promise(function(i,h){if(t==="fa"){var e=L2(a)||{};a=e.iconName||a,l=e.prefix||l}if(a&&l&&K0[l]&&K0[l][a]){var s=K0[l][a];return i(o1(s))}B4(a,l),i(v(v({},L4),{},{icon:g.showMissingIcons&&a?Y("missingIconAbstract")||{}:{}}))})}var V5=function(){},c1=g.measurePerformance&&A0&&A0.mark&&A0.measure?A0:{mark:V5,measure:V5},w0='FA "7.1.0"',F4=function(l){return c1.mark("".concat(w0," ").concat(l," begins")),function(){return y2(l)}},y2=function(l){c1.mark("".concat(w0," ").concat(l," ends")),c1.measure("".concat(w0," ").concat(l),"".concat(w0," ").concat(l," begins"),"".concat(w0," ").concat(l," ends"))},V1={begin:F4,end:y2},B0=function(){};function H5(a){var l=a.getAttribute?a.getAttribute(E):null;return typeof l=="string"}function y4(a){var l=a.getAttribute?a.getAttribute(p1):null,t=a.getAttribute?a.getAttribute(f1):null;return l&&t}function k4(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(g.replacementClass)}function S4(){if(g.autoReplaceSvg===!0)return F0.replace;var a=F0[g.autoReplaceSvg];return a||F0.replace}function D4(a){return u.createElementNS("http://www.w3.org/2000/svg",a)}function P4(a){return u.createElement(a)}function k2(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=l.ceFn,i=t===void 0?a.tag==="svg"?D4:P4:t;if(typeof a=="string")return u.createTextNode(a);var h=i(a.tag);Object.keys(a.attributes||[]).forEach(function(s){h.setAttribute(s,a.attributes[s])});var e=a.children||[];return e.forEach(function(s){h.appendChild(k2(s,{ceFn:i}))}),h}function q4(a){var l=" ".concat(a.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var F0={replace:function(l){var t=l[0];if(t.parentNode)if(l[1].forEach(function(h){t.parentNode.insertBefore(k2(h),t)}),t.getAttribute(E)===null&&g.keepOriginalSource){var i=u.createComment(q4(t));t.parentNode.replaceChild(i,t)}else t.remove()},nest:function(l){var t=l[0],i=l[1];if(~z1(t).indexOf(g.replacementClass))return F0.replace(l);var h=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var e=i[0].attributes.class.split(" ").reduce(function(r,o){return o===g.replacementClass||o.match(h)?r.toSvg.push(o):r.toNode.push(o),r},{toNode:[],toSvg:[]});i[0].attributes.class=e.toSvg.join(" "),e.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",e.toNode.join(" "))}var s=i.map(function(r){return b0(r)}).join(`
`);t.setAttribute(E,""),t.innerHTML=s}};function C5(a){a()}function S2(a,l){var t=typeof l=="function"?l:B0;if(a.length===0)t();else{var i=C5;g.mutateApproach===j6&&(i=X.requestAnimationFrame||C5),i(function(){var h=S4(),e=V1.begin("mutate");a.map(h),e(),t()})}}var H1=!1;function D2(){H1=!0}function w1(){H1=!1}var S0=null;function A5(a){if(v5&&g.observeMutations){var l=a.treeCallback,t=l===void 0?B0:l,i=a.nodeCallback,h=i===void 0?B0:i,e=a.pseudoElementsCallback,s=e===void 0?B0:e,r=a.observeMutationsRoot,o=r===void 0?u:r;S0=new v5(function(c){if(!H1){var n=G();o0(c).forEach(function(w){if(w.type==="childList"&&w.addedNodes.length>0&&!H5(w.addedNodes[0])&&(g.searchPseudoElements&&s(w.target),t(w.target)),w.type==="attributes"&&w.target.parentNode&&g.searchPseudoElements&&s([w.target],!0),w.type==="attributes"&&H5(w.target)&&~X6.indexOf(w.attributeName))if(w.attributeName==="class"&&y4(w.target)){var f=T0(z1(w.target)),p=f.prefix,m=f.iconName;w.target.setAttribute(p1,p||n),m&&w.target.setAttribute(f1,m)}else k4(w.target)&&h(w.target)})}}),O&&S0.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function T4(){S0&&S0.disconnect()}function R4(a){var l=a.getAttribute("style"),t=[];return l&&(t=l.split(";").reduce(function(i,h){var e=h.split(":"),s=e[0],r=e.slice(1);return s&&r.length>0&&(i[s]=r.join(":").trim()),i},{})),t}function j4(a){var l=a.getAttribute("data-prefix"),t=a.getAttribute("data-icon"),i=a.innerText!==void 0?a.innerText.trim():"",h=T0(z1(a));return h.prefix||(h.prefix=G()),l&&t&&(h.prefix=l,h.iconName=t),h.iconName&&h.prefix||(h.prefix&&i.length>0&&(h.iconName=v4(h.prefix,a.innerText)||M1(h.prefix,x2(a.innerText))),!h.iconName&&g.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(h.iconName=a.firstChild.data)),h}function O4(a){var l=o0(a.attributes).reduce(function(t,i){return t.name!=="class"&&t.name!=="style"&&(t[i.name]=i.value),t},{});return l}function _4(){return{iconName:null,prefix:null,transform:q,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Z5(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=j4(a),i=t.iconName,h=t.prefix,e=t.rest,s=O4(a),r=s1("parseNodeAttributes",{},a),o=l.styleParser?R4(a):[];return v({iconName:i,prefix:h,transform:q,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:o,attributes:s}},r)}var U4=k.styles;function P2(a){var l=g.autoReplaceSvg==="nest"?Z5(a,{styleParser:!1}):Z5(a);return~l.extra.classes.indexOf(d2)?Y("generateLayersText",a,l):Y("generateSvgReplacementMutation",a,l)}function W4(){return[].concat(S(s2),S(r2))}function L5(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!O)return Promise.resolve();var t=u.documentElement.classList,i=function(w){return t.add("".concat(g5,"-").concat(w))},h=function(w){return t.remove("".concat(g5,"-").concat(w))},e=g.autoFetchSvg?W4():U5.concat(Object.keys(U4));e.includes("fa")||e.push("fa");var s=[".".concat(d2,":not([").concat(E,"])")].concat(e.map(function(n){return".".concat(n,":not([").concat(E,"])")})).join(", ");if(s.length===0)return Promise.resolve();var r=[];try{r=o0(a.querySelectorAll(s))}catch{}if(r.length>0)i("pending"),h("complete");else return Promise.resolve();var o=V1.begin("onTree"),c=r.reduce(function(n,w){try{var f=P2(w);f&&n.push(f)}catch(p){g2||p.name==="MissingIcon"&&console.error(p)}return n},[]);return new Promise(function(n,w){Promise.all(c).then(function(f){S2(f,function(){i("active"),i("complete"),h("pending"),typeof l=="function"&&l(),o(),n()})}).catch(function(f){o(),w(f)})})}function $4(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;P2(a).then(function(t){t&&S2([t],l)})}function X4(a){return function(l){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(l||{}).icon?l:r1(l||{}),h=t.mask;return h&&(h=(h||{}).icon?h:r1(h||{})),a(i,v(v({},t),{},{mask:h}))}}var G4=function(l){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,h=i===void 0?q:i,e=t.symbol,s=e===void 0?!1:e,r=t.mask,o=r===void 0?null:r,c=t.maskId,n=c===void 0?null:c,w=t.classes,f=w===void 0?[]:w,p=t.attributes,m=p===void 0?{}:p,x=t.styles,A=x===void 0?{}:x;if(l){var V=l.prefix,L=l.iconName,y=l.icon;return R0(v({type:"icon"},l),function(){return I("beforeDOMElementCreation",{iconDefinition:l,params:t}),m1({icons:{main:o1(y),mask:o?o1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:V,iconName:L,transform:v(v({},q),h),symbol:s,maskId:n,extra:{attributes:m,styles:A,classes:f}})})}},Y4={mixout:function(){return{icon:X4(G4)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=L5,t.nodeCallback=$4,t}}},provides:function(l){l.i2svg=function(t){var i=t.node,h=i===void 0?u:i,e=t.callback,s=e===void 0?function(){}:e;return L5(h,s)},l.generateSvgReplacementMutation=function(t,i){var h=i.iconName,e=i.prefix,s=i.transform,r=i.symbol,o=i.mask,c=i.maskId,n=i.extra;return new Promise(function(w,f){Promise.all([v1(h,e),o.iconName?v1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var m=D0(p,2),x=m[0],A=m[1];w([t,m1({icons:{main:x,mask:A},prefix:e,iconName:h,transform:s,symbol:r,maskId:c,extra:n,watchable:!0})])}).catch(f)})},l.generateAbstractIcon=function(t){var i=t.children,h=t.attributes,e=t.main,s=t.transform,r=t.styles,o=P0(r);o.length>0&&(h.style=o);var c;return u1(s)&&(c=Y("generateAbstractTransformGrouping",{main:e,transform:s,containerWidth:e.width,iconWidth:e.width})),i.push(c||e.icon),{children:i,attributes:h}}}},J4={mixout:function(){return{layer:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.classes,e=h===void 0?[]:h;return R0({type:"layer"},function(){I("beforeDOMElementCreation",{assembler:t,params:i});var s=[];return t(function(r){Array.isArray(r)?r.map(function(o){s=s.concat(o.abstract)}):s=s.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(S(e)).join(" ")},children:s}]})}}}},Q4={mixout:function(){return{counter:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.title,e=h===void 0?null:h,s=i.classes,r=s===void 0?[]:s,o=i.attributes,c=o===void 0?{}:o,n=i.styles,w=n===void 0?{}:n;return R0({type:"counter",content:t},function(){return I("beforeDOMElementCreation",{content:t,params:i}),Z4({content:t.toString(),title:e,extra:{attributes:c,styles:w,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(S(r))}})})}}}},K4={mixout:function(){return{text:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.transform,e=h===void 0?q:h,s=i.classes,r=s===void 0?[]:s,o=i.attributes,c=o===void 0?{}:o,n=i.styles,w=n===void 0?{}:n;return R0({type:"text",content:t},function(){return I("beforeDOMElementCreation",{content:t,params:i}),m5({content:t,transform:v(v({},q),e),extra:{attributes:c,styles:w,classes:["".concat(g.cssPrefix,"-layers-text")].concat(S(r))}})})}}},provides:function(l){l.generateLayersText=function(t,i){var h=i.transform,e=i.extra,s=null,r=null;if(O5){var o=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();s=c.width/o,r=c.height/o}return Promise.resolve([t,m5({content:t.innerHTML,width:s,height:r,transform:h,extra:e,watchable:!0})])}}},q2=new RegExp('"',"ug"),B5=[1105920,1112319],F5=v(v(v(v({},{FontAwesome:{normal:"fas",400:"fas"}}),k3),T6),_3),g1=Object.keys(F5).reduce(function(a,l){return a[l.toLowerCase()]=F5[l],a},{}),E4=Object.keys(g1).reduce(function(a,l){var t=g1[l];return a[l]=t[900]||S(Object.entries(t))[0][1],a},{});function I4(a){var l=a.replace(q2,"");return x2(S(l)[0]||"")}function N4(a){var l=a.getPropertyValue("font-feature-settings").includes("ss01"),t=a.getPropertyValue("content"),i=t.replace(q2,""),h=i.codePointAt(0),e=h>=B5[0]&&h<=B5[1],s=i.length===2?i[0]===i[1]:!1;return e||s||l}function aa(a,l){var t=a.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(l),h=isNaN(i)?"normal":i;return(g1[t]||{})[h]||E4[t]}function y5(a,l){var t="".concat(R6).concat(l.replace(":","-"));return new Promise(function(i,h){if(a.getAttribute(t)!==null)return i();var e=o0(a.children),s=e.filter(function(O0){return O0.getAttribute(l1)===l})[0],r=X.getComputedStyle(a,l),o=r.getPropertyValue("font-family"),c=o.match(W6),n=r.getPropertyValue("font-weight"),w=r.getPropertyValue("content");if(s&&!c)return a.removeChild(s),i();if(c&&w!=="none"&&w!==""){var f=r.getPropertyValue("content"),p=aa(o,n),m=I4(f),x=c[0].startsWith("FontAwesome"),A=N4(r),V=M1(p,m),L=V;if(x){var y=c4(m);y.iconName&&y.prefix&&(V=y.iconName,p=y.prefix)}if(V&&!A&&(!s||s.getAttribute(p1)!==p||s.getAttribute(f1)!==L)){a.setAttribute(t,L),s&&a.removeChild(s);var N=_4(),T=N.extra;T.attributes[l1]=l,v1(V,p).then(function(O0){var _2=m1(v(v({},N),{},{icons:{main:O0,mask:B2()},prefix:p,iconName:L,extra:T,watchable:!0})),_0=u.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?a.insertBefore(_0,a.firstChild):a.appendChild(_0),_0.outerHTML=_2.map(function(U2){return b0(U2)}).join(`
`),a.removeAttribute(t),i()}).catch(h)}else i()}else i()})}function la(a){return Promise.all([y5(a,"::before"),y5(a,"::after")])}function ta(a){return a.parentNode!==document.head&&!~O6.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(l1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var ia=function(l){return!!l&&w2.some(function(t){return l.includes(t)})},ha=function(l){if(!l)return[];var t=new Set,i=l.split(/,(?![^()]*\))/).map(function(o){return o.trim()});i=i.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(c){return c.trim()})});var h=L0(i),e;try{for(h.s();!(e=h.n()).done;){var s=e.value;if(ia(s)){var r=w2.reduce(function(o,c){return o.replace(c,"")},s);r!==""&&r!=="*"&&t.add(r)}}}catch(o){h.e(o)}finally{h.f()}return t};function k5(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(O){var t;if(l)t=a;else if(g.searchPseudoElementsFullScan)t=a.querySelectorAll("*");else{var i=new Set,h=L0(document.styleSheets),e;try{for(h.s();!(e=h.n()).done;){var s=e.value;try{var r=L0(s.cssRules),o;try{for(r.s();!(o=r.n()).done;){var c=o.value,n=ha(c.selectorText),w=L0(n),f;try{for(w.s();!(f=w.n()).done;){var p=f.value;i.add(p)}}catch(x){w.e(x)}finally{w.f()}}}catch(x){r.e(x)}finally{r.f()}}catch(x){g.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(s.href," (").concat(x.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(x){h.e(x)}finally{h.f()}if(!i.size)return;var m=Array.from(i).join(", ");try{t=a.querySelectorAll(m)}catch{}}return new Promise(function(x,A){var V=o0(t).filter(ta).map(la),L=V1.begin("searchPseudoElements");D2(),Promise.all(V).then(function(){L(),w1(),x()}).catch(function(){L(),w1(),A()})})}}var ea={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=k5,t}}},provides:function(l){l.pseudoElements2svg=function(t){var i=t.node,h=i===void 0?u:i;g.searchPseudoElements&&k5(h)}}},S5=!1,sa={mixout:function(){return{dom:{unwatch:function(){D2(),S5=!0}}}},hooks:function(){return{bootstrap:function(){A5(s1("mutationObserverCallbacks",{}))},noAuto:function(){T4()},watch:function(t){var i=t.observeMutationsRoot;S5?w1():A5(s1("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},D5=function(l){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce(function(i,h){var e=h.toLowerCase().split("-"),s=e[0],r=e.slice(1).join("-");if(s&&r==="h")return i.flipX=!0,i;if(s&&r==="v")return i.flipY=!0,i;if(r=parseFloat(r),isNaN(r))return i;switch(s){case"grow":i.size=i.size+r;break;case"shrink":i.size=i.size-r;break;case"left":i.x=i.x-r;break;case"right":i.x=i.x+r;break;case"up":i.y=i.y-r;break;case"down":i.y=i.y+r;break;case"rotate":i.rotate=i.rotate+r;break}return i},t)},ra={mixout:function(){return{parse:{transform:function(t){return D5(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,i){var h=i.getAttribute("data-fa-transform");return h&&(t.transform=D5(h)),t}}},provides:function(l){l.generateAbstractTransformGrouping=function(t){var i=t.main,h=t.transform,e=t.containerWidth,s=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(h.x*32,", ").concat(h.y*32,") "),c="scale(".concat(h.size/16*(h.flipX?-1:1),", ").concat(h.size/16*(h.flipY?-1:1),") "),n="rotate(".concat(h.rotate," 0 0)"),w={transform:"".concat(o," ").concat(c," ").concat(n)},f={transform:"translate(".concat(s/2*-1," -256)")},p={outer:r,inner:w,path:f};return{tag:"g",attributes:v({},p.outer),children:[{tag:"g",attributes:v({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:v(v({},i.icon.attributes),p.path)}]}]}}}},E0={x:0,y:0,width:"100%",height:"100%"};function P5(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||l)&&(a.attributes.fill="black"),a}function oa(a){return a.tag==="g"?a.children:[a]}var va={hooks:function(){return{parseNodeAttributes:function(t,i){var h=i.getAttribute("data-fa-mask"),e=h?T0(h.split(" ").map(function(s){return s.trim()})):B2();return e.prefix||(e.prefix=G()),t.mask=e,t.maskId=i.getAttribute("data-fa-mask-id"),t}}},provides:function(l){l.generateAbstractMask=function(t){var i=t.children,h=t.attributes,e=t.main,s=t.mask,r=t.maskId,o=t.transform,c=e.width,n=e.icon,w=s.width,f=s.icon,p=N6({transform:o,containerWidth:w,iconWidth:c}),m={tag:"rect",attributes:v(v({},E0),{},{fill:"white"})},x=n.children?{children:n.children.map(P5)}:{},A={tag:"g",attributes:v({},p.inner),children:[P5(v({tag:n.tag,attributes:v(v({},n.attributes),p.path)},x))]},V={tag:"g",attributes:v({},p.outer),children:[A]},L="mask-".concat(r||p5()),y="clip-".concat(r||p5()),N={tag:"mask",attributes:v(v({},E0),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,V]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:oa(f)},N]};return i.push(T,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(L,")")},E0)}),{children:i,attributes:h}}}},ca={provides:function(l){var t=!1;X.matchMedia&&(t=X.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){var i=[],h={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:v(v({},h),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=v(v({},e),{},{attributeName:"opacity"}),r={tag:"circle",attributes:v(v({},h),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||r.children.push({tag:"animate",attributes:v(v({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},s),{},{values:"1;0;1;1;0;1;"})}),i.push(r),i.push({tag:"path",attributes:v(v({},h),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:v(v({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||i.push({tag:"path",attributes:v(v({},h),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},wa={hooks:function(){return{parseNodeAttributes:function(t,i){var h=i.getAttribute("data-fa-symbol"),e=h===null?!1:h===""?!0:h;return t.symbol=e,t}}}},ga=[t4,Y4,J4,Q4,K4,ea,sa,ra,va,ca,wa];u4(ga,{mixoutsTo:F});var p7=F.noAuto,na=F.config,f7=F.library,da=F.dom,pa=F.parse,b7=F.findIconDefinition,z7=F.toHtml,fa=F.icon,u7=F.layer,ba=F.text,za=F.counter;var T2=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=U({type:a});static \u0275inj=_({})}return a})();var Ma=new A1("ngx-bootstrap-icons-module-configuration");var C1=class{constructor(l){this._icons=l}};var R2=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower1" viewBox="0 0 16 16">
  <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 0-.998 1.03l.01.091c.012.077.029.176.054.296.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a4.997 4.997 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1zM2 9l.03-.002.091-.01a4.99 4.99 0 0 0 .296-.054c.241-.049.542-.122.887-.213a60.59 60.59 0 0 0 2.314-.676L5.762 8l-.144-.045a60.59 60.59 0 0 0-2.314-.676 16.705 16.705 0 0 0-.887-.213 4.99 4.99 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2zm7 5-.002-.03a5.005 5.005 0 0 0-.064-.386 16.398 16.398 0 0 0-.213-.888 60.582 60.582 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a4.996 4.996 0 0 0-.064.386L7 14a1 1 0 1 0 2 0zm-5.696-2.134.025-.017a5.001 5.001 0 0 0 .303-.248c.184-.164.408-.377.661-.629A60.614 60.614 0 0 0 5.96 9.23l.103-.111-.147.033a60.88 60.88 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5.063 5.063 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027c-.01.02-.021.048-.036.084a5.09 5.09 0 0 0-.102.283c-.078.233-.165.53-.258.875a60.62 60.62 0 0 0-.572 2.342l-.033.147.11-.102a60.848 60.848 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5.001 5.001 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196.017.025a4.996 4.996 0 0 0 .248.303c.164.184.377.408.629.661A60.597 60.597 0 0 0 6.77 5.96l.111.102-.033-.147a60.602 60.602 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5.006 5.006 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1zm9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a60.619 60.619 0 0 0-2.342-.572l-.147-.033.102.111a60.73 60.73 0 0 0 1.667 1.742c.253.252.477.465.66.629a4.946 4.946 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg>`,j2=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower2" viewBox="0 0 16 16">
  <path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4zm3-12c0 .073-.01.155-.03.247-.544.241-1.091.638-1.598 1.084A2.987 2.987 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1.117 1.117 0 0 1 5 4a3 3 0 0 1 6 0zm-.812 6.052A2.99 2.99 0 0 0 11 8a2.99 2.99 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a6.833 6.833 0 0 1-.647-.487zm-3.56.617a3.001 3.001 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084.02.091.03.174.03.247a3 3 0 1 1-6 0c0-.073.01-.155.03-.247.544-.242 1.091-.638 1.598-1.084zm-.816-4.721A2.99 2.99 0 0 0 5 8c0 .794.308 1.516.812 2.052a6.83 6.83 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
</svg>`;var O2=(()=>{class a{static pick(t,i){return{ngModule:a,providers:[{provide:C1,multi:!0,useValue:t},{provide:Ma,useValue:i}]}}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=U({type:a}),a.\u0275inj=_({}),a})();var ma={flower1:R2,flower2:j2},j0=class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=U({type:a,bootstrap:[C0]});static \u0275inj=_({providers:[F1(),K1(W0),X1($1())],imports:[W1,i5,t5,c0,m0,T2,O2.pick(ma)]})};U1().bootstrapModule(j0,{}).catch(a=>console.error(a));
