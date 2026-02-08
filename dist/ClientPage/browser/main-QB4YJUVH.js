import{$ as a5,A as O1,B as T1,C as m0,D as b,E as K,F as V0,G as q1,H as H0,I as R1,J as j1,K as U1,L as E,M as W1,N as $1,O as X1,P as G1,Q as C0,R as Y1,S as J1,T as A0,U as Z0,V as Q1,W as K1,X as w0,Y as E1,Z as I1,_ as N1,a as x0,aa as l5,b as W,ba as t5,c as k1,d as t0,e as i0,f as y1,g as S1,h as n0,i as M0,j as Y0,k as P1,l as M,m as D1,n as L,o as $,p as X,q,r as J0,s as B,t as w,u as p,v as x,w as h0,x as k,y as P,z as _1}from"./chunk-VWTNXLOR.js";import"./chunk-FK6H3RFT.js";import"./chunk-DAQOROHW.js";var Q0=[{path:"",loadChildren:()=>import("./chunk-SAQWWI4T.js").then(a=>a.ComponentsModule)}],L0=class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=X({type:a});static \u0275inj=W({imports:[w0.forRoot(Q0,{scrollPositionRestoration:"top",preloadingStrategy:Q1,onSameUrlNavigation:"reload"}),w0]})};var X2=(a,t)=>({"navbar-scrolled":a,"navbar-product-page":t});function G2(a,t){if(a&1){let l=h0();w(0,"a",28),k("click",function(){let h=t0(l).$implicit,e=P();return i0(e.ChangePage(h))}),x(1,"i",9),b(2),p()}if(a&2){let l=t.$implicit;M(2),V0(" ",l," ")}}function Y2(a,t){if(a&1){let l=h0();w(0,"button",34),k("click",function(){t0(l);let h=P(2);return i0(h.clearSearch())}),b(1," \xD7 "),p()}}function J2(a,t){if(a&1){let l=h0();w(0,"button",38),k("click",function(){let h=t0(l).$implicit,e=P(3);return i0(e.goToProduct(h))}),x(1,"img",39),w(2,"div",40)(3,"span",41),b(4),p(),w(5,"span",42),b(6),p()()()}if(a&2){let l=t.$implicit;M(),B("src","./img/Plants/400/"+l.productimg[0],Y0)("alt",l.productname+" plant"),M(3),K(l.productname),M(2),K(l.productlabel)}}function Q2(a,t){a&1&&(w(0,"div",43),b(1,"No results found."),p())}function K2(a,t){if(a&1&&(w(0,"div",35),q(1,J2,7,4,"button",36)(2,Q2,2,0,"div",37),p()),a&2){let l=P(2);M(),B("ngForOf",l.searchResults),M(),B("ngIf",l.searchResults.length===0)}}function E2(a,t){if(a&1){let l=h0();w(0,"button",38),k("click",function(){let h=t0(l).$implicit,e=P(3);return i0(e.goToProduct(h))}),x(1,"img",39),w(2,"div",40)(3,"span",41),b(4),p(),w(5,"span",42),b(6),p()()()}if(a&2){let l=t.$implicit;M(),B("src","./img/Plants/400/"+l.productimg[0],Y0)("alt",l.productname+" plant"),M(3),K(l.productname),M(2),K(l.productlabel)}}function I2(a,t){if(a&1&&(w(0,"div",35)(1,"div",44),b(2,"Suggested plants"),p(),q(3,E2,7,4,"button",36),p()),a&2){let l=P(2);M(3),B("ngForOf",l.suggestedResults)}}function N2(a,t){if(a&1){let l=h0();w(0,"div",29)(1,"div",30)(2,"input",31),k("input",function(h){t0(l);let e=P();return i0(e.onSearchChange(h.target.value))}),p(),q(3,Y2,2,0,"button",32),p(),q(4,K2,3,2,"div",33)(5,I2,4,1,"div",33),p()}if(a&2){let l=P();M(2),B("value",l.searchTerm),M(),B("ngIf",l.searchTerm),M(),B("ngIf",l.searchTerm),M(),B("ngIf",!l.searchTerm)}}function a3(a,t){if(a&1&&(w(0,"span",45),b(1),p()),a&2){let l=P();M(),K(l.cartItemCount)}}function l3(a,t){if(a&1&&(w(0,"span",45),b(1),p()),a&2){let l=P();M(),K(l.WishlistCount)}}var r0=class a{constructor(t,l,i,h,e,r){this.location=t;this.element=l;this.router=i;this.route=h;this.platformId=e;this.componentsService=r;this.sidebarVisible=!1,this.flora_detail=this.componentsService.getAllCategory(),this.flora_detail.splice(0,0,"All Flora"),this.flora_detail=Array.from(new Set(this.flora_detail.flatMap(s=>s.split(",").map(o=>o.trim()))))}toggleButton;sidebarVisible;cartItemCount=0;WishlistCount=0;isScrolled=!1;isProductPage=!1;showSearch=!1;searchTerm="";searchResults=[];suggestedResults=[];allProducts=[];flora_detail=[];enableColorOnScroll=!1;isMobile=!1;ngOnInit(){let t=this.element.nativeElement;this.toggleButton=t.getElementsByClassName("navbar-toggler")[0],this.router.events.pipe(x0(l=>l instanceof C0)).subscribe(()=>{let l=this.route.root;for(;l.firstChild;)l=l.firstChild;this.enableColorOnScroll=l.snapshot.data.colorOnScroll??!1,this.isProductPage=this.router.url.includes("/Product/")}),this.componentsService.wishlist$.subscribe(l=>{this.WishlistCount=l.length||0}),this.componentsService.cartlist$.subscribe(l=>{this.cartItemCount=l.reduce((i,h)=>i+h.productcount,0)}),this.componentsService.currentData$.subscribe(l=>{this.allProducts=l||[],this.updateSearchResults(this.searchTerm),this.updateSuggestedResults()}),this.checkScreen(),E(this.platformId)&&(window.addEventListener("resize",()=>{this.checkScreen()}),window.addEventListener("scroll",()=>{this.isScrolled=window.scrollY>50}))}checkScreen(){E(this.platformId)&&(this.isMobile=window.innerWidth<=768)}sidebarOpen(){if(!E(this.platformId))return;let t=this.toggleButton,l=document.getElementsByTagName("html")[0];setTimeout(function(){t.classList.add("toggled")},500),l.classList.add("nav-open"),this.sidebarVisible=!0}sidebarClose(){if(!E(this.platformId))return;let t=document.getElementsByTagName("html")[0];this.toggleButton.classList.remove("toggled"),this.sidebarVisible=!1,t.classList.remove("nav-open")}sidebarToggle(){this.sidebarVisible===!1?this.sidebarOpen():this.sidebarClose()}ChangePage(t){t==="All Flora"&&(t="all"),this.router.navigate(["/collection/",t])}goToWishlist(){this.sidebarToggle(),this.router.navigate(["/wishlist"])}goToCart(){this.sidebarToggle(),this.router.navigate(["/cart"])}toggleSearch(){this.showSearch=!this.showSearch,this.showSearch?this.updateSuggestedResults():this.clearSearch()}onSearchChange(t){this.searchTerm=t,this.updateSearchResults(t)}clearSearch(){this.searchTerm="",this.searchResults=[]}updateSearchResults(t){let l=(t||"").trim().toLowerCase();if(!l){this.searchResults=[];return}this.searchResults=this.allProducts.filter(i=>{let h=i.productname?.toLowerCase()||"",e=i.productlabel?.toLowerCase()||"",r=i.productsciname?.toLowerCase()||"",s=i.shortDescription?.toLowerCase()||"";return h.includes(l)||e.includes(l)||r.includes(l)||s.includes(l)}).slice(0,8)}updateSuggestedResults(){if(!this.allProducts.length){this.suggestedResults=[];return}let t=[...this.allProducts].sort(()=>.5-Math.random());this.suggestedResults=t.slice(0,3)}goToProduct(t){this.sidebarToggle(),this.showSearch=!1,this.clearSearch(),this.router.navigate(["/Product",t.productname])}static \u0275fac=function(l){return new(l||a)(L(H0),L(n0),L(A0),L(Y1),L(M0),L(E1))};static \u0275cmp=$({type:a,selectors:[["app-navbar"]],standalone:!1,decls:41,vars:11,consts:[[1,"navbar","navbar-expand-lg","fixed-top","navbar-modern",3,"ngClass"],[1,"container"],[1,"navbar-translate"],[1,"navbar-left-group"],["routerLink","/",1,"navbar-brand-wrapper"],["src","img/riyaorangery_nobg.png","alt","Riya Orangery logo \u2013 Indoor plants and succulents",1,"brand-logo"],[1,"navbar-brand"],["ngbDropdown","",1,"d-inline-block","dropdown","flora-dropdown"],["id","dropdownBasic1","ngbDropdownToggle","",1,"flora-link"],[1,"fa","fa-leaf"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1",1,"dropdown-menu-modern"],["class","dropdown-item",3,"click",4,"ngFor","ngForOf"],["type","button","data-toggle","collapse","data-target","#navbarToggler","aria-controls","navbarTogglerDemo02","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","navbar-burger",3,"click"],[1,"navbar-toggler-bar"],["id","navbarToggler",1,"navbar-collapse"],[1,"navbar-nav","ml-auto"],[1,"nav-item","search-item"],["type","button","rel","tooltip","title","Search","data-placement","bottom",1,"nav-link","nav-icon-link","search-toggle",3,"click"],[1,"icon-wrapper"],[1,"fa","fa-search"],[1,"d-lg-none","nav-label"],["class","search-dropdown",4,"ngIf"],[1,"nav-item"],["rel","tooltip","title","Cart","data-placement","bottom",1,"nav-link","nav-icon-link",3,"click"],[1,"fa","fa-shopping-cart"],["class","badge-count",4,"ngIf"],["rel","tooltip","title","Wishlist","data-placement","bottom",1,"nav-link","nav-icon-link",3,"click"],[1,"fa","fa-heart"],[1,"dropdown-item",3,"click"],[1,"search-dropdown"],[1,"search-input-wrapper"],["type","text","placeholder","Search plants, categories...",1,"search-input",3,"input","value"],["class","clear-btn","type","button","aria-label","Clear search",3,"click",4,"ngIf"],["class","search-results",4,"ngIf"],["type","button","aria-label","Clear search",1,"clear-btn",3,"click"],[1,"search-results"],["class","search-result-item","type","button",3,"click",4,"ngFor","ngForOf"],["class","no-results",4,"ngIf"],["type","button",1,"search-result-item",3,"click"],[1,"result-image",3,"src","alt"],[1,"result-text"],[1,"result-name"],[1,"result-meta"],[1,"no-results"],[1,"suggested-title"],[1,"badge-count"]],template:function(l,i){l&1&&(w(0,"nav",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),x(5,"img",5),w(6,"span",6),b(7,"Riya Orangery"),p()(),w(8,"div",7)(9,"a",8),x(10,"i",9),b(11," Flora "),p(),w(12,"div",10),q(13,G2,3,1,"a",11),p()()(),w(14,"button",12),k("click",function(){return i.sidebarToggle()}),x(15,"span",13)(16,"span",13)(17,"span",13),p()(),w(18,"div",14)(19,"ul",15)(20,"li",16)(21,"button",17),k("click",function(){return i.toggleSearch()}),w(22,"div",18),x(23,"i",19),p(),w(24,"span",20),b(25,"Search"),p()(),q(26,N2,6,4,"div",21),p(),w(27,"li",22)(28,"a",23),k("click",function(){return i.goToCart()}),w(29,"div",18),x(30,"i",24),q(31,a3,2,1,"span",25),p(),w(32,"span",20),b(33,"Cart"),p()()(),w(34,"li",22)(35,"a",26),k("click",function(){return i.goToWishlist()}),w(36,"div",18),x(37,"i",27),q(38,l3,2,1,"span",25),p(),w(39,"span",20),b(40,"Wishlist"),p()()()()()()()),l&2&&(B("ngClass",q1(8,X2,i.isScrolled,i.isProductPage)),J0("color-on-scroll",i.enableColorOnScroll?"500":null),M(13),B("ngForOf",i.flora_detail),M(7),m0("open",i.showSearch),M(6),B("ngIf",i.showSearch),M(5),B("ngIf",i.cartItemCount!==0),M(7),B("ngIf",i.WishlistCount!==0))},dependencies:[R1,j1,U1,a5,N1,I1,Z0],styles:[".navbar-modern[_ngcontent-%COMP%]{background:transparent;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none;padding:12px 0;transition:all .3s ease}.navbar-modern.navbar-scrolled[_ngcontent-%COMP%]{background:#fffffffa;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 6px 25px #0000001f}.navbar-modern.navbar-product-page[_ngcontent-%COMP%]{background:#fffffffa;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 4px 20px #00000014}.navbar-left-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;flex-wrap:nowrap}.navbar-brand-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;cursor:pointer;transition:all .3s ease}.navbar-brand-wrapper[_ngcontent-%COMP%]:hover{transform:translate(3px)}.navbar-brand-wrapper[_ngcontent-%COMP%]:hover   .navbar-brand[_ngcontent-%COMP%]{color:#6aa84f}.navbar-brand-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{height:45px;width:auto;filter:drop-shadow(0 2px 8px rgba(106,168,79,.2))}.navbar-brand-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:700;color:#fff;margin:0;transition:color .3s ease;text-shadow:0 2px 4px rgba(0,0,0,.3)}.navbar-scrolled[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], .navbar-product-page[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#2d3748!important;text-shadow:none}.flora-dropdown[_ngcontent-%COMP%]{margin-left:0}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 20px;background:linear-gradient(135deg,#6aa84f,#5a9440);color:#fff;border-radius:50px;font-weight:600;font-size:.95rem;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 12px #6aa84f4d}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.9rem}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]   i.fa-chevron-down[_ngcontent-%COMP%]{font-size:.75rem}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#5a9440,#4a7d33);box-shadow:0 6px 16px #6aa84f66;transform:translateY(-1px)}.dropdown-menu-modern[_ngcontent-%COMP%]{border:none;border-radius:16px;box-shadow:0 10px 30px #00000026;padding:10px 0;margin-top:10px;background:#fff}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:12px 24px;font-weight:500;color:#4a5568;display:flex;align-items:center;gap:12px;cursor:pointer;transition:all .2s ease}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#6aa84f;font-size:.85rem}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#f0f9f4,#e8f5e9);color:#2d3748;padding-left:28px}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#5a9440}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active{background:#e8f5e9}.navbar-toggler[_ngcontent-%COMP%]{border:none;padding:8px;margin-left:auto}.navbar-toggler[_ngcontent-%COMP%]:focus{outline:none;box-shadow:none}.navbar-toggler[_ngcontent-%COMP%]   .navbar-toggler-bar[_ngcontent-%COMP%]{display:block;width:26px;height:3px;background:#6aa84f;border-radius:2px;margin:5px 0;transition:all .3s ease}.navbar-toggler[_ngcontent-%COMP%]:hover   .navbar-toggler-bar[_ngcontent-%COMP%]{background:#5a9440}.navbar-nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin:0}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 16px;color:#4a5568;font-weight:500;cursor:pointer;transition:all .3s ease;border-radius:12px}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.4rem;color:#6aa84f;transition:all .3s ease}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   .badge-count[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px;background:linear-gradient(135deg,#fc8181,#f56565);color:#fff;font-size:.7rem;font-weight:700;padding:3px 7px;border-radius:50%;min-width:20px;height:20px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px #fc818166;animation:_ngcontent-%COMP%_badgePulse 2s ease-in-out infinite}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%]{font-weight:600;color:#2d3748}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]:hover   .icon-wrapper[_ngcontent-%COMP%]{transform:scale(1.1)}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]:hover   .icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#5a9440}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]{position:relative}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-toggle[_ngcontent-%COMP%]{background:transparent;border:none;outline:none;box-shadow:none}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-toggle[_ngcontent-%COMP%]:focus, .navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-toggle[_ngcontent-%COMP%]:focus-visible, .navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-toggle[_ngcontent-%COMP%]:active{outline:none;box-shadow:none}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]{position:absolute;right:0;top:calc(100% + 8px);width:320px;background:#fff;border-radius:16px;padding:12px;box-shadow:0 12px 30px #0000001f;z-index:1050}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]{position:relative}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;padding:10px 36px 10px 12px;border-radius:12px;border:1px solid #e2e8f0;font-size:.9rem;outline:none;transition:border .2s ease,box-shadow .2s ease}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus{border-color:#6aa84f;box-shadow:0 0 0 3px #6aa84f33}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]{position:absolute;right:8px;top:50%;transform:translateY(-50%);border:none;background:transparent;font-size:1.2rem;color:#718096;cursor:pointer}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{margin-top:10px;display:flex;flex-direction:column;gap:8px;max-height:280px;overflow-y:auto}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .suggested-title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#718096;padding:4px 4px 0}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:12px;background:#f8fafc;border:none;text-align:left;transition:background .2s ease;cursor:pointer}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]:hover{background:#edf2f7}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .result-image[_ngcontent-%COMP%]{width:40px;height:40px;object-fit:cover;border-radius:10px}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .result-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .result-name[_ngcontent-%COMP%]{font-weight:600;color:#2d3748;line-height:1.2}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%]{font-size:.75rem;color:#718096}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]{font-size:.85rem;color:#a0aec0;padding:8px 4px;text-align:center}@keyframes _ngcontent-%COMP%_badgePulse{0%,to{transform:scale(1)}50%{transform:scale(1.1)}}@media(max-width:991px){.navbar-translate[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;justify-content:space-between}.navbar-left-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-wrap:nowrap;flex:1}.navbar-brand-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{height:32px}.navbar-brand-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:1rem}.flora-dropdown[_ngcontent-%COMP%]{margin-left:0}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]{padding:8px 14px;font-size:.85rem;white-space:nowrap}.navbar-collapse[_ngcontent-%COMP%]{background:#fff;border-radius:16px;margin-top:15px;padding:20px;box-shadow:0 8px 24px #0000001a}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]{flex-direction:column;gap:10px;width:100%}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{width:100%}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]{justify-content:flex-start;width:100%;padding:12px 16px}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]{position:static;width:100%;margin-top:8px;background:#f8fafc;box-shadow:none}}@media(max-width:576px){.navbar-left-group[_ngcontent-%COMP%]{gap:8px}.navbar-brand-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{height:28px}.navbar-brand-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:.9rem}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]{padding:6px 10px;font-size:.75rem;gap:4px}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.75rem}}@media(max-width:768px)and (min-width:577px){.navbar-brand-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{height:30px}.navbar-brand-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:.95rem}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]{padding:7px 12px;font-size:.8rem}}"]})};var B0=class a{test=new Date;currentYear=new Date().getFullYear();showScrollTop=!1;onWindowScroll(){this.showScrollTop=window.scrollY>300}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=$({type:a,selectors:[["app-footer"]],hostBindings:function(l,i){l&1&&k("scroll",function(){return i.onWindowScroll()},P1)},standalone:!1,decls:68,vars:3,consts:[[1,"footer-modern"],[1,"container"],[1,"footer-content"],[1,"footer-column"],[1,"footer-brand"],["src","img/riyaorangery_nobg.png","alt","Riya Orangery",1,"footer-logo"],[1,"footer-tagline"],[1,"footer-social"],["href","https://www.instagram.com/__riya_orangery_/","target","_blank","rel","noopener","aria-label","Riya Orangery Instagram",1,"social-link"],[1,"fa","fa-instagram"],["href","https://wa.me/919894126648","target","_blank","rel","noopener","aria-label","WhatsApp",1,"social-link"],[1,"fa","fa-whatsapp"],[1,"footer-title"],[1,"footer-links"],["routerLink","/"],[1,"fa","fa-leaf"],["routerLink","/collection/all"],[1,"fa","fa-th"],["routerLink","/cart"],[1,"fa","fa-shopping-cart"],["routerLink","/wishlist"],[1,"fa","fa-heart"],[1,"footer-contact"],[1,"fa","fa-phone"],[1,"fa","fa-map-marker"],[1,"fa","fa-clock-o"],[1,"footer-dream"],[1,"newsletter"],[1,"newsletter-text"],[1,"footer-bottom"],[1,"footer-credit"],["aria-label","Scroll to top",1,"scroll-to-top",3,"click"],[1,"fa","fa-arrow-up"]],template:function(l,i){l&1&&(w(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),x(5,"img",5),w(6,"h4"),b(7,"Riya Orangery"),p()(),w(8,"p",6),b(9," We don't only deliver indoor plants, we deliver peace in small containers. "),p(),w(10,"div",7)(11,"a",8),x(12,"i",9),p(),w(13,"a",10),x(14,"i",11),p()()(),w(15,"div",3)(16,"h5",12),b(17,"Quick Links"),p(),w(18,"ul",13)(19,"li")(20,"a",14),x(21,"i",15),b(22," Home"),p()(),w(23,"li")(24,"a",16),x(25,"i",17),b(26," Shop All"),p()(),w(27,"li")(28,"a",18),x(29,"i",19),b(30," Cart"),p()(),w(31,"li")(32,"a",20),x(33,"i",21),b(34," Wishlist"),p()()()(),w(35,"div",3)(36,"h5",12),b(37,"Contact Us"),p(),w(38,"ul",22)(39,"li"),x(40,"i",23),w(41,"span"),b(42,"+91 9894126648"),p()(),w(43,"li"),x(44,"i",24),w(45,"span"),b(46,"Tamil Nadu, India"),p()(),w(47,"li"),x(48,"i",25),w(49,"span"),b(50,"Mon - Fri: 9AM - 6PM"),p()()()(),w(51,"div",3)(52,"h5",12),b(53,"Let's Create"),p(),w(54,"p",26),b(55,"The garden of your dreams"),p(),w(56,"div",27)(57,"p",28),b(58,"Stay updated with our latest plants and offers"),p()()()(),w(59,"div",29)(60,"p"),b(61),p(),w(62,"p",30),b(63,"Made with "),x(64,"i",21),b(65," for plant lovers"),p()()(),w(66,"button",31),k("click",function(){return i.scrollToTop()}),x(67,"i",32),p()()),l&2&&(M(61),V0("\xA9 ",i.currentYear," Riya Orangery. All rights reserved."),M(5),m0("visible",i.showScrollTop))},dependencies:[Z0],styles:['.footer-modern[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2d3748,#1a202c);color:#fff;padding:60px 0 20px;margin-top:80px;position:relative}.footer-modern[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#6aa84f,#5a9440,#6aa84f)}.footer-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:40px;margin-bottom:40px}@media(max-width:992px){.footer-content[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);gap:30px}}@media(max-width:576px){.footer-content[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:30px}}.footer-column[_ngcontent-%COMP%]   h5.footer-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;color:#6aa84f;margin-bottom:20px;text-transform:uppercase;letter-spacing:1px;position:relative;padding-bottom:10px}.footer-column[_ngcontent-%COMP%]   h5.footer-title[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:40px;height:3px;background:linear-gradient(90deg,#6aa84f,#5a9440);border-radius:2px}.footer-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px;margin-bottom:15px}.footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]{height:50px;width:auto;display:block;filter:drop-shadow(0 2px 8px rgba(106,168,79,.3))}.footer-brand[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;margin:0;color:#fff}.footer-tagline[_ngcontent-%COMP%]{font-size:.95rem;color:#cbd5e0;line-height:1.6;margin-bottom:20px}.footer-social[_ngcontent-%COMP%]{display:flex;gap:12px}.footer-social[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:40px;height:40px;background:#6aa84f1a;border:2px solid rgba(106,168,79,.3);border-radius:50%;color:#6aa84f;font-size:1.1rem;transition:all .3s ease}.footer-social[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#6aa84f,#5a9440);border-color:#6aa84f;color:#fff;transform:translateY(-3px);box-shadow:0 6px 16px #6aa84f66}.footer-links[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:12px}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:#cbd5e0;font-size:.95rem;transition:all .3s ease}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#6aa84f;font-size:.9rem;transition:transform .3s ease}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;padding-left:5px;text-decoration:none}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:translate(3px);color:#7cbd5f}.footer-contact[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.footer-contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;gap:15px;margin-bottom:16px;color:#cbd5e0;font-size:.95rem;line-height:1.6}.footer-contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#6aa84f;font-size:1.1rem;min-width:20px;margin-top:2px}.footer-contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1}.footer-dream[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600;color:#fff;margin-bottom:15px;line-height:1.4}.newsletter[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%]{font-size:.9rem;color:#cbd5e0;line-height:1.6;margin-bottom:15px}.footer-bottom[_ngcontent-%COMP%]{border-top:1px solid rgba(255,255,255,.1);padding-top:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:15px}.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:.9rem;color:#a0aec0}.footer-bottom[_ngcontent-%COMP%]   .footer-credit[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.footer-bottom[_ngcontent-%COMP%]   .footer-credit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#f56565;animation:_ngcontent-%COMP%_heartBeat 1.5s ease-in-out infinite}@media(max-width:576px){.footer-bottom[_ngcontent-%COMP%]{flex-direction:column;text-align:center}.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%}}@keyframes _ngcontent-%COMP%_heartBeat{0%,to{transform:scale(1)}25%{transform:scale(1.2)}50%{transform:scale(1)}}.scroll-to-top[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:30px;width:50px;height:50px;background:linear-gradient(135deg,#6aa84f,#5a9440);color:#fff;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px #6aa84f66;opacity:0;visibility:hidden;transform:translateY(20px);transition:all .3s ease;z-index:999;font-size:1.2rem}.scroll-to-top.visible[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:translateY(0)}.scroll-to-top[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#5a9440,#4a7d33);transform:translateY(-3px);box-shadow:0 8px 25px #6aa84f80}.scroll-to-top[_ngcontent-%COMP%]:active{transform:translateY(-1px)}.scroll-to-top[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_bounceUp 2s ease-in-out infinite}@media(max-width:768px){.scroll-to-top[_ngcontent-%COMP%]{width:45px;height:45px;bottom:20px;right:20px;font-size:1rem}}@keyframes _ngcontent-%COMP%_bounceUp{0%,to{transform:translateY(0)}50%{transform:translateY(-5px)}}@media(max-width:768px){.footer-modern[_ngcontent-%COMP%]{padding:40px 0 20px;margin-top:60px}.footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]{height:40px}.footer-brand[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.3rem}.footer-tagline[_ngcontent-%COMP%], .newsletter-text[_ngcontent-%COMP%]{font-size:.9rem}}']})};var F0=class a{constructor(t,l,i,h,e,r){this.renderer=t;this.router=l;this.document=i;this.platformId=h;this.element=e;this.location=r}navbarr;isProductPage=!1;ngOnInit(){if(!E(this.platformId))return;let t=this.element.nativeElement.children[0].children[0],l=()=>{if(this.router.events.pipe(x0(h=>h instanceof C0)).subscribe(h=>{let e=h.urlAfterRedirects.toLowerCase();if(this.isProductPage=e.includes("/product"),this.isProductPage){t.classList.remove("navbar-transparent");return}else window.pageYOffset<150?t.classList.add("navbar-transparent"):t.classList.remove("navbar-transparent")}),this.isProductPage){t.classList.remove("navbar-transparent");return}window.pageYOffset<150?t.classList.add("navbar-transparent"):t.classList.remove("navbar-transparent")};l(),this.renderer.listen("window","scroll",()=>{l()}),this.renderer.listen("window","popstate",()=>{l()})}removeFooter(){var t=this.location.prepareExternalUrl(this.location.path());return t=t.slice(1),!(t==="signup"||t==="nucleoicons")}static \u0275fac=function(l){return new(l||a)(L(D1),L(A0),L(y1),L(M0),L(n0),L(H0))};static \u0275cmp=$({type:a,selectors:[["app-root"]],viewQuery:function(l,i){if(l&1&&_1(r0,5),l&2){let h;O1(h=T1())&&(i.navbarr=h.first)}},standalone:!1,decls:10,vars:0,consts:[["id","main-content"]],template:function(l,i){l&1&&(x(0,"app-navbar"),w(1,"main",0),x(2,"router-outlet"),p(),w(3,"footer"),x(4,"app-footer"),p(),w(5,"noscript")(6,"h1"),b(7,"Riya Orangery \u2013 Indoor Plants & Succulents"),p(),w(8,"p"),b(9," Riya Orangery offers healthy indoor plants, succulents, cactus, and expert plant care tips for homes and offices. "),p()())},dependencies:[J1,r0,B0],encapsulation:2})};function i1(a,t){(t==null||t>a.length)&&(t=a.length);for(var l=0,i=Array(t);l<t;l++)i[l]=a[l];return i}function h3(a){if(Array.isArray(a))return a}function e3(a){if(Array.isArray(a))return i1(a)}function r3(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function e5(a,t){for(var l=0;l<t.length;l++){var i=t[l];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,O5(i.key),i)}}function s3(a,t,l){return t&&e5(a.prototype,t),l&&e5(a,l),Object.defineProperty(a,"prototype",{writable:!1}),a}function S0(a,t){var l=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!l){if(Array.isArray(a)||(l=u1(a))||t&&a&&typeof a.length=="number"){l&&(a=l);var i=0,h=function(){};return{s:h,n:function(){return i>=a.length?{done:!0}:{done:!1,value:a[i++]}},e:function(o){throw o},f:h}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var e,r=!0,s=!1;return{s:function(){l=l.call(a)},n:function(){var o=l.next();return r=o.done,o},e:function(o){s=!0,e=o},f:function(){try{r||l.return==null||l.return()}finally{if(s)throw e}}}}function f(a,t,l){return(t=O5(t))in a?Object.defineProperty(a,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[t]=l,a}function o3(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function v3(a,t){var l=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(l!=null){var i,h,e,r,s=[],o=!0,c=!1;try{if(e=(l=l.call(a)).next,t===0){if(Object(l)!==l)return;o=!1}else for(;!(o=(i=e.call(l)).done)&&(s.push(i.value),s.length!==t);o=!0);}catch(d){c=!0,h=d}finally{try{if(!o&&l.return!=null&&(r=l.return(),Object(r)!==r))return}finally{if(c)throw h}}return s}}function c3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function r5(a,t){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);t&&(i=i.filter(function(h){return Object.getOwnPropertyDescriptor(a,h).enumerable})),l.push.apply(l,i)}return l}function v(a){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?arguments[t]:{};t%2?r5(Object(l),!0).forEach(function(i){f(a,i,l[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):r5(Object(l)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(l,i))})}return a}function q0(a,t){return h3(a)||v3(a,t)||u1(a,t)||c3()}function _(a){return e3(a)||o3(a)||u1(a)||n3()}function w3(a,t){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var i=l.call(a,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function O5(a){var t=w3(a,"string");return typeof t=="symbol"?t:t+""}function _0(a){"@babel/helpers - typeof";return _0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_0(a)}function u1(a,t){if(a){if(typeof a=="string")return i1(a,t);var l={}.toString.call(a).slice(8,-1);return l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set"?Array.from(a):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?i1(a,t):void 0}}var s5=function(){},z1={},T5={},q5=null,R5={mark:s5,measure:s5};try{typeof window<"u"&&(z1=window),typeof document<"u"&&(T5=document),typeof MutationObserver<"u"&&(q5=MutationObserver),typeof performance<"u"&&(R5=performance)}catch{}var g3=z1.navigator||{},o5=g3.userAgent,v5=o5===void 0?"":o5,Y=z1,m=T5,c5=q5,k0=R5,r7=!!Y.document,U=!!m.documentElement&&!!m.head&&typeof m.addEventListener=="function"&&typeof m.createElement=="function",j5=~v5.indexOf("MSIE")||~v5.indexOf("Trident/"),K0,d3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,p3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,U5={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},f3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},W5=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],A="classic",b0="duotone",$5="sharp",X5="sharp-duotone",G5="chisel",Y5="etch",J5="jelly",Q5="jelly-duo",K5="jelly-fill",E5="notdog",I5="notdog-duo",N5="slab",a2="slab-press",l2="thumbprint",t2="utility",i2="utility-duo",h2="utility-fill",e2="whiteboard",b3="Classic",u3="Duotone",z3="Sharp",x3="Sharp Duotone",M3="Chisel",m3="Etch",V3="Jelly",H3="Jelly Duo",C3="Jelly Fill",A3="Notdog",Z3="Notdog Duo",L3="Slab",B3="Slab Press",F3="Thumbprint",k3="Utility",y3="Utility Duo",S3="Utility Fill",P3="Whiteboard",r2=[A,b0,$5,X5,G5,Y5,J5,Q5,K5,E5,I5,N5,a2,l2,t2,i2,h2,e2],s7=(K0={},f(f(f(f(f(f(f(f(f(f(K0,A,b3),b0,u3),$5,z3),X5,x3),G5,M3),Y5,m3),J5,V3),Q5,H3),K5,C3),E5,A3),f(f(f(f(f(f(f(f(K0,I5,Z3),N5,L3),a2,B3),l2,F3),t2,k3),i2,y3),h2,S3),e2,P3)),D3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},_3={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},O3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),T3={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},s2=["fak","fa-kit","fakd","fa-kit-duotone"],n5={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},q3=["kit"],R3="kit",j3="kit-duotone",U3="Kit",W3="Kit Duotone",o7=f(f({},R3,U3),j3,W3),$3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},X3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},G3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},w5={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},E0,y0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Y3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],J3="classic",Q3="duotone",K3="sharp",E3="sharp-duotone",I3="chisel",N3="etch",a6="jelly",l6="jelly-duo",t6="jelly-fill",i6="notdog",h6="notdog-duo",e6="slab",r6="slab-press",s6="thumbprint",o6="utility",v6="utility-duo",c6="utility-fill",n6="whiteboard",w6="Classic",g6="Duotone",d6="Sharp",p6="Sharp Duotone",f6="Chisel",b6="Etch",u6="Jelly",z6="Jelly Duo",x6="Jelly Fill",M6="Notdog",m6="Notdog Duo",V6="Slab",H6="Slab Press",C6="Thumbprint",A6="Utility",Z6="Utility Duo",L6="Utility Fill",B6="Whiteboard",v7=(E0={},f(f(f(f(f(f(f(f(f(f(E0,J3,w6),Q3,g6),K3,d6),E3,p6),I3,f6),N3,b6),a6,u6),l6,z6),t6,x6),i6,M6),f(f(f(f(f(f(f(f(E0,h6,m6),e6,V6),r6,H6),s6,C6),o6,A6),v6,Z6),c6,L6),n6,B6)),F6="kit",k6="kit-duotone",y6="Kit",S6="Kit Duotone",c7=f(f({},F6,y6),k6,S6),P6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},D6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},h1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},_6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],o2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Y3,_6),O6=["solid","regular","light","thin","duotone","brands","semibold"],v2=[1,2,3,4,5,6,7,8,9,10],T6=v2.concat([11,12,13,14,15,16,17,18,19,20]),q6=["aw","fw","pull-left","pull-right"],R6=[].concat(_(Object.keys(D6)),O6,q6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",y0.GROUP,y0.SWAP_OPACITY,y0.PRIMARY,y0.SECONDARY]).concat(v2.map(function(a){return"".concat(a,"x")})).concat(T6.map(function(a){return"w-".concat(a)})),j6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},R="___FONT_AWESOME___",e1=16,c2="fa",n2="svg-inline--fa",N="data-fa-i2svg",r1="data-fa-pseudo-element",U6="data-fa-pseudo-element-pending",x1="data-prefix",M1="data-icon",g5="fontawesome-i2svg",W6="async",$6=["HTML","HEAD","STYLE","SCRIPT"],w2=["::before","::after",":before",":after"],g2=(function(){try{return!0}catch{return!1}})();function u0(a){return new Proxy(a,{get:function(l,i){return i in l?l[i]:l[A]}})}var d2=v({},U5);d2[A]=v(v(v(v({},{"fa-duotone":"duotone"}),U5[A]),n5.kit),n5["kit-duotone"]);var X6=u0(d2),s1=v({},T3);s1[A]=v(v(v(v({},{duotone:"fad"}),s1[A]),w5.kit),w5["kit-duotone"]);var d5=u0(s1),o1=v({},h1);o1[A]=v(v({},o1[A]),G3.kit);var m1=u0(o1),v1=v({},P6);v1[A]=v(v({},v1[A]),$3.kit);var n7=u0(v1),G6=d3,p2="fa-layers-text",Y6=p3,J6=v({},D3),w7=u0(J6),Q6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],I0=f3,K6=[].concat(_(q3),_(R6)),d0=Y.FontAwesomeConfig||{};function E6(a){var t=m.querySelector("script["+a+"]");if(t)return t.getAttribute(a)}function I6(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}m&&typeof m.querySelector=="function"&&(p5=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],p5.forEach(function(a){var t=q0(a,2),l=t[0],i=t[1],h=I6(E6(l));h!=null&&(d0[i]=h)}));var p5,f2={styleDefault:"solid",familyDefault:A,cssPrefix:c2,replacementClass:n2,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};d0.familyPrefix&&(d0.cssPrefix=d0.familyPrefix);var v0=v(v({},f2),d0);v0.autoReplaceSvg||(v0.observeMutations=!1);var g={};Object.keys(f2).forEach(function(a){Object.defineProperty(g,a,{enumerable:!0,set:function(l){v0[a]=l,p0.forEach(function(i){return i(g)})},get:function(){return v0[a]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(t){v0.cssPrefix=t,p0.forEach(function(l){return l(g)})},get:function(){return v0.cssPrefix}});Y.FontAwesomeConfig=g;var p0=[];function N6(a){return p0.push(a),function(){p0.splice(p0.indexOf(a),1)}}var G=e1,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function a4(a){if(!(!a||!U)){var t=m.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=a;for(var l=m.head.childNodes,i=null,h=l.length-1;h>-1;h--){var e=l[h],r=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(i=e)}return m.head.insertBefore(t,i),a}}var l4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function f5(){for(var a=12,t="";a-- >0;)t+=l4[Math.random()*62|0];return t}function c0(a){for(var t=[],l=(a||[]).length>>>0;l--;)t[l]=a[l];return t}function V1(a){return a.classList?c0(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(t){return t})}function b2(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t4(a){return Object.keys(a||{}).reduce(function(t,l){return t+"".concat(l,'="').concat(b2(a[l]),'" ')},"").trim()}function R0(a){return Object.keys(a||{}).reduce(function(t,l){return t+"".concat(l,": ").concat(a[l].trim(),";")},"")}function H1(a){return a.size!==O.size||a.x!==O.x||a.y!==O.y||a.rotate!==O.rotate||a.flipX||a.flipY}function i4(a){var t=a.transform,l=a.containerWidth,i=a.iconWidth,h={transform:"translate(".concat(l/2," 256)")},e="translate(".concat(t.x*32,", ").concat(t.y*32,") "),r="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),o={transform:"".concat(e," ").concat(r," ").concat(s)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:h,inner:o,path:c}}function h4(a){var t=a.transform,l=a.width,i=l===void 0?e1:l,h=a.height,e=h===void 0?e1:h,r=a.startCentered,s=r===void 0?!1:r,o="";return s&&j5?o+="translate(".concat(t.x/G-i/2,"em, ").concat(t.y/G-e/2,"em) "):s?o+="translate(calc(-50% + ".concat(t.x/G,"em), calc(-50% + ").concat(t.y/G,"em)) "):o+="translate(".concat(t.x/G,"em, ").concat(t.y/G,"em) "),o+="scale(".concat(t.size/G*(t.flipX?-1:1),", ").concat(t.size/G*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var e4=`:root, :host {
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
}`;function u2(){var a=c2,t=n2,l=g.cssPrefix,i=g.replacementClass,h=e4;if(l!==a||i!==t){var e=new RegExp("\\.".concat(a,"\\-"),"g"),r=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");h=h.replace(e,".".concat(l,"-")).replace(r,"--".concat(l,"-")).replace(s,".".concat(i))}return h}var b5=!1;function N0(){g.autoAddCss&&!b5&&(a4(u2()),b5=!0)}var r4={mixout:function(){return{dom:{css:u2,insertCss:N0}}},hooks:function(){return{beforeDOMElementCreation:function(){N0()},beforeI2svg:function(){N0()}}}},j=Y||{};j[R]||(j[R]={});j[R].styles||(j[R].styles={});j[R].hooks||(j[R].hooks={});j[R].shims||(j[R].shims=[]);var D=j[R],z2=[],x2=function(){m.removeEventListener("DOMContentLoaded",x2),O0=1,z2.map(function(t){return t()})},O0=!1;U&&(O0=(m.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(m.readyState),O0||m.addEventListener("DOMContentLoaded",x2));function s4(a){U&&(O0?setTimeout(a,0):z2.push(a))}function z0(a){var t=a.tag,l=a.attributes,i=l===void 0?{}:l,h=a.children,e=h===void 0?[]:h;return typeof a=="string"?b2(a):"<".concat(t," ").concat(t4(i),">").concat(e.map(z0).join(""),"</").concat(t,">")}function u5(a,t,l){if(a&&a[t]&&a[t][l])return{prefix:t,iconName:l,icon:a[t][l]}}var o4=function(t,l){return function(i,h,e,r){return t.call(l,i,h,e,r)}},a1=function(t,l,i,h){var e=Object.keys(t),r=e.length,s=h!==void 0?o4(l,h):l,o,c,d;for(i===void 0?(o=1,d=t[e[0]]):(o=0,d=i);o<r;o++)c=e[o],d=s(d,t[c],c,t);return d};function M2(a){return _(a).length!==1?null:a.codePointAt(0).toString(16)}function z5(a){return Object.keys(a).reduce(function(t,l){var i=a[l],h=!!i.icon;return h?t[i.iconName]=i.icon:t[l]=i,t},{})}function c1(a,t){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=l.skipHooks,h=i===void 0?!1:i,e=z5(t);typeof D.hooks.addPack=="function"&&!h?D.hooks.addPack(a,z5(t)):D.styles[a]=v(v({},D.styles[a]||{}),e),a==="fas"&&c1("fa",t)}var f0=D.styles,v4=D.shims,m2=Object.keys(m1),c4=m2.reduce(function(a,t){return a[t]=Object.keys(m1[t]),a},{}),C1=null,V2={},H2={},C2={},A2={},Z2={};function n4(a){return~K6.indexOf(a)}function w4(a,t){var l=t.split("-"),i=l[0],h=l.slice(1).join("-");return i===a&&h!==""&&!n4(h)?h:null}var L2=function(){var t=function(e){return a1(f0,function(r,s,o){return r[o]=a1(s,e,{}),r},{})};V2=t(function(h,e,r){if(e[3]&&(h[e[3]]=r),e[2]){var s=e[2].filter(function(o){return typeof o=="number"});s.forEach(function(o){h[o.toString(16)]=r})}return h}),H2=t(function(h,e,r){if(h[r]=r,e[2]){var s=e[2].filter(function(o){return typeof o=="string"});s.forEach(function(o){h[o]=r})}return h}),Z2=t(function(h,e,r){var s=e[2];return h[r]=r,s.forEach(function(o){h[o]=r}),h});var l="far"in f0||g.autoFetchSvg,i=a1(v4,function(h,e){var r=e[0],s=e[1],o=e[2];return s==="far"&&!l&&(s="fas"),typeof r=="string"&&(h.names[r]={prefix:s,iconName:o}),typeof r=="number"&&(h.unicodes[r.toString(16)]={prefix:s,iconName:o}),h},{names:{},unicodes:{}});C2=i.names,A2=i.unicodes,C1=j0(g.styleDefault,{family:g.familyDefault})};N6(function(a){C1=j0(a.styleDefault,{family:g.familyDefault})});L2();function A1(a,t){return(V2[a]||{})[t]}function g4(a,t){return(H2[a]||{})[t]}function I(a,t){return(Z2[a]||{})[t]}function B2(a){return C2[a]||{prefix:null,iconName:null}}function d4(a){var t=A2[a],l=A1("fas",a);return t||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function J(){return C1}var F2=function(){return{prefix:null,iconName:null,rest:[]}};function p4(a){var t=A,l=m2.reduce(function(i,h){return i[h]="".concat(g.cssPrefix,"-").concat(h),i},{});return r2.forEach(function(i){(a.includes(l[i])||a.some(function(h){return c4[i].includes(h)}))&&(t=i)}),t}function j0(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=t.family,i=l===void 0?A:l,h=X6[i][a];if(i===b0&&!a)return"fad";var e=d5[i][a]||d5[i][h],r=a in D.styles?a:null,s=e||r||null;return s}function f4(a){var t=[],l=null;return a.forEach(function(i){var h=w4(g.cssPrefix,i);h?l=h:i&&t.push(i)}),{iconName:l,rest:t}}function x5(a){return a.sort().filter(function(t,l,i){return i.indexOf(t)===l})}var M5=o2.concat(s2);function U0(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=t.skipLookups,i=l===void 0?!1:l,h=null,e=x5(a.filter(function(u){return M5.includes(u)})),r=x5(a.filter(function(u){return!M5.includes(u)})),s=e.filter(function(u){return h=u,!W5.includes(u)}),o=q0(s,1),c=o[0],d=c===void 0?null:c,n=p4(e),z=v(v({},f4(r)),{},{prefix:j0(d,{family:n})});return v(v(v({},z),x4({values:a,family:n,styles:f0,config:g,canonical:z,givenPrefix:h})),b4(i,h,z))}function b4(a,t,l){var i=l.prefix,h=l.iconName;if(a||!i||!h)return{prefix:i,iconName:h};var e=t==="fa"?B2(h):{},r=I(i,h);return h=e.iconName||r||h,i=e.prefix||i,i==="far"&&!f0.far&&f0.fas&&!g.autoFetchSvg&&(i="fas"),{prefix:i,iconName:h}}var u4=r2.filter(function(a){return a!==A||a!==b0}),z4=Object.keys(h1).filter(function(a){return a!==A}).map(function(a){return Object.keys(h1[a])}).flat();function x4(a){var t=a.values,l=a.family,i=a.canonical,h=a.givenPrefix,e=h===void 0?"":h,r=a.styles,s=r===void 0?{}:r,o=a.config,c=o===void 0?{}:o,d=l===b0,n=t.includes("fa-duotone")||t.includes("fad"),z=c.familyDefault==="duotone",u=i.prefix==="fad"||i.prefix==="fa-duotone";if(!d&&(n||z||u)&&(i.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(i.prefix="fab"),!i.prefix&&u4.includes(l)){var H=Object.keys(s).find(function(Z){return z4.includes(Z)});if(H||c.autoFetchSvg){var V=O3.get(l).defaultShortPrefixId;i.prefix=V,i.iconName=I(i.prefix,i.iconName)||i.iconName}}return(i.prefix==="fa"||e==="fa")&&(i.prefix=J()||"fas"),i}var M4=(function(){function a(){r3(this,a),this.definitions={}}return s3(a,[{key:"add",value:function(){for(var l=this,i=arguments.length,h=new Array(i),e=0;e<i;e++)h[e]=arguments[e];var r=h.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(s){l.definitions[s]=v(v({},l.definitions[s]||{}),r[s]),c1(s,r[s]);var o=m1[A][s];o&&c1(o,r[s]),L2()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,i){var h=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(h).map(function(e){var r=h[e],s=r.prefix,o=r.iconName,c=r.icon,d=c[2];l[s]||(l[s]={}),d.length>0&&d.forEach(function(n){typeof n=="string"&&(l[s][n]=c)}),l[s][o]=c}),l}}])})(),m5=[],s0={},o0={},m4=Object.keys(o0);function V4(a,t){var l=t.mixoutsTo;return m5=a,s0={},Object.keys(o0).forEach(function(i){m4.indexOf(i)===-1&&delete o0[i]}),m5.forEach(function(i){var h=i.mixout?i.mixout():{};if(Object.keys(h).forEach(function(r){typeof h[r]=="function"&&(l[r]=h[r]),_0(h[r])==="object"&&Object.keys(h[r]).forEach(function(s){l[r]||(l[r]={}),l[r][s]=h[r][s]})}),i.hooks){var e=i.hooks();Object.keys(e).forEach(function(r){s0[r]||(s0[r]=[]),s0[r].push(e[r])})}i.provides&&i.provides(o0)}),l}function n1(a,t){for(var l=arguments.length,i=new Array(l>2?l-2:0),h=2;h<l;h++)i[h-2]=arguments[h];var e=s0[a]||[];return e.forEach(function(r){t=r.apply(null,[t].concat(i))}),t}function a0(a){for(var t=arguments.length,l=new Array(t>1?t-1:0),i=1;i<t;i++)l[i-1]=arguments[i];var h=s0[a]||[];h.forEach(function(e){e.apply(null,l)})}function Q(){var a=arguments[0],t=Array.prototype.slice.call(arguments,1);return o0[a]?o0[a].apply(null,t):void 0}function w1(a){a.prefix==="fa"&&(a.prefix="fas");var t=a.iconName,l=a.prefix||J();if(t)return t=I(l,t)||t,u5(k2.definitions,l,t)||u5(D.styles,l,t)}var k2=new M4,H4=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,a0("noAuto")},C4={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(a0("beforeI2svg",t),Q("pseudoElements2svg",t),Q("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=t.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,s4(function(){Z4({autoReplaceSvgRoot:l}),a0("watch",t)})}},A4={icon:function(t){if(t===null)return null;if(_0(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:I(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var l=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],i=j0(t[0]);return{prefix:i,iconName:I(i,l)||l}}if(typeof t=="string"&&(t.indexOf("".concat(g.cssPrefix,"-"))>-1||t.match(G6))){var h=U0(t.split(" "),{skipLookups:!0});return{prefix:h.prefix||J(),iconName:I(h.prefix,h.iconName)||h.iconName}}if(typeof t=="string"){var e=J();return{prefix:e,iconName:I(e,t)||t}}}},y={noAuto:H4,config:g,dom:C4,parse:A4,library:k2,findIconDefinition:w1,toHtml:z0},Z4=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=t.autoReplaceSvgRoot,i=l===void 0?m:l;(Object.keys(D.styles).length>0||g.autoFetchSvg)&&U&&g.autoReplaceSvg&&y.dom.i2svg({node:i})};function W0(a,t){return Object.defineProperty(a,"abstract",{get:t}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(i){return z0(i)})}}),Object.defineProperty(a,"node",{get:function(){if(U){var i=m.createElement("div");return i.innerHTML=a.html,i.children}}}),a}function L4(a){var t=a.children,l=a.main,i=a.mask,h=a.attributes,e=a.styles,r=a.transform;if(H1(r)&&l.found&&!i.found){var s=l.width,o=l.height,c={x:s/o/2,y:.5};h.style=R0(v(v({},e),{},{"transform-origin":"".concat(c.x+r.x/16,"em ").concat(c.y+r.y/16,"em")}))}return[{tag:"svg",attributes:h,children:t}]}function B4(a){var t=a.prefix,l=a.iconName,i=a.children,h=a.attributes,e=a.symbol,r=e===!0?"".concat(t,"-").concat(g.cssPrefix,"-").concat(l):e;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},h),{},{id:r}),children:i}]}]}function F4(a){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(l){return l in a})}function Z1(a){var t=a.icons,l=t.main,i=t.mask,h=a.prefix,e=a.iconName,r=a.transform,s=a.symbol,o=a.maskId,c=a.extra,d=a.watchable,n=d===void 0?!1:d,z=i.found?i:l,u=z.width,H=z.height,V=[g.replacementClass,e?"".concat(g.cssPrefix,"-").concat(e):""].filter(function(T){return c.classes.indexOf(T)===-1}).filter(function(T){return T!==""||!!T}).concat(c.classes).join(" "),Z={children:[],attributes:v(v({},c.attributes),{},{"data-prefix":h,"data-icon":e,class:V,role:c.attributes.role||"img",viewBox:"0 0 ".concat(u," ").concat(H)})};!F4(c.attributes)&&!c.attributes["aria-hidden"]&&(Z.attributes["aria-hidden"]="true"),n&&(Z.attributes[N]="");var C=v(v({},Z),{},{prefix:h,iconName:e,main:l,mask:i,maskId:o,transform:r,symbol:s,styles:v({},c.styles)}),F=i.found&&l.found?Q("generateAbstractMask",C)||{children:[],attributes:{}}:Q("generateAbstractIcon",C)||{children:[],attributes:{}},S=F.children,l0=F.attributes;return C.children=S,C.attributes=l0,s?B4(C):L4(C)}function V5(a){var t=a.content,l=a.width,i=a.height,h=a.transform,e=a.extra,r=a.watchable,s=r===void 0?!1:r,o=v(v({},e.attributes),{},{class:e.classes.join(" ")});s&&(o[N]="");var c=v({},e.styles);H1(h)&&(c.transform=h4({transform:h,startCentered:!0,width:l,height:i}),c["-webkit-transform"]=c.transform);var d=R0(c);d.length>0&&(o.style=d);var n=[];return n.push({tag:"span",attributes:o,children:[t]}),n}function k4(a){var t=a.content,l=a.extra,i=v(v({},l.attributes),{},{class:l.classes.join(" ")}),h=R0(l.styles);h.length>0&&(i.style=h);var e=[];return e.push({tag:"span",attributes:i,children:[t]}),e}var l1=D.styles;function g1(a){var t=a[0],l=a[1],i=a.slice(4),h=q0(i,1),e=h[0],r=null;return Array.isArray(e)?r={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(I0.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(I0.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(I0.PRIMARY),fill:"currentColor",d:e[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:t,height:l,icon:r}}var y4={found:!1,width:512,height:512};function S4(a,t){!g2&&!g.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(t,'" is missing.'))}function d1(a,t){var l=t;return t==="fa"&&g.styleDefault!==null&&(t=J()),new Promise(function(i,h){if(l==="fa"){var e=B2(a)||{};a=e.iconName||a,t=e.prefix||t}if(a&&t&&l1[t]&&l1[t][a]){var r=l1[t][a];return i(g1(r))}S4(a,t),i(v(v({},y4),{},{icon:g.showMissingIcons&&a?Q("missingIconAbstract")||{}:{}}))})}var H5=function(){},p1=g.measurePerformance&&k0&&k0.mark&&k0.measure?k0:{mark:H5,measure:H5},g0='FA "7.1.0"',P4=function(t){return p1.mark("".concat(g0," ").concat(t," begins")),function(){return y2(t)}},y2=function(t){p1.mark("".concat(g0," ").concat(t," ends")),p1.measure("".concat(g0," ").concat(t),"".concat(g0," ").concat(t," begins"),"".concat(g0," ").concat(t," ends"))},L1={begin:P4,end:y2},P0=function(){};function C5(a){var t=a.getAttribute?a.getAttribute(N):null;return typeof t=="string"}function D4(a){var t=a.getAttribute?a.getAttribute(x1):null,l=a.getAttribute?a.getAttribute(M1):null;return t&&l}function _4(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(g.replacementClass)}function O4(){if(g.autoReplaceSvg===!0)return D0.replace;var a=D0[g.autoReplaceSvg];return a||D0.replace}function T4(a){return m.createElementNS("http://www.w3.org/2000/svg",a)}function q4(a){return m.createElement(a)}function S2(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=t.ceFn,i=l===void 0?a.tag==="svg"?T4:q4:l;if(typeof a=="string")return m.createTextNode(a);var h=i(a.tag);Object.keys(a.attributes||[]).forEach(function(r){h.setAttribute(r,a.attributes[r])});var e=a.children||[];return e.forEach(function(r){h.appendChild(S2(r,{ceFn:i}))}),h}function R4(a){var t=" ".concat(a.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var D0={replace:function(t){var l=t[0];if(l.parentNode)if(t[1].forEach(function(h){l.parentNode.insertBefore(S2(h),l)}),l.getAttribute(N)===null&&g.keepOriginalSource){var i=m.createComment(R4(l));l.parentNode.replaceChild(i,l)}else l.remove()},nest:function(t){var l=t[0],i=t[1];if(~V1(l).indexOf(g.replacementClass))return D0.replace(t);var h=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var e=i[0].attributes.class.split(" ").reduce(function(s,o){return o===g.replacementClass||o.match(h)?s.toSvg.push(o):s.toNode.push(o),s},{toNode:[],toSvg:[]});i[0].attributes.class=e.toSvg.join(" "),e.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",e.toNode.join(" "))}var r=i.map(function(s){return z0(s)}).join(`
`);l.setAttribute(N,""),l.innerHTML=r}};function A5(a){a()}function P2(a,t){var l=typeof t=="function"?t:P0;if(a.length===0)l();else{var i=A5;g.mutateApproach===W6&&(i=Y.requestAnimationFrame||A5),i(function(){var h=O4(),e=L1.begin("mutate");a.map(h),e(),l()})}}var B1=!1;function D2(){B1=!0}function f1(){B1=!1}var T0=null;function Z5(a){if(c5&&g.observeMutations){var t=a.treeCallback,l=t===void 0?P0:t,i=a.nodeCallback,h=i===void 0?P0:i,e=a.pseudoElementsCallback,r=e===void 0?P0:e,s=a.observeMutationsRoot,o=s===void 0?m:s;T0=new c5(function(c){if(!B1){var d=J();c0(c).forEach(function(n){if(n.type==="childList"&&n.addedNodes.length>0&&!C5(n.addedNodes[0])&&(g.searchPseudoElements&&r(n.target),l(n.target)),n.type==="attributes"&&n.target.parentNode&&g.searchPseudoElements&&r([n.target],!0),n.type==="attributes"&&C5(n.target)&&~Q6.indexOf(n.attributeName))if(n.attributeName==="class"&&D4(n.target)){var z=U0(V1(n.target)),u=z.prefix,H=z.iconName;n.target.setAttribute(x1,u||d),H&&n.target.setAttribute(M1,H)}else _4(n.target)&&h(n.target)})}}),U&&T0.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function j4(){T0&&T0.disconnect()}function U4(a){var t=a.getAttribute("style"),l=[];return t&&(l=t.split(";").reduce(function(i,h){var e=h.split(":"),r=e[0],s=e.slice(1);return r&&s.length>0&&(i[r]=s.join(":").trim()),i},{})),l}function W4(a){var t=a.getAttribute("data-prefix"),l=a.getAttribute("data-icon"),i=a.innerText!==void 0?a.innerText.trim():"",h=U0(V1(a));return h.prefix||(h.prefix=J()),t&&l&&(h.prefix=t,h.iconName=l),h.iconName&&h.prefix||(h.prefix&&i.length>0&&(h.iconName=g4(h.prefix,a.innerText)||A1(h.prefix,M2(a.innerText))),!h.iconName&&g.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(h.iconName=a.firstChild.data)),h}function $4(a){var t=c0(a.attributes).reduce(function(l,i){return l.name!=="class"&&l.name!=="style"&&(l[i.name]=i.value),l},{});return t}function X4(){return{iconName:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function L5(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=W4(a),i=l.iconName,h=l.prefix,e=l.rest,r=$4(a),s=n1("parseNodeAttributes",{},a),o=t.styleParser?U4(a):[];return v({iconName:i,prefix:h,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:o,attributes:r}},s)}var G4=D.styles;function _2(a){var t=g.autoReplaceSvg==="nest"?L5(a,{styleParser:!1}):L5(a);return~t.extra.classes.indexOf(p2)?Q("generateLayersText",a,t):Q("generateSvgReplacementMutation",a,t)}function Y4(){return[].concat(_(s2),_(o2))}function B5(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var l=m.documentElement.classList,i=function(n){return l.add("".concat(g5,"-").concat(n))},h=function(n){return l.remove("".concat(g5,"-").concat(n))},e=g.autoFetchSvg?Y4():W5.concat(Object.keys(G4));e.includes("fa")||e.push("fa");var r=[".".concat(p2,":not([").concat(N,"])")].concat(e.map(function(d){return".".concat(d,":not([").concat(N,"])")})).join(", ");if(r.length===0)return Promise.resolve();var s=[];try{s=c0(a.querySelectorAll(r))}catch{}if(s.length>0)i("pending"),h("complete");else return Promise.resolve();var o=L1.begin("onTree"),c=s.reduce(function(d,n){try{var z=_2(n);z&&d.push(z)}catch(u){g2||u.name==="MissingIcon"&&console.error(u)}return d},[]);return new Promise(function(d,n){Promise.all(c).then(function(z){P2(z,function(){i("active"),i("complete"),h("pending"),typeof t=="function"&&t(),o(),d()})}).catch(function(z){o(),n(z)})})}function J4(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_2(a).then(function(l){l&&P2([l],t)})}function Q4(a){return function(t){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(t||{}).icon?t:w1(t||{}),h=l.mask;return h&&(h=(h||{}).icon?h:w1(h||{})),a(i,v(v({},l),{},{mask:h}))}}var K4=function(t){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=l.transform,h=i===void 0?O:i,e=l.symbol,r=e===void 0?!1:e,s=l.mask,o=s===void 0?null:s,c=l.maskId,d=c===void 0?null:c,n=l.classes,z=n===void 0?[]:n,u=l.attributes,H=u===void 0?{}:u,V=l.styles,Z=V===void 0?{}:V;if(t){var C=t.prefix,F=t.iconName,S=t.icon;return W0(v({type:"icon"},t),function(){return a0("beforeDOMElementCreation",{iconDefinition:t,params:l}),Z1({icons:{main:g1(S),mask:o?g1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:F,transform:v(v({},O),h),symbol:r,maskId:d,extra:{attributes:H,styles:Z,classes:z}})})}},E4={mixout:function(){return{icon:Q4(K4)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=B5,l.nodeCallback=J4,l}}},provides:function(t){t.i2svg=function(l){var i=l.node,h=i===void 0?m:i,e=l.callback,r=e===void 0?function(){}:e;return B5(h,r)},t.generateSvgReplacementMutation=function(l,i){var h=i.iconName,e=i.prefix,r=i.transform,s=i.symbol,o=i.mask,c=i.maskId,d=i.extra;return new Promise(function(n,z){Promise.all([d1(h,e),o.iconName?d1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(u){var H=q0(u,2),V=H[0],Z=H[1];n([l,Z1({icons:{main:V,mask:Z},prefix:e,iconName:h,transform:r,symbol:s,maskId:c,extra:d,watchable:!0})])}).catch(z)})},t.generateAbstractIcon=function(l){var i=l.children,h=l.attributes,e=l.main,r=l.transform,s=l.styles,o=R0(s);o.length>0&&(h.style=o);var c;return H1(r)&&(c=Q("generateAbstractTransformGrouping",{main:e,transform:r,containerWidth:e.width,iconWidth:e.width})),i.push(c||e.icon),{children:i,attributes:h}}}},I4={mixout:function(){return{layer:function(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.classes,e=h===void 0?[]:h;return W0({type:"layer"},function(){a0("beforeDOMElementCreation",{assembler:l,params:i});var r=[];return l(function(s){Array.isArray(s)?s.map(function(o){r=r.concat(o.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(_(e)).join(" ")},children:r}]})}}}},N4={mixout:function(){return{counter:function(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.title,e=h===void 0?null:h,r=i.classes,s=r===void 0?[]:r,o=i.attributes,c=o===void 0?{}:o,d=i.styles,n=d===void 0?{}:d;return W0({type:"counter",content:l},function(){return a0("beforeDOMElementCreation",{content:l,params:i}),k4({content:l.toString(),title:e,extra:{attributes:c,styles:n,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(_(s))}})})}}}},aa={mixout:function(){return{text:function(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.transform,e=h===void 0?O:h,r=i.classes,s=r===void 0?[]:r,o=i.attributes,c=o===void 0?{}:o,d=i.styles,n=d===void 0?{}:d;return W0({type:"text",content:l},function(){return a0("beforeDOMElementCreation",{content:l,params:i}),V5({content:l,transform:v(v({},O),e),extra:{attributes:c,styles:n,classes:["".concat(g.cssPrefix,"-layers-text")].concat(_(s))}})})}}},provides:function(t){t.generateLayersText=function(l,i){var h=i.transform,e=i.extra,r=null,s=null;if(j5){var o=parseInt(getComputedStyle(l).fontSize,10),c=l.getBoundingClientRect();r=c.width/o,s=c.height/o}return Promise.resolve([l,V5({content:l.innerHTML,width:r,height:s,transform:h,extra:e,watchable:!0})])}}},O2=new RegExp('"',"ug"),F5=[1105920,1112319],k5=v(v(v(v({},{FontAwesome:{normal:"fas",400:"fas"}}),_3),j6),X3),b1=Object.keys(k5).reduce(function(a,t){return a[t.toLowerCase()]=k5[t],a},{}),la=Object.keys(b1).reduce(function(a,t){var l=b1[t];return a[t]=l[900]||_(Object.entries(l))[0][1],a},{});function ta(a){var t=a.replace(O2,"");return M2(_(t)[0]||"")}function ia(a){var t=a.getPropertyValue("font-feature-settings").includes("ss01"),l=a.getPropertyValue("content"),i=l.replace(O2,""),h=i.codePointAt(0),e=h>=F5[0]&&h<=F5[1],r=i.length===2?i[0]===i[1]:!1;return e||r||t}function ha(a,t){var l=a.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(t),h=isNaN(i)?"normal":i;return(b1[l]||{})[h]||la[l]}function y5(a,t){var l="".concat(U6).concat(t.replace(":","-"));return new Promise(function(i,h){if(a.getAttribute(l)!==null)return i();var e=c0(a.children),r=e.filter(function(X0){return X0.getAttribute(r1)===t})[0],s=Y.getComputedStyle(a,t),o=s.getPropertyValue("font-family"),c=o.match(Y6),d=s.getPropertyValue("font-weight"),n=s.getPropertyValue("content");if(r&&!c)return a.removeChild(r),i();if(c&&n!=="none"&&n!==""){var z=s.getPropertyValue("content"),u=ha(o,d),H=ta(z),V=c[0].startsWith("FontAwesome"),Z=ia(s),C=A1(u,H),F=C;if(V){var S=d4(H);S.iconName&&S.prefix&&(C=S.iconName,u=S.prefix)}if(C&&!Z&&(!r||r.getAttribute(x1)!==u||r.getAttribute(M1)!==F)){a.setAttribute(l,F),r&&a.removeChild(r);var l0=X4(),T=l0.extra;T.attributes[r1]=t,d1(C,u).then(function(X0){var U2=Z1(v(v({},l0),{},{icons:{main:X0,mask:F2()},prefix:u,iconName:F,extra:T,watchable:!0})),G0=m.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?a.insertBefore(G0,a.firstChild):a.appendChild(G0),G0.outerHTML=U2.map(function(W2){return z0(W2)}).join(`
`),a.removeAttribute(l),i()}).catch(h)}else i()}else i()})}function ea(a){return Promise.all([y5(a,"::before"),y5(a,"::after")])}function ra(a){return a.parentNode!==document.head&&!~$6.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(r1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var sa=function(t){return!!t&&w2.some(function(l){return t.includes(l)})},oa=function(t){if(!t)return[];var l=new Set,i=t.split(/,(?![^()]*\))/).map(function(o){return o.trim()});i=i.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(c){return c.trim()})});var h=S0(i),e;try{for(h.s();!(e=h.n()).done;){var r=e.value;if(sa(r)){var s=w2.reduce(function(o,c){return o.replace(c,"")},r);s!==""&&s!=="*"&&l.add(s)}}}catch(o){h.e(o)}finally{h.f()}return l};function S5(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(U){var l;if(t)l=a;else if(g.searchPseudoElementsFullScan)l=a.querySelectorAll("*");else{var i=new Set,h=S0(document.styleSheets),e;try{for(h.s();!(e=h.n()).done;){var r=e.value;try{var s=S0(r.cssRules),o;try{for(s.s();!(o=s.n()).done;){var c=o.value,d=oa(c.selectorText),n=S0(d),z;try{for(n.s();!(z=n.n()).done;){var u=z.value;i.add(u)}}catch(V){n.e(V)}finally{n.f()}}}catch(V){s.e(V)}finally{s.f()}}catch(V){g.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(r.href," (").concat(V.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(V){h.e(V)}finally{h.f()}if(!i.size)return;var H=Array.from(i).join(", ");try{l=a.querySelectorAll(H)}catch{}}return new Promise(function(V,Z){var C=c0(l).filter(ra).map(ea),F=L1.begin("searchPseudoElements");D2(),Promise.all(C).then(function(){F(),f1(),V()}).catch(function(){F(),f1(),Z()})})}}var va={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=S5,l}}},provides:function(t){t.pseudoElements2svg=function(l){var i=l.node,h=i===void 0?m:i;g.searchPseudoElements&&S5(h)}}},P5=!1,ca={mixout:function(){return{dom:{unwatch:function(){D2(),P5=!0}}}},hooks:function(){return{bootstrap:function(){Z5(n1("mutationObserverCallbacks",{}))},noAuto:function(){j4()},watch:function(l){var i=l.observeMutationsRoot;P5?f1():Z5(n1("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},D5=function(t){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(i,h){var e=h.toLowerCase().split("-"),r=e[0],s=e.slice(1).join("-");if(r&&s==="h")return i.flipX=!0,i;if(r&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(r){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},l)},na={mixout:function(){return{parse:{transform:function(l){return D5(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,i){var h=i.getAttribute("data-fa-transform");return h&&(l.transform=D5(h)),l}}},provides:function(t){t.generateAbstractTransformGrouping=function(l){var i=l.main,h=l.transform,e=l.containerWidth,r=l.iconWidth,s={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(h.x*32,", ").concat(h.y*32,") "),c="scale(".concat(h.size/16*(h.flipX?-1:1),", ").concat(h.size/16*(h.flipY?-1:1),") "),d="rotate(".concat(h.rotate," 0 0)"),n={transform:"".concat(o," ").concat(c," ").concat(d)},z={transform:"translate(".concat(r/2*-1," -256)")},u={outer:s,inner:n,path:z};return{tag:"g",attributes:v({},u.outer),children:[{tag:"g",attributes:v({},u.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:v(v({},i.icon.attributes),u.path)}]}]}}}},t1={x:0,y:0,width:"100%",height:"100%"};function _5(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||t)&&(a.attributes.fill="black"),a}function wa(a){return a.tag==="g"?a.children:[a]}var ga={hooks:function(){return{parseNodeAttributes:function(l,i){var h=i.getAttribute("data-fa-mask"),e=h?U0(h.split(" ").map(function(r){return r.trim()})):F2();return e.prefix||(e.prefix=J()),l.mask=e,l.maskId=i.getAttribute("data-fa-mask-id"),l}}},provides:function(t){t.generateAbstractMask=function(l){var i=l.children,h=l.attributes,e=l.main,r=l.mask,s=l.maskId,o=l.transform,c=e.width,d=e.icon,n=r.width,z=r.icon,u=i4({transform:o,containerWidth:n,iconWidth:c}),H={tag:"rect",attributes:v(v({},t1),{},{fill:"white"})},V=d.children?{children:d.children.map(_5)}:{},Z={tag:"g",attributes:v({},u.inner),children:[_5(v({tag:d.tag,attributes:v(v({},d.attributes),u.path)},V))]},C={tag:"g",attributes:v({},u.outer),children:[Z]},F="mask-".concat(s||f5()),S="clip-".concat(s||f5()),l0={tag:"mask",attributes:v(v({},t1),{},{id:F,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[H,C]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:wa(z)},l0]};return i.push(T,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(F,")")},t1)}),{children:i,attributes:h}}}},da={provides:function(t){var l=!1;Y.matchMedia&&(l=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var i=[],h={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:v(v({},h),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var r=v(v({},e),{},{attributeName:"opacity"}),s={tag:"circle",attributes:v(v({},h),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||s.children.push({tag:"animate",attributes:v(v({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},r),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:v(v({},h),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:v(v({},r),{},{values:"1;0;0;0;0;1;"})}]}),l||i.push({tag:"path",attributes:v(v({},h),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},pa={hooks:function(){return{parseNodeAttributes:function(l,i){var h=i.getAttribute("data-fa-symbol"),e=h===null?!1:h===""?!0:h;return l.symbol=e,l}}}},fa=[r4,E4,I4,N4,aa,va,ca,na,ga,da,pa];V4(fa,{mixoutsTo:y});var g7=y.noAuto,ba=y.config,d7=y.library,ua=y.dom,za=y.parse,p7=y.findIconDefinition,f7=y.toHtml,xa=y.icon,b7=y.layer,Ma=y.text,ma=y.counter;var T2=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=X({type:a});static \u0275inj=W({})}return a})();var Ca=new k1("ngx-bootstrap-icons-module-configuration");var F1=class{constructor(t){this._icons=t}};var q2=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower1" viewBox="0 0 16 16">
  <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 0-.998 1.03l.01.091c.012.077.029.176.054.296.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a4.997 4.997 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1zM2 9l.03-.002.091-.01a4.99 4.99 0 0 0 .296-.054c.241-.049.542-.122.887-.213a60.59 60.59 0 0 0 2.314-.676L5.762 8l-.144-.045a60.59 60.59 0 0 0-2.314-.676 16.705 16.705 0 0 0-.887-.213 4.99 4.99 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2zm7 5-.002-.03a5.005 5.005 0 0 0-.064-.386 16.398 16.398 0 0 0-.213-.888 60.582 60.582 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a4.996 4.996 0 0 0-.064.386L7 14a1 1 0 1 0 2 0zm-5.696-2.134.025-.017a5.001 5.001 0 0 0 .303-.248c.184-.164.408-.377.661-.629A60.614 60.614 0 0 0 5.96 9.23l.103-.111-.147.033a60.88 60.88 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5.063 5.063 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027c-.01.02-.021.048-.036.084a5.09 5.09 0 0 0-.102.283c-.078.233-.165.53-.258.875a60.62 60.62 0 0 0-.572 2.342l-.033.147.11-.102a60.848 60.848 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5.001 5.001 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196.017.025a4.996 4.996 0 0 0 .248.303c.164.184.377.408.629.661A60.597 60.597 0 0 0 6.77 5.96l.111.102-.033-.147a60.602 60.602 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5.006 5.006 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1zm9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a60.619 60.619 0 0 0-2.342-.572l-.147-.033.102.111a60.73 60.73 0 0 0 1.667 1.742c.253.252.477.465.66.629a4.946 4.946 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg>`,R2=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower2" viewBox="0 0 16 16">
  <path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4zm3-12c0 .073-.01.155-.03.247-.544.241-1.091.638-1.598 1.084A2.987 2.987 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1.117 1.117 0 0 1 5 4a3 3 0 0 1 6 0zm-.812 6.052A2.99 2.99 0 0 0 11 8a2.99 2.99 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a6.833 6.833 0 0 1-.647-.487zm-3.56.617a3.001 3.001 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084.02.091.03.174.03.247a3 3 0 1 1-6 0c0-.073.01-.155.03-.247.544-.242 1.091-.638 1.598-1.084zm-.816-4.721A2.99 2.99 0 0 0 5 8c0 .794.308 1.516.812 2.052a6.83 6.83 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
</svg>`;var j2=(()=>{class a{static pick(l,i){return{ngModule:a,providers:[{provide:F1,multi:!0,useValue:l},{provide:Ca,useValue:i}]}}}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=X({type:a}),a.\u0275inj=W({}),a})();var Aa={flower1:q2,flower2:R2},$0=class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=X({type:a,bootstrap:[F0]});static \u0275inj=W({providers:[S1(),K1(Q0),G1(X1())],imports:[$1,t5,l5,w0,L0,T2,j2.pick(Aa)]})};W1().bootstrapModule($0,{}).catch(a=>console.error(a));
