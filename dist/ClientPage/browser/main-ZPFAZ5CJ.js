import{$ as a5,A as O1,B as T1,C as V0,D as f,E as N,F as w0,G as q1,H as R1,I as j1,J as H0,K as U1,L as W1,M as $1,N as X1,O as a0,P as G1,Q as Y1,R as J1,S as Q1,T as C0,U as K1,V as E1,W as A0,X as Z0,Y as I1,Z as N1,_ as g0,a as M0,aa as l5,b as W,ba as t5,c as k1,ca as i5,d as K,da as h5,e as E,ea as e5,f as y1,g as S1,h as n0,i as m0,j as Y0,k as P1,l as M,m as _1,n as B,o as $,p as X,q as O,r as J0,s as A,t as n,u as g,v as x,w as I,x as k,y,z as D1}from"./chunk-ET4BIJ7C.js";import"./chunk-FK6H3RFT.js";import"./chunk-DAQOROHW.js";var Q0=[{path:"",loadChildren:()=>import("./chunk-TDX5XZJL.js").then(a=>a.ComponentsModule)}],L0=class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=X({type:a});static \u0275inj=W({imports:[g0.forRoot(Q0,{scrollPositionRestoration:"top",preloadingStrategy:I1,onSameUrlNavigation:"reload"}),g0]})};var J2=(a,t)=>({"navbar-scrolled":a,"navbar-product-page":t});function Q2(a,t){if(a&1){let l=I();n(0,"a",29),k("click",function(){let h=K(l).$implicit,e=y();return E(e.ChangePage(h))}),x(1,"i",9),f(2),g()}if(a&2){let l=t.$implicit;M(2),w0(" ",l," ")}}function K2(a,t){if(a&1){let l=I();n(0,"button",30),k("click",function(){K(l);let h=y();return E(h.toggleFloraList())}),x(1,"i",31),f(2),g()}if(a&2){let l=y();M(),A("ngClass",l.showAllFlora?"fa-chevron-up":"fa-chevron-down"),M(),w0(" ",l.showAllFlora?"Show less":"Show more"," ")}}function E2(a,t){if(a&1){let l=I();n(0,"button",37),k("click",function(){K(l);let h=y(2);return E(h.clearSearch())}),f(1," \xD7 "),g()}}function I2(a,t){if(a&1){let l=I();n(0,"button",41),k("click",function(){let h=K(l).$implicit,e=y(3);return E(e.goToProduct(h))}),x(1,"img",42),n(2,"div",43)(3,"span",44),f(4),g(),n(5,"span",45),f(6),g()()()}if(a&2){let l=t.$implicit;M(),A("src","./img/Plants/400/"+l.productimg[0],Y0)("alt",l.productname+" plant"),M(3),N(l.productname),M(2),N(l.productlabel)}}function N2(a,t){a&1&&(n(0,"div",46),f(1,"No results found."),g())}function a3(a,t){if(a&1&&(n(0,"div",38),O(1,I2,7,4,"button",39)(2,N2,2,0,"div",40),g()),a&2){let l=y(2);M(),A("ngForOf",l.searchResults),M(),A("ngIf",l.searchResults.length===0)}}function l3(a,t){if(a&1){let l=I();n(0,"button",41),k("click",function(){let h=K(l).$implicit,e=y(3);return E(e.goToProduct(h))}),x(1,"img",42),n(2,"div",43)(3,"span",44),f(4),g(),n(5,"span",45),f(6),g()()()}if(a&2){let l=t.$implicit;M(),A("src","./img/Plants/400/"+l.productimg[0],Y0)("alt",l.productname+" plant"),M(3),N(l.productname),M(2),N(l.productlabel)}}function t3(a,t){if(a&1&&(n(0,"div",38)(1,"div",47),f(2,"Suggested plants"),g(),O(3,l3,7,4,"button",39),g()),a&2){let l=y(2);M(3),A("ngForOf",l.suggestedResults)}}function i3(a,t){if(a&1){let l=I();n(0,"div",32)(1,"div",33)(2,"input",34),k("input",function(h){K(l);let e=y();return E(e.onSearchChange(h.target.value))}),g(),O(3,E2,2,0,"button",35),g(),O(4,a3,3,2,"div",36)(5,t3,4,1,"div",36),g()}if(a&2){let l=y();M(2),A("value",l.searchTerm),M(),A("ngIf",l.searchTerm),M(),A("ngIf",l.searchTerm),M(),A("ngIf",!l.searchTerm)}}function h3(a,t){if(a&1&&(n(0,"span",48),f(1),g()),a&2){let l=y();M(),N(l.cartItemCount)}}function e3(a,t){if(a&1&&(n(0,"span",48),f(1),g()),a&2){let l=y();M(),N(l.WishlistCount)}}var r0=class a{constructor(t,l,i,h,e,r){this.location=t;this.element=l;this.router=i;this.route=h;this.platformId=e;this.componentsService=r;this.sidebarVisible=!1,this.flora_detail=this.componentsService.getAllCategory(),this.flora_detail.splice(0,0,"All Flora"),this.flora_detail=Array.from(new Set(this.flora_detail.flatMap(s=>s.split(",").map(o=>o.trim())))),this.showAllFlora=!1}toggleButton;sidebarVisible;cartItemCount=0;WishlistCount=0;isScrolled=!1;isProductPage=!1;showSearch=!1;searchTerm="";searchResults=[];suggestedResults=[];allProducts=[];flora_detail=[];floraDefaultCount=8;showAllFlora=!1;enableColorOnScroll=!1;isMobile=!1;get floraDisplayCount(){return this.showAllFlora?this.flora_detail.length:this.floraDefaultCount}toggleFloraList(){this.showAllFlora=!this.showAllFlora}ngOnInit(){let t=this.element.nativeElement;this.toggleButton=t.getElementsByClassName("navbar-toggler")[0],this.router.events.pipe(M0(l=>l instanceof C0)).subscribe(()=>{let l=this.route.root;for(;l.firstChild;)l=l.firstChild;this.enableColorOnScroll=l.snapshot.data.colorOnScroll??!1,this.isProductPage=this.router.url.includes("/Product/")}),this.componentsService.wishlist$.subscribe(l=>{this.WishlistCount=l.length||0}),this.componentsService.cartlist$.subscribe(l=>{this.cartItemCount=l.reduce((i,h)=>i+h.productcount,0)}),this.componentsService.currentData$.subscribe(l=>{this.allProducts=l||[],this.updateSearchResults(this.searchTerm),this.updateSuggestedResults()}),this.checkScreen(),a0(this.platformId)&&(window.addEventListener("resize",()=>{this.checkScreen()}),window.addEventListener("scroll",()=>{this.isScrolled=window.scrollY>50}))}checkScreen(){a0(this.platformId)&&(this.isMobile=window.innerWidth<=768)}sidebarOpen(){if(!a0(this.platformId))return;let t=this.toggleButton,l=document.getElementsByTagName("html")[0];setTimeout(function(){t.classList.add("toggled")},500),l.classList.add("nav-open"),this.sidebarVisible=!0}sidebarClose(){if(!a0(this.platformId))return;let t=document.getElementsByTagName("html")[0];this.toggleButton.classList.remove("toggled"),this.sidebarVisible=!1,t.classList.remove("nav-open")}sidebarToggle(){this.sidebarVisible===!1?this.sidebarOpen():this.sidebarClose()}ChangePage(t){t==="All Flora"&&(t="all"),this.router.navigate(["/collection/",t])}goToWishlist(){this.sidebarToggle(),this.router.navigate(["/wishlist"])}goToCart(){this.sidebarToggle(),this.router.navigate(["/cart"])}toggleSearch(){this.showSearch=!this.showSearch,this.showSearch?this.updateSuggestedResults():this.clearSearch()}onSearchChange(t){this.searchTerm=t,this.updateSearchResults(t)}clearSearch(){this.searchTerm="",this.searchResults=[]}updateSearchResults(t){let l=(t||"").trim().toLowerCase();if(!l){this.searchResults=[];return}this.searchResults=this.allProducts.filter(i=>{let h=i.productname?.toLowerCase()||"",e=i.productlabel?.toLowerCase()||"",r=i.productsciname?.toLowerCase()||"",s=i.shortDescription?.toLowerCase()||"";return h.includes(l)||e.includes(l)||r.includes(l)||s.includes(l)}).slice(0,8)}updateSuggestedResults(){if(!this.allProducts.length){this.suggestedResults=[];return}let t=[...this.allProducts].sort(()=>.5-Math.random());this.suggestedResults=t.slice(0,3)}goToProduct(t){this.sidebarToggle(),this.showSearch=!1,this.clearSearch(),this.router.navigate(["/Product",t.productname])}static \u0275fac=function(l){return new(l||a)(B(H0),B(n0),B(A0),B(K1),B(m0),B(a5))};static \u0275cmp=$({type:a,selectors:[["app-navbar"]],standalone:!1,decls:43,vars:16,consts:[[1,"navbar","navbar-expand-lg","fixed-top","navbar-modern",3,"ngClass"],[1,"container"],[1,"navbar-translate"],[1,"navbar-left-group"],["routerLink","/",1,"navbar-brand-wrapper"],["src","img/riyaorangery_nobg.png","alt","Riya Orangery logo \u2013 Indoor plants and succulents",1,"brand-logo"],[1,"navbar-brand"],["ngbDropdown","",1,"d-inline-block","dropdown","flora-dropdown"],["id","dropdownBasic1","ngbDropdownToggle","",1,"flora-link"],[1,"fa","fa-leaf"],["ngbDropdownMenu","","aria-labelledby","dropdownBasic1",1,"dropdown-menu-modern"],["class","dropdown-item",3,"click",4,"ngFor","ngForOf"],["type","button","class","dropdown-show-more",3,"click",4,"ngIf"],["type","button","data-toggle","collapse","data-target","#navbarToggler","aria-controls","navbarTogglerDemo02","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","navbar-burger",3,"click"],[1,"navbar-toggler-bar"],["id","navbarToggler",1,"navbar-collapse"],[1,"navbar-nav","ml-auto"],[1,"nav-item","search-item"],["type","button","rel","tooltip","title","Search","data-placement","bottom",1,"nav-link","nav-icon-link","search-toggle",3,"click"],[1,"icon-wrapper"],[1,"fa","fa-search"],[1,"d-lg-none","nav-label"],["class","search-dropdown",4,"ngIf"],[1,"nav-item"],["rel","tooltip","title","Cart","data-placement","bottom",1,"nav-link","nav-icon-link",3,"click"],[1,"fa","fa-shopping-cart"],["class","badge-count",4,"ngIf"],["rel","tooltip","title","Wishlist","data-placement","bottom",1,"nav-link","nav-icon-link",3,"click"],[1,"fa","fa-heart"],[1,"dropdown-item",3,"click"],["type","button",1,"dropdown-show-more",3,"click"],[1,"fa",3,"ngClass"],[1,"search-dropdown"],[1,"search-input-wrapper"],["type","text","placeholder","Search plants, categories...",1,"search-input",3,"input","value"],["class","clear-btn","type","button","aria-label","Clear search",3,"click",4,"ngIf"],["class","search-results",4,"ngIf"],["type","button","aria-label","Clear search",1,"clear-btn",3,"click"],[1,"search-results"],["class","search-result-item","type","button",3,"click",4,"ngFor","ngForOf"],["class","no-results",4,"ngIf"],["type","button",1,"search-result-item",3,"click"],[1,"result-image",3,"src","alt"],[1,"result-text"],[1,"result-name"],[1,"result-meta"],[1,"no-results"],[1,"suggested-title"],[1,"badge-count"]],template:function(l,i){l&1&&(n(0,"nav",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),x(5,"img",5),n(6,"span",6),f(7,"Riya Orangery"),g()(),n(8,"div",7)(9,"a",8),x(10,"i",9),f(11," Flora "),g(),n(12,"div",10),O(13,Q2,3,1,"a",11),R1(14,"slice"),O(15,K2,3,2,"button",12),g()()(),n(16,"button",13),k("click",function(){return i.sidebarToggle()}),x(17,"span",14)(18,"span",14)(19,"span",14),g()(),n(20,"div",15)(21,"ul",16)(22,"li",17)(23,"button",18),k("click",function(){return i.toggleSearch()}),n(24,"div",19),x(25,"i",20),g(),n(26,"span",21),f(27,"Search"),g()(),O(28,i3,6,4,"div",22),g(),n(29,"li",23)(30,"a",24),k("click",function(){return i.goToCart()}),n(31,"div",19),x(32,"i",25),O(33,h3,2,1,"span",26),g(),n(34,"span",21),f(35,"Cart"),g()()(),n(36,"li",23)(37,"a",27),k("click",function(){return i.goToWishlist()}),n(38,"div",19),x(39,"i",28),O(40,e3,2,1,"span",26),g(),n(41,"span",21),f(42,"Wishlist"),g()()()()()()()),l&2&&(A("ngClass",q1(13,J2,i.isScrolled,i.isProductPage)),J0("color-on-scroll",i.enableColorOnScroll?"500":null),M(13),A("ngForOf",j1(14,9,i.flora_detail,0,i.floraDisplayCount)),M(2),A("ngIf",i.flora_detail.length>i.floraDefaultCount),M(7),V0("open",i.showSearch),M(6),A("ngIf",i.showSearch),M(5),A("ngIf",i.cartItemCount!==0),M(7),A("ngIf",i.WishlistCount!==0))},dependencies:[U1,W1,$1,i5,t5,l5,Z0,X1],styles:[".navbar-modern[_ngcontent-%COMP%]{background:transparent;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none;padding:12px 0;transition:all .3s ease}.navbar-modern.navbar-scrolled[_ngcontent-%COMP%]{background:#fffffffa;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 6px 25px #0000001f}.navbar-modern.navbar-product-page[_ngcontent-%COMP%]{background:#fffffffa;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:0 4px 20px #00000014}.navbar-left-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;flex-wrap:nowrap}.navbar-brand-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;cursor:pointer;transition:all .3s ease}.navbar-brand-wrapper[_ngcontent-%COMP%]:hover{transform:translate(3px)}.navbar-brand-wrapper[_ngcontent-%COMP%]:hover   .navbar-brand[_ngcontent-%COMP%]{color:#6aa84f}.navbar-brand-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{height:45px;width:auto;filter:drop-shadow(0 2px 8px rgba(106,168,79,.2))}.navbar-brand-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:700;color:#fff;margin:0;transition:color .3s ease;text-shadow:0 2px 4px rgba(0,0,0,.3)}.navbar-scrolled[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%], .navbar-product-page[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#2d3748!important;text-shadow:none}.flora-dropdown[_ngcontent-%COMP%]{margin-left:0}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 20px;background:linear-gradient(135deg,#6aa84f,#5a9440);color:#fff;border-radius:50px;font-weight:600;font-size:.95rem;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 12px #6aa84f4d}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.9rem}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]   i.fa-chevron-down[_ngcontent-%COMP%]{font-size:.75rem}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#5a9440,#4a7d33);box-shadow:0 6px 16px #6aa84f66;transform:translateY(-1px)}.dropdown-menu-modern[_ngcontent-%COMP%]{border:none;border-radius:16px;box-shadow:0 10px 30px #00000026;padding:10px 0;margin-top:10px;background:#fff}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{padding:12px 24px;font-weight:500;color:#4a5568;display:flex;align-items:center;gap:12px;cursor:pointer;transition:all .2s ease}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#6aa84f;font-size:.85rem}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#f0f9f4,#e8f5e9);color:#2d3748;padding-left:28px}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{color:#5a9440}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active{background:#e8f5e9}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-show-more[_ngcontent-%COMP%]{width:calc(100% - 24px);margin:6px 12px 8px;padding:10px 12px;border:1px solid #dfe6df;background:#f8f9f6;color:#2d3748;font-size:.9rem;font-weight:600;border-radius:10px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:8px;transition:all .2s ease}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-show-more[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#6aa84f;font-size:.85rem}.dropdown-menu-modern[_ngcontent-%COMP%]   .dropdown-show-more[_ngcontent-%COMP%]:hover{border-color:#6aa84f;background:#6aa84f14}.navbar-toggler[_ngcontent-%COMP%]{border:none;padding:8px;margin-left:auto}.navbar-toggler[_ngcontent-%COMP%]:focus{outline:none;box-shadow:none}.navbar-toggler[_ngcontent-%COMP%]   .navbar-toggler-bar[_ngcontent-%COMP%]{display:block;width:26px;height:3px;background:#6aa84f;border-radius:2px;margin:5px 0;transition:all .3s ease}.navbar-toggler[_ngcontent-%COMP%]:hover   .navbar-toggler-bar[_ngcontent-%COMP%]{background:#5a9440}.navbar-nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{margin:0}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;padding:10px 16px;color:#4a5568;font-weight:500;cursor:pointer;transition:all .3s ease;border-radius:12px}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{position:relative;display:flex;align-items:center;justify-content:center}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.4rem;color:#6aa84f;transition:all .3s ease}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   .badge-count[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px;background:linear-gradient(135deg,#fc8181,#f56565);color:#fff;font-size:.7rem;font-weight:700;padding:3px 7px;border-radius:50%;min-width:20px;height:20px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px #fc818166;animation:_ngcontent-%COMP%_badgePulse 2s ease-in-out infinite}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%]{font-weight:600;color:#2d3748}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]:hover   .icon-wrapper[_ngcontent-%COMP%]{transform:scale(1.1)}.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]:hover   .icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#5a9440}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]{position:relative}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-toggle[_ngcontent-%COMP%]{background:transparent;border:none;outline:none;box-shadow:none}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-toggle[_ngcontent-%COMP%]:focus, .navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-toggle[_ngcontent-%COMP%]:focus-visible, .navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-toggle[_ngcontent-%COMP%]:active{outline:none;box-shadow:none}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]{position:absolute;right:0;top:calc(100% + 8px);width:320px;background:#fff;border-radius:16px;padding:12px;box-shadow:0 12px 30px #0000001f;z-index:1050}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]{position:relative}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{width:100%;padding:10px 36px 10px 12px;border-radius:12px;border:1px solid #e2e8f0;font-size:.9rem;outline:none;transition:border .2s ease,box-shadow .2s ease}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus{border-color:#6aa84f;box-shadow:0 0 0 3px #6aa84f33}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]{position:absolute;right:8px;top:50%;transform:translateY(-50%);border:none;background:transparent;font-size:1.2rem;color:#718096;cursor:pointer}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{margin-top:10px;display:flex;flex-direction:column;gap:8px;max-height:280px;overflow-y:auto}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .suggested-title[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#718096;padding:4px 4px 0}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:8px 10px;border-radius:12px;background:#f8fafc;border:none;text-align:left;transition:background .2s ease;cursor:pointer}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]:hover{background:#edf2f7}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .result-image[_ngcontent-%COMP%]{width:40px;height:40px;object-fit:cover;border-radius:10px}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .result-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .result-name[_ngcontent-%COMP%]{font-weight:600;color:#2d3748;line-height:1.2}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .result-meta[_ngcontent-%COMP%]{font-size:.75rem;color:#718096}.navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]{font-size:.85rem;color:#a0aec0;padding:8px 4px;text-align:center}@keyframes _ngcontent-%COMP%_badgePulse{0%,to{transform:scale(1)}50%{transform:scale(1.1)}}@media(max-width:991px){.navbar-translate[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;justify-content:space-between}.navbar-left-group[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;flex-wrap:nowrap;flex:1}.navbar-brand-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{height:32px}.navbar-brand-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:1rem}.flora-dropdown[_ngcontent-%COMP%]{margin-left:0}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]{padding:8px 14px;font-size:.85rem;white-space:nowrap}.navbar-collapse[_ngcontent-%COMP%]{background-color:#fff;border-radius:16px;margin-top:15px;padding:20px}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]{flex-direction:column;gap:10px;width:100%}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{width:100%}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]{justify-content:flex-start;width:100%;padding:12px 16px}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-icon-link[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem}.navbar-collapse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item.search-item[_ngcontent-%COMP%]   .search-dropdown[_ngcontent-%COMP%]{position:static;width:100%;margin-top:8px;background:#f8fafc;box-shadow:none}}@media(max-width:576px){.navbar-left-group[_ngcontent-%COMP%]{gap:8px}.navbar-brand-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{height:28px}.navbar-brand-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:.9rem}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]{padding:6px 10px;font-size:.75rem;gap:4px}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:.75rem}}@media(max-width:768px)and (min-width:577px){.navbar-brand-wrapper[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]{height:30px}.navbar-brand-wrapper[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:.95rem}.flora-dropdown[_ngcontent-%COMP%]   .flora-link[_ngcontent-%COMP%]{padding:7px 12px;font-size:.8rem}}"]})};var B0=class a{test=new Date;currentYear=new Date().getFullYear();showScrollTop=!1;onWindowScroll(){this.showScrollTop=window.scrollY>300}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=$({type:a,selectors:[["app-footer"]],hostBindings:function(l,i){l&1&&k("scroll",function(){return i.onWindowScroll()},P1)},standalone:!1,decls:80,vars:3,consts:[[1,"footer-modern"],[1,"container"],[1,"footer-content"],[1,"footer-column"],[1,"footer-brand"],["src","img/riyaorangery_nobg.png","alt","Riya Orangery",1,"footer-logo"],[1,"footer-tagline"],[1,"footer-social"],["href","https://www.instagram.com/__riya_orangery_/","target","_blank","rel","noopener","aria-label","Riya Orangery Instagram",1,"social-link"],[1,"fa","fa-instagram"],["href","https://wa.me/919894126648","target","_blank","rel","noopener","aria-label","WhatsApp",1,"social-link"],[1,"fa","fa-whatsapp"],[1,"footer-title"],[1,"footer-links"],["routerLink","/collection/all"],[1,"fa","fa-leaf"],["routerLink","/about-us"],[1,"fa","fa-info-circle"],["routerLink","/shipping-policy"],[1,"fa","fa-truck"],["routerLink","/refund-policy"],[1,"fa","fa-undo"],["routerLink","/privacy-policy"],[1,"fa","fa-shield"],["routerLink","/terms-conditions"],[1,"fa","fa-file-text"],[1,"footer-contact"],[1,"fa","fa-phone"],[1,"fa","fa-map-marker"],[1,"fa","fa-clock-o"],[1,"footer-dream"],[1,"newsletter"],[1,"newsletter-text"],[1,"footer-bottom"],[1,"footer-credit"],[1,"fa","fa-heart"],["aria-label","Scroll to top",1,"scroll-to-top",3,"click"],[1,"fa","fa-arrow-up"]],template:function(l,i){l&1&&(n(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),x(5,"img",5),n(6,"h4"),f(7,"Riya Orangery"),g()(),n(8,"p",6),f(9," We don't only deliver indoor plants, we deliver peace in small containers. "),g(),n(10,"div",7)(11,"a",8),x(12,"i",9),g(),n(13,"a",10),x(14,"i",11),g()()(),n(15,"div",3)(16,"h5",12),f(17,"Quick Links"),g(),n(18,"ul",13)(19,"li")(20,"a",14),x(21,"i",15),f(22," Shop"),g()(),n(23,"li")(24,"a",16),x(25,"i",17),f(26," About Us"),g()()()(),n(27,"div",3)(28,"h5",12),f(29,"Legal & Policies"),g(),n(30,"ul",13)(31,"li")(32,"a",18),x(33,"i",19),f(34," Shipping Policy"),g()(),n(35,"li")(36,"a",20),x(37,"i",21),f(38," Refund Policy"),g()(),n(39,"li")(40,"a",22),x(41,"i",23),f(42," Privacy Policy"),g()(),n(43,"li")(44,"a",24),x(45,"i",25),f(46," Terms & Conditions"),g()()()(),n(47,"div",3)(48,"h5",12),f(49,"Contact Us"),g(),n(50,"ul",26)(51,"li"),x(52,"i",27),n(53,"span"),f(54,"+91 9894126648"),g()(),n(55,"li"),x(56,"i",28),n(57,"span"),f(58,"Tamil Nadu, India"),g()(),n(59,"li"),x(60,"i",29),n(61,"span"),f(62,"Mon - Fri: 9AM - 6PM"),g()()()(),n(63,"div",3)(64,"h5",12),f(65,"Let's Create"),g(),n(66,"p",30),f(67,"The garden of your dreams"),g(),n(68,"div",31)(69,"p",32),f(70,"Stay updated with our latest plants and offers"),g()()()(),n(71,"div",33)(72,"p"),f(73),g(),n(74,"p",34),f(75,"Made with "),x(76,"i",35),f(77," for plant lovers"),g()()(),n(78,"button",36),k("click",function(){return i.scrollToTop()}),x(79,"i",37),g()()),l&2&&(M(73),w0("\xA9 ",i.currentYear," Riya Orangery. All rights reserved."),M(5),V0("visible",i.showScrollTop))},dependencies:[Z0],styles:['.footer-modern[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2d3748,#1a202c);color:#fff;padding:60px 0 20px;margin-top:80px;position:relative}.footer-modern[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#6aa84f,#5a9440,#6aa84f)}.footer-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.5fr repeat(4,1fr);gap:40px;margin-bottom:40px}@media(max-width:1200px){.footer-content[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);gap:30px}}@media(max-width:992px){.footer-content[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);gap:30px}}@media(max-width:576px){.footer-content[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:30px}}.footer-column[_ngcontent-%COMP%]   h5.footer-title[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;color:#6aa84f;margin-bottom:20px;text-transform:uppercase;letter-spacing:1px;position:relative;padding-bottom:10px}.footer-column[_ngcontent-%COMP%]   h5.footer-title[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:40px;height:3px;background:linear-gradient(90deg,#6aa84f,#5a9440);border-radius:2px}.footer-brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px;margin-bottom:15px}.footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]{height:50px;width:auto;display:block;filter:drop-shadow(0 2px 8px rgba(106,168,79,.3))}.footer-brand[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;margin:0;color:#fff}.footer-tagline[_ngcontent-%COMP%]{font-size:.95rem;color:#cbd5e0;line-height:1.6;margin-bottom:20px}.footer-social[_ngcontent-%COMP%]{display:flex;gap:12px}.footer-social[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:40px;height:40px;background:#6aa84f1a;border:2px solid rgba(106,168,79,.3);border-radius:50%;color:#6aa84f;font-size:1.1rem;transition:all .3s ease}.footer-social[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#6aa84f,#5a9440);border-color:#6aa84f;color:#fff;transform:translateY(-3px);box-shadow:0 6px 16px #6aa84f66}.footer-links[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:12px}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;color:#cbd5e0;font-size:.95rem;transition:all .3s ease}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#6aa84f;font-size:.9rem;transition:transform .3s ease}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;padding-left:5px;text-decoration:none}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:translate(3px);color:#7cbd5f}.footer-contact[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.footer-contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;gap:15px;margin-bottom:16px;color:#cbd5e0;font-size:.95rem;line-height:1.6}.footer-contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#6aa84f;font-size:1.1rem;min-width:20px;margin-top:2px}.footer-contact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1}.footer-dream[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600;color:#fff;margin-bottom:15px;line-height:1.4}.newsletter[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%]{font-size:.9rem;color:#cbd5e0;line-height:1.6;margin-bottom:15px}.footer-bottom[_ngcontent-%COMP%]{border-top:1px solid rgba(255,255,255,.1);padding-top:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:15px}.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:.9rem;color:#a0aec0}.footer-bottom[_ngcontent-%COMP%]   .footer-credit[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px}.footer-bottom[_ngcontent-%COMP%]   .footer-credit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#f56565;animation:_ngcontent-%COMP%_heartBeat 1.5s ease-in-out infinite}@media(max-width:576px){.footer-bottom[_ngcontent-%COMP%]{flex-direction:column;text-align:center}.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%}}@keyframes _ngcontent-%COMP%_heartBeat{0%,to{transform:scale(1)}25%{transform:scale(1.2)}50%{transform:scale(1)}}.scroll-to-top[_ngcontent-%COMP%]{position:fixed;bottom:30px;right:30px;width:50px;height:50px;background:linear-gradient(135deg,#6aa84f,#5a9440);color:#fff;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px #6aa84f66;opacity:0;visibility:hidden;transform:translateY(20px);transition:all .3s ease;z-index:999;font-size:1.2rem}.scroll-to-top.visible[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:translateY(0)}.scroll-to-top[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#5a9440,#4a7d33);transform:translateY(-3px);box-shadow:0 8px 25px #6aa84f80}.scroll-to-top[_ngcontent-%COMP%]:active{transform:translateY(-1px)}.scroll-to-top[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_bounceUp 2s ease-in-out infinite}@media(max-width:768px){.scroll-to-top[_ngcontent-%COMP%]{width:45px;height:45px;bottom:20px;right:20px;font-size:1rem}}@keyframes _ngcontent-%COMP%_bounceUp{0%,to{transform:translateY(0)}50%{transform:translateY(-5px)}}@media(max-width:768px){.footer-modern[_ngcontent-%COMP%]{padding:40px 0 20px;margin-top:60px}.footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]{height:40px}.footer-brand[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.3rem}.footer-tagline[_ngcontent-%COMP%], .newsletter-text[_ngcontent-%COMP%]{font-size:.9rem}}']})};var F0=class a{constructor(t,l,i,h,e,r){this.renderer=t;this.router=l;this.document=i;this.platformId=h;this.element=e;this.location=r}navbarr;isProductPage=!1;ngOnInit(){if(!a0(this.platformId))return;let t=this.element.nativeElement.children[0].children[0],l=()=>{if(this.router.events.pipe(M0(h=>h instanceof C0)).subscribe(h=>{let e=h.urlAfterRedirects.toLowerCase();if(this.isProductPage=e.includes("/product"),this.isProductPage){t.classList.remove("navbar-transparent");return}else window.pageYOffset<150?t.classList.add("navbar-transparent"):t.classList.remove("navbar-transparent")}),this.isProductPage){t.classList.remove("navbar-transparent");return}window.pageYOffset<150?t.classList.add("navbar-transparent"):t.classList.remove("navbar-transparent")};l(),this.renderer.listen("window","scroll",()=>{l()}),this.renderer.listen("window","popstate",()=>{l()})}removeFooter(){var t=this.location.prepareExternalUrl(this.location.path());return t=t.slice(1),!(t==="signup"||t==="nucleoicons")}static \u0275fac=function(l){return new(l||a)(B(_1),B(A0),B(y1),B(m0),B(n0),B(H0))};static \u0275cmp=$({type:a,selectors:[["app-root"]],viewQuery:function(l,i){if(l&1&&D1(r0,5),l&2){let h;O1(h=T1())&&(i.navbarr=h.first)}},standalone:!1,decls:10,vars:0,consts:[["id","main-content"]],template:function(l,i){l&1&&(x(0,"app-navbar"),n(1,"main",0),x(2,"router-outlet"),g(),n(3,"footer"),x(4,"app-footer"),g(),n(5,"noscript")(6,"h1"),f(7,"Riya Orangery \u2013 Indoor Plants & Succulents"),g(),n(8,"p"),f(9," Riya Orangery offers healthy indoor plants, succulents, cactus, and expert plant care tips for homes and offices. "),g()())},dependencies:[E1,r0,B0],encapsulation:2})};function i1(a,t){(t==null||t>a.length)&&(t=a.length);for(var l=0,i=Array(t);l<t;l++)i[l]=a[l];return i}function o3(a){if(Array.isArray(a))return a}function v3(a){if(Array.isArray(a))return i1(a)}function c3(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function o5(a,t){for(var l=0;l<t.length;l++){var i=t[l];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,R5(i.key),i)}}function n3(a,t,l){return t&&o5(a.prototype,t),l&&o5(a,l),Object.defineProperty(a,"prototype",{writable:!1}),a}function S0(a,t){var l=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!l){if(Array.isArray(a)||(l=u1(a))||t&&a&&typeof a.length=="number"){l&&(a=l);var i=0,h=function(){};return{s:h,n:function(){return i>=a.length?{done:!0}:{done:!1,value:a[i++]}},e:function(o){throw o},f:h}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var e,r=!0,s=!1;return{s:function(){l=l.call(a)},n:function(){var o=l.next();return r=o.done,o},e:function(o){s=!0,e=o},f:function(){try{r||l.return==null||l.return()}finally{if(s)throw e}}}}function b(a,t,l){return(t=R5(t))in a?Object.defineProperty(a,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[t]=l,a}function w3(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function g3(a,t){var l=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(l!=null){var i,h,e,r,s=[],o=!0,c=!1;try{if(e=(l=l.call(a)).next,t===0){if(Object(l)!==l)return;o=!1}else for(;!(o=(i=e.call(l)).done)&&(s.push(i.value),s.length!==t);o=!0);}catch(p){c=!0,h=p}finally{try{if(!o&&l.return!=null&&(r=l.return(),Object(r)!==r))return}finally{if(c)throw h}}return s}}function d3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v5(a,t){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);t&&(i=i.filter(function(h){return Object.getOwnPropertyDescriptor(a,h).enumerable})),l.push.apply(l,i)}return l}function v(a){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?arguments[t]:{};t%2?v5(Object(l),!0).forEach(function(i){b(a,i,l[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):v5(Object(l)).forEach(function(i){Object.defineProperty(a,i,Object.getOwnPropertyDescriptor(l,i))})}return a}function q0(a,t){return o3(a)||g3(a,t)||u1(a,t)||d3()}function D(a){return v3(a)||w3(a)||u1(a)||p3()}function f3(a,t){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var i=l.call(a,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function R5(a){var t=f3(a,"string");return typeof t=="symbol"?t:t+""}function D0(a){"@babel/helpers - typeof";return D0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D0(a)}function u1(a,t){if(a){if(typeof a=="string")return i1(a,t);var l={}.toString.call(a).slice(8,-1);return l==="Object"&&a.constructor&&(l=a.constructor.name),l==="Map"||l==="Set"?Array.from(a):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?i1(a,t):void 0}}var c5=function(){},z1={},j5={},U5=null,W5={mark:c5,measure:c5};try{typeof window<"u"&&(z1=window),typeof document<"u"&&(j5=document),typeof MutationObserver<"u"&&(U5=MutationObserver),typeof performance<"u"&&(W5=performance)}catch{}var b3=z1.navigator||{},n5=b3.userAgent,w5=n5===void 0?"":n5,Y=z1,m=j5,g5=U5,k0=W5,c7=!!Y.document,U=!!m.documentElement&&!!m.head&&typeof m.addEventListener=="function"&&typeof m.createElement=="function",$5=~w5.indexOf("MSIE")||~w5.indexOf("Trident/"),K0,u3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,z3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,X5={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},x3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},G5=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],Z="classic",u0="duotone",Y5="sharp",J5="sharp-duotone",Q5="chisel",K5="etch",E5="jelly",I5="jelly-duo",N5="jelly-fill",a2="notdog",l2="notdog-duo",t2="slab",i2="slab-press",h2="thumbprint",e2="utility",r2="utility-duo",s2="utility-fill",o2="whiteboard",M3="Classic",m3="Duotone",V3="Sharp",H3="Sharp Duotone",C3="Chisel",A3="Etch",Z3="Jelly",L3="Jelly Duo",B3="Jelly Fill",F3="Notdog",k3="Notdog Duo",y3="Slab",S3="Slab Press",P3="Thumbprint",_3="Utility",D3="Utility Duo",O3="Utility Fill",T3="Whiteboard",v2=[Z,u0,Y5,J5,Q5,K5,E5,I5,N5,a2,l2,t2,i2,h2,e2,r2,s2,o2],n7=(K0={},b(b(b(b(b(b(b(b(b(b(K0,Z,M3),u0,m3),Y5,V3),J5,H3),Q5,C3),K5,A3),E5,Z3),I5,L3),N5,B3),a2,F3),b(b(b(b(b(b(b(b(K0,l2,k3),t2,y3),i2,S3),h2,P3),e2,_3),r2,D3),s2,O3),o2,T3)),q3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},R3={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},j3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),U3={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},c2=["fak","fa-kit","fakd","fa-kit-duotone"],d5={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},W3=["kit"],$3="kit",X3="kit-duotone",G3="Kit",Y3="Kit Duotone",w7=b(b({},$3,G3),X3,Y3),J3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Q3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},K3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},p5={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},E0,y0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},E3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],I3="classic",N3="duotone",a6="sharp",l6="sharp-duotone",t6="chisel",i6="etch",h6="jelly",e6="jelly-duo",r6="jelly-fill",s6="notdog",o6="notdog-duo",v6="slab",c6="slab-press",n6="thumbprint",w6="utility",g6="utility-duo",d6="utility-fill",p6="whiteboard",f6="Classic",b6="Duotone",u6="Sharp",z6="Sharp Duotone",x6="Chisel",M6="Etch",m6="Jelly",V6="Jelly Duo",H6="Jelly Fill",C6="Notdog",A6="Notdog Duo",Z6="Slab",L6="Slab Press",B6="Thumbprint",F6="Utility",k6="Utility Duo",y6="Utility Fill",S6="Whiteboard",g7=(E0={},b(b(b(b(b(b(b(b(b(b(E0,I3,f6),N3,b6),a6,u6),l6,z6),t6,x6),i6,M6),h6,m6),e6,V6),r6,H6),s6,C6),b(b(b(b(b(b(b(b(E0,o6,A6),v6,Z6),c6,L6),n6,B6),w6,F6),g6,k6),d6,y6),p6,S6)),P6="kit",_6="kit-duotone",D6="Kit",O6="Kit Duotone",d7=b(b({},P6,D6),_6,O6),T6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},q6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},h1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},R6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],n2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(E3,R6),j6=["solid","regular","light","thin","duotone","brands","semibold"],w2=[1,2,3,4,5,6,7,8,9,10],U6=w2.concat([11,12,13,14,15,16,17,18,19,20]),W6=["aw","fw","pull-left","pull-right"],$6=[].concat(D(Object.keys(q6)),j6,W6,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",y0.GROUP,y0.SWAP_OPACITY,y0.PRIMARY,y0.SECONDARY]).concat(w2.map(function(a){return"".concat(a,"x")})).concat(U6.map(function(a){return"w-".concat(a)})),X6={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},R="___FONT_AWESOME___",e1=16,g2="fa",d2="svg-inline--fa",t0="data-fa-i2svg",r1="data-fa-pseudo-element",G6="data-fa-pseudo-element-pending",x1="data-prefix",M1="data-icon",f5="fontawesome-i2svg",Y6="async",J6=["HTML","HEAD","STYLE","SCRIPT"],p2=["::before","::after",":before",":after"],f2=(function(){try{return!0}catch{return!1}})();function z0(a){return new Proxy(a,{get:function(l,i){return i in l?l[i]:l[Z]}})}var b2=v({},X5);b2[Z]=v(v(v(v({},{"fa-duotone":"duotone"}),X5[Z]),d5.kit),d5["kit-duotone"]);var Q6=z0(b2),s1=v({},U3);s1[Z]=v(v(v(v({},{duotone:"fad"}),s1[Z]),p5.kit),p5["kit-duotone"]);var b5=z0(s1),o1=v({},h1);o1[Z]=v(v({},o1[Z]),K3.kit);var m1=z0(o1),v1=v({},T6);v1[Z]=v(v({},v1[Z]),J3.kit);var p7=z0(v1),K6=u3,u2="fa-layers-text",E6=z3,I6=v({},q3),f7=z0(I6),N6=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],I0=x3,a4=[].concat(D(W3),D($6)),p0=Y.FontAwesomeConfig||{};function l4(a){var t=m.querySelector("script["+a+"]");if(t)return t.getAttribute(a)}function t4(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}m&&typeof m.querySelector=="function"&&(u5=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],u5.forEach(function(a){var t=q0(a,2),l=t[0],i=t[1],h=t4(l4(l));h!=null&&(p0[i]=h)}));var u5,z2={styleDefault:"solid",familyDefault:Z,cssPrefix:g2,replacementClass:d2,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};p0.familyPrefix&&(p0.cssPrefix=p0.familyPrefix);var v0=v(v({},z2),p0);v0.autoReplaceSvg||(v0.observeMutations=!1);var d={};Object.keys(z2).forEach(function(a){Object.defineProperty(d,a,{enumerable:!0,set:function(l){v0[a]=l,f0.forEach(function(i){return i(d)})},get:function(){return v0[a]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(t){v0.cssPrefix=t,f0.forEach(function(l){return l(d)})},get:function(){return v0.cssPrefix}});Y.FontAwesomeConfig=d;var f0=[];function i4(a){return f0.push(a),function(){f0.splice(f0.indexOf(a),1)}}var G=e1,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function h4(a){if(!(!a||!U)){var t=m.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=a;for(var l=m.head.childNodes,i=null,h=l.length-1;h>-1;h--){var e=l[h],r=(e.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(r)>-1&&(i=e)}return m.head.insertBefore(t,i),a}}var e4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function z5(){for(var a=12,t="";a-- >0;)t+=e4[Math.random()*62|0];return t}function c0(a){for(var t=[],l=(a||[]).length>>>0;l--;)t[l]=a[l];return t}function V1(a){return a.classList?c0(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(t){return t})}function x2(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r4(a){return Object.keys(a||{}).reduce(function(t,l){return t+"".concat(l,'="').concat(x2(a[l]),'" ')},"").trim()}function R0(a){return Object.keys(a||{}).reduce(function(t,l){return t+"".concat(l,": ").concat(a[l].trim(),";")},"")}function H1(a){return a.size!==T.size||a.x!==T.x||a.y!==T.y||a.rotate!==T.rotate||a.flipX||a.flipY}function s4(a){var t=a.transform,l=a.containerWidth,i=a.iconWidth,h={transform:"translate(".concat(l/2," 256)")},e="translate(".concat(t.x*32,", ").concat(t.y*32,") "),r="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),o={transform:"".concat(e," ").concat(r," ").concat(s)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:h,inner:o,path:c}}function o4(a){var t=a.transform,l=a.width,i=l===void 0?e1:l,h=a.height,e=h===void 0?e1:h,r=a.startCentered,s=r===void 0?!1:r,o="";return s&&$5?o+="translate(".concat(t.x/G-i/2,"em, ").concat(t.y/G-e/2,"em) "):s?o+="translate(calc(-50% + ".concat(t.x/G,"em), calc(-50% + ").concat(t.y/G,"em)) "):o+="translate(".concat(t.x/G,"em, ").concat(t.y/G,"em) "),o+="scale(".concat(t.size/G*(t.flipX?-1:1),", ").concat(t.size/G*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var v4=`:root, :host {
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
}`;function M2(){var a=g2,t=d2,l=d.cssPrefix,i=d.replacementClass,h=v4;if(l!==a||i!==t){var e=new RegExp("\\.".concat(a,"\\-"),"g"),r=new RegExp("\\--".concat(a,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");h=h.replace(e,".".concat(l,"-")).replace(r,"--".concat(l,"-")).replace(s,".".concat(i))}return h}var x5=!1;function N0(){d.autoAddCss&&!x5&&(h4(M2()),x5=!0)}var c4={mixout:function(){return{dom:{css:M2,insertCss:N0}}},hooks:function(){return{beforeDOMElementCreation:function(){N0()},beforeI2svg:function(){N0()}}}},j=Y||{};j[R]||(j[R]={});j[R].styles||(j[R].styles={});j[R].hooks||(j[R].hooks={});j[R].shims||(j[R].shims=[]);var _=j[R],m2=[],V2=function(){m.removeEventListener("DOMContentLoaded",V2),O0=1,m2.map(function(t){return t()})},O0=!1;U&&(O0=(m.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(m.readyState),O0||m.addEventListener("DOMContentLoaded",V2));function n4(a){U&&(O0?setTimeout(a,0):m2.push(a))}function x0(a){var t=a.tag,l=a.attributes,i=l===void 0?{}:l,h=a.children,e=h===void 0?[]:h;return typeof a=="string"?x2(a):"<".concat(t," ").concat(r4(i),">").concat(e.map(x0).join(""),"</").concat(t,">")}function M5(a,t,l){if(a&&a[t]&&a[t][l])return{prefix:t,iconName:l,icon:a[t][l]}}var w4=function(t,l){return function(i,h,e,r){return t.call(l,i,h,e,r)}},a1=function(t,l,i,h){var e=Object.keys(t),r=e.length,s=h!==void 0?w4(l,h):l,o,c,p;for(i===void 0?(o=1,p=t[e[0]]):(o=0,p=i);o<r;o++)c=e[o],p=s(p,t[c],c,t);return p};function H2(a){return D(a).length!==1?null:a.codePointAt(0).toString(16)}function m5(a){return Object.keys(a).reduce(function(t,l){var i=a[l],h=!!i.icon;return h?t[i.iconName]=i.icon:t[l]=i,t},{})}function c1(a,t){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=l.skipHooks,h=i===void 0?!1:i,e=m5(t);typeof _.hooks.addPack=="function"&&!h?_.hooks.addPack(a,m5(t)):_.styles[a]=v(v({},_.styles[a]||{}),e),a==="fas"&&c1("fa",t)}var b0=_.styles,g4=_.shims,C2=Object.keys(m1),d4=C2.reduce(function(a,t){return a[t]=Object.keys(m1[t]),a},{}),C1=null,A2={},Z2={},L2={},B2={},F2={};function p4(a){return~a4.indexOf(a)}function f4(a,t){var l=t.split("-"),i=l[0],h=l.slice(1).join("-");return i===a&&h!==""&&!p4(h)?h:null}var k2=function(){var t=function(e){return a1(b0,function(r,s,o){return r[o]=a1(s,e,{}),r},{})};A2=t(function(h,e,r){if(e[3]&&(h[e[3]]=r),e[2]){var s=e[2].filter(function(o){return typeof o=="number"});s.forEach(function(o){h[o.toString(16)]=r})}return h}),Z2=t(function(h,e,r){if(h[r]=r,e[2]){var s=e[2].filter(function(o){return typeof o=="string"});s.forEach(function(o){h[o]=r})}return h}),F2=t(function(h,e,r){var s=e[2];return h[r]=r,s.forEach(function(o){h[o]=r}),h});var l="far"in b0||d.autoFetchSvg,i=a1(g4,function(h,e){var r=e[0],s=e[1],o=e[2];return s==="far"&&!l&&(s="fas"),typeof r=="string"&&(h.names[r]={prefix:s,iconName:o}),typeof r=="number"&&(h.unicodes[r.toString(16)]={prefix:s,iconName:o}),h},{names:{},unicodes:{}});L2=i.names,B2=i.unicodes,C1=j0(d.styleDefault,{family:d.familyDefault})};i4(function(a){C1=j0(a.styleDefault,{family:d.familyDefault})});k2();function A1(a,t){return(A2[a]||{})[t]}function b4(a,t){return(Z2[a]||{})[t]}function l0(a,t){return(F2[a]||{})[t]}function y2(a){return L2[a]||{prefix:null,iconName:null}}function u4(a){var t=B2[a],l=A1("fas",a);return t||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function J(){return C1}var S2=function(){return{prefix:null,iconName:null,rest:[]}};function z4(a){var t=Z,l=C2.reduce(function(i,h){return i[h]="".concat(d.cssPrefix,"-").concat(h),i},{});return v2.forEach(function(i){(a.includes(l[i])||a.some(function(h){return d4[i].includes(h)}))&&(t=i)}),t}function j0(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=t.family,i=l===void 0?Z:l,h=Q6[i][a];if(i===u0&&!a)return"fad";var e=b5[i][a]||b5[i][h],r=a in _.styles?a:null,s=e||r||null;return s}function x4(a){var t=[],l=null;return a.forEach(function(i){var h=f4(d.cssPrefix,i);h?l=h:i&&t.push(i)}),{iconName:l,rest:t}}function V5(a){return a.sort().filter(function(t,l,i){return i.indexOf(t)===l})}var H5=n2.concat(c2);function U0(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=t.skipLookups,i=l===void 0?!1:l,h=null,e=V5(a.filter(function(u){return H5.includes(u)})),r=V5(a.filter(function(u){return!H5.includes(u)})),s=e.filter(function(u){return h=u,!G5.includes(u)}),o=q0(s,1),c=o[0],p=c===void 0?null:c,w=z4(e),z=v(v({},x4(r)),{},{prefix:j0(p,{family:w})});return v(v(v({},z),H4({values:a,family:w,styles:b0,config:d,canonical:z,givenPrefix:h})),M4(i,h,z))}function M4(a,t,l){var i=l.prefix,h=l.iconName;if(a||!i||!h)return{prefix:i,iconName:h};var e=t==="fa"?y2(h):{},r=l0(i,h);return h=e.iconName||r||h,i=e.prefix||i,i==="far"&&!b0.far&&b0.fas&&!d.autoFetchSvg&&(i="fas"),{prefix:i,iconName:h}}var m4=v2.filter(function(a){return a!==Z||a!==u0}),V4=Object.keys(h1).filter(function(a){return a!==Z}).map(function(a){return Object.keys(h1[a])}).flat();function H4(a){var t=a.values,l=a.family,i=a.canonical,h=a.givenPrefix,e=h===void 0?"":h,r=a.styles,s=r===void 0?{}:r,o=a.config,c=o===void 0?{}:o,p=l===u0,w=t.includes("fa-duotone")||t.includes("fad"),z=c.familyDefault==="duotone",u=i.prefix==="fad"||i.prefix==="fa-duotone";if(!p&&(w||z||u)&&(i.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(i.prefix="fab"),!i.prefix&&m4.includes(l)){var H=Object.keys(s).find(function(L){return V4.includes(L)});if(H||c.autoFetchSvg){var V=j3.get(l).defaultShortPrefixId;i.prefix=V,i.iconName=l0(i.prefix,i.iconName)||i.iconName}}return(i.prefix==="fa"||e==="fa")&&(i.prefix=J()||"fas"),i}var C4=(function(){function a(){c3(this,a),this.definitions={}}return n3(a,[{key:"add",value:function(){for(var l=this,i=arguments.length,h=new Array(i),e=0;e<i;e++)h[e]=arguments[e];var r=h.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(s){l.definitions[s]=v(v({},l.definitions[s]||{}),r[s]),c1(s,r[s]);var o=m1[Z][s];o&&c1(o,r[s]),k2()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(l,i){var h=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(h).map(function(e){var r=h[e],s=r.prefix,o=r.iconName,c=r.icon,p=c[2];l[s]||(l[s]={}),p.length>0&&p.forEach(function(w){typeof w=="string"&&(l[s][w]=c)}),l[s][o]=c}),l}}])})(),C5=[],s0={},o0={},A4=Object.keys(o0);function Z4(a,t){var l=t.mixoutsTo;return C5=a,s0={},Object.keys(o0).forEach(function(i){A4.indexOf(i)===-1&&delete o0[i]}),C5.forEach(function(i){var h=i.mixout?i.mixout():{};if(Object.keys(h).forEach(function(r){typeof h[r]=="function"&&(l[r]=h[r]),D0(h[r])==="object"&&Object.keys(h[r]).forEach(function(s){l[r]||(l[r]={}),l[r][s]=h[r][s]})}),i.hooks){var e=i.hooks();Object.keys(e).forEach(function(r){s0[r]||(s0[r]=[]),s0[r].push(e[r])})}i.provides&&i.provides(o0)}),l}function n1(a,t){for(var l=arguments.length,i=new Array(l>2?l-2:0),h=2;h<l;h++)i[h-2]=arguments[h];var e=s0[a]||[];return e.forEach(function(r){t=r.apply(null,[t].concat(i))}),t}function i0(a){for(var t=arguments.length,l=new Array(t>1?t-1:0),i=1;i<t;i++)l[i-1]=arguments[i];var h=s0[a]||[];h.forEach(function(e){e.apply(null,l)})}function Q(){var a=arguments[0],t=Array.prototype.slice.call(arguments,1);return o0[a]?o0[a].apply(null,t):void 0}function w1(a){a.prefix==="fa"&&(a.prefix="fas");var t=a.iconName,l=a.prefix||J();if(t)return t=l0(l,t)||t,M5(P2.definitions,l,t)||M5(_.styles,l,t)}var P2=new C4,L4=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,i0("noAuto")},B4={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return U?(i0("beforeI2svg",t),Q("pseudoElements2svg",t),Q("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=t.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,n4(function(){k4({autoReplaceSvgRoot:l}),i0("watch",t)})}},F4={icon:function(t){if(t===null)return null;if(D0(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:l0(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var l=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],i=j0(t[0]);return{prefix:i,iconName:l0(i,l)||l}}if(typeof t=="string"&&(t.indexOf("".concat(d.cssPrefix,"-"))>-1||t.match(K6))){var h=U0(t.split(" "),{skipLookups:!0});return{prefix:h.prefix||J(),iconName:l0(h.prefix,h.iconName)||h.iconName}}if(typeof t=="string"){var e=J();return{prefix:e,iconName:l0(e,t)||t}}}},S={noAuto:L4,config:d,dom:B4,parse:F4,library:P2,findIconDefinition:w1,toHtml:x0},k4=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=t.autoReplaceSvgRoot,i=l===void 0?m:l;(Object.keys(_.styles).length>0||d.autoFetchSvg)&&U&&d.autoReplaceSvg&&S.dom.i2svg({node:i})};function W0(a,t){return Object.defineProperty(a,"abstract",{get:t}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(i){return x0(i)})}}),Object.defineProperty(a,"node",{get:function(){if(U){var i=m.createElement("div");return i.innerHTML=a.html,i.children}}}),a}function y4(a){var t=a.children,l=a.main,i=a.mask,h=a.attributes,e=a.styles,r=a.transform;if(H1(r)&&l.found&&!i.found){var s=l.width,o=l.height,c={x:s/o/2,y:.5};h.style=R0(v(v({},e),{},{"transform-origin":"".concat(c.x+r.x/16,"em ").concat(c.y+r.y/16,"em")}))}return[{tag:"svg",attributes:h,children:t}]}function S4(a){var t=a.prefix,l=a.iconName,i=a.children,h=a.attributes,e=a.symbol,r=e===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(l):e;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},h),{},{id:r}),children:i}]}]}function P4(a){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(l){return l in a})}function Z1(a){var t=a.icons,l=t.main,i=t.mask,h=a.prefix,e=a.iconName,r=a.transform,s=a.symbol,o=a.maskId,c=a.extra,p=a.watchable,w=p===void 0?!1:p,z=i.found?i:l,u=z.width,H=z.height,V=[d.replacementClass,e?"".concat(d.cssPrefix,"-").concat(e):""].filter(function(q){return c.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(c.classes).join(" "),L={children:[],attributes:v(v({},c.attributes),{},{"data-prefix":h,"data-icon":e,class:V,role:c.attributes.role||"img",viewBox:"0 0 ".concat(u," ").concat(H)})};!P4(c.attributes)&&!c.attributes["aria-hidden"]&&(L.attributes["aria-hidden"]="true"),w&&(L.attributes[t0]="");var C=v(v({},L),{},{prefix:h,iconName:e,main:l,mask:i,maskId:o,transform:r,symbol:s,styles:v({},c.styles)}),F=i.found&&l.found?Q("generateAbstractMask",C)||{children:[],attributes:{}}:Q("generateAbstractIcon",C)||{children:[],attributes:{}},P=F.children,h0=F.attributes;return C.children=P,C.attributes=h0,s?S4(C):y4(C)}function A5(a){var t=a.content,l=a.width,i=a.height,h=a.transform,e=a.extra,r=a.watchable,s=r===void 0?!1:r,o=v(v({},e.attributes),{},{class:e.classes.join(" ")});s&&(o[t0]="");var c=v({},e.styles);H1(h)&&(c.transform=o4({transform:h,startCentered:!0,width:l,height:i}),c["-webkit-transform"]=c.transform);var p=R0(c);p.length>0&&(o.style=p);var w=[];return w.push({tag:"span",attributes:o,children:[t]}),w}function _4(a){var t=a.content,l=a.extra,i=v(v({},l.attributes),{},{class:l.classes.join(" ")}),h=R0(l.styles);h.length>0&&(i.style=h);var e=[];return e.push({tag:"span",attributes:i,children:[t]}),e}var l1=_.styles;function g1(a){var t=a[0],l=a[1],i=a.slice(4),h=q0(i,1),e=h[0],r=null;return Array.isArray(e)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(I0.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(I0.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(I0.PRIMARY),fill:"currentColor",d:e[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:t,height:l,icon:r}}var D4={found:!1,width:512,height:512};function O4(a,t){!f2&&!d.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(t,'" is missing.'))}function d1(a,t){var l=t;return t==="fa"&&d.styleDefault!==null&&(t=J()),new Promise(function(i,h){if(l==="fa"){var e=y2(a)||{};a=e.iconName||a,t=e.prefix||t}if(a&&t&&l1[t]&&l1[t][a]){var r=l1[t][a];return i(g1(r))}O4(a,t),i(v(v({},D4),{},{icon:d.showMissingIcons&&a?Q("missingIconAbstract")||{}:{}}))})}var Z5=function(){},p1=d.measurePerformance&&k0&&k0.mark&&k0.measure?k0:{mark:Z5,measure:Z5},d0='FA "7.1.0"',T4=function(t){return p1.mark("".concat(d0," ").concat(t," begins")),function(){return _2(t)}},_2=function(t){p1.mark("".concat(d0," ").concat(t," ends")),p1.measure("".concat(d0," ").concat(t),"".concat(d0," ").concat(t," begins"),"".concat(d0," ").concat(t," ends"))},L1={begin:T4,end:_2},P0=function(){};function L5(a){var t=a.getAttribute?a.getAttribute(t0):null;return typeof t=="string"}function q4(a){var t=a.getAttribute?a.getAttribute(x1):null,l=a.getAttribute?a.getAttribute(M1):null;return t&&l}function R4(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(d.replacementClass)}function j4(){if(d.autoReplaceSvg===!0)return _0.replace;var a=_0[d.autoReplaceSvg];return a||_0.replace}function U4(a){return m.createElementNS("http://www.w3.org/2000/svg",a)}function W4(a){return m.createElement(a)}function D2(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=t.ceFn,i=l===void 0?a.tag==="svg"?U4:W4:l;if(typeof a=="string")return m.createTextNode(a);var h=i(a.tag);Object.keys(a.attributes||[]).forEach(function(r){h.setAttribute(r,a.attributes[r])});var e=a.children||[];return e.forEach(function(r){h.appendChild(D2(r,{ceFn:i}))}),h}function $4(a){var t=" ".concat(a.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var _0={replace:function(t){var l=t[0];if(l.parentNode)if(t[1].forEach(function(h){l.parentNode.insertBefore(D2(h),l)}),l.getAttribute(t0)===null&&d.keepOriginalSource){var i=m.createComment($4(l));l.parentNode.replaceChild(i,l)}else l.remove()},nest:function(t){var l=t[0],i=t[1];if(~V1(l).indexOf(d.replacementClass))return _0.replace(t);var h=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var e=i[0].attributes.class.split(" ").reduce(function(s,o){return o===d.replacementClass||o.match(h)?s.toSvg.push(o):s.toNode.push(o),s},{toNode:[],toSvg:[]});i[0].attributes.class=e.toSvg.join(" "),e.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",e.toNode.join(" "))}var r=i.map(function(s){return x0(s)}).join(`
`);l.setAttribute(t0,""),l.innerHTML=r}};function B5(a){a()}function O2(a,t){var l=typeof t=="function"?t:P0;if(a.length===0)l();else{var i=B5;d.mutateApproach===Y6&&(i=Y.requestAnimationFrame||B5),i(function(){var h=j4(),e=L1.begin("mutate");a.map(h),e(),l()})}}var B1=!1;function T2(){B1=!0}function f1(){B1=!1}var T0=null;function F5(a){if(g5&&d.observeMutations){var t=a.treeCallback,l=t===void 0?P0:t,i=a.nodeCallback,h=i===void 0?P0:i,e=a.pseudoElementsCallback,r=e===void 0?P0:e,s=a.observeMutationsRoot,o=s===void 0?m:s;T0=new g5(function(c){if(!B1){var p=J();c0(c).forEach(function(w){if(w.type==="childList"&&w.addedNodes.length>0&&!L5(w.addedNodes[0])&&(d.searchPseudoElements&&r(w.target),l(w.target)),w.type==="attributes"&&w.target.parentNode&&d.searchPseudoElements&&r([w.target],!0),w.type==="attributes"&&L5(w.target)&&~N6.indexOf(w.attributeName))if(w.attributeName==="class"&&q4(w.target)){var z=U0(V1(w.target)),u=z.prefix,H=z.iconName;w.target.setAttribute(x1,u||p),H&&w.target.setAttribute(M1,H)}else R4(w.target)&&h(w.target)})}}),U&&T0.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function X4(){T0&&T0.disconnect()}function G4(a){var t=a.getAttribute("style"),l=[];return t&&(l=t.split(";").reduce(function(i,h){var e=h.split(":"),r=e[0],s=e.slice(1);return r&&s.length>0&&(i[r]=s.join(":").trim()),i},{})),l}function Y4(a){var t=a.getAttribute("data-prefix"),l=a.getAttribute("data-icon"),i=a.innerText!==void 0?a.innerText.trim():"",h=U0(V1(a));return h.prefix||(h.prefix=J()),t&&l&&(h.prefix=t,h.iconName=l),h.iconName&&h.prefix||(h.prefix&&i.length>0&&(h.iconName=b4(h.prefix,a.innerText)||A1(h.prefix,H2(a.innerText))),!h.iconName&&d.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(h.iconName=a.firstChild.data)),h}function J4(a){var t=c0(a.attributes).reduce(function(l,i){return l.name!=="class"&&l.name!=="style"&&(l[i.name]=i.value),l},{});return t}function Q4(){return{iconName:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k5(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},l=Y4(a),i=l.iconName,h=l.prefix,e=l.rest,r=J4(a),s=n1("parseNodeAttributes",{},a),o=t.styleParser?G4(a):[];return v({iconName:i,prefix:h,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:o,attributes:r}},s)}var K4=_.styles;function q2(a){var t=d.autoReplaceSvg==="nest"?k5(a,{styleParser:!1}):k5(a);return~t.extra.classes.indexOf(u2)?Q("generateLayersText",a,t):Q("generateSvgReplacementMutation",a,t)}function E4(){return[].concat(D(c2),D(n2))}function y5(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!U)return Promise.resolve();var l=m.documentElement.classList,i=function(w){return l.add("".concat(f5,"-").concat(w))},h=function(w){return l.remove("".concat(f5,"-").concat(w))},e=d.autoFetchSvg?E4():G5.concat(Object.keys(K4));e.includes("fa")||e.push("fa");var r=[".".concat(u2,":not([").concat(t0,"])")].concat(e.map(function(p){return".".concat(p,":not([").concat(t0,"])")})).join(", ");if(r.length===0)return Promise.resolve();var s=[];try{s=c0(a.querySelectorAll(r))}catch{}if(s.length>0)i("pending"),h("complete");else return Promise.resolve();var o=L1.begin("onTree"),c=s.reduce(function(p,w){try{var z=q2(w);z&&p.push(z)}catch(u){f2||u.name==="MissingIcon"&&console.error(u)}return p},[]);return new Promise(function(p,w){Promise.all(c).then(function(z){O2(z,function(){i("active"),i("complete"),h("pending"),typeof t=="function"&&t(),o(),p()})}).catch(function(z){o(),w(z)})})}function I4(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;q2(a).then(function(l){l&&O2([l],t)})}function N4(a){return function(t){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(t||{}).icon?t:w1(t||{}),h=l.mask;return h&&(h=(h||{}).icon?h:w1(h||{})),a(i,v(v({},l),{},{mask:h}))}}var aa=function(t){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=l.transform,h=i===void 0?T:i,e=l.symbol,r=e===void 0?!1:e,s=l.mask,o=s===void 0?null:s,c=l.maskId,p=c===void 0?null:c,w=l.classes,z=w===void 0?[]:w,u=l.attributes,H=u===void 0?{}:u,V=l.styles,L=V===void 0?{}:V;if(t){var C=t.prefix,F=t.iconName,P=t.icon;return W0(v({type:"icon"},t),function(){return i0("beforeDOMElementCreation",{iconDefinition:t,params:l}),Z1({icons:{main:g1(P),mask:o?g1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:F,transform:v(v({},T),h),symbol:r,maskId:p,extra:{attributes:H,styles:L,classes:z}})})}},la={mixout:function(){return{icon:N4(aa)}},hooks:function(){return{mutationObserverCallbacks:function(l){return l.treeCallback=y5,l.nodeCallback=I4,l}}},provides:function(t){t.i2svg=function(l){var i=l.node,h=i===void 0?m:i,e=l.callback,r=e===void 0?function(){}:e;return y5(h,r)},t.generateSvgReplacementMutation=function(l,i){var h=i.iconName,e=i.prefix,r=i.transform,s=i.symbol,o=i.mask,c=i.maskId,p=i.extra;return new Promise(function(w,z){Promise.all([d1(h,e),o.iconName?d1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(u){var H=q0(u,2),V=H[0],L=H[1];w([l,Z1({icons:{main:V,mask:L},prefix:e,iconName:h,transform:r,symbol:s,maskId:c,extra:p,watchable:!0})])}).catch(z)})},t.generateAbstractIcon=function(l){var i=l.children,h=l.attributes,e=l.main,r=l.transform,s=l.styles,o=R0(s);o.length>0&&(h.style=o);var c;return H1(r)&&(c=Q("generateAbstractTransformGrouping",{main:e,transform:r,containerWidth:e.width,iconWidth:e.width})),i.push(c||e.icon),{children:i,attributes:h}}}},ta={mixout:function(){return{layer:function(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.classes,e=h===void 0?[]:h;return W0({type:"layer"},function(){i0("beforeDOMElementCreation",{assembler:l,params:i});var r=[];return l(function(s){Array.isArray(s)?s.map(function(o){r=r.concat(o.abstract)}):r=r.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(D(e)).join(" ")},children:r}]})}}}},ia={mixout:function(){return{counter:function(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.title,e=h===void 0?null:h,r=i.classes,s=r===void 0?[]:r,o=i.attributes,c=o===void 0?{}:o,p=i.styles,w=p===void 0?{}:p;return W0({type:"counter",content:l},function(){return i0("beforeDOMElementCreation",{content:l,params:i}),_4({content:l.toString(),title:e,extra:{attributes:c,styles:w,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(D(s))}})})}}}},ha={mixout:function(){return{text:function(l){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=i.transform,e=h===void 0?T:h,r=i.classes,s=r===void 0?[]:r,o=i.attributes,c=o===void 0?{}:o,p=i.styles,w=p===void 0?{}:p;return W0({type:"text",content:l},function(){return i0("beforeDOMElementCreation",{content:l,params:i}),A5({content:l,transform:v(v({},T),e),extra:{attributes:c,styles:w,classes:["".concat(d.cssPrefix,"-layers-text")].concat(D(s))}})})}}},provides:function(t){t.generateLayersText=function(l,i){var h=i.transform,e=i.extra,r=null,s=null;if($5){var o=parseInt(getComputedStyle(l).fontSize,10),c=l.getBoundingClientRect();r=c.width/o,s=c.height/o}return Promise.resolve([l,A5({content:l.innerHTML,width:r,height:s,transform:h,extra:e,watchable:!0})])}}},R2=new RegExp('"',"ug"),S5=[1105920,1112319],P5=v(v(v(v({},{FontAwesome:{normal:"fas",400:"fas"}}),R3),X6),Q3),b1=Object.keys(P5).reduce(function(a,t){return a[t.toLowerCase()]=P5[t],a},{}),ea=Object.keys(b1).reduce(function(a,t){var l=b1[t];return a[t]=l[900]||D(Object.entries(l))[0][1],a},{});function ra(a){var t=a.replace(R2,"");return H2(D(t)[0]||"")}function sa(a){var t=a.getPropertyValue("font-feature-settings").includes("ss01"),l=a.getPropertyValue("content"),i=l.replace(R2,""),h=i.codePointAt(0),e=h>=S5[0]&&h<=S5[1],r=i.length===2?i[0]===i[1]:!1;return e||r||t}function oa(a,t){var l=a.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(t),h=isNaN(i)?"normal":i;return(b1[l]||{})[h]||ea[l]}function _5(a,t){var l="".concat(G6).concat(t.replace(":","-"));return new Promise(function(i,h){if(a.getAttribute(l)!==null)return i();var e=c0(a.children),r=e.filter(function(X0){return X0.getAttribute(r1)===t})[0],s=Y.getComputedStyle(a,t),o=s.getPropertyValue("font-family"),c=o.match(E6),p=s.getPropertyValue("font-weight"),w=s.getPropertyValue("content");if(r&&!c)return a.removeChild(r),i();if(c&&w!=="none"&&w!==""){var z=s.getPropertyValue("content"),u=oa(o,p),H=ra(z),V=c[0].startsWith("FontAwesome"),L=sa(s),C=A1(u,H),F=C;if(V){var P=u4(H);P.iconName&&P.prefix&&(C=P.iconName,u=P.prefix)}if(C&&!L&&(!r||r.getAttribute(x1)!==u||r.getAttribute(M1)!==F)){a.setAttribute(l,F),r&&a.removeChild(r);var h0=Q4(),q=h0.extra;q.attributes[r1]=t,d1(C,u).then(function(X0){var X2=Z1(v(v({},h0),{},{icons:{main:X0,mask:S2()},prefix:u,iconName:F,extra:q,watchable:!0})),G0=m.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?a.insertBefore(G0,a.firstChild):a.appendChild(G0),G0.outerHTML=X2.map(function(G2){return x0(G2)}).join(`
`),a.removeAttribute(l),i()}).catch(h)}else i()}else i()})}function va(a){return Promise.all([_5(a,"::before"),_5(a,"::after")])}function ca(a){return a.parentNode!==document.head&&!~J6.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(r1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}var na=function(t){return!!t&&p2.some(function(l){return t.includes(l)})},wa=function(t){if(!t)return[];var l=new Set,i=t.split(/,(?![^()]*\))/).map(function(o){return o.trim()});i=i.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(c){return c.trim()})});var h=S0(i),e;try{for(h.s();!(e=h.n()).done;){var r=e.value;if(na(r)){var s=p2.reduce(function(o,c){return o.replace(c,"")},r);s!==""&&s!=="*"&&l.add(s)}}}catch(o){h.e(o)}finally{h.f()}return l};function D5(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(U){var l;if(t)l=a;else if(d.searchPseudoElementsFullScan)l=a.querySelectorAll("*");else{var i=new Set,h=S0(document.styleSheets),e;try{for(h.s();!(e=h.n()).done;){var r=e.value;try{var s=S0(r.cssRules),o;try{for(s.s();!(o=s.n()).done;){var c=o.value,p=wa(c.selectorText),w=S0(p),z;try{for(w.s();!(z=w.n()).done;){var u=z.value;i.add(u)}}catch(V){w.e(V)}finally{w.f()}}}catch(V){s.e(V)}finally{s.f()}}catch(V){d.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(r.href," (").concat(V.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(V){h.e(V)}finally{h.f()}if(!i.size)return;var H=Array.from(i).join(", ");try{l=a.querySelectorAll(H)}catch{}}return new Promise(function(V,L){var C=c0(l).filter(ca).map(va),F=L1.begin("searchPseudoElements");T2(),Promise.all(C).then(function(){F(),f1(),V()}).catch(function(){F(),f1(),L()})})}}var ga={hooks:function(){return{mutationObserverCallbacks:function(l){return l.pseudoElementsCallback=D5,l}}},provides:function(t){t.pseudoElements2svg=function(l){var i=l.node,h=i===void 0?m:i;d.searchPseudoElements&&D5(h)}}},O5=!1,da={mixout:function(){return{dom:{unwatch:function(){T2(),O5=!0}}}},hooks:function(){return{bootstrap:function(){F5(n1("mutationObserverCallbacks",{}))},noAuto:function(){X4()},watch:function(l){var i=l.observeMutationsRoot;O5?f1():F5(n1("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},T5=function(t){var l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(i,h){var e=h.toLowerCase().split("-"),r=e[0],s=e.slice(1).join("-");if(r&&s==="h")return i.flipX=!0,i;if(r&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(r){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},l)},pa={mixout:function(){return{parse:{transform:function(l){return T5(l)}}}},hooks:function(){return{parseNodeAttributes:function(l,i){var h=i.getAttribute("data-fa-transform");return h&&(l.transform=T5(h)),l}}},provides:function(t){t.generateAbstractTransformGrouping=function(l){var i=l.main,h=l.transform,e=l.containerWidth,r=l.iconWidth,s={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(h.x*32,", ").concat(h.y*32,") "),c="scale(".concat(h.size/16*(h.flipX?-1:1),", ").concat(h.size/16*(h.flipY?-1:1),") "),p="rotate(".concat(h.rotate," 0 0)"),w={transform:"".concat(o," ").concat(c," ").concat(p)},z={transform:"translate(".concat(r/2*-1," -256)")},u={outer:s,inner:w,path:z};return{tag:"g",attributes:v({},u.outer),children:[{tag:"g",attributes:v({},u.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:v(v({},i.icon.attributes),u.path)}]}]}}}},t1={x:0,y:0,width:"100%",height:"100%"};function q5(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||t)&&(a.attributes.fill="black"),a}function fa(a){return a.tag==="g"?a.children:[a]}var ba={hooks:function(){return{parseNodeAttributes:function(l,i){var h=i.getAttribute("data-fa-mask"),e=h?U0(h.split(" ").map(function(r){return r.trim()})):S2();return e.prefix||(e.prefix=J()),l.mask=e,l.maskId=i.getAttribute("data-fa-mask-id"),l}}},provides:function(t){t.generateAbstractMask=function(l){var i=l.children,h=l.attributes,e=l.main,r=l.mask,s=l.maskId,o=l.transform,c=e.width,p=e.icon,w=r.width,z=r.icon,u=s4({transform:o,containerWidth:w,iconWidth:c}),H={tag:"rect",attributes:v(v({},t1),{},{fill:"white"})},V=p.children?{children:p.children.map(q5)}:{},L={tag:"g",attributes:v({},u.inner),children:[q5(v({tag:p.tag,attributes:v(v({},p.attributes),u.path)},V))]},C={tag:"g",attributes:v({},u.outer),children:[L]},F="mask-".concat(s||z5()),P="clip-".concat(s||z5()),h0={tag:"mask",attributes:v(v({},t1),{},{id:F,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[H,C]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:fa(z)},h0]};return i.push(q,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(F,")")},t1)}),{children:i,attributes:h}}}},ua={provides:function(t){var l=!1;Y.matchMedia&&(l=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var i=[],h={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:v(v({},h),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var r=v(v({},e),{},{attributeName:"opacity"}),s={tag:"circle",attributes:v(v({},h),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||s.children.push({tag:"animate",attributes:v(v({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},r),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:v(v({},h),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:v(v({},r),{},{values:"1;0;0;0;0;1;"})}]}),l||i.push({tag:"path",attributes:v(v({},h),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},za={hooks:function(){return{parseNodeAttributes:function(l,i){var h=i.getAttribute("data-fa-symbol"),e=h===null?!1:h===""?!0:h;return l.symbol=e,l}}}},xa=[c4,la,ta,ia,ha,ga,da,pa,ba,ua,za];Z4(xa,{mixoutsTo:S});var b7=S.noAuto,Ma=S.config,u7=S.library,ma=S.dom,Va=S.parse,z7=S.findIconDefinition,x7=S.toHtml,Ha=S.icon,M7=S.layer,Ca=S.text,Aa=S.counter;var j2=(()=>{class a{static \u0275fac=function(i){return new(i||a)};static \u0275mod=X({type:a});static \u0275inj=W({})}return a})();var Ba=new k1("ngx-bootstrap-icons-module-configuration");var F1=class{constructor(t){this._icons=t}};var U2=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower1" viewBox="0 0 16 16">
  <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826zM8 1a1 1 0 0 0-.998 1.03l.01.091c.012.077.029.176.054.296.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a4.997 4.997 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1zM2 9l.03-.002.091-.01a4.99 4.99 0 0 0 .296-.054c.241-.049.542-.122.887-.213a60.59 60.59 0 0 0 2.314-.676L5.762 8l-.144-.045a60.59 60.59 0 0 0-2.314-.676 16.705 16.705 0 0 0-.887-.213 4.99 4.99 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2zm7 5-.002-.03a5.005 5.005 0 0 0-.064-.386 16.398 16.398 0 0 0-.213-.888 60.582 60.582 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a4.996 4.996 0 0 0-.064.386L7 14a1 1 0 1 0 2 0zm-5.696-2.134.025-.017a5.001 5.001 0 0 0 .303-.248c.184-.164.408-.377.661-.629A60.614 60.614 0 0 0 5.96 9.23l.103-.111-.147.033a60.88 60.88 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5.063 5.063 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027c.01-.02.021-.048.036-.084a5.09 5.09 0 0 0 .102-.283c.078-.233.165-.53.258-.874a60.6 60.6 0 0 0 .572-2.343l.033-.147-.11.102a60.848 60.848 0 0 0-1.743 1.667 17.07 17.07 0 0 0-.629.66 5.06 5.06 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366zm9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a4.951 4.951 0 0 0-.303.248 16.69 16.69 0 0 0-.661.629A60.72 60.72 0 0 0 10.04 6.77l-.102.111.147-.033a60.6 60.6 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a4.993 4.993 0 0 0 .367-.138.53.53 0 0 0 .027-.014zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027c-.01.02-.021.048-.036.084a5.09 5.09 0 0 0-.102.283c-.078.233-.165.53-.258.875a60.62 60.62 0 0 0-.572 2.342l-.033.147.11-.102a60.848 60.848 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5.001 5.001 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366zM14 9a1 1 0 0 0 0-2l-.03.002a4.996 4.996 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a4.996 4.996 0 0 0 .386.064L14 9zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035c.072.03.166.064.283.103.233.078.53.165.874.258a60.88 60.88 0 0 0 2.343.572l.147.033-.103-.111a60.584 60.584 0 0 0-1.666-1.742 16.705 16.705 0 0 0-.66-.629 4.996 4.996 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366zm2.196-1.196.017.025a4.996 4.996 0 0 0 .248.303c.164.184.377.408.629.661A60.597 60.597 0 0 0 6.77 5.96l.111.102-.033-.147a60.602 60.602 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5.006 5.006 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1zm9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a60.619 60.619 0 0 0-2.342-.572l-.147-.033.102.111a60.73 60.73 0 0 0 1.667 1.742c.253.252.477.465.66.629a4.946 4.946 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366zm-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5.065 5.065 0 0 0-.248-.303 16.705 16.705 0 0 0-.629-.661A60.462 60.462 0 0 0 9.23 10.04l-.111-.102.033.147a60.6 60.6 0 0 0 .572 2.342c.093.345.18.642.258.875a4.985 4.985 0 0 0 .138.367.575.575 0 0 0 .014.027zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
</svg>`,W2=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-flower2" viewBox="0 0 16 16">
  <path d="M8 16a4 4 0 0 0 4-4 4 4 0 0 0 0-8 4 4 0 0 0-8 0 4 4 0 1 0 0 8 4 4 0 0 0 4 4zm3-12c0 .073-.01.155-.03.247-.544.241-1.091.638-1.598 1.084A2.987 2.987 0 0 0 8 5c-.494 0-.96.12-1.372.331-.507-.446-1.054-.843-1.597-1.084A1.117 1.117 0 0 1 5 4a3 3 0 0 1 6 0zm-.812 6.052A2.99 2.99 0 0 0 11 8a2.99 2.99 0 0 0-.812-2.052c.215-.18.432-.346.647-.487C11.34 5.131 11.732 5 12 5a3 3 0 1 1 0 6c-.268 0-.66-.13-1.165-.461a6.833 6.833 0 0 1-.647-.487zm-3.56.617a3.001 3.001 0 0 0 2.744 0c.507.446 1.054.842 1.598 1.084.02.091.03.174.03.247a3 3 0 1 1-6 0c0-.073.01-.155.03-.247.544-.242 1.091-.638 1.598-1.084zm-.816-4.721A2.99 2.99 0 0 0 5 8c0 .794.308 1.516.812 2.052a6.83 6.83 0 0 1-.647.487C4.66 10.869 4.268 11 4 11a3 3 0 0 1 0-6c.268 0 .66.13 1.165.461.215.141.432.306.647.487zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
</svg>`;var $2=(()=>{class a{static pick(l,i){return{ngModule:a,providers:[{provide:F1,multi:!0,useValue:l},{provide:Ba,useValue:i}]}}}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=X({type:a}),a.\u0275inj=W({}),a})();var Fa={flower1:U2,flower2:W2},$0=class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=X({type:a,bootstrap:[F0]});static \u0275inj=W({providers:[S1(),N1(Q0),Q1(J1())],imports:[Y1,e5,h5,g0,L0,j2,$2.pick(Fa)]})};G1().bootstrapModule($0,{}).catch(a=>console.error(a));
